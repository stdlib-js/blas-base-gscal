// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,f){var t,i;if(r<=0||f<=0||1===e)return n;if(1===f){if((t=r%5)>0)for(i=0;i<t;i+=1)n[i]*=e;if(r<5)return n;for(i=t;i<r;i+=5)n[i]*=e,n[i+1]*=e,n[i+2]*=e,n[i+3]*=e,n[i+4]*=e;return n}for(r*=f,i=0;i<r;i+=f)n[i]*=e;return n},n=function(r,e,n,f,t){var i,o,u;if(r<=0||1===e)return n;if(i=t,1===f){if((o=r%5)>0)for(u=0;u<o;u++)n[i]*=e,i+=f;if(r<5)return n;for(u=o;u<r;u+=5)n[u]*=e,n[u+1]*=e,n[u+2]*=e,n[u+3]*=e,n[u+4]*=e;return n}for(u=0;u<r;u++)n[i]*=e,i+=f;return n};r(e,"ndarray",n);var f=e;export{f as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
