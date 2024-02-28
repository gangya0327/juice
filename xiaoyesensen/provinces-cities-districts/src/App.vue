<template>
  <div>
    <!--
    <select :onchange="handleProvinceChange">
      <option value="">请选择 - 省</option>
      <option v-for="(item, index) in provinces" :key="index" :value="`${item.code}:${item.name}`">
        {{ item.name }}
      </option>
    </select>

    <select v-if="isCitySelectShow" :onchange="handleCityChange">
      <option value="">请选择 - 市</option>
      <option v-for="(item, index) in state.cities" :value="`${item.code}:${item.name}`" :key="index">
        {{ item.name }}
      </option>
    </select>

    <select v-if="isCountiesSelectShow" :onchange="handleCountyChange">
      <option value="">请选择 - 区</option>
      <option v-for="(item, index) in state.counties" :value="`${item.code}:${item.name}`" :key="index">
        {{ item.name }}
      </option>
    </select> -->

    <p>
      <router-link to="/">home</router-link> | <router-link to="/province">province</router-link>|
      <router-link to="/province2">province2</router-link> |
      <router-link to="/waterWave">WaterWave</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import cityData from './city.json';

// const provinces = formatData(cityData);
// console.log('provinces :>> ', provinces);

const state = reactive({
  cities: null,
  counties: null,
  selectedInfo: {
    province: null,
    city: null,
    county: null,
  },
});

const isCitySelectShow = computed(() => !!state.cities);
const isCountiesSelectShow = computed(() => !!state.counties);

const handleProvinceChange = (e) => {
  const { value } = e.target;
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

  console.log(state.selectedInfo);
};

// 转换省市区数据结构

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
