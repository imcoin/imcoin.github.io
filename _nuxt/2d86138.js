(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7,14],{717:function(e,t,n){var content=n(725);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(125).default)("00a69679",content,!0,{sourceMap:!1})},718:function(e,t,n){"use strict";n.r(t);n(106),n(446);var c=n(61),r=n(151),dialog=n(719),o=n(723);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={mixins:[dialog.default],data:function(){return{form:{access_id:"",secret_key:"",name:"",platform:"coinex"}}},computed:d(d({},Object(r.c)(["accountList","account"])),{},{rules:function(){return{access_id:[{required:!0,message:this.$t("请填写Acces_83b8"),trigger:"blur"}],secret_key:[{required:!0,message:this.$t("请填写Secre_ae2e"),trigger:"blur"}]}}}),methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.changeAccount(d({},t.form))}))},changeAccount:function(e){e&&(this.$store.dispatch("addAccount",e),this.dialogVisible=!1,this.$refs.form.resetFields())},removeAccount:function(e){if(this.accountList){var t=this.accountList.concat();t.splice(e,1),this.$store.commit("SET_ACCOUNT_LIST",t)}}}};f.methods?Object.assign(f.methods,{$t:function(e){if(!this.$lang&&!o.zh_Hans_CN)return e;var t=o[this.$lang]||o.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}}):f.methods={$t:function(e){if(!this.$lang&&!o.zh_Hans_CN)return e;var t=o[this.$lang]||o.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}};var m=f,h=(n(724),n(123)),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"c-login",attrs:{title:e.$t("账户"),visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",{staticClass:"flex"},[e.accountList?n("div",{staticClass:"mr-20 border-gray-200 border-r pr-20"},e._l(e.accountList,(function(t,c){return n("div",{key:t.access_id,staticClass:"account-item flex",class:{active:e.account&&e.account.access_id===t.access_id}},[n("div",{staticClass:"flex items-center"},[n("i",{staticClass:"iconfont icon-xuanzhong text-blue-400 text-14"})]),e._v(" "),n("div",{staticClass:"flex-1 mx-10 cursor-pointer",on:{click:function(n){return e.changeAccount(t)}}},[t.name?n("p",[e._v(e._s(t.name))]):e._e(),e._v(" "),t.access_id?n("p",{staticClass:"text-12 text-gray-500"},[t.name?n("span"):e._e(),e._v(e._s(t.access_id.slicestr())),t.name?n("span"):e._e()]):e._e()]),e._v(" "),n("div",{staticClass:"flex items-center cursor-pointer",on:{click:function(t){return e.removeAccount(c)}}},[n("i",{staticClass:"iconfont icon-shanchu2-copy -400 text-14"})])])})),0):e._e(),e._v(" "),n("el-form",{ref:"form",staticClass:"flex-1",attrs:{model:e.form,rules:e.rules}},[n("div",{staticClass:"mb-15"},[n("span",[e._v(e._s(e.$t("平台：")))]),e._v(" "),n("span",{staticClass:"ml-10"},[e._v("CoinEx")])]),e._v(" "),n("el-form-item",{attrs:{prop:"access_id"}},[n("el-input",{attrs:{placeholder:"Access ID"},model:{value:e.form.access_id,callback:function(t){e.$set(e.form,"access_id",t)},expression:"form.access_id"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"secret_key"}},[n("el-input",{attrs:{"show-password":"",placeholder:"Secret Key"},model:{value:e.form.secret_key,callback:function(t){e.$set(e.form,"secret_key",t)},expression:"form.secret_key"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:e.$t("昵称")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("div",{staticClass:"text-right"},[n("el-button",{staticClass:"w-full mt-20",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v(e._s(e.$t("登录")))])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports},719:function(e,t,n){"use strict";n.r(t),t.default={props:{visible:{type:Boolean,default:!1}},data:function(){return{dialogVisible:this.visible}},watch:{visible:function(){this.dialogVisible=this.visible},dialogVisible:function(e){e||this.closeDialog()}},methods:{closeDialog:function(){this.$emit("update:visible",!1)}}}},720:function(e,t,n){var content=n(730);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(125).default)("20081313",content,!0,{sourceMap:!1})},723:function(e){e.exports=JSON.parse('{"en_US":{"平台：":"平台：","昵称":"Nickname ","登录":"Sign In","请填写Acces_83b8":"请填写 Access ID","请填写Secre_ae2e":"请填写 Secret Key","账户":"Account"},"zh_Hans_CN":{"平台：":"平台：","昵称":"昵称","登录":"登录","请填写Acces_83b8":"请填写 Access ID","请填写Secre_ae2e":"请填写 Secret Key","账户":"账户"},"zh_Hant_HK":{"平台：":"平台：","昵称":"昵稱","登录":"登錄","请填写Acces_83b8":"請填寫 Access ID","请填写Secre_ae2e":"請填寫 Secret Key","账户":"賬戶"}}')},724:function(e,t,n){"use strict";n(717)},725:function(e,t,n){var c=n(124)(!1);c.push([e.i,".c-login .account-item{border-color:var(--color-gray-200);border-bottom-width:1px;margin-bottom:10px;padding-bottom:10px}.c-login .account-item:last-child{margin-bottom:0}.c-login .account-item .icon-xuanzhong{opacity:0}.c-login .account-item.active .icon-xuanzhong{opacity:1}",""]),e.exports=c},726:function(e,t,n){"use strict";n.r(t);var c=n(61),r=n(151),o=n(718),l=n(722),d=n(728);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m={components:{Login:o.default,Account:l.default},data:function(){return{loginVisible:!1,isCollapse:!0,drawer:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.c)(["account","currentMarket","theme"])),methods:{changeTheme:function(){this.$store.commit("SET_THEME","day"===this.theme?"night":"day")}}};m.methods?Object.assign(m.methods,{$t:function(e){if(!this.$lang&&!d.zh_Hans_CN)return e;var t=d[this.$lang]||d.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}}):m.methods={$t:function(e){if(!this.$lang&&!d.zh_Hans_CN)return e;var t=d[this.$lang]||d.zh_Hans_CN||{};return void 0===t[e]?e:t[e]}};var h=m,_=(n(729),n(123)),component=Object(_.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-header"},[n("Login",{attrs:{visible:e.loginVisible},on:{"update:visible":function(t){e.loginVisible=t}}}),e._v(" "),n("div",{staticClass:"bg-white px-20 shadow-xl w-full"},[n("div",{staticClass:"h-50 flex items-center main-wrapper"},[e._e(),e._v(" "),n("img",{staticClass:"h-30",attrs:{src:"/images/logo.png"}}),e._v(" "),n("div",{staticClass:"flex-1"}),e._v(" "),e.account?n("div",[e.account.name?n("span",[e._v(e._s(e.account.name))]):e._e(),e._v(" "),e.account.access_id?n("span",{staticClass:"text-12 text-gray-500"},[e.account.name?n("span",[e._v("(")]):e._e(),e._v(e._s(e.account.access_id.slicestr())),e.account.name?n("span",[e._v(")")]):e._e()]):e._e(),e._v(" "),n("i",{staticClass:"iconfont text-blue-500 icon-qiehuan cursor-pointer ml-5",on:{click:function(t){e.loginVisible=!0}}}),e._v(" "),n("i",{staticClass:"iconfont icon-qianbao text-yellow-800 ml-10 cursor-pointer hidden xs:inline-block",on:{click:function(t){e.drawer=!0}}})]):n("div",{staticClass:"flex items-center cursor-pointer text-blue-500 text-14",on:{click:function(t){e.loginVisible=!0}}},[n("i",{staticClass:"iconfont icon-denglu"}),e._v(" "),n("span",{staticClass:"ml-5"},[e._v(e._s(e.$t("登录")))])]),e._v(" "),n("i",{staticClass:"iconfont ml-10 cursor-pointer text-blue-500",class:"day"!==e.theme?"icon-B":"icon-heiyemoshi",on:{click:e.changeTheme}})])]),e._v(" "),n("el-drawer",{attrs:{visible:e.drawer,"with-header":!1,size:"250px","custom-class":"h-full"},on:{"update:visible":function(t){e.drawer=t}}},[n("Account")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Login:n(718).default,Account:n(722).default})},728:function(e){e.exports=JSON.parse('{"en_US":{"登录":"Sign In"},"zh_Hans_CN":{"登录":"登录"},"zh_Hant_HK":{"登录":"登錄"}}')},729:function(e,t,n){"use strict";n(720)},730:function(e,t,n){var c=n(124)(!1);c.push([e.i,'.c-header .el-drawer__body{height:100%}.c-header .main-wrapper{margin-left:auto;margin-right:auto;max-width:1000px}.c-header .main-wrapper .market-wrapper{height:410px}@media (max-width:767px){.c-header .main-wrapper .market-wrapper{height:auto}}.c-header .nav-menu{top:50px;bottom:0}.c-header .nav-menu .el-menu-item .iconfont{font-size:20px;line-height:26px}.c-header .menu-expand{width:64px;text-transform:uppercase;letter-spacing:.2rem;color:hsla(0,0%,100%,.5);transition:all .3s;position:relative;background-color:#525151}.c-header .menu-expand span{display:block;width:16px;height:2px;margin-top:-1px;background-color:#d7d7d7;transition:all .5s;font:0/0 a;text-shadow:none;color:transparent;position:absolute;top:50%;left:18px;right:auto;bottom:auto}.c-header .menu-expand span:after,.c-header .menu-expand span:before{content:"";width:24px;height:100%;background-color:inherit;position:absolute;left:0;transition:all .5s}.c-header .menu-expand span:before{top:-8px}.c-header .menu-expand span:after{bottom:-8px}.c-header .menu-expand.is-clicked span{background-color:hsla(0,0%,100%,0)}.c-header .menu-expand.is-clicked span:before{top:0;transform:rotate(135deg);background-color:#d7d7d7}.c-header .menu-expand.is-clicked span:after{bottom:0;transform:rotate(225deg);background-color:#d7d7d7}',""]),e.exports=c}}]);