<template>
  <div class="box">
    <h1>我是父组件</h1>
    <SlotTest>
      <!-- 默认插槽 -->
      <h2>我要插入到子组件内容中</h2>

      <!-- 具名插槽，可以简化为# -->
      <span slot="a">我是具名插槽a的内容</span>
      <template v-slot:b>我是具名插槽b的内容</template>
      <template #c>我是具名插槽c的内容</template>
    </SlotTest>

    <!-- 作用域插槽 -->
    <SlotScope :todos="todos">
      <template v-slot="{ $row, $index }">{{ $index }} - {{ $row.title }}</template>
    </SlotScope>
  </div>
</template>

<script setup lang="ts">
import SlotTest from './SlotTest.vue';

// 作用域插槽：可以传递数据的插槽，子组件将数据回传给父组件，父组件来决定如何展示
import SlotScope from './SlotScope.vue';
import { ref } from 'vue';

const todos = ref([
  { id: 1, title: '吃饭', done: false },
  { id: 2, title: '睡觉', done: false },
  { id: 3, title: '打豆豆', done: true },
]);
</script>

<style scoped>
.box {
  width: 50vh;
  height: 45vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
