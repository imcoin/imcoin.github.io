(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{741:function(t,e,r){"use strict";r.r(e);r(106),r(129),r(128),r(227),r(319),r(131),r(49),r(86),r(127),r(229),r(107),r(130),r(126);var n=r(38),c=r(61),o=r(151),l=r(715),d=r(729),f=r(781);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{MarketSelector:d.default},mixins:[l.default],props:{canSwitchMarket:{type:Boolean,default:!0}},data:function(){return{endTime:0,beginTime:0,dateDict:{},buyCount:0,sellCount:0,feeEndTime:0,feeBeginTime:0,cetDateFee:{},limit:100,form:{currentPrice:"",feeType:"data"},isLoading:!1,feeMarket:"CETUSDT",netsType:"day"}},computed:_(_(_({},Object(o.c)(["account","legal","theme"])),Object(o.b)({legalSymbol:"legalSymbol"})),{},{sumDay:function(){return(this.endTime-this.beginTime)/24/60/60},feeDict:function(){var t=this,e={};return this.dateDict&&Object.keys(this.dateDict).forEach((function(r){Object.keys(t.dateDict[r].feeDict).forEach((function(n){e[n]=e[n]||0,e[n]+=parseFloat(t.dateDict[r].feeDict[n])}))})),e},feeArr:function(){var t=this;return Object.keys(this.feeDict).map((function(e){return{name:e,amount:t.feeDict[e]}}))},total:function(){var t=this,e=0;return this.dateDict&&Object.keys(this.dateDict).forEach((function(r){e+=parseFloat(t.dateDict[r].profit)})),e},cost:function(){var t=this,e=0;return this.dateDict&&Object.keys(this.cetDateFee).forEach((function(r){e+=parseFloat(t.cetDateFee[r])})),this.$toToken(e,"USDT",this.marketInfo.currency)},totalLegal:function(){return this.$toLegal(this.total,this.marketInfo.currency)},feeLegal:function(){var t=this;if("cet"===this.form.feeType)return this.$toLegal(this.cost,this.marketInfo.currency);var e=0;return this.feeArr.forEach((function(r){e+=parseFloat(t.$toLegal(r.amount,r.name))})),e},netProfit:function(){return"cet"===this.form.feeType?this.total-this.cost:this.total-this.$toToken(this.feeLegal,this.legal,this.marketInfo.currency)},netProfitLegal:function(){return this.$toLegal(this.netProfit,this.marketInfo.currency)},dayNetProfits:function(){var t=this,e={},r=function(r){e[r]=e[r]||0,e[r]+=parseFloat(t.dateDict[r].profit),"cet"===t.form.feeType?t.cetDateFee&&t.cetDateFee[r]&&(e[r]-=parseFloat(t.$toToken(t.cetDateFee[r],"USDT",t.marketInfo.currency))):Object.keys(t.dateDict[r].feeDict).forEach((function(n){e[r]-=parseFloat(t.$toToken(t.dateDict[r].feeDict[n],n,t.marketInfo.currency))}))};for(var n in this.dateDict)r(n);return Object.keys(e).map((function(t){return{date:t,amount:e[t]}})).sort((function(a,b){return new Date(b.date).getTime()-new Date(a.date).getTime()}))},netProfits:function(){var t=[];if(this.dayNetProfits.length>0){for(var e=new Date(this.dayNetProfits[0].date).getTime(),i=new Date(this.dayNetProfits[this.dayNetProfits.length-1].date).getTime();i<e;i+=864e5){var r=(i/1e3).toString().toTime("yyyy-MM-dd");this.dateDict[r]||t.push({date:r,amount:0})}t=t.concat(this.dayNetProfits).sort((function(a,b){return new Date(b.date).getTime()-new Date(a.date).getTime()}))}if("day"===this.netsType)return t;if("month"===this.netsType){var n={};return t.forEach((function(t){var e=t.date.split("-"),r=e[0]+"-"+e[1];n[r]=n[r]||0,n[r]+=parseFloat(t.amount)})),Object.keys(n).map((function(t){return{date:t,amount:n[t]}}))}var c={};return t.forEach((function(t){var e=t.date.split("-")[0];c[e]=c[e]||0,c[e]+=parseFloat(t.amount)})),Object.keys(c).map((function(t){return{date:t,amount:c[t]}}))}}),watch:{marketStr:function(){this.clear(),this.retrieveMarketData(),this.retrieveFeeData()},"form.currentPrice":function(t){window.localStorage["STA_PRICE_".concat(this.marketStr)]=t},account:function(){this.clear(),this.retrieveMarketData(),this.retrieveFeeData()},netProfits:function(){this.initChartSafe()},"form.feeType":function(t){localStorage.ST_FEE_TYPE=t}},mounted:function(){var t=this;this.retrieveMarketData(),this.retrieveFeeData(),this.ckClient=setInterval((function(){t.$refs.chart&&t.$refs.chart.clientWidth>0&&(clearInterval(t.ckClient),t.initChartSafe())}),1e3),this.form.feeType=["data","cet"].includes(localStorage.ST_FEE_TYPE)?localStorage.ST_FEE_TYPE:"data"},methods:{initChartSafe:function(){var t=this;this.$refs.chart&&this.$refs.chart.clientWidth>0&&(clearTimeout(this.initChartTime),this.initChartTime=setTimeout((function(){t.initChart()}),1e3))},selectMarket:function(t){this.marketInfo=t,this.$router.push("/statistics?market=".concat(this.marketInfo.dest,"-").concat(this.marketInfo.currency))},calcWin:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,i,o,l,d,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.account){r.next=2;break}return r.abrupt("return");case 2:return e.isLoading=!0,r.prev=3,r.next=6,e.$axios.get(e.$url("/v1/order/user/deals"),e.$signGet({access_id:e.account.access_id,market:e.marketStr,page:t,limit:e.limit,tonce:(new Date).getTime()}));case 6:if(0!==(n=r.sent).data.code){r.next=31;break}c=!1,n.data.data.data.length>0&&!e.endTime&&!e.beginTime&&(e.endTime=e.beginTime=n.data.data.data[0].create_time),i=0;case 11:if(!(i<n.data.data.data.length)){r.next=22;break}if((o=n.data.data.data[i]).create_time>e.endTime&&(e.endTime=o.create_time),o.create_time<e.beginTime&&(e.beginTime=o.create_time),!(e.marketDataSaved&&e.marketDataSaved.endTime>=o.create_time)){r.next=18;break}return c=!0,r.abrupt("break",22);case 18:c||(l=o.create_time.toString().toTime("yyyy-MM-dd"),e.dateDict[l]=e.dateDict[l]||{profit:0,feeDict:{}},d=1,"buy"===o.type?e.buyCount++:(e.sellCount++,d=-1),f=(parseFloat(o.amount)*parseFloat(e.form.currentPrice)-parseFloat(o.deal_money))*d,e.dateDict[l].profit+=f,e.dateDict[l].feeDict[o.fee_asset]=e.dateDict[l].feeDict[o.fee_asset]||0,e.dateDict[l].feeDict[o.fee_asset]+=parseFloat(o.fee),e.dateDict=_({},e.dateDict));case 19:i++,r.next=11;break;case 22:if(n.data.data.has_next&&!c){r.next=27;break}e.saveMarketData(),"cet"===e.form.feeType?e.calcFee(1):e.isLoading=!1,r.next=29;break;case 27:return r.next=29,e.calcWin(t+1);case 29:r.next=33;break;case 31:e.isLoading=!1,e.$message.error(n.data.message);case 33:r.next=39;break;case 35:r.prev=35,r.t0=r.catch(3),e.isLoading=!1,e.$message.error(r.t0.message);case 39:case"end":return r.stop()}}),r,null,[[3,35]])})))()},calcFee:function(){var t=arguments,e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,o,i,l,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,r.prev=1,r.next=4,e.$axios.get(e.$url("/v1/order/user/deals"),e.$signGet({access_id:e.account.access_id,market:e.feeMarket,page:n,limit:e.limit,tonce:(new Date).getTime()}));case 4:if(0!==(c=r.sent).data.code){r.next=29;break}o=!1,i=0;case 8:if(!(i<c.data.data.data.length)){r.next=20;break}if(l=c.data.data.data[i],c.data.data.data.length>0&&!e.feeEndTime&&!e.feeBeginTime&&(e.feeEndTime=e.feeBeginTime=c.data.data.data[0].create_time),l.create_time>e.feeEndTime&&(e.feeEndTime=l.create_time),l.create_time<e.feeBeginTime&&(e.feeBeginTime=l.create_time),!(e.feeDataSaved&&e.feeDataSaved.endTime>=l.create_time)){r.next=16;break}return o=!0,r.abrupt("break",20);case 16:o||(d=l.create_time.toString().toTime("yyyy-MM-dd"),e.cetDateFee[d]=e.cetDateFee[d]||0,e.cetDateFee[d]+=parseFloat(l.deal_money),e.cetDateFee=_({},e.cetDateFee));case 17:i++,r.next=8;break;case 20:if(c.data.data.has_next&&!o){r.next=25;break}e.isLoading=!1,e.saveFeeData(),r.next=27;break;case 25:return r.next=27,e.calcFee(n+1);case 27:r.next=31;break;case 29:e.isLoading=!1,e.$message.error(c.data.message);case 31:r.next=37;break;case 33:r.prev=33,r.t0=r.catch(1),e.isLoading=!1,e.$message.error(r.t0.message);case 37:case"end":return r.stop()}}),r,null,[[1,33]])})))()},saveMarketData:function(){this.marketDataSaved={beginTime:this.beginTime,endTime:this.endTime,dateDict:this.dateDict,buyCount:this.buyCount,sellCount:this.sellCount},localStorage.setItem("STA_"+this.marketStr+"_"+this.account.access_id,JSON.stringify(this.marketDataSaved))},saveFeeData:function(){this.feeDataSaved={beginTime:this.feeBeginTime,endTime:this.feeEndTime,cetDateFee:this.cetDateFee},localStorage.setItem("STA_FEE_"+this.feeMarket+"_"+this.account.access_id,JSON.stringify(this.feeDataSaved))},retrieveMarketData:function(){if(this.account){var t="STA_"+this.marketStr+"_"+this.account.access_id,data=localStorage.getItem(t);if(this.form.currentPrice=window.localStorage["STA_PRICE_".concat(this.marketStr)]||"",data)try{var e=JSON.parse(data);this.beginTime=e.beginTime,this.endTime=e.endTime,this.dateDict=e.dateDict,this.buyCount=e.buyCount,this.sellCount=e.sellCount,this.marketDataSaved=e}catch(t){}}},retrieveFeeData:function(){if(this.account){var t="STA_FEE_"+this.feeMarket+"_"+this.account.access_id,data=localStorage.getItem(t);if(data)try{var e=JSON.parse(data);this.feeBeginTime=e.beginTime,this.feeEndTime=e.endTime,this.cetDateFee=e.cetDateFee,this.feeDataSaved=e}catch(t){}}},clear:function(){this.marketDataSaved=null,this.beginTime=0,this.endTime=0,this.dateDict={},this.buyCount=0,this.sellCount=0,this.feeDataSaved=null,this.feeBeginTime=0,this.feeEndTime=0,this.cetDateFee={}},initChart:function(){var t=this;this.myChart=this.myChart||this.$Echarts.init(this.$refs.chart);var e=[],r=[];this.netProfits.concat().reverse().forEach((function(t){e.push(t.date),r.push(parseFloat(t.amount))}));var n="day"===this.theme?"#F4F5F9":"#474e6e",c=(this.theme,"#3B82F6"),o="day"===this.theme?"rgba(50,50,50,0.7)":"rgba(41, 42, 48, 0.7)",l="day"===this.theme?"#333":"rgba(41, 42, 48, 0.7)",option={grid:{left:"30px",top:"10px",right:"30px",bottom:"30px"},tooltip:{borderColor:l,backgroundColor:o,trigger:"axis",formatter:function(e,r,n){n(r,'\n              <div style="backround-color: '.concat(o,"; border-color: ").concat(l,'">\n                <p class="text-black">').concat(e[0].axisValue,'</p>\n                <p class="text-gray-700">').concat(parseFloat(e[0].data).toFixed(4)," ").concat(t.marketInfo.currency,"</p>\n                <p>≈ ").concat(t.$toLegal(parseFloat(e[0].data),t.marketInfo.currency)).concat(t.legal,"</p>\n              </div"))}},legend:{show:!1},xAxis:{type:"category",data:e,axisLine:{lineStyle:{color:n}},axisTick:{show:!1},axisLabel:{color:"#C1C1D6"}},yAxis:{type:"value",axisLine:{lineStyle:{color:n}},axisLabel:{color:"#C1C1D6"},splitLine:{lineStyle:{color:n}}},series:[{name:"Win",data:r,type:"line",smooth:!0,lineStyle:{color:c},showSymbol:!1}]};this.myChart.setOption(option)}}};v.methods?Object.assign(v.methods,{$t:function(t){if(!this.$lang&&!f.zh_Hans_CN)return t;var e=f[this.$lang]||f.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):v.methods={$t:function(t){if(!this.$lang&&!f.zh_Hans_CN)return t;var e=f[this.$lang]||f.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var h=v,y=(r(782),r(123)),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-statistics p-20"},[t.canSwitchMarket?r("div",{staticClass:"flex"},[r("MarketSelector",{attrs:{market:t.marketInfo},on:{selectMarket:t.selectMarket}}),t._v(" "),r("div",{staticClass:"flex-1 text-right"},[r("nuxt-link",{attrs:{to:"/?market="+t.marketInfo.dest+"-"+t.marketInfo.currency}},[r("i",{staticClass:"iconfont icon-zhuanfa text-blue-500"})])],1)],1):t._e(),t._v(" "),r("div",{staticClass:"border-b border-dashed border-gray-300 pb-20 mt-20"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",size:"mini","label-position":"left"}},[r("el-form-item",{attrs:{label:t.$t("当前价格")}},[r("el-input",{model:{value:t.form.currentPrice,callback:function(e){t.$set(t.form,"currentPrice",e)},expression:"form.currentPrice"}})],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("手续费")}},[r("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.feeType,callback:function(e){t.$set(t.form,"feeType",e)},expression:"form.feeType"}},[r("el-radio",{attrs:{label:"data"}},[t._v(t._s(t.$t("交易数据")))]),t._v(" "),r("el-radio",{attrs:{label:"cet"}},[t._v(t._s(t.$t("CET历史成交")))])],1)],1),t._v(" "),r("div",{staticClass:"text-center flex"},[r("el-button",{staticClass:"flex-1",attrs:{loading:t.isLoading,type:"primary",plain:"",size:"small"},on:{click:function(e){return t.calcWin(1)}}},[t._v(t._s(t.$t("统计盈亏")))]),t._v(" "),r("el-button",{staticClass:"flex-1 ml-20",attrs:{type:"danger",plain:"",size:"small"},on:{click:t.clear}},[t._v(t._s(t.$t("清除")))])],1)],1)],1),t._v(" "),r("table",{staticClass:"w-full mt-20"},[r("tbody",[r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("开始时间")))]),t._v(" "),r("td",{staticClass:"value text-gray-800"},[t._v("\n          "+t._s(t.beginTime.toString().toTime())+"\n        ")])]),t._v(" "),r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("结束时间")))]),t._v(" "),r("td",{staticClass:"value text-gray-800"},[t._v(t._s(t.endTime.toString().toTime()))])]),t._v(" "),r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("累计")))]),t._v(" "),r("td",{staticClass:"value text-gray-800"},[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.sumDay.toFixed(2)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.$t("天")))])])]),t._v(" "),r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("成交")))]),t._v(" "),r("td",{staticClass:"value"},[r("div",[r("span",[t._v(t._s(t.$t("累计成交")))]),t._v(" "),r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.buyCount+t.sellCount))]),t._v(" "),r("span",[t._v(t._s(t.$t("笔")))])]),t._v(" "),r("div",[r("span",[t._v(t._s(t.$t("买")))]),t._v(" "),r("span",{staticClass:"text-green-500 text-18"},[t._v(t._s(t.buyCount))]),t._v(" "),r("span",[t._v(t._s(t.$t("笔")))]),t._v(",\n\n            "),r("span",{staticClass:"ml-5"},[t._v(t._s(t.$t("卖")))]),t._v(" "),r("span",{staticClass:"text-red-500 text-18"},[t._v(t._s(t.sellCount))]),t._v(" "),r("span",[t._v(t._s(t.$t("笔")))])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label"},[t._v(t._s(t.$t("盈利")))]),t._v(" "),r("td",{staticClass:"value"},[r("p",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.total.toFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",[t._v("\n            ≈ "+t._s(t.totalLegal)+"\n            "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legalSymbol))])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label pb-10"},[t._v(t._s(t.$t("手续费")))]),t._v(" "),r("td",{staticClass:"value pb-10"},["cet"===t.form.feeType?r("span",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.cost.toBFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]):t._e(),t._v(" "),"data"===t.form.feeType?r("div",[0==t.feeArr.length?r("span",[t._v("--")]):t._e(),t._v(" "),t._l(t.feeArr,(function(e,n){return r("div",{key:n},[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(e.amount.toString().toBFixed()))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(e.name))])])}))],2):t._e(),t._v(" "),r("p",[t._v("\n            ≈ "+t._s(t.feeLegal)+"\n            "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])]),t._v(" "),r("tr",{staticClass:"border-gray-300 border-t border-dashed"},[r("td",{staticClass:"label pt-10"},[t._v(t._s(t.$t("净利润")))]),t._v(" "),r("td",{staticClass:"value pt-10"},[r("p",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.netProfit.toString().toBFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",[t._v("\n            ≈\n            "),r("span",{staticClass:"text-gray-800"},[t._v(t._s(t.netProfitLegal.toBFixed(2)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label pt-10"},[t._v(t._s(t.$t("每月")))]),t._v(" "),r("td",{staticClass:"value pt-10"},[r("p",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s((t.netProfit.toString()||"0").div(t.sumDay||1).mul(30).toBFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",[t._v("\n            ≈\n            "),r("span",{staticClass:"text-gray-800"},[t._v(t._s(t.netProfitLegal.div(t.sumDay||1).mul(30).toBFixed(2)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])]),t._v(" "),r("tr",[r("td",{staticClass:"label pt-10"},[t._v(t._s(t.$t("每日")))]),t._v(" "),r("td",{staticClass:"value pt-10"},[r("p",[r("span",{staticClass:"font-w500 text-18 text-gray-800"},[t._v(t._s(t.netProfit.toString().div(t.sumDay||1).toBFixed(8)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",[t._v("\n            ≈\n            "),r("span",{staticClass:"text-gray-800"},[t._v(t._s(t.netProfitLegal.div(t.sumDay||1).toBFixed(2)))]),t._v(" "),r("span",{staticClass:"text-gray-500 text-14"},[t._v(t._s(t.legal))])])])])])]),t._v(" "),r("div",{staticClass:"flex justify-between mt-20"},[r("el-radio-group",{attrs:{size:"mini"},model:{value:t.netsType,callback:function(e){t.netsType=e},expression:"netsType"}},[r("el-radio-button",{attrs:{label:"day"}},[t._v(t._s(t.$t("日")))]),t._v(" "),r("el-radio-button",{attrs:{label:"month"}},[t._v(t._s(t.$t("月")))]),t._v(" "),r("el-radio-button",{attrs:{label:"year"}},[t._v(t._s(t.$t("年")))])],1),t._v(" "),r("el-button",{attrs:{loading:t.isLoading,type:"primary",plain:"",size:"small"},on:{click:function(e){return t.calcWin(1)}}},[t._v(t._s(t.$t("刷新")))])],1),t._v(" "),r("div",{ref:"chart",staticClass:"chart-wrapper mt-20 relative",staticStyle:{height:"300px"}}),t._v(" "),r("div",{staticClass:"flex flex-wrap mt-20 pt-20 border-t border-dashed border-gray-300 max-h-300 overflow-auto"},t._l(t.netProfits,(function(e,i){return r("div",{key:i,staticClass:"bg-white whitespace-nowrap text-12 xs:w-1/3 text-center",class:{"w-1/8":"day"===t.netsType,"w-1/75":"month"===t.netsType,"w-1/7":"year"===t.netsType}},[r("div",{staticClass:"p-5 m-5 rounded-4 shadow netitem",class:{"bg-gray-300":0==="0".cmp(e.amount),"bg-red-300":"0".cmp(e.amount)>0}},[r("p",{staticClass:"text-gray-500"},[t._v("\n          "+t._s(e.date)),"year"===t.netsType?r("span",[t._v(t._s(t.$t("年")))]):t._e()]),t._v(" "),r("p",{staticClass:"transform xs:scale-90"},[r("span",{staticClass:"text-14 font-w500",class:{"text-red-500":"40".cmp(e.amount)<=0,"text-yellow-700":"30".cmp(e.amount)<=0&&"40".cmp(e.amount)>0,"text-yellow-500":"20".cmp(e.amount)<=0&&"30".cmp(e.amount)>0,"text-blue-500":"10".cmp(e.amount)<=0&&"20".cmp(e.amount)>0}},[t._v(t._s(e.amount.toBFixed(4)))]),t._v(" "),r("span",{staticClass:"text-gray-600 transform xs:scale-75 xs:inline-block unit"},[t._v(t._s(t.marketInfo.currency))])]),t._v(" "),r("p",{staticClass:"text-12"},[t._v("\n          ≈ "+t._s(t.legalSymbol)+t._s(t._f("$toLegal")(e.amount,t.marketInfo.currency))+"\n        ")])])])})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MarketSelector:r(729).default})},773:function(t,e,r){var content=r(783);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(125).default)("b5713582",content,!0,{sourceMap:!1})},781:function(t){t.exports=JSON.parse('{"en_US":{"CET历史成交":"CET历史成交","买":"Buy","交易数据":"交易数据","净利润":"净利润","刷新":"Refresh","卖":"Sell","天":"day(s)","年":"年","开始时间":"Start Time","当前价格":"当前价格","成交":"Executions","手续费":"Tx Fee","日":"日","月":"月","每日":"Everyday","每月":"每月","清除":"Clear","盈利":"盈利","笔":"（建议不用翻译）","累计":"Total","累计成交":"累计成交","结束时间":"End Time","统计盈亏":"统计盈亏"},"zh_Hans_CN":{"CET历史成交":"CET历史成交","买":"买","交易数据":"交易数据","净利润":"净利润","刷新":"刷新","卖":"卖","天":"天","年":"年","开始时间":"开始时间","当前价格":"当前价格","成交":"成交","手续费":"手续费","日":"日","月":"月","每日":"每日","每月":"每月","清除":"清除","盈利":"盈利","笔":"笔","累计":"累计","累计成交":"累计成交","结束时间":"结束时间","统计盈亏":"统计盈亏"},"zh_Hant_HK":{"CET历史成交":"CET歷史成交","买":"買","交易数据":"交易數據","净利润":"凈利潤","刷新":"刷新","卖":"賣","天":"天","年":"年","开始时间":"開始時間","当前价格":"當前價格","成交":"成交","手续费":"手續費","日":"日","月":"月","每日":"每日","每月":"每月","清除":"清除","盈利":"盈利","笔":"筆","累计":"累計","累计成交":"累計成交","结束时间":"結束時間","统计盈亏":"統計盈虧"}}')},782:function(t,e,r){"use strict";r(773)},783:function(t,e,r){var n=r(124)(!1);n.push([t.i,".c-statistics .label,.c-statistics .value{vertical-align:top;padding-top:5px;padding-bottom:5px}.c-statistics .label{color:var(--color-gray-500)}.c-statistics .value{color:var(--color-gray-600);text-align:right}.c-statistics .w-1\\/8{width:12.5%}.c-statistics .w-1\\/75{width:13.33%}.c-statistics .w-1\\/7{width:14.28%}@media (max-width:767px){.c-statistics .netitem{padding:3px!important;margin:3px!important}.c-statistics .netitem .unit{margin-left:-3px!important}}",""]),t.exports=n}}]);