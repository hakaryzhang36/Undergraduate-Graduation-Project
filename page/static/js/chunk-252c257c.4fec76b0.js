(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-252c257c"],{"04f1":function(t,e,a){},"0574":function(t,e,a){},"0d17":function(t,e,a){"use strict";a("6ad4")},"0f16":function(t,e,a){"use strict";a("db9d")},1148:function(t,e,a){"use strict";var r=a("a691"),i=a("1d80");t.exports=function(t){var e=String(i(this)),a="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}},"12b7":function(t,e,a){"use strict";a("04f1")},"1b8c":function(t,e,a){"use strict";a("87a9")},"1eb8":function(t,e,a){"use strict";a("2a9e")},2909:function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function i(t){if(Array.isArray(t))return r(t)}a.d(e,"a",(function(){return c}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("fb6a"),a("b0c0");function n(t,e){if(t){if("string"===typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||n(t)||s()}},"2a9e":function(t,e,a){},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"4df4":function(t,e,a){"use strict";var r=a("0366"),i=a("7b0b"),o=a("9bdd"),n=a("e95a"),s=a("50c4"),c=a("8418"),l=a("35a1");t.exports=function(t){var e,a,u,h,d,g,m=i(t),f="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,y=l(m),x=0;if(b&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==y||f==Array&&n(y))for(e=s(m.length),a=new f(e);e>x;x++)g=b?v(m[x],x):m[x],c(a,x,g);else for(h=y.call(m),d=h.next,a=new f;!(u=d.call(h)).done;x++)g=b?o(h,v,[u.value,x],!0):u.value,c(a,x,g);return a.length=x,a}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),i=a("5899"),o="["+i+"]",n=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5d21":function(t,e,a){"use strict";a("facb")},"6ad4":function(t,e,a){},7156:function(t,e,a){var r=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var o,n;return i&&"function"==typeof(o=e.constructor)&&o!==a&&r(n=o.prototype)&&n!==a.prototype&&i(t,n),t}},"87a9":function(t,e,a){},"92da":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{id:"ProjectManage"}},[a("el-Dialog",{attrs:{title:"创建新方案",visible:t.dialogFormVisible,"close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[t.dialogFormVisible?a("DialogFrom"):t._e()],1),a("el-header",{staticClass:"project-manage-header",attrs:{height:"30px"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item-status"},[a("div",{staticClass:"item-status-title"},[t._v(" "+t._s(t.vuexResultListCurItem.name)+" ")]),a("div",{staticClass:"btn-list"},[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.createProject}},[t._v("新建")]),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.editProject}},[t._v("编辑")]),a("el-button",{attrs:{loading:t.loadingDelete,type:"success",size:"mini"},on:{click:t.onDeleteClick}},[t._v("删除")]),a("el-button",{attrs:{loading:t.loadingDelete,type:"success",size:"mini"},on:{click:t.onLookClick}},[t._v("查看描述")]),a("el-button",{attrs:{loading:t.loadingRun,type:"danger",size:"mini"},on:{click:t.onRunClick}},[t._v("启动")])],1)])])],1)],1),a("el-container",[a("el-aside",{attrs:{width:"270px"}},[a("el-row",{staticClass:"aside-list"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"aside-list-right"},[a("ResultList")],1)])],1)],1),a("el-main",[a("el-row",[a("el-col",[a("div",{staticClass:"project-show",staticStyle:{display:"flex"}},[a("div",{staticClass:"item-show border-cricle"},[a("ItemShow")],1),a("div",{staticClass:"params-show"},[a("div",{staticClass:"project-param border-cricle"},[a("div",{staticClass:"params-show-title"},[t._v("项目配置")]),a("div",{staticClass:"right-param-form"},[a("el-table",{attrs:{"show-header":!1,data:t.runningConfig}},[a("el-table-column",{attrs:{prop:"name",label:"参数名"}}),a("el-table-column",{attrs:{prop:"value",label:"设定"}})],1)],1)]),a("div",{staticClass:"item-param border-cricle"},[a("div",{staticClass:"params-show-title params-show-title-two"},[t._v(" 参数配置 ")]),a("div",{staticClass:"params-show-node"},[a("NodeParam")],1)])])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"show-status"},[a("div",{staticClass:"show-status-item show-status-table border-cricle"},[a("StatusTable",{attrs:{tableData:t.currentStatusData}})],1),t._l(t.statusChart,(function(t,e){return a("div",{key:e,staticClass:"show-status-item show-status-charts border-cricle"},[a("StatusChart",{attrs:{chartData:t,chartIndex:e}})],1)})),a("div",{staticClass:"show-status-item show-status-progress border-cricle"},[a("StatusProgress",{attrs:{percentage:t.totalProcess}})],1)],2)])],1)],1)],1)],1)},i=[],o=a("2909"),n=(a("d81d"),a("b64b"),a("b0c0"),a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"0",collapse:!1},on:{select:t.handleSelect}},t._l(t.navList,(function(e,r){return a("el-menu-item",{key:r,attrs:{index:r+""}},[a("i",{class:t.iconList[r%4].icon}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])})),1)}),s=[],c=a("5530"),l={data:function(){return{isCollapse:!0,navList:[],iconList:[{index:"1",keyPath:"Navigation",title:"目标检测",icon:"el-icon-menu"},{index:"2",keyPath:"DataManage",title:"数据预测",icon:"el-icon-document"},{index:"3",keyPath:"TagImage",title:"异常分析",icon:"el-icon-setting"},{index:"4",keyPath:"TagImage",title:"图片分类",icon:"el-icon-setting"}]}},methods:{handleSelect:function(t,e){console.log(t,e),t=parseInt(t);var a=Object(c["a"])({},this.navList[t]);this.$store.commit("projectManage/set_asideLeft_projectType",a)},getProjectType:function(){var t=this;this.$api.getProjectType().then((function(e){if(200===e.code){t.$store.commit("projectManage/setAsideLeft",{key:"projectTypeList",value:Object(o["a"])(e.project_type)}),t.navList=e.project_type.map((function(t){return{name:t,type:t}}));var a=Object(c["a"])({},t.navList[0]);t.$store.commit("projectManage/set_asideLeft_projectType",a)}})).catch((function(t){console.log(t)}))}},created:function(){this.getProjectType()},mounted:function(){}},u=l,h=(a("12b7"),a("2877")),d=Object(h["a"])(u,n,s,!1,null,"32b4e58b",null),g=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{id:"ResultList"}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"result-search"},[a("el-input",{ref:"inlineInput",staticClass:"inline-input",attrs:{"prefix-icon":"el-icon-search","fetch-suggestions":t.querySearch,placeholder:"请输入内容",size:"small",clearable:""},on:{focus:t.switchSearchMode,clear:t.clearInputValue,blur:t.restoreResultList},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSearchResult(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1)]),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"result-show"},[a("el-scrollbar",{ref:"scrollList"},[a("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"result-show-box",attrs:{"infinite-scroll-disabled":!0,"infinite-scroll-immediate":!1,"infinite-scroll-delay":1e3},on:{click:t.onCurItemClick}},[t._l(t.navList,(function(e,r){return a("li",{key:e+r,staticClass:"result-show-box-item",class:t.curIndex==r?"is-active":"",attrs:{"data-index":r}},[t._v(" "+t._s(e.name)+" ")])})),t.loading?a("li",{staticClass:"result-show-box-loading"},[t._v("加载中...")]):t._e(),t.disabled&&!t.loading?a("li",{staticClass:"result-show-box-noMore"},[t._v(" 没有更多了 ")]):t._e()],2)])],1)]),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"result-pagination"},[a("el-pagination",{attrs:{background:"",small:!0,"pager-count":5,"current-page":t.currentPageNumber,"page-size":20,layout:"prev, pager, next,jumper",total:t.totalNumber},on:{"current-change":t.handleCurrentChange}})],1)])],1)},f=[],p=(a("a434"),a("c740"),{data:function(){return{inputValue:"",navList:[],loading:!1,curItem:"",curIndex:0,getProjectParams:{currentPage:0,pageSize:20,totalPage:0,type:"",isNext:""},disabled:!1,cacheNavigationList:[],cacheCurrentData:{curIndex:0,curItem:[],navList:[],disabled:!1,getProjectParams:""},timer:null,searchSwitch:!1,currentPageNumber:1,totalNumber:1}},computed:{selectedTypeVuex:function(){return this.$store.state.projectManage.asideLeft.projectType},curNavList:function(){return this.navList},isDelectVuex:function(){return this.$store.state.projectManage.resultList.isDelect},ruleFormVuex:function(){return this.$store.state.projectManage.dialogFrom.ruleForm},currentTag:function(){return this.$store.state.NavigationPage.compTag.currentTag}},watch:{inputValue:{handler:function(){this.disabled=!1,this.getProjectParams.currentPage=0}},navList:{handler:function(t){this.$store.commit("projectManage/setResultList",{key:"curNavList",value:Object(o["a"])(t)})}},selectedTypeVuex:{handler:function(t){console.log(t),this.getProjectParams.type=t.type,this.getProjectParams.currentPage=1,this.curItem="",this.curIndex=0,this.currentPageNumber=1,this.navList=[],this.getProjectList(t.type,1),this.disabled=!1},deep:!0},curItem:{handler:function(t){var e=Object(c["a"])({},t),a=parseInt(this.curIndex);this.$store.commit("projectManage/set_resultList_curItem",{curItem:e,curIndex:a}),console.log("选中了")},deep:!0},isDelectVuex:{handler:function(t){if(!0===t){this.navList.splice(this.curIndex,1),this.$store.commit("projectManage/delect_resultList_isDelect",!1);var e=this.navList.length;e>0&&this.curIndex<e||(this.curIndex=e-1),this.curItem=this.navList[this.curIndex],console.log("删除")}}},ruleFormVuex:{handler:function(t){console.log(t);var e={name:t.name,desc:t.desc,id:t.id,type:t.type};this.navList.splice(0,0,e),this.curIndex+=1},deep:!0},currentTag:{handler:function(t){t.routeName===this.$route.name&&(this.curIndex=this.navList.findIndex((function(e){return e.name===t.itemName})),this.curItem=this.navList[this.curIndex])},deep:!0}},methods:{handleSelect:function(t,e){console.log(t,e)},querySearch:function(t,e){var a=[{value:"返回值一",other:""},{value:"返回值二",other:""},{value:"返回值三",other:""}];e(a)},searchSelect:function(t){console.log(t),this.navList.unshift({index:"2",navRouter:"DataManage",title:"数据预的水电费水电费师傅师傅师傅说测",icon:"el-icon-document"})},load:function(){this.searchSwitch?this.searchLoad():this.classifyLoad()},classifyLoad:function(){var t=this;console.log("******************classifyLoad****************"),this.loading=!0,this.getProjectParams.currentPage+=1;var e=this.getProjectParams.currentPage,a=this.getProjectParams.pageSize,r=this.selectedTypeVuex.type;this.$api.getProjectList({pageNum:e,pageSize:a,algriType:r}).then((function(e){var a;200==e.code&&(t.disabled=!e.isNext,t.getProjectParams.isNext=e.isNext,(a=t.navList).push.apply(a,Object(o["a"])(e.mapMsg)),t.loading=!1)})).catch((function(t){console.log(t)}))},searchLoad:function(){var t=this;console.log("******************搜索滚动**************");var e=this.inputValue;this.getProjectParams.currentPage+=1;var a=this.getProjectParams.currentPage,r=this.getProjectParams.pageSize;this.$api.searchProject({keyword:e,pageSize:r,pageNum:a}).then((function(e){var a;(console.log(e),200===e.code)&&(t.disabled=!e.isNext,(a=t.navList).push.apply(a,Object(o["a"])(e.mapMsg)))})).catch((function(t){console.log(t)}))},onCurItemClick:function(t){if(console.log(t.target.className),console.log(/result-show-box-item/.test(t.target.className)),/result-show-box-item/.test(t.target.className)){console.log(t.target.dataset.index),this.curIndex=parseInt(t.target.dataset.index),this.curItem=this.navList[this.curIndex];var e={itemName:this.curItem.name,routeName:this.$route.name,pageIndex:"",icon:""};this.$store.commit("NavigationPage/setCompTagTags",e)}},delectCurProject:function(){this.navList.splice(this.curIndex,1)},getProjectList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"图片分类",a=arguments.length>1?arguments[1]:void 0,r={pageNum:a,pageSize:20,algriType:e};this.$api.getProjectList(r).then((function(e){t.totalNumber=20*e.totalPages,t.navList=e.mapMsg,t.$store.commit("projectManage/set_resultList_curItem",{curItem:e.mapMsg[0],curIndex:0})})).catch((function(t){console.log(t)}))},clearInputValue:function(){console.log("清除按钮被点击了"),this.$refs["inlineInput"].blur()},switchSearchMode:function(){""===this.inputValue&&(this.cacheCurrentData.navList=Object(o["a"])(this.navList),this.cacheCurrentData.curIndex=this.curIndex,this.cacheCurrentData.curItem=this.curItem,this.cacheCurrentData.disabled=this.disabled,this.cacheCurrentData.getProjectParams=Object(c["a"])({},this.getProjectParams),this.getProjectParams={currentPage:1,pageSize:20,totalPage:0,type:"",isNext:""},this.disabled=!1,this.searchSwitch=!0)},getSearchResult:function(){var t=this,e=this.inputValue;this.$api.searchProject({keyword:e,pageSize:20,pageNum:1}).then((function(e){200===e.code?(t.navList=[],t.navList=Object(o["a"])(e.mapMsg)):t.$message({type:"error",message:"没有匹配结果",showClose:!0})}))},restoreResultList:function(){""===this.inputValue&&(this.navList=Object(o["a"])(this.cacheCurrentData.navList),this.curIndex=this.cacheCurrentData.curIndex,this.curItem=this.cacheCurrentData.curItem,this.disabled=this.cacheCurrentData.disabled,this.getProjectParams=Object(c["a"])({},this.cacheCurrentData.getProjectParams),this.searchSwitch=!1)},handleCurrentChange:function(t){this.currentPageNumber=t,this.getProjectList(this.selectedTypeVuex.type,t),console.log("当前页: ".concat(t))}},created:function(){this.getProjectList(this.selectedTypeVuex.type,1)}}),v=p,b=(a("1eb8"),a("efed"),Object(h["a"])(v,m,f,!1,null,"091311bc",null)),y=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"echart",staticClass:"status-echart"},[t._v("echart")])},j=[],P=(a("a9e3"),a("313e")),w=a.n(P),C={props:{chartData:{type:Object,default:function(){return{title:"",xData:[],series:[]}}},chartIndex:{type:Number,default:0}},computed:{options:function(){return this.axisOption},dataChart:function(){return this.chartData}},watch:{chartData:{handler:function(){this.initChart()},deep:!0}},data:function(){return{echart:null,axisOption:{title:{text:"无数据",textStyle:{color:"#ffff"},left:20},grid:{left:"40",top:"40",bottom:"20",right:20},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{color:"#ffff"}},yAxis:{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{color:"#ffff"}},color:"#222222",series:[{data:[],type:"line",areaStyle:{}}]},colorList:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"]}},methods:{initChart:function(){console.log("initChart"),this.initChartData(),this.echart||(this.echart=w.a.init(this.$refs.echart)),this.echart.setOption(this.options)},initChartData:function(){this.axisOption.title.text=this.chartData.title,this.axisOption.xAxis.data=this.chartData.xData;var t=this.colorList.length;this.axisOption.color=this.colorList[this.chartIndex%t],this.axisOption.series[0].data=this.chartData.yData},resizeChart:function(){this.echart&&this.echart.resize()}},mounted:function(){this.initChart(),window.addEventListener("resize",this.resizeChart)},destroyed:function(){window.removeEventListener("resize",this.resizeChart)}},S=C,D=(a("0d17"),Object(h["a"])(S,x,j,!1,null,"cb1754c8",null)),I=D.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status-progress"},[a("div",{attrs:{id:"title"}},[t._v("运行总进度")]),a("el-progress",{attrs:{type:"circle",percentage:t.percentage,"stroke-width":16,color:t.colors}})],1)},_=[],F={props:{percentage:{type:Number,default:0}},data:function(){return{colors:[{color:"#C280FF",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#C280FF",percentage:100}]}},methods:{}},k=F,N=(a("1b8c"),Object(h["a"])(k,L,_,!1,null,"252d36be",null)),$=N.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,"highlight-current-row":!1,data:t.tableData2,height:""+t.maxHeight}},[a("el-table-column",{attrs:{prop:"tag"}}),a("el-table-column",{attrs:{prop:"value"}})],1)],1)},M=[],O=(a("b680"),{props:{tableData:{type:Array,default:function(){return[]}}},data:function(){return{maxHeight:200}},computed:{tableData2:function(){return this.tableData.map((function(t){return t.value=parseFloat(t.value).toFixed(4),t}))}},mounted:function(){}}),V=O,A=(a("de5e"),Object(h["a"])(V,T,M,!1,null,"7d0f0c2f",null)),R=A.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"ShowItem"}},[a("div",{staticClass:"main",attrs:{id:"container"}},[t._v("可拖动组件")])])},z=[],W=(a("159b"),a("5728")),J=(a("3e2f"),{data:function(){return{graph:"",curNode:"",curProjectJson:"",loading:!1,mapMsg:{},stencil:"",colorList:["#fc5c65","#fd9644","#fed330","#26de81","#2bcbba","#45aaf2","#4b6584","#d1d8e0","#b8e994","#60a3bc","#4a69bd","#f8c291"],shapeList:["polygon","circle","rect"],nodeShape:[{inherit:"polygon",width:70,height:30,attrs:{body:{fill:"#fc5c65",stroke:"#e77c8e",strokeWidth:1,refPoints:"5,0 50,0 45,20 0,20"},label:{color:"#262626",fontSize:10,textAnchor:"middle",textWrap:{text:"",width:-20,height:"90%",ellipsis:!0,breakWord:!0}}},ports:{}},{inherit:"rect",width:70,height:30,attrs:{body:{fill:"#fc5c65",stroke:"#e77c8e",strokeWidth:1,rx:20,ry:26},label:{color:"#262626",fontSize:10,textAnchor:"middle",textWrap:{text:"",width:-10,height:"90%",ellipsis:!0,breakWord:!0}}},ports:{}},{inherit:"rect",width:70,height:30,attrs:{body:{fill:"#fc5c65",stroke:"#e77c8e",strokeWidth:1},label:{color:"#262626",fontSize:10,textAnchor:"middle",textWrap:{text:"",width:-10,height:"90%",ellipsis:!0,breakWord:!0}}},ports:{}}]}},computed:{projectJson:function(){return this.$store.state.projectManage.itemShow.projectJson},curItemVuex:function(){return this.$store.state.projectManage.resultList.curItem}},watch:{projectJson:{handler:function(t,e){this.graph.fromJSON(t),console.log(t),console.log(e)},deep:!0},curItemVuex:{handler:function(t){var e=this;this.loading=!0,this.$api.getProjectConfig({id:t.id}).then((function(t){console.log(t),e.graph.clearCells();var a=t.mapMsg.graph_config;a.length?e.graph.fromJSON(a):e.$message({showClose:!0,type:"info",message:"该项目为空,请到编辑页面进行编辑"}),e.loading=!1,e.$store.commit("projectManage/setItemShow",{key:"runningConfig",value:t.mapMsg.running_config})})).catch((function(t){e.loading=!1,console.log(t)}))}}},methods:{setGraph:function(){var t=new W["c"]({container:document.getElementById("container"),width:"100%",height:"100%",autoResize:!0,background:{color:"white"},grid:{size:10,visible:!0},connecting:{router:{name:"manhattan",args:{padding:1}},connector:{name:"rounded",args:{radius:8}},anchor:"center",connectionPoint:"anchor",allowBlank:!1,snap:{radius:20},createEdge:function(){return new W["j"].Edge({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,targetMarker:{name:"block",width:12,height:8}}},zIndex:0})},validateConnection:function(t){var e=t.targetMagnet;return!!e}},panning:{enabled:!0},selecting:{enabled:!0,multiple:!0,rubberband:!0,movable:!0,showNodeSelectionBox:!0,showEdgeSelectionBox:!0,modifiers:"shift"},history:!0,mousewheel:{enabled:!0,zoomAtMousePosition:!0,modifiers:"ctrl",minScale:.5,maxScale:3},resizing:{enabled:!1,minWidth:20,minHeight:10,maxWidth:500,maxHeight:500,orthogonal:!0,restricted:!1,autoScroll:!0,preserveAspectRatio:!1,allowReverse:!0},interacting:{nodeMovable:!1}});this.graph=t},setNode:function(){var t=this,e=this.graph,a=this.mapMsg,r={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"top"},{group:"right"},{group:"bottom"},{group:"left"}]},i=Object.keys(a),o=[],n={},s=this.colorList,l=this.colorList.length;i.forEach((function(i,u){var h=a[i].length;o.push({title:i,name:i,graphHeight:60*Math.ceil(h/2)||130,layoutOptions:{rowHeight:55}}),n[i]=[];var d=JSON.parse(JSON.stringify(t.nodeShape[u]));d.ports=Object(c["a"])({},r),d.attrs.label.text=i,W["c"].registerNode(i,d,!0),a[i].forEach((function(t,a){var r={},o=t["module_config"]["parameters"];Object.keys(o).forEach((function(t){var e=o[t];Array.isArray(e)&&e.length>0?r[t]=e[0]:r[t]=e})),r["name"]=t["name"],r["local_name"]=t["name"];var u=e.createNode({shape:i,attrs:{body:{fill:s[a%l]},label:{text:t.name}},data:Object(c["a"])({},r)});n[i].push(u)}))}));var u=new W["a"].Stencil({title:"模块组件",target:e,stencilGraphWidth:240,stencilGraphHeight:350,collapsable:!0,groups:o,layoutOptions:{columns:2,columnWidth:100,rowHeight:60,resizeToFit:!0}});this.stencil=u,Object.keys(n).forEach((function(t){u.load(n[t],t)}))},setNodeData:function(){var t=this,e=this.graph;e.on("node:click",(function(e){var a=e.node;t.curNode=a,t.$store.commit("projectManage/setItemShow",{key:"currentNodeData",value:Object(c["a"])({},a.data)})})),e.on("edge:click",(function(e){var a=e.edge;console.log(a.data),t.$store.commit("projectManage/setItemShow",{key:"currentNodeData",value:Object(c["a"])({},a.data)})})),e.on("blank:click",(function(){t.curNode="",t.$store.commit("projectManage/set_nodeParam_nodeType","")}))},getModules:function(){var t=this;this.$api.getModules().then((function(e){console.log(e),t.mapMsg=e.mapMsg,t.setNode()}))},getProjectData:function(){var t=this;this.curItemVuex.id&&(this.loading=!0,this.$api.getProjectConfig({id:this.curItemVuex.id}).then((function(e){t.graph.clearCells();var a=e.mapMsg.graph_config;a.length?t.graph.fromJSON(a):t.$message({showClose:!0,message:"该项目为空,请到编辑页面进行编辑"}),t.loading=!1,t.$store.commit("projectManage/setItemShow",{key:"runningConfig",value:e.mapMsg.running_config})})).catch((function(e){t.loading=!1,console.log(e)})))}},created:function(){},mounted:function(){this.setGraph(),this.getModules(),this.setNodeData()},activated:function(){console.log(this.curItemVuex.id),this.getProjectData(),console.log("进入活动状态")}}),q=J,G=(a("a7b1"),Object(h["a"])(q,E,z,!1,null,"dfeb2e98",null)),H=G.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"node-param"}},[a("el-table",{attrs:{data:t.nodeParams,height:"290px"}},[a("el-table-column",{attrs:{prop:"name",label:"参数名"}}),a("el-table-column",{attrs:{prop:"value",label:"设定"}})],1)],1)},U=[],X={data:function(){return{nodeParamsList:{default:[{name:"模型名称",value:"vfsdfv",trigger:"noShow",tips:[{value:"100",otherData:{}},{value:"1000",otherData:{}},{value:"10000",otherData:{}}]},{name:"迭代次数",value:"55",tips:[{value:"100",otherData:{}},{value:"1000",otherData:{}},{value:"10000",otherData:{}}]},{name:"批次大小",value:"44",tips:[{value:"100",otherData:{}},{value:"1000",otherData:{}},{value:"10000",otherData:{}}]},{name:"初始模型",value:"8898",tips:[{value:"模型1",otherData:{}},{value:"模型2",otherData:{}},{value:"模型3",otherData:{}}]},{name:"入口函数",value:"是否SVSV",tips:[{value:"入口函数1",otherData:{}},{value:"入口函数2",otherData:{}},{value:"入口函数3",otherData:{}}]}]}}},computed:{nodeParams:function(){var t=[],e=this.currentNodeDataVuex;return t=Object.keys(e).map((function(t){return{name:t,value:e[t]}})),t},nodeType:function(){return this.$store.state.projectManage.nodeParam.nodeType||"default"},currentNodeDataVuex:function(){return this.$store.state.projectManage.itemShow.currentNodeData}},methods:{handleSelect:function(){console.log("ss")}}},Y=X,K=(a("d562"),a("ac24"),Object(h["a"])(Y,B,U,!1,null,"b68b31e4",null)),Q=K.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"方案名称",prop:"name"}},[a("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),a("el-form-item",{attrs:{label:"创建方式",prop:"resource"}},[a("el-radio-group",{model:{value:t.ruleForm.resource,callback:function(e){t.$set(t.ruleForm,"resource",e)},expression:"ruleForm.resource"}},[a("el-radio",{attrs:{label:"new"}},[t._v("创建新版本")]),a("el-radio",{attrs:{label:"inherit"}},[t._v("继承已有版本")])],1)],1),"inherit"===t.ruleForm.resource?a("el-form-item",{attrs:{label:"继承方案",prop:"inherit"}},[a("el-select",{attrs:{filterable:"",remote:"",clearable:"","loading-text":"","remote-method":t.getRemoteData,placeholder:"请选择算法方案"},on:{clear:t.clearInherit},model:{value:t.ruleForm.inherit,callback:function(e){t.$set(t.ruleForm,"inherit",e)},expression:"ruleForm.inherit"}},t._l(t.optionalProjects,(function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1)],1):t._e(),a("el-form-item",{attrs:{label:"算法类型",prop:"region"}},[a("el-select",{attrs:{placeholder:"请选择算法类型"},on:{change:t.changeProjectType},model:{value:t.ruleForm.region,callback:function(e){t.$set(t.ruleForm,"region",e)},expression:"ruleForm.region"}},t._l(t.projectTypeListVuex,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-form-item",{attrs:{label:"方案说明",prop:"desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.ruleForm.desc,callback:function(e){t.$set(t.ruleForm,"desc",e)},expression:"ruleForm.desc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("立即创建")]),a("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1)},tt=[],et={data:function(){return{ruleForm:{name:"",region:"",resource:"",desc:"",inherit:""},rules:{name:[{required:!0,message:"请输入方案名称",trigger:"blur"},{min:3,max:90,message:"长度在 3 到 90 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择算法类型",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择创建方式",trigger:"blur"}],desc:[{required:!0,message:"请填写方案说明",trigger:"blur"}],inherit:[{required:!0,message:"请选择继承方案",trigger:"blur"}]},optionalProjects:[]}},computed:{projectTypeListVuex:function(){return this.$store.state.projectManage.asideLeft.projectTypeList},projectTypeVuex:function(){return this.$store.state.projectManage.asideLeft.projectType.name},curNavList:function(){return this.$store.state.projectManage.resultList.curNavList}},methods:{submitForm:function(t){var e=this,a=this;this.$refs[t].validate((function(t){if(!t)return a.$message({showClose:!0,type:"error",message:"请按要求填写信息"}),!1;console.log(a.ruleForm);var r={projectName:a.ruleForm.name,desc:a.ruleForm.desc,projectType:a.ruleForm.region,inherit:a.ruleForm.inherit};e.addProject(r)}))},resetForm:function(t){this.$refs[t].resetFields()},addProject:function(t){var e=this,a=this;this.$api.addProject(t).then((function(t){console.log(t),200===t.code?(a.$message({showClose:!0,type:"success",message:"创建成功"}),a.$store.commit("projectManage/set_dialogFrom",{ruleForm:Object(c["a"])(Object(c["a"])({},a.ruleForm),{},{id:t.id}),dialogFormVisible:!1}),e.$refs["ruleForm"].resetFields()):a.$message({showClose:!0,type:"error",message:"".concat(t.message)})})).catch((function(t){a.$message({showClose:!0,type:"error",message:"".concat(t.message)}),console.log(t)}))},getRemoteData:function(t){var e=this;console.log(t);var a={pageNum:1,pageSize:12,keyword:t};this.$api.searchProject(a).then((function(t){200===t.code?e.optionalProjects=t.mapMsg:e.optionalProjects=[],console.log(t)})).catch((function(t){console.log(t)}))},clearInherit:function(){var t=this,e=this.ruleForm.region;if(e===this.projectTypeVuex)this.optionalProjects=this.curNavList;else{var a={pageNum:1,pageSize:20,algriType:e};this.$api.getProjectList(a).then((function(e){200===e.code?t.optionalProjects=e.mapMsg:t.optionalProjects=[]})).catch((function(t){console.log(t)}))}},changeProjectType:function(t){var e=this,a={pageNum:1,pageSize:20,algriType:t};this.$api.getProjectList(a).then((function(t){200===t.code?e.optionalProjects=t.mapMsg:e.optionalProjects=[]})).catch((function(t){console.log(t)}))}},created:function(){console.log("dialogFrom")},mounted:function(){this.ruleForm.region=this.projectTypeVuex,this.optionalProjects=this.curNavList},beforeDestroy:function(){console.log("dialogFrom,beforeDestroy")}},at=et,rt=Object(h["a"])(at,Z,tt,!1,null,"ce0f3bfe",null),it=rt.exports,ot={components:{AsideLeft:g,ResultList:y,StatusChart:I,StatusProgress:$,StatusTable:R,ItemShow:H,NodeParam:Q,DialogFrom:it},data:function(){return{StatusChart:{zero:[{tag:"模型评分",value:"81"},{tag:"损失值",value:"31"},{tag:"准确率",value:"12"},{tag:"F1",value:"21"}],one:{title:"缺失值",xData:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[{data:[150,230,224,218,135,147,260],type:"line",areaStyle:{}}]},two:{title:"准确率",xData:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[{data:[15,23,24,28,35,47,60],type:"line",areaStyle:{}}]},three:{title:"损失率",xData:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[{data:[15,23,47,60,24,28,35],type:"line",areaStyle:{}}]}},totalProcess:0,realTimeData:{},statusChart:[],dialogFormVisible:!1,loadingRelease:!1,loadingRun:!1,loadingDelete:!1,project_structure:{running_config:{initial_function:"入口函数1",initial_module:"初始模块1"}},pollingTimer:null}},computed:{vuexDialogFormVisible:function(){return this.$store.state.projectManage.dialogFrom.dialogFormVisible},vuexResultListCurItem:function(){return this.$store.state.projectManage.resultList.curItem},runningConfig:function(){var t={initial_function:"入口函数",initial_module:"初始模块"},e=this.$store.state.projectManage.itemShow.runningConfig,a=Object.keys(e).map((function(a){return{name:t[a],value:e[a]}}));return a},curItemVuex:function(){return this.$store.state.projectManage.resultList.curItem},initial_module:function(){return[1,2]},graphNodes:function(){return[]},currentStatusData:function(){var t=this;return Object.keys(this.realTimeData).map((function(e){return{tag:e,value:t.realTimeData[e]}}))}},watch:{vuexDialogFormVisible:{handler:function(t){this.dialogFormVisible=t}},curItemVuex:{handler:function(t){this.pollingTimer&&clearTimeout(this.pollingTimer),this.totalProcess=0,this.statusChart=[{title:"暂无数据",xData:[],yData:[]},{title:"暂无数据",xData:[],yData:[]},{title:"暂无数据",xData:[],yData:[]}],this.realTimeData={},this.getAllProjectStatus(),console.log(t)},deep:!0}},methods:{createProject:function(){this.dialogFormVisible=!0,this.$store.commit("projectManage/set_dialogFrom_dialogFormVisible",!0)},editProject:function(){this.$router.push({name:"FlowChart"}),console.log("d")},onReleaseClick:function(){var t=this;this.loadingRelease=!0,setTimeout((function(){t.$message({type:"success",message:"发布成功"}),t.loadingRelease=!1}),1e3)},onRunClick:function(){var t=this;this.loadingRun=!0,this.reset();var e={id:this.curItemVuex.id};this.$api.runProject(e).then((function(e){200===e.code&&(t.getRealtimeProjectStatus(),console.log(e),t.loadingRun=!1)})).catch((function(e){console.log(e),t.loadingRun=!1}))},onDeleteClick:function(){var t=this;this.$confirm("此操作将永久删除该方案, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loadingDelete=!0;var e=t.curItemVuex.name,a=t.$route.name;t.$api.deleteProject({projectName:t.curItemVuex.name}).then((function(r){console.log(r),t.loadingDelete=!1,t.$message({type:"success",message:"删除成功"}),t.$store.commit("projectManage/delect_resultList_isDelect",!0),t.$store.commit("NavigationPage/delCompTag",{itemName:e,routeName:a})})).catch((function(e){console.log(e),t.$message({type:"error",message:"删除失败"}),t.loadingDelete=!1}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},onLookClick:function(){var t=this;this.$alert("".concat(t.vuexResultListCurItem.desc),t.vuexResultListCurItem.name,{})},getRealtimeProjectStatus:function(){var t=this,e={id:this.curItemVuex.id};this.totalProcess>=100||(console.log("******获取项目实时数据*******"),this.$api.getProjectStatusRealtime(e).then((function(e){var a=t.statusChart;t.pollingTimer=setTimeout((function(){clearTimeout(t.pollingTimer),t.getRealtimeProjectStatus();var r=e.result.run_real_time_msg;r&&(0!==a.length&&a[0].title&&"暂无数据"!==a[0].title||(t.statusChart=Object.keys(r).filter((function(t){return"epoch"!=t})).map((function(t){return{title:t,yData:[r[t]],xData:[r["epoch"]]}}))),Object.keys(r).some((function(e){return""+r[e]!==t.realTimeData[e]+""}))&&(t.statusChart=t.statusChart.map((function(t){t.yData.push(r[t.title]);var e=t.xData.length;return t.xData.push(e),t})),t.realTimeData=r,t.totalProcess=parseFloat(e.result.total_progress)))}),500)})).catch((function(t){console.log(t)})))},getAllProjectStatus:function(){var t=this;console.log("******获取项目历史数据*******");var e={id:this.curItemVuex.id};this.$api.getProjectStatusAll(e).then((function(e){if(console.log(e),Object.keys(e.result).length>0){var a=e.result.run_history_path;t.statusChart=Object.keys(a).filter((function(t){return"epoch"!=t})).map((function(t){return{title:t,yData:a[t],xData:Object(o["a"])(a["epoch"])}}));var r=e.result.run_real_time_msg;t.realTimeData=r,t.totalProcess=parseFloat(e.result.total_progress),setTimeout((function(){t.getRealtimeProjectStatus()}),0)}})).catch((function(t){console.log(t)}))},reset:function(){this.totalProcess=0,this.statusChart=[{title:"暂无数据",xData:[],yData:[]},{title:"暂无数据",xData:[],yData:[]},{title:"暂无数据",xData:[],yData:[]}],this.realTimeData={}}},created:function(){},mounted:function(){},activated:function(){this.getAllProjectStatus()},deactivated:function(){clearTimeout(this.pollingTimer)},beforeDestroy:function(){clearTimeout(this.pollingTimer)}},nt=ot,st=(a("5d21"),a("0f16"),Object(h["a"])(nt,r,i,!1,null,"58cd35ba",null));e["default"]=st.exports},"93f5":function(t,e,a){},"9bdd":function(t,e,a){var r=a("825a"),i=a("2a62");t.exports=function(t,e,a,o){try{return o?e(r(a)[0],a[1]):e(a)}catch(n){throw i(t),n}}},a630:function(t,e,a){var r=a("23e7"),i=a("4df4"),o=a("1c7e"),n=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:n},{from:i})},a7b1:function(t,e,a){"use strict";a("0574")},a9e3:function(t,e,a){"use strict";var r=a("83ab"),i=a("da84"),o=a("94ca"),n=a("6eeb"),s=a("5135"),c=a("c6b6"),l=a("7156"),u=a("c04e"),h=a("d039"),d=a("7c73"),g=a("241c").f,m=a("06cf").f,f=a("9bf2").f,p=a("58a8").trim,v="Number",b=i[v],y=b.prototype,x=c(d(y))==v,j=function(t){var e,a,r,i,o,n,s,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(o=l.slice(2),n=o.length,s=0;s<n;s++)if(c=o.charCodeAt(s),c<48||c>i)return NaN;return parseInt(o,r)}return+l};if(o(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var P,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(x?h((function(){y.valueOf.call(a)})):c(a)!=v)?l(new b(j(e)),a,w):j(e)},C=r?g(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;C.length>S;S++)s(b,P=C[S])&&!s(w,P)&&f(w,P,m(b,P));w.prototype=y,y.constructor=w,n(i,v,w)}},ac24:function(t,e,a){"use strict";a("93f5")},b680:function(t,e,a){"use strict";var r=a("23e7"),i=a("a691"),o=a("408a"),n=a("1148"),s=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},h=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},d=function(t,e,a){var r=-1,i=a;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=l(i/1e7)},g=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=l(r/e),r=r%e*1e7},m=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=String(t[e]);a=""===a?r:a+n.call("0",7-r.length)+r}return a},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));r({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,a,r,s,c=o(this),l=i(t),f=[0,0,0,0,0,0],p="",v="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(e=h(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){d(f,0,a),r=l;while(r>=7)d(f,1e7,0),r-=7;d(f,u(10,r,1),0),r=e-1;while(r>=23)g(f,1<<23),r-=23;g(f,1<<r),d(f,1,1),g(f,2),v=m(f)}else d(f,0,a),d(f,1<<-e,0),v=m(f)+n.call("0",l);return l>0?(s=v.length,v=p+(s<=l?"0."+n.call("0",l-s)+v:v.slice(0,s-l)+"."+v.slice(s-l))):v=p+v,v}})},c163:function(t,e,a){},c3be:function(t,e,a){},d28b:function(t,e,a){var r=a("746f");r("iterator")},d562:function(t,e,a){"use strict";a("c3be")},db9d:function(t,e,a){},de5e:function(t,e,a){"use strict";a("f17a")},e01a:function(t,e,a){"use strict";var r=a("23e7"),i=a("83ab"),o=a("da84"),n=a("5135"),s=a("861d"),c=a("9bf2").f,l=a("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var h={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(h[e]=!0),e};l(d,u);var g=d.prototype=u.prototype;g.constructor=d;var m=g.toString,f="Symbol(test)"==String(u("test")),p=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=m.call(t);if(n(h,t))return"";var a=f?e.slice(7,-1):e.replace(p,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:d})}},efed:function(t,e,a){"use strict";a("c163")},f17a:function(t,e,a){},facb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-252c257c.4fec76b0.js.map