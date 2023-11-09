<template>
  <select v-if="isShow" @change="handleChange">
    <option value="">{{ props.defaultTitle }}</option>
    <option v-for="(info, name) in data" :key="name" :value="`${info[name]}`">{{ name }}</option>
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
    default: 'Default',
  },
  codeKey: {
    type: String,
    default: '',
  },
  nameKey: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['handleChange']);

const handleChange = (e) => {
  emit('handleChange', e);
};
</script>
