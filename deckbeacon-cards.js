var F=globalThis,j=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),_e=new WeakMap,P=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(j&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=_e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&_e.set(t,e))}return e}toString(){return this.cssText}},ye=r=>new P(typeof r=="string"?r:r+"",void 0,ie),_=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new P(t,r,ie)},$e=(r,e)=>{if(j)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=F.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},re=j?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return ye(t)})(r):r;var{is:Ve,defineProperty:Ge,getOwnPropertyDescriptor:qe,getOwnPropertyNames:We,getOwnPropertySymbols:Ye,getPrototypeOf:Ze}=Object,K=globalThis,be=K.trustedTypes,Je=be?be.emptyScript:"",Xe=K.reactiveElementPolyfillSupport,D=(r,e)=>r,ne={toAttribute(r,e){switch(e){case Boolean:r=r?Je:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},xe=(r,e)=>!Ve(r,e),we={attribute:!0,type:String,converter:ne,reflect:!1,useDefault:!1,hasChanged:xe};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ge(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:n}=qe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){let h=i?.call(this);n?.call(this,o),this.requestUpdate(e,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??we}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let e=Ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let t=this.properties,s=[...We(t),...Ye(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(re(i))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $e(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:ne).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:ne;this._$Em=i;let h=o.fromAttribute(t,n.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(e!==void 0){let o=this.constructor;if(i===!1&&(n=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??xe)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,h=this[i];o!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,n,h)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[D("elementProperties")]=new Map,y[D("finalized")]=new Map,Xe?.({ReactiveElement:y}),(K.reactiveElementVersions??=[]).push("2.1.2");var pe=globalThis,ke=r=>r,V=pe.trustedTypes,Ae=V?V.createPolicy("lit-html",{createHTML:r=>r}):void 0,Pe="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,De="?"+w,Qe=`<${De}>`,C=document,U=()=>C.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",ue=Array.isArray,et=r=>ue(r)||typeof r?.[Symbol.iterator]=="function",oe=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ce=/>/g,A=RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,Me=/"/g,Re=/^(?:script|style|textarea|title)$/i,me=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),l=me(1),gt=me(2),vt=me(3),$=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),Te=new WeakMap,S=C.createTreeWalker(C,129);function Ue(r,e){if(!ue(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ae!==void 0?Ae.createHTML(e):e}var tt=(r,e)=>{let t=r.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",o=R;for(let h=0;h<t;h++){let d=r[h],u,m,p=-1,v=0;for(;v<d.length&&(o.lastIndex=v,m=o.exec(d),m!==null);)v=o.lastIndex,o===R?m[1]==="!--"?o=Se:m[1]!==void 0?o=Ce:m[2]!==void 0?(Re.test(m[2])&&(i=RegExp("</"+m[2],"g")),o=A):m[3]!==void 0&&(o=A):o===A?m[0]===">"?(o=i??R,p=-1):m[1]===void 0?p=-2:(p=o.lastIndex-m[2].length,u=m[1],o=m[3]===void 0?A:m[3]==='"'?Me:Ee):o===Me||o===Ee?o=A:o===Se||o===Ce?o=R:(o=A,i=void 0);let b=o===A&&r[h+1].startsWith("/>")?" ":"";n+=o===R?d+Qe:p>=0?(s.push(u),d.slice(0,p)+Pe+d.slice(p)+w+b):d+w+(p===-2?h:b)}return[Ue(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},N=class r{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0,h=e.length-1,d=this.parts,[u,m]=tt(e,t);if(this.el=r.createElement(u,s),S.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=S.nextNode())!==null&&d.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Pe)){let v=m[o++],b=i.getAttribute(p).split(w),z=/([.?@])?(.*)/.exec(v);d.push({type:1,index:n,name:z[2],strings:b,ctor:z[1]==="."?le:z[1]==="?"?ce:z[1]==="@"?de:T}),i.removeAttribute(p)}else p.startsWith(w)&&(d.push({type:6,index:n}),i.removeAttribute(p));if(Re.test(i.tagName)){let p=i.textContent.split(w),v=p.length-1;if(v>0){i.textContent=V?V.emptyScript:"";for(let b=0;b<v;b++)i.append(p[b],U()),S.nextNode(),d.push({type:2,index:++n});i.append(p[v],U())}}}else if(i.nodeType===8)if(i.data===De)d.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(w,p+1))!==-1;)d.push({type:7,index:n}),p+=w.length-1}n++}}static createElement(e,t){let s=C.createElement("template");return s.innerHTML=e,s}};function M(r,e,t=r,s){if(e===$)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,n=L(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=M(r,i._$AS(r,e.values),i,s)),e}var ae=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??C).importNode(t,!0);S.currentNode=i;let n=S.nextNode(),o=0,h=0,d=s[0];for(;d!==void 0;){if(o===d.index){let u;d.type===2?u=new H(n,n.nextSibling,this,e):d.type===1?u=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(u=new he(n,this,e)),this._$AV.push(u),d=s[++h]}o!==d?.index&&(n=S.nextNode(),o++)}return S.currentNode=C,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},H=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),L(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):et(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=N.createElement(Ue(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let n=new ae(i,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=Te.get(e.strings);return t===void 0&&Te.set(e.strings,t=new N(e)),t}k(e){ue(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let n of e)i===t.length?t.push(s=new r(this.O(U()),this.O(U()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=ke(e).nextSibling;ke(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(e,t=this,s,i){let n=this.strings,o=!1;if(n===void 0)e=M(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==$,o&&(this._$AH=e);else{let h=e,d,u;for(e=n[0],d=0;d<n.length-1;d++)u=M(this,h[s+d],t,d),u===$&&(u=this._$AH[d]),o||=!L(u)||u!==this._$AH[d],u===c?e=c:e!==c&&(e+=(u??"")+n[d+1]),this._$AH[d]=u}o&&!i&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},le=class extends T{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}},ce=class extends T{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}},de=class extends T{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??c)===$)return;let s=this._$AH,i=e===c&&s!==c||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},he=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}};var st=pe.litHtmlPolyfillSupport;st?.(N,H),(pe.litHtmlVersions??=[]).push("3.3.3");var Le=(r,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=t?.renderBefore??null;s._$litPart$=i=new H(e.insertBefore(U(),n),n,void 0,t??{})}return i._$AI(r),i};var fe=globalThis,x=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};x._$litElement$=!0,x.finalized=!0,fe.litElementHydrateSupport?.({LitElement:x});var it=fe.litElementPolyfillSupport;it?.({LitElement:x});(fe.litElementVersions??=[]).push("4.2.2");var G,Ne="",ge=new Map,He=new Map;function q(r,e){return(!G||e!==Ne)&&(Ne=e,G=r.callWS({type:"deckbeacon/devices"}).then(t=>t.devices).catch(t=>{throw G=void 0,t})),G}function Be(r,e,t){let s=ge.get(e);if(s&&s.revision===t)return s.promise;let i=r.callWS({type:"deckbeacon/library",device_id:e});return i.catch(()=>ge.delete(e)),ge.set(e,{revision:t,promise:i}),i}function Oe(r,e,t,s){let i=`${e}/${t}/${s}`,n=He.get(i);return n||(n=r.callWS({type:"deckbeacon/artwork_url",device_id:e,app_id:t,kind:s}).then(o=>o.url).catch(()=>{}),He.set(i,n)),n}var B='<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900"><rect width="600" height="900" fill="#1B2635"/><rect x="25" y="25" width="550" height="850" rx="22" fill="none" stroke="#344357" stroke-width="3"/><g transform="translate(204 290) scale(2)"><path d="M48 16 59 29 48 42 37 29Z" fill="#586B7E"/><path d="M30 17C21 24 21 35 30 42M66 17C75 24 75 35 66 42" fill="none" stroke="#3B4C60" stroke-width="7" stroke-linecap="round"/><path d="M16 9C2 23 2 42 16 56M80 9C94 23 94 42 80 56" fill="none" stroke="#3B4C60" stroke-width="6" stroke-linecap="round"/><path d="M48 44V68M31 76H65M37 68H59" fill="none" stroke="#586B7E" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g><text x="300" y="605" text-anchor="middle" font-family="Manrope, sans-serif" font-weight="700" font-size="29" fill="#8998A8">NO ARTWORK</text><text x="300" y="649" text-anchor="middle" font-family="Manrope, sans-serif" font-size="19" fill="#5C6E81">DeckBeacon</text></svg>';var Ie='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true" focusable="false" viewBox="0 0 96 96"><path d="M48 16 59 29 48 42 37 29Z" fill="currentColor"/><path d="M30 17C21 24 21 35 30 42M66 17C75 24 75 35 66 42" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M16 9C2 23 2 42 16 56M80 9C94 23 94 42 80 56" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M48 44V68M31 76H65M37 68H59" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>',O=r=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`;function W(r){if(!Number.isFinite(r)||r<0)return"";let e=Math.round(r),t=Math.floor(e/3600),s=Math.floor(e%3600/60);return t>0?`${t} h ${s} min`:s>0?`${s} min`:`${e} s`}function ze(r){if(!Number.isFinite(r)||r<=0)return"";let e=r/1e6;return e>=1?`${e.toFixed(1)} MB/s`:`${(r/1e3).toFixed(0)} kB/s`}function k(r,e=Date.now()){if(!r)return"";let t=Date.parse(r);if(Number.isNaN(t))return"";let s=Math.round((e-t)/1e3);return s<60?"just now":s<3600?`${Math.floor(s/60)} min ago`:s<86400?`${Math.floor(s/3600)} h ago`:`${Math.floor(s/86400)} d ago`}var Fe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Z=r=>(...e)=>({_$litDirective$:r,values:e}),Y=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var E=class extends Y{constructor(e){if(super(e),this.it=c,e.type!==Fe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===c||e==null)return this._t=void 0,this.it=e;if(e===$)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};E.directiveName="unsafeHTML",E.resultType=1;var Nt=Z(E);var I=class extends E{};I.directiveName="unsafeSVG",I.resultType=2;var je=Z(I);var a={connected:"connected",connection:"connection",power:"power_state",lastSeen:"last_seen",game:"game_current_name",appId:"game_current_app_id",sessionStarted:"game_session_started_at",sessionDuration:"game_session_duration_s",activityDetails:"game_activity_details",activityState:"game_activity_state",partySize:"game_activity_party_size",partyMax:"game_activity_party_max",uiMode:"steam_ui_mode",sessionType:"session_type",battery:"battery_level",batteryStatus:"battery_status",cpu:"cpu_usage",gpu:"gpu_busy",memory:"memory_used_percent",cpuTemp:"thermal_cpu_c",gpuTemp:"thermal_gpu_c",fan:"fan_rpm",storageFree:"storage_home_free_bytes",dlStatus:"downloads_status",dlName:"downloads_name",dlProgress:"downloads_progress",dlRate:"downloads_rate_bps",dlEta:"downloads_eta_s",updates:"library_updates",games:"library_games",shortcuts:"library_shortcuts",picker:"game_to_launch",launch:"launch_game"},rt=[["game_activity_","game.activity"],["downloads_","downloads.status"],["steam_ui_mode","steam.ui_mode"],["session_type","session.type"],["game_","game.current"],["library_","game.library"]],f=class extends x{constructor(){super(...arguments);this._deviceKey=""}static{this.properties={hass:{attribute:!1},_config:{state:!0},_device:{state:!0},_error:{state:!0}}}setConfig(t){if(!t||typeof t!="object")throw new Error("Invalid configuration");if(t.device_id!==void 0&&typeof t.device_id!="string")throw new Error("device_id must be a string");this._config=t,this._deviceKey=""}static getConfigForm(){return{schema:[{name:"device_id",selector:{device:{integration:"deckbeacon"}}},{name:"title",selector:{text:{}}}],computeLabel:t=>({device_id:"DeckBeacon device",title:"Title (optional)"})[t.name]??t.name}}getCardSize(){return 3}willUpdate(t){if(!t.has("hass")||!this.hass)return;let s=this._refreshKey();s!==this._deviceKey&&(this._deviceKey=s,q(this.hass,s).then(i=>{let n=this._config?.device_id;this._device=n?i.find(o=>o.device_id===n):i[0],this._error=this._device?void 0:i.length?"Device not found":"No DeckBeacon devices",this._deviceKey=this._refreshKey()}).catch(()=>{this._error="DeckBeacon integration not loaded"}))}_refreshKey(){let t=Object.values(this._device?.entities??{}),s=[a.connection,a.power,a.appId,a.dlStatus,a.games,a.shortcuts,a.uiMode,a.sessionType].map(i=>this._device?.entities[i]);return[this._config?.device_id??"",t.length,...s.map(i=>i?this.hass?.states[i]?.state:"")].join("|")}entity(t){let s=this._device?.entities[t];return s?this.hass?.states[s]:void 0}has(t){let s=this.entity(t)?.state;return s!==void 0&&s!=="unavailable"&&s!=="unknown"}value(t){return this.has(t)?this.entity(t).state:void 0}num(t){let s=Number(this.value(t));return this.has(t)&&Number.isFinite(s)?s:void 0}display(t){let s=this.entity(t);return!s||!this.has(t)?this.explain(t):this.hass?.formatEntityState?this.hass.formatEntityState(s):s.state}explain(t){let s=this._device;if(!s)return"";if(!s.connected)return"Device offline";let i=rt.find(([h])=>t.startsWith(h))?.[1],n=i?s.capabilities.find(h=>h.id===i):void 0;if(n&&n.status==="unsupported")return"Not supported on this device";if(n&&n.status==="disabled")return"Turned off on the device";if(!s.entities[t])return"Not reported by this device";let o=s.reasons[t];return o?o.charAt(0).toUpperCase()+o.slice(1):"No data"}cardTitle(t){return this._config?.title||t}header(t,s){return l`<div class="header">
      <span style="width:22px;height:22px;color:var(--primary-color);flex:none" aria-hidden="true">${je(Ie)}</span>
      <span class="grow">${this.cardTitle(t)}</span>
      ${s??c}
    </div>`}connectionChip(){let t=this._device;if(!t)return l``;if(!t.connected){let s=this.entity(a.lastSeen)?.state;return l`<span class="chip off" title=${s?`Last seen ${k(s)}`:""}>Offline</span>`}return l`<span class="chip ok">${t.transport==="remote"?"Remote":"Local"}</span>`}renderState(){if(this._error)return l`<ha-card><div class="content note" role="status">${this._error}</div></ha-card>`;if(!this._device||!this.hass)return l`<ha-card><div class="content note" role="status">Loading…</div></ha-card>`}};var g=_`
  :host {
    display: block;
  }
  ha-card {
    height: 100%;
    overflow: hidden;
  }
  .content {
    padding: 16px;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.1em;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 12px;
  }
  .header .grow {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .muted {
    color: var(--secondary-text-color);
  }
  .small {
    font-size: 0.875em;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8em;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
    color: var(--primary-text-color);
    white-space: nowrap;
  }
  .chip.ok {
    background: color-mix(in srgb, var(--success-color, #43a047) 20%, transparent);
  }
  .chip.warn {
    background: color-mix(in srgb, var(--warning-color, #ffa600) 25%, transparent);
  }
  .chip.off {
    background: color-mix(in srgb, var(--error-color, #db4437) 20%, transparent);
  }
  .rows {
    display: grid;
    gap: 8px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: baseline;
  }
  .row .label {
    color: var(--secondary-text-color);
  }
  .row .value {
    color: var(--primary-text-color);
    text-align: end;
    font-variant-numeric: tabular-nums;
  }
  .note {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    font-style: italic;
  }
  .bar {
    height: 8px;
    border-radius: 4px;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.2));
    overflow: hidden;
  }
  .bar > div {
    height: 100%;
    background: var(--primary-color);
    transition: width 0.4s ease;
  }
  button {
    font: inherit;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
    background: transparent;
    color: var(--primary-text-color);
    padding: 6px 12px;
    min-height: 36px;
  }
  button.primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
    color: var(--secondary-text-color);
    font-size: 0.85em;
    text-align: center;
    padding: 8px;
    box-sizing: border-box;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
  @media (prefers-reduced-motion: reduce) {
    .bar > div {
      transition: none;
    }
  }
`;var nt={on:"On",suspended:"Asleep",shutting_down:"Shutting down",rebooting:"Restarting",off:"Off",unknown:"Unknown"},ot={gaming:"Gaming Mode",desktop:"Desktop Mode"},at={gamepad:"Gamepad UI",desktop:"Desktop UI",unknown:"Unknown"},J=class extends f{static{this.styles=g}render(){let e=this.renderState();if(e)return e;let t=this._device,s=t.power_state,i=this.num(a.battery),n=[["Power",nt[s]??s],["Session",this.has(a.sessionType)?ot[this.value(a.sessionType)]??this.value(a.sessionType):this.explain(a.sessionType)],["Steam UI",this.has(a.uiMode)?at[this.value(a.uiMode)]??this.value(a.uiMode):this.explain(a.uiMode)],["CPU temperature",this.display(a.cpuTemp)],["GPU temperature",this.display(a.gpuTemp)],["Free storage",this.display(a.storageFree)]];return t.connected||n.push(["Last seen",k(this.entity(a.lastSeen)?.state)||"Unknown"]),l`<ha-card>
      <div class="content">
        ${this.header(t.name,this.connectionChip())}
        ${i!==void 0?l`<div class="rows" style="margin-bottom:12px">
              <div class="row"><span class="label">Battery</span><span class="value">${i}%${this.has(a.batteryStatus)?l` · ${this.value(a.batteryStatus)}`:c}</span></div>
              <div class="bar" role="progressbar" aria-label="Battery" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${i}><div style="width:${i}%"></div></div>
            </div>`:c}
        <div class="rows">
          ${n.map(([o,h])=>l`<div class="row"><span class="label">${o}</span><span class="value">${h}</span></div>`)}
        </div>
      </div>
    </ha-card>`}};var lt={idle:"Idle",downloading:"Downloading",paused:"Paused",installing:"Installing",updating:"Updating",verifying:"Verifying",update_required:"Update required",uninstalling:"Uninstalling",files_missing:"Files missing",installed:"Installed"},X=class extends f{static{this.styles=g}render(){let e=this.renderState();if(e)return e;let t=this.value(a.dlStatus),s=t!==void 0&&t!=="idle",i=this.num(a.dlProgress),n=this.num(a.dlRate),o=this.num(a.dlEta),h=this.num(a.updates),d=this.entity(a.dlRate)?.attributes.unit_of_measurement;return l`<ha-card>
      <div class="content">
        ${this.header("Downloads",h?l`<span class="chip warn">${h} update${h===1?"":"s"}</span>`:void 0)}
        ${this.has(a.dlStatus)?s?l`<div class="rows">
                <div class="row"><span class="value" style="text-align:start;font-weight:500">${this.value(a.dlName)??"Unknown game"}</span><span class="chip">${lt[t]??t}</span></div>
                ${i!==void 0?l`<div class="bar" role="progressbar" aria-label="Download progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${i}><div style="width:${i}%"></div></div>
                      <div class="row small"><span class="label">${i.toFixed(1)}%</span><span class="value">${t==="paused"?"Paused":c}</span></div>`:c}
                <div class="row"><span class="label">Speed</span><span class="value">${n!==void 0?d==="B/s"?ze(n):this.display(a.dlRate):this.explain(a.dlRate)}</span></div>
                <div class="row"><span class="label">Time remaining</span><span class="value">${o!==void 0?this._eta(o):this.explain(a.dlEta)}</span></div>
              </div>`:l`<p class="muted" role="status">No downloads in progress</p>`:l`<p class="note" role="status">${this.explain(a.dlStatus)}</p>`}
      </div>
    </ha-card>`}_eta(e){let t=this.entity(a.dlEta)?.attributes.unit_of_measurement,s=t==="min"?e*60:t==="h"?e*3600:t==="d"?e*86400:e;return W(s)}};var Q=class extends f{constructor(){super(...arguments);this._query="";this._filter="all";this._sort="name";this._libKey=""}static{this.properties={...f.properties,_lib:{state:!0},_query:{state:!0},_filter:{state:!0},_sort:{state:!0},_confirm:{state:!0},_status:{state:!0}}}static{this.styles=[g,_`
      .controls {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 12px;
      }
      input,
      select {
        font: inherit;
        color: var(--primary-text-color);
        background: var(--secondary-background-color, transparent);
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
        border-radius: 8px;
        padding: 6px 10px;
        min-height: 36px;
        box-sizing: border-box;
      }
      input {
        flex: 1 1 160px;
        min-width: 0;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
        gap: 12px;
        max-height: var(--deckbeacon-library-height, 560px);
        overflow-y: auto;
        padding: 2px;
      }
      .tile {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
      }
      .tile img {
        width: 100%;
        aspect-ratio: 2 / 3;
        object-fit: cover;
        border-radius: 8px;
        background: var(--secondary-background-color);
        display: block;
      }
      .name {
        font-size: 0.85em;
        line-height: 1.25;
        color: var(--primary-text-color);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      [role="listitem"] {
        display: flex;
      }
      .tile {
        flex: 1;
      }
      .tile > button,
      .tile > .confirm {
        margin-top: auto;
      }
      .tile button {
        padding: 4px 8px;
        min-height: 32px;
        font-size: 0.85em;
      }
      .confirm {
        display: flex;
        gap: 4px;
      }
      .confirm button {
        flex: 1;
      }
      .status {
        font-size: 0.875em;
        min-height: 1.2em;
        margin-bottom: 8px;
      }
      .status.error {
        color: var(--error-color, #db4437);
      }
    `]}static getConfigForm(){let t=f.getConfigForm();return{...t,schema:[...t.schema,{name:"sort",selector:{select:{mode:"dropdown",options:[{value:"name",label:"Name"},{value:"recent",label:"Recently played"}]}}},{name:"show_shortcuts",selector:{boolean:{}}}],computeLabel:s=>({sort:"Default sort",show_shortcuts:"Show non-Steam shortcuts"})[s.name]??t.computeLabel(s)}}getCardSize(){return 8}willUpdate(t){super.willUpdate(t),t.has("_config")&&this._config?.sort==="recent"&&(this._sort="recent");let s=this._device;if(!s||!this.hass)return;let i=`${s.device_id}@${s.library_revision}`;i!==this._libKey&&(this._libKey=i,Be(this.hass,s.device_id,s.library_revision).then(n=>this._lib=n).catch(()=>this._status={kind:"error",text:"Could not load the library"}))}_games(){let t=this._query.trim().toLowerCase(),s=this._config?.show_shortcuts!==!1,i=(this._lib?.games??[]).filter(n=>(this._filter==="all"||n.kind===this._filter)&&(s||n.kind!=="shortcut")&&(!t||n.name.toLowerCase().includes(t)));return this._sort==="recent"&&i.sort((n,o)=>(o.last_played??"").localeCompare(n.last_played??"")||n.name.localeCompare(o.name)),i}async _launch(t){this._confirm=void 0,this._status={kind:"ok",text:`Starting ${t.name}\u2026`};try{await this.hass.callService("deckbeacon","launch_game",{device_id:this._device.device_id,app_id:t.app_id}),this._status={kind:"ok",text:`${t.name} is starting on ${this._device.name}`}}catch(s){this._status={kind:"error",text:s?.message||`Could not start ${t.name}`}}}_tile(t,s){let i=this._confirm===t.app_id,n=t.status==="installed";return l`<div class="tile">
      <img
        loading="lazy"
        decoding="async"
        src=${t.artwork.capsule}
        alt=""
        @error=${o=>o.target.src=O(B)}
      />
      <span class="name" title=${t.name}>${t.name}</span>
      ${t.kind==="shortcut"?l`<span class="muted small">Non-Steam</span>`:t.last_played?l`<span class="muted small">${k(t.last_played)}</span>`:c}
      ${i?l`<div class="confirm" role="group" aria-label=${`Launch ${t.name}?`}>
            <button @click=${()=>this._confirm=void 0} aria-label=${`Cancel launching ${t.name}`}>Cancel</button>
            <button class="primary" @click=${()=>this._launch(t)} aria-label=${`Confirm launch of ${t.name}`}>Launch</button>
          </div>`:l`<button
            ?disabled=${!s||!n}
            title=${s?n?"":`Not ready (${t.status})`:"Launching is not allowed on this connection (DeckBeacon options)"}
            aria-label=${`Launch ${t.name}`}
            @click=${()=>this._confirm=t.app_id}
          >
            Launch
          </button>`}
    </div>`}render(){let t=this.renderState();if(t)return t;let s=!!this._lib?.can_launch&&this._device.connected,i=this._games(),n=this._lib?.games.length??0;return l`<ha-card>
      <div class="content">
        ${this.header("Game library",l`<span class="chip">${n}</span>`)}
        <div class="controls">
          <label class="sr-only" for="q">Search games</label>
          <input id="q" type="search" placeholder="Search" .value=${this._query} @input=${o=>this._query=o.target.value} />
          <label class="sr-only" for="f">Show</label>
          <select id="f" .value=${this._filter} @change=${o=>this._filter=o.target.value}>
            <option value="all">All</option>
            <option value="game">Steam games</option>
            <option value="shortcut">Non-Steam</option>
          </select>
          <label class="sr-only" for="s">Sort</label>
          <select id="s" .value=${this._sort} @change=${o=>this._sort=o.target.value}>
            <option value="name">Name</option>
            <option value="recent">Recently played</option>
          </select>
        </div>
        ${this._device.connected?this._lib&&!this._lib.can_launch?l`<p class="note">Launching is not allowed on the current connection. Change it in the DeckBeacon options.</p>`:c:l`<p class="note">Device offline: showing the last known library. Launching needs the device online.</p>`}
        <div role="status" aria-live="polite" class=${this._status?.kind==="error"?"status error":"status muted"}>${this._status?.text??""}</div>
        ${this._lib?i.length?l`<div class="grid" role="list" aria-label="Games">${i.map(o=>l`<div role="listitem">${this._tile(o,s)}</div>`)}</div>`:l`<p class="muted">No matching games</p>`:l`<p class="muted" role="status">Loading library…</p>`}
      </div>
    </ha-card>`}};var ee=class extends f{static{this.properties={...f.properties,_art:{state:!0},_close:{state:!0},_closeMsg:{state:!0}}}static{this.styles=[g,_`
      .layout {
        display: flex;
        gap: 16px;
        align-items: flex-start;
      }
      .art {
        width: 30%;
        max-width: 160px;
        min-width: 84px;
        aspect-ratio: 2 / 3;
        border-radius: 8px;
        object-fit: cover;
        background: var(--secondary-background-color);
        flex: none;
      }
      .game {
        font-size: 1.3em;
        font-weight: 500;
        color: var(--primary-text-color);
        margin: 0 0 4px;
        overflow-wrap: anywhere;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-top: 12px;
      }
      .actions .msg {
        flex-basis: 100%;
        font-size: 0.875em;
      }
      button.danger {
        border-color: var(--error-color, #db4437);
        color: var(--error-color, #db4437);
      }
      .activity {
        margin-top: 12px;
        padding: 8px 12px;
        border-left: 3px solid var(--primary-color);
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
        border-radius: 0 8px 8px 0;
      }
    `]}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._closeTimer)}async _doClose(e){this._close=e?"forcing":"closing",this._closeMsg=e?"Force closing\u2026":"Closing\u2026";try{await this.hass.callService("deckbeacon","close_game",{device_id:this._device.device_id,force:e})}catch(t){this._close=e?void 0:"stuck",this._closeMsg=t?.message||"Could not close the game";return}clearTimeout(this._closeTimer),this._closeTimer=setTimeout(()=>{this.has(a.appId)&&(this._close==="closing"||this._close==="forcing")&&(this._close="stuck",this._closeMsg=e?"The game is still running.":"The game didn't close.")},e?12e3:25e3)}_actions(){let e=this._device;if(!e.connected||!e.can_launch)return c;let t=this.value(a.game)??"the game";switch(this._close){case"confirm":return l`<div class="actions" role="group" aria-label=${`Close ${t}?`}>
          <span class="msg">Close ${t}? Unsaved progress may be lost.</span>
          <button @click=${()=>this._close=void 0}>Cancel</button>
          <button class="primary" @click=${()=>this._doClose(!1)}>Close game</button>
        </div>`;case"force-confirm":return l`<div class="actions" role="group" aria-label=${`Force close ${t}?`}>
          <span class="msg">Force close ends ${t} immediately. Unsaved progress will be lost.</span>
          <button @click=${()=>this._close="stuck"}>Cancel</button>
          <button class="danger" @click=${()=>this._doClose(!0)}>Force close</button>
        </div>`;case"closing":case"forcing":return l`<div class="actions" role="status"><span class="msg muted">${this._closeMsg}</span></div>`;case"stuck":return l`<div class="actions">
          <span class="msg" role="status">${this._closeMsg}</span>
          <button @click=${()=>this._doClose(!1)}>Try again</button>
          <button class="danger" @click=${()=>this._close="force-confirm"}>Force close…</button>
        </div>`;default:return l`<div class="actions"><button @click=${()=>this._close="confirm"} aria-label=${`Close game: ${t}`}>Close game</button></div>`}}getCardSize(){return 4}updated(){let e=this.num(a.appId);e===void 0&&this._close&&(this._close=void 0,clearTimeout(this._closeTimer));let t=e?`${this._device?.device_id}/${e}`:void 0;t!==this._artFor&&(this._artFor=t,this._art=void 0,e&&this.hass&&this._device&&Oe(this.hass,this._device.device_id,e,"capsule").then(s=>{this._artFor===t&&(this._art=s)}))}render(){let e=this.renderState();if(e)return e;let t=this.has(a.appId),s=t?this.value(a.game)??`App ${this.value(a.appId)}`:void 0,i=this.value(a.activityDetails),n=this.value(a.activityState),o=this.num(a.partySize),h=this.num(a.partyMax),d=this.num(a.sessionDuration);return l`<ha-card>
      <div class="content">
        ${this.header("Now playing",this.connectionChip())}
        ${t?l`<div class="layout">
              <img
                class="art"
                src=${this._art??O(B)}
                alt=${this._art?`${s} artwork`:""}
                @error=${u=>u.target.src=O(B)}
              />
              <div style="min-width:0;flex:1">
                <p class="game">${s}</p>
                <div class="muted small">
                  ${d!==void 0?l`Playing for ${W(d)}`:c}
                  ${this.has(a.sessionStarted)?l` · started ${k(this.value(a.sessionStarted))}`:c}
                </div>
                ${i||n?l`<div class="activity" aria-label="Game activity">
                      ${i?l`<div>${i}</div>`:c}
                      ${n?l`<div class="muted small">${n}${h?l` · party ${o??0} of ${h}`:c}</div>`:c}
                    </div>`:c}
                ${this._actions()}
              </div>
            </div>`:l`<p class="muted" role="status">${this._device.connected?"Not playing":"Device offline"}</p>`}
      </div>
    </ha-card>`}};var Ke=[{key:a.cpu,label:"CPU"},{key:a.gpu,label:"GPU"},{key:a.memory,label:"Memory"}],ct=[{key:a.cpuTemp,label:"CPU temperature"},{key:a.gpuTemp,label:"GPU temperature"},{key:a.fan,label:"Fan"}],te=class extends f{constructor(){super(...arguments);this._trend=new Map;this._stamp=new Map}static{this.styles=[g,_`
      .meter {
        display: grid;
        grid-template-columns: 5.5em 1fr 3.5em;
        gap: 8px;
        align-items: center;
      }
      svg.spark {
        width: 100%;
        height: 18px;
        display: block;
        color: var(--primary-color);
      }
    `]}willUpdate(t){if(super.willUpdate(t),!!t.has("hass"))for(let{key:s}of Ke){let i=this.num(s),n=this.entity(s)?.last_updated;if(i===void 0||!n||this._stamp.get(s)===n)continue;this._stamp.set(s,n);let o=this._trend.get(s)??[];o.push(i),o.length>60&&o.shift(),this._trend.set(s,o)}}_spark(t){if(t.length<2)return c;let s=100/(t.length-1),i=t.map((n,o)=>`${o?"L":"M"}${(o*s).toFixed(1)},${(18-Math.min(100,Math.max(0,n))/100*16-1).toFixed(1)}`).join(" ");return l`<svg class="spark" viewBox="0 0 100 18" preserveAspectRatio="none" aria-hidden="true"><path d=${i} fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke" /></svg>`}render(){let t=this.renderState();return t||l`<ha-card>
      <div class="content">
        ${this.header("Performance",this.connectionChip())}
        <div class="rows">
          ${Ke.map(({key:s,label:i})=>{let n=this.num(s);return l`<div class="meter">
              <span class="label muted">${i}</span>
              ${n!==void 0?l`<div>
                    <div class="bar" role="progressbar" aria-label=${i} aria-valuemin="0" aria-valuemax="100" aria-valuenow=${Math.round(n)}><div style="width:${Math.min(100,n)}%"></div></div>
                    ${this._spark(this._trend.get(s)??[])}
                  </div>`:l`<span class="note">${this.explain(s)}</span>`}
              <span class="value" style="text-align:end">${n!==void 0?`${Math.round(n)}%`:""}</span>
            </div>`})}
          ${ct.map(({key:s,label:i})=>l`<div class="row"><span class="label">${i}</span><span class="value">${this.display(s)}</span></div>`)}
        </div>
      </div>
    </ha-card>`}};var dt=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"device",se=class extends HTMLElement{static async generate(e,t){let s=await q(t,`strategy-${Date.now()}`);if(!s.length)return{title:"DeckBeacon",views:[{title:"DeckBeacon",cards:[{type:"markdown",content:"No DeckBeacon devices yet. Pair one from **Settings \u2192 Devices & services**."}]}]};let i=new Set;return{title:"DeckBeacon",views:s.map(n=>{let o=dt(n.name);for(;i.has(o);)o+="-2";i.add(o);let h=(d,u={})=>({type:`custom:deckbeacon-${d}-card`,device_id:n.device_id,...u});return{title:n.name,path:o,icon:"mdi:gamepad-variant",type:"sections",max_columns:3,sections:[{type:"grid",cards:[h("now-playing"),h("device")]},{type:"grid",cards:[h("downloads"),h("performance")]},{type:"grid",column_span:2,cards:[h("library")]}]}})}}};var ht=[["deckbeacon-device-card",J,"DeckBeacon device","Connection, power, session and temperatures of a SteamOS device."],["deckbeacon-now-playing-card",ee,"DeckBeacon now playing","Current game with Steam artwork, session time and Rich Presence activity."],["deckbeacon-downloads-card",X,"DeckBeacon downloads","Steam download progress, speed and time remaining."],["deckbeacon-library-card",Q,"DeckBeacon game library","Installed games with artwork; search and launch with confirmation."],["deckbeacon-performance-card",te,"DeckBeacon performance","CPU, GPU and memory usage with trends, temperatures and fan."]],ve=window;ve.customCards=ve.customCards||[];for(let[r,e,t,s]of ht)customElements.get(r)||(customElements.define(r,e),ve.customCards.push({type:r,name:t,description:s,preview:!1,documentationURL:"https://github.com/Jafesu/DeckBeacon"}));customElements.get("ll-strategy-dashboard-deckbeacon")||customElements.define("ll-strategy-dashboard-deckbeacon",se);console.info("%c DECKBEACON-CARDS %c 0.2.0 ","color:#101B2C;background:#24D6C5;font-weight:700","color:#24D6C5;background:#101B2C");
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
