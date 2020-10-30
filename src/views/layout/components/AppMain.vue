<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key"/>
      </keep-alive>
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
  min-height: calc(100vh - 159px);
  /* width: 100%; */ /* padding设置影响width */
  position: relative;
  margin-top: 101px;
  padding: 20px;
  overflow: hidden;
  text-align: center;
}
</style>
