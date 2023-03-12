"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{6162:function(e,t,i){var a=i(5318);t.Z=void 0;var n,r=a(i(1506)),l=a(i(5354)),o=a(i(7316)),d=a(i(7154)),s=a(i(7294)),c=a(i(5697)),m=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],u=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,n=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=_([].concat(t.fluid))),t.fixed&&(t.fixed=_([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(w&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,i=e.fixed,a=g(t||i||[]);return a&&a.src},g=function(e){if(w&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},h=Object.create({}),y=function(e){var t=u(e),i=p(t);return h[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,w="undefined"!=typeof window,v=w&&window.IntersectionObserver,x=new WeakMap;function E(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},a&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:r}),i&&s.default.createElement("source",{media:n,srcSet:i,sizes:r}))}))}function _(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function S(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return s.default.createElement("source",{key:t,media:i,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return s.default.createElement("source",{key:t,media:i,srcSet:a})}))}function C(e,t){var i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:i)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var N=function(e,t){var i=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return i&&(i.observe(e),x.set(e,t)),function(){i.unobserve(e),x.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+s+l+o+i+a+t+r+n+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=s.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,l=e.ariaHidden,o=s.default.createElement(z,(0,d.default)({ref:t,src:i},r,{ariaHidden:l}));return a.length>1?s.default.createElement("picture",null,n(a),o):o})),z=s.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,n=e.src,r=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,m);return s.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:i,srcSet:a,src:n},g,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var H=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=w&&y(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&v&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||w&&(b||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn,isHydrated:!1},i.imageRef=s.default.createRef(),i.placeholderRef=t.placeholderRef||s.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)(i)),i.handleRef=i.handleRef.bind((0,r.default)(i)),i}(0,l.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.setState({isHydrated:w}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),(i=p(t))&&(h[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,n=e.style,r=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,m=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,v=e.itemProp,x=e.loading,_=e.draggable,C=p||h;if(!C)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,d.default)({opacity:N?1:0,transition:H?"opacity "+b+"ms":"none"},o),O="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},q=(0,d.default)({opacity:this.state.imgLoaded?0:1},H&&R,o,m),V={title:t,alt:this.state.isVisible?"":i,style:q,className:f,itemProp:v},P=this.state.isHydrated?g(C):C[0];if(p)return s.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},s.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),O&&s.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&R)}),P.base64&&s.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:V,imageVariants:C,generateSources:I}),P.tracedSVG&&s.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:V,imageVariants:C,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,E(C),s.default.createElement(z,{alt:i,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:_})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,d.default)({alt:i,title:t,loading:x},P,{imageVariants:C}))}}));if(h){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},r);return"inherit"===r.display&&delete W.display,s.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},O&&s.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},H&&R)}),P.base64&&s.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:V,imageVariants:C,generateSources:I}),P.tracedSVG&&s.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:V,imageVariants:C,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,E(C),s.default.createElement(z,{alt:i,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:_})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,d.default)({alt:i,title:t,loading:x},P,{imageVariants:C}))}}))}return null},t}(s.default.Component);H.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function R(e){return function(t,i,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[i]=e,n),t,"prop",a)}}H.propTypes={resolutions:L,sizes:O,fixed:R(c.default.oneOfType([L,c.default.arrayOf(L)])),fluid:R(c.default.oneOfType([O,c.default.arrayOf(O)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var q=H;t.Z=q},5887:function(e,t,i){i.r(t),i.d(t,{default:function(){return le}});var a=i(7294),n=i(9),r=i(6434),l=i.p+"static/travel-video-c41c91aa34bada112ea611ac7d4a41d9.mp4",o=function(){return a.createElement(d,null,a.createElement(s,null,a.createElement(c,{src:l,type:"video/mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})),a.createElement(m,null,a.createElement(u,null,a.createElement(f,null,"Unreal Destinations"),a.createElement(p,null,"Out of this world"),a.createElement(r.z,{primary:"true",big:"true",round:"true",to:"/trips"},"Travel Now"))))},d=n.default.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-okfuhs-0"})(["background:'#0c0c0c';display:flex;justify-content:center;align-items:center;height:100vh;padding:0 1rem;position:relative;margin-top:-80px;color:#fff;:before{content:\"\";position:absolute;top:0;bottom:0;right:0;left:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100% ),linear-gradient(180deg,rgba(0,0,0,0.4) 0%,transparent 100%);}"]),s=n.default.div.withConfig({displayName:"Hero__HeroBg",componentId:"sc-okfuhs-1"})(["position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;overflow:hidden;"]),c=n.default.video.withConfig({displayName:"Hero__VideoBg",componentId:"sc-okfuhs-2"})(["width:100%;height:100%;-o-object-fit:cover;object-fit:cover;"]),m=n.default.div.withConfig({displayName:"Hero__HeroContent",componentId:"sc-okfuhs-3"})(["z-index:3;height:calc(100vh - 80px);max-height:100%;padding:0rem calc((100vw - 1300px) / 2);"]),u=n.default.div.withConfig({displayName:"Hero__HeroItems",componentId:"sc-okfuhs-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100vh;max-height:100%;padding:0;line-height:1.1;font-weight:bold;color:#fff;"]),f=n.default.h1.withConfig({displayName:"Hero__HeroH1",componentId:"sc-okfuhs-5"})(["font-size:clamp(1.5rem,6vw,4rem);margin-bottom:1.5rem;letter-spacing:3px;font-weight:bold;padding:0 1rem;"]),p=n.default.p.withConfig({displayName:"Hero__HeroP",componentId:"sc-okfuhs-6"})(["font-size:clamp(1rem,3vw,3rem);margin-bottom:2rem;font-weight:400;"]),g=i(5408),h=i(262),y=i(6162),b=i(3201),w=i(1424),v=i(1597),x=function(){var e=(0,v.useStaticQuery)("2017359623");return a.createElement(E,null,a.createElement(_,null,"Testimonials"),a.createElement(S,null,"What people are saying"),a.createElement(I,null,a.createElement(C,null,a.createElement(N,null,a.createElement(z,null),a.createElement("h3",null,"Ogini Wuraola"),a.createElement("p",null,"The greatest experience of my life! It was so much fun exploring the mountains and they made it super easy to book my trip and accommodation")),a.createElement(N,null,a.createElement(H,null),a.createElement("h3",null,"Olomode Michael"),a.createElement("p",null,"It was quite easy to set up my trip. They answered all my questions right away and gave me the best price I can have around"))),a.createElement(T,null,e.allFile.edges.map((function(e,t){return a.createElement(k,{key:t,fluid:e.node.childImageSharp.fluid})})))))},E=n.default.div.withConfig({displayName:"Testimonials__TestimonialsContainer",componentId:"sc-12ktwpi-0"})(["width:100%;background:#fcfcfc;color:#000;padding:5rem calc((100vw - 1300px) / 2);height:100%;"]),_=n.default.p.withConfig({displayName:"Testimonials__Topline",componentId:"sc-12ktwpi-1"})(["color:#077bf1;font-size:1rem;padding-left:2rem;margin-bottom:0.75rem;"]),S=n.default.p.withConfig({displayName:"Testimonials__Description",componentId:"sc-12ktwpi-2"})(["text-align:start;padding-left:2rem;margin-bottom:4rem;font-size:clamp(1.5rem,5vw,2rem);font-weight:bold;"]),I=n.default.div.withConfig({displayName:"Testimonials__ContentWrapper",componentId:"sc-12ktwpi-3"})(["display:grid;grid-template-columns:1fr 1fr;padding:0 2rem;@media screen and (max-width:768px){grid-template-columns:1fr;}"]),C=n.default.div.withConfig({displayName:"Testimonials__ColumnOne",componentId:"sc-12ktwpi-4"})(["display:grid;grid-template-rows:1fr 1fr;"]),N=n.default.div.withConfig({displayName:"Testimonials__Testimonial",componentId:"sc-12ktwpi-5"})(["padding-top:1rem;padding-right:2rem;h3{margin-bottom:1rem;font-size:1.5rem;font-style:italic;}p{color:#3b3b3b;}"]),T=n.default.div.withConfig({displayName:"Testimonials__ColumnTwo",componentId:"sc-12ktwpi-6"})(["display:grid;grid-template-columns:1fr 1fr;margin-top:2rem;grid-gap:10px;@media screen and (max-width:500px){grid-template-columns:1fr;}"]),k=(0,n.default)(y.Z).withConfig({displayName:"Testimonials__Images",componentId:"sc-12ktwpi-7"})(["border-radius:10px;height:100%;"]),z=(0,n.default)(w.osu).withConfig({displayName:"Testimonials___StyledIoMdCheckmarkCircleOutline",componentId:"sc-12ktwpi-8"})(["color:#3fffa8;font-size:2rem;margin-bottom:4rem;"]),H=(0,n.default)(b.UZO).withConfig({displayName:"Testimonials___StyledFaRegLightbulb",componentId:"sc-12ktwpi-9"})(["color:#f9b19b;font-size:2rem;margin-bottom:4rem;"]),L=i(9295),O=function(e){var t=e.heading,i=(0,v.useStaticQuery)("1783343308");return a.createElement(R,null,a.createElement(q,null,t),a.createElement(V,null,function(e){var t=[];return e.allTripsJson.edges.forEach((function(e,i){t.push(a.createElement(P,{key:i},a.createElement(W,{alt:e.node.alt,fluid:e.node.img.childImageSharp.fluid}),a.createElement(j,null,a.createElement(F,null,a.createElement(L.opg,null),a.createElement(B,null,e.node.name)),a.createElement(M,{to:"/trips",primary:"true",round:"true"},e.node.button))))})),t}(i)))},R=n.default.div.withConfig({displayName:"Trips__ProductsContainer",componentId:"sc-pmsm8x-0"})(["min-height:100vh;padding:5rem calc((100vw - 1300px) / 2);color:#fff;"]),q=n.default.div.withConfig({displayName:"Trips__ProductsHeading",componentId:"sc-pmsm8x-1"})(["font-size:clamp(1.2rem,5vw,3rem);text-align:center;margin-bottom:5rem;color:#000;"]),V=n.default.div.withConfig({displayName:"Trips__ProductWrapper",componentId:"sc-pmsm8x-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:10px;justify-items:center;padding:0 2rem;@media screen and (max-width:1200px){grid-template-columns:1fr 1fr;}@media screen and (max-width:868px){grid-template-columns:1fr;}"]),P=n.default.div.withConfig({displayName:"Trips__ProductCard",componentId:"sc-pmsm8x-3"})(["line-height:2;width:100%;height:500px;position:relative;border-radius:10px;transition:0.2s ease;"]),W=(0,n.default)(y.Z).withConfig({displayName:"Trips__ProductImg",componentId:"sc-pmsm8x-4"})(["height:100%;max-width:100%;position:relative;border-radius:10px;filter:brightness(70%);transition:0.4s cubic-bezier(0.075,0.82,0.165,1);&:hover{filter:brightness(100%)}"]),j=n.default.div.withConfig({displayName:"Trips__ProductInfo",componentId:"sc-pmsm8x-5"})(["display:flex;flex-direction:column;align-items:flex-start;padding:0 2rem;@media screen and (max-width:280px){padding:0 1rem;}"]),F=n.default.div.withConfig({displayName:"Trips__TextWrap",componentId:"sc-pmsm8x-6"})(["display:flex;align-items:center;position:absolute;top:375px;"]),B=n.default.div.withConfig({displayName:"Trips__ProductTitle",componentId:"sc-pmsm8x-7"})(["font-weight:400;font-size:1rem;margin-left:0.5rem;"]),M=(0,n.default)(r.z).withConfig({displayName:"Trips___StyledButton",componentId:"sc-pmsm8x-8"})(["position:absolute;top:420px;font-size:14px;"]),G=i(782),Z=i(2775),D=[{icon:a.createElement(G.hKA,null),title:"Over 200 Destinations",desc:"Travel to over 100 unique places"},{icon:a.createElement(Z.k_Z,null),title:"1 million trips made",desc:"Over 1 million trips completed last year"},{icon:a.createElement(Z.Vqd,null),title:"Fastest Support",desc:"Custer service is always up and running"},{icon:a.createElement(b.l3t,null),title:"Best deals",desc:"we offer best prices"}],U=function(){return a.createElement(A,null,a.createElement(J,null,"Why choose us?"),a.createElement(Q,null,D.map((function(e,t){return a.createElement(K,{key:t},a.createElement(X,null,e.icon),a.createElement(Y,null,e.title),a.createElement($,null,e.desc))}))))},A=n.default.div.withConfig({displayName:"Stats__StatsContainer",componentId:"sc-q2oe7y-0"})(["width:100%;color:#000;display:flex;flex-direction:column;justify-content:center;padding:4rem calc((100vw - 1300px) / 2);"]),J=n.default.h1.withConfig({displayName:"Stats__Heading",componentId:"sc-q2oe7y-1"})(["text-align:start;font-size:clamp(1.5rem,5vw,2rem);margin-bottom:3rem;padding:0 2rem;"]),Q=n.default.div.withConfig({displayName:"Stats__Wrapper",componentId:"sc-q2oe7y-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:10px;@media screen and (max-width:768px){grid-template-columns:1fr;}@media screen and (max-width:500px){grid-template-columns:1fr;}"]),K=n.default.div.withConfig({displayName:"Stats__StatsBox",componentId:"sc-q2oe7y-3"})(["height:100%;width:100%;padding:2rem;"]),X=n.default.div.withConfig({displayName:"Stats__Icon",componentId:"sc-q2oe7y-4"})(["font-size:3rem;margin-bottom:1rem;color:#3af576;"]),Y=n.default.p.withConfig({displayName:"Stats__Title",componentId:"sc-q2oe7y-5"})(["font-size:clamp(1rem,2.5vw,1.5rem);margin-bottom:0.5rem;"]),$=n.default.p.withConfig({displayName:"Stats__Description",componentId:"sc-q2oe7y-6"})(["color:#0c0c0c;font-weight:300;"]),ee=i.p+"static/email-2-b7e662986dac49bd585eb1a3688f125f.jpg",te=function(){return a.createElement(ie,null,a.createElement(ae,null,a.createElement("h1",null,"Get access to exclusive Offers"),a.createElement("p",null,"Sign up for a newsletter below to get NGN5,000 off your first trip "),a.createElement("form",{action:"#"},a.createElement(ne,null,a.createElement("label",{htmlFor:"email"},a.createElement("input",{type:"email",placeholder:"Enter your email",id:"email"})),a.createElement(re,{as:"button",type:"submit",primary:"true",round:"true"},"Sign Up")))))},ie=n.default.div.withConfig({displayName:"Email__EmailContainer",componentId:"sc-svnqyy-0"})(["background:linear-gradient( 180deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 35%,rgba(0,0,0,0.1) 100% ),url(",") no-repeat center;background-size:cover;height:450px;width:100%;padding:5rem calc((100vw - 1300px) / 2);color:#fff;justify-content:center;display:flex;align-items:center;"],ee),ae=n.default.div.withConfig({displayName:"Email__EmailContent",componentId:"sc-svnqyy-1"})(["display:flex;flex-direction:column;align-items:center;h1{text-align:center;margin-bottom:1rem;font-size:clamp(1rem,5vw,3rem);padding:0 1rem;}p{text-align:center;font-size:clamp(1rem,2.5vw,1.5rem);padding:0 1rem;margin-bottom:2rem;}form{z-index:10;}"]),ne=n.default.div.withConfig({displayName:"Email__FormWrap",componentId:"sc-svnqyy-2"})(["input{padding:1rem 1.5rem;outline:none;width:350px;height:48px;border-radius:50px;border:none;margin-right:1rem;}@media screen and (max-width:768px){display:flex;flex-direction:column;padding:0 1rem;input{margin-bottom:1rem;width:100%;margin-right:0;}}"]),re=(0,n.default)(r.z).withConfig({displayName:"Email___StyledButton",componentId:"sc-svnqyy-3"})(["height:48px;@media screen and (max-width:768px){width:100%;min-width:350px;}@media screen and (max-width:400px){width:100%;min-width:250px;}"]),le=function(){return a.createElement(g.Z,null,a.createElement(h.Z,{title:"Home"}),a.createElement(o,null),a.createElement(O,{heading:"Our Favourite Destinations"}),a.createElement(x,null),a.createElement(U,null),a.createElement(te,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-568c3bc6168f659c76e8.js.map