(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const nu=[document.querySelector(".welcome-section"),document.querySelector(".start-section"),document.querySelector(".status-section"),document.querySelector(".invest-section"),document.querySelector(".details-section"),document.querySelector(".contact-section"),document.querySelector(".sucess-section")],[Ei,As,_s,Ns,xs,Rs,Ii]=nu,ze=t=>{switch(t){case"welcome":Ii.style.display="none",Ei.style.display="flex",As.style.display="none";break;case"start":Ei.style.display="none",As.style.display="flex",_s.style.display="none";break;case"status":As.style.display="none",_s.style.display="flex",Ns.style.display="none";break;case"invest":_s.style.display="none",Ns.style.display="flex",xs.style.display="none";break;case"details":Ns.style.display="none",xs.style.display="flex",Rs.style.display="none";break;case"contact":xs.style.display="none",Rs.style.display="flex";break;case"sucess":Rs.style.display="none",Ii.style.display="flex";break}};/**
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
 *//**
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
 */const Do=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},su=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(m=64)),s.push(n[l],n[h],n[m],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Do(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):su(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new ru;const m=i<<2|a>>4;if(s.push(m),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const C=u<<6&192|h;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ru extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iu=function(t){const e=Do(t);return ko.encodeByteArray(e,!0)},On=function(t){return iu(t).replace(/\./g,"")},ou=function(t){try{return ko.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=()=>au().__FIREBASE_DEFAULTS__,uu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ou(t[1]);return e&&JSON.parse(e)},Ao=()=>{try{return cu()||uu()||lu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hu=t=>{var e,n;return(n=(e=Ao())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},du=t=>{const e=hu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},fu=()=>{var t;return(t=Ao())===null||t===void 0?void 0:t.config};/**
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
 */class mu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function pu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[On(JSON.stringify(n)),On(JSON.stringify(o)),a].join(".")}function gu(){try{return typeof indexedDB=="object"}catch{return!1}}function yu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vu="FirebaseError";class pt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vu,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wu(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new pt(r,a,s)}}function wu(t,e){return t.replace(Eu,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Eu=/\{\$([^}]+)}/g;function Zs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ti(i)&&Ti(o)){if(!Zs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ti(t){return t!==null&&typeof t=="object"}/**
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
 */function Bt(t){return t&&t._delegate?t._delegate:t}class Ut{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ue="[DEFAULT]";/**
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
 */class Iu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bu(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Tu(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tu(t){return t===Ue?void 0:t}function bu(t){return t.instantiationMode==="EAGER"}/**
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
 */class Su{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_||(_={}));const Cu={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Du=_.INFO,ku={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Au=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ku[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class No{constructor(e){this.name=e,this._logLevel=Du,this._logHandler=Au,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...e),this._logHandler(this,_.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...e),this._logHandler(this,_.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_.INFO,...e),this._logHandler(this,_.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_.WARN,...e),this._logHandler(this,_.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...e),this._logHandler(this,_.ERROR,...e)}}const _u=(t,e)=>e.some(n=>t instanceof n);let bi,Si;function Nu(){return bi||(bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xu(){return Si||(Si=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xo=new WeakMap,er=new WeakMap,Ro=new WeakMap,Ls=new WeakMap,kr=new WeakMap;function Ru(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ae(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xo.set(n,t)}).catch(()=>{}),kr.set(e,t),e}function Lu(t){if(er.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});er.set(t,e)}let tr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return er.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ro.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ae(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ou(t){tr=t(tr)}function Mu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Os(this),e,...n);return Ro.set(s,e.sort?e.sort():[e]),Ae(s)}:xu().includes(t)?function(...e){return t.apply(Os(this),e),Ae(xo.get(this))}:function(...e){return Ae(t.apply(Os(this),e))}}function Pu(t){return typeof t=="function"?Mu(t):(t instanceof IDBTransaction&&Lu(t),_u(t,Nu())?new Proxy(t,tr):t)}function Ae(t){if(t instanceof IDBRequest)return Ru(t);if(Ls.has(t))return Ls.get(t);const e=Pu(t);return e!==t&&(Ls.set(t,e),kr.set(e,t)),e}const Os=t=>kr.get(t);function Fu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ae(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ae(o.result),c.oldVersion,c.newVersion,Ae(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Vu=["get","getKey","getAll","getAllKeys","count"],Bu=["put","add","delete","clear"],Ms=new Map;function Ci(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ms.get(e))return Ms.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Bu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Vu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ms.set(e,i),i}Ou(t=>({...t,get:(e,n,s)=>Ci(e,n)||t.get(e,n,s),has:(e,n)=>!!Ci(e,n)||t.has(e,n)}));/**
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
 */class Uu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($u(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function $u(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nr="@firebase/app",Di="0.9.7";/**
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
 */const Ge=new No("@firebase/app"),qu="@firebase/app-compat",ju="@firebase/analytics-compat",zu="@firebase/analytics",Ku="@firebase/app-check-compat",Hu="@firebase/app-check",Gu="@firebase/auth",Qu="@firebase/auth-compat",Wu="@firebase/database",Yu="@firebase/database-compat",Xu="@firebase/functions",Ju="@firebase/functions-compat",Zu="@firebase/installations",el="@firebase/installations-compat",tl="@firebase/messaging",nl="@firebase/messaging-compat",sl="@firebase/performance",rl="@firebase/performance-compat",il="@firebase/remote-config",ol="@firebase/remote-config-compat",al="@firebase/storage",cl="@firebase/storage-compat",ul="@firebase/firestore",ll="@firebase/firestore-compat",hl="firebase",dl="9.19.1";/**
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
 */const sr="[DEFAULT]",fl={[nr]:"fire-core",[qu]:"fire-core-compat",[zu]:"fire-analytics",[ju]:"fire-analytics-compat",[Hu]:"fire-app-check",[Ku]:"fire-app-check-compat",[Gu]:"fire-auth",[Qu]:"fire-auth-compat",[Wu]:"fire-rtdb",[Yu]:"fire-rtdb-compat",[Xu]:"fire-fn",[Ju]:"fire-fn-compat",[Zu]:"fire-iid",[el]:"fire-iid-compat",[tl]:"fire-fcm",[nl]:"fire-fcm-compat",[sl]:"fire-perf",[rl]:"fire-perf-compat",[il]:"fire-rc",[ol]:"fire-rc-compat",[al]:"fire-gcs",[cl]:"fire-gcs-compat",[ul]:"fire-fst",[ll]:"fire-fst-compat","fire-js":"fire-js",[hl]:"fire-js-all"};/**
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
 */const Mn=new Map,rr=new Map;function ml(t,e){try{t.container.addComponent(e)}catch(n){Ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pn(t){const e=t.name;if(rr.has(e))return Ge.debug(`There were multiple attempts to register component ${e}.`),!1;rr.set(e,t);for(const n of Mn.values())ml(n,t);return!0}function pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const gl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_e=new _o("app","Firebase",gl);/**
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
 */class yl{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _e.create("app-deleted",{appName:this._name})}}/**
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
 */const vl=dl;function Lo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw _e.create("bad-app-name",{appName:String(r)});if(n||(n=fu()),!n)throw _e.create("no-options");const i=Mn.get(r);if(i){if(Zs(n,i.options)&&Zs(s,i.config))return i;throw _e.create("duplicate-app",{appName:r})}const o=new Su(r);for(const c of rr.values())o.addComponent(c);const a=new yl(n,s,o);return Mn.set(r,a),a}function wl(t=sr){const e=Mn.get(t);if(!e&&t===sr)return Lo();if(!e)throw _e.create("no-app",{appName:t});return e}function st(t,e,n){var s;let r=(s=fl[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ge.warn(a.join(" "));return}Pn(new Ut(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const El="firebase-heartbeat-database",Il=1,$t="firebase-heartbeat-store";let Ps=null;function Oo(){return Ps||(Ps=Fu(El,Il,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($t)}}}).catch(t=>{throw _e.create("idb-open",{originalErrorMessage:t.message})})),Ps}async function Tl(t){try{return(await Oo()).transaction($t).objectStore($t).get(Mo(t))}catch(e){if(e instanceof pt)Ge.warn(e.message);else{const n=_e.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ge.warn(n.message)}}}async function ki(t,e){try{const s=(await Oo()).transaction($t,"readwrite");return await s.objectStore($t).put(e,Mo(t)),s.done}catch(n){if(n instanceof pt)Ge.warn(n.message);else{const s=_e.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ge.warn(s.message)}}}function Mo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bl=1024,Sl=30*24*60*60*1e3;class Cl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ai();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Sl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ai(),{heartbeatsToSend:n,unsentEntries:s}=Dl(this._heartbeatsCache.heartbeats),r=On(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ai(){return new Date().toISOString().substring(0,10)}function Dl(t,e=bl){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),_i(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_i(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class kl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gu()?yu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ki(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ki(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _i(t){return On(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Al(t){Pn(new Ut("platform-logger",e=>new Uu(e),"PRIVATE")),Pn(new Ut("heartbeat",e=>new Cl(e),"PRIVATE")),st(nr,Di,t),st(nr,Di,"esm2017"),st("fire-js","")}Al("");var _l="firebase",Nl="9.19.1";/**
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
 */st(_l,Nl,"app");var xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Ar=Ar||{},I=xl||self;function Fn(){}function ts(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Rl(t){return Object.prototype.hasOwnProperty.call(t,Fs)&&t[Fs]||(t[Fs]=++Ll)}var Fs="closure_uid_"+(1e9*Math.random()>>>0),Ll=0;function Ol(t,e,n){return t.call.apply(t.bind,arguments)}function Ml(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Z(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=Ol:Z=Ml,Z.apply(null,arguments)}function pn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function G(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Fe(){this.s=this.s,this.o=this.o}var Pl=0;Fe.prototype.s=!1;Fe.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Pl!=0)&&Rl(this)};Fe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Po=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _r(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ni(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ts(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ee(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var Fl=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{I.addEventListener("test",Fn,e),I.removeEventListener("test",Fn,e)}catch{}return t}();function Vn(t){return/^[\s\xa0]*$/.test(t)}var xi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Vs(t,e){return t<e?-1:t>e?1:0}function ns(){var t=I.navigator;return t&&(t=t.userAgent)?t:""}function fe(t){return ns().indexOf(t)!=-1}function Nr(t){return Nr[" "](t),t}Nr[" "]=Fn;function Vl(t){var e=$l;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Bl=fe("Opera"),at=fe("Trident")||fe("MSIE"),Fo=fe("Edge"),ir=Fo||at,Vo=fe("Gecko")&&!(ns().toLowerCase().indexOf("webkit")!=-1&&!fe("Edge"))&&!(fe("Trident")||fe("MSIE"))&&!fe("Edge"),Ul=ns().toLowerCase().indexOf("webkit")!=-1&&!fe("Edge");function Bo(){var t=I.document;return t?t.documentMode:void 0}var Bn;e:{var Bs="",Us=function(){var t=ns();if(Vo)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fo)return/Edge\/([\d\.]+)/.exec(t);if(at)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ul)return/WebKit\/(\S+)/.exec(t);if(Bl)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Us&&(Bs=Us?Us[1]:""),at){var $s=Bo();if($s!=null&&$s>parseFloat(Bs)){Bn=String($s);break e}}Bn=Bs}var $l={};function ql(){return Vl(function(){let t=0;const e=xi(String(Bn)).split("."),n=xi("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Vs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Vs(r[2].length==0,i[2].length==0)||Vs(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var or;if(I.document&&at){var Ri=Bo();or=Ri||parseInt(Bn,10)||void 0}else or=void 0;var jl=or;function qt(t,e){if(ee.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vo){e:{try{Nr(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zl[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qt.X.h.call(this)}}G(qt,ee);var zl={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),Kl=0;function Hl(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Kl,this.ba=this.ea=!1}function ss(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Uo(t){const e={};for(const n in t)e[n]=t[n];return e}const Li="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $o(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Li.length;i++)n=Li[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function rs(t){this.src=t,this.g={},this.h=0}rs.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=cr(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Hl(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function ar(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Po(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ss(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cr(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Rr="closure_lm_"+(1e6*Math.random()|0),qs={};function qo(t,e,n,s,r){if(s&&s.once)return zo(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)qo(t,e[i],n,s,r);return null}return n=Mr(n),t&&t[en]?t.N(e,n,Zt(s)?!!s.capture:!!s,r):jo(t,e,n,!1,s,r)}function jo(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Zt(r)?!!r.capture:!!r,a=Or(t);if(a||(t[Rr]=a=new rs(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Gl(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Fl||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ho(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Gl(){function t(n){return e.call(t.src,t.listener,n)}const e=Ql;return t}function zo(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)zo(t,e[i],n,s,r);return null}return n=Mr(n),t&&t[en]?t.O(e,n,Zt(s)?!!s.capture:!!s,r):jo(t,e,n,!0,s,r)}function Ko(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ko(t,e[i],n,s,r);else s=Zt(s)?!!s.capture:!!s,n=Mr(n),t&&t[en]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=cr(i,n,s,r),-1<n&&(ss(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Or(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cr(e,n,s,r)),(n=-1<t?e[t]:null)&&Lr(n))}function Lr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[en])ar(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ho(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Or(e))?(ar(n,t),n.h==0&&(n.src=null,e[Rr]=null)):ss(t)}}}function Ho(t){return t in qs?qs[t]:qs[t]="on"+t}function Ql(t,e){if(t.ba)t=!0;else{e=new qt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Lr(t),t=n.call(s,e)}return t}function Or(t){return t=t[Rr],t instanceof rs?t:null}var js="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mr(t){return typeof t=="function"?t:(t[js]||(t[js]=function(e){return t.handleEvent(e)}),t[js])}function z(){Fe.call(this),this.i=new rs(this),this.P=this,this.I=null}G(z,Fe);z.prototype[en]=!0;z.prototype.removeEventListener=function(t,e,n,s){Ko(this,t,e,n,s)};function H(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ee(e,t);else if(e instanceof ee)e.target=e.target||t;else{var r=e;e=new ee(s,t),$o(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=gn(o,s,!0,e)&&r}if(o=e.g=t,r=gn(o,s,!0,e)&&r,r=gn(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=gn(o,s,!1,e)&&r}z.prototype.M=function(){if(z.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ss(n[s]);delete t.g[e],t.h--}}this.I=null};z.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};z.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function gn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ar(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Pr=I.JSON.stringify;function Wl(){var t=Wo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Yl{constructor(){this.h=this.g=null}add(e,n){const s=Go.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Go=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Xl,t=>t.reset());class Xl{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Jl(t){I.setTimeout(()=>{throw t},0)}function Qo(t,e){ur||Zl(),lr||(ur(),lr=!0),Wo.add(t,e)}var ur;function Zl(){var t=I.Promise.resolve(void 0);ur=function(){t.then(eh)}}var lr=!1,Wo=new Yl;function eh(){for(var t;t=Wl();){try{t.h.call(t.g)}catch(n){Jl(n)}var e=Go;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lr=!1}function is(t,e){z.call(this),this.h=t||1,this.g=e||I,this.j=Z(this.lb,this),this.l=Date.now()}G(is,z);g=is.prototype;g.ca=!1;g.R=null;g.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(Fr(this),this.start()))}};g.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}g.M=function(){is.X.M.call(this),Fr(this),delete this.g};function Vr(t,e,n){if(typeof t=="function")n&&(t=Z(t,n));else if(t&&typeof t.handleEvent=="function")t=Z(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:I.setTimeout(t,e||0)}function Yo(t){t.g=Vr(()=>{t.g=null,t.i&&(t.i=!1,Yo(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class th extends Fe{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yo(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(t){Fe.call(this),this.h=t,this.g={}}G(jt,Fe);var Oi=[];function Xo(t,e,n,s){Array.isArray(n)||(n&&(Oi[0]=n.toString()),n=Oi);for(var r=0;r<n.length;r++){var i=qo(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Jo(t){xr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lr(e)},t),t.g={}}jt.prototype.M=function(){jt.X.M.call(this),Jo(this)};jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function os(){this.g=!0}os.prototype.Aa=function(){this.g=!1};function nh(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function sh(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function tt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ih(t,n)+(s?" "+s:"")})}function rh(t,e){t.info(function(){return"TIMEOUT: "+e})}os.prototype.info=function(){};function ih(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Pr(n)}catch{return e}}var Ye={},Mi=null;function as(){return Mi=Mi||new z}Ye.Pa="serverreachability";function Zo(t){ee.call(this,Ye.Pa,t)}G(Zo,ee);function zt(t){const e=as();H(e,new Zo(e))}Ye.STAT_EVENT="statevent";function ea(t,e){ee.call(this,Ye.STAT_EVENT,t),this.stat=e}G(ea,ee);function ie(t){const e=as();H(e,new ea(e,t))}Ye.Qa="timingevent";function ta(t,e){ee.call(this,Ye.Qa,t),this.size=e}G(ta,ee);function tn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){t()},e)}var cs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},na={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Br(){}Br.prototype.h=null;function Pi(t){return t.h||(t.h=t.i())}function sa(){}var nn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ur(){ee.call(this,"d")}G(Ur,ee);function $r(){ee.call(this,"c")}G($r,ee);var hr;function us(){}G(us,Br);us.prototype.g=function(){return new XMLHttpRequest};us.prototype.i=function(){return{}};hr=new us;function sn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new jt(this),this.O=oh,t=ir?125:void 0,this.T=new is(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ra}function ra(){this.i=null,this.g="",this.h=!1}var oh=45e3,dr={},Un={};g=sn.prototype;g.setTimeout=function(t){this.O=t};function fr(t,e,n){t.K=1,t.v=hs(Te(e)),t.s=n,t.P=!0,ia(t,null)}function ia(t,e){t.F=Date.now(),rn(t),t.A=Te(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),fa(n.i,"t",s),t.C=0,n=t.l.H,t.h=new ra,t.g=Oa(t.l,n?e:null,!t.s),0<t.N&&(t.L=new th(Z(t.La,t,t.g),t.N)),Xo(t.S,t.g,"readystatechange",t.ib),e=t.H?Uo(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),zt(),nh(t.j,t.u,t.A,t.m,t.U,t.s)}g.ib=function(t){t=t.target;const e=this.L;e&&ve(t)==3?e.l():this.La(t)};g.La=function(t){try{if(t==this.g)e:{const l=ve(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ir||this.g&&(this.h.h||this.g.fa()||Ui(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?zt(3):zt(2)),ls(this);var n=this.g.aa();this.Y=n;t:if(oa(this)){var s=Ui(this.g);t="";var r=s.length,i=ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$e(this),Nt(this);var o="";break t}this.h.i=new I.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,sh(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vn(a)){var u=a;break t}}u=null}if(n=u)tt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mr(this,n);else{this.i=!1,this.o=3,ie(12),$e(this),Nt(this);break e}}this.P?(aa(this,l,o),ir&&this.i&&l==3&&(Xo(this.S,this.T,"tick",this.hb),this.T.start())):(tt(this.j,this.m,o,null),mr(this,o)),l==4&&$e(this),this.i&&!this.I&&(l==4?Na(this.l,this):(this.i=!1,rn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),$e(this),Nt(this)}}}catch{}finally{}};function oa(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function aa(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=ah(t,n),r==Un){e==4&&(t.o=4,ie(14),s=!1),tt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==dr){t.o=4,ie(15),tt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else tt(t.j,t.m,r,null),mr(t,r);oa(t)&&r!=Un&&r!=dr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ie(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qr(e),e.K=!0,ie(11))):(tt(t.j,t.m,n,"[Invalid Chunked Response]"),$e(t),Nt(t))}g.hb=function(){if(this.g){var t=ve(this.g),e=this.g.fa();this.C<e.length&&(ls(this),aa(this,t,e),this.i&&t!=4&&rn(this))}};function ah(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Un:(n=Number(e.substring(n,s)),isNaN(n)?dr:(s+=1,s+n>e.length?Un:(e=e.substr(s,n),t.C=s+n,e)))}g.cancel=function(){this.I=!0,$e(this)};function rn(t){t.V=Date.now()+t.O,ca(t,t.O)}function ca(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=tn(Z(t.gb,t),e)}function ls(t){t.B&&(I.clearTimeout(t.B),t.B=null)}g.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(rh(this.j,this.A),this.K!=2&&(zt(),ie(17)),$e(this),this.o=2,Nt(this)):ca(this,this.V-t)};function Nt(t){t.l.G==0||t.I||Na(t.l,t)}function $e(t){ls(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Fr(t.T),Jo(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||pr(n.h,t))){if(!t.J&&pr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)jn(n),ms(n);else break e;Gr(n),ie(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=tn(Z(n.cb,n),6e3));if(1>=ga(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else qe(n,11)}else if((t.J||n.g==t)&&jn(n),!Vn(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const m=u[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const C=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var i=s.h;i.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(qr(i,i.h),i.h=null))}if(s.D){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,L(s.F,s.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=La(s,s.H?s.ka:null,s.V),o.J){ya(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ls(a),rn(a)),s.g=o}else Aa(s);0<n.i.length&&ps(n)}else u[0]!="stop"&&u[0]!="close"||qe(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?qe(n,7):Hr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}zt(4)}catch{}}function ch(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ts(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function uh(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ts(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ua(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ts(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=uh(t),s=ch(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var la=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lh(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ke){this.h=e!==void 0?e:t.h,$n(this,t.j),this.s=t.s,this.g=t.g,qn(this,t.m),this.l=t.l,e=t.i;var n=new Kt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fi(this,n),this.o=t.o}else t&&(n=String(t).match(la))?(this.h=!!e,$n(this,n[1]||"",!0),this.s=Ct(n[2]||""),this.g=Ct(n[3]||"",!0),qn(this,n[4]),this.l=Ct(n[5]||"",!0),Fi(this,n[6]||"",!0),this.o=Ct(n[7]||"")):(this.h=!!e,this.i=new Kt(null,this.h))}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dt(e,Vi,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Dt(e,Vi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Dt(n,n.charAt(0)=="/"?fh:dh,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dt(n,ph)),t.join("")};function Te(t){return new Ke(t)}function $n(t,e,n){t.j=n?Ct(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fi(t,e,n){e instanceof Kt?(t.i=e,gh(t.i,t.h)):(n||(e=Dt(e,mh)),t.i=new Kt(e,t.h))}function L(t,e,n){t.i.set(e,n)}function hs(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ct(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,hh),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hh(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vi=/[#\/\?@]/g,dh=/[#\?:]/g,fh=/[#\?]/g,mh=/[#\?@]/g,ph=/#/g;function Kt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ve(t){t.g||(t.g=new Map,t.h=0,t.i&&lh(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}g=Kt.prototype;g.add=function(t,e){Ve(this),this.i=null,t=gt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ha(t,e){Ve(t),e=gt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function da(t,e){return Ve(t),e=gt(t,e),t.g.has(e)}g.forEach=function(t,e){Ve(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};g.oa=function(){Ve(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};g.W=function(t){Ve(this);let e=[];if(typeof t=="string")da(this,t)&&(e=e.concat(this.g.get(gt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};g.set=function(t,e){return Ve(this),this.i=null,t=gt(this,t),da(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};g.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function fa(t,e,n){ha(t,e),0<n.length&&(t.i=null,t.g.set(gt(t,e),_r(n)),t.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function gt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gh(t,e){e&&!t.j&&(Ve(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ha(this,s),fa(this,r,n))},t)),t.j=e}var yh=class{constructor(e,n){this.h=e,this.g=n}};function ma(t){this.l=t||vh,I.PerformanceNavigationTiming?(t=I.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vh=10;function pa(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ga(t){return t.h?1:t.g?t.g.size:0}function pr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qr(t,e){t.g?t.g.add(e):t.h=e}function ya(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ma.prototype.cancel=function(){if(this.i=va(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function va(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _r(t.i)}function jr(){}jr.prototype.stringify=function(t){return I.JSON.stringify(t,void 0)};jr.prototype.parse=function(t){return I.JSON.parse(t,void 0)};function wh(){this.g=new jr}function Eh(t,e,n){const s=n||"";try{ua(t,function(r,i){let o=r;Zt(r)&&(o=Pr(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Ih(t,e){const n=new os;if(I.Image){const s=new Image;s.onload=pn(yn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=pn(yn,n,s,"TestLoadImage: error",!1,e),s.onabort=pn(yn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=pn(yn,n,s,"TestLoadImage: timeout",!1,e),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function yn(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function on(t){this.l=t.ac||null,this.j=t.jb||!1}G(on,Br);on.prototype.g=function(){return new ds(this.l,this.j)};on.prototype.i=function(t){return function(){return t}}({});function ds(t,e){z.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(ds,z);var zr=0;g=ds.prototype;g.open=function(t,e){if(this.readyState!=zr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ht(this)};g.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||I).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,an(this)),this.readyState=zr};g.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ht(this)),this.g&&(this.readyState=3,Ht(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wa(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function wa(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}g.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?an(this):Ht(this),this.readyState==3&&wa(this)}};g.Va=function(t){this.g&&(this.response=this.responseText=t,an(this))};g.Ua=function(t){this.g&&(this.response=t,an(this))};g.ga=function(){this.g&&an(this)};function an(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ht(t)}g.setRequestHeader=function(t,e){this.v.append(t,e)};g.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ht(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Th=I.JSON.parse;function P(t){z.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ea,this.K=this.L=!1}G(P,z);var Ea="",bh=/^https?$/i,Sh=["POST","PUT"];g=P.prototype;g.Ka=function(t){this.L=t};g.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hr.g(),this.C=this.u?Pi(this.u):Pi(hr),this.g.onreadystatechange=Z(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Bi(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=I.FormData&&t instanceof I.FormData,!(0<=Po(Sh,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ba(this),0<this.B&&((this.K=Ch(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.qa,this)):this.A=Vr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bi(this,i)}};function Ch(t){return at&&ql()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}g.qa=function(){typeof Ar<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Bi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ia(t),fs(t)}function Ia(t){t.D||(t.D=!0,H(t,"complete"),H(t,"error"))}g.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),fs(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fs(this,!0)),P.X.M.call(this)};g.Ha=function(){this.s||(this.F||this.v||this.l?Ta(this):this.fb())};g.fb=function(){Ta(this)};function Ta(t){if(t.h&&typeof Ar<"u"&&(!t.C[1]||ve(t)!=4||t.aa()!=2)){if(t.v&&ve(t)==4)Vr(t.Ha,0,t);else if(H(t,"readystatechange"),ve(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(la)[1]||null;if(!r&&I.self&&I.self.location){var i=I.self.location.protocol;r=i.substr(0,i.length-1)}s=!bh.test(r?r.toLowerCase():"")}n=s}if(n)H(t,"complete"),H(t,"success");else{t.m=6;try{var o=2<ve(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ia(t)}}finally{fs(t)}}}}function fs(t,e){if(t.g){ba(t);const n=t.g,s=t.C[0]?Fn:null;t.g=null,t.C=null,e||H(t,"ready");try{n.onreadystatechange=s}catch{}}}function ba(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(I.clearTimeout(t.A),t.A=null)}function ve(t){return t.g?t.g.readyState:0}g.aa=function(){try{return 2<ve(this)?this.g.status:-1}catch{return-1}};g.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Th(e)}};function Ui(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ea:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ea=function(){return this.m};g.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sa(t){let e="";return xr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Kr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Sa(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):L(t,e,n))}function St(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ca(t){this.Ca=0,this.i=[],this.j=new os,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=St("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=St("baseRetryDelayMs",5e3,t),this.bb=St("retryDelaySeedMs",1e4,t),this.$a=St("forwardChannelMaxRetries",2,t),this.ta=St("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ma(t&&t.concurrentRequestLimit),this.Fa=new wh,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}g=Ca.prototype;g.ma=8;g.G=1;function Hr(t){if(Da(t),t.G==3){var e=t.U++,n=Te(t.F);L(n,"SID",t.I),L(n,"RID",e),L(n,"TYPE","terminate"),cn(t,n),e=new sn(t,t.j,e,void 0),e.K=2,e.v=hs(Te(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(e.v.toString(),"")),!n&&I.Image&&(new Image().src=e.v,n=!0),n||(e.g=Oa(e.l,null),e.g.da(e.v)),e.F=Date.now(),rn(e)}Ra(t)}function ms(t){t.g&&(Qr(t),t.g.cancel(),t.g=null)}function Da(t){ms(t),t.u&&(I.clearTimeout(t.u),t.u=null),jn(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&I.clearTimeout(t.m),t.m=null)}function ps(t){pa(t.h)||t.m||(t.m=!0,Qo(t.Ja,t),t.C=0)}function Dh(t,e){return ga(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=tn(Z(t.Ja,t,e),xa(t,t.C)),t.C++,!0)}g.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new sn(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Uo(i),$o(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ka(this,r,e),n=Te(this.F),L(n,"RID",t),L(n,"CVER",22),this.D&&L(n,"X-HTTP-Session-Id",this.D),cn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Sa(i)))+"&"+e:this.o&&Kr(n,this.o,i)),qr(this.h,r),this.Ya&&L(n,"TYPE","init"),this.O?(L(n,"$req",e),L(n,"SID","null"),r.Z=!0,fr(r,n,null)):fr(r,n,e),this.G=2}}else this.G==3&&(t?$i(this,t):this.i.length==0||pa(this.h)||$i(this))};function $i(t,e){var n;e?n=e.m:n=t.U++;const s=Te(t.F);L(s,"SID",t.I),L(s,"RID",n),L(s,"AID",t.T),cn(t,s),t.o&&t.s&&Kr(s,t.o,t.s),n=new sn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ka(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),qr(t.h,n),fr(n,s,e)}function cn(t,e){t.ia&&xr(t.ia,function(n,s){L(e,s,n)}),t.l&&ua({},function(n,s){L(e,s,n)})}function ka(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Z(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Eh(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Aa(t){t.g||t.u||(t.Z=1,Qo(t.Ia,t),t.A=0)}function Gr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=tn(Z(t.Ia,t),xa(t,t.A)),t.A++,!0)}g.Ia=function(){if(this.u=null,_a(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=tn(Z(this.eb,this),t)}};g.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ie(10),ms(this),_a(this))};function Qr(t){t.B!=null&&(I.clearTimeout(t.B),t.B=null)}function _a(t){t.g=new sn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Te(t.sa);L(e,"RID","rpc"),L(e,"SID",t.I),L(e,"CI",t.L?"0":"1"),L(e,"AID",t.T),L(e,"TYPE","xmlhttp"),cn(t,e),t.o&&t.s&&Kr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=hs(Te(e)),n.s=null,n.P=!0,ia(n,t)}g.cb=function(){this.v!=null&&(this.v=null,ms(this),Gr(this),ie(19))};function jn(t){t.v!=null&&(I.clearTimeout(t.v),t.v=null)}function Na(t,e){var n=null;if(t.g==e){jn(t),Qr(t),t.g=null;var s=2}else if(pr(t.h,e))n=e.D,ya(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=as(),H(s,new ta(s,n)),ps(t)}else Aa(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Dh(t,e)||s==2&&Gr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:qe(t,5);break;case 4:qe(t,10);break;case 3:qe(t,6);break;default:qe(t,2)}}}function xa(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qe(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Z(t.kb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||$n(n,"https"),hs(n)),Ih(n.toString(),s)}else ie(2);t.G=0,t.l&&t.l.va(e),Ra(t),Da(t)}g.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function Ra(t){if(t.G=0,t.la=[],t.l){const e=va(t.h);(e.length!=0||t.i.length!=0)&&(Ni(t.la,e),Ni(t.la,t.i),t.h.i.length=0,_r(t.i),t.i.length=0),t.l.ua()}}function La(t,e,n){var s=n instanceof Ke?Te(n):new Ke(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),qn(s,s.m);else{var r=I.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ke(null,void 0);s&&$n(i,s),e&&(i.g=e),r&&qn(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&L(s,n,e),L(s,"VER",t.ma),cn(t,s),s}function Oa(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new P(new on({jb:!0})):new P(t.ra),e.Ka(t.H),e}function Ma(){}g=Ma.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Ra=function(){};function zn(){if(at&&!(10<=Number(jl)))throw Error("Environmental error: no available transport.")}zn.prototype.g=function(t,e){return new ce(t,e)};function ce(t,e){z.call(this),this.g=new Ca(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Vn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yt(this)}G(ce,z);ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=La(t,null,t.V),ps(t)};ce.prototype.close=function(){Hr(this.g)};ce.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pr(t),t=n);e.i.push(new yh(e.ab++,t)),e.G==3&&ps(e)};ce.prototype.M=function(){this.g.l=null,delete this.j,Hr(this.g),delete this.g,ce.X.M.call(this)};function Pa(t){Ur.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}G(Pa,Ur);function Fa(){$r.call(this),this.status=1}G(Fa,$r);function yt(t){this.g=t}G(yt,Ma);yt.prototype.xa=function(){H(this.g,"a")};yt.prototype.wa=function(t){H(this.g,new Pa(t))};yt.prototype.va=function(t){H(this.g,new Fa)};yt.prototype.ua=function(){H(this.g,"b")};zn.prototype.createWebChannel=zn.prototype.g;ce.prototype.send=ce.prototype.u;ce.prototype.open=ce.prototype.m;ce.prototype.close=ce.prototype.close;cs.NO_ERROR=0;cs.TIMEOUT=8;cs.HTTP_ERROR=6;na.COMPLETE="complete";sa.EventType=nn;nn.OPEN="a";nn.CLOSE="b";nn.ERROR="c";nn.MESSAGE="d";z.prototype.listen=z.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.Oa;P.prototype.getLastErrorCode=P.prototype.Ea;P.prototype.getStatus=P.prototype.aa;P.prototype.getResponseJson=P.prototype.Sa;P.prototype.getResponseText=P.prototype.fa;P.prototype.send=P.prototype.da;P.prototype.setWithCredentials=P.prototype.Ka;var kh=function(){return new zn},Ah=function(){return as()},zs=cs,_h=na,Nh=Ye,qi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},xh=on,vn=sa,Rh=P;const ji="@firebase/firestore";/**
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
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
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
 */let vt="9.19.0";/**
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
 */const Qe=new No("@firebase/firestore");function zi(){return Qe.logLevel}function y(t,...e){if(Qe.logLevel<=_.DEBUG){const n=e.map(Wr);Qe.debug(`Firestore (${vt}): ${t}`,...n)}}function be(t,...e){if(Qe.logLevel<=_.ERROR){const n=e.map(Wr);Qe.error(`Firestore (${vt}): ${t}`,...n)}}function Kn(t,...e){if(Qe.logLevel<=_.WARN){const n=e.map(Wr);Qe.warn(`Firestore (${vt}): ${t}`,...n)}}function Wr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function E(t="Unexpected state"){const e=`FIRESTORE (${vt}) INTERNAL ASSERTION FAILED: `+t;throw be(e),new Error(e)}function R(t,e){t||E()}function S(t,e){return t}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends pt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ne{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Va{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class Oh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mh{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ne;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ne,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ne)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Va(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return R(e===null||typeof e=="string"),new W(e)}}class Ph{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=W.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Fh{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ph(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bh{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(R(typeof n.token=="string"),this.T=n.token,new Vh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Uh(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ba{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Uh(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function N(t,e){return t<e?-1:t>e?1:0}function ct(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class U{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return U.fromMillis(Date.now())}static fromDate(e){return U.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new U(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new U(0,0))}static max(){return new b(new U(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Gt{constructor(e,n,s){n===void 0?n=0:n>e.length&&E(),s===void 0?s=e.length-n:s>e.length-n&&E(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class O extends Gt{construct(e,n,s){return new O(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new w(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new O(n)}static emptyPath(){return new O([])}}const $h=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends Gt{construct(e,n,s){return new J(e,n,s)}static isValidIdentifier(e){return $h.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new w(d.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new w(d.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new w(d.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new J(n)}static emptyPath(){return new J([])}}/**
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(O.fromString(e))}static fromName(e){return new v(O.fromString(e).popFirst(5))}static empty(){return new v(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return O.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new O(e.slice()))}}function qh(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=b.fromTimestamp(s===1e9?new U(n+1,0):new U(n,s));return new Oe(r,v.empty(),e)}function jh(t){return new Oe(t.readTime,t.key,-1)}class Oe{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Oe(b.min(),v.empty(),-1)}static max(){return new Oe(b.max(),v.empty(),-1)}}function zh(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=v.comparator(t.documentKey,e.documentKey),n!==0?n:N(t.largestBatchId,e.largestBatchId))}/**
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
 */const Kh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function un(t){if(t.code!==d.FAILED_PRECONDITION||t.message!==Kh)throw t;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):f.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):f.reject(n)}static resolve(e){return new f((n,s)=>{n(e)})}static reject(e){return new f((n,s)=>{s(e)})}static waitFor(e){return new f((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=f.resolve(!1);for(const s of e)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new f((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new f((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ln(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Yr.ct=-1;function gs(t){return t==null}function Hn(t){return t===0&&1/t==-1/0}function Gh(t){return typeof t=="number"&&Number.isInteger(t)&&!Hn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ki(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ua(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class q{constructor(e,n){this.comparator=e,this.root=n||K.EMPTY}insert(e,n){return new q(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(e){return new q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,K.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wn(this.root,e,this.comparator,!1)}getReverseIterator(){return new wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wn(this.root,e,this.comparator,!0)}}class wn{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class K{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??K.RED,this.left=r??K.EMPTY,this.right=i??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new K(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return K.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(t,e,n,s,r){return this}insert(t,e,n){return new K(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ${constructor(e){this.comparator=e,this.data=new q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hi(this.data.getIterator())}getIteratorFrom(e){return new Hi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof $)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $(this.comparator);return n.data=e,n}}class Hi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class le{constructor(e){this.fields=e,e.sort(J.comparator)}static empty(){return new le([])}unionWith(e){let n=new $(J.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new le(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ct(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class te{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Qh("Invalid base64 string: "+r):r}}(e);return new te(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new te(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}te.EMPTY_BYTE_STRING=new te("");const Wh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Me(t){if(R(!!t),typeof t=="string"){let e=0;const n=Wh.exec(t);if(R(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:V(t.seconds),nanos:V(t.nanos)}}function V(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ut(t){return typeof t=="string"?te.fromBase64String(t):te.fromUint8Array(t)}/**
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
 */function $a(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qa(t){const e=t.mapValue.fields.__previous_value__;return $a(e)?qa(e):e}function Qt(t){const e=Me(t.mapValue.fields.__local_write_time__.timestampValue);return new U(e.seconds,e.nanos)}/**
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
 */class Yh{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const En={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function We(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$a(t)?4:Xh(t)?9007199254740991:10:E()}function pe(t,e){if(t===e)return!0;const n=We(t);if(n!==We(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qt(t).isEqual(Qt(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Me(s.timestampValue),o=Me(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ut(s.bytesValue).isEqual(ut(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return V(s.geoPointValue.latitude)===V(r.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return V(s.integerValue)===V(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=V(s.doubleValue),o=V(r.doubleValue);return i===o?Hn(i)===Hn(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ct(t.arrayValue.values||[],e.arrayValue.values||[],pe);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ki(i)!==Ki(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!pe(i[a],o[a])))return!1;return!0}(t,e);default:return E()}}function Yt(t,e){return(t.values||[]).find(n=>pe(n,e))!==void 0}function lt(t,e){if(t===e)return 0;const n=We(t),s=We(e);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=V(r.integerValue||r.doubleValue),a=V(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gi(t.timestampValue,e.timestampValue);case 4:return Gi(Qt(t),Qt(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ut(r),a=ut(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=N(V(r.latitude),V(i.latitude));return o!==0?o:N(V(r.longitude),V(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=lt(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===En.mapValue&&i===En.mapValue)return 0;if(r===En.mapValue)return 1;if(i===En.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=N(a[l],u[l]);if(h!==0)return h;const m=lt(o[a[l]],c[u[l]]);if(m!==0)return m}return N(a.length,u.length)}(t.mapValue,e.mapValue);default:throw E()}}function Gi(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return N(t,e);const n=Me(t),s=Me(e),r=N(n.seconds,s.seconds);return r!==0?r:N(n.nanos,s.nanos)}function ht(t){return gr(t)}function gr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Me(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ut(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,v.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=gr(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${gr(s.fields[a])}`;return i+"}"}(t.mapValue):E();var e,n}function yr(t){return!!t&&"integerValue"in t}function Xr(t){return!!t&&"arrayValue"in t}function Qi(t){return!!t&&"nullValue"in t}function Wi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kn(t){return!!t&&"mapValue"in t}function xt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=xt(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Xh(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!kn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xt(n)}setAll(e){let n=J.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=xt(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());kn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];kn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){wt(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ue(xt(this.value))}}function ja(t){const e=[];return wt(t.fields,(n,s)=>{const r=new J([n]);if(kn(s)){const i=ja(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new le(e)}/**
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
 */class X{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new X(e,0,b.min(),b.min(),b.min(),ue.empty(),0)}static newFoundDocument(e,n,s,r){return new X(e,1,n,b.min(),s,r,0)}static newNoDocument(e,n){return new X(e,2,n,b.min(),b.min(),ue.empty(),0)}static newUnknownDocument(e,n){return new X(e,3,n,b.min(),b.min(),ue.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof X&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.position=e,this.inclusive=n}}function Yi(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=lt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xi(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Jh(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{}class B extends za{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ed(e,n,s):n==="array-contains"?new sd(e,s):n==="in"?new rd(e,s):n==="not-in"?new id(e,s):n==="array-contains-any"?new od(e,s):new B(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new td(e,s):new nd(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(lt(n,this.value)):n!==null&&We(this.value)===We(n)&&this.matchesComparison(lt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ge extends za{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ge(e,n)}matches(e){return Ka(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ka(t){return t.op==="and"}function Ha(t){return Zh(t)&&Ka(t)}function Zh(t){for(const e of t.filters)if(e instanceof ge)return!1;return!0}function vr(t){if(t instanceof B)return t.field.canonicalString()+t.op.toString()+ht(t.value);if(Ha(t))return t.filters.map(e=>vr(e)).join(",");{const e=t.filters.map(n=>vr(n)).join(",");return`${t.op}(${e})`}}function Ga(t,e){return t instanceof B?function(n,s){return s instanceof B&&n.op===s.op&&n.field.isEqual(s.field)&&pe(n.value,s.value)}(t,e):t instanceof ge?function(n,s){return s instanceof ge&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ga(i,s.filters[o]),!0):!1}(t,e):void E()}function Qa(t){return t instanceof B?function(e){return`${e.field.canonicalString()} ${e.op} ${ht(e.value)}`}(t):t instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(Qa).join(" ,")+"}"}(t):"Filter"}class ed extends B{constructor(e,n,s){super(e,n,s),this.key=v.fromName(s.referenceValue)}matches(e){const n=v.comparator(e.key,this.key);return this.matchesComparison(n)}}class td extends B{constructor(e,n){super(e,"in",n),this.keys=Wa("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nd extends B{constructor(e,n){super(e,"not-in",n),this.keys=Wa("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wa(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class sd extends B{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xr(n)&&Yt(n.arrayValue,this.value)}}class rd extends B{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yt(this.value.arrayValue,n)}}class id extends B{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yt(this.value.arrayValue,n)}}class od extends B{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Yt(this.value.arrayValue,s))}}/**
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
 */class ad{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ji(t,e=null,n=[],s=[],r=null,i=null,o=null){return new ad(t,e,n,s,r,i,o)}function Jr(t){const e=S(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>vr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),gs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ht(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ht(s)).join(",")),e.ft=n}return e.ft}function Zr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jh(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ga(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xi(t.startAt,e.startAt)&&Xi(t.endAt,e.endAt)}function wr(t){return v.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ys{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function cd(t,e,n,s,r,i,o,a){return new ys(t,e,n,s,r,i,o,a)}function Ya(t){return new ys(t)}function Zi(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ud(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ld(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function hd(t){return t.collectionGroup!==null}function rt(t){const e=S(t);if(e.dt===null){e.dt=[];const n=ld(e),s=ud(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Rt(n)),e.dt.push(new Rt(J.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Rt(J.keyField(),i))}}}return e.dt}function Se(t){const e=S(t);if(!e.wt)if(e.limitType==="F")e.wt=Ji(e.path,e.collectionGroup,rt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of rt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Rt(i.field,o))}const s=e.endAt?new Gn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Gn(e.startAt.position,e.startAt.inclusive):null;e.wt=Ji(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Er(t,e,n){return new ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vs(t,e){return Zr(Se(t),Se(e))&&t.limitType===e.limitType}function Xa(t){return`${Jr(Se(t))}|lt:${t.limitType}`}function Ir(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Qa(s)).join(", ")}]`),gs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ht(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ht(s)).join(",")),`Target(${n})`}(Se(t))}; limitType=${t.limitType})`}function ws(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):v.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of rt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Yi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,rt(n),s)||n.endAt&&!function(r,i,o){const a=Yi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,rt(n),s))}(t,e)}function dd(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ja(t){return(e,n)=>{let s=!1;for(const r of rt(t)){const i=fd(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function fd(t,e,n){const s=t.field.isKeyField()?v.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?lt(a,c):E()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
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
 */class Et{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){wt(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ua(this.inner)}size(){return this.innerSize}}/**
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
 */const md=new q(v.comparator);function Ce(){return md}const Za=new q(v.comparator);function kt(...t){let e=Za;for(const n of t)e=e.insert(n.key,n);return e}function ec(t){let e=Za;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function je(){return Lt()}function tc(){return Lt()}function Lt(){return new Et(t=>t.toString(),(t,e)=>t.isEqual(e))}const pd=new q(v.comparator),gd=new $(v.comparator);function k(...t){let e=gd;for(const n of t)e=e.add(n);return e}const yd=new $(N);function nc(){return yd}/**
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
 */function sc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hn(e)?"-0":e}}function rc(t){return{integerValue:""+t}}function vd(t,e){return Gh(e)?rc(e):sc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this._=void 0}}function wd(t,e,n){return t instanceof Qn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Xt?oc(t,e):t instanceof Jt?ac(t,e):function(s,r){const i=ic(s,r),o=eo(i)+eo(s._t);return yr(i)&&yr(s._t)?rc(o):sc(s.serializer,o)}(t,e)}function Ed(t,e,n){return t instanceof Xt?oc(t,e):t instanceof Jt?ac(t,e):n}function ic(t,e){return t instanceof Wn?yr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Qn extends Es{}class Xt extends Es{constructor(e){super(),this.elements=e}}function oc(t,e){const n=cc(e);for(const s of t.elements)n.some(r=>pe(r,s))||n.push(s);return{arrayValue:{values:n}}}class Jt extends Es{constructor(e){super(),this.elements=e}}function ac(t,e){let n=cc(e);for(const s of t.elements)n=n.filter(r=>!pe(r,s));return{arrayValue:{values:n}}}class Wn extends Es{constructor(e,n){super(),this.serializer=e,this._t=n}}function eo(t){return V(t.integerValue||t.doubleValue)}function cc(t){return Xr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Id(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Xt&&s instanceof Xt||n instanceof Jt&&s instanceof Jt?ct(n.elements,s.elements,pe):n instanceof Wn&&s instanceof Wn?pe(n._t,s._t):n instanceof Qn&&s instanceof Qn}(t.transform,e.transform)}class Td{constructor(e,n){this.version=e,this.transformResults=n}}class we{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new we}static exists(e){return new we(void 0,e)}static updateTime(e){return new we(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function An(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Is{}function uc(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hc(t.key,we.none()):new hn(t.key,t.data,we.none());{const n=t.data,s=ue.empty();let r=new $(J.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Xe(t.key,s,new le(r.toArray()),we.none())}}function bd(t,e,n){t instanceof hn?function(s,r,i){const o=s.value.clone(),a=no(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xe?function(s,r,i){if(!An(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=no(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(lc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ot(t,e,n,s){return t instanceof hn?function(r,i,o,a){if(!An(r.precondition,i))return o;const c=r.value.clone(),u=so(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xe?function(r,i,o,a){if(!An(r.precondition,i))return o;const c=so(r.fieldTransforms,a,i),u=i.data;return u.setAll(lc(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return An(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Sd(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ic(s.transform,r||null);i!=null&&(n===null&&(n=ue.empty()),n.set(s.field,i))}return n||null}function to(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ct(n,s,(r,i)=>Id(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hn extends Is{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Xe extends Is{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function no(t,e,n){const s=new Map;R(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Ed(o,a,n[r]))}return s}function so(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,wd(i,o,e))}return s}class hc extends Is{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cd extends Is{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Dd{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&bd(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ot(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ot(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tc();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=uc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),k())}isEqual(e){return this.batchId===e.batchId&&ct(this.mutations,e.mutations,(n,s)=>to(n,s))&&ct(this.baseMutations,e.baseMutations,(n,s)=>to(n,s))}}class ei{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){R(e.mutations.length===s.length);let r=pd;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ei(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ad{constructor(e){this.count=e}}/**
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
 */var F,A;function _d(t){switch(t){default:return E();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function dc(t){if(t===void 0)return be("GRPC error has no .code"),d.UNKNOWN;switch(t){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return E()}}(A=F||(F={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return In}static getOrCreateInstance(){return In===null&&(In=new ti),In}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let In=null;/**
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
 */class Ts{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,dn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ts(b.min(),r,nc(),Ce(),k())}}class dn{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new dn(s,n,k(),k(),k())}}/**
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
 */class _n{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class fc{constructor(e,n){this.targetId=e,this.Et=n}}class mc{constructor(e,n,s=te.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ro{constructor(){this.At=0,this.Rt=oo(),this.vt=te.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=k(),n=k(),s=k();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:E()}}),new dn(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=oo()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Nd{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Ce(),this.qt=io(),this.Ut=new $(N)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:E()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(wr(o))if(r===0){const a=new v(o.path);this.Qt(s,a,X.newNoDocument(a,b.min()))}else R(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=ti.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&wr(a.target)){const c=new v(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,X.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=k();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Ts(e,n,this.Ut,this.Lt,s);return this.Lt=Ce(),this.qt=io(),this.Ut=new $(N),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new ro,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new $(N),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||y("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new ro),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function io(){return new q(v.comparator)}function oo(){return new q(v.comparator)}/**
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
 */const xd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ld=(()=>({and:"AND",or:"OR"}))();class Od{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yn(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Md(t,e){return Yn(t,e.toTimestamp())}function me(t){return R(!!t),b.fromTimestamp(function(e){const n=Me(e);return new U(n.seconds,n.nanos)}(t))}function ni(t,e){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function gc(t){const e=O.fromString(t);return R(Ec(e)),e}function Tr(t,e){return ni(t.databaseId,e.path)}function Ks(t,e){const n=gc(e);if(n.get(1)!==t.databaseId.projectId)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new v(yc(n))}function br(t,e){return ni(t.databaseId,e)}function Pd(t){const e=gc(t);return e.length===4?O.emptyPath():yc(e)}function Sr(t){return new O(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yc(t){return R(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ao(t,e,n){return{name:Tr(t,e),fields:n.value.mapValue.fields}}function Fd(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(R(u===void 0||typeof u=="string"),te.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),te.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?d.UNKNOWN:dc(c.code);return new w(u,c.message||"")}(o);n=new mc(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ks(t,s.document.name),i=me(s.document.updateTime),o=s.document.createTime?me(s.document.createTime):b.min(),a=new ue({mapValue:{fields:s.document.fields}}),c=X.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new _n(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ks(t,s.document),i=s.readTime?me(s.readTime):b.min(),o=X.newNoDocument(r,i),a=s.removedTargetIds||[];n=new _n([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ks(t,s.document),i=s.removedTargetIds||[];n=new _n([],i,r,null)}else{if(!("filter"in e))return E();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Ad(r),o=s.targetId;n=new fc(o,i)}}return n}function Vd(t,e){let n;if(e instanceof hn)n={update:ao(t,e.key,e.value)};else if(e instanceof hc)n={delete:Tr(t,e.key)};else if(e instanceof Xe)n={update:ao(t,e.key,e.data),updateMask:Gd(e.fieldMask)};else{if(!(e instanceof Cd))return E();n={verify:Tr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Qn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Jt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wn)return{fieldPath:i.field.canonicalString(),increment:o._t};throw E()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Md(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:E()}(t,e.precondition)),n}function Bd(t,e){return t&&t.length>0?(R(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?me(s.updateTime):me(r);return i.isEqual(b.min())&&(i=me(r)),new Td(i,s.transformResults||[])}(n,e))):[]}function Ud(t,e){return{documents:[br(t,e.path)]}}function $d(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=br(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=br(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return wc(ge.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ze(l.field),direction:zd(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||gs(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function qd(t){let e=Pd(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){R(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=vc(l);return h instanceof ge&&Ha(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Rt(et(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,gs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,m=l.values||[];return new Gn(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,m=l.values||[];return new Gn(m,h)}(n.endAt)),cd(e,r,o,i,a,"F",c,u)}function jd(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function vc(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=et(e.unaryFilter.field);return B.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=et(e.unaryFilter.field);return B.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=et(e.unaryFilter.field);return B.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=et(e.unaryFilter.field);return B.create(i,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(t):t.fieldFilter!==void 0?function(e){return B.create(et(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(n=>vc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return E()}}(e.compositeFilter.op))}(t):E()}function zd(t){return xd[t]}function Kd(t){return Rd[t]}function Hd(t){return Ld[t]}function Ze(t){return{fieldPath:t.canonicalString()}}function et(t){return J.fromServerFormat(t.fieldPath)}function wc(t){return t instanceof B?function(e){if(e.op==="=="){if(Wi(e.value))return{unaryFilter:{field:Ze(e.field),op:"IS_NAN"}};if(Qi(e.value))return{unaryFilter:{field:Ze(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wi(e.value))return{unaryFilter:{field:Ze(e.field),op:"IS_NOT_NAN"}};if(Qi(e.value))return{unaryFilter:{field:Ze(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ze(e.field),op:Kd(e.op),value:e.value}}}(t):t instanceof ge?function(e){const n=e.getFilters().map(s=>wc(s));return n.length===1?n[0]:{compositeFilter:{op:Hd(e.op),filters:n}}}(t):E()}function Gd(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ec(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class He{constructor(e,n,s,r,i=b.min(),o=b.min(),a=te.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new He(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Qd{constructor(e){this.se=e}}function Wd(t){const e=qd({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Er(e,e.limit,"L"):e}/**
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
 */class Yd{constructor(){this.He=new Xd}addToCollectionParentIndex(e,n){return this.He.add(n),f.resolve()}getCollectionParents(e,n){return f.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return f.resolve()}deleteFieldIndex(e,n){return f.resolve()}getDocumentsMatchingTarget(e,n){return f.resolve(null)}getIndexType(e,n){return f.resolve(0)}getFieldIndexes(e,n){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,n){return f.resolve(Oe.min())}getMinOffsetFromCollectionGroup(e,n){return f.resolve(Oe.min())}updateCollectionGroup(e,n,s){return f.resolve()}updateIndexEntries(e,n){return f.resolve()}}class Xd{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new $(O.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $(O.comparator)).toArray()}}/**
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
 */class dt{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new dt(0)}static bn(){return new dt(-1)}}/**
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
 */class Jd{constructor(){this.changes=new Et(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,X.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ef{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ot(s.mutation,r,le.empty(),U.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,k()).next(()=>s))}getLocalViewOfDocuments(e,n,s=k()){const r=je();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=kt();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=je();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,k()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Ce();const o=Lt(),a=Lt();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Xe)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Ot(l.mutation,u,l.mutation.getFieldMask(),U.now())):o.set(u.key,le.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Zd(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Lt();let r=new q((o,a)=>o-a),i=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||le.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||k()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=tc();l.forEach(m=>{if(!i.has(m)){const p=uc(n.get(m),s.get(m));p!==null&&h.set(m,p),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hd(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):f.resolve(je());let a=-1,c=i;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(m=>{c=c.insert(l,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,k())).next(l=>({batchId:a,changes:ec(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new v(n)).next(s=>{let r=kt();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=kt();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const c=function(u,l){return new ys(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,X.newInvalidDocument(u)))});let o=kt();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Ot(u.mutation,c,le.empty(),U.now()),ws(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class tf{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return f.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:me(s.createTime)}),f.resolve()}getNamedQuery(e,n){return f.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Wd(s.bundledQuery),readTime:me(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.overlays=new q(v.comparator),this.ts=new Map}getOverlay(e,n){return f.resolve(this.overlays.get(n))}getOverlays(e,n){const s=je();return f.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),f.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),f.resolve()}getOverlaysForCollection(e,n,s){const r=je(),i=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return f.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new q((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=je(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=je(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return f.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new kd(n,s));let i=this.ts.get(n);i===void 0&&(i=k(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class si{constructor(){this.es=new $(j.ns),this.ss=new $(j.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new j(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new j(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new v(new O([])),s=new j(n,e),r=new j(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new v(new O([])),s=new j(n,e),r=new j(n,e+1);let i=k();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new j(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class j{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return v.comparator(e.key,n.key)||N(e.ds,n.ds)}static rs(e,n){return N(e.ds,n.ds)||v.comparator(e.key,n.key)}}/**
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
 */class sf{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new $(j.ns)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dd(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new j(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,n){return f.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new j(n,0),r=new j(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new $(N);return n.forEach(r=>{const i=new j(r,0),o=new j(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),f.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new j(new v(i),0);let a=new $(N);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ds)),!0)},o),f.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){R(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return f.forEach(n.mutations,r=>{const i=new j(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new j(n,0),r=this._s.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rf{constructor(e){this.Ts=e,this.docs=new q(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():X.newInvalidDocument(n))}getEntries(e,n){let s=Ce();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():X.newInvalidDocument(r))}),f.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Ce();const o=n.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zh(jh(l),s)<=0||(r.has(l.key)||ws(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,n,s,r){E()}Es(e,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new of(this)}getSize(e){return f.resolve(this.size)}}class of extends Jd{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),f.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class af{constructor(e){this.persistence=e,this.As=new Et(n=>Jr(n),Zr),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Rs=0,this.vs=new si,this.targetCount=0,this.bs=dt.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),f.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new dt(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,f.resolve()}updateTargetData(e,n){return this.Sn(n),f.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return f.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),f.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),f.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return f.resolve(s)}containsKey(e,n){return f.resolve(this.vs.containsKey(n))}}/**
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
 */class cf{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Yr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new af(this),this.indexManager=new Yd,this.remoteDocumentCache=function(s){return new rf(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Qd(n),this.xs=new tf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nf,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new sf(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){y("MemoryPersistence","Starting transaction:",e);const r=new uf(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return f.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class uf extends Hh{constructor(e){super(),this.currentSequenceNumber=e}}class ri{constructor(e){this.persistence=e,this.$s=new si,this.Ms=null}static Fs(e){return new ri(e)}get Bs(){if(this.Ms)return this.Ms;throw E()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),f.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),f.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Bs,s=>{const r=v.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,b.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return f.or([()=>f.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class ii{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=k(),r=k();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ii(e,n.fromCache,s,r)}}/**
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
 */class lf{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Zi(n))return f.resolve(null);let s=Se(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Er(n,null,"F"),s=Se(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=k(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,Er(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,s,r){return Zi(n)||r.isEqual(b.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(zi()<=_.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ir(n)),this.Fi(e,o,n,qh(r,-1)))})}$i(e,n){let s=new $(Ja(e));return n.forEach((r,i)=>{ws(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return zi()<=_.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ir(n)),this.xi.getDocumentsMatchingQuery(e,n,Oe.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class hf{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new q(N),this.qi=new Et(i=>Jr(i),Zr),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ef(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function df(t,e,n,s){return new hf(t,e,n,s)}async function Ic(t,e){const n=S(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=k();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function ff(t,e){const n=S(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let m=f.resolve();return h.forEach(p=>{m=m.next(()=>u.getEntry(a,p)).next(C=>{const T=c.docVersions.get(p);R(T!==null),C.version.compareTo(T)<0&&(l.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),u.addEntry(C)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Tc(t){const e=S(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function mf(t,e){const n=S(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const m=r.get(h);if(!m)return;a.push(n.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,l.addedDocuments,h)));let p=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(te.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(C,T,x){return C.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,p,l)&&a.push(n.Ds.updateTargetData(i,p))});let c=Ce(),u=k();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(pf(i,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(b.min())){const l=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Li=r,i))}function pf(t,e,n){let s=k(),r=k();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Ce();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:r}})}function gf(t,e){const n=S(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function yf(t,e){const n=S(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,f.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new He(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Cr(t,e,n){const s=S(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ln(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function co(t,e,n){const s=S(t);let r=b.min(),i=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=S(a),h=l.qi.get(u);return h!==void 0?f.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,Se(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:b.min(),n?i:k())).next(a=>(vf(s,dd(e),a),{documents:a,Wi:i})))}function vf(t,e,n){let s=t.Ui.get(e)||b.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class uo{constructor(){this.activeTargetIds=nc()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wf{constructor(){this.Br=new uo,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new uo,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ef{qr(e){}shutdown(){}}/**
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
 */class lo{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn=null;function Hs(){return Tn===null?Tn=268435456+Math.round(2147483648*Math.random()):Tn++,"0x"+Tn.toString(16)}/**
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
 */const If={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Tf{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Q="WebChannelConnection";class bf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=Hs(),a=this.ao(e,n);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(u=>(y("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Kn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+vt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=If[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=Hs();return new Promise((o,a)=>{const c=new Rh;c.setWithCredentials(!0),c.listenOnce(_h.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case zs.NO_ERROR:const l=c.getResponseJson();y(Q,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case zs.TIMEOUT:y(Q,`RPC '${e}' ${i} timed out`),a(new w(d.DEADLINE_EXCEEDED,"Request time out"));break;case zs.HTTP_ERROR:const h=c.getStatus();if(y(Q,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const p=m==null?void 0:m.error;if(p&&p.status&&p.message){const C=function(T){const x=T.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(x)>=0?x:d.UNKNOWN}(p.status);a(new w(C,p.message))}else a(new w(d.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(d.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{y(Q,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);y(Q,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}wo(e,n,s){const r=Hs(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kh(),a=Ah(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new xh({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");y(Q,`Creating RPC '${e}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,m=!1;const p=new Tf({Wr:T=>{m?y(Q,`Not sending because RPC '${e}' stream ${r} is closed:`,T):(h||(y(Q,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),y(Q,`RPC '${e}' stream ${r} sending:`,T),l.send(T))},Hr:()=>l.close()}),C=(T,x,ne)=>{T.listen(x,oe=>{try{ne(oe)}catch(ye){setTimeout(()=>{throw ye},0)}})};return C(l,vn.EventType.OPEN,()=>{m||y(Q,`RPC '${e}' stream ${r} transport opened.`)}),C(l,vn.EventType.CLOSE,()=>{m||(m=!0,y(Q,`RPC '${e}' stream ${r} transport closed`),p.so())}),C(l,vn.EventType.ERROR,T=>{m||(m=!0,Kn(Q,`RPC '${e}' stream ${r} transport errored:`,T),p.so(new w(d.UNAVAILABLE,"The operation could not be completed")))}),C(l,vn.EventType.MESSAGE,T=>{var x;if(!m){const ne=T.data[0];R(!!ne);const oe=ne,ye=oe.error||((x=oe[0])===null||x===void 0?void 0:x.error);if(ye){y(Q,`RPC '${e}' stream ${r} received error:`,ye);const Tt=ye.status;let bt=function(tu){const wi=F[tu];if(wi!==void 0)return dc(wi)}(Tt),vi=ye.message;bt===void 0&&(bt=d.INTERNAL,vi="Unknown error status: "+Tt+" with message "+ye.message),m=!0,p.so(new w(bt,vi)),l.close()}else y(Q,`RPC '${e}' stream ${r} received:`,ne),p.io(ne)}}),C(a,Nh.STAT_EVENT,T=>{T.stat===qi.PROXY?y(Q,`RPC '${e}' stream ${r} detected buffering proxy`):T.stat===qi.NOPROXY&&y(Q,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function Gs(){return typeof document<"u"?document:null}/**
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
 */function bs(t){return new Od(t,!0)}/**
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
 */class bc{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Sc{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new bc(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(be(n.toString()),be("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new w(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sf extends Sc{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Fd(this.serializer,e),s=function(r){if(!("targetChange"in r))return b.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?b.min():i.readTime?me(i.readTime):b.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Sr(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=wr(a)?{documents:Ud(r,a)}:{query:$d(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=pc(r,i.resumeToken):i.snapshotVersion.compareTo(b.min())>0&&(o.readTime=Yn(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=jd(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Sr(this.serializer),n.removeTarget=e,this.Fo(n)}}class Cf extends Sc{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(R(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=Bd(e.writeResults,e.commitTime),s=me(e.commitTime);return this.listener.Zo(s,n)}return R(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Sr(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Vd(this.serializer,s))};this.Fo(n)}}/**
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
 */class Df extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(d.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(d.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class kf{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(be(n),this.ru=!1):y("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class Af{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Je(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.du.add(4),await fn(c),c.mu.set("Unknown"),c.du.delete(4),await Ss(c)}(this))})}),this.mu=new kf(s,r)}}async function Ss(t){if(Je(t))for(const e of t.wu)await e(!0)}async function fn(t){for(const e of t.wu)await e(!1)}function Cc(t,e){const n=S(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),ci(n)?ai(n):It(n).No()&&oi(n,e))}function Dc(t,e){const n=S(t),s=It(n);n.fu.delete(e),s.No()&&kc(n,e),n.fu.size===0&&(s.No()?s.$o():Je(n)&&n.mu.set("Unknown"))}function oi(t,e){t.gu.Ot(e.targetId),It(t).jo(e)}function kc(t,e){t.gu.Ot(e),It(t).Wo(e)}function ai(t){t.gu=new Nd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),It(t).start(),t.mu.ou()}function ci(t){return Je(t)&&!It(t).xo()&&t.fu.size>0}function Je(t){return S(t).du.size===0}function Ac(t){t.gu=void 0}async function _f(t){t.fu.forEach((e,n)=>{oi(t,e)})}async function Nf(t,e){Ac(t),ci(t)?(t.mu.au(e),ai(t)):t.mu.set("Unknown")}async function xf(t,e,n){if(t.mu.set("Online"),e instanceof mc&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xn(t,s)}else if(e instanceof _n?t.gu.Kt(e):e instanceof fc?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(b.min()))try{const s=await Tc(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(c);u&&r.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(te.EMPTY_BYTE_STRING,c.snapshotVersion)),kc(r,a);const u=new He(c.target,a,1,c.sequenceNumber);oi(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await Xn(t,s)}}async function Xn(t,e,n){if(!ln(e))throw e;t.du.add(1),await fn(t),t.mu.set("Offline"),n||(n=()=>Tc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ss(t)})}function _c(t,e){return e().catch(n=>Xn(t,n,e))}async function Cs(t){const e=S(t),n=Pe(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Rf(e);)try{const r=await gf(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,Lf(e,r)}catch(r){await Xn(e,r)}Nc(e)&&xc(e)}function Rf(t){return Je(t)&&t.lu.length<10}function Lf(t,e){t.lu.push(e);const n=Pe(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Nc(t){return Je(t)&&!Pe(t).xo()&&t.lu.length>0}function xc(t){Pe(t).start()}async function Of(t){Pe(t).tu()}async function Mf(t){const e=Pe(t);for(const n of t.lu)e.Yo(n.mutations)}async function Pf(t,e,n){const s=t.lu.shift(),r=ei.from(s,e,n);await _c(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Cs(t)}async function Ff(t,e){e&&Pe(t).Jo&&await async function(n,s){if(r=s.code,_d(r)&&r!==d.ABORTED){const i=n.lu.shift();Pe(n).Oo(),await _c(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Cs(n)}var r}(t,e),Nc(t)&&xc(t)}async function ho(t,e){const n=S(t);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Je(n);n.du.add(3),await fn(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ss(n)}async function Vf(t,e){const n=S(t);e?(n.du.delete(2),await Ss(n)):e||(n.du.add(2),await fn(n),n.mu.set("Unknown"))}function It(t){return t.yu||(t.yu=function(e,n,s){const r=S(e);return r.nu(),new Sf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:_f.bind(null,t),Zr:Nf.bind(null,t),zo:xf.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),ci(t)?ai(t):t.mu.set("Unknown")):(await t.yu.stop(),Ac(t))})),t.yu}function Pe(t){return t.pu||(t.pu=function(e,n,s){const r=S(e);return r.nu(),new Cf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:Of.bind(null,t),Zr:Ff.bind(null,t),Xo:Mf.bind(null,t),Zo:Pf.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Cs(t)):(await t.pu.stop(),t.lu.length>0&&(y("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class ui{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ui(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function li(t,e){if(be("AsyncQueue",`${e}: ${t}`),ln(t))return new w(d.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class it{constructor(e){this.comparator=e?(n,s)=>e(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=kt(),this.sortedSet=new q(this.comparator)}static emptySet(e){return new it(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new it;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class fo{constructor(){this.Iu=new q(v.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):E():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ft{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ft(e,n,it.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Bf{constructor(){this.Eu=void 0,this.listeners=[]}}class Uf{constructor(){this.queries=new Et(e=>Xa(e),vs),this.onlineState="Unknown",this.Au=new Set}}async function $f(t,e){const n=S(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Bf),r)try{i.Eu=await n.onListen(s)}catch(o){const a=li(o,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&hi(n)}async function qf(t,e){const n=S(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function jf(t,e){const n=S(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&hi(n)}function zf(t,e,n){const s=S(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function hi(t){t.Au.forEach(e=>{e.next()})}class Kf{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ft(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ft.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Rc{constructor(e){this.key=e}}class Lc{constructor(e){this.key=e}}class Hf{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=k(),this.mutatedKeys=k(),this.Ku=Ja(e),this.Gu=new it(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new fo,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const m=r.get(l),p=ws(this.query,h)?h:null,C=!!m&&this.mutatedKeys.has(m.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let x=!1;m&&p?m.data.isEqual(p.data)?C!==T&&(s.track({type:3,doc:p}),x=!0):this.Wu(m,p)||(s.track({type:2,doc:p}),x=!0,(c&&this.Ku(p,c)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!m&&p?(s.track({type:0,doc:p}),x=!0):m&&!p&&(s.track({type:1,doc:m}),x=!0,(c||u)&&(a=!0)),x&&(p?(o=o.add(p),i=T?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((u,l)=>function(h,m){const p=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return p(h)-p(m)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new ft(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new fo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=k(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Lc(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Rc(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=k();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ft.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Gf{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Qf{constructor(e){this.key=e,this.ec=!1}}class Wf{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Et(a=>Xa(a),vs),this.ic=new Map,this.rc=new Set,this.oc=new q(v.comparator),this.uc=new Map,this.cc=new si,this.ac={},this.hc=new Map,this.lc=dt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Yf(t,e){const n=om(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await yf(n.localStore,Se(e));n.isPrimaryClient&&Cc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Xf(n,e,s,a==="current",o.resumeToken)}return r}async function Xf(t,e,n,s,r){t.dc=(h,m,p)=>async function(C,T,x,ne){let oe=T.view.zu(x);oe.Mi&&(oe=await co(C.localStore,T.query,!1).then(({documents:bt})=>T.view.zu(bt,oe)));const ye=ne&&ne.targetChanges.get(T.targetId),Tt=T.view.applyChanges(oe,C.isPrimaryClient,ye);return po(C,T.targetId,Tt.Yu),Tt.snapshot}(t,h,m,p);const i=await co(t.localStore,e,!0),o=new Hf(e,i.Wi),a=o.zu(i.documents),c=dn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);po(t,n,u.Yu);const l=new Gf(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function Jf(t,e){const n=S(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!vs(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Cr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Dc(n.remoteStore,s.targetId),Dr(n,s.targetId)}).catch(un)):(Dr(n,s.targetId),await Cr(n.localStore,s.targetId,!0))}async function Zf(t,e,n){const s=am(t);try{const r=await function(i,o){const a=S(i),c=U.now(),u=o.reduce((m,p)=>m.add(p.key),k());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let p=Ce(),C=k();return a.Ki.getEntries(m,u).next(T=>{p=T,p.forEach((x,ne)=>{ne.isValidDocument()||(C=C.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,p)).next(T=>{l=T;const x=[];for(const ne of o){const oe=Sd(ne,l.get(ne.key).overlayedDocument);oe!=null&&x.push(new Xe(ne.key,oe,ja(oe.value.mapValue),we.exists(!0)))}return a.mutationQueue.addMutationBatch(m,c,x,o)}).next(T=>{h=T;const x=T.applyToLocalDocumentSet(l,C);return a.documentOverlayCache.saveOverlays(m,T.batchId,x)})}).then(()=>({batchId:h.batchId,changes:ec(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new q(N)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await mn(s,r.changes),await Cs(s.remoteStore)}catch(r){const i=li(r,"Failed to persist write");n.reject(i)}}async function Oc(t,e){const n=S(t);try{const s=await mf(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(R(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?R(o.ec):r.removedDocuments.size>0&&(R(o.ec),o.ec=!1))}),await mn(n,s,e)}catch(s){await un(s)}}function mo(t,e,n){const s=S(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=S(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&hi(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function em(t,e,n){const s=S(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new q(v.comparator);o=o.insert(i,X.newNoDocument(i,b.min()));const a=k().add(i),c=new Ts(b.min(),new Map,new $(N),o,a);await Oc(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),di(s)}else await Cr(s.localStore,e,!1).then(()=>Dr(s,e,n)).catch(un)}async function tm(t,e){const n=S(t),s=e.batch.batchId;try{const r=await ff(n.localStore,e);Pc(n,s,null),Mc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await mn(n,r)}catch(r){await un(r)}}async function nm(t,e,n){const s=S(t);try{const r=await function(i,o){const a=S(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(R(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Pc(s,e,n),Mc(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await mn(s,r)}catch(r){await un(r)}}function Mc(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Pc(t,e,n){const s=S(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Dr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Fc(t,s)})}function Fc(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Dc(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),di(t))}function po(t,e,n){for(const s of n)s instanceof Rc?(t.cc.addReference(s.key,e),sm(t,s)):s instanceof Lc?(y("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Fc(t,s.key)):E()}function sm(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(y("SyncEngine","New document in limbo: "+n),t.rc.add(s),di(t))}function di(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new v(O.fromString(e)),s=t.lc.next();t.uc.set(s,new Qf(n)),t.oc=t.oc.insert(n,s),Cc(t.remoteStore,new He(Se(Ya(n.path)),s,2,Yr.ct))}}async function mn(t,e,n){const s=S(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=ii.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Vi,m=>u.persistence.referenceDelegate.addReference(l,h.targetId,m)).next(()=>f.forEach(h.Si,m=>u.persistence.referenceDelegate.removeReference(l,h.targetId,m)))))}catch(l){if(!ln(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const m=u.Li.get(h),p=m.snapshotVersion,C=m.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,C)}}}(s.localStore,i))}async function rm(t,e){const n=S(t);if(!n.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const s=await Ic(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new w(d.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await mn(n,s.Qi)}}function im(t,e){const n=S(t),s=n.uc.get(e);if(s&&s.ec)return k().add(s.key);{let r=k();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function om(t){const e=S(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=im.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=em.bind(null,e),e.nc.zo=jf.bind(null,e.eventManager),e.nc.wc=zf.bind(null,e.eventManager),e}function am(t){const e=S(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nm.bind(null,e),e}class go{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return df(this.persistence,new lf,e.initialUser,this.serializer)}createPersistence(e){return new cf(ri.Fs,this.serializer)}createSharedClientState(e){return new wf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>mo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rm.bind(null,this.syncEngine),await Vf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Uf}createDatastore(e){const n=bs(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new bf(r));var r;return function(i,o,a,c){return new Df(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>mo(this.syncEngine,a,0),o=lo.D()?new lo:new Ef,new Af(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new Wf(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=S(e);y("RemoteStore","RemoteStore shutting down."),n.du.add(5),await fn(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class um{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):be("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class lm{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=W.UNAUTHENTICATED,this.clientId=Ba.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=li(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Qs(t,e){t.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ic(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yo(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dm(t);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ho(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ho(e.remoteStore,i)),t._onlineComponents=e}function hm(t){return t.name==="FirebaseError"?t.code===d.FAILED_PRECONDITION||t.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qs(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hm(n))throw n;Kn("Error using user provided cache. Falling back to memory cache: "+n),await Qs(t,new go)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Qs(t,new go);return t._offlineComponents}async function Vc(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await yo(t,t._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await yo(t,new cm))),t._onlineComponents}function fm(t){return Vc(t).then(e=>e.syncEngine)}async function mm(t){const e=await Vc(t),n=e.eventManager;return n.onListen=Yf.bind(null,e.syncEngine),n.onUnlisten=Jf.bind(null,e.syncEngine),n}function pm(t,e,n={}){const s=new Ne;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new um({next:h=>{i.enqueueAndForget(()=>qf(r,l)),h.fromCache&&a.source==="server"?c.reject(new w(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Kf(o,u,{includeMetadataChanges:!0,xu:!0});return $f(r,l)}(await mm(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const vo=new Map;/**
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
 */function Bc(t,e,n){if(!n)throw new w(d.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gm(t,e,n,s){if(e===!0&&s===!0)throw new w(d.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wo(t){if(!v.isDocumentKey(t))throw new w(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Eo(t){if(v.isDocumentKey(t))throw new w(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":E()}function Jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fi(t);throw new w(d.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Io{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new w(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ds{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Io({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Io(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Lh;switch(n.type){case"firstParty":return new Fh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vo.get(e);n&&(y("ComponentProvider","Removing Datastore"),vo.delete(e),n.terminate())}(this),Promise.resolve()}}function ym(t,e,n,s={}){var r;const i=(t=Jn(t,Ds))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Kn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=W.MOCK_USER;else{o=pu(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new w(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new W(c)}t._authCredentials=new Oh(new Va(o,a))}}/**
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
 */class he{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}}class ks{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ks(this.firestore,e,this._query)}}class xe extends ks{constructor(e,n,s){super(e,n,Ya(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new v(e))}withConverter(e){return new xe(this.firestore,e,this._path)}}function Uc(t,e,...n){if(t=Bt(t),Bc("collection","path",e),t instanceof Ds){const s=O.fromString(e,...n);return Eo(s),new xe(t,null,s)}{if(!(t instanceof he||t instanceof xe))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(O.fromString(e,...n));return Eo(s),new xe(t.firestore,null,s)}}function vm(t,e,...n){if(t=Bt(t),arguments.length===1&&(e=Ba.A()),Bc("doc","path",e),t instanceof Ds){const s=O.fromString(e,...n);return wo(s),new he(t,null,new v(s))}{if(!(t instanceof he||t instanceof xe))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(O.fromString(e,...n));return wo(s),new he(t.firestore,t instanceof xe?t.converter:null,new v(s))}}/**
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
 */class wm{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new bc(this,"async_queue_retry"),this.qc=()=>{const n=Gs();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Gs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Ne;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ln(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw be("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=ui.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&E()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class mi extends Ds{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new wm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qc(this),this._firestoreClient.terminate()}}function Em(t,e){const n=typeof t=="object"?t:wl(),s=typeof t=="string"?t:e||"(default)",r=pl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=du("firestore");i&&ym(r,...i)}return r}function $c(t){return t._firestoreClient||qc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qc(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,u){return new Yh(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new lm(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(te.fromBase64String(e))}catch(n){throw new w(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mt(te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new w(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jc{constructor(e){this._methodName=e}}/**
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
 */class gi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new w(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new w(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */const Im=/^__.*__$/;class Tm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Xe(e,this.data,this.fieldMask,n,this.fieldTransforms):new hn(e,this.data,n,this.fieldTransforms)}}function zc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class yi{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new yi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Zn(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(zc(this.Yc)&&Im.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class bm{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||bs(e)}ua(e,n,s,r=!1){return new yi({Yc:e,methodName:n,oa:s,path:J.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sm(t){const e=t._freezeSettings(),n=bs(t._databaseId);return new bm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cm(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);Qc("Data must be an object, but it was:",o,s);const a=Hc(s,o);let c,u;if(i.merge)c=new le(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const m=Dm(e,h,n);if(!o.contains(m))throw new w(d.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Am(l,m)||l.push(m)}c=new le(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Tm(new ue(a),c,u)}function Kc(t,e){if(Gc(t=Bt(t)))return Qc("Unsupported field value:",e,t),Hc(t,e);if(t instanceof jc)return function(n,s){if(!zc(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Kc(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Bt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=U.fromDate(n);return{timestampValue:Yn(s.serializer,r)}}if(n instanceof U){const r=new U(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yn(s.serializer,r)}}if(n instanceof gi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof mt)return{bytesValue:pc(s.serializer,n._byteString)};if(n instanceof he){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ni(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${fi(n)}`)}(t,e)}function Hc(t,e){const n={};return Ua(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wt(t,(s,r)=>{const i=Kc(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Gc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof U||t instanceof gi||t instanceof mt||t instanceof he||t instanceof jc)}function Qc(t,e,n){if(!Gc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=fi(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Dm(t,e,n){if((e=Bt(e))instanceof pi)return e._internalPath;if(typeof e=="string")return Wc(t,e);throw Zn("Field path arguments must be of type string or ",t,!1,void 0,n)}const km=new RegExp("[~\\*/\\[\\]]");function Wc(t,e,n){if(e.search(km)>=0)throw Zn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pi(...e.split("."))._internalPath}catch{throw Zn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zn(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new w(d.INVALID_ARGUMENT,a+t+c)}function Am(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Yc{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _m(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _m extends Yc{data(){return super.data()}}function Xc(t,e){return typeof e=="string"?Wc(t,e):e instanceof pi?e._internalPath:e._delegate._internalPath}/**
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
 */function Nm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new w(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xm{convertValue(e,n="none"){switch(We(e)){case 0:return null;case 1:return e.booleanValue;case 2:return V(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw E()}}convertObject(e,n){const s={};return wt(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new gi(V(e.latitude),V(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=qa(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Qt(e));default:return null}}convertTimestamp(e){const n=Me(e);return new U(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=O.fromString(e);R(Ec(s));const r=new Wt(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(n)||be(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Rm(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class bn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lm extends Yc{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Xc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Nn extends Lm{data(e={}){return super.data(e)}}class Om{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new bn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Nn(this._firestore,this._userDataWriter,s.key,s,new bn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Nn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Nn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Mm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}class Pm extends xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,n)}}function Fm(t){t=Jn(t,ks);const e=Jn(t.firestore,mi),n=$c(e),s=new Pm(e);return Nm(t._query),pm(n,t._query).then(r=>new Om(e,s,t,r))}function Vm(t,e){const n=Jn(t.firestore,mi),s=vm(t),r=Rm(t.converter,e);return Bm(n,[Cm(Sm(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,we.exists(!1))]).then(()=>s)}function Bm(t,e){return function(n,s){const r=new Ne;return n.asyncQueue.enqueueAndForget(async()=>Zf(await fm(n),s,r)),r.promise}($c(t),e)}(function(t,e=!0){(function(n){vt=n})(vl),Pn(new Ut("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new mi(new Mh(n.getProvider("auth-internal")),new Bh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wt(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),st(ji,"3.10.0",t),st(ji,"3.10.0","esm2017")})();const Um='"AIzaSyDVukLd9kYt8ZdMlFABDu027nIHQSI7P9U";',$m={apiKey:Um,authDomain:"survey-app-64e6f.firebaseapp.com",projectId:"survey-app-64e6f",storageBucket:"survey-app-64e6f.appspot.com",messagingSenderId:"191419324923",appId:"1:191419324923:web:0b48a35a01a62fb5c5d35e",measurementId:"G-5ZCE1C0N3L"},qm=Lo($m),Jc=Em(qm),jm=async t=>{try{const e=await Vm(Uc(Jc,"surveys"),t);console.log("Document written with ID: ",e.id)}catch(e){console.error("Error adding document: ",e)}},zm=async t=>{let e=[];return await Fm(Uc(Jc,"surveys")).then(n=>{n.forEach(s=>{s.data().email===t&&e.push(s.data())})}),e},Km=t=>({name:t[0],email:t[1],age:t[2],status:t[3],market:t[4],invest:t[5],resources:t[6],details:t[7],date:t[8]}),Hm=document.querySelectorAll(".infoItem");let M=[];const Gm=t=>{var m;switch(M=[],M.push(t.name),M.push(t.email),M.push(t.age),t.status){case"2":M.push("My account status is okay.");break;case"3":M.push("I'm currently having financial issues.");break;default:M.push("Not answered.");break}switch(t.market){case"stk":M.push("stock market");break;case"fx":M.push("foreign exchange");break;case"cmd":M.push("commodity");break;case"bond":M.push("bond market");break;case"cripto":M.push("cryptocurrency market");break;default:M.push("Not answered.");break}switch(t.invest){case"2":M.push("My bank's manager advices me.");break;case"3":M.push("I flip a coin");break;default:M.push("Not answered.");break}let e=[];(m=t.resources)==null||m.forEach(p=>{switch(p){case"books":e.push("Books and articles");break;case"ytb":e.push("YouTube tutorial videos");break;case"courses":e.push("online or face to face courses");break;case"exp":e.push("experience with little investment");break}}),e.length>0?M.push(e):M.push("not answered"),t.details.length>0?M.push(t.details):M.push("Not filled");const n=new Date,s=n.getDate(),r=n.getMonth()+1,i=n.getFullYear(),o=n.getHours(),a=n.getMinutes(),c=n.getSeconds(),u=`${s}/${r}/${i} ${o}:${a}:${c}`,l=[...M,u];jm(Km(l));const h=M.map(p=>Array.isArray(p)?`<div>${p.map(C=>`<br> ${C}`)}</div>`:`<p>${p}</p>`);Hm.forEach((p,C)=>{h.forEach((T,x)=>{x===C&&(p.innerHTML=T)})})},ae=document.getElementById("overlay"),Ee=document.getElementById("invalid-form-modal"),Ws=document.getElementById("close-modal");Ee==null||Ee.querySelector("h2");const Qm=Ee==null?void 0:Ee.querySelector("p"),xn=document.getElementById("see-surveys-modal"),Wm=document.getElementById("survey-modal-text"),Ym=document.getElementById("survey-email"),Xm=document.getElementById("submit-survey-email"),Jm=t=>{Qm.innerText=t},Zm=()=>{ae.style.display="block",Ee.style.display="flex"},Zc=()=>{ae.style.display="none",Ee.style.display="none"},Sn=t=>{Jm(t),Zm()};ae==null||ae.addEventListener("click",()=>{ae.style.display==="block"&&Ee.style.display==="flex"&&Zc()});const De="1px solid rgba(231, 90, 90, 0.65)";var D;(function(t){t.statusSelect="statusSelect",t.radioInputs="radioInputs",t.investSelect="investSelect",t.checkboxInputs="checkboxInputs",t.detailsTextArea="detailsTextArea",t.emailInput="emailInput",t.fullnameInput="fullnameInput",t.ageInput="ageInput"})(D||(D={}));const Mt=document.getElementById("checkboxInputs"),Pt=document.getElementById("radioInputs"),Ys=t=>{const e=document.getElementById("age-after"),n=document.getElementById("email-after"),s=document.getElementById("fullname-after");switch(t){case D.emailInput:n.style.display="block",setTimeout(()=>{n.style.display="none"},3e3);break;case D.fullnameInput:s.style.display="block",setTimeout(()=>{s.style.display="none"},3e3);break;case D.ageInput:e.style.display="block",setTimeout(()=>{e.style.display="none"},3e3);break}},ke=t=>{switch(t){case D.statusSelect:de.style.border=De;break;case D.radioInputs:Pt.style.border=De,Pt.style.borderRadius="5px";break;case D.investSelect:se.style.border=De;break;case D.checkboxInputs:Mt.style.border=De,Mt.style.borderRadius="5px";break;case D.detailsTextArea:re.style.border=De;break;case D.emailInput:Re.style.border=De,Ys(t);break;case D.fullnameInput:Le.style.border=De,Ys(t);break;case D.ageInput:Ie.style.border=De,Ys(t);break}},de=document.querySelector("#status-select"),Ft=document.querySelectorAll('input[name="markets"]'),se=document.querySelector("#invest-select"),Vt=document.querySelectorAll('input[type="checkbox"]'),re=document.querySelector("#details-textarea"),Re=document.querySelector("#email"),Le=document.querySelector("#fullname"),Ie=document.querySelector("#age");var nt;(function(t){t.status="Please select the status of your account and the market in which you operate, or click the skip button.",t.invest="Please select at least one resource you use for training and indicate how you decide to invest, or click the skip button.",t.details="Please send us more details in order to optimize the survey, or click the skip button.",t.contact="Please fill in your contact information correctly!"})(nt||(nt={}));let At="",_t=[];const ep=()=>{const t={name:Le.value,email:Re.value,age:Ie.value,status:(de==null?void 0:de.value)||"",market:At||"",invest:(se==null?void 0:se.value)||"",resources:_t,details:(re==null?void 0:re.value)||""};Gm(t),ze("sucess")},tp=t=>{var e,n;switch(t){case"next-status":At="",Ft==null||Ft.forEach(a=>a.checked?At=a.value:null),de.value==="1"&&ke(D.statusSelect),At===""&&ke(D.radioInputs),de.value!=="1"&&At!==""?ze("invest"):Sn(nt.status);break;case"next-invest":_t=[],Vt==null||Vt.forEach(a=>a.checked?_t.push(a.value):null),(se==null?void 0:se.value)==="1"&&ke(D.investSelect),_t.length<=0&&ke(D.checkboxInputs),(se==null?void 0:se.value)!=="1"&&_t.length>0?ze("details"):Sn(nt.invest);break;case"next-details":let s=!1;typeof((e=re==null?void 0:re.value)==null?void 0:e.length)=="number"&&((n=re==null?void 0:re.value)==null?void 0:n.length)>0?s=!0:s=!1,s&&ze("contact"),s||(Sn(nt.details),ke(D.detailsTextArea));break;case"next-contact":const r=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(Le.value),i=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(Re.value),o=parseInt(Ie.value)>0&&parseInt(Ie.value)<100;!r&&ke(D.fullnameInput),!i&&ke(D.emailInput),!o&&ke(D.ageInput),r&&i&&o?ep():Sn(nt.contact)}},Rn=document.getElementById("count-displayer"),np=t=>{const n=t.value.length;Rn.textContent=`${n}/130`,n>100?Rn.style.color="red":Rn.style.color="black"},To=document.getElementById("details-textarea");To.addEventListener("input",()=>np(To));const sp=()=>{de.value="1",Ft.forEach(t=>t.checked=!1),se.value="1",Vt.forEach(t=>t.checked=!1),re.value="",Re.value="",Le.value="",Ie.value="",Rn.textContent="0/130"},rp=document.querySelectorAll(".back-button"),ip=document.querySelectorAll(".skip-button"),op=[document.querySelector("#next-status"),document.querySelector("#next-invest"),document.querySelector("#next-details"),document.querySelector("#next-contact")];op.forEach(t=>t.addEventListener("click",()=>tp(t.id)));const Ln=["welcome","start","status","invest","details","contact","sucess"];rp.forEach((t,e)=>{t.addEventListener("click",()=>{ze(Ln[e])})});ip.forEach((t,e)=>{t.addEventListener("click",()=>{e+1>=Ln.length-1&&(console.log("reset"),sp()),e+1<Ln.length-1?ze(Ln[e+1]):ze("welcome")})});const Be=t=>{switch(document.querySelectorAll(".after").forEach(e=>e.remove()),t){case D.statusSelect:de.style.border="";break;case D.radioInputs:Pt.style.border="",Pt.style.borderRadius="",Pt.style.padding="";break;case D.investSelect:se.style.border="";break;case D.checkboxInputs:Mt.style.border="",Mt.style.borderRadius="",Mt.style.padding="";break;case D.detailsTextArea:re.style.border="";break;case D.emailInput:Re.style.border="";break;case D.fullnameInput:Le.style.border="";break;case D.ageInput:Ie.style.border="";break}};Vt.forEach(t=>{t.addEventListener("focus",()=>{Be(D.checkboxInputs)})});Ft.forEach(t=>{t.addEventListener("focus",()=>{Be(D.radioInputs)})});de==null||de.addEventListener("focus",()=>{Be(D.statusSelect)});se==null||se.addEventListener("focus",()=>{Be(D.investSelect)});re==null||re.addEventListener("focus",()=>{Be(D.detailsTextArea)});Re==null||Re.addEventListener("focus",()=>{Be(D.emailInput)});Le==null||Le.addEventListener("focus",()=>{Be(D.fullnameInput)});Ie==null||Ie.addEventListener("focus",()=>{Be(D.ageInput)});const Y=document.querySelector(".toggle-theme"),ap=()=>{Y!=null&&Y.className.includes("light")?Y.classList.replace("light","dark"):Y==null||Y.classList.replace("dark","light")};var Co;const Cn=(Co=document.querySelector(".surveys-icon"))==null?void 0:Co.querySelector("img"),Dn=Y==null?void 0:Y.querySelector("img"),es=t=>{var n;const e=(n=document.querySelector("#reset-modal-icon"))==null?void 0:n.querySelector("img");t==="light"?(Cn.src="./assets/survey-light-db251b8d.svg",Cn.alt="light view survey icon",Dn.src="./assets/sun-5c10cc79.svg",Dn.alt="light theme sun icon",e.alt="light reset spinner icon",e.src="./assets/spinner-dark-79e91a90.svg"):(Cn.src="./assets/survey-dark.svg",Cn.alt="dark view survey icon",Dn.src="./assets/moon.svg",Dn.alt="dark theme moon icon",e.src="./assets/spinner-light.svg",e.alt="dark reset icon")},bo=t=>{t==="light"?(document.documentElement.style.setProperty("--primary-color","rgba(62, 178, 94, 1)"),document.documentElement.style.setProperty("--secondary-color","white"),document.documentElement.style.setProperty("--primary-text-color","black"),document.documentElement.style.setProperty("--secondary-text-color","white"),document.documentElement.style.setProperty("--unselected-color","rgba(62, 178, 94, 0.3)"),document.documentElement.style.setProperty("--selected-color","rgba(62, 178, 94, 1)")):(document.documentElement.style.setProperty("--primary-color","white"),document.documentElement.style.setProperty("--secondary-color","rgba(62, 178, 94, 1)"),document.documentElement.style.setProperty("--primary-text-color","white"),document.documentElement.style.setProperty("--secondary-text-color","black"),document.documentElement.style.setProperty("--unselected-color","white"),document.documentElement.style.setProperty("--selected-color","rgb(48, 109, 65)"))},cp=new MutationObserver(t=>{for(let e of t)e.type==="attributes"&&e.attributeName==="class"&&(Y.classList.contains("light")?(es("light"),bo("light")):(es("dark"),bo("dark")))}),up={attributes:!0,attributeFilter:["class"]};cp.observe(Y,up);Y==null||Y.addEventListener("click",()=>{ap()});Ws==null||Ws.addEventListener("click",()=>{Zc()});const Xs=document.querySelector(".surveys-icon"),Js=document.getElementById("result"),So=document.getElementById("submission"),eu=()=>{if(ae.style.display==="block"&&xn.style.display==="flex"){ae.style.display="none",xn.style.display="none";return}ae.style.display="block",xn.style.display="flex"},lp=t=>{if(t.length===0){Wm.innerText="No surveys found, please try with a different email";return}else{So.style.display="none",Js.innerHTML=`
        <span id="reset-modal-icon">
            <img src="./images/spinner-dark.svg" alt="close icon" />
        </span>
        <div class="modal-content">
            <div class="modal-header">
                <h2>Surveys</h2>
                ${t.map(n=>`
                    <div class="survey">
                        <h3>${n.name}</h3>
                        <p>Email: ${n.email}</p>
                        <p>Age: ${n.age}</p>
                        <p>Investment strategy: ${n.invest}</p>
                        <p>Operating market: ${n.market}</p>
                        <div><p>Training resources:</p> ${n.resources.map(s=>`
                            <p>${s}</p>`).join("")}</div>
                        <p>Account status: ${n.status}</p>
                        <p>Report on losses: ${n.details}</p>
                        <p>Survey date: ${n.date}</p>
                    </div>
                    `).join("")}
        </div>`,Js.style.display="block";const e=document.getElementById("reset-modal-icon");e.style.display="block",Y.classList.contains("light")?es("light"):es("dark"),e==null||e.addEventListener("click",()=>{var n;console.log("clicked"),(n=e==null?void 0:e.querySelector("img"))==null||n.setAttribute("style","animation: spin 1s infinite linear ;"),setTimeout(()=>{var s;(s=e==null?void 0:e.querySelector("img"))==null||s.setAttribute("style","animation: none"),So.style.display="flex",Js.style.display="none"},1e3)})}};Xs==null||Xs.addEventListener("click",()=>{eu()});Xm.addEventListener("click",()=>{const t=Ym.value;zm(t).then(e=>{lp(e)})});ae==null||ae.addEventListener("click",()=>{ae.style.display==="block"&&xn.style.display==="flex"&&eu()});document.getElementById("overlay");const ot=document.getElementById("invalid-form-modal");document.getElementById("close-modal");ot==null||ot.querySelector("h2");ot==null||ot.querySelector("p");document.getElementById("see-surveys-modal");document.getElementById("survey-modal-text");document.getElementById("survey-email");document.getElementById("submit-survey-email");
