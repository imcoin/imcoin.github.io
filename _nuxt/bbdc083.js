(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{726:function(e,t,n){var content=n(746);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(129).default)("6f3eedb3",content,!0,{sourceMap:!1})},742:function(e,t,n){"use strict";var r=n(36),o=n(453).trim;r({target:"String",proto:!0,forced:n(743)("trim")},{trim:function(){return o(this)}})},743:function(e,t,n){var r=n(37),o=n(454);e.exports=function(e){return r((function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e}))}},744:function(e){e.exports=JSON.parse('{"en_US":{"中间币":"中间币","买方向":"买方向","交易币":"交易币","兑换":"兑换","卖方向":"卖方向","定价币":"定价币","待输入":"待输入","费率":"费率"},"zh_Hans_CN":{"中间币":"中间币","买方向":"买方向","交易币":"交易币","兑换":"兑换","卖方向":"卖方向","定价币":"定价币","待输入":"待输入","费率":"费率"},"zh_Hant_HK":{"中间币":"中間幣","买方向":"買方向","交易币":"交易幣","兑换":"兌換","卖方向":"賣方向","定价@DEPRECATED@":"定價","定价币":"定價幣","待输入":"待輸入","费率":"費率"}}')},745:function(e,t,n){"use strict";n(726)},746:function(e,t,n){var r=n(128)(!1);r.push([e.i,".c-makeorder-pex .coin-area .el-input__inner{padding-left:5px;padding-right:5px}.c-makeorder-pex .coin-area .el-input__inner::-moz-placeholder{color:var(--color-gray-500)}.c-makeorder-pex .coin-area .el-input__inner:-ms-input-placeholder{color:var(--color-gray-500)}.c-makeorder-pex .coin-area .el-input__inner::placeholder{color:var(--color-gray-500)}@media (max-width:767px){.c-makeorder-pex .mt-m{margin-top:-62px}}@media (max-width:767px){.c-makeorder-pex .xs-name{padding-top:7px;padding-bottom:7px}}.c-makeorder-pex .in-error .el-input__inner{border-color:var(--color-red-500)}",""]),e.exports=r},762:function(e,t,n){"use strict";n.r(t);n(132),n(324),n(50),n(236),n(742),n(237),n(130);var r=n(35),o=n(744),c={data:function(){return{exInfo:{dest:"",dcRate:"",middle:"",mcRate:"",currency:"",dmRate:""},win:{sell:0,buy:0},depths:[],isChecking:!1}},computed:{markets:function(){return[{market:(this.exInfo.dest+this.exInfo.currency).toUpperCase(),rate:"dcRate"},{market:(this.exInfo.middle+this.exInfo.currency).toUpperCase(),rate:"mcRate"},{market:(this.exInfo.dest+this.exInfo.middle).toUpperCase(),rate:"dmRate"}]},canStart:function(){return this.exInfo.dest&&this.exInfo.middle&&this.exInfo.dest}},watch:{"exInfo.dest":function(e){var t=this;this.$nextTick((function(){t.exInfo.dest=e.toUpperCase().trim()}))},"exInfo.middle":function(e){var t=this;this.$nextTick((function(){t.exInfo.middle=e.toUpperCase().trim()}))},"exInfo.currency":function(e){var t=this;this.$nextTick((function(){t.exInfo.currency=e.toUpperCase().trim()}))}},mounted:function(){try{this.exInfo=JSON.parse(localStorage.PEX_DATA)}catch(e){}},methods:{calcSellWin:function(){var e=this.depths[0].bids[0][0]*this.depths[0].bids[0][1]/this.depths[1].asks[0][0],t=parseFloat(this.depths[1].asks[0][1]),n=this.depths[2].asks[0][0]*this.depths[2].asks[0][1],r=Math.min(e,t,n)*this.depths[1].asks[0][0]/this.depths[0].bids[0][0],o=r*this.depths[0].bids[0][0]*(1-this.exInfo.dcRate),c=o/this.depths[1].asks[0][0]*(1-this.exInfo.mcRate),d=c/this.depths[2].asks[0][0]*(1-this.exInfo.dmRate),l=parseFloat((d-r).toFixed(8));console.log("SELL:",r,o,c,d),this.win.sell=l},calcBuyWin:function(){var e=this.depths[0].asks[0][0]*this.depths[0].asks[0][1]/this.depths[1].bids[0][0],t=parseFloat(this.depths[1].bids[0][1]),n=this.depths[2].bids[0][0]*this.depths[2].bids[0][1],r=Math.min(e,t,n)/this.depths[2].bids[0][0],o=r*this.depths[2].bids[0][0]*(1-this.exInfo.dmRate),c=o*this.depths[1].bids[0][0]*(1-this.exInfo.mcRate),d=c/this.depths[0].asks[0][0]*(1-this.exInfo.dcRate);console.log("BUY:",r,d,c,o),this.win.buy=parseFloat((d-r).toFixed(8))},checkM:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.exInfo.mcRate&&e.exInfo.dcRate&&e.exInfo.dmRate){t.next=2;break}return t.abrupt("return");case 2:return localStorage.PEX_DATA=JSON.stringify(e.exInfo),e.isChecking=!0,t.prev=4,t.next=7,e.reqestMarkets();case 7:e.calcSellWin(),e.calcBuyWin(),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(4);case 13:e.isChecking=!1;case 14:case"end":return t.stop()}}),t,null,[[4,11]])})))()},reqestMarkets:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.markets.map((function(t){return e.$axios.get(e.$url("/v1/market/depth"),{params:{market:t.market,limit:5,merge:"0.00000001"}})})));case 2:n=t.sent,e.depths=n.map((function(e){return e.data.data}));case 4:case"end":return t.stop()}}),t)})))()}}};c.methods?Object.assign(c.methods,{$t:function(e){if(!this.$lang&&!o.zh_Hans_CN)return e;var t=o[this.$lang]||o.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}}):c.methods={$t:function(e){if(!this.$lang&&!o.zh_Hans_CN)return e;var t=o[this.$lang]||o.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}};var d=c,l=(n(745),n(127)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-makeorder-pex"},[n("div",{staticClass:"flex coin-area"},[n("el-input",{staticClass:"flex-1",attrs:{size:"mini",placeholder:e.$t("交易币")},model:{value:e.exInfo.dest,callback:function(t){e.$set(e.exInfo,"dest",t)},expression:"exInfo.dest"}}),e._v(" "),n("el-input",{staticClass:"flex-1 mx-5",attrs:{placeholder:e.$t("中间币"),size:"mini"},model:{value:e.exInfo.middle,callback:function(t){e.$set(e.exInfo,"middle",t)},expression:"exInfo.middle"}}),e._v(" "),n("el-input",{staticClass:"flex-1",attrs:{size:"mini",placeholder:e.$t("定价币")},model:{value:e.exInfo.currency,callback:function(t){e.$set(e.exInfo,"currency",t)},expression:"exInfo.currency"}})],1),e._v(" "),n("div",e._l(e.markets,(function(t,i){return n("div",{key:i,staticClass:"flex items-center flex-row-reverse mt-5 coin-area bg-gray-200 rounded-4 pl-15 xs:block xs:pl-5 clear-both"},[n("el-input",{staticClass:"w-60 xs:float-right",class:{"in-error":!e.exInfo[t.rate]},attrs:{size:"mini",placeholder:e.$t("费率")},model:{value:e.exInfo[t.rate],callback:function(n){e.$set(e.exInfo,t.rate,n)},expression:"exInfo[item.rate]"}}),e._v(" "),n("div",{staticClass:"flex items-center flex-1 xs:block"},[n("span",{staticClass:"min-w-200 xs:min-w-auto text-12 xs-name xs:block"},[e._v(e._s(t.market||e.$t("待输入")))]),e._v(" "),e.depths&&e.depths[i]?n("div",{staticClass:"p-5 xs:px-0 flex-1"},[e.depths[i].asks&&e.depths[i].asks[0]?n("div",{staticClass:"text-12 flex justify-between"},[n("span",{staticClass:"text-red-500"},[e._v(e._s(e.depths[i].asks[0][0]))]),e._v(" "),n("span",{staticClass:"text-black ml-5"},[e._v(e._s(e.depths[i].asks[0][1]))])]):e._e(),e._v(" "),e.depths[i].bids&&e.depths[i].bids[0]?n("div",{staticClass:"text-12 flex justify-between"},[n("span",{staticClass:"text-green-500"},[e._v(e._s(e.depths[i].bids[0][0]))]),e._v(" "),n("span",{staticClass:"text-black ml-5"},[e._v(e._s(e.depths[i].bids[0][1]))])]):e._e()]):e._e()])],1)})),0),e._v(" "),n("div",{staticClass:"text-12 mt-10"},[n("div",{staticClass:"flex justify-between"},[n("span",[e._v(e._s(e.$t("买方向")))]),e._v(" "),n("span",[e._v(e._s(e.win.buy)+e._s(e.exInfo.dest))])]),e._v(" "),n("div",{staticClass:"flex justify-between"},[n("span",[e._v(e._s(e.$t("卖方向")))]),e._v(" "),n("span",[e._v(e._s(e.win.sell)+e._s(e.exInfo.dest))])])]),e._v(" "),n("div",{staticClass:"mt-20 flex"},[n("el-button",{staticClass:"flex-1",attrs:{type:"warning",disabled:!e.canStart,loading:e.isChecking},on:{click:e.checkM}},[e._v("Check")]),e._v(" "),e._e()],1)])}),[],!1,null,null,null);t.default=component.exports}}]);