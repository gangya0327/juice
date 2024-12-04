<template>
  <div>
    <span v-if="label">{{ label }}</span>
    <slot></slot>
    <span v-if="error">{{ error }}</span>
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
      const rules = this.uForm.rules[this.prop];
      const data = this.uForm.model[this.prop];
      const desc = { [this.prop]: rules };
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: data }, (errors) => {
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
