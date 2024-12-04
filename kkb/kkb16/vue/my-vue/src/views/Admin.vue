<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <div class="element-demo">
      <div><element-test></element-test></div>
      <div><k-form></k-form></div>
      <div><y-form></y-form></div>
    </div>
  </div>
</template>

<script>
import ElementTest from '@/components/KForm/ElementTest.vue';
import KForm from '@/components/KForm';
import YForm from '@/components/YForm';

export default {
  components: { ElementTest, KForm, YForm },
};
</script>

<style lang="scss" scoped>
.element-demo {
  margin: 0 50px;
  display: flex;
  border: 1px solid #ccc;

  > div {
    margin: 20px;
    flex: 1;
  }
}
</style>
