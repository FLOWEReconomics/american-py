(this.webpackJsonpCSW=this.webpackJsonpCSW||[]).push([[3],{66:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(0),i=r(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var a=u(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l(this,r)}}function l(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,e);var t,r,o,l=f(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).wrap=document.createElement("div"),t.cssLinksArray=[],t.styles=null,t.frameRef=null,t.fPortal=null,t.fTopParent=null,t.frameLoadInterval=null,t.frameObserver=null,t.state={fPortalCreated:!1},t}return t=u,(r=[{key:"componentDidMount",value:function(){var e=this;if(this.getFrameDocument()){this.frameLoadInterval=window.setInterval((function(){return e.onFrameLoadInterval()}),a.h.FrameLoadIntervalMS);for(var t=window;t.parent&&t.parent!==t;)t=t.parent;this.fTopParent=t}}},{key:"componentWillUnmount",value:function(){var e=this,t=this.getFrameDocument();if(t){window.removeEventListener("resize",(function(){return e.frameAdaptiveListener()})),window.removeEventListener("".concat(a.f).concat(a.i.ForceFrameResize),(function(){return e.frameAdaptiveListener()})),this.frameObserver&&this.frameObserver.disconnect&&this.frameObserver.disconnect();for(var r=0;r<this.cssLinksArray.length;r++)Object(i.db)(this.cssLinksArray[r],t.head);Object(i.db)(this.wrap,t.body),Object(i.db)(this.styles,t.head)}this.frameRef=null}},{key:"onFrameLoadInterval",value:function(){var e=this,t=this.props,r=t.id,n=t.cssHrefs,o=t.headStyle,s=t.isResizable,c=t.stylePre,f=this.getFrameDocument();if(this.frameLoadInterval&&f&&"complete"===f.readyState){if(window.clearInterval(this.frameLoadInterval),Object(i.N)(n))for(var l=0;l<n.length;l++){var u=document.createElement("link");u.rel="stylesheet",u.href=n[l].href,u.id=n[l].id,this.cssLinksArray.push(u),f.head.appendChild(u)}if(o){var h=i.ob.sanitizeStyles(o);h&&(this.styles=document.createElement("style"),this.styles.id="".concat(c,"head-styles_").concat(r),this.styles.textContent="".concat(h),f.head.appendChild(this.styles))}this.wrap.id="".concat(c,"content-wrapper_").concat(r),this.wrap.className="".concat(c,"content-wrapper");var d="".concat(c,"html").concat(s?"-":"-not-","resizable");f.documentElement.className="".concat(c,"html ").concat(d),f.body.id="".concat(c,"body_").concat(r),f.body.className="".concat(c,"body"),f.body.appendChild(this.wrap),window.addEventListener("resize",(function(){return e.frameAdaptiveListener()})),window.addEventListener("".concat(a.f).concat(a.i.ForceFrameResize),(function(){return e.frameAdaptiveListener()})),this.frameObserver=new MutationObserver((function(t){t.forEach((function(t){"childList"!==t.type&&"attributes"!==t.type||e.frameAdaptiveListener()}))})),this.frameObserver.observe(this.wrap,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.createFramePortal()}}},{key:"getFrameDocument",value:function(){return this.frameRef?this.frameRef.contentDocument:null}},{key:"addAdaptive",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;if(e&&t&&r)try{var n=e.innerWidth,i=n<=a.z.XSm,o=n<=a.z.Sm,s=n>a.z.Sm&&n<=a.z.Md,c=n>a.z.Md,f=n>a.z.Lg&&n<=a.z.XLg,l=n>a.z.XLg,u=function(e){return"".concat(r,"view-").concat(e)},h=function(e,t,r){if(e){var n,a=function(t){return e.classList.toggle(t)},i=(n=r,e.classList.contains(n));t&&!i&&a(r),!t&&i&&a(r)}};h(t,i,u("xs")),h(t,o,u("s")),h(t,s,u("m")),h(t,c,u("l")),h(t,f,u("xl")),h(t,l,u("xxl"))}catch(e){}}},{key:"onFrameResize",value:function(){var e=this.props,t=e.isResizable,r=e.instanceId,n=e.id,o=this.getFrameDocument();if(t&&o&&this.frameRef){var s=this.wrap&&this.wrap.offsetHeight>0?this.wrap.offsetHeight:0;this.wrap&&(this.frameRef.height="".concat(s,"px"),Object(i.o)(r,this,a.i.FrameResize,!1,{height:s,frameId:n}))}}},{key:"frameAdaptiveListener",value:function(){var e=this,t=this.props,r=t.stylePre,n=t.isResizable,i=this.getFrameDocument();if(i&&this.frameRef&&this.fTopParent){var o=function(){e.addAdaptive(e.fTopParent,i.documentElement,r),n&&e.onFrameResize()};setTimeout(o,a.h.FrameResizeDelayMS),o()}}},{key:"createFramePortal",value:function(){var e=this,t=this.props.children;this.fPortal||(this.fPortal=Object(n.e)(n.a.only(t),this.wrap),setTimeout((function(){e.setState({fPortalCreated:!0})}),a.h.FramePortalInitDelayMS))}},{key:"render",value:function(){var e=this,t=this.props,r=t.id,a=t.name,i=t.style,o=t.className,s=t.title,c=t.isResizable,f=t.frameHeight,l=this.state.fPortalCreated;return n.f.createElement("iframe",{id:r,name:a,style:i,className:o,title:s,"aria-label":s,height:c?0:f,ref:function(t){return e.frameRef=t}},l&&this.frameRef&&this.fPortal)}}])&&s(t.prototype,r),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.b);t.default=h}}]);
//# sourceMappingURL=csw-frame.5.4.0.js.map