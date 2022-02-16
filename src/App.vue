<template>
  <main id="app" class="is-sidebar">
    <div class="page-wrapper">
      <Navbar />
      <router-view />
    </div>
    <notifications group="app" position="bottom center" />
  </main>
</template>
<script>
import Navbar from '@/components/ui/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
