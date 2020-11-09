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
        meta: { title: '首页', icon: 'el-icon-star-off', index: 0 }
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
      meta: {title: '全部商品', icon: 'product-list', index: 1}
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
      meta: {title: '活动专区', icon: 'product-list', index: 2}
    }]
  },
  {
    path: '/discountPage',
    component: Layout,
    name: 'discountPage',
    meta: {title: '优惠', icon: 'el-icon-star-off'},
    children: [{
      path: 'discount',
      name: 'discount',
      component: () => import('@/views/discountPage/index'),
      meta: {title: '优惠专区', icon: 'product-list', index: 3}
    }]
  },
  {
    path: '/vipPage',
    component: Layout,
    name: 'vipPage',
    meta: {title: '会员', icon: 'el-icon-star-off'},
    children: [{
      path: 'vip',
      name: 'vip',
      component: () => import('@/views/vipPage/index'),
      meta: {title: '会员专区', icon: 'product-list', index: 4}
    }]
  },
  {
    path: '/userPage',
    component: Layout,
    name: 'userPage',
    meta: {title: '用户', icon: ''},
    children: [{
      path: 'user',
      name: 'user',
      component: () => import('@/views/userPage/index'),
      meta: {title: '个人中心', icon: '', index: -1, class: 'menu-user'}
    }],
    hidden: true
  },
  {
    path: '/cartPage',
    component: Layout,
    name: 'cartPage',
    meta: {title: '购物车', icon: ''},
    children: [{
      path: 'cart',
      name: 'cart',
      component: () => import('@/views/cartPage/index'),
      meta: {title: '购物车', icon: '', index: -2, class: 'menu-cart'}
    }],
    hidden: true
  }
]

export const asyncRouterMap = [
  {path: '*', redirect: '/404', hidden: true}
]
export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
