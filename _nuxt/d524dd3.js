(window.webpackJsonp=window.webpackJsonp||[]).push([[25,13,21],{721:function(t,e,r){"use strict";r.r(e);var n=r(63),o=r(154);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:l(l({},Object(o.c)(["marketConfig"])),{},{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""},curMarketConfig:function(){return this.marketConfig&&this.marketConfig[this.marketStr]}}),watch:{market:function(t){this.marketInfo=t}}}},723:function(t,e,r){var content=r(734);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(129).default)("20177719",content,!0,{sourceMap:!1})},725:function(t,e,r){"use strict";r.r(e);r(452),r(324),r(86),r(234),r(109),r(132);var n=r(721),o=r(732),c="#F9293E",l="#00aa3b",h={mixins:[n.default],data:function(){return{klineArr:[],marketState:{},isLoading:!0}},watch:{marketStr:function(t){t&&this.queryOrder()}},mounted:function(){var t=this;this.$socket.on("state.update",(function(e){e.params&&e.params[0]&&e.params[0][t.marketStr]&&(t.marketState=e.params[0][t.marketStr]||{})}))},methods:{queryOrder:function(){var t=this,e=new Date;this.isLoading=!0;var r=parseInt(e.getTime()/1e3)-(60*e.getHours()*60+60*e.getMinutes()+e.getSeconds()),n=parseInt(e.getTime()/1e3);this.$socket.commit({method:"kline.query",params:[this.marketStr,r,n,60]},(function(data){data.error||(t.klineArr=data.result||{}),t.isLoading=!1,t.initChart()}))},beginInitChart:function(){var t=this;clearInterval(this.initInter),this.initInter=setInterval((function(){!t.isLoading&&t.marketState.open&&t.curMarketConfig&&(clearInterval(t.initInter),t.initChart())}),1e3)},generateData:function(){var t=this,e=[],r=[],n=[],o=[],c=0,l=0;this.klineArr.forEach((function(h){e.push(parseFloat(h[2])),n.push(parseFloat(h[5])),o.push(h[0].toTime("HH:mm")),l+=parseFloat(h[5]),c+=parseFloat(h[6]);var d=parseFloat((c/l).toFixed((t.curMarketConfig||{}).pricing_decimal||8));r.push(d)}));for(var h,d,f=this.klineArr.length>0?(h=o[o.length-1],60*(d=h.split(":"))[0]+parseInt(d[1])):0,m=function(t){return t<10?"0"+t:t},v=function(t){var e=parseInt(t/60),r=t-60*e;return m(e)+":"+m(r)},i=f+1;i<1440;i++)o.push(v(i));return{priceArr:e,avgPrice:r,vol:n,times:o}},initChart:function(){var t=this.generateData(),e=parseFloat(this.marketState.open);this.myChart=this.myChart||this.$Echarts.init(this.$refs.chart);var r=function(t,e){return((t-e)/e*100).toFixed(3)},n=this.$t("当前价"),o=this.$t("均价"),h=this.$t("涨幅"),d=this.$t("成交量"),option={tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:function(c){var l,i=c[0].dataIndex;l=t.priceArr[i]>e?'style="color:#ff4242"':'style="color:#26bf66"';var html='<div class="commColor" style="width:100px;"><div>'+n+" <span  "+l+" >"+t.priceArr[i]+"</span></div>";return html+="<div>"+o+" <span  "+l+" >"+t.avgPrice[i]+"</span></div>",html+="<div>"+h+" <span  "+l+" >"+r(t.priceArr[i],e)+"%</span></div>",html+="<div>"+d+" <span  "+l+" >"+t.vol[i].toFixed(2)+"</span></div></div>"}},legend:{icon:"rect",type:"scroll",itemWidth:14,itemHeight:2,left:0,top:"-1%",textStyle:{fontSize:12,color:"#0e99e2"},show:!1},axisPointer:{show:!0},color:["#39afe6","#da6ee8"],grid:[{id:"gd1",left:"1%",right:"1%",height:"67.5%",top:"5%"},{id:"gd2",left:"1%",right:"1%",height:"67.5%",top:"5%"},{id:"gd3",left:"1%",right:"1%",top:"75%",height:"19%"}],xAxis:[{gridIndex:0,data:t.times,axisLabel:{show:!1},splitLine:{show:!1},axisTick:{show:!1}},{show:!1,gridIndex:1,data:t.times,axisLabel:{show:!1},splitLine:{show:!1}},{splitNumber:2,type:"category",gridIndex:2,data:t.times,axisLabel:{color:"#9b9da9",fontSize:10}}],yAxis:[{gridIndex:0,scale:!0,splitNumber:3,axisLabel:{inside:!0,fontWeight:"bold",color:function(t){return t===e?"#aaa":t>e?c:l}},z:4,splitLine:{show:!1,lineStyle:{color:"#181a23"}}},{scale:!0,gridIndex:1,splitNumber:3,position:"right",z:4,axisLabel:{color:function(t){return t===e?"#aaa":t>e?c:l},inside:!0,fontWeight:"bold",formatter:function(t){var n=r(t,e);return Number(n).toFixed(2)+" %"}},splitLine:{show:!1,lineStyle:{color:"#181a23"}},axisPointer:{show:!0,label:{formatter:function(t){return r(t.value,e)+"%"}}}},{gridIndex:2,z:4,splitNumber:3,axisLine:{onZero:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{color:"#c7c7c7",inside:!0,fontSize:8}}],dataZoom:[],backgroundColor:"#1f212d",blendMode:"source-over",series:[{hoverAnimation:!1,name:this.$t("当前价"),type:"line",data:t.priceArr,smooth:!0,symbol:"circle",lineStyle:{normal:{opacity:.8,color:"#39afe6",width:1}},areaStyle:{normal:{color:new this.$Echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 136, 212, 0.7)"},{offset:.8,color:"rgba(0, 136, 212, 0.02)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}}},{hoverAnimation:!1,name:this.$t("均价"),type:"line",data:t.avgPrice,smooth:!0,symbol:"circle",lineStyle:{normal:{opacity:.8,color:"#da6ee8",width:1}}},{hoverAnimation:!1,type:"line",data:t.priceArr,smooth:!0,symbol:"none",gridIndex:1,xAxisIndex:1,yAxisIndex:1,lineStyle:{normal:{width:0}}},{hoverAnimation:!1,name:"Volumn",type:"bar",gridIndex:2,xAxisIndex:2,yAxisIndex:2,data:t.vol,barWidth:"60%",itemStyle:{normal:{color:function(e){return t.priceArr[e.dataIndex]>t.priceArr[e.dataIndex-1]?c:l}}}}]};this.myChart.setOption(option)}}};h.methods?Object.assign(h.methods,{$t:function(t){if(!this.$lang&&!o.zh_Hans_CN)return t;var e=o[this.$lang]||o.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):h.methods={$t:function(t){if(!this.$lang&&!o.zh_Hans_CN)return t;var e=o[this.$lang]||o.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var d=h,f=(r(733),r(127)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"c-timeshare"},[r("div",{ref:"chart",staticClass:"chart-wrapper relative",staticStyle:{height:"300px",width:"274px"}})])}),[],!1,null,null,null);e.default=component.exports},732:function(t){t.exports=JSON.parse('{"en_US":{"均价":"均价","当前价":"当前价","成交量":"成交量","涨幅":"涨幅"},"zh_Hans_CN":{"均价":"均价","当前价":"当前价","成交量":"成交量","涨幅":"涨幅"},"zh_Hant_HK":{"<div>均价<_4f31@DEPRECATED@":"<div>均價 <span","<div>涨幅<_105d@DEPRECATED@":"<div>漲幅 <span","<divclas_8c6b@DEPRECATED@":"<div class=\\"commColor\\" style=\\"width:100px;\\"><div>當前價 <span","均价":"均價","当前价":"當前價","成交量":"成交量","涨幅":"漲幅"}}')},733:function(t,e,r){"use strict";r(723)},734:function(t,e,r){var n=r(128)(!1);n.push([t.i,"",""]),t.exports=n}}]);