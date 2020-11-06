<template>
  <div class="new-activity">
    <div class="activity-main">
      <div class="activity-left">
        <div>
            <h1>最新活动</h1>
            <p>更多优惠活动已然上线</p>
        </div>
        <el-button class="activity-btn big-btn" type="info">了解详情</el-button>
      </div>
      <div class="activity-right">
        <el-image
          style="border-radius:20px 0 0 20px"
          src="https://iph.href.lu/775x345?fg=666&bg=ccc">
        </el-image>
      </div>
    </div>
    <div class="activity-list">
      <el-row>
        <el-col class="activityList-item" v-for="i in 3" :key="i.index">
          <el-card shadow="hover" :body-style="{ padding: '0'}">
            <el-image src="https://iph.href.lu/285x285?fg=666&bg=ccc"></el-image>
            <div class="content">
              <p>123</p>
              <p>阿巴吧</p>
              <el-button class="activity-more small-btn" type="info">更多<i class="el-icon-right"></i></el-button>
            </div>
          </el-card>
          <div class="circle">
            <el-row class="start-date"><span>08-17</span></el-row>
            <el-row class="end-date"><span>08-20</span></el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewActivity',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.new-activity{
  position: relative;
  margin-bottom: 100px;
  z-index: 1;
  .activity-main{
    display: flex;
    .activity-left{
      width: 100%;
    }
    .activity-right{
      .el-image{
        height: 345px;
        width: 775px;
      }
    }
  }
  .activity-list{
    margin-top: 50px;
    display: inline-block;
    .activityList-item{
      position: relative;
      width: 285px;
      // margin: 0 76px;
      margin: 0 49px;
      display: inline-block;
      &:hover {
        .circle{opacity: 1;}
        }
      .el-card{
        position: relative;
        height: 505px;
        border-radius: 20px;
        border: 1px solid #ccc;
        &:hover{
          border: 1px solid #666;
        }
        .content{
          .activity-more{
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 70px;
            i{
              font-weight: bold;
              margin-left: 5px;
            }
          }
        }
      }
      .circle{
        position: absolute;
        top: calc(100%*(285/505) - 45px);
        left: -45px;
        width: 90px;
        height: 90px;
        border: 1px solid #000;
        border-radius: 50%;
        background: #fff;
        transform:rotate(-45deg);
        opacity: 0;
        transition:all .5s;
        .el-row{
          height: 45px;
          line-height: 45px;
          margin: 0 5px;
          &.start-date{
            border-bottom: 1px solid crimson;
          }
          &.end-date{
            border-top: none;
          }
          span{
            display: block;
            transform:rotate(45deg);
            color: crimson;
            font-size: 12px;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
