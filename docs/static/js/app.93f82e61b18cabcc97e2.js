webpackJsonp([7],{"15xG":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(t){n("15xG")},null,null).exports,a=n("NYxO"),u=n("//Fk"),c=n.n(u),s=n("/ocq"),l=n("Dd8w"),d=n.n(l),h={name:"MenuItem",props:{routes:{type:Array},isNest:{type:Boolean,default:!1}},methods:{hasOneShowingChildren:function(t){return 1===t.filter(function(t){return!t.hidden}).length},move:function(t,e){this.stepIndex=e}},mounted:function(){var t=this;this.$nextTick(function(){console.log(t.$refs.slideBackground)})},created:function(){}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-wrapper"},[t._l(t.routes,function(e){return[!e.hidden&&e.children?[n("router-link",{key:e.children[0].name,attrs:{to:e.path+"/"+e.children[0].path}},[n("el-menu-item",{attrs:{index:e.path+"/"+e.children[0].path}},[n("el-image",{attrs:{src:"https://iph.href.lu/30x30?fg=666&bg=ccc"}},[t._v("1\n        ")]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.children[0].meta.title))])],1)],1)]:t._e()]}),t._v(" "),n("div",{ref:"slideBackground",staticClass:"menuBg"})],2)},staticRenderFns:[]};var p={name:"NavMenu",components:{MenuItem:n("VU/8")(h,m,!1,function(t){n("xXsL")},"data-v-f5c57f68",null).exports},data:function(){return{}},methods:{handleSelect:function(t,e){console.log(t,e)}},computed:d()({},Object(a.b)(["permission_routes"]),{routes:function(){return this.permission_routes}})},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-menu"},[e("el-menu",{staticClass:"el-menu-demo",attrs:{"show-timeout":200,"default-active":this.$route.path,mode:"horizontal"},on:{select:this.handleSelect}},[e("el-image",{staticClass:"logo",attrs:{src:"https://iph.href.lu/150x50?fg=666&bg=ccc&text=logo"}}),this._v(" "),e("menu-item",{attrs:{routes:this.routes}})],1)],1)},staticRenderFns:[]};var v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"app-main"},[e("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[e("router-view",{key:this.key})],1)],1)},staticRenderFns:[]};var g={name:"Layout",components:{NavMenu:n("VU/8")(p,f,!1,function(t){n("z+3+")},"data-v-538416bf",null).exports,AppMain:n("VU/8")({name:"AppMain",computed:{cachedViews:function(){return this.$store.state.tagsView.cachedViews},key:function(){return this.$route.fullPath}}},v,!1,function(t){n("SXMh")},"data-v-48b2e238",null).exports}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-menu"),this._v(" "),e("app-main")],1)},staticRenderFns:[]},x=n("VU/8")(g,_,!1,null,null,null).exports;i.default.use(s.a);var y=[{path:"/login",component:function(){return n.e(2).then(n.bind(null,"T+/8"))},hidden:!0},{path:"/404",component:function(){return n.e(5).then(n.bind(null,"+H76"))},hidden:!0},{path:"",component:x,redirect:"/home",children:[{path:"home",name:"Home",component:function(){return n.e(0).then(n.bind(null,"xcJn"))},meta:{title:"首页",icon:"el-icon-star-off"}}]},{path:"/productPage",component:x,name:"productPage",meta:{title:"商品",icon:"el-icon-star-off"},children:[{path:"product",name:"product",component:function(){return n.e(1).then(n.bind(null,"TIxP"))},meta:{title:"商品列表",icon:"product-list"}}]},{path:"/activityPage",component:x,name:"activityPage",meta:{title:"活动",icon:"el-icon-star-off"},children:[{path:"activity",name:"activity",component:function(){return n.e(4).then(n.bind(null,"Dyz3"))},meta:{title:"活动列表",icon:"product-list"}}]},{path:"/discountPage",component:x,name:"discountPage",meta:{title:"商品",icon:"el-icon-star-off"},children:[{path:"discount",name:"discount",component:function(){return n.e(3).then(n.bind(null,"nf3P"))},meta:{title:"折扣",icon:"product-list"}}]}],b=[{path:"*",redirect:"/404",hidden:!0}],w=new s.a({scrollBehavior:function(){return{y:0}},routes:y});var R={namespaced:!0,state:{routes:y,addRoutes:[]},mutations:{SET_ROUTES:function(t,e){t.addRouters=e,t.routes=y.concat(e)}},actions:{GenerateRoutes:function(t,e){var n=t.commit;return new c.a(function(t){var i=e.menus,r=b.filter(function(t){return!!function(t,e){if(e.name){var n=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(t===i.name)return i}return null}(e.name,t);return null!=n?(null!=n.title&&""!==n.title&&(e.meta.title=n.title),null!=n.icon&&""!==n.title&&(e.meta.icon=n.icon),null!=n.hidden&&(e.hidden=0!==n.hidden),null!=n.sort&&""!==n.sort&&(e.sort=n.sort),!0):(e.sort=0,void 0!==e.hidden&&!0===e.hidden)}return!0}(i,t)&&(t.children&&t.children.length>0?(t.children=t.children.filter(function(t){return!1}),t):t)});n("SET_ROUTERS",r),t()})}}},k={permission_routes:function(t){return t.permission.routes}};i.default.use(a.a);var P=new a.a.Store({modules:{permission:R},getters:k}),S=n("zL8q"),$=n.n(S);n("tvR6");i.default.use($.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:w,store:P,components:{App:o},template:"<App/>"})},SXMh:function(t,e){},tvR6:function(t,e){},xXsL:function(t,e){},"z+3+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.93f82e61b18cabcc97e2.js.map