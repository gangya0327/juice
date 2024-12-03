<template>
  <div>
    <div
      v-for="c in courses"
      :key="c.id"
      :class="{ active: selectedCourse === c }"
      :style="{ backgroundColor: selectedCourse === c ? 'lightblue' : 'transparent' }"
      @click="selectCourse(c)"
    >
      <router-link :to="`/courses/detail/${c.id}`">{{ c.id }} {{ c.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['courses'],
  data() {
    return {
      selectedCourse: '',
    };
  },
  methods: {
    selectCourse(c) {
      this.selectedCourse = c;
    },
  },
};
</script>

<style lang="scss" scoped></style>
