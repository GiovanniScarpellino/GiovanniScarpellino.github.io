(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(c,e,t){var n=t("b622"),a=n("toStringTag"),r={};r[a]="z",c.exports="[object z]"===String(r)},"0366":function(c,e,t){var n=t("59ed");c.exports=function(c,e,t){if(n(c),void 0===e)return c;switch(t){case 0:return function(){return c.call(e)};case 1:return function(t){return c.call(e,t)};case 2:return function(t,n){return c.call(e,t,n)};case 3:return function(t,n,a){return c.call(e,t,n,a)}}return function(){return c.apply(e,arguments)}}},"06cf":function(c,e,t){var n=t("83ab"),a=t("d1e7"),r=t("5c6c"),i=t("fc6a"),s=t("a04b"),o=t("1a2d"),l=t("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=n?h:function(c,e){if(c=i(c),e=s(e),l)try{return h(c,e)}catch(t){}if(o(c,e))return r(!a.f.call(c,e),c[e])}},"07fa":function(c,e,t){var n=t("50c4");c.exports=function(c){return n(c.length)}},"0cfb":function(c,e,t){var n=t("83ab"),a=t("d039"),r=t("cc12");c.exports=!n&&!a((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(c,e){c.exports=function(c){try{return String(c)}catch(e){return"Object"}}},1472:function(c,e,t){"use strict";var n=t("5606"),a=t("ffa6"),r=t("1fd5"),i=t("9dbb");const s="@firebase/installations",o="0.5.2",l=1e4,h="w:"+o,v="FIS_v2",u="https://firebaseinstallations.googleapis.com/v1",f=36e5,m="installations",d="Installations",z={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},p=new r["b"](m,d,z);function M(c){return c instanceof r["c"]&&c.code.includes("request-failed")}
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
 */function C({projectId:c}){return`${u}/projects/${c}/installations`}function g(c){return{token:c.token,requestStatus:2,expiresIn:b(c.expiresIn),creationTime:Date.now()}}async function H(c,e){const t=await e.json(),n=t.error;return p.create("request-failed",{requestName:c,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function y({apiKey:c}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c})}function V(c,{refreshToken:e}){const t=y(c);return t.append("Authorization",L(e)),t}async function _(c){const e=await c();return e.status>=500&&e.status<600?c():e}function b(c){return Number(c.replace("s","000"))}function L(c){return`${v} ${c}`}
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
 */async function w(c,{fid:e}){const t=C(c),n=y(c),a={fid:e,authVersion:v,appId:c.appId,sdkVersion:h},r={method:"POST",headers:n,body:JSON.stringify(a)},i=await _(()=>fetch(t,r));if(i.ok){const c=await i.json(),t={fid:c.fid||e,registrationStatus:2,refreshToken:c.refreshToken,authToken:g(c.authToken)};return t}throw await H("Create Installation",i)}
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
 */const q="firebase-installations-database",F=1,$="firebase-installations-store";let U=null;function W(){return U||(U=Object(i["openDb"])(q,F,c=>{switch(c.oldVersion){case 0:c.createObjectStore($)}})),U}async function B(c,e){const t=I(c),n=await W(),a=n.transaction($,"readwrite"),r=a.objectStore($),i=await r.get(t);return await r.put(e,t),await a.complete,i&&i.fid===e.fid||j(c,e.fid),e}async function K(c){const e=I(c),t=await W(),n=t.transaction($,"readwrite");await n.objectStore($).delete(e),await n.complete}async function Y(c,e){const t=I(c),n=await W(),a=n.transaction($,"readwrite"),r=a.objectStore($),i=await r.get(t),s=e(i);return void 0===s?await r.delete(t):await r.put(s,t),await a.complete,!s||i&&i.fid===s.fid||j(c,s.fid),s}
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
 */async function G(c){let e;const t=await Y(c,t=>{const n=Q(t),a=X(c,n);return e=a.registrationPromise,a.installationEntry});return t.fid===x?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Q(c){const e=c||{fid:O(),registrationStatus:0};return tc(e)}function X(c,e){if(0===e.registrationStatus){if(!navigator.onLine){const c=Promise.reject(p.create("app-offline"));return{installationEntry:e,registrationPromise:c}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=J(c,t);return{installationEntry:t,registrationPromise:n}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:cc(c)}:{installationEntry:e}}async function J(c,e){try{const t=await w(c,e);return B(c,t)}catch(t){throw M(t)&&409===t.customData.serverCode?await K(c):await B(c,{fid:e.fid,registrationStatus:0}),t}}async function cc(c){let e=await ec(c);while(1===e.registrationStatus)await A(100),e=await ec(c);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:t}=await G(c);return t||e}return e}function ec(c){return Y(c,c=>{if(!c)throw p.create("installation-not-found");return tc(c)})}function tc(c){return nc(c)?{fid:c.fid,registrationStatus:0}:c}function nc(c){return 1===c.registrationStatus&&c.registrationTime+l<Date.now()}
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
 */async function ac({appConfig:c,platformLoggerProvider:e},t){const n=rc(c,t),a=V(c,t),r=e.getImmediate({optional:!0});r&&a.append("x-firebase-client",r.getPlatformInfoString());const i={installation:{sdkVersion:h}},s={method:"POST",headers:a,body:JSON.stringify(i)},o=await _(()=>fetch(n,s));if(o.ok){const c=await o.json(),e=g(c);return e}throw await H("Generate Auth Token",o)}function rc(c,{fid:e}){return`${C(c)}/${e}/authTokens:generate`}
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
 */async function ic(c,e=!1){let t;const n=await Y(c.appConfig,n=>{if(!hc(n))throw p.create("not-registered");const a=n.authToken;if(!e&&vc(a))return n;if(1===a.requestStatus)return t=sc(c,e),n;{if(!navigator.onLine)throw p.create("app-offline");const e=fc(n);return t=lc(c,e),e}}),a=t?await t:n.authToken;return a}async function sc(c,e){let t=await oc(c.appConfig);while(1===t.authToken.requestStatus)await A(100),t=await oc(c.appConfig);const n=t.authToken;return 0===n.requestStatus?ic(c,e):n}function oc(c){return Y(c,c=>{if(!hc(c))throw p.create("not-registered");const e=c.authToken;return mc(e)?Object.assign(Object.assign({},c),{authToken:{requestStatus:0}}):c})}async function lc(c,e){try{const t=await ac(c,e),n=Object.assign(Object.assign({},e),{authToken:t});return await B(c.appConfig,n),t}catch(t){if(!M(t)||401!==t.customData.serverCode&&404!==t.customData.serverCode){const t=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await B(c.appConfig,t)}else await K(c.appConfig);throw t}}function hc(c){return void 0!==c&&2===c.registrationStatus}function vc(c){return 2===c.requestStatus&&!uc(c)}function uc(c){const e=Date.now();return e<c.creationTime||c.creationTime+c.expiresIn<e+f}function fc(c){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},c),{authToken:e})}function mc(c){return 1===c.requestStatus&&c.requestTime+l<Date.now()}
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
function Mc(c){if(!c||!c.options)throw Cc("App Configuration");if(!c.name)throw Cc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!c.options[t])throw Cc(t);return{appName:c.name,projectId:c.options.projectId,apiKey:c.options.apiKey,appId:c.options.appId}}function Cc(c){return p.create("missing-app-config-values",{valueName:c})}
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
 */const gc="installations",Hc="installations-internal",yc=c=>{const e=c.getProvider("app").getImmediate(),t=Mc(e),a=Object(n["b"])(e,"platform-logger"),r={app:e,appConfig:t,platformLoggerProvider:a,_delete:()=>Promise.resolve()};return r},Vc=c=>{const e=c.getProvider("app").getImmediate(),t=Object(n["b"])(e,gc).getImmediate(),a={getId:()=>dc(t),getToken:c=>zc(t,c)};return a};function _c(){Object(n["c"])(new a["a"](gc,yc,"PUBLIC")),Object(n["c"])(new a["a"](Hc,Vc,"PRIVATE"))}_c(),Object(n["f"])(s,o),Object(n["f"])(s,o,"esm2017")},"15f5":function(c,e,t){},1626:function(c,e){c.exports=function(c){return"function"===typeof c}},"19aa":function(c,e){c.exports=function(c,e,t){if(c instanceof e)return c;throw TypeError("Incorrect "+(t?t+" ":"")+"invocation")}},"1a2d":function(c,e,t){var n=t("7b0b"),a={}.hasOwnProperty;c.exports=Object.hasOwn||function(c,e){return a.call(n(c),e)}},"1be4":function(c,e,t){var n=t("d066");c.exports=n("document","documentElement")},"1c7e":function(c,e,t){var n=t("b622"),a=n("iterator"),r=!1;try{var i=0,s={next:function(){return{done:!!i++}},return:function(){r=!0}};s[a]=function(){return this},Array.from(s,(function(){throw 2}))}catch(o){}c.exports=function(c,e){if(!e&&!r)return!1;var t=!1;try{var n={};n[a]=function(){return{next:function(){return{done:t=!0}}}},c(n)}catch(o){}return t}},"1cdc":function(c,e,t){var n=t("342f");c.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},"1d80":function(c,e){c.exports=function(c){if(void 0==c)throw TypeError("Can't call method on "+c);return c}},"1da1":function(c,e,t){"use strict";t.d(e,"a",(function(){return a}));t("d3b7");function n(c,e,t,n,a,r,i){try{var s=c[r](i),o=s.value}catch(l){return void t(l)}s.done?e(o):Promise.resolve(o).then(n,a)}function a(c){return function(){var e=this,t=arguments;return new Promise((function(a,r){var i=c.apply(e,t);function s(c){n(i,a,r,s,o,"next",c)}function o(c){n(i,a,r,s,o,"throw",c)}s(void 0)}))}}},"1fd5":function(c,e,t){"use strict";(function(c){t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return L})),t.d(e,"c",(function(){return b})),t.d(e,"d",(function(){return Z})),t.d(e,"e",(function(){return V})),t.d(e,"f",(function(){return a})),t.d(e,"g",(function(){return r})),t.d(e,"h",(function(){return o})),t.d(e,"i",(function(){return l})),t.d(e,"j",(function(){return I})),t.d(e,"k",(function(){return z})),t.d(e,"l",(function(){return u})),t.d(e,"m",(function(){return N})),t.d(e,"n",(function(){return q})),t.d(e,"o",(function(){return U})),t.d(e,"p",(function(){return T})),t.d(e,"q",(function(){return j})),t.d(e,"r",(function(){return H})),t.d(e,"s",(function(){return M})),t.d(e,"t",(function(){return g})),t.d(e,"u",(function(){return C})),t.d(e,"v",(function(){return O})),t.d(e,"w",(function(){return S})),t.d(e,"x",(function(){return P})),t.d(e,"y",(function(){return D})),t.d(e,"z",(function(){return E})),t.d(e,"A",(function(){return $})),t.d(e,"B",(function(){return F})),t.d(e,"C",(function(){return k})),t.d(e,"D",(function(){return y}));
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
const n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(c,e){if(!c)throw r(e)},r=function(c){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+c)},i=function(c){const e=[];let t=0;for(let n=0;n<c.length;n++){let a=c.charCodeAt(n);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=63&a|128):55296===(64512&a)&&n+1<c.length&&56320===(64512&c.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&c.charCodeAt(++n)),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=63&a|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=63&a|128)}return e},s=function(c){const e=[];let t=0,n=0;while(t<c.length){const a=c[t++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const r=c[t++];e[n++]=String.fromCharCode((31&a)<<6|63&r)}else if(a>239&&a<365){const r=c[t++],i=c[t++],s=c[t++],o=((7&a)<<18|(63&r)<<12|(63&i)<<6|63&s)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(1023&o))}else{const r=c[t++],i=c[t++];e[n++]=String.fromCharCode((15&a)<<12|(63&r)<<6|63&i)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(c,e){if(!Array.isArray(c))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<c.length;a+=3){const e=c[a],r=a+1<c.length,i=r?c[a+1]:0,s=a+2<c.length,o=s?c[a+2]:0,l=e>>2,h=(3&e)<<4|i>>4;let v=(15&i)<<2|o>>6,u=63&o;s||(u=64,r||(v=64)),n.push(t[l],t[h],t[v],t[u])}return n.join("")},encodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(c):this.encodeByteArray(i(c),e)},decodeString(c,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(c):s(this.decodeStringToByteArray(c,e))},decodeStringToByteArray(c,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<c.length;){const e=t[c.charAt(a++)],r=a<c.length,i=r?t[c.charAt(a)]:0;++a;const s=a<c.length,o=s?t[c.charAt(a)]:64;++a;const l=a<c.length,h=l?t[c.charAt(a)]:64;if(++a,null==e||null==i||null==o||null==h)throw Error();const v=e<<2|i>>4;if(n.push(v),64!==o){const c=i<<4&240|o>>2;if(n.push(c),64!==h){const c=o<<6&192|h;n.push(c)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let c=0;c<this.ENCODED_VALS.length;c++)this.byteToCharMap_[c]=this.ENCODED_VALS.charAt(c),this.charToByteMap_[this.byteToCharMap_[c]]=c,this.byteToCharMapWebSafe_[c]=this.ENCODED_VALS_WEBSAFE.charAt(c),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[c]]=c,c>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(c)]=c,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(c)]=c)}}},l=function(c){const e=i(c);return o.encodeByteArray(e,!0)},h=function(c){return l(c).replace(/\./g,"")},v=function(c){try{return o.decodeString(c,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */function z(c,e){if(c.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",a=c.iat||0,r=c.sub||c.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:a,exp:a+3600,auth_time:a,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},c),s="";return[h(JSON.stringify(t)),h(JSON.stringify(i)),s].join(".")}
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
 */function p(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function M(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN}function H(){return"object"===typeof indexedDB}function y(){return new Promise((c,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(n),c(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var c;e((null===(c=a.error)||void 0===c?void 0:c.message)||"")}}catch(t){e(t)}})}function V(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
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
const _="FirebaseError";class b extends Error{constructor(c,e,t){super(e),this.code=c,this.customData=t,this.name=_,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(c,e,t){this.service=c,this.serviceName=e,this.errors=t}create(c,...e){const t=e[0]||{},n=`${this.service}/${c}`,a=this.errors[c],r=a?w(a,t):"Error",i=`${this.serviceName}: ${r} (${n}).`,s=new b(n,i,t);return s}}function w(c,e){return c.replace(A,(c,t)=>{const n=e[t];return null!=n?String(n):`<${t}?>`})}const A=/\{\$([^}]+)}/g;
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
 */const x=function(c){let e={},t={},n={},a="";try{const r=c.split(".");e=S(v(r[0])||""),t=S(v(r[1])||""),a=r[2],n=t["d"]||{},delete t["d"]}catch(r){}return{header:e,claims:t,data:n,signature:a}},O=function(c){const e=x(c),t=e.claims;return!!t&&"object"===typeof t&&t.hasOwnProperty("iat")},T=function(c){const e=x(c).claims;return"object"===typeof e&&!0===e["admin"]};
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
function I(c,e){return Object.prototype.hasOwnProperty.call(c,e)}function E(c,e){return Object.prototype.hasOwnProperty.call(c,e)?c[e]:void 0}function j(c){for(const e in c)if(Object.prototype.hasOwnProperty.call(c,e))return!1;return!0}function P(c,e,t){const n={};for(const a in c)Object.prototype.hasOwnProperty.call(c,a)&&(n[a]=e.call(t,c[a],a,c));return n}function N(c,e){if(c===e)return!0;const t=Object.keys(c),n=Object.keys(e);for(const a of t){if(!n.includes(a))return!1;const t=c[a],r=e[a];if(R(t)&&R(r)){if(!N(t,r))return!1}else if(t!==r)return!1}for(const a of n)if(!t.includes(a))return!1;return!0}function R(c){return null!==c&&"object"===typeof c}
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
class Z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let c=1;c<this.blockSize;++c)this.pad_[c]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(c,e){e||(e=0);const t=this.W_;if("string"===typeof c)for(let h=0;h<16;h++)t[h]=c.charCodeAt(e)<<24|c.charCodeAt(e+1)<<16|c.charCodeAt(e+2)<<8|c.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)t[h]=c[e]<<24|c[e+1]<<16|c[e+2]<<8|c[e+3],e+=4;for(let h=16;h<80;h++){const c=t[h-3]^t[h-8]^t[h-14]^t[h-16];t[h]=4294967295&(c<<1|c>>>31)}let n,a,r=this.chain_[0],i=this.chain_[1],s=this.chain_[2],o=this.chain_[3],l=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(n=o^i&(s^o),a=1518500249):(n=i^s^o,a=1859775393):h<60?(n=i&s|o&(i|s),a=2400959708):(n=i^s^o,a=3395469782);const c=(r<<5|r>>>27)+n+l+a+t[h]&4294967295;l=o,o=s,s=4294967295&(i<<30|i>>>2),i=r,r=c}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+o&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(c,e){if(null==c)return;void 0===e&&(e=c.length);const t=e-this.blockSize;let n=0;const a=this.buf_;let r=this.inbuf_;while(n<e){if(0===r)while(n<=t)this.compress_(c,n),n+=this.blockSize;if("string"===typeof c){while(n<e)if(a[r]=c.charCodeAt(n),++r,++n,r===this.blockSize){this.compress_(a),r=0;break}}else while(n<e)if(a[r]=c[n],++r,++n,r===this.blockSize){this.compress_(a),r=0;break}}this.inbuf_=r,this.total_+=e}digest(){const c=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);let t=0;for(let n=0;n<5;n++)for(let e=24;e>=0;e-=8)c[t]=this.chain_[n]>>e&255,++t;return c}}function q(c,e){return`${c} failed: ${e} argument `}
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
const F=function(c){const e=[];let t=0;for(let n=0;n<c.length;n++){let r=c.charCodeAt(n);if(r>=55296&&r<=56319){const e=r-55296;n++,a(n<c.length,"Surrogate pair missing trail surrogate.");const t=c.charCodeAt(n)-56320;r=65536+(e<<10)+t}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=63&r|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=63&r|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=63&r|128)}return e},$=function(c){let e=0;for(let t=0;t<c.length;t++){const n=c.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};
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
function U(c){return c&&c._delegate?c._delegate:c}}).call(this,t("c8ba"))},2266:function(c,e,t){var n=t("825a"),a=t("e95a"),r=t("07fa"),i=t("0366"),s=t("9a1f"),o=t("35a1"),l=t("2a62"),h=function(c,e){this.stopped=c,this.result=e};c.exports=function(c,e,t){var v,u,f,m,d,z,p,M=t&&t.that,C=!(!t||!t.AS_ENTRIES),g=!(!t||!t.IS_ITERATOR),H=!(!t||!t.INTERRUPTED),y=i(e,M,1+C+H),V=function(c){return v&&l(v,"normal",c),new h(!0,c)},_=function(c){return C?(n(c),H?y(c[0],c[1],V):y(c[0],c[1])):H?y(c,V):y(c)};if(g)v=c;else{if(u=o(c),!u)throw TypeError(String(c)+" is not iterable");if(a(u)){for(f=0,m=r(c);m>f;f++)if(d=_(c[f]),d&&d instanceof h)return d;return new h(!1)}v=s(c,u)}z=v.next;while(!(p=z.call(v)).done){try{d=_(p.value)}catch(b){l(v,"throw",b)}if("object"==typeof d&&d&&d instanceof h)return d}return new h(!1)}},"23cb":function(c,e,t){var n=t("5926"),a=Math.max,r=Math.min;c.exports=function(c,e){var t=n(c);return t<0?a(t+e,0):r(t,e)}},"23e7":function(c,e,t){var n=t("da84"),a=t("06cf").f,r=t("9112"),i=t("6eeb"),s=t("ce4e"),o=t("e893"),l=t("94ca");c.exports=function(c,e){var t,h,v,u,f,m,d=c.target,z=c.global,p=c.stat;if(h=z?n:p?n[d]||s(d,{}):(n[d]||{}).prototype,h)for(v in e){if(f=e[v],c.noTargetGet?(m=a(h,v),u=m&&m.value):u=h[v],t=l(z?v:d+(p?".":"#")+v,c.forced),!t&&void 0!==u){if(typeof f===typeof u)continue;o(f,u)}(c.sham||u&&u.sham)&&r(f,"sham",!0),i(h,v,f,c)}}},"241c":function(c,e,t){var n=t("ca84"),a=t("7839"),r=a.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(c){return n(c,r)}},"260b":function(c,e,t){"use strict";var n=t("5606");t.d(e,"a",(function(){return n["e"]}));var a="firebase",r="9.1.3";
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
Object(n["f"])(a,r,"app")},2626:function(c,e,t){"use strict";var n=t("d066"),a=t("9bf2"),r=t("b622"),i=t("83ab"),s=r("species");c.exports=function(c){var e=n(c),t=a.f;i&&e&&!e[s]&&t(e,s,{configurable:!0,get:function(){return this}})}},2877:function(c,e,t){"use strict";function n(c,e,t,n,a,r,i,s){var o,l="function"===typeof c?c.options:c;if(e&&(l.render=e,l.staticRenderFns=t,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(o=function(c){c=c||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,c||"undefined"===typeof __VUE_SSR_CONTEXT__||(c=__VUE_SSR_CONTEXT__),a&&a.call(this,c),c&&c._registeredComponents&&c._registeredComponents.add(i)},l._ssrRegister=o):a&&(o=s?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),o)if(l.functional){l._injectStyles=o;var h=l.render;l.render=function(c,e){return o.call(e),h(c,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,o):[o]}return{exports:c,options:l}}t.d(e,"a",(function(){return n}))},"2a62":function(c,e,t){var n=t("825a"),a=t("dc4a");c.exports=function(c,e,t){var r,i;n(c);try{if(r=a(c,"return"),!r){if("throw"===e)throw t;return t}r=r.call(c)}catch(s){i=!0,r=s}if("throw"===e)throw t;if(i)throw r;return n(r),t}},"2b0e":function(c,e,t){"use strict";(function(c){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var t=Object.freeze({});function n(c){return void 0===c||null===c}function a(c){return void 0!==c&&null!==c}function r(c){return!0===c}function i(c){return!1===c}function s(c){return"string"===typeof c||"number"===typeof c||"symbol"===typeof c||"boolean"===typeof c}function o(c){return null!==c&&"object"===typeof c}var l=Object.prototype.toString;function h(c){return"[object Object]"===l.call(c)}function v(c){return"[object RegExp]"===l.call(c)}function u(c){var e=parseFloat(String(c));return e>=0&&Math.floor(e)===e&&isFinite(c)}function f(c){return a(c)&&"function"===typeof c.then&&"function"===typeof c.catch}function m(c){return null==c?"":Array.isArray(c)||h(c)&&c.toString===l?JSON.stringify(c,null,2):String(c)}function d(c){var e=parseFloat(c);return isNaN(e)?c:e}function z(c,e){for(var t=Object.create(null),n=c.split(","),a=0;a<n.length;a++)t[n[a]]=!0;return e?function(c){return t[c.toLowerCase()]}:function(c){return t[c]}}z("slot,component",!0);var p=z("key,ref,slot,slot-scope,is");function M(c,e){if(c.length){var t=c.indexOf(e);if(t>-1)return c.splice(t,1)}}var C=Object.prototype.hasOwnProperty;function g(c,e){return C.call(c,e)}function H(c){var e=Object.create(null);return function(t){var n=e[t];return n||(e[t]=c(t))}}var y=/-(\w)/g,V=H((function(c){return c.replace(y,(function(c,e){return e?e.toUpperCase():""}))})),_=H((function(c){return c.charAt(0).toUpperCase()+c.slice(1)})),b=/\B([A-Z])/g,L=H((function(c){return c.replace(b,"-$1").toLowerCase()}));function w(c,e){function t(t){var n=arguments.length;return n?n>1?c.apply(e,arguments):c.call(e,t):c.call(e)}return t._length=c.length,t}function A(c,e){return c.bind(e)}var S=Function.prototype.bind?A:w;function k(c,e){e=e||0;var t=c.length-e,n=new Array(t);while(t--)n[t]=c[t+e];return n}function x(c,e){for(var t in e)c[t]=e[t];return c}function O(c){for(var e={},t=0;t<c.length;t++)c[t]&&x(e,c[t]);return e}function T(c,e,t){}var I=function(c,e,t){return!1},E=function(c){return c};function j(c,e){if(c===e)return!0;var t=o(c),n=o(e);if(!t||!n)return!t&&!n&&String(c)===String(e);try{var a=Array.isArray(c),r=Array.isArray(e);if(a&&r)return c.length===e.length&&c.every((function(c,t){return j(c,e[t])}));if(c instanceof Date&&e instanceof Date)return c.getTime()===e.getTime();if(a||r)return!1;var i=Object.keys(c),s=Object.keys(e);return i.length===s.length&&i.every((function(t){return j(c[t],e[t])}))}catch(l){return!1}}function P(c,e){for(var t=0;t<c.length;t++)if(j(c[t],e))return t;return-1}function N(c){var e=!1;return function(){e||(e=!0,c.apply(this,arguments))}}var R="data-server-rendered",D=["component","directive","filter"],Z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:T,parsePlatformTagName:E,mustUseProp:I,async:!0,_lifecycleHooks:Z},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function $(c){var e=(c+"").charCodeAt(0);return 36===e||95===e}function U(c,e,t,n){Object.defineProperty(c,e,{value:t,enumerable:!!n,writable:!0,configurable:!0})}var W=new RegExp("[^"+F.source+".$_\\d]");function B(c){if(!W.test(c)){var e=c.split(".");return function(c){for(var t=0;t<e.length;t++){if(!c)return;c=c[e[t]]}return c}}}var K,Y="__proto__"in{},G="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Q&&WXEnvironment.platform.toLowerCase(),J=G&&window.navigator.userAgent.toLowerCase(),cc=J&&/msie|trident/.test(J),ec=J&&J.indexOf("msie 9.0")>0,tc=J&&J.indexOf("edge/")>0,nc=(J&&J.indexOf("android"),J&&/iphone|ipad|ipod|ios/.test(J)||"ios"===X),ac=(J&&/chrome\/\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\/(\d+)/)),rc={}.watch,ic=!1;if(G)try{var sc={};Object.defineProperty(sc,"passive",{get:function(){ic=!0}}),window.addEventListener("test-passive",null,sc)}catch(Vi){}var oc=function(){return void 0===K&&(K=!G&&!Q&&"undefined"!==typeof c&&(c["process"]&&"server"===c["process"].env.VUE_ENV)),K},lc=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function hc(c){return"function"===typeof c&&/native code/.test(c.toString())}var vc,uc="undefined"!==typeof Symbol&&hc(Symbol)&&"undefined"!==typeof Reflect&&hc(Reflect.ownKeys);vc="undefined"!==typeof Set&&hc(Set)?Set:function(){function c(){this.set=Object.create(null)}return c.prototype.has=function(c){return!0===this.set[c]},c.prototype.add=function(c){this.set[c]=!0},c.prototype.clear=function(){this.set=Object.create(null)},c}();var fc=T,mc=0,dc=function(){this.id=mc++,this.subs=[]};dc.prototype.addSub=function(c){this.subs.push(c)},dc.prototype.removeSub=function(c){M(this.subs,c)},dc.prototype.depend=function(){dc.target&&dc.target.addDep(this)},dc.prototype.notify=function(){var c=this.subs.slice();for(var e=0,t=c.length;e<t;e++)c[e].update()},dc.target=null;var zc=[];function pc(c){zc.push(c),dc.target=c}function Mc(){zc.pop(),dc.target=zc[zc.length-1]}var Cc=function(c,e,t,n,a,r,i,s){this.tag=c,this.data=e,this.children=t,this.text=n,this.elm=a,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=i,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gc={child:{configurable:!0}};gc.child.get=function(){return this.componentInstance},Object.defineProperties(Cc.prototype,gc);var Hc=function(c){void 0===c&&(c="");var e=new Cc;return e.text=c,e.isComment=!0,e};function yc(c){return new Cc(void 0,void 0,void 0,String(c))}function Vc(c){var e=new Cc(c.tag,c.data,c.children&&c.children.slice(),c.text,c.elm,c.context,c.componentOptions,c.asyncFactory);return e.ns=c.ns,e.isStatic=c.isStatic,e.key=c.key,e.isComment=c.isComment,e.fnContext=c.fnContext,e.fnOptions=c.fnOptions,e.fnScopeId=c.fnScopeId,e.asyncMeta=c.asyncMeta,e.isCloned=!0,e}var _c=Array.prototype,bc=Object.create(_c),Lc=["push","pop","shift","unshift","splice","sort","reverse"];Lc.forEach((function(c){var e=_c[c];U(bc,c,(function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var a,r=e.apply(this,t),i=this.__ob__;switch(c){case"push":case"unshift":a=t;break;case"splice":a=t.slice(2);break}return a&&i.observeArray(a),i.dep.notify(),r}))}));var wc=Object.getOwnPropertyNames(bc),Ac=!0;function Sc(c){Ac=c}var kc=function(c){this.value=c,this.dep=new dc,this.vmCount=0,U(c,"__ob__",this),Array.isArray(c)?(Y?xc(c,bc):Oc(c,bc,wc),this.observeArray(c)):this.walk(c)};function xc(c,e){c.__proto__=e}function Oc(c,e,t){for(var n=0,a=t.length;n<a;n++){var r=t[n];U(c,r,e[r])}}function Tc(c,e){var t;if(o(c)&&!(c instanceof Cc))return g(c,"__ob__")&&c.__ob__ instanceof kc?t=c.__ob__:Ac&&!oc()&&(Array.isArray(c)||h(c))&&Object.isExtensible(c)&&!c._isVue&&(t=new kc(c)),e&&t&&t.vmCount++,t}function Ic(c,e,t,n,a){var r=new dc,i=Object.getOwnPropertyDescriptor(c,e);if(!i||!1!==i.configurable){var s=i&&i.get,o=i&&i.set;s&&!o||2!==arguments.length||(t=c[e]);var l=!a&&Tc(t);Object.defineProperty(c,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(c):t;return dc.target&&(r.depend(),l&&(l.dep.depend(),Array.isArray(e)&&Pc(e))),e},set:function(e){var n=s?s.call(c):t;e===n||e!==e&&n!==n||s&&!o||(o?o.call(c,e):t=e,l=!a&&Tc(e),r.notify())}})}}function Ec(c,e,t){if(Array.isArray(c)&&u(e))return c.length=Math.max(c.length,e),c.splice(e,1,t),t;if(e in c&&!(e in Object.prototype))return c[e]=t,t;var n=c.__ob__;return c._isVue||n&&n.vmCount?t:n?(Ic(n.value,e,t),n.dep.notify(),t):(c[e]=t,t)}function jc(c,e){if(Array.isArray(c)&&u(e))c.splice(e,1);else{var t=c.__ob__;c._isVue||t&&t.vmCount||g(c,e)&&(delete c[e],t&&t.dep.notify())}}function Pc(c){for(var e=void 0,t=0,n=c.length;t<n;t++)e=c[t],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pc(e)}kc.prototype.walk=function(c){for(var e=Object.keys(c),t=0;t<e.length;t++)Ic(c,e[t])},kc.prototype.observeArray=function(c){for(var e=0,t=c.length;e<t;e++)Tc(c[e])};var Nc=q.optionMergeStrategies;function Rc(c,e){if(!e)return c;for(var t,n,a,r=uc?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++)t=r[i],"__ob__"!==t&&(n=c[t],a=e[t],g(c,t)?n!==a&&h(n)&&h(a)&&Rc(n,a):Ec(c,t,a));return c}function Dc(c,e,t){return t?function(){var n="function"===typeof e?e.call(t,t):e,a="function"===typeof c?c.call(t,t):c;return n?Rc(n,a):a}:e?c?function(){return Rc("function"===typeof e?e.call(this,this):e,"function"===typeof c?c.call(this,this):c)}:e:c}function Zc(c,e){var t=e?c?c.concat(e):Array.isArray(e)?e:[e]:c;return t?qc(t):t}function qc(c){for(var e=[],t=0;t<c.length;t++)-1===e.indexOf(c[t])&&e.push(c[t]);return e}function Fc(c,e,t,n){var a=Object.create(c||null);return e?x(a,e):a}Nc.data=function(c,e,t){return t?Dc(c,e,t):e&&"function"!==typeof e?c:Dc(c,e)},Z.forEach((function(c){Nc[c]=Zc})),D.forEach((function(c){Nc[c+"s"]=Fc})),Nc.watch=function(c,e,t,n){if(c===rc&&(c=void 0),e===rc&&(e=void 0),!e)return Object.create(c||null);if(!c)return e;var a={};for(var r in x(a,c),e){var i=a[r],s=e[r];i&&!Array.isArray(i)&&(i=[i]),a[r]=i?i.concat(s):Array.isArray(s)?s:[s]}return a},Nc.props=Nc.methods=Nc.inject=Nc.computed=function(c,e,t,n){if(!c)return e;var a=Object.create(null);return x(a,c),e&&x(a,e),a},Nc.provide=Dc;var $c=function(c,e){return void 0===e?c:e};function Uc(c,e){var t=c.props;if(t){var n,a,r,i={};if(Array.isArray(t)){n=t.length;while(n--)a=t[n],"string"===typeof a&&(r=V(a),i[r]={type:null})}else if(h(t))for(var s in t)a=t[s],r=V(s),i[r]=h(a)?a:{type:a};else 0;c.props=i}}function Wc(c,e){var t=c.inject;if(t){var n=c.inject={};if(Array.isArray(t))for(var a=0;a<t.length;a++)n[t[a]]={from:t[a]};else if(h(t))for(var r in t){var i=t[r];n[r]=h(i)?x({from:r},i):{from:i}}else 0}}function Bc(c){var e=c.directives;if(e)for(var t in e){var n=e[t];"function"===typeof n&&(e[t]={bind:n,update:n})}}function Kc(c,e,t){if("function"===typeof e&&(e=e.options),Uc(e,t),Wc(e,t),Bc(e),!e._base&&(e.extends&&(c=Kc(c,e.extends,t)),e.mixins))for(var n=0,a=e.mixins.length;n<a;n++)c=Kc(c,e.mixins[n],t);var r,i={};for(r in c)s(r);for(r in e)g(c,r)||s(r);function s(n){var a=Nc[n]||$c;i[n]=a(c[n],e[n],t,n)}return i}function Yc(c,e,t,n){if("string"===typeof t){var a=c[e];if(g(a,t))return a[t];var r=V(t);if(g(a,r))return a[r];var i=_(r);if(g(a,i))return a[i];var s=a[t]||a[r]||a[i];return s}}function Gc(c,e,t,n){var a=e[c],r=!g(t,c),i=t[c],s=ee(Boolean,a.type);if(s>-1)if(r&&!g(a,"default"))i=!1;else if(""===i||i===L(c)){var o=ee(String,a.type);(o<0||s<o)&&(i=!0)}if(void 0===i){i=Qc(n,a,c);var l=Ac;Sc(!0),Tc(i),Sc(l)}return i}function Qc(c,e,t){if(g(e,"default")){var n=e.default;return c&&c.$options.propsData&&void 0===c.$options.propsData[t]&&void 0!==c._props[t]?c._props[t]:"function"===typeof n&&"Function"!==Jc(e.type)?n.call(c):n}}var Xc=/^\s*function (\w+)/;function Jc(c){var e=c&&c.toString().match(Xc);return e?e[1]:""}function ce(c,e){return Jc(c)===Jc(e)}function ee(c,e){if(!Array.isArray(e))return ce(e,c)?0:-1;for(var t=0,n=e.length;t<n;t++)if(ce(e[t],c))return t;return-1}function te(c,e,t){pc();try{if(e){var n=e;while(n=n.$parent){var a=n.$options.errorCaptured;if(a)for(var r=0;r<a.length;r++)try{var i=!1===a[r].call(n,c,e,t);if(i)return}catch(Vi){ae(Vi,n,"errorCaptured hook")}}}ae(c,e,t)}finally{Mc()}}function ne(c,e,t,n,a){var r;try{r=t?c.apply(e,t):c.call(e),r&&!r._isVue&&f(r)&&!r._handled&&(r.catch((function(c){return te(c,n,a+" (Promise/async)")})),r._handled=!0)}catch(Vi){te(Vi,n,a)}return r}function ae(c,e,t){if(q.errorHandler)try{return q.errorHandler.call(null,c,e,t)}catch(Vi){Vi!==c&&re(Vi,null,"config.errorHandler")}re(c,e,t)}function re(c,e,t){if(!G&&!Q||"undefined"===typeof console)throw c;console.error(c)}var ie,se=!1,oe=[],le=!1;function he(){le=!1;var c=oe.slice(0);oe.length=0;for(var e=0;e<c.length;e++)c[e]()}if("undefined"!==typeof Promise&&hc(Promise)){var ve=Promise.resolve();ie=function(){ve.then(he),nc&&setTimeout(T)},se=!0}else if(cc||"undefined"===typeof MutationObserver||!hc(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ie="undefined"!==typeof setImmediate&&hc(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var ue=1,fe=new MutationObserver(he),me=document.createTextNode(String(ue));fe.observe(me,{characterData:!0}),ie=function(){ue=(ue+1)%2,me.data=String(ue)},se=!0}function de(c,e){var t;if(oe.push((function(){if(c)try{c.call(e)}catch(Vi){te(Vi,e,"nextTick")}else t&&t(e)})),le||(le=!0,ie()),!c&&"undefined"!==typeof Promise)return new Promise((function(c){t=c}))}var ze=new vc;function pe(c){Me(c,ze),ze.clear()}function Me(c,e){var t,n,a=Array.isArray(c);if(!(!a&&!o(c)||Object.isFrozen(c)||c instanceof Cc)){if(c.__ob__){var r=c.__ob__.dep.id;if(e.has(r))return;e.add(r)}if(a){t=c.length;while(t--)Me(c[t],e)}else{n=Object.keys(c),t=n.length;while(t--)Me(c[n[t]],e)}}}var Ce=H((function(c){var e="&"===c.charAt(0);c=e?c.slice(1):c;var t="~"===c.charAt(0);c=t?c.slice(1):c;var n="!"===c.charAt(0);return c=n?c.slice(1):c,{name:c,once:t,capture:n,passive:e}}));function ge(c,e){function t(){var c=arguments,n=t.fns;if(!Array.isArray(n))return ne(n,null,arguments,e,"v-on handler");for(var a=n.slice(),r=0;r<a.length;r++)ne(a[r],null,c,e,"v-on handler")}return t.fns=c,t}function He(c,e,t,a,i,s){var o,l,h,v;for(o in c)l=c[o],h=e[o],v=Ce(o),n(l)||(n(h)?(n(l.fns)&&(l=c[o]=ge(l,s)),r(v.once)&&(l=c[o]=i(v.name,l,v.capture)),t(v.name,l,v.capture,v.passive,v.params)):l!==h&&(h.fns=l,c[o]=h));for(o in e)n(c[o])&&(v=Ce(o),a(v.name,e[o],v.capture))}function ye(c,e,t){var i;c instanceof Cc&&(c=c.data.hook||(c.data.hook={}));var s=c[e];function o(){t.apply(this,arguments),M(i.fns,o)}n(s)?i=ge([o]):a(s.fns)&&r(s.merged)?(i=s,i.fns.push(o)):i=ge([s,o]),i.merged=!0,c[e]=i}function Ve(c,e,t){var r=e.options.props;if(!n(r)){var i={},s=c.attrs,o=c.props;if(a(s)||a(o))for(var l in r){var h=L(l);_e(i,o,l,h,!0)||_e(i,s,l,h,!1)}return i}}function _e(c,e,t,n,r){if(a(e)){if(g(e,t))return c[t]=e[t],r||delete e[t],!0;if(g(e,n))return c[t]=e[n],r||delete e[n],!0}return!1}function be(c){for(var e=0;e<c.length;e++)if(Array.isArray(c[e]))return Array.prototype.concat.apply([],c);return c}function Le(c){return s(c)?[yc(c)]:Array.isArray(c)?Ae(c):void 0}function we(c){return a(c)&&a(c.text)&&i(c.isComment)}function Ae(c,e){var t,i,o,l,h=[];for(t=0;t<c.length;t++)i=c[t],n(i)||"boolean"===typeof i||(o=h.length-1,l=h[o],Array.isArray(i)?i.length>0&&(i=Ae(i,(e||"")+"_"+t),we(i[0])&&we(l)&&(h[o]=yc(l.text+i[0].text),i.shift()),h.push.apply(h,i)):s(i)?we(l)?h[o]=yc(l.text+i):""!==i&&h.push(yc(i)):we(i)&&we(l)?h[o]=yc(l.text+i.text):(r(c._isVList)&&a(i.tag)&&n(i.key)&&a(e)&&(i.key="__vlist"+e+"_"+t+"__"),h.push(i)));return h}function Se(c){var e=c.$options.provide;e&&(c._provided="function"===typeof e?e.call(c):e)}function ke(c){var e=xe(c.$options.inject,c);e&&(Sc(!1),Object.keys(e).forEach((function(t){Ic(c,t,e[t])})),Sc(!0))}function xe(c,e){if(c){for(var t=Object.create(null),n=uc?Reflect.ownKeys(c):Object.keys(c),a=0;a<n.length;a++){var r=n[a];if("__ob__"!==r){var i=c[r].from,s=e;while(s){if(s._provided&&g(s._provided,i)){t[r]=s._provided[i];break}s=s.$parent}if(!s)if("default"in c[r]){var o=c[r].default;t[r]="function"===typeof o?o.call(e):o}else 0}}return t}}function Oe(c,e){if(!c||!c.length)return{};for(var t={},n=0,a=c.length;n<a;n++){var r=c[n],i=r.data;if(i&&i.attrs&&i.attrs.slot&&delete i.attrs.slot,r.context!==e&&r.fnContext!==e||!i||null==i.slot)(t.default||(t.default=[])).push(r);else{var s=i.slot,o=t[s]||(t[s]=[]);"template"===r.tag?o.push.apply(o,r.children||[]):o.push(r)}}for(var l in t)t[l].every(Te)&&delete t[l];return t}function Te(c){return c.isComment&&!c.asyncFactory||" "===c.text}function Ie(c){return c.isComment&&c.asyncFactory}function Ee(c,e,n){var a,r=Object.keys(e).length>0,i=c?!!c.$stable:!r,s=c&&c.$key;if(c){if(c._normalized)return c._normalized;if(i&&n&&n!==t&&s===n.$key&&!r&&!n.$hasNormal)return n;for(var o in a={},c)c[o]&&"$"!==o[0]&&(a[o]=je(e,o,c[o]))}else a={};for(var l in e)l in a||(a[l]=Pe(e,l));return c&&Object.isExtensible(c)&&(c._normalized=a),U(a,"$stable",i),U(a,"$key",s),U(a,"$hasNormal",r),a}function je(c,e,t){var n=function(){var c=arguments.length?t.apply(null,arguments):t({});c=c&&"object"===typeof c&&!Array.isArray(c)?[c]:Le(c);var e=c&&c[0];return c&&(!e||1===c.length&&e.isComment&&!Ie(e))?void 0:c};return t.proxy&&Object.defineProperty(c,e,{get:n,enumerable:!0,configurable:!0}),n}function Pe(c,e){return function(){return c[e]}}function Ne(c,e){var t,n,r,i,s;if(Array.isArray(c)||"string"===typeof c)for(t=new Array(c.length),n=0,r=c.length;n<r;n++)t[n]=e(c[n],n);else if("number"===typeof c)for(t=new Array(c),n=0;n<c;n++)t[n]=e(n+1,n);else if(o(c))if(uc&&c[Symbol.iterator]){t=[];var l=c[Symbol.iterator](),h=l.next();while(!h.done)t.push(e(h.value,t.length)),h=l.next()}else for(i=Object.keys(c),t=new Array(i.length),n=0,r=i.length;n<r;n++)s=i[n],t[n]=e(c[s],s,n);return a(t)||(t=[]),t._isVList=!0,t}function Re(c,e,t,n){var a,r=this.$scopedSlots[c];r?(t=t||{},n&&(t=x(x({},n),t)),a=r(t)||("function"===typeof e?e():e)):a=this.$slots[c]||("function"===typeof e?e():e);var i=t&&t.slot;return i?this.$createElement("template",{slot:i},a):a}function De(c){return Yc(this.$options,"filters",c,!0)||E}function Ze(c,e){return Array.isArray(c)?-1===c.indexOf(e):c!==e}function qe(c,e,t,n,a){var r=q.keyCodes[e]||t;return a&&n&&!q.keyCodes[e]?Ze(a,n):r?Ze(r,c):n?L(n)!==e:void 0===c}function Fe(c,e,t,n,a){if(t)if(o(t)){var r;Array.isArray(t)&&(t=O(t));var i=function(i){if("class"===i||"style"===i||p(i))r=c;else{var s=c.attrs&&c.attrs.type;r=n||q.mustUseProp(e,s,i)?c.domProps||(c.domProps={}):c.attrs||(c.attrs={})}var o=V(i),l=L(i);if(!(o in r)&&!(l in r)&&(r[i]=t[i],a)){var h=c.on||(c.on={});h["update:"+i]=function(c){t[i]=c}}};for(var s in t)i(s)}else;return c}function $e(c,e){var t=this._staticTrees||(this._staticTrees=[]),n=t[c];return n&&!e||(n=t[c]=this.$options.staticRenderFns[c].call(this._renderProxy,null,this),We(n,"__static__"+c,!1)),n}function Ue(c,e,t){return We(c,"__once__"+e+(t?"_"+t:""),!0),c}function We(c,e,t){if(Array.isArray(c))for(var n=0;n<c.length;n++)c[n]&&"string"!==typeof c[n]&&Be(c[n],e+"_"+n,t);else Be(c,e,t)}function Be(c,e,t){c.isStatic=!0,c.key=e,c.isOnce=t}function Ke(c,e){if(e)if(h(e)){var t=c.on=c.on?x({},c.on):{};for(var n in e){var a=t[n],r=e[n];t[n]=a?[].concat(a,r):r}}else;return c}function Ye(c,e,t,n){e=e||{$stable:!t};for(var a=0;a<c.length;a++){var r=c[a];Array.isArray(r)?Ye(r,e,t):r&&(r.proxy&&(r.fn.proxy=!0),e[r.key]=r.fn)}return n&&(e.$key=n),e}function Ge(c,e){for(var t=0;t<e.length;t+=2){var n=e[t];"string"===typeof n&&n&&(c[e[t]]=e[t+1])}return c}function Qe(c,e){return"string"===typeof c?e+c:c}function Xe(c){c._o=Ue,c._n=d,c._s=m,c._l=Ne,c._t=Re,c._q=j,c._i=P,c._m=$e,c._f=De,c._k=qe,c._b=Fe,c._v=yc,c._e=Hc,c._u=Ye,c._g=Ke,c._d=Ge,c._p=Qe}function Je(c,e,n,a,i){var s,o=this,l=i.options;g(a,"_uid")?(s=Object.create(a),s._original=a):(s=a,a=a._original);var h=r(l._compiled),v=!h;this.data=c,this.props=e,this.children=n,this.parent=a,this.listeners=c.on||t,this.injections=xe(l.inject,a),this.slots=function(){return o.$slots||Ee(c.scopedSlots,o.$slots=Oe(n,a)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ee(c.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ee(c.scopedSlots,this.$slots)),l._scopeId?this._c=function(c,e,t,n){var r=ut(s,c,e,t,n,v);return r&&!Array.isArray(r)&&(r.fnScopeId=l._scopeId,r.fnContext=a),r}:this._c=function(c,e,t,n){return ut(s,c,e,t,n,v)}}function ct(c,e,n,r,i){var s=c.options,o={},l=s.props;if(a(l))for(var h in l)o[h]=Gc(h,l,e||t);else a(n.attrs)&&tt(o,n.attrs),a(n.props)&&tt(o,n.props);var v=new Je(n,o,i,r,c),u=s.render.call(null,v._c,v);if(u instanceof Cc)return et(u,n,v.parent,s,v);if(Array.isArray(u)){for(var f=Le(u)||[],m=new Array(f.length),d=0;d<f.length;d++)m[d]=et(f[d],n,v.parent,s,v);return m}}function et(c,e,t,n,a){var r=Vc(c);return r.fnContext=t,r.fnOptions=n,e.slot&&((r.data||(r.data={})).slot=e.slot),r}function tt(c,e){for(var t in e)c[V(t)]=e[t]}Xe(Je.prototype);var nt={init:function(c,e){if(c.componentInstance&&!c.componentInstance._isDestroyed&&c.data.keepAlive){var t=c;nt.prepatch(t,t)}else{var n=c.componentInstance=it(c,kt);n.$mount(e?c.elm:void 0,e)}},prepatch:function(c,e){var t=e.componentOptions,n=e.componentInstance=c.componentInstance;Et(n,t.propsData,t.listeners,e,t.children)},insert:function(c){var e=c.context,t=c.componentInstance;t._isMounted||(t._isMounted=!0,Rt(t,"mounted")),c.data.keepAlive&&(e._isMounted?Xt(t):Pt(t,!0))},destroy:function(c){var e=c.componentInstance;e._isDestroyed||(c.data.keepAlive?Nt(e,!0):e.$destroy())}},at=Object.keys(nt);function rt(c,e,t,i,s){if(!n(c)){var l=t.$options._base;if(o(c)&&(c=l.extend(c)),"function"===typeof c){var h;if(n(c.cid)&&(h=c,c=yt(h,l),void 0===c))return Ht(h,e,t,i,s);e=e||{},yn(c),a(e.model)&&lt(c.options,e);var v=Ve(e,c,s);if(r(c.options.functional))return ct(c,v,e,t,i);var u=e.on;if(e.on=e.nativeOn,r(c.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}st(e);var m=c.options.name||s,d=new Cc("vue-component-"+c.cid+(m?"-"+m:""),e,void 0,void 0,void 0,t,{Ctor:c,propsData:v,listeners:u,tag:s,children:i},h);return d}}}function it(c,e){var t={_isComponent:!0,_parentVnode:c,parent:e},n=c.data.inlineTemplate;return a(n)&&(t.render=n.render,t.staticRenderFns=n.staticRenderFns),new c.componentOptions.Ctor(t)}function st(c){for(var e=c.hook||(c.hook={}),t=0;t<at.length;t++){var n=at[t],a=e[n],r=nt[n];a===r||a&&a._merged||(e[n]=a?ot(r,a):r)}}function ot(c,e){var t=function(t,n){c(t,n),e(t,n)};return t._merged=!0,t}function lt(c,e){var t=c.model&&c.model.prop||"value",n=c.model&&c.model.event||"input";(e.attrs||(e.attrs={}))[t]=e.model.value;var r=e.on||(e.on={}),i=r[n],s=e.model.callback;a(i)?(Array.isArray(i)?-1===i.indexOf(s):i!==s)&&(r[n]=[s].concat(i)):r[n]=s}var ht=1,vt=2;function ut(c,e,t,n,a,i){return(Array.isArray(t)||s(t))&&(a=n,n=t,t=void 0),r(i)&&(a=vt),ft(c,e,t,n,a)}function ft(c,e,t,n,r){if(a(t)&&a(t.__ob__))return Hc();if(a(t)&&a(t.is)&&(e=t.is),!e)return Hc();var i,s,o;(Array.isArray(n)&&"function"===typeof n[0]&&(t=t||{},t.scopedSlots={default:n[0]},n.length=0),r===vt?n=Le(n):r===ht&&(n=be(n)),"string"===typeof e)?(s=c.$vnode&&c.$vnode.ns||q.getTagNamespace(e),i=q.isReservedTag(e)?new Cc(q.parsePlatformTagName(e),t,n,void 0,void 0,c):t&&t.pre||!a(o=Yc(c.$options,"components",e))?new Cc(e,t,n,void 0,void 0,c):rt(o,t,c,n,e)):i=rt(e,t,c,n);return Array.isArray(i)?i:a(i)?(a(s)&&mt(i,s),a(t)&&dt(t),i):Hc()}function mt(c,e,t){if(c.ns=e,"foreignObject"===c.tag&&(e=void 0,t=!0),a(c.children))for(var i=0,s=c.children.length;i<s;i++){var o=c.children[i];a(o.tag)&&(n(o.ns)||r(t)&&"svg"!==o.tag)&&mt(o,e,t)}}function dt(c){o(c.style)&&pe(c.style),o(c.class)&&pe(c.class)}function zt(c){c._vnode=null,c._staticTrees=null;var e=c.$options,n=c.$vnode=e._parentVnode,a=n&&n.context;c.$slots=Oe(e._renderChildren,a),c.$scopedSlots=t,c._c=function(e,t,n,a){return ut(c,e,t,n,a,!1)},c.$createElement=function(e,t,n,a){return ut(c,e,t,n,a,!0)};var r=n&&n.data;Ic(c,"$attrs",r&&r.attrs||t,null,!0),Ic(c,"$listeners",e._parentListeners||t,null,!0)}var pt,Mt=null;function Ct(c){Xe(c.prototype),c.prototype.$nextTick=function(c){return de(c,this)},c.prototype._render=function(){var c,e=this,t=e.$options,n=t.render,a=t._parentVnode;a&&(e.$scopedSlots=Ee(a.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=a;try{Mt=e,c=n.call(e._renderProxy,e.$createElement)}catch(Vi){te(Vi,e,"render"),c=e._vnode}finally{Mt=null}return Array.isArray(c)&&1===c.length&&(c=c[0]),c instanceof Cc||(c=Hc()),c.parent=a,c}}function gt(c,e){return(c.__esModule||uc&&"Module"===c[Symbol.toStringTag])&&(c=c.default),o(c)?e.extend(c):c}function Ht(c,e,t,n,a){var r=Hc();return r.asyncFactory=c,r.asyncMeta={data:e,context:t,children:n,tag:a},r}function yt(c,e){if(r(c.error)&&a(c.errorComp))return c.errorComp;if(a(c.resolved))return c.resolved;var t=Mt;if(t&&a(c.owners)&&-1===c.owners.indexOf(t)&&c.owners.push(t),r(c.loading)&&a(c.loadingComp))return c.loadingComp;if(t&&!a(c.owners)){var i=c.owners=[t],s=!0,l=null,h=null;t.$on("hook:destroyed",(function(){return M(i,t)}));var v=function(c){for(var e=0,t=i.length;e<t;e++)i[e].$forceUpdate();c&&(i.length=0,null!==l&&(clearTimeout(l),l=null),null!==h&&(clearTimeout(h),h=null))},u=N((function(t){c.resolved=gt(t,e),s?i.length=0:v(!0)})),m=N((function(e){a(c.errorComp)&&(c.error=!0,v(!0))})),d=c(u,m);return o(d)&&(f(d)?n(c.resolved)&&d.then(u,m):f(d.component)&&(d.component.then(u,m),a(d.error)&&(c.errorComp=gt(d.error,e)),a(d.loading)&&(c.loadingComp=gt(d.loading,e),0===d.delay?c.loading=!0:l=setTimeout((function(){l=null,n(c.resolved)&&n(c.error)&&(c.loading=!0,v(!1))}),d.delay||200)),a(d.timeout)&&(h=setTimeout((function(){h=null,n(c.resolved)&&m(null)}),d.timeout)))),s=!1,c.loading?c.loadingComp:c.resolved}}function Vt(c){if(Array.isArray(c))for(var e=0;e<c.length;e++){var t=c[e];if(a(t)&&(a(t.componentOptions)||Ie(t)))return t}}function _t(c){c._events=Object.create(null),c._hasHookEvent=!1;var e=c.$options._parentListeners;e&&At(c,e)}function bt(c,e){pt.$on(c,e)}function Lt(c,e){pt.$off(c,e)}function wt(c,e){var t=pt;return function n(){var a=e.apply(null,arguments);null!==a&&t.$off(c,n)}}function At(c,e,t){pt=c,He(e,t||{},bt,Lt,wt,c),pt=void 0}function St(c){var e=/^hook:/;c.prototype.$on=function(c,t){var n=this;if(Array.isArray(c))for(var a=0,r=c.length;a<r;a++)n.$on(c[a],t);else(n._events[c]||(n._events[c]=[])).push(t),e.test(c)&&(n._hasHookEvent=!0);return n},c.prototype.$once=function(c,e){var t=this;function n(){t.$off(c,n),e.apply(t,arguments)}return n.fn=e,t.$on(c,n),t},c.prototype.$off=function(c,e){var t=this;if(!arguments.length)return t._events=Object.create(null),t;if(Array.isArray(c)){for(var n=0,a=c.length;n<a;n++)t.$off(c[n],e);return t}var r,i=t._events[c];if(!i)return t;if(!e)return t._events[c]=null,t;var s=i.length;while(s--)if(r=i[s],r===e||r.fn===e){i.splice(s,1);break}return t},c.prototype.$emit=function(c){var e=this,t=e._events[c];if(t){t=t.length>1?k(t):t;for(var n=k(arguments,1),a='event handler for "'+c+'"',r=0,i=t.length;r<i;r++)ne(t[r],e,n,e,a)}return e}}var kt=null;function xt(c){var e=kt;return kt=c,function(){kt=e}}function Ot(c){var e=c.$options,t=e.parent;if(t&&!e.abstract){while(t.$options.abstract&&t.$parent)t=t.$parent;t.$children.push(c)}c.$parent=t,c.$root=t?t.$root:c,c.$children=[],c.$refs={},c._watcher=null,c._inactive=null,c._directInactive=!1,c._isMounted=!1,c._isDestroyed=!1,c._isBeingDestroyed=!1}function Tt(c){c.prototype._update=function(c,e){var t=this,n=t.$el,a=t._vnode,r=xt(t);t._vnode=c,t.$el=a?t.__patch__(a,c):t.__patch__(t.$el,c,e,!1),r(),n&&(n.__vue__=null),t.$el&&(t.$el.__vue__=t),t.$vnode&&t.$parent&&t.$vnode===t.$parent._vnode&&(t.$parent.$el=t.$el)},c.prototype.$forceUpdate=function(){var c=this;c._watcher&&c._watcher.update()},c.prototype.$destroy=function(){var c=this;if(!c._isBeingDestroyed){Rt(c,"beforeDestroy"),c._isBeingDestroyed=!0;var e=c.$parent;!e||e._isBeingDestroyed||c.$options.abstract||M(e.$children,c),c._watcher&&c._watcher.teardown();var t=c._watchers.length;while(t--)c._watchers[t].teardown();c._data.__ob__&&c._data.__ob__.vmCount--,c._isDestroyed=!0,c.__patch__(c._vnode,null),Rt(c,"destroyed"),c.$off(),c.$el&&(c.$el.__vue__=null),c.$vnode&&(c.$vnode.parent=null)}}}function It(c,e,t){var n;return c.$el=e,c.$options.render||(c.$options.render=Hc),Rt(c,"beforeMount"),n=function(){c._update(c._render(),t)},new tn(c,n,T,{before:function(){c._isMounted&&!c._isDestroyed&&Rt(c,"beforeUpdate")}},!0),t=!1,null==c.$vnode&&(c._isMounted=!0,Rt(c,"mounted")),c}function Et(c,e,n,a,r){var i=a.data.scopedSlots,s=c.$scopedSlots,o=!!(i&&!i.$stable||s!==t&&!s.$stable||i&&c.$scopedSlots.$key!==i.$key||!i&&c.$scopedSlots.$key),l=!!(r||c.$options._renderChildren||o);if(c.$options._parentVnode=a,c.$vnode=a,c._vnode&&(c._vnode.parent=a),c.$options._renderChildren=r,c.$attrs=a.data.attrs||t,c.$listeners=n||t,e&&c.$options.props){Sc(!1);for(var h=c._props,v=c.$options._propKeys||[],u=0;u<v.length;u++){var f=v[u],m=c.$options.props;h[f]=Gc(f,m,e,c)}Sc(!0),c.$options.propsData=e}n=n||t;var d=c.$options._parentListeners;c.$options._parentListeners=n,At(c,n,d),l&&(c.$slots=Oe(r,a.context),c.$forceUpdate())}function jt(c){while(c&&(c=c.$parent))if(c._inactive)return!0;return!1}function Pt(c,e){if(e){if(c._directInactive=!1,jt(c))return}else if(c._directInactive)return;if(c._inactive||null===c._inactive){c._inactive=!1;for(var t=0;t<c.$children.length;t++)Pt(c.$children[t]);Rt(c,"activated")}}function Nt(c,e){if((!e||(c._directInactive=!0,!jt(c)))&&!c._inactive){c._inactive=!0;for(var t=0;t<c.$children.length;t++)Nt(c.$children[t]);Rt(c,"deactivated")}}function Rt(c,e){pc();var t=c.$options[e],n=e+" hook";if(t)for(var a=0,r=t.length;a<r;a++)ne(t[a],c,null,c,n);c._hasHookEvent&&c.$emit("hook:"+e),Mc()}var Dt=[],Zt=[],qt={},Ft=!1,$t=!1,Ut=0;function Wt(){Ut=Dt.length=Zt.length=0,qt={},Ft=$t=!1}var Bt=0,Kt=Date.now;if(G&&!cc){var Yt=window.performance;Yt&&"function"===typeof Yt.now&&Kt()>document.createEvent("Event").timeStamp&&(Kt=function(){return Yt.now()})}function Gt(){var c,e;for(Bt=Kt(),$t=!0,Dt.sort((function(c,e){return c.id-e.id})),Ut=0;Ut<Dt.length;Ut++)c=Dt[Ut],c.before&&c.before(),e=c.id,qt[e]=null,c.run();var t=Zt.slice(),n=Dt.slice();Wt(),Jt(t),Qt(n),lc&&q.devtools&&lc.emit("flush")}function Qt(c){var e=c.length;while(e--){var t=c[e],n=t.vm;n._watcher===t&&n._isMounted&&!n._isDestroyed&&Rt(n,"updated")}}function Xt(c){c._inactive=!1,Zt.push(c)}function Jt(c){for(var e=0;e<c.length;e++)c[e]._inactive=!0,Pt(c[e],!0)}function cn(c){var e=c.id;if(null==qt[e]){if(qt[e]=!0,$t){var t=Dt.length-1;while(t>Ut&&Dt[t].id>c.id)t--;Dt.splice(t+1,0,c)}else Dt.push(c);Ft||(Ft=!0,de(Gt))}}var en=0,tn=function(c,e,t,n,a){this.vm=c,a&&(c._watcher=this),c._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=t,this.id=++en,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new vc,this.newDepIds=new vc,this.expression="","function"===typeof e?this.getter=e:(this.getter=B(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};tn.prototype.get=function(){var c;pc(this);var e=this.vm;try{c=this.getter.call(e,e)}catch(Vi){if(!this.user)throw Vi;te(Vi,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&pe(c),Mc(),this.cleanupDeps()}return c},tn.prototype.addDep=function(c){var e=c.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(c),this.depIds.has(e)||c.addSub(this))},tn.prototype.cleanupDeps=function(){var c=this.deps.length;while(c--){var e=this.deps[c];this.newDepIds.has(e.id)||e.removeSub(this)}var t=this.depIds;this.depIds=this.newDepIds,this.newDepIds=t,this.newDepIds.clear(),t=this.deps,this.deps=this.newDeps,this.newDeps=t,this.newDeps.length=0},tn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():cn(this)},tn.prototype.run=function(){if(this.active){var c=this.get();if(c!==this.value||o(c)||this.deep){var e=this.value;if(this.value=c,this.user){var t='callback for watcher "'+this.expression+'"';ne(this.cb,this.vm,[c,e],this.vm,t)}else this.cb.call(this.vm,c,e)}}},tn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},tn.prototype.depend=function(){var c=this.deps.length;while(c--)this.deps[c].depend()},tn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||M(this.vm._watchers,this);var c=this.deps.length;while(c--)this.deps[c].removeSub(this);this.active=!1}};var nn={enumerable:!0,configurable:!0,get:T,set:T};function an(c,e,t){nn.get=function(){return this[e][t]},nn.set=function(c){this[e][t]=c},Object.defineProperty(c,t,nn)}function rn(c){c._watchers=[];var e=c.$options;e.props&&sn(c,e.props),e.methods&&dn(c,e.methods),e.data?on(c):Tc(c._data={},!0),e.computed&&vn(c,e.computed),e.watch&&e.watch!==rc&&zn(c,e.watch)}function sn(c,e){var t=c.$options.propsData||{},n=c._props={},a=c.$options._propKeys=[],r=!c.$parent;r||Sc(!1);var i=function(r){a.push(r);var i=Gc(r,e,t,c);Ic(n,r,i),r in c||an(c,"_props",r)};for(var s in e)i(s);Sc(!0)}function on(c){var e=c.$options.data;e=c._data="function"===typeof e?ln(e,c):e||{},h(e)||(e={});var t=Object.keys(e),n=c.$options.props,a=(c.$options.methods,t.length);while(a--){var r=t[a];0,n&&g(n,r)||$(r)||an(c,"_data",r)}Tc(e,!0)}function ln(c,e){pc();try{return c.call(e,e)}catch(Vi){return te(Vi,e,"data()"),{}}finally{Mc()}}var hn={lazy:!0};function vn(c,e){var t=c._computedWatchers=Object.create(null),n=oc();for(var a in e){var r=e[a],i="function"===typeof r?r:r.get;0,n||(t[a]=new tn(c,i||T,T,hn)),a in c||un(c,a,r)}}function un(c,e,t){var n=!oc();"function"===typeof t?(nn.get=n?fn(e):mn(t),nn.set=T):(nn.get=t.get?n&&!1!==t.cache?fn(e):mn(t.get):T,nn.set=t.set||T),Object.defineProperty(c,e,nn)}function fn(c){return function(){var e=this._computedWatchers&&this._computedWatchers[c];if(e)return e.dirty&&e.evaluate(),dc.target&&e.depend(),e.value}}function mn(c){return function(){return c.call(this,this)}}function dn(c,e){c.$options.props;for(var t in e)c[t]="function"!==typeof e[t]?T:S(e[t],c)}function zn(c,e){for(var t in e){var n=e[t];if(Array.isArray(n))for(var a=0;a<n.length;a++)pn(c,t,n[a]);else pn(c,t,n)}}function pn(c,e,t,n){return h(t)&&(n=t,t=t.handler),"string"===typeof t&&(t=c[t]),c.$watch(e,t,n)}function Mn(c){var e={get:function(){return this._data}},t={get:function(){return this._props}};Object.defineProperty(c.prototype,"$data",e),Object.defineProperty(c.prototype,"$props",t),c.prototype.$set=Ec,c.prototype.$delete=jc,c.prototype.$watch=function(c,e,t){var n=this;if(h(e))return pn(n,c,e,t);t=t||{},t.user=!0;var a=new tn(n,c,e,t);if(t.immediate){var r='callback for immediate watcher "'+a.expression+'"';pc(),ne(e,n,[a.value],n,r),Mc()}return function(){a.teardown()}}}var Cn=0;function gn(c){c.prototype._init=function(c){var e=this;e._uid=Cn++,e._isVue=!0,c&&c._isComponent?Hn(e,c):e.$options=Kc(yn(e.constructor),c||{},e),e._renderProxy=e,e._self=e,Ot(e),_t(e),zt(e),Rt(e,"beforeCreate"),ke(e),rn(e),Se(e),Rt(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Hn(c,e){var t=c.$options=Object.create(c.constructor.options),n=e._parentVnode;t.parent=e.parent,t._parentVnode=n;var a=n.componentOptions;t.propsData=a.propsData,t._parentListeners=a.listeners,t._renderChildren=a.children,t._componentTag=a.tag,e.render&&(t.render=e.render,t.staticRenderFns=e.staticRenderFns)}function yn(c){var e=c.options;if(c.super){var t=yn(c.super),n=c.superOptions;if(t!==n){c.superOptions=t;var a=Vn(c);a&&x(c.extendOptions,a),e=c.options=Kc(t,c.extendOptions),e.name&&(e.components[e.name]=c)}}return e}function Vn(c){var e,t=c.options,n=c.sealedOptions;for(var a in t)t[a]!==n[a]&&(e||(e={}),e[a]=t[a]);return e}function _n(c){this._init(c)}function bn(c){c.use=function(c){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(c)>-1)return this;var t=k(arguments,1);return t.unshift(this),"function"===typeof c.install?c.install.apply(c,t):"function"===typeof c&&c.apply(null,t),e.push(c),this}}function Ln(c){c.mixin=function(c){return this.options=Kc(this.options,c),this}}function wn(c){c.cid=0;var e=1;c.extend=function(c){c=c||{};var t=this,n=t.cid,a=c._Ctor||(c._Ctor={});if(a[n])return a[n];var r=c.name||t.options.name;var i=function(c){this._init(c)};return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.cid=e++,i.options=Kc(t.options,c),i["super"]=t,i.options.props&&An(i),i.options.computed&&Sn(i),i.extend=t.extend,i.mixin=t.mixin,i.use=t.use,D.forEach((function(c){i[c]=t[c]})),r&&(i.options.components[r]=i),i.superOptions=t.options,i.extendOptions=c,i.sealedOptions=x({},i.options),a[n]=i,i}}function An(c){var e=c.options.props;for(var t in e)an(c.prototype,"_props",t)}function Sn(c){var e=c.options.computed;for(var t in e)un(c.prototype,t,e[t])}function kn(c){D.forEach((function(e){c[e]=function(c,t){return t?("component"===e&&h(t)&&(t.name=t.name||c,t=this.options._base.extend(t)),"directive"===e&&"function"===typeof t&&(t={bind:t,update:t}),this.options[e+"s"][c]=t,t):this.options[e+"s"][c]}}))}function xn(c){return c&&(c.Ctor.options.name||c.tag)}function On(c,e){return Array.isArray(c)?c.indexOf(e)>-1:"string"===typeof c?c.split(",").indexOf(e)>-1:!!v(c)&&c.test(e)}function Tn(c,e){var t=c.cache,n=c.keys,a=c._vnode;for(var r in t){var i=t[r];if(i){var s=i.name;s&&!e(s)&&In(t,r,n,a)}}}function In(c,e,t,n){var a=c[e];!a||n&&a.tag===n.tag||a.componentInstance.$destroy(),c[e]=null,M(t,e)}gn(_n),Mn(_n),St(_n),Tt(_n),Ct(_n);var En=[String,RegExp,Array],jn={name:"keep-alive",abstract:!0,props:{include:En,exclude:En,max:[String,Number]},methods:{cacheVNode:function(){var c=this,e=c.cache,t=c.keys,n=c.vnodeToCache,a=c.keyToCache;if(n){var r=n.tag,i=n.componentInstance,s=n.componentOptions;e[a]={name:xn(s),tag:r,componentInstance:i},t.push(a),this.max&&t.length>parseInt(this.max)&&In(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var c in this.cache)In(this.cache,c,this.keys)},mounted:function(){var c=this;this.cacheVNode(),this.$watch("include",(function(e){Tn(c,(function(c){return On(e,c)}))})),this.$watch("exclude",(function(e){Tn(c,(function(c){return!On(e,c)}))}))},updated:function(){this.cacheVNode()},render:function(){var c=this.$slots.default,e=Vt(c),t=e&&e.componentOptions;if(t){var n=xn(t),a=this,r=a.include,i=a.exclude;if(r&&(!n||!On(r,n))||i&&n&&On(i,n))return e;var s=this,o=s.cache,l=s.keys,h=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;o[h]?(e.componentInstance=o[h].componentInstance,M(l,h),l.push(h)):(this.vnodeToCache=e,this.keyToCache=h),e.data.keepAlive=!0}return e||c&&c[0]}},Pn={KeepAlive:jn};function Nn(c){var e={get:function(){return q}};Object.defineProperty(c,"config",e),c.util={warn:fc,extend:x,mergeOptions:Kc,defineReactive:Ic},c.set=Ec,c.delete=jc,c.nextTick=de,c.observable=function(c){return Tc(c),c},c.options=Object.create(null),D.forEach((function(e){c.options[e+"s"]=Object.create(null)})),c.options._base=c,x(c.options.components,Pn),bn(c),Ln(c),wn(c),kn(c)}Nn(_n),Object.defineProperty(_n.prototype,"$isServer",{get:oc}),Object.defineProperty(_n.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(_n,"FunctionalRenderContext",{value:Je}),_n.version="2.6.14";var Rn=z("style,class"),Dn=z("input,textarea,option,select,progress"),Zn=function(c,e,t){return"value"===t&&Dn(c)&&"button"!==e||"selected"===t&&"option"===c||"checked"===t&&"input"===c||"muted"===t&&"video"===c},qn=z("contenteditable,draggable,spellcheck"),Fn=z("events,caret,typing,plaintext-only"),$n=function(c,e){return Yn(e)||"false"===e?"false":"contenteditable"===c&&Fn(e)?e:"true"},Un=z("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wn="http://www.w3.org/1999/xlink",Bn=function(c){return":"===c.charAt(5)&&"xlink"===c.slice(0,5)},Kn=function(c){return Bn(c)?c.slice(6,c.length):""},Yn=function(c){return null==c||!1===c};function Gn(c){var e=c.data,t=c,n=c;while(a(n.componentInstance))n=n.componentInstance._vnode,n&&n.data&&(e=Qn(n.data,e));while(a(t=t.parent))t&&t.data&&(e=Qn(e,t.data));return Xn(e.staticClass,e.class)}function Qn(c,e){return{staticClass:Jn(c.staticClass,e.staticClass),class:a(c.class)?[c.class,e.class]:e.class}}function Xn(c,e){return a(c)||a(e)?Jn(c,ca(e)):""}function Jn(c,e){return c?e?c+" "+e:c:e||""}function ca(c){return Array.isArray(c)?ea(c):o(c)?ta(c):"string"===typeof c?c:""}function ea(c){for(var e,t="",n=0,r=c.length;n<r;n++)a(e=ca(c[n]))&&""!==e&&(t&&(t+=" "),t+=e);return t}function ta(c){var e="";for(var t in c)c[t]&&(e&&(e+=" "),e+=t);return e}var na={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},aa=z("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ra=z("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ia=function(c){return aa(c)||ra(c)};function sa(c){return ra(c)?"svg":"math"===c?"math":void 0}var oa=Object.create(null);function la(c){if(!G)return!0;if(ia(c))return!1;if(c=c.toLowerCase(),null!=oa[c])return oa[c];var e=document.createElement(c);return c.indexOf("-")>-1?oa[c]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:oa[c]=/HTMLUnknownElement/.test(e.toString())}var ha=z("text,number,password,search,email,tel,url");function va(c){if("string"===typeof c){var e=document.querySelector(c);return e||document.createElement("div")}return c}function ua(c,e){var t=document.createElement(c);return"select"!==c||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&t.setAttribute("multiple","multiple"),t}function fa(c,e){return document.createElementNS(na[c],e)}function ma(c){return document.createTextNode(c)}function da(c){return document.createComment(c)}function za(c,e,t){c.insertBefore(e,t)}function pa(c,e){c.removeChild(e)}function Ma(c,e){c.appendChild(e)}function Ca(c){return c.parentNode}function ga(c){return c.nextSibling}function Ha(c){return c.tagName}function ya(c,e){c.textContent=e}function Va(c,e){c.setAttribute(e,"")}var _a=Object.freeze({createElement:ua,createElementNS:fa,createTextNode:ma,createComment:da,insertBefore:za,removeChild:pa,appendChild:Ma,parentNode:Ca,nextSibling:ga,tagName:Ha,setTextContent:ya,setStyleScope:Va}),ba={create:function(c,e){La(e)},update:function(c,e){c.data.ref!==e.data.ref&&(La(c,!0),La(e))},destroy:function(c){La(c,!0)}};function La(c,e){var t=c.data.ref;if(a(t)){var n=c.context,r=c.componentInstance||c.elm,i=n.$refs;e?Array.isArray(i[t])?M(i[t],r):i[t]===r&&(i[t]=void 0):c.data.refInFor?Array.isArray(i[t])?i[t].indexOf(r)<0&&i[t].push(r):i[t]=[r]:i[t]=r}}var wa=new Cc("",{},[]),Aa=["create","activate","update","remove","destroy"];function Sa(c,e){return c.key===e.key&&c.asyncFactory===e.asyncFactory&&(c.tag===e.tag&&c.isComment===e.isComment&&a(c.data)===a(e.data)&&ka(c,e)||r(c.isAsyncPlaceholder)&&n(e.asyncFactory.error))}function ka(c,e){if("input"!==c.tag)return!0;var t,n=a(t=c.data)&&a(t=t.attrs)&&t.type,r=a(t=e.data)&&a(t=t.attrs)&&t.type;return n===r||ha(n)&&ha(r)}function xa(c,e,t){var n,r,i={};for(n=e;n<=t;++n)r=c[n].key,a(r)&&(i[r]=n);return i}function Oa(c){var e,t,i={},o=c.modules,l=c.nodeOps;for(e=0;e<Aa.length;++e)for(i[Aa[e]]=[],t=0;t<o.length;++t)a(o[t][Aa[e]])&&i[Aa[e]].push(o[t][Aa[e]]);function h(c){return new Cc(l.tagName(c).toLowerCase(),{},[],void 0,c)}function v(c,e){function t(){0===--t.listeners&&u(c)}return t.listeners=e,t}function u(c){var e=l.parentNode(c);a(e)&&l.removeChild(e,c)}function f(c,e,t,n,i,s,o){if(a(c.elm)&&a(s)&&(c=s[o]=Vc(c)),c.isRootInsert=!i,!m(c,e,t,n)){var h=c.data,v=c.children,u=c.tag;a(u)?(c.elm=c.ns?l.createElementNS(c.ns,u):l.createElement(u,c),y(c),C(c,v,e),a(h)&&H(c,e),M(t,c.elm,n)):r(c.isComment)?(c.elm=l.createComment(c.text),M(t,c.elm,n)):(c.elm=l.createTextNode(c.text),M(t,c.elm,n))}}function m(c,e,t,n){var i=c.data;if(a(i)){var s=a(c.componentInstance)&&i.keepAlive;if(a(i=i.hook)&&a(i=i.init)&&i(c,!1),a(c.componentInstance))return d(c,e),M(t,c.elm,n),r(s)&&p(c,e,t,n),!0}}function d(c,e){a(c.data.pendingInsert)&&(e.push.apply(e,c.data.pendingInsert),c.data.pendingInsert=null),c.elm=c.componentInstance.$el,g(c)?(H(c,e),y(c)):(La(c),e.push(c))}function p(c,e,t,n){var r,s=c;while(s.componentInstance)if(s=s.componentInstance._vnode,a(r=s.data)&&a(r=r.transition)){for(r=0;r<i.activate.length;++r)i.activate[r](wa,s);e.push(s);break}M(t,c.elm,n)}function M(c,e,t){a(c)&&(a(t)?l.parentNode(t)===c&&l.insertBefore(c,e,t):l.appendChild(c,e))}function C(c,e,t){if(Array.isArray(e)){0;for(var n=0;n<e.length;++n)f(e[n],t,c.elm,null,!0,e,n)}else s(c.text)&&l.appendChild(c.elm,l.createTextNode(String(c.text)))}function g(c){while(c.componentInstance)c=c.componentInstance._vnode;return a(c.tag)}function H(c,t){for(var n=0;n<i.create.length;++n)i.create[n](wa,c);e=c.data.hook,a(e)&&(a(e.create)&&e.create(wa,c),a(e.insert)&&t.push(c))}function y(c){var e;if(a(e=c.fnScopeId))l.setStyleScope(c.elm,e);else{var t=c;while(t)a(e=t.context)&&a(e=e.$options._scopeId)&&l.setStyleScope(c.elm,e),t=t.parent}a(e=kt)&&e!==c.context&&e!==c.fnContext&&a(e=e.$options._scopeId)&&l.setStyleScope(c.elm,e)}function V(c,e,t,n,a,r){for(;n<=a;++n)f(t[n],r,c,e,!1,t,n)}function _(c){var e,t,n=c.data;if(a(n))for(a(e=n.hook)&&a(e=e.destroy)&&e(c),e=0;e<i.destroy.length;++e)i.destroy[e](c);if(a(e=c.children))for(t=0;t<c.children.length;++t)_(c.children[t])}function b(c,e,t){for(;e<=t;++e){var n=c[e];a(n)&&(a(n.tag)?(L(n),_(n)):u(n.elm))}}function L(c,e){if(a(e)||a(c.data)){var t,n=i.remove.length+1;for(a(e)?e.listeners+=n:e=v(c.elm,n),a(t=c.componentInstance)&&a(t=t._vnode)&&a(t.data)&&L(t,e),t=0;t<i.remove.length;++t)i.remove[t](c,e);a(t=c.data.hook)&&a(t=t.remove)?t(c,e):e()}else u(c.elm)}function w(c,e,t,r,i){var s,o,h,v,u=0,m=0,d=e.length-1,z=e[0],p=e[d],M=t.length-1,C=t[0],g=t[M],H=!i;while(u<=d&&m<=M)n(z)?z=e[++u]:n(p)?p=e[--d]:Sa(z,C)?(S(z,C,r,t,m),z=e[++u],C=t[++m]):Sa(p,g)?(S(p,g,r,t,M),p=e[--d],g=t[--M]):Sa(z,g)?(S(z,g,r,t,M),H&&l.insertBefore(c,z.elm,l.nextSibling(p.elm)),z=e[++u],g=t[--M]):Sa(p,C)?(S(p,C,r,t,m),H&&l.insertBefore(c,p.elm,z.elm),p=e[--d],C=t[++m]):(n(s)&&(s=xa(e,u,d)),o=a(C.key)?s[C.key]:A(C,e,u,d),n(o)?f(C,r,c,z.elm,!1,t,m):(h=e[o],Sa(h,C)?(S(h,C,r,t,m),e[o]=void 0,H&&l.insertBefore(c,h.elm,z.elm)):f(C,r,c,z.elm,!1,t,m)),C=t[++m]);u>d?(v=n(t[M+1])?null:t[M+1].elm,V(c,v,t,m,M,r)):m>M&&b(e,u,d)}function A(c,e,t,n){for(var r=t;r<n;r++){var i=e[r];if(a(i)&&Sa(c,i))return r}}function S(c,e,t,s,o,h){if(c!==e){a(e.elm)&&a(s)&&(e=s[o]=Vc(e));var v=e.elm=c.elm;if(r(c.isAsyncPlaceholder))a(e.asyncFactory.resolved)?O(c.elm,e,t):e.isAsyncPlaceholder=!0;else if(r(e.isStatic)&&r(c.isStatic)&&e.key===c.key&&(r(e.isCloned)||r(e.isOnce)))e.componentInstance=c.componentInstance;else{var u,f=e.data;a(f)&&a(u=f.hook)&&a(u=u.prepatch)&&u(c,e);var m=c.children,d=e.children;if(a(f)&&g(e)){for(u=0;u<i.update.length;++u)i.update[u](c,e);a(u=f.hook)&&a(u=u.update)&&u(c,e)}n(e.text)?a(m)&&a(d)?m!==d&&w(v,m,d,t,h):a(d)?(a(c.text)&&l.setTextContent(v,""),V(v,null,d,0,d.length-1,t)):a(m)?b(m,0,m.length-1):a(c.text)&&l.setTextContent(v,""):c.text!==e.text&&l.setTextContent(v,e.text),a(f)&&a(u=f.hook)&&a(u=u.postpatch)&&u(c,e)}}}function k(c,e,t){if(r(t)&&a(c.parent))c.parent.data.pendingInsert=e;else for(var n=0;n<e.length;++n)e[n].data.hook.insert(e[n])}var x=z("attrs,class,staticClass,staticStyle,key");function O(c,e,t,n){var i,s=e.tag,o=e.data,l=e.children;if(n=n||o&&o.pre,e.elm=c,r(e.isComment)&&a(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(a(o)&&(a(i=o.hook)&&a(i=i.init)&&i(e,!0),a(i=e.componentInstance)))return d(e,t),!0;if(a(s)){if(a(l))if(c.hasChildNodes())if(a(i=o)&&a(i=i.domProps)&&a(i=i.innerHTML)){if(i!==c.innerHTML)return!1}else{for(var h=!0,v=c.firstChild,u=0;u<l.length;u++){if(!v||!O(v,l[u],t,n)){h=!1;break}v=v.nextSibling}if(!h||v)return!1}else C(e,l,t);if(a(o)){var f=!1;for(var m in o)if(!x(m)){f=!0,H(e,t);break}!f&&o["class"]&&pe(o["class"])}}else c.data!==e.text&&(c.data=e.text);return!0}return function(c,e,t,s){if(!n(e)){var o=!1,v=[];if(n(c))o=!0,f(e,v);else{var u=a(c.nodeType);if(!u&&Sa(c,e))S(c,e,v,null,null,s);else{if(u){if(1===c.nodeType&&c.hasAttribute(R)&&(c.removeAttribute(R),t=!0),r(t)&&O(c,e,v))return k(e,v,!0),c;c=h(c)}var m=c.elm,d=l.parentNode(m);if(f(e,v,m._leaveCb?null:d,l.nextSibling(m)),a(e.parent)){var z=e.parent,p=g(e);while(z){for(var M=0;M<i.destroy.length;++M)i.destroy[M](z);if(z.elm=e.elm,p){for(var C=0;C<i.create.length;++C)i.create[C](wa,z);var H=z.data.hook.insert;if(H.merged)for(var y=1;y<H.fns.length;y++)H.fns[y]()}else La(z);z=z.parent}}a(d)?b([c],0,0):a(c.tag)&&_(c)}}return k(e,v,o),e.elm}a(c)&&_(c)}}var Ta={create:Ia,update:Ia,destroy:function(c){Ia(c,wa)}};function Ia(c,e){(c.data.directives||e.data.directives)&&Ea(c,e)}function Ea(c,e){var t,n,a,r=c===wa,i=e===wa,s=Pa(c.data.directives,c.context),o=Pa(e.data.directives,e.context),l=[],h=[];for(t in o)n=s[t],a=o[t],n?(a.oldValue=n.value,a.oldArg=n.arg,Ra(a,"update",e,c),a.def&&a.def.componentUpdated&&h.push(a)):(Ra(a,"bind",e,c),a.def&&a.def.inserted&&l.push(a));if(l.length){var v=function(){for(var t=0;t<l.length;t++)Ra(l[t],"inserted",e,c)};r?ye(e,"insert",v):v()}if(h.length&&ye(e,"postpatch",(function(){for(var t=0;t<h.length;t++)Ra(h[t],"componentUpdated",e,c)})),!r)for(t in s)o[t]||Ra(s[t],"unbind",c,c,i)}var ja=Object.create(null);function Pa(c,e){var t,n,a=Object.create(null);if(!c)return a;for(t=0;t<c.length;t++)n=c[t],n.modifiers||(n.modifiers=ja),a[Na(n)]=n,n.def=Yc(e.$options,"directives",n.name,!0);return a}function Na(c){return c.rawName||c.name+"."+Object.keys(c.modifiers||{}).join(".")}function Ra(c,e,t,n,a){var r=c.def&&c.def[e];if(r)try{r(t.elm,c,t,n,a)}catch(Vi){te(Vi,t.context,"directive "+c.name+" "+e+" hook")}}var Da=[ba,Ta];function Za(c,e){var t=e.componentOptions;if((!a(t)||!1!==t.Ctor.options.inheritAttrs)&&(!n(c.data.attrs)||!n(e.data.attrs))){var r,i,s,o=e.elm,l=c.data.attrs||{},h=e.data.attrs||{};for(r in a(h.__ob__)&&(h=e.data.attrs=x({},h)),h)i=h[r],s=l[r],s!==i&&qa(o,r,i,e.data.pre);for(r in(cc||tc)&&h.value!==l.value&&qa(o,"value",h.value),l)n(h[r])&&(Bn(r)?o.removeAttributeNS(Wn,Kn(r)):qn(r)||o.removeAttribute(r))}}function qa(c,e,t,n){n||c.tagName.indexOf("-")>-1?Fa(c,e,t):Un(e)?Yn(t)?c.removeAttribute(e):(t="allowfullscreen"===e&&"EMBED"===c.tagName?"true":e,c.setAttribute(e,t)):qn(e)?c.setAttribute(e,$n(e,t)):Bn(e)?Yn(t)?c.removeAttributeNS(Wn,Kn(e)):c.setAttributeNS(Wn,e,t):Fa(c,e,t)}function Fa(c,e,t){if(Yn(t))c.removeAttribute(e);else{if(cc&&!ec&&"TEXTAREA"===c.tagName&&"placeholder"===e&&""!==t&&!c.__ieph){var n=function(e){e.stopImmediatePropagation(),c.removeEventListener("input",n)};c.addEventListener("input",n),c.__ieph=!0}c.setAttribute(e,t)}}var $a={create:Za,update:Za};function Ua(c,e){var t=e.elm,r=e.data,i=c.data;if(!(n(r.staticClass)&&n(r.class)&&(n(i)||n(i.staticClass)&&n(i.class)))){var s=Gn(e),o=t._transitionClasses;a(o)&&(s=Jn(s,ca(o))),s!==t._prevClass&&(t.setAttribute("class",s),t._prevClass=s)}}var Wa,Ba={create:Ua,update:Ua},Ka="__r",Ya="__c";function Ga(c){if(a(c[Ka])){var e=cc?"change":"input";c[e]=[].concat(c[Ka],c[e]||[]),delete c[Ka]}a(c[Ya])&&(c.change=[].concat(c[Ya],c.change||[]),delete c[Ya])}function Qa(c,e,t){var n=Wa;return function a(){var r=e.apply(null,arguments);null!==r&&cr(c,a,t,n)}}var Xa=se&&!(ac&&Number(ac[1])<=53);function Ja(c,e,t,n){if(Xa){var a=Bt,r=e;e=r._wrapper=function(c){if(c.target===c.currentTarget||c.timeStamp>=a||c.timeStamp<=0||c.target.ownerDocument!==document)return r.apply(this,arguments)}}Wa.addEventListener(c,e,ic?{capture:t,passive:n}:t)}function cr(c,e,t,n){(n||Wa).removeEventListener(c,e._wrapper||e,t)}function er(c,e){if(!n(c.data.on)||!n(e.data.on)){var t=e.data.on||{},a=c.data.on||{};Wa=e.elm,Ga(t),He(t,a,Ja,cr,Qa,e.context),Wa=void 0}}var tr,nr={create:er,update:er};function ar(c,e){if(!n(c.data.domProps)||!n(e.data.domProps)){var t,r,i=e.elm,s=c.data.domProps||{},o=e.data.domProps||{};for(t in a(o.__ob__)&&(o=e.data.domProps=x({},o)),s)t in o||(i[t]="");for(t in o){if(r=o[t],"textContent"===t||"innerHTML"===t){if(e.children&&(e.children.length=0),r===s[t])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===t&&"PROGRESS"!==i.tagName){i._value=r;var l=n(r)?"":String(r);rr(i,l)&&(i.value=l)}else if("innerHTML"===t&&ra(i.tagName)&&n(i.innerHTML)){tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+r+"</svg>";var h=tr.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==s[t])try{i[t]=r}catch(Vi){}}}}function rr(c,e){return!c.composing&&("OPTION"===c.tagName||ir(c,e)||sr(c,e))}function ir(c,e){var t=!0;try{t=document.activeElement!==c}catch(Vi){}return t&&c.value!==e}function sr(c,e){var t=c.value,n=c._vModifiers;if(a(n)){if(n.number)return d(t)!==d(e);if(n.trim)return t.trim()!==e.trim()}return t!==e}var or={create:ar,update:ar},lr=H((function(c){var e={},t=/;(?![^(]*\))/g,n=/:(.+)/;return c.split(t).forEach((function(c){if(c){var t=c.split(n);t.length>1&&(e[t[0].trim()]=t[1].trim())}})),e}));function hr(c){var e=vr(c.style);return c.staticStyle?x(c.staticStyle,e):e}function vr(c){return Array.isArray(c)?O(c):"string"===typeof c?lr(c):c}function ur(c,e){var t,n={};if(e){var a=c;while(a.componentInstance)a=a.componentInstance._vnode,a&&a.data&&(t=hr(a.data))&&x(n,t)}(t=hr(c.data))&&x(n,t);var r=c;while(r=r.parent)r.data&&(t=hr(r.data))&&x(n,t);return n}var fr,mr=/^--/,dr=/\s*!important$/,zr=function(c,e,t){if(mr.test(e))c.style.setProperty(e,t);else if(dr.test(t))c.style.setProperty(L(e),t.replace(dr,""),"important");else{var n=Mr(e);if(Array.isArray(t))for(var a=0,r=t.length;a<r;a++)c.style[n]=t[a];else c.style[n]=t}},pr=["Webkit","Moz","ms"],Mr=H((function(c){if(fr=fr||document.createElement("div").style,c=V(c),"filter"!==c&&c in fr)return c;for(var e=c.charAt(0).toUpperCase()+c.slice(1),t=0;t<pr.length;t++){var n=pr[t]+e;if(n in fr)return n}}));function Cr(c,e){var t=e.data,r=c.data;if(!(n(t.staticStyle)&&n(t.style)&&n(r.staticStyle)&&n(r.style))){var i,s,o=e.elm,l=r.staticStyle,h=r.normalizedStyle||r.style||{},v=l||h,u=vr(e.data.style)||{};e.data.normalizedStyle=a(u.__ob__)?x({},u):u;var f=ur(e,!0);for(s in v)n(f[s])&&zr(o,s,"");for(s in f)i=f[s],i!==v[s]&&zr(o,s,null==i?"":i)}}var gr={create:Cr,update:Cr},Hr=/\s+/;function yr(c,e){if(e&&(e=e.trim()))if(c.classList)e.indexOf(" ")>-1?e.split(Hr).forEach((function(e){return c.classList.add(e)})):c.classList.add(e);else{var t=" "+(c.getAttribute("class")||"")+" ";t.indexOf(" "+e+" ")<0&&c.setAttribute("class",(t+e).trim())}}function Vr(c,e){if(e&&(e=e.trim()))if(c.classList)e.indexOf(" ")>-1?e.split(Hr).forEach((function(e){return c.classList.remove(e)})):c.classList.remove(e),c.classList.length||c.removeAttribute("class");else{var t=" "+(c.getAttribute("class")||"")+" ",n=" "+e+" ";while(t.indexOf(n)>=0)t=t.replace(n," ");t=t.trim(),t?c.setAttribute("class",t):c.removeAttribute("class")}}function _r(c){if(c){if("object"===typeof c){var e={};return!1!==c.css&&x(e,br(c.name||"v")),x(e,c),e}return"string"===typeof c?br(c):void 0}}var br=H((function(c){return{enterClass:c+"-enter",enterToClass:c+"-enter-to",enterActiveClass:c+"-enter-active",leaveClass:c+"-leave",leaveToClass:c+"-leave-to",leaveActiveClass:c+"-leave-active"}})),Lr=G&&!ec,wr="transition",Ar="animation",Sr="transition",kr="transitionend",xr="animation",Or="animationend";Lr&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Sr="WebkitTransition",kr="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(xr="WebkitAnimation",Or="webkitAnimationEnd"));var Tr=G?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(c){return c()};function Ir(c){Tr((function(){Tr(c)}))}function Er(c,e){var t=c._transitionClasses||(c._transitionClasses=[]);t.indexOf(e)<0&&(t.push(e),yr(c,e))}function jr(c,e){c._transitionClasses&&M(c._transitionClasses,e),Vr(c,e)}function Pr(c,e,t){var n=Rr(c,e),a=n.type,r=n.timeout,i=n.propCount;if(!a)return t();var s=a===wr?kr:Or,o=0,l=function(){c.removeEventListener(s,h),t()},h=function(e){e.target===c&&++o>=i&&l()};setTimeout((function(){o<i&&l()}),r+1),c.addEventListener(s,h)}var Nr=/\b(transform|all)(,|$)/;function Rr(c,e){var t,n=window.getComputedStyle(c),a=(n[Sr+"Delay"]||"").split(", "),r=(n[Sr+"Duration"]||"").split(", "),i=Dr(a,r),s=(n[xr+"Delay"]||"").split(", "),o=(n[xr+"Duration"]||"").split(", "),l=Dr(s,o),h=0,v=0;e===wr?i>0&&(t=wr,h=i,v=r.length):e===Ar?l>0&&(t=Ar,h=l,v=o.length):(h=Math.max(i,l),t=h>0?i>l?wr:Ar:null,v=t?t===wr?r.length:o.length:0);var u=t===wr&&Nr.test(n[Sr+"Property"]);return{type:t,timeout:h,propCount:v,hasTransform:u}}function Dr(c,e){while(c.length<e.length)c=c.concat(c);return Math.max.apply(null,e.map((function(e,t){return Zr(e)+Zr(c[t])})))}function Zr(c){return 1e3*Number(c.slice(0,-1).replace(",","."))}function qr(c,e){var t=c.elm;a(t._leaveCb)&&(t._leaveCb.cancelled=!0,t._leaveCb());var r=_r(c.data.transition);if(!n(r)&&!a(t._enterCb)&&1===t.nodeType){var i=r.css,s=r.type,l=r.enterClass,h=r.enterToClass,v=r.enterActiveClass,u=r.appearClass,f=r.appearToClass,m=r.appearActiveClass,z=r.beforeEnter,p=r.enter,M=r.afterEnter,C=r.enterCancelled,g=r.beforeAppear,H=r.appear,y=r.afterAppear,V=r.appearCancelled,_=r.duration,b=kt,L=kt.$vnode;while(L&&L.parent)b=L.context,L=L.parent;var w=!b._isMounted||!c.isRootInsert;if(!w||H||""===H){var A=w&&u?u:l,S=w&&m?m:v,k=w&&f?f:h,x=w&&g||z,O=w&&"function"===typeof H?H:p,T=w&&y||M,I=w&&V||C,E=d(o(_)?_.enter:_);0;var j=!1!==i&&!ec,P=Ur(O),R=t._enterCb=N((function(){j&&(jr(t,k),jr(t,S)),R.cancelled?(j&&jr(t,A),I&&I(t)):T&&T(t),t._enterCb=null}));c.data.show||ye(c,"insert",(function(){var e=t.parentNode,n=e&&e._pending&&e._pending[c.key];n&&n.tag===c.tag&&n.elm._leaveCb&&n.elm._leaveCb(),O&&O(t,R)})),x&&x(t),j&&(Er(t,A),Er(t,S),Ir((function(){jr(t,A),R.cancelled||(Er(t,k),P||($r(E)?setTimeout(R,E):Pr(t,s,R)))}))),c.data.show&&(e&&e(),O&&O(t,R)),j||P||R()}}}function Fr(c,e){var t=c.elm;a(t._enterCb)&&(t._enterCb.cancelled=!0,t._enterCb());var r=_r(c.data.transition);if(n(r)||1!==t.nodeType)return e();if(!a(t._leaveCb)){var i=r.css,s=r.type,l=r.leaveClass,h=r.leaveToClass,v=r.leaveActiveClass,u=r.beforeLeave,f=r.leave,m=r.afterLeave,z=r.leaveCancelled,p=r.delayLeave,M=r.duration,C=!1!==i&&!ec,g=Ur(f),H=d(o(M)?M.leave:M);0;var y=t._leaveCb=N((function(){t.parentNode&&t.parentNode._pending&&(t.parentNode._pending[c.key]=null),C&&(jr(t,h),jr(t,v)),y.cancelled?(C&&jr(t,l),z&&z(t)):(e(),m&&m(t)),t._leaveCb=null}));p?p(V):V()}function V(){y.cancelled||(!c.data.show&&t.parentNode&&((t.parentNode._pending||(t.parentNode._pending={}))[c.key]=c),u&&u(t),C&&(Er(t,l),Er(t,v),Ir((function(){jr(t,l),y.cancelled||(Er(t,h),g||($r(H)?setTimeout(y,H):Pr(t,s,y)))}))),f&&f(t,y),C||g||y())}}function $r(c){return"number"===typeof c&&!isNaN(c)}function Ur(c){if(n(c))return!1;var e=c.fns;return a(e)?Ur(Array.isArray(e)?e[0]:e):(c._length||c.length)>1}function Wr(c,e){!0!==e.data.show&&qr(e)}var Br=G?{create:Wr,activate:Wr,remove:function(c,e){!0!==c.data.show?Fr(c,e):e()}}:{},Kr=[$a,Ba,nr,or,gr,Br],Yr=Kr.concat(Da),Gr=Oa({nodeOps:_a,modules:Yr});ec&&document.addEventListener("selectionchange",(function(){var c=document.activeElement;c&&c.vmodel&&ai(c,"input")}));var Qr={inserted:function(c,e,t,n){"select"===t.tag?(n.elm&&!n.elm._vOptions?ye(t,"postpatch",(function(){Qr.componentUpdated(c,e,t)})):Xr(c,e,t.context),c._vOptions=[].map.call(c.options,ei)):("textarea"===t.tag||ha(c.type))&&(c._vModifiers=e.modifiers,e.modifiers.lazy||(c.addEventListener("compositionstart",ti),c.addEventListener("compositionend",ni),c.addEventListener("change",ni),ec&&(c.vmodel=!0)))},componentUpdated:function(c,e,t){if("select"===t.tag){Xr(c,e,t.context);var n=c._vOptions,a=c._vOptions=[].map.call(c.options,ei);if(a.some((function(c,e){return!j(c,n[e])}))){var r=c.multiple?e.value.some((function(c){return ci(c,a)})):e.value!==e.oldValue&&ci(e.value,a);r&&ai(c,"change")}}}};function Xr(c,e,t){Jr(c,e,t),(cc||tc)&&setTimeout((function(){Jr(c,e,t)}),0)}function Jr(c,e,t){var n=e.value,a=c.multiple;if(!a||Array.isArray(n)){for(var r,i,s=0,o=c.options.length;s<o;s++)if(i=c.options[s],a)r=P(n,ei(i))>-1,i.selected!==r&&(i.selected=r);else if(j(ei(i),n))return void(c.selectedIndex!==s&&(c.selectedIndex=s));a||(c.selectedIndex=-1)}}function ci(c,e){return e.every((function(e){return!j(e,c)}))}function ei(c){return"_value"in c?c._value:c.value}function ti(c){c.target.composing=!0}function ni(c){c.target.composing&&(c.target.composing=!1,ai(c.target,"input"))}function ai(c,e){var t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),c.dispatchEvent(t)}function ri(c){return!c.componentInstance||c.data&&c.data.transition?c:ri(c.componentInstance._vnode)}var ii={bind:function(c,e,t){var n=e.value;t=ri(t);var a=t.data&&t.data.transition,r=c.__vOriginalDisplay="none"===c.style.display?"":c.style.display;n&&a?(t.data.show=!0,qr(t,(function(){c.style.display=r}))):c.style.display=n?r:"none"},update:function(c,e,t){var n=e.value,a=e.oldValue;if(!n!==!a){t=ri(t);var r=t.data&&t.data.transition;r?(t.data.show=!0,n?qr(t,(function(){c.style.display=c.__vOriginalDisplay})):Fr(t,(function(){c.style.display="none"}))):c.style.display=n?c.__vOriginalDisplay:"none"}},unbind:function(c,e,t,n,a){a||(c.style.display=c.__vOriginalDisplay)}},si={model:Qr,show:ii},oi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function li(c){var e=c&&c.componentOptions;return e&&e.Ctor.options.abstract?li(Vt(e.children)):c}function hi(c){var e={},t=c.$options;for(var n in t.propsData)e[n]=c[n];var a=t._parentListeners;for(var r in a)e[V(r)]=a[r];return e}function vi(c,e){if(/\d-keep-alive$/.test(e.tag))return c("keep-alive",{props:e.componentOptions.propsData})}function ui(c){while(c=c.parent)if(c.data.transition)return!0}function fi(c,e){return e.key===c.key&&e.tag===c.tag}var mi=function(c){return c.tag||Ie(c)},di=function(c){return"show"===c.name},zi={name:"transition",props:oi,abstract:!0,render:function(c){var e=this,t=this.$slots.default;if(t&&(t=t.filter(mi),t.length)){0;var n=this.mode;0;var a=t[0];if(ui(this.$vnode))return a;var r=li(a);if(!r)return a;if(this._leaving)return vi(c,a);var i="__transition-"+this._uid+"-";r.key=null==r.key?r.isComment?i+"comment":i+r.tag:s(r.key)?0===String(r.key).indexOf(i)?r.key:i+r.key:r.key;var o=(r.data||(r.data={})).transition=hi(this),l=this._vnode,h=li(l);if(r.data.directives&&r.data.directives.some(di)&&(r.data.show=!0),h&&h.data&&!fi(r,h)&&!Ie(h)&&(!h.componentInstance||!h.componentInstance._vnode.isComment)){var v=h.data.transition=x({},o);if("out-in"===n)return this._leaving=!0,ye(v,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),vi(c,a);if("in-out"===n){if(Ie(r))return l;var u,f=function(){u()};ye(o,"afterEnter",f),ye(o,"enterCancelled",f),ye(v,"delayLeave",(function(c){u=c}))}}return a}}},pi=x({tag:String,moveClass:String},oi);delete pi.mode;var Mi={props:pi,beforeMount:function(){var c=this,e=this._update;this._update=function(t,n){var a=xt(c);c.__patch__(c._vnode,c.kept,!1,!0),c._vnode=c.kept,a(),e.call(c,t,n)}},render:function(c){for(var e=this.tag||this.$vnode.data.tag||"span",t=Object.create(null),n=this.prevChildren=this.children,a=this.$slots.default||[],r=this.children=[],i=hi(this),s=0;s<a.length;s++){var o=a[s];if(o.tag)if(null!=o.key&&0!==String(o.key).indexOf("__vlist"))r.push(o),t[o.key]=o,(o.data||(o.data={})).transition=i;else;}if(n){for(var l=[],h=[],v=0;v<n.length;v++){var u=n[v];u.data.transition=i,u.data.pos=u.elm.getBoundingClientRect(),t[u.key]?l.push(u):h.push(u)}this.kept=c(e,null,l),this.removed=h}return c(e,null,r)},updated:function(){var c=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";c.length&&this.hasMove(c[0].elm,e)&&(c.forEach(Ci),c.forEach(gi),c.forEach(Hi),this._reflow=document.body.offsetHeight,c.forEach((function(c){if(c.data.moved){var t=c.elm,n=t.style;Er(t,e),n.transform=n.WebkitTransform=n.transitionDuration="",t.addEventListener(kr,t._moveCb=function c(n){n&&n.target!==t||n&&!/transform$/.test(n.propertyName)||(t.removeEventListener(kr,c),t._moveCb=null,jr(t,e))})}})))},methods:{hasMove:function(c,e){if(!Lr)return!1;if(this._hasMove)return this._hasMove;var t=c.cloneNode();c._transitionClasses&&c._transitionClasses.forEach((function(c){Vr(t,c)})),yr(t,e),t.style.display="none",this.$el.appendChild(t);var n=Rr(t);return this.$el.removeChild(t),this._hasMove=n.hasTransform}}};function Ci(c){c.elm._moveCb&&c.elm._moveCb(),c.elm._enterCb&&c.elm._enterCb()}function gi(c){c.data.newPos=c.elm.getBoundingClientRect()}function Hi(c){var e=c.data.pos,t=c.data.newPos,n=e.left-t.left,a=e.top-t.top;if(n||a){c.data.moved=!0;var r=c.elm.style;r.transform=r.WebkitTransform="translate("+n+"px,"+a+"px)",r.transitionDuration="0s"}}var yi={Transition:zi,TransitionGroup:Mi};_n.config.mustUseProp=Zn,_n.config.isReservedTag=ia,_n.config.isReservedAttr=Rn,_n.config.getTagNamespace=sa,_n.config.isUnknownElement=la,x(_n.options.directives,si),x(_n.options.components,yi),_n.prototype.__patch__=G?Gr:T,_n.prototype.$mount=function(c,e){return c=c&&G?va(c):void 0,It(this,c,e)},G&&setTimeout((function(){q.devtools&&lc&&lc.emit("init",_n)}),0),e["a"]=_n}).call(this,t("c8ba"))},"2cf4":function(c,e,t){var n,a,r,i,s=t("da84"),o=t("1626"),l=t("d039"),h=t("0366"),v=t("1be4"),u=t("cc12"),f=t("1cdc"),m=t("605d"),d=s.setImmediate,z=s.clearImmediate,p=s.process,M=s.MessageChannel,C=s.Dispatch,g=0,H={},y="onreadystatechange";try{n=s.location}catch(w){}var V=function(c){if(H.hasOwnProperty(c)){var e=H[c];delete H[c],e()}},_=function(c){return function(){V(c)}},b=function(c){V(c.data)},L=function(c){s.postMessage(String(c),n.protocol+"//"+n.host)};d&&z||(d=function(c){var e=[],t=arguments.length,n=1;while(t>n)e.push(arguments[n++]);return H[++g]=function(){(o(c)?c:Function(c)).apply(void 0,e)},a(g),g},z=function(c){delete H[c]},m?a=function(c){p.nextTick(_(c))}:C&&C.now?a=function(c){C.now(_(c))}:M&&!f?(r=new M,i=r.port2,r.port1.onmessage=b,a=h(i.postMessage,i,1)):s.addEventListener&&o(s.postMessage)&&!s.importScripts&&n&&"file:"!==n.protocol&&!l(L)?(a=L,s.addEventListener("message",b,!1)):a=y in u("script")?function(c){v.appendChild(u("script"))[y]=function(){v.removeChild(this),V(c)}}:function(c){setTimeout(_(c),0)}),c.exports={set:d,clear:z}},"2d00":function(c,e,t){var n,a,r=t("da84"),i=t("342f"),s=r.process,o=r.Deno,l=s&&s.versions||o&&o.version,h=l&&l.v8;h?(n=h.split("."),a=n[0]<4?1:n[0]+n[1]):i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(a=n[1]))),c.exports=a&&+a},"342f":function(c,e,t){var n=t("d066");c.exports=n("navigator","userAgent")||""},"35a1":function(c,e,t){var n=t("f5df"),a=t("dc4a"),r=t("3f8c"),i=t("b622"),s=i("iterator");c.exports=function(c){if(void 0!=c)return a(c,s)||a(c,"@@iterator")||r[n(c)]}},"37e8":function(c,e,t){var n=t("83ab"),a=t("9bf2"),r=t("825a"),i=t("df75");c.exports=n?Object.defineProperties:function(c,e){r(c);var t,n=i(e),s=n.length,o=0;while(s>o)a.f(c,t=n[o++],e[t]);return c}},"3bbe":function(c,e,t){var n=t("1626");c.exports=function(c){if("object"===typeof c||n(c))return c;throw TypeError("Can't set "+String(c)+" as a prototype")}},"3f8c":function(c,e){c.exports={}},4362:function(c,e,t){e.nextTick=function(c){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){c.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(c){throw new Error("No such module. (Possibly not yet loaded)")},function(){var c,n="/";e.cwd=function(){return n},e.chdir=function(e){c||(c=t("df7c")),n=c.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(c,e,t){var n=t("d039"),a=t("c6b6"),r="".split;c.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(c){return"String"==a(c)?r.call(c,""):Object(c)}:Object},"44d2":function(c,e,t){var n=t("b622"),a=t("7c73"),r=t("9bf2"),i=n("unscopables"),s=Array.prototype;void 0==s[i]&&r.f(s,i,{configurable:!0,value:a(null)}),c.exports=function(c){s[i][c]=!0}},"44de":function(c,e,t){var n=t("da84");c.exports=function(c,e){var t=n.console;t&&t.error&&(1===arguments.length?t.error(c):t.error(c,e))}},4840:function(c,e,t){var n=t("825a"),a=t("5087"),r=t("b622"),i=r("species");c.exports=function(c,e){var t,r=n(c).constructor;return void 0===r||void 0==(t=n(r)[i])?e:a(t)}},"485a":function(c,e,t){var n=t("1626"),a=t("861d");c.exports=function(c,e){var t,r;if("string"===e&&n(t=c.toString)&&!a(r=t.call(c)))return r;if(n(t=c.valueOf)&&!a(r=t.call(c)))return r;if("string"!==e&&n(t=c.toString)&&!a(r=t.call(c)))return r;throw TypeError("Can't convert object to primitive value")}},4930:function(c,e,t){var n=t("2d00"),a=t("d039");c.exports=!!Object.getOwnPropertySymbols&&!a((function(){var c=Symbol();return!String(c)||!(Object(c)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"4d64":function(c,e,t){var n=t("fc6a"),a=t("23cb"),r=t("07fa"),i=function(c){return function(e,t,i){var s,o=n(e),l=r(o),h=a(i,l);if(c&&t!=t){while(l>h)if(s=o[h++],s!=s)return!0}else for(;l>h;h++)if((c||h in o)&&o[h]===t)return c||h||0;return!c&&-1}};c.exports={includes:i(!0),indexOf:i(!1)}},"4fc1":function(c,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return h})),t.d(e,"d",(function(){return v}));
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
const n=[];var a;(function(c){c[c["DEBUG"]=0]="DEBUG",c[c["VERBOSE"]=1]="VERBOSE",c[c["INFO"]=2]="INFO",c[c["WARN"]=3]="WARN",c[c["ERROR"]=4]="ERROR",c[c["SILENT"]=5]="SILENT"})(a||(a={}));const r={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},i=a.INFO,s={[a.DEBUG]:"log",[a.VERBOSE]:"log",[a.INFO]:"info",[a.WARN]:"warn",[a.ERROR]:"error"},o=(c,e,...t)=>{if(e<c.logLevel)return;const n=(new Date).toISOString(),a=s[e];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[a](`[${n}]  ${c.name}:`,...t)};class l{constructor(c){this.name=c,this._logLevel=i,this._logHandler=o,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in a))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel="string"===typeof c?r[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if("function"!==typeof c)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,a.DEBUG,...c),this._logHandler(this,a.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,a.VERBOSE,...c),this._logHandler(this,a.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,a.INFO,...c),this._logHandler(this,a.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,a.WARN,...c),this._logHandler(this,a.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,a.ERROR,...c),this._logHandler(this,a.ERROR,...c)}}function h(c){n.forEach(e=>{e.setLogLevel(c)})}function v(c,e){for(const t of n){let n=null;e&&e.level&&(n=r[e.level]),t.userLogHandler=null===c?null:(e,t,...r)=>{const i=r.map(c=>{if(null==c)return null;if("string"===typeof c)return c;if("number"===typeof c||"boolean"===typeof c)return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch(e){return null}}).filter(c=>c).join(" ");t>=(null!==n&&void 0!==n?n:e.logLevel)&&c({level:a[t].toLowerCase(),message:i,args:r,type:e.name})}}}},5087:function(c,e,t){var n=t("68ee"),a=t("0d51");c.exports=function(c){if(n(c))return c;throw TypeError(a(c)+" is not a constructor")}},"50c4":function(c,e,t){var n=t("5926"),a=Math.min;c.exports=function(c){return c>0?a(n(c),9007199254740991):0}},"51b0":function(c,e,t){"use strict";(function(c){t.d(e,"a",(function(){return Qi})),t.d(e,"b",(function(){return Fi})),t.d(e,"c",(function(){return Pi})),t.d(e,"d",(function(){return Ri}));var n=t("5606"),a=t("ffa6"),r=t("1fd5"),i=t("4fc1");const s="@firebase/database",o="0.12.2";
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
 */class v{constructor(c){this.domStorage_=c,this.prefix_="firebase:"}set(c,e){null==e?this.domStorage_.removeItem(this.prefixedName_(c)):this.domStorage_.setItem(this.prefixedName_(c),Object(r["C"])(e))}get(c){const e=this.domStorage_.getItem(this.prefixedName_(c));return null==e?null:Object(r["w"])(e)}remove(c){this.domStorage_.removeItem(this.prefixedName_(c))}prefixedName_(c){return this.prefix_+c}toString(){return this.domStorage_.toString()}}
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
 */class u{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(c,e){null==e?delete this.cache_[c]:this.cache_[c]=e}get(c){return Object(r["j"])(this.cache_,c)?this.cache_[c]:null}remove(c){delete this.cache_[c]}}
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
 */const f=function(c){try{if("undefined"!==typeof window&&"undefined"!==typeof window[c]){const e=window[c];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new v(e)}}catch(e){}return new u},m=f("localStorage"),d=f("sessionStorage"),z=new i["b"]("@firebase/database"),p=function(){let c=1;return function(){return c++}}(),M=function(c){const e=Object(r["B"])(c),t=new r["d"];t.update(e);const n=t.digest();return r["h"].encodeByteArray(n)},C=function(...c){let e="";for(let t=0;t<c.length;t++){const n=c[t];Array.isArray(n)||n&&"object"===typeof n&&"number"===typeof n.length?e+=C.apply(null,n):e+="object"===typeof n?Object(r["C"])(n):n,e+=" "}return e};let g=null,H=!0;const y=function(c,e){Object(r["f"])(!e||!0===c||!1===c,"Can't turn on custom loggers persistently."),!0===c?(z.logLevel=i["a"].VERBOSE,g=z.log.bind(z),e&&d.set("logging_enabled",!0)):"function"===typeof c?g=c:(g=null,d.remove("logging_enabled"))},V=function(...c){if(!0===H&&(H=!1,null===g&&!0===d.get("logging_enabled")&&y(!0)),g){const e=C.apply(null,c);g(e)}},_=function(c){return function(...e){V(c,...e)}},b=function(...c){const e="FIREBASE INTERNAL ERROR: "+C(...c);z.error(e)},L=function(...c){const e="FIREBASE FATAL ERROR: "+C(...c);throw z.error(e),new Error(e)},w=function(...c){const e="FIREBASE WARNING: "+C(...c);z.warn(e)},A=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&w("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},S=function(c){return"number"===typeof c&&(c!==c||c===Number.POSITIVE_INFINITY||c===Number.NEGATIVE_INFINITY)},k=function(c){if(Object(r["t"])()||"complete"===document.readyState)c();else{let e=!1;const t=function(){document.body?e||(e=!0,c()):setTimeout(t,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&t()}),window.attachEvent("onload",t))}},x="[MIN_NAME]",O="[MAX_NAME]",T=function(c,e){if(c===e)return 0;if(c===x||e===O)return-1;if(e===x||c===O)return 1;{const t=W(c),n=W(e);return null!==t?null!==n?t-n===0?c.length-e.length:t-n:-1:null!==n?1:c<e?-1:1}},I=function(c,e){return c===e?0:c<e?-1:1},E=function(c,e){if(e&&c in e)return e[c];throw new Error("Missing required key ("+c+") in object: "+Object(r["C"])(e))},j=function(c){if("object"!==typeof c||null===c)return Object(r["C"])(c);const e=[];for(const n in c)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)0!==n&&(t+=","),t+=Object(r["C"])(e[n]),t+=":",t+=j(c[e[n]]);return t+="}",t},P=function(c,e){const t=c.length;if(t<=e)return[c];const n=[];for(let a=0;a<t;a+=e)a+e>t?n.push(c.substring(a,t)):n.push(c.substring(a,a+e));return n};function N(c,e){for(const t in c)c.hasOwnProperty(t)&&e(t,c[t])}const R=function(c){Object(r["f"])(!S(c),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let a,i,s,o,l;0===c?(i=0,s=0,a=1/c===-1/0?1:0):(a=c<0,c=Math.abs(c),c>=Math.pow(2,1-n)?(o=Math.min(Math.floor(Math.log(c)/Math.LN2),n),i=o+n,s=Math.round(c*Math.pow(2,t-o)-Math.pow(2,t))):(i=0,s=Math.round(c/Math.pow(2,1-n-t))));const h=[];for(l=t;l;l-=1)h.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(a?1:0),h.reverse();const v=h.join("");let u="";for(l=0;l<64;l+=8){let c=parseInt(v.substr(l,8),2).toString(16);1===c.length&&(c="0"+c),u+=c}return u.toLowerCase()},D=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},Z=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function q(c,e){let t="Unknown Error";"too_big"===c?t="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===c?t="Client doesn't have permission to access the desired data.":"unavailable"===c&&(t="The service is unavailable");const n=new Error(c+" at "+e._path.toString()+": "+t);return n.code=c.toUpperCase(),n}const F=new RegExp("^-?(0*)\\d{1,10}$"),$=-2147483648,U=2147483647,W=function(c){if(F.test(c)){const e=Number(c);if(e>=$&&e<=U)return e}return null},B=function(c){try{c()}catch(e){setTimeout(()=>{const c=e.stack||"";throw w("Exception was thrown by user callback.",c),e},Math.floor(0))}},K=function(){const c="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return c.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(c,e){const t=setTimeout(c,e);return"object"===typeof t&&t["unref"]&&t["unref"](),t};
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
const J="5",cc="v",ec="s",tc="r",nc="f",ac=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rc="ls",ic="p",sc="ac",oc="websocket",lc="long_polling";
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
class hc{constructor(c,e,t,n,a=!1,r="",i=!1){this.secure=e,this.namespace=t,this.webSocketOnly=n,this.nodeAdmin=a,this.persistenceKey=r,this.includeNamespaceInQueryParams=i,this._host=c.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=m.get("host:"+c)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(c){c!==this.internalHost&&(this.internalHost=c,this.isCacheableHost()&&m.set("host:"+this._host,this.internalHost))}toString(){let c=this.toURLString();return this.persistenceKey&&(c+="<"+this.persistenceKey+">"),c}toURLString(){const c=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${c}${this.host}/${e}`}}function vc(c){return c.host!==c.internalHost||c.isCustomHost()||c.includeNamespaceInQueryParams}function uc(c,e,t){let n;if(Object(r["f"])("string"===typeof e,"typeof type must == string"),Object(r["f"])("object"===typeof t,"typeof params must == object"),e===oc)n=(c.secure?"wss://":"ws://")+c.internalHost+"/.ws?";else{if(e!==lc)throw new Error("Unknown connection type: "+e);n=(c.secure?"https://":"http://")+c.internalHost+"/.lp?"}vc(c)&&(t["ns"]=c.namespace);const a=[];return N(t,(c,e)=>{a.push(c+"="+e)}),n+a.join("&")}
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
 */class fc{constructor(){this.counters_={}}incrementCounter(c,e=1){Object(r["j"])(this.counters_,c)||(this.counters_[c]=0),this.counters_[c]+=e}get(){return Object(r["l"])(this.counters_)}}
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
 */const Cc="start",gc="close",Hc="pLPCommand",yc="pRTLPCB",Vc="id",_c="pw",bc="ser",Lc="cb",wc="seg",Ac="ts",Sc="d",kc="dframe",xc=1870,Oc=30,Tc=xc-Oc,Ic=25e3,Ec=3e4;class jc{constructor(c,e,t,n,a,r,i){this.connId=c,this.repoInfo=e,this.applicationId=t,this.appCheckToken=n,this.authToken=a,this.transportSessionId=r,this.lastSessionId=i,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_(c),this.stats_=zc(e),this.urlFn=c=>(this.appCheckToken&&(c[sc]=this.appCheckToken),uc(e,lc,c))}open(c,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new Mc(c),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ec)),k(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pc((...c)=>{const[e,t,n,a,r]=c;if(this.incrementIncomingBytes_(c),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===Cc)this.id=t,this.password=n;else{if(e!==gc)throw new Error("Unrecognized command received: "+e);t?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(t,()=>{this.onClosed_()})):this.onClosed_()}},(...c)=>{const[e,t]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(e,t)},()=>{this.onClosed_()},this.urlFn);const c={};c[Cc]="t",c[bc]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(c[Lc]=this.scriptTagHolder.uniqueCallbackIdentifier),c[cc]=J,this.transportSessionId&&(c[ec]=this.transportSessionId),this.lastSessionId&&(c[rc]=this.lastSessionId),this.applicationId&&(c[ic]=this.applicationId),this.appCheckToken&&(c[sc]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ac.test(location.hostname)&&(c[tc]=nc);const e=this.urlFn(c);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jc.forceAllow_=!0}static forceDisallow(){jc.forceDisallow_=!0}static isAvailable(){return!Object(r["t"])()&&(!!jc.forceAllow_||!jc.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!D()&&!Z())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(c){const e=Object(r["C"])(c);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const t=Object(r["i"])(e),n=P(t,Tc);for(let a=0;a<n.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[a]),this.curSegmentNum++}addDisconnectPingFrame(c,e){if(Object(r["t"])())return;this.myDisconnFrame=document.createElement("iframe");const t={};t[kc]="t",t[Vc]=c,t[_c]=e,this.myDisconnFrame.src=this.urlFn(t),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(c){const e=Object(r["C"])(c).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Pc{constructor(c,e,t,n){if(this.onDisconnect=t,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(r["t"])())this.commandCB=c,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=p(),window[Hc+this.uniqueCallbackIdentifier]=c,window[yc+this.uniqueCallbackIdentifier]=e,this.myIFrame=Pc.createIFrame_();let t="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const c=document.domain;t='<script>document.domain="'+c+'";<\/script>'}const n="<html><body>"+t+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(a){V("frame writing exception"),a.stack&&V(a.stack),V(a)}}}static createIFrame_(){const c=document.createElement("iframe");if(c.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(c);try{const e=c.contentWindow.document;e||V("No IE domain setting required")}catch(e){const t=document.domain;c.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return c.contentDocument?c.doc=c.contentDocument:c.contentWindow?c.doc=c.contentWindow.document:c.document&&(c.doc=c.document),c}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const c=this.onDisconnect;c&&(this.onDisconnect=null,c())}startLongPoll(c,e){this.myID=c,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const c={};c[Vc]=this.myID,c[_c]=this.myPW,c[bc]=this.currentSerial;let e=this.urlFn(c),t="",n=0;while(this.pendingSegs.length>0){const c=this.pendingSegs[0];if(!(c.d.length+Oc+t.length<=xc))break;{const c=this.pendingSegs.shift();t=t+"&"+wc+n+"="+c.seg+"&"+Ac+n+"="+c.ts+"&"+Sc+n+"="+c.d,n++}}return e+=t,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(c,e,t){this.pendingSegs.push({seg:c,ts:e,d:t}),this.alive&&this.newRequest_()}addLongPollTag_(c,e){this.outstandingRequests.add(e);const t=()=>{this.outstandingRequests.delete(e),this.newRequest_()},n=setTimeout(t,Math.floor(Ic)),a=()=>{clearTimeout(n),t()};this.addTag(c,a)}addTag(c,e){Object(r["t"])()?this.doNodeLongPoll(c,e):setTimeout(()=>{try{if(!this.sendNewPolls)return;const t=this.myIFrame.doc.createElement("script");t.type="text/javascript",t.async=!0,t.src=c,t.onload=t.onreadystatechange=function(){const c=t.readyState;c&&"loaded"!==c&&"complete"!==c||(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),e())},t.onerror=()=>{V("Long-poll script failed to load: "+c),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(t)}catch(t){}},Math.floor(1))}}
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
 */const Nc=16384,Rc=45e3;let Dc=null;"undefined"!==typeof MozWebSocket?Dc=MozWebSocket:"undefined"!==typeof WebSocket&&(Dc=WebSocket);class Zc{constructor(c,e,t,n,a,r,i){this.connId=c,this.applicationId=t,this.appCheckToken=n,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_(this.connId),this.stats_=zc(e),this.connURL=Zc.connectionURL_(e,r,i,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(c,e,t,n){const a={};return a[cc]=J,!Object(r["t"])()&&"undefined"!==typeof location&&location.hostname&&ac.test(location.hostname)&&(a[tc]=nc),e&&(a[ec]=e),t&&(a[rc]=t),n&&(a[sc]=n),uc(c,oc,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,m.set("previous_websocket_failure",!0);try{if(Object(r["t"])()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${J}/${l}/${c.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n=Object({NODE_ENV:"production",BASE_URL:""}),a=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];a&&(t["proxy"]={origin:a}),this.mySock=new Dc(this.connURL,[],t)}else{const c={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Dc(this.connURL,[],c)}}catch(n){this.log_("Error instantiating WebSocket.");const c=n.message||n.data;return c&&this.log_(c),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=c=>{this.handleIncomingFrame(c)},this.mySock.onerror=c=>{this.log_("WebSocket error.  Closing connection.");const e=c.message||c.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Zc.forceDisallow_=!0}static isAvailable(){let c=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,t=navigator.userAgent.match(e);t&&t.length>1&&parseFloat(t[1])<4.4&&(c=!0)}return!c&&null!==Dc&&!Zc.forceDisallow_}static previouslyFailed(){return m.isInMemoryStorage||!0===m.get("previous_websocket_failure")}markConnectionHealthy(){m.remove("previous_websocket_failure")}appendFrame_(c){if(this.frames.push(c),this.frames.length===this.totalFrames){const c=this.frames.join("");this.frames=null;const e=Object(r["w"])(c);this.onMessage(e)}}handleNewFrameCount_(c){this.totalFrames=c,this.frames=[]}extractFrameCount_(c){if(Object(r["f"])(null===this.frames,"We already have a frame buffer"),c.length<=6){const e=Number(c);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),c}handleIncomingFrame(c){if(null===this.mySock)return;const e=c["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const c=this.extractFrameCount_(e);null!==c&&this.appendFrame_(c)}}send(c){this.resetKeepAlive();const e=Object(r["C"])(c);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const t=P(e,Nc);t.length>1&&this.sendString_(String(t.length));for(let n=0;n<t.length;n++)this.sendString_(t[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rc))}sendString_(c){try{this.mySock.send(c)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zc.responsesRequiredToBeHealthy=2,Zc.healthyTimeout=3e4;
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
 */const Fc=6e4,$c=5e3,Uc=10240,Wc=102400,Bc="t",Kc="d",Yc="s",Gc="r",Qc="e",Xc="o",Jc="a",ce="n",ee="p",te="h";class ne{constructor(c,e,t,n,a,r,i,s,o,l){this.id=c,this.repoInfo_=e,this.applicationId_=t,this.appCheckToken_=n,this.authToken_=a,this.onMessage_=r,this.onReady_=i,this.onDisconnect_=s,this.onKill_=o,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_("c:"+this.id+":"),this.transportManager_=new qc(e),this.log_("Connection created"),this.start_()}start_(){const c=this.transportManager_.initialTransport();this.conn_=new c(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=c["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),t=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,t)},Math.floor(0));const n=c["healthyTimeout"]||0;n>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Uc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(c){return e=>{c===this.conn_?this.onConnectionLost_(e):c===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(c){return e=>{2!==this.state_&&(c===this.rx_?this.onPrimaryMessageReceived_(e):c===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(c){const e={t:"d",d:c};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(c){if(Bc in c){const e=c[Bc];e===Jc?this.upgradeIfSecondaryHealthy_():e===Gc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Xc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(c){const e=E("t",c),t=E("d",c);if("c"===e)this.onSecondaryControl_(t);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(t)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ce,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(c){const e=E("t",c),t=E("d",c);"c"===e?this.onControl_(t):"d"===e&&this.onDataMessage_(t)}onDataMessage_(c){this.onPrimaryResponse_(),this.onMessage_(c)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(c){const e=E(Bc,c);if(Kc in c){const t=c[Kc];if(e===te)this.onHandshake_(t);else if(e===ce){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let c=0;c<this.pendingDataMessages.length;++c)this.onDataMessage_(this.pendingDataMessages[c]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Yc?this.onConnectionShutdown_(t):e===Gc?this.onReset_(t):e===Qc?b("Server Error: "+t):e===Xc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):b("Unknown control packet command: "+e)}}onHandshake_(c){const e=c.ts,t=c.v,n=c.h;this.sessionId=c.s,this.repoInfo_.host=n,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),J!==t&&w("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const c=this.transportManager_.upgradeTransport();c&&this.startUpgrade_(c)}startUpgrade_(c){this.secondaryConn_=new c(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=c["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),t=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,t),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Fc))}onReset_(c){this.log_("Reset packet received.  New host: "+c),this.repoInfo_.host=c,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(c,e){this.log_("Realtime connection established."),this.conn_=c,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($c))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const c=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==c&&this.rx_!==c||this.close()}onConnectionLost_(c){this.conn_=null,c||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(m.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(c){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(c),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(c){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(c)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class ae{put(c,e,t,n){}merge(c,e,t,n){}refreshAuthToken(c){}refreshAppCheckToken(c){}onDisconnectPut(c,e,t){}onDisconnectMerge(c,e,t){}onDisconnectCancel(c,e){}reportStats(c){}}
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
 */class re{constructor(c){this.allowedEvents_=c,this.listeners_={},Object(r["f"])(Array.isArray(c)&&c.length>0,"Requires a non-empty array")}trigger(c,...e){if(Array.isArray(this.listeners_[c])){const t=[...this.listeners_[c]];for(let c=0;c<t.length;c++)t[c].callback.apply(t[c].context,e)}}on(c,e,t){this.validateEventType_(c),this.listeners_[c]=this.listeners_[c]||[],this.listeners_[c].push({callback:e,context:t});const n=this.getInitialEvent(c);n&&e.apply(t,n)}off(c,e,t){this.validateEventType_(c);const n=this.listeners_[c]||[];for(let a=0;a<n.length;a++)if(n[a].callback===e&&(!t||t===n[a].context))return void n.splice(a,1)}validateEventType_(c){Object(r["f"])(this.allowedEvents_.find(e=>e===c),"Unknown event: "+c)}}
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
 */class ie extends re{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(r["s"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ie}getInitialEvent(c){return Object(r["f"])("online"===c,"Unknown event type: "+c),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const se=32,oe=768;class le{constructor(c,e){if(void 0===e){this.pieces_=c.split("/");let e=0;for(let c=0;c<this.pieces_.length;c++)this.pieces_[c].length>0&&(this.pieces_[e]=this.pieces_[c],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=c,this.pieceNum_=e}toString(){let c="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(c+="/"+this.pieces_[e]);return c||"/"}}function he(){return new le("")}function ve(c){return c.pieceNum_>=c.pieces_.length?null:c.pieces_[c.pieceNum_]}function ue(c){return c.pieces_.length-c.pieceNum_}function fe(c){let e=c.pieceNum_;return e<c.pieces_.length&&e++,new le(c.pieces_,e)}function me(c){return c.pieceNum_<c.pieces_.length?c.pieces_[c.pieces_.length-1]:null}function de(c){let e="";for(let t=c.pieceNum_;t<c.pieces_.length;t++)""!==c.pieces_[t]&&(e+="/"+encodeURIComponent(String(c.pieces_[t])));return e||"/"}function ze(c,e=0){return c.pieces_.slice(c.pieceNum_+e)}function pe(c){if(c.pieceNum_>=c.pieces_.length)return null;const e=[];for(let t=c.pieceNum_;t<c.pieces_.length-1;t++)e.push(c.pieces_[t]);return new le(e,0)}function Me(c,e){const t=[];for(let n=c.pieceNum_;n<c.pieces_.length;n++)t.push(c.pieces_[n]);if(e instanceof le)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const c=e.split("/");for(let e=0;e<c.length;e++)c[e].length>0&&t.push(c[e])}return new le(t,0)}function Ce(c){return c.pieceNum_>=c.pieces_.length}function ge(c,e){const t=ve(c),n=ve(e);if(null===t)return e;if(t===n)return ge(fe(c),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+c+")")}function He(c,e){if(ue(c)!==ue(e))return!1;for(let t=c.pieceNum_,n=e.pieceNum_;t<=c.pieces_.length;t++,n++)if(c.pieces_[t]!==e.pieces_[n])return!1;return!0}function ye(c,e){let t=c.pieceNum_,n=e.pieceNum_;if(ue(c)>ue(e))return!1;while(t<c.pieces_.length){if(c.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class Ve{constructor(c,e){this.errorPrefix_=e,this.parts_=ze(c,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=Object(r["A"])(this.parts_[t]);Le(this)}}function _e(c,e){c.parts_.length>0&&(c.byteLength_+=1),c.parts_.push(e),c.byteLength_+=Object(r["A"])(e),Le(c)}function be(c){const e=c.parts_.pop();c.byteLength_-=Object(r["A"])(e),c.parts_.length>0&&(c.byteLength_-=1)}function Le(c){if(c.byteLength_>oe)throw new Error(c.errorPrefix_+"has a key path longer than "+oe+" bytes ("+c.byteLength_+").");if(c.parts_.length>se)throw new Error(c.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+se+") or object contains a cycle "+we(c))}function we(c){return 0===c.parts_.length?"":"in property '"+c.parts_.join(".")+"'"}
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
 */class Ae extends re{constructor(){let c,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",c="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",c="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",c="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",c="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const e=!document[c];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))},!1)}static getInstance(){return new Ae}getInitialEvent(c){return Object(r["f"])("visible"===c,"Unknown event type: "+c),[this.visible_]}}
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
 */const Se=1e3,ke=3e5,xe=3e3,Oe=3e4,Te=1.3,Ie=3e4,Ee="server_kill",je=3;class Pe extends ae{constructor(c,e,t,n,a,i,s,o){if(super(),this.repoInfo_=c,this.applicationId_=e,this.onDataUpdate_=t,this.onConnectStatus_=n,this.onServerInfoUpdate_=a,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.authOverride_=o,this.id=Pe.nextPersistentConnectionId_++,this.log_=_("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Se,this.maxReconnectDelay_=ke,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!Object(r["t"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ae.getInstance().on("visible",this.onVisible_,this),-1===c.host.indexOf("fblocal")&&ie.getInstance().on("online",this.onOnline_,this)}sendRequest(c,e,t){const n=++this.requestNumber_,a={r:n,a:c,b:e};this.log_(Object(r["C"])(a)),Object(r["f"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),t&&(this.requestCBHash_[n]=t)}get(c){this.initConnection_();const e=new r["a"],t={p:c._path.toString(),q:c._queryObject},n={action:"g",request:t,onComplete:c=>{const n=c["d"];"ok"===c["s"]?(this.onDataUpdate_(t["p"],n,!1,null),e.resolve(n)):e.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const c=this.outstandingGets_[a];void 0!==c&&n===c&&(delete this.outstandingGets_[a],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+a+" timed out on connection"),e.reject(new Error("Client is offline.")))},xe),this.connected_&&this.sendGet_(a),e.promise}listen(c,e,t,n){this.initConnection_();const a=c._queryIdentifier,i=c._path.toString();this.log_("Listen called for "+i+" "+a),this.listens.has(i)||this.listens.set(i,new Map),Object(r["f"])(c._queryParams.isDefault()||!c._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(r["f"])(!this.listens.get(i).has(a),"listen() called twice for same path/queryId.");const s={onComplete:n,hashFn:e,query:c,tag:t};this.listens.get(i).set(a,s),this.connected_&&this.sendListen_(s)}sendGet_(c){const e=this.outstandingGets_[c];this.sendRequest("g",e.request,t=>{delete this.outstandingGets_[c],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(t)})}sendListen_(c){const e=c.query,t=e._path.toString(),n=e._queryIdentifier;this.log_("Listen on "+t+" for "+n);const a={p:t},r="q";c.tag&&(a["q"]=e._queryObject,a["t"]=c.tag),a["h"]=c.hashFn(),this.sendRequest(r,a,a=>{const r=a["d"],i=a["s"];Pe.warnOnListenWarnings_(r,e);const s=this.listens.get(t)&&this.listens.get(t).get(n);s===c&&(this.log_("listen response",a),"ok"!==i&&this.removeListen_(t,n),c.onComplete&&c.onComplete(i,r))})}static warnOnListenWarnings_(c,e){if(c&&"object"===typeof c&&Object(r["j"])(c,"w")){const t=Object(r["z"])(c,"w");if(Array.isArray(t)&&~t.indexOf("no_index")){const c='".indexOn": "'+e._queryParams.getIndex().toString()+'"',t=e._path.toString();w(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${c} at `+t+" to your security rules for better performance.")}}}refreshAuthToken(c){this.authToken_=c,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(c)}reduceReconnectDelayIfAdminCredential_(c){const e=c&&40===c.length;(e||Object(r["p"])(c))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Oe)}refreshAppCheckToken(c){this.appCheckToken_=c,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const c=this.authToken_,e=Object(r["v"])(c)?"auth":"gauth",t={cred:c};null===this.authOverride_?t["noauth"]=!0:"object"===typeof this.authOverride_&&(t["authvar"]=this.authOverride_),this.sendRequest(e,t,e=>{const t=e["s"],n=e["d"]||"error";this.authToken_===c&&("ok"===t?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(t,n))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},c=>{const e=c["s"],t=c["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,t)})}unlisten(c,e){const t=c._path.toString(),n=c._queryIdentifier;this.log_("Unlisten called for "+t+" "+n),Object(r["f"])(c._queryParams.isDefault()||!c._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const a=this.removeListen_(t,n);a&&this.connected_&&this.sendUnlisten_(t,n,c._queryObject,e)}sendUnlisten_(c,e,t,n){this.log_("Unlisten on "+c+" for "+e);const a={p:c},r="n";n&&(a["q"]=t,a["t"]=n),this.sendRequest(r,a)}onDisconnectPut(c,e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",c,e,t):this.onDisconnectRequestQueue_.push({pathString:c,action:"o",data:e,onComplete:t})}onDisconnectMerge(c,e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",c,e,t):this.onDisconnectRequestQueue_.push({pathString:c,action:"om",data:e,onComplete:t})}onDisconnectCancel(c,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",c,null,e):this.onDisconnectRequestQueue_.push({pathString:c,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(c,e,t,n){const a={p:e,d:t};this.log_("onDisconnect "+c,a),this.sendRequest(c,a,c=>{n&&setTimeout(()=>{n(c["s"],c["d"])},Math.floor(0))})}put(c,e,t,n){this.putInternal("p",c,e,t,n)}merge(c,e,t,n){this.putInternal("m",c,e,t,n)}putInternal(c,e,t,n,a){this.initConnection_();const r={p:e,d:t};void 0!==a&&(r["h"]=a),this.outstandingPuts_.push({action:c,request:r,onComplete:n}),this.outstandingPutCount_++;const i=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(i):this.log_("Buffering put: "+e)}sendPut_(c){const e=this.outstandingPuts_[c].action,t=this.outstandingPuts_[c].request,n=this.outstandingPuts_[c].onComplete;this.outstandingPuts_[c].queued=this.connected_,this.sendRequest(e,t,t=>{this.log_(e+" response",t),delete this.outstandingPuts_[c],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(t["s"],t["d"])})}reportStats(c){if(this.connected_){const e={c:c};this.log_("reportStats",e),this.sendRequest("s",e,c=>{const e=c["s"];if("ok"!==e){const e=c["d"];this.log_("reportStats","Error sending stats: "+e)}})}}onDataMessage_(c){if("r"in c){this.log_("from server: "+Object(r["C"])(c));const e=c["r"],t=this.requestCBHash_[e];t&&(delete this.requestCBHash_[e],t(c["b"]))}else{if("error"in c)throw"A server-side error has occurred: "+c["error"];"a"in c&&this.onDataPush_(c["a"],c["b"])}}onDataPush_(c,e){this.log_("handleServerMessage",c,e),"d"===c?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===c?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===c?this.onListenRevoked_(e["p"],e["q"]):"ac"===c?this.onAuthRevoked_(e["s"],e["d"]):"apc"===c?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===c?this.onSecurityDebugPacket_(e):b("Unrecognized action received from server: "+Object(r["C"])(c)+"\nAre you using the latest client?")}onReady_(c,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(c),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(c){Object(r["f"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(c))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(c){c&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Se,this.realtime_||this.scheduleConnect_(0)),this.visible_=c}onOnline_(c){c?(this.log_("Browser went online."),this.reconnectDelay_=Se,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const c=(new Date).getTime()-this.lastConnectionEstablishedTime_;c>Ie&&(this.reconnectDelay_=Se),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const c=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-c);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Te)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const c=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),t=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+Pe.nextConnectionId_++,a=this.lastSessionId;let i=!1,s=null;const o=function(){s?s.close():(i=!0,t())},l=function(c){Object(r["f"])(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(c)};this.realtime_={close:o,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,o]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);i?V("getToken() completed but was canceled"):(V("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=o&&o.token,s=new ne(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,c,e,t,c=>{w(c+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ee)},a))}catch(b){this.log_("Failed to get token: "+b),i||(this.repoInfo_.nodeAdmin&&w(b),o())}}}interrupt(c){V("Interrupting connection for reason: "+c),this.interruptReasons_[c]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(c){V("Resuming connection for reason: "+c),delete this.interruptReasons_[c],Object(r["q"])(this.interruptReasons_)&&(this.reconnectDelay_=Se,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(c){const e=c-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let c=0;c<this.outstandingPuts_.length;c++){const e=this.outstandingPuts_[c];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[c],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(c,e){let t;t=e?e.map(c=>j(c)).join("$"):"default";const n=this.removeListen_(c,t);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(c,e){const t=new le(c).toString();let n;if(this.listens.has(t)){const c=this.listens.get(t);n=c.get(e),c.delete(e),0===c.size&&this.listens.delete(t)}else n=void 0;return n}onAuthRevoked_(c,e){V("Auth token revoked: "+c+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==c&&"permission_denied"!==c||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=je&&(this.reconnectDelay_=Oe,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(c,e){V("App check token revoked: "+c+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==c&&"permission_denied"!==c||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=je&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(c){this.securityDebugCallback_?this.securityDebugCallback_(c):"msg"in c&&console.log("FIREBASE: "+c["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const c of this.listens.values())for(const e of c.values())this.sendListen_(e);for(let c=0;c<this.outstandingPuts_.length;c++)this.outstandingPuts_[c]&&this.sendPut_(c);while(this.onDisconnectRequestQueue_.length){const c=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(c.action,c.pathString,c.data,c.onComplete)}for(let c=0;c<this.outstandingGets_.length;c++)this.outstandingGets_[c]&&this.sendGet_(c)}sendConnectStats_(){const c={};let e="js";Object(r["t"])()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),c["sdk."+e+"."+l.replace(/\./g,"-")]=1,Object(r["s"])()?c["framework.cordova"]=1:Object(r["u"])()&&(c["framework.reactnative"]=1),this.reportStats(c)}shouldReconnect_(){const c=ie.getInstance().currentlyOnline();return Object(r["q"])(this.interruptReasons_)&&c}}Pe.nextPersistentConnectionId_=0,Pe.nextConnectionId_=0;
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
 */let De;class Ze extends Re{static get __EMPTY_NODE(){return De}static set __EMPTY_NODE(c){De=c}compare(c,e){return T(c.name,e.name)}isDefinedOn(c){throw Object(r["g"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(c,e){return!1}minPost(){return Ne.MIN}maxPost(){return new Ne(O,De)}makePost(c,e){return Object(r["f"])("string"===typeof c,"KeyIndex indexValue must always be a string."),new Ne(c,De)}toString(){return".key"}}const qe=new Ze;
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
 */class Fe{constructor(c,e,t,n,a=null){this.isReverse_=n,this.resultGenerator_=a,this.nodeStack_=[];let r=1;while(!c.isEmpty())if(c=c,r=e?t(c.key,e):1,n&&(r*=-1),r<0)c=this.isReverse_?c.left:c.right;else{if(0===r){this.nodeStack_.push(c);break}this.nodeStack_.push(c),c=this.isReverse_?c.right:c.left}}getNext(){if(0===this.nodeStack_.length)return null;let c,e=this.nodeStack_.pop();if(c=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return c}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const c=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(c.key,c.value):{key:c.key,value:c.value}}}class $e{constructor(c,e,t,n,a){this.key=c,this.value=e,this.color=null!=t?t:$e.RED,this.left=null!=n?n:We.EMPTY_NODE,this.right=null!=a?a:We.EMPTY_NODE}copy(c,e,t,n,a){return new $e(null!=c?c:this.key,null!=e?e:this.value,null!=t?t:this.color,null!=n?n:this.left,null!=a?a:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||!!c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,e,t){let n=this;const a=t(c,n.key);return n=a<0?n.copy(null,null,null,n.left.insert(c,e,t),null):0===a?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(c,e,t)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let c=this;return c.left.isRed_()||c.left.left.isRed_()||(c=c.moveRedLeft_()),c=c.copy(null,null,null,c.left.removeMin_(),null),c.fixUp_()}remove(c,e){let t,n;if(t=this,e(c,t.key)<0)t.left.isEmpty()||t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.remove(c,e),null);else{if(t.left.isRed_()&&(t=t.rotateRight_()),t.right.isEmpty()||t.right.isRed_()||t.right.left.isRed_()||(t=t.moveRedRight_()),0===e(c,t.key)){if(t.right.isEmpty())return We.EMPTY_NODE;n=t.right.min_(),t=t.copy(n.key,n.value,null,null,t.right.removeMin_())}t=t.copy(null,null,null,null,t.right.remove(c,e))}return t.fixUp_()}isRed_(){return this.color}fixUp_(){let c=this;return c.right.isRed_()&&!c.left.isRed_()&&(c=c.rotateLeft_()),c.left.isRed_()&&c.left.left.isRed_()&&(c=c.rotateRight_()),c.left.isRed_()&&c.right.isRed_()&&(c=c.colorFlip_()),c}moveRedLeft_(){let c=this.colorFlip_();return c.right.left.isRed_()&&(c=c.copy(null,null,null,null,c.right.rotateRight_()),c=c.rotateLeft_(),c=c.colorFlip_()),c}moveRedRight_(){let c=this.colorFlip_();return c.left.left.isRed_()&&(c=c.rotateRight_(),c=c.colorFlip_()),c}rotateLeft_(){const c=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight_(){const c=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip_(){const c=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,e)}checkMaxDepth_(){const c=this.check_();return Math.pow(2,c)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const c=this.left.check_();if(c!==this.right.check_())throw new Error("Black depths differ");return c+(this.isRed_()?0:1)}}$e.RED=!0,$e.BLACK=!1;class Ue{copy(c,e,t,n,a){return this}insert(c,e,t){return new $e(c,e,null)}remove(c,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(c){return!1}reverseTraversal(c){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(c,e=We.EMPTY_NODE){this.comparator_=c,this.root_=e}insert(c,e){return new We(this.comparator_,this.root_.insert(c,e,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(c){return new We(this.comparator_,this.root_.remove(c,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(c){let e,t=this.root_;while(!t.isEmpty()){if(e=this.comparator_(c,t.key),0===e)return t.value;e<0?t=t.left:e>0&&(t=t.right)}return null}getPredecessorKey(c){let e,t=this.root_,n=null;while(!t.isEmpty()){if(e=this.comparator_(c,t.key),0===e){if(t.left.isEmpty())return n?n.key:null;t=t.left;while(!t.right.isEmpty())t=t.right;return t.key}e<0?t=t.left:e>0&&(n=t,t=t.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(c){return this.root_.inorderTraversal(c)}reverseTraversal(c){return this.root_.reverseTraversal(c)}getIterator(c){return new Fe(this.root_,null,this.comparator_,!1,c)}getIteratorFrom(c,e){return new Fe(this.root_,c,this.comparator_,!1,e)}getReverseIteratorFrom(c,e){return new Fe(this.root_,c,this.comparator_,!0,e)}getReverseIterator(c){return new Fe(this.root_,null,this.comparator_,!0,c)}}
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
 */let Ye;function Ge(c){Ye=c}We.EMPTY_NODE=new Ue;const Qe=function(c){return"number"===typeof c?"number:"+R(c):"string:"+c},Xe=function(c){if(c.isLeafNode()){const e=c.val();Object(r["f"])("string"===typeof e||"number"===typeof e||"object"===typeof e&&Object(r["j"])(e,".sv"),"Priority must be a string or number.")}else Object(r["f"])(c===Ye||c.isEmpty(),"priority of unexpected type.");Object(r["f"])(c===Ye||c.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Je,ct,et;class tt{constructor(c,e=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=c,this.priorityNode_=e,this.lazyHash_=null,Object(r["f"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xe(this.priorityNode_)}static set __childrenNodeConstructor(c){Je=c}static get __childrenNodeConstructor(){return Je}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(c){return new tt(this.value_,c)}getImmediateChild(c){return".priority"===c?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(c){return Ce(c)?this:".priority"===ve(c)?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(c,e){return null}updateImmediateChild(c,e){return".priority"===c?this.updatePriority(e):e.isEmpty()&&".priority"!==c?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(c,e).updatePriority(this.priorityNode_)}updateChild(c,e){const t=ve(c);return null===t?e:e.isEmpty()&&".priority"!==t?this:(Object(r["f"])(".priority"!==t||1===ue(c),".priority must be the last token in a path"),this.updateImmediateChild(t,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(c),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(c,e){return!1}val(c){return c&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let c="";this.priorityNode_.isEmpty()||(c+="priority:"+Qe(this.priorityNode_.val())+":");const e=typeof this.value_;c+=e+":",c+="number"===e?R(this.value_):this.value_,this.lazyHash_=M(c)}return this.lazyHash_}getValue(){return this.value_}compareTo(c){return c===tt.__childrenNodeConstructor.EMPTY_NODE?1:c instanceof tt.__childrenNodeConstructor?-1:(Object(r["f"])(c.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(c))}compareToLeafNode_(c){const e=typeof c.value_,t=typeof this.value_,n=tt.VALUE_TYPE_ORDER.indexOf(e),a=tt.VALUE_TYPE_ORDER.indexOf(t);return Object(r["f"])(n>=0,"Unknown leaf type: "+e),Object(r["f"])(a>=0,"Unknown leaf type: "+t),n===a?"object"===t?0:this.value_<c.value_?-1:this.value_===c.value_?0:1:a-n}withIndex(){return this}isIndexed(){return!0}equals(c){if(c===this)return!0;if(c.isLeafNode()){const e=c;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function nt(c){ct=c}function at(c){et=c}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];class rt extends Re{compare(c,e){const t=c.node.getPriority(),n=e.node.getPriority(),a=t.compareTo(n);return 0===a?T(c.name,e.name):a}isDefinedOn(c){return!c.getPriority().isEmpty()}indexedValueChanged(c,e){return!c.getPriority().equals(e.getPriority())}minPost(){return Ne.MIN}maxPost(){return new Ne(O,new tt("[PRIORITY-POST]",et))}makePost(c,e){const t=ct(c);return new Ne(e,new tt("[PRIORITY-POST]",t))}toString(){return".priority"}}const it=new rt,st=Math.log(2);
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
 */class ot{constructor(c){const e=c=>parseInt(Math.log(c)/st,10),t=c=>parseInt(Array(c+1).join("1"),2);this.count=e(c+1),this.current_=this.count-1;const n=t(this.count);this.bits_=c+1&n}nextBitIsOne(){const c=!(this.bits_&1<<this.current_);return this.current_--,c}}const lt=function(c,e,t,n){c.sort(e);const a=function(e,n){const r=n-e;let i,s;if(0===r)return null;if(1===r)return i=c[e],s=t?t(i):i,new $e(s,i.node,$e.BLACK,null,null);{const o=parseInt(r/2,10)+e,l=a(e,o),h=a(o+1,n);return i=c[o],s=t?t(i):i,new $e(s,i.node,$e.BLACK,l,h)}},r=function(e){let n=null,r=null,i=c.length;const s=function(e,n){const r=i-e,s=i;i-=e;const l=a(r+1,s),h=c[r],v=t?t(h):h;o(new $e(v,h.node,n,null,l))},o=function(c){n?(n.left=c,n=c):(r=c,n=c)};for(let c=0;c<e.count;++c){const t=e.nextBitIsOne(),n=Math.pow(2,e.count-(c+1));t?s(n,$e.BLACK):(s(n,$e.BLACK),s(n,$e.RED))}return r},i=new ot(c.length),s=r(i);return new We(n||e,s)};
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
 */let ht;const vt={};class ut{constructor(c,e){this.indexes_=c,this.indexSet_=e}static get Default(){return Object(r["f"])(vt&&it,"ChildrenNode.ts has not been loaded"),ht=ht||new ut({".priority":vt},{".priority":it}),ht}get(c){const e=Object(r["z"])(this.indexes_,c);if(!e)throw new Error("No index defined for "+c);return e instanceof We?e:null}hasIndex(c){return Object(r["j"])(this.indexSet_,c.toString())}addIndex(c,e){Object(r["f"])(c!==qe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const t=[];let n=!1;const a=e.getIterator(Ne.Wrap);let i,s=a.getNext();while(s)n=n||c.isDefinedOn(s.node),t.push(s),s=a.getNext();i=n?lt(t,c.getCompare()):vt;const o=c.toString(),l=Object.assign({},this.indexSet_);l[o]=c;const h=Object.assign({},this.indexes_);return h[o]=i,new ut(h,l)}addToIndexes(c,e){const t=Object(r["x"])(this.indexes_,(t,n)=>{const a=Object(r["z"])(this.indexSet_,n);if(Object(r["f"])(a,"Missing index implementation for "+n),t===vt){if(a.isDefinedOn(c.node)){const t=[],n=e.getIterator(Ne.Wrap);let r=n.getNext();while(r)r.name!==c.name&&t.push(r),r=n.getNext();return t.push(c),lt(t,a.getCompare())}return vt}{const n=e.get(c.name);let a=t;return n&&(a=a.remove(new Ne(c.name,n))),a.insert(c,c.node)}});return new ut(t,this.indexSet_)}removeFromIndexes(c,e){const t=Object(r["x"])(this.indexes_,t=>{if(t===vt)return t;{const n=e.get(c.name);return n?t.remove(new Ne(c.name,n)):t}});return new ut(t,this.indexSet_)}}
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
 */let ft;class mt{constructor(c,e,t){this.children_=c,this.priorityNode_=e,this.indexMap_=t,this.lazyHash_=null,this.priorityNode_&&Xe(this.priorityNode_),this.children_.isEmpty()&&Object(r["f"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ft||(ft=new mt(new We(Ke),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ft}updatePriority(c){return this.children_.isEmpty()?this:new mt(this.children_,c,this.indexMap_)}getImmediateChild(c){if(".priority"===c)return this.getPriority();{const e=this.children_.get(c);return null===e?ft:e}}getChild(c){const e=ve(c);return null===e?this:this.getImmediateChild(e).getChild(fe(c))}hasChild(c){return null!==this.children_.get(c)}updateImmediateChild(c,e){if(Object(r["f"])(e,"We should always be passing snapshot nodes"),".priority"===c)return this.updatePriority(e);{const t=new Ne(c,e);let n,a;e.isEmpty()?(n=this.children_.remove(c),a=this.indexMap_.removeFromIndexes(t,this.children_)):(n=this.children_.insert(c,e),a=this.indexMap_.addToIndexes(t,this.children_));const r=n.isEmpty()?ft:this.priorityNode_;return new mt(n,r,a)}}updateChild(c,e){const t=ve(c);if(null===t)return e;{Object(r["f"])(".priority"!==ve(c)||1===ue(c),".priority must be the last token in a path");const n=this.getImmediateChild(t).updateChild(fe(c),e);return this.updateImmediateChild(t,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(c){if(this.isEmpty())return null;const e={};let t=0,n=0,a=!0;if(this.forEachChild(it,(r,i)=>{e[r]=i.val(c),t++,a&&mt.INTEGER_REGEXP_.test(r)?n=Math.max(n,Number(r)):a=!1}),!c&&a&&n<2*t){const c=[];for(const t in e)c[t]=e[t];return c}return c&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let c="";this.getPriority().isEmpty()||(c+="priority:"+Qe(this.getPriority().val())+":"),this.forEachChild(it,(e,t)=>{const n=t.hash();""!==n&&(c+=":"+e+":"+n)}),this.lazyHash_=""===c?"":M(c)}return this.lazyHash_}getPredecessorChildName(c,e,t){const n=this.resolveIndex_(t);if(n){const t=n.getPredecessorKey(new Ne(c,e));return t?t.name:null}return this.children_.getPredecessorKey(c)}getFirstChildName(c){const e=this.resolveIndex_(c);if(e){const c=e.minKey();return c&&c.name}return this.children_.minKey()}getFirstChild(c){const e=this.getFirstChildName(c);return e?new Ne(e,this.children_.get(e)):null}getLastChildName(c){const e=this.resolveIndex_(c);if(e){const c=e.maxKey();return c&&c.name}return this.children_.maxKey()}getLastChild(c){const e=this.getLastChildName(c);return e?new Ne(e,this.children_.get(e)):null}forEachChild(c,e){const t=this.resolveIndex_(c);return t?t.inorderTraversal(c=>e(c.name,c.node)):this.children_.inorderTraversal(e)}getIterator(c){return this.getIteratorFrom(c.minPost(),c)}getIteratorFrom(c,e){const t=this.resolveIndex_(e);if(t)return t.getIteratorFrom(c,c=>c);{const t=this.children_.getIteratorFrom(c.name,Ne.Wrap);let n=t.peek();while(null!=n&&e.compare(n,c)<0)t.getNext(),n=t.peek();return t}}getReverseIterator(c){return this.getReverseIteratorFrom(c.maxPost(),c)}getReverseIteratorFrom(c,e){const t=this.resolveIndex_(e);if(t)return t.getReverseIteratorFrom(c,c=>c);{const t=this.children_.getReverseIteratorFrom(c.name,Ne.Wrap);let n=t.peek();while(null!=n&&e.compare(n,c)>0)t.getNext(),n=t.peek();return t}}compareTo(c){return this.isEmpty()?c.isEmpty()?0:-1:c.isLeafNode()||c.isEmpty()?1:c===zt?-1:0}withIndex(c){if(c===qe||this.indexMap_.hasIndex(c))return this;{const e=this.indexMap_.addIndex(c,this.children_);return new mt(this.children_,this.priorityNode_,e)}}isIndexed(c){return c===qe||this.indexMap_.hasIndex(c)}equals(c){if(c===this)return!0;if(c.isLeafNode())return!1;{const e=c;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const c=this.getIterator(it),t=e.getIterator(it);let n=c.getNext(),a=t.getNext();while(n&&a){if(n.name!==a.name||!n.node.equals(a.node))return!1;n=c.getNext(),a=t.getNext()}return null===n&&null===a}return!1}return!1}}resolveIndex_(c){return c===qe?null:this.indexMap_.get(c.toString())}}mt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dt extends mt{constructor(){super(new We(Ke),mt.EMPTY_NODE,ut.Default)}compareTo(c){return c===this?0:1}equals(c){return c===this}getPriority(){return this}getImmediateChild(c){return mt.EMPTY_NODE}isEmpty(){return!1}}const zt=new dt;Object.defineProperties(Ne,{MIN:{value:new Ne(x,mt.EMPTY_NODE)},MAX:{value:new Ne(O,zt)}}),Ze.__EMPTY_NODE=mt.EMPTY_NODE,tt.__childrenNodeConstructor=mt,Ge(zt),at(zt);
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
const pt=!0;function Mt(c,e=null){if(null===c)return mt.EMPTY_NODE;if("object"===typeof c&&".priority"in c&&(e=c[".priority"]),Object(r["f"])(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof c&&".value"in c&&null!==c[".value"]&&(c=c[".value"]),"object"!==typeof c||".sv"in c){const t=c;return new tt(t,Mt(e))}if(c instanceof Array||!pt){let t=mt.EMPTY_NODE;return N(c,(e,n)=>{if(Object(r["j"])(c,e)&&"."!==e.substring(0,1)){const c=Mt(n);!c.isLeafNode()&&c.isEmpty()||(t=t.updateImmediateChild(e,c))}}),t.updatePriority(Mt(e))}{const t=[];let n=!1;const a=c;if(N(a,(c,e)=>{if("."!==c.substring(0,1)){const a=Mt(e);a.isEmpty()||(n=n||!a.getPriority().isEmpty(),t.push(new Ne(c,a)))}}),0===t.length)return mt.EMPTY_NODE;const r=lt(t,Be,c=>c.name,Ke);if(n){const c=lt(t,it.getCompare());return new mt(r,Mt(e),new ut({".priority":c},{".priority":it}))}return new mt(r,Mt(e),ut.Default)}}nt(Mt);
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
class Ct extends Re{constructor(c){super(),this.indexPath_=c,Object(r["f"])(!Ce(c)&&".priority"!==ve(c),"Can't create PathIndex with empty path or .priority key")}extractChild(c){return c.getChild(this.indexPath_)}isDefinedOn(c){return!c.getChild(this.indexPath_).isEmpty()}compare(c,e){const t=this.extractChild(c.node),n=this.extractChild(e.node),a=t.compareTo(n);return 0===a?T(c.name,e.name):a}makePost(c,e){const t=Mt(c),n=mt.EMPTY_NODE.updateChild(this.indexPath_,t);return new Ne(e,n)}maxPost(){const c=mt.EMPTY_NODE.updateChild(this.indexPath_,zt);return new Ne(O,c)}toString(){return ze(this.indexPath_,0).join("/")}}
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
 */class gt extends Re{compare(c,e){const t=c.node.compareTo(e.node);return 0===t?T(c.name,e.name):t}isDefinedOn(c){return!0}indexedValueChanged(c,e){return!c.equals(e)}minPost(){return Ne.MIN}maxPost(){return Ne.MAX}makePost(c,e){const t=Mt(c);return new Ne(e,t)}toString(){return".value"}}const Ht=new gt,yt="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
function Vt(c){return{type:"value",snapshotNode:c}}function _t(c,e){return{type:"child_added",snapshotNode:e,childName:c}}function bt(c,e){return{type:"child_removed",snapshotNode:e,childName:c}}function Lt(c,e,t){return{type:"child_changed",snapshotNode:e,childName:c,oldSnap:t}}function wt(c,e){return{type:"child_moved",snapshotNode:e,childName:c}}
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
 */class At{constructor(c){this.index_=c}updateChild(c,e,t,n,a,i){Object(r["f"])(c.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=c.getImmediateChild(e);return s.getChild(n).equals(t.getChild(n))&&s.isEmpty()===t.isEmpty()?c:(null!=i&&(t.isEmpty()?c.hasChild(e)?i.trackChildChange(bt(e,s)):Object(r["f"])(c.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?i.trackChildChange(_t(e,t)):i.trackChildChange(Lt(e,t,s))),c.isLeafNode()&&t.isEmpty()?c:c.updateImmediateChild(e,t).withIndex(this.index_))}updateFullNode(c,e,t){return null!=t&&(c.isLeafNode()||c.forEachChild(it,(c,n)=>{e.hasChild(c)||t.trackChildChange(bt(c,n))}),e.isLeafNode()||e.forEachChild(it,(e,n)=>{if(c.hasChild(e)){const a=c.getImmediateChild(e);a.equals(n)||t.trackChildChange(Lt(e,n,a))}else t.trackChildChange(_t(e,n))})),e.withIndex(this.index_)}updatePriority(c,e){return c.isEmpty()?mt.EMPTY_NODE:c.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class St{constructor(c){this.indexedFilter_=new At(c.getIndex()),this.index_=c.getIndex(),this.startPost_=St.getStartPost_(c),this.endPost_=St.getEndPost_(c)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(c){return this.index_.compare(this.getStartPost(),c)<=0&&this.index_.compare(c,this.getEndPost())<=0}updateChild(c,e,t,n,a,r){return this.matches(new Ne(e,t))||(t=mt.EMPTY_NODE),this.indexedFilter_.updateChild(c,e,t,n,a,r)}updateFullNode(c,e,t){e.isLeafNode()&&(e=mt.EMPTY_NODE);let n=e.withIndex(this.index_);n=n.updatePriority(mt.EMPTY_NODE);const a=this;return e.forEachChild(it,(c,e)=>{a.matches(new Ne(c,e))||(n=n.updateImmediateChild(c,mt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(c,n,t)}updatePriority(c,e){return c}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(c){if(c.hasStart()){const e=c.getIndexStartName();return c.getIndex().makePost(c.getIndexStartValue(),e)}return c.getIndex().minPost()}static getEndPost_(c){if(c.hasEnd()){const e=c.getIndexEndName();return c.getIndex().makePost(c.getIndexEndValue(),e)}return c.getIndex().maxPost()}}
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
 */class kt{constructor(c){this.rangedFilter_=new St(c),this.index_=c.getIndex(),this.limit_=c.getLimit(),this.reverse_=!c.isViewFromLeft()}updateChild(c,e,t,n,a,r){return this.rangedFilter_.matches(new Ne(e,t))||(t=mt.EMPTY_NODE),c.getImmediateChild(e).equals(t)?c:c.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(c,e,t,n,a,r):this.fullLimitUpdateChild_(c,e,t,a,r)}updateFullNode(c,e,t){let n;if(e.isLeafNode()||e.isEmpty())n=mt.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let c;n=mt.EMPTY_NODE.withIndex(this.index_),c=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let t=0;while(c.hasNext()&&t<this.limit_){const e=c.getNext();let a;if(a=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),e)<=0:this.index_.compare(e,this.rangedFilter_.getEndPost())<=0,!a)break;n=n.updateImmediateChild(e.name,e.node),t++}}else{let c,t,a,r;if(n=e.withIndex(this.index_),n=n.updatePriority(mt.EMPTY_NODE),this.reverse_){r=n.getReverseIterator(this.index_),c=this.rangedFilter_.getEndPost(),t=this.rangedFilter_.getStartPost();const e=this.index_.getCompare();a=(c,t)=>e(t,c)}else r=n.getIterator(this.index_),c=this.rangedFilter_.getStartPost(),t=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let i=0,s=!1;while(r.hasNext()){const e=r.getNext();!s&&a(c,e)<=0&&(s=!0);const o=s&&i<this.limit_&&a(e,t)<=0;o?i++:n=n.updateImmediateChild(e.name,mt.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(c,n,t)}updatePriority(c,e){return c}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(c,e,t,n,a){let i;if(this.reverse_){const c=this.index_.getCompare();i=(e,t)=>c(t,e)}else i=this.index_.getCompare();const s=c;Object(r["f"])(s.numChildren()===this.limit_,"");const o=new Ne(e,t),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),h=this.rangedFilter_.matches(o);if(s.hasChild(e)){const c=s.getImmediateChild(e);let r=n.getChildAfterChild(this.index_,l,this.reverse_);while(null!=r&&(r.name===e||s.hasChild(r.name)))r=n.getChildAfterChild(this.index_,r,this.reverse_);const v=null==r?1:i(r,o),u=h&&!t.isEmpty()&&v>=0;if(u)return null!=a&&a.trackChildChange(Lt(e,t,c)),s.updateImmediateChild(e,t);{null!=a&&a.trackChildChange(bt(e,c));const t=s.updateImmediateChild(e,mt.EMPTY_NODE),n=null!=r&&this.rangedFilter_.matches(r);return n?(null!=a&&a.trackChildChange(_t(r.name,r.node)),t.updateImmediateChild(r.name,r.node)):t}}return t.isEmpty()?c:h&&i(l,o)>=0?(null!=a&&(a.trackChildChange(bt(l.name,l.node)),a.trackChildChange(_t(e,t))),s.updateImmediateChild(e,t).updateImmediateChild(l.name,mt.EMPTY_NODE)):c}}
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
 */class xt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=it}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(r["f"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(r["f"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:x}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(r["f"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(r["f"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:O}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(r["f"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===it}copy(){const c=new xt;return c.limitSet_=this.limitSet_,c.limit_=this.limit_,c.startSet_=this.startSet_,c.indexStartValue_=this.indexStartValue_,c.startNameSet_=this.startNameSet_,c.indexStartName_=this.indexStartName_,c.endSet_=this.endSet_,c.indexEndValue_=this.indexEndValue_,c.endNameSet_=this.endNameSet_,c.indexEndName_=this.indexEndName_,c.index_=this.index_,c.viewFrom_=this.viewFrom_,c}}function Ot(c){return c.loadsAllData()?new At(c.getIndex()):c.hasLimit()?new kt(c):new St(c)}function Tt(c){const e={};if(c.isDefault())return e;let t;return c.index_===it?t="$priority":c.index_===Ht?t="$value":c.index_===qe?t="$key":(Object(r["f"])(c.index_ instanceof Ct,"Unrecognized index type!"),t=c.index_.toString()),e["orderBy"]=Object(r["C"])(t),c.startSet_&&(e["startAt"]=Object(r["C"])(c.indexStartValue_),c.startNameSet_&&(e["startAt"]+=","+Object(r["C"])(c.indexStartName_))),c.endSet_&&(e["endAt"]=Object(r["C"])(c.indexEndValue_),c.endNameSet_&&(e["endAt"]+=","+Object(r["C"])(c.indexEndName_))),c.limitSet_&&(c.isViewFromLeft()?e["limitToFirst"]=c.limit_:e["limitToLast"]=c.limit_),e}function It(c){const e={};if(c.startSet_&&(e["sp"]=c.indexStartValue_,c.startNameSet_&&(e["sn"]=c.indexStartName_)),c.endSet_&&(e["ep"]=c.indexEndValue_,c.endNameSet_&&(e["en"]=c.indexEndName_)),c.limitSet_){e["l"]=c.limit_;let t=c.viewFrom_;""===t&&(t=c.isViewFromLeft()?"l":"r"),e["vf"]=t}return c.index_!==it&&(e["i"]=c.index_.toString()),e}
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
 */class Et extends ae{constructor(c,e,t,n){super(),this.repoInfo_=c,this.onDataUpdate_=e,this.authTokenProvider_=t,this.appCheckTokenProvider_=n,this.log_=_("p:rest:"),this.listens_={}}reportStats(c){throw new Error("Method not implemented.")}static getListenId_(c,e){return void 0!==e?"tag$"+e:(Object(r["f"])(c._queryParams.isDefault(),"should have a tag if it's not a default query."),c._path.toString())}listen(c,e,t,n){const a=c._path.toString();this.log_("Listen called for "+a+" "+c._queryIdentifier);const i=Et.getListenId_(c,t),s={};this.listens_[i]=s;const o=Tt(c._queryParams);this.restRequest_(a+".json",o,(c,e)=>{let o=e;if(404===c&&(o=null,c=null),null===c&&this.onDataUpdate_(a,o,!1,t),Object(r["z"])(this.listens_,i)===s){let e;e=c?401===c?"permission_denied":"rest_error:"+c:"ok",n(e,null)}})}unlisten(c,e){const t=Et.getListenId_(c,e);delete this.listens_[t]}get(c){const e=Tt(c._queryParams),t=c._path.toString(),n=new r["a"];return this.restRequest_(t+".json",e,(c,e)=>{let a=e;404===c&&(a=null,c=null),null===c?(this.onDataUpdate_(t,a,!1,null),n.resolve(a)):n.reject(new Error(a))}),n.promise}refreshAuthToken(c){}restRequest_(c,e={},t){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,a])=>{n&&n.accessToken&&(e["auth"]=n.accessToken),a&&a.token&&(e["ac"]=a.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+c+"?ns="+this.repoInfo_.namespace+Object(r["y"])(e);this.log_("Sending REST request for "+i);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(t&&4===s.readyState){this.log_("REST Response for "+i+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=Object(r["w"])(s.responseText)}catch(c){w("Failed to parse JSON response for "+i+": "+s.responseText)}t(null,e)}else 401!==s.status&&404!==s.status&&w("Got unsuccessful REST response for "+i+" Status: "+s.status),t(s.status);t=null}},s.open("GET",i,!0),s.send()})}}
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
 */function Pt(){return{value:null,children:new Map}}function Nt(c,e,t){if(Ce(e))c.value=t,c.children.clear();else if(null!==c.value)c.value=c.value.updateChild(e,t);else{const n=ve(e);c.children.has(n)||c.children.set(n,Pt());const a=c.children.get(n);e=fe(e),Nt(a,e,t)}}function Rt(c,e,t){null!==c.value?t(e,c.value):Dt(c,(c,n)=>{const a=new le(e.toString()+"/"+c);Rt(n,a,t)})}function Dt(c,e){c.children.forEach((c,t)=>{e(t,c)})}
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
 */const qt=1e4,Ft=3e4,$t=3e5;class Ut{constructor(c,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Zt(c);const t=qt+(Ft-qt)*Math.random();Y(this.reportStats_.bind(this),Math.floor(t))}reportStats_(){const c=this.statsListener_.get(),e={};let t=!1;N(c,(c,n)=>{n>0&&Object(r["j"])(this.statsToReport_,c)&&(e[c]=n,t=!0)}),t&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*$t))}}
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
 */var Wt;function Bt(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kt(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yt(c){return{fromUser:!1,fromServer:!0,queryId:c,tagged:!0}}
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
 */(function(c){c[c["OVERWRITE"]=0]="OVERWRITE",c[c["MERGE"]=1]="MERGE",c[c["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",c[c["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));class Gt{constructor(c,e,t){this.path=c,this.affectedTree=e,this.revert=t,this.type=Wt.ACK_USER_WRITE,this.source=Bt()}operationForChild(c){if(Ce(this.path)){if(null!=this.affectedTree.value)return Object(r["f"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new le(c));return new Gt(he(),e,this.revert)}}return Object(r["f"])(ve(this.path)===c,"operationForChild called for unrelated child."),new Gt(fe(this.path),this.affectedTree,this.revert)}}
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
 */class Qt{constructor(c,e){this.source=c,this.path=e,this.type=Wt.LISTEN_COMPLETE}operationForChild(c){return Ce(this.path)?new Qt(this.source,he()):new Qt(this.source,fe(this.path))}}
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
 */class Xt{constructor(c,e,t){this.source=c,this.path=e,this.snap=t,this.type=Wt.OVERWRITE}operationForChild(c){return Ce(this.path)?new Xt(this.source,he(),this.snap.getImmediateChild(c)):new Xt(this.source,fe(this.path),this.snap)}}
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
 */class Jt{constructor(c,e,t){this.source=c,this.path=e,this.children=t,this.type=Wt.MERGE}operationForChild(c){if(Ce(this.path)){const e=this.children.subtree(new le(c));return e.isEmpty()?null:e.value?new Xt(this.source,he(),e.value):new Jt(this.source,he(),e)}return Object(r["f"])(ve(this.path)===c,"Can't get a merge for a child not on the path of the operation"),new Jt(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class cn{constructor(c,e,t){this.node_=c,this.fullyInitialized_=e,this.filtered_=t}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(c){if(Ce(c))return this.isFullyInitialized()&&!this.filtered_;const e=ve(c);return this.isCompleteForChild(e)}isCompleteForChild(c){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(c)}getNode(){return this.node_}}
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
 */class en{constructor(c){this.query_=c,this.index_=this.query_._queryParams.getIndex()}}function tn(c,e,t,n){const a=[],r=[];return e.forEach(e=>{"child_changed"===e.type&&c.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&r.push(wt(e.childName,e.snapshotNode))}),nn(c,a,"child_removed",e,n,t),nn(c,a,"child_added",e,n,t),nn(c,a,"child_moved",r,n,t),nn(c,a,"child_changed",e,n,t),nn(c,a,"value",e,n,t),a}function nn(c,e,t,n,a,r){const i=n.filter(c=>c.type===t);i.sort((e,t)=>rn(c,e,t)),i.forEach(t=>{const n=an(c,t,r);a.forEach(a=>{a.respondsTo(t.type)&&e.push(a.createEvent(n,c.query_))})})}function an(c,e,t){return"value"===e.type||"child_removed"===e.type||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,c.index_)),e}function rn(c,e,t){if(null==e.childName||null==t.childName)throw Object(r["g"])("Should only compare child_ events.");const n=new Ne(e.childName,e.snapshotNode),a=new Ne(t.childName,t.snapshotNode);return c.index_.compare(n,a)}
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
 */let un;const fn=()=>(un||(un=new We(I)),un);class mn{constructor(c,e=fn()){this.value=c,this.children=e}static fromObject(c){let e=new mn(null);return N(c,(c,t)=>{e=e.set(new le(c),t)}),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(c,e){if(null!=this.value&&e(this.value))return{path:he(),value:this.value};if(Ce(c))return null;{const t=ve(c),n=this.children.get(t);if(null!==n){const a=n.findRootMostMatchingPathAndValue(fe(c),e);if(null!=a){const c=Me(new le(t),a.path);return{path:c,value:a.value}}return null}return null}}findRootMostValueAndPath(c){return this.findRootMostMatchingPathAndValue(c,()=>!0)}subtree(c){if(Ce(c))return this;{const e=ve(c),t=this.children.get(e);return null!==t?t.subtree(fe(c)):new mn(null)}}set(c,e){if(Ce(c))return new mn(e,this.children);{const t=ve(c),n=this.children.get(t)||new mn(null),a=n.set(fe(c),e),r=this.children.insert(t,a);return new mn(this.value,r)}}remove(c){if(Ce(c))return this.children.isEmpty()?new mn(null):new mn(null,this.children);{const e=ve(c),t=this.children.get(e);if(t){const n=t.remove(fe(c));let a;return a=n.isEmpty()?this.children.remove(e):this.children.insert(e,n),null===this.value&&a.isEmpty()?new mn(null):new mn(this.value,a)}return this}}get(c){if(Ce(c))return this.value;{const e=ve(c),t=this.children.get(e);return t?t.get(fe(c)):null}}setTree(c,e){if(Ce(c))return e;{const t=ve(c),n=this.children.get(t)||new mn(null),a=n.setTree(fe(c),e);let r;return r=a.isEmpty()?this.children.remove(t):this.children.insert(t,a),new mn(this.value,r)}}fold(c){return this.fold_(he(),c)}fold_(c,e){const t={};return this.children.inorderTraversal((n,a)=>{t[n]=a.fold_(Me(c,n),e)}),e(c,this.value,t)}findOnPath(c,e){return this.findOnPath_(c,he(),e)}findOnPath_(c,e,t){const n=!!this.value&&t(e,this.value);if(n)return n;if(Ce(c))return null;{const n=ve(c),a=this.children.get(n);return a?a.findOnPath_(fe(c),Me(e,n),t):null}}foreachOnPath(c,e){return this.foreachOnPath_(c,he(),e)}foreachOnPath_(c,e,t){if(Ce(c))return this;{this.value&&t(e,this.value);const n=ve(c),a=this.children.get(n);return a?a.foreachOnPath_(fe(c),Me(e,n),t):new mn(null)}}foreach(c){this.foreach_(he(),c)}foreach_(c,e){this.children.inorderTraversal((t,n)=>{n.foreach_(Me(c,t),e)}),this.value&&e(c,this.value)}foreachChild(c){this.children.inorderTraversal((e,t)=>{t.value&&c(e,t.value)})}}
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
 */class dn{constructor(c){this.writeTree_=c}static empty(){return new dn(new mn(null))}}function zn(c,e,t){if(Ce(e))return new dn(new mn(t));{const n=c.writeTree_.findRootMostValueAndPath(e);if(null!=n){const a=n.path;let r=n.value;const i=ge(a,e);return r=r.updateChild(i,t),new dn(c.writeTree_.set(a,r))}{const n=new mn(t),a=c.writeTree_.setTree(e,n);return new dn(a)}}}function pn(c,e,t){let n=c;return N(t,(c,t)=>{n=zn(n,Me(e,c),t)}),n}function Mn(c,e){if(Ce(e))return dn.empty();{const t=c.writeTree_.setTree(e,new mn(null));return new dn(t)}}function Cn(c,e){return null!=gn(c,e)}function gn(c,e){const t=c.writeTree_.findRootMostValueAndPath(e);return null!=t?c.writeTree_.get(t.path).getChild(ge(t.path,e)):null}function Hn(c){const e=[],t=c.writeTree_.value;return null!=t?t.isLeafNode()||t.forEachChild(it,(c,t)=>{e.push(new Ne(c,t))}):c.writeTree_.children.inorderTraversal((c,t)=>{null!=t.value&&e.push(new Ne(c,t.value))}),e}function yn(c,e){if(Ce(e))return c;{const t=gn(c,e);return new dn(null!=t?new mn(t):c.writeTree_.subtree(e))}}function Vn(c){return c.writeTree_.isEmpty()}function _n(c,e){return bn(he(),c.writeTree_,e)}function bn(c,e,t){if(null!=e.value)return t.updateChild(c,e.value);{let n=null;return e.children.inorderTraversal((e,a)=>{".priority"===e?(Object(r["f"])(null!==a.value,"Priority writes must always be leaf nodes"),n=a.value):t=bn(Me(c,e),a,t)}),t.getChild(c).isEmpty()||null===n||(t=t.updateChild(Me(c,".priority"),n)),t}}
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
 */function Ln(c,e){return Kn(e,c)}function wn(c,e,t,n,a){Object(r["f"])(n>c.lastWriteId,"Stacking an older write on top of newer ones"),void 0===a&&(a=!0),c.allWrites.push({path:e,snap:t,writeId:n,visible:a}),a&&(c.visibleWrites=zn(c.visibleWrites,e,t)),c.lastWriteId=n}function An(c,e){for(let t=0;t<c.allWrites.length;t++){const n=c.allWrites[t];if(n.writeId===e)return n}return null}function Sn(c,e){const t=c.allWrites.findIndex(c=>c.writeId===e);Object(r["f"])(t>=0,"removeWrite called with nonexistent writeId.");const n=c.allWrites[t];c.allWrites.splice(t,1);let a=n.visible,i=!1,s=c.allWrites.length-1;while(a&&s>=0){const e=c.allWrites[s];e.visible&&(s>=t&&kn(e,n.path)?a=!1:ye(n.path,e.path)&&(i=!0)),s--}if(a){if(i)return xn(c),!0;if(n.snap)c.visibleWrites=Mn(c.visibleWrites,n.path);else{const e=n.children;N(e,e=>{c.visibleWrites=Mn(c.visibleWrites,Me(n.path,e))})}return!0}return!1}function kn(c,e){if(c.snap)return ye(c.path,e);for(const t in c.children)if(c.children.hasOwnProperty(t)&&ye(Me(c.path,t),e))return!0;return!1}function xn(c){c.visibleWrites=Tn(c.allWrites,On,he()),c.allWrites.length>0?c.lastWriteId=c.allWrites[c.allWrites.length-1].writeId:c.lastWriteId=-1}function On(c){return c.visible}function Tn(c,e,t){let n=dn.empty();for(let a=0;a<c.length;++a){const i=c[a];if(e(i)){const c=i.path;let e;if(i.snap)ye(t,c)?(e=ge(t,c),n=zn(n,e,i.snap)):ye(c,t)&&(e=ge(c,t),n=zn(n,he(),i.snap.getChild(e)));else{if(!i.children)throw Object(r["g"])("WriteRecord should have .snap or .children");if(ye(t,c))e=ge(t,c),n=pn(n,e,i.children);else if(ye(c,t))if(e=ge(c,t),Ce(e))n=pn(n,he(),i.children);else{const c=Object(r["z"])(i.children,ve(e));if(c){const t=c.getChild(fe(e));n=zn(n,he(),t)}}}}}return n}function In(c,e,t,n,a){if(n||a){const r=yn(c.visibleWrites,e);if(!a&&Vn(r))return t;if(a||null!=t||Cn(r,he())){const r=function(c){return(c.visible||a)&&(!n||!~n.indexOf(c.writeId))&&(ye(c.path,e)||ye(e,c.path))},i=Tn(c.allWrites,r,e),s=t||mt.EMPTY_NODE;return _n(i,s)}return null}{const n=gn(c.visibleWrites,e);if(null!=n)return n;{const n=yn(c.visibleWrites,e);if(Vn(n))return t;if(null!=t||Cn(n,he())){const c=t||mt.EMPTY_NODE;return _n(n,c)}return null}}}function En(c,e,t){let n=mt.EMPTY_NODE;const a=gn(c.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(it,(c,e)=>{n=n.updateImmediateChild(c,e)}),n;if(t){const a=yn(c.visibleWrites,e);return t.forEachChild(it,(c,e)=>{const t=_n(yn(a,new le(c)),e);n=n.updateImmediateChild(c,t)}),Hn(a).forEach(c=>{n=n.updateImmediateChild(c.name,c.node)}),n}{const t=yn(c.visibleWrites,e);return Hn(t).forEach(c=>{n=n.updateImmediateChild(c.name,c.node)}),n}}function jn(c,e,t,n,a){Object(r["f"])(n||a,"Either existingEventSnap or existingServerSnap must exist");const i=Me(e,t);if(Cn(c.visibleWrites,i))return null;{const e=yn(c.visibleWrites,i);return Vn(e)?a.getChild(t):_n(e,a.getChild(t))}}function Pn(c,e,t,n){const a=Me(e,t),r=gn(c.visibleWrites,a);if(null!=r)return r;if(n.isCompleteForChild(t)){const e=yn(c.visibleWrites,a);return _n(e,n.getNode().getImmediateChild(t))}return null}function Nn(c,e){return gn(c.visibleWrites,e)}function Rn(c,e,t,n,a,r,i){let s;const o=yn(c.visibleWrites,e),l=gn(o,he());if(null!=l)s=l;else{if(null==t)return[];s=_n(o,t)}if(s=s.withIndex(i),s.isEmpty()||s.isLeafNode())return[];{const c=[],e=i.getCompare(),t=r?s.getReverseIteratorFrom(n,i):s.getIteratorFrom(n,i);let o=t.getNext();while(o&&c.length<a)0!==e(o,n)&&c.push(o),o=t.getNext();return c}}function Dn(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function Zn(c,e,t,n){return In(c.writeTree,c.treePath,e,t,n)}function qn(c,e){return En(c.writeTree,c.treePath,e)}function Fn(c,e,t,n){return jn(c.writeTree,c.treePath,e,t,n)}function $n(c,e){return Nn(c.writeTree,Me(c.treePath,e))}function Un(c,e,t,n,a,r){return Rn(c.writeTree,c.treePath,e,t,n,a,r)}function Wn(c,e,t){return Pn(c.writeTree,c.treePath,e,t)}function Bn(c,e){return Kn(Me(c.treePath,e),c.writeTree)}function Kn(c,e){return{treePath:c,writeTree:e}}
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
 */class Yn{constructor(){this.changeMap=new Map}trackChildChange(c){const e=c.type,t=c.childName;Object(r["f"])("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),Object(r["f"])(".priority"!==t,"Only non-priority child changes can be tracked.");const n=this.changeMap.get(t);if(n){const a=n.type;if("child_added"===e&&"child_removed"===a)this.changeMap.set(t,Lt(t,c.snapshotNode,n.snapshotNode));else if("child_removed"===e&&"child_added"===a)this.changeMap.delete(t);else if("child_removed"===e&&"child_changed"===a)this.changeMap.set(t,bt(t,n.oldSnap));else if("child_changed"===e&&"child_added"===a)this.changeMap.set(t,_t(t,c.snapshotNode));else{if("child_changed"!==e||"child_changed"!==a)throw Object(r["g"])("Illegal combination of changes: "+c+" occurred after "+n);this.changeMap.set(t,Lt(t,c.snapshotNode,n.oldSnap))}}else this.changeMap.set(t,c)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */class Gn{getCompleteChild(c){return null}getChildAfterChild(c,e,t){return null}}const Qn=new Gn;class Xn{constructor(c,e,t=null){this.writes_=c,this.viewCache_=e,this.optCompleteServerCache_=t}getCompleteChild(c){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(c))return e.getNode().getImmediateChild(c);{const e=null!=this.optCompleteServerCache_?new cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wn(this.writes_,c,e)}}getChildAfterChild(c,e,t){const n=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:vn(this.viewCache_),a=Un(this.writes_,n,e,1,t,c);return 0===a.length?null:a[0]}}
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
 */function Jn(c){return{filter:c}}function ca(c,e){Object(r["f"])(e.eventCache.getNode().isIndexed(c.filter.getIndex()),"Event snap not indexed"),Object(r["f"])(e.serverCache.getNode().isIndexed(c.filter.getIndex()),"Server snap not indexed")}function ea(c,e,t,n,a){const i=new Yn;let s,o;if(t.type===Wt.OVERWRITE){const l=t;l.source.fromUser?s=ra(c,e,l.path,l.snap,n,a,i):(Object(r["f"])(l.source.fromServer,"Unknown source."),o=l.source.tagged||e.serverCache.isFiltered()&&!Ce(l.path),s=aa(c,e,l.path,l.snap,n,a,o,i))}else if(t.type===Wt.MERGE){const l=t;l.source.fromUser?s=sa(c,e,l.path,l.children,n,a,i):(Object(r["f"])(l.source.fromServer,"Unknown source."),o=l.source.tagged||e.serverCache.isFiltered(),s=la(c,e,l.path,l.children,n,a,o,i))}else if(t.type===Wt.ACK_USER_WRITE){const r=t;s=r.revert?ua(c,e,r.path,n,a,i):ha(c,e,r.path,r.affectedTree,n,a,i)}else{if(t.type!==Wt.LISTEN_COMPLETE)throw Object(r["g"])("Unknown operation type: "+t.type);s=va(c,e,t.path,n,i)}const l=i.getChanges();return ta(e,s,l),{viewCache:s,changes:l}}function ta(c,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const a=n.getNode().isLeafNode()||n.getNode().isEmpty(),r=hn(c);(t.length>0||!c.eventCache.isFullyInitialized()||a&&!n.getNode().equals(r)||!n.getNode().getPriority().equals(r.getPriority()))&&t.push(Vt(hn(e)))}}function na(c,e,t,n,a,i){const s=e.eventCache;if(null!=$n(n,t))return e;{let o,l;if(Ce(t))if(Object(r["f"])(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const t=vn(e),a=t instanceof mt?t:mt.EMPTY_NODE,r=qn(n,a);o=c.filter.updateFullNode(e.eventCache.getNode(),r,i)}else{const t=Zn(n,vn(e));o=c.filter.updateFullNode(e.eventCache.getNode(),t,i)}else{const h=ve(t);if(".priority"===h){Object(r["f"])(1===ue(t),"Can't have a priority with additional path components");const a=s.getNode();l=e.serverCache.getNode();const i=Fn(n,t,a,l);o=null!=i?c.filter.updatePriority(a,i):s.getNode()}else{const r=fe(t);let v;if(s.isCompleteForChild(h)){l=e.serverCache.getNode();const c=Fn(n,t,s.getNode(),l);v=null!=c?s.getNode().getImmediateChild(h).updateChild(r,c):s.getNode().getImmediateChild(h)}else v=Wn(n,h,e.serverCache);o=null!=v?c.filter.updateChild(s.getNode(),h,v,r,a,i):s.getNode()}}return on(e,o,s.isFullyInitialized()||Ce(t),c.filter.filtersNodes())}}function aa(c,e,t,n,a,r,i,s){const o=e.serverCache;let l;const h=i?c.filter:c.filter.getIndexedFilter();if(Ce(t))l=h.updateFullNode(o.getNode(),n,null);else if(h.filtersNodes()&&!o.isFiltered()){const c=o.getNode().updateChild(t,n);l=h.updateFullNode(o.getNode(),c,null)}else{const c=ve(t);if(!o.isCompleteForPath(t)&&ue(t)>1)return e;const a=fe(t),r=o.getNode().getImmediateChild(c),i=r.updateChild(a,n);l=".priority"===c?h.updatePriority(o.getNode(),i):h.updateChild(o.getNode(),c,i,a,Qn,null)}const v=ln(e,l,o.isFullyInitialized()||Ce(t),h.filtersNodes()),u=new Xn(a,v,r);return na(c,v,t,a,u,s)}function ra(c,e,t,n,a,r,i){const s=e.eventCache;let o,l;const h=new Xn(a,e,r);if(Ce(t))l=c.filter.updateFullNode(e.eventCache.getNode(),n,i),o=on(e,l,!0,c.filter.filtersNodes());else{const a=ve(t);if(".priority"===a)l=c.filter.updatePriority(e.eventCache.getNode(),n),o=on(e,l,s.isFullyInitialized(),s.isFiltered());else{const r=fe(t),l=s.getNode().getImmediateChild(a);let v;if(Ce(r))v=n;else{const c=h.getCompleteChild(a);v=null!=c?".priority"===me(r)&&c.getChild(pe(r)).isEmpty()?c:c.updateChild(r,n):mt.EMPTY_NODE}if(l.equals(v))o=e;else{const t=c.filter.updateChild(s.getNode(),a,v,r,h,i);o=on(e,t,s.isFullyInitialized(),c.filter.filtersNodes())}}}return o}function ia(c,e){return c.eventCache.isCompleteForChild(e)}function sa(c,e,t,n,a,r,i){let s=e;return n.foreach((n,o)=>{const l=Me(t,n);ia(e,ve(l))&&(s=ra(c,s,l,o,a,r,i))}),n.foreach((n,o)=>{const l=Me(t,n);ia(e,ve(l))||(s=ra(c,s,l,o,a,r,i))}),s}function oa(c,e,t){return t.foreach((c,t)=>{e=e.updateChild(c,t)}),e}function la(c,e,t,n,a,r,i,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o,l=e;o=Ce(t)?n:new mn(null).setTree(t,n);const h=e.serverCache.getNode();return o.children.inorderTraversal((t,n)=>{if(h.hasChild(t)){const o=e.serverCache.getNode().getImmediateChild(t),h=oa(c,o,n);l=aa(c,l,new le(t),h,a,r,i,s)}}),o.children.inorderTraversal((t,n)=>{const o=!e.serverCache.isCompleteForChild(t)&&void 0===n.value;if(!h.hasChild(t)&&!o){const o=e.serverCache.getNode().getImmediateChild(t),h=oa(c,o,n);l=aa(c,l,new le(t),h,a,r,i,s)}}),l}function ha(c,e,t,n,a,r,i){if(null!=$n(a,t))return e;const s=e.serverCache.isFiltered(),o=e.serverCache;if(null!=n.value){if(Ce(t)&&o.isFullyInitialized()||o.isCompleteForPath(t))return aa(c,e,t,o.getNode().getChild(t),a,r,s,i);if(Ce(t)){let n=new mn(null);return o.getNode().forEachChild(qe,(c,e)=>{n=n.set(new le(c),e)}),la(c,e,t,n,a,r,s,i)}return e}{let l=new mn(null);return n.foreach((c,e)=>{const n=Me(t,c);o.isCompleteForPath(n)&&(l=l.set(c,o.getNode().getChild(n)))}),la(c,e,t,l,a,r,s,i)}}function va(c,e,t,n,a){const r=e.serverCache,i=ln(e,r.getNode(),r.isFullyInitialized()||Ce(t),r.isFiltered());return na(c,i,t,n,Qn,a)}function ua(c,e,t,n,a,i){let s;if(null!=$n(n,t))return e;{const o=new Xn(n,e,a),l=e.eventCache.getNode();let h;if(Ce(t)||".priority"===ve(t)){let t;if(e.serverCache.isFullyInitialized())t=Zn(n,vn(e));else{const c=e.serverCache.getNode();Object(r["f"])(c instanceof mt,"serverChildren would be complete if leaf node"),t=qn(n,c)}t=t,h=c.filter.updateFullNode(l,t,i)}else{const a=ve(t);let r=Wn(n,a,e.serverCache);null==r&&e.serverCache.isCompleteForChild(a)&&(r=l.getImmediateChild(a)),h=null!=r?c.filter.updateChild(l,a,r,fe(t),o,i):e.eventCache.getNode().hasChild(a)?c.filter.updateChild(l,a,mt.EMPTY_NODE,fe(t),o,i):l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=Zn(n,vn(e)),s.isLeafNode()&&(h=c.filter.updateFullNode(h,s,i)))}return s=e.serverCache.isFullyInitialized()||null!=$n(n,he()),on(e,h,s,c.filter.filtersNodes())}}
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
 */class fa{constructor(c,e){this.query_=c,this.eventRegistrations_=[];const t=this.query_._queryParams,n=new At(t.getIndex()),a=Ot(t);this.processor_=Jn(a);const r=e.serverCache,i=e.eventCache,s=n.updateFullNode(mt.EMPTY_NODE,r.getNode(),null),o=a.updateFullNode(mt.EMPTY_NODE,i.getNode(),null),l=new cn(s,r.isFullyInitialized(),n.filtersNodes()),h=new cn(o,i.isFullyInitialized(),a.filtersNodes());this.viewCache_=sn(h,l),this.eventGenerator_=new en(this.query_)}get query(){return this.query_}}function ma(c){return c.viewCache_.serverCache.getNode()}function da(c,e){const t=vn(c.viewCache_);return t&&(c.query._queryParams.loadsAllData()||!Ce(e)&&!t.getImmediateChild(ve(e)).isEmpty())?t.getChild(e):null}function za(c){return 0===c.eventRegistrations_.length}function pa(c,e){c.eventRegistrations_.push(e)}function Ma(c,e,t){const n=[];if(t){Object(r["f"])(null==e,"A cancel should cancel all event registrations.");const a=c.query._path;c.eventRegistrations_.forEach(c=>{const e=c.createCancelEvent(t,a);e&&n.push(e)})}if(e){let t=[];for(let n=0;n<c.eventRegistrations_.length;++n){const a=c.eventRegistrations_[n];if(a.matches(e)){if(e.hasAnyCallback()){t=t.concat(c.eventRegistrations_.slice(n+1));break}}else t.push(a)}c.eventRegistrations_=t}else c.eventRegistrations_=[];return n}function Ca(c,e,t,n){e.type===Wt.MERGE&&null!==e.source.queryId&&(Object(r["f"])(vn(c.viewCache_),"We should always have a full cache before handling merges"),Object(r["f"])(hn(c.viewCache_),"Missing event cache, even though we have a server cache"));const a=c.viewCache_,i=ea(c.processor_,a,e,t,n);return ca(c.processor_,i.viewCache),Object(r["f"])(i.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),c.viewCache_=i.viewCache,Ha(c,i.changes,i.viewCache.eventCache.getNode(),null)}function ga(c,e){const t=c.viewCache_.eventCache,n=[];if(!t.getNode().isLeafNode()){const c=t.getNode();c.forEachChild(it,(c,e)=>{n.push(_t(c,e))})}return t.isFullyInitialized()&&n.push(Vt(t.getNode())),Ha(c,n,t.getNode(),e)}function Ha(c,e,t,n){const a=n?[n]:c.eventRegistrations_;return tn(c.eventGenerator_,e,t,a)}
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
 */let ya,Va;class _a{constructor(){this.views=new Map}}function ba(c){Object(r["f"])(!ya,"__referenceConstructor has already been defined"),ya=c}function La(){return Object(r["f"])(ya,"Reference.ts has not been loaded"),ya}function wa(c){return 0===c.views.size}function Aa(c,e,t,n){const a=e.source.queryId;if(null!==a){const i=c.views.get(a);return Object(r["f"])(null!=i,"SyncTree gave us an op for an invalid query."),Ca(i,e,t,n)}{let a=[];for(const r of c.views.values())a=a.concat(Ca(r,e,t,n));return a}}function Sa(c,e,t,n,a){const r=e._queryIdentifier,i=c.views.get(r);if(!i){let c=Zn(t,a?n:null),r=!1;c?r=!0:n instanceof mt?(c=qn(t,n),r=!1):(c=mt.EMPTY_NODE,r=!1);const i=sn(new cn(c,r,!1),new cn(n,a,!1));return new fa(e,i)}return i}function ka(c,e,t,n,a,r){const i=Sa(c,e,n,a,r);return c.views.has(e._queryIdentifier)||c.views.set(e._queryIdentifier,i),pa(i,t),ga(i,t)}function xa(c,e,t,n){const a=e._queryIdentifier,r=[];let i=[];const s=ja(c);if("default"===a)for(const[o,l]of c.views.entries())i=i.concat(Ma(l,t,n)),za(l)&&(c.views.delete(o),l.query._queryParams.loadsAllData()||r.push(l.query));else{const e=c.views.get(a);e&&(i=i.concat(Ma(e,t,n)),za(e)&&(c.views.delete(a),e.query._queryParams.loadsAllData()||r.push(e.query)))}return s&&!ja(c)&&r.push(new(La())(e._repo,e._path)),{removed:r,events:i}}function Oa(c){const e=[];for(const t of c.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ta(c,e){let t=null;for(const n of c.views.values())t=t||da(n,e);return t}function Ia(c,e){const t=e._queryParams;if(t.loadsAllData())return Pa(c);{const t=e._queryIdentifier;return c.views.get(t)}}function Ea(c,e){return null!=Ia(c,e)}function ja(c){return null!=Pa(c)}function Pa(c){for(const e of c.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
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
 */function Na(c){Object(r["f"])(!Va,"__referenceConstructor has already been defined"),Va=c}function Ra(){return Object(r["f"])(Va,"Reference.ts has not been loaded"),Va}let Da=1;class Za{constructor(c){this.listenProvider_=c,this.syncPointTree_=new mn(null),this.pendingWriteTree_=Dn(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qa(c,e,t,n,a){return wn(c.pendingWriteTree_,e,t,n,a),a?Ja(c,new Xt(Bt(),e,t)):[]}function Fa(c,e,t=!1){const n=An(c.pendingWriteTree_,e),a=Sn(c.pendingWriteTree_,e);if(a){let e=new mn(null);return null!=n.snap?e=e.set(he(),!0):N(n.children,c=>{e=e.set(new le(c),!0)}),Ja(c,new Gt(n.path,e,t))}return[]}function $a(c,e,t){return Ja(c,new Xt(Kt(),e,t))}function Ua(c,e,t){const n=mn.fromObject(t);return Ja(c,new Jt(Kt(),e,n))}function Wa(c,e){return Ja(c,new Qt(Kt(),e))}function Ba(c,e,t){const n=rr(c,t);if(n){const t=ir(n),a=t.path,r=t.queryId,i=ge(a,e),s=new Qt(Yt(r),i);return sr(c,a,s)}return[]}function Ka(c,e,t,n){const a=e._path,r=c.syncPointTree_.get(a);let i=[];if(r&&("default"===e._queryIdentifier||Ea(r,e))){const s=xa(r,e,t,n);wa(r)&&(c.syncPointTree_=c.syncPointTree_.remove(a));const o=s.removed;i=s.events;const l=-1!==o.findIndex(c=>c._queryParams.loadsAllData()),h=c.syncPointTree_.findOnPath(a,(c,e)=>ja(e));if(l&&!h){const e=c.syncPointTree_.subtree(a);if(!e.isEmpty()){const t=or(e);for(let e=0;e<t.length;++e){const n=t[e],a=n.query,r=tr(c,n);c.listenProvider_.startListening(lr(a),nr(c,a),r.hashFn,r.onComplete)}}}if(!h&&o.length>0&&!n)if(l){const t=null;c.listenProvider_.stopListening(lr(e),t)}else o.forEach(e=>{const t=c.queryToTagMap.get(ar(e));c.listenProvider_.stopListening(lr(e),t)});hr(c,o)}return i}function Ya(c,e,t,n){const a=rr(c,n);if(null!=a){const n=ir(a),r=n.path,i=n.queryId,s=ge(r,e),o=new Xt(Yt(i),s,t);return sr(c,r,o)}return[]}function Ga(c,e,t,n){const a=rr(c,n);if(a){const n=ir(a),r=n.path,i=n.queryId,s=ge(r,e),o=mn.fromObject(t),l=new Jt(Yt(i),s,o);return sr(c,r,l)}return[]}function Qa(c,e,t){const n=e._path;let a=null,i=!1;c.syncPointTree_.foreachOnPath(n,(c,e)=>{const t=ge(c,n);a=a||Ta(e,t),i=i||ja(e)});let s,o=c.syncPointTree_.get(n);if(o?(i=i||ja(o),a=a||Ta(o,he())):(o=new _a,c.syncPointTree_=c.syncPointTree_.set(n,o)),null!=a)s=!0;else{s=!1,a=mt.EMPTY_NODE;const e=c.syncPointTree_.subtree(n);e.foreachChild((c,e)=>{const t=Ta(e,he());t&&(a=a.updateImmediateChild(c,t))})}const l=Ea(o,e);if(!l&&!e._queryParams.loadsAllData()){const t=ar(e);Object(r["f"])(!c.queryToTagMap.has(t),"View does not exist, but we have a tag");const n=vr();c.queryToTagMap.set(t,n),c.tagToQueryMap.set(n,t)}const h=Ln(c.pendingWriteTree_,n);let v=ka(o,e,t,h,a,s);if(!l&&!i){const t=Ia(o,e);v=v.concat(ur(c,e,t))}return v}function Xa(c,e,t){const n=!0,a=c.pendingWriteTree_,r=c.syncPointTree_.findOnPath(e,(c,t)=>{const n=ge(c,e),a=Ta(t,n);if(a)return a});return In(a,e,r,t,n)}function Ja(c,e){return cr(e,c.syncPointTree_,null,Ln(c.pendingWriteTree_,he()))}function cr(c,e,t,n){if(Ce(c.path))return er(c,e,t,n);{const a=e.get(he());null==t&&null!=a&&(t=Ta(a,he()));let r=[];const i=ve(c.path),s=c.operationForChild(i),o=e.children.get(i);if(o&&s){const c=t?t.getImmediateChild(i):null,e=Bn(n,i);r=r.concat(cr(s,o,c,e))}return a&&(r=r.concat(Aa(a,c,n,t))),r}}function er(c,e,t,n){const a=e.get(he());null==t&&null!=a&&(t=Ta(a,he()));let r=[];return e.children.inorderTraversal((e,a)=>{const i=t?t.getImmediateChild(e):null,s=Bn(n,e),o=c.operationForChild(e);o&&(r=r.concat(er(o,a,i,s)))}),a&&(r=r.concat(Aa(a,c,n,t))),r}function tr(c,e){const t=e.query,n=nr(c,t);return{hashFn:()=>{const c=ma(e)||mt.EMPTY_NODE;return c.hash()},onComplete:e=>{if("ok"===e)return n?Ba(c,t._path,n):Wa(c,t._path);{const n=q(e,t);return Ka(c,t,null,n)}}}}function nr(c,e){const t=ar(e);return c.queryToTagMap.get(t)}function ar(c){return c._path.toString()+"$"+c._queryIdentifier}function rr(c,e){return c.tagToQueryMap.get(e)}function ir(c){const e=c.indexOf("$");return Object(r["f"])(-1!==e&&e<c.length-1,"Bad queryKey."),{queryId:c.substr(e+1),path:new le(c.substr(0,e))}}function sr(c,e,t){const n=c.syncPointTree_.get(e);Object(r["f"])(n,"Missing sync point for query tag that we're tracking");const a=Ln(c.pendingWriteTree_,e);return Aa(n,t,a,null)}function or(c){return c.fold((c,e,t)=>{if(e&&ja(e)){const c=Pa(e);return[c]}{let c=[];return e&&(c=Oa(e)),N(t,(e,t)=>{c=c.concat(t)}),c}})}function lr(c){return c._queryParams.loadsAllData()&&!c._queryParams.isDefault()?new(Ra())(c._repo,c._path):c}function hr(c,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const e=ar(n),t=c.queryToTagMap.get(e);c.queryToTagMap.delete(e),c.tagToQueryMap.delete(t)}}}function vr(){return Da++}function ur(c,e,t){const n=e._path,a=nr(c,e),i=tr(c,t),s=c.listenProvider_.startListening(lr(e),a,i.hashFn,i.onComplete),o=c.syncPointTree_.subtree(n);if(a)Object(r["f"])(!ja(o.value),"If we're adding a query, it shouldn't be shadowed");else{const e=o.fold((c,e,t)=>{if(!Ce(c)&&e&&ja(e))return[Pa(e).query];{let c=[];return e&&(c=c.concat(Oa(e).map(c=>c.query))),N(t,(e,t)=>{c=c.concat(t)}),c}});for(let t=0;t<e.length;++t){const n=e[t];c.listenProvider_.stopListening(lr(n),nr(c,n))}}return s}
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
 */class fr{constructor(c){this.node_=c}getImmediateChild(c){const e=this.node_.getImmediateChild(c);return new fr(e)}node(){return this.node_}}class mr{constructor(c,e){this.syncTree_=c,this.path_=e}getImmediateChild(c){const e=Me(this.path_,c);return new mr(this.syncTree_,e)}node(){return Xa(this.syncTree_,this.path_)}}const dr=function(c){return c=c||{},c["timestamp"]=c["timestamp"]||(new Date).getTime(),c},zr=function(c,e,t){return c&&"object"===typeof c?(Object(r["f"])(".sv"in c,"Unexpected leaf node or priority contents"),"string"===typeof c[".sv"]?pr(c[".sv"],e,t):"object"===typeof c[".sv"]?Mr(c[".sv"],e):void Object(r["f"])(!1,"Unexpected server value: "+JSON.stringify(c,null,2))):c},pr=function(c,e,t){switch(c){case"timestamp":return t["timestamp"];default:Object(r["f"])(!1,"Unexpected server value: "+c)}},Mr=function(c,e,t){c.hasOwnProperty("increment")||Object(r["f"])(!1,"Unexpected server value: "+JSON.stringify(c,null,2));const n=c["increment"];"number"!==typeof n&&Object(r["f"])(!1,"Unexpected increment value: "+n);const a=e.node();if(Object(r["f"])(null!==a&&"undefined"!==typeof a,"Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return n;const i=a,s=i.getValue();return"number"!==typeof s?n:s+n},Cr=function(c,e,t,n){return Hr(e,new mr(t,c),n)},gr=function(c,e,t){return Hr(c,new fr(e),t)};function Hr(c,e,t){const n=c.getPriority().val(),a=zr(n,e.getImmediateChild(".priority"),t);let r;if(c.isLeafNode()){const n=c,r=zr(n.getValue(),e,t);return r!==n.getValue()||a!==n.getPriority().val()?new tt(r,Mt(a)):c}{const n=c;return r=n,a!==n.getPriority().val()&&(r=r.updatePriority(new tt(a))),n.forEachChild(it,(c,n)=>{const a=Hr(n,e.getImmediateChild(c),t);a!==n&&(r=r.updateImmediateChild(c,a))}),r}}
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
 */class yr{constructor(c="",e=null,t={children:{},childCount:0}){this.name=c,this.parent=e,this.node=t}}function Vr(c,e){let t=e instanceof le?e:new le(e),n=c,a=ve(t);while(null!==a){const c=Object(r["z"])(n.node.children,a)||{children:{},childCount:0};n=new yr(a,n,c),t=fe(t),a=ve(t)}return n}function _r(c){return c.node.value}function br(c,e){c.node.value=e,Or(c)}function Lr(c){return c.node.childCount>0}function wr(c){return void 0===_r(c)&&!Lr(c)}function Ar(c,e){N(c.node.children,(t,n)=>{e(new yr(t,c,n))})}function Sr(c,e,t,n){t&&!n&&e(c),Ar(c,c=>{Sr(c,e,!0,n)}),t&&n&&e(c)}function kr(c,e,t){let n=t?c:c.parent;while(null!==n){if(e(n))return!0;n=n.parent}return!1}function xr(c){return new le(null===c.parent?c.name:xr(c.parent)+"/"+c.name)}function Or(c){null!==c.parent&&Tr(c.parent,c.name,c)}function Tr(c,e,t){const n=wr(t),a=Object(r["j"])(c.node.children,e);n&&a?(delete c.node.children[e],c.node.childCount--,Or(c)):n||a||(c.node.children[e]=t.node,c.node.childCount++,Or(c))}
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
 */const Ir=/[\[\].#$\/\u0000-\u001F\u007F]/,Er=/[\[\].#$\u0000-\u001F\u007F]/,jr=10485760,Pr=function(c){return"string"===typeof c&&0!==c.length&&!Ir.test(c)},Nr=function(c){return"string"===typeof c&&0!==c.length&&!Er.test(c)},Rr=function(c){return c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),Nr(c)},Dr=function(c,e,t,n){n&&void 0===e||Zr(Object(r["n"])(c,"value"),e,t)},Zr=function(c,e,t){const n=t instanceof le?new Ve(t,c):t;if(void 0===e)throw new Error(c+"contains undefined "+we(n));if("function"===typeof e)throw new Error(c+"contains a function "+we(n)+" with contents = "+e.toString());if(S(e))throw new Error(c+"contains "+e.toString()+" "+we(n));if("string"===typeof e&&e.length>jr/3&&Object(r["A"])(e)>jr)throw new Error(c+"contains a string greater than "+jr+" utf8 bytes "+we(n)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let t=!1,a=!1;if(N(e,(e,r)=>{if(".value"===e)t=!0;else if(".priority"!==e&&".sv"!==e&&(a=!0,!Pr(e)))throw new Error(c+" contains an invalid key ("+e+") "+we(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');_e(n,e),Zr(c,r,n),be(n)}),t&&a)throw new Error(c+' contains ".value" child '+we(n)+" in addition to actual children.")}},qr=function(c,e,t,n){if((!n||void 0!==t)&&!Nr(t))throw new Error(Object(r["n"])(c,e)+'was an invalid path = "'+t+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Fr=function(c,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qr(c,e,t,n)},$r=function(c,e){if(".info"===ve(e))throw new Error(c+" failed = Can't modify data under /.info/")},Ur=function(c,e){const t=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Pr(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==t.length&&!Rr(t))throw new Error(Object(r["n"])(c,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Wr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Br(c,e){let t=null;for(let n=0;n<e.length;n++){const a=e[n],r=a.getPath();null===t||He(r,t.path)||(c.eventLists_.push(t),t=null),null===t&&(t={events:[],path:r}),t.events.push(a)}t&&c.eventLists_.push(t)}function Kr(c,e,t){Br(c,t),Gr(c,c=>He(c,e))}function Yr(c,e,t){Br(c,t),Gr(c,c=>ye(c,e)||ye(e,c))}function Gr(c,e){c.recursionDepth_++;let t=!0;for(let n=0;n<c.eventLists_.length;n++){const a=c.eventLists_[n];if(a){const r=a.path;e(r)?(Qr(c.eventLists_[n]),c.eventLists_[n]=null):t=!1}}t&&(c.eventLists_=[]),c.recursionDepth_--}function Qr(c){for(let e=0;e<c.events.length;e++){const t=c.events[e];if(null!==t){c.events[e]=null;const n=t.getEventRunner();g&&V("event: "+t.toString()),B(n)}}}
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
 */const Xr="repo_interrupt",Jr=25;class ci{constructor(c,e,t,n){this.repoInfo_=c,this.forceRestClient_=e,this.authTokenProvider_=t,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Wr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pt(),this.transactionQueueTree_=new yr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ei(c,e,t){if(c.stats_=zc(c.repoInfo_),c.forceRestClient_||K())c.server_=new Et(c.repoInfo_,(e,t,n,a)=>{ai(c,e,t,n,a)},c.authTokenProvider_,c.appCheckProvider_),setTimeout(()=>ri(c,!0),0);else{if("undefined"!==typeof t&&null!==t){if("object"!==typeof t)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(r["C"])(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}c.persistentConnection_=new Pe(c.repoInfo_,e,(e,t,n,a)=>{ai(c,e,t,n,a)},e=>{ri(c,e)},e=>{ii(c,e)},c.authTokenProvider_,c.appCheckProvider_,t),c.server_=c.persistentConnection_}c.authTokenProvider_.addTokenChangeListener(e=>{c.server_.refreshAuthToken(e)}),c.appCheckProvider_.addTokenChangeListener(e=>{c.server_.refreshAppCheckToken(e.token)}),c.statsReporter_=pc(c.repoInfo_,()=>new Ut(c.stats_,c.server_)),c.infoData_=new jt,c.infoSyncTree_=new Za({startListening:(e,t,n,a)=>{let r=[];const i=c.infoData_.getNode(e._path);return i.isEmpty()||(r=$a(c.infoSyncTree_,e._path,i),setTimeout(()=>{a("ok")},0)),r},stopListening:()=>{}}),si(c,"connected",!1),c.serverSyncTree_=new Za({startListening:(e,t,n,a)=>(c.server_.listen(e,n,t,(t,n)=>{const r=a(t,n);Yr(c.eventQueue_,e._path,r)}),[]),stopListening:(e,t)=>{c.server_.unlisten(e,t)}})}function ti(c){const e=c.infoData_.getNode(new le(".info/serverTimeOffset")),t=e.val()||0;return(new Date).getTime()+t}function ni(c){return dr({timestamp:ti(c)})}function ai(c,e,t,n,a){c.dataUpdateCount++;const i=new le(e);t=c.interceptServerDataCallback_?c.interceptServerDataCallback_(e,t):t;let s=[];if(a)if(n){const e=Object(r["x"])(t,c=>Mt(c));s=Ga(c.serverSyncTree_,i,e,a)}else{const e=Mt(t);s=Ya(c.serverSyncTree_,i,e,a)}else if(n){const e=Object(r["x"])(t,c=>Mt(c));s=Ua(c.serverSyncTree_,i,e)}else{const e=Mt(t);s=$a(c.serverSyncTree_,i,e)}let o=i;s.length>0&&(o=Ci(c,i)),Yr(c.eventQueue_,o,s)}function ri(c,e){si(c,"connected",e),!1===e&&hi(c)}function ii(c,e){N(e,(e,t)=>{si(c,e,t)})}function si(c,e,t){const n=new le("/.info/"+e),a=Mt(t);c.infoData_.updateSnapshot(n,a);const r=$a(c.infoSyncTree_,n,a);Yr(c.eventQueue_,n,r)}function oi(c){return c.nextWriteId_++}function li(c,e,t,n,a){mi(c,"set",{path:e.toString(),value:t,priority:n});const r=ni(c),i=Mt(t,n),s=Xa(c.serverSyncTree_,e),o=gr(i,s,r),l=oi(c),h=qa(c.serverSyncTree_,e,o,l,!0);Br(c.eventQueue_,h),c.server_.put(e.toString(),i.val(!0),(t,n)=>{const r="ok"===t;r||w("set at "+e+" failed: "+t);const i=Fa(c.serverSyncTree_,l,!r);Yr(c.eventQueue_,e,i),di(c,a,t,n)});const v=bi(c,e);Ci(c,v),Yr(c.eventQueue_,v,[])}function hi(c){mi(c,"onDisconnectEvents");const e=ni(c),t=Pt();Rt(c.onDisconnect_,he(),(n,a)=>{const r=Cr(n,a,c.serverSyncTree_,e);Nt(t,n,r)});let n=[];Rt(t,he(),(e,t)=>{n=n.concat($a(c.serverSyncTree_,e,t));const a=bi(c,e);Ci(c,a)}),c.onDisconnect_=Pt(),Yr(c.eventQueue_,he(),n)}function vi(c,e,t){let n;n=".info"===ve(e._path)?Qa(c.infoSyncTree_,e,t):Qa(c.serverSyncTree_,e,t),Kr(c.eventQueue_,e._path,n)}function ui(c,e,t){let n;n=".info"===ve(e._path)?Ka(c.infoSyncTree_,e,t):Ka(c.serverSyncTree_,e,t),Kr(c.eventQueue_,e._path,n)}function fi(c){c.persistentConnection_&&c.persistentConnection_.interrupt(Xr)}function mi(c,...e){let t="";c.persistentConnection_&&(t=c.persistentConnection_.id+":"),V(t,...e)}function di(c,e,t,n){e&&B(()=>{if("ok"===t)e(null);else{const c=(t||"error").toUpperCase();let a=c;n&&(a+=": "+n);const r=new Error(a);r.code=c,e(r)}})}function zi(c,e,t){return Xa(c.serverSyncTree_,e,t)||mt.EMPTY_NODE}function pi(c,e=c.transactionQueueTree_){if(e||_i(c,e),_r(e)){const t=yi(c,e);Object(r["f"])(t.length>0,"Sending zero length transaction queue");const n=t.every(c=>0===c.status);n&&Mi(c,xr(e),t)}else Lr(e)&&Ar(e,e=>{pi(c,e)})}function Mi(c,e,t){const n=t.map(c=>c.currentWriteId),a=zi(c,e,n);let i=a;const s=a.hash();for(let h=0;h<t.length;h++){const c=t[h];Object(r["f"])(0===c.status,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const n=ge(e,c.path);i=i.updateChild(n,c.currentOutputSnapshotRaw)}const o=i.val(!0),l=e;c.server_.put(l.toString(),o,n=>{mi(c,"transaction put response",{path:l.toString(),status:n});let a=[];if("ok"===n){const n=[];for(let e=0;e<t.length;e++)t[e].status=2,a=a.concat(Fa(c.serverSyncTree_,t[e].currentWriteId)),t[e].onComplete&&n.push(()=>t[e].onComplete(null,!0,t[e].currentOutputSnapshotResolved)),t[e].unwatcher();_i(c,Vr(c.transactionQueueTree_,e)),pi(c,c.transactionQueueTree_),Yr(c.eventQueue_,e,a);for(let c=0;c<n.length;c++)B(n[c])}else{if("datastale"===n)for(let c=0;c<t.length;c++)3===t[c].status?t[c].status=4:t[c].status=0;else{w("transaction at "+l.toString()+" failed: "+n);for(let c=0;c<t.length;c++)t[c].status=4,t[c].abortReason=n}Ci(c,e)}},s)}function Ci(c,e){const t=Hi(c,e),n=xr(t),a=yi(c,t);return gi(c,a,n),n}function gi(c,e,t){if(0===e.length)return;const n=[];let a=[];const i=e.filter(c=>0===c.status),s=i.map(c=>c.currentWriteId);for(let o=0;o<e.length;o++){const i=e[o],l=ge(t,i.path);let h,v=!1;if(Object(r["f"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===i.status)v=!0,h=i.abortReason,a=a.concat(Fa(c.serverSyncTree_,i.currentWriteId,!0));else if(0===i.status)if(i.retryCount>=Jr)v=!0,h="maxretry",a=a.concat(Fa(c.serverSyncTree_,i.currentWriteId,!0));else{const t=zi(c,i.path,s);i.currentInputSnapshot=t;const n=e[o].update(t.val());if(void 0!==n){Zr("transaction failed: Data returned ",n,i.path);let e=Mt(n);const o="object"===typeof n&&null!=n&&Object(r["j"])(n,".priority");o||(e=e.updatePriority(t.getPriority()));const l=i.currentWriteId,h=ni(c),v=gr(e,t,h);i.currentOutputSnapshotRaw=e,i.currentOutputSnapshotResolved=v,i.currentWriteId=oi(c),s.splice(s.indexOf(l),1),a=a.concat(qa(c.serverSyncTree_,i.path,v,i.currentWriteId,i.applyLocally)),a=a.concat(Fa(c.serverSyncTree_,l,!0))}else v=!0,h="nodata",a=a.concat(Fa(c.serverSyncTree_,i.currentWriteId,!0))}Yr(c.eventQueue_,t,a),a=[],v&&(e[o].status=2,function(c){setTimeout(c,Math.floor(0))}(e[o].unwatcher),e[o].onComplete&&("nodata"===h?n.push(()=>e[o].onComplete(null,!1,e[o].currentInputSnapshot)):n.push(()=>e[o].onComplete(new Error(h),!1,null))))}_i(c,c.transactionQueueTree_);for(let r=0;r<n.length;r++)B(n[r]);pi(c,c.transactionQueueTree_)}function Hi(c,e){let t,n=c.transactionQueueTree_;t=ve(e);while(null!==t&&void 0===_r(n))n=Vr(n,t),e=fe(e),t=ve(e);return n}function yi(c,e){const t=[];return Vi(c,e,t),t.sort((c,e)=>c.order-e.order),t}function Vi(c,e,t){const n=_r(e);if(n)for(let a=0;a<n.length;a++)t.push(n[a]);Ar(e,e=>{Vi(c,e,t)})}function _i(c,e){const t=_r(e);if(t){let c=0;for(let e=0;e<t.length;e++)2!==t[e].status&&(t[c]=t[e],c++);t.length=c,br(e,t.length>0?t:void 0)}Ar(e,e=>{_i(c,e)})}function bi(c,e){const t=xr(Hi(c,e)),n=Vr(c.transactionQueueTree_,e);return kr(n,e=>{Li(c,e)}),Li(c,n),Sr(n,e=>{Li(c,e)}),t}function Li(c,e){const t=_r(e);if(t){const n=[];let a=[],i=-1;for(let e=0;e<t.length;e++)3===t[e].status||(1===t[e].status?(Object(r["f"])(i===e-1,"All SENT items should be at beginning of queue."),i=e,t[e].status=3,t[e].abortReason="set"):(Object(r["f"])(0===t[e].status,"Unexpected transaction status in abort"),t[e].unwatcher(),a=a.concat(Fa(c.serverSyncTree_,t[e].currentWriteId,!0)),t[e].onComplete&&n.push(t[e].onComplete.bind(null,new Error("set"),!1,null))));-1===i?br(e,void 0):t.length=i+1,Yr(c.eventQueue_,xr(e),a);for(let c=0;c<n.length;c++)B(n[c])}}
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
 */function wi(c){let e="";const t=c.split("/");for(let a=0;a<t.length;a++)if(t[a].length>0){let c=t[a];try{c=decodeURIComponent(c.replace(/\+/g," "))}catch(n){}e+="/"+c}return e}function Ai(c){const e={};"?"===c.charAt(0)&&(c=c.substring(1));for(const t of c.split("&")){if(0===t.length)continue;const n=t.split("=");2===n.length?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):w(`Invalid query segment '${t}' in query '${c}'`)}return e}const Si=function(c,e){const t=ki(c),n=t.namespace;"firebase.com"===t.domain&&L(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===t.domain||L("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||A();const a="ws"===t.scheme||"wss"===t.scheme;return{repoInfo:new hc(t.host,t.secure,n,e,a,"",n!==t.subdomain),path:new le(t.pathString)}},ki=function(c){let e="",t="",n="",a="",r="",i=!0,s="https",o=443;if("string"===typeof c){let l=c.indexOf("//");l>=0&&(s=c.substring(0,l-1),c=c.substring(l+2));let h=c.indexOf("/");-1===h&&(h=c.length);let v=c.indexOf("?");-1===v&&(v=c.length),e=c.substring(0,Math.min(h,v)),h<v&&(a=wi(c.substring(h,v)));const u=Ai(c.substring(Math.min(c.length,v)));l=e.indexOf(":"),l>=0?(i="https"===s||"wss"===s,o=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if("localhost"===f.toLowerCase())t="localhost";else if(f.split(".").length<=2)t=f;else{const c=e.indexOf(".");n=e.substring(0,c).toLowerCase(),t=e.substring(c+1),r=n}"ns"in u&&(r=u["ns"])}return{host:e,port:o,domain:t,subdomain:n,secure:i,scheme:s,pathString:a,namespace:r}};
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
class xi{constructor(c,e,t,n){this.eventType=c,this.eventRegistration=e,this.snapshot=t,this.prevName=n}getPath(){const c=this.snapshot.ref;return"value"===this.eventType?c._path:c.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(r["C"])(this.snapshot.exportVal())}}class Oi{constructor(c,e,t){this.eventRegistration=c,this.error=e,this.path=t}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class Ti{constructor(c,e){this.snapshotCallback=c,this.cancelCallback=e}onValue(c,e){this.snapshotCallback.call(null,c,e)}onCancel(c){return Object(r["f"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,c)}get hasCancelCallback(){return!!this.cancelCallback}matches(c){return this.snapshotCallback===c.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===c.snapshotCallback.userCallback&&this.snapshotCallback.context===c.snapshotCallback.context}}
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
class Ii{constructor(c,e,t,n){this._repo=c,this._path=e,this._queryParams=t,this._orderByCalled=n}get key(){return Ce(this._path)?null:me(this._path)}get ref(){return new Ei(this._repo,this._path)}get _queryIdentifier(){const c=It(this._queryParams),e=j(c);return"{}"===e?"default":e}get _queryObject(){return It(this._queryParams)}isEqual(c){if(c=Object(r["o"])(c),!(c instanceof Ii))return!1;const e=this._repo===c._repo,t=He(this._path,c._path),n=this._queryIdentifier===c._queryIdentifier;return e&&t&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+de(this._path)}}class Ei extends Ii{constructor(c,e){super(c,e,new xt,!1)}get parent(){const c=pe(this._path);return null===c?null:new Ei(this._repo,c)}get root(){let c=this;while(null!==c.parent)c=c.parent;return c}}class ji{constructor(c,e,t){this._node=c,this.ref=e,this._index=t}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(c){const e=new le(c),t=Ni(this.ref,c);return new ji(this._node.getChild(e),t,it)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(c){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,(e,t)=>c(new ji(t,Ni(this.ref,e),it)))}hasChild(c){const e=new le(c);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pi(c,e){return c=Object(r["o"])(c),c._checkNotDeleted("ref"),void 0!==e?Ni(c._root,e):c._root}function Ni(c,e){return c=Object(r["o"])(c),null===ve(c._path)?Fr("child","path",e,!1):qr("child","path",e,!1),new Ei(c._repo,Me(c._path,e))}function Ri(c,e){c=Object(r["o"])(c),$r("set",c._path),Dr("set",e,c._path,!1);const t=new r["a"];return li(c._repo,c._path,e,null,t.wrapCallback(()=>{})),t.promise}class Di{constructor(c){this.callbackContext=c}respondsTo(c){return"value"===c}createEvent(c,e){const t=e._queryParams.getIndex();return new xi("value",this,new ji(c.snapshotNode,new Ei(e._repo,e._path),t))}getEventRunner(c){return"cancel"===c.getEventType()?()=>this.callbackContext.onCancel(c.error):()=>this.callbackContext.onValue(c.snapshot,null)}createCancelEvent(c,e){return this.callbackContext.hasCancelCallback?new Oi(this,c,e):null}matches(c){return c instanceof Di&&(!c.callbackContext||!this.callbackContext||c.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Zi{constructor(c,e){this.eventType=c,this.callbackContext=e}respondsTo(c){let e="children_added"===c?"child_added":c;return e="children_removed"===e?"child_removed":e,this.eventType===e}createCancelEvent(c,e){return this.callbackContext.hasCancelCallback?new Oi(this,c,e):null}createEvent(c,e){Object(r["f"])(null!=c.childName,"Child events should have a childName.");const t=Ni(new Ei(e._repo,e._path),c.childName),n=e._queryParams.getIndex();return new xi(c.type,this,new ji(c.snapshotNode,t,n),c.prevName)}getEventRunner(c){return"cancel"===c.getEventType()?()=>this.callbackContext.onCancel(c.error):()=>this.callbackContext.onValue(c.snapshot,c.prevName)}matches(c){return c instanceof Zi&&(this.eventType===c.eventType&&(!this.callbackContext||!c.callbackContext||this.callbackContext.matches(c.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function qi(c,e,t,n,a){let r;if("object"===typeof n&&(r=void 0,a=n),"function"===typeof n&&(r=n),a&&a.onlyOnce){const e=t,n=(t,n)=>{ui(c._repo,c,s),e(t,n)};n.userCallback=t.userCallback,n.context=t.context,t=n}const i=new Ti(t,r||void 0),s="value"===e?new Di(i):new Zi(e,i);return vi(c._repo,c,s),()=>ui(c._repo,c,s)}function Fi(c,e,t,n){return qi(c,"value",e,t,n)}ba(Ei),Na(Ei);
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
const $i="FIREBASE_DATABASE_EMULATOR_HOST",Ui={};let Wi=!1;function Bi(e,t,n,a,r){let i=a||e.options.databaseURL;void 0===i&&(e.options.projectId||L("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),V("Using default host for project ",e.options.projectId),i=e.options.projectId+"-default-rtdb.firebaseio.com");let s,o=Si(i,r),l=o.repoInfo,h=void 0;"undefined"!==typeof c&&(h=Object({NODE_ENV:"production",BASE_URL:""})[$i]),h?(s=!0,i=`http://${h}?ns=${l.namespace}`,o=Si(i,r),l=o.repoInfo):s=!o.repoInfo.secure;const v=r&&s?new X(X.OWNER):new Q(e.name,e.options,t);Ur("Invalid Firebase Database URL",o),Ce(o.path)||L("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Yi(l,e,v,new G(e.name,n));return new Gi(u,e)}function Ki(c,e){const t=Ui[e];t&&t[c.key]===c||L(`Database ${e}(${c.repoInfo_}) has already been deleted.`),fi(c),delete t[c.key]}function Yi(c,e,t,n){let a=Ui[e.name];a||(a={},Ui[e.name]=a);let r=a[c.toURLString()];return r&&L("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ci(c,Wi,t,n),a[c.toURLString()]=r,r}class Gi{constructor(c,e){this._repoInternal=c,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ei(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ei(this._repo,he())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Ki(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(c){null===this._rootInternal&&L("Cannot call "+c+" on a deleted database.")}}function Qi(c=Object(n["d"])(),e){return Object(n["b"])(c,"database").getImmediate({identifier:e})}
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
function Xi(c){h(n["a"]),Object(n["c"])(new a["a"]("database",(c,{instanceIdentifier:e})=>{const t=c.getProvider("app").getImmediate(),n=c.getProvider("auth-internal"),a=c.getProvider("app-check-internal");return Bi(t,n,a,e)},"PUBLIC").setMultipleInstances(!0)),Object(n["f"])(s,o,c),Object(n["f"])(s,o,"esm2017")}
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
 */Pe.prototype.simpleListen=function(c,e){this.sendRequest("q",{p:c},e)},Pe.prototype.echo=function(c,e){this.sendRequest("echo",{d:c},e)};Xi()}).call(this,t("4362"))},5606:function(c,e,t){"use strict";t.d(e,"a",(function(){return W})),t.d(e,"b",(function(){return q})),t.d(e,"c",(function(){return Z})),t.d(e,"d",(function(){return K})),t.d(e,"e",(function(){return B})),t.d(e,"f",(function(){return Y}));var n=t("ffa6"),a=t("4fc1"),r=t("1fd5");
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
class i{constructor(c){this.container=c}getPlatformInfoString(){const c=this.container.getProviders();return c.map(c=>{if(s(c)){const e=c.getImmediate();return`${e.library}/${e.version}`}return null}).filter(c=>c).join(" ")}}function s(c){const e=c.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const o="@firebase/app",l="0.7.4",h=new a["b"]("@firebase/app"),v="@firebase/app-compat",u="@firebase/analytics-compat",f="@firebase/analytics",m="@firebase/app-check-compat",d="@firebase/app-check",z="@firebase/auth",p="@firebase/auth-compat",M="@firebase/database",C="@firebase/database-compat",g="@firebase/functions",H="@firebase/functions-compat",y="@firebase/installations",V="@firebase/installations-compat",_="@firebase/messaging",b="@firebase/messaging-compat",L="@firebase/performance",w="@firebase/performance-compat",A="@firebase/remote-config",S="@firebase/remote-config-compat",k="@firebase/storage",x="@firebase/storage-compat",O="@firebase/firestore",T="@firebase/firestore-compat",I="firebase",E="9.1.3",j="[DEFAULT]",P={[o]:"fire-core",[v]:"fire-core-compat",[f]:"fire-analytics",[u]:"fire-analytics-compat",[d]:"fire-app-check",[m]:"fire-app-check-compat",[z]:"fire-auth",[p]:"fire-auth-compat",[M]:"fire-rtdb",[C]:"fire-rtdb-compat",[g]:"fire-fn",[H]:"fire-fn-compat",[y]:"fire-iid",[V]:"fire-iid-compat",[_]:"fire-fcm",[b]:"fire-fcm-compat",[L]:"fire-perf",[w]:"fire-perf-compat",[A]:"fire-rc",[S]:"fire-rc-compat",[k]:"fire-gcs",[x]:"fire-gcs-compat",[O]:"fire-fst",[T]:"fire-fst-compat","fire-js":"fire-js",[I]:"fire-js-all"},N=new Map,R=new Map;function D(c,e){try{c.container.addComponent(e)}catch(t){h.debug(`Component ${e.name} failed to register with FirebaseApp ${c.name}`,t)}}function Z(c){const e=c.name;if(R.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;R.set(e,c);for(const t of N.values())D(t,c);return!0}function q(c,e){return c.container.getProvider(e)}
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
const F={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$=new r["b"]("app","Firebase",F);
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
class U{constructor(c,e,t){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new n["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}
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
 */const W=E;function B(c,e={}){if("object"!==typeof e){const c=e;e={name:c}}const t=Object.assign({name:j,automaticDataCollectionEnabled:!1},e),a=t.name;if("string"!==typeof a||!a)throw $.create("bad-app-name",{appName:String(a)});const i=N.get(a);if(i){if(Object(r["m"])(c,i.options)&&Object(r["m"])(t,i.config))return i;throw $.create("duplicate-app",{appName:a})}const s=new n["b"](a);for(const n of R.values())s.addComponent(n);const o=new U(c,t,s);return N.set(a,o),o}function K(c=j){const e=N.get(c);if(!e)throw $.create("no-app",{appName:c});return e}function Y(c,e,t){var a;let r=null!==(a=P[c])&&void 0!==a?a:c;t&&(r+="-"+t);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const c=[`Unable to register library "${r}" with version "${e}":`];return i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&c.push("and"),s&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(c.join(" "))}Z(new n["a"](r+"-version",()=>({library:r,version:e}),"VERSION"))}
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
function G(c){Z(new n["a"]("platform-logger",c=>new i(c),"PRIVATE")),Y(o,l,c),Y(o,l,"esm2017"),Y("fire-js","")}G("")},5692:function(c,e,t){var n=t("c430"),a=t("c6cd");(c.exports=function(c,e){return a[c]||(a[c]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(c,e,t){var n=t("d066"),a=t("241c"),r=t("7418"),i=t("825a");c.exports=n("Reflect","ownKeys")||function(c){var e=a.f(i(c)),t=r.f;return t?e.concat(t(c)):e}},5926:function(c,e){var t=Math.ceil,n=Math.floor;c.exports=function(c){var e=+c;return e!==e||0===e?0:(e>0?n:t)(e)}},"59ed":function(c,e,t){var n=t("1626"),a=t("0d51");c.exports=function(c){if(n(c))return c;throw TypeError(a(c)+" is not a function")}},"5c6c":function(c,e){c.exports=function(c,e){return{enumerable:!(1&c),configurable:!(2&c),writable:!(4&c),value:e}}},"5e77":function(c,e,t){var n=t("83ab"),a=t("1a2d"),r=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,s=a(r,"name"),o=s&&"something"===function(){}.name,l=s&&(!n||n&&i(r,"name").configurable);c.exports={EXISTS:s,PROPER:o,CONFIGURABLE:l}},"605d":function(c,e,t){var n=t("c6b6"),a=t("da84");c.exports="process"==n(a.process)},6069:function(c,e){c.exports="object"==typeof window},"60da":function(c,e,t){"use strict";var n=t("83ab"),a=t("d039"),r=t("df75"),i=t("7418"),s=t("d1e7"),o=t("7b0b"),l=t("44ad"),h=Object.assign,v=Object.defineProperty;c.exports=!h||a((function(){if(n&&1!==h({b:1},h(v({},"a",{enumerable:!0,get:function(){v(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var c={},e={},t=Symbol(),a="abcdefghijklmnopqrst";return c[t]=7,a.split("").forEach((function(c){e[c]=c})),7!=h({},c)[t]||r(h({},e)).join("")!=a}))?function(c,e){var t=o(c),a=arguments.length,h=1,v=i.f,u=s.f;while(a>h){var f,m=l(arguments[h++]),d=v?r(m).concat(v(m)):r(m),z=d.length,p=0;while(z>p)f=d[p++],n&&!u.call(m,f)||(t[f]=m[f])}return t}:h},"66ce":function(c,e,t){"use strict";var n=t("51b0");t.d(e,"a",(function(){return n["a"]})),t.d(e,"b",(function(){return n["b"]})),t.d(e,"c",(function(){return n["c"]})),t.d(e,"d",(function(){return n["d"]}))},"68ee":function(c,e,t){var n=t("d039"),a=t("1626"),r=t("f5df"),i=t("d066"),s=t("8925"),o=[],l=i("Reflect","construct"),h=/^\s*(?:class|function)\b/,v=h.exec,u=!h.exec((function(){})),f=function(c){if(!a(c))return!1;try{return l(Object,o,c),!0}catch(e){return!1}},m=function(c){if(!a(c))return!1;switch(r(c)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return u||!!v.call(h,s(c))};c.exports=!l||n((function(){var c;return f(f.call)||!f(Object)||!f((function(){c=!0}))||c}))?m:f},"69f3":function(c,e,t){var n,a,r,i=t("7f9a"),s=t("da84"),o=t("861d"),l=t("9112"),h=t("1a2d"),v=t("c6cd"),u=t("f772"),f=t("d012"),m="Object already initialized",d=s.WeakMap,z=function(c){return r(c)?a(c):n(c,{})},p=function(c){return function(e){var t;if(!o(e)||(t=a(e)).type!==c)throw TypeError("Incompatible receiver, "+c+" required");return t}};if(i||v.state){var M=v.state||(v.state=new d),C=M.get,g=M.has,H=M.set;n=function(c,e){if(g.call(M,c))throw new TypeError(m);return e.facade=c,H.call(M,c,e),e},a=function(c){return C.call(M,c)||{}},r=function(c){return g.call(M,c)}}else{var y=u("state");f[y]=!0,n=function(c,e){if(h(c,y))throw new TypeError(m);return e.facade=c,l(c,y,e),e},a=function(c){return h(c,y)?c[y]:{}},r=function(c){return h(c,y)}}c.exports={set:n,get:a,has:r,enforce:z,getterFor:p}},"6eeb":function(c,e,t){var n=t("da84"),a=t("1626"),r=t("1a2d"),i=t("9112"),s=t("ce4e"),o=t("8925"),l=t("69f3"),h=t("5e77").CONFIGURABLE,v=l.get,u=l.enforce,f=String(String).split("String");(c.exports=function(c,e,t,o){var l,v=!!o&&!!o.unsafe,m=!!o&&!!o.enumerable,d=!!o&&!!o.noTargetGet,z=o&&void 0!==o.name?o.name:e;a(t)&&("Symbol("===String(z).slice(0,7)&&(z="["+String(z).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!r(t,"name")||h&&t.name!==z)&&i(t,"name",z),l=u(t),l.source||(l.source=f.join("string"==typeof z?z:""))),c!==n?(v?!d&&c[e]&&(m=!0):delete c[e],m?c[e]=t:i(c,e,t)):m?c[e]=t:s(e,t)})(Function.prototype,"toString",(function(){return a(this)&&v(this).source||o(this)}))},7051:function(c,e,t){(function(c){
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
function p(c){const e=new Uint8Array(c),t=btoa(String.fromCharCode(...e));return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function M(c){const e="=".repeat((4-c.length%4)%4),t=(c+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;++r)a[r]=n.charCodeAt(r);return a}
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
 */(function(c){c[c["DATA_MESSAGE"]=1]="DATA_MESSAGE",c[c["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(d||(d={})),function(c){c["PUSH_RECEIVED"]="push-received",c["NOTIFICATION_CLICKED"]="notification-clicked"}(z||(z={}));const C="fcm_token_details_db",g=5,H="fcm_token_object_Store";async function y(c){if("databases"in indexedDB){const c=await indexedDB.databases(),e=c.map(c=>c.name);if(!e.includes(C))return null}let e=null;const t=await Object(a["openDb"])(C,g,async t=>{var n;if(t.oldVersion<2)return;if(!t.objectStoreNames.contains(H))return;const a=t.transaction.objectStore(H),r=await a.index("fcmSenderId").get(c);if(await a.clear(),r)if(2===t.oldVersion){const c=r;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:null!==(n=c.createTime)&&void 0!==n?n:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"===typeof c.vapidKey?c.vapidKey:p(c.vapidKey)}}}else if(3===t.oldVersion){const c=r;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:p(c.auth),p256dh:p(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:p(c.vapidKey)}}}else if(4===t.oldVersion){const c=r;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:p(c.auth),p256dh:p(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:p(c.vapidKey)}}}});return t.close(),await Object(a["deleteDb"])(C),await Object(a["deleteDb"])("fcm_vapid_details_db"),await Object(a["deleteDb"])("undefined"),V(e)?e:null}function V(c){if(!c||!c.subscriptionOptions)return!1;const{subscriptionOptions:e}=c;return"number"===typeof c.createTime&&c.createTime>0&&"string"===typeof c.token&&c.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
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
 */const _="firebase-messaging-database",b=1,L="firebase-messaging-store";let w=null;function A(){return w||(w=Object(a["openDb"])(_,b,c=>{switch(c.oldVersion){case 0:c.createObjectStore(L)}})),w}async function S(c){const e=O(c),t=await A(),n=await t.transaction(L).objectStore(L).get(e);if(n)return n;{const e=await y(c.appConfig.senderId);if(e)return await k(c,e),e}}async function k(c,e){const t=O(c),n=await A(),a=n.transaction(L,"readwrite");return await a.objectStore(L).put(e,t),await a.complete,e}async function x(c){const e=O(c),t=await A(),n=t.transaction(L,"readwrite");await n.objectStore(L).delete(e),await n.complete}function O({appConfig:c}){return c.appId}
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
 */const T={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},I=new r["b"]("messaging","Messaging",T);
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
async function E(c,e){const t=await R(c),n=D(e),a={method:"POST",headers:t,body:JSON.stringify(n)};let r;try{const e=await fetch(N(c.appConfig),a);r=await e.json()}catch(i){throw I.create("token-subscribe-failed",{errorInfo:i})}if(r.error){const c=r.error.message;throw I.create("token-subscribe-failed",{errorInfo:c})}if(!r.token)throw I.create("token-subscribe-no-token");return r.token}async function j(c,e){const t=await R(c),n=D(e.subscriptionOptions),a={method:"PATCH",headers:t,body:JSON.stringify(n)};let r;try{const t=await fetch(`${N(c.appConfig)}/${e.token}`,a);r=await t.json()}catch(i){throw I.create("token-update-failed",{errorInfo:i})}if(r.error){const c=r.error.message;throw I.create("token-update-failed",{errorInfo:c})}if(!r.token)throw I.create("token-update-no-token");return r.token}async function P(c,e){const t=await R(c),n={method:"DELETE",headers:t};try{const t=await fetch(`${N(c.appConfig)}/${e}`,n),a=await t.json();if(a.error){const c=a.error.message;throw I.create("token-unsubscribe-failed",{errorInfo:c})}}catch(a){throw I.create("token-unsubscribe-failed",{errorInfo:a})}}function N({projectId:c}){return`${h}/projects/${c}/registrations`}async function R({appConfig:c,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})}function D({p256dh:c,auth:e,endpoint:t,vapidKey:n}){const a={web:{endpoint:t,auth:e,p256dh:c}};return n!==l&&(a.web.applicationPubKey=n),a}
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
 */const Z=6048e5;async function q(c){const e=await W(c.swRegistration,c.vapidKey),t={vapidKey:c.vapidKey,swScope:c.swRegistration.scope,endpoint:e.endpoint,auth:p(e.getKey("auth")),p256dh:p(e.getKey("p256dh"))},n=await S(c.firebaseDependencies);if(n){if(B(n.subscriptionOptions,t))return Date.now()>=n.createTime+Z?$(c,{token:n.token,createTime:Date.now(),subscriptionOptions:t}):n.token;try{await P(c.firebaseDependencies,n.token)}catch(a){console.warn(a)}return U(c.firebaseDependencies,t)}return U(c.firebaseDependencies,t)}async function F(c){const e=await S(c.firebaseDependencies);e&&(await P(c.firebaseDependencies,e.token),await x(c.firebaseDependencies));const t=await c.swRegistration.pushManager.getSubscription();return!t||t.unsubscribe()}async function $(c,e){try{const t=await j(c.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await k(c.firebaseDependencies,n),t}catch(t){throw await F(c),t}}async function U(c,e){const t=await E(c,e),n={token:t,createTime:Date.now(),subscriptionOptions:e};return await k(c,n),n.token}async function W(c,e){const t=await c.pushManager.getSubscription();return t||c.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:M(e)})}function B(c,e){const t=e.vapidKey===c.vapidKey,n=e.endpoint===c.endpoint,a=e.auth===c.auth,r=e.p256dh===c.p256dh;return t&&n&&a&&r}
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
 */function K(c){const e={from:c.from,collapseKey:c.collapse_key,messageId:c.fcm_message_id};return Y(e,c),G(e,c),Q(e,c),e}function Y(c,e){if(!e.notification)return;c.notification={};const t=e.notification.title;t&&(c.notification.title=t);const n=e.notification.body;n&&(c.notification.body=n);const a=e.notification.image;a&&(c.notification.image=a)}function G(c,e){e.data&&(c.data=e.data)}function Q(c,e){if(!e.fcmOptions)return;c.fcmOptions={};const t=e.fcmOptions.link;t&&(c.fcmOptions.link=t);const n=e.fcmOptions.analytics_label;n&&(c.fcmOptions.analyticsLabel=n)}
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
 */async function ac(c,e){if(e||c.swRegistration||await nc(c),e||!c.swRegistration){if(!(e instanceof ServiceWorkerRegistration))throw I.create("invalid-sw-registration");c.swRegistration=e}}
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
 */async function rc(c,e){e?c.vapidKey=e:c.vapidKey||(c.vapidKey=l)}
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
 */async function ic(c,e){if(!navigator)throw I.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw I.create("permission-blocked");return await rc(c,null===e||void 0===e?void 0:e.vapidKey),await ac(c,null===e||void 0===e?void 0:e.serviceWorkerRegistration),q(c)}
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
 */async function sc(c,e,t){const n=oc(e),a=await c.firebaseDependencies.analyticsProvider.get();a.logEvent(n,{message_id:t[v],message_name:t[u],message_time:t[f],message_device_time:Math.floor(Date.now()/1e3)})}function oc(c){switch(c){case z.NOTIFICATION_CLICKED:return"notification_open";case z.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */mc()},7839:function(c,e){c.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(c,e,t){var n=t("1d80");c.exports=function(c){return Object(n(c))}},"7c73":function(c,e,t){var n,a=t("825a"),r=t("37e8"),i=t("7839"),s=t("d012"),o=t("1be4"),l=t("cc12"),h=t("f772"),v=">",u="<",f="prototype",m="script",d=h("IE_PROTO"),z=function(){},p=function(c){return u+m+v+c+u+"/"+m+v},M=function(c){c.write(p("")),c.close();var e=c.parentWindow.Object;return c=null,e},C=function(){var c,e=l("iframe"),t="java"+m+":";return e.style.display="none",o.appendChild(e),e.src=String(t),c=e.contentWindow.document,c.open(),c.write(p("document.F=Object")),c.close(),c.F},g=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}g="undefined"!=typeof document?document.domain&&n?M(n):C():M(n);var c=i.length;while(c--)delete g[f][i[c]];return g()};s[d]=!0,c.exports=Object.create||function(c,e){var t;return null!==c?(z[f]=a(c),t=new z,z[f]=null,t[d]=c):t=g(),void 0===e?t:r(t,e)}},"7dd0":function(c,e,t){"use strict";var n=t("23e7"),a=t("c430"),r=t("5e77"),i=t("1626"),s=t("9ed3"),o=t("e163"),l=t("d2bb"),h=t("d44e"),v=t("9112"),u=t("6eeb"),f=t("b622"),m=t("3f8c"),d=t("ae93"),z=r.PROPER,p=r.CONFIGURABLE,M=d.IteratorPrototype,C=d.BUGGY_SAFARI_ITERATORS,g=f("iterator"),H="keys",y="values",V="entries",_=function(){return this};c.exports=function(c,e,t,r,f,d,b){s(t,e,r);var L,w,A,S=function(c){if(c===f&&I)return I;if(!C&&c in O)return O[c];switch(c){case H:return function(){return new t(this,c)};case y:return function(){return new t(this,c)};case V:return function(){return new t(this,c)}}return function(){return new t(this)}},k=e+" Iterator",x=!1,O=c.prototype,T=O[g]||O["@@iterator"]||f&&O[f],I=!C&&T||S(f),E="Array"==e&&O.entries||T;if(E&&(L=o(E.call(new c)),L!==Object.prototype&&L.next&&(a||o(L)===M||(l?l(L,M):i(L[g])||u(L,g,_)),h(L,k,!0,!0),a&&(m[k]=_))),z&&f==y&&T&&T.name!==y&&(!a&&p?v(O,"name",y):(x=!0,I=function(){return T.call(this)})),f)if(w={values:S(y),keys:d?I:S(H),entries:S(V)},b)for(A in w)(C||x||!(A in O))&&u(O,A,w[A]);else n({target:e,proto:!0,forced:C||x},w);return a&&!b||O[g]===I||u(O,g,I,{name:f}),m[e]=I,w}},"7f9a":function(c,e,t){var n=t("da84"),a=t("1626"),r=t("8925"),i=n.WeakMap;c.exports=a(i)&&/native code/.test(r(i))},"825a":function(c,e,t){var n=t("861d");c.exports=function(c){if(n(c))return c;throw TypeError(String(c)+" is not an object")}},"83ab":function(c,e,t){var n=t("d039");c.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(c,e,t){var n=t("1626");c.exports=function(c){return"object"===typeof c?null!==c:n(c)}},8925:function(c,e,t){var n=t("1626"),a=t("c6cd"),r=Function.toString;n(a.inspectSource)||(a.inspectSource=function(c){return r.call(c)}),c.exports=a.inspectSource},"90e3":function(c,e){var t=0,n=Math.random();c.exports=function(c){return"Symbol("+String(void 0===c?"":c)+")_"+(++t+n).toString(36)}},9112:function(c,e,t){var n=t("83ab"),a=t("9bf2"),r=t("5c6c");c.exports=n?function(c,e,t){return a.f(c,e,r(1,t))}:function(c,e,t){return c[e]=t,c}},9483:function(c,e,t){"use strict";t.d(e,"a",(function(){return r}));var n,a=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function r(c,e){void 0===e&&(e={});var t=e.registrationOptions;void 0===t&&(t={}),delete e.registrationOptions;var r=function(c){var t=[],n=arguments.length-1;while(n-- >0)t[n]=arguments[n+1];e&&e[c]&&e[c].apply(e,t)};"serviceWorker"in navigator&&n.then((function(){a()?(o(c,r,t),navigator.serviceWorker.ready.then((function(c){r("ready",c)})).catch((function(c){return i(r,c)}))):(s(c,r,t),navigator.serviceWorker.ready.then((function(c){r("ready",c)})).catch((function(c){return i(r,c)})))}))}function i(c,e){navigator.onLine||c("offline"),c("error",e)}function s(c,e,t){navigator.serviceWorker.register(c,t).then((function(c){e("registered",c),c.waiting?e("updated",c):c.onupdatefound=function(){e("updatefound",c);var t=c.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?e("updated",c):e("cached",c))}}})).catch((function(c){return i(e,c)}))}function o(c,e,t){fetch(c).then((function(n){404===n.status?(e("error",new Error("Service worker not found at "+c)),l()):-1===n.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+c+" to have javascript content-type, but received "+n.headers.get("content-type"))),l()):s(c,e,t)})).catch((function(c){return i(e,c)}))}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(c){c.unregister()})).catch((function(c){return i(emit,c)}))}"undefined"!==typeof window&&(n="undefined"!==typeof Promise?new Promise((function(c){return window.addEventListener("load",c)})):{then:function(c){return window.addEventListener("load",c)}})},"94ca":function(c,e,t){var n=t("d039"),a=t("1626"),r=/#|\.prototype\./,i=function(c,e){var t=o[s(c)];return t==h||t!=l&&(a(e)?n(e):!!e)},s=i.normalize=function(c){return String(c).replace(r,".").toLowerCase()},o=i.data={},l=i.NATIVE="N",h=i.POLYFILL="P";c.exports=i},"96cf":function(c,e,t){var n=function(c){"use strict";var e,t=Object.prototype,n=t.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function o(c,e,t){return Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),c[e]}try{o({},"")}catch(O){o=function(c,e,t){return c[e]=t}}function l(c,e,t,n){var a=e&&e.prototype instanceof z?e:z,r=Object.create(a.prototype),i=new S(n||[]);return r._invoke=b(c,t,i),r}function h(c,e,t){try{return{type:"normal",arg:c.call(e,t)}}catch(O){return{type:"throw",arg:O}}}c.wrap=l;var v="suspendedStart",u="suspendedYield",f="executing",m="completed",d={};function z(){}function p(){}function M(){}var C={};o(C,r,(function(){return this}));var g=Object.getPrototypeOf,H=g&&g(g(k([])));H&&H!==t&&n.call(H,r)&&(C=H);var y=M.prototype=z.prototype=Object.create(C);function V(c){["next","throw","return"].forEach((function(e){o(c,e,(function(c){return this._invoke(e,c)}))}))}function _(c,e){function t(a,r,i,s){var o=h(c[a],c,r);if("throw"!==o.type){var l=o.arg,v=l.value;return v&&"object"===typeof v&&n.call(v,"__await")?e.resolve(v.__await).then((function(c){t("next",c,i,s)}),(function(c){t("throw",c,i,s)})):e.resolve(v).then((function(c){l.value=c,i(l)}),(function(c){return t("throw",c,i,s)}))}s(o.arg)}var a;function r(c,n){function r(){return new e((function(e,a){t(c,n,e,a)}))}return a=a?a.then(r,r):r()}this._invoke=r}function b(c,e,t){var n=v;return function(a,r){if(n===f)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw r;return x()}t.method=a,t.arg=r;while(1){var i=t.delegate;if(i){var s=L(i,t);if(s){if(s===d)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===v)throw n=m,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=f;var o=h(c,e,t);if("normal"===o.type){if(n=t.done?m:u,o.arg===d)continue;return{value:o.arg,done:t.done}}"throw"===o.type&&(n=m,t.method="throw",t.arg=o.arg)}}}function L(c,t){var n=c.iterator[t.method];if(n===e){if(t.delegate=null,"throw"===t.method){if(c.iterator["return"]&&(t.method="return",t.arg=e,L(c,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=h(n,c.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var r=a.arg;return r?r.done?(t[c.resultName]=r.value,t.next=c.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function w(c){var e={tryLoc:c[0]};1 in c&&(e.catchLoc=c[1]),2 in c&&(e.finallyLoc=c[2],e.afterLoc=c[3]),this.tryEntries.push(e)}function A(c){var e=c.completion||{};e.type="normal",delete e.arg,c.completion=e}function S(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(w,this),this.reset(!0)}function k(c){if(c){var t=c[r];if(t)return t.call(c);if("function"===typeof c.next)return c;if(!isNaN(c.length)){var a=-1,i=function t(){while(++a<c.length)if(n.call(c,a))return t.value=c[a],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}return{next:x}}function x(){return{value:e,done:!0}}return p.prototype=M,o(y,"constructor",M),o(M,"constructor",p),p.displayName=o(M,s,"GeneratorFunction"),c.isGeneratorFunction=function(c){var e="function"===typeof c&&c.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,M):(c.__proto__=M,o(c,s,"GeneratorFunction")),c.prototype=Object.create(y),c},c.awrap=function(c){return{__await:c}},V(_.prototype),o(_.prototype,i,(function(){return this})),c.AsyncIterator=_,c.async=function(e,t,n,a,r){void 0===r&&(r=Promise);var i=new _(l(e,t,n,a),r);return c.isGeneratorFunction(t)?i:i.next().then((function(c){return c.done?c.value:i.next()}))},V(y),o(y,s,"Generator"),o(y,r,(function(){return this})),o(y,"toString",(function(){return"[object Generator]"})),c.keys=function(c){var e=[];for(var t in c)e.push(t);return e.reverse(),function t(){while(e.length){var n=e.pop();if(n in c)return t.value=n,t.done=!1,t}return t.done=!0,t}},c.values=k,S.prototype={constructor:S,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!c)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var c=this.tryEntries[0],e=c.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var t=this;function a(n,a){return s.type="throw",s.arg=c,t.next=n,a&&(t.method="next",t.arg=e),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var o=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(o&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(c,e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===c||"continue"===c)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=c,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(i)},complete:function(c,e){if("throw"===c.type)throw c.arg;return"break"===c.type||"continue"===c.type?this.next=c.arg:"return"===c.type?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):"normal"===c.type&&e&&(this.next=e),d},finish:function(c){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===c)return this.complete(t.completion,t.afterLoc),A(t),d}},catch:function(c){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===c){var n=t.completion;if("throw"===n.type){var a=n.arg;A(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(c,t,n){return this.delegate={iterator:k(c),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=e),d}},c}(c.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"9a1f":function(c,e,t){var n=t("59ed"),a=t("825a"),r=t("35a1");c.exports=function(c,e){var t=arguments.length<2?r(c):e;if(n(t))return a(t.call(c));throw TypeError(String(c)+" is not iterable")}},"9bf2":function(c,e,t){var n=t("83ab"),a=t("0cfb"),r=t("825a"),i=t("a04b"),s=Object.defineProperty;e.f=n?s:function(c,e,t){if(r(c),e=i(e),r(t),a)try{return s(c,e,t)}catch(n){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(c[e]=t.value),c}},"9dbb":function(c,e,t){(function(c,t){t(e)})(0,(function(c){"use strict";function e(c){return Array.prototype.slice.call(c)}function t(c){return new Promise((function(e,t){c.onsuccess=function(){e(c.result)},c.onerror=function(){t(c.error)}}))}function n(c,e,n){var a,r=new Promise((function(r,i){a=c[e].apply(c,n),t(a).then(r,i)}));return r.request=a,r}function a(c,e,t){var a=n(c,e,t);return a.then((function(c){if(c)return new h(c,a.request)}))}function r(c,e,t){t.forEach((function(t){Object.defineProperty(c.prototype,t,{get:function(){return this[e][t]},set:function(c){this[e][t]=c}})}))}function i(c,e,t,a){a.forEach((function(a){a in t.prototype&&(c.prototype[a]=function(){return n(this[e],a,arguments)})}))}function s(c,e,t,n){n.forEach((function(n){n in t.prototype&&(c.prototype[n]=function(){return this[e][n].apply(this[e],arguments)})}))}function o(c,e,t,n){n.forEach((function(n){n in t.prototype&&(c.prototype[n]=function(){return a(this[e],n,arguments)})}))}function l(c){this._index=c}function h(c,e){this._cursor=c,this._request=e}function v(c){this._store=c}function u(c){this._tx=c,this.complete=new Promise((function(e,t){c.oncomplete=function(){e()},c.onerror=function(){t(c.error)},c.onabort=function(){t(c.error)}}))}function f(c,e,t){this._db=c,this.oldVersion=e,this.transaction=new u(t)}function m(c){this._db=c}function d(c,e,t){var a=n(indexedDB,"open",[c,e]),r=a.request;return r&&(r.onupgradeneeded=function(c){t&&t(new f(r.result,c.oldVersion,r.transaction))}),a.then((function(c){return new m(c)}))}function z(c){return n(indexedDB,"deleteDatabase",[c])}r(l,"_index",["name","keyPath","multiEntry","unique"]),i(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),o(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(h,"_cursor",["direction","key","primaryKey","value"]),i(h,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(c){c in IDBCursor.prototype&&(h.prototype[c]=function(){var e=this,n=arguments;return Promise.resolve().then((function(){return e._cursor[c].apply(e._cursor,n),t(e._request).then((function(c){if(c)return new h(c,e._request)}))}))})})),v.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},v.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},r(v,"_store",["name","keyPath","indexNames","autoIncrement"]),i(v,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),o(v,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(v,"_store",IDBObjectStore,["deleteIndex"]),u.prototype.objectStore=function(){return new v(this._tx.objectStore.apply(this._tx,arguments))},r(u,"_tx",["objectStoreNames","mode"]),s(u,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new v(this._db.createObjectStore.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),s(f,"_db",IDBDatabase,["deleteObjectStore","close"]),m.prototype.transaction=function(){return new u(this._db.transaction.apply(this._db,arguments))},r(m,"_db",["name","version","objectStoreNames"]),s(m,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(c){[v,l].forEach((function(t){c in t.prototype&&(t.prototype[c.replace("open","iterate")]=function(){var t=e(arguments),n=t[t.length-1],a=this._store||this._index,r=a[c].apply(a,t.slice(0,-1));r.onsuccess=function(){n(r.result)}})}))})),[l,v].forEach((function(c){c.prototype.getAll||(c.prototype.getAll=function(c,e){var t=this,n=[];return new Promise((function(a){t.iterateCursor(c,(function(c){c?(n.push(c.value),void 0===e||n.length!=e?c.continue():a(n)):a(n)}))}))})})),c.openDb=d,c.deleteDb=z,Object.defineProperty(c,"__esModule",{value:!0})}))},"9ed3":function(c,e,t){"use strict";var n=t("ae93").IteratorPrototype,a=t("7c73"),r=t("5c6c"),i=t("d44e"),s=t("3f8c"),o=function(){return this};c.exports=function(c,e,t){var l=e+" Iterator";return c.prototype=a(n,{next:r(1,t)}),i(c,l,!1,!0),s[l]=o,c}},a04b:function(c,e,t){var n=t("c04e"),a=t("d9b5");c.exports=function(c){var e=n(c,"string");return a(e)?e:String(e)}},a4b4:function(c,e,t){var n=t("342f");c.exports=/web0s(?!.*chrome)/i.test(n)},a79d:function(c,e,t){"use strict";var n=t("23e7"),a=t("c430"),r=t("fea9"),i=t("d039"),s=t("d066"),o=t("1626"),l=t("4840"),h=t("cdf9"),v=t("6eeb"),u=!!r&&i((function(){r.prototype["finally"].call({then:function(){}},(function(){}))}));if(n({target:"Promise",proto:!0,real:!0,forced:u},{finally:function(c){var e=l(this,s("Promise")),t=o(c);return this.then(t?function(t){return h(e,c()).then((function(){return t}))}:c,t?function(t){return h(e,c()).then((function(){throw t}))}:c)}}),!a&&o(r)){var f=s("Promise").prototype["finally"];r.prototype["finally"]!==f&&v(r.prototype,"finally",f,{unsafe:!0})}},ae93:function(c,e,t){"use strict";var n,a,r,i=t("d039"),s=t("1626"),o=t("7c73"),l=t("e163"),h=t("6eeb"),v=t("b622"),u=t("c430"),f=v("iterator"),m=!1;[].keys&&(r=[].keys(),"next"in r?(a=l(l(r)),a!==Object.prototype&&(n=a)):m=!0);var d=void 0==n||i((function(){var c={};return n[f].call(c)!==c}));d?n={}:u&&(n=o(n)),s(n[f])||h(n,f,(function(){return this})),c.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:m}},b041:function(c,e,t){"use strict";var n=t("00ee"),a=t("f5df");c.exports=n?{}.toString:function(){return"[object "+a(this)+"]"}},b575:function(c,e,t){var n,a,r,i,s,o,l,h,v=t("da84"),u=t("06cf").f,f=t("2cf4").set,m=t("1cdc"),d=t("d4c3"),z=t("a4b4"),p=t("605d"),M=v.MutationObserver||v.WebKitMutationObserver,C=v.document,g=v.process,H=v.Promise,y=u(v,"queueMicrotask"),V=y&&y.value;V||(n=function(){var c,e;p&&(c=g.domain)&&c.exit();while(a){e=a.fn,a=a.next;try{e()}catch(t){throw a?i():r=void 0,t}}r=void 0,c&&c.enter()},m||p||z||!M||!C?!d&&H&&H.resolve?(l=H.resolve(void 0),l.constructor=H,h=l.then,i=function(){h.call(l,n)}):i=p?function(){g.nextTick(n)}:function(){f.call(v,n)}:(s=!0,o=C.createTextNode(""),new M(n).observe(o,{characterData:!0}),i=function(){o.data=s=!s})),c.exports=V||function(c){var e={fn:c,next:void 0};r&&(r.next=e),a||(a=e,i()),r=e}},b622:function(c,e,t){var n=t("da84"),a=t("5692"),r=t("1a2d"),i=t("90e3"),s=t("4930"),o=t("fdbf"),l=a("wks"),h=n.Symbol,v=o?h:h&&h.withoutSetter||i;c.exports=function(c){return r(l,c)&&(s||"string"==typeof l[c])||(s&&r(h,c)?l[c]=h[c]:l[c]=v("Symbol."+c)),l[c]}},c04e:function(c,e,t){var n=t("861d"),a=t("d9b5"),r=t("dc4a"),i=t("485a"),s=t("b622"),o=s("toPrimitive");c.exports=function(c,e){if(!n(c)||a(c))return c;var t,s=r(c,o);if(s){if(void 0===e&&(e="default"),t=s.call(c,e),!n(t)||a(t))return t;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(c,e)}},c430:function(c,e){c.exports=!1},c6b6:function(c,e){var t={}.toString;c.exports=function(c){return t.call(c).slice(8,-1)}},c6cd:function(c,e,t){var n=t("da84"),a=t("ce4e"),r="__core-js_shared__",i=n[r]||a(r,{});c.exports=i},c8ba:function(c,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}c.exports=t},ca84:function(c,e,t){var n=t("1a2d"),a=t("fc6a"),r=t("4d64").indexOf,i=t("d012");c.exports=function(c,e){var t,s=a(c),o=0,l=[];for(t in s)!n(i,t)&&n(s,t)&&l.push(t);while(e.length>o)n(s,t=e[o++])&&(~r(l,t)||l.push(t));return l}},cc12:function(c,e,t){var n=t("da84"),a=t("861d"),r=n.document,i=a(r)&&a(r.createElement);c.exports=function(c){return i?r.createElement(c):{}}},cca6:function(c,e,t){var n=t("23e7"),a=t("60da");n({target:"Object",stat:!0,forced:Object.assign!==a},{assign:a})},cdf9:function(c,e,t){var n=t("825a"),a=t("861d"),r=t("f069");c.exports=function(c,e){if(n(c),a(e)&&e.constructor===c)return e;var t=r.f(c),i=t.resolve;return i(e),t.promise}},ce4e:function(c,e,t){var n=t("da84");c.exports=function(c,e){try{Object.defineProperty(n,c,{value:e,configurable:!0,writable:!0})}catch(t){n[c]=e}return e}},d012:function(c,e){c.exports={}},d039:function(c,e){c.exports=function(c){try{return!!c()}catch(e){return!0}}},d066:function(c,e,t){var n=t("da84"),a=t("1626"),r=function(c){return a(c)?c:void 0};c.exports=function(c,e){return arguments.length<2?r(n[c]):n[c]&&n[c][e]}},d1e7:function(c,e,t){"use strict";var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,r=a&&!n.call({1:2},1);e.f=r?function(c){var e=a(this,c);return!!e&&e.enumerable}:n},d2bb:function(c,e,t){var n=t("825a"),a=t("3bbe");c.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c,e=!1,t={};try{c=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,c.call(t,[]),e=t instanceof Array}catch(r){}return function(t,r){return n(t),a(r),e?c.call(t,r):t.__proto__=r,t}}():void 0)},d2e8:function(c,e,t){"use strict";t("1472");var n=t("ffa6"),a=t("9dbb"),r=t("1fd5"),i=t("5606");
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
function d(c){const e=new Uint8Array(c),t=btoa(String.fromCharCode(...e));return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function z(c){const e="=".repeat((4-c.length%4)%4),t=(c+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;++r)a[r]=n.charCodeAt(r);return a}
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
 */(function(c){c[c["DATA_MESSAGE"]=1]="DATA_MESSAGE",c[c["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(f||(f={})),function(c){c["PUSH_RECEIVED"]="push-received",c["NOTIFICATION_CLICKED"]="notification-clicked"}(m||(m={}));const p="fcm_token_details_db",M=5,C="fcm_token_object_Store";async function g(c){if("databases"in indexedDB){const c=await indexedDB.databases(),e=c.map(c=>c.name);if(!e.includes(p))return null}let e=null;const t=await Object(a["openDb"])(p,M,async t=>{var n;if(t.oldVersion<2)return;if(!t.objectStoreNames.contains(C))return;const a=t.transaction.objectStore(C),r=await a.index("fcmSenderId").get(c);if(await a.clear(),r)if(2===t.oldVersion){const c=r;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:null!==(n=c.createTime)&&void 0!==n?n:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"===typeof c.vapidKey?c.vapidKey:d(c.vapidKey)}}}else if(3===t.oldVersion){const c=r;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:d(c.auth),p256dh:d(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:d(c.vapidKey)}}}else if(4===t.oldVersion){const c=r;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:d(c.auth),p256dh:d(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:d(c.vapidKey)}}}});return t.close(),await Object(a["deleteDb"])(p),await Object(a["deleteDb"])("fcm_vapid_details_db"),await Object(a["deleteDb"])("undefined"),H(e)?e:null}function H(c){if(!c||!c.subscriptionOptions)return!1;const{subscriptionOptions:e}=c;return"number"===typeof c.createTime&&c.createTime>0&&"string"===typeof c.token&&c.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
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
 */const y="firebase-messaging-database",V=1,_="firebase-messaging-store";let b=null;function L(){return b||(b=Object(a["openDb"])(y,V,c=>{switch(c.oldVersion){case 0:c.createObjectStore(_)}})),b}async function w(c){const e=k(c),t=await L(),n=await t.transaction(_).objectStore(_).get(e);if(n)return n;{const e=await g(c.appConfig.senderId);if(e)return await A(c,e),e}}async function A(c,e){const t=k(c),n=await L(),a=n.transaction(_,"readwrite");return await a.objectStore(_).put(e,t),await a.complete,e}async function S(c){const e=k(c),t=await L(),n=t.transaction(_,"readwrite");await n.objectStore(_).delete(e),await n.complete}function k({appConfig:c}){return c.appId}
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
 */const x={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},O=new r["b"]("messaging","Messaging",x);
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
async function T(c,e){const t=await P(c),n=N(e),a={method:"POST",headers:t,body:JSON.stringify(n)};let r;try{const e=await fetch(j(c.appConfig),a);r=await e.json()}catch(i){throw O.create("token-subscribe-failed",{errorInfo:i})}if(r.error){const c=r.error.message;throw O.create("token-subscribe-failed",{errorInfo:c})}if(!r.token)throw O.create("token-subscribe-no-token");return r.token}async function I(c,e){const t=await P(c),n=N(e.subscriptionOptions),a={method:"PATCH",headers:t,body:JSON.stringify(n)};let r;try{const t=await fetch(`${j(c.appConfig)}/${e.token}`,a);r=await t.json()}catch(i){throw O.create("token-update-failed",{errorInfo:i})}if(r.error){const c=r.error.message;throw O.create("token-update-failed",{errorInfo:c})}if(!r.token)throw O.create("token-update-no-token");return r.token}async function E(c,e){const t=await P(c),n={method:"DELETE",headers:t};try{const t=await fetch(`${j(c.appConfig)}/${e}`,n),a=await t.json();if(a.error){const c=a.error.message;throw O.create("token-unsubscribe-failed",{errorInfo:c})}}catch(a){throw O.create("token-unsubscribe-failed",{errorInfo:a})}}function j({projectId:c}){return`${o}/projects/${c}/registrations`}async function P({appConfig:c,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":c.apiKey,"x-goog-firebase-installations-auth":"FIS "+t})}function N({p256dh:c,auth:e,endpoint:t,vapidKey:n}){const a={web:{endpoint:t,auth:e,p256dh:c}};return n!==s&&(a.web.applicationPubKey=n),a}
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
 */const R=6048e5;async function D(c){const e=await $(c.swRegistration,c.vapidKey),t={vapidKey:c.vapidKey,swScope:c.swRegistration.scope,endpoint:e.endpoint,auth:d(e.getKey("auth")),p256dh:d(e.getKey("p256dh"))},n=await w(c.firebaseDependencies);if(n){if(U(n.subscriptionOptions,t))return Date.now()>=n.createTime+R?q(c,{token:n.token,createTime:Date.now(),subscriptionOptions:t}):n.token;try{await E(c.firebaseDependencies,n.token)}catch(a){console.warn(a)}return F(c.firebaseDependencies,t)}return F(c.firebaseDependencies,t)}async function Z(c){const e=await w(c.firebaseDependencies);e&&(await E(c.firebaseDependencies,e.token),await S(c.firebaseDependencies));const t=await c.swRegistration.pushManager.getSubscription();return!t||t.unsubscribe()}async function q(c,e){try{const t=await I(c.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await A(c.firebaseDependencies,n),t}catch(t){throw await Z(c),t}}async function F(c,e){const t=await T(c,e),n={token:t,createTime:Date.now(),subscriptionOptions:e};return await A(c,n),n.token}async function $(c,e){const t=await c.pushManager.getSubscription();return t||c.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:z(e)})}function U(c,e){const t=e.vapidKey===c.vapidKey,n=e.endpoint===c.endpoint,a=e.auth===c.auth,r=e.p256dh===c.p256dh;return t&&n&&a&&r}
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
 */function W(c){const e={from:c.from,collapseKey:c.collapse_key,messageId:c.fcm_message_id};return B(e,c),K(e,c),Y(e,c),e}function B(c,e){if(!e.notification)return;c.notification={};const t=e.notification.title;t&&(c.notification.title=t);const n=e.notification.body;n&&(c.notification.body=n);const a=e.notification.image;a&&(c.notification.image=a)}function K(c,e){e.data&&(c.data=e.data)}function Y(c,e){if(!e.fcmOptions)return;c.fcmOptions={};const t=e.fcmOptions.link;t&&(c.fcmOptions.link=t);const n=e.fcmOptions.analytics_label;n&&(c.fcmOptions.analyticsLabel=n)}
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
 */async function X(c,e){const t=J(e,await c.firebaseDependencies.installations.getId());cc(c,t)}function J(c,e){var t,n;const a={};return c.from&&(a.project_number=c.from),c.fcm_message_id&&(a.message_id=c.fcm_message_id),a.instance_id=e,c.notification?a.message_type=f.DISPLAY_NOTIFICATION.toString():a.message_type=f.DATA_MESSAGE.toString(),a.sdk_platform=v.toString(),a.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),c.collapse_key&&(a.collapse_key=c.collapse_key),a.event=u.toString(),(null===(t=c.fcmOptions)||void 0===t?void 0:t.analytics_label)&&(a.analytics_label=null===(n=c.fcmOptions)||void 0===n?void 0:n.analytics_label),a}function cc(c,e){const t={};t.event_time_ms=Math.floor(Date.now()).toString(),t.source_extension_json_proto3=JSON.stringify(e),c.logEvents.push(t)}function ec(c,e){const t=[];for(let n=0;n<c.length;n++)t.push(c.charAt(n)),n<e.length&&t.push(e.charAt(n));return t.join("")}
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
 */async function tc(c,e){var t,n;const{newSubscription:a}=c;if(!a)return void await Z(e);const r=await w(e.firebaseDependencies);await Z(e),e.vapidKey=null!==(n=null===(t=null===r||void 0===r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:s,await D(e)}async function nc(c,e){const t=ic(c);if(!t)return;e.deliveryMetricsExportedToBigQueryEnabled&&await X(e,t);const n=await hc();if(oc(n))return lc(n,t);if(t.notification&&await vc(rc(t)),e&&e.onBackgroundMessageHandler){const c=W(t);"function"===typeof e.onBackgroundMessageHandler?e.onBackgroundMessageHandler(c):e.onBackgroundMessageHandler.next(c)}}async function ac(c){var e,t;const n=null===(t=null===(e=c.notification)||void 0===e?void 0:e.data)||void 0===t?void 0:t[l];if(!n)return;if(c.action)return;c.stopImmediatePropagation(),c.notification.close();const a=uc(n);if(!a)return;const r=new URL(a,self.location.href),i=new URL(self.location.origin);if(r.host!==i.host)return;let s=await sc(r);return s?s=await s.focus():(s=await self.clients.openWindow(a),await Q(3e3)),s?(n.messageType=m.NOTIFICATION_CLICKED,n.isFirebaseMessaging=!0,s.postMessage(n)):void 0}function rc(c){const e=Object.assign({},c.notification);return e.data={[l]:c},e}function ic({data:c}){if(!c)return null;try{return c.json()}catch(e){return null}}async function sc(c){const e=await hc();for(const t of e){const e=new URL(t.url,self.location.href);if(c.host===e.host)return t}return null}function oc(c){return c.some(c=>"visible"===c.visibilityState&&!c.url.startsWith("chrome-extension://"))}function lc(c,e){e.isFirebaseMessaging=!0,e.messageType=m.PUSH_RECEIVED;for(const t of c)t.postMessage(e)}function hc(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function vc(c){var e;const{actions:t}=c,{maxActions:n}=Notification;return t&&n&&t.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(e=c.title)&&void 0!==e?e:"",c)}function uc(c){var e,t,n;const a=null!==(t=null===(e=c.fcmOptions)||void 0===e?void 0:e.link)&&void 0!==t?t:null===(n=c.notification)||void 0===n?void 0:n.click_action;return a||(G(c.data)?self.location.origin:null)}
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
 */const zc=c=>{const e=new dc(c.getProvider("app").getImmediate(),c.getProvider("installations-internal").getImmediate(),c.getProvider("analytics-internal"));return self.addEventListener("push",c=>{c.waitUntil(nc(c,e))}),self.addEventListener("pushsubscriptionchange",c=>{c.waitUntil(tc(c,e))}),self.addEventListener("notificationclick",c=>{c.waitUntil(ac(c))}),e};function pc(){Object(i["c"])(new n["a"]("messaging-sw",zc,"PUBLIC"))}
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
pc()},d3b7:function(c,e,t){var n=t("00ee"),a=t("6eeb"),r=t("b041");n||a(Object.prototype,"toString",r,{unsafe:!0})},d44e:function(c,e,t){var n=t("9bf2").f,a=t("1a2d"),r=t("b622"),i=r("toStringTag");c.exports=function(c,e,t){c&&!a(c=t?c:c.prototype,i)&&n(c,i,{configurable:!0,value:e})}},d4c3:function(c,e,t){var n=t("342f"),a=t("da84");c.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==a.Pebble},d9b5:function(c,e,t){var n=t("1626"),a=t("d066"),r=t("fdbf");c.exports=r?function(c){return"symbol"==typeof c}:function(c){var e=a("Symbol");return n(e)&&Object(c)instanceof e}},da84:function(c,e,t){(function(e){var t=function(c){return c&&c.Math==Math&&c};c.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,t("c8ba"))},dc4a:function(c,e,t){var n=t("59ed");c.exports=function(c,e){var t=c[e];return null==t?void 0:n(t)}},df75:function(c,e,t){var n=t("ca84"),a=t("7839");c.exports=Object.keys||function(c){return n(c,a)}},df7c:function(c,e,t){(function(c){function t(c,e){for(var t=0,n=c.length-1;n>=0;n--){var a=c[n];"."===a?c.splice(n,1):".."===a?(c.splice(n,1),t++):t&&(c.splice(n,1),t--)}if(e)for(;t--;t)c.unshift("..");return c}function n(c){"string"!==typeof c&&(c+="");var e,t=0,n=-1,a=!0;for(e=c.length-1;e>=0;--e)if(47===c.charCodeAt(e)){if(!a){t=e+1;break}}else-1===n&&(a=!1,n=e+1);return-1===n?"":c.slice(t,n)}function a(c,e){if(c.filter)return c.filter(e);for(var t=[],n=0;n<c.length;n++)e(c[n],n,c)&&t.push(c[n]);return t}e.resolve=function(){for(var e="",n=!1,r=arguments.length-1;r>=-1&&!n;r--){var i=r>=0?arguments[r]:c.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,n="/"===i.charAt(0))}return e=t(a(e.split("/"),(function(c){return!!c})),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(c){var n=e.isAbsolute(c),i="/"===r(c,-1);return c=t(a(c.split("/"),(function(c){return!!c})),!n).join("/"),c||n||(c="."),c&&i&&(c+="/"),(n?"/":"")+c},e.isAbsolute=function(c){return"/"===c.charAt(0)},e.join=function(){var c=Array.prototype.slice.call(arguments,0);return e.normalize(a(c,(function(c,e){if("string"!==typeof c)throw new TypeError("Arguments to path.join must be strings");return c})).join("/"))},e.relative=function(c,t){function n(c){for(var e=0;e<c.length;e++)if(""!==c[e])break;for(var t=c.length-1;t>=0;t--)if(""!==c[t])break;return e>t?[]:c.slice(e,t-e+1)}c=e.resolve(c).substr(1),t=e.resolve(t).substr(1);for(var a=n(c.split("/")),r=n(t.split("/")),i=Math.min(a.length,r.length),s=i,o=0;o<i;o++)if(a[o]!==r[o]){s=o;break}var l=[];for(o=s;o<a.length;o++)l.push("..");return l=l.concat(r.slice(s)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(c){if("string"!==typeof c&&(c+=""),0===c.length)return".";for(var e=c.charCodeAt(0),t=47===e,n=-1,a=!0,r=c.length-1;r>=1;--r)if(e=c.charCodeAt(r),47===e){if(!a){n=r;break}}else a=!1;return-1===n?t?"/":".":t&&1===n?"/":c.slice(0,n)},e.basename=function(c,e){var t=n(c);return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t},e.extname=function(c){"string"!==typeof c&&(c+="");for(var e=-1,t=0,n=-1,a=!0,r=0,i=c.length-1;i>=0;--i){var s=c.charCodeAt(i);if(47!==s)-1===n&&(a=!1,n=i+1),46===s?-1===e?e=i:1!==r&&(r=1):-1!==e&&(r=-1);else if(!a){t=i+1;break}}return-1===e||-1===n||0===r||1===r&&e===n-1&&e===t+1?"":c.slice(e,n)};var r="b"==="ab".substr(-1)?function(c,e,t){return c.substr(e,t)}:function(c,e,t){return e<0&&(e=c.length+e),c.substr(e,t)}}).call(this,t("4362"))},e163:function(c,e,t){var n=t("1a2d"),a=t("1626"),r=t("7b0b"),i=t("f772"),s=t("e177"),o=i("IE_PROTO"),l=Object.prototype;c.exports=s?Object.getPrototypeOf:function(c){var e=r(c);if(n(e,o))return e[o];var t=e.constructor;return a(t)&&e instanceof t?t.prototype:e instanceof Object?l:null}},e177:function(c,e,t){var n=t("d039");c.exports=!n((function(){function c(){}return c.prototype.constructor=null,Object.getPrototypeOf(new c)!==c.prototype}))},e260:function(c,e,t){"use strict";var n=t("fc6a"),a=t("44d2"),r=t("3f8c"),i=t("69f3"),s=t("7dd0"),o="Array Iterator",l=i.set,h=i.getterFor(o);c.exports=s(Array,"Array",(function(c,e){l(this,{type:o,target:n(c),index:0,kind:e})}),(function(){var c=h(this),e=c.target,t=c.kind,n=c.index++;return!e||n>=e.length?(c.target=void 0,{value:void 0,done:!0}):"keys"==t?{value:n,done:!1}:"values"==t?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),r.Arguments=r.Array,a("keys"),a("values"),a("entries")},e2cc:function(c,e,t){var n=t("6eeb");c.exports=function(c,e,t){for(var a in e)n(c,a,e[a],t);return c}},e667:function(c,e){c.exports=function(c){try{return{error:!1,value:c()}}catch(e){return{error:!0,value:e}}}},e6cf:function(c,e,t){"use strict";var n,a,r,i,s=t("23e7"),o=t("c430"),l=t("da84"),h=t("d066"),v=t("fea9"),u=t("6eeb"),f=t("e2cc"),m=t("d2bb"),d=t("d44e"),z=t("2626"),p=t("59ed"),M=t("1626"),C=t("861d"),g=t("19aa"),H=t("8925"),y=t("2266"),V=t("1c7e"),_=t("4840"),b=t("2cf4").set,L=t("b575"),w=t("cdf9"),A=t("44de"),S=t("f069"),k=t("e667"),x=t("69f3"),O=t("94ca"),T=t("b622"),I=t("6069"),E=t("605d"),j=t("2d00"),P=T("species"),N="Promise",R=x.get,D=x.set,Z=x.getterFor(N),q=v&&v.prototype,F=v,$=q,U=l.TypeError,W=l.document,B=l.process,K=S.f,Y=K,G=!!(W&&W.createEvent&&l.dispatchEvent),Q=M(l.PromiseRejectionEvent),X="unhandledrejection",J="rejectionhandled",cc=0,ec=1,tc=2,nc=1,ac=2,rc=!1,ic=O(N,(function(){var c=H(F),e=c!==String(F);if(!e&&66===j)return!0;if(o&&!$["finally"])return!0;if(j>=51&&/native code/.test(c))return!1;var t=new F((function(c){c(1)})),n=function(c){c((function(){}),(function(){}))},a=t.constructor={};return a[P]=n,rc=t.then((function(){}))instanceof n,!rc||!e&&I&&!Q})),sc=ic||!V((function(c){F.all(c)["catch"]((function(){}))})),oc=function(c){var e;return!(!C(c)||!M(e=c.then))&&e},lc=function(c,e){if(!c.notified){c.notified=!0;var t=c.reactions;L((function(){var n=c.value,a=c.state==ec,r=0;while(t.length>r){var i,s,o,l=t[r++],h=a?l.ok:l.fail,v=l.resolve,u=l.reject,f=l.domain;try{h?(a||(c.rejection===ac&&fc(c),c.rejection=nc),!0===h?i=n:(f&&f.enter(),i=h(n),f&&(f.exit(),o=!0)),i===l.promise?u(U("Promise-chain cycle")):(s=oc(i))?s.call(i,v,u):v(i)):u(n)}catch(m){f&&!o&&f.exit(),u(m)}}c.reactions=[],c.notified=!1,e&&!c.rejection&&vc(c)}))}},hc=function(c,e,t){var n,a;G?(n=W.createEvent("Event"),n.promise=e,n.reason=t,n.initEvent(c,!1,!0),l.dispatchEvent(n)):n={promise:e,reason:t},!Q&&(a=l["on"+c])?a(n):c===X&&A("Unhandled promise rejection",t)},vc=function(c){b.call(l,(function(){var e,t=c.facade,n=c.value,a=uc(c);if(a&&(e=k((function(){E?B.emit("unhandledRejection",n,t):hc(X,t,n)})),c.rejection=E||uc(c)?ac:nc,e.error))throw e.value}))},uc=function(c){return c.rejection!==nc&&!c.parent},fc=function(c){b.call(l,(function(){var e=c.facade;E?B.emit("rejectionHandled",e):hc(J,e,c.value)}))},mc=function(c,e,t){return function(n){c(e,n,t)}},dc=function(c,e,t){c.done||(c.done=!0,t&&(c=t),c.value=e,c.state=tc,lc(c,!0))},zc=function(c,e,t){if(!c.done){c.done=!0,t&&(c=t);try{if(c.facade===e)throw U("Promise can't be resolved itself");var n=oc(e);n?L((function(){var t={done:!1};try{n.call(e,mc(zc,t,c),mc(dc,t,c))}catch(a){dc(t,a,c)}})):(c.value=e,c.state=ec,lc(c,!1))}catch(a){dc({done:!1},a,c)}}};if(ic&&(F=function(c){g(this,F,N),p(c),n.call(this);var e=R(this);try{c(mc(zc,e),mc(dc,e))}catch(t){dc(e,t)}},$=F.prototype,n=function(c){D(this,{type:N,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:cc,value:void 0})},n.prototype=f($,{then:function(c,e){var t=Z(this),n=K(_(this,F));return n.ok=!M(c)||c,n.fail=M(e)&&e,n.domain=E?B.domain:void 0,t.parent=!0,t.reactions.push(n),t.state!=cc&&lc(t,!1),n.promise},catch:function(c){return this.then(void 0,c)}}),a=function(){var c=new n,e=R(c);this.promise=c,this.resolve=mc(zc,e),this.reject=mc(dc,e)},S.f=K=function(c){return c===F||c===r?new a(c):Y(c)},!o&&M(v)&&q!==Object.prototype)){i=q.then,rc||(u(q,"then",(function(c,e){var t=this;return new F((function(c,e){i.call(t,c,e)})).then(c,e)}),{unsafe:!0}),u(q,"catch",$["catch"],{unsafe:!0}));try{delete q.constructor}catch(pc){}m&&m(q,$)}s({global:!0,wrap:!0,forced:ic},{Promise:F}),d(F,N,!1,!0),z(N),r=h(N),s({target:N,stat:!0,forced:ic},{reject:function(c){var e=K(this);return e.reject.call(void 0,c),e.promise}}),s({target:N,stat:!0,forced:o||ic},{resolve:function(c){return w(o&&this===r?F:this,c)}}),s({target:N,stat:!0,forced:sc},{all:function(c){var e=this,t=K(e),n=t.resolve,a=t.reject,r=k((function(){var t=p(e.resolve),r=[],i=0,s=1;y(c,(function(c){var o=i++,l=!1;r.push(void 0),s++,t.call(e,c).then((function(c){l||(l=!0,r[o]=c,--s||n(r))}),a)})),--s||n(r)}));return r.error&&a(r.value),t.promise},race:function(c){var e=this,t=K(e),n=t.reject,a=k((function(){var a=p(e.resolve);y(c,(function(c){a.call(e,c).then(t.resolve,n)}))}));return a.error&&n(a.value),t.promise}})},e893:function(c,e,t){var n=t("1a2d"),a=t("56ef"),r=t("06cf"),i=t("9bf2");c.exports=function(c,e){for(var t=a(e),s=i.f,o=r.f,l=0;l<t.length;l++){var h=t[l];n(c,h)||s(c,h,o(e,h))}}},e95a:function(c,e,t){var n=t("b622"),a=t("3f8c"),r=n("iterator"),i=Array.prototype;c.exports=function(c){return void 0!==c&&(a.Array===c||i[r]===c)}},f069:function(c,e,t){"use strict";var n=t("59ed"),a=function(c){var e,t;this.promise=new c((function(c,n){if(void 0!==e||void 0!==t)throw TypeError("Bad Promise constructor");e=c,t=n})),this.resolve=n(e),this.reject=n(t)};c.exports.f=function(c){return new a(c)}},f5df:function(c,e,t){var n=t("00ee"),a=t("1626"),r=t("c6b6"),i=t("b622"),s=i("toStringTag"),o="Arguments"==r(function(){return arguments}()),l=function(c,e){try{return c[e]}catch(t){}};c.exports=n?r:function(c){var e,t,n;return void 0===c?"Undefined":null===c?"Null":"string"==typeof(t=l(e=Object(c),s))?t:o?r(e):"Object"==(n=r(e))&&a(e.callee)?"Arguments":n}},f772:function(c,e,t){var n=t("5692"),a=t("90e3"),r=n("keys");c.exports=function(c){return r[c]||(r[c]=a(c))}},fc6a:function(c,e,t){var n=t("44ad"),a=t("1d80");c.exports=function(c){return n(a(c))}},fdbf:function(c,e,t){var n=t("4930");c.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(c,e,t){var n=t("da84");c.exports=n.Promise},ffa6:function(c,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return m}));function n(c,e,t,n){function a(c){return c instanceof t?c:new t((function(e){e(c)}))}return new(t||(t=Promise))((function(t,r){function i(c){try{o(n.next(c))}catch(e){r(e)}}function s(c){try{o(n["throw"](c))}catch(e){r(e)}}function o(c){c.done?t(c.value):a(c.value).then(i,s)}o((n=n.apply(c,e||[])).next())}))}function a(c,e){var t,n,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(c){return function(e){return o([c,e])}}function o(r){if(t)throw new TypeError("Generator is already executing.");while(i)try{if(t=1,n&&(a=2&r[0]?n["return"]:r[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,n=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(6===r[0]&&i.label<a[1]){i.label=a[1],a=r;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(r);break}a[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(c,i)}catch(s){r=[6,s],n=0}finally{t=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}Object.create;function r(c){var e="function"===typeof Symbol&&Symbol.iterator,t=e&&c[e],n=0;if(t)return t.call(c);if(c&&"number"===typeof c.length)return{next:function(){return c&&n>=c.length&&(c=void 0),{value:c&&c[n++],done:!c}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(c,e){var t="function"===typeof Symbol&&c[Symbol.iterator];if(!t)return c;var n,a,r=t.call(c),i=[];try{while((void 0===e||e-- >0)&&!(n=r.next()).done)i.push(n.value)}catch(s){a={error:s}}finally{try{n&&!n.done&&(t=r["return"])&&t.call(r)}finally{if(a)throw a.error}}return i}function s(c,e,t){if(t||2===arguments.length)for(var n,a=0,r=e.length;a<r;a++)!n&&a in e||(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return c.concat(n||Array.prototype.slice.call(e))}Object.create;var o=t("1fd5"),l=function(){function c(c,e,t){this.name=c,this.instanceFactory=e,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return c.prototype.setInstantiationMode=function(c){return this.instantiationMode=c,this},c.prototype.setMultipleInstances=function(c){return this.multipleInstances=c,this},c.prototype.setServiceProps=function(c){return this.serviceProps=c,this},c.prototype.setInstanceCreatedCallback=function(c){return this.onInstanceCreated=c,this},c}(),h="[DEFAULT]",v=function(){function c(c,e){this.name=c,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return c.prototype.get=function(c){var e=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(e)){var t=new o["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(a){}}return this.instancesDeferred.get(e).promise},c.prototype.getImmediate=function(c){var e,t=this.normalizeInstanceIdentifier(null===c||void 0===c?void 0:c.identifier),n=null!==(e=null===c||void 0===c?void 0:c.optional)&&void 0!==e&&e;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(n)return null;throw a}},c.prototype.getComponent=function(){return this.component},c.prototype.setComponent=function(c){var e,t;if(c.name!==this.name)throw Error("Mismatching Component "+c.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=c,this.shouldAutoInitialize()){if(f(c))try{this.getOrInitializeService({instanceIdentifier:h})}catch(m){}try{for(var n=r(this.instancesDeferred.entries()),a=n.next();!a.done;a=n.next()){var s=i(a.value,2),o=s[0],l=s[1],v=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:v});l.resolve(u)}catch(m){}}}catch(d){e={error:d}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}}},c.prototype.clearInstance=function(c){void 0===c&&(c=h),this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)},c.prototype.delete=function(){return n(this,void 0,void 0,(function(){var c;return a(this,(function(e){switch(e.label){case 0:return c=Array.from(this.instances.values()),[4,Promise.all(s(s([],i(c.filter((function(c){return"INTERNAL"in c})).map((function(c){return c.INTERNAL.delete()})))),i(c.filter((function(c){return"_delete"in c})).map((function(c){return c._delete()})))))];case 1:return e.sent(),[2]}}))}))},c.prototype.isComponentSet=function(){return null!=this.component},c.prototype.isInitialized=function(c){return void 0===c&&(c=h),this.instances.has(c)},c.prototype.getOptions=function(c){return void 0===c&&(c=h),this.instancesOptions.get(c)||{}},c.prototype.initialize=function(c){var e,t;void 0===c&&(c={});var n=c.options,a=void 0===n?{}:n,s=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:a});try{for(var l=r(this.instancesDeferred.entries()),h=l.next();!h.done;h=l.next()){var v=i(h.value,2),u=v[0],f=v[1],m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}}catch(d){e={error:d}}finally{try{h&&!h.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}return o},c.prototype.onInit=function(c,e){var t,n=this.normalizeInstanceIdentifier(e),a=null!==(t=this.onInitCallbacks.get(n))&&void 0!==t?t:new Set;a.add(c),this.onInitCallbacks.set(n,a);var r=this.instances.get(n);return r&&c(r,n),function(){a.delete(c)}},c.prototype.invokeOnInitCallbacks=function(c,e){var t,n,a=this.onInitCallbacks.get(e);if(a)try{for(var i=r(a),s=i.next();!s.done;s=i.next()){var o=s.value;try{o(c,e)}catch(l){}}}catch(h){t={error:h}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},c.prototype.getOrInitializeService=function(c){var e=c.instanceIdentifier,t=c.options,n=void 0===t?{}:t,a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:u(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch(r){}return a||null},c.prototype.normalizeInstanceIdentifier=function(c){return void 0===c&&(c=h),this.component?this.component.multipleInstances?c:h:c},c.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},c}();function u(c){return c===h?void 0:c}function f(c){return"EAGER"===c.instantiationMode}
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
//# sourceMappingURL=chunk-vendors.df5b132e.js.map