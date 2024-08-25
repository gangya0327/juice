<template>
  <div class="box">
    <p>{{ str }}</p>
  </div>
</template>

<script setup lang="ts">
const str = 'abc'
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 3px;
  p {
    color: blueviolet;
    text-decoration: underline;
  }
}
</style>
