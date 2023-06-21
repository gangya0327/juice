<template>
  <div>
    <div class="row">
      <el-button @click="showMessage">发送消息提示</el-button>
      <el-button @click="showCustomMessage">自定义消息提示</el-button>
      <el-button @click="showVNode">VNode消息提示</el-button>
    </div>

    <div class="row">
      <el-button @click="showClosedMessage">可关闭消息提示</el-button>
    </div>

    <div class="row">
      <el-button type="success" @click="showTypeMessage('success')">成功消息提示</el-button>
      <el-button type="warning" @click="showTypeMessage('warning')">警告消息提示</el-button>
      <el-button type="primary" @click="showTypeMessage('info')">一般消息提示</el-button>
      <el-button type="danger" @click="showTypeMessage('error')">错误消息提示</el-button>
    </div>

    <div class="row">
      <el-button @click="showErrorMessage">静态方法消息提示</el-button>
    </div>

    <div class="row">
      <el-button @click="showCenterMessage">居中消息提示</el-button>
    </div>

    <div class="row">
      <el-button @click="showHTMLMessage">HTML消息提示</el-button>
    </div>

    <div class="row">
      <el-button @click="showIconMessage">自定义图标消息提示</el-button>
    </div>

    <div class="row">
      <el-button @click="showCustomClassMessage">自定义样式消息提示</el-button>
      <el-button @click="showOffsetMessage">偏移量消息提示</el-button>
    </div>

    <div class="row">
      <el-button @click="showCloseMessage">消息提示关闭回调函数</el-button>
    </div>

    <div class="row">
      <el-button @click="showCloseAllMessage">关闭所有消息提示弹窗</el-button>
    </div>

    <div class="row">
      <el-button @click="showInstanceMessage">创建消息提示实例</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage() {
      this.$message('我是一条消息');
    },
    // 发送自定义消息
    showCustomMessage() {
      this.$message({
        message: '我是一条自定义消息',
        duration: 1000,
      });
    },
    // 发送VNode消息
    showVNode() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [h('span', null, '内容可以是'), h('i', { style: 'color: teal' }, 'VNode')]),
        duration: 0,
      });
    },
    // 可关闭消息
    showClosedMessage() {
      this.$message({
        message: '我是一条自定义消息',
        showClose: true,
      });
    },
    // 不同类型消息
    showTypeMessage(type) {
      this.$message({
        message: '我是一条 ' + type + ' 消息',
        type,
        duration: 5000,
      });
    },
    // 静态方法消息
    showErrorMessage() {
      this.$message.error('我是一条消息');
    },
    showCenterMessage() {
      this.$message({
        message: '我是一条消息',
        center: true,
      });
    },
    showHTMLMessage() {
      this.$message({
        message: '<strong style="color: red;">我是一条&nbsp;消息</strong>',
        dangerouslyUseHTMLString: true,
      });
    },
    showIconMessage() {
      this.$message({
        message: '我是一条消息',
        iconClass: 'el-icon-eleme',
      });
    },
    showCustomClassMessage() {
      this.$message({
        message: '我是一条消息',
        customClass: 'my-message',
      });
    },
    showOffsetMessage() {
      this.$message({
        message: '我是一条消息',
        offset: 200,
      });
    },
    showCloseMessage() {
      this.$message({
        message: '我是一条消息',
        onClose: (res) => {
          console.log('已关闭', res);
        },
      });
    },
    // 关闭所有消息提示弹窗
    showCloseAllMessage() {
      this.$message.closeAll();
    },
    // 获取消息提示实例
    showInstanceMessage() {
      this.myMessage = this.$message({
        message: '我是一条消息',
        duration: 0,
      });

      setTimeout(() => {
        this.myMessage.close();
      }, 5000);
    },
  },
};
</script>

<style scoped>
.row {
  margin-bottom: 25px;
}
</style>
