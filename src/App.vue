<template>
  <div id="app">
    <router-view class="container"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.container {
  //padding: 0 10px;
  background-color: #f0f0f0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
