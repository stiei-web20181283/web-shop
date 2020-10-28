<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" >
      <template v-if="!item.hidden&&item.children">
      <!-- v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" -->
      <router-link :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <el-image src="https://iph.href.lu/30x30?fg=666&bg=ccc">1
          </el-image>
          <div class="title">{{item.children[0].meta.title}}</div>
        </el-menu-item>
      </router-link>
      </template>
    </template>
    <div ref="slideBackground" class="menuBg"></div>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren (children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    },
    move (item, index) {
      this.stepIndex = index
      // let moveStyle = {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      console.log(this.$refs.slideBackground)
    })
  },
  created () {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.menu-wrapper {
  height: 100px;
  .el-menu-item {
    float: left;
    width: 94px;
    height: 100px; /* 导航元素高度 */
    line-height: normal;
    margin: 0 10px;
    padding: 0;
    color: #5B5B5B;
    z-index: 100;
    .el-image{
      /* height: 40px; */
      margin: 20px 32px;
    }
    .title{
      text-align: center;
    }
  }
  .el-menu-item.is-active,
  .el-menu-item:focus,
  .el-menu-item:hover {
    // height: 120px;
    // background-color: #5B5B5B;
    // color: #fff;
    // border-radius: 0 0 20px 20px;
    background-color: unset;
  }
  .el-menu-item.is-active,
  .el-menu-item:hover {
    color: #03a9f4;
    transition: .5s;
  }
  .menuBg{
    width: 100px;
    height: 120px;
    background-color: #5B5B5B;
    position: absolute;
    top: 0;
    z-index: 1;
    transition: all .4s;
    left: 287px;
    border-radius: 0 0 20px 20px;
  }
}
</style>
