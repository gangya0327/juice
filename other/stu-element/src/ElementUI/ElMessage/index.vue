<template>
  <transition name="slide-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      role="alert"
      :class="['el-message', 'el-message--' + type, { 'is-closable': showClose, 'is-center': center }, customClass]"
      :style="{ top: verticalOffset + 'px' }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i v-if="iconClass" :class="['el-message__icon', iconClass]"></i>
      <i v-else :class="['el-message__icon', 'el-icon-' + type]"></i>
      <slot>
        <p v-if="dangerouslyUseHTMLString" v-html="message" class="el-message__content"></p>
        <p v-else class="el-message__content">{{ message }}</p>
      </slot>
      <i v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElMessage',
  data() {
    return {
      message: '',
      visible: false,
      duration: 3000,
      timer: null,
      showClose: false,
      type: 'info',
      center: false,
      dangerouslyUseHTMLString: false,
      iconClass: '',
      customClass: '',
      verticalOffset: 20, // 距离顶部高度
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    // 启动定时器
    startTimer() {
      // 只有延迟超过0时，才会启用定时器，否则不关闭弹窗
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (this.visible) {
            this.close();
          }
        }, this.duration);
      }
    },
    close() {
      this.visible = false;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    // 清除定时器
    clearTimer() {
      clearTimeout(this.timer);
    },
    // 动画离开结束
    handleAfterLeave() {
      // 销毁组件
      this.$destroy();
      // 将DOM结构从页面移除
      this.$el.parentNode.removeChild(this.$el);
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate(-50%, -200px);
  opacity: 0;
}

.my-message {
  padding: 30px;
  border: 5px solid #858;
  border-radius: 20px;
  font-style: oblique;
}
</style>
