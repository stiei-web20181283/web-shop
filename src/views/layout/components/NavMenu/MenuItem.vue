<template>
  <div class="menu-wrapper" ref="menu_warpper">
    <template v-for="item in routes" >
      <template v-if="!item.hidden&&item.children">
      <!-- v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" -->
      <router-link class="menu-link" ref="menu_link"
        :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name"
        >
        <el-menu-item @click="move(item,$event)" :class="item.children[0].meta.class" :index="item.path+'/'+item.children[0].path">
          <el-image src="https://iph.href.lu/30x30?fg=666&bg=ccc">1
          </el-image>
          <div class="title">{{item.children[0].meta.title}}</div>
        </el-menu-item>
      </router-link>
      </template>
    </template>
    <!-- 导航标签背景 -->
    <div class="menuBg" :style="style">{{this.$route.meta.index}}</div>
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
        height: null,
        BorderRadius: null
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
      this.style.height = '100px'
      this.style.BorderRadius = '10px'
      setTimeout(() => {
        this.style.left = 100 * this.position + 'px'
      }, 200)
      setTimeout(() => {
        this.style.height = '120px'
        this.style.BorderRadius = '0 0 20px 20px'
      }, 500)
      console.log(e.$el.className)
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.position = this.menu_position
      // let link = this.$refs.menu_link
      // let r = this.$route.meta.index - 1
      // let bg = this.$refs.slideBackground
      // bg.style.left = 100 * r + 'px'
    })
  },
  created () {
    this.style.left = this.menuPosition * 100 + 'px'
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('position', JSON.stringify(this.position))
    })
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
  float: left;
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
    color: #fff;
    transition: .5s;
  }
  .menuBg{
    width: 100px;
    height: 120px;
    background-color: #5B5B5B;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 0;
    z-index: 1;
    transition: all .5s ease-in-out;
    // left: 10px;
    border-radius: 0 0 20px 20px;
  }
}
</style>
