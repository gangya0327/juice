<template>
  <div>
    <div>hello {{ name }}, this is my first page.</div>
    <div>
      i like
      <div
        v-for="f in fruits"
        :key="f"
        class="fruitclass"
        name="fruitname"
        id="fruitid">
        <span>some {{ f }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'peter',
      phone: 18712345678,
      fruits: ['apple', 'banana', 'orange', 'peach']
    }
  },
  mounted() {
    console.log('hey there')
  },
  created() {
    console.log(123)
    const fn = x => {
      console.log(x)
    }
    fn(1, 2)
    this.somefn().then(res => {
      console.log('res :>> ', res)
    })
  },
  methods: {
    somefn() {
      console.log('somefn')
    }
  }
}
</script>

<style lang="scss" scoped></style>
