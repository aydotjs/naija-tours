(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var n,o=e.attr,i=e.size,l=e.title,u=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},6434:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(9),o=n(1597),i=(0,r.default)(o.Link).withConfig({displayName:"Button",componentId:"sc-1t76fnu-0"})(["background:",";white-space:nowrap;padding:",";color:#fff;font-size:",";outline:none;border:none;min-width:100px;cursor:pointer;text-decoration:none;transition:0.3s !important;border-radius:",";&:hover{background:",";transform:translateY(-2px);}"],(function(e){return e.primary?"#F26A2E":"#077BF1"}),(function(e){return e.big?"16px":"10px 32px"}),(function(e){return e.big?"20px":"16px"}),(function(e){return e.round?"50px":"none"}),(function(e){return e.primary?"#077BF1":"#F26A2E"}))},5408:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(7294),o=n(9),i=n(1597),a=function(){return r.createElement(c,null,r.createElement(l,null,r.createElement(u,null,r.createElement("h1",null,"Explore"),r.createElement("p",null,"we strive to create the best experience for our customers")),r.createElement(s,null,r.createElement(p,null,"Contact us"),r.createElement(d,null,"Support"),r.createElement(d,null,"Sponsorship"),r.createElement(d,null,"Destination"))),r.createElement(l,null,r.createElement(s,null,r.createElement(p,null,"Videos"),r.createElement(d,null,"Submit Videos"),r.createElement(d,null,"Agency"),r.createElement(d,null,"Ambassadors")),r.createElement(s,null,r.createElement(p,null,"Social Media"),r.createElement(d,null,"Instagram"),r.createElement(d,null,"Facebook"),r.createElement(d,null,"Youtube"))),r.createElement("h4",null,"© codeay. 2022"))},c=o.default.div.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-1xqajj9-0"})(["background-color:#fafafb;padding:5rem calc((100vw - 1100px) / 2);display:grid;grid-template-columns:repeat(2,1fr);color:#000;h4{padding-top:5rem;}"]),l=o.default.div.withConfig({displayName:"Footer__FooterLinksWrapper",componentId:"sc-1xqajj9-1"})(["display:grid;grid-template-columns:repeat(2,1fr);@media screen and (max-width:820px){grid-template-columns:1fr;}"]),u=o.default.div.withConfig({displayName:"Footer__FooterDesc",componentId:"sc-1xqajj9-2"})(["padding:0 2rem;h1{margin-bottom:3rem;color:#f26a2e;}@media screen and (max-width:480px){padding:1rem;}"]),s=o.default.div.withConfig({displayName:"Footer__FooterLinkItems",componentId:"sc-1xqajj9-3"})(["display:flex;flex-direction:column;align-items:flex-start;padding:1rem 2rem;@media screen and (max-width:400px){padding:1rem;}"]),p=o.default.h2.withConfig({displayName:"Footer__FooterLinkTitle",componentId:"sc-1xqajj9-4"})(["font-size:14px;margin-bottom:16px;"]),d=(0,o.default)(i.Link).withConfig({displayName:"Footer__FooterLink",componentId:"sc-1xqajj9-5"})(["text-decoration:none;margin-bottom:0.5rem;font-size:14px;color:#3d3d4e;&:hover{color:#f26a2e;transition:0.3s ease-out;}"]),f=n(3201),m=[{title:"About",link:"/about"},{title:"Trips",link:"/trips"},{title:"Careers",link:"/careers"},{title:"Contact",link:"/contact"}],h=n(6434),y=function(e){var t=e.toggle;return r.createElement(g,null,r.createElement(b,null,"NAIJEXPLORE"),r.createElement(v,{onClick:t},r.createElement(w,null)),r.createElement(T,null,m.map((function(e,t){return r.createElement(b,{to:e.link,key:t},e.title)}))),r.createElement(E,null,r.createElement(h.z,{primary:"true",round:"true",to:"/trips"},"Book a Flight")))},g=o.default.nav.withConfig({displayName:"header__Nav",componentId:"sc-31ozxh-0"})(["background:linear-gradient(180deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.7) 100% ),linear-gradient(180deg,rgba(0,0,0,0.5) 0%,transparent 100%);height:80px;display:flex;justify-content:space-between;padding:0.5rem calc((100vw - 1300px) / 2);z-index:100;position:relative;"]),b=(0,o.default)(i.Link).withConfig({displayName:"header__NavLink",componentId:"sc-31ozxh-1"})(["color:#fff;display:flex;text-decoration:none;cursor:pointer;align-items:center;padding:0 1rem;height:100%;&.active{border-bottom:3px solid #000;transition:all 0.2s ease-in-out;}"]),v=o.default.div.withConfig({displayName:"header__MobileIcon",componentId:"sc-31ozxh-2"})(["display:none;@media screen and (max-width:768px){display:block;position:absolute;top:0;right:0;transform:translate(-100%,60%);font-size:1.8rem;cursor:pointer;color:#fff;}"]),w=(0,o.default)(f.Fm7).withConfig({displayName:"header__Bars",componentId:"sc-31ozxh-3"})(["display:none;color:white;@media screen and (max-width:768px){display:block;position:absolute;top:0;right:0;transform:translate(-100%,75%);font-size:1.8rem;cursor:pointer;}"]),T=o.default.div.withConfig({displayName:"header__NavMenu",componentId:"sc-31ozxh-4"})(["display:flex;align-items:center;@media screen and (max-width:768px){display:none;}"]),E=o.default.div.withConfig({displayName:"header__NavBtn",componentId:"sc-31ozxh-5"})(["display:flex;align-items:center;margin-right:24px;@media screen and (max-width:768px){display:none;}"]),C=(0,o.createGlobalStyle)(["*{font-family:'Montserrat',sans-serif;margin:0;padding:0;box-sizing:border-box;}"]),x=function(e){var t=e.isOpen,n=e.toggle;return r.createElement(O,{isOpen:t,toggle:n},r.createElement(A,{onClick:n},r.createElement(S,null)),r.createElement(k,null,r.createElement(_,null,r.createElement(j,{to:"/about",onClick:n},"About"),r.createElement(j,{to:"/trips",onClick:n},"Trips"),r.createElement(j,{to:"/careers"},"Career"),r.createElement(j,{to:"/contact",onClick:n},"Contact")),r.createElement(I,null,r.createElement(N,{to:"trips"},"Sign up to book a flight"))))},O=o.default.aside.withConfig({displayName:"Sidebar__SidebarContainer",componentId:"sc-2hp16i-0"})(["position:fixed;z-index:999;width:100%;height:100%;background:#0d0d0d;display:grid;align-items:center;top:0;left:0;transition:0.3s ease-in-out;opacity:",";top:",";"],(function(e){return e.isOpen?"100%":"0"}),(function(e){return e.isOpen?"0":"-100%"})),S=(0,o.default)(f.aHS).withConfig({displayName:"Sidebar__CloseIcon",componentId:"sc-2hp16i-1"})(["color:white;"]),A=o.default.div.withConfig({displayName:"Sidebar__Icon",componentId:"sc-2hp16i-2"})(["position:absolute;top:1.2rem;right:1.2rem;background:transparent;font-size:2rem;cursor:pointer;outline:none;"]),k=o.default.div.withConfig({displayName:"Sidebar__SidebarWrapper",componentId:"sc-2hp16i-3"})(["color:white;"]),j=(0,o.default)(i.Link).withConfig({displayName:"Sidebar__SidebarLink",componentId:"sc-2hp16i-4"})(["display:flex;align-items:center;justify-content:center;font-size:1.5rem;list-style:none;transition:0.2s ease-in-out;color:#fff;cursor:pointer;text-decoration:none;&:hover{color:#01bf71;transition:all 0.2s ease-in-out;}"]),_=o.default.ul.withConfig({displayName:"Sidebar__SidebarMenu",componentId:"sc-2hp16i-5"})(["display:grid;grid-template-columns:1fr;grid-template-rows:repeat(6,80px);text-align:center;@media screen and (max-width:480px){grid-template-rows:repeat(6,90px);}"]),I=o.default.div.withConfig({displayName:"Sidebar__SideBtnWrap",componentId:"sc-2hp16i-6"})(["display:flex;justify-content:center;"]),N=(0,o.default)(i.Link).withConfig({displayName:"Sidebar__SidebarRoute",componentId:"sc-2hp16i-7"})(["border-radius:50px;background:#F26A2E;white-space:nowrap;padding:16px 64px;color:#010606;font-size:16px;outline:none;border:none;cursor:pointer;transition:all 0.2s ease-in-out;text-decoration:none;&:hover{transition:all 0.2s ease-in-out;color:#010606;background:white;}"]),L=function(e){var t=e.children,n=(0,r.useState)(!1),o=n[0],i=n[1],c=function(){i(!o)};return r.createElement(r.Fragment,null,r.createElement(C,null),r.createElement(x,{isOpen:o,toggle:c}),r.createElement(y,{toggle:c}),r.createElement("main",null,t),r.createElement(a,null))}},262:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,o,i,a,c=n(7294),l=n(5697),u=n.n(l),s=n(4839),p=n.n(s),d=n(2993),f=n.n(d),m=n(6494),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",x="innerHTML",O="itemprop",S="name",A="property",k="rel",j="src",_="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",L="defer",P="encodeSpecialCharacters",M="onChangeClientState",F="titleTemplate",z=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),R=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,v.TITLE),n=Q(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,N);return t||r||void 0},Z=function(e){return Q(e,M)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==x&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,p=e.title,d=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(p,d);var f={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=pe(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return pe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===x||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===x||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,p=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,o,r),link:de(v.LINK,i,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,l,r),style:de(v.STYLE,u,r),title:de(v.TITLE,{title:p,titleAttributes:d},r)}},me=p()((function(e){return{baseTag:G([E,_],e),bodyAttributes:$(y,e),defer:Q(e,L),encode:Q(e,P),htmlAttributes:$(g,e),linkTags:J(v.LINK,[k,E],e),metaTags:J(v.META,[S,w,C,A,O],e),noscriptTags:J(v.NOSCRIPT,[x],e),onChangeClientState:Z(e),scriptTags:J(v.SCRIPT,[j,x],e),styleTags:J(v.STYLE,[T],e),title:V(e),titleAttributes:$(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return D(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},i)});case v.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=n(1597);function ge(e){var t,n,r=e.description,o=e.lang,i=e.meta,a=e.title,l=(0,ye.useStaticQuery)("63159454").site,u=r||l.siteMetadata.description,s=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(he,{htmlAttributes:{lang:o},title:a,titleTemplate:s?"%s | "+s:null,meta:[{name:"description",content:u},{property:"og:title",content:a},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:u}].concat(i)})}ge.defaultProps={lang:"en",meta:[],description:""};var be=ge}}]);
//# sourceMappingURL=commons-851aba5b5172e23a5782.js.map