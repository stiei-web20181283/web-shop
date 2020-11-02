<template>
  <div class="nav-menu">
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
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
  min-width: 910px;
}
</style>
