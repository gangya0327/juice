<template>
  <div>
    <input type="text" :value="value" @input="onInput" v-on:keydown.enter="addCourse" />
    <span>{{ value }}</span>
    <button @click="addCourse"> 添加课程</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    addCourse() {
      if (!this.value) return;
      this.$emit('add-course');
    },
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
