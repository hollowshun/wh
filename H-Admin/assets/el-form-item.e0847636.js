import{s as Ae,t as Lt,v as tt,x as rt,y as Nt,S as Ie,z as nt,A as it,B as ge,C as at,D as Rt,F as ve,H as st,r as C,I as T,d as H,J as ot,K as qe,L as ne,M as Bt,N as ft,a as ut,O as lt,P as je,i as me,f as dt,Q as ee,R as G,T as E,U as ct,V as pt,W as ie,X as ye,Y as Ct,o as gt,Z as vt,$ as Wt,a0 as Vt,h as ae,a1 as Dt,a2 as mt,a3 as Ut,a4 as zt,a5 as Kt,a6 as Me,a7 as de,w as ce,a8 as Gt,a9 as Yt,aa as Le,k as Jt,ab as Ne,ac as Re,g as Be,ad as Zt,ae as Ht,af as Qt}from"./index.4e28b913.js";import{i as yt,a as Xt,b as kt,o as er,k as ht,g as bt,s as tr,c as rr,d as nr,U as Ce,e as Ee,n as se,f as wt,h as ir,S as ar,j as sr}from"./el-input.8ee768f7.js";var We=Object.create,or=function(){function r(){}return function(e){if(!Ae(e))return{};if(We)return We(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();const fr=or;function ur(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function lr(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}function oe(r,e,t,n){var i=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var o=e[s],u=n?n(t[o],r[o],o,t,r):void 0;u===void 0&&(u=r[o]),i?Lt(t,o,u):tt(t,o,u)}return t}function dr(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var cr=Object.prototype,pr=cr.hasOwnProperty;function gr(r){if(!Ae(r))return dr(r);var e=yt(r),t=[];for(var n in r)n=="constructor"&&(e||!pr.call(r,n))||t.push(n);return t}function Te(r){return Xt(r)?kt(r,!0):gr(r)}var vr=er(Object.getPrototypeOf,Object);const Ft=vr;function he(){if(!arguments.length)return[];var r=arguments[0];return rt(r)?r:[r]}function mr(r,e){return r&&oe(e,ht(e),r)}function yr(r,e){return r&&oe(e,Te(e),r)}var xt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ve=xt&&typeof module=="object"&&module&&!module.nodeType&&module,hr=Ve&&Ve.exports===xt,De=hr?Nt.Buffer:void 0,Ue=De?De.allocUnsafe:void 0;function br(r,e){if(e)return r.slice();var t=r.length,n=Ue?Ue(t):new r.constructor(t);return r.copy(n),n}function wr(r,e){return oe(r,bt(r),e)}var Fr=Object.getOwnPropertySymbols,xr=Fr?function(r){for(var e=[];r;)rr(e,bt(r)),r=Ft(r);return e}:tr;const Ot=xr;function Or(r,e){return oe(r,Ot(r),e)}function Ar(r){return nr(r,Te,Ot)}var qr=Object.prototype,jr=qr.hasOwnProperty;function Er(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&jr.call(r,"index")&&(t.index=r.index,t.input=r.input),t}function Se(r){var e=new r.constructor(r.byteLength);return new Ce(e).set(new Ce(r)),e}function Tr(r,e){var t=e?Se(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var Sr=/\w*$/;function _r(r){var e=new r.constructor(r.source,Sr.exec(r));return e.lastIndex=r.lastIndex,e}var ze=Ie?Ie.prototype:void 0,Ke=ze?ze.valueOf:void 0;function Pr(r){return Ke?Object(Ke.call(r)):{}}function $r(r,e){var t=e?Se(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var Ir="[object Boolean]",Mr="[object Date]",Lr="[object Map]",Nr="[object Number]",Rr="[object RegExp]",Br="[object Set]",Cr="[object String]",Wr="[object Symbol]",Vr="[object ArrayBuffer]",Dr="[object DataView]",Ur="[object Float32Array]",zr="[object Float64Array]",Kr="[object Int8Array]",Gr="[object Int16Array]",Yr="[object Int32Array]",Jr="[object Uint8Array]",Zr="[object Uint8ClampedArray]",Hr="[object Uint16Array]",Qr="[object Uint32Array]";function Xr(r,e,t){var n=r.constructor;switch(e){case Vr:return Se(r);case Ir:case Mr:return new n(+r);case Dr:return Tr(r,t);case Ur:case zr:case Kr:case Gr:case Yr:case Jr:case Zr:case Hr:case Qr:return $r(r,t);case Lr:return new n;case Nr:case Cr:return new n(r);case Rr:return _r(r);case Br:return new n;case Wr:return Pr(r)}}function kr(r){return typeof r.constructor=="function"&&!yt(r)?fr(Ft(r)):{}}var en="[object Map]";function tn(r){return nt(r)&&Ee(r)==en}var Ge=se&&se.isMap,rn=Ge?wt(Ge):tn;const nn=rn;var an="[object Set]";function sn(r){return nt(r)&&Ee(r)==an}var Ye=se&&se.isSet,on=Ye?wt(Ye):sn;const fn=on;var un=1,ln=2,dn=4,At="[object Arguments]",cn="[object Array]",pn="[object Boolean]",gn="[object Date]",vn="[object Error]",qt="[object Function]",mn="[object GeneratorFunction]",yn="[object Map]",hn="[object Number]",jt="[object Object]",bn="[object RegExp]",wn="[object Set]",Fn="[object String]",xn="[object Symbol]",On="[object WeakMap]",An="[object ArrayBuffer]",qn="[object DataView]",jn="[object Float32Array]",En="[object Float64Array]",Tn="[object Int8Array]",Sn="[object Int16Array]",_n="[object Int32Array]",Pn="[object Uint8Array]",$n="[object Uint8ClampedArray]",In="[object Uint16Array]",Mn="[object Uint32Array]",x={};x[At]=x[cn]=x[An]=x[qn]=x[pn]=x[gn]=x[jn]=x[En]=x[Tn]=x[Sn]=x[_n]=x[yn]=x[hn]=x[jt]=x[bn]=x[wn]=x[Fn]=x[xn]=x[Pn]=x[$n]=x[In]=x[Mn]=!0;x[vn]=x[qt]=x[On]=!1;function te(r,e,t,n,i,s){var a,o=e&un,u=e&ln,w=e&dn;if(t&&(a=i?t(r,n,i,s):t(r)),a!==void 0)return a;if(!Ae(r))return r;var c=rt(r);if(c){if(a=Er(r),!o)return ur(r,a)}else{var g=Ee(r),b=g==qt||g==mn;if(ir(r))return br(r,o);if(g==jt||g==At||b&&!i){if(a=u||b?{}:kr(r),!o)return u?Or(r,yr(a,r)):wr(r,mr(a,r))}else{if(!x[g])return i?r:{};a=Xr(r,g,o)}}s||(s=new ar);var q=s.get(r);if(q)return q;s.set(r,a),fn(r)?r.forEach(function(v){a.add(te(v,e,t,v,r,s))}):nn(r)&&r.forEach(function(v,f){a.set(f,te(v,e,t,f,r,s))});var j=w?u?Ar:sr:u?Te:ht,d=c?void 0:j(r);return lr(d||r,function(v,f){d&&(f=v,v=r[f]),tt(a,f,te(v,e,t,f,r,s))}),a}var Ln=4;function Je(r){return te(r,Ln)}const Nn=it({model:Object,rules:{type:ge(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:at},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),Rn={validate:(r,e,t)=>(Rt(r)||ve(r))&&st(e)&&ve(t)};function Bn(){const r=C([]),e=T(()=>{if(!r.value.length)return"0";const s=Math.max(...r.value);return s?`${s}px`:""});function t(s){const a=r.value.indexOf(s);return a===-1&&e.value,a}function n(s,a){if(s&&a){const o=t(a);r.value.splice(o,1,s)}else s&&r.value.push(s)}function i(s){const a=t(s);a>-1&&r.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const X=(r,e)=>{const t=he(e);return t.length>0?r.filter(n=>n.prop&&t.includes(n.prop)):r},Cn="ElForm",Wn=H({name:Cn}),Vn=H({...Wn,props:Nn,emits:Rn,setup(r,{expose:e,emit:t}){const n=r,i=[],s=ot(),a=qe("form"),o=T(()=>{const{labelPosition:m,inline:l}=n;return[a.b(),a.m(s.value||"default"),{[a.m(`label-${m}`)]:m,[a.m("inline")]:l}]}),u=m=>{i.push(m)},w=m=>{m.prop&&i.splice(i.indexOf(m),1)},c=(m=[])=>{!n.model||X(i,m).forEach(l=>l.resetField())},g=(m=[])=>{X(i,m).forEach(l=>l.clearValidate())},b=T(()=>!!n.model),q=m=>{if(i.length===0)return[];const l=X(i,m);return l.length?l:[]},j=async m=>v(void 0,m),d=async(m=[])=>{if(!b.value)return!1;const l=q(m);if(l.length===0)return!0;let h={};for(const A of l)try{await A.validate("")}catch(O){h={...h,...O}}return Object.keys(h).length===0?!0:Promise.reject(h)},v=async(m=[],l)=>{const h=!pt(l);try{const A=await d(m);return A===!0&&(l==null||l(A)),A}catch(A){const O=A;return n.scrollToError&&f(Object.keys(O)[0]),l==null||l(!1,O),h&&Promise.reject(O)}},f=m=>{var l;const h=X(i,m)[0];h&&((l=h.$el)==null||l.scrollIntoView())};return ne(()=>n.rules,()=>{n.validateOnRuleChange&&j().catch(m=>Bt())},{deep:!0}),ft(je,ut({...lt(n),emit:t,resetFields:c,clearValidate:g,validateField:v,addField:u,removeField:w,...Bn()})),e({validate:j,validateField:v,resetFields:c,clearValidate:g,scrollToField:f}),(m,l)=>(me(),dt("form",{class:G(E(o))},[ee(m.$slots,"default")],2))}});var Dn=ct(Vn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function W(){return W=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},W.apply(this,arguments)}function Un(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Z(r,e)}function be(r){return be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},be(r)}function Z(r,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Z(r,e)}function zn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function re(r,e,t){return zn()?re=Reflect.construct.bind():re=function(i,s,a){var o=[null];o.push.apply(o,s);var u=Function.bind.apply(i,o),w=new u;return a&&Z(w,a.prototype),w},re.apply(null,arguments)}function Kn(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function we(r){var e=typeof Map=="function"?new Map:void 0;return we=function(n){if(n===null||!Kn(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return re(n,arguments,be(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Z(i,n)},we(r)}var Gn=/%[sdj%]/g,Yn=function(){};typeof process<"u"&&process.env;function Fe(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function I(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,s=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var a=r.replace(Gn,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return a}return r}function Jn(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function S(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||Jn(e)&&typeof r=="string"&&!r)}function Zn(r,e,t){var n=[],i=0,s=r.length;function a(o){n.push.apply(n,o||[]),i++,i===s&&t(n)}r.forEach(function(o){e(o,a)})}function Ze(r,e,t){var n=0,i=r.length;function s(a){if(a&&a.length){t(a);return}var o=n;n=n+1,o<i?e(r[o],s):t([])}s([])}function Hn(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var He=function(r){Un(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(we(Error));function Qn(r,e,t,n,i){if(e.first){var s=new Promise(function(b,q){var j=function(f){return n(f),f.length?q(new He(f,Fe(f))):b(i)},d=Hn(r);Ze(d,t,j)});return s.catch(function(b){return b}),s}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],o=Object.keys(r),u=o.length,w=0,c=[],g=new Promise(function(b,q){var j=function(v){if(c.push.apply(c,v),w++,w===u)return n(c),c.length?q(new He(c,Fe(c))):b(i)};o.length||(n(c),b(i)),o.forEach(function(d){var v=r[d];a.indexOf(d)!==-1?Ze(v,t,j):Zn(v,t,j)})});return g.catch(function(b){return b}),g}function Xn(r){return!!(r&&r.message!==void 0)}function kn(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Qe(r,e){return function(t){var n;return r.fullFields?n=kn(e,r.fullFields):n=e[t.field||r.fullField],Xn(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function Xe(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=W({},r[t],n):r[t]=n}}return r}var Et=function(e,t,n,i,s,a){e.required&&(!n.hasOwnProperty(e.field)||S(t,a||e.type))&&i.push(I(s.messages.required,e.fullField))},ei=function(e,t,n,i,s){(/^\s+$/.test(t)||t==="")&&i.push(I(s.messages.whitespace,e.fullField))},k,ti=function(){if(k)return k;var r="[a-fA-F\\d:]",e=function(h){return h&&h.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),u=function(h){return h&&h.exact?s:new RegExp("(?:"+e(h)+t+e(h)+")|(?:"+e(h)+i+e(h)+")","g")};u.v4=function(l){return l&&l.exact?a:new RegExp(""+e(l)+t+e(l),"g")},u.v6=function(l){return l&&l.exact?o:new RegExp(""+e(l)+i+e(l),"g")};var w="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",g=u.v4().source,b=u.v6().source,q="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",j="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",v="(?::\\d{2,5})?",f='(?:[/?#][^\\s"]*)?',m="(?:"+w+"|www\\.)"+c+"(?:localhost|"+g+"|"+b+"|"+q+j+d+")"+v+f;return k=new RegExp("(?:^"+m+"$)","i"),k},ke={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Y={integer:function(e){return Y.number(e)&&parseInt(e,10)===e},float:function(e){return Y.number(e)&&!Y.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!Y.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(ke.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(ti())},hex:function(e){return typeof e=="string"&&!!e.match(ke.hex)}},ri=function(e,t,n,i,s){if(e.required&&t===void 0){Et(e,t,n,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?Y[o](t)||i.push(I(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push(I(s.messages.types[o],e.fullField,e.type))},ni=function(e,t,n,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",u=typeof e.max=="number",w=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=t,g=null,b=typeof t=="number",q=typeof t=="string",j=Array.isArray(t);if(b?g="number":q?g="string":j&&(g="array"),!g)return!1;j&&(c=t.length),q&&(c=t.replace(w,"_").length),a?c!==e.len&&i.push(I(s.messages[g].len,e.fullField,e.len)):o&&!u&&c<e.min?i.push(I(s.messages[g].min,e.fullField,e.min)):u&&!o&&c>e.max?i.push(I(s.messages[g].max,e.fullField,e.max)):o&&u&&(c<e.min||c>e.max)&&i.push(I(s.messages[g].range,e.fullField,e.min,e.max))},z="enum",ii=function(e,t,n,i,s){e[z]=Array.isArray(e[z])?e[z]:[],e[z].indexOf(t)===-1&&i.push(I(s.messages[z],e.fullField,e[z].join(", ")))},ai=function(e,t,n,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(I(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(I(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},y={required:Et,whitespace:ei,type:ri,range:ni,enum:ii,pattern:ai},si=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();y.required(e,t,i,a,s,"string"),S(t,"string")||(y.type(e,t,i,a,s),y.range(e,t,i,a,s),y.pattern(e,t,i,a,s),e.whitespace===!0&&y.whitespace(e,t,i,a,s))}n(a)},oi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&y.type(e,t,i,a,s)}n(a)},fi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&(y.type(e,t,i,a,s),y.range(e,t,i,a,s))}n(a)},ui=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&y.type(e,t,i,a,s)}n(a)},li=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),S(t)||y.type(e,t,i,a,s)}n(a)},di=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&(y.type(e,t,i,a,s),y.range(e,t,i,a,s))}n(a)},ci=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&(y.type(e,t,i,a,s),y.range(e,t,i,a,s))}n(a)},pi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();y.required(e,t,i,a,s,"array"),t!=null&&(y.type(e,t,i,a,s),y.range(e,t,i,a,s))}n(a)},gi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&y.type(e,t,i,a,s)}n(a)},vi="enum",mi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&y[vi](e,t,i,a,s)}n(a)},yi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();y.required(e,t,i,a,s),S(t,"string")||y.pattern(e,t,i,a,s)}n(a)},hi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"date")&&!e.required)return n();if(y.required(e,t,i,a,s),!S(t,"date")){var u;t instanceof Date?u=t:u=new Date(t),y.type(e,u,i,a,s),u&&y.range(e,u.getTime(),i,a,s)}}n(a)},bi=function(e,t,n,i,s){var a=[],o=Array.isArray(t)?"array":typeof t;y.required(e,t,i,a,s,o),n(a)},pe=function(e,t,n,i,s){var a=e.type,o=[],u=e.required||!e.required&&i.hasOwnProperty(e.field);if(u){if(S(t,a)&&!e.required)return n();y.required(e,t,i,o,s,a),S(t,a)||y.type(e,t,i,o,s)}n(o)},wi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s)}n(a)},J={string:si,method:oi,number:fi,boolean:ui,regexp:li,integer:di,float:ci,array:pi,object:gi,enum:mi,pattern:yi,date:hi,url:pe,hex:pe,email:pe,required:bi,any:wi};function xe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Oe=xe(),Q=function(){function r(t){this.rules=null,this._messages=Oe,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Xe(xe(),n)),this._messages},e.validate=function(n,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=n,u=i,w=s;if(typeof u=="function"&&(w=u,u={}),!this.rules||Object.keys(this.rules).length===0)return w&&w(null,o),Promise.resolve(o);function c(d){var v=[],f={};function m(h){if(Array.isArray(h)){var A;v=(A=v).concat.apply(A,h)}else v.push(h)}for(var l=0;l<d.length;l++)m(d[l]);v.length?(f=Fe(v),w(v,f)):w(null,o)}if(u.messages){var g=this.messages();g===Oe&&(g=xe()),Xe(g,u.messages),u.messages=g}else u.messages=this.messages();var b={},q=u.keys||Object.keys(this.rules);q.forEach(function(d){var v=a.rules[d],f=o[d];v.forEach(function(m){var l=m;typeof l.transform=="function"&&(o===n&&(o=W({},o)),f=o[d]=l.transform(f)),typeof l=="function"?l={validator:l}:l=W({},l),l.validator=a.getValidationMethod(l),l.validator&&(l.field=d,l.fullField=l.fullField||d,l.type=a.getType(l),b[d]=b[d]||[],b[d].push({rule:l,value:f,source:o,field:d}))})});var j={};return Qn(b,u,function(d,v){var f=d.rule,m=(f.type==="object"||f.type==="array")&&(typeof f.fields=="object"||typeof f.defaultField=="object");m=m&&(f.required||!f.required&&d.value),f.field=d.field;function l(O,L){return W({},L,{fullField:f.fullField+"."+O,fullFields:f.fullFields?[].concat(f.fullFields,[O]):[O]})}function h(O){O===void 0&&(O=[]);var L=Array.isArray(O)?O:[O];!u.suppressWarning&&L.length&&r.warning("async-validator:",L),L.length&&f.message!==void 0&&(L=[].concat(f.message));var $=L.map(Qe(f,o));if(u.first&&$.length)return j[f.field]=1,v($);if(!m)v($);else{if(f.required&&!d.value)return f.message!==void 0?$=[].concat(f.message).map(Qe(f,o)):u.error&&($=[u.error(f,I(u.messages.required,f.field))]),v($);var B={};f.defaultField&&Object.keys(d.value).map(function(N){B[N]=f.defaultField}),B=W({},B,d.rule.fields);var K={};Object.keys(B).forEach(function(N){var M=B[N],fe=Array.isArray(M)?M:[M];K[N]=fe.map(l.bind(null,N))});var V=new r(K);V.messages(u.messages),d.rule.options&&(d.rule.options.messages=u.messages,d.rule.options.error=u.error),V.validate(d.value,d.rule.options||u,function(N){var M=[];$&&$.length&&M.push.apply(M,$),N&&N.length&&M.push.apply(M,N),v(M.length?M:null)})}}var A;if(f.asyncValidator)A=f.asyncValidator(f,d.value,h,d.source,u);else if(f.validator){try{A=f.validator(f,d.value,h,d.source,u)}catch(O){console.error==null||console.error(O),u.suppressValidatorError||setTimeout(function(){throw O},0),h(O.message)}A===!0?h():A===!1?h(typeof f.message=="function"?f.message(f.fullField||f.field):f.message||(f.fullField||f.field)+" fails"):A instanceof Array?h(A):A instanceof Error&&h(A.message)}A&&A.then&&A.then(function(){return h()},function(O){return h(O)})},function(d){c(d)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!J.hasOwnProperty(n.type))throw new Error(I("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?J.required:J[this.getType(n)]||void 0},r}();Q.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");J[e]=t};Q.warning=Yn;Q.messages=Oe;Q.validators=J;const Fi=["","error","validating","success"],xi=it({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:ge([String,Array])},required:{type:Boolean,default:void 0},rules:{type:ge([Object,Array])},error:String,validateStatus:{type:String,values:Fi},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:at}}),et="ElLabelWrap";var Oi=H({name:et,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(r,{slots:e}){const t=ie(je,void 0),n=ie(ye);n||Ct(et,"usage: <el-form-item><label-wrap /></el-form-item>");const i=qe("form"),s=C(),a=C(0),o=()=>{var c;if((c=s.value)!=null&&c.firstElementChild){const g=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(g))}else return 0},u=(c="update")=>{mt(()=>{e.default&&r.isAutoWidth&&(c==="update"?a.value=o():c==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},w=()=>u("update");return gt(()=>{w()}),vt(()=>{u("remove")}),Wt(()=>w()),ne(a,(c,g)=>{r.updateAll&&(t==null||t.registerLabelWidth(c,g))}),Vt(T(()=>{var c,g;return(g=(c=s.value)==null?void 0:c.firstElementChild)!=null?g:null}),w),()=>{var c,g;if(!e)return null;const{isAutoWidth:b}=r;if(b){const q=t==null?void 0:t.autoLabelWidth,j=n==null?void 0:n.hasLabel,d={};if(j&&q&&q!=="auto"){const v=Math.max(0,Number.parseInt(q,10)-a.value),f=t.labelPosition==="left"?"marginRight":"marginLeft";v&&(d[f]=`${v}px`)}return ae("div",{ref:s,class:[i.be("item","label-wrap")],style:d},[(c=e.default)==null?void 0:c.call(e)])}else return ae(Dt,{ref:s},[(g=e.default)==null?void 0:g.call(e)])}}});const Ai=["role","aria-labelledby"],qi=H({name:"ElFormItem"}),ji=H({...qi,props:xi,setup(r,{expose:e}){const t=r,n=Ut(),i=ie(je,void 0),s=ie(ye,void 0),a=ot(void 0,{formItem:!1}),o=qe("form-item"),u=zt().value,w=C([]),c=C(""),g=Kt(c,100),b=C(""),q=C();let j,d=!1;const v=T(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const p=Me(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return p?{width:p}:{}}),f=T(()=>{if((i==null?void 0:i.labelPosition)==="top"||(i==null?void 0:i.inline))return{};if(!t.label&&!t.labelWidth&&B)return{};const p=Me(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return!t.label&&!n.label?{marginLeft:p}:{}}),m=T(()=>[o.b(),o.m(a.value),o.is("error",c.value==="error"),o.is("validating",c.value==="validating"),o.is("success",c.value==="success"),o.is("required",fe.value||t.required),o.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),(i==null?void 0:i.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[o.m("feedback")]:i==null?void 0:i.statusIcon}]),l=T(()=>st(t.inlineMessage)?t.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),h=T(()=>[o.e("error"),{[o.em("error","inline")]:l.value}]),A=T(()=>t.prop?ve(t.prop)?t.prop:t.prop.join("."):""),O=T(()=>!!(t.label||n.label)),L=T(()=>t.for||w.value.length===1?w.value[0]:void 0),$=T(()=>!L.value&&O.value),B=!!s,K=T(()=>{const p=i==null?void 0:i.model;if(!(!p||!t.prop))return de(p,t.prop).value}),V=T(()=>{const{required:p}=t,F=[];t.rules&&F.push(...he(t.rules));const P=i==null?void 0:i.rules;if(P&&t.prop){const _=de(P,t.prop).value;_&&F.push(...he(_))}if(p!==void 0){const _=F.map((R,U)=>[R,U]).filter(([R])=>Object.keys(R).includes("required"));if(_.length>0)for(const[R,U]of _)R.required!==p&&(F[U]={...R,required:p});else F.push({required:p})}return F}),N=T(()=>V.value.length>0),M=p=>V.value.filter(P=>!P.trigger||!p?!0:Array.isArray(P.trigger)?P.trigger.includes(p):P.trigger===p).map(({trigger:P,..._})=>_),fe=T(()=>V.value.some(p=>p.required)),St=T(()=>{var p;return g.value==="error"&&t.showMessage&&((p=i==null?void 0:i.showMessage)!=null?p:!0)}),_e=T(()=>`${t.label||""}${(i==null?void 0:i.labelSuffix)||""}`),D=p=>{c.value=p},_t=p=>{var F,P;const{errors:_,fields:R}=p;(!_||!R)&&console.error(p),D("error"),b.value=_?(P=(F=_==null?void 0:_[0])==null?void 0:F.message)!=null?P:`${t.prop} is required`:"",i==null||i.emit("validate",t.prop,!1,b.value)},Pt=()=>{D("success"),i==null||i.emit("validate",t.prop,!0,"")},$t=async p=>{const F=A.value;return new Q({[F]:p}).validate({[F]:K.value},{firstFields:!0}).then(()=>(Pt(),!0)).catch(_=>(_t(_),Promise.reject(_)))},Pe=async(p,F)=>{if(d||!t.prop)return!1;const P=pt(F);if(!N.value)return F==null||F(!1),!1;const _=M(p);return _.length===0?(F==null||F(!0),!0):(D("validating"),$t(_).then(()=>(F==null||F(!0),!0)).catch(R=>{const{fields:U}=R;return F==null||F(!1,U),P?!1:Promise.reject(U)}))},ue=()=>{D(""),b.value="",d=!1},$e=async()=>{const p=i==null?void 0:i.model;if(!p||!t.prop)return;const F=de(p,t.prop);d=!0,F.value=Je(j),await mt(),ue(),d=!1},It=p=>{w.value.includes(p)||w.value.push(p)},Mt=p=>{w.value=w.value.filter(F=>F!==p)};ne(()=>t.error,p=>{b.value=p||"",D(p?"error":"")},{immediate:!0}),ne(()=>t.validateStatus,p=>D(p||""));const le=ut({...lt(t),$el:q,size:a,validateState:c,labelId:u,inputIds:w,isGroup:$,hasLabel:O,addInputId:It,removeInputId:Mt,resetField:$e,clearValidate:ue,validate:Pe});return ft(ye,le),gt(()=>{t.prop&&(i==null||i.addField(le),j=Je(K.value))}),vt(()=>{i==null||i.removeField(le)}),e({size:a,validateMessage:b,validateState:c,validate:Pe,clearValidate:ue,resetField:$e}),(p,F)=>{var P;return me(),dt("div",{ref_key:"formItemRef",ref:q,class:G(E(m)),role:E($)?"group":void 0,"aria-labelledby":E($)?E(u):void 0},[ae(E(Oi),{"is-auto-width":E(v).width==="auto","update-all":((P=E(i))==null?void 0:P.labelWidth)==="auto"},{default:ce(()=>[E(O)?(me(),Gt(Yt(E(L)?"label":"div"),{key:0,id:E(u),for:E(L),class:G(E(o).e("label")),style:Le(E(v))},{default:ce(()=>[ee(p.$slots,"label",{label:E(_e)},()=>[Jt(Ne(E(_e)),1)])]),_:3},8,["id","for","class","style"])):Re("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),Be("div",{class:G(E(o).e("content")),style:Le(E(f))},[ee(p.$slots,"default"),ae(Zt,{name:`${E(o).namespace.value}-zoom-in-top`},{default:ce(()=>[E(St)?ee(p.$slots,"error",{key:0,error:b.value},()=>[Be("div",{class:G(E(h))},Ne(b.value),3)]):Re("v-if",!0)]),_:3},8,["name"])],6)],10,Ai)}}});var Tt=ct(ji,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const Si=Ht(Dn,{FormItem:Tt}),_i=Qt(Tt);export{_i as E,Si as a};
