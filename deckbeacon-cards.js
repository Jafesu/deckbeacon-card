var F=globalThis,j=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),_t=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(j&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=_t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&_t.set(e,t))}return t}toString(){return this.cssText}},yt=r=>new P(typeof r=="string"?r:r+"",void 0,it),_=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new P(e,r,it)},$t=(r,t)=>{if(j)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=F.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},rt=j?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return yt(e)})(r):r;var{is:Vt,defineProperty:Gt,getOwnPropertyDescriptor:qt,getOwnPropertyNames:Wt,getOwnPropertySymbols:Yt,getPrototypeOf:Zt}=Object,K=globalThis,bt=K.trustedTypes,Jt=bt?bt.emptyScript:"",Xt=K.reactiveElementPolyfillSupport,D=(r,t)=>r,nt={toAttribute(r,t){switch(t){case Boolean:r=r?Jt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},xt=(r,t)=>!Vt(r,t),wt={attribute:!0,type:String,converter:nt,reflect:!1,useDefault:!1,hasChanged:xt};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=qt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let h=i?.call(this);n?.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let e=this.properties,s=[...Wt(e),...Yt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(rt(i))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:nt).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:nt;this._$Em=i;let h=o.fromAttribute(e,n.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){let o=this.constructor;if(i===!1&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??xt)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,h=this[i];o!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,n,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[D("elementProperties")]=new Map,y[D("finalized")]=new Map,Xt?.({ReactiveElement:y}),(K.reactiveElementVersions??=[]).push("2.1.2");var pt=globalThis,At=r=>r,V=pt.trustedTypes,kt=V?V.createPolicy("lit-html",{createHTML:r=>r}):void 0,Pt="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Dt="?"+w,Qt=`<${Dt}>`,E=document,U=()=>E.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",ut=Array.isArray,te=r=>ut(r)||typeof r?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,Et=/>/g,k=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,Mt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,mt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=mt(1),ge=mt(2),ve=mt(3),$=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Tt=new WeakMap,S=E.createTreeWalker(E,129);function Ut(r,t){if(!ut(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(t):t}var ee=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=R;for(let h=0;h<e;h++){let c=r[h],u,m,p=-1,v=0;for(;v<c.length&&(o.lastIndex=v,m=o.exec(c),m!==null);)v=o.lastIndex,o===R?m[1]==="!--"?o=St:m[1]!==void 0?o=Et:m[2]!==void 0?(Rt.test(m[2])&&(i=RegExp("</"+m[2],"g")),o=k):m[3]!==void 0&&(o=k):o===k?m[0]===">"?(o=i??R,p=-1):m[1]===void 0?p=-2:(p=o.lastIndex-m[2].length,u=m[1],o=m[3]===void 0?k:m[3]==='"'?Mt:Ct):o===Mt||o===Ct?o=k:o===St||o===Et?o=R:(o=k,i=void 0);let b=o===k&&r[h+1].startsWith("/>")?" ":"";n+=o===R?c+Qt:p>=0?(s.push(u),c.slice(0,p)+Pt+c.slice(p)+w+b):c+w+(p===-2?h:b)}return[Ut(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},N=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,h=t.length-1,c=this.parts,[u,m]=ee(t,e);if(this.el=r.createElement(u,s),S.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=S.nextNode())!==null&&c.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Pt)){let v=m[o++],b=i.getAttribute(p).split(w),z=/([.?@])?(.*)/.exec(v);c.push({type:1,index:n,name:z[2],strings:b,ctor:z[1]==="."?lt:z[1]==="?"?ct:z[1]==="@"?dt:T}),i.removeAttribute(p)}else p.startsWith(w)&&(c.push({type:6,index:n}),i.removeAttribute(p));if(Rt.test(i.tagName)){let p=i.textContent.split(w),v=p.length-1;if(v>0){i.textContent=V?V.emptyScript:"";for(let b=0;b<v;b++)i.append(p[b],U()),S.nextNode(),c.push({type:2,index:++n});i.append(p[v],U())}}}else if(i.nodeType===8)if(i.data===Dt)c.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(w,p+1))!==-1;)c.push({type:7,index:n}),p+=w.length-1}n++}}static createElement(t,e){let s=E.createElement("template");return s.innerHTML=t,s}};function M(r,t,e=r,s){if(t===$)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=L(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=M(r,i._$AS(r,t.values),i,s)),t}var at=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??E).importNode(e,!0);S.currentNode=i;let n=S.nextNode(),o=0,h=0,c=s[0];for(;c!==void 0;){if(o===c.index){let u;c.type===2?u=new H(n,n.nextSibling,this,t):c.type===1?u=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(u=new ht(n,this,t)),this._$AV.push(u),c=s[++h]}o!==c?.index&&(n=S.nextNode(),o++)}return S.currentNode=E,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},H=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),L(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==$&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):te(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(Ut(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new at(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=Tt.get(t.strings);return e===void 0&&Tt.set(t.strings,e=new N(t)),e}k(t){ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new r(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=At(t).nextSibling;At(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=M(this,t,e,0),o=!L(t)||t!==this._$AH&&t!==$,o&&(this._$AH=t);else{let h=t,c,u;for(t=n[0],c=0;c<n.length-1;c++)u=M(this,h[s+c],e,c),u===$&&(u=this._$AH[c]),o||=!L(u)||u!==this._$AH[c],u===d?t=d:t!==d&&(t+=(u??"")+n[c+1]),this._$AH[c]=u}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},lt=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},ct=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},dt=class extends T{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??d)===$)return;let s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ht=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}};var se=pt.litHtmlPolyfillSupport;se?.(N,H),(pt.litHtmlVersions??=[]).push("3.3.3");var Lt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new H(t.insertBefore(U(),n),n,void 0,e??{})}return i._$AI(r),i};var ft=globalThis,x=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};x._$litElement$=!0,x.finalized=!0,ft.litElementHydrateSupport?.({LitElement:x});var ie=ft.litElementPolyfillSupport;ie?.({LitElement:x});(ft.litElementVersions??=[]).push("4.2.2");var G,Nt="",gt=new Map,Ht=new Map;function q(r,t){return(!G||t!==Nt)&&(Nt=t,G=r.callWS({type:"deckbeacon/devices"}).then(e=>e.devices).catch(e=>{throw G=void 0,e})),G}function Bt(r,t,e){let s=gt.get(t);if(s&&s.revision===e)return s.promise;let i=r.callWS({type:"deckbeacon/library",device_id:t});return i.catch(()=>gt.delete(t)),gt.set(t,{revision:e,promise:i}),i}function Ot(r,t,e,s){let i=`${t}/${e}/${s}`,n=Ht.get(i);return n||(n=r.callWS({type:"deckbeacon/artwork_url",device_id:t,app_id:e,kind:s}).then(o=>o.url).catch(()=>{}),Ht.set(i,n)),n}var B='<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900"><rect width="600" height="900" fill="#1B2635"/><rect x="25" y="25" width="550" height="850" rx="22" fill="none" stroke="#344357" stroke-width="3"/><g transform="translate(204 290) scale(2)"><path d="M48 16 59 29 48 42 37 29Z" fill="#586B7E"/><path d="M30 17C21 24 21 35 30 42M66 17C75 24 75 35 66 42" fill="none" stroke="#3B4C60" stroke-width="7" stroke-linecap="round"/><path d="M16 9C2 23 2 42 16 56M80 9C94 23 94 42 80 56" fill="none" stroke="#3B4C60" stroke-width="6" stroke-linecap="round"/><path d="M48 44V68M31 76H65M37 68H59" fill="none" stroke="#586B7E" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g><text x="300" y="605" text-anchor="middle" font-family="Manrope, sans-serif" font-weight="700" font-size="29" fill="#8998A8">NO ARTWORK</text><text x="300" y="649" text-anchor="middle" font-family="Manrope, sans-serif" font-size="19" fill="#5C6E81">DeckBeacon</text></svg>';var It='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" aria-hidden="true" focusable="false" viewBox="0 0 96 96"><path d="M48 16 59 29 48 42 37 29Z" fill="currentColor"/><path d="M30 17C21 24 21 35 30 42M66 17C75 24 75 35 66 42" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M16 9C2 23 2 42 16 56M80 9C94 23 94 42 80 56" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M48 44V68M31 76H65M37 68H59" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>',O=r=>`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`;function W(r){if(!Number.isFinite(r)||r<0)return"";let t=Math.round(r),e=Math.floor(t/3600),s=Math.floor(t%3600/60);return e>0?`${e} h ${s} min`:s>0?`${s} min`:`${t} s`}function zt(r){if(!Number.isFinite(r)||r<=0)return"";let t=r/1e6;return t>=1?`${t.toFixed(1)} MB/s`:`${(r/1e3).toFixed(0)} kB/s`}function A(r,t=Date.now()){if(!r)return"";let e=Date.parse(r);if(Number.isNaN(e))return"";let s=Math.round((t-e)/1e3);return s<60?"just now":s<3600?`${Math.floor(s/60)} min ago`:s<86400?`${Math.floor(s/3600)} h ago`:`${Math.floor(s/86400)} d ago`}var Ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Z=r=>(...t)=>({_$litDirective$:r,values:t}),Y=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var C=class extends Y{constructor(t){if(super(t),this.it=d,t.type!==Ft.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this._t=void 0,this.it=t;if(t===$)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};C.directiveName="unsafeHTML",C.resultType=1;var Ne=Z(C);var I=class extends C{};I.directiveName="unsafeSVG",I.resultType=2;var jt=Z(I);var a={connected:"connected",connection:"connection",power:"power_state",lastSeen:"last_seen",game:"game_current_name",appId:"game_current_app_id",sessionStarted:"game_session_started_at",sessionDuration:"game_session_duration_s",activityDetails:"game_activity_details",activityState:"game_activity_state",partySize:"game_activity_party_size",partyMax:"game_activity_party_max",uiMode:"steam_ui_mode",sessionType:"session_type",battery:"battery_level",batteryStatus:"battery_status",cpu:"cpu_usage",gpu:"gpu_busy",memory:"memory_used_percent",cpuTemp:"thermal_cpu_c",gpuTemp:"thermal_gpu_c",fan:"fan_rpm",storageFree:"storage_home_free_bytes",dlStatus:"downloads_status",dlName:"downloads_name",dlProgress:"downloads_progress",dlRate:"downloads_rate_bps",dlEta:"downloads_eta_s",updates:"library_updates",games:"library_games",shortcuts:"library_shortcuts",picker:"game_to_launch",launch:"launch_game"},re=[["game_activity_","game.activity"],["downloads_","downloads.status"],["steam_ui_mode","steam.ui_mode"],["session_type","session.type"],["game_","game.current"],["library_","game.library"]],f=class extends x{constructor(){super(...arguments);this._deviceKey=""}static{this.properties={hass:{attribute:!1},_config:{state:!0},_device:{state:!0},_error:{state:!0}}}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");if(e.device_id!==void 0&&typeof e.device_id!="string")throw new Error("device_id must be a string");this._config=e,this._deviceKey=""}static getConfigForm(){return{schema:[{name:"device_id",selector:{device:{integration:"deckbeacon"}}},{name:"title",selector:{text:{}}}],computeLabel:e=>({device_id:"DeckBeacon device",title:"Title (optional)"})[e.name]??e.name}}getCardSize(){return 3}willUpdate(e){if(!e.has("hass")||!this.hass)return;let s=this._refreshKey();s!==this._deviceKey&&(this._deviceKey=s,q(this.hass,s).then(i=>{let n=this._config?.device_id;this._device=n?i.find(o=>o.device_id===n):i[0],this._error=this._device?void 0:i.length?"Device not found":"No DeckBeacon devices",this._deviceKey=this._refreshKey()}).catch(()=>{this._error="DeckBeacon integration not loaded"}))}_refreshKey(){let e=Object.values(this._device?.entities??{}),s=[a.connection,a.power,a.appId,a.dlStatus,a.games,a.shortcuts,a.uiMode,a.sessionType].map(i=>this._device?.entities[i]);return[this._config?.device_id??"",e.length,...s.map(i=>i?this.hass?.states[i]?.state:"")].join("|")}entity(e){let s=this._device?.entities[e];return s?this.hass?.states[s]:void 0}has(e){let s=this.entity(e)?.state;return s!==void 0&&s!=="unavailable"&&s!=="unknown"}value(e){return this.has(e)?this.entity(e).state:void 0}num(e){let s=Number(this.value(e));return this.has(e)&&Number.isFinite(s)?s:void 0}display(e){let s=this.entity(e);return!s||!this.has(e)?this.explain(e):this.hass?.formatEntityState?this.hass.formatEntityState(s):s.state}explain(e){let s=this._device;if(!s)return"";if(!s.connected)return"Device offline";let i=re.find(([h])=>e.startsWith(h))?.[1],n=i?s.capabilities.find(h=>h.id===i):void 0;if(n&&n.status==="unsupported")return"Not supported on this device";if(n&&n.status==="disabled")return"Turned off on the device";if(!s.entities[e])return"Not reported by this device";let o=s.reasons[e];return o?o.charAt(0).toUpperCase()+o.slice(1):"No data"}cardTitle(e){return this._config?.title||e}header(e,s){return l`<div class="header">
      <span style="width:22px;height:22px;color:var(--primary-color);flex:none" aria-hidden="true">${jt(It)}</span>
      <span class="grow">${this.cardTitle(e)}</span>
      ${s??d}
    </div>`}connectionChip(){let e=this._device;if(!e)return l``;if(!e.connected){let s=this.entity(a.lastSeen)?.state;return l`<span class="chip off" title=${s?`Last seen ${A(s)}`:""}>Offline</span>`}return l`<span class="chip ok">${e.transport==="remote"?"Remote":"Local"}</span>`}renderState(){if(this._error)return l`<ha-card><div class="content note" role="status">${this._error}</div></ha-card>`;if(!this._device||!this.hass)return l`<ha-card><div class="content note" role="status">Loading…</div></ha-card>`}};var g=_`
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
`;var ne={on:"On",suspended:"Asleep",shutting_down:"Shutting down",rebooting:"Restarting",off:"Off",unknown:"Unknown"},oe={gaming:"Gaming Mode",desktop:"Desktop Mode"},ae={gamepad:"Gamepad UI",desktop:"Desktop UI",unknown:"Unknown"},J=class extends f{static{this.styles=g}render(){let t=this.renderState();if(t)return t;let e=this._device,s=e.power_state,i=this.num(a.battery),n=[["Power",ne[s]??s],["Session",this.has(a.sessionType)?oe[this.value(a.sessionType)]??this.value(a.sessionType):this.explain(a.sessionType)],["Steam UI",this.has(a.uiMode)?ae[this.value(a.uiMode)]??this.value(a.uiMode):this.explain(a.uiMode)],["CPU temperature",this.display(a.cpuTemp)],["GPU temperature",this.display(a.gpuTemp)],["Free storage",this.display(a.storageFree)]];return e.connected||n.push(["Last seen",A(this.entity(a.lastSeen)?.state)||"Unknown"]),l`<ha-card>
      <div class="content">
        ${this.header(e.name,this.connectionChip())}
        ${i!==void 0?l`<div class="rows" style="margin-bottom:12px">
              <div class="row"><span class="label">Battery</span><span class="value">${i}%${this.has(a.batteryStatus)?l` · ${this.value(a.batteryStatus)}`:d}</span></div>
              <div class="bar" role="progressbar" aria-label="Battery" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${i}><div style="width:${i}%"></div></div>
            </div>`:d}
        <div class="rows">
          ${n.map(([o,h])=>l`<div class="row"><span class="label">${o}</span><span class="value">${h}</span></div>`)}
        </div>
      </div>
    </ha-card>`}};var le={idle:"Idle",downloading:"Downloading",paused:"Paused",installing:"Installing",updating:"Updating",verifying:"Verifying",update_required:"Update required",uninstalling:"Uninstalling",files_missing:"Files missing",installed:"Installed"},X=class extends f{static{this.styles=g}render(){let t=this.renderState();if(t)return t;let e=this.value(a.dlStatus),s=e!==void 0&&e!=="idle",i=this.num(a.dlProgress),n=this.num(a.dlRate),o=this.num(a.dlEta),h=this.num(a.updates),c=this.entity(a.dlRate)?.attributes.unit_of_measurement;return l`<ha-card>
      <div class="content">
        ${this.header("Downloads",h?l`<span class="chip warn">${h} update${h===1?"":"s"}</span>`:void 0)}
        ${this.has(a.dlStatus)?s?l`<div class="rows">
                <div class="row"><span class="value" style="text-align:start;font-weight:500">${this.value(a.dlName)??"Unknown game"}</span><span class="chip">${le[e]??e}</span></div>
                ${i!==void 0?l`<div class="bar" role="progressbar" aria-label="Download progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${i}><div style="width:${i}%"></div></div>
                      <div class="row small"><span class="label">${i.toFixed(1)}%</span><span class="value">${e==="paused"?"Paused":d}</span></div>`:d}
                <div class="row"><span class="label">Speed</span><span class="value">${n!==void 0?c==="B/s"?zt(n):this.display(a.dlRate):this.explain(a.dlRate)}</span></div>
                <div class="row"><span class="label">Time remaining</span><span class="value">${o!==void 0?this._eta(o):this.explain(a.dlEta)}</span></div>
              </div>`:l`<p class="muted" role="status">No downloads in progress</p>`:l`<p class="note" role="status">${this.explain(a.dlStatus)}</p>`}
      </div>
    </ha-card>`}_eta(t){let e=this.entity(a.dlEta)?.attributes.unit_of_measurement,s=e==="min"?t*60:e==="h"?t*3600:e==="d"?t*86400:t;return W(s)}};var Q=class extends f{constructor(){super(...arguments);this._query="";this._filter="all";this._sort="name";this._libKey=""}static{this.properties={...f.properties,_lib:{state:!0},_query:{state:!0},_filter:{state:!0},_sort:{state:!0},_confirm:{state:!0},_status:{state:!0}}}static{this.styles=[g,_`
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
    `]}static getConfigForm(){let e=f.getConfigForm();return{...e,schema:[...e.schema,{name:"sort",selector:{select:{mode:"dropdown",options:[{value:"name",label:"Name"},{value:"recent",label:"Recently played"}]}}},{name:"show_shortcuts",selector:{boolean:{}}}],computeLabel:s=>({sort:"Default sort",show_shortcuts:"Show non-Steam shortcuts"})[s.name]??e.computeLabel(s)}}getCardSize(){return 8}willUpdate(e){super.willUpdate(e),e.has("_config")&&this._config?.sort==="recent"&&(this._sort="recent");let s=this._device;if(!s||!this.hass)return;let i=`${s.device_id}@${s.library_revision}`;i!==this._libKey&&(this._libKey=i,Bt(this.hass,s.device_id,s.library_revision).then(n=>this._lib=n).catch(()=>this._status={kind:"error",text:"Could not load the library"}))}_games(){let e=this._query.trim().toLowerCase(),s=this._config?.show_shortcuts!==!1,i=(this._lib?.games??[]).filter(n=>(this._filter==="all"||n.kind===this._filter)&&(s||n.kind!=="shortcut")&&(!e||n.name.toLowerCase().includes(e)));return this._sort==="recent"&&i.sort((n,o)=>(o.last_played??"").localeCompare(n.last_played??"")||n.name.localeCompare(o.name)),i}async _launch(e){this._confirm=void 0,this._status={kind:"ok",text:`Starting ${e.name}\u2026`};try{await this.hass.callService("deckbeacon","launch_game",{device_id:this._device.device_id,app_id:e.app_id}),this._status={kind:"ok",text:`${e.name} is starting on ${this._device.name}`}}catch(s){this._status={kind:"error",text:s?.message||`Could not start ${e.name}`}}}_tile(e,s){let i=this._confirm===e.app_id,n=e.status==="installed";return l`<div class="tile">
      <img
        loading="lazy"
        decoding="async"
        src=${e.artwork.capsule}
        alt=""
        @error=${o=>o.target.src=O(B)}
      />
      <span class="name" title=${e.name}>${e.name}</span>
      ${e.kind==="shortcut"?l`<span class="muted small">Non-Steam</span>`:e.last_played?l`<span class="muted small">${A(e.last_played)}</span>`:d}
      ${i?l`<div class="confirm" role="group" aria-label=${`Launch ${e.name}?`}>
            <button @click=${()=>this._confirm=void 0} aria-label=${`Cancel launching ${e.name}`}>Cancel</button>
            <button class="primary" @click=${()=>this._launch(e)} aria-label=${`Confirm launch of ${e.name}`}>Launch</button>
          </div>`:l`<button
            ?disabled=${!s||!n}
            title=${s?n?"":`Not ready (${e.status})`:"Launching is not allowed on this connection (DeckBeacon options)"}
            aria-label=${`Launch ${e.name}`}
            @click=${()=>this._confirm=e.app_id}
          >
            Launch
          </button>`}
    </div>`}render(){let e=this.renderState();if(e)return e;let s=!!this._lib?.can_launch&&this._device.connected,i=this._games(),n=this._lib?.games.length??0;return l`<ha-card>
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
        ${this._device.connected?this._lib&&!this._lib.can_launch?l`<p class="note">Launching is not allowed on the current connection. Change it in the DeckBeacon options.</p>`:d:l`<p class="note">Device offline: showing the last known library. Launching needs the device online.</p>`}
        <div role="status" aria-live="polite" class=${this._status?.kind==="error"?"status error":"status muted"}>${this._status?.text??""}</div>
        ${this._lib?i.length?l`<div class="grid" role="list" aria-label="Games">${i.map(o=>l`<div role="listitem">${this._tile(o,s)}</div>`)}</div>`:l`<p class="muted">No matching games</p>`:l`<p class="muted" role="status">Loading library…</p>`}
      </div>
    </ha-card>`}};var tt=class extends f{static{this.properties={...f.properties,_art:{state:!0}}}static{this.styles=[g,_`
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
      .activity {
        margin-top: 12px;
        padding: 8px 12px;
        border-left: 3px solid var(--primary-color);
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
        border-radius: 0 8px 8px 0;
      }
    `]}getCardSize(){return 4}updated(){let t=this.num(a.appId),e=t?`${this._device?.device_id}/${t}`:void 0;e!==this._artFor&&(this._artFor=e,this._art=void 0,t&&this.hass&&this._device&&Ot(this.hass,this._device.device_id,t,"capsule").then(s=>{this._artFor===e&&(this._art=s)}))}render(){let t=this.renderState();if(t)return t;let e=this.has(a.appId),s=e?this.value(a.game)??`App ${this.value(a.appId)}`:void 0,i=this.value(a.activityDetails),n=this.value(a.activityState),o=this.num(a.partySize),h=this.num(a.partyMax),c=this.num(a.sessionDuration);return l`<ha-card>
      <div class="content">
        ${this.header("Now playing",this.connectionChip())}
        ${e?l`<div class="layout">
              <img
                class="art"
                src=${this._art??O(B)}
                alt=${this._art?`${s} artwork`:""}
                @error=${u=>u.target.src=O(B)}
              />
              <div style="min-width:0;flex:1">
                <p class="game">${s}</p>
                <div class="muted small">
                  ${c!==void 0?l`Playing for ${W(c)}`:d}
                  ${this.has(a.sessionStarted)?l` · started ${A(this.value(a.sessionStarted))}`:d}
                </div>
                ${i||n?l`<div class="activity" aria-label="Game activity">
                      ${i?l`<div>${i}</div>`:d}
                      ${n?l`<div class="muted small">${n}${h?l` · party ${o??0} of ${h}`:d}</div>`:d}
                    </div>`:d}
              </div>
            </div>`:l`<p class="muted" role="status">${this._device.connected?"Not playing":"Device offline"}</p>`}
      </div>
    </ha-card>`}};var Kt=[{key:a.cpu,label:"CPU"},{key:a.gpu,label:"GPU"},{key:a.memory,label:"Memory"}],ce=[{key:a.cpuTemp,label:"CPU temperature"},{key:a.gpuTemp,label:"GPU temperature"},{key:a.fan,label:"Fan"}],et=class extends f{constructor(){super(...arguments);this._trend=new Map;this._stamp=new Map}static{this.styles=[g,_`
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
    `]}willUpdate(e){if(super.willUpdate(e),!!e.has("hass"))for(let{key:s}of Kt){let i=this.num(s),n=this.entity(s)?.last_updated;if(i===void 0||!n||this._stamp.get(s)===n)continue;this._stamp.set(s,n);let o=this._trend.get(s)??[];o.push(i),o.length>60&&o.shift(),this._trend.set(s,o)}}_spark(e){if(e.length<2)return d;let s=100/(e.length-1),i=e.map((n,o)=>`${o?"L":"M"}${(o*s).toFixed(1)},${(18-Math.min(100,Math.max(0,n))/100*16-1).toFixed(1)}`).join(" ");return l`<svg class="spark" viewBox="0 0 100 18" preserveAspectRatio="none" aria-hidden="true"><path d=${i} fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke" /></svg>`}render(){let e=this.renderState();return e||l`<ha-card>
      <div class="content">
        ${this.header("Performance",this.connectionChip())}
        <div class="rows">
          ${Kt.map(({key:s,label:i})=>{let n=this.num(s);return l`<div class="meter">
              <span class="label muted">${i}</span>
              ${n!==void 0?l`<div>
                    <div class="bar" role="progressbar" aria-label=${i} aria-valuemin="0" aria-valuemax="100" aria-valuenow=${Math.round(n)}><div style="width:${Math.min(100,n)}%"></div></div>
                    ${this._spark(this._trend.get(s)??[])}
                  </div>`:l`<span class="note">${this.explain(s)}</span>`}
              <span class="value" style="text-align:end">${n!==void 0?`${Math.round(n)}%`:""}</span>
            </div>`})}
          ${ce.map(({key:s,label:i})=>l`<div class="row"><span class="label">${i}</span><span class="value">${this.display(s)}</span></div>`)}
        </div>
      </div>
    </ha-card>`}};var de=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"device",st=class extends HTMLElement{static async generate(t,e){let s=await q(e,`strategy-${Date.now()}`);if(!s.length)return{title:"DeckBeacon",views:[{title:"DeckBeacon",cards:[{type:"markdown",content:"No DeckBeacon devices yet. Pair one from **Settings \u2192 Devices & services**."}]}]};let i=new Set;return{title:"DeckBeacon",views:s.map(n=>{let o=de(n.name);for(;i.has(o);)o+="-2";i.add(o);let h=(c,u={})=>({type:`custom:deckbeacon-${c}-card`,device_id:n.device_id,...u});return{title:n.name,path:o,icon:"mdi:gamepad-variant",type:"sections",max_columns:3,sections:[{type:"grid",cards:[h("now-playing"),h("device")]},{type:"grid",cards:[h("downloads"),h("performance")]},{type:"grid",column_span:2,cards:[h("library")]}]}})}}};var he=[["deckbeacon-device-card",J,"DeckBeacon device","Connection, power, session and temperatures of a SteamOS device."],["deckbeacon-now-playing-card",tt,"DeckBeacon now playing","Current game with Steam artwork, session time and Rich Presence activity."],["deckbeacon-downloads-card",X,"DeckBeacon downloads","Steam download progress, speed and time remaining."],["deckbeacon-library-card",Q,"DeckBeacon game library","Installed games with artwork; search and launch with confirmation."],["deckbeacon-performance-card",et,"DeckBeacon performance","CPU, GPU and memory usage with trends, temperatures and fan."]],vt=window;vt.customCards=vt.customCards||[];for(let[r,t,e,s]of he)customElements.get(r)||(customElements.define(r,t),vt.customCards.push({type:r,name:e,description:s,preview:!1,documentationURL:"https://github.com/Jafesu/DeckBeacon"}));customElements.get("ll-strategy-dashboard-deckbeacon")||customElements.define("ll-strategy-dashboard-deckbeacon",st);console.info("%c DECKBEACON-CARDS %c 0.1.0 ","color:#101B2C;background:#24D6C5;font-weight:700","color:#24D6C5;background:#101B2C");
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
