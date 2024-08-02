<script setup>
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
const links = reactive([
  { path: 'home' },
  { path: 'props' },
  { path: 'custom_event' },
  { path: 'event_bus' },
  { path: 'v-model' },
  { path: 'useAttrs' },
  { path: 'ref' },
  { path: 'provide_inject' },
  { path: 'pinia' },
  { path: 'slot' },
]);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink v-for="(item, index) in links" :key="index" :to="item.path"> {{ item.path }}</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  margin: 0 0 15px;
  border-right: 1px solid var(--color-border);
}

nav a:last-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
