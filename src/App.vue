<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('state')) {
      this.$store.replaceState(Object.assign(
        {},
        this.$store.state,
        JSON.parse(sessionStorage.getItem('state'))
      ))
    }
  },
  destroyed () {
    //   页面刷新时将state数据存储到sessionStorage中
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
/* normalize.css */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
