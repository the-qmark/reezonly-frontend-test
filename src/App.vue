<template>
  <div id="app">
    <main-page />
  </div>
</template>

<script>
import MainPage from './views/MainPage.vue';

export default {
  components: { MainPage },
  name: 'App',
};
</script>

<style>
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
