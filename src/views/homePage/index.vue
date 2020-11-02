<template>
  <div class="home">
    <!-- 轮播展示 -->
    <carousel-banner></carousel-banner>
    <!-- 新品推荐 -->
    <new-product></new-product>

  </div>
</template>
<script>
import { CarouselBanner, NewProduct } from './components'
export default {
  name: 'home',
  components: {
    CarouselBanner,
    NewProduct
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.new-product{
  h1{
    margin-top: 50px;
  }
  .productCard-outer{
    .productCard-inner{
      float: left;
      .el-card{
        float: left;
        background: red;
        width: 285px;
        border-radius:20px;
        .el-image{
          width: 285px;
          height: 285px;
        }
      }
    }
  }
  border:1px solid red;
}
</style>
