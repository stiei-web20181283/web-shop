<template>
  <div class="new-type">
    <div class="newType-main">
      <div class="newType-left">
        <el-image
          style="border-radius:0 20px 20px 0"
          src="https://iph.href.lu/775x345?fg=666&bg=ccc">
        </el-image>
      </div>
      <div class="newType-right">
        <div class="inner">
            <h1>最新类型</h1>
            <p>阿巴阿巴阿巴阿巴</p>
            <el-button class="newType-btn big-btn" type="info">立即购买</el-button>
        </div>
      </div>
    </div>
    <div class="newType-list">
      <template>
        <el-row v-for="(item, index) in list" :key="index">
          <el-card shadow="hover" :body-style="{ padding: '8px'}" v-for="i in list[index].children" :key="i.index">
            <el-image
              style="border-radius:18px"
              src="https://iph.href.lu/215x215?fg=fff&bg=5b5b5b">
            </el-image>
            <div class="content">
              <p class="content-title">{{i.title}}</p>
              <p class="content-price">￥{{i.title*100}}</p>
              <el-button class="small-btn" type="info">立即购买</el-button>
            </div>
          </el-card>
        </el-row>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewType',
  data () {
    return {
      list: [
        {
          children: [
            {title: '1'},
            {title: '2'},
            {title: '3'}
          ]
        },
        {
          children: [
            {title: '4'},
            {title: '5'},
            {title: '6'}
          ]
        }
      ]
    }
  },
  methods: {

  },
  created () {
    console.log(this.list)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.new-type{
  position: relative;
  margin-top: 50px;
  .newType-main{
    display: flex;
    .newType-left{
      .el-image{
        height: 345px;
        width: 775px;
      }
    }
    .newType-right{
      // position: relative;
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
  .newType-list{
    margin-top: 25px;
    .el-card{
      display: inline-block;
      width: 220px;
      border-radius: 18px;
      margin: 35px 70px;
      transition: all .5s ease-out;
      cursor: pointer;
      .content{
        visibility: hidden;
        margin-bottom: 10px;
        p{
          font-size: 15px;
          color: #606266;
          margin: 0;
          &.content-title{
            font-weight: 400;
            margin: 5px 0 10px 0;
          }
          &.content-price{
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 15px;
          }
        }
      }
      &:hover{
        background: #ccc;
      }
      &:hover .content{
        visibility: visible;
      }
    }
  }
}
</style>
