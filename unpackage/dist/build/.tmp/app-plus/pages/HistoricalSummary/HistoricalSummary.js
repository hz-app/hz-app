(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/HistoricalSummary/HistoricalSummary"],{"0608":function(t,e,n){"use strict";n.r(e);var a=n("f28c"),o=n("9624");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("0c68");var u=n("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"0c68":function(t,e,n){"use strict";var a=n("f267"),o=n.n(a);o.a},"62f9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/rattenking-dtpicker/rattenking-dtpicker")]).then(n.bind(null,"dfa8"))},o=function(){return n.e("components/t-table/t-table").then(n.bind(null,"3629"))},i=function(){return n.e("components/t-table/t-th").then(n.bind(null,"c35f"))},u=function(){return n.e("components/t-table/t-tr").then(n.bind(null,"80f1"))},r=function(){return n.e("components/t-table/t-td").then(n.bind(null,"b397"))},s=c();function c(){var t=new Array,e=new Date,n="-",a=e.getMonth()+1,o=e.getDate();a>=1&&a<=9&&(a="0"+a),o>=0&&o<=9&&(o="0"+o);var i=e.getFullYear()+n+a+n+"01",u=e.getFullYear()+n+a+n+o;return t.push(i),t.push(u),t}var l={components:{ruiDatePicker:a,tTable:o,tTh:i,tTr:u,tTd:r},data:function(){return{uid:"",tableList:[],value1:s[0],value2:s[1],huohao:"",worktype:"",color:"",chuanghao:"",chima:"",userid:"",sl1:"",sl2:"",zs:"",dk:""}},onBackPress:function(e){return"backbutton"===e.from&&(t.switchTab({url:"/pages/index/index"}),!0)},onLoad:function(e){var n=this;console.log("diyici:"+JSON.stringify(e)," at pages\\HistoricalSummary\\HistoricalSummary.vue:127");var a=JSON.stringify(e);a.indexOf(".html")<0&&"{}"!=JSON.stringify(e)&&(this.huohao=e.huohao,this.chuanghao=e.chuanghao,this.color=e.color,this.chima=e.chima,this.userid=e.userid,this.worktype=e.worktype),this.dk=this.websiteUrl,t.getStorage({key:"fwqsj",success:function(t){n.dk=t.data}}),t.getStorage({key:"loginData",success:function(e){n.uid=e.data.uid,t.request({url:"https://".concat(n.dk,"/gongziHz.aspx"),method:"GET",data:{dates:n.value1,datee:n.value2,huohao:n.huohao,chuanghao:n.chuanghao,color:n.color,chima:n.chima,userid:n.userid,uid:n.uid,worktype:n.worktype},success:function(t){console.log(t," at pages\\HistoricalSummary\\HistoricalSummary.vue:161"),n.tableList=t.data;for(var e=t.data,a=0,o=0,i=0,u=0;u<e.length;u++)a+=e[u].je?e[u].je:0,o+=e[u].sl,i+=e[u].bs;n.zs=a.toFixed(2),n.sl1=o,n.sl2=i}})}})},methods:{bindChange1:function(t){this.value1=t},bindChange2:function(t){this.value2=t},onpeDetailedMore:function(){t.navigateTo({url:"../info/info1?flag=4"})},onpeDetailed:function(){var e=this;t.request({url:"https://".concat(this.dk,"/gongziHz.aspx"),method:"GET",data:{uid:this.uid,dates:this.value1,datee:this.value2,huohao:this.huohao,worktype:this.worktype},success:function(t){e.tableList=t.data;for(var n=t.data,a=0,o=0,i=0,u=0;u<n.length;u++)a+=n[u].je?n[u].je:0,o+=n[u].sl,i+=n[u].bs;e.zs=a.toFixed(2),e.sl1=o,e.sl2=i},fail:function(){},complete:function(){}})}}};e.default=l}).call(this,n("6e42")["default"])},9624:function(t,e,n){"use strict";n.r(e);var a=n("62f9"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},f267:function(t,e,n){},f28c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}},[["f155","common/runtime","common/vendor"]]]);