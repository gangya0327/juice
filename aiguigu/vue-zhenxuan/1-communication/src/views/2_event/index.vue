<template>
  <div class="box">
    <h2>custom event</h2>
    <p>
      vue2中是自定义事件，可以通过 .native 修饰符改为原生DOM事件 <br />
      vue3中是原生DOM事件
    </p>
    <Event @click="handle2" />
    <hr />
    <Event2 @xxx="handle3" />
  </div>
</template>

<script setup lang="ts">
import Event from './Event.vue';
import Event2 from './Event2.vue';

const handle2 = () => {
  console.log(123);
};
const handle3 = (params) => {
  console.log(333 + params);
};
</script>

<style scoped>
.box {
  height: 400px;
  background: antiquewhite;
}
</style>
