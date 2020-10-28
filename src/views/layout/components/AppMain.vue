<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
  /* 主内容高度 */
  min-height: calc(100vh - 101px);
  width: 100%;
  position: relative;
  margin-top: 101px;
  overflow: hidden;
  text-align: center;
}
</style>
