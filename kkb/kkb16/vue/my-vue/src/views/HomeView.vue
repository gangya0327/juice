<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>
      <p @click="$store.commit('ADD_COUNT')">count: {{ $store.state.count }}</p>
      <p @click="$store.dispatch('addCount')">async count: {{ $store.state.count }}</p>
      <!-- <p>doubleCount: {{ $store.getters.doubleCount }}</p> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
};
</script>
