(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-EmployeeInformation-EmployeeInformation"],{"289e":function(t,i,e){"use strict";e.r(i);var a=e("c4a9"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},4493:function(t,i,e){"use strict";e.r(i);var a=e("6dff"),n=e("289e");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("a077");var o=e("2877"),u=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"67867f70",null);i["default"]=u.exports},"5ecd":function(t,i,e){var a=e("b0e9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("b75ef732",a,!0,{sourceMap:!1,shadowMode:!1})},"6dff":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"box",staticStyle:{"border-bottom":"1px solid #CCCCCC"}},[e("v-uni-view",{staticClass:"section section_gap",staticStyle:{height:"72upx","border-bottom":"1px solid #CCCCCC"}},[e("v-uni-text",[t._v("工号:")]),e("v-uni-input",{attrs:{type:"text",maxlength:"11",value:"",placeholder:"请输入工号"},model:{value:t.value1,callback:function(i){t.value1=i},expression:"value1"}})],1),e("v-uni-view",{staticClass:"section section_gap",staticStyle:{height:"72upx"}},[e("v-uni-text",[t._v("员工:")]),e("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入员工"},model:{value:t.value2,callback:function(i){t.value2=i},expression:"value2"}}),e("v-uni-button",{attrs:{size:"mini"},on:{click:function(i){i=t.$handleEvent(i),t.onpeDetailed(i)}}},[t._v("查询")])],1)],1),e("v-uni-view",{staticClass:"m-top"}),e("v-uni-view",{staticClass:"warp"},t._l(t.tableList,function(i,a){return e("v-uni-view",{staticClass:"uni-list"},[[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-triplex-row"},[e("v-uni-view",{staticClass:"uni-triplex-left",staticStyle:{width:"100%"}},[e("v-uni-text",{staticClass:"uni-title uni-ellipsis"},[t._v("工号:"+t._s(i.uid)),e("v-uni-text",{staticClass:"kg"}),t._v("员工:"+t._s(i.uname))],1),e("v-uni-text",{staticClass:"uni-text"},[t._v("部门:"+t._s(i.dept)),e("v-uni-text",{staticClass:"kg"}),t._v("工序:"+t._s(i.worktype)),e("v-uni-text",{staticClass:"kg"}),t._v("移动登入密码:"+t._s(i.movepassword))],1),e("v-uni-text",{staticClass:"uni-text-small uni-ellipsis",staticStyle:{color:"#FFAC60","font-size":"32upx"}},[t._v("移动登入权限:"+t._s(i.move_login)),e("v-uni-text",{staticClass:"kg"}),t._v("移动管理员:"+t._s(i.move_admin))],1)],1)],1)],1)]],2)}),1),e("v-uni-view",{staticClass:"m-bottom"})],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},a077:function(t,i,e){"use strict";var a=e("5ecd"),n=e.n(a);n.a},b0e9:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".box[data-v-67867f70]{background:#fff;margin-bottom:%?24?%;position:fixed;top:%?0?%;width:100%;z-index:99}.section[data-v-67867f70]{position:relative;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:%?30?%;height:%?72?%}.box uni-input[data-v-67867f70]{padding:0 0 0 %?10?%;margin-top:%?11?%;border:1px solid #ccc;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin-left:%?81?%}.section uni-text[data-v-67867f70]{position:absolute;top:%?10?%}.section uni-button[data-v-67867f70]{position:absolute;right:%?40?%;top:%?7?%;background:#ffac60;color:#fff;z-index:99}.uni-list-cell[data-v-67867f70]{position:relative}.warp[data-v-67867f70]{background:#fff}.kg[data-v-67867f70]{margin-left:%?30?%}.m-top[data-v-67867f70]{height:%?144?%}",""])},c4a9:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{tableList:[],value1:"",value2:""}},onLoad:function(){var t=this;this.dk=this.websiteUrl,uni.getStorage({key:"fwqsj",success:function(i){t.dk=i.data,console.log(i.data)}}),uni.request({url:"https://".concat(this.dk,"/getEmployeeInfo.aspx"),method:"GET",data:{},success:function(i){t.tableList=i.data}})},methods:{bindChange1:function(t){this.value1=t},bindChange2:function(t){this.value2=t},onpeDetailed:function(){var t=this;uni.request({url:"https://".concat(this.dk,"/getEmployeeInfo.aspx"),method:"GET",data:{UID:this.value1,uname:this.value2},success:function(i){t.tableList=i.data;for(var e=i.data,a=0;a<e.length;a++)e[a].UID,e[a].uname;t.value1="",t.value2=""}})}}};i.default=a}}]);