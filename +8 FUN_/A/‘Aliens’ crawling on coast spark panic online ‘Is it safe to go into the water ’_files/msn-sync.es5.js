!function(){try{window.PartnerCookieSyncObject=window.PartnerCookieSyncObject||{};var n="taboola global:user-id",t="community_latest_me_id",e="m-",o="MUID",r=window.localStorage,i=function t(){var e=null;if(r)try{e=r.getItem(n)}catch(n){e=null}return e},a=function t(e){if(r&&e)try{r.setItem(n,e)}catch(n){return null}},c=function n(t){var e=i();if(e)return e;var o="https://api.taboola.com/1.2/json/taboola-usersync/user.sync?app.type=desktop&app.apikey=e60e3b54fc66bae12e060a4a66536126f26e6cf8".concat(t?"&user.id=".concat(t):"");try{var r=new XMLHttpRequest;return r.open("GET",o,!1),r.send(),200!==r.status?null:(e=JSON.parse(r.responseText).user.id,a(e),e)}catch(n){return null}},s=function t(e){var o="https://trc.taboola.com/sg/msn/1/cm?taboola_hm=";try{var i=r.getItem(n),a=new XMLHttpRequest;a.open("GET",o+e+(i?"&ui=".concat(i):""),!1),a.send()}catch(n){console.log(n)}},d=function n(t){for(var e="".concat(t,"="),o,r=decodeURIComponent(document.cookie).split(";"),i=0;i<r.length;i++){for(var a=r[i];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return""},u=function n(){var i=d(o);if(i)return i;var a=r.getItem(t);return a&&a.startsWith(e)?a.substring(e.length):void 0},w=function n(t){t&&((new Image).src="https://dis.criteo.com/dis/usersync.aspx?r=29&p=282&cp=taboolaortb&cu=1&url=https%3A%2F%2Fsync-t1.taboola.com%2Fsg%2Fcriteortb-network%2F1%2Frtb-h%2F%3Ftaboola_hm%3D%40%40CRITEO_USERID%40%40%26ui%3D".concat(encodeURIComponent(t)),(new Image).src="https://sync.im-apps.net/imid/set?cid=1003212&tid=tblid&uid=".concat(t))};if(window.PartnerCookieSyncObject.syncMuid=s,window.PartnerCookieSyncObject.getPartnerIdentifier=c,"function"==typeof define)define("PartnerSync",[],function(){return window.PartnerCookieSyncObject});else{var f=u(),l;if(f)w(c(f)),s(f)}}catch(n){window.__trcError&&window.__trcError("msn-sync Error",n)}}(),function(){var n="tsdtocl",t="!-#@",e="ul",o="https:",r=atob("aHR0cHM6Ly90c2R0b2NsLmNvbQ=="),i={},a=o,c=-1,s,d;try{var u=function n(t){i[t.id]&&(i[t.id](t),delete i[t.id])},w=function t(e){var o;try{o=JSON.parse(e.data)}catch(n){}o&&o.namespace===n&&u(o)},f=function t(e,o,r,a){if(s){i[++c]=a;var d={namespace:n,id:c,action:e,key:o,value:r};return s&&s.contentWindow&&s.contentWindow.postMessage(JSON.stringify(d),"*"),d}},l=function n(t,e,o){return f("append",t,e,o)},p=function n(e){if(e&&"string"==typeof e&&-1!==e.indexOf(t)){var o=new Image;return o.src="".concat(a,"//trc.taboola.com/sg/taboola-ifs/1/um/?uils=").concat(encodeURIComponent(e)),o}},g=function n(t){if(t&&t.success){if(t.wasAppended&&t.value)return p(t.value)}else window.__trcDebug&&window.__trcDebug("ifsDebug=".concat(t?JSON.stringify(t):"null"));s&&s.remove(),window.removeEventListener("message",w,!1)},m=function n(){if(d)return l(e,d,g)},y=function n(){try{return window.localStorage["taboola global:user-id"]}catch(n){return null}},b=function n(){var t=window.TFASC&&window.TFASC.tfaUserId&&"function"==typeof window.TFASC.tfaUserId.getUserId?window.TFASC.tfaUserId.getUserId():null,e=window.TRC&&window.TRC.pageManager&&"function"==typeof window.TRC.pageManager.getUserId?window.TRC.pageManager.getUserId():null,o=y();return t||e||o},v=function n(t){window.addEventListener("message",w,!1),(s=document.createElement("iframe")).style.display="none",s.addEventListener("load",t),s.src=r,document.body.appendChild(s)},C=function n(){window.TRC.ifs.initialized||((d=b())&&(document.body?v(m):document.addEventListener("DOMContentLoaded",function(){v(m)})),window.TRC.ifs.initialized=!0)};window.TRC=window.TRC||{},window.TRC.ifs=window.TRC.ifs||{},C()}catch(n){window.__trcError&&window.__trcError("ifsError",n)}}();