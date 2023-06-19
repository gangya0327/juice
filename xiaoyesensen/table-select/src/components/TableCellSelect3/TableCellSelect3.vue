<template>
  <table border="1" v-cell-select>
    <tr>
      <th rowspan="2">星期/时间</th>
      <th colspan="12">00:00 ~ 12:00</th>
      <th colspan="12">12:00 ~ 23:00</th>
    </tr>
    <tr>
      <th v-for="n in 24" :key="n">{{ n - 1 }}</th>
    </tr>
    <tr v-for="n in 7" :key="n" :data-weekday="n - 1">
      <th class="weekday-title">{{ weekdayTitle[n - 1] }}</th>
      <td v-for="m in 24" :key="m" :data-time="m - 1"></td>
    </tr>
  </table>
</template>

<script setup>
// import { reactive } from 'vue';
import vCellSelect from './vCellSelect';

// const weekdayTimeData = reactive([]);
const weekdayTitle = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
</script>

<style lang="scss" scoped>
table {
  user-select: none;
  border-collapse: collapse;
  tr {
    height: 35px;
  }
  .weekday-title {
    width: 100px;
  }
  td {
    width: 30px;
    &.selected {
      background-color: lightseagreen;
    }
  }
}
</style>
