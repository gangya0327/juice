<template>
  <div class="box">
    <h1>我是父组件</h1>
    <el-button type="primary" size="small" :icon="Check"></el-button>
    <!-- 自定义组件 -->
    <hint-button type="danger" size="small" :icon="Message" title="确认按钮" @click.native="handle"></hint-button>
  </div>
</template>

<script setup lang="ts">
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue';
import HintButton from './HintButton.vue';

const handle = () => {
  console.log('handle click');
};
</script>

<style scoped>
.box {
  width: 50vh;
  height: 30vh;
  padding: 20px;
  background: mediumaquamarine;
}
</style>
