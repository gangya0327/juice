<template>
  <div class="home">
    <div class="block">
      <yzd-button>默认按钮</yzd-button>
      <yzd-button type="primary">默认按钮</yzd-button>
      <yzd-button type="success">成功按钮</yzd-button>
      <yzd-button type="warning">警告按钮</yzd-button>
      <yzd-button type="danger">成功按钮</yzd-button>
    </div>
    <div class="block">
      <yzd-button border>默认按钮</yzd-button>
      <yzd-button type="primary" border>默认按钮</yzd-button>
      <yzd-button type="success" border>成功按钮</yzd-button>
      <yzd-button type="warning" border>警告按钮</yzd-button>
      <yzd-button type="danger" border>成功按钮</yzd-button>
    </div>
    <div class="block">
      <yzd-button round>默认按钮</yzd-button>
      <yzd-button type="primary" round>默认按钮</yzd-button>
      <yzd-button type="success" round>成功按钮</yzd-button>
      <yzd-button type="warning" round>警告按钮</yzd-button>
      <yzd-button type="danger" round>成功按钮</yzd-button>
    </div>
    <div class="block">
      <yzd-button disabled>默认按钮</yzd-button>
      <yzd-button type="primary" disabled>默认按钮</yzd-button>
      <yzd-button type="success" disabled>成功按钮</yzd-button>
      <yzd-button type="warning" disabled>警告按钮</yzd-button>
      <yzd-button type="danger" disabled>成功按钮</yzd-button>
    </div>
    <div class="block">
      <yzd-button type="primary">默认尺寸</yzd-button>
      <yzd-button type="primary" size="medium">中等尺寸</yzd-button>
      <yzd-button type="primary" size="small">小尺寸</yzd-button>
      <yzd-button type="primary" size="mini">超小尺寸</yzd-button>
    </div>
    <div class="block">
      <yzd-button type="primary" min-width="160px">160px尺寸</yzd-button>
      <yzd-button type="primary" min-width="300px">300px尺寸</yzd-button>
    </div>
    <div class="block">
      <yzd-button type="primary" prefix="likefill"> 图标按钮 </yzd-button>
      <yzd-button type="primary" suffix="forwardfill"> 图标按钮 </yzd-button>
      <yzd-button type="success" size="small" border suffix="addressbook"> 图标按钮 </yzd-button>
      <yzd-button type="warning" size="mini" border prefix="goods"> 图标按钮 </yzd-button>
      <yzd-button type="danger" size="mini" border prefix="squarecheckfill"> 图标按钮 </yzd-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    'yzd-button': () => import('@/components/YzdButton/index.vue'),
  },
};
</script>

<style lang="scss" scoped>
.block {
  margin-bottom: 10px;
  div {
    display: inline-block;
    // margin-left: 20px;
  }
}
</style>
