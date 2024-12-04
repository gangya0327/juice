<template>
  <div class="box" v-if="isShow">
    <h3>{{ title }}</h3>
    <p class="content">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    duration: { type: Number, default: 1000 },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.remove(); // 移除自己
      }, this.duration);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 20px;
}
</style>
