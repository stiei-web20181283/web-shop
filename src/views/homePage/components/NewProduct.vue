<template>
  <div class="new-product">
    <h1>新品推荐</h1>
    <el-row class="productCard-outer">
      <div class="productCard-inner">
        <el-button ref="newProductPrev"
          type="info" icon="el-icon-arrow-left" circle
          class="productCard-arrow productCard-arrow_left"
          @click="handleNewProduct($event, 'prev')"
          v-if="this.currentPage > 0"
        ></el-button>
        <el-button ref="newProductNext"
          type="info" icon="el-icon-arrow-right" circle
          class="productCard-arrow productCard-arrow_right"
          @click="handleNewProduct($event, 'next')"
          v-if="this.currentPage < this.pageNum-1"
        ></el-button>
          <template v-for="i in list">
            <el-card shadow="hover" :body-style="{ padding: '0px' }"  :key="i.index">
              <el-image
                style="border-radius:20px"
                src="https://iph.href.lu/285x285?fg=666&bg=ccc">
              </el-image>
              <div style="padding: 14px;">
                <span>{{i.title}}</span>
              </div>
            </el-card>
          </template>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'NewProduct',
  data () {
    return {
      // 首页轮播
      bannerList: [],
      // 新品推荐
      list: [],
      newProduct: [],
      newProductList: [
        {img: '', title: '1'},
        {img: '', title: '2'},
        {img: '', title: '3'},
        {img: '', title: '4'},
        {img: '', title: '5'},
        {img: '', title: '6'},
        {img: '', title: '7'}
      ],
      currentPage: 0, // 默认页码
      pageSize: 3, // 每页显示数
      pageNum: '' // 总页数
    }
  },
  created () {
    this.initNewProduct()
  },
  methods: {
    // 初始化新品推荐列表
    initNewProduct: function () {
      // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
      this.pageNum = Math.ceil(this.newProductList.length / this.pageSize) || 1
      for (let i = 0; i < this.pageNum; i++) {
      // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
        this.newProduct[i] = this.newProductList.slice(this.pageSize * i, this.pageSize * (i + 1))
      }
      // 获取到数据后显示第一页内容
      this.list = this.newProduct[this.currentPage]
    },
    handleNewProduct: function (e, ref) {
      if (ref === 'next') {
        if (this.currentPage === this.pageNum - 1) return
        this.list = this.newProduct[++this.currentPage]
      } else if (ref === 'prev') {
        console.log(ref)
        if (this.currentPage === 0) return
        this.list = this.newProduct[--this.currentPage]
      }
      console.log(ref, this.currentPage, this.pageNum)
    },
    handleNewProductDisabled: function (ref) {
      if (ref === 'next') {
        if (this.currentPage === this.pageNum - 1) return true
        return false
      } else if (ref === 'prev') {
        if (this.currentPage === 0) return true
        return false
      }
    }
  },
  mounted () {

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
      .el-card{
        display: inline-block;
        // background: #5b5b5b;
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
