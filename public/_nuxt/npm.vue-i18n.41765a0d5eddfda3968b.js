/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{92:function(t,e,n){"use strict";var r=["style","currency","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","localeMatcher","formatMatcher","unit"];function o(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}var l=Array.isArray;function c(t){return null!==t&&"object"==typeof t}function h(t){return"string"==typeof t}var f=Object.prototype.toString;function m(t){return"[object Object]"===f.call(t)}function _(t){return null==t}function v(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=null,r=null;return 1===t.length?c(t[0])||Array.isArray(t[0])?r=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(c(t[1])||Array.isArray(t[1]))&&(r=t[1])),{locale:n,params:r}}function d(t){return JSON.parse(JSON.stringify(t))}function y(t,e){return!!~t.indexOf(e)}var F=Object.prototype.hasOwnProperty;function k(t,e){return F.call(t,e)}function w(t){for(var e=arguments,output=Object(t),i=1;i<arguments.length;i++){var source=e[i];if(null!=source){var n=void 0;for(n in source)k(source,n)&&(c(source[n])?output[n]=w(output[n],source[n]):output[n]=source[n])}}return output}function $(a,b){if(a===b)return!0;var t=c(a),e=c(b);if(!t||!e)return!t&&!e&&String(a)===String(b);try{var n=Array.isArray(a),r=Array.isArray(b);if(n&&r)return a.length===b.length&&a.every((function(t,i){return $(t,b[i])}));if(n||r)return!1;var o=Object.keys(a),l=Object.keys(b);return o.length===l.length&&o.every((function(t){return $(a[t],b[t])}))}catch(t){return!1}}var M={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n)if(t.i18n instanceof et){if(t.__i18n)try{var e={};t.__i18n.forEach((function(t){e=w(e,JSON.parse(t))})),Object.keys(e).forEach((function(n){t.i18n.mergeLocaleMessage(n,e[n])}))}catch(t){0}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(m(t.i18n)){var n=this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof et?this.$root.$i18n:null;if(n&&(t.i18n.root=this.$root,t.i18n.formatter=n.formatter,t.i18n.fallbackLocale=n.fallbackLocale,t.i18n.formatFallbackMessages=n.formatFallbackMessages,t.i18n.silentTranslationWarn=n.silentTranslationWarn,t.i18n.silentFallbackWarn=n.silentFallbackWarn,t.i18n.pluralizationRules=n.pluralizationRules,t.i18n.preserveDirectiveContent=n.preserveDirectiveContent),t.__i18n)try{var r={};t.__i18n.forEach((function(t){r=w(r,JSON.parse(t))})),t.i18n.messages=r}catch(t){0}var o=t.i18n.sharedMessages;o&&m(o)&&(t.i18n.messages=w(t.i18n.messages,o)),this._i18n=new et(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale()),n&&n.onComponentInstanceCreated(this._i18n)}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof et?this._i18n=this.$root.$i18n:t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof et&&(this._i18n=t.parent.$i18n)},beforeMount:function(){var t=this.$options;t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n?(t.i18n instanceof et||m(t.i18n))&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof et||t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof et)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick((function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher)}))}}},T={name:"i18n",functional:!0,props:{tag:{type:[String,Boolean],default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var data=e.data,n=e.parent,r=e.props,o=e.slots,l=n.$i18n;if(l){var path=r.path,c=r.locale,h=r.places,f=o(),m=l.i(path,c,function(t){var e;for(e in t)if("default"!==e)return!1;return Boolean(e)}(f)||h?function(t,e){var n=e?function(t){0;return Array.isArray(t)?t.reduce(L,{}):Object.assign({},t)}(e):{};if(!t)return n;var r=(t=t.filter((function(t){return t.tag||""!==t.text.trim()}))).every(I);0;return t.reduce(r?C:L,n)}(f.default,h):f),_=r.tag&&!0!==r.tag||!1===r.tag?r.tag:"span";return _?t(_,data,m):m}}};function C(t,e){return e.data&&e.data.attrs&&e.data.attrs.place&&(t[e.data.attrs.place]=e),t}function L(t,e,n){return t[n]=e,t}function I(t){return Boolean(t.data&&t.data.attrs&&t.data.attrs.place)}var D,O={name:"i18n-n",functional:!0,props:{tag:{type:[String,Boolean],default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var n=e.props,o=e.parent,data=e.data,l=o.$i18n;if(!l)return null;var f=null,m=null;h(n.format)?f=n.format:c(n.format)&&(n.format.key&&(f=n.format.key),m=Object.keys(n.format).reduce((function(t,e){var o;return y(r,e)?Object.assign({},t,((o={})[e]=n.format[e],o)):t}),null));var _=n.locale||l.locale,v=l._ntp(n.value,_,f,m),d=v.map((function(t,e){var n,slot=data.scopedSlots&&data.scopedSlots[t.type];return slot?slot(((n={})[t.type]=t.value,n.index=e,n.parts=v,n)):t.value})),F=n.tag&&!0!==n.tag||!1===n.tag?n.tag:"span";return F?t(F,{attrs:data.attrs,class:data.class,staticClass:data.staticClass},d):d}};function x(t,e,n){N(t,n)&&A(t,e,n)}function W(t,e,n,r){if(N(t,n)){var o=n.context.$i18n;(function(t,e){var n=e.context;return t._locale===n.$i18n.locale})(t,n)&&$(e.value,e.oldValue)&&$(t._localeMessage,o.getLocaleMessage(o.locale))||A(t,e,n)}}function j(t,e,n,r){if(n.context){var l=n.context.$i18n||{};e.modifiers.preserve||l.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t._vt,t._locale=void 0,delete t._locale,t._localeMessage=void 0,delete t._localeMessage}else o("Vue instance does not exists in VNode context")}function N(t,e){var n=e.context;return n?!!n.$i18n||(o("VueI18n instance does not exists in Vue instance"),!1):(o("Vue instance does not exists in VNode context"),!1)}function A(t,e,n){var r,l,c=function(t){var path,e,n,r;h(t)?path=t:m(t)&&(path=t.path,e=t.locale,n=t.args,r=t.choice);return{path:path,locale:e,args:n,choice:r}}(e.value),path=c.path,f=c.locale,_=c.args,v=c.choice;if(path||f||_)if(path){var d=n.context;t._vt=t.textContent=null!=v?(r=d.$i18n).tc.apply(r,[path,v].concat(S(f,_))):(l=d.$i18n).t.apply(l,[path].concat(S(f,_))),t._locale=d.$i18n.locale,t._localeMessage=d.$i18n.getLocaleMessage(d.$i18n.locale)}else o("`path` is required in v-t directive");else o("value type not supported")}function S(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||m(e))&&n.push(e),n}function R(t){R.installed=!0;(D=t).version&&Number(D.version.split(".")[0]);(function(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var o=this.$i18n;return o._tc.apply(o,[t,o.locale,o._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}})(D),D.mixin(M),D.directive("t",{bind:x,update:W,unbind:j}),D.component(T.name,T),D.component(O.name,O),D.config.optionMergeStrategies.i18n=function(t,e){return void 0===e?t:e}}var H=function(){this._caches=Object.create(null)};H.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=function(t){var e=[],n=0,text="";for(;n<t.length;){var r=t[n++];if("{"===r){text&&e.push({type:"text",value:text}),text="";var sub="";for(r=t[n++];void 0!==r&&"}"!==r;)sub+=r,r=t[n++];var o="}"===r,l=P.test(sub)?"list":o&&V.test(sub)?"named":"unknown";e.push({value:sub,type:l})}else"%"===r?"{"!==t[n]&&(text+=r):text+=r}return text&&e.push({type:"text",value:text}),e}(t),this._caches[t]=n),function(t,e){var n=[],r=0,o=Array.isArray(e)?"list":c(e)?"named":"unknown";if("unknown"===o)return n;for(;r<t.length;){var l=t[r];switch(l.type){case"text":n.push(l.value);break;case"list":n.push(e[parseInt(l.value,10)]);break;case"named":"named"===o&&n.push(e[l.value]);break;case"unknown":0}r++}return n}(n,e)};var P=/^(?:\d)+/,V=/^(?:\w)+/;var E=[];E[0]={ws:[0],ident:[3,0],"[":[4],eof:[7]},E[1]={ws:[1],".":[2],"[":[4],eof:[7]},E[2]={ws:[2],ident:[3,0],0:[3,0],number:[3,0]},E[3]={ident:[3,0],0:[3,0],number:[3,0],ws:[1,1],".":[2,1],"[":[4,1],eof:[7,1]},E[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],eof:8,else:[4,0]},E[5]={"'":[4,0],eof:8,else:[5,0]},E[6]={'"':[4,0],eof:8,else:[6,0]};var z=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function B(t){if(null==t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function J(path){var t,a,e,n=path.trim();return("0"!==path.charAt(0)||!isNaN(path))&&(e=n,z.test(e)?(a=(t=n).charCodeAt(0))!==t.charCodeAt(t.length-1)||34!==a&&39!==a?t:t.slice(1,-1):"*"+n)}var U=function(){this._cache=Object.create(null)};U.prototype.parsePath=function(path){var t=this._cache[path];return t||(t=function(path){var t,e,n,r,o,l,c,h=[],f=-1,m=0,_=0,v=[];function d(){var t=path[f+1];if(5===m&&"'"===t||6===m&&'"'===t)return f++,n="\\"+t,v[0](),!0}for(v[1]=function(){void 0!==e&&(h.push(e),e=void 0)},v[0]=function(){void 0===e?e=n:e+=n},v[2]=function(){v[0](),_++},v[3]=function(){if(_>0)_--,m=4,v[0]();else{if(_=0,void 0===e)return!1;if(!1===(e=J(e)))return!1;v[1]()}};null!==m;)if(f++,"\\"!==(t=path[f])||!d()){if(r=B(t),8===(o=(c=E[m])[r]||c.else||8))return;if(m=o[0],(l=v[o[1]])&&(n=void 0===(n=o[2])?t:n,!1===l()))return;if(7===m)return h}}(path))&&(this._cache[path]=t),t||[]},U.prototype.getPathValue=function(t,path){if(!c(t))return null;var e=this.parsePath(path);if(0===e.length)return null;for(var n=e.length,r=t,i=0;i<n;){var o=r[e[i]];if(void 0===o)return null;r=o,i++}return r};var G,X=/<\/?[\w\s="/.':;#-\/]+>/,Z=/(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,K=/^@(?:\.([a-z]+))?:/,Q=/[()]/g,Y={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()},capitalize:function(t){return""+t.charAt(0).toLocaleUpperCase()+t.substr(1)}},tt=new H,et=function(t){var e=this;void 0===t&&(t={}),!D&&"undefined"!=typeof window&&window.Vue&&R(window.Vue);var n=t.locale||"en-US",r=!1!==t.fallbackLocale&&(t.fallbackLocale||"en-US"),o=t.messages||{},l=t.dateTimeFormats||{},c=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||tt,this._modifiers=t.modifiers||{},this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._formatFallbackMessages=void 0!==t.formatFallbackMessages&&!!t.formatFallbackMessages,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new U,this._dataListeners=[],this._componentInstanceCreatedListener=t.componentInstanceCreatedListener||null,this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._warnHtmlInMessage=t.warnHtmlInMessage||"off",this._postTranslation=t.postTranslation||null,this.getChoiceIndex=function(t,n){var r=Object.getPrototypeOf(e);if(r&&r.getChoiceIndex)return r.getChoiceIndex.call(e,t,n);var o,l;return e.locale in e.pluralizationRules?e.pluralizationRules[e.locale].apply(e,[t,n]):(o=t,l=n,o=Math.abs(o),2===l?o?o>1?1:0:1:o?Math.min(o,2):0)},this._exist=function(t,n){return!(!t||!n)&&(!_(e._path.getPathValue(t,n))||!!t[n])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(o).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,o[t])})),this._initVM({locale:n,fallbackLocale:r,messages:o,dateTimeFormats:l,numberFormats:c})},nt={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0},postTranslation:{configurable:!0}};et.prototype._checkLocaleMessage=function(t,e,n){var r=function(t,e,n,l){if(m(n))Object.keys(n).forEach((function(o){var c=n[o];m(c)?(l.push(o),l.push("."),r(t,e,c,l),l.pop(),l.pop()):(l.push(o),r(t,e,c,l),l.pop())}));else if(Array.isArray(n))n.forEach((function(n,o){m(n)?(l.push("["+o+"]"),l.push("."),r(t,e,n,l),l.pop(),l.pop()):(l.push("["+o+"]"),r(t,e,n,l),l.pop())}));else if(h(n)){if(X.test(n)){var c="Detected HTML in message '"+n+"' of keypath '"+l.join("")+"' at '"+e+"'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";"warn"===t?o(c):"error"===t&&function(t,e){"undefined"!=typeof console&&(console.error("[vue-i18n] "+t),e&&console.error(e.stack))}(c)}}};r(e,t,n,[])},et.prototype._initVM=function(data){var t=D.config.silent;D.config.silent=!0,this._vm=new D({data:data}),D.config.silent=t},et.prototype.destroyVM=function(){this._vm.$destroy()},et.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},et.prototype.unsubscribeDataChanging=function(t){!function(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)t.splice(n,1)}}(this._dataListeners,t)},et.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",(function(){for(var i=t._dataListeners.length;i--;)D.nextTick((function(){t._dataListeners[i]&&t._dataListeners[i].$forceUpdate()}))}),{deep:!0})},et.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",(function(e){t.$set(t,"locale",e),t.$forceUpdate()}),{immediate:!0})},et.prototype.onComponentInstanceCreated=function(t){this._componentInstanceCreatedListener&&this._componentInstanceCreatedListener(t,this)},nt.vm.get=function(){return this._vm},nt.messages.get=function(){return d(this._getMessages())},nt.dateTimeFormats.get=function(){return d(this._getDateTimeFormats())},nt.numberFormats.get=function(){return d(this._getNumberFormats())},nt.availableLocales.get=function(){return Object.keys(this.messages).sort()},nt.locale.get=function(){return this._vm.locale},nt.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},nt.fallbackLocale.get=function(){return this._vm.fallbackLocale},nt.fallbackLocale.set=function(t){this._localeChainCache={},this._vm.$set(this._vm,"fallbackLocale",t)},nt.formatFallbackMessages.get=function(){return this._formatFallbackMessages},nt.formatFallbackMessages.set=function(t){this._formatFallbackMessages=t},nt.missing.get=function(){return this._missing},nt.missing.set=function(t){this._missing=t},nt.formatter.get=function(){return this._formatter},nt.formatter.set=function(t){this._formatter=t},nt.silentTranslationWarn.get=function(){return this._silentTranslationWarn},nt.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},nt.silentFallbackWarn.get=function(){return this._silentFallbackWarn},nt.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},nt.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},nt.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},nt.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},nt.warnHtmlInMessage.set=function(t){var e=this,n=this._warnHtmlInMessage;if(this._warnHtmlInMessage=t,n!==t&&("warn"===t||"error"===t)){var r=this._getMessages();Object.keys(r).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,r[t])}))}},nt.postTranslation.get=function(){return this._postTranslation},nt.postTranslation.set=function(t){this._postTranslation=t},et.prototype._getMessages=function(){return this._vm.messages},et.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},et.prototype._getNumberFormats=function(){return this._vm.numberFormats},et.prototype._warnDefault=function(t,e,n,r,o,l){if(!_(n))return n;if(this._missing){var c=this._missing.apply(null,[t,e,r,o]);if(h(c))return c}else 0;if(this._formatFallbackMessages){var f=v.apply(void 0,o);return this._render(e,l,f.params,e)}return e},et.prototype._isFallbackRoot=function(t){return!t&&!_(this._root)&&this._fallbackRoot},et.prototype._isSilentFallbackWarn=function(t){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(t):this._silentFallbackWarn},et.prototype._isSilentFallback=function(t,e){return this._isSilentFallbackWarn(e)&&(this._isFallbackRoot()||t!==this.fallbackLocale)},et.prototype._isSilentTranslationWarn=function(t){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(t):this._silentTranslationWarn},et.prototype._interpolate=function(t,e,n,r,o,l,c){if(!e)return null;var f,v=this._path.getPathValue(e,n);if(Array.isArray(v)||m(v))return v;if(_(v)){if(!m(e))return null;if(!h(f=e[n]))return null}else{if(!h(v))return null;f=v}return(f.indexOf("@:")>=0||f.indexOf("@.")>=0)&&(f=this._link(t,e,f,r,"raw",l,c)),this._render(f,o,l,n)},et.prototype._link=function(t,e,n,r,o,l,c){var h=n,f=h.match(Z);for(var m in f)if(f.hasOwnProperty(m)){var link=f[m],_=link.match(K),v=_[0],d=_[1],F=link.replace(v,"").replace(Q,"");if(y(c,F))return h;c.push(F);var k=this._interpolate(t,e,F,r,"raw"===o?"string":o,"raw"===o?void 0:l,c);if(this._isFallbackRoot(k)){if(!this._root)throw Error("unexpected error");var w=this._root.$i18n;k=w._translate(w._getMessages(),w.locale,w.fallbackLocale,F,r,o,l)}k=this._warnDefault(t,F,k,r,Array.isArray(l)?l:[l],o),this._modifiers.hasOwnProperty(d)?k=this._modifiers[d](k):Y.hasOwnProperty(d)&&(k=Y[d](k)),c.pop(),h=k?h.replace(link,k):h}return h},et.prototype._render=function(t,e,n,path){var r=this._formatter.interpolate(t,n,path);return r||(r=tt.interpolate(t,n,path)),"string"!==e||h(r)?r:r.join("")},et.prototype._appendItemToChain=function(t,e,n){var r=!1;return y(t,e)||(r=!0,e&&(r="!"!==e[e.length-1],e=e.replace(/!/g,""),t.push(e),n&&n[e]&&(r=n[e]))),r},et.prototype._appendLocaleToChain=function(t,e,n){var r,o=e.split("-");do{var l=o.join("-");r=this._appendItemToChain(t,l,n),o.splice(-1,1)}while(o.length&&!0===r);return r},et.prototype._appendBlockToChain=function(t,e,n){for(var r=!0,i=0;i<e.length&&"boolean"==typeof r;i++){var o=e[i];h(o)&&(r=this._appendLocaleToChain(t,o,n))}return r},et.prototype._getLocaleChain=function(t,e){if(""===t)return[];this._localeChainCache||(this._localeChainCache={});var n=this._localeChainCache[t];if(!n){e||(e=this.fallbackLocale),n=[];for(var r,o=[t];l(o);)o=this._appendBlockToChain(n,o,e);(o=h(r=l(e)?e:c(e)?e.default?e.default:null:e)?[r]:r)&&this._appendBlockToChain(n,o,null),this._localeChainCache[t]=n}return n},et.prototype._translate=function(t,e,n,r,o,l,c){for(var h,f=this._getLocaleChain(e,n),i=0;i<f.length;i++){var m=f[i];if(!_(h=this._interpolate(m,t[m],r,o,l,c,[r])))return h}return null},et.prototype._t=function(t,e,n,r){for(var o,l=[],c=arguments.length-4;c-- >0;)l[c]=arguments[c+4];if(!t)return"";var h=v.apply(void 0,l),f=h.locale||e,m=this._translate(n,f,this.fallbackLocale,t,r,"string",h.params);if(this._isFallbackRoot(m)){if(!this._root)throw Error("unexpected error");return(o=this._root).$t.apply(o,[t].concat(l))}return m=this._warnDefault(f,t,m,r,l,"string"),this._postTranslation&&null!=m&&(m=this._postTranslation(m,t)),m},et.prototype.t=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},et.prototype._i=function(t,e,n,r,o){var l=this._translate(n,e,this.fallbackLocale,t,r,"raw",o);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,o)}return this._warnDefault(e,t,l,r,[o],"raw")},et.prototype.i=function(t,e,n){return t?(h(e)||(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},et.prototype._tc=function(t,e,n,r,o){for(var l,c=[],h=arguments.length-5;h-- >0;)c[h]=arguments[h+5];if(!t)return"";void 0===o&&(o=1);var f={count:o,n:o},m=v.apply(void 0,c);return m.params=Object.assign(f,m.params),c=null===m.locale?[m.params]:[m.locale,m.params],this.fetchChoice((l=this)._t.apply(l,[t,e,n,r].concat(c)),o)},et.prototype.fetchChoice=function(t,e){if(!t&&!h(t))return null;var n=t.split("|");return n[e=this.getChoiceIndex(e,n.length)]?n[e].trim():t},et.prototype.tc=function(t,e){for(var n,r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},et.prototype._te=function(t,e,n){for(var r=[],o=arguments.length-3;o-- >0;)r[o]=arguments[o+3];var l=v.apply(void 0,r).locale||e;return this._exist(n[l],t)},et.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},et.prototype.getLocaleMessage=function(t){return d(this._vm.messages[t]||{})},et.prototype.setLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,e)},et.prototype.mergeLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,w({},this._vm.messages[t]||{},e))},et.prototype.getDateTimeFormat=function(t){return d(this._vm.dateTimeFormats[t]||{})},et.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e),this._clearDateTimeFormat(t,e)},et.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,w(this._vm.dateTimeFormats[t]||{},e)),this._clearDateTimeFormat(t,e)},et.prototype._clearDateTimeFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._dateTimeFormatters.hasOwnProperty(r)&&delete this._dateTimeFormatters[r]}},et.prototype._localizeDateTime=function(t,e,n,r,o){for(var l=e,c=r[l],h=this._getLocaleChain(e,n),i=0;i<h.length;i++){var f=h[i];if(l=f,!_(c=r[f])&&!_(c[o]))break}if(_(c)||_(c[o]))return null;var m=c[o],v=l+"__"+o,d=this._dateTimeFormatters[v];return d||(d=this._dateTimeFormatters[v]=new Intl.DateTimeFormat(l,m)),d.format(t)},et.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return r||""},et.prototype.d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,o=null;return 1===e.length?h(e[0])?o=e[0]:c(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(o=e[0].key)):2===e.length&&(h(e[0])&&(o=e[0]),h(e[1])&&(r=e[1])),this._d(t,r,o)},et.prototype.getNumberFormat=function(t){return d(this._vm.numberFormats[t]||{})},et.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e),this._clearNumberFormat(t,e)},et.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,w(this._vm.numberFormats[t]||{},e)),this._clearNumberFormat(t,e)},et.prototype._clearNumberFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._numberFormatters.hasOwnProperty(r)&&delete this._numberFormatters[r]}},et.prototype._getNumberFormatter=function(t,e,n,r,o,l){for(var c=e,h=r[c],f=this._getLocaleChain(e,n),i=0;i<f.length;i++){var m=f[i];if(c=m,!_(h=r[m])&&!_(h[o]))break}if(_(h)||_(h[o]))return null;var v,d=h[o];if(l)v=new Intl.NumberFormat(c,Object.assign({},d,l));else{var y=c+"__"+o;(v=this._numberFormatters[y])||(v=this._numberFormatters[y]=new Intl.NumberFormat(c,d))}return v},et.prototype._n=function(t,e,n,r){if(!et.availabilities.numberFormat)return"";if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).format(t);var o=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),l=o&&o.format(t);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return l||""},et.prototype.n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var o=this.locale,l=null,f=null;return 1===e.length?h(e[0])?l=e[0]:c(e[0])&&(e[0].locale&&(o=e[0].locale),e[0].key&&(l=e[0].key),f=Object.keys(e[0]).reduce((function(t,n){var o;return y(r,n)?Object.assign({},t,((o={})[n]=e[0][n],o)):t}),null)):2===e.length&&(h(e[0])&&(l=e[0]),h(e[1])&&(o=e[1])),this._n(t,o,l,f)},et.prototype._ntp=function(t,e,n,r){if(!et.availabilities.numberFormat)return[];if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).formatToParts(t);var o=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),l=o&&o.formatToParts(t);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,n,r)}return l||[]},Object.defineProperties(et.prototype,nt),Object.defineProperty(et,"availabilities",{get:function(){if(!G){var t="undefined"!=typeof Intl;G={dateTimeFormat:t&&void 0!==Intl.DateTimeFormat,numberFormat:t&&void 0!==Intl.NumberFormat}}return G}}),et.install=R,et.version="8.18.2",e.a=et}}]);