(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(c,e,t){var n=t("b622"),r=n("toStringTag"),a={};a[r]="z",c.exports="[object z]"===String(a)},"0366":function(c,e,t){var n=t("59ed");c.exports=function(c,e,t){if(n(c),void 0===e)return c;switch(t){case 0:return function(){return c.call(e)};case 1:return function(t){return c.call(e,t)};case 2:return function(t,n){return c.call(e,t,n)};case 3:return function(t,n,r){return c.call(e,t,n,r)}}return function(){return c.apply(e,arguments)}}},"06cf":function(c,e,t){var n=t("83ab"),r=t("d1e7"),a=t("5c6c"),i=t("fc6a"),s=t("a04b"),o=t("1a2d"),l=t("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=n?h:function(c,e){if(c=i(c),e=s(e),l)try{return h(c,e)}catch(t){}if(o(c,e))return a(!r.f.call(c,e),c[e])}},"07fa":function(c,e,t){var n=t("50c4");c.exports=function(c){return n(c.length)}},"0cfb":function(c,e,t){var n=t("83ab"),r=t("d039"),a=t("cc12");c.exports=!n&&!r((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(c,e){c.exports=function(c){try{return String(c)}catch(e){return"Object"}}},1472:function(c,e,t){"use strict";var n=t("5606"),r=t("ffa6"),a=t("1fd5"),i=t("9dbb");const s="@firebase/installations",o="0.5.2",l=1e4,h="w:"+o,v="FIS_v2",u="https://firebaseinstallations.googleapis.com/v1",f=36e5,m="installations",d="Installations",z={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},p=new a["b"](m,d,z);function M(c){return c instanceof a["c"]&&c.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g({projectId:c}){return`${u}/projects/${c}/installations`}function C(c){return{token:c.token,requestStatus:2,expiresIn:_(c.expiresIn),creationTime:Date.now()}}async function H(c,e){const t=await e.json(),n=t.error;return p.create("request-failed",{requestName:c,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function y({apiKey:c}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c})}function V(c,{refreshToken:e}){const t=y(c);return t.append("Authorization",L(e)),t}async function b(c){const e=await c();return e.status>=500&&e.status<600?c():e}function _(c){return Number(c.replace("s","000"))}function L(c){return`${v} ${c}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w(c,{fid:e}){const t=g(c),n=y(c),r={fid:e,authVersion:v,appId:c.appId,sdkVersion:h},a={method:"POST",headers:n,body:JSON.stringify(r)},i=await b(()=>fetch(t,a));if(i.ok){const c=await i.json(),t={fid:c.fid||e,registrationStatus:2,refreshToken:c.refreshToken,authToken:C(c.authToken)};return t}throw await H("Create Installation",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(c){return new Promise(e=>{setTimeout(e,c)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(c){const e=btoa(String.fromCharCode(...c));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=/^[cdef][\w-]{21}$/,x="";function O(){try{const c=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(c),c[0]=112+c[0]%16;const t=T(c);return k.test(t)?t:x}catch(c){return x}}function T(c){const e=S(c);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(c){return`${c.appName}!${c.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new Map;function j(c,e){const t=I(c);P(t,e),N(t,e)}function P(c,e){const t=E.get(c);if(t)for(const n of t)n(e)}function N(c,e){const t=D();t&&t.postMessage({key:c,fid:e}),Z()}let R=null;function D(){return!R&&"BroadcastChannel"in self&&(R=new BroadcastChannel("[Firebase] FID Change"),R.onmessage=c=>{P(c.data.key,c.data.fid)}),R}function Z(){0===E.size&&R&&(R.close(),R=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="firebase-installations-database",F=1,$="firebase-installations-store";let W=null;function U(){return W||(W=Object(i["openDb"])(q,F,c=>{switch(c.oldVersion){case 0:c.createObjectStore($)}})),W}async function B(c,e){const t=I(c),n=await U(),r=n.transaction($,"readwrite"),a=r.objectStore($),i=await a.get(t);return await a.put(e,t),await r.complete,i&&i.fid===e.fid||j(c,e.fid),e}async function K(c){const e=I(c),t=await U(),n=t.transaction($,"readwrite");await n.objectStore($).delete(e),await n.complete}async function Y(c,e){const t=I(c),n=await U(),r=n.transaction($,"readwrite"),a=r.objectStore($),i=await a.get(t),s=e(i);return void 0===s?await a.delete(t):await a.put(s,t),await r.complete,!s||i&&i.fid===s.fid||j(c,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(c){let e;const t=await Y(c,t=>{const n=Q(t),r=X(c,n);return e=r.registrationPromise,r.installationEntry});return t.fid===x?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Q(c){const e=c||{fid:O(),registrationStatus:0};return tc(e)}function X(c,e){if(0===e.registrationStatus){if(!navigator.onLine){const c=Promise.reject(p.create("app-offline"));return{installationEntry:e,registrationPromise:c}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=J(c,t);return{installationEntry:t,registrationPromise:n}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:cc(c)}:{installationEntry:e}}async function J(c,e){try{const t=await w(c,e);return B(c,t)}catch(t){throw M(t)&&409===t.customData.serverCode?await K(c):await B(c,{fid:e.fid,registrationStatus:0}),t}}async function cc(c){let e=await ec(c);while(1===e.registrationStatus)await A(100),e=await ec(c);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:t}=await G(c);return t||e}return e}function ec(c){return Y(c,c=>{if(!c)throw p.create("installation-not-found");return tc(c)})}function tc(c){return nc(c)?{fid:c.fid,registrationStatus:0}:c}function nc(c){return 1===c.registrationStatus&&c.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc({appConfig:c,platformLoggerProvider:e},t){const n=ac(c,t),r=V(c,t),a=e.getImmediate({optional:!0});a&&r.append("x-firebase-client",a.getPlatformInfoString());const i={installation:{sdkVersion:h}},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await b(()=>fetch(n,s));if(o.ok){const c=await o.json(),e=C(c);return e}throw await H("Generate Auth Token",o)}function ac(c,{fid:e}){return`${g(c)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(c,e=!1){let t;const n=await Y(c.appConfig,n=>{if(!hc(n))throw p.create("not-registered");const r=n.authToken;if(!e&&vc(r))return n;if(1===r.requestStatus)return t=sc(c,e),n;{if(!navigator.onLine)throw p.create("app-offline");const e=fc(n);return t=lc(c,e),e}}),r=t?await t:n.authToken;return r}async function sc(c,e){let t=await oc(c.appConfig);while(1===t.authToken.requestStatus)await A(100),t=await oc(c.appConfig);const n=t.authToken;return 0===n.requestStatus?ic(c,e):n}function oc(c){return Y(c,c=>{if(!hc(c))throw p.create("not-registered");const e=c.authToken;return mc(e)?Object.assign(Object.assign({},c),{authToken:{requestStatus:0}}):c})}async function lc(c,e){try{const t=await rc(c,e),n=Object.assign(Object.assign({},e),{authToken:t});return await B(c.appConfig,n),t}catch(t){if(!M(t)||401!==t.customData.serverCode&&404!==t.customData.serverCode){const t=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await B(c.appConfig,t)}else await K(c.appConfig);throw t}}function hc(c){return void 0!==c&&2===c.registrationStatus}function vc(c){return 2===c.requestStatus&&!uc(c)}function uc(c){const e=Date.now();return e<c.creationTime||c.creationTime+c.expiresIn<e+f}function fc(c){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},c),{authToken:e})}function mc(c){return 1===c.requestStatus&&c.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(c){const e=c,{installationEntry:t,registrationPromise:n}=await G(e.appConfig);return n?n.catch(console.error):ic(e).catch(console.error),t.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(c,e=!1){const t=c;await pc(t.appConfig);const n=await ic(t,e);return n.token}async function pc(c){const{registrationPromise:e}=await G(c);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mc(c){if(!c||!c.options)throw gc("App Configuration");if(!c.name)throw gc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!c.options[t])throw gc(t);return{appName:c.name,projectId:c.options.projectId,apiKey:c.options.apiKey,appId:c.options.appId}}function gc(c){return p.create("missing-app-config-values",{valueName:c})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="installations",Hc="installations-internal",yc=c=>{const e=c.getProvider("app").getImmediate(),t=Mc(e),r=Object(n["b"])(e,"platform-logger"),a={app:e,appConfig:t,platformLoggerProvider:r,_delete:()=>Promise.resolve()};return a},Vc=c=>{const e=c.getProvider("app").getImmediate(),t=Object(n["b"])(e,Cc).getImmediate(),r={getId:()=>dc(t),getToken:c=>zc(t,c)};return r};function bc(){Object(n["c"])(new r["a"](Cc,yc,"PUBLIC")),Object(n["c"])(new r["a"](Hc,Vc,"PRIVATE"))}bc(),Object(n["f"])(s,o),Object(n["f"])(s,o,"esm2017")},"15f5":function(c,e,t){},1626:function(c,e){c.exports=function(c){return"function"===typeof c}},"19aa":function(c,e){c.exports=function(c,e,t){if(c instanceof e)return c;throw TypeError("Incorrect "+(t?t+" ":"")+"invocation")}},"1a2d":function(c,e,t){var n=t("7b0b"),r={}.hasOwnProperty;c.exports=Object.hasOwn||function(c,e){return r.call(n(c),e)}},"1be4":function(c,e,t){var n=t("d066");c.exports=n("document","documentElement")},"1c7e":function(c,e,t){var n=t("b622"),r=n("iterator"),a=!1;try{var i=0,s={next:function(){return{done:!!i++}},return:function(){a=!0}};s[r]=function(){return this},Array.from(s,(function(){throw 2}))}catch(o){}c.exports=function(c,e){if(!e&&!a)return!1;var t=!1;try{var n={};n[r]=function(){return{next:function(){return{done:t=!0}}}},c(n)}catch(o){}return t}},"1cdc":function(c,e,t){var n=t("342f");c.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},"1d80":function(c,e){c.exports=function(c){if(void 0==c)throw TypeError("Can't call method on "+c);return c}},"1da1":function(c,e,t){"use strict";t.d(e,"a",(function(){return r}));t("d3b7");function n(c,e,t,n,r,a,i){try{var s=c[a](i),o=s.value}catch(l){return void t(l)}s.done?e(o):Promise.resolve(o).then(n,r)}function r(c){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=c.apply(e,t);function s(c){n(i,r,a,s,o,"next",c)}function o(c){n(i,r,a,s,o,"throw",c)}s(void 0)}))}}},"1fd5":function(c,e,t){"use strict";(function(c){t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return L})),t.d(e,"c",(function(){return _})),t.d(e,"d",(function(){return Z})),t.d(e,"e",(function(){return V})),t.d(e,"f",(function(){return r})),t.d(e,"g",(function(){return a})),t.d(e,"h",(function(){return o})),t.d(e,"i",(function(){return l})),t.d(e,"j",(function(){return I})),t.d(e,"k",(function(){return z})),t.d(e,"l",(function(){return u})),t.d(e,"m",(function(){return N})),t.d(e,"n",(function(){return q})),t.d(e,"o",(function(){return W})),t.d(e,"p",(function(){return T})),t.d(e,"q",(function(){return j})),t.d(e,"r",(function(){return H})),t.d(e,"s",(function(){return M})),t.d(e,"t",(function(){return C})),t.d(e,"u",(function(){return g})),t.d(e,"v",(function(){return O})),t.d(e,"w",(function(){return S})),t.d(e,"x",(function(){return P})),t.d(e,"y",(function(){return D})),t.d(e,"z",(function(){return E})),t.d(e,"A",(function(){return $})),t.d(e,"B",(function(){return F})),t.d(e,"C",(function(){return k})),t.d(e,"D",(function(){return y}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(c,e){if(!c)throw a(e)},a=function(c){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+c)},i=function(c){const e=[];let t=0;for(let n=0;n<c.length;n++){let r=c.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=63&r|128):55296===(64512&r)&&n+1<c.length&&56320===(64512&c.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&c.charCodeAt(++n)),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=63&r|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=63&r|128)}return e},s=function(c){const e=[];let t=0,n=0;while(t<c.length){const r=c[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const a=c[t++];e[n++]=String.fromCharCode((31&r)<<6|63&a)}else if(r>239&&r<365){const a=c[t++],i=c[t++],s=c[t++],o=((7&r)<<18|(63&a)<<12|(63&i)<<6|63&s)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(1023&o))}else{const a=c[t++],i=c[t++];e[n++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&i)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<c.length;r+=3){const e=c[r],a=r+1<c.length,i=a?c[r+1]:0,s=r+2<c.length,o=s?c[r+2]:0,l=e>>2,h=(3&e)<<4|i>>4;let v=(15&i)<<2|o>>6,u=63&o;s||(u=64,a||(v=64)),n.push(t[l],t[h],t[v],t[u])}return n.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(i(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):s(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<c.length;){const e=t[c.charAt(r++)],a=r<c.length,i=a?t[c.charAt(r)]:0;++r;const s=r<c.length,o=s?t[c.charAt(r)]:64;++r;const l=r<c.length,h=l?t[c.charAt(r)]:64;if(++r,null==e||null==i||null==o||null==h)throw Error();const v=e<<2|i>>4;if(n.push(v),64!==o){const c=i<<4&240|o>>2;if(n.push(c),64!==h){const c=o<<6&192|h;n.push(c)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}},l=function(c){const e=i(c);return o.encodeByteArray(e,!0)},h=function(c){return l(c).replace(/\./g,"")},v=function(c){try{return o.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(c){return f(void 0,c)}function f(c,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:void 0===c&&(c={});break;case Array:c=[];break;default:return e}for(const t in e)e.hasOwnProperty(t)&&m(t)&&(c[t]=f(c[t],e[t]));return c}function m(c){return"__proto__"!==c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,e)=>{this.resolve=c,this.reject=e})}wrapCallback(c){return(e,t)=>{e?this.reject(e):this.resolve(t),"function"===typeof c&&(this.promise.catch(()=>{}),1===c.length?c(e):c(e,t))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(c,e){if(c.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=c.iat||0,a=c.sub||c.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},c),s="";return[h(JSON.stringify(t)),h(JSON.stringify(i)),s].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function M(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN}function H(){return"object"===typeof indexedDB}function y(){return new Promise((c,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),c(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var c;e((null===(c=r.error)||void 0===c?void 0:c.message)||"")}}catch(t){e(t)}})}function V(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class _ extends Error{constructor(c,e,t){super(e),this.code=c,this.customData=t,this.name=b,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(c,e,t){this.service=c,this.serviceName=e,this.errors=t}create(c,...e){const t=e[0]||{},n=`${this.service}/${c}`,r=this.errors[c],a=r?w(r,t):"Error",i=`${this.serviceName}: ${a} (${n}).`,s=new _(n,i,t);return s}}function w(c,e){return c.replace(A,(c,t)=>{const n=e[t];return null!=n?String(n):`<${t}?>`})}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(c){return JSON.parse(c)}function k(c){return JSON.stringify(c)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(c){let e={},t={},n={},r="";try{const a=c.split(".");e=S(v(a[0])||""),t=S(v(a[1])||""),r=a[2],n=t["d"]||{},delete t["d"]}catch(a){}return{header:e,claims:t,data:n,signature:r}},O=function(c){const e=x(c),t=e.claims;return!!t&&"object"===typeof t&&t.hasOwnProperty("iat")},T=function(c){const e=x(c).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function I(c,e){return Object.prototype.hasOwnProperty.call(c,e)}function E(c,e){return Object.prototype.hasOwnProperty.call(c,e)?c[e]:void 0}function j(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function P(c,e,t){const n={};for(const r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=e.call(t,c[r],r,c));return n}function N(c,e){if(c===e)return!0;const t=Object.keys(c),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const t=c[r],a=e[r];if(R(t)&&R(a)){if(!N(t,a))return!1}else if(t!==a)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function R(c){return null!==c&&"object"===typeof c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(c){const e=[];for(const[t,n]of Object.entries(c))Array.isArray(n)?n.forEach(c=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(c))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let c=1;c<this.blockSize;++c)this.pad_[c]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(c,e){e||(e=0);const t=this.W_;if("string"===typeof c)for(let h=0;h<16;h++)t[h]=c.charCodeAt(e)<<24|c.charCodeAt(e+1)<<16|c.charCodeAt(e+2)<<8|c.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)t[h]=c[e]<<24|c[e+1]<<16|c[e+2]<<8|c[e+3],e+=4;for(let h=16;h<80;h++){const c=t[h-3]^t[h-8]^t[h-14]^t[h-16];t[h]=4294967295&(c<<1|c>>>31)}let n,r,a=this.chain_[0],i=this.chain_[1],s=this.chain_[2],o=this.chain_[3],l=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(n=o^i&(s^o),r=1518500249):(n=i^s^o,r=1859775393):h<60?(n=i&s|o&(i|s),r=2400959708):(n=i^s^o,r=3395469782);const c=(a<<5|a>>>27)+n+l+r+t[h]&4294967295;l=o,o=s,s=4294967295&(i<<30|i>>>2),i=a,a=c}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(c,e){if(null==c)return;void 0===e&&(e=c.length);const t=e-this.blockSize;let n=0;const r=this.buf_;let a=this.inbuf_;while(n<e){if(0===a)while(n<=t)this.compress_(c,n),n+=this.blockSize;if("string"===typeof c){while(n<e)if(r[a]=c.charCodeAt(n),++a,++n,a===this.blockSize){this.compress_(r),a=0;break}}else while(n<e)if(r[a]=c[n],++a,++n,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=e}digest(){const c=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);let t=0;for(let n=0;n<5;n++)for(let e=24;e>=0;e-=8)c[t]=this.chain_[n]>>e&255,++t;return c}}function q(c,e){return`${c} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=function(c){const e=[];let t=0;for(let n=0;n<c.length;n++){let a=c.charCodeAt(n);if(a>=55296&&a<=56319){const e=a-55296;n++,r(n<c.length,"Surrogate pair missing trail surrogate.");const t=c.charCodeAt(n)-56320;a=65536+(e<<10)+t}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=63&a|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=63&a|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=63&a|128)}return e},$=function(c){let e=0;for(let t=0;t<c.length;t++){const n=c.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(c){return c&&c._delegate?c._delegate:c}}).call(this,t("c8ba"))},2266:function(c,e,t){var n=t("825a"),r=t("e95a"),a=t("07fa"),i=t("0366"),s=t("9a1f"),o=t("35a1"),l=t("2a62"),h=function(c,e){this.stopped=c,this.result=e};c.exports=function(c,e,t){var v,u,f,m,d,z,p,M=t&&t.that,g=!(!t||!t.AS_ENTRIES),C=!(!t||!t.IS_ITERATOR),H=!(!t||!t.INTERRUPTED),y=i(e,M,1+g+H),V=function(c){return v&&l(v,"normal",c),new h(!0,c)},b=function(c){return g?(n(c),H?y(c[0],c[1],V):y(c[0],c[1])):H?y(c,V):y(c)};if(C)v=c;else{if(u=o(c),!u)throw TypeError(String(c)+" is not iterable");if(r(u)){for(f=0,m=a(c);m>f;f++)if(d=b(c[f]),d&&d instanceof h)return d;return new h(!1)}v=s(c,u)}z=v.next;while(!(p=z.call(v)).done){try{d=b(p.value)}catch(_){l(v,"throw",_)}if("object"==typeof d&&d&&d instanceof h)return d}return new h(!1)}},"23cb":function(c,e,t){var n=t("5926"),r=Math.max,a=Math.min;c.exports=function(c,e){var t=n(c);return t<0?r(t+e,0):a(t,e)}},"23e7":function(c,e,t){var n=t("da84"),r=t("06cf").f,a=t("9112"),i=t("6eeb"),s=t("ce4e"),o=t("e893"),l=t("94ca");c.exports=function(c,e){var t,h,v,u,f,m,d=c.target,z=c.global,p=c.stat;if(h=z?n:p?n[d]||s(d,{}):(n[d]||{}).prototype,h)for(v in e){if(f=e[v],c.noTargetGet?(m=r(h,v),u=m&&m.value):u=h[v],t=l(z?v:d+(p?".":"#")+v,c.forced),!t&&void 0!==u){if(typeof f===typeof u)continue;o(f,u)}(c.sham||u&&u.sham)&&a(f,"sham",!0),i(h,v,f,c)}}},"241c":function(c,e,t){var n=t("ca84"),r=t("7839"),a=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(c){return n(c,a)}},"260b":function(c,e,t){"use strict";var n=t("5606");t.d(e,"a",(function(){return n["e"]}));var r="firebase",a="9.1.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(n["f"])(r,a,"app")},2626:function(c,e,t){"use strict";var n=t("d066"),r=t("9bf2"),a=t("b622"),i=t("83ab"),s=a("species");c.exports=function(c){var e=n(c),t=r.f;i&&e&&!e[s]&&t(e,s,{configurable:!0,get:function(){return this}})}},2877:function(c,e,t){"use strict";function n(c,e,t,n,r,a,i,s){var o,l="function"===typeof c?c.options:c;if(e&&(l.render=e,l.staticRenderFns=t,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(o=function(c){c=c||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,c||"undefined"===typeof __VUE_SSR_CONTEXT__||(c=__VUE_SSR_CONTEXT__),r&&r.call(this,c),c&&c._registeredComponents&&c._registeredComponents.add(i)},l._ssrRegister=o):r&&(o=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(l.functional){l._injectStyles=o;var h=l.render;l.render=function(c,e){return o.call(e),h(c,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,o):[o]}return{exports:c,options:l}}t.d(e,"a",(function(){return n}))},"2a62":function(c,e,t){var n=t("825a"),r=t("dc4a");c.exports=function(c,e,t){var a,i;n(c);try{if(a=r(c,"return"),!a){if("throw"===e)throw t;return t}a=a.call(c)}catch(s){i=!0,a=s}if("throw"===e)throw t;if(i)throw a;return n(a),t}},"2b0e":function(c,e,t){"use strict";(function(c){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var t=Object.freeze({});function n(c){return void 0===c||null===c}function r(c){return void 0!==c&&null!==c}function a(c){return!0===c}function i(c){return!1===c}function s(c){return"string"===typeof c||"number"===typeof c||"symbol"===typeof c||"boolean"===typeof c}function o(c){return null!==c&&"object"===typeof c}var l=Object.prototype.toString;function h(c){return"[object Object]"===l.call(c)}function v(c){return"[object RegExp]"===l.call(c)}function u(c){var e=parseFloat(String(c));return e>=0&&Math.floor(e)===e&&isFinite(c)}function f(c){return r(c)&&"function"===typeof c.then&&"function"===typeof c.catch}function m(c){return null==c?"":Array.isArray(c)||h(c)&&c.toString===l?JSON.stringify(c,null,2):String(c)}function d(c){var e=parseFloat(c);return isNaN(e)?c:e}function z(c,e){for(var t=Object.create(null),n=c.split(","),r=0;r<n.length;r++)t[n[r]]=!0;return e?function(c){return t[c.toLowerCase()]}:function(c){return t[c]}}z("slot,component",!0);var p=z("key,ref,slot,slot-scope,is");function M(c,e){if(c.length){var t=c.indexOf(e);if(t>-1)return c.splice(t,1)}}var g=Object.prototype.hasOwnProperty;function C(c,e){return g.call(c,e)}function H(c){var e=Object.create(null);return function(t){var n=e[t];return n||(e[t]=c(t))}}var y=/-(\w)/g,V=H((function(c){return c.replace(y,(function(c,e){return e?e.toUpperCase():""}))})),b=H((function(c){return c.charAt(0).toUpperCase()+c.slice(1)})),_=/\B([A-Z])/g,L=H((function(c){return c.replace(_,"-$1").toLowerCase()}));function w(c,e){function t(t){var n=arguments.length;return n?n>1?c.apply(e,arguments):c.call(e,t):c.call(e)}return t._length=c.length,t}function A(c,e){return c.bind(e)}var S=Function.prototype.bind?A:w;function k(c,e){e=e||0;var t=c.length-e,n=new Array(t);while(t--)n[t]=c[t+e];return n}function x(c,e){for(var t in e)c[t]=e[t];return c}function O(c){for(var e={},t=0;t<c.length;t++)c[t]&&x(e,c[t]);return e}function T(c,e,t){}var I=function(c,e,t){return!1},E=function(c){return c};function j(c,e){if(c===e)return!0;var t=o(c),n=o(e);if(!t||!n)return!t&&!n&&String(c)===String(e);try{var r=Array.isArray(c),a=Array.isArray(e);if(r&&a)return c.length===e.length&&c.every((function(c,t){return j(c,e[t])}));if(c instanceof Date&&e instanceof Date)return c.getTime()===e.getTime();if(r||a)return!1;var i=Object.keys(c),s=Object.keys(e);return i.length===s.length&&i.every((function(t){return j(c[t],e[t])}))}catch(l){return!1}}function P(c,e){for(var t=0;t<c.length;t++)if(j(c[t],e))return t;return-1}function N(c){var e=!1;return function(){e||(e=!0,c.apply(this,arguments))}}var R="data-server-rendered",D=["component","directive","filter"],Z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:T,parsePlatformTagName:E,mustUseProp:I,async:!0,_lifecycleHooks:Z},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function $(c){var e=(c+"").charCodeAt(0);return 36===e||95===e}function W(c,e,t,n){Object.defineProperty(c,e,{value:t,enumerable:!!n,writable:!0,configurable:!0})}var U=new RegExp("[^"+F.source+".$_\\d]");function B(c){if(!U.test(c)){var e=c.split(".");return function(c){for(var t=0;t<e.length;t++){if(!c)return;c=c[e[t]]}return c}}}var K,Y="__proto__"in{},G="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Q&&WXEnvironment.platform.toLowerCase(),J=G&&window.navigator.userAgent.toLowerCase(),cc=J&&/msie|trident/.test(J),ec=J&&J.indexOf("msie 9.0")>0,tc=J&&J.indexOf("edge/")>0,nc=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===X),rc=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),ac={}.watch,ic=!1;if(G)try{var sc={};Object.defineProperty(sc,"passive",{get:function(){ic=!0}}),window.addEventListener("test-passive",null,sc)}catch(Vi){}var oc=function(){return void 0===K&&(K=!G&&!Q&&"undefined"!==typeof c&&(c["process"]&&"server"===c["process"].env.VUE_ENV)),K},lc=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function hc(c){return"function"===typeof c&&/native code/.test(c.toString())}var vc,uc="undefined"!==typeof Symbol&&hc(Symbol)&&"undefined"!==typeof Reflect&&hc(Reflect.ownKeys);vc="undefined"!==typeof Set&&hc(Set)?Set:function(){function c(){this.set=Object.create(null)}return c.prototype.has=function(c){return!0===this.set[c]},c.prototype.add=function(c){this.set[c]=!0},c.prototype.clear=function(){this.set=Object.create(null)},c}();var fc=T,mc=0,dc=function(){this.id=mc++,this.subs=[]};dc.prototype.addSub=function(c){this.subs.push(c)},dc.prototype.removeSub=function(c){M(this.subs,c)},dc.prototype.depend=function(){dc.target&&dc.target.addDep(this)},dc.prototype.notify=function(){var c=this.subs.slice();for(var e=0,t=c.length;e<t;e++)c[e].update()},dc.target=null;var zc=[];function pc(c){zc.push(c),dc.target=c}function Mc(){zc.pop(),dc.target=zc[zc.length-1]}var gc=function(c,e,t,n,r,a,i,s){this.tag=c,this.data=e,this.children=t,this.text=n,this.elm=r,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=i,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Cc={child:{configurable:!0}};Cc.child.get=function(){return this.componentInstance},Object.defineProperties(gc.prototype,Cc);var Hc=function(c){void 0===c&&(c="");var e=new gc;return e.text=c,e.isComment=!0,e};function yc(c){return new gc(void 0,void 0,void 0,String(c))}function Vc(c){var e=new gc(c.tag,c.data,c.children&&c.children.slice(),c.text,c.elm,c.context,c.componentOptions,c.asyncFactory);return e.ns=c.ns,e.isStatic=c.isStatic,e.key=c.key,e.isComment=c.isComment,e.fnContext=c.fnContext,e.fnOptions=c.fnOptions,e.fnScopeId=c.fnScopeId,e.asyncMeta=c.asyncMeta,e.isCloned=!0,e}var bc=Array.prototype,_c=Object.create(bc),Lc=["push","pop","shift","unshift","splice","sort","reverse"];Lc.forEach((function(c){var e=bc[c];W(_c,c,(function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r,a=e.apply(this,t),i=this.__ob__;switch(c){case"push":case"unshift":r=t;break;case"splice":r=t.slice(2);break}return r&&i.observeArray(r),i.dep.notify(),a}))}));var wc=Object.getOwnPropertyNames(_c),Ac=!0;function Sc(c){Ac=c}var kc=function(c){this.value=c,this.dep=new dc,this.vmCount=0,W(c,"__ob__",this),Array.isArray(c)?(Y?xc(c,_c):Oc(c,_c,wc),this.observeArray(c)):this.walk(c)};function xc(c,e){c.__proto__=e}function Oc(c,e,t){for(var n=0,r=t.length;n<r;n++){var a=t[n];W(c,a,e[a])}}function Tc(c,e){var t;if(o(c)&&!(c instanceof gc))return C(c,"__ob__")&&c.__ob__ instanceof kc?t=c.__ob__:Ac&&!oc()&&(Array.isArray(c)||h(c))&&Object.isExtensible(c)&&!c._isVue&&(t=new kc(c)),e&&t&&t.vmCount++,t}function Ic(c,e,t,n,r){var a=new dc,i=Object.getOwnPropertyDescriptor(c,e);if(!i||!1!==i.configurable){var s=i&&i.get,o=i&&i.set;s&&!o||2!==arguments.length||(t=c[e]);var l=!r&&Tc(t);Object.defineProperty(c,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(c):t;return dc.target&&(a.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Pc(e))),e},set:function(e){var n=s?s.call(c):t;e===n||e!==e&&n!==n||s&&!o||(o?o.call(c,e):t=e,l=!r&&Tc(e),a.notify())}})}}function Ec(c,e,t){if(Array.isArray(c)&&u(e))return c.length=Math.max(c.length,e),c.splice(e,1,t),t;if(e in c&&!(e in Object.prototype))return c[e]=t,t;var n=c.__ob__;return c._isVue||n&&n.vmCount?t:n?(Ic(n.value,e,t),n.dep.notify(),t):(c[e]=t,t)}function jc(c,e){if(Array.isArray(c)&&u(e))c.splice(e,1);else{var t=c.__ob__;c._isVue||t&&t.vmCount||C(c,e)&&(delete c[e],t&&t.dep.notify())}}function Pc(c){for(var e=void 0,t=0,n=c.length;t<n;t++)e=c[t],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pc(e)}kc.prototype.walk=function(c){for(var e=Object.keys(c),t=0;t<e.length;t++)Ic(c,e[t])},kc.prototype.observeArray=function(c){for(var e=0,t=c.length;e<t;e++)Tc(c[e])};var Nc=q.optionMergeStrategies;function Rc(c,e){if(!e)return c;for(var t,n,r,a=uc?Reflect.ownKeys(e):Object.keys(e),i=0;i<a.length;i++)t=a[i],"__ob__"!==t&&(n=c[t],r=e[t],C(c,t)?n!==r&&h(n)&&h(r)&&Rc(n,r):Ec(c,t,r));return c}function Dc(c,e,t){return t?function(){var n="function"===typeof e?e.call(t,t):e,r="function"===typeof c?c.call(t,t):c;return n?Rc(n,r):r}:e?c?function(){return Rc("function"===typeof e?e.call(this,this):e,"function"===typeof c?c.call(this,this):c)}:e:c}function Zc(c,e){var t=e?c?c.concat(e):Array.isArray(e)?e:[e]:c;return t?qc(t):t}function qc(c){for(var e=[],t=0;t<c.length;t++)-1===e.indexOf(c[t])&&e.push(c[t]);return e}function Fc(c,e,t,n){var r=Object.create(c||null);return e?x(r,e):r}Nc.data=function(c,e,t){return t?Dc(c,e,t):e&&"function"!==typeof e?c:Dc(c,e)},Z.forEach((function(c){Nc[c]=Zc})),D.forEach((function(c){Nc[c+"s"]=Fc})),Nc.watch=function(c,e,t,n){if(c===ac&&(c=void 0),e===ac&&(e=void 0),!e)return Object.create(c||null);if(!c)return e;var r={};for(var a in x(r,c),e){var i=r[a],s=e[a];i&&!Array.isArray(i)&&(i=[i]),r[a]=i?i.concat(s):Array.isArray(s)?s:[s]}return r},Nc.props=Nc.methods=Nc.inject=Nc.computed=function(c,e,t,n){if(!c)return e;var r=Object.create(null);return x(r,c),e&&x(r,e),r},Nc.provide=Dc;var $c=function(c,e){return void 0===e?c:e};function Wc(c,e){var t=c.props;if(t){var n,r,a,i={};if(Array.isArray(t)){n=t.length;while(n--)r=t[n],"string"===typeof r&&(a=V(r),i[a]={type:null})}else if(h(t))for(var s in t)r=t[s],a=V(s),i[a]=h(r)?r:{type:r};else 0;c.props=i}}function Uc(c,e){var t=c.inject;if(t){var n=c.inject={};if(Array.isArray(t))for(var r=0;r<t.length;r++)n[t[r]]={from:t[r]};else if(h(t))for(var a in t){var i=t[a];n[a]=h(i)?x({from:a},i):{from:i}}else 0}}function Bc(c){var e=c.directives;if(e)for(var t in e){var n=e[t];"function"===typeof n&&(e[t]={bind:n,update:n})}}function Kc(c,e,t){if("function"===typeof e&&(e=e.options),Wc(e,t),Uc(e,t),Bc(e),!e._base&&(e.extends&&(c=Kc(c,e.extends,t)),e.mixins))for(var n=0,r=e.mixins.length;n<r;n++)c=Kc(c,e.mixins[n],t);var a,i={};for(a in c)s(a);for(a in e)C(c,a)||s(a);function s(n){var r=Nc[n]||$c;i[n]=r(c[n],e[n],t,n)}return i}function Yc(c,e,t,n){if("string"===typeof t){var r=c[e];if(C(r,t))return r[t];var a=V(t);if(C(r,a))return r[a];var i=b(a);if(C(r,i))return r[i];var s=r[t]||r[a]||r[i];return s}}function Gc(c,e,t,n){var r=e[c],a=!C(t,c),i=t[c],s=ee(Boolean,r.type);if(s>-1)if(a&&!C(r,"default"))i=!1;else if(""===i||i===L(c)){var o=ee(String,r.type);(o<0||s<o)&&(i=!0)}if(void 0===i){i=Qc(n,r,c);var l=Ac;Sc(!0),Tc(i),Sc(l)}return i}function Qc(c,e,t){if(C(e,"default")){var n=e.default;return c&&c.$options.propsData&&void 0===c.$options.propsData[t]&&void 0!==c._props[t]?c._props[t]:"function"===typeof n&&"Function"!==Jc(e.type)?n.call(c):n}}var Xc=/^\s*function (\w+)/;function Jc(c){var e=c&&c.toString().match(Xc);return e?e[1]:""}function ce(c,e){return Jc(c)===Jc(e)}function ee(c,e){if(!Array.isArray(e))return ce(e,c)?0:-1;for(var t=0,n=e.length;t<n;t++)if(ce(e[t],c))return t;return-1}function te(c,e,t){pc();try{if(e){var n=e;while(n=n.$parent){var r=n.$options.errorCaptured;if(r)for(var a=0;a<r.length;a++)try{var i=!1===r[a].call(n,c,e,t);if(i)return}catch(Vi){re(Vi,n,"errorCaptured hook")}}}re(c,e,t)}finally{Mc()}}function ne(c,e,t,n,r){var a;try{a=t?c.apply(e,t):c.call(e),a&&!a._isVue&&f(a)&&!a._handled&&(a.catch((function(c){return te(c,n,r+" (Promise/async)")})),a._handled=!0)}catch(Vi){te(Vi,n,r)}return a}function re(c,e,t){if(q.errorHandler)try{return q.errorHandler.call(null,c,e,t)}catch(Vi){Vi!==c&&ae(Vi,null,"config.errorHandler")}ae(c,e,t)}function ae(c,e,t){if(!G&&!Q||"undefined"===typeof console)throw c;console.error(c)}var ie,se=!1,oe=[],le=!1;function he(){le=!1;var c=oe.slice(0);oe.length=0;for(var e=0;e<c.length;e++)c[e]()}if("undefined"!==typeof Promise&&hc(Promise)){var ve=Promise.resolve();ie=function(){ve.then(he),nc&&setTimeout(T)},se=!0}else if(cc||"undefined"===typeof MutationObserver||!hc(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ie="undefined"!==typeof setImmediate&&hc(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var ue=1,fe=new MutationObserver(he),me=document.createTextNode(String(ue));fe.observe(me,{characterData:!0}),ie=function(){ue=(ue+1)%2,me.data=String(ue)},se=!0}function de(c,e){var t;if(oe.push((function(){if(c)try{c.call(e)}catch(Vi){te(Vi,e,"nextTick")}else t&&t(e)})),le||(le=!0,ie()),!c&&"undefined"!==typeof Promise)return new Promise((function(c){t=c}))}var ze=new vc;function pe(c){Me(c,ze),ze.clear()}function Me(c,e){var t,n,r=Array.isArray(c);if(!(!r&&!o(c)||Object.isFrozen(c)||c instanceof gc)){if(c.__ob__){var a=c.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(r){t=c.length;while(t--)Me(c[t],e)}else{n=Object.keys(c),t=n.length;while(t--)Me(c[n[t]],e)}}}var ge=H((function(c){var e="&"===c.charAt(0);c=e?c.slice(1):c;var t="~"===c.charAt(0);c=t?c.slice(1):c;var n="!"===c.charAt(0);return c=n?c.slice(1):c,{name:c,once:t,capture:n,passive:e}}));function Ce(c,e){function t(){var c=arguments,n=t.fns;if(!Array.isArray(n))return ne(n,null,arguments,e,"v-on handler");for(var r=n.slice(),a=0;a<r.length;a++)ne(r[a],null,c,e,"v-on handler")}return t.fns=c,t}function He(c,e,t,r,i,s){var o,l,h,v;for(o in c)l=c[o],h=e[o],v=ge(o),n(l)||(n(h)?(n(l.fns)&&(l=c[o]=Ce(l,s)),a(v.once)&&(l=c[o]=i(v.name,l,v.capture)),t(v.name,l,v.capture,v.passive,v.params)):l!==h&&(h.fns=l,c[o]=h));for(o in e)n(c[o])&&(v=ge(o),r(v.name,e[o],v.capture))}function ye(c,e,t){var i;c instanceof gc&&(c=c.data.hook||(c.data.hook={}));var s=c[e];function o(){t.apply(this,arguments),M(i.fns,o)}n(s)?i=Ce([o]):r(s.fns)&&a(s.merged)?(i=s,i.fns.push(o)):i=Ce([s,o]),i.merged=!0,c[e]=i}function Ve(c,e,t){var a=e.options.props;if(!n(a)){var i={},s=c.attrs,o=c.props;if(r(s)||r(o))for(var l in a){var h=L(l);be(i,o,l,h,!0)||be(i,s,l,h,!1)}return i}}function be(c,e,t,n,a){if(r(e)){if(C(e,t))return c[t]=e[t],a||delete e[t],!0;if(C(e,n))return c[t]=e[n],a||delete e[n],!0}return!1}function _e(c){for(var e=0;e<c.length;e++)if(Array.isArray(c[e]))return Array.prototype.concat.apply([],c);return c}function Le(c){return s(c)?[yc(c)]:Array.isArray(c)?Ae(c):void 0}function we(c){return r(c)&&r(c.text)&&i(c.isComment)}function Ae(c,e){var t,i,o,l,h=[];for(t=0;t<c.length;t++)i=c[t],n(i)||"boolean"===typeof i||(o=h.length-1,l=h[o],Array.isArray(i)?i.length>0&&(i=Ae(i,(e||"")+"_"+t),we(i[0])&&we(l)&&(h[o]=yc(l.text+i[0].text),i.shift()),h.push.apply(h,i)):s(i)?we(l)?h[o]=yc(l.text+i):""!==i&&h.push(yc(i)):we(i)&&we(l)?h[o]=yc(l.text+i.text):(a(c._isVList)&&r(i.tag)&&n(i.key)&&r(e)&&(i.key="__vlist"+e+"_"+t+"__"),h.push(i)));return h}function Se(c){var e=c.$options.provide;e&&(c._provided="function"===typeof e?e.call(c):e)}function ke(c){var e=xe(c.$options.inject,c);e&&(Sc(!1),Object.keys(e).forEach((function(t){Ic(c,t,e[t])})),Sc(!0))}function xe(c,e){if(c){for(var t=Object.create(null),n=uc?Reflect.ownKeys(c):Object.keys(c),r=0;r<n.length;r++){var a=n[r];if("__ob__"!==a){var i=c[a].from,s=e;while(s){if(s._provided&&C(s._provided,i)){t[a]=s._provided[i];break}s=s.$parent}if(!s)if("default"in c[a]){var o=c[a].default;t[a]="function"===typeof o?o.call(e):o}else 0}}return t}}function Oe(c,e){if(!c||!c.length)return{};for(var t={},n=0,r=c.length;n<r;n++){var a=c[n],i=a.data;if(i&&i.attrs&&i.attrs.slot&&delete i.attrs.slot,a.context!==e&&a.fnContext!==e||!i||null==i.slot)(t.default||(t.default=[])).push(a);else{var s=i.slot,o=t[s]||(t[s]=[]);"template"===a.tag?o.push.apply(o,a.children||[]):o.push(a)}}for(var l in t)t[l].every(Te)&&delete t[l];return t}function Te(c){return c.isComment&&!c.asyncFactory||" "===c.text}function Ie(c){return c.isComment&&c.asyncFactory}function Ee(c,e,n){var r,a=Object.keys(e).length>0,i=c?!!c.$stable:!a,s=c&&c.$key;if(c){if(c._normalized)return c._normalized;if(i&&n&&n!==t&&s===n.$key&&!a&&!n.$hasNormal)return n;for(var o in r={},c)c[o]&&"$"!==o[0]&&(r[o]=je(e,o,c[o]))}else r={};for(var l in e)l in r||(r[l]=Pe(e,l));return c&&Object.isExtensible(c)&&(c._normalized=r),W(r,"$stable",i),W(r,"$key",s),W(r,"$hasNormal",a),r}function je(c,e,t){var n=function(){var c=arguments.length?t.apply(null,arguments):t({});c=c&&"object"===typeof c&&!Array.isArray(c)?[c]:Le(c);var e=c&&c[0];return c&&(!e||1===c.length&&e.isComment&&!Ie(e))?void 0:c};return t.proxy&&Object.defineProperty(c,e,{get:n,enumerable:!0,configurable:!0}),n}function Pe(c,e){return function(){return c[e]}}function Ne(c,e){var t,n,a,i,s;if(Array.isArray(c)||"string"===typeof c)for(t=new Array(c.length),n=0,a=c.length;n<a;n++)t[n]=e(c[n],n);else if("number"===typeof c)for(t=new Array(c),n=0;n<c;n++)t[n]=e(n+1,n);else if(o(c))if(uc&&c[Symbol.iterator]){t=[];var l=c[Symbol.iterator](),h=l.next();while(!h.done)t.push(e(h.value,t.length)),h=l.next()}else for(i=Object.keys(c),t=new Array(i.length),n=0,a=i.length;n<a;n++)s=i[n],t[n]=e(c[s],s,n);return r(t)||(t=[]),t._isVList=!0,t}function Re(c,e,t,n){var r,a=this.$scopedSlots[c];a?(t=t||{},n&&(t=x(x({},n),t)),r=a(t)||("function"===typeof e?e():e)):r=this.$slots[c]||("function"===typeof e?e():e);var i=t&&t.slot;return i?this.$createElement("template",{slot:i},r):r}function De(c){return Yc(this.$options,"filters",c,!0)||E}function Ze(c,e){return Array.isArray(c)?-1===c.indexOf(e):c!==e}function qe(c,e,t,n,r){var a=q.keyCodes[e]||t;return r&&n&&!q.keyCodes[e]?Ze(r,n):a?Ze(a,c):n?L(n)!==e:void 0===c}function Fe(c,e,t,n,r){if(t)if(o(t)){var a;Array.isArray(t)&&(t=O(t));var i=function(i){if("class"===i||"style"===i||p(i))a=c;else{var s=c.attrs&&c.attrs.type;a=n||q.mustUseProp(e,s,i)?c.domProps||(c.domProps={}):c.attrs||(c.attrs={})}var o=V(i),l=L(i);if(!(o in a)&&!(l in a)&&(a[i]=t[i],r)){var h=c.on||(c.on={});h["update:"+i]=function(c){t[i]=c}}};for(var s in t)i(s)}else;return c}function $e(c,e){var t=this._staticTrees||(this._staticTrees=[]),n=t[c];return n&&!e||(n=t[c]=this.$options.staticRenderFns[c].call(this._renderProxy,null,this),Ue(n,"__static__"+c,!1)),n}function We(c,e,t){return Ue(c,"__once__"+e+(t?"_"+t:""),!0),c}function Ue(c,e,t){if(Array.isArray(c))for(var n=0;n<c.length;n++)c[n]&&"string"!==typeof c[n]&&Be(c[n],e+"_"+n,t);else Be(c,e,t)}function Be(c,e,t){c.isStatic=!0,c.key=e,c.isOnce=t}function Ke(c,e){if(e)if(h(e)){var t=c.on=c.on?x({},c.on):{};for(var n in e){var r=t[n],a=e[n];t[n]=r?[].concat(r,a):a}}else;return c}function Ye(c,e,t,n){e=e||{$stable:!t};for(var r=0;r<c.length;r++){var a=c[r];Array.isArray(a)?Ye(a,e,t):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return n&&(e.$key=n),e}function Ge(c,e){for(var t=0;t<e.length;t+=2){var n=e[t];"string"===typeof n&&n&&(c[e[t]]=e[t+1])}return c}function Qe(c,e){return"string"===typeof c?e+c:c}function Xe(c){c._o=We,c._n=d,c._s=m,c._l=Ne,c._t=Re,c._q=j,c._i=P,c._m=$e,c._f=De,c._k=qe,c._b=Fe,c._v=yc,c._e=Hc,c._u=Ye,c._g=Ke,c._d=Ge,c._p=Qe}function Je(c,e,n,r,i){var s,o=this,l=i.options;C(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var h=a(l._compiled),v=!h;this.data=c,this.props=e,this.children=n,this.parent=r,this.listeners=c.on||t,this.injections=xe(l.inject,r),this.slots=function(){return o.$slots||Ee(c.scopedSlots,o.$slots=Oe(n,r)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ee(c.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ee(c.scopedSlots,this.$slots)),l._scopeId?this._c=function(c,e,t,n){var a=ut(s,c,e,t,n,v);return a&&!Array.isArray(a)&&(a.fnScopeId=l._scopeId,a.fnContext=r),a}:this._c=function(c,e,t,n){return ut(s,c,e,t,n,v)}}function ct(c,e,n,a,i){var s=c.options,o={},l=s.props;if(r(l))for(var h in l)o[h]=Gc(h,l,e||t);else r(n.attrs)&&tt(o,n.attrs),r(n.props)&&tt(o,n.props);var v=new Je(n,o,i,a,c),u=s.render.call(null,v._c,v);if(u instanceof gc)return et(u,n,v.parent,s,v);if(Array.isArray(u)){for(var f=Le(u)||[],m=new Array(f.length),d=0;d<f.length;d++)m[d]=et(f[d],n,v.parent,s,v);return m}}function et(c,e,t,n,r){var a=Vc(c);return a.fnContext=t,a.fnOptions=n,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function tt(c,e){for(var t in e)c[V(t)]=e[t]}Xe(Je.prototype);var nt={init:function(c,e){if(c.componentInstance&&!c.componentInstance._isDestroyed&&c.data.keepAlive){var t=c;nt.prepatch(t,t)}else{var n=c.componentInstance=it(c,kt);n.$mount(e?c.elm:void 0,e)}},prepatch:function(c,e){var t=e.componentOptions,n=e.componentInstance=c.componentInstance;Et(n,t.propsData,t.listeners,e,t.children)},insert:function(c){var e=c.context,t=c.componentInstance;t._isMounted||(t._isMounted=!0,Rt(t,"mounted")),c.data.keepAlive&&(e._isMounted?Xt(t):Pt(t,!0))},destroy:function(c){var e=c.componentInstance;e._isDestroyed||(c.data.keepAlive?Nt(e,!0):e.$destroy())}},rt=Object.keys(nt);function at(c,e,t,i,s){if(!n(c)){var l=t.$options._base;if(o(c)&&(c=l.extend(c)),"function"===typeof c){var h;if(n(c.cid)&&(h=c,c=yt(h,l),void 0===c))return Ht(h,e,t,i,s);e=e||{},yn(c),r(e.model)&&lt(c.options,e);var v=Ve(e,c,s);if(a(c.options.functional))return ct(c,v,e,t,i);var u=e.on;if(e.on=e.nativeOn,a(c.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}st(e);var m=c.options.name||s,d=new gc("vue-component-"+c.cid+(m?"-"+m:""),e,void 0,void 0,void 0,t,{Ctor:c,propsData:v,listeners:u,tag:s,children:i},h);return d}}}function it(c,e){var t={_isComponent:!0,_parentVnode:c,parent:e},n=c.data.inlineTemplate;return r(n)&&(t.render=n.render,t.staticRenderFns=n.staticRenderFns),new c.componentOptions.Ctor(t)}function st(c){for(var e=c.hook||(c.hook={}),t=0;t<rt.length;t++){var n=rt[t],r=e[n],a=nt[n];r===a||r&&r._merged||(e[n]=r?ot(a,r):a)}}function ot(c,e){var t=function(t,n){c(t,n),e(t,n)};return t._merged=!0,t}function lt(c,e){var t=c.model&&c.model.prop||"value",n=c.model&&c.model.event||"input";(e.attrs||(e.attrs={}))[t]=e.model.value;var a=e.on||(e.on={}),i=a[n],s=e.model.callback;r(i)?(Array.isArray(i)?-1===i.indexOf(s):i!==s)&&(a[n]=[s].concat(i)):a[n]=s}var ht=1,vt=2;function ut(c,e,t,n,r,i){return(Array.isArray(t)||s(t))&&(r=n,n=t,t=void 0),a(i)&&(r=vt),ft(c,e,t,n,r)}function ft(c,e,t,n,a){if(r(t)&&r(t.__ob__))return Hc();if(r(t)&&r(t.is)&&(e=t.is),!e)return Hc();var i,s,o;(Array.isArray(n)&&"function"===typeof n[0]&&(t=t||{},t.scopedSlots={default:n[0]},n.length=0),a===vt?n=Le(n):a===ht&&(n=_e(n)),"string"===typeof e)?(s=c.$vnode&&c.$vnode.ns||q.getTagNamespace(e),i=q.isReservedTag(e)?new gc(q.parsePlatformTagName(e),t,n,void 0,void 0,c):t&&t.pre||!r(o=Yc(c.$options,"components",e))?new gc(e,t,n,void 0,void 0,c):at(o,t,c,n,e)):i=at(e,t,c,n);return Array.isArray(i)?i:r(i)?(r(s)&&mt(i,s),r(t)&&dt(t),i):Hc()}function mt(c,e,t){if(c.ns=e,"foreignObject"===c.tag&&(e=void 0,t=!0),r(c.children))for(var i=0,s=c.children.length;i<s;i++){var o=c.children[i];r(o.tag)&&(n(o.ns)||a(t)&&"svg"!==o.tag)&&mt(o,e,t)}}function dt(c){o(c.style)&&pe(c.style),o(c.class)&&pe(c.class)}function zt(c){c._vnode=null,c._staticTrees=null;var e=c.$options,n=c.$vnode=e._parentVnode,r=n&&n.context;c.$slots=Oe(e._renderChildren,r),c.$scopedSlots=t,c._c=function(e,t,n,r){return ut(c,e,t,n,r,!1)},c.$createElement=function(e,t,n,r){return ut(c,e,t,n,r,!0)};var a=n&&n.data;Ic(c,"$attrs",a&&a.attrs||t,null,!0),Ic(c,"$listeners",e._parentListeners||t,null,!0)}var pt,Mt=null;function gt(c){Xe(c.prototype),c.prototype.$nextTick=function(c){return de(c,this)},c.prototype._render=function(){var c,e=this,t=e.$options,n=t.render,r=t._parentVnode;r&&(e.$scopedSlots=Ee(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{Mt=e,c=n.call(e._renderProxy,e.$createElement)}catch(Vi){te(Vi,e,"render"),c=e._vnode}finally{Mt=null}return Array.isArray(c)&&1===c.length&&(c=c[0]),c instanceof gc||(c=Hc()),c.parent=r,c}}function Ct(c,e){return(c.__esModule||uc&&"Module"===c[Symbol.toStringTag])&&(c=c.default),o(c)?e.extend(c):c}function Ht(c,e,t,n,r){var a=Hc();return a.asyncFactory=c,a.asyncMeta={data:e,context:t,children:n,tag:r},a}function yt(c,e){if(a(c.error)&&r(c.errorComp))return c.errorComp;if(r(c.resolved))return c.resolved;var t=Mt;if(t&&r(c.owners)&&-1===c.owners.indexOf(t)&&c.owners.push(t),a(c.loading)&&r(c.loadingComp))return c.loadingComp;if(t&&!r(c.owners)){var i=c.owners=[t],s=!0,l=null,h=null;t.$on("hook:destroyed",(function(){return M(i,t)}));var v=function(c){for(var e=0,t=i.length;e<t;e++)i[e].$forceUpdate();c&&(i.length=0,null!==l&&(clearTimeout(l),l=null),null!==h&&(clearTimeout(h),h=null))},u=N((function(t){c.resolved=Ct(t,e),s?i.length=0:v(!0)})),m=N((function(e){r(c.errorComp)&&(c.error=!0,v(!0))})),d=c(u,m);return o(d)&&(f(d)?n(c.resolved)&&d.then(u,m):f(d.component)&&(d.component.then(u,m),r(d.error)&&(c.errorComp=Ct(d.error,e)),r(d.loading)&&(c.loadingComp=Ct(d.loading,e),0===d.delay?c.loading=!0:l=setTimeout((function(){l=null,n(c.resolved)&&n(c.error)&&(c.loading=!0,v(!1))}),d.delay||200)),r(d.timeout)&&(h=setTimeout((function(){h=null,n(c.resolved)&&m(null)}),d.timeout)))),s=!1,c.loading?c.loadingComp:c.resolved}}function Vt(c){if(Array.isArray(c))for(var e=0;e<c.length;e++){var t=c[e];if(r(t)&&(r(t.componentOptions)||Ie(t)))return t}}function bt(c){c._events=Object.create(null),c._hasHookEvent=!1;var e=c.$options._parentListeners;e&&At(c,e)}function _t(c,e){pt.$on(c,e)}function Lt(c,e){pt.$off(c,e)}function wt(c,e){var t=pt;return function n(){var r=e.apply(null,arguments);null!==r&&t.$off(c,n)}}function At(c,e,t){pt=c,He(e,t||{},_t,Lt,wt,c),pt=void 0}function St(c){var e=/^hook:/;c.prototype.$on=function(c,t){var n=this;if(Array.isArray(c))for(var r=0,a=c.length;r<a;r++)n.$on(c[r],t);else(n._events[c]||(n._events[c]=[])).push(t),e.test(c)&&(n._hasHookEvent=!0);return n},c.prototype.$once=function(c,e){var t=this;function n(){t.$off(c,n),e.apply(t,arguments)}return n.fn=e,t.$on(c,n),t},c.prototype.$off=function(c,e){var t=this;if(!arguments.length)return t._events=Object.create(null),t;if(Array.isArray(c)){for(var n=0,r=c.length;n<r;n++)t.$off(c[n],e);return t}var a,i=t._events[c];if(!i)return t;if(!e)return t._events[c]=null,t;var s=i.length;while(s--)if(a=i[s],a===e||a.fn===e){i.splice(s,1);break}return t},c.prototype.$emit=function(c){var e=this,t=e._events[c];if(t){t=t.length>1?k(t):t;for(var n=k(arguments,1),r='event handler for "'+c+'"',a=0,i=t.length;a<i;a++)ne(t[a],e,n,e,r)}return e}}var kt=null;function xt(c){var e=kt;return kt=c,function(){kt=e}}function Ot(c){var e=c.$options,t=e.parent;if(t&&!e.abstract){while(t.$options.abstract&&t.$parent)t=t.$parent;t.$children.push(c)}c.$parent=t,c.$root=t?t.$root:c,c.$children=[],c.$refs={},c._watcher=null,c._inactive=null,c._directInactive=!1,c._isMounted=!1,c._isDestroyed=!1,c._isBeingDestroyed=!1}function Tt(c){c.prototype._update=function(c,e){var t=this,n=t.$el,r=t._vnode,a=xt(t);t._vnode=c,t.$el=r?t.__patch__(r,c):t.__patch__(t.$el,c,e,!1),a(),n&&(n.__vue__=null),t.$el&&(t.$el.__vue__=t),t.$vnode&&t.$parent&&t.$vnode===t.$parent._vnode&&(t.$parent.$el=t.$el)},c.prototype.$forceUpdate=function(){var c=this;c._watcher&&c._watcher.update()},c.prototype.$destroy=function(){var c=this;if(!c._isBeingDestroyed){Rt(c,"beforeDestroy"),c._isBeingDestroyed=!0;var e=c.$parent;!e||e._isBeingDestroyed||c.$options.abstract||M(e.$children,c),c._watcher&&c._watcher.teardown();var t=c._watchers.length;while(t--)c._watchers[t].teardown();c._data.__ob__&&c._data.__ob__.vmCount--,c._isDestroyed=!0,c.__patch__(c._vnode,null),Rt(c,"destroyed"),c.$off(),c.$el&&(c.$el.__vue__=null),c.$vnode&&(c.$vnode.parent=null)}}}function It(c,e,t){var n;return c.$el=e,c.$options.render||(c.$options.render=Hc),Rt(c,"beforeMount"),n=function(){c._update(c._render(),t)},new tn(c,n,T,{before:function(){c._isMounted&&!c._isDestroyed&&Rt(c,"beforeUpdate")}},!0),t=!1,null==c.$vnode&&(c._isMounted=!0,Rt(c,"mounted")),c}function Et(c,e,n,r,a){var i=r.data.scopedSlots,s=c.$scopedSlots,o=!!(i&&!i.$stable||s!==t&&!s.$stable||i&&c.$scopedSlots.$key!==i.$key||!i&&c.$scopedSlots.$key),l=!!(a||c.$options._renderChildren||o);if(c.$options._parentVnode=r,c.$vnode=r,c._vnode&&(c._vnode.parent=r),c.$options._renderChildren=a,c.$attrs=r.data.attrs||t,c.$listeners=n||t,e&&c.$options.props){Sc(!1);for(var h=c._props,v=c.$options._propKeys||[],u=0;u<v.length;u++){var f=v[u],m=c.$options.props;h[f]=Gc(f,m,e,c)}Sc(!0),c.$options.propsData=e}n=n||t;var d=c.$options._parentListeners;c.$options._parentListeners=n,At(c,n,d),l&&(c.$slots=Oe(a,r.context),c.$forceUpdate())}function jt(c){while(c&&(c=c.$parent))if(c._inactive)return!0;return!1}function Pt(c,e){if(e){if(c._directInactive=!1,jt(c))return}else if(c._directInactive)return;if(c._inactive||null===c._inactive){c._inactive=!1;for(var t=0;t<c.$children.length;t++)Pt(c.$children[t]);Rt(c,"activated")}}function Nt(c,e){if((!e||(c._directInactive=!0,!jt(c)))&&!c._inactive){c._inactive=!0;for(var t=0;t<c.$children.length;t++)Nt(c.$children[t]);Rt(c,"deactivated")}}function Rt(c,e){pc();var t=c.$options[e],n=e+" hook";if(t)for(var r=0,a=t.length;r<a;r++)ne(t[r],c,null,c,n);c._hasHookEvent&&c.$emit("hook:"+e),Mc()}var Dt=[],Zt=[],qt={},Ft=!1,$t=!1,Wt=0;function Ut(){Wt=Dt.length=Zt.length=0,qt={},Ft=$t=!1}var Bt=0,Kt=Date.now;if(G&&!cc){var Yt=window.performance;Yt&&"function"===typeof Yt.now&&Kt()>document.createEvent("Event").timeStamp&&(Kt=function(){return Yt.now()})}function Gt(){var c,e;for(Bt=Kt(),$t=!0,Dt.sort((function(c,e){return c.id-e.id})),Wt=0;Wt<Dt.length;Wt++)c=Dt[Wt],c.before&&c.before(),e=c.id,qt[e]=null,c.run();var t=Zt.slice(),n=Dt.slice();Ut(),Jt(t),Qt(n),lc&&q.devtools&&lc.emit("flush")}function Qt(c){var e=c.length;while(e--){var t=c[e],n=t.vm;n._watcher===t&&n._isMounted&&!n._isDestroyed&&Rt(n,"updated")}}function Xt(c){c._inactive=!1,Zt.push(c)}function Jt(c){for(var e=0;e<c.length;e++)c[e]._inactive=!0,Pt(c[e],!0)}function cn(c){var e=c.id;if(null==qt[e]){if(qt[e]=!0,$t){var t=Dt.length-1;while(t>Wt&&Dt[t].id>c.id)t--;Dt.splice(t+1,0,c)}else Dt.push(c);Ft||(Ft=!0,de(Gt))}}var en=0,tn=function(c,e,t,n,r){this.vm=c,r&&(c._watcher=this),c._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=t,this.id=++en,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new vc,this.newDepIds=new vc,this.expression="","function"===typeof e?this.getter=e:(this.getter=B(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};tn.prototype.get=function(){var c;pc(this);var e=this.vm;try{c=this.getter.call(e,e)}catch(Vi){if(!this.user)throw Vi;te(Vi,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&pe(c),Mc(),this.cleanupDeps()}return c},tn.prototype.addDep=function(c){var e=c.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(c),this.depIds.has(e)||c.addSub(this))},tn.prototype.cleanupDeps=function(){var c=this.deps.length;while(c--){var e=this.deps[c];this.newDepIds.has(e.id)||e.removeSub(this)}var t=this.depIds;this.depIds=this.newDepIds,this.newDepIds=t,this.newDepIds.clear(),t=this.deps,this.deps=this.newDeps,this.newDeps=t,this.newDeps.length=0},tn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():cn(this)},tn.prototype.run=function(){if(this.active){var c=this.get();if(c!==this.value||o(c)||this.deep){var e=this.value;if(this.value=c,this.user){var t='callback for watcher "'+this.expression+'"';ne(this.cb,this.vm,[c,e],this.vm,t)}else this.cb.call(this.vm,c,e)}}},tn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},tn.prototype.depend=function(){var c=this.deps.length;while(c--)this.deps[c].depend()},tn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||M(this.vm._watchers,this);var c=this.deps.length;while(c--)this.deps[c].removeSub(this);this.active=!1}};var nn={enumerable:!0,configurable:!0,get:T,set:T};function rn(c,e,t){nn.get=function(){return this[e][t]},nn.set=function(c){this[e][t]=c},Object.defineProperty(c,t,nn)}function an(c){c._watchers=[];var e=c.$options;e.props&&sn(c,e.props),e.methods&&dn(c,e.methods),e.data?on(c):Tc(c._data={},!0),e.computed&&vn(c,e.computed),e.watch&&e.watch!==ac&&zn(c,e.watch)}function sn(c,e){var t=c.$options.propsData||{},n=c._props={},r=c.$options._propKeys=[],a=!c.$parent;a||Sc(!1);var i=function(a){r.push(a);var i=Gc(a,e,t,c);Ic(n,a,i),a in c||rn(c,"_props",a)};for(var s in e)i(s);Sc(!0)}function on(c){var e=c.$options.data;e=c._data="function"===typeof e?ln(e,c):e||{},h(e)||(e={});var t=Object.keys(e),n=c.$options.props,r=(c.$options.methods,t.length);while(r--){var a=t[r];0,n&&C(n,a)||$(a)||rn(c,"_data",a)}Tc(e,!0)}function ln(c,e){pc();try{return c.call(e,e)}catch(Vi){return te(Vi,e,"data()"),{}}finally{Mc()}}var hn={lazy:!0};function vn(c,e){var t=c._computedWatchers=Object.create(null),n=oc();for(var r in e){var a=e[r],i="function"===typeof a?a:a.get;0,n||(t[r]=new tn(c,i||T,T,hn)),r in c||un(c,r,a)}}function un(c,e,t){var n=!oc();"function"===typeof t?(nn.get=n?fn(e):mn(t),nn.set=T):(nn.get=t.get?n&&!1!==t.cache?fn(e):mn(t.get):T,nn.set=t.set||T),Object.defineProperty(c,e,nn)}function fn(c){return function(){var e=this._computedWatchers&&this._computedWatchers[c];if(e)return e.dirty&&e.evaluate(),dc.target&&e.depend(),e.value}}function mn(c){return function(){return c.call(this,this)}}function dn(c,e){c.$options.props;for(var t in e)c[t]="function"!==typeof e[t]?T:S(e[t],c)}function zn(c,e){for(var t in e){var n=e[t];if(Array.isArray(n))for(var r=0;r<n.length;r++)pn(c,t,n[r]);else pn(c,t,n)}}function pn(c,e,t,n){return h(t)&&(n=t,t=t.handler),"string"===typeof t&&(t=c[t]),c.$watch(e,t,n)}function Mn(c){var e={get:function(){return this._data}},t={get:function(){return this._props}};Object.defineProperty(c.prototype,"$data",e),Object.defineProperty(c.prototype,"$props",t),c.prototype.$set=Ec,c.prototype.$delete=jc,c.prototype.$watch=function(c,e,t){var n=this;if(h(e))return pn(n,c,e,t);t=t||{},t.user=!0;var r=new tn(n,c,e,t);if(t.immediate){var a='callback for immediate watcher "'+r.expression+'"';pc(),ne(e,n,[r.value],n,a),Mc()}return function(){r.teardown()}}}var gn=0;function Cn(c){c.prototype._init=function(c){var e=this;e._uid=gn++,e._isVue=!0,c&&c._isComponent?Hn(e,c):e.$options=Kc(yn(e.constructor),c||{},e),e._renderProxy=e,e._self=e,Ot(e),bt(e),zt(e),Rt(e,"beforeCreate"),ke(e),an(e),Se(e),Rt(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Hn(c,e){var t=c.$options=Object.create(c.constructor.options),n=e._parentVnode;t.parent=e.parent,t._parentVnode=n;var r=n.componentOptions;t.propsData=r.propsData,t._parentListeners=r.listeners,t._renderChildren=r.children,t._componentTag=r.tag,e.render&&(t.render=e.render,t.staticRenderFns=e.staticRenderFns)}function yn(c){var e=c.options;if(c.super){var t=yn(c.super),n=c.superOptions;if(t!==n){c.superOptions=t;var r=Vn(c);r&&x(c.extendOptions,r),e=c.options=Kc(t,c.extendOptions),e.name&&(e.components[e.name]=c)}}return e}function Vn(c){var e,t=c.options,n=c.sealedOptions;for(var r in t)t[r]!==n[r]&&(e||(e={}),e[r]=t[r]);return e}function bn(c){this._init(c)}function _n(c){c.use=function(c){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(c)>-1)return this;var t=k(arguments,1);return t.unshift(this),"function"===typeof c.install?c.install.apply(c,t):"function"===typeof c&&c.apply(null,t),e.push(c),this}}function Ln(c){c.mixin=function(c){return this.options=Kc(this.options,c),this}}function wn(c){c.cid=0;var e=1;c.extend=function(c){c=c||{};var t=this,n=t.cid,r=c._Ctor||(c._Ctor={});if(r[n])return r[n];var a=c.name||t.options.name;var i=function(c){this._init(c)};return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.cid=e++,i.options=Kc(t.options,c),i["super"]=t,i.options.props&&An(i),i.options.computed&&Sn(i),i.extend=t.extend,i.mixin=t.mixin,i.use=t.use,D.forEach((function(c){i[c]=t[c]})),a&&(i.options.components[a]=i),i.superOptions=t.options,i.extendOptions=c,i.sealedOptions=x({},i.options),r[n]=i,i}}function An(c){var e=c.options.props;for(var t in e)rn(c.prototype,"_props",t)}function Sn(c){var e=c.options.computed;for(var t in e)un(c.prototype,t,e[t])}function kn(c){D.forEach((function(e){c[e]=function(c,t){return t?("component"===e&&h(t)&&(t.name=t.name||c,t=this.options._base.extend(t)),"directive"===e&&"function"===typeof t&&(t={bind:t,update:t}),this.options[e+"s"][c]=t,t):this.options[e+"s"][c]}}))}function xn(c){return c&&(c.Ctor.options.name||c.tag)}function On(c,e){return Array.isArray(c)?c.indexOf(e)>-1:"string"===typeof c?c.split(",").indexOf(e)>-1:!!v(c)&&c.test(e)}function Tn(c,e){var t=c.cache,n=c.keys,r=c._vnode;for(var a in t){var i=t[a];if(i){var s=i.name;s&&!e(s)&&In(t,a,n,r)}}}function In(c,e,t,n){var r=c[e];!r||n&&r.tag===n.tag||r.componentInstance.$destroy(),c[e]=null,M(t,e)}Cn(bn),Mn(bn),St(bn),Tt(bn),gt(bn);var En=[String,RegExp,Array],jn={name:"keep-alive",abstract:!0,props:{include:En,exclude:En,max:[String,Number]},methods:{cacheVNode:function(){var c=this,e=c.cache,t=c.keys,n=c.vnodeToCache,r=c.keyToCache;if(n){var a=n.tag,i=n.componentInstance,s=n.componentOptions;e[r]={name:xn(s),tag:a,componentInstance:i},t.push(r),this.max&&t.length>parseInt(this.max)&&In(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var c in this.cache)In(this.cache,c,this.keys)},mounted:function(){var c=this;this.cacheVNode(),this.$watch("include",(function(e){Tn(c,(function(c){return On(e,c)}))})),this.$watch("exclude",(function(e){Tn(c,(function(c){return!On(e,c)}))}))},updated:function(){this.cacheVNode()},render:function(){var c=this.$slots.default,e=Vt(c),t=e&&e.componentOptions;if(t){var n=xn(t),r=this,a=r.include,i=r.exclude;if(a&&(!n||!On(a,n))||i&&n&&On(i,n))return e;var s=this,o=s.cache,l=s.keys,h=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;o[h]?(e.componentInstance=o[h].componentInstance,M(l,h),l.push(h)):(this.vnodeToCache=e,this.keyToCache=h),e.data.keepAlive=!0}return e||c&&c[0]}},Pn={KeepAlive:jn};function Nn(c){var e={get:function(){return q}};Object.defineProperty(c,"config",e),c.util={warn:fc,extend:x,mergeOptions:Kc,defineReactive:Ic},c.set=Ec,c.delete=jc,c.nextTick=de,c.observable=function(c){return Tc(c),c},c.options=Object.create(null),D.forEach((function(e){c.options[e+"s"]=Object.create(null)})),c.options._base=c,x(c.options.components,Pn),_n(c),Ln(c),wn(c),kn(c)}Nn(bn),Object.defineProperty(bn.prototype,"$isServer",{get:oc}),Object.defineProperty(bn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(bn,"FunctionalRenderContext",{value:Je}),bn.version="2.6.14";var Rn=z("style,class"),Dn=z("input,textarea,option,select,progress"),Zn=function(c,e,t){return"value"===t&&Dn(c)&&"button"!==e||"selected"===t&&"option"===c||"checked"===t&&"input"===c||"muted"===t&&"video"===c},qn=z("contenteditable,draggable,spellcheck"),Fn=z("events,caret,typing,plaintext-only"),$n=function(c,e){return Yn(e)||"false"===e?"false":"contenteditable"===c&&Fn(e)?e:"true"},Wn=z("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Un="http://www.w3.org/1999/xlink",Bn=function(c){return":"===c.charAt(5)&&"xlink"===c.slice(0,5)},Kn=function(c){return Bn(c)?c.slice(6,c.length):""},Yn=function(c){return null==c||!1===c};function Gn(c){var e=c.data,t=c,n=c;while(r(n.componentInstance))n=n.componentInstance._vnode,n&&n.data&&(e=Qn(n.data,e));while(r(t=t.parent))t&&t.data&&(e=Qn(e,t.data));return Xn(e.staticClass,e.class)}function Qn(c,e){return{staticClass:Jn(c.staticClass,e.staticClass),class:r(c.class)?[c.class,e.class]:e.class}}function Xn(c,e){return r(c)||r(e)?Jn(c,cr(e)):""}function Jn(c,e){return c?e?c+" "+e:c:e||""}function cr(c){return Array.isArray(c)?er(c):o(c)?tr(c):"string"===typeof c?c:""}function er(c){for(var e,t="",n=0,a=c.length;n<a;n++)r(e=cr(c[n]))&&""!==e&&(t&&(t+=" "),t+=e);return t}function tr(c){var e="";for(var t in c)c[t]&&(e&&(e+=" "),e+=t);return e}var nr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rr=z("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ar=z("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ir=function(c){return rr(c)||ar(c)};function sr(c){return ar(c)?"svg":"math"===c?"math":void 0}var or=Object.create(null);function lr(c){if(!G)return!0;if(ir(c))return!1;if(c=c.toLowerCase(),null!=or[c])return or[c];var e=document.createElement(c);return c.indexOf("-")>-1?or[c]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:or[c]=/HTMLUnknownElement/.test(e.toString())}var hr=z("text,number,password,search,email,tel,url");function vr(c){if("string"===typeof c){var e=document.querySelector(c);return e||document.createElement("div")}return c}function ur(c,e){var t=document.createElement(c);return"select"!==c||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&t.setAttribute("multiple","multiple"),t}function fr(c,e){return document.createElementNS(nr[c],e)}function mr(c){return document.createTextNode(c)}function dr(c){return document.createComment(c)}function zr(c,e,t){c.insertBefore(e,t)}function pr(c,e){c.removeChild(e)}function Mr(c,e){c.appendChild(e)}function gr(c){return c.parentNode}function Cr(c){return c.nextSibling}function Hr(c){return c.tagName}function yr(c,e){c.textContent=e}function Vr(c,e){c.setAttribute(e,"")}var br=Object.freeze({createElement:ur,createElementNS:fr,createTextNode:mr,createComment:dr,insertBefore:zr,removeChild:pr,appendChild:Mr,parentNode:gr,nextSibling:Cr,tagName:Hr,setTextContent:yr,setStyleScope:Vr}),_r={create:function(c,e){Lr(e)},update:function(c,e){c.data.ref!==e.data.ref&&(Lr(c,!0),Lr(e))},destroy:function(c){Lr(c,!0)}};function Lr(c,e){var t=c.data.ref;if(r(t)){var n=c.context,a=c.componentInstance||c.elm,i=n.$refs;e?Array.isArray(i[t])?M(i[t],a):i[t]===a&&(i[t]=void 0):c.data.refInFor?Array.isArray(i[t])?i[t].indexOf(a)<0&&i[t].push(a):i[t]=[a]:i[t]=a}}var wr=new gc("",{},[]),Ar=["create","activate","update","remove","destroy"];function Sr(c,e){return c.key===e.key&&c.asyncFactory===e.asyncFactory&&(c.tag===e.tag&&c.isComment===e.isComment&&r(c.data)===r(e.data)&&kr(c,e)||a(c.isAsyncPlaceholder)&&n(e.asyncFactory.error))}function kr(c,e){if("input"!==c.tag)return!0;var t,n=r(t=c.data)&&r(t=t.attrs)&&t.type,a=r(t=e.data)&&r(t=t.attrs)&&t.type;return n===a||hr(n)&&hr(a)}function xr(c,e,t){var n,a,i={};for(n=e;n<=t;++n)a=c[n].key,r(a)&&(i[a]=n);return i}function Or(c){var e,t,i={},o=c.modules,l=c.nodeOps;for(e=0;e<Ar.length;++e)for(i[Ar[e]]=[],t=0;t<o.length;++t)r(o[t][Ar[e]])&&i[Ar[e]].push(o[t][Ar[e]]);function h(c){return new gc(l.tagName(c).toLowerCase(),{},[],void 0,c)}function v(c,e){function t(){0===--t.listeners&&u(c)}return t.listeners=e,t}function u(c){var e=l.parentNode(c);r(e)&&l.removeChild(e,c)}function f(c,e,t,n,i,s,o){if(r(c.elm)&&r(s)&&(c=s[o]=Vc(c)),c.isRootInsert=!i,!m(c,e,t,n)){var h=c.data,v=c.children,u=c.tag;r(u)?(c.elm=c.ns?l.createElementNS(c.ns,u):l.createElement(u,c),y(c),g(c,v,e),r(h)&&H(c,e),M(t,c.elm,n)):a(c.isComment)?(c.elm=l.createComment(c.text),M(t,c.elm,n)):(c.elm=l.createTextNode(c.text),M(t,c.elm,n))}}function m(c,e,t,n){var i=c.data;if(r(i)){var s=r(c.componentInstance)&&i.keepAlive;if(r(i=i.hook)&&r(i=i.init)&&i(c,!1),r(c.componentInstance))return d(c,e),M(t,c.elm,n),a(s)&&p(c,e,t,n),!0}}function d(c,e){r(c.data.pendingInsert)&&(e.push.apply(e,c.data.pendingInsert),c.data.pendingInsert=null),c.elm=c.componentInstance.$el,C(c)?(H(c,e),y(c)):(Lr(c),e.push(c))}function p(c,e,t,n){var a,s=c;while(s.componentInstance)if(s=s.componentInstance._vnode,r(a=s.data)&&r(a=a.transition)){for(a=0;a<i.activate.length;++a)i.activate[a](wr,s);e.push(s);break}M(t,c.elm,n)}function M(c,e,t){r(c)&&(r(t)?l.parentNode(t)===c&&l.insertBefore(c,e,t):l.appendChild(c,e))}function g(c,e,t){if(Array.isArray(e)){0;for(var n=0;n<e.length;++n)f(e[n],t,c.elm,null,!0,e,n)}else s(c.text)&&l.appendChild(c.elm,l.createTextNode(String(c.text)))}function C(c){while(c.componentInstance)c=c.componentInstance._vnode;return r(c.tag)}function H(c,t){for(var n=0;n<i.create.length;++n)i.create[n](wr,c);e=c.data.hook,r(e)&&(r(e.create)&&e.create(wr,c),r(e.insert)&&t.push(c))}function y(c){var e;if(r(e=c.fnScopeId))l.setStyleScope(c.elm,e);else{var t=c;while(t)r(e=t.context)&&r(e=e.$options._scopeId)&&l.setStyleScope(c.elm,e),t=t.parent}r(e=kt)&&e!==c.context&&e!==c.fnContext&&r(e=e.$options._scopeId)&&l.setStyleScope(c.elm,e)}function V(c,e,t,n,r,a){for(;n<=r;++n)f(t[n],a,c,e,!1,t,n)}function b(c){var e,t,n=c.data;if(r(n))for(r(e=n.hook)&&r(e=e.destroy)&&e(c),e=0;e<i.destroy.length;++e)i.destroy[e](c);if(r(e=c.children))for(t=0;t<c.children.length;++t)b(c.children[t])}function _(c,e,t){for(;e<=t;++e){var n=c[e];r(n)&&(r(n.tag)?(L(n),b(n)):u(n.elm))}}function L(c,e){if(r(e)||r(c.data)){var t,n=i.remove.length+1;for(r(e)?e.listeners+=n:e=v(c.elm,n),r(t=c.componentInstance)&&r(t=t._vnode)&&r(t.data)&&L(t,e),t=0;t<i.remove.length;++t)i.remove[t](c,e);r(t=c.data.hook)&&r(t=t.remove)?t(c,e):e()}else u(c.elm)}function w(c,e,t,a,i){var s,o,h,v,u=0,m=0,d=e.length-1,z=e[0],p=e[d],M=t.length-1,g=t[0],C=t[M],H=!i;while(u<=d&&m<=M)n(z)?z=e[++u]:n(p)?p=e[--d]:Sr(z,g)?(S(z,g,a,t,m),z=e[++u],g=t[++m]):Sr(p,C)?(S(p,C,a,t,M),p=e[--d],C=t[--M]):Sr(z,C)?(S(z,C,a,t,M),H&&l.insertBefore(c,z.elm,l.nextSibling(p.elm)),z=e[++u],C=t[--M]):Sr(p,g)?(S(p,g,a,t,m),H&&l.insertBefore(c,p.elm,z.elm),p=e[--d],g=t[++m]):(n(s)&&(s=xr(e,u,d)),o=r(g.key)?s[g.key]:A(g,e,u,d),n(o)?f(g,a,c,z.elm,!1,t,m):(h=e[o],Sr(h,g)?(S(h,g,a,t,m),e[o]=void 0,H&&l.insertBefore(c,h.elm,z.elm)):f(g,a,c,z.elm,!1,t,m)),g=t[++m]);u>d?(v=n(t[M+1])?null:t[M+1].elm,V(c,v,t,m,M,a)):m>M&&_(e,u,d)}function A(c,e,t,n){for(var a=t;a<n;a++){var i=e[a];if(r(i)&&Sr(c,i))return a}}function S(c,e,t,s,o,h){if(c!==e){r(e.elm)&&r(s)&&(e=s[o]=Vc(e));var v=e.elm=c.elm;if(a(c.isAsyncPlaceholder))r(e.asyncFactory.resolved)?O(c.elm,e,t):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(c.isStatic)&&e.key===c.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=c.componentInstance;else{var u,f=e.data;r(f)&&r(u=f.hook)&&r(u=u.prepatch)&&u(c,e);var m=c.children,d=e.children;if(r(f)&&C(e)){for(u=0;u<i.update.length;++u)i.update[u](c,e);r(u=f.hook)&&r(u=u.update)&&u(c,e)}n(e.text)?r(m)&&r(d)?m!==d&&w(v,m,d,t,h):r(d)?(r(c.text)&&l.setTextContent(v,""),V(v,null,d,0,d.length-1,t)):r(m)?_(m,0,m.length-1):r(c.text)&&l.setTextContent(v,""):c.text!==e.text&&l.setTextContent(v,e.text),r(f)&&r(u=f.hook)&&r(u=u.postpatch)&&u(c,e)}}}function k(c,e,t){if(a(t)&&r(c.parent))c.parent.data.pendingInsert=e;else for(var n=0;n<e.length;++n)e[n].data.hook.insert(e[n])}var x=z("attrs,class,staticClass,staticStyle,key");function O(c,e,t,n){var i,s=e.tag,o=e.data,l=e.children;if(n=n||o&&o.pre,e.elm=c,a(e.isComment)&&r(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(r(o)&&(r(i=o.hook)&&r(i=i.init)&&i(e,!0),r(i=e.componentInstance)))return d(e,t),!0;if(r(s)){if(r(l))if(c.hasChildNodes())if(r(i=o)&&r(i=i.domProps)&&r(i=i.innerHTML)){if(i!==c.innerHTML)return!1}else{for(var h=!0,v=c.firstChild,u=0;u<l.length;u++){if(!v||!O(v,l[u],t,n)){h=!1;break}v=v.nextSibling}if(!h||v)return!1}else g(e,l,t);if(r(o)){var f=!1;for(var m in o)if(!x(m)){f=!0,H(e,t);break}!f&&o["class"]&&pe(o["class"])}}else c.data!==e.text&&(c.data=e.text);return!0}return function(c,e,t,s){if(!n(e)){var o=!1,v=[];if(n(c))o=!0,f(e,v);else{var u=r(c.nodeType);if(!u&&Sr(c,e))S(c,e,v,null,null,s);else{if(u){if(1===c.nodeType&&c.hasAttribute(R)&&(c.removeAttribute(R),t=!0),a(t)&&O(c,e,v))return k(e,v,!0),c;c=h(c)}var m=c.elm,d=l.parentNode(m);if(f(e,v,m._leaveCb?null:d,l.nextSibling(m)),r(e.parent)){var z=e.parent,p=C(e);while(z){for(var M=0;M<i.destroy.length;++M)i.destroy[M](z);if(z.elm=e.elm,p){for(var g=0;g<i.create.length;++g)i.create[g](wr,z);var H=z.data.hook.insert;if(H.merged)for(var y=1;y<H.fns.length;y++)H.fns[y]()}else Lr(z);z=z.parent}}r(d)?_([c],0,0):r(c.tag)&&b(c)}}return k(e,v,o),e.elm}r(c)&&b(c)}}var Tr={create:Ir,update:Ir,destroy:function(c){Ir(c,wr)}};function Ir(c,e){(c.data.directives||e.data.directives)&&Er(c,e)}function Er(c,e){var t,n,r,a=c===wr,i=e===wr,s=Pr(c.data.directives,c.context),o=Pr(e.data.directives,e.context),l=[],h=[];for(t in o)n=s[t],r=o[t],n?(r.oldValue=n.value,r.oldArg=n.arg,Rr(r,"update",e,c),r.def&&r.def.componentUpdated&&h.push(r)):(Rr(r,"bind",e,c),r.def&&r.def.inserted&&l.push(r));if(l.length){var v=function(){for(var t=0;t<l.length;t++)Rr(l[t],"inserted",e,c)};a?ye(e,"insert",v):v()}if(h.length&&ye(e,"postpatch",(function(){for(var t=0;t<h.length;t++)Rr(h[t],"componentUpdated",e,c)})),!a)for(t in s)o[t]||Rr(s[t],"unbind",c,c,i)}var jr=Object.create(null);function Pr(c,e){var t,n,r=Object.create(null);if(!c)return r;for(t=0;t<c.length;t++)n=c[t],n.modifiers||(n.modifiers=jr),r[Nr(n)]=n,n.def=Yc(e.$options,"directives",n.name,!0);return r}function Nr(c){return c.rawName||c.name+"."+Object.keys(c.modifiers||{}).join(".")}function Rr(c,e,t,n,r){var a=c.def&&c.def[e];if(a)try{a(t.elm,c,t,n,r)}catch(Vi){te(Vi,t.context,"directive "+c.name+" "+e+" hook")}}var Dr=[_r,Tr];function Zr(c,e){var t=e.componentOptions;if((!r(t)||!1!==t.Ctor.options.inheritAttrs)&&(!n(c.data.attrs)||!n(e.data.attrs))){var a,i,s,o=e.elm,l=c.data.attrs||{},h=e.data.attrs||{};for(a in r(h.__ob__)&&(h=e.data.attrs=x({},h)),h)i=h[a],s=l[a],s!==i&&qr(o,a,i,e.data.pre);for(a in(cc||tc)&&h.value!==l.value&&qr(o,"value",h.value),l)n(h[a])&&(Bn(a)?o.removeAttributeNS(Un,Kn(a)):qn(a)||o.removeAttribute(a))}}function qr(c,e,t,n){n||c.tagName.indexOf("-")>-1?Fr(c,e,t):Wn(e)?Yn(t)?c.removeAttribute(e):(t="allowfullscreen"===e&&"EMBED"===c.tagName?"true":e,c.setAttribute(e,t)):qn(e)?c.setAttribute(e,$n(e,t)):Bn(e)?Yn(t)?c.removeAttributeNS(Un,Kn(e)):c.setAttributeNS(Un,e,t):Fr(c,e,t)}function Fr(c,e,t){if(Yn(t))c.removeAttribute(e);else{if(cc&&!ec&&"TEXTAREA"===c.tagName&&"placeholder"===e&&""!==t&&!c.__ieph){var n=function(e){e.stopImmediatePropagation(),c.removeEventListener("input",n)};c.addEventListener("input",n),c.__ieph=!0}c.setAttribute(e,t)}}var $r={create:Zr,update:Zr};function Wr(c,e){var t=e.elm,a=e.data,i=c.data;if(!(n(a.staticClass)&&n(a.class)&&(n(i)||n(i.staticClass)&&n(i.class)))){var s=Gn(e),o=t._transitionClasses;r(o)&&(s=Jn(s,cr(o))),s!==t._prevClass&&(t.setAttribute("class",s),t._prevClass=s)}}var Ur,Br={create:Wr,update:Wr},Kr="__r",Yr="__c";function Gr(c){if(r(c[Kr])){var e=cc?"change":"input";c[e]=[].concat(c[Kr],c[e]||[]),delete c[Kr]}r(c[Yr])&&(c.change=[].concat(c[Yr],c.change||[]),delete c[Yr])}function Qr(c,e,t){var n=Ur;return function r(){var a=e.apply(null,arguments);null!==a&&ca(c,r,t,n)}}var Xr=se&&!(rc&&Number(rc[1])<=53);function Jr(c,e,t,n){if(Xr){var r=Bt,a=e;e=a._wrapper=function(c){if(c.target===c.currentTarget||c.timeStamp>=r||c.timeStamp<=0||c.target.ownerDocument!==document)return a.apply(this,arguments)}}Ur.addEventListener(c,e,ic?{capture:t,passive:n}:t)}function ca(c,e,t,n){(n||Ur).removeEventListener(c,e._wrapper||e,t)}function ea(c,e){if(!n(c.data.on)||!n(e.data.on)){var t=e.data.on||{},r=c.data.on||{};Ur=e.elm,Gr(t),He(t,r,Jr,ca,Qr,e.context),Ur=void 0}}var ta,na={create:ea,update:ea};function ra(c,e){if(!n(c.data.domProps)||!n(e.data.domProps)){var t,a,i=e.elm,s=c.data.domProps||{},o=e.data.domProps||{};for(t in r(o.__ob__)&&(o=e.data.domProps=x({},o)),s)t in o||(i[t]="");for(t in o){if(a=o[t],"textContent"===t||"innerHTML"===t){if(e.children&&(e.children.length=0),a===s[t])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===t&&"PROGRESS"!==i.tagName){i._value=a;var l=n(a)?"":String(a);aa(i,l)&&(i.value=l)}else if("innerHTML"===t&&ar(i.tagName)&&n(i.innerHTML)){ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+a+"</svg>";var h=ta.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(a!==s[t])try{i[t]=a}catch(Vi){}}}}function aa(c,e){return!c.composing&&("OPTION"===c.tagName||ia(c,e)||sa(c,e))}function ia(c,e){var t=!0;try{t=document.activeElement!==c}catch(Vi){}return t&&c.value!==e}function sa(c,e){var t=c.value,n=c._vModifiers;if(r(n)){if(n.number)return d(t)!==d(e);if(n.trim)return t.trim()!==e.trim()}return t!==e}var oa={create:ra,update:ra},la=H((function(c){var e={},t=/;(?![^(]*\))/g,n=/:(.+)/;return c.split(t).forEach((function(c){if(c){var t=c.split(n);t.length>1&&(e[t[0].trim()]=t[1].trim())}})),e}));function ha(c){var e=va(c.style);return c.staticStyle?x(c.staticStyle,e):e}function va(c){return Array.isArray(c)?O(c):"string"===typeof c?la(c):c}function ua(c,e){var t,n={};if(e){var r=c;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(t=ha(r.data))&&x(n,t)}(t=ha(c.data))&&x(n,t);var a=c;while(a=a.parent)a.data&&(t=ha(a.data))&&x(n,t);return n}var fa,ma=/^--/,da=/\s*!important$/,za=function(c,e,t){if(ma.test(e))c.style.setProperty(e,t);else if(da.test(t))c.style.setProperty(L(e),t.replace(da,""),"important");else{var n=Ma(e);if(Array.isArray(t))for(var r=0,a=t.length;r<a;r++)c.style[n]=t[r];else c.style[n]=t}},pa=["Webkit","Moz","ms"],Ma=H((function(c){if(fa=fa||document.createElement("div").style,c=V(c),"filter"!==c&&c in fa)return c;for(var e=c.charAt(0).toUpperCase()+c.slice(1),t=0;t<pa.length;t++){var n=pa[t]+e;if(n in fa)return n}}));function ga(c,e){var t=e.data,a=c.data;if(!(n(t.staticStyle)&&n(t.style)&&n(a.staticStyle)&&n(a.style))){var i,s,o=e.elm,l=a.staticStyle,h=a.normalizedStyle||a.style||{},v=l||h,u=va(e.data.style)||{};e.data.normalizedStyle=r(u.__ob__)?x({},u):u;var f=ua(e,!0);for(s in v)n(f[s])&&za(o,s,"");for(s in f)i=f[s],i!==v[s]&&za(o,s,null==i?"":i)}}var Ca={create:ga,update:ga},Ha=/\s+/;function ya(c,e){if(e&&(e=e.trim()))if(c.classList)e.indexOf(" ")>-1?e.split(Ha).forEach((function(e){return c.classList.add(e)})):c.classList.add(e);else{var t=" "+(c.getAttribute("class")||"")+" ";t.indexOf(" "+e+" ")<0&&c.setAttribute("class",(t+e).trim())}}function Va(c,e){if(e&&(e=e.trim()))if(c.classList)e.indexOf(" ")>-1?e.split(Ha).forEach((function(e){return c.classList.remove(e)})):c.classList.remove(e),c.classList.length||c.removeAttribute("class");else{var t=" "+(c.getAttribute("class")||"")+" ",n=" "+e+" ";while(t.indexOf(n)>=0)t=t.replace(n," ");t=t.trim(),t?c.setAttribute("class",t):c.removeAttribute("class")}}function ba(c){if(c){if("object"===typeof c){var e={};return!1!==c.css&&x(e,_a(c.name||"v")),x(e,c),e}return"string"===typeof c?_a(c):void 0}}var _a=H((function(c){return{enterClass:c+"-enter",enterToClass:c+"-enter-to",enterActiveClass:c+"-enter-active",leaveClass:c+"-leave",leaveToClass:c+"-leave-to",leaveActiveClass:c+"-leave-active"}})),La=G&&!ec,wa="transition",Aa="animation",Sa="transition",ka="transitionend",xa="animation",Oa="animationend";La&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Sa="WebkitTransition",ka="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(xa="WebkitAnimation",Oa="webkitAnimationEnd"));var Ta=G?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(c){return c()};function Ia(c){Ta((function(){Ta(c)}))}function Ea(c,e){var t=c._transitionClasses||(c._transitionClasses=[]);t.indexOf(e)<0&&(t.push(e),ya(c,e))}function ja(c,e){c._transitionClasses&&M(c._transitionClasses,e),Va(c,e)}function Pa(c,e,t){var n=Ra(c,e),r=n.type,a=n.timeout,i=n.propCount;if(!r)return t();var s=r===wa?ka:Oa,o=0,l=function(){c.removeEventListener(s,h),t()},h=function(e){e.target===c&&++o>=i&&l()};setTimeout((function(){o<i&&l()}),a+1),c.addEventListener(s,h)}var Na=/\b(transform|all)(,|$)/;function Ra(c,e){var t,n=window.getComputedStyle(c),r=(n[Sa+"Delay"]||"").split(", "),a=(n[Sa+"Duration"]||"").split(", "),i=Da(r,a),s=(n[xa+"Delay"]||"").split(", "),o=(n[xa+"Duration"]||"").split(", "),l=Da(s,o),h=0,v=0;e===wa?i>0&&(t=wa,h=i,v=a.length):e===Aa?l>0&&(t=Aa,h=l,v=o.length):(h=Math.max(i,l),t=h>0?i>l?wa:Aa:null,v=t?t===wa?a.length:o.length:0);var u=t===wa&&Na.test(n[Sa+"Property"]);return{type:t,timeout:h,propCount:v,hasTransform:u}}function Da(c,e){while(c.length<e.length)c=c.concat(c);return Math.max.apply(null,e.map((function(e,t){return Za(e)+Za(c[t])})))}function Za(c){return 1e3*Number(c.slice(0,-1).replace(",","."))}function qa(c,e){var t=c.elm;r(t._leaveCb)&&(t._leaveCb.cancelled=!0,t._leaveCb());var a=ba(c.data.transition);if(!n(a)&&!r(t._enterCb)&&1===t.nodeType){var i=a.css,s=a.type,l=a.enterClass,h=a.enterToClass,v=a.enterActiveClass,u=a.appearClass,f=a.appearToClass,m=a.appearActiveClass,z=a.beforeEnter,p=a.enter,M=a.afterEnter,g=a.enterCancelled,C=a.beforeAppear,H=a.appear,y=a.afterAppear,V=a.appearCancelled,b=a.duration,_=kt,L=kt.$vnode;while(L&&L.parent)_=L.context,L=L.parent;var w=!_._isMounted||!c.isRootInsert;if(!w||H||""===H){var A=w&&u?u:l,S=w&&m?m:v,k=w&&f?f:h,x=w&&C||z,O=w&&"function"===typeof H?H:p,T=w&&y||M,I=w&&V||g,E=d(o(b)?b.enter:b);0;var j=!1!==i&&!ec,P=Wa(O),R=t._enterCb=N((function(){j&&(ja(t,k),ja(t,S)),R.cancelled?(j&&ja(t,A),I&&I(t)):T&&T(t),t._enterCb=null}));c.data.show||ye(c,"insert",(function(){var e=t.parentNode,n=e&&e._pending&&e._pending[c.key];n&&n.tag===c.tag&&n.elm._leaveCb&&n.elm._leaveCb(),O&&O(t,R)})),x&&x(t),j&&(Ea(t,A),Ea(t,S),Ia((function(){ja(t,A),R.cancelled||(Ea(t,k),P||($a(E)?setTimeout(R,E):Pa(t,s,R)))}))),c.data.show&&(e&&e(),O&&O(t,R)),j||P||R()}}}function Fa(c,e){var t=c.elm;r(t._enterCb)&&(t._enterCb.cancelled=!0,t._enterCb());var a=ba(c.data.transition);if(n(a)||1!==t.nodeType)return e();if(!r(t._leaveCb)){var i=a.css,s=a.type,l=a.leaveClass,h=a.leaveToClass,v=a.leaveActiveClass,u=a.beforeLeave,f=a.leave,m=a.afterLeave,z=a.leaveCancelled,p=a.delayLeave,M=a.duration,g=!1!==i&&!ec,C=Wa(f),H=d(o(M)?M.leave:M);0;var y=t._leaveCb=N((function(){t.parentNode&&t.parentNode._pending&&(t.parentNode._pending[c.key]=null),g&&(ja(t,h),ja(t,v)),y.cancelled?(g&&ja(t,l),z&&z(t)):(e(),m&&m(t)),t._leaveCb=null}));p?p(V):V()}function V(){y.cancelled||(!c.data.show&&t.parentNode&&((t.parentNode._pending||(t.parentNode._pending={}))[c.key]=c),u&&u(t),g&&(Ea(t,l),Ea(t,v),Ia((function(){ja(t,l),y.cancelled||(Ea(t,h),C||($a(H)?setTimeout(y,H):Pa(t,s,y)))}))),f&&f(t,y),g||C||y())}}function $a(c){return"number"===typeof c&&!isNaN(c)}function Wa(c){if(n(c))return!1;var e=c.fns;return r(e)?Wa(Array.isArray(e)?e[0]:e):(c._length||c.length)>1}function Ua(c,e){!0!==e.data.show&&qa(e)}var Ba=G?{create:Ua,activate:Ua,remove:function(c,e){!0!==c.data.show?Fa(c,e):e()}}:{},Ka=[$r,Br,na,oa,Ca,Ba],Ya=Ka.concat(Dr),Ga=Or({nodeOps:br,modules:Ya});ec&&document.addEventListener("selectionchange",(function(){var c=document.activeElement;c&&c.vmodel&&ri(c,"input")}));var Qa={inserted:function(c,e,t,n){"select"===t.tag?(n.elm&&!n.elm._vOptions?ye(t,"postpatch",(function(){Qa.componentUpdated(c,e,t)})):Xa(c,e,t.context),c._vOptions=[].map.call(c.options,ei)):("textarea"===t.tag||hr(c.type))&&(c._vModifiers=e.modifiers,e.modifiers.lazy||(c.addEventListener("compositionstart",ti),c.addEventListener("compositionend",ni),c.addEventListener("change",ni),ec&&(c.vmodel=!0)))},componentUpdated:function(c,e,t){if("select"===t.tag){Xa(c,e,t.context);var n=c._vOptions,r=c._vOptions=[].map.call(c.options,ei);if(r.some((function(c,e){return!j(c,n[e])}))){var a=c.multiple?e.value.some((function(c){return ci(c,r)})):e.value!==e.oldValue&&ci(e.value,r);a&&ri(c,"change")}}}};function Xa(c,e,t){Ja(c,e,t),(cc||tc)&&setTimeout((function(){Ja(c,e,t)}),0)}function Ja(c,e,t){var n=e.value,r=c.multiple;if(!r||Array.isArray(n)){for(var a,i,s=0,o=c.options.length;s<o;s++)if(i=c.options[s],r)a=P(n,ei(i))>-1,i.selected!==a&&(i.selected=a);else if(j(ei(i),n))return void(c.selectedIndex!==s&&(c.selectedIndex=s));r||(c.selectedIndex=-1)}}function ci(c,e){return e.every((function(e){return!j(e,c)}))}function ei(c){return"_value"in c?c._value:c.value}function ti(c){c.target.composing=!0}function ni(c){c.target.composing&&(c.target.composing=!1,ri(c.target,"input"))}function ri(c,e){var t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),c.dispatchEvent(t)}function ai(c){return!c.componentInstance||c.data&&c.data.transition?c:ai(c.componentInstance._vnode)}var ii={bind:function(c,e,t){var n=e.value;t=ai(t);var r=t.data&&t.data.transition,a=c.__vOriginalDisplay="none"===c.style.display?"":c.style.display;n&&r?(t.data.show=!0,qa(t,(function(){c.style.display=a}))):c.style.display=n?a:"none"},update:function(c,e,t){var n=e.value,r=e.oldValue;if(!n!==!r){t=ai(t);var a=t.data&&t.data.transition;a?(t.data.show=!0,n?qa(t,(function(){c.style.display=c.__vOriginalDisplay})):Fa(t,(function(){c.style.display="none"}))):c.style.display=n?c.__vOriginalDisplay:"none"}},unbind:function(c,e,t,n,r){r||(c.style.display=c.__vOriginalDisplay)}},si={model:Qa,show:ii},oi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function li(c){var e=c&&c.componentOptions;return e&&e.Ctor.options.abstract?li(Vt(e.children)):c}function hi(c){var e={},t=c.$options;for(var n in t.propsData)e[n]=c[n];var r=t._parentListeners;for(var a in r)e[V(a)]=r[a];return e}function vi(c,e){if(/\d-keep-alive$/.test(e.tag))return c("keep-alive",{props:e.componentOptions.propsData})}function ui(c){while(c=c.parent)if(c.data.transition)return!0}function fi(c,e){return e.key===c.key&&e.tag===c.tag}var mi=function(c){return c.tag||Ie(c)},di=function(c){return"show"===c.name},zi={name:"transition",props:oi,abstract:!0,render:function(c){var e=this,t=this.$slots.default;if(t&&(t=t.filter(mi),t.length)){0;var n=this.mode;0;var r=t[0];if(ui(this.$vnode))return r;var a=li(r);if(!a)return r;if(this._leaving)return vi(c,r);var i="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?i+"comment":i+a.tag:s(a.key)?0===String(a.key).indexOf(i)?a.key:i+a.key:a.key;var o=(a.data||(a.data={})).transition=hi(this),l=this._vnode,h=li(l);if(a.data.directives&&a.data.directives.some(di)&&(a.data.show=!0),h&&h.data&&!fi(a,h)&&!Ie(h)&&(!h.componentInstance||!h.componentInstance._vnode.isComment)){var v=h.data.transition=x({},o);if("out-in"===n)return this._leaving=!0,ye(v,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),vi(c,r);if("in-out"===n){if(Ie(a))return l;var u,f=function(){u()};ye(o,"afterEnter",f),ye(o,"enterCancelled",f),ye(v,"delayLeave",(function(c){u=c}))}}return r}}},pi=x({tag:String,moveClass:String},oi);delete pi.mode;var Mi={props:pi,beforeMount:function(){var c=this,e=this._update;this._update=function(t,n){var r=xt(c);c.__patch__(c._vnode,c.kept,!1,!0),c._vnode=c.kept,r(),e.call(c,t,n)}},render:function(c){for(var e=this.tag||this.$vnode.data.tag||"span",t=Object.create(null),n=this.prevChildren=this.children,r=this.$slots.default||[],a=this.children=[],i=hi(this),s=0;s<r.length;s++){var o=r[s];if(o.tag)if(null!=o.key&&0!==String(o.key).indexOf("__vlist"))a.push(o),t[o.key]=o,(o.data||(o.data={})).transition=i;else;}if(n){for(var l=[],h=[],v=0;v<n.length;v++){var u=n[v];u.data.transition=i,u.data.pos=u.elm.getBoundingClientRect(),t[u.key]?l.push(u):h.push(u)}this.kept=c(e,null,l),this.removed=h}return c(e,null,a)},updated:function(){var c=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";c.length&&this.hasMove(c[0].elm,e)&&(c.forEach(gi),c.forEach(Ci),c.forEach(Hi),this._reflow=document.body.offsetHeight,c.forEach((function(c){if(c.data.moved){var t=c.elm,n=t.style;Ea(t,e),n.transform=n.WebkitTransform=n.transitionDuration="",t.addEventListener(ka,t._moveCb=function c(n){n&&n.target!==t||n&&!/transform$/.test(n.propertyName)||(t.removeEventListener(ka,c),t._moveCb=null,ja(t,e))})}})))},methods:{hasMove:function(c,e){if(!La)return!1;if(this._hasMove)return this._hasMove;var t=c.cloneNode();c._transitionClasses&&c._transitionClasses.forEach((function(c){Va(t,c)})),ya(t,e),t.style.display="none",this.$el.appendChild(t);var n=Ra(t);return this.$el.removeChild(t),this._hasMove=n.hasTransform}}};function gi(c){c.elm._moveCb&&c.elm._moveCb(),c.elm._enterCb&&c.elm._enterCb()}function Ci(c){c.data.newPos=c.elm.getBoundingClientRect()}function Hi(c){var e=c.data.pos,t=c.data.newPos,n=e.left-t.left,r=e.top-t.top;if(n||r){c.data.moved=!0;var a=c.elm.style;a.transform=a.WebkitTransform="translate("+n+"px,"+r+"px)",a.transitionDuration="0s"}}var yi={Transition:zi,TransitionGroup:Mi};bn.config.mustUseProp=Zn,bn.config.isReservedTag=ir,bn.config.isReservedAttr=Rn,bn.config.getTagNamespace=sr,bn.config.isUnknownElement=lr,x(bn.options.directives,si),x(bn.options.components,yi),bn.prototype.__patch__=G?Ga:T,bn.prototype.$mount=function(c,e){return c=c&&G?vr(c):void 0,It(this,c,e)},G&&setTimeout((function(){q.devtools&&lc&&lc.emit("init",bn)}),0),e["a"]=bn}).call(this,t("c8ba"))},"2cf4":function(c,e,t){var n,r,a,i,s=t("da84"),o=t("1626"),l=t("d039"),h=t("0366"),v=t("1be4"),u=t("cc12"),f=t("1cdc"),m=t("605d"),d=s.setImmediate,z=s.clearImmediate,p=s.process,M=s.MessageChannel,g=s.Dispatch,C=0,H={},y="onreadystatechange";try{n=s.location}catch(w){}var V=function(c){if(H.hasOwnProperty(c)){var e=H[c];delete H[c],e()}},b=function(c){return function(){V(c)}},_=function(c){V(c.data)},L=function(c){s.postMessage(String(c),n.protocol+"//"+n.host)};d&&z||(d=function(c){var e=[],t=arguments.length,n=1;while(t>n)e.push(arguments[n++]);return H[++C]=function(){(o(c)?c:Function(c)).apply(void 0,e)},r(C),C},z=function(c){delete H[c]},m?r=function(c){p.nextTick(b(c))}:g&&g.now?r=function(c){g.now(b(c))}:M&&!f?(a=new M,i=a.port2,a.port1.onmessage=_,r=h(i.postMessage,i,1)):s.addEventListener&&o(s.postMessage)&&!s.importScripts&&n&&"file:"!==n.protocol&&!l(L)?(r=L,s.addEventListener("message",_,!1)):r=y in u("script")?function(c){v.appendChild(u("script"))[y]=function(){v.removeChild(this),V(c)}}:function(c){setTimeout(b(c),0)}),c.exports={set:d,clear:z}},"2d00":function(c,e,t){var n,r,a=t("da84"),i=t("342f"),s=a.process,o=a.Deno,l=s&&s.versions||o&&o.version,h=l&&l.v8;h?(n=h.split("."),r=n[0]<4?1:n[0]+n[1]):i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(r=n[1]))),c.exports=r&&+r},"342f":function(c,e,t){var n=t("d066");c.exports=n("navigator","userAgent")||""},"35a1":function(c,e,t){var n=t("f5df"),r=t("dc4a"),a=t("3f8c"),i=t("b622"),s=i("iterator");c.exports=function(c){if(void 0!=c)return r(c,s)||r(c,"@@iterator")||a[n(c)]}},"37e8":function(c,e,t){var n=t("83ab"),r=t("9bf2"),a=t("825a"),i=t("df75");c.exports=n?Object.defineProperties:function(c,e){a(c);var t,n=i(e),s=n.length,o=0;while(s>o)r.f(c,t=n[o++],e[t]);return c}},"3bbe":function(c,e,t){var n=t("1626");c.exports=function(c){if("object"===typeof c||n(c))return c;throw TypeError("Can't set "+String(c)+" as a prototype")}},"3f8c":function(c,e){c.exports={}},4362:function(c,e,t){e.nextTick=function(c){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){c.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(c){throw new Error("No such module. (Possibly not yet loaded)")},function(){var c,n="/";e.cwd=function(){return n},e.chdir=function(e){c||(c=t("df7c")),n=c.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(c,e,t){var n=t("d039"),r=t("c6b6"),a="".split;c.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(c){return"String"==r(c)?a.call(c,""):Object(c)}:Object},"44d2":function(c,e,t){var n=t("b622"),r=t("7c73"),a=t("9bf2"),i=n("unscopables"),s=Array.prototype;void 0==s[i]&&a.f(s,i,{configurable:!0,value:r(null)}),c.exports=function(c){s[i][c]=!0}},"44de":function(c,e,t){var n=t("da84");c.exports=function(c,e){var t=n.console;t&&t.error&&(1===arguments.length?t.error(c):t.error(c,e))}},4840:function(c,e,t){var n=t("825a"),r=t("5087"),a=t("b622"),i=a("species");c.exports=function(c,e){var t,a=n(c).constructor;return void 0===a||void 0==(t=n(a)[i])?e:r(t)}},"485a":function(c,e,t){var n=t("1626"),r=t("861d");c.exports=function(c,e){var t,a;if("string"===e&&n(t=c.toString)&&!r(a=t.call(c)))return a;if(n(t=c.valueOf)&&!r(a=t.call(c)))return a;if("string"!==e&&n(t=c.toString)&&!r(a=t.call(c)))return a;throw TypeError("Can't convert object to primitive value")}},4930:function(c,e,t){var n=t("2d00"),r=t("d039");c.exports=!!Object.getOwnPropertySymbols&&!r((function(){var c=Symbol();return!String(c)||!(Object(c)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"4d64":function(c,e,t){var n=t("fc6a"),r=t("23cb"),a=t("07fa"),i=function(c){return function(e,t,i){var s,o=n(e),l=a(o),h=r(i,l);if(c&&t!=t){while(l>h)if(s=o[h++],s!=s)return!0}else for(;l>h;h++)if((c||h in o)&&o[h]===t)return c||h||0;return!c&&-1}};c.exports={includes:i(!0),indexOf:i(!1)}},"4fc1":function(c,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return h})),t.d(e,"d",(function(){return v}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=[];var r;(function(c){c[c["DEBUG"]=0]="DEBUG",c[c["VERBOSE"]=1]="VERBOSE",c[c["INFO"]=2]="INFO",c[c["WARN"]=3]="WARN",c[c["ERROR"]=4]="ERROR",c[c["SILENT"]=5]="SILENT"})(r||(r={}));const a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},i=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},o=(c,e,...t)=>{if(e<c.logLevel)return;const n=(new Date).toISOString(),r=s[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${n}]  ${c.name}:`,...t)};class l{constructor(c){this.name=c,this._logLevel=i,this._logHandler=o,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in r))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel="string"===typeof c?a[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if("function"!==typeof c)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...c),this._logHandler(this,r.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...c),this._logHandler(this,r.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,r.INFO,...c),this._logHandler(this,r.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,r.WARN,...c),this._logHandler(this,r.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...c),this._logHandler(this,r.ERROR,...c)}}function h(c){n.forEach(e=>{e.setLogLevel(c)})}function v(c,e){for(const t of n){let n=null;e&&e.level&&(n=a[e.level]),t.userLogHandler=null===c?null:(e,t,...a)=>{const i=a.map(c=>{if(null==c)return null;if("string"===typeof c)return c;if("number"===typeof c||"boolean"===typeof c)return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch(e){return null}}).filter(c=>c).join(" ");t>=(null!==n&&void 0!==n?n:e.logLevel)&&c({level:r[t].toLowerCase(),message:i,args:a,type:e.name})}}}},5087:function(c,e,t){var n=t("68ee"),r=t("0d51");c.exports=function(c){if(n(c))return c;throw TypeError(r(c)+" is not a constructor")}},"50c4":function(c,e,t){var n=t("5926"),r=Math.min;c.exports=function(c){return c>0?r(n(c),9007199254740991):0}},"51b0":function(c,e,t){"use strict";(function(c){t.d(e,"a",(function(){return Qi})),t.d(e,"b",(function(){return Fi})),t.d(e,"c",(function(){return Pi})),t.d(e,"d",(function(){return Ri}));var n=t("5606"),r=t("ffa6"),a=t("1fd5"),i=t("4fc1");const s="@firebase/database",o="0.12.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function h(c){l=c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(c){this.domStorage_=c,this.prefix_="firebase:"}set(c,e){null==e?this.domStorage_.removeItem(this.prefixedName_(c)):this.domStorage_.setItem(this.prefixedName_(c),Object(a["C"])(e))}get(c){const e=this.domStorage_.getItem(this.prefixedName_(c));return null==e?null:Object(a["w"])(e)}remove(c){this.domStorage_.removeItem(this.prefixedName_(c))}prefixedName_(c){return this.prefix_+c}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(c,e){null==e?delete this.cache_[c]:this.cache_[c]=e}get(c){return Object(a["j"])(this.cache_,c)?this.cache_[c]:null}remove(c){delete this.cache_[c]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(c){try{if("undefined"!==typeof window&&"undefined"!==typeof window[c]){const e=window[c];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new v(e)}}catch(e){}return new u},m=f("localStorage"),d=f("sessionStorage"),z=new i["b"]("@firebase/database"),p=function(){let c=1;return function(){return c++}}(),M=function(c){const e=Object(a["B"])(c),t=new a["d"];t.update(e);const n=t.digest();return a["h"].encodeByteArray(n)},g=function(...c){let e="";for(let t=0;t<c.length;t++){const n=c[t];Array.isArray(n)||n&&"object"===typeof n&&"number"===typeof n.length?e+=g.apply(null,n):e+="object"===typeof n?Object(a["C"])(n):n,e+=" "}return e};let C=null,H=!0;const y=function(c,e){Object(a["f"])(!e||!0===c||!1===c,"Can't turn on custom loggers persistently."),!0===c?(z.logLevel=i["a"].VERBOSE,C=z.log.bind(z),e&&d.set("logging_enabled",!0)):"function"===typeof c?C=c:(C=null,d.remove("logging_enabled"))},V=function(...c){if(!0===H&&(H=!1,null===C&&!0===d.get("logging_enabled")&&y(!0)),C){const e=g.apply(null,c);C(e)}},b=function(c){return function(...e){V(c,...e)}},_=function(...c){const e="FIREBASE INTERNAL ERROR: "+g(...c);z.error(e)},L=function(...c){const e="FIREBASE FATAL ERROR: "+g(...c);throw z.error(e),new Error(e)},w=function(...c){const e="FIREBASE WARNING: "+g(...c);z.warn(e)},A=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&w("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},S=function(c){return"number"===typeof c&&(c!==c||c===Number.POSITIVE_INFINITY||c===Number.NEGATIVE_INFINITY)},k=function(c){if(Object(a["t"])()||"complete"===document.readyState)c();else{let e=!1;const t=function(){document.body?e||(e=!0,c()):setTimeout(t,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&t()}),window.attachEvent("onload",t))}},x="[MIN_NAME]",O="[MAX_NAME]",T=function(c,e){if(c===e)return 0;if(c===x||e===O)return-1;if(e===x||c===O)return 1;{const t=U(c),n=U(e);return null!==t?null!==n?t-n===0?c.length-e.length:t-n:-1:null!==n?1:c<e?-1:1}},I=function(c,e){return c===e?0:c<e?-1:1},E=function(c,e){if(e&&c in e)return e[c];throw new Error("Missing required key ("+c+") in object: "+Object(a["C"])(e))},j=function(c){if("object"!==typeof c||null===c)return Object(a["C"])(c);const e=[];for(const n in c)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)0!==n&&(t+=","),t+=Object(a["C"])(e[n]),t+=":",t+=j(c[e[n]]);return t+="}",t},P=function(c,e){const t=c.length;if(t<=e)return[c];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(c.substring(r,t)):n.push(c.substring(r,r+e));return n};function N(c,e){for(const t in c)c.hasOwnProperty(t)&&e(t,c[t])}const R=function(c){Object(a["f"])(!S(c),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,i,s,o,l;0===c?(i=0,s=0,r=1/c===-1/0?1:0):(r=c<0,c=Math.abs(c),c>=Math.pow(2,1-n)?(o=Math.min(Math.floor(Math.log(c)/Math.LN2),n),i=o+n,s=Math.round(c*Math.pow(2,t-o)-Math.pow(2,t))):(i=0,s=Math.round(c/Math.pow(2,1-n-t))));const h=[];for(l=t;l;l-=1)h.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(r?1:0),h.reverse();const v=h.join("");let u="";for(l=0;l<64;l+=8){let c=parseInt(v.substr(l,8),2).toString(16);1===c.length&&(c="0"+c),u+=c}return u.toLowerCase()},D=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},Z=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function q(c,e){let t="Unknown Error";"too_big"===c?t="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===c?t="Client doesn't have permission to access the desired data.":"unavailable"===c&&(t="The service is unavailable");const n=new Error(c+" at "+e._path.toString()+": "+t);return n.code=c.toUpperCase(),n}const F=new RegExp("^-?(0*)\\d{1,10}$"),$=-2147483648,W=2147483647,U=function(c){if(F.test(c)){const e=Number(c);if(e>=$&&e<=W)return e}return null},B=function(c){try{c()}catch(e){setTimeout(()=>{const c=e.stack||"";throw w("Exception was thrown by user callback.",c),e},Math.floor(0))}},K=function(){const c="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return c.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(c,e){const t=setTimeout(c,e);return"object"===typeof t&&t["unref"]&&t["unref"](),t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(c,e){this.appName_=c,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then(c=>this.appCheck=c)}getToken(c){return this.appCheck?this.appCheck.getToken(c):new Promise((e,t)=>{setTimeout(()=>{this.appCheck?this.getToken(c).then(e,t):e(null)},0)})}addTokenChangeListener(c){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then(e=>e.addTokenListener(c))}notifyForInvalidToken(){w(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(c,e,t){this.appName_=c,this.firebaseOptions_=e,this.authProvider_=t,this.auth_=null,this.auth_=t.getImmediate({optional:!0}),this.auth_||t.onInit(c=>this.auth_=c)}getToken(c){return this.auth_?this.auth_.getToken(c).catch(c=>c&&"auth/token-not-initialized"===c.code?(V("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(c)):new Promise((e,t)=>{setTimeout(()=>{this.auth_?this.getToken(c).then(e,t):e(null)},0)})}addTokenChangeListener(c){this.auth_?this.auth_.addAuthTokenListener(c):this.authProvider_.get().then(e=>e.addAuthTokenListener(c))}removeTokenChangeListener(c){this.authProvider_.get().then(e=>e.removeAuthTokenListener(c))}notifyForInvalidToken(){let c='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?c+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?c+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':c+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',w(c)}}class X{constructor(c){this.accessToken=c}getToken(c){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(c){c(this.accessToken)}removeTokenChangeListener(c){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="5",cc="v",ec="s",tc="r",nc="f",rc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ac="ls",ic="p",sc="ac",oc="websocket",lc="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{constructor(c,e,t,n,r=!1,a="",i=!1){this.secure=e,this.namespace=t,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=i,this._host=c.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=m.get("host:"+c)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(c){c!==this.internalHost&&(this.internalHost=c,this.isCacheableHost()&&m.set("host:"+this._host,this.internalHost))}toString(){let c=this.toURLString();return this.persistenceKey&&(c+="<"+this.persistenceKey+">"),c}toURLString(){const c=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${c}${this.host}/${e}`}}function vc(c){return c.host!==c.internalHost||c.isCustomHost()||c.includeNamespaceInQueryParams}function uc(c,e,t){let n;if(Object(a["f"])("string"===typeof e,"typeof type must == string"),Object(a["f"])("object"===typeof t,"typeof params must == object"),e===oc)n=(c.secure?"wss://":"ws://")+c.internalHost+"/.ws?";else{if(e!==lc)throw new Error("Unknown connection type: "+e);n=(c.secure?"https://":"http://")+c.internalHost+"/.lp?"}vc(c)&&(t["ns"]=c.namespace);const r=[];return N(t,(c,e)=>{r.push(c+"="+e)}),n+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.counters_={}}incrementCounter(c,e=1){Object(a["j"])(this.counters_,c)||(this.counters_[c]=0),this.counters_[c]+=e}get(){return Object(a["l"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc={},dc={};function zc(c){const e=c.toString();return mc[e]||(mc[e]=new fc),mc[e]}function pc(c,e){const t=c.toString();return dc[t]||(dc[t]=e()),dc[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(c){this.onMessage_=c,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(c,e){this.closeAfterResponse=c,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(c,e){this.pendingResponses[c]=e;while(this.pendingResponses[this.currentResponseNum]){const c=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<c.length;++e)c[e]&&B(()=>{this.onMessage_(c[e])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="start",Cc="close",Hc="pLPCommand",yc="pRTLPCB",Vc="id",bc="pw",_c="ser",Lc="cb",wc="seg",Ac="ts",Sc="d",kc="dframe",xc=1870,Oc=30,Tc=xc-Oc,Ic=25e3,Ec=3e4;class jc{constructor(c,e,t,n,r,a,i){this.connId=c,this.repoInfo=e,this.applicationId=t,this.appCheckToken=n,this.authToken=r,this.transportSessionId=a,this.lastSessionId=i,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=b(c),this.stats_=zc(e),this.urlFn=c=>(this.appCheckToken&&(c[sc]=this.appCheckToken),uc(e,lc,c))}open(c,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new Mc(c),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ec)),k(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pc((...c)=>{const[e,t,n,r,a]=c;if(this.incrementIncomingBytes_(c),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===gc)this.id=t,this.password=n;else{if(e!==Cc)throw new Error("Unrecognized command received: "+e);t?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(t,()=>{this.onClosed_()})):this.onClosed_()}},(...c)=>{const[e,t]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(e,t)},()=>{this.onClosed_()},this.urlFn);const c={};c[gc]="t",c[_c]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(c[Lc]=this.scriptTagHolder.uniqueCallbackIdentifier),c[cc]=J,this.transportSessionId&&(c[ec]=this.transportSessionId),this.lastSessionId&&(c[ac]=this.lastSessionId),this.applicationId&&(c[ic]=this.applicationId),this.appCheckToken&&(c[sc]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&rc.test(location.hostname)&&(c[tc]=nc);const e=this.urlFn(c);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jc.forceAllow_=!0}static forceDisallow(){jc.forceDisallow_=!0}static isAvailable(){return!Object(a["t"])()&&(!!jc.forceAllow_||!jc.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!D()&&!Z())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(c){const e=Object(a["C"])(c);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const t=Object(a["i"])(e),n=P(t,Tc);for(let r=0;r<n.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[r]),this.curSegmentNum++}addDisconnectPingFrame(c,e){if(Object(a["t"])())return;this.myDisconnFrame=document.createElement("iframe");const t={};t[kc]="t",t[Vc]=c,t[bc]=e,this.myDisconnFrame.src=this.urlFn(t),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(c){const e=Object(a["C"])(c).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Pc{constructor(c,e,t,n){if(this.onDisconnect=t,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(a["t"])())this.commandCB=c,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=p(),window[Hc+this.uniqueCallbackIdentifier]=c,window[yc+this.uniqueCallbackIdentifier]=e,this.myIFrame=Pc.createIFrame_();let t="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const c=document.domain;t='<script>document.domain="'+c+'";<\/script>'}const n="<html><body>"+t+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(r){V("frame writing exception"),r.stack&&V(r.stack),V(r)}}}static createIFrame_(){const c=document.createElement("iframe");if(c.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(c);try{const e=c.contentWindow.document;e||V("No IE domain setting required")}catch(e){const t=document.domain;c.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return c.contentDocument?c.doc=c.contentDocument:c.contentWindow?c.doc=c.contentWindow.document:c.document&&(c.doc=c.document),c}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const c=this.onDisconnect;c&&(this.onDisconnect=null,c())}startLongPoll(c,e){this.myID=c,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const c={};c[Vc]=this.myID,c[bc]=this.myPW,c[_c]=this.currentSerial;let e=this.urlFn(c),t="",n=0;while(this.pendingSegs.length>0){const c=this.pendingSegs[0];if(!(c.d.length+Oc+t.length<=xc))break;{const c=this.pendingSegs.shift();t=t+"&"+wc+n+"="+c.seg+"&"+Ac+n+"="+c.ts+"&"+Sc+n+"="+c.d,n++}}return e+=t,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(c,e,t){this.pendingSegs.push({seg:c,ts:e,d:t}),this.alive&&this.newRequest_()}addLongPollTag_(c,e){this.outstandingRequests.add(e);const t=()=>{this.outstandingRequests.delete(e),this.newRequest_()},n=setTimeout(t,Math.floor(Ic)),r=()=>{clearTimeout(n),t()};this.addTag(c,r)}addTag(c,e){Object(a["t"])()?this.doNodeLongPoll(c,e):setTimeout(()=>{try{if(!this.sendNewPolls)return;const t=this.myIFrame.doc.createElement("script");t.type="text/javascript",t.async=!0,t.src=c,t.onload=t.onreadystatechange=function(){const c=t.readyState;c&&"loaded"!==c&&"complete"!==c||(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),e())},t.onerror=()=>{V("Long-poll script failed to load: "+c),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(t)}catch(t){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=16384,Rc=45e3;let Dc=null;"undefined"!==typeof MozWebSocket?Dc=MozWebSocket:"undefined"!==typeof WebSocket&&(Dc=WebSocket);class Zc{constructor(c,e,t,n,r,a,i){this.connId=c,this.applicationId=t,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=b(this.connId),this.stats_=zc(e),this.connURL=Zc.connectionURL_(e,a,i,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(c,e,t,n){const r={};return r[cc]=J,!Object(a["t"])()&&"undefined"!==typeof location&&location.hostname&&rc.test(location.hostname)&&(r[tc]=nc),e&&(r[ec]=e),t&&(r[ac]=t),n&&(r[sc]=n),uc(c,oc,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,m.set("previous_websocket_failure",!0);try{if(Object(a["t"])()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${J}/${l}/${c.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n=Object({NODE_ENV:"production",BASE_URL:""}),r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(t["proxy"]={origin:r}),this.mySock=new Dc(this.connURL,[],t)}else{const c={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Dc(this.connURL,[],c)}}catch(n){this.log_("Error instantiating WebSocket.");const c=n.message||n.data;return c&&this.log_(c),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=c=>{this.handleIncomingFrame(c)},this.mySock.onerror=c=>{this.log_("WebSocket error.  Closing connection.");const e=c.message||c.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Zc.forceDisallow_=!0}static isAvailable(){let c=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,t=navigator.userAgent.match(e);t&&t.length>1&&parseFloat(t[1])<4.4&&(c=!0)}return!c&&null!==Dc&&!Zc.forceDisallow_}static previouslyFailed(){return m.isInMemoryStorage||!0===m.get("previous_websocket_failure")}markConnectionHealthy(){m.remove("previous_websocket_failure")}appendFrame_(c){if(this.frames.push(c),this.frames.length===this.totalFrames){const c=this.frames.join("");this.frames=null;const e=Object(a["w"])(c);this.onMessage(e)}}handleNewFrameCount_(c){this.totalFrames=c,this.frames=[]}extractFrameCount_(c){if(Object(a["f"])(null===this.frames,"We already have a frame buffer"),c.length<=6){const e=Number(c);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),c}handleIncomingFrame(c){if(null===this.mySock)return;const e=c["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const c=this.extractFrameCount_(e);null!==c&&this.appendFrame_(c)}}send(c){this.resetKeepAlive();const e=Object(a["C"])(c);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const t=P(e,Nc);t.length>1&&this.sendString_(String(t.length));for(let n=0;n<t.length;n++)this.sendString_(t[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rc))}sendString_(c){try{this.mySock.send(c)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zc.responsesRequiredToBeHealthy=2,Zc.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qc{constructor(c){this.initTransports_(c)}static get ALL_TRANSPORTS(){return[jc,Zc]}initTransports_(c){const e=Zc&&Zc["isAvailable"]();let t=e&&!Zc.previouslyFailed();if(c.webSocketOnly&&(e||w("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),t=!0),t)this.transports_=[Zc];else{const c=this.transports_=[];for(const e of qc.ALL_TRANSPORTS)e&&e["isAvailable"]()&&c.push(e)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=6e4,$c=5e3,Wc=10240,Uc=102400,Bc="t",Kc="d",Yc="s",Gc="r",Qc="e",Xc="o",Jc="a",ce="n",ee="p",te="h";class ne{constructor(c,e,t,n,r,a,i,s,o,l){this.id=c,this.repoInfo_=e,this.applicationId_=t,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=a,this.onReady_=i,this.onDisconnect_=s,this.onKill_=o,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=b("c:"+this.id+":"),this.transportManager_=new qc(e),this.log_("Connection created"),this.start_()}start_(){const c=this.transportManager_.initialTransport();this.conn_=new c(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=c["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),t=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,t)},Math.floor(0));const n=c["healthyTimeout"]||0;n>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Uc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(c){return e=>{c===this.conn_?this.onConnectionLost_(e):c===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(c){return e=>{2!==this.state_&&(c===this.rx_?this.onPrimaryMessageReceived_(e):c===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(c){const e={t:"d",d:c};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(c){if(Bc in c){const e=c[Bc];e===Jc?this.upgradeIfSecondaryHealthy_():e===Gc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Xc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(c){const e=E("t",c),t=E("d",c);if("c"===e)this.onSecondaryControl_(t);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(t)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ce,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(c){const e=E("t",c),t=E("d",c);"c"===e?this.onControl_(t):"d"===e&&this.onDataMessage_(t)}onDataMessage_(c){this.onPrimaryResponse_(),this.onMessage_(c)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(c){const e=E(Bc,c);if(Kc in c){const t=c[Kc];if(e===te)this.onHandshake_(t);else if(e===ce){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let c=0;c<this.pendingDataMessages.length;++c)this.onDataMessage_(this.pendingDataMessages[c]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Yc?this.onConnectionShutdown_(t):e===Gc?this.onReset_(t):e===Qc?_("Server Error: "+t):e===Xc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_("Unknown control packet command: "+e)}}onHandshake_(c){const e=c.ts,t=c.v,n=c.h;this.sessionId=c.s,this.repoInfo_.host=n,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),J!==t&&w("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const c=this.transportManager_.upgradeTransport();c&&this.startUpgrade_(c)}startUpgrade_(c){this.secondaryConn_=new c(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=c["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),t=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,t),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Fc))}onReset_(c){this.log_("Reset packet received.  New host: "+c),this.repoInfo_.host=c,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(c,e){this.log_("Realtime connection established."),this.conn_=c,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($c))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const c=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==c&&this.rx_!==c||this.close()}onConnectionLost_(c){this.conn_=null,c||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(m.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(c){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(c),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(c){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(c)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{put(c,e,t,n){}merge(c,e,t,n){}refreshAuthToken(c){}refreshAppCheckToken(c){}onDisconnectPut(c,e,t){}onDisconnectMerge(c,e,t){}onDisconnectCancel(c,e){}reportStats(c){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(c){this.allowedEvents_=c,this.listeners_={},Object(a["f"])(Array.isArray(c)&&c.length>0,"Requires a non-empty array")}trigger(c,...e){if(Array.isArray(this.listeners_[c])){const t=[...this.listeners_[c]];for(let c=0;c<t.length;c++)t[c].callback.apply(t[c].context,e)}}on(c,e,t){this.validateEventType_(c),this.listeners_[c]=this.listeners_[c]||[],this.listeners_[c].push({callback:e,context:t});const n=this.getInitialEvent(c);n&&e.apply(t,n)}off(c,e,t){this.validateEventType_(c);const n=this.listeners_[c]||[];for(let r=0;r<n.length;r++)if(n[r].callback===e&&(!t||t===n[r].context))return void n.splice(r,1)}validateEventType_(c){Object(a["f"])(this.allowedEvents_.find(e=>e===c),"Unknown event: "+c)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends ae{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(a["s"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ie}getInitialEvent(c){return Object(a["f"])("online"===c,"Unknown event type: "+c),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=32,oe=768;class le{constructor(c,e){if(void 0===e){this.pieces_=c.split("/");let e=0;for(let c=0;c<this.pieces_.length;c++)this.pieces_[c].length>0&&(this.pieces_[e]=this.pieces_[c],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=c,this.pieceNum_=e}toString(){let c="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(c+="/"+this.pieces_[e]);return c||"/"}}function he(){return new le("")}function ve(c){return c.pieceNum_>=c.pieces_.length?null:c.pieces_[c.pieceNum_]}function ue(c){return c.pieces_.length-c.pieceNum_}function fe(c){let e=c.pieceNum_;return e<c.pieces_.length&&e++,new le(c.pieces_,e)}function me(c){return c.pieceNum_<c.pieces_.length?c.pieces_[c.pieces_.length-1]:null}function de(c){let e="";for(let t=c.pieceNum_;t<c.pieces_.length;t++)""!==c.pieces_[t]&&(e+="/"+encodeURIComponent(String(c.pieces_[t])));return e||"/"}function ze(c,e=0){return c.pieces_.slice(c.pieceNum_+e)}function pe(c){if(c.pieceNum_>=c.pieces_.length)return null;const e=[];for(let t=c.pieceNum_;t<c.pieces_.length-1;t++)e.push(c.pieces_[t]);return new le(e,0)}function Me(c,e){const t=[];for(let n=c.pieceNum_;n<c.pieces_.length;n++)t.push(c.pieces_[n]);if(e instanceof le)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const c=e.split("/");for(let e=0;e<c.length;e++)c[e].length>0&&t.push(c[e])}return new le(t,0)}function ge(c){return c.pieceNum_>=c.pieces_.length}function Ce(c,e){const t=ve(c),n=ve(e);if(null===t)return e;if(t===n)return Ce(fe(c),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+c+")")}function He(c,e){if(ue(c)!==ue(e))return!1;for(let t=c.pieceNum_,n=e.pieceNum_;t<=c.pieces_.length;t++,n++)if(c.pieces_[t]!==e.pieces_[n])return!1;return!0}function ye(c,e){let t=c.pieceNum_,n=e.pieceNum_;if(ue(c)>ue(e))return!1;while(t<c.pieces_.length){if(c.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class Ve{constructor(c,e){this.errorPrefix_=e,this.parts_=ze(c,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=Object(a["A"])(this.parts_[t]);Le(this)}}function be(c,e){c.parts_.length>0&&(c.byteLength_+=1),c.parts_.push(e),c.byteLength_+=Object(a["A"])(e),Le(c)}function _e(c){const e=c.parts_.pop();c.byteLength_-=Object(a["A"])(e),c.parts_.length>0&&(c.byteLength_-=1)}function Le(c){if(c.byteLength_>oe)throw new Error(c.errorPrefix_+"has a key path longer than "+oe+" bytes ("+c.byteLength_+").");if(c.parts_.length>se)throw new Error(c.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+se+") or object contains a cycle "+we(c))}function we(c){return 0===c.parts_.length?"":"in property '"+c.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends ae{constructor(){let c,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",c="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",c="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",c="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",c="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const e=!document[c];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new Ae}getInitialEvent(c){return Object(a["f"])("visible"===c,"Unknown event type: "+c),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1e3,ke=3e5,xe=3e3,Oe=3e4,Te=1.3,Ie=3e4,Ee="server_kill",je=3;class Pe extends re{constructor(c,e,t,n,r,i,s,o){if(super(),this.repoInfo_=c,this.applicationId_=e,this.onDataUpdate_=t,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.authOverride_=o,this.id=Pe.nextPersistentConnectionId_++,this.log_=b("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Se,this.maxReconnectDelay_=ke,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!Object(a["t"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ae.getInstance().on("visible",this.onVisible_,this),-1===c.host.indexOf("fblocal")&&ie.getInstance().on("online",this.onOnline_,this)}sendRequest(c,e,t){const n=++this.requestNumber_,r={r:n,a:c,b:e};this.log_(Object(a["C"])(r)),Object(a["f"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),t&&(this.requestCBHash_[n]=t)}get(c){this.initConnection_();const e=new a["a"],t={p:c._path.toString(),q:c._queryObject},n={action:"g",request:t,onComplete:c=>{const n=c["d"];"ok"===c["s"]?(this.onDataUpdate_(t["p"],n,!1,null),e.resolve(n)):e.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const c=this.outstandingGets_[r];void 0!==c&&n===c&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),e.reject(new Error("Client is offline.")))},xe),this.connected_&&this.sendGet_(r),e.promise}listen(c,e,t,n){this.initConnection_();const r=c._queryIdentifier,i=c._path.toString();this.log_("Listen called for "+i+" "+r),this.listens.has(i)||this.listens.set(i,new Map),Object(a["f"])(c._queryParams.isDefault()||!c._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(a["f"])(!this.listens.get(i).has(r),"listen() called twice for same path/queryId.");const s={onComplete:n,hashFn:e,query:c,tag:t};this.listens.get(i).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(c){const e=this.outstandingGets_[c];this.sendRequest("g",e.request,t=>{delete this.outstandingGets_[c],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(t)})}sendListen_(c){const e=c.query,t=e._path.toString(),n=e._queryIdentifier;this.log_("Listen on "+t+" for "+n);const r={p:t},a="q";c.tag&&(r["q"]=e._queryObject,r["t"]=c.tag),r["h"]=c.hashFn(),this.sendRequest(a,r,r=>{const a=r["d"],i=r["s"];Pe.warnOnListenWarnings_(a,e);const s=this.listens.get(t)&&this.listens.get(t).get(n);s===c&&(this.log_("listen response",r),"ok"!==i&&this.removeListen_(t,n),c.onComplete&&c.onComplete(i,a))})}static warnOnListenWarnings_(c,e){if(c&&"object"===typeof c&&Object(a["j"])(c,"w")){const t=Object(a["z"])(c,"w");if(Array.isArray(t)&&~t.indexOf("no_index")){const c='".indexOn": "'+e._queryParams.getIndex().toString()+'"',t=e._path.toString();w(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${c} at `+t+" to your security rules for better performance.")}}}refreshAuthToken(c){this.authToken_=c,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(c)}reduceReconnectDelayIfAdminCredential_(c){const e=c&&40===c.length;(e||Object(a["p"])(c))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Oe)}refreshAppCheckToken(c){this.appCheckToken_=c,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const c=this.authToken_,e=Object(a["v"])(c)?"auth":"gauth",t={cred:c};null===this.authOverride_?t["noauth"]=!0:"object"===typeof this.authOverride_&&(t["authvar"]=this.authOverride_),this.sendRequest(e,t,e=>{const t=e["s"],n=e["d"]||"error";this.authToken_===c&&("ok"===t?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(t,n))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},c=>{const e=c["s"],t=c["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,t)})}unlisten(c,e){const t=c._path.toString(),n=c._queryIdentifier;this.log_("Unlisten called for "+t+" "+n),Object(a["f"])(c._queryParams.isDefault()||!c._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(t,n);r&&this.connected_&&this.sendUnlisten_(t,n,c._queryObject,e)}sendUnlisten_(c,e,t,n){this.log_("Unlisten on "+c+" for "+e);const r={p:c},a="n";n&&(r["q"]=t,r["t"]=n),this.sendRequest(a,r)}onDisconnectPut(c,e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",c,e,t):this.onDisconnectRequestQueue_.push({pathString:c,action:"o",data:e,onComplete:t})}onDisconnectMerge(c,e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",c,e,t):this.onDisconnectRequestQueue_.push({pathString:c,action:"om",data:e,onComplete:t})}onDisconnectCancel(c,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",c,null,e):this.onDisconnectRequestQueue_.push({pathString:c,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(c,e,t,n){const r={p:e,d:t};this.log_("onDisconnect "+c,r),this.sendRequest(c,r,c=>{n&&setTimeout(()=>{n(c["s"],c["d"])},Math.floor(0))})}put(c,e,t,n){this.putInternal("p",c,e,t,n)}merge(c,e,t,n){this.putInternal("m",c,e,t,n)}putInternal(c,e,t,n,r){this.initConnection_();const a={p:e,d:t};void 0!==r&&(a["h"]=r),this.outstandingPuts_.push({action:c,request:a,onComplete:n}),this.outstandingPutCount_++;const i=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(i):this.log_("Buffering put: "+e)}sendPut_(c){const e=this.outstandingPuts_[c].action,t=this.outstandingPuts_[c].request,n=this.outstandingPuts_[c].onComplete;this.outstandingPuts_[c].queued=this.connected_,this.sendRequest(e,t,t=>{this.log_(e+" response",t),delete this.outstandingPuts_[c],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(t["s"],t["d"])})}reportStats(c){if(this.connected_){const e={c:c};this.log_("reportStats",e),this.sendRequest("s",e,c=>{const e=c["s"];if("ok"!==e){const e=c["d"];this.log_("reportStats","Error sending stats: "+e)}})}}onDataMessage_(c){if("r"in c){this.log_("from server: "+Object(a["C"])(c));const e=c["r"],t=this.requestCBHash_[e];t&&(delete this.requestCBHash_[e],t(c["b"]))}else{if("error"in c)throw"A server-side error has occurred: "+c["error"];"a"in c&&this.onDataPush_(c["a"],c["b"])}}onDataPush_(c,e){this.log_("handleServerMessage",c,e),"d"===c?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===c?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===c?this.onListenRevoked_(e["p"],e["q"]):"ac"===c?this.onAuthRevoked_(e["s"],e["d"]):"apc"===c?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===c?this.onSecurityDebugPacket_(e):_("Unrecognized action received from server: "+Object(a["C"])(c)+"\nAre you using the latest client?")}onReady_(c,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(c),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(c){Object(a["f"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(c))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(c){c&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Se,this.realtime_||this.scheduleConnect_(0)),this.visible_=c}onOnline_(c){c?(this.log_("Browser went online."),this.reconnectDelay_=Se,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const c=(new Date).getTime()-this.lastConnectionEstablishedTime_;c>Ie&&(this.reconnectDelay_=Se),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const c=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-c);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Te)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const c=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),t=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+Pe.nextConnectionId_++,r=this.lastSessionId;let i=!1,s=null;const o=function(){s?s.close():(i=!0,t())},l=function(c){Object(a["f"])(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(c)};this.realtime_={close:o,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,o]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);i?V("getToken() completed but was canceled"):(V("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=o&&o.token,s=new ne(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,c,e,t,c=>{w(c+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ee)},r))}catch(_){this.log_("Failed to get token: "+_),i||(this.repoInfo_.nodeAdmin&&w(_),o())}}}interrupt(c){V("Interrupting connection for reason: "+c),this.interruptReasons_[c]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(c){V("Resuming connection for reason: "+c),delete this.interruptReasons_[c],Object(a["q"])(this.interruptReasons_)&&(this.reconnectDelay_=Se,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(c){const e=c-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let c=0;c<this.outstandingPuts_.length;c++){const e=this.outstandingPuts_[c];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[c],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(c,e){let t;t=e?e.map(c=>j(c)).join("$"):"default";const n=this.removeListen_(c,t);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(c,e){const t=new le(c).toString();let n;if(this.listens.has(t)){const c=this.listens.get(t);n=c.get(e),c.delete(e),0===c.size&&this.listens.delete(t)}else n=void 0;return n}onAuthRevoked_(c,e){V("Auth token revoked: "+c+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==c&&"permission_denied"!==c||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=je&&(this.reconnectDelay_=Oe,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(c,e){V("App check token revoked: "+c+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==c&&"permission_denied"!==c||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=je&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(c){this.securityDebugCallback_?this.securityDebugCallback_(c):"msg"in c&&console.log("FIREBASE: "+c["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const c of this.listens.values())for(const e of c.values())this.sendListen_(e);for(let c=0;c<this.outstandingPuts_.length;c++)this.outstandingPuts_[c]&&this.sendPut_(c);while(this.onDisconnectRequestQueue_.length){const c=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(c.action,c.pathString,c.data,c.onComplete)}for(let c=0;c<this.outstandingGets_.length;c++)this.outstandingGets_[c]&&this.sendGet_(c)}sendConnectStats_(){const c={};let e="js";Object(a["t"])()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),c["sdk."+e+"."+l.replace(/\./g,"-")]=1,Object(a["s"])()?c["framework.cordova"]=1:Object(a["u"])()&&(c["framework.reactnative"]=1),this.reportStats(c)}shouldReconnect_(){const c=ie.getInstance().currentlyOnline();return Object(a["q"])(this.interruptReasons_)&&c}}Pe.nextPersistentConnectionId_=0,Pe.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(c,e){this.name=c,this.node=e}static Wrap(c,e){return new Ne(c,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{getCompare(){return this.compare.bind(this)}indexedValueChanged(c,e){const t=new Ne(x,c),n=new Ne(x,e);return 0!==this.compare(t,n)}minPost(){return Ne.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De;class Ze extends Re{static get __EMPTY_NODE(){return De}static set __EMPTY_NODE(c){De=c}compare(c,e){return T(c.name,e.name)}isDefinedOn(c){throw Object(a["g"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(c,e){return!1}minPost(){return Ne.MIN}maxPost(){return new Ne(O,De)}makePost(c,e){return Object(a["f"])("string"===typeof c,"KeyIndex indexValue must always be a string."),new Ne(c,De)}toString(){return".key"}}const qe=new Ze;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(c,e,t,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let a=1;while(!c.isEmpty())if(c=c,a=e?t(c.key,e):1,n&&(a*=-1),a<0)c=this.isReverse_?c.left:c.right;else{if(0===a){this.nodeStack_.push(c);break}this.nodeStack_.push(c),c=this.isReverse_?c.right:c.left}}getNext(){if(0===this.nodeStack_.length)return null;let c,e=this.nodeStack_.pop();if(c=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return c}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const c=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(c.key,c.value):{key:c.key,value:c.value}}}class $e{constructor(c,e,t,n,r){this.key=c,this.value=e,this.color=null!=t?t:$e.RED,this.left=null!=n?n:Ue.EMPTY_NODE,this.right=null!=r?r:Ue.EMPTY_NODE}copy(c,e,t,n,r){return new $e(null!=c?c:this.key,null!=e?e:this.value,null!=t?t:this.color,null!=n?n:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||!!c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,e,t){let n=this;const r=t(c,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(c,e,t),null):0===r?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(c,e,t)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let c=this;return c.left.isRed_()||c.left.left.isRed_()||(c=c.moveRedLeft_()),c=c.copy(null,null,null,c.left.removeMin_(),null),c.fixUp_()}remove(c,e){let t,n;if(t=this,e(c,t.key)<0)t.left.isEmpty()||t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.remove(c,e),null);else{if(t.left.isRed_()&&(t=t.rotateRight_()),t.right.isEmpty()||t.right.isRed_()||t.right.left.isRed_()||(t=t.moveRedRight_()),0===e(c,t.key)){if(t.right.isEmpty())return Ue.EMPTY_NODE;n=t.right.min_(),t=t.copy(n.key,n.value,null,null,t.right.removeMin_())}t=t.copy(null,null,null,null,t.right.remove(c,e))}return t.fixUp_()}isRed_(){return this.color}fixUp_(){let c=this;return c.right.isRed_()&&!c.left.isRed_()&&(c=c.rotateLeft_()),c.left.isRed_()&&c.left.left.isRed_()&&(c=c.rotateRight_()),c.left.isRed_()&&c.right.isRed_()&&(c=c.colorFlip_()),c}moveRedLeft_(){let c=this.colorFlip_();return c.right.left.isRed_()&&(c=c.copy(null,null,null,null,c.right.rotateRight_()),c=c.rotateLeft_(),c=c.colorFlip_()),c}moveRedRight_(){let c=this.colorFlip_();return c.left.left.isRed_()&&(c=c.rotateRight_(),c=c.colorFlip_()),c}rotateLeft_(){const c=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight_(){const c=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip_(){const c=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,e)}checkMaxDepth_(){const c=this.check_();return Math.pow(2,c)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const c=this.left.check_();if(c!==this.right.check_())throw new Error("Black depths differ");return c+(this.isRed_()?0:1)}}$e.RED=!0,$e.BLACK=!1;class We{copy(c,e,t,n,r){return this}insert(c,e,t){return new $e(c,e,null)}remove(c,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(c){return!1}reverseTraversal(c){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(c,e=Ue.EMPTY_NODE){this.comparator_=c,this.root_=e}insert(c,e){return new Ue(this.comparator_,this.root_.insert(c,e,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(c){return new Ue(this.comparator_,this.root_.remove(c,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(c){let e,t=this.root_;while(!t.isEmpty()){if(e=this.comparator_(c,t.key),0===e)return t.value;e<0?t=t.left:e>0&&(t=t.right)}return null}getPredecessorKey(c){let e,t=this.root_,n=null;while(!t.isEmpty()){if(e=this.comparator_(c,t.key),0===e){if(t.left.isEmpty())return n?n.key:null;t=t.left;while(!t.right.isEmpty())t=t.right;return t.key}e<0?t=t.left:e>0&&(n=t,t=t.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(c){return this.root_.inorderTraversal(c)}reverseTraversal(c){return this.root_.reverseTraversal(c)}getIterator(c){return new Fe(this.root_,null,this.comparator_,!1,c)}getIteratorFrom(c,e){return new Fe(this.root_,c,this.comparator_,!1,e)}getReverseIteratorFrom(c,e){return new Fe(this.root_,c,this.comparator_,!0,e)}getReverseIterator(c){return new Fe(this.root_,null,this.comparator_,!0,c)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Be(c,e){return T(c.name,e.name)}function Ke(c,e){return T(c,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye;function Ge(c){Ye=c}Ue.EMPTY_NODE=new We;const Qe=function(c){return"number"===typeof c?"number:"+R(c):"string:"+c},Xe=function(c){if(c.isLeafNode()){const e=c.val();Object(a["f"])("string"===typeof e||"number"===typeof e||"object"===typeof e&&Object(a["j"])(e,".sv"),"Priority must be a string or number.")}else Object(a["f"])(c===Ye||c.isEmpty(),"priority of unexpected type.");Object(a["f"])(c===Ye||c.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Je,ct,et;class tt{constructor(c,e=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=c,this.priorityNode_=e,this.lazyHash_=null,Object(a["f"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xe(this.priorityNode_)}static set __childrenNodeConstructor(c){Je=c}static get __childrenNodeConstructor(){return Je}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(c){return new tt(this.value_,c)}getImmediateChild(c){return".priority"===c?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(c){return ge(c)?this:".priority"===ve(c)?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(c,e){return null}updateImmediateChild(c,e){return".priority"===c?this.updatePriority(e):e.isEmpty()&&".priority"!==c?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(c,e).updatePriority(this.priorityNode_)}updateChild(c,e){const t=ve(c);return null===t?e:e.isEmpty()&&".priority"!==t?this:(Object(a["f"])(".priority"!==t||1===ue(c),".priority must be the last token in a path"),this.updateImmediateChild(t,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(c),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(c,e){return!1}val(c){return c&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let c="";this.priorityNode_.isEmpty()||(c+="priority:"+Qe(this.priorityNode_.val())+":");const e=typeof this.value_;c+=e+":",c+="number"===e?R(this.value_):this.value_,this.lazyHash_=M(c)}return this.lazyHash_}getValue(){return this.value_}compareTo(c){return c===tt.__childrenNodeConstructor.EMPTY_NODE?1:c instanceof tt.__childrenNodeConstructor?-1:(Object(a["f"])(c.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(c))}compareToLeafNode_(c){const e=typeof c.value_,t=typeof this.value_,n=tt.VALUE_TYPE_ORDER.indexOf(e),r=tt.VALUE_TYPE_ORDER.indexOf(t);return Object(a["f"])(n>=0,"Unknown leaf type: "+e),Object(a["f"])(r>=0,"Unknown leaf type: "+t),n===r?"object"===t?0:this.value_<c.value_?-1:this.value_===c.value_?0:1:r-n}withIndex(){return this}isIndexed(){return!0}equals(c){if(c===this)return!0;if(c.isLeafNode()){const e=c;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function nt(c){ct=c}function rt(c){et=c}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];class at extends Re{compare(c,e){const t=c.node.getPriority(),n=e.node.getPriority(),r=t.compareTo(n);return 0===r?T(c.name,e.name):r}isDefinedOn(c){return!c.getPriority().isEmpty()}indexedValueChanged(c,e){return!c.getPriority().equals(e.getPriority())}minPost(){return Ne.MIN}maxPost(){return new Ne(O,new tt("[PRIORITY-POST]",et))}makePost(c,e){const t=ct(c);return new Ne(e,new tt("[PRIORITY-POST]",t))}toString(){return".priority"}}const it=new at,st=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(c){const e=c=>parseInt(Math.log(c)/st,10),t=c=>parseInt(Array(c+1).join("1"),2);this.count=e(c+1),this.current_=this.count-1;const n=t(this.count);this.bits_=c+1&n}nextBitIsOne(){const c=!(this.bits_&1<<this.current_);return this.current_--,c}}const lt=function(c,e,t,n){c.sort(e);const r=function(e,n){const a=n-e;let i,s;if(0===a)return null;if(1===a)return i=c[e],s=t?t(i):i,new $e(s,i.node,$e.BLACK,null,null);{const o=parseInt(a/2,10)+e,l=r(e,o),h=r(o+1,n);return i=c[o],s=t?t(i):i,new $e(s,i.node,$e.BLACK,l,h)}},a=function(e){let n=null,a=null,i=c.length;const s=function(e,n){const a=i-e,s=i;i-=e;const l=r(a+1,s),h=c[a],v=t?t(h):h;o(new $e(v,h.node,n,null,l))},o=function(c){n?(n.left=c,n=c):(a=c,n=c)};for(let c=0;c<e.count;++c){const t=e.nextBitIsOne(),n=Math.pow(2,e.count-(c+1));t?s(n,$e.BLACK):(s(n,$e.BLACK),s(n,$e.RED))}return a},i=new ot(c.length),s=a(i);return new Ue(n||e,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht;const vt={};class ut{constructor(c,e){this.indexes_=c,this.indexSet_=e}static get Default(){return Object(a["f"])(vt&&it,"ChildrenNode.ts has not been loaded"),ht=ht||new ut({".priority":vt},{".priority":it}),ht}get(c){const e=Object(a["z"])(this.indexes_,c);if(!e)throw new Error("No index defined for "+c);return e instanceof Ue?e:null}hasIndex(c){return Object(a["j"])(this.indexSet_,c.toString())}addIndex(c,e){Object(a["f"])(c!==qe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const t=[];let n=!1;const r=e.getIterator(Ne.Wrap);let i,s=r.getNext();while(s)n=n||c.isDefinedOn(s.node),t.push(s),s=r.getNext();i=n?lt(t,c.getCompare()):vt;const o=c.toString(),l=Object.assign({},this.indexSet_);l[o]=c;const h=Object.assign({},this.indexes_);return h[o]=i,new ut(h,l)}addToIndexes(c,e){const t=Object(a["x"])(this.indexes_,(t,n)=>{const r=Object(a["z"])(this.indexSet_,n);if(Object(a["f"])(r,"Missing index implementation for "+n),t===vt){if(r.isDefinedOn(c.node)){const t=[],n=e.getIterator(Ne.Wrap);let a=n.getNext();while(a)a.name!==c.name&&t.push(a),a=n.getNext();return t.push(c),lt(t,r.getCompare())}return vt}{const n=e.get(c.name);let r=t;return n&&(r=r.remove(new Ne(c.name,n))),r.insert(c,c.node)}});return new ut(t,this.indexSet_)}removeFromIndexes(c,e){const t=Object(a["x"])(this.indexes_,t=>{if(t===vt)return t;{const n=e.get(c.name);return n?t.remove(new Ne(c.name,n)):t}});return new ut(t,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft;class mt{constructor(c,e,t){this.children_=c,this.priorityNode_=e,this.indexMap_=t,this.lazyHash_=null,this.priorityNode_&&Xe(this.priorityNode_),this.children_.isEmpty()&&Object(a["f"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ft||(ft=new mt(new Ue(Ke),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ft}updatePriority(c){return this.children_.isEmpty()?this:new mt(this.children_,c,this.indexMap_)}getImmediateChild(c){if(".priority"===c)return this.getPriority();{const e=this.children_.get(c);return null===e?ft:e}}getChild(c){const e=ve(c);return null===e?this:this.getImmediateChild(e).getChild(fe(c))}hasChild(c){return null!==this.children_.get(c)}updateImmediateChild(c,e){if(Object(a["f"])(e,"We should always be passing snapshot nodes"),".priority"===c)return this.updatePriority(e);{const t=new Ne(c,e);let n,r;e.isEmpty()?(n=this.children_.remove(c),r=this.indexMap_.removeFromIndexes(t,this.children_)):(n=this.children_.insert(c,e),r=this.indexMap_.addToIndexes(t,this.children_));const a=n.isEmpty()?ft:this.priorityNode_;return new mt(n,a,r)}}updateChild(c,e){const t=ve(c);if(null===t)return e;{Object(a["f"])(".priority"!==ve(c)||1===ue(c),".priority must be the last token in a path");const n=this.getImmediateChild(t).updateChild(fe(c),e);return this.updateImmediateChild(t,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(c){if(this.isEmpty())return null;const e={};let t=0,n=0,r=!0;if(this.forEachChild(it,(a,i)=>{e[a]=i.val(c),t++,r&&mt.INTEGER_REGEXP_.test(a)?n=Math.max(n,Number(a)):r=!1}),!c&&r&&n<2*t){const c=[];for(const t in e)c[t]=e[t];return c}return c&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let c="";this.getPriority().isEmpty()||(c+="priority:"+Qe(this.getPriority().val())+":"),this.forEachChild(it,(e,t)=>{const n=t.hash();""!==n&&(c+=":"+e+":"+n)}),this.lazyHash_=""===c?"":M(c)}return this.lazyHash_}getPredecessorChildName(c,e,t){const n=this.resolveIndex_(t);if(n){const t=n.getPredecessorKey(new Ne(c,e));return t?t.name:null}return this.children_.getPredecessorKey(c)}getFirstChildName(c){const e=this.resolveIndex_(c);if(e){const c=e.minKey();return c&&c.name}return this.children_.minKey()}getFirstChild(c){const e=this.getFirstChildName(c);return e?new Ne(e,this.children_.get(e)):null}getLastChildName(c){const e=this.resolveIndex_(c);if(e){const c=e.maxKey();return c&&c.name}return this.children_.maxKey()}getLastChild(c){const e=this.getLastChildName(c);return e?new Ne(e,this.children_.get(e)):null}forEachChild(c,e){const t=this.resolveIndex_(c);return t?t.inorderTraversal(c=>e(c.name,c.node)):this.children_.inorderTraversal(e)}getIterator(c){return this.getIteratorFrom(c.minPost(),c)}getIteratorFrom(c,e){const t=this.resolveIndex_(e);if(t)return t.getIteratorFrom(c,c=>c);{const t=this.children_.getIteratorFrom(c.name,Ne.Wrap);let n=t.peek();while(null!=n&&e.compare(n,c)<0)t.getNext(),n=t.peek();return t}}getReverseIterator(c){return this.getReverseIteratorFrom(c.maxPost(),c)}getReverseIteratorFrom(c,e){const t=this.resolveIndex_(e);if(t)return t.getReverseIteratorFrom(c,c=>c);{const t=this.children_.getReverseIteratorFrom(c.name,Ne.Wrap);let n=t.peek();while(null!=n&&e.compare(n,c)>0)t.getNext(),n=t.peek();return t}}compareTo(c){return this.isEmpty()?c.isEmpty()?0:-1:c.isLeafNode()||c.isEmpty()?1:c===zt?-1:0}withIndex(c){if(c===qe||this.indexMap_.hasIndex(c))return this;{const e=this.indexMap_.addIndex(c,this.children_);return new mt(this.children_,this.priorityNode_,e)}}isIndexed(c){return c===qe||this.indexMap_.hasIndex(c)}equals(c){if(c===this)return!0;if(c.isLeafNode())return!1;{const e=c;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const c=this.getIterator(it),t=e.getIterator(it);let n=c.getNext(),r=t.getNext();while(n&&r){if(n.name!==r.name||!n.node.equals(r.node))return!1;n=c.getNext(),r=t.getNext()}return null===n&&null===r}return!1}return!1}}resolveIndex_(c){return c===qe?null:this.indexMap_.get(c.toString())}}mt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dt extends mt{constructor(){super(new Ue(Ke),mt.EMPTY_NODE,ut.Default)}compareTo(c){return c===this?0:1}equals(c){return c===this}getPriority(){return this}getImmediateChild(c){return mt.EMPTY_NODE}isEmpty(){return!1}}const zt=new dt;Object.defineProperties(Ne,{MIN:{value:new Ne(x,mt.EMPTY_NODE)},MAX:{value:new Ne(O,zt)}}),Ze.__EMPTY_NODE=mt.EMPTY_NODE,tt.__childrenNodeConstructor=mt,Ge(zt),rt(zt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt=!0;function Mt(c,e=null){if(null===c)return mt.EMPTY_NODE;if("object"===typeof c&&".priority"in c&&(e=c[".priority"]),Object(a["f"])(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof c&&".value"in c&&null!==c[".value"]&&(c=c[".value"]),"object"!==typeof c||".sv"in c){const t=c;return new tt(t,Mt(e))}if(c instanceof Array||!pt){let t=mt.EMPTY_NODE;return N(c,(e,n)=>{if(Object(a["j"])(c,e)&&"."!==e.substring(0,1)){const c=Mt(n);!c.isLeafNode()&&c.isEmpty()||(t=t.updateImmediateChild(e,c))}}),t.updatePriority(Mt(e))}{const t=[];let n=!1;const r=c;if(N(r,(c,e)=>{if("."!==c.substring(0,1)){const r=Mt(e);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),t.push(new Ne(c,r)))}}),0===t.length)return mt.EMPTY_NODE;const a=lt(t,Be,c=>c.name,Ke);if(n){const c=lt(t,it.getCompare());return new mt(a,Mt(e),new ut({".priority":c},{".priority":it}))}return new mt(a,Mt(e),ut.Default)}}nt(Mt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends Re{constructor(c){super(),this.indexPath_=c,Object(a["f"])(!ge(c)&&".priority"!==ve(c),"Can't create PathIndex with empty path or .priority key")}extractChild(c){return c.getChild(this.indexPath_)}isDefinedOn(c){return!c.getChild(this.indexPath_).isEmpty()}compare(c,e){const t=this.extractChild(c.node),n=this.extractChild(e.node),r=t.compareTo(n);return 0===r?T(c.name,e.name):r}makePost(c,e){const t=Mt(c),n=mt.EMPTY_NODE.updateChild(this.indexPath_,t);return new Ne(e,n)}maxPost(){const c=mt.EMPTY_NODE.updateChild(this.indexPath_,zt);return new Ne(O,c)}toString(){return ze(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Re{compare(c,e){const t=c.node.compareTo(e.node);return 0===t?T(c.name,e.name):t}isDefinedOn(c){return!0}indexedValueChanged(c,e){return!c.equals(e)}minPost(){return Ne.MIN}maxPost(){return Ne.MAX}makePost(c,e){const t=Mt(c);return new Ne(e,t)}toString(){return".value"}}const Ht=new Ct,yt="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let c=0;const e=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(c){return{type:"value",snapshotNode:c}}function bt(c,e){return{type:"child_added",snapshotNode:e,childName:c}}function _t(c,e){return{type:"child_removed",snapshotNode:e,childName:c}}function Lt(c,e,t){return{type:"child_changed",snapshotNode:e,childName:c,oldSnap:t}}function wt(c,e){return{type:"child_moved",snapshotNode:e,childName:c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(c){this.index_=c}updateChild(c,e,t,n,r,i){Object(a["f"])(c.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=c.getImmediateChild(e);return s.getChild(n).equals(t.getChild(n))&&s.isEmpty()===t.isEmpty()?c:(null!=i&&(t.isEmpty()?c.hasChild(e)?i.trackChildChange(_t(e,s)):Object(a["f"])(c.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?i.trackChildChange(bt(e,t)):i.trackChildChange(Lt(e,t,s))),c.isLeafNode()&&t.isEmpty()?c:c.updateImmediateChild(e,t).withIndex(this.index_))}updateFullNode(c,e,t){return null!=t&&(c.isLeafNode()||c.forEachChild(it,(c,n)=>{e.hasChild(c)||t.trackChildChange(_t(c,n))}),e.isLeafNode()||e.forEachChild(it,(e,n)=>{if(c.hasChild(e)){const r=c.getImmediateChild(e);r.equals(n)||t.trackChildChange(Lt(e,n,r))}else t.trackChildChange(bt(e,n))})),e.withIndex(this.index_)}updatePriority(c,e){return c.isEmpty()?mt.EMPTY_NODE:c.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(c){this.indexedFilter_=new At(c.getIndex()),this.index_=c.getIndex(),this.startPost_=St.getStartPost_(c),this.endPost_=St.getEndPost_(c)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(c){return this.index_.compare(this.getStartPost(),c)<=0&&this.index_.compare(c,this.getEndPost())<=0}updateChild(c,e,t,n,r,a){return this.matches(new Ne(e,t))||(t=mt.EMPTY_NODE),this.indexedFilter_.updateChild(c,e,t,n,r,a)}updateFullNode(c,e,t){e.isLeafNode()&&(e=mt.EMPTY_NODE);let n=e.withIndex(this.index_);n=n.updatePriority(mt.EMPTY_NODE);const r=this;return e.forEachChild(it,(c,e)=>{r.matches(new Ne(c,e))||(n=n.updateImmediateChild(c,mt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(c,n,t)}updatePriority(c,e){return c}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(c){if(c.hasStart()){const e=c.getIndexStartName();return c.getIndex().makePost(c.getIndexStartValue(),e)}return c.getIndex().minPost()}static getEndPost_(c){if(c.hasEnd()){const e=c.getIndexEndName();return c.getIndex().makePost(c.getIndexEndValue(),e)}return c.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(c){this.rangedFilter_=new St(c),this.index_=c.getIndex(),this.limit_=c.getLimit(),this.reverse_=!c.isViewFromLeft()}updateChild(c,e,t,n,r,a){return this.rangedFilter_.matches(new Ne(e,t))||(t=mt.EMPTY_NODE),c.getImmediateChild(e).equals(t)?c:c.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(c,e,t,n,r,a):this.fullLimitUpdateChild_(c,e,t,r,a)}updateFullNode(c,e,t){let n;if(e.isLeafNode()||e.isEmpty())n=mt.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let c;n=mt.EMPTY_NODE.withIndex(this.index_),c=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let t=0;while(c.hasNext()&&t<this.limit_){const e=c.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!r)break;n=n.updateImmediateChild(e.name,e.node),t++}}else{let c,t,r,a;if(n=e.withIndex(this.index_),n=n.updatePriority(mt.EMPTY_NODE),this.reverse_){a=n.getReverseIterator(this.index_),c=this.rangedFilter_.getEndPost(),t=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();r=(c,t)=>e(t,c)}else a=n.getIterator(this.index_),c=this.rangedFilter_.getStartPost(),t=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let i=0,s=!1;while(a.hasNext()){const e=a.getNext();!s&&r(c,e)<=0&&(s=!0);const o=s&&i<this.limit_&&r(e,t)<=0;o?i++:n=n.updateImmediateChild(e.name,mt.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(c,n,t)}updatePriority(c,e){return c}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(c,e,t,n,r){let i;if(this.reverse_){const c=this.index_.getCompare();i=(e,t)=>c(t,e)}else i=this.index_.getCompare();const s=c;Object(a["f"])(s.numChildren()===this.limit_,"");const o=new Ne(e,t),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),h=this.rangedFilter_.matches(o);if(s.hasChild(e)){const c=s.getImmediateChild(e);let a=n.getChildAfterChild(this.index_,l,this.reverse_);while(null!=a&&(a.name===e||s.hasChild(a.name)))a=n.getChildAfterChild(this.index_,a,this.reverse_);const v=null==a?1:i(a,o),u=h&&!t.isEmpty()&&v>=0;if(u)return null!=r&&r.trackChildChange(Lt(e,t,c)),s.updateImmediateChild(e,t);{null!=r&&r.trackChildChange(_t(e,c));const t=s.updateImmediateChild(e,mt.EMPTY_NODE),n=null!=a&&this.rangedFilter_.matches(a);return n?(null!=r&&r.trackChildChange(bt(a.name,a.node)),t.updateImmediateChild(a.name,a.node)):t}}return t.isEmpty()?c:h&&i(l,o)>=0?(null!=r&&(r.trackChildChange(_t(l.name,l.node)),r.trackChildChange(bt(e,t))),s.updateImmediateChild(e,t).updateImmediateChild(l.name,mt.EMPTY_NODE)):c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=it}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(a["f"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(a["f"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:x}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(a["f"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(a["f"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:O}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(a["f"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===it}copy(){const c=new xt;return c.limitSet_=this.limitSet_,c.limit_=this.limit_,c.startSet_=this.startSet_,c.indexStartValue_=this.indexStartValue_,c.startNameSet_=this.startNameSet_,c.indexStartName_=this.indexStartName_,c.endSet_=this.endSet_,c.indexEndValue_=this.indexEndValue_,c.endNameSet_=this.endNameSet_,c.indexEndName_=this.indexEndName_,c.index_=this.index_,c.viewFrom_=this.viewFrom_,c}}function Ot(c){return c.loadsAllData()?new At(c.getIndex()):c.hasLimit()?new kt(c):new St(c)}function Tt(c){const e={};if(c.isDefault())return e;let t;return c.index_===it?t="$priority":c.index_===Ht?t="$value":c.index_===qe?t="$key":(Object(a["f"])(c.index_ instanceof gt,"Unrecognized index type!"),t=c.index_.toString()),e["orderBy"]=Object(a["C"])(t),c.startSet_&&(e["startAt"]=Object(a["C"])(c.indexStartValue_),c.startNameSet_&&(e["startAt"]+=","+Object(a["C"])(c.indexStartName_))),c.endSet_&&(e["endAt"]=Object(a["C"])(c.indexEndValue_),c.endNameSet_&&(e["endAt"]+=","+Object(a["C"])(c.indexEndName_))),c.limitSet_&&(c.isViewFromLeft()?e["limitToFirst"]=c.limit_:e["limitToLast"]=c.limit_),e}function It(c){const e={};if(c.startSet_&&(e["sp"]=c.indexStartValue_,c.startNameSet_&&(e["sn"]=c.indexStartName_)),c.endSet_&&(e["ep"]=c.indexEndValue_,c.endNameSet_&&(e["en"]=c.indexEndName_)),c.limitSet_){e["l"]=c.limit_;let t=c.viewFrom_;""===t&&(t=c.isViewFromLeft()?"l":"r"),e["vf"]=t}return c.index_!==it&&(e["i"]=c.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends re{constructor(c,e,t,n){super(),this.repoInfo_=c,this.onDataUpdate_=e,this.authTokenProvider_=t,this.appCheckTokenProvider_=n,this.log_=b("p:rest:"),this.listens_={}}reportStats(c){throw new Error("Method not implemented.")}static getListenId_(c,e){return void 0!==e?"tag$"+e:(Object(a["f"])(c._queryParams.isDefault(),"should have a tag if it's not a default query."),c._path.toString())}listen(c,e,t,n){const r=c._path.toString();this.log_("Listen called for "+r+" "+c._queryIdentifier);const i=Et.getListenId_(c,t),s={};this.listens_[i]=s;const o=Tt(c._queryParams);this.restRequest_(r+".json",o,(c,e)=>{let o=e;if(404===c&&(o=null,c=null),null===c&&this.onDataUpdate_(r,o,!1,t),Object(a["z"])(this.listens_,i)===s){let e;e=c?401===c?"permission_denied":"rest_error:"+c:"ok",n(e,null)}})}unlisten(c,e){const t=Et.getListenId_(c,e);delete this.listens_[t]}get(c){const e=Tt(c._queryParams),t=c._path.toString(),n=new a["a"];return this.restRequest_(t+".json",e,(c,e)=>{let r=e;404===c&&(r=null,c=null),null===c?(this.onDataUpdate_(t,r,!1,null),n.resolve(r)):n.reject(new Error(r))}),n.promise}refreshAuthToken(c){}restRequest_(c,e={},t){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(e["auth"]=n.accessToken),r&&r.token&&(e["ac"]=r.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+c+"?ns="+this.repoInfo_.namespace+Object(a["y"])(e);this.log_("Sending REST request for "+i);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(t&&4===s.readyState){this.log_("REST Response for "+i+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=Object(a["w"])(s.responseText)}catch(c){w("Failed to parse JSON response for "+i+": "+s.responseText)}t(null,e)}else 401!==s.status&&404!==s.status&&w("Got unsuccessful REST response for "+i+" Status: "+s.status),t(s.status);t=null}},s.open("GET",i,!0),s.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.rootNode_=mt.EMPTY_NODE}getNode(c){return this.rootNode_.getChild(c)}updateSnapshot(c,e){this.rootNode_=this.rootNode_.updateChild(c,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return{value:null,children:new Map}}function Nt(c,e,t){if(ge(e))c.value=t,c.children.clear();else if(null!==c.value)c.value=c.value.updateChild(e,t);else{const n=ve(e);c.children.has(n)||c.children.set(n,Pt());const r=c.children.get(n);e=fe(e),Nt(r,e,t)}}function Rt(c,e,t){null!==c.value?t(e,c.value):Dt(c,(c,n)=>{const r=new le(e.toString()+"/"+c);Rt(n,r,t)})}function Dt(c,e){c.children.forEach((c,t)=>{e(t,c)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(c){this.collection_=c,this.last_=null}get(){const c=this.collection_.get(),e=Object.assign({},c);return this.last_&&N(this.last_,(c,t)=>{e[c]=e[c]-t}),this.last_=c,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=1e4,Ft=3e4,$t=3e5;class Wt{constructor(c,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Zt(c);const t=qt+(Ft-qt)*Math.random();Y(this.reportStats_.bind(this),Math.floor(t))}reportStats_(){const c=this.statsListener_.get(),e={};let t=!1;N(c,(c,n)=>{n>0&&Object(a["j"])(this.statsToReport_,c)&&(e[c]=n,t=!0)}),t&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*$t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;function Bt(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kt(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yt(c){return{fromUser:!1,fromServer:!0,queryId:c,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(c){c[c["OVERWRITE"]=0]="OVERWRITE",c[c["MERGE"]=1]="MERGE",c[c["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",c[c["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));class Gt{constructor(c,e,t){this.path=c,this.affectedTree=e,this.revert=t,this.type=Ut.ACK_USER_WRITE,this.source=Bt()}operationForChild(c){if(ge(this.path)){if(null!=this.affectedTree.value)return Object(a["f"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new le(c));return new Gt(he(),e,this.revert)}}return Object(a["f"])(ve(this.path)===c,"operationForChild called for unrelated child."),new Gt(fe(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(c,e){this.source=c,this.path=e,this.type=Ut.LISTEN_COMPLETE}operationForChild(c){return ge(this.path)?new Qt(this.source,he()):new Qt(this.source,fe(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(c,e,t){this.source=c,this.path=e,this.snap=t,this.type=Ut.OVERWRITE}operationForChild(c){return ge(this.path)?new Xt(this.source,he(),this.snap.getImmediateChild(c)):new Xt(this.source,fe(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(c,e,t){this.source=c,this.path=e,this.children=t,this.type=Ut.MERGE}operationForChild(c){if(ge(this.path)){const e=this.children.subtree(new le(c));return e.isEmpty()?null:e.value?new Xt(this.source,he(),e.value):new Jt(this.source,he(),e)}return Object(a["f"])(ve(this.path)===c,"Can't get a merge for a child not on the path of the operation"),new Jt(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(c,e,t){this.node_=c,this.fullyInitialized_=e,this.filtered_=t}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(c){if(ge(c))return this.isFullyInitialized()&&!this.filtered_;const e=ve(c);return this.isCompleteForChild(e)}isCompleteForChild(c){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(c)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(c){this.query_=c,this.index_=this.query_._queryParams.getIndex()}}function tn(c,e,t,n){const r=[],a=[];return e.forEach(e=>{"child_changed"===e.type&&c.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&a.push(wt(e.childName,e.snapshotNode))}),nn(c,r,"child_removed",e,n,t),nn(c,r,"child_added",e,n,t),nn(c,r,"child_moved",a,n,t),nn(c,r,"child_changed",e,n,t),nn(c,r,"value",e,n,t),r}function nn(c,e,t,n,r,a){const i=n.filter(c=>c.type===t);i.sort((e,t)=>an(c,e,t)),i.forEach(t=>{const n=rn(c,t,a);r.forEach(r=>{r.respondsTo(t.type)&&e.push(r.createEvent(n,c.query_))})})}function rn(c,e,t){return"value"===e.type||"child_removed"===e.type||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,c.index_)),e}function an(c,e,t){if(null==e.childName||null==t.childName)throw Object(a["g"])("Should only compare child_ events.");const n=new Ne(e.childName,e.snapshotNode),r=new Ne(t.childName,t.snapshotNode);return c.index_.compare(n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(c,e){return{eventCache:c,serverCache:e}}function on(c,e,t,n){return sn(new cn(e,t,n),c.serverCache)}function ln(c,e,t,n){return sn(c.eventCache,new cn(e,t,n))}function hn(c){return c.eventCache.isFullyInitialized()?c.eventCache.getNode():null}function vn(c){return c.serverCache.isFullyInitialized()?c.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const fn=()=>(un||(un=new Ue(I)),un);class mn{constructor(c,e=fn()){this.value=c,this.children=e}static fromObject(c){let e=new mn(null);return N(c,(c,t)=>{e=e.set(new le(c),t)}),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(c,e){if(null!=this.value&&e(this.value))return{path:he(),value:this.value};if(ge(c))return null;{const t=ve(c),n=this.children.get(t);if(null!==n){const r=n.findRootMostMatchingPathAndValue(fe(c),e);if(null!=r){const c=Me(new le(t),r.path);return{path:c,value:r.value}}return null}return null}}findRootMostValueAndPath(c){return this.findRootMostMatchingPathAndValue(c,()=>!0)}subtree(c){if(ge(c))return this;{const e=ve(c),t=this.children.get(e);return null!==t?t.subtree(fe(c)):new mn(null)}}set(c,e){if(ge(c))return new mn(e,this.children);{const t=ve(c),n=this.children.get(t)||new mn(null),r=n.set(fe(c),e),a=this.children.insert(t,r);return new mn(this.value,a)}}remove(c){if(ge(c))return this.children.isEmpty()?new mn(null):new mn(null,this.children);{const e=ve(c),t=this.children.get(e);if(t){const n=t.remove(fe(c));let r;return r=n.isEmpty()?this.children.remove(e):this.children.insert(e,n),null===this.value&&r.isEmpty()?new mn(null):new mn(this.value,r)}return this}}get(c){if(ge(c))return this.value;{const e=ve(c),t=this.children.get(e);return t?t.get(fe(c)):null}}setTree(c,e){if(ge(c))return e;{const t=ve(c),n=this.children.get(t)||new mn(null),r=n.setTree(fe(c),e);let a;return a=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),new mn(this.value,a)}}fold(c){return this.fold_(he(),c)}fold_(c,e){const t={};return this.children.inorderTraversal((n,r)=>{t[n]=r.fold_(Me(c,n),e)}),e(c,this.value,t)}findOnPath(c,e){return this.findOnPath_(c,he(),e)}findOnPath_(c,e,t){const n=!!this.value&&t(e,this.value);if(n)return n;if(ge(c))return null;{const n=ve(c),r=this.children.get(n);return r?r.findOnPath_(fe(c),Me(e,n),t):null}}foreachOnPath(c,e){return this.foreachOnPath_(c,he(),e)}foreachOnPath_(c,e,t){if(ge(c))return this;{this.value&&t(e,this.value);const n=ve(c),r=this.children.get(n);return r?r.foreachOnPath_(fe(c),Me(e,n),t):new mn(null)}}foreach(c){this.foreach_(he(),c)}foreach_(c,e){this.children.inorderTraversal((t,n)=>{n.foreach_(Me(c,t),e)}),this.value&&e(c,this.value)}foreachChild(c){this.children.inorderTraversal((e,t)=>{t.value&&c(e,t.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(c){this.writeTree_=c}static empty(){return new dn(new mn(null))}}function zn(c,e,t){if(ge(e))return new dn(new mn(t));{const n=c.writeTree_.findRootMostValueAndPath(e);if(null!=n){const r=n.path;let a=n.value;const i=Ce(r,e);return a=a.updateChild(i,t),new dn(c.writeTree_.set(r,a))}{const n=new mn(t),r=c.writeTree_.setTree(e,n);return new dn(r)}}}function pn(c,e,t){let n=c;return N(t,(c,t)=>{n=zn(n,Me(e,c),t)}),n}function Mn(c,e){if(ge(e))return dn.empty();{const t=c.writeTree_.setTree(e,new mn(null));return new dn(t)}}function gn(c,e){return null!=Cn(c,e)}function Cn(c,e){const t=c.writeTree_.findRootMostValueAndPath(e);return null!=t?c.writeTree_.get(t.path).getChild(Ce(t.path,e)):null}function Hn(c){const e=[],t=c.writeTree_.value;return null!=t?t.isLeafNode()||t.forEachChild(it,(c,t)=>{e.push(new Ne(c,t))}):c.writeTree_.children.inorderTraversal((c,t)=>{null!=t.value&&e.push(new Ne(c,t.value))}),e}function yn(c,e){if(ge(e))return c;{const t=Cn(c,e);return new dn(null!=t?new mn(t):c.writeTree_.subtree(e))}}function Vn(c){return c.writeTree_.isEmpty()}function bn(c,e){return _n(he(),c.writeTree_,e)}function _n(c,e,t){if(null!=e.value)return t.updateChild(c,e.value);{let n=null;return e.children.inorderTraversal((e,r)=>{".priority"===e?(Object(a["f"])(null!==r.value,"Priority writes must always be leaf nodes"),n=r.value):t=_n(Me(c,e),r,t)}),t.getChild(c).isEmpty()||null===n||(t=t.updateChild(Me(c,".priority"),n)),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(c,e){return Kn(e,c)}function wn(c,e,t,n,r){Object(a["f"])(n>c.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),c.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(c.visibleWrites=zn(c.visibleWrites,e,t)),c.lastWriteId=n}function An(c,e){for(let t=0;t<c.allWrites.length;t++){const n=c.allWrites[t];if(n.writeId===e)return n}return null}function Sn(c,e){const t=c.allWrites.findIndex(c=>c.writeId===e);Object(a["f"])(t>=0,"removeWrite called with nonexistent writeId.");const n=c.allWrites[t];c.allWrites.splice(t,1);let r=n.visible,i=!1,s=c.allWrites.length-1;while(r&&s>=0){const e=c.allWrites[s];e.visible&&(s>=t&&kn(e,n.path)?r=!1:ye(n.path,e.path)&&(i=!0)),s--}if(r){if(i)return xn(c),!0;if(n.snap)c.visibleWrites=Mn(c.visibleWrites,n.path);else{const e=n.children;N(e,e=>{c.visibleWrites=Mn(c.visibleWrites,Me(n.path,e))})}return!0}return!1}function kn(c,e){if(c.snap)return ye(c.path,e);for(const t in c.children)if(c.children.hasOwnProperty(t)&&ye(Me(c.path,t),e))return!0;return!1}function xn(c){c.visibleWrites=Tn(c.allWrites,On,he()),c.allWrites.length>0?c.lastWriteId=c.allWrites[c.allWrites.length-1].writeId:c.lastWriteId=-1}function On(c){return c.visible}function Tn(c,e,t){let n=dn.empty();for(let r=0;r<c.length;++r){const i=c[r];if(e(i)){const c=i.path;let e;if(i.snap)ye(t,c)?(e=Ce(t,c),n=zn(n,e,i.snap)):ye(c,t)&&(e=Ce(c,t),n=zn(n,he(),i.snap.getChild(e)));else{if(!i.children)throw Object(a["g"])("WriteRecord should have .snap or .children");if(ye(t,c))e=Ce(t,c),n=pn(n,e,i.children);else if(ye(c,t))if(e=Ce(c,t),ge(e))n=pn(n,he(),i.children);else{const c=Object(a["z"])(i.children,ve(e));if(c){const t=c.getChild(fe(e));n=zn(n,he(),t)}}}}}return n}function In(c,e,t,n,r){if(n||r){const a=yn(c.visibleWrites,e);if(!r&&Vn(a))return t;if(r||null!=t||gn(a,he())){const a=function(c){return(c.visible||r)&&(!n||!~n.indexOf(c.writeId))&&(ye(c.path,e)||ye(e,c.path))},i=Tn(c.allWrites,a,e),s=t||mt.EMPTY_NODE;return bn(i,s)}return null}{const n=Cn(c.visibleWrites,e);if(null!=n)return n;{const n=yn(c.visibleWrites,e);if(Vn(n))return t;if(null!=t||gn(n,he())){const c=t||mt.EMPTY_NODE;return bn(n,c)}return null}}}function En(c,e,t){let n=mt.EMPTY_NODE;const r=Cn(c.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(it,(c,e)=>{n=n.updateImmediateChild(c,e)}),n;if(t){const r=yn(c.visibleWrites,e);return t.forEachChild(it,(c,e)=>{const t=bn(yn(r,new le(c)),e);n=n.updateImmediateChild(c,t)}),Hn(r).forEach(c=>{n=n.updateImmediateChild(c.name,c.node)}),n}{const t=yn(c.visibleWrites,e);return Hn(t).forEach(c=>{n=n.updateImmediateChild(c.name,c.node)}),n}}function jn(c,e,t,n,r){Object(a["f"])(n||r,"Either existingEventSnap or existingServerSnap must exist");const i=Me(e,t);if(gn(c.visibleWrites,i))return null;{const e=yn(c.visibleWrites,i);return Vn(e)?r.getChild(t):bn(e,r.getChild(t))}}function Pn(c,e,t,n){const r=Me(e,t),a=Cn(c.visibleWrites,r);if(null!=a)return a;if(n.isCompleteForChild(t)){const e=yn(c.visibleWrites,r);return bn(e,n.getNode().getImmediateChild(t))}return null}function Nn(c,e){return Cn(c.visibleWrites,e)}function Rn(c,e,t,n,r,a,i){let s;const o=yn(c.visibleWrites,e),l=Cn(o,he());if(null!=l)s=l;else{if(null==t)return[];s=bn(o,t)}if(s=s.withIndex(i),s.isEmpty()||s.isLeafNode())return[];{const c=[],e=i.getCompare(),t=a?s.getReverseIteratorFrom(n,i):s.getIteratorFrom(n,i);let o=t.getNext();while(o&&c.length<r)0!==e(o,n)&&c.push(o),o=t.getNext();return c}}function Dn(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function Zn(c,e,t,n){return In(c.writeTree,c.treePath,e,t,n)}function qn(c,e){return En(c.writeTree,c.treePath,e)}function Fn(c,e,t,n){return jn(c.writeTree,c.treePath,e,t,n)}function $n(c,e){return Nn(c.writeTree,Me(c.treePath,e))}function Wn(c,e,t,n,r,a){return Rn(c.writeTree,c.treePath,e,t,n,r,a)}function Un(c,e,t){return Pn(c.writeTree,c.treePath,e,t)}function Bn(c,e){return Kn(Me(c.treePath,e),c.writeTree)}function Kn(c,e){return{treePath:c,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.changeMap=new Map}trackChildChange(c){const e=c.type,t=c.childName;Object(a["f"])("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Object(a["f"])(".priority"!==t,"Only non-priority child changes can be tracked.");const n=this.changeMap.get(t);if(n){const r=n.type;if("child_added"===e&&"child_removed"===r)this.changeMap.set(t,Lt(t,c.snapshotNode,n.snapshotNode));else if("child_removed"===e&&"child_added"===r)this.changeMap.delete(t);else if("child_removed"===e&&"child_changed"===r)this.changeMap.set(t,_t(t,n.oldSnap));else if("child_changed"===e&&"child_added"===r)this.changeMap.set(t,bt(t,c.snapshotNode));else{if("child_changed"!==e||"child_changed"!==r)throw Object(a["g"])("Illegal combination of changes: "+c+" occurred after "+n);this.changeMap.set(t,Lt(t,c.snapshotNode,n.oldSnap))}}else this.changeMap.set(t,c)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{getCompleteChild(c){return null}getChildAfterChild(c,e,t){return null}}const Qn=new Gn;class Xn{constructor(c,e,t=null){this.writes_=c,this.viewCache_=e,this.optCompleteServerCache_=t}getCompleteChild(c){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(c))return e.getNode().getImmediateChild(c);{const e=null!=this.optCompleteServerCache_?new cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Un(this.writes_,c,e)}}getChildAfterChild(c,e,t){const n=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:vn(this.viewCache_),r=Wn(this.writes_,n,e,1,t,c);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(c){return{filter:c}}function cr(c,e){Object(a["f"])(e.eventCache.getNode().isIndexed(c.filter.getIndex()),"Event snap not indexed"),Object(a["f"])(e.serverCache.getNode().isIndexed(c.filter.getIndex()),"Server snap not indexed")}function er(c,e,t,n,r){const i=new Yn;let s,o;if(t.type===Ut.OVERWRITE){const l=t;l.source.fromUser?s=ar(c,e,l.path,l.snap,n,r,i):(Object(a["f"])(l.source.fromServer,"Unknown source."),o=l.source.tagged||e.serverCache.isFiltered()&&!ge(l.path),s=rr(c,e,l.path,l.snap,n,r,o,i))}else if(t.type===Ut.MERGE){const l=t;l.source.fromUser?s=sr(c,e,l.path,l.children,n,r,i):(Object(a["f"])(l.source.fromServer,"Unknown source."),o=l.source.tagged||e.serverCache.isFiltered(),s=lr(c,e,l.path,l.children,n,r,o,i))}else if(t.type===Ut.ACK_USER_WRITE){const a=t;s=a.revert?ur(c,e,a.path,n,r,i):hr(c,e,a.path,a.affectedTree,n,r,i)}else{if(t.type!==Ut.LISTEN_COMPLETE)throw Object(a["g"])("Unknown operation type: "+t.type);s=vr(c,e,t.path,n,i)}const l=i.getChanges();return tr(e,s,l),{viewCache:s,changes:l}}function tr(c,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),a=hn(c);(t.length>0||!c.eventCache.isFullyInitialized()||r&&!n.getNode().equals(a)||!n.getNode().getPriority().equals(a.getPriority()))&&t.push(Vt(hn(e)))}}function nr(c,e,t,n,r,i){const s=e.eventCache;if(null!=$n(n,t))return e;{let o,l;if(ge(t))if(Object(a["f"])(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const t=vn(e),r=t instanceof mt?t:mt.EMPTY_NODE,a=qn(n,r);o=c.filter.updateFullNode(e.eventCache.getNode(),a,i)}else{const t=Zn(n,vn(e));o=c.filter.updateFullNode(e.eventCache.getNode(),t,i)}else{const h=ve(t);if(".priority"===h){Object(a["f"])(1===ue(t),"Can't have a priority with additional path components");const r=s.getNode();l=e.serverCache.getNode();const i=Fn(n,t,r,l);o=null!=i?c.filter.updatePriority(r,i):s.getNode()}else{const a=fe(t);let v;if(s.isCompleteForChild(h)){l=e.serverCache.getNode();const c=Fn(n,t,s.getNode(),l);v=null!=c?s.getNode().getImmediateChild(h).updateChild(a,c):s.getNode().getImmediateChild(h)}else v=Un(n,h,e.serverCache);o=null!=v?c.filter.updateChild(s.getNode(),h,v,a,r,i):s.getNode()}}return on(e,o,s.isFullyInitialized()||ge(t),c.filter.filtersNodes())}}function rr(c,e,t,n,r,a,i,s){const o=e.serverCache;let l;const h=i?c.filter:c.filter.getIndexedFilter();if(ge(t))l=h.updateFullNode(o.getNode(),n,null);else if(h.filtersNodes()&&!o.isFiltered()){const c=o.getNode().updateChild(t,n);l=h.updateFullNode(o.getNode(),c,null)}else{const c=ve(t);if(!o.isCompleteForPath(t)&&ue(t)>1)return e;const r=fe(t),a=o.getNode().getImmediateChild(c),i=a.updateChild(r,n);l=".priority"===c?h.updatePriority(o.getNode(),i):h.updateChild(o.getNode(),c,i,r,Qn,null)}const v=ln(e,l,o.isFullyInitialized()||ge(t),h.filtersNodes()),u=new Xn(r,v,a);return nr(c,v,t,r,u,s)}function ar(c,e,t,n,r,a,i){const s=e.eventCache;let o,l;const h=new Xn(r,e,a);if(ge(t))l=c.filter.updateFullNode(e.eventCache.getNode(),n,i),o=on(e,l,!0,c.filter.filtersNodes());else{const r=ve(t);if(".priority"===r)l=c.filter.updatePriority(e.eventCache.getNode(),n),o=on(e,l,s.isFullyInitialized(),s.isFiltered());else{const a=fe(t),l=s.getNode().getImmediateChild(r);let v;if(ge(a))v=n;else{const c=h.getCompleteChild(r);v=null!=c?".priority"===me(a)&&c.getChild(pe(a)).isEmpty()?c:c.updateChild(a,n):mt.EMPTY_NODE}if(l.equals(v))o=e;else{const t=c.filter.updateChild(s.getNode(),r,v,a,h,i);o=on(e,t,s.isFullyInitialized(),c.filter.filtersNodes())}}}return o}function ir(c,e){return c.eventCache.isCompleteForChild(e)}function sr(c,e,t,n,r,a,i){let s=e;return n.foreach((n,o)=>{const l=Me(t,n);ir(e,ve(l))&&(s=ar(c,s,l,o,r,a,i))}),n.foreach((n,o)=>{const l=Me(t,n);ir(e,ve(l))||(s=ar(c,s,l,o,r,a,i))}),s}function or(c,e,t){return t.foreach((c,t)=>{e=e.updateChild(c,t)}),e}function lr(c,e,t,n,r,a,i,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o,l=e;o=ge(t)?n:new mn(null).setTree(t,n);const h=e.serverCache.getNode();return o.children.inorderTraversal((t,n)=>{if(h.hasChild(t)){const o=e.serverCache.getNode().getImmediateChild(t),h=or(c,o,n);l=rr(c,l,new le(t),h,r,a,i,s)}}),o.children.inorderTraversal((t,n)=>{const o=!e.serverCache.isCompleteForChild(t)&&void 0===n.value;if(!h.hasChild(t)&&!o){const o=e.serverCache.getNode().getImmediateChild(t),h=or(c,o,n);l=rr(c,l,new le(t),h,r,a,i,s)}}),l}function hr(c,e,t,n,r,a,i){if(null!=$n(r,t))return e;const s=e.serverCache.isFiltered(),o=e.serverCache;if(null!=n.value){if(ge(t)&&o.isFullyInitialized()||o.isCompleteForPath(t))return rr(c,e,t,o.getNode().getChild(t),r,a,s,i);if(ge(t)){let n=new mn(null);return o.getNode().forEachChild(qe,(c,e)=>{n=n.set(new le(c),e)}),lr(c,e,t,n,r,a,s,i)}return e}{let l=new mn(null);return n.foreach((c,e)=>{const n=Me(t,c);o.isCompleteForPath(n)&&(l=l.set(c,o.getNode().getChild(n)))}),lr(c,e,t,l,r,a,s,i)}}function vr(c,e,t,n,r){const a=e.serverCache,i=ln(e,a.getNode(),a.isFullyInitialized()||ge(t),a.isFiltered());return nr(c,i,t,n,Qn,r)}function ur(c,e,t,n,r,i){let s;if(null!=$n(n,t))return e;{const o=new Xn(n,e,r),l=e.eventCache.getNode();let h;if(ge(t)||".priority"===ve(t)){let t;if(e.serverCache.isFullyInitialized())t=Zn(n,vn(e));else{const c=e.serverCache.getNode();Object(a["f"])(c instanceof mt,"serverChildren would be complete if leaf node"),t=qn(n,c)}t=t,h=c.filter.updateFullNode(l,t,i)}else{const r=ve(t);let a=Un(n,r,e.serverCache);null==a&&e.serverCache.isCompleteForChild(r)&&(a=l.getImmediateChild(r)),h=null!=a?c.filter.updateChild(l,r,a,fe(t),o,i):e.eventCache.getNode().hasChild(r)?c.filter.updateChild(l,r,mt.EMPTY_NODE,fe(t),o,i):l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=Zn(n,vn(e)),s.isLeafNode()&&(h=c.filter.updateFullNode(h,s,i)))}return s=e.serverCache.isFullyInitialized()||null!=$n(n,he()),on(e,h,s,c.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(c,e){this.query_=c,this.eventRegistrations_=[];const t=this.query_._queryParams,n=new At(t.getIndex()),r=Ot(t);this.processor_=Jn(r);const a=e.serverCache,i=e.eventCache,s=n.updateFullNode(mt.EMPTY_NODE,a.getNode(),null),o=r.updateFullNode(mt.EMPTY_NODE,i.getNode(),null),l=new cn(s,a.isFullyInitialized(),n.filtersNodes()),h=new cn(o,i.isFullyInitialized(),r.filtersNodes());this.viewCache_=sn(h,l),this.eventGenerator_=new en(this.query_)}get query(){return this.query_}}function mr(c){return c.viewCache_.serverCache.getNode()}function dr(c,e){const t=vn(c.viewCache_);return t&&(c.query._queryParams.loadsAllData()||!ge(e)&&!t.getImmediateChild(ve(e)).isEmpty())?t.getChild(e):null}function zr(c){return 0===c.eventRegistrations_.length}function pr(c,e){c.eventRegistrations_.push(e)}function Mr(c,e,t){const n=[];if(t){Object(a["f"])(null==e,"A cancel should cancel all event registrations.");const r=c.query._path;c.eventRegistrations_.forEach(c=>{const e=c.createCancelEvent(t,r);e&&n.push(e)})}if(e){let t=[];for(let n=0;n<c.eventRegistrations_.length;++n){const r=c.eventRegistrations_[n];if(r.matches(e)){if(e.hasAnyCallback()){t=t.concat(c.eventRegistrations_.slice(n+1));break}}else t.push(r)}c.eventRegistrations_=t}else c.eventRegistrations_=[];return n}function gr(c,e,t,n){e.type===Ut.MERGE&&null!==e.source.queryId&&(Object(a["f"])(vn(c.viewCache_),"We should always have a full cache before handling merges"),Object(a["f"])(hn(c.viewCache_),"Missing event cache, even though we have a server cache"));const r=c.viewCache_,i=er(c.processor_,r,e,t,n);return cr(c.processor_,i.viewCache),Object(a["f"])(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),c.viewCache_=i.viewCache,Hr(c,i.changes,i.viewCache.eventCache.getNode(),null)}function Cr(c,e){const t=c.viewCache_.eventCache,n=[];if(!t.getNode().isLeafNode()){const c=t.getNode();c.forEachChild(it,(c,e)=>{n.push(bt(c,e))})}return t.isFullyInitialized()&&n.push(Vt(t.getNode())),Hr(c,n,t.getNode(),e)}function Hr(c,e,t,n){const r=n?[n]:c.eventRegistrations_;return tn(c.eventGenerator_,e,t,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr,Vr;class br{constructor(){this.views=new Map}}function _r(c){Object(a["f"])(!yr,"__referenceConstructor has already been defined"),yr=c}function Lr(){return Object(a["f"])(yr,"Reference.ts has not been loaded"),yr}function wr(c){return 0===c.views.size}function Ar(c,e,t,n){const r=e.source.queryId;if(null!==r){const i=c.views.get(r);return Object(a["f"])(null!=i,"SyncTree gave us an op for an invalid query."),gr(i,e,t,n)}{let r=[];for(const a of c.views.values())r=r.concat(gr(a,e,t,n));return r}}function Sr(c,e,t,n,r){const a=e._queryIdentifier,i=c.views.get(a);if(!i){let c=Zn(t,r?n:null),a=!1;c?a=!0:n instanceof mt?(c=qn(t,n),a=!1):(c=mt.EMPTY_NODE,a=!1);const i=sn(new cn(c,a,!1),new cn(n,r,!1));return new fr(e,i)}return i}function kr(c,e,t,n,r,a){const i=Sr(c,e,n,r,a);return c.views.has(e._queryIdentifier)||c.views.set(e._queryIdentifier,i),pr(i,t),Cr(i,t)}function xr(c,e,t,n){const r=e._queryIdentifier,a=[];let i=[];const s=jr(c);if("default"===r)for(const[o,l]of c.views.entries())i=i.concat(Mr(l,t,n)),zr(l)&&(c.views.delete(o),l.query._queryParams.loadsAllData()||a.push(l.query));else{const e=c.views.get(r);e&&(i=i.concat(Mr(e,t,n)),zr(e)&&(c.views.delete(r),e.query._queryParams.loadsAllData()||a.push(e.query)))}return s&&!jr(c)&&a.push(new(Lr())(e._repo,e._path)),{removed:a,events:i}}function Or(c){const e=[];for(const t of c.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Tr(c,e){let t=null;for(const n of c.views.values())t=t||dr(n,e);return t}function Ir(c,e){const t=e._queryParams;if(t.loadsAllData())return Pr(c);{const t=e._queryIdentifier;return c.views.get(t)}}function Er(c,e){return null!=Ir(c,e)}function jr(c){return null!=Pr(c)}function Pr(c){for(const e of c.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(c){Object(a["f"])(!Vr,"__referenceConstructor has already been defined"),Vr=c}function Rr(){return Object(a["f"])(Vr,"Reference.ts has not been loaded"),Vr}let Dr=1;class Zr{constructor(c){this.listenProvider_=c,this.syncPointTree_=new mn(null),this.pendingWriteTree_=Dn(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qr(c,e,t,n,r){return wn(c.pendingWriteTree_,e,t,n,r),r?Jr(c,new Xt(Bt(),e,t)):[]}function Fr(c,e,t=!1){const n=An(c.pendingWriteTree_,e),r=Sn(c.pendingWriteTree_,e);if(r){let e=new mn(null);return null!=n.snap?e=e.set(he(),!0):N(n.children,c=>{e=e.set(new le(c),!0)}),Jr(c,new Gt(n.path,e,t))}return[]}function $r(c,e,t){return Jr(c,new Xt(Kt(),e,t))}function Wr(c,e,t){const n=mn.fromObject(t);return Jr(c,new Jt(Kt(),e,n))}function Ur(c,e){return Jr(c,new Qt(Kt(),e))}function Br(c,e,t){const n=aa(c,t);if(n){const t=ia(n),r=t.path,a=t.queryId,i=Ce(r,e),s=new Qt(Yt(a),i);return sa(c,r,s)}return[]}function Kr(c,e,t,n){const r=e._path,a=c.syncPointTree_.get(r);let i=[];if(a&&("default"===e._queryIdentifier||Er(a,e))){const s=xr(a,e,t,n);wr(a)&&(c.syncPointTree_=c.syncPointTree_.remove(r));const o=s.removed;i=s.events;const l=-1!==o.findIndex(c=>c._queryParams.loadsAllData()),h=c.syncPointTree_.findOnPath(r,(c,e)=>jr(e));if(l&&!h){const e=c.syncPointTree_.subtree(r);if(!e.isEmpty()){const t=oa(e);for(let e=0;e<t.length;++e){const n=t[e],r=n.query,a=ta(c,n);c.listenProvider_.startListening(la(r),na(c,r),a.hashFn,a.onComplete)}}}if(!h&&o.length>0&&!n)if(l){const t=null;c.listenProvider_.stopListening(la(e),t)}else o.forEach(e=>{const t=c.queryToTagMap.get(ra(e));c.listenProvider_.stopListening(la(e),t)});ha(c,o)}return i}function Yr(c,e,t,n){const r=aa(c,n);if(null!=r){const n=ia(r),a=n.path,i=n.queryId,s=Ce(a,e),o=new Xt(Yt(i),s,t);return sa(c,a,o)}return[]}function Gr(c,e,t,n){const r=aa(c,n);if(r){const n=ia(r),a=n.path,i=n.queryId,s=Ce(a,e),o=mn.fromObject(t),l=new Jt(Yt(i),s,o);return sa(c,a,l)}return[]}function Qr(c,e,t){const n=e._path;let r=null,i=!1;c.syncPointTree_.foreachOnPath(n,(c,e)=>{const t=Ce(c,n);r=r||Tr(e,t),i=i||jr(e)});let s,o=c.syncPointTree_.get(n);if(o?(i=i||jr(o),r=r||Tr(o,he())):(o=new br,c.syncPointTree_=c.syncPointTree_.set(n,o)),null!=r)s=!0;else{s=!1,r=mt.EMPTY_NODE;const e=c.syncPointTree_.subtree(n);e.foreachChild((c,e)=>{const t=Tr(e,he());t&&(r=r.updateImmediateChild(c,t))})}const l=Er(o,e);if(!l&&!e._queryParams.loadsAllData()){const t=ra(e);Object(a["f"])(!c.queryToTagMap.has(t),"View does not exist, but we have a tag");const n=va();c.queryToTagMap.set(t,n),c.tagToQueryMap.set(n,t)}const h=Ln(c.pendingWriteTree_,n);let v=kr(o,e,t,h,r,s);if(!l&&!i){const t=Ir(o,e);v=v.concat(ua(c,e,t))}return v}function Xr(c,e,t){const n=!0,r=c.pendingWriteTree_,a=c.syncPointTree_.findOnPath(e,(c,t)=>{const n=Ce(c,e),r=Tr(t,n);if(r)return r});return In(r,e,a,t,n)}function Jr(c,e){return ca(e,c.syncPointTree_,null,Ln(c.pendingWriteTree_,he()))}function ca(c,e,t,n){if(ge(c.path))return ea(c,e,t,n);{const r=e.get(he());null==t&&null!=r&&(t=Tr(r,he()));let a=[];const i=ve(c.path),s=c.operationForChild(i),o=e.children.get(i);if(o&&s){const c=t?t.getImmediateChild(i):null,e=Bn(n,i);a=a.concat(ca(s,o,c,e))}return r&&(a=a.concat(Ar(r,c,n,t))),a}}function ea(c,e,t,n){const r=e.get(he());null==t&&null!=r&&(t=Tr(r,he()));let a=[];return e.children.inorderTraversal((e,r)=>{const i=t?t.getImmediateChild(e):null,s=Bn(n,e),o=c.operationForChild(e);o&&(a=a.concat(ea(o,r,i,s)))}),r&&(a=a.concat(Ar(r,c,n,t))),a}function ta(c,e){const t=e.query,n=na(c,t);return{hashFn:()=>{const c=mr(e)||mt.EMPTY_NODE;return c.hash()},onComplete:e=>{if("ok"===e)return n?Br(c,t._path,n):Ur(c,t._path);{const n=q(e,t);return Kr(c,t,null,n)}}}}function na(c,e){const t=ra(e);return c.queryToTagMap.get(t)}function ra(c){return c._path.toString()+"$"+c._queryIdentifier}function aa(c,e){return c.tagToQueryMap.get(e)}function ia(c){const e=c.indexOf("$");return Object(a["f"])(-1!==e&&e<c.length-1,"Bad queryKey."),{queryId:c.substr(e+1),path:new le(c.substr(0,e))}}function sa(c,e,t){const n=c.syncPointTree_.get(e);Object(a["f"])(n,"Missing sync point for query tag that we're tracking");const r=Ln(c.pendingWriteTree_,e);return Ar(n,t,r,null)}function oa(c){return c.fold((c,e,t)=>{if(e&&jr(e)){const c=Pr(e);return[c]}{let c=[];return e&&(c=Or(e)),N(t,(e,t)=>{c=c.concat(t)}),c}})}function la(c){return c._queryParams.loadsAllData()&&!c._queryParams.isDefault()?new(Rr())(c._repo,c._path):c}function ha(c,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const e=ra(n),t=c.queryToTagMap.get(e);c.queryToTagMap.delete(e),c.tagToQueryMap.delete(t)}}}function va(){return Dr++}function ua(c,e,t){const n=e._path,r=na(c,e),i=ta(c,t),s=c.listenProvider_.startListening(la(e),r,i.hashFn,i.onComplete),o=c.syncPointTree_.subtree(n);if(r)Object(a["f"])(!jr(o.value),"If we're adding a query, it shouldn't be shadowed");else{const e=o.fold((c,e,t)=>{if(!ge(c)&&e&&jr(e))return[Pr(e).query];{let c=[];return e&&(c=c.concat(Or(e).map(c=>c.query))),N(t,(e,t)=>{c=c.concat(t)}),c}});for(let t=0;t<e.length;++t){const n=e[t];c.listenProvider_.stopListening(la(n),na(c,n))}}return s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(c){this.node_=c}getImmediateChild(c){const e=this.node_.getImmediateChild(c);return new fa(e)}node(){return this.node_}}class ma{constructor(c,e){this.syncTree_=c,this.path_=e}getImmediateChild(c){const e=Me(this.path_,c);return new ma(this.syncTree_,e)}node(){return Xr(this.syncTree_,this.path_)}}const da=function(c){return c=c||{},c["timestamp"]=c["timestamp"]||(new Date).getTime(),c},za=function(c,e,t){return c&&"object"===typeof c?(Object(a["f"])(".sv"in c,"Unexpected leaf node or priority contents"),"string"===typeof c[".sv"]?pa(c[".sv"],e,t):"object"===typeof c[".sv"]?Ma(c[".sv"],e):void Object(a["f"])(!1,"Unexpected server value: "+JSON.stringify(c,null,2))):c},pa=function(c,e,t){switch(c){case"timestamp":return t["timestamp"];default:Object(a["f"])(!1,"Unexpected server value: "+c)}},Ma=function(c,e,t){c.hasOwnProperty("increment")||Object(a["f"])(!1,"Unexpected server value: "+JSON.stringify(c,null,2));const n=c["increment"];"number"!==typeof n&&Object(a["f"])(!1,"Unexpected increment value: "+n);const r=e.node();if(Object(a["f"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const i=r,s=i.getValue();return"number"!==typeof s?n:s+n},ga=function(c,e,t,n){return Ha(e,new ma(t,c),n)},Ca=function(c,e,t){return Ha(c,new fa(e),t)};function Ha(c,e,t){const n=c.getPriority().val(),r=za(n,e.getImmediateChild(".priority"),t);let a;if(c.isLeafNode()){const n=c,a=za(n.getValue(),e,t);return a!==n.getValue()||r!==n.getPriority().val()?new tt(a,Mt(r)):c}{const n=c;return a=n,r!==n.getPriority().val()&&(a=a.updatePriority(new tt(r))),n.forEachChild(it,(c,n)=>{const r=Ha(n,e.getImmediateChild(c),t);r!==n&&(a=a.updateImmediateChild(c,r))}),a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(c="",e=null,t={children:{},childCount:0}){this.name=c,this.parent=e,this.node=t}}function Va(c,e){let t=e instanceof le?e:new le(e),n=c,r=ve(t);while(null!==r){const c=Object(a["z"])(n.node.children,r)||{children:{},childCount:0};n=new ya(r,n,c),t=fe(t),r=ve(t)}return n}function ba(c){return c.node.value}function _a(c,e){c.node.value=e,Oa(c)}function La(c){return c.node.childCount>0}function wa(c){return void 0===ba(c)&&!La(c)}function Aa(c,e){N(c.node.children,(t,n)=>{e(new ya(t,c,n))})}function Sa(c,e,t,n){t&&!n&&e(c),Aa(c,c=>{Sa(c,e,!0,n)}),t&&n&&e(c)}function ka(c,e,t){let n=t?c:c.parent;while(null!==n){if(e(n))return!0;n=n.parent}return!1}function xa(c){return new le(null===c.parent?c.name:xa(c.parent)+"/"+c.name)}function Oa(c){null!==c.parent&&Ta(c.parent,c.name,c)}function Ta(c,e,t){const n=wa(t),r=Object(a["j"])(c.node.children,e);n&&r?(delete c.node.children[e],c.node.childCount--,Oa(c)):n||r||(c.node.children[e]=t.node,c.node.childCount++,Oa(c))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=/[\[\].#$\/\u0000-\u001F\u007F]/,Ea=/[\[\].#$\u0000-\u001F\u007F]/,ja=10485760,Pa=function(c){return"string"===typeof c&&0!==c.length&&!Ia.test(c)},Na=function(c){return"string"===typeof c&&0!==c.length&&!Ea.test(c)},Ra=function(c){return c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),Na(c)},Da=function(c,e,t,n){n&&void 0===e||Za(Object(a["n"])(c,"value"),e,t)},Za=function(c,e,t){const n=t instanceof le?new Ve(t,c):t;if(void 0===e)throw new Error(c+"contains undefined "+we(n));if("function"===typeof e)throw new Error(c+"contains a function "+we(n)+" with contents = "+e.toString());if(S(e))throw new Error(c+"contains "+e.toString()+" "+we(n));if("string"===typeof e&&e.length>ja/3&&Object(a["A"])(e)>ja)throw new Error(c+"contains a string greater than "+ja+" utf8 bytes "+we(n)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let t=!1,r=!1;if(N(e,(e,a)=>{if(".value"===e)t=!0;else if(".priority"!==e&&".sv"!==e&&(r=!0,!Pa(e)))throw new Error(c+" contains an invalid key ("+e+") "+we(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');be(n,e),Za(c,a,n),_e(n)}),t&&r)throw new Error(c+' contains ".value" child '+we(n)+" in addition to actual children.")}},qa=function(c,e,t,n){if((!n||void 0!==t)&&!Na(t))throw new Error(Object(a["n"])(c,e)+'was an invalid path = "'+t+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Fa=function(c,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qa(c,e,t,n)},$a=function(c,e){if(".info"===ve(e))throw new Error(c+" failed = Can't modify data under /.info/")},Wa=function(c,e){const t=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Pa(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==t.length&&!Ra(t))throw new Error(Object(a["n"])(c,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ba(c,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],a=r.getPath();null===t||He(a,t.path)||(c.eventLists_.push(t),t=null),null===t&&(t={events:[],path:a}),t.events.push(r)}t&&c.eventLists_.push(t)}function Ka(c,e,t){Ba(c,t),Ga(c,c=>He(c,e))}function Ya(c,e,t){Ba(c,t),Ga(c,c=>ye(c,e)||ye(e,c))}function Ga(c,e){c.recursionDepth_++;let t=!0;for(let n=0;n<c.eventLists_.length;n++){const r=c.eventLists_[n];if(r){const a=r.path;e(a)?(Qa(c.eventLists_[n]),c.eventLists_[n]=null):t=!1}}t&&(c.eventLists_=[]),c.recursionDepth_--}function Qa(c){for(let e=0;e<c.events.length;e++){const t=c.events[e];if(null!==t){c.events[e]=null;const n=t.getEventRunner();C&&V("event: "+t.toString()),B(n)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="repo_interrupt",Ja=25;class ci{constructor(c,e,t,n){this.repoInfo_=c,this.forceRestClient_=e,this.authTokenProvider_=t,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ua,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pt(),this.transactionQueueTree_=new ya,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ei(c,e,t){if(c.stats_=zc(c.repoInfo_),c.forceRestClient_||K())c.server_=new Et(c.repoInfo_,(e,t,n,r)=>{ri(c,e,t,n,r)},c.authTokenProvider_,c.appCheckProvider_),setTimeout(()=>ai(c,!0),0);else{if("undefined"!==typeof t&&null!==t){if("object"!==typeof t)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(a["C"])(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}c.persistentConnection_=new Pe(c.repoInfo_,e,(e,t,n,r)=>{ri(c,e,t,n,r)},e=>{ai(c,e)},e=>{ii(c,e)},c.authTokenProvider_,c.appCheckProvider_,t),c.server_=c.persistentConnection_}c.authTokenProvider_.addTokenChangeListener(e=>{c.server_.refreshAuthToken(e)}),c.appCheckProvider_.addTokenChangeListener(e=>{c.server_.refreshAppCheckToken(e.token)}),c.statsReporter_=pc(c.repoInfo_,()=>new Wt(c.stats_,c.server_)),c.infoData_=new jt,c.infoSyncTree_=new Zr({startListening:(e,t,n,r)=>{let a=[];const i=c.infoData_.getNode(e._path);return i.isEmpty()||(a=$r(c.infoSyncTree_,e._path,i),setTimeout(()=>{r("ok")},0)),a},stopListening:()=>{}}),si(c,"connected",!1),c.serverSyncTree_=new Zr({startListening:(e,t,n,r)=>(c.server_.listen(e,n,t,(t,n)=>{const a=r(t,n);Ya(c.eventQueue_,e._path,a)}),[]),stopListening:(e,t)=>{c.server_.unlisten(e,t)}})}function ti(c){const e=c.infoData_.getNode(new le(".info/serverTimeOffset")),t=e.val()||0;return(new Date).getTime()+t}function ni(c){return da({timestamp:ti(c)})}function ri(c,e,t,n,r){c.dataUpdateCount++;const i=new le(e);t=c.interceptServerDataCallback_?c.interceptServerDataCallback_(e,t):t;let s=[];if(r)if(n){const e=Object(a["x"])(t,c=>Mt(c));s=Gr(c.serverSyncTree_,i,e,r)}else{const e=Mt(t);s=Yr(c.serverSyncTree_,i,e,r)}else if(n){const e=Object(a["x"])(t,c=>Mt(c));s=Wr(c.serverSyncTree_,i,e)}else{const e=Mt(t);s=$r(c.serverSyncTree_,i,e)}let o=i;s.length>0&&(o=gi(c,i)),Ya(c.eventQueue_,o,s)}function ai(c,e){si(c,"connected",e),!1===e&&hi(c)}function ii(c,e){N(e,(e,t)=>{si(c,e,t)})}function si(c,e,t){const n=new le("/.info/"+e),r=Mt(t);c.infoData_.updateSnapshot(n,r);const a=$r(c.infoSyncTree_,n,r);Ya(c.eventQueue_,n,a)}function oi(c){return c.nextWriteId_++}function li(c,e,t,n,r){mi(c,"set",{path:e.toString(),value:t,priority:n});const a=ni(c),i=Mt(t,n),s=Xr(c.serverSyncTree_,e),o=Ca(i,s,a),l=oi(c),h=qr(c.serverSyncTree_,e,o,l,!0);Ba(c.eventQueue_,h),c.server_.put(e.toString(),i.val(!0),(t,n)=>{const a="ok"===t;a||w("set at "+e+" failed: "+t);const i=Fr(c.serverSyncTree_,l,!a);Ya(c.eventQueue_,e,i),di(c,r,t,n)});const v=_i(c,e);gi(c,v),Ya(c.eventQueue_,v,[])}function hi(c){mi(c,"onDisconnectEvents");const e=ni(c),t=Pt();Rt(c.onDisconnect_,he(),(n,r)=>{const a=ga(n,r,c.serverSyncTree_,e);Nt(t,n,a)});let n=[];Rt(t,he(),(e,t)=>{n=n.concat($r(c.serverSyncTree_,e,t));const r=_i(c,e);gi(c,r)}),c.onDisconnect_=Pt(),Ya(c.eventQueue_,he(),n)}function vi(c,e,t){let n;n=".info"===ve(e._path)?Qr(c.infoSyncTree_,e,t):Qr(c.serverSyncTree_,e,t),Ka(c.eventQueue_,e._path,n)}function ui(c,e,t){let n;n=".info"===ve(e._path)?Kr(c.infoSyncTree_,e,t):Kr(c.serverSyncTree_,e,t),Ka(c.eventQueue_,e._path,n)}function fi(c){c.persistentConnection_&&c.persistentConnection_.interrupt(Xa)}function mi(c,...e){let t="";c.persistentConnection_&&(t=c.persistentConnection_.id+":"),V(t,...e)}function di(c,e,t,n){e&&B(()=>{if("ok"===t)e(null);else{const c=(t||"error").toUpperCase();let r=c;n&&(r+=": "+n);const a=new Error(r);a.code=c,e(a)}})}function zi(c,e,t){return Xr(c.serverSyncTree_,e,t)||mt.EMPTY_NODE}function pi(c,e=c.transactionQueueTree_){if(e||bi(c,e),ba(e)){const t=yi(c,e);Object(a["f"])(t.length>0,"Sending zero length transaction queue");const n=t.every(c=>0===c.status);n&&Mi(c,xa(e),t)}else La(e)&&Aa(e,e=>{pi(c,e)})}function Mi(c,e,t){const n=t.map(c=>c.currentWriteId),r=zi(c,e,n);let i=r;const s=r.hash();for(let h=0;h<t.length;h++){const c=t[h];Object(a["f"])(0===c.status,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const n=Ce(e,c.path);i=i.updateChild(n,c.currentOutputSnapshotRaw)}const o=i.val(!0),l=e;c.server_.put(l.toString(),o,n=>{mi(c,"transaction put response",{path:l.toString(),status:n});let r=[];if("ok"===n){const n=[];for(let e=0;e<t.length;e++)t[e].status=2,r=r.concat(Fr(c.serverSyncTree_,t[e].currentWriteId)),t[e].onComplete&&n.push(()=>t[e].onComplete(null,!0,t[e].currentOutputSnapshotResolved)),t[e].unwatcher();bi(c,Va(c.transactionQueueTree_,e)),pi(c,c.transactionQueueTree_),Ya(c.eventQueue_,e,r);for(let c=0;c<n.length;c++)B(n[c])}else{if("datastale"===n)for(let c=0;c<t.length;c++)3===t[c].status?t[c].status=4:t[c].status=0;else{w("transaction at "+l.toString()+" failed: "+n);for(let c=0;c<t.length;c++)t[c].status=4,t[c].abortReason=n}gi(c,e)}},s)}function gi(c,e){const t=Hi(c,e),n=xa(t),r=yi(c,t);return Ci(c,r,n),n}function Ci(c,e,t){if(0===e.length)return;const n=[];let r=[];const i=e.filter(c=>0===c.status),s=i.map(c=>c.currentWriteId);for(let o=0;o<e.length;o++){const i=e[o],l=Ce(t,i.path);let h,v=!1;if(Object(a["f"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===i.status)v=!0,h=i.abortReason,r=r.concat(Fr(c.serverSyncTree_,i.currentWriteId,!0));else if(0===i.status)if(i.retryCount>=Ja)v=!0,h="maxretry",r=r.concat(Fr(c.serverSyncTree_,i.currentWriteId,!0));else{const t=zi(c,i.path,s);i.currentInputSnapshot=t;const n=e[o].update(t.val());if(void 0!==n){Za("transaction failed: Data returned ",n,i.path);let e=Mt(n);const o="object"===typeof n&&null!=n&&Object(a["j"])(n,".priority");o||(e=e.updatePriority(t.getPriority()));const l=i.currentWriteId,h=ni(c),v=Ca(e,t,h);i.currentOutputSnapshotRaw=e,i.currentOutputSnapshotResolved=v,i.currentWriteId=oi(c),s.splice(s.indexOf(l),1),r=r.concat(qr(c.serverSyncTree_,i.path,v,i.currentWriteId,i.applyLocally)),r=r.concat(Fr(c.serverSyncTree_,l,!0))}else v=!0,h="nodata",r=r.concat(Fr(c.serverSyncTree_,i.currentWriteId,!0))}Ya(c.eventQueue_,t,r),r=[],v&&(e[o].status=2,function(c){setTimeout(c,Math.floor(0))}(e[o].unwatcher),e[o].onComplete&&("nodata"===h?n.push(()=>e[o].onComplete(null,!1,e[o].currentInputSnapshot)):n.push(()=>e[o].onComplete(new Error(h),!1,null))))}bi(c,c.transactionQueueTree_);for(let a=0;a<n.length;a++)B(n[a]);pi(c,c.transactionQueueTree_)}function Hi(c,e){let t,n=c.transactionQueueTree_;t=ve(e);while(null!==t&&void 0===ba(n))n=Va(n,t),e=fe(e),t=ve(e);return n}function yi(c,e){const t=[];return Vi(c,e,t),t.sort((c,e)=>c.order-e.order),t}function Vi(c,e,t){const n=ba(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);Aa(e,e=>{Vi(c,e,t)})}function bi(c,e){const t=ba(e);if(t){let c=0;for(let e=0;e<t.length;e++)2!==t[e].status&&(t[c]=t[e],c++);t.length=c,_a(e,t.length>0?t:void 0)}Aa(e,e=>{bi(c,e)})}function _i(c,e){const t=xa(Hi(c,e)),n=Va(c.transactionQueueTree_,e);return ka(n,e=>{Li(c,e)}),Li(c,n),Sa(n,e=>{Li(c,e)}),t}function Li(c,e){const t=ba(e);if(t){const n=[];let r=[],i=-1;for(let e=0;e<t.length;e++)3===t[e].status||(1===t[e].status?(Object(a["f"])(i===e-1,"All SENT items should be at beginning of queue."),i=e,t[e].status=3,t[e].abortReason="set"):(Object(a["f"])(0===t[e].status,"Unexpected transaction status in abort"),t[e].unwatcher(),r=r.concat(Fr(c.serverSyncTree_,t[e].currentWriteId,!0)),t[e].onComplete&&n.push(t[e].onComplete.bind(null,new Error("set"),!1,null))));-1===i?_a(e,void 0):t.length=i+1,Ya(c.eventQueue_,xa(e),r);for(let c=0;c<n.length;c++)B(n[c])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(c){let e="";const t=c.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let c=t[r];try{c=decodeURIComponent(c.replace(/\+/g," "))}catch(n){}e+="/"+c}return e}function Ai(c){const e={};"?"===c.charAt(0)&&(c=c.substring(1));for(const t of c.split("&")){if(0===t.length)continue;const n=t.split("=");2===n.length?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):w(`Invalid query segment '${t}' in query '${c}'`)}return e}const Si=function(c,e){const t=ki(c),n=t.namespace;"firebase.com"===t.domain&&L(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===t.domain||L("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||A();const r="ws"===t.scheme||"wss"===t.scheme;return{repoInfo:new hc(t.host,t.secure,n,e,r,"",n!==t.subdomain),path:new le(t.pathString)}},ki=function(c){let e="",t="",n="",r="",a="",i=!0,s="https",o=443;if("string"===typeof c){let l=c.indexOf("//");l>=0&&(s=c.substring(0,l-1),c=c.substring(l+2));let h=c.indexOf("/");-1===h&&(h=c.length);let v=c.indexOf("?");-1===v&&(v=c.length),e=c.substring(0,Math.min(h,v)),h<v&&(r=wi(c.substring(h,v)));const u=Ai(c.substring(Math.min(c.length,v)));l=e.indexOf(":"),l>=0?(i="https"===s||"wss"===s,o=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if("localhost"===f.toLowerCase())t="localhost";else if(f.split(".").length<=2)t=f;else{const c=e.indexOf(".");n=e.substring(0,c).toLowerCase(),t=e.substring(c+1),a=n}"ns"in u&&(a=u["ns"])}return{host:e,port:o,domain:t,subdomain:n,secure:i,scheme:s,pathString:r,namespace:a}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(c,e,t,n){this.eventType=c,this.eventRegistration=e,this.snapshot=t,this.prevName=n}getPath(){const c=this.snapshot.ref;return"value"===this.eventType?c._path:c.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(a["C"])(this.snapshot.exportVal())}}class Oi{constructor(c,e,t){this.eventRegistration=c,this.error=e,this.path=t}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(c,e){this.snapshotCallback=c,this.cancelCallback=e}onValue(c,e){this.snapshotCallback.call(null,c,e)}onCancel(c){return Object(a["f"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,c)}get hasCancelCallback(){return!!this.cancelCallback}matches(c){return this.snapshotCallback===c.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===c.snapshotCallback.userCallback&&this.snapshotCallback.context===c.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(c,e,t,n){this._repo=c,this._path=e,this._queryParams=t,this._orderByCalled=n}get key(){return ge(this._path)?null:me(this._path)}get ref(){return new Ei(this._repo,this._path)}get _queryIdentifier(){const c=It(this._queryParams),e=j(c);return"{}"===e?"default":e}get _queryObject(){return It(this._queryParams)}isEqual(c){if(c=Object(a["o"])(c),!(c instanceof Ii))return!1;const e=this._repo===c._repo,t=He(this._path,c._path),n=this._queryIdentifier===c._queryIdentifier;return e&&t&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+de(this._path)}}class Ei extends Ii{constructor(c,e){super(c,e,new xt,!1)}get parent(){const c=pe(this._path);return null===c?null:new Ei(this._repo,c)}get root(){let c=this;while(null!==c.parent)c=c.parent;return c}}class ji{constructor(c,e,t){this._node=c,this.ref=e,this._index=t}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(c){const e=new le(c),t=Ni(this.ref,c);return new ji(this._node.getChild(e),t,it)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(c){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,t)=>c(new ji(t,Ni(this.ref,e),it)))}hasChild(c){const e=new le(c);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pi(c,e){return c=Object(a["o"])(c),c._checkNotDeleted("ref"),void 0!==e?Ni(c._root,e):c._root}function Ni(c,e){return c=Object(a["o"])(c),null===ve(c._path)?Fa("child","path",e,!1):qa("child","path",e,!1),new Ei(c._repo,Me(c._path,e))}function Ri(c,e){c=Object(a["o"])(c),$a("set",c._path),Da("set",e,c._path,!1);const t=new a["a"];return li(c._repo,c._path,e,null,t.wrapCallback(()=>{})),t.promise}class Di{constructor(c){this.callbackContext=c}respondsTo(c){return"value"===c}createEvent(c,e){const t=e._queryParams.getIndex();return new xi("value",this,new ji(c.snapshotNode,new Ei(e._repo,e._path),t))}getEventRunner(c){return"cancel"===c.getEventType()?()=>this.callbackContext.onCancel(c.error):()=>this.callbackContext.onValue(c.snapshot,null)}createCancelEvent(c,e){return this.callbackContext.hasCancelCallback?new Oi(this,c,e):null}matches(c){return c instanceof Di&&(!c.callbackContext||!this.callbackContext||c.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Zi{constructor(c,e){this.eventType=c,this.callbackContext=e}respondsTo(c){let e="children_added"===c?"child_added":c;return e="children_removed"===e?"child_removed":e,this.eventType===e}createCancelEvent(c,e){return this.callbackContext.hasCancelCallback?new Oi(this,c,e):null}createEvent(c,e){Object(a["f"])(null!=c.childName,"Child events should have a childName.");const t=Ni(new Ei(e._repo,e._path),c.childName),n=e._queryParams.getIndex();return new xi(c.type,this,new ji(c.snapshotNode,t,n),c.prevName)}getEventRunner(c){return"cancel"===c.getEventType()?()=>this.callbackContext.onCancel(c.error):()=>this.callbackContext.onValue(c.snapshot,c.prevName)}matches(c){return c instanceof Zi&&(this.eventType===c.eventType&&(!this.callbackContext||!c.callbackContext||this.callbackContext.matches(c.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function qi(c,e,t,n,r){let a;if("object"===typeof n&&(a=void 0,r=n),"function"===typeof n&&(a=n),r&&r.onlyOnce){const e=t,n=(t,n)=>{ui(c._repo,c,s),e(t,n)};n.userCallback=t.userCallback,n.context=t.context,t=n}const i=new Ti(t,a||void 0),s="value"===e?new Di(i):new Zi(e,i);return vi(c._repo,c,s),()=>ui(c._repo,c,s)}function Fi(c,e,t,n){return qi(c,"value",e,t,n)}_r(Ei),Nr(Ei);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $i="FIREBASE_DATABASE_EMULATOR_HOST",Wi={};let Ui=!1;function Bi(e,t,n,r,a){let i=r||e.options.databaseURL;void 0===i&&(e.options.projectId||L("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),V("Using default host for project ",e.options.projectId),i=e.options.projectId+"-default-rtdb.firebaseio.com");let s,o=Si(i,a),l=o.repoInfo,h=void 0;"undefined"!==typeof c&&(h=Object({NODE_ENV:"production",BASE_URL:""})[$i]),h?(s=!0,i=`http://${h}?ns=${l.namespace}`,o=Si(i,a),l=o.repoInfo):s=!o.repoInfo.secure;const v=a&&s?new X(X.OWNER):new Q(e.name,e.options,t);Wa("Invalid Firebase Database URL",o),ge(o.path)||L("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Yi(l,e,v,new G(e.name,n));return new Gi(u,e)}function Ki(c,e){const t=Wi[e];t&&t[c.key]===c||L(`Database ${e}(${c.repoInfo_}) has already been deleted.`),fi(c),delete t[c.key]}function Yi(c,e,t,n){let r=Wi[e.name];r||(r={},Wi[e.name]=r);let a=r[c.toURLString()];return a&&L("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new ci(c,Ui,t,n),r[c.toURLString()]=a,a}class Gi{constructor(c,e){this._repoInternal=c,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ei(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ei(this._repo,he())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Ki(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(c){null===this._rootInternal&&L("Cannot call "+c+" on a deleted database.")}}function Qi(c=Object(n["d"])(),e){return Object(n["b"])(c,"database").getImmediate({identifier:e})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(c){h(n["a"]),Object(n["c"])(new r["a"]("database",(c,{instanceIdentifier:e})=>{const t=c.getProvider("app").getImmediate(),n=c.getProvider("auth-internal"),r=c.getProvider("app-check-internal");return Bi(t,n,r,e)},"PUBLIC").setMultipleInstances(!0)),Object(n["f"])(s,o,c),Object(n["f"])(s,o,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.prototype.simpleListen=function(c,e){this.sendRequest("q",{p:c},e)},Pe.prototype.echo=function(c,e){this.sendRequest("echo",{d:c},e)};Xi()}).call(this,t("4362"))},5606:function(c,e,t){"use strict";t.d(e,"a",(function(){return U})),t.d(e,"b",(function(){return q})),t.d(e,"c",(function(){return Z})),t.d(e,"d",(function(){return K})),t.d(e,"e",(function(){return B})),t.d(e,"f",(function(){return Y}));var n=t("ffa6"),r=t("4fc1"),a=t("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class i{constructor(c){this.container=c}getPlatformInfoString(){const c=this.container.getProviders();return c.map(c=>{if(s(c)){const e=c.getImmediate();return`${e.library}/${e.version}`}return null}).filter(c=>c).join(" ")}}function s(c){const e=c.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const o="@firebase/app",l="0.7.4",h=new r["b"]("@firebase/app"),v="@firebase/app-compat",u="@firebase/analytics-compat",f="@firebase/analytics",m="@firebase/app-check-compat",d="@firebase/app-check",z="@firebase/auth",p="@firebase/auth-compat",M="@firebase/database",g="@firebase/database-compat",C="@firebase/functions",H="@firebase/functions-compat",y="@firebase/installations",V="@firebase/installations-compat",b="@firebase/messaging",_="@firebase/messaging-compat",L="@firebase/performance",w="@firebase/performance-compat",A="@firebase/remote-config",S="@firebase/remote-config-compat",k="@firebase/storage",x="@firebase/storage-compat",O="@firebase/firestore",T="@firebase/firestore-compat",I="firebase",E="9.1.3",j="[DEFAULT]",P={[o]:"fire-core",[v]:"fire-core-compat",[f]:"fire-analytics",[u]:"fire-analytics-compat",[d]:"fire-app-check",[m]:"fire-app-check-compat",[z]:"fire-auth",[p]:"fire-auth-compat",[M]:"fire-rtdb",[g]:"fire-rtdb-compat",[C]:"fire-fn",[H]:"fire-fn-compat",[y]:"fire-iid",[V]:"fire-iid-compat",[b]:"fire-fcm",[_]:"fire-fcm-compat",[L]:"fire-perf",[w]:"fire-perf-compat",[A]:"fire-rc",[S]:"fire-rc-compat",[k]:"fire-gcs",[x]:"fire-gcs-compat",[O]:"fire-fst",[T]:"fire-fst-compat","fire-js":"fire-js",[I]:"fire-js-all"},N=new Map,R=new Map;function D(c,e){try{c.container.addComponent(e)}catch(t){h.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,t)}}function Z(c){const e=c.name;if(R.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;R.set(e,c);for(const t of N.values())D(t,c);return!0}function q(c,e){return c.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$=new a["b"]("app","Firebase",F);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(c,e,t){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new n["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=E;function B(c,e={}){if("object"!==typeof e){const c=e;e={name:c}}const t=Object.assign({name:j,automaticDataCollectionEnabled:!1},e),r=t.name;if("string"!==typeof r||!r)throw $.create("bad-app-name",{appName:String(r)});const i=N.get(r);if(i){if(Object(a["m"])(c,i.options)&&Object(a["m"])(t,i.config))return i;throw $.create("duplicate-app",{appName:r})}const s=new n["b"](r);for(const n of R.values())s.addComponent(n);const o=new W(c,t,s);return N.set(r,o),o}function K(c=j){const e=N.get(c);if(!e)throw $.create("no-app",{appName:c});return e}function Y(c,e,t){var r;let a=null!==(r=P[c])&&void 0!==r?r:c;t&&(a+="-"+t);const i=a.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const c=[`Unable to register library "${a}" with version "${e}":`];return i&&c.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&s&&c.push("and"),s&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(c.join(" "))}Z(new n["a"](a+"-version",()=>({library:a,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(c){Z(new n["a"]("platform-logger",c=>new i(c),"PRIVATE")),Y(o,l,c),Y(o,l,"esm2017"),Y("fire-js","")}G("")},5692:function(c,e,t){var n=t("c430"),r=t("c6cd");(c.exports=function(c,e){return r[c]||(r[c]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(c,e,t){var n=t("d066"),r=t("241c"),a=t("7418"),i=t("825a");c.exports=n("Reflect","ownKeys")||function(c){var e=r.f(i(c)),t=a.f;return t?e.concat(t(c)):e}},5926:function(c,e){var t=Math.ceil,n=Math.floor;c.exports=function(c){var e=+c;return e!==e||0===e?0:(e>0?n:t)(e)}},"59ed":function(c,e,t){var n=t("1626"),r=t("0d51");c.exports=function(c){if(n(c))return c;throw TypeError(r(c)+" is not a function")}},"5c6c":function(c,e){c.exports=function(c,e){return{enumerable:!(1&c),configurable:!(2&c),writable:!(4&c),value:e}}},"5e77":function(c,e,t){var n=t("83ab"),r=t("1a2d"),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,s=r(a,"name"),o=s&&"something"===function(){}.name,l=s&&(!n||n&&i(a,"name").configurable);c.exports={EXISTS:s,PROPER:o,CONFIGURABLE:l}},"605d":function(c,e,t){var n=t("c6b6"),r=t("da84");c.exports="process"==n(r.process)},6069:function(c,e){c.exports="object"==typeof window},"60da":function(c,e,t){"use strict";var n=t("83ab"),r=t("d039"),a=t("df75"),i=t("7418"),s=t("d1e7"),o=t("7b0b"),l=t("44ad"),h=Object.assign,v=Object.defineProperty;c.exports=!h||r((function(){if(n&&1!==h({b:1},h(v({},"a",{enumerable:!0,get:function(){v(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var c={},e={},t=Symbol(),r="abcdefghijklmnopqrst";return c[t]=7,r.split("").forEach((function(c){e[c]=c})),7!=h({},c)[t]||a(h({},e)).join("")!=r}))?function(c,e){var t=o(c),r=arguments.length,h=1,v=i.f,u=s.f;while(r>h){var f,m=l(arguments[h++]),d=v?a(m).concat(v(m)):a(m),z=d.length,p=0;while(z>p)f=d[p++],n&&!u.call(m,f)||(t[f]=m[f])}return t}:h},"66ce":function(c,e,t){"use strict";var n=t("51b0");t.d(e,"a",(function(){return n["a"]})),t.d(e,"b",(function(){return n["b"]})),t.d(e,"c",(function(){return n["c"]})),t.d(e,"d",(function(){return n["d"]}))},"68ee":function(c,e,t){var n=t("d039"),r=t("1626"),a=t("f5df"),i=t("d066"),s=t("8925"),o=[],l=i("Reflect","construct"),h=/^\s*(?:class|function)\b/,v=h.exec,u=!h.exec((function(){})),f=function(c){if(!r(c))return!1;try{return l(Object,o,c),!0}catch(e){return!1}},m=function(c){if(!r(c))return!1;switch(a(c)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return u||!!v.call(h,s(c))};c.exports=!l||n((function(){var c;return f(f.call)||!f(Object)||!f((function(){c=!0}))||c}))?m:f},"69f3":function(c,e,t){var n,r,a,i=t("7f9a"),s=t("da84"),o=t("861d"),l=t("9112"),h=t("1a2d"),v=t("c6cd"),u=t("f772"),f=t("d012"),m="Object already initialized",d=s.WeakMap,z=function(c){return a(c)?r(c):n(c,{})},p=function(c){return function(e){var t;if(!o(e)||(t=r(e)).type!==c)throw TypeError("Incompatible receiver, "+c+" required");return t}};if(i||v.state){var M=v.state||(v.state=new d),g=M.get,C=M.has,H=M.set;n=function(c,e){if(C.call(M,c))throw new TypeError(m);return e.facade=c,H.call(M,c,e),e},r=function(c){return g.call(M,c)||{}},a=function(c){return C.call(M,c)}}else{var y=u("state");f[y]=!0,n=function(c,e){if(h(c,y))throw new TypeError(m);return e.facade=c,l(c,y,e),e},r=function(c){return h(c,y)?c[y]:{}},a=function(c){return h(c,y)}}c.exports={set:n,get:r,has:a,enforce:z,getterFor:p}},"6eeb":function(c,e,t){var n=t("da84"),r=t("1626"),a=t("1a2d"),i=t("9112"),s=t("ce4e"),o=t("8925"),l=t("69f3"),h=t("5e77").CONFIGURABLE,v=l.get,u=l.enforce,f=String(String).split("String");(c.exports=function(c,e,t,o){var l,v=!!o&&!!o.unsafe,m=!!o&&!!o.enumerable,d=!!o&&!!o.noTargetGet,z=o&&void 0!==o.name?o.name:e;r(t)&&("Symbol("===String(z).slice(0,7)&&(z="["+String(z).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!a(t,"name")||h&&t.name!==z)&&i(t,"name",z),l=u(t),l.source||(l.source=f.join("string"==typeof z?z:""))),c!==n?(v?!d&&c[e]&&(m=!0):delete c[e],m?c[e]=t:i(c,e,t)):m?c[e]=t:s(e,t)})(Function.prototype,"toString",(function(){return r(this)&&v(this).source||o(this)}))},7051:function(c,e,t){(function(c){
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="/firebase-messaging-sw.js",o="/firebase-cloud-messaging-push-scope",l="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",h="https://fcmregistrations.googleapis.com/v1",v="google.c.a.c_id",u="google.c.a.c_l",f="google.c.a.ts",m="google.c.a.e";var d,z;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(c){const e=new Uint8Array(c),t=btoa(String.fromCharCode(...e));return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function M(c){const e="=".repeat((4-c.length%4)%4),t=(c+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let a=0;a<n.length;++a)r[a]=n.charCodeAt(a);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(c){c[c["DATA_MESSAGE"]=1]="DATA_MESSAGE",c[c["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(d||(d={})),function(c){c["PUSH_RECEIVED"]="push-received",c["NOTIFICATION_CLICKED"]="notification-clicked"}(z||(z={}));const g="fcm_token_details_db",C=5,H="fcm_token_object_Store";async function y(c){if("databases"in indexedDB){const c=await indexedDB.databases(),e=c.map(c=>c.name);if(!e.includes(g))return null}let e=null;const t=await Object(r["openDb"])(g,C,async t=>{var n;if(t.oldVersion<2)return;if(!t.objectStoreNames.contains(H))return;const r=t.transaction.objectStore(H),a=await r.index("fcmSenderId").get(c);if(await r.clear(),a)if(2===t.oldVersion){const c=a;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:null!==(n=c.createTime)&&void 0!==n?n:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"===typeof c.vapidKey?c.vapidKey:p(c.vapidKey)}}}else if(3===t.oldVersion){const c=a;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:p(c.auth),p256dh:p(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:p(c.vapidKey)}}}else if(4===t.oldVersion){const c=a;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:p(c.auth),p256dh:p(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:p(c.vapidKey)}}}});return t.close(),await Object(r["deleteDb"])(g),await Object(r["deleteDb"])("fcm_vapid_details_db"),await Object(r["deleteDb"])("undefined"),V(e)?e:null}function V(c){if(!c||!c.subscriptionOptions)return!1;const{subscriptionOptions:e}=c;return"number"===typeof c.createTime&&c.createTime>0&&"string"===typeof c.token&&c.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b="firebase-messaging-database",_=1,L="firebase-messaging-store";let w=null;function A(){return w||(w=Object(r["openDb"])(b,_,c=>{switch(c.oldVersion){case 0:c.createObjectStore(L)}})),w}async function S(c){const e=O(c),t=await A(),n=await t.transaction(L).objectStore(L).get(e);if(n)return n;{const e=await y(c.appConfig.senderId);if(e)return await k(c,e),e}}async function k(c,e){const t=O(c),n=await A(),r=n.transaction(L,"readwrite");return await r.objectStore(L).put(e,t),await r.complete,e}async function x(c){const e=O(c),t=await A(),n=t.transaction(L,"readwrite");await n.objectStore(L).delete(e),await n.complete}function O({appConfig:c}){return c.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},I=new a["b"]("messaging","Messaging",T);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function E(c,e){const t=await R(c),n=D(e),r={method:"POST",headers:t,body:JSON.stringify(n)};let a;try{const e=await fetch(N(c.appConfig),r);a=await e.json()}catch(i){throw I.create("token-subscribe-failed",{errorInfo:i})}if(a.error){const c=a.error.message;throw I.create("token-subscribe-failed",{errorInfo:c})}if(!a.token)throw I.create("token-subscribe-no-token");return a.token}async function j(c,e){const t=await R(c),n=D(e.subscriptionOptions),r={method:"PATCH",headers:t,body:JSON.stringify(n)};let a;try{const t=await fetch(`${N(c.appConfig)}/${e.token}`,r);a=await t.json()}catch(i){throw I.create("token-update-failed",{errorInfo:i})}if(a.error){const c=a.error.message;throw I.create("token-update-failed",{errorInfo:c})}if(!a.token)throw I.create("token-update-no-token");return a.token}async function P(c,e){const t=await R(c),n={method:"DELETE",headers:t};try{const t=await fetch(`${N(c.appConfig)}/${e}`,n),r=await t.json();if(r.error){const c=r.error.message;throw I.create("token-unsubscribe-failed",{errorInfo:c})}}catch(r){throw I.create("token-unsubscribe-failed",{errorInfo:r})}}function N({projectId:c}){return`${h}/projects/${c}/registrations`}async function R({appConfig:c,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})}function D({p256dh:c,auth:e,endpoint:t,vapidKey:n}){const r={web:{endpoint:t,auth:e,p256dh:c}};return n!==l&&(r.web.applicationPubKey=n),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=6048e5;async function q(c){const e=await U(c.swRegistration,c.vapidKey),t={vapidKey:c.vapidKey,swScope:c.swRegistration.scope,endpoint:e.endpoint,auth:p(e.getKey("auth")),p256dh:p(e.getKey("p256dh"))},n=await S(c.firebaseDependencies);if(n){if(B(n.subscriptionOptions,t))return Date.now()>=n.createTime+Z?$(c,{token:n.token,createTime:Date.now(),subscriptionOptions:t}):n.token;try{await P(c.firebaseDependencies,n.token)}catch(r){console.warn(r)}return W(c.firebaseDependencies,t)}return W(c.firebaseDependencies,t)}async function F(c){const e=await S(c.firebaseDependencies);e&&(await P(c.firebaseDependencies,e.token),await x(c.firebaseDependencies));const t=await c.swRegistration.pushManager.getSubscription();return!t||t.unsubscribe()}async function $(c,e){try{const t=await j(c.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await k(c.firebaseDependencies,n),t}catch(t){throw await F(c),t}}async function W(c,e){const t=await E(c,e),n={token:t,createTime:Date.now(),subscriptionOptions:e};return await k(c,n),n.token}async function U(c,e){const t=await c.pushManager.getSubscription();return t||c.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:M(e)})}function B(c,e){const t=e.vapidKey===c.vapidKey,n=e.endpoint===c.endpoint,r=e.auth===c.auth,a=e.p256dh===c.p256dh;return t&&n&&r&&a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(c){const e={from:c.from,collapseKey:c.collapse_key,messageId:c.fcm_message_id};return Y(e,c),G(e,c),Q(e,c),e}function Y(c,e){if(!e.notification)return;c.notification={};const t=e.notification.title;t&&(c.notification.title=t);const n=e.notification.body;n&&(c.notification.body=n);const r=e.notification.image;r&&(c.notification.image=r)}function G(c,e){e.data&&(c.data=e.data)}function Q(c,e){if(!e.fcmOptions)return;c.fcmOptions={};const t=e.fcmOptions.link;t&&(c.fcmOptions.link=t);const n=e.fcmOptions.analytics_label;n&&(c.fcmOptions.analyticsLabel=n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(c){return"object"===typeof c&&!!c&&v in c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(c,e){const t=[];for(let n=0;n<c.length;n++)t.push(c.charAt(n)),n<e.length&&t.push(e.charAt(n));return t.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(c){if(!c||!c.options)throw ec("App Configuration Object");if(!c.name)throw ec("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=c;for(const n of e)if(!t[n])throw ec(n);return{appName:c.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function ec(c){return I.create("missing-app-config-values",{valueName:c})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),J("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class tc{constructor(c,e,t){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const n=cc(c);this.firebaseDependencies={app:c,appConfig:n,installations:e,analyticsProvider:t}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(c){try{c.swRegistration=await navigator.serviceWorker.register(s,{scope:o}),c.swRegistration.update().catch(()=>{})}catch(e){throw I.create("failed-service-worker-registration",{browserErrorMessage:e.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(c,e){if(e||c.swRegistration||await nc(c),e||!c.swRegistration){if(!(e instanceof ServiceWorkerRegistration))throw I.create("invalid-sw-registration");c.swRegistration=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(c,e){e?c.vapidKey=e:c.vapidKey||(c.vapidKey=l)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(c,e){if(!navigator)throw I.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw I.create("permission-blocked");return await ac(c,null===e||void 0===e?void 0:e.vapidKey),await rc(c,null===e||void 0===e?void 0:e.serviceWorkerRegistration),q(c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(c,e,t){const n=oc(e),r=await c.firebaseDependencies.analyticsProvider.get();r.logEvent(n,{message_id:t[v],message_name:t[u],message_time:t[f],message_device_time:Math.floor(Date.now()/1e3)})}function oc(c){switch(c){case z.NOTIFICATION_CLICKED:return"notification_open";case z.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(c,e){const t=e.data;if(!t.isFirebaseMessaging)return;c.onMessageHandler&&t.messageType===z.PUSH_RECEIVED&&("function"===typeof c.onMessageHandler?c.onMessageHandler(K(t)):c.onMessageHandler.next(K(t)));const n=t.data;X(n)&&"1"===n[m]&&await sc(c,t.messageType,n)}const hc="@firebase/messaging",vc="0.9.2",uc=c=>{const e=new tc(c.getProvider("app").getImmediate(),c.getProvider("installations-internal").getImmediate(),c.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",c=>lc(e,c)),e},fc=c=>{const e=c.getProvider("messaging").getImmediate(),t={getToken:c=>ic(e,c)};return t};function mc(){Object(i["c"])(new n["a"]("messaging",uc,"PUBLIC")),Object(i["c"])(new n["a"]("messaging-internal",fc,"PRIVATE")),Object(i["f"])(hc,vc),Object(i["f"])(hc,vc,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(){return"undefined"!==typeof window&&Object(a["r"])()&&await Object(a["D"])()&&Object(a["e"])()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zc(c,e){if(!navigator)throw I.create("only-available-in-window");return c.onMessageHandler=e,()=>{c.onMessageHandler=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(c=Object(i["d"])()){return dc().then(c=>{if(!c)throw I.create("unsupported-browser")},c=>{throw I.create("indexed-db-unsupported")}),Object(i["b"])(Object(a["o"])(c),"messaging").getImmediate()}async function Mc(c,e){return c=Object(a["o"])(c),ic(c,e)}function gc(c,e){return c=Object(a["o"])(c),zc(c,e)}mc()},7839:function(c,e){c.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(c,e,t){var n=t("1d80");c.exports=function(c){return Object(n(c))}},"7c73":function(c,e,t){var n,r=t("825a"),a=t("37e8"),i=t("7839"),s=t("d012"),o=t("1be4"),l=t("cc12"),h=t("f772"),v=">",u="<",f="prototype",m="script",d=h("IE_PROTO"),z=function(){},p=function(c){return u+m+v+c+u+"/"+m+v},M=function(c){c.write(p("")),c.close();var e=c.parentWindow.Object;return c=null,e},g=function(){var c,e=l("iframe"),t="java"+m+":";return e.style.display="none",o.appendChild(e),e.src=String(t),c=e.contentWindow.document,c.open(),c.write(p("document.F=Object")),c.close(),c.F},C=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}C="undefined"!=typeof document?document.domain&&n?M(n):g():M(n);var c=i.length;while(c--)delete C[f][i[c]];return C()};s[d]=!0,c.exports=Object.create||function(c,e){var t;return null!==c?(z[f]=r(c),t=new z,z[f]=null,t[d]=c):t=C(),void 0===e?t:a(t,e)}},"7dd0":function(c,e,t){"use strict";var n=t("23e7"),r=t("c430"),a=t("5e77"),i=t("1626"),s=t("9ed3"),o=t("e163"),l=t("d2bb"),h=t("d44e"),v=t("9112"),u=t("6eeb"),f=t("b622"),m=t("3f8c"),d=t("ae93"),z=a.PROPER,p=a.CONFIGURABLE,M=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,C=f("iterator"),H="keys",y="values",V="entries",b=function(){return this};c.exports=function(c,e,t,a,f,d,_){s(t,e,a);var L,w,A,S=function(c){if(c===f&&I)return I;if(!g&&c in O)return O[c];switch(c){case H:return function(){return new t(this,c)};case y:return function(){return new t(this,c)};case V:return function(){return new t(this,c)}}return function(){return new t(this)}},k=e+" Iterator",x=!1,O=c.prototype,T=O[C]||O["@@iterator"]||f&&O[f],I=!g&&T||S(f),E="Array"==e&&O.entries||T;if(E&&(L=o(E.call(new c)),L!==Object.prototype&&L.next&&(r||o(L)===M||(l?l(L,M):i(L[C])||u(L,C,b)),h(L,k,!0,!0),r&&(m[k]=b))),z&&f==y&&T&&T.name!==y&&(!r&&p?v(O,"name",y):(x=!0,I=function(){return T.call(this)})),f)if(w={values:S(y),keys:d?I:S(H),entries:S(V)},_)for(A in w)(g||x||!(A in O))&&u(O,A,w[A]);else n({target:e,proto:!0,forced:g||x},w);return r&&!_||O[C]===I||u(O,C,I,{name:f}),m[e]=I,w}},"7f9a":function(c,e,t){var n=t("da84"),r=t("1626"),a=t("8925"),i=n.WeakMap;c.exports=r(i)&&/native code/.test(a(i))},"825a":function(c,e,t){var n=t("861d");c.exports=function(c){if(n(c))return c;throw TypeError(String(c)+" is not an object")}},"83ab":function(c,e,t){var n=t("d039");c.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(c,e,t){var n=t("1626");c.exports=function(c){return"object"===typeof c?null!==c:n(c)}},8925:function(c,e,t){var n=t("1626"),r=t("c6cd"),a=Function.toString;n(r.inspectSource)||(r.inspectSource=function(c){return a.call(c)}),c.exports=r.inspectSource},"90e3":function(c,e){var t=0,n=Math.random();c.exports=function(c){return"Symbol("+String(void 0===c?"":c)+")_"+(++t+n).toString(36)}},9112:function(c,e,t){var n=t("83ab"),r=t("9bf2"),a=t("5c6c");c.exports=n?function(c,e,t){return r.f(c,e,a(1,t))}:function(c,e,t){return c[e]=t,c}},9483:function(c,e,t){"use strict";t.d(e,"a",(function(){return a}));var n,r=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function a(c,e){void 0===e&&(e={});var t=e.registrationOptions;void 0===t&&(t={}),delete e.registrationOptions;var a=function(c){var t=[],n=arguments.length-1;while(n-- >0)t[n]=arguments[n+1];e&&e[c]&&e[c].apply(e,t)};"serviceWorker"in navigator&&n.then((function(){r()?(o(c,a,t),navigator.serviceWorker.ready.then((function(c){a("ready",c)})).catch((function(c){return i(a,c)}))):(s(c,a,t),navigator.serviceWorker.ready.then((function(c){a("ready",c)})).catch((function(c){return i(a,c)})))}))}function i(c,e){navigator.onLine||c("offline"),c("error",e)}function s(c,e,t){navigator.serviceWorker.register(c,t).then((function(c){e("registered",c),c.waiting?e("updated",c):c.onupdatefound=function(){e("updatefound",c);var t=c.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?e("updated",c):e("cached",c))}}})).catch((function(c){return i(e,c)}))}function o(c,e,t){fetch(c).then((function(n){404===n.status?(e("error",new Error("Service worker not found at "+c)),l()):-1===n.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+c+" to have javascript content-type, but received "+n.headers.get("content-type"))),l()):s(c,e,t)})).catch((function(c){return i(e,c)}))}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(c){c.unregister()})).catch((function(c){return i(emit,c)}))}"undefined"!==typeof window&&(n="undefined"!==typeof Promise?new Promise((function(c){return window.addEventListener("load",c)})):{then:function(c){return window.addEventListener("load",c)}})},"94ca":function(c,e,t){var n=t("d039"),r=t("1626"),a=/#|\.prototype\./,i=function(c,e){var t=o[s(c)];return t==h||t!=l&&(r(e)?n(e):!!e)},s=i.normalize=function(c){return String(c).replace(a,".").toLowerCase()},o=i.data={},l=i.NATIVE="N",h=i.POLYFILL="P";c.exports=i},"96cf":function(c,e,t){var n=function(c){"use strict";var e,t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function o(c,e,t){return Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),c[e]}try{o({},"")}catch(O){o=function(c,e,t){return c[e]=t}}function l(c,e,t,n){var r=e&&e.prototype instanceof z?e:z,a=Object.create(r.prototype),i=new S(n||[]);return a._invoke=_(c,t,i),a}function h(c,e,t){try{return{type:"normal",arg:c.call(e,t)}}catch(O){return{type:"throw",arg:O}}}c.wrap=l;var v="suspendedStart",u="suspendedYield",f="executing",m="completed",d={};function z(){}function p(){}function M(){}var g={};o(g,a,(function(){return this}));var C=Object.getPrototypeOf,H=C&&C(C(k([])));H&&H!==t&&n.call(H,a)&&(g=H);var y=M.prototype=z.prototype=Object.create(g);function V(c){["next","throw","return"].forEach((function(e){o(c,e,(function(c){return this._invoke(e,c)}))}))}function b(c,e){function t(r,a,i,s){var o=h(c[r],c,a);if("throw"!==o.type){var l=o.arg,v=l.value;return v&&"object"===typeof v&&n.call(v,"__await")?e.resolve(v.__await).then((function(c){t("next",c,i,s)}),(function(c){t("throw",c,i,s)})):e.resolve(v).then((function(c){l.value=c,i(l)}),(function(c){return t("throw",c,i,s)}))}s(o.arg)}var r;function a(c,n){function a(){return new e((function(e,r){t(c,n,e,r)}))}return r=r?r.then(a,a):a()}this._invoke=a}function _(c,e,t){var n=v;return function(r,a){if(n===f)throw new Error("Generator is already running");if(n===m){if("throw"===r)throw a;return x()}t.method=r,t.arg=a;while(1){var i=t.delegate;if(i){var s=L(i,t);if(s){if(s===d)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===v)throw n=m,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=f;var o=h(c,e,t);if("normal"===o.type){if(n=t.done?m:u,o.arg===d)continue;return{value:o.arg,done:t.done}}"throw"===o.type&&(n=m,t.method="throw",t.arg=o.arg)}}}function L(c,t){var n=c.iterator[t.method];if(n===e){if(t.delegate=null,"throw"===t.method){if(c.iterator["return"]&&(t.method="return",t.arg=e,L(c,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(n,c.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var a=r.arg;return a?a.done?(t[c.resultName]=a.value,t.next=c.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function w(c){var e={tryLoc:c[0]};1 in c&&(e.catchLoc=c[1]),2 in c&&(e.finallyLoc=c[2],e.afterLoc=c[3]),this.tryEntries.push(e)}function A(c){var e=c.completion||{};e.type="normal",delete e.arg,c.completion=e}function S(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(w,this),this.reset(!0)}function k(c){if(c){var t=c[a];if(t)return t.call(c);if("function"===typeof c.next)return c;if(!isNaN(c.length)){var r=-1,i=function t(){while(++r<c.length)if(n.call(c,r))return t.value=c[r],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}return{next:x}}function x(){return{value:e,done:!0}}return p.prototype=M,o(y,"constructor",M),o(M,"constructor",p),p.displayName=o(M,s,"GeneratorFunction"),c.isGeneratorFunction=function(c){var e="function"===typeof c&&c.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,M):(c.__proto__=M,o(c,s,"GeneratorFunction")),c.prototype=Object.create(y),c},c.awrap=function(c){return{__await:c}},V(b.prototype),o(b.prototype,i,(function(){return this})),c.AsyncIterator=b,c.async=function(e,t,n,r,a){void 0===a&&(a=Promise);var i=new b(l(e,t,n,r),a);return c.isGeneratorFunction(t)?i:i.next().then((function(c){return c.done?c.value:i.next()}))},V(y),o(y,s,"Generator"),o(y,a,(function(){return this})),o(y,"toString",(function(){return"[object Generator]"})),c.keys=function(c){var e=[];for(var t in c)e.push(t);return e.reverse(),function t(){while(e.length){var n=e.pop();if(n in c)return t.value=n,t.done=!1,t}return t.done=!0,t}},c.values=k,S.prototype={constructor:S,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!c)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var c=this.tryEntries[0],e=c.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var t=this;function r(n,r){return s.type="throw",s.arg=c,t.next=n,r&&(t.method="next",t.arg=e),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var o=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(o&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(c,e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===c||"continue"===c)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=c,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(c,e){if("throw"===c.type)throw c.arg;return"break"===c.type||"continue"===c.type?this.next=c.arg:"return"===c.type?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):"normal"===c.type&&e&&(this.next=e),d},finish:function(c){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===c)return this.complete(t.completion,t.afterLoc),A(t),d}},catch:function(c){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===c){var n=t.completion;if("throw"===n.type){var r=n.arg;A(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(c,t,n){return this.delegate={iterator:k(c),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=e),d}},c}(c.exports);try{regeneratorRuntime=n}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"9a1f":function(c,e,t){var n=t("59ed"),r=t("825a"),a=t("35a1");c.exports=function(c,e){var t=arguments.length<2?a(c):e;if(n(t))return r(t.call(c));throw TypeError(String(c)+" is not iterable")}},"9bf2":function(c,e,t){var n=t("83ab"),r=t("0cfb"),a=t("825a"),i=t("a04b"),s=Object.defineProperty;e.f=n?s:function(c,e,t){if(a(c),e=i(e),a(t),r)try{return s(c,e,t)}catch(n){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(c[e]=t.value),c}},"9dbb":function(c,e,t){(function(c,t){t(e)})(0,(function(c){"use strict";function e(c){return Array.prototype.slice.call(c)}function t(c){return new Promise((function(e,t){c.onsuccess=function(){e(c.result)},c.onerror=function(){t(c.error)}}))}function n(c,e,n){var r,a=new Promise((function(a,i){r=c[e].apply(c,n),t(r).then(a,i)}));return a.request=r,a}function r(c,e,t){var r=n(c,e,t);return r.then((function(c){if(c)return new h(c,r.request)}))}function a(c,e,t){t.forEach((function(t){Object.defineProperty(c.prototype,t,{get:function(){return this[e][t]},set:function(c){this[e][t]=c}})}))}function i(c,e,t,r){r.forEach((function(r){r in t.prototype&&(c.prototype[r]=function(){return n(this[e],r,arguments)})}))}function s(c,e,t,n){n.forEach((function(n){n in t.prototype&&(c.prototype[n]=function(){return this[e][n].apply(this[e],arguments)})}))}function o(c,e,t,n){n.forEach((function(n){n in t.prototype&&(c.prototype[n]=function(){return r(this[e],n,arguments)})}))}function l(c){this._index=c}function h(c,e){this._cursor=c,this._request=e}function v(c){this._store=c}function u(c){this._tx=c,this.complete=new Promise((function(e,t){c.oncomplete=function(){e()},c.onerror=function(){t(c.error)},c.onabort=function(){t(c.error)}}))}function f(c,e,t){this._db=c,this.oldVersion=e,this.transaction=new u(t)}function m(c){this._db=c}function d(c,e,t){var r=n(indexedDB,"open",[c,e]),a=r.request;return a&&(a.onupgradeneeded=function(c){t&&t(new f(a.result,c.oldVersion,a.transaction))}),r.then((function(c){return new m(c)}))}function z(c){return n(indexedDB,"deleteDatabase",[c])}a(l,"_index",["name","keyPath","multiEntry","unique"]),i(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),o(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),a(h,"_cursor",["direction","key","primaryKey","value"]),i(h,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(c){c in IDBCursor.prototype&&(h.prototype[c]=function(){var e=this,n=arguments;return Promise.resolve().then((function(){return e._cursor[c].apply(e._cursor,n),t(e._request).then((function(c){if(c)return new h(c,e._request)}))}))})})),v.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},v.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},a(v,"_store",["name","keyPath","indexNames","autoIncrement"]),i(v,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),o(v,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(v,"_store",IDBObjectStore,["deleteIndex"]),u.prototype.objectStore=function(){return new v(this._tx.objectStore.apply(this._tx,arguments))},a(u,"_tx",["objectStoreNames","mode"]),s(u,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new v(this._db.createObjectStore.apply(this._db,arguments))},a(f,"_db",["name","version","objectStoreNames"]),s(f,"_db",IDBDatabase,["deleteObjectStore","close"]),m.prototype.transaction=function(){return new u(this._db.transaction.apply(this._db,arguments))},a(m,"_db",["name","version","objectStoreNames"]),s(m,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(c){[v,l].forEach((function(t){c in t.prototype&&(t.prototype[c.replace("open","iterate")]=function(){var t=e(arguments),n=t[t.length-1],r=this._store||this._index,a=r[c].apply(r,t.slice(0,-1));a.onsuccess=function(){n(a.result)}})}))})),[l,v].forEach((function(c){c.prototype.getAll||(c.prototype.getAll=function(c,e){var t=this,n=[];return new Promise((function(r){t.iterateCursor(c,(function(c){c?(n.push(c.value),void 0===e||n.length!=e?c.continue():r(n)):r(n)}))}))})})),c.openDb=d,c.deleteDb=z,Object.defineProperty(c,"__esModule",{value:!0})}))},"9ed3":function(c,e,t){"use strict";var n=t("ae93").IteratorPrototype,r=t("7c73"),a=t("5c6c"),i=t("d44e"),s=t("3f8c"),o=function(){return this};c.exports=function(c,e,t){var l=e+" Iterator";return c.prototype=r(n,{next:a(1,t)}),i(c,l,!1,!0),s[l]=o,c}},a04b:function(c,e,t){var n=t("c04e"),r=t("d9b5");c.exports=function(c){var e=n(c,"string");return r(e)?e:String(e)}},a4b4:function(c,e,t){var n=t("342f");c.exports=/web0s(?!.*chrome)/i.test(n)},a79d:function(c,e,t){"use strict";var n=t("23e7"),r=t("c430"),a=t("fea9"),i=t("d039"),s=t("d066"),o=t("1626"),l=t("4840"),h=t("cdf9"),v=t("6eeb"),u=!!a&&i((function(){a.prototype["finally"].call({then:function(){}},(function(){}))}));if(n({target:"Promise",proto:!0,real:!0,forced:u},{finally:function(c){var e=l(this,s("Promise")),t=o(c);return this.then(t?function(t){return h(e,c()).then((function(){return t}))}:c,t?function(t){return h(e,c()).then((function(){throw t}))}:c)}}),!r&&o(a)){var f=s("Promise").prototype["finally"];a.prototype["finally"]!==f&&v(a.prototype,"finally",f,{unsafe:!0})}},ae93:function(c,e,t){"use strict";var n,r,a,i=t("d039"),s=t("1626"),o=t("7c73"),l=t("e163"),h=t("6eeb"),v=t("b622"),u=t("c430"),f=v("iterator"),m=!1;[].keys&&(a=[].keys(),"next"in a?(r=l(l(a)),r!==Object.prototype&&(n=r)):m=!0);var d=void 0==n||i((function(){var c={};return n[f].call(c)!==c}));d?n={}:u&&(n=o(n)),s(n[f])||h(n,f,(function(){return this})),c.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:m}},b041:function(c,e,t){"use strict";var n=t("00ee"),r=t("f5df");c.exports=n?{}.toString:function(){return"[object "+r(this)+"]"}},b575:function(c,e,t){var n,r,a,i,s,o,l,h,v=t("da84"),u=t("06cf").f,f=t("2cf4").set,m=t("1cdc"),d=t("d4c3"),z=t("a4b4"),p=t("605d"),M=v.MutationObserver||v.WebKitMutationObserver,g=v.document,C=v.process,H=v.Promise,y=u(v,"queueMicrotask"),V=y&&y.value;V||(n=function(){var c,e;p&&(c=C.domain)&&c.exit();while(r){e=r.fn,r=r.next;try{e()}catch(t){throw r?i():a=void 0,t}}a=void 0,c&&c.enter()},m||p||z||!M||!g?!d&&H&&H.resolve?(l=H.resolve(void 0),l.constructor=H,h=l.then,i=function(){h.call(l,n)}):i=p?function(){C.nextTick(n)}:function(){f.call(v,n)}:(s=!0,o=g.createTextNode(""),new M(n).observe(o,{characterData:!0}),i=function(){o.data=s=!s})),c.exports=V||function(c){var e={fn:c,next:void 0};a&&(a.next=e),r||(r=e,i()),a=e}},b622:function(c,e,t){var n=t("da84"),r=t("5692"),a=t("1a2d"),i=t("90e3"),s=t("4930"),o=t("fdbf"),l=r("wks"),h=n.Symbol,v=o?h:h&&h.withoutSetter||i;c.exports=function(c){return a(l,c)&&(s||"string"==typeof l[c])||(s&&a(h,c)?l[c]=h[c]:l[c]=v("Symbol."+c)),l[c]}},c04e:function(c,e,t){var n=t("861d"),r=t("d9b5"),a=t("dc4a"),i=t("485a"),s=t("b622"),o=s("toPrimitive");c.exports=function(c,e){if(!n(c)||r(c))return c;var t,s=a(c,o);if(s){if(void 0===e&&(e="default"),t=s.call(c,e),!n(t)||r(t))return t;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(c,e)}},c430:function(c,e){c.exports=!1},c6b6:function(c,e){var t={}.toString;c.exports=function(c){return t.call(c).slice(8,-1)}},c6cd:function(c,e,t){var n=t("da84"),r=t("ce4e"),a="__core-js_shared__",i=n[a]||r(a,{});c.exports=i},c8ba:function(c,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}c.exports=t},ca84:function(c,e,t){var n=t("1a2d"),r=t("fc6a"),a=t("4d64").indexOf,i=t("d012");c.exports=function(c,e){var t,s=r(c),o=0,l=[];for(t in s)!n(i,t)&&n(s,t)&&l.push(t);while(e.length>o)n(s,t=e[o++])&&(~a(l,t)||l.push(t));return l}},cc12:function(c,e,t){var n=t("da84"),r=t("861d"),a=n.document,i=r(a)&&r(a.createElement);c.exports=function(c){return i?a.createElement(c):{}}},cca6:function(c,e,t){var n=t("23e7"),r=t("60da");n({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},cdf9:function(c,e,t){var n=t("825a"),r=t("861d"),a=t("f069");c.exports=function(c,e){if(n(c),r(e)&&e.constructor===c)return e;var t=a.f(c),i=t.resolve;return i(e),t.promise}},ce4e:function(c,e,t){var n=t("da84");c.exports=function(c,e){try{Object.defineProperty(n,c,{value:e,configurable:!0,writable:!0})}catch(t){n[c]=e}return e}},d012:function(c,e){c.exports={}},d039:function(c,e){c.exports=function(c){try{return!!c()}catch(e){return!0}}},d066:function(c,e,t){var n=t("da84"),r=t("1626"),a=function(c){return r(c)?c:void 0};c.exports=function(c,e){return arguments.length<2?a(n[c]):n[c]&&n[c][e]}},d1e7:function(c,e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!n.call({1:2},1);e.f=a?function(c){var e=r(this,c);return!!e&&e.enumerable}:n},d2bb:function(c,e,t){var n=t("825a"),r=t("3bbe");c.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c,e=!1,t={};try{c=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,c.call(t,[]),e=t instanceof Array}catch(a){}return function(t,a){return n(t),r(a),e?c.call(t,a):t.__proto__=a,t}}():void 0)},d2e8:function(c,e,t){"use strict";t.d(e,"a",(function(){return Cc})),t.d(e,"b",(function(){return Hc}));t("1472");var n=t("ffa6"),r=t("9dbb"),a=t("1fd5"),i=t("5606");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",o="https://fcmregistrations.googleapis.com/v1",l="FCM_MSG",h="google.c.a.c_id",v=3,u=1;var f,m;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(c){const e=new Uint8Array(c),t=btoa(String.fromCharCode(...e));return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function z(c){const e="=".repeat((4-c.length%4)%4),t=(c+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let a=0;a<n.length;++a)r[a]=n.charCodeAt(a);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(c){c[c["DATA_MESSAGE"]=1]="DATA_MESSAGE",c[c["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(f||(f={})),function(c){c["PUSH_RECEIVED"]="push-received",c["NOTIFICATION_CLICKED"]="notification-clicked"}(m||(m={}));const p="fcm_token_details_db",M=5,g="fcm_token_object_Store";async function C(c){if("databases"in indexedDB){const c=await indexedDB.databases(),e=c.map(c=>c.name);if(!e.includes(p))return null}let e=null;const t=await Object(r["openDb"])(p,M,async t=>{var n;if(t.oldVersion<2)return;if(!t.objectStoreNames.contains(g))return;const r=t.transaction.objectStore(g),a=await r.index("fcmSenderId").get(c);if(await r.clear(),a)if(2===t.oldVersion){const c=a;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:null!==(n=c.createTime)&&void 0!==n?n:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"===typeof c.vapidKey?c.vapidKey:d(c.vapidKey)}}}else if(3===t.oldVersion){const c=a;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:d(c.auth),p256dh:d(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:d(c.vapidKey)}}}else if(4===t.oldVersion){const c=a;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:d(c.auth),p256dh:d(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:d(c.vapidKey)}}}});return t.close(),await Object(r["deleteDb"])(p),await Object(r["deleteDb"])("fcm_vapid_details_db"),await Object(r["deleteDb"])("undefined"),H(e)?e:null}function H(c){if(!c||!c.subscriptionOptions)return!1;const{subscriptionOptions:e}=c;return"number"===typeof c.createTime&&c.createTime>0&&"string"===typeof c.token&&c.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y="firebase-messaging-database",V=1,b="firebase-messaging-store";let _=null;function L(){return _||(_=Object(r["openDb"])(y,V,c=>{switch(c.oldVersion){case 0:c.createObjectStore(b)}})),_}async function w(c){const e=k(c),t=await L(),n=await t.transaction(b).objectStore(b).get(e);if(n)return n;{const e=await C(c.appConfig.senderId);if(e)return await A(c,e),e}}async function A(c,e){const t=k(c),n=await L(),r=n.transaction(b,"readwrite");return await r.objectStore(b).put(e,t),await r.complete,e}async function S(c){const e=k(c),t=await L(),n=t.transaction(b,"readwrite");await n.objectStore(b).delete(e),await n.complete}function k({appConfig:c}){return c.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},O=new a["b"]("messaging","Messaging",x);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function T(c,e){const t=await P(c),n=N(e),r={method:"POST",headers:t,body:JSON.stringify(n)};let a;try{const e=await fetch(j(c.appConfig),r);a=await e.json()}catch(i){throw O.create("token-subscribe-failed",{errorInfo:i})}if(a.error){const c=a.error.message;throw O.create("token-subscribe-failed",{errorInfo:c})}if(!a.token)throw O.create("token-subscribe-no-token");return a.token}async function I(c,e){const t=await P(c),n=N(e.subscriptionOptions),r={method:"PATCH",headers:t,body:JSON.stringify(n)};let a;try{const t=await fetch(`${j(c.appConfig)}/${e.token}`,r);a=await t.json()}catch(i){throw O.create("token-update-failed",{errorInfo:i})}if(a.error){const c=a.error.message;throw O.create("token-update-failed",{errorInfo:c})}if(!a.token)throw O.create("token-update-no-token");return a.token}async function E(c,e){const t=await P(c),n={method:"DELETE",headers:t};try{const t=await fetch(`${j(c.appConfig)}/${e}`,n),r=await t.json();if(r.error){const c=r.error.message;throw O.create("token-unsubscribe-failed",{errorInfo:c})}}catch(r){throw O.create("token-unsubscribe-failed",{errorInfo:r})}}function j({projectId:c}){return`${o}/projects/${c}/registrations`}async function P({appConfig:c,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})}function N({p256dh:c,auth:e,endpoint:t,vapidKey:n}){const r={web:{endpoint:t,auth:e,p256dh:c}};return n!==s&&(r.web.applicationPubKey=n),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=6048e5;async function D(c){const e=await $(c.swRegistration,c.vapidKey),t={vapidKey:c.vapidKey,swScope:c.swRegistration.scope,endpoint:e.endpoint,auth:d(e.getKey("auth")),p256dh:d(e.getKey("p256dh"))},n=await w(c.firebaseDependencies);if(n){if(W(n.subscriptionOptions,t))return Date.now()>=n.createTime+R?q(c,{token:n.token,createTime:Date.now(),subscriptionOptions:t}):n.token;try{await E(c.firebaseDependencies,n.token)}catch(r){console.warn(r)}return F(c.firebaseDependencies,t)}return F(c.firebaseDependencies,t)}async function Z(c){const e=await w(c.firebaseDependencies);e&&(await E(c.firebaseDependencies,e.token),await S(c.firebaseDependencies));const t=await c.swRegistration.pushManager.getSubscription();return!t||t.unsubscribe()}async function q(c,e){try{const t=await I(c.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await A(c.firebaseDependencies,n),t}catch(t){throw await Z(c),t}}async function F(c,e){const t=await T(c,e),n={token:t,createTime:Date.now(),subscriptionOptions:e};return await A(c,n),n.token}async function $(c,e){const t=await c.pushManager.getSubscription();return t||c.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:z(e)})}function W(c,e){const t=e.vapidKey===c.vapidKey,n=e.endpoint===c.endpoint,r=e.auth===c.auth,a=e.p256dh===c.p256dh;return t&&n&&r&&a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(c){const e={from:c.from,collapseKey:c.collapse_key,messageId:c.fcm_message_id};return B(e,c),K(e,c),Y(e,c),e}function B(c,e){if(!e.notification)return;c.notification={};const t=e.notification.title;t&&(c.notification.title=t);const n=e.notification.body;n&&(c.notification.body=n);const r=e.notification.image;r&&(c.notification.image=r)}function K(c,e){e.data&&(c.data=e.data)}function Y(c,e){if(!e.fcmOptions)return;c.fcmOptions={};const t=e.fcmOptions.link;t&&(c.fcmOptions.link=t);const n=e.fcmOptions.analytics_label;n&&(c.fcmOptions.analyticsLabel=n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(c){return"object"===typeof c&&!!c&&h in c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(c){return new Promise(e=>{setTimeout(e,c)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(c,e){const t=J(e,await c.firebaseDependencies.installations.getId());cc(c,t)}function J(c,e){var t,n;const r={};return c.from&&(r.project_number=c.from),c.fcm_message_id&&(r.message_id=c.fcm_message_id),r.instance_id=e,c.notification?r.message_type=f.DISPLAY_NOTIFICATION.toString():r.message_type=f.DATA_MESSAGE.toString(),r.sdk_platform=v.toString(),r.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),c.collapse_key&&(r.collapse_key=c.collapse_key),r.event=u.toString(),(null===(t=c.fcmOptions)||void 0===t?void 0:t.analytics_label)&&(r.analytics_label=null===(n=c.fcmOptions)||void 0===n?void 0:n.analytics_label),r}function cc(c,e){const t={};t.event_time_ms=Math.floor(Date.now()).toString(),t.source_extension_json_proto3=JSON.stringify(e),c.logEvents.push(t)}function ec(c,e){const t=[];for(let n=0;n<c.length;n++)t.push(c.charAt(n)),n<e.length&&t.push(e.charAt(n));return t.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(c,e){var t,n;const{newSubscription:r}=c;if(!r)return void await Z(e);const a=await w(e.firebaseDependencies);await Z(e),e.vapidKey=null!==(n=null===(t=null===a||void 0===a?void 0:a.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:s,await D(e)}async function nc(c,e){const t=ic(c);if(!t)return;e.deliveryMetricsExportedToBigQueryEnabled&&await X(e,t);const n=await hc();if(oc(n))return lc(n,t);if(t.notification&&await vc(ac(t)),e&&e.onBackgroundMessageHandler){const c=U(t);"function"===typeof e.onBackgroundMessageHandler?e.onBackgroundMessageHandler(c):e.onBackgroundMessageHandler.next(c)}}async function rc(c){var e,t;const n=null===(t=null===(e=c.notification)||void 0===e?void 0:e.data)||void 0===t?void 0:t[l];if(!n)return;if(c.action)return;c.stopImmediatePropagation(),c.notification.close();const r=uc(n);if(!r)return;const a=new URL(r,self.location.href),i=new URL(self.location.origin);if(a.host!==i.host)return;let s=await sc(a);return s?s=await s.focus():(s=await self.clients.openWindow(r),await Q(3e3)),s?(n.messageType=m.NOTIFICATION_CLICKED,n.isFirebaseMessaging=!0,s.postMessage(n)):void 0}function ac(c){const e=Object.assign({},c.notification);return e.data={[l]:c},e}function ic({data:c}){if(!c)return null;try{return c.json()}catch(e){return null}}async function sc(c){const e=await hc();for(const t of e){const e=new URL(t.url,self.location.href);if(c.host===e.host)return t}return null}function oc(c){return c.some(c=>"visible"===c.visibilityState&&!c.url.startsWith("chrome-extension://"))}function lc(c,e){e.isFirebaseMessaging=!0,e.messageType=m.PUSH_RECEIVED;for(const t of c)t.postMessage(e)}function hc(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function vc(c){var e;const{actions:t}=c,{maxActions:n}=Notification;return t&&n&&t.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(e=c.title)&&void 0!==e?e:"",c)}function uc(c){var e,t,n;const r=null!==(t=null===(e=c.fcmOptions)||void 0===e?void 0:e.link)&&void 0!==t?t:null===(n=c.notification)||void 0===n?void 0:n.click_action;return r||(G(c.data)?self.location.origin:null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(c){if(!c||!c.options)throw mc("App Configuration Object");if(!c.name)throw mc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=c;for(const n of e)if(!t[n])throw mc(n);return{appName:c.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function mc(c){return O.create("missing-app-config-values",{valueName:c})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ec("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),ec("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class dc{constructor(c,e,t){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const n=fc(c);this.firebaseDependencies={app:c,appConfig:n,installations:e,analyticsProvider:t}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=c=>{const e=new dc(c.getProvider("app").getImmediate(),c.getProvider("installations-internal").getImmediate(),c.getProvider("analytics-internal"));return self.addEventListener("push",c=>{c.waitUntil(nc(c,e))}),self.addEventListener("pushsubscriptionchange",c=>{c.waitUntil(tc(c,e))}),self.addEventListener("notificationclick",c=>{c.waitUntil(rc(c))}),e};function pc(){Object(i["c"])(new n["a"]("messaging-sw",zc,"PUBLIC"))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(){return Object(a["r"])()&&await Object(a["D"])()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(c,e){if(void 0!==self.document)throw O.create("only-available-in-sw");return c.onBackgroundMessageHandler=e,()=>{c.onBackgroundMessageHandler=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cc(c=Object(i["d"])()){return Mc().then(c=>{if(!c)throw O.create("unsupported-browser")},c=>{throw O.create("indexed-db-unsupported")}),Object(i["b"])(Object(a["o"])(c),"messaging-sw").getImmediate()}function Hc(c,e){return c=Object(a["o"])(c),gc(c,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pc()},d3b7:function(c,e,t){var n=t("00ee"),r=t("6eeb"),a=t("b041");n||r(Object.prototype,"toString",a,{unsafe:!0})},d44e:function(c,e,t){var n=t("9bf2").f,r=t("1a2d"),a=t("b622"),i=a("toStringTag");c.exports=function(c,e,t){c&&!r(c=t?c:c.prototype,i)&&n(c,i,{configurable:!0,value:e})}},d4c3:function(c,e,t){var n=t("342f"),r=t("da84");c.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==r.Pebble},d9b5:function(c,e,t){var n=t("1626"),r=t("d066"),a=t("fdbf");c.exports=a?function(c){return"symbol"==typeof c}:function(c){var e=r("Symbol");return n(e)&&Object(c)instanceof e}},da84:function(c,e,t){(function(e){var t=function(c){return c&&c.Math==Math&&c};c.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,t("c8ba"))},dc4a:function(c,e,t){var n=t("59ed");c.exports=function(c,e){var t=c[e];return null==t?void 0:n(t)}},df75:function(c,e,t){var n=t("ca84"),r=t("7839");c.exports=Object.keys||function(c){return n(c,r)}},df7c:function(c,e,t){(function(c){function t(c,e){for(var t=0,n=c.length-1;n>=0;n--){var r=c[n];"."===r?c.splice(n,1):".."===r?(c.splice(n,1),t++):t&&(c.splice(n,1),t--)}if(e)for(;t--;t)c.unshift("..");return c}function n(c){"string"!==typeof c&&(c+="");var e,t=0,n=-1,r=!0;for(e=c.length-1;e>=0;--e)if(47===c.charCodeAt(e)){if(!r){t=e+1;break}}else-1===n&&(r=!1,n=e+1);return-1===n?"":c.slice(t,n)}function r(c,e){if(c.filter)return c.filter(e);for(var t=[],n=0;n<c.length;n++)e(c[n],n,c)&&t.push(c[n]);return t}e.resolve=function(){for(var e="",n=!1,a=arguments.length-1;a>=-1&&!n;a--){var i=a>=0?arguments[a]:c.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,n="/"===i.charAt(0))}return e=t(r(e.split("/"),(function(c){return!!c})),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(c){var n=e.isAbsolute(c),i="/"===a(c,-1);return c=t(r(c.split("/"),(function(c){return!!c})),!n).join("/"),c||n||(c="."),c&&i&&(c+="/"),(n?"/":"")+c},e.isAbsolute=function(c){return"/"===c.charAt(0)},e.join=function(){var c=Array.prototype.slice.call(arguments,0);return e.normalize(r(c,(function(c,e){if("string"!==typeof c)throw new TypeError("Arguments to path.join must be strings");return c})).join("/"))},e.relative=function(c,t){function n(c){for(var e=0;e<c.length;e++)if(""!==c[e])break;for(var t=c.length-1;t>=0;t--)if(""!==c[t])break;return e>t?[]:c.slice(e,t-e+1)}c=e.resolve(c).substr(1),t=e.resolve(t).substr(1);for(var r=n(c.split("/")),a=n(t.split("/")),i=Math.min(r.length,a.length),s=i,o=0;o<i;o++)if(r[o]!==a[o]){s=o;break}var l=[];for(o=s;o<r.length;o++)l.push("..");return l=l.concat(a.slice(s)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(c){if("string"!==typeof c&&(c+=""),0===c.length)return".";for(var e=c.charCodeAt(0),t=47===e,n=-1,r=!0,a=c.length-1;a>=1;--a)if(e=c.charCodeAt(a),47===e){if(!r){n=a;break}}else r=!1;return-1===n?t?"/":".":t&&1===n?"/":c.slice(0,n)},e.basename=function(c,e){var t=n(c);return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t},e.extname=function(c){"string"!==typeof c&&(c+="");for(var e=-1,t=0,n=-1,r=!0,a=0,i=c.length-1;i>=0;--i){var s=c.charCodeAt(i);if(47!==s)-1===n&&(r=!1,n=i+1),46===s?-1===e?e=i:1!==a&&(a=1):-1!==e&&(a=-1);else if(!r){t=i+1;break}}return-1===e||-1===n||0===a||1===a&&e===n-1&&e===t+1?"":c.slice(e,n)};var a="b"==="ab".substr(-1)?function(c,e,t){return c.substr(e,t)}:function(c,e,t){return e<0&&(e=c.length+e),c.substr(e,t)}}).call(this,t("4362"))},e163:function(c,e,t){var n=t("1a2d"),r=t("1626"),a=t("7b0b"),i=t("f772"),s=t("e177"),o=i("IE_PROTO"),l=Object.prototype;c.exports=s?Object.getPrototypeOf:function(c){var e=a(c);if(n(e,o))return e[o];var t=e.constructor;return r(t)&&e instanceof t?t.prototype:e instanceof Object?l:null}},e177:function(c,e,t){var n=t("d039");c.exports=!n((function(){function c(){}return c.prototype.constructor=null,Object.getPrototypeOf(new c)!==c.prototype}))},e260:function(c,e,t){"use strict";var n=t("fc6a"),r=t("44d2"),a=t("3f8c"),i=t("69f3"),s=t("7dd0"),o="Array Iterator",l=i.set,h=i.getterFor(o);c.exports=s(Array,"Array",(function(c,e){l(this,{type:o,target:n(c),index:0,kind:e})}),(function(){var c=h(this),e=c.target,t=c.kind,n=c.index++;return!e||n>=e.length?(c.target=void 0,{value:void 0,done:!0}):"keys"==t?{value:n,done:!1}:"values"==t?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},e2cc:function(c,e,t){var n=t("6eeb");c.exports=function(c,e,t){for(var r in e)n(c,r,e[r],t);return c}},e667:function(c,e){c.exports=function(c){try{return{error:!1,value:c()}}catch(e){return{error:!0,value:e}}}},e6cf:function(c,e,t){"use strict";var n,r,a,i,s=t("23e7"),o=t("c430"),l=t("da84"),h=t("d066"),v=t("fea9"),u=t("6eeb"),f=t("e2cc"),m=t("d2bb"),d=t("d44e"),z=t("2626"),p=t("59ed"),M=t("1626"),g=t("861d"),C=t("19aa"),H=t("8925"),y=t("2266"),V=t("1c7e"),b=t("4840"),_=t("2cf4").set,L=t("b575"),w=t("cdf9"),A=t("44de"),S=t("f069"),k=t("e667"),x=t("69f3"),O=t("94ca"),T=t("b622"),I=t("6069"),E=t("605d"),j=t("2d00"),P=T("species"),N="Promise",R=x.get,D=x.set,Z=x.getterFor(N),q=v&&v.prototype,F=v,$=q,W=l.TypeError,U=l.document,B=l.process,K=S.f,Y=K,G=!!(U&&U.createEvent&&l.dispatchEvent),Q=M(l.PromiseRejectionEvent),X="unhandledrejection",J="rejectionhandled",cc=0,ec=1,tc=2,nc=1,rc=2,ac=!1,ic=O(N,(function(){var c=H(F),e=c!==String(F);if(!e&&66===j)return!0;if(o&&!$["finally"])return!0;if(j>=51&&/native code/.test(c))return!1;var t=new F((function(c){c(1)})),n=function(c){c((function(){}),(function(){}))},r=t.constructor={};return r[P]=n,ac=t.then((function(){}))instanceof n,!ac||!e&&I&&!Q})),sc=ic||!V((function(c){F.all(c)["catch"]((function(){}))})),oc=function(c){var e;return!(!g(c)||!M(e=c.then))&&e},lc=function(c,e){if(!c.notified){c.notified=!0;var t=c.reactions;L((function(){var n=c.value,r=c.state==ec,a=0;while(t.length>a){var i,s,o,l=t[a++],h=r?l.ok:l.fail,v=l.resolve,u=l.reject,f=l.domain;try{h?(r||(c.rejection===rc&&fc(c),c.rejection=nc),!0===h?i=n:(f&&f.enter(),i=h(n),f&&(f.exit(),o=!0)),i===l.promise?u(W("Promise-chain cycle")):(s=oc(i))?s.call(i,v,u):v(i)):u(n)}catch(m){f&&!o&&f.exit(),u(m)}}c.reactions=[],c.notified=!1,e&&!c.rejection&&vc(c)}))}},hc=function(c,e,t){var n,r;G?(n=U.createEvent("Event"),n.promise=e,n.reason=t,n.initEvent(c,!1,!0),l.dispatchEvent(n)):n={promise:e,reason:t},!Q&&(r=l["on"+c])?r(n):c===X&&A("Unhandled promise rejection",t)},vc=function(c){_.call(l,(function(){var e,t=c.facade,n=c.value,r=uc(c);if(r&&(e=k((function(){E?B.emit("unhandledRejection",n,t):hc(X,t,n)})),c.rejection=E||uc(c)?rc:nc,e.error))throw e.value}))},uc=function(c){return c.rejection!==nc&&!c.parent},fc=function(c){_.call(l,(function(){var e=c.facade;E?B.emit("rejectionHandled",e):hc(J,e,c.value)}))},mc=function(c,e,t){return function(n){c(e,n,t)}},dc=function(c,e,t){c.done||(c.done=!0,t&&(c=t),c.value=e,c.state=tc,lc(c,!0))},zc=function(c,e,t){if(!c.done){c.done=!0,t&&(c=t);try{if(c.facade===e)throw W("Promise can't be resolved itself");var n=oc(e);n?L((function(){var t={done:!1};try{n.call(e,mc(zc,t,c),mc(dc,t,c))}catch(r){dc(t,r,c)}})):(c.value=e,c.state=ec,lc(c,!1))}catch(r){dc({done:!1},r,c)}}};if(ic&&(F=function(c){C(this,F,N),p(c),n.call(this);var e=R(this);try{c(mc(zc,e),mc(dc,e))}catch(t){dc(e,t)}},$=F.prototype,n=function(c){D(this,{type:N,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:cc,value:void 0})},n.prototype=f($,{then:function(c,e){var t=Z(this),n=K(b(this,F));return n.ok=!M(c)||c,n.fail=M(e)&&e,n.domain=E?B.domain:void 0,t.parent=!0,t.reactions.push(n),t.state!=cc&&lc(t,!1),n.promise},catch:function(c){return this.then(void 0,c)}}),r=function(){var c=new n,e=R(c);this.promise=c,this.resolve=mc(zc,e),this.reject=mc(dc,e)},S.f=K=function(c){return c===F||c===a?new r(c):Y(c)},!o&&M(v)&&q!==Object.prototype)){i=q.then,ac||(u(q,"then",(function(c,e){var t=this;return new F((function(c,e){i.call(t,c,e)})).then(c,e)}),{unsafe:!0}),u(q,"catch",$["catch"],{unsafe:!0}));try{delete q.constructor}catch(pc){}m&&m(q,$)}s({global:!0,wrap:!0,forced:ic},{Promise:F}),d(F,N,!1,!0),z(N),a=h(N),s({target:N,stat:!0,forced:ic},{reject:function(c){var e=K(this);return e.reject.call(void 0,c),e.promise}}),s({target:N,stat:!0,forced:o||ic},{resolve:function(c){return w(o&&this===a?F:this,c)}}),s({target:N,stat:!0,forced:sc},{all:function(c){var e=this,t=K(e),n=t.resolve,r=t.reject,a=k((function(){var t=p(e.resolve),a=[],i=0,s=1;y(c,(function(c){var o=i++,l=!1;a.push(void 0),s++,t.call(e,c).then((function(c){l||(l=!0,a[o]=c,--s||n(a))}),r)})),--s||n(a)}));return a.error&&r(a.value),t.promise},race:function(c){var e=this,t=K(e),n=t.reject,r=k((function(){var r=p(e.resolve);y(c,(function(c){r.call(e,c).then(t.resolve,n)}))}));return r.error&&n(r.value),t.promise}})},e893:function(c,e,t){var n=t("1a2d"),r=t("56ef"),a=t("06cf"),i=t("9bf2");c.exports=function(c,e){for(var t=r(e),s=i.f,o=a.f,l=0;l<t.length;l++){var h=t[l];n(c,h)||s(c,h,o(e,h))}}},e95a:function(c,e,t){var n=t("b622"),r=t("3f8c"),a=n("iterator"),i=Array.prototype;c.exports=function(c){return void 0!==c&&(r.Array===c||i[a]===c)}},f069:function(c,e,t){"use strict";var n=t("59ed"),r=function(c){var e,t;this.promise=new c((function(c,n){if(void 0!==e||void 0!==t)throw TypeError("Bad Promise constructor");e=c,t=n})),this.resolve=n(e),this.reject=n(t)};c.exports.f=function(c){return new r(c)}},f5df:function(c,e,t){var n=t("00ee"),r=t("1626"),a=t("c6b6"),i=t("b622"),s=i("toStringTag"),o="Arguments"==a(function(){return arguments}()),l=function(c,e){try{return c[e]}catch(t){}};c.exports=n?a:function(c){var e,t,n;return void 0===c?"Undefined":null===c?"Null":"string"==typeof(t=l(e=Object(c),s))?t:o?a(e):"Object"==(n=a(e))&&r(e.callee)?"Arguments":n}},f772:function(c,e,t){var n=t("5692"),r=t("90e3"),a=n("keys");c.exports=function(c){return a[c]||(a[c]=r(c))}},fc6a:function(c,e,t){var n=t("44ad"),r=t("1d80");c.exports=function(c){return n(r(c))}},fdbf:function(c,e,t){var n=t("4930");c.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(c,e,t){var n=t("da84");c.exports=n.Promise},ffa6:function(c,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return m}));function n(c,e,t,n){function r(c){return c instanceof t?c:new t((function(e){e(c)}))}return new(t||(t=Promise))((function(t,a){function i(c){try{o(n.next(c))}catch(e){a(e)}}function s(c){try{o(n["throw"](c))}catch(e){a(e)}}function o(c){c.done?t(c.value):r(c.value).then(i,s)}o((n=n.apply(c,e||[])).next())}))}function r(c,e){var t,n,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(e){return o([c,e])}}function o(a){if(t)throw new TypeError("Generator is already executing.");while(i)try{if(t=1,n&&(r=2&a[0]?n["return"]:a[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(r=i.trys,!(r=r.length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(c,i)}catch(s){a=[6,s],n=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}Object.create;function a(c){var e="function"===typeof Symbol&&Symbol.iterator,t=e&&c[e],n=0;if(t)return t.call(c);if(c&&"number"===typeof c.length)return{next:function(){return c&&n>=c.length&&(c=void 0),{value:c&&c[n++],done:!c}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(c,e){var t="function"===typeof Symbol&&c[Symbol.iterator];if(!t)return c;var n,r,a=t.call(c),i=[];try{while((void 0===e||e-- >0)&&!(n=a.next()).done)i.push(n.value)}catch(s){r={error:s}}finally{try{n&&!n.done&&(t=a["return"])&&t.call(a)}finally{if(r)throw r.error}}return i}function s(c,e,t){if(t||2===arguments.length)for(var n,r=0,a=e.length;r<a;r++)!n&&r in e||(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return c.concat(n||Array.prototype.slice.call(e))}Object.create;var o=t("1fd5"),l=function(){function c(c,e,t){this.name=c,this.instanceFactory=e,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return c.prototype.setInstantiationMode=function(c){return this.instantiationMode=c,this},c.prototype.setMultipleInstances=function(c){return this.multipleInstances=c,this},c.prototype.setServiceProps=function(c){return this.serviceProps=c,this},c.prototype.setInstanceCreatedCallback=function(c){return this.onInstanceCreated=c,this},c}(),h="[DEFAULT]",v=function(){function c(c,e){this.name=c,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return c.prototype.get=function(c){var e=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(e)){var t=new o["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(r){}}return this.instancesDeferred.get(e).promise},c.prototype.getImmediate=function(c){var e,t=this.normalizeInstanceIdentifier(null===c||void 0===c?void 0:c.identifier),n=null!==(e=null===c||void 0===c?void 0:c.optional)&&void 0!==e&&e;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}},c.prototype.getComponent=function(){return this.component},c.prototype.setComponent=function(c){var e,t;if(c.name!==this.name)throw Error("Mismatching Component "+c.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=c,this.shouldAutoInitialize()){if(f(c))try{this.getOrInitializeService({instanceIdentifier:h})}catch(m){}try{for(var n=a(this.instancesDeferred.entries()),r=n.next();!r.done;r=n.next()){var s=i(r.value,2),o=s[0],l=s[1],v=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:v});l.resolve(u)}catch(m){}}}catch(d){e={error:d}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}}},c.prototype.clearInstance=function(c){void 0===c&&(c=h),this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)},c.prototype.delete=function(){return n(this,void 0,void 0,(function(){var c;return r(this,(function(e){switch(e.label){case 0:return c=Array.from(this.instances.values()),[4,Promise.all(s(s([],i(c.filter((function(c){return"INTERNAL"in c})).map((function(c){return c.INTERNAL.delete()})))),i(c.filter((function(c){return"_delete"in c})).map((function(c){return c._delete()})))))];case 1:return e.sent(),[2]}}))}))},c.prototype.isComponentSet=function(){return null!=this.component},c.prototype.isInitialized=function(c){return void 0===c&&(c=h),this.instances.has(c)},c.prototype.getOptions=function(c){return void 0===c&&(c=h),this.instancesOptions.get(c)||{}},c.prototype.initialize=function(c){var e,t;void 0===c&&(c={});var n=c.options,r=void 0===n?{}:n,s=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:r});try{for(var l=a(this.instancesDeferred.entries()),h=l.next();!h.done;h=l.next()){var v=i(h.value,2),u=v[0],f=v[1],m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}}catch(d){e={error:d}}finally{try{h&&!h.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}return o},c.prototype.onInit=function(c,e){var t,n=this.normalizeInstanceIdentifier(e),r=null!==(t=this.onInitCallbacks.get(n))&&void 0!==t?t:new Set;r.add(c),this.onInitCallbacks.set(n,r);var a=this.instances.get(n);return a&&c(a,n),function(){r.delete(c)}},c.prototype.invokeOnInitCallbacks=function(c,e){var t,n,r=this.onInitCallbacks.get(e);if(r)try{for(var i=a(r),s=i.next();!s.done;s=i.next()){var o=s.value;try{o(c,e)}catch(l){}}}catch(h){t={error:h}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},c.prototype.getOrInitializeService=function(c){var e=c.instanceIdentifier,t=c.options,n=void 0===t?{}:t,r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(a){}return r||null},c.prototype.normalizeInstanceIdentifier=function(c){return void 0===c&&(c=h),this.component?this.component.multipleInstances?c:h:c},c.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},c}();function u(c){return c===h?void 0:c}function f(c){return"EAGER"===c.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m=function(){function c(c){this.name=c,this.providers=new Map}return c.prototype.addComponent=function(c){var e=this.getProvider(c.name);if(e.isComponentSet())throw new Error("Component "+c.name+" has already been registered with "+this.name);e.setComponent(c)},c.prototype.addOrOverwriteComponent=function(c){var e=this.getProvider(c.name);e.isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)},c.prototype.getProvider=function(c){if(this.providers.has(c))return this.providers.get(c);var e=new v(c,this);return this.providers.set(c,e),e},c.prototype.getProviders=function(){return Array.from(this.providers.values())},c}()}}]);
//# sourceMappingURL=chunk-vendors.0447c604.js.map