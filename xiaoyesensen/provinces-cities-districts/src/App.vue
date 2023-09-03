<template></template>

<script setup lang="ts">
import cityData from './city.json';

/* 原结构:
[
  {
    name: '北京市',
    code: '101',
    cityList: [
      { name: '北京市', code: '101' },
    ],
  },
];

// 新结构：
{
  北京市: {
    name,
    code,
    cities: {
      北京市: {
        name,
        code,
      },
    },
  },
}; */

const provinces = formatData(cityData);
console.log('provinces :>> ', provinces);

function formatData(data: any) {
  return data.reduce((prev, next) => {
    prev[next.provinceName] = next;
  }, {});
}
</script>

<style lang="scss" scoped></style>
