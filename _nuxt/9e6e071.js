(window.webpackJsonp=window.webpackJsonp||[]).push([[10,15],{713:function(t,e,r){"use strict";r.r(e),e.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""}},watch:{market:function(t){this.marketInfo=t}}}},737:function(t){t.exports=JSON.parse('{"en_US":{"价格":"Price","数量":"Quantity"},"zh_Hans_CN":{"价格":"价格","数量":"数量"},"zh_Hant_HK":{"价格":"價格","数量":"數量"}}')},751:function(t,e,r){"use strict";r.r(e);var n=r(61),c=r(149),o=r(713),l=r(737);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={mixins:[o.default],data:function(){return{depth:{},marketState:{}}},computed:f(f(f({},Object(c.c)(["legal"])),Object(c.b)({legalSymbol:"legalSymbol"})),{},{priceChangePercent:function(){return this.marketState&&this.marketState.open?this.marketState.close.minus(this.marketState.open).div(this.marketState.open).percent(!0):"--"},changeColor:function(){return this.marketState&&this.marketState.open?this.marketState.close.cmp(this.marketState.open)>0?"text-green-500":"text-red-500":""},curMoney:function(){return this.depth.last?this.$toLegal(this.depth.last,this.marketInfo.currency):"--"}}),mounted:function(){var t=this;this.$socket.on("depth.update",(function(e){e.params&&e.params[1]&&e.params[2]===t.marketStr&&(t.depth=e.params[1]||{})})),this.$socket.on("state.update",(function(e){e.params&&e.params[0]&&e.params[0][t.marketStr]&&(t.marketState=e.params[0][t.marketStr]||{})}))},methods:{setPrice:function(t){this.$emit("setPrice",t)}}};d.methods?Object.assign(d.methods,{$t:function(t){if(!this.$lang&&!l.zh_Hans_CN)return t;var e=l[this.$lang]||l.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):d.methods={$t:function(t){if(!this.$lang&&!l.zh_Hans_CN)return t;var e=l[this.$lang]||l.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var m=d,k=r(123),component=Object(k.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-market text-12 bg-white rounded-md p-20 xs:p-10 flex flex-col"},[r("div",{staticClass:"flex pb-10"},[r("span",{staticClass:"flex-1"},[t._v(t._s(t.$t("价格")))]),t._v(" "),r("span",[t._v(t._s(t.$t("数量")))])]),t._v(" "),r("div",{staticClass:"flex-1 flex flex-col justify-between"},[t.depth.asks?t._l(t.depth.asks,(function(e,i){return r("div",{key:"s"+i,staticClass:"flex"},[r("div",{staticClass:"flex-1 text-red-500 cursor-pointer",on:{click:function(e){return t.setPrice(t.depth.asks[t.depth.asks.length-i-1][0])}}},[t._v("\n          "+t._s(t.depth.asks[t.depth.asks.length-i-1][0])+"\n        ")]),t._v(" "),r("div",[t._v(t._s(t.depth.asks[t.depth.asks.length-i-1][1]))])])})):t._e(),t._v(" "),r("div",{staticClass:"py-10 flex items-center",class:t.changeColor},[r("span",{staticClass:"text-14 cursor-pointer flex-1",on:{click:function(e){return t.setPrice(t.depth.last)}}},[t._v(t._s(t.depth.last||"--"))]),t._v(" "),r("span",[t._v(t._s(t.legalSymbol)+t._s(t.curMoney))])]),t._v(" "),t.depth.bids?t._l(t.depth.bids,(function(e,i){return r("div",{key:"b"+i,staticClass:"flex"},[r("div",{staticClass:"flex-1 text-green-500 cursor-pointer",on:{click:function(r){return t.setPrice(e[0])}}},[t._v("\n          "+t._s(e[0])+"\n        ")]),t._v(" "),r("div",[t._v(t._s(e[1]))])])})):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports}}]);