(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);h&&h(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b93ea3c8"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var h=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"4cbd":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},r=[],o=(a("034f"),a("2877")),i={},c=Object(o["a"])(i,n,r,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},g=f,m=(a("7def"),Object(o["a"])(g,v,d,!1,null,"1935ec24",null)),_=m.exports,b={name:"home",components:{HelloWorld:_}},C=b,y=Object(o["a"])(C,h,p,!1,null,null,null),w=(y.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("h3",{staticClass:" text-center"},[t._v(" "+t._s(t.authUser.displayName)+" | "),a("a",{attrs:{href:"#"},on:{click:t.signOut}},[a("small",[t._v("Sign out")])])]),a("div",{staticClass:"messaging"},[a("div",{staticClass:"inbox_msg"},[t._m(0),a("div",{staticClass:"mesgs"},[a("div",{staticClass:"msg_history"},t._l(t.messages,(function(e){return a("div",{key:e.createdAt.seconds,class:t.authUser.uid==e.uid?"outgoing_msg":"incoming_msg"},[t.authUser.uid==e.uid?a("div",[a("div",{staticClass:"sent_msg"},[a("p",[t._v(t._s(e.message))]),a("span",{staticClass:"time_date"},[t._v(t._s(new Date(parseInt(e.createdAt.seconds+"000")).toLocaleString()))])])]):a("div",[a("div",{staticClass:"incoming_msg_img"},[a("img",{attrs:{src:e.photo,alt:e.author}})]),a("div",{staticClass:"received_msg"},[a("div",{staticClass:"received_withd_msg"},[a("p",[t._v(t._s(e.message))]),a("span",{staticClass:"time_date"},[t._v(t._s(new Date(parseInt(e.createdAt.seconds+"000")).toLocaleString())+" | "+t._s(e.author))])])])])])})),0),a("div",{staticClass:"type_msg"},[a("div",{staticClass:"input_msg_write"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"write_msg",attrs:{type:"text",placeholder:"Type a message"},domProps:{value:t.message},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveMessage(e)},input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._m(1)])])])]),t._m(2)])])])}),j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inbox_people"},[a("div",{staticClass:"headind_srch"},[a("div",{staticClass:"recent_heading"},[a("h4",[t._v("Recent")])]),a("div",{staticClass:"srch_bar"},[a("div",{staticClass:"stylish-input-group"},[a("input",{staticClass:"search-bar",attrs:{type:"text",placeholder:"Search"}}),a("span",{staticClass:"input-group-addon"},[a("button",{attrs:{type:"button"}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])]),a("div",{staticClass:"inbox_chat"},[a("div",{staticClass:"chat_list active_chat"},[a("div",{staticClass:"chat_people"},[a("div",{staticClass:"chat_img"},[a("img",{attrs:{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"}})]),a("div",{staticClass:"chat_ib"},[a("h5",[t._v("Sunil Rajput "),a("span",{staticClass:"chat_date"},[t._v("Dec 25")])]),a("p",[t._v("Test, which is a new approach to have all solutions astrology under one roof.")])])])]),a("div",{staticClass:"chat_list"},[a("div",{staticClass:"chat_people"},[a("div",{staticClass:"chat_img"},[a("img",{attrs:{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"}})]),a("div",{staticClass:"chat_ib"},[a("h5",[t._v("Sunil Rajput "),a("span",{staticClass:"chat_date"},[t._v("Dec 25")])]),a("p",[t._v("Test, which is a new approach to have all solutions astrology under one roof.")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"msg_send_btn",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-paper-plane-o",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center top_spac"},[t._v(" Design by "),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Sunil Rajput")])])}],k=(a("159b"),a("59ca")),x={name:"home",data:function(){return{message:"",messages:[],authUser:{}}},methods:{scrollToBottom:function(){var t=document.querySelector(".msg_history");t.scrollTop=t.scrollHeight},saveMessage:function(){var t=this;this.message.length>0&&db.collection("chat").add({message:this.message,author:this.authUser.displayName,uid:this.authUser.uid,photo:this.authUser.photoURL,createdAt:new Date}).then((function(){t.scrollToBottom()})),this.message=""},fetchMessages:function(){var t=this;db.collection("chat").orderBy("createdAt").onSnapshot((function(e){var a=[];e.forEach((function(t){a.push(t.data())})),t.messages=a,setTimeout((function(){t.scrollToBottom()}),500)}))},signOut:function(){k["auth"]().signOut().then((function(){})).catch((function(t){}))}},beforeRouteEnter:function(t,e,a){a((function(t){k["auth"]().onAuthStateChanged((function(e){e?a():t.$router.push("./login")}))}))},created:function(){var t=this;k["auth"]().onAuthStateChanged((function(e){t.authUser=e||{}})),this.fetchMessages()}},E=x,S=(a("cb53"),Object(o["a"])(E,w,j,!1,null,"5a129784",null)),O=S.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h4",[t._v("Please login with your google account to continue")]),a("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("login with google")])])},A=[],P={name:"login",methods:{login:function(){var t=new k["auth"].GoogleAuthProvider;t.addScope("https://www.googleapis.com/auth/contacts.readonly"),k["auth"]().signInWithPopup(t).then((function(t){t.credential.accessToken,t.user;this.$router.push("home")})).catch((function(t){t.code,t.message,t.email,t.credential}))}}},$=P,U=Object(o["a"])($,T,A,!1,null,null,null),I=U.exports;s["a"].use(u["a"]);var M=[{path:"/",name:"home",component:O},{path:"/login",name:"login",component:I},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],L=new u["a"]({mode:"history",base:"/",routes:M}),D=L,R=a("2f62");s["a"].use(R["a"]);var B=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("ea7b"),a("e71f"),a("ab8b");s["a"].config.productionTip=!1;var H={apiKey:"AIzaSyAYv6U-oAY7nhOrjxu9qMPvV6z2SpqMCY8",authDomain:"learn-firebase-ee406.firebaseapp.com",databaseURL:"https://learn-firebase-ee406.firebaseio.com",projectId:"learn-firebase-ee406",storageBucket:"learn-firebase-ee406.appspot.com",messagingSenderId:"214166252242",appId:"1:214166252242:web:7636f140e0185ffcbb5b0b",measurementId:"G-EY5KE6TL8F"};k["initializeApp"](H);var W=k["firestore"]();window.db=W,new s["a"]({router:D,store:B,render:function(t){return t(l)}}).$mount("#app"),s["a"].use([k])},"7def":function(t,e,a){"use strict";var s=a("8e33"),n=a.n(s);n.a},"85ec":function(t,e,a){},"8e33":function(t,e,a){},cb53:function(t,e,a){"use strict";var s=a("4cbd"),n=a.n(s);n.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d79596e8.js.map