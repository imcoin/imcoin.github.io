(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{117:function(t,e,n){"use strict";n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return D})),n.d(e,"b",(function(){return U})),n.d(e,"a",(function(){return f}));n(106),n(347),n(125),n(319),n(128),n(48),n(95),n(126),n(318),n(129);var r=n(212),T=n.n(r),o=n(170),c=n.n(o),S=n(50),l=c.a.AES.decrypt;function C(t,e){var n=Object.keys(e).sort().map((function(t){return"".concat(t,"=").concat(e[t])})).concat(["secret_key=".concat(t)]).join("&");return T()(n).toUpperCase()}function D(t,e){return{params:e,headers:{authorization:C(t,e)}}}function U(t){return l(t,S.e).toString(c.a.enc.Utf8).split(S.f)}function f(t){var e=parseFloat(t);return isNaN(e)?0:e}},310:function(t,e,n){"use strict";var r=n(7),T=n(439),o=n.n(T),c=n(440),S=n.n(c);r.default.use(o.a,{locale:S.a})},311:function(t,e,n){"use strict";(function(t){n(106),n(320),n(128),n(107);e.a=function(){var e={slicestr:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,r=e+n;return t.length<=r?t:"".concat(e>0?t.slice(0,e):"","***").concat(n>0?t.slice(-n):"")}},n={};Object.keys(e).forEach((function(t){n[t]={enumerable:!1,configurable:!0,value:function(){for(var n=arguments.length,r=new Array(n),T=0;T<n;T++)r[T]=arguments[T];return e[t].apply(null,[this].concat(r))}}})),Object.defineProperties(t.String.prototype,n)}}).call(this,n(33))},312:function(t,e,n){"use strict";(function(t){n(106),n(698),n(319),n(128),n(48),n(95),n(126),n(158),n(107);var e=n(69),r=n.n(e),T=n(703),o={cmp:function(a,b){return new r.a(a).comparedTo(b)},plus:function(a,b){return new r.a(a).plus(b).toString()},minus:function(a,b){return new r.a(a).minus(b).toString()},mul:function(a,b){return new r.a(a).times(b).toString()},div:function(a,b){return new r.a(a).div(b).toString()},pow:function(a,b){return new r.a(a).pow(b).toString()},toBN:function(a){return new r.a(a)},toComma:function(t,e){var n=new r.a(t);return n.isNaN()?t:n.toFormat(e)},toBFixed:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,T=new r.a(t);return T.isNaN()?t:T.toFixed(e,n)},trimZero:function(t){return t.replace(/(?:\.0*|(\.\d+?)0+)$/,"$1")},percent:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,T=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=new r.a(t),c=o.isPositive(),S=o.times(100).toFixed(n);return T&&(S=S.trimZero()),"".concat(c&&e?"+":"").concat(S,"%")},toTime:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd HH:mm:ss",option=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isSecond:!0};if(t){var n=option||{},r=parseFloat(n.isSecond?1e3*t:t);return Object(T.a)(r,e||"yyyy/MM/dd HH:mm:ss",option)}return t}},c={};Object.keys(o).forEach((function(t){c[t]={enumerable:!1,configurable:!0,value:function(){r.a.config({EXPONENTIAL_AT:[-50,50]});for(var e=arguments.length,n=new Array(e),T=0;T<e;T++)n[T]=arguments[T];return o[t].apply(null,[this].concat(n))}}})),Object.defineProperties(t.String.prototype,c),Object.defineProperties(t.Number.prototype,c)}).call(this,n(33))},313:function(t,e,n){"use strict";n(127),n(152);e.a=function(t){var e=t.store;try{var n=JSON.parse(localStorage.getItem("ACCOUNT_INFO"));e.commit("SET_ACCOUNT_LIST",n),n&&n.length>0&&e.dispatch("addAccount",n[n.length-1])}catch(t){}try{var r=JSON.parse(localStorage.getItem("TOP_MARKETS"));r&&e.commit("SET_TOP_MAEKETS",r)}catch(t){}try{var T=t.route.query.market||localStorage.getItem("CURRENT_MARKET");T.includes("-")||(T="BTC-USDT"),e.commit("SET_CURRENT_MARKET",(T||"BTC-USDT").toUpperCase())}catch(t){}}},314:function(t,e,n){"use strict";n(48),n(126);var r=n(61),T=n(7),o=n(180),c=n.n(o),S=n(50),l=n(117);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=function(t){var e=t.store,n={$url:function(t){var n=e.state.account;return(n?S.a[n.platform]:"")+t},$sign:function(t){var n=e.state.account,r=Object(l.b)(n.token||"")[1];return Object(l.c)(r,t)},$signGet:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.state.account,r=Object(l.b)(n.token||"")[1];return t.tonce=(new Date).getTime(),t.access_id=n.access_id,Object(l.d)(r,t)},$toLegal:function(t,n,r){var T=c()(e,"state.usdRate.".concat(n))||"0",o=r||e.state.legal;if("USD"!==o){var S=c()(e,"state.usdRate.".concat(o))||"0";T=S.cmp(0)>0?T.div(S):"0"}return T.toString().mul(t||0).toBFixed(2)},$toToken:function(t,n,r){if(n===r)return t;var T=c()(e,"state.usdRate.".concat(n))||"0",o=c()(e,"state.usdRate.".concat(r))||"0";return o.cmp(0)>0?T.toString().div(o).mul(t||0):"0"},$parseMarket:function(t){for(var i=0;i<S.b.length;i++){var e=t.lastIndexOf(S.b[i]);if(e>0&&e+S.b[i].length===t.length)return{currency:S.b[i],dest:t.substring(0,e)}}}};T.default.mixin({filters:D({},n),computed:{},methods:D({},n)})}},315:function(t,e,n){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?1597e6fb55cec4fc67d3438b88b836fc";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}()},316:function(t,e,n){"use strict";var r=n(7),T=n(59),o=n(444),c=n(704),S=n(702),l=n(707),C=n(705),D=n(706),U=n(708);T.a([S.a,l.a,C.a,D.a,c.a,U.a]),r.default.prototype.$Echarts=o},317:function(t,e,n){"use strict";n(106),n(48),n(107),n(129);var r=n(441),T=n(442),o=n(212),c=n.n(o),S=n(117),l=function(){function t(e){Object(r.a)(this,t),this.url=e,this.id=0,this.handlerDict={},this.todo=[],this.count=0,this.onError=null,this.retryInervalMultiple=0,this.initOnDone=!1}return Object(T.a)(t,[{key:"init",value:function(){var t=this,e=this;this.ws=new WebSocket(e.url),this.ws.onopen=function(){e.ping(),e.todo.forEach((function(t){e.ws.send(t)})),e.todo=[]},this.ws.onmessage=function(data){e.handleMessage(data)},this.ws.onclose=function(){t.reconnect()}}},{key:"reconnect",value:function(){var t=this,e=2e3*this.retryInervalMultiple;this.retryInervalMultiple=this.retryInervalMultiple+1,this.retryInervalMultiple>=10&&(this.retryInervalMultiple=0),setTimeout((function(){console.log("WS reconnect"),t.init(t.url),t.onError&&t.onError()}),e)}},{key:"getNewId",value:function(){return this.id++,this.id}},{key:"handleMessage",value:function(data){if(data){var t=JSON.parse(data.data),e=this.handlerDict[t.id]||this.handlerDict[t.method];e&&e.forEach((function(e){e(t)}))}}},{key:"socketSend",value:function(t){var e=JSON.stringify(t);this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(e):this.todo.push(e)}},{key:"send",value:function(t){var e=this.getNewId();return this.socketSend(Object.assign(t,{id:e})),e}},{key:"on",value:function(t,e){this.handlerDict[t]=this.handlerDict[t]||[],e&&this.handlerDict[t].push(e)}},{key:"commit",value:function(t,e){var n=this,r=this.getNewId();return t.params=t.params||[],this.on(r,(function(t){e&&e(t),delete n.handlerDict[r]})),this.socketSend(Object.assign(t,{id:r})),r}},{key:"ping",value:function(){var t=this;this.pingTimerId&&window.clearTimeout(this.pingTimerId),this.socketState===this.STATE_OPEN&&(this.pingTimerId=setTimeout((function(){t.commit({method:"server.ping",params:[]}),t.ping()}),5e3))}},{key:"sign",value:function(t){var e=this;return new Promise((function(n,r){var T=Object(S.b)(t.token||"")[1],time=(new Date).getTime(),o="access_id=".concat(t.access_id,"&tonce=").concat(time,"&secret_key=").concat(T),l=c()(o).toUpperCase();e.commit({method:"server.sign",params:[t.access_id,l,time]},(function(data){data&&data.result&&"success"===data.result.status?n():r(new Error(data&&data.error&&data.error.message||"Sign failed"))}))}))}}]),t}();e.a=function(t,e){var n=t.app,r=new l("wss://socket.coinex.com/");e("socket",n.$socket=r),r.init()}},445:function(t,e,n){"use strict";var r={mounted:function(){this.$store.dispatch("updateUsdRate")}},T=n(123),component=Object(T.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},448:function(t,e,n){n(449),t.exports=n(450)},498:function(t,e,n){var content=n(499);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("93a94ad0",content,!0,{sourceMap:!1})},499:function(t,e,n){var r=n(150)(!1);r.push([t.i,'.coin-tabs{display:flex;flex-direction:column}.coin-tabs .el-tabs__header{margin-bottom:0;margin-left:1px}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav{display:flex;height:30px;outline:none}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__active-bar{display:none}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{height:27px;padding:0 29px;margin-top:3px;font-size:14px;font-weight:400;line-height:27px;color:#949494;background-color:#edf0f4;border-right:1px solid #ececec;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item:last-child{border-right-width:0}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item.is-active{position:relative;height:30px;padding-top:3px;margin-top:0;font-size:14px;font-weight:500;color:#303030;background-color:#fff;border-right-width:0;box-shadow:2px 0 2.5px 0 rgba(93,94,116,.07)}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item.is-active:after{position:absolute;top:0;right:-15px;z-index:1;display:block;width:15px;height:30px;background-image:url(/images/triangle.png);background-size:cover;content:" ";transform:rotateY(180deg)}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item.is-active:last-child:after{right:auto;left:-15px;transform:rotateY(0deg)}@media (max-width:767px){.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{padding-left:15px;padding-right:15px}}.coin-tabs .el-tabs__header .el-tabs__nav-wrap:after{display:none}.coin-tabs .el-tabs__content{flex:1}.coin-tabs .el-tabs__content .el-tab-pane{height:100%;background:#fff;box-shadow:1px 3px 7px -2px rgba(93,97,131,.06);border-radius:4px;border:1px solid #f4f4f8;padding:20px}@media (max-width:767px){.coin-tabs .el-tabs__content .el-tab-pane{padding:10px}}.el-dialog{border-radius:4px;display:flex;flex-direction:column;max-height:100%;position:absolute;top:50%;left:50%;width:450px;max-width:calc(100vw - 20px);margin:0!important;transform:translate(-50%,-50%)}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.el-loading-spinner svg{margin:auto}body{background-color:#f0f0f0}.el-table td,.el-table th{font-size:12px;line-height:14px;padding:6px 0}.el-table td .caret-wrapper,.el-table th .caret-wrapper{height:0}.el-table td .caret-wrapper .sort-caret.ascending,.el-table th .caret-wrapper .sort-caret.ascending{top:auto;bottom:2px}.el-table td .caret-wrapper .sort-caret.descending,.el-table th .caret-wrapper .sort-caret.descending{bottom:auto;top:0}',""]),t.exports=r},50:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"f",(function(){return T})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return S})),n.d(e,"a",(function(){return l}));var r=["USDT","USDC","BTC","BCH","ETH","CET"],T="#imCoin#",o="LETUSMAKEWORLDBETTER",c=["CET","BTC","ETH","USDT","XRP","DOT","ADA","LINK","LTC","BNB","USDC","DAI","BCH","TUSD","BSV","XLM"],S=["KAVAUSDT","CFXUSDT","SUSHIBTC","ONTUSDT","BCHAUSDT","UMAETH","KNCUSDT","GRINBTC","GRTUSDT","ATOMUSDT","COMPBTC","SEROUSDT","BNTUSDT","ETHBCH","QTUMBTC","BTCUSDC","OMGUSDT","WINGSBTC","BTMUSDT","REEFUSDT","RINGUSDT","EMCBTC","EOSCUSDT","ETHBTC","PGNBTC","IFTUSDT","LUNAUSDT","API3USDT","LOOMUSDT","OLTBTC","SNXBTC","GRINUSDT","NEOBTC","BATUSDT","KUNUSDT","ETCBCH","MATICBTC","YUSRAUSDT","NMCUSDT","DASHUSDT","WNXMETH","BEAMUSDT","IOTABCH","NMRBTC","MKRUSDT","OXTBTC","OLTUSDT","VETBTC","MKRETH","DXDETH","ZENUSDT","KSMUSDT","SWRVUSDT","LRCETH","HTBTC","AYABTC","LINKUSDT","XTZUSDT","ALGOBCH","BCNUSDT","HOTUSDT","LINKETH","TUSDUSDT","LTCUSDT","BTMBCH","DOTUSDT","REPUSDT","CRVBTC","DXDBTC","ENJBTC","ZILBTC","BTTBTC","XRPUSDT","ERGBTC","VSYSUSDT","ZECBCH","BCNBTC","HOTBTC","1INCHUSDT","LRCUSDT","HBARUSDT","BNBBTC","DMDBTC","LSKUSDT","ALGOUSDT","POLSUSDT","IOTAUSDT","ADABTC","CFXBTC","TRTLUSDT","CMTUSDT","ONTBTC","HYDROETH","SOLUSDT","VSYSBTC","ZECUSDT","TRXETH","ADABCH","NMRETH","MLNBTC","AAVEUSDT","CETBTC","SEELEBTC","DOGEBTC","FTTBTC","BOTETH","ETHUSDC","NEOUSDT","ASTETH","LRCBTC","HBARBTC","ONESUSDT","SNXUSDT","SUMOUSDT","BSVBCH","AEUSDT","PIVXBTC","WINGSUSDT","HCBTC","BSVBTC","COVERUSDT","GENETH","LITUSDT","STORJBTC","IOSTUSDT","WNXMUSDT","PERPUSDT","WOOUSDT","CHZUSDT","SAICET","AAVEETH","YFIUSDT","DEROUSDT","XMRBCH","FCHUSDT","FILBTC","CETUSDT","SEELEUSDT","PNKUSDT","BEAMBTC","WNXMBTC","JRTETH","NEARUSDT","ETCBTC","DOGEUSDT","CREAMUSDT","EOSETH","ALGOBTC","JSTUSDT","RENUSDT","CKBBTC","RSRETH","XVGBTC","SPICECET","ADAUSDT","SUSHIETH","MKRBTC","SPOKUSDT","COMBOUSDT","RVNBCH","HYDROBTC","DIAUSDT","VTHOBTC","PGNUSDT","CETUSDC","LCUSDT","GLMUSDT","MANABTC","EOSBTC","NBSUSDT","OKBBTC","SIMPLEUSDT","BATBTC","HYDROUSDT","ALPHAUSDT","FIROUSDT","LOOMBTC","RSRUSDT","BTCUSDT","KDAUSDT","XEMUSDT","SWRVETH","SYSUSDT","ANTUSDT","HEGICUSDT","BALBTC","GENBTC","EMCUSDT","ETHUSDT","ONGBTC","RVNBTC","MATICUSDT","DOGEBCH","SWRVBTC","TRXBCH","FCHBCH","UNIBTC","CAKEUSDT","NRGBTC","DGBBTC","BADGERUSDT","ZERUSDT","BOTBTC","GNOUSDT","ASTBTC","LTCUSDC","NNBCET","SUNBTC","BTSUSDT","SNTUSDT","ACMUSDT","TRXUSDT","IRISUSDT","NPXSUSDT","YFIIETH","OKBUSDT","XLMBCH","GASUSDT","KMDBTC","PNKETH","BSVUSDC","LTCBTC","STXUSDT","QTUMUSDT","SPICEBCH","FILUSDT","NNBBTC","RENETH","SEROBTC","WAVESUSDT","PHNXBTC","AYAUSDT","LTCBCH","KDABTC","XEMBTC","OCEANUSDT","DGTXBTC","ICXUSDT","ULTBTC","BCHUSDC","INJUSDT","DCRBTC","UMAUSDT","KMDUSDT","BKKUSDT","JSTBTC","RENBTC","FTTUSDT","BOTUSDT","XRPBCH","ICXBTC","HNSBTC","ZRXUSDT","NANOUSDT","ZERBTC","OMGETH","BTTUSDT","ASTUSDT","ZILETH","FCHBTC","LONUSDT","AVAXBTC","DCRUSDT","DASHBCH","USDCUSDT","CROUSDT","GHSTUSDT","XMRBTC","LSKBTC","BNBUSDT","BTMBTC","OMGBTC","BCHUSDT","AVAXUSDT","PNKBTC","CVPUSDT","COMPUSDT","CHZBTC","GNOETH","ENJUSDT","ZILUSDT","LAMBBTC","AAVEBTC","DOTBTC","PIVXUSDT","NMCBTC","HCUSDT","DASHBTC","BSVUSDT","DODOUSDT","ETCUSDT","BNTETH","SCUSDT","LINKBTC","XTZBTC","IOTABTC","HTUSDT","KP3RUSDT","STORJUSDT","LBCBTC","ARDRBTC","TORNUSDT","YFIBTC","KANBTC","DEROBTC","ARRRBTC","DMDUSDT","CKBUSDT","VETUSDT","ZECBTC","BNTBTC","CETETH","SEELEETH","YFIIUSDT","WAVESBTC","XDAGUSDT","ANTBTC","NNBUSDT","SYSBTC","CRVUSDT","YFIETH","LBCUSDT","ARDRUSDT","SNXETH","BCHABTC","KNCBTC","SKLUSDT","SUSHIUSDT","MANAUSDT","EOSCBTC","EOSUSDT","PHNXUSDT","JRTUSDT","VETETH","ULTUSDT","CREAMETH","DGTXUSDT","ZENBTC","KSMBTC","LAMBUSDT","ATOMBCH","VTHOUSDT","PAXUSDT","CTXCUSDT","GNOBTC","CRVETH","DAIUSDT","NMRUSDT","OXTUSDT","KEEPUSDT","KNCETH","ARRRUSDT","CTXCBTC","DXDUSDT","CETBCH","XRPBTC","ONGUSDT","GENUSDT","RVNUSDT","CMTBTC","BALETH","DGBBCH","UMABTC","VTHOETH","ELABTC","BTSBTC","SNTBTC","ACMBTC","REVVUSDT","XVGUSDT","IOSTBTC","SCBTC","ZRXETH","MIRUSDT","ERGUSDT","HNSUSDT","UNIUSDT","SAIBCH","BCHABCH","ELAUSDT","XLMUSDT","UNIETH","DIABTC","SCRTUSDT","POWRUSDT","BCHBTC","EOSBCH","BALUSDT","GASBTC","MLNUSDT","ZRXBTC","NANOBTC","RSRBTC","CREAMBTC","XLMBTC","KTONUSDT","DIAETH","XRPUSDC","ATOMBTC","XMRUSDT","COMPETH","NRGUSDT","DGBUSDT","YFIIBTC","ULTETH","TRXBTC","SUNUSDT"],l={coinex:"https://www.samyoc.com/yoc/coinexapi"}},500:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return C})),n.d(e,"actions",(function(){return D})),n.d(e,"getters",(function(){return U}));n(106),n(501),n(127),n(446),n(48),n(95),n(126),n(152),n(158),n(124);var r=n(39),T=n(170),o=n.n(T),c=n(50),S=o.a.AES.encrypt,l=function(){return{account:null,accountList:null,markets:c.c,currentMarket:"BTC-USDT",usdRate:null,legal:"CNY",topMarkets:["CETUSDT","BTCUSDT","ETHUSDT","BCHUSDT","LTCUSDT","BSVUSDT","DOGEUSDT","XRPUSDT"]}},C={SET_ACCOUNT:function(t,data){t.account=data},SET_ACCOUNT_LIST:function(t,data){t.accountList=data,localStorage.setItem("ACCOUNT_INFO",JSON.stringify(data))},SET_CURRENT_MARKET:function(t,data){t.currentMarket=data,localStorage.setItem("CURRENT_MARKET",data)},SET_USDRATE:function(t,data){t.usdRate=data},SET_TOP_MAEKETS:function(t,data){t.topMarkets=data}},D={addAccount:function(t,e){var n=t.commit,r=(t.rootState.accountList||[]).concat(),T=r.findIndex((function(t){return t.access_id===e.access_id}));T>=0&&r.splice(T,1),e.secret_key&&(e.token=S(e.access_id+c.f+e.secret_key,c.e).toString(),delete e.secret_key),r.push(e),n("SET_ACCOUNT",e),n("SET_ACCOUNT_LIST",r)},updateUsdRate:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,T;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$axios.get("https://www.samyoc.com/yoc/coinexapi/usd/exchange/rate");case 3:0===(T=n.sent).data.code&&r("SET_USDRATE",T.data.data);case 5:case"end":return n.stop()}}),n)})))()}},U={stateMarkets:function(t){var e=(t.topMarkets||[]).concat(),n=(t.currentMarket||"").replace("-","");return e.includes(n)||e.push(n),e},legalSymbol:function(t){return"CNY"===t.legal?"￥":"$"}}},506:function(t,e){},508:function(t,e){},519:function(t,e){},521:function(t,e){},546:function(t,e){},548:function(t,e){},549:function(t,e){},554:function(t,e){},556:function(t,e){},575:function(t,e){},587:function(t,e){},590:function(t,e){},616:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return C})),n.d(e,"actions",(function(){return D})),n.d(e,"getters",(function(){return U}));n(128),n(107);var r=n(61),T=n(7),o=n(50);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=function(){return{asset:{CET:{},BTC:{},ETH:{},USDT:{},XRP:{},DOT:{},ADA:{},LINK:{},LTC:{},BNB:{},USDC:{},DAI:{},BCH:{},TUSD:{},BSV:{},XLM:{}}}},C={SET_ASSET:function(t,data){t.asset=data},UPDATE_ASSET:function(t,data){if(data){var e=t.asset||{};for(var n in data)T.default.set(e,n,data[n])}}},D={queryAsset:function(t){var e=t.commit;this.$socket.commit({method:"asset.query",params:[]},(function(data){data.error||e("SET_ASSET",data.result)}))}},U={assetList:function(t){var e=[],n={};return o.d.forEach((function(r){n[r]=!0,e.push(S({name:r},t.asset[r]))})),Object.keys(t.asset||{}).forEach((function(r){n[r]||e.push(S({name:r},t.asset[r]))})),e}}},617:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return T})),n.d(e,"actions",(function(){return o})),n.d(e,"getters",(function(){return c}));n(618);var r=function(){return{langOptions:[{val:"en_US",text:"English"},{val:"zh_Hans_CN",text:"简体中文"},{val:"zh_Hant_HK",text:"繁体中文"}],lang:"",defaultLang:"zh_Hans_CN"}},T={SET_LANG:function(t,e){t.lang=e,this.$cookies.set("lang",e,{path:"/",maxAge:2592e3}),this.$axios.setHeader("Accept-Language",e)}},o={setLang:function(t,e){(0,t.commit)("SET_LANG",e)}},c={availableLocales:function(t){return t.langOptions},currentLang:function(t){return t.langOptions.find((function(e){return e.val===t.lang}))||{}}}}},[[448,22,2,23]]]);