/*! For license information please see microsoft.3a9e9721b7dcc84962da.js.LICENSE.txt */
"use strict";(self.webpackChunk_msnews_msnews_experiences=self.webpackChunk_msnews_msnews_experiences||[]).push([["microsoft"],{63165:function(t,e,n){n.d(e,{Z:function(){return P}});var r=n(45362),i=n(23806),o=n(26454),a=n(254),s=n(74539),u=n(98500),l=n(69509),c=n(39289),d=500;function h(t,e,n){e&&(0,s.kJ)(e)&&e[a.R5]>0&&(e=e.sort((function(t,e){return t[u.yi]-e[u.yi]})),(0,s.tO)(e,(function(t){t[u.yi]<d&&(0,s._y)("Channel has invalid priority - "+t[a.pZ])})),t[a.MW]({queue:(0,s.FL)(e),chain:(0,l.jV)(e,n[a.TC],n)}))}var f=n(85282),p=n(5482),g=n(33220),v=n(80221),m=n(26932),b=n(27981),y=n(60851),w=function(t){function e(){var n,r,o=t.call(this)||this;function l(){n=0,r=[]}return o.identifier="TelemetryInitializerPlugin",o.priority=199,l(),(0,i.Z)(e,o,(function(t,e){t.addTelemetryInitializer=function(t){var e={id:n++,fn:t};return r[a.MW](e),{remove:function(){(0,s.tO)(r,(function(t,n){if(t.id===e.id)return r[a.cb](n,1),-1}))}}},t[u.hL]=function(e,n){for(var i=!1,o=r[a.R5],u=0;u<o;++u){var l=r[u];if(l)try{if(!1===l.fn[a.ZV](null,[e])){i=!0;break}}catch(t){(0,v.kP)(n[a.mc](),1,64,"One of telemetry initializers failed, telemetry item will not be sent: "+(0,s.jj)(t),{exception:(0,y.eU)(t)},!0)}}i||t[a.uL](e,n)},t[a.F3]=function(){l()}})),o}return(0,r.ne)(e,t),e.__ieDyn=1,e}(b.i),x=n(9894),C="Plugins must provide initialize method",S="SDK is still unloading...",k={loggingLevelConsole:1};function F(t,e){return new m.Jk(e)}function D(t,e){var n=!1;return(0,s.tO)(e,(function(e){if(e===t)return n=!0,-1})),n}var $=function(){function t(){var e,n,b,y,$,O,_,T,P,I,L,A,j,B,N,V,E,R,M,H,z=0;(0,i.Z)(t,this,(function(t){function i(){n=!1,e=(0,s.mm)(!0,{},k),t[a.TC]=e,t[a.eZ]=new v.AQ(e),t[a.iC]=[],N=new w,b=[],y=null,$=null,O=null,_=null,T=null,I=null,P=[],L=null,A=null,j=null,B=!1,V=null,E=(0,p.J)("AIBaseCore",!0),R=(0,x.Y)(),H=null}function q(){return(0,l.CD)(W(),e,t)}function Z(n){var r=function(t,e,n){var r,i=[],o={};return(0,s.tO)(n,(function(n){((0,s.le)(n)||(0,s.le)(n[a.VL]))&&(0,s._y)(C);var r=n[u.yi],l=n[a.pZ];n&&r&&((0,s.le)(o[r])?o[r]=l:(0,v.jV)(t,"Two extensions have same priority #"+r+" - "+o[r]+", "+l)),(!r||r<e)&&i[a.MW](n)})),(r={all:n})[u.oV]=i,r}(t[a.eZ],d,P);I=r[u.oV],T=null;var i=r.all;if(j=(0,s.FL)(function(t,e,n){var r=[];if(t&&(0,s.tO)(t,(function(t){return h(r,t,n)})),e){var i=[];(0,s.tO)(e,(function(t){t[u.yi]>d&&i[a.MW](t)})),h(r,i,n)}return r}(A,i,t)),L){var o=(0,s.UA)(i,L);-1!==o&&i[a.cb](o,1),-1!==(o=(0,s.UA)(I,L))&&I[a.cb](o,1),L._setQueue(j)}else L=function(t,e){function n(){return(0,l.CD)(null,e[a.TC],e,null)}function r(t,e,n,r){var i=t?t[a.R5]+1:1;function o(){0==--i&&(r&&r(),r=null)}i>0&&(0,s.tO)(t,(function(t){if(t&&t.queue[a.R5]>0){var r=t.chain,s=e[a.zV](r);s[a.Fc](o),n(s)}else i--})),o()}var i=!1,o={identifier:"ChannelControllerPlugin",priority:d,initialize:function(e,n,r,o){i=!0,(0,s.tO)(t,(function(t){t&&t.queue[a.R5]>0&&(0,c.bP)((0,l.CD)(t.chain,e,n),r)}))},isInitialized:function(){return i},processTelemetry:function(e,i){r(t,i||n(),(function(t){t[a.uL](e)}),(function(){i[a.uL](e)}))},update:function(e,n){var i=n||{reason:0};return r(t,e,(function(t){t[a.uL](i)}),(function(){e[a.uL](i)})),!0},pause:function(){r(t,n(),(function(t){t.iterate((function(t){t.pause&&t.pause()}))}),null)},resume:function(){r(t,n(),(function(t){t.iterate((function(t){t.resume&&t.resume()}))}),null)},teardown:function(e,n){var o=n||{reason:0,isAsync:!1};return r(t,e,(function(t){t[a.uL](o)}),(function(){e[a.uL](o),i=!1})),!0},getChannel:function(e){var n=null;return t&&t[a.R5]>0&&(0,s.tO)(t,(function(t){if(t&&t.queue[a.R5]>0&&((0,s.tO)(t.queue,(function(t){if(t[a.pZ]===e)return n=t,-1})),n))return-1})),n},flush:function(e,i,o,s){var u=1,l=!1,c=null;function d(){u--,l&&0===u&&(c&&(clearTimeout(c),c=null),i&&i(l),i=null)}return s=s||5e3,r(t,n(),(function(t){t.iterate((function(t){if(t[a.kL]){u++;var n=!1;t[a.kL](e,(function(){n=!0,d()}),o)||n||(e&&null==c?c=setTimeout((function(){c=null,d()}),s):d())}}))}),(function(){l=!0,d()})),!0},_setQueue:function(e){t=e}};return o}(j,t);i[a.MW](L),I[a.MW](L),t[a.iC]=(0,c.AA)(i),L[a.VL](e,t,i),(0,c.bP)(q(),i),t[a.iC]=(0,s.FL)((0,c.AA)(I||[])).slice(),n&&function(e){var n=(0,l.xy)(W(),t);t._updateHook&&!0===t._updateHook(n,e)||n[a.uL](e)}(n)}function U(e){var n,r=null,i=null;return(0,s.tO)(t[a.iC],(function(t){if(t[a.pZ]===e&&t!==L&&t!==N)return i=t,-1})),!i&&L&&(i=L.getChannel(e)),i&&((n={plugin:i})[a.$h]=function(t){(0,c.OY)(i)[u.mE]=!t},n.isEnabled=function(){var t=(0,c.OY)(i);return!t[a.fi]&&!t[u.mE]},n.remove=function(t,e){var n;void 0===t&&(t=!0);var r=[i],o=((n={reason:1})[a.d]=t,n);K(r,o,(function(t){t&&Z({reason:32,removed:r}),e&&e(t)}))},r=n),r}function W(){if(!T){var n=(I||[]).slice();-1===(0,s.UA)(n,N)&&n[a.MW](N),T=(0,l.jV)((0,c.AA)(n),e,t)}return T}function K(n,r,i){if(n&&n[a.R5]>0){var o=(0,l.jV)(n,e,t),u=(0,l.Bt)(o,t);u[a.Fc]((function(){var t=!1,e=[];(0,s.tO)(P,(function(r,i){D(r,n)?t=!0:e[a.MW](r)})),P=e;var r=[];A&&((0,s.tO)(A,(function(e,i){var o=[];(0,s.tO)(e,(function(e){D(e,n)?t=!0:o[a.MW](e)})),r[a.MW](o)})),A=r),i&&i(t)})),u[a.uL](r)}else i(!1)}function G(){var n=t[a.eZ]?t[a.eZ].queue:[];n&&((0,s.tO)(n,(function(n){var r,i=((r={})[a.I]=V||"InternalMessageId: "+n[a.Gc],r.iKey=(0,s.v4)(e[a.p$]),r.time=(0,s.Y6)(new Date),r.baseType=v.lQ.dataType,r.baseData={message:n[a.gU]},r);t.track(i)})),n[a.R5]=0)}function J(t,e,n,r){return L?L[a.kL](t,e,n||6,r):(e&&e(!1),!0)}function Y(e){var n=t[a.eZ];n?(0,v.kP)(n,2,73,e):(0,s._y)(e)}i(),t[a.yl]=function(){return n},t[a.VL]=function(i,o,l,c){B&&(0,s._y)(S),t[a.yl]()&&(0,s._y)("Core should not be initialized more than once"),e=i||{},t[a.TC]=e,(0,s.le)(i[a.p$])&&(0,s._y)("Please provide instrumentation key"),y=c,t._notificationManager=c,function(){var t=(0,s.v4)(e.disableDbgExt);!0===t&&M&&(y[a.n7](M),M=null);y&&!M&&!0!==t&&(M=(0,g.p)(e),y[a.g](M))}(),function(){var t=(0,s.v4)(e.enablePerfMgr);!t&&O&&(O=null);t&&(0,s.qK)(e,u.DN,F)}(),(0,s.qK)(e,u.Zh,{}).NotificationManager=y,l&&(t[a.eZ]=l);var d=(0,s.qK)(e,u.js,[]);(P=[])[a.MW].apply(P,(0,r.$h)((0,r.$h)([],o,!1),d,!1)),A=(0,s.qK)(e,u.Z,[]),Z(null),j&&0!==j[a.R5]||(0,s._y)("No "+u.Z+" available"),n=!0,t.releaseQueue()},t.getTransmissionControls=function(){var t=[];return j&&(0,s.tO)(j,(function(e){t[a.MW](e.queue)})),(0,s.FL)(t)},t.track=function(n){n.iKey=n.iKey||e[a.p$],n[a.Z_]=n[a.Z_]||(0,s.Y6)(new Date),n.ver=n.ver||"4.0",!B&&t[a.yl]()?q()[a.uL](n):b[a.MW](n)},t[a.SD]=q,t[a.tb]=function(){var e;return y||(y=(0,o.pu)(((e={})[a.g]=function(t){},e[a.n7]=function(t){},e[u.uC]=function(t){},e[u.$F]=function(t,e){},e[u.f_]=function(t,e){},e)),t._notificationManager=y),y},t[a.g]=function(t){y&&y[a.g](t)},t[a.n7]=function(t){y&&y[a.n7](t)},t.getCookieMgr=function(){return _||(_=(0,f.Nz)(e,t[a.eZ])),_},t.setCookieMgr=function(t){_=t},t[u.kl]=function(){if(!$&&!O&&(0,s.v4)(e.enablePerfMgr)){var n=(0,s.v4)(e[u.DN]);(0,s.mf)(n)&&(O=n(t,t[a.tb]()))}return $||O||(0,m.j5)()},t.setPerfMgr=function(t){$=t},t.eventCnt=function(){return b[a.R5]},t.releaseQueue=function(){if(n&&b[a.R5]>0){var t=b;b=[],(0,s.tO)(t,(function(t){q()[a.uL](t)}))}},t.pollInternalLogs=function(t){V=t||null;var n=(0,s.v4)(e.diagnosticLogInterval);return n&&n>0||(n=1e4),z&&clearInterval(z),z=setInterval((function(){G()}),n)},t[a.LS]=function(){z&&(clearInterval(z),z=0,G())},(0,s.Vb)(t,(function(){return N}),["addTelemetryInitializer"]),t.unload=function(e,r,o){var u;void 0===e&&(e=!0),n||(0,s._y)("SDK is not initialized"),B&&(0,s._y)(S);var c=((u={reason:50})[a.d]=e,u.flushComplete=!1,u),d=(0,l.Bt)(W(),t);function h(e){c.flushComplete=e,B=!0,R.run(d,c),t[a.LS](),d[a.uL](c)}d[a.Fc]((function(){i(),r&&r(c)}),t),J(e,h,6,o)||h(!1)},t[a.TO]=U,t.addPlugin=function(t,e,n,r){if(!t)return r&&r(!1),void Y(C);var i=U(t[a.pZ]);if(i&&!e)return r&&r(!1),void Y("Plugin ["+t[a.pZ]+"] is already loaded!");var o={reason:16};function s(e){P[a.MW](t),o.added=[t],Z(o),r&&r(!0)}if(i){var u=[i.plugin];K(u,{reason:2,isAsync:!!n},(function(t){t?(o.removed=u,o.reason|=32,s()):r&&r(!1)}))}else s()},t.evtNamespace=function(){return E},t[a.kL]=J,t.getTraceCtx=function(t){return H||(H=(0,c.Yn)()),H},t.setTraceCtx=function(t){H=t||null},(0,s.Oi)(t,"addUnloadCb",(function(){return R}),"add")}))}return t.__ieDyn=1,t}(),O=n(18366),_=n(91254),T=function(t){function e(){var n=t.call(this)||this;return(0,i.Z)(e,n,(function(t,e){t.initialize=function(n,r,i,o){n&&!n.endpointUrl&&(n.endpointUrl=O.YT),t.getWParam=function(){return _.x9||n.enableWParam?0:-1};try{e.initialize(n,r,i,o)}catch(e){(0,v.kP)(t.logger,1,514,"Initialization Failed: "+(0,y.eU)(e)+"\n - Note: Channels must be provided through config.channels only")}},t.track=function(t){var n=t;if(n){var r=n.ext=n.ext||{};r.sdk=r.sdk||{},r.sdk.ver=_.vs}e.track(n)}})),n}return(0,r.ne)(e,t),e.__ieDyn=1,e}($),P=T},65004:function(t,e,n){n.d(e,{zU:function(){return u}});var r,i=n(45362),o=n(71178),a=((0,o.By)({CRITICAL:1,WARNING:2}),(0,o.By)(((r={}).BrowserDoesNotSupportLocalStorage=0,r.BrowserCannotReadLocalStorage=1,r.BrowserCannotReadSessionStorage=2,r.BrowserCannotWriteLocalStorage=3,r.BrowserCannotWriteSessionStorage=4,r.BrowserFailedRemovalFromLocalStorage=5,r.BrowserFailedRemovalFromSessionStorage=6,r.CannotSendEmptyTelemetry=7,r.ClientPerformanceMathError=8,r.ErrorParsingAISessionCookie=9,r.ErrorPVCalc=10,r.ExceptionWhileLoggingError=11,r.FailedAddingTelemetryToBuffer=12,r.FailedMonitorAjaxAbort=13,r.FailedMonitorAjaxDur=14,r.FailedMonitorAjaxOpen=15,r.FailedMonitorAjaxRSC=16,r.FailedMonitorAjaxSend=17,r.FailedMonitorAjaxGetCorrelationHeader=18,r.FailedToAddHandlerForOnBeforeUnload=19,r.FailedToSendQueuedTelemetry=20,r.FailedToReportDataLoss=21,r.FlushFailed=22,r.MessageLimitPerPVExceeded=23,r.MissingRequiredFieldSpecification=24,r.NavigationTimingNotSupported=25,r.OnError=26,r.SessionRenewalDateIsZero=27,r.SenderNotInitialized=28,r.StartTrackEventFailed=29,r.StopTrackEventFailed=30,r.StartTrackFailed=31,r.StopTrackFailed=32,r.TelemetrySampledAndNotSent=33,r.TrackEventFailed=34,r.TrackExceptionFailed=35,r.TrackMetricFailed=36,r.TrackPVFailed=37,r.TrackPVFailedCalc=38,r.TrackTraceFailed=39,r.TransmissionFailed=40,r.FailedToSetStorageBuffer=41,r.FailedToRestoreStorageBuffer=42,r.InvalidBackendResponse=43,r.FailedToFixDepricatedValues=44,r.InvalidDurationValue=45,r.TelemetryEnvelopeInvalid=46,r.CreateEnvelopeError=47,r.CannotSerializeObject=48,r.CannotSerializeObjectNonSerializable=49,r.CircularReferenceDetected=50,r.ClearAuthContextFailed=51,r.ExceptionTruncated=52,r.IllegalCharsInName=53,r.ItemNotInArray=54,r.MaxAjaxPerPVExceeded=55,r.MessageTruncated=56,r.NameTooLong=57,r.SampleRateOutOfRange=58,r.SetAuthContextFailed=59,r.SetAuthContextFailedAccountName=60,r.StringValueTooLong=61,r.StartCalledMoreThanOnce=62,r.StopCalledWithoutStart=63,r.TelemetryInitializerFailed=64,r.TrackArgumentsNotSpecified=65,r.UrlTooLong=66,r.SessionStorageBufferFull=67,r.CannotAccessCookie=68,r.IdTooLong=69,r.InvalidEvent=70,r.FailedMonitorAjaxSetRequestHeader=71,r.SendBrowserInfoOnUserInit=72,r.PluginException=73,r.NotificationException=74,r.SnippetScriptLoadFailure=99,r.InvalidInstrumentationKey=100,r.CannotParseAiBlobValue=101,r.InvalidContentBlob=102,r.TrackPageActionEventFailed=103,r.FailedAddingCustomDefinedRequestContext=104,r.InMemoryStorageBufferFull=105,r.InstrumentationKeyDeprecation=106,r))),s=n(74539),u=((0,o.By)({NotSet:0,Pii_DistinguishedName:1,Pii_GenericData:2,Pii_IPV4Address:3,Pii_IPv6Address:4,Pii_MailSubject:5,Pii_PhoneNumber:6,Pii_QueryString:7,Pii_SipAddress:8,Pii_SmtpAddress:9,Pii_Identity:10,Pii_Uri:11,Pii_Fqdn:12,Pii_IPV4AddressLegacy:13,CustomerContent_GenericContent:32}),(0,o.By)({Normal:1,CostDeferred:2,RealTime:3,Immediate:4}));(0,o.By)({Unspecified:0,String:1,Int32:2,UInt32:3,Int64:4,UInt64:5,Double:6,Bool:7,Guid:8,DateTime:9}),(0,o.By)({Normal:1,Critical:2}),(0,o.By)({NONE:0,ERROR:1,WARNING:2,INFORMATION:3}),(0,s.FL)((0,i.uc)((0,i.uc)({},a),(0,o.By)({AuthHandShakeError:501,AuthRedirectFail:502,BrowserCannotReadLocalStorage:503,BrowserCannotWriteLocalStorage:504,BrowserDoesNotSupportLocalStorage:505,CannotParseBiBlobValue:506,CannotParseDataAttribute:507,CVPluginNotAvailable:508,DroppedEvent:509,ErrorParsingAISessionCookie:510,ErrorProvidedChannels:511,FailedToGetCookies:512,FailedToInitializeCorrelationVector:513,FailedToInitializeSDK:514,InvalidContentBlob:515,InvalidCorrelationValue:516,SessionRenewalDateIsZero:517,SendPostOnCompleteFailure:518,PostResponseHandler:519,SDKNotInitialized:520})))},18366:function(t,e,n){n.d(e,{YT:function(){return i},qS:function(){return r}});var r="",i="https://browser.events.data.microsoft.com/OneCollector/1.0/"},91254:function(t,e,n){n.d(e,{Do:function(){return x},Sn:function(){return m},Vv:function(){return w},cm:function(){return C},hK:function(){return k},if:function(){return $},jM:function(){return b},l7:function(){return S},mJ:function(){return _},ot:function(){return T},vs:function(){return f},x9:function(){return v},yj:function(){return y}});var r,i=n(60851),o=n(74539),a=n(85282),s=n(39860),u=n(21908),l=n(10607),c=n(42774),d=n(26454),h=n(18366),f="1DS-Web-JS-3.2.8",p="withCredentials",g=((r={})[0]=0,r[2]=6,r[1]=1,r[3]=7,r[4098]=6,r[4097]=1,r[4099]=7,r),v=Boolean((0,i.Me)());Boolean((0,i.Jj)());function m(t){return!(t===h.qS||(0,o.le)(t))}function b(t){if(t){var e=t.indexOf("-");if(e>-1)return t.substring(0,e)}return h.qS}function y(t,e,n){if(!e&&!m(e)||"string"!=typeof t)return null;var r=typeof e;if("string"===r||"number"===r||"boolean"===r||(0,o.kJ)(e))e={value:e};else if("object"!==r||u.CY.call(e,"value")){if((0,o.le)(e.value)||e.value===h.qS||!(0,o.HD)(e.value)&&!(0,o.hj)(e.value)&&!(0,o.jn)(e.value)&&!(0,o.kJ)(e.value))return null}else e={value:n?JSON.stringify(e):e};if((0,o.kJ)(e.value)&&!D(e.value))return null;if(!(0,o.le)(e.kind)){if((0,o.kJ)(e.value)||!F(e.kind))return null;e.value=e.value.toString()}return e}function w(t,e,n){var r=-1;if(!(0,o.o8)(t))if(e>0&&(32===e?r=8192:e<=13&&(r=e<<5)),function(t){if(t>=0&&t<=9)return!0;return!1}(n))-1===r&&(r=0),r|=n;else{var i=g[O(t)]||-1;-1!==r&&-1!==i?r|=i:6===i&&(r=i)}return r}function x(t,e,n){var r;return void 0===n&&(n=!0),t&&(r=t.get(e),n&&r&&decodeURIComponent&&(r=decodeURIComponent(r))),r||h.qS}function C(t){void 0===t&&(t="D");var e=(0,s.GW)();return"B"===t?e="{"+e+"}":"P"===t?e="("+e+")":"N"===t&&(e=e.replace(/-/g,h.qS)),e}function S(t,e,n,r,i){var a={},s=!1,l=0,c=arguments.length,d=Object[u.hB],h=arguments;for("[object Boolean]"===d.toString.call(h[0])&&(s=h[0],l++);l<c;l++){t=h[l];(0,o.rW)(t,(function(t,e){s&&e&&(0,o.Kn)(e)?(0,o.kJ)(e)?(a[t]=a[t]||[],(0,o.tO)(e,(function(e,n){e&&(0,o.Kn)(e)?a[t][n]=S(!0,a[t][n],e):a[t][n]=e}))):a[t]=S(!0,a[t],e):a[t]=e}))}return a}var k=s.Jj;function F(t){return 0===t||t>0&&t<=13||32===t}function D(t){return t.length>0}function $(t,e){var n=t;n.timings=n.timings||{},n.timings.processTelemetryStart=n.timings.processTelemetryStart||{},n.timings.processTelemetryStart[e]=k()}function O(t){var e=0;if(null!=t){var n=typeof t;"string"===n?e=1:"number"===n?e=2:"boolean"===n?e=3:n===u.fK&&(e=4,(0,o.kJ)(t)?(e=4096,t.length>0&&(e|=O(t[0]))):u.CY.call(t,"value")&&(e=8192|O(t.value)))}return e}u.jA,u.fK,u.jA,o.tO,o.UA,o.Mr,o.Xz,o.FY,o.Y6,i.b$,o.HD,o.hj,o.jn,o.mf,o.kJ,o.Kn,o.nd,i.MF,o.Y6,i.cp,a.p7,a.UY,o.l_,l.c9,l.Ib,o.Id,o.rW,o.Ym,o.o8,o.le,o.nr,o.mf,o.Kn,o.J_,o.kJ,o.VZ,o.HD,o.hj,o.jn,o.Y6,o.tO,o.UA,o.Mr,o.Xz,o.nd,d.pu,o.FY,o.l_,l.Ib,o.m6,i.w1,s.GW,s.Jj,c.pZ,c.az,c._l,c.CN,c.F6,s.DO;function _(){return!!(0,i.a8)("chrome")}function T(t,e,n,r,i,o){function a(t,e,n){try{t[e]=n}catch(t){}}void 0===r&&(r=!1),void 0===i&&(i=!1);var s=new XMLHttpRequest;return r&&a(s,"Microsoft_ApplicationInsights_BypassAjaxInstrumentation",r),n&&a(s,p,n),s.open(t,e,!i),n&&a(s,p,n),!i&&o&&a(s,"timeout",o),s}},71178:function(t,e,n){n.d(e,{By:function(){return i}});var r=n(74539);function i(t){var e={};return(0,r.rW)(t,(function(t,n){e[t]=n,e[n]=t})),(0,r._A)(e)}},27981:function(t,e,n){n.d(e,{i:function(){return l}});var r=n(23806),i=n(254),o=n(74539),a=n(98500),s=n(69509),u=n(9894),l=function(){function t(){var e,n,l,c,d,h=this;function f(t){void 0===t&&(t=null);var e=t;if(!e){var r=n||(0,s.CD)(null,{},h[a.oV]);e=l&&l.getPlugin?r[i.zV](null,l.getPlugin):r[i.zV](null,l)}return e}function p(t,e,r){t&&(0,o.sO)(t,a.Zh,[],null,o.le),!r&&e&&(r=e[i.SD]()[i.W2]());var u=l;l&&l.getPlugin&&(u=l.getPlugin()),h[a.oV]=e,n=(0,s.CD)(r,t,e,u)}function g(){e=!1,h[a.oV]=null,n=null,l=null,d=[],c=(0,u.Y)()}g(),(0,r.Z)(t,h,(function(t){t[i.VL]=function(t,n,r,i){p(t,n,i),e=!0},t[i.fi]=function(e,n){var r,u=t[a.oV];if(u&&(!e||u===e[a.oV]())){var h,f=!1,p=e||(0,s.Bt)(null,u,l&&l.getPlugin?l.getPlugin():l),v=n||((r={reason:0})[i.d]=!1,r);return t[i.F3]&&!0===t[i.F3](p,v,m)?h=!0:m(),h}function m(){if(!f){f=!0,c.run(p,n);var t=d;d=[],(0,o.tO)(t,(function(t){t.rm()})),!0===h&&p[i.uL](v),g()}}},t[i.Tu]=function(e,n){var r=t[a.oV];if(r&&(!e||r===e[a.oV]())){var o,u=!1,c=e||(0,s.xy)(null,r,l&&l.getPlugin?l.getPlugin():l),d=n||{reason:0};return t._doUpdate&&!0===t._doUpdate(c,d,h)?o=!0:h(),o}function h(){u||(u=!0,p(c.getCfg(),c.core(),c[i.W2]()))}},t._addHook=function(t){t&&((0,o.kJ)(t)?d=d.concat(t):d[i.MW](t))},(0,o.Oi)(t,"_addUnloadCb",(function(){return c}),"add")})),h[i.mc]=function(t){return f(t)[i.mc]()},h[i.yl]=function(){return e},h.setInitialized=function(t){e=t},h[i.Jd]=function(t){l=t},h[i.uL]=function(t,e){e?e[i.uL](t):l&&(0,o.mf)(l[a.hL])&&l[a.hL](t,null)},h._getTelCtx=f}return t.__ieDyn=1,t}()},85282:function(t,e,n){n.d(e,{JP:function(){return w},Nz:function(){return x},UY:function(){return O},kj:function(){return m},p7:function(){return C}});var r=n(254),i=n(80221),o=n(60851),a=n(74539),s=n(98500),u="toGMTString",l="toUTCString",c="expires",d=null,h=null,f=null,p=(0,o.Me)(),g={},v={};function m(t,e){var n=x._ckMgr||v._ckMgr;return n||(n=x._ckMgr=x(t,e),v._ckMgr=n),n}function b(t){return!t||t.isEnabled()}function y(t,e){return!!(e&&t&&(0,a.kJ)(t.ignoreCookies))&&-1!==t.ignoreCookies[r.ou](e)}function w(t,e){var n;if(t)n=t.getCookieMgr();else if(e){var i=e[r.Lk];n=i._ckMgr?i._ckMgr:x(e)}return n||(n=m(e,(t||{})[r.eZ])),n}function x(t,e){var n,i=function(t){var e=t[r.Lk]=t[r.Lk]||{};if((0,a.sO)(e,"domain",t.cookieDomain,a.BX,a.le),(0,a.sO)(e,"path",t.cookiePath||"/",null,a.le),(0,a.le)(e.enabled)){var n=void 0;(0,a.o8)(t.isCookieUseDisabled)||(n=!t.isCookieUseDisabled),(0,a.o8)(t.disableCookiesUsage)||(n=!t.disableCookiesUsage),e.enabled=n}return e}(t||v),d=i.path||"/",f=i.domain,p=!1!==i.enabled,g=((n={isEnabled:function(){var t=p&&C(e),n=v._ckMgr;return t&&n&&g!==n&&(t=b(n)),t}})[r.$h]=function(t){p=!1!==t},n.set=function(t,e,n,p,v){var m=!1;if(b(g)&&!function(t,e){return!!(e&&t&&(0,a.kJ)(t.blockedCookies)&&-1!==t.blockedCookies[r.ou](e))||y(t,e)}(i,t)){var w={},x=(0,a.nd)(e||s.qS),C=x[r.ou](";");if(-1!==C&&(x=(0,a.nd)(e[r.zc](0,C)),w=S(e[r.zc](C+1))),(0,a.sO)(w,"domain",p||f,a.fQ,a.o8),!(0,a.le)(n)){var D=(0,o.w1)();if((0,a.o8)(w.expires)){var _=(0,a.m6)()+1e3*n;if(_>0){var T=new Date;T.setTime(_),(0,a.sO)(w,c,k(T,D?u:l)||k(T,D?u:l)||s.qS,a.fQ)}}D||(0,a.sO)(w,"max-age",s.qS+n,null,a.o8)}var P=(0,o.k$)();P&&"https:"===P.protocol&&((0,a.sO)(w,"secure",null,null,a.o8),null===h&&(h=!O(((0,o.jW)()||{})[r.qV])),h&&(0,a.sO)(w,"SameSite","None",null,a.o8)),(0,a.sO)(w,"path",v||d,null,a.o8),(i.setCookie||$)(t,F(x,w)),m=!0}return m},n.get=function(t){var e=s.qS;return b(g)&&!y(i,t)&&(e=(i.getCookie||D)(t)),e},n.del=function(t,e){var n=!1;return b(g)&&(n=g.purge(t,e)),n},n.purge=function(t,n){var r,a=!1;if(C(e)){var u=((r={}).path=n||"/",r.expires="Thu, 01 Jan 1970 00:00:01 GMT",r);(0,o.w1)()||(u["max-age"]="0"),(i.delCookie||$)(t,F(s.qS,u)),a=!0}return a},n);return g._ckMgr=g,g}function C(t){if(null===d){d=!1;try{d=void 0!==(p||{}).cookie}catch(e){(0,i.kP)(t,2,68,"Cannot access document.cookie - "+(0,a.jj)(e),{exception:(0,o.eU)(e)})}}return d}function S(t){var e={};if(t&&t[r.R5]){var n=(0,a.nd)(t)[r.w6](";");(0,a.tO)(n,(function(t){if(t=(0,a.nd)(t||s.qS)){var n=t[r.ou]("=");-1===n?e[t]=null:e[(0,a.nd)(t[r.zc](0,n))]=(0,a.nd)(t[r.zc](n+1))}}))}return e}function k(t,e){return(0,a.mf)(t[e])?t[e]():null}function F(t,e){var n=t||s.qS;return(0,a.rW)(e,(function(t,e){n+="; "+t+((0,a.le)(e)?s.qS:"="+e)})),n}function D(t){var e=s.qS;if(p){var n=p.cookie||s.qS;f!==n&&(g=S(n),f=n),e=(0,a.nd)(g[t]||s.qS)}return e}function $(t,e){p&&(p.cookie=t+"="+e)}function O(t){return!!(0,a.HD)(t)&&(!(!(0,a._Q)(t,"CPU iPhone OS 12")&&!(0,a._Q)(t,"iPad; CPU OS 12"))||(!!((0,a._Q)(t,"Macintosh; Intel Mac OS X 10_14")&&(0,a._Q)(t,"Version/")&&(0,a._Q)(t,"Safari"))||(!(!(0,a._Q)(t,"Macintosh; Intel Mac OS X 10_14")||!(0,a.Id)(t,"AppleWebKit/605.1.15 (KHTML, like Gecko)"))||(!(!(0,a._Q)(t,"Chrome/5")&&!(0,a._Q)(t,"Chrome/6"))||(!(!(0,a._Q)(t,"UnrealEngine")||(0,a._Q)(t,"Chrome"))||!(!(0,a._Q)(t,"UCBrowser/12")&&!(0,a._Q)(t,"UCBrowser/11")))))))}},39860:function(t,e,n){n.d(e,{DO:function(){return g},GW:function(){return f},Jj:function(){return p}});var r,i=n(26454),o=n(254),a=n(85282),s=n(60851),u=n(10607),l=n(74539),c=n(98500),d=n(42774),h=null;function f(){var t=g();return t[o.zc](0,8)+"-"+t[o.zc](8,12)+"-"+t[o.zc](12,16)+"-"+t[o.zc](16,20)+"-"+t[o.zc](20)}function p(){var t=(0,s.r)();return t&&t.now?t.now():(0,l.m6)()}function g(){for(var t,e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n=c.qS,r=0;r<4;r++)n+=e[15&(t=(0,d._l)())]+e[t>>4&15]+e[t>>8&15]+e[t>>12&15]+e[t>>16&15]+e[t>>20&15]+e[t>>24&15]+e[t>>28&15];var i=e[8+(3&(0,d._l)())|0];return n[o.Jn](0,8)+n[o.Jn](9,4)+"4"+n[o.Jn](13,3)+i+n[o.Jn](16,3)+n[o.Jn](19,12)}var v={_canUseCookies:void 0,isTypeof:l.Ym,isUndefined:l.o8,isNullOrUndefined:l.le,hasOwnProperty:l.nr,isFunction:l.mf,isObject:l.Kn,isDate:l.J_,isArray:l.kJ,isError:l.VZ,isString:l.HD,isNumber:l.hj,isBoolean:l.jn,toISOString:l.Y6,arrForEach:l.tO,arrIndexOf:l.UA,arrMap:l.Mr,arrReduce:l.Xz,strTrim:l.nd,objCreate:i.pu,objKeys:l.FY,objDefineAccessors:l.l_,addEventHandler:u.Ib,dateNow:l.m6,isIE:s.w1,disableCookies:function(){m()[o.$h](!1)},newGuid:f,perfNow:p,newId:d.pZ,randomValue:d.az,random32:d._l,mwcRandomSeed:d.CN,mwcRandom32:d.F6,generateW3CId:g};u.pZ,u.pZ,u.pD,u.pD;function m(t,e){var n=(0,a.kj)(t,e),i=v._canUseCookies;return null===h&&(h=[],r=i,(0,l.l_)(v,"_canUseCookies",(function(){return r}),(function(t){r=t,(0,l.tO)(h,(function(e){e[o.$h](t)}))}))),-1===(0,l.UA)(h,n)&&h[o.MW](n),(0,l.jn)(i)&&n[o.$h](i),(0,l.jn)(r)&&n[o.$h](r),n}},5482:function(t,e,n){n.d(e,{J:function(){return p},K:function(){return g}});var r=n(21908),i=n(254),o=n(74539),a=n(98500),s=n(42774),u=r.RJ,l="2.8.9",c="."+(0,s.pZ)(6),d=0;function h(t){return 1===t[i.xv]||9===t[i.xv]||!+t[i.xv]}function f(t,e){var n=e[t.id];if(!n){n={};try{h(e)&&(function(t,e,n){if(u)try{return u(t,e,{value:n,enumerable:!1,configurable:!0}),!0}catch(t){}return!1}(e,t.id,n)||(e[t.id]=n))}catch(t){}}return n}function p(t,e){return void 0===e&&(e=!1),(0,o.Gf)(t+d+++(e?".2.8.9":a.qS)+c)}function g(t){var e={id:p("_aiData-"+(t||a.qS)+"."+l),accept:function(t){return h(t)},get:function(t,n,r,i){var a=t[e.id];return a?a[(0,o.Gf)(n)]:(i&&((a=f(e,t))[(0,o.Gf)(n)]=r),r)},kill:function(t,e){if(t&&t[e])try{delete t[e]}catch(t){}}};return e}},33220:function(t,e,n){n.d(e,{j:function(){return l},p:function(){return c}});var r,i=n(254),o=n(60851),a=["eventsSent","eventsDiscarded","eventsSendRequest","perfEvent"],s=null;function u(t,e){return function(){var n=arguments,r=l(e);if(r){var o=r.listener;o&&o[t]&&o[t][i.ZV](o,n)}}}function l(t){var e,n=s;return n||!0===t.disableDbgExt||(n=s||((e=(0,o.a8)("Microsoft"))&&(s=e.ApplicationInsights),s)),n?n.ChromeDbgExt:null}function c(t){if(!r){r={};for(var e=0;e<a[i.R5];e++)r[a[e]]=u(a[e],t)}return r}},80221:function(t,e,n){n.d(e,{AQ:function(){return f},jV:function(){return v},kP:function(){return g},lQ:function(){return d},vH:function(){return h}});var r=n(23806),i=n(254),o=n(33220),a=n(60851),s=n(74539),u=n(98500);function l(t){return t?'"'+t[i.i7](/\"/g,u.qS)+'"':u.qS}function c(t,e){var n=(0,a.dr)();if(n){var r="log";n[t]&&(r=t),(0,s.mf)(n[r])&&n[r](e)}}var d=function(){function t(t,e,n,r){void 0===n&&(n=!1);var o=this;o[i.Gc]=t,o[i.gU]=(n?"AI: ":"AI (Internal): ")+t;var s=u.qS;(0,a.nS)()&&(s=(0,a.xA)().stringify(r));var c=(e?" message:"+l(e):u.qS)+(r?" props:"+l(s):u.qS);o[i.gU]+=c}return t.dataType="MessageData",t}();function h(t,e){return(t||{})[i.eZ]||new f(e)}var f=function(){function t(e){this.identifier="DiagnosticLogger",this.queue=[];var n,l,h,f,p=0,g={};(0,r.Z)(t,this,(function(t){function r(e,n){if(!(p>=h)){var r=!0,o="AITR_"+n[i.Gc];if(g[o]?r=!1:g[o]=!0,r&&(e<=l&&(t.queue[i.MW](n),p++,v(1===e?"error":"warn",n)),p===h)){var a="Internal events throttle limit per PageView reached for this app.",s=new d(23,a,!1);t.queue[i.MW](s),1===e?t[u.ys](a):t[u.cL](a)}}}function v(t,n){var r=(0,o.j)(e||{});r&&r[i.mc]&&r[i.mc](t,n)}!function(t){n=(0,s.v4)(t.loggingLevelConsole,0),l=(0,s.v4)(t.loggingLevelTelemetry,1),h=(0,s.v4)(t.maxMessageLimit,25),f=(0,s.v4)(t[i.Fr],!1)}(e||{}),t.consoleLoggingLevel=function(){return n},t.telemetryLoggingLevel=function(){return l},t.maxInternalMessageLimit=function(){return h},t[i.Fr]=function(){return f},t.throwInternal=function(e,o,l,c,h){void 0===h&&(h=!1);var p=new d(o,l,h,c);if(f)throw(0,a.eU)(p);var m=1===e?u.ys:u.cL;if((0,s.o8)(p[i.gU]))v("throw"+(1===e?"Critical":"Warning"),p);else{if(h){var b=+p[i.Gc];!g[b]&&n>=e&&(t[m](p[i.gU]),g[b]=!0)}else n>=e&&t[m](p[i.gU]);r(e,p)}},t[u.cL]=function(t){c("warn",t),v("warning",t)},t[u.ys]=function(t){c("error",t),v("error",t)},t.resetInternalMessageCount=function(){p=0,g={}},t[i.jk]=r}))}return t.__ieDyn=1,t}();function p(t){return t||new f}function g(t,e,n,r,i,o){void 0===o&&(o=!1),p(t).throwInternal(e,n,r,i,o)}function v(t,e){p(t)[u.cL](e)}},60851:function(t,e,n){n.d(e,{JO:function(){return N},Jj:function(){return x},MF:function(){return B},MX:function(){return P},Me:function(){return S},Nv:function(){return C},Z3:function(){return E},a8:function(){return y},b$:function(){return L},cp:function(){return V},dr:function(){return $},eU:function(){return j},gz:function(){return I},jW:function(){return F},k$:function(){return D},nS:function(){return _},r:function(){return O},w1:function(){return A},xA:function(){return T}});var r=n(21908),i=n(26454),o=n(254),a=n(74539),s=n(98500),u="window",l="JSON",c="msie",d="trident/",h="XMLHttpRequest",f=null,p=null,g=!1,v=null,m=null;function b(t,e){var n=!1;if(t){try{if(!(n=e in t)){var i=t[r.hB];i&&(n=e in i)}}catch(t){}if(!n)try{var o=new t;n=!(0,a.o8)(o[e])}catch(t){}}return n}function y(t){var e=(0,i.Rd)();return e&&e[t]?e[t]:t===u&&w()?window:null}function w(){return Boolean(typeof window===r.fK&&window)}function x(){return w()?window:y(u)}function C(){return Boolean(typeof document===r.fK&&document)}function S(){return C()?document:y("document")}function k(){return Boolean(typeof navigator===r.fK&&navigator)}function F(){return k()?navigator:y("navigator")}function D(t){if(t&&g){var e=y("__mockLocation");if(e)return e}return typeof location===r.fK&&location?location:y("location")}function $(){return typeof console!==r.jA?console:y("console")}function O(){return y("performance")}function _(){return Boolean(typeof JSON===r.fK&&JSON||null!==y(l))}function T(){return _()?JSON||y(l):null}function P(){return y("crypto")}function I(){return y("msCrypto")}function L(){var t=F();return!(!t||!t.product)&&"ReactNative"===t.product}function A(){var t=F();if(t&&(t[o.qV]!==p||null===f)){var e=((p=t[o.qV])||s.qS)[o.T1]();f=(0,a._Q)(e,c)||(0,a._Q)(e,d)}return f}function j(t){var e=Object[r.hB].toString[o._S](t),n=s.qS;return"[object Error]"===e?n="{ stack: '"+t.stack+"', message: '"+t.message+"', name: '"+t[o.I]+"'":_()&&(n=T().stringify(t)),e+n}function B(){return null===m&&(m=k()&&Boolean(F().sendBeacon)),m}function N(t){var e=!1;try{e=!!y("fetch");var n=y("Request");e&&t&&n&&(e=b(n,"keepalive"))}catch(t){}return e}function V(){return null===v&&(v=typeof XDomainRequest!==r.jA)&&E()&&(v=v&&!b(y(h),"withCredentials")),v}function E(){var t=!1;try{t=!!y(h)}catch(t){}return t}},10607:function(t,e,n){n.d(e,{C9:function(){return N},Ib:function(){return P},JA:function(){return j},TJ:function(){return B},Yl:function(){return E},c9:function(){return A},jU:function(){return D},nD:function(){return V},pD:function(){return T},pZ:function(){return _}});var r=n(254),i=n(5482),o=n(60851),a=n(74539),s=n(98500),u="events",l="visibilitychange",c="pagehide",d="pageshow",h="unload",f="beforeunload",p=(0,i.J)("aiEvtPageHide"),g=(0,i.J)("aiEvtPageShow"),v=/\.[\.]+/g,m=/[\.]+$/,b=1,y=(0,i.K)("events"),w=/^([^.]*)(?:\.(.+)|)/;function x(t){return t&&t[r.i7]?t[r.i7](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g,s.qS):t}function C(t,e){var n;if(e){var i=s.qS;(0,a.kJ)(e)?(i=s.qS,(0,a.tO)(e,(function(t){(t=x(t))&&("."!==t[0]&&(t="."+t),i+=t)}))):i=x(e),i&&("."!==i[0]&&(i="."+i),t=(t||s.qS)+i)}var o=w.exec(t||s.qS)||[];return(n={})[r.P6]=o[1],n.ns=(o[2]||s.qS).replace(v,".").replace(m,s.qS)[r.w6](".").sort().join("."),n}function S(t,e,n){void 0===n&&(n=!0);var r=y.get(t,u,{},n),i=r[e];return i||(i=r[e]=[]),i}function k(t,e,n,i){t&&e&&e[r.P6]&&(t.removeEventListener?t.removeEventListener(e[r.P6],n,i):t.detachEvent&&t.detachEvent("on"+e[r.P6],n))}function F(t,e,n,i){for(var o=e[r.R5];o--;){var a=e[o];a&&(n.ns&&n.ns!==a.evtName.ns||i&&!i(a)||(k(t,a.evtName,a[r.Kn],a.capture),e[r.cb](o,1)))}}function D(t,e){return e?C("xx",(0,a.kJ)(e)?[t].concat(e):[t,e]).ns[r.w6]("."):t}function $(t,e,n,i,o){var a;void 0===o&&(o=!1);var s=!1;if(t)try{var u=C(e,i);if(s=function(t,e,n,i){var o=!1;return t&&e&&e[r.P6]&&n&&(t.addEventListener?(t.addEventListener(e[r.P6],n,i),o=!0):t.attachEvent&&(t.attachEvent("on"+e[r.P6],n),o=!0)),o}(t,u,n,o),s&&y.accept(t)){var l=((a={guid:b++,evtName:u})[r.Kn]=n,a.capture=o,a);S(t,u.type)[r.MW](l)}}catch(t){}return s}function O(t,e,n,i,o){if(void 0===o&&(o=!1),t)try{var s=C(e,i),l=!1;!function(t,e,n){if(e[r.P6])F(t,S(t,e[r.P6]),e,n);else{var i=y.get(t,u,{});(0,a.rW)(i,(function(r,i){F(t,i,e,n)})),0===(0,a.FY)(i)[r.R5]&&y.kill(t,u)}}(t,s,(function(t){return!((!s.ns||n)&&t[r.Kn]!==n)&&(l=!0,!0)})),l||k(t,s,n,o)}catch(t){}}function _(t,e,n,r){return void 0===r&&(r=!1),$(t,e,n,null,r)}function T(t,e,n,r){void 0===r&&(r=!1),O(t,e,n,null,r)}function P(t,e,n){var r=!1,i=(0,o.Jj)();i&&(r=$(i,t,e,n),r=$(i.body,t,e,n)||r);var a=(0,o.Me)();return a&&(r=$(a,t,e,n)||r),r}function I(t,e,n,i){var o=!1;return e&&t&&t[r.R5]>0&&(0,a.tO)(t,(function(t){t&&(n&&-1!==(0,a.UA)(n,t)||(o=P(t,e,i)||o))})),o}function L(t,e,n){t&&(0,a.kJ)(t)&&(0,a.tO)(t,(function(t){t&&function(t,e,n){var r=(0,o.Jj)();r&&(O(r,t,e,n),O(r.body,t,e,n));var i=(0,o.Me)();i&&O(i,t,e,n)}(t,e,n)}))}function A(t,e,n){return function(t,e,n,i){var o=!1;return e&&t&&(0,a.kJ)(t)&&!(o=I(t,e,n,i))&&n&&n[r.R5]>0&&(o=I(t,e,null,i)),o}([f,h,c],t,e,n)}function j(t,e){L([f,h,c],t,e)}function B(t,e,n){var r=D(p,n),i=I([c],t,e,r);return e&&-1!==(0,a.UA)(e,l)||(i=I([l],(function(e){var n=(0,o.Me)();t&&n&&"hidden"===n.visibilityState&&t(e)}),e,r)||i),!i&&e&&(i=B(t,null,n)),i}function N(t,e){var n=D(p,e);L([c],t,n),L([l],null,n)}function V(t,e,n){var r=D(g,n),i=I([d],t,e,r);return!(i=I([l],(function(e){var n=(0,o.Me)();t&&n&&"visible"===n.visibilityState&&t(e)}),e,r)||i)&&e&&(i=V(t,null,n)),i}function E(t,e){var n=D(g,e);L([d],t,n),L([l],null,n)}},74539:function(t,e,n){n.d(e,{Ax:function(){return ht},BX:function(){return $},FL:function(){return et},FY:function(){return Y},Gf:function(){return P},HD:function(){return E},Id:function(){return L},J_:function(){return B},Kn:function(){return _},Mr:function(){return U},Oi:function(){return ct},UA:function(){return Z},VZ:function(){return V},Vb:function(){return dt},Xz:function(){return W},Y6:function(){return z},Ym:function(){return k},_A:function(){return tt},_Q:function(){return j},_y:function(){return ut},fQ:function(){return st},hj:function(){return R},jj:function(){return rt},jn:function(){return M},kJ:function(){return N},l_:function(){return Q},le:function(){return D},m6:function(){return nt},mf:function(){return T},mm:function(){return ft},nd:function(){return K},nr:function(){return O},o8:function(){return F},qK:function(){return ot},rW:function(){return I},sO:function(){return it},tO:function(){return q},v4:function(){return at},xe:function(){return A}});var r=n(21908),i=n(26454),o=n(254),a=n(98500),s="constructor",u=r.RJ,l=r.Pw.freeze,c=(r.Pw.seal,r.Pw.keys),d=String[r.hB],h=d.trim,f=d.endsWith,p=d.startsWith,g=Date[r.hB].toISOString,v=Array.isArray,m=r.V4.toString,b=r.CY.toString,y=b[o._S](r.Pw),w=/-([a-z])/g,x=/([^\w\d_$])/g,C=/^(\d+[\w\d_$])/,S=Object.getPrototypeOf;function k(t,e){return typeof t===e}function F(t){return void 0===t||typeof t===r.jA}function D(t){return null===t||F(t)}function $(t){return!D(t)}function O(t,e){return!(!t||!r.CY[o._S](t,e))}function _(t){return!(!t||typeof t!==r.fK)}function T(t){return!(!t||typeof t!==r.cb)}function P(t){var e=t;return e&&E(e)&&(e=(e=(e=e[o.i7](w,(function(t,e){return e.toUpperCase()})))[o.i7](x,"_"))[o.i7](C,(function(t,e){return"_"+e}))),e}function I(t,e){if(t)for(var n in t)r.CY[o._S](t,n)&&e[o._S](t,n,t[n])}function L(t,e){var n=!1;return t&&e&&!(n=t===e)&&(n=f?t.endsWith(e):function(t,e){var n=!1,r=e?e[o.R5]:0,i=t?t[o.R5]:0;if(r&&i&&i>=r&&!(n=t===e)){for(var a=i-1,s=r-1;s>=0;s--){if(t[a]!=e[s])return!1;a--}n=!0}return n}(t,e)),n}function A(t,e){var n=!1;return t&&e&&!(n=t===e)&&(n=p?t.startsWith(e):function(t,e){var n=!1,r=e?e[o.R5]:0;if(t&&r&&t[o.R5]>=r&&!(n=t===e)){for(var i=0;i<r;i++)if(t[i]!==e[i])return!1;n=!0}return n}(t,e)),n}function j(t,e){return!(!t||!e)&&-1!==t[o.ou](e)}function B(t){return!(!t||"[object Date]"!==m[o._S](t))}var N=v||function(t){return!(!t||"[object Array]"!==m[o._S](t))};function V(t){return!(!t||"[object Error]"!==m[o._S](t))}function E(t){return"string"==typeof t}function R(t){return"number"==typeof t}function M(t){return"boolean"==typeof t}function H(t){var e=!1;if(t&&"object"==typeof t){var n=S?S(t):function(t){if(t){if(S)return S(t);var e=t.__proto__||t[r.hB]||t.constructor;if(e)return e}return null}(t);n?(n.constructor&&r.CY[o._S](n,s)&&(n=n.constructor),e=typeof n===r.cb&&b[o._S](n)===y):e=!0}return e}function z(t){if(t)return g?t.toISOString():function(t){if(t&&t.getUTCFullYear){var e=function(t){var e=String(t);return 1===e[o.R5]&&(e="0"+e),e};return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"."+String((t.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}(t)}function q(t,e,n){var r=t[o.R5];try{for(var i=0;i<r&&(!(i in t)||-1!==e[o._S](n||t,t[i],i,t));i++);}catch(t){}}function Z(t,e,n){if(t){if(t.indexOf)return t.indexOf(e,n);var r=t[o.R5],i=n||0;try{for(var a=Math.max(i>=0?i:r-Math.abs(i),0);a<r;a++)if(a in t&&t[a]===e)return a}catch(t){}}return-1}function U(t,e,n){var r;if(t){if(t.map)return t.map(e,n);var i=t[o.R5],a=n||t;r=new Array(i);try{for(var s=0;s<i;s++)s in t&&(r[s]=e[o._S](a,t[s],t))}catch(t){}}return r}function W(t,e,n){var r;if(t){if(t.reduce)return t.reduce(e,n);var i=t[o.R5],a=0;if(arguments[o.R5]>=3)r=n;else{for(;a<i&&!(a in t);)a++;r=t[a++]}for(;a<i;)a in t&&(r=e(r,t[a],a,t)),a++}return r}function K(t){return t&&(t=h&&t.trim?t.trim():t[o.i7]?t[o.i7](/^\s+|(?=\s)\s+$/g,a.qS):t),t}var G=!{toString:null}.propertyIsEnumerable("toString"),J=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function Y(t){var e=typeof t;if(e===r.cb||e===r.fK&&null!==t||(0,i.ZU)("objKeys called on non-object"),!G&&c)return c(t);var n=[];for(var a in t)t&&r.CY[o._S](t,a)&&n[o.MW](a);if(G)for(var s=J[o.R5],u=0;u<s;u++)t&&r.CY[o._S](t,J[u])&&n[o.MW](J[u]);return n}function Q(t,e,n,r){if(u)try{var i={enumerable:!0,configurable:!0};return n&&(i.get=n),r&&(i.set=r),u(t,e,i),!0}catch(t){}return!1}function X(t){return t}function tt(t){return l&&I(t,(function(t,e){(N(e)||_(e))&&l(e)})),et(t)}var et=l||X;function nt(){var t=Date;return t.now?t.now():(new t).getTime()}function rt(t){return V(t)?t[o.I]:a.qS}function it(t,e,n,r,i){var o=n;return t&&((o=t[e])===n||i&&!i(o)||r&&!r(n)||(o=n,t[e]=o)),o}function ot(t,e,n){var r;return t?!(r=t[e])&&D(r)&&(r=F(n)?{}:n,t[e]=r):r=F(n)?{}:n,r}function at(t,e){return D(t)?e:t}function st(t){return!!t}function ut(t){throw new Error(t)}function lt(t,e){var n=null,r=null;return T(t)?n=t:r=t,function(){var t=arguments;if(n&&(r=n()),r)return r[e][o.ZV](r,t)}}function ct(t,e,n,r,i){t&&e&&n&&(!1!==i||F(t[e]))&&(t[e]=lt(n,r))}function dt(t,e,n,r){return t&&e&&_(t)&&N(n)&&q(n,(function(n){E(n)&&ct(t,n,e,n,r)})),t}function ht(t){return t&&r.rl&&(t=(0,r.Pw)((0,r.rl)({},t))),t}function ft(t,e,n,i,a,s){var u=arguments,l=u[0]||{},c=u[o.R5],d=!1,h=1;for(c>0&&M(l)&&(d=l,l=u[h]||{},h++),_(l)||(l={});h<c;h++){var f=u[h],p=N(f),g=_(f);for(var v in f){var m=p&&v in f||g&&r.CY[o._S](f,v);if(m){var b=f[v],y=void 0;if(d&&b&&((y=N(b))||H(b))){var w=l[v];y?N(w)||(w=[]):H(w)||(w={}),b=ft(d,w,b)}void 0!==b&&(l[v]=b)}}}return l}},98500:function(t,e,n){n.d(e,{$F:function(){return f},C$:function(){return g},DN:function(){return a},Z:function(){return i},Zh:function(){return u},cL:function(){return m},f_:function(){return p},hL:function(){return c},js:function(){return l},kl:function(){return b},mE:function(){return s},oV:function(){return o},qS:function(){return r},uC:function(){return h},yi:function(){return d},ys:function(){return v}});var r="",i="channels",o="core",a="createPerfMgr",s="disabled",u="extensionConfig",l="extensions",c="processTelemetry",d="priority",h="eventsSent",f="eventsDiscarded",p="eventsSendRequest",g="perfEvent",v="errorToConsole",m="warnToConsole",b="getPerfMgr"},26932:function(t,e,n){n.d(e,{Jk:function(){return l},Lm:function(){return d},j5:function(){return h}});var r=n(23806),i=n(254),o=n(74539),a=n(98500),s=null,u=function(){function t(e,n,r){var a,s=this,u=!1;(s.start=(0,o.m6)(),s[i.I]=e,s[i.d]=r,s[i.PL]=function(){return!1},(0,o.mf)(n))&&(u=(0,o.l_)(s,"payload",(function(){return!a&&(0,o.mf)(n)&&(a=n(),n=null),a})));s[i.T]=function(e){return e?e===t.ParentContextKey||e===t.ChildrenContextKey?s[e]:(s.ctx||{})[e]:null},s[i.wu]=function(e,n){if(e)if(e===t.ParentContextKey)s[e]||(s[i.PL]=function(){return!0}),s[e]=n;else if(e===t.ChildrenContextKey)s[e]=n;else{(s.ctx=s.ctx||{})[e]=n}},s[i.Km]=function(){var e=0,r=s[i.T](t.ChildrenContextKey);if((0,o.kJ)(r))for(var a=0;a<r[i.R5];a++){var l=r[a];l&&(e+=l[i.Z_])}s[i.Z_]=(0,o.m6)()-s.start,s.exTime=s[i.Z_]-e,s[i.Km]=function(){},!u&&(0,o.mf)(n)&&(s.payload=n())}}return t.ParentContextKey="parent",t.ChildrenContextKey="childEvts",t}(),l=function(){function t(e){this.ctx={},(0,r.Z)(t,this,(function(t){t.create=function(t,e,n){return new u(t,e,n)},t.fire=function(t){t&&(t[i.Km](),e&&(0,o.mf)(e[a.C$])&&e[a.C$](t))},t[i.wu]=function(e,n){e&&((t.ctx=t.ctx||{})[e]=n)},t[i.T]=function(e){return(t.ctx||{})[e]}}))}return t.__ieDyn=1,t}(),c="CoreUtils.doPerf";function d(t,e,n,r,o){if(t){var s=t;if(s[a.kl]&&(s=s[a.kl]()),s){var l=void 0,d=s[i.T](c);try{if(l=s.create(e(),r,o)){if(d&&l[i.wu]&&(l[i.wu](u.ParentContextKey,d),d[i.T]&&d[i.wu])){var h=d[i.T](u.ChildrenContextKey);h||(h=[],d[i.wu](u.ChildrenContextKey,h)),h[i.MW](l)}return s[i.wu](c,l),n(l)}}catch(t){l&&l[i.wu]&&l[i.wu]("exception",t)}finally{l&&s.fire(l),s[i.wu](c,d)}}}return n()}function h(){return s}},69509:function(t,e,n){n.d(e,{Bt:function(){return p},CD:function(){return f},jV:function(){return v},xy:function(){return g}});var r=n(254),i=n(80221),o=n(60851),a=n(74539),s=n(98500),u=n(26932),l=n(39289),c="TelemetryPluginChain",d=0;function h(t,e,n,u){var l=null,c=[];null!==u&&(l=u?function(t,e,n){for(;t;){if(t[r.TO]()===n)return t;t=t[r.W2]()}return v([n],e[r.TC]||{},e)}(t,n,u):t);var d={_next:function(){var t=l;if(l=t?t[r.W2]():null,!t){var e=c;e&&e[r.R5]>0&&((0,a.tO)(e,(function(t){try{t.func[r._S](t.self,t.args)}catch(t){(0,i.kP)(n[r.eZ],2,73,"Unexpected Exception during onComplete - "+(0,o.eU)(t))}})),c=[])}return t},ctx:{core:function(){return n},diagLog:function(){return(0,i.vH)(n,e)},getCfg:function(){return e},getExtCfg:h,getConfig:function(t,n,r){void 0===r&&(r=!1);var i,o=h(t,null);o&&!(0,a.le)(o[n])?i=o[n]:e&&!(0,a.le)(e[n])&&(i=e[n]);return(0,a.le)(i)?r:i},hasNext:function(){return!!l},getNext:function(){return l},setNext:function(t){l=t},iterate:function(t){var e;for(;e=d._next();){var n=e[r.TO]();n&&t(n)}},onComplete:function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];t&&c[r.MW]({func:t,self:(0,a.o8)(e)?d.ctx:e,args:n})}}};function h(t,n,r){var i;if(void 0===n&&(n={}),void 0===r&&(r=0),e){var o=e[s.Zh];o&&t&&(i=o[t])}if(i){if((0,a.Kn)(n)&&0!==r){var u=(0,a.mm)(!0,n,i);e&&2===r&&(0,a.rW)(n,(function(t){if((0,a.le)(u[t])){var n=e[t];(0,a.le)(n)||(u[t]=n)}})),i=u}}else i=n;return i}return d}function f(t,e,n,i){var o=h(t,e,n,i),u=o.ctx;return u[r.uL]=function(t){var e=o._next();return e&&e[s.hL](t,u),!e},u[r.zV]=function(t,i){return void 0===t&&(t=null),(0,a.kJ)(t)&&(t=v(t,e,n,i)),f(t||u[r.W2](),e,n,i)},u}function p(t,e,n){var i=e[r.TC]||{},o=h(t,i,e,n),s=o.ctx;return s[r.uL]=function(t){var e=o._next();return e&&e.unload(s,t),!e},s[r.zV]=function(t,n){return void 0===t&&(t=null),(0,a.kJ)(t)&&(t=v(t,i,e,n)),p(t||s[r.W2](),e,n)},s}function g(t,e,n){var i=e[r.TC]||{},o=h(t,i,e,n).ctx;return o[r.uL]=function(t){return o.iterate((function(e){(0,a.mf)(e[r.Tu])&&e[r.Tu](o,t)}))},o[r.zV]=function(t,n){return void 0===t&&(t=null),(0,a.kJ)(t)&&(t=v(t,i,e,n)),g(t||o[r.W2](),e,n)},o}function v(t,e,n,h){var p=null,g=!h;if((0,a.kJ)(t)&&t[r.R5]>0){var m=null;(0,a.tO)(t,(function(t){if(g||h!==t||(g=!0),g&&t&&(0,a.mf)(t[s.hL])){var v=function(t,e,n){var h,p=null,g=(0,a.mf)(t[s.hL]),v=(0,a.mf)(t[r.Jd]);h=t?t[r.pZ]+"-"+t[s.yi]+"-"+d++:"Unknown-0-"+d++;var m={getPlugin:function(){return t},getNext:function(){return p},processTelemetry:w,unload:x,update:C,_id:h,_setNext:function(t){p=t}};function b(){var r;return t&&(0,a.mf)(t._getTelCtx)&&(r=t._getTelCtx()),r||(r=f(m,e,n)),r}function y(e,n,a,l,d){var f=!1,g=t?t[r.pZ]:c,v=e._hasRun;return v||(v=e._hasRun={}),e.setNext(p),t&&(0,u.Lm)(e[s.oV](),(function(){return g+":"+a}),(function(){v[h]=!0;try{var t=p?p._id:s.qS;t&&(v[t]=!1),f=n(e)}catch(t){var u=!p||v[p._id];u&&(f=!0),p&&u||(0,i.kP)(e[r.mc](),1,73,"Plugin ["+g+"] failed during "+a+" - "+(0,o.eU)(t)+", run flags: "+(0,o.eU)(v))}}),l,d),f}function w(e,n){function i(n){if(!t||!g)return!1;var i=(0,l.OY)(t);return!i[r.fi]&&!i[s.mE]&&(v&&t[r.Jd](p),t[s.hL](e,n),!0)}y(n=n||b(),i,"processTelemetry",(function(){return{item:e}}),!e.sync)||n[r.uL](e)}function x(e,n){function i(){var i=!1;if(t){var o=(0,l.OY)(t),a=t[s.oV]||o[s.oV];!t||a&&a!==e.core()||o[r.fi]||(o[s.oV]=null,o[r.fi]=!0,o[r.yl]=!1,t[r.fi]&&!0===t[r.fi](e,n)&&(i=!0))}return i}y(e,i,"unload",(function(){}),n[r.d])||e[r.uL](n)}function C(e,n){function i(){var i=!1;if(t){var o=(0,l.OY)(t),a=t[s.oV]||o[s.oV];!t||a&&a!==e.core()||o[r.fi]||t[r.Tu]&&!0===t[r.Tu](e,n)&&(i=!0)}return i}y(e,i,"update",(function(){}),!1)||e[r.uL](n)}return(0,a.FL)(m)}(t,e,n);p||(p=v),m&&m._setNext(v),m=v}}))}return h&&!p?v([h],e,n):p}},42774:function(t,e,n){n.d(e,{CN:function(){return v},F6:function(){return m},_l:function(){return g},az:function(){return p},pZ:function(){return b}});var r=n(254),i=n(60851),o=n(74539),a=n(98500),s=4294967296,u=4294967295,l=!1,c=123456789,d=987654321;function h(t){t<0&&(t>>>=0),c=123456789+t&u,d=987654321-t&u,l=!0}function f(){try{var t=2147483647&(0,o.m6)();h((Math.random()*s^t)+t)}catch(t){}}function p(t){return t>0?Math.floor(g()/u*(t+1))>>>0:0}function g(t){var e=0,n=(0,i.MX)()||(0,i.gz)();return n&&n.getRandomValues&&(e=n.getRandomValues(new Uint32Array(1))[0]&u),0===e&&(0,i.w1)()&&(l||f(),e=m()&u),0===e&&(e=Math.floor(s*Math.random()|0)),t||(e>>>=0),e}function v(t){t?h(t):f()}function m(t){var e=((d=36969*(65535&d)+(d>>16)&u)<<16)+(65535&(c=18e3*(65535&c)+(c>>16)&u))>>>0&u|0;return t||(e>>>=0),e}function b(t){void 0===t&&(t=22);for(var e=g()>>>0,n=0,i=a.qS;i[r.R5]<t;)n++,i+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63&e),e>>>=6,5===n&&(e=(g()<<2&4294967295|3&e)>>>0,n=0);return i}},39289:function(t,e,n){n.d(e,{AA:function(){return d},OY:function(){return l},Yn:function(){return h},bP:function(){return c}});var r=n(254),i=n(5482),o=n(74539),a=n(98500),s=n(54480),u=(0,i.K)("plugin");function l(t){return u.get(t,"state",{},!0)}function c(t,e){for(var n,i=[],s=null,u=t[r.W2]();u;){var c=u[r.TO]();if(c){s&&(0,o.mf)(s[r.Jd])&&(0,o.mf)(c[a.hL])&&s[r.Jd](c);((0,o.mf)(c[r.yl])?c[r.yl]():(n=l(c))[r.yl])||i[r.MW](c),s=c,u=u[r.W2]()}}(0,o.tO)(i,(function(i){var o=t[a.oV]();i[r.VL](t.getCfg(),o,e,t[r.W2]()),n=l(i),i[a.oV]||n[a.oV]||(n[a.oV]=o),n[r.yl]=!0,delete n[r.fi]}))}function d(t){return t.sort((function(t,e){var n=0;if(e){var r=(0,o.mf)(e[a.hL]);(0,o.mf)(t[a.hL])?n=r?t[a.yi]-e[a.yi]:1:r&&(n=-1)}else n=t?1:-1;return n}))}function h(t){var e={};return{getName:function(){return e[r.I]},setName:function(n){t&&t.setName(n),e[r.I]=n},getTraceId:function(){return e[r.nY]},setTraceId:function(n){t&&t.setTraceId(n),(0,s.jN)(n)&&(e[r.nY]=n)},getSpanId:function(){return e[r._d]},setSpanId:function(n){t&&t.setSpanId(n),(0,s.Lc)(n)&&(e[r._d]=n)},getTraceFlags:function(){return e[r.T0]},setTraceFlags:function(n){t&&t.setTraceFlags(n),e[r.T0]=n}}}},9894:function(t,e,n){n.d(e,{Y:function(){return s}});var r=n(254),i=n(80221),o=n(60851),a=n(74539);function s(){var t=[];return{add:function(e){e&&t[r.MW](e)},run:function(e,n){(0,a.tO)(t,(function(t){try{t(e,n)}catch(t){(0,i.kP)(e[r.mc](),2,73,"Unexpected error calling unload handler - "+(0,o.eU)(t))}})),t=[]}}}},54480:function(t,e,n){n.d(e,{Lc:function(){return u},jN:function(){return s}});var r=n(254),i="00000000000000000000000000000000",o="0000000000000000";function a(t,e,n){return!(!t||t[r.R5]!==e||t===n)&&!!t.match(/^[\da-f]*$/)}function s(t){return a(t,32,i)}function u(t){return a(t,16,o)}},254:function(t,e,n){n.d(e,{$h:function(){return E},F3:function(){return O},Fc:function(){return y},Fr:function(){return q},Gc:function(){return F},I:function(){return i},Jd:function(){return I},Jn:function(){return R},Km:function(){return X},Kn:function(){return G},LS:function(){return b},Lk:function(){return A},MW:function(){return s},P6:function(){return K},PL:function(){return J},R5:function(){return h},SD:function(){return g},T:function(){return Y},T0:function(){return nt},T1:function(){return U},TC:function(){return l},TO:function(){return w},Tu:function(){return _},VL:function(){return r},W2:function(){return T},ZV:function(){return H},Z_:function(){return f},_S:function(){return W},_d:function(){return et},cb:function(){return S},d:function(){return $},eZ:function(){return d},fi:function(){return k},g:function(){return v},gU:function(){return D},i7:function(){return z},iC:function(){return C},jk:function(){return Z},kL:function(){return x},mc:function(){return P},n7:function(){return m},nY:function(){return tt},ou:function(){return j},p$:function(){return c},pZ:function(){return a},qV:function(){return N},tb:function(){return o},uL:function(){return p},w6:function(){return V},wu:function(){return Q},xv:function(){return M},yl:function(){return u},zV:function(){return L},zc:function(){return B}});var r="initialize",i="name",o="getNotifyMgr",a="identifier",s="push",u="isInitialized",l="config",c="instrumentationKey",d="logger",h="length",f="time",p="processNext",g="getProcessTelContext",v="addNotificationListener",m="removeNotificationListener",b="stopPollingInternalLogs",y="onComplete",w="getPlugin",x="flush",C="_extensions",S="splice",k="teardown",F="messageId",D="message",$="isAsync",O="_doTeardown",_="update",T="getNext",P="diagLog",I="setNextPlugin",L="createNew",A="cookieCfg",j="indexOf",B="substring",N="userAgent",V="split",E="setEnabled",R="substr",M="nodeType",H="apply",z="replace",q="enableDebugExceptions",Z="logInternalMessage",U="toLowerCase",W="call",K="type",G="handler",J="isChildEvt",Y="getCtx",Q="setCtx",X="complete",tt="traceId",et="spanId",nt="traceFlags"},3232:function(t,e,n){n.d(e,{Z:function(){return st}});var r=n(45362),i=n(23806),o=(0,n(71178).By)({Unknown:0,NonRetryableStatus:1,InvalidEvent:2,SizeLimitExceeded:3,KillSwitch:4,QueueFull:5}),a=n(26932),s=n(10607),u=n(5482),l=n(91254),c=n(74539),d=n(60851),h=n(80221),f=n(27981),p="REAL_TIME",g="",v="POST",m="drop",b="send",y="requeue",w="rspFail",x="application/x-json-stream",C="cache-control",S="content-type",k="kill-duration",F="time-delta-millis",D="client-version",$="client-id",O="time-delta-to-apply-millis",_="upload-time",T="apikey",P="AuthMsaDeviceTicket",I="AuthXToken";function L(t){var e=(t.ext||{}).intweb;return e&&(0,l.Sn)(e.msfpc)?e.msfpc:null}function A(t){for(var e=null,n=0;null===e&&n<t.length;n++)e=L(t[n]);return e}var j=function(){function t(e,n){var r=n?[].concat(n):[],i=this,o=A(r);i.iKey=function(){return e},i.Msfpc=function(){return o||g},i.count=function(){return r.length},i.events=function(){return r},i.addEvent=function(t){return!!t&&(r.push(t),o||(o=L(t)),!0)},i.split=function(n,i){var a;if(n<r.length){var s=r.length-n;(0,c.le)(i)||(s=i<s?i:s),a=r.splice(n,s),o=A(r)}return new t(e,a)}}return t.create=function(e,n){return new t(e,n)},t}(),B=function(){function t(){var e=!0,n=!0,r=!0,o="use-collector-delta",a=!1;(0,i.Z)(t,this,(function(t){t.allowRequestSending=function(){return e},t.firstRequestSent=function(){r&&(r=!1,a||(e=!1))},t.shouldAddClockSkewHeaders=function(){return n},t.getClockSkewHeaderValue=function(){return o},t.setClockSkew=function(t){a||(t?(o=t,n=!0,a=!0):n=!1,e=!0)}}))}return t.__ieDyn=1,t}(),N=function(){function t(){var e={};(0,i.Z)(t,this,(function(t){t.setKillSwitchTenants=function(t,n){if(t&&n)try{var r=(a=t.split(","),s=[],a&&(0,c.tO)(a,(function(t){s.push((0,c.nd)(t))})),s);if("this-request-only"===n)return r;for(var i=1e3*parseInt(n,10),o=0;o<r.length;++o)e[r[o]]=(0,c.m6)()+i}catch(t){return[]}var a,s;return[]},t.isTenantKilled=function(t){var n=e,r=(0,c.nd)(t);return void 0!==n[r]&&n[r]>(0,c.m6)()||(delete n[r],!1)}}))}return t.__ieDyn=1,t}(),V=n(21908);function E(t){var e,n=Math.floor(1200*Math.random())+2400;return e=Math.pow(2,t)*n,Math.min(e,6e5)}var R,M=2e6,H=Math.min(M,65e3),z=/\./,q=function(){function t(e,n,r,o){var s="data",u="baseData",d=!!o,h=n,f={};(0,i.Z)(t,this,(function(t){function n(t,e,i,o,a,s,u){(0,c.rW)(t,(function(t,p){var g=null;if(p||(0,l.Sn)(p)){var v=i,m=t,b=a,y=e;if(d&&!o&&z.test(t)){var w=t.split("."),x=w.length;if(x>1){b&&(b=b.slice());for(var C=0;C<x-1;C++){var S=w[C];y=y[S]=y[S]||{},v+="."+S,b&&b.push(S)}m=w[x-1]}}var k=o&&function(t,e){var n=f[t];return void 0===n&&(t.length>=7&&(n=(0,c.xe)(t,"ext.metadata")||(0,c.xe)(t,"ext.web")),f[t]=n),n}(v);if(g=!k&&h&&h.handleField(v,m)?h.value(v,m,p,r):(0,l.yj)(m,p,r)){var F=g.value;if(y[m]=F,s&&s(b,m,g),u&&"object"==typeof F&&!(0,c.kJ)(F)){var D=b;D&&(D=D.slice()).push(m),n(p,F,v+"."+m,o,D,s,u)}}}}))}t.createPayload=function(t,e,n,r,i,o){return{apiKeys:[],payloadBlob:g,overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:t,isTeardown:e,isSync:n,isBeacon:r,sendType:o,sendReason:i}},t.appendPayload=function(n,r,i){var o=n&&r&&!n.overflow;return o&&(0,a.Lm)(e,(function(){return"Serializer:appendPayload"}),(function(){for(var e=r.events(),o=n.payloadBlob,a=n.numEvents,s=!1,u=[],l=[],d=n.isBeacon,h=d?65e3:3984588,f=d?H:M,p=0,g=0;p<e.length;){var v=e[p];if(v){if(a>=i){n.overflow=r.split(p);break}var m=t.getEventBlob(v);if(m&&m.length<=f){var b=m.length;if(o.length+b>h){n.overflow=r.split(p);break}o&&(o+="\n"),o+=m,++g>20&&(o.substr(0,1),g=0),s=!0,a++}else m?u.push(v):l.push(v),e.splice(p,1),p--}p++}if(u&&u.length>0&&n.sizeExceed.push(j.create(r.iKey(),u)),l&&l.length>0&&n.failedEvts.push(j.create(r.iKey(),l)),s){n.batches.push(r),n.payloadBlob=o,n.numEvents=a;var y=r.iKey();-1===(0,c.UA)(n.apiKeys,y)&&n.apiKeys.push(y)}}),(function(){return{payload:n,theBatch:{iKey:r.iKey(),evts:r.events()},max:i}})),o},t.getEventBlob=function(t){try{return(0,a.Lm)(e,(function(){return"Serializer.getEventBlob"}),(function(){var e={};e.name=t.name,e.time=t.time,e.ver=t.ver,e.iKey="o:"+(0,l.jM)(t.iKey);var r={},i=t.ext;i&&(e.ext=r,(0,c.rW)(i,(function(t,e){n(e,r[t]={},"ext."+t,!0,null,null,!0)})));var o=e.data={};o.baseType=t.baseType;var a=o.baseData={};return n(t.baseData,a,u,!1,[u],(function(t,e,n){Z(r,t,e,n)}),true),n(t.data,o,s,!1,[],(function(t,e,n){Z(r,t,e,n)}),true),JSON.stringify(e)}),(function(){return{item:t}}))}catch(t){return null}}}))}return t.__ieDyn=1,t}();function Z(t,e,n,r){if(r&&t){var i=(0,l.Vv)(r.value,r.kind,r.propertyType);if(i>-1){var o=t.metadata;o||(o=t.metadata={f:{}});var a=o.f;if(a||(a=o.f={}),e)for(var s=0;s<e.length;s++){var u=e[s];a[u]||(a[u]={f:{}});var d=a[u].f;d||(d=a[u].f={}),a=d}a=a[n]={},(0,c.kJ)(r.value)?a.a={t:i}:a.t=i}}}var U="&NoResponseBody=true",W=((R={})[1]=y,R[100]=y,R[200]="sent",R[8004]=m,R[8003]=m,R),K={},G={};function J(t,e,n){K[t]=e,!1!==n&&(G[e]=t)}function Y(t){try{return t.responseText}catch(t){}return g}function Q(t,e){var n=!1;if(t&&e){var r=(0,c.FY)(t);if(r&&r.length>0)for(var i=e.toLowerCase(),o=0;o<r.length;o++){var a=r[o];if(a&&(0,c.nr)(e,a)&&a.toLowerCase()===i){n=!0;break}}}return n}function X(t,e,n,r){e&&n&&n.length>0&&(r&&K[e]?(t.hdrs[K[e]]=n,t.useHdrs=!0):t.url+="&"+e+"="+n)}function tt(t,e){return e&&((0,c.hj)(e)?t=[e].concat(t):(0,c.kJ)(e)&&(t=e.concat(t))),t}J(P,P,!1),J(D,D),J($,"Client-Id"),J(T,T),J(O,O),J(_,_),J(I,I);var et=function(){function t(e,n,r,o,s){this._responseHandlers=[];var u,f,p,y,P,I,L,A,j,R,M="?cors=true&"+S.toLowerCase()+"="+x,H=new N,z=!1,Z=new B,K=!1,J=0,et=!0,nt=[],rt={},it=[],ot=null,at=!1,st=!1,ut=!1;(0,i.Z)(t,this,(function(t){var i=!0;function B(t,e){for(var n=0,r=null,i=0;null==r&&i<t.length;)1===(n=t[i])?(0,d.cp)()?r=N:(0,d.Z3)()&&(r=ct):2===n&&(0,d.JO)(e)&&(!e||e&&!A)?r=lt:K&&3===n&&(0,d.MF)()&&(r=ht),i++;return r?{_transport:n,_isSync:e,sendPOST:r}:null}function N(t,e,n){var r=new XDomainRequest;r.open(v,t.urlString),t.timeout&&(r.timeout=t.timeout),r.onload=function(){var t=Y(r);dt(e,200,{},t),kt(t)},r.onerror=function(){dt(e,400,{})},r.ontimeout=function(){dt(e,500,{})},r.onprogress=function(){},n?r.send(t.data):s.set((function(){r.send(t.data)}),0)}function lt(t,e,n){var r,o=t.urlString,a=!1,u=!1,l=((r={body:t.data,method:v}).Microsoft_ApplicationInsights_BypassAjaxInstrumentation=!0,r);n&&(l.keepalive=!0,2===t._sendReason&&(a=!0,R&&(o+=U))),i&&(l.credentials="include"),t.headers&&(0,c.FY)(t.headers).length>0&&(l.headers=t.headers),fetch(o,l).then((function(t){var n={},r=g,i=t.headers;i&&i.forEach((function(t,e){n[e]=t})),t.body&&t.text().then((function(t){r=t})),u||(u=!0,dt(e,t.status,n,r),kt(r))})).catch((function(t){u||(u=!0,dt(e,0,{}))})),a&&!u&&(u=!0,dt(e,200,{})),!u&&t.timeout>0&&s.set((function(){u||(u=!0,dt(e,500,{}))}),t.timeout)}function ct(t,e,n){var r=t.urlString;function o(t,e,n){if(!t[n]&&e&&e.getResponseHeader){var r=e.getResponseHeader(n);r&&(t[n]=(0,c.nd)(r))}return t}function a(t){var e={};return t.getAllResponseHeaders?e=function(t){var e={};if((0,c.HD)(t)){var n=(0,c.nd)(t).split(/[\r\n]+/);(0,c.tO)(n,(function(t){if(t){var n=t.indexOf(": ");if(-1!==n){var r=(0,c.nd)(t.substring(0,n)).toLowerCase(),i=(0,c.nd)(t.substring(n+1));e[r]=i}else e[(0,c.nd)(t)]=1}}))}return e}(t.getAllResponseHeaders()):(e=o(e,t,F),e=o(e,t,k),e=o(e,t,"kill-duration-seconds")),e}function s(t,n){dt(e,t.status,a(t),n)}n&&t.disableXhrSync&&(n=!1);var u=(0,l.ot)(v,r,i,!0,n,t.timeout);(0,c.rW)(t.headers,(function(t,e){u.setRequestHeader(t,e)})),u.onload=function(){var t=Y(u);s(u,t),kt(t)},u.onerror=function(){s(u)},u.ontimeout=function(){s(u)},u.send(t.data)}function dt(t,e,n,r){try{t(e,n,r)}catch(t){(0,h.kP)(f,2,518,(0,d.eU)(t))}}function ht(t,e,n){var r=200,i=t._thePayload,o=t.urlString+(R?U:g);try{var a=(0,d.jW)();if(!a.sendBeacon(o,t.data))if(i){var s=[];(0,c.tO)(i.batches,(function(t){if(s&&t&&t.count()>0){for(var e=t.events(),n=0;n<e.length;n++)if(!a.sendBeacon(o,ot.getEventBlob(e[n]))){s.push(t.split(n));break}}else s.push(t.split(0))})),Ft(s,8003,i.sendType,!0)}else r=0}catch(t){(0,h.jV)(f,"Failed to send telemetry using sendBeacon API. Ex:"+(0,d.eU)(t)),r=0}finally{dt(e,r,{},g)}}function ft(t){return 2===t||3===t}function pt(t){return st&&ft(t)&&(t=2),t}function gt(){return!z&&J<n}function vt(){var t=it;return it=[],t}function mt(t,e,n){var r=!1;return t&&t.length>0&&!z&&p[e]&&ot&&(r=0!==e||gt()&&(n>0||Z.allowRequestSending())),r}function bt(t){var e={};return t&&(0,c.tO)(t,(function(t,n){e[n]={iKey:t.iKey(),evts:t.events()}})),e}function yt(t,n,r,i,o){if(t&&0!==t.length)if(z)Ft(t,1,i);else{i=pt(i);try{var s=t,u=0!==i;(0,a.Lm)(y,(function(){return"HttpManager:_sendBatches"}),(function(a){a&&(t=t.slice(0));for(var s=[],c=null,d=(0,l.hK)(),h=p[i]||(u?p[1]:p[0]),f=h&&h._transport,g=j&&(st||ft(i)||3===f||h._isSync&&2===f);mt(t,i,n);){var v=t.shift();v&&v.count()>0&&(H.isTenantKilled(v.iKey())?s.push(v):(c=c||ot.createPayload(n,r,u,g,o,i),ot.appendPayload(c,v,e)?null!==c.overflow&&(t=[c.overflow].concat(t),c.overflow=null,Ct(c,d,(0,l.hK)(),o),d=(0,l.hK)(),c=null):(Ct(c,d,(0,l.hK)(),o),d=(0,l.hK)(),t=[v].concat(t),c=null)))}c&&Ct(c,d,(0,l.hK)(),o),t.length>0&&(it=t.concat(it)),Ft(s,8004,i)}),(function(){return{batches:bt(s),retryCount:n,isTeardown:r,isSynchronous:u,sendReason:o,useSendBeacon:ft(i),sendType:i}}),!u)}catch(t){(0,h.kP)(f,2,48,"Unexpected Exception sending batch: "+(0,d.eU)(t))}}}function wt(t,e){var n={url:M,hdrs:{},useHdrs:!1};e?(n.hdrs=(0,l.l7)(n.hdrs,rt),n.useHdrs=(0,c.FY)(n.hdrs).length>0):(0,c.rW)(rt,(function(t,e){G[t]?X(n,G[t],e,!1):(n.hdrs[t]=e,n.useHdrs=!0)})),X(n,$,"NO_AUTH",e),X(n,D,l.vs,e);var r=g;(0,c.tO)(t.apiKeys,(function(t){r.length>0&&(r+=","),r+=t})),X(n,T,r,e),X(n,_,(0,c.m6)().toString(),e);var i=function(t){for(var e=0;e<t.batches.length;e++){var n=t.batches[e].Msfpc();if(n)return encodeURIComponent(n)}return g}(t);if((0,l.Sn)(i)&&(n.url+="&ext.intweb.msfpc="+i),Z.shouldAddClockSkewHeaders()&&X(n,O,Z.getClockSkewHeaderValue(),e),y.getWParam){var o=y.getWParam();o>=0&&(n.url+="&w="+o)}for(var a=0;a<nt.length;a++)n.url+="&"+nt[a].name+"="+nt[a].value;return n}function xt(t,e,n){t[e]=t[e]||{},t[e][u.identifier]=n}function Ct(e,n,i,o){if(e&&e.payloadBlob&&e.payloadBlob.length>0){var s=!!t.sendHook,g=p[e.sendType];!ft(e.sendType)&&e.isBeacon&&2===e.sendReason&&(g=p[2]||p[3]||g);var v=ut;(e.isBeacon||3===g._transport)&&(v=!1);var m=wt(e,v);v=v||m.useHdrs;var b=(0,l.hK)();(0,a.Lm)(y,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var p=0;p<e.batches.length;p++)for(var w=e.batches[p].events(),k=0;k<w.length;k++){var F=w[k];if(at){var D=F.timings=F.timings||{};xt(D,"sendEventStart",b),xt(D,"serializationStart",n),xt(D,"serializationCompleted",i)}F.sendAttempt>0?F.sendAttempt++:F.sendAttempt=1}Ft(e.batches,1e3+(o||0),e.sendType,!0);var $={data:e.payloadBlob,urlString:m.url,headers:m.hdrs,_thePayload:e,_sendReason:o,timeout:I,disableXhrSync:L,disableFetchKeepAlive:A};v&&(Q($.headers,C)||($.headers["cache-control"]="no-cache, no-store"),Q($.headers,S)||($.headers["content-type"]=x));var O=null;g&&(O=function(n){Z.firstRequestSent();var i=function(n,i){!function(e,n,i,o){var a=9e3,s=null,d=!1,h=!1;try{var f=!0;if(typeof e!==V.jA){if(n){Z.setClockSkew(n["time-delta-millis"]);var p=n["kill-duration"]||n["kill-duration-seconds"];(0,c.tO)(H.setKillSwitchTenants(n["kill-tokens"],p),(function(t){(0,c.tO)(i.batches,(function(e){if(e.iKey()===t){s=s||[];var n=e.split(0);i.numEvents-=n.count(),s.push(n)}}))}))}if(200==e||204==e)return void(a=200);((v=e)>=300&&v<500&&408!=v&&429!=v||501==v||505==v||i.numEvents<=0)&&(f=!1),a=9e3+e%1e3}if(f){a=100;var g=i.retryCnt;0===i.sendType&&(g<r?(d=!0,St((function(){0===i.sendType&&J--,yt(i.batches,g+1,i.isTeardown,st?2:i.sendType,5)}),st,E(g))):(h=!0,st&&(a=8001)))}}finally{d||(Z.setClockSkew(),function(e,n,r,i){try{i&&u._backOffTransmission(),200===n&&(i||e.isSync||u._clearBackOff(),function(t){if(at){var e=(0,l.hK)();(0,c.tO)(t,(function(t){t&&t.count()>0&&function(t,e){at&&(0,c.tO)(t,(function(t){xt(t.timings=t.timings||{},"sendEventCompleted",e)}))}(t.events(),e)}))}}(e.batches)),Ft(e.batches,n,e.sendType,!0)}finally{0===e.sendType&&(J--,5!==r&&t.sendQueuedRequests(e.sendType,r))}}(i,a,o,h)),Ft(s,8004,i.sendType)}var v}(n,i,e,o)},a=e.isTeardown||e.isSync;try{g.sendPOST(n,i,a),t.sendListener&&t.sendListener($,n,a,e.isBeacon)}catch(t){(0,h.jV)(f,"Unexpected exception sending payload. Ex:"+(0,d.eU)(t)),dt(i,0,{})}}),(0,a.Lm)(y,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(O)if(0===e.sendType&&J++,s&&!e.isBeacon&&3!==g._transport){var n={data:$.data,urlString:$.urlString,headers:(0,l.l7)({},$.headers),timeout:$.timeout,disableXhrSync:$.disableXhrSync,disableFetchKeepAlive:$.disableFetchKeepAlive},r=!1;(0,a.Lm)(y,(function(){return"HttpManager:_doPayloadSend.sendHook"}),(function(){try{t.sendHook(n,(function(t){r=!0,et||t._thePayload||(t._thePayload=t._thePayload||$._thePayload,t._sendReason=t._sendReason||$._sendReason),O(t)}),e.isSync||e.isTeardown)}catch(t){r||O($)}}))}else O($)}))}),(function(){return{thePayload:e,serializationStart:n,serializationCompleted:i,sendReason:o}}),e.isSync)}e.sizeExceed&&e.sizeExceed.length>0&&Ft(e.sizeExceed,8003,e.sendType),e.failedEvts&&e.failedEvts.length>0&&Ft(e.failedEvts,8002,e.sendType)}function St(t,e,n){e?t():s.set(t,n)}function kt(e){var n=t._responseHandlers;try{for(var r=0;r<n.length;r++)try{n[r](e)}catch(t){(0,h.kP)(f,1,519,"Response handler failed: "+t)}if(e){var i=JSON.parse(e);(0,l.Sn)(i.webResult)&&(0,l.Sn)(i.webResult.msfpc)&&P.set("MSFPC",i.webResult.msfpc,31536e3)}}catch(t){}}function Ft(t,e,n,r){if(t&&t.length>0&&o){var i=o[function(t){var e=W[t];(0,l.Sn)(e)||(e="oth",t>=9e3&&t<=9999?e=w:t>=8e3&&t<=8999?e=m:t>=1e3&&t<=1999&&(e=b));return e}(e)];if(i){var s=0!==n;(0,a.Lm)(y,(function(){return"HttpManager:_sendBatchesNotification"}),(function(){St((function(){try{i.call(o,t,e,s,n)}catch(t){(0,h.kP)(f,1,74,"send request notification failed: "+t)}}),r||s,0)}),(function(){return{batches:bt(t),reason:e,isSync:s,sendSync:r,sendType:n}}),!s)}}}t.initialize=function(t,e,n,r,o){var a;o||(o={}),M=t+M,ut=!!(0,c.o8)(o.avoidOptions)||!o.avoidOptions,y=e,P=e.getCookieMgr(),at=!y.config.disableEventTimings;var s=!!y.config.enableCompoundKey;f=(u=n).diagLog();var l=o.valueSanitizer,g=o.stringifyObjects;(0,c.o8)(o.enableCompoundKey)||(s=!!o.enableCompoundKey),I=o.xhrTimeout,L=!!o.disableXhrSync,A=!!o.disableFetchKeepAlive,R=!1!==o.addNoResponse,K=!(0,d.b$)(),ot=new q(y,l,g,s),(0,c.le)(o.useSendBeacon)||(K=!!o.useSendBeacon);var v=r,m=o.alwaysUseXhrOverride?r:null,b=o.alwaysUseXhrOverride?r:null,w=[3,2];if(!r){et=!1;var x=(0,d.k$)();x&&x.protocol&&"file:"===x.protocol.toLowerCase()&&(i=!1);var C=[];(0,d.b$)()?(C=[2,1],w=[2,1,3]):C=[1,2,3],(r=B(C=tt(C,o.transports),!1))||(0,h.jV)(f,"No available transport to send events"),v=B(C,!0)}m||(m=B(w=tt(w,o.unloadTransports),!0)),j=!et&&(K&&(0,d.MF)()||!A&&(0,d.JO)(!0)),(a={})[0]=r,a[1]=v||B([1,2,3],!0),a[2]=m||v||B([1],!0),a[3]=b||B([2,3],!0)||v||B([1],!0),p=a},t._getDbgPlgTargets=function(){return[p[0],H,ot,p]},t.addQueryStringParameter=function(t,e){for(var n=0;n<nt.length;n++)if(nt[n].name===t)return void(nt[n].value=e);nt.push({name:t,value:e})},t.addHeader=function(t,e){rt[t]=e},t.canSendRequest=function(){return gt()&&Z.allowRequestSending()},t.sendQueuedRequests=function(t,e){(0,c.o8)(t)&&(t=0),st&&(t=pt(t),e=2),mt(it,t,0)&&yt(vt(),0,!1,t,e||0)},t.isCompletelyIdle=function(){return!z&&0===J&&0===it.length},t.setUnloading=function(t){st=t},t.addBatch=function(t){if(t&&t.count()>0){if(H.isTenantKilled(t.iKey()))return!1;it.push(t)}return!0},t.teardown=function(){it.length>0&&yt(vt(),0,!0,2,2)},t.pause=function(){z=!0},t.resume=function(){z=!1,t.sendQueuedRequests(0,4)},t.sendSynchronousBatch=function(t,e,n){t&&t.count()>0&&((0,c.le)(e)&&(e=1),st&&(e=pt(e),n=2),yt([t],0,!1,e,n||0))}}))}return t.__ieDyn=1,t}();function nt(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout(t,e,n)}function rt(t){clearTimeout(t)}function it(t,e){return{set:t||nt,clear:e||rt}}var ot="eventsDiscarded",at=function(t){function e(){var n,r=t.call(this)||this;r.identifier="PostChannel",r.priority=1011,r.version="3.2.8";var f,g,v,m,b,y,w,x=!1,C=[],S=null,k=!1,F=0,D=500,$=0,O=1e4,_={},T=p,I=null,L=null,A=0,B=0,N={},V=-1,R=!0,M=!1,H=6,z=2;return(0,i.Z)(e,r,(function(t,e){function r(t){"beforeunload"!==(t||(0,d.Jj)().event).type&&(M=!0,g.setUnloading(M)),Y(2,2)}function i(t){M=!1,g.setUnloading(M)}function q(t,e){if(t.sendAttempt||(t.sendAttempt=0),t.latency||(t.latency=1),t.ext&&t.ext.trace&&delete t.ext.trace,t.ext&&t.ext.user&&t.ext.user.id&&delete t.ext.user.id,R&&(l.if,t.ext=(0,c.Ax)(t.ext),t.baseData&&(t.baseData=(0,c.Ax)(t.baseData)),t.data&&(t.data=(0,c.Ax)(t.data))),t.sync)if(A||k)t.latency=3,t.sync=!1;else if(g)return R&&(t=(0,c.Ax)(t)),void g.sendSynchronousBatch(j.create(t.iKey,[t]),!0===t.sync?1:t.sync,3);var n=t.latency,r=$,i=O;4===n&&(r=F,i=D);var a=!1;if(r<i)a=!tt(t,e);else{var s=1,u=20;4===n&&(s=4,u=1),a=!0,function(t,e,n,r){for(;n<=e;){var i=Q(t,e,!0);if(i&&i.count()>0){var a=i.split(0,r),s=a.count();if(s>0)return 4===n?F-=s:$-=s,ht(ot,[a],o.QueueFull),!0}n++}return nt(),!1}(t.iKey,t.latency,s,u)&&(a=!tt(t,e))}a&&dt(ot,[t],o.QueueFull)}function Z(t,e,n){var r=rt(t,e,n);return g.sendQueuedRequests(e,n),r}function U(){return $>0}function W(){if(V>=0&&rt(V,0,b)&&g.sendQueuedRequests(0,b),F>0&&!L&&!k){var t=_[T][2];t>=0&&(L=G((function(){L=null,Z(4,0,1),W()}),t))}var e=_[T][1];!I&&!S&&e>=0&&!k&&(U()?I=G((function(){I=null,Z(0===B?3:1,0,1),B++,B%=2,W()}),e):B=0)}function K(){n=null,x=!1,C=[],S=null,k=!1,F=0,D=500,$=0,O=1e4,_={},T=p,I=null,L=null,A=0,B=0,f=null,N={},v=void 0,m=0,V=-1,b=null,R=!0,M=!1,H=6,z=2,y=null,w=it(),g=new et(500,2,1,{requeue:lt,send:ft,sent:pt,drop:gt,rspFail:vt,oth:mt},w),ut(),N[4]={batches:[],iKeyMap:{}},N[3]={batches:[],iKeyMap:{}},N[2]={batches:[],iKeyMap:{}},N[1]={batches:[],iKeyMap:{}},bt()}function G(t,e){0===e&&A&&(e=1);var n=1e3;return A&&(n=E(A-1)),w.set(t,e*n)}function J(){return null!==I&&(w.clear(I),I=null,B=0,!0)}function Y(t,e){J(),S&&(w.clear(S),S=null),k||Z(1,t,e)}function Q(t,e,n){var r=N[e];r||(r=N[e=1]);var i=r.iKeyMap[t];return!i&&n&&(i=j.create(t),r.batches.push(i),r.iKeyMap[t]=i),i}function X(e,n){g.canSendRequest()&&!A&&(v>0&&$>v&&(n=!0),n&&null==S&&t.flush(e,null,20))}function tt(t,e){R&&(t=(0,c.Ax)(t));var n=t.latency,r=Q(t.iKey,n,!0);return!!r.addEvent(t)&&(4!==n?($++,e&&0===t.sendAttempt&&X(!t.sync,m>0&&r.count()>=m)):F++,!0)}function nt(){for(var t=0,e=0,n=function(n){var r=N[n];r&&r.batches&&(0,c.tO)(r.batches,(function(r){4===n?t+=r.count():e+=r.count()}))},r=1;r<=4;r++)n(r);$=e,F=t}function rt(e,n,r){var i=!1,s=0===n;return!s||g.canSendRequest()?(0,a.Lm)(t.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var t=[],n=4;n>=e;){var r=N[n];r&&r.batches&&r.batches.length>0&&((0,c.tO)(r.batches,(function(e){g.addBatch(e)?i=i||e&&e.count()>0:t=t.concat(e.events()),4===n?F-=e.count():$-=e.count()})),r.batches=[],r.iKeyMap={}),n--}t.length>0&&dt(ot,t,o.KillSwitch),i&&V>=e&&(V=-1,b=0)}),(function(){return{latency:e,sendType:n,sendReason:r}}),!s):(V=V>=0?Math.min(V,e):e,b=Math.max(b,r)),i}function at(t,e){Z(1,0,e),nt(),st((function(){t&&t(),C.length>0?S=G((function(){S=null,at(C.shift(),e)}),0):(S=null,W())}))}function st(t){g.isCompletelyIdle()?t():S=G((function(){S=null,st(t)}),.25)}function ut(){(_={}).REAL_TIME=[2,1,0],_.NEAR_REAL_TIME=[6,3,0],_.BEST_EFFORT=[18,9,0]}function lt(e,n){var r=[],i=H;M&&(i=z),(0,c.tO)(e,(function(e){e&&e.count()>0&&(0,c.tO)(e.events(),(function(e){e&&(e.sync&&(e.latency=4,e.sync=!1),e.sendAttempt<i?((0,l.if)(e,t.identifier),q(e,!1)):r.push(e))}))})),r.length>0&&dt(ot,r,o.NonRetryableStatus),M&&Y(2,2)}function ct(e,n){var r=t._notificationManager||{},i=r[e];if(i)try{i.apply(r,n)}catch(n){(0,h.kP)(t.diagLog(),1,74,e+" notification failed: "+n)}}function dt(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];e&&e.length>0&&ct(t,[e].concat(n))}function ht(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];e&&e.length>0&&(0,c.tO)(e,(function(e){e&&e.count()>0&&ct(t,[e.events()].concat(n))}))}function ft(t,e,n){t&&t.length>0&&ct("eventsSendRequest",[e>=1e3&&e<=1999?e-1e3:0,!0!==n])}function pt(t,e){ht("eventsSent",t,e),W()}function gt(t,e){ht(ot,t,e>=8e3&&e<=8999?e-8e3:o.Unknown)}function vt(t){ht(ot,t,o.NonRetryableStatus),W()}function mt(t,e){ht(ot,t,o.Unknown),W()}function bt(){m=n&&n.disableAutoBatchFlushLimit?0:Math.max(1500,O/6)}K(),t._getDbgPlgTargets=function(){return[g]},t.initialize=function(o,d,h){(0,a.Lm)(d,(function(){return"PostChannel:initialize"}),(function(){var a=d;e.initialize(o,d,h);try{d.addUnloadCb;y=(0,s.jU)((0,u.J)(t.identifier),d.evtNamespace&&d.evtNamespace());var p=t._getTelCtx();o.extensionConfig[t.identifier]=o.extensionConfig[t.identifier]||{},n=p.getExtCfg(t.identifier),w=it(n.setTimeoutOverride,n.clearTimeoutOverride),R=!n.disableOptimizeObj&&(0,l.mJ)(),function(t){var e=t.getWParam;t.getWParam=function(){var t=0;return n.ignoreMc1Ms0CookieProcessing&&(t|=2),t|e()}}(a),n.eventsLimitInMem>0&&(O=n.eventsLimitInMem),n.immediateEventLimit>0&&(D=n.immediateEventLimit),n.autoFlushEventsLimit>0&&(v=n.autoFlushEventsLimit),(0,c.hj)(n.maxEventRetryAttempts)&&(H=n.maxEventRetryAttempts),(0,c.hj)(n.maxUnloadEventRetryAttempts)&&(z=n.maxUnloadEventRetryAttempts),bt(),n.httpXHROverride&&n.httpXHROverride.sendPOST&&(f=n.httpXHROverride),(0,l.Sn)(o.anonCookieName)&&g.addQueryStringParameter("anoncknm",o.anonCookieName),g.sendHook=n.payloadPreprocessor,g.sendListener=n.payloadListener;var m=n.overrideEndpointUrl?n.overrideEndpointUrl:o.endpointUrl;t._notificationManager=d.getNotifyMgr(),g.initialize(m,t.core,t,f,n);var b=o.disablePageUnloadEvents||[];(0,s.c9)(r,b,y),(0,s.TJ)(r,b,y),(0,s.nD)(i,o.disablePageShowEvents,y)}catch(e){throw t.setInitialized(!1),e}}),(function(){return{coreConfig:o,core:d,extensions:h}}))},t.processTelemetry=function(e,r){(0,l.if)(e,t.identifier);var i=(r=t._getTelCtx(r)).getExtCfg(t.identifier),o=!!n.disableTelemetry;i&&(o=o||!!i.disableTelemetry);var a=e;o||x||(n.overrideInstrumentationKey&&(a.iKey=n.overrideInstrumentationKey),i&&i.overrideInstrumentationKey&&(a.iKey=i.overrideInstrumentationKey),q(a,!0),M?Y(2,2):W()),t.processNext(a,r)},t._doTeardown=function(t,e){Y(2,2),x=!0,g.teardown(),(0,s.JA)(null,y),(0,s.C9)(null,y),(0,s.Yl)(null,y),K()},t.setEventQueueLimits=function(t,e){O=t>0?t:1e4,v=e>0?e:0,bt();var n=$>t;if(!n&&m>0)for(var r=1;!n&&r<=3;r++){var i=N[r];i&&i.batches&&(0,c.tO)(i.batches,(function(t){t&&t.count()>=m&&(n=!0)}))}X(!0,n)},t.pause=function(){J(),k=!0,g.pause()},t.resume=function(){k=!1,g.resume(),W()},t.addResponseHandler=function(t){g._responseHandlers.push(t)},t._loadTransmitProfiles=function(t){J(),ut(),T=p,W(),(0,c.rW)(t,(function(t,e){var n=e.length;if(n>=2){var r=n>2?e[2]:0;if(e.splice(0,n-2),e[1]<0&&(e[0]=-1),e[1]>0&&e[0]>0){var i=e[0]/e[1];e[0]=Math.ceil(i)*e[1]}r>=0&&e[1]>=0&&r>e[1]&&(r=e[1]),e.push(r),_[t]=e}}))},t.flush=function(t,e,n){if(void 0===t&&(t=!0),!k)if(n=n||1,t)null==S?(J(),rt(1,0,n),S=G((function(){S=null,at(e,n)}),0)):C.push(e);else{var r=J();Z(1,1,n),null!=e&&e(),r&&W()}},t.setMsaAuthTicket=function(t){g.addHeader(P,t)},t.hasEvents=U,t._setTransmitProfile=function(t){T!==t&&void 0!==_[t]&&(J(),T=t,W())},t._backOffTransmission=function(){A<4&&(A++,J(),W())},t._clearBackOff=function(){A&&(A=0,J(),W())},(0,c.l_)(t,"_setTimeoutOverride",(function(){return w.set}),(function(t){w=it(t,w.clear)})),(0,c.l_)(t,"_clearTimeoutOverride",(function(){return w.clear}),(function(t){w=it(w.set,t)}))})),r}return(0,r.ne)(e,t),e.__ieDyn=1,e}(f.i),st=at},14590:function(t,e,n){n.d(e,{Z:function(){return Vt}});var r=n(45362),i=n(23806),o=n(91254),a=n(74539),s=n(27981),u=n(21908),l=(u.RJ,u.Pw.freeze),c=(u.Pw.seal,u.Pw.keys,String[u.hB]),d=(c.trim,c.endsWith,c.startsWith,Date[u.hB].toISOString,Array.isArray),h=u.V4.toString,f=u.CY.toString;f.call(u.Pw),Object.getPrototypeOf;function p(t){return!(!t||typeof t!==u.fK)}function g(t,e){if(t)for(var n in t)u.CY.call(t,n)&&e.call(t,n,t[n])}var v=d||function(t){return!(!t||"[object Array]"!==h.call(t))};({toString:null}).propertyIsEnumerable("toString");function m(t){return t}var b=l||m;function y(t){var e,n={};return g(t,(function(t,e){n[t]=e[1],n[e[0]]=e[1]})),e=n,l&&g(e,(function(t,e){(v(e)||p(e))&&l(e)})),b(e)}var w,x="locale",C="ver",S="name",k=y({UserExt:[0,"user"],DeviceExt:[1,"device"],TraceExt:[2,"trace"],WebExt:[3,"web"],AppExt:[4,"app"],OSExt:[5,"os"],SdkExt:[6,"sdk"],IntWebExt:[7,"intweb"],UtcExt:[8,"utc"],LocExt:[9,"loc"],CloudExt:[10,"cloud"],DtExt:[11,"dt"]}),F=y({id:[0,"id"],ver:[1,C],appName:[2,S],locale:[3,x],expId:[4,"expId"],env:[5,"env"]}),D=y({domain:[0,"domain"],browser:[1,"browser"],browserVer:[2,"browserVer"],screenRes:[3,"screenRes"],userConsent:[4,"userConsent"],consentDetails:[5,"consentDetails"]}),$=y({locale:[0,x],localId:[1,"localId"],id:[2,"id"]}),O=y({osName:[0,S],ver:[1,C]}),_=y({ver:[0,C],seq:[1,"seq"],installId:[2,"installId"],epoch:[3,"epoch"]}),T=y({msfpc:[0,"msfpc"],anid:[1,"anid"],serviceName:[2,"serviceName"]}),P=y({popSample:[0,"popSample"],eventFlags:[1,"eventFlags"]}),I=y({tz:[0,"tz"]}),L=y({sessionId:[0,"sesId"]}),A=y({localId:[0,"localId"],deviceClass:[1,"deviceClass"],make:[2,"make"],model:[3,"model"]}),j=y({role:[0,"role"],roleInstance:[1,"roleInstance"],roleVer:[2,"roleVer"]}),B=y({traceId:[0,"traceID"],traceName:[1,S],parentId:[2,"parentID"]}),N=y({traceId:[0,"traceId"],spanId:[1,"spanId"],traceFlags:[2,"traceFlags"]}),V=n(54480),E=n(80221),R=n(85282),M=n(42774),H=n(26454);function z(){return void 0===w&&(w=!!Z(0)),w}function q(){return z()?Z(0):null}function Z(t){var e,n,r=null;try{var i=(0,H.Rd)();if(!i)return null;n=new Date,(r=0===t?i.localStorage:i.sessionStorage)&&(0,a.mf)(r.setItem)&&(r.setItem(n,n),e=r.getItem(n)!==n,r.removeItem(n),e&&(r=null))}catch(t){r=null}return r}function U(){return this.getId()}function W(t){this.setId(t)}var K=function(){function t(){(0,i.Z)(t,this,(function(t){t.setId=function(e){t.customId=e},t.getId=function(){return(0,a.HD)(t.customId)?t.customId:t.automaticId}}))}return t._staticInit=void(0,a.l_)(t.prototype,"id",U,W),t}(),G="ai_session",J=function(){function t(e,n){var r,s,u=(0,E.vH)(e),l=(0,R.JP)(e);(0,i.Z)(t,this,(function(e){var i,c={sessionRenewalMs:(i=n).sessionRenewalMs&&function(){return i.sessionRenewalMs},sessionExpirationMs:i.sessionExpirationMs&&function(){return i.sessionExpirationMs},cookieDomain:i.cookieDomain&&function(){return i.cookieDomain},namePrefix:i.namePrefix&&function(){return i.namePrefix},sessionAsGuid:function(){return i.sessionAsGuid},idLength:function(){return i.idLength?i.idLength:22}};function d(t){var n=e.automaticSession,r=t.split("|");r.length>0&&n.setId(r[0]);try{if(r.length>1){var i=+r[1];n.acquisitionDate=+new Date(i),n.acquisitionDate=n.acquisitionDate>0?n.acquisitionDate:0}if(r.length>2){var o=+r[2];n.renewalDate=+new Date(o),n.renewalDate=n.renewalDate>0?n.renewalDate:0}}catch(t){(0,E.kP)(u,1,510,"Error parsing ai_session cookie, session will be reset: "+t)}0===n.renewalDate&&(0,E.kP)(u,2,517,"AI session renewal date is 0, session will be reset.")}function h(){var t=e.automaticSession,n=(new Date).getTime(),r=e.config.sessionAsGuid();!(0,a.o8)(r)&&r?(0,a.jn)(r)?t.setId((0,o.cm)()):t.setId((0,o.cm)(r)):t.setId((0,M.pZ)(c&&c.idLength?c.idLength():22)),t.acquisitionDate=n,t.renewalDate=n,f(t.getId(),t.acquisitionDate,t.renewalDate),z()||(0,E.kP)(u,2,505,"Browser does not support local storage. Session durations will be inaccurate.")}function f(t,n,i){var o=n+e.config.sessionExpirationMs(),a=i+e.config.sessionRenewalMs(),u=new Date,c=[t,n,i];o<a?u.setTime(o):u.setTime(a);var d=e.config.cookieDomain?e.config.cookieDomain():null;l.set(s(),c.join("|")+";expires="+u.toUTCString(),null,d),r=(new Date).getTime()}(0,a.mf)(n.sessionExpirationMs)||(c.sessionExpirationMs=function(){return t.acquisitionSpan}),(0,a.mf)(n.sessionRenewalMs)||(c.sessionRenewalMs=function(){return t.renewalSpan}),e.config=c,s=function(){return e.config.namePrefix&&e.config.namePrefix()?G+e.config.namePrefix():G},e.automaticSession=new K,e.update=function(){e.automaticSession.getId()||function(){var t=l.get(s());if(t&&(0,a.mf)(t.split))d(t);else{var n=function(t,e){var n=q();if(null!==n)try{return n.getItem(e)}catch(e){w=!1,(0,E.kP)(t,1,503,"Browser failed read of local storage. "+e)}return null}(u,s());n&&d(n)}e.automaticSession.getId()||h()}();var n=e.automaticSession,i=e.config,o=(new Date).getTime(),c=o-n.acquisitionDate>i.sessionExpirationMs(),p=o-n.renewalDate>i.sessionRenewalMs();if(c||p)h();else{(!r||o-r>t.cookieUpdateInterval)&&(n.renewalDate=o,f(n.getId(),n.acquisitionDate,n.renewalDate))}},e.backup=function(){var t,n,r,i=e.automaticSession;t=i.getId(),n=i.acquisitionDate,r=i.renewalDate,function(t,e,n){var r=q();if(null!==r)try{r.setItem(e,n)}catch(e){w=!1,(0,E.kP)(t,1,504,"Browser failed write to local storage. "+e)}}(u,s(),[t,n,r].join("|"))}}))}return t.acquisitionSpan=864e5,t.renewalSpan=18e5,t.cookieUpdateInterval=6e4,t}(),Y=n(60851),Q=["AX","EX","SF","CS","CF","CT","CU","DC","DF","H5","HL","WS","WP"];function X(t,e){void 0===e&&(e=Q);var n=null;if(t)for(var r=t.split(","),i=0;i<r.length;i++)tt(r[i],e)&&(n?n+=","+r[i]:n=r[i]);return n}function tt(t,e){if(void 0===e&&(e=Q),!t||t.length<4)return!1;for(var n=!1,r=t.substring(0,3).toString().toUpperCase(),i=0;i<e.length;i++)if(e[i]+":"===r&&t.length<=256){n=!0;break}return n}function et(){return this.getExpId()}var nt=function(){function t(e,n){var r=null,a=Q.slice(0),s="Treatments",u=(0,R.JP)(n),l=e;(0,i.Z)(t,this,(function(t){if((0,Y.Nv)()){var n=(0,Y.Me)().documentElement;n&&(t.locale=n.lang)}function i(t){t!==r&&(r=X(t,a))}t.env=e.env?e.env:function(t){var e,n={},r=(0,Y.Me)();if(r){e=r&&r.querySelectorAll("meta");for(var i=0;i<e.length;i++){var o=e[i];if(o.name)if(0===o.name.toLowerCase().indexOf(t)){var a=o.name.replace(t,"");n[a]=o.content}}}return n}("awa-").env,t.getExpId=function(){return l.expId?(i(l.expId),r):(i((0,o.Do)(u,s)),r)}}))}return t.validateAppExpId=X,t._staticInit=void(0,a.l_)(t.prototype,"expId",et),t}(),rt=function(){},it=function(){};function ot(){return this.getMsfpc()}function at(){return this.getAnid()}var st=function(){function t(e,n){var r=(0,R.JP)(n);(0,i.Z)(t,this,(function(t){e.serviceName&&(t.serviceName=e.serviceName),t.getMsfpc=function(){return(0,o.Do)(r,"MSFPC")},t.getAnid=function(){return(0,o.Do)(r,"ANON").slice(0,34)}}))}var e;return t._staticInit=(e=t.prototype,(0,a.l_)(e,"msfpc",ot),void(0,a.l_)(e,"anid",at)),t}(),ut=function(){var t=(new Date).getTimezoneOffset(),e=t%60,n=(t-e)/60,r="+";n>0&&(r="-"),n=Math.abs(n),e=Math.abs(e),this.tz=r+(n<10?"0"+n:n.toString())+":"+(e<10?"0"+e:e.toString())},lt={WIN:/(windows|win32)/i,WINRT:/ arm;/i,WINPHONE:/windows\sphone\s\d+\.\d+/i,OSX:/(macintosh|mac os x)/i,IOS:/(ipad|iphone|ipod)(?=.*like mac os x)/i,LINUX:/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,ANDROID:/android/i,CROS:/CrOS/i},ct={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},dt="Unknown",ht=[{r:lt.WINPHONE,os:"Windows Phone"},{r:lt.WINRT,os:"Windows RT"},{r:lt.WIN,os:"Windows"},{r:lt.IOS,os:"iOS"},{r:lt.ANDROID,os:"Android"},{r:lt.LINUX,os:"Linux"},{r:lt.CROS,os:"Chrome OS"},{s:"x11",os:"Unix"},{s:"blackberry",os:"BlackBerry"},{s:"symbian",os:"Symbian"},{s:"nokia",os:"Nokia"},{r:lt.OSX,os:"Mac OS X"}];function ft(t,e){return"Windows"===e?pt(t,"Windows NT"):"Android"===e?pt(t,e):"Mac OS X"===e?function(t){var e=t.match(new RegExp("Mac OS X ([\\d,_,.]+)"));if(e){var n=e[1].replace(/_/g,".");if(n){var r=gt(n);return r?n.split(r)[0]:n}}return dt}(t):"iOS"===e?function(t){var e=t.match(new RegExp("OS ([\\d,_,.]+)"));if(e){var n=e[1].replace(/_/g,".");if(n){var r=gt(n);return r?n.split(r)[0]:n}}return dt}(t):dt}function pt(t,e){var n=t.match(new RegExp(e+" ([\\d,.]+)"));return n?ct[n[1]]?ct[n[1]]:n[1]:dt}function gt(t){return t.indexOf(".")>-1?".":t.indexOf("_")>-1?"_":null}var vt=function(t){if(t.populateOperatingSystemInfo){var e=this,n=(0,Y.jW)()||{},r=t.userAgent||n.userAgent||"",i=t.userAgentData||n.userAgentData||{};if(r){var o=function(t){for(var e=0;e<ht.length;e++){var n=ht[e];if(n.r&&t.match(n.r))return n.os;if(n.s&&-1!==t.indexOf(n.s))return n.os}return dt}(r.toLowerCase());e.name=o,e.ver=ft(r,o)}e.name&&e.name!==dt||!(0,a.HD)(i.platform)||(e.name=i.platform)}},mt=n(39860),bt="MicrosoftApplicationsTelemetryDeviceId";var yt=function(){function t(e,n){var r=0;(0,i.Z)(t,this,(function(t){var i=e.propertyStorageOverride;t.seq=r,t.epoch=(0,M._l)(!1).toString();var a=(0,R.JP)(n,e);if(a.isEnabled()||i){var s=function(t,e,n){return e?e.getProperty(n)||"":(0,o.Do)(t,n)}(a,i,bt);s||(s=(0,mt.GW)()),function(t,e,n,r){e?e.setProperty(n,r):t.set(n,r,31536e3)}(a,i,bt,s),t.installId=s}else a.purge(bt);t.getSequenceId=function(){return++r}}))}return t.__ieDyn=1,t}(),wt=function(t,e,n,r){var i=this;if(i.traceId=e||(0,mt.DO)(),t.enableDistributedTracing&&!n&&(n=(0,mt.DO)().substring(0,16)),i.parentId=n,t.enableApplicationInsightsTrace){i.name=r;var o=(0,Y.k$)();o&&o.pathname&&(i.name=o.pathname)}};function xt(){return this.getLocalId()}function Ct(t){this.setLocalId(t)}var St=function(){function t(e,n,r){var s,u=n,l=(0,R.JP)(r,e);(0,i.Z)(t,this,(function(n){if(l&&l.isEnabled()&&(p(),u.enableApplicationInsightsUser)){var r=(0,o.Do)(l,t.userCookieName);if(r){var i=r.split(t.cookieSeparator);i.length>0&&(n.id=i[0])}if(!n.id){n.id=(0,M.pZ)(e&&!(0,a.o8)(e.idLength)?e.idLength:22);var c=(0,a.Y6)(new Date);n.accountAcquisitionDate=c;var d=[n.id,c],h=u.cookieDomain?u.cookieDomain:void 0;l.set(t.userCookieName,d.join(t.cookieSeparator),31536e3,h)}}if("undefined"!=typeof navigator){var f=navigator;n.locale=f.userLanguage||f.language}function p(){if(!u.hashIdentifiers&&!u.dropIdentifiers){var t=(0,o.Do)(l,"MUID");t&&(s="t:"+t)}return s}n.getLocalId=function(){return s||p()},n.setLocalId=function(t){s=t}}))}return t.cookieSeparator="|",t.userCookieName="ai_user",t._staticInit=void(0,a.l_)(t.prototype,"localId",xt,Ct),t}(),kt=function(t){var e=this;e.popSample=100,e.eventFlags=0,t.hashIdentifiers&&(e.eventFlags=1048576|e.eventFlags),t.dropIdentifiers&&(e.eventFlags=2097152|e.eventFlags)},Ft="([\\d,.]+)",Dt="Unknown",$t="Edg/",Ot=[{ua:"OPR/",b:"Opera"},{ua:"PhantomJS",b:"PhantomJS"},{ua:"Edge",b:"Edge"},{ua:$t,b:"Edge"},{ua:"Electron",b:"Electron"},{ua:"Chrome",b:"Chrome"},{ua:"Trident",b:"MSIE"},{ua:"MSIE ",b:"MSIE"},{ua:"Firefox",b:"Firefox"},{ua:"Safari",b:"Safari"},{ua:"SkypeShell",b:"SkypeShell"}],_t=[{br:"Microsoft Edge",b:"Edge"},{br:"Google Chrome",b:"Chrome"},{br:"Opera",b:"Opera"}];function Tt(t,e){return e.indexOf(t)>-1}function Pt(t,e){for(var n=0;n<e.length;n++)if(t==e[n].brand)return e[n].version;return null}function It(t,e){return"MSIE"===e?function(t){var e=t.match(new RegExp("MSIE ([\\d,.]+)"));if(e)return e[1];var n=t.match(new RegExp("rv:([\\d,.]+)"));if(n)return n[1]}(t):function(t,e){"Safari"===t?t="Version":"Edge"===t&&Tt($t,e)&&(t="Edg");var n=e.match(new RegExp(t+"/"+Ft));if(n)return n[1];if("Opera"===t&&(n=e.match(new RegExp("OPR/([\\d,.]+)"))))return n[1];return Dt}(e,t)}function Lt(){return this.getUserConsent()}var At=function(){function t(e,n){var r=(0,R.JP)(n),s=e||{};(0,i.Z)(t,this,(function(t){var e=(0,Y.k$)();if(e){var n=e.hostname;n&&(t.domain="file:"===e.protocol?"local":n)}if(s.populateBrowserInfo){var i=s.userAgent,u=(s.userAgentData||{}).brands,l=(0,Y.jW)();l&&(i=i||l.userAgent||"",u=u||(l.userAgentData||{}).brands),function(e,n){if((0,a.kJ)(n))try{for(var r=0;r<_t.length;r++){var i=Pt(_t[r].br,n);if(i)return t.browser=_t[r].b,void(t.browserVer=i)}}catch(t){}if(e){var o=function(t){if(t)for(var e=0;e<Ot.length;e++)if(Tt(Ot[e].ua,t))return Ot[e].b;return Dt}(e);t.browser=o,t.browserVer=It(e,o)}}(i,u);var c=function(){var t={h:0,w:0},e=(0,Y.Jj)();return e&&e.screen&&(t.h=screen.height,t.w=screen.width),t}();t.screenRes=c.w+"X"+c.h}t.getUserConsent=function(){return s.userConsented||!!(0,o.Do)(r,s.userConsentCookieName||"MSCC")},t.getUserConsentDetails=function(){try{var t=s.callback;if(t&&t.userConsentDetails){var e=t.userConsentDetails();if(e)return JSON.stringify({Required:e.Required||!1,Analytics:e.Analytics||!1,SocialMedia:e.SocialMedia||!1,Advertising:e.Advertising||!1})}}catch(t){}return null},(0,a.l_)(t,"userConsent",t.getUserConsent)}))}return t._staticInit=void(0,a.l_)(t.prototype,"userConsent",Lt),t}();function jt(t,e,n,r,i){var o=e.ext[k[t]];return o&&(0,a.rW)(r,(function(t,e){if((0,a.HD)(e)||(0,a.hj)(e)||(0,a.jn)(e)){var r=o[n[t]];!i&&(r||(0,a.HD)(r)||(0,a.hj)(r)||(0,a.jn)(r))&&(e=r),o[n[t]]=e}})),o}var Bt=function(){function t(e,n,r){(0,i.Z)(t,this,(function(t){t.app=new nt(n,r),t.cloud=new rt,t.user=new St(e,n,r),t.os=new vt(n),t.web=new At(n,r);var i=new yt(e,r),o=new st(n,r),s=new kt(n);t.loc=new ut,t.device=new it;var u=new J(r,n);t.session=new K;var l,c,d,h=(l=new wt(n),c=g(),d=l||{},{getName:function(){return d.name},setName:function(t){c&&c.setName(t),d.name=t},getTraceId:function(){return d.traceId},setTraceId:function(t){c&&c.setTraceId(t),(0,V.jN)(t)&&(d.traceId=t)},getSpanId:function(){return d.parentId},setSpanId:function(t){c&&c.setSpanId(t),(0,V.Lc)(t)&&(d.parentId=t)},getTraceFlags:function(){return d.traceFlags},setTraceFlags:function(t){c&&c.setTraceFlags(t),d.traceFlags=t}}),f=!(n||{}).eventContainExtFields;function p(){var e=t.session;if(e&&(0,a.HD)(e.customId))return e.customId;u.update();var n=u.automaticSession;if(n){var r=n.getId();r&&(0,a.HD)(r)&&(e.automaticId=r)}return e.automaticId}function g(){var t=h;return r&&r.getTraceCtx&&(t=r.getTraceCtx(!1)||h),t}t.getTraceCtx=function(){return h},t.getSessionId=p,t.applyApplicationContext=function(e){var n,r=t.app;jt(4,e,F,((n={})[0]=r.id,n[1]=r.ver,n[2]=r.name,n[3]=r.locale,n[4]=r.getExpId(),n[5]=r.env,n),f)},t.applyUserContext=function(e){var n,r=t.user;jt(0,e,$,((n={})[1]=r.getLocalId(),n[0]=r.locale,n[2]=r.id,n),f)},t.applyWebContext=function(e){var n,r=t.web;jt(3,e,D,((n={})[0]=r.domain,n[1]=r.browser,n[2]=r.browserVer,n[3]=r.screenRes,n[5]=r.getUserConsentDetails(),n[4]=r.getUserConsent(),n),f)},t.applyOsContext=function(e){var n,r=t.os;jt(5,e,O,((n={})[0]=r.name,n[1]=r.ver,n),f)},t.applySdkContext=function(t){var e;jt(6,t,_,((e={})[2]=i.installId,e[1]=i.getSequenceId(),e[3]=i.epoch,e),f)},t.applyIntWebContext=function(t){var e;jt(7,t,T,((e={})[0]=o.getMsfpc(),e[1]=o.getAnid(),e[2]=o.serviceName,e),f)},t.applyUtcContext=function(t){var e,n=((e={})[0]=s.popSample,e);s.eventFlags>0&&(n[1]=s.eventFlags),jt(8,t,P,n,f)},t.applyLocContext=function(e){var n;jt(9,e,I,((n={})[0]=t.loc.tz,n),f)},t.applySessionContext=function(t){var e;jt(4,t,L,((e={})[0]=p(),e),f)},t.applyDeviceContext=function(e){var n,r=t.device;jt(1,e,A,((n={})[0]=r.localId,n[2]=r.make,n[3]=r.model,n[1]=r.deviceClass,n),f)},t.applyCloudContext=function(e){var n,r=t.cloud;jt(10,e,j,((n={})[0]=r.role,n[1]=r.roleInstance,n[2]=r.roleVer,n),f)},t.applyAITraceContext=function(t){var e;if(n.enableApplicationInsightsTrace){var r=g();r&&jt(2,t,B,((e={})[0]=r.getTraceId(),e[1]=r.getName(),e[2]=r.getSpanId(),e),!1)}},t.applyDistributedTraceContext=function(t){var e,n=g();if(n){var r=((e={})[0]=n.getTraceId(),e[1]=n.getSpanId(),e),i=n.getTraceFlags();(0,a.le)(i)||(r[2]=i),jt(11,t,N,r,!1)}}}))}return t.__ieDyn=1,t}();var Nt=[k[4],k[0],k[3],k[5],k[6],k[7],k[8],k[9],k[1],k[2],k[11],k[10]],Vt=function(t){function e(){var n,r,s,u=t.call(this)||this;return u.identifier="SystemPropertiesCollector",u.priority=3,u.version="3.2.8",(0,i.Z)(e,u,(function(t,e){function i(){n=null,r={}}i(),t.initialize=function(r,i,o){e.initialize(r,i,o),s=t._getTelCtx().getExtCfg(t.identifier),n=new Bt(r,s,i),i&&i.setTraceCtx&&i.setTraceCtx(n.getTraceCtx())},t.processTelemetry=function(e,i){(0,o.if)(e,t.identifier),i=t._getTelCtx(i);var u,l,c=e.ext=e.ext?e.ext:{};e.data=e.data?e.data:{},(0,a.tO)(Nt,(function(t){c[t]=c[t]||{}})),n&&(n.applyApplicationContext(e),n.applyUserContext(e),n.applyWebContext(e),n.applyOsContext(e),n.applySdkContext(e),n.applyIntWebContext(e),n.applyUtcContext(e),n.applyLocContext(e),n.applySessionContext(e),n.applyDeviceContext(e),s.enableApplicationInsightsTrace&&n.applyAITraceContext(e),s.enableDistributedTracing&&n.applyDistributedTraceContext(e),n.applyCloudContext(e)),(0,a.tO)((0,a.FY)(c),(function(t){0===(0,a.FY)(c[t]).length&&delete c[t]})),u=r,l=e.data,u&&(0,a.rW)(u,(function(t,e){l[t]||(l[t]=e)})),t.processNext(e,i)},t.getPropertiesContext=function(){return n},t.setProperty=function(t,e){r[t]=e},t._doTeardown=function(t,e){var r=(t||{}).core();if(r&&r.getTraceCtx&&n){var o=r.getTraceCtx(!1);o&&o===n.getTraceCtx()&&r.setTraceCtx(null)}i()}})),u}return(0,r.ne)(e,t),e.__ieDyn=1,e}(s.i)},21908:function(t,e,n){n.d(e,{CY:function(){return f},Pw:function(){return u},RJ:function(){return h},V4:function(){return l},bO:function(){return s},cb:function(){return r},fK:function(){return i},hB:function(){return a},jA:function(){return o},rl:function(){return c},yu:function(){return d}});var r="function",i="object",o="undefined",a="prototype",s="hasOwnProperty",u=Object,l=u[a],c=u.assign,d=u.create,h=u.defineProperty,f=l[s]},26454:function(t,e,n){n.d(e,{Rd:function(){return o},ZU:function(){return a},pu:function(){return s}});var r=n(21908),i=null;function o(t){void 0===t&&(t=!0);var e=!1===t?null:i;return e||(typeof globalThis!==r.jA&&(e=globalThis),e||typeof self===r.jA||(e=self),e||typeof window===r.jA||(e=window),e||typeof n.g===r.jA||(e=n.g),i=e),e}function a(t){throw new TypeError(t)}function s(t){var e=r.yu;if(e)return e(t);if(null==t)return{};var n=typeof t;function i(){}return n!==r.fK&&n!==r.cb&&a("Object prototype may only be an Object:"+t),i[r.hB]=t,new i}},45362:function(t,e,n){n.d(e,{$h:function(){return u},ne:function(){return s},uc:function(){return o}});var r=n(21908),i=n(26454),o=(((0,i.Rd)()||{}).Symbol,((0,i.Rd)()||{}).Reflect,r.rl||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])r.V4[r.bO].call(e,o)&&(t[o]=e[o]);return t}),a=function(t,e){return a=r.Pw.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e[r.bO](n)&&(t[n]=e[n])},a(t,e)};function s(t,e){function n(){this.constructor=t}typeof e!==r.cb&&null!==e&&(0,i.ZU)("Class extends value "+String(e)+" is not a constructor or null"),a(t,e),t[r.hB]=null===e?(0,i.pu)(e):(n[r.hB]=e[r.hB],new n)}function u(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}},23806:function(t,e,n){var r;n.d(e,{Z:function(){return _}});var i="undefined",o="constructor",a="prototype",s="function",u="_dynClass",l="_unknown_",c="_dyn__proto__",d=Object,h=d.getPrototypeOf,f=d.getOwnPropertyNames;var p,g=(typeof globalThis!==i&&(p=globalThis),p||typeof self===i||(p=self),p||typeof window===i||(p=window),p||typeof n.g===i||(p=n.g),p||{}),v=g.__dynProto$Gbl||(g.__dynProto$Gbl={o:(r={},r.setInstFuncs=!0,r.useBaseInst=!0,r),n:1e3});function m(t,e){return t&&d.prototype.hasOwnProperty.call(t,e)}function b(t){return t&&(t===d.prototype||t===Array.prototype)}function y(t){return b(t)||t===Function.prototype}function w(t){var e;if(t){if(h)return h(t);var n=t.__proto__||t.prototype||(t.constructor?t.constructor.prototype:null);e=t._dyn__proto__||n,m(t,c)||(delete t._dynInstProto,e=t._dyn__proto__=t._dynInstProto||t._dyn__proto__,t._dynInstProto=n)}return e}function x(t,e){var n=[];if(f)n=f(t);else for(var r in t)"string"==typeof r&&m(t,r)&&n.push(r);if(n&&n.length>0)for(var i=0;i<n.length;i++)e(n[i])}function C(t,e,n){return e!==o&&typeof t[e]===s&&(n||m(t,e))}function S(t){throw new TypeError("DynamicProto: "+t)}function k(t,e){for(var n=t.length-1;n>=0;n--)if(t[n]===e)return!0;return!1}function F(t,e,n,r){var i=null;if(t&&m(n,u)){var o=t._dynInstFuncs||{};if((i=(o[n._dynClass]||{})[e])||S("Missing ["+e+"] "+s),!i._dynInstChk&&!1!==o._dynInstChk){for(var a=!m(t,e),l=w(t),c=[];a&&l&&!y(l)&&!k(c,l);){var d=l[e];if(d){a=d===r;break}c.push(l),l=w(l)}try{a&&(t[e]=i),i._dynInstChk=1}catch(t){o._dynInstChk=!1}}}return i}function D(t,e,n){var r=e[t];return r===n&&(r=w(e)[t]),typeof r!==s&&S("["+t+"] is not a "+s),r}function $(t,e,n,r,i){if(!b(t)){var o=n._dynInstFuncs=n._dynInstFuncs||{},a=o[e]=o[e]||{};!1!==o._dynInstChk&&(o._dynInstChk=!!i),x(n,(function(e){C(n,e,!1)&&n[e]!==r[e]&&(a[e]=n[e],delete n[e],(!m(t,e)||t[e]&&!t[e]._isDynProxy)&&(t[e]=function(t,e){var n=function(){return(F(this,e,t,n)||D(e,t,n)).apply(this,arguments)};return n._isDynProxy=1,n}(t,e)))}))}}function O(t,e){return m(t,a)?t.name||e||l:((t||{}).constructor||{}).name||e||l}function _(t,e,n,r){m(t,a)||S("theClass is an invalid class definition.");var i=t.prototype;(function(t,e){if(h){for(var n=[],r=w(e);r&&!y(r)&&!k(n,r);){if(r===t)return!0;n.push(r),r=w(r)}return!1}return!0})(i,e)||S("["+O(t)+"] not in hierarchy of ["+O(e)+"]");var o=null;m(i,u)?o=i._dynClass:(o="_dynCls$"+O(t,"_")+"$"+v.n,v.n++,i._dynClass=o);var s=_._dfOpts,l=!!s.useBaseInst;l&&r&&void 0!==r.useBaseInst&&(l=!!r.useBaseInst);var c=function(t){var e={};return x(t,(function(n){!e[n]&&C(t,n,!1)&&(e[n]=t[n])})),e}(e),d=function(t,e,n,r){function i(t,e,n){var i=e[n];if(i._isDynProxy&&r){var o=t._dynInstFuncs||{};!1!==o._dynInstChk&&(i=(o[e._dynClass]||{})[n]||i)}return function(){return i.apply(t,arguments)}}var o={};x(n,(function(t){o[t]=i(e,n,t)}));for(var a=w(t),s=[];a&&!y(a)&&!k(s,a);)x(a,(function(t){!o[t]&&C(a,t,!h)&&(o[t]=i(e,a,t))})),s.push(a),a=w(a);return o}(i,e,c,l);n(e,d);var f=!!h&&!!s.setInstFuncs;f&&r&&(f=!!r.setInstFuncs),$(i,o,e,c,!1!==f)}_._dfOpts=v.o},80013:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(89526),i=n(90351),o=n(44199),a=n(25514),s=n(24526);class u extends r.Component{constructor(){super(...arguments),this.referenceResolverStore={},this.referenceStore={}}setRef(...t){const e=this.processStorageKey(t);let n=(0,i.Z)(this.referenceResolverStore,e);if(e&&!(0,o.Z)(n)&&!Array.isArray(n))return"function"==typeof n||(n=t=>{(0,a.Z)(this.referenceStore,e,t)},(0,a.Z)(this.referenceResolverStore,e,n)),n}getRef(...t){return(0,i.Z)(this.referenceStore,this.processStorageKey(t))}unhandledProps(){const t=Object.keys(this.props).filter((t=>!(u.defaultHandledProps.indexOf(t)>-1)&&this.handledProps&&!this.handledProps.hasOwnProperty(t)));return(0,s.Z)(this.props,t)}generateClassNames(t=""){return t.concat(` ${this.props.className||""}`).trim().replace(/(\s){2,}/g," ")||null}withSlot(t,e=this.props.children){return r.Children.map(e,(e=>this.hasSlot(t,e)?e:null))}withoutSlot(t,e=this.props.children){return r.Children.map(e,(e=>this.hasSlot(t,e)?null:e))}hasSlot(t,e){const n=(0,i.Z)(e,"props.slot");return Array.isArray(t)?-1!==t.indexOf(n):t===n}processStorageKey(t){return t.filter((t=>"string"==typeof t||"number"==typeof t)).map(((t,e)=>0===e?t:`[${t}]`)).join("")}}u.defaultHandledProps=["children"];var l=u},3577:function(t,e,n){n.d(e,{default:function(){return l}});var r,i=n(80013),o=n(37834),a=n(89526),s=n(54278);!function(t){t.a="a",t.button="button"}(r||(r={}));class u extends i.Z{constructor(){super(...arguments),this.handledProps={disabled:void 0,href:void 0,managedClasses:void 0}}render(){return a.createElement(this.tag,Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),href:this.props.href||null},this.renderDisabledAttribute()),this.props.children)}generateClassNames(){const{button:t,button__disabled:e}=this.props.managedClasses;return super.generateClassNames((0,o.A)(t,[e,this.props.disabled]))}renderDisabledAttribute(){if(!0===this.props.disabled)return this.tag===r.a?{"aria-disabled":!0}:{disabled:!0}}get tag(){return"string"==typeof this.props.href?r.a:r.button}}u.displayName=`${s.DisplayNamePrefix}Button`,u.defaultProps={managedClasses:{}};var l=u},22221:function(t,e,n){n.d(e,{default:function(){return s}});var r=n(80013),i=n(89526),o=n(54278);class a extends r.Z{constructor(){super(...arguments),this.handledProps={managedClasses:void 0}}render(){return i.createElement("a",Object.assign({},this.unhandledProps(),{className:this.generateClassNames()}),this.props.children)}generateClassNames(){return super.generateClassNames(this.props.managedClasses.hypertext)}}a.displayName=`${o.DisplayNamePrefix}Hypertext`,a.defaultProps={managedClasses:{}};var s=a},86754:function(t,e,n){n.d(e,{default:function(){return c}});var r,i=n(80013),o=n(37834),a=n(90351),s=n(89526),u=n(54278);!function(t){t.source="source"}(r||(r={}));class l extends i.Z{constructor(){super(...arguments),this.handledProps={managedClasses:void 0,alt:void 0,sizes:void 0,src:void 0,srcSet:void 0}}render(){let t=(0,o.A)(this.props.managedClasses.image);return this.props.children?(t=`${t} ${(0,a.Z)(this.props,"managedClasses.image__picture","")}`,s.createElement("picture",Object.assign({},this.unhandledProps(),{className:super.generateClassNames(t)}),this.withSlot(r.source),s.createElement("img",{src:this.props.src,alt:this.props.alt,className:(0,a.Z)(this.props,"managedClasses.image_img","")}))):s.createElement("img",Object.assign({},this.unhandledProps(),{className:super.generateClassNames(t),alt:this.props.alt,sizes:this.props.sizes?this.props.sizes:null,src:this.props.src,srcSet:this.props.srcSet?this.props.srcSet:null}))}}l.displayName=`${u.DisplayNamePrefix}Image`,l.defaultProps={managedClasses:{}};var c=l},36456:function(t,e,n){var r;n.d(e,{T:function(){return r}}),function(t){t.email="email",t.number="number",t.password="password",t.search="search",t.tel="tel",t.text="text",t.url="url"}(r||(r={}))},6585:function(t,e,n){n.d(e,{ZP:function(){return l}});var r=n(80013),i=n(37834),o=n(89526),a=n(54278),s=n(75098);class u extends r.Z{constructor(){super(...arguments),this.handledProps={managedClasses:void 0,tag:void 0,size:void 0}}get tag(){return this.generateHTMLTag()}render(){return o.createElement(this.tag,Object.assign({},this.unhandledProps(),{className:this.generateClassNames()}),this.props.children)}generateClassNames(){const t=this.props.managedClasses;return super.generateClassNames((0,i.A)(t.typography,t[`typography__${this.props.size}`]))}generateHTMLTag(){return s.l[this.props.tag]||s.l.p}}u.defaultProps={tag:s.l.p,size:s.H._1,managedClasses:{}},u.displayName=`${a.DisplayNamePrefix}Typography`;var l=u},75098:function(t,e,n){var r,i;n.d(e,{H:function(){return i},l:function(){return r}}),function(t){t.caption="caption",t.h1="h1",t.h2="h2",t.h3="h3",t.h4="h4",t.h5="h5",t.h6="h6",t.p="p",t.span="span",t.figcaption="figcaption"}(r||(r={})),function(t){t[t._1=1]="_1",t[t._2=2]="_2",t[t._3=3]="_3",t[t._4=4]="_4",t[t._5=5]="_5",t[t._6=6]="_6",t[t._7=7]="_7",t[t._8=8]="_8",t[t._9=9]="_9"}(i||(i={}))},54278:function(t,e,n){n.d(e,{DisplayNamePrefix:function(){return r}});const r="Base"},480:function(t,e,n){n.d(e,{px:function(){return C}});var r=n(50425),i=n(89677),o=n(89672),a=n(86202),s=n(18682),u=n(49003),l=n(14061);const c={button:{"max-width":"100%","min-width":"initial"},button_contentRegion:{transition:"all 600ms cubic-bezier(0.19, 1, 0.22, 1)",display:"flex","align-items":"center"}};var d,h={actionTrigger:{"& $actionTrigger_glyph":Object.assign({},l.KP),"&:hover:enabled, a&:not($actionTrigger__disabled):hover":{"& $actionTrigger_glyph":{[l.xE]:Object.assign({},l.zW)}},"&$actionTrigger__justified, &$actionTrigger__lightweight":{"&:hover:enabled, a&:not($actionTrigger__disabled):hover":{"& $actionTrigger_glyph":{[l.xE]:{fill:"Highlight !important"}}}}},actionTrigger_glyph:{display:"inline-block",position:"relative",width:u.iD,height:u.iD,"flex-shrink":"0"},actionTrigger__primary:{"& $actionTrigger_glyph":{fill:o.Q,[l.xE]:Object.assign({},l.zW)},"&:hover:enabled, a&:not($actionTrigger__disabled):hover":{"& $actionTrigger_glyph":{[l.xE]:{fill:"Highlight !important"}}},"&$actionTrigger__disabled $actionTrigger_glyph":Object.assign({fill:o.Q},l.He)},actionTrigger__lightweight:{"& $actionTrigger_glyph":{fill:a.go},"&:hover":{"& $actionTrigger_glyph":{fill:a.D9}},"&:active":{"& $actionTrigger_glyph":{fill:a.VN}},"&$actionTrigger__disabled $actionTrigger_glyph":{fill:a.go}},actionTrigger__justified:{"& $actionTrigger_glyph":{fill:a.go},"&:hover":{"& $actionTrigger_glyph":{fill:a.D9}},"&:active":{"& $actionTrigger_glyph":{fill:a.VN}},"&$actionTrigger__disabled $actionTrigger_glyph":{fill:a.go}},actionTrigger__outline:{"& $actionTrigger_glyph":{fill:s.CH},"&$actionTrigger__disabled $actionTrigger_glyph":{fill:s.CH}},actionTrigger__stealth:{"& $actionTrigger_glyph":{fill:s.CH},"&$actionTrigger__disabled $actionTrigger_glyph":Object.assign({fill:s.CH},l.He)},actionTrigger__disabled:{"& $actionTrigger_glyph":Object.assign({},l.He)},actionTrigger__hasGlyphAndContent:{"& $actionTrigger_glyph":{"margin-right":(0,i.zw)((0,u.wb)(),""),"margin-left":(0,i.zw)("",(0,u.wb)())}}},f=n(80013),p=n(37834),g=n(85857),v=n(89526),m=n(98680),b=n(74095),y=n(17079);!function(t){t.justified="justified",t.lightweight="lightweight",t.outline="outline",t.primary="primary",t.stealth="stealth"}(d||(d={}));class w extends f.Z{constructor(){super(...arguments),this.handledProps={appearance:void 0,href:void 0,managedClasses:void 0,disabled:void 0,glyph:void 0},this.generateGlyph=()=>this.props.glyph((0,p.A)(this.props.managedClasses.actionTrigger_glyph))}render(){return v.createElement(m.zx,Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),disabled:this.props.disabled,href:this.props.href,appearance:b.L[d[this.props.appearance]],jssStyleSheet:c,beforeContent:this.generateGlyph}),this.props.children)}generateClassNames(){const{actionTrigger:t,actionTrigger__disabled:e,actionTrigger__hasGlyphAndContent:n}=this.props.managedClasses;return super.generateClassNames((0,p.A)(t,[e,this.props.disabled],[this.props.managedClasses[`actionTrigger__${this.props.appearance}`],"string"==typeof this.props.appearance],[n,this.hasGlyphAndContent()]))}hasGlyphAndContent(){return!(0,g.Z)(this.props.glyph)&&!(0,g.Z)(this.props.children)}}w.displayName=`${y.k}ActionTrigger`,w.defaultProps={managedClasses:{}};var x=w;const C=(0,r.ZP)(h)(x)},74095:function(t,e,n){var r;n.d(e,{L:function(){return r}}),function(t){t.justified="justified",t.lightweight="lightweight",t.outline="outline",t.primary="primary",t.stealth="stealth"}(r||(r={}))},98680:function(t,e,n){n.d(e,{zx:function(){return N}});var r=n(50425),i=n(10803),o=n(42166),a=n(87536),s=n(74626),u=n(89677),l=n(61932),c=n(86202),d=n(18682),h=n(89967),f=n(3579),p=n(89672),g=n(48024),v=n(18040),m=n(17533),b=n(72542),y=n(49003),w=n(33390),x=n(97317),C=n(14061),S=n(88930);const k={"background-color":"transparent"},F=(0,w.Es)("density"),D=Object.assign(Object.assign(Object.assign(Object.assign({color:c.go,fill:c.go},k),(0,i.F0)(Object.assign(Object.assign({"border-color":"transparent","box-shadow":"none"},C.Ck),{"& $button_contentRegion::before":Object.assign({background:d.CH,height:(0,o.a)(w.Db)},C.$n)}))),{"& $button_contentRegion::before":{[C.xE]:{background:C.YP.buttonText}},"&:hover $button_contentRegion::before":Object.assign({background:c.D9},C.$n),"&:hover$button__disabled $button_contentRegion::before":{display:"none"},"&:active $button_contentRegion::before":{background:c.VN},"&$button__disabled, &$button__disabled $button_contentRegion::before":Object.assign({},k),"&:hover:enabled, a&:not($button__disabled):hover":Object.assign(Object.assign(Object.assign({color:c.D9},k),C.Ck),{"& $button_beforeContent, & $button_afterContent":Object.assign({fill:c.D9},C.Ck)}),"&:active:enabled, a&:not($button__disabled):active":Object.assign({color:c.VN,fill:c.VN},k)}),C.D0);var $,O={button:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,S.Sh)("t7")),{"font-family":"inherit"}),(0,b.$C)()),{"box-sizing":"border-box","max-width":"374px","min-width":t=>F(t)<=-2?"28px":"32px",padding:(0,a.WU)("0 {0}",(0,y.wb)(w.Db)),display:"inline-flex","justify-content":"center","align-items":"center",height:(0,y.Cb)()}),(0,l.Ee)()),(0,l.u0)()),{"line-height":"1",overflow:"hidden","text-decoration":"none","white-space":"nowrap",transition:"all 0.1s ease-in-out",color:d.CH,fill:d.CH,background:h.wF,"&:hover:enabled, a&:not($button__disabled):hover":Object.assign(Object.assign({background:h.Xi},C.T),{"& $button_beforeContent, & $button_afterContent":Object.assign({},C.zW)}),"&:active:enabled, a&:not($button__disabled):active":{background:h.Gy}}),(0,i.F0)(Object.assign(Object.assign({},C.St),{"border-color":f.F}))),{"&:disabled":Object.assign({},C.Aw),"&::-moz-focus-inner":{border:"0"}}),C.Ob),{"a&:not($button__disabled)":Object.assign(Object.assign({},C.eI),{"&:not($button__disabled):hover":Object.assign(Object.assign({},C.H5),{"& $button_beforeContent, & $button_afterContent":Object.assign({},C.g0)}),"&$button__disabled":Object.assign(Object.assign({},C.Aw),{"&:hover":{[C.xE]:{"box-shadow":"none !important"}}})})}),button__primary:Object.assign(Object.assign(Object.assign(Object.assign({color:p.Q,fill:p.Q,background:g.Av,"&:hover:enabled, a&:not($button__disabled):hover":Object.assign({background:g.OC},C.aP),"&:active:enabled, a&:not($button__disabled):active":{background:g.UE}},(0,i.F0)(Object.assign({"border-color":f.F,"box-shadow":(0,a.WU)("0 0 0 {0} inset {1}",(0,o.a)(w.Db),(0,f.A)(g.Av))},C.HC))),{"& $button_beforeContent, & $button_afterContent":{fill:p.Q}}),C.dC),{"a&:not($button__disabled)":{"& $button_beforeContent, & $button_afterContent":Object.assign({},C.g0)}}),button__outline:Object.assign(Object.assign({background:"transparent",border:(0,a.WU)("{0} solid {1}",(0,o.a)(w.bu),v.L$),padding:(0,a.WU)("0 {0}",(0,y.wb)(w.bu)),"&:hover:enabled, a&:not($button__disabled):hover":Object.assign({background:"transparent",border:(0,a.WU)("{0} solid {1}",(0,o.a)(w.bu),v.yD)},C.T),"&:active:enabled, a&:not($button__disabled):active":{background:"transparent",border:(0,a.WU)("{0} solid {1}",(0,o.a)(w.bu),v.tA)}},(0,i.F0)(Object.assign(Object.assign({},C.St),{"box-shadow":(0,a.WU)("0 0 0 {0} {1} inset",(0,o.a)((0,s.$X)(w.Db,w.bu)),f.F),"border-color":f.F}))),C.Ob),button__lightweight:Object.assign(Object.assign({},D),{"a&:not($button__disabled)":{"&:not($button__disabled):hover":{[C.xE]:{"box-shadow":"none !important",color:C.cy,fill:C.cy},"& $button_contentRegion::before":{[C.xE]:{background:C.cy}}},"&$button__disabled":Object.assign({},C.Aw),"& $button_contentRegion::before":{[C.xE]:{background:"transparent"}}}}),button__justified:Object.assign(Object.assign({},D),{"min-width":"74px","padding-left":"0","padding-right":"0","border-width":"0","justify-content":"flex-start","a&:not($button__disabled)":{"&:not($button__disabled):hover":{[C.xE]:{"box-shadow":"none !important",color:C.cy,fill:C.cy},"& $button_contentRegion::before":{[C.xE]:{background:C.cy}}},"&$button__disabled":Object.assign({},C.Aw)}}),button__stealth:Object.assign(Object.assign({background:m.jq,"&:hover:enabled, a&:not($button__disabled):hover":Object.assign({"background-color":m.Qp},C.T),"&:active:enabled, a&:not($button__disabled):active":{"background-color":m.sG}},(0,i.F0)(Object.assign(Object.assign({},C.St),{"border-color":f.F}))),C.D0),button_contentRegion:{position:"relative","&::before":{content:"''",display:"block",height:(0,o.a)(w.bu),position:"absolute",bottom:"-3px",width:"100%",left:(0,u.zw)("0",""),right:(0,u.zw)("","0")},"& svg":{width:y.iD,height:y.iD}},button__disabled:Object.assign(Object.assign(Object.assign({},(0,x.M)()),C.Aw),{"& $button_beforeContent, & $button_afterContent":Object.assign({},C.He)}),button_beforeContent:{width:y.iD,height:y.iD,"margin-right":(0,u.zw)((0,y.wb)(),""),"margin-left":(0,u.zw)("",(0,y.wb)())},button_afterContent:{width:y.iD,height:y.iD,"margin-right":(0,u.zw)("",(0,y.wb)()),"margin-left":(0,u.zw)((0,y.wb)(),"")}},_=n(80013),T=n(3577),P=n(37834),I=n(89526),L=n(17079),A=n(74095);!function(t){t.before="before",t.after="after"}($||($={}));class j extends _.Z{constructor(){super(...arguments),this.handledProps={appearance:void 0,beforeContent:void 0,afterContent:void 0,disabled:void 0,href:void 0,managedClasses:void 0}}render(){const t=this.props.managedClasses;return I.createElement(T.default,Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),managedClasses:t,href:this.props.href,disabled:this.props.disabled}),this.withSlot($.before),this.generateBeforeContent(),I.createElement("span",{className:(0,P.A)(t.button_contentRegion)},this.withoutSlot([$.before,$.after])),this.withSlot($.after),this.generateAfterContent())}generateClassNames(){return super.generateClassNames((0,P.A)([this.props.managedClasses[`button__${A.L[this.props.appearance]}`],"string"==typeof this.props.appearance]))}generateBeforeContent(){if("function"==typeof this.props.beforeContent)return this.props.beforeContent((0,P.A)(this.props.managedClasses.button_beforeContent))}generateAfterContent(){if("function"==typeof this.props.afterContent)return this.props.afterContent((0,P.A)(this.props.managedClasses.button_afterContent))}}j.displayName=`${L.k}Button`,j.defaultProps={managedClasses:{}};var B=j;const N=(0,r.ZP)(O)(B)},84524:function(t,e,n){var r,i,o;n.d(e,{Gm:function(){return i},lb:function(){return o}}),function(t){t.small="small",t.large="large"}(r||(r={})),function(t){t[t._1=1]="_1",t[t._2=2]="_2",t[t._3=3]="_3",t[t._4=4]="_4",t[t._5=5]="_5",t[t._6=6]="_6",t[t._7=7]="_7"}(i||(i={})),function(t){t.h1="h1",t.h2="h2",t.h3="h3",t.h4="h4",t.h5="h5",t.h6="h6",t.p="p"}(o||(o={}))},61246:function(t,e,n){n.d(e,{X6:function(){return v}});var r=n(50425),i=n(72455),o=n(72542);var a={heading:{"&$heading__1, &$heading__2, &$heading__3, &$heading__4, &$heading__5, &$heading__6, &$heading__7":Object.assign(Object.assign({},(0,o.ks)()),(0,i.cg)())},heading__1:{},heading__2:{},heading__3:{},heading__4:{},heading__5:{},heading__6:{},heading__7:{}},s=n(80013),u=n(75098),l=n(37834),c=n(89526),d=n(58794),h=n(17079),f=n(84524);class p extends s.Z{constructor(){super(...arguments),this.handledProps={size:void 0,managedClasses:void 0,tag:void 0}}get tag(){return this.props.tag?u.l[this.props.tag]:u.l.h1}get size(){return u.H[`_${this.props.size}`]}render(){return c.createElement(d.ZT,Object.assign({},this.unhandledProps(),{tag:this.tag,size:this.size,className:this.generateClassNames()}),this.props.children)}generateClassNames(){const t=this.props.managedClasses;return super.generateClassNames((0,l.A)(t.heading,t[`heading__${this.props.size}`]))}}p.displayName=`${h.k}Heading`,p.defaultProps={size:f.Gm._1,managedClasses:{}};var g=p;const v=(0,r.ZP)(a)(g)},35057:function(t,e,n){n.d(e,{WK:function(){return p}});var r=n(22221),i=n(50425),o=n(87536),a=n(42166),s=n(10803),u=n(18682),l=n(86202),c=n(3579),d=n(33390),h=n(14061);var f={hypertext:{outline:"none","text-decoration":"none",color:u.CH,transition:"all 0.2s ease-in-out, border 0.03s ease-in-out","&:link, &:visited":Object.assign(Object.assign({"border-bottom":(0,o.WU)("{0} solid {1}",(0,a.a)(d.bu),l.go),color:l.go,"&:hover":{"border-bottom-color":l.D9,color:l.D9,[h.xE]:{"border-bottom-color":h.cy,color:h.cy}},"&:active":{"border-bottom-color":l.VN,color:l.VN}},(0,s.F0)({"border-bottom":(0,o.WU)("{0} solid {1}",(0,a.a)(d.Db),c.F),[h.xE]:{"border-bottom-color":h.cy,color:h.cy}})),{[h.xE]:{color:h.cy,"border-bottom-color":h.cy}}),[h.xE]:Object.assign(Object.assign({},h.a8),{color:h.YP.text})}};const p=(0,i.ZP)(f)(r.default)},75211:function(t,e,n){n.d(e,{Ee:function(){return a}});var r=n(86754),i=n(50425);var o={image:Object.assign({},{display:"block",margin:"0","max-width":"100%",height:"auto"}),image__picture:{display:"block"},image_img:Object.assign({},{display:"block",margin:"0","max-width":"100%",height:"auto"})};const a=(0,i.ZP)(o)(r.default)},58794:function(t,e,n){n.d(e,{ZT:function(){return s}});var r=n(6585),i=n(50425),o=n(88930);var a={typography:{color:n(18682).CH,"margin-top":"0","margin-bottom":"0",transition:"all 0.2s ease-in-out"},typography__1:Object.assign({},(0,o.Sh)("t1")),typography__2:Object.assign({},(0,o.Sh)("t2")),typography__3:Object.assign({},(0,o.Sh)("t3")),typography__4:Object.assign({},(0,o.Sh)("t4")),typography__5:Object.assign({},(0,o.Sh)("t5")),typography__6:Object.assign({},(0,o.Sh)("t6")),typography__7:Object.assign({},(0,o.Sh)("t7")),typography__8:Object.assign({},(0,o.Sh)("t8")),typography__9:Object.assign({},(0,o.Sh)("t9"))};const s=(0,i.ZP)(a)(r.ZP)},17079:function(t,e,n){n.d(e,{k:function(){return r}});const r="MSFT"},6218:function(t,e,n){n.d(e,{DO:function(){return u},ZP:function(){return l},hj:function(){return a}});var r=n(26007),i=n(2619),o=n(14202);const a={light:100,semilight:200,normal:400,semibold:600,bold:700},s={backgroundColor:o.ix,contrast:0,density:0,designUnit:4,baseHeightMultiplier:8,baseHorizontalSpacingMultiplier:3,direction:r.N.ltr,cornerRadius:2,elevatedCornerRadius:4,focusOutlineWidth:2,fontWeight:a,disabledOpacity:.3,outlineWidth:1,neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],accentPalette:["#FFFFFF","#FBFDFE","#F6FAFE","#F2F8FD","#EEF6FC","#E9F4FB","#E5F1FB","#E1EFFA","#DCEDF9","#D8EAF8","#D4E8F8","#CFE6F7","#CBE4F6","#C7E1F6","#C2DFF5","#BEDDF4","#BADAF3","#B6D8F3","#B1D6F2","#ADD4F1","#A9D1F0","#A4CFF0","#A0CDEF","#9CCAEE","#97C8EE","#93C6ED","#8FC4EC","#8AC1EB","#86BFEB","#82BDEA","#7DBAE9","#79B8E8","#75B6E8","#70B3E7","#6CB1E6","#68AFE5","#63ADE5","#5FAAE4","#5BA8E3","#56A6E3","#52A3E2","#4EA1E1","#499FE0","#459DE0","#419ADF","#3D98DE","#3896DD","#3493DD","#3091DC","#2B8FDB","#278DDB","#238ADA","#1E88D9","#1A86D8","#1683D8","#1181D7","#0D7FD6","#097DD5","#047AD5","#0078D4","#0075CF","#0072C9","#006FC4","#006CBE","#0069B9","#0066B4","#0063AE","#0060A9","#005CA3","#00599E","#005699","#005393","#00508E","#004D88","#004A83","#00477D","#004478","#004173","#003E6D","#003B68","#003862","#00355D","#003258","#002F52","#002B4D","#002847","#002542","#00223C","#001F36","#001B30","#00182B","#001525","#00121F","#000000"],accentBaseColor:"#0078D4",accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundDarkIndex:93,neutralForegroundLightIndex:0,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25};function u(t,e){return(0,i.Z)(t)?t(e):t}var l=s},32495:function(t,e,n){n.d(e,{fontWeight:function(){return r}});const r=n(6218).hj},61932:function(t,e,n){n.d(e,{Ee:function(){return l},h9:function(){return u},u0:function(){return s}});var r=n(42166),i=n(87536),o=n(33390);function a(t){return{"border-radius":t}}function s(){return a((0,r.a)(o.Ri))}function u(){return a((0,r.a)(o.al))}function l(t){return{border:(0,i.WU)("{0} solid transparent",(0,r.a)(o.Db))}}},48024:function(t,e,n){n.d(e,{Av:function(){return h},OC:function(){return f},UE:function(){return p}});var r=n(57513),i=n(33390),o=n(89672),a=n(8340),s=n(9739);const u=(0,a.K2)(i.MY,i.jW,i.hD);function l(t){return e=>{const n=(0,i.au)(e),l=n.length,c=(0,i.R6)(e),d=(0,o.Q)(Object.assign({},e,{backgroundColor:c})),h=(0,i.B2)(e),f=(0,s.BD)(e)>=u(e)?-1:1,p=l-1,g=(0,s.hi)(i.au,c)(e);let v=0;for(;v<f*h&&(0,r.Z)(g+v+f,0,l)&&(0,a.$p)(n[g+v+f],d)>=t&&(0,r.Z)(g+v+f+f,0,p);)v+=f;const m=g+v,b=m+-1*f*h,y=b+f*(0,i.Wo)(e),w=b+f*(0,i.v$)(e);return{rest:(0,s.qZ)(b,n),hover:(0,s.qZ)(m,n),active:(0,s.qZ)(y,n),focus:(0,s.qZ)(w,n),selected:(0,s.qZ)(b+((0,s.Yc)(e)?-1*(0,i.bX)(e):(0,i.bX)(e)),n)}}}const c=(0,a.vm)(l(4.5)),d=(0,a.vm)(l(3)),h=(0,a.mq)(a.lB.rest,c),f=(0,a.mq)(a.lB.hover,c),p=(0,a.mq)(a.lB.active,c);(0,a.mq)(a.lB.focus,c),(0,a.mq)(a.lB.selected,c),(0,a.mq)(a.lB.rest,d),(0,a.mq)(a.lB.hover,d),(0,a.mq)(a.lB.active,d),(0,a.mq)(a.lB.focus,d),(0,a.mq)(a.lB.selected,d)},89672:function(t,e,n){n.d(e,{Q:function(){return u}});var r=n(33390),i=n(14202),o=n(8340);const a=(t,e)=>(0,o.$p)(i.ix,t)>=e?i.ix:i.Sn;function s(t){return function(e){return"function"==typeof e?n=>a(e(n),t):a((0,r.R6)(e),t)}}const u=s(4.5);s(3)},86202:function(t,e,n){n.d(e,{D9:function(){return c},VN:function(){return d},go:function(){return l}});var r=n(33390),i=n(9739),o=n(8340);function a(t){return e=>{const n=(0,r.au)(e),o=(0,r.R6)(e),a=(0,i.hi)(r.au,o)(e),s={rest:(0,r.kp)(e),hover:(0,r.L8)(e),active:(0,r.kb)(e),focus:(0,r.nd)(e)},u=(0,i.Yc)(e)?-1:1,l=a+(1===u?Math.min(s.rest,s.hover):Math.max(u*s.rest,u*s.hover)),c=(0,i.Ce)(r.Cz)(r.au)((()=>l))((()=>u))((e=>e>=t))(e),d=(0,i.Ik)(r.au,c)(e),h=d+u*Math.abs(s.rest-s.hover),f=1===u?s.rest<s.hover:u*s.rest>u*s.hover,p=f?d:h,g=f?h:d,v=p+u*s.active,m=p+u*s.focus;return{rest:(0,i.qZ)(p,n),hover:(0,i.qZ)(g,n),active:(0,i.qZ)(v,n),focus:(0,i.qZ)(m,n)}}}const s=(0,o.vm)(a(4.5)),u=(0,o.vm)(a(3)),l=(0,o.mq)(o.lB.rest,s),c=(0,o.mq)(o.lB.hover,s),d=(0,o.mq)(o.lB.active,s);(0,o.mq)(o.lB.focus,s),(0,o.mq)(o.lB.rest,u),(0,o.mq)(o.lB.hover,u),(0,o.mq)(o.lB.active,u),(0,o.mq)(o.lB.focus,u)},34491:function(t,e,n){n.d(e,{r:function(){return a}});var r=n(6218),i=n(33390),o=n(9739);function a(t,e,n,a,s,u){return l=>{const c=(0,r.DO)(t,l),d=(0,o.Yc)(l)?-1:1,h=(0,o.Ce)(i.Cz)(c)(o.Tq)((()=>d))((0,o.iC)((0,r.DO)(e,l)))(l),f=(0,o.Ik)(t,h)(l),p=(0,r.DO)(n,l),g=(0,r.DO)(a,l),v=(0,r.DO)(s,l),m=(0,r.DO)(u,l);return function(t,e,n,r,i,a,s){const u=t+n*Math.abs(r-i),l=1===n?r<i:n*r>n*i,c=l?t:u,d=l?u:t,h=c+n*a,f=c+n*s;return{rest:(0,o.qZ)(c,e),hover:(0,o.qZ)(d,e),active:(0,o.qZ)(h,e),focus:(0,o.qZ)(f,e)}}(f,c,d,p,g,v,m)}}},14202:function(t,e,n){n.d(e,{Sn:function(){return o},ix:function(){return i}});var r=n(11162);const i="#FFFFFF",o="#000000",a={steps:94,clipLight:0,clipDark:0};Object.assign({},a),Object.assign(Object.assign({},a),{baseColor:(0,r.in)("#0078D4")})},8340:function(t,e,n){n.d(e,{$p:function(){return h},ET:function(){return d},K2:function(){return p},Kf:function(){return c},WV:function(){return l},lB:function(){return r},mq:function(){return u},sF:function(){return f},uZ:function(){return g},vm:function(){return s}});var r,i=n(11162),o=n(60279),a=n(9791);function s(t){const e=(0,a.Z)(t);return function(t){return"function"==typeof t?n=>e(Object.assign({},n,{backgroundColor:t(n)})):e(t)}}function u(t,e){const n=(0,a.Z)(e);return e=>"function"==typeof e?r=>n(Object.assign({},r,{backgroundColor:e(r)}))[t]:n(e)[t]}!function(t){t.rest="rest",t.hover="hover",t.active="active",t.focus="focus",t.selected="selected"}(r||(r={}));const l=(0,a.Z)((t=>{let e=(0,i.in)(t);if(null!==e)return e;if(e=(0,i.hg)(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));function c(t){return(0,i.pJ)(t)||(0,i.b4)(t)}function d(t,e){return l(t).equalValue(l(e))}const h=(0,a.Z)(((t,e)=>(0,o.wo)(l(t),l(e))),((t,e)=>t+e));function f(t){return(0,o.hM)(l(t))}function p(...t){return e=>Math.max.apply(null,t.map((t=>t(e))))}const g=(t,e,n)=>Math.min(Math.max(t,e),n)},17533:function(t,e,n){n.d(e,{Qp:function(){return l},jq:function(){return u},sG:function(){return c},sx:function(){return h}});var r=n(33390),i=n(8340),o=n(9739);const a=(0,i.K2)(r.MY,r.jW,r.hD,r.VQ,r.qD,r.fq,r.gs,r.IU);function s(t){return e=>{const n=(0,o.BD)(e),i=n>=a(e)?-1:1;return(0,o.qZ)(n+i*t(e),(0,r.yv)(e))}}const u=(0,i.vm)(s(r.qD)),l=(0,i.vm)(s(r.fq)),c=(0,i.vm)(s(r.gs)),d=(0,i.vm)(s(r.IU)),h=(0,i.vm)(s(r.Uy));(0,i.vm)((t=>({rest:u(t),hover:l(t),active:c(t),focus:d(t),selected:h(t)})))},89967:function(t,e,n){n.d(e,{Gy:function(){return c},Xi:function(){return l},wF:function(){return u}});var r=n(33390),i=n(8340),o=n(9739);const a=(0,i.K2)(r.MY,r.jW,r.hD,r.VQ);function s(t){return e=>{const n=(0,o.BD)(e),i=n>=a(e)?-1:1;return(0,o.qZ)(n+i*t(e),(0,r.yv)(e))}}const u=(0,i.vm)(s(r.MY)),l=(0,i.vm)(s(r.jW)),c=(0,i.vm)(s(r.hD)),d=(0,i.vm)(s(r.VQ)),h=(0,i.vm)(s(r.y$));(0,i.vm)((t=>({rest:u(t),hover:l(t),active:c(t),focus:d(t),selected:h(t)})))},3579:function(t,e,n){n.d(e,{A:function(){return c},F:function(){return u}});var r=n(33390),i=n(9739),o=n(8340);function a(t){return t>3.5}const s=(0,i.Ce)(r.Cz)(r.yv)((function(t,e,n){return(0,i.hi)(r.yv,t)(n)}))((function(t,e,n){return(0,i.Yc)(n)?-1:1}))(a),u=(0,o.vm)(s);function l(t,e,n){return(0,i.Yc)(n)?1:-1}function c(t){return(0,i.Ce)(u)(r.au)(function(t){return(e,n,r)=>n.indexOf(t(r))}(t))(l)(a)}},34339:function(t,e,n){n.d(e,{Q:function(){return s}});var r=n(33390),i=n(8340),o=n(34491);function a(t){return(0,o.r)(r.yv,t,0,0,0,0)}const s=(0,i.mq)(i.lB.rest,(0,i.vm)(a(4.5)));(0,i.mq)(i.lB.rest,(0,i.vm)(a(3)))},18682:function(t,e,n){n.d(e,{CH:function(){return s},QP:function(){return u},Tt:function(){return l}});var r=n(33390),i=n(8340),o=n(34491);const a=(0,i.vm)((0,o.r)(r.yv,14,0,r.Ax,r.Nt,r.Cv)),s=(0,i.mq)(i.lB.rest,a),u=(0,i.mq)(i.lB.hover,a),l=(0,i.mq)(i.lB.active,a);(0,i.mq)(i.lB.focus,a)},33442:function(t,e,n){n.d(e,{$B:function(){return w},A4:function(){return y},Mw:function(){return x},l$:function(){return C},s5:function(){return b}});var r,i,o,a=n(74626),s=n(2696),u=n(82917),l=n(33390),c=n(9739),d=n(8340);function h(t,e){return n=>-1===(0,l.q2)(n)?e(n):t(n)}!function(t){t[t.L1=0]="L1",t[t.L1Alt=3]="L1Alt",t[t.L2=10]="L2",t[t.L3=13]="L3",t[t.L4=16]="L4"}(r||(r={})),function(t){t[t.L1=76]="L1",t[t.L1Alt=76]="L1Alt",t[t.L2=79]="L2",t[t.L3=82]="L3",t[t.L4=85]="L4"}(i||(i={})),function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(o||(o={}));const f=(0,c.hi)(l.yv,(t=>{const e=(0,l.q2)(t);return new s.h(e,e,e,1).toStringHexRGB()})),p=t=>(0,u.uZ)((0,a.$X)(f,l.Dk)(t),0,(0,l.yv)(t).length-1),g=(0,d.K2)(l.MY,l.jW,l.hD),v=(0,d.K2)((0,a.IH)(f,l.Dk),g),m=t=>{const e=.14,n=new s.h(e,e,e,1);return(0,c.hi)(l.yv,n.toStringHexRGB())(t)},b=(0,d.vm)(h((0,c.qZ)((0,a.$X)(p,l.Dk),l.yv),(0,c.Qs)(l.yv)(0,(0,a.$X)(m,(0,a.Jp)(l.Dk,5))))),y=(0,d.vm)(h((0,c.qZ)(p,l.yv),(0,c.Qs)(l.yv)(0,(0,a.$X)(m,(0,a.Jp)(l.Dk,4))))),w=(0,d.vm)(h((0,c.qZ)((0,a.IH)(p,l.Dk),l.yv),(0,c.Qs)(l.yv)(l.Dk,(0,a.$X)(m,(0,a.Jp)(l.Dk,3))))),x=(0,d.vm)(h((0,c.qZ)(f,l.yv),(0,c.Qs)(l.yv)(0,(0,a.$X)(m,(0,a.Jp)(l.Dk,3))))),C=((0,d.vm)(h((0,c.qZ)(v,l.yv),(0,c.Qs)(l.yv)(g,(0,a.$X)(m,(0,a.Jp)(l.Dk,2))))),(0,d.vm)(h((0,c.qZ)((0,a.IH)(v,l.Dk),l.yv),(0,c.Qs)(l.yv)((0,a.IH)(g,l.Dk),(0,a.$X)(m,l.Dk)))),(0,d.vm)(h((0,c.qZ)((0,a.IH)(v,(0,a.Jp)(l.Dk,2)),l.yv),(0,c.Qs)(l.yv)((0,a.IH)(g,(0,a.Jp)(l.Dk,2)),m))))},18040:function(t,e,n){n.d(e,{L$:function(){return s},tA:function(){return l},yD:function(){return u}});var r=n(33390),i=n(9739),o=n(8340);const a=(0,o.vm)((t=>{const e=(0,r.yv)(t),n=(0,i.BD)(t),o=(0,i.Yc)(t)?-1:1,a=(0,r.Kp)(t),s=n+o*a,u=s+o*((0,r.k9)(t)-a),l=s+o*((0,r.KS)(t)-a),c=s+o*((0,r.OD)(t)-a);return{rest:(0,i.qZ)(s,e),hover:(0,i.qZ)(u,e),active:(0,i.qZ)(l,e),focus:(0,i.qZ)(c,e)}})),s=(0,o.mq)(o.lB.rest,a),u=(0,o.mq)(o.lB.hover,a),l=(0,o.mq)(o.lB.active,a);(0,o.mq)(o.lB.focus,a)},9739:function(t,e,n){n.d(e,{BD:function(){return g},Ce:function(){return f},Ik:function(){return s},Qs:function(){return d},Tq:function(){return p},Yc:function(){return l},hi:function(){return u},iC:function(){return v},qZ:function(){return c}});var r,i=n(6218),o=n(33390),a=n(8340);function s(t,e){return n=>{if(!(0,a.Kf)(e))return-1;const r=(0,i.DO)(t,n),o=r.indexOf(e);return-1!==o?o:r.findIndex((t=>(0,a.Kf)(t)&&(0,a.ET)(e,t)))}}function u(t,e){return n=>{const r=(0,i.DO)(t,n),o=(0,i.DO)(e,n),u=s(r,o)(n);let l;if(-1!==u)return u;try{l=(0,a.sF)(o)}catch(t){l=-1}return-1===l?0:r.map(((t,e)=>({luminance:(0,a.sF)(t),index:e}))).reduce(((t,e)=>Math.abs(e.luminance-l)<Math.abs(t.luminance-l)?e:t)).index}}function l(t){return(0,a.sF)((0,o.Cz)(t))<=(-.1+Math.sqrt(.21))/2}function c(t,e){return"function"==typeof t?n=>e(n)[(0,a.uZ)(t(n),0,e(n).length-1)]:e[(0,a.uZ)(t,0,e.length-1)]}function d(t){return(e,n)=>r=>c(l(r)?(0,i.DO)(n,r):(0,i.DO)(e,r),t(r))}function h(t,e,n=0,r=t.length-1){if(r===n)return t[n];const i=Math.floor((r-n)/2)+n;return e(t[i])?h(t,e,n,i):h(t,e,i+1,r)}function f(t){return e=>n=>r=>o=>s=>{const u=(0,i.DO)(t,s),l=(0,i.DO)(e,s),c=l.length,d=(0,a.uZ)(n(u,l,s),0,c-1),f=r(d,l,s);const p=[].concat(l),g=c-1;let v=d;return-1===f&&(p.reverse(),v=g-v),h(p,(function(t){return o((0,a.$p)(u,t))}),v,g)}}function p(t,e,n){return u(e,t)(n)}function g(t){return u(o.yv,(0,o.Cz)(t))(t)}function v(t){return e=>e>=t}!function(t){t.neutral="neutral",t.accent="accent"}(r||(r={}))},72542:function(t,e,n){function r(t){return{cursor:t}}function i(){return r("default")}function o(){return r("not-allowed !important")}function a(){return r("pointer")}n.d(e,{$C:function(){return a},YW:function(){return o},ks:function(){return i}})},49003:function(t,e,n){n.d(e,{Cb:function(){return u},en:function(){return h},iD:function(){return f},iY:function(){return s},mw:function(){return c},ty:function(){return l},wb:function(){return d}});var r,i=n(42166),o=n(6218),a=n(33390);function s(t=1){return e=>((0,a.nf)(e)+(0,a.Es)("density")(e))*(0,a._5)(e)*t}function u(t=1,e){return n=>(0,i.n)(e)(s(t)(n))}function l(t,e,n){return i=>{const s=function(t){const e=(0,a.Es)("density")(t);return e>=2?r.spacious:e<=-2?r.compact:r.normal}(i);return(0,o.DO)(s===r.compact?t:s===r.spacious?n:e,i)}}function c(t=0){return e=>((0,a.LQ)(e)+l(-1,0,1)(e))*(0,a._5)(e)-t}function d(t=0,e){return n=>(0,i.n)(e)(c((0,o.DO)(t,n))(n))}function h(t){const e=(0,a._5)(t)/2,n=l(-1*e,0,e)(t);return(0,a.nf)(t)/2*(0,a._5)(t)+n}function f(t){return"string"==typeof t?e=>(0,i.n)(t)(h(e)):(0,i.a)(h(t))}!function(t){t.compact="compact",t.normal="normal",t.spacious="spacious"}(r||(r={}))},33390:function(t,e,n){n.d(e,{Ax:function(){return Z},B2:function(){return m},Cv:function(){return W},Cz:function(){return o},Db:function(){return g},Dk:function(){return q},EL:function(){return P},Es:function(){return i},G:function(){return H},IU:function(){return V},KS:function(){return Y},Kp:function(){return G},L8:function(){return C},LQ:function(){return f},MY:function(){return F},Nt:function(){return U},OD:function(){return X},OK:function(){return R},On:function(){return Q},R6:function(){return a},Ri:function(){return s},Uy:function(){return E},VF:function(){return v},VI:function(){return A},VQ:function(){return O},Wo:function(){return b},Zb:function(){return L},_5:function(){return d},al:function(){return u},au:function(){return c},bX:function(){return w},bu:function(){return p},d0:function(){return M},ef:function(){return T},fq:function(){return B},gs:function(){return N},hD:function(){return $},jW:function(){return D},k9:function(){return J},kb:function(){return S},kp:function(){return x},nd:function(){return k},nf:function(){return h},q2:function(){return z},qD:function(){return j},q_:function(){return I},v$:function(){return y},y$:function(){return _},yI:function(){return K},yv:function(){return l}});var r=n(6218);function i(t){return e=>e&&void 0!==e[t]?e[t]:r.ZP[t]}const o=i("backgroundColor"),a=i("accentBaseColor"),s=i("cornerRadius"),u=i("elevatedCornerRadius"),l=i("neutralPalette"),c=i("accentPalette"),d=(i("contrast"),i("designUnit")),h=i("baseHeightMultiplier"),f=i("baseHorizontalSpacingMultiplier"),p=(i("direction"),i("outlineWidth")),g=i("focusOutlineWidth"),v=i("disabledOpacity"),m=(i("accentFillRestDelta"),i("accentFillHoverDelta")),b=i("accentFillActiveDelta"),y=i("accentFillFocusDelta"),w=i("accentFillSelectedDelta"),x=i("accentForegroundRestDelta"),C=i("accentForegroundHoverDelta"),S=i("accentForegroundActiveDelta"),k=i("accentForegroundFocusDelta"),F=i("neutralFillRestDelta"),D=i("neutralFillHoverDelta"),$=i("neutralFillActiveDelta"),O=i("neutralFillFocusDelta"),_=i("neutralFillSelectedDelta"),T=i("neutralFillInputRestDelta"),P=i("neutralFillInputHoverDelta"),I=i("neutralFillInputActiveDelta"),L=i("neutralFillInputFocusDelta"),A=i("neutralFillInputSelectedDelta"),j=i("neutralFillStealthRestDelta"),B=i("neutralFillStealthHoverDelta"),N=i("neutralFillStealthActiveDelta"),V=i("neutralFillStealthFocusDelta"),E=i("neutralFillStealthSelectedDelta"),R=i("neutralFillToggleHoverDelta"),M=i("neutralFillToggleActiveDelta"),H=i("neutralFillToggleFocusDelta"),z=i("baseLayerLuminance"),q=i("neutralFillCardDelta"),Z=(i("neutralForegroundDarkIndex"),i("neutralForegroundLightIndex"),i("neutralForegroundHoverDelta")),U=i("neutralForegroundActiveDelta"),W=i("neutralForegroundFocusDelta"),K=i("neutralDividerRestDelta"),G=i("neutralOutlineRestDelta"),J=i("neutralOutlineHoverDelta"),Y=i("neutralOutlineActiveDelta"),Q=i("fontWeight"),X=i("neutralOutlineFocusDelta")},97317:function(t,e,n){n.d(e,{M:function(){return s}});var r=n(87536),i=n(33390),o=n(72542),a=n(14061);function s(t){return Object.assign(Object.assign({opacity:(0,r.BB)(i.VF)},(0,o.YW)()),{[a.xE]:{opacity:"1",color:a.YP.disabledText}})}},19671:function(t,e,n){n.d(e,{Y3:function(){return r},jf:function(){return p}});var r,i=n(42166),o=n(60279),a=n(2696),s=n(14202),u=n(8340),l=n(33390);!function(t){t[t.e1=1]="e1",t[t.e2=2]="e2",t[t.e3=3]="e3",t[t.e4=4]="e4",t[t.e5=6]="e5",t[t.e6=8]="e6",t[t.e7=9]="e7",t[t.e8=12]="e8",t[t.e9=16]="e9",t[t.e10=24]="e10",t[t.e11=32]="e11",t[t.e12=40]="e12",t[t.e13=48]="e13",t[t.e14=64]="e14",t[t.e15=80]="e15",t[t.e16=96]="e16",t[t.e17=192]="e17"}(r||(r={}));const c={blurMultiplier:.225,blurBase:2,xOffsetMultiplier:0,yOffsetMultiplier:0,opacity:.11},d={blurMultiplier:.9,blurBase:0,xOffsetMultiplier:0,yOffsetMultiplier:.4,opacity:.13};function h(t,e,n){return r=>{const{r:s,g:c,b:d}=(0,u.WV)(e),{xOffsetMultiplier:h,yOffsetMultiplier:f,opacity:p,blurMultiplier:g,blurBase:v=0}=n,m=2-(0,o.hM)((0,u.WV)((0,l.Cz)(r)));return[h,f].map((e=>parseFloat((e*t).toFixed(1)))).concat(v+g*t).map(i.a).concat(new a.h(s,c,d,p*m).toStringWebRGBA()).join(" ")}}function f(t,e=s.Sn){return n=>{const r=h.bind(null,t,e);return[d,c].map((t=>r(t)(n))).join(", ")}}function p(t){return{"box-shadow":f(t)}}},72455:function(t,e,n){n.d(e,{Li:function(){return a},cg:function(){return s}});var r=n(33390);function i(t){return e=>(0,r.On)(e)[t].toString()}function o(t){return{"font-weight":t}}function a(){return o(i("normal"))}function s(){return o(i("semibold"))}},14061:function(t,e,n){n.d(e,{$n:function(){return j},Aw:function(){return m},C_:function(){return v},Ck:function(){return $},D0:function(){return h},Ds:function(){return L},Fn:function(){return I},H5:function(){return P},HC:function(){return x},He:function(){return b},KP:function(){return F},Ob:function(){return f},St:function(){return y},T:function(){return C},YF:function(){return A},YP:function(){return l},ZU:function(){return B},a8:function(){return c},aP:function(){return S},cy:function(){return d},dC:function(){return p},eI:function(){return g},g0:function(){return O},qZ:function(){return k},sy:function(){return N},vy:function(){return w},xE:function(){return u},xU:function(){return T},yf:function(){return _},zW:function(){return D}});var r=n(87536),i=n(42166),o=n(74626),a=n(5346),s=n(33390);const u="@media (-ms-high-contrast:active)";var l;!function(t){t.text="WindowText",t.forcedColorLink="LinkText",t.msLink="-ms-hotlight",t.disabledText="GrayText",t.selectedText="HighlightText",t.selectedBackground="Highlight",t.buttonText="ButtonText",t.buttonBackground="ButtonFace",t.background="Window"}(l||(l={}));const c={"-ms-high-contrast-adjust":"none"};const d=(0,a.B7)()?"LinkText !important":"-ms-hotlight !important",h={[u]:Object.assign({background:l.buttonBackground,border:"none",color:l.buttonText,fill:l.buttonText},c)},f={[u]:Object.assign({background:l.buttonBackground,"border-color":l.buttonText,color:l.buttonText,fill:l.buttonText},c)},p={[u]:Object.assign({background:l.selectedBackground,"border-color":l.selectedBackground,color:l.selectedText,fill:l.selectedText},c)},g={[u]:{background:l.background,"border-color":d,color:d,fill:d}},v={[u]:{opacity:"1",background:(0,r.ef)(l.buttonBackground),color:(0,r.ef)(l.disabledText),fill:(0,r.ef)(l.disabledText)}},m={[u]:{opacity:"1",background:(0,r.ef)(l.buttonBackground),color:(0,r.ef)(l.disabledText),fill:(0,r.ef)(l.disabledText),"border-color":(0,r.ef)(l.disabledText)}},b={[u]:{opacity:"1",color:(0,r.ef)(l.disabledText),fill:(0,r.ef)(l.disabledText)}},y=((0,r.ef)(l.disabledText),{[u]:{"border-color":l.buttonText,"box-shadow":(0,r.WU)("0 0 0 {0} inset {1}",(0,i.a)(s.bu),(()=>l.buttonText))}}),w={[u]:{"box-shadow":(0,r.WU)("0 0 0 2px Background, 0 0 0 {0} {1}",(0,i.a)((0,o.IH)(s.Db,2)),(()=>l.buttonText))}},x={[u]:{"border-color":(0,r.ef)(l.buttonText),"box-shadow":(0,r.WU)("0 0 0 {0} inset {1}",(0,i.a)(s.Db),(()=>l.buttonBackground))}},C={[u]:{background:l.selectedBackground,color:l.selectedText,fill:l.selectedText}},S={[u]:{background:l.selectedText,"border-color":l.selectedBackground,color:l.selectedBackground,fill:l.selectedBackground}},k={[u]:{color:(0,r.ef)(l.text),fill:(0,r.ef)(l.text)}},F={[u]:{color:(0,r.ef)(l.buttonText),fill:(0,r.ef)(l.buttonText)}},D={[u]:{color:(0,r.ef)(l.selectedText),fill:(0,r.ef)(l.selectedText)}},$={[u]:{color:(0,r.ef)(l.selectedBackground),fill:(0,r.ef)(l.selectedBackground)}},O={[u]:{color:d,fill:d}},_={[u]:{border:(0,r.WU)("{0} solid {1}",(0,i.a)(s.bu),(()=>l.text))}},T={[u]:{"border-color":l.buttonText}},P={[u]:{background:l.buttonBackground,"box-shadow":(0,r.WU)("0 0 0 {0} inset {1}",(0,i.a)(s.bu),(()=>d))}},I={[u]:{background:l.background}},L=(l.buttonText,{[u]:{background:l.buttonBackground}}),A={[u]:{background:l.selectedText}},j={[u]:{background:l.selectedBackground}},B={[u]:{opacity:"1",background:l.buttonBackground,"border-color":l.selectedText}},N={[u]:{opacity:"1",background:l.selectedBackground,"border-color":l.selectedText}}},88930:function(t,e,n){n.d(e,{Dp:function(){return c},O2:function(){return p},PL:function(){return v},Sh:function(){return g},mA:function(){return a}});var r=n(42166),i=n(45766),o=n(49003);const a=[[60,72],[46,56],[34,44],[28,36],[20,28],[16,24],[14,20],[12,16],[10,16]].reduce(((t,e,n)=>Object.assign(t,{[`t${n+1}`]:{fontSize:e[0],lineHeight:e[1]}})),{});function s(t){return a.hasOwnProperty(t)?t:"t7"}function u(t){return e=>{const n=parseInt(t.replace("t",""),10),r=(0,o.ty)(-1,0,1)(e),a=(0,i.Z)(n-r,1,9);return s("t".concat(a.toString()))}}function l(t){return a[s(t)].fontSize}function c(t){return a[s(t)].lineHeight}function d(t){return(0,r.a)(l(t))}function h(t){return(0,r.a)(c(t))}function f(t,e){return n=>({"font-size":t(n),"line-height":e(n)})}const p=f(d,h),g=f((function(t){return e=>d(u(t)(e))}),(function(t){return e=>h(u(t)(e))})),v=p},20005:function(t,e,n){n.d(e,{gn:function(){return r}});function r(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a}},35320:function(t,e,n){n.d(e,{$6:function(){return o},UE:function(){return r},zt:function(){return i}});const r=n(89526).createContext({}),{Provider:i,Consumer:o}=r},66837:function(t,e,n){n.d(e,{h:function(){return a}});var r=n(89526),i=n(54468),o=n(35320);class a extends r.Component{constructor(t,e){super(t),this.updateDownstreamDesignSystem()}render(){return this.updateDownstreamDesignSystem(),r.createElement(o.zt,{value:this.downstreamDesignSystem},this.props.children)}updateDownstreamDesignSystem(){let t=!1;this.upstreamDesignSystem!==this.context&&(this.upstreamDesignSystem=this.context,t=!0),this.designSystemOverrides!==this.props.designSystem&&(this.designSystemOverrides=this.props.designSystem,t=!0),t&&(this.downstreamDesignSystem=this.createDesignSystem())}createDesignSystem(){return"function"==typeof this.props.designSystemMergingFunction?this.props.designSystemMergingFunction(this.upstreamDesignSystem,this.designSystemOverrides):(0,i.L)(this.upstreamDesignSystem,this.designSystemOverrides)}}a.contextType=o.UE},50425:function(t,e,n){n.d(e,{ZP:function(){return o}});var r=n(86060);const i=n(41281);var o=function(t){return function(e){class n extends r.v{constructor(){super(...arguments),this.styles=t,this.managedComponent=e}}return n.displayName=`withJSS(${e.displayName||e.name})`,i(n,e)}}},86060:function(t,e,n){n.d(e,{v:function(){return d}});var r=n(30291),i=n(89526),o=n(35320),a=n(67514),s=n(54716);const u=(0,a.create)((0,s.Z)()),l=(new a.SheetsManager,new a.SheetsRegistry);function c(t,e){return"string"==typeof t&&"string"==typeof e?t.concat(" ",e):"string"==typeof t?t:"string"==typeof e?e:void 0}class d extends i.Component{constructor(t,e){super(t,e),this.hasCreatedIntialStyleSheets=!1,this.index=d.index-=1,this.designSystem=e}static set jss(t){d.sheetManager.jss=t}static get jss(){return d.sheetManager.jss}static subscribe(t){return d.sheetManager.subscribe(t)}static unsubscribe(t){d.sheetManager.unsubscribe(t)}render(){if(!this.hasCreatedIntialStyleSheets){if(this.styles){const t={meta:this.managedComponent.displayName||this.managedComponent.name,index:this.index};"function"==typeof d.createGenerateClassName&&(t.generateClassName=d.createGenerateClassName(this.designSystem)),d.sheetManager.add(this.styles,this.designSystem,t)}this.props.jssStyleSheet&&this.createPropStyleSheet(),this.hasCreatedIntialStyleSheets=!0}return i.createElement(this.managedComponent,this.managedComponentProps())}componentDidUpdate(t){const e=!!this.props.jssStyleSheet,n=!!t.jssStyleSheet;this.designSystem!==this.context?(this.styles&&(d.sheetManager.update(this.styles,this.designSystem,this.context),this.forceUpdate()),n&&e?(t.jssStyleSheet===this.props.jssStyleSheet?d.sheetManager.update(this.props.jssStyleSheet,this.designSystem,this.context):(d.sheetManager.remove(t.jssStyleSheet,this.designSystem),this.createPropStyleSheet(this.context)),this.forceUpdate()):n&&!e?d.sheetManager.remove(t.jssStyleSheet,this.designSystem):!n&&e&&(this.createPropStyleSheet(this.context),this.forceUpdate()),this.designSystem=this.context):n&&e&&t.jssStyleSheet!==this.props.jssStyleSheet&&(d.sheetManager.remove(t.jssStyleSheet,this.designSystem),this.createPropStyleSheet(),this.forceUpdate()),n&&!e?d.sheetManager.remove(t.jssStyleSheet,this.designSystem):!n&&e&&(this.createPropStyleSheet(),this.forceUpdate())}componentWillUnmount(){this.styles&&d.sheetManager.remove(this.styles,this.designSystem),this.props.jssStyleSheet&&d.sheetManager.remove(this.props.jssStyleSheet,this.designSystem),d.index++,this.hasCreatedIntialStyleSheets=!1}primaryStyleSheet(){if(this.styles)return d.sheetManager.get(this.styles,this.designSystem)}secondaryStyleSheet(){if(this.props.jssStyleSheet)return d.sheetManager.get(this.props.jssStyleSheet,this.designSystem)}managedComponentProps(){const t=Object.assign(Object.assign({},this.props),{managedClasses:this.getManagedClassNames(),ref:this.props.innerRef});return delete t.jssStyleSheet,delete t.innerRef,t}getManagedClassNames(){let t={},e={};const n=this.primaryStyleSheet(),i=this.secondaryStyleSheet();return n&&n.hasOwnProperty("classes")&&(t=Object.assign({},n.classes)),i&&i.hasOwnProperty("classes")&&(e=Object.assign({},i.classes)),(0,r.Z)(t,e,c)}createPropStyleSheet(t=this.designSystem){const e=this.primaryStyleSheet(),n={meta:`${this.managedComponent.displayName||this.managedComponent.name} - jssStyleSheet`,index:e?e.options.index+1:this.index+1};"function"==typeof d.createGenerateClassName&&(n.generateClassName=d.createGenerateClassName(t)),d.sheetManager.add(this.props.jssStyleSheet,t,n)}}d.contextType=o.UE,d.index=-1e3,d.sheetManager=new class{constructor(){this.jss=u,this.registry=new WeakMap}add(t,e,n){const r=this.getTracker(t,e);if(Array.isArray(r))return void r[1]++;let i=this.registry.get(t);void 0===i&&(i=new WeakMap,this.registry.set(t,i)),this.registry.get(t).set(e,[this.createStyleSheet(t,e,n),1])}get(t,e){const n=this.getTracker(t,e);if(Array.isArray(n)&&n[0])return n[0]}update(t,e,n){const r=this.getTracker(t,e);if(r)if(1===r[1]&&!this.get(t,n)&&t&&"object"==typeof t){const i=r[0];i.update(n),this.notify("update",i),this.registry.get(t).delete(e),this.registry.get(t).set(n,r)}else this.remove(t,e),this.add(t,n,r[0].options)}remove(t,e){const n=this.getTracker(t,e);if(Array.isArray(n)&&(n[1]--,0===n[1])){const r=n[0];this.jss.removeStyleSheet(r),l.remove(r),this.notify("remove",r),this.registry.get(t).delete(e)}}count(t,e){const n=this.getTracker(t,e);return Array.isArray(n)?n[1]:-1}clean(){this.registry=new WeakMap}getTracker(t,e){const n=this.registry.get(t);if(n instanceof WeakMap){const t=n.get(e);if(Array.isArray(t))return t}}createStyleSheet(t,e,n={}){const r="function"==typeof t?t(e):t,i=this.jss.createStyleSheet(r,Object.assign({link:!0},n));return i.update(e).attach(),l.add(i),this.notify("add",i),i}notify(t,e){Array.isArray(this.subscribers)&&this.subscribers.forEach((n=>n({type:t,sheet:e})))}subscribe(t){return Array.isArray(this.subscribers)||(this.subscribers=[]),-1===this.subscribers.indexOf(t)&&this.subscribers.push(t),()=>{this.unsubscribe(t)}}unsubscribe(t){if(Array.isArray(this.subscribers)){const e=this.subscribers.indexOf(t);-1!==e&&this.subscribers.splice(e,1)}}}},54468:function(t,e,n){n.d(e,{L:function(){return i}});var r=n(30291);function i(t,e){return(0,r.Z)({},t,e,((t,e)=>{if(Array.isArray(e))return e}))}},10803:function(t,e,n){n.d(e,{F0:function(){return a}});var r=n(5346);function i(t=""){return`&:focus-visible${t}`}function o(t=""){return`body:not(.js-focus-visible) &:focus${t}, .js-focus-visible &.focus-visible${t}, .js-focus-visible [data-focus-visible-added]&${t}`}function a(t,e){let n,a;if("object"==typeof t&&null!==t)a="",n=t;else{if("string"!=typeof t)return{};a=t,n=e}return Object.assign({"&:focus":{outline:"none"}},(0,r.Zm)()?{[i(a)]:n}:{[o(a)]:n})}},87536:function(t,e,n){n.d(e,{BB:function(){return o},WU:function(){return i},ef:function(){return a}});var r=n(79022);function i(t,...e){return n=>e.reduce(((t,e,r)=>t.replace(new RegExp(`\\{${r}\\}`,"g"),e(n))),t)}function o(t){return e=>String(t(e))}function a(t){return(0,r.Z)(t)?`${t} !important`:e=>a(t(e))}},89677:function(t,e,n){var r;function i(t){return e=>{if("string"!=typeof e)return"";const n=e.split(" ");return 4!==n.length?e:t===r.rtl?[n[0],n[3],n[2],n[1]].join(" "):e}}function o(t,e,n){return n===r.ltr?t:e}function a(t,e){return n=>{const i=(n&&n.direction?n.direction:r.ltr)===r.rtl?e:t;return"function"==typeof i?i(n):i}}n.d(e,{BO:function(){return i},Ih:function(){return o},Nm:function(){return r},zw:function(){return a}}),function(t){t.ltr="ltr",t.rtl="rtl"}(r||(r={}))},74626:function(t,e,n){function r(t){return(...e)=>n=>{const r=e[0];let i="function"==typeof r?r(n):r;for(let r=1;r<e.length;r++){const o=e[r];i=t(i,"function"==typeof o?o(n):o)}return i}}n.d(e,{$X:function(){return l},IH:function(){return u},Jp:function(){return c},cs:function(){return d}});const i=r(((t,e)=>t+e)),o=r(((t,e)=>t-e)),a=r(((t,e)=>t*e)),s=r(((t,e)=>t/e));function u(...t){return i.apply(this,t)}function l(...t){return o.apply(this,t)}function c(...t){return a.apply(this,t)}function d(...t){return s.apply(this,t)}},42166:function(t,e,n){n.d(e,{a:function(){return a},n:function(){return i}});var r=n(2619);function i(t="px"){return e=>e+t}const o=i();function a(t){return(0,r.Z)(t)?e=>o(t(e)):o(t)}},75791:function(t,e,n){n.d(e,{s:function(){return h}});var r=n(50425),i=n(89526),o=n(39619),a=n(80013),s=n(37834),u=n(5346),l=n(20654),c=n(80329);class d extends a.Z{constructor(){super(...arguments),this.handledProps={managedClasses:void 0,span:void 0,position:void 0,row:void 0,order:void 0,gutter:void 0,cssGridPropertyName:void 0,defaultBreakpoint:void 0},this.update=()=>{this.forceUpdate()}}componentDidMount(){this.shouldTrackBreakpoints(this.props)&&l.Z.subscribe(this.update)}componentWillUnmount(){l.Z.unsubscribe(this.update)}componentDidUpdate(t){this.shouldTrackBreakpoints(this.props)&&!this.shouldTrackBreakpoints(t)?l.Z.subscribe(this.update):!this.shouldTrackBreakpoints(this.props)&&this.shouldTrackBreakpoints(t)&&l.Z.unsubscribe(this.update)}render(){return i.createElement("div",Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),style:this.generateStyleAttribute()}),this.props.children)}generateClassNames(){return super.generateClassNames((0,s.A)(this.props.managedClasses.column))}getValueByBreakpoint(t){const e=(0,o.N)()?(0,c.wk)(window.innerWidth):this.props.defaultBreakpoint;return t.slice(0,e+1).pop()}generateColumnSpan(){return"number"==typeof this.props.span?this.props.span:Array.isArray(this.props.span)?this.getValueByBreakpoint(this.props.span):d.defaultProps.span}generateColumnPosition(){return"number"==typeof this.props.position?this.props.position:Array.isArray(this.props.position)?this.getValueByBreakpoint(this.props.position):null}generateRow(){return"number"==typeof this.props.row?this.props.row.toString():Array.isArray(this.props.row)?this.getValueByBreakpoint(this.props.row).toString():null}augmentMsGrid(t){return 0===this.props.gutter||null===t?t:1===t?1:2*t-1}generateStyleAttribute(){const t=this.generateColumnPosition(),e=this.generateRow(),n=this.generateColumnSpan(),r=[t,`span ${n}`].filter((t=>Boolean(t))).join(" / "),i=Array.isArray(this.props.order)?this.getValueByBreakpoint(this.props.order):this.props.order,o="grid"===this.props.cssGridPropertyName||"-ms-grid"!==this.props.cssGridPropertyName&&(0,u.ok)()?{gridColumn:r,gridRowStart:e}:{msGridColumn:this.augmentMsGrid(t),msGridColumnSpan:this.augmentMsGrid(n),msGridRow:e};return Object.assign(Object.assign(Object.assign({},o),{order:"number"==typeof i?i:null,minWidth:"0"}),this.unhandledProps().style)}shouldTrackBreakpoints(t){return Array.isArray(t.span)&&t.span.length>1||Array.isArray(t.position)&&t.position.length>1}}d.displayName="Column",d.defaultProps={managedClasses:{},span:12,defaultBreakpoint:0};const h=(0,r.ZP)()(d)},78661:function(t,e,n){n.d(e,{rj:function(){return g}});var r,i,o=n(50425),a=n(89526),s=n(80013),u=n(37834),l=n(5346),c=n(42166),d=n(20654),h=n(80329),f=n(75791);!function(t){t.div="div",t.section="section",t.form="form",t.article="article",t.main="main"}(r||(r={})),function(t){t.start="start",t.center="center",t.end="end",t.stretch="stretch"}(i||(i={}));class p extends s.Z{constructor(){super(...arguments),this.handledProps={columnCount:void 0,gridColumn:void 0,gutter:void 0,horizontalAlign:void 0,managedClasses:void 0,tag:void 0,verticalAlign:void 0,cssGridPropertyName:void 0},this.update=()=>{this.forceUpdate()}}get tag(){return this.generateHTMLTag()}render(){return a.createElement(this.tag,Object.assign({},this.unhandledProps(),{className:this.generateClassNames(),style:this.generateStyleAttributes()}),this.renderChildren())}componentDidMount(){this.shouldTrackBreakpoints(this.props)&&d.Z.subscribe(this.update)}componentWillUnmount(){d.Z.unsubscribe(this.update)}componentDidUpdate(t){this.shouldTrackBreakpoints(this.props)&&!this.shouldTrackBreakpoints(t)?d.Z.subscribe(this.update):!this.shouldTrackBreakpoints(this.props)&&this.shouldTrackBreakpoints(t)&&d.Z.unsubscribe(this.update)}generateClassNames(){return super.generateClassNames((0,u.A)(this.props.managedClasses.grid))}shouldTrackBreakpoints(t){return Array.isArray(t.gutter)&&t.gutter.length>1}generateGutter(){return"number"==typeof this.props.gutter?this.props.gutter:Array.isArray(this.props.gutter)?(0,h.Xd)(this.props.gutter):null}generateAlignment(t){return i[t]}generateStyleAttributes(){const t=this.props.cssGridPropertyName||p.display;return Object.assign(Object.assign({display:t},"grid"===t?this.cssGridStyles():this.msGridStyles()),this.unhandledProps().style)}cssGridStyles(){return{alignItems:this.generateAlignment(this.props.verticalAlign),gridAutoRows:"auto",gridColumn:this.props.gridColumn,gridColumnGap:`${this.generateGutter()}px`,gridRow:this.props.row,gridTemplateColumns:`repeat(${this.props.columnCount}, 1fr)`,justifyItems:this.generateAlignment(this.props.horizontalAlign)}}msGridStyles(){return{msGridColumns:`1fr (${(0,c.a)(this.generateGutter())} 1fr)[${this.props.columnCount-1}]`,msGridRow:this.props.row,msGridColumn:this.props.gridColumn}}generateHTMLTag(){return r[this.props.tag]||r.div}renderChildren(){return(0,l.ok)()?this.props.children:a.Children.map(this.props.children,(t=>!t||t.type!==f.s||t.props.gutter?t:a.cloneElement(t,{gutter:this.props.gutter},t.props.children)))}}p.displayName="Grid",p.defaultProps={tag:r.div,gridColumn:2,gutter:8,verticalAlign:i.stretch,horizontalAlign:i.stretch,columnCount:12,managedClasses:{}},p.display=(0,l.ok)()?"grid":"-ms-grid";const g=(0,o.ZP)()(p)},42053:function(t,e,n){n.d(e,{T:function(){return l}});var r=n(50425),i=n(89526),o=n(80013),a=n(37834),s=n(5346);class u extends o.Z{constructor(){super(...arguments),this.handledProps={managedClasses:void 0,margin:void 0,maxWidth:void 0,cssGridPropertyName:void 0}}render(){return i.createElement("div",Object.assign({},this.generateAttributes()),this.props.children)}generateAttributes(){const t=`${this.props.margin} minmax(0, ${this.props.maxWidth}) ${this.props.margin}`,e=Object.assign(Object.assign({},this.unhandledProps()),{className:super.generateClassNames((0,a.A)(this.props.managedClasses.page))});return Object.assign(Object.assign({},e),{style:Object.assign({display:"grid"===this.props.cssGridPropertyName?"grid":"-ms-grid"===this.props.cssGridPropertyName?"-ms-grid":(0,s.ok)()?"grid":"-ms-grid",gridTemplateColumns:t,msGridColumns:t},e.style)})}}u.displayName="Page",u.defaultProps={margin:"minmax(5vw, 1fr)",maxWidth:"1600px",managedClasses:{}};const l=(0,r.ZP)()(u)},20654:function(t,e,n){var r=n(39619),i=n(80329);e.Z=new class{constructor(){this._breakpoints=i.R1,this._defaultBreakpoint=0,this.subscriptions=[],this.update=()=>{const t=(0,r.N)()?(0,i.wk)(window.innerWidth,this._breakpoints):this.defaultBreakpoint;this.breakpoint!==t&&(this.breakpoint=t,this.notifySubscribers(this.breakpoint)),this.openRequestAnimationFrame=!1},this.currentBreakpoint=()=>this.breakpoint,this.requestFrame=()=>{this.openRequestAnimationFrame||(this.openRequestAnimationFrame=!0,window.requestAnimationFrame(this.update))},(0,r.N)()?(this.breakpoint=(0,i.wk)(window.innerWidth,this._breakpoints),window.addEventListener("resize",this.requestFrame)):this.breakpoint=this.defaultBreakpoint}get breakpoints(){return this._breakpoints}set breakpoints(t){this._breakpoints=t,this.update()}get defaultBreakpoint(){return this._defaultBreakpoint}set defaultBreakpoint(t){this._defaultBreakpoint=t,this.update()}subscribe(t){this.subscriptions.includes(t)||this.subscriptions.push(t)}unsubscribe(t){this.subscriptions=this.subscriptions.filter((e=>t!==e))}notifySubscribers(t){this.subscriptions.forEach((e=>{e(t)}))}}},80329:function(t,e,n){n.d(e,{R1:function(){return i},Xd:function(){return a},wk:function(){return o}});var r=n(39619);const i=[0,540,768,1084,1400,1779];function o(t,e=i){for(let n=e.length-1;n>=0;n--)if(t>=e[n])return n}function a(t,e){if(!(0,r.N)())return t[0];const n=e?o(window.innerWidth,e):o(window.innerWidth);return t.slice(0,n+1).pop()}},37834:function(t,e,n){n.d(e,{A:function(){return o}});var r=n(2619),i=n(79022);function o(...t){return t.reduce(((t,e)=>{const n=t.length?" ":"",a=Array.isArray(e)&&e[1]?o.call(null,e[0]):(0,r.Z)(e)?e():(0,i.Z)(e)?e:"";return a.length?t+n+a:t}),"")}},5346:function(t,e,n){n.d(e,{B7:function(){return c},Re:function(){return o},Zm:function(){return u},ok:function(){return l}});var r=n(39619),i=n(6649);function o(...t){return t.every((t=>t instanceof HTMLElement))}let a,s;function u(){if((0,i.Z)(a))return a;if(!(0,r.N)())return a=!1,a;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),a=!0}catch(t){a=!1}finally{document.head.removeChild(t)}return a}function l(){if((0,i.Z)(s))return s;try{s=CSS.supports("display","grid")}catch(t){s=!1}return s}function c(){return(0,r.N)()&&(window.matchMedia("(forced-colors: none)").matches||window.matchMedia("(forced-colors: active)").matches)}},26007:function(t,e,n){var r;n.d(e,{N:function(){return r}}),function(t){t.ltr="ltr",t.rtl="rtl"}(r||(r={}))},99478:function(t,e,n){function r(t,...e){return t.replace(/{(\d+)}/g,(function(t,n){if(n>=e.length)return t;const r=e[n];return"number"==typeof r||r?r:""}))}function i(t,e,n=0){return!(!t||!e)&&t.substr(n,e.length)===e}function o(t){return!t||!t.trim()}n.d(e,{Ny:function(){return i},TF:function(){return o},WU:function(){return r}})},15933:function(t,e,n){var r;n.d(e,{H:function(){return r}}),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(r||(r={}))},40184:function(t,e,n){n.d(e,{Tn:function(){return u},Uk:function(){return l}});var r=n(33940),i=n(65620),o=n(48657),a=n(69298),s=n(53046);class u extends a.Zb{constructor(){super(),this.cardFillColor="#222",this.size="_1x_2y"}}(0,r.gn)([i.Lj],u.prototype,"size",void 0);const l=u.compose({baseName:"article-card",template:o.O,styles:(t,e)=>s.i`
    ${(0,a.F)(t,e)}

    @supports not (contain: content) {
        :host {
            overflow: hidden;
        }
    }
    :host([size="_1x_2y"]) {
        --card-height: 304px;
        --card-width: 300px;
    }

    :host([size="_2x_2y"]) {
        --card-height: 304px;
        --card-width: 612px;
    }

    :host([size="_1x_1y"]) {
        --card-height: 146px;
        --card-width: 300px;
    }
`,shadowOptions:{delegatesFocus:!0}})},48733:function(t,e,n){n.d(e,{d:function(){return g}});var r=n(33940),i=n(87697),o=n(65620),a=n(48839),s=n(22680),u=n(11162),l=n(2696),c=n(40184),d=n(62112),h=n(56618),f=n(69298);class p extends f.Zb{constructor(){super(),this.cardFillColor="#222",this.size="_1x_2y",this.expanded=!1}}(0,r.gn)([o.Lj],p.prototype,"size",void 0),(0,r.gn)([(0,o.Lj)({mode:"boolean"})],p.prototype,"expanded",void 0);class g extends a.I{constructor(){super(...arguments),this.headingLevel=2,this.isArticleCard=()=>this.parent instanceof c.Tn,this.isFlexArticleCard=()=>this.parent instanceof p}connectedCallback(){super.connectedCallback(),this.imagePosition||(this.imagePosition="end"),this.parent=(0,s.T)(this),this.parent&&(this.notifier=i.y$.getNotifier(this.parent),this.notifier.subscribe(this,"cardFillColor"),this.notifier.subscribe(this,"size"),this.handleChange(this.parent,"cardFillColor"),this.handleChange(this.parent,"size"),this.addEventListener("mouseover",this.mouseOver),this.addEventListener("mouseout",this.mouseOut),this.addEventListener("focusin",this.focusIn),this.addEventListener("focusout",this.focusOut))}disconnectedCallback(){super.disconnectedCallback(),this.notifier&&(this.notifier.unsubscribe(this,"cardFillColor"),this.notifier.unsubscribe(this,"size"),this.removeEventListener("mouseover",this.mouseOver),this.removeEventListener("mouseout",this.mouseOut),this.removeEventListener("focusin",this.focusIn),this.removeEventListener("focusout",this.focusOut))}handleChange(t,e){switch(this.half="_1x_1y"===t.size,e){case"cardFillColor":if(!t.cardFillColor)break;this.gradientColor=t.cardFillColor,this.gradientVariables=this.generateGradientVariables();break;case"size":this.wide="_2x_2y"===t.size}}handleContentCardLinkClick(t){return this.$emit("link-invoked",t),!0}generateGradientVariables(){const{r:t,g:e,b:n}=(0,u.in)(this.gradientColor),r=new l.h(t,e,n,(0,d._)("image",this.childElements)?this.half?.6:.8:.6).toStringWebRGBA(),i=new l.h(t,e,n,0).toStringWebRGBA();return`--gradient-mid-color: ${r}; --gradient-color: ${this.gradientColor}; --radial-gradient-color: ${i}`}mouseOver(){this.setExpanded(!0),this.hasHover=!0}mouseOut(){this.hasFocus||this.setExpanded(!1),this.hasHover=!1}focusIn(){this.setExpanded(!0),this.hasFocus=!0}focusOut(){this.hasHover||this.setExpanded(!1),this.hasFocus=!1}filteredContentIndicator(){return Array.isArray(this.contentIndicatorNodes)?this.contentIndicatorNodes.filter((t=>t instanceof h.K)):[]}setExpanded(t){this.filteredContentIndicator().forEach((e=>e.expanded=t))}}(0,r.gn)([(0,o.Lj)({attribute:"heading-level",mode:"fromView",converter:o.Id})],g.prototype,"headingLevel",void 0),(0,r.gn)([o.Lj],g.prototype,"href",void 0),(0,r.gn)([o.Lj],g.prototype,"target",void 0),(0,r.gn)([(0,o.Lj)({attribute:"image-position"})],g.prototype,"imagePosition",void 0),(0,r.gn)([(0,o.Lj)({attribute:"immersive-card",mode:"boolean"})],g.prototype,"immersiveCard",void 0),(0,r.gn)([i.LO],g.prototype,"anchorTelemetryTag",void 0),(0,r.gn)([i.LO],g.prototype,"childElements",void 0),(0,r.gn)([i.LO],g.prototype,"wide",void 0),(0,r.gn)([i.LO],g.prototype,"half",void 0),(0,r.gn)([i.LO],g.prototype,"notifier",void 0),(0,r.gn)([i.LO],g.prototype,"parent",void 0),(0,r.gn)([i.LO],g.prototype,"gradientColor",void 0),(0,r.gn)([i.LO],g.prototype,"gradientVariables",void 0),(0,r.gn)([i.LO],g.prototype,"contentIndicatorNodes",void 0)},18295:function(t,e,n){n.d(e,{g:function(){return l}});var r=n(32804),i=n(53046),o=n(67020),a=n(56201),s=n(40082),u=n(15933);const l=(t,e)=>i.i`
    ${(0,o.j)("block")} :host {
        --msft-article-padding: 16;
        --msft-flex-button-padding: 40;
        --msft-card-font-color: ${r.CHi};
        width: 100%;
        height: 100%;
        outline: none;
    }

    .article {
        position: relative;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: calc(var(--msft-article-padding) * 1px);
    }

    .heading,
    .abstract {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }

    .heading {
        font-weight: 600;
        text-decoration: none;
        color: var(--msft-card-font-color);
        font-size: var(--msft-article-heading-font-size, 16px);
        line-height: var(--msft-article-heading-line-height, 24px);
        -webkit-line-clamp: var(--heading-max-lines, 3);
        margin: 0;
        outline: 0;
    }

    :host([immersive-card]) .article.half {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
        position: relative;
        background: #FFFFFF;
    }

    :host([immersive-card]) .half .text {
        grid-column: 1/2;
        height: 100%;
        position: unset;
    }

    :host([immersive-card]) .half .image {
        grid-column: 2/3;
        width: 82px;
        height: 82px;
        position: relative;
        z-index: 1;
        pointer-events: none;
    }

    :host([immersive-card]) .half .image ::slotted(img) {
        border-radius: var(--half-card-image-corner-radius, 6px);
    }

    :host([immersive-card]) .half .actions {
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    :host([immersive-card]) .article.no-image.half {
        display: flex;
        grid-template-columns: none;
    }

    :host([immersive-card]) .no-image.half .text {
        padding: 16px;
    }

    :host([immersive-card]) .no-image.half .actions {
        padding: 0;
    }

    :host([immersive-card]) .half .gradient,
    :host([immersive-card]) .no-image.half .gradient {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    :host([immersive-card]:hover) .half .gradient,
    :host([immersive-card]:hover) .no-image.half .gradient {
        background: var(--gradient-color);
        opacity: 0.4;
        z-index: -1;
    }

    :host([immersive-card]:hover) .article.half,
    :host([immersive-card]:hover) .no-image.half {
        background: transparent;
    }

    :host([immersive-card]) .half .heading,
    :host([immersive-card]) .no-image.half .heading {
        font-size: var(--msft-article-heading-font-size, 14px);
        line-height: var(--msft-article-heading-line-height, 20px);
        -webkit-line-clamp: var(--heading-max-lines, 2);
        margin-bottom: 0;
    }

    :host([immersive-card]) .has-abstract.half .heading {
        -webkit-line-clamp: var(--heading-max-lines, 1);
    }

    :host([immersive-card]) .half .abstract,
    :host([immersive-card]) .no-image.half .abstract {
        font-size: var(--abstract-font-size, 12px);
        line-height: var(--abstract-line-height, 16px);
        -webkit-line-clamp: var(--heading-max-lines, 1);
        margin-bottom: 0;
    }

    :host([immersive-card]) .article.no-image.half .attribution ::slotted(msft-attribution) {
        max-width: 100%;
    }

    :host([immersive-card]) .half .attribution ::slotted(msft-attribution) {
        margin-bottom: 14px;
        max-width: 170px;
        overflow: hidden;
    }

    .heading:hover,
    .heading:${a.b} {
        text-decoration: underline;
    }

    .heading:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: var(--card-width);
        height: var(--card-height);
        z-index: 1;
    }

    .wide .heading:after,
    .no-image .heading:after {
        top: 0;
    }

    .abstract,
    ::slotted(p) {
        -webkit-line-clamp: var(--abstract-max-lines, 3);
        font-weight: 400;
        font-size: var(--abstract-font-size, 14px);
        line-height: var(--abstract-line-height, 20px);
        font-kerning: auto;
        margin: 0;
        opacity: 0.8;
    }

    :host([immersive-card]) {
        background: ${r.IfY};
    }

    :host([immersive-card]) .no-image {
        background: #FFFFFF;
    }

    :host([immersive-card]) ::slotted(img) {
        max-width: 100%;
    }

    .image-pos-end {
        grid-template-columns: auto 1fr;
    }

    :host([immersive-card]) .article {
        position: relative;
        overflow: visible;
        grid-template-columns: none;
        height: 100%;
        display: block;
    }

    :host([immersive-card]) .attribution ::slotted(msft-attribution),
    :host([immersive-card]) .abstract {
        color: var(--msft-card-font-color);
        margin-bottom: 12px;
    }

    :host([immersive-card]) .heading {
        color: var(--msft-card-font-color);
        margin-bottom: 6px;
    }

    :host([immersive-card]) .image {
        position: absolute;
        display: block;
        max-width: 100%;
        top: 0;
        transition: opacity 0.1s linear;
    }

    :host([immersive-card]:${a.b}) .image,
    :host([immersive-card]:hover) .image {
        opacity: 0.5;
    }

    :host([immersive-card]) .text {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 1;
        padding: 24px calc(var(--msft-article-padding) * 1px) 16px
            calc(var(--msft-article-padding) * 1px);
        box-sizing: border-box;
    }

    :host([immersive-card]) .gradient {
        background: linear-gradient(
            180deg,
            transparent 0%,
            var(--gradient-mid-color) 62.5%,
            var(--gradient-color) 100%
        );
        position: absolute;
        top: -21px;
        bottom: 79px;
        z-index: -1;
    }

    :host([immersive-card]) .no-image .gradient,
    :host([immersive-card]) .wide.no-image .gradient {
        background: linear-gradient(
            44.24deg,
            var(--gradient-color) 0%,
            var(--gradient-mid-color) 100%
        );
    }

    :host([immersive-card]) .no-image .gradient,
    :host([immersive-card]) .wide .gradient {
        bottom: 0;
    }

    :host([immersive-card]) ::slotted([slot="start"]),
    :host([immersive-card]) ::slotted([slot="end"]) {
        color: var(--msft-card-font-color);
        position: relative;
    }

    :host([immersive-card]) .wide .text {
        height: 100%;
        width: 50%;
    }

    :host([immersive-card]) .text {
        padding: 52px calc(var(--msft-article-padding) * 1px) 16px
            calc(var(--msft-article-padding) * 1px);
    }


    :host([immersive-card]) .no-image .text {
        height: 100%;
        width: 100%;
        bottom: initial;
        padding: 56px calc(var(--msft-article-padding) * 1px) 16px
            calc(var(--msft-article-padding) * 1px);
    }

    :host([immersive-card]) .actions {
        display: flex;
        justify-content: space-between;
    }

    :host([immersive-card]) .article.no-image .actions,
    :host([immersive-card]) .article.wide .actions,
    :host([immersive-card]) .article.wide.image-pos-end.flex-card .actions {
        position: absolute;
        bottom: calc(var(--msft-article-padding) * 1px);
        width: calc(100% - calc(var(--msft-article-padding) * 2px));
    }

    :host([immersive-card]) .article.wide.flex-card .actions {
        width: calc(100% - calc((var(--msft-article-padding) * 2px) + (var(--msft-flex-button-padding) * 1px)))
    } 

    ::slotted([slot="start-action"]),
    ::slotted([slot="end-action"]),
    ::slotted([slot="hide-story"]) {
        z-index: 4;
    }

    :host([immersive-card]) .hide-story-wrapper {
        position: absolute;
        display: flex;
        flex-direction: row;
        top: 16px;
    }

    :host([immersive-card]) .hide-story {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.1s linear;
    }

    :host([immersive-card]:hover) .hide-story,
    :host([immersive-card]:focus-within) .hide-story {
        opacity: 1;
    }

    :host([immersive-card]) ::slotted(fluent-button),
    ::slotted(fluent-button) {
        --control-corner-radius: 40;
        height: 28px;
        min-width: 28px;
    }

    ::slotted([slot="hide-story"]) {
        font-family: ${r.SVJ};
        display: flex;
        padding: 0;
        justify-content: center;
        align-items: center;
        position: relative;
        outline: none;
        font-size: ${r.cSu};
        line-height: ${r.RUt};
        height: 28px;
        min-width: 28px;
        background-color: rgba(0,0,0,0.54);
        color: #FFFFFF;
        fill: #FFFFFF;
        cursor: pointer;
        border-radius: 100%;
        border: 2px solid transparent;
        margin-inline-start: 4px;
    }

    ::slotted([slot="hide-story"]:${a.b}) {
        border-color: ${r.yGg};
    }

    ::slotted([slot="hide-story"]:${a.b}),
    ::slotted([slot="hide-story"]:hover) {
        background-color: rgba(0,0,0,0.62);
    }

    ::slotted([slot="hide-story"]:active) {
        background-color: rgba(0,0,0,0.49);
    }

    ::slotted([slot="content-indicator"]) {
        position: absolute;
        top: calc(var(--msft-article-padding) * 1px);
        z-index: 1;
    }

    @supports not (contain: content) {
        :host([immersive-card]) {
          overflow: hidden;
        }
    }

    .hide-story-wrapper {
        inset-inline-end: 16px;
    }

    .hide-story {
        inset-inline-end: -32px;
    }

    :host([immersive-card]) .image {
        inset-inline-end: 0;
    }

    :host([immersive-card]) .image-pos-start .image {
        inset-inline-end: initial;
        inset-inline-start: 0;
    }

    :host([immersive-card]) .text {
        inset-inline-start: 0;
    }

    :host([immersive-card]) .image-pos-start .text {
        inset-inline-end: 0;
        inset-inline-start: initial;
    }

    :host([immersive-card]) .gradient {
        inset-inline-start: 0;
        inset-inline-end: -84px;
    }

    :host([immersive-card]) .wide.no-image .gradient {
        inset-inline-end: -100%;
    }

    :host([immersive-card]) .image-pos-start .gradient {
        inset-inline-end: 0;
        inset-inline-start: -120px;
    }

    :host([immersive-card]) .wide .heading:after {
        inset-inline-end: -100%;
        inset-inline-start: 0;
    }

    :host([immersive-card]) .wide.image-pos-start .heading:after {
        inset-inline-start: -100%;
        inset-inline-end: 0;
    }

    ::slotted([slot="content-indicator"]) {
        inset-inline-start: calc(var(--msft-article-padding) * 1px);
        pointer-events: none;
    }

    :host([immersive-card]) .wide.image-pos-start ::slotted([slot="content-indicator"]) {
        inset-inline-start: calc(50% + var(--msft-article-padding) * 1px);
    }

    :host([immersive-card]) .half .text {
        padding-block: 16px;
        padding-inline-end: 0;
        padding-inline-start: 16px;
    }

    :host([immersive-card]) .half .image {
        padding-block-start: 16px;
        padding-inline-end: 16px;
        padding-block-end: 6px;
        padding-inline-start: 8px;
    }

    :host([immersive-card]) .no-image.half .actions {
        padding-inline-start: 16px;
    }

    :host([immersive-card]) .wide .gradient-ltr {
        background: linear-gradient(
            270deg,
            transparent 0%,
            var(--gradient-mid-color) 102px,
            var(--gradient-color) 246px
        );
    }
    
        :host([immersive-card]) .wide.image-pos-start .gradient-ltr {
            background: linear-gradient(
                90deg,
                transparent 0%,
                var(--gradient-mid-color) 102px,
                var(--gradient-color) 246px
            );
        }

        :host([immersive-card]) .half .gradient-ltr,
        :host([immersive-card]) .no-image.half .gradient-ltr {
            background: linear-gradient(
                76.68deg,
                var(--gradient-color) 0%,
                var(--gradient-mid-color) 100%
            );
        }

        :host([immersive-card]) .wide .gradient-rtl {
            background: linear-gradient(
                90deg,
                transparent 0%,
                var(--gradient-mid-color) 102px,
                var(--gradient-color) 246px
            );
        }

        :host([immersive-card]) .wide.image-pos-start .gradient-rtl {
            background: linear-gradient(
                270deg,
                transparent 0%,
                var(--gradient-mid-color) 102px,
                var(--gradient-color) 246px
            );
        }

        :host([immersive-card]) .half .gradient-rtl,
        :host([immersive-card]) .no-image.half .gradient-rtl {
            background: linear-gradient(
                294deg,
                var(--gradient-color) 0%,
                var(--gradient-mid-color) 100%
            );
        }
`.withBehaviors((0,s.vF)(i.i`
            :host([immersive-card]),
            :host([immersive-card]) .heading {
                background: ${u.H.ButtonFace};
                color: ${u.H.ButtonText};
            }

            :host([immersive-card]) .attribution ::slotted(msft-attribution),
            :host([immersive-card]) .abstract {
                background: ${u.H.ButtonFace};
                color: ${u.H.CanvasText};
            }

            :host([href]) .heading,
            :host([immersive-card][href]) .heading {
                color: ${u.H.LinkText};
            }

            .heading:hover,
            .heading:${a.b} {
                text-decoration: underline;
            }

            :host([immersive-card]) .gradient {
                background: linear-gradient(
                    180deg,
                    transparent 0%,
                    ${u.H.ButtonFace} 62.5%,
                    ${u.H.ButtonFace} 100%
                );
            }

            :host([immersive-card]) .wide .gradient {
                background: linear-gradient(
                    270deg,
                    transparent 0%,
                    ${u.H.ButtonFace} 102px,
                    ${u.H.ButtonFace} 246px
                );
            }
        
            :host([immersive-card]) .wide.image-pos-start .gradient {
                background: linear-gradient(
                    90deg,
                    transparent 0%,
                    ${u.H.ButtonFace} 102px,
                    ${u.H.ButtonFace} 246px
                );
            }

            :host([immersive-card]) .no-image .gradient,
            :host([immersive-card]) .wide.no-image .gradient {
                background: linear-gradient(
                    65.94deg,
                    ${u.H.ButtonFace} 8.23%,
                    ${u.H.ButtonFace} 93.81%
                );
            }

            :host([immersive-card]) .hide-story {
                background: none;
            }

            .abstract,
            ::slotted(p) {
                opacity: 1;
            }

            ::slotted([slot="hide-story"]) {
                background-color: ${u.H.ButtonFace};
                border-color: ${u.H.ButtonText};
                fill: ${u.H.ButtonText};
            }

            ::slotted([slot="hide-story"]:hover),
            ::slotted([slot="hide-story"]:${a.b}) {
                background-color: ${u.H.Highlight};
                border-color: ${u.H.ButtonText};
                fill: ${u.H.HighlightText};
            }

            :host([immersive-card]) .half .gradient,
            :host([immersive-card]) .no-image.half .gradient {
                background: ${u.H.ButtonFace};
            }
        `))},20779:function(t,e,n){n.d(e,{MJ:function(){return h}});var r=n(48733),i=n(18295),o=n(32804),a=n(39181),s=n(81422),u=n(58689),l=n(90960),c=n(62112);const d=t=>e=>(0,c._)(t,e.childElements)?a.d`<div id="${t}" class="${t}" part="${t}">
            <slot name="${t}"></slot>
        </div>`:"",h=r.d.compose({baseName:"article",template:(t,e)=>a.d`
    <template
        role="article"
        ?immersive-card="${t=>t.isArticleCard()||t.isFlexArticleCard()}"
        ${(0,s.p)({property:"childElements",filter:(0,u.R)()})}
    >
        <div
            part="article"
            class="article${t=>(0,c._)("image",t.childElements)?` image-pos-${t.imagePosition}`:" no-image"}${t=>t.wide?" wide":""}
                    ${t=>t.half?(0,c._)("abstract",t.childElements)?" has-abstract half":"half":""}
                ${t=>(0,c._)("content-indicator",t.contentIndicatorNodes)?"":" no-content-indicator"}
                ${t=>t.isFlexArticleCard()?" flex-card":""}"
            style="${t=>t.gradientVariables}"
        >
            ${t=>"start"===t.imagePosition?d("image")(t):""}
            <div class="text" part="text">
                <div class="gradient ${t=>"rtl"===o.o7V.getValueFor(t)?"gradient-rtl":"gradient-ltr"}" part="gradient"></div>
                ${t=>(0,c._)("start",t.childElements)?a.d`<slot name="start" part="start"></slot>`:""}
                ${d("attribution")}
                <a
                    id="heading"
                    class="heading"
                    part="heading"
                    href="${t=>t.href?t.href:void 0}"
                    target=${t=>t.target?t.target:void 0}
                    @click=${(t,e)=>t.handleContentCardLinkClick(e.event)}
                    data-t="${t=>t.anchorTelemetryTag}"
                >
                    <span role="heading" aria-level="${t=>t.headingLevel}"
                        ><slot></slot></span
                ></a>
                ${d("abstract")}
                <div class="actions" part="actions">
                    <slot name="start-action"></slot><slot name="end-action"></slot>
                </div>
            </div>
            ${t=>"end"===t.imagePosition?d("image")(t):""}
            ${t=>(0,c._)("hide-story",t.childElements)?a.d`<div class="hide-story-wrapper" part="hide-story-wrapper">
                          ${d("hide-story")}
                      </div>`:""}
            <slot name="content-indicator" ${(0,l.Q)("contentIndicatorNodes")}></slot>
        </div>
    </template>
`,styles:i.g,shadowOptions:{delegatesFocus:!0}})},28195:function(t,e,n){n.d(e,{x:function(){return i}});var r=n(48839);class i extends r.I{handleImageContentChange(){this.imageContainer.classList.toggle("image",this.image.assignedNodes().length>0)}}},76445:function(t,e,n){n.d(e,{B4:function(){return d}});var r=n(28195),i=n(39181),o=n(58952);var a=n(53046),s=n(67020),u=n(40082),l=n(32804),c=n(15933);const d=r.x.compose({baseName:"attribution",template:(t,e)=>i.d`
    <span part="image" ${(0,o.i)("imageContainer")}>
        <slot
            name="image"
            ${(0,o.i)("image")}
            @slotchange=${t=>t.handleImageContentChange()}
        ></slot>
    </span>
    <span part="content" class="content">
        <slot></slot>
    </span>
`,styles:(t,e)=>a.i`
        ${(0,s.j)("inline-flex")} :host {
            box-sizing: border-box;
            font-family: ${l.SVJ};
            font-size: ${l.sNp};
            font-weight: 400;
            line-height: ${l.vgC};
            align-items: center;
            color: ${l.Q5n};
            min-height: 16px;
        }

        .content {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .image {
            display: flex;
            margin-inline-end: calc(${l._5n} * 2px);
        }
    `.withBehaviors((0,u.vF)(a.i`
                :host,
                .content {
                    color: ${c.H.CanvasText};
                    fill: currentcolor;
                }
            `))})},55978:function(t,e,n){n.d(e,{$:function(){return r},u:function(){return l}});var r,i=n(33940),o=n(65620),a=n(87697),s=n(48839),u=n(56618);!function(t){t.default="default",t.condensed="condensed",t.infoPane="infoPane",t.infoPane1x3y="infoPane1x3y",t.infoPaneSplitVertical="infoPaneSplitVertical",t.infoPaneSplitHorizontal="infoPaneSplitHorizontal"}(r||(r={}));class l extends s.I{constructor(){super(...arguments),this.layout=r.default,this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}abstractChanged(){this.$fastController.isConnected&&(this.hasAbstract=this.abstract.length>0)}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleBackgroundImageContentChange(){this.backgroundImageContainer.classList.toggle("background-image",this.backgroundImage.assignedNodes().length>0)}handleContentCardLinkClick(t){return this.$emit("link-invoked",t),!0}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseover",this.mouseOver),this.addEventListener("mouseout",this.mouseOut),this.addEventListener("focusin",this.focusIn),this.addEventListener("focusout",this.focusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseover",this.mouseOver),this.removeEventListener("mouseout",this.mouseOut),this.removeEventListener("focusin",this.focusIn),this.removeEventListener("focusout",this.focusOut)}mouseOver(){this.setExpanded(!0),this.hasHover=!0}mouseOut(){this.hasFocus||this.setExpanded(!1),this.hasHover=!1}focusIn(){this.setExpanded(!0),this.hasFocus=!0}focusOut(){this.hasHover||this.setExpanded(!1),this.hasFocus=!1}filteredContentIndicator(){return this.contentIndicatorNodes.filter((t=>t instanceof u.K))}setExpanded(t){this.filteredContentIndicator().forEach((e=>e.expanded=t))}}(0,i.gn)([o.Lj],l.prototype,"layout",void 0),(0,i.gn)([(0,o.Lj)({attribute:"heading-level",mode:"fromView",converter:o.Id})],l.prototype,"headinglevel",void 0),(0,i.gn)([(0,o.Lj)({mode:"fromView"})],l.prototype,"href",void 0),(0,i.gn)([a.LO],l.prototype,"isGrid",void 0),(0,i.gn)([a.LO],l.prototype,"anchorTelemetryTag",void 0),(0,i.gn)([a.LO],l.prototype,"mediaNodes",void 0),(0,i.gn)([a.LO],l.prototype,"hasAbstract",void 0),(0,i.gn)([a.LO],l.prototype,"hasFooter",void 0),(0,i.gn)([a.LO],l.prototype,"abstract",void 0),(0,i.gn)([a.LO],l.prototype,"iconSlottedNodes",void 0),(0,i.gn)([(0,o.Lj)({attribute:"image-priority",mode:"boolean"})],l.prototype,"imagePriority",void 0),(0,i.gn)([o.Lj],l.prototype,"target",void 0),(0,i.gn)([a.LO],l.prototype,"hoverActionsSlottedNodes",void 0),(0,i.gn)([a.LO],l.prototype,"contentIndicatorNodes",void 0)},71095:function(t,e,n){n.d(e,{On:function(){return w}});var r=n(55978),i=n(39181),o=n(58952),a=n(81422),s=n(58689),u=n(13988),l=n(90960);const c=i.d`
    <div
        class="footer ${t=>t.hasAbstract?"has-abstract-footer":""} ${t=>t.hasFooter?"":"footer__hidden"}"
        part="footer"
    >
        <span part="start-actions" ${(0,o.i)("startActionsContainer")}>
            <slot
                name="start-actions"
                ${(0,o.i)("startActions")}
                @slotchange=${t=>t.handleStartActionsContentChange()}
            ></slot>
        </span>
        <span part="end-actions" ${(0,o.i)("endActionsContainer")}>
            <slot
                name="end-actions"
                ${(0,o.i)("endActions")}
                @slotchange=${t=>t.handleEndActionsContentChange()}
            ></slot>
        </span>
    </div>
`;var d=n(67020),h=n(56201),f=n(40082),p=n(53046),g=n(15933),v=n(32804),m=n(22674);const b=p.i`
    :host([layout="default"]) .media-wrapper {
        float: right;
    }
`,y=p.i`
    :host([layout="default"]) .media-wrapper {
        float: left;
    }
`,w=r.u.compose({baseName:"content-card",template:(t,e)=>i.d`
    <template
        ${(0,a.p)({property:"mediaNodes",filter:(0,s.R)("[slot='media'], [slot='icon']")})}
    >
        <span part="background-image" ${(0,o.i)("backgroundImageContainer")}>
            <slot
                name="background-image"
                ${(0,o.i)("backgroundImage")}
                @slotchange=${t=>t.handleBackgroundImageContentChange()}
            ></slot>
        </span>
        <div class="mask" part="mask"></div>
        <div class="body ${t=>t.hasAbstract?"has-abstract":""} ${t=>t.isGrid?"grid":""}" part="body">
            ${(0,u.g)((t=>{var e;return(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)>0}),i.d` <div class="media-wrapper" part="media-wrapper">
                    <div part="media" ${(0,o.i)("mediaContainer")}>
                        <slot
                            name="media"
                            ${(0,o.i)("media")}
                            @slotchange=${t=>t.handleMediaContentChange()}
                        ></slot>
                        <slot
                            name="content-indicator"
                            ${(0,l.Q)("contentIndicatorNodes")}
                        ></slot>
                        <span
                            part="icon"
                            ${(0,o.i)("iconContainer")}
                            class="${t=>t.iconSlottedNodes&&t.iconSlottedNodes.length?"icon":"icon__hidden"}"
                        >
                            <slot
                                name="icon"
                                ${(0,o.i)("icon")}
                                ${(0,l.Q)("iconSlottedNodes")}
                            ></slot>
                        </span>
                    </div>
                </div>`)}
            <div class="heading-container" part="heading-container">
                ${(0,u.g)((t=>{var e;return 0===(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)}),i.d`
                        <slot
                            name="content-indicator"
                            ${(0,l.Q)("contentIndicatorNodes")}
                        ></slot>
                    `)}
                <slot name="attribution"></slot>
                <span
                    class="heading-wrapper"
                    part="heading-wrapper"
                    role="heading"
                    aria-level=${t=>t.headinglevel}
                >
                    <a
                        class="heading"
                        part="heading"
                        href=${t=>t.href?t.href:void 0}
                        target=${t=>t.target?t.target:void 0}
                        @click=${(t,e)=>t.handleContentCardLinkClick(e.event)}
                        data-t="${t=>t.anchorTelemetryTag}"
                        ><slot></slot
                    ></a>
                </span>
            </div>
            <div class="abstract" part="abstract">
                <slot name="abstract" ${(0,l.Q)("abstract")}></slot>
            </div>
            <slot name="call-to-action"></slot>
            ${(0,u.g)((t=>t.layout!==r.$.default),c)}
        </div>
        ${(0,u.g)((t=>t.layout===r.$.default),c)}
        <span
            part="hover-actions"
            class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions__hidden"}"
        >
            <slot name="hover-actions" ${(0,l.Q)("hoverActionsSlottedNodes")}></slot>
        </span>
    </template>
`,styles:(t,e)=>p.i`
    ${(0,d.j)("flex")} :host {
        --icon-size: 24px;
        position: relative;
        width: auto;
        box-sizing: border-box;
        font-family: ${v.SVJ};
        flex-direction: column;
        outline: none;
        height: 100%;
        overflow: hidden;
    }

    :host(:hover) .hover-actions {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
    }

    .body {
        display: grid;
        justify-content: center;
        row-gap: 8px;
        column-gap: 10px;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto;
    }

    :host([layout="default"]) .body .abstract {
        display: none;
    }

    :host([layout="default"]) .body {
        display: block;
    }

    :host([layout="default"]) .body.grid {
        display: grid; 
    }

    :host([layout="default"]) .body.grid .media-wrapper {
        float: none; 
    }

    :host([layout="default"]) .has-abstract .heading {
        -webkit-line-clamp: var(--heading-max-lines, 2);
    }

    :host([layout="default"]) .has-abstract .media-wrapper {
        margin-inline-start: 16px;
    }

    :host([image-priority]) .has-abstract .media-wrapper {
        margin-inline-start: 0;
    }

    .footer {
        padding-inline-start: var(--footer-start-padding, 16px);
        padding-inline-end: var(--footer-start-padding, 16px);
        padding-top: var(--footer-padding-top, 0);
        padding-bottom: var(--footer-padding-bottom, 4px);
        margin-top: auto;
        font-size: var(--footer-font-size, ${v.sNp});
        line-height: var(--footer-line-height, ${v.vgC});
    }

    .footer,
    .start-actions,
    .end-actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: ${v.Q5n};
        fill: ${v.Q5n};
    }

    .footer__hidden {
        display: none;
    }

    .hover-actions {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 8px;
        z-index: 2;
        opacity: 0;
    }

    .hover-actions__hidden {
        display: none;
    }

    .hover-actions:focus-within {
        opacity: 1;
    }

    .heading-container {
        grid-row: 1;
        display: flex;
        flex-direction: column;
        padding-inline-start: var(--heading-start-padding, 16px);
        padding-inline-end: var(--heading-end-padding, 16px);
        padding-bottom: 0;
        padding-top: 16px;
    }

    .heading-wrapper a:after {
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    :host([layout="condensed"]) .body {
        gap: 0;
    }

    :host([layout="condensed"]) .footer {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: var(--footer-grid-column-end, auto);
        padding-inline-start: 16px;
    }

    :host([layout="condensed"]) .media-wrapper {
        position: relative;
        grid-row: 1 / span 2;
        margin-top: 5px;
    }

    :host([layout="condensed"]) .heading-container {
        padding-top: 0px;
        --heading-end-padding: 12px;
    }

    :host([layout="condensed"]) ::slotted([slot="attribution"]) {
        margin-bottom: 0px
    }

    .icon {
        position: absolute;
        display: inline-flex;
        top: auto;
        bottom: 0;
        justify-content: center;
        align-items: center;
        margin: 0 0 4px 0;
        margin-inline-start: 4px;
    }

    .hover-actions {
        inset-inline-end: 8px;
    }

    .icon {
        inset-inline-start: 0;
    }
    :host([layout="infoPane1x3y"]) ::slotted([slot="content-indicator"]),
    :host([layout="infoPane"]) ::slotted([slot="content-indicator"]),
    .media-wrapper ::slotted([slot="content-indicator"]) {
        inset-inline-start: 8px;
    }

    .icon__hidden {
        display: none;
    }

    ::slotted([slot="icon"]) {
        width: var(--icon-size);
        height: var(--icon-size);
        fill: #FFF;
    }

    ::slotted([slot="attribution"]) {
        margin-bottom: 6px
    }

    ::slotted([slot="abstract"]) {
        margin: 2px 0;
    }

    .media-wrapper {
        grid-row: 1;
        grid-column: 2;
        margin-inline-end: var(--media-inline-padding, 16px);
        margin-top: 16px;
    }

    .media {
        display: flex;
        position: relative;
    }

    :host([image-priority]) .heading {
        -webkit-line-clamp: var(--heading-max-lines, 2);
    }

    :host([image-priority]) .body {
        grid-template-columns: 1;
    }

    :host([image-priority]) .media-wrapper {
        grid-row: 1;
        grid-column: span 2;
        margin: 0;
    }

    :host([image-priority]) .heading-container {
        grid-row: 2;
        grid-column: span 2;
        padding-top: 10px;
        padding-inline-start: var(--heading-start-padding, 16px);
    }

    :host([image-priority]) ::slotted([slot="media"]),
    :host([layout="infoPaneSplitHorizontal"]) ::slotted([slot="media"]) {
        border-radius: 0px;
    }

    :host([layout="infoPane"]) .media-wrapper, :host([layout="infoPane1x3y"]) .media-wrapper {
        grid-row: 1;
        grid-column: 1;
        margin-top: 0;
        width: fit-content;
        height: fit-content;
    }

    :host([layout="infoPane"]) .icon, :host([layout="infoPaneSplitVertical"]) .icon, :host([layout="infoPane1x3y"]) .icon {
        display: inline;
        left: 0;
        top: 0;
        margin: 4px 0 0;
        margin-inline-start: 4px;
    }

    :host([layout="infoPaneSplitVertical"]) .icon {
        display: block;
    }

    :host([layout="infoPaneSplitHorizontal"]) .icon {
        bottom: 0px;
    }
    
    :host([layout="infoPaneSplitHorizontal"]) .heading-container,
    :host([layout="infoPane"]) .heading-container, :host([layout="infoPane1x3y"]) .heading-container {
        align-self: end;
    }

    :host([layout="infoPaneSplitHorizontal"]) .body,
    :host([layout="infoPane"]) .body, :host([layout="infoPane1x3y"]) .body {
        height: 100%;
        grid-template-rows: 1fr auto;
    }

    ::slotted([slot="call-to-action"]) {
        width: calc(100% - 32px);
        grid-row: 3;
        z-index: 1;
        grid-column: 1 / span 2;
        margin: 0 16px;
    }

    ::slotted([slot="media"]) {
        border-radius: calc(var(--content-card-corner-radius, 2) * 2px)
    }

    :host([layout="default"]) .grid .heading-container {
        grid-area: initial !important;
    }

    :host([layout="default"]) .has-abstract .abstract {
        display: block;
        padding: 0 16px 16px 16px;
    }

    .abstract {
        position: relative;
        margin: 0;
        font-size: var(--abstract-font-size, ${v.cSu});
        line-height: var(--abstract-line-height, ${v.RUt});
        font-weight: 400;
        grid-column: span 2;
        box-sizing: content-box;
        color: ${v.Q5n};
        padding: 0 16px;
    }

    ::slotted([slot="start-actions"]),
    ::slotted([slot="end-actions"]) {
        z-index: 2;
        display: grid;
        gap: 5px;
        align-items: center;
        grid-auto-flow: column;
    }

    ::slotted([slot="call-to-action"]) {
        z-index: 2;
    }

    ::slotted(fluent-button[slot="start-actions"]),
    ::slotted(fluent-button[slot="end-actions"]) {
        color: ${v.Q5n};
        fill: ${v.Q5n};
    }
    
    ::slotted(fluent-button[appearance="stealth"]:not(:hover)), :slotted([slot="hover-actions"]:not(:hover)) {
        background: transparent;
    }

    .heading {
        text-decoration: none;
        outline: none;
        color: ${v.CHi};
        font-size: var(--heading-font-size, ${v.PwC});
        line-height: var(--heading-line-height, ${v.b3W});
        font-weight: 600;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--heading-max-lines, 3);
        white-space: initial;
    }

    .mask {
        display: none;
    }

    .heading:hover,
    .heading:${h.b} {
        text-decoration: underline;
    }

    .heading::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    :host([layout="infoPane"]), :host([layout="infoPane1x3y"]) {
        justify-content: flex-end;
        border: none;
    }

    :host(:not([layout="infoPane"])) .has-abstract-footer, :host(:not([layout="infoPane1x3y"])) .has-abstract-footer {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background: ${v.IfY};
        box-shadow: 0px -25px 15px ${v.IfY};
    }

    :host([layout="infoPane"]) .heading-container, :host([layout="infoPane1x3y"]) .heading-container {
        grid-column: 1 / 3;
        z-index: 1;
    }

    :host([layout="infoPane"]) .has-abstract .heading-container, :host([layout="infoPane1x3y"]) .has-abstract .heading-container  {
        grid-area: 2/ 1 / span 2 / auto;
        --heading-start-padding: 16px;
        --heading-end-padding: 0;
        padding-bottom: 12px;
        padding-top: 8px;
        align-self: flex-start;
    }

    :host([layout="infoPane"]) .abstract, :host([layout="infoPane1x3y"]) .abstract, :host([layout="infoPaneSplitHorizontal"]) .abstract  {
        grid-row: 2;
        grid-column: 2;
        color: ${v.CHi};
        padding: 8px 16px 0 16px;
        align-self: end;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }

    :host([layout="infoPane"]) .abstract, :host([layout="infoPane1x3y"]) .abstract  {
        display: none;
    }

    :host([layout="infoPane"]) .has-abstract, :host([layout="infoPane1x3y"]) .has-abstract {
        grid-template-columns: 1fr 1fr;
        gap: 0 10px;
    }

    :host([layout="infoPane"]) .has-abstract .footer, :host([layout="infoPane1x3y"]) .has-abstract .footer {
        min-height: calc(40px - 4px);
    }

    :host([layout="infoPane"]) .has-abstract .abstract, :host([layout="infoPane1x3y"]) .has-abstract .abstract {
        display: -webkit-box;
        align-self: flex-end;
    }

    :host([layout="infoPane"]) .mask, :host([layout="infoPane1x3y"]) .mask {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: var(--mask-gradient, linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0,0,0,0) 176px));
    }
    
    :host([layout="infoPane1x3y"]) .mask {
        background-image: var(--mask-gradient, linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,1) 69px, rgba(0,0,0,1)));
        top: 257px;
    }

    :host([layout="infoPane"]) .has-abstract .has-abstract-footer, :host([layout="infoPane1x3y"]) .has-abstract .has-abstract-footer {
        grid-row: 3;
        grid-column: 2;
        position: inherit;
        align-self: flex-end;
        max-height: 40px;
    }

    :host([layout="infoPane"]) .footer, :host([layout="infoPane1x3y"]) .footer  {
        margin-top: unset;
        grid-row: 2;
        grid-column: 1 / span 2;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
    }


    :host([layout="infoPane"]) ::slotted(msft-attribution[slot="attribution"]), :host([layout="infoPane1x3y"]) ::slotted(msft-attribution[slot="attribution"]) {
        color: ${v.CHi};
        text-shadow: 0px 0.4px 0.9px rgba(0, 0, 0, 0.13), 0px 0px 2.22px rgba(0, 0, 0, 0.11);
    }


    :host([layout="infoPaneSplitVertical"]) {
        grid-template-columns: 304px 1fr;
        grid-template-rows: auto;
        background: ${v.IfY};
    }

    :host([layout="infoPaneSplitVertical"]) ::slotted([slot="media"]) {
        border-radius: 0px;
    }

    :host([layout="infoPaneSplitVertical"]) .media-wrapper {
        grid-row: 1 / span 2;
        grid-column: 1;
        margin: 0;
    }

    :host([layout="infoPaneSplitVertical"]) .heading-container {
        grid-row: 1;
        grid-column: 2;
        --heading-start-padding: 4px;
        --heading-end-padding: 16px;
        padding-bottom: 0;
        padding-top: 16px;
    }

    :host([layout="infoPaneSplitVertical"]) .footer {
        grid-row: 2;
        grid-column: 2;
        padding-inline-start: 0;
        padding-inline-end: 16px;
        padding-top: 0;
    }

    :host([layout="infoPaneSplitHorizontal"]) .body {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 326px auto auto;
        row-gap: 4px;
        background: ${v.IfY};
    }

    :host([layout="infoPaneSplitHorizontal"]) .media-wrapper {
        grid-column: 1 / span 2;
        margin: 0;
    }

    :host([layout="infoPaneSplitHorizontal"]) .heading-container {
        grid-column: 1;
        grid-row: 2 / span 2;
        --heading-start-padding: 16px;
        --heading-end-padding: 0;
        padding-bottom: 12px;
        padding-top: 12px;
    }

    :host([layout="infoPaneSplitHorizontal"]) .footer {
        grid-column: 2;
        grid-row: 3;
        box-shadow: none;
    }

    :host([layout="infoPaneSplitHorizontal"]) .abstract {
        color: inherit;
        align-self: inherit;
        padding: 12px 16px 0 16px;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    :host([layout="infoPane1x3y"]) .background-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 136px;
    }

    .background-image ::slotted(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    :host([layout="infoPane1x3y"]) ::slotted([slot="content-indicator"]),
    :host([layout="infoPane"]) ::slotted([slot="content-indicator"]),
    .media-wrapper ::slotted([slot="content-indicator"]) {
        position: absolute;
        top: 8px;
        z-index: 1;
    }

    ::slotted([slot="content-indicator"]) {
        margin-bottom: 26px;
        align-self: flex-start;
    }

`.withBehaviors(new m.O(b,y),(0,f.vF)(p.i`
                .heading {
                    color: ${g.H.LinkText};
                    background: ${g.H.ButtonFace};
                }
                .abstract {
                    color: ${g.H.ButtonText};
                }
                .icon {
                    background-color: #000;
                    height: fit-content;
                }
                :host([layout="infoPane"]) .abstract,
                :host([layout="infoPane1x3y"]) .abstract,
                :host([layout="infoPaneSplitHorizontal"]) .abstract {
                    color: ${g.H.ButtonText};
                    background: ${g.H.ButtonFace};
                }
                .footer,
                .start-actions,
                .end-actions,
                ::slotted([slot="start-actions"]),
                ::slotted([slot="end-actions"]) {
                    background: ${g.H.ButtonFace};
                    color: ${g.H.ButtonText};
                    fill: currentcolor;
                }
                :host([layout="infoPane"]) .mask,
                :host([layout="infoPane1x3y"]) .mask {
                    background-image: none;
                }
                :host([layout="infoPane"]) .has-abstract .footer,
                :host([layout="infoPane1x3y"]) .has-abstract .footer,
                :host([layout="infoPane"]) .footer,
                :host([layout="infoPane1x3y"]) .footer,
                :host(:not([layout="infoPane"])) .has-abstract-footer,
                :host(:not([layout="infoPane1x3y"])) .has-abstract-footer {
                    background: ${g.H.ButtonFace};
                    box-shadow: none;
                }
                ::slotted(fluent-button[appearance="stealth"]:not(:hover)) {
                    background: ${g.H.ButtonFace};
                }
            `)),shadowOptions:{delegatesFocus:!0}})},56618:function(t,e,n){n.d(e,{K:function(){return s}});var r=n(33940),i=n(65620),o=n(87697),a=n(48839);class s extends a.I{constructor(){super(...arguments),this.expanded=!1}defaultItemsChanged(){this.$fastController.isConnected&&(this.shouldanimate=this.defaultItems.length>0)}}(0,r.gn)([(0,i.Lj)({mode:"boolean"})],s.prototype,"expanded",void 0),(0,r.gn)([o.LO],s.prototype,"defaultItems",void 0),(0,r.gn)([(0,i.Lj)({mode:"boolean",attribute:"animate"})],s.prototype,"shouldanimate",void 0)},99348:function(t,e,n){n.d(e,{tO:function(){return m}});var r=n(56618),i=n(39181),o=n(90960);var a=n(32804),s=n(22674),u=n(67020),l=n(40082),c=n(53046),d=n(16859),h=n(15933);const f=c.i`
    :host::after {
        transform: translateX(-100%) translateX(20px);
    }
    :host([animate]) .label {
        transform: translateX(-100%);
    }
`,p=c.i`
    :host::after {
        transform: translateX(100%) translateX(-20px);
    }
    :host([animate]) .label {
        transform: translateX(100%);
    }
`,g=c.i`
    :host {
        color: #000;
    }
    :host::after {
        background: rgba(255, 255, 255, 0.46);
    }
`,v=c.i`
    :host {
        color: #fff;
    }
    :host::after {
        background: rgba(0, 0, 0, 0.54);
    }
`,m=r.K.compose({baseName:"content-indicator",template:(t,e)=>i.d`
    <span class="icon-container" part="icon-container" aria-hidden="true">
        <slot name="icon"></slot>
    </span>
    <span class="label-container" part="label-container">
        <span class="label" part="label">
            <slot
                ${(0,o.Q)({property:"defaultItems",filter:t=>{var e;return t instanceof HTMLElement&&null!==t.offsetParent||t instanceof Text&&!!(null===(e=t.textContent)||void 0===e?void 0:e.trim().length)}})}
            ></slot>
        </span>
    </span>
`,styles:(t,e)=>c.i`
        ${(0,u.j)("inline-flex")} :host {
            align-items: center;
            box-sizing: border-box;
            contain: content;
            overflow: hidden;
        }

        .label-container {
            overflow: hidden;
        }

        :host,
        :host::after {
            ${""}
            border-radius: 4px;
        }

        :host::after {
            content: "";
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: -1;
        }

        .icon-container,
        .label {
            min-height: 20px;
            min-width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            fill: currentcolor;
        }

        :host([animate])::after,
        .label {
            transition: transform 250ms cubic-bezier(0.17, 0.17, 0, 1);
        }

        .label {
            font-family: ${a.SVJ};
            font-size: ${a.sNp};
            font-weight: 600;
            line-height: ${a.vgC};
            text-overflow: ellipsis;
            padding: 0 4px;
        }

        :host([expanded][animate])::after,
        :host([expanded][animate]) .label {
            transform: translateX(0%);
        }

        .label {
            transform: translateX(-100%);
        }

        ::slotted([slot="icon"]) {
            display: block;
            fill: currentcolor;
        }
    `.withBehaviors(new s.O(f,p),new d.Y(g,v),(0,l.vF)(c.i`
                :host {
                    forced-color-adjust: auto;
                }
                ::slotted([slot="icon"]) {
                    color: ${h.H.ButtonText};
                    fill: currentcolor;
                }
                .icon-container,
                :host([expanded][animate]) .label,
                :host::after {
                    background: ${h.H.ButtonFace};
                    color: ${h.H.ButtonText};
                    fill: currentcolor;
                    border-radius: calc(${a.UWU} * 1px);
                }
                .label {
                    background: transparent;
                }
            `))})},16859:function(t,e,n){n.d(e,{Y:function(){return u}});var r=n(32804),i=n(78125),o=n(11162),a=n(60279);const s=(0,n(9791).Z)((t=>{let e=(0,o.in)(t);if(null!==e)return e;if(e=(0,o.hg)(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));class u{constructor(t,e){this.cache=new WeakMap,this.light=t,this.dark=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&r.IfY.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new l(this.light,this.dark,t),n=r.IfY.getValueFor(t);r.IfY.subscribe(e,t),e.attach(n),this.cache.set(t,e)}}class l{constructor(t,e,n){this.light=t,this.dark=e,this.source=n,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(t))}attach(t){if(window.matchMedia("(forced-colors: active)").matches)return;const e=(n=t.toColorString(),(0,a.hM)(s(n))<=i.h.DarkMode?"dark":"light");var n;this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},62112:function(t,e,n){function r(t,e){return e&&e.some((e=>e.slot===t))}n.d(e,{_:function(){return r}})},83565:function(t,e,n){n.d(e,{Vc:function(){return p}});var r=n(39181),i=n(58952),o=n(51208);var a=n(99641),s=n(53046),u=n(67020),l=n(56201),c=n(40082),d=n(87839),h=n(32804),f=n(2658);const p=a.Q.compose({baseName:"accordion-item",template:(t,e)=>r.d`
    <template class="${t=>t.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${t=>t.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${(0,i.i)("expandbutton")}
                aria-expanded="${t=>t.expanded}"
                aria-controls="${t=>t.id}-panel"
                id="${t=>t.id}"
                @click="${(t,e)=>t.clickHandler(e.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${(0,o.m9)(t,e)}
            ${(0,o.LC)(t,e)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${e.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${e.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${t=>t.id}-panel"
            role="region"
            aria-labelledby="${t=>t.id}"
        >
            <slot></slot>
        </div>
    </template>
`,styles:(t,e)=>s.i`
        ${(0,u.j)("flex")} :host {
            box-sizing: border-box;
            font-family: ${h.SVJ};
            flex-direction: column;
            font-size: ${h.sNp};
            line-height: ${h.vgC};
            border-bottom: calc(${h.Han} * 1px) solid ${h.dtw};
        }

        .region {
            display: none;
            padding: calc((6 + (${h._5n} * 2 * ${h.hVk})) * 1px);
        }

        .heading {
            display: grid;
            position: relative;
            grid-template-columns: auto 1fr auto calc(${f.i} * 1px);
            z-index: 2;
        }

        .button {
            appearance: none;
            border: none;
            background: none;
            grid-column: 2;
            grid-row: 1;
            outline: none;
            padding: 0 calc((6 + (${h._5n} * 2 * ${h.hVk})) * 1px);
            text-align: left;
            height: calc(${f.i} * 1px);
            color: ${h.CHi};
            cursor: pointer;
            font-family: inherit;
        }

        .button:hover,
        .button:active {
            color: ${h.CHi};
        }

        .button::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            cursor: pointer;
        }

        ${""}
        .button:${l.b}::before {
            outline: none;
            border: calc(${h.Han} * 1px) solid ${h.yGg};
            box-shadow: 0 0 0 calc((${h.vxp} - ${h.Han}) * 1px)
                ${h.yGg};
        }

        :host(.expanded) .region {
            display: block;
        }

        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            grid-column: 4;
            z-index: 2;
            pointer-events: none;
            fill: ${h.Avx};
        }

        ::slotted([name="collapsed-icon"]) {
            display: flex;
        }

        :host(.expanded) ::slotted([name="collapsed-icon"]) {
            display: none;
        }

        ::slotted([name="expanded-icon"]) {
            display: none;
        }

        :host(.expanded) ::slotted([name="expanded-icon"]) {
            display: flex;
        }

        .start {
            display: flex;
            align-items: center;
            padding-inline-start: calc(${h._5n} * 1px);
            justify-content: center;
            grid-column: 1;
            z-index: 2;
        }

        .end {
            display: flex;
            align-items: center;
            justify-content: center;
            grid-column: 3;
            z-index: 2;
        }
    `.withBehaviors((0,c.vF)(s.i`
                ${""}
                .button:${l.b}::before {
                    border-color: ${d.H.Highlight};
                    box-shadow: 0 0 0 calc((${h.vxp} - ${h.Han}) * 1px)
                        ${d.H.Highlight};
                }
                .icon {
                    fill: ${d.H.ButtonText};
                }
            `)),collapsedIcon:'\n    <svg\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M16.22 3H3.78a.78.78 0 00-.78.78v12.44c0 .43.35.78.78.78h12.44c.43 0 .78-.35.78-.78V3.78a.78.78 0 00-.78-.78zM3.78 2h12.44C17.2 2 18 2.8 18 3.78v12.44c0 .98-.8 1.78-1.78 1.78H3.78C2.8 18 2 17.2 2 16.22V3.78C2 2.8 2.8 2 3.78 2zM11 9h3v2h-3v3H9v-3H6V9h3V6h2v3z"\n        />\n    </svg>\n  ',expandedIcon:'\n    <svg\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M3.78 3h12.44c.43 0 .78.35.78.78v12.44c0 .43-.35.78-.78.78H3.78a.78.78 0 01-.78-.78V3.78c0-.43.35-.78.78-.78zm12.44-1H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C18 2.8 17.2 2 16.22 2zM14 9H6v2h8V9z"\n        />\n    </svg>\n  '})},43810:function(t,e,n){n.d(e,{nN:function(){return y}});var r=n(20005),i=n(65620),o=n(87697),a=n(36153),s=n(78945),u=n(48839),l=n(99641);const c="single",d="multi";class h extends u.I{constructor(){super(...arguments),this.expandmode=d,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;if(0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((t,e)=>{t instanceof l.Q&&(t.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==e?t.expanded=!1:t.expanded=!0));const n=this.accordionIds[e];t.setAttribute("id","string"!=typeof n?`accordion-${e+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],t.addEventListener("keydown",this.handleItemKeyDown),t.addEventListener("focus",this.handleItemFocus)})),this.isSingleExpandMode())){(null!==(t=this.findExpandedItem())&&void 0!==t?t:this.accordionItems[0]).setAttribute("aria-disabled","true")}},this.removeItemListeners=t=>{t.forEach(((t,e)=>{t.removeEventListener("change",this.activeItemChange),t.removeEventListener("keydown",this.handleItemKeyDown),t.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach((t=>{t.hasAttribute("disabled")||t.id===this.activeid||t.removeAttribute("aria-disabled")}))),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case a.SB:t.preventDefault(),this.adjust(-1);break;case a.iF:t.preventDefault(),this.adjust(1);break;case a.tU:this.activeItemIndex=0,this.focusItem();break;case a.Kh:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,n=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==n&&-1!==n&&(this.activeItemIndex=n,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if("true"===this.accordionItems[t].getAttribute("expanded"))return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach(((t,e)=>{t.expanded=!1}))}getItemIds(){return this.accordionItems.map((t=>t.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===c}adjust(t){this.activeItemIndex=(0,s.wt)(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof l.Q&&t.expandbutton.focus()}}(0,r.gn)([(0,i.Lj)({attribute:"expand-mode"})],h.prototype,"expandmode",void 0),(0,r.gn)([o.LO],h.prototype,"accordionItems",void 0);var f=n(39181),p=n(90960),g=n(58689);var v=n(53046),m=n(67020),b=n(32804);const y=h.compose({baseName:"accordion",template:(t,e)=>f.d`
    <template>
        <slot ${(0,p.Q)({property:"accordionItems",filter:(0,g.R)()})}></slot>
        <slot name="item" part="item" ${(0,p.Q)("accordionItems")}></slot>
    </template>
`,styles:(t,e)=>v.i`
        ${(0,m.j)("flex")} :host {
            box-sizing: border-box;
            flex-direction: column;
            font-family: ${b.SVJ};
            font-size: ${b.sNp};
            line-height: ${b.vgC};
            color: ${b.CHi};
            border-top: calc(${b.Han} * 1px) solid ${b.dtw};
        }
    `})},38247:function(t,e,n){n.d(e,{QT:function(){return d}});var r=n(33940),i=n(28090),o=n(65620),a=n(45169),s=n(53046),u=n(45597),l=n(82636);class c extends i.e{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,r.gn)([o.Lj,(0,r.w6)("design:type",String)],c.prototype,"appearance",void 0);const d=c.compose({baseName:"anchor",baseClass:i.e,template:a.g,styles:(t,e)=>s.i`
        ${(0,u.vN)(t,e)}
    `.withBehaviors((0,l.H)("accent",u.jQ),(0,l.H)("hypertext",u.Xu),(0,l.H)("lightweight",u.vt),(0,l.H)("outline",u.O8),(0,l.H)("stealth",u.cg)),shadowOptions:{delegatesFocus:!0}})},69298:function(t,e,n){n.d(e,{Zb:function(){return y},F:function(){return x},ay:function(){return w}});var r=n(33940),i=n(65130),o=n(11162),a=n(22680),s=n(87697),u=n(65620),l=n(48657),c=n(32804),d=n(42355),h=n(58768),f=n(53046),p=n(67020),g=n(40082),v=n(87839),m=n(62734);const b=(t,e)=>f.i`
        ${(0,p.j)("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${c.IfY};
            color: ${c.CHi};
            border-radius: calc(${c.rSr} * 1px);
            ${m.XC}
        }

        :host(:hover) {
            --elevation: 8;
        }

        :host(:focus-within) {
            --elevation: 8;
        }

        :host {
            content-visibility: auto;
        }
    `.withBehaviors((0,g.vF)(f.i`
                :host {
                    forced-color-adjust: none;
                    background: ${v.H.Canvas};
                    box-shadow: 0 0 0 1px ${v.H.CanvasText};
                }
            `));class y extends i.Z{cardFillColorChanged(t,e){if(e){const t=(0,o.in)(e);null!==t&&(this.neutralPaletteSource=e,c.IfY.setValueFor(this,d.w.create(t.r,t.g,t.b)))}}neutralPaletteSourceChanged(t,e){if(e){const t=(0,o.in)(e),n=d.w.create(t.r,t.g,t.b);c.yvm.setValueFor(this,h.v.create(n))}}handleChange(t,e){this.cardFillColor||c.IfY.setValueFor(this,(e=>c.abR.getValueFor(e).evaluate(e,c.IfY.getValueFor(t))))}connectedCallback(){super.connectedCallback();const t=(0,a.T)(this);if(t){const e=s.y$.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}(0,r.gn)([(0,u.Lj)({attribute:"card-fill-color",mode:"fromView"}),(0,r.w6)("design:type",String)],y.prototype,"cardFillColor",void 0),(0,r.gn)([(0,u.Lj)({attribute:"neutral-palette-source",mode:"fromView"}),(0,r.w6)("design:type",String)],y.prototype,"neutralPaletteSource",void 0);const w=y.compose({baseName:"card",baseClass:i.Z,template:l.O,styles:b}),x=b},58768:function(t,e,n){n.d(e,{v:function(){return d}});var r=n(82917),i=n(52952),o=n(2696),a=n(11162),s=n(42355);function u(t,e,n=0,r=t.length-1){if(r===n)return t[n];const i=Math.floor((r-n)/2)+n;return e(t[i])?u(t,e,n,i):u(t,e,i+1,r)}var l=n(64087),c=n(32470);const d=Object.freeze({create:t=>h.from(t)});class h{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,n,r){void 0===n&&(n=this.closestIndexOf(t));let i=this.swatches;const o=this.lastIndex;let a=n;void 0===r&&(r=(0,l.a)(t));return-1===r&&(i=this.reversedSwatches,a=o-a),u(i,(n=>(0,c.$)(t,n)>=e),a,o)}get(t){return this.swatches[t]||this.swatches[(0,r.uZ)(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const n=this.swatches.reduce(((e,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?n:e));return e=this.swatches.indexOf(n),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new h(t,Object.freeze(new i.b({baseColor:o.h.fromObject(t)}).palette.map((t=>{const e=(0,a.in)(t.toStringHexRGB());return s.w.create(e.r,e.g,e.b)}))))}}},33978:function(t,e,n){n.d(e,{P:function(){return a},w:function(){return o}});var r=n(64087),i=n(3794);function o(t,e,n,i,o,a,s){const u=t.closestIndexOf(e);return null==s&&(s=(0,r.a)(e)),{rest:t.get(u+s*n),hover:t.get(u+s*i),active:t.get(u+s*o),focus:t.get(u+s*a)}}function a(t,e,n,r,a,s,u,l,c,d,h,f){return(0,i._)(e)?o(t,e,l,c,d,h,f):o(t,e,n,r,a,s,u)}},42355:function(t,e,n){n.d(e,{w:function(){return a}});var r=n(2696),i=n(60279),o=n(32470);const a=Object.freeze({create:(t,e,n)=>new s(t,e,n),from:t=>new s(t.r,t.g,t.b)});class s extends r.h{constructor(t,e,n){super(t,e,n,1),this.toColorString=this.toStringHexRGB,this.contrast=o.$.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,i.hM)(this)}static fromObject(t){return new s(t.r,t.g,t.b)}}},78125:function(t,e,n){n.d(e,{C:function(){return o},h:function(){return r}});var r,i=n(42355);function o(t){return i.w.create(t,t,t)}!function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(r||(r={}))},64087:function(t,e,n){n.d(e,{a:function(){return i}});var r=n(3794);function i(t){return(0,r._)(t)?-1:1}},3794:function(t,e,n){n.d(e,{_:function(){return i}});const r=(-.1+Math.sqrt(.21))/2;function i(t){return t.relativeLuminance<=r}},32470:function(t,e,n){function r(t,e){const n=t.relativeLuminance>e.relativeLuminance?t:e,r=t.relativeLuminance>e.relativeLuminance?e:t;return(n.relativeLuminance+.05)/(r.relativeLuminance+.05)}n.d(e,{$:function(){return r}})},12306:function(t,e,n){n.d(e,{h:function(){return y},k:function(){return w}});var r=n(33940),i=n(11162),o=n(53046),a=n(40082),s=n(87839),u=n(48839),l=n(87697),c=n(65620),d=n(39181),h=n(67020),f=n(58768),p=n(42355),g=n(32804);const v={toView:t=>null==t?null:t?.toColorString(),fromView(t){if(null==t)return null;const e=(0,i.in)(t);return e?p.w.create(e.r,e.g,e.b):null}},m=o.i`
    :host {
        background-color: ${g.IfY};
        color: ${g.CHi};
    }
`.withBehaviors((0,a.vF)(o.i`
            :host {
                background-color: ${s.H.Canvas};
                box-shadow: 0 0 0 1px ${s.H.CanvasText};
                color: ${s.H.CanvasText};
            }
        `));function b(t){return(e,n)=>{e[n+"Changed"]=function(e,n){null!=n?t.setValueFor(this,n):t.deleteValueFor(this)}}}class y extends u.I{constructor(){super(),this.noPaint=!1,l.y$.getNotifier(this).subscribe({handleChange:this.noPaintChanged.bind(this)},"fillColor")}noPaintChanged(){this.noPaint||void 0===this.fillColor?this.$fastController.removeStyles(m):this.$fastController.addStyles(m)}accentBaseColorChanged(t,e){null!=e?g.au1.setValueFor(this,f.v.create(e)):g.au1.deleteValueFor(this)}neutralBaseColorChanged(t,e){null!=e?g.yvm.setValueFor(this,f.v.create(e)):g.yvm.deleteValueFor(this)}}(0,r.gn)([(0,c.Lj)({attribute:"no-paint",mode:"boolean"}),(0,r.w6)("design:type",Object)],y.prototype,"noPaint",void 0),(0,r.gn)([(0,c.Lj)({attribute:"fill-color",converter:v}),b(g.IfY),(0,r.w6)("design:type",Object)],y.prototype,"fillColor",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-base-color",converter:v,mode:"fromView"}),(0,r.w6)("design:type",Object)],y.prototype,"accentBaseColor",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-base-color",converter:v,mode:"fromView"}),(0,r.w6)("design:type",Object)],y.prototype,"neutralBaseColor",void 0),(0,r.gn)([l.LO,b(g.yvm),(0,r.w6)("design:type",Object)],y.prototype,"neutralPalette",void 0),(0,r.gn)([l.LO,b(g.au1),(0,r.w6)("design:type",Object)],y.prototype,"accentPalette",void 0),(0,r.gn)([(0,c.Lj)({converter:c.Id}),b(g.hVk),(0,r.w6)("design:type",Number)],y.prototype,"density",void 0),(0,r.gn)([(0,c.Lj)({attribute:"design-unit",converter:c.Id}),b(g._5n),(0,r.w6)("design:type",Number)],y.prototype,"designUnit",void 0),(0,r.gn)([(0,c.Lj)({attribute:"direction"}),b(g.o7V),(0,r.w6)("design:type",String)],y.prototype,"direction",void 0),(0,r.gn)([(0,c.Lj)({attribute:"base-height-multiplier",converter:c.Id}),b(g.nfe),(0,r.w6)("design:type",Number)],y.prototype,"baseHeightMultiplier",void 0),(0,r.gn)([(0,c.Lj)({attribute:"base-horizontal-spacing-multiplier",converter:c.Id}),b(g.LQ3),(0,r.w6)("design:type",Number)],y.prototype,"baseHorizontalSpacingMultiplier",void 0),(0,r.gn)([(0,c.Lj)({attribute:"control-corner-radius",converter:c.Id}),b(g.UWU),(0,r.w6)("design:type",Number)],y.prototype,"controlCornerRadius",void 0),(0,r.gn)([(0,c.Lj)({attribute:"stroke-width",converter:c.Id}),b(g.Han),(0,r.w6)("design:type",Number)],y.prototype,"strokeWidth",void 0),(0,r.gn)([(0,c.Lj)({attribute:"focus-stroke-width",converter:c.Id}),b(g.vxp),(0,r.w6)("design:type",Number)],y.prototype,"focusStrokeWidth",void 0),(0,r.gn)([(0,c.Lj)({attribute:"disabled-opacity",converter:c.Id}),b(g.VFZ),(0,r.w6)("design:type",Number)],y.prototype,"disabledOpacity",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-minus-2-font-size"}),b(g.G8g),(0,r.w6)("design:type",String)],y.prototype,"typeRampMinus2FontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-minus-2-line-height"}),b(g.MwG),(0,r.w6)("design:type",String)],y.prototype,"typeRampMinus2LineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-minus-1-font-size"}),b(g.sNp),(0,r.w6)("design:type",String)],y.prototype,"typeRampMinus1FontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-minus-1-line-height"}),b(g.vgC),(0,r.w6)("design:type",String)],y.prototype,"typeRampMinus1LineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-base-font-size"}),b(g.cSu),(0,r.w6)("design:type",String)],y.prototype,"typeRampBaseFontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-base-line-height"}),b(g.RUt),(0,r.w6)("design:type",String)],y.prototype,"typeRampBaseLineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-1-font-size"}),b(g.PwC),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus1FontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-1-line-height"}),b(g.b3W),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus1LineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-2-font-size"}),b(g.mWK),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus2FontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-2-line-height"}),b(g.I7_),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus2LineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-3-font-size"}),b(g.ipv),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus3FontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-3-line-height"}),b(g.yGZ),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus3LineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-4-font-size"}),b(g.IWd),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus4FontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-4-line-height"}),b(g.iL4),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus4LineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-5-font-size"}),b(g.CXZ),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus5FontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-5-line-height"}),b(g.n5T),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus5LineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-6-font-size"}),b(g.Zaf),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus6FontSize",void 0),(0,r.gn)([(0,c.Lj)({attribute:"type-ramp-plus-6-line-height"}),b(g.yDy),(0,r.w6)("design:type",String)],y.prototype,"typeRampPlus6LineHeight",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-fill-rest-delta",converter:c.Id}),b(g.N7s),(0,r.w6)("design:type",Number)],y.prototype,"accentFillRestDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-fill-hover-delta",converter:c.Id}),b(g.B23),(0,r.w6)("design:type",Number)],y.prototype,"accentFillHoverDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-fill-active-delta",converter:c.Id}),b(g.Woc),(0,r.w6)("design:type",Number)],y.prototype,"accentFillActiveDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-fill-focus-delta",converter:c.Id}),b(g.v$0),(0,r.w6)("design:type",Number)],y.prototype,"accentFillFocusDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-foreground-rest-delta",converter:c.Id}),b(g.kpA),(0,r.w6)("design:type",Number)],y.prototype,"accentForegroundRestDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-foreground-hover-delta",converter:c.Id}),b(g.L8d),(0,r.w6)("design:type",Number)],y.prototype,"accentForegroundHoverDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-foreground-active-delta",converter:c.Id}),b(g.kb6),(0,r.w6)("design:type",Number)],y.prototype,"accentForegroundActiveDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"accent-foreground-focus-delta",converter:c.Id}),b(g.ndN),(0,r.w6)("design:type",Number)],y.prototype,"accentForegroundFocusDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-rest-delta",converter:c.Id}),b(g.MYN),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillRestDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-hover-delta",converter:c.Id}),b(g.jWw),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillHoverDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-active-delta",converter:c.Id}),b(g.hDF),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillActiveDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-focus-delta",converter:c.Id}),b(g.VQw),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillFocusDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-input-rest-delta",converter:c.Id}),b(g.efx),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillInputRestDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-input-hover-delta",converter:c.Id}),b(g.EL3),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillInputHoverDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-input-active-delta",converter:c.Id}),b(g.q_p),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillInputActiveDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-input-focus-delta",converter:c.Id}),b(g.Zbo),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillInputFocusDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-layer-rest-delta",converter:c.Id}),b(g.YL4),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillLayerRestDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-stealth-rest-delta",converter:c.Id}),b(g.qDs),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillStealthRestDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-stealth-hover-delta",converter:c.Id}),b(g.fqe),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillStealthHoverDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-stealth-active-delta",converter:c.Id}),b(g.gs2),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillStealthActiveDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-stealth-focus-delta",converter:c.Id}),b(g.IU$),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillStealthFocusDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-strong-hover-delta",converter:c.Id}),b(g.sc1),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillStrongHoverDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-strong-active-delta",converter:c.Id}),b(g.Vt5),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillStrongActiveDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-fill-strong-focus-delta",converter:c.Id}),b(g.UCF),(0,r.w6)("design:type",Number)],y.prototype,"neutralFillStrongFocusDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"base-layer-luminance",converter:c.Id}),b(g.q2d),(0,r.w6)("design:type",Number)],y.prototype,"baseLayerLuminance",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-stroke-divider-rest-delta",converter:c.Id}),b(g.hD7),(0,r.w6)("design:type",Number)],y.prototype,"neutralStrokeDividerRestDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-stroke-rest-delta",converter:c.Id}),b(g.fd1),(0,r.w6)("design:type",Number)],y.prototype,"neutralStrokeRestDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-stroke-hover-delta",converter:c.Id}),b(g.rnN),(0,r.w6)("design:type",Number)],y.prototype,"neutralStrokeHoverDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-stroke-active-delta",converter:c.Id}),b(g.IMz),(0,r.w6)("design:type",Number)],y.prototype,"neutralStrokeActiveDelta",void 0),(0,r.gn)([(0,c.Lj)({attribute:"neutral-stroke-focus-delta",converter:c.Id}),b(g.Bxy),(0,r.w6)("design:type",Number)],y.prototype,"neutralStrokeFocusDelta",void 0);const w=y.compose({baseName:"design-system-provider",template:d.d`
        <slot></slot>
    `,styles:o.i`
        ${(0,h.j)("block")}
    `})},63070:function(t,e,n){n.d(e,{z:function(){return i}});var r=n(57905);function i(t){return r.K.getOrCreate(t).withPrefix("fluent")}},45597:function(t,e,n){n.d(e,{O8:function(){return p},Xu:function(){return h},cg:function(){return g},jQ:function(){return d},vN:function(){return c},vt:function(){return f}});var r=n(53046),i=n(67020),o=n(56201),a=n(40082),s=n(87839),u=n(2658),l=n(32804);const c=(t,e)=>r.i`
        ${(0,i.j)("inline-flex")} :host {
            font-family: ${l.SVJ};
            outline: none;
            font-size: ${l.cSu};
            line-height: ${l.RUt};
            height: calc(${u.i} * 1px);
            min-width: calc(${u.i} * 1px);
            background-color: ${l.wFS};
            color: ${l.CHi};
            border-radius: calc(${l.UWU} * 1px);
            fill: currentcolor;
            cursor: pointer;
        }

        .control {
            background: transparent;
            height: inherit;
            flex-grow: 1;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0 calc((10 + (${l._5n} * 2 * ${l.hVk})) * 1px);
            white-space: nowrap;
            outline: none;
            text-decoration: none;
            border: calc(${l.Han} * 1px) solid transparent;
            color: inherit;
            border-radius: inherit;
            fill: inherit;
            cursor: inherit;
            font-family: inherit;
        }

        .control,
        .end,
        .start {
            font: inherit;
        }

        .control.icon-only {
            padding: 0;
            line-height: 0;
        }

        :host(:hover) {
            background-color: ${l.XiB};
        }

        :host(:active) {
            background-color: ${l.Gy2};
        }

        ${""}
        .control:${o.b} {
            border: calc(${l.Han} * 1px) solid ${l.yGg};
            box-shadow: 0 0 0 calc((${l.vxp} - ${l.Han}) * 1px)
                ${l.yGg};
        }

        .control::-moz-focus-inner {
            border: 0;
        }

        .content {
            pointer-events: none;
        }

        .start,
        .end {
            display: flex;
            pointer-events: none;
        }

        ::slotted(svg) {
            ${""} width: 16px;
            height: 16px;
            pointer-events: none;
        }

        .start {
            margin-inline-end: 11px;
        }

        .end {
            margin-inline-start: 11px;
        }
    `.withBehaviors((0,a.vF)(r.i`
        :host,
        :host([appearance="neutral"]) .control {
          background-color: ${s.H.ButtonFace};
          border-color: ${s.H.ButtonText};
          color: ${s.H.ButtonText};
          fill: currentcolor;
        }

        :host(:not([disabled][href]):hover),
        :host([appearance="neutral"]:not([disabled]):hover) .control {
          forced-color-adjust: none;
          background-color: ${s.H.Highlight};
          color: ${s.H.HighlightText};
        }

        .control:${o.b},
        :host([appearance="outline"]) .control:${o.b},
        :host([appearance="neutral"]:${o.b}) .control {
          forced-color-adjust: none;
          background-color: ${s.H.Highlight};
          border-color: ${s.H.ButtonText};
          box-shadow: 0 0 0 calc((${l.vxp} - ${l.Han}) * 1px) ${s.H.ButtonText};
          color: ${s.H.HighlightText};
        }

        .control:not([disabled]):hover,
        :host([appearance="outline"]) .control:hover {
          border-color: ${s.H.ButtonText};
        }

        :host([href]) .control {
          border-color: ${s.H.LinkText};
          color: ${s.H.LinkText};
        }

        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover,
        :host(.outline[href]) .control:hover,
        :host([href]) .control:${o.b}{
          forced-color-adjust: none;
          background: ${s.H.ButtonFace};
          border-color: ${s.H.LinkText};
          box-shadow: 0 0 0 1px ${s.H.LinkText} inset;
          color: ${s.H.LinkText};
          fill: currentcolor;
        }
    `)),d=r.i`
    :host([appearance="accent"]) {
        background: ${l.Avx};
        color: ${l.w41};
    }

    :host([appearance="accent"]:hover) {
        background: ${l.OCG};
        color: ${l.lJV};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${l.UEO};
        color: ${l.PpH};
    }

    :host([appearance="accent"]) .control:${o.b} {
        box-shadow: 0 0 0 calc(${l.vxp} * 1px) inset ${l.a2F},
            0 0 0 calc((${l.vxp} - ${l.Han}) * 1px) ${l.yGg};
    }
`.withBehaviors((0,a.vF)(r.i`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${s.H.Highlight};
                color: ${s.H.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${s.H.HighlightText};
                border-color: ${s.H.Highlight};
                color: ${s.H.Highlight};
            }

            :host([appearance="accent"]) .control:${o.b} {
                border-color: ${s.H.ButtonText};
                box-shadow: 0 0 0 2px ${s.H.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control {
                background: ${s.H.LinkText};
                color: ${s.H.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${s.H.ButtonFace};
                border-color: ${s.H.LinkText};
                box-shadow: none;
                color: ${s.H.LinkText};
                fill: currentcolor;
            }

            :host([appearance="accent"][href]) .control:${o.b} {
                border-color: ${s.H.LinkText};
                box-shadow: 0 0 0 2px ${s.H.HighlightText} inset;
            }
        `)),h=r.i`
    :host([appearance="hypertext"]) {
        height: auto;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        min-width: 0;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }
    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${l.goi};
        border-bottom: calc(${l.Han} * 1px) solid ${l.goi};
    }
    :host([appearance="hypertext"]) .control:hover {
        border-bottom-color: ${l.D9J};
    }
    :host([appearance="hypertext"]) .control:active {
        border-bottom-color: ${l.VNr};
    }
    :host([appearance="hypertext"]) .control:${o.b} {
        border-bottom: calc(${l.vxp} * 1px) solid ${l.yGg};
        margin-bottom: calc(calc(${l.Han} - ${l.vxp}) * 1px);
    }
`.withBehaviors((0,a.vF)(r.i`
            :host([appearance="hypertext"]) .control:${o.b} {
                color: ${s.H.LinkText};
                border-bottom-color: ${s.H.LinkText};
            }
        `)),f=r.i`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${l.goi};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        color: ${l.D9J};
    }

    :host([appearance="lightweight"]:active) {
        color: ${l.VNr};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${l.Han} * 1px);
        position: absolute;
        top: calc(1em + 3px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${l.D9J};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${l.VNr};
    }

    :host([appearance="lightweight"]) .control:${o.b} .content::before {
        background: ${l.CHi};
        height: calc(${l.vxp} * 1px);
    }
`.withBehaviors((0,a.vF)(r.i`
            :host([appearance="lightweight"]) {
                color: ${s.H.ButtonText};
            }
            :host([appearance="lightweight"]) .control:hover,
        :host([appearance="lightweight"]) .control:${o.b} {
                forced-color-adjust: none;
                background: ${s.H.ButtonFace};
                color: ${s.H.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
        :host([appearance="lightweight"]) .control:${o.b} .content::before {
                background: ${s.H.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
        :host([appearance="lightweight"][href]) .control:${o.b} {
                background: ${s.H.ButtonFace};
                box-shadow: none;
                color: ${s.H.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
        :host([appearance="lightweight"][href]) .control:${o.b} .content::before {
                background: ${s.H.LinkText};
            }
        `)),p=r.i`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${l.akT};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${l.QPc};
    }

    :host([appearance="outline"]:active) {
        border-color: ${l.c1L};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${o.b} {
        box-shadow: 0 0 0 calc((${l.vxp} - ${l.Han}) * 1px)
            ${l.yGg};
        border-color: ${l.yGg};
    }
`.withBehaviors((0,a.vF)(r.i`
            :host([appearance="outline"]) {
                border-color: ${s.H.ButtonText};
            }
            :host([appearance="outline"][href]) {
                border-color: ${s.H.LinkText};
            }
        `)),g=r.i`
    :host([appearance="stealth"]) {
        background: ${l.jql};
    }

    :host([appearance="stealth"]:hover) {
        background: ${l.QpD};
    }

    :host([appearance="stealth"]:active) {
        background: ${l.sG3};
    }
`.withBehaviors((0,a.vF)(r.i`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${s.H.ButtonFace};
                border-color: transparent;
                color: ${s.H.ButtonText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${s.H.Highlight};
                border-color: ${s.H.Highlight};
                color: ${s.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:${o.b}) .control {
                background: ${s.H.Highlight};
                box-shadow: 0 0 0 1px ${s.H.Highlight};
                color: ${s.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${s.H.LinkText};
            }

            :host([appearance="stealth"]:hover[href]) .control,
        :host([appearance="stealth"]:${o.b}[href]) .control {
                background: ${s.H.LinkText};
                border-color: ${s.H.LinkText};
                color: ${s.H.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:${o.b}[href]) .control {
                box-shadow: 0 0 0 1px ${s.H.LinkText};
            }
        `))},82636:function(t,e,n){n.d(e,{H:function(){return i}});var r=n(81493);function i(t,e){return new r.w("appearance",t,e)}},32804:function(t,e,n){n.d(e,{UEO:function(){return Yt},Woc:function(){return Y},D8M:function(){return Qt},v$0:function(){return Q},OCG:function(){return Jt},B23:function(){return J},Avx:function(){return Gt},N7s:function(){return G},VNr:function(){return ce},kb6:function(){return et},QOc:function(){return Cn},ndN:function(){return nt},D9J:function(){return le},L8d:function(){return tt},goi:function(){return ue},kpA:function(){return X},au1:function(){return Lt},nfe:function(){return x},LQ3:function(){return C},q2d:function(){return K},SVJ:function(){return _},kcg:function(){return yn},UWU:function(){return F},hVk:function(){return S},_5n:function(){return k},o7V:function(){return y},VFZ:function(){return w},IfY:function(){return Ut},DbC:function(){return xn},a2F:function(){return Ke},yGg:function(){return Ue},vxp:function(){return O},PpH:function(){return re},$uW:function(){return ie},lJV:function(){return ne},w41:function(){return ee},rSr:function(){return D},eNK:function(){return Sn},Gy2:function(){return pe},hDF:function(){return ot},VNB:function(){return ge},VQw:function(){return at},XiB:function(){return fe},jWw:function(){return it},Ium:function(){return ye},q_p:function(){return lt},bWE:function(){return un},W3V:function(){return ln},vFq:function(){return sn},pB6:function(){return an},Zbo:function(){return ct},Tm7:function(){return be},EL3:function(){return ut},_Bj:function(){return me},efx:function(){return st},Of1:function(){return Ce},_Rw:function(){return we},Eo8:function(){return xe},abR:function(){return Se},RJY:function(){return ke},YL4:function(){return gt},Ats:function(){return de},wFS:function(){return he},MYN:function(){return rt},_ii:function(){return mn},d$x:function(){return vn},_jX:function(){return gn},sG3:function(){return Oe},gs2:function(){return bt},IU$:function(){return yt},QpD:function(){return $e},fqe:function(){return mt},DFW:function(){return Fe},jql:function(){return De},qDs:function(){return vt},Vt5:function(){return Ct},NzX:function(){return Ie},UCF:function(){return St},Dgm:function(){return Pe},sc1:function(){return xt},P0N:function(){return Te},F7z:function(){return kn},Q5n:function(){return Qe},axZ:function(){return Ye},CHi:function(){return Je},y9A:function(){return Et},rF2:function(){return Mt},hZd:function(){return zt},spb:function(){return Zt},$Bw:function(){return jt},s55:function(){return Nt},L$c:function(){return Fn},yvm:function(){return It},c1L:function(){return Be},IMz:function(){return Dt},dtw:function(){return Ee},hD7:function(){return Ot},V0Z:function(){return Ne},Bxy:function(){return $t},QPc:function(){return je},rnN:function(){return Ft},akT:function(){return Ae},fd1:function(){return kt},ekh:function(){return ze},nDv:function(){return qe},gKw:function(){return He},rU8:function(){return Me},bu0:function(){return wn},lr:function(){return bn},Han:function(){return $},cSu:function(){return T},RUt:function(){return P},sNp:function(){return I},vgC:function(){return L},G8g:function(){return A},MwG:function(){return j},PwC:function(){return B},b3W:function(){return N},mWK:function(){return V},I7_:function(){return E},ipv:function(){return R},yGZ:function(){return M},IWd:function(){return H},iL4:function(){return z},CXZ:function(){return q},n5T:function(){return Z},Zaf:function(){return U},yDy:function(){return W}});var r=n(98648),i=n(26007),o=n(58768);var a=n(64087);var s=n(11162),u=n(42355);const l=u.w.create(1,1,1),c=u.w.create(0,0,0),d=u.w.create(.5,.5,.5),h=(0,s.in)("#0078D4"),f=u.w.create(h.r,h.g,h.b);var p=n(82917),g=n(78125);function v(t,e,n,r,i,o){return Math.max(t.closestIndexOf((0,g.C)(e))+n,r,i,o)}var m=n(33978);const{create:b}=r.L,y=b("direction").withDefault(i.N.ltr),w=b("disabled-opacity").withDefault(.3),x=b("base-height-multiplier").withDefault(8),C=b("base-horizontal-spacing-multiplier").withDefault(3),S=b("density").withDefault(0),k=b("design-unit").withDefault(4),F=b("control-corner-radius").withDefault(4),D=b("layer-corner-radius").withDefault(4),$=b("stroke-width").withDefault(1),O=b("focus-stroke-width").withDefault(2),_=b("body-font").withDefault("Segoe UI, sans-serif"),T=b("type-ramp-base-font-size").withDefault("14px"),P=b("type-ramp-base-line-height").withDefault("20px"),I=b("type-ramp-minus-1-font-size").withDefault("12px"),L=b("type-ramp-minus-1-line-height").withDefault("16px"),A=b("type-ramp-minus-2-font-size").withDefault("10px"),j=b("type-ramp-minus-2-line-height").withDefault("14px"),B=b("type-ramp-plus-1-font-size").withDefault("16px"),N=b("type-ramp-plus-1-line-height").withDefault("22px"),V=b("type-ramp-plus-2-font-size").withDefault("20px"),E=b("type-ramp-plus-2-line-height").withDefault("28px"),R=b("type-ramp-plus-3-font-size").withDefault("24px"),M=b("type-ramp-plus-3-line-height").withDefault("32px"),H=b("type-ramp-plus-4-font-size").withDefault("28px"),z=b("type-ramp-plus-4-line-height").withDefault("36px"),q=b("type-ramp-plus-5-font-size").withDefault("32px"),Z=b("type-ramp-plus-5-line-height").withDefault("40px"),U=b("type-ramp-plus-6-font-size").withDefault("40px"),W=b("type-ramp-plus-6-line-height").withDefault("52px"),K=b("base-layer-luminance").withDefault(g.h.LightMode),G=b("accent-fill-rest-delta").withDefault(0),J=b("accent-fill-hover-delta").withDefault(4),Y=b("accent-fill-active-delta").withDefault(-5),Q=b("accent-fill-focus-delta").withDefault(0),X=b("accent-foreground-rest-delta").withDefault(0),tt=b("accent-foreground-hover-delta").withDefault(6),et=b("accent-foreground-active-delta").withDefault(-4),nt=b("accent-foreground-focus-delta").withDefault(0),rt=b("neutral-fill-rest-delta").withDefault(7),it=b("neutral-fill-hover-delta").withDefault(10),ot=b("neutral-fill-active-delta").withDefault(5),at=b("neutral-fill-focus-delta").withDefault(0),st=b("neutral-fill-input-rest-delta").withDefault(0),ut=b("neutral-fill-input-hover-delta").withDefault(0),lt=b("neutral-fill-input-active-delta").withDefault(0),ct=b("neutral-fill-input-focus-delta").withDefault(0),dt=b("neutral-fill-inverse-rest-delta").withDefault(0),ht=b("neutral-fill-inverse-hover-delta").withDefault(-3),ft=b("neutral-fill-inverse-active-delta").withDefault(7),pt=b("neutral-fill-inverse-focus-delta").withDefault(0),gt=b("neutral-fill-layer-rest-delta").withDefault(3),vt=b("neutral-fill-stealth-rest-delta").withDefault(0),mt=b("neutral-fill-stealth-hover-delta").withDefault(5),bt=b("neutral-fill-stealth-active-delta").withDefault(3),yt=b("neutral-fill-stealth-focus-delta").withDefault(0),wt=b("neutral-fill-strong-rest-delta").withDefault(0),xt=b("neutral-fill-strong-hover-delta").withDefault(8),Ct=b("neutral-fill-strong-active-delta").withDefault(-5),St=b("neutral-fill-strong-focus-delta").withDefault(0),kt=b("neutral-stroke-rest-delta").withDefault(25),Ft=b("neutral-stroke-hover-delta").withDefault(40),Dt=b("neutral-stroke-active-delta").withDefault(16),$t=b("neutral-stroke-focus-delta").withDefault(25),Ot=b("neutral-stroke-divider-rest-delta").withDefault(8),_t=b("neutral-stroke-strong-hover-delta").withDefault(40),Tt=b("neutral-stroke-strong-active-delta").withDefault(16),Pt=b("neutral-stroke-strong-focus-delta").withDefault(25),It=b({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(o.v.create(d)),Lt=b({name:"accent-palette",cssCustomPropertyName:null}).withDefault(o.v.create(f)),At=b({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n){const r=(0,p.uZ)(t.closestIndexOf((0,g.C)(e))-n,0,t.swatches.length-1);return t.get(r+n)}(It.getValueFor(t),K.getValueFor(t),gt.getValueFor(t))}),jt=b("neutral-layer-card-container").withDefault((t=>At.getValueFor(t).evaluate(t))),Bt=b({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n){const r=t.closestIndexOf((0,g.C)(e))-n;return t.get(r-n)}(It.getValueFor(t),K.getValueFor(t),gt.getValueFor(t))}),Nt=b("neutral-layer-floating").withDefault((t=>Bt.getValueFor(t).evaluate(t))),Vt=b({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.get(t.closestIndexOf((0,g.C)(e)))}(It.getValueFor(t),K.getValueFor(t))}),Et=b("neutral-layer-1").withDefault((t=>Vt.getValueFor(t).evaluate(t))),Rt=b({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n,r,i,o){return t.get(v(t,e,n,r,i,o))}(It.getValueFor(t),K.getValueFor(t),gt.getValueFor(t),rt.getValueFor(t),it.getValueFor(t),ot.getValueFor(t))}),Mt=b("neutral-layer-2").withDefault((t=>Rt.getValueFor(t).evaluate(t))),Ht=b({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n,r,i,o){return t.get(v(t,e,n,r,i,o)+n)}(It.getValueFor(t),K.getValueFor(t),gt.getValueFor(t),rt.getValueFor(t),it.getValueFor(t),ot.getValueFor(t))}),zt=b("neutral-layer-3").withDefault((t=>Ht.getValueFor(t).evaluate(t))),qt=b({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n,r,i,o){return t.get(v(t,e,n,r,i,o)+2*n)}(It.getValueFor(t),K.getValueFor(t),gt.getValueFor(t),rt.getValueFor(t),it.getValueFor(t),ot.getValueFor(t))}),Zt=b("neutral-layer-4").withDefault((t=>qt.getValueFor(t).evaluate(t))),Ut=b("fill-color").withDefault((t=>Et.getValueFor(t)));var Wt;!function(t){t[t.normal=4.5]="normal",t[t.large=7]="large"}(Wt||(Wt={}));const Kt=b({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>(Wt.normal,(t,e)=>function(t,e,n,r,i,o,a,s,u){const l=t.source,c=t.closestIndexOf(l),d=c+1*r,h=c+1*i,f=c+1*o;return{rest:t.get(c),hover:t.get(d),active:t.get(h),focus:t.get(f)}}(Lt.getValueFor(t),It.getValueFor(t),e||Ut.getValueFor(t),J.getValueFor(t),Y.getValueFor(t),Q.getValueFor(t),rt.getValueFor(t),it.getValueFor(t),ot.getValueFor(t)))(t,e)}),Gt=b("accent-fill-rest").withDefault((t=>Kt.getValueFor(t).evaluate(t).rest)),Jt=b("accent-fill-hover").withDefault((t=>Kt.getValueFor(t).evaluate(t).hover)),Yt=b("accent-fill-active").withDefault((t=>Kt.getValueFor(t).evaluate(t).active)),Qt=b("accent-fill-focus").withDefault((t=>Kt.getValueFor(t).evaluate(t).focus)),Xt=t=>(e,n)=>function(t,e){return t.contrast(l)>=e?l:c}(n||Gt.getValueFor(e),t),te=b({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Xt(Wt.normal)(t,e)}),ee=b("foreground-on-accent-rest").withDefault((t=>te.getValueFor(t).evaluate(t,Gt.getValueFor(t)))),ne=b("foreground-on-accent-hover").withDefault((t=>te.getValueFor(t).evaluate(t,Jt.getValueFor(t)))),re=b("foreground-on-accent-active").withDefault((t=>te.getValueFor(t).evaluate(t,Yt.getValueFor(t)))),ie=b("foreground-on-accent-focus").withDefault((t=>te.getValueFor(t).evaluate(t,Qt.getValueFor(t)))),oe=b({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>Xt(Wt.large)(t,e)}),ae=(b("foreground-on-accent-rest-large").withDefault((t=>oe.getValueFor(t).evaluate(t))),b("foreground-on-accent-hover-large").withDefault((t=>oe.getValueFor(t).evaluate(t,Jt.getValueFor(t)))),b("foreground-on-accent-active-large").withDefault((t=>oe.getValueFor(t).evaluate(t,Yt.getValueFor(t)))),b("foreground-on-accent-focus-large").withDefault((t=>oe.getValueFor(t).evaluate(t,Qt.getValueFor(t)))),t=>(e,n)=>function(t,e,n,r,i,o,s){const u=t.source,l=t.closestIndexOf(u),c=(0,a.a)(e),d=l+(1===c?Math.min(r,i):Math.max(c*r,c*i)),h=t.colorContrast(e,n,d,c),f=t.closestIndexOf(h),p=f+c*Math.abs(r-i);let g,v;return(1===c?r<i:c*r>c*i)?(g=f,v=p):(g=p,v=f),{rest:t.get(g),hover:t.get(v),active:t.get(g+c*o),focus:t.get(g+c*s)}}(Lt.getValueFor(e),n||Ut.getValueFor(e),t,X.getValueFor(e),tt.getValueFor(e),et.getValueFor(e),nt.getValueFor(e))),se=b({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>ae(Wt.normal)(t,e)}),ue=b("accent-foreground-rest").withDefault((t=>se.getValueFor(t).evaluate(t).rest)),le=b("accent-foreground-hover").withDefault((t=>se.getValueFor(t).evaluate(t).hover)),ce=b("accent-foreground-active").withDefault((t=>se.getValueFor(t).evaluate(t).active)),de=(b("accent-foreground-focus").withDefault((t=>se.getValueFor(t).evaluate(t).focus)),b({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,r,i,o){const a=t.closestIndexOf(e),s=a>=Math.max(n,r,i,o)?-1:1;return{rest:t.get(a+s*n),hover:t.get(a+s*r),active:t.get(a+s*i),focus:t.get(a+s*o)}}(It.getValueFor(t),e||Ut.getValueFor(t),rt.getValueFor(t),it.getValueFor(t),ot.getValueFor(t),at.getValueFor(t))})),he=b("neutral-fill-rest").withDefault((t=>de.getValueFor(t).evaluate(t).rest)),fe=b("neutral-fill-hover").withDefault((t=>de.getValueFor(t).evaluate(t).hover)),pe=b("neutral-fill-active").withDefault((t=>de.getValueFor(t).evaluate(t).active)),ge=b("neutral-fill-focus").withDefault((t=>de.getValueFor(t).evaluate(t).focus)),ve=b({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,r,i,o){const s=(0,a.a)(e),u=t.closestIndexOf(e);return{rest:t.get(u-s*n),hover:t.get(u-s*r),active:t.get(u-s*i),focus:t.get(u-s*o)}}(It.getValueFor(t),e||Ut.getValueFor(t),st.getValueFor(t),ut.getValueFor(t),lt.getValueFor(t),ct.getValueFor(t))}),me=b("neutral-fill-input-rest").withDefault((t=>ve.getValueFor(t).evaluate(t).rest)),be=b("neutral-fill-input-hover").withDefault((t=>ve.getValueFor(t).evaluate(t).hover)),ye=(b("neutral-fill-input-focus").withDefault((t=>ve.getValueFor(t).evaluate(t).focus)),b("neutral-fill-input-active").withDefault((t=>ve.getValueFor(t).evaluate(t).active))),we=b({name:"neutral-fill-inverse-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,r,i,o){const s=(0,a.a)(e),u=t.closestIndexOf(t.colorContrast(e,14)),l=u+s*Math.abs(n-r);let c,d;return(1===s?n<r:s*n>s*r)?(c=u,d=l):(c=l,d=u),{rest:t.get(c),hover:t.get(d),active:t.get(c+s*i),focus:t.get(c+s*o)}}(It.getValueFor(t),e||Ut.getValueFor(t),dt.getValueFor(t),ht.getValueFor(t),ft.getValueFor(t),pt.getValueFor(t))}),xe=b("neutral-fill-inverse-rest").withDefault((t=>we.getValueFor(t).evaluate(t).rest)),Ce=(b("neutral-fill-inverse-hover").withDefault((t=>we.getValueFor(t).evaluate(t).hover)),b("neutral-fill-inverse-active").withDefault((t=>we.getValueFor(t).evaluate(t).active))),Se=(b("neutral-fill-inverse-focus").withDefault((t=>we.getValueFor(t).evaluate(t).focus)),b({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n){const r=t.closestIndexOf(e);return t.get(r-n)}(It.getValueFor(t),e||Ut.getValueFor(t),gt.getValueFor(t))})),ke=b("neutral-fill-layer-rest").withDefault((t=>Se.getValueFor(t).evaluate(t))),Fe=b({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,r,i,o,a,s,u,l){const c=Math.max(n,r,i,o,a,s,u,l),d=t.closestIndexOf(e),h=d>=c?-1:1;return{rest:t.get(d+h*n),hover:t.get(d+h*r),active:t.get(d+h*i),focus:t.get(d+h*o)}}(It.getValueFor(t),e||Ut.getValueFor(t),vt.getValueFor(t),mt.getValueFor(t),bt.getValueFor(t),yt.getValueFor(t),rt.getValueFor(t),it.getValueFor(t),ot.getValueFor(t),at.getValueFor(t))}),De=b("neutral-fill-stealth-rest").withDefault((t=>Fe.getValueFor(t).evaluate(t).rest)),$e=b("neutral-fill-stealth-hover").withDefault((t=>Fe.getValueFor(t).evaluate(t).hover)),Oe=b("neutral-fill-stealth-active").withDefault((t=>Fe.getValueFor(t).evaluate(t).active)),_e=(b("neutral-fill-stealth-focus").withDefault((t=>Fe.getValueFor(t).evaluate(t).focus)),b({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n,r,i,o){const s=(0,a.a)(e),u=t.closestIndexOf(t.colorContrast(e,4.5)),l=u+s*Math.abs(n-r);let c,d;return(1===s?n<r:s*n>s*r)?(c=u,d=l):(c=l,d=u),{rest:t.get(c),hover:t.get(d),active:t.get(c+s*i),focus:t.get(c+s*o)}}(It.getValueFor(t),e||Ut.getValueFor(t),wt.getValueFor(t),xt.getValueFor(t),Ct.getValueFor(t),St.getValueFor(t))})),Te=b("neutral-fill-strong-rest").withDefault((t=>_e.getValueFor(t).evaluate(t).rest)),Pe=b("neutral-fill-strong-hover").withDefault((t=>_e.getValueFor(t).evaluate(t).hover)),Ie=(b("neutral-fill-strong-active").withDefault((t=>_e.getValueFor(t).evaluate(t).active)),b("neutral-fill-strong-focus").withDefault((t=>_e.getValueFor(t).evaluate(t).focus))),Le=b({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n,r,i,o){const s=t.closestIndexOf(e),u=(0,a.a)(e),l=s+u*n,c=l+u*(r-n),d=l+u*(i-n),h=l+u*(o-n);return{rest:t.get(l),hover:t.get(c),active:t.get(d),focus:t.get(h)}}(It.getValueFor(t),Ut.getValueFor(t),kt.getValueFor(t),Ft.getValueFor(t),Dt.getValueFor(t),$t.getValueFor(t))}),Ae=b("neutral-stroke-rest").withDefault((t=>Le.getValueFor(t).evaluate(t).rest)),je=b("neutral-stroke-hover").withDefault((t=>Le.getValueFor(t).evaluate(t).hover)),Be=b("neutral-stroke-active").withDefault((t=>Le.getValueFor(t).evaluate(t).active)),Ne=b("neutral-stroke-focus").withDefault((t=>Le.getValueFor(t).evaluate(t).focus)),Ve=b({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(t,e)=>function(t,e,n){return t.get(t.closestIndexOf(e)+(0,a.a)(e)*n)}(It.getValueFor(t),e||Ut.getValueFor(t),Ot.getValueFor(t))}),Ee=b("neutral-stroke-divider-rest").withDefault((t=>Ve.getValueFor(t).evaluate(t))),Re=b({name:"neutral-stroke-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n,r,i,o){const s=(0,a.a)(e),u=t.colorContrast(e,n),l=t.closestIndexOf(u);return{rest:u,hover:t.get(l+s*r),active:t.get(l+s*i),focus:t.get(l+s*o)}}(It.getValueFor(t),Ut.getValueFor(t),3,_t.getValueFor(t),Tt.getValueFor(t),Pt.getValueFor(t))}),Me=b("neutral-stroke-strong-rest").withDefault((t=>Re.getValueFor(t).evaluate(t).rest)),He=b("neutral-stroke-strong-hover").withDefault((t=>Re.getValueFor(t).evaluate(t).hover)),ze=b("neutral-stroke-strong-active").withDefault((t=>Re.getValueFor(t).evaluate(t).active)),qe=b("neutral-stroke-strong-focus").withDefault((t=>Re.getValueFor(t).evaluate(t).focus)),Ze=b({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.colorContrast(e,3.5)}(It.getValueFor(t),Ut.getValueFor(t))}),Ue=b("focus-stroke-outer").withDefault((t=>Ze.getValueFor(t).evaluate(t))),We=b({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e,n){return t.colorContrast(n,3.5,t.closestIndexOf(t.source),-1*(0,a.a)(e))}(Lt.getValueFor(t),Ut.getValueFor(t),Ue.getValueFor(t))}),Ke=b("focus-stroke-inner").withDefault((t=>We.getValueFor(t).evaluate(t))),Ge=b({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.colorContrast(e,14)}(It.getValueFor(t),Ut.getValueFor(t))}),Je=b("neutral-foreground-rest").withDefault((t=>Ge.getValueFor(t).evaluate(t))),Ye=b({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:t=>function(t,e){return t.colorContrast(e,4.5)}(It.getValueFor(t),Ut.getValueFor(t))}),Qe=b("neutral-foreground-hint").withDefault((t=>Ye.getValueFor(t).evaluate(t)));function Xe(t){return r.L.create({name:t,cssCustomPropertyName:null})}const tn=Xe("neutral-fill-input-alt-rest-delta").withDefault(2),en=Xe("neutral-fill-input-alt-hover-delta").withDefault(4),nn=Xe("neutral-fill-input-alt-active-delta").withDefault(6),rn=Xe("neutral-fill-input-alt-focus-delta").withDefault(2),on=Xe("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>{const n=e||Ut.getValueFor(t),r=tn.getValueFor(t),i=en.getValueFor(t),o=nn.getValueFor(t),a=rn.getValueFor(t),s=It.getValueFor(t);return(0,m.P)(s,n,r,i,o,a,1,r,r-i,r-o,a,1)}}),an=b("neutral-fill-input-alt-rest").withDefault((t=>on.getValueFor(t).evaluate(t).rest)),sn=b("neutral-fill-input-alt-hover").withDefault((t=>on.getValueFor(t).evaluate(t).hover)),un=b("neutral-fill-input-alt-active").withDefault((t=>on.getValueFor(t).evaluate(t).active)),ln=b("neutral-fill-input-alt-focus").withDefault((t=>on.getValueFor(t).evaluate(t).focus)),cn=Xe("neutral-fill-secondary-rest-delta").withDefault(3),dn=Xe("neutral-fill-secondary-hover-delta").withDefault(2),hn=Xe("neutral-fill-secondary-active-delta").withDefault(1),fn=Xe("neutral-fill-secondary-focus-delta").withDefault(3),pn=Xe("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>(0,m.w)(It.getValueFor(t),e||Ut.getValueFor(t),cn.getValueFor(t),dn.getValueFor(t),hn.getValueFor(t),fn.getValueFor(t))}),gn=b("neutral-fill-secondary-rest").withDefault((t=>pn.getValueFor(t).evaluate(t).rest)),vn=b("neutral-fill-secondary-hover").withDefault((t=>pn.getValueFor(t).evaluate(t).hover)),mn=b("neutral-fill-secondary-active").withDefault((t=>pn.getValueFor(t).evaluate(t).active)),bn=(b("neutral-fill-secondary-focus").withDefault((t=>pn.getValueFor(t).evaluate(t).focus)),r.L.create("sloppy-click-z-index").withDefault(1)),yn=r.L.create("click-z-index").withDefault(1),wn=$,xn=O,Cn=ee,Sn=Ee,kn=Ue,Fn=Ae},22674:function(t,e,n){n.d(e,{O:function(){return i}});var r=n(32804);class i{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&r.o7V.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new o(this.ltr,this.rtl,t),n=r.o7V.getValueFor(t);r.o7V.subscribe(e),e.attach(n),this.cache.set(t,e)}}class o{constructor(t,e,n){this.ltr=t,this.rtl=e,this.source=n,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(t))}attach(t){this.attached!==this[t]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},62734:function(t,e,n){n.d(e,{XC:function(){return r}});const r="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"},2658:function(t,e,n){n.d(e,{i:function(){return o}});var r=n(53046),i=n(32804);const o=r.j`(${i.nfe} + ${i.hVk}) * ${i._5n}`},87839:function(t,e,n){var r;n.d(e,{H:function(){return r}}),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(r||(r={}))},60279:function(t,e,n){n.d(e,{$2:function(){return C},DR:function(){return x},KW:function(){return S},T8:function(){return v},hM:function(){return d},hP:function(){return g},iI:function(){return m},lw:function(){return p},rD:function(){return y},rp:function(){return c},v1:function(){return w},wo:function(){return f},zP:function(){return b}});var r=n(9366),i=n(38316),o=n(447),a=n(83343),s=n(2696),u=n(40272),l=n(82917);function c(t){return.2126*t.r+.7152*t.g+.0722*t.b}function d(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return c(new s.h(e(t.r),e(t.g),e(t.b),1))}const h=(t,e)=>(t+.05)/(e+.05);function f(t,e){const n=d(t),r=d(e);return n>r?h(n,r):h(r,n)}function p(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(t.r,t.g,t.b),i=e-n;let o=0;0!==i&&(o=e===t.r?(t.g-t.b)/i%6*60:e===t.g?60*((t.b-t.r)/i+2):60*((t.r-t.g)/i+4)),o<0&&(o+=360);const a=(e+n)/2;let s=0;return 0!==i&&(s=i/(1-Math.abs(2*a-1))),new r.H(o,s,a)}function g(t,e=1){const n=(1-Math.abs(2*t.l-1))*t.s,r=n*(1-Math.abs(t.h/60%2-1)),i=t.l-n/2;let o=0,a=0,u=0;return t.h<60?(o=n,a=r,u=0):t.h<120?(o=r,a=n,u=0):t.h<180?(o=0,a=n,u=r):t.h<240?(o=0,a=r,u=n):t.h<300?(o=r,a=0,u=n):t.h<360&&(o=n,a=0,u=r),new s.h(o+i,a+i,u+i,e)}function v(t){const e=Math.max(t.r,t.g,t.b),n=e-Math.min(t.r,t.g,t.b);let r=0;0!==n&&(r=e===t.r?(t.g-t.b)/n%6*60:e===t.g?60*((t.b-t.r)/n+2):60*((t.r-t.g)/n+4)),r<0&&(r+=360);let o=0;return 0!==e&&(o=n/e),new i.T(r,o,e)}function m(t,e=1){const n=t.s*t.v,r=n*(1-Math.abs(t.h/60%2-1)),i=t.v-n;let o=0,a=0,u=0;return t.h<60?(o=n,a=r,u=0):t.h<120?(o=r,a=n,u=0):t.h<180?(o=0,a=n,u=r):t.h<240?(o=0,a=r,u=n):t.h<300?(o=r,a=0,u=n):t.h<360&&(o=n,a=0,u=r),new s.h(o+i,a+i,u+i,e)}function b(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const n=e(t.r),r=e(t.g),i=e(t.b),o=.4124564*n+.3575761*r+.1804375*i,a=.2126729*n+.7151522*r+.072175*i,s=.0193339*n+.119192*r+.9503041*i;return new u.x(o,a,s)}function y(t,e=1){function n(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const r=n(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),i=n(-.969266*t.x+1.8760108*t.y+.041556*t.z),o=n(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new s.h(r,i,o,e)}function w(t){return function(t){function e(t){return t>o.R.epsilon?Math.pow(t,1/3):(o.R.kappa*t+16)/116}const n=e(t.x/u.x.whitePoint.x),r=e(t.y/u.x.whitePoint.y),i=116*r-16,a=500*(n-r),s=200*(r-e(t.z/u.x.whitePoint.z));return new o.R(i,a,s)}(b(t))}function x(t,e=1){return y(function(t){const e=(t.l+16)/116,n=e+t.a/500,r=e-t.b/200,i=Math.pow(n,3),a=Math.pow(e,3),s=Math.pow(r,3);let l=0;l=i>o.R.epsilon?i:(116*n-16)/o.R.kappa;let c=0;c=t.l>o.R.epsilon*o.R.kappa?a:t.l/o.R.kappa;let d=0;return d=s>o.R.epsilon?s:(116*r-16)/o.R.kappa,l=u.x.whitePoint.x*l,c=u.x.whitePoint.y*c,d=u.x.whitePoint.z*d,new u.x(l,c,d)}(t),e)}function C(t){return function(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=(0,l.vi)(Math.atan2(t.b,t.a))),e<0&&(e+=360);const n=Math.sqrt(t.a*t.a+t.b*t.b);return new a.t(t.l,n,e)}(w(t))}function S(t,e=1){return x(function(t){let e=0,n=0;return 0!==t.h&&(e=Math.cos((0,l.Ht)(t.h))*t.c,n=Math.sin((0,l.Ht)(t.h))*t.c),new o.R(t.l,e,n)}(t),e)}},9366:function(t,e,n){n.d(e,{H:function(){return i}});var r=n(82917);class i{constructor(t,e,n){this.h=t,this.s=e,this.l=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new i(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new i((0,r.fZ)(this.h,t),(0,r.fZ)(this.s,t),(0,r.fZ)(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}},38316:function(t,e,n){n.d(e,{T:function(){return i}});var r=n(82917);class i{constructor(t,e,n){this.h=t,this.s=e,this.v=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new i(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new i((0,r.fZ)(this.h,t),(0,r.fZ)(this.s,t),(0,r.fZ)(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}},447:function(t,e,n){n.d(e,{R:function(){return i}});var r=n(82917);class i{constructor(t,e,n){this.l=t,this.a=e,this.b=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new i(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new i((0,r.fZ)(this.l,t),(0,r.fZ)(this.a,t),(0,r.fZ)(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}i.epsilon=216/24389,i.kappa=24389/27},83343:function(t,e,n){n.d(e,{t:function(){return i}});var r=n(82917);class i{constructor(t,e,n){this.l=t,this.c=e,this.h=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new i(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new i((0,r.fZ)(this.l,t),(0,r.fZ)(this.c,t),(0,r.fZ)(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}},2696:function(t,e,n){n.d(e,{h:function(){return i}});var r=n(82917);class i{constructor(t,e,n,r){this.r=t,this.g=e,this.b=n,this.a="number"!=typeof r||isNaN(r)?1:r}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new i(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round((0,r.cY)(this.r,0,255))},${Math.round((0,r.cY)(this.g,0,255))},${Math.round((0,r.cY)(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round((0,r.cY)(this.r,0,255))},${Math.round((0,r.cY)(this.g,0,255))},${Math.round((0,r.cY)(this.b,0,255))},${(0,r.uZ)(this.a,0,1)})`}roundToPrecision(t){return new i((0,r.fZ)(this.r,t),(0,r.fZ)(this.g,t),(0,r.fZ)(this.b,t),(0,r.fZ)(this.a,t))}clamp(){return new i((0,r.uZ)(this.r,0,1),(0,r.uZ)(this.g,0,1),(0,r.uZ)(this.b,0,1),(0,r.uZ)(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return(0,r.yi)((0,r.cY)(t,0,255))}}},40272:function(t,e,n){n.d(e,{x:function(){return i}});var r=n(82917);class i{constructor(t,e,n){this.x=t,this.y=e,this.z=n}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new i(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new i((0,r.fZ)(this.x,t),(0,r.fZ)(this.y,t),(0,r.fZ)(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}i.whitePoint=new i(.95047,1,1.08883)},52952:function(t,e,n){n.d(e,{b:function(){return C}});var r,i=n(2696),o=n(60279),a=n(83343),s=n(82917);function u(t,e,n=18){const r=(0,o.$2)(t);let i=r.c+e*n;return i<0&&(i=0),(0,o.KW)(new a.t(r.l,i,r.h))}function l(t,e){return t*e}function c(t,e){return new i.h(l(t.r,e.r),l(t.g,e.g),l(t.b,e.b),1)}function d(t,e){return t<.5?(0,s.uZ)(2*e*t,0,1):(0,s.uZ)(1-2*(1-e)*(1-t),0,1)}function h(t,e){return new i.h(d(t.r,e.r),d(t.g,e.g),d(t.b,e.b),1)}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(r||(r={}));var f,p=n(9366),g=n(38316),v=n(447),m=n(40272);function b(t,e,n,r){if(isNaN(t)||t<=0)return n;if(t>=1)return r;switch(e){case f.HSL:return(0,o.hP)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new p.H((0,s.AG)(t,e.h,n.h),(0,s.t7)(t,e.s,n.s),(0,s.t7)(t,e.l,n.l))}(t,(0,o.lw)(n),(0,o.lw)(r)));case f.HSV:return(0,o.iI)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new g.T((0,s.AG)(t,e.h,n.h),(0,s.t7)(t,e.s,n.s),(0,s.t7)(t,e.v,n.v))}(t,(0,o.T8)(n),(0,o.T8)(r)));case f.XYZ:return(0,o.rD)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new m.x((0,s.t7)(t,e.x,n.x),(0,s.t7)(t,e.y,n.y),(0,s.t7)(t,e.z,n.z))}(t,(0,o.zP)(n),(0,o.zP)(r)));case f.LAB:return(0,o.DR)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new v.R((0,s.t7)(t,e.l,n.l),(0,s.t7)(t,e.a,n.a),(0,s.t7)(t,e.b,n.b))}(t,(0,o.v1)(n),(0,o.v1)(r)));case f.LCH:return(0,o.KW)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new a.t((0,s.t7)(t,e.l,n.l),(0,s.t7)(t,e.c,n.c),(0,s.AG)(t,e.h,n.h))}(t,(0,o.$2)(n),(0,o.$2)(r)));default:return function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new i.h((0,s.t7)(t,e.r,n.r),(0,s.t7)(t,e.g,n.g),(0,s.t7)(t,e.b,n.b),(0,s.t7)(t,e.a,n.a))}(t,n,r)}}!function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(f||(f={}));class y{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let n=0;n<t.length;n++)0===n?e[n]={color:t[n],position:0}:n===t.length-1?e[n]={color:t[n],position:1}:e[n]={color:t[n],position:n*(1/(t.length-1))};return new y(e)}getColor(t,e=f.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let n=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(n=e);let r=n+1;r>=this.stops.length&&(r=this.stops.length-1);return b((t-this.stops[n].position)*(1/(this.stops[r].position-this.stops[n].position)),e,this.stops[n].color,this.stops[r].color)}trim(t,e,n=f.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new y([{color:this.getColor(t,n),position:0}]);const r=[];for(let n=0;n<this.stops.length;n++)this.stops[n].position>=t&&this.stops[n].position<=e&&r.push(this.stops[n]);if(0===r.length)return new y([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);r[0].position!==t&&r.unshift({color:this.getColor(t),position:t}),r[r.length-1].position!==e&&r.push({color:this.getColor(e),position:e});const i=e-t,o=new Array(r.length);for(let e=0;e<r.length;e++)o[e]={color:r[e].color,position:(r[e].position-t)/i};return new y(o)}findNextColor(t,e,n=!1,r=f.RGB,i=.005,a=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const s=this.getColor(t,r),u=n?0:1,l=this.getColor(u,r);if((0,o.wo)(s,l)<=e)return u;let c=n?0:t,d=n?t:0,h=u,p=0;for(;p<=a;){h=Math.abs(d-c)/2+c;const t=this.getColor(h,r),a=(0,o.wo)(s,t);if(Math.abs(a-e)<=i)return h;a>e?n?c=h:d=h:n?d=h:c=h,p++}return h}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new y(t)}sortColorScaleStops(t){return t.sort(((t,e)=>{const n=t.position,r=e.position;return n<r?-1:n>r?1:0}))}}var w=n(11162);class x{constructor(t){this.config=Object.assign({},x.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const n in t)this.config[n]&&(this.config[n].equalValue?this.config[n].equalValue(t[n])||(this.config[n]=t[n],e=!0):t[n]!==this.config[n]&&(this.config[n]=t[n],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=(0,o.lw)(this.config.baseColor),e=new y([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let n=e.getColor(0),r=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(n=u(n,this.config.saturationLight),r=u(r,this.config.saturationDark)),0!==this.config.multiplyLight){const t=c(this.config.baseColor,n);n=b(this.config.multiplyLight,this.config.interpolationMode,n,t)}if(0!==this.config.multiplyDark){const t=c(this.config.baseColor,r);r=b(this.config.multiplyDark,this.config.interpolationMode,r,t)}if(0!==this.config.overlayLight){const t=h(this.config.baseColor,n);n=b(this.config.overlayLight,this.config.interpolationMode,n,t)}if(0!==this.config.overlayDark){const t=h(this.config.baseColor,r);r=b(this.config.overlayDark,this.config.interpolationMode,r,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new y([{position:0,color:this.config.baseColor},{position:1,color:r.clamp()}]):this.config.baseScalePosition>=1?new y([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new y([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:r.clamp()}]):new y([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:r.clamp()}])}}x.defaultPaletteConfig={baseColor:(0,w.in)("#808080"),steps:11,interpolationMode:f.RGB,scaleColorLight:new i.h(1,1,1,1),scaleColorDark:new i.h(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},x.greyscalePaletteConfig={baseColor:(0,w.in)("#808080"),steps:11,interpolationMode:f.RGB,scaleColorLight:new i.h(1,1,1,1),scaleColorDark:new i.h(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};x.defaultPaletteConfig.scaleColorLight,x.defaultPaletteConfig.scaleColorDark;class C{constructor(t){this.palette=[],this.config=Object.assign({},C.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,n=new i.h(e,e,e,1),r=new x(Object.assign(Object.assign({},x.greyscalePaletteConfig),{baseColor:n,baseScalePosition:86/94,steps:t})).palette,a=((0,o.rp)(this.config.baseColor)+(0,o.lw)(this.config.baseColor).l)/2,s=this.matchRelativeLuminanceIndex(a,r)/(t-1),u=this.matchRelativeLuminanceIndex(e,r)/(t-1),l=(0,o.lw)(this.config.baseColor),c=(0,o.hP)(p.H.fromObject({h:l.h,s:l.s,l:e})),d=(0,o.hP)(p.H.fromObject({h:l.h,s:l.s,l:.06})),h=new Array(5);h[0]={position:0,color:new i.h(1,1,1,1)},h[1]={position:s,color:this.config.baseColor},h[2]={position:u,color:c},h[3]={position:.99,color:d},h[4]={position:1,color:new i.h(0,0,0,1)};const g=new y(h);this.palette=new Array(t);for(let e=0;e<t;e++){const n=g.getColor(e/(t-1),f.RGB);this.palette[e]=n}}matchRelativeLuminanceIndex(t,e){let n=Number.MAX_VALUE,r=0,i=0;const a=e.length;for(;i<a;i++){const a=Math.abs((0,o.rp)(e[i])-t);a<n&&(n=a,r=i)}return r}}C.defaultPaletteConfig={baseColor:(0,w.in)("#808080"),steps:94}},82917:function(t,e,n){function r(t,e,n){return isNaN(t)||t<=e?e:t>=n?n:t}function i(t,e,n){return isNaN(t)||t<=e?0:t>=n?1:t/(n-e)}function o(t,e,n){return isNaN(t)?e:e+t*(n-e)}function a(t){return t*(Math.PI/180)}function s(t){return t*(180/Math.PI)}function u(t){const e=Math.round(r(t,0,255)).toString(16);return 1===e.length?"0"+e:e}function l(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:e+t*(n-e)}function c(t,e,n){if(t<=0)return e%360;if(t>=1)return n%360;const r=(e-n+360)%360;return r<=(n-e+360)%360?(e-r*t+360)%360:(e+r*t+360)%360}n.d(e,{AG:function(){return c},Fv:function(){return i},Ht:function(){return a},cY:function(){return o},fZ:function(){return d},t7:function(){return l},uZ:function(){return r},vi:function(){return s},yi:function(){return u}});Math.PI;function d(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}},11162:function(t,e,n){n.d(e,{b4:function(){return u},hg:function(){return c},in:function(){return l},pJ:function(){return s}});var r=n(2696),i=n(82917);const o=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,a=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function s(t){return a.test(t)}function u(t){return o.test(t)}function l(t){const e=a.exec(t);if(null===e)return null;let n=e[1];if(3===n.length){const t=n.charAt(0),e=n.charAt(1),r=n.charAt(2);n=t.concat(t,e,e,r,r)}const o=parseInt(n,16);return isNaN(o)?null:new r.h((0,i.Fv)((16711680&o)>>>16,0,255),(0,i.Fv)((65280&o)>>>8,0,255),(0,i.Fv)(255&o,0,255),1)}function c(t){const e=o.exec(t);if(null===e)return null;const n=e[1].split(",");return new r.h((0,i.Fv)(Number(n[0]),0,255),(0,i.Fv)(Number(n[1]),0,255),(0,i.Fv)(Number(n[2]),0,255),1)}},65620:function(t,e,n){n.d(e,{Ax:function(){return a},Id:function(){return u},Lj:function(){return c},bw:function(){return s},so:function(){return l}});var r=n(87697),i=n(12968),o=n(89694);const a=Object.freeze({locate:(0,o.j8)()}),s={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},u={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class l{constructor(t,e,n=e.toLowerCase(),r="reflect",i){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=n,this.mode=r,this.converter=i,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===r&&void 0===i&&(this.converter=s)}setValue(t,e){const n=t[this.fieldName],r=this.converter;void 0!==r&&(e=r.fromView(e)),n!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](n,e),t.$fastController.notify(this.name))}getValue(t){return r.y$.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,n=this.guards;n.has(t)||"fromView"===e||i.SO.queueUpdate((()=>{n.add(t);const r=t[this.fieldName];switch(e){case"reflect":const e=this.converter;i.SO.setAttribute(t,this.attribute,void 0!==e?e.toView(r):r);break;case"boolean":i.SO.setBooleanAttribute(t,this.attribute,r)}n.delete(t)}))}static collect(t,...e){const n=[];e.push(a.locate(t));for(let r=0,i=e.length;r<i;++r){const i=e[r];if(void 0!==i)for(let e=0,r=i.length;e<r;++e){const r=i[e];"string"==typeof r?n.push(new l(t,r)):n.push(new l(t,r.property,r.attribute,r.mode,r.converter))}}return n}}function c(t,e){let n;function r(t,e){arguments.length>1&&(n.property=e),a.locate(t.constructor).push(n)}return arguments.length>1?(n={},void r(t,e)):(n=void 0===t?{}:t,r)}},51352:function(t,e,n){n.d(e,{Q:function(){return c}});var r=n(12968),i=n(52981),o=n(87697),a=n(57426);const s=new WeakMap,u={bubbles:!0,composed:!0,cancelable:!0};function l(t){return t.shadowRoot||s.get(t)||null}class c extends i.A{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const n=e.shadowOptions;if(void 0!==n){const e=t.attachShadow(n);"closed"===n.mode&&s.set(t,e)}const r=o.y$.getAccessors(t);if(r.length>0){const e=this.boundObservables=Object.create(null);for(let n=0,i=r.length;n<i;++n){const i=r[n].name,o=t[i];void 0!==o&&(delete t[i],e[i]=o)}}}get isConnected(){return o.y$.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,o.y$.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=l(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const n=t.behaviors;t.addStylesTo(e),null!==n&&this.addBehaviors(n)}}removeStyles(t){const e=l(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const n=t.behaviors;t.removeStylesFrom(e),null!==n&&this.removeBehaviors(n)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),n=t.length,r=[];for(let i=0;i<n;++i){const n=t[i];e.has(n)?e.set(n,e.get(n)+1):(e.set(n,1),r.push(n))}if(this._isConnected){const t=this.element;for(let e=0;e<r.length;++e)r[e].bind(t,o.Wp)}}removeBehaviors(t,e=!1){const n=this.behaviors;if(null===n)return;const r=t.length,i=[];for(let o=0;o<r;++o){const r=t[o];if(n.has(r)){const t=n.get(r)-1;0===t||e?n.delete(r)&&i.push(r):n.set(r,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<i.length;++e)i[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,o.Wp);const e=this.behaviors;if(null!==e)for(const[n]of e)n.bind(t,o.Wp);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[n]of e)n.unbind(t)}}onAttributeChangedCallback(t,e,n){const r=this.definition.attributeLookup[t];void 0!==r&&r.onAttributeChangedCallback(this.element,n)}emit(t,e,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},u),n)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const n=Object.keys(e);for(let r=0,i=n.length;r<i;++r){const i=n[r];t[i]=e[i]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,n=l(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||r.SO.removeChildNodes(n),t&&(this.view=t.render(e,n,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const n=a.W.forType(t.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return t.$fastController=new c(t,n)}}},57426:function(t,e,n){n.d(e,{W:function(){return c}});var r=n(89694),i=n(87697),o=n(52959),a=n(65620);const s={mode:"open"},u={},l=r.Bo.getById(4,(()=>{const t=new Map;return Object.freeze({register:e=>!t.has(e.type)&&(t.set(e.type,e),!0),getByType:e=>t.get(e)})}));class c{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const n=a.so.collect(t,e.attributes),r=new Array(n.length),i={},l={};for(let t=0,e=n.length;t<e;++t){const e=n[t];r[t]=e.attribute,i[e.name]=e,l[e.attribute]=e}this.attributes=n,this.observedAttributes=r,this.propertyLookup=i,this.attributeLookup=l,this.shadowOptions=void 0===e.shadowOptions?s:null===e.shadowOptions?void 0:Object.assign(Object.assign({},s),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?u:Object.assign(Object.assign({},u),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?o.XL.create(e.styles):e.styles instanceof o.XL?e.styles:o.XL.create([e.styles])}get isDefined(){return!!l.getByType(this.type)}define(t=customElements){const e=this.type;if(l.register(this)){const t=this.attributes,n=e.prototype;for(let e=0,r=t.length;e<r;++e)i.y$.defineProperty(n,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}c.forType=l.getByType},89346:function(t,e,n){n.d(e,{H:function(){return a},M:function(){return s}});var r=n(51352),i=n(57426);function o(t){return class extends t{constructor(){super(),r.Q.forCustomElement(this)}$emit(t,e,n){return this.$fastController.emit(t,e,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,n){this.$fastController.onAttributeChangedCallback(t,e,n)}}}const a=Object.assign(o(HTMLElement),{from:t=>o(t),define:(t,e)=>new i.W(t,e).define().type});function s(t){return function(e){new i.W(e,t).define()}}},12968:function(t,e,n){n.d(e,{SO:function(){return c},Yl:function(){return l},pc:function(){return u}});var r=n(89694);const i=r.P3.FAST.getById(1,(()=>{const t=[],e=[];function n(){if(e.length)throw e.shift()}function i(t){try{t.call()}catch(t){e.push(t),setTimeout(n,0)}}function o(){let e=0;for(;e<t.length;)if(i(t[e]),e++,e>1024){for(let n=0,r=t.length-e;n<r;n++)t[n]=t[n+e];t.length-=e,e=0}t.length=0}return Object.freeze({enqueue:function(e){t.length<1&&r.P3.requestAnimationFrame(o),t.push(e)},process:o})})),o=r.P3.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let a=o;const s=`fast-${Math.random().toString(36).substring(2,8)}`,u=`${s}{`,l=`}${s}`,c=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(a!==o)throw new Error("The HTML policy can only be set once.");a=t},createHTML:t=>a.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(s),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${s}:`,"")),createInterpolationPlaceholder:t=>`${u}${t}${l}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${s}:${t}--\x3e`,queueUpdate:i.enqueue,processUpdates:i.process,nextUpdate:()=>new Promise(i.enqueue),setAttribute(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)})},7163:function(t,e,n){n.r(e),n.d(e,{$global:function(){return r.P3},AttachedBehaviorHTMLDirective:function(){return y.ON},AttributeConfiguration:function(){return s.Ax},AttributeDefinition:function(){return s.so},BindingBehavior:function(){return b.S},CSSDirective:function(){return h.v},ChildrenBehavior:function(){return k.o},Controller:function(){return u.Q},DOM:function(){return m.SO},ElementStyles:function(){return c.XL},ExecutionContext:function(){return p.rd},FAST:function(){return r.Bo},FASTElement:function(){return o.H},FASTElementDefinition:function(){return a.W},HTMLBindingDirective:function(){return b.R},HTMLDirective:function(){return y.m0},HTMLView:function(){return f.b},Observable:function(){return p.y$},PropertyChangeNotifier:function(){return g.A},RefBehavior:function(){return w.L},RepeatBehavior:function(){return C.eN},RepeatDirective:function(){return C.Gx},SlottedBehavior:function(){return S.y},SubscriberSet:function(){return g.q},TargetedHTMLDirective:function(){return y.d$},ViewTemplate:function(){return i._},attr:function(){return s.Lj},booleanConverter:function(){return s.bw},children:function(){return k.p},compileTemplate:function(){return l._},createMetadataLocator:function(){return r.j8},css:function(){return d.i},cssPartial:function(){return d.j},customElement:function(){return o.M},defaultExecutionContext:function(){return p.Wp},elements:function(){return F.R},emptyArray:function(){return r.ow},enableArrayObservation:function(){return v.F},html:function(){return i.d},nullableNumberConverter:function(){return s.Id},observable:function(){return p.LO},ref:function(){return w.i},repeat:function(){return C.rx},slotted:function(){return S.Q},volatile:function(){return p.lk},when:function(){return x.g}});var r=n(89694),i=n(39181),o=n(89346),a=n(57426),s=n(65620),u=n(51352),l=n(74648),c=n(52959),d=n(53046),h=n(99539),f=n(15267),p=n(87697),g=n(52981),v=n(37392),m=n(12968),b=n(20277),y=n(67479),w=n(58952),x=n(13988),C=n(18864),S=n(90960),k=n(81422),F=n(58689)},37392:function(t,e,n){n.d(e,{F:function(){return g}});var r=n(12968),i=n(89694);function o(t,e,n){return{index:t,removed:e,addedCount:n}}function a(t,e,n,r,a,s){let u=0,l=0;const c=Math.min(n-e,s-a);if(0===e&&0===a&&(u=function(t,e,n){for(let r=0;r<n;++r)if(t[r]!==e[r])return r;return n}(t,r,c)),n===t.length&&s===r.length&&(l=function(t,e,n){let r=t.length,i=e.length,o=0;for(;o<n&&t[--r]===e[--i];)o++;return o}(t,r,c-u)),a+=u,s-=l,(n-=l)-(e+=u)==0&&s-a==0)return i.ow;if(e===n){const t=o(e,[],0);for(;a<s;)t.removed.push(r[a++]);return[t]}if(a===s)return[o(e,[],n-e)];const d=function(t){let e=t.length-1,n=t[0].length-1,r=t[e][n];const i=[];for(;e>0||n>0;){if(0===e){i.push(2),n--;continue}if(0===n){i.push(3),e--;continue}const o=t[e-1][n-1],a=t[e-1][n],s=t[e][n-1];let u;u=a<s?a<o?a:o:s<o?s:o,u===o?(o===r?i.push(0):(i.push(1),r=o),e--,n--):u===a?(i.push(3),e--,r=a):(i.push(2),n--,r=s)}return i.reverse(),i}(function(t,e,n,r,i,o){const a=o-i+1,s=n-e+1,u=new Array(a);let l,c;for(let t=0;t<a;++t)u[t]=new Array(s),u[t][0]=t;for(let t=0;t<s;++t)u[0][t]=t;for(let n=1;n<a;++n)for(let o=1;o<s;++o)t[e+o-1]===r[i+n-1]?u[n][o]=u[n-1][o-1]:(l=u[n-1][o]+1,c=u[n][o-1]+1,u[n][o]=l<c?l:c);return u}(t,e,n,r,a,s)),h=[];let f,p=e,g=a;for(let t=0;t<d.length;++t)switch(d[t]){case 0:void 0!==f&&(h.push(f),f=void 0),p++,g++;break;case 1:void 0===f&&(f=o(p,[],0)),f.addedCount++,p++,f.removed.push(r[g]),g++;break;case 2:void 0===f&&(f=o(p,[],0)),f.addedCount++,p++;break;case 3:void 0===f&&(f=o(p,[],0)),f.removed.push(r[g]),g++}return void 0!==f&&h.push(f),h}const s=Array.prototype.push;function u(t,e,n,r){const i=o(e,n,r);let a=!1,u=0;for(let e=0;e<t.length;e++){const n=t[e];if(n.index+=u,a)continue;const r=(l=i.index,c=i.index+i.removed.length,d=n.index,h=n.index+n.addedCount,c<d||h<l?-1:c===d||h===l?0:l<d?c<h?c-d:h-d:h<c?h-l:c-l);if(r>=0){t.splice(e,1),e--,u-=n.addedCount-n.removed.length,i.addedCount+=n.addedCount-r;const o=i.removed.length+n.removed.length-r;if(i.addedCount||o){let t=n.removed;if(i.index<n.index){const e=i.removed.slice(0,n.index-i.index);s.apply(e,t),t=e}if(i.index+i.removed.length>n.index+n.addedCount){const e=i.removed.slice(n.index+n.addedCount-i.index);s.apply(t,e)}i.removed=t,n.index<i.index&&(i.index=n.index)}else a=!0}else if(i.index<n.index){a=!0,t.splice(e,0,i),e++;const r=i.addedCount-i.removed.length;n.index+=r,u+=r}}var l,c,d,h;a||t.push(i)}function l(t,e){let n=[];const r=function(t){const e=[];for(let n=0,r=t.length;n<r;n++){const r=t[n];u(e,r.index,r.removed,r.addedCount)}return e}(e);for(let e=0,i=r.length;e<i;++e){const i=r[e];1!==i.addedCount||1!==i.removed.length?n=n.concat(a(t,i.index,i.index+i.addedCount,i.removed,0,i.removed.length)):i.removed[0]!==t[i.index]&&n.push(i)}return n}var c=n(52981),d=n(87697);let h=!1;function f(t,e){let n=t.index;const r=e.length;return n>r?n=r-t.addedCount:n<0&&(n=r+t.removed.length+n-t.addedCount),n<0&&(n=0),t.index=n,t}class p extends c.q{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){void 0===this.splices?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,r.SO.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,r.SO.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(void 0===t&&void 0===e)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const n=void 0===e?l(this.source,t):a(this.source,0,this.source.length,e,0,e.length);this.notify(n)}}function g(){if(h)return;h=!0,d.y$.setArrayObserverFactory((t=>new p(t)));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,n=t.push,r=t.reverse,i=t.shift,a=t.sort,s=t.splice,u=t.unshift;t.pop=function(){const t=this.length>0,n=e.apply(this,arguments),r=this.$fastController;return void 0!==r&&t&&r.addSplice(o(this.length,[n],0)),n},t.push=function(){const t=n.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(f(o(this.length-arguments.length,[],arguments.length),this)),t},t.reverse=function(){let t;const e=this.$fastController;void 0!==e&&(e.flush(),t=this.slice());const n=r.apply(this,arguments);return void 0!==e&&e.reset(t),n},t.shift=function(){const t=this.length>0,e=i.apply(this,arguments),n=this.$fastController;return void 0!==n&&t&&n.addSplice(o(0,[e],0)),e},t.sort=function(){let t;const e=this.$fastController;void 0!==e&&(e.flush(),t=this.slice());const n=a.apply(this,arguments);return void 0!==e&&e.reset(t),n},t.splice=function(){const t=s.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(f(o(+arguments[0],t,arguments.length>2?arguments.length-2:0),this)),t},t.unshift=function(){const t=u.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(f(o(0,[],arguments.length),this)),t}}},52981:function(t,e,n){n.d(e,{A:function(){return i},q:function(){return r}});class r{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return void 0===this.spillover?this.sub1===t||this.sub2===t:-1!==this.spillover.indexOf(t)}subscribe(t){const e=this.spillover;if(void 0===e){if(this.has(t))return;if(void 0===this.sub1)return void(this.sub1=t);if(void 0===this.sub2)return void(this.sub2=t);this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else{-1===e.indexOf(t)&&e.push(t)}}unsubscribe(t){const e=this.spillover;if(void 0===e)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}notify(t){const e=this.spillover,n=this.source;if(void 0===e){const e=this.sub1,r=this.sub2;void 0!==e&&e.handleChange(n,t),void 0!==r&&r.handleChange(n,t)}else for(let r=0,i=e.length;r<i;++r)e[r].handleChange(n,t)}}class i{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const n=this.subscribers[t];void 0!==n&&n.notify(t),null===(e=this.sourceSubscribers)||void 0===e||e.notify(t)}subscribe(t,e){var n;if(e){let n=this.subscribers[e];void 0===n&&(this.subscribers[e]=n=new r(this.source)),n.subscribe(t)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new r(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var n;if(e){const n=this.subscribers[e];void 0!==n&&n.unsubscribe(t)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(t)}}},87697:function(t,e,n){n.d(e,{LO:function(){return s},Wp:function(){return d},lk:function(){return u},rd:function(){return c},y$:function(){return a}});var r=n(12968),i=n(89694),o=n(52981);const a=i.Bo.getById(2,(()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,n=r.SO.queueUpdate;let a,s=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function u(t){let n=t.$fastController||e.get(t);return void 0===n&&(Array.isArray(t)?n=s(t):e.set(t,n=new o.A(t))),n}const l=(0,i.j8)();class c{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==a&&a.watch(t,this.name),t[this.field]}setValue(t,e){const n=this.field,r=t[n];if(r!==e){t[n]=e;const i=t[this.callback];"function"==typeof i&&i.call(t,r,e),u(t).notify(this.name)}}}class d extends o.q{constructor(t,e,n=!1){super(t,e),this.binding=t,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const n=a;a=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(t,e);return a=n,r}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const n=this.last,r=u(t),i=null===n?this.first:{};if(i.propertySource=t,i.propertyName=e,i.notifier=r,r.subscribe(this,e),null!==n){if(!this.needsRefresh){let e;a=void 0,e=n.propertySource[n.propertyName],a=this,t===e&&(this.needsRefresh=!0)}n.next=i}this.last=i}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(t){s=t},getNotifier:u,track(t,e){void 0!==a&&a.watch(t,e)},trackVolatile(){void 0!==a&&(a.needsRefresh=!0)},notify(t,e){u(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new c(e)),l(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors:l,binding(t,e,n=this.isVolatileBinding(t)){return new d(t,e,n)},isVolatileBinding:e=>t.test(e.toString())})}));function s(t,e){a.defineProperty(t,e)}function u(t,e,n){return Object.assign({},n,{get:function(){return a.trackVolatile(),n.get.apply(this)}})}const l=i.Bo.getById(3,(()=>{let t=null;return{get:()=>t,set(e){t=e}}}));class c{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return l.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){l.set(t)}}a.defineProperty(c.prototype,"index"),a.defineProperty(c.prototype,"length");const d=Object.seal(new c)},89694:function(t,e,n){n.d(e,{Bo:function(){return o},P3:function(){return r},j8:function(){return s},ow:function(){return a}});const r=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===r.trustedTypes&&(r.trustedTypes={createPolicy:(t,e)=>e});const i={configurable:!1,enumerable:!1,writable:!1};void 0===r.FAST&&Reflect.defineProperty(r,"FAST",Object.assign({value:Object.create(null)},i));const o=r.FAST;if(void 0===o.getById){const t=Object.create(null);Reflect.defineProperty(o,"getById",Object.assign({value(e,n){let r=t[e];return void 0===r&&(r=n?t[e]=n():null),r}},i))}const a=Object.freeze([]);function s(){const t=new WeakMap;return function(e){let n=t.get(e);if(void 0===n){let r=Reflect.getPrototypeOf(e);for(;void 0===n&&null!==r;)n=t.get(r),r=Reflect.getPrototypeOf(r);n=void 0===n?[]:n.slice(0),t.set(e,n)}return n}}},99539:function(t,e,n){n.d(e,{v:function(){return r}});class r{createCSS(){return""}createBehavior(){}}},53046:function(t,e,n){n.d(e,{i:function(){return a},j:function(){return u}});var r=n(99539),i=n(52959);function o(t,e){const n=[];let o="";const a=[];for(let s=0,u=t.length-1;s<u;++s){o+=t[s];let u=e[s];if(u instanceof r.v){const t=u.createBehavior();u=u.createCSS(),t&&a.push(t)}u instanceof i.XL||u instanceof CSSStyleSheet?(""!==o.trim()&&(n.push(o),o=""),n.push(u)):o+=u}return o+=t[t.length-1],""!==o.trim()&&n.push(o),{styles:n,behaviors:a}}function a(t,...e){const{styles:n,behaviors:r}=o(t,e),a=i.XL.create(n);return r.length&&a.withBehaviors(...r),a}class s extends r.v{constructor(t,e){super(),this.behaviors=e,this.css="";const n=t.reduce(((t,e)=>("string"==typeof e?this.css+=e:t.push(e),t)),[]);n.length&&(this.styles=i.XL.create(n))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function u(t,...e){const{styles:n,behaviors:r}=o(t,e);return new s(n,r)}},52959:function(t,e,n){n.d(e,{XL:function(){return i}});var r=n(12968);class i{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function o(t){return t.map((t=>t instanceof i?o(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function a(t){return t.map((t=>t instanceof i?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}i.create=(()=>{if(r.SO.supportsAdoptedStyleSheets){const t=new Map;return e=>new s(e,t)}return t=>new l(t)})();class s extends i{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=a(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=o(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let n=e.get(t);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(t),e.set(t,n)),n}))}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let u=0;class l extends i{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=a(t),this.styleSheets=o(t),this.styleClass="fast-style-class-"+ ++u}addStylesTo(t){const e=this.styleSheets,n=this.styleClass;t=this.normalizeTarget(t);for(let r=0;r<e.length;r++){const i=document.createElement("style");i.innerHTML=e[r],i.className=n,t.append(i)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let n=0,r=e.length;n<r;++n)t.removeChild(e[n]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}},20277:function(t,e,n){n.d(e,{R:function(){return v},S:function(){return m}});var r=n(12968),i=n(87697),o=n(67479);function a(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=i.y$.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function s(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function u(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function l(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function c(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function d(t){r.SO.setAttribute(this.target,this.targetName,t)}function h(t){r.SO.setBooleanAttribute(this.target,this.targetName,t)}function f(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function p(t){this.target[this.targetName]=t}function g(t){const e=this.classVersions||Object.create(null),n=this.target;let r=this.version||0;if(null!=t&&t.length){const i=t.split(/\s+/);for(let t=0,o=i.length;t<o;++t){const o=i[t];""!==o&&(e[o]=r,n.classList.add(o))}}if(this.classVersions=e,this.version=r+1,0!==r){r-=1;for(const t in e)e[t]===r&&n.classList.remove(t)}}class v extends o.d${constructor(t){super(),this.binding=t,this.bind=a,this.unbind=u,this.updateTarget=d,this.isBindingVolatile=i.y$.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=p,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,n)=>r.SO.createHTML(t(e,n))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=h;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=s,this.unbind=c;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=g)}}targetAtContent(){this.updateTarget=f,this.unbind=l}createBehavior(t){return new m(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class m{constructor(t,e,n,r,i,o,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=n,this.bind=r,this.unbind=i,this.updateTarget=o,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){i.rd.setEvent(t);const e=this.binding(this.source,this.context);i.rd.setEvent(null),!0!==e&&t.preventDefault()}}},81422:function(t,e,n){n.d(e,{o:function(){return o},p:function(){return a}});var r=n(67479),i=n(58689);class o extends i.x{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function a(t){return"string"==typeof t&&(t={property:t}),new r.ON("fast-children",o,t)}},74648:function(t,e,n){n.d(e,{_:function(){return h}});var r=n(12968),i=n(20277);let o=null;class a{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){o=this}static borrow(t){const e=o||new a;return e.directives=t,e.reset(),o=null,e}}function s(t){if(1===t.length)return t[0];let e;const n=t.length,r=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),o=new i.R(((t,e)=>{let i="";for(let o=0;o<n;++o)i+=r[o](t,e);return i}));return o.targetName=e,o}const u=r.Yl.length;function l(t,e){const n=e.split(r.pc);if(1===n.length)return null;const i=[];for(let e=0,o=n.length;e<o;++e){const o=n[e],a=o.indexOf(r.Yl);let s;if(-1===a)s=o;else{const e=parseInt(o.substring(0,a));i.push(t.directives[e]),s=o.substring(a+u)}""!==s&&i.push(s)}return i}function c(t,e,n=!1){const r=e.attributes;for(let o=0,a=r.length;o<a;++o){const u=r[o],c=u.value,d=l(t,c);let h=null;null===d?n&&(h=new i.R((()=>c)),h.targetName=u.name):h=s(d),null!==h&&(e.removeAttributeNode(u),o--,a--,t.addFactory(h))}}function d(t,e,n){const r=l(t,e.textContent);if(null!==r){let i=e;for(let o=0,a=r.length;o<a;++o){const a=r[o],s=0===o?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof a?s.textContent=a:(s.textContent=" ",t.captureContentBinding(a)),i=s,t.targetIndex++,s!==e&&n.nextNode()}t.targetIndex--}}function h(t,e){const n=t.content;document.adoptNode(n);const i=a.borrow(e);c(i,t,!0);const o=i.behaviorFactories;i.reset();const s=r.SO.createTemplateWalker(n);let u;for(;u=s.nextNode();)switch(i.targetIndex++,u.nodeType){case 1:c(i,u);break;case 3:d(i,u,s);break;case 8:r.SO.isMarker(u)&&i.addFactory(e[r.SO.extractDirectiveIndexFromMarker(u)])}let l=0;(r.SO.isMarker(n.firstChild)||1===n.childNodes.length&&e.length)&&(n.insertBefore(document.createComment(""),n.firstChild),l=-1);const h=i.behaviorFactories;return i.release(),{fragment:n,viewBehaviorFactories:h,hostBehaviorFactories:o,targetOffset:l}}},67479:function(t,e,n){n.d(e,{ON:function(){return a},d$:function(){return o},m0:function(){return i}});var r=n(12968);class i{constructor(){this.targetIndex=0}}class o extends i{constructor(){super(...arguments),this.createPlaceholder=r.SO.createInterpolationPlaceholder}}class a extends i{constructor(t,e,n){super(),this.name=t,this.behavior=e,this.options=n}createPlaceholder(t){return r.SO.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}},58689:function(t,e,n){n.d(e,{R:function(){return o},x:function(){return a}});var r=n(87697),i=n(89694);function o(t){return t?function(e,n,r){return 1===e.nodeType&&e.matches(t)}:function(t,e,n){return 1===t.nodeType}}class a{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=r.y$.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(i.ow),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}},58952:function(t,e,n){n.d(e,{L:function(){return i},i:function(){return o}});var r=n(67479);class i{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function o(t){return new r.ON("fast-ref",i,t)}},18864:function(t,e,n){n.d(e,{Gx:function(){return f},eN:function(){return h},rx:function(){return p}});var r=n(12968),i=n(87697),o=n(37392),a=n(89694),s=n(67479),u=n(15267);const l=Object.freeze({positioning:!1,recycle:!0});function c(t,e,n,r){t.bind(e[n],r)}function d(t,e,n,r){const i=Object.create(r);i.index=n,i.length=e.length,t.bind(e[n],i)}class h{constructor(t,e,n,r,o,a){this.location=t,this.itemsBinding=e,this.templateBinding=r,this.options=a,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=c,this.itemsBindingObserver=i.y$.binding(e,this,n),this.templateBindingObserver=i.y$.binding(r,this,o),a.positioning&&(this.bindView=d)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items)return void(this.items=a.ow);const e=this.itemsObserver,n=this.itemsObserver=i.y$.getNotifier(this.items),r=e!==n;r&&null!==e&&e.unsubscribe(this),(r||t)&&n.subscribe(this)}updateViews(t){const e=this.childContext,n=this.views,r=this.bindView,i=this.items,o=this.template,a=this.options.recycle,s=[];let u=0,l=0;for(let c=0,d=t.length;c<d;++c){const d=t[c],h=d.removed;let f=0,p=d.index;const g=p+d.addedCount,v=n.splice(d.index,h.length),m=l=s.length+v.length;for(;p<g;++p){const t=n[p],c=t?t.firstChild:this.location;let d;a&&l>0?(f<=m&&v.length>0?(d=v[f],f++):(d=s[u],u++),l--):d=o.create(),n.splice(p,0,d),r(d,i,p,e),d.insertBefore(c)}v[f]&&s.push(...v.slice(f))}for(let t=u,e=s.length;t<e;++t)s[t].dispose();if(this.options.positioning)for(let t=0,e=n.length;t<e;++t){const r=n[t].context;r.length=e,r.index=t}}refreshAllViews(t=!1){const e=this.items,n=this.childContext,r=this.template,i=this.location,o=this.bindView;let a=e.length,s=this.views,l=s.length;if(0!==a&&!t&&this.options.recycle||(u.b.disposeContiguousBatch(s),l=0),0===l){this.views=s=new Array(a);for(let t=0;t<a;++t){const a=r.create();o(a,e,t,n),s[t]=a,a.insertBefore(i)}}else{let t=0;for(;t<a;++t)if(t<l){o(s[t],e,t,n)}else{const a=r.create();o(a,e,t,n),s.push(a),a.insertBefore(i)}const u=s.splice(t,l-t);for(t=0,a=u.length;t<a;++t)u[t].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,n=t.length;e<n;++e)t[e].unbind()}}class f extends s.m0{constructor(t,e,n){super(),this.itemsBinding=t,this.templateBinding=e,this.options=n,this.createPlaceholder=r.SO.createBlockPlaceholder,(0,o.F)(),this.isItemsBindingVolatile=i.y$.isVolatileBinding(t),this.isTemplateBindingVolatile=i.y$.isVolatileBinding(e)}createBehavior(t){return new h(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function p(t,e,n=l){return new f(t,"function"==typeof e?e:()=>e,Object.assign(Object.assign({},l),n))}},90960:function(t,e,n){n.d(e,{Q:function(){return a},y:function(){return o}});var r=n(67479),i=n(58689);class o extends i.x{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function a(t){return"string"==typeof t&&(t={property:t}),new r.ON("fast-slotted",o,t)}},39181:function(t,e,n){n.d(e,{_:function(){return l},d:function(){return d}});var r=n(12968),i=n(87697),o=n(74648),a=n(15267),s=n(67479),u=n(20277);class l{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=r.SO.createHTML(e);const n=t.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(t=n)}else t=e;const n=(0,o._)(t,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,i=new Array(this.behaviorCount),s=r.SO.createTemplateWalker(e);let u=0,l=this.targetOffset,c=s.nextNode();for(let t=n.length;u<t;++u){const t=n[u],e=t.targetIndex;for(;null!==c;){if(l===e){i[u]=t.createBehavior(c);break}c=s.nextNode(),l++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let n=0,r=e.length;n<r;++n,++u)i[u]=e[n].createBehavior(t)}return new a.b(e,i)}render(t,e,n){"string"==typeof e&&(e=document.getElementById(e)),void 0===n&&(n=e);const r=this.create(n);return r.bind(t,i.Wp),r.appendTo(e),r}}const c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,...e){const n=[];let r="";for(let i=0,o=t.length-1;i<o;++i){const o=t[i];let a=e[i];if(r+=o,a instanceof l){const t=a;a=()=>t}if("function"==typeof a&&(a=new u.R(a)),a instanceof s.d$){const t=c.exec(o);null!==t&&(a.targetName=t[2])}a instanceof s.m0?(r+=a.createPlaceholder(n.length),n.push(a)):r+=a}return r+=t[t.length-1],new l(r,n)}},15267:function(t,e,n){n.d(e,{b:function(){return i}});const r=document.createRange();class i{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const n=t.parentNode;let r,i=this.firstChild;for(;i!==e;)r=i.nextSibling,n.insertBefore(i,t),i=r;n.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let n,r=this.firstChild;for(;r!==e;)n=r.nextSibling,t.appendChild(r),r=n;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let n,r=this.firstChild;for(;r!==e;)n=r.nextSibling,t.removeChild(r),r=n;t.removeChild(e);const i=this.behaviors,o=this.source;for(let t=0,e=i.length;t<e;++t)i[t].unbind(o)}bind(t,e){const n=this.behaviors;if(this.source!==t)if(null!==this.source){const r=this.source;this.source=t,this.context=e;for(let i=0,o=n.length;i<o;++i){const o=n[i];o.unbind(r),o.bind(t,e)}}else{this.source=t,this.context=e;for(let r=0,i=n.length;r<i;++r)n[r].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let n=0,r=t.length;n<r;++n)t[n].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){r.setStartBefore(t[0].firstChild),r.setEndAfter(t[t.length-1].lastChild),r.deleteContents();for(let e=0,n=t.length;e<n;++e){const n=t[e],r=n.behaviors,i=n.source;for(let t=0,e=r.length;t<e;++t)r[t].unbind(i)}}}}},13988:function(t,e,n){function r(t,e){const n="function"==typeof e?e:()=>e;return(e,r)=>t(e,r)?n(e,r):null}n.d(e,{g:function(){return r}})},99641:function(t,e,n){n.d(e,{Q:function(){return u}});var r=n(20005),i=n(65620),o=n(48839),a=n(51208),s=n(86076);class u extends o.I{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}(0,r.gn)([(0,i.Lj)({attribute:"heading-level",mode:"fromView",converter:i.Id})],u.prototype,"headinglevel",void 0),(0,r.gn)([(0,i.Lj)({mode:"boolean"})],u.prototype,"expanded",void 0),(0,r.gn)([i.Lj],u.prototype,"id",void 0),(0,s.e)(u,a.hW)},28090:function(t,e,n){n.d(e,{e:function(){return c},m:function(){return d}});var r=n(20005),i=n(65620),o=n(87697),a=n(48839),s=n(7775),u=n(51208),l=n(86076);class c extends a.I{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}(0,r.gn)([i.Lj],c.prototype,"download",void 0),(0,r.gn)([i.Lj],c.prototype,"href",void 0),(0,r.gn)([i.Lj],c.prototype,"hreflang",void 0),(0,r.gn)([i.Lj],c.prototype,"ping",void 0),(0,r.gn)([i.Lj],c.prototype,"referrerpolicy",void 0),(0,r.gn)([i.Lj],c.prototype,"rel",void 0),(0,r.gn)([i.Lj],c.prototype,"target",void 0),(0,r.gn)([i.Lj],c.prototype,"type",void 0),(0,r.gn)([o.LO],c.prototype,"defaultSlottedContent",void 0);class d{}(0,r.gn)([(0,i.Lj)({attribute:"aria-expanded"})],d.prototype,"ariaExpanded",void 0),(0,l.e)(d,s.v),(0,l.e)(c,u.hW,d)},45169:function(t,e,n){n.d(e,{g:function(){return s}});var r=n(39181),i=n(58952),o=n(90960),a=n(51208);const s=(t,e)=>r.d`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${(0,i.i)("control")}
    >
        ${(0,a.m9)(t,e)}
        <span class="content" part="content">
            <slot ${(0,o.Q)("defaultSlottedContent")}></slot>
        </span>
        ${(0,a.LC)(t,e)}
    </a>
`},65130:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(48839);class i extends r.I{}},48657:function(t,e,n){n.d(e,{O:function(){return i}});var r=n(39181);const i=(t,e)=>r.d`
    <slot></slot>
`},41521:function(t,e,n){n.d(e,{B:function(){return u},v:function(){return s}});var r=n(52959),i=n(72815);function o(t){return`${t.toLowerCase()}:presentation`}const a=new Map,s=Object.freeze({define(t,e,n){const r=o(t);void 0===a.get(r)?a.set(r,e):a.set(r,!1),n.register(i.YM.instance(r,e))},forTag(t,e){const n=o(t),r=a.get(n);if(!1===r){return i.DI.findResponsibleContainer(e).get(n)}return r||null}});class u{constructor(t,e){this.template=t||null,this.styles=void 0===e?null:Array.isArray(e)?r.XL.create(e):e instanceof r.XL?e:r.XL.create([e])}applyTo(t){const e=t.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}},57905:function(t,e,n){n.d(e,{K:function(){return f},h:function(){return u}});var r=n(57426),i=n(48839),o=n(72815),a=n(98648),s=n(41521);const u=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),l=new Map,c=new Map;let d=null;const h=o.DI.createInterface((t=>t.cachedCallback((t=>(null===d&&(d=new p(null,t)),d))))),f=Object.freeze({tagFor:t=>c.get(t),responsibleFor(t){const e=t.$$designSystem$$;if(e)return e;return o.DI.findResponsibleContainer(t).get(h)},getOrCreate(t){if(!t)return null===d&&(d=o.DI.getOrCreateDOMContainer().get(h)),d;const e=t.$$designSystem$$;if(e)return e;const n=o.DI.getOrCreateDOMContainer(t);if(n.has(h,!1))return n.get(h);{const e=new p(t,n);return n.register(o.YM.instance(h,e)),e}}});class p{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>u.definitionCallbackOnly,null!==t&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,n=[],r=this.disambiguate,o=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(t,a,s){const d=function(t,e,n){return"string"==typeof t?{name:t,type:e,callback:n}:t}(t,a,s),{name:h,callback:f,baseClass:p}=d;let{type:v}=d,m=h,b=l.get(m),y=!0;for(;b;){const t=r(m,v,b);switch(t){case u.ignoreDuplicate:return;case u.definitionCallbackOnly:y=!1,b=void 0;break;default:m=t,b=l.get(m)}}y&&((c.has(v)||v===i.I)&&(v=class extends v{}),l.set(m,v),c.set(v,m),p&&c.set(p,m)),n.push(new g(e,m,v,o,f,y))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&a.L.registerRoot(this.designTokenRoot)),e.registerWithContext(s,...t);for(const t of n)t.callback(t),t.willDefine&&null!==t.definition&&t.definition.define();return this}}class g{constructor(t,e,n,r,i,o){this.container=t,this.name=e,this.type=n,this.shadowRootMode=r,this.callback=i,this.willDefine=o,this.definition=null}definePresentation(t){s.v.define(this.name,t,this.container)}defineElement(t){this.definition=new r.W(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return f.tagFor(t)}}},98648:function(t,e,n){n.d(e,{L:function(){return D}});var r=n(20005),i=n(99539),o=n(87697),a=n(89346),s=n(22680);var u=n(12968),l=n(52959);const c=document.createElement("div");class d{setProperty(t,e){u.SO.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){u.SO.queueUpdate((()=>this.target.removeProperty(t)))}}class h extends d{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class f extends d{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class p{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),o.y$.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),u.SO.queueUpdate((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),u.SO.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:n}=this.style;if(n){const t=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[t].style}else this.target=null}}(0,r.gn)([o.LO],p.prototype,"target",void 0);class g{constructor(t){this.target=t.style}setProperty(t,e){u.SO.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){u.SO.queueUpdate((()=>this.target.removeProperty(t)))}}class v{setProperty(t,e){v.properties[t]=e;for(const n of v.roots.values())y.getOrCreate(v.normalizeRoot(n)).setProperty(t,e)}removeProperty(t){delete v.properties[t];for(const e of v.roots.values())y.getOrCreate(v.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=v;if(!e.has(t)){e.add(t);const n=y.getOrCreate(this.normalizeRoot(t));for(const t in v.properties)n.setProperty(t,v.properties[t])}}static unregisterRoot(t){const{roots:e}=v;if(e.has(t)){e.delete(t);const n=y.getOrCreate(v.normalizeRoot(t));for(const t in v.properties)n.removeProperty(t)}}static normalizeRoot(t){return t===c?document:t}}v.roots=new Set,v.properties={};const m=new WeakMap,b=u.SO.supportsAdoptedStyleSheets?class extends d{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(l.XL.create([e]))}}:p,y=Object.freeze({getOrCreate(t){if(m.has(t))return m.get(t);let e;return t===c?e=new v:t instanceof Document?e=u.SO.supportsAdoptedStyleSheets?new h:new f:e=t instanceof a.H?new b(t):new g(t),m.set(t,e),e}});class w extends i.v{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,null!==t.cssCustomPropertyName&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=w.uniqueId(),w.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new w({name:"string"==typeof t?t:t.name,cssCustomPropertyName:"string"==typeof t?t:void 0===t.cssCustomPropertyName?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return"string"==typeof t.cssCustomProperty}static isDerivedDesignTokenValue(t){return"function"==typeof t}static getTokenById(t){return w.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=F.getOrCreate(t).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof w&&(e=this.alias(e)),F.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),F.existsFor(t)&&F.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(c,t),this}subscribe(t,e){const n=this.getOrCreateSubscriberSet(e);e&&!F.existsFor(e)&&F.getOrCreate(e),n.has(t)||n.add(t)}unsubscribe(t,e){const n=this.subscribers.get(e||this);n&&n.has(t)&&n.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach((t=>t.handleChange(e))),this.subscribers.has(t)&&this.subscribers.get(t).forEach((t=>t.handleChange(e)))}alias(t){return e=>t.getValueFor(e)}}w.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),w.tokensById=new Map;class x{constructor(t,e,n){this.source=t,this.token=e,this.node=n,this.dependencies=new Set,this.observer=o.y$.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,o.Wp))}}class C{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),o.y$.getNotifier(this).notify(t.id))}get(t){return o.y$.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const S=new WeakMap,k=new WeakMap;class F{constructor(t){this.target=t,this.store=new C,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,e)=>{const n=w.getTokenById(e);if(n&&(n.notify(this.target),w.isCSSDesignToken(n))){const e=this.parent,r=this.isReflecting(n);if(e){const i=e.get(n),o=t.get(n);i===o||r?i===o&&r&&this.stopReflectToCSS(n):this.reflectToCSS(n)}else r||this.reflectToCSS(n)}}},S.set(t,this),o.y$.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof a.H?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return S.get(t)||new F(t)}static existsFor(t){return S.has(t)}static findParent(t){if(c!==t.target){let e=(0,s.T)(t.target);for(;null!==e;){if(S.has(e))return S.get(e);e=(0,s.T)(e)}return F.getOrCreate(c)}return null}static findClosestAssignedNode(t,e){let n=e;do{if(n.has(t))return n;n=n.parent?n.parent:n.target!==c?F.getOrCreate(c):null}while(null!==n);return null}get parent(){return k.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(void 0!==e)return e;const n=this.getRaw(t);return void 0!==n?(this.hydrate(t,n),this.get(t)):void 0}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):null===(e=F.findClosestAssignedNode(t,this))||void 0===e?void 0:e.getRaw(t)}set(t,e){w.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),w.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=F.findParent(this);t&&t.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){if(this.parent){k.get(this).removeChild(this)}}appendChild(t){t.parent&&k.get(t).removeChild(t);const e=this.children.filter((e=>t.contains(e)));k.set(t,this),this.children.push(t),e.forEach((e=>t.appendChild(e))),o.y$.getNotifier(this.store).subscribe(t);for(const[e,n]of this.store.all())t.hydrate(e,this.bindingObservers.has(e)?this.getRaw(e):n)}removeChild(t){const e=this.children.indexOf(t);return-1!==e&&this.children.splice(e,1),o.y$.getNotifier(this.store).unsubscribe(t),t.parent===this&&k.delete(t)}contains(t){return function(t,e){let n=e;for(;null!==n;){if(n===t)return!0;n=(0,s.T)(n)}return!1}(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),F.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),F.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const n=w.getTokenById(e);n&&this.hydrate(n,this.getRaw(n))}hydrate(t,e){if(!this.has(t)){const n=this.bindingObservers.get(t);w.isDerivedDesignTokenValue(e)?n?n.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(n&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const n=new x(e,t,this);return this.bindingObservers.set(t,n),n}tearDownBindingObserver(t){return!!this.bindingObservers.has(t)&&(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0)}}F.cssCustomPropertyReflector=new class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:n}=t;this.add(e,n)}add(t,e){y.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(F.getOrCreate(e).get(t)))}remove(t,e){y.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}},(0,r.gn)([o.LO],F.prototype,"children",void 0);const D=Object.freeze({create:function(t){return w.from(t)},notifyConnection:t=>!(!t.isConnected||!F.existsFor(t))&&(F.getOrCreate(t).bind(),!0),notifyDisconnection:t=>!(t.isConnected||!F.existsFor(t))&&(F.getOrCreate(t).unbind(),!0),registerRoot(t=c){v.registerRoot(t)},unregisterRoot(t=c){v.unregisterRoot(t)}})},72815:function(t,e,n){n.d(e,{DI:function(){return f},YM:function(){return A},f3:function(){return v}});var r=n(89346),i=n(89694);const o=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(t,e,n){let r=o.get(n);void 0===r&&o.set(n,r=new Map),r.set(t,e)},Reflect.getOwnMetadata=function(t,e){const n=o.get(e);if(void 0!==n)return n.get(t)});class a{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,L(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:n,key:r}=this;return this.container=this.key=void 0,n.registerResolver(r,new x(r,t,e))}}function s(t){const e=t.slice(),n=Object.keys(t),r=n.length;let i;for(let o=0;o<r;++o)i=n[o],M(i)||(e[i]=t[i]);return e}const u=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton:t=>new x(t,1,t),transient:t=>new x(t,2,t)}),l=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:u.singleton})}),c=new Map;function d(t){return e=>Reflect.getOwnMetadata(t,e)}let h=null;const f=Object.freeze({createContainer:t=>new P(null,Object.assign({},l.default,t)),findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:f.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(_,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||f.getOrCreateDOMContainer()},getOrCreateDOMContainer:(t,e)=>t?t.$$container$$||new P(t,Object.assign({},l.default,e,{parentLocator:f.findParentContainer})):h||(h=new P(null,Object.assign({},l.default,e,{parentLocator:()=>null}))),getDesignParamtypes:d("design:paramtypes"),getAnnotationParamtypes:d("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return void 0===e&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=c.get(t);if(void 0===e){const n=t.inject;if(void 0===n){const n=f.getDesignParamtypes(t),r=f.getAnnotationParamtypes(t);if(void 0===n)if(void 0===r){const n=Object.getPrototypeOf(t);e="function"==typeof n&&n!==Function.prototype?s(f.getDependencies(n)):[]}else e=s(r);else if(void 0===r)e=s(n);else{e=s(n);let t,i=r.length;for(let n=0;n<i;++n)t=r[n],void 0!==t&&(e[n]=t);const o=Object.keys(r);let a;i=o.length;for(let t=0;t<i;++t)a=o[t],M(a)||(e[a]=r[a])}}else e=s(n);c.set(t,e)}return e},defineProperty(t,e,n,i=!1){const o=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[o];if(void 0===t){const a=this instanceof HTMLElement?f.findResponsibleContainer(this):f.getOrCreateDOMContainer();if(t=a.get(n),this[o]=t,i&&this instanceof r.H){const r=this.$fastController,i=()=>{f.findResponsibleContainer(this).get(n)!==this[o]&&(this[o]=t,r.notify(e))};r.subscribe({handleChange:i},"isConnected")}}return t}})},createInterface(t,e){const n="function"==typeof t?t:e,r="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||N,i="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),o=function(t,e,n){if(null==t||void 0!==new.target)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(e)f.defineProperty(t,e,o,i);else{f.getOrCreateAnnotationParamTypes(t)[n]=o}};return o.$isInterface=!0,o.friendlyName=null==r?"(anonymous)":r,null!=n&&(o.register=function(t,e){return n(new a(t,null!=e?e:o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject:(...t)=>function(e,n,r){if("number"==typeof r){const n=f.getOrCreateAnnotationParamTypes(e),i=t[0];void 0!==i&&(n[r]=i)}else if(n)f.defineProperty(e,n,t[0]);else{const n=r?f.getOrCreateAnnotationParamTypes(r.value):f.getOrCreateAnnotationParamTypes(e);let i;for(let e=0;e<t.length;++e)i=t[e],void 0!==i&&(n[e]=i)}},transient:t=>(t.register=function(e){return A.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=m)=>(t.register=function(e){return A.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),p=f.createInterface("Container");function g(t){return function(e){const n=function(t,e,r){f.inject(n)(t,e,r)};return n.$isResolver=!0,n.resolve=function(n,r){return t(e,n,r)},n}}const v=f.inject;const m={scoped:!1};b=(t,e,n,r)=>n.getAll(t,r);var b;g(((t,e,n)=>()=>n.get(t))),g(((t,e,n)=>n.has(t,!0)?n.get(t):void 0));function y(t,e,n){f.inject(y)(t,e,n)}y.$isResolver=!0,y.resolve=()=>{};g(((t,e,n)=>{const r=w(t,e),i=new x(t,0,r);return n.registerResolver(t,i),r})),g(((t,e,n)=>w(t,e)));function w(t,e){return e.getFactory(t).construct(e)}class x{constructor(t,e,n){this.key=t,this.strategy=e,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=t.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,n,r;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(r=null===(n=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===n?void 0:n.call(e,t))&&void 0!==r?r:null;default:return null}}}function C(t){return this.get(t)}function S(t,e){return e(t)}class k{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let n;return n=void 0===e?new this.Type(...this.dependencies.map(C,t)):new this.Type(...this.dependencies.map(C,t),...e),null==this.transformers?n:this.transformers.reduce(S,n)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const F={$isResolver:!0,resolve:(t,e)=>e};function D(t){return"function"==typeof t.register}function $(t){return function(t){return D(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const O=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),_="__DI_LOCATE_PARENT__",T=new Map;class P{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==t&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(p,F),t instanceof Node&&t.addEventListener(_,(t=>{t.composedPath()[0]!==this.owner&&(t.detail.container=this,t.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,n,r,i,o;const a=this.context;for(let s=0,u=t.length;s<u;++s)if(e=t[s],V(e))if(D(e))e.register(this,a);else if(void 0!==e.prototype)A.singleton(e,e).register(this);else for(n=Object.keys(e),i=0,o=n.length;i<o;++i)r=e[n[i]],V(r)&&(D(r)?r.register(this,a):this.register(r));return--this.registerDepth,this}registerResolver(t,e){j(t);const n=this.resolvers,r=n.get(t);return null==r?n.set(t,e):r instanceof x&&4===r.strategy?r.state.push(e):n.set(t,new x(t,4,[r,e])),e}registerTransformer(t,e){const n=this.getResolver(t);if(null==n)return!1;if(n.getFactory){const t=n.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(j(t),void 0!==t.resolve)return t;let n,r=this;for(;null!=r;){if(n=r.resolvers.get(t),null!=n)return n;if(null==r.parent){const n=$(t)?this:r;return e?this.jitRegister(t,n):null}r=r.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}get(t){if(j(t),t.$isResolver)return t.resolve(this,this);let e,n=this;for(;null!=n;){if(e=n.resolvers.get(t),null!=e)return e.resolve(n,this);if(null==n.parent){const r=$(t)?this:n;return e=this.jitRegister(t,r),e.resolve(n,this)}n=n.parent}throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){j(t);const n=this;let r,o=n;if(e){let e=i.ow;for(;null!=o;)r=o.resolvers.get(t),null!=r&&(e=e.concat(B(r,o,n))),o=o.parent;return e}for(;null!=o;){if(r=o.resolvers.get(t),null!=r)return B(r,o,n);if(o=o.parent,null==o)return i.ow}return i.ow}getFactory(t){let e=T.get(t);if(void 0===e){if(E(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);T.set(t,e=new k(t,f.getDependencies(t)))}return e}registerFactory(t,e){T.set(t,e)}createChild(t){return new P(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(O.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(D(t)){const n=t.register(e);if(!(n instanceof Object)||null==n.resolve){const n=e.resolvers.get(t);if(null!=n)return n;throw new Error("A valid resolver was not returned from the static register method")}return n}if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const n=this.config.defaultResolver(t,e);return e.resolvers.set(t,n),n}}}const I=new WeakMap;function L(t){return function(e,n,r){if(I.has(r))return I.get(r);const i=t(e,n,r);return I.set(r,i),i}}const A=Object.freeze({instance:(t,e)=>new x(t,0,e),singleton:(t,e)=>new x(t,1,e),transient:(t,e)=>new x(t,2,e),callback:(t,e)=>new x(t,3,e),cachedCallback:(t,e)=>new x(t,3,L(e)),aliasTo:(t,e)=>new x(e,5,t)});function j(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function B(t,e,n){if(t instanceof x&&4===t.strategy){const r=t.state;let i=r.length;const o=new Array(i);for(;i--;)o[i]=r[i].resolve(e,n);return o}return[t.resolve(e,n)]}const N="(anonymous)";function V(t){return"object"==typeof t&&null!==t||"function"==typeof t}const E=function(){const t=new WeakMap;let e=!1,n="",r=0;return function(i){return e=t.get(i),void 0===e&&(n=i.toString(),r=n.length,e=r>=29&&r<=100&&125===n.charCodeAt(r-1)&&n.charCodeAt(r-2)<=32&&93===n.charCodeAt(r-3)&&101===n.charCodeAt(r-4)&&100===n.charCodeAt(r-5)&&111===n.charCodeAt(r-6)&&99===n.charCodeAt(r-7)&&32===n.charCodeAt(r-8)&&101===n.charCodeAt(r-9)&&118===n.charCodeAt(r-10)&&105===n.charCodeAt(r-11)&&116===n.charCodeAt(r-12)&&97===n.charCodeAt(r-13)&&110===n.charCodeAt(r-14)&&88===n.charCodeAt(r-15),t.set(i,e)),e}}(),R={};function M(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=R[t];if(void 0!==e)return e;const n=t.length;if(0===n)return R[t]=!1;let r=0;for(let e=0;e<n;++e)if(r=t.charCodeAt(e),0===e&&48===r&&n>1||r<48||r>57)return R[t]=!1;return R[t]=!0}default:return!1}}},41613:function(t,e,n){n.d(e,{i:function(){return u}});var r=n(20005),i=n(65620),o=n(15983),a=n(48839);const s="separator";class u extends a.I{constructor(){super(...arguments),this.role=s,this.orientation=o.i.horizontal}}(0,r.gn)([i.Lj],u.prototype,"role",void 0),(0,r.gn)([i.Lj],u.prototype,"orientation",void 0)},48839:function(t,e,n){n.d(e,{I:function(){return s},R:function(){return l}});var r=n(20005),i=n(89346),o=n(87697),a=n(41521);class s extends i.H{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=a.v.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new l(this===s?class extends s{}:this,t,e)}}function u(t,e,n){return"function"==typeof t?t(e,n):t}(0,r.gn)([o.LO],s.prototype,"template",void 0),(0,r.gn)([o.LO],s.prototype,"styles",void 0);class l{constructor(t,e,n){this.type=t,this.elementDefinition=e,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const n=this.definition,r=this.overrideDefinition,i=`${n.prefix||e.elementPrefix}-${n.baseName}`;e.tryDefineElement({name:i,type:this.type,baseClass:this.elementDefinition.baseClass,callback:t=>{const e=new a.B(u(n.template,t,n),u(n.styles,t,n));t.definePresentation(e);let i=u(n.shadowOptions,t,n);t.shadowRootMode&&(i?r.shadowOptions||(i.mode=t.shadowRootMode):null!==i&&(i={mode:t.shadowRootMode})),t.defineElement({elementOptions:u(n.elementOptions,t,n),shadowOptions:i,attributes:u(n.attributes,t,n)})}})}}},7775:function(t,e,n){n.d(e,{v:function(){return o}});var r=n(20005),i=n(65620);class o{}(0,r.gn)([(0,i.Lj)({attribute:"aria-atomic"})],o.prototype,"ariaAtomic",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-busy"})],o.prototype,"ariaBusy",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-controls"})],o.prototype,"ariaControls",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-current"})],o.prototype,"ariaCurrent",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-describedby"})],o.prototype,"ariaDescribedby",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-details"})],o.prototype,"ariaDetails",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-disabled"})],o.prototype,"ariaDisabled",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-errormessage"})],o.prototype,"ariaErrormessage",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-flowto"})],o.prototype,"ariaFlowto",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-haspopup"})],o.prototype,"ariaHaspopup",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-hidden"})],o.prototype,"ariaHidden",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-invalid"})],o.prototype,"ariaInvalid",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-keyshortcuts"})],o.prototype,"ariaKeyshortcuts",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-label"})],o.prototype,"ariaLabel",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-labelledby"})],o.prototype,"ariaLabelledby",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-live"})],o.prototype,"ariaLive",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-owns"})],o.prototype,"ariaOwns",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-relevant"})],o.prototype,"ariaRelevant",void 0),(0,r.gn)([(0,i.Lj)({attribute:"aria-roledescription"})],o.prototype,"ariaRoledescription",void 0)},51208:function(t,e,n){n.d(e,{LC:function(){return a},hW:function(){return o},hX:function(){return l},m9:function(){return s},zq:function(){return u}});var r=n(39181),i=n(58952);class o{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const a=(t,e)=>r.d`
    <span
        part="end"
        ${(0,i.i)("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${(0,i.i)("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,s=(t,e)=>r.d`
    <span
        part="start"
        ${(0,i.i)("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${(0,i.i)("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,u=r.d`
    <span part="end" ${(0,i.i)("endContainer")}>
        <slot
            name="end"
            ${(0,i.i)("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,l=r.d`
    <span part="start" ${(0,i.i)("startContainer")}>
        <slot
            name="start"
            ${(0,i.i)("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`},86076:function(t,e,n){n.d(e,{e:function(){return i}});var r=n(65620);function i(t,...e){const n=r.Ax.locate(t);e.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n))}));r.Ax.locate(e).forEach((t=>n.push(t)))}))}},22680:function(t,e,n){function r(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}n.d(e,{T:function(){return r}})},40082:function(t,e,n){n.d(e,{KJ:function(){return r},Uu:function(){return o},vF:function(){return i},zw:function(){return a}});class r extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,n=this.constructListener(t);n.bind(e)(),e.addListener(n),this.listenerCache.set(t,n)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new r(t,e)}constructListener(t){let e=!1;const n=this.styles;return function(){const{matches:r}=this;r&&!e?(t.$fastController.addStyles(n),e=r):!r&&e&&(t.$fastController.removeStyles(n),e=r)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const i=r.with(window.matchMedia("(forced-colors)")),o=r.with(window.matchMedia("(prefers-color-scheme: dark)")),a=r.with(window.matchMedia("(prefers-color-scheme: light)"))},81493:function(t,e,n){n.d(e,{w:function(){return i}});var r=n(87697);class i{constructor(t,e,n){this.propertyName=t,this.value=e,this.styles=n}bind(t){r.y$.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){r.y$.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}},67020:function(t,e,n){n.d(e,{j:function(){return r}});function r(t){return`:host([hidden]){display:none}:host{display:${t}}`}},56201:function(t,e,n){n.d(e,{b:function(){return r}});const r=(0,n(67846).Zm)()?"focus-visible":"focus"},15983:function(t,e,n){n.d(e,{i:function(){return r}});const r={horizontal:"horizontal",vertical:"vertical"}},67846:function(t,e,n){n.d(e,{Re:function(){return i},UM:function(){return o},Zm:function(){return s}});var r=n(39619);function i(...t){return t.every((t=>t instanceof HTMLElement))}function o(t,e){if(!t||!e||!i(t))return;return Array.from(t.querySelectorAll(e)).filter((t=>null!==t.offsetParent))}let a;function s(){if("boolean"==typeof a)return a;if(!(0,r.N)())return a=!1,a;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),a=!0}catch(t){a=!1}finally{document.head.removeChild(t)}return a}},36153:function(t,e,n){var r;n.d(e,{BE:function(){return o},BI:function(){return h},CX:function(){return l},Kh:function(){return d},SB:function(){return s},iF:function(){return i},kL:function(){return u},mr:function(){return a},oM:function(){return f},tU:function(){return c},uf:function(){return p}}),function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(r||(r={}));const i="ArrowDown",o="ArrowLeft",a="ArrowRight",s="ArrowUp",u="Enter",l="Escape",c="Home",d="End",h=" ",f="Tab",p={ArrowDown:i,ArrowLeft:o,ArrowRight:a,ArrowUp:s}},78945:function(t,e,n){function r(t,e,n){return n<t?e:n>e?t:n}function i(t,e,n=0){return[e,n]=[e,n].sort(((t,e)=>t-e)),e<=t&&t<n}n.d(e,{Z2:function(){return i},wt:function(){return r}})}}]);