(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,7,8,13,14],{369:function(t,e,n){"use strict";n.r(e),e.default={props:{market:{type:Object,default:function(){}}},data:function(){return{marketInfo:this.market}},computed:{marketStr:function(){return this.marketInfo&&this.marketInfo.dest&&this.marketInfo.currency?(this.marketInfo.dest+this.marketInfo.currency).toUpperCase():""}},watch:{market:function(t){this.marketInfo=t}}}},370:function(t,e,n){"use strict";n.r(e);n(93);var c={BTC:"https://file.coinex.com/2018-07-14/333CC02C095C49E29863F6B6D49E022D.png",USDT:"https://file.coinex.com/2018-07-17/A7AC5747219B40B49487F7AE723C8B63.png",USDC:"https://file.coinex.com/2018-10-11/3EF6B52D65F64B9284202DCC709336F3.png",DAI:"https://file.coinex.com/2020-03-17/78C03C4ACE214454955A36E848B6CC6F.png",CET:"https://file.coinex.com/2018-07-24/CFE4EAD0CC324280AF9972B194A40FE1.png",BCH:"https://file.coinex.com/2020-11-20/7F1C412915FC1FC9853E7E66497E3158.png",TUSD:"https://file.coinex.com/2019-03-05/89EBB7EFFF0F4D78AD4BACDA9AD7CCD4.png",ETH:"https://file.coinex.com/2018-07-24/6F74A9D735814E1A8AE81163E051B15E.png",ETC:"https://file.coinex.com/2018-07-24/FBB037600CB340E18208974F42348D51.png",EOS:"https://file.coinex.com/2018-07-23/BABBA667D02E4B639D1AA3FD0D074A12.png",XRP:"https://file.coinex.com/2018-07-22/89C65460F5D34029A11615D4EA55E5DA.png",BSV:"https://file.coinex.com/2019-03-01/FA6BE26B32C247839B2DE1D9A2EAB232.png",LTC:"https://file.coinex.com/2019-02-14/996138392B60400884FE3F1EB2F7C3E5.png",ONES:"https://file.coinex.com/2020-09-17/7F9A2D7E47429647FE4FF3ACB297584F.png",USDH:"https://file.coinex.com/2019-06-11/C0709BC1B77446409EFE0A843EAB1DB7.png",DOT:"https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",ADA:"https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",LINK:"https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",BNB:"https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",XLM:"https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",UNI:"https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",DOGE:"https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",TRX:"https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",HT:"https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png"},o={props:{url:{type:String,default:""},name:{type:String,default:""}},data:function(){return{src:this.url,loaded:!1,title:this.name,srcSource:c}},computed:{finnalSrc:function(){return this.src||c[this.title]||""}},watch:{name:function(t){this.title=t},url:function(t){this.src=t},finnalSrc:function(t){this.loadImg(t)}},mounted:function(){this.loadImg(this.finnalSrc)},methods:{loadImg:function(t){var e=this,img=new Image;img.onload=function(){e.loaded=!0},img.src=t}}},r=n(37),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center overflow-hidden inline-block text-center",class:{"bg-gray-400 shadow-sm rounded-full":!t.loaded}},[t.loaded?n("img",{staticClass:"w-full h-full",attrs:{src:t.finnalSrc}}):n("p",{staticClass:"text-white text-center w-full"},[t._v(t._s(t.title[0]))])])}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("00a69679",content,!0,{sourceMap:!1})},372:function(t,e,n){var content=n(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("cef2a08e",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";n.r(e);n(39);var c=n(10),o=n(53),r=n(370),l=n(369),f=n(94),m=n(381);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{Logo:r.default},mixins:[l.default],data:function(){return{}},computed:h(h({},Object(o.b)({assetList:"asset/assetList"})),{},{assetListData:function(){return(this.assetList||[]).map((function(t){return h(h({},t),{},{total:Object(f.a)(t.available)+Object(f.a)(t.frozen)})}))}}),mounted:function(){var t=this;this.$socket.on("asset.update",(function(e){e.params&&e.params[0]&&t.$store.commit("asset/UPDATE_ASSET",e.params[0])}))}};_.methods?Object.assign(_.methods,{$t:function(t){if(!this.$lang&&!m.zh_Hans_CN)return t;var e=m[this.$lang]||m.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):_.methods={$t:function(t){if(!this.$lang&&!m.zh_Hans_CN)return t;var e=m[this.$lang]||m.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var v=_,x=(n(382),n(37)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-account bg-white p-20 flex flex-col py-10"},[n("el-table",{staticClass:"w-full h-full",attrs:{data:t.assetListData,height:"100%"}},[n("el-table-column",{attrs:{label:t.$t("币种")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex items-center"},[n("Logo",{key:e.row.name,staticClass:"h-25 w-25 min-w-25",attrs:{name:e.row.name}}),t._v(" "),n("p",{staticClass:"text-14 ml-5"},[t._v(t._s(e.row.name))])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("可用/冻结"),align:"right",sortable:"","sort-by":"total"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[n("p",{staticClass:"text-12"},[t._v(t._s(e.row.available||"0.000"))]),t._v(" "),n("p",{staticClass:"text-12"},[t._v(t._s(e.row.frozen||"0.000"))])])]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(370).default})},374:function(t,e,n){"use strict";n.r(e);n(28),n(225);var c=n(10),o=n(53),dialog=n(375),r=n(378);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={mixins:[dialog.default],data:function(){return{form:{access_id:"",secret_key:"",name:"",platform:"coinex"}}},computed:f(f({},Object(o.c)(["accountList","account"])),{},{rules:function(){return{access_id:[{required:!0,message:this.$t("请填写Acces_83b8"),trigger:"blur"}],secret_key:[{required:!0,message:this.$t("请填写Secre_ae2e"),trigger:"blur"}]}}}),methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.changeAccount(e.form)}))},changeAccount:function(t){t&&(this.$store.dispatch("addAccount",t),this.dialogVisible=!1,this.$refs.form.resetFields())},removeAccount:function(t){if(this.accountList){var e=this.accountList.concat();e.splice(t,1),this.$store.commit("SET_ACCOUNT_LIST",e)}}}};m.methods?Object.assign(m.methods,{$t:function(t){if(!this.$lang&&!r.zh_Hans_CN)return t;var e=r[this.$lang]||r.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):m.methods={$t:function(t){if(!this.$lang&&!r.zh_Hans_CN)return t;var e=r[this.$lang]||r.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var d=m,h=(n(379),n(37)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{staticClass:"c-login",attrs:{title:t.$t("账户"),visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"flex"},[t.accountList?n("div",{staticClass:"mr-20 border-gray-200 border-r pr-20"},t._l(t.accountList,(function(e,c){return n("div",{key:e.access_id,staticClass:"account-item flex",class:{active:t.account&&t.account.access_id===e.access_id}},[n("div",{staticClass:"flex items-center"},[n("i",{staticClass:"iconfont icon-xuanzhong text-blue-400 text-14"})]),t._v(" "),n("div",{staticClass:"flex-1 mx-10 cursor-pointer",on:{click:function(n){return t.changeAccount(e)}}},[e.name?n("p",[t._v(t._s(e.name))]):t._e(),t._v(" "),e.access_id?n("p",{staticClass:"text-12 text-gray-500"},[e.name?n("span"):t._e(),t._v(t._s(e.access_id.slicestr())),e.name?n("span"):t._e()]):t._e()]),t._v(" "),n("div",{staticClass:"flex items-center cursor-pointer",on:{click:function(e){return t.removeAccount(c)}}},[n("i",{staticClass:"iconfont icon-shanchu2-copy text-red-400 text-14"})])])})),0):t._e(),t._v(" "),n("el-form",{ref:"form",staticClass:"flex-1",attrs:{model:t.form,rules:t.rules}},[n("div",{staticClass:"mb-15"},[n("span",[t._v(t._s(t.$t("平台：")))]),t._v(" "),n("span",{staticClass:"ml-10"},[t._v("CoinEx")])]),t._v(" "),n("el-form-item",{attrs:{prop:"access_id"}},[n("el-input",{attrs:{placeholder:"Access ID"},model:{value:t.form.access_id,callback:function(e){t.$set(t.form,"access_id",e)},expression:"form.access_id"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"secret_key"}},[n("el-input",{attrs:{"show-password":"",placeholder:"Secret Key"},model:{value:t.form.secret_key,callback:function(e){t.$set(t.form,"secret_key",e)},expression:"form.secret_key"}})],1),t._v(" "),n("el-form-item",[n("el-input",{attrs:{placeholder:t.$t("昵称")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("div",{staticClass:"text-right"},[n("el-button",{staticClass:"w-full mt-20",attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v(t._s(t.$t("登录")))])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,n){"use strict";n.r(e),e.default={props:{visible:{type:Boolean,default:!1}},data:function(){return{dialogVisible:this.visible}},watch:{visible:function(){this.dialogVisible=this.visible},dialogVisible:function(t){t||this.closeDialog()}},methods:{closeDialog:function(){this.$emit("update:visible",!1)}}}},376:function(t,e,n){var content=n(388);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("20081313",content,!0,{sourceMap:!1})},378:function(t){t.exports=JSON.parse('{"en_US":{"平台：":"平台：","昵称":"昵称","登录":"登录","请填写Acces_83b8":"请填写 Access ID","请填写Secre_ae2e":"请填写 Secret Key","账户":"账户"},"zh_Hans_CN":{"平台：":"平台：","昵称":"昵称","登录":"登录","请填写Acces_83b8":"请填写 Access ID","请填写Secre_ae2e":"请填写 Secret Key","账户":"账户"},"zh_Hant_HK":{"平台：":"平台：","昵称":"昵稱","用户名@DEPRECATED@":"用戶名","登录":"登錄","请填写@DEPRECATED@":"請填寫","请填写Acces_83b8":"請填寫 Access ID","请填写Secre_ae2e":"請填寫 Secret Key","账户":"賬戶"}}')},379:function(t,e,n){"use strict";n(371)},380:function(t,e,n){var c=n(54)(!1);c.push([t.i,".c-login .account-item{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity));border-bottom-width:1px;margin-bottom:10px;padding-bottom:10px}.c-login .account-item:last-child{margin-bottom:0}.c-login .account-item .icon-xuanzhong{opacity:0}.c-login .account-item.active .icon-xuanzhong{opacity:1}",""]),t.exports=c},381:function(t){t.exports=JSON.parse('{"en_US":{"可用/冻结":"可用/冻结","币种":"币种"},"zh_Hans_CN":{"可用/冻结":"可用/冻结","币种":"币种"},"zh_Hant_HK":{"可用/冻结":"可用/凍結","币种":"幣種"}}')},382:function(t,e,n){"use strict";n(372)},383:function(t,e,n){var c=n(54)(!1);c.push([t.i,".c-account{height:100%}.c-account .el-table .cell{padding-left:0;padding-right:0}",""]),t.exports=c},384:function(t,e,n){"use strict";n.r(e);var c=n(10),o=n(53),r=n(374),l=n(373),f=n(386);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{Login:r.default,Account:l.default},data:function(){return{loginVisible:!1,isCollapse:!0,drawer:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["account","currentMarket"]))};d.methods?Object.assign(d.methods,{$t:function(t){if(!this.$lang&&!f.zh_Hans_CN)return t;var e=f[this.$lang]||f.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}}):d.methods={$t:function(t){if(!this.$lang&&!f.zh_Hans_CN)return t;var e=f[this.$lang]||f.zh_Hans_CN||{};return void 0===e[t]?t:e[t]}};var h=d,_=(n(387),n(37)),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-header"},[n("Login",{attrs:{visible:t.loginVisible},on:{"update:visible":function(e){t.loginVisible=e}}}),t._v(" "),n("div",{staticClass:"bg-white px-20 shadow-xl w-full"},[n("div",{staticClass:"h-50 flex items-center main-wrapper"},[t._e(),t._v(" "),n("img",{staticClass:"h-30",attrs:{src:"/images/logo.png"}}),t._v(" "),n("div",{staticClass:"flex-1"}),t._v(" "),t.account?n("div",[t.account.name?n("span",[t._v(t._s(t.account.name))]):t._e(),t._v(" "),t.account.access_id?n("span",{staticClass:"text-12 text-gray-500"},[t.account.name?n("span",[t._v("(")]):t._e(),t._v(t._s(t.account.access_id.slicestr())),t.account.name?n("span",[t._v(")")]):t._e()]):t._e(),t._v(" "),n("i",{staticClass:"iconfont text-blue-500 icon-qiehuan cursor-pointer ml-5",on:{click:function(e){t.loginVisible=!0}}}),t._v(" "),n("i",{staticClass:"iconfont icon-qianbao text-yellow-800 ml-10 cursor-pointer hidden xs:inline-block",on:{click:function(e){t.drawer=!0}}})]):n("div",{staticClass:"flex items-center cursor-pointer text-blue-500 text-14",on:{click:function(e){t.loginVisible=!0}}},[n("i",{staticClass:"iconfont icon-denglu"}),t._v(" "),n("span",{staticClass:"ml-5"},[t._v(t._s(t.$t("登录")))])])])]),t._v(" "),n("el-drawer",{attrs:{visible:t.drawer,"with-header":!1,size:"250px","custom-class":"h-full"},on:{"update:visible":function(e){t.drawer=e}}},[n("Account")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Login:n(374).default,Account:n(373).default})},386:function(t){t.exports=JSON.parse('{"en_US":{"登录":"登录"},"zh_Hans_CN":{"登录":"登录"},"zh_Hant_HK":{"登录":"登錄"}}')},387:function(t,e,n){"use strict";n(376)},388:function(t,e,n){var c=n(54)(!1);c.push([t.i,'.c-header .el-drawer__body{height:100%}.c-header .main-wrapper{margin-left:auto;margin-right:auto;max-width:1000px}.c-header .main-wrapper .market-wrapper{height:410px}@media (max-width:767px){.c-header .main-wrapper .market-wrapper{height:auto}}.c-header .nav-menu{top:50px;bottom:0}.c-header .nav-menu .el-menu-item .iconfont{font-size:20px;line-height:26px}.c-header .menu-expand{width:64px;text-transform:uppercase;letter-spacing:.2rem;color:hsla(0,0%,100%,.5);transition:all .3s;position:relative;background-color:#525151}.c-header .menu-expand span{display:block;width:16px;height:2px;margin-top:-1px;background-color:#d7d7d7;transition:all .5s;font:0/0 a;text-shadow:none;color:transparent;position:absolute;top:50%;left:18px;right:auto;bottom:auto}.c-header .menu-expand span:after,.c-header .menu-expand span:before{content:"";width:24px;height:100%;background-color:inherit;position:absolute;left:0;transition:all .5s}.c-header .menu-expand span:before{top:-8px}.c-header .menu-expand span:after{bottom:-8px}.c-header .menu-expand.is-clicked span{background-color:hsla(0,0%,100%,0)}.c-header .menu-expand.is-clicked span:before{top:0;transform:rotate(135deg);background-color:#d7d7d7}.c-header .menu-expand.is-clicked span:after{bottom:0;transform:rotate(225deg);background-color:#d7d7d7}',""]),t.exports=c}}]);