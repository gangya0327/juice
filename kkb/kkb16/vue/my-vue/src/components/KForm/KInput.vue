<template>
  <div>
    <!-- v-bind="$attrs" 用于展开属性 -->
    <input v-bind="$attrs" :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 避免属性设置到父元素上
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
      this.$parent.$emit('validate');
    },
  },
};
</script>

<style lang="scss" scoped></style>
