# web-shop

> 前端商城页面

[![](https://badgen.net/github/branches/stiei-web20181283/web-shop?icon=github)]()
[![](https://badgen.net/github/last-commit/stiei-web20181283/web-shop?label=commit)]()
[![gitee](https://gitee.com/zhong96/shop/badge/star.svg?label=Gitee)](https://gitee.com/stiei-web20182183/web-shop)

## 前言

该项目为商城系统的前端部分

## 项目介绍

`web-shop` 商城前端页面
### 项目演示

项目在线演示地址：[web-shop](https://stiei-web20181283.github.io/web-shop/)  

### 技术选型

技术 | 说明 | 官网
----|----|----
Vue | 前端框架 | [https://vuejs.org/](https://vuejs.org/)
Vue-router | 路由框架 | [https://router.vuejs.org/](https://router.vuejs.org/)
Vuex | 全局状态管理框架 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
Element-UI | 前端UI框架 | [https://element.eleme.io/](https://element.eleme.io/)
Js-cookie | cookie管理工具 | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)
vue-element-admin | 项目脚手架参考 | [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

### 项目布局

``` lua
src -- 源码目录
├── api -- axios网络请求定义
├── assets -- 静态图片资源文件
├── components -- 通用组件封装
├── router -- vue-router路由配置
├── store -- vuex的状态管理
├── styles -- 全局css样式
├── utils -- 工具类
└── views -- 前端页面
    ├── home -- 首页
    ├── layout -- 通用页面加载框架
    ├── login -- 登录页
    ├── productPage -- 商品页面
    ├── activityPage -- 活动页面
    ├── discountPage -- 会员页面
    ├── user -- 个人中心
    └── cart -- 购物车
```

## 搭建步骤
- 下载node并安装：[https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi](https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi)

``` bash
- git clone https://github.com/stiei-web20181283/web-shop.git
- cd web-shop
- npm install
- npm run dev
- npm run build
- npm run build --report

```