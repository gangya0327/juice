<template>
  <div> detail {{ $route.params.id }} </div>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler(newVal) {
        console.log('newVal :>> ', newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
