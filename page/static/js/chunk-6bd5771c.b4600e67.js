(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bd5771c"],{"1c01":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ItemDetails"}},[n("el-container",[n("el-main",[n("div",{staticClass:"content"},[n("keep-alive",[n("router-view")],1)],1)])],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"leftAside"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.selectType,"text-color":"#333","active-text-color":"#ffd04b",collapse:!1},on:{select:e.handleSelect}},e._l(e.navList,(function(t,s){return n("el-menu-item",{key:t.navRouter+s,attrs:{index:t.navRouter}},[n("template",{slot:"title"},[n("i",{class:"el-icon-folder-opened"}),n("span",[e._v(e._s(t.value))])])],2)})),1)],1)},c=[],r={data:function(){return{navList:[{index:"0",navRouter:"image",value:"图片",icon:"el-icon-menu"},{index:"1",navRouter:"text",value:"文本",icon:"el-icon-document"},{index:"2",navRouter:"video",value:"视频",icon:"el-icon-setting"},{index:"3",navRouter:"audio",value:"音频",icon:"el-icon-setting"},{index:"4",navRouter:"remote_sensing",value:"遥感",icon:"el-icon-setting"}],sendData:[],selectType:""}},computed:{currentType:function(){return this.$store.state.ItemDetails.currentType}},watch:{currentType:{handler:function(e){this.selectType=e}}},methods:{getResultList:function(){console.log("刷新后一级菜单类型"),""==this.currentType?(this.selectType="image",this.$store.commit("ItemDetails/currentType",this.selectType)):this.selectType=this.currentType},handleSelect:function(e){this.$store.commit("ItemDetails/currentType",e),this.$router.push({name:e})}},created:function(){this.getResultList()}},a=r,u=(n("8d66"),n("2877")),l=Object(u["a"])(a,o,c,!1,null,"75bfff99",null),d=(l.exports,n("6957"),{data:function(){return{}},computed:{currentType:function(){return this.$store.state.ItemDetails.currentType}},methods:{beforeunloadFn:function(){var e=localStorage.getItem("reLoadType");this.currentType=e},saveVuexToLocal:function(){sessionStorage.getItem("store")&&(this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store")))),localStorage.removeItem("store")),console.log(this.saveVuex),window.addEventListener("beforeunload",this.saveVuex)},cancelListening:function(){window.removeEventListener("beforeunload",this.saveVuex),sessionStorage.removeItem("store")},saveVuex:function(){sessionStorage.setItem("store",JSON.stringify(this.$store.state))}},mounted:function(){},created:function(){this.saveVuexToLocal()},deactivated:function(){this.cancelListening()},beforeDestroy:function(){}}),v=d,f=(n("e6e6"),Object(u["a"])(v,s,i,!1,null,"74e63b78",null));t["default"]=f.exports},"29c0":function(e,t,n){},"3d11":function(e,t,n){},"8d66":function(e,t,n){"use strict";n("29c0")},e6e6:function(e,t,n){"use strict";n("3d11")}}]);
//# sourceMappingURL=chunk-6bd5771c.b4600e67.js.map