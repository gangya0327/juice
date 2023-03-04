<template>
  <button
    class="yzd-button"
    :class="[theme, isBorder, isRound, btnSize]"
    :disabled="disabled"
    :style="minWidthStyle"
  >
    <span>
      <i v-if="iconPrefix" class="iconfont icon-prefix" :class="[iconPrefix]"></i>
      <slot />
      <i v-if="iconSuffix" class="iconfont icon-suffix" :class="[iconSuffix]"></i>
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
  },
};
</script>

<style lang="scss" scoped>
.yzd-button {
  padding: 0 20px;
  // min-width: 98px;
  height: 40px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #dcdfe6;
  background-color: #fff;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  + .yzd-button {
    margin-left: 10px;
  }
  &.is-border {
    background-color: #fff;
    color: #606266;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    display: flex;
    align-items: center;
  }
  .icon-prefix {
    margin-right: 10px;
  }
  .icon-suffix {
    margin-left: 10px;
  }
}
.yzd-button-primary {
  border-color: #409eff;
  background-color: #409eff;
  color: #fff;
  &.is-border {
    background-color: #fff;
    color: #409eff;
  }
}
.yzd-button-success {
  border-color: #00d100;
  background-color: #00d100;
  color: #fff;
  &.is-border {
    background-color: #fff;
    color: #00d100;
  }
}
.yzd-button-warning {
  border-color: #e6a23c;
  background-color: #e6a23c;
  color: #fff;
  &.is-border {
    background-color: #fff;
    color: #e6a23c;
  }
}
.yzd-button-danger {
  border-color: #f56c6c;
  background-color: #f56c6c;
  color: #fff;
  &.is-border {
    background-color: #fff;
    color: #f56c6c;
  }
}
.is-round {
  border-radius: 30px;
}
.yzd-button-medium {
  padding: 0 12px;
  height: 36px;
}
.yzd-button-small {
  padding: 0 10px;
  height: 30px;
  font-size: 12px;
  .icon-prefix {
    margin-right: 5px;
  }
  .icon-suffix {
    margin-left: 5px;
  }
}
.yzd-button-mini {
  padding: 0 8px;
  height: 24px;
  font-size: 10px;
  i {
    font-size: 12px;
  }
  .icon-prefix {
    margin-right: 3px;
  }
  .icon-suffix {
    margin-left: 3px;
  }
}
</style>
