import Vue from 'vue';
import ElMessage from './index.vue';

const MessageConstructor = Vue.extend(ElMessage);
const instances = []; // 保存所有弹窗
const distance = 16; // 相邻弹窗间距

let seed = 1; // 给弹窗添加id

// 判断是否为VNode
const isVNode = (node) => {
  return typeof node === 'object' && node !== null && node.hasOwnProperty.call(node, 'componentOptions');
};

export const Message = (options) => {
  // 创建唯一的id
  let id = 'message_' + seed++;
  // 缓存关闭函数
  let userOnClose = options.onClose;
  // 重写关闭函数
  options.onClose = function () {
    Message.close(id, userOnClose);
  };
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }

  const instance = new MessageConstructor({
    data() {
      return options;
    },
  });

  instance.id = id;

  // 如果消息内容为VNode，则添加到$slots中
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  }
  instance.$mount();

  instance.visible = true;

  // 将offset覆盖verticalOffset
  let verticalOffset = options.offset || 20;
  // 统计所有消息弹窗高度
  verticalOffset = instances.reduce((acc, cur) => acc + cur.$el.offsetHeight + distance, verticalOffset);
  instance.verticalOffset = verticalOffset;

  instances.push(instance);

  document.body.appendChild(instance.$el);

  return instance;
};

// 重写关闭函数
Message.close = function (id, userOnClose) {
  let index = -1;
  let removeHeight = 0;
  let len = instances.length;
  for (let i = 0; i < len; i++) {
    // 找到当前要关闭的弹窗
    if (instances[i].id === id) {
      removeHeight = instances[i].$el.offsetHeight;
      index = i;
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
  if (index === -1 || index > instances.length - 1 || len <= 1) return;
  for (let i = index; i < len - 1; i++) {
    const dom = instances[i].$el;
    dom.style.top = parseInt(dom.style.top) - removeHeight - distance + 'px';
  }
};

// 关闭所有弹窗
Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

// 注册静态方法
[('success', 'warning', 'info', 'error')].forEach((type) => {
  // Message.success('消息')
  // this.$message.success('消息')
  Message[type] = (options) => {
    // 普通对象，不是VNode
    if (Object.prototype.toString.call(options) === '[object Object]' && isVNode(options)) {
      Message({
        type,
        ...options,
      });
    }
    // 字符串或VNode
    Message({
      type,
      message: options,
    });
  };
});
