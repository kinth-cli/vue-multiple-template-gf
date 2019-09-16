<template>
  <div id="app"> 
    多页应用template2页
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Test' // name值可以随便命名
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
