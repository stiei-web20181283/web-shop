<template>
  <div class="home">
    <!-- 轮播展示 -->
    <carousel-banner></carousel-banner>
    <!-- 新品推荐 -->
    <new-product></new-product>
    <!-- 最新类型 -->
    <new-type></new-type>
    <!-- 最新活动 -->
    <new-activity></new-activity>
  </div>
</template>
<script>
import { CarouselBanner, NewProduct, NewType, NewActivity } from './components'
export default {
  name: 'home',
  components: {
    CarouselBanner,
    NewProduct,
    NewType,
    NewActivity
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
