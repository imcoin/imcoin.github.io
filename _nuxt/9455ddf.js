(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{813:function(t,e,r){"use strict";r.r(e);r(86),r(233);var n=r(63),c=r(154),o=r(756),f=r(757);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={components:{Statistics:o.default,Header:f.default},data:function(){return{marketInfo:{dest:"BTC",currency:"USDT"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["account"])),mounted:function(){this.setMarket()},methods:{setMarket:function(){if(this.$route.query.market){var t=this.$route.query.market.toUpperCase().split("-");this.marketInfo={dest:t[0],currency:t[1]}}}}},d=r(127),component=Object(d.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-statistics bg-white"},[r("Header"),t._v(" "),r("Statistics",{attrs:{market:t.marketInfo}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(757).default,Statistics:r(756).default})}}]);