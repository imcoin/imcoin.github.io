(window.webpackJsonp=window.webpackJsonp||[]).push([[6,15],{369:function(t,e,r){"use strict";r.r(e),e.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""}},watch:{market:function(t){this.marketInfo=t}}}},399:function(t){t.exports=JSON.parse('{"en_US":{"买":"买","卖":"卖","委托价":"委托价","委托数量":"委托数量","委托时间":"委托时间","市价":"市价","市场":"市场","成交数量":"成交数量","成交金额":"成交金额","手续费":"手续费","方向":"方向","类型":"类型","限价":"限价"},"zh_Hans_CN":{"买":"买","卖":"卖","委托价":"委托价","委托数量":"委托数量","委托时间":"委托时间","市价":"市价","市场":"市场","成交数量":"成交数量","成交金额":"成交金额","手续费":"手续费","方向":"方向","类型":"类型","限价":"限价"},"zh_Hant_HK":{"买":"買","卖":"賣","委托价":"委托價","委托数量":"委托數量","委托时间":"委托時間","市价":"市價","市场":"市場","成交均价@DEPRECATED@":"成交均價","成交数量":"成交數量","成交金额":"成交金額","手续费":"手續費","撤销@DEPRECATED@":"撤銷","方向":"方向","类型":"類型","限价":"限價"}}')},410:function(t,e,r){"use strict";r.r(e);r(40);var n=r(6),o=r(10),l=r(54),c=r(369),d=r(399);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={mixins:[c.default],data:function(){return{isLoading:!1,page:1,limit:20,dataResult:{data:[],has_next:!1}}},computed:_(_({},Object(l.c)(["account"])),{},{total:function(){return this.page*this.limit+(this.dataResult.has_next?this.limit:0)}}),mounted:function(){},methods:{queryOrder:function(){var t=arguments,e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:1,e.account){r.next=3;break}return r.abrupt("return");case 3:return e.isLoading=!0,e.page=n,r.prev=5,r.next=8,e.$axios.get(e.$url("/v1/order/finished"),e.$signGet({access_id:e.account.access_id,market:e.marketStr,page:n,limit:e.limit,tonce:(new Date).getTime()}));case 8:0===(o=r.sent).data.code?e.dataResult=o.data.data:e.$message.error(o.data.message),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(5),e.$message.error(r.t0.message);case 15:e.isLoading=!1;case 16:case"end":return r.stop()}}),r,null,[[5,12]])})))()}}};f.methods?Object.assign(f.methods,{$t:function(t){if(!this.$lang&&!d.zh_Hans_CN)return t;var e=d[this.$lang]||d.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):f.methods={$t:function(t){if(!this.$lang&&!d.zh_Hans_CN)return t;var e=d[this.$lang]||d.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var h=f,v=r(39),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-history bg-white"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataResult.data}},[r("el-table-column",{attrs:{prop:"ctime",label:t.$t("委托时间"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.create_time.toTime()))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"market",label:t.$t("市场"),"min-width":"100"}}),t._v(" "),r("el-table-column",{attrs:{prop:"order_type",label:t.$t("类型"),width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["limit"===e.row.order_type?r("span",[t._v(t._s(t.$t("限价")))]):t._e(),t._v(" "),"market"===e.row.order_type?r("span",[t._v(t._s(t.$t("市价")))]):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"type",label:t.$t("方向"),align:"center",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return["sell"===e.row.type?r("span",{staticClass:"text-red-500"},[t._v(t._s(t.$t("卖")))]):t._e(),t._v(" "),"buy"===e.row.type?r("span",{staticClass:"text-green-500"},[t._v(t._s(t.$t("买")))]):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"avg_price",label:t.$t("委托价"),"min-width":"100"}}),t._v(" "),r("el-table-column",{attrs:{prop:"amount",label:t.$t("委托数量"),"min-width":"120"}}),t._v(" "),r("el-table-column",{attrs:{prop:"deal_amount",label:t.$t("成交数量"),"min-width":"110",align:"right"}}),t._v(" "),r("el-table-column",{attrs:{prop:"deal_money",label:t.$t("成交金额"),"min-width":"110",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.deal_money.toBFixed(8)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"asset_fee",label:t.$t("手续费"),width:"140",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.asset_fee.toBFixed(8))+"\n          "+t._s(e.row.fee_asset))])]}}])})],1),t._v(" "),r("div",{staticClass:"text-right mt-20"},[t.total>t.limit?r("el-pagination",{attrs:{small:"",background:"",layout:"prev, pager, next","page-size":t.limit,"current-page":t.page,total:t.total},on:{"current-change":t.queryOrder}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);