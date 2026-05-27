"use strict";var y=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var b=y(function(G,m){
var q=5;function P(i,u,t,o,f){var r,n,s,e,v,c;if(r=t.data,n=t.accessors[0],s=t.accessors[1],e=f,o===0)return s(r,e,n(r,e)*i*u),t;if(o===1){if(v=i%q,v>0)for(c=0;c<v;c++)s(r,e,n(r,e)*u),e+=o;if(i<q)return t;for(c=v;c<i;c+=q)s(r,e,n(r,e)*u),s(r,e+1,n(r,e+1)*u),s(r,e+2,n(r,e+2)*u),s(r,e+3,n(r,e+3)*u),s(r,e+4,n(r,e+4)*u),e+=q;return t}for(c=0;c<i;c++)s(r,e,n(r,e)*u),e+=o;return t}m.exports=P
});var g=y(function(H,M){
var R=require('@stdlib/array-base-arraylike2object/dist'),w=b(),a=5;function z(i,u,t,o,f){var r,n,s,e;if(i<=0||u===1)return t;if(s=R(t),s.accessorProtocol)return w(i,u,s,o,f),t;if(r=f,o===0)return t[r]*=u*i,t;if(o===1){if(n=i%a,n>0)for(e=0;e<n;e++)t[r]*=u,r+=o;if(i<a)return t;for(e=n;e<i;e+=a)t[r]*=u,t[r+1]*=u,t[r+2]*=u,t[r+3]*=u,t[r+4]*=u,r+=a;return t}for(e=0;e<i;e++)t[r]*=u,r+=o;return t}M.exports=z
});var k=y(function(I,j){
var A=require('@stdlib/strided-base-stride2offset/dist'),B=g();function C(i,u,t,o){return B(i,u,t,o,A(i,o))}j.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=k(),E=g();D(O,"ndarray",E);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
