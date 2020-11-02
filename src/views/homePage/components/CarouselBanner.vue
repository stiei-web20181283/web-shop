<template>
  <el-carousel :interval="5000" arrow="always" height="449px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'CarouselBanner'
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-carousel{
  .el-carousel__container{
    .el-carousel__arrow--left{
      left: 100px;
    }
    .el-carousel__arrow--right{
      right: 100px;
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 449px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
  .el-carousel__indicators{
    .el-carousel__indicator{
      .el-carousel__button{
        width: 20px;
        height: 20px;
        // border-radius: 50%;
      }
    }
  }
}
</style>
