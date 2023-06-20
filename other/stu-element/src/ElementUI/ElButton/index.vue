<template>
  <button
    :disable="disabled || loading"
    :class="[
      'el-button',
      'el-button--' + (type || 'default'),
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
      { 'is-loading': loading },
      size && 'el-button--' + size,
    ]"
    :autofocus="autofocus"
    :type="nativeType"
    @click="$emit('click', $event)"
  >
    <i v-if="icon && !loading" :class="icon"></i>
    <i v-if="loading" class="el-icon-loading"></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    nativeType: {
      type: String,
      default: 'button',
    },
  },
};
</script>
