define(["exports","metal-dom/src/all/dom","../globals/globals","metal-uri/src/Uri"],function(e,t,r,n){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=u(r),i=u(n),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(){function e(){a(this,e)}return c(e,null,[{key:"copyNodeAttributes",value:function(e,t){Array.prototype.slice.call(e.attributes).forEach(function(e){return t.setAttribute(e.name,e.value)})}},{key:"debounce",value:function(t,r){return function n(){var u=arguments;e.cancelDebounce(n),n.id=setTimeout(function(){t(Array.prototype.slice.call(u))},r)}}},{key:"cancelDebounce",value:function(e){clearTimeout(e.id)}},{key:"getCurrentBrowserPath",value:function(){return this.getCurrentBrowserPathWithoutHash()+o["default"].window.location.hash}},{key:"getCurrentBrowserPathWithoutHash",value:function(){return o["default"].window.location.pathname+o["default"].window.location.search}},{key:"getNodeOffset",value:function(e){var t=0,r=0;do t+=e.offsetLeft,r+=e.offsetTop,e=e.offsetParent;while(e);return{offsetLeft:t,offsetTop:r}}},{key:"getUrlPath",value:function(e){var t=new i["default"](e);return t.getPathname()+t.getSearch()+t.getHash()}},{key:"getUrlPathWithoutHash",value:function(e){var t=new i["default"](e);return t.getPathname()+t.getSearch()}},{key:"getUrlPathWithoutHashAndSearch",value:function(e){var t=new i["default"](e);return t.getPathname()}},{key:"isCurrentBrowserPath",value:function(t){if(t){var r=this.getCurrentBrowserPathWithoutHash();return e.getUrlPathWithoutHash(t)===this.getUrlPath(r)}return!1}},{key:"isChrome",value:function(){return(e.matchUserAgent("Chrome")||e.matchUserAgent("CriOs"))&&!e.isOpera()&&!e.isEdge()}},{key:"isEdge",value:function(){return e.matchUserAgent("Edge")}},{key:"isIe",value:function(){return e.matchUserAgent("Trident")||e.matchUserAgent("MSIE")}},{key:"isIeOrEdge",value:function(){return e.isIe()||e.isEdge()}},{key:"isOpera",value:function(){return e.matchUserAgent("Opera")||e.matchUserAgent("OPR")}},{key:"isSafari",value:function(){return e.matchUserAgent("Safari")&&!(e.isChrome()||e.isOpera()||e.isEdge())}},{key:"matchUserAgent",value:function(e){var t=o["default"].window.navigator;if(!t||!t.userAgent)return!1;var r=t.userAgent;return r.indexOf(e)!==-1}},{key:"isHtml5HistorySupported",value:function(){return!(!o["default"].window.history||!o["default"].window.history.pushState)}},{key:"isWebUri",value:function(e){try{return new i["default"](e)}catch(t){return!1}}},{key:"clearNodeAttributes",value:function(e){Array.prototype.slice.call(e.attributes).forEach(function(t){return e.removeAttribute(t.name)})}},{key:"removeElementsFromDocument",value:function(e){e.forEach(function(e){return(0,t.exitDocument)(e)})}},{key:"removePathTrailingSlash",value:function(e){var t=e?e.length:0;return t>1&&"/"===e[t-1]&&(e=e.substr(0,t-1)),e}},{key:"setElementWithRandomHref",value:function(e){return e.href=e.href+"?q="+Math.random(),e}},{key:"setReferrer",value:function(e){Object.defineProperty(o["default"].document,"referrer",{configurable:!0,get:function(){return e}})}}]),e}();e["default"]=l});