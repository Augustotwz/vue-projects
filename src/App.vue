<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        app
        mini-variant
        expand-on-hover
        dark
      >
        <TheNavbar />
      </v-navigation-drawer>
      
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TheNavbar from './common/TheNavbar.vue'

export default {
  components: { TheNavbar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
