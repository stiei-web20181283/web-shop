webpackJsonp([0],{"VXT+":function(t,e){},XpGR:function(t,e){},ZUj0:function(t,e){},js7A:function(t,e){},l3SL:function(t,e){},xcJn:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-carousel",{attrs:{interval:5e3,arrow:"always",height:"449px"}},t._l(4,function(e){return i("el-carousel-item",{key:e},[i("h3",[t._v(t._s(e))])])}),1)},staticRenderFns:[]};var r={name:"NewProduct",data:function(){return{bannerList:[],list:[],newProduct:[],newProductList:[{img:"https://iph.href.lu/285x285?fg=666&bg=ccc",title:"1"},{img:"https://iph.href.lu/285x285?fg=fff&bg=666",title:"2"},{img:"https://iph.href.lu/285x285?fg=666&bg=ccc",title:"3"},{img:"https://iph.href.lu/285x285?fg=fff&bg=666",title:"4"},{img:"https://iph.href.lu/285x285?fg=666&bg=ccc",title:"5"},{img:"https://iph.href.lu/285x285?fg=fff&bg=666",title:"6"},{img:"https://iph.href.lu/285x285?fg=666&bg=ccc",title:"7"}],currentPage:0,pageSize:3,pageNum:""}},created:function(){this.initNewProduct()},methods:{initNewProduct:function(){this.pageNum=Math.ceil(this.newProductList.length/this.pageSize)||1;for(var t=0;t<this.pageNum;t++)this.newProduct[t]=this.newProductList.slice(this.pageSize*t,this.pageSize*(t+1));this.list=this.newProduct[this.currentPage]},handleNewProduct:function(t,e){if("next"===e){if(this.currentPage===this.pageNum-1)return;this.list=this.newProduct[++this.currentPage]}else if("prev"===e){if(console.log(e),0===this.currentPage)return;this.list=this.newProduct[--this.currentPage]}console.log(e,this.currentPage,this.pageNum)},handleNewProductDisabled:function(t){return"next"===t?this.currentPage===this.pageNum-1:"prev"===t?0===this.currentPage:void 0}},mounted:function(){}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-product"},[i("h1",[t._v("新品推荐")]),t._v(" "),i("el-row",{staticClass:"productCard-outer"},[i("div",{staticClass:"productCard-inner"},[this.currentPage>0?i("el-button",{ref:"newProductPrev",staticClass:"productCard-arrow productCard-arrow_left",attrs:{type:"info",icon:"el-icon-arrow-left",circle:""},on:{click:function(e){return t.handleNewProduct(e,"prev")}}}):t._e(),t._v(" "),this.currentPage<this.pageNum-1?i("el-button",{ref:"newProductNext",staticClass:"productCard-arrow productCard-arrow_right",attrs:{type:"info",icon:"el-icon-arrow-right",circle:""},on:{click:function(e){return t.handleNewProduct(e,"next")}}}):t._e(),t._v(" "),t._l(t.list,function(e){return[i("el-card",{key:e.index,attrs:{shadow:"hover","body-style":{padding:"0px"}}},[i("el-image",{staticStyle:{"border-radius":"20px"},attrs:{src:e.img}}),t._v(" "),i("div",{staticStyle:{padding:"14px"}},[i("span",[t._v(t._s(e.title))])])],1)]})],2)])],1)},staticRenderFns:[]};var a={name:"NewType",data:function(){return{list:[{children:[{title:"1"},{title:"2"},{title:"3"}]},{children:[{title:"4"},{title:"5"},{title:"6"}]}]}},methods:{},created:function(){console.log(this.list)}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-type"},[i("div",{staticClass:"newType-main"},[i("div",{staticClass:"newType-left"},[i("el-image",{staticStyle:{"border-radius":"0 20px 20px 0"},attrs:{src:"https://iph.href.lu/775x345?fg=666&bg=ccc"}})],1),t._v(" "),i("div",{staticClass:"newType-right"},[i("div",{staticClass:"inner"},[i("h1",[t._v("最新类型")]),t._v(" "),i("p",[t._v("阿巴阿巴阿巴阿巴")]),t._v(" "),i("el-button",{staticClass:"newType-btn big-btn",attrs:{type:"info"}},[t._v("立即购买")])],1)])]),t._v(" "),i("div",{staticClass:"newType-list"},[t._l(t.list,function(e,s){return i("el-row",{key:s},t._l(t.list[s].children,function(e){return i("el-card",{key:e.index,attrs:{shadow:"hover","body-style":{padding:"8px"}}},[i("el-image",{staticStyle:{"border-radius":"18px"},attrs:{src:"https://iph.href.lu/215x215?fg=fff&bg=5b5b5b"}}),t._v(" "),i("div",{staticClass:"content"},[i("p",{staticClass:"content-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"content-price"},[t._v("￥"+t._s(100*e.title))]),t._v(" "),i("el-button",{staticClass:"small-btn",attrs:{type:"info"}},[t._v("立即购买")])],1)],1)}),1)})],2)])},staticRenderFns:[]};var l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-activity"},[i("div",{staticClass:"activity-main"},[i("div",{staticClass:"activity-left"},[i("div",{staticClass:"inner"},[i("h1",[t._v("最新活动")]),t._v(" "),i("p",[t._v("更多优惠活动已然上线")]),t._v(" "),i("el-button",{staticClass:"activity-btn big-btn",attrs:{type:"info"}},[t._v("了解详情")])],1)]),t._v(" "),i("div",{staticClass:"activity-right"},[i("el-image",{staticStyle:{"border-radius":"20px 0 0 20px"},attrs:{src:"https://iph.href.lu/775x345?fg=666&bg=ccc"}})],1)]),t._v(" "),i("div",{staticClass:"activity-list"},[i("el-row",t._l(t.activityList,function(e){return i("el-col",{key:e.index,staticClass:"activityList-item"},[i("el-card",{attrs:{shadow:"hover","body-style":{padding:"0"}}},[i("el-image",{attrs:{src:"https://iph.href.lu/285x285?fg=666&bg=ccc"}}),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.content))]),t._v(" "),i("el-button",{staticClass:"activity-more small-btn",attrs:{type:"info"}},[t._v("更多"),i("i",{staticClass:"el-icon-right"})])],1)],1),t._v(" "),i("div",{staticClass:"circle"},[i("el-row",{staticClass:"start-date"},[i("span",[t._v(t._s(e.startDate))])]),t._v(" "),i("el-row",{staticClass:"end-date"},[i("span",[t._v(t._s(e.endDate))])])],1)],1)}),1)],1)])},staticRenderFns:[]};var o={name:"home",components:{CarouselBanner:i("VU/8")({name:"CarouselBanner"},s,!1,function(t){i("ZUj0")},"data-v-4f0c89ac",null).exports,NewProduct:i("VU/8")(r,n,!1,function(t){i("XpGR")},"data-v-186d2662",null).exports,NewType:i("VU/8")(a,c,!1,function(t){i("l3SL")},"data-v-994e1842",null).exports,NewActivity:i("VU/8")({name:"NewActivity",data:function(){return{activityList:[{img:"",title:"1",content:"阿巴巴",startDate:"08-17",endDate:"08-20",url:""},{img:"",title:"2",content:"双11",startDate:"11-01",endDate:"11-11",url:""},{img:"",title:"3",content:"双12",startDate:"12-01",endDate:"12-12",url:""}]}},methods:{}},l,!1,function(t){i("js7A")},"data-v-59120d00",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("carousel-banner"),this._v(" "),e("new-product"),this._v(" "),e("new-type"),this._v(" "),e("new-activity")],1)},staticRenderFns:[]};var d=i("VU/8")(o,u,!1,function(t){i("VXT+")},"data-v-02846dd1",null);e.default=d.exports}});
//# sourceMappingURL=0.da4ca2b73bc46c2ec32a.js.map