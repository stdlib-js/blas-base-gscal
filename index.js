// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;function l(e,r,t,o){var n,i;if(e<=0||o<=0||1===r)return t;if(1===o){if((n=e%5)>0)for(i=0;i<n;i+=1)t[i]*=r;if(e<5)return t;for(i=n;i<e;i+=5)t[i]*=r,t[i+1]*=r,t[i+2]*=r,t[i+3]*=r,t[i+4]*=r;return t}for(e*=o,i=0;i<e;i+=o)t[i]*=r;return t}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},e(l,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n){var i,a,u;if(e<=0||1===r)return t;if(i=n,1===o){if((a=e%5)>0)for(u=0;u<a;u++)t[i]*=r,i+=o;if(e<5)return t;for(u=a;u<e;u+=5)t[u]*=r,t[u+1]*=r,t[u+2]*=r,t[u+3]*=r,t[u+4]*=r;return t}for(u=0;u<e;u++)t[i]*=r,i+=o;return t}}),l},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gscal=r();
//# sourceMappingURL=index.js.map
