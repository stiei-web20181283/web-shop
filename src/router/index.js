import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/homePage/index'),
        meta: { title: '首页', icon: 'el-icon-star-off' }
      }
    ]
  },
  {
    path: '/productPage',
    component: Layout,
    name: 'productPage',
    meta: {title: '商品', icon: 'el-icon-star-off'},
    children: [{
      path: 'product',
      name: 'product',
      component: () => import('@/views/productPage/product/index'),
      meta: {title: '商品列表', icon: 'product-list'}
    }]
  },
  {
    path: '/activityPage',
    component: Layout,
    name: 'activityPage',
    meta: {title: '活动', icon: 'el-icon-star-off'},
    children: [{
      path: 'activity',
      name: 'activity',
      component: () => import('@/views/activityPage/index'),
      meta: {title: '活动列表', icon: 'product-list'}
    }]
  },
  {
    path: '/discountPage',
    component: Layout,
    name: 'discountPage',
    meta: {title: '商品', icon: 'el-icon-star-off'},
    children: [{
      path: 'discount',
      name: 'discount',
      component: () => import('@/views/discountPage/index'),
      meta: {title: '折扣', icon: 'product-list'}
    }]
  }
]

export const asyncRouterMap = [
  {path: '*', redirect: '/404', hidden: true}
]
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
