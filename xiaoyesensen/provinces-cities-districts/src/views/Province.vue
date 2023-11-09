<template>
  <div>
    <union-selectors :data="cityData"></union-selectors>
  </div>
</template>

<script setup>
import UnionSelectors from '../components/UnionSelectors/index.vue';
import cityData from '../city.json';
</script>

<style lang="scss" scoped></style>
