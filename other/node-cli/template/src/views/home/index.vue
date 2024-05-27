<template>
  <div>
    <div>hello {{ name }}, this is my first page.</div>
    <div>
      i like
      <div
        name="fruitname"
        :key="f"
        ref="f"
        class="fruitclass"
        v-for="f in fruits"
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
