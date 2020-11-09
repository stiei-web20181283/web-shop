<template>
  <div class="footer-view">
    <div class="footer-main">
      <div class="logo">
        <el-image src="https://iph.href.lu/240x80?fg=666&bg=ccc&text=logo"></el-image>
      </div>
      <div class="link-list">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(list, index) in linkList" :key="index">
            <el-link v-for="i in list" :key="i.index" :href="i.url" target="_blank">{{i.content}}</el-link>
          </el-col>
        </el-row>
      </div>
      <div class="concant">
        <el-row>
          <el-col :span="16">
            <div>
              <el-button icon="el-icon-mobile-phone" circle></el-button>
              <el-button icon="el-icon-mobile-phone" circle></el-button>
              <el-button icon="el-icon-mobile-phone" circle></el-button>
            </div>
            <div>
              <el-button class="phone" icon="el-icon-phone-outline">1234567890</el-button><br>
              <el-link type="info" icon="el-icon-help" :underline="false">www.baidu.com</el-link>
            </div>
          </el-col>
          <el-col :span="8">
            <el-image src="https://iph.href.lu/45x45?fg=666&bg=ccc"></el-image>
            <el-image src="https://iph.href.lu/45x45?fg=666&bg=ccc"></el-image>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="copyright"><p>Copyright &#169; 2020</p></div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      linkList: [
        [
          {url: '', content: '关于我们'},
          {url: '', content: '企业介绍'},
          {url: '', content: '媒体合作'},
          {url: '', content: '招贤纳士'},
          {url: '', content: '呼叫中心'}],
        [
          {url: '', content: '帮助中心'},
          {url: '', content: '投诉与建议'},
          {url: '', content: '会员权益'},
          {url: '', content: '购物指南'},
          {url: '', content: '支付类'}],
        [
          {url: '', content: '发现'},
          {url: '', content: '公告'}]
      ]
    }
  },
  methods: {
    handleClick: function (e) {
      console.log(e)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .footer-view{
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: #5b5b5b;
    color: #fff;
    .footer-main{
      position: relative;
       display: flex;
       padding-top: 30px;
      div{
        display: inline-block;
        &.logo {
          .el-image{
            margin: 50px 120px;
          }
        }
        &.link-list{
          // margin-left: 50px;
          .el-row{
            .el-col{
              width: 120px;
              .el-link{
                margin: 10px 15px;
                width: 80px;
                font-size: 12px;
                color: #fff;
              }
            }
          }
        }
        &.concant{
          margin-left: 50px;
          .el-button{
            background: initial;
            font-size: 18px;
            color: #fff;
            .is-circle{
              padding: 5px;
            }
          }
          .phone{
            margin: 30px 0 10px 0;
            padding: 5px;
            border-radius: 20px;
          }
        }
      }
    }
    .copyright{
      padding: 5px;
      p{
        margin: 0;
        transform: scale(.7);
      }
    }
  }
</style>
