<template>
  <div>
    <nav-menu></nav-menu>
    <app-main></app-main>
  </div>
</template>
<script>
import { NavMenu, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    NavMenu,
    AppMain
  }
}
</script>
