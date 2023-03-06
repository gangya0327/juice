<template>
  <button
    class="yzd-button"
    :class="[theme, isBorder, isRound, btnSize]"
    :disabled="disabled || loading || load"
    :style="[minWidthStyle, blockStyle]"
    @click="change"
  >
    <span>
      <i v-if="iconPrefix" class="icon-prefix iconfont" :class="[iconPrefix]"></i>
      <i v-if="loading || load" class="icon-prefix iconfont icon-loading"></i>
      <slot />
      <i v-if="iconSuffix" class="icon-suffix iconfont" :class="[iconSuffix]"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'YzdButton',
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    minWidth: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    border: Boolean,
    round: Boolean,
    disabled: Boolean,
    block: Boolean,
    loading: Boolean,
    beforeChange: Function,
  },
  data() {
    return {
      load: false,
    };
  },
  computed: {
    theme() {
      return this.type ? `yzd-button-${this.type}` : '';
    },
    isBorder() {
      return this.border ? 'is-border' : '';
    },
    isRound() {
      return this.round ? 'is-round' : '';
    },
    btnSize() {
      return this.size ? `yzd-button-${this.size}` : '';
    },
    minWidthStyle() {
      return this.minWidth ? { 'min-width': this.minWidth } : {};
    },
    iconPrefix() {
      return this.prefix ? `icon-${this.prefix}` : '';
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : '';
    },
    blockStyle() {
      return this.block ? { display: 'block', width: '100%' } : {};
    },
  },
  methods: {
    // 事件回调
    change() {
      if (typeof this.beforeChange === 'function') {
        this.load = true;
        this.beforeChange()
          .then(() => {
            this.load = false;
          })
          .catch((err) => {
            this.load = false;
            console.log('err :>> ', err);
          });
      }
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
