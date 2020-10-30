<template>
  <div>
    <nav-menu></nav-menu>
    <app-main></app-main>
    <footer-view></footer-view>
  </div>
</template>
<script>
import { NavMenu, AppMain, Footer } from './components'

export default {
  name: 'Layout',
  components: {
    NavMenu,
    AppMain,
    'footer-view': Footer
  }
}
</script>
