(window.webpackJsonp=window.webpackJsonp||[]).push([[9,15],{591:function(e,t,r){"use strict";r.r(t),t.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""}},watch:{market:function(e){this.marketInfo=e}}}},611:function(e,t,r){var content=r(618);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(78).default)("7e3524d9",content,!0,{sourceMap:!1})},616:function(e){e.exports=JSON.parse('{"en_US":{"下单成功":"下单成功","买入":"买入","买入价":"买入价","买出":"买出","卖出":"卖出","卖出价":"卖出价","可用":"可用","数量":"数量","限价":"限价","预计交易额":"预计交易额"},"zh_Hans_CN":{"下单成功":"下单成功","买入":"买入","买入价":"买入价","买出":"买出","卖出":"卖出","卖出价":"卖出价","可用":"可用","数量":"数量","限价":"限价","预计交易额":"预计交易额"},"zh_Hant_HK":{"下单成功":"下單成功","买入":"買入","买入价":"買入價","买出":"買出","卖出":"賣出","卖出价":"賣出價","可用":"可用","数量":"數量","限价":"限價","预计交易额":"預計交易額"}}')},617:function(e,t,r){"use strict";r(611)},618:function(e,t,r){var n=r(77)(!1);n.push([e.i,".c-makeorder .lh-40{line-height:40px!important}.c-makeorder .el-radio-button__inner{width:100%}.c-makeorder .el-slider__button{width:12px;height:12px}",""]),e.exports=n},629:function(e,t,r){"use strict";r.r(t);r(12),r(57),r(55);var n=r(10),o=r(18),l=r(76),c=r(591),m=r(616);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={mixins:[c.default],props:{loginHandler:{type:Function,default:function(){}}},data:function(){return{mode:"buy",buyForm:{price:"",amount:"",rate:0},sellForm:{price:"",amount:"",rate:0},buyAmountChangeRate:!1,isBuying:!1,isSelling:!1}},computed:h(h({},Object(l.c)(["asset","account"])),{},{currency:function(){return((this.asset.asset||{})[this.marketInfo.currency]||{}).available},dest:function(){return((this.asset.asset||{})[this.marketInfo.dest]||{}).available},buyPre:function(){var e=this.buyForm.price.mul(this.buyForm.amount).toBFixed(8).trimZero();return isNaN(parseFloat(e))?"0":e},sellPre:function(){var e=this.sellForm.price.mul(this.sellForm.amount).toBFixed(8).trimZero();return isNaN(parseFloat(e))?"0":e}}),watch:{},methods:{setPrice:function(e){this.buyForm.price=e,this.sellForm.price=e},buyAmountChange:function(){var e=parseFloat(this.buyForm.amount.mul(this.buyForm.price).div(this.currency).mul(100));this.buyForm.rate=isNaN(e)?0:e},buyRateChange:function(e){var t=e.toString().div(100).mul(this.currency).div(this.buyForm.price);this.buyForm.amount=isNaN(parseFloat(t))?0:t.toBFixed(8).trimZero()},sellAmountChange:function(){var e=parseFloat(this.sellForm.amount.div(this.dest).mul(100));this.sellForm.rate=isNaN(e)?0:e},sellRateChange:function(e){var t=e.toString().div(100).mul(this.dest);this.sellForm.amount=isNaN(parseFloat(t))?0:t.toBFixed(8).trimZero()},buy:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.account){t.next=3;break}return e.loginHandler&&e.loginHandler(),t.abrupt("return");case 3:if(e.buyForm.price&&e.buyForm.amount){t.next=5;break}return t.abrupt("return");case 5:return e.isBuying=!0,t.prev=6,t.next=9,e.makeOrder({type:"buy",price:e.buyForm.price,amount:e.buyForm.amount});case 9:0===(r=t.sent).data.code?(e.$message({showClose:!0,message:e.$t("下单成功"),type:"success"}),e.buyForm={price:e.buyForm.price,amount:""}):e.$message.error(r.data.message),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),e.$message.error(t.t0.message);case 16:e.isBuying=!1;case 17:case"end":return t.stop()}}),t,null,[[6,13]])})))()},sell:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.account){t.next=3;break}return e.loginHandler&&e.loginHandler(),t.abrupt("return");case 3:if(e.sellForm.price&&e.sellForm.amount){t.next=5;break}return t.abrupt("return");case 5:return e.isSelling=!0,t.prev=6,t.next=9,e.makeOrder({type:"sell",price:e.sellForm.price,amount:e.sellForm.amount});case 9:0===(r=t.sent).data.code?(e.$message({showClose:!0,message:e.$t("下单成功"),type:"success"}),e.sellForm={price:e.sellForm.price,amount:""}):e.$message.error(r.data.message),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),e.$message.error(t.t0.message);case 16:e.isSelling=!1;case 17:case"end":return t.stop()}}),t,null,[[6,13]])})))()},makeOrder:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=(new Date).getTime(),o={access_id:t.account.access_id,amount:e.amount,market:t.marketStr,price:e.price,tonce:n,type:e.type},r.next=4,t.$axios.post(t.$url("/v1/order/limit"),o,{headers:{authorization:t.$sign(o)}});case 4:return l=r.sent,r.abrupt("return",l);case 6:case"end":return r.stop()}}),r)})))()}}};f.methods?Object.assign(f.methods,{$t:function(e){if(!this.$lang&&!m.zh_Hans_CN)return e;var t=m[this.$lang]||m.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}}):f.methods={$t:function(e){if(!this.$lang&&!m.zh_Hans_CN)return e;var t=m[this.$lang]||m.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}};var v=f,y=(r(617),r(54)),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"c-makeorder bg-white rounded-md p-20 xs:p-10"},[r("el-radio-group",{staticClass:"hidden xs:flex mb-20",attrs:{size:"mini"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},[r("el-radio-button",{staticClass:"flex-1",attrs:{label:"buy"}},[e._v(e._s(e.$t("买入")))]),e._v(" "),r("el-radio-button",{staticClass:"flex-1",attrs:{label:"sell"}},[e._v(e._s(e.$t("买出")))])],1),e._v(" "),r("p",[e._v(e._s(e.$t("限价")))]),e._v(" "),r("div",{staticClass:"flex mt-20 xs:block"},[r("div",{staticClass:"buy flex-1",class:"buy"===e.mode?"xs:block":"xs:hidden"},[r("el-input",{attrs:{type:"number",placeholder:e.$t("买入价")},model:{value:e.buyForm.price,callback:function(t){e.$set(e.buyForm,"price",t)},expression:"buyForm.price"}}),e._v(" "),r("div",{staticClass:"relative mt-10"},[r("el-input",{attrs:{type:"number",placeholder:e.$t("数量")},on:{input:e.buyAmountChange},model:{value:e.buyForm.amount,callback:function(t){e.$set(e.buyForm,"amount",t)},expression:"buyForm.amount"}}),e._v(" "),r("p",{staticClass:"right-10 absolute top-0 xs:text-14 lh-40"},[e._v("\n          "+e._s(e.marketInfo.dest)+"\n        ")])],1),e._v(" "),r("p",{staticClass:"text-12 text-gray-500 mt-5"},[r("span",{staticClass:"mr-5"},[e._v(e._s(e.$t("可用")))]),e._v(e._s(e.currency||"0")+"\n        "+e._s(e.marketInfo.currency)+"\n      ")]),e._v(" "),r("el-slider",{staticClass:"px-5",attrs:{"show-tooltip":!1},on:{change:e.buyRateChange},model:{value:e.buyForm.rate,callback:function(t){e.$set(e.buyForm,"rate",t)},expression:"buyForm.rate"}}),e._v(" "),r("div",{staticClass:"text-12 text-gray-500"},[r("p",[e._v(e._s(e.$t("预计交易额")))]),e._v(" "),r("p",{staticClass:"mt-5"},[e._v(e._s(e.buyPre)+" "+e._s(e.marketInfo.currency))])]),e._v(" "),r("el-button",{staticClass:"w-full mt-20 outline-none",attrs:{loading:e.isBuying,type:"success"},on:{click:e.buy}},[e._v(e._s(e.$t("买入")))])],1),e._v(" "),r("div",{staticClass:"sell ml-20 flex-1",class:"sell"===e.mode?"xs:block xs:ml-0":"xs:hidden"},[r("el-input",{attrs:{type:"number",placeholder:e.$t("卖出价")},model:{value:e.sellForm.price,callback:function(t){e.$set(e.sellForm,"price",t)},expression:"sellForm.price"}}),e._v(" "),r("div",{staticClass:"relative mt-10"},[r("el-input",{attrs:{type:"number",placeholder:e.$t("数量")},on:{input:e.sellAmountChange},model:{value:e.sellForm.amount,callback:function(t){e.$set(e.sellForm,"amount",t)},expression:"sellForm.amount"}}),e._v(" "),r("p",{staticClass:"right-10 absolute top-0 xs:text-14 lh-40"},[e._v("\n          "+e._s(e.marketInfo.dest)+"\n        ")])],1),e._v(" "),r("p",{staticClass:"text-12 text-gray-500 mt-5"},[r("span",{staticClass:"mr-5"},[e._v(e._s(e.$t("可用")))]),e._v(e._s(e.dest||"0")+" "+e._s(e.marketInfo.dest)+"\n      ")]),e._v(" "),r("el-slider",{staticClass:"px-5",attrs:{"show-tooltip":!1},on:{change:e.sellRateChange},model:{value:e.sellForm.rate,callback:function(t){e.$set(e.sellForm,"rate",t)},expression:"sellForm.rate"}}),e._v(" "),r("div",{staticClass:"text-12 text-gray-500"},[r("p",[e._v(e._s(e.$t("预计交易额")))]),e._v(" "),r("p",{staticClass:"mt-5"},[e._v(e._s(e.sellPre)+" "+e._s(e.marketInfo.currency))])]),e._v(" "),r("el-button",{staticClass:"w-full mt-20 outline-none",attrs:{loading:e.isSelling,type:"danger"},on:{click:e.sell}},[e._v(e._s(e.$t("卖出")))])],1)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);