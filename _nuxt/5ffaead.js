(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{118:function(e,t,o){"use strict";o.d(t,"c",(function(){return S})),o.d(t,"d",(function(){return D})),o.d(t,"b",(function(){return C})),o.d(t,"a",(function(){return f}));o(106),o(347),o(128),o(319),o(131),o(48),o(86),o(127),o(228),o(130);var r=o(212),n=o.n(r),c=o(170),l=o.n(c),T=o(50),d=l.a.AES.decrypt;function S(e,t){var o=Object.keys(t).sort().map((function(e){return"".concat(e,"=").concat(t[e])})).concat(["secret_key=".concat(e)]).join("&");return n()(o).toUpperCase()}function D(e,t){return{params:t,headers:{authorization:S(e,t)}}}function C(e){return d(e,T.e).toString(l.a.enc.Utf8).split(T.f)}function f(e){var t=parseFloat(e);return isNaN(t)?0:t}},311:function(e,t,o){"use strict";var r=o(7),n=o(439),c=o.n(n),l=o(440),T=o.n(l);r.default.use(c.a,{locale:T.a})},312:function(e,t,o){"use strict";(function(e){o(106),o(320),o(131),o(107);t.a=function(){var t={slicestr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,r=t+o;return e.length<=r?e:"".concat(t>0?e.slice(0,t):"","***").concat(o>0?e.slice(-o):"")}},o={};Object.keys(t).forEach((function(e){o[e]={enumerable:!1,configurable:!0,value:function(){for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return t[e].apply(null,[this].concat(r))}}})),Object.defineProperties(e.String.prototype,o)}}).call(this,o(33))},313:function(e,t,o){"use strict";(function(e){o(106),o(700),o(319),o(131),o(48),o(86),o(127),o(158),o(107);var t=o(69),r=o.n(t),n=o(705),c={cmp:function(a,b){return new r.a(a).comparedTo(b)},plus:function(a,b){return new r.a(a).plus(b).toString()},minus:function(a,b){return new r.a(a).minus(b).toString()},mul:function(a,b){return new r.a(a).times(b).toString()},div:function(a,b){return new r.a(a).div(b).toString()},pow:function(a,b){return new r.a(a).pow(b).toString()},toBN:function(a){return new r.a(a)},toComma:function(e,t){var o=new r.a(e);return o.isNaN()?e:o.toFormat(t)},toBFixed:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=new r.a(e);return n.isNaN()?e:n.toFixed(t,o)},trimZero:function(e){return e.replace(/(?:\.0*|(\.\d+?)0+)$/,"$1")},percent:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=new r.a(e),l=c.isPositive(),T=c.times(100).toFixed(o);return n&&(T=T.trimZero()),"".concat(l&&t?"+":"").concat(T,"%")},toTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd HH:mm:ss",option=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isSecond:!0};if(e){var o=option||{},r=parseFloat(o.isSecond?1e3*e:e);return Object(n.a)(r,t||"yyyy/MM/dd HH:mm:ss",option)}return e}},l={};Object.keys(c).forEach((function(e){l[e]={enumerable:!1,configurable:!0,value:function(){r.a.config({EXPONENTIAL_AT:[-50,50]});for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return c[e].apply(null,[this].concat(o))}}})),Object.defineProperties(e.String.prototype,l),Object.defineProperties(e.Number.prototype,l)}).call(this,o(33))},314:function(e,t,o){"use strict";o(129),o(152);t.a=function(e){var t=e.store;try{var o=JSON.parse(localStorage.getItem("ACCOUNT_INFO"));t.commit("SET_ACCOUNT_LIST",o),o&&o.length>0&&t.dispatch("addAccount",o[o.length-1])}catch(e){}try{var r=JSON.parse(localStorage.getItem("TOP_MARKETS"));r&&t.commit("SET_TOP_MAEKETS",r)}catch(e){}try{var n=e.route.query.market||localStorage.getItem("CURRENT_MARKET");n.includes("-")||(n="BTC-USDT"),t.commit("SET_CURRENT_MARKET",(n||"BTC-USDT").toUpperCase())}catch(e){}var c=localStorage.getItem("CURRENT_THEME")||t.state.theme;t.commit("SET_THEME",c)}},315:function(e,t,o){"use strict";o(48),o(86),o(127),o(228);var r=o(61),n=o(7),c=o(180),l=o.n(c),T=o(50),d=o(118);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=function(e){var t=e.store,o={$url:function(e){var o=t.state.account;return(o?T.a[o.platform]:"")+e},$sign:function(e){var o=t.state.account,r=Object(d.b)(o.token||"")[1];return Object(d.c)(r,e)},$signGet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.state.account,r=Object(d.b)(o.token||"")[1];return e.tonce=(new Date).getTime(),e.access_id=o.access_id,Object(d.d)(r,e)},$toLegal:function(e,o,r){var n=l()(t,"state.usdRate.".concat(o))||"0",c=r||t.state.legal;if("USD"!==c){var T=l()(t,"state.usdRate.".concat(c))||"0";n=T.cmp(0)>0?n.div(T):"0"}return n.toString().mul(e||0).toBFixed(2)},$toToken:function(e,o,r){if(o===r)return e;var n=l()(t,"state.usdRate.".concat(o))||"0",c=l()(t,"state.usdRate.".concat(r))||"0";return c.cmp(0)>0?n.toString().div(c).mul(e||0):"0"},$parseMarket:function(e){for(var i=0;i<T.b.length;i++){var t=e.lastIndexOf(T.b[i]);if(t>0&&t+T.b[i].length===e.length)return{currency:T.b[i],dest:e.substring(0,t)}}},$fixed:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;if(!e||e.toString().indexOf(".")<=0)return e;var o=e.toString().split(".");return o[0].length+1<t?e.toString().substring(0,12):o[0]}};n.default.mixin({filters:D({},o),computed:{},methods:D({},o)})}},316:function(e,t,o){!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?1597e6fb55cec4fc67d3438b88b836fc";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s)}()},317:function(e,t,o){"use strict";var r=o(7),n=o(59),c=o(444),l=o(706),T=o(704),d=o(709),S=o(707),D=o(708),C=o(710);n.a([T.a,d.a,S.a,D.a,l.a,C.a]),r.default.prototype.$Echarts=c},318:function(e,t,o){"use strict";o(106),o(48),o(107),o(130);var r=o(441),n=o(442),c=o(212),l=o.n(c),T=o(118),d=function(){function e(t){Object(r.a)(this,e),this.url=t,this.id=0,this.handlerDict={},this.todo=[],this.count=0,this.onError=null,this.retryInervalMultiple=0,this.initOnDone=!1}return Object(n.a)(e,[{key:"init",value:function(){var e=this,t=this;this.ws=new WebSocket(t.url),this.ws.onopen=function(){t.ping(),t.todo.forEach((function(e){t.ws.send(e)})),t.todo=[]},this.ws.onmessage=function(data){t.handleMessage(data)},this.ws.onclose=function(){e.reconnect()}}},{key:"reconnect",value:function(){var e=this,t=2e3*this.retryInervalMultiple;this.retryInervalMultiple=this.retryInervalMultiple+1,this.retryInervalMultiple>=10&&(this.retryInervalMultiple=0),setTimeout((function(){console.log("WS reconnect"),e.init(e.url),e.onError&&e.onError()}),t)}},{key:"getNewId",value:function(){return this.id++,this.id}},{key:"handleMessage",value:function(data){if(data){var e=JSON.parse(data.data),t=this.handlerDict[e.id]||this.handlerDict[e.method];t&&t.forEach((function(t){t(e)}))}}},{key:"socketSend",value:function(e){var t=JSON.stringify(e);this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(t):this.todo.push(t)}},{key:"send",value:function(e){var t=this.getNewId();return this.socketSend(Object.assign(e,{id:t})),t}},{key:"on",value:function(e,t){this.handlerDict[e]=this.handlerDict[e]||[],t&&this.handlerDict[e].push(t)}},{key:"commit",value:function(e,t){var o=this,r=this.getNewId();return e.params=e.params||[],this.on(r,(function(e){t&&t(e),delete o.handlerDict[r]})),this.socketSend(Object.assign(e,{id:r})),r}},{key:"ping",value:function(){var e=this;this.pingTimerId&&window.clearTimeout(this.pingTimerId),this.socketState===this.STATE_OPEN&&(this.pingTimerId=setTimeout((function(){e.commit({method:"server.ping",params:[]}),e.ping()}),5e3))}},{key:"sign",value:function(e){var t=this;return new Promise((function(o,r){var n=Object(T.b)(e.token||"")[1],time=(new Date).getTime(),c="access_id=".concat(e.access_id,"&tonce=").concat(time,"&secret_key=").concat(n),d=l()(c).toUpperCase();t.commit({method:"server.sign",params:[e.access_id,d,time]},(function(data){data&&data.result&&"success"===data.result.status?o():r(new Error(data&&data.error&&data.error.message||"Sign failed"))}))}))}}]),e}();t.a=function(e,t){var o=e.app,r=new d("wss://socket.coinex.com/");t("socket",o.$socket=r),r.init()}},445:function(e,t,o){"use strict";var r={mounted:function(){this.$store.dispatch("updateUsdRate")}},n=o(123),component=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},448:function(e,t,o){o(449),e.exports=o(450)},498:function(e,t,o){var content=o(499);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("52c8f2bf",content,!0,{sourceMap:!1})},499:function(e,t,o){var r=o(124)(!1);r.push([e.i,":root{--color-bg:#f0f0f0;--color-white:#fff;--color-black:#000;--color-gray-800:#1f2937;--color-gray-700:#374151;--color-gray-600:#4b5563;--color-gray-500:#6b7280;--color-gray-400:#9ca3af;--color-gray-300:#d1d5db;--color-gray-200:#e5e7eb;--color-red-500:#ef4444;--color-red-300:#fca5a5;--color-green-500:#10b981;--color-blue-500:#3b82f6;--color-blue-400:#60a5fa;--color-blue-50:#eff6ff;--color-yellow-800:#92400e;--color-yellow-700:#b45309;--color-yellow-500:#f59e0b;--color-EBEEF5:#ebeef5;--color-606266:#606266;--color-DCDFE6:#dcdfe6;--color-E4E7ED:#e4e7ed;--color-ECF5FF:#ecf5ff;--color-B3D8FF:#b3d8ff;--color-F4F5F9:#f4f5f9}.theme-night{--color-bg:#292a30;--color-white:#333750;--color-black:#c3c3c3;--color-gray-800:#9aadc8;--color-gray-700:#ababab;--color-gray-600:#8491a3;--color-gray-500:#939ba9;--color-gray-400:#9ca3af;--color-gray-300:#2d2e2f;--color-gray-200:#464d5c;--color-red-500:#d73c3c;--color-red-300:#8f3b4a;--color-green-500:#10b981;--color-blue-500:#2074ff;--color-blue-400:#60a5fa;--color-blue-50:#3e4753;--color-yellow-800:#92400e;--color-yellow-700:#b45309;--color-yellow-500:#f59e0b;--color-EBEEF5:#3f3f49;--color-606266:#c7cbcf;--color-DCDFE6:#5c5c5c;--color-E4E7ED:#727376;--color-ECF5FF:#214b7a;--color-B3D8FF:#05396f;--color-F4F5F9:#474e6e}",""]),e.exports=r},50:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"f",(function(){return n})),o.d(t,"e",(function(){return c})),o.d(t,"d",(function(){return l})),o.d(t,"c",(function(){return T})),o.d(t,"a",(function(){return d}));var r=["USDT","USDC","BTC","BCH","ETH","CET"],n="#imCoin#",c="LETUSMAKEWORLDBETTER",l=["CET","BTC","ETH","USDT","XRP","DOT","ADA","LINK","LTC","BNB","USDC","DAI","BCH","TUSD","BSV","XLM"],T=["KAVAUSDT","CFXUSDT","SUSHIBTC","ONTUSDT","BCHAUSDT","UMAETH","KNCUSDT","GRINBTC","GRTUSDT","ATOMUSDT","COMPBTC","SEROUSDT","BNTUSDT","ETHBCH","QTUMBTC","BTCUSDC","OMGUSDT","WINGSBTC","BTMUSDT","REEFUSDT","RINGUSDT","EMCBTC","EOSCUSDT","ETHBTC","PGNBTC","IFTUSDT","LUNAUSDT","API3USDT","LOOMUSDT","OLTBTC","SNXBTC","GRINUSDT","NEOBTC","BATUSDT","KUNUSDT","ETCBCH","MATICBTC","YUSRAUSDT","NMCUSDT","DASHUSDT","WNXMETH","BEAMUSDT","IOTABCH","NMRBTC","MKRUSDT","OXTBTC","OLTUSDT","VETBTC","MKRETH","DXDETH","ZENUSDT","KSMUSDT","SWRVUSDT","LRCETH","HTBTC","AYABTC","LINKUSDT","XTZUSDT","ALGOBCH","BCNUSDT","HOTUSDT","LINKETH","TUSDUSDT","LTCUSDT","BTMBCH","DOTUSDT","REPUSDT","CRVBTC","DXDBTC","ENJBTC","ZILBTC","BTTBTC","XRPUSDT","ERGBTC","VSYSUSDT","ZECBCH","BCNBTC","HOTBTC","1INCHUSDT","LRCUSDT","HBARUSDT","BNBBTC","DMDBTC","LSKUSDT","ALGOUSDT","POLSUSDT","IOTAUSDT","ADABTC","CFXBTC","TRTLUSDT","CMTUSDT","ONTBTC","HYDROETH","SOLUSDT","VSYSBTC","ZECUSDT","TRXETH","ADABCH","NMRETH","MLNBTC","AAVEUSDT","CETBTC","SEELEBTC","DOGEBTC","FTTBTC","BOTETH","ETHUSDC","NEOUSDT","ASTETH","LRCBTC","HBARBTC","ONESUSDT","SNXUSDT","SUMOUSDT","BSVBCH","AEUSDT","PIVXBTC","WINGSUSDT","HCBTC","BSVBTC","COVERUSDT","GENETH","LITUSDT","STORJBTC","IOSTUSDT","WNXMUSDT","PERPUSDT","WOOUSDT","CHZUSDT","SAICET","AAVEETH","YFIUSDT","DEROUSDT","XMRBCH","FCHUSDT","FILBTC","CETUSDT","SEELEUSDT","PNKUSDT","BEAMBTC","WNXMBTC","JRTETH","NEARUSDT","ETCBTC","DOGEUSDT","CREAMUSDT","EOSETH","ALGOBTC","JSTUSDT","RENUSDT","CKBBTC","RSRETH","XVGBTC","SPICECET","ADAUSDT","SUSHIETH","MKRBTC","SPOKUSDT","COMBOUSDT","RVNBCH","HYDROBTC","DIAUSDT","VTHOBTC","PGNUSDT","CETUSDC","LCUSDT","GLMUSDT","MANABTC","EOSBTC","NBSUSDT","OKBBTC","SIMPLEUSDT","BATBTC","HYDROUSDT","ALPHAUSDT","FIROUSDT","LOOMBTC","RSRUSDT","BTCUSDT","KDAUSDT","XEMUSDT","SWRVETH","SYSUSDT","ANTUSDT","HEGICUSDT","BALBTC","GENBTC","EMCUSDT","ETHUSDT","ONGBTC","RVNBTC","MATICUSDT","DOGEBCH","SWRVBTC","TRXBCH","FCHBCH","UNIBTC","CAKEUSDT","NRGBTC","DGBBTC","BADGERUSDT","ZERUSDT","BOTBTC","GNOUSDT","ASTBTC","LTCUSDC","NNBCET","SUNBTC","BTSUSDT","SNTUSDT","ACMUSDT","TRXUSDT","IRISUSDT","NPXSUSDT","YFIIETH","OKBUSDT","XLMBCH","GASUSDT","KMDBTC","PNKETH","BSVUSDC","LTCBTC","STXUSDT","QTUMUSDT","SPICEBCH","FILUSDT","NNBBTC","RENETH","SEROBTC","WAVESUSDT","PHNXBTC","AYAUSDT","LTCBCH","KDABTC","XEMBTC","OCEANUSDT","DGTXBTC","ICXUSDT","ULTBTC","BCHUSDC","INJUSDT","DCRBTC","UMAUSDT","KMDUSDT","BKKUSDT","JSTBTC","RENBTC","FTTUSDT","BOTUSDT","XRPBCH","ICXBTC","HNSBTC","ZRXUSDT","NANOUSDT","ZERBTC","OMGETH","BTTUSDT","ASTUSDT","ZILETH","FCHBTC","LONUSDT","AVAXBTC","DCRUSDT","DASHBCH","USDCUSDT","CROUSDT","GHSTUSDT","XMRBTC","LSKBTC","BNBUSDT","BTMBTC","OMGBTC","BCHUSDT","AVAXUSDT","PNKBTC","CVPUSDT","COMPUSDT","CHZBTC","GNOETH","ENJUSDT","ZILUSDT","LAMBBTC","AAVEBTC","DOTBTC","PIVXUSDT","NMCBTC","HCUSDT","DASHBTC","BSVUSDT","DODOUSDT","ETCUSDT","BNTETH","SCUSDT","LINKBTC","XTZBTC","IOTABTC","HTUSDT","KP3RUSDT","STORJUSDT","LBCBTC","ARDRBTC","TORNUSDT","YFIBTC","KANBTC","DEROBTC","ARRRBTC","DMDUSDT","CKBUSDT","VETUSDT","ZECBTC","BNTBTC","CETETH","SEELEETH","YFIIUSDT","WAVESBTC","XDAGUSDT","ANTBTC","NNBUSDT","SYSBTC","CRVUSDT","YFIETH","LBCUSDT","ARDRUSDT","SNXETH","BCHABTC","KNCBTC","SKLUSDT","SUSHIUSDT","MANAUSDT","EOSCBTC","EOSUSDT","PHNXUSDT","JRTUSDT","VETETH","ULTUSDT","CREAMETH","DGTXUSDT","ZENBTC","KSMBTC","LAMBUSDT","ATOMBCH","VTHOUSDT","PAXUSDT","CTXCUSDT","GNOBTC","CRVETH","DAIUSDT","NMRUSDT","OXTUSDT","KEEPUSDT","KNCETH","ARRRUSDT","CTXCBTC","DXDUSDT","CETBCH","XRPBTC","ONGUSDT","GENUSDT","RVNUSDT","CMTBTC","BALETH","DGBBCH","UMABTC","VTHOETH","ELABTC","BTSBTC","SNTBTC","ACMBTC","REVVUSDT","XVGUSDT","IOSTBTC","SCBTC","ZRXETH","MIRUSDT","ERGUSDT","HNSUSDT","UNIUSDT","SAIBCH","BCHABCH","ELAUSDT","XLMUSDT","UNIETH","DIABTC","SCRTUSDT","POWRUSDT","BCHBTC","EOSBCH","BALUSDT","GASBTC","MLNUSDT","ZRXBTC","NANOBTC","RSRBTC","CREAMBTC","XLMBTC","KTONUSDT","DIAETH","XRPUSDC","ATOMBTC","XMRUSDT","COMPETH","NRGUSDT","DGBUSDT","YFIIBTC","ULTETH","TRXBTC","SUNUSDT"],d={coinex:"https://www.samyoc.com/yoc/coinexapi"}},500:function(e,t,o){var content=o(501);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(125).default)("93a94ad0",content,!0,{sourceMap:!1})},501:function(e,t,o){var r=o(124)(!1);r.push([e.i,'.coin-tabs{display:flex;flex-direction:column}.coin-tabs .el-tabs__header{margin-bottom:0;margin-left:1px}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav{display:flex;height:30px;outline:none}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__active-bar{display:none}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{height:27px;padding:0 29px;margin-top:3px;font-size:14px;font-weight:400;line-height:27px;color:#949494;background-color:#edf0f4;border-right:1px solid #ececec;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item:last-child{border-right-width:0}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item.is-active{position:relative;height:30px;padding-top:3px;margin-top:0;font-size:14px;font-weight:500;color:#303030;background-color:var(--color-white);border-right-width:0;box-shadow:2px 0 2.5px 0 rgba(93,94,116,.07)}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item.is-active:after{position:absolute;top:0;right:-15px;z-index:1;display:block;width:15px;height:30px;background-image:url(/images/triangle.png);background-size:cover;content:" ";transform:rotateY(180deg)}.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item.is-active:last-child:after{right:auto;left:-15px;transform:rotateY(0deg)}@media (max-width:767px){.coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{padding-left:15px;padding-right:15px}}.coin-tabs .el-tabs__header .el-tabs__nav-wrap:after{display:none}.coin-tabs .el-tabs__content{flex:1}.coin-tabs .el-tabs__content .el-tab-pane{height:100%;background:var(--color-white);box-shadow:1px 3px 7px -2px rgba(93,97,131,.06);border-radius:4px;border:1px solid #f4f4f8;padding:20px}@media (max-width:767px){.coin-tabs .el-tabs__content .el-tab-pane{padding:10px}}.theme-night .coin-tabs .el-tabs__content .el-tab-pane{border:1px solid #333850}.theme-night .coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{color:#9a9a9a;background-color:#333850;border-right:1px solid #30354a}.theme-night .coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item.is-active{color:#d2d2d2;box-shadow:2px 0 2.5px 0 rgba(93,94,116,.07)}.theme-night .coin-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item.is-active:after{background-image:url(/images/triangle_night.png)}body .el-table{color:var(--color-606266)}body .el-table,body .el-table th,body .el-table tr{background-color:var(--color-white)}body .el-table td{border-bottom:1px solid var(--color-EBEEF5)}body .el-table td,body .el-table th{background-color:var(--color-white);font-size:12px;line-height:14px;padding:6px 0}body .el-table td.is-leaf,body .el-table th.is-leaf{border-bottom:1px solid var(--color-EBEEF5)}body .el-table td .caret-wrapper,body .el-table th .caret-wrapper{height:0}body .el-table td .caret-wrapper .sort-caret.ascending,body .el-table th .caret-wrapper .sort-caret.ascending{top:auto;bottom:2px}body .el-table td .caret-wrapper .sort-caret.descending,body .el-table th .caret-wrapper .sort-caret.descending{bottom:auto;top:0}body .el-table .el-table__fixed-right:before,body .el-table:before{background-color:var(--color-EBEEF5)}body .el-table__expanded-cell{background-color:var(--color-white)}.theme-night .el-table--enable-row-hover .el-table__body tr:hover>td,.theme-night .el-table__row.hover-row,.theme-night .el-table__row.hover-row>td{background-color:#384456}body .el-input .el-input__inner,body .el-textarea .el-textarea__inner{border:1px solid var(--color-DCDFE6);background-color:var(--color-white);color:var(--color-606266)}.el-dialog{border-radius:4px;display:flex;flex-direction:column;max-height:100%;position:absolute;top:50%;left:50%;width:450px;max-width:calc(100vw - 20px);margin:0!important;transform:translate(-50%,-50%)}.el-dialog .el-dialog__title{color:var(--color-black)}.el-dialog .el-dialog__body{color:var(--color-606266)}body .el-dialog,body .el-pager li{background-color:var(--color-white);color:var(--color-black)}body .el-popover{border:1px solid var(--color-EBEEF5);background-color:var(--color-white);color:var(--color-606266)}body .el-popover .popper__arrow{border-bottom-color:var(--color-EBEEF5)}body .el-popover .popper__arrow:after{border-bottom-color:var(--color-white)}body .el-popper[x-placement^=bottom] .popper__arrow{border-bottom-color:var(--color-EBEEF5)}body .el-popper[x-placement^=bottom] .popper__arrow:after{border-bottom-color:var(--color-white)}body .el-slider .el-slider__runway{background-color:var(--color-E4E7ED)}body .el-slider .el-slider__runway .el-slider__button{border:2px solid var(--color-blue-500);background-color:var(--color-white)}body .el-button--primary.is-plain{color:var(--color-blue-500);background:var(--color-ECF5FF);border-color:var(--color-B3D8FF)}body .el-button--danger.is-plain{color:var(--color-red-500);background:var(--color-red-300);border-color:var(--color-red-300)}body .el-radio-button__inner{background:var(--color-white);border:1px solid var(--color-DCDFE6);color:var(--color-606266)}body .el-radio-button:first-child .el-radio-button__inner{border-left:1px solid var(--color-DCDFE6)}body .el-radio-button{outline:none}body .el-radio__inner{border:1px solid var(--color-DCDFE6);background-color:var(--color-white);outline:none}body .el-radio{outline:none}body .el-form-item__label,body .el-radio{color:var(--color-606266)}.theme-night .el-loading-mask{background-color:rgba(37,38,44,.9)}body .el-checkbox{color:var(--color-606266)}body .el-checkbox .el-checkbox__inner{border:1px solid var(--color-DCDFE6);background-color:var(--color-white)}body .el-checkbox.small .el-checkbox__inner{width:12px;height:12px}body .el-checkbox.small .el-checkbox__label{font-weight:400;font-size:12px;line-height:14px;margin-left:5px;padding-left:0}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.el-loading-spinner svg{margin:auto}body{background-color:var(--color-bg);color:var(--color-black)}body button:focus{outline:none}',""]),e.exports=r},502:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return d})),o.d(t,"mutations",(function(){return S})),o.d(t,"actions",(function(){return D})),o.d(t,"getters",(function(){return C}));o(106),o(503),o(129),o(446),o(48),o(86),o(127),o(152),o(158),o(126);var r=o(39),n=o(170),c=o.n(n),l=o(50),T=c.a.AES.encrypt,d=function(){return{account:null,accountList:null,markets:l.c,currentMarket:"BTC-USDT",usdRate:null,legal:"CNY",topMarkets:["CETUSDT","BTCUSDT","ETHUSDT","BCHUSDT","LTCUSDT","BSVUSDT","DOGEUSDT","XRPUSDT"],theme:"day"}},S={SET_ACCOUNT:function(e,data){e.account=data},SET_ACCOUNT_LIST:function(e,data){e.accountList=data,localStorage.setItem("ACCOUNT_INFO",JSON.stringify(data))},SET_CURRENT_MARKET:function(e,data){e.currentMarket=data,localStorage.setItem("CURRENT_MARKET",data)},SET_USDRATE:function(e,data){e.usdRate=data},SET_TOP_MAEKETS:function(e,data){e.topMarkets=data},SET_THEME:function(e,data){e.theme="day"===data?"day":"night",localStorage.setItem("CURRENT_THEME",e.theme);var t=document.documentElement.classList;"night"===e.theme?t.add("theme-night"):t.remove("theme-night")}},D={addAccount:function(e,t){var o=e.commit,r=(e.rootState.accountList||[]).concat(),n=r.findIndex((function(e){return e.access_id===t.access_id}));n>=0&&r.splice(n,1),t.secret_key&&(t.token=T(t.access_id+l.f+t.secret_key,l.e).toString(),delete t.secret_key),r.push(t),o("SET_ACCOUNT",t),o("SET_ACCOUNT_LIST",r)},updateUsdRate:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.commit,o.next=3,t.$axios.get("https://www.samyoc.com/yoc/coinexapi/usd/exchange/rate");case 3:0===(n=o.sent).data.code&&r("SET_USDRATE",n.data.data);case 5:case"end":return o.stop()}}),o)})))()}},C={stateMarkets:function(e){var t=(e.topMarkets||[]).concat(),o=(e.currentMarket||"").replace("-","");return t.includes(o)||t.push(o),t},legalSymbol:function(e){return"CNY"===e.legal?"￥":"$"}}},508:function(e,t){},510:function(e,t){},521:function(e,t){},523:function(e,t){},548:function(e,t){},550:function(e,t){},551:function(e,t){},556:function(e,t){},558:function(e,t){},577:function(e,t){},589:function(e,t){},592:function(e,t){},618:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return d})),o.d(t,"mutations",(function(){return S})),o.d(t,"actions",(function(){return D})),o.d(t,"getters",(function(){return C}));o(131),o(107);var r=o(61),n=o(7),c=o(50);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=function(){return{asset:{CET:{},BTC:{},ETH:{},USDT:{},XRP:{},DOT:{},ADA:{},LINK:{},LTC:{},BNB:{},USDC:{},DAI:{},BCH:{},TUSD:{},BSV:{},XLM:{}}}},S={SET_ASSET:function(e,data){e.asset=data},UPDATE_ASSET:function(e,data){if(data){var t=e.asset||{};for(var o in data)n.default.set(t,o,data[o])}}},D={queryAsset:function(e){var t=e.commit;this.$socket.commit({method:"asset.query",params:[]},(function(data){data.error||t("SET_ASSET",data.result)}))}},C={assetList:function(e){var t=[],o={};return c.d.forEach((function(r){o[r]=!0,t.push(T({name:r},e.asset[r]))})),Object.keys(e.asset||{}).forEach((function(r){o[r]||t.push(T({name:r},e.asset[r]))})),t}}},619:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return r})),o.d(t,"mutations",(function(){return n})),o.d(t,"actions",(function(){return c})),o.d(t,"getters",(function(){return l}));o(620);var r=function(){return{langOptions:[{val:"en_US",text:"English"},{val:"zh_Hans_CN",text:"简体中文"},{val:"zh_Hant_HK",text:"繁体中文"}],lang:"",defaultLang:"zh_Hans_CN"}},n={SET_LANG:function(e,t){e.lang=t,this.$cookies.set("lang",t,{path:"/",maxAge:2592e3}),this.$axios.setHeader("Accept-Language",t)}},c={setLang:function(e,t){(0,e.commit)("SET_LANG",t)}},l={availableLocales:function(e){return e.langOptions},currentLang:function(e){return e.langOptions.find((function(t){return t.val===e.lang}))||{}}}}},[[448,23,3,24]]]);