(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{735:function(t,e,r){var content=r(749);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(151).default)("7941f97d",content,!0,{sourceMap:!1})},748:function(t,e,r){"use strict";r(735)},749:function(t,e,r){var n=r(150)(!1);n.push([t.i,".c-top-markets .top-wrapper .top-item{border-radius:10px;min-width:120px;margin-left:10px}.c-top-markets .top-wrapper .top-item:first-child{margin-left:0}",""]),t.exports=n},758:function(t,e,r){"use strict";r.r(e);r(106);var n=r(61),o=r(149);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{marketState:{}}},computed:l(l({},Object(o.c)(["topMarkets"])),Object(o.b)({stateMarkets:"stateMarkets",legalSymbol:"legalSymbol"})),mounted:function(){var t=this;this.$socket.on("state.update",(function(e){e.params&&e.params[0]&&(t.marketState=l(l({},t.marketState),e.params[0]))}))},methods:{changeColor:function(t){return t&&t.open?t.close.cmp(t.open)>0?"text-green-500":"text-red-500":""},priceChangePercent:function(t){return t&&t.open?t.close.minus(t.open).div(t.open).percent(!0):"--"},getVal:function(t,e){return t&&t[e]?t[e]:"--"},curMoney:function(t,e){return t&&t.last?this.$toLegal(t.last,this.$parseMarket(e).currency):"--"},getMarketStr:function(t){var e=this.$parseMarket(t);return"".concat(e.dest,"/").concat(e.currency)},goMarket:function(t){var e=this.$parseMarket(t);this.$store.commit("SET_CURRENT_MARKET","".concat(e.dest,"-").concat(e.currency)),this.$router.push("/?market=".concat(e.dest,"-").concat(e.currency))}}},m=(r(748),r(123)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-top-markets w-full overflow-auto py-5"},[r("div",{staticClass:"flex top-wrapper"},t._l(t.topMarkets,(function(e,i){return r("div",{key:i,staticClass:"bg-white shadow p-10 top-item cursor-pointer whitespace-nowrap",on:{click:function(r){return t.goMarket(e)}}},[r("div",{staticClass:"text-12"},[r("span",[t._v(t._s(t.getMarketStr(e)))]),t._v(" "),r("span",{class:t.changeColor(t.marketState[e])},[t._v("\n          "+t._s(t.priceChangePercent(t.marketState[e]))+"\n        ")])]),t._v(" "),r("p",{class:t.changeColor(t.marketState[e])},[t._v("\n        "+t._s(t.getVal(t.marketState[e],"last"))+"\n      ")]),t._v(" "),r("p",{staticClass:"text-12 text-gray-700"},[r("span",[t._v(t._s(t.legalSymbol)+t._s(t.curMoney(t.marketState[e],e)))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);