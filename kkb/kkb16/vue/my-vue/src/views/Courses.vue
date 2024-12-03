<template>
  <div class="container">
    <div>课程总数：{{ total }}</div>
    <div>课程总数：{{ totalCount }}</div>
    <hr />
    <course-list :courses="courses"></course-list>
    <course-add v-model="course" @add-course="addCourse"></course-add>
    <hr />
    <router-view />
  </div>
</template>

<script>
import CourseList from '@/components/CourseList.vue';
import CourseAdd from '@/components/CourseAdd.vue';
import { getCourses } from '@/api/course';

export default {
  components: {
    CourseList,
    CourseAdd,
  },
  data() {
    return {
      course: '',
      courses: ['apple', 'banana'],
      totalCount: '',
      isShow: false,
    };
  },
  computed: {
    total() {
      return this.courses.length + '门';
    },
  },
  watch: {
    courses: {
      handler(newVal) {
        this.totalCount = newVal.length + '门';
      },
      immediate: true,
    },
  },
  mounted() {
    getCourses().then((res) => {
      this.courses = res;
    });
  },
  methods: {
    addCourse() {
      this.courses.push(this.course);
      this.course = '';
      this.isShow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  margin: 0 auto;
}
</style>
