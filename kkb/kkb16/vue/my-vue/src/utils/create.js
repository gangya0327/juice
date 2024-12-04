import Notice from '@/components/Notice.vue';
import Vue from 'vue';

function create(Component, props) {
  console.log('props :>> ', props);
  const vm = new Vue({
    render: (h) => h(Component, { props }),
  }).$mount(); // 不指定宿主元素，只会创建dom而不会追加到页面上
  // 获取真实dom
  document.body.appendChild(vm.$el);
  const comp = vm.$children[0];
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };
  return comp;
}

// export default create;
export default {
  install(Vue) {
    Vue.prototype.$notice = function (options) {
      return create(Notice, options);
    };
  },
};
