function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},s=e.parcelRequireb079;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var s={id:t,exports:{}};return i[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},e.parcelRequireb079=s),s.register("kyEFX",(function(e,i){var n,s;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return s}),(function(t){return s=t}));var r={};n=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)r[e[i]]=t[e[i]]},s=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s("kyEFX").register(JSON.parse('{"7Cja5":"index.e1ed8319.js","40jTF":"3.881870eb.jpg"}'));
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
const r=function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);s<128?e[i++]=s:s<2048?(e[i++]=s>>6|192,e[i++]=63&s|128):55296==(64512&s)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++n)),e[i++]=s>>18|240,e[i++]=s>>12&63|128,e[i++]=s>>6&63|128,e[i++]=63&s|128):(e[i++]=s>>12|224,e[i++]=s>>6&63|128,e[i++]=63&s|128)}return e};
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
class o{wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
function a(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class l extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,l.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,h.prototype.create)}}class h{create(t,...e){const i=e[0]||{},n=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(c,((t,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`}))}(s,i):"Error",o=`${this.serviceName}: ${r} (${n}).`;return new l(n,o,i)}constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}}const c=/\{\$([^}]+)}/g;
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
 */function u(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const s of i){if(!n.includes(s))return!1;const i=t[s],r=e[s];if(d(i)&&d(r)){if(!u(i,r))return!1}else if(i!==r)return!1}for(const t of n)if(!i.includes(t))return!1;return!0}function d(t){return null!==t&&"object"==typeof t}
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
function g(t){return t&&t._delegate?t._delegate:t}class f{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class m{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new o;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[t,e]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(t)&&e.resolve(n)}return n}onInit(t,e){var i;const n=this.normalizeInstanceIdentifier(e),s=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;s.add(t),this.onInitCallbacks.set(n,s);const r=this.instances.get(n);return r&&t(r,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const n of i)try{n(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=t,"[DEFAULT]"===n?void 0:n),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var n;return i||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class p{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new m(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
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
 */const y=[];var v;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(v||(v={}));const b={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},w=v.INFO,T={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},I=(t,e,...i)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),s=T[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${n}]  ${t.name}:`,...i)};class E{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in v))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...t),this._logHandler(this,v.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...t),this._logHandler(this,v.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,v.INFO,...t),this._logHandler(this,v.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,v.WARN,...t),this._logHandler(this,v.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...t),this._logHandler(this,v.ERROR,...t)}constructor(t){this.name=t,this._logLevel=w,this._logHandler=I,this._userLogHandler=null,y.push(this)}}
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
class C{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const S=new E("@firebase/app"),A={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},x=new Map,D=new Map;function k(t,e){try{t.container.addComponent(e)}catch(i){S.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function N(t){const e=t.name;if(D.has(e))return S.debug(`There were multiple attempts to register component ${e}.`),!1;D.set(e,t);for(const e of x.values())k(e,t);return!0}function _(t,e){return t.container.getProvider(e)}
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
const L=new h("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class O{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new f("app",(()=>this),"PUBLIC"))}}
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
 */function M(t,e,i){var n;let s=null!==(n=A[t])&&void 0!==n?n:t;i&&(s+=`-${i}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void S.warn(t.join(" "))}N(new f(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
var R;R="",N(new f("platform-logger",(t=>new C(t)),"PRIVATE")),M("@firebase/app","0.7.17",R),M("@firebase/app","0.7.17","esm2017"),M("fire-js","");
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
M("firebase","9.6.7","app");var P,V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},F={},U=U||{},z=V||self;function B(){}function $(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function G(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var q="closure_uid_"+(1e9*Math.random()>>>0),j=0;function H(t,e,i){return t.call.apply(t.bind,arguments)}function K(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function X(t,e,i){return(X=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?H:K).apply(null,arguments)}function W(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Y(t,e){function i(){}i.prototype=e.prototype,t.Z=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Vb=function(t,i,n){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[i].apply(t,s)}}function Q(){this.s=this.s,this.o=this.o}var Z={};Q.prototype.s=!1,Q.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,q)&&t[q]||(t[q]=++j)}(this);delete Z[t]}},Q.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const J=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1},tt=Array.prototype.forEach?function(t,e,i){Array.prototype.forEach.call(t,e,i)}:function(t,e,i){const n=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<n;r++)r in s&&e.call(i,s[r],r,t)};function et(t){return Array.prototype.concat.apply([],arguments)}function it(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function nt(t){return/^[\s\xa0]*$/.test(t)}var st,rt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ot(t,e){return-1!=t.indexOf(e)}function at(t,e){return t<e?-1:t>e?1:0}t:{var lt=z.navigator;if(lt){var ht=lt.userAgent;if(ht){st=ht;break t}}st=""}function ct(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function ut(t){const e={};for(const i in t)e[i]=t[i];return e}var dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gt(t,e){let i,n;for(let e=1;e<arguments.length;e++){for(i in n=arguments[e],n)t[i]=n[i];for(let e=0;e<dt.length;e++)i=dt[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function ft(t){return ft[" "](t),t}ft[" "]=B;var mt,pt,yt=ot(st,"Opera"),vt=ot(st,"Trident")||ot(st,"MSIE"),bt=ot(st,"Edge"),wt=bt||vt,Tt=ot(st,"Gecko")&&!(ot(st.toLowerCase(),"webkit")&&!ot(st,"Edge"))&&!(ot(st,"Trident")||ot(st,"MSIE"))&&!ot(st,"Edge"),It=ot(st.toLowerCase(),"webkit")&&!ot(st,"Edge");function Et(){var t=z.document;return t?t.documentMode:void 0}t:{var Ct="",St=(pt=st,Tt?/rv:([^\);]+)(\)|;)/.exec(pt):bt?/Edge\/([\d\.]+)/.exec(pt):vt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(pt):It?/WebKit\/(\S+)/.exec(pt):yt?/(?:Version)[ \/]?(\S+)/.exec(pt):void 0);if(St&&(Ct=St?St[1]:""),vt){var At=Et();if(null!=At&&At>parseFloat(Ct)){mt=String(At);break t}}mt=Ct}var xt,Dt={};function kt(){return function(t){var e=Dt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=rt(String(mt)).split("."),i=rt("9").split("."),n=Math.max(e.length,i.length);for(let o=0;0==t&&o<n;o++){var s=e[o]||"",r=i[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=at(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||at(0==s[2].length,0==r[2].length)||at(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(z.document&&vt){var Nt=Et();xt=Nt||(parseInt(mt,10)||void 0)}else xt=void 0;var _t=xt,Lt=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",B,e),z.removeEventListener("test",B,e)}catch(t){}return t}();function Ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Mt(t,e){if(Ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tt){t:{try{ft(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Rt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mt.Z.h.call(this)}}Ot.prototype.h=function(){this.defaultPrevented=!0},Y(Mt,Ot);var Rt={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Vt=0;function Ft(t,e,i,n,s){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.ia=s,this.key=++Vt,this.ca=this.fa=!1}function Ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function zt(t){this.src=t,this.g={},this.h=0}function Bt(t,e){var i=e.type;if(i in t.g){var n,s=t.g[i],r=J(s,e);(n=0<=r)&&Array.prototype.splice.call(s,r,1),n&&(Ut(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function $t(t,e,i,n){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!i&&r.ia==n)return s}return-1}zt.prototype.add=function(t,e,i,n,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=$t(t,e,n,s);return-1<o?(e=t[o],i||(e.fa=!1)):((e=new Ft(e,this.src,r,!!n,s)).fa=i,t.push(e)),e};var Gt="closure_lm_"+(1e6*Math.random()|0),qt={};function jt(t,e,i,n,s){if(n&&n.once)return Kt(t,e,i,n,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)jt(t,e[r],i,n,s);return null}return i=te(i),t&&t[Pt]?t.N(e,i,G(n)?!!n.capture:!!n,s):Ht(t,e,i,!1,n,s)}function Ht(t,e,i,n,s,r){if(!e)throw Error("Invalid event type");var o=G(s)?!!s.capture:!!s,a=Zt(t);if(a||(t[Gt]=a=new zt(t)),(i=a.add(e,i,n,o,r)).proxy)return i;if(n=function(){function t(i){return e.call(t.src,t.listener,i)}var e=Qt;return t}(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)Lt||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),n,s);else if(t.attachEvent)t.attachEvent(Yt(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function Kt(t,e,i,n,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Kt(t,e[r],i,n,s);return null}return i=te(i),t&&t[Pt]?t.O(e,i,G(n)?!!n.capture:!!n,s):Ht(t,e,i,!0,n,s)}function Xt(t,e,i,n,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Xt(t,e[r],i,n,s);else n=G(n)?!!n.capture:!!n,i=te(i),t&&t[Pt]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(i=$t(r=t.g[e],i,n,s))&&(Ut(r[i]),Array.prototype.splice.call(r,i,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Zt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$t(e,i,n,s)),(i=-1<t?e[t]:null)&&Wt(i))}function Wt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Pt])Bt(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(Yt(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=Zt(e))?(Bt(i,t),0==i.h&&(i.src=null,e[Gt]=null)):Ut(t)}}}function Yt(t){return t in qt?qt[t]:qt[t]="on"+t}function Qt(t,e){if(t.ca)t=!0;else{e=new Mt(e,this);var i=t.listener,n=t.ia||t.src;t.fa&&Wt(t),t=i.call(n,e)}return t}function Zt(t){return(t=t[Gt])instanceof zt?t:null}var Jt="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(t){return"function"==typeof t?t:(t[Jt]||(t[Jt]=function(e){return t.handleEvent(e)}),t[Jt])}function ee(){Q.call(this),this.i=new zt(this),this.P=this,this.I=null}function ie(t,e){var i,n=t.I;if(n)for(i=[];n;n=n.I)i.push(n);if(t=t.P,n=e.type||e,"string"==typeof e)e=new Ot(e,t);else if(e instanceof Ot)e.target=e.target||t;else{var s=e;gt(e=new Ot(n,t),s)}if(s=!0,i)for(var r=i.length-1;0<=r;r--){var o=e.g=i[r];s=ne(o,n,!0,e)&&s}if(s=ne(o=e.g=t,n,!0,e)&&s,s=ne(o,n,!1,e)&&s,i)for(r=0;r<i.length;r++)s=ne(o=e.g=i[r],n,!1,e)&&s}function ne(t,e,i,n){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==i){var a=o.listener,l=o.ia||o.src;o.fa&&Bt(t.i,o),s=!1!==a.call(l,n)&&s}}return s&&!n.defaultPrevented}Y(ee,Q),ee.prototype[Pt]=!0,ee.prototype.removeEventListener=function(t,e,i,n){Xt(this,t,e,i,n)},ee.prototype.M=function(){if(ee.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)Ut(i[n]);delete e.g[t],e.h--}}this.I=null},ee.prototype.N=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},ee.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var se=z.JSON.stringify;function re(){var t=de;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var oe,ae=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new le),(t=>t.reset()));class le{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function he(t){z.setTimeout((()=>{throw t}),0)}function ce(t,e){oe||function(){var t=z.Promise.resolve(void 0);oe=function(){t.then(ge)}}(),ue||(oe(),ue=!0),de.add(t,e)}var ue=!1,de=new class{add(t,e){const i=ae.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}constructor(){this.h=this.g=null}};function ge(){for(var t;t=re();){try{t.h.call(t.g)}catch(t){he(t)}var e=ae;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ue=!1}function fe(t,e){ee.call(this),this.h=t||1,this.g=e||z,this.j=X(this.kb,this),this.l=Date.now()}function me(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function pe(t,e,i){if("function"==typeof t)i&&(t=X(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=X(t.handleEvent,t)}return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function ye(t){t.g=pe((()=>{t.g=null,t.i&&(t.i=!1,ye(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Y(fe,ee),(P=fe.prototype).da=!1,P.S=null,P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ie(this,"tick"),this.da&&(me(this),this.start()))}},P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},P.M=function(){fe.Z.M.call(this),me(this),delete this.g};class ve extends Q{l(t){this.h=arguments,this.g?this.i=!0:ye(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function be(t){Q.call(this),this.h=t,this.g={}}Y(be,Q);var we=[];function Te(t,e,i,n){Array.isArray(i)||(i&&(we[0]=i.toString()),i=we);for(var s=0;s<i.length;s++){var r=jt(e,i[s],n||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ie(t){ct(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Wt(t)}),t),t.g={}}function Ee(){this.g=!0}function Ce(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var s=n[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return se(i)}catch(t){return e}}(t,i)+(n?" "+n:"")}))}be.prototype.M=function(){be.Z.M.call(this),Ie(this)},be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ee.prototype.Aa=function(){this.g=!1},Ee.prototype.info=function(){};var Se={},Ae=null;function xe(){return Ae=Ae||new ee}function De(t){Ot.call(this,Se.Ma,t)}function ke(t){const e=xe();ie(e,new De(e,t))}function Ne(t,e){Ot.call(this,Se.STAT_EVENT,t),this.stat=e}function _e(t){const e=xe();ie(e,new Ne(e,t))}function Le(t,e){Ot.call(this,Se.Na,t),this.size=e}function Oe(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return z.setTimeout((function(){t()}),e)}Se.Ma="serverreachability",Y(De,Ot),Se.STAT_EVENT="statevent",Y(Ne,Ot),Se.Na="timingevent",Y(Le,Ot);var Me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Re={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Pe(){}function Ve(t){return t.h||(t.h=t.i())}function Fe(){}Pe.prototype.h=null;var Ue,ze={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Be(){Ot.call(this,"d")}function $e(){Ot.call(this,"c")}function Ge(){}function qe(t,e,i,n){this.l=t,this.j=e,this.m=i,this.X=n||1,this.V=new be(this),this.P=He,t=wt?125:void 0,this.W=new fe(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new je}function je(){this.i=null,this.g="",this.h=!1}Y(Be,Ot),Y($e,Ot),Y(Ge,Pe),Ge.prototype.g=function(){return new XMLHttpRequest},Ge.prototype.i=function(){return{}},Ue=new Ge;var He=45e3,Ke={},Xe={};function We(t,e,i){t.K=1,t.v=vi(di(e)),t.s=i,t.U=!0,Ye(t,null)}function Ye(t,e){t.F=Date.now(),ti(t),t.A=di(t.v);var i=t.A,n=t.X;Array.isArray(n)||(n=[String(n)]),_i(i.h,"t",n),t.C=0,i=t.l.H,t.h=new je,t.g=Ln(t.l,i?e:null,!t.s),0<t.O&&(t.L=new ve(X(t.Ia,t,t.g),t.O)),Te(t.V,t.g,"readystatechange",t.gb),e=t.H?ut(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ke(1),function(t,e,i,n,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+n+") [attempt "+s+"]: "+e+"\n"+i+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Qe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ze(t,e,i){let n,s=!0;for(;!t.I&&t.C<i.length;){if(n=Je(t,i),n==Xe){4==e&&(t.o=4,_e(14),s=!1),Ce(t.j,t.m,null,"[Incomplete Response]");break}if(n==Ke){t.o=4,_e(15),Ce(t.j,t.m,i,"[Invalid Chunk]"),s=!1;break}Ce(t.j,t.m,n,null),ri(t,n)}Qe(t)&&n!=Xe&&n!=Ke&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,_e(16),s=!1),t.i=t.i&&s,s?0<i.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+i.length),Cn(e),e.L=!0,_e(11))):(Ce(t.j,t.m,i,"[Invalid Chunked Response]"),si(t),ni(t))}function Je(t,e){var i=t.C,n=e.indexOf("\n",i);return-1==n?Xe:(i=Number(e.substring(i,n)),isNaN(i)?Ke:(n+=1)+i>e.length?Xe:(e=e.substr(n,i),t.C=n+i,e))}function ti(t){t.Y=Date.now()+t.P,ei(t,t.P)}function ei(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Oe(X(t.eb,t),e)}function ii(t){t.B&&(z.clearTimeout(t.B),t.B=null)}function ni(t){0==t.l.G||t.I||xn(t.l,t)}function si(t){ii(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,me(t.W),Ie(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ri(t,e){try{var i=t.l;if(0!=i.G&&(i.g==t||Vi(i.i,t)))if(i.I=t.N,!t.J&&Vi(i.i,t)&&3==i.G){try{var n=i.Ca.g.parse(e)}catch(t){n=null}if(Array.isArray(n)&&3==n.length){var s=n;if(0==s[0]){t:if(!i.u){if(i.g){if(!(i.g.F+3e3<t.F))break t;An(i),mn(i)}En(i),_e(18)}}else i.ta=s[1],0<i.ta-i.U&&37500>s[2]&&i.N&&0==i.A&&!i.v&&(i.v=Oe(X(i.ab,i),6e3));if(1>=Pi(i.i)&&i.ka){try{i.ka()}catch(t){}i.ka=void 0}}else kn(i,11)}else if((t.J||i.g==t)&&An(i),!nt(e))for(s=i.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(i.U=h[0],h=h[1],2==i.G)if("c"==h[0]){i.J=h[1],i.la=h[2];const e=h[3];null!=e&&(i.ma=e,i.h.info("VER="+i.ma));const s=h[4];null!=s&&(i.za=s,i.h.info("SVER="+i.za));const c=h[5];null!=c&&"number"==typeof c&&0<c&&(n=1.5*c,i.K=n,i.h.info("backChannelRequestTimeoutMs_="+n)),n=i;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=n.i;!r.g&&(ot(t,"spdy")||ot(t,"quic")||ot(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Fi(r,r.h),r.h=null))}if(n.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.sa=t,yi(n.F,n.D,t))}}i.G=3,i.j&&i.j.xa(),i.$&&(i.O=Date.now()-t.F,i.h.info("Handshake RTT: "+i.O+"ms"));var o=t;if((n=i).oa=_n(n,n.H?n.la:null,n.W),o.J){Ui(n.i,o);var a=o,l=n.K;l&&a.setTimeout(l),a.B&&(ii(a),ti(a)),n.g=o}else In(n);0<i.l.length&&vn(i)}else"stop"!=h[0]&&"close"!=h[0]||kn(i,7);else 3==i.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?kn(i,7):fn(i):"noop"!=h[0]&&i.j&&i.j.wa(h),i.A=0)}ke(4)}catch(t){}}function oi(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if($(t)||"string"==typeof t)tt(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var i=t.T();else if(t.R&&"function"==typeof t.R)i=void 0;else if($(t)||"string"==typeof t){i=[];for(var n=t.length,s=0;s<n;s++)i.push(s)}else for(s in i=[],n=0,t)i[n++]=s;n=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if($(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}(t),s=n.length;for(var r=0;r<s;r++)e.call(void 0,n[r],i&&i[r],t)}}function ai(t,e){this.h={},this.g=[],this.i=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(t)if(t instanceof ai)for(i=t.T(),n=0;n<i.length;n++)this.set(i[n],t.get(i[n]));else for(n in t)this.set(n,t[n])}function li(t){if(t.i!=t.g.length){for(var e=0,i=0;e<t.g.length;){var n=t.g[e];hi(t.h,n)&&(t.g[i++]=n),e++}t.g.length=i}if(t.i!=t.g.length){var s={};for(i=e=0;e<t.g.length;)hi(s,n=t.g[e])||(t.g[i++]=n,s[n]=1),e++;t.g.length=i}}function hi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(P=qe.prototype).setTimeout=function(t){this.P=t},P.gb=function(t){t=t.target;const e=this.L;e&&3==hn(t)?e.l():this.Ia(t)},P.Ia=function(t){try{if(t==this.g)t:{const c=hn(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>c)&&(3!=c||wt||this.g&&(this.h.h||this.g.ga()||cn(this.g)))){this.I||4!=c||7==e||ke(8==e||0>=u?3:2),ii(this);var i=this.g.ba();this.N=i;e:if(Qe(this)){var n=cn(this.g);t="";var s=n.length,r=4==hn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){si(this),ni(this);var o="";break e}this.h.i=new z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:r&&e==s-1});n.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==i,function(t,e,i,n,s,r,o){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+s+"]: "+e+"\n"+i+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,i),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nt(a)){var h=a;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,_e(12),si(this),ni(this);break t}Ce(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ri(this,i)}this.U?(Ze(this,c,o),wt&&this.i&&3==c&&(Te(this.V,this.W,"tick",this.fb),this.W.start())):(Ce(this.j,this.m,o,null),ri(this,o)),4==c&&si(this),this.i&&!this.I&&(4==c?xn(this.l,this):(this.i=!1,ti(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,_e(12)):(this.o=0,_e(13)),si(this),ni(this)}}}catch(t){}},P.fb=function(){if(this.g){var t=hn(this.g),e=this.g.ga();this.C<e.length&&(ii(this),Ze(this,t,e),this.i&&4!=t&&ti(this))}},P.cancel=function(){this.I=!0,si(this)},P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(ke(3),_e(17)),si(this),this.o=2,ni(this)):ei(this,this.Y-t)},(P=ai.prototype).R=function(){li(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},P.T=function(){return li(this),this.g.concat()},P.get=function(t,e){return hi(this.h,t)?this.h[t]:e},P.set=function(t,e){hi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},P.forEach=function(t,e){for(var i=this.T(),n=0;n<i.length;n++){var s=i[n],r=this.get(s);t.call(e,r,s,this)}};var ci=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ui(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ui){this.g=void 0!==e?e:t.g,gi(this,t.j),this.s=t.s,fi(this,t.i),mi(this,t.m),this.l=t.l,e=t.h;var i=new xi;i.i=e.i,e.g&&(i.g=new ai(e.g),i.h=e.h),pi(this,i),this.o=t.o}else t&&(i=String(t).match(ci))?(this.g=!!e,gi(this,i[1]||"",!0),this.s=bi(i[2]||""),fi(this,i[3]||"",!0),mi(this,i[4]),this.l=bi(i[5]||"",!0),pi(this,i[6]||"",!0),this.o=bi(i[7]||"")):(this.g=!!e,this.h=new xi(null,this.g))}function di(t){return new ui(t)}function gi(t,e,i){t.j=i?bi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function fi(t,e,i){t.i=i?bi(e,!0):e}function mi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pi(t,e,i){e instanceof xi?(t.h=e,function(t,e){e&&!t.j&&(Di(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(ki(this,e),_i(this,i,t))}),t)),t.j=e}(t.h,t.g)):(i||(e=wi(e,Si)),t.h=new xi(e,t.g))}function yi(t,e,i){t.h.set(e,i)}function vi(t){return yi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wi(t,e,i){return"string"==typeof t?(t=encodeURI(t).replace(e,Ti),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ti(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ui.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wi(e,Ii,!0),":");var i=this.i;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(wi(e,Ii,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.i&&"/"!=i.charAt(0)&&t.push("/"),t.push(wi(i,"/"==i.charAt(0)?Ci:Ei,!0))),(i=this.h.toString())&&t.push("?",i),(i=this.o)&&t.push("#",wi(i,Ai)),t.join("")};var Ii=/[#\/\?@]/g,Ei=/[#\?:]/g,Ci=/[#\?]/g,Si=/[#\?@]/g,Ai=/#/g;function xi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Di(t){t.g||(t.g=new ai,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),s=null;if(0<=n){var r=t[i].substring(0,n);s=t[i].substring(n+1)}else r=t[i];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function ki(t,e){Di(t),e=Li(t,e),hi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,hi((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&li(t)))}function Ni(t,e){return Di(t),e=Li(t,e),hi(t.g.h,e)}function _i(t,e,i){ki(t,e),0<i.length&&(t.i=null,t.g.set(Li(t,e),it(i)),t.h+=i.length)}function Li(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(P=xi.prototype).add=function(t,e){Di(this),this.i=null,t=Li(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},P.forEach=function(t,e){Di(this),this.g.forEach((function(i,n){tt(i,(function(i){t.call(e,i,n,this)}),this)}),this)},P.T=function(){Di(this);for(var t=this.g.R(),e=this.g.T(),i=[],n=0;n<e.length;n++)for(var s=t[n],r=0;r<s.length;r++)i.push(e[n]);return i},P.R=function(t){Di(this);var e=[];if("string"==typeof t)Ni(this,t)&&(e=et(e,this.g.get(Li(this,t))));else{t=this.g.R();for(var i=0;i<t.length;i++)e=et(e,t[i])}return e},P.set=function(t,e){return Di(this),this.i=null,Ni(this,t=Li(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},P.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),i=0;i<e.length;i++){var n=e[i],s=encodeURIComponent(String(n));n=this.R(n);for(var r=0;r<n.length;r++){var o=s;""!==n[r]&&(o+="="+encodeURIComponent(String(n[r]))),t.push(o)}}return this.i=t.join("&")};function Oi(t){this.l=t||Mi,z.PerformanceNavigationTiming?t=0<(t=z.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mi=10;function Ri(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Pi(t){return t.h?1:t.g?t.g.size:0}function Vi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Fi(t,e){t.g?t.g.add(e):t.h=e}function Ui(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function zi(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return it(t.i)}function Bi(){}function $i(){this.g=new Bi}function Gi(t,e,i){const n=i||"";try{oi(t,(function(t,i){let s=t;G(t)&&(s=se(t)),e.push(n+i+"="+encodeURIComponent(s))}))}catch(t){throw e.push(n+"type="+encodeURIComponent("_badmap")),t}}function qi(t,e,i,n,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(n)}catch(t){}}function ji(t){this.l=t.$b||null,this.j=t.ib||!1}function Hi(t,e){ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ki,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oi.prototype.cancel=function(){if(this.i=zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Bi.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)},Bi.prototype.parse=function(t){return z.JSON.parse(t,void 0)},Y(ji,Pe),ji.prototype.g=function(){return new Hi(this.l,this.j)},ji.prototype.i=function(t){return function(){return t}}({}),Y(Hi,ee);var Ki=0;function Xi(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Wi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yi(t)}function Yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(P=Hi.prototype).open=function(t,e){if(this.readyState!=Ki)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yi(this)},P.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Wi(this)),this.readyState=Ki},P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==z.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xi(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wi(this):Yi(this),3==this.readyState&&Xi(this)}},P.Ua=function(t){this.g&&(this.response=this.responseText=t,Wi(this))},P.Ta=function(t){this.g&&(this.response=t,Wi(this))},P.ha=function(){this.g&&Wi(this)},P.setRequestHeader=function(t,e){this.v.append(t,e)},P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Qi=z.JSON.parse;function Zi(t){ee.call(this),this.headers=new ai,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ji,this.K=this.L=!1}Y(Zi,ee);var Ji="",tn=/^https?$/i,en=["POST","PUT"];function nn(t){return"content-type"==t.toLowerCase()}function sn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rn(t),an(t)}function rn(t){t.D||(t.D=!0,ie(t,"complete"),ie(t,"error"))}function on(t){if(t.h&&void 0!==U&&(!t.C[1]||4!=hn(t)||2!=t.ba()))if(t.v&&4==hn(t))pe(t.Fa,0,t);else if(ie(t,"readystatechange"),4==hn(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===a){var s=String(t.H).match(ci)[1]||null;if(!s&&z.self&&z.self.location){var r=z.self.location.protocol;s=r.substr(0,r.length-1)}n=!tn.test(s?s.toLowerCase():"")}i=n}if(i)ie(t,"complete"),ie(t,"success");else{t.m=6;try{var o=2<hn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",rn(t)}}finally{an(t)}}}function an(t,e){if(t.g){ln(t);const i=t.g,n=t.C[0]?B:null;t.g=null,t.C=null,e||ie(t,"ready");try{i.onreadystatechange=n}catch(t){}}}function ln(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function hn(t){return t.g?t.g.readyState:0}function cn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ji:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function un(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=function(t){let e="";return ct(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):yi(t,e,i))}function dn(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function gn(t){this.za=0,this.l=[],this.h=new Ee,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=dn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=dn("baseRetryDelayMs",5e3,t),this.$a=dn("retryDelaySeedMs",1e4,t),this.Ya=dn("forwardChannelMaxRetries",2,t),this.ra=dn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Oi(t&&t.concurrentRequestLimit),this.Ca=new $i,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function fn(t){if(pn(t),3==t.G){var e=t.V++,i=di(t.F);yi(i,"SID",t.J),yi(i,"RID",e),yi(i,"TYPE","terminate"),wn(t,i),(e=new qe(t,t.h,e,void 0)).K=2,e.v=vi(di(i)),i=!1,z.navigator&&z.navigator.sendBeacon&&(i=z.navigator.sendBeacon(e.v.toString(),"")),!i&&z.Image&&((new Image).src=e.v,i=!0),i||(e.g=Ln(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ti(e)}Nn(t)}function mn(t){t.g&&(Cn(t),t.g.cancel(),t.g=null)}function pn(t){mn(t),t.u&&(z.clearTimeout(t.u),t.u=null),An(t),t.i.cancel(),t.m&&("number"==typeof t.m&&z.clearTimeout(t.m),t.m=null)}function yn(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&vn(t)}function vn(t){Ri(t.i)||t.m||(t.m=!0,ce(t.Ha,t),t.C=0)}function bn(t,e){var i;i=e?e.m:t.V++;const n=di(t.F);yi(n,"SID",t.J),yi(n,"RID",i),yi(n,"AID",t.U),wn(t,n),t.o&&t.s&&un(n,t.o,t.s),i=new qe(t,t.h,i,t.C+1),null===t.o&&(i.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Tn(t,i,1e3),i.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Fi(t.i,i),We(i,n,e)}function wn(t,e){t.j&&oi({},(function(t,i){yi(e,i,t)}))}function Tn(t,e,i){i=Math.min(t.l.length,i);var n=t.j?X(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<i;o++){let i=s[o].h;const a=s[o].g;if(i-=e,0>i)e=Math.max(0,s[o].h-100),r=!1;else try{Gi(a,t,"req"+i+"_")}catch(t){n&&n(a)}}if(r){n=t.join("&");break t}}}return t=t.l.splice(0,i),e.D=t,n}function In(t){t.g||t.u||(t.Y=1,ce(t.Ga,t),t.A=0)}function En(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Oe(X(t.Ga,t),Dn(t,t.A)),t.A++,!0)}function Cn(t){null!=t.B&&(z.clearTimeout(t.B),t.B=null)}function Sn(t){t.g=new qe(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=di(t.oa);yi(e,"RID","rpc"),yi(e,"SID",t.J),yi(e,"CI",t.N?"0":"1"),yi(e,"AID",t.U),wn(t,e),yi(e,"TYPE","xmlhttp"),t.o&&t.s&&un(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var i=t.g;t=t.la,i.K=1,i.v=vi(di(e)),i.s=null,i.U=!0,Ye(i,t)}function An(t){null!=t.v&&(z.clearTimeout(t.v),t.v=null)}function xn(t,e){var i=null;if(t.g==e){An(t),Cn(t),t.g=null;var n=2}else{if(!Vi(t.i,e))return;i=e.D,Ui(t.i,e),n=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;ie(n=xe(),new Le(n,i,e,s)),vn(t)}else In(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==n&&function(t,e){return!(Pi(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Oe(X(t.Ha,t,e),Dn(t,t.C)),t.C++,0)))}(t,e)||2==n&&En(t)))switch(i&&0<i.length&&(e=t.i,e.i=e.i.concat(i)),s){case 1:kn(t,5);break;case 4:kn(t,10);break;case 3:kn(t,6);break;default:kn(t,2)}}function Dn(t,e){let i=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(i*=2),i*e}function kn(t,e){if(t.h.info("Error code "+e),2==e){var i=null;t.j&&(i=null);var n=X(t.jb,t);i||(i=new ui("//www.google.com/images/cleardot.gif"),z.location&&"http"==z.location.protocol||gi(i,"https"),vi(i)),function(t,e){const i=new Ee;if(z.Image){const n=new Image;n.onload=W(qi,i,n,"TestLoadImage: loaded",!0,e),n.onerror=W(qi,i,n,"TestLoadImage: error",!1,e),n.onabort=W(qi,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=W(qi,i,n,"TestLoadImage: timeout",!1,e),z.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}(i.toString(),n)}else _e(2);t.G=0,t.j&&t.j.va(e),Nn(t),pn(t)}function Nn(t){t.G=0,t.I=-1,t.j&&(0==zi(t.i).length&&0==t.l.length||(t.i.i.length=0,it(t.l),t.l.length=0),t.j.ua())}function _n(t,e,i){let n=function(t){return t instanceof ui?di(t):new ui(t,void 0)}(i);if(""!=n.i)e&&fi(n,e+"."+n.i),mi(n,n.m);else{const t=z.location;n=function(t,e,i,n){var s=new ui(null,void 0);return t&&gi(s,t),e&&fi(s,e),i&&mi(s,i),n&&(s.l=n),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,i)}return t.aa&&ct(t.aa,(function(t,e){yi(n,e,t)})),e=t.D,i=t.sa,e&&i&&yi(n,e,i),yi(n,"VER",t.ma),wn(t,n),n}function Ln(t,e,i){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=i&&t.Ba&&!t.qa?new Zi(new ji({ib:!0})):new Zi(t.qa)).L=t.H,e}function On(){}function Mn(){if(vt&&!(10<=Number(_t)))throw Error("Environmental error: no available transport.")}function Rn(t,e){ee.call(this),this.g=new gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!nt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!nt(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Fn(this)}function Pn(t){Be.call(this);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Vn(){$e.call(this),this.status=1}function Fn(t){this.g=t}(P=Zi.prototype).ea=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ue.g(),this.C=this.u?Ve(this.u):Ve(Ue),this.g.onreadystatechange=X(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void sn(this,t)}t=i||"";const s=new ai(this.headers);n&&oi(n,(function(t,e){s.set(e,t)})),n=function(t){t:{var e=nn;const i=t.length,n="string"==typeof t?t.split(""):t;for(let s=0;s<i;s++)if(s in n&&e.call(void 0,n[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),i=z.FormData&&t instanceof z.FormData,!(0<=J(en,e))||n||i||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ln(this),0<this.B&&((this.K=function(t){return vt&&kt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.pa,this)):this.A=pe(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){sn(this,t)}},P.pa=function(){void 0!==U&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ie(this,"timeout"),this.abort(8))},P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ie(this,"complete"),ie(this,"abort"),an(this))},P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),an(this,!0)),Zi.Z.M.call(this)},P.Fa=function(){this.s||(this.F||this.v||this.l?on(this):this.cb())},P.cb=function(){on(this)},P.ba=function(){try{return 2<hn(this)?this.g.status:-1}catch(t){return-1}},P.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Qi(e)}},P.Da=function(){return this.m},P.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(P=gn.prototype).ma=8,P.G=1,P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},P.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new qe(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=ut(r),gt(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,i=0;i<this.l.length;i++){var n=this.l[i];if(void 0===(n="__data__"in n.g&&"string"==typeof(n=n.g.__data__)?n.length:void 0))break;if(4096<(e+=n)){e=i;break t}if(4096===e||i===this.l.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Tn(this,s,e),yi(i=di(this.F),"RID",t),yi(i,"CVER",22),this.D&&yi(i,"X-HTTP-Session-Id",this.D),wn(this,i),this.o&&r&&un(i,this.o,r),Fi(this.i,s),this.Ra&&yi(i,"TYPE","init"),this.ja?(yi(i,"$req",e),yi(i,"SID","null"),s.$=!0,We(s,i,null)):We(s,i,e),this.G=2}}else 3==this.G&&(t?bn(this,t):0==this.l.length||Ri(this.i)||bn(this))},P.Ga=function(){if(this.u=null,Sn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Oe(X(this.bb,this),t)}},P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,_e(10),mn(this),Sn(this))},P.ab=function(){null!=this.v&&(this.v=null,mn(this),En(this),_e(19))},P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),_e(2)):(this.h.info("Failed to ping google.com"),_e(1))},(P=On.prototype).xa=function(){},P.wa=function(){},P.va=function(){},P.ua=function(){},P.Oa=function(){},Mn.prototype.g=function(t,e){return new Rn(t,e)},Y(Rn,ee),Rn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,i=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ce(X(t.hb,t,e))),_e(0),t.W=e,t.aa=i||{},t.N=t.X,t.F=_n(t,null,t.W),vn(t)},Rn.prototype.close=function(){fn(this.g)},Rn.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,yn(this.g,e)}else this.v?((e={}).__data__=se(t),yn(this.g,e)):yn(this.g,t)},Rn.prototype.M=function(){this.g.j=null,delete this.j,fn(this.g),delete this.g,Rn.Z.M.call(this)},Y(Pn,Be),Y(Vn,$e),Y(Fn,On),Fn.prototype.xa=function(){ie(this.g,"a")},Fn.prototype.wa=function(t){ie(this.g,new Pn(t))},Fn.prototype.va=function(t){ie(this.g,new Vn(t))},Fn.prototype.ua=function(){ie(this.g,"b")},Mn.prototype.createWebChannel=Mn.prototype.g,Rn.prototype.send=Rn.prototype.u,Rn.prototype.open=Rn.prototype.m,Rn.prototype.close=Rn.prototype.close,Me.NO_ERROR=0,Me.TIMEOUT=8,Me.HTTP_ERROR=6,Re.COMPLETE="complete",Fe.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",ee.prototype.listen=ee.prototype.N,Zi.prototype.listenOnce=Zi.prototype.O,Zi.prototype.getLastError=Zi.prototype.La,Zi.prototype.getLastErrorCode=Zi.prototype.Da,Zi.prototype.getStatus=Zi.prototype.ba,Zi.prototype.getResponseJson=Zi.prototype.Qa,Zi.prototype.getResponseText=Zi.prototype.ga,Zi.prototype.send=Zi.prototype.ea;var Un,zn,Bn=F.createWebChannelTransport=function(){return new Mn},$n=F.getStatEventTarget=function(){return xe()},Gn=F.ErrorCode=Me,qn=F.EventType=Re,jn=F.Event=Se,Hn=F.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Kn=F.FetchXmlHttpFactory=ji,Xn=F.WebChannel=Fe,Wn=F.XhrIo=Zi,Yn={};function Qn(){throw new Error("setTimeout has not been defined")}function Zn(){throw new Error("clearTimeout has not been defined")}function Jn(t){if(Un===setTimeout)return setTimeout(t,0);if((Un===Qn||!Un)&&setTimeout)return Un=setTimeout,setTimeout(t,0);try{return Un(t,0)}catch(e){try{return Un.call(null,t,0)}catch(e){return Un.call(this,t,0)}}}!function(){try{Un="function"==typeof setTimeout?setTimeout:Qn}catch(t){Un=Qn}try{zn="function"==typeof clearTimeout?clearTimeout:Zn}catch(t){zn=Zn}}();var ts,es=[],is=!1,ns=-1;function ss(){is&&ts&&(is=!1,ts.length?es=ts.concat(es):ns=-1,es.length&&rs())}function rs(){if(!is){var t=Jn(ss);is=!0;for(var e=es.length;e;){for(ts=es,es=[];++ns<e;)ts&&ts[ns].run();ns=-1,e=es.length}ts=null,is=!1,function(t){if(zn===clearTimeout)return clearTimeout(t);if((zn===Zn||!zn)&&clearTimeout)return zn=clearTimeout,clearTimeout(t);try{zn(t)}catch(e){try{return zn.call(null,t)}catch(e){return zn.call(this,t)}}}(t)}}function os(t,e){this.fun=t,this.array=e}function as(){}Yn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];es.push(new os(t,e)),1!==es.length||is||Jn(rs)},os.prototype.run=function(){this.fun.apply(null,this.array)},Yn.title="browser",Yn.browser=!0,Yn.env={},Yn.argv=[],Yn.version="",Yn.versions={},Yn.on=as,Yn.addListener=as,Yn.once=as,Yn.off=as,Yn.removeListener=as,Yn.removeAllListeners=as,Yn.emit=as,Yn.prependListener=as,Yn.prependOnceListener=as,Yn.listeners=function(t){return[]},Yn.binding=function(t){throw new Error("process.binding is not supported")},Yn.cwd=function(){return"/"},Yn.chdir=function(t){throw new Error("process.chdir is not supported")},Yn.umask=function(){return 0};
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
class ls{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}ls.UNAUTHENTICATED=new ls(null),ls.GOOGLE_CREDENTIALS=new ls("google-credentials-uid"),ls.FIRST_PARTY=new ls("first-party-uid"),ls.MOCK_USER=new ls("mock-user");
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
let hs="9.6.7";
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
 */const cs=new E("@firebase/firestore");function us(){return cs.logLevel}function ds(t,...e){if(cs.logLevel<=v.DEBUG){const i=e.map(ms);cs.debug(`Firestore (${hs}): ${t}`,...i)}}function gs(t,...e){if(cs.logLevel<=v.ERROR){const i=e.map(ms);cs.error(`Firestore (${hs}): ${t}`,...i)}}function fs(t,...e){if(cs.logLevel<=v.WARN){const i=e.map(ms);cs.warn(`Firestore (${hs}): ${t}`,...i)}}function ms(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */var e}
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
 */function ps(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw gs(e),new Error(e)}function ys(t,e){t||ps()}function vs(t,e){return t}
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
 */const bs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ws extends l{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Ts{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Is{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Es{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ls.UNAUTHENTICATED)))}shutdown(){}}class Cs{start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let s=new Ts;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ts,t.enqueueRetryable((()=>n(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},o=t=>{ds("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ds("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ts)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ds("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ys("string"==typeof e.accessToken),new Is(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ys(null===t||"string"==typeof t),new ls(t)}constructor(t){this.t=t,this.currentUser=ls.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Ss{constructor(t,e,i){this.type="FirstParty",this.user=ls.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const n=t.auth.getAuthHeaderValueForFirstParty([]);n&&this.headers.set("Authorization",n),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class As{getToken(){return Promise.resolve(new Ss(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ls.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,i){this.h=t,this.l=e,this.m=i}}class xs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ds{start(t,e){const i=t=>{null!=t.error&&ds("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.p;return this.p=t.token,ds("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>i(e)))};const n=t=>{ds("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):ds("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ys("string"==typeof t.token),this.p=t.token,new xs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
/**
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
 */
class ks{I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}}
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
 */function Ns(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let e=0;e<t;e++)i[e]=Math.floor(256*Math.random());return i}
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
 */ks.A=-1;class _s{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const n=Ns(40);for(let s=0;s<n.length;++s)i.length<20&&n[s]<e&&(i+=t.charAt(n[s]%t.length))}return i}}function Ls(t,e){return t<e?-1:t>e?1:0}function Os(t,e,i){return t.length===e.length&&t.every(((t,n)=>i(t,e[n])))}
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
class Ms{static now(){return Ms.fromMillis(Date.now())}static fromDate(t){return Ms.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new Ms(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ls(this.nanoseconds,t.nanoseconds):Ls(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ws(bs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ws(bs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ws(bs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ws(bs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
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
 */class Rs{static fromTimestamp(t){return new Rs(t)}static min(){return new Rs(new Ms(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */function Ps(t){let e=0;for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e++;return e}function Vs(t,e){for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e(i,t[i])}function Fs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class Us{get length(){return this.len}isEqual(t){return 0===Us.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Us?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),s=e.get(n);if(i<s)return-1;if(i>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,i){void 0===e?e=0:e>t.length&&ps(),void 0===i?i=t.length-e:i>t.length-e&&ps(),this.segments=t,this.offset=e,this.len=i}}class zs extends Us{construct(t,e,i){return new zs(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new ws(bs.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new zs(e)}static emptyPath(){return new zs([])}}const Bs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $s extends Us{construct(t,e,i){return new $s(t,e,i)}static isValidIdentifier(t){return Bs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$s.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $s(["__name__"])}static fromServerFormat(t){const e=[];let i="",n=0;const s=()=>{if(0===i.length)throw new ws(bs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let r=!1;for(;n<t.length;){const e=t[n];if("\\"===e){if(n+1===t.length)throw new ws(bs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[n+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ws(bs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=e,n+=2}else"`"===e?(r=!r,n++):"."!==e||r?(i+=e,n++):(s(),n++)}if(s(),r)throw new ws(bs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $s(e)}static emptyPath(){return new $s([])}}
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
 */class Gs{covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Os(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort($s.comparator)}}
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
 */var qs=Symbol.iterator;
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
 */class js{static fromBase64String(t){const e=atob(t);return new js(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new js(e)}[qs](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ls(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}js.EMPTY_BYTE_STRING=new js("");const Hs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ks(t){if(ys(!!t),"string"==typeof t){let e=0;const i=Hs.exec(t);if(ys(!!i),i[1]){let t=i[1];t=(t+"000000000").substr(0,9),e=Number(t)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Xs(t.seconds),nanos:Xs(t.nanos)}}function Xs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ws(t){return"string"==typeof t?js.fromBase64String(t):js.fromUint8Array(t)}
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
 */function Ys(t){var e,i;return"server_timestamp"===(null===(i=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===i?void 0:i.stringValue)}function Qs(t){const e=t.mapValue.fields.__previous_value__;return Ys(e)?Qs(e):e}function Zs(t){const e=Ks(t.mapValue.fields.__local_write_time__.timestampValue);return new Ms(e.seconds,e.nanos)}
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
 */class Js{constructor(t,e,i,n,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class tr{static empty(){return new tr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof tr&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */function er(t){return null==t}function ir(t){return 0===t&&1/t==-1/0}function nr(t){return"number"==typeof t&&Number.isInteger(t)&&!ir(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class sr{static fromPath(t){return new sr(zs.fromString(t))}static fromName(t){return new sr(zs.fromString(t).popFirst(5))}static empty(){return new sr(zs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===zs.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return zs.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new sr(new zs(t.slice()))}constructor(t){this.path=t}}
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
 */const rr={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ys(t)?4:10:ps()}function ar(t,e){if(t===e)return!0;const i=or(t);if(i!==or(e))return!1;switch(i){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zs(t).isEqual(Zs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const i=Ks(t.timestampValue),n=Ks(e.timestampValue);return i.seconds===n.seconds&&i.nanos===n.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return n=e,Ws(t.bytesValue).isEqual(Ws(n.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Xs(t.geoPointValue.latitude)===Xs(e.geoPointValue.latitude)&&Xs(t.geoPointValue.longitude)===Xs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Xs(t.integerValue)===Xs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const i=Xs(t.doubleValue),n=Xs(e.doubleValue);return i===n?ir(i)===ir(n):isNaN(i)&&isNaN(n)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:return function(t,e){const i=t.mapValue.fields||{},n=e.mapValue.fields||{};if(Ps(i)!==Ps(n))return!1;for(const t in i)if(i.hasOwnProperty(t)&&(void 0===n[t]||!ar(i[t],n[t])))return!1;return!0}(t,e);default:return ps()}var n}function lr(t,e){return void 0!==(t.values||[]).find((t=>ar(t,e)))}function hr(t,e){if(t===e)return 0;const i=or(t),n=or(e);if(i!==n)return Ls(i,n);switch(i){case 0:return 0;case 1:return Ls(t.booleanValue,e.booleanValue);case 2:return function(t,e){const i=Xs(t.integerValue||t.doubleValue),n=Xs(e.integerValue||e.doubleValue);return i<n?-1:i>n?1:i===n?0:isNaN(i)?isNaN(n)?0:-1:1}(t,e);case 3:return cr(t.timestampValue,e.timestampValue);case 4:return cr(Zs(t),Zs(e));case 5:return Ls(t.stringValue,e.stringValue);case 6:return function(t,e){const i=Ws(t),n=Ws(e);return i.compareTo(n)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const i=t.split("/"),n=e.split("/");for(let t=0;t<i.length&&t<n.length;t++){const e=Ls(i[t],n[t]);if(0!==e)return e}return Ls(i.length,n.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const i=Ls(Xs(t.latitude),Xs(e.latitude));return 0!==i?i:Ls(Xs(t.longitude),Xs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const i=t.values||[],n=e.values||[];for(let t=0;t<i.length&&t<n.length;++t){const e=hr(i[t],n[t]);if(e)return e}return Ls(i.length,n.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const i=t.fields||{},n=Object.keys(i),s=e.fields||{},r=Object.keys(s);n.sort(),r.sort();for(let t=0;t<n.length&&t<r.length;++t){const e=Ls(n[t],r[t]);if(0!==e)return e;const o=hr(i[n[t]],s[r[t]]);if(0!==o)return o}return Ls(n.length,r.length)}(t.mapValue,e.mapValue);default:throw ps()}}function cr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ls(t,e);const i=Ks(t),n=Ks(e),s=Ls(i.seconds,n.seconds);return 0!==s?s:Ls(i.nanos,n.nanos)}function ur(t){return dr(t)}function dr(t){var e,i;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ks(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ws(t.bytesValue).toBase64():"referenceValue"in t?(i=t.referenceValue,sr.fromName(i).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",i=!0;for(const n of t.values||[])i?i=!1:e+=",",e+=dr(n);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let i="{",n=!0;for(const s of e)n?n=!1:i+=",",i+=`${s}:${dr(t.fields[s])}`;return i+"}"}(t.mapValue):ps()}function gr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fr(t){return!!t&&"integerValue"in t}function mr(t){return!!t&&"arrayValue"in t}function pr(t){return!!t&&"nullValue"in t}function yr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vr(t){return!!t&&"mapValue"in t}function br(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,((t,i)=>e.mapValue.fields[t]=br(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(t.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=br(t.arrayValue.values[i]);return e}return Object.assign({},t)}
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
 */class wr{static empty(){return new wr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!vr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=br(e)}setAll(t){let e=$s.emptyPath(),i={},n=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,i,n),i={},n=[],e=s.popLast()}t?i[s.lastSegment()]=br(t):n.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,i,n)}delete(t){const e=this.field(t.popLast());vr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ar(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let n=e.mapValue.fields[t.get(i)];vr(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=n),e=n}return e.mapValue.fields}applyChanges(t,e,i){Vs(e,((e,i)=>t[e]=i));for(const e of i)delete t[e]}clone(){return new wr(br(this.value))}constructor(t){this.value=t}}function Tr(t){const e=[];return Vs(t.fields,((t,i)=>{const n=new $s([t]);if(vr(i)){const t=Tr(i.mapValue).fields;if(0===t.length)e.push(n);else for(const i of t)e.push(n.child(i))}else e.push(n)})),new Gs(e)
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
 */}class Ir{static newInvalidDocument(t){return new Ir(t,0,Rs.min(),Rs.min(),wr.empty(),0)}static newFoundDocument(t,e,i){return new Ir(t,1,e,Rs.min(),i,0)}static newNoDocument(t,e){return new Ir(t,2,e,Rs.min(),wr.empty(),0)}static newUnknownDocument(t,e){return new Ir(t,3,e,Rs.min(),wr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ir&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ir(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,i,n,s,r){this.key=t,this.documentType=e,this.version=i,this.readTime=n,this.data=s,this.documentState=r}}class Er{constructor(t,e,i,n){this.indexId=t,this.collectionGroup=e,this.fields=i,this.indexState=n}}Er.UNKNOWN_ID=-1;
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
class Cr{constructor(t,e=null,i=[],n=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=n,this.limit=s,this.startAt=r,this.endAt=o,this.P=null}}function Sr(t,e=null,i=[],n=[],s=null,r=null,o=null){return new Cr(t,e,i,n,s,r,o)}function Ar(t){const e=vs(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+ur(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),er(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ur(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ur(t))).join(",")),e.P=t}return e.P}function xr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!zr(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(i=t.filters[s],n=e.filters[s],i.op!==n.op||!i.field.isEqual(n.field)||!ar(i.value,n.value))return!1;var i,n;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$r(t.startAt,e.startAt)&&$r(t.endAt,e.endAt)}function Dr(t){return sr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class kr extends class{}{static create(t,e,i){return t.isKeyField()?"in"===e||"not-in"===e?this.v(t,e,i):new Nr(t,e,i):"array-contains"===e?new Mr(t,i):"in"===e?new Rr(t,i):"not-in"===e?new Pr(t,i):"array-contains-any"===e?new Vr(t,i):new kr(t,e,i)}static v(t,e,i){return"in"===e?new _r(t,i):new Lr(t,i)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.V(hr(e,this.value)):null!==e&&or(this.value)===or(e)&&this.V(hr(e,this.value))}V(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ps()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}}class Nr extends kr{matches(t){const e=sr.comparator(t.key,this.key);return this.V(e)}constructor(t,e,i){super(t,e,i),this.key=sr.fromName(i.referenceValue)}}class _r extends kr{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Or("in",e)}}class Lr extends kr{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Or("not-in",e)}}function Or(t,e){var i;return((null===(i=e.arrayValue)||void 0===i?void 0:i.values)||[]).map((t=>sr.fromName(t.referenceValue)))}class Mr extends kr{matches(t){const e=t.data.field(this.field);return mr(e)&&lr(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Rr extends kr{matches(t){const e=t.data.field(this.field);return null!==e&&lr(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Pr extends kr{matches(t){if(lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!lr(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Vr extends kr{matches(t){const e=t.data.field(this.field);return!(!mr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>lr(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class Fr{constructor(t,e){this.position=t,this.inclusive=e}}class Ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function zr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Br(t,e,i){let n=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(n=r.field.isKeyField()?sr.comparator(sr.fromName(o.referenceValue),i.key):hr(o,i.data.field(r.field)),"desc"===r.dir&&(n*=-1),0!==n)break}return n}function $r(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let i=0;i<t.position.length;i++)if(!ar(t.position[i],e.position[i]))return!1;return!0}
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
 */class Gr{constructor(t,e=null,i=[],n=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=n,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function qr(t,e,i,n,s,r,o,a){return new Gr(t,e,i,n,s,r,o,a)}function jr(t){return new Gr(t)}function Hr(t){return!er(t.limit)&&"F"===t.limitType}function Kr(t){return!er(t.limit)&&"L"===t.limitType}function Xr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wr(t){for(const e of t.filters)if(e.S())return e.field;return null}function Yr(t){return null!==t.collectionGroup}function Qr(t){const e=vs(t);if(null===e.D){e.D=[];const t=Wr(e),i=Xr(e);if(null!==t&&null===i)t.isKeyField()||e.D.push(new Ur(t)),e.D.push(new Ur($s.keyField(),"asc"));else{let t=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ur($s.keyField(),t))}}}return e.D}function Zr(t){const e=vs(t);if(!e.C)if("F"===e.limitType)e.C=Sr(e.path,e.collectionGroup,Qr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Qr(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Ur(i.field,e))}const i=e.endAt?new Fr(e.endAt.position,!e.endAt.inclusive):null,n=e.startAt?new Fr(e.startAt.position,!e.startAt.inclusive):null;e.C=Sr(e.path,e.collectionGroup,t,e.filters,e.limit,i,n)}return e.C}function Jr(t,e,i){return new Gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,i,t.startAt,t.endAt)}function to(t,e){return xr(Zr(t),Zr(e))&&t.limitType===e.limitType}function eo(t){return`${Ar(Zr(t))}|lt:${t.limitType}`}function io(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${ur(e.value)}`})).join(", ")}]`),er(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ur(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ur(t))).join(",")),`Target(${e})`}(Zr(t))}; limitType=${t.limitType})`}function no(t,e){return e.isFoundDocument()&&function(t,e){const i=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):sr.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(t,e)&&function(t,e){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&null===e.data.field(i.field))return!1;return!0}(t,e)&&function(t,e){for(const i of t.filters)if(!i.matches(e))return!1;return!0}(t,e)&&(n=e,!((i=t).startAt&&!function(t,e,i){const n=Br(t,e,i);return t.inclusive?n<=0:n<0}(i.startAt,Qr(i),n)||i.endAt&&!function(t,e,i){const n=Br(t,e,i);return t.inclusive?n>=0:n>0}(i.endAt,Qr(i),n)));var i,n}function so(t){return(e,i)=>{let n=!1;for(const s of Qr(t)){const t=ro(s,e,i);if(0!==t)return t;n=n||s.field.isKeyField()}return 0}}function ro(t,e,i){const n=t.field.isKeyField()?sr.comparator(e.key,i.key):function(t,e,i){const n=e.data.field(t),s=i.data.field(t);return null!==n&&null!==s?hr(n,s):ps()}(t.field,e,i);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return ps()}}
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
 */function oo(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ir(e)?"-0":e}}function ao(t){return{integerValue:""+t}}function lo(t,e){return nr(e)?ao(e):oo(t,e)}
/**
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
 */class ho{constructor(){this._=void 0}}function co(t,e,i){return t instanceof fo?mo(t,e):t instanceof po?yo(t,e):i}function uo(t,e){var i,n;return t instanceof vo?fr(i=e)||(n=i)&&"doubleValue"in n?e:{integerValue:0}:null}class go extends ho{}class fo extends ho{constructor(t){super(),this.elements=t}}function mo(t,e){const i=wo(e);for(const e of t.elements)i.some((t=>ar(t,e)))||i.push(e);return{arrayValue:{values:i}}}class po extends ho{constructor(t){super(),this.elements=t}}function yo(t,e){let i=wo(e);for(const e of t.elements)i=i.filter((t=>!ar(t,e)));return{arrayValue:{values:i}}}class vo extends ho{constructor(t,e){super(),this.O=t,this.k=e}}function bo(t){return Xs(t.integerValue||t.doubleValue)}function wo(t){return mr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class To{constructor(t,e){this.version=t,this.transformResults=e}}class Io{static none(){return new Io}static exists(t){return new Io(void 0,t)}static updateTime(t){return new Io(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Eo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Co{}function So(t,e,i){var n;t instanceof No?function(t,e,i){const n=t.value.clone(),s=Oo(t.fieldTransforms,e,i.transformResults);n.setAll(s),e.convertToFoundDocument(i.version,n).setHasCommittedMutations()}(t,e,i):t instanceof _o?function(t,e,i){if(!Eo(t.precondition,e))return void e.convertToUnknownDocument(i.version);const n=Oo(t.fieldTransforms,e,i.transformResults),s=e.data;s.setAll(Lo(t)),s.setAll(n),e.convertToFoundDocument(i.version,s).setHasCommittedMutations()}(t,e,i):(n=i,e.convertToNoDocument(n.version).setHasCommittedMutations())}function Ao(t,e,i){var n;t instanceof No?function(t,e,i){if(!Eo(t.precondition,e))return;const n=t.value.clone(),s=Mo(t.fieldTransforms,i,e);n.setAll(s),e.convertToFoundDocument(ko(e),n).setHasLocalMutations()}(t,e,i):t instanceof _o?function(t,e,i){if(!Eo(t.precondition,e))return;const n=Mo(t.fieldTransforms,i,e),s=e.data;s.setAll(Lo(t)),s.setAll(n),e.convertToFoundDocument(ko(e),s).setHasLocalMutations()}(t,e,i):(n=e,Eo(t.precondition,n)&&n.convertToNoDocument(Rs.min()))}function xo(t,e){let i=null;for(const n of t.fieldTransforms){const t=e.data.field(n.field),s=uo(n.transform,t||null);null!=s&&(null==i&&(i=wr.empty()),i.set(n.field,s))}return i||null}function Do(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(i=t.fieldTransforms,n=e.fieldTransforms,!!(void 0===i&&void 0===n||i&&n&&Os(i,n,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(i=t.transform,n=e.transform,i instanceof fo&&n instanceof fo||i instanceof po&&n instanceof po?Os(i.elements,n.elements,ar):i instanceof vo&&n instanceof vo?ar(i.k,n.k):i instanceof go&&n instanceof go);var i,n}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var i,n}function ko(t){return t.isFoundDocument()?t.version:Rs.min()}class No extends Co{constructor(t,e,i,n=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=n,this.type=0}}class _o extends Co{constructor(t,e,i,n,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=n,this.fieldTransforms=s,this.type=1}}function Lo(t){const e=new Map;return t.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const n=t.data.field(i);e.set(i,n)}})),e}function Oo(t,e,i){const n=new Map;ys(t.length===i.length);for(let s=0;s<i.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);n.set(r.field,co(o,a,i[s]))}return n}function Mo(t,e,i){const n=new Map;for(const a of t){const t=a.transform,l=i.data.field(a.field);n.set(a.field,(r=l,o=e,(s=t)instanceof go?function(t,e){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(i.fields.__previous_value__=e),{mapValue:i}}(o,r):s instanceof fo?mo(s,r):s instanceof po?yo(s,r):function(t,e){const i=uo(t,e),n=bo(i)+bo(t.k);return fr(i)&&fr(t.k)?ao(n):oo(t.O,n)}(s,r)))}var s,r,o;return n}class Ro extends Co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Po extends Co{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Vo{constructor(t){this.count=t}}
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
 */var Fo,Uo;function zo(t){switch(t){default:return ps();case bs.CANCELLED:case bs.UNKNOWN:case bs.DEADLINE_EXCEEDED:case bs.RESOURCE_EXHAUSTED:case bs.INTERNAL:case bs.UNAVAILABLE:case bs.UNAUTHENTICATED:return!1;case bs.INVALID_ARGUMENT:case bs.NOT_FOUND:case bs.ALREADY_EXISTS:case bs.PERMISSION_DENIED:case bs.FAILED_PRECONDITION:case bs.ABORTED:case bs.OUT_OF_RANGE:case bs.UNIMPLEMENTED:case bs.DATA_LOSS:return!0}}function Bo(t){if(void 0===t)return gs("GRPC error has no .code"),bs.UNKNOWN;switch(t){case Fo.OK:return bs.OK;case Fo.CANCELLED:return bs.CANCELLED;case Fo.UNKNOWN:return bs.UNKNOWN;case Fo.DEADLINE_EXCEEDED:return bs.DEADLINE_EXCEEDED;case Fo.RESOURCE_EXHAUSTED:return bs.RESOURCE_EXHAUSTED;case Fo.INTERNAL:return bs.INTERNAL;case Fo.UNAVAILABLE:return bs.UNAVAILABLE;case Fo.UNAUTHENTICATED:return bs.UNAUTHENTICATED;case Fo.INVALID_ARGUMENT:return bs.INVALID_ARGUMENT;case Fo.NOT_FOUND:return bs.NOT_FOUND;case Fo.ALREADY_EXISTS:return bs.ALREADY_EXISTS;case Fo.PERMISSION_DENIED:return bs.PERMISSION_DENIED;case Fo.FAILED_PRECONDITION:return bs.FAILED_PRECONDITION;case Fo.ABORTED:return bs.ABORTED;case Fo.OUT_OF_RANGE:return bs.OUT_OF_RANGE;case Fo.UNIMPLEMENTED:return bs.UNIMPLEMENTED;case Fo.DATA_LOSS:return bs.DATA_LOSS;default:return ps()}}(Uo=Fo||(Fo={}))[Uo.OK=0]="OK",Uo[Uo.CANCELLED=1]="CANCELLED",Uo[Uo.UNKNOWN=2]="UNKNOWN",Uo[Uo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Uo[Uo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Uo[Uo.NOT_FOUND=5]="NOT_FOUND",Uo[Uo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Uo[Uo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Uo[Uo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Uo[Uo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Uo[Uo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Uo[Uo.ABORTED=10]="ABORTED",Uo[Uo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Uo[Uo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Uo[Uo.INTERNAL=13]="INTERNAL",Uo[Uo.UNAVAILABLE=14]="UNAVAILABLE",Uo[Uo.DATA_LOSS=15]="DATA_LOSS";
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
class $o{insert(t,e){return new $o(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,qo.BLACK,null,null))}remove(t){return new $o(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Go(this.root,t,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Go(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||qo.EMPTY}}class Go{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,n&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class qo{copy(t,e,i,n,s){return new qo(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const s=i(t,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===s?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return qo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return qo.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ps();if(this.right.isRed())throw ps();const t=this.left.check();if(t!==this.right.check())throw ps();return t+(this.isRed()?0:1)}constructor(t,e,i,n,s){this.key=t,this.value=e,this.color=null!=i?i:qo.RED,this.left=null!=n?n:qo.EMPTY,this.right=null!=s?s:qo.EMPTY,this.size=this.left.size+1+this.right.size}}qo.EMPTY=null,qo.RED=!0,qo.BLACK=!1,qo.EMPTY=new class{get key(){throw ps()}get value(){throw ps()}get color(){throw ps()}get left(){throw ps()}get right(){throw ps()}copy(t,e,i,n,s){return this}insert(t,e,i){return new qo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class jo{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ho(this.data.getIterator())}getIteratorFrom(t){return new Ho(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof jo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new jo(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new $o(this.comparator)}}class Ho{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
const Ko=new $o(sr.comparator);function Xo(){return Ko}const Wo=new $o(sr.comparator);function Yo(){return Wo}const Qo=new $o(sr.comparator),Zo=new jo(sr.comparator);function Jo(...t){let e=Zo;for(const i of t)e=e.add(i);return e}const ta=new jo(Ls);function ea(){return ta}
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
 */class ia{static createSynthesizedRemoteEventForCurrentChange(t,e){const i=new Map;return i.set(t,na.createSynthesizedTargetChangeForCurrentChange(t,e)),new ia(Rs.min(),i,ea(),Xo(),Jo())}constructor(t,e,i,n,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=n,this.resolvedLimboDocuments=s}}class na{static createSynthesizedTargetChangeForCurrentChange(t,e){return new na(js.EMPTY_BYTE_STRING,e,Jo(),Jo(),Jo())}constructor(t,e,i,n,s){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=n,this.removedDocuments=s}}
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
 */class sa{constructor(t,e,i,n){this.M=t,this.removedTargetIds=e,this.key=i,this.$=n}}class ra{constructor(t,e){this.targetId=t,this.F=e}}class oa{constructor(t,e,i=js.EMPTY_BYTE_STRING,n=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=n}}class aa{get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=Jo(),e=Jo(),i=Jo();return this.L.forEach(((n,s)=>{switch(s){case 0:t=t.add(n);break;case 2:e=e.add(n);break;case 1:i=i.add(n);break;default:ps()}})),new na(this.U,this.q,t,e,i)}J(){this.K=!1,this.L=ca()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}constructor(){this.B=0,this.L=ca(),this.U=js.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}}class la{ct(t){for(const e of t.M)t.$&&t.$.isFoundDocument()?this.ut(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ht(t){this.forEachTarget(t,(e=>{const i=this.lt(e);switch(t.state){case 0:this.ft(e)&&i.W(t.resumeToken);break;case 1:i.tt(),i.G||i.J(),i.W(t.resumeToken);break;case 2:i.tt(),i.G||this.removeTarget(e);break;case 3:this.ft(e)&&(i.et(),i.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),i.W(t.resumeToken));break;default:ps()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,i)=>{this.ft(i)&&e(i)}))}_t(t){const e=t.targetId,i=t.F.count,n=this.wt(e);if(n){const t=n.target;if(Dr(t))if(0===i){const i=new sr(t.path);this.at(e,i,Ir.newNoDocument(i,Rs.min()))}else ys(1===i);else this.gt(e)!==i&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((i,n)=>{const s=this.wt(n);if(s){if(i.current&&Dr(s.target)){const e=new sr(s.target.path);null!==this.it.get(e)||this.It(n,e)||this.at(n,e,Ir.newNoDocument(e,t))}i.j&&(e.set(n,i.H()),i.J())}}));let i=Jo();this.rt.forEach(((t,e)=>{let n=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(n=!1,!1)})),n&&(i=i.add(t))})),this.it.forEach(((e,i)=>i.setReadTime(t)));const n=new ia(t,e,this.ot,this.it,i);return this.it=Xo(),this.rt=ha(),this.ot=new jo(Ls),n}ut(t,e){if(!this.ft(t))return;const i=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,i),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Et(e.key).add(t))}at(t,e,i){if(!this.ft(t))return;const n=this.lt(t);this.It(t,e)?n.Y(e,1):n.X(e),this.rt=this.rt.insert(e,this.Et(e).delete(t)),i&&(this.it=this.it.insert(e,i))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new aa,this.st.set(t,e)),e}Et(t){let e=this.rt.get(t);return e||(e=new jo(Ls),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||ds("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Tt(t)}dt(t){this.st.set(t,new aa),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.nt=t,this.st=new Map,this.it=Xo(),this.rt=ha(),this.ot=new jo(Ls)}}function ha(){return new $o(sr.comparator)}function ca(){return new $o(sr.comparator)}
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
 */const ua={asc:"ASCENDING",desc:"DESCENDING"},da={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class ga{constructor(t,e){this.databaseId=t,this.N=e}}function fa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ma(t,e){return t.N?e.toBase64():e.toUint8Array()}function pa(t,e){return fa(t,e.toTimestamp())}function ya(t){return ys(!!t),Rs.fromTimestamp(function(t){const e=Ks(t);return new Ms(e.seconds,e.nanos)}(t))}function va(t,e){return(i=t,new zs(["projects",i.projectId,"databases",i.database])).child("documents").child(e).canonicalString();var i}function ba(t){const e=zs.fromString(t);return ys(Fa(e)),e}function wa(t,e){return va(t.databaseId,e.path)}function Ta(t,e){const i=ba(e);if(i.get(1)!==t.databaseId.projectId)throw new ws(bs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+t.databaseId.projectId);if(i.get(3)!==t.databaseId.database)throw new ws(bs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+t.databaseId.database);return new sr(Sa(i))}function Ia(t,e){return va(t.databaseId,e)}function Ea(t){const e=ba(t);return 4===e.length?zs.emptyPath():Sa(e)}function Ca(t){return new zs(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sa(t){return ys(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Aa(t,e,i){return{name:wa(t,e),fields:i.value.mapValue.fields}}function xa(t,e){let i;if(e instanceof No)i={update:Aa(t,e.key,e.value)};else if(e instanceof Ro)i={delete:wa(t,e.key)};else if(e instanceof _o)i={update:Aa(t,e.key,e.data),updateMask:Va(e.fieldMask)};else{if(!(e instanceof Po))return ps();i={verify:wa(t,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const i=e.transform;if(i instanceof go)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof fo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof po)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof vo)return{fieldPath:e.field.canonicalString(),increment:i.k};throw ps()}(0,t)))),e.precondition.isNone||(i.currentDocument=(n=t,void 0!==(s=e.precondition).updateTime?{updateTime:pa(n,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:ps())),i;var n,s}function Da(t,e){return{documents:[Ia(t,e.path)]}}function ka(t,e){const i={structuredQuery:{}},n=e.path;null!==e.collectionGroup?(i.parent=Ia(t,n),i.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i.parent=Ia(t,n.popLast()),i.structuredQuery.from=[{collectionId:n.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(yr(t.value))return{unaryFilter:{field:Ma(t.field),op:"IS_NAN"}};if(pr(t.value))return{unaryFilter:{field:Ma(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(yr(t.value))return{unaryFilter:{field:Ma(t.field),op:"IS_NOT_NAN"}};if(pr(t.value))return{unaryFilter:{field:Ma(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ma(t.field),op:Oa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(i.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>{return{field:Ma((e=t).field),direction:La(e.dir)};var e}))}(e.orderBy);r&&(i.structuredQuery.orderBy=r);const o=(a=t,l=e.limit,a.N||er(l)?l:{value:l});var a,l,h;return null!==o&&(i.structuredQuery.limit=o),e.startAt&&(i.structuredQuery.startAt={before:(h=e.startAt).inclusive,values:h.position}),e.endAt&&(i.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),i}function Na(t){let e=Ea(t.parent);const i=t.structuredQuery,n=i.from?i.from.length:0;let s=null;if(n>0){ys(1===n);const t=i.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];i.where&&(r=_a(i.where));let o=[];i.orderBy&&(o=i.orderBy.map((t=>{return new Ur(Ra((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;i.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,er(e)?null:e}(i.limit));let l=null;i.startAt&&(l=function(t){const e=!!t.before,i=t.values||[];return new Fr(i,e)}(i.startAt));let h=null;return i.endAt&&(h=function(t){const e=!t.before,i=t.values||[];return new Fr(i,e)}(i.endAt)),qr(e,s,o,r,a,"F",l,h)}function _a(t){return t?void 0!==t.unaryFilter?[Pa(t)]:void 0!==t.fieldFilter?[(e=t,kr.create(Ra(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ps()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>_a(t))).reduce(((t,e)=>t.concat(e))):ps():[];var e}function La(t){return ua[t]}function Oa(t){return da[t]}function Ma(t){return{fieldPath:t.canonicalString()}}function Ra(t){return $s.fromServerFormat(t.fieldPath)}function Pa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ra(t.unaryFilter.field);return kr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const i=Ra(t.unaryFilter.field);return kr.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=Ra(t.unaryFilter.field);return kr.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ra(t.unaryFilter.field);return kr.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ps()}}function Va(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Fa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function Ua(t){let e="";for(let i=0;i<t.length;i++)e.length>0&&(e=Ba(e)),e=za(t.get(i),e);return Ba(e)}function za(t,e){let i=e;const n=t.length;for(let e=0;e<n;e++){const n=t.charAt(e);switch(n){case"\0":i+="";break;case"":i+="";break;default:i+=n}}return i}function Ba(t){return t+""}class $a{constructor(t,e,i){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=i}}$a.store="owner",$a.key="owner";class Ga{constructor(t,e,i){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=i}}Ga.store="mutationQueues",Ga.keyPath="userId";class qa{constructor(t,e,i,n,s){this.userId=t,this.batchId=e,this.localWriteTimeMs=i,this.baseMutations=n,this.mutations=s}}qa.store="mutations",qa.keyPath="batchId",qa.userMutationsIndex="userMutationsIndex",qa.userMutationsKeyPath=["userId","batchId"];class ja{static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Ua(e)]}static key(t,e,i){return[t,Ua(e),i]}constructor(){}}ja.store="documentMutations",ja.PLACEHOLDER=new ja;class Ha{constructor(t,e,i,n,s,r){this.unknownDocument=t,this.noDocument=e,this.document=i,this.hasCommittedMutations=n,this.readTime=s,this.parentPath=r}}Ha.store="remoteDocuments",Ha.readTimeIndex="readTimeIndex",Ha.readTimeIndexPath="readTime",Ha.collectionReadTimeIndex="collectionReadTimeIndex",Ha.collectionReadTimeIndexPath=["parentPath","readTime"];class Ka{constructor(t){this.byteSize=t}}Ka.store="remoteDocumentGlobal",Ka.key="remoteDocumentGlobalKey";class Xa{constructor(t,e,i,n,s,r,o){this.targetId=t,this.canonicalId=e,this.readTime=i,this.resumeToken=n,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=r,this.query=o}}Xa.store="targets",Xa.keyPath="targetId",Xa.queryTargetsIndexName="queryTargetsIndex",Xa.queryTargetsKeyPath=["canonicalId","targetId"];class Wa{constructor(t,e,i){this.targetId=t,this.path=e,this.sequenceNumber=i}}Wa.store="targetDocuments",Wa.keyPath=["targetId","path"],Wa.documentTargetsIndex="documentTargetsIndex",Wa.documentTargetsKeyPath=["path","targetId"];class Ya{constructor(t,e,i,n){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=i,this.targetCount=n}}Ya.key="targetGlobalKey",Ya.store="targetGlobal";class Qa{constructor(t,e){this.collectionId=t,this.parent=e}}Qa.store="collectionParents",Qa.keyPath=["collectionId","parent"];class Za{constructor(t,e,i,n){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=i,this.inForeground=n}}Za.store="clientMetadata",Za.keyPath="clientId";class Ja{constructor(t,e,i){this.bundleId=t,this.createTime=e,this.version=i}}Ja.store="bundles",Ja.keyPath="bundleId";class tl{constructor(t,e,i){this.name=t,this.readTime=e,this.bundledQuery=i}}tl.store="namedQueries",tl.keyPath="name";class el{constructor(t,e,i){this.indexId=t,this.collectionGroup=e,this.fields=i}}el.store="indexConfiguration",el.keyPath="indexId",el.collectionGroupIndex="collectionGroupIndex",el.collectionGroupIndexPath="collectionGroup";class il{constructor(t,e,i,n,s,r){this.indexId=t,this.uid=e,this.sequenceNumber=i,this.readTime=n,this.documentKey=s,this.largestBatchId=r}}il.store="indexState",il.keyPath=["indexId","uid"],il.sequenceNumberIndex="sequenceNumberIndex",il.sequenceNumberIndexPath=["uid","sequenceNumber"];class nl{constructor(t,e,i,n,s){this.indexId=t,this.uid=e,this.arrayValue=i,this.directionalValue=n,this.documentKey=s}}nl.store="indexEntries",nl.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],nl.documentKeyIndex="documentKeyIndex",nl.documentKeyIndexPath=["indexId","uid","documentKey"];class sl{constructor(t,e,i,n,s,r){this.userId=t,this.collectionPath=e,this.documentId=i,this.collectionGroup=n,this.largestBatchId=s,this.overlayMutation=r}}sl.store="documentOverlays",sl.keyPath=["userId","collectionPath","documentId"],sl.collectionPathOverlayIndex="collectionPathOverlayIndex",sl.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],sl.collectionGroupOverlayIndex="collectionGroupOverlayIndex",sl.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const rl=[Ga.store,qa.store,ja.store,Ha.store,Xa.store,$a.store,Ya.store,Wa.store,Za.store,Ka.store,Qa.store,Ja.store,tl.store],ol=[...rl,sl.store],al=(el.store,il.store,nl.store,"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.");
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
 */class ll{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
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
 */class hl{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ps(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new hl(((i,n)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(i,n)},this.catchCallback=t=>{this.wrapFailure(e,t).next(i,n)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof hl?e:hl.resolve(e)}catch(t){return hl.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):hl.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):hl.reject(e)}static resolve(t){return new hl(((e,i)=>{e(t)}))}static reject(t){return new hl(((e,i)=>{i(t)}))}static waitFor(t){return new hl(((e,i)=>{let n=0,s=0,r=!1;t.forEach((t=>{++n,t.next((()=>{++s,r&&s===n&&e()}),(t=>i(t)))})),r=!0,s===n&&e()}))}static or(t){let e=hl.resolve(!1);for(const i of t)e=e.next((t=>t?hl.resolve(t):i()));return e}static forEach(t,e){const i=[];return t.forEach(((t,n)=>{i.push(e.call(this,t,n))})),this.waitFor(i)}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
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
 */function cl(t){return"IndexedDbTransactionError"===t.name}
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
class ul{applyToRemoteDocument(t,e){const i=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const n=this.mutations[e];n.key.isEqual(t.key)&&So(n,t,i[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Ao(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Ao(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const i=t.get(e.key),n=i;this.applyToLocalView(n),i.isValidDocument()||n.convertToNoDocument(Rs.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Jo())}isEqual(t){return this.batchId===t.batchId&&Os(this.mutations,t.mutations,((t,e)=>Do(t,e)))&&Os(this.baseMutations,t.baseMutations,((t,e)=>Do(t,e)))}constructor(t,e,i,n){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=n}}class dl{static from(t,e,i){ys(t.mutations.length===i.length);let n=Qo;const s=t.mutations;for(let t=0;t<s.length;t++)n=n.insert(s[t].key,i[t].version);return new dl(t,e,i,n)}constructor(t,e,i,n){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=n}}
/**
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
 */class gl{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
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
 */class fl{withSequenceNumber(t){return new fl(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new fl(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new fl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,i,n,s=Rs.min(),r=Rs.min(),o=js.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}}
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
 */class ml{constructor(t){this.Ht=t}}function pl(t){const e=Na({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Jr(e,e.limit,"L"):e}
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
 */class yl{Xt(t,e){this.Zt(t,e),e.te()}Zt(t,e){if("nullValue"in t)this.ee(e,5);else if("booleanValue"in t)this.ee(e,10),e.ne(t.booleanValue?1:0);else if("integerValue"in t)this.ee(e,15),e.ne(Xs(t.integerValue));else if("doubleValue"in t){const i=Xs(t.doubleValue);isNaN(i)?this.ee(e,13):(this.ee(e,15),ir(i)?e.ne(0):e.ne(i))}else if("timestampValue"in t){const i=t.timestampValue;this.ee(e,20),"string"==typeof i?e.se(i):(e.se(`${i.seconds||""}`),e.ne(i.nanos||0))}else if("stringValue"in t)this.ie(t.stringValue,e),this.re(e);else if("bytesValue"in t)this.ee(e,30),e.oe(Ws(t.bytesValue)),this.re(e);else if("referenceValue"in t)this.ce(t.referenceValue,e);else if("geoPointValue"in t){const i=t.geoPointValue;this.ee(e,45),e.ne(i.latitude||0),e.ne(i.longitude||0)}else"mapValue"in t?ar(t,rr)?this.ee(e,Number.MAX_SAFE_INTEGER):(this.ue(t.mapValue,e),this.re(e)):"arrayValue"in t?(this.ae(t.arrayValue,e),this.re(e)):ps()}ie(t,e){this.ee(e,25),this.he(t,e)}he(t,e){e.se(t)}ue(t,e){const i=t.fields||{};this.ee(e,55);for(const t of Object.keys(i))this.ie(t,e),this.Zt(i[t],e)}ae(t,e){const i=t.values||[];this.ee(e,50);for(const t of i)this.Zt(t,e)}ce(t,e){this.ee(e,37),sr.fromName(t).path.forEach((t=>{this.ee(e,60),this.he(t,e)}))}ee(t,e){t.ne(e)}re(t){t.ne(2)}constructor(){}}yl.le=new yl;
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
class vl{addToCollectionParentIndex(t,e){return this.xe.add(e),hl.resolve()}getCollectionParents(t,e){return hl.resolve(this.xe.getEntries(e))}addFieldIndex(t,e){return hl.resolve()}deleteFieldIndex(t,e){return hl.resolve()}getDocumentsMatchingTarget(t,e,i){return hl.resolve(Jo())}getFieldIndex(t,e){return hl.resolve(null)}getFieldIndexes(t,e){return hl.resolve([])}getNextCollectionGroupToUpdate(t){return hl.resolve(null)}updateCollectionGroup(t,e,i){return hl.resolve()}updateIndexEntries(t,e){return hl.resolve()}constructor(){this.xe=new bl}}class bl{add(t){const e=t.lastSegment(),i=t.popLast(),n=this.index[e]||new jo(zs.comparator),s=!n.has(i);return this.index[e]=n.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),n=this.index[e];return n&&n.has(i)}getEntries(t){return(this.index[t]||new jo(zs.comparator)).toArray()}constructor(){this.index={}}}
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
 */class wl{static withCacheSize(t){return new wl(t,wl.DEFAULT_COLLECTION_PERCENTILE,wl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}
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
 */wl.DEFAULT_COLLECTION_PERCENTILE=10,wl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wl.DEFAULT=new wl(41943040,wl.DEFAULT_COLLECTION_PERCENTILE,wl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wl.DISABLED=new wl(-1,0,0);
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
class Tl{next(){return this.ze+=2,this.ze}static He(){return new Tl(0)}static Je(){return new Tl(-1)}constructor(t){this.ze=t}}
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
async function Il(t){if(t.code!==bs.FAILED_PRECONDITION||t.message!==al)throw t;ds("LocalStore","Unexpectedly lost primary lease")}
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
class El{get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0!==i)for(const[e,n]of i)if(this.equalsFn(e,t))return n}has(t){return void 0!==this.get(t)}set(t,e){const i=this.mapKeyFn(t),n=this.inner[i];if(void 0!==n){for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return void(n[i]=[t,e]);n.push([t,e])}else this.inner[i]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0===i)return!1;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return 1===i.length?delete this.inner[e]:i.splice(n,1),!0;return!1}forEach(t){Vs(this.inner,((e,i)=>{for(const[e,n]of i)t(e,n)}))}isEmpty(){return Fs(this.inner)}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}}
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
 */class Cl{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ir.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return void 0!==i?hl.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new El((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
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
class Sl{ys(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKey(t,e).next((i=>this.ps(t,e,i)))}ps(t,e,i){return this.qn.getEntry(t,e).next((t=>{for(const e of i)e.applyToLocalView(t);return t}))}Is(t,e){t.forEach(((t,i)=>{for(const t of e)t.applyToLocalView(i)}))}Es(t,e){return this.qn.getEntries(t,e).next((e=>this.Ts(t,e).next((()=>e))))}Ts(t,e){return this.gs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Is(e,t)))}As(t,e,i){return n=e,sr.isDocumentKey(n.path)&&null===n.collectionGroup&&0===n.filters.length?this.Rs(t,e.path):Yr(e)?this.Ps(t,e,i):this.bs(t,e,i);var n}Rs(t,e){return this.ys(t,new sr(e)).next((t=>{let e=Yo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ps(t,e,i){const n=e.collectionGroup;let s=Yo();return this.indexManager.getCollectionParents(t,n).next((r=>hl.forEach(r,(r=>{const o=(a=e,l=r.child(n),new Gr(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.bs(t,o,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}bs(t,e,i){let n;return this.qn.getAll(t,e.path,i).next((i=>(n=i,this.gs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const i=t.key;let s=n.get(i);null==s&&(s=Ir.newInvalidDocument(i),n=n.insert(i,s)),Ao(t,s,e.localWriteTime),s.isFoundDocument()||(n=n.remove(i))}})).next((()=>(n.forEach(((t,i)=>{no(e,i)||(n=n.remove(t))})),n)))}constructor(t,e,i){this.qn=t,this.gs=e,this.indexManager=i}}
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
 */class Al{static Ss(t,e){let i=Jo(),n=Jo();for(const t of e.docChanges)switch(t.type){case 0:i=i.add(t.doc.key);break;case 1:n=n.add(t.doc.key)}return new Al(t,e.fromCache,i,n)}constructor(t,e,i,n){this.targetId=t,this.fromCache=e,this.vs=i,this.Vs=n}}
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
 */class xl{Ds(t){this.Cs=t}As(t,e,i,n){return 0===(s=e).filters.length&&null===s.limit&&null==s.startAt&&null==s.endAt&&(0===s.explicitOrderBy.length||1===s.explicitOrderBy.length&&s.explicitOrderBy[0].field.isKeyField())||i.isEqual(Rs.min())?this.Ns(t,e):this.Cs.Es(t,n).next((s=>{const r=this.xs(e,s);return(Hr(e)||Kr(e))&&this.ks(e.limitType,r,n,i)?this.Ns(t,e):(us()<=v.DEBUG&&ds("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),io(e)),this.Cs.As(t,e,i).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var s}xs(t,e){let i=new jo(so(t));return e.forEach(((e,n)=>{no(t,n)&&(i=i.add(n))})),i}ks(t,e,i,n){if(i.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Ns(t,e){return us()<=v.DEBUG&&ds("QueryEngine","Using full collection scan to execute query:",io(e)),this.Cs.As(t,e,Rs.min())}}
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
 */class Dl{Ls(t){this.indexManager=this.persistence.getIndexManager(t),this.gs=this.persistence.getMutationQueue(t,this.indexManager),this.Us=new Sl(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}constructor(t,e,i,n){this.persistence=t,this.Os=e,this.O=n,this.Ms=new $o(Ls),this.$s=new El((t=>Ar(t)),xr),this.Fs=Rs.min(),this.Bs=t.getRemoteDocumentCache(),this.Un=t.getTargetCache(),this.Kn=t.getBundleCache(),this.Ls(i)}}function kl(t,e,i,n){return new Dl(t,e,i,n)}async function Nl(t,e){const i=vs(t);return await i.persistence.runTransaction("Handle user change","readonly",(t=>{let n;return i.gs.getAllMutationBatches(t).next((s=>(n=s,i.Ls(e),i.gs.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Jo();for(const t of n){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Us.Es(t,o).next((t=>({qs:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function _l(t){const e=vs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Un.getLastRemoteSnapshotVersion(t)))}function Ll(t,e,i){let n=Jo();return i.forEach((t=>n=n.add(t))),e.getEntries(t,n).next((t=>{let n=Xo();return i.forEach(((i,s)=>{const r=t.get(i);s.isNoDocument()&&s.version.isEqual(Rs.min())?(e.removeEntry(i,s.readTime),n=n.insert(i,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(s),n=n.insert(i,s)):ds("LocalStore","Ignoring outdated watch update for ",i,". Current version:",r.version," Watch version:",s.version)})),n}))}function Ol(t,e){const i=vs(t);return i.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),i.gs.getNextMutationBatchAfterBatchId(t,e))))}function Ml(t,e){const i=vs(t);return i.persistence.runTransaction("Allocate target","readwrite",(t=>{let n;return i.Un.getTargetData(t,e).next((s=>s?(n=s,hl.resolve(n)):i.Un.allocateTargetId(t).next((s=>(n=new fl(e,s,0,t.currentSequenceNumber),i.Un.addTargetData(t,n).next((()=>n)))))))})).then((t=>{const n=i.Ms.get(t.targetId);return(null===n||t.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(t.targetId,t),i.$s.set(e,t.targetId)),t}))}async function Rl(t,e,i){const n=vs(t),s=n.Ms.get(e),r=i?"readwrite":"readwrite-primary";try{i||await n.persistence.runTransaction("Release target",r,(t=>n.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!cl(t))throw t;ds("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}n.Ms=n.Ms.remove(e),n.$s.delete(s.target)}function Pl(t,e,i){const n=vs(t);let s=Rs.min(),r=Jo();return n.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,i){const n=vs(t),s=n.$s.get(i);return void 0!==s?hl.resolve(n.Ms.get(s)):n.Un.getTargetData(e,i)}(n,t,Zr(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,n.Un.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>n.Os.As(t,e,i?s:Rs.min(),i?r:Jo()))).next((t=>({documents:t,Ks:r})))))}
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
class Vl{getBundleMetadata(t,e){return hl.resolve(this.Ws.get(e))}saveBundleMetadata(t,e){var i;return this.Ws.set(e.id,{id:(i=e).id,version:i.version,createTime:ya(i.createTime)}),hl.resolve()}getNamedQuery(t,e){return hl.resolve(this.zs.get(e))}saveNamedQuery(t,e){return this.zs.set(e.name,{name:(i=e).name,query:pl(i.bundledQuery),readTime:ya(i.readTime)}),hl.resolve();var i}constructor(t){this.O=t,this.Ws=new Map,this.zs=new Map}}
/**
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
 */class Fl{getOverlay(t,e){return hl.resolve(this.overlays.get(e))}saveOverlays(t,e,i){return i.forEach((i=>{this.Yt(t,e,i)})),hl.resolve()}removeOverlaysForBatchId(t,e,i){const n=this.Hs.get(i);return void 0!==n&&(n.forEach((t=>this.overlays=this.overlays.remove(t))),this.Hs.delete(i)),hl.resolve()}getOverlaysForCollection(t,e,i){const n=new Map,s=e.length+1,r=new sr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>i&&n.set(t.getKey(),t)}return hl.resolve(n)}getOverlaysForCollectionGroup(t,e,i,n){let s=new $o(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>i){let e=s.get(t.largestBatchId);null===e&&(e=new Map,s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=new Map,a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(e,t))),!(o.size>=n)););return hl.resolve(o)}Yt(t,e,i){if(null===i)return;const n=this.overlays.get(i.key);null!==n&&this.Hs.get(n.largestBatchId).delete(i.key),this.overlays=this.overlays.insert(i.key,new gl(e,i));let s=this.Hs.get(e);void 0===s&&(s=new Set,this.Hs.set(e,s)),s.add(i.key)}constructor(){this.overlays=new $o(sr.comparator),this.Hs=new Map}}
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
 */class Ul{isEmpty(){return this.Js.isEmpty()}addReference(t,e){const i=new zl(t,e);this.Js=this.Js.add(i),this.Xs=this.Xs.add(i)}ti(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ei(new zl(t,e))}ni(t,e){t.forEach((t=>this.removeReference(t,e)))}si(t){const e=new sr(new zs([])),i=new zl(e,t),n=new zl(e,t+1),s=[];return this.Xs.forEachInRange([i,n],(t=>{this.ei(t),s.push(t.key)})),s}ii(){this.Js.forEach((t=>this.ei(t)))}ei(t){this.Js=this.Js.delete(t),this.Xs=this.Xs.delete(t)}ri(t){const e=new sr(new zs([])),i=new zl(e,t),n=new zl(e,t+1);let s=Jo();return this.Xs.forEachInRange([i,n],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new zl(t,0),i=this.Js.firstAfterOrEqual(e);return null!==i&&t.isEqual(i.key)}constructor(){this.Js=new jo(zl.Ys),this.Xs=new jo(zl.Zs)}}class zl{static Ys(t,e){return sr.comparator(t.key,e.key)||Ls(t.oi,e.oi)}static Zs(t,e){return Ls(t.oi,e.oi)||sr.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.oi=e}}
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
 */class Bl{checkEmpty(t){return hl.resolve(0===this.gs.length)}addMutationBatch(t,e,i,n){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const r=new ul(s,e,i,n);this.gs.push(r);for(const e of n)this.ui=this.ui.add(new zl(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return hl.resolve(r)}lookupMutationBatch(t,e){return hl.resolve(this.ai(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,n=this.hi(i),s=n<0?0:n;return hl.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return hl.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(t){return hl.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new zl(e,0),n=new zl(e,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([i,n],(t=>{const e=this.ai(t.oi);s.push(e)})),hl.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new jo(Ls);return e.forEach((t=>{const e=new zl(t,0),n=new zl(t,Number.POSITIVE_INFINITY);this.ui.forEachInRange([e,n],(t=>{i=i.add(t.oi)}))})),hl.resolve(this.li(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,n=i.length+1;let s=i;sr.isDocumentKey(s)||(s=s.child(""));const r=new zl(new sr(s),0);let o=new jo(Ls);return this.ui.forEachWhile((t=>{const e=t.key.path;return!!i.isPrefixOf(e)&&(e.length===n&&(o=o.add(t.oi)),!0)}),r),hl.resolve(this.li(o))}li(t){const e=[];return t.forEach((t=>{const i=this.ai(t);null!==i&&e.push(i)})),e}removeMutationBatch(t,e){ys(0===this.fi(e.batchId,"removed")),this.gs.shift();let i=this.ui;return hl.forEach(e.mutations,(n=>{const s=new zl(n.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,n.key)})).next((()=>{this.ui=i}))}Qe(t){}containsKey(t,e){const i=new zl(e,0),n=this.ui.firstAfterOrEqual(i);return hl.resolve(e.isEqual(n&&n.key))}performConsistencyCheck(t){return this.gs.length,hl.resolve()}fi(t,e){return this.hi(t)}hi(t){return 0===this.gs.length?0:t-this.gs[0].batchId}ai(t){const e=this.hi(t);return e<0||e>=this.gs.length?null:this.gs[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.gs=[],this.ci=1,this.ui=new jo(zl.Ys)}}
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
 */class $l{setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,n=this.docs.get(i),s=n?n.size:0,r=this.di(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return hl.resolve(i?i.document.mutableCopy():Ir.newInvalidDocument(e))}getEntries(t,e){let i=Xo();return e.forEach((t=>{const e=this.docs.get(t);i=i.insert(t,e?e.document.mutableCopy():Ir.newInvalidDocument(t))})),hl.resolve(i)}getAll(t,e,i){let n=Xo();const s=new sr(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||s.readTime.compareTo(i)<=0||(n=n.insert(s.key,s.mutableCopy()))}return hl.resolve(n)}_i(t,e){return hl.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Gl(this)}getSize(t){return hl.resolve(this.size)}constructor(t){this.di=t,this.docs=new $o(sr.comparator),this.size=0}}class Gl extends Cl{applyChanges(t){const e=[];return this.changes.forEach(((i,n)=>{n.isValidDocument()?e.push(this.Tn.addEntry(t,n)):this.Tn.removeEntry(i)})),hl.waitFor(e)}getFromCache(t,e){return this.Tn.getEntry(t,e)}getAllFromCache(t,e){return this.Tn.getEntries(t,e)}constructor(t){super(),this.Tn=t}}
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
 */class ql{forEachTarget(t,e){return this.wi.forEach(((t,i)=>e(i))),hl.resolve()}getLastRemoteSnapshotVersion(t){return hl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return hl.resolve(this.mi)}allocateTargetId(t){return this.highestTargetId=this.yi.next(),hl.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.mi&&(this.mi=e),hl.resolve()}Ze(t){this.wi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.yi=new Tl(e),this.highestTargetId=e),t.sequenceNumber>this.mi&&(this.mi=t.sequenceNumber)}addTargetData(t,e){return this.Ze(e),this.targetCount+=1,hl.resolve()}updateTargetData(t,e){return this.Ze(e),hl.resolve()}removeTargetData(t,e){return this.wi.delete(e.target),this.gi.si(e.targetId),this.targetCount-=1,hl.resolve()}removeTargets(t,e,i){let n=0;const s=[];return this.wi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===i.get(o.targetId)&&(this.wi.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),n++)})),hl.waitFor(s).next((()=>n))}getTargetCount(t){return hl.resolve(this.targetCount)}getTargetData(t,e){const i=this.wi.get(e)||null;return hl.resolve(i)}addMatchingKeys(t,e,i){return this.gi.ti(e,i),hl.resolve()}removeMatchingKeys(t,e,i){this.gi.ni(e,i);const n=this.persistence.referenceDelegate,s=[];return n&&e.forEach((e=>{s.push(n.markPotentiallyOrphaned(t,e))})),hl.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.gi.si(e),hl.resolve()}getMatchingKeysForTargetId(t,e){const i=this.gi.ri(e);return hl.resolve(i)}containsKey(t,e){return hl.resolve(this.gi.containsKey(e))}constructor(t){this.persistence=t,this.wi=new El((t=>Ar(t)),xr),this.lastRemoteSnapshotVersion=Rs.min(),this.highestTargetId=0,this.mi=0,this.gi=new Ul,this.targetCount=0,this.yi=Tl.He()}}
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
 */class jl{start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Fl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.pi[t.toKey()];return i||(i=new Bl(e,this.referenceDelegate),this.pi[t.toKey()]=i),i}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(t,e,i){ds("MemoryPersistence","Starting transaction:",t);const n=new Hl(this.Nn.next());return this.referenceDelegate.Ei(),i(n).next((t=>this.referenceDelegate.Ti(n).next((()=>t)))).toPromise().then((t=>(n.raiseOnCommittedEvent(),t)))}Ai(t,e){return hl.or(Object.values(this.pi).map((i=>()=>i.containsKey(t,e))))}constructor(t,e){this.pi={},this.overlays={},this.Nn=new ks(0),this.xn=!1,this.xn=!0,this.referenceDelegate=t(this),this.Un=new ql(this),this.indexManager=new vl,this.qn=new $l((t=>this.referenceDelegate.Ii(t))),this.O=new ml(e),this.Kn=new Vl(this.O)}}class Hl extends ll{constructor(t){super(),this.currentSequenceNumber=t}}class Kl{static bi(t){return new Kl(t)}get vi(){if(this.Pi)return this.Pi;throw ps()}addReference(t,e,i){return this.Ri.addReference(i,e),this.vi.delete(i.toString()),hl.resolve()}removeReference(t,e,i){return this.Ri.removeReference(i,e),this.vi.add(i.toString()),hl.resolve()}markPotentiallyOrphaned(t,e){return this.vi.add(e.toString()),hl.resolve()}removeTarget(t,e){this.Ri.si(e.targetId).forEach((t=>this.vi.add(t.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.vi.add(t.toString())))})).next((()=>i.removeTargetData(t,e)))}Ei(){this.Pi=new Set}Ti(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return hl.forEach(this.vi,(i=>{const n=sr.fromPath(i);return this.Vi(t,n).next((t=>{t||e.removeEntry(n,Rs.min())}))})).next((()=>(this.Pi=null,e.apply(t))))}updateLimboDocument(t,e){return this.Vi(t,e).next((t=>{t?this.vi.delete(e.toString()):this.vi.add(e.toString())}))}Ii(t){return 0}Vi(t,e){return hl.or([()=>hl.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}constructor(t){this.persistence=t,this.Ri=new Ul,this.Pi=null}}
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
 */class Xl{Ci(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ni(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Di(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=ea()}}class Wl{addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this._r.Ci(t),this.wr[t]||"not-current"}updateQueryState(t,e,i){this.wr[t]=e}removeLocalQueryTarget(t){this._r.Ni(t)}isLocalQueryTarget(t){return this._r.activeTargetIds.has(t)}clearQueryState(t){delete this.wr[t]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(t){return this._r.activeTargetIds.has(t)}start(){return this._r=new Xl,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}constructor(){this._r=new Xl,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class Yl{mr(t){}shutdown(){}}
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
 */class Ql{mr(t){this.Er.push(t)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){ds("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Er)t(0)}Ir(){ds("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Er)t(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}}
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
 */const Zl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Jl{Pr(t){this.br=t}vr(t){this.Vr=t}onMessage(t){this.Sr=t}close(){this.Rr()}send(t){this.Ar(t)}Dr(){this.br()}Cr(t){this.Vr(t)}Nr(t){this.Sr(t)}constructor(t){this.Ar=t.Ar,this.Rr=t.Rr}}
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
 */class th extends class{Mr(t,e,i,n,s){const r=this.$r(t,e);ds("RestConnection","Sending: ",r,i);const o={};return this.Fr(o,n,s),this.Br(t,r,o,i).then((t=>(ds("RestConnection","Received: ",t),t)),(e=>{throw fs("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",i),e}))}Lr(t,e,i,n,s){return this.Mr(t,e,i,n,s)}Fr(t,e,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+hs,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,i)=>t[i]=e)),i&&i.headers.forEach(((e,i)=>t[i]=e))}$r(t,e){const i=Zl[t];return`${this.kr}/v1/${e}:${i}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.kr=e+"://"+t.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Br(t,e,i,n){return new Promise(((s,r)=>{const o=new Wn;o.listenOnce(qn.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Gn.NO_ERROR:const e=o.getResponseJson();ds("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Gn.TIMEOUT:ds("Connection",'RPC "'+t+'" timed out'),r(new ws(bs.DEADLINE_EXCEEDED,"Request time out"));break;case Gn.HTTP_ERROR:const i=o.getStatus();if(ds("Connection",'RPC "'+t+'" failed with status:',i,"response text:",o.getResponseText()),i>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(bs).indexOf(e)>=0?e:bs.UNKNOWN}(t.status);r(new ws(e,t.message))}else r(new ws(bs.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new ws(bs.UNAVAILABLE,"Connection failed."));break;default:ps()}}finally{ds("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(n);o.send(e,"POST",a,i,15)}))}Ur(t,e,i){const n=[this.kr,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Bn(),r=$n(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Kn({})),this.Fr(o.initMessageHeaders,e,i),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(a())||"object"==typeof navigator&&"ReactNative"===navigator.product||a().indexOf("Electron/")>=0||function(){const t=a();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||a().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=n.join("");ds("Connection","Creating WebChannel: "+l,o);const h=s.createWebChannel(l,o);let c=!1,u=!1;const d=new Jl({Ar:t=>{u?ds("Connection","Not sending because WebChannel is closed:",t):(c||(ds("Connection","Opening WebChannel transport."),h.open(),c=!0),ds("Connection","WebChannel sending:",t),h.send(t))},Rr:()=>h.close()}),g=(t,e,i)=>{t.listen(e,(t=>{try{i(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(h,Xn.EventType.OPEN,(()=>{u||ds("Connection","WebChannel transport opened.")})),g(h,Xn.EventType.CLOSE,(()=>{u||(u=!0,ds("Connection","WebChannel transport closed"),d.Cr())})),g(h,Xn.EventType.ERROR,(t=>{u||(u=!0,fs("Connection","WebChannel transport errored:",t),d.Cr(new ws(bs.UNAVAILABLE,"The operation could not be completed")))})),g(h,Xn.EventType.MESSAGE,(t=>{var e;if(!u){const i=t.data[0];ys(!!i);const n=i,s=n.error||(null===(e=n[0])||void 0===e?void 0:e.error);if(s){ds("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Fo[t];if(void 0!==e)return Bo(e)}(t),i=s.message;void 0===e&&(e=bs.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),u=!0,d.Cr(new ws(e,i)),h.close()}else ds("Connection","WebChannel received:",i),d.Nr(i)}})),g(r,jn.STAT_EVENT,(t=>{t.stat===Hn.PROXY?ds("Connection","Detected buffering proxy"):t.stat===Hn.NOPROXY&&ds("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Dr()}),0),d}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
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
 */function eh(){return"undefined"!=typeof document?document:null}
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
 */function ih(t){return new ga(t,!0)}class nh{reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(t){this.cancel();const e=Math.floor(this.jr+this.Jr()),i=Math.max(0,Date.now()-this.Wr),n=Math.max(0,e-i);n>0&&ds("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.jr} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,n,(()=>(this.Wr=Date.now(),t()))),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}constructor(t,e,i=1e3,n=1.5,s=6e4){this.Sn=t,this.timerId=e,this.qr=i,this.Kr=n,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}}
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
 */class sh{oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,(()=>this.lo())))}fo(t){this._o(),this.stream.send(t)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(t,e){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==t?this.ro.reset():e&&e.code===bs.RESOURCE_EXHAUSTED?(gs(e.toString()),gs("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):e&&e.code===bs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.vr(e)}mo(){}auth(){this.state=1;const t=this.yo(this.no),e=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,i])=>{this.no===e&&this.po(t,i)}),(e=>{t((()=>{const t=new ws(bs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Io(t)}))}))}po(t,e){const i=this.yo(this.no);this.stream=this.Eo(t,e),this.stream.Pr((()=>{i((()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,(()=>(this.co()&&(this.state=3),Promise.resolve()))),this.listener.Pr())))})),this.stream.vr((t=>{i((()=>this.Io(t)))})),this.stream.onMessage((t=>{i((()=>this.onMessage(t)))}))}uo(){this.state=5,this.ro.Hr((async()=>{this.state=0,this.start()}))}Io(t){return ds("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}yo(t){return e=>{this.Sn.enqueueAndForget((()=>this.no===t?e():(ds("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,i,n,s,r,o,a){this.Sn=t,this.Xr=i,this.Zr=n,this.eo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new nh(t,e)}}class rh extends sh{Eo(t,e){return this.eo.Ur("Listen",t,e)}onMessage(t){this.ro.reset();const e=function(t,e){let i;if("targetChange"in e){e.targetChange;const s="NO_CHANGE"===(n=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:ps(),r=e.targetChange.targetIds||[],o=function(t,e){return t.N?(ys(void 0===e||"string"==typeof e),js.fromBase64String(e||"")):(ys(void 0===e||e instanceof Uint8Array),js.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(t){const e=void 0===t.code?bs.UNKNOWN:Bo(t.code);return new ws(e,t.message||"")}(a);i=new oa(s,r,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ta(t,n.document.name),r=ya(n.document.updateTime),o=new wr({mapValue:{fields:n.document.fields}}),a=Ir.newFoundDocument(s,r,o),l=n.targetIds||[],h=n.removedTargetIds||[];i=new sa(l,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Ta(t,n.document),r=n.readTime?ya(n.readTime):Rs.min(),o=Ir.newNoDocument(s,r),a=n.removedTargetIds||[];i=new sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Ta(t,n.document),r=n.removedTargetIds||[];i=new sa([],r,s,null)}else{if(!("filter"in e))return ps();{e.filter;const t=e.filter;t.targetId;const n=t.count||0,s=new Vo(n),r=t.targetId;i=new ra(r,s)}}var n;return i}(this.O,t),i=function(t){if(!("targetChange"in t))return Rs.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Rs.min():e.readTime?ya(e.readTime):Rs.min()}(t);return this.listener.To(e,i)}Ao(t){const e={};e.database=Ca(this.O),e.addTarget=function(t,e){let i;const n=e.target;return i=Dr(n)?{documents:Da(t,n)}:{query:ka(t,n)},i.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?i.resumeToken=ma(t,e.resumeToken):e.snapshotVersion.compareTo(Rs.min())>0&&(i.readTime=fa(t,e.snapshotVersion.toTimestamp())),i}(this.O,t);const i=function(t,e){const i=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ps()}}(0,e.purpose);return null==i?null:{"goog-listen-tags":i}}(this.O,t);i&&(e.labels=i),this.fo(e)}Ro(t){const e={};e.database=Ca(this.O),e.removeTarget=t,this.fo(e)}constructor(t,e,i,n,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,n,r),this.O=s}}class oh extends sh{get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(t,e){return this.eo.Ur("Write",t,e)}onMessage(t){if(ys(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Po){this.ro.reset();const n=(e=t.writeResults,i=t.commitTime,e&&e.length>0?(ys(void 0!==i),e.map((t=>function(t,e){let i=t.updateTime?ya(t.updateTime):ya(e);return i.isEqual(Rs.min())&&(i=ya(e)),new To(i,t.transformResults||[])}(t,i)))):[]),s=ya(t.commitTime);return this.listener.Vo(s,n)}var e,i;return ys(!t.writeResults||0===t.writeResults.length),this.Po=!0,this.listener.So()}Do(){const t={};t.database=Ca(this.O),this.fo(t)}vo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>xa(this.O,t)))};this.fo(e)}constructor(t,e,i,n,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,n,r),this.O=s,this.Po=!1}}
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
 */class ah extends class{}{No(){if(this.Co)throw new ws(bs.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(t,e,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,s])=>this.eo.Mr(t,e,i,n,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===bs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ws(bs.UNKNOWN,t.toString())}))}Lr(t,e,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,s])=>this.eo.Lr(t,e,i,n,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===bs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ws(bs.UNKNOWN,t.toString())}))}terminate(){this.Co=!0}constructor(t,e,i,n){super(),this.authCredentials=t,this.appCheckCredentials=e,this.eo=i,this.O=n,this.Co=!1}}class lh{Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve()))))}Bo(t){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.$o("Offline")))}set(t){this.Lo(),this.xo=0,"Online"===t&&(this.Oo=!1),this.$o(t)}$o(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Fo(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(gs(e),this.Oo=!1):ds("OnlineStateTracker",e)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}}
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
 */class hh{constructor(t,e,i,n,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr((t=>{i.enqueueAndForget((async()=>{vh(this)&&(ds("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=vs(t);e.Ko.add(4),await uh(e),e.Qo.set("Unknown"),e.Ko.delete(4),await ch(e)}(this))}))})),this.Qo=new lh(i,n)}}async function ch(t){if(vh(t))for(const e of t.Go)await e(!0)}async function uh(t){for(const e of t.Go)await e(!1)}function dh(t,e){const i=vs(t);i.qo.has(e.targetId)||(i.qo.set(e.targetId,e),yh(i)?ph(i):Ph(i).co()&&fh(i,e))}function gh(t,e){const i=vs(t),n=Ph(i);i.qo.delete(e),n.co()&&mh(i,e),0===i.qo.size&&(n.co()?n.ho():vh(i)&&i.Qo.set("Unknown"))}function fh(t,e){t.Wo.Z(e.targetId),Ph(t).Ao(e)}function mh(t,e){t.Wo.Z(e),Ph(t).Ro(e)}function ph(t){t.Wo=new la({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Ph(t).start(),t.Qo.Mo()}function yh(t){return vh(t)&&!Ph(t).oo()&&t.qo.size>0}function vh(t){return 0===vs(t).Ko.size}function bh(t){t.Wo=void 0}async function wh(t){t.qo.forEach(((e,i)=>{fh(t,e)}))}async function Th(t,e){bh(t),yh(t)?(t.Qo.Bo(e),ph(t)):t.Qo.set("Unknown")}async function Ih(t,e,i){if(t.Qo.set("Online"),e instanceof oa&&2===e.state&&e.cause)try{await async function(t,e){const i=e.cause;for(const n of e.targetIds)t.qo.has(n)&&(await t.remoteSyncer.rejectListen(n,i),t.qo.delete(n),t.Wo.removeTarget(n))}(t,e)}catch(i){ds("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Eh(t,i)}else if(e instanceof sa?t.Wo.ct(e):e instanceof ra?t.Wo._t(e):t.Wo.ht(e),!i.isEqual(Rs.min()))try{const e=await _l(t.localStore);i.compareTo(e)>=0&&await function(t,e){const i=t.Wo.yt(e);return i.targetChanges.forEach(((i,n)=>{if(i.resumeToken.approximateByteSize()>0){const s=t.qo.get(n);s&&t.qo.set(n,s.withResumeToken(i.resumeToken,e))}})),i.targetMismatches.forEach((e=>{const i=t.qo.get(e);if(!i)return;t.qo.set(e,i.withResumeToken(js.EMPTY_BYTE_STRING,i.snapshotVersion)),mh(t,e);const n=new fl(i.target,e,1,i.sequenceNumber);fh(t,n)})),t.remoteSyncer.applyRemoteEvent(i)}(t,i)}catch(e){ds("RemoteStore","Failed to raise snapshot:",e),await Eh(t,e)}}async function Eh(t,e,i){if(!cl(e))throw e;t.Ko.add(1),await uh(t),t.Qo.set("Offline"),i||(i=()=>_l(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ds("RemoteStore","Retrying IndexedDB access"),await i(),t.Ko.delete(1),await ch(t)}))}function Ch(t,e){return e().catch((i=>Eh(t,i,e)))}async function Sh(t){const e=vs(t),i=Vh(e);let n=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Ah(e);)try{const t=await Ol(e.localStore,n);if(null===t){0===e.Uo.length&&i.ho();break}n=t.batchId,xh(e,t)}catch(t){await Eh(e,t)}Dh(e)&&kh(e)}function Ah(t){return vh(t)&&t.Uo.length<10}function xh(t,e){t.Uo.push(e);const i=Vh(t);i.co()&&i.bo&&i.vo(e.mutations)}function Dh(t){return vh(t)&&!Vh(t).oo()&&t.Uo.length>0}function kh(t){Vh(t).start()}async function Nh(t){Vh(t).Do()}async function _h(t){const e=Vh(t);for(const i of t.Uo)e.vo(i.mutations)}async function Lh(t,e,i){const n=t.Uo.shift(),s=dl.from(n,e,i);await Ch(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Sh(t)}async function Oh(t,e){e&&Vh(t).bo&&await async function(t,e){if(zo(i=e.code)&&i!==bs.ABORTED){const i=t.Uo.shift();Vh(t).ao(),await Ch(t,(()=>t.remoteSyncer.rejectFailedWrite(i.batchId,e))),await Sh(t)}var i}(t,e),Dh(t)&&kh(t)}async function Mh(t,e){const i=vs(t);i.asyncQueue.verifyOperationInProgress(),ds("RemoteStore","RemoteStore received new credentials");const n=vh(i);i.Ko.add(3),await uh(i),n&&i.Qo.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.Ko.delete(3),await ch(i)}async function Rh(t,e){const i=vs(t);e?(i.Ko.delete(2),await ch(i)):e||(i.Ko.add(2),await uh(i),i.Qo.set("Unknown"))}function Ph(t){return t.zo||(t.zo=function(t,e,i){const n=vs(t);return n.No(),new rh(e,n.eo,n.authCredentials,n.appCheckCredentials,n.O,i)}(t.datastore,t.asyncQueue,{Pr:wh.bind(null,t),vr:Th.bind(null,t),To:Ih.bind(null,t)}),t.Go.push((async e=>{e?(t.zo.ao(),yh(t)?ph(t):t.Qo.set("Unknown")):(await t.zo.stop(),bh(t))}))),t.zo}function Vh(t){return t.Ho||(t.Ho=function(t,e,i){const n=vs(t);return n.No(),new oh(e,n.eo,n.authCredentials,n.appCheckCredentials,n.O,i)}(t.datastore,t.asyncQueue,{Pr:Nh.bind(null,t),vr:Oh.bind(null,t),So:_h.bind(null,t),Vo:Lh.bind(null,t)}),t.Go.push((async e=>{e?(t.Ho.ao(),await Sh(t)):(await t.Ho.stop(),t.Uo.length>0&&(ds("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))}))),t.Ho
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
 */}class Fh{static createAndSchedule(t,e,i,n,s){const r=Date.now()+i,o=new Fh(t,e,r,n,s);return o.start(i),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ws(bs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,i,n,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=s,this.deferred=new Ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Uh(t,e){if(gs("AsyncQueue",`${e}: ${t}`),cl(t))return new ws(bs.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class zh{static emptySet(t){return new zh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof zh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(!t.isEqual(n))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const i=new zh;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}constructor(t){this.comparator=t?(e,i)=>t(e,i)||sr.comparator(e.key,i.key):(t,e)=>sr.comparator(t.key,e.key),this.keyedMap=Yo(),this.sortedSet=new $o(this.comparator)}}
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
 */class Bh{track(t){const e=t.doc.key,i=this.Jo.get(e);i?0!==t.type&&3===i.type?this.Jo=this.Jo.insert(e,t):3===t.type&&1!==i.type?this.Jo=this.Jo.insert(e,{type:i.type,doc:t.doc}):2===t.type&&2===i.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===i.type?this.Jo=this.Jo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===i.type?this.Jo=this.Jo.remove(e):1===t.type&&2===i.type?this.Jo=this.Jo.insert(e,{type:1,doc:i.doc}):0===t.type&&1===i.type?this.Jo=this.Jo.insert(e,{type:2,doc:t.doc}):ps():this.Jo=this.Jo.insert(e,t)}Yo(){const t=[];return this.Jo.inorderTraversal(((e,i)=>{t.push(i)})),t}constructor(){this.Jo=new $o(sr.comparator)}}class $h{static fromInitialDocuments(t,e,i,n){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new $h(t,e,zh.emptySet(e),s,i,n,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&to(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==i[t].type||!e[t].doc.isEqual(i[t].doc))return!1;return!0}constructor(t,e,i,n,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=n,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}}
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
 */class Gh{constructor(){this.Xo=void 0,this.listeners=[]}}class qh{constructor(){this.queries=new El((t=>eo(t)),to),this.onlineState="Unknown",this.Zo=new Set}}async function jh(t,e){const i=vs(t),n=e.query;let s=!1,r=i.queries.get(n);if(r||(s=!0,r=new Gh),s)try{r.Xo=await i.onListen(n)}catch(t){const i=Uh(t,`Initialization of query '${io(e.query)}' failed`);return void e.onError(i)}i.queries.set(n,r),r.listeners.push(e),e.tc(i.onlineState),r.Xo&&e.ec(r.Xo)&&Wh(i)}async function Hh(t,e){const i=vs(t),n=e.query;let s=!1;const r=i.queries.get(n);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return i.queries.delete(n),i.onUnlisten(n)}function Kh(t,e){const i=vs(t);let n=!1;for(const t of e){const e=t.query,s=i.queries.get(e);if(s){for(const e of s.listeners)e.ec(t)&&(n=!0);s.Xo=t}}n&&Wh(i)}function Xh(t,e,i){const n=vs(t),s=n.queries.get(e);if(s)for(const t of s.listeners)t.onError(i);n.queries.delete(e)}function Wh(t){t.Zo.forEach((t=>{t.next()}))}class Yh{ec(t){if(!this.options.includeMetadataChanges){const e=[];for(const i of t.docChanges)3!==i.type&&e.push(i);t=new $h(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.sc?this.rc(t)&&(this.nc.next(t),e=!0):this.oc(t,this.onlineState)&&(this.cc(t),e=!0),this.ic=t,e}onError(t){this.nc.error(t)}tc(t){this.onlineState=t;let e=!1;return this.ic&&!this.sc&&this.oc(this.ic,t)&&(this.cc(this.ic),e=!0),e}oc(t,e){if(!t.fromCache)return!0;const i="Offline"!==e;return!(this.options.uc&&i||t.docs.isEmpty()&&"Offline"!==e)}rc(t){if(t.docChanges.length>0)return!0;const e=this.ic&&this.ic.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}cc(t){t=$h.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.sc=!0,this.nc.next(t)}constructor(t,e,i){this.query=t,this.nc=e,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=i||{}}}
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
class Qh{constructor(t){this.key=t}}class Zh{constructor(t){this.key=t}}class Jh{get yc(){return this.dc}Ic(t,e){const i=e?e.Ec:new Bh,n=e?e.gc:this.gc;let s=e?e.mutatedKeys:this.mutatedKeys,r=n,o=!1;const a=Hr(this.query)&&n.size===this.query.limit?n.last():null,l=Kr(this.query)&&n.size===this.query.limit?n.first():null;if(t.inorderTraversal(((t,e)=>{const h=n.get(t),c=no(this.query,e)?e:null,u=!!h&&this.mutatedKeys.has(h.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let g=!1;h&&c?h.data.isEqual(c.data)?u!==d&&(i.track({type:3,doc:c}),g=!0):this.Tc(h,c)||(i.track({type:2,doc:c}),g=!0,(a&&this.mc(c,a)>0||l&&this.mc(c,l)<0)&&(o=!0)):!h&&c?(i.track({type:0,doc:c}),g=!0):h&&!c&&(i.track({type:1,doc:h}),g=!0,(a||l)&&(o=!0)),g&&(c?(r=r.add(c),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Hr(this.query)||Kr(this.query))for(;r.size>this.query.limit;){const t=Hr(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),i.track({type:1,doc:t})}return{gc:r,Ec:i,ks:o,mutatedKeys:s}}Tc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i){const n=this.gc;this.gc=t.gc,this.mutatedKeys=t.mutatedKeys;const s=t.Ec.Yo();s.sort(((t,e)=>function(t,e){const i=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ps()}};return i(t)-i(e)}(t.type,e.type)||this.mc(t.doc,e.doc))),this.Ac(i);const r=e?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==s.length||a?{snapshot:new $h(this.query,t.gc,n,s,t.mutatedKeys,0===o,a,!1),Pc:r}:{Pc:r}}tc(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Bh,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(t){return!this.dc.has(t)&&!!this.gc.has(t)&&!this.gc.get(t).hasLocalMutations}Ac(t){t&&(t.addedDocuments.forEach((t=>this.dc=this.dc.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.dc=this.dc.delete(t))),this.current=t.current)}Rc(){if(!this.current)return[];const t=this.wc;this.wc=Jo(),this.gc.forEach((t=>{this.bc(t.key)&&(this.wc=this.wc.add(t.key))}));const e=[];return t.forEach((t=>{this.wc.has(t)||e.push(new Zh(t))})),this.wc.forEach((i=>{t.has(i)||e.push(new Qh(i))})),e}vc(t){this.dc=t.Ks,this.wc=Jo();const e=this.Ic(t.documents);return this.applyChanges(e,!0)}Vc(){return $h.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}constructor(t,e){this.query=t,this.dc=e,this._c=null,this.current=!1,this.wc=Jo(),this.mutatedKeys=Jo(),this.mc=so(t),this.gc=new zh(this.mc)}}class tc{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class ec{constructor(t){this.key=t,this.Sc=!1}}class ic{get isPrimaryClient(){return!0===this.Lc}constructor(t,e,i,n,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Dc={},this.Cc=new El((t=>eo(t)),to),this.Nc=new Map,this.xc=new Set,this.kc=new $o(sr.comparator),this.Oc=new Map,this.Mc=new Ul,this.$c={},this.Fc=new Map,this.Bc=Tl.Je(),this.onlineState="Unknown",this.Lc=void 0}}async function nc(t,e){const i=Tc(t);let n,s;const r=i.Cc.get(e);if(r)n=r.targetId,i.sharedClientState.addLocalQueryTarget(n),s=r.view.Vc();else{const t=await Ml(i.localStore,Zr(e));i.isPrimaryClient&&dh(i.remoteStore,t);const r=i.sharedClientState.addLocalQueryTarget(t.targetId);n=t.targetId,s=await sc(i,e,n,"current"===r)}return s}async function sc(t,e,i,n){t.Uc=(e,i,n)=>async function(t,e,i,n){let s=e.view.Ic(i);s.ks&&(s=await Pl(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ic(t,s))));const r=n&&n.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return mc(t,e.targetId,o.Pc),o.snapshot}(t,e,i,n);const s=await Pl(t.localStore,e,!0),r=new Jh(e,s.Ks),o=r.Ic(s.documents),a=na.createSynthesizedTargetChangeForCurrentChange(i,n&&"Offline"!==t.onlineState),l=r.applyChanges(o,t.isPrimaryClient,a);mc(t,i,l.Pc);const h=new tc(e,i,r);return t.Cc.set(e,h),t.Nc.has(i)?t.Nc.get(i).push(e):t.Nc.set(i,[e]),l.snapshot}async function rc(t,e){const i=vs(t),n=i.Cc.get(e),s=i.Nc.get(n.targetId);if(s.length>1)return i.Nc.set(n.targetId,s.filter((t=>!to(t,e)))),void i.Cc.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(n.targetId),i.sharedClientState.isActiveQueryTarget(n.targetId)||await Rl(i.localStore,n.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(n.targetId),gh(i.remoteStore,n.targetId),gc(i,n.targetId)})).catch(Il)):(gc(i,n.targetId),await Rl(i.localStore,n.targetId,!0))}async function oc(t,e){const i=vs(t);try{const t=await function(t,e){const i=vs(t),n=e.snapshotVersion;let s=i.Ms;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=i.Bs.newChangeBuffer({trackRemovals:!0});s=i.Ms;const o=[];e.targetChanges.forEach(((r,a)=>{const l=s.get(a);if(!l)return;o.push(i.Un.removeMatchingKeys(t,r.removedDocuments,a).next((()=>i.Un.addMatchingKeys(t,r.addedDocuments,a))));let h=l.withSequenceNumber(t.currentSequenceNumber);var c,u,d;e.targetMismatches.has(a)?h=h.withResumeToken(js.EMPTY_BYTE_STRING,Rs.min()).withLastLimboFreeSnapshotVersion(Rs.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,n)),s=s.insert(a,h),u=h,d=r,(0===(c=l).resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(i.Un.updateTargetData(t,h))}));let a=Xo();if(e.documentUpdates.forEach((n=>{e.resolvedLimboDocuments.has(n)&&o.push(i.persistence.referenceDelegate.updateLimboDocument(t,n))})),o.push(Ll(t,r,e.documentUpdates).next((t=>{a=t}))),!n.isEqual(Rs.min())){const e=i.Un.getLastRemoteSnapshotVersion(t).next((e=>i.Un.setTargetsMetadata(t,t.currentSequenceNumber,n)));o.push(e)}return hl.waitFor(o).next((()=>r.apply(t))).next((()=>i.Us.Ts(t,a))).next((()=>a))})).then((t=>(i.Ms=s,t)))}(i.localStore,e);e.targetChanges.forEach(((t,e)=>{const n=i.Oc.get(e);n&&(ys(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?n.Sc=!0:t.modifiedDocuments.size>0?ys(n.Sc):t.removedDocuments.size>0&&(ys(n.Sc),n.Sc=!1))})),await vc(i,t,e)}catch(t){await Il(t)}}function ac(t,e,i){const n=vs(t);if(n.isPrimaryClient&&0===i||!n.isPrimaryClient&&1===i){const t=[];n.Cc.forEach(((i,n)=>{const s=n.view.tc(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const i=vs(t);i.onlineState=e;let n=!1;i.queries.forEach(((t,i)=>{for(const t of i.listeners)t.tc(e)&&(n=!0)})),n&&Wh(i)}(n.eventManager,e),t.length&&n.Dc.To(t),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function lc(t,e,i){const n=vs(t);n.sharedClientState.updateQueryState(e,"rejected",i);const s=n.Oc.get(e),r=s&&s.key;if(r){let t=new $o(sr.comparator);t=t.insert(r,Ir.newNoDocument(r,Rs.min()));const i=Jo().add(r),s=new ia(Rs.min(),new Map,new jo(Ls),t,i);await oc(n,s),n.kc=n.kc.remove(r),n.Oc.delete(e),yc(n)}else await Rl(n.localStore,e,!1).then((()=>gc(n,e,i))).catch(Il)}async function hc(t,e){const i=vs(t),n=e.batch.batchId;try{const t=await function(t,e){const i=vs(t);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const n=e.batch.keys(),s=i.Bs.newChangeBuffer({trackRemovals:!0});return function(t,e,i,n){const s=i.batch,r=s.keys();let o=hl.resolve();return r.forEach((t=>{o=o.next((()=>n.getEntry(e,t))).next((e=>{const r=i.docVersions.get(t);ys(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,i),e.isValidDocument()&&(e.setReadTime(i.commitVersion),n.addEntry(e)))}))})),o.next((()=>t.gs.removeMutationBatch(e,s)))}(i,t,e,s).next((()=>s.apply(t))).next((()=>i.gs.performConsistencyCheck(t))).next((()=>i.Us.Es(t,n)))}))}(i.localStore,e);dc(i,n,null),uc(i,n),i.sharedClientState.updateMutationState(n,"acknowledged"),await vc(i,t)}catch(t){await Il(t)}}async function cc(t,e,i){const n=vs(t);try{const t=await function(t,e){const i=vs(t);return i.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let n;return i.gs.lookupMutationBatch(t,e).next((e=>(ys(null!==e),n=e.keys(),i.gs.removeMutationBatch(t,e)))).next((()=>i.gs.performConsistencyCheck(t))).next((()=>i.Us.Es(t,n)))}))}(n.localStore,e);dc(n,e,i),uc(n,e),n.sharedClientState.updateMutationState(e,"rejected",i),await vc(n,t)}catch(t){await Il(t)}}function uc(t,e){(t.Fc.get(e)||[]).forEach((t=>{t.resolve()})),t.Fc.delete(e)}function dc(t,e,i){const n=vs(t);let s=n.$c[n.currentUser.toKey()];if(s){const t=s.get(e);t&&(i?t.reject(i):t.resolve(),s=s.remove(e)),n.$c[n.currentUser.toKey()]=s}}function gc(t,e,i=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Nc.get(e))t.Cc.delete(n),i&&t.Dc.qc(n,i);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach((e=>{t.Mc.containsKey(e)||fc(t,e)}))}function fc(t,e){t.xc.delete(e.path.canonicalString());const i=t.kc.get(e);null!==i&&(gh(t.remoteStore,i),t.kc=t.kc.remove(e),t.Oc.delete(i),yc(t))}function mc(t,e,i){for(const n of i)n instanceof Qh?(t.Mc.addReference(n.key,e),pc(t,n)):n instanceof Zh?(ds("SyncEngine","Document no longer in limbo: "+n.key),t.Mc.removeReference(n.key,e),t.Mc.containsKey(n.key)||fc(t,n.key)):ps()}function pc(t,e){const i=e.key,n=i.path.canonicalString();t.kc.get(i)||t.xc.has(n)||(ds("SyncEngine","New document in limbo: "+i),t.xc.add(n),yc(t))}function yc(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const i=new sr(zs.fromString(e)),n=t.Bc.next();t.Oc.set(n,new ec(i)),t.kc=t.kc.insert(i,n),dh(t.remoteStore,new fl(Zr(jr(i.path)),n,2,ks.A))}}async function vc(t,e,i){const n=vs(t),s=[],r=[],o=[];n.Cc.isEmpty()||(n.Cc.forEach(((t,a)=>{o.push(n.Uc(a,e,i).then((t=>{if(t){n.isPrimaryClient&&n.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Al.Ss(a.targetId,t);r.push(e)}})))})),await Promise.all(o),n.Dc.To(s),await async function(t,e){const i=vs(t);try{await i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>hl.forEach(e,(e=>hl.forEach(e.vs,(n=>i.persistence.referenceDelegate.addReference(t,e.targetId,n))).next((()=>hl.forEach(e.Vs,(n=>i.persistence.referenceDelegate.removeReference(t,e.targetId,n)))))))))}catch(t){if(!cl(t))throw t;ds("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=i.Ms.get(e),n=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(n);i.Ms=i.Ms.insert(e,s)}}}(n.localStore,r))}async function bc(t,e){const i=vs(t);if(!i.currentUser.isEqual(e)){ds("SyncEngine","User change. New user:",e.toKey());const t=await Nl(i.localStore,e);i.currentUser=e,(n=i).Fc.forEach((t=>{t.forEach((t=>{t.reject(new ws(bs.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),n.Fc.clear(),i.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await vc(i,t.qs)}var n}function wc(t,e){const i=vs(t),n=i.Oc.get(e);if(n&&n.Sc)return Jo().add(n.key);{let t=Jo();const n=i.Nc.get(e);if(!n)return t;for(const e of n){const n=i.Cc.get(e);t=t.unionWith(n.view.yc)}return t}}function Tc(t){const e=vs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lc.bind(null,e),e.Dc.To=Kh.bind(null,e.eventManager),e.Dc.qc=Xh.bind(null,e.eventManager),e}function Ic(t){const e=vs(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cc.bind(null,e),e}class Ec{async initialize(t){this.O=ih(t.databaseInfo.databaseId),this.sharedClientState=this.Gc(t),this.persistence=this.jc(t),await this.persistence.start(),this.gcScheduler=this.Qc(t),this.localStore=this.Wc(t)}Qc(t){return null}Wc(t){return kl(this.persistence,new xl,t.initialUser,this.O)}jc(t){return new jl(Kl.bi,this.O)}Gc(t){return new Wl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Cc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ac(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=bc.bind(null,this.syncEngine),await Rh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new qh}createDatastore(t){const e=ih(t.databaseInfo.databaseId),i=(n=t.databaseInfo,new th(n));var n,s,r;return s=t.authCredentials,r=t.appCheckCredentials,new ah(s,r,i,e)}createRemoteStore(t){var e,i,n,s,r;return e=this.localStore,i=this.datastore,n=t.asyncQueue,s=t=>ac(this.syncEngine,t,0),r=Ql.Vt()?new Ql:new Yl,new hh(e,i,n,s,r)}createSyncEngine(t,e){return function(t,e,i,n,s,r,o){const a=new ic(t,e,i,n,s,r);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=vs(t);ds("RemoteStore","RemoteStore shutting down."),e.Ko.add(5),await uh(e),e.jo.shutdown(),e.Qo.set("Unknown")}(this.remoteStore)}}
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
class Sc{next(t){this.observer.next&&this.Hc(this.observer.next,t)}error(t){this.observer.error?this.Hc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Jc(){this.muted=!0}Hc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
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
class Ac{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ws(bs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Uh(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=ls.UNAUTHENTICATED,this.clientId=_s.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{ds("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(t=>(ds("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function xc(t,e){t.asyncQueue.verifyOperationInProgress(),ds("FirestoreClient","Initializing OfflineComponentProvider");const i=await t.getConfiguration();await e.initialize(i);let n=i.initialUser;t.setCredentialChangeListener((async t=>{n.isEqual(t)||(await Nl(e.localStore,t),n=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress();const i=await kc(t);ds("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(i,n),t.setCredentialChangeListener((t=>Mh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,i)=>Mh(e.remoteStore,i))),t.onlineComponents=e}async function kc(t){return t.offlineComponents||(ds("FirestoreClient","Using default OfflineComponentProvider"),await xc(t,new Ec)),t.offlineComponents}async function Nc(t){return t.onlineComponents||(ds("FirestoreClient","Using default OnlineComponentProvider"),await Dc(t,new Cc)),t.onlineComponents}function _c(t){return Nc(t).then((t=>t.syncEngine))}async function Lc(t){const e=await Nc(t),i=e.eventManager;return i.onListen=nc.bind(null,e.syncEngine),i.onUnlisten=rc.bind(null,e.syncEngine),i}function Oc(t,e,i={}){const n=new Ts;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,i,n,s){const r=new Sc({next:i=>{e.enqueueAndForget((()=>Hh(t,o))),i.fromCache&&"server"===n.source?s.reject(new ws(bs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Yh(i,r,{includeMetadataChanges:!0,uc:!0});return jh(t,o)}(await Lc(t),t.asyncQueue,e,i,n))),n.promise}const Mc=new Map;
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
 */function Rc(t,e,i){if(!i)throw new ws(bs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pc(t){if(!sr.isDocumentKey(t))throw new ws(bs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(sr.isDocumentKey(t))throw new ws(bs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const i=(e=t).constructor?e.constructor.name:null;return i?`a custom ${i} object`:"an object"}}var e;return"function"==typeof t?"a function":ps()}function Uc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ws(bs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Fc(t);throw new ws(bs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}function zc(t,e){if(e<=0)throw new ws(bs.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
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
 */class Bc{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ws(bs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ws(bs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,i,n){if(!0===e&&!0===n)throw new ws(bs.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
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
 */class $c{get app(){if(!this._app)throw new ws(bs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ws(bs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Es;switch(t.type){case"gapi":const e=t.client;return ys(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new As(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ws(bs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Mc.get(t);e&&(ds("ComponentProvider","Removing Datastore"),Mc.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,i){this._authCredentials=e,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bc({}),this._settingsFrozen=!1,t instanceof tr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ws(bs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tr(t.options.projectId)}(t))}}
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
class Gc{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Gc(this.firestore,t,this._key)}constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}}class qc{withConverter(t){return new qc(this.firestore,t,this._query)}constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}}class jc extends qc{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Gc(this.firestore,null,new sr(t))}withConverter(t){return new jc(this.firestore,t,this._path)}constructor(t,e,i){super(t,e,jr(i)),this._path=i,this.type="collection"}}function Hc(t,e,...i){if(t=g(t),Rc("collection","path",e),t instanceof $c){const n=zs.fromString(e,...i);return Vc(n),new jc(t,null,n)}{if(!(t instanceof Gc||t instanceof jc))throw new ws(bs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(zs.fromString(e,...i));return Vc(n),new jc(t.firestore,null,n)}}
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
class Kc{get isShuttingDown(){return this.fu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.fu){this.fu=!0,this.mu=t||!1;const e=eh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.yu)}}enqueue(t){if(this.pu(),this.fu)return new Promise((()=>{}));const e=new Ts;return this.Iu((()=>this.fu&&this.mu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.lu.push(t),this.Eu())))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(t){if(!cl(t))throw t;ds("AsyncQueue","Operation failed with retryable error: "+t)}this.lu.length>0&&this.ro.Hr((()=>this.Eu()))}}Iu(t){const e=this.hu.then((()=>(this.wu=!0,t().catch((t=>{this._u=t,this.wu=!1;throw gs("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.wu=!1,t))))));return this.hu=e,e}enqueueAfterDelay(t,e,i){this.pu(),this.gu.indexOf(t)>-1&&(e=0);const n=Fh.createAndSchedule(this,t,e,i,(t=>this.Tu(t)));return this.du.push(n),n}pu(){this._u&&ps()}verifyOperationInProgress(){}async Au(){let t;do{t=this.hu,await t}while(t!==this.hu)}Ru(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}Pu(t){return this.Au().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Au()}))}bu(t){this.gu.push(t)}Tu(t){const e=this.du.indexOf(t);this.du.splice(e,1)}constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new nh(this,"async_queue_retry"),this.yu=()=>{const t=eh();t&&ds("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const t=eh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.yu)}}class Xc extends $c{_terminate(){return this._firestoreClient||Qc(this),this._firestoreClient.terminate()}constructor(t,e,i){super(t,e,i),this.type="firestore",this._queue=new Kc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function Wc(t=function(t="[DEFAULT]"){const e=x.get(t);if(!e)throw L.create("no-app",{appName:t});return e}()){return _(t,"firestore").getImmediate()}function Yc(t){return t._firestoreClient||Qc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Qc(t){var e;const i=t._freezeSettings(),n=(s=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Js(s,r,o,(a=i).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,r,o,a;t._firestoreClient=new Ac(t._authCredentials,t._appCheckCredentials,t._queue,n)}
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
class Zc{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ws(bs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $s(t)}}
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
class Jc{static fromBase64String(t){try{return new Jc(js.fromBase64String(t))}catch(t){throw new ws(bs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Jc(js.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class tu{constructor(t){this._methodName=t}}
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
 */class eu{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ls(this._lat,t._lat)||Ls(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ws(bs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ws(bs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const iu=/^__.*__$/;class nu{toMutation(t,e){return null!==this.fieldMask?new _o(t,this.data,this.fieldMask,e,this.fieldTransforms):new No(t,this.data,e,this.fieldTransforms)}constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}}function su(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ps()}}class ru{get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(t){return new ru(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(t){var e;const i=null===(e=this.path)||void 0===e?void 0:e.child(t),n=this.Su({path:i,Cu:!1});return n.Nu(t),n}xu(t){var e;const i=null===(e=this.path)||void 0===e?void 0:e.child(t),n=this.Su({path:i,Cu:!1});return n.vu(),n}ku(t){return this.Su({path:void 0,Cu:!0})}Ou(t){return yu(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Nu(this.path.get(t))}Nu(t){if(0===t.length)throw this.Ou("Document fields must not be empty");if(su(this.Vu)&&iu.test(t))throw this.Ou('Document fields cannot begin and end with "__"')}constructor(t,e,i,n,s,r){this.settings=t,this.databaseId=e,this.O=i,this.ignoreUndefinedProperties=n,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class ou{Fu(t,e,i,n=!1){return new ru({Vu:t,methodName:e,$u:i,path:$s.emptyPath(),Cu:!1,Mu:n},this.databaseId,this.O,this.ignoreUndefinedProperties)}constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.O=i||ih(t)}}function au(t){const e=t._freezeSettings(),i=ih(t._databaseId);return new ou(t._databaseId,!!e.ignoreUndefinedProperties,i)}function lu(t,e,i,n,s,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,i,s);gu("Data must be an object, but it was:",o,n);const a=uu(n,o);let l,h;if(r.merge)l=new Gs(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const n of r.mergeFields){const s=fu(e,n,i);if(!o.contains(s))throw new ws(bs.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);vu(t,s)||t.push(s)}l=new Gs(t),h=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,h=o.fieldTransforms;return new nu(new wr(a),l,h)}function hu(t,e,i,n=!1){return cu(i,t.Fu(n?4:3,e))}function cu(t,e){if(du(t=g(t)))return gu("Unsupported field value:",e,t),uu(t,e);if(t instanceof tu)return function(t,e){if(!su(e.Vu))throw e.Ou(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Ou(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(e);i&&e.fieldTransforms.push(i)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&4!==e.Vu)throw e.Ou("Nested arrays are not supported");return function(t,e){const i=[];let n=0;for(const s of t){let t=cu(s,e.ku(n));null==t&&(t={nullValue:"NULL_VALUE"}),i.push(t),n++}return{arrayValue:{values:i}}}(t,e)}return function(t,e){if(null===(t=g(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return lo(e.O,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const i=Ms.fromDate(t);return{timestampValue:fa(e.O,i)}}if(t instanceof Ms){const i=new Ms(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:fa(e.O,i)}}if(t instanceof eu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Jc)return{bytesValue:ma(e.O,t._byteString)};if(t instanceof Gc){const i=e.databaseId,n=t.firestore._databaseId;if(!n.isEqual(i))throw e.Ou(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:va(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ou(`Unsupported field value: ${Fc(t)}`)}(t,e)}function uu(t,e){const i={};return Fs(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,((t,n)=>{const s=cu(n,e.Du(t));null!=s&&(i[t]=s)})),{mapValue:{fields:i}}}function du(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ms||t instanceof eu||t instanceof Jc||t instanceof Gc||t instanceof tu)}function gu(t,e,i){if(!du(i)||("object"!=typeof(n=i)||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n))){const n=Fc(i);throw"an object"===n?e.Ou(t+" a custom object"):e.Ou(t+" "+n)}var n}function fu(t,e,i){if((e=g(e))instanceof Zc)return e._internalPath;if("string"==typeof e)return pu(t,e);throw yu("Field path arguments must be of type string or ",t,!1,void 0,i)}const mu=new RegExp("[~\\*/\\[\\]]");function pu(t,e,i){if(e.search(mu)>=0)throw yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,i);try{return new Zc(...e.split("."))._internalPath}catch(n){throw yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,i)}}function yu(t,e,i,n,s){const r=n&&!n.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;i&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new ws(bs.INVALID_ARGUMENT,a+t+l)}function vu(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class bu{get id(){return this._key.path.lastSegment()}get ref(){return new Gc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new wu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Tu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,i,n,s){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=n,this._converter=s}}class wu extends bu{data(){return super.data()}}function Tu(t,e){return"string"==typeof e?pu(t,e):e instanceof Zc?e._internalPath:e._delegate._internalPath}
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
 */class Iu{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class Eu extends bu{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(Tu("DocumentSnapshot.get",t));if(null!==i)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}constructor(t,e,i,n,s,r){super(t,e,i,n,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}}class Cu extends Eu{data(t={}){return super.data(t)}}class Su{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new Cu(this._firestore,this._userDataWriter,i.key,i,new Iu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ws(bs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((i=>({type:"added",doc:new Cu(t._firestore,t._userDataWriter,i.doc.key,i.doc,new Iu(t._snapshot.mutatedKeys.has(i.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let i=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const n=new Cu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Iu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=i.indexOf(e.doc.key),i=i.delete(e.doc.key)),1!==e.type&&(i=i.add(e.doc),r=i.indexOf(e.doc.key)),{type:Au(e.type),doc:n,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,i,n){this._firestore=t,this._userDataWriter=e,this._snapshot=n,this.metadata=new Iu(n.hasPendingWrites,n.fromCache),this.query=i}}function Au(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ps()}}
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
function xu(t){if(Kr(t)&&0===t.explicitOrderBy.length)throw new ws(bs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Du{}function ku(t,...e){for(const i of e)t=i._apply(t);return t}class Nu extends Du{_apply(t){const e=function(t,e,i){if(null!==t.startAt)throw new ws(bs.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ws(bs.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const n=new Ur(e,i);return function(t,e){if(null===Xr(t)){const i=Wr(t);null!==i&&Pu(t,i,e.field)}}(t,n),n}(t._query,this.Uu,this.Gu);return new qc(t.firestore,t.converter,function(t,e){const i=t.explicitOrderBy.concat([e]);return new Gr(t.path,t.collectionGroup,i,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}constructor(t,e){super(),this.Uu=t,this.Gu=e,this.type="orderBy"}}function _u(t,e="asc"){const i=e,n=Tu("orderBy",t);return new Nu(n,i)}class Lu extends Du{_apply(t){return new qc(t.firestore,t.converter,Jr(t._query,this.ju,this.Qu))}constructor(t,e,i){super(),this.type=t,this.ju=e,this.Qu=i}}function Ou(t){return zc("limit",t),new Lu("limit",t,"F")}class Mu extends Du{_apply(t){const e=Ru(t,this.type,this.Wu,this.zu);return new qc(t.firestore,t.converter,(i=t._query,n=e,new Gr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,n,i.endAt)));var i,n}constructor(t,e,i){super(),this.type=t,this.Wu=e,this.zu=i}}function Ru(t,e,i,n){if(i[0]=g(i[0]),i[0]instanceof bu)return function(t,e,i,n,s){if(!n)throw new ws(bs.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${i}().`);const r=[];for(const i of Qr(t))if(i.field.isKeyField())r.push(gr(e,n.key));else{const t=n.data.field(i.field);if(Ys(t))throw new ws(bs.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+i.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=i.field.canonicalString();throw new ws(bs.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}r.push(t)}return new Fr(r,s)}(t._query,t.firestore._databaseId,e,i[0]._document,n);{const s=au(t.firestore);return function(t,e,i,n,s,r){const o=t.explicitOrderBy;if(s.length>o.length)throw new ws(bs.INVALID_ARGUMENT,`Too many arguments provided to ${n}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let r=0;r<s.length;r++){const l=s[r];if(o[r].field.isKeyField()){if("string"!=typeof l)throw new ws(bs.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${n}(), but got a ${typeof l}`);if(!Yr(t)&&-1!==l.indexOf("/"))throw new ws(bs.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n}() must be a plain document ID, but '${l}' contains a slash.`);const i=t.path.child(zs.fromString(l));if(!sr.isDocumentKey(i))throw new ws(bs.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n}() must result in a valid document path, but '${i}' is not because it contains an odd number of segments.`);const s=new sr(i);a.push(gr(e,s))}else{const t=hu(i,n,l);a.push(t)}}return new Fr(a,r)}(t._query,t.firestore._databaseId,s,e,i,n)}}function Pu(t,e,i){if(!i.isEqual(e))throw new ws(bs.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${i.toString()}' instead.`)}
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
 */class Vu{convertValue(t,e="none"){switch(or(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Xs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ws(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ps()}}convertObject(t,e){const i={};return Vs(t.fields,((t,n)=>{i[t]=this.convertValue(n,e)})),i}convertGeoPoint(t){return new eu(Xs(t.latitude),Xs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Qs(t);return null==i?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Zs(t));default:return null}}convertTimestamp(t){const e=Ks(t);return new Ms(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=zs.fromString(t);ys(Fa(i));const n=new tr(i.get(1),i.get(3)),s=new sr(i.popFirst(5));return n.isEqual(e)||gs(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */function Fu(t,e,i){let n;return n=t?i&&(i.merge||i.mergeFields)?t.toFirestore(e,i):t.toFirestore(e):e,n}class Uu extends Vu{convertBytes(t){return new Jc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Gc(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function zu(t,e){const i=Uc(t.firestore,Xc),n=function(t,e,...i){if(t=g(t),1===arguments.length&&(e=_s.R()),Rc("doc","path",e),t instanceof $c){const n=zs.fromString(e,...i);return Pc(n),new Gc(t,null,new sr(n))}{if(!(t instanceof Gc||t instanceof jc))throw new ws(bs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(zs.fromString(e,...i));return Pc(n),new Gc(t.firestore,t instanceof jc?t.converter:null,new sr(n))}}(t),s=Fu(t.converter,e);return Bu(i,[lu(au(t.firestore),"addDoc",n._key,s,null!==t.converter,{}).toMutation(n._key,Io.exists(!1))]).then((()=>n))}function Bu(t,e){return function(t,e){const i=new Ts;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,i){const n=Ic(t);try{const t=await function(t,e){const i=vs(t),n=Ms.now(),s=e.reduce(((t,e)=>t.add(e.key)),Jo());let r;return i.persistence.runTransaction("Locally write mutations","readwrite",(t=>i.Us.Es(t,s).next((s=>{r=s;const o=[];for(const t of e){const e=xo(t,r.get(t.key));null!=e&&o.push(new _o(t.key,e,Tr(e.value.mapValue),Io.exists(!0)))}return i.gs.addMutationBatch(t,n,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(n.localStore,e);n.sharedClientState.addPendingMutation(t.batchId),function(t,e,i){let n=t.$c[t.currentUser.toKey()];n||(n=new $o(Ls)),n=n.insert(e,i),t.$c[t.currentUser.toKey()]=n}(n,t.batchId,i),await vc(n,t.changes),await Sh(n.remoteStore)}catch(t){const e=Uh(t,"Failed to persist write");i.reject(e)}}(await _c(t),e,i))),i.promise}(Yc(t),e)}!function(t,e=!0){hs="9.6.7",N(new f("firestore",((t,{options:i})=>{const n=t.getProvider("app").getImmediate(),s=new Xc(n,new Cs(t.getProvider("auth-internal")),new Ds(t.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC")),M("@firebase/firestore","3.4.5",t),M("@firebase/firestore","3.4.5","esm2017")}();
/*!
 * lightgallery | 2.4.0 | January 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var $u=function(){return $u=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},$u.apply(this,arguments)};var Gu="lgAfterAppendSlide",qu="lgInit",ju="lgHasVideo",Hu="lgContainerResize",Ku="lgUpdateSlides",Xu="lgAfterAppendSubHtml",Wu="lgBeforeOpen",Yu="lgAfterOpen",Qu="lgSlideItemLoad",Zu="lgBeforeSlide",Ju="lgAfterSlide",td="lgPosterClick",ed="lgDragStart",id="lgDragMove",nd="lgDragEnd",sd="lgBeforeNextSlide",rd="lgBeforePrevSlide",od="lgBeforeClose",ad="lgAfterClose",ld={mode:"lg-slide",easing:"ease",speed:400,licenseKey:"0000-0000-000-0000",height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:300,container:"",startAnimationDuration:400,zoomFromOrigin:!0,hideBarsDelay:0,showBarsAfter:1e4,slideDelay:0,supportLegacyBrowser:!0,allowMediaOverlap:!1,videoMaxSize:"1280-720",loadYouTubePoster:!0,defaultCaptionHeight:0,ariaLabelledby:"",ariaDescribedby:"",closable:!0,swipeToClose:!0,closeOnTap:!0,showCloseIcon:!0,showMaximizeIcon:!1,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimation:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:2,numberOfSlideItemsInDom:10,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:0,iframeWidth:"100%",iframeHeight:"100%",iframeMaxWidth:"100%",iframeMaxHeight:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],extraProps:[],exThumbImage:"",isMobile:void 0,mobileSettings:{controls:!1,showCloseIcon:!1,download:!1},plugins:[],strings:{closeGallery:"Close gallery",toggleMaximize:"Toggle maximize",previousSlide:"Previous slide",nextSlide:"Next slide",download:"Download",playVideo:"Play video"}};var hd=function(){function t(t){return this.cssVenderPrefixes=["TransitionDuration","TransitionTimingFunction","Transform","Transition"],this.selector=this._getSelector(t),this.firstElement=this._getFirstEl(),this}return t.generateUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},t.prototype._getSelector=function(t,e){return void 0===e&&(e=document),"string"!=typeof t?t:(e=e||document,"#"===t.substring(0,1)?e.querySelector(t):e.querySelectorAll(t))},t.prototype._each=function(t){return this.selector?(void 0!==this.selector.length?[].forEach.call(this.selector,t):t(this.selector,0),this):this},t.prototype._setCssVendorPrefix=function(t,e,i){var n=e.replace(/-([a-z])/gi,(function(t,e){return e.toUpperCase()}));-1!==this.cssVenderPrefixes.indexOf(n)?(t.style[n.charAt(0).toLowerCase()+n.slice(1)]=i,t.style["webkit"+n]=i,t.style["moz"+n]=i,t.style["ms"+n]=i,t.style["o"+n]=i):t.style[n]=i},t.prototype._getFirstEl=function(){return this.selector&&void 0!==this.selector.length?this.selector[0]:this.selector},t.prototype.isEventMatched=function(t,e){var i=e.split(".");return t.split(".").filter((function(t){return t})).every((function(t){return-1!==i.indexOf(t)}))},t.prototype.attr=function(t,e){return void 0===e?this.firstElement?this.firstElement.getAttribute(t):"":(this._each((function(i){i.setAttribute(t,e)})),this)},t.prototype.find=function(t){return cd(this._getSelector(t,this.selector))},t.prototype.first=function(){return this.selector&&void 0!==this.selector.length?cd(this.selector[0]):cd(this.selector)},t.prototype.eq=function(t){return cd(this.selector[t])},t.prototype.parent=function(){return cd(this.selector.parentElement)},t.prototype.get=function(){return this._getFirstEl()},t.prototype.removeAttr=function(t){var e=t.split(" ");return this._each((function(t){e.forEach((function(e){return t.removeAttribute(e)}))})),this},t.prototype.wrap=function(t){if(!this.firstElement)return this;var e=document.createElement("div");return e.className=t,this.firstElement.parentNode.insertBefore(e,this.firstElement),this.firstElement.parentNode.removeChild(this.firstElement),e.appendChild(this.firstElement),this},t.prototype.addClass=function(t){return void 0===t&&(t=""),this._each((function(e){t.split(" ").forEach((function(t){t&&e.classList.add(t)}))})),this},t.prototype.removeClass=function(t){return this._each((function(e){t.split(" ").forEach((function(t){t&&e.classList.remove(t)}))})),this},t.prototype.hasClass=function(t){return!!this.firstElement&&this.firstElement.classList.contains(t)},t.prototype.hasAttribute=function(t){return!!this.firstElement&&this.firstElement.hasAttribute(t)},t.prototype.toggleClass=function(t){return this.firstElement?(this.hasClass(t)?this.removeClass(t):this.addClass(t),this):this},t.prototype.css=function(t,e){var i=this;return this._each((function(n){i._setCssVendorPrefix(n,t,e)})),this},t.prototype.on=function(e,i){var n=this;return this.selector?(e.split(" ").forEach((function(e){Array.isArray(t.eventListeners[e])||(t.eventListeners[e]=[]),t.eventListeners[e].push(i),n.selector.addEventListener(e.split(".")[0],i)})),this):this},t.prototype.once=function(t,e){var i=this;return this.on(t,(function(){i.off(t),e(t)})),this},t.prototype.off=function(e){var i=this;return this.selector?(Object.keys(t.eventListeners).forEach((function(n){i.isEventMatched(e,n)&&(t.eventListeners[n].forEach((function(t){i.selector.removeEventListener(n.split(".")[0],t)})),t.eventListeners[n]=[])})),this):this},t.prototype.trigger=function(t,e){if(!this.firstElement)return this;var i=new CustomEvent(t.split(".")[0],{detail:e||null});return this.firstElement.dispatchEvent(i),this},t.prototype.load=function(t){var e=this;return fetch(t).then((function(t){return t.text()})).then((function(t){e.selector.innerHTML=t})),this},t.prototype.html=function(t){return void 0===t?this.firstElement?this.firstElement.innerHTML:"":(this._each((function(e){e.innerHTML=t})),this)},t.prototype.append=function(t){return this._each((function(e){"string"==typeof t?e.insertAdjacentHTML("beforeend",t):e.appendChild(t)})),this},t.prototype.prepend=function(t){return this._each((function(e){e.insertAdjacentHTML("afterbegin",t)})),this},t.prototype.remove=function(){return this._each((function(t){t.parentNode.removeChild(t)})),this},t.prototype.empty=function(){return this._each((function(t){t.innerHTML=""})),this},t.prototype.scrollTop=function(t){return void 0!==t?(document.body.scrollTop=t,document.documentElement.scrollTop=t,this):window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},t.prototype.scrollLeft=function(t){return void 0!==t?(document.body.scrollLeft=t,document.documentElement.scrollLeft=t,this):window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0},t.prototype.offset=function(){if(!this.firstElement)return{left:0,top:0};var t=this.firstElement.getBoundingClientRect(),e=cd("body").style().marginLeft;return{left:t.left-parseFloat(e)+this.scrollLeft(),top:t.top+this.scrollTop()}},t.prototype.style=function(){return this.firstElement?this.firstElement.currentStyle||window.getComputedStyle(this.firstElement):{}},t.prototype.width=function(){var t=this.style();return this.firstElement.clientWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)},t.prototype.height=function(){var t=this.style();return this.firstElement.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)},t.eventListeners={},t}();function cd(t){return function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),new hd(t)}var ud=["src","sources","subHtml","subHtmlUrl","html","video","poster","slideName","responsive","srcset","sizes","iframe","downloadUrl","download","width","facebookShareUrl","tweetText","iframeTitle","twitterShareUrl","pinterestShareUrl","pinterestText","fbHtml","disqusIdentifier","disqusUrl"];function dd(t){return"href"===t?"src":t=(t=(t=t.replace("data-","")).charAt(0).toLowerCase()+t.slice(1)).replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))}var gd=function(t,e,i,n){void 0===i&&(i=0);var s=cd(t).attr("data-lg-size")||n;if(s){var r=s.split(",");if(r[1])for(var o=window.innerWidth,a=0;a<r.length;a++){var l=r[a];if(parseInt(l.split("-")[2],10)>o){s=l;break}a===r.length-1&&(s=l)}var h=s.split("-"),c=parseInt(h[0],10),u=parseInt(h[1],10),d=e.width(),g=e.height()-i,f=Math.min(d,c),m=Math.min(g,u),p=Math.min(f/c,m/u);return{width:c*p,height:u*p}}},fd=function(t,e,i,n,s){if(s){var r=cd(t).find("img").first();if(r.get()){var o=e.get().getBoundingClientRect(),a=o.width,l=e.height()-(i+n),h=r.width(),c=r.height(),u=r.style(),d=(a-h)/2-r.offset().left+(parseFloat(u.paddingLeft)||0)+(parseFloat(u.borderLeft)||0)+cd(window).scrollLeft()+o.left,g=(l-c)/2-r.offset().top+(parseFloat(u.paddingTop)||0)+(parseFloat(u.borderTop)||0)+cd(window).scrollTop()+i;return"translate3d("+(d*=-1)+"px, "+(g*=-1)+"px, 0) scale3d("+h/s.width+", "+c/s.height+", 1)"}}},md=function(t,e,i,n,s,r){return'<div class="lg-video-cont lg-has-iframe" style="width:'+t+"; max-width:"+i+"; height: "+e+"; max-height:"+n+'">\n                    <iframe class="lg-object" frameborder="0" '+(r?'title="'+r+'"':"")+' src="'+s+'"  allowfullscreen="true"></iframe>\n                </div>'},pd=function(t,e,i,n,s,r){var o="<img "+i+" "+(n?'srcset="'+n+'"':"")+"  "+(s?'sizes="'+s+'"':"")+' class="lg-object lg-image" data-index="'+t+'" src="'+e+'" />',a="";r&&(a=("string"==typeof r?JSON.parse(r):r).map((function(t){var e="";return Object.keys(t).forEach((function(i){e+=" "+i+'="'+t[i]+'"'})),"<source "+e+"></source>"})));return""+a+o},yd=function(t){for(var e=[],i=[],n="",s=0;s<t.length;s++){var r=t[s].split(" ");""===r[0]&&r.splice(0,1),i.push(r[0]),e.push(r[1])}for(var o=window.innerWidth,a=0;a<e.length;a++)if(parseInt(e[a],10)>o){n=i[a];break}return n},vd=function(t){return!!t&&(!!t.complete&&0!==t.naturalWidth)},bd=function(t,e,i,n,s){return'<div class="lg-video-cont '+(s&&s.youtube?"lg-has-youtube":s&&s.vimeo?"lg-has-vimeo":"lg-has-html5")+'" style="'+i+'">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="'+n+'"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>'+n+'</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            '+(e||"")+'\n            <img class="lg-object lg-video-poster" src="'+t+'" />\n        </div>'},wd=function(t,e,i,n){var s=[],r=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),s=0;for(e=0;e<i;e++)for(var r=arguments[e],o=0,a=r.length;o<a;o++,s++)n[s]=r[o];return n}(ud,e);return[].forEach.call(t,(function(t){for(var e={},o=0;o<t.attributes.length;o++){var a=t.attributes[o];if(a.specified){var l=dd(a.name),h="";r.indexOf(l)>-1&&(h=l),h&&(e[h]=a.value)}}var c=cd(t),u=c.find("img").first().attr("alt"),d=c.attr("title"),g=n?c.attr(n):c.find("img").first().attr("src");e.thumb=g,i&&!e.subHtml&&(e.subHtml=d||u||""),e.alt=u||d||"",s.push(e)})),s},Td=function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},Id=function(t,e,i){if(!t)return e?{html5:!0}:void console.error("lightGallery :- data-src is not provided on slide item "+(i+1)+". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");var n=t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i),s=t.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i),r=t.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);return n?{youtube:n}:s?{vimeo:s}:r?{wistia:r}:void 0},Ed=0,Cd=function(){function t(t,e){if(this.lgOpened=!1,this.index=0,this.plugins=[],this.lGalleryOn=!1,this.lgBusy=!1,this.currentItemsInDom=[],this.prevScrollTop=0,this.isDummyImageRemoved=!1,this.dragOrSwipeEnabled=!1,this.mediaContainerPosition={top:0,bottom:0},!t)return this;if(Ed++,this.lgId=Ed,this.el=t,this.LGel=cd(t),this.generateSettings(e),this.buildModules(),this.settings.dynamic&&void 0!==this.settings.dynamicEl&&!Array.isArray(this.settings.dynamicEl))throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.galleryItems=this.getItems(),this.normalizeSettings(),this.init(),this.validateLicense(),this}return t.prototype.generateSettings=function(t){if(this.settings=$u($u({},ld),t),this.settings.isMobile&&"function"==typeof this.settings.isMobile?this.settings.isMobile():Td()){var e=$u($u({},this.settings.mobileSettings),this.settings.mobileSettings);this.settings=$u($u({},this.settings),e)}},t.prototype.normalizeSettings=function(){this.settings.slideEndAnimation&&(this.settings.hideControlOnEnd=!1),this.settings.closable||(this.settings.swipeToClose=!1),this.zoomFromOrigin=this.settings.zoomFromOrigin,this.settings.dynamic&&(this.zoomFromOrigin=!1),this.settings.container||(this.settings.container=document.body),this.settings.preload=Math.min(this.settings.preload,this.galleryItems.length)},t.prototype.init=function(){var t=this;this.addSlideVideoInfo(this.galleryItems),this.buildStructure(),this.LGel.trigger(qu,{instance:this}),this.settings.keyPress&&this.keyPress(),setTimeout((function(){t.enableDrag(),t.enableSwipe(),t.triggerPosterClick()}),50),this.arrow(),this.settings.mousewheel&&this.mousewheel(),this.settings.dynamic||this.openGalleryOnItemClick()},t.prototype.openGalleryOnItemClick=function(){for(var t=this,e=function(e){var n=i.items[e],s=cd(n),r=hd.generateUUID();s.attr("data-lg-id",r).on("click.lgcustom-item-"+r,(function(i){i.preventDefault();var s=t.settings.index||e;t.openGallery(s,n)}))},i=this,n=0;n<this.items.length;n++)e(n)},t.prototype.buildModules=function(){var t=this;this.settings.plugins.forEach((function(e){t.plugins.push(new e(t,cd))}))},t.prototype.validateLicense=function(){this.settings.licenseKey?"0000-0000-000-0000"===this.settings.licenseKey&&console.warn("lightGallery: "+this.settings.licenseKey+" license key is not valid for production use"):console.error("Please provide a valid license key")},t.prototype.getSlideItem=function(t){return cd(this.getSlideItemId(t))},t.prototype.getSlideItemId=function(t){return"#lg-item-"+this.lgId+"-"+t},t.prototype.getIdName=function(t){return t+"-"+this.lgId},t.prototype.getElementById=function(t){return cd("#"+this.getIdName(t))},t.prototype.manageSingleSlideClassName=function(){this.galleryItems.length<2?this.outer.addClass("lg-single-item"):this.outer.removeClass("lg-single-item")},t.prototype.buildStructure=function(){var t=this;if(!(this.$container&&this.$container.get())){var e="",i="";this.settings.controls&&(e='<button type="button" id="'+this.getIdName("lg-prev")+'" aria-label="'+this.settings.strings.previousSlide+'" class="lg-prev lg-icon"> '+this.settings.prevHtml+' </button>\n                <button type="button" id="'+this.getIdName("lg-next")+'" aria-label="'+this.settings.strings.nextSlide+'" class="lg-next lg-icon"> '+this.settings.nextHtml+" </button>"),".lg-item"!==this.settings.appendSubHtmlTo&&(i='<div class="lg-sub-html" role="status" aria-live="polite"></div>');var n="";this.settings.allowMediaOverlap&&(n+="lg-media-overlap ");var s=this.settings.ariaLabelledby?'aria-labelledby="'+this.settings.ariaLabelledby+'"':"",r=this.settings.ariaDescribedby?'aria-describedby="'+this.settings.ariaDescribedby+'"':"",o="lg-container "+this.settings.addClass+" "+(document.body!==this.settings.container?"lg-inline":""),a=this.settings.closable&&this.settings.showCloseIcon?'<button type="button" aria-label="'+this.settings.strings.closeGallery+'" id="'+this.getIdName("lg-close")+'" class="lg-close lg-icon"></button>':"",l=this.settings.showMaximizeIcon?'<button type="button" aria-label="'+this.settings.strings.toggleMaximize+'" id="'+this.getIdName("lg-maximize")+'" class="lg-maximize lg-icon"></button>':"",h='\n        <div class="'+o+'" id="'+this.getIdName("lg-container")+'" tabindex="-1" aria-modal="true" '+s+" "+r+' role="dialog"\n        >\n            <div id="'+this.getIdName("lg-backdrop")+'" class="lg-backdrop"></div>\n\n            <div id="'+this.getIdName("lg-outer")+'" class="lg-outer lg-use-css3 lg-css3 lg-hide-items '+n+' ">\n\n              <div id="'+this.getIdName("lg-content")+'" class="lg-content">\n                <div id="'+this.getIdName("lg-inner")+'" class="lg-inner">\n                </div>\n                '+e+'\n              </div>\n                <div id="'+this.getIdName("lg-toolbar")+'" class="lg-toolbar lg-group">\n                    '+l+"\n                    "+a+"\n                    </div>\n                    "+(".lg-outer"===this.settings.appendSubHtmlTo?i:"")+'\n                <div id="'+this.getIdName("lg-components")+'" class="lg-components">\n                    '+(".lg-sub-html"===this.settings.appendSubHtmlTo?i:"")+"\n                </div>\n            </div>\n        </div>\n        ";cd(this.settings.container).append(h),document.body!==this.settings.container&&cd(this.settings.container).css("position","relative"),this.outer=this.getElementById("lg-outer"),this.$lgComponents=this.getElementById("lg-components"),this.$backdrop=this.getElementById("lg-backdrop"),this.$container=this.getElementById("lg-container"),this.$inner=this.getElementById("lg-inner"),this.$content=this.getElementById("lg-content"),this.$toolbar=this.getElementById("lg-toolbar"),this.$backdrop.css("transition-duration",this.settings.backdropDuration+"ms");var c=this.settings.mode+" ";this.manageSingleSlideClassName(),this.settings.enableDrag&&(c+="lg-grab "),this.outer.addClass(c),this.$inner.css("transition-timing-function",this.settings.easing),this.$inner.css("transition-duration",this.settings.speed+"ms"),this.settings.download&&this.$toolbar.append('<a id="'+this.getIdName("lg-download")+'" target="_blank" rel="noopener" aria-label="'+this.settings.strings.download+'" download class="lg-download lg-icon"></a>'),this.counter(),cd(window).on("resize.lg.global"+this.lgId+" orientationchange.lg.global"+this.lgId,(function(){t.refreshOnResize()})),this.hideBars(),this.manageCloseGallery(),this.toggleMaximize(),this.initModules()}},t.prototype.refreshOnResize=function(){if(this.lgOpened){var t=this.galleryItems[this.index].__slideVideoInfo;this.mediaContainerPosition=this.getMediaContainerPosition();var e=this.mediaContainerPosition,i=e.top,n=e.bottom;if(this.currentImageSize=gd(this.items[this.index],this.outer,i+n,t&&this.settings.videoMaxSize),t&&this.resizeVideoSlide(this.index,this.currentImageSize),this.zoomFromOrigin&&!this.isDummyImageRemoved){var s=this.getDummyImgStyles(this.currentImageSize);this.outer.find(".lg-current .lg-dummy-img").first().attr("style",s)}this.LGel.trigger(Hu)}},t.prototype.resizeVideoSlide=function(t,e){var i=this.getVideoContStyle(e);this.getSlideItem(t).find(".lg-video-cont").attr("style",i)},t.prototype.updateSlides=function(t,e){if(this.index>t.length-1&&(this.index=t.length-1),1===t.length&&(this.index=0),t.length){var i=this.galleryItems[e].src;this.galleryItems=t,this.updateControls(),this.$inner.empty(),this.currentItemsInDom=[];var n=0;this.galleryItems.some((function(t,e){return t.src===i&&(n=e,!0)})),this.currentItemsInDom=this.organizeSlideItems(n,-1),this.loadContent(n,!0),this.getSlideItem(n).addClass("lg-current"),this.index=n,this.updateCurrentCounter(n),this.LGel.trigger(Ku)}else this.closeGallery()},t.prototype.getItems=function(){if(this.items=[],this.settings.dynamic)return this.settings.dynamicEl||[];if("this"===this.settings.selector)this.items.push(this.el);else if(this.settings.selector)if("string"==typeof this.settings.selector)if(this.settings.selectWithin){var t=cd(this.settings.selectWithin);this.items=t.find(this.settings.selector).get()}else this.items=this.el.querySelectorAll(this.settings.selector);else this.items=this.settings.selector;else this.items=this.el.children;return wd(this.items,this.settings.extraProps,this.settings.getCaptionFromTitleOrAlt,this.settings.exThumbImage)},t.prototype.openGallery=function(t,e){var i=this;if(void 0===t&&(t=this.settings.index),!this.lgOpened){this.lgOpened=!0,this.outer.get().focus(),this.outer.removeClass("lg-hide-items"),this.$container.addClass("lg-show");var n=this.getItemsToBeInsertedToDom(t,t);this.currentItemsInDom=n;var s="";n.forEach((function(t){s=s+'<div id="'+t+'" class="lg-item"></div>'})),this.$inner.append(s),this.addHtml(t);var r="";this.mediaContainerPosition=this.getMediaContainerPosition();var o=this.mediaContainerPosition,a=o.top,l=o.bottom;this.settings.allowMediaOverlap||this.setMediaContainerPosition(a,l);var h=this.galleryItems[t].__slideVideoInfo;this.zoomFromOrigin&&e&&(this.currentImageSize=gd(e,this.outer,a+l,h&&this.settings.videoMaxSize),r=fd(e,this.outer,a,l,this.currentImageSize)),this.zoomFromOrigin&&r||(this.outer.addClass(this.settings.startClass),this.getSlideItem(t).removeClass("lg-complete"));var c=this.settings.zoomFromOrigin?100:this.settings.backdropDuration;setTimeout((function(){i.outer.addClass("lg-components-open")}),c),this.index=t,this.LGel.trigger(Wu),this.getSlideItem(t).addClass("lg-current"),this.lGalleryOn=!1,this.prevScrollTop=cd(window).scrollTop(),setTimeout((function(){if(i.zoomFromOrigin&&r){var e=i.getSlideItem(t);e.css("transform",r),setTimeout((function(){e.addClass("lg-start-progress lg-start-end-progress").css("transition-duration",i.settings.startAnimationDuration+"ms"),i.outer.addClass("lg-zoom-from-image")})),setTimeout((function(){e.css("transform","translate3d(0, 0, 0)")}),100)}setTimeout((function(){i.$backdrop.addClass("in"),i.$container.addClass("lg-show-in")}),10),i.zoomFromOrigin&&r||setTimeout((function(){i.outer.addClass("lg-visible")}),i.settings.backdropDuration),i.slide(t,!1,!1,!1),i.LGel.trigger(Yu)})),document.body===this.settings.container&&cd("html").addClass("lg-on")}},t.prototype.getMediaContainerPosition=function(){if(this.settings.allowMediaOverlap)return{top:0,bottom:0};var t=this.$toolbar.get().clientHeight||0,e=this.outer.find(".lg-components .lg-sub-html").get(),i=this.settings.defaultCaptionHeight||e&&e.clientHeight||0,n=this.outer.find(".lg-thumb-outer").get();return{top:t,bottom:(n?n.clientHeight:0)+i}},t.prototype.setMediaContainerPosition=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.$content.css("top",t+"px").css("bottom",e+"px")},t.prototype.hideBars=function(){var t=this;setTimeout((function(){t.outer.removeClass("lg-hide-items"),t.settings.hideBarsDelay>0&&(t.outer.on("mousemove.lg click.lg touchstart.lg",(function(){t.outer.removeClass("lg-hide-items"),clearTimeout(t.hideBarTimeout),t.hideBarTimeout=setTimeout((function(){t.outer.addClass("lg-hide-items")}),t.settings.hideBarsDelay)})),t.outer.trigger("mousemove.lg"))}),this.settings.showBarsAfter)},t.prototype.initPictureFill=function(t){if(this.settings.supportLegacyBrowser)try{picturefill({elements:[t.get()]})}catch(t){console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")}},t.prototype.counter=function(){if(this.settings.counter){var t='<div class="lg-counter" role="status" aria-live="polite">\n                <span id="'+this.getIdName("lg-counter-current")+'" class="lg-counter-current">'+(this.index+1)+' </span> /\n                <span id="'+this.getIdName("lg-counter-all")+'" class="lg-counter-all">'+this.galleryItems.length+" </span></div>";this.outer.find(this.settings.appendCounterTo).append(t)}},t.prototype.addHtml=function(t){var e,i;if(this.galleryItems[t].subHtmlUrl?i=this.galleryItems[t].subHtmlUrl:e=this.galleryItems[t].subHtml,!i)if(e){var n=e.substring(0,1);"."!==n&&"#"!==n||(e=this.settings.subHtmlSelectorRelative&&!this.settings.dynamic?cd(this.items).eq(t).find(e).first().html():cd(e).first().html())}else e="";if(".lg-item"!==this.settings.appendSubHtmlTo)i?this.outer.find(".lg-sub-html").load(i):this.outer.find(".lg-sub-html").html(e);else{var s=cd(this.getSlideItemId(t));i?s.load(i):s.append('<div class="lg-sub-html">'+e+"</div>")}null!=e&&(""===e?this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html"):this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")),this.LGel.trigger(Xu,{index:t})},t.prototype.preload=function(t){for(var e=1;e<=this.settings.preload&&!(e>=this.galleryItems.length-t);e++)this.loadContent(t+e,!1);for(var i=1;i<=this.settings.preload&&!(t-i<0);i++)this.loadContent(t-i,!1)},t.prototype.getDummyImgStyles=function(t){return t?"width:"+t.width+"px;\n                margin-left: -"+t.width/2+"px;\n                margin-top: -"+t.height/2+"px;\n                height:"+t.height+"px":""},t.prototype.getVideoContStyle=function(t){return t?"width:"+t.width+"px;\n                height:"+t.height+"px":""},t.prototype.getDummyImageContent=function(t,e,i){var n;if(this.settings.dynamic||(n=cd(this.items).eq(e)),n){var s=void 0;if(!(s=this.settings.exThumbImage?n.attr(this.settings.exThumbImage):n.find("img").first().attr("src")))return"";var r="<img "+i+' style="'+this.getDummyImgStyles(this.currentImageSize)+'" class="lg-dummy-img" src="'+s+'" />';return t.addClass("lg-first-slide"),this.outer.addClass("lg-first-slide-loading"),r}return""},t.prototype.setImgMarkup=function(t,e,i){var n=this.galleryItems[i],s=n.alt,r=n.srcset,o=n.sizes,a=n.sources,l=s?'alt="'+s+'"':"",h='<picture class="lg-img-wrap"> '+(this.isFirstSlideWithZoomAnimation()?this.getDummyImageContent(e,i,l):pd(i,t,l,r,o,a))+"</picture>";e.prepend(h)},t.prototype.onSlideObjectLoad=function(t,e,i,n){var s=t.find(".lg-object").first();vd(s.get())||e?i():(s.on("load.lg error.lg",(function(){i&&i()})),s.on("error.lg",(function(){n&&n()})))},t.prototype.onLgObjectLoad=function(t,e,i,n,s,r){var o=this;this.onSlideObjectLoad(t,r,(function(){o.triggerSlideItemLoad(t,e,i,n,s)}),(function(){t.addClass("lg-complete lg-complete_"),t.html('<span class="lg-error-msg">Oops... Failed to load content...</span>')}))},t.prototype.triggerSlideItemLoad=function(t,e,i,n,s){var r=this,o=this.galleryItems[e],a=s&&"video"===this.getSlideType(o)&&!o.poster?n:0;setTimeout((function(){t.addClass("lg-complete lg-complete_"),r.LGel.trigger(Qu,{index:e,delay:i||0,isFirstSlide:s})}),a)},t.prototype.isFirstSlideWithZoomAnimation=function(){return!(this.lGalleryOn||!this.zoomFromOrigin||!this.currentImageSize)},t.prototype.addSlideVideoInfo=function(t){var e=this;t.forEach((function(t,i){t.__slideVideoInfo=Id(t.src,!!t.video,i),t.__slideVideoInfo&&e.settings.loadYouTubePoster&&!t.poster&&t.__slideVideoInfo.youtube&&(t.poster="//img.youtube.com/vi/"+t.__slideVideoInfo.youtube[1]+"/maxresdefault.jpg")}))},t.prototype.loadContent=function(t,e){var i=this,n=this.galleryItems[t],s=cd(this.getSlideItemId(t)),r=n.poster,o=n.srcset,a=n.sizes,l=n.sources,h=n.src,c=n.video,u=c&&"string"==typeof c?JSON.parse(c):c;if(n.responsive){var d=n.responsive.split(",");h=yd(d)||h}var g=n.__slideVideoInfo,f="",m=!!n.iframe,p=!this.lGalleryOn,y=0;if(p&&(y=this.zoomFromOrigin&&this.currentImageSize?this.settings.startAnimationDuration+10:this.settings.backdropDuration+10),!s.hasClass("lg-loaded")){if(g){var v=this.mediaContainerPosition,b=v.top,w=v.bottom,T=gd(this.items[t],this.outer,b+w,g&&this.settings.videoMaxSize);f=this.getVideoContStyle(T)}if(m){var I=md(this.settings.iframeWidth,this.settings.iframeHeight,this.settings.iframeMaxWidth,this.settings.iframeMaxHeight,h,n.iframeTitle);s.prepend(I)}else if(r){var E="";p&&this.zoomFromOrigin&&this.currentImageSize&&(E=this.getDummyImageContent(s,t,""));I=bd(r,E||"",f,this.settings.strings.playVideo,g);s.prepend(I)}else if(g){I='<div class="lg-video-cont " style="'+f+'"></div>';s.prepend(I)}else if(this.setImgMarkup(h,s,t),o||l){var C=s.find(".lg-object");this.initPictureFill(C)}(r||g)&&this.LGel.trigger(ju,{index:t,src:h,html5Video:u,hasPoster:!!r}),this.LGel.trigger(Gu,{index:t}),this.lGalleryOn&&".lg-item"===this.settings.appendSubHtmlTo&&this.addHtml(t)}var S=0;y&&!cd(document.body).hasClass("lg-from-hash")&&(S=y),this.isFirstSlideWithZoomAnimation()&&(setTimeout((function(){s.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")}),this.settings.startAnimationDuration+100),s.hasClass("lg-loaded")||setTimeout((function(){if("image"===i.getSlideType(n)&&(s.find(".lg-img-wrap").append(pd(t,h,"",o,a,n.sources)),o||l)){var e=s.find(".lg-object");i.initPictureFill(e)}("image"===i.getSlideType(n)||"video"===i.getSlideType(n)&&r)&&(i.onLgObjectLoad(s,t,y,S,!0,!1),i.onSlideObjectLoad(s,!(!g||!g.html5||r),(function(){i.loadContentOnFirstSlideLoad(t,s,S)}),(function(){i.loadContentOnFirstSlideLoad(t,s,S)})))}),this.settings.startAnimationDuration+100)),s.addClass("lg-loaded"),this.isFirstSlideWithZoomAnimation()&&("video"!==this.getSlideType(n)||r)||this.onLgObjectLoad(s,t,y,S,p,!(!g||!g.html5||r)),this.zoomFromOrigin&&this.currentImageSize||!s.hasClass("lg-complete_")||this.lGalleryOn||setTimeout((function(){s.addClass("lg-complete")}),this.settings.backdropDuration),this.lGalleryOn=!0,!0===e&&(s.hasClass("lg-complete_")?this.preload(t):s.find(".lg-object").first().on("load.lg error.lg",(function(){i.preload(t)})))},t.prototype.loadContentOnFirstSlideLoad=function(t,e,i){var n=this;setTimeout((function(){e.find(".lg-dummy-img").remove(),e.removeClass("lg-first-slide"),n.outer.removeClass("lg-first-slide-loading"),n.isDummyImageRemoved=!0,n.preload(t)}),i+300)},t.prototype.getItemsToBeInsertedToDom=function(t,e,i){var n=this;void 0===i&&(i=0);var s=[],r=Math.max(i,3);r=Math.min(r,this.galleryItems.length);var o="lg-item-"+this.lgId+"-"+e;if(this.galleryItems.length<=3)return this.galleryItems.forEach((function(t,e){s.push("lg-item-"+n.lgId+"-"+e)})),s;if(t<(this.galleryItems.length-1)/2){for(var a=t;a>t-r/2&&a>=0;a--)s.push("lg-item-"+this.lgId+"-"+a);var l=s.length;for(a=0;a<r-l;a++)s.push("lg-item-"+this.lgId+"-"+(t+a+1))}else{for(a=t;a<=this.galleryItems.length-1&&a<t+r/2;a++)s.push("lg-item-"+this.lgId+"-"+a);for(l=s.length,a=0;a<r-l;a++)s.push("lg-item-"+this.lgId+"-"+(t-a-1))}return this.settings.loop&&(t===this.galleryItems.length-1?s.push("lg-item-"+this.lgId+"-0"):0===t&&s.push("lg-item-"+this.lgId+"-"+(this.galleryItems.length-1))),-1===s.indexOf(o)&&s.push("lg-item-"+this.lgId+"-"+e),s},t.prototype.organizeSlideItems=function(t,e){var i=this,n=this.getItemsToBeInsertedToDom(t,e,this.settings.numberOfSlideItemsInDom);return n.forEach((function(t){-1===i.currentItemsInDom.indexOf(t)&&i.$inner.append('<div id="'+t+'" class="lg-item"></div>')})),this.currentItemsInDom.forEach((function(t){-1===n.indexOf(t)&&cd("#"+t).remove()})),n},t.prototype.getPreviousSlideIndex=function(){var t=0;try{var e=this.outer.find(".lg-current").first().attr("id");t=parseInt(e.split("-")[3])||0}catch(e){t=0}return t},t.prototype.setDownloadValue=function(t){if(this.settings.download){var e=this.galleryItems[t];if(!1===e.downloadUrl||"false"===e.downloadUrl)this.outer.addClass("lg-hide-download");else{var i=this.getElementById("lg-download");this.outer.removeClass("lg-hide-download"),i.attr("href",e.downloadUrl||e.src),e.download&&i.attr("download",e.download)}}},t.prototype.makeSlideAnimation=function(t,e,i){var n=this;this.lGalleryOn&&i.addClass("lg-slide-progress"),setTimeout((function(){n.outer.addClass("lg-no-trans"),n.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"),"prev"===t?(e.addClass("lg-prev-slide"),i.addClass("lg-next-slide")):(e.addClass("lg-next-slide"),i.addClass("lg-prev-slide")),setTimeout((function(){n.outer.find(".lg-item").removeClass("lg-current"),e.addClass("lg-current"),n.outer.removeClass("lg-no-trans")}),50)}),this.lGalleryOn?this.settings.slideDelay:0)},t.prototype.slide=function(t,e,i,n){var s=this,r=this.getPreviousSlideIndex();if(this.currentItemsInDom=this.organizeSlideItems(t,r),!this.lGalleryOn||r!==t){var o=this.galleryItems.length;if(!this.lgBusy){this.settings.counter&&this.updateCurrentCounter(t);var a=this.getSlideItem(t),l=this.getSlideItem(r),h=this.galleryItems[t],c=h.__slideVideoInfo;if(this.outer.attr("data-lg-slide-type",this.getSlideType(h)),this.setDownloadValue(t),c){var u=this.mediaContainerPosition,d=u.top,g=u.bottom,f=gd(this.items[t],this.outer,d+g,c&&this.settings.videoMaxSize);this.resizeVideoSlide(t,f)}if(this.LGel.trigger(Zu,{prevIndex:r,index:t,fromTouch:!!e,fromThumb:!!i}),this.lgBusy=!0,clearTimeout(this.hideBarTimeout),this.arrowDisable(t),n||(t<r?n="prev":t>r&&(n="next")),e){this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");var m=void 0,p=void 0;o>2?(m=t-1,p=t+1,(0===t&&r===o-1||t===o-1&&0===r)&&(p=0,m=o-1)):(m=0,p=1),"prev"===n?this.getSlideItem(p).addClass("lg-next-slide"):this.getSlideItem(m).addClass("lg-prev-slide"),a.addClass("lg-current")}else this.makeSlideAnimation(n,a,l);this.lGalleryOn?setTimeout((function(){s.loadContent(t,!0),".lg-item"!==s.settings.appendSubHtmlTo&&s.addHtml(t)}),this.settings.speed+50+(e?0:this.settings.slideDelay)):this.loadContent(t,!0),setTimeout((function(){s.lgBusy=!1,l.removeClass("lg-slide-progress"),s.LGel.trigger(Ju,{prevIndex:r,index:t,fromTouch:e,fromThumb:i})}),(this.lGalleryOn?this.settings.speed+100:100)+(e?0:this.settings.slideDelay))}this.index=t}},t.prototype.updateCurrentCounter=function(t){this.getElementById("lg-counter-current").html(t+1+"")},t.prototype.updateCounterTotal=function(){this.getElementById("lg-counter-all").html(this.galleryItems.length+"")},t.prototype.getSlideType=function(t){return t.__slideVideoInfo?"video":t.iframe?"iframe":"image"},t.prototype.touchMove=function(t,e,i){var n=e.pageX-t.pageX,s=e.pageY-t.pageY,r=!1;if(this.swipeDirection?r=!0:Math.abs(n)>15?(this.swipeDirection="horizontal",r=!0):Math.abs(s)>15&&(this.swipeDirection="vertical",r=!0),r){var o=this.getSlideItem(this.index);if("horizontal"===this.swipeDirection){null==i||i.preventDefault(),this.outer.addClass("lg-dragging"),this.setTranslate(o,n,0);var a=o.get().offsetWidth,l=15*a/100-Math.abs(10*n/100);this.setTranslate(this.outer.find(".lg-prev-slide").first(),-a+n-l,0),this.setTranslate(this.outer.find(".lg-next-slide").first(),a+n+l,0)}else if("vertical"===this.swipeDirection&&this.settings.swipeToClose){null==i||i.preventDefault(),this.$container.addClass("lg-dragging-vertical");var h=1-Math.abs(s)/window.innerHeight;this.$backdrop.css("opacity",h);var c=1-Math.abs(s)/(2*window.innerWidth);this.setTranslate(o,0,s,c,c),Math.abs(s)>100&&this.outer.addClass("lg-hide-items").removeClass("lg-components-open")}}},t.prototype.touchEnd=function(t,e,i){var n,s=this;"lg-slide"!==this.settings.mode&&this.outer.addClass("lg-slide"),setTimeout((function(){s.$container.removeClass("lg-dragging-vertical"),s.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");var r=!0;if("horizontal"===s.swipeDirection){n=t.pageX-e.pageX;var o=Math.abs(t.pageX-e.pageX);n<0&&o>s.settings.swipeThreshold?(s.goToNextSlide(!0),r=!1):n>0&&o>s.settings.swipeThreshold&&(s.goToPrevSlide(!0),r=!1)}else if("vertical"===s.swipeDirection){if(n=Math.abs(t.pageY-e.pageY),s.settings.closable&&s.settings.swipeToClose&&n>100)return void s.closeGallery();s.$backdrop.css("opacity",1)}if(s.outer.find(".lg-item").removeAttr("style"),r&&Math.abs(t.pageX-e.pageX)<5){var a=cd(i.target);s.isPosterElement(a)&&s.LGel.trigger(td)}s.swipeDirection=void 0})),setTimeout((function(){s.outer.hasClass("lg-dragging")||"lg-slide"===s.settings.mode||s.outer.removeClass("lg-slide")}),this.settings.speed+100)},t.prototype.enableSwipe=function(){var t=this,e={},i={},n=!1,s=!1;this.settings.enableSwipe&&(this.$inner.on("touchstart.lg",(function(i){t.dragOrSwipeEnabled=!0;var n=t.getSlideItem(t.index);!cd(i.target).hasClass("lg-item")&&!n.get().contains(i.target)||t.outer.hasClass("lg-zoomed")||t.lgBusy||1!==i.targetTouches.length||(s=!0,t.touchAction="swipe",t.manageSwipeClass(),e={pageX:i.targetTouches[0].pageX,pageY:i.targetTouches[0].pageY})})),this.$inner.on("touchmove.lg",(function(r){s&&"swipe"===t.touchAction&&1===r.targetTouches.length&&(i={pageX:r.targetTouches[0].pageX,pageY:r.targetTouches[0].pageY},t.touchMove(e,i,r),n=!0)})),this.$inner.on("touchend.lg",(function(r){if("swipe"===t.touchAction){if(n)n=!1,t.touchEnd(i,e,r);else if(s){var o=cd(r.target);t.isPosterElement(o)&&t.LGel.trigger(td)}t.touchAction=void 0,s=!1}})))},t.prototype.enableDrag=function(){var t=this,e={},i={},n=!1,s=!1;this.settings.enableDrag&&(this.outer.on("mousedown.lg",(function(i){t.dragOrSwipeEnabled=!0;var s=t.getSlideItem(t.index);(cd(i.target).hasClass("lg-item")||s.get().contains(i.target))&&(t.outer.hasClass("lg-zoomed")||t.lgBusy||(i.preventDefault(),t.lgBusy||(t.manageSwipeClass(),e={pageX:i.pageX,pageY:i.pageY},n=!0,t.outer.get().scrollLeft+=1,t.outer.get().scrollLeft-=1,t.outer.removeClass("lg-grab").addClass("lg-grabbing"),t.LGel.trigger(ed))))})),cd(window).on("mousemove.lg.global"+this.lgId,(function(r){n&&t.lgOpened&&(s=!0,i={pageX:r.pageX,pageY:r.pageY},t.touchMove(e,i),t.LGel.trigger(id))})),cd(window).on("mouseup.lg.global"+this.lgId,(function(r){if(t.lgOpened){var o=cd(r.target);s?(s=!1,t.touchEnd(i,e,r),t.LGel.trigger(nd)):t.isPosterElement(o)&&t.LGel.trigger(td),n&&(n=!1,t.outer.removeClass("lg-grabbing").addClass("lg-grab"))}})))},t.prototype.triggerPosterClick=function(){var t=this;this.$inner.on("click.lg",(function(e){!t.dragOrSwipeEnabled&&t.isPosterElement(cd(e.target))&&t.LGel.trigger(td)}))},t.prototype.manageSwipeClass=function(){var t=this.index+1,e=this.index-1;this.settings.loop&&this.galleryItems.length>2&&(0===this.index?e=this.galleryItems.length-1:this.index===this.galleryItems.length-1&&(t=0)),this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"),e>-1&&this.getSlideItem(e).addClass("lg-prev-slide"),this.getSlideItem(t).addClass("lg-next-slide")},t.prototype.goToNextSlide=function(t){var e=this,i=this.settings.loop;t&&this.galleryItems.length<3&&(i=!1),this.lgBusy||(this.index+1<this.galleryItems.length?(this.index++,this.LGel.trigger(sd,{index:this.index}),this.slide(this.index,!!t,!1,"next")):i?(this.index=0,this.LGel.trigger(sd,{index:this.index}),this.slide(this.index,!!t,!1,"next")):this.settings.slideEndAnimation&&!t&&(this.outer.addClass("lg-right-end"),setTimeout((function(){e.outer.removeClass("lg-right-end")}),400)))},t.prototype.goToPrevSlide=function(t){var e=this,i=this.settings.loop;t&&this.galleryItems.length<3&&(i=!1),this.lgBusy||(this.index>0?(this.index--,this.LGel.trigger(rd,{index:this.index,fromTouch:t}),this.slide(this.index,!!t,!1,"prev")):i?(this.index=this.galleryItems.length-1,this.LGel.trigger(rd,{index:this.index,fromTouch:t}),this.slide(this.index,!!t,!1,"prev")):this.settings.slideEndAnimation&&!t&&(this.outer.addClass("lg-left-end"),setTimeout((function(){e.outer.removeClass("lg-left-end")}),400)))},t.prototype.keyPress=function(){var t=this;cd(window).on("keydown.lg.global"+this.lgId,(function(e){t.lgOpened&&!0===t.settings.escKey&&27===e.keyCode&&(e.preventDefault(),t.settings.allowMediaOverlap&&t.outer.hasClass("lg-can-toggle")&&t.outer.hasClass("lg-components-open")?t.outer.removeClass("lg-components-open"):t.closeGallery()),t.lgOpened&&t.galleryItems.length>1&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}))},t.prototype.arrow=function(){var t=this;this.getElementById("lg-prev").on("click.lg",(function(){t.goToPrevSlide()})),this.getElementById("lg-next").on("click.lg",(function(){t.goToNextSlide()}))},t.prototype.arrowDisable=function(t){if(!this.settings.loop&&this.settings.hideControlOnEnd){var e=this.getElementById("lg-prev"),i=this.getElementById("lg-next");t+1===this.galleryItems.length?i.attr("disabled","disabled").addClass("disabled"):i.removeAttr("disabled").removeClass("disabled"),0===t?e.attr("disabled","disabled").addClass("disabled"):e.removeAttr("disabled").removeClass("disabled")}},t.prototype.setTranslate=function(t,e,i,n,s){void 0===n&&(n=1),void 0===s&&(s=1),t.css("transform","translate3d("+e+"px, "+i+"px, 0px) scale3d("+n+", "+s+", 1)")},t.prototype.mousewheel=function(){var t=this,e=0;this.outer.on("wheel.lg",(function(i){if(i.deltaY&&!(t.galleryItems.length<2)){i.preventDefault();var n=(new Date).getTime();n-e<1e3||(e=n,i.deltaY>0?t.goToNextSlide():i.deltaY<0&&t.goToPrevSlide())}}))},t.prototype.isSlideElement=function(t){return t.hasClass("lg-outer")||t.hasClass("lg-item")||t.hasClass("lg-img-wrap")},t.prototype.isPosterElement=function(t){var e=this.getSlideItem(this.index).find(".lg-video-play-button").get();return t.hasClass("lg-video-poster")||t.hasClass("lg-video-play-button")||e&&e.contains(t.get())},t.prototype.toggleMaximize=function(){var t=this;this.getElementById("lg-maximize").on("click.lg",(function(){t.$container.toggleClass("lg-inline"),t.refreshOnResize()}))},t.prototype.invalidateItems=function(){for(var t=0;t<this.items.length;t++){var e=cd(this.items[t]);e.off("click.lgcustom-item-"+e.attr("data-lg-id"))}},t.prototype.manageCloseGallery=function(){var t=this;if(this.settings.closable){var e=!1;this.getElementById("lg-close").on("click.lg",(function(){t.closeGallery()})),this.settings.closeOnTap&&(this.outer.on("mousedown.lg",(function(i){var n=cd(i.target);e=!!t.isSlideElement(n)})),this.outer.on("mousemove.lg",(function(){e=!1})),this.outer.on("mouseup.lg",(function(i){var n=cd(i.target);t.isSlideElement(n)&&e&&(t.outer.hasClass("lg-dragging")||t.closeGallery())})))}},t.prototype.closeGallery=function(t){var e=this;if(!this.lgOpened||!this.settings.closable&&!t)return 0;this.LGel.trigger(od),cd(window).scrollTop(this.prevScrollTop);var i,n=this.items[this.index];if(this.zoomFromOrigin&&n){var s=this.mediaContainerPosition,r=s.top,o=s.bottom,a=this.galleryItems[this.index],l=a.__slideVideoInfo,h=a.poster,c=gd(n,this.outer,r+o,l&&h&&this.settings.videoMaxSize);i=fd(n,this.outer,r,o,c)}this.zoomFromOrigin&&i?(this.outer.addClass("lg-closing lg-zoom-from-image"),this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration",this.settings.startAnimationDuration+"ms").css("transform",i)):(this.outer.addClass("lg-hide-items"),this.outer.removeClass("lg-zoom-from-image")),this.destroyModules(),this.lGalleryOn=!1,this.isDummyImageRemoved=!1,this.zoomFromOrigin=this.settings.zoomFromOrigin,clearTimeout(this.hideBarTimeout),this.hideBarTimeout=!1,cd("html").removeClass("lg-on"),this.outer.removeClass("lg-visible lg-components-open"),this.$backdrop.removeClass("in").css("opacity",0);var u=this.zoomFromOrigin&&i?Math.max(this.settings.startAnimationDuration,this.settings.backdropDuration):this.settings.backdropDuration;return this.$container.removeClass("lg-show-in"),setTimeout((function(){e.zoomFromOrigin&&i&&e.outer.removeClass("lg-zoom-from-image"),e.$container.removeClass("lg-show"),e.$backdrop.removeAttr("style").css("transition-duration",e.settings.backdropDuration+"ms"),e.outer.removeClass("lg-closing "+e.settings.startClass),e.getSlideItem(e.index).removeClass("lg-start-end-progress"),e.$inner.empty(),e.lgOpened&&e.LGel.trigger(ad,{instance:e}),e.outer.get()&&e.outer.get().blur(),e.lgOpened=!1}),u+100),u+100},t.prototype.initModules=function(){this.plugins.forEach((function(t){try{t.init()}catch(t){console.warn("lightGallery:- make sure lightGallery module is properly initiated")}}))},t.prototype.destroyModules=function(t){this.plugins.forEach((function(e){try{t?e.destroy():e.closeGallery&&e.closeGallery()}catch(t){console.warn("lightGallery:- make sure lightGallery module is properly destroyed")}}))},t.prototype.refresh=function(t){this.settings.dynamic||this.invalidateItems(),this.galleryItems=t||this.getItems(),this.updateControls(),this.openGalleryOnItemClick(),this.LGel.trigger(Ku)},t.prototype.updateControls=function(){this.addSlideVideoInfo(this.galleryItems),this.updateCounterTotal(),this.manageSingleSlideClassName()},t.prototype.destroy=function(){var t=this,e=this.closeGallery(!0);return setTimeout((function(){t.destroyModules(!0),t.settings.dynamic||t.invalidateItems(),cd(window).off(".lg.global"+t.lgId),t.LGel.off(".lg"),t.$container.remove()}),e),e},t}();var Sd,Ad=function(t,e){return new Cd(t,e)},xd=function(){return xd=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},xd.apply(this,arguments)},Dd={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",alignThumbnails:"middle",thumbWidth:100,thumbHeight:"80px",thumbMargin:5,appendThumbnailsTo:".lg-components",toggleThumb:!1,enableThumbDrag:!0,enableThumbSwipe:!0,thumbnailSwipeThreshold:10,loadYouTubeThumbnail:!0,youTubeThumbSize:1,thumbnailPluginStrings:{toggleThumbnails:"Toggle thumbnails"}},kd="lgContainerResize",Nd="lgUpdateSlides",_d="lgBeforeOpen",Ld="lgBeforeSlide",Od=function(){function t(t,e){return this.thumbOuterWidth=0,this.thumbTotalWidth=0,this.translateX=0,this.thumbClickable=!1,this.core=t,this.$LG=e,this}return t.prototype.init=function(){this.settings=xd(xd({},Dd),this.core.settings),this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.galleryItems.length*(this.settings.thumbWidth+this.settings.thumbMargin),this.translateX=0,this.setAnimateThumbStyles(),this.core.settings.allowMediaOverlap||(this.settings.toggleThumb=!1),this.settings.thumbnail&&(this.build(),this.settings.animateThumb?(this.settings.enableThumbDrag&&this.enableThumbDrag(),this.settings.enableThumbSwipe&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toggleThumbBar(),this.thumbKeyPress())},t.prototype.build=function(){var t=this;this.setThumbMarkup(),this.manageActiveClassOnSlideChange(),this.$lgThumb.first().on("click.lg touchend.lg",(function(e){var i=t.$LG(e.target);i.hasAttribute("data-lg-item-id")&&setTimeout((function(){if(t.thumbClickable&&!t.core.lgBusy){var e=parseInt(i.attr("data-lg-item-id"));t.core.slide(e,!1,!0,!1)}}),50)})),this.core.LGel.on(Ld+".thumb",(function(e){var i=e.detail.index;t.animateThumb(i)})),this.core.LGel.on(_d+".thumb",(function(){t.thumbOuterWidth=t.core.outer.get().offsetWidth})),this.core.LGel.on(Nd+".thumb",(function(){t.rebuildThumbnails()})),this.core.LGel.on(kd+".thumb",(function(){t.core.lgOpened&&setTimeout((function(){t.thumbOuterWidth=t.core.outer.get().offsetWidth,t.animateThumb(t.core.index),t.thumbOuterWidth=t.core.outer.get().offsetWidth}),50)}))},t.prototype.setThumbMarkup=function(){var t="lg-thumb-outer ";this.settings.alignThumbnails&&(t+="lg-thumb-align-"+this.settings.alignThumbnails);var e='<div class="'+t+'">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';this.core.outer.addClass("lg-has-thumb"),".lg-components"===this.settings.appendThumbnailsTo?this.core.$lgComponents.append(e):this.core.outer.append(e),this.$thumbOuter=this.core.outer.find(".lg-thumb-outer").first(),this.$lgThumb=this.core.outer.find(".lg-thumb").first(),this.settings.animateThumb&&this.core.outer.find(".lg-thumb").css("transition-duration",this.core.settings.speed+"ms").css("width",this.thumbTotalWidth+"px").css("position","relative"),this.setThumbItemHtml(this.core.galleryItems)},t.prototype.enableThumbDrag=function(){var t=this,e={cords:{startX:0,endX:0},isMoved:!1,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0},i=!1;this.$thumbOuter.addClass("lg-grab"),this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb",(function(n){t.thumbTotalWidth>t.thumbOuterWidth&&(n.preventDefault(),e.cords.startX=n.pageX,e.startTime=new Date,t.thumbClickable=!1,i=!0,t.core.outer.get().scrollLeft+=1,t.core.outer.get().scrollLeft-=1,t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))})),this.$LG(window).on("mousemove.lg.thumb.global"+this.core.lgId,(function(n){t.core.lgOpened&&i&&(e.cords.endX=n.pageX,e=t.onThumbTouchMove(e))})),this.$LG(window).on("mouseup.lg.thumb.global"+this.core.lgId,(function(){t.core.lgOpened&&(e.isMoved?e=t.onThumbTouchEnd(e):t.thumbClickable=!0,i&&(i=!1,t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")))}))},t.prototype.enableThumbSwipe=function(){var t=this,e={cords:{startX:0,endX:0},isMoved:!1,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0};this.$lgThumb.on("touchstart.lg",(function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e.cords.startX=i.targetTouches[0].pageX,t.thumbClickable=!1,e.startTime=new Date)})),this.$lgThumb.on("touchmove.lg",(function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e.cords.endX=i.targetTouches[0].pageX,e=t.onThumbTouchMove(e))})),this.$lgThumb.on("touchend.lg",(function(){e.isMoved?e=t.onThumbTouchEnd(e):t.thumbClickable=!0}))},t.prototype.rebuildThumbnails=function(){var t=this;this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),setTimeout((function(){t.thumbTotalWidth=t.core.galleryItems.length*(t.settings.thumbWidth+t.settings.thumbMargin),t.$lgThumb.css("width",t.thumbTotalWidth+"px"),t.$lgThumb.empty(),t.setThumbItemHtml(t.core.galleryItems),t.animateThumb(t.core.index)}),50),setTimeout((function(){t.$thumbOuter.removeClass("lg-rebuilding-thumbnails")}),200)},t.prototype.setTranslate=function(t){this.$lgThumb.css("transform","translate3d(-"+t+"px, 0px, 0px)")},t.prototype.getPossibleTransformX=function(t){return t>this.thumbTotalWidth-this.thumbOuterWidth&&(t=this.thumbTotalWidth-this.thumbOuterWidth),t<0&&(t=0),t},t.prototype.animateThumb=function(t){if(this.$lgThumb.css("transition-duration",this.core.settings.speed+"ms"),this.settings.animateThumb){var e=0;switch(this.settings.currentPagerPosition){case"left":e=0;break;case"middle":e=this.thumbOuterWidth/2-this.settings.thumbWidth/2;break;case"right":e=this.thumbOuterWidth-this.settings.thumbWidth}this.translateX=(this.settings.thumbWidth+this.settings.thumbMargin)*t-1-e,this.translateX>this.thumbTotalWidth-this.thumbOuterWidth&&(this.translateX=this.thumbTotalWidth-this.thumbOuterWidth),this.translateX<0&&(this.translateX=0),this.setTranslate(this.translateX)}},t.prototype.onThumbTouchMove=function(t){return t.newTranslateX=this.translateX,t.isMoved=!0,t.touchMoveTime=(new Date).valueOf(),t.newTranslateX-=t.cords.endX-t.cords.startX,t.newTranslateX=this.getPossibleTransformX(t.newTranslateX),this.setTranslate(t.newTranslateX),this.$thumbOuter.addClass("lg-dragging"),t},t.prototype.onThumbTouchEnd=function(t){t.isMoved=!1,t.endTime=new Date,this.$thumbOuter.removeClass("lg-dragging");var e=t.endTime.valueOf()-t.startTime.valueOf(),i=t.cords.endX-t.cords.startX,n=Math.abs(i)/e;return n>.15&&t.endTime.valueOf()-t.touchMoveTime<30?((n+=1)>2&&(n+=1),n+=n*(Math.abs(i)/this.thumbOuterWidth),this.$lgThumb.css("transition-duration",Math.min(n-1,2)+"settings"),i*=n,this.translateX=this.getPossibleTransformX(this.translateX-i),this.setTranslate(this.translateX)):this.translateX=t.newTranslateX,Math.abs(t.cords.endX-t.cords.startX)<this.settings.thumbnailSwipeThreshold&&(this.thumbClickable=!0),t},t.prototype.getThumbHtml=function(t,e){var i,n=this.core.galleryItems[e].__slideVideoInfo||{};return i=n.youtube&&this.settings.loadYouTubeThumbnail?"//img.youtube.com/vi/"+n.youtube[1]+"/"+this.settings.youTubeThumbSize+".jpg":t,'<div data-lg-item-id="'+e+'" class="lg-thumb-item '+(e===this.core.index?" active":"")+'" \n        style="width:'+this.settings.thumbWidth+"px; height: "+this.settings.thumbHeight+";\n            margin-right: "+this.settings.thumbMargin+'px;">\n            <img data-lg-item-id="'+e+'" src="'+i+'" />\n        </div>'},t.prototype.getThumbItemHtml=function(t){for(var e="",i=0;i<t.length;i++)e+=this.getThumbHtml(t[i].thumb,i);return e},t.prototype.setThumbItemHtml=function(t){var e=this.getThumbItemHtml(t);this.$lgThumb.html(e)},t.prototype.setAnimateThumbStyles=function(){this.settings.animateThumb&&this.core.outer.addClass("lg-animate-thumb")},t.prototype.manageActiveClassOnSlideChange=function(){var t=this;this.core.LGel.on(Ld+".thumb",(function(e){var i=t.core.outer.find(".lg-thumb-item"),n=e.detail.index;i.removeClass("active"),i.eq(n).addClass("active")}))},t.prototype.toggleThumbBar=function(){var t=this;this.settings.toggleThumb&&(this.core.outer.addClass("lg-can-toggle"),this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.thumbnailPluginStrings.toggleThumbnails+'" class="lg-toggle-thumb lg-icon"></button>'),this.core.outer.find(".lg-toggle-thumb").first().on("click.lg",(function(){t.core.outer.toggleClass("lg-components-open")})))},t.prototype.thumbKeyPress=function(){var t=this;this.$LG(window).on("keydown.lg.thumb.global"+this.core.lgId,(function(e){t.core.lgOpened&&t.settings.toggleThumb&&(38===e.keyCode?(e.preventDefault(),t.core.outer.addClass("lg-components-open")):40===e.keyCode&&(e.preventDefault(),t.core.outer.removeClass("lg-components-open")))}))},t.prototype.destroy=function(){this.settings.thumbnail&&(this.$LG(window).off(".lg.thumb.global"+this.core.lgId),this.core.LGel.off(".lg.thumb"),this.core.LGel.off(".thumb"),this.$thumbOuter.remove(),this.core.outer.removeClass("lg-has-thumb"))},t}(),Md=function(){return Md=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},Md.apply(this,arguments)},Rd={scale:1,zoom:!0,actualSize:!0,showZoomInOutIcons:!1,actualSizeIcons:{zoomIn:"lg-zoom-in",zoomOut:"lg-zoom-out"},enableZoomAfter:300,zoomPluginStrings:{zoomIn:"Zoom in",zoomOut:"Zoom out",viewActualSize:"View actual size"}},Pd="lgContainerResize",Vd="lgBeforeOpen",Fd="lgAfterOpen",Ud="lgSlideItemLoad",zd="lgAfterSlide",Bd="lgRotateLeft",$d="lgRotateRight",Gd="lgFlipHorizontal",qd="lgFlipVertical",jd=function(){function t(t,e){return this.core=t,this.$LG=e,this.settings=Md(Md({},Rd),this.core.settings),this}return t.prototype.buildTemplates=function(){var t=this.settings.showZoomInOutIcons?'<button id="'+this.core.getIdName("lg-zoom-in")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-in lg-icon"></button><button id="'+this.core.getIdName("lg-zoom-out")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-out lg-icon"></button>':"";this.settings.actualSize&&(t+='<button id="'+this.core.getIdName("lg-actual-size")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.viewActualSize+'" class="'+this.settings.actualSizeIcons.zoomIn+' lg-icon"></button>'),this.core.outer.addClass("lg-use-transition-for-zoom"),this.core.$toolbar.first().append(t)},t.prototype.enableZoom=function(t){var e=this,i=this.settings.enableZoomAfter+t.detail.delay;this.$LG("body").first().hasClass("lg-from-hash")&&t.detail.delay?i=0:this.$LG("body").first().removeClass("lg-from-hash"),this.zoomableTimeout=setTimeout((function(){e.isImageSlide()&&(e.core.getSlideItem(t.detail.index).addClass("lg-zoomable"),t.detail.index===e.core.index&&e.setZoomEssentials())}),i+30)},t.prototype.enableZoomOnSlideItemLoad=function(){this.core.LGel.on(Ud+".zoom",this.enableZoom.bind(this))},t.prototype.getModifier=function(t,e,i){var n=t;t=Math.abs(t);var s=this.getCurrentTransform(i);if(!s)return 1;var r=1;if("X"===e){var o=Math.sign(parseFloat(s[0]));0===t||180===t?r=1:90===t&&(r=-90===n&&1===o||90===n&&-1===o?-1:1),r*=o}else{var a=Math.sign(parseFloat(s[3]));if(0===t||180===t)r=1;else if(90===t){var l=parseFloat(s[1]),h=parseFloat(s[2]);r=Math.sign(l*h*n*a)}r*=a}return r},t.prototype.getImageSize=function(t,e,i){return 90===Math.abs(e)&&(i="x"===i?"y":"x"),t[{y:"offsetHeight",x:"offsetWidth"}[i]]},t.prototype.getDragCords=function(t,e){return 90===e?{x:t.pageY,y:t.pageX}:{x:t.pageX,y:t.pageY}},t.prototype.getSwipeCords=function(t,e){var i=t.targetTouches[0].pageX,n=t.targetTouches[0].pageY;return 90===e?{x:n,y:i}:{x:i,y:n}},t.prototype.getDragAllowedAxises=function(t,e){e=e||this.scale||1;var i=this.imageYSize*e>this.containerRect.height,n=this.imageXSize*e>this.containerRect.width;return 90===t?{allowX:i,allowY:n}:{allowX:n,allowY:i}},t.prototype.getCurrentTransform=function(t){if(t){var e=window.getComputedStyle(t,null),i=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("-moz-transform")||e.getPropertyValue("-ms-transform")||e.getPropertyValue("-o-transform")||e.getPropertyValue("transform")||"none";return"none"!==i?i.split("(")[1].split(")")[0].split(","):void 0}},t.prototype.getCurrentRotation=function(t){if(!t)return 0;var e=this.getCurrentTransform(t);return e?Math.round(Math.atan2(parseFloat(e[1]),parseFloat(e[0]))*(180/Math.PI)):0},t.prototype.setZoomEssentials=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-image").first(),e=this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get();this.rotateValue=this.getCurrentRotation(e),this.imageYSize=this.getImageSize(t.get(),this.rotateValue,"y"),this.imageXSize=this.getImageSize(t.get(),this.rotateValue,"x"),this.containerRect=this.core.outer.get().getBoundingClientRect(),this.modifierX=this.getModifier(this.rotateValue,"X",e),this.modifierY=this.getModifier(this.rotateValue,"Y",e)},t.prototype.zoomImage=function(t){var e,i,n=(this.containerRect.width-this.imageXSize)/2+this.containerRect.left,s=this.core.mediaContainerPosition,r=s.top,o=s.bottom,a=Math.abs(r-o)/2,l=(this.containerRect.height-this.imageYSize-a*this.modifierX)/2+this.scrollTop+this.containerRect.top;1===t&&(this.positionChanged=!1);var h=this.getDragAllowedAxises(Math.abs(this.rotateValue),t),c=h.allowY,u=h.allowX;this.positionChanged&&(e=this.left/(this.scale-1),i=this.top/(this.scale-1),this.pageX=Math.abs(e)+n,this.pageY=Math.abs(i)+l,this.positionChanged=!1);var d=this.getPossibleSwipeDragCords(this.rotateValue,t),g=(t-1)*(n-this.pageX),f=(t-1)*(l-this.pageY);u?this.isBeyondPossibleLeft(g,d.minX)?g=d.minX:this.isBeyondPossibleRight(g,d.maxX)&&(g=d.maxX):t>1&&(g<d.minX?g=d.minX:g>d.maxX&&(g=d.maxX)),c?this.isBeyondPossibleTop(f,d.minY)?f=d.minY:this.isBeyondPossibleBottom(f,d.maxY)&&(f=d.maxY):t>1&&(f<d.minY?f=d.minY:f>d.maxY&&(f=d.maxY)),this.setZoomStyles({x:g,y:f,scale:t})},t.prototype.setZoomStyles=function(t){var e=this.core.getSlideItem(this.core.index).find(".lg-image").first(),i=this.core.outer.find(".lg-current .lg-dummy-img").first(),n=e.parent();this.scale=t.scale,e.css("transform","scale3d("+t.scale+", "+t.scale+", 1)"),i.css("transform","scale3d("+t.scale+", "+t.scale+", 1)");var s="translate3d("+t.x+"px, "+t.y+"px, 0)";n.css("transform",s),this.left=t.x,this.top=t.y},t.prototype.setActualSize=function(t,e){var i=this;if(this.isImageSlide()&&!this.core.outer.hasClass("lg-first-slide-loading")){var n=this.getCurrentImageActualSizeScale();this.core.outer.hasClass("lg-zoomed")?this.scale=1:this.scale=this.getScale(n),this.setPageCords(e),this.beginZoom(this.scale),this.zoomImage(this.scale),setTimeout((function(){i.core.outer.removeClass("lg-grabbing").addClass("lg-grab")}),10)}},t.prototype.getNaturalWidth=function(t){var e=this.core.getSlideItem(t).find(".lg-image").first(),i=this.core.galleryItems[t].width;return i?parseFloat(i):e.get().naturalWidth},t.prototype.getActualSizeScale=function(t,e){return t>e?t/e||2:1},t.prototype.getCurrentImageActualSizeScale=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth,e=this.getNaturalWidth(this.core.index)||t;return this.getActualSizeScale(e,t)},t.prototype.getPageCords=function(t){var e={};if(t)e.x=t.pageX||t.targetTouches[0].pageX,e.y=t.pageY||t.targetTouches[0].pageY;else{var i=this.core.outer.get().getBoundingClientRect();e.x=i.width/2+i.left,e.y=i.height/2+this.scrollTop+i.top}return e},t.prototype.setPageCords=function(t){var e=this.getPageCords(t);this.pageX=e.x,this.pageY=e.y},t.prototype.beginZoom=function(t){(this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),t>1)?(this.core.outer.addClass("lg-zoomed"),this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)):this.resetZoom();return t>1},t.prototype.getScale=function(t){var e=this.getCurrentImageActualSizeScale();return t<1?t=1:t>e&&(t=e),t},t.prototype.init=function(){var t=this;if(this.settings.zoom){this.buildTemplates(),this.enableZoomOnSlideItemLoad();var e=null;this.core.outer.on("dblclick.lg",(function(e){t.$LG(e.target).hasClass("lg-image")&&t.setActualSize(t.core.index,e)})),this.core.outer.on("touchstart.lg",(function(i){var n=t.$LG(i.target);1===i.targetTouches.length&&n.hasClass("lg-image")&&(e?(clearTimeout(e),e=null,i.preventDefault(),t.setActualSize(t.core.index,i)):e=setTimeout((function(){e=null}),300))})),this.core.LGel.on(Pd+".zoom "+$d+".zoom "+Bd+".zoom "+Gd+".zoom "+qd+".zoom",(function(){t.core.lgOpened&&t.isImageSlide()&&(t.setPageCords(),t.setZoomEssentials(),t.zoomImage(t.scale))})),this.$LG(window).on("scroll.lg.zoom.global"+this.core.lgId,(function(){t.core.lgOpened&&(t.scrollTop=t.$LG(window).scrollTop())})),this.core.getElementById("lg-zoom-out").on("click.lg",(function(){t.core.outer.find(".lg-current .lg-image").get()&&(t.scale-=t.settings.scale,t.scale=t.getScale(t.scale),t.beginZoom(t.scale),t.zoomImage(t.scale))})),this.core.getElementById("lg-zoom-in").on("click.lg",(function(){t.zoomIn()})),this.core.getElementById("lg-actual-size").on("click.lg",(function(){t.setActualSize(t.core.index)})),this.core.LGel.on(Vd+".zoom",(function(){t.core.outer.find(".lg-item").removeClass("lg-zoomable")})),this.core.LGel.on(Fd+".zoom",(function(){t.scrollTop=t.$LG(window).scrollTop(),t.pageX=t.core.outer.width()/2,t.pageY=t.core.outer.height()/2+t.scrollTop,t.scale=1})),this.core.LGel.on(zd+".zoom",(function(e){var i=e.detail.prevIndex;t.scale=1,t.positionChanged=!1,t.resetZoom(i),t.isImageSlide()&&t.setZoomEssentials()})),this.zoomDrag(),this.pinchZoom(),this.zoomSwipe(),this.zoomableTimeout=!1,this.positionChanged=!1}},t.prototype.zoomIn=function(t){this.isImageSlide()&&(t?this.scale=t:this.scale+=this.settings.scale,this.scale=this.getScale(this.scale),this.beginZoom(this.scale),this.zoomImage(this.scale))},t.prototype.resetZoom=function(t){this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");var e=this.core.getElementById("lg-actual-size"),i=this.core.getSlideItem(void 0!==t?t:this.core.index);e.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn),i.find(".lg-img-wrap").first().removeAttr("style"),i.find(".lg-image").first().removeAttr("style"),this.scale=1,this.left=0,this.top=0,this.setPageCords()},t.prototype.getTouchDistance=function(t){return Math.sqrt((t.targetTouches[0].pageX-t.targetTouches[1].pageX)*(t.targetTouches[0].pageX-t.targetTouches[1].pageX)+(t.targetTouches[0].pageY-t.targetTouches[1].pageY)*(t.targetTouches[0].pageY-t.targetTouches[1].pageY))},t.prototype.pinchZoom=function(){var t=this,e=0,i=!1,n=1,s=this.core.getSlideItem(this.core.index);this.core.$inner.on("touchstart.lg",(function(i){s=t.core.getSlideItem(t.core.index),t.isImageSlide()&&(2!==i.targetTouches.length||t.core.outer.hasClass("lg-first-slide-loading")||!t.$LG(i.target).hasClass("lg-item")&&!s.get().contains(i.target)||(n=t.scale||1,t.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),t.core.touchAction="pinch",e=t.getTouchDistance(i)))})),this.core.$inner.on("touchmove.lg",(function(r){if(2===r.targetTouches.length&&"pinch"===t.core.touchAction&&(t.$LG(r.target).hasClass("lg-item")||s.get().contains(r.target))){r.preventDefault();var o=t.getTouchDistance(r),a=e-o;!i&&Math.abs(a)>5&&(i=!0),i&&(t.scale=Math.max(1,n+.008*-a),t.zoomImage(t.scale))}})),this.core.$inner.on("touchend.lg",(function(n){"pinch"===t.core.touchAction&&(t.$LG(n.target).hasClass("lg-item")||s.get().contains(n.target))&&(i=!1,e=0,t.scale<=1?t.resetZoom():(t.scale=t.getScale(t.scale),t.zoomImage(t.scale),t.core.outer.addClass("lg-zoomed")),t.core.touchAction=void 0)}))},t.prototype.touchendZoom=function(t,e,i,n,s,r){var o=e.x-t.x,a=e.y-t.y,l=Math.abs(o)/s+1,h=Math.abs(a)/s+1;l>2&&(l+=1),h>2&&(h+=1),o*=l,a*=h;var c=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),u={};u.x=this.left+o*this.modifierX,u.y=this.top+a*this.modifierY;var d=this.getPossibleSwipeDragCords(r);(Math.abs(o)>15||Math.abs(a)>15)&&(n&&(this.isBeyondPossibleTop(u.y,d.minY)?u.y=d.minY:this.isBeyondPossibleBottom(u.y,d.maxY)&&(u.y=d.maxY)),i&&(this.isBeyondPossibleLeft(u.x,d.minX)?u.x=d.minX:this.isBeyondPossibleRight(u.x,d.maxX)&&(u.x=d.maxX)),n?this.top=u.y:u.y=this.top,i?this.left=u.x:u.x=this.left,this.setZoomSwipeStyles(c,u),this.positionChanged=!0)},t.prototype.getZoomSwipeCords=function(t,e,i,n,s){var r={};if(n){if(r.y=this.top+(e.y-t.y)*this.modifierY,this.isBeyondPossibleTop(r.y,s.minY)){var o=s.minY-r.y;r.y=s.minY-o/6}else if(this.isBeyondPossibleBottom(r.y,s.maxY)){var a=r.y-s.maxY;r.y=s.maxY+a/6}}else r.y=this.top;if(i){if(r.x=this.left+(e.x-t.x)*this.modifierX,this.isBeyondPossibleLeft(r.x,s.minX)){var l=s.minX-r.x;r.x=s.minX-l/6}else if(this.isBeyondPossibleRight(r.x,s.maxX)){var h=r.x-s.maxX;r.x=s.maxX+h/6}}else r.x=this.left;return r},t.prototype.isBeyondPossibleLeft=function(t,e){return t>=e},t.prototype.isBeyondPossibleRight=function(t,e){return t<=e},t.prototype.isBeyondPossibleTop=function(t,e){return t>=e},t.prototype.isBeyondPossibleBottom=function(t,e){return t<=e},t.prototype.isImageSlide=function(){var t=this.core.galleryItems[this.core.index];return"image"===this.core.getSlideType(t)},t.prototype.getPossibleSwipeDragCords=function(t,e){var i=e||this.scale||1,n=Math.abs(i),s=this.core.mediaContainerPosition,r=s.top,o=s.bottom,a=Math.abs(r-o)/2,l=(this.imageYSize-this.containerRect.height)/2+a*this.modifierX,h=this.containerRect.height-this.imageYSize*n+l,c=(this.imageXSize-this.containerRect.width)/2,u=this.containerRect.width-this.imageXSize*n+c,d={minY:l,maxY:h,minX:c,maxX:u};return 90===Math.abs(t)&&(d={minY:c,maxY:u,minX:l,maxX:h}),d},t.prototype.setZoomSwipeStyles=function(t,e){t.css("transform","translate3d("+e.x+"px, "+e.y+"px, 0)")},t.prototype.zoomSwipe=function(){var t,e,i=this,n={},s={},r=!1,o=!1,a=!1,l=new Date,h=(new Date,this.core.getSlideItem(this.core.index));this.core.$inner.on("touchstart.lg",(function(s){if(i.isImageSlide()&&(h=i.core.getSlideItem(i.core.index),(i.$LG(s.target).hasClass("lg-item")||h.get().contains(s.target))&&1===s.targetTouches.length&&i.core.outer.hasClass("lg-zoomed"))){s.preventDefault(),l=new Date,i.core.touchAction="zoomSwipe",e=i.core.getSlideItem(i.core.index).find(".lg-img-wrap").first();var r=i.getDragAllowedAxises(Math.abs(i.rotateValue));a=r.allowY,((o=r.allowX)||a)&&(n=i.getSwipeCords(s,Math.abs(i.rotateValue))),t=i.getPossibleSwipeDragCords(i.rotateValue),i.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")}})),this.core.$inner.on("touchmove.lg",(function(l){if(1===l.targetTouches.length&&"zoomSwipe"===i.core.touchAction&&(i.$LG(l.target).hasClass("lg-item")||h.get().contains(l.target))){l.preventDefault(),i.core.touchAction="zoomSwipe",s=i.getSwipeCords(l,Math.abs(i.rotateValue));var c=i.getZoomSwipeCords(n,s,o,a,t);(Math.abs(s.x-n.x)>15||Math.abs(s.y-n.y)>15)&&(r=!0,i.setZoomSwipeStyles(e,c))}})),this.core.$inner.on("touchend.lg",(function(t){if("zoomSwipe"===i.core.touchAction&&(i.$LG(t.target).hasClass("lg-item")||h.get().contains(t.target))){if(i.core.touchAction=void 0,i.core.outer.removeClass("lg-zoom-dragging"),!r)return;r=!1;var e=(new Date).valueOf()-l.valueOf();i.touchendZoom(n,s,o,a,e,i.rotateValue)}}))},t.prototype.zoomDrag=function(){var t,e,i,n,s=this,r={},o={},a=!1,l=!1,h=!1,c=!1;this.core.outer.on("mousedown.lg.zoom",(function(e){if(s.isImageSlide()){var o=s.core.getSlideItem(s.core.index);if(s.$LG(e.target).hasClass("lg-item")||o.get().contains(e.target)){t=new Date,n=s.core.getSlideItem(s.core.index).find(".lg-img-wrap").first();var l=s.getDragAllowedAxises(Math.abs(s.rotateValue));c=l.allowY,h=l.allowX,s.core.outer.hasClass("lg-zoomed")&&s.$LG(e.target).hasClass("lg-object")&&(h||c)&&(e.preventDefault(),r=s.getDragCords(e,Math.abs(s.rotateValue)),i=s.getPossibleSwipeDragCords(s.rotateValue),a=!0,s.core.outer.get().scrollLeft+=1,s.core.outer.get().scrollLeft-=1,s.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))}}})),this.$LG(window).on("mousemove.lg.zoom.global"+this.core.lgId,(function(t){if(a){l=!0,o=s.getDragCords(t,Math.abs(s.rotateValue));var e=s.getZoomSwipeCords(r,o,h,c,i);s.setZoomSwipeStyles(n,e)}})),this.$LG(window).on("mouseup.lg.zoom.global"+this.core.lgId,(function(i){if(a){if(e=new Date,a=!1,s.core.outer.removeClass("lg-zoom-dragging"),l&&(r.x!==o.x||r.y!==o.y)){o=s.getDragCords(i,Math.abs(s.rotateValue));var n=e.valueOf()-t.valueOf();s.touchendZoom(r,o,h,c,n,s.rotateValue)}l=!1}s.core.outer.removeClass("lg-grabbing").addClass("lg-grab")}))},t.prototype.closeGallery=function(){this.resetZoom()},t.prototype.destroy=function(){this.$LG(window).off(".lg.zoom.global"+this.core.lgId),this.core.LGel.off(".lg.zoom"),this.core.LGel.off(".zoom"),clearTimeout(this.zoomableTimeout),this.zoomableTimeout=!1},t}();
/*!
 * lightgallery | 2.4.0 | January 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */Sd=new URL(s("kyEFX").resolve("40jTF"),import.meta.url).toString();let Hd=null,Kd=null,Xd=null;function Wd(){Hd=function(t,e={}){"object"!=typeof e&&(e={name:e});const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),n=i.name;if("string"!=typeof n||!n)throw L.create("bad-app-name",{appName:String(n)});const s=x.get(n);if(s){if(u(t,s.options)&&u(i,s.config))return s;throw L.create("duplicate-app",{appName:n})}const r=new p(n);for(const t of D.values())r.addComponent(t);const o=new O(t,i,r);return x.set(n,o),o}({apiKey:"AIzaSyDPdyCQAzKA_OrM8qS7Oz1372NKn1R6oaI",authDomain:"suckzoo-log.firebaseapp.com",projectId:"suckzoo-log"}),Kd=Wc(Hd)}function Yd(t){return String(t).replace(/[&<>"'`=\/]/g,(t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"}[t])))}function Qd(t,e,i){let n="Invalid date";n=i.timestamp instanceof Date?new Date(i.timestamp).toLocaleString("ko-KR"):new Date(1e3*i.timestamp.seconds).toLocaleString("ko-KR"),t.insertAdjacentHTML(e,`<div class="comment-entry">\n            <div class="row">\n                <span class="name">${Yd(i.username)}</span>\n                <span class="date">${n}</span>\n            </div>\n            <p class="message">\n                ${Yd(i.comment)}\n            </p>\n        </div>`)}async function Zd(){const t=Hc(Kd,"visitor-comments");let e;e=Xd?ku(t,_u("timestamp","desc"),function(...t){return new Mu("startAfter",t,!1)}(Xd),Ou(5)):ku(t,_u("timestamp","desc"),Ou(5));const i=document.getElementById("comments"),n=await function(t){t=Uc(t,qc);const e=Uc(t.firestore,Xc),i=Yc(e),n=new Uu(e);return xu(t._query),Oc(i,t._query).then((i=>new Su(e,n,t,i)))}(e);if(n.docs.length)Xd=n.docs[n.docs.length-1];else{document.getElementById("pull-comments").innerHTML="마지막 댓글입니다."}n.docs.map((t=>t.data())).forEach((t=>Qd(i,"beforeend",t)))}function Jd(){document.getElementById("btn-kakao-talk").addEventListener("click",(()=>{Kakao.Link.sendDefault({objectType:"location",address:"서울 구로구 경인로 624 신도림라마다호텔 5층 세인트그레이스홀",addressTitle:"신도림라마다호텔",content:{title:"석주, 유라 결혼식에 초대합니다!",description:"5/22(일) AM 11:30분 신도림라마다호텔",imageUrl:Sd,link:{mobileWebUrl:"https://suckzoo.github.io/wedding-invitation",webUrl:"https://suckzoo.github.io/wedding-invitation"}},buttons:[{title:"웹으로 보기",link:{mobileWebUrl:"https://suckzoo.github.io/wedding-invitation",webUrl:"https://suckzoo.github.io/wedding-invitation"}}]})})),document.getElementById("push-comment").addEventListener("click",(()=>{!async function(){const t=document.getElementById("username").value,e=document.getElementById("comment").value;if(t.length<1||t.length>10)return void alert("사용자 이름은 1~10자로 입력해주세요.");if(t.replace(/\n/g," "),e.length<1||e.length>100)return void alert("댓글은 1~100자로 입력해주세요.");e.replace(/\n/g," ");const i={username:t,comment:e,timestamp:new Date};await zu(Hc(Kd,"visitor-comments"),i),alert("댓글이 작성되었습니다."),Qd(document.getElementById("comments"),"afterbegin",i)}()})),document.getElementById("pull-comments").addEventListener("click",(()=>{Zd()}))}function tg(t){const e=t.getFullYear(),i=t.getMonth(),n=t.getDate(),s=new Date(e,i,1),r=new Date(e,i+1,0).getDate(),o=document.getElementById("calendar-contents"),a=document.createElement("time");a.setAttribute("datetime",`${e}-${i+1}`),o.appendChild(a);let l=document.createElement("time"),h=function(t){const e=new Date(t);e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const i=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-i.getTime())/864e5-3+(i.getDay()+6)%7)/7)}(s);l.setAttribute("datetime",`${e}-W${h}`),a.appendChild(l),l.className="row";for(let t=0;t<s.getDay();t++){const t=document.createElement("time");t.innerHTML="&nbsp;",l.appendChild(t)}let c=s.getDay(),u=1;for(;u<=r;){const t=document.createElement("time");if(t.setAttribute("datetime",`${e}-${i+1}-${u}`),t.innerHTML=u.toString(),u===n&&(t.className="active"),l.appendChild(t),u++,c++,u>r)for(let t=0;t<7-c;t++){const t=document.createElement("time");t.innerHTML="&nbsp;",l.appendChild(t)}7===c&&u<=r&&(h++,l=document.createElement("time"),l.setAttribute("datetime",`${e}-W${h}`),a.appendChild(l),l.className="row",c=0)}}function eg(){const t=document.querySelectorAll("section");for(let e=0;e<t.length;e++){const i=window.innerHeight;t[e].getBoundingClientRect().top<i&&t[e].classList.add("fade-in")}}async function ig(t){await navigator.clipboard.writeText({groom:"80170104228385",groomMom:"74380101130457",bride:"110459794448",brideMom:"110459794448"}[t]),alert("계좌번호가 복사되었습니다.")}!function(){eg(),window.addEventListener("scroll",eg),window.copyBankAccount=ig;const t=new Date("2022-05-22T00:00:00+0900");!function(t){const e=document.getElementById("dday"),i=t.getTime()-(new Date).getTime(),n=Math.floor(i/864e5)+1;e.innerHTML=n>0?`D-${n}`:`D+${n}`}(t),tg(t),Ad(document.getElementById("lightgallery"),{plugins:[jd,Od],speed:500}),Kakao.init("2fa62d1fda5b89bbb99e8dc88e13c50d"),console.log(`kakao initialized: ${Kakao.isInitialized()}`),(new kakao.maps.services.Geocoder).addressSearch("서울 구로구 경인로 624",(function(t,e){if(e===kakao.maps.services.Status.OK){const e=new kakao.maps.LatLng(t[0].y,t[0].x),i=document.getElementById("map"),n={center:e,level:4,marker:{position:e,text:"신도림라마다호텔"}};new kakao.maps.StaticMap(i,n)}})),Wd(),Jd(),Zd()}();
//# sourceMappingURL=index.e1ed8319.js.map
