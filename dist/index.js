"use strict";var s=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var q=s(function(w,m){
var v=5;function O(n,e,r,i){var t,f;if(n<=0||i<=0||e===1)return r;if(i===1){if(t=n%v,t>0)for(f=0;f<t;f+=1)r[f]*=e;if(n<v)return r;for(f=t;f<n;f+=v)r[f]*=e,r[f+1]*=e,r[f+2]*=e,r[f+3]*=e,r[f+4]*=e;return r}for(n*=i,f=0;f<n;f+=i)r[f]*=e;return r}m.exports=O
});var g=s(function(z,y){
var c=5;function R(n,e,r,i,t){var f,o,u;if(n<=0||e===1)return r;if(f=t,i===1){if(o=n%c,o>0)for(u=0;u<o;u++)r[f]*=e,f+=i;if(n<c)return r;for(u=o;u<n;u+=c)r[u]*=e,r[u+1]*=e,r[u+2]*=e,r[u+3]*=e,r[u+4]*=e;return r}for(u=0;u<n;u++)r[f]*=e,f+=i;return r}y.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=q(),j=g();b(M,"ndarray",j);module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
