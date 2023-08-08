<template>
  <div>
    <h2>Test</h2>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary" :icon="Edit">Primary</el-button>

    <el-pagination
      v-model:current-page="currentPage1"
      :page-size="100"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, prev, pager, next"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import { ref } from 'vue';

const currentPage1 = ref(5);
const small = ref(false)
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

console.log('test', import.meta.env);
</script>

<style lang="scss" scope></style>
