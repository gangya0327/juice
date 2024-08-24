<template>
  <div class="son">
    <h2>默认插槽、具名插槽</h2>
    <p>这是一段文本1</p>
    <!-- 默认插槽 -->
    <slot />
    <p>这是一段文本2</p>

    <!-- 具名插槽 -->
    <slot name="a" />
    <p>这是一段文本3</p>
    <slot name="b" />
    <p>这是一段文本4</p>
    <slot name="c" />
  </div>
</template>

<style scoped>
.son {
  height: 20vh;
  padding: 20px;
  background: cornflowerblue;
}
</style>
