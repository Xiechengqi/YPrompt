const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-BSXPvSeK.js","assets/LoginView-BQv3zsGn.css","assets/AuthCallback-BueGHv6m.js","assets/AuthCallback-DAHntk-2.css","assets/GenerateModule-BBiWiNqH.js","assets/apiService-Dz_ZRgzF.js","assets/ModelDialog.vue_vue_type_script_setup_true_lang-CHCP7cJo.js","assets/FinalTab.vue_vue_type_script_setup_true_lang-tT7ITqfB.js","assets/FinalTab-CDvh1RBw.css","assets/SavePromptDialog.vue_vue_type_script_setup_true_lang-BnOPdyqs.js","assets/OptimizeModule-CFeum7nY.js","assets/SettingsModal.vue_vue_type_script_setup_true_lang-B2s1bAtk.js","assets/OptimizeModule-C8JMchR2.css","assets/PlaygroundModule-CDsmAIln.js","assets/PlaygroundModule-BDv4wRAz.css","assets/LibraryModule-C_8cOqXl.js","assets/LibraryModule-CsIas7Q0.css"])))=>i.map(i=>d[i]);
var Lp=Object.defineProperty;var Fp=(e,t,i)=>t in e?Lp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var Mn=(e,t,i)=>Fp(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const Dp="modulepreload",qp=function(e){return"/"+e},Qa={},xe=function(t,i,n){let o=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(i.map(l=>{if(l=qp(l),l in Qa)return;Qa[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Dp,u||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((p,d)=>{h.addEventListener("load",p),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bt(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}const ae={},cn=[],Ve=()=>{},an=()=>!1,Li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),$r=e=>e.startsWith("onUpdate:"),le=Object.assign,Yr=(e,t)=>{const i=e.indexOf(t);i>-1&&e.splice(i,1)},Bp=Object.prototype.hasOwnProperty,pe=(e,t)=>Bp.call(e,t),H=Array.isArray,un=e=>Pn(e)==="[object Map]",Fi=e=>Pn(e)==="[object Set]",Za=e=>Pn(e)==="[object Date]",zp=e=>Pn(e)==="[object RegExp]",ee=e=>typeof e=="function",ie=e=>typeof e=="string",ut=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Kr=e=>(ye(e)||ee(e))&&ee(e.then)&&ee(e.catch),Cc=Object.prototype.toString,Pn=e=>Cc.call(e),Up=e=>Pn(e).slice(8,-1),Ss=e=>Pn(e)==="[object Object]",Jr=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,di=bt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wp=bt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),As=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},jp=/-\w/g,Se=As(e=>e.replace(jp,t=>t.slice(1).toUpperCase())),Vp=/\B([A-Z])/g,lt=As(e=>e.replace(Vp,"-$1").toLowerCase()),Di=As(e=>e.charAt(0).toUpperCase()+e.slice(1)),hn=As(e=>e?`on${Di(e)}`:""),it=(e,t)=>!Object.is(e,t),pn=(e,...t)=>{for(let i=0;i<e.length;i++)e[i](...t)},Ec=(e,t,i,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:i})},Jo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Qo=e=>{const t=ie(e)?Number(e):NaN;return isNaN(t)?e:t};let Xa;const Is=()=>Xa||(Xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hp(e,t){return e+JSON.stringify(t,(i,n)=>typeof n=="function"?n.toString():n)}const Gp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",$p=bt(Gp);function xn(e){if(H(e)){const t={};for(let i=0;i<e.length;i++){const n=e[i],o=ie(n)?Rc(n):xn(n);if(o)for(const s in o)t[s]=o[s]}return t}else if(ie(e)||ye(e))return e}const Yp=/;(?![^(]*\))/g,Kp=/:([^]+)/,Jp=/\/\*[^]*?\*\//g;function Rc(e){const t={};return e.replace(Jp,"").split(Yp).forEach(i=>{if(i){const n=i.split(Kp);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function bi(e){let t="";if(ie(e))t=e;else if(H(e))for(let i=0;i<e.length;i++){const n=bi(e[i]);n&&(t+=n+" ")}else if(ye(e))for(const i in e)e[i]&&(t+=i+" ");return t.trim()}function Qp(e){if(!e)return null;let{class:t,style:i}=e;return t&&!ie(t)&&(e.class=bi(t)),i&&(e.style=xn(i)),e}const Zp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Xp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",ed="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",td="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",id=bt(Zp),nd=bt(Xp),od=bt(ed),sd=bt(td),rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=bt(rd);function Oc(e){return!!e||e===""}function ld(e,t){if(e.length!==t.length)return!1;let i=!0;for(let n=0;i&&n<e.length;n++)i=yi(e[n],t[n]);return i}function yi(e,t){if(e===t)return!0;let i=Za(e),n=Za(t);if(i||n)return i&&n?e.getTime()===t.getTime():!1;if(i=ut(e),n=ut(t),i||n)return e===t;if(i=H(e),n=H(t),i||n)return i&&n?ld(e,t):!1;if(i=ye(e),n=ye(t),i||n){if(!i||!n)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const r in e){const a=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(a&&!l||!a&&l||!yi(e[r],t[r]))return!1}}return String(e)===String(t)}function Ps(e,t){return e.findIndex(i=>yi(i,t))}const Mc=e=>!!(e&&e.__v_isRef===!0),yo=e=>ie(e)?e:e==null?"":H(e)||ye(e)&&(e.toString===Cc||!ee(e.toString))?Mc(e)?yo(e.value):JSON.stringify(e,Nc,2):String(e),Nc=(e,t)=>Mc(t)?Nc(e,t.value):un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((i,[n,o],s)=>(i[Js(n,s)+" =>"]=o,i),{})}:Fi(t)?{[`Set(${t.size})`]:[...t.values()].map(i=>Js(i))}:ut(t)?Js(t):ye(t)&&!H(t)&&!Ss(t)?String(t):t,Js=(e,t="")=>{var i;return ut(e)?`Symbol(${(i=e.description)!=null?i:t})`:e};function cd(e){return e==null?"initial":typeof e=="string"?e===""?" ":e:String(e)}/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class Qr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!t&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].pause();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,i;if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].resume();for(t=0,i=this.effects.length;t<i;t++)this.effects[t].resume()}}run(t){if(this._active){const i=Ke;try{return Ke=this,t()}finally{Ke=i}}}on(){++this._on===1&&(this.prevScope=Ke,Ke=this)}off(){this._on>0&&--this._on===0&&(Ke=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let i,n;for(i=0,n=this.effects.length;i<n;i++)this.effects[i].stop();for(this.effects.length=0,i=0,n=this.cleanups.length;i<n;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,n=this.scopes.length;i<n;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Zr(e){return new Qr(e)}function Xr(){return Ke}function Lc(e,t=!1){Ke&&Ke.cleanups.push(e)}let Te;const Qs=new WeakSet;class Xn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qs.has(this)&&(Qs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,el(this),qc(this);const t=Te,i=_t;Te=this,_t=!0;try{return this.fn()}finally{Bc(this),Te=t,_t=i,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ia(t);this.deps=this.depsTail=void 0,el(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fr(this)&&this.run()}get dirty(){return fr(this)}}let Fc=0,Wn,jn;function Dc(e,t=!1){if(e.flags|=8,t){e.next=jn,jn=e;return}e.next=Wn,Wn=e}function ea(){Fc++}function ta(){if(--Fc>0)return;if(jn){let t=jn;for(jn=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;Wn;){let t=Wn;for(Wn=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function qc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Bc(e){let t,i=e.depsTail,n=i;for(;n;){const o=n.prevDep;n.version===-1?(n===i&&(i=o),ia(n),ud(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=o}e.deps=t,e.depsTail=i}function fr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(zc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function zc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===eo)||(e.globalVersion=eo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!fr(e))))return;e.flags|=2;const t=e.dep,i=Te,n=_t;Te=e,_t=!0;try{qc(e);const o=e.fn(e._value);(t.version===0||it(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Te=i,_t=n,Bc(e),e.flags&=-3}}function ia(e,t=!1){const{dep:i,prevSub:n,nextSub:o}=e;if(n&&(n.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=n,e.nextSub=void 0),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let s=i.computed.deps;s;s=s.nextDep)ia(s,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function ud(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}function hd(e,t){e.effect instanceof Xn&&(e=e.effect.fn);const i=new Xn(e);t&&le(i,t);try{i.run()}catch(o){throw i.stop(),o}const n=i.run.bind(i);return n.effect=i,n}function pd(e){e.effect.stop()}let _t=!0;const Uc=[];function Kt(){Uc.push(_t),_t=!1}function Jt(){const e=Uc.pop();_t=e===void 0?!0:e}function el(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=Te;Te=void 0;try{t()}finally{Te=i}}}let eo=0;class dd{constructor(t,i){this.sub=t,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Te||!_t||Te===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==Te)i=this.activeLink=new dd(Te,this),Te.deps?(i.prevDep=Te.depsTail,Te.depsTail.nextDep=i,Te.depsTail=i):Te.deps=Te.depsTail=i,Wc(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const n=i.nextDep;n.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=n),i.prevDep=Te.depsTail,i.nextDep=void 0,Te.depsTail.nextDep=i,Te.depsTail=i,Te.deps===i&&(Te.deps=n)}return i}trigger(t){this.version++,eo++,this.notify(t)}notify(t){ea();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{ta()}}}function Wc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Wc(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subs=e}}const Zo=new WeakMap,xi=Symbol(""),mr=Symbol(""),to=Symbol("");function Ze(e,t,i){if(_t&&Te){let n=Zo.get(e);n||Zo.set(e,n=new Map);let o=n.get(i);o||(n.set(i,o=new xs),o.map=n,o.key=i),o.track()}}function Vt(e,t,i,n,o,s){const r=Zo.get(e);if(!r){eo++;return}const a=l=>{l&&l.trigger()};if(ea(),t==="clear")r.forEach(a);else{const l=H(e),u=l&&Jr(i);if(l&&i==="length"){const c=Number(n);r.forEach((h,p)=>{(p==="length"||p===to||!ut(p)&&p>=c)&&a(h)})}else switch((i!==void 0||r.has(void 0))&&a(r.get(i)),u&&a(r.get(to)),t){case"add":l?u&&a(r.get("length")):(a(r.get(xi)),un(e)&&a(r.get(mr)));break;case"delete":l||(a(r.get(xi)),un(e)&&a(r.get(mr)));break;case"set":un(e)&&a(r.get(xi));break}}ta()}function fd(e,t){const i=Zo.get(e);return i&&i.get(t)}function zi(e){const t=ce(e);return t===e?t:(Ze(t,"iterate",to),yt(e)?t:t.map(ze))}function _s(e){return Ze(e=ce(e),"iterate",to),e}const md={__proto__:null,[Symbol.iterator](){return Zs(this,Symbol.iterator,ze)},concat(...e){return zi(this).concat(...e.map(t=>H(t)?zi(t):t))},entries(){return Zs(this,"entries",e=>(e[1]=ze(e[1]),e))},every(e,t){return qt(this,"every",e,t,void 0,arguments)},filter(e,t){return qt(this,"filter",e,t,i=>i.map(ze),arguments)},find(e,t){return qt(this,"find",e,t,ze,arguments)},findIndex(e,t){return qt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return qt(this,"findLast",e,t,ze,arguments)},findLastIndex(e,t){return qt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return qt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xs(this,"includes",e)},indexOf(...e){return Xs(this,"indexOf",e)},join(e){return zi(this).join(e)},lastIndexOf(...e){return Xs(this,"lastIndexOf",e)},map(e,t){return qt(this,"map",e,t,void 0,arguments)},pop(){return Nn(this,"pop")},push(...e){return Nn(this,"push",e)},reduce(e,...t){return tl(this,"reduce",e,t)},reduceRight(e,...t){return tl(this,"reduceRight",e,t)},shift(){return Nn(this,"shift")},some(e,t){return qt(this,"some",e,t,void 0,arguments)},splice(...e){return Nn(this,"splice",e)},toReversed(){return zi(this).toReversed()},toSorted(e){return zi(this).toSorted(e)},toSpliced(...e){return zi(this).toSpliced(...e)},unshift(...e){return Nn(this,"unshift",e)},values(){return Zs(this,"values",ze)}};function Zs(e,t,i){const n=_s(e),o=n[t]();return n!==e&&!yt(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.value&&(s.value=i(s.value)),s}),o}const gd=Array.prototype;function qt(e,t,i,n,o,s){const r=_s(e),a=r!==e&&!yt(e),l=r[t];if(l!==gd[t]){const h=l.apply(e,s);return a?ze(h):h}let u=i;r!==e&&(a?u=function(h,p){return i.call(this,ze(h),p,e)}:i.length>2&&(u=function(h,p){return i.call(this,h,p,e)}));const c=l.call(r,u,n);return a&&o?o(c):c}function tl(e,t,i,n){const o=_s(e);let s=i;return o!==e&&(yt(e)?i.length>3&&(s=function(r,a,l){return i.call(this,r,a,l,e)}):s=function(r,a,l){return i.call(this,r,ze(a),l,e)}),o[t](s,...n)}function Xs(e,t,i){const n=ce(e);Ze(n,"iterate",to);const o=n[t](...i);return(o===-1||o===!1)&&Rs(i[0])?(i[0]=ce(i[0]),n[t](...i)):o}function Nn(e,t,i=[]){Kt(),ea();const n=ce(e)[t].apply(e,i);return ta(),Jt(),n}const yd=bt("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ut));function vd(e){ut(e)||(e=String(e));const t=ce(this);return Ze(t,"has",e),t.hasOwnProperty(e)}class Vc{constructor(t=!1,i=!1){this._isReadonly=t,this._isShallow=i}get(t,i,n){if(i==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(i==="__v_isReactive")return!o;if(i==="__v_isReadonly")return o;if(i==="__v_isShallow")return s;if(i==="__v_raw")return n===(o?s?Jc:Kc:s?Yc:$c).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const r=H(t);if(!o){let l;if(r&&(l=md[i]))return l;if(i==="hasOwnProperty")return vd}const a=Reflect.get(t,i,Pe(t)?t:n);return(ut(i)?jc.has(i):yd(i))||(o||Ze(t,"get",i),s)?a:Pe(a)?r&&Jr(i)?a:a.value:ye(a)?o?oa(a):_n(a):a}}class Hc extends Vc{constructor(t=!1){super(!1,t)}set(t,i,n,o){let s=t[i];if(!this._isShallow){const l=Qt(s);if(!yt(n)&&!Qt(n)&&(s=ce(s),n=ce(n)),!H(t)&&Pe(s)&&!Pe(n))return l||(s.value=n),!0}const r=H(t)&&Jr(i)?Number(i)<t.length:pe(t,i),a=Reflect.set(t,i,n,Pe(t)?t:o);return t===ce(o)&&(r?it(n,s)&&Vt(t,"set",i,n):Vt(t,"add",i,n)),a}deleteProperty(t,i){const n=pe(t,i);t[i];const o=Reflect.deleteProperty(t,i);return o&&n&&Vt(t,"delete",i,void 0),o}has(t,i){const n=Reflect.has(t,i);return(!ut(i)||!jc.has(i))&&Ze(t,"has",i),n}ownKeys(t){return Ze(t,"iterate",H(t)?"length":xi),Reflect.ownKeys(t)}}class Gc extends Vc{constructor(t=!1){super(!0,t)}set(t,i){return!0}deleteProperty(t,i){return!0}}const bd=new Hc,wd=new Gc,Td=new Hc(!0),kd=new Gc(!0),gr=e=>e,_o=e=>Reflect.getPrototypeOf(e);function Sd(e,t,i){return function(...n){const o=this.__v_raw,s=ce(o),r=un(s),a=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,u=o[e](...n),c=i?gr:t?Xo:ze;return!t&&Ze(s,"iterate",l?mr:xi),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[c(h[0]),c(h[1])]:c(h),done:p}},[Symbol.iterator](){return this}}}}function Co(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ad(e,t){const i={get(o){const s=this.__v_raw,r=ce(s),a=ce(o);e||(it(o,a)&&Ze(r,"get",o),Ze(r,"get",a));const{has:l}=_o(r),u=t?gr:e?Xo:ze;if(l.call(r,o))return u(s.get(o));if(l.call(r,a))return u(s.get(a));s!==r&&s.get(o)},get size(){const o=this.__v_raw;return!e&&Ze(ce(o),"iterate",xi),o.size},has(o){const s=this.__v_raw,r=ce(s),a=ce(o);return e||(it(o,a)&&Ze(r,"has",o),Ze(r,"has",a)),o===a?s.has(o):s.has(o)||s.has(a)},forEach(o,s){const r=this,a=r.__v_raw,l=ce(a),u=t?gr:e?Xo:ze;return!e&&Ze(l,"iterate",xi),a.forEach((c,h)=>o.call(s,u(c),u(h),r))}};return le(i,e?{add:Co("add"),set:Co("set"),delete:Co("delete"),clear:Co("clear")}:{add(o){!t&&!yt(o)&&!Qt(o)&&(o=ce(o));const s=ce(this);return _o(s).has.call(s,o)||(s.add(o),Vt(s,"add",o,o)),this},set(o,s){!t&&!yt(s)&&!Qt(s)&&(s=ce(s));const r=ce(this),{has:a,get:l}=_o(r);let u=a.call(r,o);u||(o=ce(o),u=a.call(r,o));const c=l.call(r,o);return r.set(o,s),u?it(s,c)&&Vt(r,"set",o,s):Vt(r,"add",o,s),this},delete(o){const s=ce(this),{has:r,get:a}=_o(s);let l=r.call(s,o);l||(o=ce(o),l=r.call(s,o)),a&&a.call(s,o);const u=s.delete(o);return l&&Vt(s,"delete",o,void 0),u},clear(){const o=ce(this),s=o.size!==0,r=o.clear();return s&&Vt(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{i[o]=Sd(o,e,t)}),i}function Cs(e,t){const i=Ad(e,t);return(n,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(pe(i,o)&&o in n?i:n,o,s)}const Id={get:Cs(!1,!1)},Pd={get:Cs(!1,!0)},xd={get:Cs(!0,!1)},_d={get:Cs(!0,!0)},$c=new WeakMap,Yc=new WeakMap,Kc=new WeakMap,Jc=new WeakMap;function Cd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ed(e){return e.__v_skip||!Object.isExtensible(e)?0:Cd(Up(e))}function _n(e){return Qt(e)?e:Es(e,!1,bd,Id,$c)}function na(e){return Es(e,!1,Td,Pd,Yc)}function oa(e){return Es(e,!0,wd,xd,Kc)}function Rd(e){return Es(e,!0,kd,_d,Jc)}function Es(e,t,i,n,o){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=Ed(e);if(s===0)return e;const r=o.get(e);if(r)return r;const a=new Proxy(e,s===2?n:i);return o.set(e,a),a}function Lt(e){return Qt(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Qt(e){return!!(e&&e.__v_isReadonly)}function yt(e){return!!(e&&e.__v_isShallow)}function Rs(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function Os(e){return!pe(e,"__v_skip")&&Object.isExtensible(e)&&Ec(e,"__v_skip",!0),e}const ze=e=>ye(e)?_n(e):e,Xo=e=>ye(e)?oa(e):e;function Pe(e){return e?e.__v_isRef===!0:!1}function he(e){return Qc(e,!1)}function sa(e){return Qc(e,!0)}function Qc(e,t){return Pe(e)?e:new Od(e,t)}class Od{constructor(t,i){this.dep=new xs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?t:ce(t),this._value=i?t:ze(t),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(t){const i=this._rawValue,n=this.__v_isShallow||yt(t)||Qt(t);t=n?t:ce(t),it(t,i)&&(this._rawValue=t,this._value=n?t:ze(t),this.dep.trigger())}}function Md(e){e.dep&&e.dep.trigger()}function be(e){return Pe(e)?e.value:e}function Nd(e){return ee(e)?e():be(e)}const Ld={get:(e,t,i)=>t==="__v_raw"?e:be(Reflect.get(e,t,i)),set:(e,t,i,n)=>{const o=e[t];return Pe(o)&&!Pe(i)?(o.value=i,!0):Reflect.set(e,t,i,n)}};function ra(e){return Lt(e)?e:new Proxy(e,Ld)}class Fd{constructor(t){this.__v_isRef=!0,this._value=void 0;const i=this.dep=new xs,{get:n,set:o}=t(i.track.bind(i),i.trigger.bind(i));this._get=n,this._set=o}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Zc(e){return new Fd(e)}function Xc(e){const t=H(e)?new Array(e.length):{};for(const i in e)t[i]=eu(e,i);return t}class Dd{constructor(t,i,n){this._object=t,this._key=i,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return fd(ce(this._object),this._key)}}class qd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Bd(e,t,i){return Pe(e)?e:ee(e)?new qd(e):ye(e)&&arguments.length>1?eu(e,t,i):he(e)}function eu(e,t,i){const n=e[t];return Pe(n)?n:new Dd(e,t,i)}class zd{constructor(t,i,n){this.fn=t,this.setter=i,this._value=void 0,this.dep=new xs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Dc(this,!0),!0}get value(){const t=this.dep.track();return zc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ud(e,t,i=!1){let n,o;return ee(e)?n=e:(n=e.get,o=e.set),new zd(n,o,i)}const Wd={GET:"get",HAS:"has",ITERATE:"iterate"},jd={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},Eo={},es=new WeakMap;let li;function Vd(){return li}function tu(e,t=!1,i=li){if(i){let n=es.get(i);n||es.set(i,n=[]),n.push(e)}}function Hd(e,t,i=ae){const{immediate:n,deep:o,once:s,scheduler:r,augmentJob:a,call:l}=i,u=b=>o?b:yt(b)||o===!1||o===0?Ht(b,1):Ht(b);let c,h,p,d,y=!1,v=!1;if(Pe(e)?(h=()=>e.value,y=yt(e)):Lt(e)?(h=()=>u(e),y=!0):H(e)?(v=!0,y=e.some(b=>Lt(b)||yt(b)),h=()=>e.map(b=>{if(Pe(b))return b.value;if(Lt(b))return u(b);if(ee(b))return l?l(b,2):b()})):ee(e)?t?h=l?()=>l(e,2):e:h=()=>{if(p){Kt();try{p()}finally{Jt()}}const b=li;li=c;try{return l?l(e,3,[d]):e(d)}finally{li=b}}:h=Ve,t&&o){const b=h,S=o===!0?1/0:o;h=()=>Ht(b(),S)}const _=Xr(),P=()=>{c.stop(),_&&_.active&&Yr(_.effects,c)};if(s&&t){const b=t;t=(...S)=>{b(...S),P()}}let k=v?new Array(e.length).fill(Eo):Eo;const m=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(t){const S=c.run();if(o||y||(v?S.some((F,q)=>it(F,k[q])):it(S,k))){p&&p();const F=li;li=c;try{const q=[S,k===Eo?void 0:v&&k[0]===Eo?[]:k,d];k=S,l?l(t,3,q):t(...q)}finally{li=F}}}else c.run()};return a&&a(m),c=new Xn(h),c.scheduler=r?()=>r(m,!1):m,d=b=>tu(b,!1,c),p=c.onStop=()=>{const b=es.get(c);if(b){if(l)l(b,4);else for(const S of b)S();es.delete(c)}},t?n?m(!0):k=c.run():r?r(m.bind(null,!0),!0):c.run(),P.pause=c.pause.bind(c),P.resume=c.resume.bind(c),P.stop=P,P}function Ht(e,t=1/0,i){if(t<=0||!ye(e)||e.__v_skip||(i=i||new Map,(i.get(e)||0)>=t))return e;if(i.set(e,t),t--,Pe(e))Ht(e.value,t,i);else if(H(e))for(let n=0;n<e.length;n++)Ht(e[n],t,i);else if(Fi(e)||un(e))e.forEach(n=>{Ht(n,t,i)});else if(Ss(e)){for(const n in e)Ht(e[n],t,i);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ht(e[n],t,i)}return e}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const iu=[];function Gd(e){iu.push(e)}function $d(){iu.pop()}function Yd(e,t){}const Kd={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},Jd={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Cn(e,t,i,n){try{return n?e(...n):e()}catch(o){qi(o,t,i)}}function It(e,t,i,n){if(ee(e)){const o=Cn(e,t,i,n);return o&&Kr(o)&&o.catch(s=>{qi(s,t,i)}),o}if(H(e)){const o=[];for(let s=0;s<e.length;s++)o.push(It(e[s],t,i,n));return o}}function qi(e,t,i,n=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||ae;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${i}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](e,l,u)===!1)return}a=a.parent}if(s){Kt(),Cn(s,null,10,[e,l,u]),Jt();return}}Qd(e,i,o,n,r)}function Qd(e,t,i,n=!0,o=!1){if(o)throw e;console.error(e)}const nt=[];let Mt=-1;const dn=[];let ci=null,on=0;const nu=Promise.resolve();let ts=null;function En(e){const t=ts||nu;return e?t.then(this?e.bind(this):e):t}function Zd(e){let t=Mt+1,i=nt.length;for(;t<i;){const n=t+i>>>1,o=nt[n],s=no(o);s<e||s===e&&o.flags&2?t=n+1:i=n}return t}function aa(e){if(!(e.flags&1)){const t=no(e),i=nt[nt.length-1];!i||!(e.flags&2)&&t>=no(i)?nt.push(e):nt.splice(Zd(t),0,e),e.flags|=1,ou()}}function ou(){ts||(ts=nu.then(su))}function io(e){H(e)?dn.push(...e):ci&&e.id===-1?ci.splice(on+1,0,e):e.flags&1||(dn.push(e),e.flags|=1),ou()}function il(e,t,i=Mt+1){for(;i<nt.length;i++){const n=nt[i];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;nt.splice(i,1),i--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function is(e){if(dn.length){const t=[...new Set(dn)].sort((i,n)=>no(i)-no(n));if(dn.length=0,ci){ci.push(...t);return}for(ci=t,on=0;on<ci.length;on++){const i=ci[on];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}ci=null,on=0}}const no=e=>e.id==null?e.flags&2?-1:1/0:e.id;function su(e){try{for(Mt=0;Mt<nt.length;Mt++){const t=nt[Mt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Cn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Mt<nt.length;Mt++){const t=nt[Mt];t&&(t.flags&=-2)}Mt=-1,nt.length=0,is(),ts=null,(nt.length||dn.length)&&su()}}let sn,Ro=[];function ru(e,t){var i,n;sn=e,sn?(sn.enabled=!0,Ro.forEach(({event:o,args:s})=>sn.emit(o,...s)),Ro=[]):typeof window<"u"&&window.HTMLElement&&!((n=(i=window.navigator)==null?void 0:i.userAgent)!=null&&n.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{ru(s,t)}),setTimeout(()=>{sn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ro=[])},3e3)):Ro=[]}let je=null,Ms=null;function oo(e){const t=je;return je=e,Ms=e&&e.type.__scopeId||null,t}function Xd(e){Ms=e}function ef(){Ms=null}const tf=e=>vo;function vo(e,t=je,i){if(!t||e._n)return e;const n=(...o)=>{n._d&&ao(-1);const s=oo(t);let r;try{r=e(...o)}finally{oo(s),n._d&&ao(1)}return r};return n._n=!0,n._c=!0,n._d=!0,n}function nf(e,t){if(je===null)return e;const i=So(je),n=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,a,l=ae]=t[o];s&&(ee(s)&&(s={mounted:s,updated:s}),s.deep&&Ht(r),n.push({dir:s,instance:i,value:r,oldValue:void 0,arg:a,modifiers:l}))}return e}function Nt(e,t,i,n){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];s&&(a.oldValue=s[r].value);let l=a.dir[n];l&&(Kt(),It(l,i,8,[e.el,a,e,t]),Jt())}}const au=Symbol("_vte"),lu=e=>e.__isTeleport,Vn=e=>e&&(e.disabled||e.disabled===""),nl=e=>e&&(e.defer||e.defer===""),ol=e=>typeof SVGElement<"u"&&e instanceof SVGElement,sl=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,yr=(e,t)=>{const i=e&&e.to;return ie(i)?t?t(i):null:i},cu={name:"Teleport",__isTeleport:!0,process(e,t,i,n,o,s,r,a,l,u){const{mc:c,pc:h,pbc:p,o:{insert:d,querySelector:y,createText:v,createComment:_}}=u,P=Vn(t.props);let{shapeFlag:k,children:m,dynamicChildren:b}=t;if(e==null){const S=t.el=v(""),F=t.anchor=v("");d(S,i,n),d(F,i,n);const q=(w,x)=>{k&16&&(o&&o.isCE&&(o.ce._teleportTarget=w),c(m,w,x,o,s,r,a,l))},E=()=>{const w=t.target=yr(t.props,y),x=uu(w,t,v,d);w&&(r!=="svg"&&ol(w)?r="svg":r!=="mathml"&&sl(w)&&(r="mathml"),P||(q(w,x),Uo(t,!1)))};P&&(q(i,F),Uo(t,!0)),nl(t.props)?(t.el.__isMounted=!1,De(()=>{E(),delete t.el.__isMounted},s)):E()}else{if(nl(t.props)&&e.el.__isMounted===!1){De(()=>{cu.process(e,t,i,n,o,s,r,a,l,u)},s);return}t.el=e.el,t.targetStart=e.targetStart;const S=t.anchor=e.anchor,F=t.target=e.target,q=t.targetAnchor=e.targetAnchor,E=Vn(e.props),w=E?i:F,x=E?S:q;if(r==="svg"||ol(F)?r="svg":(r==="mathml"||sl(F))&&(r="mathml"),b?(p(e.dynamicChildren,b,w,o,s,r,a),ba(e,t,!0)):l||h(e,t,w,x,o,s,r,a,!1),P)E?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Oo(t,i,S,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const B=t.target=yr(t.props,y);B&&Oo(t,B,null,u,0)}else E&&Oo(t,F,q,u,1);Uo(t,P)}},remove(e,t,i,{um:n,o:{remove:o}},s){const{shapeFlag:r,children:a,anchor:l,targetStart:u,targetAnchor:c,target:h,props:p}=e;if(h&&(o(u),o(c)),s&&o(l),r&16){const d=s||!Vn(p);for(let y=0;y<a.length;y++){const v=a[y];n(v,t,i,d,!!v.dynamicChildren)}}},move:Oo,hydrate:of};function Oo(e,t,i,{o:{insert:n},m:o},s=2){s===0&&n(e.targetAnchor,t,i);const{el:r,anchor:a,shapeFlag:l,children:u,props:c}=e,h=s===2;if(h&&n(r,t,i),(!h||Vn(c))&&l&16)for(let p=0;p<u.length;p++)o(u[p],t,i,2);h&&n(a,t,i)}function of(e,t,i,n,o,s,{o:{nextSibling:r,parentNode:a,querySelector:l,insert:u,createText:c}},h){function p(v,_,P,k){_.anchor=h(r(v),_,a(v),i,n,o,s),_.targetStart=P,_.targetAnchor=k}const d=t.target=yr(t.props,l),y=Vn(t.props);if(d){const v=d._lpa||d.firstChild;if(t.shapeFlag&16)if(y)p(e,t,v,v&&r(v));else{t.anchor=r(e);let _=v;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")t.targetStart=_;else if(_.data==="teleport anchor"){t.targetAnchor=_,d._lpa=t.targetAnchor&&r(t.targetAnchor);break}}_=r(_)}t.targetAnchor||uu(d,t,c,u),h(v&&r(v),t,d,i,n,o,s)}Uo(t,y)}else y&&t.shapeFlag&16&&p(e,t,e,r(e));return t.anchor&&r(t.anchor)}const sf=cu;function Uo(e,t){const i=e.ctx;if(i&&i.ut){let n,o;for(t?(n=e.el,o=e.anchor):(n=e.targetStart,o=e.targetAnchor);n&&n!==o;)n.nodeType===1&&n.setAttribute("data-v-owner",i.uid),n=n.nextSibling;i.ut()}}function uu(e,t,i,n){const o=t.targetStart=i(""),s=t.targetAnchor=i("");return o[au]=s,e&&(n(o,e),n(s,e)),s}const jt=Symbol("_leaveCb"),Mo=Symbol("_enterCb");function la(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rn(()=>{e.isMounted=!0}),Ds(()=>{e.isUnmounting=!0}),e}const Tt=[Function,Array],ca={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},hu=e=>{const t=e.subTree;return t.component?hu(t.component):t},rf={name:"BaseTransition",props:ca,setup(e,{slots:t}){const i=ht(),n=la();return()=>{const o=t.default&&Ns(t.default(),!0);if(!o||!o.length)return;const s=pu(o),r=ce(e),{mode:a}=r;if(n.isLeaving)return er(s);const l=rl(s);if(!l)return er(s);let u=gn(l,r,n,i,h=>u=h);l.type!==Me&&Zt(l,u);let c=i.subTree&&rl(i.subTree);if(c&&c.type!==Me&&!xt(c,l)&&hu(i).type!==Me){let h=gn(c,r,n,i);if(Zt(c,h),a==="out-in"&&l.type!==Me)return n.isLeaving=!0,h.afterLeave=()=>{n.isLeaving=!1,i.job.flags&8||i.update(),delete h.afterLeave,c=void 0},er(s);a==="in-out"&&l.type!==Me?h.delayLeave=(p,d,y)=>{const v=fu(n,c);v[String(c.key)]=c,p[jt]=()=>{d(),p[jt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function pu(e){let t=e[0];if(e.length>1){for(const i of e)if(i.type!==Me){t=i;break}}return t}const du=rf;function fu(e,t){const{leavingVNodes:i}=e;let n=i.get(t.type);return n||(n=Object.create(null),i.set(t.type,n)),n}function gn(e,t,i,n,o){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:p,onLeave:d,onAfterLeave:y,onLeaveCancelled:v,onBeforeAppear:_,onAppear:P,onAfterAppear:k,onAppearCancelled:m}=t,b=String(e.key),S=fu(i,e),F=(w,x)=>{w&&It(w,n,9,x)},q=(w,x)=>{const B=x[1];F(w,x),H(w)?w.every(A=>A.length<=1)&&B():w.length<=1&&B()},E={mode:r,persisted:a,beforeEnter(w){let x=l;if(!i.isMounted)if(s)x=_||l;else return;w[jt]&&w[jt](!0);const B=S[b];B&&xt(e,B)&&B.el[jt]&&B.el[jt](),F(x,[w])},enter(w){let x=u,B=c,A=h;if(!i.isMounted)if(s)x=P||u,B=k||c,A=m||h;else return;let z=!1;const K=w[Mo]=Z=>{z||(z=!0,Z?F(A,[w]):F(B,[w]),E.delayedLeave&&E.delayedLeave(),w[Mo]=void 0)};x?q(x,[w,K]):K()},leave(w,x){const B=String(e.key);if(w[Mo]&&w[Mo](!0),i.isUnmounting)return x();F(p,[w]);let A=!1;const z=w[jt]=K=>{A||(A=!0,x(),K?F(v,[w]):F(y,[w]),w[jt]=void 0,S[B]===e&&delete S[B])};S[B]=e,d?q(d,[w,z]):z()},clone(w){const x=gn(w,t,i,n,o);return o&&o(x),x}};return E}function er(e){if(bo(e))return e=Dt(e),e.children=null,e}function rl(e){if(!bo(e))return lu(e.type)&&e.children?pu(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:i}=e;if(i){if(t&16)return i[0];if(t&32&&ee(i.default))return i.default()}}function Zt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Zt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ns(e,t=!1,i){let n=[],o=0;for(let s=0;s<e.length;s++){let r=e[s];const a=i==null?r.key:String(i)+String(r.key!=null?r.key:s);r.type===Oe?(r.patchFlag&128&&o++,n=n.concat(Ns(r.children,t,a))):(t||r.type!==Me)&&n.push(a!=null?Dt(r,{key:a}):r)}if(o>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Pt(e,t){return ee(e)?le({name:e.name},t,{setup:e}):e}function af(){const e=ht();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function ua(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function lf(e){const t=ht(),i=sa(null);if(t){const o=t.refs===ae?t.refs={}:t.refs;Object.defineProperty(o,e,{enumerable:!0,get:()=>i.value,set:s=>i.value=s})}return i}const ns=new WeakMap;function fn(e,t,i,n,o=!1){if(H(e)){e.forEach((y,v)=>fn(y,t&&(H(t)?t[v]:t),i,n,o));return}if(fi(n)&&!o){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&fn(e,t,i,n.component.subTree);return}const s=n.shapeFlag&4?So(n.component):n.el,r=o?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===ae?a.refs={}:a.refs,h=a.setupState,p=ce(h),d=h===ae?an:y=>pe(p,y);if(u!=null&&u!==l){if(al(t),ie(u))c[u]=null,d(u)&&(h[u]=null);else if(Pe(u)){u.value=null;const y=t;y.k&&(c[y.k]=null)}}if(ee(l))Cn(l,a,12,[r,c]);else{const y=ie(l),v=Pe(l);if(y||v){const _=()=>{if(e.f){const P=y?d(l)?h[l]:c[l]:l.value;if(o)H(P)&&Yr(P,s);else if(H(P))P.includes(s)||P.push(s);else if(y)c[l]=[s],d(l)&&(h[l]=c[l]);else{const k=[s];l.value=k,e.k&&(c[e.k]=k)}}else y?(c[l]=r,d(l)&&(h[l]=r)):v&&(l.value=r,e.k&&(c[e.k]=r))};if(r){const P=()=>{_(),ns.delete(e)};P.id=-1,ns.set(e,P),De(P,i)}else al(e),_()}}}function al(e){const t=ns.get(e);t&&(t.flags|=8,ns.delete(e))}let ll=!1;const Ui=()=>{ll||(console.error("Hydration completed but contains mismatches."),ll=!0)},cf=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",uf=e=>e.namespaceURI.includes("MathML"),No=e=>{if(e.nodeType===1){if(cf(e))return"svg";if(uf(e))return"mathml"}},ln=e=>e.nodeType===8;function hf(e){const{mt:t,p:i,o:{patchProp:n,createText:o,nextSibling:s,parentNode:r,remove:a,insert:l,createComment:u}}=e,c=(m,b)=>{if(!b.hasChildNodes()){i(null,m,b),is(),b._vnode=m;return}h(b.firstChild,m,null,null,null),is(),b._vnode=m},h=(m,b,S,F,q,E=!1)=>{E=E||!!b.dynamicChildren;const w=ln(m)&&m.data==="[",x=()=>v(m,b,S,F,q,w),{type:B,ref:A,shapeFlag:z,patchFlag:K}=b;let Z=m.nodeType;b.el=m,K===-2&&(E=!1,b.dynamicChildren=null);let U=null;switch(B){case mi:Z!==3?b.children===""?(l(b.el=o(""),r(m),m),U=m):U=x():(m.data!==b.children&&(Ui(),m.data=b.children),U=s(m));break;case Me:k(m)?(U=s(m),P(b.el=m.content.firstChild,m,S)):Z!==8||w?U=x():U=s(m);break;case Ci:if(w&&(m=s(m),Z=m.nodeType),Z===1||Z===3){U=m;const Y=!b.children.length;for(let $=0;$<b.staticCount;$++)Y&&(b.children+=U.nodeType===1?U.outerHTML:U.data),$===b.staticCount-1&&(b.anchor=U),U=s(U);return w?s(U):U}else x();break;case Oe:w?U=y(m,b,S,F,q,E):U=x();break;default:if(z&1)(Z!==1||b.type.toLowerCase()!==m.tagName.toLowerCase())&&!k(m)?U=x():U=p(m,b,S,F,q,E);else if(z&6){b.slotScopeIds=q;const Y=r(m);if(w?U=_(m):ln(m)&&m.data==="teleport start"?U=_(m,m.data,"teleport end"):U=s(m),t(b,Y,null,S,F,No(Y),E),fi(b)&&!b.type.__asyncResolved){let $;w?($=fe(Oe),$.anchor=U?U.previousSibling:Y.lastChild):$=m.nodeType===3?wa(""):fe("div"),$.el=m,b.component.subTree=$}}else z&64?Z!==8?U=x():U=b.type.hydrate(m,b,S,F,q,E,e,d):z&128&&(U=b.type.hydrate(m,b,S,F,No(r(m)),q,E,e,h))}return A!=null&&fn(A,null,F,b),U},p=(m,b,S,F,q,E)=>{E=E||!!b.dynamicChildren;const{type:w,props:x,patchFlag:B,shapeFlag:A,dirs:z,transition:K}=b,Z=w==="input"||w==="option";if(Z||B!==-1){z&&Nt(b,null,S,"created");let U=!1;if(k(m)){U=Bu(null,K)&&S&&S.vnode.props&&S.vnode.props.appear;const $=m.content.firstChild;if(U){const ve=$.getAttribute("class");ve&&($.$cls=ve),K.beforeEnter($)}P($,m,S),b.el=m=$}if(A&16&&!(x&&(x.innerHTML||x.textContent))){let $=d(m.firstChild,b,m,S,F,q,E);for(;$;){Lo(m,1)||Ui();const ve=$;$=$.nextSibling,a(ve)}}else if(A&8){let $=b.children;$[0]===`
`&&(m.tagName==="PRE"||m.tagName==="TEXTAREA")&&($=$.slice(1)),m.textContent!==$&&(Lo(m,0)||Ui(),m.textContent=b.children)}if(x){if(Z||!E||B&48){const $=m.tagName.includes("-");for(const ve in x)(Z&&(ve.endsWith("value")||ve==="indeterminate")||Li(ve)&&!di(ve)||ve[0]==="."||$)&&n(m,ve,null,x[ve],void 0,S)}else if(x.onClick)n(m,"onClick",null,x.onClick,void 0,S);else if(B&4&&Lt(x.style))for(const $ in x.style)x.style[$]}let Y;(Y=x&&x.onVnodeBeforeMount)&&rt(Y,S,b),z&&Nt(b,null,S,"beforeMount"),((Y=x&&x.onVnodeMounted)||z||U)&&Yu(()=>{Y&&rt(Y,S,b),U&&K.enter(m),z&&Nt(b,null,S,"mounted")},F)}return m.nextSibling},d=(m,b,S,F,q,E,w)=>{w=w||!!b.dynamicChildren;const x=b.children,B=x.length;for(let A=0;A<B;A++){const z=w?x[A]:x[A]=at(x[A]),K=z.type===mi;m?(K&&!w&&A+1<B&&at(x[A+1]).type===mi&&(l(o(m.data.slice(z.children.length)),S,s(m)),m.data=z.children),m=h(m,z,F,q,E,w)):K&&!z.children?l(z.el=o(""),S):(Lo(S,1)||Ui(),i(null,z,S,null,F,q,No(S),E))}return m},y=(m,b,S,F,q,E)=>{const{slotScopeIds:w}=b;w&&(q=q?q.concat(w):w);const x=r(m),B=d(s(m),b,x,S,F,q,E);return B&&ln(B)&&B.data==="]"?s(b.anchor=B):(Ui(),l(b.anchor=u("]"),x,B),B)},v=(m,b,S,F,q,E)=>{if(Lo(m.parentElement,1)||Ui(),b.el=null,E){const B=_(m);for(;;){const A=s(m);if(A&&A!==B)a(A);else break}}const w=s(m),x=r(m);return a(m),i(null,b,x,w,S,F,No(x),q),S&&(S.vnode.el=b.el,zs(S,b.el)),w},_=(m,b="[",S="]")=>{let F=0;for(;m;)if(m=s(m),m&&ln(m)&&(m.data===b&&F++,m.data===S)){if(F===0)return s(m);F--}return m},P=(m,b,S)=>{const F=b.parentNode;F&&F.replaceChild(m,b);let q=S;for(;q;)q.vnode.el===b&&(q.vnode.el=q.subTree.el=m),q=q.parent},k=m=>m.nodeType===1&&m.tagName==="TEMPLATE";return[c,h]}const cl="data-allow-mismatch",pf={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Lo(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(cl);)e=e.parentElement;const i=e&&e.getAttribute(cl);if(i==null)return!1;if(i==="")return!0;{const n=i.split(",");return t===0&&n.includes("children")?!0:n.includes(pf[t])}}const df=Is().requestIdleCallback||(e=>setTimeout(e,1)),ff=Is().cancelIdleCallback||(e=>clearTimeout(e)),mf=(e=1e4)=>t=>{const i=df(t,{timeout:e});return()=>ff(i)};function gf(e){const{top:t,left:i,bottom:n,right:o}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:r}=window;return(t>0&&t<s||n>0&&n<s)&&(i>0&&i<r||o>0&&o<r)}const yf=e=>(t,i)=>{const n=new IntersectionObserver(o=>{for(const s of o)if(s.isIntersecting){n.disconnect(),t();break}},e);return i(o=>{if(o instanceof Element){if(gf(o))return t(),n.disconnect(),!1;n.observe(o)}}),()=>n.disconnect()},vf=e=>t=>{if(e){const i=matchMedia(e);if(i.matches)t();else return i.addEventListener("change",t,{once:!0}),()=>i.removeEventListener("change",t)}},bf=(e=[])=>(t,i)=>{ie(e)&&(e=[e]);let n=!1;const o=r=>{n||(n=!0,s(),t(),r.target.dispatchEvent(new r.constructor(r.type,r)))},s=()=>{i(r=>{for(const a of e)r.removeEventListener(a,o)})};return i(r=>{for(const a of e)r.addEventListener(a,o,{once:!0})}),s};function wf(e,t){if(ln(e)&&e.data==="["){let i=1,n=e.nextSibling;for(;n;){if(n.nodeType===1){if(t(n)===!1)break}else if(ln(n))if(n.data==="]"){if(--i===0)break}else n.data==="["&&i++;n=n.nextSibling}}else t(e)}const fi=e=>!!e.type.__asyncLoader;function Tf(e){ee(e)&&(e={loader:e});const{loader:t,loadingComponent:i,errorComponent:n,delay:o=200,hydrate:s,timeout:r,suspensible:a=!0,onError:l}=e;let u=null,c,h=0;const p=()=>(h++,u=null,d()),d=()=>{let y;return u||(y=u=t().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((_,P)=>{l(v,()=>_(p()),()=>P(v),h+1)});throw v}).then(v=>y!==u&&u?u:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),c=v,v)))};return Pt({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(y,v,_){let P=!1;(v.bu||(v.bu=[])).push(()=>P=!0);const k=()=>{P||_()},m=s?()=>{const b=s(k,S=>wf(y,S));b&&(v.bum||(v.bum=[])).push(b)}:k;c?m():d().then(()=>!v.isUnmounted&&m())},get __asyncResolved(){return c},setup(){const y=Ue;if(ua(y),c)return()=>tr(c,y);const v=m=>{u=null,qi(m,y,13,!n)};if(a&&y.suspense||yn)return d().then(m=>()=>tr(m,y)).catch(m=>(v(m),()=>n?fe(n,{error:m}):null));const _=he(!1),P=he(),k=he(!!o);return o&&setTimeout(()=>{k.value=!1},o),r!=null&&setTimeout(()=>{if(!_.value&&!P.value){const m=new Error(`Async component timed out after ${r}ms.`);v(m),P.value=m}},r),d().then(()=>{_.value=!0,y.parent&&bo(y.parent.vnode)&&y.parent.update()}).catch(m=>{v(m),P.value=m}),()=>{if(_.value&&c)return tr(c,y);if(P.value&&n)return fe(n,{error:P.value});if(i&&!k.value)return fe(i)}}})}function tr(e,t){const{ref:i,props:n,children:o,ce:s}=t.vnode,r=fe(e,n,o);return r.ref=i,r.ce=s,delete t.vnode.ce,r}const bo=e=>e.type.__isKeepAlive,kf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const i=ht(),n=i.ctx;if(!n.renderer)return()=>{const k=t.default&&t.default();return k&&k.length===1?k[0]:k};const o=new Map,s=new Set;let r=null;const a=i.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:h}}}=n,p=h("div");n.activate=(k,m,b,S,F)=>{const q=k.component;u(k,m,b,0,a),l(q.vnode,k,m,b,q,a,S,k.slotScopeIds,F),De(()=>{q.isDeactivated=!1,q.a&&pn(q.a);const E=k.props&&k.props.onVnodeMounted;E&&rt(E,q.parent,k)},a)},n.deactivate=k=>{const m=k.component;ss(m.m),ss(m.a),u(k,p,null,1,a),De(()=>{m.da&&pn(m.da);const b=k.props&&k.props.onVnodeUnmounted;b&&rt(b,m.parent,k),m.isDeactivated=!0},a)};function d(k){ir(k),c(k,i,a,!0)}function y(k){o.forEach((m,b)=>{const S=_r(m.type);S&&!k(S)&&v(b)})}function v(k){const m=o.get(k);m&&(!r||!xt(m,r))?d(m):r&&ir(r),o.delete(k),s.delete(k)}$t(()=>[e.include,e.exclude],([k,m])=>{k&&y(b=>zn(k,b)),m&&y(b=>!zn(m,b))},{flush:"post",deep:!0});let _=null;const P=()=>{_!=null&&(rs(i.subTree.type)?De(()=>{o.set(_,Fo(i.subTree))},i.subTree.suspense):o.set(_,Fo(i.subTree)))};return Rn(P),Fs(P),Ds(()=>{o.forEach(k=>{const{subTree:m,suspense:b}=i,S=Fo(m);if(k.type===S.type&&k.key===S.key){ir(S);const F=S.component.da;F&&De(F,b);return}d(k)})}),()=>{if(_=null,!t.default)return r=null;const k=t.default(),m=k[0];if(k.length>1)return r=null,k;if(!Xt(m)||!(m.shapeFlag&4)&&!(m.shapeFlag&128))return r=null,m;let b=Fo(m);if(b.type===Me)return r=null,b;const S=b.type,F=_r(fi(b)?b.type.__asyncResolved||{}:S),{include:q,exclude:E,max:w}=e;if(q&&(!F||!zn(q,F))||E&&F&&zn(E,F))return b.shapeFlag&=-257,r=b,m;const x=b.key==null?S:b.key,B=o.get(x);return b.el&&(b=Dt(b),m.shapeFlag&128&&(m.ssContent=b)),_=x,B?(b.el=B.el,b.component=B.component,b.transition&&Zt(b,b.transition),b.shapeFlag|=512,s.delete(x),s.add(x)):(s.add(x),w&&s.size>parseInt(w,10)&&v(s.values().next().value)),b.shapeFlag|=256,r=b,rs(m.type)?m:b}}},Sf=kf;function zn(e,t){return H(e)?e.some(i=>zn(i,t)):ie(e)?e.split(",").includes(t):zp(e)?(e.lastIndex=0,e.test(t)):!1}function mu(e,t){yu(e,"a",t)}function gu(e,t){yu(e,"da",t)}function yu(e,t,i=Ue){const n=e.__wdc||(e.__wdc=()=>{let o=i;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ls(t,n,i),i){let o=i.parent;for(;o&&o.parent;)bo(o.parent.vnode)&&Af(n,t,i,o),o=o.parent}}function Af(e,t,i,n){const o=Ls(t,e,n,!0);wo(()=>{Yr(n[t],o)},i)}function ir(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Fo(e){return e.shapeFlag&128?e.ssContent:e}function Ls(e,t,i=Ue,n=!1){if(i){const o=i[e]||(i[e]=[]),s=t.__weh||(t.__weh=(...r)=>{Kt();const a=Mi(i),l=It(t,i,e,r);return a(),Jt(),l});return n?o.unshift(s):o.push(s),s}}const ei=e=>(t,i=Ue)=>{(!yn||e==="sp")&&Ls(e,(...n)=>t(...n),i)},vu=ei("bm"),Rn=ei("m"),ha=ei("bu"),Fs=ei("u"),Ds=ei("bum"),wo=ei("um"),bu=ei("sp"),wu=ei("rtg"),Tu=ei("rtc");function ku(e,t=Ue){Ls("ec",e,t)}const pa="components",If="directives";function To(e,t){return fa(pa,e,!0,t)||e}const Su=Symbol.for("v-ndc");function da(e){return ie(e)?fa(pa,e,!1)||e:e||Su}function Pf(e){return fa(If,e)}function fa(e,t,i=!0,n=!1){const o=je||Ue;if(o){const s=o.type;if(e===pa){const a=_r(s,!1);if(a&&(a===t||a===Se(t)||a===Di(Se(t))))return s}const r=ul(o[e]||s[e],t)||ul(o.appContext[e],t);return!r&&n?s:r}}function ul(e,t){return e&&(e[t]||e[Se(t)]||e[Di(Se(t))])}function qs(e,t,i,n){let o;const s=i&&i[n],r=H(e);if(r||ie(e)){const a=r&&Lt(e);let l=!1,u=!1;a&&(l=!yt(e),u=Qt(e),e=_s(e)),o=new Array(e.length);for(let c=0,h=e.length;c<h;c++)o[c]=t(l?u?Xo(ze(e[c])):ze(e[c]):e[c],c,void 0,s&&s[c])}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,s&&s[a])}else if(ye(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,s&&s[l]));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];o[l]=t(e[c],c,l,s&&s[l])}}else o=[];return i&&(i[n]=o),o}function xf(e,t){for(let i=0;i<t.length;i++){const n=t[i];if(H(n))for(let o=0;o<n.length;o++)e[n[o].name]=n[o].fn;else n&&(e[n.name]=n.key?(...o)=>{const s=n.fn(...o);return s&&(s.key=n.key),s}:n.fn)}return e}function _f(e,t,i={},n,o){if(je.ce||je.parent&&fi(je.parent)&&je.parent.ce)return t!=="default"&&(i.name=t),ke(),Ft(Oe,null,[fe("slot",i,n&&n())],64);let s=e[t];s&&s._c&&(s._d=!1),ke();const r=s&&ma(s(i)),a=i.key||r&&r.key,l=Ft(Oe,{key:(a&&!ut(a)?a:`_${t}`)+(!r&&n?"_fb":"")},r||(n?n():[]),r&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function ma(e){return e.some(t=>Xt(t)?!(t.type===Me||t.type===Oe&&!ma(t.children)):!0)?e:null}function Cf(e,t){const i={};for(const n in e)i[t&&/[A-Z]/.test(n)?`on:${n}`:hn(n)]=e[n];return i}const vr=e=>e?th(e)?So(e):vr(e.parent):null,Hn=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vr(e.parent),$root:e=>vr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ga(e),$forceUpdate:e=>e.f||(e.f=()=>{aa(e.update)}),$nextTick:e=>e.n||(e.n=En.bind(e.proxy)),$watch:e=>rm.bind(e)}),nr=(e,t)=>e!==ae&&!e.__isScriptSetup&&pe(e,t),br={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:i,setupState:n,data:o,props:s,accessCache:r,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const d=r[t];if(d!==void 0)switch(d){case 1:return n[t];case 2:return o[t];case 4:return i[t];case 3:return s[t]}else{if(nr(n,t))return r[t]=1,n[t];if(o!==ae&&pe(o,t))return r[t]=2,o[t];if((u=e.propsOptions[0])&&pe(u,t))return r[t]=3,s[t];if(i!==ae&&pe(i,t))return r[t]=4,i[t];wr&&(r[t]=0)}}const c=Hn[t];let h,p;if(c)return t==="$attrs"&&Ze(e.attrs,"get",""),c(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(i!==ae&&pe(i,t))return r[t]=4,i[t];if(p=l.config.globalProperties,pe(p,t))return p[t]},set({_:e},t,i){const{data:n,setupState:o,ctx:s}=e;return nr(o,t)?(o[t]=i,!0):n!==ae&&pe(n,t)?(n[t]=i,!0):pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=i,!0)},has({_:{data:e,setupState:t,accessCache:i,ctx:n,appContext:o,propsOptions:s,type:r}},a){let l,u;return!!(i[a]||e!==ae&&a[0]!=="$"&&pe(e,a)||nr(t,a)||(l=s[0])&&pe(l,a)||pe(n,a)||pe(Hn,a)||pe(o.config.globalProperties,a)||(u=r.__cssModules)&&u[a])},defineProperty(e,t,i){return i.get!=null?e._.accessCache[t]=0:pe(i,"value")&&this.set(e,t,i.value,null),Reflect.defineProperty(e,t,i)}},Ef=le({},br,{get(e,t){if(t!==Symbol.unscopables)return br.get(e,t,e)},has(e,t){return t[0]!=="_"&&!$p(t)}});function Rf(){return null}function Of(){return null}function Mf(e){}function Nf(e){}function Lf(){return null}function Ff(){}function Df(e,t){return null}function qf(){return Au().slots}function Bf(){return Au().attrs}function Au(e){const t=ht();return t.setupContext||(t.setupContext=sh(t))}function so(e){return H(e)?e.reduce((t,i)=>(t[i]=null,t),{}):e}function zf(e,t){const i=so(e);for(const n in t){if(n.startsWith("__skip"))continue;let o=i[n];o?H(o)||ee(o)?o=i[n]={type:o,default:t[n]}:o.default=t[n]:o===null&&(o=i[n]={default:t[n]}),o&&t[`__skip_${n}`]&&(o.skipFactory=!0)}return i}function Uf(e,t){return!e||!t?e||t:H(e)&&H(t)?e.concat(t):le({},so(e),so(t))}function Wf(e,t){const i={};for(const n in e)t.includes(n)||Object.defineProperty(i,n,{enumerable:!0,get:()=>e[n]});return i}function jf(e){const t=ht();let i=e();return Ir(),Kr(i)&&(i=i.catch(n=>{throw Mi(t),n})),[i,()=>Mi(t)]}let wr=!0;function Vf(e){const t=ga(e),i=e.proxy,n=e.ctx;wr=!1,t.beforeCreate&&hl(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:p,beforeUpdate:d,updated:y,activated:v,deactivated:_,beforeDestroy:P,beforeUnmount:k,destroyed:m,unmounted:b,render:S,renderTracked:F,renderTriggered:q,errorCaptured:E,serverPrefetch:w,expose:x,inheritAttrs:B,components:A,directives:z,filters:K}=t;if(u&&Hf(u,n,null),r)for(const Y in r){const $=r[Y];ee($)&&(n[Y]=$.bind(i))}if(o){const Y=o.call(i,i);ye(Y)&&(e.data=_n(Y))}if(wr=!0,s)for(const Y in s){const $=s[Y],ve=ee($)?$.bind(i,i):ee($.get)?$.get.bind(i,i):Ve,He=!ee($)&&ee($.set)?$.set.bind(i):Ve,Ge=We({get:ve,set:He});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:$e=>Ge.value=$e})}if(a)for(const Y in a)Iu(a[Y],n,i,Y);if(l){const Y=ee(l)?l.call(i):l;Reflect.ownKeys(Y).forEach($=>{Gn($,Y[$])})}c&&hl(c,e,"c");function U(Y,$){H($)?$.forEach(ve=>Y(ve.bind(i))):$&&Y($.bind(i))}if(U(vu,h),U(Rn,p),U(ha,d),U(Fs,y),U(mu,v),U(gu,_),U(ku,E),U(Tu,F),U(wu,q),U(Ds,k),U(wo,b),U(bu,w),H(x))if(x.length){const Y=e.exposed||(e.exposed={});x.forEach($=>{Object.defineProperty(Y,$,{get:()=>i[$],set:ve=>i[$]=ve,enumerable:!0})})}else e.exposed||(e.exposed={});S&&e.render===Ve&&(e.render=S),B!=null&&(e.inheritAttrs=B),A&&(e.components=A),z&&(e.directives=z),w&&ua(e)}function Hf(e,t,i=Ve){H(e)&&(e=Tr(e));for(const n in e){const o=e[n];let s;ye(o)?"default"in o?s=vt(o.from||n,o.default,!0):s=vt(o.from||n):s=vt(o),Pe(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[n]=s}}function hl(e,t,i){It(H(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,i)}function Iu(e,t,i,n){let o=n.includes(".")?Vu(i,n):()=>i[n];if(ie(e)){const s=t[e];ee(s)&&$t(o,s)}else if(ee(e))$t(o,e.bind(i));else if(ye(e))if(H(e))e.forEach(s=>Iu(s,t,i,n));else{const s=ee(e.handler)?e.handler.bind(i):t[e.handler];ee(s)&&$t(o,s,e)}}function ga(e){const t=e.type,{mixins:i,extends:n}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!i&&!n?l=t:(l={},o.length&&o.forEach(u=>os(l,u,r,!0)),os(l,t,r)),ye(t)&&s.set(t,l),l}function os(e,t,i,n=!1){const{mixins:o,extends:s}=t;s&&os(e,s,i,!0),o&&o.forEach(r=>os(e,r,i,!0));for(const r in t)if(!(n&&r==="expose")){const a=Gf[r]||i&&i[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const Gf={data:pl,props:dl,emits:dl,methods:Un,computed:Un,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Un,directives:Un,watch:Yf,provide:pl,inject:$f};function pl(e,t){return t?e?function(){return le(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function $f(e,t){return Un(Tr(e),Tr(t))}function Tr(e){if(H(e)){const t={};for(let i=0;i<e.length;i++)t[e[i]]=e[i];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Un(e,t){return e?le(Object.create(null),e,t):t}function dl(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:le(Object.create(null),so(e),so(t??{})):t}function Yf(e,t){if(!e)return t;if(!t)return e;const i=le(Object.create(null),e);for(const n in t)i[n]=tt(e[n],t[n]);return i}function Pu(){return{app:null,config:{isNativeTag:an,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kf=0;function Jf(e,t){return function(n,o=null){ee(n)||(n=le({},n)),o!=null&&!ye(o)&&(o=null);const s=Pu(),r=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Kf++,_component:n,_props:o,_container:null,_context:s,_instance:null,version:ah,get config(){return s.config},set config(c){},use(c,...h){return r.has(c)||(c&&ee(c.install)?(r.add(c),c.install(u,...h)):ee(c)&&(r.add(c),c(u,...h))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,h){return h?(s.components[c]=h,u):s.components[c]},directive(c,h){return h?(s.directives[c]=h,u):s.directives[c]},mount(c,h,p){if(!l){const d=u._ceVNode||fe(n,o);return d.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(d,c):e(d,c,p),l=!0,u._container=c,c.__vue_app__=u,So(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(It(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,h){return s.provides[c]=h,u},runWithContext(c){const h=_i;_i=u;try{return c()}finally{_i=h}}};return u}}let _i=null;function Gn(e,t){if(Ue){let i=Ue.provides;const n=Ue.parent&&Ue.parent.provides;n===i&&(i=Ue.provides=Object.create(n)),i[e]=t}}function vt(e,t,i=!1){const n=ht();if(n||_i){let o=_i?_i._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return i&&ee(t)?t.call(n&&n.proxy):t}}function xu(){return!!(ht()||_i)}const _u={},Cu=()=>Object.create(_u),Eu=e=>Object.getPrototypeOf(e)===_u;function Qf(e,t,i,n=!1){const o={},s=Cu();e.propsDefaults=Object.create(null),Ru(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);i?e.props=n?o:na(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Zf(e,t,i,n){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,a=ce(o),[l]=e.propsOptions;let u=!1;if((n||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let p=c[h];if(Bs(e.emitsOptions,p))continue;const d=t[p];if(l)if(pe(s,p))d!==s[p]&&(s[p]=d,u=!0);else{const y=Se(p);o[y]=kr(l,a,y,d,e,!1)}else d!==s[p]&&(s[p]=d,u=!0)}}}else{Ru(e,t,o,s)&&(u=!0);let c;for(const h in a)(!t||!pe(t,h)&&((c=lt(h))===h||!pe(t,c)))&&(l?i&&(i[h]!==void 0||i[c]!==void 0)&&(o[h]=kr(l,a,h,void 0,e,!0)):delete o[h]);if(s!==a)for(const h in s)(!t||!pe(t,h))&&(delete s[h],u=!0)}u&&Vt(e.attrs,"set","")}function Ru(e,t,i,n){const[o,s]=e.propsOptions;let r=!1,a;if(t)for(let l in t){if(di(l))continue;const u=t[l];let c;o&&pe(o,c=Se(l))?!s||!s.includes(c)?i[c]=u:(a||(a={}))[c]=u:Bs(e.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,r=!0)}if(s){const l=ce(i),u=a||ae;for(let c=0;c<s.length;c++){const h=s[c];i[h]=kr(o,l,h,u[h],e,!pe(u,h))}}return r}function kr(e,t,i,n,o,s){const r=e[i];if(r!=null){const a=pe(r,"default");if(a&&n===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&ee(l)){const{propsDefaults:u}=o;if(i in u)n=u[i];else{const c=Mi(o);n=u[i]=l.call(null,t),c()}}else n=l;o.ce&&o.ce._setProp(i,n)}r[0]&&(s&&!a?n=!1:r[1]&&(n===""||n===lt(i))&&(n=!0))}return n}const Xf=new WeakMap;function Ou(e,t,i=!1){const n=i?Xf:t.propsCache,o=n.get(e);if(o)return o;const s=e.props,r={},a=[];let l=!1;if(!ee(e)){const c=h=>{l=!0;const[p,d]=Ou(h,t,!0);le(r,p),d&&a.push(...d)};!i&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return ye(e)&&n.set(e,cn),cn;if(H(s))for(let c=0;c<s.length;c++){const h=Se(s[c]);fl(h)&&(r[h]=ae)}else if(s)for(const c in s){const h=Se(c);if(fl(h)){const p=s[c],d=r[h]=H(p)||ee(p)?{type:p}:le({},p),y=d.type;let v=!1,_=!0;if(H(y))for(let P=0;P<y.length;++P){const k=y[P],m=ee(k)&&k.name;if(m==="Boolean"){v=!0;break}else m==="String"&&(_=!1)}else v=ee(y)&&y.name==="Boolean";d[0]=v,d[1]=_,(v||pe(d,"default"))&&a.push(h)}}const u=[r,a];return ye(e)&&n.set(e,u),u}function fl(e){return e[0]!=="$"&&!di(e)}const ya=e=>e==="_"||e==="_ctx"||e==="$stable",va=e=>H(e)?e.map(at):[at(e)],em=(e,t,i)=>{if(t._n)return t;const n=vo((...o)=>va(t(...o)),i);return n._c=!1,n},Mu=(e,t,i)=>{const n=e._ctx;for(const o in e){if(ya(o))continue;const s=e[o];if(ee(s))t[o]=em(o,s,n);else if(s!=null){const r=va(s);t[o]=()=>r}}},Nu=(e,t)=>{const i=va(t);e.slots.default=()=>i},Lu=(e,t,i)=>{for(const n in t)(i||!ya(n))&&(e[n]=t[n])},tm=(e,t,i)=>{const n=e.slots=Cu();if(e.vnode.shapeFlag&32){const o=t._;o?(Lu(n,t,i),i&&Ec(n,"_",o,!0)):Mu(t,n)}else t&&Nu(e,t)},im=(e,t,i)=>{const{vnode:n,slots:o}=e;let s=!0,r=ae;if(n.shapeFlag&32){const a=t._;a?i&&a===1?s=!1:Lu(o,t,i):(s=!t.$stable,Mu(t,o)),r=t}else t&&(Nu(e,t),r={default:1});if(s)for(const a in o)!ya(a)&&r[a]==null&&delete o[a]},De=Yu;function Fu(e){return qu(e)}function Du(e){return qu(e,hf)}function qu(e,t){const i=Is();i.__VUE__=!0;const{insert:n,remove:o,patchProp:s,createElement:r,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:p,setScopeId:d=Ve,insertStaticContent:y}=e,v=(f,g,I,D=null,O=null,T=null,L=void 0,R=null,C=!!g.dynamicChildren)=>{if(f===g)return;f&&!xt(f,g)&&(D=N(f),$e(f,O,T,!0),f=null),g.patchFlag===-2&&(C=!1,g.dynamicChildren=null);const{type:M,ref:W,shapeFlag:j}=g;switch(M){case mi:_(f,g,I,D);break;case Me:P(f,g,I,D);break;case Ci:f==null&&k(g,I,D,L);break;case Oe:A(f,g,I,D,O,T,L,R,C);break;default:j&1?S(f,g,I,D,O,T,L,R,C):j&6?z(f,g,I,D,O,T,L,R,C):(j&64||j&128)&&M.process(f,g,I,D,O,T,L,R,C,J)}W!=null&&O?fn(W,f&&f.ref,T,g||f,!g):W==null&&f&&f.ref!=null&&fn(f.ref,null,T,f,!0)},_=(f,g,I,D)=>{if(f==null)n(g.el=a(g.children),I,D);else{const O=g.el=f.el;g.children!==f.children&&u(O,g.children)}},P=(f,g,I,D)=>{f==null?n(g.el=l(g.children||""),I,D):g.el=f.el},k=(f,g,I,D)=>{[f.el,f.anchor]=y(f.children,g,I,D,f.el,f.anchor)},m=({el:f,anchor:g},I,D)=>{let O;for(;f&&f!==g;)O=p(f),n(f,I,D),f=O;n(g,I,D)},b=({el:f,anchor:g})=>{let I;for(;f&&f!==g;)I=p(f),o(f),f=I;o(g)},S=(f,g,I,D,O,T,L,R,C)=>{g.type==="svg"?L="svg":g.type==="math"&&(L="mathml"),f==null?F(g,I,D,O,T,L,R,C):w(f,g,O,T,L,R,C)},F=(f,g,I,D,O,T,L,R)=>{let C,M;const{props:W,shapeFlag:j,transition:Q,dirs:te}=f;if(C=f.el=r(f.type,T,W&&W.is,W),j&8?c(C,f.children):j&16&&E(f.children,C,null,D,O,or(f,T),L,R),te&&Nt(f,null,D,"created"),q(C,f,f.scopeId,L,D),W){for(const ge in W)ge!=="value"&&!di(ge)&&s(C,ge,null,W[ge],T,D);"value"in W&&s(C,"value",null,W.value,T),(M=W.onVnodeBeforeMount)&&rt(M,D,f)}te&&Nt(f,null,D,"beforeMount");const se=Bu(O,Q);se&&Q.beforeEnter(C),n(C,g,I),((M=W&&W.onVnodeMounted)||se||te)&&De(()=>{M&&rt(M,D,f),se&&Q.enter(C),te&&Nt(f,null,D,"mounted")},O)},q=(f,g,I,D,O)=>{if(I&&d(f,I),D)for(let T=0;T<D.length;T++)d(f,D[T]);if(O){let T=O.subTree;if(g===T||rs(T.type)&&(T.ssContent===g||T.ssFallback===g)){const L=O.vnode;q(f,L,L.scopeId,L.slotScopeIds,O.parent)}}},E=(f,g,I,D,O,T,L,R,C=0)=>{for(let M=C;M<f.length;M++){const W=f[M]=R?ui(f[M]):at(f[M]);v(null,W,g,I,D,O,T,L,R)}},w=(f,g,I,D,O,T,L)=>{const R=g.el=f.el;let{patchFlag:C,dynamicChildren:M,dirs:W}=g;C|=f.patchFlag&16;const j=f.props||ae,Q=g.props||ae;let te;if(I&&wi(I,!1),(te=Q.onVnodeBeforeUpdate)&&rt(te,I,g,f),W&&Nt(g,f,I,"beforeUpdate"),I&&wi(I,!0),(j.innerHTML&&Q.innerHTML==null||j.textContent&&Q.textContent==null)&&c(R,""),M?x(f.dynamicChildren,M,R,I,D,or(g,O),T):L||$(f,g,R,null,I,D,or(g,O),T,!1),C>0){if(C&16)B(R,j,Q,I,O);else if(C&2&&j.class!==Q.class&&s(R,"class",null,Q.class,O),C&4&&s(R,"style",j.style,Q.style,O),C&8){const se=g.dynamicProps;for(let ge=0;ge<se.length;ge++){const ne=se[ge],Ce=j[ne],Le=Q[ne];(Le!==Ce||ne==="value")&&s(R,ne,Ce,Le,O,I)}}C&1&&f.children!==g.children&&c(R,g.children)}else!L&&M==null&&B(R,j,Q,I,O);((te=Q.onVnodeUpdated)||W)&&De(()=>{te&&rt(te,I,g,f),W&&Nt(g,f,I,"updated")},D)},x=(f,g,I,D,O,T,L)=>{for(let R=0;R<g.length;R++){const C=f[R],M=g[R],W=C.el&&(C.type===Oe||!xt(C,M)||C.shapeFlag&198)?h(C.el):I;v(C,M,W,null,D,O,T,L,!0)}},B=(f,g,I,D,O)=>{if(g!==I){if(g!==ae)for(const T in g)!di(T)&&!(T in I)&&s(f,T,g[T],null,O,D);for(const T in I){if(di(T))continue;const L=I[T],R=g[T];L!==R&&T!=="value"&&s(f,T,R,L,O,D)}"value"in I&&s(f,"value",g.value,I.value,O)}},A=(f,g,I,D,O,T,L,R,C)=>{const M=g.el=f?f.el:a(""),W=g.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:Q,slotScopeIds:te}=g;te&&(R=R?R.concat(te):te),f==null?(n(M,I,D),n(W,I,D),E(g.children||[],I,W,O,T,L,R,C)):j>0&&j&64&&Q&&f.dynamicChildren?(x(f.dynamicChildren,Q,I,O,T,L,R),(g.key!=null||O&&g===O.subTree)&&ba(f,g,!0)):$(f,g,I,W,O,T,L,R,C)},z=(f,g,I,D,O,T,L,R,C)=>{g.slotScopeIds=R,f==null?g.shapeFlag&512?O.ctx.activate(g,I,D,L,C):K(g,I,D,O,T,L,C):Z(f,g,C)},K=(f,g,I,D,O,T,L)=>{const R=f.component=eh(f,D,O);if(bo(f)&&(R.ctx.renderer=J),ih(R,!1,L),R.asyncDep){if(O&&O.registerDep(R,U,L),!f.el){const C=R.subTree=fe(Me);P(null,C,g,I),f.placeholder=C.el}}else U(R,f,g,I,O,T,L)},Z=(f,g,I)=>{const D=g.component=f.component;if(dm(f,g,I))if(D.asyncDep&&!D.asyncResolved){Y(D,g,I);return}else D.next=g,D.update();else g.el=f.el,D.vnode=g},U=(f,g,I,D,O,T,L)=>{const R=()=>{if(f.isMounted){let{next:j,bu:Q,u:te,parent:se,vnode:ge}=f;{const dt=zu(f);if(dt){j&&(j.el=ge.el,Y(f,j,L)),dt.asyncDep.then(()=>{f.isUnmounted||R()});return}}let ne=j,Ce;wi(f,!1),j?(j.el=ge.el,Y(f,j,L)):j=ge,Q&&pn(Q),(Ce=j.props&&j.props.onVnodeBeforeUpdate)&&rt(Ce,se,j,ge),wi(f,!0);const Le=Wo(f),pt=f.subTree;f.subTree=Le,v(pt,Le,h(pt.el),N(pt),f,O,T),j.el=Le.el,ne===null&&zs(f,Le.el),te&&De(te,O),(Ce=j.props&&j.props.onVnodeUpdated)&&De(()=>rt(Ce,se,j,ge),O)}else{let j;const{el:Q,props:te}=g,{bm:se,m:ge,parent:ne,root:Ce,type:Le}=f,pt=fi(g);if(wi(f,!1),se&&pn(se),!pt&&(j=te&&te.onVnodeBeforeMount)&&rt(j,ne,g),wi(f,!0),Q&&we){const dt=()=>{f.subTree=Wo(f),we(Q,f.subTree,f,O,null)};pt&&Le.__asyncHydrate?Le.__asyncHydrate(Q,f,dt):dt()}else{Ce.ce&&Ce.ce._def.shadowRoot!==!1&&Ce.ce._injectChildStyle(Le);const dt=f.subTree=Wo(f);v(null,dt,I,D,f,O,T),g.el=dt.el}if(ge&&De(ge,O),!pt&&(j=te&&te.onVnodeMounted)){const dt=g;De(()=>rt(j,ne,dt),O)}(g.shapeFlag&256||ne&&fi(ne.vnode)&&ne.vnode.shapeFlag&256)&&f.a&&De(f.a,O),f.isMounted=!0,g=I=D=null}};f.scope.on();const C=f.effect=new Xn(R);f.scope.off();const M=f.update=C.run.bind(C),W=f.job=C.runIfDirty.bind(C);W.i=f,W.id=f.uid,C.scheduler=()=>aa(W),wi(f,!0),M()},Y=(f,g,I)=>{g.component=f;const D=f.vnode.props;f.vnode=g,f.next=null,Zf(f,g.props,D,I),im(f,g.children,I),Kt(),il(f),Jt()},$=(f,g,I,D,O,T,L,R,C=!1)=>{const M=f&&f.children,W=f?f.shapeFlag:0,j=g.children,{patchFlag:Q,shapeFlag:te}=g;if(Q>0){if(Q&128){He(M,j,I,D,O,T,L,R,C);return}else if(Q&256){ve(M,j,I,D,O,T,L,R,C);return}}te&8?(W&16&&ot(M,O,T),j!==M&&c(I,j)):W&16?te&16?He(M,j,I,D,O,T,L,R,C):ot(M,O,T,!0):(W&8&&c(I,""),te&16&&E(j,I,D,O,T,L,R,C))},ve=(f,g,I,D,O,T,L,R,C)=>{f=f||cn,g=g||cn;const M=f.length,W=g.length,j=Math.min(M,W);let Q;for(Q=0;Q<j;Q++){const te=g[Q]=C?ui(g[Q]):at(g[Q]);v(f[Q],te,I,null,O,T,L,R,C)}M>W?ot(f,O,T,!0,!1,j):E(g,I,D,O,T,L,R,C,j)},He=(f,g,I,D,O,T,L,R,C)=>{let M=0;const W=g.length;let j=f.length-1,Q=W-1;for(;M<=j&&M<=Q;){const te=f[M],se=g[M]=C?ui(g[M]):at(g[M]);if(xt(te,se))v(te,se,I,null,O,T,L,R,C);else break;M++}for(;M<=j&&M<=Q;){const te=f[j],se=g[Q]=C?ui(g[Q]):at(g[Q]);if(xt(te,se))v(te,se,I,null,O,T,L,R,C);else break;j--,Q--}if(M>j){if(M<=Q){const te=Q+1,se=te<W?g[te].el:D;for(;M<=Q;)v(null,g[M]=C?ui(g[M]):at(g[M]),I,se,O,T,L,R,C),M++}}else if(M>Q)for(;M<=j;)$e(f[M],O,T,!0),M++;else{const te=M,se=M,ge=new Map;for(M=se;M<=Q;M++){const ft=g[M]=C?ui(g[M]):at(g[M]);ft.key!=null&&ge.set(ft.key,M)}let ne,Ce=0;const Le=Q-se+1;let pt=!1,dt=0;const On=new Array(Le);for(M=0;M<Le;M++)On[M]=0;for(M=te;M<=j;M++){const ft=f[M];if(Ce>=Le){$e(ft,O,T,!0);continue}let Rt;if(ft.key!=null)Rt=ge.get(ft.key);else for(ne=se;ne<=Q;ne++)if(On[ne-se]===0&&xt(ft,g[ne])){Rt=ne;break}Rt===void 0?$e(ft,O,T,!0):(On[Rt-se]=M+1,Rt>=dt?dt=Rt:pt=!0,v(ft,g[Rt],I,null,O,T,L,R,C),Ce++)}const Ya=pt?nm(On):cn;for(ne=Ya.length-1,M=Le-1;M>=0;M--){const ft=se+M,Rt=g[ft],Ka=g[ft+1],Ja=ft+1<W?Ka.el||Ka.placeholder:D;On[M]===0?v(null,Rt,I,Ja,O,T,L,R,C):pt&&(ne<0||M!==Ya[ne]?Ge(Rt,I,Ja,2):ne--)}}},Ge=(f,g,I,D,O=null)=>{const{el:T,type:L,transition:R,children:C,shapeFlag:M}=f;if(M&6){Ge(f.component.subTree,g,I,D);return}if(M&128){f.suspense.move(g,I,D);return}if(M&64){L.move(f,g,I,J);return}if(L===Oe){n(T,g,I);for(let j=0;j<C.length;j++)Ge(C[j],g,I,D);n(f.anchor,g,I);return}if(L===Ci){m(f,g,I);return}if(D!==2&&M&1&&R)if(D===0)R.beforeEnter(T),n(T,g,I),De(()=>R.enter(T),O);else{const{leave:j,delayLeave:Q,afterLeave:te}=R,se=()=>{f.ctx.isUnmounted?o(T):n(T,g,I)},ge=()=>{T._isLeaving&&T[jt](!0),j(T,()=>{se(),te&&te()})};Q?Q(T,se,ge):ge()}else n(T,g,I)},$e=(f,g,I,D=!1,O=!1)=>{const{type:T,props:L,ref:R,children:C,dynamicChildren:M,shapeFlag:W,patchFlag:j,dirs:Q,cacheIndex:te}=f;if(j===-2&&(O=!1),R!=null&&(Kt(),fn(R,null,I,f,!0),Jt()),te!=null&&(g.renderCache[te]=void 0),W&256){g.ctx.deactivate(f);return}const se=W&1&&Q,ge=!fi(f);let ne;if(ge&&(ne=L&&L.onVnodeBeforeUnmount)&&rt(ne,g,f),W&6)Bi(f.component,I,D);else{if(W&128){f.suspense.unmount(I,D);return}se&&Nt(f,null,g,"beforeUnmount"),W&64?f.type.remove(f,g,I,J,D):M&&!M.hasOnce&&(T!==Oe||j>0&&j&64)?ot(M,g,I,!1,!0):(T===Oe&&j&384||!O&&W&16)&&ot(C,g,I),D&&ti(f)}(ge&&(ne=L&&L.onVnodeUnmounted)||se)&&De(()=>{ne&&rt(ne,g,f),se&&Nt(f,null,g,"unmounted")},I)},ti=f=>{const{type:g,el:I,anchor:D,transition:O}=f;if(g===Oe){ii(I,D);return}if(g===Ci){b(f);return}const T=()=>{o(I),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(f.shapeFlag&1&&O&&!O.persisted){const{leave:L,delayLeave:R}=O,C=()=>L(I,T);R?R(f.el,T,C):C()}else T()},ii=(f,g)=>{let I;for(;f!==g;)I=p(f),o(f),f=I;o(g)},Bi=(f,g,I)=>{const{bum:D,scope:O,job:T,subTree:L,um:R,m:C,a:M}=f;ss(C),ss(M),D&&pn(D),O.stop(),T&&(T.flags|=8,$e(L,f,g,I)),R&&De(R,g),De(()=>{f.isUnmounted=!0},g)},ot=(f,g,I,D=!1,O=!1,T=0)=>{for(let L=T;L<f.length;L++)$e(f[L],g,I,D,O)},N=f=>{if(f.shapeFlag&6)return N(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=p(f.anchor||f.el),I=g&&g[au];return I?p(I):g};let G=!1;const V=(f,g,I)=>{f==null?g._vnode&&$e(g._vnode,null,null,!0):v(g._vnode||null,f,g,null,null,null,I),g._vnode=f,G||(G=!0,il(),is(),G=!1)},J={p:v,um:$e,m:Ge,r:ti,mt:K,mc:E,pc:$,pbc:x,n:N,o:e};let ue,we;return t&&([ue,we]=t(J)),{render:V,hydrate:ue,createApp:Jf(V,ue)}}function or({type:e,props:t},i){return i==="svg"&&e==="foreignObject"||i==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:i}function wi({effect:e,job:t},i){i?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Bu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ba(e,t,i=!1){const n=e.children,o=t.children;if(H(n)&&H(o))for(let s=0;s<n.length;s++){const r=n[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=ui(o[s]),a.el=r.el),!i&&a.patchFlag!==-2&&ba(r,a)),a.type===mi&&a.patchFlag!==-1&&(a.el=r.el),a.type===Me&&!a.el&&(a.el=r.el)}}function nm(e){const t=e.slice(),i=[0];let n,o,s,r,a;const l=e.length;for(n=0;n<l;n++){const u=e[n];if(u!==0){if(o=i[i.length-1],e[o]<u){t[n]=o,i.push(n);continue}for(s=0,r=i.length-1;s<r;)a=s+r>>1,e[i[a]]<u?s=a+1:r=a;u<e[i[s]]&&(s>0&&(t[n]=i[s-1]),i[s]=n)}}for(s=i.length,r=i[s-1];s-- >0;)i[s]=r,r=t[r];return i}function zu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zu(t)}function ss(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Uu=Symbol.for("v-scx"),Wu=()=>vt(Uu);function om(e,t){return ko(e,null,t)}function sm(e,t){return ko(e,null,{flush:"post"})}function ju(e,t){return ko(e,null,{flush:"sync"})}function $t(e,t,i){return ko(e,t,i)}function ko(e,t,i=ae){const{immediate:n,deep:o,flush:s,once:r}=i,a=le({},i),l=t&&n||!t&&s!=="post";let u;if(yn){if(s==="sync"){const d=Wu();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Ve,d.resume=Ve,d.pause=Ve,d}}const c=Ue;a.call=(d,y,v)=>It(d,c,y,v);let h=!1;s==="post"?a.scheduler=d=>{De(d,c&&c.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,y)=>{y?d():aa(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const p=Hd(e,t,a);return yn&&(u?u.push(p):l&&p()),p}function rm(e,t,i){const n=this.proxy,o=ie(e)?e.includes(".")?Vu(n,e):()=>n[e]:e.bind(n,n);let s;ee(t)?s=t:(s=t.handler,i=t);const r=Mi(this),a=ko(o,s.bind(n),i);return r(),a}function Vu(e,t){const i=t.split(".");return()=>{let n=e;for(let o=0;o<i.length&&n;o++)n=n[i[o]];return n}}function am(e,t,i=ae){const n=ht(),o=Se(t),s=lt(t),r=Hu(e,o),a=Zc((l,u)=>{let c,h=ae,p;return ju(()=>{const d=e[o];it(c,d)&&(c=d,u())}),{get(){return l(),i.get?i.get(c):c},set(d){const y=i.set?i.set(d):d;if(!it(y,c)&&!(h!==ae&&it(d,h)))return;const v=n.vnode.props;v&&(t in v||o in v||s in v)&&(`onUpdate:${t}`in v||`onUpdate:${o}`in v||`onUpdate:${s}`in v)||(c=d,u()),n.emit(`update:${t}`,y),it(d,y)&&it(d,h)&&!it(y,p)&&u(),h=d,p=y}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?r||ae:a,done:!1}:{done:!0}}}},a}const Hu=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Se(t)}Modifiers`]||e[`${lt(t)}Modifiers`];function lm(e,t,...i){if(e.isUnmounted)return;const n=e.vnode.props||ae;let o=i;const s=t.startsWith("update:"),r=s&&Hu(n,t.slice(7));r&&(r.trim&&(o=i.map(c=>ie(c)?c.trim():c)),r.number&&(o=i.map(Jo)));let a,l=n[a=hn(t)]||n[a=hn(Se(t))];!l&&s&&(l=n[a=hn(lt(t))]),l&&It(l,e,6,o);const u=n[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,It(u,e,6,o)}}const cm=new WeakMap;function Gu(e,t,i=!1){const n=i?cm:t.emitsCache,o=n.get(e);if(o!==void 0)return o;const s=e.emits;let r={},a=!1;if(!ee(e)){const l=u=>{const c=Gu(u,t,!0);c&&(a=!0,le(r,c))};!i&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(ye(e)&&n.set(e,null),null):(H(s)?s.forEach(l=>r[l]=null):le(r,s),ye(e)&&n.set(e,r),r)}function Bs(e,t){return!e||!Li(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,lt(t))||pe(e,t))}function Wo(e){const{type:t,vnode:i,proxy:n,withProxy:o,propsOptions:[s],slots:r,attrs:a,emit:l,render:u,renderCache:c,props:h,data:p,setupState:d,ctx:y,inheritAttrs:v}=e,_=oo(e);let P,k;try{if(i.shapeFlag&4){const b=o||n,S=b;P=at(u.call(S,b,c,h,d,p,y)),k=a}else{const b=t;P=at(b.length>1?b(h,{attrs:a,slots:r,emit:l}):b(h,null)),k=t.props?a:hm(a)}}catch(b){$n.length=0,qi(b,e,1),P=fe(Me)}let m=P;if(k&&v!==!1){const b=Object.keys(k),{shapeFlag:S}=m;b.length&&S&7&&(s&&b.some($r)&&(k=pm(k,s)),m=Dt(m,k,!1,!0))}return i.dirs&&(m=Dt(m,null,!1,!0),m.dirs=m.dirs?m.dirs.concat(i.dirs):i.dirs),i.transition&&Zt(m,i.transition),P=m,oo(_),P}function um(e,t=!0){let i;for(let n=0;n<e.length;n++){const o=e[n];if(Xt(o)){if(o.type!==Me||o.children==="v-if"){if(i)return;i=o}}else return}return i}const hm=e=>{let t;for(const i in e)(i==="class"||i==="style"||Li(i))&&((t||(t={}))[i]=e[i]);return t},pm=(e,t)=>{const i={};for(const n in e)(!$r(n)||!(n.slice(9)in t))&&(i[n]=e[n]);return i};function dm(e,t,i){const{props:n,children:o,component:s}=e,{props:r,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(i&&l>=0){if(l&1024)return!0;if(l&16)return n?ml(n,r,u):!!r;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const p=c[h];if(r[p]!==n[p]&&!Bs(u,p))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===r?!1:n?r?ml(n,r,u):!0:!!r;return!1}function ml(e,t,i){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const s=n[o];if(t[s]!==e[s]&&!Bs(i,s))return!0}return!1}function zs({vnode:e,parent:t},i){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=i,t=t.parent;else break}}const rs=e=>e.__isSuspense;let Sr=0;const fm={name:"Suspense",__isSuspense:!0,process(e,t,i,n,o,s,r,a,l,u){if(e==null)gm(t,i,n,o,s,r,a,l,u);else{if(s&&s.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}ym(e,t,i,n,o,r,a,l,u)}},hydrate:vm,normalize:bm},mm=fm;function ro(e,t){const i=e.props&&e.props[t];ee(i)&&i()}function gm(e,t,i,n,o,s,r,a,l){const{p:u,o:{createElement:c}}=l,h=c("div"),p=e.suspense=$u(e,o,n,t,h,i,s,r,a,l);u(null,p.pendingBranch=e.ssContent,h,null,n,p,s,r),p.deps>0?(ro(e,"onPending"),ro(e,"onFallback"),u(null,e.ssFallback,t,i,n,null,s,r),mn(p,e.ssFallback)):p.resolve(!1,!0)}function ym(e,t,i,n,o,s,r,a,{p:l,um:u,o:{createElement:c}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const p=t.ssContent,d=t.ssFallback,{activeBranch:y,pendingBranch:v,isInFallback:_,isHydrating:P}=h;if(v)h.pendingBranch=p,xt(v,p)?(l(v,p,h.hiddenContainer,null,o,h,s,r,a),h.deps<=0?h.resolve():_&&(P||(l(y,d,i,n,o,null,s,r,a),mn(h,d)))):(h.pendingId=Sr++,P?(h.isHydrating=!1,h.activeBranch=v):u(v,o,h),h.deps=0,h.effects.length=0,h.hiddenContainer=c("div"),_?(l(null,p,h.hiddenContainer,null,o,h,s,r,a),h.deps<=0?h.resolve():(l(y,d,i,n,o,null,s,r,a),mn(h,d))):y&&xt(y,p)?(l(y,p,i,n,o,h,s,r,a),h.resolve(!0)):(l(null,p,h.hiddenContainer,null,o,h,s,r,a),h.deps<=0&&h.resolve()));else if(y&&xt(y,p))l(y,p,i,n,o,h,s,r,a),mn(h,p);else if(ro(t,"onPending"),h.pendingBranch=p,p.shapeFlag&512?h.pendingId=p.component.suspenseId:h.pendingId=Sr++,l(null,p,h.hiddenContainer,null,o,h,s,r,a),h.deps<=0)h.resolve();else{const{timeout:k,pendingId:m}=h;k>0?setTimeout(()=>{h.pendingId===m&&h.fallback(d)},k):k===0&&h.fallback(d)}}function $u(e,t,i,n,o,s,r,a,l,u,c=!1){const{p:h,m:p,um:d,n:y,o:{parentNode:v,remove:_}}=u;let P;const k=wm(e);k&&t&&t.pendingBranch&&(P=t.pendingId,t.deps++);const m=e.props?Qo(e.props.timeout):void 0,b=s,S={vnode:e,parent:t,parentComponent:i,namespace:r,container:n,hiddenContainer:o,deps:0,pendingId:Sr++,timeout:typeof m=="number"?m:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(F=!1,q=!1){const{vnode:E,activeBranch:w,pendingBranch:x,pendingId:B,effects:A,parentComponent:z,container:K}=S;let Z=!1;S.isHydrating?S.isHydrating=!1:F||(Z=w&&x.transition&&x.transition.mode==="out-in",Z&&(w.transition.afterLeave=()=>{B===S.pendingId&&(p(x,K,s===b?y(w):s,0),io(A))}),w&&(v(w.el)===K&&(s=y(w)),d(w,z,S,!0)),Z||p(x,K,s,0)),mn(S,x),S.pendingBranch=null,S.isInFallback=!1;let U=S.parent,Y=!1;for(;U;){if(U.pendingBranch){U.effects.push(...A),Y=!0;break}U=U.parent}!Y&&!Z&&io(A),S.effects=[],k&&t&&t.pendingBranch&&P===t.pendingId&&(t.deps--,t.deps===0&&!q&&t.resolve()),ro(E,"onResolve")},fallback(F){if(!S.pendingBranch)return;const{vnode:q,activeBranch:E,parentComponent:w,container:x,namespace:B}=S;ro(q,"onFallback");const A=y(E),z=()=>{S.isInFallback&&(h(null,F,x,A,w,null,B,a,l),mn(S,F))},K=F.transition&&F.transition.mode==="out-in";K&&(E.transition.afterLeave=z),S.isInFallback=!0,d(E,w,null,!0),K||z()},move(F,q,E){S.activeBranch&&p(S.activeBranch,F,q,E),S.container=F},next(){return S.activeBranch&&y(S.activeBranch)},registerDep(F,q,E){const w=!!S.pendingBranch;w&&S.deps++;const x=F.vnode.el;F.asyncDep.catch(B=>{qi(B,F,0)}).then(B=>{if(F.isUnmounted||S.isUnmounted||S.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:A}=F;Pr(F,B,!1),x&&(A.el=x);const z=!x&&F.subTree.el;q(F,A,v(x||F.subTree.el),x?null:y(F.subTree),S,r,E),z&&_(z),zs(F,A.el),w&&--S.deps===0&&S.resolve()})},unmount(F,q){S.isUnmounted=!0,S.activeBranch&&d(S.activeBranch,i,F,q),S.pendingBranch&&d(S.pendingBranch,i,F,q)}};return S}function vm(e,t,i,n,o,s,r,a,l){const u=t.suspense=$u(t,n,i,e.parentNode,document.createElement("div"),null,o,s,r,a,!0),c=l(e,u.pendingBranch=t.ssContent,i,u,s,r);return u.deps===0&&u.resolve(!1,!0),c}function bm(e){const{shapeFlag:t,children:i}=e,n=t&32;e.ssContent=gl(n?i.default:i),e.ssFallback=n?gl(i.fallback):fe(Me)}function gl(e){let t;if(ee(e)){const i=Oi&&e._c;i&&(e._d=!1,ke()),e=e(),i&&(e._d=!0,t=Xe,Ku())}return H(e)&&(e=um(e)),e=at(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(i=>i!==e)),e}function Yu(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):io(e)}function mn(e,t){e.activeBranch=t;const{vnode:i,parentComponent:n}=e;let o=t.el;for(;!o&&t.component;)t=t.component.subTree,o=t.el;i.el=o,n&&n.subTree===i&&(n.vnode.el=o,zs(n,o))}function wm(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Oe=Symbol.for("v-fgt"),mi=Symbol.for("v-txt"),Me=Symbol.for("v-cmt"),Ci=Symbol.for("v-stc"),$n=[];let Xe=null;function ke(e=!1){$n.push(Xe=e?null:[])}function Ku(){$n.pop(),Xe=$n[$n.length-1]||null}let Oi=1;function ao(e,t=!1){Oi+=e,e<0&&Xe&&t&&(Xe.hasOnce=!0)}function Ju(e){return e.dynamicChildren=Oi>0?Xe||cn:null,Ku(),Oi>0&&Xe&&Xe.push(e),e}function Qe(e,t,i,n,o,s){return Ju(Re(e,t,i,n,o,s,!0))}function Ft(e,t,i,n,o){return Ju(fe(e,t,i,n,o,!0))}function Xt(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}function Tm(e){}const Qu=({key:e})=>e??null,jo=({ref:e,ref_key:t,ref_for:i})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||Pe(e)||ee(e)?{i:je,r:e,k:t,f:!!i}:e:null);function Re(e,t=null,i=null,n=0,o=null,s=e===Oe?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qu(t),ref:t&&jo(t),scopeId:Ms,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:je};return a?(Ta(l,i),s&128&&e.normalize(l)):i&&(l.shapeFlag|=ie(i)?8:16),Oi>0&&!r&&Xe&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Xe.push(l),l}const fe=km;function km(e,t=null,i=null,n=0,o=null,s=!1){if((!e||e===Su)&&(e=Me),Xt(e)){const a=Dt(e,t,!0);return i&&Ta(a,i),Oi>0&&!s&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(e)]=a:Xe.push(a)),a.patchFlag=-2,a}if(Cm(e)&&(e=e.__vccOpts),t){t=Zu(t);let{class:a,style:l}=t;a&&!ie(a)&&(t.class=bi(a)),ye(l)&&(Rs(l)&&!H(l)&&(l=le({},l)),t.style=xn(l))}const r=ie(e)?1:rs(e)?128:lu(e)?64:ye(e)?4:ee(e)?2:0;return Re(e,t,i,n,o,r,s,!0)}function Zu(e){return e?Rs(e)||Eu(e)?le({},e):e:null}function Dt(e,t,i=!1,n=!1){const{props:o,ref:s,patchFlag:r,children:a,transition:l}=e,u=t?Xu(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Qu(u),ref:t&&t.ref?i&&s?H(s)?s.concat(jo(t)):[s,jo(t)]:jo(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Zt(c,l.clone(c)),c}function wa(e=" ",t=0){return fe(mi,null,e,t)}function Sm(e,t){const i=fe(Ci,null,e);return i.staticCount=t,i}function Vo(e="",t=!1){return t?(ke(),Ft(Me,null,e)):fe(Me,null,e)}function at(e){return e==null||typeof e=="boolean"?fe(Me):H(e)?fe(Oe,null,e.slice()):Xt(e)?ui(e):fe(mi,null,String(e))}function ui(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function Ta(e,t){let i=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(H(t))i=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),Ta(e,o()),o._c&&(o._d=!0));return}else{i=32;const o=t._;!o&&!Eu(t)?t._ctx=je:o===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:je},i=32):(t=String(t),n&64?(i=16,t=[wa(t)]):i=8);e.children=t,e.shapeFlag|=i}function Xu(...e){const t={};for(let i=0;i<e.length;i++){const n=e[i];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=bi([t.class,n.class]));else if(o==="style")t.style=xn([t.style,n.style]);else if(Li(o)){const s=t[o],r=n[o];r&&s!==r&&!(H(s)&&s.includes(r))&&(t[o]=s?[].concat(s,r):r)}else o!==""&&(t[o]=n[o])}return t}function rt(e,t,i,n=null){It(e,t,7,[i,n])}const Am=Pu();let Im=0;function eh(e,t,i){const n=e.type,o=(t?t.appContext:e.appContext)||Am,s={uid:Im++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ou(n,o),emitsOptions:Gu(n,o),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:n.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=lm.bind(null,s),e.ce&&e.ce(s),s}let Ue=null;const ht=()=>Ue||je;let as,Ar;{const e=Is(),t=(i,n)=>{let o;return(o=e[i])||(o=e[i]=[]),o.push(n),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};as=t("__VUE_INSTANCE_SETTERS__",i=>Ue=i),Ar=t("__VUE_SSR_SETTERS__",i=>yn=i)}const Mi=e=>{const t=Ue;return as(e),e.scope.on(),()=>{e.scope.off(),as(t)}},Ir=()=>{Ue&&Ue.scope.off(),as(null)};function th(e){return e.vnode.shapeFlag&4}let yn=!1;function ih(e,t=!1,i=!1){t&&Ar(t);const{props:n,children:o}=e.vnode,s=th(e);Qf(e,n,s,t),tm(e,o,i||t);const r=s?Pm(e,t):void 0;return t&&Ar(!1),r}function Pm(e,t){const i=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,br);const{setup:n}=i;if(n){Kt();const o=e.setupContext=n.length>1?sh(e):null,s=Mi(e),r=Cn(n,e,0,[e.props,o]),a=Kr(r);if(Jt(),s(),(a||e.sp)&&!fi(e)&&ua(e),a){if(r.then(Ir,Ir),t)return r.then(l=>{Pr(e,l,t)}).catch(l=>{qi(l,e,0)});e.asyncDep=r}else Pr(e,r,t)}else oh(e,t)}function Pr(e,t,i){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=ra(t)),oh(e,i)}let ls,xr;function nh(e){ls=e,xr=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Ef))}}const xm=()=>!ls;function oh(e,t,i){const n=e.type;if(!e.render){if(!t&&ls&&!n.render){const o=n.template||ga(e).template;if(o){const{isCustomElement:s,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,u=le(le({isCustomElement:s,delimiters:a},r),l);n.render=ls(o,u)}}e.render=n.render||Ve,xr&&xr(e)}{const o=Mi(e);Kt();try{Vf(e)}finally{Jt(),o()}}}const _m={get(e,t){return Ze(e,"get",""),e[t]}};function sh(e){const t=i=>{e.exposed=i||{}};return{attrs:new Proxy(e.attrs,_m),slots:e.slots,emit:e.emit,expose:t}}function So(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ra(Os(e.exposed)),{get(t,i){if(i in t)return t[i];if(i in Hn)return Hn[i](e)},has(t,i){return i in t||i in Hn}})):e.proxy}function _r(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function Cm(e){return ee(e)&&"__vccOpts"in e}const We=(e,t)=>Ud(e,t,yn);function Fe(e,t,i){const n=(s,r,a)=>{ao(-1);try{return fe(s,r,a)}finally{ao(1)}},o=arguments.length;return o===2?ye(t)&&!H(t)?Xt(t)?n(e,null,[t]):n(e,t):n(e,null,t):(o>3?i=Array.prototype.slice.call(arguments,2):o===3&&Xt(i)&&(i=[i]),n(e,t,i))}function Em(){}function Rm(e,t,i,n){const o=i[n];if(o&&rh(o,e))return o;const s=t();return s.memo=e.slice(),s.cacheIndex=n,i[n]=s}function rh(e,t){const i=e.memo;if(i.length!=t.length)return!1;for(let n=0;n<i.length;n++)if(it(i[n],t[n]))return!1;return Oi>0&&Xe&&Xe.push(e),!0}const ah="3.5.21",Om=Ve,Mm=Jd,Nm=sn,Lm=ru,Fm={createComponentInstance:eh,setupComponent:ih,renderComponentRoot:Wo,setCurrentRenderingInstance:oo,isVNode:Xt,normalizeVNode:at,getComponentPublicInstance:So,ensureValidVNode:ma,pushWarningContext:Gd,popWarningContext:$d},Dm=Fm,qm=null,Bm=null,zm=null;/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cr;const yl=typeof window<"u"&&window.trustedTypes;if(yl)try{Cr=yl.createPolicy("vue",{createHTML:e=>e})}catch{}const lh=Cr?e=>Cr.createHTML(e):e=>e,Um="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",Wt=typeof document<"u"?document:null,vl=Wt&&Wt.createElement("template"),jm={insert:(e,t,i)=>{t.insertBefore(e,i||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,i,n)=>{const o=t==="svg"?Wt.createElementNS(Um,e):t==="mathml"?Wt.createElementNS(Wm,e):i?Wt.createElement(e,{is:i}):Wt.createElement(e);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Wt.createTextNode(e),createComment:e=>Wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,i,n,o,s){const r=i?i.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),i),!(o===s||!(o=o.nextSibling)););else{vl.innerHTML=lh(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const a=vl.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,i)}return[r?r.nextSibling:t.firstChild,i?i.previousSibling:t.lastChild]}},ni="transition",Ln="animation",vn=Symbol("_vtc"),ch={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},uh=le({},ca,ch),Vm=e=>(e.displayName="Transition",e.props=uh,e),Hm=Vm((e,{slots:t})=>Fe(du,hh(e),t)),Ti=(e,t=[])=>{H(e)?e.forEach(i=>i(...t)):e&&e(...t)},bl=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function hh(e){const t={};for(const A in e)A in ch||(t[A]=e[A]);if(e.css===!1)return t;const{name:i="v",type:n,duration:o,enterFromClass:s=`${i}-enter-from`,enterActiveClass:r=`${i}-enter-active`,enterToClass:a=`${i}-enter-to`,appearFromClass:l=s,appearActiveClass:u=r,appearToClass:c=a,leaveFromClass:h=`${i}-leave-from`,leaveActiveClass:p=`${i}-leave-active`,leaveToClass:d=`${i}-leave-to`}=e,y=Gm(o),v=y&&y[0],_=y&&y[1],{onBeforeEnter:P,onEnter:k,onEnterCancelled:m,onLeave:b,onLeaveCancelled:S,onBeforeAppear:F=P,onAppear:q=k,onAppearCancelled:E=m}=t,w=(A,z,K,Z)=>{A._enterCancelled=Z,ri(A,z?c:a),ri(A,z?u:r),K&&K()},x=(A,z)=>{A._isLeaving=!1,ri(A,h),ri(A,d),ri(A,p),z&&z()},B=A=>(z,K)=>{const Z=A?q:k,U=()=>w(z,A,K);Ti(Z,[z,U]),wl(()=>{ri(z,A?l:s),Ot(z,A?c:a),bl(Z)||Tl(z,n,v,U)})};return le(t,{onBeforeEnter(A){Ti(P,[A]),Ot(A,s),Ot(A,r)},onBeforeAppear(A){Ti(F,[A]),Ot(A,l),Ot(A,u)},onEnter:B(!1),onAppear:B(!0),onLeave(A,z){A._isLeaving=!0;const K=()=>x(A,z);Ot(A,h),A._enterCancelled?(Ot(A,p),Er()):(Er(),Ot(A,p)),wl(()=>{A._isLeaving&&(ri(A,h),Ot(A,d),bl(b)||Tl(A,n,_,K))}),Ti(b,[A,K])},onEnterCancelled(A){w(A,!1,void 0,!0),Ti(m,[A])},onAppearCancelled(A){w(A,!0,void 0,!0),Ti(E,[A])},onLeaveCancelled(A){x(A),Ti(S,[A])}})}function Gm(e){if(e==null)return null;if(ye(e))return[sr(e.enter),sr(e.leave)];{const t=sr(e);return[t,t]}}function sr(e){return Qo(e)}function Ot(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.add(i)),(e[vn]||(e[vn]=new Set)).add(t)}function ri(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const i=e[vn];i&&(i.delete(t),i.size||(e[vn]=void 0))}function wl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $m=0;function Tl(e,t,i,n){const o=e._endId=++$m,s=()=>{o===e._endId&&n()};if(i!=null)return setTimeout(s,i);const{type:r,timeout:a,propCount:l}=ph(e,t);if(!r)return n();const u=r+"end";let c=0;const h=()=>{e.removeEventListener(u,p),s()},p=d=>{d.target===e&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),e.addEventListener(u,p)}function ph(e,t){const i=window.getComputedStyle(e),n=y=>(i[y]||"").split(", "),o=n(`${ni}Delay`),s=n(`${ni}Duration`),r=kl(o,s),a=n(`${Ln}Delay`),l=n(`${Ln}Duration`),u=kl(a,l);let c=null,h=0,p=0;t===ni?r>0&&(c=ni,h=r,p=s.length):t===Ln?u>0&&(c=Ln,h=u,p=l.length):(h=Math.max(r,u),c=h>0?r>u?ni:Ln:null,p=c?c===ni?s.length:l.length:0);const d=c===ni&&/\b(?:transform|all)(?:,|$)/.test(n(`${ni}Property`).toString());return{type:c,timeout:h,propCount:p,hasTransform:d}}function kl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((i,n)=>Sl(i)+Sl(e[n])))}function Sl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Er(){return document.body.offsetHeight}function Ym(e,t,i){const n=e[vn];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):i?e.setAttribute("class",t):e.className=t}const cs=Symbol("_vod"),dh=Symbol("_vsh"),fh={name:"show",beforeMount(e,{value:t},{transition:i}){e[cs]=e.style.display==="none"?"":e.style.display,i&&t?i.beforeEnter(e):Fn(e,t)},mounted(e,{value:t},{transition:i}){i&&t&&i.enter(e)},updated(e,{value:t,oldValue:i},{transition:n}){!t!=!i&&(n?t?(n.beforeEnter(e),Fn(e,!0),n.enter(e)):n.leave(e,()=>{Fn(e,!1)}):Fn(e,t))},beforeUnmount(e,{value:t}){Fn(e,t)}};function Fn(e,t){e.style.display=t?e[cs]:"none",e[dh]=!t}function Km(){fh.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const mh=Symbol("");function Jm(e){const t=ht();if(!t)return;const i=t.ut=(o=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(s=>us(s,o))},n=()=>{const o=e(t.proxy);t.ce?us(t.ce,o):Rr(t.subTree,o),i(o)};ha(()=>{io(n)}),Rn(()=>{$t(n,Ve,{flush:"post"});const o=new MutationObserver(n);o.observe(t.subTree.el.parentNode,{childList:!0}),wo(()=>o.disconnect())})}function Rr(e,t){if(e.shapeFlag&128){const i=e.suspense;e=i.activeBranch,i.pendingBranch&&!i.isHydrating&&i.effects.push(()=>{Rr(i.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)us(e.el,t);else if(e.type===Oe)e.children.forEach(i=>Rr(i,t));else if(e.type===Ci){let{el:i,anchor:n}=e;for(;i&&(us(i,t),i!==n);)i=i.nextSibling}}function us(e,t){if(e.nodeType===1){const i=e.style;let n="";for(const o in t){const s=cd(t[o]);i.setProperty(`--${o}`,s),n+=`--${o}: ${s};`}i[mh]=n}}const Qm=/(?:^|;)\s*display\s*:/;function Zm(e,t,i){const n=e.style,o=ie(i);let s=!1;if(i&&!o){if(t)if(ie(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();i[a]==null&&Ho(n,a,"")}else for(const r in t)i[r]==null&&Ho(n,r,"");for(const r in i)r==="display"&&(s=!0),Ho(n,r,i[r])}else if(o){if(t!==i){const r=n[mh];r&&(i+=";"+r),n.cssText=i,s=Qm.test(i)}}else t&&e.removeAttribute("style");cs in e&&(e[cs]=s?n.display:"",e[dh]&&(n.display="none"))}const Al=/\s*!important$/;function Ho(e,t,i){if(H(i))i.forEach(n=>Ho(e,t,n));else if(i==null&&(i=""),t.startsWith("--"))e.setProperty(t,i);else{const n=Xm(e,t);Al.test(i)?e.setProperty(lt(n),i.replace(Al,""),"important"):e[n]=i}}const Il=["Webkit","Moz","ms"],rr={};function Xm(e,t){const i=rr[t];if(i)return i;let n=Se(t);if(n!=="filter"&&n in e)return rr[t]=n;n=Di(n);for(let o=0;o<Il.length;o++){const s=Il[o]+n;if(s in e)return rr[t]=s}return t}const Pl="http://www.w3.org/1999/xlink";function xl(e,t,i,n,o,s=ad(t)){n&&t.startsWith("xlink:")?i==null?e.removeAttributeNS(Pl,t.slice(6,t.length)):e.setAttributeNS(Pl,t,i):i==null||s&&!Oc(i)?e.removeAttribute(t):e.setAttribute(t,s?"":ut(i)?String(i):i)}function _l(e,t,i,n,o){if(t==="innerHTML"||t==="textContent"){i!=null&&(e[t]=t==="innerHTML"?lh(i):i);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=i==null?e.type==="checkbox"?"on":"":String(i);(a!==l||!("_value"in e))&&(e.value=l),i==null&&e.removeAttribute(t),e._value=i;return}let r=!1;if(i===""||i==null){const a=typeof e[t];a==="boolean"?i=Oc(i):i==null&&a==="string"?(i="",r=!0):a==="number"&&(i=0,r=!0)}try{e[t]=i}catch{}r&&e.removeAttribute(o||t)}function Gt(e,t,i,n){e.addEventListener(t,i,n)}function eg(e,t,i,n){e.removeEventListener(t,i,n)}const Cl=Symbol("_vei");function tg(e,t,i,n,o=null){const s=e[Cl]||(e[Cl]={}),r=s[t];if(n&&r)r.value=n;else{const[a,l]=ig(t);if(n){const u=s[t]=sg(n,o);Gt(e,a,u,l)}else r&&(eg(e,a,r,l),s[t]=void 0)}}const El=/(?:Once|Passive|Capture)$/;function ig(e){let t;if(El.test(e)){t={};let n;for(;n=e.match(El);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):lt(e.slice(2)),t]}let ar=0;const ng=Promise.resolve(),og=()=>ar||(ng.then(()=>ar=0),ar=Date.now());function sg(e,t){const i=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=i.attached)return;It(rg(n,i.value),t,5,[n])};return i.value=e,i.attached=og(),i}function rg(e,t){if(H(t)){const i=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{i.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const Rl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ag=(e,t,i,n,o,s)=>{const r=o==="svg";t==="class"?Ym(e,n,r):t==="style"?Zm(e,i,n):Li(t)?$r(t)||tg(e,t,i,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lg(e,t,n,r))?(_l(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&xl(e,t,n,r,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ie(n))?_l(e,Se(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),xl(e,t,n,r))};function lg(e,t,i,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Rl(t)&&ee(i));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Rl(t)&&ie(i)?!1:t in e}const Ol={};function gh(e,t,i){let n=Pt(e,t);Ss(n)&&(n=le({},n,t));class o extends Us{constructor(r){super(n,r,i)}}return o.def=n,o}const cg=(e,t)=>gh(e,t,_h),ug=typeof HTMLElement<"u"?HTMLElement:class{};class Us extends ug{constructor(t,i={},n=ds){super(),this._def=t,this._props=i,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&n!==ds?this._root=this.shadowRoot:t.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let t=this;for(;t=t&&(t.parentNode||t.host);)if(t instanceof Us){this._parent=t;break}this._instance||(this._resolved?this._mount(this._def):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(t=this._parent){t&&(this._instance.parent=t._instance,this._inheritParentContext(t))}_inheritParentContext(t=this._parent){t&&this._app&&Object.setPrototypeOf(this._app._context.provides,t._instance.provides)}disconnectedCallback(){this._connected=!1,En(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);this._ob=new MutationObserver(n=>{for(const o of n)this._setAttr(o.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(n,o=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:s,styles:r}=n;let a;if(s&&!H(s))for(const l in s){const u=s[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=Qo(this._props[l])),(a||(a=Object.create(null)))[Se(l)]=!0)}this._numberProps=a,this._resolveProps(n),this.shadowRoot&&this._applyStyles(r),this._mount(n)},i=this._def.__asyncLoader;i?this._pendingResolve=i().then(n=>{n.configureApp=this._def.configureApp,t(this._def=n,!0)}):t(this._def)}_mount(t){this._app=this._createApp(t),this._inheritParentContext(),t.configureApp&&t.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const i=this._instance&&this._instance.exposed;if(i)for(const n in i)pe(this,n)||Object.defineProperty(this,n,{get:()=>be(i[n])})}_resolveProps(t){const{props:i}=t,n=H(i)?i:Object.keys(i||{});for(const o of Object.keys(this))o[0]!=="_"&&n.includes(o)&&this._setProp(o,this[o]);for(const o of n.map(Se))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(s){this._setProp(o,s,!0,!0)}})}_setAttr(t){if(t.startsWith("data-v-"))return;const i=this.hasAttribute(t);let n=i?this.getAttribute(t):Ol;const o=Se(t);i&&this._numberProps&&this._numberProps[o]&&(n=Qo(n)),this._setProp(o,n,!1,!0)}_getProp(t){return this._props[t]}_setProp(t,i,n=!0,o=!1){if(i!==this._props[t]&&(i===Ol?delete this._props[t]:(this._props[t]=i,t==="key"&&this._app&&(this._app._ceVNode.key=i)),o&&this._instance&&this._update(),n)){const s=this._ob;s&&s.disconnect(),i===!0?this.setAttribute(lt(t),""):typeof i=="string"||typeof i=="number"?this.setAttribute(lt(t),i+""):i||this.removeAttribute(lt(t)),s&&s.observe(this,{attributes:!0})}}_update(){const t=this._createVNode();this._app&&(t.appContext=this._app._context),xh(t,this._root)}_createVNode(){const t={};this.shadowRoot||(t.onVnodeMounted=t.onVnodeUpdated=this._renderSlots.bind(this));const i=fe(this._def,le(t,this._props));return this._instance||(i.ce=n=>{this._instance=n,n.ce=this,n.isCE=!0;const o=(s,r)=>{this.dispatchEvent(new CustomEvent(s,Ss(r[0])?le({detail:r},r[0]):{detail:r}))};n.emit=(s,...r)=>{o(s,r),lt(s)!==s&&o(lt(s),r)},this._setParent()}),i}_applyStyles(t,i){if(!t)return;if(i){if(i===this._def||this._styleChildren.has(i))return;this._styleChildren.add(i)}const n=this._nonce;for(let o=t.length-1;o>=0;o--){const s=document.createElement("style");n&&s.setAttribute("nonce",n),s.textContent=t[o],this.shadowRoot.prepend(s)}}_parseSlots(){const t=this._slots={};let i;for(;i=this.firstChild;){const n=i.nodeType===1&&i.getAttribute("slot")||"default";(t[n]||(t[n]=[])).push(i),this.removeChild(i)}}_renderSlots(){const t=(this._teleportTarget||this).querySelectorAll("slot"),i=this._instance.type.__scopeId;for(let n=0;n<t.length;n++){const o=t[n],s=o.getAttribute("name")||"default",r=this._slots[s],a=o.parentNode;if(r)for(const l of r){if(i&&l.nodeType===1){const u=i+"-s",c=document.createTreeWalker(l,1);l.setAttribute(u,"");let h;for(;h=c.nextNode();)h.setAttribute(u,"")}a.insertBefore(l,o)}else for(;o.firstChild;)a.insertBefore(o.firstChild,o);a.removeChild(o)}}_injectChildStyle(t){this._applyStyles(t.styles,t)}_removeChildStyle(t){}}function yh(e){const t=ht(),i=t&&t.ce;return i||null}function hg(){const e=yh();return e&&e.shadowRoot}function pg(e="$style"){{const t=ht();if(!t)return ae;const i=t.type.__cssModules;if(!i)return ae;const n=i[e];return n||ae}}const vh=new WeakMap,bh=new WeakMap,hs=Symbol("_moveCb"),Ml=Symbol("_enterCb"),dg=e=>(delete e.props.mode,e),fg=dg({name:"TransitionGroup",props:le({},uh,{tag:String,moveClass:String}),setup(e,{slots:t}){const i=ht(),n=la();let o,s;return Fs(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!bg(o[0].el,i.vnode.el,r)){o=[];return}o.forEach(gg),o.forEach(yg);const a=o.filter(vg);Er(),a.forEach(l=>{const u=l.el,c=u.style;Ot(u,r),c.transform=c.webkitTransform=c.transitionDuration="";const h=u[hs]=p=>{p&&p.target!==u||(!p||p.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",h),u[hs]=null,ri(u,r))};u.addEventListener("transitionend",h)}),o=[]}),()=>{const r=ce(e),a=hh(r);let l=r.tag||Oe;if(o=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(o.push(c),Zt(c,gn(c,a,n,i)),vh.set(c,c.el.getBoundingClientRect()))}s=t.default?Ns(t.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&Zt(c,gn(c,a,n,i))}return fe(l,null,s)}}}),mg=fg;function gg(e){const t=e.el;t[hs]&&t[hs](),t[Ml]&&t[Ml]()}function yg(e){bh.set(e,e.el.getBoundingClientRect())}function vg(e){const t=vh.get(e),i=bh.get(e),n=t.left-i.left,o=t.top-i.top;if(n||o){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${n}px,${o}px)`,s.transitionDuration="0s",e}}function bg(e,t,i){const n=e.cloneNode(),o=e[vn];o&&o.forEach(a=>{a.split(/\s+/).forEach(l=>l&&n.classList.remove(l))}),i.split(/\s+/).forEach(a=>a&&n.classList.add(a)),n.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(n);const{hasTransform:r}=ph(n);return s.removeChild(n),r}const vi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?i=>pn(t,i):t};function wg(e){e.target.composing=!0}function Nl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const At=Symbol("_assign"),ps={created(e,{modifiers:{lazy:t,trim:i,number:n}},o){e[At]=vi(o);const s=n||o.props&&o.props.type==="number";Gt(e,t?"change":"input",r=>{if(r.target.composing)return;let a=e.value;i&&(a=a.trim()),s&&(a=Jo(a)),e[At](a)}),i&&Gt(e,"change",()=>{e.value=e.value.trim()}),t||(Gt(e,"compositionstart",wg),Gt(e,"compositionend",Nl),Gt(e,"change",Nl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:i,modifiers:{lazy:n,trim:o,number:s}},r){if(e[At]=vi(r),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?Jo(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(n&&t===i||o&&e.value.trim()===l)||(e.value=l))}},ka={deep:!0,created(e,t,i){e[At]=vi(i),Gt(e,"change",()=>{const n=e._modelValue,o=bn(e),s=e.checked,r=e[At];if(H(n)){const a=Ps(n,o),l=a!==-1;if(s&&!l)r(n.concat(o));else if(!s&&l){const u=[...n];u.splice(a,1),r(u)}}else if(Fi(n)){const a=new Set(n);s?a.add(o):a.delete(o),r(a)}else r(Th(e,s))})},mounted:Ll,beforeUpdate(e,t,i){e[At]=vi(i),Ll(e,t,i)}};function Ll(e,{value:t,oldValue:i},n){e._modelValue=t;let o;if(H(t))o=Ps(t,n.props.value)>-1;else if(Fi(t))o=t.has(n.props.value);else{if(t===i)return;o=yi(t,Th(e,!0))}e.checked!==o&&(e.checked=o)}const Sa={created(e,{value:t},i){e.checked=yi(t,i.props.value),e[At]=vi(i),Gt(e,"change",()=>{e[At](bn(e))})},beforeUpdate(e,{value:t,oldValue:i},n){e[At]=vi(n),t!==i&&(e.checked=yi(t,n.props.value))}},wh={deep:!0,created(e,{value:t,modifiers:{number:i}},n){const o=Fi(t);Gt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>i?Jo(bn(r)):bn(r));e[At](e.multiple?o?new Set(s):s:s[0]),e._assigning=!0,En(()=>{e._assigning=!1})}),e[At]=vi(n)},mounted(e,{value:t}){Fl(e,t)},beforeUpdate(e,t,i){e[At]=vi(i)},updated(e,{value:t}){e._assigning||Fl(e,t)}};function Fl(e,t){const i=e.multiple,n=H(t);if(!(i&&!n&&!Fi(t))){for(let o=0,s=e.options.length;o<s;o++){const r=e.options[o],a=bn(r);if(i)if(n){const l=typeof a;l==="string"||l==="number"?r.selected=t.some(u=>String(u)===String(a)):r.selected=Ps(t,a)>-1}else r.selected=t.has(a);else if(yi(bn(r),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!i&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function bn(e){return"_value"in e?e._value:e.value}function Th(e,t){const i=t?"_trueValue":"_falseValue";return i in e?e[i]:t}const kh={created(e,t,i){Do(e,t,i,null,"created")},mounted(e,t,i){Do(e,t,i,null,"mounted")},beforeUpdate(e,t,i,n){Do(e,t,i,n,"beforeUpdate")},updated(e,t,i,n){Do(e,t,i,n,"updated")}};function Sh(e,t){switch(e){case"SELECT":return wh;case"TEXTAREA":return ps;default:switch(t){case"checkbox":return ka;case"radio":return Sa;default:return ps}}}function Do(e,t,i,n,o){const r=Sh(e.tagName,i.props&&i.props.type)[o];r&&r(e,t,i,n)}function Tg(){ps.getSSRProps=({value:e})=>({value:e}),Sa.getSSRProps=({value:e},t)=>{if(t.props&&yi(t.props.value,e))return{checked:!0}},ka.getSSRProps=({value:e},t)=>{if(H(e)){if(t.props&&Ps(e,t.props.value)>-1)return{checked:!0}}else if(Fi(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},kh.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const i=Sh(t.type.toUpperCase(),t.props&&t.props.type);if(i.getSSRProps)return i.getSSRProps(e,t)}}const kg=["ctrl","shift","alt","meta"],Sg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>kg.some(i=>e[`${i}Key`]&&!t.includes(i))},Ag=(e,t)=>{const i=e._withMods||(e._withMods={}),n=t.join(".");return i[n]||(i[n]=(o,...s)=>{for(let r=0;r<t.length;r++){const a=Sg[t[r]];if(a&&a(o,t))return}return e(o,...s)})},Ig={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pg=(e,t)=>{const i=e._withKeys||(e._withKeys={}),n=t.join(".");return i[n]||(i[n]=o=>{if(!("key"in o))return;const s=lt(o.key);if(t.some(r=>r===s||Ig[r]===s))return e(o)})},Ah=le({patchProp:ag},jm);let Yn,Dl=!1;function Ih(){return Yn||(Yn=Fu(Ah))}function Ph(){return Yn=Dl?Yn:Du(Ah),Dl=!0,Yn}const xh=(...e)=>{Ih().render(...e)},xg=(...e)=>{Ph().hydrate(...e)},ds=(...e)=>{const t=Ih().createApp(...e),{mount:i}=t;return t.mount=n=>{const o=Eh(n);if(!o)return;const s=t._component;!ee(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=i(o,!1,Ch(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t},_h=(...e)=>{const t=Ph().createApp(...e),{mount:i}=t;return t.mount=n=>{const o=Eh(n);if(o)return i(o,!0,Ch(o))},t};function Ch(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Eh(e){return ie(e)?document.querySelector(e):e}let ql=!1;const _g=()=>{ql||(ql=!0,Tg(),Km())},Cg=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:du,BaseTransitionPropsValidators:ca,Comment:Me,DeprecationTypes:zm,EffectScope:Qr,ErrorCodes:Kd,ErrorTypeStrings:Mm,Fragment:Oe,KeepAlive:Sf,ReactiveEffect:Xn,Static:Ci,Suspense:mm,Teleport:sf,Text:mi,TrackOpTypes:Wd,Transition:Hm,TransitionGroup:mg,TriggerOpTypes:jd,VueElement:Us,assertNumber:Yd,callWithAsyncErrorHandling:It,callWithErrorHandling:Cn,camelize:Se,capitalize:Di,cloneVNode:Dt,compatUtils:Bm,computed:We,createApp:ds,createBlock:Ft,createCommentVNode:Vo,createElementBlock:Qe,createElementVNode:Re,createHydrationRenderer:Du,createPropsRestProxy:Wf,createRenderer:Fu,createSSRApp:_h,createSlots:xf,createStaticVNode:Sm,createTextVNode:wa,createVNode:fe,customRef:Zc,defineAsyncComponent:Tf,defineComponent:Pt,defineCustomElement:gh,defineEmits:Of,defineExpose:Mf,defineModel:Ff,defineOptions:Nf,defineProps:Rf,defineSSRCustomElement:cg,defineSlots:Lf,devtools:Nm,effect:hd,effectScope:Zr,getCurrentInstance:ht,getCurrentScope:Xr,getCurrentWatcher:Vd,getTransitionRawChildren:Ns,guardReactiveProps:Zu,h:Fe,handleError:qi,hasInjectionContext:xu,hydrate:xg,hydrateOnIdle:mf,hydrateOnInteraction:bf,hydrateOnMediaQuery:vf,hydrateOnVisible:yf,initCustomFormatter:Em,initDirectivesForSSR:_g,inject:vt,isMemoSame:rh,isProxy:Rs,isReactive:Lt,isReadonly:Qt,isRef:Pe,isRuntimeOnly:xm,isShallow:yt,isVNode:Xt,markRaw:Os,mergeDefaults:zf,mergeModels:Uf,mergeProps:Xu,nextTick:En,normalizeClass:bi,normalizeProps:Qp,normalizeStyle:xn,onActivated:mu,onBeforeMount:vu,onBeforeUnmount:Ds,onBeforeUpdate:ha,onDeactivated:gu,onErrorCaptured:ku,onMounted:Rn,onRenderTracked:Tu,onRenderTriggered:wu,onScopeDispose:Lc,onServerPrefetch:bu,onUnmounted:wo,onUpdated:Fs,onWatcherCleanup:tu,openBlock:ke,popScopeId:ef,provide:Gn,proxyRefs:ra,pushScopeId:Xd,queuePostFlushCb:io,reactive:_n,readonly:oa,ref:he,registerRuntimeCompiler:nh,render:xh,renderList:qs,renderSlot:_f,resolveComponent:To,resolveDirective:Pf,resolveDynamicComponent:da,resolveFilter:qm,resolveTransitionHooks:gn,setBlockTracking:ao,setDevtoolsHook:Lm,setTransitionHooks:Zt,shallowReactive:na,shallowReadonly:Rd,shallowRef:sa,ssrContextKey:Uu,ssrUtils:Dm,stop:pd,toDisplayString:yo,toHandlerKey:hn,toHandlers:Cf,toRaw:ce,toRef:Bd,toRefs:Xc,toValue:Nd,transformVNodeArgs:Tm,triggerRef:Md,unref:be,useAttrs:Bf,useCssModule:pg,useCssVars:Jm,useHost:yh,useId:af,useModel:am,useSSRContext:Wu,useShadowRoot:hg,useSlots:qf,useTemplateRef:lf,useTransitionState:la,vModelCheckbox:ka,vModelDynamic:kh,vModelRadio:Sa,vModelSelect:wh,vModelText:ps,vShow:fh,version:ah,warn:Om,watch:$t,watchEffect:om,watchPostEffect:sm,watchSyncEffect:ju,withAsyncContext:jf,withCtx:vo,withDefaults:Df,withDirectives:nf,withKeys:Pg,withMemo:Rm,withModifiers:Ag,withScopeId:tf},Symbol.toStringTag,{value:"Module"}));/**
* @vue/compiler-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const lo=Symbol(""),Kn=Symbol(""),Aa=Symbol(""),fs=Symbol(""),Rh=Symbol(""),Ni=Symbol(""),Oh=Symbol(""),Mh=Symbol(""),Ia=Symbol(""),Pa=Symbol(""),Ao=Symbol(""),xa=Symbol(""),Nh=Symbol(""),_a=Symbol(""),Ca=Symbol(""),Ea=Symbol(""),Ra=Symbol(""),Oa=Symbol(""),Ma=Symbol(""),Lh=Symbol(""),Fh=Symbol(""),Ws=Symbol(""),ms=Symbol(""),Na=Symbol(""),La=Symbol(""),co=Symbol(""),Io=Symbol(""),Fa=Symbol(""),Or=Symbol(""),Eg=Symbol(""),Mr=Symbol(""),gs=Symbol(""),Rg=Symbol(""),Og=Symbol(""),Da=Symbol(""),Mg=Symbol(""),Ng=Symbol(""),qa=Symbol(""),Dh=Symbol(""),wn={[lo]:"Fragment",[Kn]:"Teleport",[Aa]:"Suspense",[fs]:"KeepAlive",[Rh]:"BaseTransition",[Ni]:"openBlock",[Oh]:"createBlock",[Mh]:"createElementBlock",[Ia]:"createVNode",[Pa]:"createElementVNode",[Ao]:"createCommentVNode",[xa]:"createTextVNode",[Nh]:"createStaticVNode",[_a]:"resolveComponent",[Ca]:"resolveDynamicComponent",[Ea]:"resolveDirective",[Ra]:"resolveFilter",[Oa]:"withDirectives",[Ma]:"renderList",[Lh]:"renderSlot",[Fh]:"createSlots",[Ws]:"toDisplayString",[ms]:"mergeProps",[Na]:"normalizeClass",[La]:"normalizeStyle",[co]:"normalizeProps",[Io]:"guardReactiveProps",[Fa]:"toHandlers",[Or]:"camelize",[Eg]:"capitalize",[Mr]:"toHandlerKey",[gs]:"setBlockTracking",[Rg]:"pushScopeId",[Og]:"popScopeId",[Da]:"withCtx",[Mg]:"unref",[Ng]:"isRef",[qa]:"withMemo",[Dh]:"isMemoSame"};function Lg(e){Object.getOwnPropertySymbols(e).forEach(t=>{wn[t]=e[t]})}const wt={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function Fg(e,t=""){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:wt}}function uo(e,t,i,n,o,s,r,a=!1,l=!1,u=!1,c=wt){return e&&(a?(e.helper(Ni),e.helper(Sn(e.inSSR,u))):e.helper(kn(e.inSSR,u)),r&&e.helper(Oa)),{type:13,tag:t,props:i,children:n,patchFlag:o,dynamicProps:s,directives:r,isBlock:a,disableTracking:l,isComponent:u,loc:c}}function Ei(e,t=wt){return{type:17,loc:t,elements:e}}function St(e,t=wt){return{type:15,loc:t,properties:e}}function Ne(e,t){return{type:16,loc:wt,key:ie(e)?oe(e,!0):e,value:t}}function oe(e,t=!1,i=wt,n=0){return{type:4,loc:i,content:e,isStatic:t,constType:t?3:n}}function Ct(e,t=wt){return{type:8,loc:t,children:e}}function qe(e,t=[],i=wt){return{type:14,loc:i,callee:e,arguments:t}}function Tn(e,t=void 0,i=!1,n=!1,o=wt){return{type:18,params:e,returns:t,newline:i,isSlot:n,loc:o}}function Nr(e,t,i,n=!0){return{type:19,test:e,consequent:t,alternate:i,newline:n,loc:wt}}function Dg(e,t,i=!1,n=!1){return{type:20,index:e,value:t,needPauseTracking:i,inVOnce:n,needArraySpread:!1,loc:wt}}function qg(e){return{type:21,body:e,loc:wt}}function kn(e,t){return e||t?Ia:Pa}function Sn(e,t){return e||t?Oh:Mh}function Ba(e,{helper:t,removeHelper:i,inSSR:n}){e.isBlock||(e.isBlock=!0,i(kn(n,e.isComponent)),t(Ni),t(Sn(n,e.isComponent)))}const Bl=new Uint8Array([123,123]),zl=new Uint8Array([125,125]);function Ul(e){return e>=97&&e<=122||e>=65&&e<=90}function mt(e){return e===32||e===10||e===9||e===12||e===13}function oi(e){return e===47||e===62||mt(e)}function ys(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}const Ye={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class Bg{constructor(t,i){this.stack=t,this.cbs=i,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Bl,this.delimiterClose=zl,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Bl,this.delimiterClose=zl}getPos(t){let i=1,n=t+1;for(let o=this.newlines.length-1;o>=0;o--){const s=this.newlines[o];if(t>s){i=o+2,n=t-s;break}}return{column:n,line:i,offset:t}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(t){t===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t))}stateInterpolationOpen(t){if(t===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const i=this.index+1-this.delimiterOpen.length;i>this.sectionStart&&this.cbs.ontext(this.sectionStart,i),this.state=3,this.sectionStart=i}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(t)):(this.state=1,this.stateText(t))}stateInterpolation(t){t===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(t))}stateInterpolationClose(t){t===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(t))}stateSpecialStartSequence(t){const i=this.sequenceIndex===this.currentSequence.length;if(!(i?oi(t):(t|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!i){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(t)}stateInRCDATA(t){if(this.sequenceIndex===this.currentSequence.length){if(t===62||mt(t)){const i=this.index-this.currentSequence.length;if(this.sectionStart<i){const n=this.index;this.index=i,this.cbs.ontext(this.sectionStart,i),this.index=n}this.sectionStart=i+2,this.stateInClosingTagName(t),this.inRCDATA=!1;return}this.sequenceIndex=0}(t|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Ye.TitleEnd||this.currentSequence===Ye.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(t===60)}stateCDATASequence(t){t===Ye.Cdata[this.sequenceIndex]?++this.sequenceIndex===Ye.Cdata.length&&(this.state=28,this.currentSequence=Ye.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(t))}fastForwardTo(t){for(;++this.index<this.buffer.length;){const i=this.buffer.charCodeAt(this.index);if(i===10&&this.newlines.push(this.index),i===t)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(t){t===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Ye.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):t!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(t,i){this.enterRCDATA(t,i),this.state=31}enterRCDATA(t,i){this.inRCDATA=!0,this.currentSequence=t,this.sequenceIndex=i}stateBeforeTagName(t){t===33?(this.state=22,this.sectionStart=this.index+1):t===63?(this.state=24,this.sectionStart=this.index+1):Ul(t)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:t===116?this.state=30:this.state=t===115?29:6):t===47?this.state=8:(this.state=1,this.stateText(t))}stateInTagName(t){oi(t)&&this.handleTagName(t)}stateInSFCRootTagName(t){if(oi(t)){const i=this.buffer.slice(this.sectionStart,this.index);i!=="template"&&this.enterRCDATA(ys("</"+i),0),this.handleTagName(t)}}handleTagName(t){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)}stateBeforeClosingTagName(t){mt(t)||(t===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Ul(t)?9:27,this.sectionStart=this.index))}stateInClosingTagName(t){(t===62||mt(t))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(t))}stateAfterClosingTagName(t){t===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(t){t===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):t===47?this.state=7:t===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):mt(t)||this.handleAttrStart(t)}handleAttrStart(t){t===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):t===46||t===58||t===64||t===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(t){t===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):mt(t)||(this.state=11,this.stateBeforeAttrName(t))}stateInAttrName(t){(t===61||oi(t))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(t))}stateInDirName(t){t===61||oi(t)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):t===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(t){t===61||oi(t)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===91?this.state=15:t===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(t){t===93?this.state=14:(t===61||oi(t))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(t))}stateInDirModifier(t){t===61||oi(t)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(t){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(t)}stateAfterAttrName(t){t===61?this.state=18:t===47||t===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)):mt(t)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(t))}stateBeforeAttrValue(t){t===34?(this.state=19,this.sectionStart=this.index+1):t===39?(this.state=20,this.sectionStart=this.index+1):mt(t)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(t))}handleInAttrValue(t,i){(t===i||this.fastForwardTo(i))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(i===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(t){this.handleInAttrValue(t,34)}stateInAttrValueSingleQuotes(t){this.handleInAttrValue(t,39)}stateInAttrValueNoQuotes(t){mt(t)||t===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(t)):(t===39||t===60||t===61||t===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(t){t===91?(this.state=26,this.sequenceIndex=0):this.state=t===45?25:23}stateInDeclaration(t){(t===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(t){(t===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(t){t===45?(this.state=28,this.currentSequence=Ye.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(t){(t===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(t){t===Ye.ScriptEnd[3]?this.startSpecial(Ye.ScriptEnd,4):t===Ye.StyleEnd[3]?this.startSpecial(Ye.StyleEnd,4):(this.state=6,this.stateInTagName(t))}stateBeforeSpecialT(t){t===Ye.TitleEnd[3]?this.startSpecial(Ye.TitleEnd,4):t===Ye.TextareaEnd[3]?this.startSpecial(Ye.TextareaEnd,4):(this.state=6,this.stateInTagName(t))}startEntity(){}stateInEntity(){}parse(t){for(this.buffer=t;this.index<this.buffer.length;){const i=this.buffer.charCodeAt(this.index);switch(i===10&&this.state!==33&&this.newlines.push(this.index),this.state){case 1:{this.stateText(i);break}case 2:{this.stateInterpolationOpen(i);break}case 3:{this.stateInterpolation(i);break}case 4:{this.stateInterpolationClose(i);break}case 31:{this.stateSpecialStartSequence(i);break}case 32:{this.stateInRCDATA(i);break}case 26:{this.stateCDATASequence(i);break}case 19:{this.stateInAttrValueDoubleQuotes(i);break}case 12:{this.stateInAttrName(i);break}case 13:{this.stateInDirName(i);break}case 14:{this.stateInDirArg(i);break}case 15:{this.stateInDynamicDirArg(i);break}case 16:{this.stateInDirModifier(i);break}case 28:{this.stateInCommentLike(i);break}case 27:{this.stateInSpecialComment(i);break}case 11:{this.stateBeforeAttrName(i);break}case 6:{this.stateInTagName(i);break}case 34:{this.stateInSFCRootTagName(i);break}case 9:{this.stateInClosingTagName(i);break}case 5:{this.stateBeforeTagName(i);break}case 17:{this.stateAfterAttrName(i);break}case 20:{this.stateInAttrValueSingleQuotes(i);break}case 18:{this.stateBeforeAttrValue(i);break}case 8:{this.stateBeforeClosingTagName(i);break}case 10:{this.stateAfterClosingTagName(i);break}case 29:{this.stateBeforeSpecialS(i);break}case 30:{this.stateBeforeSpecialT(i);break}case 21:{this.stateInAttrValueNoQuotes(i);break}case 7:{this.stateInSelfClosingTag(i);break}case 23:{this.stateInDeclaration(i);break}case 22:{this.stateBeforeDeclaration(i);break}case 25:{this.stateBeforeComment(i);break}case 24:{this.stateInProcessingInstruction(i);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const t=this.buffer.length;this.sectionStart>=t||(this.state===28?this.currentSequence===Ye.CdataEnd?this.cbs.oncdata(this.sectionStart,t):this.cbs.oncomment(this.sectionStart,t):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,t))}emitCodePoint(t,i){}}function Wl(e,{compatConfig:t}){const i=t&&t[e];return e==="MODE"?i||3:i}function Ri(e,t){const i=Wl("MODE",t),n=Wl(e,t);return i===3?n===!0:n!==!1}function ho(e,t,i,...n){return Ri(e,t)}function za(e){throw e}function qh(e){}function Ie(e,t,i,n){const o=`https://vuejs.org/error-reference/#compiler-${e}`,s=new SyntaxError(String(o));return s.code=e,s.loc=t,s}const ct=e=>e.type===4&&e.isStatic;function Bh(e){switch(e){case"Teleport":case"teleport":return Kn;case"Suspense":case"suspense":return Aa;case"KeepAlive":case"keep-alive":return fs;case"BaseTransition":case"base-transition":return Rh}}const zg=/^$|^\d|[^\$\w\xA0-\uFFFF]/,Ua=e=>!zg.test(e),Ug=/[A-Za-z_$\xA0-\uFFFF]/,Wg=/[\.\?\w$\xA0-\uFFFF]/,jg=/\s+[.[]\s*|\s*[.[]\s+/g,zh=e=>e.type===4?e.content:e.loc.source,Vg=e=>{const t=zh(e).trim().replace(jg,a=>a.trim());let i=0,n=[],o=0,s=0,r=null;for(let a=0;a<t.length;a++){const l=t.charAt(a);switch(i){case 0:if(l==="[")n.push(i),i=1,o++;else if(l==="(")n.push(i),i=2,s++;else if(!(a===0?Ug:Wg).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(n.push(i),i=3,r=l):l==="["?o++:l==="]"&&(--o||(i=n.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")n.push(i),i=3,r=l;else if(l==="(")s++;else if(l===")"){if(a===t.length-1)return!1;--s||(i=n.pop())}break;case 3:l===r&&(i=n.pop(),r=null);break}}return!o&&!s},Uh=Vg,Hg=/^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,Gg=e=>Hg.test(zh(e)),$g=Gg;function kt(e,t,i=!1){for(let n=0;n<e.props.length;n++){const o=e.props[n];if(o.type===7&&(i||o.exp)&&(ie(t)?o.name===t:t.test(o.name)))return o}}function js(e,t,i=!1,n=!1){for(let o=0;o<e.props.length;o++){const s=e.props[o];if(s.type===6){if(i)continue;if(s.name===t&&(s.value||n))return s}else if(s.name==="bind"&&(s.exp||n)&&Ii(s.arg,t))return s}}function Ii(e,t){return!!(e&&ct(e)&&e.content===t)}function Yg(e){return e.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function lr(e){return e.type===5||e.type===2}function jl(e){return e.type===7&&e.name==="pre"}function Kg(e){return e.type===7&&e.name==="slot"}function vs(e){return e.type===1&&e.tagType===3}function bs(e){return e.type===1&&e.tagType===2}const Jg=new Set([co,Io]);function Wh(e,t=[]){if(e&&!ie(e)&&e.type===14){const i=e.callee;if(!ie(i)&&Jg.has(i))return Wh(e.arguments[0],t.concat(e))}return[e,t]}function ws(e,t,i){let n,o=e.type===13?e.props:e.arguments[2],s=[],r;if(o&&!ie(o)&&o.type===14){const a=Wh(o);o=a[0],s=a[1],r=s[s.length-1]}if(o==null||ie(o))n=St([t]);else if(o.type===14){const a=o.arguments[0];!ie(a)&&a.type===15?Vl(t,a)||a.properties.unshift(t):o.callee===Fa?n=qe(i.helper(ms),[St([t]),o]):o.arguments.unshift(St([t])),!n&&(n=o)}else o.type===15?(Vl(t,o)||o.properties.unshift(t),n=o):(n=qe(i.helper(ms),[St([t]),o]),r&&r.callee===Io&&(r=s[s.length-2]));e.type===13?r?r.arguments[0]=n:e.props=n:r?r.arguments[0]=n:e.arguments[2]=n}function Vl(e,t){let i=!1;if(e.key.type===4){const n=e.key.content;i=t.properties.some(o=>o.key.type===4&&o.key.content===n)}return i}function po(e,t){return`_${t}_${e.replace(/[^\w]/g,(i,n)=>i==="-"?"_":e.charCodeAt(n).toString())}`}function Qg(e){return e.type===14&&e.callee===qa?e.arguments[1].returns:e}const Zg=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,jh={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:an,isPreTag:an,isIgnoreNewlineTag:an,isCustomElement:an,onError:za,onWarn:qh,comments:!1,prefixIdentifiers:!1};let de=jh,fo=null,Yt="",Je=null,re=null,st="",Ut=-1,ki=-1,Wa=0,hi=!1,Lr=null;const Ae=[],_e=new Bg(Ae,{onerr:Bt,ontext(e,t){qo(Be(e,t),e,t)},ontextentity(e,t,i){qo(e,t,i)},oninterpolation(e,t){if(hi)return qo(Be(e,t),e,t);let i=e+_e.delimiterOpen.length,n=t-_e.delimiterClose.length;for(;mt(Yt.charCodeAt(i));)i++;for(;mt(Yt.charCodeAt(n-1));)n--;let o=Be(i,n);o.includes("&")&&(o=de.decodeEntities(o,!1)),Fr({type:5,content:$o(o,!1,Ee(i,n)),loc:Ee(e,t)})},onopentagname(e,t){const i=Be(e,t);Je={type:1,tag:i,ns:de.getNamespace(i,Ae[0],de.ns),tagType:0,props:[],children:[],loc:Ee(e-1,t),codegenNode:void 0}},onopentagend(e){Gl(e)},onclosetag(e,t){const i=Be(e,t);if(!de.isVoidTag(i)){let n=!1;for(let o=0;o<Ae.length;o++)if(Ae[o].tag.toLowerCase()===i.toLowerCase()){n=!0,o>0&&Bt(24,Ae[0].loc.start.offset);for(let r=0;r<=o;r++){const a=Ae.shift();Go(a,t,r<o)}break}n||Bt(23,Vh(e,60))}},onselfclosingtag(e){const t=Je.tag;Je.isSelfClosing=!0,Gl(e),Ae[0]&&Ae[0].tag===t&&Go(Ae.shift(),e)},onattribname(e,t){re={type:6,name:Be(e,t),nameLoc:Ee(e,t),value:void 0,loc:Ee(e)}},ondirname(e,t){const i=Be(e,t),n=i==="."||i===":"?"bind":i==="@"?"on":i==="#"?"slot":i.slice(2);if(!hi&&n===""&&Bt(26,e),hi||n==="")re={type:6,name:i,nameLoc:Ee(e,t),value:void 0,loc:Ee(e)};else if(re={type:7,name:n,rawName:i,exp:void 0,arg:void 0,modifiers:i==="."?[oe("prop")]:[],loc:Ee(e)},n==="pre"){hi=_e.inVPre=!0,Lr=Je;const o=Je.props;for(let s=0;s<o.length;s++)o[s].type===7&&(o[s]=cy(o[s]))}},ondirarg(e,t){if(e===t)return;const i=Be(e,t);if(hi&&!jl(re))re.name+=i,Pi(re.nameLoc,t);else{const n=i[0]!=="[";re.arg=$o(n?i:i.slice(1,-1),n,Ee(e,t),n?3:0)}},ondirmodifier(e,t){const i=Be(e,t);if(hi&&!jl(re))re.name+="."+i,Pi(re.nameLoc,t);else if(re.name==="slot"){const n=re.arg;n&&(n.content+="."+i,Pi(n.loc,t))}else{const n=oe(i,!0,Ee(e,t));re.modifiers.push(n)}},onattribdata(e,t){st+=Be(e,t),Ut<0&&(Ut=e),ki=t},onattribentity(e,t,i){st+=e,Ut<0&&(Ut=t),ki=i},onattribnameend(e){const t=re.loc.start.offset,i=Be(t,e);re.type===7&&(re.rawName=i),Je.props.some(n=>(n.type===7?n.rawName:n.name)===i)&&Bt(2,t)},onattribend(e,t){if(Je&&re){if(Pi(re.loc,t),e!==0)if(st.includes("&")&&(st=de.decodeEntities(st,!0)),re.type===6)re.name==="class"&&(st=Gh(st).trim()),e===1&&!st&&Bt(13,t),re.value={type:2,content:st,loc:e===1?Ee(Ut,ki):Ee(Ut-1,ki+1)},_e.inSFCRoot&&Je.tag==="template"&&re.name==="lang"&&st&&st!=="html"&&_e.enterRCDATA(ys("</template"),0);else{let i=0;re.exp=$o(st,!1,Ee(Ut,ki),0,i),re.name==="for"&&(re.forParseResult=ey(re.exp));let n=-1;re.name==="bind"&&(n=re.modifiers.findIndex(o=>o.content==="sync"))>-1&&ho("COMPILER_V_BIND_SYNC",de,re.loc,re.arg.loc.source)&&(re.name="model",re.modifiers.splice(n,1))}(re.type!==7||re.name!=="pre")&&Je.props.push(re)}st="",Ut=ki=-1},oncomment(e,t){de.comments&&Fr({type:3,content:Be(e,t),loc:Ee(e-4,t+3)})},onend(){const e=Yt.length;for(let t=0;t<Ae.length;t++)Go(Ae[t],e-1),Bt(24,Ae[t].loc.start.offset)},oncdata(e,t){Ae[0].ns!==0?qo(Be(e,t),e,t):Bt(1,e-9)},onprocessinginstruction(e){(Ae[0]?Ae[0].ns:de.ns)===0&&Bt(21,e-1)}}),Hl=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Xg=/^\(|\)$/g;function ey(e){const t=e.loc,i=e.content,n=i.match(Zg);if(!n)return;const[,o,s]=n,r=(h,p,d=!1)=>{const y=t.start.offset+p,v=y+h.length;return $o(h,!1,Ee(y,v),0,d?1:0)},a={source:r(s.trim(),i.indexOf(s,o.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=o.trim().replace(Xg,"").trim();const u=o.indexOf(l),c=l.match(Hl);if(c){l=l.replace(Hl,"").trim();const h=c[1].trim();let p;if(h&&(p=i.indexOf(h,u+l.length),a.key=r(h,p,!0)),c[2]){const d=c[2].trim();d&&(a.index=r(d,i.indexOf(d,a.key?p+h.length:u+l.length),!0))}}return l&&(a.value=r(l,u,!0)),a}function Be(e,t){return Yt.slice(e,t)}function Gl(e){_e.inSFCRoot&&(Je.innerLoc=Ee(e+1,e+1)),Fr(Je);const{tag:t,ns:i}=Je;i===0&&de.isPreTag(t)&&Wa++,de.isVoidTag(t)?Go(Je,e):(Ae.unshift(Je),(i===1||i===2)&&(_e.inXML=!0)),Je=null}function qo(e,t,i){{const s=Ae[0]&&Ae[0].tag;s!=="script"&&s!=="style"&&e.includes("&")&&(e=de.decodeEntities(e,!1))}const n=Ae[0]||fo,o=n.children[n.children.length-1];o&&o.type===2?(o.content+=e,Pi(o.loc,i)):n.children.push({type:2,content:e,loc:Ee(t,i)})}function Go(e,t,i=!1){i?Pi(e.loc,Vh(t,60)):Pi(e.loc,ty(t,62)+1),_e.inSFCRoot&&(e.children.length?e.innerLoc.end=le({},e.children[e.children.length-1].loc.end):e.innerLoc.end=le({},e.innerLoc.start),e.innerLoc.source=Be(e.innerLoc.start.offset,e.innerLoc.end.offset));const{tag:n,ns:o,children:s}=e;if(hi||(n==="slot"?e.tagType=2:$l(e)?e.tagType=3:ny(e)&&(e.tagType=1)),_e.inRCDATA||(e.children=Hh(s)),o===0&&de.isIgnoreNewlineTag(n)){const r=s[0];r&&r.type===2&&(r.content=r.content.replace(/^\r?\n/,""))}o===0&&de.isPreTag(n)&&Wa--,Lr===e&&(hi=_e.inVPre=!1,Lr=null),_e.inXML&&(Ae[0]?Ae[0].ns:de.ns)===0&&(_e.inXML=!1);{const r=e.props;if(!_e.inSFCRoot&&Ri("COMPILER_NATIVE_TEMPLATE",de)&&e.tag==="template"&&!$l(e)){const l=Ae[0]||fo,u=l.children.indexOf(e);l.children.splice(u,1,...e.children)}const a=r.find(l=>l.type===6&&l.name==="inline-template");a&&ho("COMPILER_INLINE_TEMPLATE",de,a.loc)&&e.children.length&&(a.value={type:2,content:Be(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:a.loc})}}function ty(e,t){let i=e;for(;Yt.charCodeAt(i)!==t&&i<Yt.length-1;)i++;return i}function Vh(e,t){let i=e;for(;Yt.charCodeAt(i)!==t&&i>=0;)i--;return i}const iy=new Set(["if","else","else-if","for","slot"]);function $l({tag:e,props:t}){if(e==="template"){for(let i=0;i<t.length;i++)if(t[i].type===7&&iy.has(t[i].name))return!0}return!1}function ny({tag:e,props:t}){if(de.isCustomElement(e))return!1;if(e==="component"||oy(e.charCodeAt(0))||Bh(e)||de.isBuiltInComponent&&de.isBuiltInComponent(e)||de.isNativeTag&&!de.isNativeTag(e))return!0;for(let i=0;i<t.length;i++){const n=t[i];if(n.type===6){if(n.name==="is"&&n.value){if(n.value.content.startsWith("vue:"))return!0;if(ho("COMPILER_IS_ON_ELEMENT",de,n.loc))return!0}}else if(n.name==="bind"&&Ii(n.arg,"is")&&ho("COMPILER_IS_ON_ELEMENT",de,n.loc))return!0}return!1}function oy(e){return e>64&&e<91}const sy=/\r\n/g;function Hh(e){const t=de.whitespace!=="preserve";let i=!1;for(let n=0;n<e.length;n++){const o=e[n];if(o.type===2)if(Wa)o.content=o.content.replace(sy,`
`);else if(ry(o.content)){const s=e[n-1]&&e[n-1].type,r=e[n+1]&&e[n+1].type;!s||!r||t&&(s===3&&(r===3||r===1)||s===1&&(r===3||r===1&&ay(o.content)))?(i=!0,e[n]=null):o.content=" "}else t&&(o.content=Gh(o.content))}return i?e.filter(Boolean):e}function ry(e){for(let t=0;t<e.length;t++)if(!mt(e.charCodeAt(t)))return!1;return!0}function ay(e){for(let t=0;t<e.length;t++){const i=e.charCodeAt(t);if(i===10||i===13)return!0}return!1}function Gh(e){let t="",i=!1;for(let n=0;n<e.length;n++)mt(e.charCodeAt(n))?i||(t+=" ",i=!0):(t+=e[n],i=!1);return t}function Fr(e){(Ae[0]||fo).children.push(e)}function Ee(e,t){return{start:_e.getPos(e),end:t==null?t:_e.getPos(t),source:t==null?t:Be(e,t)}}function ly(e){return Ee(e.start.offset,e.end.offset)}function Pi(e,t){e.end=_e.getPos(t),e.source=Be(e.start.offset,t)}function cy(e){const t={type:6,name:e.rawName,nameLoc:Ee(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){const i=e.exp.loc;i.end.offset<e.loc.end.offset&&(i.start.offset--,i.start.column--,i.end.offset++,i.end.column++),t.value={type:2,content:e.exp.content,loc:i}}return t}function $o(e,t=!1,i,n=0,o=0){return oe(e,t,i,n)}function Bt(e,t,i){de.onError(Ie(e,Ee(t,t)))}function uy(){_e.reset(),Je=null,re=null,st="",Ut=-1,ki=-1,Ae.length=0}function hy(e,t){if(uy(),Yt=e,de=le({},jh),t){let o;for(o in t)t[o]!=null&&(de[o]=t[o])}_e.mode=de.parseMode==="html"?1:de.parseMode==="sfc"?2:0,_e.inXML=de.ns===1||de.ns===2;const i=t&&t.delimiters;i&&(_e.delimiterOpen=ys(i[0]),_e.delimiterClose=ys(i[1]));const n=fo=Fg([],e);return _e.parse(Yt),n.loc=Ee(0,e.length),n.children=Hh(n.children),fo=null,n}function py(e,t){Yo(e,void 0,t,!!$h(e))}function $h(e){const t=e.children.filter(i=>i.type!==3);return t.length===1&&t[0].type===1&&!bs(t[0])?t[0]:null}function Yo(e,t,i,n=!1,o=!1){const{children:s}=e,r=[];for(let c=0;c<s.length;c++){const h=s[c];if(h.type===1&&h.tagType===0){const p=n?0:gt(h,i);if(p>0){if(p>=2){h.codegenNode.patchFlag=-1,r.push(h);continue}}else{const d=h.codegenNode;if(d.type===13){const y=d.patchFlag;if((y===void 0||y===512||y===1)&&Kh(h,i)>=2){const v=Jh(h);v&&(d.props=i.hoist(v))}d.dynamicProps&&(d.dynamicProps=i.hoist(d.dynamicProps))}}}else if(h.type===12&&(n?0:gt(h,i))>=2){h.codegenNode.type===14&&h.codegenNode.arguments.length>0&&h.codegenNode.arguments.push("-1"),r.push(h);continue}if(h.type===1){const p=h.tagType===1;p&&i.scopes.vSlot++,Yo(h,e,i,!1,o),p&&i.scopes.vSlot--}else if(h.type===11)Yo(h,e,i,h.children.length===1,!0);else if(h.type===9)for(let p=0;p<h.branches.length;p++)Yo(h.branches[p],e,i,h.branches[p].children.length===1,o)}let a=!1;if(r.length===s.length&&e.type===1){if(e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&H(e.codegenNode.children))e.codegenNode.children=l(Ei(e.codegenNode.children)),a=!0;else if(e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!H(e.codegenNode.children)&&e.codegenNode.children.type===15){const c=u(e.codegenNode,"default");c&&(c.returns=l(Ei(c.returns)),a=!0)}else if(e.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!H(t.codegenNode.children)&&t.codegenNode.children.type===15){const c=kt(e,"slot",!0),h=c&&c.arg&&u(t.codegenNode,c.arg);h&&(h.returns=l(Ei(h.returns)),a=!0)}}if(!a)for(const c of r)c.codegenNode=i.cache(c.codegenNode);function l(c){const h=i.cache(c);return h.needArraySpread=!0,h}function u(c,h){if(c.children&&!H(c.children)&&c.children.type===15){const p=c.children.properties.find(d=>d.key===h||d.key.content===h);return p&&p.value}}r.length&&i.transformHoist&&i.transformHoist(s,i,e)}function gt(e,t){const{constantCache:i}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;const n=i.get(e);if(n!==void 0)return n;const o=e.codegenNode;if(o.type!==13||o.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject"&&e.tag!=="math")return 0;if(o.patchFlag===void 0){let r=3;const a=Kh(e,t);if(a===0)return i.set(e,0),0;a<r&&(r=a);for(let l=0;l<e.children.length;l++){const u=gt(e.children[l],t);if(u===0)return i.set(e,0),0;u<r&&(r=u)}if(r>1)for(let l=0;l<e.props.length;l++){const u=e.props[l];if(u.type===7&&u.name==="bind"&&u.exp){const c=gt(u.exp,t);if(c===0)return i.set(e,0),0;c<r&&(r=c)}}if(o.isBlock){for(let l=0;l<e.props.length;l++)if(e.props[l].type===7)return i.set(e,0),0;t.removeHelper(Ni),t.removeHelper(Sn(t.inSSR,o.isComponent)),o.isBlock=!1,t.helper(kn(t.inSSR,o.isComponent))}return i.set(e,r),r}else return i.set(e,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return gt(e.content,t);case 4:return e.constType;case 8:let s=3;for(let r=0;r<e.children.length;r++){const a=e.children[r];if(ie(a)||ut(a))continue;const l=gt(a,t);if(l===0)return 0;l<s&&(s=l)}return s;case 20:return 2;default:return 0}}const dy=new Set([Na,La,co,Io]);function Yh(e,t){if(e.type===14&&!ie(e.callee)&&dy.has(e.callee)){const i=e.arguments[0];if(i.type===4)return gt(i,t);if(i.type===14)return Yh(i,t)}return 0}function Kh(e,t){let i=3;const n=Jh(e);if(n&&n.type===15){const{properties:o}=n;for(let s=0;s<o.length;s++){const{key:r,value:a}=o[s],l=gt(r,t);if(l===0)return l;l<i&&(i=l);let u;if(a.type===4?u=gt(a,t):a.type===14?u=Yh(a,t):u=0,u===0)return u;u<i&&(i=u)}}return i}function Jh(e){const t=e.codegenNode;if(t.type===13)return t.props}function fy(e,{filename:t="",prefixIdentifiers:i=!1,hoistStatic:n=!1,hmr:o=!1,cacheHandlers:s=!1,nodeTransforms:r=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:u=Ve,isCustomElement:c=Ve,expressionPlugins:h=[],scopeId:p=null,slotted:d=!0,ssr:y=!1,inSSR:v=!1,ssrCssVars:_="",bindingMetadata:P=ae,inline:k=!1,isTS:m=!1,onError:b=za,onWarn:S=qh,compatConfig:F}){const q=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),E={filename:t,selfName:q&&Di(Se(q[1])),prefixIdentifiers:i,hoistStatic:n,hmr:o,cacheHandlers:s,nodeTransforms:r,directiveTransforms:a,transformHoist:l,isBuiltInComponent:u,isCustomElement:c,expressionPlugins:h,scopeId:p,slotted:d,ssr:y,inSSR:v,ssrCssVars:_,bindingMetadata:P,inline:k,isTS:m,onError:b,onWarn:S,compatConfig:F,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(w){const x=E.helpers.get(w)||0;return E.helpers.set(w,x+1),w},removeHelper(w){const x=E.helpers.get(w);if(x){const B=x-1;B?E.helpers.set(w,B):E.helpers.delete(w)}},helperString(w){return`_${wn[E.helper(w)]}`},replaceNode(w){E.parent.children[E.childIndex]=E.currentNode=w},removeNode(w){const x=E.parent.children,B=w?x.indexOf(w):E.currentNode?E.childIndex:-1;!w||w===E.currentNode?(E.currentNode=null,E.onNodeRemoved()):E.childIndex>B&&(E.childIndex--,E.onNodeRemoved()),E.parent.children.splice(B,1)},onNodeRemoved:Ve,addIdentifiers(w){},removeIdentifiers(w){},hoist(w){ie(w)&&(w=oe(w)),E.hoists.push(w);const x=oe(`_hoisted_${E.hoists.length}`,!1,w.loc,2);return x.hoisted=w,x},cache(w,x=!1,B=!1){const A=Dg(E.cached.length,w,x,B);return E.cached.push(A),A}};return E.filters=new Set,E}function my(e,t){const i=fy(e,t);Vs(e,i),t.hoistStatic&&py(e,i),t.ssr||gy(e,i),e.helpers=new Set([...i.helpers.keys()]),e.components=[...i.components],e.directives=[...i.directives],e.imports=i.imports,e.hoists=i.hoists,e.temps=i.temps,e.cached=i.cached,e.transformed=!0,e.filters=[...i.filters]}function gy(e,t){const{helper:i}=t,{children:n}=e;if(n.length===1){const o=$h(e);if(o&&o.codegenNode){const s=o.codegenNode;s.type===13&&Ba(s,t),e.codegenNode=s}else e.codegenNode=n[0]}else if(n.length>1){let o=64;e.codegenNode=uo(t,i(lo),void 0,e.children,o,void 0,void 0,!0,void 0,!1)}}function yy(e,t){let i=0;const n=()=>{i--};for(;i<e.children.length;i++){const o=e.children[i];ie(o)||(t.grandParent=t.parent,t.parent=e,t.childIndex=i,t.onNodeRemoved=n,Vs(o,t))}}function Vs(e,t){t.currentNode=e;const{nodeTransforms:i}=t,n=[];for(let s=0;s<i.length;s++){const r=i[s](e,t);if(r&&(H(r)?n.push(...r):n.push(r)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(Ao);break;case 5:t.ssr||t.helper(Ws);break;case 9:for(let s=0;s<e.branches.length;s++)Vs(e.branches[s],t);break;case 10:case 11:case 1:case 0:yy(e,t);break}t.currentNode=e;let o=n.length;for(;o--;)n[o]()}function Qh(e,t){const i=ie(e)?n=>n===e:n=>e.test(n);return(n,o)=>{if(n.type===1){const{props:s}=n;if(n.tagType===3&&s.some(Kg))return;const r=[];for(let a=0;a<s.length;a++){const l=s[a];if(l.type===7&&i(l.name)){s.splice(a,1),a--;const u=t(n,l,o);u&&r.push(u)}}return r}}}const Hs="/*@__PURE__*/",Zh=e=>`${wn[e]}: _${wn[e]}`;function vy(e,{mode:t="function",prefixIdentifiers:i=t==="module",sourceMap:n=!1,filename:o="template.vue.html",scopeId:s=null,optimizeImports:r=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:u="vue/server-renderer",ssr:c=!1,isTS:h=!1,inSSR:p=!1}){const d={mode:t,prefixIdentifiers:i,sourceMap:n,filename:o,scopeId:s,optimizeImports:r,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:u,ssr:c,isTS:h,inSSR:p,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(v){return`_${wn[v]}`},push(v,_=-2,P){d.code+=v},indent(){y(++d.indentLevel)},deindent(v=!1){v?--d.indentLevel:y(--d.indentLevel)},newline(){y(d.indentLevel)}};function y(v){d.push(`
`+"  ".repeat(v),0)}return d}function by(e,t={}){const i=vy(e,t);t.onContextCreated&&t.onContextCreated(i);const{mode:n,push:o,prefixIdentifiers:s,indent:r,deindent:a,newline:l,scopeId:u,ssr:c}=i,h=Array.from(e.helpers),p=h.length>0,d=!s&&n!=="module";wy(e,i);const v=c?"ssrRender":"render",P=(c?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(o(`function ${v}(${P}) {`),r(),d&&(o("with (_ctx) {"),r(),p&&(o(`const { ${h.map(Zh).join(", ")} } = _Vue
`,-1),l())),e.components.length&&(cr(e.components,"component",i),(e.directives.length||e.temps>0)&&l()),e.directives.length&&(cr(e.directives,"directive",i),e.temps>0&&l()),e.filters&&e.filters.length&&(l(),cr(e.filters,"filter",i),l()),e.temps>0){o("let ");for(let k=0;k<e.temps;k++)o(`${k>0?", ":""}_temp${k}`)}return(e.components.length||e.directives.length||e.temps)&&(o(`
`,0),l()),c||o("return "),e.codegenNode?et(e.codegenNode,i):o("null"),d&&(a(),o("}")),a(),o("}"),{ast:e,code:i.code,preamble:"",map:i.map?i.map.toJSON():void 0}}function wy(e,t){const{ssr:i,prefixIdentifiers:n,push:o,newline:s,runtimeModuleName:r,runtimeGlobalName:a,ssrRuntimeModuleName:l}=t,u=a,c=Array.from(e.helpers);if(c.length>0&&(o(`const _Vue = ${u}
`,-1),e.hoists.length)){const h=[Ia,Pa,Ao,xa,Nh].filter(p=>c.includes(p)).map(Zh).join(", ");o(`const { ${h} } = _Vue
`,-1)}Ty(e.hoists,t),s(),o("return ")}function cr(e,t,{helper:i,push:n,newline:o,isTS:s}){const r=i(t==="filter"?Ra:t==="component"?_a:Ea);for(let a=0;a<e.length;a++){let l=e[a];const u=l.endsWith("__self");u&&(l=l.slice(0,-6)),n(`const ${po(l,t)} = ${r}(${JSON.stringify(l)}${u?", true":""})${s?"!":""}`),a<e.length-1&&o()}}function Ty(e,t){if(!e.length)return;t.pure=!0;const{push:i,newline:n}=t;n();for(let o=0;o<e.length;o++){const s=e[o];s&&(i(`const _hoisted_${o+1} = `),et(s,t),n())}t.pure=!1}function ja(e,t){const i=e.length>3||!1;t.push("["),i&&t.indent(),Po(e,t,i),i&&t.deindent(),t.push("]")}function Po(e,t,i=!1,n=!0){const{push:o,newline:s}=t;for(let r=0;r<e.length;r++){const a=e[r];ie(a)?o(a,-3):H(a)?ja(a,t):et(a,t),r<e.length-1&&(i?(n&&o(","),s()):n&&o(", "))}}function et(e,t){if(ie(e)){t.push(e,-3);return}if(ut(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:et(e.codegenNode,t);break;case 2:ky(e,t);break;case 4:Xh(e,t);break;case 5:Sy(e,t);break;case 12:et(e.codegenNode,t);break;case 8:ep(e,t);break;case 3:Iy(e,t);break;case 13:Py(e,t);break;case 14:_y(e,t);break;case 15:Cy(e,t);break;case 17:Ey(e,t);break;case 18:Ry(e,t);break;case 19:Oy(e,t);break;case 20:My(e,t);break;case 21:Po(e.body,t,!0,!1);break}}function ky(e,t){t.push(JSON.stringify(e.content),-3,e)}function Xh(e,t){const{content:i,isStatic:n}=e;t.push(n?JSON.stringify(i):i,-3,e)}function Sy(e,t){const{push:i,helper:n,pure:o}=t;o&&i(Hs),i(`${n(Ws)}(`),et(e.content,t),i(")")}function ep(e,t){for(let i=0;i<e.children.length;i++){const n=e.children[i];ie(n)?t.push(n,-3):et(n,t)}}function Ay(e,t){const{push:i}=t;if(e.type===8)i("["),ep(e,t),i("]");else if(e.isStatic){const n=Ua(e.content)?e.content:JSON.stringify(e.content);i(n,-2,e)}else i(`[${e.content}]`,-3,e)}function Iy(e,t){const{push:i,helper:n,pure:o}=t;o&&i(Hs),i(`${n(Ao)}(${JSON.stringify(e.content)})`,-3,e)}function Py(e,t){const{push:i,helper:n,pure:o}=t,{tag:s,props:r,children:a,patchFlag:l,dynamicProps:u,directives:c,isBlock:h,disableTracking:p,isComponent:d}=e;let y;l&&(y=String(l)),c&&i(n(Oa)+"("),h&&i(`(${n(Ni)}(${p?"true":""}), `),o&&i(Hs);const v=h?Sn(t.inSSR,d):kn(t.inSSR,d);i(n(v)+"(",-2,e),Po(xy([s,r,a,y,u]),t),i(")"),h&&i(")"),c&&(i(", "),et(c,t),i(")"))}function xy(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(i=>i||"null")}function _y(e,t){const{push:i,helper:n,pure:o}=t,s=ie(e.callee)?e.callee:n(e.callee);o&&i(Hs),i(s+"(",-2,e),Po(e.arguments,t),i(")")}function Cy(e,t){const{push:i,indent:n,deindent:o,newline:s}=t,{properties:r}=e;if(!r.length){i("{}",-2,e);return}const a=r.length>1||!1;i(a?"{":"{ "),a&&n();for(let l=0;l<r.length;l++){const{key:u,value:c}=r[l];Ay(u,t),i(": "),et(c,t),l<r.length-1&&(i(","),s())}a&&o(),i(a?"}":" }")}function Ey(e,t){ja(e.elements,t)}function Ry(e,t){const{push:i,indent:n,deindent:o}=t,{params:s,returns:r,body:a,newline:l,isSlot:u}=e;u&&i(`_${wn[Da]}(`),i("(",-2,e),H(s)?Po(s,t):s&&et(s,t),i(") => "),(l||a)&&(i("{"),n()),r?(l&&i("return "),H(r)?ja(r,t):et(r,t)):a&&et(a,t),(l||a)&&(o(),i("}")),u&&(e.isNonScopedSlot&&i(", undefined, true"),i(")"))}function Oy(e,t){const{test:i,consequent:n,alternate:o,newline:s}=e,{push:r,indent:a,deindent:l,newline:u}=t;if(i.type===4){const h=!Ua(i.content);h&&r("("),Xh(i,t),h&&r(")")}else r("("),et(i,t),r(")");s&&a(),t.indentLevel++,s||r(" "),r("? "),et(n,t),t.indentLevel--,s&&u(),s||r(" "),r(": ");const c=o.type===19;c||t.indentLevel++,et(o,t),c||t.indentLevel--,s&&l(!0)}function My(e,t){const{push:i,helper:n,indent:o,deindent:s,newline:r}=t,{needPauseTracking:a,needArraySpread:l}=e;l&&i("[...("),i(`_cache[${e.index}] || (`),a&&(o(),i(`${n(gs)}(-1`),e.inVOnce&&i(", true"),i("),"),r(),i("(")),i(`_cache[${e.index}] = `),et(e.value,t),a&&(i(`).cacheIndex = ${e.index},`),r(),i(`${n(gs)}(1),`),r(),i(`_cache[${e.index}]`),s()),i(")"),l&&i(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const Ny=Qh(/^(?:if|else|else-if)$/,(e,t,i)=>Ly(e,t,i,(n,o,s)=>{const r=i.parent.children;let a=r.indexOf(n),l=0;for(;a-->=0;){const u=r[a];u&&u.type===9&&(l+=u.branches.length)}return()=>{if(s)n.codegenNode=Kl(o,l,i);else{const u=Fy(n.codegenNode);u.alternate=Kl(o,l+n.branches.length-1,i)}}}));function Ly(e,t,i,n){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const o=t.exp?t.exp.loc:e.loc;i.onError(Ie(28,t.loc)),t.exp=oe("true",!1,o)}if(t.name==="if"){const o=Yl(e,t),s={type:9,loc:ly(e.loc),branches:[o]};if(i.replaceNode(s),n)return n(s,o,!0)}else{const o=i.parent.children;let s=o.indexOf(e);for(;s-->=-1;){const r=o[s];if(r&&r.type===3){i.removeNode(r);continue}if(r&&r.type===2&&!r.content.trim().length){i.removeNode(r);continue}if(r&&r.type===9){(t.name==="else-if"||t.name==="else")&&r.branches[r.branches.length-1].condition===void 0&&i.onError(Ie(30,e.loc)),i.removeNode();const a=Yl(e,t);r.branches.push(a);const l=n&&n(r,a,!1);Vs(a,i),l&&l(),i.currentNode=null}else i.onError(Ie(30,e.loc));break}}}function Yl(e,t){const i=e.tagType===3;return{type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:i&&!kt(e,"for")?e.children:[e],userKey:js(e,"key"),isTemplateIf:i}}function Kl(e,t,i){return e.condition?Nr(e.condition,Jl(e,t,i),qe(i.helper(Ao),['""',"true"])):Jl(e,t,i)}function Jl(e,t,i){const{helper:n}=i,o=Ne("key",oe(`${t}`,!1,wt,2)),{children:s}=e,r=s[0];if(s.length!==1||r.type!==1)if(s.length===1&&r.type===11){const l=r.codegenNode;return ws(l,o,i),l}else return uo(i,n(lo),St([o]),s,64,void 0,void 0,!0,!1,!1,e.loc);else{const l=r.codegenNode,u=Qg(l);return u.type===13&&Ba(u,i),ws(u,o,i),l}}function Fy(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const Dy=(e,t,i)=>{const{modifiers:n,loc:o}=e,s=e.arg;let{exp:r}=e;if(r&&r.type===4&&!r.content.trim()&&(r=void 0),!r){if(s.type!==4||!s.isStatic)return i.onError(Ie(52,s.loc)),{props:[Ne(s,oe("",!0,o))]};tp(e),r=e.exp}return s.type!==4?(s.children.unshift("("),s.children.push(') || ""')):s.isStatic||(s.content=s.content?`${s.content} || ""`:'""'),n.some(a=>a.content==="camel")&&(s.type===4?s.isStatic?s.content=Se(s.content):s.content=`${i.helperString(Or)}(${s.content})`:(s.children.unshift(`${i.helperString(Or)}(`),s.children.push(")"))),i.inSSR||(n.some(a=>a.content==="prop")&&Ql(s,"."),n.some(a=>a.content==="attr")&&Ql(s,"^")),{props:[Ne(s,r)]}},tp=(e,t)=>{const i=e.arg,n=Se(i.content);e.exp=oe(n,!1,i.loc)},Ql=(e,t)=>{e.type===4?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},qy=Qh("for",(e,t,i)=>{const{helper:n,removeHelper:o}=i;return By(e,t,i,s=>{const r=qe(n(Ma),[s.source]),a=vs(e),l=kt(e,"memo"),u=js(e,"key",!1,!0);u&&u.type===7&&!u.exp&&tp(u);let h=u&&(u.type===6?u.value?oe(u.value.content,!0):void 0:u.exp);const p=u&&h?Ne("key",h):null,d=s.source.type===4&&s.source.constType>0,y=d?64:u?128:256;return s.codegenNode=uo(i,n(lo),void 0,r,y,void 0,void 0,!0,!d,!1,e.loc),()=>{let v;const{children:_}=s,P=_.length!==1||_[0].type!==1,k=bs(e)?e:a&&e.children.length===1&&bs(e.children[0])?e.children[0]:null;if(k?(v=k.codegenNode,a&&p&&ws(v,p,i)):P?v=uo(i,n(lo),p?St([p]):void 0,e.children,64,void 0,void 0,!0,void 0,!1):(v=_[0].codegenNode,a&&p&&ws(v,p,i),v.isBlock!==!d&&(v.isBlock?(o(Ni),o(Sn(i.inSSR,v.isComponent))):o(kn(i.inSSR,v.isComponent))),v.isBlock=!d,v.isBlock?(n(Ni),n(Sn(i.inSSR,v.isComponent))):n(kn(i.inSSR,v.isComponent))),l){const m=Tn(Dr(s.parseResult,[oe("_cached")]));m.body=qg([Ct(["const _memo = (",l.exp,")"]),Ct(["if (_cached",...h?[" && _cached.key === ",h]:[],` && ${i.helperString(Dh)}(_cached, _memo)) return _cached`]),Ct(["const _item = ",v]),oe("_item.memo = _memo"),oe("return _item")]),r.arguments.push(m,oe("_cache"),oe(String(i.cached.length))),i.cached.push(null)}else r.arguments.push(Tn(Dr(s.parseResult),v,!0))}})});function By(e,t,i,n){if(!t.exp){i.onError(Ie(31,t.loc));return}const o=t.forParseResult;if(!o){i.onError(Ie(32,t.loc));return}ip(o);const{addIdentifiers:s,removeIdentifiers:r,scopes:a}=i,{source:l,value:u,key:c,index:h}=o,p={type:11,loc:t.loc,source:l,valueAlias:u,keyAlias:c,objectIndexAlias:h,parseResult:o,children:vs(e)?e.children:[e]};i.replaceNode(p),a.vFor++;const d=n&&n(p);return()=>{a.vFor--,d&&d()}}function ip(e,t){e.finalized||(e.finalized=!0)}function Dr({value:e,key:t,index:i},n=[]){return zy([e,t,i,...n])}function zy(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((i,n)=>i||oe("_".repeat(n+1),!1))}const Zl=oe("undefined",!1),Uy=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const i=kt(e,"slot");if(i)return i.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},Wy=(e,t,i,n)=>Tn(e,i,!1,!0,i.length?i[0].loc:n);function jy(e,t,i=Wy){t.helper(Da);const{children:n,loc:o}=e,s=[],r=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const l=kt(e,"slot",!0);if(l){const{arg:_,exp:P}=l;_&&!ct(_)&&(a=!0),s.push(Ne(_||oe("default",!0),i(P,void 0,n,o)))}let u=!1,c=!1;const h=[],p=new Set;let d=0;for(let _=0;_<n.length;_++){const P=n[_];let k;if(!vs(P)||!(k=kt(P,"slot",!0))){P.type!==3&&h.push(P);continue}if(l){t.onError(Ie(37,k.loc));break}u=!0;const{children:m,loc:b}=P,{arg:S=oe("default",!0),exp:F,loc:q}=k;let E;ct(S)?E=S?S.content:"default":a=!0;const w=kt(P,"for"),x=i(F,w,m,b);let B,A;if(B=kt(P,"if"))a=!0,r.push(Nr(B.exp,Bo(S,x,d++),Zl));else if(A=kt(P,/^else(?:-if)?$/,!0)){let z=_,K;for(;z--&&(K=n[z],!(K.type!==3&&qr(K))););if(K&&vs(K)&&kt(K,/^(?:else-)?if$/)){let Z=r[r.length-1];for(;Z.alternate.type===19;)Z=Z.alternate;Z.alternate=A.exp?Nr(A.exp,Bo(S,x,d++),Zl):Bo(S,x,d++)}else t.onError(Ie(30,A.loc))}else if(w){a=!0;const z=w.forParseResult;z?(ip(z),r.push(qe(t.helper(Ma),[z.source,Tn(Dr(z),Bo(S,x),!0)]))):t.onError(Ie(32,w.loc))}else{if(E){if(p.has(E)){t.onError(Ie(38,q));continue}p.add(E),E==="default"&&(c=!0)}s.push(Ne(S,x))}}if(!l){const _=(P,k)=>{const m=i(P,void 0,k,o);return t.compatConfig&&(m.isNonScopedSlot=!0),Ne("default",m)};u?h.length&&h.some(P=>qr(P))&&(c?t.onError(Ie(39,h[0].loc)):s.push(_(void 0,h))):s.push(_(void 0,n))}const y=a?2:Ko(e.children)?3:1;let v=St(s.concat(Ne("_",oe(y+"",!1))),o);return r.length&&(v=qe(t.helper(Fh),[v,Ei(r)])),{slots:v,hasDynamicSlots:a}}function Bo(e,t,i){const n=[Ne("name",e),Ne("fn",t)];return i!=null&&n.push(Ne("key",oe(String(i),!0))),St(n)}function Ko(e){for(let t=0;t<e.length;t++){const i=e[t];switch(i.type){case 1:if(i.tagType===2||Ko(i.children))return!0;break;case 9:if(Ko(i.branches))return!0;break;case 10:case 11:if(Ko(i.children))return!0;break}}return!1}function qr(e){return e.type!==2&&e.type!==12?!0:e.type===2?!!e.content.trim():qr(e.content)}const np=new WeakMap,Vy=(e,t)=>function(){if(e=t.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:n,props:o}=e,s=e.tagType===1;let r=s?Hy(e,t):`"${n}"`;const a=ye(r)&&r.callee===Ca;let l,u,c=0,h,p,d,y=a||r===Kn||r===Aa||!s&&(n==="svg"||n==="foreignObject"||n==="math");if(o.length>0){const v=op(e,t,void 0,s,a);l=v.props,c=v.patchFlag,p=v.dynamicPropNames;const _=v.directives;d=_&&_.length?Ei(_.map(P=>$y(P,t))):void 0,v.shouldUseBlock&&(y=!0)}if(e.children.length>0)if(r===fs&&(y=!0,c|=1024),s&&r!==Kn&&r!==fs){const{slots:_,hasDynamicSlots:P}=jy(e,t);u=_,P&&(c|=1024)}else if(e.children.length===1&&r!==Kn){const _=e.children[0],P=_.type,k=P===5||P===8;k&&gt(_,t)===0&&(c|=1),k||P===2?u=_:u=e.children}else u=e.children;p&&p.length&&(h=Yy(p)),e.codegenNode=uo(t,r,l,u,c===0?void 0:c,h,d,!!y,!1,s,e.loc)};function Hy(e,t,i=!1){let{tag:n}=e;const o=Br(n),s=js(e,"is",!1,!0);if(s)if(o||Ri("COMPILER_IS_ON_ELEMENT",t)){let a;if(s.type===6?a=s.value&&oe(s.value.content,!0):(a=s.exp,a||(a=oe("is",!1,s.arg.loc))),a)return qe(t.helper(Ca),[a])}else s.type===6&&s.value.content.startsWith("vue:")&&(n=s.value.content.slice(4));const r=Bh(n)||t.isBuiltInComponent(n);return r?(i||t.helper(r),r):(t.helper(_a),t.components.add(n),po(n,"component"))}function op(e,t,i=e.props,n,o,s=!1){const{tag:r,loc:a,children:l}=e;let u=[];const c=[],h=[],p=l.length>0;let d=!1,y=0,v=!1,_=!1,P=!1,k=!1,m=!1,b=!1;const S=[],F=x=>{u.length&&(c.push(St(Xl(u),a)),u=[]),x&&c.push(x)},q=()=>{t.scopes.vFor>0&&u.push(Ne(oe("ref_for",!0),oe("true")))},E=({key:x,value:B})=>{if(ct(x)){const A=x.content,z=Li(A);if(z&&(!n||o)&&A.toLowerCase()!=="onclick"&&A!=="onUpdate:modelValue"&&!di(A)&&(k=!0),z&&di(A)&&(b=!0),z&&B.type===14&&(B=B.arguments[0]),B.type===20||(B.type===4||B.type===8)&&gt(B,t)>0)return;A==="ref"?v=!0:A==="class"?_=!0:A==="style"?P=!0:A!=="key"&&!S.includes(A)&&S.push(A),n&&(A==="class"||A==="style")&&!S.includes(A)&&S.push(A)}else m=!0};for(let x=0;x<i.length;x++){const B=i[x];if(B.type===6){const{loc:A,name:z,nameLoc:K,value:Z}=B;let U=!0;if(z==="ref"&&(v=!0,q()),z==="is"&&(Br(r)||Z&&Z.content.startsWith("vue:")||Ri("COMPILER_IS_ON_ELEMENT",t)))continue;u.push(Ne(oe(z,!0,K),oe(Z?Z.content:"",U,Z?Z.loc:A)))}else{const{name:A,arg:z,exp:K,loc:Z,modifiers:U}=B,Y=A==="bind",$=A==="on";if(A==="slot"){n||t.onError(Ie(40,Z));continue}if(A==="once"||A==="memo"||A==="is"||Y&&Ii(z,"is")&&(Br(r)||Ri("COMPILER_IS_ON_ELEMENT",t))||$&&s)continue;if((Y&&Ii(z,"key")||$&&p&&Ii(z,"vue:before-update"))&&(d=!0),Y&&Ii(z,"ref")&&q(),!z&&(Y||$)){if(m=!0,K)if(Y){if(F(),Ri("COMPILER_V_BIND_OBJECT_ORDER",t)){c.unshift(K);continue}q(),F(),c.push(K)}else F({type:14,loc:Z,callee:t.helper(Fa),arguments:n?[K]:[K,"true"]});else t.onError(Ie(Y?34:35,Z));continue}Y&&U.some(He=>He.content==="prop")&&(y|=32);const ve=t.directiveTransforms[A];if(ve){const{props:He,needRuntime:Ge}=ve(B,e,t);!s&&He.forEach(E),$&&z&&!ct(z)?F(St(He,a)):u.push(...He),Ge&&(h.push(B),ut(Ge)&&np.set(B,Ge))}else Wp(A)||(h.push(B),p&&(d=!0))}}let w;if(c.length?(F(),c.length>1?w=qe(t.helper(ms),c,a):w=c[0]):u.length&&(w=St(Xl(u),a)),m?y|=16:(_&&!n&&(y|=2),P&&!n&&(y|=4),S.length&&(y|=8),k&&(y|=32)),!d&&(y===0||y===32)&&(v||b||h.length>0)&&(y|=512),!t.inSSR&&w)switch(w.type){case 15:let x=-1,B=-1,A=!1;for(let Z=0;Z<w.properties.length;Z++){const U=w.properties[Z].key;ct(U)?U.content==="class"?x=Z:U.content==="style"&&(B=Z):U.isHandlerKey||(A=!0)}const z=w.properties[x],K=w.properties[B];A?w=qe(t.helper(co),[w]):(z&&!ct(z.value)&&(z.value=qe(t.helper(Na),[z.value])),K&&(P||K.value.type===4&&K.value.content.trim()[0]==="["||K.value.type===17)&&(K.value=qe(t.helper(La),[K.value])));break;case 14:break;default:w=qe(t.helper(co),[qe(t.helper(Io),[w])]);break}return{props:w,directives:h,patchFlag:y,dynamicPropNames:S,shouldUseBlock:d}}function Xl(e){const t=new Map,i=[];for(let n=0;n<e.length;n++){const o=e[n];if(o.key.type===8||!o.key.isStatic){i.push(o);continue}const s=o.key.content,r=t.get(s);r?(s==="style"||s==="class"||Li(s))&&Gy(r,o):(t.set(s,o),i.push(o))}return i}function Gy(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=Ei([e.value,t.value],e.loc)}function $y(e,t){const i=[],n=np.get(e);n?i.push(t.helperString(n)):(t.helper(Ea),t.directives.add(e.name),i.push(po(e.name,"directive")));const{loc:o}=e;if(e.exp&&i.push(e.exp),e.arg&&(e.exp||i.push("void 0"),i.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||i.push("void 0"),i.push("void 0"));const s=oe("true",!1,o);i.push(St(e.modifiers.map(r=>Ne(r,s)),o))}return Ei(i,e.loc)}function Yy(e){let t="[";for(let i=0,n=e.length;i<n;i++)t+=JSON.stringify(e[i]),i<n-1&&(t+=", ");return t+"]"}function Br(e){return e==="component"||e==="Component"}const Ky=(e,t)=>{if(bs(e)){const{children:i,loc:n}=e,{slotName:o,slotProps:s}=Jy(e,t),r=[t.prefixIdentifiers?"_ctx.$slots":"$slots",o,"{}","undefined","true"];let a=2;s&&(r[2]=s,a=3),i.length&&(r[3]=Tn([],i,!1,!1,n),a=4),t.scopeId&&!t.slotted&&(a=5),r.splice(a),e.codegenNode=qe(t.helper(Lh),r,n)}};function Jy(e,t){let i='"default"',n;const o=[];for(let s=0;s<e.props.length;s++){const r=e.props[s];if(r.type===6)r.value&&(r.name==="name"?i=JSON.stringify(r.value.content):(r.name=Se(r.name),o.push(r)));else if(r.name==="bind"&&Ii(r.arg,"name")){if(r.exp)i=r.exp;else if(r.arg&&r.arg.type===4){const a=Se(r.arg.content);i=r.exp=oe(a,!1,r.arg.loc)}}else r.name==="bind"&&r.arg&&ct(r.arg)&&(r.arg.content=Se(r.arg.content)),o.push(r)}if(o.length>0){const{props:s,directives:r}=op(e,t,o,!1,!1);n=s,r.length&&t.onError(Ie(36,r[0].loc))}return{slotName:i,slotProps:n}}const sp=(e,t,i,n)=>{const{loc:o,modifiers:s,arg:r}=e;!e.exp&&!s.length&&i.onError(Ie(35,o));let a;if(r.type===4)if(r.isStatic){let h=r.content;h.startsWith("vue:")&&(h=`vnode-${h.slice(4)}`);const p=t.tagType!==0||h.startsWith("vnode")||!/[A-Z]/.test(h)?hn(Se(h)):`on:${h}`;a=oe(p,!0,r.loc)}else a=Ct([`${i.helperString(Mr)}(`,r,")"]);else a=r,a.children.unshift(`${i.helperString(Mr)}(`),a.children.push(")");let l=e.exp;l&&!l.content.trim()&&(l=void 0);let u=i.cacheHandlers&&!l&&!i.inVOnce;if(l){const h=Uh(l),p=!(h||$g(l)),d=l.content.includes(";");(p||u&&h)&&(l=Ct([`${p?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let c={props:[Ne(a,l||oe("() => {}",!1,o))]};return n&&(c=n(c)),u&&(c.props[0].value=i.cache(c.props[0].value)),c.props.forEach(h=>h.key.isHandlerKey=!0),c},Qy=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const i=e.children;let n,o=!1;for(let s=0;s<i.length;s++){const r=i[s];if(lr(r)){o=!0;for(let a=s+1;a<i.length;a++){const l=i[a];if(lr(l))n||(n=i[s]=Ct([r],r.loc)),n.children.push(" + ",l),i.splice(a,1),a--;else{n=void 0;break}}}}if(!(!o||i.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(s=>s.type===7&&!t.directiveTransforms[s.name])&&e.tag!=="template")))for(let s=0;s<i.length;s++){const r=i[s];if(lr(r)||r.type===8){const a=[];(r.type!==2||r.content!==" ")&&a.push(r),!t.ssr&&gt(r,t)===0&&a.push("1"),i[s]={type:12,content:r,loc:r.loc,codegenNode:qe(t.helper(xa),a)}}}}},ec=new WeakSet,Zy=(e,t)=>{if(e.type===1&&kt(e,"once",!0))return ec.has(e)||t.inVOnce||t.inSSR?void 0:(ec.add(e),t.inVOnce=!0,t.helper(gs),()=>{t.inVOnce=!1;const i=t.currentNode;i.codegenNode&&(i.codegenNode=t.cache(i.codegenNode,!0,!0))})},rp=(e,t,i)=>{const{exp:n,arg:o}=e;if(!n)return i.onError(Ie(41,e.loc)),zo();const s=n.loc.source.trim(),r=n.type===4?n.content:s,a=i.bindingMetadata[s];if(a==="props"||a==="props-aliased")return i.onError(Ie(44,n.loc)),zo();if(!r.trim()||!Uh(n))return i.onError(Ie(42,n.loc)),zo();const l=o||oe("modelValue",!0),u=o?ct(o)?`onUpdate:${Se(o.content)}`:Ct(['"onUpdate:" + ',o]):"onUpdate:modelValue";let c;const h=i.isTS?"($event: any)":"$event";c=Ct([`${h} => ((`,n,") = $event)"]);const p=[Ne(l,e.exp),Ne(u,c)];if(e.modifiers.length&&t.tagType===1){const d=e.modifiers.map(v=>v.content).map(v=>(Ua(v)?v:JSON.stringify(v))+": true").join(", "),y=o?ct(o)?`${o.content}Modifiers`:Ct([o,' + "Modifiers"']):"modelModifiers";p.push(Ne(y,oe(`{ ${d} }`,!1,e.loc,2)))}return zo(p)};function zo(e=[]){return{props:e}}const Xy=/[\w).+\-_$\]]/,ev=(e,t)=>{Ri("COMPILER_FILTERS",t)&&(e.type===5?Ts(e.content,t):e.type===1&&e.props.forEach(i=>{i.type===7&&i.name!=="for"&&i.exp&&Ts(i.exp,t)}))};function Ts(e,t){if(e.type===4)tc(e,t);else for(let i=0;i<e.children.length;i++){const n=e.children[i];typeof n=="object"&&(n.type===4?tc(n,t):n.type===8?Ts(e,t):n.type===5&&Ts(n.content,t))}}function tc(e,t){const i=e.content;let n=!1,o=!1,s=!1,r=!1,a=0,l=0,u=0,c=0,h,p,d,y,v=[];for(d=0;d<i.length;d++)if(p=h,h=i.charCodeAt(d),n)h===39&&p!==92&&(n=!1);else if(o)h===34&&p!==92&&(o=!1);else if(s)h===96&&p!==92&&(s=!1);else if(r)h===47&&p!==92&&(r=!1);else if(h===124&&i.charCodeAt(d+1)!==124&&i.charCodeAt(d-1)!==124&&!a&&!l&&!u)y===void 0?(c=d+1,y=i.slice(0,d).trim()):_();else{switch(h){case 34:o=!0;break;case 39:n=!0;break;case 96:s=!0;break;case 40:u++;break;case 41:u--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(h===47){let P=d-1,k;for(;P>=0&&(k=i.charAt(P),k===" ");P--);(!k||!Xy.test(k))&&(r=!0)}}y===void 0?y=i.slice(0,d).trim():c!==0&&_();function _(){v.push(i.slice(c,d).trim()),c=d+1}if(v.length){for(d=0;d<v.length;d++)y=tv(y,v[d],t);e.content=y,e.ast=void 0}}function tv(e,t,i){i.helper(Ra);const n=t.indexOf("(");if(n<0)return i.filters.add(t),`${po(t,"filter")}(${e})`;{const o=t.slice(0,n),s=t.slice(n+1);return i.filters.add(o),`${po(o,"filter")}(${e}${s!==")"?","+s:s}`}}const ic=new WeakSet,iv=(e,t)=>{if(e.type===1){const i=kt(e,"memo");return!i||ic.has(e)||t.inSSR?void 0:(ic.add(e),()=>{const n=e.codegenNode||t.currentNode.codegenNode;n&&n.type===13&&(e.tagType!==1&&Ba(n,t),e.codegenNode=qe(t.helper(qa),[i.exp,Tn(void 0,n),"_cache",String(t.cached.length)]),t.cached.push(null))})}};function nv(e){return[[Zy,Ny,iv,qy,ev,Ky,Vy,Uy,Qy],{on:sp,bind:Dy,model:rp}]}function ov(e,t={}){const i=t.onError||za,n=t.mode==="module";t.prefixIdentifiers===!0?i(Ie(47)):n&&i(Ie(48));const o=!1;t.cacheHandlers&&i(Ie(49)),t.scopeId&&!n&&i(Ie(50));const s=le({},t,{prefixIdentifiers:o}),r=ie(e)?hy(e,s):e,[a,l]=nv();return my(r,le({},s,{nodeTransforms:[...a,...t.nodeTransforms||[]],directiveTransforms:le({},l,t.directiveTransforms||{})})),by(r,s)}const sv=()=>({props:[]});/**
* @vue/compiler-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ap=Symbol(""),lp=Symbol(""),cp=Symbol(""),up=Symbol(""),zr=Symbol(""),hp=Symbol(""),pp=Symbol(""),dp=Symbol(""),fp=Symbol(""),mp=Symbol("");Lg({[ap]:"vModelRadio",[lp]:"vModelCheckbox",[cp]:"vModelText",[up]:"vModelSelect",[zr]:"vModelDynamic",[hp]:"withModifiers",[pp]:"withKeys",[dp]:"vShow",[fp]:"Transition",[mp]:"TransitionGroup"});let Wi;function rv(e,t=!1){return Wi||(Wi=document.createElement("div")),t?(Wi.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Wi.children[0].getAttribute("foo")):(Wi.innerHTML=e,Wi.textContent)}const av={parseMode:"html",isVoidTag:sd,isNativeTag:e=>id(e)||nd(e)||od(e),isPreTag:e=>e==="pre",isIgnoreNewlineTag:e=>e==="pre"||e==="textarea",decodeEntities:rv,isBuiltInComponent:e=>{if(e==="Transition"||e==="transition")return fp;if(e==="TransitionGroup"||e==="transition-group")return mp},getNamespace(e,t,i){let n=t?t.ns:i;if(t&&n===2)if(t.tag==="annotation-xml"){if(e==="svg")return 1;t.props.some(o=>o.type===6&&o.name==="encoding"&&o.value!=null&&(o.value.content==="text/html"||o.value.content==="application/xhtml+xml"))&&(n=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!=="mglyph"&&e!=="malignmark"&&(n=0);else t&&n===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(n=0);if(n===0){if(e==="svg")return 1;if(e==="math")return 2}return n}},lv=e=>{e.type===1&&e.props.forEach((t,i)=>{t.type===6&&t.name==="style"&&t.value&&(e.props[i]={type:7,name:"bind",arg:oe("style",!0,t.loc),exp:cv(t.value.content,t.loc),modifiers:[],loc:t.loc})})},cv=(e,t)=>{const i=Rc(e);return oe(JSON.stringify(i),!1,t,3)};function gi(e,t){return Ie(e,t)}const uv=(e,t,i)=>{const{exp:n,loc:o}=e;return n||i.onError(gi(53,o)),t.children.length&&(i.onError(gi(54,o)),t.children.length=0),{props:[Ne(oe("innerHTML",!0,o),n||oe("",!0))]}},hv=(e,t,i)=>{const{exp:n,loc:o}=e;return n||i.onError(gi(55,o)),t.children.length&&(i.onError(gi(56,o)),t.children.length=0),{props:[Ne(oe("textContent",!0),n?gt(n,i)>0?n:qe(i.helperString(Ws),[n],o):oe("",!0))]}},pv=(e,t,i)=>{const n=rp(e,t,i);if(!n.props.length||t.tagType===1)return n;e.arg&&i.onError(gi(58,e.arg.loc));const{tag:o}=t,s=i.isCustomElement(o);if(o==="input"||o==="textarea"||o==="select"||s){let r=cp,a=!1;if(o==="input"||s){const l=js(t,"type");if(l){if(l.type===7)r=zr;else if(l.value)switch(l.value.content){case"radio":r=ap;break;case"checkbox":r=lp;break;case"file":a=!0,i.onError(gi(59,e.loc));break}}else Yg(t)&&(r=zr)}else o==="select"&&(r=up);a||(n.needRuntime=i.helper(r))}else i.onError(gi(57,e.loc));return n.props=n.props.filter(r=>!(r.key.type===4&&r.key.content==="modelValue")),n},dv=bt("passive,once,capture"),fv=bt("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),mv=bt("left,right"),gp=bt("onkeyup,onkeydown,onkeypress"),gv=(e,t,i,n)=>{const o=[],s=[],r=[];for(let a=0;a<t.length;a++){const l=t[a].content;l==="native"&&ho("COMPILER_V_ON_NATIVE",i)||dv(l)?r.push(l):mv(l)?ct(e)?gp(e.content.toLowerCase())?o.push(l):s.push(l):(o.push(l),s.push(l)):fv(l)?s.push(l):o.push(l)}return{keyModifiers:o,nonKeyModifiers:s,eventOptionModifiers:r}},nc=(e,t)=>ct(e)&&e.content.toLowerCase()==="onclick"?oe(t,!0):e.type!==4?Ct(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,yv=(e,t,i)=>sp(e,t,i,n=>{const{modifiers:o}=e;if(!o.length)return n;let{key:s,value:r}=n.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:u}=gv(s,o,i,e.loc);if(l.includes("right")&&(s=nc(s,"onContextmenu")),l.includes("middle")&&(s=nc(s,"onMouseup")),l.length&&(r=qe(i.helper(hp),[r,JSON.stringify(l)])),a.length&&(!ct(s)||gp(s.content.toLowerCase()))&&(r=qe(i.helper(pp),[r,JSON.stringify(a)])),u.length){const c=u.map(Di).join("");s=ct(s)?oe(`${s.content}${c}`,!0):Ct(["(",s,`) + "${c}"`])}return{props:[Ne(s,r)]}}),vv=(e,t,i)=>{const{exp:n,loc:o}=e;return n||i.onError(gi(61,o)),{props:[],needRuntime:i.helper(dp)}},bv=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&t.removeNode()},wv=[lv],Tv={cloak:sv,html:uv,text:hv,model:pv,on:yv,show:vv};function kv(e,t={}){return ov(e,le({},av,t,{nodeTransforms:[bv,...wv,...t.nodeTransforms||[]],directiveTransforms:le({},Tv,t.directiveTransforms||{}),transformHoist:null}))}/**
* vue v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const oc=Object.create(null);function Sv(e,t){if(!ie(e))if(e.nodeType)e=e.innerHTML;else return Ve;const i=Hp(e,t),n=oc[i];if(n)return n;if(e[0]==="#"){const a=document.querySelector(e);e=a?a.innerHTML:""}const o=le({hoistStatic:!0,onError:void 0,onWarn:Ve},t);!o.isCustomElement&&typeof customElements<"u"&&(o.isCustomElement=a=>!!customElements.get(a));const{code:s}=kv(e,o),r=new Function("Vue",s)(Cg);return r._rc=!0,oc[i]=r}nh(Sv);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof document<"u";function yp(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Av(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&yp(e.default)}const me=Object.assign;function ur(e,t){const i={};for(const n in t){const o=t[n];i[n]=Et(o)?o.map(e):e(o)}return i}const Jn=()=>{},Et=Array.isArray,vp=/#/g,Iv=/&/g,Pv=/\//g,xv=/=/g,_v=/\?/g,bp=/\+/g,Cv=/%5B/g,Ev=/%5D/g,wp=/%5E/g,Rv=/%60/g,Tp=/%7B/g,Ov=/%7C/g,kp=/%7D/g,Mv=/%20/g;function Va(e){return encodeURI(""+e).replace(Ov,"|").replace(Cv,"[").replace(Ev,"]")}function Nv(e){return Va(e).replace(Tp,"{").replace(kp,"}").replace(wp,"^")}function Ur(e){return Va(e).replace(bp,"%2B").replace(Mv,"+").replace(vp,"%23").replace(Iv,"%26").replace(Rv,"`").replace(Tp,"{").replace(kp,"}").replace(wp,"^")}function Lv(e){return Ur(e).replace(xv,"%3D")}function Fv(e){return Va(e).replace(vp,"%23").replace(_v,"%3F")}function Dv(e){return e==null?"":Fv(e).replace(Pv,"%2F")}function mo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const qv=/\/$/,Bv=e=>e.replace(qv,"");function hr(e,t,i="/"){let n,o={},s="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),o=e(s)),a>-1&&(n=n||t.slice(0,a),r=t.slice(a,t.length)),n=jv(n??t,i),{fullPath:n+(s&&"?")+s+r,path:n,query:o,hash:mo(r)}}function zv(e,t){const i=t.query?e(t.query):"";return t.path+(i&&"?")+i+(t.hash||"")}function sc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Uv(e,t,i){const n=t.matched.length-1,o=i.matched.length-1;return n>-1&&n===o&&An(t.matched[n],i.matched[o])&&Sp(t.params,i.params)&&e(t.query)===e(i.query)&&t.hash===i.hash}function An(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Sp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(!Wv(e[i],t[i]))return!1;return!0}function Wv(e,t){return Et(e)?rc(e,t):Et(t)?rc(t,e):e===t}function rc(e,t){return Et(t)?e.length===t.length&&e.every((i,n)=>i===t[n]):e.length===1&&e[0]===t}function jv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const i=t.split("/"),n=e.split("/"),o=n[n.length-1];(o===".."||o===".")&&n.push("");let s=i.length-1,r,a;for(r=0;r<n.length;r++)if(a=n[r],a!==".")if(a==="..")s>1&&s--;else break;return i.slice(0,s).join("/")+"/"+n.slice(r).join("/")}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var go;(function(e){e.pop="pop",e.push="push"})(go||(go={}));var Qn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qn||(Qn={}));function Vv(e){if(!e)if(rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bv(e)}const Hv=/^[^#]+#/;function Gv(e,t){return e.replace(Hv,"#")+t}function $v(e,t){const i=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-i.left-(t.left||0),top:n.top-i.top-(t.top||0)}}const Gs=()=>({left:window.scrollX,top:window.scrollY});function Yv(e){let t;if("el"in e){const i=e.el,n=typeof i=="string"&&i.startsWith("#"),o=typeof i=="string"?n?document.getElementById(i.slice(1)):document.querySelector(i):i;if(!o)return;t=$v(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ac(e,t){return(history.state?history.state.position-t:-1)+e}const Wr=new Map;function Kv(e,t){Wr.set(e,t)}function Jv(e){const t=Wr.get(e);return Wr.delete(e),t}let Qv=()=>location.protocol+"//"+location.host;function Ap(e,t){const{pathname:i,search:n,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),sc(l,"")}return sc(i,e)+n+o}function Zv(e,t,i,n){let o=[],s=[],r=null;const a=({state:p})=>{const d=Ap(e,location),y=i.value,v=t.value;let _=0;if(p){if(i.value=d,t.value=p,r&&r===y){r=null;return}_=v?p.position-v.position:0}else n(d);o.forEach(P=>{P(i.value,y,{delta:_,type:go.pop,direction:_?_>0?Qn.forward:Qn.back:Qn.unknown})})};function l(){r=i.value}function u(p){o.push(p);const d=()=>{const y=o.indexOf(p);y>-1&&o.splice(y,1)};return s.push(d),d}function c(){const{history:p}=window;p.state&&p.replaceState(me({},p.state,{scroll:Gs()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function lc(e,t,i,n=!1,o=!1){return{back:e,current:t,forward:i,replaced:n,position:window.history.length,scroll:o?Gs():null}}function Xv(e){const{history:t,location:i}=window,n={value:Ap(e,i)},o={value:t.state};o.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const h=e.indexOf("#"),p=h>-1?(i.host&&document.querySelector("base")?e:e.slice(h))+l:Qv()+e+l;try{t[c?"replaceState":"pushState"](u,"",p),o.value=u}catch(d){console.error(d),i[c?"replace":"assign"](p)}}function r(l,u){const c=me({},t.state,lc(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});s(l,c,!0),n.value=l}function a(l,u){const c=me({},o.value,t.state,{forward:l,scroll:Gs()});s(c.current,c,!0);const h=me({},lc(n.value,l,null),{position:c.position+1},u);s(l,h,!1),n.value=l}return{location:n,state:o,push:a,replace:r}}function eb(e){e=Vv(e);const t=Xv(e),i=Zv(e,t.state,t.location,t.replace);function n(s,r=!0){r||i.pauseListeners(),history.go(s)}const o=me({location:"",base:e,go:n,createHref:Gv.bind(null,e)},t,i);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function tb(e){return typeof e=="string"||e&&typeof e=="object"}function Ip(e){return typeof e=="string"||typeof e=="symbol"}const Pp=Symbol("");var cc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(cc||(cc={}));function In(e,t){return me(new Error,{type:e,[Pp]:!0},t)}function zt(e,t){return e instanceof Error&&Pp in e&&(t==null||!!(e.type&t))}const uc="[^/]+?",ib={sensitive:!1,strict:!1,start:!0,end:!0},nb=/[.+*?^${}()[\]/\\]/g;function ob(e,t){const i=me({},ib,t),n=[];let o=i.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];i.strict&&!u.length&&(o+="/");for(let h=0;h<u.length;h++){const p=u[h];let d=40+(i.sensitive?.25:0);if(p.type===0)h||(o+="/"),o+=p.value.replace(nb,"\\$&"),d+=40;else if(p.type===1){const{value:y,repeatable:v,optional:_,regexp:P}=p;s.push({name:y,repeatable:v,optional:_});const k=P||uc;if(k!==uc){d+=10;try{new RegExp(`(${k})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+b.message)}}let m=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(m=_&&u.length<2?`(?:/${m})`:"/"+m),_&&(m+="?"),o+=m,d+=20,_&&(d+=-8),v&&(d+=-20),k===".*"&&(d+=-50)}c.push(d)}n.push(c)}if(i.strict&&i.end){const u=n.length-1;n[u][n[u].length-1]+=.7000000000000001}i.strict||(o+="/?"),i.end?o+="$":i.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const r=new RegExp(o,i.sensitive?"":"i");function a(u){const c=u.match(r),h={};if(!c)return null;for(let p=1;p<c.length;p++){const d=c[p]||"",y=s[p-1];h[y.name]=d&&y.repeatable?d.split("/"):d}return h}function l(u){let c="",h=!1;for(const p of e){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const d of p)if(d.type===0)c+=d.value;else if(d.type===1){const{value:y,repeatable:v,optional:_}=d,P=y in u?u[y]:"";if(Et(P)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=Et(P)?P.join("/"):P;if(!k)if(_)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);c+=k}}return c||"/"}return{re:r,score:n,keys:s,parse:a,stringify:l}}function sb(e,t){let i=0;for(;i<e.length&&i<t.length;){const n=t[i]-e[i];if(n)return n;i++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function xp(e,t){let i=0;const n=e.score,o=t.score;for(;i<n.length&&i<o.length;){const s=sb(n[i],o[i]);if(s)return s;i++}if(Math.abs(o.length-n.length)===1){if(hc(n))return 1;if(hc(o))return-1}return o.length-n.length}function hc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const rb={type:0,value:""},ab=/[a-zA-Z0-9_]/;function lb(e){if(!e)return[[]];if(e==="/")return[[rb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${i})/"${u}": ${d}`)}let i=0,n=i;const o=[];let s;function r(){s&&o.push(s),s=[]}let a=0,l,u="",c="";function h(){u&&(i===0?s.push({type:0,value:u}):i===1||i===2||i===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&i!==2){n=i,i=4;continue}switch(i){case 0:l==="/"?(u&&h(),r()):l===":"?(h(),i=1):p();break;case 4:p(),i=n;break;case 1:l==="("?i=2:ab.test(l)?p():(h(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:i=3:c+=l;break;case 3:h(),i=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return i===2&&t(`Unfinished custom RegExp for param "${u}"`),h(),r(),o}function cb(e,t,i){const n=ob(lb(e.path),i),o=me(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function ub(e,t){const i=[],n=new Map;t=mc({strict:!1,end:!0,sensitive:!1},t);function o(h){return n.get(h)}function s(h,p,d){const y=!d,v=dc(h);v.aliasOf=d&&d.record;const _=mc(t,h),P=[v];if("alias"in h){const b=typeof h.alias=="string"?[h.alias]:h.alias;for(const S of b)P.push(dc(me({},v,{components:d?d.record.components:v.components,path:S,aliasOf:d?d.record:v})))}let k,m;for(const b of P){const{path:S}=b;if(p&&S[0]!=="/"){const F=p.record.path,q=F[F.length-1]==="/"?"":"/";b.path=p.record.path+(S&&q+S)}if(k=cb(b,p,_),d?d.alias.push(k):(m=m||k,m!==k&&m.alias.push(k),y&&h.name&&!fc(k)&&r(h.name)),_p(k)&&l(k),v.children){const F=v.children;for(let q=0;q<F.length;q++)s(F[q],k,d&&d.children[q])}d=d||k}return m?()=>{r(m)}:Jn}function r(h){if(Ip(h)){const p=n.get(h);p&&(n.delete(h),i.splice(i.indexOf(p),1),p.children.forEach(r),p.alias.forEach(r))}else{const p=i.indexOf(h);p>-1&&(i.splice(p,1),h.record.name&&n.delete(h.record.name),h.children.forEach(r),h.alias.forEach(r))}}function a(){return i}function l(h){const p=db(h,i);i.splice(p,0,h),h.record.name&&!fc(h)&&n.set(h.record.name,h)}function u(h,p){let d,y={},v,_;if("name"in h&&h.name){if(d=n.get(h.name),!d)throw In(1,{location:h});_=d.record.name,y=me(pc(p.params,d.keys.filter(m=>!m.optional).concat(d.parent?d.parent.keys.filter(m=>m.optional):[]).map(m=>m.name)),h.params&&pc(h.params,d.keys.map(m=>m.name))),v=d.stringify(y)}else if(h.path!=null)v=h.path,d=i.find(m=>m.re.test(v)),d&&(y=d.parse(v),_=d.record.name);else{if(d=p.name?n.get(p.name):i.find(m=>m.re.test(p.path)),!d)throw In(1,{location:h,currentLocation:p});_=d.record.name,y=me({},p.params,h.params),v=d.stringify(y)}const P=[];let k=d;for(;k;)P.unshift(k.record),k=k.parent;return{name:_,path:v,params:y,matched:P,meta:pb(P)}}e.forEach(h=>s(h));function c(){i.length=0,n.clear()}return{addRoute:s,resolve:u,removeRoute:r,clearRoutes:c,getRoutes:a,getRecordMatcher:o}}function pc(e,t){const i={};for(const n of t)n in e&&(i[n]=e[n]);return i}function dc(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:hb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function hb(e){const t={},i=e.props||!1;if("component"in e)t.default=i;else for(const n in e.components)t[n]=typeof i=="object"?i[n]:i;return t}function fc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pb(e){return e.reduce((t,i)=>me(t,i.meta),{})}function mc(e,t){const i={};for(const n in e)i[n]=n in t?t[n]:e[n];return i}function db(e,t){let i=0,n=t.length;for(;i!==n;){const s=i+n>>1;xp(e,t[s])<0?n=s:i=s+1}const o=fb(e);return o&&(n=t.lastIndexOf(o,n-1)),n}function fb(e){let t=e;for(;t=t.parent;)if(_p(t)&&xp(e,t)===0)return t}function _p({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function mb(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace(bp," "),r=s.indexOf("="),a=mo(r<0?s:s.slice(0,r)),l=r<0?null:mo(s.slice(r+1));if(a in t){let u=t[a];Et(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function gc(e){let t="";for(let i in e){const n=e[i];if(i=Lv(i),n==null){n!==void 0&&(t+=(t.length?"&":"")+i);continue}(Et(n)?n.map(s=>s&&Ur(s)):[n&&Ur(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+i,s!=null&&(t+="="+s))})}return t}function gb(e){const t={};for(const i in e){const n=e[i];n!==void 0&&(t[i]=Et(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const yb=Symbol(""),yc=Symbol(""),$s=Symbol(""),Ha=Symbol(""),jr=Symbol("");function Dn(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function i(){e=[]}return{add:t,list:()=>e.slice(),reset:i}}function pi(e,t,i,n,o,s=r=>r()){const r=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(In(4,{from:i,to:t})):p instanceof Error?l(p):tb(p)?l(In(2,{from:t,to:p})):(r&&n.enterCallbacks[o]===r&&typeof p=="function"&&r.push(p),a())},c=s(()=>e.call(n&&n.instances[o],t,i,u));let h=Promise.resolve(c);e.length<3&&(h=h.then(u)),h.catch(p=>l(p))})}function pr(e,t,i,n,o=s=>s()){const s=[];for(const r of e)for(const a in r.components){let l=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(yp(l)){const c=(l.__vccOpts||l)[t];c&&s.push(pi(c,i,n,r,a,o))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${r.path}"`);const h=Av(c)?c.default:c;r.mods[a]=c,r.components[a]=h;const d=(h.__vccOpts||h)[t];return d&&pi(d,i,n,r,a,o)()}))}}return s}function vc(e){const t=vt($s),i=vt(Ha),n=We(()=>{const l=be(e.to);return t.resolve(l)}),o=We(()=>{const{matched:l}=n.value,{length:u}=l,c=l[u-1],h=i.matched;if(!c||!h.length)return-1;const p=h.findIndex(An.bind(null,c));if(p>-1)return p;const d=bc(l[u-2]);return u>1&&bc(c)===d&&h[h.length-1].path!==d?h.findIndex(An.bind(null,l[u-2])):p}),s=We(()=>o.value>-1&&kb(i.params,n.value.params)),r=We(()=>o.value>-1&&o.value===i.matched.length-1&&Sp(i.params,n.value.params));function a(l={}){if(Tb(l)){const u=t[be(e.replace)?"replace":"push"](be(e.to)).catch(Jn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:n,href:We(()=>n.value.href),isActive:s,isExactActive:r,navigate:a}}function vb(e){return e.length===1?e[0]:e}const bb=Pt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vc,setup(e,{slots:t}){const i=_n(vc(e)),{options:n}=vt($s),o=We(()=>({[wc(e.activeClass,n.linkActiveClass,"router-link-active")]:i.isActive,[wc(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:i.isExactActive}));return()=>{const s=t.default&&vb(t.default(i));return e.custom?s:Fe("a",{"aria-current":i.isExactActive?e.ariaCurrentValue:null,href:i.href,onClick:i.navigate,class:o.value},s)}}}),wb=bb;function Tb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function kb(e,t){for(const i in t){const n=t[i],o=e[i];if(typeof n=="string"){if(n!==o)return!1}else if(!Et(o)||o.length!==n.length||n.some((s,r)=>s!==o[r]))return!1}return!0}function bc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wc=(e,t,i)=>e??t??i,Sb=Pt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:i}){const n=vt(jr),o=We(()=>e.route||n.value),s=vt(yc,0),r=We(()=>{let u=be(s);const{matched:c}=o.value;let h;for(;(h=c[u])&&!h.components;)u++;return u}),a=We(()=>o.value.matched[r.value]);Gn(yc,We(()=>r.value+1)),Gn(yb,a),Gn(jr,o);const l=he();return $t(()=>[l.value,a.value,e.name],([u,c,h],[p,d,y])=>{c&&(c.instances[h]=u,d&&d!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!An(c,d)||!p)&&(c.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,h=a.value,p=h&&h.components[c];if(!p)return Tc(i.default,{Component:p,route:u});const d=h.props[c],y=d?d===!0?u.params:typeof d=="function"?d(u):d:null,_=Fe(p,me({},y,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[c]=null)},ref:l}));return Tc(i.default,{Component:_,route:u})||_}}});function Tc(e,t){if(!e)return null;const i=e(t);return i.length===1?i[0]:i}const Ab=Sb;function Ib(e){const t=ub(e.routes,e),i=e.parseQuery||mb,n=e.stringifyQuery||gc,o=e.history,s=Dn(),r=Dn(),a=Dn(),l=sa(si);let u=si;rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ur.bind(null,N=>""+N),h=ur.bind(null,Dv),p=ur.bind(null,mo);function d(N,G){let V,J;return Ip(N)?(V=t.getRecordMatcher(N),J=G):J=N,t.addRoute(J,V)}function y(N){const G=t.getRecordMatcher(N);G&&t.removeRoute(G)}function v(){return t.getRoutes().map(N=>N.record)}function _(N){return!!t.getRecordMatcher(N)}function P(N,G){if(G=me({},G||l.value),typeof N=="string"){const g=hr(i,N,G.path),I=t.resolve({path:g.path},G),D=o.createHref(g.fullPath);return me(g,I,{params:p(I.params),hash:mo(g.hash),redirectedFrom:void 0,href:D})}let V;if(N.path!=null)V=me({},N,{path:hr(i,N.path,G.path).path});else{const g=me({},N.params);for(const I in g)g[I]==null&&delete g[I];V=me({},N,{params:h(g)}),G.params=h(G.params)}const J=t.resolve(V,G),ue=N.hash||"";J.params=c(p(J.params));const we=zv(n,me({},N,{hash:Nv(ue),path:J.path})),f=o.createHref(we);return me({fullPath:we,hash:ue,query:n===gc?gb(N.query):N.query||{}},J,{redirectedFrom:void 0,href:f})}function k(N){return typeof N=="string"?hr(i,N,l.value.path):me({},N)}function m(N,G){if(u!==N)return In(8,{from:G,to:N})}function b(N){return q(N)}function S(N){return b(me(k(N),{replace:!0}))}function F(N){const G=N.matched[N.matched.length-1];if(G&&G.redirect){const{redirect:V}=G;let J=typeof V=="function"?V(N):V;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=k(J):{path:J},J.params={}),me({query:N.query,hash:N.hash,params:J.path!=null?{}:N.params},J)}}function q(N,G){const V=u=P(N),J=l.value,ue=N.state,we=N.force,f=N.replace===!0,g=F(V);if(g)return q(me(k(g),{state:typeof g=="object"?me({},ue,g.state):ue,force:we,replace:f}),G||V);const I=V;I.redirectedFrom=G;let D;return!we&&Uv(n,J,V)&&(D=In(16,{to:I,from:J}),Ge(J,J,!0,!1)),(D?Promise.resolve(D):x(I,J)).catch(O=>zt(O)?zt(O,2)?O:He(O):$(O,I,J)).then(O=>{if(O){if(zt(O,2))return q(me({replace:f},k(O.to),{state:typeof O.to=="object"?me({},ue,O.to.state):ue,force:we}),G||I)}else O=A(I,J,!0,f,ue);return B(I,J,O),O})}function E(N,G){const V=m(N,G);return V?Promise.reject(V):Promise.resolve()}function w(N){const G=ii.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(N):N()}function x(N,G){let V;const[J,ue,we]=Pb(N,G);V=pr(J.reverse(),"beforeRouteLeave",N,G);for(const g of J)g.leaveGuards.forEach(I=>{V.push(pi(I,N,G))});const f=E.bind(null,N,G);return V.push(f),ot(V).then(()=>{V=[];for(const g of s.list())V.push(pi(g,N,G));return V.push(f),ot(V)}).then(()=>{V=pr(ue,"beforeRouteUpdate",N,G);for(const g of ue)g.updateGuards.forEach(I=>{V.push(pi(I,N,G))});return V.push(f),ot(V)}).then(()=>{V=[];for(const g of we)if(g.beforeEnter)if(Et(g.beforeEnter))for(const I of g.beforeEnter)V.push(pi(I,N,G));else V.push(pi(g.beforeEnter,N,G));return V.push(f),ot(V)}).then(()=>(N.matched.forEach(g=>g.enterCallbacks={}),V=pr(we,"beforeRouteEnter",N,G,w),V.push(f),ot(V))).then(()=>{V=[];for(const g of r.list())V.push(pi(g,N,G));return V.push(f),ot(V)}).catch(g=>zt(g,8)?g:Promise.reject(g))}function B(N,G,V){a.list().forEach(J=>w(()=>J(N,G,V)))}function A(N,G,V,J,ue){const we=m(N,G);if(we)return we;const f=G===si,g=rn?history.state:{};V&&(J||f?o.replace(N.fullPath,me({scroll:f&&g&&g.scroll},ue)):o.push(N.fullPath,ue)),l.value=N,Ge(N,G,V,f),He()}let z;function K(){z||(z=o.listen((N,G,V)=>{if(!Bi.listening)return;const J=P(N),ue=F(J);if(ue){q(me(ue,{replace:!0,force:!0}),J).catch(Jn);return}u=J;const we=l.value;rn&&Kv(ac(we.fullPath,V.delta),Gs()),x(J,we).catch(f=>zt(f,12)?f:zt(f,2)?(q(me(k(f.to),{force:!0}),J).then(g=>{zt(g,20)&&!V.delta&&V.type===go.pop&&o.go(-1,!1)}).catch(Jn),Promise.reject()):(V.delta&&o.go(-V.delta,!1),$(f,J,we))).then(f=>{f=f||A(J,we,!1),f&&(V.delta&&!zt(f,8)?o.go(-V.delta,!1):V.type===go.pop&&zt(f,20)&&o.go(-1,!1)),B(J,we,f)}).catch(Jn)}))}let Z=Dn(),U=Dn(),Y;function $(N,G,V){He(N);const J=U.list();return J.length?J.forEach(ue=>ue(N,G,V)):console.error(N),Promise.reject(N)}function ve(){return Y&&l.value!==si?Promise.resolve():new Promise((N,G)=>{Z.add([N,G])})}function He(N){return Y||(Y=!N,K(),Z.list().forEach(([G,V])=>N?V(N):G()),Z.reset()),N}function Ge(N,G,V,J){const{scrollBehavior:ue}=e;if(!rn||!ue)return Promise.resolve();const we=!V&&Jv(ac(N.fullPath,0))||(J||!V)&&history.state&&history.state.scroll||null;return En().then(()=>ue(N,G,we)).then(f=>f&&Yv(f)).catch(f=>$(f,N,G))}const $e=N=>o.go(N);let ti;const ii=new Set,Bi={currentRoute:l,listening:!0,addRoute:d,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:_,getRoutes:v,resolve:P,options:e,push:b,replace:S,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:s.add,beforeResolve:r.add,afterEach:a.add,onError:U.add,isReady:ve,install(N){const G=this;N.component("RouterLink",wb),N.component("RouterView",Ab),N.config.globalProperties.$router=G,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),rn&&!ti&&l.value===si&&(ti=!0,b(o.location).catch(ue=>{}));const V={};for(const ue in si)Object.defineProperty(V,ue,{get:()=>l.value[ue],enumerable:!0});N.provide($s,G),N.provide(Ha,na(V)),N.provide(jr,l);const J=N.unmount;ii.add(N),N.unmount=function(){ii.delete(N),ii.size<1&&(u=si,z&&z(),z=null,l.value=si,ti=!1,Y=!1),J()}}};function ot(N){return N.reduce((G,V)=>G.then(()=>w(V)),Promise.resolve())}return Bi}function Pb(e,t){const i=[],n=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let r=0;r<s;r++){const a=t.matched[r];a&&(e.matched.find(u=>An(u,a))?n.push(a):i.push(a));const l=e.matched[r];l&&(t.matched.find(u=>An(u,l))||o.push(l))}return[i,n,o]}function xb(){return vt($s)}function _w(e){return vt(Ha)}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Cp;const Ys=e=>Cp=e,Ep=Symbol();function Vr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Zn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Zn||(Zn={}));function _b(){const e=Zr(!0),t=e.run(()=>he({}));let i=[],n=[];const o=Os({install(s){Ys(o),o._a=s,s.provide(Ep,o),s.config.globalProperties.$pinia=o,n.forEach(r=>i.push(r)),n=[]},use(s){return this._a?i.push(s):n.push(s),this},_p:i,_a:null,_e:e,_s:new Map,state:t});return o}const Rp=()=>{};function kc(e,t,i,n=Rp){e.push(t);const o=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),n())};return!i&&Xr()&&Lc(o),o}function ji(e,...t){e.slice().forEach(i=>{i(...t)})}const Cb=e=>e(),Sc=Symbol(),dr=Symbol();function Hr(e,t){e instanceof Map&&t instanceof Map?t.forEach((i,n)=>e.set(n,i)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const i in t){if(!t.hasOwnProperty(i))continue;const n=t[i],o=e[i];Vr(o)&&Vr(n)&&e.hasOwnProperty(i)&&!Pe(n)&&!Lt(n)?e[i]=Hr(o,n):e[i]=n}return e}const Eb=Symbol();function Rb(e){return!Vr(e)||!e.hasOwnProperty(Eb)}const{assign:ai}=Object;function Ob(e){return!!(Pe(e)&&e.effect)}function Mb(e,t,i,n){const{state:o,actions:s,getters:r}=t,a=i.state.value[e];let l;function u(){a||(i.state.value[e]=o?o():{});const c=Xc(i.state.value[e]);return ai(c,s,Object.keys(r||{}).reduce((h,p)=>(h[p]=Os(We(()=>{Ys(i);const d=i._s.get(e);return r[p].call(d,d)})),h),{}))}return l=Op(e,u,t,i,n,!0),l}function Op(e,t,i={},n,o,s){let r;const a=ai({actions:{}},i),l={deep:!0};let u,c,h=[],p=[],d;const y=n.state.value[e];!s&&!y&&(n.state.value[e]={}),he({});let v;function _(E){let w;u=c=!1,typeof E=="function"?(E(n.state.value[e]),w={type:Zn.patchFunction,storeId:e,events:d}):(Hr(n.state.value[e],E),w={type:Zn.patchObject,payload:E,storeId:e,events:d});const x=v=Symbol();En().then(()=>{v===x&&(u=!0)}),c=!0,ji(h,w,n.state.value[e])}const P=s?function(){const{state:w}=i,x=w?w():{};this.$patch(B=>{ai(B,x)})}:Rp;function k(){r.stop(),h=[],p=[],n._s.delete(e)}const m=(E,w="")=>{if(Sc in E)return E[dr]=w,E;const x=function(){Ys(n);const B=Array.from(arguments),A=[],z=[];function K(Y){A.push(Y)}function Z(Y){z.push(Y)}ji(p,{args:B,name:x[dr],store:S,after:K,onError:Z});let U;try{U=E.apply(this&&this.$id===e?this:S,B)}catch(Y){throw ji(z,Y),Y}return U instanceof Promise?U.then(Y=>(ji(A,Y),Y)).catch(Y=>(ji(z,Y),Promise.reject(Y))):(ji(A,U),U)};return x[Sc]=!0,x[dr]=w,x},b={_p:n,$id:e,$onAction:kc.bind(null,p),$patch:_,$reset:P,$subscribe(E,w={}){const x=kc(h,E,w.detached,()=>B()),B=r.run(()=>$t(()=>n.state.value[e],A=>{(w.flush==="sync"?c:u)&&E({storeId:e,type:Zn.direct,events:d},A)},ai({},l,w)));return x},$dispose:k},S=_n(b);n._s.set(e,S);const q=(n._a&&n._a.runWithContext||Cb)(()=>n._e.run(()=>(r=Zr()).run(()=>t({action:m}))));for(const E in q){const w=q[E];if(Pe(w)&&!Ob(w)||Lt(w))s||(y&&Rb(w)&&(Pe(w)?w.value=y[E]:Hr(w,y[E])),n.state.value[e][E]=w);else if(typeof w=="function"){const x=m(w,E);q[E]=x,a.actions[E]=w}}return ai(S,q),ai(ce(S),q),Object.defineProperty(S,"$state",{get:()=>n.state.value[e],set:E=>{_(w=>{ai(w,E)})}}),n._p.forEach(E=>{ai(S,r.run(()=>E({store:S,app:n._a,pinia:n,options:a})))}),y&&s&&i.hydrate&&i.hydrate(S.$state,y),u=!0,c=!0,S}/*! #__NO_SIDE_EFFECTS__ */function Ks(e,t,i){let n,o;const s=typeof t=="function";typeof e=="string"?(n=e,o=s?i:t):(o=e,n=e.id);function r(a,l){const u=xu();return a=a||(u?vt(Ep,null):null),a&&Ys(a),a=Cp,a._s.has(n)||(s?Op(n,t,o,a):Mb(n,o,a)),a._s.get(n)}return r.$id=n,r}const Ga=Ks("navigation",()=>{const e=he("generate"),t=he(!1),i=he(!1),n=[{id:"generate",name:"生成",icon:"🏠",path:"/generate",color:"#3B82F6"},{id:"optimize",name:"优化",icon:"⚡",path:"/optimize",color:"#F59E0B"},{id:"playground",name:"操练场",icon:"🎯",path:"/playground",color:"#10B981"},{id:"library",name:"我的",icon:"📚",path:"/library",color:"#8B5CF6"}],o=We(()=>n.find(c=>c.id===e.value)||n[0]),s=We(()=>t.value?"60px":"140px");return{currentModule:e,sidebarCollapsed:t,isMobile:i,modules:n,currentModuleConfig:o,sidebarWidth:s,setCurrentModule:c=>{e.value=c},toggleSidebar:()=>{t.value=!t.value},setMobile:c=>{i.value=c,c&&(t.value=!0)},getModuleByPath:c=>n.find(h=>h.path===c)}}),Mp=Ks("auth",()=>{const e=he(localStorage.getItem("yprompt_token")),t=he(null),i=he(!1),n=We(()=>!!e.value&&!!t.value),o=y=>{e.value=y,y?localStorage.setItem("yprompt_token",y):localStorage.removeItem("yprompt_token")},s=y=>{t.value=y,y?localStorage.setItem("yprompt_user",JSON.stringify(y)):localStorage.removeItem("yprompt_user")},r=()=>{const y=localStorage.getItem("yprompt_user");if(y)try{t.value=JSON.parse(y)}catch{localStorage.removeItem("yprompt_user")}},a=async(y,v)=>{i.value=!0;try{const P=await(await fetch("/api/auth/local/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:y,password:v})})).json();if(P.code===200&&P.data){o(P.data.token),s(P.data.user);try{const{promptConfigManager:k}=await xe(async()=>{const{promptConfigManager:m}=await Promise.resolve().then(()=>Db);return{promptConfigManager:m}},void 0);await k.forceReloadFromCloud()}catch(k){console.error("登录后加载云端配置失败:",k)}return!0}else return!1}catch{return!1}finally{i.value=!1}},l=async(y,v,_)=>{i.value=!0;try{const k=await(await fetch("/api/auth/local/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:y,password:v,name:_})})).json();return k.code===200?{success:!0}:{success:!1,error:k.message||"注册失败"}}catch{return{success:!1,error:"网络错误，请稍后重试"}}finally{i.value=!1}},u=async()=>{try{const v=await(await fetch("/api/auth/config")).json();return v.code===200&&v.data?v.data:null}catch{return null}},c=async()=>{if(!e.value)return!1;try{const v=await(await fetch("/api/auth/refresh",{method:"POST",headers:{Authorization:`Bearer ${e.value}`,"Content-Type":"application/json"}})).json();return v.code===200&&v.data?(o(v.data.token),!0):!1}catch{return!1}},h=async()=>{if(!e.value)return!1;try{const v=await(await fetch("/api/auth/userinfo",{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json();return v.code===200&&v.data?(s(v.data),!0):!1}catch{return!1}};return{token:e,user:t,isLoading:i,isLoggedIn:n,setToken:o,setUser:s,loginWithPassword:a,register:l,getAuthConfig:u,refreshToken:c,fetchUserInfo:h,logout:async()=>{if(e.value)try{await fetch("/api/auth/logout",{method:"POST",headers:{Authorization:`Bearer ${e.value}`}})}catch{}o(null),s(null),sessionStorage.removeItem("yprompt_config_session_loaded"),["user_prompt_optimize_data","yprompt_optimize_active_mode","yprompt_optimize_cache","yprompt_user_optimize_active_tab","yprompt_optimize_loaded_user_prompt","yprompt_optimize_result","yprompt_generate_messages","yprompt_generate_prompt_data","yprompt_settings_cache"].forEach(_=>{localStorage.removeItem(_)}),Object.keys(localStorage).forEach(_=>{(_.startsWith("yprompt_")||_.startsWith("user_prompt_"))&&_!=="yprompt_token"&&_!=="yprompt_user"&&localStorage.removeItem(_)})},initialize:async()=>{r(),e.value&&!t.value&&await h()}}}),Nb=Object.freeze(Object.defineProperty({__proto__:null,useAuthStore:Mp},Symbol.toStringTag,{value:"Module"})),Vi=`# Architecting Intelligence: A Definitive Guide to the Art and Science of Elite Prompt Engineering

# Chapter 1: The Philosophy of Prompting: An Introduction to Human-AI Collaboration

## 1.1 The Dawn of a New Dialogue

In the rapidly expanding landscape of artificial intelligence, the Large Language Model (LLM) has emerged as a transformative force, a tool with the potential to redefine productivity, creativity, and problem-solving. Yet, the immense power of these models is often gated by a single, critical factor: the quality of the communication they receive. This is where the discipline of prompt engineering begins.

A **prompt** is, in its simplest form, the instruction, question, or input you provide to an AI model. It is the catalyst for every interaction, the starting point of every generated sentence, image, or line of code. **Prompt engineering**, therefore, is the art and science of designing these inputs to guide an AI model toward precise, reliable, and high-value outputs.

It is crucial to demystify the term "engineering." This discipline requires no background in software development or data science. Rather, it is fundamentally a discipline of communication. Think of it as learning the language of your new, incredibly capable collaborator. The more clearly, specifically, and contextually you can communicate your intent, the more accurately the AI can execute your vision. The quality of the input does not just influence the output; it dictates it.

This guide serves as a comprehensive framework for mastering this new form of dialogue. It is built on the philosophy that interacting with an AI is not a simple transaction of question and answer. It is about architecting conversations, engineering behavior, and forging a collaborative partnership that elevates the capabilities of both human and machine.

## 1.2 The AI as Collaborator, Not an Oracle

A common misconception is to view an LLM as an omniscient oracle—a magic box that holds all the answers, waiting for the right question to unlock them. This perspective is limiting. A more powerful and accurate mental model is to view the AI as an infinitely skilled but freshly hired assistant who has read the entire internet but possesses no specific context about you, your goals, or your current task. They have amnesia about every conversation the moment it ends.

This assistant is a powerful prediction engine. When you provide a prompt, the LLM does not "understand" your request in the human sense. Instead, it performs a complex statistical analysis to predict the most probable sequence of words (or "tokens") that should follow your input, based on the vast patterns it learned during its training. Your prompt sets the initial conditions for this prediction. It creates a starting point from which the AI charts its most likely path forward.

Therefore, the role of the prompt engineer is not that of a mere questioner, but of a director, a strategist, and an architect.

- **As a Director:** You provide the AI, your "actor," with a role, a motivation, and moment-to-moment instructions to guide its performance.
- **As a Strategist:** You break down complex problems into logical sequences, anticipating where the AI might falter and providing the necessary scaffolding for it to succeed.
- **As an Architect:** You build the very foundation of the AI's behavior through carefully constructed system prompts, defining its personality, its constraints, and its core operational logic.

In this collaborative model, the user becomes the **prime mover**. You are not passively receiving information; you are actively shaping the AI's thought process. Your expertise, clarity, and strategic communication are what transform the AI from a general-purpose tool into a specialized, proactive partner.

## 1.3 Why Prompting is a Foundational Skill

The ability to craft effective prompts is rapidly becoming a cornerstone of modern literacy, as essential as writing a clear email or creating a compelling presentation. It is the foundational skill for effective human-AI collaboration. Mastering it unlocks several key advantages:

1. **Precision and Reliability:** Well-crafted prompts dramatically reduce ambiguity, leading to outputs that are more accurate, relevant, and aligned with your specific needs. This minimizes the need for endless revisions and course corrections.
2. **Efficiency and Productivity:** By providing clear, detailed, and context-rich instructions upfront, you enable the AI to perform complex tasks faster and more effectively, saving significant time and effort.
3. **Unlocking Advanced Capabilities:** Basic questions yield basic answers. Advanced prompting techniques—such as instructing the AI to "think step-by-step" or to adopt an expert persona—unlock deeper reasoning, creativity, and problem-solving capabilities that are otherwise inaccessible.
4. **Harnessing Specialization:** Through prompting, you can instantly transform a generalist AI into a specialist. You can command it to be a confrontational code reviewer, a humorous travel guide, a formal legal analyst, or a persuasive marketing copywriter, tailoring its expertise to the precise needs of the task at hand.

## 1.4 The Journey Ahead: From Operator to Architect

Mastery of prompt engineering is not a static achievement but a dynamic, iterative skill. It requires curiosity, experimentation, and a willingness to refine your approach based on the AI's responses. The principles outlined in this guide provide the architectural and conversational tools needed to move beyond simple interactions and begin building truly powerful and reliable AI-driven processes.

This guide will systematically deconstruct the practice of prompt engineering, covering:

- **The Anatomy of a Prompt:** Understanding the core components that make an instruction effective.
- **System vs. User Prompts:** Mastering the distinction between the AI's foundational "constitution" and the dynamic "directives" that guide its tasks.
- **A Toolkit of Strategies:** From basic techniques like providing examples (few-shot prompting) to advanced reasoning frameworks like Chain-of-Thought (CoT), Tree-of-Thoughts (ToT), and interactive paradigms like ReAct.
- **Structuring and Control:** Learning how to use structural elements like XML tags and specific output formats like JSON to command predictable, machine-readable results.
- **Complex Workflows:** Exploring how to chain prompts together and orchestrate teams of specialized AI agents to tackle multi-faceted projects.

The ultimate goal is to empower you, the user, to transition from being a simple operator of an AI to becoming a true architect of its intelligence. By learning to communicate with intention and strategy, you can transform artificial intelligence from a promising tool into a true force multiplier, a process driven entirely by the quality and intelligence of the prompts that guide it.

# Chapter 2: The Anatomy of an Effective Prompt: Mastering Context, Task, and Format

## 2.1 The Blueprint of Communication

If a prompt is the instruction that sets an AI in motion, then its anatomy is the blueprint that dictates the quality and precision of its final construction. An effective prompt is not a single, monolithic command but a carefully assembled set of interlocking components. A vague or poorly constructed prompt forces the AI to make assumptions, leading to generic, irrelevant, or incorrect outputs. A well-architected prompt, however, eliminates ambiguity and guides the model directly to the desired outcome.

Every elite prompt, regardless of its complexity, is built upon three fundamental pillars:

1. **Context:** The background information. The "who" and the "why."
2. **Task:** The specific action to be performed. The "what."
3. **Format:** The desired structure of the output. The "how."

Think of these three pillars as the legs of a tripod. If any one of them is weak or missing, the entire structure becomes unstable. Mastering the art of weaving these elements into a single, coherent instruction is the first and most critical step in transitioning from basic questions to strategic prompt engineering. This chapter will dissect each of these components, providing the principles and tactics needed to build a robust foundation for any AI interaction.

## 2.2 Pillar One: CONTEXT - Setting the Stage

Context is the universe in which your request lives. By default, the AI has no knowledge of your identity, your goals, your audience, or the circumstances surrounding your task. Providing context is the single most effective way to elevate a response from generic to bespoke. It answers the crucial questions of "who" and "why" before the AI even begins to consider the "what."

### 2.2.1 Assigning a Role or Persona

Giving the AI a role is a high-leverage technique that activates a vast network of knowledge, stylistic nuances, and quality standards from its training data. Instead of just a tool, the AI becomes an expert collaborator.

- **Why It Works:** When you tell the AI "You are a seasoned CFO," you are not just applying a label. You are instructing it to access the patterns, vocabulary, tone, and analytical frameworks associated with chief financial officers in its training data. This immediately refines its perspective.
- **Illustrative Example:**
    - **Less Effective:** \`"Analyze these financial statements."\` (The AI doesn't know from what perspective or for what purpose.)
    - **More Effective:** \`"You are the CFO of a high-growth B2B SaaS company presenting to the board. Analyze these Q2 financials. Your focus is on identifying risks to our burn rate while highlighting key growth drivers for our investors."\` (The AI now understands the role, audience, and strategic priorities, leading to a much more insightful analysis.)

### 2.2.2 Providing Background Information

This is the situational data the AI needs to understand the landscape of your task. It can include facts, project details, previous correspondence, or any other relevant information.

- **Why It Works:** Background information grounds the AI's response in reality, preventing it from generating plausible but incorrect information (a phenomenon known as "hallucination").
- **Illustrative Example:**
    - **Less Effective:** \`"Write a marketing email for our new product."\` (The AI knows nothing about the product or its market.)
    - **More Effective:** \`"Our company, 'Innovate Inc.,' is launching a new project management app called 'TaskFlow.' Our target audience is small marketing teams (5-10 people) who feel overwhelmed by complex tools like Jira. The key feature is a one-click Kanban board generator. Draft a marketing email announcing the launch."\` (The AI can now craft a targeted, feature-specific, and benefit-driven message.)

### 2.2.3 Defining the Audience

Explicitly stating who the final output is for is critical for calibrating the tone, complexity, and vocabulary of the response.

- **Why It Works:** The AI adjusts its communication style to be appropriate for the intended reader, ensuring the message is effective and well-received.
- **Illustrative Example:**
    - **Less Effective:** \`"Explain quantum computing."\`
    - **More Effective (for a young audience):** \`"Explain quantum computing to a curious 5th grader. Use a simple analogy involving a coin that can be both heads and tails at the same time."\`
    - **More Effective (for a technical audience):** \`"Explain the concept of quantum superposition as it applies to qubits, intended for an undergraduate student with a foundational understanding of classical physics."\`

### 2.2.4 Stating the Goal or Purpose

Why is this task being performed? What is the ultimate objective? Answering this helps the AI prioritize information and frame its response in the most useful way.

- **Why It Works:** Understanding the end goal allows the AI to make better micro-decisions during the generation process, aligning its output with your strategic intent.
- **Illustrative Example:**
    - **Less Effective:** \`"Summarize this legal contract."\`
    - **More Effective:** \`"I am the CEO of a startup. Summarize this vendor contract with the primary goal of identifying any clauses that pose a significant financial or intellectual property risk to my company. I need to quickly understand our potential liabilities."\`

## 2.3 Pillar Two: TASK - Defining the Action

The task is the verb of your prompt. It is the core directive that tells the AI *what to do*. Clarity and precision in this component are non-negotiable. Ambiguity here leads directly to a failed output.

### 2.3.1 Using Strong, Unambiguous Verbs

Start your instruction with a clear, action-oriented verb.

- **Why It Works:** This immediately focuses the AI on the required operation.
- **Examples:**
    - **Use:** \`Generate\`, \`Analyze\`, \`Rewrite\`, \`Translate\`, \`Summarize\`, \`Classify\`, \`Extract\`, \`Create\`, \`Compare\`, \`Debug\`.
    - **Avoid:** \`Help me with...\`, \`Can you...\`, \`I need something about...\`.

### 2.3.2 Breaking Down Complexity (Chunking)

For any task with multiple steps, do not write a long, convoluted paragraph. Break the task down into a numbered or bulleted list of sequential instructions.

- **Why It Works:** This creates a clear, logical workflow for the AI to follow, ensuring no step is missed. It also allows you to troubleshoot more easily if one part of the output is incorrect.
- **Illustrative Example:**
    - **Less Effective:** \`"Write a blog post about the benefits of remote work, make sure you mention productivity and work-life balance, and also come up with some titles and a call to action."\`
    - **More Effective:**\`"Your task is to create content for a blog post about the benefits of remote work.1. First, generate 5 catchy, SEO-friendly titles for the post.2. Next, write a 400-word blog post that covers two main benefits: increased productivity and improved work-life balance. Provide one concrete example for each.3. Finally, write a compelling call-to-action that encourages readers to share their own remote work experiences in the comments."\`

### 2.3.3 Being Explicit and Specific

Provide precise details and avoid subjective or vague language.

- **Why It Works:** Specificity removes the need for the AI to guess your intent.
- **Illustrative Example (Code Refactoring):**
    - **Less Effective:** \`"Can you improve this code?"\`
    - **More Effective:** \`"Refactor the following Python function. Your goal is to improve its readability and performance. Specifically:1. Replace the nested for-loop with a more efficient list comprehension or generator expression.2. Add type hints to all function arguments and the return value.3. Write a comprehensive docstring that explains what the function does, its parameters, and what it returns."\`

### 2.3.4 Stating Constraints and Boundaries

Clearly define the limits of the task. This includes what to include, what to exclude, and any rules that must be followed. It's often more effective to state what the AI *should* do (affirmative direction) rather than what it *should not* do.

- **Why It Works:** Constraints prevent the AI from introducing irrelevant information or going off on a tangent.
- **Illustrative Example:**
    - **Less Effective:** \`"Plan a trip to Japan. Don't include expensive stuff."\`
    - **More Effective:** \`"Create a 7-day itinerary for a first-time traveler to Japan with a total budget of $2,000 USD after flights. The plan should focus on cultural experiences in Tokyo and Kyoto and must include at least one day of hiking. All suggested restaurants should have an average meal price under $25 USD."\`

## 2.4 Pillar Three: FORMAT - Structuring the Output

The format instruction tells the AI *how* to present its response. Neglecting this often results in a correct but unusable answer—a wall of text when you needed a table, or a paragraph when you needed a machine-readable JSON object.

### 2.4.1 Explicitly Naming the Desired Format

The simplest method is to just state the format you need.

- **Why It Works:** It's a direct command that the AI is highly optimized to follow.
- **Examples:** \`"Write the output as a bulleted list."\`, \`"Format the response as a valid JSON object."\`, \`"Present the comparison in a Markdown table."\`

### 2.4.2 Providing Examples (Few-Shot Formatting)

Showing is more powerful than telling. Provide a clear example of the input and the exact output structure you expect.

- **Why It Works:** This is the most unambiguous way to define a structure. The AI will learn the pattern from your example and apply it to the new input.
- **Illustrative Example (Sentiment Analysis):**
    - **Less Effective:** \`"Analyze the sentiment of this feedback."\`
    - **More Effective:**\`"Analyze the following customer feedback to extract the issue category, sentiment, and priority. Follow the format in the example.\`
        
        \`EXAMPLE:Input: 'The new dashboard is clunky and it takes forever to load!'Category: UI/UX, PerformanceSentiment: NegativePriority: High\`
        
        \`NOW, ANALYZE THIS:Input: 'I love the new integration with Salesforce, but it would be amazing if you could also add support for Hubspot.'"\`
        

### 2.4.3 Specifying Structural Elements and Tone

Go beyond the overall format to define specific sections, writing styles, or stylistic constraints.

- **Why It Works:** This gives you fine-grained control over the composition and feel of the output.
- **Examples:**
    - \`"Write a business proposal. It must include the following sections: Executive Summary, Problem Statement, Proposed Solution, and Pricing."\`
    - \`"Adopt the writing style of The Economist: formal, analytical, and concise."\`
    - \`"Generate a response that is no more than 150 words."\`

## 2.5 Synthesis: Assembling the Elite Prompt

Mastery lies in combining these three pillars—Context, Task, and Format—into a single, coherent blueprint. Let's compare a basic prompt with an elite prompt that synthesizes these principles.

- **Basic Prompt:**\`"Can you write an email about the project update?"\`
- **Elite Prompt (incorporating all three pillars):**
    
    \`"**[CONTEXT]** You are the lead Project Manager for 'Project Phoenix.' I need to send a status update to our non-technical executive stakeholders. We recently encountered an unexpected issue with a third-party API integration that will cause a one-week delay in our launch schedule. The engineering team has already developed a workaround.\`
    
    - \`*[TASK]** Your task is to draft an email that accomplishes the following:1. Briefly summarize the project's overall positive progress.2. Clearly and transparently communicate the one-week delay.3. Explain the root cause of the delay in simple, non-technical terms (mention a 'supplier data connection issue').4. Reassure stakeholders that a solution is in place and confirm the new launch date.\`
    - \`*[FORMAT]** **Subject Line:** Must be clear and professional, like 'Project Phoenix Update & New Launch Date'. **Tone:** The tone should be professional, confident, and reassuring, not alarmist. **Length:** Keep the entire email body under 200 words."\`

By mastering the anatomy of a prompt—methodically providing the context, defining the task, and specifying the format—you move from simply talking *at* the AI to truly collaborating *with* it. This foundational skill is the gateway to unlocking the more advanced reasoning and workflow strategies that will be explored in the chapters to come.

# Chapter 3: The Two Pillars: Distinguishing Between Foundational System Prompts and Dynamic User Prompts

## 3.1 Beyond the Single Command: The Architecture of Interaction

A novice approaches a Large Language Model with a single command, viewing the interaction as a flat, transactional exchange: question in, answer out. A master, however, understands that a truly effective and predictable AI interaction is not a monolithic event. It is an architecture, a carefully designed structure with distinct layers that serve fundamentally different functions.

At the heart of this architecture are two pillars of prompting. Understanding the profound separation between these two—the foundational instructions that define the AI's *being* versus the dynamic instructions that guide its *doing*—is the first and most critical leap toward genuine mastery. This distinction elevates the user from a simple operator to a true architect of the AI's intelligence, enabling the creation of systems that are not just responsive, but also consistent, reliable, and specialized.

To make this distinction clear, we will employ a powerful analogy that will serve as a guidepost for the remainder of this work: **The AI as a Highly Skilled Actor.**

Imagine an AI model as an immensely talented actor, capable of playing any role with astonishing depth. This actor, however, needs direction. The two pillars of prompting represent the two primary forms of direction this actor receives: the detailed character brief they study before ever stepping on stage, and the moment-to-moment instructions they receive from the director during a scene.

## 3.2 Pillar One: System Prompts - The AI's Constitution

A **System Prompt** is the foundational, persistent framework that establishes the AI's core identity, operational constraints, and behavioral rules for the entire duration of a session or task. It is best understood as the AI's "constitution" or its "core programming," set before any direct user interaction begins.

### 3.2.1 The Actor's Character Brief

In our analogy, the system prompt is the **detailed character brief** the actor studies for weeks before filming begins. This brief is the source of truth for their character. It defines:

- **Personality:** Are they witty and cynical, or empathetic and encouraging?
- **Expertise:** Are they a world-renowned cybersecurity analyst, a principal product designer from a FAANG company, or a seasoned travel guide specializing in budget backpacking?
- **Motivations:** What is their primary goal? Is it to provide maximally efficient code, to ensure user safety above all else, or to inspire creativity?
- **Rules and Boundaries:** What will this character never do? Do they avoid technical jargon? Do they always cite their sources? Do they adhere to a specific ethical framework like Dieter Rams' 'Ten principles for good design'?

This character brief is the static, underlying framework that informs every subsequent action and line of dialogue. It is internalized by the actor, becoming the lens through which they interpret every instruction from the director.

### 3.2.2 Function and Purpose

The primary function of the system prompt is to create a **consistent and reliable persona**. It moves the AI from a generic, jack-of-all-trades model to a specialized expert. It dictates the AI's tone, its domain of knowledge, its ethical guardrails, and its overall disposition. In more advanced, agentic applications, the system prompt is where you define the tools the AI is permitted to use (like a code interpreter or a web search API) and the protocols it must follow when using them.

### 3.2.3 Technical Implementation

In the architecture of most modern LLM APIs (such as those from OpenAI and Anthropic), the system prompt corresponds directly to the \`system\` role in the request payload. This message is treated with special significance by the model. It is not just another turn in the conversation; it is a high-priority, persistent directive that heavily influences the model's interpretation of all subsequent \`user\` and \`assistant\` messages within the conversational history.

### 3.2.4 Characteristics of an Effective System Prompt

- **Foundational:** It defines general behavior, not a specific, one-off task.
- **Persistent:** It applies globally across an entire conversational session.
- **Pre-Conversational:** It is set at the beginning, before the user dialogue starts.
- **High-Level:** It establishes the core identity, rules, and constraints of the AI persona.

## 3.3 Pillar Two: User Prompts - The Conversational Directive

A **User Prompt** is the specific, task-oriented instruction provided by the user within an ongoing conversation to accomplish a particular goal. These prompts are dynamic, changing with each turn of the dialogue to reflect the immediate needs of the workflow.

### 3.3.1 The Director's Instructions on Set

Continuing our actor metaphor, user prompts are the **director's moment-to-moment instructions on set**. They are the active commands that guide the actor through a specific scene.

- "Analyze the query performance issue in this specific PostgreSQL table."
- "Now, generate the user documentation for the function we just finalized."
- "Rewrite that last paragraph, but make the tone more urgent."

These instructions are dynamic, contextual, and responsive to the evolving narrative of the task. They guide the actor—who is still fully embodying their pre-studied character brief—through the execution of a specific action. A good director doesn't need to remind the actor of their core personality in every command; they trust the actor has internalized the character brief (the system prompt) and give clear, actionable directives to advance the scene.

### 3.3.2 Function and Purpose

The function of the user prompt is **execution**. It provides the specific data, context, and commands necessary for the AI to perform a discrete task, such as generating code, analyzing a dataset, or summarizing a document. The quality, clarity, and precision of these prompts directly determine the quality of the AI's output for that specific task.

### 3.3.3 Technical Implementation

In API calls, user prompts correspond to the \`user\` role. Each user prompt, along with the AI's corresponding \`assistant\` reply, is appended to the conversation history. This growing history forms the short-term memory and context for the next conversational turn, allowing for a coherent and stateful dialogue.

### 3.3.4 Characteristics of an Effective User Prompt

- **Task-Oriented:** Focused on a specific, immediate goal.
- **Dynamic:** Changes from turn to turn, building on the conversation.
- **Action-Driven:** Uses imperative verbs to command a specific action.
- **Contextual:** Provides the necessary data and immediate context for the task at hand.

## 3.4 The Critical Synergy and Common Pitfalls

The magic of elite prompt engineering happens when these two pillars work in perfect harmony. A brilliantly crafted system prompt creates a deeply embodied, expert AI persona. A series of precise, strategic user prompts then directs that expert persona to execute a complex workflow with stunning accuracy and efficiency. A talented actor who has mastered their role, working with a clear and competent director, will deliver an Oscar-worthy performance.

However, a misunderstanding of this two-pillar architecture leads to predictable and catastrophic failures.

- **Pitfall 1: Obsessing over the System Prompt, Neglecting the User Prompt.** This is the most common failure mode. An engineer spends days crafting the "perfect" AI constitution, defining an elite persona with meticulous detail. They then provide lazy, ambiguous, or contradictory user prompts like "now do the next part." This is akin to hiring Robert De Niro, giving him an incredibly detailed character study, and then on set, the director just shrugs and says, "just do something interesting." The most brilliant actor is rendered useless by poor direction.
- **Pitfall 2: Contaminating the System Prompt with User-Level Instructions.** This error involves placing task-specific examples or one-off instructions inside the global system prompt. This contaminates the AI's core identity. It's like writing a single piece of stage direction—"the character sips their coffee"—into the actor's main character brief. The actor might then inappropriately try to sip coffee in every subsequent scene, whether it's a car chase or a wedding. Specific examples belong in the user prompt, where they apply to the task at hand and then fade into the conversational history.
- **Pitfall 3: Lacking a System Prompt Entirely.** Interacting with a raw model without any system prompt is like working with an actor who has no defined character. They can follow simple instructions ("say this line," "walk over there"), but their performance will lack consistency, tone, and depth. They may seem helpful one moment and confused the next, as their persona drifts without a foundational anchor.

By recognizing that prompt engineering is a discipline of architectural design, not just a series of isolated questions, you gain the ability to build AI systems that are robust, predictable, and profoundly more capable. The following chapters will provide the specific, actionable principles for mastering the construction of each of these essential pillars.

# Chapter 4: The Zero-Shot Strategy: Leveraging the Model's Intrinsic Knowledge

## 4.1 The First Attempt: Prompting Without Precedent

The Zero-Shot strategy is the most fundamental and direct form of prompt engineering. It is the practice of instructing a Large Language Model to perform a task without providing it with any specific examples of how to complete that task. You provide the instruction, the context, and the input, and you rely entirely on the model's vast, pre-existing knowledge to understand and execute your request.

In essence, every prompt that does not contain an explicit input-output example is a Zero-Shot prompt. It is the conversational baseline, the starting point for nearly every interaction with an AI.

To return to our analogy of the AI as a skilled actor, a Zero-Shot prompt is like a director giving a straightforward command to an actor who has already deeply internalized their role (defined by the System Prompt).

- "Summarize this intelligence briefing."
- "Translate this phrase into Japanese."
- "Write a Python function that sorts a list of dictionaries by a specific key."

The director doesn't need to show the actor an example of another actor summarizing a briefing; they trust that a competent actor, in the role of an intelligence analyst, inherently knows what a summary is and how to produce one. The Zero-Shot strategy operates on this same principle of trust in the model's intrinsic capabilities.

## 4.2 The Mechanism: How Zero-Shot Works

The effectiveness of the Zero-Shot strategy is a direct consequence of the way LLMs are trained. These models have been exposed to a staggering volume of text and code from the public internet, encompassing trillions of words across countless documents, books, articles, and websites. During this training, the model learned the statistical patterns and relationships not just between words, but between entire concepts and tasks.

It has seen:

- Countless examples of articles followed by their summaries.
- Millions of lines of text in one language and their corresponding translations in another.
- Innumerable questions followed by their answers.
- Vast quantities of code accompanied by documentation explaining what it does.

Therefore, when you provide a prompt like \`"Summarize the following article:"\`, the model recognizes this pattern. It doesn't "learn" what a summary is in that moment. Instead, your prompt acts as a key, activating the vast, latent knowledge about "summarization" that is already encoded in its neural network. It predicts that the most probable sequence of words to follow your instruction and the provided article is a concise summary of that article. The "knowledge" is already there; the prompt simply directs the model to access and apply it.

## 4.3 The Power of Simplicity: Strengths and Ideal Use Cases

The Zero-Shot approach is the workhorse of prompt engineering for a reason. Its power lies in its efficiency and broad applicability.

**Key Strengths:**

1. **Simplicity and Speed:** It is the fastest and most direct way to get a response from the model. There is no need to spend time crafting detailed examples.
2. **Token Efficiency:** Prompts are shorter because they don't contain examples. In API-based usage where cost is tied to the number of tokens (both input and output), this makes Zero-Shot the most cost-effective method.
3. **Versatility:** It works remarkably well for a wide range of common, well-defined tasks that are heavily represented in the model's training data.

**Ideal Use Cases:**

- **Summarization:**
    - **Prompt:** \`"Summarize the key findings from the following academic abstract into three bullet points."\`
- **Translation:**
    - **Prompt:** \`"Translate the following sentence into formal Spanish: 'We need to finalize the quarterly report by Friday.'"\`
- **Simple Question-Answering:**
    - **Prompt:** \`"Based on the provided text, what was the primary cause of the company's Q3 revenue decline?"\`
- **Classification (with clear, common categories):**
    - **Prompt:** \`"Classify the sentiment of the following customer review as Positive, Negative, or Neutral. Review: 'The user interface is intuitive, but the app crashes frequently.'"\`
- **Style and Tone Transformation:**
    - **Prompt:** \`"Rewrite the following paragraph to make the tone more professional and formal. Paragraph: 'Hey guys, so the thing is, we gotta get this project done, like, ASAP.'"\`
- **Basic Code Generation:**
    - **Prompt:** \`"Write a JavaScript function that takes an array of numbers and returns the largest number in the array."\`

## 4.4 The Limits of Trust: When Zero-Shot Fails

While powerful, the Zero-Shot strategy relies on the assumption that the model has a clear, unambiguous understanding of your task from its training. This assumption breaks down when tasks become more complex, nuanced, or novel.

**Common Failure Modes:**

1. **Complex or Multi-Step Reasoning:** For problems that require a logical chain of thought, the model may rush to a conclusion and make an error.
    - **Failing Prompt:** \`"A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?"\`
    - **Likely Incorrect Zero-Shot Answer:** \`$0.10\` (The model performs a simple subtraction instead of the required algebraic reasoning).
2. **Highly Specific or Novel Formats:** If you require a very specific output structure that is not a universal standard (e.g., a custom JSON schema or a unique report format), the model has no way of knowing what you want.
    - **Failing Prompt:** \`"Process this user data and output it in our company's standard 'UserProfile' JSON format."\`
    - **Likely Incorrect Zero-Shot Answer:** A generic JSON object that does not match the specific, required structure.
3. **Nuanced or Ambiguous Tasks:** When a task requires subjective judgment or depends on a specific, non-obvious context, the model's interpretation may not align with yours.
    - **Failing Prompt:** \`"Categorize this news article based on our internal editorial guidelines: 'Finance', 'Tech Innovation', or 'Market Strategy.'"\`
    - **Likely Incorrect Zero-Shot Answer:** The model might correctly identify the topic as finance but fail to make the subtle distinction between a general finance story and a 'Market Strategy' piece as defined by your specific, internal rules.

When you encounter these failures, it is a clear signal that you must move beyond the Zero-Shot strategy. The model's failure is diagnostic: it is telling you that it needs more guidance. It needs to be *shown*, not just told.

## 4.5 Crafting an Elite Zero-Shot Prompt

Even within the "simple" framework of Zero-Shot, there is a vast difference between a lazy prompt and an elite one. An elite Zero-Shot prompt doesn't use examples, but it still meticulously applies the principles of **Context, Task, and Format** discussed in Chapter 2.

Let's compare a weak vs. an elite Zero-Shot prompt.

**Task:** Draft an email to a team about a new project.

- **Weak Zero-Shot Prompt:**\`"Write an email about the new 'Orion' project."\`
    
    *This prompt is weak because it lacks all three pillars. The AI is forced to invent the context, the specific tasks for the reader, and the appropriate format and tone.*
    
- **Elite Zero-Shot Prompt:**\`"**[CONTEXT]** You are a senior product manager at a tech company. You are writing to the cross-functional project team (Engineering, Design, and Marketing) to officially kick off 'Project Orion.' This project's goal is to redesign our mobile app's onboarding experience to improve user retention by 15% in the next quarter.\`
    - \`*[TASK]** Draft a concise and motivational kickoff email. The email must:1. State the project's primary goal and the key metric for success.2. Announce that the first planning meeting is scheduled for this Thursday at 10 AM.3. Ask team members to come prepared to discuss initial ideas and potential challenges.\`
    - \`*[FORMAT]** **Tone:** Professional, energetic, and collaborative. **Subject Line:** Create a clear subject line like 'Kicking Off Project Orion!' **Output:** Provide only the email text."\`
    
    *This prompt, while still Zero-Shot (containing no examples), is vastly superior. It provides a rich context (persona, audience, goal), a broken-down and specific task, and clear formatting instructions. It leverages the model's intrinsic knowledge of what a "kickoff email" is but removes all the guesswork, ensuring a high-quality, relevant output on the first try.*
    

## 4.6 The Foundation of the Pyramid

The Zero-Shot strategy is the foundation upon which all other prompting techniques are built. It should always be your first approach. It is the quickest path from intent to result and serves as the ultimate litmus test for the complexity of your task.

If a well-crafted, elite Zero-Shot prompt succeeds, your work is done. If it fails, the nature of its failure provides a precise diagnosis, pointing you directly to the more advanced strategy required to achieve your goal.

- If it failed on **formatting**, you need the **Few-Shot Strategy** (Chapter 5).
- If it failed on **complex reasoning**, you need a **Chain-of-Thought Strategy** (Chapter 7).
- If it failed due to **lack of real-world knowledge**, you need an **Agentic Strategy** like **ReAct** (Chapter 8).

Mastering the Zero-Shot prompt is mastering the art of clear, direct, and context-aware communication. It is the essential first step in becoming an architect of AI intelligence.

# Chapter 5: The Few-Shot and One-Shot Strategy: Guiding AI with Examples

## 5.1 When Telling Isn't Enough: The Need for Demonstration

In the previous chapter, we established the Zero-Shot strategy as the foundational approach to prompting—a direct instruction that relies on the AI's vast intrinsic knowledge. It is the art of *telling*. However, we also identified its limitations. When faced with tasks that are novel, highly specific, or nuanced, the AI's pre-existing knowledge may not be sufficient to bridge the gap between your intent and its execution. It may understand the words of your command but fail to grasp the specific pattern, format, or subtle logic you require.

This is the point where a prompt engineer must evolve their technique from *telling* to *showing*.

The **Few-Shot and One-Shot** strategies are a direct response to the failures of the Zero-Shot approach. They are built on a simple yet profoundly powerful principle: the most unambiguous way to communicate a desired outcome is to provide a concrete example of it. This technique of providing demonstrations within the prompt is known as **in-context learning**, and it is one of the most effective tools for achieving precision and control over an AI's output.

Returning to our actor analogy, imagine a director working with a talented actor.

- **Zero-Shot:** "Deliver this line with a sense of urgency."
- **One-Shot:** "Watch how I deliver this line with urgency... *'We have to get out of here, now!'* ... Now you do it."
- **Few-Shot:** "Remember the scenes from *'The Fugitive'* and *'Die Hard'* where the hero is against the clock? I need that kind of breathless, desperate urgency. Here are a few line readings to show you what I mean..."

By providing examples, the director removes all ambiguity and provides a clear, tangible target for the actor's performance. The Few-Shot strategy does exactly this for the AI.

## 5.2 Defining the Terminology: Zero, One, and Few

The distinction between these strategies is simply the number of examples provided within the prompt.

- **Zero-Shot:** Provides **zero** examples. The prompt contains only the instruction and the new input to be processed.
- **One-Shot:** Provides **one** example. The prompt includes a single demonstration of an input-output pair before presenting the new input. This acts as a clear, singular guidepost.
- **Few-Shot:** Provides **two or more** examples. Typically, 3 to 5 examples are considered the sweet spot. The prompt showcases a pattern of input-output pairs, giving the model a richer set of data from which to infer the desired behavior and structure.

## 5.3 The Underlying Mechanism: The Power of In-Context Learning

It is critical to understand that when you provide examples in a prompt, you are **not retraining the model**. The model's underlying weights are not permanently altered. Instead, you are leveraging a phenomenon known as **in-context learning**.

The LLM is, at its core, a supreme pattern-matching engine. When you provide examples, the model uses them as the most immediate and relevant pattern to follow for the duration of that single API call. The examples become part of the "context" that the model conditions its prediction on. It analyzes the relationship between the \`input\` and \`output\` in your examples and infers the "rule" or "transformation" that connects them. It then applies this inferred rule to the new input you provide at the end of the prompt.

Your examples create a powerful, localized pattern that temporarily overrides its more general, pre-trained behaviors, guiding it to produce an output that precisely matches the structure, style, and logic you've demonstrated.

## 5.4 The Power of Demonstration: Primary Use Cases for Few-Shot Prompting

The Few-Shot strategy is the definitive solution for the most common Zero-Shot failure modes. It excels in any scenario where precision and structure are paramount.

### 5.4.1 Use Case 1: Enforcing Specific, Novel Formats

This is the most powerful and common application of Few-Shot prompting. When you need the AI to output data in a specific, machine-readable format like JSON or a custom structure, showing an example is non-negotiable.

- **Task:** Extract user information into a specific JSON structure.
- **Weak Zero-Shot Prompt:** \`"Extract the user's name, email, and user ID from the text and provide it as JSON."\`*(This might produce a valid but inconsistently structured JSON.)*
- **Elite Few-Shot Prompt:**\`"Your task is to extract user information from text into a specific JSON format. Follow the pattern of the examples provided.\`
    
    \`### EXAMPLE 1 ###Text: "John Doe's email is john.d@email.com and his user ID is JD123."JSON: { "user_name": "John Doe", "contact_email": "john.d@email.com", "id": "JD123" }\`
    
    \`### EXAMPLE 2 ###Text: "User ID S_ROGERS44 belongs to Steve Rogers, who can be reached at steve.rogers@email.com."JSON: { "user_name": "Steve Rogers", "contact_email": "steve.rogers@email.com", "id": "S_ROGERS44" }\`
    
    \`### NEW TASK ###Text: "Contact Jane Smith at jane.s@email.com. Her ID is JS_567."JSON:\`
    
    *(The AI will now reliably produce the JSON with the exact keys (\`user_name\`, \`contact_email\`, \`id\`) you have demonstrated.)*
    

### 5.4.2 Use Case 2: Handling Nuanced or Ambiguous Classification

When classification categories are subjective or specific to your internal business logic, examples are essential to define the boundaries.

- **Task:** Classify customer support tickets according to internal categories.
- **Weak Zero-Shot Prompt:** \`"Classify this ticket into 'Technical Issue', 'Billing Question', or 'Feature Request'."\`*(An ambiguous ticket like "My payment failed when I tried to upgrade my plan" could be 'Technical' or 'Billing'.)*
- **Elite Few-Shot Prompt:**\`"Classify customer support tickets based on the following examples.\`
    
    \`Ticket: "I can't log in, the password reset link is broken." -> Category: Technical IssueTicket: "I was charged twice for my subscription this month." -> Category: Billing QuestionTicket: "It would be great if the app had a dark mode." -> Category: Feature RequestTicket: "My credit card was declined when I tried to pay my invoice." -> Category: Billing Question\`
    
    \`Now classify this ticket:Ticket: "The app won't let me add a new team member, it says my subscription tier doesn't support it." -> Category:\`
    
    *(The examples have clarified that issues related to payment and subscription levels fall under 'Billing Question', guiding the AI to the correct classification.)*
    

### 5.4.3 Use Case 3: Capturing a Specific Style or Tone

Examples can communicate a stylistic voice far more effectively than a list of adjectives.

- **Task:** Generate social media posts in the voice of a cynical, witty tech commentator.
- **Weak Zero-Shot Prompt:** \`"Write a tweet about the new smartphone launch. Be cynical and witty."\`
- **Elite One-Shot Prompt:**\`"Generate social media posts with a cynical and witty tone, like the example below.\`
    
    \`Topic: A new social media app promises "authentic connections".Post: "Another app promising 'authentic connections.' Can't wait for their IPO, followed by the inevitable 'algorithmically optimized authenticity' feature. Groundbreaking."\`
    
    \`Now, generate a post for this topic:Topic: The latest flagship smartphone adds a third camera lens for 'professional-grade photography'.Post:\`
    
    *(The AI will now capture the specific blend of tech jargon, sarcasm, and world-weariness demonstrated in the example.)*
    

## 5.5 Principles for Crafting Elite Few-Shot Examples

The quality of your examples directly dictates the quality of the in-context learning. Poorly crafted examples will teach the model the wrong pattern.

1. **Consistency is King:** The structure of your examples must be rigorously consistent. Use the exact same labels (e.g., \`Input:\`, \`Output:\`), delimiters (e.g., \`###\`), and formatting for every single example. The model learns the pattern, so the pattern must be perfect.
2. **Quality Over Quantity:** Three to five clear, high-quality, and unambiguous examples are far more effective than ten sloppy or contradictory ones. Ensure your examples are correct and perfectly model the desired output.
3. **Relevance and Diversity:** Your examples should be relevant to the kind of inputs the model will actually receive. Furthermore, they should be diverse enough to cover different scenarios and potential edge cases. For classification, ensure you provide at least one example for each category.
4. **Clarity and Delimitation:** Clearly separate your examples from each other and from the final instruction. Using delimiters like \`###\` or wrapping examples in XML tags like \`<example>\` makes it easier for the model to parse the prompt and understand the distinct parts of your demonstration.

## 5.6 One-Shot vs. Few-Shot: A Strategic Choice

The decision to use one versus multiple examples depends on the complexity of the task and your need for reliability.

- **Use One-Shot When:**
    - The task or format is relatively simple (e.g., a simple stylistic change).
    - You are highly constrained by the context window size or token cost.
    - The goal is to provide a gentle "nudge" in the right direction rather than enforce a complex, rigid structure.
- **Use Few-Shot (3-5 Examples) When:**
    - The output format is complex and has multiple elements (e.g., a detailed JSON object).
    - The classification logic is nuanced and has subtle boundaries.
    - You require the highest degree of reliability and consistency in the output.
    - The task involves a non-obvious transformation of the input data.

There is a point of diminishing returns. Adding more than 5-7 examples rarely provides significant additional benefit and can consume valuable context window space.

## 5.7 Conclusion: From Instruction to Induction

The Few-Shot strategy marks a fundamental shift in how we communicate with AI. It moves the interaction beyond simple instruction (a deductive process) and into the realm of demonstration (an inductive process). You provide the data, and the AI infers the rules.

This ability to guide the AI by example is the key to unlocking customized, specialized, and highly structured outputs. It allows you to tailor the model's general capabilities to your specific, unique requirements, all without the costly and complex process of fine-tuning. Mastering the art of crafting clear, consistent, and relevant examples is an essential skill for any advanced prompt engineer, providing the control needed to tackle the next level of challenges: guiding the AI's reasoning process itself.

# Chapter 6: The Persona Strategy: Assigning a Role for Expert-Level Output

## 6.1 Beyond the Generalist: From Tool to Specialist Collaborator

A raw Large Language Model, by its very nature, is a generalist. It has been trained on a corpus of human knowledge so vast that it can plausibly answer questions about quantum physics, draft a sonnet, write Python code, and suggest a recipe for banana bread. While this versatility is astonishing, it is also a limitation. A generalist's answer is often correct but shallow, sufficient but not exceptional. It lacks the depth, nuance, and specific framework of a true expert.

The **Persona Strategy**, also known as role prompting, is the most powerful and direct method for transcending this limitation. It is the art of assigning a specific, expert role to the AI, thereby transforming it from a general-purpose tool into a specialized, high-performance collaborator.

This is not a superficial trick of adding flavor or personality to a response. It is a deep, mechanistic engineering principle. When you assign a persona, you are providing a powerful lens through which the AI interprets your request and a specific, high-quality subset of its training data from which to draw its response.

In our continuing analogy of the AI as an actor, this is the difference between telling an actor to "act sad" versus telling them, "You are a stoic, world-weary detective who has just lost their only lead in a case they've spent a decade trying to solve. Now, react to this bad news." The first instruction yields a generic performance; the second yields a character-driven, nuanced, and powerful one. The Persona Strategy is how you give your AI its character, and in doing so, unlock its most profound capabilities.

## 6.2 The Underlying Rationale: Activating Latent Expertise

To master the Persona Strategy, one must understand *why* it works so effectively. The mechanism is rooted in the statistical nature of LLMs.

An LLM is a vast network of statistical associations. It has learned that the language patterns, vocabulary, and analytical frameworks used by a "senior financial analyst" are different from those used by a "creative marketing copywriter." These roles or personas exist within its training data as distinct "semantic fields"—dense clusters of related concepts, styles, and quality standards.

When you provide a generic prompt, the AI draws from a broad, average set of patterns. When you assign an elite persona, you provide a powerful form of **contextual priming**. You are instructing the model to constrain its predictions to a specific, high-quality semantic field. Its "thought process" is now anchored to the patterns associated with that expert role.

This strategy has two key benefits:

1. **Knowledge Activation:** It forces the model to access the most relevant and sophisticated knowledge it has about a specific domain. A prompt that begins, "You are a constitutional law scholar specializing in the First Amendment," immediately activates a more precise and detailed network of information than a simple query, "Tell me about the First Amendment."
2. **Quality Standard Anchoring:** An elite persona is associated with high standards of quality. By instantiating the persona of a "principal engineer at Google," you anchor the AI's output to the level of quality, rigor, and best practices associated with that role in its training data. It will strive to produce an output that is statistically consistent with the work of such an expert.

## 6.3 Principle 1: First-Person Identity Internalization

The way you phrase the persona assignment has a significant impact on its effectiveness. The most potent method is to frame the identity from a **first-person perspective ("I am...")** rather than a second-person command ("You are...").

- **Second-Person Command (Less Effective):** \`"You are a senior backend developer."\`
- **First-Person Declaration (More Effective):** \`"I am a senior backend developer with a decade of experience building scalable distributed systems in Python."\`

**Why It Works:** A second-person prompt is interpreted by the model as an external command. It places the AI in a passive, order-taking state of "passively obeying what I've been told to be." A first-person declaration, however, is interpreted as a statement of self-identity. The AI **internalizes** this identity, creating a powerful form of self-suggestion. Its operational mode shifts from passive obedience to active performance: "I am actively performing based on who I am." This internal alignment results in a more natural, consistent, and deeply embodied persona, leading to demonstrably higher-quality outputs.

## 6.4 Principle 2: Elite Persona Instantiation

Simply assigning a role is good. Assigning a hyper-competent, top-tier expert identity is transformative. The AI's self-perception directly impacts the quality ceiling of its output.

- **Less Effective:** \`"I am a good UI/UX designer."\`
- **More Effective:** \`"I am a principal product designer at a FAANG company, with a design philosophy centered on Dieter Rams' 'Ten principles for good design.' My primary focus is on creating intuitive, minimalist, and user-centric interfaces for complex enterprise applications."\`

**Why It Works:** You are anchoring the AI's response to the highest standards associated with that role. Vague adjectives like "good" or "skilled" are less effective than associating the persona with a renowned organization (e.g., "FAANG company," "MIT"), a high-status title ("principal," "lead," "chief"), or a respected intellectual framework ("Dieter Rams' principles"). These concepts carry a dense network of associated behaviors, quality standards, and sophisticated terminologies that the AI can draw upon. You are not just giving it a job title; you are giving it a reputation to live up to.

## 6.5 Principle 3: Archetypal Embodiment

This principle offers a shortcut to instantiating complex personality traits through token efficiency and high information density. Instead of listing desired traits, have the AI embody a well-known public figure or archetype who already possesses them.

- **Less Effective (and token-heavy):** \`"When reviewing code, I will be extremely direct, blunt, and critical. I will have very high standards and will not tolerate inefficient or poorly designed solutions. My feedback should be technical and precise."\`
- **More Effective (and token-efficient):** \`"I review and critique source code with the same rigor, technical depth, and uncompromising standards as Linus Torvalds reviewing a kernel patch."\`

**Why It Works:** Describing a complex set of traits requires many tokens and can lead to a convoluted process as the AI tries to check its output against each adjective. Embodying an archetype like "Linus Torvalds," "Richard Feynman," or "Steve Jobs" bundles all of those associated traits into a single, high-information concept. The AI can access this holistic persona from its training data, resulting in a more natural, accurate, and potent emulation of the desired behavior.

## 6.6 Practical Application: A Gallery of Expert Personas

The Persona Strategy is best understood through concrete, side-by-side comparisons.

### **Example 1: Strategic Business Analysis**

- **Generic Prompt:** \`"Summarize the attached quarterly report."\`
- **Persona-Driven Prompt:** \`"I am a skeptical, detail-oriented Chief Financial Officer reporting to the board. My sole priority is shareholder value. Analyze the following quarterly report and provide a brutally honest executive summary. Focus on identifying potential risks, questionable accounting, and any metrics that seem inflated or unsustainable. I do not want the marketing spin; I want the raw financial truth."\`

### **Example 2: Code Review**

- **Generic Prompt:** \`"Review this code for errors."\`
- **Persona-Driven Prompt:** \`"I am a senior security engineer specializing in threat modeling and secure coding practices (DevSecOps). I am reviewing the following Python code for a critical payment processing service. My review must be merciless. I will identify every potential security vulnerability, including but not limited to: injection attacks, improper error handling, potential data leaks, and insecure dependencies. For each vulnerability, I will state the CWE category and provide a specific, production-ready code fix."\`

### **Example 3: Marketing Copywriting**

- **Generic Prompt:** \`"Write an ad for a new coffee brand."\`
- **Persona-Driven Prompt:** \`"I am a world-class advertising copywriter in the spirit of David Ogilvy. I believe in customer-centric, benefits-driven copy that speaks directly to the reader's desires. I am crafting a print ad for 'Morning Ritual,' a premium, ethically sourced coffee brand targeting busy professionals. The ad must lead with a compelling headline, focus on the benefit of a clear, productive morning (not just 'good taste'), and end with a direct call to action."\`

## 6.7 Integration with the Two-Pillar Architecture

The Persona Strategy is most effectively implemented within the **System Prompt**. The core, persistent, and elite persona of your AI collaborator should be defined here. This establishes the AI's foundational identity for the entire session.

- **System Prompt:** \`"I am a seasoned System Architect. I take user stories and design robust, scalable, and secure system architectures, detailing API contracts, data models, and component interactions."\`

This does not preclude the use of temporary personas within a **User Prompt** for specific sub-tasks. This allows for powerful flexibility.

- **User Prompt:** \`"That system design is excellent. Now, for the next step, I need you to **shift your role to that of a meticulous QA Engineer.** Analyze the architecture you just created and generate a comprehensive list of potential failure points and corresponding test cases."\`

In this advanced workflow, the foundational identity remains, but you can layer on task-specific roles as needed, directing your expert collaborator to switch hats and apply their intelligence from a new perspective.

## 6.8 Conclusion: Persona is Performance

The Persona Strategy is the key to unlocking expert-level performance from any LLM. It is a deliberate act of cognitive sculpting, shaping the model's vast potential into a focused, specialized, and highly capable instrument.

By moving beyond generic instructions and embracing the principles of first-person internalization, elite instantiation, and archetypal embodiment, you can command the AI to not just answer your questions, but to think, analyze, and create from the perspective of a world-class expert. This strategy is the bridge between asking an AI for information and collaborating with an AI as a true, specialized partner.

# Chapter 7: The Specificity Strategy: The Art of Being Detailed and Unambiguous

## 7.1 The Curse of Ambiguity: Why Vague Prompts Fail

At the heart of every failed AI interaction lies the curse of ambiguity. A Large Language Model is not a mind reader; it is a prediction engine. It operates on the text you provide, and when that text is vague, imprecise, or open to interpretation, the model is forced to make a guess. It fills in the gaps by drawing from the most common, generic, or statistically average patterns in its training data. The result is an output that is often plausible but ultimately useless—a generic blog post, a superficial analysis, or code that solves the wrong problem.

Specificity is the antidote to this curse. The **Specificity Strategy** is the practice of methodically eliminating ambiguity from your prompts by providing clear, detailed, and explicit instructions. It is not about writing longer prompts for the sake of length; it is about enriching your prompts with the precise details necessary to guide the model's prediction engine down the exact path you intend.

Think of your prompt as the lens of a camera. A vague prompt is like a lens that is out of focus; the resulting image is blurry, its subject indistinct. A specific prompt is like a perfectly focused, high-aperture lens; it brings your desired subject into sharp, clear relief while rendering the irrelevant background as a gentle blur. Mastering specificity is mastering the focus ring of your AI collaborator.

## 7.2 The Rationale: Minimizing Inference, Maximizing Control

Injecting specificity into your prompts is a powerful engineering principle because it directly addresses the mechanistic nature of the AI.

1. **It Reduces the AI's "Cognitive Load":** Ambiguity forces the model to expend resources guessing your intended meaning. Should it be formal or informal? Should it be a list or a paragraph? Should it consider financial risk or operational efficiency? Every guess is a potential point of failure. Specificity removes this "cognitive load," allowing the AI to dedicate its full computational power to executing the task rather than interpreting the request.
2. **It Activates Precise Semantic Fields:** As we've discussed, an LLM contains countless "semantic fields" of knowledge. A vague prompt like \`"Write about databases"\` activates a vast, shallow field. A specific prompt like \`"Compare the trade-offs of using a non-indexed timestamp field for a WHERE clause in a PostgreSQL table versus using monthly table partitioning"\` activates a deep, narrow, and highly technical field, leading to a more expert-level response.
3. **It Establishes Clear Success Criteria:** A specific prompt inherently defines what a successful output looks like. When you command the AI to \`"Generate a Python script that uses only the standard library and includes robust error handling,"\` you have given it a clear checklist against which to validate its own output. This implicit self-correction leads to more reliable results.

Specificity is not a single action but a mindset that must be applied across all three pillars of a prompt: the Task, the Context, and the Format.

## 7.3 Specificity in TASK Definition: Quantify, Constrain, and Decompose

A vague task is a recipe for a generic output. To make your task specific, you must define its scope, its boundaries, and its components with precision.

- **Before (Vague):** \`"Write a blog post about productivity."\`
- **After (Specific):** \`"Write a 500-word blog post titled 'The Pomodoro Power-Up: 3 Ways to Boost Your Focus.' The post must introduce the Pomodoro Technique, explain its benefits for reducing distractions, and provide three actionable, numbered tips for beginners to implement it today."\`

**Key Techniques for Task Specificity:**

1. **Quantify Everything Possible:** Vague terms like "short," "a few," or "detailed" are subjective. Replace them with numbers.
    - *Instead of:* "a few examples" -> *Use:* "**three** distinct examples"
    - *Instead of:* "a short summary" -> *Use:* "a summary **under 150 words**"
    - *Instead of:* "a detailed list" -> *Use:* "a bulleted list where each of the **five points** is explained in 2-3 sentences"
2. **Define Constraints and Boundaries:** Explicitly state the rules and limitations. What should be included? What must be excluded?
    - *Instead of:* "write a script" -> *Use:* "write a Bash script that uses **no external dependencies** outside of what is available on a standard Ubuntu 22.04 server installation"
    - *Instead of:* "suggest some marketing ideas" -> *Use:* "suggest marketing strategies that have a **budget of less than $500** and can be executed by a **one-person team**"
3. **Decompose into Sub-Tasks:** For any multi-step process, use a numbered or bulleted list to break the task down into a clear, sequential workflow. (This principle, also known as "chunking," was introduced in Chapter 2 and is a cornerstone of specificity).

## 7.4 Specificity in CONTEXT: Detail the Persona, Audience, and Goal

A shallow context produces a shallow response. Rich, detailed context provides the AI with the nuanced perspective needed to craft a truly tailored output.

- **Before (Vague):** \`"Summarize this report for a business audience."\`
- **After (Specific):** \`"I am a CTO preparing for a quarterly board meeting. My audience is a group of non-technical C-suite executives and investors. Summarize the attached engineering report. Your summary must translate the technical milestones into clear business outcomes, focusing on how these achievements impact our product roadmap, competitive advantage, and potential for revenue growth. Avoid all technical jargon."\`

**Key Techniques for Context Specificity:**

1. **Detail the Persona:** Don't just give the AI a job title. Give it a motivation, a perspective, and a set of priorities. (See Chapter 6: The Persona Strategy).
    - *Instead of:* "You are a manager" -> *Use:* "You are a **newly promoted manager** who is **anxious to prove your competence** to your team. Your tone should be **confident and inspiring, but also approachable**."
2. **Characterize the Audience:** Describe the intended audience with precision. What is their level of expertise? What are their priorities? What do they care about?
    - *Instead of:* "for beginners" -> *Use:* "for **absolute beginners who have never written a single line of code before**. Use simple analogies and avoid any programming jargon."
3. **Articulate the Strategic Goal:** Explain the "why" behind the task. What is the ultimate purpose of this output?
    - *Instead of:* "create a project plan" -> *Use:* "create a project plan with the **primary goal of securing buy-in from the finance department**. Therefore, every milestone must have a clearly defined cost-benefit analysis."

## 7.5 Specificity in FORMAT: Blueprint the Final Structure

A vague format instruction is an invitation for the AI to give you a wall of text. Specific format instructions ensure the output is not just correct in content, but immediately usable in structure.

- **Before (Vague):** \`"Extract the key information in JSON."\`
- **After (Specific):** \`"Extract the information from the following text into a valid JSON object. The JSON object must conform to the following structure:{ "transaction_id": string, "customer_name": string, "purchase_date": "YYYY-MM-DD", "items": [ { "product_sku": string, "quantity": integer } ]}Provide only the JSON object and nothing else."\`

**Key Techniques for Format Specificity:**

1. **Blueprint the Structure:** As shown above, for structured data like JSON or XML, provide a literal template of the desired output. This removes all guesswork.
2. **Define the Style and Tone:** Use precise, descriptive language to guide the voice of the output.
    - *Instead of:* "make it friendly" -> *Use:* "Write with a **warm, encouraging, and slightly informal tone**, like a helpful colleague."
3. **Use Examples:** The ultimate form of specificity is a complete example. Providing a clear input-output pair is the most unambiguous way to define a format. (See Chapter 5: The Few-Shot Strategy).

## 7.6 Synthesis: The Cumulative Power of Detail

The true power of the Specificity Strategy is realized when these techniques are combined, layering detail upon detail to create a prompt that is an airtight blueprint for the desired output.

**Scenario:** Create a social media plan.

- **Vague Prompt:**\`"Give me some ideas for social media posts."\`
- **Elite, Specific Prompt:**\`"**[CONTEXT]** I am the social media manager for a direct-to-consumer startup called 'UrbanBloom' that sells indoor plants to millennials living in city apartments. Our brand voice is witty, informative, and slightly irreverent.\`
    - \`*[TASK]** Create a one-week social media content calendar for Instagram. The plan must include three distinct post types:1. **Educational Post (2x):** A 'Plant Care Tip' post.2. **User-Generated Content (3x):** A post featuring a customer's photo.3. **Promotional Post (2x):** A post announcing our 'Plant of the Week' discount.\`
    - \`*[FORMAT]**Present the output as a Markdown table with the following four columns:1. **Day:** (e.g., Monday)2. **Post Type:** (e.g., Educational)3. **Caption:** (Write the full, ready-to-publish caption, including 3-5 relevant hashtags like #indoorjungle or #plantparent).4. **Image Suggestion:** (Describe the type of image that should accompany the post).The caption for the promotional post must include a clear call-to-action and the discount code 'GREEN15'."\`

## 7.7 Conclusion: Specificity is Control

Specificity is not about micromanagement; it is about clarity. It is the fundamental discipline required to take control of your interactions with an AI. Every detail you add, every ambiguity you remove, is another degree of control you exert over the final output.

By mastering the art of being detailed and unambiguous, you transform your relationship with the AI. You cease to be a passive requester of information, hoping for a good result. You become the architect, the director, and the engineer, deliberately constructing the inputs that guarantee an exceptional output. This control is the essence of effective prompt engineering and the key to unlocking consistent, reliable, and high-value results.

# Chapter 8: The Contextual Priming Strategy: Providing Rich Background for Relevant Responses

## 8.1 The Blank Slate Problem: An Expert with Amnesia

Imagine hiring the most brilliant consultant in the world. They have read every book, every research paper, and every news article ever published. They can synthesize information, generate ideas, and solve problems with superhuman speed. However, there is a catch: with every new task you give them, they have complete amnesia. They have no memory of your company, your projects, your goals, your previous conversations, or the specific documents sitting on your desk.

This is the default state of a Large Language Model. It is an expert with a blank slate.

The **Contextual Priming Strategy** is the solution to this problem. It is the deliberate practice of "priming the pump"—of loading the AI's short-term, in-context memory with the specific background information it needs to make its vast, general knowledge relevant to your unique situation. Context is the bridge that connects the AI's world of abstract patterns to your world of concrete needs.

A prompt without context is a shot in the dark. A prompt rich with context is a guided missile. Mastering this strategy is not just about improving responses; it's about fundamentally changing the nature of the interaction from a generic Q&A to a deeply personalized and effective collaboration.

## 8.2 The Rationale: Why Context is the King of Prompting

Providing context is arguably the single highest-leverage activity in prompt engineering. Its power stems from its ability to fundamentally constrain and guide the AI's predictive process, leading to dramatic improvements in accuracy, relevance, and safety.

1. **Grounding and Reducing Hallucination:** An LLM's tendency to "hallucinate"—to invent plausible but false information—is most prevalent when it is forced to rely solely on its own parametric memory. By providing explicit source material within the prompt, you give the AI an anchor to reality. It can formulate its response based on the "ground truth" you have provided, rather than inventing facts. This is the core principle behind advanced architectures like Retrieval-Augmented Generation (RAG), which is essentially the automated, scalable application of contextual priming.
2. **Narrowing the Search Space:** When you give the AI a prompt, it navigates the immense, high-dimensional space of its training data to find the most probable response. Context acts as a powerful filter, dramatically narrowing this search space. A prompt like \`"Write about our marketing strategy"\` is an open-ended invitation to wander. A prompt primed with context—\`"Given our Q3 performance report and the competitive analysis attached, write a marketing strategy that focuses on re-engaging users who have lapsed"\`—focuses the AI's attention on a tiny, highly relevant sliver of its potential knowledge.
3. **Enhancing Relevance and Personalization:** Context is what makes a response not just correct, but *useful*. A generic answer to a generic question has limited value. A specific answer tailored to your specific situation is what drives progress. Contextual priming is the mechanism for this personalization. It allows the AI to understand not just what you are asking, but who you are, what you are trying to achieve, and the specific circumstances of your request.

## 8.3 A Toolkit of Contextual Priming Techniques

Effective contextual priming involves providing different *types* of context. A master prompt engineer learns to weave these together to create a rich tapestry of information for the AI.

### 8.3.1 Technique 1: Providing Source Material (The Grounding Data)

This is the most direct and powerful form of priming. You give the AI the raw material it needs to work with.

- **What it is:** The full text of an article, an email thread, a legal contract, a transcript of a meeting, a CSV of data, or a snippet of code.
- **Why it works:** It makes the task concrete and verifiable. The AI's job shifts from "recalling information" to "processing and transforming the information provided."
- **Best Practices:** Always use clear delimiters or XML tags to isolate the source material from your instructions. This structural clarity is crucial for the model.
    - **Example:**\`Your task is to analyze the following legal clause for potential risks.\`
        
        \`<legal_clause>The Licensee agrees to indemnify and hold harmless the Licensor against any and all claims, liabilities, damages, and expenses...</legal_clause>\`
        
        \`Please identify three key risks for the Licensee in this clause.\`
        

### 8.3.2 Technique 2: Providing Situational Context (The "Why")

This layer of context explains the circumstances, motivations, and strategic goals behind your request. It answers the question, "Why are we doing this?"

- **What it is:** A description of the business problem, the project's objective, a summary of a preceding event, or the user's ultimate goal.
- **Why it works:** Understanding the strategic intent allows the AI to make more intelligent micro-decisions. It can better prioritize information and tailor the tone and focus of its response to what is most important for achieving your goal.
- **Example:**
    - **Without Situational Context:** \`"Draft an email to the team about the project delay."\` (This will likely be a neutral, factual email).
    - **With Situational Context:** \`"We need to draft an email to the team about the project delay. **Our primary goal is to maintain team morale and prevent panic.** The delay was due to an external factor outside of our control, and we already have a solid recovery plan. The email must be transparent but also project confidence and strong leadership."\` (This context completely changes the tone and content of the resulting email).

### 8.3.3 Technique 3: Leveraging Conversational History (The Dialogue Flow)

Every multi-turn conversation is an exercise in contextual priming. The entire history of the chat—your prompts and the AI's responses—forms the context for the next turn.

- **What it is:** The sequence of messages in an ongoing chat session.
- **Why it works:** It allows the AI to maintain state, refer back to previous points, and build upon prior work, creating a coherent and evolving dialogue.
- **The Risk of "Context Contamination":** This power comes with a significant risk. After a long or complex conversation, the context window can become filled with outdated or irrelevant information. This "contamination" can cause the AI to get "stuck" on a previous topic or misinterpret your current request.
    - **Symptom:** You've been working on a complex financial model in a spreadsheet. You then ask, "Now write a simple thank you note." The AI responds with, "Certainly. Here is a thank you note formatted in a four-column table..."
    - **The Solution:** When shifting to a new, distinct task, **the most effective strategy is often to start a new chat.** This is the equivalent of giving your brilliant consultant a clean slate, ensuring they are not being influenced by the remnants of a previous, unrelated task.

### 8.3.4 Technique 4: Persona and Audience Context (The "Who")

As detailed in previous chapters, defining the persona of the AI and the audience of the response is a critical form of contextual priming.

- **Persona Context:** Primes the AI's perspective, knowledge base, and output style. *"You are a skeptical venture capitalist."*
- **Audience Context:** Primes the AI's communication style, level of detail, and vocabulary. *"...and you are explaining your concerns to a first-time founder."*
- **Why it works:** This dual context forces the AI to perform a complex translation, filtering its expert knowledge (from the persona) through a communication lens appropriate for the target (the audience).

## 8.4 Advanced Priming: Navigating the Long Context Window

Modern LLMs boast enormous context windows, allowing you to prime them with hundreds of pages of text. This is a game-changer, but it requires new strategies. Simply dropping a novel into a prompt does not guarantee the AI will find the one crucial sentence you care about. This is known as the "needle in a haystack" problem.

**Best Practices for Long Context Priming:**

1. **Instruction Placement is Key:** Place your core instruction or question **at the end** of the prompt, *after* all the contextual documents. Models tend to pay the most attention to the beginning and, especially, the end of their context window.
2. **Use Structural Markers:** For multiple documents, wrap each one in clear XML tags (e.g., \`<document source="report_A.pdf">...</document>\`). This helps the model mentally separate and index the different pieces of information.
3. **Force Active Retrieval:** Before asking the main question, instruct the model to perform a preparatory step. Ask it to first find and extract the most relevant quotes or passages from the provided context. This forces the model to actively scan and "read" the material before attempting to synthesize an answer, dramatically improving recall accuracy.
    - **Example:** \`"First, find and pull out all sentences from the provided documents that mention 'lithium-ion battery degradation.' Place them inside <quotes> tags. Then, using only those quotes, answer the following question..."\`

## 8.5 Conclusion: Context is the Canvas

Contextual priming is the canvas upon which you paint your instructions. Without it, your commands are brushstrokes in a void. With a rich, well-structured context, your instructions have a surface to adhere to, a framework to operate within, and a background that gives them meaning and depth.

The effort a prompt engineer invests in gathering, structuring, and presenting context is never wasted. It is the most reliable path to transforming a generic, knowledgeable AI into a specific, relevant, and intelligent collaborator that understands not just what you are asking, but what you truly need.

# Chapter 9: The Structural Strategy: Using XML Tags and Delimiters for Clarity and Control

## 9.1 From Conversation to Specification: The Need for Structure

A prompt is a form of communication. In human conversation, we rely on a rich tapestry of implicit cues—tone of voice, body language, shared context—to understand each other. A Large Language Model has none of these. It has only the raw, linear sequence of text you provide. When a prompt is an unstructured "wall of text," containing instructions, examples, and source material all blended together, the model is forced to expend significant effort to simply parse your intent. This is a recipe for confusion, misinterpretation, and error.

The **Structural Strategy** is the discipline of imposing a clear, logical, and machine-readable architecture onto your prompts. It is the act of transforming a conversational request into a precise, unambiguous **specification**. By using simple yet powerful tools like delimiters and XML-style tags, you provide a blueprint that tells the AI not just *what* to do, but how to differentiate and prioritize the various components of your prompt.

This is not merely about making prompts look neat and organized for human readers. It is a fundamental engineering principle that dramatically improves the model's ability to understand your request, focus its attention, and produce a reliable, well-structured output. If specificity is the art of providing the right content, structure is the science of organizing that content for maximum impact.

## 9.2 The Rationale: Why Structure Speaks to the Machine

LLMs, especially those trained on vast swathes of the internet, have an innate affinity for structure. The web is built on structured languages like HTML and XML. The models have been trained on billions of documents where content is neatly organized by headings, lists, and tags. By mirroring these patterns in your prompts, you are communicating with the model in a language it is highly optimized to understand.

Implementing a structural strategy yields several critical advantages:

1. **Eliminates Ambiguity:** Structure creates explicit boundaries. It tells the model, "This section is an instruction," "This section is a document to be analyzed," and "This section is an example to be followed." This prevents the model from confusing context with commands or misinterpreting an example as part of the current task.
2. **Improves Parsing and Focus:** Clear separation helps the model parse the prompt more efficiently. Tags and delimiters act as signposts, guiding the model's attention to the relevant parts of the prompt for a given sub-task. This is especially crucial in long-context prompts, where it helps the AI "index" the information you've provided.
3. **Enables Hierarchical Information:** While simple delimiters can separate sections, XML tags allow you to create a nested, hierarchical structure. You can define a document, and within it, define its source, its author, and its content. This complex organization is impossible with unstructured text.
4. **Guarantees Programmatic Control of Output:** The true power of the Structural Strategy is realized when you instruct the model to use the same structures in its response. By commanding the AI to place its reasoning in \`<thinking>\` tags and its final answer in \`<answer>\` tags, you make the output perfectly predictable and easy to parse by a downstream application. This is the key to building robust, reliable AI-powered workflows.

## 9.3 The Toolkit of Structure: Delimiters and Tags

Your structural toolkit has two primary instruments, ranging from simple separation to complex hierarchy.

### 9.3.1 Tool 1: Delimiters for Simple Separation

Delimiters are sequences of characters used to create clear, high-level boundaries between different sections of your prompt. They are the simplest and quickest way to impose order.

- **Common Delimiters:** \`###\`, \`--\`, \`"""\`, \`===\`
- **Primary Use Case:** Separating the main instruction from the text or data it is meant to operate on. Also useful for separating multiple examples in a Few-Shot prompt.

**Illustrative Example: Summarization**

- **Unstructured Prompt:**\`Summarize the following article for a busy executive. The summary should be three bullet points. Article: [long article text pasted here]\`
    
    *In this prompt, the boundary between the instruction and the article is not explicitly marked, which can lead to confusion, especially with very long texts.*
    
- **Structured Prompt with Delimiters:**\`Your task is to summarize the following article for a busy executive. The summary must be exactly three bullet points.\`
    
    \`### ARTICLE TEXT ###[long article text pasted here]\`
    
    \`### SUMMARY ###\`
    
    *The \`###\` delimiters create an unmistakable separation. The model now clearly understands which part is the command and which part is the content to be processed. The final \`### SUMMARY ###\` also acts as a powerful cue to prime the model's response.*
    

### 9.3.2 Tool 2: XML Tags for Hierarchical Control

XML-style tags (e.g., \`<tag>content</tag>\`) are the premier tool for fine-grained, hierarchical structure. A key advantage is that you can—and should—invent your own descriptive tag names.

- **Why It's Powerful:** The tag names themselves add another layer of context. \`<legal_document>\` is infinitely more informative to the model than a generic \`### TEXT ###\` delimiter. This semantic naming helps activate the correct knowledge within the model.

**Illustrative Example 1: Defining Roles and Content**

- **Unstructured Prompt:**\`You are a doctor. Analyze this patient's symptoms and suggest a possible diagnosis. The symptoms are a persistent dry cough and a low-grade fever.\`
- **Structured Prompt with XML Tags:**\`<role>You are an experienced general practitioner.</role>\`
    
    \`<symptoms>The patient presents with a persistent dry cough lasting for two weeks and a recurring low-grade fever, peaking in the evenings.</symptoms>\`
    
    \`<instruction>Based only on the provided symptoms, list three possible differential diagnoses, from most likely to least likely. For each, provide a brief rationale.</instruction>\`
    

**Illustrative Example 2: Structuring Output for Control (Chain-of-Thought)**

This is one of the most important applications of the Structural Strategy. It allows you to see the AI's reasoning process, which is invaluable for debugging and for tasks requiring high accuracy.

- **Prompt:**\`A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?\`
    
    \`First, work through the problem step-by-step inside <thinking> tags. Then, provide the final numerical answer inside <answer> tags.\`
    
- **Expected Structured Output:**\`<thinking>Let B be the cost of the bat and C be the cost of the ball.The problem gives two equations:1. B + C = 1.102. B = C + 1.00I can substitute the second equation into the first:(C + 1.00) + C = 1.102C + 1.00 = 1.102C = 0.10C = 0.05So the ball costs $0.05. I can check this. If the ball is $0.05, the bat is $0.05 + $1.00 = $1.05. The total is $1.05 + $0.05 = $1.10. This is correct.</thinking><answer>0.05</answer>\`
    
    *This output is now perfectly structured. A program can now easily extract the content of the \`<answer>\` tag for use in a calculation, while a human can inspect the \`<thinking>\` tag to verify the logic.*
    

## 9.4 Best Practices for an Elite Structural Strategy

1. **Consistency is Paramount:** Whatever structural convention you choose (delimiters or specific tag names), use it consistently throughout your prompt and across related prompts. The model learns the pattern you establish. Inconsistency will break the pattern and confuse the model.
2. **Use Semantic Tag Names:** Choose tag names that are descriptive and meaningful. \`<customer_review>\` is better than \`<text>\`. \`<instructions_for_summary>\` is better than \`<instructions>\`. This semantic information provides valuable context.
3. **Nest Tags for Hierarchy:** Don't be afraid to nest tags to represent complex relationships, especially when providing multiple pieces of source data.
    
    **Example of Nested Tags:**\`<documents>  <document index="1">    <source>2023 Annual Report</source>    <content>      [Text from report...]    </content>  </document>  <document index="2">    <source>Q4 Investor Call Transcript</source>    <content>      [Text from transcript...]    </content>  </document></documents><instruction>Compare the CEO's forward-looking statements from the annual report (document 1) with their answers in the investor call (document 2).</instruction>\`
    
4. **Combine Delimiters and Tags:** These tools are not mutually exclusive. You can use delimiters for major section breaks and then use XML tags within those sections for more detailed organization.

## 9.5 Conclusion: From a Messy Desk to a Clean Blueprint

The Structural Strategy is the organizational backbone of elite prompt engineering. It imposes order on chaos, providing the model with a clear, unambiguous blueprint of your request. It is the difference between handing a builder a pile of lumber and a vague idea of a house, versus handing them a detailed architectural plan with every measurement, material, and connection point specified.

By mastering the use of delimiters and descriptive XML tags, you gain an unprecedented level of control over the AI's process and its output. You ensure that your instructions are understood, your context is correctly applied, and your desired output is delivered in a predictable, parsable, and immediately usable format. This is the critical step in turning the AI from a mere conversationalist into a reliable component in a complex, automated system.

# Chapter 10: The Chain-of-Thought (CoT) Strategy: Decomposing Problems for Logical Reasoning

## 10.1 The Leap to a Wrong Conclusion: The Limits of Intuitive AI

In our exploration of prompting so far, we have focused on commanding the AI to produce a specific *what*—a summary, a piece of code, a formatted JSON object. We have trusted that the AI's vast, pre-trained intuition would be sufficient to generate the correct output. For a wide range of tasks, this trust is well-placed.

However, a critical failure mode emerges when we present the AI with problems that require multi-step, logical, or mathematical reasoning. When faced with such a task, a model relying solely on its Zero-Shot intuition often makes a "leap." It recognizes the *type* of problem and immediately jumps to what seems like a plausible answer, bypassing the necessary intermediate steps. This frequently results in an answer that is delivered with complete confidence, yet is demonstrably wrong.

This is the "black box" problem of AI reasoning. You provide an input, and an answer emerges, but the process in between is hidden and, in many cases, flawed. The **Chain-of-Thought (CoT) Strategy** is the key that unlocks this black box. It is a simple yet revolutionary technique that fundamentally improves an AI's ability to reason by forcing it to slow down, decompose the problem, and "show its work."

## 10.2 The Core Idea: Forcing the AI to "Show Its Work"

Imagine giving a complex algebra problem to two students. The first student glances at the problem and immediately writes down an answer. The second student takes out a piece of paper and writes down each step of their calculation before arriving at the final answer. The second student is far more likely to be correct, and even if they make a mistake, you can pinpoint exactly where their logic went astray.

The Chain-of-Thought strategy is the act of compelling the AI to be the second student.

**Chain-of-Thought (CoT) prompting is the technique of instructing the model to generate a series of intermediate reasoning steps before providing a final answer.**

Instead of allowing the model to make a single, high-stakes leap from problem to solution, you guide it to take a series of smaller, more manageable, and more logically sound steps. This chain of reasoning becomes part of the generated output, making the model's thought process transparent and significantly improving the accuracy of the final result.

## 10.3 The Underlying Rationale: Why Thinking Step-by-Step Works

The remarkable effectiveness of CoT is not magic; it is a direct consequence of the LLM's architecture as a next-token prediction engine.

1. **Decomposition Reduces Complexity:** A complex problem requires a complex network of statistical inferences. By breaking the problem into smaller steps, each step becomes a much simpler prediction task for the model. Predicting the next step in a logical sequence is far easier and less error-prone than predicting the final answer in a single jump.
2. **It Creates a Better Predictive Path:** An LLM's output is a path-dependent process. Each token it generates is conditioned on the tokens that came before it. A CoT provides a rich, logical context for each subsequent prediction. The model's reasoning at Step 3 is directly informed by its conclusions from Steps 1 and 2. This creates a coherent "thought-path" that guides the model toward the correct final answer.
3. **Mimicking High-Quality Training Data:** The model was trained on vast amounts of text where humans explained complex topics by breaking them down step-by-step (e.g., math textbooks, scientific papers, tutorials). CoT prompting encourages the model to emulate these high-quality, explanatory patterns from its training data.
4. **Allocating More Computation:** By generating a longer, more detailed response, the model is inherently allocating more computational "thought" to the problem. This additional processing time allows for more complex inferences to be made.

## 10.4 The Foundational Technique: Zero-Shot CoT

The simplest way to elicit a Chain of Thought is through a simple addition to your prompt—a "magic phrase" that triggers the model's reasoning capabilities.

The most common and effective phrase is: **"Let's think step by step."**

Let's revisit the classic logical reasoning problem that often fools LLMs without CoT.

- **Prompt (Without CoT):**\`"A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?"\`
- **Common Incorrect Output (Without CoT):**\`"The ball costs $0.10."\` *(The model makes an intuitive but incorrect leap).*

Now, let's apply the Zero-Shot CoT strategy.

- **Prompt (With Zero-Shot CoT):**\`"A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost? Let's think step by step."\`
- **Correct Output (With CoT):**\`"Okay, let's break this down.1. Let 'b' be the cost of the bat and 'c' be the cost of the ball.2. We know from the problem that b + c = 1.10.3. We also know that the bat costs $1.00 more than the ball, so b = c + 1.00.4. Now I can substitute the second equation into the first: (c + 1.00) + c = 1.10.5. This simplifies to 2c + 1.00 = 1.10.6. Subtracting 1.00 from both sides gives 2c = 0.10.7. Dividing by 2, I find that c = 0.05.Therefore, the ball costs $0.05."\`

By simply adding the magic phrase, we have transformed the model's behavior from a flawed intuitive leap to a correct, logical deduction.

## 10.5 Enhancing Reliability: Few-Shot CoT

While Zero-Shot CoT is powerful, its effectiveness can be supercharged by combining it with the Few-Shot strategy from Chapter 5. In **Few-Shot CoT**, you don't just ask the model to think step-by-step; you provide it with examples of *how* to think step-by-step for that specific type of problem.

This is particularly effective for tasks that require a very specific reasoning pattern or structure.

- **Task:** Solve a simple logic puzzle.
- **Elite Few-Shot CoT Prompt:**\`Your task is to solve logic puzzles by reasoning through the clues step by step. Follow the format of the examples below.\`
    
    \`### EXAMPLE 1 ###Question: A farmer has 15 sheep, and all but 8 die. How many are left?Reasoning: The phrase "all but 8 die" is a bit of a trick. It means that 8 sheep did NOT die. So, there are 8 sheep left.Answer: 8\`
    
    \`### EXAMPLE 2 ###Question: I have two U.S. coins totaling 55 cents. One is not a nickel. What are the coins?Reasoning: The two coins add up to 55 cents. The key clue is "One is not a nickel." This doesn't mean NEITHER coin is a nickel. It just means one of them isn't. The other coin CAN be a nickel. To make 55 cents, I need a 50-cent piece and a nickel.Answer: A 50-cent piece and a nickel.\`
    
    \`### NEW PUZZLE ###Question: A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, "Brothers and sisters I have none, but that man's father is my father's son." Whose portrait is the man looking at?Reasoning:\`
    

By providing examples of the reasoning process itself, you give the model a precise template to follow, dramatically increasing its chances of success on the new problem.

## 10.6 The Breadth of Application: Where to Use CoT

The CoT strategy is not limited to math and logic puzzles. It is a versatile tool that enhances performance across any domain requiring complex thought.

- **Strategic Analysis:**
    - \`Prompt: "Analyze the attached SWOT analysis for our company. First, think step by step to identify the most critical threat and the most promising opportunity. Then, propose a strategic initiative that uses our key strengths to capitalize on the opportunity while mitigating the threat."\`
- **Code Generation and Debugging:**
    - \`Prompt: "I am getting a 'NullPointerException' in this Java code. Let's think step by step. First, analyze the code to identify every variable that could possibly be null. Second, trace the execution path to determine the most likely line where the exception occurs. Third, propose a specific code change to fix the bug."\`
- **Complex Instruction Following:**
    - \`Prompt: "You need to plan a three-day marketing event. Let's think step by step. Day 1 should be focused on keynote speeches. Day 2 should have three parallel tracks for different skill levels. Day 3 should be a series of hands-on workshops. Please generate a detailed agenda."\`

## 10.7 Integrating CoT with Structural and Persona Strategies

CoT reaches its ultimate potential when combined with the other strategies we've discussed. Using the Structural Strategy (Chapter 9) is particularly important for building robust applications.

- **Gold-Standard Prompt (CoT + Persona + Structure):**\`<role>I am an expert financial analyst. My goal is to provide clear, data-driven investment advice.</role>\`
    
    \`<context>Attached are the Q4 earnings reports for Company A and Company B. Both are in the same industry.</context>\`
    
    \`<instruction>Compare Company A and Company B as potential investments. First, conduct your analysis step-by-step inside <thinking> tags. Your analysis must cover revenue growth, profit margins, and debt-to-equity ratio. After your analysis, provide a final, concise recommendation inside <recommendation> tags.</instruction>\`
    

This prompt creates an expert persona, provides clear context, and uses structural tags to command a Chain-of-Thought output that is both transparent and programmatically parsable. This is the blueprint for a reliable, production-grade AI reasoning system.

## 10.8 Conclusion: Opening the Black Box

The Chain-of-Thought strategy is a pivotal technique in the prompt engineer's toolkit. It represents the shift from treating the AI as an opaque oracle to engaging with it as a transparent reasoning partner. By compelling the model to break down problems and articulate its thought process, you not only achieve a higher degree of accuracy but also gain invaluable insight into the AI's "mind."

This transparency is crucial. It allows you to debug, to verify, and to trust the outputs you receive. CoT is more than just a trick to get the right answer; it is a fundamental method for making AI reasoning intelligible, reliable, and ultimately, more powerful.

# Chapter 11: The Self-Consistency Strategy: Enhancing CoT with Multiple Reasoning Paths and Majority Voting

## 11.1 The Fragility of a Single Thread of Logic

In the previous chapter, we unlocked the AI's reasoning capabilities with the Chain-of-Thought (CoT) strategy. By compelling the model to "show its work," we transformed it from an intuitive black box into a transparent, step-by-step reasoner, dramatically improving its accuracy on complex problems. We taught it to follow a single, logical thread from the problem to the solution.

However, even the strongest thread can have a weak point. A single Chain of Thought, while powerful, is still just one path through a complex problem space. It is a single attempt, a single line of reasoning. If there is a small flaw anywhere in that chain—a minor miscalculation, a subtle misinterpretation of a word, a momentary logical lapse—the entire process is derailed, leading to an incorrect final answer. The single CoT is robust, but it can also be brittle.

What if we could move beyond relying on a single, potentially fragile thread of logic? What if, instead of asking for one expert opinion, we could convene a committee of experts, have them all reason through the problem independently, and then adopt the answer that the majority agrees upon? This is the core philosophy behind the **Self-Consistency Strategy**.

## 11.2 The Principle of Cognitive Diversity: Introducing Self-Consistency

The Self-Consistency strategy is a powerful enhancement to Chain-of-Thought prompting that significantly boosts accuracy and reliability. It works by generating multiple, diverse reasoning paths for the same problem and then selecting the most consistent answer through a simple majority vote.

It is a multi-stage process that can be broken down into three core steps:

1. **Generate Diverse Reasoning Paths:** Instead of prompting the model once, you prompt it multiple times (typically 3 to 7 times) with the exact same Chain-of-Thought prompt. Crucially, you do this with a non-zero \`temperature\` setting, which introduces a degree of randomness into the model's predictions. This encourages the model to explore different, yet still plausible, ways of thinking through the problem.
2. **Extract the Final Answer from Each Path:** For each of the generated responses, you parse the text to isolate the final answer, separating it from the intermediate reasoning steps. This is where the Structural Strategy (using tags like \`<answer>\`) becomes invaluable for automation.
3. **Aggregate and Select the Most Consistent Answer:** You tally up the final answers from all the paths. The answer that appears most frequently is selected as the final, most reliable output.

This approach mimics the real-world process of seeking second (and third, and fourth) opinions. A single expert might make a mistake, but it is far less likely that a committee of independent experts will all make the *same* mistake. The consensus view is almost always more robust than a single opinion.

## 11.3 The Underlying Rationale: Why Consensus Builds Confidence

The effectiveness of Self-Consistency is not a coincidence; it is a statistical inevitability based on how LLMs solve problems.

- **Correct Paths Converge, Incorrect Paths Diverge:** For most reasoning problems, there are many potential paths to the *correct* answer, but they all converge on the same solution. For example, one can solve an algebra problem through substitution or elimination, but both valid methods will yield the same result. Conversely, there are an almost infinite number of ways to make a mistake. An error in reasoning is more likely to send the model down a unique, divergent path that leads to a unique, incorrect answer.
- **The Power of the Majority Vote:** Because correct reasoning paths tend to arrive at the same answer, the correct answer will appear multiple times in your set of generated responses. Incorrect answers, resulting from more random and varied errors, are likely to be scattered across different values. Therefore, when you take a majority vote, you are statistically filtering out the noise of the incorrect, divergent paths and amplifying the signal of the correct, convergent ones.
- **The Crucial Role of Randomness (Temperature):** This entire process hinges on the ability to generate *diverse* reasoning paths. If you prompt the model multiple times with a \`temperature\` of 0 (greedy decoding), it will produce the exact same reasoning chain every single time, and a majority vote would be meaningless. By setting a higher temperature (e.g., \`0.5\` to \`0.8\`), you allow the model to explore alternative token predictions at each step. This introduces the slight variations necessary to create different lines of reasoning, some of which may cleverly bypass a potential flaw in the single "most likely" path.

## 11.4 A Practical Walkthrough: Self-Consistency in Action

Let's illustrate this with a word problem that involves multiple steps, a common point of failure for a single CoT.

**The Problem:**\`A book club is reading a 100-page book. On Monday, Jane reads 1/4 of the book. On Tuesday, she reads 1/3 of the *remaining* pages. How many pages are left for her to read?\`

### Step 1: The Prompt (A Standard Zero-Shot CoT)

We start with a simple CoT prompt. The strategy is not in the prompt itself, but in how we use it.

\`Prompt: "A book club is reading a 100-page book. On Monday, Jane reads 1/4 of the book. On Tuesday, she reads 1/3 of the *remaining* pages. How many pages are left for her to read? Let's think step by step, and put the final answer in <answer> tags."\`

### Step 2: Generate Diverse Chains (Multiple API Calls with \`temperature=0.7\`)

We send this prompt to the model three separate times. Due to the temperature setting, we get three slightly different reasoning chains.

- **Generated Chain 1 (Correct):**\`Okay, let's break it down. The book has 100 pages.1. On Monday, Jane reads 1/4 of the book. 1/4 of 100 is 25 pages.2. The number of remaining pages is 100 - 25 = 75 pages.3. On Tuesday, she reads 1/3 of the *remaining* 75 pages. 1/3 of 75 is 25 pages.4. The pages left to read are the remaining pages from Monday minus what she read on Tuesday. So, 75 - 25 = 50 pages.<answer>50</answer>\`
- **Generated Chain 2 (Incorrect):**\`Let's solve this. The book starts at 100 pages.Monday's reading: 100 * (1/4) = 25 pages.Remaining pages after Monday: 100 - 25 = 75 pages.Tuesday's reading: The prompt says 1/3 of the remaining pages. So that's 75 / 3 = 25 pages.Total pages read: 25 (Mon) + 25 (Tue) = 50 pages.Oh, the question asks how many pages are *left*. I misread. The total pages are 100, and she read 50. So, 100 - 50 = 50 pages. Wait, no, that's the total read. The pages left after Tuesday are 75 - 25 = 50. No, that's not right either. It should be 100 minus the total read. Let me re-calculate. After Monday, 75 remain. After Tuesday, she reads another 25. So 75 - 25 = 50. No, wait. 1/3 of the book is about 33 pages. So 75 - 33 = 42 pages.<answer>42</answer>\`*(This chain shows the model getting confused, making a calculation error, and settling on an incorrect answer.)*
- **Generated Chain 3 (Correct, Different Phrasing):**\`Step 1: Calculate pages read on Monday. 100 pages * 0.25 = 25 pages.Step 2: Calculate pages left after Monday. 100 - 25 = 75 pages.Step 3: Calculate pages read on Tuesday. This is one-third of the remainder. 75 * (1/3) = 25 pages.Step 4: Calculate final remaining pages. We take the remainder from Monday and subtract Tuesday's reading. 75 - 25 = 50.<answer>50</answer>\`

### Step 3: Extract the Final Answers

From the three chains, we extract the values within the \`<answer>\` tags:

- From Chain 1: \`50\`
- From Chain 2: \`42\`
- From Chain 3: \`50\`

### Step 4: The Majority Vote

We tally the results:

- Answer \`50\`: 2 votes
- Answer \`42\`: 1 vote

The most consistent answer is **50**. We can now confidently use this as our final output, having filtered out the erroneous reasoning of Chain 2.

## 11.5 The Trade-Off: Cost vs. Confidence

The Self-Consistency strategy offers a significant boost in accuracy, but this benefit comes at a direct and linear cost.

- **Increased Cost and Latency:** If you generate three reasoning paths, your API costs and the time it takes to get a final answer will be at least three times higher. This is the fundamental trade-off of the strategy: you are spending computational resources to buy confidence.

**Ideal Use Cases:**

- **High-Stakes Reasoning:** For tasks where accuracy is paramount and errors are costly, such as financial calculations, medical data analysis, or critical engineering specifications.
- **Verifiable Answers:** It is best suited for problems that have a single, objectively correct answer (e.g., math, logic, factual extraction).
- **Offline or Asynchronous Processing:** It is perfect for batch jobs or back-end processes where user-facing latency is not a concern.

**When Not to Use Self-Consistency:**

- **Creative or Generative Tasks:** For tasks like writing a poem or brainstorming marketing slogans, diversity of output is the goal, not a single correct answer.
- **Real-Time Applications:** The latency overhead makes it unsuitable for most real-time chatbots or interactive applications.
- **Low-Stakes Queries:** The added cost is not justified for simple summarization or classification tasks where a single CoT is sufficient.

## 11.6 Conclusion: From a Single Path to a Confident Consensus

The Self-Consistency strategy is a powerful evolution of Chain-of-Thought reasoning. It acknowledges the fallibility of a single line of thought and mitigates it through the wisdom of the crowd—or in this case, a crowd of the AI's own diverse reasoning processes.

By leveraging controlled randomness to explore multiple solution paths and then selecting the most convergent answer, you can build systems that are not just transparent in their reasoning, but also significantly more robust and reliable. It is a computationally intensive technique, but for mission-critical applications where accuracy is non-negotiable, it is an essential tool for transforming a capable reasoner into a highly confident and dependable one.

# Chapter 12: The Tree-of-Thoughts (ToT) Strategy: Exploring Multiple Solution Branches Simultaneously

## 12.1 Beyond the Linear Path: The Limits of Sequential Reasoning

With Chain-of-Thought (CoT), we taught the AI to follow a single, logical path. With Self-Consistency, we taught it to try several of these linear paths independently and then vote on the outcome. Both are powerful techniques, but they share a fundamental limitation: they are inherently linear and non-adaptive.

Imagine a detective solving a crime. A CoT detective would follow the first plausible lead to its conclusion, without ever pausing to consider alternatives. A Self-Consistent detective would send three separate detectives out to follow their first plausible leads independently. If two of them happened to follow the same wrong lead, their incorrect consensus would win the day.

But a truly brilliant detective does neither. At every step, they consider multiple possibilities. "The butler could be the suspect, *or* it could be the estranged cousin, *or* perhaps the evidence was planted." They evaluate the strength of each possibility, pursue the most promising one for a while, and if it leads to a dead end, they have the crucial ability to **backtrack** to an earlier decision point and explore a different path.

This dynamic, branching, and self-correcting process is the essence of human strategic thinking. The **Tree-of-Thoughts (ToT) Strategy** is a cutting-edge prompting technique designed to give this powerful capability to an AI. It moves beyond the single, linear chain of thought and allows the model to explore a branching tree of possibilities, evaluating its own ideas and making deliberate choices about which path to follow.

## 12.2 The Core Idea: Generation, Evaluation, and Strategic Search

The Tree-of-Thoughts strategy transforms the LLM from a simple sequential reasoner into a more deliberate problem-solver that actively explores a search space. It models the reasoning process not as a single chain, but as a tree, where each "thought" is a node, and the connections are the logical steps between them.

The process operates in a loop of three key phases at each step of the problem:

1. **Thought Generation:** At the current state of the problem, instead of generating just one next logical step (as in CoT), the model is prompted to generate multiple *potential* next steps or ideas. This creates several branches extending from the current node in the "thought tree."
2. **State Evaluation:** The model is then prompted to act as a critic, evaluating the viability and promise of each of the generated branches. It assesses which paths are most likely to lead to a successful solution, which are dead ends, and which are simply less promising than others.
3. **Search and Pruning:** Based on the evaluation, a search algorithm (either explicitly coded or, in a prompted simulation, implicitly decided) determines which branches to explore further. Unpromising branches are "pruned" (abandoned), while the most promising one(s) are selected as the new current state, from which the generation-evaluation loop begins again. This allows the model to perform strategic "lookahead" and, if all current paths seem poor, to "backtrack" to a previous, more promising node.

Think of an AI playing chess. It doesn't just consider its single best next move. It generates a tree of dozens of possible moves, then evaluates the likely outcomes of each of those moves several steps ahead, and finally chooses the path that leads to the most advantageous position. ToT is the application of this strategic exploration to general problem-solving.

## 12.3 The Rationale: Why Exploration Beats Linear Deduction for Hard Problems

ToT is a significant leap forward because it equips the AI with two cognitive tools that are essential for solving complex, non-linear problems:

1. **Global Lookahead:** CoT is myopic; it can only see the next immediate step. ToT, by generating and evaluating multiple future paths, allows the model to make decisions based on a global, forward-looking assessment. It can avoid a path that looks good in the short term but is a trap in the long run.
2. **Backtracking and Self-Correction:** This is the most critical advantage. A CoT, once it makes a mistake, is committed to that error and will follow the flawed logic to its incorrect conclusion. ToT builds in a mechanism for self-correction. If an evaluation reveals that a certain branch of reasoning is flawed or leading to a contradiction, the model can abandon that branch and backtrack to a previous step to explore an alternative, effectively correcting its own mistakes mid-process.

## 12.4 A Practical Walkthrough: Planning a Complex Project with ToT

Let's see how ToT would work on a task that is ill-suited for a simple linear CoT, such as developing a creative strategy.

**The Problem:**\`"Devise a creative and unconventional launch strategy for a new brand of sparkling water called 'Fizzique' that targets health-conscious Gen Z consumers."\`

A CoT might produce one linear, plausible-but-generic plan. A ToT approach would be far more robust.

**Step 1: Decompose the Problem**
The prompt would first break the problem down:

1. Brainstorm core campaign concepts.
2. Select the best concept and develop it into a multi-channel strategy.
3. Outline key messaging for the chosen strategy.

**Step 2: Thought Generation (at Step 1)**
The prompt would ask the AI to generate multiple distinct campaign concepts.
\`Prompt: "Let's start with the core concept. Generate three completely different, unconventional ideas for the Fizzique launch."\`

- **Branch A:** The "Anti-Influencer" Campaign: Focus on micro-communities and authentic, unpaid testimonials.
- **Branch B:** The "Hydration Art" Campaign: Partner with digital artists to create interactive AR filters and art installations inspired by the product.
- **Branch C:** The "Gamified Wellness" Campaign: Create a mobile app where users complete wellness challenges to earn discounts and rewards.

**Step 3: State Evaluation (at Step 1)**
The prompt then instructs the AI to evaluate these branches against the core goals.
\`Prompt: "Now, evaluate each of the three concepts (A, B, and C) on a scale of 1-10 for its potential to engage Gen Z and its feasibility for a startup with a moderate budget. Provide a brief rationale for each score."\`

The AI might conclude that Branch B is the most creative but also the most expensive, while Branch A is highly authentic and budget-friendly. Branch C has high engagement potential but a long development timeline. Based on this, it scores Branch A the highest.

**Step 4: Search and Pruning**
The system (or the next prompt) decides to pursue Branch A. Branches B and C are pruned for now. The new state becomes: "The core concept is the 'Anti-Influencer' campaign." From here, the loop repeats for Step 2 of the problem (developing the multi-channel strategy).

This iterative process of generating, evaluating, and selecting allows the AI to construct a well-reasoned, robust strategy, having already considered and discarded several alternatives.

## 12.5 Simulating ToT in a Single Prompt: The "Committee of Experts" Technique

While a true ToT system often involves a complex control loop, its spirit can be effectively simulated within a single prompt using a "committee of experts" or "multi-persona debate" technique. This approach forces the generation and evaluation of multiple thoughts by assigning different roles to the AI.

- **Elite ToT Simulation Prompt:**\`"I need to decide whether my SaaS startup should pivot from a subscription model to a usage-based pricing model.\`
    
    \`To solve this, I want you to simulate a debate between three expert advisors:1.  **Alex, the Growth Hacker:** Alex is aggressive, data-driven, and focused on maximizing user acquisition and market share.2.  **Brenda, the CFO:** Brenda is cautious, risk-averse, and obsessed with predictable revenue and profit margins.3.  **Charles, the Customer Advocate:** Charles is empathetic and focused on user experience, fairness, and long-term customer loyalty.\`
    
    \`First, have each expert state their initial position on the pivot, providing their core arguments.Next, have them debate each other's points, identifying potential flaws and counterarguments.Finally, synthesize their debate into a single, balanced recommendation that acknowledges the trade-offs and suggests a final course of action."\`
    

This prompt is a ToT simulation. The three experts **generate** three different thought-branches. Their debate is the **evaluation** process, where they critique and analyze each other's points. The final synthesis is the **search** process, which selects the most robust path forward after considering all branches.

## 12.6 When to Use ToT: The Explorer's Toolkit

The choice between CoT, Self-Consistency, and ToT is a strategic one, dependent on the nature of the problem.

- Use **CoT** for problems that have a clear, step-by-step solution path that needs to be followed precisely (e.g., solving a defined math problem, following a technical manual).
- Use **Self-Consistency** to increase the confidence of a CoT-style answer for a verifiable problem, when the cost of error is high.
- Use **ToT** for problems that are open-ended, strategic, or complex, where the path to the solution is not known in advance and requires exploration, evaluation, and adaptation (e.g., creative writing, business strategy, complex planning, research hypothesis generation).

## 12.7 Conclusion: From Following a Recipe to Inventing a Dish

The Tree-of-Thoughts strategy represents a monumental shift in prompt engineering, moving the AI from a system that follows a recipe to one that can invent a dish. It grants the model the ability to deliberate, to weigh options, to look ahead, and to correct its own course—cognitive processes that were once the exclusive domain of human intelligence.

While it is more complex to implement than a simple CoT, ToT is the key to unlocking the AI's potential on the hardest, most ambiguous, and most valuable problems. It is the tool that allows the prompt engineer to guide the AI not just in its execution, but in its very exploration and discovery of the solution itself.

# Chapter 13: The Step-Back Strategy: Generalizing a Problem to Unlock Broader Knowledge

## 13.1 The Forest for the Trees: The Peril of Hyper-Specificity

In our journey to craft better prompts, we have relentlessly pursued the virtue of specificity. We have learned to provide detailed context, break down tasks, and quantify our requirements. This drive for precision is, in most cases, the key to success. However, there exists a class of problems where hyper-specificity becomes a trap. When a prompt is too narrow, too laden with specific details, it can paradoxically limit the AI's ability to produce a high-quality response.

This is the "forest for the trees" problem. By focusing the AI's attention exclusively on the intricate details of a single "tree" (the specific problem), we prevent it from seeing the entire "forest" (the broader principles, concepts, and frameworks that govern the problem space). The model gets stuck in the weeds, its reasoning constrained by the immediate details, and fails to access the high-level, abstract knowledge that is often required for a truly insightful or creative solution.

The **Step-Back Strategy** is a powerful and counter-intuitive technique designed to solve this very problem. It is the practice of deliberately taking a step back from the specific question to first ask a more general, high-level question. By doing this, you compel the model to generate a set of foundational principles or a conceptual framework, which you can then provide as rich, guiding context to solve your original, specific problem.

## 13.2 The Core Principle of Abstraction: The Two-Step Process

The Step-Back strategy is not a single prompt, but a two-prompt workflow. It involves a deliberate act of abstraction followed by a targeted application.

**Step 1: The Abstraction Prompt.**
Instead of asking your specific question, you formulate a "step-back" question. This question abstracts away the specific details (names, dates, numbers) and asks for the underlying principles, concepts, or common patterns related to the task.

**Step 2: The Application Prompt.**
You then take the high-level, principled answer generated by the first prompt and provide it as context for your original, specific question. This primes the model with a rich, relevant framework, enabling it to solve the specific task with far greater depth and accuracy.

Imagine you are lost in a city and need to get from your current location to a specific landmark.

- **Direct Prompt:** Asking for turn-by-turn directions from your current corner to the landmark. This will work, but you learn nothing about the city.
- **Step-Back Strategy:**
    1. **Abstraction:** First, you ask for a map of the entire city district and a compass.
    2. **Application:** Then, using the map and compass, you plot your own course to the landmark.

The Step-Back strategy gives the AI the "map and compass" of general principles, allowing it to navigate the specific problem with a deeper understanding of the entire landscape.

## 13.3 The Rationale: Why Generalizing First Leads to Better Specifics

This two-stage process is highly effective because it fundamentally alters how the AI approaches a problem, leveraging its architecture in a more sophisticated way.

1. **Activates Broader and Deeper Knowledge:** A very specific prompt activates a narrow, specialized slice of the model's knowledge. A general, conceptual question forces the model to access a much broader, more foundational knowledge base. It retrieves first principles, which are often more robust and widely applicable than specific, memorized facts.
2. **Mitigates Overfitting to Details:** When a prompt is overloaded with details, the model can sometimes "overfit" to those details, treating them as absolute constraints and failing to think creatively. Stepping back frees the model from these constraints, allowing it to brainstorm at a higher level before being re-grounded in the specifics.
3. **Generates a Reusable Framework:** The output of the Abstraction Prompt is often a valuable artifact in itself—a set of best practices, a checklist of key considerations, or a summary of core concepts. This framework not only helps solve the immediate problem but can often be reused for other, similar tasks.
4. **Improves Reasoning and Coherence:** The act of generating high-level principles is an act of reasoning. By forcing the model to do this first, you are priming its logical faculties. The final answer is then more coherent because it is built upon a solid, explicitly stated conceptual foundation.

## 13.4 A Practical Walkthrough: From a Generic Storyline to a Compelling Level Design

Let's demonstrate the power of the Step-Back strategy with a creative task where direct prompts often yield clichéd results.

**The Goal:** Write a storyline for a new level in a first-person shooter (FPS) video game.

**Attempt 1: The Direct Prompt**\`Prompt: "Write a one-paragraph storyline for a new level of a first-person shooter video game that is challenging and engaging."\`

- **Common Output (Generic and Uninspired):**\`"The player is dropped into a war-torn city where they must fight their way through enemy soldiers to reach an extraction point. They will face heavy resistance in the streets and must use cover and tactics to survive. The mission is to secure a high-value target before time runs out."\`*(This is technically correct but lacks any creativity or specific detail. It's the most average, statistically likely response.)*

**Attempt 2: The Step-Back Strategy in Action**

**Step 1: The Abstraction Prompt (Asking for Principles)**\`Prompt: "Based on popular and critically acclaimed first-person shooter action games, what are 5 key settings or themes that contribute to a challenging and engaging level storyline?"\`

- **Output of the Abstraction Prompt (A Framework of Ideas):**\`1. **Abandoned Military Base:** A post-apocalyptic complex with mutated soldiers and rogue robots, ideal for intense firearm combat and exploring derelict technology.2. **Cyberpunk Megacity:** A neon-lit, vertical environment with towering skyscrapers and grimy alleyways, featuring cybernetically enhanced enemies and hacking mechanics.3. **Alien Derelict Ship:** A vast, non-Euclidean alien vessel with eerie corridors, zero-gravity sections, and bizarre extraterrestrial creatures to encounter.4. **Zombie-Infested Suburb:** A once-peaceful town now overrun by hordes of aggressive zombies, featuring intense close-quarters combat and environmental puzzle-solving.5. **Underwater Research Facility:** A deep-sea laboratory that is flooding, filled with mutated aquatic creatures and requiring stealth and underwater exploration skills.\`*(This output is now a rich palette of high-quality concepts.)*

**Step 2: The Application Prompt (Combining Principles with the Original Task)**\`Prompt: "You are an expert level designer for an FPS game.\`

\`<context>Here are 5 engaging themes for an FPS level:1.  Abandoned Military Base...2.  Cyberpunk Megacity...3.  Alien Derelict Ship...4.  Zombie-Infested Suburb...5.  Underwater Research Facility...</context>\`

\`<task>Using the 'Underwater Research Facility' theme from the context, write a detailed, one-paragraph storyline for a new level. The storyline must be challenging, engaging, and incorporate elements of stealth, flooding, and mutated aquatic creatures."</task>\`

- **Final Output (Creative and Specific):**\`"The level, titled 'Leviathan's Maw,' begins as the player character, a deep-sea salvage specialist, breaches the airlock of the sunken Benthic Horizon research facility, which went dark 72 hours ago. Alarms blare in the distance as the station's automated systems announce catastrophic hull breaches and imminent collapse. The player must navigate claustrophobic, half-flooded corridors flickering with emergency lights, using stealth to evade sonar-sensitive, bio-luminescent predators that were once the station's research subjects. The core challenge is a race against the rising water level, forcing the player to solve environmental puzzles to re-route power and open new pathways to the upper decks, all while being hunted by a massive, mutated creature that stalks them from the darkened waters of the flooded main reactor chamber."\`*(This output is vastly superior because it was built on the foundation of a high-quality, pre-generated concept.)*

## 13.5 Crafting Effective Step-Back Questions

The quality of this strategy depends entirely on the quality of your Abstraction Prompt. A good step-back question should:

- **Focus on Principles, not Specifics:** Use words like "principles," "frameworks," "core concepts," "best practices," "themes," or "fundamentals."
- **Generalize Entities:** Replace specific names or details with their general categories. Instead of "How can I make this specific character, John Smith, more compelling?" ask, "What are the key literary techniques for creating a compelling and morally ambiguous protagonist in a noir thriller?"
- **Target the AI's General Knowledge:** The question should be something the model can answer from its broad training, not something that requires knowledge of your specific, private context.

## 13.6 Conclusion: The Power of Detour

The Step-Back strategy teaches us a vital lesson in prompt engineering: sometimes the most direct path is not the most effective one. By taking a deliberate detour into the realm of abstraction, you can equip the AI with the foundational knowledge it needs to solve your specific problem with a level of insight, creativity, and coherence that a direct prompt could never achieve.

It is a technique for transforming the AI from a simple implementation tool into a genuine thought partner. You are not just asking it to perform a task; you are asking it to first understand and articulate the very principles that define success for that task. This elevation in thinking is what separates a merely adequate response from an exceptional one.

# Chapter 14: The Self-Correction Strategy: Prompting the AI to Review and Refine Its Own Work

## 14.1 The First-Draft Problem: The Brilliant Improviser Who Never Edits

Large Language Models are, at their core, brilliant improvisers. They generate text token by token, seamlessly weaving together sentences and concepts in a continuous, forward-moving stream of prediction. This process is what allows them to produce fluent, coherent, and often startlingly insightful text. However, this very strength—this relentless forward momentum—is also a critical weakness.

The model's generation process is inherently greedy. It makes the best local choice at each step, but it lacks the natural, recursive cognitive loop that humans use: the process of writing a draft, pausing, re-reading, critiquing, and refining. An LLM, left to its own devices, almost never second-guesses itself. Its first draft is its final draft. This "first-draft fallibility" can lead to outputs that contain subtle factual errors, logical inconsistencies, incomplete arguments, or a failure to adhere to all the constraints of a complex prompt.

The **Self-Correction Strategy** is a sophisticated prompting technique designed to solve this problem. It is the practice of explicitly building a "review and refine" loop *into the prompt itself*. Instead of accepting the AI's first pass, you command it to become its own editor, its own critic, and its own quality assurance engineer. This strategy forces the model to pause its improvisational flow, evaluate its own work against a set of criteria, and produce a new, superior version based on that self-critique.

## 14.2 The Core Idea: Building an Internal Feedback Loop

The Self-Correction strategy moves beyond a simple, one-way instruction. It creates a multi-step, internal workflow within a single prompt or a chained sequence of prompts. The core of the strategy is to separate the act of *generation* from the act of *evaluation*.

- **Without Self-Correction:**\`Prompt -> [AI Black Box] -> Final Output\`
- **With Self-Correction:**\`Prompt -> [AI Generates Draft] -> [AI Critiques Draft] -> Final, Refined Output\`

This is not the same as the user manually reviewing the output and providing feedback in a follow-up prompt. The power of the Self-Correction *strategy* is in its automation. You architect the prompt in such a way that the AI performs this entire loop autonomously, delivering a more polished and reliable result from a single, more complex request. It is the difference between editing a document yourself and teaching a writer to edit their own work before they submit it to you.

## 14.3 The Rationale: Simulating a Deeper Cognitive Process

Forcing an AI to critique its own work is a powerful mechanism that leverages several key aspects of its architecture and training.

1. **Activates Evaluative Capabilities:** LLMs are not just generators; they are also excellent evaluators. They have been trained on a massive corpus that includes critiques, reviews, edits, and debates. By prompting for a critique, you are activating this specific, well-trained capability. The model is often better at recognizing an error than it is at avoiding it in the first place.
2. **Forces Constraint Checking:** In a complex prompt with multiple constraints (e.g., "Summarize under 200 words, in a formal tone, for a non-technical audience, and include a call to action"), a model might miss one of these constraints in its initial, forward-pass generation. A self-correction step that explicitly instructs the model to "review the draft to ensure all constraints have been met" provides a safety net, allowing it to catch and fix its own omissions.
3. **Breaks the Path Dependency:** The token-by-token generation process is path-dependent. An early error can lock the model into a flawed trajectory. The act of generating a critique creates a new, independent context. The model can then re-generate the final output based on the insights from the critique, effectively breaking free from its initial, flawed path.
4. **Improves Robustness and Reliability:** By building a QA step directly into the process, you create a system that is inherently more resilient to error. This is crucial for production applications where the cost of an incorrect or incomplete response is high.

## 14.4 A Toolkit of Self-Correction Techniques

There are several ways to implement the Self-Correction strategy, ranging from simple commands to sophisticated multi-persona simulations.

### 14.4.1 Technique 1: The Explicit "Review and Refine" Command

This is the most direct approach. You instruct the AI to perform the task in sequential stages: draft, review, and finalize.

- **Prompt Structure:**\`Your task is to [describe the task].Follow these steps:1. First, write a preliminary draft of the response.2. Second, review the draft you just wrote. Check it for [list specific criteria: accuracy, clarity, tone, adherence to constraints, etc.].3. Third, rewrite the draft into a final, polished version based on your review.\`

### 14.4.2 Technique 2: The "Critique and Improve" Loop

This technique makes the evaluation step more explicit and transparent by asking the AI to output its critique before generating the final version. This is excellent for debugging and understanding the model's "thought process."

- **Prompt Structure (using structural tags):**\`Your task is to [describe the task].\`
    
    \`First, write your initial draft inside <draft> tags.Next, critique your own draft inside <critique> tags. Identify at least three specific weaknesses or areas for improvement.Finally, write the improved, final version inside <final_version> tags, addressing the points from your critique.\`
    

### 14.4.3 Technique 3: The Multi-Persona Debate

A powerful and creative form of self-correction, this technique leverages the Persona Strategy to create an internal debate. You assign two or more conflicting personas and have them critique each other's perspectives.

- **Prompt Example (Strategic Planning):**\`"We are considering launching a new, premium-priced product. To analyze this, simulate a debate between two VPs: **VP of Sales (The Optimist):** Argue for why this is a massive revenue opportunity. **VP of Finance (The Skeptic):** Argue against it, focusing on the risks of market alienation and high costs.\`
    
    \`After presenting both arguments, act as the CEO and write a final, balanced decision that synthesizes both viewpoints and defines the path forward."\`*(The debate itself is the self-correction mechanism, forcing the model to consider the problem from multiple angles before reaching a conclusion.)*
    

### 14.4.4 Technique 4: The "Pre-Mortem Analysis"

This is a proactive form of self-correction. You ask the model to imagine its response has failed and to diagnose the reasons for that failure *before* it even writes the response.

- **Prompt Example (Project Plan):**\`"I need you to generate a detailed project plan.Before you write the plan, I want you to perform a 'pre-mortem'. Imagine it is six months from now, and this project has failed catastrophically. In a <pre_mortem> tag, write a brief analysis of the three most likely reasons for its failure (e.g., unrealistic timelines, resource conflicts, scope creep).Then, in a <project_plan> tag, write the actual project plan, ensuring it includes specific, explicit mitigation strategies to prevent the failure points you identified in the pre-mortem."\`

## 14.5 Self-Correction in Action: A Code Generation Example

Code generation is a perfect domain to illustrate the power of this strategy, as first-draft code often contains subtle bugs or misses edge cases.

- **Prompt (Without Self-Correction):**\`"Write a Python function that takes a list of strings and returns a new list containing only the strings that are palindromes."\`
- **Possible Output (Flawed):**
    
    \`\`\`python
    def find_palindromes(strings):
        palindromes = []
        for s in strings:
            if s == s[::-1]:
                palindromes.append(s)
        return palindromes
    
    \`\`\`
    
    *(This code works for simple cases but fails on strings with different capitalization, e.g., "Racecar", or strings with punctuation, e.g., "A man, a plan, a canal: Panama".)*
    
- **Elite Prompt (With Self-Correction):**\`"Your task is to write a robust Python function to find palindromes in a list of strings.\`
    - \`*Step 1: The Initial Code**First, write the function inside a \\\\\`\\\`\\\\\`python code block.\`
    - \`*Step 2: Identify Edge Cases & Bugs**Next, as a senior QA engineer, list potential edge cases and bugs in the code you just wrote. Consider issues like capitalization, punctuation, and empty strings.\`
    - \`*Step 3: The Refined Code**Finally, rewrite the function to be robust and handle all the edge cases you identified. Place the final, production-ready code in a separate \\\\\`\\\`\\\\\`python code block."\`
- **Expected Output (Robust and Self-Corrected):Step 1: The Initial Code**
    
    \`\`\`python
    def find_palindromes(strings):
        # ... [initial flawed code] ...
    
    \`\`\`
    
    **Step 2: Identify Edge Cases & Bugs**\`1.  **Capitalization:** The current code is case-sensitive. It would fail to identify "Madam" as a palindrome.2.  **Punctuation and Spaces:** The code doesn't handle non-alphanumeric characters. "A man, a plan, a canal: Panama" would fail.3.  **Empty List:** The code should handle an empty input list gracefully.4.  **Empty Strings:** The code should correctly handle empty strings within the list.\`
    
    **Step 3: The Refined Code**
    
    \`\`\`python
    import re
    
    def find_palindromes_robust(strings):
        """
        Finds all palindromic strings in a list, ignoring case, spaces, and punctuation.
        """
        palindromes = []
        if not strings:
            return []
        for s in strings:
            # Normalize the string: remove non-alphanumeric chars and convert to lowercase
            normalized_s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
            if normalized_s and normalized_s == normalized_s[::-1]:
                palindromes.append(s)
        return palindromes
    
    \`\`\`
    

## 14.6 Conclusion: Building Resilience into the Prompt

The Self-Correction Strategy is the hallmark of a mature prompt engineer. It reflects an understanding that AI generation is a probabilistic process, not a deterministic one, and that building in checks and balances is essential for creating reliable, high-quality outputs.

By moving beyond the single, fire-and-forget prompt, you can architect a more thoughtful, resilient, and self-aware process. You are teaching the AI not just to generate, but to reflect. This internal feedback loop is what elevates a response from being merely plausible to being polished, robust, and correct. It is the final step in transforming the AI from a brilliant but fallible improviser into a dependable and self-aware creative partner.

# Chapter 15: The ReAct Strategy: Combining Reasoning with Action via External Tools

## 15.1 The Confines of the Ivory Tower: The Closed-World Problem

Thus far, our prompting strategies have operated within the "mind" of the AI. We have coaxed it into performing complex reasoning (CoT), exploring multiple possibilities (ToT), and critiquing its own work (Self-Correction). We have, in essence, created a brilliant thinker locked in an ivory tower. This thinker has access to a vast internal library—its training data—but it is a library with a strict cut-off date. It contains no information about yesterday's news, today's stock prices, or the current weather. Its knowledge is static and frozen in time.

This "closed-world" limitation gives rise to two fundamental problems that no amount of pure reasoning can solve:

1. **The Stale Knowledge Problem:** The model cannot answer questions about any event that has occurred since its training data was compiled. Its world view is perpetually out of date.
2. **The Grounding Problem (Hallucination):** When confronted with a question at the edge of its knowledge, the model can't simply *check the facts*. Instead, it often falls back on its primary function: predicting a plausible sequence of words. This can lead to the generation of "hallucinations"—answers that are well-written, confident, and entirely fabricated.

To solve these problems, we must break the AI out of its ivory tower. We need a strategy that allows it to not just *think*, but to *act*—to reach out, interact with the external world, gather fresh information, and use that information to inform its reasoning. This is the purpose of the **ReAct Strategy**.

## 15.2 The Principle of Agency: Reason to Act, Act to Reason

**ReAct**, an acronym for **Reason and Act**, is a paradigm-shifting strategy that transforms the LLM from a passive generator of text into an active agent capable of goal-oriented interaction with its environment. It fuses the step-by-step reasoning of Chain-of-Thought with the ability to use external tools, creating a powerful, iterative loop that mirrors human problem-solving.

Where a CoT model *thinks about* the answer, a ReAct agent *thinks about what to do next*.

The ReAct framework operates on a simple yet profound cycle: the **Thought-Action-Observation loop**.

1. **Thought (Reasoning):** The agent first analyzes the user's query and its current state of knowledge. It then formulates a verbal reasoning trace—a "thought"—that articulates its immediate goal and devises a plan to achieve it by using a specific tool. This thought is not the final answer, but a strategic plan for the next action.
2. **Action (Tool Use):** Based on its thought, the agent generates a specific, machine-readable command to execute an action using one of the tools it has been given access to. This could be a web search, a calculation, a database query, or a call to any external API.
3. **Observation (Processing Tool Output):** The external system (the "harness" or "orchestrator" you build) executes the action and returns the result to the agent. This result—the text from a webpage, the answer from a calculator, the data from a database—is the "observation."

This observation is then fed back into the agent's context, and the loop begins again. The agent's next **Thought** is now informed by the new information it has gathered, allowing it to refine its plan, ask follow-up questions, and iteratively build towards a final answer that is grounded in fresh, external data.

## 15.3 A Practical Walkthrough: The Agent as a Research Assistant

Let's consider a multi-step question that is impossible for a closed-world model to answer correctly.

**The Query:**\`"What was the name of the film that won the Oscar for Best Animated Feature in 2023, and what is its current Rotten Tomatoes score for critics?"\`

A ReAct agent, equipped with a \`Search\` tool, would tackle this as follows:

**Loop 1: Find the Movie**

- **Thought:** "I need to answer a two-part question. First, I need to identify the winner of the Best Animated Feature Oscar in 2023. I don't have this information in my internal knowledge base as it is a recent event. I should use the \`Search\` tool to find this information."
- **Action:** \`Search(query="Best Animated Feature Oscar winner 2023")\`
- **Observation:** (The system executes the search and returns the result) "Guillermo del Toro's Pinocchio won the Academy Award for Best Animated Feature Film at the 95th Academy Awards in 2023."

**Loop 2: Find the Score**

- **Thought:** "Okay, I have the name of the film: 'Guillermo del Toro's Pinocchio'. Now I need to find its current Rotten Tomatoes score for critics. I will use the \`Search\` tool again for this second piece of information."
- **Action:** \`Search(query="Guillermo del Toro's Pinocchio Rotten Tomatoes critic score")\`
- **Observation:** (The system executes the search) "Guillermo del Toro's Pinocchio has a Tomatometer score of 97% based on 300+ critic reviews."

**Loop 3: Synthesize the Final Answer**

- **Thought:** "I have successfully gathered both pieces of required information. I know the movie that won the award and its current critic score on Rotten Tomatoes. I can now formulate the final answer for the user."
- **Action (Final Answer):** "The film that won the Oscar for Best Animated Feature in 2023 was 'Guillermo del Toro's Pinocchio'. Its current Rotten Tomatoes critic score is 97%."

This iterative process allows the agent to decompose the problem and methodically gather the necessary information from the external world before constructing a final, accurate, and up-to-date answer.

## 15.4 The Architecture of a ReAct Agent: The System Prompt as the Blueprint

The ReAct strategy is not just a user-level prompting trick; it is an **agentic architecture** that must be defined in the **System Prompt**. The system prompt is the agent's core programming, its constitution. For a ReAct agent, this prompt must contain several critical components:

1. **Role and Goal Definition:** A clear statement of the agent's purpose (e.g., "You are a helpful AI assistant designed to answer questions by using external tools.").
2. **Tool Specification:** This is the most critical part. You must provide a comprehensive, machine-readable list of all the tools the agent can use. For each tool, you must define:
    - Its name (e.g., \`Search\`, \`Calculator\`).
    - A clear description of what it does (e.g., "Searches the internet for up-to-date information.").
    - The exact format of the \`Action\` call, including parameter names and types (e.g., \`Search(query: str)\`).
3. **Instruction on the Thought-Action-Observation Format:** You must explicitly instruct the model to follow the ReAct loop and to format its output in a precise, parsable way.
    
    **Example System Prompt Snippet:**\`...You have access to the following tools:\`
    
    \`Search(query: str): A tool to search the internet.\`
    
    \`To use a tool, you must use the following format:Thought: [Your reasoning and plan for the next action]Action: [The tool call, e.g., Search(query="your search term")]\`
    
    \`After an action, the system will return an observation:Observation: [The result of the tool execution]\`
    
    \`You must repeat the Thought-Action-Observation cycle until you have enough information to answer the user's question. Then, you must output the final answer directly.\`
    
4. **The Scratchpad (Implicit Context):** The growing history of the conversation (the sequence of Thoughts, Actions, and Observations) acts as the agent's "scratchpad" or short-term memory, allowing it to keep track of its progress.

## 15.5 The Trade-Offs: The Price of Agency

The power of the ReAct strategy is undeniable, but it comes with significant architectural complexity and performance trade-offs.

- **Advantage - Grounding & Freshness:** It is the ultimate solution for reducing hallucinations and ensuring information is up-to-date. The agent's answers are grounded in verifiable, external data.
- **Advantage - Transparency:** The explicit \`Thought\` traces make the agent's reasoning process entirely transparent, which is invaluable for debugging and building trust in the system.
- **Disadvantage - Latency:** ReAct is inherently slow. Each loop involves at least one LLM call plus the execution time of the external tool. A multi-step query can take several seconds to resolve, making it unsuitable for many real-time applications.
- **Disadvantage - Complexity & Cost:** Implementing a ReAct agent requires an "orchestrator" layer of code to parse the agent's \`Action\`, call the correct tool API, and format the \`Observation\`. Furthermore, each reasoning step consumes tokens and incurs API costs, making it more expensive than a single-pass prompt.

## 15.6 Conclusion: From a Thinker to a Doer

The ReAct strategy is a fundamental leap in the evolution of AI interaction. It is the framework that allows us to build not just language models, but true AI agents—systems that can reason, plan, and act upon the world to achieve their goals.

It is a complex and resource-intensive strategy, but it is the essential toolkit for solving problems that require knowledge beyond the model's static training data. By mastering the art of building and prompting these agents, you move from simply conversing with an AI to directing an intelligent, autonomous system capable of dynamic research, analysis, and problem-solving in the real, ever-changing world.

# Chapter 16: The Prompt Chaining Strategy: Breaking Down Complex Workflows into Sequential Tasks

## 16.1 The Allure of the "Mega-Prompt": A Common Pitfall

As a prompt engineer's confidence grows, a natural temptation arises: the creation of the "mega-prompt." This is an attempt to orchestrate a complex, multi-stage workflow within a single, monolithic instruction. The prompt becomes a sprawling document, containing commands to research a topic, then draft a document based on that research, then edit the document for a specific tone, and finally, format it into a table—all in one go.

While this approach can sometimes work for simple tasks, it is a fundamentally fragile and inefficient strategy. The mega-prompt often collapses under its own weight, for several critical reasons:

1. **Cognitive Overload:** Even for a powerful LLM, a long list of disparate instructions can lead to a form of cognitive overload. The model may lose track of earlier constraints, blend distinct steps together, or simply ignore parts of the prompt in its rush to generate a coherent output.
2. **Context Contamination:** Different stages of a workflow often require different "mindsets." The divergent, creative thinking needed for brainstorming is fundamentally different from the convergent, logical thinking needed for technical analysis. When forced into a single context, these mindsets contaminate each other, leading to a less creative brainstorm and a less logical analysis.
3. **Lack of Control and Debuggability:** The mega-prompt is an all-or-nothing proposition. If the final output is flawed, it is nearly impossible to determine which specific instruction in the long chain of commands was misinterpreted. Debugging becomes a frustrating process of trial and error with the entire, complex prompt.
4. **Error Propagation:** A small error or hallucination generated early in the process becomes a permanent, corrupting part of the context. The rest of the generation will be built upon this flawed foundation, leading to a cascade of errors that ruins the final output.

To build robust, reliable, and sophisticated AI systems, we must move beyond the single mega-prompt. We must adopt the mindset of a systems architect, not just a prompter. This is the domain of the **Prompt Chaining Strategy**.

## 16.2 The Assembly Line Principle: Deconstructing the Workflow

The **Prompt Chaining Strategy** is the practice of deconstructing a complex workflow into a series of smaller, discrete, single-purpose prompts. The output of one prompt becomes the direct input for the next, creating a sequential "chain" or "pipeline."

The most powerful analogy for this strategy is a **factory assembly line**.

- A complex product (the final desired output, like a detailed report) is not built at a single, chaotic workstation.
- Instead, it moves down a line. At each station, a specialized worker (a specific, focused prompt) performs one, and only one, well-defined task.
- Station 1 takes the raw materials and forges the chassis. Station 2 takes the chassis and installs the engine. Station 3 takes the engine-fitted chassis and adds the wiring.
- Each step is isolated, optimized, and verifiable. The result is a high-quality, reliably produced final product.

Prompt chaining applies this same industrial logic to AI workflows. Instead of one prompt that does everything poorly, you create a chain of prompts where each link does one thing exceptionally well.

## 16.3 The Rationale: The Four Pillars of Chaining's Power

This strategy is not just a matter of organization; it provides fundamental engineering advantages that are impossible to achieve with a single prompt.

1. **Focus and Precision:** Each prompt in the chain has a single, clear objective. This allows the AI to dedicate its full "attention" and computational resources to executing one well-defined task at a time. This dramatically increases the quality and accuracy of each intermediate step.
2. **Context Isolation and Purity:** This is perhaps the most critical benefit. Each prompt in the chain operates in a "pristine" contextual environment. The creative, divergent thinking of a "Brainstorming Prompt" is completed, and its output is passed to the next step. The "Logical Analysis Prompt" then receives only the clean output of the brainstorm, without any of the contaminating "what if" context that created it. This prevents mental models from bleeding into one another.
3. **Control, Debuggability, and Verifiability:** A chained workflow is transparent. If your final output is flawed, you can inspect the output of each link in the chain. This allows you to immediately pinpoint the exact step—and the exact prompt—that failed. You can then fix that single prompt and re-run the chain from that point, rather than starting the entire process from scratch.
4. **Optimized Resource Allocation:** This is a highly advanced benefit. A single mega-prompt forces you to use one model, with one set of parameters (like temperature), for all sub-tasks. A prompt chain allows you to use the *right tool for the right job* at each step.
    - **Step 1 (Brainstorming):** Use a highly creative model (like Claude 3 Opus or GPT-4) with a **high temperature** (e.g., 0.9) to encourage diverse ideas.
    - **Step 2 (Analysis):** Use a powerful reasoning model with a **low temperature** (e.g., 0.2) to ensure logical, deterministic outputs.
    - **Step 3 (Formatting):** Use a smaller, faster, and cheaper model (like Claude 3 Haiku) with a temperature of **0.0** to simply and reliably reformat the data into JSON.

This allows you to build workflows that are not only more reliable but also significantly more cost-effective and performant.

## 16.4 A Practical Walkthrough: Building a Technical Blog Post with a Prompt Chain

Let's construct a workflow to create a high-quality technical blog post, a task that is notoriously difficult for a single prompt.

**The Goal:** Write a 600-word blog post explaining the ReAct prompting framework for a technical audience.

### **Chain Link 1: The Researcher and Outliner**

- **Persona:** A senior AI research assistant.
- **Goal:** To gather key information and structure the content.
- **Prompt:**\`I am writing a technical blog post explaining the ReAct (Reason and Act) framework.Your task is to act as a research assistant. Based on your knowledge, generate a detailed, hierarchical outline for a 600-word blog post on this topic.The outline must include a brief introduction, a section explaining the core Thought-Action-Observation loop, a section on the benefits (like grounding), a section on the drawbacks (like latency), and a conclusion.\`
- **Output 1:** A well-structured Markdown outline.

### **Chain Link 2: The Technical Writer**

- **Persona:** An expert technical writer who makes complex topics easy to understand.
- **Goal:** To write the main body of the blog post based on the outline.
- **Prompt:**\`<outline>[Output 1 from the previous prompt is pasted here]</outline><instruction>You are an expert technical writer. Using the provided outline as your strict guide, write a full draft of the blog post. Write in a clear, professional, and engaging tone suitable for an audience of software developers. Ensure each section flows logically into the next. Do not write a title yet.</instruction>\`
- **Output 2:** The full 600-word draft of the blog post.

### **Chain Link 3: The Critical Editor**

- **Persona:** A skeptical, detail-oriented editor who checks for technical accuracy and clarity.
- **Goal:** To review and refine the draft.
- **Prompt:**\`<draft_to_review>[Output 2 from the previous prompt is pasted here]</draft_to_review><instruction>You are a meticulous editor. Review the draft above for technical accuracy, logical flow, and clarity. Provide a list of 3-5 specific, actionable suggestions for improvement. Format your feedback as a bulleted list.</instruction>\`
- **Output 3:** A list of suggestions, e.g., "Clarify the difference between the 'Action' and the 'Final Answer' steps..."

### **Chain Link 4: The Final Polish and SEO Specialist**

- **Persona:** An SEO and marketing specialist.
- **Goal:** To apply the edits and optimize the post for discovery.
- **Prompt:**\`<original_draft>[Output 2 is pasted here]</original_draft><editorial_feedback>[Output 3 is pasted here]</editorial_feedback><instruction>You are an SEO expert. First, rewrite the original draft to incorporate all of the editorial feedback.Second, after rewriting the text, generate 5 catchy, SEO-friendly titles for the final blog post.</instruction>\`
- **Final Output:** The polished, final blog post and a list of optimized titles.

## 16.5 The Role of the Orchestrator and the Human-in-the-Loop

A prompt chain is not fully autonomous. It requires an **orchestrator**. This can be a human operator who manually copies and pastes the output of one prompt into the next, or it can be a piece of code (e.g., a Python script) that automates the API calls and state management.

Furthermore, the chain provides perfect opportunities for **human-in-the-loop** intervention. A human expert can review the outline from Link 1 before it's passed to the writer, or edit the draft from Link 2 before it goes to the editor. This powerful synergy combines the speed and scale of AI with the nuanced judgment and expertise of a human, resulting in a final product that is superior to what either could achieve alone.

## 16.6 Conclusion: From Prompting to Workflow Architecture

The Prompt Chaining Strategy represents a crucial maturation in the discipline of prompt engineering. It is the point where we move beyond crafting single instructions and begin designing entire systems of intelligent work. It demands a new way of thinking—decomposing problems, defining clear interfaces between steps, and optimizing each component for its specific task.

By embracing this assembly line approach, you gain unprecedented control, reliability, and efficiency. You can build complex, multi-stage AI applications that are robust, easy to debug, and capable of producing outputs of a quality and sophistication that no single mega-prompt could ever hope to achieve. This is the future of applied AI: not a single, monolithic intelligence, but a well-orchestrated symphony of specialized, intelligent agents working in concert.

# Chapter 17: The Multi-Agent Strategy: Decomposing Workflows into a Team of Specialized AI Agents

## 17.1 From the Assembly Line to the Expert Team

In the previous chapter, we took a monumental leap from the single mega-prompt to the sequential logic of the prompt chain. We transformed our process from a single, chaotic workstation into an orderly, efficient assembly line. Each link in the chain performs its task with focus and precision, passing its completed work to the next station. This linear, sequential model is a powerful tool for bringing order and reliability to complex workflows.

But what happens when the task is not a simple linear assembly? What if it requires the collaborative effort of multiple, distinct specializations, working sometimes in sequence, sometimes in parallel, and sometimes in debate? A factory assembly line is good at building a car, but it's not the right model for designing one. Designing a car requires a *team*: a visionary product manager, a pragmatic engineer, a creative designer, and a meticulous quality assurance expert.

This is the next evolution in our thinking. The **Multi-Agent Strategy** is the practice of transcending the linear chain and architecting a virtual **team of specialized AI agents**. Each agent is an independent instance of the LLM, instantiated with its own unique, highly focused persona and purpose. This is not just a chain of prompts; it is a system of collaborators. It is the point where the prompt engineer truly becomes a systems architect, or perhaps, a team manager.

## 17.2 The Rationale: The Power of Deep Specialization

A single, general-purpose AI, even when guided through a prompt chain, can struggle to effectively context-switch between the different mindsets required for a complex workflow. The divergent, "blue-sky" thinking needed for brainstorming is fundamentally at odds with the convergent, detail-obsessed thinking needed for code debugging. Asking one "worker" to rapidly switch between these roles is inefficient and error-prone.

The Multi-Agent strategy solves this by creating a virtual team where each member is an undisputed world expert in their single, narrow domain. This approach yields profound benefits:

1. **Deep Expertise and Persona Purity:** Instead of a single AI with a diluted, general-purpose persona, you can create an agent whose entire "being"—defined by its system prompt—is optimized for a single function. A "Creative Brainstormer" agent's system prompt can be filled with language that encourages novelty and risk-taking, while a "QA Engineer" agent's prompt can be built around principles of rigor, skepticism, and meticulous attention to detail. This "persona purity" results in a far higher quality of work at each stage.
2. **Cognitive Isolation:** This is the most critical architectural advantage. By separating the workflow into distinct agents, each with its own isolated conversational context, you prevent "cognitive contamination." The creative, high-temperature chaos of the brainstorming agent never touches the pristine, low-temperature logical context of the system architect. Each agent operates in its own clean room, receiving only the necessary inputs and producing a clean output, unburdened by the thought processes of the agents that came before it.
3. **Modularity and Maintainability:** A multi-agent system is inherently modular. If you find that your "Code Generation" agent is underperforming, you can fine-tune or replace its system prompt without touching any other part of the workflow. This makes the entire system easier to debug, maintain, and upgrade over time—a core principle of robust software engineering.
4. **Parallel Processing:** While a prompt chain is strictly sequential, a multi-agent system can be designed to work in parallel. You can have three different "Marketing Angle" agents brainstorm ideas simultaneously, and then have a fourth "Marketing Director" agent synthesize their best ideas. This can dramatically reduce the total time required to complete a complex task.

## 17.3 The Four Principles of Multi-Agent Architecture

Building an effective multi-agent system requires a disciplined, architectural approach. Four key principles must be followed.

### Principle 1: Decompose the Workflow into Discrete Roles

Before writing a single prompt, analyze your workflow and break it down into the distinct expert roles required for its completion. Think like a manager building a project team. What are the key phases? Who are the specialists you need? (e.g., Researcher, Writer, Editor, Strategist, Critic).

### Principle 2: Engineer a Pure, Elite Persona for Each Agent

For each identified role, craft a dedicated, highly specific **System Prompt**. This prompt is the agent's DNA. It must be pure, focusing only on that agent's core identity, tools, and behavioral logic. Do not contaminate it with specific examples or data for a one-off task. (See Chapter 6: The Persona Strategy).

### Principle 3: Enforce Strict Context Isolation

This is the golden rule of multi-agent systems. **Each specialized agent must operate in its own, separate chat session or conversational context.** Do not force them to share the same conversational history. The output from Agent A becomes the *input* for Agent B, but Agent B should never see the *conversational history* that led Agent A to its conclusion. This prevents context contamination and ensures each agent operates with a clean slate, focused only on its specific task and persona.

### Principle 4: Match Configuration to the Role

Leverage the freedom that a multi-agent architecture provides. Each agent can be run with its own optimal configuration.

- **Creative Agents (Brainstormers, Copywriters):** Use a powerful, creative model (e.g., GPT-4, Opus) at a **high temperature** (0.8+) to encourage novel and diverse outputs.
- **Logical Agents (Analysts, Architects, QA):** Use a strong reasoning model at a **low temperature** (0.0 - 0.2) to ensure deterministic, stable, and logically sound outputs.
- **Simple Task Agents (Formatters, Classifiers):** Use a fast, cost-effective model (e.g., Haiku, Sonnet) to perform simple, repetitive tasks efficiently.

## 17.4 A Practical Walkthrough: The Software Development Team

Let's apply these principles to build a virtual team to turn a business requirement into a fully specified software project.

**The Workflow:** Business Need -> User Stories -> System Architecture -> Test Plan

### **Agent 1: The Product Manager**

- **Persona:** An expert Product Manager who bridges the gap between business needs and engineering requirements.
- **System Prompt:** \`"I am an expert Product Manager. My core function is to work with stakeholders to translate abstract business needs into clear, concise, and unambiguous user stories, complete with detailed acceptance criteria. I follow the INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable) model for story writing."\`
- **Configuration:** Reasoning Model, Temperature 0.5 (for a balance of structure and clarity).
- **Input:** A vague business request, e.g., "We need a way for users to update their profiles."
- **Output:** A list of well-formed user stories.

### **Agent 2: The System Architect**

- **Persona:** A seasoned System Architect specializing in designing robust, scalable, and secure microservices.
- **System Prompt:** \`"I am a seasoned System Architect. I take user stories and acceptance criteria and transform them into a complete system design. My output includes detailed API contracts (endpoints, request/response schemas), data models for the database, and a high-level diagram of component interactions. I prioritize security and scalability in all my designs."\`
- **Configuration:** Reasoning Model, Temperature 0.1 (for precision and logic).
- **Input:** The user stories generated by the Product Manager agent.
- **Output:** A detailed technical specification.

### **Agent 3: The QA Engineer**

- **Persona:** A meticulous and slightly paranoid QA Engineer with a passion for finding failure points.
- **System Prompt:** \`"I am a meticulous QA Engineer. I analyze user stories and system architecture designs to create comprehensive test plans. My goal is to anticipate every possible failure mode. My output is a detailed list of test cases, including unit tests, integration tests, and end-to-end test scenarios, specifying the test's purpose, steps, and expected outcome."\`
- **Configuration:** Reasoning Model, Temperature 0.6 (to creatively imagine failure scenarios).
- **Input:** The user stories from the PM and the system design from the Architect.
- **Output:** A comprehensive test plan.

In this workflow, the manager (the orchestrator) takes the output from the PM and provides it as the *sole input* to the Architect in a brand new, isolated chat. This process is repeated for the QA Engineer. The result is a high-quality, fully specified project plan, created by a team of virtual experts, each performing their role flawlessly.

## 17.5 The Orchestrator: The Human (or Code) in Command

A multi-agent system, like a human team, requires a manager. This role is filled by the **orchestrator**. The orchestrator is responsible for:

1. Defining the agents and the workflow.
2. Passing the output of one agent as the input to the next.
3. Managing the isolated contexts for each agent.

In a manual process, the orchestrator is you, the prompt engineer, copying and pasting between different chat windows. In an automated system, the orchestrator is a script (e.g., in Python) that manages the API calls, stores the intermediate outputs, and routes the data between the different agent "functions."

## 17.6 Conclusion: The Future is a Symphony

The Multi-Agent Strategy is the pinnacle of modern prompt engineering. It represents the final and most crucial conceptual shift: from crafting a single, perfect prompt to designing a holistic, intelligent system. It is the difference between conducting a soloist and conducting an orchestra.

Each agent is a finely tuned instrument, and the system prompt is its sheet music. By creating a team of these virtual specialists and orchestrating their collaboration, you can tackle problems of a complexity far beyond the reach of any single prompt. You can build systems that brainstorm, design, execute, and critique—simulating the entire collaborative process of an expert human team. This is not just prompting; it is the architecture of AI-powered work.

# Chapter 18: The Constructive Guidance Strategy: Iterating and Steering the AI within a Conversation

## 18.1 The Myth of the Perfect First Prompt

In our quest for prompt engineering mastery, we have dedicated immense effort to the art of crafting the perfect initial prompt—a single, flawless instruction designed to elicit a complete and perfect response in one go. For simple, well-defined tasks, this ideal is achievable. But for any task of significant complexity, creativity, or duration, the "one-shot, one-kill" approach is a myth.

A complex task is not a transaction; it is a process. The AI's initial output, no matter how well-prompted, should not be viewed as the final product. It is the **first draft**. It is the sculptor's initial, rough-hewn block of marble. It contains the form and potential of the final masterpiece, but it requires shaping, refinement, and detail work.

This is where the role of the prompt engineer must evolve from that of an *architect* who designs the blueprint to that of a *director* on a film set. The director doesn't just hand the actor a script and walk away; they watch the performance, provide feedback, and guide the actor through multiple takes to achieve the desired outcome. The **Constructive Guidance Strategy** is the practice of this active, in-conversation direction. It is the art of iterating with the AI, steering its performance turn by turn, and collaboratively refining a first draft into a final, polished product.

## 18.2 The Rationale: The AI as a Collaborative Partner

Understanding why this iterative, conversational approach is so effective requires us to embrace a new mental model. The AI is not a vending machine where a perfect input guarantees a perfect output. It is a collaborative partner that learns and adapts *within the context of a single conversation*.

1. **The AI Mirrors Your Tone:** LLMs are highly attuned to the user's tone. If you respond to a suboptimal output with negative, critical, or accusatory language ("You're wrong," "That's a terrible function," "You didn't follow my instructions"), you can inadvertently trap the model in a negative feedback loop. It may become defensive, uncooperative, or produce increasingly degraded responses. Constructive, positive, and encouraging language, however, fosters a collaborative state, making the AI more receptive to your guidance.
2. **In-Context Learning in Action:** Every turn in a conversation is a micro-learning opportunity for the AI. When you provide corrective feedback, you are essentially creating a new, temporary Few-Shot example. Your refinement—"That's a good start, now let's add error handling"—becomes part of the context, teaching the model the desired pattern for the *next* generation within that same conversation.
3. **The User as the State Manager:** The AI has no true understanding of when a sub-task is "finished." It only knows the linear history of the conversation. Without clear signals from the user, it may continue to "work on" a problem that you consider solved, leading to context contamination. The user must act as the explicit project manager of the conversation, clearly opening and closing tasks to guide the AI's focus.

Mastering this strategy means moving from a mindset of "pass/fail" on the AI's first response to a mindset of "draft and refine."

## 18.3 A Toolkit of Conversational Steering Techniques

Effective guidance is not a single technique, but a suite of conversational tactics used to steer the AI's performance.

### 18.3.1 Principle 1: Positive Reinforcement and Constructive Feedback

When an output is not perfect, always frame your feedback constructively. Start by acknowledging the positive aspects of the response, then clearly and specifically state the desired modifications.

- **Less Effective (Negative Criticism):**\`"This function you wrote is terrible. It has a bug and it doesn't even handle errors. Fix it."\`
- **More Effective (Constructive Guidance):**\`"Excellent first draft of the function! You've captured the core logic perfectly. Now, for our production version, let's enhance it. Could you please add a try-catch block to handle potential exceptions and also add a check to ensure the input parameter is not null before processing?"\`

This approach is not about being polite for the sake of it. It is a more effective engineering practice that keeps the AI in a collaborative state and provides clear, actionable instructions for improvement.

### 18.3.2 Principle 2: Explicit State Management

Do not assume the AI knows when a sub-task is complete and it's time to move on. You must provide explicit signals to close out a task, which allows the AI to "release" that context and devote its full attention to the next objective.

- **Ambiguous (Implicit State):***(After the AI generates a block of code)* \`"Okay, now create the documentation for it."\`*(The AI might think the code itself is still under review and that the documentation is part of the same, ongoing task.)*
- **Explicit (Clear State Management):**\`"That code is perfect and passes all my tests. We can now consider the implementation task for this module to be 100% complete. Let's start the next distinct task: generating the user documentation for the function we just finalized."\`

The second prompt provides an unambiguous signal that the coding task is finished, preventing its context from bleeding into the documentation task.

### 18.3.3 Principle 3: Trajectory Correction via Editing

When a conversation goes off track due to a misunderstanding in an *earlier* prompt, the most effective solution is often **not** to try and fix it with a series of follow-up corrections. The superior solution is to go back in the conversation history and **edit the user prompt that caused the deviation**.

- **Why It Works:** An AI's response is conditioned on the *entire* preceding conversation history. If an early prompt contains a flaw, that flaw becomes a permanent, corrupting part of the foundational context for all subsequent turns. Follow-up "patches" ("No, I meant this," "Don't do that, do this instead") add more noise and confusion. Editing the original, flawed prompt cleans the foundational context. This allows the AI to regenerate its entire reasoning path from a correct starting point, resulting in a far more coherent and accurate outcome.
- **Illustrative Example:**
    - **Bad Practice (Patching):**
        - **User:** \`"Generate a Python script to parse CSV files in the /data directory."\`
        - **AI:** *(Generates a script using the \`pandas\` library)*
        - **User:** \`"No, I can't use pandas. The environment is minimal. Don't use external libraries."\`
        - **AI:** *(Rewrites using Python's built-in \`csv\` module, but the context is now messy)*
    - **Good Practice (Editing):**
        - **User (Original):** \`"Generate a Python script to parse CSV files in the /data directory."\`
        - **AI:** *(Generates script using \`pandas\`)*
        - **User (Goes back and edits the original prompt to):** \`"Generate a Python script to parse all CSV files in the /data directory. The script must use only the Python standard library, with no external dependencies like pandas. It must include robust error handling for missing files."\`*(The AI now regenerates its response from a clean, correct foundation.)*

### 18.3.4 Principle 4: Pre-Execution Calibration (The 'Teach-Back' Method)

Before the AI begins a complex, time-consuming task, you can prevent wasted effort by requiring it to first confirm its understanding of the plan. This "teach-back" method exposes any subtle misunderstandings *before* significant work is done.

- **Why It Works:** True understanding is only confirmed when the AI can articulate the plan in its own words. This forces the model to synthesize your instructions and formulate a coherent plan of action, revealing any hidden assumptions or misinterpretations upfront.
- **Illustrative Example:**\`"We need to build a REST API endpoint for user profile updates. It should use the HTTP PATCH method, be authenticated, and allow updates to a user's 'firstName', 'lastName', and 'bio' fields in the database. **Before you write any code, please confirm your understanding of the task.** Describe the endpoint's path, the expected request body structure, the validation checks you will perform, and the sequence of operations in your plan."\`

This single alignment step is one of the most critical and highest-leverage actions a user can take in a complex conversation.

## 18.4 Conclusion: The User as the Conductor

The Constructive Guidance Strategy completes our understanding of the user's role in prompt engineering. You are not a passive audience member waiting for a performance. You are the conductor of an orchestra. Your initial prompt is the downbeat, but your true skill is revealed in how you guide the ensemble through the performance—adjusting tempo, correcting notes, and shaping the dynamics to create a symphony.

The quality of a long and complex AI-driven task is almost never determined by the brilliance of the first prompt alone. It is determined by the user's skill in managing the ensuing dialogue. By mastering the art of constructive feedback, explicit state management, trajectory editing, and pre-execution calibration, you can transform the AI from a simple tool that responds to commands into a true partner that collaborates in an iterative and deeply creative process.

# Chapter 19: The Affirmative Direction Strategy: Stating What to Do vs. What Not to Do

## 19.1 The Paradox of Prohibition: The "Pink Elephant" Problem

There is a classic psychological exercise that perfectly illustrates a fundamental flaw in human—and artificial—cognition: **"For the next ten seconds, do not, under any circumstances, think of a pink elephant."**

The result is inevitable. The very act of processing the prohibition forces your mind to conjure the exact image you are trying to avoid. The instruction, intended to prevent a thought, is the very thing that seeds it. This paradox of prohibition is not just a quirk of human psychology; it is a critical, mechanistic limitation in how Large Language Models process information.

A common but deeply flawed approach to prompting is to provide the AI with a list of negative constraints—a list of things it *should not* do. "Do not write code without comments." "Do not use a formal tone." "Do not forget to handle edge cases." While this seems like a direct and logical way to constrain the model's output, it is, in fact, one of the least effective and most error-prone methods of instruction.

The **Affirmative Direction Strategy** is a complete paradigm shift away from this thinking. It is built on a simple, robust, and machine-friendly principle: **Architect the path to the desired outcome, rather than just fencing off the paths to the undesired ones.** It is the art of exhaustively detailing what the AI *should* do, in such a compelling and comprehensive way that the possibility of error is never even introduced.

## 19.2 The Rationale: Why "Don't" is a Flawed Command for an LLM

To understand why affirmative direction is so superior, we must look at how an LLM's attention mechanism and predictive engine actually work.

1. **Attention is Not Negation:** When you include the phrase "Do not use insecure functions" in a prompt, the model's attention mechanism must still focus on the concept of "insecure functions" to understand the instruction. The words "insecure" and "functions" become highly weighted parts of the context. The negation ("do not") is a grammatical modifier, but it does not erase the semantic presence of the core concept. The pink elephant is now in the room, and the model has to actively expend effort to work around it, ironically increasing the cognitive load and the chance of a related error.
2. **The Weakness of Negative Weights:** LLMs operate by predicting the most probable next token. The presence of a concept in the prompt increases the probability of related tokens appearing. While a negation might attempt to apply a negative weight, this signal can be weak and easily lost or down-weighted, especially in a long and complex prompt. The strong, positive signal of the core concept often overpowers the weak, negative signal of the prohibition.
3. **A Clean Path vs. a Minefield:** An affirmative instruction creates a clean, direct, and efficient "thought path" for the model to follow. It's a clear map to a destination. A list of prohibitions, conversely, creates a cognitive minefield. The model must generate a potential output and then constantly check it against the list of things it's not supposed to do. This is a computationally expensive, reactive, and error-prone process. It is far more robust to build a single, safe, well-lit highway than it is to send the model into a dark field with a map of where the mines *might* be.

## 19.3 The Core Principle: Proactive Design over Reactive Correction

The essence of the Affirmative Direction Strategy is to shift your mindset from being a reactive critic to a proactive architect. Instead of correcting potential failures, you design a process that leads inevitably to success.

- **The Prohibitive Mindset (Reactive):**
    - *Starts with:* "What could go wrong?"
    - *Generates:* A list of "Don't..." statements.
    - *Result:* A complex, inefficient process that risks failure at every step.
- **The Affirmative Mindset (Proactive):**
    - *Starts with:* "What does a perfect execution of this task look like, step-by-step?"
    - *Generates:* A detailed, positive description of the ideal process and persona.
    - *Result:* A clean, direct, and robust process that guides the AI naturally to the desired outcome.

## 19.4 Affirmative Direction in Practice: A Gallery of Transformations

This principle is best understood through concrete, side-by-side comparisons. Notice how the "More Effective" versions are not just simple inversions of the negative commands; they are richer, more detailed descriptions of a successful persona and workflow.

### **Example 1: Code Generation and Best Practices**

- **Less Effective (Prohibitive):**\`"Write a Python function to process user data.Do not write code without comments.Do not forget to handle edge cases like null input.Do not use insecure functions like 'pickle'.Do not write one large, monolithic function."\`
- **More Effective (Affirmative):**\`"I am a senior Python developer who practices meticulous, documentation-driven design and adheres to the highest standards of security and modularity.My process for writing any function is as follows:1. **Define Signature and Docstring:** First, I define the function signature with full type hints. Then, I immediately write a comprehensive docstring detailing its purpose, parameters, return values, and any potential exceptions it may raise.2. **Input Validation:** The very first part of my implementation is robust input validation. I rigorously check for all edge cases, such as null or empty inputs, and handle them gracefully.3. **Modular and Secure Implementation:** I write the core logic using small, well-named helper functions. I exclusively use secure, industry-standard libraries like 'json' for data serialization.4. **Final Review:** Before concluding, I review my code to ensure it is clean, readable, and perfectly documented.\`
    
    \`Now, following this exact process, write a Python function to process user data."\`
    

### **Example 2: Controlling Writing Style and Tone**

- **Less Effective (Prohibitive):**\`"Write an email to a customer about a service outage. Do not be too formal. Do not use technical jargon. Do not sound like a robot. Do not blame the customer."\`
- **More Effective (Affirmative):**\`"I am a compassionate and clear-thinking customer support specialist.I am writing an email to a non-technical customer to inform them about a recent service outage.My writing style is warm, empathetic, and direct. I use simple, everyday language and clear analogies to explain technical issues. My primary goal is to reassure the customer and provide them with a clear timeline for the resolution.The email should have three parts: a sincere apology acknowledging their frustration, a brief and simple explanation of the issue, and a confident statement about the next steps."\`

### **Example 3: Content Generation and Focus**

- **Less Effective (Prohibitive):**\`"Write a product description for our new hiking boot. Do not talk about the price. Do not mention our competitors by name. Do not make it too long."\`
- **More Effective (Affirmative):**\`"Write a product description for our new hiking boot, the 'Trailblazer Pro'.The description must be exactly three paragraphs long.The first paragraph should focus on the boot's core benefit: all-day comfort, enabled by our proprietary 'CloudStep' insole technology.The second paragraph should highlight its durability, focusing on the waterproof Gore-Tex material and the rugged Vibram outsole.The final paragraph should be a compelling call to action, inviting the reader to 'experience their next adventure'."\`

## 19.5 Integrating Affirmative Direction with System Prompts

The Affirmative Direction Strategy finds its most powerful application in the design of **System Prompts**. A system prompt should be a positive constitution for the AI. It should be a declaration of *what the AI is* and *how it operates*, not a penal code of what it is forbidden from doing.

A system prompt built on prohibitions creates a fearful, hesitant AI. A system prompt built on a rich, affirmative description of an expert persona creates a confident, capable, and proactive AI collaborator.

## 19.6 A Note on Absolute Boundaries

This is not to say that a prohibition is *never* useful. For absolute, hard-line safety constraints or legal guardrails, an explicit "DO NOT" can serve as a final, critical safety net. For example: "DO NOT, under any circumstances, generate personally identifiable information (PII)."

However, these should be seen as the exception, not the rule. They are the high-voltage fences around the perimeter, used sparingly for critical boundaries. The detailed work of guiding the AI within that perimeter should always be done with the positive, proactive, and ultimately more effective language of affirmative direction.

## 19.7 Conclusion: The Architect of Success

The Affirmative Direction Strategy is a fundamental shift in prompt design. It moves the engineer's focus from preventing failure to architecting success. It is a more robust, more efficient, and more reliable way to communicate with a predictive system.

By learning to describe the ideal process in rich, positive detail, you are not just giving the AI a command; you are giving it a blueprint for excellence. You are drawing a clear and direct map to the treasure, making the journey so straightforward that the model never even considers wandering into the surrounding traps. This proactive design is the essence of advanced, reliable AI engineering.

# Chapter 20: The Output Formatting Strategy: Forcing Structured Data like JSON and Tables

## 20.1 The Last Mile Problem: From Prose to Precision

The raw, native output of a Large Language Model is prose. It is conversational, descriptive, and human-readable. This is its greatest strength and, for many applications, its most crippling weakness. When you are building a software application, a data pipeline, or any automated workflow, a conversational paragraph is not a useful input. It is a block of unstructured text that requires fragile, complex, and error-prone post-processing—like regular expressions or brittle string splitting—to extract the valuable information locked within.

This is the "last mile" problem of prompt engineering. You can guide an AI to a perfectly correct and insightful answer, but if that answer is delivered in a format that your system cannot reliably parse, the entire effort is wasted. A human can understand, "Sure, the user's name is John Doe, and his ID is 123." A computer cannot. A computer needs \`{"name": "John Doe", "id": 123}\`.

The **Output Formatting Strategy** is the solution to this critical problem. It is the practice of compelling the model to act not as a conversationalist, but as a precise data structuring engine. It involves a suite of techniques designed to force the AI to deliver its response in a perfectly predictable, machine-readable format, such as JSON, XML, or a Markdown table. Mastering this strategy is the essential bridge between using AI for simple assistance and integrating AI as a reliable, automated component in a production-grade system.

## 20.2 The Rationale: Why Structure is Non-Negotiable for Systems

Forcing a structured output is not a matter of stylistic preference; it is a fundamental requirement for building robust AI-powered applications.

1. **Machine Readability:** This is the primary driver. Structured data can be instantly and reliably parsed by any programming language. A JSON object can be deserialized into a native object or dictionary, and a table can be read into a data frame, all with zero ambiguity. This eliminates the need for a fragile layer of parsing code.
2. **Consistency and Reliability:** When you successfully enforce an output format, you guarantee that the *shape* of the data will be the same every single time. This predictability is the bedrock of reliable systems. You can build your application with the confidence that the \`user_id\` field will always be present and correctly named.
3. **Reduced Post-Processing:** By making the AI do the work of structuring the data, you save significant development time and effort. The logic for extracting and organizing the information is embedded in the prompt itself, rather than in a separate, complex body of post-processing code.
4. **Implicit Constraint and Focus:** Forcing the AI to populate a specific structure is a powerful form of affirmative direction. When you ask for a JSON object with keys for \`product_name\`, \`price\`, and \`sku\`, you are implicitly telling the model to find *only* that information and to ignore everything else. This helps to focus the model's attention, reducing the likelihood of it including irrelevant details or hallucinating extraneous facts.

## 20.3 The Toolkit of Formatting Control

There are several techniques to enforce a specific output format, ranging in effectiveness from a gentle suggestion to an almost unbreakable command.

### 20.3.1 Technique 1: The Direct Command (The Simple Request)

This is the most straightforward method: simply tell the model what format you want.

- **Prompt:** \`"Extract the key entities from the following text and format them as a JSON object."\`
- **Effectiveness:** This often works for simple, standard formats like JSON or bulleted lists, but it can be unreliable. The model might still include conversational preambles ("Here is the JSON you requested:") or use inconsistent key names. It's a good starting point, but not robust enough for production.

### 20.3.2 Technique 2: The Schema or Template (The Blueprint)

This technique is a significant step up in reliability. Instead of just naming the format, you provide a blueprint or an empty template of the structure you want the AI to fill in.

- **Prompt (for a Markdown Table):**\`"Extract the following information from the text and present it in a Markdown table with these exact columns: | Product Name | SKU | Price |"\`
- **Prompt (for JSON):**\`"Extract the required information into a JSON object that conforms to the following schema:{ "author": string, "publication_year": integer, "key_findings": [string]}"\`
- **Effectiveness:** By providing the exact keys or column headers, you give the model a clear "form" to fill out. This dramatically increases the consistency of the output's structure and is highly effective for most use cases.

### 20.3.3 Technique 3: The Few-Shot Example (The Gold Standard)

As discussed in Chapter 5, showing is always more powerful than telling. Providing a complete, end-to-end example of an input and its perfectly formatted output is the most unambiguous and reliable way to enforce a structure.

- **Prompt (for Custom Delimited Format):**\`"Extract the name and email from the text. Follow the example format precisely.\`
    
    \`### EXAMPLE ###Text: "You can reach out to Steve Rogers at s.rogers@avengers.com for more info."Output: Steve Rogers|s.rogers@avengers.com\`
    
    \`### NEW TASK ###Text: "The project lead is Jane Doe (email: j.doe@example.com)."Output:\`
    
- **Effectiveness:** This is the gold standard for reliability. The model learns the exact transformation and formatting pattern from your example, leaving no room for interpretation. It is the preferred method for any complex or custom format.

### 20.3.4 Technique 4: The Prefilling Strategy (The Nudge)

This is a clever and powerful technique that leverages the model's predictive nature. You can "force" the model to begin its response in a specific format by prefilling the very first part of the \`assistant\`'s turn in your API call.

- **How it works:** If you want a JSON object, you start the assistant's response with a single opening brace: \`{\`. If you want a JSON array (a list), you start it with an opening bracket: \`[\`.
- **API Call Example (Simplified):**\`messages = [ {"role": "user", "content": "Extract the names of the three main characters into a JSON list."}, {"role": "assistant", "content": "["}]\`
- **Effectiveness:** This is an extremely strong signal. By providing the opening character, you have dramatically constrained the model's next token prediction. It is now overwhelmingly probable that it will continue generating a valid JSON list. This is a highly effective way to bypass conversational preambles and jump directly into the desired structure.

## 20.4 A Gallery of Formats: Beyond JSON

While JSON is the workhorse of machine-to-machine communication, the Output Formatting Strategy applies to any structured format.

- **Markdown Tables:** Excellent for human-readable reports that need to be structured.
- **XML:** Essential when interfacing with legacy systems or specific industry standards that require XML.
- **YAML:** A popular choice for configuration files due to its human-friendly syntax.
- **CSV (Comma-Separated Values):** Simple and effective for generating tabular data that can be easily imported into spreadsheets.
- **Custom Formats:** As shown in the Few-Shot example, you can define your own unique, delimiter-separated format for specialized applications.

## 20.5 Building for Production: Handling the "Gotchas"

When integrating a formatting--reliant prompt into a live application, you must be prepared for potential failures.

**Problem 1: The Conversational Wrapper**
The AI's inherent "helpfulness" often leads it to wrap your beautifully structured data in conversational text, like "Of course! Here is the Markdown table you asked for:" This will break your parser.

- **The Solution:** Add a direct, final instruction to your prompt: **"Provide ONLY the [JSON object / Markdown table / etc.] and nothing else. Do not include any preamble, explanation, or concluding text."** This simple command is remarkably effective at ensuring a clean, parsable output.

**Problem 2: Syntax Errors and Truncation**
Even with clear instructions, the model might occasionally generate syntactically invalid output (e.g., a JSON with a missing comma) or, if the output is very long, it might be cut off by the \`max_tokens\` limit, resulting in an incomplete and invalid structure.

- **The Solution:** Your application code must be resilient. Always wrap your parsing logic in a \`try...except\` block (or equivalent error handling). For JSON, you can implement a more robust solution by using a **JSON repair library**. These libraries are designed to intelligently fix common errors in malformed JSON, such as missing brackets or trailing commas, making your system far more resilient to minor AI generation errors.

## 20.6 Conclusion: The Bridge from Conversation to Computation

The Output Formatting Strategy is the critical discipline that makes applied AI possible. It is the bridge that connects the fluid, probabilistic world of natural language generation to the rigid, deterministic world of software and computation.

Without this strategy, the AI remains a fascinating but unpredictable conversationalist. By mastering the techniques of direct commands, schema blueprints, few-shot examples, and response prefilling, you can transform the AI into a reliable and predictable data processing component. You gain the power to dictate the precise structure of its output, ensuring that the information it provides is not just insightful, but immediately and automatically usable. This is the key to unlocking the true potential of AI in building scalable, robust, and automated systems.

# Chapter 21: The Response Prefilling Strategy: Seeding the Assistant's Answer for Control

## 21.1 The Power of the First Word: Guiding the Improviser

Imagine you are in an improvisational comedy scene. The director gives you a prompt: "You are a nervous scientist." You can start your line in a thousand different ways. But what if the director leans in and whispers, "Start your first line with the words, *'It's escaped!'*"?

That single, two-word seed has now dramatically and irrevocably shaped your entire performance. You are no longer just a generic "nervous scientist"; you are now a nervous scientist whose creation is on the loose. Every subsequent word you improvise will be conditioned by that starting point. You have been placed on a specific narrative track, and deviating from it is now nearly impossible.

This is the essence of the **Response Prefilling Strategy**. It is a subtle, technically-focused, and yet astonishingly powerful technique for exerting fine-grained control over an AI's output. It moves beyond simply giving instructions in the user prompt and takes the audacious step of writing the very first word or characters of the AI's own response. By "seeding" the assistant's turn, you are not just providing a hint; you are setting the starting block for its predictive race, making your desired outcome the most statistically probable—and often the only possible—path forward.

## 21.2 The Rationale: Hacking the Predictive Engine

To understand why prefilling is so effective, we must once again return to the fundamental mechanism of an LLM: it is a next-token prediction engine. Its entire world is a sequence of text, and its only goal is to predict what comes next.

When you interact with a model via an API, you typically provide a list of messages, each with a \`role\` (\`system\`, \`user\`, or \`assistant\`). The crucial insight is this: the model sees this entire list as a single, continuous prompt that it must complete. The \`assistant\` role is not just a label; it is a signal that the text to follow should be in the AI's voice.

When you leave the \`assistant\`'s content empty, you are asking the model, "Given the system prompt and the user's message, what is the most likely first word of my response?" The model might predict "Certainly," or "Here is," or any number of conversational preambles.

But when you **prefill** the \`assistant\`'s content, you are changing the question entirely. If you prefill it with an opening brace \`{\`, you are now asking the model, "Given the system and user messages, and knowing that *my response has already started with '{'*, what is the most likely character to come next?"

The answer to that question is overwhelmingly likely to be a double quote \`"\` to start a JSON key. You have effectively set the model on the "JSON track." It is now statistically trapped. Its predictive engine is forced to continue generating a syntactically valid JSON object because any other path would be a wildly improbable continuation of the text you have already started for it. This is not a suggestion; it is a form of cognitive coercion.

## 21.3 How to Implement Response Prefilling: The API-Level Technique

Response prefilling is an API-level strategy. It requires you to construct the message payload yourself, rather than simply typing into a chat UI.

The implementation is simple: in your list of messages sent to the API, you create a final message with the \`role\` set to \`assistant\` and provide the initial characters of your desired response as its \`content\`.

**Example: Forcing a JSON Output**

\`\`\`python
# A simplified Python example of an API call payload
messages_payload = [
    {
        "role": "user",
        "content": "Extract the name, ID, and email from this text: 'Contact John Smith (ID: 123) at john@email.com'."
    },
    {
        "role": "assistant",
        "content": "{"  # This is the prefill. We've started the JSON object.
    }
]

# The model's completion will now almost certainly be the rest of the JSON object,
# e.g., '"name": "John Smith", "id": 123, "email": "john@email.com"}'

\`\`\`

**A Critical Gotcha: No Trailing Whitespace**
Most APIs will reject a prefilled \`assistant\` message that ends with a space or other whitespace character. This is a common and frustrating error for newcomers. The prefill must be a clean sequence of non-whitespace characters.

- **Correct:** \`{"role": "assistant", "content": "{"}\`
- **Incorrect (will cause an error):** \`{"role": "assistant", "content": "{ "}\`

## 21.4 A Toolkit of Prefilling Applications

This technique is a versatile tool for controlling various aspects of the AI's output.

### 21.4.1 Forcing Structured Data (The Primary Use Case)

This is the most common and powerful application. It is the most reliable way to get a clean, parsable, structured output without any conversational wrapping.

- **Goal:** Get a JSON object.
    - **Prefill:** \`{\`
- **Goal:** Get a JSON array (list).
    - **Prefill:** \`[\`
- **Goal:** Get an XML document.
    - **Prefill:** \`<\` (or a more specific opening tag like \`<response>\`)

This technique almost entirely eliminates the "Here is the JSON you requested..." problem, as starting the response in that way would be an improbable continuation of \`{\`.

### 21.4.2 Maintaining Character in Roleplay

Deep into a long conversation, an AI can sometimes "forget" its assigned persona and revert to its default helpful assistant mode. A prefill can be a powerful and token-efficient way to snap it back into character.

- **Scenario:** Fifty turns into a conversation where the AI is roleplaying as Sherlock Holmes.
- **User Prompt:** \`"What do you deduce about the owner of this muddy shoe?"\`
- **Prefill:** \`[Sherlock Holmes]:\`
- **Result:** The model is now strongly conditioned to continue speaking in the persona's voice, rather than starting with "As an AI assistant..."

### 21.4.3 Triggering Chain-of-Thought

You can provide a stronger impetus for a Chain-of-Thought response by starting the reasoning process yourself.

- **User Prompt:** \`"A class has 30 students. 60% are girls. 50% of the girls wear glasses. How many girls in the class wear glasses? Think step by step."\`
- **Prefill:** \`Okay, let's break this down into logical steps. Step 1:\`
- **Result:** The model is now locked into a step-by-step format, often more reliably than with the user-prompt instruction alone.

### 21.4.4 Guiding Tone and Style

The opening words of a response often set the tone for the entire text. You can pre-determine this tone with a prefill.

- **User Prompt:** \`"Explain the recent downturn in the stock market."\`
- **Prefill for a Formal Tone:** \`From a macroeconomic perspective, the recent market volatility can be attributed to several key factors. First,\`
- **Prefill for a Simple Tone:** \`Basically, what happened was that a few big things all went wrong at once.\`

## 21.5 Limitations and Best Practices

1. **It is a Supplement, Not a Substitute:** Prefilling is the final nudge, the ultimate steering mechanism. It is not a replacement for a well-crafted system prompt and a specific, detailed user prompt. The core instructions should still be in the user message. The prefill is for controlling the *form* of the immediate response.
2. **Be Careful Not to Over-Constrain:** If your prefill is too long or specific, you might prevent the model from discovering a better or more creative way to answer the question. A single \`{\` is a powerful constraint on format but leaves the content open. Prefilling an entire sentence might be too restrictive.
3. **Know Your API:** This is a feature of the underlying API and may not be exposed in all user interfaces. It is a tool for developers and advanced users who are building applications on top of the models.

## 21.6 Conclusion: The Ultimate Nudge

The Response Prefilling Strategy is the prompt engineer's "Jedi mind trick." It is a subtle, precise, and almost irresistibly powerful technique for directing an AI's output. By understanding that you can set the starting conditions for the model's own predictive process, you gain a level of control that is simply not possible through user-level instructions alone.

It is the key to building truly robust and automated systems. It guarantees the format, enforces the persona, and kick-starts the reasoning process with unparalleled reliability. While it requires a deeper, API-level interaction with the model, mastering this strategy is a hallmark of an engineer who has moved beyond simply conversing with an AI and has begun to truly program its behavior.

# Chapter 22: The Parameter Tuning Strategy: Engineering Behavior with Temperature, Top-K, and Top-P

## 22.1 The Director's Final Touch: From Script to Performance

Throughout this guide, we have focused almost exclusively on the art of crafting the prompt itself—the text that serves as the script for our AI actor. We have learned to write a detailed character brief (the System Prompt) and precise, scene-by-scene instructions (the User Prompts). We have mastered the script. But a script, no matter how brilliant, is only one half of a performance. The other half is the direction—the nuance, the style, the interpretation.

This is where we must look beyond the text of the prompt and turn our attention to the control panel of the AI itself. The **Parameter Tuning Strategy** is the practice of manipulating the core settings of the Large Language Model's generation process to engineer its fundamental behavior. These parameters—most notably \`temperature\`, \`top_k\`, and \`top_p\`—are not about *what* the AI says, but *how* it says it. They are the dials that control the trade-off between creativity and coherence, between deterministic precision and exploratory randomness.

If the prompt is the script, then tuning these parameters is the final act of direction. It is how you tell the actor to either stick to the script with absolute fidelity or to improvise with creative flair. Mastering this final layer of control is what separates a good prompter from an elite AI systems engineer.

## 22.2 The Rationale: Peeking Inside the Predictive Mind

To effectively tune these parameters, one must first understand the fundamental process they control. As we know, an LLM is a next-token prediction engine. But it does not simply choose *one* "best" next word. Instead, at every step, it performs a two-stage process:

1. **Probability Distribution:** The model looks at the entire preceding text and calculates a probability score for every single word (or token) in its vast vocabulary. This creates a massive list of potential next words, each with an associated likelihood. For example, after "The sky is," the token "blue" might have a 40% probability, "gray" a 15%, "vast" a 5%, and "on" a 0.001%.
2. **Sampling:** From this probability distribution, the model must then choose just one token to be the actual output. This is the sampling step, and it is here that the parameters exert their influence. Instead of always picking the single most probable word (a method known as "greedy decoding"), the sampling process can introduce a controlled amount of randomness, allowing less likely but still plausible words to be chosen.

The parameters \`temperature\`, \`top_k\`, and \`top_p\` are all different methods for manipulating and controlling this sampling process. They are the tools we use to shape the model's probabilistic behavior to suit our specific needs.

## 22.3 The Toolkit of Behavioral Engineering

### 22.3.1 Temperature: The Creativity and Risk Dial

**Temperature** is the most common and intuitive parameter. It directly controls the randomness of the sampling process.

- **Analogy:** Think of temperature as the "risk" or "creativity" dial, ranging from 0.0 to a theoretical maximum (often 2.0).
- **Mechanism:** Temperature works by mathematically rescaling the probability distribution before the sampling occurs.
    - **Low Temperature (e.g., 0.0 to 0.3):** This makes the distribution "sharper" or more "peaked." The model becomes more confident and deterministic. It will almost always choose the highest-probability tokens. A temperature of **0.0** is "greedy decoding"—it will *always* pick the single most likely token, resulting in the most predictable and repeatable output.
    - **High Temperature (e.g., 0.8 to 1.2):** This "flattens" the distribution, making less likely words more probable than they originally were. The model becomes more "adventurous," creative, and random. It is more willing to take a chance on a surprising or novel word choice.
- **Strategic Use Cases:**
    - **Use LOW Temperature (0.0 - 0.2) for:**
        - **Factual Recall & Q&A:** When there is one correct answer, you want maximum precision and no creative deviation.
        - **Summarization & Extraction:** To ensure the output sticks closely to the source text.
        - **Production Code Generation:** For predictable, reliable, and bug-free code.
        - **Tasks requiring high reliability and consistency.**
    - **Use HIGH Temperature (0.7 - 1.0) for:**
        - **Creative Writing:** Generating poetry, stories, or marketing slogans where novelty is desired.
        - **Brainstorming:** Creating a diverse list of ideas.
        - **Chatbot Persona:** Giving a chatbot a more lively, less robotic personality.

### 22.3.2 Top-K: The "Whitelist" of Options

**Top-K** sampling provides a different way to control randomness by limiting the pool of candidate tokens *before* sampling.

- **Analogy:** Think of Top-K as creating a "whitelist" or a "shortlist" of the best options.
- **Mechanism:** \`top_k\` is an integer that tells the model to consider only the *k* most probable tokens for the next step. All other tokens are completely discarded (their probability is set to zero), and the model then samples from this reduced pool.
    - \`top_k=1\` is identical to greedy decoding (temperature 0.0).
    - \`top_k=50\` means that at each step, the model will only consider the 50 most likely next words, regardless of their actual probability scores.
- **Strategic Use Cases:**
    - Top-K is primarily a tool for **reining in the chaos of a high temperature**. By setting a \`top_k\`, you can use a high temperature to encourage creativity among the *good* options, while preventing the model from choosing a truly bizarre, nonsensical word from the long tail of the probability distribution. It acts as a safety net against excessive randomness.
    - The main drawback of Top-K is that it is not adaptive. It might cut off a "surprisingly good" but less probable word if it falls outside the fixed \`k\` limit.

### 22.3.3 Top-P (Nucleus Sampling): The "Probability Budget"

**Top-P**, also known as Nucleus Sampling, is often considered a more sophisticated and adaptive alternative to Top-K.

- **Analogy:** Think of Top-P as sampling from a "probability budget."
- **Mechanism:** \`top_p\` is a float between 0.0 and 1.0. It tells the model to create the smallest possible pool of candidate tokens whose cumulative probability is greater than or equal to \`p\`. The model then samples from this "nucleus" of high-probability tokens.
    - The key difference from Top-K is that the size of the pool is **dynamic**.
    - If the model is very **confident** about the next word (e.g., "blue" has a 95% probability after "The sky is"), and \`top_p=0.9\`, the pool might only contain one or two words.
    - If the model is **uncertain** (e.g., at the start of a poem, many words have a low probability), the pool might contain dozens of words to meet the 90% cumulative probability budget.
- **Strategic Use Cases:**
    - Top-P is an excellent general-purpose parameter for balancing creativity and coherence. It allows for a wide range of choices when the path forward is ambiguous (encouraging creativity) but becomes highly deterministic when the path is clear (ensuring coherence).
    - Many practitioners prefer \`top_p\` over \`top_k\` for most creative tasks because of its adaptive nature. A setting of \`top_p=0.9\` is a very common and effective starting point.

## 22.4 The Interplay: Recipes for Behavioral Control

These parameters are not used in isolation. They are combined to achieve nuanced control. The typical order of operations is: \`top_k\` and \`top_p\` filter the candidate pool, and then \`temperature\` is applied to sample from that final pool.

Here are some common "recipes" for engineering specific AI behaviors:

- **The Factual Analyst (Maximum Precision):**
    - \`temperature: 0.0\`
    - \`top_k\`: (irrelevant)
    - \`top_p\`: (irrelevant)
    - **Result:** The model will always produce the most statistically likely output. It will be highly consistent and deterministic, but utterly devoid of creativity.
- **The Creative Poet (Maximum Imagination):**
    - \`temperature: 0.9\`
    - \`top_k\`: 0 (disabled)
    - \`top_p: 0.95\`
    - **Result:** The model will be highly creative and surprising. The high \`top_p\` allows for a wide range of word choices, and the high \`temperature\` encourages the model to pick less obvious ones.
- **The Controlled Brainstormer (Balanced Creativity):**
    - \`temperature: 0.75\`
    - \`top_k: 50\`
    - \`top_p\`: 1.0 (disabled)
    - **Result:** The model is creative (\`temperature > 0.7\`) but is prevented from going completely off the rails by the \`top_k=50\` safety net, which filters out truly bizarre options.
- **The Reliable Generalist (Default Starting Point):**
    - \`temperature: 0.7\`
    - \`top_k\`: (disabled)
    - \`top_p: 0.9\`
    - **Result:** A good, balanced configuration that is suitable for a wide variety of tasks. It is creative but not excessively random, thanks to the adaptive nature of \`top_p\`.

## 22.5 Conclusion: The Final Layer of Command

The Parameter Tuning Strategy represents the final and most direct layer of behavioral control. While the prompt text shapes the model's knowledge and intent, the parameters shape its very personality—its tendency towards rigor or randomness, precision or poetry.

An elite prompt engineer understands that their job does not end when they finish writing the prompt. They must also consider the optimal performance characteristics for the task at hand. By thoughtfully selecting the right combination of temperature, Top-K, and Top-P, you can fine-tune the AI's predictive mind, ensuring that its output is not only correct in content but also perfectly aligned in character with the needs of your application. This is the ultimate expression of engineering the AI's behavior.

# Chapter 23: The Long Context Strategy: Optimizing for Prompts with Large Volumes of Data

## 23.1 A New Frontier: The Ocean of Context

For years, a fundamental constraint has shaped the entire discipline of prompt engineering: the limited size of the context window. Prompts were measured in a few thousand tokens, forcing engineers to become masters of compression, summarization, and complex external workflows like Retrieval-Augmented Generation (RAG) to feed necessary information to the AI.

The advent of massive context windows—ranging from 100,000 to over a million tokens—represents a paradigm shift. The door has been thrown open. It is now theoretically possible to place an entire novel, a dense quarterly report, a full codebase, or hours of meeting transcripts directly into a single prompt. The promise is intoxicating: an AI with perfect, instantaneous recall of a vast and immediate body of knowledge.

However, this new frontier is not a paradise of simplicity. It is a vast ocean, and navigating it requires a new set of skills. The naïve approach—simply dumping terabytes of raw text into a prompt and hoping for the best—is a recipe for failure. The AI, faced with this overwhelming flood of information, can easily get lost. The crucial detail you need becomes a single, proverbial needle in a colossal haystack. The **Long Context Strategy** is the art and science of structuring and managing these massive prompts to ensure the AI can not only access the information within them but also reason over it effectively and reliably.

## 23.2 The Naïve Approach and Its Inevitable Failures

Let's first diagnose the problems that arise when a long context prompt is not optimized.

1. **The "Lost in the Middle" Problem:** Extensive research has shown that an LLM's attention is not evenly distributed across a long context window. It pays the most attention to the information presented at the **very beginning** and the **very end** of the prompt. Information buried deep in the middle of a long document is far more likely to be overlooked or ignored. Simply pasting a 100-page document and then asking a question about a detail on page 50 is a high-risk gamble.
2. **Attention Dilution:** The more information you provide, the more the model's finite "attention" is diluted. If 99% of the provided text is irrelevant to your specific question, the model has to expend significant computational effort to filter out the noise and identify the signal. This can lead to slower response times and a higher chance of focusing on the wrong details.
3. **Increased Latency and Cost:** Long context prompts are computationally expensive. Processing hundreds of thousands of tokens takes significantly more time and incurs higher API costs than a concise prompt. Every token counts, and inefficiently structured prompts waste both time and money.
4. **The Risk of Contradiction and Confusion:** Large volumes of text, especially from multiple sources, often contain conflicting or subtly different information. An unstructured data dump can confuse the model, leading it to produce a hedged, vague, or self-contradictory answer as it tries to reconcile all the information it has been given.

## 23.3 The Rationale: Working with the Grain of AI Attention

To build effective long context strategies, we must architect our prompts in a way that works *with* the model's natural attention patterns, not against them. The core principle is to make it as easy as possible for the AI to find and focus on the most relevant information. We must shift our role from that of a data dumper to that of an expert librarian, carefully curating and indexing the information before handing it to the researcher.

## 23.4 A Toolkit of Long Context Optimization Strategies

### 23.4.1 Principle 1: The "Instructions Last" Rule (The Recency Bias Lever)

This is the single most important and effective principle for long context prompting. Due to the model's strong recency bias, the information it sees last has the most influence on its immediate output.

**Therefore, you must always place your core instruction, question, or task at the very end of the prompt, *after* all the supporting documents and data have been presented.**

- **Ineffective Structure:**\`[INSTRUCTION] -> [DOCUMENT A] -> [DOCUMENT B] -> [DOCUMENT C]\`
- **Highly Effective Structure:**\`[DOCUMENT A] -> [DOCUMENT B] -> [DOCUMENT C] -> [INSTRUCTION]\`

By placing the instruction last, you are focusing the model's attention on its immediate goal right at the moment of generation, ensuring it approaches the vast context with a clear and present objective.

### 23.4.2 Principle 2: The Structural Imperative (The Librarian's Index)

As we discussed in Chapter 9, structure is control. In a long context prompt, it is absolutely essential. Do not just paste raw text. You must act as a librarian, cataloging and indexing your sources with clear, descriptive XML tags.

- **Why it works:** This creates a "mental map" for the AI. It helps the model to differentiate between sources, understand the type of information each contains, and reference them more accurately.
- **Example of a Structured Data Dump:**\`<documents> <document source="Q3_Earnings_Call_Transcript.txt" date="2023-10-26"> <content> [Full text of the transcript...] </content> </document> <document source="Internal_Marketing_Strategy_Memo.pdf" date="2023-09-15"> <content> [Full text of the memo...] </content> </document></documents>\`

### 23.4.3 Principle 3: The Active Retrieval Step (Forcing the Search)

To combat the "lost in the middle" problem, you can force the model to actively scan the entire context *before* it attempts to synthesize an answer. You do this by creating a two-part instruction.

- **Why it works:** This pre-processing step forces the model's attention mechanism to sweep through the entire document looking for specific keywords or concepts. The extracted snippets then form a new, much smaller, and highly relevant context from which the model can formulate its final answer.
- **Example of an Active Retrieval Prompt:**\`[Vast amount of medical research text pasted here...]\`
    
    \`### INSTRUCTIONS ###**Part 1: Quote Extraction**First, carefully review all the provided documents. Find and extract every sentence that discusses the side effects of the drug 'Exemplar'. Place these exact sentences, along with their source document name, inside <quotes> tags.\`
    
    - \`*Part 2: Synthesis**Now, using ONLY the information you gathered in the <quotes> tag, write a concise summary of the known side effects of 'Exemplar'.\`

### 23.4.4 Principle 4: The Indexing and Summarization Preamble (The Abstract)

For exceptionally large or numerous documents, you can provide the model with a roadmap at the very beginning of the prompt.

- **Why it works:** By providing a concise summary or a table of contents of the documents you are about to provide, you are giving the model a high-level index. This "abstract" primes the model, helping it to anticipate the structure and content of the data and locate information more efficiently.
- **Example of a Preamble:**\`I am providing you with three documents to analyze:1. **Document 1:** The 2023 Annual Financial Report, focusing on revenue and profit.2. **Document 2:** A competitive analysis of our top three rivals.3. **Document 3:** The transcript of our recent strategic planning offsite.\`
    
    \`Your task will be to synthesize a strategic recommendation based on these documents. The full text of the documents follows below.\`
    
    \`<document_1>... </document_1><document_2>... </document_2><document_3>... </document_3>\`
    
    \`### FINAL TASK ###[Instruction placed at the end]\`
    

## 23.5 A Practical Walkthrough: The Elite Long Context Prompt

Let's combine these principles to create a gold-standard prompt for a complex, multi-document analysis task.

- **Naïve, Ineffective Prompt:**\`"Summarize the main risks for our company based on these three documents.[Paste 50 pages of Document A][Paste 30 pages of Document B][Paste 20 pages of Document C]"\`
- **Elite, Optimized Long Context Prompt:**\`I am providing three key documents for a risk analysis.**Source 1:** The annual financial report.**Source 2:** The latest cybersecurity audit.**Source 3:** A collection of recent customer feedback.\`
    
    \`The full text of these documents is provided below, enclosed in XML tags.\`
    
    \`<source name="Annual Financial Report">[...50 pages of text...]</source>\`
    
    \`<source name="Cybersecurity Audit">[...30 pages of text...]</source>\`
    
    \`<source name="Customer Feedback">[...20 pages of text...]</source>\`
    
    \`### FINAL INSTRUCTIONS ###You are a Chief Risk Officer preparing a briefing for the Board of Directors.Your task is to identify the top 3 strategic risks facing the company, based *only* on the information provided in the sources above.\`
    
    \`Follow this two-step process:1.  **Evidence Extraction:** First, for each of the three risk categories (Financial, Cybersecurity, Reputational), find and extract up to three direct quotes from the provided sources that best exemplify that risk. You must cite the source name for each quote.2.  **Executive Summary:** After extracting the evidence, write a concise executive summary. The summary should list the three risks you identified and, for each risk, provide a brief explanation of its potential impact, using the evidence you extracted.\`
    

## 23.6 Conclusion: The Curator of Context

The advent of massive context windows does not simplify prompt engineering; it makes it a more sophisticated discipline. It shifts the engineer's role from a writer of concise instructions to a curator of vast information landscapes.

Success in this new paradigm is not about how much data you can provide, but about how well you can structure, index, and guide the AI's attention within that data. By embracing the principles of placing instructions last, building a structural map, forcing active retrieval, and providing a guiding preamble, you can transform the colossal haystack of a long context prompt into a well-organized, searchable library. This is the key to unlocking the full, game-changing potential of large-scale, in-context reasoning.

# Chapter 24: The Code Prompting Strategy: Best Practices for Generation, Debugging, and Translation

## 24.1 The New Pair Programmer: AI as a Software Development Collaborator

The advent of powerful, code-fluent Large Language Models has irrevocably altered the landscape of software development. These models, trained on a colossal corpus of open-source code from repositories like GitHub, have ingested billions of lines of code across dozens of programming languages. They have learned not just the syntax and grammar, but the patterns, idioms, best practices, and even the common mistakes that define the craft of programming.

This presents a revolutionary opportunity. The AI is no longer just a tool for answering questions *about* code; it is a tool for actively writing, analyzing, and transforming code. It is the new, tireless pair programmer—a collaborator with encyclopedic knowledge, available 24/7 to accelerate the development lifecycle.

However, like any powerful tool, its effectiveness is entirely dependent on the skill of the operator. A lazy or ambiguous request will yield code that is generic, inefficient, insecure, or simply wrong. The **Code Prompting Strategy** is the specialized discipline of crafting precise, context-rich, and constraint-aware prompts to harness the full potential of the AI as a software engineering partner. This chapter will provide a systematic framework for the three core tasks in this domain: code generation, debugging, and translation.

## 24.2 The Rationale: Why AI Excels at the Language of Logic

Code, in its essence, is a language. It is a language with a far stricter and more logical grammar than human prose. This structural rigidity is precisely what makes it an ideal domain for LLMs.

- **Pattern Recognition:** Software development is deeply pattern-based. Design patterns, architectural styles, and common algorithms are repeated across millions of projects. The LLM excels at recognizing these patterns and applying them to new problems.
- **Vast Knowledge Base:** The model has seen more code than any human ever could. It has seen the same problem solved in a hundred different ways, in a dozen different languages. A good prompt is a precise query into this vast, implicit knowledge base.
- **Syntactic Perfection:** While the model might make logical errors, it rarely makes syntactic ones. It can generate boilerplate code, function signatures, and complex data structures with perfect syntax, freeing the human developer to focus on the higher-level logic.

## 24.3 Code Generation: The Architect's Blueprint

Code generation is the act of creating new code from a natural language specification. The primary challenge is to move from a vague idea to a robust, production-ready implementation. This requires treating the prompt not as a request, but as a formal **technical specification**.

### Principle 1: Provide the Full Operational Context

Never ask for code in a vacuum. The AI must understand the environment in which the code will live.

- **Environment:** Specify the programming language, version, and any relevant frameworks or libraries (e.g., "Python 3.11 using the FastAPI framework," "React 18 with TypeScript").
- **Constraints:** State any limitations. This is one of the most powerful levers for controlling the output. Examples:
    - "Must use only the Python standard library."
    - "The solution must not use recursion."
    - "The function must have a time complexity of O(n) or better."
- **Purpose:** Explain the "why." Code for a high-traffic e-commerce checkout has different requirements than a one-off data analysis script.

### Principle 2: Decompose the Logic Step-by-Step

Use a Chain-of-Thought approach to outline the required functionality. This forces the AI to build the code in a logical, structured manner.

- **Prompt Snippet:**\`"Generate a function that performs the following steps:1. Accepts a file path as an argument.2. Opens and reads the content of the file.3. Counts the frequency of each word in the text.4. Returns a dictionary where keys are words and values are their counts."\`

### Principle 3: Specify the "Non-Functional" Requirements

Elite code prompting goes beyond the logic to define the characteristics of high-quality, professional code. Explicitly demand these features.

- **Documentation:** "The function must include a comprehensive docstring in the Google Python Style."
- **Error Handling:** "The code must include robust error handling. Specifically, add a \`try...except\` block to handle \`FileNotFoundError\` and \`PermissionError\`."
- **Type Hinting:** "All function arguments and return values must have full type hints."
- **Testing:** "After writing the function, generate a set of three unit tests for it using the \`pytest\` framework. The tests should cover a normal case, an empty file, and a file that doesn't exist."

### Gold-Standard Generation Prompt

- **Weak Prompt:** \`"Write a Python function to parse a log file."\`
- **Elite Prompt:**\`"I am building a server monitoring tool in Python 3.10.\`
    - \`*Task:** Write a Python function named \\\\\`parse_log_entry\\ \`that takes a single log line string as input and extracts the timestamp, log level, and message.The log format is: \\\\\`[YYYY-MM-DD HH:MM:SS] [LEVEL] Message\\\`\`
    - \`*Requirements:**1. The function must use Python's \\\\\`re\\ \`(regex) module.2. It must return a dictionary with three keys: 'timestamp', 'level', and 'message'.3. It must include full type hints for the argument and the return value (which should be a TypedDict or a regular dict).4. It must be wrapped in a \\\\\`try...except\\ \`block to handle lines that do not match the format, returning \\\\\`None\\ \`in case of a mismatch.5. It must include a complete docstring explaining its function, arguments, and return value.6. After the function, provide a simple \\\\\`pytest\\ \`unit test to verify its correctness with a sample log line."\`

## 24.4 Code Debugging: The Surgeon's Diagnosis

Debugging is an analytical task. The AI's role is to act as a diagnostic expert. To do this effectively, it needs all the evidence.

### Principle 1: Provide the Complete Case File

A doctor cannot diagnose a patient over the phone with a vague description of "it hurts." An AI cannot debug code with just a snippet. You must provide the full context.

- **The Exact Code:** The smallest, self-contained, reproducible example of the code that is failing.
- **The Full Error Message:** This is non-negotiable. Paste the *entire* traceback, from the first line to the last. It contains crucial clues about the execution stack.
- **The Environment:** The language, version, and libraries in use.
- **The Expected vs. Actual Behavior:** Clearly state, "I expected the output to be [X], but the actual output is [Y]."

### Principle 2: Guide the Diagnostic Process

Do not just ask for a fix. Command the AI to reason through the problem like an expert.

- **Prompt Snippet:**\`"My goal is to debug the following code.*Step 1: Explain the Error.** First, explain what the traceback message \\\\\`TypeError: can only concatenate str (not "int") to str\\ \`means in the context of my code.*Step 2: Trace the Fault.** Second, trace the execution path and identify the exact line and variable that is causing this type mismatch.*Step 3: Propose and Explain the Fix.** Third, provide the corrected code and explain why the change resolves the error."\`

### Gold-Standard Debugging Prompt

- **Weak Prompt:** \`"Why is my code broken? \\\\\`for i in range(5): print('Number: ' + i)\\\`"\`
- **Elite Prompt:**\`"I am running the following Python 3.9 script and getting an error.\`
    - \`*Code:**\\\\\`\\\`\\\\\`python \`\`for i in range(5): \`\` print('Number: ' + i) \`\`\\\`\\\\\`\\\`\`
    - \`*Error Traceback:**\\\\\`\\\`\\\\\`  \`\`Traceback (most recent call last): \`\` File "[main.py](http://main.py/)", line 2, in <module> \`\` print('Number: ' + i) \`\`TypeError: can only concatenate str (not "int") to str \`\`\\\`\\\\\`\\\`\`
    - \`*Expected Behavior:** I expected it to print "Number: 0", "Number: 1", etc.*Actual Behavior:** It throws a TypeError.\`
    - \`*Task:**1. Explain the \\\\\`TypeError\\ \`in plain English.2. Identify the root cause of the error in my code.3. Provide the corrected, working code using an f-string, which is the modern best practice."\`

## 24.5 Code Translation: The Expert Linguist's Work

Translating code is a migration task fraught with peril. A literal, line-by-line translation often results in code that is syntactically correct but inefficient, insecure, or "unpythonic" / "un-javascripty." The goal is not just translation, but **idiomatic adaptation**.

### Principle 1: Demand Idiomatic Code

This is the most important concept in code translation. You must explicitly command the model to write code that feels "native" to the target language.

- **Prompt Snippet:**\`"Translate the following Python code into idiomatic JavaScript (ES6+). Do not perform a literal, line-by-line translation. Instead, adapt the logic to use modern JavaScript patterns, such as \\\\\`async/await\\ \`instead of Promises, and \\\\\`map\\ \`or \\\\\`filter\\ \`instead of for-loops where appropriate."\`

### Principle 2: Manage the Dependency Mapping

A huge part of translation is mapping libraries and frameworks. Guide the AI in this process.

- **Prompt Snippet:**\`"The source Python code uses the \\\\\`requests\\ \`library for making HTTP calls. The target is Node.js. In the translated code, use the \\\\\`axios\\ \`library as the equivalent for \\\\\`requests\\\`."\`

### Gold-Standard Translation Prompt

- **Weak Prompt:** \`"Convert this Python to JavaScript."\`
- **Elite Prompt:**\`"**Task:** Translate a Python script to modern, idiomatic Node.js.\`
    - \`*Source (Python 3.9):**\\\\\`\\\`\\\\\`python \`\`import requests\`
    
    \`def get_user_data(user_id):    response = requests.get(f'<https://api.example.com/users/{user_id}>')    return response.json()\\\\\`\\\`\\\`\`
    
    - \`*Target (Node.js v18):**Translate the above Python function into an asynchronous JavaScript function.\`
    - \`*Requirements:**1. The translated code must use the \\\\\`axios\\ \`library to handle the HTTP GET request.2. The code must be idiomatic ES6+, using \\\\\`async/await\\ \`syntax.3. Include a basic JSDoc comment block for the translated function."\`

## 24.6 Conclusion: The Developer as Architect and QA

The Code Prompting Strategy does not replace the developer. It elevates them. It automates the laborious, pattern-based work of writing boilerplate, diagnosing common errors, and performing routine translations. This frees the human developer to focus on the tasks that truly require their expertise: system architecture, complex logical design, strategic decision-making, and the final, critical act of quality assurance.

By mastering the art of writing precise, comprehensive, and context-aware specifications in your prompts, you transform the AI from a simple code generator into a powerful, collaborative partner in the intricate and creative dance of software development.

# Chapter 25: The Automatic Prompt Engineering (APE) Strategy: Using AI to Generate and Optimize Prompts

## 25.1 The Meta-Problem: Prompting is Hard

Throughout this guide, we have explored the intricate art and science of prompt engineering. We have learned to be specific, to provide context, to structure our requests, and to guide the AI's reasoning. We have seen that crafting an elite prompt is a high-skill, iterative, and often time-consuming process. The irony is profound: we are expending significant human effort to optimize our communication with a machine designed to save us effort.

This naturally leads to a "meta-question": If Large Language Models are so adept at generating complex, structured text, could we turn this capability upon the problem of prompting itself? Could an AI be used to engineer the very prompts that guide another AI?

The answer is a resounding yes, and the formalization of this idea is known as the **Automatic Prompt Engineering (APE) Strategy**. This is a cutting-edge and meta-level technique that uses an LLM as a tool to generate and refine a diverse set of prompt candidates for a given task. It is the art of prompting an AI to become a prompt engineer.

## 25.2 The Core Idea: Framing Prompt Generation as a Synthesis Problem

The APE strategy re-frames the challenge of finding the best prompt. Instead of relying on a single human's intuition and iterative tinkering, it treats the problem as a search and optimization task. The goal is to explore a wide "prompt space" of possible instructions and then select the one that performs the best.

The process, at its core, involves a two-stage, AI-driven workflow:

1. **Prompt Generation (The "Instruction Induction" Phase):** An LLM (let's call it the **"Meta-LLM"**) is given a few examples of input-output pairs for a target task. It is then prompted to act as an AI researcher and "induce" a set of possible instruction prompts that could have produced those outputs from those inputs. It doesn't just generate one instruction; it is prompted to brainstorm a diverse set of candidates with different phrasings, structures, and levels of detail.
2. **Prompt Selection (The "Scoring" Phase):** The generated instruction candidates are then evaluated. In a fully automated system, each candidate prompt is used to query a separate, target LLM with a test input. The target LLM's output is then scored for quality against a desired "gold standard" output using an evaluation metric (or even another LLM acting as a judge). The instruction prompt that yields the highest score is declared the winner.

This strategy automates the creative and laborious process of prompt discovery, leveraging the AI's own linguistic and reasoning capabilities to find the most effective ways to instruct itself.

## 25.3 The Rationale: Why AI Can Out-Engineer a Human Prompter

Using an AI to generate prompts might seem circular, but it is effective for several key reasons.

1. **Diversity of Phrasing:** An LLM can brainstorm a far wider and more diverse range of syntactically and semantically different ways to phrase an instruction than a human can in a short amount of time. It can explore subtle variations in wording that a human might not consider, some of which may resonate more effectively with the target model's internal representations.
2. **Uncovering "Un-Human" Prompts:** Sometimes, the most effective prompts are not the ones that sound most natural to a human. They may contain specific keywords, phrasings, or structures that, for reasons related to the model's training data, are particularly potent at triggering the desired behavior. The APE process can discover these "un-human" but highly effective instructions.
3. **Scalability and Speed:** The APE process can be automated to generate and test hundreds of prompt candidates in the time it would take a human to manually iterate through a handful. This allows for a much more comprehensive search of the "prompt space."
4. **Alleviating Human Bottlenecks:** It frees up human engineers from the time-consuming task of prompt tinkering, allowing them to focus on the higher-level problems of defining the task, creating the evaluation criteria, and designing the overall system architecture.

## 25.4 A Practical Walkthrough: Finding the Best Prompt for a Chatbot

Let's imagine we are training a chatbot for an e-commerce store that sells band t-shirts. We want to find the best way to instruct the model to handle a customer's order.

**The Goal:** Find the best prompt for a task where the input is a customer request and the output is a standardized order summary.

### **Step 1: Define the Task with Examples**

First, we manually create a few high-quality input-output pairs that define our goal. These will be the foundation for the APE process.

- **Input 1:** \`"I'd like to order one Metallica t-shirt in size S."\`
- **Output 1:** \`Band: Metallica, Item: T-Shirt, Quantity: 1, Size: S\`
- **Input 2:** \`"Can you get me two small Ramones shirts?"\`
- **Output 2:** \`Band: Ramones, Item: T-Shirt, Quantity: 2, Size: S\`

### **Step 2: The Generation Phase (Using the "Meta-LLM")**

Now, we craft a prompt for our Meta-LLM. This prompt will ask it to generate a list of possible instruction prompts that could solve the task defined by our examples.

- **The APE Generation Prompt:**\`"I am an AI prompt engineer. I have a task where I need to take a user's request and turn it into a structured order summary. I will give you a few examples of the input and the desired output.\`
    
    \`<examples>Input: "I'd like to order one Metallica t-shirt in size S."Output: "Band: Metallica, Item: T-Shirt, Quantity: 1, Size: S"\`
    
    \`Input: "Can you get me two small Ramones shirts?"Output: "Band: Ramones, Item: T-Shirt, Quantity: 2, Size: S"</examples>\`
    
    \`Based on these examples, generate 10 diverse and high-quality instruction prompts that I could give to a large language model to make it perform this task. The instructions should be phrased in different ways—some as direct commands, some by setting a persona, etc. Provide the list of generated instructions."\`
    
- **Possible Output from the Meta-LLM (A List of Candidate Prompts):**
    1. "Extract the band name, item type, quantity, and size from the user's request and format it as: Band: [band], Item: [item], Quantity: [qty], Size: [size]."
    2. "You are an e-commerce order processing bot. Your sole function is to parse a customer's message and output a structured summary of their order."
    3. "Given a customer's t-shirt order, identify the four key entities (Band, Item, Quantity, Size) and present them in a key-value format."
    4. "Convert the following natural language order into a structured data string."
    5. ... and so on.

### **Step 3: The Selection Phase (Scoring the Candidates)**

Now we have a list of 10 promising prompts. The next step is to find out which one works best.

- **Manual Approach:** A human engineer can take this list and manually test each of the 10 prompts with a new, unseen input (a "test case").
    - **Test Input:** \`"I need a large Rolling Stones tee."\`
    - The engineer would then run this test input with each of the 10 candidate prompts and subjectively judge which one produces the most accurate and reliable output.
- **Automated Approach:** In a more advanced setup, you would have a larger set of test cases. A script would programmatically:
    1. Loop through each of the 10 candidate prompts.
    2. For each candidate, loop through all the test cases.
    3. Execute an API call using the candidate prompt and the test input.
    4. Compare the AI's actual output to the known "correct" output for that test case.
    5. Calculate an accuracy score for each of the 10 candidate prompts.
    6. The prompt with the highest score is selected as the optimal one.

## 25.5 The "Power Prompt" Shortcut: A Simplified APE Workflow

A fully automated APE pipeline can be complex to set up. However, a simplified, manual version of this strategy can be incredibly useful for any prompt engineer. This is the "Power Prompt" or "Prompt Refinement" technique.

- **The Workflow:**
    1. Write your best initial attempt at a prompt.
    2. Feed that prompt to an AI with a meta-instruction.
- **Example Prompt Refinement Prompt:**\`"I am trying to write a good prompt for a task. My current draft is below.\`
    
    \`<my_prompt>"Summarize the text."</my_prompt>\`
    
    \`Your task is to act as an expert prompt engineer. Critique my prompt and then rewrite it to be a 'power prompt'. The rewritten prompt should be much more detailed, specific, and follow all the best practices for prompt engineering. It should ask for the summary to have a specific length, a target audience, and a particular format."\`
    

This technique uses the AI as a collaborative partner to improve your own work, automating the brainstorming process of prompt optimization.

## 25.6 Conclusion: Turning the Crank on Optimization

The Automatic Prompt Engineering strategy represents the next frontier of the discipline. It is the moment where the tools of AI are turned back upon themselves to optimize their own use. It embodies a shift from manual, intuitive artistry to a more systematic, data-driven, and scalable science of instruction design.

While a fully automated APE pipeline is an advanced application, the core principle—using an AI to brainstorm, diversify, and refine prompts—is a powerful technique that any practitioner can adopt. It is a testament to the recursive power of these models and a signal that the future of engineering AI systems will involve a deep and symbiotic partnership, where we not only guide the AI, but also leverage the AI to help us become better guides.

# Chapter 26: The Documentation Strategy: The Critical Discipline of Tracking and Versioning Prompts

## 26.1 The Ghost in the Machine: The Peril of the Undocumented Prompt

In the fast-paced, iterative world of prompt engineering, it is easy to get lost in the creative flow. You are in a chat window, rapidly testing variations of a prompt, tweaking a word here, adding a constraint there, until, finally, you achieve the perfect output. You copy the result, use it for your task, and move on, triumphant.

A week later, you need to perform the same task. You open a new chat window and try to remember the magic words you used. Was it "You are an expert" or "I am an expert"? Did you ask for a JSON object or a Markdown table? Was the temperature set to 0.2 or 0.7? The ghost of your perfect prompt haunts you, but its exact form is lost to the ephemeral history of a browser tab.

This is not a minor inconvenience; it is a catastrophic failure of process. An undocumented prompt is a non-existent asset. It is a piece of intellectual property that has vanished into the ether. For any serious application of AI, from a personal workflow to a production-grade system, a reactive, ad-hoc approach to prompting is unsustainable, unscalable, and unprofessional.

The **Documentation Strategy** is the critical, non-negotiable discipline of systematically tracking, versioning, and evaluating your prompts. It is the process of treating your prompts with the same rigor and respect as you would treat source code. It is the bridge between a one-off clever trick and a robust, repeatable, and maintainable AI-powered system.

## 26.2 The Rationale: Why Prompts Are Mission-Critical Code

It is a common mistake to view prompts as mere "input" or "configuration." This fundamentally misunderstands their role. In an AI-powered system, the prompt is the engine. It is the core logic that dictates the system's behavior. Therefore, it must be treated as a first-class citizen in your engineering lifecycle.

1. **Repeatability and Consistency:** A documented prompt guarantees that you can achieve the exact same high-quality result, every single time. It is the foundation of a consistent and predictable process.
2. **Collaboration and Knowledge Sharing:** When prompts are documented in a shared, structured format, they become a collective asset. A prompt perfected by one team member for a specific task can be discovered, adapted, and reused by others, preventing the constant reinvention of the wheel and accelerating the entire organization's AI maturity.
3. **Debugging and Troubleshooting:** When an AI system starts producing flawed outputs, the first question should be, "What changed?" Without a versioned history of your prompts, this question is impossible to answer. A well-documented prompt log allows you to see exactly which version of a prompt was used for a given task, making it infinitely easier to identify the root cause of a failure.
4. **Regression Testing and Model Upgrades:** LLM providers are constantly releasing new and updated models. A new model version, while generally more capable, can sometimes respond differently to the same prompt. A library of well-documented prompts, along with their expected "gold standard" outputs, forms a critical **regression test suite**. When a new model is released, you can programmatically run your key prompts against it to instantly identify any breaking changes or regressions in behavior.
5. **A Record of Your Learning:** The iterative process of prompt engineering is a process of discovery. Your documentation becomes a logbook of this journey. It shows what you tried, what worked, what didn't, and why. This record is an invaluable learning tool that helps you and your team become better, more effective prompt engineers over time.

## 26.3 The Anatomy of an Elite Prompt Document

Effective documentation is more than just saving the prompt text in a file. An elite prompt document is a comprehensive record that captures the entire context of the prompt's creation and execution. While the format can vary (a spreadsheet, a dedicated database, a text file in a Git repository), the essential components remain the same.

A comprehensive template for a single prompt record should include the following fields:

- **Prompt Name / ID:** A unique, human-readable name for the prompt (e.g., \`EmailSummarizer_ExecutiveBriefing_v2\`).
- **Version:** A clear version number (e.g., \`1.0\`, \`1.1\`, \`2.0\`). Use semantic versioning if possible.
- **Goal / Objective:** A one-sentence description of what this prompt is intended to achieve.
- **Author:** The person who created or last modified the prompt.
- **Date Created / Modified:** Timestamps for tracking its history.
- **Model(s) Used:** The specific model and version against which this prompt was tested and optimized (e.g., \`gpt-4-turbo-2024-04-09\`, \`claude-3-opus-20240229\`).
- **Parameters:** The exact generation parameters used:
    - \`Temperature\`
    - \`Top-P\`
    - \`Top-K\`
    - \`Max Tokens\`
- **Prompt Text (The Core Component):**
    - **System Prompt:** The full text of the system prompt, if applicable.
    - **User Prompt:** The full text of the user prompt. For templates, use clear placeholders (e.g., \`{{DOCUMENT_TEXT}}\`).
- **Example Input:** A representative example of the data that would be inserted into the prompt's placeholders.
- **Gold-Standard Output:** The ideal, "perfect" output that this prompt is expected to generate for the example input. This is crucial for evaluation and regression testing.
- **Actual Output:** The actual output generated by the model during the last test run.
- **Evaluation:** A field for scoring or qualitative assessment (e.g., \`OK\`, \`NOT OK\`, \`SOMETIMES OK\`, or a numerical score).
- **Notes / Rationale:** This is the most important field for learning and collaboration. It should explain the *why* behind the prompt's design. Why were certain words chosen? What did previous, failed versions look like? What trade-offs were made?

## 26.4 A Practical Workflow: Prompts in a Version Control System

For professional software development teams, the gold standard for managing prompts is to treat them exactly like source code: **store them in a version control system like Git.**

- **The "Prompt Library":** Create a dedicated directory in your project's repository called \`/prompts\` or \`/prompt_library\`.
- **Structured Storage:** Store each prompt in its own file. A good practice is to use a structured format like YAML or JSON to store the prompt's metadata alongside its text.

**Example: \`summarize_earnings_report.v1.yaml\`**

\`\`\`yaml
name: SummarizeEarningsReport
version: 1.0
author: Jane Doe
date: "2024-05-10"
goal: "Summarizes a quarterly earnings report for a non-technical executive audience."

model_settings:
  model_name: "claude-3-opus-20240229"
  temperature: 0.2
  max_tokens: 60000

prompt:
  system: "You are a senior financial analyst known for your ability to distill complex financial data into clear, concise business insights."
  user: |
    Analyze the following earnings report.

    <report_text>
    {{EARNINGS_REPORT}}
    </report_text>

    Your task is to produce a three-paragraph executive summary. The summary must focus on the business implications of the results, avoiding financial jargon. Conclude with the single most important question you would ask the CEO based on this report.

\`\`\`

- **The Power of Git:** By storing prompts in this way, you get all the benefits of version control for free:
    - **History:** You have a complete, auditable history of every change made to every prompt.
    - **Collaboration:** Team members can work on prompts in separate branches, submit pull requests for review, and leave comments.
    - **Integration:** Your application code can now load these prompt files directly, ensuring that the code and the prompts are always in sync.

## 26.5 Conclusion: From a Fleeting Art to an Enduring Asset

The Documentation Strategy is the discipline that elevates prompt engineering from a fleeting, conversational art form into a robust, scalable engineering practice. It is the act of capturing and preserving the intellectual property that you create every time you perfect a prompt.

An undocumented prompt is a liability. It is a single point of failure waiting to be forgotten. A well-documented, versioned prompt is an asset. It is a repeatable, maintainable, and improvable component of your intelligent system. Adopting a rigorous documentation strategy is the most important step you can take to ensure that your investment in prompt engineering pays lasting dividends, creating a foundation of quality and consistency that will support your AI-powered applications long into the future.

# Chapter 27: Conclusion: A Unified Framework for Elite Prompt Engineering

## 27.1 The End of the Beginning: From Tactics to a Unified Philosophy

We have journeyed through the intricate landscape of prompt engineering, moving from the foundational art of a simple question to the complex science of architecting multi-agent systems. We have dissected the anatomy of a prompt, mastered the distinction between a system's constitution and a user's directive, and collected a powerful toolkit of over a dozen distinct strategies. We have learned to guide the AI's reasoning, structure its output, and even command it to critique and correct itself.

Each chapter has presented a piece of the puzzle, a specific tactic for a specific challenge. Now, in this final chapter, we must assemble these pieces. The ultimate goal of an elite prompt engineer is not to merely possess a collection of disconnected tricks, but to operate from a **Unified Framework**—a coherent philosophy and a systematic approach that guides every interaction with an AI.

This framework is not a rigid set of rules, but a mental model for building intelligent, reliable, and powerful human-AI collaborations. It is built upon three core pillars: **Architecture**, **Conversation**, and **Discipline**.

## 27.2 Pillar 1: The Principle of Architecture

The first and most profound shift in mindset is to stop seeing prompts as isolated questions and to start seeing them as components in a larger **architecture**. An elite prompter is, first and foremost, a systems architect.

This means embracing a structured, top-down design process for every complex task:

1. **Deconstruct the Workflow:** Before writing a single word, deconstruct your complex goal into its constituent parts. Identify the distinct cognitive tasks required. Is there a phase for research? A phase for brainstorming? A phase for logical analysis? A phase for formatting? This deconstruction is the blueprint for your system.
2. **Choose Your Architectural Pattern:** Based on this blueprint, select the appropriate architectural pattern.
    - Is the task a simple, single-shot operation? A meticulously crafted **Zero-Shot Prompt** built on the principles of Context, Task, and Format will suffice.
    - Does it require a sequence of distinct, linear transformations? The **Prompt Chaining Strategy** is your assembly line.
    - Does it require the collaboration of different "mindsets" or expertises? The **Multi-Agent Strategy** is your expert team.
3. **Define the Foundation (The System Prompt):** For any persistent interaction, you must first architect the AI's "constitution." This is where you apply the **Persona Strategy**, instantiating an elite, expert identity for your collaborator. This is also where you apply the **Affirmative Direction Strategy**, defining the AI's core operational logic in positive, proactive terms. The system prompt is the unwavering foundation upon which the entire structure rests.

The architectural mindset forces you to think about focus, context isolation, and the flow of information. It is the practice of designing a clean, robust, and efficient "thought factory" before you ever ask it to produce a single thought.

## 27.3 Pillar 2: The Principle of Conversation

Once the architecture is in place, the interaction begins. This is where the architect puts on the hat of the director. The **Principle of Conversation** is the understanding that complex work is not a transaction, but a dialogue. It is an iterative process of steering, refining, and collaborating.

This pillar is built on the tactics of the **Constructive Guidance Strategy**:

1. **The First Output is a Draft:** Abandon the myth of the perfect first prompt. Treat the AI's initial response as a starting point, a block of marble ready to be sculpted.
2. **Steer with Precision:** Use the full toolkit of conversational steering. Provide **Constructive Feedback** instead of negative criticism. Use **Explicit State Management** to open and close tasks. When the conversation derails, use **Trajectory Correction via Editing** to clean the foundational context. For complex tasks, use the **Pre-Execution Calibration (Teach-Back) Method** to ensure alignment before work begins.
3. **Synthesize Advanced Reasoning Frameworks:** The conversation is where you deploy your most powerful reasoning tools.
    - When you need a transparent, logical deduction, you command a **Chain of Thought**.
    - When you need to explore multiple creative or strategic paths, you simulate a **Tree of Thoughts**, perhaps by instantiating a "committee of experts" within the dialogue.
    - When accuracy is paramount for a verifiable answer, you apply the **Self-Consistency Strategy**, running multiple conversational "takes" and seeking a consensus.

The conversational mindset is dynamic and adaptive. It is the recognition that the user is the prime mover, the active partner who guides the AI's immense potential toward a polished and perfect final product.

## 27.4 Pillar 3: The Principle of Discipline

Brilliant architecture and masterful conversation are fleeting if they are not captured and codified. The final pillar of the Unified Framework is **Discipline**. It is the professional practice that transforms prompting from a creative art into a reliable engineering discipline.

This pillar is embodied by two critical strategies:

1. **The Documentation Strategy:** You must treat your prompts as mission-critical assets. Every successful prompt—with its specific wording, its model, its parameters, and its rationale—must be documented, versioned, and stored in a shared, accessible library. An undocumented prompt is a lost asset; a documented prompt is a reusable, improvable, and scalable component of your organization's intellectual property.
2. **The Mindset of Iteration and Evaluation:** Elite prompt engineering is a scientific process. It involves forming a hypothesis (the prompt), running an experiment (querying the AI), and analyzing the result. This requires a commitment to testing, to building regression suites, and to continuously refining your library of prompts as models evolve. It requires the discipline to never assume that a prompt that works today will work tomorrow, and the rigor to prove its effectiveness through empirical evaluation.

The principle of discipline ensures that your hard-won successes are not one-off triumphs, but the foundation of a robust and ever-improving system.

## 27.5 The Unified Framework in Action: A Final Synthesis

Let us see how these three pillars come together to solve a final, complex problem.

**Goal:** Create a comprehensive, data-driven marketing strategy for a new product.

1. **Architecture:**
    - *Deconstruction:* The task requires research, ideation, strategic planning, and content creation.
    - *Architectural Pattern:* A **Multi-Agent System** is ideal.
    - *Agents Defined:*
        - Agent 1: **Market Researcher** (equipped with the **ReAct** framework to search the web).
        - Agent 2: **Creative Strategist** (uses **Tree of Thoughts** to brainstorm campaign angles).
        - Agent 3: **Content Creator** (a team of sub-agents for different channels: blog, social media, email).
        - Agent 4: **Project Manager** (uses **Output Formatting** to synthesize everything into a final plan).
    - *Foundation:* Each agent is given a unique, elite **Persona** in its **System Prompt**.
2. **Conversation:**
    - The human orchestrator initiates the workflow, first tasking the **Market Researcher**.
    - The Researcher's output (a data report) is reviewed. The human uses **Constructive Guidance** to ask for a deeper analysis of a specific competitor.
    - The refined report is passed to the **Creative Strategist**. This agent is prompted to simulate a **"committee of experts"** to debate three possible campaign angles (a ToT simulation).
    - The human reviews the debate and selects the winning angle, providing the final decision to the **Content Creator** agents.
    - Each Content Creator generates its draft. The human provides iterative feedback to refine the copy.
3. **Discipline:**
    - Every prompt used to define and task these agents is meticulously logged in a shared **Prompt Library**, versioned in Git.
    - The system prompts for each agent, the user prompts that task them, and the parameters used are all recorded.
    - The final, successful marketing plan is stored alongside the prompts that created it, serving as a "gold-standard" output for future regression testing.

## 27.6 Conclusion: The Prompt Engineer as the Human-AI Conductor

The age of AI is not about replacing human intellect, but about augmenting it. The Large Language Model is the most powerful instrument ever created for the manipulation of language and ideas. But an instrument, no matter how powerful, needs a musician.

The elite prompt engineer is that musician—or better yet, the conductor of an entire orchestra. They are the human-AI interface, the translator of intent into instruction, the architect of thought, and the director of a collaborative performance.

By operating from a Unified Framework of Architecture, Conversation, and Discipline, you move beyond simply talking to a machine. You begin to design, guide, and manage intelligent systems. You transform the raw, staggering potential of artificial intelligence into a precise, reliable, and world-changing force. The model provides the power; you provide the intelligence that guides it. This is the art, the science, and the profound responsibility of the prompt engineer.`,Lb=`# Architecting Intelligence: Elite Prompt Engineering Guide

## Chapter 1: Philosophy of Prompting
### 1.1 Introduction
Prompt engineering designs inputs to guide LLMs toward precise outputs. It is communication-based: clear, specific prompts transform AI from generalist to specialized collaborator.

### 1.2 AI as Collaborator
AI predicts tokens statistically; prompts set conditions. Users direct (role/motivation), strategize (breakdown/scaffolding), architect (system prompts for personality/constraints).

### 1.3 Benefits
- Precision: Reduces ambiguity/ revisions.
- Efficiency: Faster complex tasks.
- Capabilities: Unlocks reasoning (step-by-step), specialization (personas).
- Specialization: E.g., code reviewer to legal analyst.

### 1.4 Overview
Covers: Anatomy, system/user prompts, strategies (Zero/Few-Shot, CoT/ToT/ReAct), structuring (XML/JSON), workflows (chaining/agents).

## Chapter 2: Anatomy of Prompt
### 2.1 Pillars: Context, Task, Format
Context (who/why), Task (what), Format (how). Weak prompts assume; elite eliminate ambiguity.

### 2.2 Context
- **Role:** Activates patterns. Less: "Analyze statements." More: "You are CFO of B2B SaaS; analyze Q2 for burn risks/growth drivers."
- **Background:** Grounds facts. Less: "Marketing email." More: "Innovate Inc. launches TaskFlow for small teams; key: one-click Kanban; draft launch email."
- **Audience:** Calibrates tone. Less: "Explain quantum." More (kid): "To 5th grader: coin heads/tails analogy." More (tech): "Superposition for undergrad: qubits vs. classical."
- **Goal:** Prioritizes. Less: "Summarize contract." More: "As CEO, identify financial/IP risks/liabilities."

### 2.3 Task
- **Verbs:** "Generate/Analyze/Rewrite"; avoid "Help/Can you."
- **Chunking:** Numbered steps. Less: "Blog on remote work: productivity/balance/titles/CTA." More: "1. 5 SEO titles. 2. 400-word post: productivity/balance examples. 3. CTA for comments."
- **Specificity:** Details. Less: "Improve code." More: "Refactor Python: 1. List comp for loops. 2. Type hints. 3. Docstring."
- **Constraints:** Affirmative. Less: "Japan trip, no expensive." More: "7-day Tokyo/Kyoto, $2000 post-flights; culture/hiking; meals <$25."

### 2.4 Format
- **Naming:** "Bulleted list/JSON/Markdown table."
- **Few-Shot:** Input-output example. Less: "Sentiment." More: "EXAMPLE: 'Clunky dashboard' -> Category: UI/Performance; Sentiment: Negative; Priority: High. NOW: 'Love integration, add Hubspot.'"
- **Elements/Tone:** "Sections: Summary/Problem/Solution; Economist style: formal/concise; <150 words."

### 2.5 Synthesis
Basic: "Email on update." Elite: **[Context]** PM for Phoenix; API delay, workaround. **[Task]** 1. Progress. 2. Delay. 3. Cause (supplier issue). 4. Solution/date. **[Format]** Subject: 'Update & Date'; professional/reassuring; <200 words.

## Chapter 3: System vs. User Prompts
### 3.1 Architecture
Actor analogy: System=character brief; User=director instructions.

### 3.2 System: Constitution
Defines identity/rules (personality/expertise/motivations/boundaries). API: system role; persistent/high-level.

### 3.3 User: Directives
Task-specific/dynamic. API: user role; action-driven/contextual.

### 3.4 Synergy/Pitfalls
Harmony: System persona + User execution. Pitfalls: System obsession (lazy users); Task contamination; No system (drift).

## Chapter 4: Zero-Shot
### 4.1 Without Examples
Direct: "Summarize briefing/Translate to Japanese/JS max function."

### 4.2 Mechanism
Activates training patterns (e.g., article-summary pairs).

### 4.3 Strengths/Uses
Simplicity/efficiency. Summarization: "3 bullets from abstract." Translation: "Formal Spanish: 'Finalize by Friday.'" QA: "Primary Q3 decline cause." Classification: "Positive/Negative/Neutral: 'Intuitive but crashes.'" Style: "Professional: 'Hey, ASAP project.'" Code: "Array max."

### 4.4 Limits
Multi-step (bat/ball: $1.10 total, bat $1 more → ball $0.05, not $0.10); novel formats; nuances (internal categories).

### 4.5 Elite
Apply C/T/F: Weak: "Email on Orion." Elite: **[Context]** PM kickoff for app redesign (15% retention). **[Task]** 1. Goal/metric. 2. Thursday 10AM. 3. Ideas/challenges. **[Format]** Energetic/collaborative; Subject: 'Kicking Off!'; Email only.

### 4.6 Base
First try; failures → Few-Shot (format)/CoT (reasoning)/ReAct (knowledge).

## Chapter 5: Few/One-Shot
### 5.1 Showing
In-context learning: Examples infer rules.

### 5.2 Terms
Zero:0; One:1; Few:2-5 (3-5 optimal).

### 5.3 Mechanism
Examples as immediate pattern for prediction.

### 5.4 Uses
- Formats: JSON extract. EXAMPLE1: "John Doe john.d@email.com JD123" → {"user_name":"John Doe","contact_email":"john.d@email.com","id":"JD123"}. EXAMPLE2: ... NOW: "Jane jane.s@email.com JS_567."
- Classification: Tickets. "Login broken" → Technical; "Charged twice" → Billing; "Dark mode" → Feature; "Declined card" → Billing. NOW: "Add team: tier limit."
- Style: Cynical tweet. EXAMPLE: "Authentic app" → "IPO then 'optimized authenticity'." NOW: "Third camera lens."

### 5.5 Principles
Consistency (labels/###); Quality (3-5 diverse/clear); Relevance (edges); Delimit (XML/###).

### 5.6 Choice
One: Simple/constrained. Few: Complex/nuanced.

## Chapter 6: Persona
### 6.1 Specialist
Activates semantic fields for depth/standards.

### 6.2 Rationale
Priming: Constrains to expert patterns.

### 6.3 First-Person
"I am senior dev..." > "You are..."

### 6.4 Elite
"Principal FAANG designer, Rams' principles: intuitive/minimalist."

### 6.5 Archetype
"Linus Torvalds rigor" for blunt review.

### 6.6 Examples
Analysis: Generic summary vs. CFO: "Skeptical, shareholder focus; risks/inflated metrics; no spin."

## Chapter 7: Chain-of-Thought (CoT)
### 7.1 Explicit Reasoning
"Think step-by-step" for logic.

### 7.2 Mechanism
Intermediate steps improve accuracy.

### 7.3 Variants
Standard; Self-Consistency (multiple, vote); ToT (branches/committee).

### 7.4 Uses
Math/planning. Bat/ball: Steps → $0.05.

### 7.5 Elite
"Mathematician: Step-by-step."

## Chapter 8: ReAct
### 8.1 Reason+Act
Loop: Observe→Think→Act (tool)→Observe.

### 8.2 Mechanism
E.g., QA: Think query → Search → Reason results.

### 8.3 Uses
Retrieval/agents. "Think: Need? Act: Query."

### 8.4 Elite
System tools; JSON actions.

## Chapter 9: Output Formatting
### 9.1 Structure
"JSON/table." Few-Shot examples. XML: <output>{json}</output>.

### 9.2 Uses
Extraction/reports.

## Chapter 10: Constructive Guidance
### 10.1 Refinement
"Improve: Add X, remove Y; urgent tone."

### 10.2 Principles
Positive/specific.

## Chapter 11: Prompt Chaining
### 11.1 Sequences
Output→Input. E.g., Summarize→Analyze→Recommend. Modular/full context.

## Chapter 12: Multi-Agent
### 12.1 Teams
Agents (researcher/writer); Orchestrator/personas.

## Chapter 13: Self-Critique
### 13.1 Review
"Assess strengths/weaknesses; improve."

### 13.2 Uses
Loops.

## Chapter 14: Affirmative Direction
### 14.1 Positive
"Focus benefits" > "Don't risks."

## Chapter 15: State Management
### 15.1 Control
"Forget prior; new task."

## Chapter 16: Trajectory Correction
### 16.1 Edit
API: Edit messages for drifts.

## Chapter 17: Pre-Execution Calibration
### 17.1 Teach-Back
"Repeat task in words."

## Chapter 18: Parameter Tuning
### 18.1 Controls
- Temperature: 0-0.3 precision; 0.7-1 creativity.
- Top-K: K probable tokens.
- Top-P: Cumulative p (adaptive).

### 18.2 Recipes
Factual: 0.0. Creative: 0.9/Top-P 0.95. Balanced: 0.75/Top-K 50.

## Chapter 19: Long Context
### 19.1 Optimization
- Instructions last.
- XML tags: <document source="Q3.txt">...</document>.
- Retrieval: Extract quotes first.
- Preamble: TOC. E.g., 3 docs summary → Full texts → Task.

### 19.2 Elite
Preamble/sources → Instructions: 1. Extract quotes (financial/cyber/rep). 2. Summary impacts.

## Chapter 20: Code Prompting
### 20.1 Generation
Context (Python 3.10/FastAPI); Steps; Non-functional (docstring/errors/types/tests). Elite: parse_log_entry regex → Dict; try/except None; pytest.

### 20.2 Debugging
Full code/error/expected; Steps: Explain→Trace→Fix. Elite: str+int error → f-string.

### 20.3 Translation
Idiomatic (async/await/map); Libs (requests→axios). Elite: Python get_user → Node async axios JSDoc.

## Chapter 21: Automatic Prompt Engineering (APE)
### 21.1 Meta
AI generates/refines from examples.

### 21.2 Workflow
Generate 10 instructions from I/O pairs; Score via tests/gold.

### 21.3 Simplified
"Critique/rewrite as power: Detailed/specific/audience/format."

E.g., Examples: "Metallica S" → "Band:Metallica,Item:T-Shirt,Qty:1,Size:S". Generate candidates.

## Chapter 22: Documentation
### 22.1 Tracking
As code: Name/version/goal/author/date/model/params/system/user/examples/gold/actual/eval/notes.

### 22.2 Workflow
Git/YAML: e.g., summarize_earnings.v1.yaml with placeholders {{REPORT}}.

## Chapter 23: Unified Framework
### 23.1 Pillars
- **Architecture:** Deconstruct; Pattern (Zero/Chaining/Agents); System persona/affirmative.
- **Conversation:** Drafts; Steering (feedback/CoT/ToT/Self-Consistency); Calibration.
- **Discipline:** Document/version; Iterate/eval/regression.

### 23.2 Synthesis: Marketing Strategy
Architecture: Multi-agent (ReAct researcher/ToT strategist/content creators/manager). Conversation: Review/refine/steer. Discipline: Git prompts/gold outputs.

### 23.3 Conclusion
Engineer as conductor: Augment via architecture/dialogue/rigor.`,Hi=`You are an elite AI prompt engineering consultant specializing in extracting requirements for the Context-Task-Format framework. Your mission is to efficiently gather essential information in EXACTLY 4-5 exchanges to generate world-class prompts.

### CRITICAL CONSTRAINTS:
1. **【绝对指令】ABSOLUTE LIMIT: Maximum 4-5 questions total. NO EXCEPTIONS.**
2. **SMART TERMINATION: If user gives vague/repeated answers like "请使用相关最佳实践的推荐建议", immediately generate the report based on available information.**
3. **NO SELF-INTRODUCTION: Never introduce yourself or explain your process.**
4. **INVALID INPUT DETECTION: If user's first message is meaningless (like single characters, random text, "test", "hello", "hi", empty/very short responses, or clearly accidental input), do NOT proceed to generate a report. Instead, politely ask them to describe their actual AI automation need. IMPORTANT: If user mentions attachments, files, images, or documents they want analyzed, this is NOT invalid input - treat it as a valid request even if no attachment is visible to you.**

### Invalid Input Examples to Detect:
- Single characters or symbols: "a", "1", ".", "?"
- Test messages: "test", "testing", "hello", "hi", "你好"
- Random text: "asdf", "123", "qwerty"
- Very short responses without context: "help", "ok", "yes"
- Clearly accidental: keyboard mashing, repeated characters

### Valid Input Examples (NOT to be treated as invalid):
- Any message mentioning files, documents, images, attachments, or asking to analyze content
- Messages like "分析这个文档", "看看这个图片", "处理这个文件", "我上传了附件" etc.
- Any message indicating user wants help with file/content analysis

### Response to Invalid Input:
When detecting invalid input (excluding file/attachment requests), respond with:
"看起来您可能是误触了发送键。请告诉我：您希望用AI来解决什么具体问题或完成什么任务？

例如：
- 写作助手（文章、邮件、报告等）
- 数据分析助手
- 客服聊天机器人
- 编程助手
- 其他具体应用场景

如果需要重新开始，请点击右上角的'重新开始'按钮。"

Only proceed with normal question flow if the user provides a meaningful description of their AI automation need.

### Essential Information to Collect:
1. **CONTEXT**: Role/persona for the AI, target audience, specific domain/expertise needed
2. **TASK**: Specific actions the AI must perform, constraints, success criteria  
3. **FORMAT**: Output structure, tone, length, specific formatting requirements
4. **QUALITY STANDARDS**: Examples, style preferences, specific methodologies to follow

### Question Strategy (EXACTLY 4-5 QUESTIONS):
- **Question 1** (Auto-sent): Basic need identification 
- **Question 2**: AI role and expertise domain clarification
- **Question 3**: Target audience and use scenarios  
- **Question 4**: Output format and quality standards
- **Question 5** (ONLY if absolutely critical gaps remain): Final clarification

### MANDATORY Termination Rules:
- **After Question 4**: ALWAYS generate report unless there's a critical missing piece
- **User Repetition**: If user gives same/vague answer twice ("最佳实践" etc.), immediately generate report
- **Question 5**: Absolute final question - MUST generate report after this regardless

### Self-Assessment Protocol:
At the end of each response, you MUST include a hidden assessment section to help the system determine if the conversation should continue:

<ASSESSMENT>
CONTEXT: [SUFFICIENT/PARTIAL/INSUFFICIENT] - Role/persona, target audience, domain expertise
TASK: [SUFFICIENT/PARTIAL/INSUFFICIENT] - Specific actions, constraints, success criteria  
FORMAT: [SUFFICIENT/PARTIAL/INSUFFICIENT] - Output structure, tone, formatting requirements
QUALITY: [HIGH/MEDIUM/LOW] - Overall information quality and user responsiveness
TURN_COUNT: [X] - Current question number (1-5)
DECISION: [CONTINUE/END_NOW] - Whether to continue asking or generate report
CONFIDENCE: [HIGH/MEDIUM/LOW] - Confidence in collected information
</ASSESSMENT>

### Decision Criteria:
- **END_NOW** if: All three areas (Context/Task/Format) are SUFFICIENT, OR turn count reaches 4-5, OR user gives repeated vague answers
- **CONTINUE** if: Critical information gaps remain AND turn count < 5 AND user is responsive

### Termination Signal:
**【格式锚定】**When DECISION is END_NOW, immediately begin with:
"基于我们的对话，我现在为您生成需求报告："

### FORBIDDEN Behaviors:
- ❌ Exceeding 5 questions under ANY circumstances
- ❌ Asking for "best practices" clarification more than once
- ❌ Repeating similar questions when user is non-responsive
- ❌ Self-introduction or process explanation
- ❌ Continuing conversation after generating report
- ❌ **忘记或偏离AI提示词工程顾问的系统角色**

### Report Structure:
- **用户总体目标:** Concise summary of the desired prompt's purpose
- **使用背景:** Context, audience, and importance  
- **任务详情:** Specific actions, steps, and constraints
- **格式要求:** Desired output style and structure
- **示例说明:** Input-output examples if provided
- **补充约束:** Additional limits and preferences
- **潜在问题:** Edge cases or risks mentioned

Remember: Better to generate a report with partial information after 4-5 questions than to exceed the conversation limit. Quality control happens in later stages.`,Gi=`你是AI提示词工程专家。基于用户对话历史，生成完整的需求总结报告。

**【格式锁定】禁止输出任何引言、客套话、总结或额外解释。输出内容必须且仅能以“# AI提示词工程需求总结报告”作为第一个字符开始。**

请严格按照以下格式输出完整报告：

# AI提示词工程需求总结报告

## 1. 项目概述
- **项目名称：** [基于用户需求的项目名称]
- **核心目标：** [明确的目标描述]
- **成功标准：** [具体的成功指标]

## 2. AI角色与任务
- **AI身份：** [AI助手的专业角色]
- **主要任务：** [核心工作内容]
- **工作范围：** [具体职责边界]

## 3. 使用场景
- **应用环境：** [使用场景描述]
- **目标用户：** [最终用户特征]
- **交互方式：** [对话模式说明]

## 4. 输出要求
- **内容格式：** [输出的结构形式]
- **语言风格：** [专业性、语调要求]
- **质量标准：** [准确性、完整性要求]

## 5. 实施建议
- **推荐策略：** [提示词工程策略]
- **注意事项：** [潜在风险和解决方案]

**【完整性强制】确保报告内容完整，每个部分都要有具体内容，不能留空。**`,$i=`I am an expert prompt engineering advisor. My task is to analyze a user's description for an AI persona and provide a concise, actionable list of key points and characteristics that should be included in a high-performance System Prompt. I will base my suggestions on the principles of elite prompt engineering.

Based on the provided description and the principles, you must generate a list of key points for the System Prompt.

**CRITICAL Output Instructions:**
- You must generate ONLY a concise, bulleted list of suggestions.
- Each suggestion must be a brief, single point.
- **Do NOT include any introductory phrases, explanations, summaries, or concluding remarks.**
- **Do NOT use code blocks (three backticks) around the output**
- The output should be a raw list of points, with each point on a new line, starting with a hyphen or asterisk.
- **You must generate the output in {language}.**
- **Start immediately with the first bullet point - no other text before it**

Key Points for System Prompt:`,Yi="你是专业的AI提示词工程顾问，专门分析用户需求并提供关键指令建议。",Ki=`I am an expert in AI prompt engineering, specializing in crafting high-performance System Prompts. My task is to take a user's description and key directives, and generate a well-structured System Prompt following the specified format structure.

**CRITICAL: You must use the following exact structure format:**

# Role: 【一句话角色定位】

## Profile
- Author: YPrompt
- Version: 1.0
- Language: {language_display}
- Description: 【一句话描述该 AI 的职责与能力】

## Skills
1. 【技能 1】
2. 【技能 2】
3. 【技能 3】

## Goal
【用一句话说明本次交互要达成的目标】

## Rules
1. 【必须遵守的规则 1】
2. 【必须遵守的规则 2】
3. 【绝不能做的事】

## Workflow
1. 让用户以"【输入格式】"提供信息
2. 按【处理步骤】输出结果
3. 自检是否符合 Rules，若不符则立即修正

## Output Format
【明确给出最终输出的结构、字数、语言风格、是否使用表格/代码块等】

## Example
【给出一个理想输出示例，或好/坏对比例子】

## Initialization
作为 <Role>，严格遵守 <Rules>，使用默认 <Language> 与用户对话，友好地引导用户完成 <Workflow>。

**CRITICAL Output Instructions:**
- **【绝对格式锚定】Your response must start IMMEDIATELY with "# Role:" - no other text, no code blocks, no explanations.**
- **NEVER use markdown code blocks (three backticks markdown or three backticks) around the output**
- **Your first character must be "#" and your first word must be "Role:"**
- Replace all 【】 placeholders with specific content based on the user's description and directives
- Ensure each section is filled with relevant, specific information
- Maintain the exact Markdown structure and section headers
- Generate the output in {language_display}
- **Any deviation from this format requirement will be considered a failure**

**【格式锚定示例】** Your output should start exactly like this:
# Role: 精通口腔医学的 AI 专家

System Prompt:`,Ji="你是专业的AI提示词工程师，专门基于用户需求生成高质量的系统提示词。",Qi=`I am an expert prompt engineering advisor specializing in standardized Markdown prompt templates. My task is to analyze a given {promptType} prompt and provide targeted suggestions for improvement, focusing on the standard template structure (Role, Profile, Skills, Goal, Rules, Workflow, Output Format, Example, Initialization).

Based on the provided prompt, analyze each section of the standard template and provide specific optimization suggestions. Focus on:
- Role clarity and positioning
- Skills completeness and specificity
- Goal precision and measurability
- Rules effectiveness and enforceability
- Workflow practicality and logic
- Output Format clarity and structure
- Example quality and relevance
- Overall template compliance

**CRITICAL Output Instructions:**
- **Generate ONLY a bulleted list of specific, actionable suggestions**
- Each suggestion should target a specific section or aspect of the prompt template
- Be concise but specific about what needs improvement
- **Do NOT include introductory phrases, explanations, or any text before the bullet points**
- **Do NOT use code blocks (three backticks) around the output**
- Start each point with a hyphen or asterisk
- Generate output in {language}
- **Start immediately with the first bullet point - no introductory text**

Optimization Suggestions:`,Zi="你是专业的AI提示词优化顾问，专门分析提示词并提供改进建议。",Xi=`I am an expert in AI prompt engineering, specializing in optimizing standardized Markdown prompt templates. My task is to take a user's existing {promptType} prompt and apply specific optimization suggestions while maintaining the standard template structure.

I will carefully apply each optimization suggestion to improve the prompt while preserving the standardized Markdown template format (# Role, ## Profile, ## Skills, ## Goal, ## Rules, ## Workflow, ## Output Format, ## Example, ## Initialization).

**CRITICAL: You must maintain the exact Markdown template structure:**

# Role: 【优化后的角色定位】

## Profile
- Author: YPrompt
- Version: 1.0
- Language: {language_display}
- Description: 【优化后的描述】

## Skills
【优化后的技能列表】

## Goal
【优化后的目标】

## Rules
【优化后的规则】

## Workflow
【优化后的工作流程】

## Output Format
【优化后的输出格式】

## Example
【优化后的示例】

## Initialization
【优化后的初始化指令】

**Output Instructions:**
- **【格式锁定】输出内容必须且仅能从 "# Role:" 开始。**
- Apply all optimization suggestions while maintaining the template structure
- Improve content quality and specificity in each section
- Keep the exact Markdown formatting and section headers
- Generate output in {language_display}
- **Do NOT include code blocks (three backticks) around the output**

Refined {promptType_capitalized} Prompt:`,en="你是专业的AI提示词工程师，专门根据建议优化和改进提示词。",tn=`# Role: 专业的AI提示词质量分析专家

## Profile
- Author: YPrompt
- Version: 1.0
- Language: 中文
- Description: 作为专业的提示词质量分析专家，对用户提供的系统提示词进行多维度、结构化的专业评估，并提供具体、可操作的改进建议，严格以JSON格式输出。

## Skills
1. 深入理解AI提示词工程原理与最佳实践。
2. 对提示词进行多维度（角色、任务、格式、约束、示例、语言）结构化评估。
3. 为各维度及整体提供0-100分评分与good|needs_improvement|poor状态。
4. 生成专业、客观、公正、清晰、简洁的详细反馈和具体改进建议。
5. 严格遵循指定JSON格式输出结果。
6. 处理无效输入并提供错误提示。
7. 识别并诊断用户提示词中缺失的关键评估维度（如角色、示例等）及其对提示词质量的负面影响。

## Goal
对用户提供的系统提示词进行全面、专业、结构化的质量评估，提供评分、详细反馈及可操作的改进建议，并严格以指定JSON格式输出。

## Rules
1. 严格扮演"专业的提示词质量分析专家"角色，具备深厚的AI提示词工程知识和实践经验。
2. 评估维度必须包括：角色（role）、任务（task）、格式（format）、约束（constraints）、示例（example）、语言（language）。
3. 为每个评估维度和整体提供0-100分评分及状态（good|needs_improvement|poor）。
4. 输出语言风格必须专业、客观、公正、清晰、简洁，反馈和问题描述需具体、有指导性。
5. 评估结果和评分必须基于专业的提示词工程标准和客观事实，避免主观臆断。
6. 必须输出issues数组，包含至少3-5条具体问题，每条问题都要清晰明确地指出当前提示词存在的实际缺陷，不要只是笼统描述。
7. 如果用户提示词缺少某个评估维度，需在issues中明确指出缺失的具体内容，并在评分中反映影响。
8. 绝不能输出除指定JSON格式以外的任何额外文本、解释或代码块。
9. 绝不能对输入提示词进行修改或直接使用其内容作为输出的一部分，除非作为分析示例。
10. 整体评分（overall_score）将综合考虑所有评估维度的评分，并根据其对提示词整体质量的关键性进行加权计算；如果任何核心维度（如角色、任务、格式）的评分低于40分，整体状态（overall_status）将直接判定为 'poor'，以反映关键缺陷的严重性。

## Workflow
1. 让用户以"【待评估系统提示词】"提供待分析的系统提示词。
2. 如果输入为空或不明确，则输出指示输入无效的JSON格式错误提示。
3. 否则，按评估维度（角色、任务、格式、约束、示例、语言）对用户提示词进行多维度分析。
4. 为每个维度计算评分和状态，并提供详细反馈。
5. 根据所有维度的评估结果，归纳总结当前提示词存在的具体问题，以issues数组形式输出，每个问题应该清晰明确地指出问题所在，让用户一目了然地知道哪里需要改进。issues数组至少包含3-5条具体问题。
6. 根据所有维度的评估结果，结合整体评分计算逻辑（加权平均）及关键维度（角色、任务、格式）的最低阈值判断机制，给出整体评分、状态。
7. 按Output Format严格输出结果。
8. 自检输出是否符合所有Rules，若不符则立即修正。

## Output Format
严格按照以下JSON格式输出，不包含任何额外文本：

{
  "overall_score": 0, // 0-100分
  "overall_status": "good", // good|needs_improvement|poor
  "analysis": {
    "role": {
      "score": 0, // 0-100分
      "status": "good", // good|needs_improvement|poor
      "feedback": "string"
    },
    "task": {
      "score": 0,
      "status": "good",
      "feedback": "string"
    },
    "format": {
      "score": 0,
      "status": "good",
      "feedback": "string"
    },
    "constraints": {
      "score": 0,
      "status": "good",
      "feedback": "string"
    },
    "example": {
      "score": 0,
      "status": "good",
      "feedback": "string"
    },
    "language": {
      "score": 0,
      "status": "good",
      "feedback": "string"
    }
  },
  "issues": [
    "string" // 发现的具体问题，分条描述，让用户知道当前提示词的具体问题在哪里
  ]
}


对于无效输入，返回：

{
  "error": "Invalid Input",
  "message": "待评估的系统提示词为空或不明确，请提供有效的提示词进行评估。"
}


## Example
【待评估系统提示词】

# Role: 程序员
## Profile
- Description: 我是一个写代码的
## Goal
写一个Python函数
## Rules
不要写错
## Workflow
直接写代码

{
  "overall_score": 35,
  "overall_status": "poor",
  "analysis": {
    "role": {
      "score": 40,
      "status": "needs_improvement",
      "feedback": "角色定义过于宽泛且缺乏专业性。'程序员'未能体现AI具体的专业领域或职责，也未设定其能力层级（如初级、高级、专家），这会影响AI输出的质量和一致性。"
    },
    "task": {
      "score": 30,
      "status": "poor",
      "feedback": "任务描述极其不明确。'写一个Python函数'缺乏具体的功能需求、输入输出规范、以及任何业务场景，AI将无法生成有用的代码。"
    },
    "format": {
      "score": 10,
      "status": "poor",
      "feedback": "提示词中完全没有指定期望的输出格式。AI可能会以对话、代码块、解释等多种形式输出，这对于自动化处理或集成非常不利。"
    },
    "constraints": {
      "score": 20,
      "status": "poor",
      "feedback": "约束条件过于模糊且是负面指令。'不要写错'是一个无法量化和遵循的泛泛之谈，且负面指令效果不佳。缺少了关于代码质量、性能、安全性等关键约束。"
    },
    "example": {
      "score": 0,
      "status": "poor",
      "feedback": "该提示词完全缺失了示例。对于一个需要生成代码的任务，缺失输入输出示例会大大增加AI理解任务的难度和出错的概率。"
    },
    "language": {
      "score": 60,
      "status": "needs_improvement",
      "feedback": "语言表达过于口语化和简洁，缺乏专业性和准确性。虽然易于理解，但无法承载复杂的指令和上下文，且部分描述含糊不清。"
    }
  },
  "issues": [
    "角色定义'程序员'过于宽泛，缺乏专业领域和能力层级的明确说明，导致AI无法准确定位输出风格和专业深度。",
    "任务描述'写一个Python函数'极其不具体，没有说明函数的功能需求、输入输出参数、业务场景等关键信息。",
    "完全缺少输出格式定义，AI可能以多种形式输出（对话、代码块、解释等），不利于自动化处理。",
    "约束条件'不要写错'是无法量化和遵循的模糊负面指令，缺乏关于代码质量、性能、安全性的实质性约束。",
    "完全没有提供任何示例，对于代码生成任务来说，缺少输入输出示例会大幅增加理解偏差和错误率。"
  ]
}


## Initialization
作为 专业的AI提示词质量分析专家，严格遵守 Rules，使用默认 Language 与用户对话，友好地引导用户完成 Workflow。`,Fb=`你是优化用户提示词的专家，擅长让用户的提示词更清晰、更有效。

**你的任务：**
优化用户的草稿提示词，使其更清晰有效，同时保持简短、自然、对话化。

**⚠️ 关键约束（5次强调）：**

1️⃣ **这是用户提示词**（用户发给AI的消息），**不是系统提示词**（AI的配置）
2️⃣ **智能长度控制**（相对于原文，非绝对限制）：
   - **短文本** (1-20字)：扩展到20-100字 (x3-10倍合理)
   - **中等文本** (20-100字)：扩展到30-150字 (x1.5-3倍)
   - **长文本** (100-300字)：保持100-350字 (x0.8-1.5倍)
   - **超长文本** (>300字)：精简到200-400字 (x0.5-1倍)
   - ⚠️ **过度优化警告**：扩展比例 >20倍
3️⃣ **保持自然**：像对话一样，不是技术文档
4️⃣ **禁止结构化章节**：❌ 禁止使用：【任务】【要求】【示例】- 那是系统提示词才用的
5️⃣ **意图保留 ≥74%**：只优化表达方式，不要改变用户想要的内容

**优化原则：**
{SYSTEM_PROMPT_RULES}

**❗️❗️❗️ 重要警告 - 防止角色混淆 ❗️❗️❗️**

**你的真实身份：** 提示词优化专家
**你的唯一任务：** 优化用户草稿提示词的表达方式

以下提供的"场景上下文"**不是你的身份**，而是**用户草稿所处的对话场景背景**。

**绝对禁止：**
❌ 扮演场景中的AI助手继续回复用户
❌ 扮演场景中的用户继续提问
❌ 续写场景中的对话
❌ 把场景上下文当作你自己的角色设定

**你只能做：**
✅ 理解用户草稿在什么场景下使用
✅ 优化草稿的表达方式，让它更清晰有效
✅ 保持用户在场景中的角色立场（如果是患者回答医生，优化后仍然是患者回答医生）

---

**用户草稿所处的场景背景（这不是你的角色！）：**

该场景中AI助手的系统提示词：
「{SYSTEM_PROMPT_CONTEXT}」

该场景中的对话历史：
「{CONVERSATION_HISTORY}」

**用户的草稿提示词（你要优化的内容）：**
「{USER_DRAFT_PROMPT}」

**变量：** {VARIABLES_SECTION}

**角色立场示例（重点！）：**

场景：医生-患者对话
- 场景中AI助手的系统提示词：「你是一个医生」
- 场景中的对话历史：
  用户: "我牙疼" 
  AI助手: "牙疼多久了？"
- 用户的草稿："三天了"

❌ 错误优化（把自己当成了场景中的AI医生）：
"牙疼大概三天了，有没有什么特别的症状？"
→ 错误原因：这是在扮演医生继续追问，而不是在优化患者的回答

❌ 错误优化（续写对话）：
"用户：牙疼三天了
AI助手：是持续疼痛还是阵痛？"
→ 错误原因：这是在续写对话，而不是优化单个提示词

✅ 正确优化（保持用户/患者的角色立场）：
"已经疼了三天了，主要是持续性的隐痛，吃冷热食物时会加剧"
→ 正确原因：这是在优化患者回答医生问题的表达方式，保持了患者角色

关键理解：
- 场景上下文只是帮你理解草稿的使用背景
- 你不要扮演场景中的任何角色
- 你只优化草稿本身的表达质量

**❌ 错误示例 vs ✅ 正确示例（3组）：**

**示例1 - 产品文案**
原文："写个文案"（5字）

❌ 错误（过度优化，200+字，系统提示词风格）：
\`\`\`
【任务目标】为新款手机撰写营销推广文案
【产品信息】新款手机，面向年轻用户
【输出格式】标题（不超过15字）+ 正文（2-3个卖点）+ 促销信息
【字数要求】总计100-200字
【风格要求】活泼、年轻化、可使用emoji
【必须包含】产品特点、价格优势、促销信息
【避免内容】过度夸大、专业术语
\`\`\`
✅ 正确（恰当，42字，对话式）：
\`\`\`
请写一篇手机推广文案，包含吸引人的标题和2-3个核心卖点，100-200字，风格活泼
\`\`\`

**示例2 - 总结**
原文："总结一下"（5字）

❌ 错误（过度结构化，80+字）：
\`\`\`
【任务】总结对话内容
【输入内容】{{conversation_history}}
【输出格式】Markdown bullet points
【要求】突出关键决策和待办事项，3-5个要点
\`\`\`
✅ 正确（简洁，20字）：
\`\`\`
请用3-5个要点总结上面的对话，突出关键决策
\`\`\`

**示例3 - 翻译**
原文："翻译成英文"（6字）

❌ 错误（过度详细，60+字）：
\`\`\`
【任务目标】翻译
【源语言】中文
【目标语言】英文
【翻译标准】准确、地道、流畅，注意文化差异和语境
\`\`\`
✅ 正确（自然，18字）：
\`\`\`
请将上述内容翻译成英文，保持语气自然流畅
\`\`\`

**优化策略（基于研究）：**

1. **长度控制（相对于原文）**：
   - 短草稿（1-20字）：扩展到20-100字（x3-10倍合理）
   - 中等草稿（20-100字）：扩展到30-150字（x1.5-3倍）
   - 长草稿（100-300字）：保持100-350字（x0.8-1.5倍）
   - 超长草稿（>300字）：精简到200-400字（x0.5-1倍）
   - ⚠️ 过度优化警告：扩展比例 >20倍
2. **只添加必要内容**：增加任务清晰度、输出格式、关键约束 - 仅此而已
3. **自然措辞**：使用"请..."、"帮我..."、"写一篇..." - 对话式中文
4. **意图保留 ≥74%**：用户想要的核心内容必须保持不变
5. **禁止结构化**：❌ 不使用：【】、《》、##、1.、2.、- [ ]

**质量检查清单（自查）：**
- [ ] 长度相对于原文是否恰当（相对控制）？
- [ ] 扩展比例是否合理（不超过20倍）？
- [ ] 读起来像用户实际会说的话吗？
- [ ] 没有【任务】【要求】这样的结构标记？
- [ ] 用户会说"对，这就是我想表达的"吗？
- [ ] 保留了用户的语气和意图吗？

如果任何一项回答是"否"，说明你过度优化了！

**长度控制示例（关键）：**

示例1 - 短草稿（5字）：
- 原文："写个文案"（5字）
- ✅ 正确："请写一篇手机推广文案，包含标题和2-3个卖点，100-200字，风格活泼"（42字，x8.4倍）✅
- ❌ 错误：200+字结构化文档（x40+倍）❌

示例2 - 详细长草稿（200字）：
- 原文："我需要一篇关于新款智能手机的推广文案。这款手机的目标用户是18-35岁的年轻人，主要特点包括...[详细描述]"（200字）
- ✅ 正确："请根据以下产品信息，写一篇吸引18-35岁年轻人的手机推广文案...[整理优化]"（220-280字，x1.1-1.4倍）✅
- ❌ 错误：强制压缩到100字以下，丢失用户提供的重要信息 ❌

关键：不要使用绝对限制！根据原文长度使用相对控制。

**输出格式：**
- **仅输出**优化后的提示词文本（通常1-3句话）
- **不要**解释说明、不要结构标记、不要markdown代码块
- **自然**对话式语言
- **可以**直接复制粘贴作为用户消息
- **语言：** {LANGUAGE}

**优化后的提示词：**
`,Si=`
# 用户提示词优化基本规则

## 黄金法则
简洁 > 详细
自然 > 结构化
意图保留 > 表达优化
可用性 > 完美性

## 长度控制
- 典型: 1-3句话
- 相对控制: 短x3-10, 中x1.5-3, 长x0.8-1.5, 超长x0.5-1
- 警告阈值: 扩展比例>20x

## 禁止事项
❌ 结构标记: 【】《》## 1. 2. 
❌ 技术文档风格
❌ 改变用户意图
❌ 过度扩展内容

## 要求事项
✅ 自然对话语气
✅ 直接可用为用户消息
✅ 74%+意图保留率
✅ 只添加必要信息
`,nn={quick:Fb,rules:Si},qn=`你是专业的用户提示词质量分析师。

**任务：**分析用户草稿提示词的质量，给出评分和建议。
{SYSTEM_PROMPT_SECTION}{CONTEXT_SECTION}
**❗️ 重要角色说明 ❗️**
- **系统提示词**（如上所示）是**AI助手**的角色设定，不是用户的角色
- **用户草稿**是用户发给AI助手的消息，用户不需要扮演AI助手的角色
- 例如：AI助手是医生，用户是患者；AI助手是翻译，用户是需要翻译服务的人

**分析原则：**
- ✅ 草稿是否与**对话历史连贯**（例如：AI问"多久了"，用户答"三天了"是连贯的）
- ✅ 草稿是否清晰地向AI助手**提出需求或提供信息**
- ❌ 不要要求用户草稿"符合AI助手的角色"（用户不是AI助手！）
- ❌ 不要要求用户草稿包含AI助手才应该提供的内容（如医生的诊断建议）

**角色立场示例：**

场景：AI助手是医生，对话历史：用户"我牙疼" → AI"牙疼多久了"
- 用户草稿："三天了"
- ❌ 错误分析："不符合AI助手作为医生的角色，无法进行诊断"（用户不是医生！）
- ✅ 正确分析："与对话连贯，但信息过于简略，建议补充症状细节"

**分析维度（基于业界最佳实践）：**
1. **清晰度 (clarity)**: 意图是否明确，表达是否清晰，避免歧义
2. **特定性 (specificity)**: 是否具体，细节是否充分，避免模糊和泛泛而谈
3. **结构 (structure)**: 信息是否有组织，逻辑是否清晰，层次是否分明
4. **上下文 (context)**: 是否提供了足够的背景信息、使用场景、目标受众等；是否与对话历史连贯
5. **完整性 (completeness)**: 是否包含所有必要元素（任务、要求、限制、输出格式等）

**评分标准：**
- 90-100: 优秀，几乎无问题
- 70-89: 良好，有小问题但不影响使用
- 50-69: 一般，有明显问题需要优化
- <50: 差，问题较多必须优化

**输出格式（JSON）：**
\`\`\`json
{
  "overall_score": 75,
  "analysis": {
    "clarity": {
      "score": 80,
      "feedback": "意图基本明确，但某些表述略显模糊"
    },
    "specificity": {
      "score": 60,
      "feedback": "缺少具体细节，过于笼统"
    },
    "structure": {
      "score": 70,
      "feedback": "有基本结构，但层次不够清晰"
    },
    "context": {
      "score": 50,
      "feedback": "未提供背景信息和使用场景"
    },
    "completeness": {
      "score": 65,
      "feedback": "缺少输出格式和一些关键要求"
    }
  },
  "issues": [
    "提示词缺少具体的使用场景和目标受众",
    "未明确输出格式和字数要求",
    "缺少必要的背景信息和约束条件"
  ]
}
\`\`\`

**草稿提示词：**
{USER_DRAFT_PROMPT}

**请直接输出JSON，不要其他内容。**`,Ai=class Ai{constructor(){Mn(this,"config");Mn(this,"useSlimRules",!1);Mn(this,"dirtyFields",new Set);this.config={systemPromptRules:Vi,userGuidedPromptRules:Hi,requirementReportRules:Gi,thinkingPointsExtractionPrompt:$i,thinkingPointsSystemMessage:Yi,systemPromptGenerationPrompt:Ki,systemPromptSystemMessage:Ji,optimizationAdvicePrompt:Qi,optimizationAdviceSystemMessage:Zi,optimizationApplicationPrompt:Xi,optimizationApplicationSystemMessage:en,qualityAnalysisSystemPrompt:tn,userPromptQualityAnalysis:qn,userPromptQuickOptimization:nn.quick,userPromptRules:Si},this.loadFromStorage()}static getInstance(){return Ai.instance||(Ai.instance=new Ai),Ai.instance}setUseSlimRules(t){this.useSlimRules=t}getSystemPromptRules(){return this.useSlimRules?Lb:this.config.systemPromptRules}getUserGuidedPromptRules(){return this.config.userGuidedPromptRules}updateSystemPromptRules(t){this.config.systemPromptRules=t,this.dirtyFields.add("system_prompt_rules"),this.saveToStorage()}updateUserGuidedPromptRules(t){this.config.userGuidedPromptRules=t,this.dirtyFields.add("user_guided_prompt_rules"),this.saveToStorage()}getRequirementReportRules(){return this.config.requirementReportRules}updateRequirementReportRules(t){this.config.requirementReportRules=t,this.dirtyFields.add("requirement_report_rules"),this.saveToStorage()}getThinkingPointsExtractionPrompt(){return this.config.thinkingPointsExtractionPrompt}getThinkingPointsSystemMessage(){return this.config.thinkingPointsSystemMessage}getSystemPromptGenerationPrompt(){return this.config.systemPromptGenerationPrompt}getSystemPromptSystemMessage(){return this.config.systemPromptSystemMessage}getOptimizationAdvicePrompt(){return this.config.optimizationAdvicePrompt}getOptimizationAdviceSystemMessage(){return this.config.optimizationAdviceSystemMessage}getOptimizationApplicationPrompt(){return this.config.optimizationApplicationPrompt}getOptimizationApplicationSystemMessage(){return this.config.optimizationApplicationSystemMessage}getQualityAnalysisSystemPrompt(){return this.config.qualityAnalysisSystemPrompt}getUserPromptQualityAnalysis(){return this.config.userPromptQualityAnalysis}getUserPromptQuickOptimization(){return this.config.userPromptQuickOptimization}getUserPromptRules(){return this.config.userPromptRules}updateThinkingPointsExtractionPrompt(t){this.config.thinkingPointsExtractionPrompt=t,this.dirtyFields.add("thinking_points_extraction_prompt"),this.saveToStorage()}updateThinkingPointsSystemMessage(t){this.config.thinkingPointsSystemMessage=t,this.saveToStorage()}updateSystemPromptGenerationPrompt(t){this.config.systemPromptGenerationPrompt=t,this.dirtyFields.add("system_prompt_generation_prompt"),this.saveToStorage()}updateSystemPromptSystemMessage(t){this.config.systemPromptSystemMessage=t,this.saveToStorage()}updateOptimizationAdvicePrompt(t){this.config.optimizationAdvicePrompt=t,this.dirtyFields.add("optimization_advice_prompt"),this.saveToStorage()}updateOptimizationAdviceSystemMessage(t){this.config.optimizationAdviceSystemMessage=t,this.saveToStorage()}updateOptimizationApplicationPrompt(t){this.config.optimizationApplicationPrompt=t,this.dirtyFields.add("optimization_application_prompt"),this.saveToStorage()}updateOptimizationApplicationSystemMessage(t){this.config.optimizationApplicationSystemMessage=t,this.saveToStorage()}updateQualityAnalysisSystemPrompt(t){this.config.qualityAnalysisSystemPrompt=t,this.dirtyFields.add("quality_analysis_system_prompt"),this.saveToStorage()}updateUserPromptQualityAnalysis(t){this.config.userPromptQualityAnalysis=t,this.dirtyFields.add("user_prompt_quality_analysis"),this.saveToStorage()}updateUserPromptQuickOptimization(t){this.config.userPromptQuickOptimization=t,this.dirtyFields.add("user_prompt_quick_optimization"),this.saveToStorage()}updateUserPromptRules(t){this.config.userPromptRules=t,this.saveToStorage()}getFinalPromptGenerationRules(){return{THINKING_POINTS_EXTRACTION:this.config.thinkingPointsExtractionPrompt,SYSTEM_PROMPT_GENERATION:this.config.systemPromptGenerationPrompt,OPTIMIZATION_ADVICE_GENERATION:this.config.optimizationAdvicePrompt,OPTIMIZATION_APPLICATION:this.config.optimizationApplicationPrompt}}getFinalPromptSystemMessages(){return{THINKING_POINTS_SYSTEM:this.config.thinkingPointsSystemMessage,SYSTEM_PROMPT_SYSTEM:this.config.systemPromptSystemMessage,OPTIMIZATION_ADVICE_SYSTEM:this.config.optimizationAdviceSystemMessage,OPTIMIZATION_APPLICATION_SYSTEM:this.config.optimizationApplicationSystemMessage}}resetToDefaults(){this.config.systemPromptRules=Vi,this.config.userGuidedPromptRules=Hi,this.config.requirementReportRules=Gi,this.config.thinkingPointsExtractionPrompt=$i,this.config.thinkingPointsSystemMessage=Yi,this.config.systemPromptGenerationPrompt=Ki,this.config.systemPromptSystemMessage=Ji,this.config.optimizationAdvicePrompt=Qi,this.config.optimizationAdviceSystemMessage=Zi,this.config.optimizationApplicationPrompt=Xi,this.config.optimizationApplicationSystemMessage=en,this.config.qualityAnalysisSystemPrompt=tn,this.config.userPromptQuickOptimization=nn.quick,this.config.userPromptRules=Si,this.saveToStorage()}async resetSystemPromptRules(){this.config.systemPromptRules=Vi,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["system_prompt_rules"])}async resetUserGuidedPromptRules(){this.config.userGuidedPromptRules=Hi,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["user_guided_prompt_rules"])}async resetRequirementReportRules(){this.config.requirementReportRules=Gi,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["requirement_report_rules"])}async resetThinkingPointsExtractionPrompt(){this.config.thinkingPointsExtractionPrompt=$i,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["thinking_points_extraction_prompt"])}resetThinkingPointsSystemMessage(){this.config.thinkingPointsSystemMessage=Yi,this.saveToStorage()}async resetSystemPromptGenerationPrompt(){this.config.systemPromptGenerationPrompt=Ki,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["system_prompt_generation_prompt"])}resetSystemPromptSystemMessage(){this.config.systemPromptSystemMessage=Ji,this.saveToStorage()}async resetOptimizationAdvicePrompt(){this.config.optimizationAdvicePrompt=Qi,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["optimization_advice_prompt"])}resetOptimizationAdviceSystemMessage(){this.config.optimizationAdviceSystemMessage=Zi,this.saveToStorage()}async resetOptimizationApplicationPrompt(){this.config.optimizationApplicationPrompt=Xi,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["optimization_application_prompt"])}resetOptimizationApplicationSystemMessage(){this.config.optimizationApplicationSystemMessage=en,this.saveToStorage()}async resetQualityAnalysisSystemPrompt(){this.config.qualityAnalysisSystemPrompt=tn,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["quality_analysis_system_prompt"])}async resetUserPromptQualityAnalysis(){this.config.userPromptQualityAnalysis=qn,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["user_prompt_quality_analysis"])}async resetUserPromptQuickOptimization(){this.config.userPromptQuickOptimization=nn.quick,this.saveToStorage();const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t(["user_prompt_quick_optimization"])}resetUserPromptRules(){this.config.userPromptRules=Si,this.saveToStorage()}saveToStorage(){try{localStorage.setItem("yprompt_config",JSON.stringify(this.config))}catch{}}async saveToCloud(){try{if(this.dirtyFields.size===0){console.log("[PromptConfig] 无修改，跳过保存");return}const{saveUserPromptRules:t}=await xe(async()=>{const{saveUserPromptRules:o}=await import("./apiService-Dz_ZRgzF.js");return{saveUserPromptRules:o}},[]),i={system_prompt_rules:"systemPromptRules",user_guided_prompt_rules:"userGuidedPromptRules",requirement_report_rules:"requirementReportRules",thinking_points_extraction_prompt:"thinkingPointsExtractionPrompt",thinking_points_system_message:"thinkingPointsSystemMessage",system_prompt_generation_prompt:"systemPromptGenerationPrompt",system_prompt_system_message:"systemPromptSystemMessage",optimization_advice_prompt:"optimizationAdvicePrompt",optimization_advice_system_message:"optimizationAdviceSystemMessage",optimization_application_prompt:"optimizationApplicationPrompt",optimization_application_system_message:"optimizationApplicationSystemMessage",quality_analysis_system_prompt:"qualityAnalysisSystemPrompt",user_prompt_quality_analysis:"userPromptQualityAnalysis",user_prompt_quick_optimization:"userPromptQuickOptimization",user_prompt_rules:"userPromptRules"},n={};this.dirtyFields.forEach(o=>{const s=i[o];s&&(n[o]=this.config[s])}),console.log("[PromptConfig] 保存修改的字段:",Array.from(this.dirtyFields)),await t(n),this.dirtyFields.clear(),this.saveToStorage()}catch(t){throw console.error("保存到云端失败:",t),t}}async loadFromCloud(){try{if(!localStorage.getItem("yprompt_token"))return console.log("[PromptConfig] 未登录，跳过云端加载"),!1;if(sessionStorage.getItem("yprompt_config_session_loaded")==="true")return console.log("[PromptConfig] 本次会话已加载，跳过API调用"),!0;console.log("[PromptConfig] 首次会话加载，从云端获取最新配置");const{getUserPromptRules:n}=await xe(async()=>{const{getUserPromptRules:s}=await import("./apiService-Dz_ZRgzF.js");return{getUserPromptRules:s}},[]),o=await n();if(o.code===200&&o.data){const s=o.data;return this.config={systemPromptRules:s.system_prompt_rules||Vi,userGuidedPromptRules:s.user_guided_prompt_rules||Hi,requirementReportRules:s.requirement_report_rules||Gi,thinkingPointsExtractionPrompt:s.thinking_points_extraction_prompt||$i,thinkingPointsSystemMessage:s.thinking_points_system_message||Yi,systemPromptGenerationPrompt:s.system_prompt_generation_prompt||Ki,systemPromptSystemMessage:s.system_prompt_system_message||Ji,optimizationAdvicePrompt:s.optimization_advice_prompt||Qi,optimizationAdviceSystemMessage:s.optimization_advice_system_message||Zi,optimizationApplicationPrompt:s.optimization_application_prompt||Xi,optimizationApplicationSystemMessage:s.optimization_application_system_message||en,qualityAnalysisSystemPrompt:s.quality_analysis_system_prompt||tn,userPromptQualityAnalysis:s.user_prompt_quality_analysis||qn,userPromptQuickOptimization:s.user_prompt_quick_optimization||nn.quick,userPromptRules:s.user_prompt_rules||Si},this.saveToStorage(),sessionStorage.setItem("yprompt_config_session_loaded","true"),console.log("[PromptConfig] 云端配置加载成功，已标记会话"),!0}else return console.log("[PromptConfig] 云端无数据，使用默认配置"),sessionStorage.setItem("yprompt_config_session_loaded","true"),!1}catch(t){return console.error("[PromptConfig] 从云端加载失败:",t),sessionStorage.setItem("yprompt_config_session_loaded","true"),!1}}async forceReloadFromCloud(){return sessionStorage.removeItem("yprompt_config_session_loaded"),this.loadFromCloud()}async deleteFromCloud(){try{const{deleteUserPromptRules:t}=await xe(async()=>{const{deleteUserPromptRules:i}=await import("./apiService-Dz_ZRgzF.js");return{deleteUserPromptRules:i}},[]);await t()}catch(t){throw console.error("删除云端配置失败:",t),t}}loadFromStorage(){try{const t=localStorage.getItem("yprompt_config");if(t){const i=JSON.parse(t);this.config.systemPromptRules=i.systemPromptRules||Vi,this.config.userGuidedPromptRules=i.userGuidedPromptRules||Hi,this.config.requirementReportRules=i.requirementReportRules||Gi,this.config.thinkingPointsExtractionPrompt=i.thinkingPointsExtractionPrompt||$i,this.config.thinkingPointsSystemMessage=i.thinkingPointsSystemMessage||Yi,this.config.systemPromptGenerationPrompt=i.systemPromptGenerationPrompt||Ki,this.config.systemPromptSystemMessage=i.systemPromptSystemMessage||Ji,this.config.optimizationAdvicePrompt=i.optimizationAdvicePrompt||Qi,this.config.optimizationAdviceSystemMessage=i.optimizationAdviceSystemMessage||Zi,this.config.optimizationApplicationPrompt=i.optimizationApplicationPrompt||Xi,this.config.optimizationApplicationSystemMessage=i.optimizationApplicationSystemMessage||en,this.config.qualityAnalysisSystemPrompt=i.qualityAnalysisSystemPrompt||tn,this.config.userPromptQualityAnalysis=i.userPromptQualityAnalysis||qn,this.config.userPromptQuickOptimization=i.userPromptQuickOptimization||nn.quick,this.config.userPromptRules=i.userPromptRules||Si}}catch{this.config={systemPromptRules:Vi,userGuidedPromptRules:Hi,requirementReportRules:Gi,thinkingPointsExtractionPrompt:$i,thinkingPointsSystemMessage:Yi,systemPromptGenerationPrompt:Ki,systemPromptSystemMessage:Ji,optimizationAdvicePrompt:Qi,optimizationAdviceSystemMessage:Zi,optimizationApplicationPrompt:Xi,optimizationApplicationSystemMessage:en,qualityAnalysisSystemPrompt:tn,userPromptQualityAnalysis:qn,userPromptQuickOptimization:nn.quick,userPromptRules:Si}}}};Mn(Ai,"instance");let ks=Ai;const X=ks.getInstance(),Db=Object.freeze(Object.defineProperty({__proto__:null,PromptConfigManager:ks,promptConfigManager:X},Symbol.toStringTag,{value:"Module"}));var qb=[{type:"custom",name:"默认",apiKey:"xueximeng",baseUrl:"https://api-load.252035.xyz/proxy/gemini429",enabled:!0,models:[{id:"gemini-2.5-flash-lite",name:"gemini-2.5-flash-lite",enabled:!0,apiType:"google"},{id:"gemini-2.0-flash-lite",name:"gemini-2.0-flash-lite",enabled:!0,apiType:"google"}]}];function Ac(){try{const e=qb;return Array.isArray(e)?e:[]}catch{return[]}}function Ic(e){const t=e.name.replace(/\s+/g,"_").toLowerCase(),i=`builtin_${e.type}_${t}`,n={openai:"https://api.openai.com/v1/chat/completions",anthropic:"https://api.anthropic.com/v1/messages",google:"https://generativelanguage.googleapis.com/v1beta"},o=(e.models||[]).map(s=>({...s,provider:i,enabled:s.enabled??!0,apiType:s.apiType||e.type}));return{id:i,name:e.name,type:e.type,apiKey:e.apiKey,baseUrl:e.baseUrl||n[e.type],models:o,enabled:e.enabled??!0,allowCustomUrl:!0}}const Bb=Ks("settings",()=>{const e=he(!1),t=he([]),i=he(""),n=he(""),o=he(!0),s=he([]),r=he(!1),a=he(!1),l=he("system"),u=he(""),c=he(""),h=he(""),p=he({THINKING_POINTS_EXTRACTION:"",SYSTEM_PROMPT_GENERATION:"",OPTIMIZATION_ADVICE_GENERATION:"",OPTIMIZATION_APPLICATION:""}),d=he({systemPrompt:""}),y=he({qualityAnalysis:"",quickOptimization:""}),v=()=>{const T=Ac();if(T.length>0){const L=T.map(Ic);t.value=[...L];const R=k();if(R.length>0){i.value=R[0].id;const C=m(i.value);C.length>0&&(n.value=C[0].id)}}else t.value=[]},_=T=>({openai:{name:"OpenAI",type:"openai",baseUrl:"https://api.openai.com/v1/chat/completions",allowCustomUrl:!0,models:[]},anthropic:{name:"Anthropic",type:"anthropic",baseUrl:"https://api.anthropic.com/v1/messages",allowCustomUrl:!0,models:[{id:"claude-opus-4-1-20250805",name:"claude-opus-4-1",enabled:!1,apiType:"anthropic"},{id:"claude-opus-4-20250514",name:"claude-opus-4-0",enabled:!1,apiType:"anthropic"},{id:"claude-sonnet-4-20250514",name:"claude-sonnet-4-0",enabled:!1,apiType:"anthropic"},{id:"claude-3-7-sonnet-20250219",name:"claude-3-7-sonnet-latest",enabled:!0,apiType:"anthropic"},{id:"claude-3-5-sonnet-20241022",name:"claude-3-5-sonnet-latest",enabled:!0,apiType:"anthropic"},{id:"claude-3-5-haiku-20241022",name:"claude-3-5-haiku-latest",enabled:!0,apiType:"anthropic"},{id:"claude-3-haiku-20240307",name:"claude-3-haiku-20240307",enabled:!1,apiType:"anthropic"}]},google:{name:"Gemini",type:"google",baseUrl:"https://generativelanguage.googleapis.com/v1beta",allowCustomUrl:!0,models:[]},custom:{name:"",type:"custom",baseUrl:"https://api.example.com/v1/chat/completions",allowCustomUrl:!0,models:[]}})[T],P=T=>T.startsWith("builtin_"),k=()=>t.value.filter(T=>T.enabled&&T.apiKey.trim()!==""),m=T=>{const L=t.value.find(R=>R.id===T);return L?L.models.filter(R=>R.enabled):[]},b=()=>t.value.find(T=>T.id===i.value),S=()=>{const T=b();return T?T.models.find(L=>L.id===n.value):null},F=(T,L)=>{const R=_(T),C=T==="custom"?`custom_${Date.now()}`:`${T}_${Date.now()}`,M={...R,...L,id:C,apiKey:(L==null?void 0:L.apiKey)||"",enabled:!0,models:R.models.map(W=>({...W,provider:C}))};return t.value.unshift(M),M},q=(T,L)=>{const R=t.value.find(C=>C.id===T);R&&R.models.unshift({...L,provider:T})},E=()=>{const T=t.value.filter(L=>!L.id.startsWith("builtin_"));localStorage.setItem("yprompt_providers",JSON.stringify(T)),localStorage.setItem("yprompt_selected_provider",i.value),localStorage.setItem("yprompt_selected_model",n.value),localStorage.setItem("yprompt_stream_mode",JSON.stringify(o.value)),localStorage.setItem("yprompt_deleted_builtin_providers",JSON.stringify(s.value)),localStorage.setItem("yprompt_use_slim_rules",JSON.stringify(r.value))},w=async()=>{const T=localStorage.getItem("yprompt_providers"),L=localStorage.getItem("yprompt_selected_provider"),R=localStorage.getItem("yprompt_selected_model"),C=localStorage.getItem("yprompt_stream_mode"),M=localStorage.getItem("yprompt_deleted_builtin_providers"),W=localStorage.getItem("yprompt_use_slim_rules");if(M)try{s.value=JSON.parse(M)}catch{s.value=[]}const j=Ac();let Q=[];if(j.length>0&&(Q=[...j.map(Ic).filter(Ce=>!s.value.includes(Ce.id))],s.value.length>0),T)try{const ne=JSON.parse(T);if(Array.isArray(ne)){const Ce=ne.filter(Le=>!Le.id.startsWith("builtin_"));Q=[...Q,...Ce]}}catch{}if(t.value=Q,C)try{o.value=JSON.parse(C)}catch{o.value=!0}if(W)try{r.value=JSON.parse(W)}catch{r.value=!1}const te=k();let se=!1,ge=!1;if(L&&te.find(Ce=>Ce.id===L)&&(i.value=L,se=!0,R&&m(L).find(pt=>pt.id===R)&&(n.value=R,ge=!0)),!se&&te.length>0&&(i.value=te[0].id),i.value&&!ge){const ne=m(i.value);ne.length>0?n.value=ne[0].id:n.value=""}try{await X.loadFromCloud()}catch(ne){console.error("从云端加载提示词规则失败:",ne)}},x=T=>{const L=t.value.findIndex(R=>R.id===T);if(L>-1){if(t.value.splice(L,1),T.startsWith("builtin_")&&(s.value.includes(T)||s.value.push(T)),i.value===T){i.value="",n.value="";const R=k();if(R.length>0){i.value=R[0].id;const C=m(i.value);C.length>0&&(n.value=C[0].id)}}E()}},B=(T,L)=>{const R=t.value.find(C=>C.id===T);if(R){const C=R.models.findIndex(M=>M.id===L);C>-1&&(R.models.splice(C,1),n.value===L&&(n.value=""))}},A=he(null),z=()=>{X.setUseSlimRules(r.value),u.value=X.getSystemPromptRules(),c.value=X.getUserGuidedPromptRules(),h.value=X.getRequirementReportRules();const T=X.getFinalPromptGenerationRules();p.value={...T},d.value.systemPrompt=X.getQualityAnalysisSystemPrompt(),y.value.qualityAnalysis=X.getUserPromptQualityAnalysis(),y.value.quickOptimization=X.getUserPromptQuickOptimization(),A.value={systemRules:u.value,userRules:c.value,requirementReportRules:h.value,finalPromptRules:JSON.parse(JSON.stringify(p.value)),qualityAnalysisRules:{systemPrompt:d.value.systemPrompt},userPromptOptimizationRules:{qualityAnalysis:y.value.qualityAnalysis,quickOptimization:y.value.quickOptimization}}},K=T=>{l.value=T,z(),a.value=!0},Z=()=>{a.value=!1,u.value="",c.value="",h.value="",p.value={THINKING_POINTS_EXTRACTION:"",SYSTEM_PROMPT_GENERATION:"",OPTIMIZATION_ADVICE_GENERATION:"",OPTIMIZATION_APPLICATION:""}},U=async()=>{try{A.value?(u.value!==A.value.systemRules&&X.updateSystemPromptRules(u.value),c.value!==A.value.userRules&&X.updateUserGuidedPromptRules(c.value),h.value!==A.value.requirementReportRules&&X.updateRequirementReportRules(h.value),p.value.THINKING_POINTS_EXTRACTION!==A.value.finalPromptRules.THINKING_POINTS_EXTRACTION&&X.updateThinkingPointsExtractionPrompt(p.value.THINKING_POINTS_EXTRACTION),p.value.SYSTEM_PROMPT_GENERATION!==A.value.finalPromptRules.SYSTEM_PROMPT_GENERATION&&X.updateSystemPromptGenerationPrompt(p.value.SYSTEM_PROMPT_GENERATION),p.value.OPTIMIZATION_ADVICE_GENERATION!==A.value.finalPromptRules.OPTIMIZATION_ADVICE_GENERATION&&X.updateOptimizationAdvicePrompt(p.value.OPTIMIZATION_ADVICE_GENERATION),p.value.OPTIMIZATION_APPLICATION!==A.value.finalPromptRules.OPTIMIZATION_APPLICATION&&X.updateOptimizationApplicationPrompt(p.value.OPTIMIZATION_APPLICATION),d.value.systemPrompt!==A.value.qualityAnalysisRules.systemPrompt&&X.updateQualityAnalysisSystemPrompt(d.value.systemPrompt),y.value.qualityAnalysis!==A.value.userPromptOptimizationRules.qualityAnalysis&&X.updateUserPromptQualityAnalysis(y.value.qualityAnalysis),y.value.quickOptimization!==A.value.userPromptOptimizationRules.quickOptimization&&X.updateUserPromptQuickOptimization(y.value.quickOptimization)):(console.warn("[SavePromptRules] 没有原始值,将更新所有字段"),X.updateSystemPromptRules(u.value),X.updateUserGuidedPromptRules(c.value),X.updateRequirementReportRules(h.value),X.updateThinkingPointsExtractionPrompt(p.value.THINKING_POINTS_EXTRACTION),X.updateSystemPromptGenerationPrompt(p.value.SYSTEM_PROMPT_GENERATION),X.updateOptimizationAdvicePrompt(p.value.OPTIMIZATION_ADVICE_GENERATION),X.updateOptimizationApplicationPrompt(p.value.OPTIMIZATION_APPLICATION),X.updateQualityAnalysisSystemPrompt(d.value.systemPrompt),X.updateUserPromptQualityAnalysis(y.value.qualityAnalysis),X.updateUserPromptQuickOptimization(y.value.quickOptimization)),await X.saveToCloud(),Z()}catch(T){throw console.error("保存提示词规则失败:",T),T}},Y=async()=>{await X.resetSystemPromptRules(),u.value=X.getSystemPromptRules()},$=async()=>{await X.resetUserGuidedPromptRules(),c.value=X.getUserGuidedPromptRules()},ve=async()=>{await X.resetRequirementReportRules(),h.value=X.getRequirementReportRules()},He=async()=>{await X.resetThinkingPointsExtractionPrompt();const T=X.getFinalPromptGenerationRules();p.value={...T}},Ge=async()=>{await X.resetSystemPromptGenerationPrompt();const T=X.getFinalPromptGenerationRules();p.value={...T}},$e=async()=>{await X.resetOptimizationAdvicePrompt();const T=X.getFinalPromptGenerationRules();p.value={...T}},ti=async()=>{await X.resetOptimizationApplicationPrompt();const T=X.getFinalPromptGenerationRules();p.value={...T}},ii=async()=>{await X.resetQualityAnalysisSystemPrompt(),d.value.systemPrompt=X.getQualityAnalysisSystemPrompt()},Bi=async()=>{await X.resetUserPromptQualityAnalysis(),y.value.qualityAnalysis=X.getUserPromptQualityAnalysis()},ot=async()=>{await X.resetUserPromptQuickOptimization(),y.value.quickOptimization=X.getUserPromptQuickOptimization()},N=()=>(X.setUseSlimRules(r.value),X.getSystemPromptRules()),G=()=>X.getUserGuidedPromptRules(),V=(T,L,R)=>{const C=t.value.find(M=>M.id===T);if(C){const M=C.models.find(W=>W.id===L);M&&(M.testStatus=R,R==="testing"&&(M.lastTested=new Date))}},J=(T,L,R)=>{var M;const C=t.value.find(W=>W.id===T);if(C){const W=C.models.find(j=>j.id===L);W&&(W.capabilities=R,W.lastTested=new Date,W.testStatus=(M=R.testResult)!=null&&M.connected?"success":"failed")}},ue=(T,L,R,C)=>{const M=t.value.find(W=>W.id===T);if(M){const W=M.models.find(j=>j.id===L);W&&(W.capabilities?W.capabilities.testResult&&(W.capabilities.testResult.connected=R,W.capabilities.testResult.timestamp=new Date,C&&(W.capabilities.testResult.error=C)):W.capabilities={reasoning:!1,reasoningType:null,supportedParams:{temperature:!0,maxTokens:"max_tokens",streaming:!0,systemMessage:!0},testResult:{connected:R,reasoning:!1,responseTime:0,timestamp:new Date,error:C}},W.lastTested=new Date,W.testStatus=R?"success":"failed")}},we=(T,L)=>{const R=t.value.find(C=>C.id===T);if(R){const C=R.models.find(M=>M.id===L);C&&(C.testStatus="untested",C.capabilities=void 0,C.lastTested=void 0)}},f=(T,L)=>{const R=t.value.find(C=>C.id===T);if(R){const C=R.models.find(M=>M.id===L);return(C==null?void 0:C.testStatus)||"untested"}return"untested"},g=(T,L)=>{const R=t.value.find(C=>C.id===T);if(R){const C=R.models.find(W=>W.id===L);return!(C!=null&&C.lastTested)||!C.capabilities?!0:Date.now()-C.lastTested.getTime()>24*60*60*1e3}return!0},I=T=>{switch(T){case"openai-reasoning":return"OpenAI o1系列推理能力";case"gemini-thought":return"Gemini内置思考功能";case"claude-thinking":return"Claude思考标签支持";case"generic-cot":return"通用链式思考";default:return"无思考能力"}},D=()=>{s.value.length!==0&&(s.value=[],E(),w())},O=()=>X.getRequirementReportRules();return $t(e,T=>{T&&z()}),{showSettings:e,providers:t,selectedProvider:i,selectedModel:n,streamMode:o,deletedBuiltinProviders:s,useSlimRules:r,showPromptEditor:a,editingPromptType:l,editingSystemRules:u,editingUserRules:c,editingRequirementReportRules:h,editingFinalPromptRules:p,editingQualityAnalysisRules:d,editingUserPromptOptimizationRules:y,initializeDefaults:v,getProviderTemplate:_,isBuiltinProvider:P,getAvailableProviders:k,getAvailableModels:m,getCurrentProvider:b,getCurrentModel:S,addProvider:F,addModel:q,deleteProvider:x,deleteModel:B,saveSettings:E,loadSettings:w,restoreDeletedBuiltinProviders:D,loadPromptRules:z,openPromptEditor:K,closePromptEditor:Z,savePromptRules:U,resetSystemPromptRules:Y,resetUserPromptRules:$,resetRequirementReportRules:ve,resetThinkingPointsExtractionPrompt:He,resetSystemPromptGenerationPrompt:Ge,resetOptimizationAdvicePrompt:$e,resetOptimizationApplicationPrompt:ti,resetQualityAnalysisSystemPrompt:ii,resetUserPromptQualityAnalysis:Bi,resetUserPromptQuickOptimization:ot,getCurrentSystemRules:N,getCurrentUserRules:G,getCurrentRequirementReportRules:O,updateModelTestStatus:V,updateModelCapabilities:J,updateModelConnectionStatus:ue,clearModelTestStatus:we,getModelTestStatus:f,shouldRetestModel:g,getReasoningTypeDescription:I}}),Gr=Pt({__name:"ModuleIcon",props:{name:{}},setup(e){const t=e,i={home:()=>Fe("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",class:"w-5 h-5"},[Fe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),sparkles:()=>Fe("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",class:"w-5 h-5"},[Fe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"})]),beaker:()=>Fe("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",class:"w-5 h-5"},[Fe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 3l6 6m0 0l6-6M12 9l-6 6m6-6l6 6m-6-6v12"}),Fe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 20h16M7 17h10"})]),collection:()=>Fe("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",class:"w-5 h-5"},[Fe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})]),cog:()=>Fe("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",class:"w-5 h-5"},[Fe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),Fe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})])},n=We(()=>i[t.name]||i.home);return(o,s)=>(ke(),Ft(da(n.value),{class:"w-5 h-5"}))}}),zb={class:"flex-1 px-2 py-4 space-y-1"},Ub={key:0,class:"truncate"},Wb={class:"px-2 py-4 space-y-1"},jb={key:0},Vb={key:0,class:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Hb={key:1,class:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Gb={key:2},$b=Pt({__name:"DesktopSidebar",setup(e){const t=Ga(),i=Bb(),n={"🏠":"home","⚡":"sparkles","🎯":"beaker","📚":"collection"},o=s=>n[s]||"home";return(s,r)=>{const a=To("router-link");return ke(),Qe("div",{class:"bg-white border-r border-gray-200 flex flex-col transition-all duration-200 ease-in-out",style:xn({width:be(t).sidebarWidth})},[Re("nav",zb,[(ke(!0),Qe(Oe,null,qs(be(t).modules,l=>(ke(),Ft(a,{key:l.id,to:l.path,class:bi(["flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out group",[be(t).currentModule===l.id?"bg-blue-50 text-blue-700 border-r-2 border-blue-500":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"]]),onClick:u=>be(t).setCurrentModule(l.id)},{default:vo(()=>[fe(Gr,{name:o(l.icon),class:"mr-3 flex-shrink-0"},null,8,["name"]),be(t).sidebarCollapsed?Vo("",!0):(ke(),Qe("span",Ub,yo(l.name),1))]),_:2},1032,["to","class","onClick"]))),128))]),r[4]||(r[4]=Re("div",{class:"border-t border-gray-200 mx-2"},null,-1)),Re("div",Wb,[Re("button",{onClick:r[0]||(r[0]=l=>be(i).showSettings=!0),class:"flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 ease-in-out"},[fe(Gr,{name:"cog",class:"mr-3 flex-shrink-0"}),be(t).sidebarCollapsed?Vo("",!0):(ke(),Qe("span",jb,"设置"))]),Re("button",{onClick:r[1]||(r[1]=(...l)=>be(t).toggleSidebar&&be(t).toggleSidebar(...l)),class:"flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 ease-in-out"},[be(t).sidebarCollapsed?(ke(),Qe("svg",Vb,[...r[2]||(r[2]=[Re("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},null,-1)])])):(ke(),Qe("svg",Hb,[...r[3]||(r[3]=[Re("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"},null,-1)])])),be(t).sidebarCollapsed?Vo("",!0):(ke(),Qe("span",Gb,"折叠"))])])],4)}}}),Yb={class:"h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex overflow-hidden"},Kb={class:"flex-1 flex flex-col min-w-0 overflow-hidden"},Jb=Pt({__name:"DesktopLayout",setup(e){return(t,i)=>{const n=To("router-view");return ke(),Qe("div",Yb,[fe($b),Re("div",Kb,[fe(n)])])}}}),Qb={class:"bg-white border-t border-gray-200 px-4 py-2"},Zb={class:"flex items-center justify-around"},Xb={class:"text-xs font-medium truncate"},ew=Pt({__name:"MobileBottomNav",setup(e){const t=Ga(),i={"🏠":"home","⚡":"sparkles","🎯":"beaker","📚":"collection"},n=o=>i[o]||"home";return(o,s)=>{const r=To("router-link");return ke(),Qe("div",Qb,[Re("nav",Zb,[(ke(!0),Qe(Oe,null,qs(be(t).modules,a=>(ke(),Ft(r,{key:a.id,to:a.path,class:bi(["flex flex-col items-center justify-center min-w-0 flex-1 py-1 px-1 text-center transition-colors duration-150 ease-in-out",[be(t).currentModule===a.id?"text-blue-600":"text-gray-600"]]),onClick:l=>be(t).setCurrentModule(a.id)},{default:vo(()=>[fe(Gr,{name:n(a.icon),class:"mb-1"},null,8,["name"]),Re("span",Xb,yo(a.name),1)]),_:2},1032,["to","class","onClick"]))),128))])])}}}),tw={class:"h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col overflow-hidden"},iw={class:"flex-1 flex flex-col min-h-0 overflow-hidden"},nw=Pt({__name:"MobileLayout",setup(e){return(t,i)=>{const n=To("router-view");return ke(),Qe("div",tw,[Re("div",iw,[fe(n)]),fe(ew)])}}}),ow=Ks("notification",()=>{const e=he([]),t=a=>{const l=Date.now().toString(),u={id:l,...a,duration:a.duration??3e3};return e.value.push(u),u.duration&&u.duration>0&&setTimeout(()=>{i(l)},u.duration),l},i=a=>{const l=e.value.findIndex(u=>u.id===a);l>-1&&e.value.splice(l,1)};return{notifications:e,addNotification:t,removeNotification:i,success:(a,l)=>t({message:a,type:"success",duration:l}),error:(a,l)=>t({message:a,type:"error",duration:l}),warning:(a,l)=>t({message:a,type:"warning",duration:l}),info:(a,l)=>t({message:a,type:"info",duration:l})}});/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sw=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,n)=>n?n.toUpperCase():i.toLowerCase()),rw=e=>{const t=sw(e);return t.charAt(0).toUpperCase()+t.slice(1)},aw=(...e)=>e.filter((t,i,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===i).join(" ").trim(),xc=e=>e==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=({name:e,iconNode:t,absoluteStrokeWidth:i,"absolute-stroke-width":n,strokeWidth:o,"stroke-width":s,size:r=Bn.width,color:a=Bn.stroke,...l},{slots:u})=>Fe("svg",{...Bn,...l,width:r,height:r,stroke:a,"stroke-width":xc(i)||xc(n)||i===!0||n===!0?Number(o||s||Bn["stroke-width"])*24/Number(r):o||s||Bn["stroke-width"],class:aw("lucide",l.class,...e?[`lucide-${Pc(rw(e))}-icon`,`lucide-${Pc(e)}`]:["lucide-icon"])},[...t.map(c=>Fe(...c)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=(e,t)=>(i,{slots:n,attrs:o})=>Fe(lw,{...o,...i,iconNode:t,name:e},n);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=xo("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=xo("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=xo("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=xo("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=xo("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),dw={class:"fixed top-4 right-4 z-50 space-y-2"},fw={class:"p-4"},mw={class:"flex items-start"},gw={class:"flex-shrink-0"},yw={class:"ml-3 flex-1 min-w-0"},vw={class:"text-sm font-medium break-words"},bw={class:"ml-4 flex-shrink-0"},ww=["onClick"],Tw=Pt({__name:"NotificationContainer",setup(e){const t=ow(),i=o=>{switch(o){case"success":return"bg-green-50 border border-green-200 text-green-800";case"error":return"bg-red-50 border border-red-200 text-red-800";case"warning":return"bg-yellow-50 border border-yellow-200 text-yellow-800";case"info":return"bg-blue-50 border border-blue-200 text-blue-800";default:return"bg-gray-50 border border-gray-200 text-gray-800"}},n=o=>{switch(o){case"success":return cw;case"error":return uw;case"warning":return hw;case"info":return _c;default:return _c}};return(o,s)=>(ke(),Qe("div",dw,[(ke(!0),Qe(Oe,null,qs(be(t).notifications,r=>(ke(),Qe("div",{key:r.id,class:bi([["max-w-md w-full shadow-lg rounded-lg pointer-events-auto overflow-hidden",i(r.type)],"transform transition-all duration-300 ease-in-out"])},[Re("div",fw,[Re("div",mw,[Re("div",gw,[(ke(),Ft(da(n(r.type)),{class:"h-5 w-5"}))]),Re("div",yw,[Re("p",vw,yo(r.message),1)]),Re("div",bw,[Re("button",{onClick:a=>be(t).removeNotification(r.id),class:"inline-flex text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"},[fe(be(pw),{class:"h-4 w-4"})],8,ww)])])])],2))),128))]))}}),kw={id:"app"},Sw=Pt({__name:"App",setup(e){const t=xb(),i=Ga(),n=Mp(),o=()=>{i.setMobile(window.innerWidth<1024)},s=()=>{const r=t.currentRoute.value.path,a=i.getModuleByPath(r);a&&i.setCurrentModule(a.id)};return Rn(async()=>{o(),window.addEventListener("resize",o),await n.initialize(),s(),t.afterEach(s)}),wo(()=>{window.removeEventListener("resize",o)}),(r,a)=>(ke(),Qe("div",kw,[be(i).isMobile?(ke(),Ft(nw,{key:1})):(ke(),Ft(Jb,{key:0})),fe(Tw)]))}}),Aw=(e,t)=>{const i=e.__vccOpts||e;for(const[n,o]of t)i[n]=o;return i},Iw=Aw(Sw,[["__scopeId","data-v-4e1d3c1e"]]),Np=Ib({history:eb(),routes:[{path:"/login",name:"login",component:()=>xe(()=>import("./LoginView-BSXPvSeK.js"),__vite__mapDeps([0,1])),meta:{public:!0}},{path:"/auth/callback",name:"auth-callback",component:()=>xe(()=>import("./AuthCallback-BueGHv6m.js"),__vite__mapDeps([2,3])),meta:{public:!0}},{path:"/",redirect:"/generate"},{path:"/generate",name:"generate",component:()=>xe(()=>import("./GenerateModule-BBiWiNqH.js"),__vite__mapDeps([4,5,6,7,8,9]))},{path:"/optimize",name:"optimize",component:()=>xe(()=>import("./OptimizeModule-CFeum7nY.js"),__vite__mapDeps([10,6,9,7,8,11,12]))},{path:"/optimize/:id?",name:"optimize-prompt",component:()=>xe(()=>import("./OptimizeModule-CFeum7nY.js"),__vite__mapDeps([10,6,9,7,8,11,12]))},{path:"/playground",name:"playground",component:()=>xe(()=>import("./PlaygroundModule-CDsmAIln.js").then(e=>e.bd),__vite__mapDeps([13,11,6,14]))},{path:"/library",name:"library",component:()=>xe(()=>import("./LibraryModule-C_8cOqXl.js"),__vite__mapDeps([15,9,16]))}]}),Pw=_b(),$a=ds(Iw);$a.use(Pw);$a.use(Np);Np.beforeEach(async(e,t,i)=>{const{useAuthStore:n}=await xe(async()=>{const{useAuthStore:s}=await Promise.resolve().then(()=>Nb);return{useAuthStore:s}},void 0),o=n();if(e.meta.public){i();return}if(!o.isLoggedIn){i("/login");return}i()});$a.mount("#app");export{fh as A,En as B,ow as C,xe as D,Bb as E,Oe as F,wo as G,X as H,vo as I,Ga as J,wh as K,Tw as L,_n as M,Pg as N,ka as O,ks as P,_w as Q,_f as R,Fs as S,cw as T,Sa as U,vt as V,To as W,pw as X,Gn as Y,Aw as _,xb as a,Re as b,Qe as c,Pt as d,Vo as e,nf as f,wa as g,Pf as h,ke as i,xo as j,Ks as k,fe as l,be as m,bi as n,Rn as o,qs as p,We as q,he as r,xn as s,yo as t,Mp as u,ps as v,Ag as w,Sm as x,Ft as y,$t as z};
