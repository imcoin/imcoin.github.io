(window.webpackJsonp=window.webpackJsonp||[]).push([[14,11,19],{715:function(t,e,r){"use strict";r.r(e);var n=r(61),o=r(151);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:c(c({},Object(o.c)(["marketConfig"])),{},{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""},curMarketConfig:function(){return this.marketConfig&&this.marketConfig[this.marketStr]}}),watch:{market:function(t){this.marketInfo=t}}}},737:function(t,e,r){var content=r(753);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(125).default)("e61dfeee",content,!0,{sourceMap:!1})},751:function(t){t.exports=JSON.parse('{"en_US":{"下单":"下单","买入":"买入","买出":"买出","交易额：":"交易额：","价格":"价格","减价":"减价","卖出":"卖出","取消":"取消","可用":"可用","增价":"增价","序号":"序号","数量":"数量","最低卖出价":"最低卖出价","最高买入价":"最高买入价","未获取市场配置，_ca8f":"未获取市场配置，请刷新","每阶数量":"每阶数量","状态":"状态","请输入数量":"请输入数量","阶价：":"阶价：","阶数":"阶数","阶数/减价":"阶数/减价","阶数/增价":"阶数/增价","随机加减最大值":"随机加减最大值","预计交易额":"预计交易额"},"zh_Hans_CN":{"下单":"下单","买入":"买入","买出":"买出","交易额：":"交易额：","价格":"价格","减价":"减价","卖出":"卖出","取消":"取消","可用":"可用","增价":"增价","序号":"序号","数量":"数量","最低卖出价":"最低卖出价","最高买入价":"最高买入价","未获取市场配置，_ca8f":"未获取市场配置，请刷新","每阶数量":"每阶数量","状态":"状态","请输入数量":"请输入数量","阶价：":"阶价：","阶数":"阶数","阶数/减价":"阶数/减价","阶数/增价":"阶数/增价","随机加减最大值":"随机加减最大值","预计交易额":"预计交易额"},"zh_Hant_HK":{"下单":"下單","下单成功@DEPRECATED@":"下單成功","不规则下单数@DEPRECATED@":"不規則下單數","买入":"買入","买入价@DEPRECATED@":"買入價","买出":"買出","交易额@DEPRECATED@":"交易額","交易额：":"交易額：","价格":"價格","减价":"減價","卖出":"賣出","卖出价@DEPRECATED@":"賣出價","取消":"取消","可用":"可用","增价":"增價","增价/阶数@DEPRECATED@":"增價/階數","市场@DEPRECATED@":"市場","序号":"序號","数量":"數量","最低卖出价":"最低賣出價","最高买入价":"最高買入價","未获取市场配置，_ca8f":"未獲取市場配置，請刷新","每阶数量":"每階數量","状态":"狀態","确定@DEPRECATED@":"確定","请输入数量":"請輸入數量","阶价：":"階價：","阶数":"階數","阶数/减价":"階數/減價","阶数/增价":"階數/增價","阶数/阶价@DEPRECATED@":"階數/階價","阶数/阶价：@DEPRECATED@":"階數/階價：","随机加减最大值":"隨機加減最大值","预计交易额":"預計交易額"}}')},752:function(t,e,r){"use strict";r(737)},753:function(t,e,r){var n=r(124)(!1);n.push([t.i,".c-makeorder-step .lh-30{line-height:30px!important}.c-makeorder-step .el-radio-button__inner{width:100%}.c-makeorder-step .el-slider__button{width:12px;height:12px}.c-makeorder-step .el-input-group__prepend{font-weight:400;font-size:12px;line-height:14px;padding-left:10px;padding-right:10px}.c-makeorder-step .el-dialog__body{padding-top:0}.c-makeorder-step .el-input-group__append,.c-makeorder-step .el-input-group__prepend{background-color:var(--color-gray-200);color:var(--color-gray-700);border-color:var(--color-DCDFE6)}",""]),t.exports=n},778:function(t,e,r){"use strict";r.r(e);r(106),r(49),r(127),r(107),r(126);var n=r(38),o=r(61),l=r(151),c=r(715),m=r(108),f=r(751);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={mixins:[c.default],props:{loginHandler:{type:Function,default:function(){}}},data:function(){return{mode:"buy",buyForm:{price:"",step:"",amount:"",stepPrice:"",rate:0},sellForm:{price:"",step:"",stepPrice:"",amount:"",rate:0},buyAmountChangeRate:!1,isBuying:!1,isSelling:!1,confirmInfo:{},dialogVisible:!1,ruleChecked:!1,ruleNum:""}},computed:h(h({},Object(l.c)(["asset","account"])),{},{currency:function(){return((this.asset.asset||{})[this.marketInfo.currency]||{}).available},dest:function(){return((this.asset.asset||{})[this.marketInfo.dest]||{}).available},buyPre:function(){var t=this.buyForm.price.minus(this.buyForm.stepPrice.mul(this.buyForm.step)),e=this.buyForm.price.plus(t).mul(this.buyForm.step).div(2).mul(this.buyForm.amount).toBFixed(8).trimZero();return isNaN(parseFloat(e))?"0":e},sellPre:function(){var t=this.sellForm.price.plus(this.sellForm.stepPrice.mul(this.sellForm.step)),e=this.sellForm.price.plus(t).mul(this.sellForm.step).div(2).mul(this.sellForm.amount).toBFixed(8).trimZero();return isNaN(parseFloat(e))?"0":e},totalNum:function(){var t=this,e=0;return this.confirmInfo&&this.confirmInfo.data&&this.confirmInfo.data.length>0&&this.confirmInfo.data.forEach((function(r){e="buy"===t.confirmInfo.type?e.plus(r.price.mul(r.amount)):e.plus(r.amount)})),e}}),watch:{ruleNum:function(t){var e=this;if(Object(m.a)(t)>0&&this.confirmInfo&&this.confirmInfo.data&&this.confirmInfo.data.length>0){var r=this.confirmInfo.data.concat();r.forEach((function(t,n){r[n]=h(h({},r[n]),{},{amount:e.getRuleAmount(t.amount)})})),this.confirmInfo=h(h({},this.confirmInfo),{},{data:r})}}},methods:{getRuleAmount:function(t){var e=Object(m.a)(this.ruleNum)*Math.random(),r=Math.random()>.5?1:-1;return t.plus(r.mul(e)).toBFixed(this.confirmInfo&&("buy"===this.confirmInfo.type?this.curMarketConfig.pricing_decimal:this.curMarketConfig.trading_decimal)||8)},setPrice:function(t){this.buyForm.price=t,this.sellForm.price=t},buyAmountChange:function(){var t=parseFloat(this.buyForm.amount.mul(this.buyForm.price).mul(this.buyForm.step).div(this.currency).mul(100));this.buyForm.rate=isNaN(t)?0:t},buyRateChange:function(t){var e=t.toString().div(100).mul(this.currency).div(this.buyForm.price).div(this.buyForm.step).div(this.buyForm.step);this.buyForm.amount=isNaN(parseFloat(e))?0:e.toBFixed(8).trimZero()},sellAmountChange:function(){var t=parseFloat(this.sellForm.amount.div(this.dest).mul(100));this.sellForm.rate=isNaN(t)?0:t},sellRateChange:function(t){var e=t.toString().div(100).mul(this.dest);this.sellForm.amount=isNaN(parseFloat(e))?0:e.toBFixed(8).trimZero()},setConfirmInfo:function(t){if(!this.curMarketConfig)return this.$message.error(this.$t("未获取市场配置，_ca8f"));for(var form="buy"===t?this.buyForm:this.sellForm,e=Object(m.a)(form.step),r=Object(m.a)(form.stepPrice),n=form.price,o=[],i=0;i<e;i++)o.push({index:i+1,price:("buy"===t?n.minus(i.mul(r)):n.plus(i.mul(r))).toBFixed(this.curMarketConfig.pricing_decimal),amount:this.getRuleAmount(form.amount),status:1});this.dialogVisible=!0,this.confirmInfo={title:"buy"===t?this.$t("买入"):this.$t("卖出"),data:o,step:"".concat(r),type:t}},updateItemStatus:function(t,e){var r=this.confirmInfo.data.concat(),n=h(h({},this.confirmInfo.data[t]),{},{status:e});r[t]=n,this.confirmInfo=h(h({},this.confirmInfo),{},{data:r})},confirmOrders:function(){var t=this;if(this.confirmInfo&&this.confirmInfo.data&&this.confirmInfo.data.length>0){var e=!0;console.log(this.confirmInfo),this.confirmInfo.data.forEach((function(r,n){2!==r.status&&(e=!1,t.makeOrder({type:t.confirmInfo.type,price:r.price,amount:r.amount}).then((function(e){e&&t.updateItemStatus(n,0===e.data.code?2:0)})).catch((function(e){t.$message.error(e.message),t.updateItemStatus(n,0)})))})),this.dialogVisible=!e}},makeOrder:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=(new Date).getTime(),o={access_id:e.account.access_id,amount:t.amount,market:e.marketStr,price:t.price,tonce:n,type:t.type},r.next=4,e.$axios.post(e.$url("/v1/order/limit"),o,{headers:{authorization:e.$sign(o)}});case 4:if(0!==(l=r.sent).data.code){r.next=9;break}return r.abrupt("return",l);case 9:e.$message.error(l.data.message);case 10:case"end":return r.stop()}}),r)})))()}}};v.methods?Object.assign(v.methods,{$t:function(t){if(!this.$lang&&!f.zh_Hans_CN)return t;var e=f[this.$lang]||f.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):v.methods={$t:function(t){if(!this.$lang&&!f.zh_Hans_CN)return t;var e=f[this.$lang]||f.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var _=v,y=(r(752),r(123)),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-makeorder-step"},[r("el-dialog",{attrs:{title:t.confirmInfo&&t.confirmInfo.title,visible:t.dialogVisible,width:"400px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.confirmInfo?r("p",{staticClass:"border-b border-gray-200 text-12 pb-10 mt-10"},[r("span",{staticClass:"text-gray-500"},[t._v(t._s(t.$t("阶价：")))]),t._v(" "),r("span",[t._v(t._s(t.confirmInfo.step))])]):t._e(),t._v(" "),t.confirmInfo?r("el-table",{attrs:{data:t.confirmInfo.data,height:"200px"}},[r("el-table-column",{attrs:{prop:"index",label:t.$t("序号"),width:"60"}}),t._v(" "),r("el-table-column",{attrs:{prop:"price",label:t.$t("价格")}}),t._v(" "),r("el-table-column",{attrs:{prop:"amount",label:t.$t("数量"),align:"right"}}),t._v(" "),r("el-table-column",{attrs:{prop:"status",label:t.$t("状态"),align:"right",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[2===e.row.status?r("i",{staticClass:"el-icon-success text-green-500"}):0===e.row.status?r("i",{staticClass:"el-icon-loading text-blue-500"}):1===e.row.status?r("i",{staticClass:"el-icon-refresh text-yellow-500"}):t._e()]}}],null,!1,3781785340)})],1):t._e(),t._v(" "),r("el-checkbox",{staticClass:"mt-10 text-12",model:{value:t.ruleChecked,callback:function(e){t.ruleChecked=e},expression:"ruleChecked"}},[t._v(t._s(t.$t("随机加减最大值")))]),t._v(" "),t.ruleChecked?r("el-input",{staticClass:"mt-10",attrs:{type:"number",placeholder:t.$t("请输入数量"),size:"small"},model:{value:t.ruleNum,callback:function(e){t.ruleNum=e},expression:"ruleNum"}}):t._e(),t._v(" "),t.confirmInfo?r("p",{staticClass:"text-12 my-10"},[r("span",{staticClass:"text-gray-500"},[t._v(t._s(t.$t("交易额：")))]),t._v(" "),r("span",[t._v(t._s(t.totalNum.toBFixed(8))+t._s("buy"===t.confirmInfo.type?t.marketInfo.currency:t.marketInfo.dest))])]):t._e(),t._v(" "),r("div",{staticClass:"flex mt-20"},[r("el-button",{staticClass:"flex-1",on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("取消")))]),t._v(" "),r("el-button",{staticClass:"flex-1 ml-20",attrs:{type:"primary"},on:{click:t.confirmOrders}},[t._v(t._s(t.$t("下单")))])],1)],1),t._v(" "),r("el-radio-group",{staticClass:"hidden xs:flex mb-20",attrs:{size:"mini"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[r("el-radio-button",{staticClass:"flex-1",attrs:{label:"buy"}},[t._v(t._s(t.$t("买入")))]),t._v(" "),r("el-radio-button",{staticClass:"flex-1",attrs:{label:"sell"}},[t._v(t._s(t.$t("买出")))])],1),t._v(" "),r("div",{staticClass:"flex xs:block"},[r("div",{staticClass:"buy flex-1",class:"buy"===t.mode?"xs:block":"xs:hidden"},[r("el-input",{attrs:{type:"number",placeholder:t.$t("最高买入价"),size:"small"},model:{value:t.buyForm.price,callback:function(e){t.$set(t.buyForm,"price",e)},expression:"buyForm.price"}},[r("template",{slot:"prepend"},[t._v(t._s(t.$t("最高买入价")))])],2),t._v(" "),r("div",{staticClass:"flex"},[r("el-input",{staticClass:"mt-10 border-r-0 min-w-120",staticStyle:{"min-width":"130px","max-width":"130px"},attrs:{type:"number",placeholder:t.$t("阶数"),size:"mini"},model:{value:t.buyForm.step,callback:function(e){t.$set(t.buyForm,"step",e)},expression:"buyForm.step"}},[r("template",{slot:"prepend"},[t._v(t._s(t.$t("阶数/减价")))])],2),t._v(" "),r("el-input",{staticClass:"mt-10",attrs:{type:"number",placeholder:t.$t("减价"),size:"mini"},model:{value:t.buyForm.stepPrice,callback:function(e){t.$set(t.buyForm,"stepPrice",e)},expression:"buyForm.stepPrice"}})],1),t._v(" "),r("div",{staticClass:"relative mt-10"},[r("el-input",{attrs:{type:"number",placeholder:t.$t("每阶数量"),size:"small"},on:{input:t.buyAmountChange},model:{value:t.buyForm.amount,callback:function(e){t.$set(t.buyForm,"amount",e)},expression:"buyForm.amount"}},[r("template",{slot:"prepend"},[t._v(t._s(t.$t("每阶数量"))),r("span",[t._v("("+t._s(t.marketInfo.dest)+")")])])],2),t._v(" "),t._e()],1),t._v(" "),r("p",{staticClass:"text-12 text-gray-500 mt-5"},[r("span",{staticClass:"mr-5"},[t._v(t._s(t.$t("可用")))]),t._v(t._s(t.currency||"0")+"\n        "+t._s(t.marketInfo.currency)+"\n      ")]),t._v(" "),r("el-slider",{staticClass:"px-5",attrs:{"show-tooltip":!1},on:{change:t.buyRateChange},model:{value:t.buyForm.rate,callback:function(e){t.$set(t.buyForm,"rate",e)},expression:"buyForm.rate"}}),t._v(" "),r("div",{staticClass:"text-12 text-gray-500"},[r("p",[t._v(t._s(t.$t("预计交易额")))]),t._v(" "),r("p",{staticClass:"mt-5"},[t._v(t._s(t.buyPre)+" "+t._s(t.marketInfo.currency))])]),t._v(" "),r("el-button",{staticClass:"w-full mt-10 outline-none",attrs:{loading:t.isBuying,type:"success"},on:{click:function(e){return t.setConfirmInfo("buy")}}},[t._v(t._s(t.$t("买入")))])],1),t._v(" "),r("div",{staticClass:"sell ml-20 flex-1",class:"sell"===t.mode?"xs:block xs:ml-0":"xs:hidden"},[r("el-input",{attrs:{type:"number",placeholder:t.$t("最低卖出价"),size:"small"},model:{value:t.sellForm.price,callback:function(e){t.$set(t.sellForm,"price",e)},expression:"sellForm.price"}},[r("template",{slot:"prepend"},[t._v(t._s(t.$t("最低卖出价")))])],2),t._v(" "),r("div",{staticClass:"flex"},[r("el-input",{staticClass:"mt-10 border-r-0 min-w-120",staticStyle:{"min-width":"130px","max-width":"130px"},attrs:{type:"number",placeholder:t.$t("阶数"),size:"mini"},model:{value:t.sellForm.step,callback:function(e){t.$set(t.sellForm,"step",e)},expression:"sellForm.step"}},[r("template",{slot:"prepend"},[t._v(t._s(t.$t("阶数/增价")))])],2),t._v(" "),r("el-input",{staticClass:"mt-10",attrs:{type:"number",placeholder:t.$t("增价"),size:"mini"},model:{value:t.sellForm.stepPrice,callback:function(e){t.$set(t.sellForm,"stepPrice",e)},expression:"sellForm.stepPrice"}})],1),t._v(" "),r("div",{staticClass:"relative mt-10"},[r("el-input",{attrs:{type:"number",placeholder:t.$t("每阶数量"),size:"small"},on:{input:t.sellAmountChange},model:{value:t.sellForm.amount,callback:function(e){t.$set(t.sellForm,"amount",e)},expression:"sellForm.amount"}},[r("template",{slot:"prepend"},[t._v(t._s(t.$t("每阶数量"))),r("span",[t._v("("+t._s(t.marketInfo.dest)+")")])])],2),t._v(" "),t._e()],1),t._v(" "),r("p",{staticClass:"text-12 text-gray-500 mt-5"},[r("span",{staticClass:"mr-5"},[t._v(t._s(t.$t("可用")))]),t._v(t._s(t.dest||"0")+" "+t._s(t.marketInfo.dest)+"\n      ")]),t._v(" "),r("el-slider",{staticClass:"px-5",attrs:{"show-tooltip":!1},on:{change:t.sellRateChange},model:{value:t.sellForm.rate,callback:function(e){t.$set(t.sellForm,"rate",e)},expression:"sellForm.rate"}}),t._v(" "),r("div",{staticClass:"text-12 text-gray-500"},[r("p",[t._v(t._s(t.$t("预计交易额")))]),t._v(" "),r("p",{staticClass:"mt-5"},[t._v(t._s(t.sellPre)+" "+t._s(t.marketInfo.currency))])]),t._v(" "),r("el-button",{staticClass:"w-full mt-10 outline-none",attrs:{loading:t.isSelling,type:"danger"},on:{click:function(e){return t.setConfirmInfo("sell")}}},[t._v(t._s(t.$t("卖出")))])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);