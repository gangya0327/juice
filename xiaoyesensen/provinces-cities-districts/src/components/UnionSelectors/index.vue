<template>
  <div>
    <Selector
      :is-show="isProvinceSelectorShow"
      default-title="请选择 - 省"
      code-key="provinceCode"
      name-key="provinceName"
      :data="provinces"
      @handle-change="handleProvinceChange"
    ></Selector>
    <Selector
      :is-show="isCitySelectorShow"
      default-title="请选择 - 市"
      code-key="cityCode"
      name-key="cityName"
      :data="state.cities"
      @handle-change="handleCityChange"
    ></Selector>
    <Selector
      :is-show="isCountySelectorShow"
      default-title="请选择 - 区"
      code-key="countyCode"
      name-key="countyName"
      :data="state.counties"
      @handle-change="handleCountyChange"
    ></Selector>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import Selector from './Selector.vue';

const props = defineProps({
  data: Object,
});

const provinces = formatData(props.data);

const state = reactive({
  cities: null,
  counties: null,
  selectedInfo: {
    province: null,
    city: null,
    county: null,
  },
});

const isProvinceSelectorShow = !!provinces;
const isCitySelectorShow = computed(() => !!state.cities);
const isCountySelectorShow = computed(() => !!state.counties);

const handleProvinceChange = (e) => {
  console.log('e :>> ', e);
  const { value } = e.target;
  console.log('value :>> ', value);
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
  state.selectedInfo.county = null;
  state.counties = null;
};
const handleCityChange = (e) => {
  const { value } = e.target;
  if (!value) {
    state.selectedInfo.county = null;
    state.counties = null;
    return;
  }
  console.log('value :>> ', value);
  const [code, name] = value.split(':');
  state.selectedInfo.city = { code, name };
  state.counties = state.cities[name].counties;
};
const handleCountyChange = (e) => {
  const { value } = e.target;
  if (!value) {
    return;
  }
  const [code, name] = value.split(':');
  state.selectedInfo.county = { code, name };
};

function formatData(data) {
  return data.reduce((prev1, cur1) => {
    cur1.cities = cur1.mallCityList.reduce((prev2, cur2) => {
      cur2.counties = cur2.mallAreaList.reduce((prev3, cur3) => {
        prev3[cur3.areaName] = {
          code: cur3.areaCode,
          name: cur3.areaName,
        };
        return prev3;
      }, {});

      prev2[cur2.cityName] = {
        code: cur2.cityCode,
        name: cur2.cityName,
        counties: cur2.counties,
      };
      return prev2;
    }, {});
    prev1[cur1.provinceName] = {
      code: cur1.provinceCode,
      name: cur1.provinceName,
      cities: cur1.cities,
    };
    return prev1;
  }, {});
}
</script>
