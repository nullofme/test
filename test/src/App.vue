<template>
  <div id="app">
      <aa>111</aa> 
    <router-view/>
  </div>
</template>

<script>
  import aa from './pages/radio.vue'
export default {
  name: 'App',
  components:{
    aa
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
