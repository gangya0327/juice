<template>
  <div>
    <span v-if="label">{{ label }}</span>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator';

export default {
  inject: ['uForm'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      error: '',
    };
  },
  mounted() {
    this.$on('validate', () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      const rules = this.uForm.rules[this.prop]; // 规则
      const value = this.uForm.model[this.prop]; // 当前值
      const desc = { [this.prop]: rules }; // 校验描述对象
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = '';
        }
      });
    },
  },
};
</script>
