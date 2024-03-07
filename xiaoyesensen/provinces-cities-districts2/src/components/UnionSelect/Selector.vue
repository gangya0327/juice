<template>
  <select v-if="isShow" @change="handleChange">
    <option value="">请选择 - 省</option>
    <option value="">{{ defaultTitle }}</option>
    <option :value="`${info[codeKey]}:${info[nameKey]}`" v-for="(info, name) in data">
      {{ name }}
    </option>
  </select>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}), 
  },
  isShow: {
    type: Boolean,
    default: false,
  },
  defaultTitle: {
    type: String,
    default: '',
  },
  codeKey: String,
  nameKey: String,
});

const emit = defineEmits(['handleChange']);

const handleChange = (e) => {
  emit('handleChange', e.target.value);
};
</script>
