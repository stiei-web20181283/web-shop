<template>
  <div class="menu-wrapper" ref="menu_warpper">
    <el-image class="logo" src="https://iph.href.lu/150x50?fg=666&bg=ccc&text=logo"></el-image>
    <div class="menu-left">
      <template v-for="item in routes" >
        <!-- v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" -->
        <router-link class="menu-link" ref="menu_link" v-if="!item.hidden&&item.children"
          :to="item.path+'/'+item.children[0].path"
          :key="item.children[0].name"
          >
          <el-menu-item @click="move(item,$event)" @select="handleSelect" :class="item.children[0].meta.class" :index="item.path+'/'+item.children[0].path">
            <el-image src="https://iph.href.lu/30x30?fg=666&bg=ccc">
            </el-image>
            <div class="title">{{item.children[0].meta.title}}</div>
          </el-menu-item>
        </router-link>
      </template>
      <div class="menuBg" :style="style">{{this.$route.meta.index}}</div>
    </div>
    <div class="menu-right">
      <template v-for="item in routes" >
      <!-- v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" -->
        <router-link class="menu-link" ref="menu_link" v-if="item.hidden&&item.children"
          :to="item.path+'/'+item.children[0].path"
          :key="item.children[0].name"
          >
          <el-menu-item @click="move(item,$event)" @select="handleSelect" :class="item.children[0].meta.class" :index="item.path+'/'+item.children[0].path">
              <el-image src="https://iph.href.lu/30x30?fg=666&bg=ccc">
              </el-image>
              <el-badge class="item" type="danger"
                v-if="item.children[0].name == 'cart'"
                :value="100"
                :max="99">
              </el-badge>
              <div class="title">{{item.children[0].meta.title}}</div>
          </el-menu-item>
        </router-link>
      </template>
    </div>
    <!-- 导航标签背景 -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MenuItem',
  props: {
    routes: {
      type: Array
    }
  },
  data () {
    return {
      position: 0,
      style: {
        left: null,
        right: null,
        height: null,
        BorderRadius: null,
        display: null
      }
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
    move: function (item, e) {
      this.position = item.children[0].meta.index
      if (this.position >= 0) {
        this.style.left = 100 * this.position + 'px'
        this.style.display = null
      } else {
        this.style.display = 'none'
      }
      // console.log(e.$el.className)
    },
    handleSelect: function (index, indexPath) {
      console.log('index', index)
    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  },
  created () {
    if (sessionStorage.position < 0) {
      this.style.display = 'none'
    }
    this.style.left = this.menuPosition * 100 + 'px'
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('position', JSON.stringify(this.position))
    })
    console.log(sessionStorage.position)
  },
  computed: {
    ...mapGetters([
      'menu_position'
    ]),
    menuPosition () {
      return this.menu_position
    }
  },
  watch: {
    position: function (e) {
      console.log('position', e, '\n==================')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.menu-wrapper {
  position: relative;
  height: 100px;
  .logo{
    position: absolute;
    left: 0;
    margin: 20px 30px;
    z-index: 1;
  }
  .menu-left{
    position: absolute;
    left: 210px;
  }
  .menu-right{
    position: absolute;
    right: 0;
  }
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
    .el-badge{
      position: absolute;
      margin-left: -45px;
      margin-top: 15px;
      transform: scale(0.8);
      sup{
        top: 0em
      }
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
    color: #fff;
    transition: all .3s ease-in-out;
  }
  .menuBg{
    width: 100px;
    height: 120px;
    background-color: #5B5B5B;
    text-align: center;
    position: absolute;
    top: 0;
    z-index: 1;
    transition: all .3s ease-in-out;
    // left: 10px;
    right: 0;
    border-radius: 0 0 20px 20px;
  }
  .menu-right .is-active{
    width: 100px;
    height: 120px;
    background-color: #5B5B5B;
    transition: all .3s ease-in-out;
    border-radius: 0 0 20px 20px;
  }
}
</style>
