(function(e){function n(n){for(var r,i,a=n[0],s=n[1],u=n[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(n);while(p.length)p.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var s=t[a];0!==o[s]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var l=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"14a5":function(e,n,t){e.exports=t.p+"img/dualsense.8cf3382b.png"},"2fc3":function(e,n,t){"use strict";t("ec2b")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Playstation")},c=[],i=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",{staticClass:"ps5_intro",attrs:{id:"ps5_intro"}},[r("div",{staticClass:"controller_container",attrs:{id:"controller_container"}},[r("img",{attrs:{src:t("14a5"),id:"controller_image"}}),r("div",{class:["glow","left",{connected:e.connected}]}),r("div",{class:["glow","right",{connected:e.connected}]}),r("div",{attrs:{id:"playstation"},on:{click:e.connect}},[r("i",{staticClass:"fab fa-playstation"})])])])])},a=[],s=t("1da1"),u=(t("96cf"),{beforeMount:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$firebase.onConnectedChange((function(n){return e.connected=n}));case 1:case"end":return n.stop()}}),n)})))()},data:function(){return{connected:!1}},methods:{connect:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$firebase.setConnected(!e.connected);case 2:case"end":return n.stop()}}),n)})))()}}}),l=u,f=(t("2fc3"),t("2877")),p=Object(f["a"])(l,i,a,!1,null,null,null),d=p.exports,b={components:{Playstation:d}},g=b,v=(t("034f"),Object(f["a"])(g,o,c,!1,null,null,null)),h=v.exports,y=t("9483"),m={apiKey:"AIzaSyCL1Vw-H_vEJkxk0AOZs-eHiZ-m-nPX6Ts",authDomain:"ps5checker-a1510.firebaseapp.com",databaseURL:"https://ps5checker-a1510-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ps5checker-a1510",storageBucket:"ps5checker-a1510.appspot.com",messagingSenderId:"664386577633",appId:"1:664386577633:web:6699461565db13a2c183a0",vapidKey:"BAgvBxSUOmm8ZHtycH_hkDb4ri6AhREtoL76NSRcWd8ZZfudg-Z0el2T1eLTCIt6W8Ly98nVf4uEys22NAjgVn0"},w=m,O=t("260b"),j=t("d2e8");Object(O["a"])(w);Object(y["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),Object(j["b"])(Object(j["a"])(),(function(e){console.log(e);var n="MESSAGETITLE",t="MESSAGEBODY",r="MESSAGETAG";return self.registration.showNotification(n,{body:t,tag:r})}))},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("15f5"),t("7051");var k=t("741f"),S=t("66ce"),_=Object(O["a"])(w),x=Object(S["a"])(_),E=Object(S["c"])(x,"/connected"),A=Object(k["a"])(),C={onConnectedChange:function(e){Object(S["b"])(E,(function(n){return e(n.val())}))},setConnected:function(e){return Object(S["d"])(E,e)}};navigator.serviceWorker.getRegistration().then((function(e){return Object(k["b"])(A,{vapidKey:w.vapidKey,serviceWorkerRegistration:e}).then((function(n){return n?(x.notificationToken=n,Object(k["c"])(A,(function(n){console.log(n),e.showNotification("TEST")}))):console.log("No registration token available. Request permission to generate one."),n}))})),r["a"].prototype.$firebase=C,r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,n,t){},ec2b:function(e,n,t){}});
//# sourceMappingURL=app.9de4a1fb.js.map