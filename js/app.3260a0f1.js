(function(t){function e(e){for(var o,u,i=e[0],c=e[1],s=e[2],l=0,d=[];l<i.length;l++)u=i[l],r[u]&&d.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"33f68126"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=o);var a,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t),a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");u.type=o,u.request=a,n[1](u)}r[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,c.appendChild(s)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/random-quote-vue/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"31f2":function(t,e,n){"use strict";var o=n("e39b"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=n("bb71");n("da64");o["a"].use(r["a"],{iconfont:"md"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,a,u,!1,null,null,null);s.options.__file="App.vue";var l=s.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app",{attrs:{id:"inspire"}},[n("v-jumbotron",{staticStyle:{"min-height":"100%"},attrs:{gradient:t.grad}},[n("v-layout",{attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{"mt-4":"","pt-4":"",sm8:"","offset-sm4":""}},[n("v-card",{attrs:{width:"50%",height:"100%",hover:""}},[n("v-card-actions",[n("v-layout",{attrs:{"justify-end":""}},[n("v-btn",{attrs:{fab:"",medium:""},on:{click:function(e){t.say()}}},[n("v-icon",[t._v("cached")])],1)],1)],1),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v("Random quote")])])]),n("v-card-text",[n("blockquote",[t._v("\n          “"+t._s(t.obj.quote)+"”\n          "),n("footer",[n("small",[n("em",[t._v("—"+t._s(t.obj.author))])])])])]),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{fab:"",small:""}},[n("a",{attrs:{href:t.href}},[n("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"twitter"}}})],1)])],1)],1)],1)],1)],1)],1)],1)},v=[],m=n("ac8f"),b=n("bc3a"),g=n.n(b),y={name:"HelloWorld",components:{Twitter:m["Twitter"]},data:function(){return{grad:"to top left, #b4e391, #61c419",colors:[],obj:"",href:""}},methods:{say:function(){this.Newquote();var t=this.colors[Math.floor(Math.random()*this.colors.length)];this.grad="to right, ".concat(t.colors[0],", ").concat(t.colors[1])},Newquote:function(){var t=this;return g.a.get("https://talaikis.com/api/quotes/random/").then(function(e){return t.obj=e.data})}},mounted:function(){var t=this;g.a.get("https://talaikis.com/api/quotes/random/").then(function(e){return t.obj=e.data}),g.a.get("https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json").then(function(e){return t.colors=e.data})},computed:{urlQuote:function(){return encodeURI(this.obj.quote)},authorQuote:function(){return encodeURI(this.obj.author)}},watch:{obj:function(){this.href="https://twitter.com/intent/tweet?text="+this.urlQuote+"----"+this.authorQuote}}},w=y,j=(n("31f2"),n("6544")),_=n.n(j),x=n("7496"),O=n("8336"),q=n("b0af"),T=n("99d9"),V=n("12b2"),k=n("0e8f"),P=n("132d"),C=n("0f8e"),E=n("a722"),M=Object(i["a"])(w,h,v,!1,null,null,null);M.options.__file="HelloWorld.vue";var S=M.exports;_()(M,{VApp:x["a"],VBtn:O["a"],VCard:q["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:V["a"],VFlex:k["a"],VIcon:P["a"],VJumbotron:C["a"],VLayout:E["a"]});var H={components:{HelloWorld:S}},A=H,N=Object(i["a"])(A,d,p,!1,null,null,null);N.options.__file="Home.vue";var Q=N.exports;o["a"].use(f["a"]);var W=new f["a"]({routes:[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),$=n("ecee"),I=n("ad3d"),J=n("f2d1");$["c"].add(J["b"]),$["c"].add(J["a"]),o["a"].component("font-awesome-icon",I["a"]),o["a"].config.productionTip=!1,new o["a"]({router:W,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("6879"),r=n.n(o);r.a},6879:function(t,e,n){},e39b:function(t,e,n){}});
//# sourceMappingURL=app.3260a0f1.js.map