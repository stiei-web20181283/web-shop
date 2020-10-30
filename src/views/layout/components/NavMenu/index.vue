<template>
  <div class="nav-menu">
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <el-image class="logo" src="https://iph.href.lu/150x50?fg=666&bg=ccc&text=logo"></el-image>
        <menu-item :routes="routes"></menu-item>
      </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MenuItem from './MenuItem'

export default {
  name: 'NavMenu',
  components: { MenuItem },
  data () {
    return {

    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'menu_position'
    ]),
    routes () {
      // return this.$router.options.routes
      return this.permission_routes
    }
  }
}
</script>
<style scoped>
.nav-menu{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
.nav-menu .el-menu-demo{
  height: 100px; /* 顶部导航 */
  min-width: 1920px;
}
.nav-menu .logo{
  float: left;
  margin: 20px 30px;
  z-index: 1;
}
</style>
