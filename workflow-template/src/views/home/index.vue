<template>
  <div>hello {{ name }}, this is my first page.</div>
</template>

<script>
export default {
  data() {
    return {
      name: 'peter',
      phone: 18712345678
    }
  },
  mounted() {
    console.log('hey there')
  }
}
</script>

<style lang="scss" scoped></style>
