<template>
  <div class="new-product">
    <h1>新品推荐</h1>
    <el-row class="productCard-outer">
      <div class="productCard-inner">
        <el-button class="productCard-arrow productCard-arrow_left" type="info" icon="el-icon-arrow-left" circle></el-button>
        <el-button class="productCard-arrow productCard-arrow_right" type="info" icon="el-icon-arrow-right" circle></el-button>
          <template v-for="i in 3" >
            <el-card shadow="hover" :body-style="{ padding: '0px' }"  :key="i">
              <el-image
                style="border-radius:20px"
                src="https://iph.href.lu/285x285?fg=666&bg=ccc">
              </el-image>
              <div style="padding: 14px;">
                <span>{{i}}</span>
              </div>
            </el-card>
          </template>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'NewProduct'
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.new-product{
  h1{
    margin-top: 50px;
  }
  .productCard-outer{
    .productCard-inner{
      .el-card{
        display: inline-block;
        background: #5b5b5b;
        width: 285px;
        margin: 0 20px;
        border-radius:20px;
        .el-image{
          width: 285px;
          height: 285px;
        }
      }
      .productCard-arrow{
        position: absolute;
        top:123px;// calc(50% - 20px);
      }
      .productCard-arrow.productCard-arrow_left{
        left: 5%;
      }
      .productCard-arrow.productCard-arrow_right{
        right: 5%;
      }
    }
  }
}
</style>
