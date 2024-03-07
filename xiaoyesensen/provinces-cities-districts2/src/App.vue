<template>
  <div>
    <!-- <select v-if="isProvinceSelectShow" @change="handleProvinceChange">
      <option value="">请选择 - 省</option>
      <option :value="`${info.provinceCode}:${info.provinceName}`" v-for="(info, provinceName) in provinces">
        {{ provinceName }}
      </option>
    </select>

    <select v-if="isCitySelectShow" @change="handleCityChange">
      <option value="">请选择 - 市</option>
      <option :value="`${info.cityCode}:${info.cityName}`" v-for="(info, cityName) in state.cities">
        {{ cityName }}
      </option>
    </select>

    <select v-if="isCountySelectShow" @change="handleCountyChange">
      <option value="">请选择 - 市</option>
      <option :value="`${info.countyCode}:${info.countyName}`" v-for="(info, countyName) in state.counties">
        {{ countyName }}
      </option>
    </select> -->

    <union-selectors  ></union-selectors>
  </div>
</template>

<script setup>
import UnionSelectors from '@/components/UnionSelect/index.vue'

// import { reactive, computed, toRaw } from 'vue';

// const provinces = formatData(cityData);
// console.log('provinces :>> ', provinces);

// const state = reactive({
//   cities: null,
//   counties: null,
//   selectedInfo: {
//     province: null,
//     city: null,
//     county: null,
//   },
// });

// const isProvinceSelectShow = computed(() => !!provinces);
// const isCitySelectShow = computed(() => !!state.cities);
// const isCountySelectShow = computed(() => !!state.counties);

// // 选择省
// const handleProvinceChange = function (e) {
//   const { value } = e.target;
//   // 清空选择状态
//   if (!value) {
//     state.selectedInfo.province = null;
//     state.selectedInfo.city = null;
//     state.selectedInfo.county = null;
//     state.cities = null;
//     state.counties = null;
//     return;
//   }
//   const [code, name] = value.split(':');
//   state.selectedInfo.province = { code, name };
//   state.cities = provinces[name].cities;
// };

// // 选择市
// const handleCityChange = function (e) {
//   const { value } = e.target;
//   // 清空选择状态
//   if (!value) {
//     state.selectedInfo.city = null;
//     state.selectedInfo.county = null;
//     state.counties = null;
//     return;
//   }
//   const [code, name] = value.split(':');
//   state.selectedInfo.city = { code, name };
//   state.counties = state.cities[name].counties;
// };

// // 选择区
// const handleCountyChange = function (e) {
//   const { value } = e.target;
//   if (!value) return;
//   const [code, name] = value.split(':');
//   state.selectedInfo.county = { code, name };
//   console.log(toRaw(state.selectedInfo));
// };

// function formatData(data) {
//   return data.reduce((prev1, next1) => {
//     next1.cities = next1.cities.reduce((prev2, next2) => {
//       next2.counties = next2.counties.reduce((prev3, next3) => {
//         prev3[next3.areaName] = {
//           countyName: next3.areaName,
//           countyCode: next3.areaCode,
//         };
//         return prev3;
//       }, {});

//       prev2[next2.cityName] = next2;
//       return prev2;
//     }, {});

//     prev1[next1.provinceName] = next1;
//     return prev1;
//   }, {});
// }
</script>
