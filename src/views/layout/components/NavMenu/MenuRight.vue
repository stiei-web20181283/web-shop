<template>
  <div class="menu-right">
    <template v-for="item in routes" >
      <!-- v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" -->
      <router-link v-if="item.hidden&&item.children"
        :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name"
        >
        <el-menu-item @click="move" :class="item.children[0].meta.class" :index="item.path+'/'+item.children[0].path">
          <el-image src="https://iph.href.lu/30x30?fg=666&bg=ccc">
          </el-image>
          <div class="title">{{item.children[0].meta.title}}</div>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: 'MenuRight',
  props: {
    routes: {
      type: Array
    }
  },
  methods: {
    move: function () {

    }
  },
  created () {
    console.log('right', this.$route)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.menu-right{
  position: absolute;
  height: 100px;
  float: left;
  right: 10px;
  .el-menu-item {
    float: left;
    width: 100px;
    height: 100px; /* 导航元素高度 */
    line-height: normal;
    // margin: 0 10px;
    padding: 0;
    color: #5B5B5B;
    z-index: 100;
    .el-image{
      /* height: 40px; */
      margin: 20px 35px;
    }
    .title{
      text-align: center;
    }
  }
  .el-menu-item.is-active,
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: unset;
  }
  .el-menu-item.is-active{
    width: 100px;
    height: 120px;
    background-color: #5B5B5B;
    text-align: center;
    z-index: 1;
    transition: all .3s ease-in-out;
    // left: 10px;
    border-radius: 0 0 20px 20px;
    .title{
      color: #fff;
    }
  }
}
</style>
