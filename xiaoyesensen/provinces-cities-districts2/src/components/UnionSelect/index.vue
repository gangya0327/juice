<template>
  <div>
    <Selector
      :is-show="isProvinceSelectShow"
      :data="provinces"
      default-title="请选择 - 省"
      code-key="provinceCode"
      name-key="provinceName"
      @handle-change="handleProvinceChange"
    ></Selector>

    <Selector
      :is-show="isCitySelectShow"
      :data="state.cities"
      default-title="请选择 - 市"
      code-key="cityCode"
      name-key="cityName"
      @handle-change="handleCityChange"
    ></Selector>

    <Selector
      :is-show="isCountySelectShow"
      :data="state.counties"
      default-title="请选择 - 区县"
      code-key="countyCode"
      name-key="countyName"
      @handle-change="handleCountyChange"
    ></Selector>
  </div>
</template>

<script setup>
import cityData from '../../../city';
import { reactive, computed, toRaw } from 'vue';
import Selector from './Selector.vue';

const provinces = formatData(cityData);
console.log('provinces :>> ', provinces);

const emit = defineEmits(['handleSelect']);

const state = reactive({
  cities: null,
  counties: null,
  selectedInfo: {
    province: null,
    city: null,
    county: null,
  },
});

const isProvinceSelectShow = computed(() => !!provinces);
const isCitySelectShow = computed(() => !!state.cities);
const isCountySelectShow = computed(() => !!state.counties);

// 选择省
const handleProvinceChange = function (value) {
  // const { value } = e;
  // 清空选择状态
  if (!value) {
    state.selectedInfo.province = null;
    state.selectedInfo.city = null;
    state.selectedInfo.county = null;
    state.cities = null;
    state.counties = null;
    return;
  }
  const [code, name] = value.split(':');
  state.selectedInfo.province = { code, name };
  state.cities = provinces[name].cities;
};

// 选择市
const handleCityChange = function (value) {
  // const { value } = e.target;
  // 清空选择状态
  if (!value) {
    state.selectedInfo.city = null;
    state.selectedInfo.county = null;
    state.counties = null;
    return;
  }
  const [code, name] = value.split(':');
  state.selectedInfo.city = { code, name };
  state.counties = state.cities[name].counties;
};

// 选择区
const handleCountyChange = function (value) {
  // const { value } = e.target;
  if (!value) return;
  const [code, name] = value.split(':');
  state.selectedInfo.county = { code, name };

  emit('handleSelect', toRaw(state.selectedInfo));
  console.log(toRaw(state.selectedInfo));
};

function formatData(data) {
  return data.reduce((prev1, next1) => {
    next1.cities = next1.cities.reduce((prev2, next2) => {
      next2.counties = next2.counties.reduce((prev3, next3) => {
        prev3[next3.areaName] = {
          countyName: next3.areaName,
          countyCode: next3.areaCode,
        };
        return prev3;
      }, {});

      prev2[next2.cityName] = next2;
      return prev2;
    }, {});

    prev1[next1.provinceName] = next1;
    return prev1;
  }, {});
}
</script>
