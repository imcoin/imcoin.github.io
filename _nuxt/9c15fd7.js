(window.webpackJsonp=window.webpackJsonp||[]).push([[16,15],{713:function(t,e,r){"use strict";r.r(e),e.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""}},watch:{market:function(t){this.marketInfo=t}}}},742:function(t){t.exports=JSON.parse('{"en_US":{"买":"买","买入":"买入","价格":"价格","卖":"卖","卖出":"卖出","委托价":"委托价","委托数量":"委托数量","委托时间":"委托时间","已成交":"已成交","市价":"市价","成交均价":"成交均价","撤销":"撤销","操作":"操作","方向":"方向","类型":"类型","限价":"限价","，":"，"},"zh_Hans_CN":{"买":"买","买入":"买入","价格":"价格","卖":"卖","卖出":"卖出","委托价":"委托价","委托数量":"委托数量","委托时间":"委托时间","已成交":"已成交","市价":"市价","成交均价":"成交均价","撤销":"撤销","操作":"操作","方向":"方向","类型":"类型","限价":"限价","，":"，"},"zh_Hant_HK":{"买":"買","买入":"買入","价格":"價格","卖":"賣","卖出":"賣出","委托价":"委托價","委托数量":"委托數量","委托时间":"委托時間","已成交":"已成交","市价":"市價","市场@DEPRECATED@":"市場","成交均价":"成交均價","撤销":"撤銷","操作":"操作","方向":"方向","类型":"類型","限价":"限價","，":"，"}}')},753:function(t,e,r){"use strict";r.r(e);r(124);var n=r(39),o=r(61),c=r(149),l=r(713),d=r(742);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={mixins:[l.default],data:function(){return{isLoading:!1,side:0,ofsset:0,limit:100,dataResult:{}}},computed:f({},Object(c.c)(["account"])),mounted:function(){var t=this;this.$socket.on("order.update",(function(e){if(e.params&&e.params[0]&&e.params[1]&&e.params[1].market===t.marketStr)switch(e.params[0]){case 1:var r=t.dataResult.records||[];r.unshift(e.params[1]),t.dataResult=f(f({},t.dataResult),{},{records:r,limit:t.dataResult.limit+1});break;case 2:for(var n=t.dataResult.records||[],i=0;i<n.length;i++)n[i].id===e.params[1].id&&(n[i]=e.params[1]);t.dataResult=f(f({},t.dataResult),{},{records:n});break;case 3:for(var o=t.dataResult.records||[],c=[],l=0;l<o.length;l++)o[l].id===e.params[1].id?t.dataResult.limit--:c.push(o[l]);if(t.dataResult=f(f({},t.dataResult),{},{records:c}),parseFloat(e.params[1].deal_stock)>0){var d=t.$parseMarket(e.params[1].market)||{};Notification.requestPermission((function(r){"granted"===r&&(new Notification("imCoin",{body:"".concat(e.params[1].market," ")+(2===e.params[1].side?t.$t("买入"):t.$t("卖出"))+e.params[1].deal_stock+(d.dest||"")+t.$t("，")+t.$t("价格")+e.params[1].price,icon:"/images/logo.png"}).onclick=function(){})}))}}}))},methods:{queryOrder:function(){var t=this;this.isLoading=!0,this.$socket.commit({method:"order.query",params:[this.marketStr,this.side,this.ofsset,this.limit]},(function(data){data.error||(t.dataResult=data.result||{}),t.isLoading=!1}))},cancel:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=(new Date).getTime(),o={access_id:e.account.access_id,id:t.id,market:e.marketStr,tonce:n},r.next=4,e.$axios.delete(e.$url("/v1/order/pending"),e.$signGet(o));case 4:case"end":return r.stop()}}),r)})))()},cancelAll:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(new Date).getTime(),n={account_id:0,access_id:t.account.access_id,market:t.marketStr,tonce:r},e.next=4,t.$axios.delete(t.$url("/v1/order/pending"),t.$signGet(n));case 4:case"end":return e.stop()}}),e)})))()}}};h.methods?Object.assign(h.methods,{$t:function(t){if(!this.$lang&&!d.zh_Hans_CN)return t;var e=d[this.$lang]||d.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):h.methods={$t:function(t){if(!this.$lang&&!d.zh_Hans_CN)return t;var e=d[this.$lang]||d.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var _=h,v=r(123),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-order bg-white"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataResult.records}},[r("el-table-column",{attrs:{prop:"ctime",label:t.$t("委托时间"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.ctime.toTime()))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"type",label:t.$t("类型"),width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.type?r("span",[t._v(t._s(t.$t("限价")))]):t._e(),t._v(" "),2===e.row.type?r("span",[t._v(t._s(t.$t("市价")))]):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"side",label:t.$t("方向"),align:"center",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.side?r("span",{staticClass:"text-red-500"},[t._v(t._s(t.$t("卖")))]):t._e(),t._v(" "),2===e.row.side?r("span",{staticClass:"text-green-500"},[t._v(t._s(t.$t("买")))]):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"price",label:t.$t("委托价"),"min-width":"100",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"amount",label:t.$t("委托数量"),"min-width":"120",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"deal_stock",label:t.$t("已成交"),width:"100",align:"right"}}),t._v(" "),r("el-table-column",{attrs:{label:t.$t("成交均价"),align:"right","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[parseFloat(e.row.deal_stock)>0?r("span",[t._v("\n          "+t._s(parseFloat((e.row.deal_money/e.row.deal_stock).toFixed(8)))+"\n        ")]):r("span",[t._v("--")])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:t.$t("操作"),align:"right",width:"60",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticClass:"text-blue-500 cursor-pointer",on:{click:function(r){return t.cancel(e.row)}}},[t._v(t._s(t.$t("撤销")))])]}}])},[r("span",{attrs:{slot:"header"},slot:"header"},[r("i",{staticClass:"iconfont icon-shanchu- ml-5 text-red-500 cursor-pointer",on:{click:t.cancelAll}})])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);