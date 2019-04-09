# Pixel-Art-Maker-Udacity
You create a one-page web application that lets users draw a pixel image on a customizable panel.  
To begin, you'll be given starter code (including HTML and CSS) to build the application. You'll write JavaScript code that lets the user create a grid of squares representing their design, and apply colors to those squares to create a digital masterpiece!


<html><head><meta http-equiv="Content-type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><title>Pixel Art Maker - Udacity</title><link rel="stylesheet" href="/css/fonts.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css" crossorigin="anonymous"><link rel="apple-touch-icon" href="/touch-icon.png"><link rel="manifest" href="/manifest.json"><script src="https://connect.facebook.net/signals/config/823398221086645?v=2.8.46&amp;r=stable" async=""></script><script src="https://connect.facebook.net/signals/config/2197623860455254?v=2.8.46&amp;r=stable" async=""></script><script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script type="text/javascript" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script><script type="text/javascript" async="" src="//www.googleadservices.com/pagead/conversion_async.js"></script><script type="text/javascript" async="" src="//www.googleadservices.com/pagead/conversion_async.js"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/plugins/ua/linkid.js"></script><script type="text/javascript" src="https://bam.nr-data.net/1/2059d2614a?a=17871435&amp;sa=1&amp;v=1099.d27c17c&amp;t=Unnamed%20Transaction&amp;rst=1452&amp;ref=https://classroom.udacity.com/nanodegrees/nd001-1mac-v2/parts/6ac731a8-8ef7-4a5f-b476-728f52ad69c5/modules/8d8d90a1-f16c-49f3-9431-304b471c0169/lessons/714e4447-72ce-4657-ac82-5c1914d1e239/concepts/668546db-9d39-4a08-8899-554a711f206d&amp;be=381&amp;fe=1338&amp;dc=1086&amp;af=err,xhr,stn,ins,spa&amp;perf=%7B%22timing%22:%7B%22of%22:1554812307177,%22n%22:0,%22f%22:4,%22dn%22:12,%22dne%22:39,%22c%22:39,%22s%22:86,%22ce%22:142,%22rq%22:143,%22rp%22:261,%22rpe%22:267,%22dl%22:322,%22di%22:1084,%22ds%22:1085,%22de%22:1087,%22dc%22:1337,%22l%22:1337,%22le%22:1347%7D,%22navigation%22:%7B%22ty%22:2%7D%7D&amp;ja=%7B%22sid%22:%22e5e3881bf1a1eb8f635a13d4e1c6bcf4d936ff1c214fa8b5580537a831520f4f%22%7D&amp;jsonp=NREUM.setToken"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" async="" src="https://widget.intercom.io/widget/av16vnft"></script><script type="text/javascript" async="" src="https://cdn.getblueshift.com/blueshift.js"></script><script type="text/javascript" async="" src="https://www.googleadservices.com/pagead/conversion_async.js"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-WW3F3H&amp;l=dataLayer"></script><script src="https://js-agent.newrelic.com/nr-spa-1099.min.js"></script><script type="text/javascript" async="" src="https://sgmt.udacity.com/analytics.js/v1/u0v6T1NLYy1dJA9tWDSGSyuFolxZEzUp/analytics.min.js"></script><script>window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(21),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,s){try{l?l-=1:o(s||new UncaughtException(t,e,n),!0)}catch(f){try{i("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t,e){var n=e?null:c.now();i("err",[t,n])}var i=t("handle"),a=t(22),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,p="nr@seenError",l=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(13),t(12),"addEventListener"in window&&t(6),c.xhrWrappable&&t(14),d=!0)}s.on("fn-start",function(t,e,n){d&&(l+=1)}),s.on("fn-err",function(t,e,n){d&&!n[p]&&(f(n,p,function(){return!0}),this.thrown=!0,o(n))}),s.on("fn-end",function(){d&&!this.thrown&&l>0&&(l-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(){M++,N=y.hash,this[u]=g.now()}function o(){M--,y.hash!==N&&i(0,!0);var t=g.now();this[h]=~~this[h]+t-this[u],this[d]=t}function i(t,e){E.emit("newURL",[""+y,e])}function a(t,e){t.on(e,function(){this[e]=g.now()})}var s="-start",c="-end",f="-body",u="fn"+s,d="fn"+c,p="cb"+s,l="cb"+c,h="jsTime",m="fetch",v="addEventListener",w=window,y=w.location,g=t("loader");if(w[v]&&g.xhrWrappable){var b=t(10),x=t(11),E=t(8),O=t(6),P=t(13),R=t(7),T=t(14),L=t(9),j=t("ee"),S=j.get("tracer");t(15),g.features.spa=!0;var N,M=0;j.on(u,r),j.on(p,r),j.on(d,o),j.on(l,o),j.buffer([u,d,"xhr-done","xhr-resolved"]),O.buffer([u]),P.buffer(["setTimeout"+c,"clearTimeout"+s,u]),T.buffer([u,"new-xhr","send-xhr"+s]),R.buffer([m+s,m+"-done",m+f+s,m+f+c]),E.buffer(["newURL"]),b.buffer([u]),x.buffer(["propagate",p,l,"executor-err","resolve"+s]),S.buffer([u,"no-"+u]),L.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),a(T,"send-xhr"+s),a(j,"xhr-resolved"),a(j,"xhr-done"),a(R,m+s),a(R,m+"-done"),a(L,"new-jsonp"),a(L,"jsonp-end"),a(L,"cb-start"),E.on("pushState-end",i),E.on("replaceState-end",i),w[v]("hashchange",i,!0),w[v]("load",i,!0),w[v]("popstate",function(){i(0,M>1)},!0)}},{}],5:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(13),s=t(12),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",p="resource",l="-start",h="-end",m="fn"+l,v="fn"+h,w="bstTimer",y="pushState",g=t("loader");g.features.stn=!0,t(8);var b=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof b&&(this.bstStart=g.now())}),o.on(v,function(t,e){var n=t[0];n instanceof b&&i("bst",[n,e,this.bstStart,g.now()])}),a.on(m,function(t,e,n){this.bstStart=g.now(),this.bstType=n}),a.on(v,function(t,e){i(w,[e,this.bstStart,g.now(),this.bstType])}),s.on(m,function(){this.bstStart=g.now()}),s.on(v,function(t,e){i(w,[e,this.bstStart,g.now(),"requestAnimationFrame"])}),o.on(y+l,function(t){this.time=g.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],6:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t(24)(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1],r=c(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?s(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=r.apply(this,arguments);return o.emit(n+"start",arguments,t),t.then(function(e){return o.emit(n+"end",[null,e],t),e},function(e){throw o.emit(n+"end",[e],t),e})})}var o=t("ee").get("fetch"),i=t(21);e.exports=o;var a=window,s="fetch-",c=s+"body-",f=["arrayBuffer","blob","json","text","formData"],u=a.Request,d=a.Response,p=a.fetch,l="prototype";u&&d&&p&&(i(f,function(t,e){r(u[l],e,c),r(d[l],e,c)}),r(a,"fetch",s),o.on(s+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),o.emit(s+"done",[null,e],n)}else o.emit(s+"done",[t],n)}))},{}],8:[function(t,e,n){var r=t("ee").get("history"),o=t(24)(r);e.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],9:[function(t,e,n){function r(t){function e(){c.emit("jsonp-end",[],p),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}function n(){c.emit("jsonp-error",[],p),c.emit("jsonp-end",[],p),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}var r=t&&"string"==typeof t.nodeName&&"script"===t.nodeName.toLowerCase();if(r){var o="function"==typeof t.addEventListener;if(o){var a=i(t.src);if(a){var u=s(a),d="function"==typeof u.parent[u.key];if(d){var p={};f.inPlace(u.parent,[u.key],"cb-",p),t.addEventListener("load",e,!1),t.addEventListener("error",n,!1),c.emit("new-jsonp",[t.src],p)}}}}}function o(){return"addEventListener"in window}function i(t){var e=t.match(u);return e?e[1]:null}function a(t,e){var n=t.match(p),r=n[1],o=n[3];return o?a(o,e[r]):e[r]}function s(t){var e=t.match(d);return e&&e.length>=3?{key:e[2],parent:a(e[1],window)}:{key:t,parent:window}}var c=t("ee").get("jsonp"),f=t(24)(c);if(e.exports=c,o()){var u=/[?&](?:callback|cb)=([^&#]+)/,d=/(.*)\.([^.]+)/,p=/^(\w+)(\.|$)(.*)$/,l=["appendChild","insertBefore","replaceChild"];f.inPlace(HTMLElement.prototype,l,"dom-"),f.inPlace(HTMLHeadElement.prototype,l,"dom-"),f.inPlace(HTMLBodyElement.prototype,l,"dom-"),c.on("dom-start",function(t){r(t[0])})}},{}],10:[function(t,e,n){var r=t("ee").get("mutation"),o=t(24)(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],11:[function(t,e,n){function r(t){var e=a.context(),n=s(t,"executor-",e),r=new f(n);return a.context(r).getCtx=function(){return e},a.emit("new-promise",[r,e],e),r}function o(t,e){return e}var i=t(24),a=t("ee").get("promise"),s=i(a),c=t(21),f=NREUM.o.PR;e.exports=a,f&&(window.Promise=r,["all","race"].forEach(function(t){var e=f[t];f[t]=function(n){function r(t){return function(){a.emit("propagate",[null,!o],i),o=o||!t}}var o=!1;c(n,function(e,n){Promise.resolve(n).then(r("all"===t),r(!1))});var i=e.apply(f,arguments),s=f.resolve(i);return s}}),["resolve","reject"].forEach(function(t){var e=f[t];f[t]=function(t){var n=e.apply(f,arguments);return t!==n&&a.emit("propagate",[t,!0],n),n}}),f.prototype["catch"]=function(t){return this.then(null,t)},f.prototype=Object.create(f.prototype,{constructor:{value:r}}),c(Object.getOwnPropertyNames(f),function(t,e){try{r[e]=f[e]}catch(n){}}),a.on("executor-start",function(t){t[0]=s(t[0],"resolve-",this),t[1]=s(t[1],"resolve-",this)}),a.on("executor-err",function(t,e,n){t[1](n)}),s.inPlace(f.prototype,["then"],"then-",o),a.on("then-start",function(t,e){this.promise=e,t[0]=s(t[0],"cb-",this),t[1]=s(t[1],"cb-",this)}),a.on("then-end",function(t,e,n){this.nextPromise=n;var r=this.promise;a.emit("propagate",[r,!0],n)}),a.on("cb-end",function(t,e,n){a.emit("propagate",[n,!0],this.nextPromise)}),a.on("propagate",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=a.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return""+f})},{}],12:[function(t,e,n){var r=t("ee").get("raf"),o=t(24)(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],13:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t(24)(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],14:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function i(t){g.push(t),h&&(x?x.then(a):v?v(a):(E=-E,O.data=E))}function a(){for(var t=0;t<g.length;t++)r([],g[t]);g.length&&(g=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(6);var f=t("ee"),u=f.get("xhr"),d=t(24)(u),p=NREUM.o,l=p.XHR,h=p.MO,m=p.PR,v=p.SI,w="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],g=[];e.exports=u;var b=window.XMLHttpRequest=function(t){var e=new l(t);try{u.emit("new-xhr",[e],e),e.addEventListener(w,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(l,b),b.prototype=l.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),h){var x=m&&m.resolve();if(!v&&!m){var E=1,O=document.createTextNode(E);new h(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===w||a()})},{}],15:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!e.aborted){if(n.duration=a.now()-this.startTime,4===t.readyState){e.status=t.status;var i=o(t,this.lastSize);if(i&&(n.rxSize=i),this.sameOrigin){var c=t.getResponseHeader("X-NewRelic-App-Data");c&&(e.cat=c.split(", ").pop())}}else e.status=0;n.cbTime=this.cbTime,f.emit("xhr-done",[t],t),s("xhr",[e,n,this.startTime])}}}function o(t,e){var n=t.responseType;if("json"===n&&null!==e)return e;var r="arraybuffer"===n||"blob"===n||"json"===n?t.response:t.responseText;return h(r)}function i(t,e){var n=c(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}var a=t("loader");if(a.xhrWrappable){var s=t("handle"),c=t(16),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,p=t("id"),l=t(19),h=t(18),m=window.XMLHttpRequest;a.features.xhr=!0,t(14),f.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,l&&(l>34||l<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=h(r);i&&(n.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}};for(var s=0;s<d;s++)e.addEventListener(u[s],this.listener,!1)}),f.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),f.on("xhr-load-added",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],e)}),f.on("removeEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],e)}),f.on("fn-start",function(t,e,n){e instanceof m&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),f.on("fn-end",function(t,e){this.xhrCbStart&&f.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)})}},{}],16:[function(t,e,n){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!e.protocol||":"===e.protocol||e.protocol===n.protocol,a=e.hostname===document.domain&&e.port===n.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],17:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[f.now()].concat(s(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(21),s=t(22),c=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){u[e]=o(p+e,!0,"api")}),u.addPageAction=o(p+"addPageAction",!0),u.setCurrentRouteName=o(p+"routeName",!0),e.exports=newrelic,u.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[f.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){h[e]=o(l+e)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now()])}},{}],18:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],19:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],20:[function(t,e,n){function r(t,e){if(!o)return!1;if(t!==o)return!1;if(!e)return!0;if(!i)return!1;for(var n=i.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(o="Safari",i=c[1])}e.exports={agent:o,version:i,match:r}},{}],21:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],22:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],23:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],24:[function(t,e,n){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(22),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;e.exports=function(t,e){function n(t,e,n,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof n?n(r,a):n||{}}catch(f){p([f,"",[r,a,o],s])}u(e+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(d){throw u(e+"err",[r,a,d],s),d}finally{u(e+"end",[r,a,c],s)}}return r(t)?t:(e||(e=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,e,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<e.length;c++)s=e[c],a=t[s],r(a)||(t[s]=n(a,f?s+o:o,i,s))}function u(n,r,o){if(!c||e){var i=c;c=!0;try{t.emit(n,r,o,e)}catch(a){p([a,n,r,o])}c=i}}function d(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){p([r])}for(var o in t)s.call(t,o)&&(e[o]=t[o]);return e}function p(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=o),n.inPlace=f,n.flag=a,n}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?c(t,s,i):i()}function n(n,r,o,i){if(!p.aborted||i){t&&t(n,r,o);for(var a=e(o),s=m(n),c=s.length,f=0;f<c;f++)s[f].apply(a,r);var d=u[g[n]];return d&&d.push([b,n,r,a]),a}}function l(t,e){y[t]=m(t).concat(e)}function h(t,e){var n=y[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return y[t]||[]}function v(t){return d[t]=d[t]||o(n)}function w(t,e){f(t,function(t,n){e=e||"feature",g[n]=e,e in u||(u[e]=[])})}var y={},g={},b={on:l,addEventListener:l,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:a,aborted:!1};return b}function i(){return new r}function a(){(u.api||u.feature)&&(p.aborted=!0,u=p.backlog={})}var s="nr@context",c=t("gos"),f=t(21),u={},d={},p=e.exports=o();p.backlog=u},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!E++){var t=x.info=NREUM.info,e=l.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();f(g,function(e,n){t[e]||(t[e]=n)}),c("mark",["onload",a()+x.offset],null,"api");var n=l.createElement("script");n.src="https://"+t.agent,e.parentNode.insertBefore(n,e)}}function o(){"complete"===l.readyState&&i()}function i(){c("mark",["domContent",a()+x.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(s=Math.max((new Date).getTime(),s))-x.offset}var s=(new Date).getTime(),c=t("handle"),f=t(21),u=t("ee"),d=t(20),p=window,l=p.document,h="addEventListener",m="attachEvent",v=p.XMLHttpRequest,w=v&&v.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:v,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var y=""+location,g={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1099.min.js"},b=v&&w&&w[h]&&!/CriOS/.test(navigator.userAgent),x=e.exports={offset:s,now:a,origin:y,features:{},xhrWrappable:b,userAgent:d};t(17),l[h]?(l[h]("DOMContentLoaded",i,!1),p[h]("load",r,!1)):(l[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",s],null,"api");var E=0,O=t(23)},{}]},{},["loader",2,15,5,3,4]);
    ;NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"2059d2614a",applicationID:"17871435",sa:1}</script><script>!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"sgmt.udacity.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
  }}();</script><link href="/css/13.0da10.css" rel="stylesheet"><link href="/css/app.a8736.css" rel="stylesheet"><style type="text/css">.input-range__slider {
  appearance: none;
  background: #3f51b5;
  border: 1px solid #3f51b5;
  border-radius: 100%;
  cursor: pointer;
  display: block;
  height: 1rem;
  margin-left: -0.5rem;
  margin-top: -0.65rem;
  outline: none;
  position: absolute;
  top: 50%;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  width: 1rem; }
  .input-range__slider:active {
    transform: scale(1.3); }
  .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }
  .input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    transform: none; }

.input-range__slider-container {
  transition: left 0.3s ease-out; }

.input-range__label {
  color: #aaaaaa;
  font-family: "Helvetica Neue", san-serif;
  font-size: 0.8rem;
  transform: translateZ(0);
  white-space: nowrap; }

.input-range__label--min,
.input-range__label--max {
  bottom: -1.4rem;
  position: absolute; }

.input-range__label--min {
  left: 0; }

.input-range__label--max {
  right: 0; }

.input-range__label--value {
  position: absolute;
  top: -1.8rem; }

.input-range__label-container {
  left: -50%;
  position: relative; }
  .input-range__label--max .input-range__label-container {
    left: 50%; }

.input-range__track {
  background: #eeeeee;
  border-radius: 0.3rem;
  cursor: pointer;
  display: block;
  height: 0.3rem;
  position: relative;
  transition: left 0.3s ease-out, width 0.3s ease-out; }
  .input-range--disabled .input-range__track {
    background: #eeeeee; }

.input-range__track--background {
  left: 0;
  margin-top: -0.15rem;
  position: absolute;
  right: 0;
  top: 50%; }

.input-range__track--active {
  background: #3f51b5; }

.input-range {
  height: 1rem;
  position: relative;
  width: 100%; }</style><style type="text/css">.rc-tooltip.rc-tooltip-zoom-enter,
.rc-tooltip.rc-tooltip-zoom-leave {
  display: block;
}
.rc-tooltip-zoom-enter,
.rc-tooltip-zoom-appear {
  opacity: 0;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
  animation-play-state: paused;
}
.rc-tooltip-zoom-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
  animation-play-state: paused;
}
.rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,
.rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {
  animation-name: rcToolTipZoomIn;
  animation-play-state: running;
}
.rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {
  animation-name: rcToolTipZoomOut;
  animation-play-state: running;
}
@keyframes rcToolTipZoomIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
}
@keyframes rcToolTipZoomOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
}
.rc-tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  visibility: visible;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.9;
}
.rc-tooltip-hidden {
  display: none;
}
.rc-tooltip-placement-top,
.rc-tooltip-placement-topLeft,
.rc-tooltip-placement-topRight {
  padding: 5px 0 9px 0;
}
.rc-tooltip-placement-right,
.rc-tooltip-placement-rightTop,
.rc-tooltip-placement-rightBottom {
  padding: 0 5px 0 9px;
}
.rc-tooltip-placement-bottom,
.rc-tooltip-placement-bottomLeft,
.rc-tooltip-placement-bottomRight {
  padding: 9px 0 5px 0;
}
.rc-tooltip-placement-left,
.rc-tooltip-placement-leftTop,
.rc-tooltip-placement-leftBottom {
  padding: 0 9px 0 5px;
}
.rc-tooltip-inner {
  padding: 8px 10px;
  color: #fff;
  text-align: left;
  text-decoration: none;
  background-color: #373737;
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  min-height: 34px;
}
.rc-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.rc-tooltip-placement-top .rc-tooltip-arrow,
.rc-tooltip-placement-topLeft .rc-tooltip-arrow,
.rc-tooltip-placement-topRight .rc-tooltip-arrow {
  bottom: 4px;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #373737;
}
.rc-tooltip-placement-top .rc-tooltip-arrow {
  left: 50%;
}
.rc-tooltip-placement-topLeft .rc-tooltip-arrow {
  left: 15%;
}
.rc-tooltip-placement-topRight .rc-tooltip-arrow {
  right: 15%;
}
.rc-tooltip-placement-right .rc-tooltip-arrow,
.rc-tooltip-placement-rightTop .rc-tooltip-arrow,
.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
  left: 4px;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #373737;
}
.rc-tooltip-placement-right .rc-tooltip-arrow {
  top: 50%;
}
.rc-tooltip-placement-rightTop .rc-tooltip-arrow {
  top: 15%;
  margin-top: 0;
}
.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
  bottom: 15%;
}
.rc-tooltip-placement-left .rc-tooltip-arrow,
.rc-tooltip-placement-leftTop .rc-tooltip-arrow,
.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
  right: 4px;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #373737;
}
.rc-tooltip-placement-left .rc-tooltip-arrow {
  top: 50%;
}
.rc-tooltip-placement-leftTop .rc-tooltip-arrow {
  top: 15%;
  margin-top: 0;
}
.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
  bottom: 15%;
}
.rc-tooltip-placement-bottom .rc-tooltip-arrow,
.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
  top: 4px;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #373737;
}
.rc-tooltip-placement-bottom .rc-tooltip-arrow {
  left: 50%;
}
.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
  left: 15%;
}
.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
  right: 15%;
}
</style><script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/752086609/?random=1554812308744&amp;cv=9&amp;fst=1554812308744&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635471&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=12&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;gtm=2wg3r3&amp;sendb=1&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F6ac731a8-8ef7-4a5f-b476-728f52ad69c5%2Fmodules%2F8d8d90a1-f16c-49f3-9431-304b471c0169%2Flessons%2F714e4447-72ce-4657-ac82-5c1914d1e239%2Fconcepts%2F668546db-9d39-4a08-8899-554a711f206d&amp;tiba=Loading%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/752085439/?random=1554812308750&amp;cv=9&amp;fst=1554812308750&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=12&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;gtm=2wg3r3&amp;sendb=1&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F6ac731a8-8ef7-4a5f-b476-728f52ad69c5%2Fmodules%2F8d8d90a1-f16c-49f3-9431-304b471c0169%2Flessons%2F714e4447-72ce-4657-ac82-5c1914d1e239%2Fconcepts%2F668546db-9d39-4a08-8899-554a711f206d&amp;tiba=Loading%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><link rel="stylesheet" type="text/css" href="/css/0.63cd2.css"><script charset="utf-8" src="/js/vendors~routes-courses~routes-nanodegrees~routes-settings.278eb.js"></script><link rel="stylesheet" type="text/css" href="/css/2.8231f.css"><script charset="utf-8" src="/js/vendors~routes-courses~routes-nanodegrees.6ceb4.js"></script><link rel="stylesheet" type="text/css" href="/css/3.a56a6.css"><script charset="utf-8" src="/js/vendors~routes-nanodegrees~routes-settings.89421.js"></script><link rel="stylesheet" type="text/css" href="/css/1.250ff.css"><script charset="utf-8" src="/js/routes-courses~routes-nanodegrees.57728.js"></script><link rel="stylesheet" type="text/css" href="/css/9.97b00.css"><script charset="utf-8" src="/js/routes-nanodegrees.045a9.js"></script><script src="https://www.googleadservices.com/pagead/conversion/967079204/?random=1554812309770&amp;cv=9&amp;fst=1554812309770&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=12&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F6ac731a8-8ef7-4a5f-b476-728f52ad69c5%2Fmodules%2F8d8d90a1-f16c-49f3-9431-304b471c0169%2Flessons%2F714e4447-72ce-4657-ac82-5c1914d1e239%2Fconcepts%2F668546db-9d39-4a08-8899-554a711f206d&amp;tiba=Loading%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/967079204/?random=1554812309779&amp;cv=9&amp;fst=1554812309779&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=12&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;data=degree_key%3Dnd001-1mac-v2%3Bpart_key%3D6ac731a8-8ef7-4a5f-b476-728f52ad69c5%3Bmodule_key%3D8d8d90a1-f16c-49f3-9431-304b471c0169%3Blesson_key%3D714e4447-72ce-4657-ac82-5c1914d1e239%3Bconcept_key%3D668546db-9d39-4a08-8899-554a711f206d%3Bname%3DMy%20Nanodegree%20Classroom%20-%20nd001-1mac-v2%3Bpath%3D%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F6ac731a8-8ef7-4a5f-b476-728f52ad69c5%2Fmodules%2F8d8d90a1-f16c-49f3-9431-304b471c0169%2Flessons%2F714e4447-72ce-4657-ac82-5c1914d1e239%2Fconcepts%2F668546db-9d39-4a08-8899-554a711f206d%3Breferrer%3D%3Bsearch%3D%3Btitle%3DLoading%20-%20Udacity%3Burl%3Dhttps%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F6ac731a8-8ef7-4a5f-b476-728f52ad69c5%2Fmodules%2F8d8d90a1-f16c-49f3-9431-304b471c0169%2Flessons%2F714e4447-72ce-4657-ac82-5c1914d1e239%2Fconcepts%2F668546db-9d39-4a08-8899-554a711f206d&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F6ac731a8-8ef7-4a5f-b476-728f52ad69c5%2Fmodules%2F8d8d90a1-f16c-49f3-9431-304b471c0169%2Flessons%2F714e4447-72ce-4657-ac82-5c1914d1e239%2Fconcepts%2F668546db-9d39-4a08-8899-554a711f206d&amp;tiba=Loading%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><style data-emotion="css-global"></style><style id="intercom-stylesheet" type="text/css">@-webkit-keyframes intercom-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes intercom-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes intercom-notification-animation{0%{opacity:0;height:0;-webkit-transform:translateY(20px);transform:translateY(20px)}50%{opacity:0;max-height:120px;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;max-height:120px;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-notification-animation{0%{opacity:0;height:0;-webkit-transform:translateY(20px);transform:translateY(20px)}50%{opacity:0;max-height:120px;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;max-height:120px;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-notification-body-animation{0%,50%{opacity:0}to{opacity:1}}@keyframes intercom-notification-body-animation{0%,50%{opacity:0}to{opacity:1}}@-webkit-keyframes intercom-tour-step-button-pulsate{0%,49%,50%,to{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:scale(1.05);transform:scale(1.05)}}@keyframes intercom-tour-step-button-pulsate{0%,49%,50%,to{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:scale(1.05);transform:scale(1.05)}}@-webkit-keyframes video-replay-wiggle{50%{-webkit-transform:rotate(-66deg);transform:rotate(-66deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes video-replay-wiggle{50%{-webkit-transform:rotate(-66deg);transform:rotate(-66deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes intercom-chat-animation{0%{-webkit-transform:translateY(102px);transform:translateY(102px);opacity:0}20%{-webkit-transform:translateY(52px);transform:translateY(52px)}70%{-webkit-transform:translateY(52px);transform:translateY(52px);opacity:1}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-chat-animation{0%{-webkit-transform:translateY(102px);transform:translateY(102px);opacity:0}20%{-webkit-transform:translateY(52px);transform:translateY(52px)}70%{-webkit-transform:translateY(52px);transform:translateY(52px);opacity:1}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-chat-card-avatar-animation{0%{opacity:0}50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5);opacity:0}to{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:1}}@keyframes intercom-chat-card-avatar-animation{0%{opacity:0}50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5);opacity:0}to{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:1}}@-webkit-keyframes intercom-chat-composer-animation{0%{opacity:0}70%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-chat-composer-animation{0%{opacity:0}70%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-messenger-body-view-fade-in{0%{opacity:0}to{opacity:1}}@keyframes intercom-messenger-body-view-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes intercom-messenger-body-view-fade-out{0%{opacity:1}to{opacity:0}}@keyframes intercom-messenger-body-view-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes intercom-messenger-body-view-slide-left-out{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-8px);transform:translateX(-8px)}}@keyframes intercom-messenger-body-view-slide-left-out{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-8px);transform:translateX(-8px)}}@-webkit-keyframes intercom-messenger-body-view-slide-right-out{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(8px);transform:translateX(8px)}}@keyframes intercom-messenger-body-view-slide-right-out{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(8px);transform:translateX(8px)}}@-webkit-keyframes intercom-messenger-body-view-slide-left-in{0%{opacity:0;-webkit-transform:translateX(8px);transform:translateX(8px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-messenger-body-view-slide-left-in{0%{opacity:0;-webkit-transform:translateX(8px);transform:translateX(8px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-messenger-body-view-slide-right-in{0%{opacity:0;-webkit-transform:translateX(-8px);transform:translateX(-8px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-messenger-body-view-slide-right-in{0%{opacity:0;-webkit-transform:translateX(-8px);transform:translateX(-8px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-messenger-link-view-appear-active{0%{-webkit-transform:translateY(42px);transform:translateY(42px);-webkit-box-shadow:0 -10px 10px 1px transparent;box-shadow:0 -10px 10px 1px transparent}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-messenger-link-view-appear-active{0%{-webkit-transform:translateY(42px);transform:translateY(42px);-webkit-box-shadow:0 -10px 10px 1px transparent;box-shadow:0 -10px 10px 1px transparent}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-messenger-link-view-exit-active{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:.5}to{-webkit-transform:translateY(42px);transform:translateY(42px);opacity:0}}@keyframes intercom-messenger-link-view-exit-active{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:.5}to{-webkit-transform:translateY(42px);transform:translateY(42px);opacity:0}}@-webkit-keyframes intercom-messenger-link-view-enter-active{0%{-webkit-transform:translateY(42px);transform:translateY(42px);-webkit-box-shadow:0 -10px 10px 1px transparent;box-shadow:0 -10px 10px 1px transparent}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-messenger-link-view-enter-active{0%{-webkit-transform:translateY(42px);transform:translateY(42px);-webkit-box-shadow:0 -10px 10px 1px transparent;box-shadow:0 -10px 10px 1px transparent}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-conversation-summary-enter-left{0%{opacity:0;-webkit-transform:translateX(-8px);transform:translateX(-8px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversation-summary-enter-left{0%{opacity:0;-webkit-transform:translateX(-8px);transform:translateX(-8px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversation-summary-enter-right{0%{opacity:0;-webkit-transform:translateX(8px);transform:translateX(8px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversation-summary-enter-right{0%{opacity:0;-webkit-transform:translateX(8px);transform:translateX(8px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversation-summary-exit-left{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-8px);transform:translateX(-8px)}}@keyframes intercom-conversation-summary-exit-left{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-8px);transform:translateX(-8px)}}@-webkit-keyframes intercom-conversation-summary-exit-right{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(8px);transform:translateX(8px)}}@keyframes intercom-conversation-summary-exit-right{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(8px);transform:translateX(8px)}}@-webkit-keyframes intercom-new-conversation-button-enter{0%{opacity:0;-webkit-transform:translateY(8px) translateX(-50%) scale(.96);transform:translateY(8px) translateX(-50%) scale(.96)}to{opacity:1;-webkit-transform:translateY(0) translateX(-50%) scale(1);transform:translateY(0) translateX(-50%) scale(1)}}@keyframes intercom-new-conversation-button-enter{0%{opacity:0;-webkit-transform:translateY(8px) translateX(-50%) scale(.96);transform:translateY(8px) translateX(-50%) scale(.96)}to{opacity:1;-webkit-transform:translateY(0) translateX(-50%) scale(1);transform:translateY(0) translateX(-50%) scale(1)}}@-webkit-keyframes intercom-new-conversation-button-exit{0%{opacity:1;-webkit-transform:translateY(0) translateX(-50%) scale(1);transform:translateY(0) translateX(-50%) scale(1)}to{opacity:0;-webkit-transform:translateY(8px) translateX(-50%) scale(.96);transform:translateY(8px) translateX(-50%) scale(.96)}}@keyframes intercom-new-conversation-button-exit{0%{opacity:1;-webkit-transform:translateY(0) translateX(-50%) scale(1);transform:translateY(0) translateX(-50%) scale(1)}to{opacity:0;-webkit-transform:translateY(8px) translateX(-50%) scale(.96);transform:translateY(8px) translateX(-50%) scale(.96)}}@-webkit-keyframes intercom-conversation-footer-slide-in{0%{opacity:0;-webkit-transform:translateY(15px);transform:translateY(15px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-conversation-footer-slide-in{0%{opacity:0;-webkit-transform:translateY(15px);transform:translateY(15px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-conversation-footer-slide-out{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(15px);transform:translateY(15px)}}@keyframes intercom-conversation-footer-slide-out{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(15px);transform:translateY(15px)}}@-webkit-keyframes intercom-borderless-animation{0%,20%,70%{-webkit-transform:translateY(52px);transform:translateY(52px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-borderless-animation{0%,20%,70%{-webkit-transform:translateY(52px);transform:translateY(52px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-borderless-body-animation{0%,50%{opacity:0}to{opacity:1}}@keyframes intercom-borderless-body-animation{0%,50%{opacity:0}to{opacity:1}}@-webkit-keyframes intercom-borderless-avatar-animation{0%{opacity:0}50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5);opacity:0}to{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:1}}@keyframes intercom-borderless-avatar-animation{0%{opacity:0}50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5);opacity:0}to{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:1}}@-webkit-keyframes intercom-borderless-composer-animation{0%,70%{opacity:0}to{opacity:1}}@keyframes intercom-borderless-composer-animation{0%,70%{opacity:0}to{opacity:1}}@-webkit-keyframes animate-is-typing-avatar{0%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-is-typing-avatar{0%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes animate-is-typing-bubble{0%,50%{opacity:0;-webkit-transform:scale(.6);transform:scale(.6)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-is-typing-bubble{0%,50%{opacity:0;-webkit-transform:scale(.6);transform:scale(.6)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes collapse-is-typing-bubble{0%{opacity:0;height:53px}to{opacity:0;height:0}}@keyframes collapse-is-typing-bubble{0%{opacity:0;height:53px}to{opacity:0;height:0}}@-webkit-keyframes is-typing-dot{0%,30%,to{-webkit-transform:translateY(0);transform:translateY(0)}15%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}}@keyframes is-typing-dot{0%,30%,to{-webkit-transform:translateY(0);transform:translateY(0)}15%{-webkit-transform:translateY(-2px);transform:translateY(-2px)}}@-webkit-keyframes intercom-launcher-discovery-show{0%{opacity:0}to{opacity:1}}@keyframes intercom-launcher-discovery-show{0%{opacity:0}to{opacity:1}}@-webkit-keyframes intercom-launcher-discovery-hide{0%{opacity:1}to{opacity:0}}@keyframes intercom-launcher-discovery-hide{0%{opacity:1}to{opacity:0}}@-webkit-keyframes intercom-home-screen-card-appear{0%{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-home-screen-card-appear{0%{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-home-screen-card-enter{0%{opacity:0;-webkit-transform:translateX(-60px);transform:translateX(-60px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-home-screen-card-enter{0%{opacity:0;-webkit-transform:translateX(-60px);transform:translateX(-60px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-home-screen-card-exit{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-60px);transform:translateX(-60px)}}@keyframes intercom-home-screen-card-exit{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-60px);transform:translateX(-60px)}}@-webkit-keyframes intercom-link-fade-in{0%{opacity:0}to{opacity:1}}@keyframes intercom-link-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes intercom-link-fade-out{0%{opacity:1}to{opacity:0}}@keyframes intercom-link-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes intercom-home-screen-header-body-appear{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-home-screen-header-body-appear{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-home-screen-header-close-button-appear{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes intercom-home-screen-header-close-button-appear{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes intercom-home-screen-header-body-enter{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-home-screen-header-body-enter{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-home-screen-header-close-button-enter{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-home-screen-header-close-button-enter{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-home-screen-header-body-leave{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@keyframes intercom-home-screen-header-body-leave{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@-webkit-keyframes intercom-home-screen-header-close-button-leave{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@keyframes intercom-home-screen-header-close-button-leave{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@-webkit-keyframes intercom-conversation-header-body-enter{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversation-header-body-enter{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversation-header-button-enter{0%{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversation-header-button-enter{0%{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversation-header-body-leave{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}}@keyframes intercom-conversation-header-body-leave{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}}@-webkit-keyframes intercom-conversation-header-button-leave{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}}@keyframes intercom-conversation-header-button-leave{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}}@-webkit-keyframes intercom-conversations-header-body-enter-left{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversations-header-body-enter-left{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversations-header-back-button-enter-left{0%{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversations-header-back-button-enter-left{0%{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversations-header-close-button-enter-left{0%{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversations-header-close-button-enter-left{0%{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversations-header-body-leave-left{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@keyframes intercom-conversations-header-body-leave-left{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}}@-webkit-keyframes intercom-conversations-header-back-button-leave-left{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes intercom-conversations-header-back-button-leave-left{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@-webkit-keyframes intercom-conversations-header-close-button-leave-left{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes intercom-conversations-header-close-button-leave-left{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@-webkit-keyframes intercom-conversations-header-body-enter-right{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversations-header-body-enter-right{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversations-header-back-button-enter-right{0%{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversations-header-back-button-enter-right{0%{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversations-header-close-button-enter-right{0%{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes intercom-conversations-header-close-button-enter-right{0%{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes intercom-conversations-header-body-leave-right{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}}@keyframes intercom-conversations-header-body-leave-right{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}}@-webkit-keyframes intercom-conversations-header-back-button-leave-right{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}}@keyframes intercom-conversations-header-back-button-leave-right{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}}@-webkit-keyframes intercom-conversations-header-close-button-leave-right{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}}@keyframes intercom-conversations-header-close-button-leave-right{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.intercom-namespace .intercom-scrollable{position:relative;max-height:100%;overflow-y:auto;overflow-x:hidden}.intercom-namespace .intercom-loading-spinner-wrapper .intercom-loading-spinner{border-top:2px solid rgb(36, 177, 237);border-right:2px solid rgba(36, 177, 237, 0.3);border-bottom:2px solid rgba(36, 177, 237, 0.3);border-left:2px solid rgba(36, 177, 237, 0.3)}.intercom-namespace .intercom-loading-spinner-wrapper .intercom-loading-spinner-white{border-top:2px solid #fff;border-right:2px solid rgba(255,255,255,.3);border-bottom:2px solid rgba(255,255,255,.3);border-left:2px solid rgba(255,255,255,.3)}.intercom-namespace .intercom-loading-spinner-wrapper .intercom-loading-spinner-grey{border-top:2px solid #737376;border-right:2px solid rgba(115,115,118,.3);border-bottom:2px solid rgba(115,115,118,.3);border-left:2px solid rgba(115,115,118,.3)}.intercom-namespace .intercom-loading-spinner-wrapper .intercom-loading-spinner-black{border-top:2px solid #000;border-right:2px solid rgba(0,0,0,.3);border-bottom:2px solid rgba(0,0,0,.3);border-left:2px solid rgba(0,0,0,.3)}.intercom-namespace .intercom-loading-spinner-wrapper .intercom-loading-spinner{border-radius:50%;display:block;width:28px;height:28px;-webkit-animation:intercom-spin .6s infinite linear;animation:intercom-spin .6s infinite linear}.intercom-namespace .intercom-loading-spinner-wrapper{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.intercom-namespace .intercom-loading-spinner-wrapper .intercom-loading-spinner-regular{border-width:1px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-author-avatar .intercom-avatar img,.intercom-namespace .intercom-link-card-container .intercom-link-card-author-avatar .intercom-avatar img,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-author-avatar .intercom-avatar img,.intercom-namespace .intercom-loading-spinner-wrapper .intercom-loading-spinner-small{width:16px;height:16px}.intercom-namespace .intercom-avatar{margin:0 auto;border-radius:50%;display:inline-block;vertical-align:middle}.intercom-namespace .intercom-avatar img{border-radius:50%}.intercom-namespace .intercom-avatar-initial{text-transform:uppercase;background-color:#0c6e97;color:#fff;text-align:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-user-avatar-initial{background-color:#f5f5f5;color:#94abb6}.intercom-namespace .intercom-admin-avatar-stack{margin-right:6px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.intercom-namespace .intercom-admin-avatar-stack-avatar{padding:0;display:inline-block;-webkit-box-flex:1;-ms-flex:1 1 56px;flex:1 1 56px;margin-left:-2px}.intercom-namespace .intercom-admin-avatar-stack-avatar .intercom-avatar{width:52px;height:52px;line-height:52px;font-size:26px;border:2px solid #fff}.intercom-namespace .intercom-admin-avatar-stack-avatar .intercom-avatar img{width:52px;height:52px}.intercom-namespace .intercom-admin-avatar-stack-avatar+.intercom-admin-avatar-stack-avatar{margin-left:-8px}.intercom-namespace .intercom-active-state,.intercom-namespace .intercom-away-state{width:8px;height:8px;border:2px solid #24b1ed;margin:0 auto;border-radius:50%;display:inline-block;vertical-align:bottom;right:3px;bottom:3px;position:absolute}.intercom-namespace .intercom-active-state{background-color:#7ed321}.intercom-namespace .intercom-away-state{background-color:#f1c743}.intercom-namespace .intercom-admin-profile-compact .intercom-active-state,.intercom-namespace .intercom-admin-profile-compact .intercom-away-state{width:6px;height:6px;right:8px;bottom:2px}.intercom-namespace .intercom-team-profile-compact-avatar-container .intercom-active-state,.intercom-namespace .intercom-team-profile-compact-avatar-container .intercom-away-state{right:0;bottom:0}.intercom-namespace .intercom-team-avatar-container{width:35px;height:35px;position:relative;float:left}.intercom-namespace .intercom-team-avatar{border-radius:50%;position:absolute;border:2px solid #fff;background-color:#0c6e97;color:#fff;text-align:center;font-size:17.5px;font-weight:700}.intercom-namespace .intercom-team-avatar-small{width:20px;height:20px;line-height:20px}.intercom-namespace .intercom-team-avatar-large{width:100%;height:100%;line-height:35px}.intercom-namespace .intercom-first-of-two-admins{top:9px;left:-2px;z-index:1}.intercom-namespace .intercom-second-of-two-admins{top:9px;right:-2px;z-index:2}.intercom-namespace .intercom-first-of-three-admins{top:-1;left:6px;z-index:2}.intercom-namespace .intercom-second-of-three-admins{top:15px;right:14px;z-index:3}.intercom-namespace .intercom-third-of-three-admins{top:15px;left:14px;z-index:1}.intercom-namespace .intercom-messenger,.intercom-namespace .intercom-messenger-sheet{bottom:0;left:0;right:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.intercom-namespace .intercom-messenger{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:absolute}.intercom-namespace .intercom-messenger-sheet{z-index:2147483003;background-color:#fff;position:fixed}.intercom-namespace .intercom-messenger-sheet-form{display:none}.intercom-namespace .intercom-messenger-sheet-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 30px;height:75px;color:rgb(255, 255, 255);background-color:#24b1ed;font-size:20px;position:relative}.intercom-namespace .intercom-messenger-sheet-header-title{width:100%;text-align:center}.intercom-namespace .intercom-messenger-sheet-header-buttons-close-button{z-index:2147483003;position:absolute;width:50px;height:50px;top:0;right:0;background-position:center;margin:12.5px 11px 12.5px 12.5px;cursor:pointer}.intercom-namespace .intercom-messenger-sheet-header-buttons-close-button *{cursor:pointer}.intercom-namespace .intercom-messenger-sheet-header-buttons-close-button-body{display:-webkit-box;display:-ms-flexbox;display:flex;width:50px;height:50px;margin:0 auto;border-radius:8px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.intercom-namespace .intercom-messenger-sheet-header-buttons-close-button-body:hover{background-color:rgba(0,0,0,.1)}.intercom-namespace .intercom-messenger-sheet-proxy{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1}.intercom-namespace .intercom-messenger-sheet-proxy-frame{position:absolute;width:100%;height:100%}@media only screen and (max-device-width:667px){.intercom-namespace .intercom-messenger-sheet-proxy{overflow-y:scroll}}.intercom-namespace .intercom-progress-bar{z-index:2147483005;position:absolute;top:0;left:0;right:0;height:2px;background:#24b1ed}.intercom-namespace .intercom-notifications{position:fixed;bottom:5px;right:5px}.intercom-namespace .intercom-notifications-dismiss-button{background-color:#5d6c80;color:#fff;font-size:13px;float:right;padding:8px 20px;opacity:0;border-radius:100px}.intercom-namespace .intercom-notifications:hover .intercom-notifications-dismiss-button{opacity:.8}.intercom-namespace .intercom-notifications:hover .intercom-notifications-dismiss-button:hover{opacity:.9}.intercom-namespace .intercom-chat-dismiss-button span:hover,.intercom-namespace .intercom-notifications-dismiss-button-visible{opacity:1}.intercom-namespace .intercom-notifications-dismiss-button-icon{background-image:url(https://js.intercomcdn.com/images/dismiss.249568e7.png);background-size:8px 8px;width:8px;height:8px;background-repeat:no-repeat;display:inline-block;margin-left:8px}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-notifications-dismiss-button-icon{background-image:url(https://js.intercomcdn.com/images/dismiss@2x.1c82ba79.png)}}.intercom-namespace .intercom-notification{padding-top:10px;max-height:120px;-webkit-animation:intercom-notification-animation 250ms ease;animation:intercom-notification-animation 250ms ease;clear:both}.intercom-namespace .intercom-authored-container{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;background-color:#fff;border-radius:4px;font-size:13px;line-height:1.5;width:100%}.intercom-namespace .intercom-authored-container-top{padding:24px 24px 16px;white-space:nowrap}.intercom-namespace .intercom-authored-container-avatar{display:inline-block;vertical-align:middle;margin-right:16px}.intercom-namespace .intercom-authored-container-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-authored-container-avatar .intercom-avatar img{width:32px;height:32px}.intercom-namespace .intercom-author-summary{font-size:13px;display:inline-block;vertical-align:middle;color:#737376;line-height:1.2;padding-top:2px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:calc(100% - 32px - 8px)}.intercom-namespace .intercom-author-summary span{white-space:nowrap}.intercom-namespace .intercom-note .intercom-author-summary,.intercom-namespace .intercom-pointer .intercom-author-summary{width:calc(100% - 32px - 8px - 36px)}.intercom-namespace .intercom-chat .intercom-author-summary,.intercom-namespace .intercom-chat-snippet .intercom-author-summary{width:100%}.intercom-namespace .intercom-author-summary-name{font-weight:700;color:#686868}.intercom-namespace .intercom-author-summary-name-from{color:#000;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-author-summary-from-clause{color:#737376}.intercom-namespace .intercom-author-last-active{color:#737376;opacity:.7}.intercom-namespace .intercom-align-center{text-align:center}.intercom-namespace .intercom-post,.intercom-namespace .intercom-post-container{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.intercom-namespace .intercom-post-container{height:100%;padding:40px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-post{position:relative;max-width:800px;max-height:100%;background:#fff;border-radius:7px;-webkit-box-shadow:0 3px 32px 0 rgba(0,0,0,.14);box-shadow:0 3px 32px 0 rgba(0,0,0,.14);font-size:14px;color:#000;overflow:hidden}.intercom-namespace .intercom-post-scrolled .intercom-authored-container-top{position:relative;z-index:2147483003;-webkit-box-shadow:0 0 9px 0 rgba(0,0,0,.3);box-shadow:0 0 9px 0 rgba(0,0,0,.3)}.intercom-namespace .intercom-post-close{position:absolute;z-index:2147483003;top:0;right:0;width:72px;height:72px}.intercom-namespace .intercom-post-close,.intercom-namespace .intercom-post-close:hover{background-position:center;background-image:url(https://js.intercomcdn.com/images/close.1359f860.png);background-size:12px 12px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-post-close,.intercom-namespace .intercom-post-close:hover{background-image:url(https://js.intercomcdn.com/images/close@2x.570e24e7.png)}}.intercom-namespace .intercom-post-footer{position:absolute;bottom:-20px;left:0;right:0;opacity:0;visibility:hidden}.intercom-namespace .intercom-post-footer-visible{opacity:1;bottom:0;-webkit-transition:opacity .16s,bottom .28s;transition:opacity .16s,bottom .28s;visibility:visible}.intercom-namespace .intercom-post-body{height:calc(100% - 72px);width:100%}.intercom-namespace .intercom-chat-card-body a,.intercom-namespace .intercom-note-body a,.intercom-namespace .intercom-note-card-body a,.intercom-namespace .intercom-post-body a,.intercom-namespace .intercom-post-card-body a{color:rgb(36, 177, 237)}.intercom-namespace .intercom-post-composer{border-top:1px solid #d2d7db;width:100%;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 38px;border-radius:0 0 8px 8px;color:#737376;font-size:14px;line-height:26px;cursor:text}.intercom-namespace .intercom-composer-placeholder{display:inline-block}.intercom-namespace .intercom-post-body .intercom-block-messenger-card{width:320px;margin:16px auto}.intercom-namespace .intercom-post-body .intercom-messenger-card-wrapper{-webkit-box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);border:1px solid #eee;border-top:none}.intercom-namespace .intercom-post-footer-text-center{text-align:center;background:#fff}.intercom-namespace .intercom-note{z-index:2147483001;position:absolute;bottom:0;right:0;width:342px;background:#fff;border-radius:7px;font-size:13px;font-family:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;color:#000;overflow:hidden}.intercom-namespace .intercom-note-scrolled .intercom-authored-container-top{position:relative;z-index:2147483003;-webkit-box-shadow:0 0 9px 0 rgba(0,0,0,.3);box-shadow:0 0 9px 0 rgba(0,0,0,.3)}.intercom-namespace .intercom-note-body>.intercom-scrollable{max-height:320px;border-radius:0 0 8px 8px}.intercom-namespace .intercom-note-close{position:absolute;z-index:2147483003;top:0;right:0;width:72px;height:72px}.intercom-namespace .intercom-note-close,.intercom-namespace .intercom-note-close:hover{background-position:center;background-image:url(https://js.intercomcdn.com/images/close.1359f860.png);background-size:12px 12px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-note-close,.intercom-namespace .intercom-note-close:hover{background-image:url(https://js.intercomcdn.com/images/close@2x.570e24e7.png)}}.intercom-namespace .intercom-note-footer{position:absolute;bottom:-20px;left:0;right:0;opacity:0;visibility:hidden}.intercom-namespace .intercom-note-footer-visible{opacity:1;bottom:0;-webkit-transition:opacity .16s,bottom .28s;transition:opacity .16s,bottom .28s;visibility:visible}.intercom-namespace .intercom-note-composer{border-top:1px solid #d2d7db;width:100%;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px 25px;color:#737376;font-size:14px;line-height:26px;cursor:text}.intercom-namespace .intercom-note-composer span,.intercom-namespace .intercom-post-composer span{cursor:text}.intercom-namespace .intercom-note-body .intercom-block-messenger-card{width:280px;margin:16px auto}.intercom-namespace .intercom-note-body .intercom-messenger-card-wrapper{-webkit-box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);border:1px solid #eee;border-top:none}.intercom-namespace .intercom-note-footer-text-center{text-align:center;background:#fff}.intercom-namespace .intercom-note-reply-to-body .intercom-scrollable .intercom-blocks{padding-bottom:30px}.intercom-namespace .intercom-chat-card,.intercom-namespace .intercom-chat-card-borderless-single{position:relative;border-radius:5px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.intercom-namespace .intercom-chat-card{background-color:#fff;-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);padding-bottom:15px}.intercom-namespace .intercom-chat-card .intercom-block-attachment-list{padding:0 20px}.intercom-namespace .intercom-chat-card-scrolled .intercom-chat-card-author{position:relative;z-index:1;-webkit-box-shadow:0 3px 2px -1px rgba(0,0,0,.3);box-shadow:0 3px 2px -1px rgba(0,0,0,.3)}.intercom-namespace .intercom-chat-card-borderless{padding-top:15px;clear:both}.intercom-namespace .intercom-chat-card-borderless-single{-webkit-box-shadow:none;box-shadow:none}.intercom-namespace .intercom-chat-card-borderless-single .intercom-image{background:#fff}.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-image img{border-radius:5px;margin:0 auto;display:block;max-width:100%;vertical-align:bottom}.intercom-namespace .intercom-chat-card-with-avatar{border-bottom-left-radius:0}.intercom-namespace .intercom-chat-card-avatar{position:absolute;bottom:0;left:-40px;-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);border-radius:100%}.intercom-namespace .intercom-chat-card-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-admin-profile-conversation-participant .intercom-avatar img,.intercom-namespace .intercom-chat-card-avatar .intercom-avatar img,.intercom-namespace .intercom-chat-snippet-avatar .intercom-avatar img,.intercom-namespace .intercom-conversation-rating-card-admin-avatar .intercom-avatar img,.intercom-namespace .intercom-conversation-summary-avatar .intercom-avatar img{width:32px;height:32px}.intercom-namespace .intercom-chat-card-avatar-team{-webkit-box-shadow:none;box-shadow:none}.intercom-namespace .intercom-chat-card-author{font-size:10px;color:rgba(115,115,118,.7);padding:0 20px 10px}.intercom-namespace .intercom-chat-card-body>.intercom-scrollable{padding:0 20px;max-height:300px}.intercom-namespace .intercom-chat-card-body-scrollable>.intercom-scrollable{padding-bottom:10px}.intercom-namespace .intercom-chat-card-body-scrollable:after{position:absolute;content:' ';bottom:15px;left:0;right:0;height:15px;background:linear-gradient(rgba(255,255,255,0),#fff 15px);border-radius:0 0 8px 8px}.intercom-namespace .intercom-chat-card-body-scrollable-borderless>.intercom-scrollable{max-height:100%}.intercom-namespace .intercom-chat-composer{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:17px 20px;margin-top:5px;width:100%;height:52px;background-color:#fafafa;border-radius:5px;border:0;font-size:14px;cursor:pointer;color:#737376;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.06),0 2px 32px rgba(0,0,0,.16);box-shadow:0 1px 6px rgba(0,0,0,.06),0 2px 32px rgba(0,0,0,.16)}.intercom-namespace .intercom-chat-composer .intercom-composer-placeholder{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:140px;line-height:18px}.intercom-namespace .intercom-chat-composer .intercom-composer-buttons{right:18px}.intercom-namespace .intercom-chat-composer .intercom-composer-emoji-button:before,.intercom-namespace .intercom-chat-composer .intercom-composer-upload-button:before{top:18px}.intercom-namespace .intercom-chat-dismiss-button{position:absolute;bottom:100%;padding-bottom:15px;right:0;display:none}.intercom-namespace .intercom-chat-dismiss-button span{background-color:#5d6c80;opacity:.8;color:#fff;font-size:13px;padding:8px 35px 8px 20px;border-radius:100px;cursor:pointer;background-position:calc(100% - 19px) center;background-image:url(https://js.intercomcdn.com/images/dismiss.249568e7.png);background-size:8px 8px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-chat-dismiss-button span{background-image:url(https://js.intercomcdn.com/images/dismiss@2x.1c82ba79.png)}}.intercom-namespace .intercom-chat:hover .intercom-chat-dismiss-button{display:block}.intercom-namespace .intercom-chat-dismiss-button-mobile{opacity:1;position:absolute;top:3px;right:3px;width:12px;height:12px;padding:10px;background-position:center;background-image:url(https://js.intercomcdn.com/images/close.1359f860.png);background-size:12px 12px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-chat-dismiss-button-mobile{background-image:url(https://js.intercomcdn.com/images/close@2x.570e24e7.png)}}.intercom-namespace .intercom-chat-dismiss-button-mobile span{display:none}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-pointer-close,.intercom-namespace .intercom-pointer-close:hover{background-image:url(https://js.intercomcdn.com/images/close@2x.570e24e7.png)}}.intercom-namespace .intercom-positioner-arrow{width:13px;height:25px;position:relative;overflow:hidden}.intercom-namespace .intercom-positioner-arrow:after{content:"";position:absolute;width:20px;height:20px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:2px}.intercom-namespace .intercom-positioner-arrow[x-placement^=top]{height:13px;width:25px}.intercom-namespace .intercom-positioner-arrow[x-placement^=top]:after{top:-12px;left:2px;-webkit-box-shadow:1px 1px 1px 0 rgba(0,0,0,.08);box-shadow:1px 1px 1px 0 rgba(0,0,0,.08)}.intercom-namespace .intercom-positioner-arrow[x-placement^=right]{height:25px;width:13px}.intercom-namespace .intercom-positioner-arrow[x-placement^=right]:after{-webkit-box-shadow:1px -1px 1px 2px rgba(0,0,0,.08);box-shadow:1px -1px 1px 2px rgba(0,0,0,.08);right:-12.5px}.intercom-namespace .intercom-positioner-arrow[x-placement^=bottom]{height:13px;width:25px}.intercom-namespace .intercom-positioner-arrow[x-placement^=bottom]:after{top:4.5px;left:2px;-webkit-box-shadow:-1px -1px 1px 0 rgba(0,0,0,.08);box-shadow:-1px -1px 1px 0 rgba(0,0,0,.08)}.intercom-namespace .intercom-positioner-arrow[x-placement^=left]{height:25px;width:13px}.intercom-namespace .intercom-positioner-arrow[x-placement^=left]:after{-webkit-box-shadow:-1px 1px 1px 2px rgba(0,0,0,.08);box-shadow:-1px 1px 1px 2px rgba(0,0,0,.08);left:-12.5px}.intercom-namespace .intercom-article.intercom-post .intercom-post-body{height:auto}.intercom-namespace .intercom-article.intercom-post .intercom-article-content{margin-top:60px;margin-bottom:84px;color:#737376}.intercom-namespace .intercom-article.intercom-post .intercom-article-title{font-size:33px;line-height:1.24;margin:0 15.27% 17px;color:#24b1ed;font-weight:400;overflow-wrap:break-word;word-break:break-word}.intercom-namespace .intercom-article.intercom-post .intercom-article-description{font-size:20px;line-height:1.35;margin:0 15.27% 17px;color:#737376;overflow-wrap:break-word;word-break:break-word}.intercom-namespace .intercom-article.intercom-post .intercom-authored-container{height:auto;margin:0 15.27% 30px}.intercom-namespace .intercom-article.intercom-post .intercom-authored-container .intercom-author-summary{width:calc(100% - 2*15.27% - 32px - 8px)}.intercom-namespace .intercom-article.intercom-post .intercom-authored-container .intercom-author-summary-name{font-weight:400;color:#737376}.intercom-namespace .intercom-article.intercom-post .intercom-authored-container .intercom-author-summary-from-clause,.intercom-namespace .intercom-article.intercom-post .intercom-block-ordered-list li,.intercom-namespace .intercom-article.intercom-post .intercom-block-unordered-list li{color:#000}.intercom-namespace .intercom-article.intercom-post .intercom-authored-container .intercom-authored-container-avatar{margin-right:10px}.intercom-namespace .intercom-article.intercom-post .intercom-block-image{margin:0 15.27% 34px}.intercom-namespace .intercom-article.intercom-post .intercom-block-image .intercom-image{height:inherit!important}.intercom-namespace .intercom-article.intercom-post .intercom-block-heading{line-height:1.24;color:#000;margin-bottom:17px;font-size:22px}.intercom-namespace .intercom-article.intercom-post .intercom-block-heading a,.intercom-namespace .intercom-article.intercom-post .intercom-block-subheading a{text-decoration:underline}.intercom-namespace .intercom-article.intercom-post .intercom-block-heading a:active,.intercom-namespace .intercom-article.intercom-post .intercom-block-heading a:focus,.intercom-namespace .intercom-article.intercom-post .intercom-block-heading a:hover,.intercom-namespace .intercom-article.intercom-post .intercom-block-subheading a:active,.intercom-namespace .intercom-article.intercom-post .intercom-block-subheading a:focus,.intercom-namespace .intercom-article.intercom-post .intercom-block-subheading a:hover{text-decoration:none}.intercom-namespace .intercom-article.intercom-post .intercom-block-subheading{line-height:1.24;color:#000;font-size:18px;font-weight:600}.intercom-namespace .intercom-article.intercom-post .intercom-block-ordered-list,.intercom-namespace .intercom-article.intercom-post .intercom-block-unordered-list{line-height:1.53}.intercom-namespace .intercom-article.intercom-post .intercom-block-paragraph{line-height:1.53;color:#000}.intercom-namespace .intercom-article.intercom-post .intercom-block-code{margin:1em 15.27%;padding:16px;overflow:auto;line-height:1.45;background-color:#f5f5f5;border-radius:3px}.intercom-namespace .intercom-article.intercom-post code{font-family:Courier,monospace;background-color:#f5f5f5;padding:.2em 0;margin:0;font-size:85%;border-radius:3px}.intercom-namespace .intercom-snippet{max-height:120px;width:340px;cursor:pointer}.intercom-namespace .intercom-snippet *{cursor:pointer}.intercom-namespace .intercom-snippet .intercom-authored-container-top{padding:0}.intercom-namespace .intercom-snippet .intercom-authored-container{border-radius:5px;padding:20px;-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09)}.intercom-namespace .intercom-snippet-body{margin:5px 0 0;font-size:14px;overflow:hidden;line-height:22px;max-height:44px;color:#000;-webkit-animation:intercom-notification-body-animation 500ms ease;animation:intercom-notification-body-animation 500ms ease;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.intercom-namespace .intercom-chat-snippet{height:100%;width:340px;position:relative}.intercom-namespace .intercom-chat-snippet *{cursor:pointer}.intercom-namespace .intercom-chat-snippet .intercom-snippet-body{margin-top:12px}.intercom-namespace .intercom-chat-snippet-avatar,.intercom-namespace .intercom-chat-snippet-card{-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09)}.intercom-namespace .intercom-chat-snippet-avatar{bottom:0;left:3px;position:absolute;border-radius:50%}.intercom-namespace .intercom-chat-snippet-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-chat-snippet-card{margin-left:45px;padding:17px 22px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border-radius:5px;border-bottom-left-radius:0;font-size:13px;line-height:1.5;height:100%;position:relative}.intercom-namespace .intercom-messenger-header-buttons-back-button{z-index:2147483000;position:absolute;background-position:center;width:51px;height:51px;margin:12px 2px 12px 8px;top:0;left:0;cursor:pointer}.intercom-namespace .intercom-messenger-header-buttons-back-button *{cursor:pointer}.intercom-namespace .intercom-messenger-header-buttons-back-button-body{width:51px;height:51px;padding:8px;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.intercom-namespace .intercom-messenger-header-buttons-back-button-body:hover,.intercom-namespace .intercom-messenger-header-buttons-close-button-body:hover{background-color:rgba(0,0,0,.1)}.intercom-namespace .intercom-messenger-header-buttons-back-icon{margin:0 auto;width:9px;height:15px}.intercom-namespace .intercom-close-icon>g>g,.intercom-namespace .intercom-messenger-header-buttons-back-icon>g>g{fill:rgb(255, 255, 255)}.intercom-namespace .intercom-messenger-header-buttons-close-button{z-index:2147483003;position:absolute;width:51px;height:51px;top:0;right:0;background-position:center;margin:12px 8px 12px 2px;display:none;cursor:pointer}.intercom-namespace .intercom-messenger-header-buttons-close-button *{cursor:pointer}.intercom-namespace .intercom-messenger-header-buttons-close-button-body{width:51px;height:51px;margin:0 auto;border-radius:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.intercom-namespace .intercom-is-mobile-screen-size .intercom-messenger-header-buttons-close-button,.intercom-namespace .intercom-messenger-header-buttons-close-button-enabled{display:block}.intercom-namespace .intercom-close-icon{margin:0 auto;width:12px;height:12px}.intercom-namespace .intercom-messenger-header-buttons-unread-count{display:inline-block;right:0;top:0;background:#fc576b;width:22px;height:22px;line-height:22px;border-radius:50%;color:#fff;font-size:12px;font-weight:500;text-align:center;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.27);box-shadow:0 1px 0 rgba(0,0,0,.27);position:absolute}.intercom-namespace .intercom-conversations-header .intercom-messenger-header-buttons-unread-count{display:none}.intercom-namespace .intercom-borderless .intercom-typing-admin .intercom-typing-admin-bubble:after,.intercom-namespace .intercom-chat-card.intercom-chat-card-with-avatar:after,.intercom-namespace .intercom-chat-snippet-card:after,.intercom-namespace .intercom-comment-body-borderless.intercom-comment-body-admin-with-avatar .intercom-comment-body-block-group-text:last-child:after,.intercom-namespace .intercom-comment-container-borderless-with-avatar .intercom-comment:not(.intercom-comment-with-body):after{content:'';position:absolute;bottom:0;left:-5px;width:0;height:0;border-style:solid;border-width:0 0 13px 5px;border-color:transparent transparent #fff}.intercom-namespace .intercom-conversations-header{position:absolute;top:0;left:0;right:0;height:75px}.intercom-namespace .intercom-conversations-header-body{color:rgb(255, 255, 255);font-size:20px;text-align:center;line-height:75px}.intercom-namespace .intercom-conversations{position:absolute;top:0;bottom:0;left:0;right:0}.intercom-namespace .intercom-conversations-body{overflow-y:auto;height:100%}.intercom-namespace .intercom-conversations-body-conversations{padding-bottom:105px}.intercom-namespace .intercom-conversations-body-empty{height:100%;background-image:url(https://js.intercomcdn.com/images/dummy-rows.943c931a.png);background-size:360px 512px;background-position:top center;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-conversations-body-empty{background-image:url(https://js.intercomcdn.com/images/dummy-rows@2x.567b64f5.png)}}.intercom-namespace .intercom-conversations-body-empty-text-container{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.intercom-namespace .intercom-conversations-body-empty-header{font-size:17px;text-align:center;padding-bottom:6px}.intercom-namespace .intercom-conversations-body-empty-text{font-size:15px;text-align:center;color:#737376}.intercom-namespace .intercom-conversations-footer{z-index:2147483001;text-align:center;position:absolute;bottom:0;left:0;right:0;border-radius:0 0 6px 6px;height:90px;pointer-events:none;background:-webkit-gradient(linear,left bottom,left top,from(#fff),to(rgba(255,255,255,0)));background:linear-gradient(0deg,#fff,rgba(255,255,255,0))}.intercom-namespace .intercom-conversation{bottom:0}.intercom-namespace .intercom-conversation,.intercom-namespace .intercom-conversation-header{position:absolute;top:0;left:0;right:0}.intercom-namespace .intercom-conversation-header-close-button-enabled .intercom-admin-profile-compact,.intercom-namespace .intercom-conversation-header-close-button-enabled .intercom-team-profile-compact{right:61px}.intercom-namespace .intercom-admin-profile-conversation-participants-wrapper{font-size:13px;padding:10px 30px 24px 72px;margin:0 -30px 0 -75px;color:#fff}.intercom-namespace .intercom-admin-profile-conversation-participants-header{border-top:1px solid rgba(255,255,255,.25);padding-left:3px;padding-top:16px;line-height:1.5;margin-bottom:5px}.intercom-namespace .intercom-admin-profile-conversation-participants:after,.intercom-namespace .intercom-admin-profile-conversation-participants:before{content:" ";display:table}.intercom-namespace .intercom-admin-profile-conversation-participants:after{clear:both}.intercom-namespace .intercom-admin-profile-conversation-participant{display:inline-block;position:relative;float:left;margin:3px;cursor:default}.intercom-namespace .intercom-admin-profile-conversation-participant .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px;cursor:default}.intercom-namespace .intercom-admin-profile-conversation-participant:hover .intercom-admin-profile-conversation-participant-name{visibility:visible}.intercom-namespace .intercom-admin-profile-conversation-participant-name{z-index:2147483001;visibility:hidden;position:absolute;top:calc(100% + 10px);left:50%;border-radius:4px;padding:4px 8px;font-size:12px;line-height:14px;background-color:#737376;color:#fff;white-space:nowrap}.intercom-namespace .intercom-admin-profile-conversation-participant-name:after{bottom:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:transparent transparent #516072;border-width:5px;margin-left:-5px}.intercom-namespace .intercom-admin-profile-conversation-participant-name-wrapper{max-width:130px;white-space:nowrap;overflow:hidden;display:block;text-overflow:ellipsis}.intercom-namespace .intercom-admin-profile-remaining-participants{margin:3px;line-height:32px;width:32px;text-align:center;float:left;white-space:nowrap}.intercom-namespace .intercom-conversation-footer{position:absolute;bottom:0;left:0;right:0;border-radius:0 0 6px 6px}.intercom-namespace .intercom-composer-suggestions-container{background:#fff}.intercom-namespace .intercom-composer-suggestions{padding:8px 0;border-top:#e6e6e6;border-top-style:solid;border-top-width:1px}.intercom-namespace .intercom-composer-suggestion{cursor:pointer;padding:8px 30px;font-size:14px;line-height:24px}.intercom-namespace .intercom-composer-suggestion:hover{background-color:#ecf0f1}.intercom-namespace .intercom-composer-suggestions-title{padding:0 16px 16px;display:block;color:#737376;font-size:14px}.intercom-namespace .intercom-composer-suggestions-title .intercom-block{text-align:center}.intercom-namespace .intercom-conversation-body,.intercom-namespace .intercom-conversation-body-parts{position:absolute;top:0;left:0;right:0;bottom:0}.intercom-namespace .intercom-conversation-body-parts{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.intercom-namespace .intercom-conversation-body-quick-replies{-ms-flex-negative:0;flex-shrink:0;padding:0 19px}.intercom-namespace .intercom-conversation-summary{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:stretch;align-content:stretch;position:relative;padding:24px;cursor:pointer}.intercom-namespace .intercom-conversation-summary *{cursor:pointer}.intercom-namespace .intercom-conversation-summary:hover{background-color:#fafafa}.intercom-namespace .intercom-conversation-summary:after,.intercom-namespace .intercom-conversation-summary:before{content:"";position:absolute;height:100%;left:0;right:0;top:0;border-top:1px solid #eee}.intercom-namespace .intercom-conversation-summary:before{border-top:2px solid transparent}.intercom-namespace .intercom-conversation-summary:first-child:after{border-top:none}.intercom-namespace .intercom-conversation-summary:last-child:after{border-bottom:1px solid #eee}.intercom-namespace .intercom-home-screen .intercom-conversation-summary:after{left:24px;right:24px}.intercom-namespace .intercom-conversation-summary-avatar{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.intercom-namespace .intercom-conversation-summary-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-conversation-summary-avatar .intercom-team-avatar-container{height:32px}.intercom-namespace .intercom-conversation-summary-avatar .intercom-team-avatar-large{width:36px;height:36px;line-height:36px}.intercom-namespace .intercom-conversation-summary-meta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:8px}.intercom-namespace .intercom-conversation-summary-body{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:16px;min-width:0}.intercom-namespace .intercom-conversation-summary-body-author,.intercom-namespace .intercom-conversation-summary-timestamp{font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#737376}.intercom-namespace .intercom-conversation-summary-timestamp{text-align:right}.intercom-namespace .intercom-conversation-summary-content-container{color:#3a3c4c;font-size:13px;display:-webkit-box;display:-ms-flexbox;display:flex}.intercom-namespace .intercom-conversation-summary-content-container span{display:inline-block}.intercom-namespace .intercom-conversation-summary-content-author-prefix{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;color:#000;white-space:pre}.intercom-namespace .intercom-conversation-summary-content-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#000}.intercom-namespace .intercom-conversation-summary-content-text-single-block{font-style:italic}.intercom-namespace .intercom-conversation-summary-unread-dot{position:absolute;background-color:#d22628;width:6px;height:6px;border-radius:50%;content:'';left:9px;top:calc(50% - 3px)}.intercom-namespace .intercom-conversation-summary-unread .intercom-conversation-summary-body-author,.intercom-namespace .intercom-conversation-summary-unread .intercom-conversation-summary-content-text{font-weight:700;color:#3a3c4c}.intercom-namespace .intercom-conversation-summary-unread .intercom-conversation-summary-body-author span,.intercom-namespace .intercom-conversation-summary-unread .intercom-conversation-summary-content-text span{font-weight:400}.intercom-namespace .intercom-conversation-summary-timestamp .intercom-conversation-summary-unread-dot,.intercom-namespace .intercom-conversation-summary-user-icon{display:none}.intercom-namespace .intercom-conversation-part{padding-bottom:16px}.intercom-namespace .intercom-conversation-part:after,.intercom-namespace .intercom-conversation-part:before{content:" ";display:table}.intercom-namespace .intercom-conversation-part:after{clear:both}.intercom-namespace .intercom-conversation-part-failed *{cursor:pointer}.intercom-namespace .intercom-conversation-part-grouped{padding-bottom:8px}.intercom-namespace .intercom-conversation-part-last,.intercom-namespace .intercom-conversation-part-last-spaced{padding-bottom:24px}.intercom-namespace .intercom-conversation-part-metadata{clear:both;color:#737376;font-size:13px;padding-top:7px;width:75%}.intercom-namespace .intercom-conversation-part-metadata-attribution{display:inline}.intercom-namespace .intercom-conversation-part-metadata-save-state{white-space:nowrap}.intercom-namespace .intercom-conversation-part-admin .intercom-conversation-part-metadata{padding-left:45px}.intercom-namespace .intercom-conversation-part-user .intercom-conversation-part-metadata,.intercom-namespace .intercom-conversation-part-user .intercom-conversation-part-metadata-save-state{float:right}.intercom-namespace .intercom-conversation-part-other-user .intercom-conversation-part-metadata{padding-left:45px}.intercom-namespace .intercom-conversation-part-failed .intercom-conversation-part-metadata{background-image:url(https://js.intercomcdn.com/images/warning-icon.cc84a0dd.png);background-size:11px 11px;padding-left:15px;background-position:left 7px;background-repeat:no-repeat;color:#d22628;width:auto}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-conversation-part-failed .intercom-conversation-part-metadata{background-image:url(https://js.intercomcdn.com/images/warning-icon@2x.d238804a.png)}}.intercom-namespace .intercom-conversation-parts,.intercom-namespace .intercom-conversation-parts-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.intercom-namespace .intercom-conversation-parts-wrapper{-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow-anchor:none;height:auto;-webkit-box-orient:vertical}.intercom-namespace .intercom-conversation-parts{padding:24px 24px 0;-webkit-box-orient:horizontal;-ms-flex-flow:row wrap;flex-flow:row wrap}.intercom-namespace .intercom-conversation-parts>*{-webkit-box-flex:1;-ms-flex:1 100%;flex:1 100%;max-width:100%}.intercom-namespace .intercom-conversation-parts-date-divider{text-align:center;color:#737376;font-size:13px;clear:both;padding-top:14px;padding-bottom:14px}.intercom-namespace .intercom-conversation-parts-date-divider:first-child{padding-top:0}.intercom-namespace .intercom-borderless .intercom-conversation-part-last,.intercom-namespace .intercom-borderless .intercom-conversation-parts{padding:0}.intercom-namespace .intercom-borderless .intercom-conversation-parts-faded{opacity:.2}.intercom-namespace .intercom-conversation-rating{margin:30px 0;position:relative;text-align:left;background-color:#fff;border-radius:5px;color:#000;-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-conversation-rating-options-container{padding:20px 20px 0}.intercom-namespace .intercom-conversation-rating-remark-container{padding:5px 15px;border-top:1px solid #eee}.intercom-namespace .intercom-conversation-rating-thanks-remark{border-top:1px solid #eee;color:#737376;font-size:14px;line-height:19px;max-height:140px;overflow-y:auto;padding:16px 24px}.intercom-namespace .intercom-conversation-rating-input-container{position:relative;display:table;width:100%}.intercom-namespace .intercom-conversation-rating-input-container div,.intercom-namespace .intercom-notification-channels-input-container div{display:table-cell;vertical-align:top}.intercom-namespace .intercom-conversation-rating-input-container .intercom-conversation-rating-input-submit-container{width:40px}.intercom-namespace .intercom-conversation-rating-title-container{position:relative;margin-bottom:5px}.intercom-namespace .intercom-conversation-rating-title{font-size:14px;line-height:24px;color:#000;-webkit-transition:opacity 300ms 1000ms,max-height 400ms 1000ms;transition:opacity 300ms 1000ms,max-height 400ms 1000ms;position:static;max-height:48px;text-align:center}.intercom-namespace .intercom-conversation-rating-emojis-container{margin:8px 10px 6px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.intercom-namespace .intercom-conversation-rating-emoji-wrapper{display:inline-block}.intercom-namespace .intercom-conversation-rating-emoji-container{width:30px;margin:6px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.intercom-namespace .intercom-conversation-rating-emoji-container.chosen .intercom-conversation-rating-emoji{-webkit-transform:scale(1.28);transform:scale(1.28)}.intercom-namespace .intercom-conversation-rating-emoji-container.other-chosen .intercom-conversation-rating-emoji{-webkit-filter:grayscale(1) opacity(.3);filter:grayscale(1) opacity(.3)}.intercom-namespace .intercom-conversation-rating-emoji{display:inline-block;width:28px;height:28px}.intercom-namespace .intercom-conversation-rating-emoji-1,.intercom-namespace .intercom-conversation-rating-emoji-1:hover{background-image:url(https://js.intercomcdn.com/images/rating-1.d23e2d60.png);background-size:28px 28px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-conversation-rating-emoji-1,.intercom-namespace .intercom-conversation-rating-emoji-1:hover{background-image:url(https://js.intercomcdn.com/images/rating-1@2x.a3ce1c38.png)}}.intercom-namespace .intercom-conversation-rating-emoji-3,.intercom-namespace .intercom-conversation-rating-emoji-3:hover{background-image:url(https://js.intercomcdn.com/images/rating-3.347818fe.png);background-size:28px 28px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-conversation-rating-emoji-3,.intercom-namespace .intercom-conversation-rating-emoji-3:hover{background-image:url(https://js.intercomcdn.com/images/rating-3@2x.b98f99f2.png)}}.intercom-namespace .intercom-conversation-rating-emoji-4,.intercom-namespace .intercom-conversation-rating-emoji-4:hover{background-image:url(https://js.intercomcdn.com/images/rating-4.e79b0027.png);background-size:28px 28px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-conversation-rating-emoji-4,.intercom-namespace .intercom-conversation-rating-emoji-4:hover{background-image:url(https://js.intercomcdn.com/images/rating-4@2x.76967faf.png)}}.intercom-namespace .intercom-conversation-rating-emoji-5,.intercom-namespace .intercom-conversation-rating-emoji-5:hover{background-image:url(https://js.intercomcdn.com/images/rating-5.10d57bbf.png);background-size:28px 28px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-conversation-rating-emoji-5,.intercom-namespace .intercom-conversation-rating-emoji-5:hover{background-image:url(https://js.intercomcdn.com/images/rating-5@2x.e5f22789.png)}}.intercom-namespace .intercom-conversation-rating-emoji-2,.intercom-namespace .intercom-conversation-rating-emoji-2:hover{background-image:url(https://js.intercomcdn.com/images/rating-2.b6481b2d.png);background-size:28px 28px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-conversation-rating-emoji-2,.intercom-namespace .intercom-conversation-rating-emoji-2:hover{background-image:url(https://js.intercomcdn.com/images/rating-2@2x.bac056e1.png)}}.intercom-namespace .intercom-conversation-rating-emoji-tooltip{visibility:hidden;margin-top:5px;cursor:pointer;font-size:13px;color:#737376;text-align:center}.intercom-namespace .intercom-conversation-rating-emoji-container:hover .intercom-conversation-rating-emoji{-webkit-transform:scale(1.28);transform:scale(1.28);-webkit-filter:none;filter:none}.intercom-namespace .intercom-conversation-rating-emoji-container:hover .intercom-conversation-rating-emoji-tooltip{visibility:visible}.intercom-namespace .intercom-conversation-rating-thanks-container{padding:24px}.intercom-namespace .intercom-conversation-rating-chosen-rating{font-size:14px;color:#3a3c4c;line-height:22px;text-align:center;margin-bottom:3px}.intercom-namespace .intercom-conversation-rating-thanks{font-size:13px;line-height:19px;color:#737376;text-align:center}.intercom-namespace .intercom-conversation-rating-emoji-thanks,.intercom-namespace .intercom-conversation-rating-emoji-thanks:hover{width:18px;height:18px;display:inline-block;background-size:contain;vertical-align:sub}.intercom-namespace .intercom-conversation-rating-input{position:relative;max-width:180px}.intercom-namespace .intercom-conversation-rating-input pre,.intercom-namespace .intercom-conversation-rating-input textarea{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;width:100%;padding:12px;font-size:14px;font-family:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;border:0;line-height:19px;white-space:pre-wrap;word-wrap:break-word}.intercom-namespace .intercom-conversation-rating-input textarea{position:absolute;top:0;left:0;color:#000;resize:none;overflow-y:hidden}.intercom-namespace .intercom-conversation-rating-input textarea::-webkit-input-placeholder{color:#737376;font-style:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:19px;opacity:.7}.intercom-namespace .intercom-conversation-rating-input textarea::-moz-placeholder{color:#737376;font-style:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:19px;opacity:.7}.intercom-namespace .intercom-conversation-rating-input textarea:-ms-input-placeholder{color:#737376;font-style:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:19px;opacity:.7}.intercom-namespace .intercom-conversation-rating-input pre{visibility:hidden;max-height:140px}.intercom-namespace .intercom-conversation-rating-input-submit-button{width:40px;height:40px;border:0;-webkit-transition:border-radius 300ms,opacity 300ms 600ms,height 400ms 1000ms;transition:border-radius 300ms,opacity 300ms 600ms,height 400ms 1000ms}.intercom-namespace .intercom-conversation-rating-input-submit-icon{position:absolute;top:2px;bottom:0;width:40px;height:40px;cursor:pointer;-webkit-transition:opacity 150ms ease,-webkit-transform 300ms linear;transition:transform 300ms linear,opacity 150ms ease;transition:transform 300ms linear,opacity 150ms ease,-webkit-transform 300ms linear;background-position:center;background-image:url(https://js.intercomcdn.com/images/send-button.48bc69b8.png);background-size:20px 20px;background-repeat:no-repeat;opacity:.8}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-conversation-rating-input-submit-icon{background-image:url(https://js.intercomcdn.com/images/send-button@2x.40884887.png)}}.intercom-namespace .intercom-conversation-rating-input-submit-icon:hover{opacity:1}.intercom-namespace .intercom-conversation-rating-card{width:100%;position:relative;float:left}.intercom-namespace .intercom-conversation-rating-card .intercom-conversation-rating{margin-top:8px;margin-bottom:8px;margin-left:45px}.intercom-namespace .intercom-conversation-rating-card-borderless .intercom-conversation-rating{margin-left:45px}.intercom-namespace .intercom-conversation-rating-card-admin-avatar{position:absolute;left:0;bottom:10px}.intercom-namespace .intercom-conversation-rating-card-admin-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-link-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;margin:11px 0}.intercom-namespace .intercom-link-container .intercom-link-container-icon{width:16px;height:16px;color:#777678;vertical-align:sub;padding-right:8px}.intercom-namespace .intercom-link-container .intercom-link-container-icon>g{fill:#286efa}.intercom-namespace .intercom-link-container a.intercom-link-target{display:inline-block;color:#777678;font-size:14px;padding:8px 16px;border-radius:16px;-webkit-transition:all 80ms;transition:all 80ms}.intercom-namespace .intercom-link-container a.intercom-link-target:hover{background:#f5f5f5}.intercom-namespace .intercom-messenger-link-container{z-index:2147483002}.intercom-namespace .intercom-messenger-link-container .intercom-link-container{position:absolute;opacity:.97;bottom:0;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;margin:0;padding:5px 0;background-color:#fff;-webkit-box-shadow:0 -10px 10px 1px rgba(0,0,0,.04);box-shadow:0 -10px 10px 1px rgba(0,0,0,.04)}.intercom-namespace .intercom-messenger-link-container .intercom-link-container,.intercom-namespace .intercom-messenger-link-container .intercom-link-container .intercom-link{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.intercom-namespace .intercom-under-construction-banner{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAGCAIAAAAOtlpdAAAANElEQVQoz2P4etGEEnRxi0lHFdXQ8slQYxkGoZsochbt3ES+s2jqJjKdRWs3keMsOrgJiAB4ItlirqqJGgAAAABJRU5ErkJggg==);background-repeat:repeat-x;background-size:25px 3px;margin-left:-16px;margin-right:-16px}.intercom-namespace .intercom-notification-channels{margin:30px 0;padding:16px 20px 20px;color:#000;position:relative;border-radius:5px;text-align:left;background-color:#fff}.intercom-namespace .intercom-notification-channels-responder .intercom-notification-channels-input input{border:1px solid #e1e1e1;border-right:0}.intercom-namespace .intercom-notification-channels-responder .intercom-notification-channels-input-submit-button{background-color:#24b1ed}.intercom-namespace .intercom-notification-channels-responder .intercom-notification-channels-input-success input{border:1px solid #fff;border-right:0}.intercom-namespace .intercom-notification-channels-input-container{position:relative;display:table;width:100%}.intercom-namespace .intercom-notification-channels-input-container .intercom-notification-channels-input-submit-container{width:40px}.intercom-namespace .intercom-notification-channels-input-container .intercom-notification-channels-input-submit-container-deactivated{width:1px;-webkit-transition:width 300ms 1000ms;transition:width 300ms 1000ms}.intercom-namespace .intercom-notification-channels-title-container{position:relative;margin-bottom:5px}.intercom-namespace .intercom-notification-channels-title,.intercom-namespace .intercom-notification-channels-title-success{font-size:14px;line-height:24px;color:#000;-webkit-transition:opacity 300ms 1000ms,max-height 400ms 1000ms;transition:opacity 300ms 1000ms,max-height 400ms 1000ms}.intercom-namespace .intercom-notification-channels-title{position:static;max-height:48px}.intercom-namespace .intercom-notification-channels-success .intercom-notification-channels-title,.intercom-namespace .intercom-notification-channels-title-success{position:absolute;top:0;visibility:hidden;opacity:0;max-height:24px}.intercom-namespace .intercom-notification-channels-success .intercom-notification-channels-title-success{position:static;opacity:1;visibility:visible;max-height:48px}.intercom-namespace .intercom-notification-channels-success-message .intercom-notification-channels-title{opacity:1}.intercom-namespace .intercom-notification-channels-existing-value,.intercom-namespace .intercom-notification-channels-placeholder{font-size:14px;line-height:19px;color:#737376;text-overflow:ellipsis;overflow:hidden}.intercom-namespace .intercom-notification-channels-placeholder{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;height:40px;width:100%;padding:4px 12px 0;font-weight:400;font-family:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;line-height:32px;cursor:text;z-index:1}.intercom-namespace .intercom-notification-channels-input{position:relative}.intercom-namespace .intercom-notification-channels-input input{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;height:40px;width:100%;padding:0 12px;font-size:14px;font-family:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;color:#000;border-radius:4px 0 0 4px;border:1px solid #e1e1e1;border-right:0;-webkit-appearance:none;-webkit-transition:border 300ms,color 400ms 600ms,padding 300ms 600ms,height 400ms 1000ms;transition:border 300ms,color 400ms 600ms,padding 300ms 600ms,height 400ms 1000ms}.intercom-namespace .intercom-notification-channels-input input:disabled{opacity:.7}.intercom-namespace .intercom-notification-channels-input-success input{border:1px solid #fff;border-right:0;padding:0;height:20px;font-weight:400;color:#000;-webkit-text-fill-color:#000;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-notification-channels-input-success input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #fff inset;-webkit-text-fill-color:#000!important}.intercom-namespace .intercom-notification-channels-input-error input{border:1px solid #fcedef;background-color:#fcedef}.intercom-namespace .intercom-notification-channels-phone-input .intercom-flag{position:absolute;top:12px;left:12px;z-index:1;-webkit-transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms,-webkit-transform 300ms}.intercom-namespace .intercom-notification-channels-phone-input .intercom-notification-channels-placeholder,.intercom-namespace .intercom-notification-channels-phone-input input{padding-left:33px}.intercom-namespace .intercom-notification-channels-input-success .intercom-flag{-webkit-transform:scale(0);transform:scale(0)}.intercom-namespace .intercom-notification-channels-input-success input{padding-left:0}.intercom-namespace .intercom-notification-channels-input-submit-button{width:35px;height:40px;border-radius:0 4px 4px 0;background-color:#24b1ed;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.15);box-shadow:0 1px 2px 0 rgba(0,0,0,.15);-webkit-transition:border-radius 300ms,opacity 300ms 600ms,height 400ms 1000ms;transition:border-radius 300ms,opacity 300ms 600ms,height 400ms 1000ms}.intercom-namespace .intercom-notification-channels-input-submit-button-saving,.intercom-namespace .intercom-notification-channels-input-submit-button:hover{opacity:.7}.intercom-namespace .intercom-notification-channels-input-submit-icon,.intercom-namespace .intercom-notification-channels-input-valid-icon{position:absolute;top:0;bottom:0;width:35px;height:40px;-webkit-transition:opacity 150ms linear,-webkit-transform 300ms linear;transition:transform 300ms linear,opacity 150ms linear;transition:transform 300ms linear,opacity 150ms linear,-webkit-transform 300ms linear;background-position:center}.intercom-namespace .intercom-notification-channels-input-submit-icon{background-image:url(https://js.intercomcdn.com/images/next-icon.a9124933.png);background-size:8px 13px;background-repeat:no-repeat;opacity:1}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-notification-channels-input-submit-icon{background-image:url(https://js.intercomcdn.com/images/next-icon@2x.f3c3e26a.png)}}.intercom-namespace .intercom-notification-channels-input-valid-icon{background-image:url(https://js.intercomcdn.com/images/check-icon.7cabe467.png);background-size:18px 14px;background-repeat:no-repeat;opacity:0;-webkit-transform:rotate(-90deg) scale(.5);transform:rotate(-90deg) scale(.5)}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-notification-channels-input-valid-icon{background-image:url(https://js.intercomcdn.com/images/check-icon@2x.2c09c31c.png)}}.intercom-namespace .intercom-notification-channels-input-submit-button-success{background-color:#38a652;opacity:0;border-radius:4px;height:20px}.intercom-namespace .intercom-image img,.intercom-namespace .intercom-notification-channels-input-submit-button-success:hover{opacity:0}.intercom-namespace .intercom-notification-channels-input-submit-button-success .intercom-notification-channels-input-submit-icon{opacity:0;-webkit-transform:rotate(270deg) translate(-4px,-3px);transform:rotate(270deg) translate(-4px,-3px)}.intercom-namespace .intercom-notification-channels-input-submit-button-success .intercom-notification-channels-input-valid-icon{opacity:1;-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}.intercom-namespace .intercom-notification-channels-error{position:relative;height:23px}.intercom-namespace .intercom-notification-channels-error-text{position:absolute;bottom:0;color:#d22628;font-size:13px;line-height:13px}.intercom-namespace .intercom-notification-channels-card{width:100%;position:relative;float:left}.intercom-namespace .intercom-notification-channels-card .intercom-notification-channels{margin-top:6px;margin-bottom:0;margin-left:45px}.intercom-namespace .intercom-notification-channels-card .intercom-notification-channels-option{margin-right:19px}.intercom-namespace .intercom-notification-channels-card-borderless .intercom-notification-channels{margin-left:45px}.intercom-namespace .intercom-notification-channels-card-borderless .intercom-notification-channels-option{margin-right:9px}.intercom-namespace .intercom-notification-channels-card-admin-avatar{position:absolute;left:0;bottom:10px}.intercom-namespace .intercom-notification-channels-card-admin-avatar .intercom-avatar{width:28px;height:28px;line-height:28px;font-size:14px}.intercom-namespace .intercom-notification-channels-card-admin-avatar .intercom-avatar img{width:28px;height:28px}.intercom-namespace .intercom-notification-channels-option-container{height:30px;opacity:1;-webkit-transition:opacity 300ms 300ms,height 400ms 1000ms;transition:opacity 300ms 300ms,height 400ms 1000ms}.intercom-namespace .intercom-notification-channels-option-container-success{height:0;opacity:0}.intercom-namespace .intercom-notification-channels-option{font-size:13px;line-height:20px;color:#737376;margin-right:39px}.intercom-namespace .intercom-notification-channels-option:last-child{margin-right:0}.intercom-namespace .intercom-notification-channels-option:hover{color:#fafafa;border-bottom:1px solid}.intercom-namespace .intercom-notification-channels-option-selected{color:#000;border-bottom:1px solid}.intercom-namespace .fb-send-to-messenger{max-height:57px}.intercom-namespace .test-toggle{position:absolute;bottom:-60px}.intercom-namespace .intercom-participant-event{max-width:100%;font-size:14px;vertical-align:middle;line-height:14px;position:relative}.intercom-namespace .intercom-participant-event-text-container{display:inline-block;vertical-align:middle;padding:3px 0;margin-left:15px;max-width:calc(100% - 45px);color:#78909c;line-height:1.3}.intercom-namespace .intercom-participant-event-text{color:#737376;overflow-wrap:break-word;word-break:break-word}.intercom-namespace .intercom-participant-event-avatar{width:30px;display:inline-block;vertical-align:middle}.intercom-namespace .intercom-participant-event-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-participant-event-avatar .intercom-avatar img{width:32px;height:32px}.intercom-namespace .intercom-team-profile-full{padding:24px 24px 0 75px;-webkit-box-sizing:border-box;box-sizing:border-box}.intercom-namespace .intercom-team-profile-full-team-name{color:rgb(255, 255, 255);font-size:20px;line-height:30px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-team-profile-full-admin-name{color:rgba(255, 255, 255, 0.7);font-size:13px;width:100%;max-width:85px;text-align:center;padding-top:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.intercom-namespace .intercom-team-profile-full-intro,.intercom-namespace .intercom-team-profile-response-delay-office-hours:before{display:none}.intercom-namespace .intercom-team-profile-full-introduction{color:rgba(255, 255, 255, 0.7);font-size:14px;line-height:21px}.intercom-namespace .intercom-team-profile-full-introduction span{word-break:break-word}.intercom-namespace .intercom-team-profile-full-avatar-container{padding:18px 0;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.intercom-namespace .intercom-team-profile-full-avatar{display:inline-block;padding-right:20px;-webkit-box-flex:initial;-ms-flex:initial;flex:initial;vertical-align:top;text-align:center}.intercom-namespace .intercom-team-profile-full-avatar .intercom-avatar{width:51px;height:51px;line-height:51px;font-size:25.5px}.intercom-namespace .intercom-team-profile-full-avatar .intercom-avatar img{width:51px;height:51px}.intercom-namespace .intercom-team-profile-response-delay-wrapper{margin-bottom:30px}.intercom-namespace .intercom-team-profile-compact{position:absolute;height:75px;top:0;left:60px;right:20px;padding-top:12px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-webkit-transition:opacity .2s;transition:opacity .2s;cursor:pointer}.intercom-namespace .intercom-team-profile-compact *{cursor:pointer}.intercom-namespace .intercom-admin-profile-compact:hover .intercom-admin-profile-compact-contents,.intercom-namespace .intercom-team-profile-compact:hover .intercom-team-profile-compact-contents{background-color:rgba(0,0,0,.1)}.intercom-namespace .intercom-team-profile-expanded .intercom-team-profile-compact,.intercom-namespace .intercom-team-profile-expanded .intercom-team-profile-compact *{pointer-events:none}.intercom-namespace .intercom-team-profile-compact-avatar-container{display:inline-block;vertical-align:middle;white-space:nowrap;float:left;padding-right:10px}.intercom-namespace .intercom-team-profile-compact-avatar{border:2px solid #24b1ed;position:relative;display:inline-block;border-radius:100%}.intercom-namespace .intercom-team-profile-compact-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-admin-profile-compact-avatar .intercom-avatar img,.intercom-namespace .intercom-team-profile-compact-avatar .intercom-avatar img{width:32px;height:32px}.intercom-namespace .intercom-team-profile-compact-contents{border-radius:8px;padding:8px;height:51px;-webkit-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden}.intercom-namespace .intercom-team-profile-compact-body{display:block;vertical-align:middle;padding-left:10px}.intercom-namespace .intercom-team-profile-compact-team-name{color:rgb(255, 255, 255);font-size:16px;line-height:1.1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-team-profile-response-delay-text{white-space:normal}.intercom-namespace .intercom-team-profile-compact-response-delay{color:rgba(255, 255, 255, 0.7);font-size:14px;line-height:1.3em;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex}.intercom-namespace .intercom-team-profile-compact-response-delay .intercom-out-of-office-icon{min-width:8px;margin-top:3px}.intercom-namespace .intercom-team-profile-compact-response-delay .intercom-team-profile-response-delay-text,.intercom-namespace .intercom-team-profile-response-delay{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.intercom-namespace .intercom-team-profile-response-delay{position:relative;font-size:14px;line-height:21px;color:rgb(255, 255, 255)}.intercom-namespace .intercom-team-profile-response-delay-office-hours{color:rgb(255, 255, 255)}.intercom-namespace .intercom-team-profile-compact-response-delay .intercom-out-of-office-icon,.intercom-namespace .intercom-team-profile-compact-response-delay-office-hours .intercom-out-of-office-icon,.intercom-namespace .intercom-team-profile-response-delay-wrapper .intercom-out-of-office-icon{padding-bottom:0}.intercom-namespace .intercom-team-profile-compact-response-delay .intercom-out-of-office-icon-fill,.intercom-namespace .intercom-team-profile-compact-response-delay-office-hours .intercom-out-of-office-icon-fill,.intercom-namespace .intercom-team-profile-response-delay-wrapper .intercom-out-of-office-icon-fill{fill:rgb(255, 255, 255)}.intercom-namespace .intercom-admin-profile-compact-contents{padding:8px;height:50px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.intercom-namespace .intercom-admin-profile-compact{position:absolute;height:75px;top:0;left:65px;right:20px;padding-top:12.5px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-webkit-transition:opacity .2s;transition:opacity .2s;cursor:pointer}.intercom-namespace .intercom-admin-profile-compact *{cursor:pointer}.intercom-namespace .intercom-admin-profile-expanded .intercom-admin-profile-compact,.intercom-namespace .intercom-admin-profile-expanded .intercom-admin-profile-compact *{pointer-events:none}.intercom-namespace .intercom-admin-profile-compact-avatar{vertical-align:middle;white-space:nowrap;overflow:hidden;display:inline-block;float:left;padding-right:10px;position:relative}.intercom-namespace .intercom-admin-profile-compact-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-admin-profile-compact-body{display:block;vertical-align:middle;padding-left:10px}.intercom-namespace .intercom-admin-profile-compact-admin-name{color:rgb(255, 255, 255);font-size:16px;line-height:1.2em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-admin-profile-compact-admin-name-and-participants{line-height:33px}.intercom-namespace .intercom-admin-profile-compact-last-active{color:rgba(255, 255, 255, 0.7);font-size:13px;line-height:1.1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-admin-profile-full{padding:30px 30px 30px 75px;-webkit-box-sizing:border-box;box-sizing:border-box}.intercom-namespace .intercom-admin-profile-full-with-participants{padding-bottom:0}.intercom-namespace .intercom-admin-profile-full-with-close-button{padding:30px 30px 24px 75px;-webkit-box-sizing:border-box;box-sizing:border-box}.intercom-namespace .intercom-admin-profile-full-avatar{display:table-cell;position:relative}.intercom-namespace .intercom-admin-profile-full-avatar .intercom-avatar{width:60px;height:60px;line-height:60px;font-size:30px}.intercom-namespace .intercom-admin-profile-full-avatar .intercom-avatar img{width:60px;height:60px}.intercom-namespace .intercom-admin-profile-full-body{display:table-cell;vertical-align:top;padding-top:16px;padding-left:20px}.intercom-namespace .intercom-admin-profile-full-admin-name{color:rgb(255, 255, 255);font-size:17px;line-height:1.1em;white-space:nowrap;width:190px;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-admin-profile-full-title{color:rgb(255, 255, 255);font-size:13px;white-space:nowrap;margin-bottom:5px}.intercom-namespace .intercom-admin-profile-full-last-active{color:rgba(255, 255, 255, 0.7);font-size:13px;line-height:1.1em;white-space:nowrap;width:190px;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-admin-profile-full-intro{color:rgb(255, 255, 255);font-size:13px;line-height:1.5;margin-bottom:5px;display:-webkit-box;display:-ms-flexbox;display:flex}.intercom-namespace .intercom-admin-profile-full-intro-text{white-space:pre-wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.intercom-namespace .intercom-admin-profile-full-local-time{color:rgb(255, 255, 255);font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:5px}.intercom-namespace .intercom-admin-profile-full-social-account{width:16px;height:16px;margin-right:16px;display:inline-block}.intercom-namespace .intercom-admin-profile-full-public-links{position:absolute;top:29px;right:24px;margin-top:0}.intercom-namespace .intercom-admin-profile-full-public-links .intercom-admin-profile-full-social-account{margin-left:16px;margin-right:0;padding-bottom:3px}.intercom-namespace .intercom-conversation-header-close-button-enabled .intercom-admin-profile-full-public-links,.intercom-namespace .intercom-conversation-header-download-transcript-button-enabled .intercom-admin-profile-full-public-links,.intercom-namespace .intercom-is-mobile-screen-size .intercom-admin-profile-full-public-links{position:inherit;margin-top:11px}.intercom-namespace .intercom-conversation-header-close-button-enabled .intercom-admin-profile-full-public-links .intercom-admin-profile-full-social-account,.intercom-namespace .intercom-conversation-header-download-transcript-button-enabled .intercom-admin-profile-full-public-links .intercom-admin-profile-full-social-account,.intercom-namespace .intercom-is-mobile-screen-size .intercom-admin-profile-full-public-links .intercom-admin-profile-full-social-account{margin-left:0;margin-right:16px}.intercom-namespace .intercom-admin-profile-full-social-account-twitter{width:18px;height:15px;opacity:.7}.intercom-namespace .intercom-admin-profile-full-calendar:hover,.intercom-namespace .intercom-admin-profile-full-social-account-linkedin:hover,.intercom-namespace .intercom-admin-profile-full-social-account-twitter:hover{opacity:1}.intercom-namespace .intercom-admin-profile-full-calendar,.intercom-namespace .intercom-admin-profile-full-social-account-linkedin{opacity:.7}.intercom-namespace .intercom-admin-profile-full-background{visibility:hidden;z-index:2147483000;pointer-events:none;position:absolute;top:0;bottom:0;left:0;right:0;opacity:.05;background-size:cover;background-position:center;background-repeat:no-repeat}.intercom-namespace .intercom-admin-profile-full-title-and-location{margin-top:18px;line-height:1.4}.intercom-namespace .intercom-admin-profile-bio-icon,.intercom-namespace .intercom-admin-profile-job-title-icon,.intercom-namespace .intercom-admin-profile-location-icon{width:16px;height:16px;margin-right:5px;vertical-align:text-bottom}.intercom-namespace .intercom-admin-profile-bio-icon>g>g,.intercom-namespace .intercom-admin-profile-job-title-icon>g>g,.intercom-namespace .intercom-admin-profile-location-icon>g>g{stroke:rgb(255, 255, 255)}.intercom-namespace .intercom-admin-profile-bio-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.intercom-namespace .intercom-admin-profile-full-calendar>path,.intercom-namespace .intercom-admin-profile-full-social-account-linkedin>g>g,.intercom-namespace .intercom-admin-profile-full-social-account-twitter>g>g{fill:rgba(255, 255, 255, 0.7)}.intercom-namespace .intercom-composer{position:absolute;bottom:0;left:0;right:0;min-height:56px;max-height:200px;border-top:1px solid #e6e6e6}.intercom-namespace .intercom-composer pre,.intercom-namespace .intercom-composer textarea{-webkit-box-sizing:border-box;box-sizing:border-box;padding:18px 100px 18px 29px;width:100%;height:100%;font-family:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:1.33;background-color:#fff;white-space:pre-wrap;word-wrap:break-word}.intercom-namespace .intercom-composer textarea{position:absolute;bottom:0;left:0;color:#000;resize:none;border:0;-webkit-transition:background-color ease 200ms,-webkit-box-shadow ease 200ms;transition:background-color ease 200ms,box-shadow ease 200ms;transition:background-color ease 200ms,box-shadow ease 200ms,-webkit-box-shadow ease 200ms}.intercom-namespace .intercom-composer textarea::-webkit-input-placeholder{color:#737376;font-style:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:1.33}.intercom-namespace .intercom-composer textarea::-moz-placeholder{color:#737376;font-style:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:1.33}.intercom-namespace .intercom-composer textarea:-ms-input-placeholder{color:#737376;font-style:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:1.33}.intercom-namespace .intercom-composer textarea:focus{background-color:#fff;-webkit-box-shadow:0 0 100px 0 rgba(0,0,0,.1);box-shadow:0 0 100px 0 rgba(0,0,0,.1)}.intercom-namespace .intercom-composer-borderless textarea:focus,.intercom-namespace .intercom-composer.intercom-composer-suggestions-active textarea:focus{-webkit-box-shadow:none;box-shadow:none}.intercom-namespace .intercom-composer pre{visibility:hidden}.intercom-namespace .intercom-composer-borderless{position:relative;border-radius:5px;-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);border-top:none}.intercom-namespace .intercom-composer-borderless pre,.intercom-namespace .intercom-composer-borderless textarea{padding-left:21px;border-radius:5px}.intercom-namespace .intercom-composer-borderless .intercom-composer-buttons{right:24px}.intercom-namespace .intercom-composer-borderless .intercom-composer-popover{right:0}.intercom-namespace .intercom-composer-buttons{position:absolute;top:0;right:21px}.intercom-namespace .intercom-composer-emoji-button,.intercom-namespace .intercom-composer-gif-button,.intercom-namespace .intercom-composer-send-button,.intercom-namespace .intercom-composer-upload-button{position:relative;float:left;display:inline-block;cursor:pointer;opacity:.8;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;height:51px;margin-top:2px}.intercom-namespace .intercom-composer-emoji-button:hover,.intercom-namespace .intercom-composer-gif-button:hover,.intercom-namespace .intercom-composer-send-button:hover,.intercom-namespace .intercom-composer-upload-button:hover,.intercom-namespace .intercom-image-loaded img{opacity:1}.intercom-namespace .intercom-composer-emoji-button:before,.intercom-namespace .intercom-composer-gif-button:before,.intercom-namespace .intercom-composer-send-button:before,.intercom-namespace .intercom-composer-upload-button:before{position:absolute;top:20px;background-position:center}.intercom-namespace .intercom-composer-emoji-button svg,.intercom-namespace .intercom-composer-gif-button svg,.intercom-namespace .intercom-composer-send-button svg,.intercom-namespace .intercom-composer-upload-button svg{position:absolute;top:18px}.intercom-namespace .intercom-composer-buttons-not-readable .intercom-composer-emoji-button-active svg path,.intercom-namespace .intercom-composer-buttons-not-readable .intercom-composer-gif-button-active svg path,.intercom-namespace .intercom-composer-buttons-not-readable .intercom-composer-send-button svg path,.intercom-namespace .intercom-composer-emoji-button svg path,.intercom-namespace .intercom-composer-gif-button svg path,.intercom-namespace .intercom-composer-send-button svg path,.intercom-namespace .intercom-composer-upload-button svg path{fill:#737376}.intercom-namespace .intercom-composer-send-button{width:15px;padding-left:8px;padding-right:8px;top:1px}.intercom-namespace .intercom-composer-send-button svg{height:16px;width:15px}@media only screen and (max-device-width:667px){.intercom-namespace .intercom-composer-send-button{width:38px;text-align:center}.intercom-namespace .intercom-composer-send-button svg{position:static}}.intercom-namespace .intercom-composer-emoji-button,.intercom-namespace .intercom-composer-gif-button,.intercom-namespace .intercom-composer-upload-button{width:18px;padding-left:8px;padding-right:8px}.intercom-namespace .intercom-composer-emoji-button svg,.intercom-namespace .intercom-composer-upload-button svg{height:18px;width:18px}.intercom-namespace .intercom-composer-gif-button{width:29px}.intercom-namespace .intercom-composer-gif-button svg{height:18px}.intercom-namespace .intercom-composer-emoji-button-active svg path,.intercom-namespace .intercom-composer-gif-button-active svg path,.intercom-namespace .intercom-composer-send-button svg path{fill:#24b1ed}.intercom-namespace .intercom-post-composer>.intercom-composer-buttons{display:none}.intercom-namespace .intercom-reaction-picker{height:45px;background-color:#fafafa;padding:5px;border-radius:0 0 6px 6px;text-align:center;overflow:hidden}.intercom-namespace .intercom-reaction-picker.intercom-reaction-picker-with-prompt{height:74px}.intercom-namespace .intercom-reaction-picker .intercom-reaction-prompt{padding-top:9px;padding-bottom:4px;text-align:center}.intercom-namespace .intercom-reaction-picker .intercom-reaction{width:50px;height:48px;display:inline-block;text-align:center;font-size:32px;-webkit-transition:-webkit-transform .16s cubic-bezier(.65,.61,.18,1.8) .02s,-webkit-filter .32s linear;transition:transform .16s cubic-bezier(.65,.61,.18,1.8) .02s,filter .32s linear;transition:transform .16s cubic-bezier(.65,.61,.18,1.8) .02s,filter .32s linear,-webkit-transform .16s cubic-bezier(.65,.61,.18,1.8) .02s,-webkit-filter .32s linear;cursor:pointer;-webkit-transform-origin:50% 60%;transform-origin:50% 60%;position:relative;top:2px}.intercom-namespace .intercom-reaction-picker .intercom-reaction span{cursor:pointer;line-height:51px}.intercom-namespace .intercom-reaction-picker .intercom-reaction:active,.intercom-namespace .intercom-reaction-picker .intercom-reaction:hover{-webkit-transform:scale(1.32);transform:scale(1.32);-webkit-transition:-webkit-transform .04s;transition:transform .04s;transition:transform .04s,-webkit-transform .04s}.intercom-namespace .intercom-reaction-picker .intercom-reaction:active{-webkit-transform:scale(1.4);transform:scale(1.4)}.intercom-namespace .intercom-reaction-picker-reaction-selected .intercom-reaction{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.intercom-namespace .intercom-reaction-picker-reaction-selected .intercom-reaction-selected{-webkit-filter:grayscale(0%);filter:grayscale(0%);-webkit-transform:scale(1.32);transform:scale(1.32)}.intercom-namespace .intercom-reaction-picker-reaction-selected .intercom-reaction-selected:active,.intercom-namespace .intercom-reaction-picker-reaction-selected .intercom-reaction-selected:hover{-webkit-transform:scale(1.32);transform:scale(1.32)}.intercom-namespace .intercom-emoji-sub-icon{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-16.af4e0d5e.png);background-size:576px 576px;background-repeat:no-repeat;position:relative;top:2px;margin:1px}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-emoji-sub-icon{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-32.5bf93f13.png)}}.intercom-namespace .intercom-reaction-picker .intercom-emoji-sub-icon{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-32.5bf93f13.png);background-size:1152px 1152px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-reaction-picker .intercom-emoji-sub-icon{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-32.5bf93f13.png)}}.intercom-namespace .intercom-sticker-native{font-size:96px;line-height:96px;margin-top:12px}.intercom-namespace .intercom-sticker-image{width:96px;height:96px;min-width:96px;min-height:96px}.intercom-namespace .intercom-snippet .intercom-sticker-native{font-size:38px;line-height:38px;margin-top:4.75px;margin-bottom:-4.75px}.intercom-namespace .intercom-snippet .intercom-sticker-image{width:38px;height:38px;min-width:38px;min-height:38px}.intercom-namespace .intercom-chat-snippet .intercom-sticker-native{font-size:45px;line-height:45px;margin-top:5.625px;margin-bottom:-5.625px}.intercom-namespace .intercom-chat-snippet .intercom-sticker-image{width:45px;height:45px;min-width:45px;min-height:45px}.intercom-namespace .intercom-post-card{background-color:#fff;font-size:13px;color:#000;border:1px solid #eee;border-radius:4px;position:relative;overflow:hidden;max-height:180px;-webkit-transition:all .12s ease-out;transition:all .12s ease-out;cursor:pointer}.intercom-namespace .intercom-post-card:hover{-webkit-box-shadow:0 8px 20px -10px rgba(0,0,0,.1);box-shadow:0 8px 20px -10px rgba(0,0,0,.1);-webkit-transform:translateY(-2px);transform:translateY(-2px)}.intercom-namespace .intercom-post-card *{cursor:pointer}.intercom-namespace .intercom-post-card-body{padding:0 24px 17px}.intercom-namespace .intercom-post-card.intercom-post-card-truncated:after{position:absolute;opacity:1;-webkit-transition:opacity ease 100ms;transition:opacity ease 100ms;bottom:0;right:0;left:0;height:60px;content:' ';background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,#fff),to(rgba(255,255,255,0)));background:linear-gradient(to top,#fff 30%,rgba(255,255,255,0));border-radius:0 0 5px 5px}.intercom-namespace .intercom-post-card-body .intercom-messenger-card-wrapper{-webkit-box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);border:1px solid #eee;border-top:none}.intercom-namespace .intercom-note-card{background-color:#fff;font-size:13px;color:#000;border:1px solid #eee;border-radius:4px;position:relative;overflow:hidden}.intercom-namespace .intercom-note-card-body{padding:0 24px 24px}.intercom-namespace .intercom-note-card-body .intercom-block-messenger-card{margin:16px auto}.intercom-namespace .intercom-note-card-body .intercom-messenger-card-wrapper{-webkit-box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);border:1px solid #eee;border-top:none}.intercom-namespace .intercom-link-card-container{padding-left:45px}.intercom-namespace .intercom-link-card-container-borderless{margin-left:45px}.intercom-namespace .intercom-link-card-container,.intercom-namespace .intercom-link-card-container-borderless{position:relative}.intercom-namespace .intercom-link-card-inner-container{background-color:#fff;border-radius:5px;color:#000}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card,.intercom-namespace .intercom-link-card-container .intercom-link-card,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card{display:block;position:relative;overflow:hidden;background-color:#fff;-webkit-transition:all .12s ease-out;transition:all .12s ease-out;text-decoration:none!important;-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1)}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card:first-child,.intercom-namespace .intercom-link-card-container .intercom-link-card:first-child,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card:first-child{-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);border-radius:3px 3px 0 0}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card:last-child,.intercom-namespace .intercom-link-card-container .intercom-link-card:last-child,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card:last-child{border-radius:0 0 3px 3px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-light .intercom-link-card-title,.intercom-namespace .intercom-link-card-container .intercom-link-card-light .intercom-link-card-title,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-light .intercom-link-card-title{color:#000}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-content-container,.intercom-namespace .intercom-link-card-container .intercom-link-card-content-container,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-content-container{padding:20px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-title,.intercom-namespace .intercom-link-card-container .intercom-link-card-title,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-title{color:#24b1ed;font-size:14px;line-height:1.2;overflow:wrap}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-description,.intercom-namespace .intercom-link-card-container .intercom-link-card-description,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-description{color:#000;font-size:13px;line-height:1.38;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-author,.intercom-namespace .intercom-link-card-container .intercom-link-card-author,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-author{margin-top:11px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-author-avatar,.intercom-namespace .intercom-link-card-container .intercom-link-card-author-avatar,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-author-avatar{display:inline-block;margin-right:8px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-author-avatar .intercom-avatar,.intercom-namespace .intercom-link-card-container .intercom-link-card-author-avatar .intercom-avatar,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-author-avatar .intercom-avatar{width:16px;height:16px;line-height:16px;font-size:8px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-author-summary,.intercom-namespace .intercom-link-card-container .intercom-link-card-author-summary,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-author-summary{width:calc(100% - 24px);font-size:13px;display:inline-block;vertical-align:middle;color:#737376;line-height:16px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-author-summary span,.intercom-namespace .intercom-link-card-container .intercom-link-card-author-summary span,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-author-summary span{white-space:nowrap}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-grouped,.intercom-namespace .intercom-link-card-container .intercom-link-card-grouped,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-grouped{border-bottom:1px solid #eee}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-grouped:hover,.intercom-namespace .intercom-link-card-container .intercom-link-card-grouped:hover,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-grouped:hover{background-color:#fafafa;-webkit-transform:none;transform:none}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-grouped .intercom-link-card-author,.intercom-namespace .intercom-link-card-container .intercom-link-card-grouped .intercom-link-card-author,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-grouped .intercom-link-card-author{margin-top:5px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-grouped .intercom-link-card-content-container,.intercom-namespace .intercom-link-card-container .intercom-link-card-grouped .intercom-link-card-content-container,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-grouped .intercom-link-card-content-container{padding:15px 20px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-grouped:last-child,.intercom-namespace .intercom-link-card-container .intercom-link-card-grouped:last-child,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-grouped:last-child{border-bottom:none}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-title-link-icon svg,.intercom-namespace .intercom-link-card-container .intercom-link-card-title-link-icon svg,.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-title-link-icon svg{fill:#24b1ed!important;height:13px;width:13px;padding-right:5px}.intercom-namespace .intercom-block.intercom-block-link .intercom-link-card-title[type="educate.help_center"],.intercom-namespace .intercom-link-card-container .intercom-link-card-title[type="educate.help_center"],.intercom-namespace .intercom-link-card-container-borderless .intercom-link-card-title[type="educate.help_center"]{text-align:center;font-size:13px}.intercom-namespace .intercom-link-card-container-message{width:100%;padding-left:0}.intercom-namespace .intercom-link-card-container-message .intercom-link-card-content-container{padding:21px 30px}.intercom-namespace .intercom-link-card-container-message .intercom-link-card-title{margin-bottom:8px;font-size:20px}.intercom-namespace .intercom-link-card-container-message .intercom-link-card-description{font-size:14px;line-height:20px}.intercom-namespace .intercom-link-card-container-message .intercom-link-card-author{height:26px;font-size:13px}.intercom-namespace .intercom-link-card-container-message .intercom-link-card-author-avatar{margin-right:8px}.intercom-namespace .intercom-link-card-container-message .intercom-link-card-author-avatar .intercom-avatar{width:24px;height:24px;line-height:24px;font-size:12px}.intercom-namespace .intercom-link-card-container-message .intercom-link-card-author-avatar .intercom-avatar img{width:24px;height:24px}.intercom-namespace .intercom-link-card-container-message .intercom-link-card-author-summary{width:calc(100% - 32px);padding-top:3px;font-size:13px}.intercom-namespace .intercom-link-card-avatar{position:absolute;left:0;bottom:10px}.intercom-namespace .intercom-link-card-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-attribute-collector-card-avatar .intercom-avatar img,.intercom-namespace .intercom-borderless .intercom-borderless-card-avatar .intercom-avatar img,.intercom-namespace .intercom-borderless .intercom-typing-admin .intercom-typing-admin-avatar .intercom-avatar img,.intercom-namespace .intercom-comment-container-admin-avatar .intercom-avatar img,.intercom-namespace .intercom-comment-container-admin-borderless-avatar .intercom-avatar img,.intercom-namespace .intercom-link-card-avatar .intercom-avatar img,.intercom-namespace .intercom-notification-channel-collector-card-avatar .intercom-avatar img,.intercom-namespace .intercom-typing-admin-avatar .intercom-avatar img{width:32px;height:32px}.intercom-namespace .intercom-link-card-asked-about{text-align:center;color:#737376;font-size:13px;clear:both;padding-top:0;padding-bottom:14px}.intercom-namespace .intercom-comment-container,.intercom-namespace .intercom-comment-container-borderless-single{position:relative}.intercom-namespace .intercom-comment-container-user{float:right;padding-left:48px;width:calc(100% - 48px)}.intercom-namespace .intercom-comment-container-user .intercom-block-messenger-card,.intercom-namespace .intercom-comment-container-user .intercom-comment-single{float:right}.intercom-namespace .intercom-comment-container-other-user{float:left;padding-left:48px}.intercom-namespace .intercom-comment-container-other-user .intercom-block-messenger-card{float:left}.intercom-namespace .intercom-comment-container-admin{float:left;padding-left:45px;width:calc(100% - 48px)}.intercom-namespace .intercom-comment-container-borderless .intercom-block-messenger-card{padding-bottom:8px}.intercom-namespace .intercom-chat .intercom-comment-container-admin{float:none;padding-left:0;width:100%}.intercom-namespace .intercom-comment-container-admin-avatar{position:absolute;left:0;bottom:10px}.intercom-namespace .intercom-comment-container-admin-avatar .intercom-avatar,.intercom-namespace .intercom-comment-container-admin-borderless-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-comment-container-admin-borderless-avatar{position:absolute;bottom:0;left:0;-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);border-radius:100%}.intercom-namespace .intercom-comment:not(.intercom-comment-with-body){padding:17px 20px;border-radius:5px;position:relative;display:inline-block;width:auto;max-width:75%}.intercom-namespace .intercom-comment:not(.intercom-comment-with-body) pre span{color:inherit!important;background-color:inherit!important;font-weight:inherit!important;word-wrap:break-word}.intercom-namespace .intercom-comment-single .intercom-image-progress{border-radius:5px}.intercom-namespace .intercom-conversation-part-failed .intercom-comment{opacity:.8}.intercom-namespace .intercom-comment-container-user .intercom-comment{color:#fff}.intercom-namespace .intercom-comment-container-user .intercom-comment a{color:#fff;text-decoration:underline}.intercom-namespace .intercom-comment-container-user .intercom-comment.intercom-comment-light{color:#000;border:1px solid #e1e1e1}.intercom-namespace .intercom-comment-container-user .intercom-comment.intercom-comment-light a{color:#000;text-decoration:underline}.intercom-namespace .intercom-comment-container-user .intercom-comment:not(.intercom-comment-with-body){background-color:#24b1ed;float:right}.intercom-namespace .intercom-comment-container-admin .intercom-comment:not(.intercom-comment-with-body) .intercom-block-attachment-list>a,.intercom-namespace .intercom-comment-container-admin .intercom-comment:not(.intercom-comment-with-body) .intercom-block-button:hover,.intercom-namespace .intercom-comment-container-other-user .intercom-comment:not(.intercom-comment-with-body) .intercom-block-button:hover,.intercom-namespace .intercom-comment-container-user .intercom-comment:not(.intercom-comment-with-body) .intercom-block-attachment-list>a{text-decoration:none}.intercom-namespace .intercom-comment-container-admin .intercom-comment:not(.intercom-comment-with-body),.intercom-namespace .intercom-comment-container-other-user .intercom-comment:not(.intercom-comment-with-body){color:#000;background-color:#f5f5f5}.intercom-namespace .intercom-comment-container-admin .intercom-comment:not(.intercom-comment-with-body) a{color:rgb(36, 177, 237);text-decoration:underline}.intercom-namespace .intercom-comment-container-admin .intercom-comment:not(.intercom-comment-with-body) .intercom-block-button-container,.intercom-namespace .intercom-comment-container-other-user .intercom-comment:not(.intercom-comment-with-body) .intercom-block-button-container{margin-bottom:10px}.intercom-namespace .intercom-comment-container-other-user .intercom-comment:not(.intercom-comment-with-body) a{color:#000;text-decoration:underline}.intercom-namespace .intercom-comment-container-admin.intercom-comment-container-borderless .intercom-comment:not(.intercom-comment-with-body){background-color:#fff}.intercom-namespace .intercom-comment-container-admin.intercom-comment-container-borderless .intercom-comment:not(.intercom-comment-with-body) a{color:#737376}.intercom-namespace .intercom-comment-tooltip{z-index:2147483001;border-radius:4px;padding:4px 8px;font-size:12px;line-height:1.16;background-color:#737376;color:#fff;position:absolute;white-space:nowrap}.intercom-namespace .intercom-comment-accessibility-tooltip,.intercom-namespace.intercom-tab-navigation-enabled .intercom-comment-tooltip{display:none}.intercom-namespace.intercom-tab-navigation-enabled .intercom-comment-container{padding-bottom:20px}.intercom-namespace.intercom-tab-navigation-enabled .intercom-comment-accessibility-tooltip{display:inline-block;position:absolute;font-size:12px;bottom:-5px;color:#737376}.intercom-namespace.intercom-tab-navigation-enabled .intercom-comment .intercom-comment-accessibility-tooltip{bottom:-17px;margin-left:-15px}.intercom-namespace.intercom-tab-navigation-enabled .intercom-comment-single .intercom-comment-accessibility-tooltip,.intercom-namespace.intercom-tab-navigation-enabled .intercom-comment-with-body .intercom-comment-accessibility-tooltip{bottom:-1px;margin-left:0}.intercom-namespace .intercom-comment-body{position:relative}.intercom-namespace .intercom-comment-body-block-group{margin-bottom:8px}.intercom-namespace .intercom-comment-body-block-group:after,.intercom-namespace .intercom-comment-body-block-group:before{content:" ";display:table}.intercom-namespace .intercom-comment-body-block-group:after{clear:both}.intercom-namespace .intercom-comment-body-block-group-text{max-width:100%;padding:17px 20px;border-radius:6px;display:inline-block}.intercom-namespace .intercom-comment-body-block-group:last-child{margin-bottom:0}.intercom-namespace .intercom-comment-body-block-group-messenger-card{margin-bottom:16px}.intercom-namespace .intercom-comment-body-user .intercom-comment-body-block-group-text{color:#fff;background-color:#24b1ed}.intercom-namespace .intercom-comment-body-admin .intercom-comment-body-block-group-text,.intercom-namespace .intercom-comment-body-other-user .intercom-comment-body-block-group-text{color:#000;background-color:#f5f5f5}.intercom-namespace .intercom-comment-body-admin .intercom-comment-body-block-group-text a,.intercom-namespace .intercom-comment-body-other-user .intercom-comment-body-block-group-text a{text-decoration:underline}.intercom-namespace .intercom-comment-body-borderless.intercom-comment-body-admin .intercom-comment-body-block-group-text,.intercom-namespace .intercom-comment-body-borderless.intercom-comment-body-other-user .intercom-comment-body-block-group-text{background-color:#fff}.intercom-namespace .intercom-comment-body-borderless.intercom-comment-body-admin .intercom-comment-body-block-group-text a,.intercom-namespace .intercom-comment-body-borderless.intercom-comment-body-other-user .intercom-comment-body-block-group-text a{color:#000}.intercom-namespace .intercom-comment-body-borderless.intercom-comment-body-admin-with-avatar .intercom-comment-body-block-group-text:last-child{border-bottom-left-radius:0}.intercom-namespace .intercom-borderless .intercom-comment-single .intercom-block-attachment-list>a,.intercom-namespace .intercom-comment-body-borderless .intercom-comment-body-block-group-text,.intercom-namespace .intercom-comment-single .intercom-borderless .intercom-block-attachment-list>a{-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09)}.intercom-namespace .intercom-modal{z-index:2147483003}.intercom-namespace .intercom-modal-fixed{position:fixed;top:0;right:0;bottom:0;left:0}.intercom-namespace .intercom-modal-inner{width:100%;height:100%}.intercom-namespace .intercom-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.35)}.intercom-namespace .intercom-modal-overlay-z{z-index:2147483003}.intercom-namespace .intercom-modal-overlay-close{width:19px;height:19px;position:absolute;top:30px;right:40px;background-image:url(https://js.intercomcdn.com/images/close-button.3f88d81d.png);background-size:19px 19px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-modal-overlay-close{background-image:url(https://js.intercomcdn.com/images/close-button@2x.0b71c094.png)}}.intercom-namespace .intercom-modal-overlay-close:hover{cursor:pointer}.intercom-namespace .intercom-typing-admin{position:relative;padding-left:45px;padding-bottom:24px}.intercom-namespace .intercom-typing-admin-avatar{position:absolute;left:0;bottom:34px}.intercom-namespace .intercom-typing-admin-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-typing-admin-bubble{height:53px;width:66px;padding:0;background:#f5f5f5;border-radius:4px;position:relative;-webkit-transform-origin:bottom left;transform-origin:bottom left}.intercom-namespace .intercom-typing-admin-bubble div{width:6px;height:6px;border-radius:100%;background-color:#737376;position:absolute;top:24px;-webkit-animation:is-typing-dot 1s infinite ease-in;animation:is-typing-dot 1s infinite ease-in}.intercom-namespace .intercom-typing-admin-bubble .intercom-typing-admin-dot-1{left:20px}.intercom-namespace .intercom-typing-admin-bubble .intercom-typing-admin-dot-2{left:30px}.intercom-namespace .intercom-typing-admin-bubble .intercom-typing-admin-dot-3{left:40px}.intercom-namespace .intercom-image{position:relative;overflow:hidden;-webkit-transition:opacity 100ms ease-out;transition:opacity 100ms ease-out}.intercom-namespace .intercom-image-zoomable img{cursor:-webkit-zoom-in;cursor:zoom-in}.intercom-namespace .intercom-image-placeholder{width:100%}.intercom-namespace .intercom-image-progress{position:absolute;top:0;right:0;bottom:0;background-color:#fff;opacity:.5;-webkit-transition:width 1s linear;transition:width 1s linear}.intercom-namespace .intercom-zoomed-image-container{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.intercom-namespace .intercom-zoomed-image{cursor:-webkit-zoom-out;cursor:zoom-out;max-width:90vw;max-height:90vh;-webkit-transition:max-width ease 200ms,max-height ease 200ms;transition:max-width ease 200ms,max-height ease 200ms}.intercom-namespace .intercom-emoji-picker{width:330px;height:260px}.intercom-namespace .intercom-emoji-picker-small{width:145px;height:115px}.intercom-namespace .intercom-emoji-picker-group{margin:10px -5px;padding-left:3px}.intercom-namespace .intercom-emoji-picker-group-title{color:#737376;font-weight:600;font-size:11px;margin:5px;text-transform:uppercase;line-height:1.27}.intercom-namespace .intercom-emoji-picker-emoji{padding:6px;width:30px;line-height:1.07;display:inline-table;text-align:justify;cursor:pointer;vertical-align:middle;font-size:28px;-webkit-transition:-webkit-transform 60ms ease-out;transition:transform 60ms ease-out;transition:transform 60ms ease-out,-webkit-transform 60ms ease-out;-webkit-transition-delay:60ms;transition-delay:60ms;font-family:"Apple Color Emoji","Segoe UI Emoji","NotoColorEmoji","Segoe UI Symbol","Android Emoji","EmojiSymbols"}.intercom-namespace .intercom-emoji-picker-emoji-active{-webkit-transition-delay:0ms;transition-delay:0ms;-webkit-transform:scale(1.2);transform:scale(1.2)}.intercom-namespace .intercom-emoji-picker-image{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-16.af4e0d5e.png);background-size:576px 576px;background-repeat:no-repeat;border:10px solid;color:#fff;background-color:#fff;border-color:#fff;cursor:pointer}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-emoji-picker-image{background-image:url(https://js.intercomcdn.com/images/emoji-spritemap-32.5bf93f13.png)}}.intercom-namespace .emoji-skintone-picker-popover{height:50px;width:290px;padding-top:2px;padding-bottom:2px;display:inline-block;position:relative;background-color:#fff;-webkit-box-shadow:0 1px 15px 1px rgba(0,0,0,.08);box-shadow:0 1px 15px 1px rgba(0,0,0,.08);border-radius:6px;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.intercom-namespace .emoji-skintone-picker-overlay{position:absolute;height:100%;width:100%;display:block;text-align:center;background-color:transparent;z-index:1}.intercom-namespace .emoji-skintone-picker-caret,.intercom-namespace .emoji-skintone-picker-outer-caret{position:absolute;right:0;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent}.intercom-namespace .emoji-skintone-picker-caret{border-top:8px solid #fff;bottom:-8px}.intercom-namespace .emoji-skintone-picker-outer-caret{bottom:-9px}.intercom-namespace .emoji-skintone-picker-emoji{padding:3px;width:36px;line-height:1.28;display:inline-block;height:36px;text-align:center;cursor:pointer;vertical-align:middle;font-size:28px;margin:4px 5px 0 6px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Apple Color Emoji","Segoe UI Emoji","NotoColorEmoji","Segoe UI Symbol","Android Emoji","EmojiSymbols"}.intercom-namespace .emoji-skintone-picker-emoji:hover{background-color:#fafafa;border-radius:3px}.intercom-namespace .emoji-skintone-picker-divider{border-right:1px solid #eee;height:36px;width:1px}.intercom-namespace .intercom-gif-picker{width:330px;height:260px}.intercom-namespace .intercom-gif-picker-results{margin:5px -5px;overflow:hidden}.intercom-namespace .intercom-gif-picker-gif-container{float:left;width:50%;height:150px;padding:5px;-webkit-box-sizing:border-box;box-sizing:border-box}.intercom-namespace .intercom-gif-picker-gif{width:100%;height:100%;cursor:pointer;border-radius:2px}.intercom-namespace .intercom-gif-picker-gif:hover{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.3);box-shadow:0 1px 3px 0 rgba(0,0,0,.3)}.intercom-namespace .intercom-borderless{z-index:2147483000;position:absolute;right:0;bottom:0;width:360px;max-height:100%}.intercom-namespace .intercom-borderless-header{z-index:2147483001;position:absolute;top:0;width:340px;padding:0 10px;height:40px}.intercom-namespace .intercom-borderless-body{position:absolute;right:0;bottom:0;width:340px;padding:50px 10px 10px}.intercom-namespace .intercom-borderless-dismiss-button,.intercom-namespace .intercom-borderless-view-more-button{-webkit-transform:translateY(4px);transform:translateY(4px);opacity:0;-webkit-transition:all 120ms ease-out 80ms;transition:all 120ms ease-out 80ms}.intercom-namespace .intercom-borderless-dismiss-button span{padding:0 8px}.intercom-namespace .intercom-borderless-dismiss-button span,.intercom-namespace .intercom-borderless-view-more-button span{display:block;background-color:#67788f;color:#fff;font-size:13px;height:32px;line-height:32px;border-radius:16px;cursor:pointer;background-position:center}.intercom-namespace .intercom-borderless-dismiss-button span:hover,.intercom-namespace .intercom-borderless-view-more-button span:hover{background-color:#5c6c80}.intercom-namespace .intercom-borderless-header-visible .intercom-borderless-dismiss-button,.intercom-namespace .intercom-borderless-header-visible .intercom-borderless-view-more-button,.intercom-namespace .intercom-borderless-header:hover .intercom-borderless-dismiss-button,.intercom-namespace .intercom-borderless-header:hover .intercom-borderless-view-more-button{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.intercom-namespace .intercom-borderless-dismiss-button{position:absolute;top:10px;right:0}.intercom-namespace .intercom-borderless-dismiss-button span{padding-right:16px;padding-left:16px;background-image:url(https://js.intercomcdn.com/images/dismiss.249568e7.png);background-size:8px 8px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-borderless-dismiss-button span{background-image:url(https://js.intercomcdn.com/images/dismiss@2x.1c82ba79.png)}}.intercom-namespace .intercom-borderless-view-more-button{display:inline-block}.intercom-namespace .intercom-borderless-view-more-button span{padding:0 20px}.intercom-namespace .intercom-borderless-button-wrapper{padding-top:10px;position:relative;margin-left:45px;text-align:center}.intercom-namespace .intercom-borderless-conversation-body-inner{padding-bottom:10px}.intercom-namespace .intercom-borderless-conversation-body{overflow-anchor:none;max-height:100%;padding-top:10px;padding-right:10px;margin-right:-10px}.intercom-namespace .intercom-borderless-conversation-body-enable-scroll{overflow:auto}.intercom-namespace .intercom-borderless-conversation-body-enable-scroll.intercom-borderless-conversation-body-visible-scrollbars{margin-right:0}.intercom-namespace .intercom-borderless-conversation-composer{padding-top:0;padding-left:45px}.intercom-namespace .intercom-borderless .intercom-borderless-card-avatar{position:absolute;bottom:21px;-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);border-radius:100%}.intercom-namespace .intercom-borderless .intercom-borderless-card-avatar .intercom-avatar,.intercom-namespace .intercom-borderless .intercom-typing-admin .intercom-typing-admin-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-borderless .intercom-borderless-link-card-avatar{left:-40px;bottom:0}.intercom-namespace .intercom-borderless .intercom-comment:not(.intercom-comment-with-body){-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);border-radius:6px}.intercom-namespace .intercom-borderless .intercom-comment-single video{border-radius:6px}.intercom-namespace .intercom-borderless .intercom-chat-card-borderless-single .intercom-image,.intercom-namespace .intercom-borderless .intercom-typing-admin .intercom-typing-admin-avatar{border-radius:6px;-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09)}.intercom-namespace .intercom-borderless .intercom-typing-admin{padding-left:45px;padding-bottom:0;padding-top:10px;position:static}.intercom-namespace .intercom-borderless .intercom-typing-admin .intercom-typing-admin-avatar{position:absolute;bottom:0;left:0;border-radius:100%}.intercom-namespace .intercom-borderless .intercom-typing-admin .intercom-typing-admin-bubble{background:#fff;-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);border-bottom-left-radius:0}.intercom-namespace .intercom-borderless .intercom-comment-container-admin.intercom-comment-container-borderless .intercom-comment{color:#000}.intercom-namespace .intercom-borderless .intercom-notification-channels-last-part{margin-top:5px;margin-bottom:0}.intercom-namespace .intercom-borderless .intercom-notification-channels-next-part-by-admin{margin-top:0;margin-bottom:5px}.intercom-namespace .intercom-borderless .intercom-conversation-part-admin .intercom-comment-container-borderless .intercom-conversation-part-metadata{padding:0;margin-top:6px}.intercom-namespace .intercom-borderless .intercom-conversation-part-admin .intercom-chat-card-borderless .intercom-conversation-part-metadata,.intercom-namespace .intercom-borderless .intercom-conversation-part-admin .intercom-chat-card-borderless-single .intercom-conversation-part-metadata{padding:5px 20px}.intercom-namespace .intercom-borderless .intercom-conversation-part-user .intercom-comment-container-borderless .intercom-conversation-part-metadata{float:none;color:#fff;opacity:.5;width:auto}.intercom-namespace .intercom-borderless .intercom-conversation-part-user .intercom-comment-container-borderless .intercom-conversation-part-metadata-save-state{float:none}.intercom-namespace .intercom-borderless .intercom-chat-card-borderless{margin-left:45px;margin-bottom:8px}.intercom-namespace .intercom-borderless .intercom-chat-card-borderless .intercom-chat-card-avatar-team{left:-46px}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-chat-card-with-avatar{margin-left:95px!important}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-chat-card-with-avatar .intercom-chat-card-avatar,.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-chat-card-with-avatar .intercom-comment-container-admin-borderless-avatar{left:-50px!important}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-comment-container-borderless-with-avatar{margin-left:55px!important}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-comment-container-borderless-with-avatar .intercom-chat-card-avatar,.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-comment-container-borderless-with-avatar .intercom-comment-container-admin-borderless-avatar{left:-10px!important}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-comment-container-admin{width:calc(100% - 100px)}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-typing-admin{padding-left:95px!important}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-typing-admin .intercom-typing-admin-avatar{left:45px!important}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-quick-replies-wrapper{padding-left:40px}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned img.intercom-team-avatar-small{width:17px;height:17px;line-height:17px}.intercom-namespace .intercom-borderless.intercom-borderless-left-aligned .intercom-borderless-body{width:calc(340px + 50px)}.intercom-namespace .intercom-comment-container-borderless-with-avatar .intercom-comment:not(.intercom-comment-with-body){border-bottom-left-radius:0}.intercom-namespace .intercom-quick-replies-container{-webkit-transition:height 200ms ease,opacity 100ms ease;transition:height 200ms ease,opacity 100ms ease}.intercom-namespace .intercom-quick-replies{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.intercom-namespace .quick-reply-button{display:inline-block;font-size:14px;line-height:18px;margin:0 5px 10px;padding:10px;border:1px solid #24b1ed;border-radius:6px;background-color:#fff;color:#24b1ed}.intercom-namespace .quick-reply-button:hover{background-color:#24b1ed;color:#fff}.intercom-namespace .quick-reply-button.quick-reply-button-borderless{margin:5px 0 0 5px}.intercom-namespace .quick-reply-button.quick-reply-button-light{border:1px solid #000;color:#000}.intercom-namespace .quick-reply-button.quick-reply-button-light:hover{color:#000}.intercom-namespace .intercom-install-card{position:absolute;right:0;bottom:0;height:244px;width:524px;background-color:#fff}.intercom-namespace .intercom-install-card-body{height:174px;display:block;margin:40px 104px 34px 40px}.intercom-namespace .intercom-install-card-dismiss-button{height:10px;width:10px;position:absolute;top:25px;right:25px;background-image:url(https://js.intercomcdn.com/images/close.1359f860.png);background-size:10px 10px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-install-card-dismiss-button{background-image:url(https://js.intercomcdn.com/images/close@2x.570e24e7.png)}}.intercom-namespace .intercom-install-card-description{display:block;width:380px;height:100%}.intercom-namespace .intercom-install-card-description-copy{height:140px}.intercom-namespace .intercom-install-card-description-text{font-size:14px;line-height:20px}.intercom-namespace .intercom-install-card-description-text code{padding:3px 5px;display:inline-block;background:#f6f6f6;border-radius:3px;font-family:monospace}.intercom-namespace .intercom-install-card-heading{font-weight:lighter;font-size:18px;line-height:27px;margin-bottom:16px}.intercom-namespace .intercom-install-card-link:hover{text-decoration:underline;color:#286efa!important}.intercom-namespace .intercom-install-card-cta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-install-card-button{display:inline-block;background:#286efa!important;border:1px solid #0549d1;border-radius:4px;color:#fff!important;letter-spacing:-.2px;font-size:14px;font-weight:700;padding:10px 25px}.intercom-namespace .intercom-install-card-link{color:#286efa!important;text-decoration:none;display:inline-block;margin-left:15px;font-size:14px;cursor:pointer}.intercom-namespace .intercom-install-card-button:hover{background:#0549d1!important}.intercom-namespace .intercom-install-card-spacer{height:15px}.intercom-namespace .intercom-install-card-missing-launcher-outline{height:60px;width:60px;position:absolute;bottom:20px;right:20px;background-image:url(https://js.intercomcdn.com/images/missing-messenger.e94bc44d.svg)}.intercom-namespace .intercom-install-card-list{margin-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-install-card-list-item{display:-webkit-box;display:-ms-flexbox;display:flex;width:130px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:12px;margin-top:10px}.intercom-namespace .intercom-install-card-list-item-name{letter-spacing:.7px;font-weight:700}.intercom-namespace .intercom-install-card-list-item-value.o__green{color:#17c65d}.intercom-namespace .intercom-install-card-list-item-name.o__grey,.intercom-namespace .intercom-install-card-list-item-value.o__grey{color:#888}.intercom-namespace .intercom-install-card-list-item-value.o__red,.intercom-namespace .intercom-upfront-email-composer label{color:#fd3a57}.intercom-namespace .intercom-flag{width:16px;height:16px;background-position:0 0;background-image:url(https://js.intercomcdn.com/images/flags.4fc63683.png);background-size:240px 240px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-flag{background-image:url(https://js.intercomcdn.com/images/flags@2x.a60fc35b.png)}}.intercom-namespace .intercom-flag.ad{background-position:-16px 0}.intercom-namespace .intercom-flag.ae{background-position:-32px 0}.intercom-namespace .intercom-flag.af{background-position:-48px 0}.intercom-namespace .intercom-flag.ag{background-position:-64px 0}.intercom-namespace .intercom-flag.ai{background-position:-80px 0}.intercom-namespace .intercom-flag.al{background-position:-96px 0}.intercom-namespace .intercom-flag.am{background-position:-112px 0}.intercom-namespace .intercom-flag.an{background-position:-128px 0}.intercom-namespace .intercom-flag.ao{background-position:-144px 0}.intercom-namespace .intercom-flag.ar{background-position:-160px 0}.intercom-namespace .intercom-flag.as{background-position:-176px 0}.intercom-namespace .intercom-flag.at{background-position:-192px 0}.intercom-namespace .intercom-flag.au{background-position:-208px 0}.intercom-namespace .intercom-flag.aw{background-position:-224px 0}.intercom-namespace .intercom-flag.az{background-position:0 -16px}.intercom-namespace .intercom-flag.ba{background-position:-16px -16px}.intercom-namespace .intercom-flag.bb{background-position:-32px -16px}.intercom-namespace .intercom-flag.bd{background-position:-48px -16px}.intercom-namespace .intercom-flag.be{background-position:-64px -16px}.intercom-namespace .intercom-flag.bf{background-position:-80px -16px}.intercom-namespace .intercom-flag.bg{background-position:-96px -16px}.intercom-namespace .intercom-flag.bh{background-position:-112px -16px}.intercom-namespace .intercom-flag.bi{background-position:-128px -16px}.intercom-namespace .intercom-flag.bj{background-position:-144px -16px}.intercom-namespace .intercom-flag.bm{background-position:-160px -16px}.intercom-namespace .intercom-flag.bn{background-position:-176px -16px}.intercom-namespace .intercom-flag.bo{background-position:-192px -16px}.intercom-namespace .intercom-flag.br{background-position:-208px -16px}.intercom-namespace .intercom-flag.bs{background-position:-224px -16px}.intercom-namespace .intercom-flag.bt{background-position:0 -32px}.intercom-namespace .intercom-flag.bw{background-position:-16px -32px}.intercom-namespace .intercom-flag.by{background-position:-32px -32px}.intercom-namespace .intercom-flag.bz{background-position:-48px -32px}.intercom-namespace .intercom-flag.ca{background-position:-64px -32px}.intercom-namespace .intercom-flag.cd{background-position:-80px -32px}.intercom-namespace .intercom-flag.cf{background-position:-96px -32px}.intercom-namespace .intercom-flag.cg{background-position:-112px -32px}.intercom-namespace .intercom-flag.ch{background-position:-128px -32px}.intercom-namespace .intercom-flag.ci{background-position:-144px -32px}.intercom-namespace .intercom-flag.ck{background-position:-160px -32px}.intercom-namespace .intercom-flag.cl{background-position:-176px -32px}.intercom-namespace .intercom-flag.cm{background-position:-192px -32px}.intercom-namespace .intercom-flag.cn{background-position:-208px -32px}.intercom-namespace .intercom-flag.co{background-position:-224px -32px}.intercom-namespace .intercom-flag.cr{background-position:0 -48px}.intercom-namespace .intercom-flag.cu{background-position:-16px -48px}.intercom-namespace .intercom-flag.cv{background-position:-32px -48px}.intercom-namespace .intercom-flag.cy{background-position:-48px -48px}.intercom-namespace .intercom-flag.cz{background-position:-64px -48px}.intercom-namespace .intercom-flag.de{background-position:-80px -48px}.intercom-namespace .intercom-flag.dj{background-position:-96px -48px}.intercom-namespace .intercom-flag.dk{background-position:-112px -48px}.intercom-namespace .intercom-flag.dm{background-position:-128px -48px}.intercom-namespace .intercom-flag.do{background-position:-144px -48px}.intercom-namespace .intercom-flag.dz{background-position:-160px -48px}.intercom-namespace .intercom-flag.ec{background-position:-176px -48px}.intercom-namespace .intercom-flag.ee{background-position:-192px -48px}.intercom-namespace .intercom-flag.eg{background-position:-208px -48px}.intercom-namespace .intercom-flag.eh{background-position:-224px -48px}.intercom-namespace .intercom-flag.er{background-position:0 -64px}.intercom-namespace .intercom-flag.es{background-position:-16px -64px}.intercom-namespace .intercom-flag.et{background-position:-32px -64px}.intercom-namespace .intercom-flag.fi{background-position:-48px -64px}.intercom-namespace .intercom-flag.fj{background-position:-64px -64px}.intercom-namespace .intercom-flag.fm{background-position:-80px -64px}.intercom-namespace .intercom-flag.fo{background-position:-96px -64px}.intercom-namespace .intercom-flag.fr{background-position:-112px -64px}.intercom-namespace .intercom-flag.ga{background-position:-128px -64px}.intercom-namespace .intercom-flag.gb{background-position:-144px -64px}.intercom-namespace .intercom-flag.gd{background-position:-160px -64px}.intercom-namespace .intercom-flag.ge{background-position:-176px -64px}.intercom-namespace .intercom-flag.gg{background-position:-192px -64px}.intercom-namespace .intercom-flag.gh{background-position:-208px -64px}.intercom-namespace .intercom-flag.gi{background-position:-224px -64px}.intercom-namespace .intercom-flag.gl{background-position:0 -80px}.intercom-namespace .intercom-flag.gm{background-position:-16px -80px}.intercom-namespace .intercom-flag.gn{background-position:-32px -80px}.intercom-namespace .intercom-flag.gp{background-position:-48px -80px}.intercom-namespace .intercom-flag.gq{background-position:-64px -80px}.intercom-namespace .intercom-flag.gr{background-position:-80px -80px}.intercom-namespace .intercom-flag.gt{background-position:-96px -80px}.intercom-namespace .intercom-flag.gu{background-position:-112px -80px}.intercom-namespace .intercom-flag.gw{background-position:-128px -80px}.intercom-namespace .intercom-flag.gy{background-position:-144px -80px}.intercom-namespace .intercom-flag.hk{background-position:-160px -80px}.intercom-namespace .intercom-flag.hn{background-position:-176px -80px}.intercom-namespace .intercom-flag.hr{background-position:-192px -80px}.intercom-namespace .intercom-flag.ht{background-position:-208px -80px}.intercom-namespace .intercom-flag.hu{background-position:-224px -80px}.intercom-namespace .intercom-flag.id{background-position:0 -96px}.intercom-namespace .intercom-flag.ie{background-position:-16px -96px}.intercom-namespace .intercom-flag.il{background-position:-32px -96px}.intercom-namespace .intercom-flag.im{background-position:-48px -96px}.intercom-namespace .intercom-flag.in{background-position:-64px -96px}.intercom-namespace .intercom-flag.iq{background-position:-80px -96px}.intercom-namespace .intercom-flag.ir{background-position:-96px -96px}.intercom-namespace .intercom-flag.is{background-position:-112px -96px}.intercom-namespace .intercom-flag.it{background-position:-128px -96px}.intercom-namespace .intercom-flag.je{background-position:-144px -96px}.intercom-namespace .intercom-flag.jm{background-position:-160px -96px}.intercom-namespace .intercom-flag.jo{background-position:-176px -96px}.intercom-namespace .intercom-flag.jp{background-position:-192px -96px}.intercom-namespace .intercom-flag.ke{background-position:-208px -96px}.intercom-namespace .intercom-flag.kg{background-position:-224px -96px}.intercom-namespace .intercom-flag.kh{background-position:0 -112px}.intercom-namespace .intercom-flag.ki{background-position:-16px -112px}.intercom-namespace .intercom-flag.km{background-position:-32px -112px}.intercom-namespace .intercom-flag.kn{background-position:-48px -112px}.intercom-namespace .intercom-flag.kp{background-position:-64px -112px}.intercom-namespace .intercom-flag.kr{background-position:-80px -112px}.intercom-namespace .intercom-flag.kw{background-position:-96px -112px}.intercom-namespace .intercom-flag.ky{background-position:-112px -112px}.intercom-namespace .intercom-flag.kz{background-position:-128px -112px}.intercom-namespace .intercom-flag.la{background-position:-144px -112px}.intercom-namespace .intercom-flag.lb{background-position:-160px -112px}.intercom-namespace .intercom-flag.lc{background-position:-176px -112px}.intercom-namespace .intercom-flag.li{background-position:-192px -112px}.intercom-namespace .intercom-flag.lk{background-position:-208px -112px}.intercom-namespace .intercom-flag.lr{background-position:-224px -112px}.intercom-namespace .intercom-flag.ls{background-position:0 -128px}.intercom-namespace .intercom-flag.lt{background-position:-16px -128px}.intercom-namespace .intercom-flag.lu{background-position:-32px -128px}.intercom-namespace .intercom-flag.lv{background-position:-48px -128px}.intercom-namespace .intercom-flag.ly{background-position:-64px -128px}.intercom-namespace .intercom-flag.ma{background-position:-80px -128px}.intercom-namespace .intercom-flag.mc{background-position:-96px -128px}.intercom-namespace .intercom-flag.md{background-position:-112px -128px}.intercom-namespace .intercom-flag.me{background-position:-128px -128px}.intercom-namespace .intercom-flag.mg{background-position:-144px -128px}.intercom-namespace .intercom-flag.mh{background-position:-160px -128px}.intercom-namespace .intercom-flag.mk{background-position:-176px -128px}.intercom-namespace .intercom-flag.ml{background-position:-192px -128px}.intercom-namespace .intercom-flag.mm{background-position:-208px -128px}.intercom-namespace .intercom-flag.mn{background-position:-224px -128px}.intercom-namespace .intercom-flag.mo{background-position:0 -144px}.intercom-namespace .intercom-flag.mq{background-position:-16px -144px}.intercom-namespace .intercom-flag.mr{background-position:-32px -144px}.intercom-namespace .intercom-flag.ms{background-position:-48px -144px}.intercom-namespace .intercom-flag.mt{background-position:-64px -144px}.intercom-namespace .intercom-flag.mu{background-position:-80px -144px}.intercom-namespace .intercom-flag.mv{background-position:-96px -144px}.intercom-namespace .intercom-flag.mw{background-position:-112px -144px}.intercom-namespace .intercom-flag.mx{background-position:-128px -144px}.intercom-namespace .intercom-flag.my{background-position:-144px -144px}.intercom-namespace .intercom-flag.mz{background-position:-160px -144px}.intercom-namespace .intercom-flag.na{background-position:-176px -144px}.intercom-namespace .intercom-flag.nc{background-position:-192px -144px}.intercom-namespace .intercom-flag.ne{background-position:-208px -144px}.intercom-namespace .intercom-flag.ng{background-position:-224px -144px}.intercom-namespace .intercom-flag.ni{background-position:0 -160px}.intercom-namespace .intercom-flag.nl{background-position:-16px -160px}.intercom-namespace .intercom-flag.no{background-position:-32px -160px}.intercom-namespace .intercom-flag.np{background-position:-48px -160px}.intercom-namespace .intercom-flag.nr{background-position:-64px -160px}.intercom-namespace .intercom-flag.nz{background-position:-80px -160px}.intercom-namespace .intercom-flag.om{background-position:-96px -160px}.intercom-namespace .intercom-flag.pa{background-position:-112px -160px}.intercom-namespace .intercom-flag.pe{background-position:-128px -160px}.intercom-namespace .intercom-flag.pf{background-position:-144px -160px}.intercom-namespace .intercom-flag.pg{background-position:-160px -160px}.intercom-namespace .intercom-flag.ph{background-position:-176px -160px}.intercom-namespace .intercom-flag.pk{background-position:-192px -160px}.intercom-namespace .intercom-flag.pl{background-position:-208px -160px}.intercom-namespace .intercom-flag.pr{background-position:-224px -160px}.intercom-namespace .intercom-flag.ps{background-position:0 -176px}.intercom-namespace .intercom-flag.pt{background-position:-16px -176px}.intercom-namespace .intercom-flag.pw{background-position:-32px -176px}.intercom-namespace .intercom-flag.py{background-position:-48px -176px}.intercom-namespace .intercom-flag.qa{background-position:-64px -176px}.intercom-namespace .intercom-flag.re{background-position:-80px -176px}.intercom-namespace .intercom-flag.ro{background-position:-96px -176px}.intercom-namespace .intercom-flag.rs{background-position:-112px -176px}.intercom-namespace .intercom-flag.ru{background-position:-128px -176px}.intercom-namespace .intercom-flag.rw{background-position:-144px -176px}.intercom-namespace .intercom-flag.sa{background-position:-160px -176px}.intercom-namespace .intercom-flag.sb{background-position:-176px -176px}.intercom-namespace .intercom-flag.sc{background-position:-192px -176px}.intercom-namespace .intercom-flag.sd{background-position:-208px -176px}.intercom-namespace .intercom-flag.se{background-position:-224px -176px}.intercom-namespace .intercom-flag.sg{background-position:0 -192px}.intercom-namespace .intercom-flag.si{background-position:-16px -192px}.intercom-namespace .intercom-flag.sk{background-position:-32px -192px}.intercom-namespace .intercom-flag.sl{background-position:-48px -192px}.intercom-namespace .intercom-flag.sm{background-position:-64px -192px}.intercom-namespace .intercom-flag.sn{background-position:-80px -192px}.intercom-namespace .intercom-flag.so{background-position:-96px -192px}.intercom-namespace .intercom-flag.sr{background-position:-112px -192px}.intercom-namespace .intercom-flag.st{background-position:-128px -192px}.intercom-namespace .intercom-flag.sv{background-position:-144px -192px}.intercom-namespace .intercom-flag.sy{background-position:-160px -192px}.intercom-namespace .intercom-flag.sz{background-position:-176px -192px}.intercom-namespace .intercom-flag.tc{background-position:-192px -192px}.intercom-namespace .intercom-flag.td{background-position:-208px -192px}.intercom-namespace .intercom-flag.tg{background-position:-224px -192px}.intercom-namespace .intercom-flag.th{background-position:0 -208px}.intercom-namespace .intercom-flag.tj{background-position:-16px -208px}.intercom-namespace .intercom-flag.tl{background-position:-32px -208px}.intercom-namespace .intercom-flag.tm{background-position:-48px -208px}.intercom-namespace .intercom-flag.tn{background-position:-64px -208px}.intercom-namespace .intercom-flag.to{background-position:-80px -208px}.intercom-namespace .intercom-flag.tr{background-position:-96px -208px}.intercom-namespace .intercom-flag.tt{background-position:-112px -208px}.intercom-namespace .intercom-flag.tv{background-position:-128px -208px}.intercom-namespace .intercom-flag.tw{background-position:-144px -208px}.intercom-namespace .intercom-flag.tz{background-position:-160px -208px}.intercom-namespace .intercom-flag.ua{background-position:-176px -208px}.intercom-namespace .intercom-flag.ug{background-position:-192px -208px}.intercom-namespace .intercom-flag.us{background-position:-208px -208px}.intercom-namespace .intercom-flag.uy{background-position:-224px -208px}.intercom-namespace .intercom-flag.uz{background-position:0 -224px}.intercom-namespace .intercom-flag.va{background-position:-16px -224px}.intercom-namespace .intercom-flag.vc{background-position:-32px -224px}.intercom-namespace .intercom-flag.ve{background-position:-48px -224px}.intercom-namespace .intercom-flag.vg{background-position:-64px -224px}.intercom-namespace .intercom-flag.vi{background-position:-80px -224px}.intercom-namespace .intercom-flag.vn{background-position:-96px -224px}.intercom-namespace .intercom-flag.vu{background-position:-112px -224px}.intercom-namespace .intercom-flag.ws{background-position:-128px -224px}.intercom-namespace .intercom-flag.ye{background-position:-144px -224px}.intercom-namespace .intercom-flag.za{background-position:-160px -224px}.intercom-namespace .intercom-flag.zm{background-position:-176px -224px}.intercom-namespace .intercom-flag.zw{background-position:-192px -224px}.intercom-namespace .intercom-launcher-discovery{padding:9px;cursor:pointer;background-color:#fff;position:absolute;opacity:0;font-family:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;border-radius:35px}.intercom-namespace .intercom-launcher-discovery *{cursor:pointer}.intercom-namespace .intercom-launcher-discovery .intercom-launcher-discovery-container{white-space:nowrap;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.intercom-namespace .intercom-launcher-discovery-show{-webkit-animation:intercom-launcher-discovery-show 200ms linear both;animation:intercom-launcher-discovery-show 200ms linear both;-webkit-animation-delay:320ms;animation-delay:320ms}.intercom-namespace .intercom-launcher-discovery-hide{-webkit-animation:intercom-launcher-discovery-hide 200ms linear both;animation:intercom-launcher-discovery-hide 200ms linear both}.intercom-namespace .intercom-launcher-discovery-team-avatar,.intercom-namespace .intercom-launcher-discovery-text{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;display:inline-block;vertical-align:middle}.intercom-namespace .intercom-launcher-discovery-text{padding-left:4px;padding-right:50px;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.intercom-namespace .intercom-launcher-discovery-team-avatar .intercom-team-profile-compact-avatar-container{padding-right:4px}.intercom-namespace .intercom-launcher-discovery-team-avatar .intercom-team-profile-compact-avatar-container .intercom-team-profile-compact-avatar{border:2px solid #fff}.intercom-namespace .intercom-launcher-discovery-text .intercom-launcher-discovery-title{font-size:15px;color:#3a3c4c;font-weight:500;padding-top:1px}.intercom-namespace .intercom-launcher-discovery-text .intercom-launcher-discovery-response-delay{padding-top:7px;font-size:14px;opacity:.8;font-weight:500;white-space:nowrap;color:#737376}.intercom-namespace .intercom-launcher-discovery-left .intercom-launcher-discovery-text{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;padding-left:58px;padding-right:10px}.intercom-namespace .intercom-launcher-discovery-left .intercom-launcher-discovery-team-avatar{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.intercom-namespace .intercom-composer-popover{z-index:2147483003;position:absolute;max-height:260px;bottom:100%;right:calc(50% - 165px);-webkit-box-shadow:0 1px 15px 1px rgba(0,0,0,.12);box-shadow:0 1px 15px 1px rgba(0,0,0,.12);background-color:#fff;border-radius:6px}.intercom-namespace .intercom-composer-popover-caret{position:absolute;bottom:-8px;right:0;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.intercom-namespace .intercom-composer-emoji-popover .intercom-composer-popover-caret{right:41px}.intercom-namespace .intercom-composer-gif-popover .intercom-composer-popover-caret{right:81px}.intercom-namespace .intercom-composer-uploads-hidden .intercom-composer-emoji-popover .intercom-composer-popover-caret{right:7px}.intercom-namespace .intercom-composer-uploads-hidden .intercom-composer-gif-popover .intercom-composer-popover-caret{right:47px}.intercom-namespace .intercom-composer-popover-header{position:absolute;top:0;left:20px;right:20px;height:40px;border-bottom:1px #e1e1e1 solid}.intercom-namespace .intercom-composer-popover-input{background-image:url(https://js.intercomcdn.com/images/search.23b42295.png);background-size:16px 16px;background-repeat:no-repeat;background-position:0 12px;font-weight:400;font-size:14px;color:#000;padding:10px 0 10px 25px;height:40px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-composer-popover-input{background-image:url(https://js.intercomcdn.com/images/search@2x.b93d3be5.png)}}.intercom-namespace .intercom-composer-popover-input::-webkit-input-placeholder,.intercom-namespace .intercom-validating-input input::-webkit-input-placeholder{color:#737376}.intercom-namespace .intercom-composer-popover-input::-moz-placeholder,.intercom-namespace .intercom-validating-input input::-moz-placeholder{color:#737376}.intercom-namespace .intercom-composer-popover-input:-ms-input-placeholder,.intercom-namespace .intercom-validating-input input:-ms-input-placeholder{color:#737376}.intercom-namespace .intercom-composer-popover-body{position:absolute;top:40px;left:0;right:0;bottom:5px;padding:0 20px;overflow-y:scroll}.intercom-namespace .intercom-composer-popover-message{position:absolute;left:0;top:50%;width:100%;margin-top:-7px;font-size:14px;font-weight:700;text-align:center;color:#000}.intercom-namespace .intercom-borderless .intercom-composer-popover{height:236px;top:-236px;right:7px}.intercom-namespace .intercom-borderless .intercom-composer-emoji-popover .intercom-composer-popover-caret{right:52px}.intercom-namespace .intercom-borderless .intercom-composer-gif-popover .intercom-composer-popover-caret{right:92px}.intercom-namespace .intercom-borderless .intercom-composer-uploads-hidden .intercom-composer-emoji-popover .intercom-composer-popover-caret{right:18px}.intercom-namespace .intercom-borderless .intercom-composer-uploads-hidden .intercom-composer-gif-popover .intercom-composer-popover-caret{right:58px}.intercom-namespace .intercom-bound-event-creator-header-container{background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:12px}.intercom-namespace .intercom-bound-event-creator-header-title{color:#1d364b;font-size:16px;font-weight:700;padding:4px 10px}.intercom-namespace .intercom-bound-event-creator-body-container{background:#f7fafc;-webkit-box-shadow:inset 0 1px 1px 0 rgba(9,23,30,.15),inset 0 -1px 0 0 rgba(9,23,30,.12);box-shadow:inset 0 1px 1px 0 rgba(9,23,30,.15),inset 0 -1px 0 0 rgba(9,23,30,.12);padding:16px 20px}.intercom-namespace .intercom-bound-event-creator-button{border:1px solid rgba(29,54,75,.2);border-radius:3px;padding:5px 18px 7px;display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:-webkit-box-shadow linear 40ms;transition:box-shadow linear 40ms;transition:box-shadow linear 40ms,-webkit-box-shadow linear 40ms;font-size:13px;line-height:18px;font-weight:700;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:bottom;margin-left:10px}.intercom-namespace .intercom-bound-event-creator-button:hover{-webkit-box-shadow:0 1px 5px 0 rgba(29,54,75,.1);box-shadow:0 1px 5px 0 rgba(29,54,75,.1)}.intercom-namespace .intercom-bound-event-creator-button.primary{background-color:#1f8ceb;color:#fff}.intercom-namespace .intercom-bound-event-creator-button.primary:hover{background-color:#1271c4}.intercom-namespace .intercom-bound-event-creator-button.secondary{background-color:#fff;color:#62778c}.intercom-namespace .intercom-bound-event-creator-button.secondary:hover{background-color:#f8fafb}.intercom-namespace .intercom-bound-event-creator-button.disabled{opacity:.5;pointer-events:none}.intercom-namespace .intercom-bound-event-creator-small-caps{color:#8da2b5;display:block;font-size:11px;font-weight:500;line-height:20px;padding-bottom:3px}.intercom-namespace .intercom-bound-event-creator-secondary-text{color:#62778c}.intercom-namespace .intercom-bound-event-creator-selector-preview{background-color:#fff;border:1px solid #eee;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;overflow-x:auto;margin-bottom:16px;padding:5px 11px;white-space:nowrap;width:100%}.intercom-namespace .intercom-bound-event-creator-input-label{cursor:pointer;margin-top:15px}.intercom-namespace .intercom-bound-event-creator-radio-form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.intercom-namespace .intercom-bound-event-creator-radio-input{margin-bottom:5px!important;margin-right:10px!important}.intercom-namespace .intercom-bound-event-creator-footer-container{bottom:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;left:20px;right:20px;padding:12px}.intercom-namespace .intercom-bound-event-creator-event-type-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:200px;border:1px solid #e1e1e1}.intercom-namespace .intercom-bound-event-creator-event-type-box,.intercom-namespace .intercom-bound-event-creator-event-type-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-bound-event-creator-event-type-box{width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;padding:25px 50px;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.intercom-namespace .intercom-bound-event-creator-event-type-box.selected{-webkit-box-shadow:inset 0 0 0 2px #1f8ceb;box-shadow:inset 0 0 0 2px #1f8ceb}.intercom-namespace .intercom-bound-event-creator-event-type-info{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:center}.intercom-namespace .intercom-bound-event-creator-event-type-description{margin-top:10px;text-align:center;color:#8da2b5}.intercom-namespace .intercom-bound-event-creator-icon-container{height:40px;width:40px;margin-bottom:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.intercom-namespace .intercom-bound-event-creator-event-type-icon{fill:#8da2b5;margin:auto}.intercom-namespace .intercom-bound-event-creator-event-type-icon.selected{fill:#1f8ceb}.intercom-namespace .intercom-bound-event-creator-small-check{position:absolute;right:10px;top:10px;width:11px;height:10px;background-image:url(https://js.intercomcdn.com/images/small-check.91b9b0b4.png);background-size:11px 10px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-bound-event-creator-small-check{background-image:url(https://js.intercomcdn.com/images/small-check@2x.24fc1acc.png)}}.intercom-namespace .intercom-bound-event-creator-element-confirmation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.intercom-namespace .intercom-bound-event-creator-element-confirmation span+span{margin-left:10px}.intercom-namespace .intercom-bound-event-creator-element-confirmation-description{-webkit-box-flex:1;-ms-flex:1;flex:1}.intercom-namespace .intercom-bound-event-creator{color:#1d364b;font-size:14px;margin:-8px}.intercom-namespace .intercom-bound-event-creator p{line-height:22px;margin-bottom:16px}.intercom-namespace .intercom-bound-event-creator a{text-decoration:underline;color:#62778c;font-size:12px;white-space:nowrap}.intercom-namespace .intercom-bound-event-creator .footer-container{bottom:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;left:20px;position:absolute;right:20px}.intercom-namespace .intercom-bound-event-creator-dynamic-url-editor{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:15px;border:1px solid #e1e1e1;margin-top:10px}.intercom-namespace .intercom-bound-event-creator-dynamic-segment-picker{line-height:1.6em}.intercom-namespace .intercom-bound-event-creator-dynamic-segment{background-color:#fff;color:#1f8ceb;border:1px solid #1f8ceb;padding:2px 4px;border-radius:4px;margin:0 2px;word-break:break-all;cursor:pointer}.intercom-namespace .intercom-bound-event-creator-dynamic-segment.selected,.intercom-namespace .intercom-bound-event-creator-dynamic-segment:hover{background-color:#1f8ceb;color:#fff}.intercom-namespace .intercom-bound-event-creator-button-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.intercom-namespace .intercom-bound-event-creator-button-row .intercom-bound-event-creator-button{padding:5px 10px;margin-left:0;margin-right:10px;font-size:11px;line-height:15px}.intercom-namespace .intercom-bound-event-creator-header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:34px}.intercom-namespace .intercom-bound-event-creator-header,.intercom-namespace .intercom-bound-event-creator-header-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-bound-event-creator-header-text{color:#fff;font-size:14px}.intercom-namespace .intercom-bound-event-creator-header .intercom-icon{width:30px;height:30px;background-image:url(https://js.intercomcdn.com/images/intercom-icon.ea4cbfc6.png);background-size:30px 30px;background-repeat:no-repeat;opacity:1;margin-right:20px}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-bound-event-creator-header .intercom-icon{background-image:url(https://js.intercomcdn.com/images/intercom-icon@2x.de10c04e.png)}}.intercom-namespace .intercom-bound-event-creator-header .event-icon{width:13px;height:15px;background-image:url(https://js.intercomcdn.com/images/event-icon.c55f484a.png);background-size:13px 15px;background-repeat:no-repeat;opacity:1;margin:0 10px}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-bound-event-creator-header .event-icon{background-image:url(https://js.intercomcdn.com/images/event-icon@2x.f8e0c749.png)}}.intercom-namespace .intercom-bound-event-creator-header-stages,.intercom-namespace .intercom-bound-event-creator-header-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.intercom-namespace .intercom-bound-event-creator-header-stage-number{background-color:#62778c;border-radius:50%;color:#1d364b;height:24px;width:24px;margin:0 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-weight:500}.intercom-namespace .intercom-bound-event-creator-header-stage-number.active{background-color:#fff}.intercom-namespace .intercom-bound-event-creator-header-exit-link{color:#8da2b5;font-size:13px;cursor:pointer}.intercom-namespace .intercom-bound-event-creator-header-exit-link:hover{text-decoration:underline}.intercom-namespace .intercom-notification-channel-collector-card{margin-top:8px;margin-bottom:8px;width:100%;position:relative;float:left}.intercom-namespace .intercom-notification-channel-collector-card-avatar{position:absolute;left:0;bottom:10px}.intercom-namespace .intercom-notification-channel-collector-card-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-notification-channel-collector-card-body{padding:26px 24px 24px;margin-left:48px;border-radius:3px;font-size:14px;line-height:1.4;color:#000;overflow:hidden;-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-notification-channel-collector-card-borderless .intercom-notification-channel-collector-card-body{-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);border-color:#fff;background-color:#fff;margin-left:45px}.intercom-namespace .intercom-notification-channel-collector-card-controls-message,.intercom-namespace .intercom-notification-channel-collector-card-controls-prompt{margin-bottom:6px;font-size:14px;line-height:24px;max-height:48px;color:#000;-webkit-transition:opacity 300ms 1000ms,max-height 400ms 1000ms;transition:opacity 300ms 1000ms,max-height 400ms 1000ms}.intercom-namespace .intercom-notification-channel-collector-card-controls-message{position:absolute;top:0;opacity:0;visibility:hidden;max-height:24px}.intercom-namespace .intercom-notification-channel-collector-card-controls-channels{font-size:13px;line-height:20px;height:30px;color:#737376;-webkit-transition:opacity 300ms 300ms,height 400ms 1000ms;transition:opacity 300ms 300ms,height 400ms 1000ms}.intercom-namespace .intercom-notification-channel-collector-card-controls-channel{margin-right:20px;color:#737376}.intercom-namespace .intercom-notification-channel-collector-card-controls-channel.intercom-notification-channel-collector-card-controls-channel-selected,.intercom-namespace .intercom-notification-channel-collector-card-controls-channel:hover{color:#000;border-bottom:1px solid}.intercom-namespace .intercom-notification-channel-collector-card-controls-saved .intercom-notification-channel-collector-card-controls-prompt{position:absolute;top:0;opacity:0;visibility:hidden;max-height:24px}.intercom-namespace .intercom-notification-channel-collector-card-controls-saved .intercom-notification-channel-collector-card-controls-message{position:static;opacity:1;visibility:visible;max-height:48px}.intercom-namespace .intercom-notification-channel-collector-card-controls-saved .intercom-notification-channel-collector-card-controls-channels{height:0;opacity:0}.intercom-namespace .intercom-attribute-collector-card{margin-top:8px;margin-bottom:8px;width:100%;position:relative;float:left}.intercom-namespace .intercom-attribute-collector-card-avatar{position:absolute;left:0;bottom:10px}.intercom-namespace .intercom-attribute-collector-card-avatar .intercom-avatar{width:32px;height:32px;line-height:32px;font-size:16px}.intercom-namespace .intercom-attribute-collector-card-body{position:relative;height:100%;padding:26px 24px 24px;margin-left:45px;text-align:left;background-color:#fff;border-radius:5px;color:#000;-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-attribute-collector-card-attribute{margin:0 0 16px}.intercom-namespace .intercom-attribute-collector-card-attribute:last-child{margin:0}.intercom-namespace .intercom-attribute-collector-card-position{position:absolute;right:24px;top:26px;color:#737376;font-size:14px;line-height:20px}.intercom-namespace .intercom-attribute-collector-card-label{margin-bottom:5px;font-size:14px;line-height:20px}.intercom-namespace .intercom-attribute-collector-card-borderless{min-height:57px}.intercom-namespace .intercom-attribute-collector-card-borderless .intercom-attribute-collector-card-body{-webkit-box-shadow:0 2px 8px 0 rgba(35,47,53,.09);box-shadow:0 2px 8px 0 rgba(35,47,53,.09);border-color:#fff}.intercom-namespace .intercom-attribute-collector-card-reply-type{margin-top:3px}.intercom-namespace .intercom-attribute-collector-card-borderless.intercom-attribute-collector-card-reply-type .intercom-attribute-collector-card-body{padding:0}.intercom-namespace .intercom-attribute-collector-card-borderless.intercom-attribute-collector-card-reply-type .intercom-attribute-collector-card-attribute{margin:0;height:52px}.intercom-namespace .intercom-attribute-collector-card-borderless.intercom-attribute-collector-card-reply-type .intercom-attribute-collector-card-label{display:none}.intercom-namespace .intercom-attribute-collector-card-mobile.intercom-attribute-collector-card-reply-type .intercom-attribute-collector-card-body{margin-left:0}.intercom-namespace .intercom-boolean-attribute{position:relative;width:100%}.intercom-namespace .intercom-boolean-attribute-saved .intercom-boolean-attribute-option,.intercom-namespace .intercom-boolean-attribute-saving .intercom-boolean-attribute-option{border:1px solid #24b1ed}.intercom-namespace .intercom-boolean-attribute-saved .intercom-boolean-attribute-option,.intercom-namespace .intercom-boolean-attribute-saved .intercom-boolean-attribute-option *,.intercom-namespace .intercom-boolean-attribute-saving .intercom-boolean-attribute-option,.intercom-namespace .intercom-boolean-attribute-saving .intercom-boolean-attribute-option *{cursor:default}.intercom-namespace .intercom-boolean-attribute-option{-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #24b1ed;color:#24b1ed;border-radius:4px;display:inline-block;font-size:14px;padding:12px;text-align:center;width:calc(50% - 1px);cursor:pointer}.intercom-namespace .intercom-boolean-attribute-option *{cursor:pointer}.intercom-namespace .intercom-boolean-attribute-option .intercom-boolean-attribute-text,.intercom-namespace .intercom-note .intercom-block-button>span,.intercom-namespace .intercom-note-card .intercom-block-button>span,.intercom-namespace .intercom-pointer .intercom-block-button>span,.intercom-namespace .intercom-post .intercom-block-button>span,.intercom-namespace .intercom-post-card .intercom-block-button>span,.intercom-namespace .intercom-tour-step-pointer .intercom-block-button>span,.intercom-namespace .intercom-tour-step-post .intercom-block-button>span{font-weight:700}.intercom-namespace .intercom-boolean-attribute-option-unsubmitted{color:#24b1ed;cursor:pointer}.intercom-namespace .intercom-boolean-attribute-option-unsubmitted:focus,.intercom-namespace .intercom-boolean-attribute-option-unsubmitted:hover{border-color:rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-boolean-attribute-option-unsubmitted.intercom-boolean-attribute-option.intercom-boolean-attribute-option-right:focus,.intercom-namespace .intercom-boolean-attribute-option-unsubmitted.intercom-boolean-attribute-option.intercom-boolean-attribute-option-right:hover{border-left-width:1px;margin-left:-1px;width:50%}.intercom-namespace .intercom-boolean-attribute-option.intercom-boolean-attribute-option-left{border-top-right-radius:0;border-bottom-right-radius:0}.intercom-namespace .intercom-boolean-attribute-option.intercom-boolean-attribute-option-left.intercom-boolean-attribute-option.intercom-boolean-attribute-option-submitted-not-chosen{border-right-width:0}.intercom-namespace .intercom-boolean-attribute-option.intercom-boolean-attribute-option-right{border-left-width:0;border-top-left-radius:0;border-bottom-left-radius:0}.intercom-namespace .intercom-boolean-attribute-option.intercom-boolean-attribute-option-submitted-chosen{border-left-width:1px}.intercom-namespace .intercom-boolean-attribute-option.intercom-boolean-attribute-option-submitted-chosen .intercom-boolean-attribute-text{color:#000}.intercom-namespace .intercom-boolean-attribute-option.intercom-boolean-attribute-option-submitted-not-chosen .intercom-boolean-attribute-text{opacity:.2}.intercom-namespace .intercom-button-group-attribute{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;max-width:100%;margin-bottom:8px}.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute{margin:0;border:1px solid #24b1ed;color:#24b1ed;display:inline-block;padding:8px 2px;cursor:pointer;border-radius:0;border-right:none;-webkit-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0;text-align:center;position:relative}.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px}.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute:last-child{border-right:1px solid #24b1ed;border-top-right-radius:4px;border-bottom-right-radius:4px}.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute-text{font-weight:600;font-size:14px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:block;text-align:center;line-height:1.5;opacity:1}.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled),.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled){color:#24b1ed}.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled),.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled) *,.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled),.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled) *{cursor:pointer}.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):hover,.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):hover{border-color:#0f82b3;border-right:1px solid #0f82b3;margin-right:-1px}.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):hover:not(.intercom-button-group-item-attribute-selected),.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):hover:not(.intercom-button-group-item-attribute-selected){color:#0f82b3}.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):active,.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):active{border-color:#0c6e97;border-right:1px solid #0c6e97}.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):active:not(.intercom-button-group-item-attribute-selected),.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):active:not(.intercom-button-group-item-attribute-selected){color:#0c6e97}.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):last-child:focus,.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):last-child:hover,.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):last-child:focus,.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled):last-child:hover{margin-right:0}.intercom-namespace .intercom-button-group-attribute-failed:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled).intercom-button-group-item-attribute-selected,.intercom-namespace .intercom-button-group-attribute-unsaved:not(.intercom-button-group-attribute-disabled) .intercom-button-group-item-attribute:not(.intercom-button-group-item-attribute-disabled).intercom-button-group-item-attribute-selected{background-color:#24b1ed;color:#fff}.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute-disabled,.intercom-namespace .intercom-button-group-attribute-saved .intercom-button-group-item-attribute{color:#bcbcbc;border-color:#bcbcbc}.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute-disabled,.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute-disabled *,.intercom-namespace .intercom-button-group-attribute-saved .intercom-button-group-item-attribute,.intercom-namespace .intercom-button-group-attribute-saved .intercom-button-group-item-attribute *{cursor:default}.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute-disabled:last-child,.intercom-namespace .intercom-button-group-attribute-saved .intercom-button-group-item-attribute:last-child{border-right:1px solid #bcbcbc}.intercom-namespace .intercom-button-group-attribute .intercom-button-group-item-attribute-disabledintercom-button-group-item-attribute-selected,.intercom-namespace .intercom-button-group-attribute-saved .intercom-button-group-item-attributeintercom-button-group-item-attribute-selected{background-color:#eee}.intercom-namespace .intercom-button-group-attribute-saving .intercom-button-group-item-attribute,.intercom-namespace .intercom-button-group-attribute-saving .intercom-button-group-item-attribute *{cursor:default}.intercom-namespace .intercom-messenger-card-single-select-loading .intercom-button-group-item-attribute-selected{background-color:#24b1ed;color:#fff}.intercom-namespace .intercom-validating-input{position:relative}.intercom-namespace .intercom-validating-input input{width:100%;height:40px;padding:11px 40px 11px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;-webkit-box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.07);box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.07);border:1px solid #e1e1e1;color:#000;border-radius:4px;background:#fafafa;-webkit-appearance:none}.intercom-namespace .intercom-messenger-card-textarea textarea:focus,.intercom-namespace .intercom-validating-input input:focus{background:#fff}.intercom-namespace .intercom-validating-input.intercom-validating-input-failed input{background-color:#fef0f0;color:#d22628;border-color:#fbdbdb}.intercom-namespace .intercom-validating-input.intercom-validating-input-failed input::-webkit-input-placeholder{color:#68676b}.intercom-namespace .intercom-validating-input.intercom-validating-input-failed input::-moz-placeholder{color:#68676b}.intercom-namespace .intercom-validating-input.intercom-validating-input-failed input:-ms-input-placeholder{color:#68676b}.intercom-namespace .intercom-validating-input.intercom-validating-input-saved input{border:1px solid #e1e1e1;color:#737376;-webkit-text-fill-color:#737376;-webkit-opacity:1}.intercom-namespace .intercom-validating-input.intercom-validating-input-saved .intercom-submittable-input-submit-button,.intercom-namespace .intercom-validating-input.intercom-validating-input-saving .intercom-submittable-input-submit-button .intercom-submittable-input-submit-icon,.intercom-namespace .intercom-validating-input.intercom-validating-input-saving .intercom-submittable-input-success-icon{visibility:hidden}.intercom-namespace .intercom-validating-input.intercom-validating-input-notification-channel.intercom-validating-input-saved input{background:#fff;color:#737376;border-color:#fff;padding:0;height:20px;-webkit-transition:color 400ms 600ms,border 300ms,padding 300ms 600ms,height 400ms 1000ms;transition:color 400ms 600ms,border 300ms,padding 300ms 600ms,height 400ms 1000ms;-webkit-box-shadow:none;box-shadow:none}.intercom-namespace .intercom-validating-input.intercom-validating-input-notification-channel.intercom-validating-input-saved .intercom-submittable-input-submit-button{opacity:0;-webkit-transition:opacity 300ms,visibility 0 300ms;transition:opacity 300ms,visibility 0 300ms}.intercom-namespace .intercom-validating-input.intercom-validating-input-notification-channel.intercom-validating-input-saved .intercom-submittable-input-success-icon{visibility:hidden}.intercom-namespace .intercom-validating-input.intercom-validating-input-borderless.intercom-validating-input-reply-type input{height:52px;border:0;padding-left:20px}.intercom-namespace .intercom-validating-input.intercom-validating-input-borderless.intercom-validating-input-reply-type .intercom-submittable-input-submit-button{top:6px;right:6px;bottom:6px;margin:0;border-radius:3px}.intercom-namespace .intercom-submittable-input-submit-button{cursor:pointer;z-index:1;position:absolute;top:0;right:0;bottom:0;width:40px;border-top-right-radius:3px;border-bottom-right-radius:3px;background-color:rgb(36, 177, 237);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none}.intercom-namespace .intercom-submittable-input-submit-button:hover:not(.intercom-submittable-input-submit-button-disabled):not(.intercom-submittable-input-submit-button-saving){background-color:rgb(17, 149, 205)}.intercom-namespace .intercom-submittable-input-submit-button:active:not(.intercom-submittable-input-submit-button-disabled):not(.intercom-submittable-input-submit-button-saving){background-color:rgb(13, 115, 158)}.intercom-namespace .intercom-submittable-input-submit-button-light{border:1px solid #d2d7db}.intercom-namespace .intercom-submittable-input-success-icon{position:absolute;height:12px;width:15px;top:14px;right:14px;stroke:#39c089;z-index:0}.intercom-namespace .intercom-validating-input-borderless .intercom-submittable-input-success-icon{top:20px}.intercom-namespace .intercom-submittable-input-submit-button.intercom-submittable-input-submit-button-disabled{cursor:default;background-color:#eee}.intercom-namespace .intercom-submittable-input-submit-button.intercom-submittable-input-submit-button-disabled *{cursor:default}.intercom-namespace .intercom-submittable-input-submit-button.intercom-submittable-input-submit-button-disabled .intercom-submittable-input-submit-icon{stroke:#bcbcbc}.intercom-namespace .intercom-submittable-input-submit-button .intercom-submittable-input-submit-icon{position:absolute;height:15px;width:10px;top:12px;right:14px;stroke:rgb(255, 255, 255)}.intercom-namespace .intercom-list-attribute{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;height:40px;padding:0 0 0 16px;border-radius:4px;font-size:14px;line-height:40px;color:#000;background:#fff;border:1px solid #e1e1e1}.intercom-namespace .intercom-list-attribute:focus{border:1px solid rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-list-attribute,.intercom-namespace .intercom-list-attribute *{cursor:pointer}.intercom-namespace .intercom-list-attribute-placeholder,.intercom-namespace .intercom-list-attribute-value{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.intercom-namespace .intercom-list-attribute-open{border:1px solid rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-list-attribute-disabled:focus{border:1px solid #e1e1e1}.intercom-namespace .intercom-list-attribute-disabled,.intercom-namespace .intercom-list-attribute-disabled *{cursor:default}.intercom-namespace .intercom-list-attribute-saved,.intercom-namespace .intercom-list-attribute-saving{border:1px solid #24b1ed}.intercom-namespace .intercom-list-attribute-saved,.intercom-namespace .intercom-list-attribute-saved *,.intercom-namespace .intercom-list-attribute-saving,.intercom-namespace .intercom-list-attribute-saving *{cursor:default}.intercom-namespace .intercom-list-attribute-saved{border-color:#e1e1e1;background:#fafafa;color:#737376}.intercom-namespace .intercom-list-attribute-open-icon,.intercom-namespace .intercom-list-attribute-success-icon{width:35px;background-position:center}.intercom-namespace .intercom-list-attribute-open-icon{border:0;background-image:url(https://js.intercomcdn.com/images/open-list-icon.a09533f7.png);background-size:8px 4px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-list-attribute-open-icon{background-image:url(https://js.intercomcdn.com/images/open-list-icon@2x.22c61e88.png)}}.intercom-namespace .intercom-list-attribute-success-icon{background-image:url(https://js.intercomcdn.com/images/green-check-icon.9828d61b.png);background-size:14px 12px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-list-attribute-success-icon{background-image:url(https://js.intercomcdn.com/images/green-check-icon@2x.65fa2c1a.png)}}.intercom-namespace .intercom-list-attribute-placeholder{color:#24b1ed;font-weight:600;border:0}.intercom-namespace .intercom-list-attribute-disabled .intercom-list-attribute-placeholder{color:#bcbcbc}.intercom-namespace .intercom-list-attribute-options{z-index:2147483002;position:absolute;bottom:41px;left:-1px;right:-1px;padding:10px 0;max-height:120px;border-radius:4px;background-color:#fff;overflow:scroll;-webkit-box-shadow:0 1px 15px rgba(0,0,0,.1);box-shadow:0 1px 15px rgba(0,0,0,.1)}.intercom-namespace .intercom-list-attribute-option{padding:6px 28px 6px 14px;line-height:20px;position:relative}.intercom-namespace .intercom-list-attribute-option-selected .intercom-check-icon{position:absolute;width:16px;height:16px;top:calc(50% - 8px);right:8px;fill:#24b1ed}.intercom-namespace .intercom-list-attribute-option:not(.intercom-list-attribute-option-disabled):hover{color:#fff;background-color:#24b1ed}.intercom-namespace .intercom-list-attribute-option:not(.intercom-list-attribute-option-disabled).intercom-list-attribute-option-selected:hover .intercom-check-icon{fill:#fff}.intercom-namespace .intercom-list-attribute-option-disabled{color:#bcbcbc}.intercom-namespace .intercom-list-attribute-option-disabled:hover{cursor:default}.intercom-namespace .intercom-list-attribute-option-disabled.intercom-list-attribute-option-selected .intercom-check-icon{fill:#bcbcbc}.intercom-namespace .intercom-messenger-card-wrapper-light .intercom-list-attribute-placeholder{color:#737376}.intercom-namespace .intercom-messenger-card-wrapper-light .intercom-list-attribute-option:not(.intercom-list-attribute-option-disabled):hover{color:#000}.intercom-namespace .intercom-phone-number-input{position:relative;background:#fafafa}.intercom-namespace .intercom-phone-number-input input{position:absolute;padding:11px 35px;border:1px solid #e1e1e1;border-radius:4px}.intercom-namespace .intercom-phone-number-input,.intercom-namespace .intercom-phone-number-input .intercom-phone-number-input-placeholder,.intercom-namespace .intercom-phone-number-input input{width:100%;height:40px;font-size:14px;line-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box}.intercom-namespace .intercom-phone-number-input .intercom-phone-number-input-placeholder-prefix,.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-saved .intercom-phone-number-input-placeholder,.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-saved .intercom-phone-number-input-submit-button,.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-saving .intercom-phone-number-input-placeholder,.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-saving .intercom-phone-number-input-submit-button{visibility:hidden}.intercom-namespace .intercom-phone-number-input input::-webkit-input-placeholder{color:#737376}.intercom-namespace .intercom-phone-number-input input::-moz-placeholder{color:#737376}.intercom-namespace .intercom-phone-number-input input:-ms-input-placeholder{color:#737376}.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-invalid{background-color:#fef0f0;color:#d22628;border-color:#fbdbdb}.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-saved input,.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-saving input{border:1px solid #e1e1e1}.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-notification-channel.intercom-phone-number-input-submitted,.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-notification-channel.intercom-phone-number-input-submitted input{color:#000;border-color:#fff;padding:0;height:20px;-webkit-transition:color 400ms 600ms,border 300ms,padding 300ms 600ms,height 400ms 1000ms;transition:color 400ms 600ms,border 300ms,padding 300ms 600ms,height 400ms 1000ms}.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-notification-channel.intercom-phone-number-input-submitted .intercom-phone-number-input-flag,.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-notification-channel.intercom-phone-number-input-submitted .intercom-phone-number-input-submit-button{opacity:0;visibility:hidden;-webkit-transition:opacity 300ms,visibility 0 300ms;transition:opacity 300ms,visibility 0 300ms}.intercom-namespace .intercom-phone-number-input.intercom-phone-number-input-notification-channel.intercom-phone-number-input-submitted .intercom-phone-number-input-success-icon{visibility:hidden}.intercom-namespace .intercom-phone-number-input-placeholder{position:absolute;padding:0 35px;color:#737376;cursor:text}.intercom-namespace .intercom-phone-number-input-flag{position:absolute;left:13px;top:12px}.intercom-namespace .intercom-phone-number-input-submit-button,.intercom-namespace .intercom-phone-number-input-success-icon{position:absolute;top:0;right:0;bottom:0;width:40px;border-top-right-radius:3px;border-bottom-right-radius:3px;background-position:center}.intercom-namespace .intercom-phone-number-input-submit-button{cursor:pointer;background-color:#24b1ed;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.15);box-shadow:0 1px 2px 0 rgba(0,0,0,.15)}.intercom-namespace .intercom-phone-number-input-success-icon{background-image:url(https://js.intercomcdn.com/images/green-check-icon.9828d61b.png);background-size:14px 12px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-phone-number-input-success-icon{background-image:url(https://js.intercomcdn.com/images/green-check-icon@2x.65fa2c1a.png)}}.intercom-namespace .intercom-pre-conversation-search{position:absolute;left:0;right:0;margin:16px 20px 0;padding:16px 20px;border-radius:5px;background-color:#fff;color:#000;text-align:center;-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-pre-conversation-search-input{margin-top:10px;position:relative}.intercom-namespace .intercom-pre-conversation-search-input input{width:100%;height:38px;padding:7px 35px 7px 12px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;border:1px solid #e1e1e1;border-radius:4px}.intercom-namespace .intercom-pre-conversation-search-input input::-webkit-input-placeholder{color:#737376}.intercom-namespace .intercom-pre-conversation-search-input input::-moz-placeholder{color:#737376}.intercom-namespace .intercom-pre-conversation-search-input input:-ms-input-placeholder{color:#737376}.intercom-namespace .intercom-pre-conversation-search-input input:focus{border:1px solid rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-pre-conversation-search-button{position:absolute;top:0;right:0;bottom:0;width:35px;border-top-right-radius:3px;border-bottom-right-radius:3px;background-position:center;background-image:url(https://js.intercomcdn.com/images/search.c60d2222.svg);background-size:16px auto;background-repeat:no-repeat;cursor:pointer;background-color:#24b1ed;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.15);box-shadow:0 1px 2px 0 rgba(0,0,0,.15)}.intercom-namespace .intercom-pre-conversation-search-button:hover{opacity:.9;-webkit-transition:opacity 150ms;transition:opacity 150ms}.intercom-namespace .intercom-messenger-card-body-container{height:100%}.intercom-namespace .intercom-messenger-card-body{padding:26px 24px 24px;line-height:1.5}.intercom-namespace .intercom-messenger-card-component:last-child{margin-bottom:0}.intercom-namespace .intercom-messenger-card-wrapper{background-color:#fff;border-radius:3px;font-size:14px;line-height:1.5;color:#000;position:relative;-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-messenger-card-wrapper-light{-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1)}.intercom-namespace .intercom-messenger-card-wrapper-fetching{overflow:hidden}.intercom-namespace .intercom-home-screen{z-index:2147483002;position:fixed;top:0;left:0;right:0;bottom:0;overflow-y:auto}.intercom-namespace .intercom-home-screen-body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 16px;min-height:100%}.intercom-namespace .intercom-home-screen-body.intercom-home-screen-body-improved-link{padding-bottom:55px}.intercom-namespace .intercom-home-screen-cards-container{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}.intercom-namespace .intercom-home-screen-cards-container.intercom-home-screen-cards-container-increased-visibility{padding-bottom:76px}.intercom-namespace .intercom-home-screen .intercom-messenger-card-wrapper{margin-bottom:16px}.intercom-namespace .intercom-home-screen .intercom-link{opacity:1}.intercom-namespace .intercom-home-screen-card-content{padding:26px 24px 24px;line-height:1.5}.intercom-namespace .intercom-home-screen-conversations .intercom-conversation-summary{padding:16px 24px;margin:0 -24px}.intercom-namespace .intercom-home-screen-conversations .intercom-conversation-summary-meta{margin-bottom:0}.intercom-namespace .intercom-home-screen-conversations .intercom-conversation-summary-avatar{left:15px}.intercom-namespace .intercom-home-screen-conversations .intercom-conversation-summary-unread-dot{left:9px}.intercom-namespace .intercom-home-screen-conversation-body .intercom-home-screen-conversations-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-home-screen-conversation-body .intercom-home-screen-conversations-title .intercom-messenger-card-text{-webkit-box-flex:1;-ms-flex:1;flex:1}.intercom-namespace .intercom-home-screen-conversation-body .intercom-home-screen-conversations-title a{color:#24b1ed}.intercom-namespace .intercom-home-screen-conversation-body.intercom-home-screen-conversation-body-light .intercom-home-screen-conversations-title a{color:#000;text-decoration:underline}.intercom-namespace .intercom-home-screen-conversations-footer{padding:16px 0 0}.intercom-namespace .intercom-out-of-office-icon{width:8px;height:10px;padding-right:6px;padding-bottom:10px}.intercom-namespace .intercom-home-screen-start-conversation-card-message{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-empty-screen{position:absolute;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.intercom-namespace .intercom-empty-screen .intercom-close-button{text-align:center;border-radius:9999px;border:2px solid;-webkit-box-sizing:border-box;box-sizing:border-box;color:#737376;position:relative;display:block;font-weight:700;padding:0 24px;min-height:40px;margin:0 auto;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none}.intercom-namespace .intercom-empty-screen .intercom-messenger-card-text{text-align:center;margin-bottom:0}.intercom-namespace .intercom-empty-screen .intercom-messenger-card-text-muted{margin-bottom:8px}.intercom-namespace .intercom-messenger-empty-screen .intercom-link-container{-webkit-box-shadow:none;box-shadow:none}.intercom-namespace .new-conversation-button{height:40px;color:rgb(255, 255, 255);font-size:13px;line-height:40px;pointer-events:auto;cursor:pointer;border-radius:40px;text-align:center;-webkit-transition:all 120ms;transition:all 120ms;padding:0 24px}.intercom-namespace .new-conversation-button span,.intercom-namespace .new-message-button span{padding-left:10px;white-space:nowrap;font-weight:600}.intercom-namespace .new-conversation-button .intercom-new-conversation-icon{width:15px;height:16px}.intercom-namespace .new-conversation-button .intercom-new-conversation-icon path,.intercom-namespace .new-conversation-button__secondary.new-conversation-button-light .intercom-new-conversation-icon path,.intercom-namespace .new-message-button .intercom-new-message-icon path{fill:rgb(255, 255, 255)}.intercom-namespace .new-conversation-button-contents{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .new-conversation-button__default{background-color:rgb(36, 177, 237);color:rgb(255, 255, 255);-webkit-transition:color background-color .3s;transition:color background-color .3s}.intercom-namespace .new-conversation-button__default:hover,.intercom-namespace .new-conversation-button__secondary.new-conversation-button-light:hover{background-color:rgb(17, 149, 205)}.intercom-namespace .new-conversation-button__default:active,.intercom-namespace .new-conversation-button__secondary.new-conversation-button-light:active{background-color:rgb(13, 115, 158)}.intercom-namespace .new-conversation-button__secondary.new-conversation-button-light{background-color:rgb(36, 177, 237);color:rgb(255, 255, 255);-webkit-transition:color background-color .3s;transition:color background-color .3s;border:1px solid #d2d7db}.intercom-namespace .new-conversation-button__secondary:not(.new-conversation-button-light){background-color:#fff;color:rgb(36, 177, 237);border:1px solid rgb(36, 177, 237);-webkit-transition:color background-color .3s;transition:color background-color .3s}.intercom-namespace .new-conversation-button__secondary:not(.new-conversation-button-light) .intercom-new-conversation-icon path{fill:rgb(36, 177, 237)}.intercom-namespace .new-conversation-button__secondary:not(.new-conversation-button-light):hover{color:rgb(17, 149, 205);border:1px solid rgb(17, 149, 205)}.intercom-namespace .new-conversation-button__secondary:not(.new-conversation-button-light):hover .intercom-new-conversation-icon path{fill:rgb(17, 149, 205)}.intercom-namespace .new-conversation-button__secondary:not(.new-conversation-button-light):active{color:rgb(13, 115, 158);border:1px solid rgb(13, 115, 158)}.intercom-namespace .new-conversation-button__secondary:not(.new-conversation-button-light):active .intercom-new-conversation-icon path{fill:rgb(13, 115, 158)}.intercom-namespace .new-conversation-button__fixed,.intercom-namespace .new-conversation-button__fixed:active{-webkit-box-shadow:0 4px 12px rgba(0,0,0,.1);box-shadow:0 4px 12px rgba(0,0,0,.1)}.intercom-namespace .new-conversation-button__fixed{background-color:#24b1ed;position:absolute;bottom:32px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.intercom-namespace .new-conversation-button__fixed:hover{-webkit-box-shadow:0 8px 24px rgba(0,0,0,.2);box-shadow:0 8px 24px rgba(0,0,0,.2)}.intercom-namespace .new-conversation-button__fixed:active{-webkit-transform:translateX(-50%) translateY(2px);transform:translateX(-50%) translateY(2px)}.intercom-namespace .new-message-button{height:40px;color:rgb(255, 255, 255);font-size:13px;line-height:40px;pointer-events:auto;cursor:pointer;border-radius:40px;text-align:center;-webkit-transition:all 120ms;transition:all 120ms;padding:0 24px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .new-message-button .intercom-new-message-icon{width:16px;height:12px}.intercom-namespace .new-message-button__default{background-color:rgb(36, 177, 237);color:rgb(255, 255, 255);-webkit-transition:color background-color .3s;transition:color background-color .3s}.intercom-namespace .new-message-button__default:hover,.intercom-namespace .new-message-button__secondary.new-message-button-light:hover{background-color:rgb(17, 149, 205)}.intercom-namespace .new-message-button__default:active,.intercom-namespace .new-message-button__secondary.new-message-button-light:active{background-color:rgb(13, 115, 158)}.intercom-namespace .new-message-button__secondary.new-message-button-light{background-color:rgb(36, 177, 237);color:rgb(255, 255, 255);-webkit-transition:color background-color .3s;transition:color background-color .3s}.intercom-namespace .new-message-button__secondary.new-message-button-light .intercom-new-message-icon path{fill:rgb(255, 255, 255)}.intercom-namespace .new-message-button__secondary:not(.new-message-button-light){background-color:#fff;color:rgb(36, 177, 237);border:1px solid rgb(36, 177, 237);-webkit-transition:color background-color .3s;transition:color background-color .3s}.intercom-namespace .new-message-button__secondary:not(.new-message-button-light) .intercom-new-message-icon path{fill:rgb(36, 177, 237)}.intercom-namespace .new-message-button__secondary:not(.new-message-button-light):hover{color:rgb(17, 149, 205);border:1px solid rgb(17, 149, 205)}.intercom-namespace .new-message-button__secondary:not(.new-message-button-light):hover .intercom-new-message-icon path{fill:rgb(17, 149, 205)}.intercom-namespace .new-message-button__secondary:not(.new-message-button-light):active{color:rgb(13, 115, 158);border:1px solid rgb(13, 115, 158)}.intercom-namespace .new-message-button__secondary:not(.new-message-button-light):active .intercom-new-message-icon path{fill:rgb(13, 115, 158)}.intercom-namespace .new-message-button__fixed,.intercom-namespace .new-message-button__fixed:active{-webkit-box-shadow:0 4px 12px rgba(0,0,0,.1);box-shadow:0 4px 12px rgba(0,0,0,.1)}.intercom-namespace .new-message-button__fixed{background-color:#24b1ed;position:absolute;bottom:32px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.intercom-namespace .new-message-button__fixed:hover{-webkit-box-shadow:0 8px 24px rgba(0,0,0,.2);box-shadow:0 8px 24px rgba(0,0,0,.2)}.intercom-namespace .new-message-button__fixed:active{-webkit-transform:translateX(-50%) translateY(2px);transform:translateX(-50%) translateY(2px)}.intercom-namespace .intercom-home-screen-conversation-card .new-message-button{margin-right:8px}.intercom-namespace .intercom-messenger-body{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#fff;-webkit-box-shadow:inset 0 21px 4px -20px rgba(0,0,0,.2);box-shadow:inset 0 21px 4px -20px rgba(0,0,0,.2)}.intercom-namespace .intercom-messenger-body-view{position:absolute;top:0;left:0;right:0;bottom:0}.intercom-namespace .intercom-messenger-header{position:relative;min-height:75px;background:rgb(36, 177, 237);background:linear-gradient(135deg,rgb(36, 177, 237) 0%,rgb(13, 115, 158) 100%);color:#fff;-webkit-transition:height 160ms ease-out;transition:height 160ms ease-out}.intercom-namespace .intercom-messenger-header-scrolling{-webkit-transition:height 0ms;transition:height 0ms}.intercom-namespace .intercom-messenger-header-background-1::before,.intercom-namespace .intercom-messenger-header-background-2::before{content:"";opacity:.35;top:0;left:0;bottom:0;right:0;background-image:url(https://js.intercomcdn.com/images/background-1.9cde5385.png);position:absolute;background-size:432.5px 428px,cover;pointer-events:none}.intercom-namespace .intercom-messenger-header-background-2::before{background-image:url(https://js.intercomcdn.com/images/background-2.ce3907be.png)}.intercom-namespace .intercom-messenger-header-background-3::before,.intercom-namespace .intercom-messenger-header-background-4::before{content:"";opacity:.35;top:0;left:0;bottom:0;right:0;background-image:url(https://js.intercomcdn.com/images/background-3.60608886.png);position:absolute;background-size:419px 181px,cover;pointer-events:none}.intercom-namespace .intercom-messenger-header-background-4::before{background-image:url(https://js.intercomcdn.com/images/background-4.122f4c2f.png);background-size:325px 323.5px,cover}.intercom-namespace .intercom-messenger-header-background-5::before,.intercom-namespace .intercom-messenger-header-background-6::before{content:"";opacity:.35;top:0;left:0;bottom:0;right:0;background-image:url(https://js.intercomcdn.com/images/background-5.dc164d3a.png);position:absolute;background-size:352px 390px,cover;pointer-events:none}.intercom-namespace .intercom-messenger-header-background-6::before{background-image:url(https://js.intercomcdn.com/images/background-6.411a7002.png);background-size:196.5px 225px,cover}.intercom-namespace .intercom-messenger-header-background-7::before,.intercom-namespace .intercom-messenger-header-background-8::before{content:"";opacity:.35;top:0;left:0;bottom:0;right:0;background-image:url(https://js.intercomcdn.com/images/background-7.390b24b1.png);position:absolute;background-size:69px 60px,cover;pointer-events:none}.intercom-namespace .intercom-messenger-header-background-8::before{background-image:url(https://js.intercomcdn.com/images/background-8.12db1191.png);background-size:832px 439px,cover}.intercom-namespace .intercom-messenger-header-background-10::before,.intercom-namespace .intercom-messenger-header-background-9::before{content:"";opacity:.35;top:0;left:0;bottom:0;right:0;background-image:url(https://js.intercomcdn.com/images/background-9.2b0eab6b.png);position:absolute;background-size:378px 378px,cover;pointer-events:none}.intercom-namespace .intercom-messenger-header-background-10::before{background-image:url(https://js.intercomcdn.com/images/background-10.5cdf3998.png);background-size:376px 376px,cover}.intercom-namespace .intercom-messenger-header-background-11::before,.intercom-namespace .intercom-messenger-header-background-12::before,.intercom-namespace .intercom-messenger-header-background-13::before{content:"";opacity:.35;top:0;left:0;bottom:0;right:0;background-image:url(https://js.intercomcdn.com/images/background-11.0f55b3a6.png);position:absolute;background-size:378px 378px,cover;pointer-events:none}.intercom-namespace .intercom-messenger-header-background-12::before,.intercom-namespace .intercom-messenger-header-background-13::before{background-image:url(https://js.intercomcdn.com/images/background-12.f1fbb874.png)}.intercom-namespace .intercom-messenger-header-background-13::before{background-image:url(https://js.intercomcdn.com/images/background-13.361d6364.png)}.intercom-namespace .intercom-messenger-header-background-14::before,.intercom-namespace .intercom-messenger-header-background-15::before,.intercom-namespace .intercom-messenger-header-background-16::before{content:"";opacity:.35;top:0;left:0;bottom:0;right:0;background-image:url(https://js.intercomcdn.com/images/background-14.30924b67.png);position:absolute;background-size:378px 378px,cover;pointer-events:none}.intercom-namespace .intercom-messenger-header-background-15::before,.intercom-namespace .intercom-messenger-header-background-16::before{background-image:url(https://js.intercomcdn.com/images/background-15.248360ae.png)}.intercom-namespace .intercom-messenger-header-background-16::before{background-image:url(https://js.intercomcdn.com/images/background-16.8e2e0b27.png)}.intercom-namespace .intercom-home-screen-header{position:absolute;top:0;left:0;right:0;padding:24px 40px 87px;-webkit-box-sizing:border-box;box-sizing:border-box}.intercom-namespace .intercom-home-screen-header-close-button-enabled{padding-right:51px}.intercom-namespace .intercom-home-screen-header .intercom-messenger-header-buttons-close-button-body{-webkit-transition:background-color ease 200ms;transition:background-color ease 200ms}.intercom-namespace .intercom-home-screen-header-greeting{color:rgb(255, 255, 255);display:block;line-height:1.5em}.intercom-namespace .intercom-home-screen-header-intro{color:rgba(255, 255, 255, 0.7);display:block;font-size:1em;line-height:1.5em;overflow-wrap:break-word;word-wrap:break-word}.intercom-namespace .intercom-home-screen-header-logo{height:32px;padding-bottom:16px}.intercom-namespace .intercom-home-screen-header-logo img{max-width:100%;max-height:100%;margin:auto 0;display:block}.intercom-namespace .intercom-home-screen-conversation-card{margin-bottom:17px;background-color:#fff;border-radius:3px;font-size:14px;line-height:1.4;color:#000;overflow:hidden;position:relative;-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-home-screen-conversation-card-body{position:absolute}.intercom-namespace .intercom-home-screen-card-spinner-container{height:159px}.intercom-namespace .intercom-home-screen-card-spinner-conversation{height:40px}.intercom-namespace .intercom-home-screen-start-conversation-card-content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:-10px}.intercom-namespace .intercom-home-screen-start-conversation-card-content .new-conversation-button{margin-right:8px}.intercom-namespace .intercom-home-screen-start-conversation-card-content a{white-space:nowrap}.intercom-namespace .intercom-home-screen-start-conversation-card-content>*{margin-top:10px}.intercom-namespace .intercom-messenger-alerts,.intercom-namespace .intercom-messenger-card-error{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.intercom-namespace .intercom-messenger-alerts{z-index:2147483004;position:absolute;top:0;left:0;right:0;margin-left:auto;margin-right:auto;width:calc(267px - 16px - 16px);background-color:#fff;border:1px solid #d22628;-webkit-box-shadow:0 2px 8px 0 rgba(0,0,0,.15);box-shadow:0 2px 8px 0 rgba(0,0,0,.15);border-radius:8px;font-size:14px;line-height:1.5;height:21px;padding:8px 16px;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#d22628}.intercom-namespace .intercom-messenger-alerts svg{width:18px;height:17px;stroke:#d22628;margin-right:8px;padding-bottom:2px}.intercom-namespace .intercom-messenger-alerts span{line-height:1.5}.intercom-namespace .intercom-messenger-alerts .try-again,.intercom-namespace .intercom-messenger-card-error .try-again{text-decoration:underline}.intercom-namespace .intercom-messenger-alerts .try-again:hover,.intercom-namespace .intercom-messenger-card-error .try-again:hover{cursor:pointer}.intercom-namespace .intercom-messenger-card-error{padding-top:2px;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#737376}.intercom-namespace .intercom-messenger-card-error svg{width:18px;height:17px;stroke:#737376;margin-bottom:5px}.intercom-namespace .intercom-messenger-card-error-inline{display:block;font-size:13px;text-align:center}.intercom-namespace .intercom-messenger-card-error-inline .intercom-messenger-card-error-copy{padding:0 5px}.intercom-namespace .intercom-messenger-card-error-inline svg{margin:0;position:relative;top:4px}.intercom-namespace .intercom-fit-text,.intercom-namespace .intercom-fit-text>span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.intercom-namespace .intercom-fit-text>span>span{white-space:pre}.intercom-namespace .intercom-see-all{position:relative;white-space:nowrap}.intercom-namespace .intercom-see-all-more{position:absolute;background-color:#d22628;border-radius:50%;width:6px;height:6px;top:6px}.intercom-namespace .intercom-see-all-link-padded{padding-left:14px}.intercom-namespace .intercom-upfront-email-composer{background-color:#fff;padding:0 25px;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.intercom-namespace .intercom-upfront-email-composer .intercom-upfront-email-actions{position:absolute;bottom:0;right:28px}.intercom-namespace .intercom-upfront-email-composer .intercom-upfront-email-composer-emoji-popover{bottom:55px}.intercom-namespace .intercom-upfront-email-composer .intercom-upfront-email-composer-emoji-popover .intercom-composer-popover-input{padding-left:25px}.intercom-namespace .intercom-upfront-email-composer .intercom-upfront-email-composer-emoji-popover .intercom-composer-popover-caret{right:40px}.intercom-namespace .intercom-upfront-email-composer .intercom-composer-send-button-disabled{cursor:auto}.intercom-namespace .intercom-upfront-email-composer .intercom-composer-send-button-disabled svg{opacity:.65;cursor:auto}.intercom-namespace .intercom-upfront-email-composer .intercom-composer-send-button-disabled svg path{cursor:auto;fill:#737376}.intercom-namespace .intercom-upfront-email-composer .intercom-composer-send-button-disabled:hover{opacity:.8}.intercom-namespace .intercom-upfront-email-composer .intercom-composer-send-button-not-readable svg path{fill:#737376}.intercom-namespace .intercom-upfront-email-composer .intercom-composer-send-button-not-readable:hover{opacity:.65}.intercom-namespace .intercom-upfront-email-composer .email-error-input{border-bottom:1px solid #fd3a57;margin-bottom:8px}.intercom-namespace .intercom-upfront-email-composer input,.intercom-namespace .intercom-upfront-email-composer textarea{width:100%;padding:20px 0}.intercom-namespace .intercom-upfront-email-composer input{border-bottom:1px solid #e1e1e1;padding-bottom:16px}.intercom-namespace .intercom-upfront-email-composer textarea{line-height:1.33;overflow-x:hidden;overflow-y:scroll;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0 -25px 50px 0;width:calc(100% + 25px)}.intercom-namespace .intercom-upfront-email-composer input::-webkit-input-placeholder,.intercom-namespace .intercom-upfront-email-composer textarea::-webkit-input-placeholder{color:#737376}.intercom-namespace .intercom-messenger-card-textarea textarea:-ms-input-placeholder,.intercom-namespace .intercom-upfront-email-composer input::-ms-input-placeholder,.intercom-namespace .intercom-upfront-email-composer textarea::-ms-input-placeholder{color:#737376}.intercom-namespace .intercom-upfront-email-composer input::placeholder,.intercom-namespace .intercom-upfront-email-composer textarea::placeholder{color:#737376}.intercom-namespace .intercom-small-state-upfront-email-composer{-webkit-box-shadow:rgba(0,0,0,.1) -1px -4px 20px 3px;box-shadow:rgba(0,0,0,.1) -1px -4px 20px 3px;min-height:200px;height:200px!important;position:absolute;left:0;right:0;bottom:0}.intercom-namespace .intercom-small-state-upfront-email-composer textarea{height:70px}.intercom-namespace .intercom-download-transcript-button{z-index:2147483003;position:absolute;width:51px;height:51px;top:0;right:0;background-position:center;margin:12px 8px 12px 2px;cursor:pointer}.intercom-namespace .intercom-download-transcript-button *{cursor:pointer}.intercom-namespace .intercom-download-transcript-button-body{width:51px;height:51px;margin:0 auto;border-radius:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.intercom-namespace .intercom-download-transcript-button-body:hover{background-color:rgba(0,0,0,.1)}.intercom-namespace .intercom-download-transcript-button-secondary{right:51px}.intercom-namespace .intercom-download-transcript-button-appear{opacity:0}.intercom-namespace .intercom-download-transcript-button-appear-active{opacity:1;-webkit-transition:opacity 500ms ease-in;transition:opacity 500ms ease-in}.intercom-namespace .intercom-download-transcript-button-tooltip{position:absolute;top:100%;right:0;background:rgba(0,0,0,.35);padding:4px;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;text-align:center;-webkit-transition:opacity 100ms;transition:opacity 100ms}.intercom-namespace .intercom-download-transcript-button-tooltip-enter{opacity:0}.intercom-namespace .intercom-download-transcript-button-tooltip-enter-active{opacity:1}.intercom-namespace .intercom-download-transcript-button-tooltip-exit{opacity:0}.intercom-namespace .intercom-download-transcript-button-tooltip span{white-space:nowrap}.intercom-namespace .intercom-download-transcript-button-tooltip:after{bottom:100%;right:20.5px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:transparent;border-bottom-color:rgba(0,0,0,.35);border-width:5px}.intercom-namespace .intercom-reply-to-button{padding:10px;border:1px solid rgb(36, 177, 237);border-radius:40px;margin:20px;width:240px;text-align:center;font-size:14px;color:rgb(36, 177, 237);background-color:rgb(255, 255, 255)}.intercom-namespace .intercom-reply-to-button .intercom-new-message-icon path,.intercom-namespace .intercom-video-control-button svg path,.intercom-namespace .intercom-video-control-button svg rect{fill:rgb(36, 177, 237)}.intercom-namespace .intercom-reply-to-button .intercom-reply-message-icon{position:relative;top:2px;right:8px}.intercom-namespace .intercom-borderless-body .intercom-reply-to-button{margin:8px 0 0 42px;width:81%}.intercom-namespace .intercom-video-player-captions{padding:25px 16px 16px;color:#fff;font-size:14px;line-height:18px;font-weight:600;z-index:2;pointer-events:none;text-shadow:1px 1px rgba(0,0,0,.6)}.intercom-namespace .intercom-video-player-controls{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:13px;text-shadow:0 .5px 1px rgba(0,0,0,.25);opacity:0;-webkit-transition:opacity 300ms cubic-bezier(.165,.84,.44,1);transition:opacity 300ms cubic-bezier(.165,.84,.44,1)}.intercom-namespace .intercom-video-player-controls .video-pause-icon,.intercom-namespace .intercom-video-player-controls .video-play-icon{width:24px;margin-left:-6px;fill:#fff;cursor:pointer}.intercom-namespace .intercom-video-player-container video,.intercom-namespace .intercom-video-player-controls .intercom-video-player-scrubber{-webkit-box-flex:1;-ms-flex:1;flex:1}.intercom-namespace .intercom-video-player-controls .intercom-video-control-audio-muted,.intercom-namespace .intercom-video-player-controls .intercom-video-control-audio-unmuted{position:static;right:auto;bottom:auto;margin-left:8px;fill:#fff;-webkit-transform:scale(.9);transform:scale(.9);width:24px}.intercom-namespace .intercom-video-player-controls .intercom-video-player-controls-time-remaining{width:35px}.intercom-namespace .intercom-video-player-container .intercom-video-player-container-has-captions .intercom-video-player-controls{padding-top:0}.intercom-namespace .intercom-video-player-container .intercom-video-player-controls{height:16px;padding:12px 12px 12px 16px}.intercom-namespace input[type=range].intercom-video-player-scrubber{-webkit-appearance:none;background:0 0;margin:0 8px}.intercom-namespace input[type=range].intercom-video-player-scrubber::-moz-range-track{background:rgba(255,255,255,.4);height:4px;border-radius:10px}.intercom-namespace input[type=range].intercom-video-player-scrubber::-ms-track{background:rgba(255,255,255,.4);height:4px;border-radius:10px}.intercom-namespace input[type=range].intercom-video-player-scrubber::-webkit-slider-runnable-track{-webkit-appearance:none;background:rgba(255,255,255,.4);height:4px;border-radius:10px}.intercom-namespace input[type=range].intercom-video-player-scrubber::-webkit-slider-thumb{-webkit-appearance:none;border:0;height:12px;width:12px;border-radius:50%;background:#fff;margin-top:-4px;cursor:pointer}.intercom-namespace input[type=range].intercom-video-player-scrubber::-moz-range-thumb{border:0;height:12px;width:12px;border-radius:50%;background:#fff;margin-top:-4px;cursor:pointer}.intercom-namespace input[type=range].intercom-video-player-scrubber::-ms-thumb{border:0;height:12px;width:12px;border-radius:50%;background:#fff;margin-top:-4px;cursor:pointer}.intercom-namespace.intercom-tab-navigation-enabled :focus{outline-offset:0;outline-style:auto;outline-width:5px}.intercom-namespace.intercom-tab-navigation-enabled .intercom-messenger:focus:after{outline-style:auto;outline-width:5px}.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=default] .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=default] :focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=default] .intercom-messenger-header .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=default] .intercom-messenger-header :focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=default] .intercom-messenger-sheet-header .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=default] .intercom-messenger-sheet-header :focus{outline-color:#3b99fc}.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=default] .intercom-launcher:focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=default] .intercom-messenger-header .intercom-launcher:focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=default] .intercom-messenger-sheet-header .intercom-launcher:focus{outline:0;-webkit-box-shadow:inset 0 0 0 5px #3b99fc;box-shadow:inset 0 0 0 5px #3b99fc}.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=dark] .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=dark] :focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=dark] .intercom-messenger-header .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=dark] .intercom-messenger-header :focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=dark] .intercom-messenger-sheet-header .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=dark] .intercom-messenger-sheet-header :focus{outline-color:#38373e}.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=dark] .intercom-launcher:focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=dark] .intercom-messenger-header .intercom-launcher:focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=dark] .intercom-messenger-sheet-header .intercom-launcher:focus{outline:0;-webkit-box-shadow:inset 0 0 0 5px #38373e;box-shadow:inset 0 0 0 5px #38373e}.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=light] .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=light] :focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=light] .intercom-messenger-header .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=light] .intercom-messenger-header :focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=light] .intercom-messenger-sheet-header .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=light] .intercom-messenger-sheet-header :focus{outline-color:#cdcecd}.intercom-namespace.intercom-tab-navigation-enabled[data-accessibility-theme=light] .intercom-launcher:focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=light] .intercom-messenger-header .intercom-launcher:focus,.intercom-namespace.intercom-tab-navigation-enabled[data-secondary-accessibility-theme=light] .intercom-messenger-sheet-header .intercom-launcher:focus{outline:0;-webkit-box-shadow:inset 0 0 0 5px #cdcecd;box-shadow:inset 0 0 0 5px #cdcecd}.intercom-namespace.intercom-tab-navigation-enabled .intercom-borderless-dismiss-button,.intercom-namespace.intercom-tab-navigation-enabled .intercom-borderless-view-more-button,.intercom-namespace.intercom-tab-navigation-enabled .intercom-notifications-dismiss-button{opacity:1}.intercom-namespace.intercom-tab-navigation-enabled .intercom-borderless:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-composer textarea:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-conversation-body-parts:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-conversation-header:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-conversation-summary:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-image img:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-messenger-sheet-proxy,.intercom-namespace.intercom-tab-navigation-enabled .intercom-messenger-sheet-proxy-frame,.intercom-namespace.intercom-tab-navigation-enabled .intercom-messenger:focus:after,.intercom-namespace.intercom-tab-navigation-enabled .intercom-modal-inner:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-modal-overlay:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-note-close:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-post-close:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-reaction-selected:focus,.intercom-namespace.intercom-tab-navigation-enabled .intercom-scrollable{outline-offset:-5px}.intercom-namespace.intercom-tab-navigation-enabled .intercom-launcher-discovery:focus{outline-offset:-7px}.intercom-namespace.intercom-tab-navigation-enabled .intercom-messenger:focus{outline:0}.intercom-namespace.intercom-tab-navigation-enabled .intercom-messenger:focus:after{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:2147483003}.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-launcher{background:#000;border:1px solid #fff}.intercom-namespace.intercom-accessibility-contrast-mode-enabled [role=button],.intercom-namespace.intercom-accessibility-contrast-mode-enabled button{border:1px solid #fff;background:#000;color:#fff}.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-chat-card,.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-comment,.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-composer-borderless,.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-home-screen-card-content,.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-link-card-content-container,.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-messenger,.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-messenger-card-wrapper,.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-post,.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-submittable-input-submit-button{border:1px solid #fff}.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-post-card.intercom-post-card-truncated:after{display:none}.intercom-namespace.intercom-accessibility-contrast-mode-enabled .intercom-messenger-header{background:#000}@media (-ms-high-contrast:active){.intercom-namespace .intercom-launcher,.intercom-namespace [role=button],.intercom-namespace button{background:#000;border:1px solid #fff}.intercom-namespace [role=button],.intercom-namespace button{color:#fff}.intercom-namespace .intercom-chat-card,.intercom-namespace .intercom-comment,.intercom-namespace .intercom-composer-borderless,.intercom-namespace .intercom-home-screen-card-content,.intercom-namespace .intercom-link-card-content-container,.intercom-namespace .intercom-messenger,.intercom-namespace .intercom-messenger-card-wrapper,.intercom-namespace .intercom-post,.intercom-namespace .intercom-submittable-input-submit-button{border:1px solid #fff}.intercom-namespace .intercom-post-card.intercom-post-card-truncated:after{display:none}.intercom-namespace .intercom-messenger-header{background:#000}}.intercom-namespace .intercom-pointer{width:272px;font-size:13px;margin:-8px;font-family:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;color:#000}.intercom-namespace .intercom-pointer .intercom-reaction-picker{height:55px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border-top:1px solid #e6e6e6}.intercom-namespace .intercom-pointer .intercom-reaction-picker .intercom-reaction{width:45px;height:45px;font-size:24px}.intercom-namespace .intercom-pointer .intercom-authored-container-top{padding:16px 24px}.intercom-namespace .intercom-pointer-scrolled .intercom-authored-container-top{position:relative;z-index:2147483003;-webkit-box-shadow:0 0 9px 0 rgba(0,0,0,.3);box-shadow:0 0 9px 0 rgba(0,0,0,.3)}.intercom-namespace .intercom-pointer-body>.intercom-scrollable{max-height:320px;border-radius:0 0 8px 8px}.intercom-namespace .intercom-pointer-body-full-width{width:100%}.intercom-namespace .intercom-pointer-close{z-index:2147483003;position:absolute;cursor:pointer;top:0;right:-5px;width:72px;height:64px}.intercom-namespace .intercom-pointer-close,.intercom-namespace .intercom-pointer-close:hover{background-position:center;background-image:url(https://js.intercomcdn.com/images/close.1359f860.png);background-size:12px 12px;background-repeat:no-repeat}@media (min--moz-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.3),(min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){.intercom-namespace .intercom-pointer-close,.intercom-namespace .intercom-pointer-close:hover{background-image:url(https://js.intercomcdn.com/images/close@2x.570e24e7.png)}}.intercom-namespace .intercom-pointer-footer{position:absolute;bottom:-20px;height:55px;left:0;right:0;opacity:0;visibility:hidden}.intercom-namespace .intercom-pointer-footer-visible{opacity:1;bottom:0;-webkit-transition:opacity .16s,bottom .28s;transition:opacity .16s,bottom .28s;visibility:visible}.intercom-namespace .intercom-pointer-composer{border-top:1px solid #e6e6e6;width:100%;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16.5px 20px;color:#737376;font-size:14px;border-radius:0 0 8px 8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}.intercom-namespace .intercom-pointer-composer span{cursor:pointer}.intercom-namespace .intercom-pointer-composer .intercom-chat-bubble-icon{fill:#737376;margin-bottom:-3px;margin-right:8px}.intercom-namespace .intercom-pointer-body .intercom-block-messenger-card{width:auto;margin:17px}.intercom-namespace .intercom-pointer-body .intercom-messenger-card-wrapper{-webkit-box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);border:1px solid #eee;border-top:none}.intercom-namespace .intercom-pointer-body{padding:0 24px 24px}.intercom-namespace .intercom-pointer .intercom-scrollable .intercom-blocks{margin-bottom:30px;padding-bottom:24px}.intercom-namespace .intercom-pointer .intercom-scrollable .intercom-blocks .intercom-block-paragraph{margin-left:0;margin-right:0}.intercom-namespace .intercom-replies-disabled .intercom-scrollable .intercom-blocks{padding-bottom:0;margin-bottom:0}.intercom-namespace .intercom-pointer-inbox .intercom-pointer-body{padding-bottom:0}.intercom-namespace .intercom-pointer-footer-text-center{text-align:center;background:#fff}.intercom-namespace .intercom-pointer-reply-to-body .intercom-scrollable .intercom-blocks{padding-bottom:30px}.intercom-namespace .intercom-pointer-inbox{border:1px solid #eee;-webkit-box-shadow:none;box-shadow:none}.intercom-namespace .intercom-pointer-inbox .intercom-positioner-arrow{-webkit-box-shadow:-1px 1px 0 #eee;box-shadow:-1px 1px 0 #eee;margin-left:25px}.intercom-namespace .intercom-tour-step{z-index:2147483002;font-size:13px;padding:0;margin:-8px;font-family:"intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;color:#000}.intercom-namespace .intercom-tour-step .intercom-author-summary{font-size:14px}.intercom-namespace .intercom-tour-step-pointer{width:272px}.intercom-namespace .intercom-tour-step-pointer .intercom-author-summary-name-from{width:calc(100% - 24px)}.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph{font-size:14px}.intercom-namespace .intercom-tour-step-post .intercom-tour-step-content>.intercom-scrollable{max-height:500px}.intercom-namespace .intercom-tour-step .intercom-authored-container-top{padding:16px 24px}.intercom-namespace .intercom-tour-step-scrolled .intercom-authored-container-top{position:relative;z-index:2147483003;-webkit-box-shadow:0 0 9px 0 rgba(0,0,0,.3);box-shadow:0 0 9px 0 rgba(0,0,0,.3)}.intercom-namespace .intercom-tour-close{z-index:2147483003;cursor:pointer;position:absolute;padding:8px;top:18px;right:16px}.intercom-namespace .intercom-tour-close .intercom-close-icon{width:12px;height:12px}.intercom-namespace .intercom-tour-close .intercom-close-icon>g>g{fill:#adadad}.intercom-namespace .intercom-tour-step-content{padding-top:0}.intercom-namespace .intercom-tour-step-content>.intercom-scrollable{max-height:320px}.intercom-namespace .intercom-tour-step-footer{position:relative;padding:8px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 100%;flex:0 1 100%;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid #eee}.intercom-namespace .intercom-tour-step-button{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;position:relative}.intercom-namespace .intercom-tour-step-button.animating{-webkit-animation:intercom-tour-step-button-pulsate 500ms;animation:intercom-tour-step-button-pulsate 500ms}.intercom-namespace .intercom-tour-step-footer-no-button-padding{padding:25px 0}.intercom-namespace .intercom-tour-step-progress{position:absolute;left:0;right:0;text-align:center;color:#888;font-size:14px}.intercom-namespace .intercom-tour-step-progress .intercom-tour-step-progress-step{display:inline-block;border-radius:5px;border:1px solid #c1c1c1;width:5px;height:5px;margin:0 3px}.intercom-namespace .intercom-tour-step-progress .intercom-tour-step-progress-current-step{background-color:#c1c1c1}.intercom-namespace .intercom-tour-step-button button{font-size:14px;background-color:#24b1ed;color:#fff;font-weight:700;padding:10px 20px;border-radius:4px}.intercom-namespace .intercom-tour-step-content .intercom-block-messenger-card{margin:16px auto;width:230px}.intercom-namespace .intercom-tour-step-content .intercom-messenger-card-wrapper{-webkit-box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:inset 0 2px 0 0 rgba(36, 177, 237, 0.5);border:1px solid #eee;border-top:none}.intercom-namespace .intercom-tour-step-post-content .intercom-block-messenger-card{width:320px;margin:16px auto}.intercom-namespace .intercom-tour-step-video{position:relative}.intercom-namespace .intercom-tour-step-video .intercom-tour-close{right:8px}.intercom-namespace .intercom-tour-step-video .intercom-video-player-captions{padding:20px 20px 16px;font-weight:400}.intercom-namespace .intercom-tour-step-video .intercom-tour-step-video-overlay{opacity:0;position:absolute;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.4);-webkit-transition:opacity 300ms cubic-bezier(.165,.84,.44,1);transition:opacity 300ms cubic-bezier(.165,.84,.44,1)}.intercom-namespace .intercom-tour-step-video .intercom-tour-step-video-overlay .intercom-video-control-audio-muted,.intercom-namespace .intercom-tour-step-video .intercom-tour-step-video-overlay .intercom-video-control-audio-unmuted{right:50%;bottom:50%;margin-right:-22px;margin-bottom:-22px;background-size:44px 44px}.intercom-namespace .intercom-comment-container-user .intercom-comment .intercom-block-attachment-list-icon svg>path,.intercom-namespace .intercom-tour-step-video .intercom-tour-step-video-overlay .intercom-tour-close .intercom-close-icon>g>g{fill:#fff}.intercom-namespace .intercom-tour-step-video.intercom-tour-step-video-complete .intercom-video-player-bottom-overlay,.intercom-namespace .intercom-tour-step-video:hover .intercom-video-player-bottom-overlay{-webkit-transform:translateY(28px);transform:translateY(28px);opacity:0}.intercom-namespace .intercom-tour-step-video.intercom-tour-step-video-complete .intercom-tour-step-video-overlay,.intercom-namespace .intercom-tour-step-video:hover .intercom-tour-step-video-overlay{opacity:1}.intercom-namespace .intercom-tour-step-video.intercom-tour-step-video-complete .intercom-tour-step-video-overlay.intercom-tour-step-video-overlay-hidden,.intercom-namespace .intercom-tour-step-video:hover .intercom-tour-step-video-overlay.intercom-tour-step-video-overlay-hidden{opacity:0}.intercom-namespace .intercom-tour-step-video.intercom-tour-step-video-complete .intercom-tour-step-video-overlay .intercom-tour-step-footer,.intercom-namespace .intercom-tour-step-video:hover .intercom-tour-step-video-overlay .intercom-tour-step-footer{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}.intercom-namespace .intercom-tour-step-video .intercom-tour-step-footer{-webkit-transition:opacity 10ms,-webkit-transform 300ms cubic-bezier(.165,.84,.44,1);transition:transform 300ms cubic-bezier(.165,.84,.44,1),opacity 10ms;transition:transform 300ms cubic-bezier(.165,.84,.44,1),opacity 10ms,-webkit-transform 300ms cubic-bezier(.165,.84,.44,1);-webkit-transform:translateY(100%);transform:translateY(100%);margin-top:4px;border-radius:5px;position:absolute;bottom:0;left:0;right:0;border:0;opacity:0}.intercom-namespace .intercom-tour-step-video .intercom-tour-step-footer .intercom-tour-step-progress{color:#fff;font-size:14px}.intercom-namespace .intercom-tour-step-video .intercom-tour-step-video-mask{-webkit-mask-image:url(https://js.intercomcdn.com/images/video-mask.4f0cea30.svg);mask-image:url(https://js.intercomcdn.com/images/video-mask.4f0cea30.svg)}.intercom-namespace .intercom-tour-step-video.intercom-tour-step-video-placement-left .intercom-tour-step-video-mask,.intercom-namespace .intercom-tour-step-video.intercom-tour-step-video-placement-right .intercom-tour-step-video-mask{-webkit-mask-image:url(https://js.intercomcdn.com/images/video-mask-right.07f09b90.svg);mask-image:url(https://js.intercomcdn.com/images/video-mask-right.07f09b90.svg)}.intercom-namespace .intercom-tour-step-video .timeline-intercom-video-step-mask{-webkit-mask-image:url(https://js.intercomcdn.com/images/video-tours-mask.13acd30e.svg);mask-image:url(https://js.intercomcdn.com/images/video-tours-mask.13acd30e.svg)}.intercom-namespace .intercom-tooltip-wrapper,.intercom-namespace .intercom-tour-step-video .intercom-video-player-controls{position:relative}.intercom-namespace .intercom-tour-step-video-placement-right .intercom-tour-step-video-inner,.intercom-namespace .intercom-tour-step-video-placement-right .intercom-tour-step-video-mask,.intercom-namespace .intercom-tour-step-video-placement-top .intercom-tour-step-video-inner,.intercom-namespace .intercom-tour-step-video-placement-top .intercom-tour-step-video-mask{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.intercom-namespace .intercom-tour-step-video-placement-right .intercom-video-player-bottom-overlay{left:10px;margin-right:10px}.intercom-namespace .intercom-tour-step-video-placement-right .intercom-tour-step-footer{left:10px}.intercom-namespace .intercom-tour-step-video-placement-left .intercom-video-player-bottom-overlay{left:-10px;margin-left:10px}.intercom-namespace .intercom-tour-step-video-placement-left .intercom-tour-step-footer{right:10px}.intercom-namespace .intercom-tour-step-video-placement-top .intercom-video-player-bottom-overlay{bottom:0;padding-bottom:10px}.intercom-namespace .intercom-tour-step-video-placement-top .intercom-tour-step-footer{bottom:10px}.intercom-namespace .intercom-tooltip{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:auto;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;-webkit-transition:opacity 100ms;transition:opacity 100ms}.intercom-namespace .intercom-tooltip-enter{opacity:0}.intercom-namespace .intercom-tooltip-enter-active{opacity:.95}.intercom-namespace .intercom-tooltip-exit,.intercom-namespace .intercom-video-player-container-loading:after{opacity:0}.intercom-namespace .intercom-tooltip-content{background:#8b8b8b;opacity:.95;color:#fff;border-radius:3px;font-size:12px;text-align:center;padding:0 4px}.intercom-namespace .intercom-chat .intercom-block,.intercom-namespace .intercom-chat-card .intercom-block,.intercom-namespace .intercom-chat-card-borderless-single .intercom-block,.intercom-namespace .intercom-comment .intercom-block,.intercom-namespace .intercom-comment-single .intercom-block,.intercom-namespace .intercom-note .intercom-block,.intercom-namespace .intercom-note-card .intercom-block,.intercom-namespace .intercom-pointer .intercom-block,.intercom-namespace .intercom-post .intercom-block,.intercom-namespace .intercom-post-card .intercom-block,.intercom-namespace .intercom-tour-step-pointer .intercom-block,.intercom-namespace .intercom-tour-step-post .intercom-block{overflow-wrap:break-word;word-wrap:break-word;word-break:break-word}.intercom-namespace .intercom-chat .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-chat .intercom-block:last-child,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-chat-card .intercom-block:last-child,.intercom-namespace .intercom-chat-card-borderless-single .intercom-block:last-child,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-comment .intercom-block:last-child,.intercom-namespace .intercom-comment-single .intercom-block:last-child,.intercom-namespace .intercom-note .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-note .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-note .intercom-block:last-child,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-note-card .intercom-block:last-child,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-pointer .intercom-block:last-child,.intercom-namespace .intercom-post .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-post .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-post .intercom-block:last-child,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-post-card .intercom-block:last-child,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-tour-step-pointer .intercom-block:last-child,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li:last-child,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li:last-child,.intercom-namespace .intercom-tour-step-post .intercom-block:last-child{margin-bottom:0}.intercom-namespace .intercom-note .intercom-block-heading,.intercom-namespace .intercom-note-card .intercom-block-heading,.intercom-namespace .intercom-pointer .intercom-block-heading,.intercom-namespace .intercom-post .intercom-block-heading,.intercom-namespace .intercom-post-card .intercom-block-heading,.intercom-namespace .intercom-tour-step-pointer .intercom-block-heading,.intercom-namespace .intercom-tour-step-post .intercom-block-heading{color:#24b1ed;font-weight:400}.intercom-namespace .intercom-post .intercom-block-heading{font-size:33px;line-height:1.24;margin:0 15.27% 30px}.intercom-namespace .intercom-note-card .intercom-block-heading,.intercom-namespace .intercom-post-card .intercom-block-heading{font-size:20px;line-height:1.33;margin:0 0 10px}.intercom-namespace .intercom-note .intercom-block-heading,.intercom-namespace .intercom-pointer .intercom-block-heading,.intercom-namespace .intercom-tour-step-pointer .intercom-block-heading{font-size:24px;line-height:1.33;margin:0 7.31% 14px}.intercom-namespace .intercom-tour-step-post .intercom-block-heading{font-size:24px;line-height:1.33;margin:0 24px 14px}.intercom-namespace .intercom-chat .intercom-block-heading,.intercom-namespace .intercom-chat-card .intercom-block-heading{font-size:14px;color:#000;margin:0 0 10px;line-height:1.33}.intercom-namespace .intercom-block-heading{font-size:22px;font-weight:700;padding-bottom:12px;line-height:1.14}.intercom-namespace .intercom-post .intercom-block-subheading{color:#000;font-size:20px;line-height:1.24;margin:0 15.27% 15px}.intercom-namespace .intercom-post-card .intercom-block-subheading{color:#000;line-height:1.24}.intercom-namespace .intercom-note .intercom-block-subheading{color:#000;font-size:20px;line-height:1.24}.intercom-namespace .intercom-note-card .intercom-block-subheading{color:#000;line-height:1.24}.intercom-namespace .intercom-pointer .intercom-block-subheading,.intercom-namespace .intercom-tour-step-pointer .intercom-block-subheading,.intercom-namespace .intercom-tour-step-post .intercom-block-subheading{color:#000;font-size:20px;line-height:1.24}.intercom-namespace .intercom-chat .intercom-block-subheading,.intercom-namespace .intercom-chat-card .intercom-block-subheading{color:#000}.intercom-namespace .intercom-note-card .intercom-block-subheading,.intercom-namespace .intercom-post-card .intercom-block-subheading{margin:0 0 10px;font-size:17px}.intercom-namespace .intercom-note .intercom-block-subheading,.intercom-namespace .intercom-pointer .intercom-block-subheading,.intercom-namespace .intercom-tour-step-pointer .intercom-block-subheading{margin:0 7.31% 15px}.intercom-namespace .intercom-tour-step-post .intercom-block-subheading{margin:0 24px 15px}.intercom-namespace .intercom-chat .intercom-block-subheading,.intercom-namespace .intercom-chat-card .intercom-block-subheading{font-size:14px;line-height:1.33;margin:0 0 10px}.intercom-namespace .intercom-block-subheading{font-size:19px;font-weight:700;padding:1px 0 11px}.intercom-namespace .intercom-chat .intercom-block-image,.intercom-namespace .intercom-chat-card .intercom-block-image,.intercom-namespace .intercom-comment .intercom-block-image,.intercom-namespace .intercom-comment-single .intercom-block-image,.intercom-namespace .intercom-note .intercom-block-image,.intercom-namespace .intercom-note-card .intercom-block-image,.intercom-namespace .intercom-pointer .intercom-block-image,.intercom-namespace .intercom-post .intercom-block-image,.intercom-namespace .intercom-post-card .intercom-block-image,.intercom-namespace .intercom-tour-step-pointer .intercom-block-image,.intercom-namespace .intercom-tour-step-post .intercom-block-image{display:block;text-align:center;max-width:100%}.intercom-namespace .intercom-chat .intercom-block-image img,.intercom-namespace .intercom-chat-card .intercom-block-image img,.intercom-namespace .intercom-comment .intercom-block-image img,.intercom-namespace .intercom-comment-single .intercom-block-image img,.intercom-namespace .intercom-note .intercom-block-image img,.intercom-namespace .intercom-note-card .intercom-block-image img,.intercom-namespace .intercom-pointer .intercom-block-image img,.intercom-namespace .intercom-post .intercom-block-image img,.intercom-namespace .intercom-post-card .intercom-block-image img,.intercom-namespace .intercom-tour-step-pointer .intercom-block-image img,.intercom-namespace .intercom-tour-step-post .intercom-block-image img{margin:0 auto;display:block;max-width:100%;vertical-align:bottom}.intercom-namespace .intercom-note .intercom-block-image,.intercom-namespace .intercom-pointer .intercom-block-image,.intercom-namespace .intercom-tour-step-pointer .intercom-block-image{margin-bottom:23px}.intercom-namespace .intercom-post .intercom-block-image,.intercom-namespace .intercom-tour-step-post .intercom-block-image{margin-bottom:34px}.intercom-namespace .intercom-chat .intercom-block-image,.intercom-namespace .intercom-chat-card .intercom-block-image{margin-bottom:10px;-webkit-transition:all .12s ease-out;transition:all .12s ease-out}.intercom-namespace .intercom-note-card .intercom-block-image,.intercom-namespace .intercom-post-card .intercom-block-image{margin-bottom:10px}.intercom-namespace .intercom-comment-single .intercom-block-image img{border-radius:4px}.intercom-namespace .intercom-chat .intercom-block-unordered-list>li,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li,.intercom-namespace .intercom-note .intercom-block-unordered-list>li,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li,.intercom-namespace .intercom-post .intercom-block-unordered-list>li{margin:0 0 5px 15px;padding:0;list-style-position:outside;list-style-type:disc}.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li{color:#000;margin:0 0 5px 15px;padding:0;list-style-position:outside;list-style-type:disc}.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li{margin:0 0 5px 15px;padding:0;list-style-position:outside;list-style-type:disc}.intercom-namespace .intercom-comment .intercom-block-unordered-list>li{color:#000;list-style-type:disc}.intercom-namespace .intercom-chat .intercom-block-ordered-list>li,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li,.intercom-namespace .intercom-note .intercom-block-ordered-list>li,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li,.intercom-namespace .intercom-post .intercom-block-ordered-list>li,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li{margin:0 0 5px 15px;padding:0;list-style-position:outside}.intercom-namespace .intercom-comment .intercom-block-ordered-list>li{color:#000}.intercom-namespace .intercom-chat .intercom-block-ordered-list>li,.intercom-namespace .intercom-chat .intercom-block-ordered-list>li a,.intercom-namespace .intercom-chat .intercom-block-ordered-list>li b,.intercom-namespace .intercom-chat .intercom-block-ordered-list>li em,.intercom-namespace .intercom-chat .intercom-block-ordered-list>li i,.intercom-namespace .intercom-chat .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-chat .intercom-block-paragraph a,.intercom-namespace .intercom-chat .intercom-block-paragraph b,.intercom-namespace .intercom-chat .intercom-block-paragraph em,.intercom-namespace .intercom-chat .intercom-block-paragraph i,.intercom-namespace .intercom-chat .intercom-block-paragraph p,.intercom-namespace .intercom-chat .intercom-block-paragraph strong,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li a,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li b,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li em,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li i,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li a,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li b,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li em,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li i,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-chat-card .intercom-block-paragraph a,.intercom-namespace .intercom-chat-card .intercom-block-paragraph b,.intercom-namespace .intercom-chat-card .intercom-block-paragraph em,.intercom-namespace .intercom-chat-card .intercom-block-paragraph i,.intercom-namespace .intercom-chat-card .intercom-block-paragraph p,.intercom-namespace .intercom-chat-card .intercom-block-paragraph strong,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li a,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li b,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li em,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li i,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li a,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li b,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li em,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li i,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-comment .intercom-block-paragraph a,.intercom-namespace .intercom-comment .intercom-block-paragraph b,.intercom-namespace .intercom-comment .intercom-block-paragraph em,.intercom-namespace .intercom-comment .intercom-block-paragraph i,.intercom-namespace .intercom-comment .intercom-block-paragraph p,.intercom-namespace .intercom-comment .intercom-block-paragraph strong,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li a,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li b,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li em,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li i,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-note .intercom-block-ordered-list>li,.intercom-namespace .intercom-note .intercom-block-ordered-list>li a,.intercom-namespace .intercom-note .intercom-block-ordered-list>li b,.intercom-namespace .intercom-note .intercom-block-ordered-list>li em,.intercom-namespace .intercom-note .intercom-block-ordered-list>li i,.intercom-namespace .intercom-note .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-note .intercom-block-paragraph a,.intercom-namespace .intercom-note .intercom-block-paragraph b,.intercom-namespace .intercom-note .intercom-block-paragraph em,.intercom-namespace .intercom-note .intercom-block-paragraph i,.intercom-namespace .intercom-note .intercom-block-paragraph p,.intercom-namespace .intercom-note .intercom-block-paragraph strong,.intercom-namespace .intercom-note .intercom-block-unordered-list>li,.intercom-namespace .intercom-note .intercom-block-unordered-list>li a,.intercom-namespace .intercom-note .intercom-block-unordered-list>li b,.intercom-namespace .intercom-note .intercom-block-unordered-list>li em,.intercom-namespace .intercom-note .intercom-block-unordered-list>li i,.intercom-namespace .intercom-note .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li a,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li b,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li em,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li i,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-note-card .intercom-block-paragraph a,.intercom-namespace .intercom-note-card .intercom-block-paragraph b,.intercom-namespace .intercom-note-card .intercom-block-paragraph em,.intercom-namespace .intercom-note-card .intercom-block-paragraph i,.intercom-namespace .intercom-note-card .intercom-block-paragraph p,.intercom-namespace .intercom-note-card .intercom-block-paragraph strong,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li a,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li b,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li em,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li i,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li a,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li b,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li em,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li i,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-pointer .intercom-block-paragraph a,.intercom-namespace .intercom-pointer .intercom-block-paragraph b,.intercom-namespace .intercom-pointer .intercom-block-paragraph em,.intercom-namespace .intercom-pointer .intercom-block-paragraph i,.intercom-namespace .intercom-pointer .intercom-block-paragraph p,.intercom-namespace .intercom-pointer .intercom-block-paragraph strong,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li a,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li b,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li em,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li i,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-post .intercom-block-ordered-list>li,.intercom-namespace .intercom-post .intercom-block-ordered-list>li a,.intercom-namespace .intercom-post .intercom-block-ordered-list>li b,.intercom-namespace .intercom-post .intercom-block-ordered-list>li em,.intercom-namespace .intercom-post .intercom-block-ordered-list>li i,.intercom-namespace .intercom-post .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-post .intercom-block-paragraph a,.intercom-namespace .intercom-post .intercom-block-paragraph b,.intercom-namespace .intercom-post .intercom-block-paragraph em,.intercom-namespace .intercom-post .intercom-block-paragraph i,.intercom-namespace .intercom-post .intercom-block-paragraph p,.intercom-namespace .intercom-post .intercom-block-paragraph strong,.intercom-namespace .intercom-post .intercom-block-unordered-list>li,.intercom-namespace .intercom-post .intercom-block-unordered-list>li a,.intercom-namespace .intercom-post .intercom-block-unordered-list>li b,.intercom-namespace .intercom-post .intercom-block-unordered-list>li em,.intercom-namespace .intercom-post .intercom-block-unordered-list>li i,.intercom-namespace .intercom-post .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li a,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li b,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li em,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li i,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-post-card .intercom-block-paragraph a,.intercom-namespace .intercom-post-card .intercom-block-paragraph b,.intercom-namespace .intercom-post-card .intercom-block-paragraph em,.intercom-namespace .intercom-post-card .intercom-block-paragraph i,.intercom-namespace .intercom-post-card .intercom-block-paragraph p,.intercom-namespace .intercom-post-card .intercom-block-paragraph strong,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li a,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li b,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li em,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li i,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li a,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li b,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li em,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li i,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph a,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph b,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph em,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph i,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph p,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph strong,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li a,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li b,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li em,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li i,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li strong,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li a,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li b,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li em,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li i,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li strong,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph a,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph b,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph em,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph i,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph p,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph strong,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li a,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li b,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li em,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li i,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li strong{overflow-wrap:break-word;word-wrap:break-word}.intercom-namespace .intercom-chat .intercom-block-ordered-list>li a,.intercom-namespace .intercom-chat .intercom-block-paragraph a,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li a,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li a,.intercom-namespace .intercom-chat-card .intercom-block-paragraph a,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li a,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li a,.intercom-namespace .intercom-comment .intercom-block-paragraph a,.intercom-namespace .intercom-comment .intercom-block-unordered-list>li a,.intercom-namespace .intercom-note .intercom-block-ordered-list>li a,.intercom-namespace .intercom-note .intercom-block-paragraph a,.intercom-namespace .intercom-note .intercom-block-unordered-list>li a,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li a,.intercom-namespace .intercom-note-card .intercom-block-paragraph a,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li a,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li a,.intercom-namespace .intercom-pointer .intercom-block-paragraph a,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li a,.intercom-namespace .intercom-post .intercom-block-ordered-list>li a,.intercom-namespace .intercom-post .intercom-block-paragraph a,.intercom-namespace .intercom-post .intercom-block-unordered-list>li a,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li a,.intercom-namespace .intercom-post-card .intercom-block-paragraph a,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li a,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li a,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph a,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list>li a,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li a,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph a,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list>li a{text-decoration:underline}.intercom-namespace .intercom-chat .intercom-block-ordered-list>li,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-comment .intercom-block-ordered-list>li,.intercom-namespace .intercom-note .intercom-block-ordered-list>li,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li,.intercom-namespace .intercom-post .intercom-block-ordered-list>li,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li{list-style-type:decimal}.intercom-namespace .intercom-comment .intercom-block-ordered-list,.intercom-namespace .intercom-comment .intercom-block-unordered-list,.intercom-namespace .intercom-note-card .intercom-block-ordered-list,.intercom-namespace .intercom-note-card .intercom-block-unordered-list,.intercom-namespace .intercom-post-card .intercom-block-ordered-list,.intercom-namespace .intercom-post-card .intercom-block-unordered-list{font-size:14px;margin:0 0 10px 10px;line-height:1.33}.intercom-namespace .intercom-post .intercom-block-ordered-list,.intercom-namespace .intercom-post .intercom-block-unordered-list{font-size:17px;line-height:1.41;margin:0 15.27% 27px;padding:0 0 0 16px}.intercom-namespace .intercom-chat .intercom-block-ordered-list,.intercom-namespace .intercom-chat .intercom-block-unordered-list,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list{font-size:14px;margin:0 0 10px;padding:0 0 0 8px;line-height:1.33}.intercom-namespace .intercom-note .intercom-block-ordered-list,.intercom-namespace .intercom-note .intercom-block-unordered-list,.intercom-namespace .intercom-pointer .intercom-block-ordered-list,.intercom-namespace .intercom-pointer .intercom-block-unordered-list,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list,.intercom-namespace .intercom-tour-step-pointer .intercom-block-unordered-list{font-size:14px;margin:0 7.31% 10px;padding:0 0 0 8px;line-height:1.33}.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list,.intercom-namespace .intercom-tour-step-post .intercom-block-unordered-list{font-size:14px;padding:0 0 0 8px;line-height:1.33;margin:0 24px 10px}.intercom-namespace .intercom-chat .intercom-block-ordered-list>li,.intercom-namespace .intercom-chat .intercom-block-unordered-list>li,.intercom-namespace .intercom-chat-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-chat-card .intercom-block-unordered-list>li,.intercom-namespace .intercom-note .intercom-block-ordered-list>li,.intercom-namespace .intercom-note .intercom-block-unordered-list>li,.intercom-namespace .intercom-note-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-note-card .intercom-block-unordered-list>li,.intercom-namespace .intercom-pointer .intercom-block-ordered-list>li,.intercom-namespace .intercom-pointer .intercom-block-unordered-list>li,.intercom-namespace .intercom-post .intercom-block-ordered-list>li,.intercom-namespace .intercom-post .intercom-block-unordered-list>li,.intercom-namespace .intercom-post-card .intercom-block-ordered-list>li,.intercom-namespace .intercom-post-card .intercom-block-unordered-list>li,.intercom-namespace .intercom-tour-step-pointer .intercom-block-ordered-list>li,.intercom-namespace .intercom-tour-step-post .intercom-block-ordered-list>li{color:#000}.intercom-namespace .intercom-chat .intercom-block-video,.intercom-namespace .intercom-chat-card .intercom-block-video,.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video,.intercom-namespace .intercom-comment .intercom-block-video,.intercom-namespace .intercom-note .intercom-block-video,.intercom-namespace .intercom-note-card .intercom-block-video,.intercom-namespace .intercom-pointer .intercom-block-video,.intercom-namespace .intercom-post .intercom-block-video,.intercom-namespace .intercom-post-card .intercom-block-video,.intercom-namespace .intercom-tour-step-pointer .intercom-block-video,.intercom-namespace .intercom-tour-step-post .intercom-block-video{position:relative;display:block}.intercom-namespace .intercom-chat .intercom-block-video:before,.intercom-namespace .intercom-chat-card .intercom-block-video:before,.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video:before,.intercom-namespace .intercom-comment .intercom-block-video:before,.intercom-namespace .intercom-note .intercom-block-video:before,.intercom-namespace .intercom-note-card .intercom-block-video:before,.intercom-namespace .intercom-pointer .intercom-block-video:before,.intercom-namespace .intercom-post .intercom-block-video:before,.intercom-namespace .intercom-post-card .intercom-block-video:before,.intercom-namespace .intercom-tour-step-pointer .intercom-block-video:before,.intercom-namespace .intercom-tour-step-post .intercom-block-video:before{display:block;content:" ";width:100%;padding-top:56.25%}.intercom-namespace .intercom-note .intercom-block-video iframe,.intercom-namespace .intercom-note .intercom-block-video video,.intercom-namespace .intercom-pointer .intercom-block-video iframe,.intercom-namespace .intercom-pointer .intercom-block-video video,.intercom-namespace .intercom-post .intercom-block-video iframe,.intercom-namespace .intercom-post .intercom-block-video video,.intercom-namespace .intercom-tour-step-pointer .intercom-block-video iframe,.intercom-namespace .intercom-tour-step-pointer .intercom-block-video video,.intercom-namespace .intercom-tour-step-post .intercom-block-video iframe,.intercom-namespace .intercom-tour-step-post .intercom-block-video video{width:100%;height:100%;vertical-align:top;position:absolute;top:0;left:0;right:0;bottom:0}.intercom-namespace .intercom-chat .intercom-block-video iframe,.intercom-namespace .intercom-chat .intercom-block-video video,.intercom-namespace .intercom-comment .intercom-block-video iframe,.intercom-namespace .intercom-comment .intercom-block-video video{width:100%;height:100%;vertical-align:top;top:0;left:0;right:0;bottom:0}.intercom-namespace .intercom-note-card .intercom-block-video iframe,.intercom-namespace .intercom-note-card .intercom-block-video video,.intercom-namespace .intercom-post-card .intercom-block-video iframe,.intercom-namespace .intercom-post-card .intercom-block-video video{width:100%;height:100%;vertical-align:top;position:absolute;top:0;left:0;right:0;bottom:0}.intercom-namespace .intercom-chat-card .intercom-block-video iframe,.intercom-namespace .intercom-chat-card .intercom-block-video video{width:100%;height:100%;vertical-align:top;top:0;left:0;right:0;bottom:0}.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video iframe,.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video video{width:100%;height:100%;vertical-align:top;position:absolute;top:0;left:0;right:0;bottom:0}.intercom-namespace .intercom-chat .intercom-block-video iframe,.intercom-namespace .intercom-chat .intercom-block-video video,.intercom-namespace .intercom-chat-card .intercom-block-video iframe,.intercom-namespace .intercom-chat-card .intercom-block-video video,.intercom-namespace .intercom-comment .intercom-block-video iframe,.intercom-namespace .intercom-comment .intercom-block-video video{position:static;margin-top:-56.25%}.intercom-namespace .intercom-note .intercom-block-video,.intercom-namespace .intercom-pointer .intercom-block-video{margin:0 7.31% 24px}.intercom-namespace .intercom-tour-step-pointer .intercom-block-video,.intercom-namespace .intercom-tour-step-post .intercom-block-video{margin:0}.intercom-namespace .intercom-post .intercom-block-video{margin:0 15.27% 40px}.intercom-namespace .intercom-chat .intercom-block-video,.intercom-namespace .intercom-comment .intercom-block-video{height:120px}.intercom-namespace .intercom-chat .intercom-block-video,.intercom-namespace .intercom-chat-card .intercom-block-video,.intercom-namespace .intercom-note-card .intercom-block-video,.intercom-namespace .intercom-post-card .intercom-block-video{margin-bottom:10px}.intercom-namespace .intercom-comment-single .intercom-block-video iframe,.intercom-namespace .intercom-comment-single .intercom-block-video video{border-radius:4px}.intercom-namespace .intercom-tour-step-post .intercom-block-video{margin-bottom:14px}.intercom-namespace .intercom-block-video-file{border-radius:5px;margin-bottom:10px;position:relative;z-index:0}.intercom-namespace .intercom-video-player-container{position:relative;overflow:hidden;border-radius:5px;height:100%;width:100%;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-video-player-container.intercom-video-player-container-has-audio:after,.intercom-namespace .intercom-video-player-container.intercom-video-player-container-has-captions:after{width:100%;height:80px;content:"";position:absolute;pointer-events:none;bottom:0;right:0;left:0;background-size:100% 100px;background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background:linear-gradient(180deg,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.intercom-namespace .intercom-video-loading{position:absolute;border-radius:5px;top:0;left:0;right:0;bottom:0;height:100%;background-color:#fff}.intercom-namespace .intercom-video-player{cursor:pointer;border-radius:5px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.intercom-namespace .intercom-video-control-audio-muted,.intercom-namespace .intercom-video-control-audio-unmuted,.intercom-namespace .intercom-video-overlay{position:absolute;z-index:2;-webkit-transition:opacity 200ms cubic-bezier(.165,.84,.44,1);transition:opacity 200ms cubic-bezier(.165,.84,.44,1)}.intercom-namespace .intercom-video-overlay{opacity:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;pointer-events:none}.intercom-namespace .intercom-video-control-audio-muted,.intercom-namespace .intercom-video-control-audio-unmuted{right:2px;bottom:2px;width:44px;height:44px;pointer-events:auto;cursor:pointer;background-size:24px 24px;background-repeat:no-repeat;background-position:center center;-webkit-filter:drop-shadow(0 .5px 1px rgba(0,0,0,.6));filter:drop-shadow(0 .5px 1px rgba(0,0,0,.6))}.intercom-namespace .intercom-video-control-audio-muted{background-image:url(https://js.intercomcdn.com/images/muted.ea7260d8.svg)}.intercom-namespace .intercom-video-control-audio-unmuted{background-image:url(https://js.intercomcdn.com/images/not-muted.95881bfe.svg)}.intercom-namespace .intercom-video-control-button,.intercom-namespace .intercom-video-summary{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intercom-namespace .intercom-video-summary{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;pointer-events:none}.intercom-namespace .intercom-video-control-button{cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:48px;height:48px;pointer-events:auto;background-color:rgb(255, 255, 255);border-radius:120px;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;-webkit-box-shadow:0 2px 32px rgba(0,0,0,.14),0 1px 6px rgba(0,0,0,.06);box-shadow:0 2px 32px rgba(0,0,0,.14),0 1px 6px rgba(0,0,0,.06)}.intercom-namespace .intercom-video-control-button:hover{-webkit-transform:scale(1.25);transform:scale(1.25)}.intercom-namespace .intercom-video-player-container-complete a.intercom-video-control-button svg{-webkit-animation-name:video-replay-wiggle;animation-name:video-replay-wiggle;-webkit-animation-duration:400ms;animation-duration:400ms;-webkit-animation-timing-function:cubic-bezier(.165,.84,.44,1);animation-timing-function:cubic-bezier(.165,.84,.44,1)}.intercom-namespace .intercom-video-player-container-complete .intercom-video-control-audio-muted,.intercom-namespace .intercom-video-player-container-complete .intercom-video-control-audio-unmuted,.intercom-namespace .intercom-video-player-container-complete .intercom-video-overlay,.intercom-namespace .intercom-video-player-container-paused .intercom-video-control-audio-muted,.intercom-namespace .intercom-video-player-container-paused .intercom-video-control-audio-unmuted,.intercom-namespace .intercom-video-player-container-paused .intercom-video-overlay,.intercom-namespace .intercom-video-player-container-playing:hover .intercom-video-control-audio-muted,.intercom-namespace .intercom-video-player-container-playing:hover .intercom-video-control-audio-unmuted,.intercom-namespace .intercom-video-player-container-playing:hover .intercom-video-overlay,.intercom-namespace .intercom-video-player-container-ready .intercom-video-control-audio-muted,.intercom-namespace .intercom-video-player-container-ready .intercom-video-control-audio-unmuted,.intercom-namespace .intercom-video-player-container-ready .intercom-video-overlay{opacity:1}.intercom-namespace .intercom-video-player-container-complete .intercom-video-control-audio-muted:hover,.intercom-namespace .intercom-video-player-container-complete .intercom-video-control-audio-unmuted:hover,.intercom-namespace .intercom-video-player-container-paused .intercom-video-control-audio-muted:hover,.intercom-namespace .intercom-video-player-container-paused .intercom-video-control-audio-unmuted:hover,.intercom-namespace .intercom-video-player-container-playing:hover .intercom-video-control-audio-muted:hover,.intercom-namespace .intercom-video-player-container-playing:hover .intercom-video-control-audio-unmuted:hover,.intercom-namespace .intercom-video-player-container-ready .intercom-video-control-audio-muted:hover,.intercom-namespace .intercom-video-player-container-ready .intercom-video-control-audio-unmuted:hover{opacity:.85}.intercom-namespace .intercom-video-player-container-loading .intercom-video-control-audio-muted,.intercom-namespace .intercom-video-player-container-loading .intercom-video-control-audio-unmuted,.intercom-namespace .intercom-video-player-container-loading .intercom-video-player-bottom-overlay{opacity:0}.intercom-namespace .intercom-video-player-container-playing .intercom-video-summary{display:none}.intercom-namespace .intercom-comment-single .intercom-video-loading{background-color:#eee}.intercom-namespace .intercom-video-player-container-mobile .intercom-video-overlay{opacity:1}.intercom-namespace .intercom-video-player-container-mobile.intercom-video-player-container-playing .intercom-video-overlay{-webkit-transition-delay:1s;transition-delay:1s;opacity:0}.intercom-namespace .intercom-chat-card-borderless.intercom-chat-card-borderless-single .intercom-block-video-file{-webkit-box-shadow:0 2px 16px rgba(0,0,0,.14),0 1px 6px rgba(0,0,0,.06);box-shadow:0 2px 16px rgba(0,0,0,.14),0 1px 6px rgba(0,0,0,.06)}.intercom-namespace .intercom-note .intercom-block-video-file,.intercom-namespace .intercom-post .intercom-block-video-file{-webkit-box-shadow:none;box-shadow:none;border-radius:0}.intercom-namespace .intercom-note .intercom-block-video-file .intercom-video-player,.intercom-namespace .intercom-note .intercom-block-video-file .intercom-video-player-container,.intercom-namespace .intercom-post .intercom-block-video-file .intercom-video-player,.intercom-namespace .intercom-post .intercom-block-video-file .intercom-video-player-container{border-radius:0}.intercom-namespace .intercom-video-player-bottom-overlay{opacity:1;position:absolute;-webkit-transform:translateY(28px);transform:translateY(28px);bottom:0;width:100%;z-index:2;pointer-events:none;background-size:100% 100px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.32)));background:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.32) 100%);border-bottom-left-radius:5px;border-bottom-right-radius:5px;-webkit-transition:all 300ms cubic-bezier(.165,.84,.44,1);transition:all 300ms cubic-bezier(.165,.84,.44,1)}.intercom-namespace .intercom-video-player-container-has-captions .intercom-video-player-bottom-overlay{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background:linear-gradient(180deg,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%)}.intercom-namespace .intercom-video-player-container-complete .intercom-video-player-bottom-overlay,.intercom-namespace .intercom-video-player-container-no-controls .intercom-video-player-bottom-overlay,.intercom-namespace .intercom-video-player-container-paused .intercom-video-player-bottom-overlay,.intercom-namespace .intercom-video-player-container-show-controls .intercom-video-player-bottom-overlay{-webkit-transform:translateY(0);transform:translateY(0)}.intercom-namespace .intercom-video-player-container-complete .intercom-video-player-controls,.intercom-namespace .intercom-video-player-container-no-controls .intercom-video-player-controls,.intercom-namespace .intercom-video-player-container-paused .intercom-video-player-controls,.intercom-namespace .intercom-video-player-container-show-controls .intercom-video-player-controls{opacity:1}.intercom-namespace .intercom-video-player-container-no-controls .intercom-video-player-captions{padding-bottom:12px}.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video-reply,.intercom-namespace .intercom-comment .intercom-block-video-reply,.intercom-namespace .intercom-comment-single .intercom-block-video-reply{position:relative;display:block}.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video-reply:before,.intercom-namespace .intercom-comment .intercom-block-video-reply:before,.intercom-namespace .intercom-comment-single .intercom-block-video-reply:before{display:block;content:" ";width:100%;padding-top:75%}.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video-reply iframe,.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video-reply video,.intercom-namespace .intercom-comment .intercom-block-video-reply iframe,.intercom-namespace .intercom-comment .intercom-block-video-reply video,.intercom-namespace .intercom-comment-single .intercom-block-video-reply iframe,.intercom-namespace .intercom-comment-single .intercom-block-video-reply video{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}.intercom-namespace .intercom-comment .intercom-block-video-reply,.intercom-namespace .intercom-comment-single .intercom-block-video-reply{width:232px}.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-video-reply{width:240px}.intercom-namespace .intercom-chat .intercom-block-paragraph,.intercom-namespace .intercom-chat-card .intercom-block-paragraph,.intercom-namespace .intercom-note .intercom-block-paragraph,.intercom-namespace .intercom-note-card .intercom-block-paragraph,.intercom-namespace .intercom-pointer .intercom-block-paragraph,.intercom-namespace .intercom-post .intercom-block-paragraph,.intercom-namespace .intercom-post-card .intercom-block-paragraph{color:#000}.intercom-namespace .intercom-note .intercom-block-paragraph,.intercom-namespace .intercom-pointer .intercom-block-paragraph,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph{font-size:14px;line-height:1.4;margin:0 7.31% 10px}.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph{margin:0 24px 10px}.intercom-namespace .intercom-post .intercom-block-paragraph{font-size:17px;line-height:1.4;margin:0 15.27% 17px}.intercom-namespace .intercom-chat .intercom-block-paragraph,.intercom-namespace .intercom-chat-card .intercom-block-paragraph,.intercom-namespace .intercom-comment .intercom-block-paragraph,.intercom-namespace .intercom-note-card .intercom-block-paragraph,.intercom-namespace .intercom-post-card .intercom-block-paragraph{font-size:14px;line-height:1.4;margin:0 0 10px}.intercom-namespace .intercom-chat .intercom-block-paragraph a:active,.intercom-namespace .intercom-chat .intercom-block-paragraph a:focus,.intercom-namespace .intercom-chat .intercom-block-paragraph a:hover,.intercom-namespace .intercom-chat-card .intercom-block-paragraph a:active,.intercom-namespace .intercom-chat-card .intercom-block-paragraph a:focus,.intercom-namespace .intercom-chat-card .intercom-block-paragraph a:hover,.intercom-namespace .intercom-comment .intercom-block-paragraph a:active,.intercom-namespace .intercom-comment .intercom-block-paragraph a:focus,.intercom-namespace .intercom-comment .intercom-block-paragraph a:hover,.intercom-namespace .intercom-note .intercom-block-paragraph a:active,.intercom-namespace .intercom-note .intercom-block-paragraph a:focus,.intercom-namespace .intercom-note .intercom-block-paragraph a:hover,.intercom-namespace .intercom-note-card .intercom-block-paragraph a:active,.intercom-namespace .intercom-note-card .intercom-block-paragraph a:focus,.intercom-namespace .intercom-note-card .intercom-block-paragraph a:hover,.intercom-namespace .intercom-pointer .intercom-block-paragraph a:active,.intercom-namespace .intercom-pointer .intercom-block-paragraph a:focus,.intercom-namespace .intercom-pointer .intercom-block-paragraph a:hover,.intercom-namespace .intercom-post .intercom-block-paragraph a:active,.intercom-namespace .intercom-post .intercom-block-paragraph a:focus,.intercom-namespace .intercom-post .intercom-block-paragraph a:hover,.intercom-namespace .intercom-post-card .intercom-block-paragraph a:active,.intercom-namespace .intercom-post-card .intercom-block-paragraph a:focus,.intercom-namespace .intercom-post-card .intercom-block-paragraph a:hover,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph a:active,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph a:focus,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph a:hover,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph a:active,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph a:focus,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph a:hover{text-decoration:none}.intercom-namespace .intercom-chat .intercom-block-paragraph code,.intercom-namespace .intercom-chat-card .intercom-block-paragraph code,.intercom-namespace .intercom-comment .intercom-block-paragraph code,.intercom-namespace .intercom-note .intercom-block-paragraph code,.intercom-namespace .intercom-note-card .intercom-block-paragraph code,.intercom-namespace .intercom-pointer .intercom-block-paragraph code,.intercom-namespace .intercom-post .intercom-block-paragraph code,.intercom-namespace .intercom-post-card .intercom-block-paragraph code,.intercom-namespace .intercom-tour-step-pointer .intercom-block-paragraph code,.intercom-namespace .intercom-tour-step-post .intercom-block-paragraph code{padding:1px;background-color:#f5f5f5;font-family:Courier,monospace}.intercom-namespace .intercom-block-html{font-size:13px}.intercom-namespace .intercom-post .intercom-block-button{display:inline-block;font-weight:700;color:#fff;background-color:#24b1ed;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;padding:8px 40px;text-decoration:none}.intercom-namespace .intercom-note .intercom-block-button,.intercom-namespace .intercom-pointer .intercom-block-button,.intercom-namespace .intercom-tour-step-pointer .intercom-block-button{font-size:14px}.intercom-namespace .intercom-note .intercom-block-button,.intercom-namespace .intercom-note-card .intercom-block-button,.intercom-namespace .intercom-pointer .intercom-block-button,.intercom-namespace .intercom-post-card .intercom-block-button,.intercom-namespace .intercom-tour-step-pointer .intercom-block-button,.intercom-namespace .intercom-tour-step-post .intercom-block-button{display:inline-block;font-weight:700;color:#fff;background-color:#24b1ed;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;padding:8px 40px;text-decoration:none}.intercom-namespace .intercom-note-card .intercom-block-button,.intercom-namespace .intercom-post-card .intercom-block-button{font-size:14px}.intercom-namespace .intercom-post .intercom-block-button,.intercom-namespace .intercom-tour-step-post .intercom-block-button{margin:0 15.27%;font-size:17px;line-height:1.4}.intercom-namespace .intercom-note .intercom-block-button,.intercom-namespace .intercom-pointer .intercom-block-button,.intercom-namespace .intercom-tour-step-pointer .intercom-block-button{margin:0 7.31%;line-height:1.4}.intercom-namespace .intercom-chat .intercom-block-button,.intercom-namespace .intercom-chat-card .intercom-block-button{color:#24b1ed;text-decoration:underline;font-size:14px;line-height:1.4;margin:0 0 10px}.intercom-namespace .intercom-chat .intercom-block-button:hover,.intercom-namespace .intercom-chat-card .intercom-block-button:hover{text-decoration:none}.intercom-namespace .intercom-note-card .intercom-block-button,.intercom-namespace .intercom-post-card .intercom-block-button{margin:0;line-height:1.4}.intercom-namespace .intercom-post .intercom-block-button-container,.intercom-namespace .intercom-tour-step-post .intercom-block-button-container{margin-bottom:17px}.intercom-namespace .intercom-note .intercom-block-button-container{margin-bottom:9px}.intercom-namespace .intercom-chat .intercom-block-button-container,.intercom-namespace .intercom-note-card .intercom-block-button-container,.intercom-namespace .intercom-post-card .intercom-block-button-container{margin-bottom:10px}.intercom-namespace .intercom-chat .intercom-block-facebook iframe,.intercom-namespace .intercom-chat .intercom-block-twitter iframe,.intercom-namespace .intercom-chat-card .intercom-block-facebook iframe,.intercom-namespace .intercom-chat-card .intercom-block-twitter iframe,.intercom-namespace .intercom-note .intercom-block-facebook iframe,.intercom-namespace .intercom-note .intercom-block-twitter iframe,.intercom-namespace .intercom-note-card .intercom-block-facebook iframe,.intercom-namespace .intercom-note-card .intercom-block-twitter iframe,.intercom-namespace .intercom-pointer .intercom-block-facebook iframe,.intercom-namespace .intercom-pointer .intercom-block-twitter iframe,.intercom-namespace .intercom-post .intercom-block-facebook iframe,.intercom-namespace .intercom-post .intercom-block-twitter iframe,.intercom-namespace .intercom-post-card .intercom-block-facebook iframe,.intercom-namespace .intercom-post-card .intercom-block-twitter iframe,.intercom-namespace .intercom-tour-step-pointer .intercom-block-facebook iframe,.intercom-namespace .intercom-tour-step-pointer .intercom-block-twitter iframe,.intercom-namespace .intercom-tour-step-post .intercom-block-facebook iframe,.intercom-namespace .intercom-tour-step-post .intercom-block-twitter iframe{max-height:20px;max-width:100%}.intercom-namespace .intercom-note .intercom-block-twitter,.intercom-namespace .intercom-pointer .intercom-block-twitter{margin:0 7.31% 9px}.intercom-namespace .intercom-tour-step-pointer .intercom-block-twitter{margin:0 24px 9px}.intercom-namespace .intercom-post .intercom-block-twitter,.intercom-namespace .intercom-tour-step-post .intercom-block-twitter{margin:0 15.27% 9px}.intercom-namespace .intercom-chat .intercom-block-facebook .intercom-chat-card .intercom-block-facebook,.intercom-namespace .intercom-chat .intercom-block-twitter,.intercom-namespace .intercom-chat-card .intercom-block-twitter,.intercom-namespace .intercom-chat-card .intercom-chat .intercom-block-facebook .intercom-block-facebook,.intercom-namespace .intercom-note-card .intercom-block-twitter,.intercom-namespace .intercom-post-card .intercom-block-twitter{margin:0 0 10px}.intercom-namespace .intercom-note .intercom-block-facebook,.intercom-namespace .intercom-pointer .intercom-block-facebook,.intercom-namespace .intercom-tour-step-pointer .intercom-block-facebook{margin:0 7.31% 9px}.intercom-namespace .intercom-post .intercom-block-facebook,.intercom-namespace .intercom-tour-step-post .intercom-block-facebook{margin:0 15.27% 9px}.intercom-namespace .intercom-note-card .intercom-block-facebook,.intercom-namespace .intercom-post-card .intercom-block-facebook{margin:0 0 10px}.intercom-namespace .intercom-chat .intercom-block-attachment-list>a,.intercom-namespace .intercom-chat-card .intercom-block-attachment-list>a,.intercom-namespace .intercom-comment .intercom-block-attachment-list>a,.intercom-namespace .intercom-note .intercom-block-attachment-list>a,.intercom-namespace .intercom-note-card .intercom-block-attachment-list>a,.intercom-namespace .intercom-pointer .intercom-block-attachment-list>a,.intercom-namespace .intercom-post .intercom-block-attachment-list>a,.intercom-namespace .intercom-post-card .intercom-block-attachment-list>a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:20px;margin-top:10px;text-overflow:ellipsis;text-decoration:none;white-space:nowrap;overflow:hidden}.intercom-namespace .intercom-note .intercom-block-attachment-list,.intercom-namespace .intercom-pointer .intercom-block-attachment-list,.intercom-namespace .intercom-tour-step-pointer .intercom-block-attachment-list{margin:0 7.31%}.intercom-namespace .intercom-post .intercom-block-attachment-list,.intercom-namespace .intercom-tour-step-post .intercom-block-attachment-list{margin:0 15.27%}.intercom-namespace .intercom-chat .intercom-block-attachment-list,.intercom-namespace .intercom-chat-card .intercom-block-attachment-list{margin:0}.intercom-namespace .intercom-comment-single .intercom-block-attachment-list>a{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;background-position:15px;background-color:#fff;border:1px solid #e6e6e6;border-radius:5px;color:#000;padding:16px 24px 13px;text-decoration:none}.intercom-namespace .intercom-comment-single .intercom-block-attachment-list>a>.intercom-block-attachment-list-progress{position:absolute;top:0;right:0;bottom:0;background-color:#e6e6e6;opacity:.5;-webkit-transition:width 1s linear;transition:width 1s linear}.intercom-namespace .intercom-block-attachment-list-name{line-height:1.5;white-space:nowrap;overflow:hidden;text-decoration:underline;font-size:14px}.intercom-namespace .intercom-block-attachment-list-icon{-webkit-box-flex:0;-ms-flex:0 0 16px;flex:0 0 16px;margin-right:4px}.intercom-namespace .intercom-block-attachment-list-icon svg{width:16px;height:18px}.intercom-namespace .intercom-comment-container-admin .intercom-comment .intercom-block-attachment-list-icon svg>path{fill:#24b1ed}.intercom-namespace .intercom-chat .intercom-block-code,.intercom-namespace .intercom-chat-card .intercom-block-code,.intercom-namespace .intercom-comment .intercom-block-code,.intercom-namespace .intercom-note .intercom-block-code,.intercom-namespace .intercom-note-card .intercom-block-code,.intercom-namespace .intercom-pointer .intercom-block-code,.intercom-namespace .intercom-post .intercom-block-code,.intercom-namespace .intercom-post-card .intercom-block-code,.intercom-namespace .intercom-tour-step-pointer .intercom-block-code,.intercom-namespace .intercom-tour-step-post .intercom-block-code{margin:0 0 10px;padding:10px;background-color:#f5f5f5;overflow:auto}.intercom-namespace .intercom-chat .intercom-block-code>code,.intercom-namespace .intercom-chat-card .intercom-block-code>code,.intercom-namespace .intercom-comment .intercom-block-code>code,.intercom-namespace .intercom-note .intercom-block-code>code,.intercom-namespace .intercom-note-card .intercom-block-code>code,.intercom-namespace .intercom-pointer .intercom-block-code>code,.intercom-namespace .intercom-post .intercom-block-code>code,.intercom-namespace .intercom-post-card .intercom-block-code>code,.intercom-namespace .intercom-tour-step-pointer .intercom-block-code>code,.intercom-namespace .intercom-tour-step-post .intercom-block-code>code{font-family:Courier,monospace;font-size:14px;line-height:1.4;white-space:nowrap}.intercom-namespace .intercom-chat .intercom-block-link,.intercom-namespace .intercom-chat-card .intercom-block-link,.intercom-namespace .intercom-chat-card-borderless-single .intercom-block-link,.intercom-namespace .intercom-comment .intercom-block-link{-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.03);box-shadow:0 1px 2px 0 rgba(0,0,0,.03);margin-bottom:10px}.intercom-namespace .intercom-block-messenger-card{width:100%}.intercom-namespace .intercom-chat-card-borderless .intercom-block-messenger-card{padding-bottom:10px}.intercom-namespace .intercom-block-center{text-align:center}.intercom-namespace .intercom-note .intercom-blocks,.intercom-namespace .intercom-post .intercom-blocks{margin-bottom:56px;padding-bottom:16px}.intercom-namespace .intercom-pointer .intercom-blocks{margin-bottom:49px;padding-bottom:16px}.intercom-namespace .intercom-tour-step .intercom-blocks{padding-bottom:16px}.intercom-namespace .intercom-pointer-inbox .intercom-blocks{margin-bottom:0;padding-bottom:16px}.intercom-namespace a.intercom-messenger-card-button,.intercom-namespace button.intercom-messenger-card-button{text-align:center;border-radius:5px;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;font-weight:700;padding:6px 12px;min-height:40px;margin-bottom:8px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;word-break:break-word}.intercom-namespace a.intercom-messenger-card-button-loading,.intercom-namespace button.intercom-messenger-card-button-loading{cursor:default}.intercom-namespace a.intercom-messenger-card-button-primary,.intercom-namespace button.intercom-messenger-card-button-primary{border-radius:3px;background-color:rgb(36, 177, 237);color:rgb(255, 255, 255);-webkit-transition:color background-color .3s;transition:color background-color .3s}.intercom-namespace a.intercom-messenger-card-button-primary:hover,.intercom-namespace button.intercom-messenger-card-button-primary:hover{color:rgb(255, 255, 255);background-color:rgb(17, 149, 205)}.intercom-namespace a.intercom-messenger-card-button-primary:active,.intercom-namespace button.intercom-messenger-card-button-primary:active{color:rgb(255, 255, 255);background-color:rgb(13, 115, 158)}.intercom-namespace a.intercom-messenger-card-button-primary:disabled,.intercom-namespace button.intercom-messenger-card-button-primary:disabled{background-color:#d2d7db;color:#bcbcbc;cursor:default}.intercom-namespace a.intercom-messenger-card-button-secondary,.intercom-namespace button.intercom-messenger-card-button-secondary{border-radius:3px;background-color:#fff;color:rgb(36, 177, 237);border:1px solid rgb(36, 177, 237);-webkit-transition:color background-color .3s;transition:color background-color .3s}.intercom-namespace a.intercom-messenger-card-button-secondary:hover,.intercom-namespace button.intercom-messenger-card-button-secondary:hover{border-color:rgb(17, 149, 205);color:rgb(17, 149, 205)}.intercom-namespace a.intercom-messenger-card-button-secondary:active:not(.intercom-messenger-card-button-loading):not([disabled]),.intercom-namespace button.intercom-messenger-card-button-secondary:active:not(.intercom-messenger-card-button-loading):not([disabled]){border-color:rgb(13, 115, 158);color:rgb(13, 115, 158)}.intercom-namespace a.intercom-messenger-card-button-secondary:disabled,.intercom-namespace button.intercom-messenger-card-button-secondary:disabled{background-color:#fff;border-color:#bcbcbc;color:#bcbcbc;cursor:default}.intercom-namespace a.intercom-messenger-card-button-link,.intercom-namespace button.intercom-messenger-card-button-link{background-color:transparent;color:rgb(36, 177, 237)}.intercom-namespace a.intercom-messenger-card-button-link:hover:not(.intercom-messenger-card-button-loading):not([disabled]),.intercom-namespace button.intercom-messenger-card-button-link:hover:not(.intercom-messenger-card-button-loading):not([disabled]){color:rgb(17, 149, 205)}.intercom-namespace a.intercom-messenger-card-button-link:active:not(.intercom-messenger-card-button-loading):not([disabled]),.intercom-namespace button.intercom-messenger-card-button-link:active:not(.intercom-messenger-card-button-loading):not([disabled]){color:rgb(13, 115, 158)}.intercom-namespace a.intercom-messenger-card-button-link:disabled,.intercom-namespace button.intercom-messenger-card-button-link:disabled{background-color:transparent;color:#bcbcbc;cursor:default}.intercom-namespace a.intercom-messenger-card-button-last-component,.intercom-namespace a.intercom-messenger-card-button-margin-bottom-none,.intercom-namespace button.intercom-messenger-card-button-last-component,.intercom-namespace button.intercom-messenger-card-button-margin-bottom-none{margin-bottom:0}.intercom-namespace a.intercom-messenger-card-button-light,.intercom-namespace button.intercom-messenger-card-button-light{border:1px solid #d2d7db}.intercom-namespace a.intercom-messenger-card-button{display:inline-block;line-height:2}.intercom-namespace a.intercom-messenger-card-button-disabled.intercom-messenger-card-button-primary{background-color:#d2d7db;color:#bcbcbc;cursor:default}.intercom-namespace a.intercom-messenger-card-button-disabled.intercom-messenger-card-button-secondary{background-color:#fff;border-color:#bcbcbc;color:#bcbcbc;cursor:default}.intercom-namespace a.intercom-messenger-card-button-disabled.intercom-messenger-card-button-link{background-color:transparent;color:#bcbcbc;cursor:default}.intercom-namespace .intercom-messenger-card-text{line-height:1.5;margin-bottom:8px;word-break:break-word}.intercom-namespace .intercom-messenger-card-text-paragraph{font-size:14px}.intercom-namespace .intercom-messenger-card-text-header{font-size:16px;color:#000}.intercom-namespace .intercom-messenger-card-text.intercom-messenger-card-text-muted{color:#737376;font-size:14px}.intercom-namespace .intercom-messenger-card-text.intercom-messenger-card-text-muted .intercom-messenger-card-text-link{color:#737376}.intercom-namespace .intercom-messenger-card-text.intercom-messenger-card-text-error{color:#d22628;font-size:14px}.intercom-namespace .intercom-messenger-card-text.intercom-messenger-card-text-error .intercom-messenger-card-text-link,.intercom-namespace .intercom-messenger-card-textarea.intercom-textarea-failed label{color:#d22628}.intercom-namespace .intercom-messenger-card-text-left{text-align:left}.intercom-namespace .intercom-messenger-card-text-center{text-align:center}.intercom-namespace .intercom-messenger-card-text-right{text-align:right}.intercom-namespace .intercom-messenger-card-text .intercom-messenger-card-text-link{text-decoration:underline;color:#24b1ed}.intercom-namespace .intercom-messenger-card-text .intercom-messenger-card-text-bold{font-weight:600}.intercom-namespace .intercom-messenger-card-text-last-component,.intercom-namespace .intercom-messenger-card-text-margin-bottom-none{margin-bottom:0}.intercom-namespace .intercom-messenger-card-spacer{width:100%}.intercom-namespace .intercom-messenger-card-spacer-xs{height:4px}.intercom-namespace .intercom-messenger-card-spacer-s{height:8px}.intercom-namespace .intercom-messenger-card-spacer-m{height:16px}.intercom-namespace .intercom-messenger-card-spacer-l{height:24px}.intercom-namespace .intercom-messenger-card-spacer-xl{height:32px}.intercom-namespace .intercom-messenger-card-divider{border-top:1px solid #eee;height:0;margin:0 -24px 8px}.intercom-namespace .intercom-messenger-card-divider-last-component,.intercom-namespace .intercom-messenger-card-divider-margin-bottom-none{margin-bottom:0}.intercom-namespace .intercom-messenger-card-image{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-bottom:8px;-webkit-touch-callout:none;-webkit-user-select:none}.intercom-namespace .intercom-messenger-card-image-left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.intercom-namespace .intercom-messenger-card-image-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.intercom-namespace .intercom-messenger-card-image-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.intercom-namespace .intercom-messenger-card-image-full-width{margin:auto -24px 8px}.intercom-namespace .intercom-messenger-card-image-full-width.intercom-messenger-card-image-first-component{margin:-24px -24px 8px}.intercom-namespace .intercom-messenger-card-image-full-width.intercom-messenger-card-image-last-component{margin-bottom:-24px}.intercom-namespace .intercom-messenger-card-image-full-width.intercom-messenger-card-image-last-component .intercom-messenger-card-image-wrapper{border-radius:0 0 3px 3px}.intercom-namespace .intercom-messenger-card-image-wrapper{overflow:hidden}.intercom-namespace .intercom-messenger-card-image img{display:block}.intercom-namespace .intercom-messenger-card-image-round img{border-radius:50%}.intercom-namespace .intercom-messenger-card-image-full-width.intercom-messenger-card-image-margin-bottom-none,.intercom-namespace .intercom-messenger-card-image-last-component,.intercom-namespace .intercom-messenger-card-image-margin-bottom-none{margin-bottom:0}.intercom-namespace .intercom-messenger-card-image-active,.intercom-namespace .intercom-messenger-card-image-active *{cursor:pointer}.intercom-namespace .intercom-messenger-card-image-disabled{opacity:.5}.intercom-namespace .intercom-messenger-card-list{position:relative;margin:0 -24px 8px;border-top:1px solid #eee;border-bottom:1px solid #eee;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none}.intercom-namespace .intercom-messenger-card-list-first-component{border-top:0;margin-top:-24px}.intercom-namespace .intercom-messenger-card-list-first-component .intercom-messenger-card-list-item:not(.intercom-messenger-card-list-item-light):first-child,.intercom-namespace .intercom-messenger-card-list-first-component .intercom-messenger-card-list-item:not(.intercom-messenger-card-list-item-light):first-child:active,.intercom-namespace .intercom-messenger-card-list-first-component .intercom-messenger-card-list-item:not(.intercom-messenger-card-list-item-light):first-child:hover{margin-top:2px;border-radius:3px 3px 0 0}.intercom-namespace .intercom-messenger-card-list-margin-bottom-none{margin-bottom:0}.intercom-namespace .intercom-messenger-card-list-last-component{border-bottom:0;margin-bottom:-24px}.intercom-namespace .intercom-messenger-card-list-last-component.intercom-messenger-card-list-margin-bottom-none{margin-bottom:-24px}.intercom-namespace .intercom-messenger-card-list-item{background-color:#fff;padding:16px 24px;border-bottom:1px solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.intercom-namespace .intercom-messenger-card-list-item-light .intercom-messenger-card-list-item-text-title-action{color:#000}.intercom-namespace .intercom-messenger-card-list-item-text{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.intercom-namespace .intercom-messenger-card-list-item-text-title{color:#000;font-size:14px}.intercom-namespace .intercom-messenger-card-list-item-text-title-action{color:#24b1ed}.intercom-namespace .intercom-messenger-card-list-item-text-title-disabled{color:#737376}.intercom-namespace .intercom-messenger-card-list-item-text-subtitle{font-size:14px;color:#737376}.intercom-namespace .intercom-messenger-card-list-item-text-subtitle-tertiary-text:not(:first-child):before{content:'\A0\2022\A0'}.intercom-namespace .intercom-messenger-card-list-item-active,.intercom-namespace .intercom-messenger-card-list-item-active *{cursor:pointer}.intercom-namespace .intercom-messenger-card-list-item-disabled{pointer-events:none;background-color:#fff}.intercom-namespace .intercom-messenger-card-list-item-active:hover{background-color:#fafafa}.intercom-namespace .intercom-messenger-card-list-item-active:active .intercom-messenger-card-list-item-action-arrow,.intercom-namespace .intercom-messenger-card-list-item-active:hover .intercom-messenger-card-list-item-action-arrow{border:solid #24b1ed;border-width:0 2px 2px 0}.intercom-namespace .intercom-messenger-card-list-item-active:active{background-color:#f8f8f8}.intercom-namespace .intercom-messenger-card-list-item .intercom-messenger-card-image{margin-bottom:0;margin-right:8px}.intercom-namespace .intercom-messenger-card-list-item:last-child{border-bottom:0}.intercom-namespace .intercom-messenger-card-data-table{margin:0 0 8px}.intercom-namespace .intercom-messenger-card-data-table-margin-bottom-none{margin-bottom:0}.intercom-namespace .intercom-messenger-card-field-value{background-color:#fff;vertical-align:top}.intercom-namespace .intercom-messenger-card-field-value-field{color:#737376;padding-right:8px}.intercom-namespace .intercom-messenger-card-field-value-value{color:#000}.intercom-namespace .intercom-messenger-card-input{margin-bottom:8px}.intercom-namespace .intercom-messenger-card-input-label{display:block;margin-bottom:8px}.intercom-namespace .intercom-messenger-card-input-last-component,.intercom-namespace .intercom-messenger-card-input-margin-bottom-none{margin-bottom:0}.intercom-namespace .intercom-messenger-card-input-overlay{position:absolute;top:0;left:0;right:0;bottom:0;zIndex:1;background:0 0}.intercom-namespace .intercom-messenger-card-dropdown{margin:0 0 8px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none}.intercom-namespace .intercom-messenger-card-dropdown-label{display:block}.intercom-namespace .intercom-messenger-card-dropdown-margin-bottom-none{margin-bottom:0}.intercom-namespace .intercom-messenger-card-dropdown-label{margin-bottom:5px;font-size:14px;line-height:21px}.intercom-namespace .intercom-messenger-card-single-select{margin:0 0 8px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none}.intercom-namespace .intercom-messenger-card-single-select-label{display:block}.intercom-namespace .intercom-messenger-card-textarea textarea-label{display:block;margin-bottom:8px}.intercom-namespace .intercom-messenger-card-single-select-margin-bottom-none,.intercom-namespace .intercom-messenger-card-textarea textarea-margin-bottom-none{margin-bottom:0}.intercom-namespace .intercom-messenger-card-single-select-label{margin-bottom:5px;font-size:14px;line-height:20px}.intercom-namespace .intercom-messenger-card-single-select .intercom-notification-channels-error{position:relative;top:-8px}.intercom-namespace .intercom-messenger-card-textarea-overlay{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1}.intercom-namespace .intercom-messenger-card-textarea{position:relative}.intercom-namespace .intercom-messenger-card-textarea textarea{width:100%;height:80px;padding:11px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;-webkit-box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.07);box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.07);border:1px solid #e1e1e1;color:#000;border-radius:4px;background:#fafafa;margin-bottom:8px;overflow-wrap:break-word}.intercom-namespace .intercom-messenger-card-textarea textarea::-webkit-input-placeholder{color:#737376}.intercom-namespace .intercom-messenger-card-textarea textarea::-moz-placeholder{color:#737376}.intercom-namespace .intercom-messenger-card-textarea.intercom-textarea-failed textarea{background-color:#fef0f0;color:#d22628;border-color:#fbdbdb}.intercom-namespace .intercom-chat{-webkit-animation:intercom-chat-animation 750ms ease;animation:intercom-chat-animation 750ms ease}.intercom-namespace .intercom-chat .intercom-chat-card-avatar{-webkit-animation:intercom-chat-card-avatar-animation 500ms ease;animation:intercom-chat-card-avatar-animation 500ms ease}.intercom-namespace .intercom-chat .intercom-chat-card-body{-webkit-animation:intercom-notification-body-animation 500ms ease;animation:intercom-notification-body-animation 500ms ease}.intercom-namespace .intercom-chat .intercom-chat-composer{-webkit-animation:intercom-chat-composer-animation 750ms ease;animation:intercom-chat-composer-animation 750ms ease}.intercom-namespace .intercom-booting-body-enter-active,.intercom-namespace .intercom-booting-body-exit-active{-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease}.intercom-namespace .intercom-booting-body-enter{opacity:0}.intercom-namespace .intercom-booting-body-enter-active,.intercom-namespace .intercom-booting-body-exit{opacity:1}.intercom-namespace .intercom-booting-body-exit-active{opacity:0}.intercom-namespace .intercom-note.intercom-message-enter{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.intercom-namespace .intercom-modal-exit.intercom-modal-exit-active .intercom-post,.intercom-namespace .intercom-note.intercom-message-enter.intercom-message-enter-active,.intercom-namespace .intercom-note.intercom-message-exit.intercom-message-exit-active{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity 200ms,-webkit-transform 200ms;transition:opacity 200ms,transform 200ms;transition:opacity 200ms,transform 200ms,-webkit-transform 200ms}.intercom-namespace .intercom-note.intercom-message-exit{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.intercom-namespace .intercom-modal-exit.intercom-modal-exit-active .intercom-post,.intercom-namespace .intercom-note.intercom-message-exit.intercom-message-exit-active{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.intercom-namespace .intercom-modal .intercom-post{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.intercom-namespace .intercom-modal-enter-active .intercom-post,.intercom-namespace .intercom-modal-enter-done .intercom-post{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity 200ms,-webkit-transform 200ms;transition:opacity 200ms,transform 200ms;transition:opacity 200ms,transform 200ms,-webkit-transform 200ms}.intercom-namespace .intercom-modal-exit .intercom-post{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.intercom-namespace .intercom-snippet-exit{opacity:1}.intercom-namespace .intercom-snippet-exit.intercom-snippet-exit-active{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px);-webkit-transition:opacity 200ms,-webkit-transform 200ms;transition:opacity 200ms,transform 200ms;transition:opacity 200ms,transform 200ms,-webkit-transform 200ms}.intercom-namespace .intercom-link-container.intercom-messenger-link-view-appear-active,.intercom-namespace .intercom-link-container.intercom-messenger-link-view-exit-active{-webkit-animation-name:intercom-messenger-link-view-appear-active;animation-name:intercom-messenger-link-view-appear-active;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-delay:1150ms;animation-delay:1150ms}.intercom-namespace .intercom-link-container.intercom-messenger-link-view-exit-active{-webkit-animation-name:intercom-messenger-link-view-exit-active;animation-name:intercom-messenger-link-view-exit-active;-webkit-animation-delay:0s;animation-delay:0s}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary,.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .new-conversation-button,.intercom-namespace .intercom-link-container.intercom-messenger-link-view-enter-active{-webkit-animation-name:intercom-messenger-link-view-enter-active;animation-name:intercom-messenger-link-view-enter-active;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-delay:250ms;animation-delay:250ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter{z-index:2147483001}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary,.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .new-conversation-button{-webkit-animation-name:intercom-new-conversation-button-enter;animation-name:intercom-new-conversation-button-enter}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary{-webkit-animation-name:intercom-conversation-summary-enter-right;animation-name:intercom-conversation-summary-enter-right}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-0{-webkit-animation-delay:220ms;animation-delay:220ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-1{-webkit-animation-delay:260ms;animation-delay:260ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-2{-webkit-animation-delay:300ms;animation-delay:300ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-3{-webkit-animation-delay:340ms;animation-delay:340ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-4{-webkit-animation-delay:380ms;animation-delay:380ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-5{-webkit-animation-delay:420ms;animation-delay:420ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-6{-webkit-animation-delay:460ms;animation-delay:460ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-7{-webkit-animation-delay:500ms;animation-delay:500ms}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary-8{-webkit-animation-delay:540ms;animation-delay:540ms}.intercom-namespace .intercom-messenger-from-conversation .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary,.intercom-namespace .intercom-messenger-from-new-conversation .intercom-conversations.intercom-messenger-body-view-enter .intercom-conversation-summary{-webkit-animation-name:intercom-conversation-summary-enter-left;animation-name:intercom-conversation-summary-enter-left}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-exit,.intercom-namespace .intercom-messenger-body-view-enter.intercom-conversation{z-index:2147483000}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-exit .intercom-conversation-summary,.intercom-namespace .intercom-conversations.intercom-messenger-body-view-exit .new-conversation-button{-webkit-animation-name:intercom-new-conversation-button-exit;animation-name:intercom-new-conversation-button-exit;-webkit-animation-duration:150ms;animation-duration:150ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversations.intercom-messenger-body-view-exit .intercom-conversation-summary{-webkit-animation-name:intercom-conversation-summary-exit-right;animation-name:intercom-conversation-summary-exit-right}.intercom-namespace .intercom-messenger-conversation .intercom-conversations.intercom-messenger-body-view-exit .intercom-conversation-summary,.intercom-namespace .intercom-messenger-new-conversation .intercom-conversations.intercom-messenger-body-view-exit .intercom-conversation-summary{-webkit-animation-name:intercom-conversation-summary-exit-left;animation-name:intercom-conversation-summary-exit-left}.intercom-namespace .intercom-messenger-body-view-exit.intercom-conversation{z-index:2147483001}.intercom-namespace .intercom-messenger-body-view-exit.intercom-conversation .intercom-conversation-parts{-webkit-animation-name:intercom-messenger-body-view-slide-right-out;animation-name:intercom-messenger-body-view-slide-right-out;-webkit-animation-duration:320ms;animation-duration:320ms;-webkit-animation-timing-function:cubic-bezier(.23,1,.32,1);animation-timing-function:cubic-bezier(.23,1,.32,1);-webkit-animation-delay:20ms;animation-delay:20ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversation .intercom-conversation-parts,.intercom-namespace .intercom-messenger-body-view-exit.intercom-conversation .intercom-conversation-body-bottom-group,.intercom-namespace .intercom-messenger-body-view-exit.intercom-conversation .intercom-conversation-footer,.intercom-namespace .intercom-messenger-body-view-exit.intercom-conversation .intercom-quick-replies{-webkit-animation-name:intercom-conversation-footer-slide-out;animation-name:intercom-conversation-footer-slide-out;-webkit-animation-duration:320ms;animation-duration:320ms;-webkit-animation-timing-function:cubic-bezier(.23,1,.32,1);animation-timing-function:cubic-bezier(.23,1,.32,1);-webkit-animation-delay:120ms;animation-delay:120ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversation .intercom-conversation-parts{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation-name:intercom-messenger-body-view-slide-left-in;animation-name:intercom-messenger-body-view-slide-left-in;-webkit-animation-delay:230ms;animation-delay:230ms;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.intercom-namespace .intercom-conversation .intercom-conversation-body-bottom-group,.intercom-namespace .intercom-conversation .intercom-conversation-footer,.intercom-namespace .intercom-conversation .intercom-quick-replies{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-name:intercom-conversation-footer-slide-in;animation-name:intercom-conversation-footer-slide-in;-webkit-animation-duration:320ms;animation-duration:320ms;-webkit-animation-timing-function:cubic-bezier(.23,1,.32,1);animation-timing-function:cubic-bezier(.23,1,.32,1);-webkit-animation-delay:80ms;animation-delay:80ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversation.intercom-conversation-fetching .intercom-conversation-body-bottom-group,.intercom-namespace .intercom-conversation.intercom-conversation-fetching .intercom-conversation-footer,.intercom-namespace .intercom-conversation.intercom-conversation-fetching .intercom-conversation-parts,.intercom-namespace .intercom-conversation.intercom-conversation-fetching .intercom-quick-replies{opacity:0;-webkit-animation:none;animation:none}.intercom-namespace .intercom-conversation-part-user.intercom-conversation-part-enter{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}.intercom-namespace .intercom-conversation-part-user.intercom-conversation-part-enter.intercom-conversation-part-enter-active{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity 200ms,-webkit-transform 200ms;transition:opacity 200ms,transform 200ms;transition:opacity 200ms,transform 200ms,-webkit-transform 200ms}.intercom-namespace .intercom-conversation-parts-scrolled .intercom-conversation-part-user.intercom-conversation-part-enter{-webkit-transform:translateY(0);transform:translateY(0)}.intercom-namespace .intercom-conversation-part-admin.intercom-conversation-part-enter{opacity:0}.intercom-namespace .intercom-conversation-part-admin.intercom-conversation-part-enter.intercom-conversation-part-enter-active{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms}.intercom-namespace .intercom-conversation-parts{-webkit-transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms,-webkit-transform 200ms;overflow-anchor:none}.intercom-namespace .intercom-conversation-parts-scrolling{-webkit-transition:none;transition:none}.intercom-namespace .intercom-conversation-rating-enter,.intercom-namespace .intercom-conversation-rating-remark-container-enter .intercom-conversation-rating-input-container{opacity:0}.intercom-namespace .intercom-conversation-rating-enter-active,.intercom-namespace .intercom-conversation-rating-remark-container-enter.intercom-conversation-rating-remark-container-enter-active .intercom-conversation-rating-input-container{opacity:1;-webkit-transition:opacity 300ms ease-in 150ms;transition:opacity 300ms ease-in 150ms}.intercom-namespace .intercom-conversation-rating-leave,.intercom-namespace .intercom-conversation-rating-remark-container-exit .intercom-conversation-rating-input-container{opacity:1}.intercom-namespace .intercom-conversation-rating-leave-active,.intercom-namespace .intercom-conversation-rating-remark-container-exit.intercom-conversation-rating-remark-container-exit-active .intercom-conversation-rating-input-container{opacity:0;-webkit-transition:opacity 300ms ease-in;transition:opacity 300ms ease-in}.intercom-namespace .intercom-conversation-rating-height{-webkit-transition:height 300ms ease-in-out;transition:height 300ms ease-in-out}.intercom-namespace .intercom-notification-channels-error-enter .intercom-notification-channels-error-text,.intercom-namespace .intercom-notification-channels.intercom-conversation-part-enter{opacity:0}.intercom-namespace .intercom-notification-channels.intercom-conversation-part-enter.intercom-conversation-part-enter-active{opacity:1;-webkit-transition:opacity 200ms ease-in 3000ms;transition:opacity 200ms ease-in 3000ms}.intercom-namespace .intercom-notification-channels-error-enter{height:0}.intercom-namespace .intercom-notification-channels-error-enter.intercom-notification-channels-error-enter-active{height:22px;-webkit-transition:height 300ms ease-in;transition:height 300ms ease-in}.intercom-namespace .intercom-notification-channels-error-enter.intercom-notification-channels-error-enter-active .intercom-notification-channels-error-text{opacity:1;-webkit-transition:opacity 300ms ease-in 150ms;transition:opacity 300ms ease-in 150ms}.intercom-namespace .intercom-notification-channels-error-exit{height:22px}.intercom-namespace .intercom-notification-channels-error-exit .intercom-notification-channels-error-text{opacity:1}.intercom-namespace .intercom-notification-channels-error-exit.intercom-notification-channels-error-exit-active{height:0;-webkit-transition:height 300ms ease-in 150ms;transition:height 300ms ease-in 150ms}.intercom-namespace .intercom-notification-channels-error-exit.intercom-notification-channels-error-exit-active .intercom-notification-channels-error-text{opacity:0;-webkit-transition:opacity 300ms ease-in;transition:opacity 300ms ease-in}.intercom-namespace .intercom-borderless-has-composer{-webkit-animation:intercom-borderless-animation 750ms ease;animation:intercom-borderless-animation 750ms ease}.intercom-namespace .intercom-borderless .intercom-borderless-avatar{-webkit-animation:intercom-borderless-avatar-animation 500ms ease;animation:intercom-borderless-avatar-animation 500ms ease}.intercom-namespace .intercom-borderless .intercom-borderless-body{-webkit-animation:intercom-borderless-body-animation 500ms ease;animation:intercom-borderless-body-animation 500ms ease}.intercom-namespace .intercom-borderless .intercom-attribute-collector-card-reply-type,.intercom-namespace .intercom-borderless .intercom-composer{-webkit-animation:intercom-borderless-composer-animation 750ms ease;animation:intercom-borderless-composer-animation 750ms ease}.intercom-namespace .intercom-modal .intercom-modal-overlay{opacity:0}.intercom-namespace .intercom-modal-enter-active .intercom-modal-overlay,.intercom-namespace .intercom-modal-enter-done .intercom-modal-overlay{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms}.intercom-namespace .intercom-modal-exit .intercom-modal-overlay{opacity:1}.intercom-namespace .intercom-modal-exit.intercom-modal-exit-active .intercom-modal-overlay{opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms}.intercom-namespace .intercom-modal .intercom-zoomed-image{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.intercom-namespace .intercom-modal-enter-active .intercom-zoomed-image,.intercom-namespace .intercom-modal-enter-done .intercom-zoomed-image,.intercom-namespace .intercom-modal-exit.intercom-modal-exit-active .intercom-zoomed-image{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity 200ms,-webkit-transform 200ms;transition:opacity 200ms,transform 200ms;transition:opacity 200ms,transform 200ms,-webkit-transform 200ms}.intercom-namespace .intercom-modal-exit .intercom-zoomed-image{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.intercom-namespace .intercom-modal-exit.intercom-modal-exit-active .intercom-zoomed-image{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.intercom-namespace .intercom-typing-admin.intercom-conversation-part-enter .intercom-typing-admin-avatar{-webkit-animation:animate-is-typing-avatar 100ms ease-in;animation:animate-is-typing-avatar 100ms ease-in}.intercom-namespace .intercom-typing-admin.intercom-conversation-part-enter .intercom-typing-admin-bubble{-webkit-animation:animate-is-typing-bubble 300ms ease-in;animation:animate-is-typing-bubble 300ms ease-in}.intercom-namespace .intercom-typing-admin.intercom-conversation-part-enter-active{-webkit-transition:-webkit-transform 100ms;transition:transform 100ms;transition:transform 100ms,-webkit-transform 100ms}.intercom-namespace .intercom-typing-admin.intercom-conversation-part-exit-active{-webkit-animation:collapse-is-typing-bubble 300ms 300ms ease-in;animation:collapse-is-typing-bubble 300ms 300ms ease-in}.intercom-namespace .intercom-typing-admin.intercom-conversation-part-exit-active .intercom-typing-admin-avatar{animation:animate-is-typing-avatar 100ms 200ms ease-in reverse}.intercom-namespace .intercom-typing-admin.intercom-conversation-part-exit-active .intercom-typing-admin-bubble{animation:animate-is-typing-bubble 300ms ease-in reverse}.intercom-namespace .intercom-typing-admin-bubble .intercom-typing-admin-dot-2{-webkit-animation-delay:.15s;animation-delay:.15s}.intercom-namespace .intercom-typing-admin-bubble .intercom-typing-admin-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.intercom-namespace .intercom-conversation-part-metadata-enter,.intercom-namespace .intercom-conversation-part-metadata-enter-active,.intercom-namespace .intercom-conversation-part-metadata-exit,.intercom-namespace .intercom-conversation-part-metadata-exit-active{display:none}.intercom-namespace .intercom-composer-popover-enter{opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px)}.intercom-namespace .intercom-composer-popover-enter-active,.intercom-namespace .intercom-composer-popover-exit{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.intercom-namespace .intercom-composer-popover-exit-active{opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px)}.intercom-namespace .intercom-composer-popover-enter-active,.intercom-namespace .intercom-composer-popover-exit-active{-webkit-transition:opacity ease 200ms,-webkit-transform ease 200ms;transition:opacity ease 200ms,transform ease 200ms;transition:opacity ease 200ms,transform ease 200ms,-webkit-transform ease 200ms}.intercom-namespace .intercom-messenger-card-wrapper{-webkit-transition-property:height;transition-property:height;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:300ms;transition-delay:300ms}.intercom-namespace .intercom-messenger-card-body-enter{opacity:0}.intercom-namespace .intercom-messenger-card-body-enter.intercom-messenger-card-body-enter-active,.intercom-namespace .intercom-messenger-card-body-leave.intercom-messenger-card-body-leave-active{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.intercom-namespace .intercom-messenger-card-body-enter.intercom-messenger-card-body-enter-active{-webkit-transition-delay:600ms;transition-delay:600ms;opacity:1}.intercom-namespace .intercom-messenger-card-body-leave{opacity:1}.intercom-namespace .intercom-messenger-card-body-leave.intercom-messenger-card-body-leave-active{opacity:0}.intercom-namespace .intercom-messenger-card-body-height,.intercom-namespace .intercom-messenger-card-component-enter.intercom-messenger-card-component-enter-active{-webkit-transition-property:height;transition-property:height;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:300ms;transition-delay:300ms}.intercom-namespace .intercom-messenger-card-component-enter{opacity:0}.intercom-namespace .intercom-messenger-card-component-enter.intercom-messenger-card-component-enter-active{opacity:1;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-delay:600ms;transition-delay:600ms}.intercom-namespace .intercom-messenger-sheet-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.intercom-namespace .intercom-messenger-sheet-enter.intercom-messenger-sheet-enter-active,.intercom-namespace .intercom-messenger-sheet-exit.intercom-messenger-sheet-exit-active{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.intercom-namespace .intercom-messenger-sheet-exit{-webkit-transform:translateY(0);transform:translateY(0)}.intercom-namespace .intercom-messenger-sheet-exit.intercom-messenger-sheet-exit-active{-webkit-transform:translateY(100%);transform:translateY(100%)}.intercom-namespace .intercom-pre-conversation-search-enter{opacity:0}.intercom-namespace .intercom-pre-conversation-search-enter-active{opacity:1;-webkit-transition:opacity ease 320ms 160ms;transition:opacity ease 320ms 160ms}.intercom-namespace .intercom-pre-conversation-search-appear{opacity:0}.intercom-namespace .intercom-pre-conversation-search-appear-active{opacity:1;-webkit-transition:opacity ease 320ms 160ms;transition:opacity ease 320ms 160ms}.intercom-namespace .intercom-pre-conversation-search-leave{opacity:1}.intercom-namespace .intercom-pre-conversation-search-leave-active{opacity:0;-webkit-transition:opacity ease 160ms;transition:opacity ease 160ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-home-screen-card,.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-card{-webkit-animation-name:intercom-home-screen-card-appear;animation-name:intercom-home-screen-card-appear;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-home-screen-conversation-card{-webkit-animation-delay:700ms;animation-delay:700ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-home-screen-messenger-card-0{-webkit-animation-delay:850ms;animation-delay:850ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-home-screen-messenger-card-1{-webkit-animation-delay:1000ms;animation-delay:1000ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-home-screen-messenger-card-2{-webkit-animation-delay:1150ms;animation-delay:1150ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-home-screen-messenger-card-3{-webkit-animation-delay:1300ms;animation-delay:1300ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-home-screen-messenger-card-4{-webkit-animation-delay:1450ms;animation-delay:1450ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-home-screen-messenger-card-5{-webkit-animation-delay:1600ms;animation-delay:1600ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-link,.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-card{-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-appear .intercom-link{-webkit-animation-delay:700ms;animation-delay:700ms;-webkit-animation-name:intercom-link-fade-in;animation-name:intercom-link-fade-in}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-card{-webkit-animation-name:intercom-home-screen-card-enter;animation-name:intercom-home-screen-card-enter}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-conversation-card{-webkit-animation-delay:.15s;animation-delay:.15s}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-0{-webkit-animation-delay:.3s;animation-delay:.3s}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-1{-webkit-animation-delay:.45s;animation-delay:.45s}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-2{-webkit-animation-delay:.6s;animation-delay:.6s}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-3{-webkit-animation-delay:.75s;animation-delay:.75s}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-4{-webkit-animation-delay:.9s;animation-delay:.9s}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-5{-webkit-animation-delay:1.05s;animation-delay:1.05s}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-enter .intercom-link{-webkit-animation-name:intercom-link-fade-in;animation-name:intercom-link-fade-in;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:.15s;animation-delay:.15s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-conversation-card{-webkit-animation-delay:550ms;animation-delay:550ms}.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-0{-webkit-animation-delay:700ms;animation-delay:700ms}.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-1{-webkit-animation-delay:850ms;animation-delay:850ms}.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-2{-webkit-animation-delay:1000ms;animation-delay:1000ms}.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-3{-webkit-animation-delay:1150ms;animation-delay:1150ms}.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-4{-webkit-animation-delay:1300ms;animation-delay:1300ms}.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-home-screen-messenger-card-5{-webkit-animation-delay:1450ms;animation-delay:1450ms}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-exit .intercom-home-screen-card,.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen.intercom-messenger-body-view-enter .intercom-link{-webkit-animation-name:intercom-link-fade-in;animation-name:intercom-link-fade-in;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-delay:550ms;animation-delay:550ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-exit .intercom-home-screen-card{-webkit-animation-name:intercom-home-screen-card-exit;animation-name:intercom-home-screen-card-exit;-webkit-animation-delay:0s;animation-delay:0s}.intercom-namespace .intercom-home-screen.intercom-messenger-body-view-exit .intercom-link{-webkit-animation-name:intercom-link-fade-out;animation-name:intercom-link-fade-out;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-timing-function:intercom-home-screen-card-transition-curve;animation-timing-function:intercom-home-screen-card-transition-curve;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-messenger-card-failed-animation-exit{opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.intercom-namespace .intercom-messenger-card-failed-animation-appear,.intercom-namespace .intercom-messenger-card-failed-animation-enter{opacity:0;-webkit-transition:none;transition:none}.intercom-namespace .intercom-messenger-card-failed-animation-appear-done,.intercom-namespace .intercom-messenger-card-failed-animation-enter-done{opacity:1;-webkit-transition:opacity .5s;transition:opacity .5s}.intercom-namespace .intercom-home-screen-conversation-card-body-enter{opacity:0}.intercom-namespace .intercom-home-screen-conversation-card-body-enter.intercom-home-screen-conversation-card-body-enter-active{opacity:1;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:600ms;transition-delay:600ms}.intercom-namespace .intercom-home-screen-conversation-card-body-leave{opacity:1}.intercom-namespace .intercom-home-screen-conversation-card-body-leave.intercom-home-screen-conversation-card-body-leave-active{opacity:0;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.intercom-namespace .intercom-home-screen-conversation-card-body-height{-webkit-transition-property:height;transition-property:height;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:300ms;transition-delay:300ms}.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-appear .intercom-home-screen-header-body,.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-appear .intercom-home-screen-header-close-button,.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-enter .intercom-home-screen-header-body{-webkit-animation-name:intercom-home-screen-header-body-appear;animation-name:intercom-home-screen-header-body-appear;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-delay:300ms;animation-delay:300ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-appear .intercom-home-screen-header-close-button,.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-enter .intercom-home-screen-header-body{-webkit-animation-name:intercom-home-screen-header-close-button-appear;animation-name:intercom-home-screen-header-close-button-appear}.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-enter .intercom-home-screen-header-body{-webkit-animation-name:intercom-home-screen-header-body-enter;animation-name:intercom-home-screen-header-body-enter;-webkit-animation-delay:150ms;animation-delay:150ms}.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-enter .intercom-messenger-header-buttons-close-button,.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen-header.intercom-messenger-header-view-enter .intercom-home-screen-header-body{-webkit-animation-name:intercom-home-screen-header-close-button-enter;animation-name:intercom-home-screen-header-close-button-enter;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-delay:150ms;animation-delay:150ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-messenger-from-booting .intercom-home-screen-header.intercom-messenger-header-view-enter .intercom-home-screen-header-body{-webkit-animation-name:intercom-home-screen-header-body-appear;animation-name:intercom-home-screen-header-body-appear;-webkit-animation-delay:0s;animation-delay:0s}.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-enter .intercom-conversation-header-body,.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-exit .intercom-home-screen-header-body,.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-exit .intercom-messenger-header-buttons-close-button{-webkit-animation-name:intercom-home-screen-header-body-leave;animation-name:intercom-home-screen-header-body-leave;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-enter .intercom-conversation-header-body,.intercom-namespace .intercom-home-screen-header.intercom-messenger-header-view-exit .intercom-messenger-header-buttons-close-button{-webkit-animation-name:intercom-home-screen-header-close-button-leave;animation-name:intercom-home-screen-header-close-button-leave}.intercom-namespace .intercom-conversation-body-bottom-group-enter{opacity:.01}.intercom-namespace .intercom-conversation-body-bottom-group-enter.intercom-conversation-body-bottom-group-enter-active{opacity:1;-webkit-transition:opacity 100ms ease-in 300ms;transition:opacity 100ms ease-in 300ms}.intercom-namespace .intercom-conversation-body-bottom-group-exit{opacity:1}.intercom-namespace .intercom-conversation-body-bottom-group-exit.intercom-conversation-body-bottom-group-exit-active{opacity:0;-webkit-transition:opacity 100ms ease-out;transition:opacity 100ms ease-out}.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-enter .intercom-conversation-header-body{-webkit-animation-name:intercom-conversation-header-body-enter;animation-name:intercom-conversation-header-body-enter;-webkit-animation-delay:250ms;animation-delay:250ms}.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-enter .intercom-conversation-header-back-button,.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-enter .intercom-conversation-header-close-button,.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-enter .intercom-download-transcript-button,.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-exit .intercom-conversation-header-body{-webkit-animation-name:intercom-conversation-header-button-enter;animation-name:intercom-conversation-header-button-enter;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-delay:250ms;animation-delay:250ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-exit .intercom-conversation-header-body{-webkit-animation-name:intercom-conversation-header-body-leave;animation-name:intercom-conversation-header-body-leave;-webkit-animation-delay:0s;animation-delay:0s}.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-exit .intercom-conversation-header-back-button,.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-exit .intercom-conversation-header-close-button,.intercom-namespace .intercom-conversation-header.intercom-messenger-header-view-exit .intercom-download-transcript-button{-webkit-animation-name:intercom-conversation-header-button-leave;animation-name:intercom-conversation-header-button-leave;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-back-button,.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-body,.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-close-button{-webkit-animation-name:intercom-conversations-header-body-enter-right;animation-name:intercom-conversations-header-body-enter-right;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-delay:250ms;animation-delay:250ms;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-back-button,.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-close-button{-webkit-animation-name:intercom-conversations-header-back-button-enter-right;animation-name:intercom-conversations-header-back-button-enter-right}.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-close-button{-webkit-animation-name:intercom-conversations-header-close-button-enter-right;animation-name:intercom-conversations-header-close-button-enter-right}.intercom-namespace .intercom-messenger-from-conversation .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-body,.intercom-namespace .intercom-messenger-from-new-conversation .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-body{-webkit-animation-name:intercom-conversations-header-body-enter-left;animation-name:intercom-conversations-header-body-enter-left}.intercom-namespace .intercom-messenger-from-conversation .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-back-button,.intercom-namespace .intercom-messenger-from-new-conversation .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-back-button{-webkit-animation-name:intercom-conversations-header-back-button-enter-left;animation-name:intercom-conversations-header-back-button-enter-left}.intercom-namespace .intercom-messenger-from-conversation .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-close-button,.intercom-namespace .intercom-messenger-from-new-conversation .intercom-conversations-header.intercom-messenger-header-view-enter .intercom-conversations-header-close-button{-webkit-animation-name:intercom-conversations-header-close-button-enter-left;animation-name:intercom-conversations-header-close-button-enter-left}.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-back-button,.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-body,.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-close-button{-webkit-animation-name:intercom-conversations-header-body-leave-right;animation-name:intercom-conversations-header-body-leave-right;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-back-button,.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-close-button{-webkit-animation-name:intercom-conversations-header-back-button-leave-right;animation-name:intercom-conversations-header-back-button-leave-right}.intercom-namespace .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-close-button{-webkit-animation-name:intercom-conversations-header-close-button-leave-right;animation-name:intercom-conversations-header-close-button-leave-right}.intercom-namespace .intercom-messenger-conversation .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-body,.intercom-namespace .intercom-messenger-new-conversation .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-body{-webkit-animation-name:intercom-conversations-header-body-leave-left;animation-name:intercom-conversations-header-body-leave-left}.intercom-namespace .intercom-messenger-conversation .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-back-button,.intercom-namespace .intercom-messenger-new-conversation .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-back-button{-webkit-animation-name:intercom-conversations-header-back-button-leave-left;animation-name:intercom-conversations-header-back-button-leave-left}.intercom-namespace .intercom-messenger-conversation .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-close-button,.intercom-namespace .intercom-messenger-new-conversation .intercom-conversations-header.intercom-messenger-header-view-exit .intercom-conversations-header-close-button{-webkit-animation-name:intercom-conversations-header-close-button-leave-left;animation-name:intercom-conversations-header-close-button-leave-left}.intercom-namespace .intercom-spinner-animation-appear,.intercom-namespace .intercom-spinner-animation-enter{opacity:0}.intercom-namespace .intercom-spinner-animation-appear.intercom-spinner-animation-appear-active,.intercom-namespace .intercom-spinner-animation-enter.intercom-spinner-animation-enter-active{opacity:1;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:600ms;transition-timing-function:600ms;-webkit-transition-delay:ease-in-out;transition-delay:ease-in-out}.intercom-namespace .intercom-spinner-animation-exit{opacity:1}.intercom-namespace .intercom-spinner-animation-exit.intercom-spinner-animation-exit-active{opacity:.01;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.intercom-namespace .intercom-messenger-card-error-animation-appear,.intercom-namespace .intercom-messenger-card-error-animation-enter{opacity:0;display:none}.intercom-namespace .intercom-messenger-card-error-animation-enter-done{opacity:1;-webkit-transition:opacity .3s;transition:opacity .3s;display:block}.intercom-namespace .intercom-messenger-card-error-animation-exit,.intercom-namespace .intercom-messenger-from-home-screen .intercom-messenger-card-error-animation-enter-done,.intercom-namespace .intercom-messenger-new-conversation .intercom-messenger-card-error-animation-enter-done{opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.intercom-namespace .intercom-messenger-card-error-animation-exit-done{display:none}@media only screen and (max-device-width:667px),screen and (max-width:450px){.intercom-namespace .intercom-note,.intercom-namespace .intercom-pointer,.intercom-namespace .intercom-post{-webkit-text-size-adjust:100%}.intercom-namespace .intercom-admin-profile-compact,.intercom-namespace .intercom-team-profile-compact{right:8px}.intercom-namespace .intercom-is-mobile-screen-size .intercom-admin-profile-compact,.intercom-namespace .intercom-is-mobile-screen-size .intercom-team-profile-compact{right:61px}.intercom-namespace .intercom-post-container{padding:0}}@media only screen and (max-device-width:667px){.intercom-namespace .intercom-notifications{width:260px}.intercom-namespace .intercom-chat-card-borderless .intercom-block-video-file{width:220px;height:165px}.intercom-namespace .intercom-chat-card-borderless.intercom-chat-card-borderless-single .intercom-block-video-file{width:260px;height:195px;margin-top:20px}.intercom-namespace .intercom-chat-snippet{width:100%}.intercom-namespace .intercom-snippet{margin:0 auto;width:calc(100% - 20px)}}@supports (-webkit-overflow-scrolling:touch){@media only screen and (min-device-width:768px){.intercom-namespace .intercom-chat-card-borderless.intercom-chat-card-borderless-single .intercom-block-video-file{width:240px;height:180px;margin-top:20px}.intercom-namespace .intercom-chat-card-borderless .intercom-block-video-file{width:200px;height:150px}}}.intercom-namespace .intercom-fallback-card-error{position:absolute;width:calc(100% - 2px);margin:20px 0}.intercom-namespace .intercom-fallback-card-error-header{font-size:18px;text-align:center;padding-bottom:6px}.intercom-namespace .intercom-fallback-card-error-message{font-size:16px;text-align:center;color:#737376}.intercom-namespace .intercom-fallback-card-button-container{text-align:center}.intercom-namespace .intercom-fallback-card-retry-button{font-size:16px;background-color:#24b1ed;color:#fff;margin-top:20px;padding:10px 30px;border-radius:4px;-webkit-tap-highlight-color:rgba(36, 177, 237, 0.5);-webkit-touch-callout:none;-webkit-user-select:none}.intercom-namespace .intercom-messenger-card-view-app{margin:60px 0}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-wrapper{margin-left:auto;margin-right:auto}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-wrapper,.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-sheet{width:376px;-webkit-box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5);box-shadow:0 4px 15px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.1),inset 0 2px 0 0 rgba(36, 177, 237, 0.5)}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-wrapper{overflow:hidden}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-sheet{height:704px;border-radius:8px;overflow:hidden;position:absolute;margin:60px auto}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-modal{position:fixed;top:0;bottom:0;right:0;left:0}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-container{position:absolute;top:0;left:0;width:100%;height:100%;overflow-y:auto;background-color:#3a3b3e}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-animation-enter{opacity:0}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-animation-enter.intercom-messenger-card-animation-enter-active{-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:750ms;animation-duration:750ms;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-modal-enter .intercom-messenger-card-view-sheet-container .intercom-messenger-sheet{-webkit-transform:translateY(10%);transform:translateY(10%)}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-modal-enter.intercom-messenger-card-view-sheet-modal-enter-active .intercom-messenger-card-view-sheet-container,.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-modal-exit.intercom-messenger-card-view-sheet-modal-exit-active .intercom-messenger-card-view-sheet-container{-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:150ms;animation-duration:150ms;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-modal-enter.intercom-messenger-card-view-sheet-modal-enter-active .intercom-messenger-card-view-sheet-container .intercom-messenger-sheet,.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-modal-exit.intercom-messenger-card-view-sheet-modal-exit-active .intercom-messenger-card-view-sheet-container .intercom-messenger-sheet{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-modal-exit.intercom-messenger-card-view-sheet-modal-exit-active .intercom-messenger-card-view-sheet-container{animation-direction:reverse}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-sheet-modal-exit.intercom-messenger-card-view-sheet-modal-exit-active .intercom-messenger-card-view-sheet-container .intercom-messenger-sheet{-webkit-transform:translateY(10%);transform:translateY(10%)}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-error{padding:20px 0;margin:0 50px}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-error .intercom-messenger-card-view-error-header{font-size:18px;text-align:center;margin-bottom:16px}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-error .intercom-messenger-card-view-error-message{font-size:16px;text-align:center;color:#737376}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-error .intercom-messenger-card-view-button-container{text-align:center}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-error .intercom-messenger-card-view-retry-button{font-size:16px;background-color:#24b1ed;color:#fff;margin-top:20px;padding:10px 30px;border-radius:4px;-webkit-tap-highlight-color:rgba(36, 177, 237, 0.5);-webkit-touch-callout:none;-webkit-user-select:none}.intercom-namespace .intercom-messenger-card-view-app .intercom-link-container-icon>g{fill:#dae1e6}.intercom-namespace .intercom-messenger-card-view-app .intercom-link-text{color:#a8b6c2}.intercom-namespace .intercom-messenger-card-view-app .intercom-messenger-card-view-loading-spinner{top:120px;left:50%;position:absolute}.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-card-wrapper{width:100%;margin:0;position:absolute;top:0;bottom:0;right:0;left:0;border:0;border-radius:0}.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-card-view-sheet-container{background:0 0}.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-sheet{position:absolute;height:auto;width:auto;overflow:auto;border-radius:0;border:0;margin:auto}.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-card-view-sheet-modal-enter .intercom-messenger-card-view-sheet-container .intercom-messenger-sheet{-webkit-transform:translateY(100%);transform:translateY(100%)}.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-card-view-sheet-modal-enter.intercom-messenger-card-view-sheet-modal-enter-active .intercom-messenger-card-view-sheet-container,.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-card-view-sheet-modal-exit.intercom-messenger-card-view-sheet-modal-exit-active .intercom-messenger-card-view-sheet-container{-webkit-animation:none;animation:none}.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-card-view-sheet-modal-enter.intercom-messenger-card-view-sheet-modal-enter-active .intercom-messenger-card-view-sheet-container .intercom-messenger-sheet{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition-duration:300ms;transition-duration:300ms}.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-card-view-sheet-modal-exit.intercom-messenger-card-view-sheet-modal-exit-active .intercom-messenger-card-view-sheet-container .intercom-messenger-sheet{-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition-duration:300ms;transition-duration:300ms}.intercom-namespace .intercom-messenger-card-view-app.intercom-is-mobile-screen-size .intercom-messenger-card-view-loading-spinner{top:50%} @media only screen and (max-device-width:667px),screen and (max-width:369px),screen and (min-width:371px),screen and (min-height:705px){.intercom-messenger{-webkit-text-size-adjust:100%}.intercom-admin-profile-full .intercom-admin-profile-full-admin-name{width:100px}.intercom-admin-profile-full .intercom-admin-profile-full-last-active{width:140px}.intercom-admin-profile-collapsed:hover .intercom-admin-profile-compact-contents,.intercom-admin-profile-collapsed:hover .intercom-team-profile-compact-contents,.intercom-team-profile-collapsed:hover .intercom-admin-profile-compact-contents,.intercom-team-profile-collapsed:hover .intercom-team-profile-compact-contents{background-color:inherit}.intercom-sticker-native{font-size:inherit}.intercom-composer textarea{background-color:#fafafa}.intercom-header-buttons-close{display:block!important}}</style><link rel="stylesheet" type="text/css" href="/css/11.cb9d2.css"><script charset="utf-8" src="/js/survey-modal.2cee5.js"></script><script src="https://www.googleadservices.com/pagead/conversion/967079204/?random=1554812326226&amp;cv=9&amp;fst=1554812326226&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=14&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;tiba=Milestone%202%20-%20Intro%20to%20Javascript%20%26%20The%20DOM%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/967079204/?random=1554812326233&amp;cv=9&amp;fst=1554812326233&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=14&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;data=degree_key%3Dnd001-1mac-v2%3Bpart_key%3D000fb1b1-f266-47b1-8bc8-ad6f350f9861%3Bmodule_key%3Dd4046b59-2c04-48c5-949a-8c0097cbc231%3Blesson_key%3D037b9245-6441-446d-8bfd-ebe6157a3d15%3Bconcept_key%3D7fd35ca2-89d6-4ef4-ae30-8da29f403ece%3Bname%3DMy%20Nanodegree%20Classroom%20-%20nd001-1mac-v2%3Bpath%3D%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece%3Breferrer%3D%3Bsearch%3D%3Btitle%3DMilestone%202%20-%20Intro%20to%20Javascript%20%26%20The%20DOM%20-%20Udacity%3Burl%3Dhttps%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;tiba=Milestone%202%20-%20Intro%20to%20Javascript%20%26%20The%20DOM%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="https://www.googleadservices.com/pagead/conversion/967079204/?random=1554812458295&amp;cv=9&amp;fst=1554812458295&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=16&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;tiba=Pixel%20Art%20Maker%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/967079204/?random=1554812458302&amp;cv=9&amp;fst=1554812458302&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=16&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;data=degree_key%3Dnd001-1mac-v2%3Bpart_key%3D000fb1b1-f266-47b1-8bc8-ad6f350f9861%3Bmodule_key%3Dd4046b59-2c04-48c5-949a-8c0097cbc231%3Blesson_key%3D037b9245-6441-446d-8bfd-ebe6157a3d15%3Bconcept_key%3D7fd35ca2-89d6-4ef4-ae30-8da29f403ece%3Bname%3DMy%20Nanodegree%20Classroom%20-%20nd001-1mac-v2%3Bpath%3D%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece%3Breferrer%3D%3Bsearch%3D%3Btitle%3DPixel%20Art%20Maker%20-%20Udacity%3Burl%3Dhttps%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;tiba=Pixel%20Art%20Maker%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="https://www.googleadservices.com/pagead/conversion/967079204/?random=1554812662053&amp;cv=9&amp;fst=1554812662053&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=18&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;tiba=Pixel%20Art%20Maker%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/967079204/?random=1554812662064&amp;cv=9&amp;fst=1554812662064&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=18&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;data=degree_key%3Dnd001-1mac-v2%3Bpart_key%3D000fb1b1-f266-47b1-8bc8-ad6f350f9861%3Bmodule_key%3Dd4046b59-2c04-48c5-949a-8c0097cbc231%3Blesson_key%3D037b9245-6441-446d-8bfd-ebe6157a3d15%3Bconcept_key%3D7fd35ca2-89d6-4ef4-ae30-8da29f403ece%3Bname%3DMy%20Nanodegree%20Classroom%20-%20nd001-1mac-v2%3Bpath%3D%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece%3Breferrer%3D%3Bsearch%3D%3Btitle%3DPixel%20Art%20Maker%20-%20Udacity%3Burl%3Dhttps%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Fconcepts%2F7fd35ca2-89d6-4ef4-ae30-8da29f403ece&amp;tiba=Pixel%20Art%20Maker%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><link rel="stylesheet" type="text/css" href="/css/18.b7f56.css"><script charset="utf-8" src="/js/18.43403.js"></script><style type="text/css">/*!
 *  Font Awesome 4.1.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
 @font-face{font-family:'FontAwesome';src:url(/images/fontawesome-webfont-25a32.eot);src:url(/images/fontawesome-webfont-25a32.eot?#iefix&v=4.1.0) format('embedded-opentype'),url(/images/fontawesome-webfont-fdf49.woff) format('woff'),url(/images/fontawesome-webfont-4f002.ttf) format('truetype'),url(/images/fontawesome-webfont-d7c63.svg#fontawesomeregular) format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:spin 2s infinite linear;-moz-animation:spin 2s infinite linear;-o-animation:spin 2s infinite linear;animation:spin 2s infinite linear}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg)}100%{-moz-transform:rotate(359deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg)}100%{-o-transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-ms-transform:rotate(270deg);-o-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);-moz-transform:scale(-1, 1);-ms-transform:scale(-1, 1);-o-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);-moz-transform:scale(1, -1);-ms-transform:scale(1, -1);-o-transform:scale(1, -1);transform:scale(1, -1)}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\F000"}.fa-music:before{content:"\F001"}.fa-search:before{content:"\F002"}.fa-envelope-o:before{content:"\F003"}.fa-heart:before{content:"\F004"}.fa-star:before{content:"\F005"}.fa-star-o:before{content:"\F006"}.fa-user:before{content:"\F007"}.fa-film:before{content:"\F008"}.fa-th-large:before{content:"\F009"}.fa-th:before{content:"\F00A"}.fa-th-list:before{content:"\F00B"}.fa-check:before{content:"\F00C"}.fa-times:before{content:"\F00D"}.fa-search-plus:before{content:"\F00E"}.fa-search-minus:before{content:"\F010"}.fa-power-off:before{content:"\F011"}.fa-signal:before{content:"\F012"}.fa-gear:before,.fa-cog:before{content:"\F013"}.fa-trash-o:before{content:"\F014"}.fa-home:before{content:"\F015"}.fa-file-o:before{content:"\F016"}.fa-clock-o:before{content:"\F017"}.fa-road:before{content:"\F018"}.fa-download:before{content:"\F019"}.fa-arrow-circle-o-down:before{content:"\F01A"}.fa-arrow-circle-o-up:before{content:"\F01B"}.fa-inbox:before{content:"\F01C"}.fa-play-circle-o:before{content:"\F01D"}.fa-rotate-right:before,.fa-repeat:before{content:"\F01E"}.fa-refresh:before{content:"\F021"}.fa-list-alt:before{content:"\F022"}.fa-lock:before{content:"\F023"}.fa-flag:before{content:"\F024"}.fa-headphones:before{content:"\F025"}.fa-volume-off:before{content:"\F026"}.fa-volume-down:before{content:"\F027"}.fa-volume-up:before{content:"\F028"}.fa-qrcode:before{content:"\F029"}.fa-barcode:before{content:"\F02A"}.fa-tag:before{content:"\F02B"}.fa-tags:before{content:"\F02C"}.fa-book:before{content:"\F02D"}.fa-bookmark:before{content:"\F02E"}.fa-print:before{content:"\F02F"}.fa-camera:before{content:"\F030"}.fa-font:before{content:"\F031"}.fa-bold:before{content:"\F032"}.fa-italic:before{content:"\F033"}.fa-text-height:before{content:"\F034"}.fa-text-width:before{content:"\F035"}.fa-align-left:before{content:"\F036"}.fa-align-center:before{content:"\F037"}.fa-align-right:before{content:"\F038"}.fa-align-justify:before{content:"\F039"}.fa-list:before{content:"\F03A"}.fa-dedent:before,.fa-outdent:before{content:"\F03B"}.fa-indent:before{content:"\F03C"}.fa-video-camera:before{content:"\F03D"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\F03E"}.fa-pencil:before{content:"\F040"}.fa-map-marker:before{content:"\F041"}.fa-adjust:before{content:"\F042"}.fa-tint:before{content:"\F043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\F044"}.fa-share-square-o:before{content:"\F045"}.fa-check-square-o:before{content:"\F046"}.fa-arrows:before{content:"\F047"}.fa-step-backward:before{content:"\F048"}.fa-fast-backward:before{content:"\F049"}.fa-backward:before{content:"\F04A"}.fa-play:before{content:"\F04B"}.fa-pause:before{content:"\F04C"}.fa-stop:before{content:"\F04D"}.fa-forward:before{content:"\F04E"}.fa-fast-forward:before{content:"\F050"}.fa-step-forward:before{content:"\F051"}.fa-eject:before{content:"\F052"}.fa-chevron-left:before{content:"\F053"}.fa-chevron-right:before{content:"\F054"}.fa-plus-circle:before{content:"\F055"}.fa-minus-circle:before{content:"\F056"}.fa-times-circle:before{content:"\F057"}.fa-check-circle:before{content:"\F058"}.fa-question-circle:before{content:"\F059"}.fa-info-circle:before{content:"\F05A"}.fa-crosshairs:before{content:"\F05B"}.fa-times-circle-o:before{content:"\F05C"}.fa-check-circle-o:before{content:"\F05D"}.fa-ban:before{content:"\F05E"}.fa-arrow-left:before{content:"\F060"}.fa-arrow-right:before{content:"\F061"}.fa-arrow-up:before{content:"\F062"}.fa-arrow-down:before{content:"\F063"}.fa-mail-forward:before,.fa-share:before{content:"\F064"}.fa-expand:before{content:"\F065"}.fa-compress:before{content:"\F066"}.fa-plus:before{content:"\F067"}.fa-minus:before{content:"\F068"}.fa-asterisk:before{content:"\F069"}.fa-exclamation-circle:before{content:"\F06A"}.fa-gift:before{content:"\F06B"}.fa-leaf:before{content:"\F06C"}.fa-fire:before{content:"\F06D"}.fa-eye:before{content:"\F06E"}.fa-eye-slash:before{content:"\F070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\F071"}.fa-plane:before{content:"\F072"}.fa-calendar:before{content:"\F073"}.fa-random:before{content:"\F074"}.fa-comment:before{content:"\F075"}.fa-magnet:before{content:"\F076"}.fa-chevron-up:before{content:"\F077"}.fa-chevron-down:before{content:"\F078"}.fa-retweet:before{content:"\F079"}.fa-shopping-cart:before{content:"\F07A"}.fa-folder:before{content:"\F07B"}.fa-folder-open:before{content:"\F07C"}.fa-arrows-v:before{content:"\F07D"}.fa-arrows-h:before{content:"\F07E"}.fa-bar-chart-o:before{content:"\F080"}.fa-twitter-square:before{content:"\F081"}.fa-facebook-square:before{content:"\F082"}.fa-camera-retro:before{content:"\F083"}.fa-key:before{content:"\F084"}.fa-gears:before,.fa-cogs:before{content:"\F085"}.fa-comments:before{content:"\F086"}.fa-thumbs-o-up:before{content:"\F087"}.fa-thumbs-o-down:before{content:"\F088"}.fa-star-half:before{content:"\F089"}.fa-heart-o:before{content:"\F08A"}.fa-sign-out:before{content:"\F08B"}.fa-linkedin-square:before{content:"\F08C"}.fa-thumb-tack:before{content:"\F08D"}.fa-external-link:before{content:"\F08E"}.fa-sign-in:before{content:"\F090"}.fa-trophy:before{content:"\F091"}.fa-github-square:before{content:"\F092"}.fa-upload:before{content:"\F093"}.fa-lemon-o:before{content:"\F094"}.fa-phone:before{content:"\F095"}.fa-square-o:before{content:"\F096"}.fa-bookmark-o:before{content:"\F097"}.fa-phone-square:before{content:"\F098"}.fa-twitter:before{content:"\F099"}.fa-facebook:before{content:"\F09A"}.fa-github:before{content:"\F09B"}.fa-unlock:before{content:"\F09C"}.fa-credit-card:before{content:"\F09D"}.fa-rss:before{content:"\F09E"}.fa-hdd-o:before{content:"\F0A0"}.fa-bullhorn:before{content:"\F0A1"}.fa-bell:before{content:"\F0F3"}.fa-certificate:before{content:"\F0A3"}.fa-hand-o-right:before{content:"\F0A4"}.fa-hand-o-left:before{content:"\F0A5"}.fa-hand-o-up:before{content:"\F0A6"}.fa-hand-o-down:before{content:"\F0A7"}.fa-arrow-circle-left:before{content:"\F0A8"}.fa-arrow-circle-right:before{content:"\F0A9"}.fa-arrow-circle-up:before{content:"\F0AA"}.fa-arrow-circle-down:before{content:"\F0AB"}.fa-globe:before{content:"\F0AC"}.fa-wrench:before{content:"\F0AD"}.fa-tasks:before{content:"\F0AE"}.fa-filter:before{content:"\F0B0"}.fa-briefcase:before{content:"\F0B1"}.fa-arrows-alt:before{content:"\F0B2"}.fa-group:before,.fa-users:before{content:"\F0C0"}.fa-chain:before,.fa-link:before{content:"\F0C1"}.fa-cloud:before{content:"\F0C2"}.fa-flask:before{content:"\F0C3"}.fa-cut:before,.fa-scissors:before{content:"\F0C4"}.fa-copy:before,.fa-files-o:before{content:"\F0C5"}.fa-paperclip:before{content:"\F0C6"}.fa-save:before,.fa-floppy-o:before{content:"\F0C7"}.fa-square:before{content:"\F0C8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\F0C9"}.fa-list-ul:before{content:"\F0CA"}.fa-list-ol:before{content:"\F0CB"}.fa-strikethrough:before{content:"\F0CC"}.fa-underline:before{content:"\F0CD"}.fa-table:before{content:"\F0CE"}.fa-magic:before{content:"\F0D0"}.fa-truck:before{content:"\F0D1"}.fa-pinterest:before{content:"\F0D2"}.fa-pinterest-square:before{content:"\F0D3"}.fa-google-plus-square:before{content:"\F0D4"}.fa-google-plus:before{content:"\F0D5"}.fa-money:before{content:"\F0D6"}.fa-caret-down:before{content:"\F0D7"}.fa-caret-up:before{content:"\F0D8"}.fa-caret-left:before{content:"\F0D9"}.fa-caret-right:before{content:"\F0DA"}.fa-columns:before{content:"\F0DB"}.fa-unsorted:before,.fa-sort:before{content:"\F0DC"}.fa-sort-down:before,.fa-sort-desc:before{content:"\F0DD"}.fa-sort-up:before,.fa-sort-asc:before{content:"\F0DE"}.fa-envelope:before{content:"\F0E0"}.fa-linkedin:before{content:"\F0E1"}.fa-rotate-left:before,.fa-undo:before{content:"\F0E2"}.fa-legal:before,.fa-gavel:before{content:"\F0E3"}.fa-dashboard:before,.fa-tachometer:before{content:"\F0E4"}.fa-comment-o:before{content:"\F0E5"}.fa-comments-o:before{content:"\F0E6"}.fa-flash:before,.fa-bolt:before{content:"\F0E7"}.fa-sitemap:before{content:"\F0E8"}.fa-umbrella:before{content:"\F0E9"}.fa-paste:before,.fa-clipboard:before{content:"\F0EA"}.fa-lightbulb-o:before{content:"\F0EB"}.fa-exchange:before{content:"\F0EC"}.fa-cloud-download:before{content:"\F0ED"}.fa-cloud-upload:before{content:"\F0EE"}.fa-user-md:before{content:"\F0F0"}.fa-stethoscope:before{content:"\F0F1"}.fa-suitcase:before{content:"\F0F2"}.fa-bell-o:before{content:"\F0A2"}.fa-coffee:before{content:"\F0F4"}.fa-cutlery:before{content:"\F0F5"}.fa-file-text-o:before{content:"\F0F6"}.fa-building-o:before{content:"\F0F7"}.fa-hospital-o:before{content:"\F0F8"}.fa-ambulance:before{content:"\F0F9"}.fa-medkit:before{content:"\F0FA"}.fa-fighter-jet:before{content:"\F0FB"}.fa-beer:before{content:"\F0FC"}.fa-h-square:before{content:"\F0FD"}.fa-plus-square:before{content:"\F0FE"}.fa-angle-double-left:before{content:"\F100"}.fa-angle-double-right:before{content:"\F101"}.fa-angle-double-up:before{content:"\F102"}.fa-angle-double-down:before{content:"\F103"}.fa-angle-left:before{content:"\F104"}.fa-angle-right:before{content:"\F105"}.fa-angle-up:before{content:"\F106"}.fa-angle-down:before{content:"\F107"}.fa-desktop:before{content:"\F108"}.fa-laptop:before{content:"\F109"}.fa-tablet:before{content:"\F10A"}.fa-mobile-phone:before,.fa-mobile:before{content:"\F10B"}.fa-circle-o:before{content:"\F10C"}.fa-quote-left:before{content:"\F10D"}.fa-quote-right:before{content:"\F10E"}.fa-spinner:before{content:"\F110"}.fa-circle:before{content:"\F111"}.fa-mail-reply:before,.fa-reply:before{content:"\F112"}.fa-github-alt:before{content:"\F113"}.fa-folder-o:before{content:"\F114"}.fa-folder-open-o:before{content:"\F115"}.fa-smile-o:before{content:"\F118"}.fa-frown-o:before{content:"\F119"}.fa-meh-o:before{content:"\F11A"}.fa-gamepad:before{content:"\F11B"}.fa-keyboard-o:before{content:"\F11C"}.fa-flag-o:before{content:"\F11D"}.fa-flag-checkered:before{content:"\F11E"}.fa-terminal:before{content:"\F120"}.fa-code:before{content:"\F121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\F122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\F123"}.fa-location-arrow:before{content:"\F124"}.fa-crop:before{content:"\F125"}.fa-code-fork:before{content:"\F126"}.fa-unlink:before,.fa-chain-broken:before{content:"\F127"}.fa-question:before{content:"\F128"}.fa-info:before{content:"\F129"}.fa-exclamation:before{content:"\F12A"}.fa-superscript:before{content:"\F12B"}.fa-subscript:before{content:"\F12C"}.fa-eraser:before{content:"\F12D"}.fa-puzzle-piece:before{content:"\F12E"}.fa-microphone:before{content:"\F130"}.fa-microphone-slash:before{content:"\F131"}.fa-shield:before{content:"\F132"}.fa-calendar-o:before{content:"\F133"}.fa-fire-extinguisher:before{content:"\F134"}.fa-rocket:before{content:"\F135"}.fa-maxcdn:before{content:"\F136"}.fa-chevron-circle-left:before{content:"\F137"}.fa-chevron-circle-right:before{content:"\F138"}.fa-chevron-circle-up:before{content:"\F139"}.fa-chevron-circle-down:before{content:"\F13A"}.fa-html5:before{content:"\F13B"}.fa-css3:before{content:"\F13C"}.fa-anchor:before{content:"\F13D"}.fa-unlock-alt:before{content:"\F13E"}.fa-bullseye:before{content:"\F140"}.fa-ellipsis-h:before{content:"\F141"}.fa-ellipsis-v:before{content:"\F142"}.fa-rss-square:before{content:"\F143"}.fa-play-circle:before{content:"\F144"}.fa-ticket:before{content:"\F145"}.fa-minus-square:before{content:"\F146"}.fa-minus-square-o:before{content:"\F147"}.fa-level-up:before{content:"\F148"}.fa-level-down:before{content:"\F149"}.fa-check-square:before{content:"\F14A"}.fa-pencil-square:before{content:"\F14B"}.fa-external-link-square:before{content:"\F14C"}.fa-share-square:before{content:"\F14D"}.fa-compass:before{content:"\F14E"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\F150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\F151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\F152"}.fa-euro:before,.fa-eur:before{content:"\F153"}.fa-gbp:before{content:"\F154"}.fa-dollar:before,.fa-usd:before{content:"\F155"}.fa-rupee:before,.fa-inr:before{content:"\F156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\F157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\F158"}.fa-won:before,.fa-krw:before{content:"\F159"}.fa-bitcoin:before,.fa-btc:before{content:"\F15A"}.fa-file:before{content:"\F15B"}.fa-file-text:before{content:"\F15C"}.fa-sort-alpha-asc:before{content:"\F15D"}.fa-sort-alpha-desc:before{content:"\F15E"}.fa-sort-amount-asc:before{content:"\F160"}.fa-sort-amount-desc:before{content:"\F161"}.fa-sort-numeric-asc:before{content:"\F162"}.fa-sort-numeric-desc:before{content:"\F163"}.fa-thumbs-up:before{content:"\F164"}.fa-thumbs-down:before{content:"\F165"}.fa-youtube-square:before{content:"\F166"}.fa-youtube:before{content:"\F167"}.fa-xing:before{content:"\F168"}.fa-xing-square:before{content:"\F169"}.fa-youtube-play:before{content:"\F16A"}.fa-dropbox:before{content:"\F16B"}.fa-stack-overflow:before{content:"\F16C"}.fa-instagram:before{content:"\F16D"}.fa-flickr:before{content:"\F16E"}.fa-adn:before{content:"\F170"}.fa-bitbucket:before{content:"\F171"}.fa-bitbucket-square:before{content:"\F172"}.fa-tumblr:before{content:"\F173"}.fa-tumblr-square:before{content:"\F174"}.fa-long-arrow-down:before{content:"\F175"}.fa-long-arrow-up:before{content:"\F176"}.fa-long-arrow-left:before{content:"\F177"}.fa-long-arrow-right:before{content:"\F178"}.fa-apple:before{content:"\F179"}.fa-windows:before{content:"\F17A"}.fa-android:before{content:"\F17B"}.fa-linux:before{content:"\F17C"}.fa-dribbble:before{content:"\F17D"}.fa-skype:before{content:"\F17E"}.fa-foursquare:before{content:"\F180"}.fa-trello:before{content:"\F181"}.fa-female:before{content:"\F182"}.fa-male:before{content:"\F183"}.fa-gittip:before{content:"\F184"}.fa-sun-o:before{content:"\F185"}.fa-moon-o:before{content:"\F186"}.fa-archive:before{content:"\F187"}.fa-bug:before{content:"\F188"}.fa-vk:before{content:"\F189"}.fa-weibo:before{content:"\F18A"}.fa-renren:before{content:"\F18B"}.fa-pagelines:before{content:"\F18C"}.fa-stack-exchange:before{content:"\F18D"}.fa-arrow-circle-o-right:before{content:"\F18E"}.fa-arrow-circle-o-left:before{content:"\F190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\F191"}.fa-dot-circle-o:before{content:"\F192"}.fa-wheelchair:before{content:"\F193"}.fa-vimeo-square:before{content:"\F194"}.fa-turkish-lira:before,.fa-try:before{content:"\F195"}.fa-plus-square-o:before{content:"\F196"}.fa-space-shuttle:before{content:"\F197"}.fa-slack:before{content:"\F198"}.fa-envelope-square:before{content:"\F199"}.fa-wordpress:before{content:"\F19A"}.fa-openid:before{content:"\F19B"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\F19C"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\F19D"}.fa-yahoo:before{content:"\F19E"}.fa-google:before{content:"\F1A0"}.fa-reddit:before{content:"\F1A1"}.fa-reddit-square:before{content:"\F1A2"}.fa-stumbleupon-circle:before{content:"\F1A3"}.fa-stumbleupon:before{content:"\F1A4"}.fa-delicious:before{content:"\F1A5"}.fa-digg:before{content:"\F1A6"}.fa-pied-piper-square:before,.fa-pied-piper:before{content:"\F1A7"}.fa-pied-piper-alt:before{content:"\F1A8"}.fa-drupal:before{content:"\F1A9"}.fa-joomla:before{content:"\F1AA"}.fa-language:before{content:"\F1AB"}.fa-fax:before{content:"\F1AC"}.fa-building:before{content:"\F1AD"}.fa-child:before{content:"\F1AE"}.fa-paw:before{content:"\F1B0"}.fa-spoon:before{content:"\F1B1"}.fa-cube:before{content:"\F1B2"}.fa-cubes:before{content:"\F1B3"}.fa-behance:before{content:"\F1B4"}.fa-behance-square:before{content:"\F1B5"}.fa-steam:before{content:"\F1B6"}.fa-steam-square:before{content:"\F1B7"}.fa-recycle:before{content:"\F1B8"}.fa-automobile:before,.fa-car:before{content:"\F1B9"}.fa-cab:before,.fa-taxi:before{content:"\F1BA"}.fa-tree:before{content:"\F1BB"}.fa-spotify:before{content:"\F1BC"}.fa-deviantart:before{content:"\F1BD"}.fa-soundcloud:before{content:"\F1BE"}.fa-database:before{content:"\F1C0"}.fa-file-pdf-o:before{content:"\F1C1"}.fa-file-word-o:before{content:"\F1C2"}.fa-file-excel-o:before{content:"\F1C3"}.fa-file-powerpoint-o:before{content:"\F1C4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\F1C5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\F1C6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\F1C7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\F1C8"}.fa-file-code-o:before{content:"\F1C9"}.fa-vine:before{content:"\F1CA"}.fa-codepen:before{content:"\F1CB"}.fa-jsfiddle:before{content:"\F1CC"}.fa-life-bouy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\F1CD"}.fa-circle-o-notch:before{content:"\F1CE"}.fa-ra:before,.fa-rebel:before{content:"\F1D0"}.fa-ge:before,.fa-empire:before{content:"\F1D1"}.fa-git-square:before{content:"\F1D2"}.fa-git:before{content:"\F1D3"}.fa-hacker-news:before{content:"\F1D4"}.fa-tencent-weibo:before{content:"\F1D5"}.fa-qq:before{content:"\F1D6"}.fa-wechat:before,.fa-weixin:before{content:"\F1D7"}.fa-send:before,.fa-paper-plane:before{content:"\F1D8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\F1D9"}.fa-history:before{content:"\F1DA"}.fa-circle-thin:before{content:"\F1DB"}.fa-header:before{content:"\F1DC"}.fa-paragraph:before{content:"\F1DD"}.fa-sliders:before{content:"\F1DE"}.fa-share-alt:before{content:"\F1E0"}.fa-share-alt-square:before{content:"\F1E1"}.fa-bomb:before{content:"\F1E2"}
</style><style type="text/css">/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */

.scoped-bootstrap {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

.scoped-bootstrap {
  margin: 0;
}

.scoped-bootstrap article,
.scoped-bootstrap aside,
.scoped-bootstrap details,
.scoped-bootstrap figcaption,
.scoped-bootstrap figure,
.scoped-bootstrap footer,
.scoped-bootstrap header,
.scoped-bootstrap hgroup,
.scoped-bootstrap main,
.scoped-bootstrap menu,
.scoped-bootstrap nav,
.scoped-bootstrap section,
.scoped-bootstrap summary {
  display: block;
}

.scoped-bootstrap audio,
.scoped-bootstrap canvas,
.scoped-bootstrap progress,
.scoped-bootstrap video {
  display: inline-block;
  vertical-align: baseline;
}

.scoped-bootstrap audio:not([controls]) {
  display: none;
  height: 0;
}

.scoped-bootstrap [hidden],
.scoped-bootstrap template {
  display: none;
}

.scoped-bootstrap a {
  background-color: transparent;
}

.scoped-bootstrap a:active,
.scoped-bootstrap a:hover {
  outline: 0;
}

.scoped-bootstrap abbr[title] {
  border-bottom: 1px dotted;
}

.scoped-bootstrap b,
.scoped-bootstrap strong {
  font-weight: bold;
}

.scoped-bootstrap dfn {
  font-style: italic;
}

.scoped-bootstrap h1 {
  margin: .67em 0;
  font-size: 2em;
}

.scoped-bootstrap mark {
  color: #000;
  background: #ff0;
}

.scoped-bootstrap small {
  font-size: 80%;
}

.scoped-bootstrap sub,
.scoped-bootstrap sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

.scoped-bootstrap sup {
  top: -.5em;
}

.scoped-bootstrap sub {
  bottom: -.25em;
}

.scoped-bootstrap img {
  border: 0;
}

.scoped-bootstrap svg:not(:root) {
  overflow: hidden;
}

.scoped-bootstrap figure {
  margin: 1em 40px;
}

.scoped-bootstrap hr {
  height: 0;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

pre {
  overflow: auto;
}

code,
.scoped-bootstrap kbd,
pre,
.scoped-bootstrap samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

.scoped-bootstrap button,
.scoped-bootstrap input,
.scoped-bootstrap optgroup,
.scoped-bootstrap select,
.scoped-bootstrap textarea {
  margin: 0;
  font: inherit;
  color: inherit;
}

.scoped-bootstrap button {
  overflow: visible;
}

.scoped-bootstrap button,
.scoped-bootstrap select {
  text-transform: none;
}

.scoped-bootstrap button,
.scoped-bootstrap input[type="button"],
.scoped-bootstrap input[type="reset"],
.scoped-bootstrap input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

.scoped-bootstrap button[disabled],
.scoped-bootstrap input[disabled] {
  cursor: default;
}

.scoped-bootstrap button::-moz-focus-inner,
.scoped-bootstrap input::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.scoped-bootstrap input {
  line-height: normal;
}

.scoped-bootstrap input[type="checkbox"],
.scoped-bootstrap input[type="radio"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}

.scoped-bootstrap input[type="number"]::-webkit-inner-spin-button,
.scoped-bootstrap input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

.scoped-bootstrap input[type="search"] {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-appearance: textfield;
}

.scoped-bootstrap input[type="search"]::-webkit-search-cancel-button,
.scoped-bootstrap input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

.scoped-bootstrap fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}

.scoped-bootstrap legend {
  padding: 0;
  border: 0;
}

.scoped-bootstrap textarea {
  overflow: auto;
}

.scoped-bootstrap optgroup {
  font-weight: bold;
}

.scoped-bootstrap table {
  border-spacing: 0;
  border-collapse: collapse;
}

.scoped-bootstrap td,
.scoped-bootstrap th {
  padding: 0;
}

/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */

@media print {
  .scoped-bootstrap *,
  .scoped-bootstrap *:before,
  .scoped-bootstrap *:after {
    color: #000 !important;
    text-shadow: none !important;
    background: transparent !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  .scoped-bootstrap a,
  .scoped-bootstrap a:visited {
    text-decoration: underline;
  }

  .scoped-bootstrap a[href]:after {
    content: " (" attr(href) ")";
  }

  .scoped-bootstrap abbr[title]:after {
    content: " (" attr(title) ")";
  }

  .scoped-bootstrap a[href^="#"]:after,
  .scoped-bootstrap a[href^="javascript:"]:after {
    content: "";
  }

  pre,
  .scoped-bootstrap blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  .scoped-bootstrap thead {
    display: table-header-group;
  }

  .scoped-bootstrap tr,
  .scoped-bootstrap img {
    page-break-inside: avoid;
  }

  .scoped-bootstrap img {
    max-width: 100% !important;
  }

  .scoped-bootstrap p,
  .scoped-bootstrap h2,
  .scoped-bootstrap h3 {
    orphans: 3;
    widows: 3;
  }

  .scoped-bootstrap h2,
  .scoped-bootstrap h3 {
    page-break-after: avoid;
  }

  .scoped-bootstrap .navbar {
    display: none;
  }

  .scoped-bootstrap .btn > .caret,
  .scoped-bootstrap .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }

  .scoped-bootstrap .label {
    border: 1px solid #000;
  }

  .scoped-bootstrap .table {
    border-collapse: collapse !important;
  }

  .scoped-bootstrap .table td,
  .scoped-bootstrap .table th {
    background-color: #fff !important;
  }

  .scoped-bootstrap .table-bordered th,
  .scoped-bootstrap .table-bordered td {
    border: 1px solid #ddd !important;
  }
}

.scoped-bootstrap * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.scoped-bootstrap *:before,
.scoped-bootstrap *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.scoped-bootstrap {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.scoped-bootstrap {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
}

.scoped-bootstrap input,
.scoped-bootstrap button,
.scoped-bootstrap select,
.scoped-bootstrap textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.scoped-bootstrap a {
  color: #337ab7;
  text-decoration: none;
}

.scoped-bootstrap a:hover,
.scoped-bootstrap a:focus {
  color: #23527c;
  text-decoration: underline;
}

.scoped-bootstrap a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.scoped-bootstrap figure {
  margin: 0;
}

.scoped-bootstrap img {
  vertical-align: middle;
}

.scoped-bootstrap .img-responsive,
.scoped-bootstrap .thumbnail > img,
.scoped-bootstrap .thumbnail a > img,
.scoped-bootstrap .carousel-inner > .item > img,
.scoped-bootstrap .carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}

.scoped-bootstrap .img-rounded {
  border-radius: 6px;
}

.scoped-bootstrap .img-thumbnail {
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.scoped-bootstrap .img-circle {
  border-radius: 50%;
}

.scoped-bootstrap hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}

.scoped-bootstrap .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.scoped-bootstrap .sr-only-focusable:active,
.scoped-bootstrap .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}

.scoped-bootstrap [role="button"] {
  cursor: pointer;
}

.scoped-bootstrap h1,
.scoped-bootstrap h2,
.scoped-bootstrap h3,
.scoped-bootstrap h4,
.scoped-bootstrap h5,
.scoped-bootstrap h6,
.scoped-bootstrap .h1,
.scoped-bootstrap .h2,
.scoped-bootstrap .h3,
.scoped-bootstrap .h4,
.scoped-bootstrap .h5,
.scoped-bootstrap .h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

.scoped-bootstrap h1 small,
.scoped-bootstrap h2 small,
.scoped-bootstrap h3 small,
.scoped-bootstrap h4 small,
.scoped-bootstrap h5 small,
.scoped-bootstrap h6 small,
.scoped-bootstrap .h1 small,
.scoped-bootstrap .h2 small,
.scoped-bootstrap .h3 small,
.scoped-bootstrap .h4 small,
.scoped-bootstrap .h5 small,
.scoped-bootstrap .h6 small,
.scoped-bootstrap h1 .small,
.scoped-bootstrap h2 .small,
.scoped-bootstrap h3 .small,
.scoped-bootstrap h4 .small,
.scoped-bootstrap h5 .small,
.scoped-bootstrap h6 .small,
.scoped-bootstrap .h1 .small,
.scoped-bootstrap .h2 .small,
.scoped-bootstrap .h3 .small,
.scoped-bootstrap .h4 .small,
.scoped-bootstrap .h5 .small,
.scoped-bootstrap .h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #777;
}

.scoped-bootstrap h1,
.scoped-bootstrap .h1,
.scoped-bootstrap h2,
.scoped-bootstrap .h2,
.scoped-bootstrap h3,
.scoped-bootstrap .h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.scoped-bootstrap h1 small,
.scoped-bootstrap .h1 small,
.scoped-bootstrap h2 small,
.scoped-bootstrap .h2 small,
.scoped-bootstrap h3 small,
.scoped-bootstrap .h3 small,
.scoped-bootstrap h1 .small,
.scoped-bootstrap .h1 .small,
.scoped-bootstrap h2 .small,
.scoped-bootstrap .h2 .small,
.scoped-bootstrap h3 .small,
.scoped-bootstrap .h3 .small {
  font-size: 65%;
}

.scoped-bootstrap h4,
.scoped-bootstrap .h4,
.scoped-bootstrap h5,
.scoped-bootstrap .h5,
.scoped-bootstrap h6,
.scoped-bootstrap .h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.scoped-bootstrap h4 small,
.scoped-bootstrap .h4 small,
.scoped-bootstrap h5 small,
.scoped-bootstrap .h5 small,
.scoped-bootstrap h6 small,
.scoped-bootstrap .h6 small,
.scoped-bootstrap h4 .small,
.scoped-bootstrap .h4 .small,
.scoped-bootstrap h5 .small,
.scoped-bootstrap .h5 .small,
.scoped-bootstrap h6 .small,
.scoped-bootstrap .h6 .small {
  font-size: 75%;
}

.scoped-bootstrap h1,
.scoped-bootstrap .h1 {
  font-size: 36px;
}

.scoped-bootstrap h2,
.scoped-bootstrap .h2 {
  font-size: 30px;
}

.scoped-bootstrap h3,
.scoped-bootstrap .h3 {
  font-size: 24px;
}

.scoped-bootstrap h4,
.scoped-bootstrap .h4 {
  font-size: 18px;
}

.scoped-bootstrap h5,
.scoped-bootstrap .h5 {
  font-size: 14px;
}

.scoped-bootstrap h6,
.scoped-bootstrap .h6 {
  font-size: 12px;
}

.scoped-bootstrap p {
  margin: 0 0 10px;
}

.scoped-bootstrap .lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .scoped-bootstrap .lead {
    font-size: 21px;
  }
}

.scoped-bootstrap small,
.scoped-bootstrap .small {
  font-size: 85%;
}

.scoped-bootstrap mark,
.scoped-bootstrap .mark {
  padding: .2em;
  background-color: #fcf8e3;
}

.scoped-bootstrap .text-left {
  text-align: left;
}

.scoped-bootstrap .text-right {
  text-align: right;
}

.scoped-bootstrap .text-center {
  text-align: center;
}

.scoped-bootstrap .text-justify {
  text-align: justify;
}

.scoped-bootstrap .text-nowrap {
  white-space: nowrap;
}

.scoped-bootstrap .text-lowercase {
  text-transform: lowercase;
}

.scoped-bootstrap .text-uppercase {
  text-transform: uppercase;
}

.scoped-bootstrap .text-capitalize {
  text-transform: capitalize;
}

.scoped-bootstrap .text-muted {
  color: #777;
}

.scoped-bootstrap .text-primary {
  color: #337ab7;
}

.scoped-bootstrap a.text-primary:hover,
.scoped-bootstrap a.text-primary:focus {
  color: #286090;
}

.scoped-bootstrap .text-success {
  color: #3c763d;
}

.scoped-bootstrap a.text-success:hover,
.scoped-bootstrap a.text-success:focus {
  color: #2b542c;
}

.scoped-bootstrap .text-info {
  color: #31708f;
}

.scoped-bootstrap a.text-info:hover,
.scoped-bootstrap a.text-info:focus {
  color: #245269;
}

.scoped-bootstrap .text-warning {
  color: #8a6d3b;
}

.scoped-bootstrap a.text-warning:hover,
.scoped-bootstrap a.text-warning:focus {
  color: #66512c;
}

.scoped-bootstrap .text-danger {
  color: #a94442;
}

.scoped-bootstrap a.text-danger:hover,
.scoped-bootstrap a.text-danger:focus {
  color: #843534;
}

.scoped-bootstrap .bg-primary {
  color: #fff;
  background-color: #337ab7;
}

.scoped-bootstrap a.bg-primary:hover,
.scoped-bootstrap a.bg-primary:focus {
  background-color: #286090;
}

.scoped-bootstrap .bg-success {
  background-color: #dff0d8;
}

.scoped-bootstrap a.bg-success:hover,
.scoped-bootstrap a.bg-success:focus {
  background-color: #c1e2b3;
}

.scoped-bootstrap .bg-info {
  background-color: #d9edf7;
}

.scoped-bootstrap a.bg-info:hover,
.scoped-bootstrap a.bg-info:focus {
  background-color: #afd9ee;
}

.scoped-bootstrap .bg-warning {
  background-color: #fcf8e3;
}

.scoped-bootstrap a.bg-warning:hover,
.scoped-bootstrap a.bg-warning:focus {
  background-color: #f7ecb5;
}

.scoped-bootstrap .bg-danger {
  background-color: #f2dede;
}

.scoped-bootstrap a.bg-danger:hover,
.scoped-bootstrap a.bg-danger:focus {
  background-color: #e4b9b9;
}

.scoped-bootstrap .page-header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}

.scoped-bootstrap ul,
.scoped-bootstrap ol {
  margin-top: 0;
  margin-bottom: 10px;
}

.scoped-bootstrap ul ul,
.scoped-bootstrap ol ul,
.scoped-bootstrap ul ol,
.scoped-bootstrap ol ol {
  margin-bottom: 0;
}

.scoped-bootstrap .list-unstyled {
  padding-left: 0;
  list-style: none;
}

.scoped-bootstrap .list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
}

.scoped-bootstrap .list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}

.scoped-bootstrap dl {
  margin-top: 0;
  margin-bottom: 20px;
}

.scoped-bootstrap dt,
.scoped-bootstrap dd {
  line-height: 1.42857143;
}

.scoped-bootstrap dt {
  font-weight: bold;
}

.scoped-bootstrap dd {
  margin-left: 0;
}

@media (min-width: 768px) {
  .scoped-bootstrap .dl-horizontal dt {
    float: left;
    width: 160px;
    overflow: hidden;
    clear: left;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .scoped-bootstrap .dl-horizontal dd {
    margin-left: 180px;
  }
}

.scoped-bootstrap abbr[title],
.scoped-bootstrap abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #777;
}

.scoped-bootstrap .initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.scoped-bootstrap blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}

.scoped-bootstrap blockquote p:last-child,
.scoped-bootstrap blockquote ul:last-child,
.scoped-bootstrap blockquote ol:last-child {
  margin-bottom: 0;
}

.scoped-bootstrap blockquote footer,
.scoped-bootstrap blockquote small,
.scoped-bootstrap blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #777;
}

.scoped-bootstrap blockquote footer:before,
.scoped-bootstrap blockquote small:before,
.scoped-bootstrap blockquote .small:before {
  content: '\2014   \A0';
}

.scoped-bootstrap .blockquote-reverse,
.scoped-bootstrap blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
}

.scoped-bootstrap .blockquote-reverse footer:before,
.scoped-bootstrap blockquote.pull-right footer:before,
.scoped-bootstrap .blockquote-reverse small:before,
.scoped-bootstrap blockquote.pull-right small:before,
.scoped-bootstrap .blockquote-reverse .small:before,
.scoped-bootstrap blockquote.pull-right .small:before {
  content: '';
}

.scoped-bootstrap .blockquote-reverse footer:after,
.scoped-bootstrap blockquote.pull-right footer:after,
.scoped-bootstrap .blockquote-reverse small:after,
.scoped-bootstrap blockquote.pull-right small:after,
.scoped-bootstrap .blockquote-reverse .small:after,
.scoped-bootstrap blockquote.pull-right .small:after {
  content: '\A0   \2014';
}

.scoped-bootstrap address {
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.42857143;
}

code,
.scoped-bootstrap kbd,
pre,
.scoped-bootstrap samp {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}

code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}

.scoped-bootstrap kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}

.scoped-bootstrap kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  -webkit-box-shadow: none;
  box-shadow: none;
}

pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}

pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}

.scoped-bootstrap .pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.scoped-bootstrap .container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 768px) {
  .scoped-bootstrap .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .scoped-bootstrap .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .scoped-bootstrap .container {
    width: 1170px;
  }
}

.scoped-bootstrap .container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.scoped-bootstrap .row {
  margin-right: -15px;
  margin-left: -15px;
}

.scoped-bootstrap .col-xs-1,
.scoped-bootstrap .col-sm-1,
.scoped-bootstrap .col-md-1,
.scoped-bootstrap .col-lg-1,
.scoped-bootstrap .col-xs-2,
.scoped-bootstrap .col-sm-2,
.scoped-bootstrap .col-md-2,
.scoped-bootstrap .col-lg-2,
.scoped-bootstrap .col-xs-3,
.scoped-bootstrap .col-sm-3,
.scoped-bootstrap .col-md-3,
.scoped-bootstrap .col-lg-3,
.scoped-bootstrap .col-xs-4,
.scoped-bootstrap .col-sm-4,
.scoped-bootstrap .col-md-4,
.scoped-bootstrap .col-lg-4,
.scoped-bootstrap .col-xs-5,
.scoped-bootstrap .col-sm-5,
.scoped-bootstrap .col-md-5,
.scoped-bootstrap .col-lg-5,
.scoped-bootstrap .col-xs-6,
.scoped-bootstrap .col-sm-6,
.scoped-bootstrap .col-md-6,
.scoped-bootstrap .col-lg-6,
.scoped-bootstrap .col-xs-7,
.scoped-bootstrap .col-sm-7,
.scoped-bootstrap .col-md-7,
.scoped-bootstrap .col-lg-7,
.scoped-bootstrap .col-xs-8,
.scoped-bootstrap .col-sm-8,
.scoped-bootstrap .col-md-8,
.scoped-bootstrap .col-lg-8,
.scoped-bootstrap .col-xs-9,
.scoped-bootstrap .col-sm-9,
.scoped-bootstrap .col-md-9,
.scoped-bootstrap .col-lg-9,
.scoped-bootstrap .col-xs-10,
.scoped-bootstrap .col-sm-10,
.scoped-bootstrap .col-md-10,
.scoped-bootstrap .col-lg-10,
.scoped-bootstrap .col-xs-11,
.scoped-bootstrap .col-sm-11,
.scoped-bootstrap .col-md-11,
.scoped-bootstrap .col-lg-11,
.scoped-bootstrap .col-xs-12,
.scoped-bootstrap .col-sm-12,
.scoped-bootstrap .col-md-12,
.scoped-bootstrap .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.scoped-bootstrap .col-xs-1,
.scoped-bootstrap .col-xs-2,
.scoped-bootstrap .col-xs-3,
.scoped-bootstrap .col-xs-4,
.scoped-bootstrap .col-xs-5,
.scoped-bootstrap .col-xs-6,
.scoped-bootstrap .col-xs-7,
.scoped-bootstrap .col-xs-8,
.scoped-bootstrap .col-xs-9,
.scoped-bootstrap .col-xs-10,
.scoped-bootstrap .col-xs-11,
.scoped-bootstrap .col-xs-12 {
  float: left;
}

.scoped-bootstrap .col-xs-12 {
  width: 100%;
}

.scoped-bootstrap .col-xs-11 {
  width: 91.66666667%;
}

.scoped-bootstrap .col-xs-10 {
  width: 83.33333333%;
}

.scoped-bootstrap .col-xs-9 {
  width: 75%;
}

.scoped-bootstrap .col-xs-8 {
  width: 66.66666667%;
}

.scoped-bootstrap .col-xs-7 {
  width: 58.33333333%;
}

.scoped-bootstrap .col-xs-6 {
  width: 50%;
}

.scoped-bootstrap .col-xs-5 {
  width: 41.66666667%;
}

.scoped-bootstrap .col-xs-4 {
  width: 33.33333333%;
}

.scoped-bootstrap .col-xs-3 {
  width: 25%;
}

.scoped-bootstrap .col-xs-2 {
  width: 16.66666667%;
}

.scoped-bootstrap .col-xs-1 {
  width: 8.33333333%;
}

.scoped-bootstrap .col-xs-pull-12 {
  right: 100%;
}

.scoped-bootstrap .col-xs-pull-11 {
  right: 91.66666667%;
}

.scoped-bootstrap .col-xs-pull-10 {
  right: 83.33333333%;
}

.scoped-bootstrap .col-xs-pull-9 {
  right: 75%;
}

.scoped-bootstrap .col-xs-pull-8 {
  right: 66.66666667%;
}

.scoped-bootstrap .col-xs-pull-7 {
  right: 58.33333333%;
}

.scoped-bootstrap .col-xs-pull-6 {
  right: 50%;
}

.scoped-bootstrap .col-xs-pull-5 {
  right: 41.66666667%;
}

.scoped-bootstrap .col-xs-pull-4 {
  right: 33.33333333%;
}

.scoped-bootstrap .col-xs-pull-3 {
  right: 25%;
}

.scoped-bootstrap .col-xs-pull-2 {
  right: 16.66666667%;
}

.scoped-bootstrap .col-xs-pull-1 {
  right: 8.33333333%;
}

.scoped-bootstrap .col-xs-pull-0 {
  right: auto;
}

.scoped-bootstrap .col-xs-push-12 {
  left: 100%;
}

.scoped-bootstrap .col-xs-push-11 {
  left: 91.66666667%;
}

.scoped-bootstrap .col-xs-push-10 {
  left: 83.33333333%;
}

.scoped-bootstrap .col-xs-push-9 {
  left: 75%;
}

.scoped-bootstrap .col-xs-push-8 {
  left: 66.66666667%;
}

.scoped-bootstrap .col-xs-push-7 {
  left: 58.33333333%;
}

.scoped-bootstrap .col-xs-push-6 {
  left: 50%;
}

.scoped-bootstrap .col-xs-push-5 {
  left: 41.66666667%;
}

.scoped-bootstrap .col-xs-push-4 {
  left: 33.33333333%;
}

.scoped-bootstrap .col-xs-push-3 {
  left: 25%;
}

.scoped-bootstrap .col-xs-push-2 {
  left: 16.66666667%;
}

.scoped-bootstrap .col-xs-push-1 {
  left: 8.33333333%;
}

.scoped-bootstrap .col-xs-push-0 {
  left: auto;
}

.scoped-bootstrap .col-xs-offset-12 {
  margin-left: 100%;
}

.scoped-bootstrap .col-xs-offset-11 {
  margin-left: 91.66666667%;
}

.scoped-bootstrap .col-xs-offset-10 {
  margin-left: 83.33333333%;
}

.scoped-bootstrap .col-xs-offset-9 {
  margin-left: 75%;
}

.scoped-bootstrap .col-xs-offset-8 {
  margin-left: 66.66666667%;
}

.scoped-bootstrap .col-xs-offset-7 {
  margin-left: 58.33333333%;
}

.scoped-bootstrap .col-xs-offset-6 {
  margin-left: 50%;
}

.scoped-bootstrap .col-xs-offset-5 {
  margin-left: 41.66666667%;
}

.scoped-bootstrap .col-xs-offset-4 {
  margin-left: 33.33333333%;
}

.scoped-bootstrap .col-xs-offset-3 {
  margin-left: 25%;
}

.scoped-bootstrap .col-xs-offset-2 {
  margin-left: 16.66666667%;
}

.scoped-bootstrap .col-xs-offset-1 {
  margin-left: 8.33333333%;
}

.scoped-bootstrap .col-xs-offset-0 {
  margin-left: 0;
}

@media (min-width: 768px) {
  .scoped-bootstrap .col-sm-1,
  .scoped-bootstrap .col-sm-2,
  .scoped-bootstrap .col-sm-3,
  .scoped-bootstrap .col-sm-4,
  .scoped-bootstrap .col-sm-5,
  .scoped-bootstrap .col-sm-6,
  .scoped-bootstrap .col-sm-7,
  .scoped-bootstrap .col-sm-8,
  .scoped-bootstrap .col-sm-9,
  .scoped-bootstrap .col-sm-10,
  .scoped-bootstrap .col-sm-11,
  .scoped-bootstrap .col-sm-12 {
    float: left;
  }

  .scoped-bootstrap .col-sm-12 {
    width: 100%;
  }

  .scoped-bootstrap .col-sm-11 {
    width: 91.66666667%;
  }

  .scoped-bootstrap .col-sm-10 {
    width: 83.33333333%;
  }

  .scoped-bootstrap .col-sm-9 {
    width: 75%;
  }

  .scoped-bootstrap .col-sm-8 {
    width: 66.66666667%;
  }

  .scoped-bootstrap .col-sm-7 {
    width: 58.33333333%;
  }

  .scoped-bootstrap .col-sm-6 {
    width: 50%;
  }

  .scoped-bootstrap .col-sm-5 {
    width: 41.66666667%;
  }

  .scoped-bootstrap .col-sm-4 {
    width: 33.33333333%;
  }

  .scoped-bootstrap .col-sm-3 {
    width: 25%;
  }

  .scoped-bootstrap .col-sm-2 {
    width: 16.66666667%;
  }

  .scoped-bootstrap .col-sm-1 {
    width: 8.33333333%;
  }

  .scoped-bootstrap .col-sm-pull-12 {
    right: 100%;
  }

  .scoped-bootstrap .col-sm-pull-11 {
    right: 91.66666667%;
  }

  .scoped-bootstrap .col-sm-pull-10 {
    right: 83.33333333%;
  }

  .scoped-bootstrap .col-sm-pull-9 {
    right: 75%;
  }

  .scoped-bootstrap .col-sm-pull-8 {
    right: 66.66666667%;
  }

  .scoped-bootstrap .col-sm-pull-7 {
    right: 58.33333333%;
  }

  .scoped-bootstrap .col-sm-pull-6 {
    right: 50%;
  }

  .scoped-bootstrap .col-sm-pull-5 {
    right: 41.66666667%;
  }

  .scoped-bootstrap .col-sm-pull-4 {
    right: 33.33333333%;
  }

  .scoped-bootstrap .col-sm-pull-3 {
    right: 25%;
  }

  .scoped-bootstrap .col-sm-pull-2 {
    right: 16.66666667%;
  }

  .scoped-bootstrap .col-sm-pull-1 {
    right: 8.33333333%;
  }

  .scoped-bootstrap .col-sm-pull-0 {
    right: auto;
  }

  .scoped-bootstrap .col-sm-push-12 {
    left: 100%;
  }

  .scoped-bootstrap .col-sm-push-11 {
    left: 91.66666667%;
  }

  .scoped-bootstrap .col-sm-push-10 {
    left: 83.33333333%;
  }

  .scoped-bootstrap .col-sm-push-9 {
    left: 75%;
  }

  .scoped-bootstrap .col-sm-push-8 {
    left: 66.66666667%;
  }

  .scoped-bootstrap .col-sm-push-7 {
    left: 58.33333333%;
  }

  .scoped-bootstrap .col-sm-push-6 {
    left: 50%;
  }

  .scoped-bootstrap .col-sm-push-5 {
    left: 41.66666667%;
  }

  .scoped-bootstrap .col-sm-push-4 {
    left: 33.33333333%;
  }

  .scoped-bootstrap .col-sm-push-3 {
    left: 25%;
  }

  .scoped-bootstrap .col-sm-push-2 {
    left: 16.66666667%;
  }

  .scoped-bootstrap .col-sm-push-1 {
    left: 8.33333333%;
  }

  .scoped-bootstrap .col-sm-push-0 {
    left: auto;
  }

  .scoped-bootstrap .col-sm-offset-12 {
    margin-left: 100%;
  }

  .scoped-bootstrap .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }

  .scoped-bootstrap .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }

  .scoped-bootstrap .col-sm-offset-9 {
    margin-left: 75%;
  }

  .scoped-bootstrap .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }

  .scoped-bootstrap .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }

  .scoped-bootstrap .col-sm-offset-6 {
    margin-left: 50%;
  }

  .scoped-bootstrap .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }

  .scoped-bootstrap .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }

  .scoped-bootstrap .col-sm-offset-3 {
    margin-left: 25%;
  }

  .scoped-bootstrap .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }

  .scoped-bootstrap .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }

  .scoped-bootstrap .col-sm-offset-0 {
    margin-left: 0;
  }
}

@media (min-width: 992px) {
  .scoped-bootstrap .col-md-1,
  .scoped-bootstrap .col-md-2,
  .scoped-bootstrap .col-md-3,
  .scoped-bootstrap .col-md-4,
  .scoped-bootstrap .col-md-5,
  .scoped-bootstrap .col-md-6,
  .scoped-bootstrap .col-md-7,
  .scoped-bootstrap .col-md-8,
  .scoped-bootstrap .col-md-9,
  .scoped-bootstrap .col-md-10,
  .scoped-bootstrap .col-md-11,
  .scoped-bootstrap .col-md-12 {
    float: left;
  }

  .scoped-bootstrap .col-md-12 {
    width: 100%;
  }

  .scoped-bootstrap .col-md-11 {
    width: 91.66666667%;
  }

  .scoped-bootstrap .col-md-10 {
    width: 83.33333333%;
  }

  .scoped-bootstrap .col-md-9 {
    width: 75%;
  }

  .scoped-bootstrap .col-md-8 {
    width: 66.66666667%;
  }

  .scoped-bootstrap .col-md-7 {
    width: 58.33333333%;
  }

  .scoped-bootstrap .col-md-6 {
    width: 50%;
  }

  .scoped-bootstrap .col-md-5 {
    width: 41.66666667%;
  }

  .scoped-bootstrap .col-md-4 {
    width: 33.33333333%;
  }

  .scoped-bootstrap .col-md-3 {
    width: 25%;
  }

  .scoped-bootstrap .col-md-2 {
    width: 16.66666667%;
  }

  .scoped-bootstrap .col-md-1 {
    width: 8.33333333%;
  }

  .scoped-bootstrap .col-md-pull-12 {
    right: 100%;
  }

  .scoped-bootstrap .col-md-pull-11 {
    right: 91.66666667%;
  }

  .scoped-bootstrap .col-md-pull-10 {
    right: 83.33333333%;
  }

  .scoped-bootstrap .col-md-pull-9 {
    right: 75%;
  }

  .scoped-bootstrap .col-md-pull-8 {
    right: 66.66666667%;
  }

  .scoped-bootstrap .col-md-pull-7 {
    right: 58.33333333%;
  }

  .scoped-bootstrap .col-md-pull-6 {
    right: 50%;
  }

  .scoped-bootstrap .col-md-pull-5 {
    right: 41.66666667%;
  }

  .scoped-bootstrap .col-md-pull-4 {
    right: 33.33333333%;
  }

  .scoped-bootstrap .col-md-pull-3 {
    right: 25%;
  }

  .scoped-bootstrap .col-md-pull-2 {
    right: 16.66666667%;
  }

  .scoped-bootstrap .col-md-pull-1 {
    right: 8.33333333%;
  }

  .scoped-bootstrap .col-md-pull-0 {
    right: auto;
  }

  .scoped-bootstrap .col-md-push-12 {
    left: 100%;
  }

  .scoped-bootstrap .col-md-push-11 {
    left: 91.66666667%;
  }

  .scoped-bootstrap .col-md-push-10 {
    left: 83.33333333%;
  }

  .scoped-bootstrap .col-md-push-9 {
    left: 75%;
  }

  .scoped-bootstrap .col-md-push-8 {
    left: 66.66666667%;
  }

  .scoped-bootstrap .col-md-push-7 {
    left: 58.33333333%;
  }

  .scoped-bootstrap .col-md-push-6 {
    left: 50%;
  }

  .scoped-bootstrap .col-md-push-5 {
    left: 41.66666667%;
  }

  .scoped-bootstrap .col-md-push-4 {
    left: 33.33333333%;
  }

  .scoped-bootstrap .col-md-push-3 {
    left: 25%;
  }

  .scoped-bootstrap .col-md-push-2 {
    left: 16.66666667%;
  }

  .scoped-bootstrap .col-md-push-1 {
    left: 8.33333333%;
  }

  .scoped-bootstrap .col-md-push-0 {
    left: auto;
  }

  .scoped-bootstrap .col-md-offset-12 {
    margin-left: 100%;
  }

  .scoped-bootstrap .col-md-offset-11 {
    margin-left: 91.66666667%;
  }

  .scoped-bootstrap .col-md-offset-10 {
    margin-left: 83.33333333%;
  }

  .scoped-bootstrap .col-md-offset-9 {
    margin-left: 75%;
  }

  .scoped-bootstrap .col-md-offset-8 {
    margin-left: 66.66666667%;
  }

  .scoped-bootstrap .col-md-offset-7 {
    margin-left: 58.33333333%;
  }

  .scoped-bootstrap .col-md-offset-6 {
    margin-left: 50%;
  }

  .scoped-bootstrap .col-md-offset-5 {
    margin-left: 41.66666667%;
  }

  .scoped-bootstrap .col-md-offset-4 {
    margin-left: 33.33333333%;
  }

  .scoped-bootstrap .col-md-offset-3 {
    margin-left: 25%;
  }

  .scoped-bootstrap .col-md-offset-2 {
    margin-left: 16.66666667%;
  }

  .scoped-bootstrap .col-md-offset-1 {
    margin-left: 8.33333333%;
  }

  .scoped-bootstrap .col-md-offset-0 {
    margin-left: 0;
  }
}

@media (min-width: 1200px) {
  .scoped-bootstrap .col-lg-1,
  .scoped-bootstrap .col-lg-2,
  .scoped-bootstrap .col-lg-3,
  .scoped-bootstrap .col-lg-4,
  .scoped-bootstrap .col-lg-5,
  .scoped-bootstrap .col-lg-6,
  .scoped-bootstrap .col-lg-7,
  .scoped-bootstrap .col-lg-8,
  .scoped-bootstrap .col-lg-9,
  .scoped-bootstrap .col-lg-10,
  .scoped-bootstrap .col-lg-11,
  .scoped-bootstrap .col-lg-12 {
    float: left;
  }

  .scoped-bootstrap .col-lg-12 {
    width: 100%;
  }

  .scoped-bootstrap .col-lg-11 {
    width: 91.66666667%;
  }

  .scoped-bootstrap .col-lg-10 {
    width: 83.33333333%;
  }

  .scoped-bootstrap .col-lg-9 {
    width: 75%;
  }

  .scoped-bootstrap .col-lg-8 {
    width: 66.66666667%;
  }

  .scoped-bootstrap .col-lg-7 {
    width: 58.33333333%;
  }

  .scoped-bootstrap .col-lg-6 {
    width: 50%;
  }

  .scoped-bootstrap .col-lg-5 {
    width: 41.66666667%;
  }

  .scoped-bootstrap .col-lg-4 {
    width: 33.33333333%;
  }

  .scoped-bootstrap .col-lg-3 {
    width: 25%;
  }

  .scoped-bootstrap .col-lg-2 {
    width: 16.66666667%;
  }

  .scoped-bootstrap .col-lg-1 {
    width: 8.33333333%;
  }

  .scoped-bootstrap .col-lg-pull-12 {
    right: 100%;
  }

  .scoped-bootstrap .col-lg-pull-11 {
    right: 91.66666667%;
  }

  .scoped-bootstrap .col-lg-pull-10 {
    right: 83.33333333%;
  }

  .scoped-bootstrap .col-lg-pull-9 {
    right: 75%;
  }

  .scoped-bootstrap .col-lg-pull-8 {
    right: 66.66666667%;
  }

  .scoped-bootstrap .col-lg-pull-7 {
    right: 58.33333333%;
  }

  .scoped-bootstrap .col-lg-pull-6 {
    right: 50%;
  }

  .scoped-bootstrap .col-lg-pull-5 {
    right: 41.66666667%;
  }

  .scoped-bootstrap .col-lg-pull-4 {
    right: 33.33333333%;
  }

  .scoped-bootstrap .col-lg-pull-3 {
    right: 25%;
  }

  .scoped-bootstrap .col-lg-pull-2 {
    right: 16.66666667%;
  }

  .scoped-bootstrap .col-lg-pull-1 {
    right: 8.33333333%;
  }

  .scoped-bootstrap .col-lg-pull-0 {
    right: auto;
  }

  .scoped-bootstrap .col-lg-push-12 {
    left: 100%;
  }

  .scoped-bootstrap .col-lg-push-11 {
    left: 91.66666667%;
  }

  .scoped-bootstrap .col-lg-push-10 {
    left: 83.33333333%;
  }

  .scoped-bootstrap .col-lg-push-9 {
    left: 75%;
  }

  .scoped-bootstrap .col-lg-push-8 {
    left: 66.66666667%;
  }

  .scoped-bootstrap .col-lg-push-7 {
    left: 58.33333333%;
  }

  .scoped-bootstrap .col-lg-push-6 {
    left: 50%;
  }

  .scoped-bootstrap .col-lg-push-5 {
    left: 41.66666667%;
  }

  .scoped-bootstrap .col-lg-push-4 {
    left: 33.33333333%;
  }

  .scoped-bootstrap .col-lg-push-3 {
    left: 25%;
  }

  .scoped-bootstrap .col-lg-push-2 {
    left: 16.66666667%;
  }

  .scoped-bootstrap .col-lg-push-1 {
    left: 8.33333333%;
  }

  .scoped-bootstrap .col-lg-push-0 {
    left: auto;
  }

  .scoped-bootstrap .col-lg-offset-12 {
    margin-left: 100%;
  }

  .scoped-bootstrap .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }

  .scoped-bootstrap .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }

  .scoped-bootstrap .col-lg-offset-9 {
    margin-left: 75%;
  }

  .scoped-bootstrap .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }

  .scoped-bootstrap .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }

  .scoped-bootstrap .col-lg-offset-6 {
    margin-left: 50%;
  }

  .scoped-bootstrap .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }

  .scoped-bootstrap .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }

  .scoped-bootstrap .col-lg-offset-3 {
    margin-left: 25%;
  }

  .scoped-bootstrap .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }

  .scoped-bootstrap .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }

  .scoped-bootstrap .col-lg-offset-0 {
    margin-left: 0;
  }
}

.scoped-bootstrap table {
  background-color: transparent;
}

.scoped-bootstrap caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #777;
  text-align: left;
}

.scoped-bootstrap th {
  text-align: left;
}

.scoped-bootstrap .table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}

.scoped-bootstrap .table > thead > tr > th,
.scoped-bootstrap .table > tbody > tr > th,
.scoped-bootstrap .table > tfoot > tr > th,
.scoped-bootstrap .table > thead > tr > td,
.scoped-bootstrap .table > tbody > tr > td,
.scoped-bootstrap .table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}

.scoped-bootstrap .table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}

.scoped-bootstrap .table > caption + thead > tr:first-child > th,
.scoped-bootstrap .table > colgroup + thead > tr:first-child > th,
.scoped-bootstrap .table > thead:first-child > tr:first-child > th,
.scoped-bootstrap .table > caption + thead > tr:first-child > td,
.scoped-bootstrap .table > colgroup + thead > tr:first-child > td,
.scoped-bootstrap .table > thead:first-child > tr:first-child > td {
  border-top: 0;
}

.scoped-bootstrap .table > tbody + tbody {
  border-top: 2px solid #ddd;
}

.scoped-bootstrap .table .table {
  background-color: #fff;
}

.scoped-bootstrap .table-condensed > thead > tr > th,
.scoped-bootstrap .table-condensed > tbody > tr > th,
.scoped-bootstrap .table-condensed > tfoot > tr > th,
.scoped-bootstrap .table-condensed > thead > tr > td,
.scoped-bootstrap .table-condensed > tbody > tr > td,
.scoped-bootstrap .table-condensed > tfoot > tr > td {
  padding: 5px;
}

.scoped-bootstrap .table-bordered {
  border: 1px solid #ddd;
}

.scoped-bootstrap .table-bordered > thead > tr > th,
.scoped-bootstrap .table-bordered > tbody > tr > th,
.scoped-bootstrap .table-bordered > tfoot > tr > th,
.scoped-bootstrap .table-bordered > thead > tr > td,
.scoped-bootstrap .table-bordered > tbody > tr > td,
.scoped-bootstrap .table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}

.scoped-bootstrap .table-bordered > thead > tr > th,
.scoped-bootstrap .table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}

.scoped-bootstrap .table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}

.scoped-bootstrap .table-hover > tbody > tr:hover {
  background-color: #f5f5f5;
}

.scoped-bootstrap table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}

.scoped-bootstrap table td[class*="col-"],
.scoped-bootstrap table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
}

.scoped-bootstrap .table > thead > tr > td.active,
.scoped-bootstrap .table > tbody > tr > td.active,
.scoped-bootstrap .table > tfoot > tr > td.active,
.scoped-bootstrap .table > thead > tr > th.active,
.scoped-bootstrap .table > tbody > tr > th.active,
.scoped-bootstrap .table > tfoot > tr > th.active,
.scoped-bootstrap .table > thead > tr.active > td,
.scoped-bootstrap .table > tbody > tr.active > td,
.scoped-bootstrap .table > tfoot > tr.active > td,
.scoped-bootstrap .table > thead > tr.active > th,
.scoped-bootstrap .table > tbody > tr.active > th,
.scoped-bootstrap .table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}

.scoped-bootstrap .table-hover > tbody > tr > td.active:hover,
.scoped-bootstrap .table-hover > tbody > tr > th.active:hover,
.scoped-bootstrap .table-hover > tbody > tr.active:hover > td,
.scoped-bootstrap .table-hover > tbody > tr:hover > .active,
.scoped-bootstrap .table-hover > tbody > tr.active:hover > th {
  background-color: #e8e8e8;
}

.scoped-bootstrap .table > thead > tr > td.success,
.scoped-bootstrap .table > tbody > tr > td.success,
.scoped-bootstrap .table > tfoot > tr > td.success,
.scoped-bootstrap .table > thead > tr > th.success,
.scoped-bootstrap .table > tbody > tr > th.success,
.scoped-bootstrap .table > tfoot > tr > th.success,
.scoped-bootstrap .table > thead > tr.success > td,
.scoped-bootstrap .table > tbody > tr.success > td,
.scoped-bootstrap .table > tfoot > tr.success > td,
.scoped-bootstrap .table > thead > tr.success > th,
.scoped-bootstrap .table > tbody > tr.success > th,
.scoped-bootstrap .table > tfoot > tr.success > th {
  background-color: #dff0d8;
}

.scoped-bootstrap .table-hover > tbody > tr > td.success:hover,
.scoped-bootstrap .table-hover > tbody > tr > th.success:hover,
.scoped-bootstrap .table-hover > tbody > tr.success:hover > td,
.scoped-bootstrap .table-hover > tbody > tr:hover > .success,
.scoped-bootstrap .table-hover > tbody > tr.success:hover > th {
  background-color: #d0e9c6;
}

.scoped-bootstrap .table > thead > tr > td.info,
.scoped-bootstrap .table > tbody > tr > td.info,
.scoped-bootstrap .table > tfoot > tr > td.info,
.scoped-bootstrap .table > thead > tr > th.info,
.scoped-bootstrap .table > tbody > tr > th.info,
.scoped-bootstrap .table > tfoot > tr > th.info,
.scoped-bootstrap .table > thead > tr.info > td,
.scoped-bootstrap .table > tbody > tr.info > td,
.scoped-bootstrap .table > tfoot > tr.info > td,
.scoped-bootstrap .table > thead > tr.info > th,
.scoped-bootstrap .table > tbody > tr.info > th,
.scoped-bootstrap .table > tfoot > tr.info > th {
  background-color: #d9edf7;
}

.scoped-bootstrap .table-hover > tbody > tr > td.info:hover,
.scoped-bootstrap .table-hover > tbody > tr > th.info:hover,
.scoped-bootstrap .table-hover > tbody > tr.info:hover > td,
.scoped-bootstrap .table-hover > tbody > tr:hover > .info,
.scoped-bootstrap .table-hover > tbody > tr.info:hover > th {
  background-color: #c4e3f3;
}

.scoped-bootstrap .table > thead > tr > td.warning,
.scoped-bootstrap .table > tbody > tr > td.warning,
.scoped-bootstrap .table > tfoot > tr > td.warning,
.scoped-bootstrap .table > thead > tr > th.warning,
.scoped-bootstrap .table > tbody > tr > th.warning,
.scoped-bootstrap .table > tfoot > tr > th.warning,
.scoped-bootstrap .table > thead > tr.warning > td,
.scoped-bootstrap .table > tbody > tr.warning > td,
.scoped-bootstrap .table > tfoot > tr.warning > td,
.scoped-bootstrap .table > thead > tr.warning > th,
.scoped-bootstrap .table > tbody > tr.warning > th,
.scoped-bootstrap .table > tfoot > tr.warning > th {
  background-color: #fcf8e3;
}

.scoped-bootstrap .table-hover > tbody > tr > td.warning:hover,
.scoped-bootstrap .table-hover > tbody > tr > th.warning:hover,
.scoped-bootstrap .table-hover > tbody > tr.warning:hover > td,
.scoped-bootstrap .table-hover > tbody > tr:hover > .warning,
.scoped-bootstrap .table-hover > tbody > tr.warning:hover > th {
  background-color: #faf2cc;
}

.scoped-bootstrap .table > thead > tr > td.danger,
.scoped-bootstrap .table > tbody > tr > td.danger,
.scoped-bootstrap .table > tfoot > tr > td.danger,
.scoped-bootstrap .table > thead > tr > th.danger,
.scoped-bootstrap .table > tbody > tr > th.danger,
.scoped-bootstrap .table > tfoot > tr > th.danger,
.scoped-bootstrap .table > thead > tr.danger > td,
.scoped-bootstrap .table > tbody > tr.danger > td,
.scoped-bootstrap .table > tfoot > tr.danger > td,
.scoped-bootstrap .table > thead > tr.danger > th,
.scoped-bootstrap .table > tbody > tr.danger > th,
.scoped-bootstrap .table > tfoot > tr.danger > th {
  background-color: #f2dede;
}

.scoped-bootstrap .table-hover > tbody > tr > td.danger:hover,
.scoped-bootstrap .table-hover > tbody > tr > th.danger:hover,
.scoped-bootstrap .table-hover > tbody > tr.danger:hover > td,
.scoped-bootstrap .table-hover > tbody > tr:hover > .danger,
.scoped-bootstrap .table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}

.scoped-bootstrap .table-responsive {
  min-height: .01%;
  overflow-x: auto;
}

@media screen and (max-width: 767px) {
  .scoped-bootstrap .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }

  .scoped-bootstrap .table-responsive > .table {
    margin-bottom: 0;
  }

  .scoped-bootstrap .table-responsive > .table > thead > tr > th,
  .scoped-bootstrap .table-responsive > .table > tbody > tr > th,
  .scoped-bootstrap .table-responsive > .table > tfoot > tr > th,
  .scoped-bootstrap .table-responsive > .table > thead > tr > td,
  .scoped-bootstrap .table-responsive > .table > tbody > tr > td,
  .scoped-bootstrap .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }

  .scoped-bootstrap .table-responsive > .table-bordered {
    border: 0;
  }

  .scoped-bootstrap .table-responsive > .table-bordered > thead > tr > th:first-child,
  .scoped-bootstrap .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .scoped-bootstrap .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .scoped-bootstrap .table-responsive > .table-bordered > thead > tr > td:first-child,
  .scoped-bootstrap .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .scoped-bootstrap .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }

  .scoped-bootstrap .table-responsive > .table-bordered > thead > tr > th:last-child,
  .scoped-bootstrap .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .scoped-bootstrap .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .scoped-bootstrap .table-responsive > .table-bordered > thead > tr > td:last-child,
  .scoped-bootstrap .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .scoped-bootstrap .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }

  .scoped-bootstrap .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .scoped-bootstrap .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .scoped-bootstrap .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .scoped-bootstrap .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}

.scoped-bootstrap fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

.scoped-bootstrap legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}

.scoped-bootstrap label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}

.scoped-bootstrap input[type="search"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.scoped-bootstrap input[type="radio"],
.scoped-bootstrap input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \9;
  line-height: normal;
}

.scoped-bootstrap input[type="file"] {
  display: block;
}

.scoped-bootstrap input[type="range"] {
  display: block;
  width: 100%;
}

.scoped-bootstrap select[multiple],
.scoped-bootstrap select[size] {
  height: auto;
}

.scoped-bootstrap input[type="file"]:focus,
.scoped-bootstrap input[type="radio"]:focus,
.scoped-bootstrap input[type="checkbox"]:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.scoped-bootstrap output {
  display: block;
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}

.scoped-bootstrap .form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.scoped-bootstrap .form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}

.scoped-bootstrap .form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}

.scoped-bootstrap .form-control:-ms-input-placeholder {
  color: #999;
}

.scoped-bootstrap .form-control::-webkit-input-placeholder {
  color: #999;
}

.scoped-bootstrap .form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.scoped-bootstrap .form-control[disabled],
.scoped-bootstrap .form-control[readonly],
.scoped-bootstrap fieldset[disabled] .form-control {
  background-color: #eee;
  opacity: 1;
}

.scoped-bootstrap .form-control[disabled],
.scoped-bootstrap fieldset[disabled] .form-control {
  cursor: not-allowed;
}

.scoped-bootstrap textarea.form-control {
  height: auto;
}

.scoped-bootstrap input[type="search"] {
  -webkit-appearance: none;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .scoped-bootstrap input[type="date"].form-control,
  .scoped-bootstrap input[type="time"].form-control,
  .scoped-bootstrap input[type="datetime-local"].form-control,
  .scoped-bootstrap input[type="month"].form-control {
    line-height: 34px;
  }

  .scoped-bootstrap input[type="date"].input-sm,
  .scoped-bootstrap input[type="time"].input-sm,
  .scoped-bootstrap input[type="datetime-local"].input-sm,
  .scoped-bootstrap input[type="month"].input-sm,
  .scoped-bootstrap .input-group-sm input[type="date"],
  .scoped-bootstrap .input-group-sm input[type="time"],
  .scoped-bootstrap .input-group-sm input[type="datetime-local"],
  .scoped-bootstrap .input-group-sm input[type="month"] {
    line-height: 30px;
  }

  .scoped-bootstrap input[type="date"].input-lg,
  .scoped-bootstrap input[type="time"].input-lg,
  .scoped-bootstrap input[type="datetime-local"].input-lg,
  .scoped-bootstrap input[type="month"].input-lg,
  .scoped-bootstrap .input-group-lg input[type="date"],
  .scoped-bootstrap .input-group-lg input[type="time"],
  .scoped-bootstrap .input-group-lg input[type="datetime-local"],
  .scoped-bootstrap .input-group-lg input[type="month"] {
    line-height: 46px;
  }
}

.scoped-bootstrap .form-group {
  margin-bottom: 15px;
}

.scoped-bootstrap .radio,
.scoped-bootstrap .checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}

.scoped-bootstrap .radio label,
.scoped-bootstrap .checkbox label {
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}

.scoped-bootstrap .radio input[type="radio"],
.scoped-bootstrap .radio-inline input[type="radio"],
.scoped-bootstrap .checkbox input[type="checkbox"],
.scoped-bootstrap .checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-top: 4px \9;
  margin-left: -20px;
}

.scoped-bootstrap .radio + .radio,
.scoped-bootstrap .checkbox + .checkbox {
  margin-top: -5px;
}

.scoped-bootstrap .radio-inline,
.scoped-bootstrap .checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}

.scoped-bootstrap .radio-inline + .radio-inline,
.scoped-bootstrap .checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}

.scoped-bootstrap input[type="radio"][disabled],
.scoped-bootstrap input[type="checkbox"][disabled],
.scoped-bootstrap input[type="radio"].disabled,
.scoped-bootstrap input[type="checkbox"].disabled,
.scoped-bootstrap fieldset[disabled] input[type="radio"],
.scoped-bootstrap fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}

.scoped-bootstrap .radio-inline.disabled,
.scoped-bootstrap .checkbox-inline.disabled,
.scoped-bootstrap fieldset[disabled] .radio-inline,
.scoped-bootstrap fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}

.scoped-bootstrap .radio.disabled label,
.scoped-bootstrap .checkbox.disabled label,
.scoped-bootstrap fieldset[disabled] .radio label,
.scoped-bootstrap fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}

.scoped-bootstrap .form-control-static {
  min-height: 34px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0;
}

.scoped-bootstrap .form-control-static.input-lg,
.scoped-bootstrap .form-control-static.input-sm {
  padding-right: 0;
  padding-left: 0;
}

.scoped-bootstrap .input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.scoped-bootstrap select.input-sm {
  height: 30px;
  line-height: 30px;
}

.scoped-bootstrap textarea.input-sm,
.scoped-bootstrap select[multiple].input-sm {
  height: auto;
}

.scoped-bootstrap .form-group-sm .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.scoped-bootstrap .form-group-sm select.form-control {
  height: 30px;
  line-height: 30px;
}

.scoped-bootstrap .form-group-sm textarea.form-control,
.scoped-bootstrap .form-group-sm select[multiple].form-control {
  height: auto;
}

.scoped-bootstrap .form-group-sm .form-control-static {
  height: 30px;
  min-height: 32px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 1.5;
}

.scoped-bootstrap .input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}

.scoped-bootstrap select.input-lg {
  height: 46px;
  line-height: 46px;
}

.scoped-bootstrap textarea.input-lg,
.scoped-bootstrap select[multiple].input-lg {
  height: auto;
}

.scoped-bootstrap .form-group-lg .form-control {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}

.scoped-bootstrap .form-group-lg select.form-control {
  height: 46px;
  line-height: 46px;
}

.scoped-bootstrap .form-group-lg textarea.form-control,
.scoped-bootstrap .form-group-lg select[multiple].form-control {
  height: auto;
}

.scoped-bootstrap .form-group-lg .form-control-static {
  height: 46px;
  min-height: 38px;
  padding: 11px 16px;
  font-size: 18px;
  line-height: 1.3333333;
}

.scoped-bootstrap .has-feedback {
  position: relative;
}

.scoped-bootstrap .has-feedback .form-control {
  padding-right: 42.5px;
}

.scoped-bootstrap .form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  pointer-events: none;
}

.scoped-bootstrap .input-lg + .form-control-feedback,
.scoped-bootstrap .input-group-lg + .form-control-feedback,
.scoped-bootstrap .form-group-lg .form-control + .form-control-feedback {
  width: 46px;
  height: 46px;
  line-height: 46px;
}

.scoped-bootstrap .input-sm + .form-control-feedback,
.scoped-bootstrap .input-group-sm + .form-control-feedback,
.scoped-bootstrap .form-group-sm .form-control + .form-control-feedback {
  width: 30px;
  height: 30px;
  line-height: 30px;
}

.scoped-bootstrap .has-success .help-block,
.scoped-bootstrap .has-success .control-label,
.scoped-bootstrap .has-success .radio,
.scoped-bootstrap .has-success .checkbox,
.scoped-bootstrap .has-success .radio-inline,
.scoped-bootstrap .has-success .checkbox-inline,
.scoped-bootstrap .has-success.radio label,
.scoped-bootstrap .has-success.checkbox label,
.scoped-bootstrap .has-success.radio-inline label,
.scoped-bootstrap .has-success.checkbox-inline label {
  color: #3c763d;
}

.scoped-bootstrap .has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.scoped-bootstrap .has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
}

.scoped-bootstrap .has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}

.scoped-bootstrap .has-success .form-control-feedback {
  color: #3c763d;
}

.scoped-bootstrap .has-warning .help-block,
.scoped-bootstrap .has-warning .control-label,
.scoped-bootstrap .has-warning .radio,
.scoped-bootstrap .has-warning .checkbox,
.scoped-bootstrap .has-warning .radio-inline,
.scoped-bootstrap .has-warning .checkbox-inline,
.scoped-bootstrap .has-warning.radio label,
.scoped-bootstrap .has-warning.checkbox label,
.scoped-bootstrap .has-warning.radio-inline label,
.scoped-bootstrap .has-warning.checkbox-inline label {
  color: #8a6d3b;
}

.scoped-bootstrap .has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.scoped-bootstrap .has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
}

.scoped-bootstrap .has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}

.scoped-bootstrap .has-warning .form-control-feedback {
  color: #8a6d3b;
}

.scoped-bootstrap .has-error .help-block,
.scoped-bootstrap .has-error .control-label,
.scoped-bootstrap .has-error .radio,
.scoped-bootstrap .has-error .checkbox,
.scoped-bootstrap .has-error .radio-inline,
.scoped-bootstrap .has-error .checkbox-inline,
.scoped-bootstrap .has-error.radio label,
.scoped-bootstrap .has-error.checkbox label,
.scoped-bootstrap .has-error.radio-inline label,
.scoped-bootstrap .has-error.checkbox-inline label {
  color: #a94442;
}

.scoped-bootstrap .has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.scoped-bootstrap .has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
}

.scoped-bootstrap .has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}

.scoped-bootstrap .has-error .form-control-feedback {
  color: #a94442;
}

.scoped-bootstrap .has-feedback label ~ .form-control-feedback {
  top: 25px;
}

.scoped-bootstrap .has-feedback label.sr-only ~ .form-control-feedback {
  top: 0;
}

.scoped-bootstrap .help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
}

@media (min-width: 768px) {
  .scoped-bootstrap .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }

  .scoped-bootstrap .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .scoped-bootstrap .form-inline .form-control-static {
    display: inline-block;
  }

  .scoped-bootstrap .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }

  .scoped-bootstrap .form-inline .input-group .input-group-addon,
  .scoped-bootstrap .form-inline .input-group .input-group-btn,
  .scoped-bootstrap .form-inline .input-group .form-control {
    width: auto;
  }

  .scoped-bootstrap .form-inline .input-group > .form-control {
    width: 100%;
  }

  .scoped-bootstrap .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }

  .scoped-bootstrap .form-inline .radio,
  .scoped-bootstrap .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }

  .scoped-bootstrap .form-inline .radio label,
  .scoped-bootstrap .form-inline .checkbox label {
    padding-left: 0;
  }

  .scoped-bootstrap .form-inline .radio input[type="radio"],
  .scoped-bootstrap .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }

  .scoped-bootstrap .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}

.scoped-bootstrap .form-horizontal .radio,
.scoped-bootstrap .form-horizontal .checkbox,
.scoped-bootstrap .form-horizontal .radio-inline,
.scoped-bootstrap .form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}

.scoped-bootstrap .form-horizontal .radio,
.scoped-bootstrap .form-horizontal .checkbox {
  min-height: 27px;
}

.scoped-bootstrap .form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 768px) {
  .scoped-bootstrap .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
}

.scoped-bootstrap .form-horizontal .has-feedback .form-control-feedback {
  right: 15px;
}

@media (min-width: 768px) {
  .scoped-bootstrap .form-horizontal .form-group-lg .control-label {
    padding-top: 11px;
    font-size: 18px;
  }
}

@media (min-width: 768px) {
  .scoped-bootstrap .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
    font-size: 12px;
  }
}

.scoped-bootstrap .btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.scoped-bootstrap .btn:focus,
.scoped-bootstrap .btn:active:focus,
.scoped-bootstrap .btn.active:focus,
.scoped-bootstrap .btn.focus,
.scoped-bootstrap .btn:active.focus,
.scoped-bootstrap .btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.scoped-bootstrap .btn:hover,
.scoped-bootstrap .btn:focus,
.scoped-bootstrap .btn.focus {
  color: #333;
  text-decoration: none;
}

.scoped-bootstrap .btn:active,
.scoped-bootstrap .btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}

.scoped-bootstrap .btn.disabled,
.scoped-bootstrap .btn[disabled],
.scoped-bootstrap fieldset[disabled] .btn {
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
  opacity: .65;
}

.scoped-bootstrap a.btn.disabled,
.scoped-bootstrap fieldset[disabled] a.btn {
  pointer-events: none;
}

.scoped-bootstrap .btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

.scoped-bootstrap .btn-default:focus,
.scoped-bootstrap .btn-default.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}

.scoped-bootstrap .btn-default:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}

.scoped-bootstrap .btn-default:active,
.scoped-bootstrap .btn-default.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-default {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}

.scoped-bootstrap .btn-default:active:hover,
.scoped-bootstrap .btn-default.active:hover,
.scoped-bootstrap .open > .dropdown-toggle.btn-default:hover,
.scoped-bootstrap .btn-default:active:focus,
.scoped-bootstrap .btn-default.active:focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-default:focus,
.scoped-bootstrap .btn-default:active.focus,
.scoped-bootstrap .btn-default.active.focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-default.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}

.scoped-bootstrap .btn-default:active,
.scoped-bootstrap .btn-default.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-default {
  background-image: none;
}

.scoped-bootstrap .btn-default.disabled:hover,
.scoped-bootstrap .btn-default[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .btn-default:hover,
.scoped-bootstrap .btn-default.disabled:focus,
.scoped-bootstrap .btn-default[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .btn-default:focus,
.scoped-bootstrap .btn-default.disabled.focus,
.scoped-bootstrap .btn-default[disabled].focus,
.scoped-bootstrap fieldset[disabled] .btn-default.focus {
  background-color: #fff;
  border-color: #ccc;
}

.scoped-bootstrap .btn-default .badge {
  color: #fff;
  background-color: #333;
}

.scoped-bootstrap .btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.scoped-bootstrap .btn-primary:focus,
.scoped-bootstrap .btn-primary.focus {
  color: #fff;
  background-color: #286090;
  border-color: #122b40;
}

.scoped-bootstrap .btn-primary:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}

.scoped-bootstrap .btn-primary:active,
.scoped-bootstrap .btn-primary.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}

.scoped-bootstrap .btn-primary:active:hover,
.scoped-bootstrap .btn-primary.active:hover,
.scoped-bootstrap .open > .dropdown-toggle.btn-primary:hover,
.scoped-bootstrap .btn-primary:active:focus,
.scoped-bootstrap .btn-primary.active:focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-primary:focus,
.scoped-bootstrap .btn-primary:active.focus,
.scoped-bootstrap .btn-primary.active.focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-primary.focus {
  color: #fff;
  background-color: #204d74;
  border-color: #122b40;
}

.scoped-bootstrap .btn-primary:active,
.scoped-bootstrap .btn-primary.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-primary {
  background-image: none;
}

.scoped-bootstrap .btn-primary.disabled:hover,
.scoped-bootstrap .btn-primary[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .btn-primary:hover,
.scoped-bootstrap .btn-primary.disabled:focus,
.scoped-bootstrap .btn-primary[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .btn-primary:focus,
.scoped-bootstrap .btn-primary.disabled.focus,
.scoped-bootstrap .btn-primary[disabled].focus,
.scoped-bootstrap fieldset[disabled] .btn-primary.focus {
  background-color: #337ab7;
  border-color: #2e6da4;
}

.scoped-bootstrap .btn-primary .badge {
  color: #337ab7;
  background-color: #fff;
}

.scoped-bootstrap .btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.scoped-bootstrap .btn-success:focus,
.scoped-bootstrap .btn-success.focus {
  color: #fff;
  background-color: #449d44;
  border-color: #255625;
}

.scoped-bootstrap .btn-success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}

.scoped-bootstrap .btn-success:active,
.scoped-bootstrap .btn-success.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}

.scoped-bootstrap .btn-success:active:hover,
.scoped-bootstrap .btn-success.active:hover,
.scoped-bootstrap .open > .dropdown-toggle.btn-success:hover,
.scoped-bootstrap .btn-success:active:focus,
.scoped-bootstrap .btn-success.active:focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-success:focus,
.scoped-bootstrap .btn-success:active.focus,
.scoped-bootstrap .btn-success.active.focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-success.focus {
  color: #fff;
  background-color: #398439;
  border-color: #255625;
}

.scoped-bootstrap .btn-success:active,
.scoped-bootstrap .btn-success.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-success {
  background-image: none;
}

.scoped-bootstrap .btn-success.disabled:hover,
.scoped-bootstrap .btn-success[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .btn-success:hover,
.scoped-bootstrap .btn-success.disabled:focus,
.scoped-bootstrap .btn-success[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .btn-success:focus,
.scoped-bootstrap .btn-success.disabled.focus,
.scoped-bootstrap .btn-success[disabled].focus,
.scoped-bootstrap fieldset[disabled] .btn-success.focus {
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.scoped-bootstrap .btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}

.scoped-bootstrap .btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}

.scoped-bootstrap .btn-info:focus,
.scoped-bootstrap .btn-info.focus {
  color: #fff;
  background-color: #31b0d5;
  border-color: #1b6d85;
}

.scoped-bootstrap .btn-info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}

.scoped-bootstrap .btn-info:active,
.scoped-bootstrap .btn-info.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}

.scoped-bootstrap .btn-info:active:hover,
.scoped-bootstrap .btn-info.active:hover,
.scoped-bootstrap .open > .dropdown-toggle.btn-info:hover,
.scoped-bootstrap .btn-info:active:focus,
.scoped-bootstrap .btn-info.active:focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-info:focus,
.scoped-bootstrap .btn-info:active.focus,
.scoped-bootstrap .btn-info.active.focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-info.focus {
  color: #fff;
  background-color: #269abc;
  border-color: #1b6d85;
}

.scoped-bootstrap .btn-info:active,
.scoped-bootstrap .btn-info.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-info {
  background-image: none;
}

.scoped-bootstrap .btn-info.disabled:hover,
.scoped-bootstrap .btn-info[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .btn-info:hover,
.scoped-bootstrap .btn-info.disabled:focus,
.scoped-bootstrap .btn-info[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .btn-info:focus,
.scoped-bootstrap .btn-info.disabled.focus,
.scoped-bootstrap .btn-info[disabled].focus,
.scoped-bootstrap fieldset[disabled] .btn-info.focus {
  background-color: #5bc0de;
  border-color: #46b8da;
}

.scoped-bootstrap .btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}

.scoped-bootstrap .btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}

.scoped-bootstrap .btn-warning:focus,
.scoped-bootstrap .btn-warning.focus {
  color: #fff;
  background-color: #ec971f;
  border-color: #985f0d;
}

.scoped-bootstrap .btn-warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}

.scoped-bootstrap .btn-warning:active,
.scoped-bootstrap .btn-warning.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}

.scoped-bootstrap .btn-warning:active:hover,
.scoped-bootstrap .btn-warning.active:hover,
.scoped-bootstrap .open > .dropdown-toggle.btn-warning:hover,
.scoped-bootstrap .btn-warning:active:focus,
.scoped-bootstrap .btn-warning.active:focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-warning:focus,
.scoped-bootstrap .btn-warning:active.focus,
.scoped-bootstrap .btn-warning.active.focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-warning.focus {
  color: #fff;
  background-color: #d58512;
  border-color: #985f0d;
}

.scoped-bootstrap .btn-warning:active,
.scoped-bootstrap .btn-warning.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-warning {
  background-image: none;
}

.scoped-bootstrap .btn-warning.disabled:hover,
.scoped-bootstrap .btn-warning[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .btn-warning:hover,
.scoped-bootstrap .btn-warning.disabled:focus,
.scoped-bootstrap .btn-warning[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .btn-warning:focus,
.scoped-bootstrap .btn-warning.disabled.focus,
.scoped-bootstrap .btn-warning[disabled].focus,
.scoped-bootstrap fieldset[disabled] .btn-warning.focus {
  background-color: #f0ad4e;
  border-color: #eea236;
}

.scoped-bootstrap .btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}

.scoped-bootstrap .btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}

.scoped-bootstrap .btn-danger:focus,
.scoped-bootstrap .btn-danger.focus {
  color: #fff;
  background-color: #c9302c;
  border-color: #761c19;
}

.scoped-bootstrap .btn-danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}

.scoped-bootstrap .btn-danger:active,
.scoped-bootstrap .btn-danger.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}

.scoped-bootstrap .btn-danger:active:hover,
.scoped-bootstrap .btn-danger.active:hover,
.scoped-bootstrap .open > .dropdown-toggle.btn-danger:hover,
.scoped-bootstrap .btn-danger:active:focus,
.scoped-bootstrap .btn-danger.active:focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-danger:focus,
.scoped-bootstrap .btn-danger:active.focus,
.scoped-bootstrap .btn-danger.active.focus,
.scoped-bootstrap .open > .dropdown-toggle.btn-danger.focus {
  color: #fff;
  background-color: #ac2925;
  border-color: #761c19;
}

.scoped-bootstrap .btn-danger:active,
.scoped-bootstrap .btn-danger.active,
.scoped-bootstrap .open > .dropdown-toggle.btn-danger {
  background-image: none;
}

.scoped-bootstrap .btn-danger.disabled:hover,
.scoped-bootstrap .btn-danger[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .btn-danger:hover,
.scoped-bootstrap .btn-danger.disabled:focus,
.scoped-bootstrap .btn-danger[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .btn-danger:focus,
.scoped-bootstrap .btn-danger.disabled.focus,
.scoped-bootstrap .btn-danger[disabled].focus,
.scoped-bootstrap fieldset[disabled] .btn-danger.focus {
  background-color: #d9534f;
  border-color: #d43f3a;
}

.scoped-bootstrap .btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}

.scoped-bootstrap .btn-link {
  font-weight: normal;
  color: #337ab7;
  border-radius: 0;
}

.scoped-bootstrap .btn-link,
.scoped-bootstrap .btn-link:active,
.scoped-bootstrap .btn-link.active,
.scoped-bootstrap .btn-link[disabled],
.scoped-bootstrap fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.scoped-bootstrap .btn-link,
.scoped-bootstrap .btn-link:hover,
.scoped-bootstrap .btn-link:focus,
.scoped-bootstrap .btn-link:active {
  border-color: transparent;
}

.scoped-bootstrap .btn-link:hover,
.scoped-bootstrap .btn-link:focus {
  color: #23527c;
  text-decoration: underline;
  background-color: transparent;
}

.scoped-bootstrap .btn-link[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .btn-link:hover,
.scoped-bootstrap .btn-link[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .btn-link:focus {
  color: #777;
  text-decoration: none;
}

.scoped-bootstrap .btn-lg,
.scoped-bootstrap .btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}

.scoped-bootstrap .btn-sm,
.scoped-bootstrap .btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.scoped-bootstrap .btn-xs,
.scoped-bootstrap .btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.scoped-bootstrap .btn-block {
  display: block;
  width: 100%;
}

.scoped-bootstrap .btn-block + .btn-block {
  margin-top: 5px;
}

.scoped-bootstrap input[type="submit"].btn-block,
.scoped-bootstrap input[type="reset"].btn-block,
.scoped-bootstrap input[type="button"].btn-block {
  width: 100%;
}

.scoped-bootstrap .fade {
  opacity: 0;
  -webkit-transition: opacity .15s linear;
  -o-transition: opacity .15s linear;
  transition: opacity .15s linear;
}

.scoped-bootstrap .fade.in {
  opacity: 1;
}

.scoped-bootstrap .collapse {
  display: none;
}

.scoped-bootstrap .collapse.in {
  display: block;
}

.scoped-bootstrap tr.collapse.in {
  display: table-row;
}

.scoped-bootstrap tbody.collapse.in {
  display: table-row-group;
}

.scoped-bootstrap .collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .35s;
  -o-transition-duration: .35s;
  transition-duration: .35s;
  -webkit-transition-property: height, visibility;
  -o-transition-property: height, visibility;
  transition-property: height, visibility;
}

.scoped-bootstrap .caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.scoped-bootstrap .dropup,
.scoped-bootstrap .dropdown {
  position: relative;
}

.scoped-bootstrap .dropdown-toggle:focus {
  outline: 0;
}

.scoped-bootstrap .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}

.scoped-bootstrap .dropdown-menu.pull-right {
  right: 0;
  left: auto;
}

.scoped-bootstrap .dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}

.scoped-bootstrap .dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}

.scoped-bootstrap .dropdown-menu > li > a:hover,
.scoped-bootstrap .dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}

.scoped-bootstrap .dropdown-menu > .active > a,
.scoped-bootstrap .dropdown-menu > .active > a:hover,
.scoped-bootstrap .dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #337ab7;
  outline: 0;
}

.scoped-bootstrap .dropdown-menu > .disabled > a,
.scoped-bootstrap .dropdown-menu > .disabled > a:hover,
.scoped-bootstrap .dropdown-menu > .disabled > a:focus {
  color: #777;
}

.scoped-bootstrap .dropdown-menu > .disabled > a:hover,
.scoped-bootstrap .dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}

.scoped-bootstrap .open > .dropdown-menu {
  display: block;
}

.scoped-bootstrap .open > a {
  outline: 0;
}

.scoped-bootstrap .dropdown-menu-right {
  right: 0;
  left: auto;
}

.scoped-bootstrap .dropdown-menu-left {
  right: auto;
  left: 0;
}

.scoped-bootstrap .dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777;
  white-space: nowrap;
}

.scoped-bootstrap .dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}

.scoped-bootstrap .pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}

.scoped-bootstrap .dropup .caret,
.scoped-bootstrap .navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px dashed;
  border-bottom: 4px solid \9;
}

.scoped-bootstrap .dropup .dropdown-menu,
.scoped-bootstrap .navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }

  .scoped-bootstrap .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
  }
}

.scoped-bootstrap .btn-group,
.scoped-bootstrap .btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.scoped-bootstrap .btn-group > .btn,
.scoped-bootstrap .btn-group-vertical > .btn {
  position: relative;
  float: left;
}

.scoped-bootstrap .btn-group > .btn:hover,
.scoped-bootstrap .btn-group-vertical > .btn:hover,
.scoped-bootstrap .btn-group > .btn:focus,
.scoped-bootstrap .btn-group-vertical > .btn:focus,
.scoped-bootstrap .btn-group > .btn:active,
.scoped-bootstrap .btn-group-vertical > .btn:active,
.scoped-bootstrap .btn-group > .btn.active,
.scoped-bootstrap .btn-group-vertical > .btn.active {
  z-index: 2;
}

.scoped-bootstrap .btn-group .btn + .btn,
.scoped-bootstrap .btn-group .btn + .btn-group,
.scoped-bootstrap .btn-group .btn-group + .btn,
.scoped-bootstrap .btn-group .btn-group + .btn-group {
  margin-left: -1px;
}

.scoped-bootstrap .btn-toolbar {
  margin-left: -5px;
}

.scoped-bootstrap .btn-toolbar .btn,
.scoped-bootstrap .btn-toolbar .btn-group,
.scoped-bootstrap .btn-toolbar .input-group {
  float: left;
}

.scoped-bootstrap .btn-toolbar > .btn,
.scoped-bootstrap .btn-toolbar > .btn-group,
.scoped-bootstrap .btn-toolbar > .input-group {
  margin-left: 5px;
}

.scoped-bootstrap .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}

.scoped-bootstrap .btn-group > .btn:first-child {
  margin-left: 0;
}

.scoped-bootstrap .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.scoped-bootstrap .btn-group > .btn:last-child:not(:first-child),
.scoped-bootstrap .btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.scoped-bootstrap .btn-group > .btn-group {
  float: left;
}

.scoped-bootstrap .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}

.scoped-bootstrap .btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.scoped-bootstrap .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.scoped-bootstrap .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.scoped-bootstrap .btn-group .dropdown-toggle:active,
.scoped-bootstrap .btn-group.open .dropdown-toggle {
  outline: 0;
}

.scoped-bootstrap .btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}

.scoped-bootstrap .btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}

.scoped-bootstrap .btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}

.scoped-bootstrap .btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.scoped-bootstrap .btn .caret {
  margin-left: 0;
}

.scoped-bootstrap .btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}

.scoped-bootstrap .dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}

.scoped-bootstrap .btn-group-vertical > .btn,
.scoped-bootstrap .btn-group-vertical > .btn-group,
.scoped-bootstrap .btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}

.scoped-bootstrap .btn-group-vertical > .btn-group > .btn {
  float: none;
}

.scoped-bootstrap .btn-group-vertical > .btn + .btn,
.scoped-bootstrap .btn-group-vertical > .btn + .btn-group,
.scoped-bootstrap .btn-group-vertical > .btn-group + .btn,
.scoped-bootstrap .btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}

.scoped-bootstrap .btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.scoped-bootstrap .btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.scoped-bootstrap .btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.scoped-bootstrap .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}

.scoped-bootstrap .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.scoped-bootstrap .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.scoped-bootstrap .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.scoped-bootstrap .btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}

.scoped-bootstrap .btn-group-justified > .btn,
.scoped-bootstrap .btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}

.scoped-bootstrap .btn-group-justified > .btn-group .btn {
  width: 100%;
}

.scoped-bootstrap .btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}

.scoped-bootstrap [data-toggle="buttons"] > .btn input[type="radio"],
.scoped-bootstrap [data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
.scoped-bootstrap [data-toggle="buttons"] > .btn input[type="checkbox"],
.scoped-bootstrap [data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.scoped-bootstrap .input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}

.scoped-bootstrap .input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
}

.scoped-bootstrap .input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}

.scoped-bootstrap .input-group .form-control:focus {
  z-index: 3;
}

.scoped-bootstrap .input-group-lg > .form-control,
.scoped-bootstrap .input-group-lg > .input-group-addon,
.scoped-bootstrap .input-group-lg > .input-group-btn > .btn {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}

.scoped-bootstrap select.input-group-lg > .form-control,
.scoped-bootstrap select.input-group-lg > .input-group-addon,
.scoped-bootstrap select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
}

.scoped-bootstrap textarea.input-group-lg > .form-control,
.scoped-bootstrap textarea.input-group-lg > .input-group-addon,
.scoped-bootstrap textarea.input-group-lg > .input-group-btn > .btn,
.scoped-bootstrap select[multiple].input-group-lg > .form-control,
.scoped-bootstrap select[multiple].input-group-lg > .input-group-addon,
.scoped-bootstrap select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}

.scoped-bootstrap .input-group-sm > .form-control,
.scoped-bootstrap .input-group-sm > .input-group-addon,
.scoped-bootstrap .input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.scoped-bootstrap select.input-group-sm > .form-control,
.scoped-bootstrap select.input-group-sm > .input-group-addon,
.scoped-bootstrap select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}

.scoped-bootstrap textarea.input-group-sm > .form-control,
.scoped-bootstrap textarea.input-group-sm > .input-group-addon,
.scoped-bootstrap textarea.input-group-sm > .input-group-btn > .btn,
.scoped-bootstrap select[multiple].input-group-sm > .form-control,
.scoped-bootstrap select[multiple].input-group-sm > .input-group-addon,
.scoped-bootstrap select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}

.scoped-bootstrap .input-group-addon,
.scoped-bootstrap .input-group-btn,
.scoped-bootstrap .input-group .form-control {
  display: table-cell;
}

.scoped-bootstrap .input-group-addon:not(:first-child):not(:last-child),
.scoped-bootstrap .input-group-btn:not(:first-child):not(:last-child),
.scoped-bootstrap .input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.scoped-bootstrap .input-group-addon,
.scoped-bootstrap .input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}

.scoped-bootstrap .input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.scoped-bootstrap .input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}

.scoped-bootstrap .input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
  border-radius: 6px;
}

.scoped-bootstrap .input-group-addon input[type="radio"],
.scoped-bootstrap .input-group-addon input[type="checkbox"] {
  margin-top: 0;
}

.scoped-bootstrap .input-group .form-control:first-child,
.scoped-bootstrap .input-group-addon:first-child,
.scoped-bootstrap .input-group-btn:first-child > .btn,
.scoped-bootstrap .input-group-btn:first-child > .btn-group > .btn,
.scoped-bootstrap .input-group-btn:first-child > .dropdown-toggle,
.scoped-bootstrap .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.scoped-bootstrap .input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.scoped-bootstrap .input-group-addon:first-child {
  border-right: 0;
}

.scoped-bootstrap .input-group .form-control:last-child,
.scoped-bootstrap .input-group-addon:last-child,
.scoped-bootstrap .input-group-btn:last-child > .btn,
.scoped-bootstrap .input-group-btn:last-child > .btn-group > .btn,
.scoped-bootstrap .input-group-btn:last-child > .dropdown-toggle,
.scoped-bootstrap .input-group-btn:first-child > .btn:not(:first-child),
.scoped-bootstrap .input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.scoped-bootstrap .input-group-addon:last-child {
  border-left: 0;
}

.scoped-bootstrap .input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}

.scoped-bootstrap .input-group-btn > .btn {
  position: relative;
}

.scoped-bootstrap .input-group-btn > .btn + .btn {
  margin-left: -1px;
}

.scoped-bootstrap .input-group-btn > .btn:hover,
.scoped-bootstrap .input-group-btn > .btn:focus,
.scoped-bootstrap .input-group-btn > .btn:active {
  z-index: 2;
}

.scoped-bootstrap .input-group-btn:first-child > .btn,
.scoped-bootstrap .input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}

.scoped-bootstrap .input-group-btn:last-child > .btn,
.scoped-bootstrap .input-group-btn:last-child > .btn-group {
  z-index: 2;
  margin-left: -1px;
}

.scoped-bootstrap .nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.scoped-bootstrap .nav > li {
  position: relative;
  display: block;
}

.scoped-bootstrap .nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}

.scoped-bootstrap .nav > li > a:hover,
.scoped-bootstrap .nav > li > a:focus {
  text-decoration: none;
  background-color: #eee;
}

.scoped-bootstrap .nav > li.disabled > a {
  color: #777;
}

.scoped-bootstrap .nav > li.disabled > a:hover,
.scoped-bootstrap .nav > li.disabled > a:focus {
  color: #777;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}

.scoped-bootstrap .nav .open > a,
.scoped-bootstrap .nav .open > a:hover,
.scoped-bootstrap .nav .open > a:focus {
  background-color: #eee;
  border-color: #337ab7;
}

.scoped-bootstrap .nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}

.scoped-bootstrap .nav > li > a > img {
  max-width: none;
}

.scoped-bootstrap .nav-tabs {
  border-bottom: 1px solid #ddd;
}

.scoped-bootstrap .nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}

.scoped-bootstrap .nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}

.scoped-bootstrap .nav-tabs > li > a:hover {
  border-color: #eee #eee #ddd;
}

.scoped-bootstrap .nav-tabs > li.active > a,
.scoped-bootstrap .nav-tabs > li.active > a:hover,
.scoped-bootstrap .nav-tabs > li.active > a:focus {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}

.scoped-bootstrap .nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}

.scoped-bootstrap .nav-tabs.nav-justified > li {
  float: none;
}

.scoped-bootstrap .nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}

.scoped-bootstrap .nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}

@media (min-width: 768px) {
  .scoped-bootstrap .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }

  .scoped-bootstrap .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}

.scoped-bootstrap .nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}

.scoped-bootstrap .nav-tabs.nav-justified > .active > a,
.scoped-bootstrap .nav-tabs.nav-justified > .active > a:hover,
.scoped-bootstrap .nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #ddd;
}

@media (min-width: 768px) {
  .scoped-bootstrap .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }

  .scoped-bootstrap .nav-tabs.nav-justified > .active > a,
  .scoped-bootstrap .nav-tabs.nav-justified > .active > a:hover,
  .scoped-bootstrap .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}

.scoped-bootstrap .nav-pills > li {
  float: left;
}

.scoped-bootstrap .nav-pills > li > a {
  border-radius: 4px;
}

.scoped-bootstrap .nav-pills > li + li {
  margin-left: 2px;
}

.scoped-bootstrap .nav-pills > li.active > a,
.scoped-bootstrap .nav-pills > li.active > a:hover,
.scoped-bootstrap .nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #337ab7;
}

.scoped-bootstrap .nav-stacked > li {
  float: none;
}

.scoped-bootstrap .nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}

.scoped-bootstrap .nav-justified {
  width: 100%;
}

.scoped-bootstrap .nav-justified > li {
  float: none;
}

.scoped-bootstrap .nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}

.scoped-bootstrap .nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}

@media (min-width: 768px) {
  .scoped-bootstrap .nav-justified > li {
    display: table-cell;
    width: 1%;
  }

  .scoped-bootstrap .nav-justified > li > a {
    margin-bottom: 0;
  }
}

.scoped-bootstrap .nav-tabs-justified {
  border-bottom: 0;
}

.scoped-bootstrap .nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}

.scoped-bootstrap .nav-tabs-justified > .active > a,
.scoped-bootstrap .nav-tabs-justified > .active > a:hover,
.scoped-bootstrap .nav-tabs-justified > .active > a:focus {
  border: 1px solid #ddd;
}

@media (min-width: 768px) {
  .scoped-bootstrap .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }

  .scoped-bootstrap .nav-tabs-justified > .active > a,
  .scoped-bootstrap .nav-tabs-justified > .active > a:hover,
  .scoped-bootstrap .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}

.scoped-bootstrap .tab-content > .tab-pane {
  display: none;
}

.scoped-bootstrap .tab-content > .active {
  display: block;
}

.scoped-bootstrap .nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.scoped-bootstrap .navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar {
    border-radius: 4px;
  }
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-header {
    float: left;
  }
}

.scoped-bootstrap .navbar-collapse {
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}

.scoped-bootstrap .navbar-collapse.in {
  overflow-y: auto;
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-collapse {
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .scoped-bootstrap .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }

  .scoped-bootstrap .navbar-collapse.in {
    overflow-y: visible;
  }

  .scoped-bootstrap .navbar-fixed-top .navbar-collapse,
  .scoped-bootstrap .navbar-static-top .navbar-collapse,
  .scoped-bootstrap .navbar-fixed-bottom .navbar-collapse {
    padding-right: 0;
    padding-left: 0;
  }
}

.scoped-bootstrap .navbar-fixed-top .navbar-collapse,
.scoped-bootstrap .navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}

@media (max-device-width: 480px) and (orientation: landscape) {
  .scoped-bootstrap .navbar-fixed-top .navbar-collapse,
  .scoped-bootstrap .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}

.scoped-bootstrap .container > .navbar-header,
.scoped-bootstrap .container-fluid > .navbar-header,
.scoped-bootstrap .container > .navbar-collapse,
.scoped-bootstrap .container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 768px) {
  .scoped-bootstrap .container > .navbar-header,
  .scoped-bootstrap .container-fluid > .navbar-header,
  .scoped-bootstrap .container > .navbar-collapse,
  .scoped-bootstrap .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}

.scoped-bootstrap .navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-static-top {
    border-radius: 0;
  }
}

.scoped-bootstrap .navbar-fixed-top,
.scoped-bootstrap .navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-fixed-top,
  .scoped-bootstrap .navbar-fixed-bottom {
    border-radius: 0;
  }
}

.scoped-bootstrap .navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}

.scoped-bootstrap .navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}

.scoped-bootstrap .navbar-brand {
  float: left;
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}

.scoped-bootstrap .navbar-brand:hover,
.scoped-bootstrap .navbar-brand:focus {
  text-decoration: none;
}

.scoped-bootstrap .navbar-brand > img {
  display: block;
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar > .container .navbar-brand,
  .scoped-bootstrap .navbar > .container-fluid .navbar-brand {
    margin-left: -15px;
  }
}

.scoped-bootstrap .navbar-toggle {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.scoped-bootstrap .navbar-toggle:focus {
  outline: 0;
}

.scoped-bootstrap .navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.scoped-bootstrap .navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-toggle {
    display: none;
  }
}

.scoped-bootstrap .navbar-nav {
  margin: 7.5px -15px;
}

.scoped-bootstrap .navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}

@media (max-width: 767px) {
  .scoped-bootstrap .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .scoped-bootstrap .navbar-nav .open .dropdown-menu > li > a,
  .scoped-bootstrap .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }

  .scoped-bootstrap .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
  }

  .scoped-bootstrap .navbar-nav .open .dropdown-menu > li > a:hover,
  .scoped-bootstrap .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-nav {
    float: left;
    margin: 0;
  }

  .scoped-bootstrap .navbar-nav > li {
    float: left;
  }

  .scoped-bootstrap .navbar-nav > li > a {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}

.scoped-bootstrap .navbar-form {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }

  .scoped-bootstrap .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .scoped-bootstrap .navbar-form .form-control-static {
    display: inline-block;
  }

  .scoped-bootstrap .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }

  .scoped-bootstrap .navbar-form .input-group .input-group-addon,
  .scoped-bootstrap .navbar-form .input-group .input-group-btn,
  .scoped-bootstrap .navbar-form .input-group .form-control {
    width: auto;
  }

  .scoped-bootstrap .navbar-form .input-group > .form-control {
    width: 100%;
  }

  .scoped-bootstrap .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }

  .scoped-bootstrap .navbar-form .radio,
  .scoped-bootstrap .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }

  .scoped-bootstrap .navbar-form .radio label,
  .scoped-bootstrap .navbar-form .checkbox label {
    padding-left: 0;
  }

  .scoped-bootstrap .navbar-form .radio input[type="radio"],
  .scoped-bootstrap .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }

  .scoped-bootstrap .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}

@media (max-width: 767px) {
  .scoped-bootstrap .navbar-form .form-group {
    margin-bottom: 5px;
  }

  .scoped-bootstrap .navbar-form .form-group:last-child {
    margin-bottom: 0;
  }
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

.scoped-bootstrap .navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.scoped-bootstrap .navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.scoped-bootstrap .navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}

.scoped-bootstrap .navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}

.scoped-bootstrap .navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}

.scoped-bootstrap .navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
}

@media (min-width: 768px) {
  .scoped-bootstrap .navbar-left {
    float: left !important;
  }

  .scoped-bootstrap .navbar-right {
    float: right !important;
    margin-right: -15px;
  }

  .scoped-bootstrap .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}

.scoped-bootstrap .navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}

.scoped-bootstrap .navbar-default .navbar-brand {
  color: #777;
}

.scoped-bootstrap .navbar-default .navbar-brand:hover,
.scoped-bootstrap .navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}

.scoped-bootstrap .navbar-default .navbar-text {
  color: #777;
}

.scoped-bootstrap .navbar-default .navbar-nav > li > a {
  color: #777;
}

.scoped-bootstrap .navbar-default .navbar-nav > li > a:hover,
.scoped-bootstrap .navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}

.scoped-bootstrap .navbar-default .navbar-nav > .active > a,
.scoped-bootstrap .navbar-default .navbar-nav > .active > a:hover,
.scoped-bootstrap .navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}

.scoped-bootstrap .navbar-default .navbar-nav > .disabled > a,
.scoped-bootstrap .navbar-default .navbar-nav > .disabled > a:hover,
.scoped-bootstrap .navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}

.scoped-bootstrap .navbar-default .navbar-toggle {
  border-color: #ddd;
}

.scoped-bootstrap .navbar-default .navbar-toggle:hover,
.scoped-bootstrap .navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}

.scoped-bootstrap .navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}

.scoped-bootstrap .navbar-default .navbar-collapse,
.scoped-bootstrap .navbar-default .navbar-form {
  border-color: #e7e7e7;
}

.scoped-bootstrap .navbar-default .navbar-nav > .open > a,
.scoped-bootstrap .navbar-default .navbar-nav > .open > a:hover,
.scoped-bootstrap .navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}

@media (max-width: 767px) {
  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }

  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }

  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }

  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .scoped-bootstrap .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}

.scoped-bootstrap .navbar-default .navbar-link {
  color: #777;
}

.scoped-bootstrap .navbar-default .navbar-link:hover {
  color: #333;
}

.scoped-bootstrap .navbar-default .btn-link {
  color: #777;
}

.scoped-bootstrap .navbar-default .btn-link:hover,
.scoped-bootstrap .navbar-default .btn-link:focus {
  color: #333;
}

.scoped-bootstrap .navbar-default .btn-link[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .navbar-default .btn-link:hover,
.scoped-bootstrap .navbar-default .btn-link[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .navbar-default .btn-link:focus {
  color: #ccc;
}

.scoped-bootstrap .navbar-inverse {
  background-color: #222;
  border-color: #080808;
}

.scoped-bootstrap .navbar-inverse .navbar-brand {
  color: #9d9d9d;
}

.scoped-bootstrap .navbar-inverse .navbar-brand:hover,
.scoped-bootstrap .navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}

.scoped-bootstrap .navbar-inverse .navbar-text {
  color: #9d9d9d;
}

.scoped-bootstrap .navbar-inverse .navbar-nav > li > a {
  color: #9d9d9d;
}

.scoped-bootstrap .navbar-inverse .navbar-nav > li > a:hover,
.scoped-bootstrap .navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}

.scoped-bootstrap .navbar-inverse .navbar-nav > .active > a,
.scoped-bootstrap .navbar-inverse .navbar-nav > .active > a:hover,
.scoped-bootstrap .navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}

.scoped-bootstrap .navbar-inverse .navbar-nav > .disabled > a,
.scoped-bootstrap .navbar-inverse .navbar-nav > .disabled > a:hover,
.scoped-bootstrap .navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}

.scoped-bootstrap .navbar-inverse .navbar-toggle {
  border-color: #333;
}

.scoped-bootstrap .navbar-inverse .navbar-toggle:hover,
.scoped-bootstrap .navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}

.scoped-bootstrap .navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}

.scoped-bootstrap .navbar-inverse .navbar-collapse,
.scoped-bootstrap .navbar-inverse .navbar-form {
  border-color: #101010;
}

.scoped-bootstrap .navbar-inverse .navbar-nav > .open > a,
.scoped-bootstrap .navbar-inverse .navbar-nav > .open > a:hover,
.scoped-bootstrap .navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}

@media (max-width: 767px) {
  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }

  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }

  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #9d9d9d;
  }

  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }

  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }

  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .scoped-bootstrap .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}

.scoped-bootstrap .navbar-inverse .navbar-link {
  color: #9d9d9d;
}

.scoped-bootstrap .navbar-inverse .navbar-link:hover {
  color: #fff;
}

.scoped-bootstrap .navbar-inverse .btn-link {
  color: #9d9d9d;
}

.scoped-bootstrap .navbar-inverse .btn-link:hover,
.scoped-bootstrap .navbar-inverse .btn-link:focus {
  color: #fff;
}

.scoped-bootstrap .navbar-inverse .btn-link[disabled]:hover,
.scoped-bootstrap fieldset[disabled] .navbar-inverse .btn-link:hover,
.scoped-bootstrap .navbar-inverse .btn-link[disabled]:focus,
.scoped-bootstrap fieldset[disabled] .navbar-inverse .btn-link:focus {
  color: #444;
}

.scoped-bootstrap .breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.scoped-bootstrap .breadcrumb > li {
  display: inline-block;
}

.scoped-bootstrap .breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\A0";
}

.scoped-bootstrap .breadcrumb > .active {
  color: #777;
}

.scoped-bootstrap .pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}

.scoped-bootstrap .pagination > li {
  display: inline;
}

.scoped-bootstrap .pagination > li > a,
.scoped-bootstrap .pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}

.scoped-bootstrap .pagination > li:first-child > a,
.scoped-bootstrap .pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.scoped-bootstrap .pagination > li:last-child > a,
.scoped-bootstrap .pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.scoped-bootstrap .pagination > li > a:hover,
.scoped-bootstrap .pagination > li > span:hover,
.scoped-bootstrap .pagination > li > a:focus,
.scoped-bootstrap .pagination > li > span:focus {
  z-index: 2;
  color: #23527c;
  background-color: #eee;
  border-color: #ddd;
}

.scoped-bootstrap .pagination > .active > a,
.scoped-bootstrap .pagination > .active > span,
.scoped-bootstrap .pagination > .active > a:hover,
.scoped-bootstrap .pagination > .active > span:hover,
.scoped-bootstrap .pagination > .active > a:focus,
.scoped-bootstrap .pagination > .active > span:focus {
  z-index: 3;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}

.scoped-bootstrap .pagination > .disabled > span,
.scoped-bootstrap .pagination > .disabled > span:hover,
.scoped-bootstrap .pagination > .disabled > span:focus,
.scoped-bootstrap .pagination > .disabled > a,
.scoped-bootstrap .pagination > .disabled > a:hover,
.scoped-bootstrap .pagination > .disabled > a:focus {
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}

.scoped-bootstrap .pagination-lg > li > a,
.scoped-bootstrap .pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
}

.scoped-bootstrap .pagination-lg > li:first-child > a,
.scoped-bootstrap .pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.scoped-bootstrap .pagination-lg > li:last-child > a,
.scoped-bootstrap .pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.scoped-bootstrap .pagination-sm > li > a,
.scoped-bootstrap .pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
}

.scoped-bootstrap .pagination-sm > li:first-child > a,
.scoped-bootstrap .pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.scoped-bootstrap .pagination-sm > li:last-child > a,
.scoped-bootstrap .pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.scoped-bootstrap .pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}

.scoped-bootstrap .pager li {
  display: inline;
}

.scoped-bootstrap .pager li > a,
.scoped-bootstrap .pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}

.scoped-bootstrap .pager li > a:hover,
.scoped-bootstrap .pager li > a:focus {
  text-decoration: none;
  background-color: #eee;
}

.scoped-bootstrap .pager .next > a,
.scoped-bootstrap .pager .next > span {
  float: right;
}

.scoped-bootstrap .pager .previous > a,
.scoped-bootstrap .pager .previous > span {
  float: left;
}

.scoped-bootstrap .pager .disabled > a,
.scoped-bootstrap .pager .disabled > a:hover,
.scoped-bootstrap .pager .disabled > a:focus,
.scoped-bootstrap .pager .disabled > span {
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
}

.scoped-bootstrap .label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}

.scoped-bootstrap a.label:hover,
.scoped-bootstrap a.label:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.scoped-bootstrap .label:empty {
  display: none;
}

.scoped-bootstrap .btn .label {
  position: relative;
  top: -1px;
}

.scoped-bootstrap .label-default {
  background-color: #777;
}

.scoped-bootstrap .label-default[href]:hover,
.scoped-bootstrap .label-default[href]:focus {
  background-color: #5e5e5e;
}

.scoped-bootstrap .label-primary {
  background-color: #337ab7;
}

.scoped-bootstrap .label-primary[href]:hover,
.scoped-bootstrap .label-primary[href]:focus {
  background-color: #286090;
}

.scoped-bootstrap .label-success {
  background-color: #5cb85c;
}

.scoped-bootstrap .label-success[href]:hover,
.scoped-bootstrap .label-success[href]:focus {
  background-color: #449d44;
}

.scoped-bootstrap .label-info {
  background-color: #5bc0de;
}

.scoped-bootstrap .label-info[href]:hover,
.scoped-bootstrap .label-info[href]:focus {
  background-color: #31b0d5;
}

.scoped-bootstrap .label-warning {
  background-color: #f0ad4e;
}

.scoped-bootstrap .label-warning[href]:hover,
.scoped-bootstrap .label-warning[href]:focus {
  background-color: #ec971f;
}

.scoped-bootstrap .label-danger {
  background-color: #d9534f;
}

.scoped-bootstrap .label-danger[href]:hover,
.scoped-bootstrap .label-danger[href]:focus {
  background-color: #c9302c;
}

.scoped-bootstrap .badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777;
  border-radius: 10px;
}

.scoped-bootstrap .badge:empty {
  display: none;
}

.scoped-bootstrap .btn .badge {
  position: relative;
  top: -1px;
}

.scoped-bootstrap .btn-xs .badge,
.scoped-bootstrap .btn-group-xs > .btn .badge {
  top: 0;
  padding: 1px 5px;
}

.scoped-bootstrap a.badge:hover,
.scoped-bootstrap a.badge:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.scoped-bootstrap .list-group-item.active > .badge,
.scoped-bootstrap .nav-pills > .active > a > .badge {
  color: #337ab7;
  background-color: #fff;
}

.scoped-bootstrap .list-group-item > .badge {
  float: right;
}

.scoped-bootstrap .list-group-item > .badge + .badge {
  margin-right: 5px;
}

.scoped-bootstrap .nav-pills > li > a > .badge {
  margin-left: 3px;
}

.scoped-bootstrap .jumbotron {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}

.scoped-bootstrap .jumbotron h1,
.scoped-bootstrap .jumbotron .h1 {
  color: inherit;
}

.scoped-bootstrap .jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}

.scoped-bootstrap .jumbotron > hr {
  border-top-color: #d5d5d5;
}

.scoped-bootstrap .container .jumbotron,
.scoped-bootstrap .container-fluid .jumbotron {
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 6px;
}

.scoped-bootstrap .jumbotron .container {
  max-width: 100%;
}

@media screen and (min-width: 768px) {
  .scoped-bootstrap .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .scoped-bootstrap .container .jumbotron,
  .scoped-bootstrap .container-fluid .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }

  .scoped-bootstrap .jumbotron h1,
  .scoped-bootstrap .jumbotron .h1 {
    font-size: 63px;
  }
}

.scoped-bootstrap .thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border .2s ease-in-out;
  -o-transition: border .2s ease-in-out;
  transition: border .2s ease-in-out;
}

.scoped-bootstrap .thumbnail > img,
.scoped-bootstrap .thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}

.scoped-bootstrap a.thumbnail:hover,
.scoped-bootstrap a.thumbnail:focus,
.scoped-bootstrap a.thumbnail.active {
  border-color: #337ab7;
}

.scoped-bootstrap .thumbnail .caption {
  padding: 9px;
  color: #333;
}

.scoped-bootstrap .alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.scoped-bootstrap .alert h4 {
  margin-top: 0;
  color: inherit;
}

.scoped-bootstrap .alert .alert-link {
  font-weight: bold;
}

.scoped-bootstrap .alert > p,
.scoped-bootstrap .alert > ul {
  margin-bottom: 0;
}

.scoped-bootstrap .alert > p + p {
  margin-top: 5px;
}

.scoped-bootstrap .alert-dismissable,
.scoped-bootstrap .alert-dismissible {
  padding-right: 35px;
}

.scoped-bootstrap .alert-dismissable .close,
.scoped-bootstrap .alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}

.scoped-bootstrap .alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}

.scoped-bootstrap .alert-success hr {
  border-top-color: #c9e2b3;
}

.scoped-bootstrap .alert-success .alert-link {
  color: #2b542c;
}

.scoped-bootstrap .alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}

.scoped-bootstrap .alert-info hr {
  border-top-color: #a6e1ec;
}

.scoped-bootstrap .alert-info .alert-link {
  color: #245269;
}

.scoped-bootstrap .alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}

.scoped-bootstrap .alert-warning hr {
  border-top-color: #f7e1b5;
}

.scoped-bootstrap .alert-warning .alert-link {
  color: #66512c;
}

.scoped-bootstrap .alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.scoped-bootstrap .alert-danger hr {
  border-top-color: #e4b9c0;
}

.scoped-bootstrap .alert-danger .alert-link {
  color: #843534;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }

  to {
    background-position: 0 0;
  }
}

@-o-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }

  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }

  to {
    background-position: 0 0;
  }
}

.scoped-bootstrap .progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}

.scoped-bootstrap .progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: width .6s ease;
  -o-transition: width .6s ease;
  transition: width .6s ease;
}

.scoped-bootstrap .progress-striped .progress-bar,
.scoped-bootstrap .progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;
}

.scoped-bootstrap .progress.active .progress-bar,
.scoped-bootstrap .progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}

.scoped-bootstrap .progress-bar-success {
  background-color: #5cb85c;
}

.scoped-bootstrap .progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}

.scoped-bootstrap .progress-bar-info {
  background-color: #5bc0de;
}

.scoped-bootstrap .progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}

.scoped-bootstrap .progress-bar-warning {
  background-color: #f0ad4e;
}

.scoped-bootstrap .progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}

.scoped-bootstrap .progress-bar-danger {
  background-color: #d9534f;
}

.scoped-bootstrap .progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}

.scoped-bootstrap .media {
  margin-top: 15px;
}

.scoped-bootstrap .media:first-child {
  margin-top: 0;
}

.scoped-bootstrap .media,
.scoped-bootstrap .media-body {
  overflow: hidden;
  zoom: 1;
}

.scoped-bootstrap .media-body {
  width: 10000px;
}

.scoped-bootstrap .media-object {
  display: block;
}

.scoped-bootstrap .media-object.img-thumbnail {
  max-width: none;
}

.scoped-bootstrap .media-right,
.scoped-bootstrap .media > .pull-right {
  padding-left: 10px;
}

.scoped-bootstrap .media-left,
.scoped-bootstrap .media > .pull-left {
  padding-right: 10px;
}

.scoped-bootstrap .media-left,
.scoped-bootstrap .media-right,
.scoped-bootstrap .media-body {
  display: table-cell;
  vertical-align: top;
}

.scoped-bootstrap .media-middle {
  vertical-align: middle;
}

.scoped-bootstrap .media-bottom {
  vertical-align: bottom;
}

.scoped-bootstrap .media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}

.scoped-bootstrap .media-list {
  padding-left: 0;
  list-style: none;
}

.scoped-bootstrap .list-group {
  padding-left: 0;
  margin-bottom: 20px;
}

.scoped-bootstrap .list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.scoped-bootstrap .list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.scoped-bootstrap .list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.scoped-bootstrap a.list-group-item,
.scoped-bootstrap button.list-group-item {
  color: #555;
}

.scoped-bootstrap a.list-group-item .list-group-item-heading,
.scoped-bootstrap button.list-group-item .list-group-item-heading {
  color: #333;
}

.scoped-bootstrap a.list-group-item:hover,
.scoped-bootstrap button.list-group-item:hover,
.scoped-bootstrap a.list-group-item:focus,
.scoped-bootstrap button.list-group-item:focus {
  color: #555;
  text-decoration: none;
  background-color: #f5f5f5;
}

.scoped-bootstrap button.list-group-item {
  width: 100%;
  text-align: left;
}

.scoped-bootstrap .list-group-item.disabled,
.scoped-bootstrap .list-group-item.disabled:hover,
.scoped-bootstrap .list-group-item.disabled:focus {
  color: #777;
  cursor: not-allowed;
  background-color: #eee;
}

.scoped-bootstrap .list-group-item.disabled .list-group-item-heading,
.scoped-bootstrap .list-group-item.disabled:hover .list-group-item-heading,
.scoped-bootstrap .list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}

.scoped-bootstrap .list-group-item.disabled .list-group-item-text,
.scoped-bootstrap .list-group-item.disabled:hover .list-group-item-text,
.scoped-bootstrap .list-group-item.disabled:focus .list-group-item-text {
  color: #777;
}

.scoped-bootstrap .list-group-item.active,
.scoped-bootstrap .list-group-item.active:hover,
.scoped-bootstrap .list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}

.scoped-bootstrap .list-group-item.active .list-group-item-heading,
.scoped-bootstrap .list-group-item.active:hover .list-group-item-heading,
.scoped-bootstrap .list-group-item.active:focus .list-group-item-heading,
.scoped-bootstrap .list-group-item.active .list-group-item-heading > small,
.scoped-bootstrap .list-group-item.active:hover .list-group-item-heading > small,
.scoped-bootstrap .list-group-item.active:focus .list-group-item-heading > small,
.scoped-bootstrap .list-group-item.active .list-group-item-heading > .small,
.scoped-bootstrap .list-group-item.active:hover .list-group-item-heading > .small,
.scoped-bootstrap .list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}

.scoped-bootstrap .list-group-item.active .list-group-item-text,
.scoped-bootstrap .list-group-item.active:hover .list-group-item-text,
.scoped-bootstrap .list-group-item.active:focus .list-group-item-text {
  color: #c7ddef;
}

.scoped-bootstrap .list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}

.scoped-bootstrap a.list-group-item-success,
.scoped-bootstrap button.list-group-item-success {
  color: #3c763d;
}

.scoped-bootstrap a.list-group-item-success .list-group-item-heading,
.scoped-bootstrap button.list-group-item-success .list-group-item-heading {
  color: inherit;
}

.scoped-bootstrap a.list-group-item-success:hover,
.scoped-bootstrap button.list-group-item-success:hover,
.scoped-bootstrap a.list-group-item-success:focus,
.scoped-bootstrap button.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}

.scoped-bootstrap a.list-group-item-success.active,
.scoped-bootstrap button.list-group-item-success.active,
.scoped-bootstrap a.list-group-item-success.active:hover,
.scoped-bootstrap button.list-group-item-success.active:hover,
.scoped-bootstrap a.list-group-item-success.active:focus,
.scoped-bootstrap button.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}

.scoped-bootstrap .list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}

.scoped-bootstrap a.list-group-item-info,
.scoped-bootstrap button.list-group-item-info {
  color: #31708f;
}

.scoped-bootstrap a.list-group-item-info .list-group-item-heading,
.scoped-bootstrap button.list-group-item-info .list-group-item-heading {
  color: inherit;
}

.scoped-bootstrap a.list-group-item-info:hover,
.scoped-bootstrap button.list-group-item-info:hover,
.scoped-bootstrap a.list-group-item-info:focus,
.scoped-bootstrap button.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}

.scoped-bootstrap a.list-group-item-info.active,
.scoped-bootstrap button.list-group-item-info.active,
.scoped-bootstrap a.list-group-item-info.active:hover,
.scoped-bootstrap button.list-group-item-info.active:hover,
.scoped-bootstrap a.list-group-item-info.active:focus,
.scoped-bootstrap button.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}

.scoped-bootstrap .list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}

.scoped-bootstrap a.list-group-item-warning,
.scoped-bootstrap button.list-group-item-warning {
  color: #8a6d3b;
}

.scoped-bootstrap a.list-group-item-warning .list-group-item-heading,
.scoped-bootstrap button.list-group-item-warning .list-group-item-heading {
  color: inherit;
}

.scoped-bootstrap a.list-group-item-warning:hover,
.scoped-bootstrap button.list-group-item-warning:hover,
.scoped-bootstrap a.list-group-item-warning:focus,
.scoped-bootstrap button.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}

.scoped-bootstrap a.list-group-item-warning.active,
.scoped-bootstrap button.list-group-item-warning.active,
.scoped-bootstrap a.list-group-item-warning.active:hover,
.scoped-bootstrap button.list-group-item-warning.active:hover,
.scoped-bootstrap a.list-group-item-warning.active:focus,
.scoped-bootstrap button.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}

.scoped-bootstrap .list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}

.scoped-bootstrap a.list-group-item-danger,
.scoped-bootstrap button.list-group-item-danger {
  color: #a94442;
}

.scoped-bootstrap a.list-group-item-danger .list-group-item-heading,
.scoped-bootstrap button.list-group-item-danger .list-group-item-heading {
  color: inherit;
}

.scoped-bootstrap a.list-group-item-danger:hover,
.scoped-bootstrap button.list-group-item-danger:hover,
.scoped-bootstrap a.list-group-item-danger:focus,
.scoped-bootstrap button.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}

.scoped-bootstrap a.list-group-item-danger.active,
.scoped-bootstrap button.list-group-item-danger.active,
.scoped-bootstrap a.list-group-item-danger.active:hover,
.scoped-bootstrap button.list-group-item-danger.active:hover,
.scoped-bootstrap a.list-group-item-danger.active:focus,
.scoped-bootstrap button.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}

.scoped-bootstrap .list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}

.scoped-bootstrap .list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}

.scoped-bootstrap .panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.scoped-bootstrap .panel-body {
  padding: 15px;
}

.scoped-bootstrap .panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.scoped-bootstrap .panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}

.scoped-bootstrap .panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}

.scoped-bootstrap .panel-title > a,
.scoped-bootstrap .panel-title > small,
.scoped-bootstrap .panel-title > .small,
.scoped-bootstrap .panel-title > small > a,
.scoped-bootstrap .panel-title > .small > a {
  color: inherit;
}

.scoped-bootstrap .panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.scoped-bootstrap .panel > .list-group,
.scoped-bootstrap .panel > .panel-collapse > .list-group {
  margin-bottom: 0;
}

.scoped-bootstrap .panel > .list-group .list-group-item,
.scoped-bootstrap .panel > .panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}

.scoped-bootstrap .panel > .list-group:first-child .list-group-item:first-child,
.scoped-bootstrap .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.scoped-bootstrap .panel > .list-group:last-child .list-group-item:last-child,
.scoped-bootstrap .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.scoped-bootstrap .panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.scoped-bootstrap .panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}

.scoped-bootstrap .list-group + .panel-footer {
  border-top-width: 0;
}

.scoped-bootstrap .panel > .table,
.scoped-bootstrap .panel > .table-responsive > .table,
.scoped-bootstrap .panel > .panel-collapse > .table {
  margin-bottom: 0;
}

.scoped-bootstrap .panel > .table caption,
.scoped-bootstrap .panel > .table-responsive > .table caption,
.scoped-bootstrap .panel > .panel-collapse > .table caption {
  padding-right: 15px;
  padding-left: 15px;
}

.scoped-bootstrap .panel > .table:first-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.scoped-bootstrap .panel > .table:first-child > thead:first-child > tr:first-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,
.scoped-bootstrap .panel > .table:first-child > tbody:first-child > tr:first-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.scoped-bootstrap .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.scoped-bootstrap .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.scoped-bootstrap .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.scoped-bootstrap .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 3px;
}

.scoped-bootstrap .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.scoped-bootstrap .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.scoped-bootstrap .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.scoped-bootstrap .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.scoped-bootstrap .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 3px;
}

.scoped-bootstrap .panel > .table:last-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.scoped-bootstrap .panel > .table:last-child > tbody:last-child > tr:last-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,
.scoped-bootstrap .panel > .table:last-child > tfoot:last-child > tr:last-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.scoped-bootstrap .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.scoped-bootstrap .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.scoped-bootstrap .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.scoped-bootstrap .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 3px;
}

.scoped-bootstrap .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.scoped-bootstrap .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.scoped-bootstrap .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.scoped-bootstrap .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.scoped-bootstrap .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 3px;
}

.scoped-bootstrap .panel > .panel-body + .table,
.scoped-bootstrap .panel > .panel-body + .table-responsive,
.scoped-bootstrap .panel > .table + .panel-body,
.scoped-bootstrap .panel > .table-responsive + .panel-body {
  border-top: 1px solid #ddd;
}

.scoped-bootstrap .panel > .table > tbody:first-child > tr:first-child th,
.scoped-bootstrap .panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}

.scoped-bootstrap .panel > .table-bordered,
.scoped-bootstrap .panel > .table-responsive > .table-bordered {
  border: 0;
}

.scoped-bootstrap .panel > .table-bordered > thead > tr > th:first-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.scoped-bootstrap .panel > .table-bordered > tbody > tr > th:first-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.scoped-bootstrap .panel > .table-bordered > tfoot > tr > th:first-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.scoped-bootstrap .panel > .table-bordered > thead > tr > td:first-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.scoped-bootstrap .panel > .table-bordered > tbody > tr > td:first-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.scoped-bootstrap .panel > .table-bordered > tfoot > tr > td:first-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}

.scoped-bootstrap .panel > .table-bordered > thead > tr > th:last-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.scoped-bootstrap .panel > .table-bordered > tbody > tr > th:last-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.scoped-bootstrap .panel > .table-bordered > tfoot > tr > th:last-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.scoped-bootstrap .panel > .table-bordered > thead > tr > td:last-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.scoped-bootstrap .panel > .table-bordered > tbody > tr > td:last-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.scoped-bootstrap .panel > .table-bordered > tfoot > tr > td:last-child,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}

.scoped-bootstrap .panel > .table-bordered > thead > tr:first-child > td,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.scoped-bootstrap .panel > .table-bordered > tbody > tr:first-child > td,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.scoped-bootstrap .panel > .table-bordered > thead > tr:first-child > th,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.scoped-bootstrap .panel > .table-bordered > tbody > tr:first-child > th,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}

.scoped-bootstrap .panel > .table-bordered > tbody > tr:last-child > td,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.scoped-bootstrap .panel > .table-bordered > tfoot > tr:last-child > td,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.scoped-bootstrap .panel > .table-bordered > tbody > tr:last-child > th,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.scoped-bootstrap .panel > .table-bordered > tfoot > tr:last-child > th,
.scoped-bootstrap .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}

.scoped-bootstrap .panel > .table-responsive {
  margin-bottom: 0;
  border: 0;
}

.scoped-bootstrap .panel-group {
  margin-bottom: 20px;
}

.scoped-bootstrap .panel-group .panel {
  margin-bottom: 0;
  border-radius: 4px;
}

.scoped-bootstrap .panel-group .panel + .panel {
  margin-top: 5px;
}

.scoped-bootstrap .panel-group .panel-heading {
  border-bottom: 0;
}

.scoped-bootstrap .panel-group .panel-heading + .panel-collapse > .panel-body,
.scoped-bootstrap .panel-group .panel-heading + .panel-collapse > .list-group {
  border-top: 1px solid #ddd;
}

.scoped-bootstrap .panel-group .panel-footer {
  border-top: 0;
}

.scoped-bootstrap .panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}

.scoped-bootstrap .panel-default {
  border-color: #ddd;
}

.scoped-bootstrap .panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}

.scoped-bootstrap .panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}

.scoped-bootstrap .panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333;
}

.scoped-bootstrap .panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}

.scoped-bootstrap .panel-primary {
  border-color: #337ab7;
}

.scoped-bootstrap .panel-primary > .panel-heading {
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}

.scoped-bootstrap .panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #337ab7;
}

.scoped-bootstrap .panel-primary > .panel-heading .badge {
  color: #337ab7;
  background-color: #fff;
}

.scoped-bootstrap .panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #337ab7;
}

.scoped-bootstrap .panel-success {
  border-color: #d6e9c6;
}

.scoped-bootstrap .panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}

.scoped-bootstrap .panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}

.scoped-bootstrap .panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}

.scoped-bootstrap .panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}

.scoped-bootstrap .panel-info {
  border-color: #bce8f1;
}

.scoped-bootstrap .panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}

.scoped-bootstrap .panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}

.scoped-bootstrap .panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}

.scoped-bootstrap .panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}

.scoped-bootstrap .panel-warning {
  border-color: #faebcc;
}

.scoped-bootstrap .panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}

.scoped-bootstrap .panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}

.scoped-bootstrap .panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}

.scoped-bootstrap .panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}

.scoped-bootstrap .panel-danger {
  border-color: #ebccd1;
}

.scoped-bootstrap .panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.scoped-bootstrap .panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}

.scoped-bootstrap .panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}

.scoped-bootstrap .panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}

.scoped-bootstrap .embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}

.scoped-bootstrap .embed-responsive .embed-responsive-item,
.scoped-bootstrap .embed-responsive iframe,
.scoped-bootstrap .embed-responsive embed,
.scoped-bootstrap .embed-responsive object,
.scoped-bootstrap .embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.scoped-bootstrap .embed-responsive-16by9 {
  padding-bottom: 56.25%;
}

.scoped-bootstrap .embed-responsive-4by3 {
  padding-bottom: 75%;
}

.scoped-bootstrap .well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}

.scoped-bootstrap .well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, .15);
}

.scoped-bootstrap .well-lg {
  padding: 24px;
  border-radius: 6px;
}

.scoped-bootstrap .well-sm {
  padding: 9px;
  border-radius: 3px;
}

.scoped-bootstrap .close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}

.scoped-bootstrap .close:hover,
.scoped-bootstrap .close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: .5;
}

.scoped-bootstrap button.close {
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
}

.scoped-bootstrap .modal-open {
  overflow: hidden;
}

.scoped-bootstrap .modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}

.scoped-bootstrap .modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
  -o-transition: -o-transform .3s ease-out;
  transition: transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
  transform: translate(0, -25%);
}

.scoped-bootstrap .modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}

.scoped-bootstrap .modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.scoped-bootstrap .modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

.scoped-bootstrap .modal-content {
  position: relative;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: 0;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}

.scoped-bootstrap .modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}

.scoped-bootstrap .modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}

.scoped-bootstrap .modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}

.scoped-bootstrap .modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}

.scoped-bootstrap .modal-header .close {
  margin-top: -2px;
}

.scoped-bootstrap .modal-title {
  margin: 0;
  line-height: 1.42857143;
}

.scoped-bootstrap .modal-body {
  position: relative;
  padding: 15px;
}

.scoped-bootstrap .modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}

.scoped-bootstrap .modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}

.scoped-bootstrap .modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}

.scoped-bootstrap .modal-footer .btn-block + .btn-block {
  margin-left: 0;
}

.scoped-bootstrap .modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 768px) {
  .scoped-bootstrap .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }

  .scoped-bootstrap .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
  }

  .scoped-bootstrap .modal-sm {
    width: 300px;
  }
}

@media (min-width: 992px) {
  .scoped-bootstrap .modal-lg {
    width: 900px;
  }
}

.scoped-bootstrap .tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  white-space: normal;
  filter: alpha(opacity=0);
  opacity: 0;
  line-break: auto;
}

.scoped-bootstrap .tooltip.in {
  filter: alpha(opacity=90);
  opacity: .9;
}

.scoped-bootstrap .tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}

.scoped-bootstrap .tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}

.scoped-bootstrap .tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}

.scoped-bootstrap .tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}

.scoped-bootstrap .tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 4px;
}

.scoped-bootstrap .tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.scoped-bootstrap .tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}

.scoped-bootstrap .tooltip.top-left .tooltip-arrow {
  right: 5px;
  bottom: 0;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}

.scoped-bootstrap .tooltip.top-right .tooltip-arrow {
  bottom: 0;
  left: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}

.scoped-bootstrap .tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}

.scoped-bootstrap .tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}

.scoped-bootstrap .tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}

.scoped-bootstrap .tooltip.bottom-left .tooltip-arrow {
  top: 0;
  right: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}

.scoped-bootstrap .tooltip.bottom-right .tooltip-arrow {
  top: 0;
  left: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}

.scoped-bootstrap .popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  white-space: normal;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  line-break: auto;
}

.scoped-bootstrap .popover.top {
  margin-top: -10px;
}

.scoped-bootstrap .popover.right {
  margin-left: 10px;
}

.scoped-bootstrap .popover.bottom {
  margin-top: 10px;
}

.scoped-bootstrap .popover.left {
  margin-left: -10px;
}

.scoped-bootstrap .popover-title {
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}

.scoped-bootstrap .popover-content {
  padding: 9px 14px;
}

.scoped-bootstrap .popover > .arrow,
.scoped-bootstrap .popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.scoped-bootstrap .popover > .arrow {
  border-width: 11px;
}

.scoped-bootstrap .popover > .arrow:after {
  content: "";
  border-width: 10px;
}

.scoped-bootstrap .popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, .25);
  border-bottom-width: 0;
}

.scoped-bootstrap .popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}

.scoped-bootstrap .popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, .25);
  border-left-width: 0;
}

.scoped-bootstrap .popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}

.scoped-bootstrap .popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, .25);
}

.scoped-bootstrap .popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}

.scoped-bootstrap .popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, .25);
}

.scoped-bootstrap .popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}

.scoped-bootstrap .carousel {
  position: relative;
}

.scoped-bootstrap .carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.scoped-bootstrap .carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: .6s ease-in-out left;
  -o-transition: .6s ease-in-out left;
  transition: .6s ease-in-out left;
}

.scoped-bootstrap .carousel-inner > .item > img,
.scoped-bootstrap .carousel-inner > .item > a > img {
  line-height: 1;
}

@media all and (transform-3d), (-webkit-transform-3d) {
  .scoped-bootstrap .carousel-inner > .item {
    -webkit-transition: -webkit-transform .6s ease-in-out;
    -o-transition: -o-transform .6s ease-in-out;
    transition: transform .6s ease-in-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  .scoped-bootstrap .carousel-inner > .item.next,
  .scoped-bootstrap .carousel-inner > .item.active.right {
    left: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  .scoped-bootstrap .carousel-inner > .item.prev,
  .scoped-bootstrap .carousel-inner > .item.active.left {
    left: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .scoped-bootstrap .carousel-inner > .item.next.left,
  .scoped-bootstrap .carousel-inner > .item.prev.right,
  .scoped-bootstrap .carousel-inner > .item.active {
    left: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.scoped-bootstrap .carousel-inner > .active,
.scoped-bootstrap .carousel-inner > .next,
.scoped-bootstrap .carousel-inner > .prev {
  display: block;
}

.scoped-bootstrap .carousel-inner > .active {
  left: 0;
}

.scoped-bootstrap .carousel-inner > .next,
.scoped-bootstrap .carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}

.scoped-bootstrap .carousel-inner > .next {
  left: 100%;
}

.scoped-bootstrap .carousel-inner > .prev {
  left: -100%;
}

.scoped-bootstrap .carousel-inner > .next.left,
.scoped-bootstrap .carousel-inner > .prev.right {
  left: 0;
}

.scoped-bootstrap .carousel-inner > .active.left {
  left: -100%;
}

.scoped-bootstrap .carousel-inner > .active.right {
  left: 100%;
}

.scoped-bootstrap .carousel-control {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  background-color: rgba(0, 0, 0, 0);
  filter: alpha(opacity=50);
  opacity: .5;
}

.scoped-bootstrap .carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));
  background-image: linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}

.scoped-bootstrap .carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));
  background-image: linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}

.scoped-bootstrap .carousel-control:hover,
.scoped-bootstrap .carousel-control:focus {
  color: #fff;
  text-decoration: none;
  filter: alpha(opacity=90);
  outline: 0;
  opacity: .9;
}

.scoped-bootstrap .carousel-control .icon-prev,
.scoped-bootstrap .carousel-control .icon-next,
.scoped-bootstrap .carousel-control .glyphicon-chevron-left,
.scoped-bootstrap .carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
  margin-top: -10px;
}

.scoped-bootstrap .carousel-control .icon-prev,
.scoped-bootstrap .carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}

.scoped-bootstrap .carousel-control .icon-next,
.scoped-bootstrap .carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}

.scoped-bootstrap .carousel-control .icon-prev,
.scoped-bootstrap .carousel-control .icon-next {
  width: 20px;
  height: 20px;
  font-family: serif;
  line-height: 1;
}

.scoped-bootstrap .carousel-control .icon-prev:before {
  content: '\2039';
}

.scoped-bootstrap .carousel-control .icon-next:before {
  content: '\203A';
}

.scoped-bootstrap .carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}

.scoped-bootstrap .carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}

.scoped-bootstrap .carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}

.scoped-bootstrap .carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
}

.scoped-bootstrap .carousel-caption .btn {
  text-shadow: none;
}

@media screen and (min-width: 768px) {
  .scoped-bootstrap .carousel-control .glyphicon-chevron-left,
  .scoped-bootstrap .carousel-control .glyphicon-chevron-right,
  .scoped-bootstrap .carousel-control .icon-prev,
  .scoped-bootstrap .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -10px;
    font-size: 30px;
  }

  .scoped-bootstrap .carousel-control .glyphicon-chevron-left,
  .scoped-bootstrap .carousel-control .icon-prev {
    margin-left: -10px;
  }

  .scoped-bootstrap .carousel-control .glyphicon-chevron-right,
  .scoped-bootstrap .carousel-control .icon-next {
    margin-right: -10px;
  }

  .scoped-bootstrap .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }

  .scoped-bootstrap .carousel-indicators {
    bottom: 20px;
  }
}

.scoped-bootstrap .clearfix:before,
.scoped-bootstrap .clearfix:after,
.scoped-bootstrap .dl-horizontal dd:before,
.scoped-bootstrap .dl-horizontal dd:after,
.scoped-bootstrap .container:before,
.scoped-bootstrap .container:after,
.scoped-bootstrap .container-fluid:before,
.scoped-bootstrap .container-fluid:after,
.scoped-bootstrap .row:before,
.scoped-bootstrap .row:after,
.scoped-bootstrap .form-horizontal .form-group:before,
.scoped-bootstrap .form-horizontal .form-group:after,
.scoped-bootstrap .btn-toolbar:before,
.scoped-bootstrap .btn-toolbar:after,
.scoped-bootstrap .btn-group-vertical > .btn-group:before,
.scoped-bootstrap .btn-group-vertical > .btn-group:after,
.scoped-bootstrap .nav:before,
.scoped-bootstrap .nav:after,
.scoped-bootstrap .navbar:before,
.scoped-bootstrap .navbar:after,
.scoped-bootstrap .navbar-header:before,
.scoped-bootstrap .navbar-header:after,
.scoped-bootstrap .navbar-collapse:before,
.scoped-bootstrap .navbar-collapse:after,
.scoped-bootstrap .pager:before,
.scoped-bootstrap .pager:after,
.scoped-bootstrap .panel-body:before,
.scoped-bootstrap .panel-body:after,
.scoped-bootstrap .modal-header:before,
.scoped-bootstrap .modal-header:after,
.scoped-bootstrap .modal-footer:before,
.scoped-bootstrap .modal-footer:after {
  display: table;
  content: " ";
}

.scoped-bootstrap .clearfix:after,
.scoped-bootstrap .dl-horizontal dd:after,
.scoped-bootstrap .container:after,
.scoped-bootstrap .container-fluid:after,
.scoped-bootstrap .row:after,
.scoped-bootstrap .form-horizontal .form-group:after,
.scoped-bootstrap .btn-toolbar:after,
.scoped-bootstrap .btn-group-vertical > .btn-group:after,
.scoped-bootstrap .nav:after,
.scoped-bootstrap .navbar:after,
.scoped-bootstrap .navbar-header:after,
.scoped-bootstrap .navbar-collapse:after,
.scoped-bootstrap .pager:after,
.scoped-bootstrap .panel-body:after,
.scoped-bootstrap .modal-header:after,
.scoped-bootstrap .modal-footer:after {
  clear: both;
}

.scoped-bootstrap .center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.scoped-bootstrap .pull-right {
  float: right !important;
}

.scoped-bootstrap .pull-left {
  float: left !important;
}

.scoped-bootstrap .hide {
  display: none !important;
}

.scoped-bootstrap .show {
  display: block !important;
}

.scoped-bootstrap .invisible {
  visibility: hidden;
}

.scoped-bootstrap .text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.scoped-bootstrap .hidden {
  display: none !important;
}

.scoped-bootstrap .affix {
  position: fixed;
}

@-ms-viewport {
  width: device-width;
}

.scoped-bootstrap .visible-xs,
.scoped-bootstrap .visible-sm,
.scoped-bootstrap .visible-md,
.scoped-bootstrap .visible-lg {
  display: none !important;
}

.scoped-bootstrap .visible-xs-block,
.scoped-bootstrap .visible-xs-inline,
.scoped-bootstrap .visible-xs-inline-block,
.scoped-bootstrap .visible-sm-block,
.scoped-bootstrap .visible-sm-inline,
.scoped-bootstrap .visible-sm-inline-block,
.scoped-bootstrap .visible-md-block,
.scoped-bootstrap .visible-md-inline,
.scoped-bootstrap .visible-md-inline-block,
.scoped-bootstrap .visible-lg-block,
.scoped-bootstrap .visible-lg-inline,
.scoped-bootstrap .visible-lg-inline-block {
  display: none !important;
}

@media (max-width: 767px) {
  .scoped-bootstrap .visible-xs {
    display: block !important;
  }

  .scoped-bootstrap table.visible-xs {
    display: table !important;
  }

  .scoped-bootstrap tr.visible-xs {
    display: table-row !important;
  }

  .scoped-bootstrap th.visible-xs,
  .scoped-bootstrap td.visible-xs {
    display: table-cell !important;
  }
}

@media (max-width: 767px) {
  .scoped-bootstrap .visible-xs-block {
    display: block !important;
  }
}

@media (max-width: 767px) {
  .scoped-bootstrap .visible-xs-inline {
    display: inline !important;
  }
}

@media (max-width: 767px) {
  .scoped-bootstrap .visible-xs-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .scoped-bootstrap .visible-sm {
    display: block !important;
  }

  .scoped-bootstrap table.visible-sm {
    display: table !important;
  }

  .scoped-bootstrap tr.visible-sm {
    display: table-row !important;
  }

  .scoped-bootstrap th.visible-sm,
  .scoped-bootstrap td.visible-sm {
    display: table-cell !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .scoped-bootstrap .visible-sm-block {
    display: block !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .scoped-bootstrap .visible-sm-inline {
    display: inline !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .scoped-bootstrap .visible-sm-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .scoped-bootstrap .visible-md {
    display: block !important;
  }

  .scoped-bootstrap table.visible-md {
    display: table !important;
  }

  .scoped-bootstrap tr.visible-md {
    display: table-row !important;
  }

  .scoped-bootstrap th.visible-md,
  .scoped-bootstrap td.visible-md {
    display: table-cell !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .scoped-bootstrap .visible-md-block {
    display: block !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .scoped-bootstrap .visible-md-inline {
    display: inline !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .scoped-bootstrap .visible-md-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 1200px) {
  .scoped-bootstrap .visible-lg {
    display: block !important;
  }

  .scoped-bootstrap table.visible-lg {
    display: table !important;
  }

  .scoped-bootstrap tr.visible-lg {
    display: table-row !important;
  }

  .scoped-bootstrap th.visible-lg,
  .scoped-bootstrap td.visible-lg {
    display: table-cell !important;
  }
}

@media (min-width: 1200px) {
  .scoped-bootstrap .visible-lg-block {
    display: block !important;
  }
}

@media (min-width: 1200px) {
  .scoped-bootstrap .visible-lg-inline {
    display: inline !important;
  }
}

@media (min-width: 1200px) {
  .scoped-bootstrap .visible-lg-inline-block {
    display: inline-block !important;
  }
}

@media (max-width: 767px) {
  .scoped-bootstrap .hidden-xs {
    display: none !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .scoped-bootstrap .hidden-sm {
    display: none !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .scoped-bootstrap .hidden-md {
    display: none !important;
  }
}

@media (min-width: 1200px) {
  .scoped-bootstrap .hidden-lg {
    display: none !important;
  }
}

.scoped-bootstrap .visible-print {
  display: none !important;
}

@media print {
  .scoped-bootstrap .visible-print {
    display: block !important;
  }

  .scoped-bootstrap table.visible-print {
    display: table !important;
  }

  .scoped-bootstrap tr.visible-print {
    display: table-row !important;
  }

  .scoped-bootstrap th.visible-print,
  .scoped-bootstrap td.visible-print {
    display: table-cell !important;
  }
}

.scoped-bootstrap .visible-print-block {
  display: none !important;
}

@media print {
  .scoped-bootstrap .visible-print-block {
    display: block !important;
  }
}

.scoped-bootstrap .visible-print-inline {
  display: none !important;
}

@media print {
  .scoped-bootstrap .visible-print-inline {
    display: inline !important;
  }
}

.scoped-bootstrap .visible-print-inline-block {
  display: none !important;
}

@media print {
  .scoped-bootstrap .visible-print-inline-block {
    display: inline-block !important;
  }
}

@media print {
  .scoped-bootstrap .hidden-print {
    display: none !important;
  }
}
</style><style type="text/css">/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
.btn-default,
.btn-primary,
.btn-success,
.btn-info,
.btn-warning,
.btn-danger {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, .2);
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);
}
.btn-default:active,
.btn-primary:active,
.btn-success:active,
.btn-info:active,
.btn-warning:active,
.btn-danger:active,
.btn-default.active,
.btn-primary.active,
.btn-success.active,
.btn-info.active,
.btn-warning.active,
.btn-danger.active {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn-default.disabled,
.btn-primary.disabled,
.btn-success.disabled,
.btn-info.disabled,
.btn-warning.disabled,
.btn-danger.disabled,
.btn-default[disabled],
.btn-primary[disabled],
.btn-success[disabled],
.btn-info[disabled],
.btn-warning[disabled],
.btn-danger[disabled],
fieldset[disabled] .btn-default,
fieldset[disabled] .btn-primary,
fieldset[disabled] .btn-success,
fieldset[disabled] .btn-info,
fieldset[disabled] .btn-warning,
fieldset[disabled] .btn-danger {
  -webkit-box-shadow: none;
          box-shadow: none;
}
.btn-default .badge,
.btn-primary .badge,
.btn-success .badge,
.btn-info .badge,
.btn-warning .badge,
.btn-danger .badge {
  text-shadow: none;
}
.btn:active,
.btn.active {
  background-image: none;
}
.btn-default {
  text-shadow: 0 1px 0 #fff;
  background-image: -webkit-linear-gradient(top, #fff 0%, #e0e0e0 100%);
  background-image:      -o-linear-gradient(top, #fff 0%, #e0e0e0 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#e0e0e0));
  background-image:         linear-gradient(to bottom, #fff 0%, #e0e0e0 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe0e0e0', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #dbdbdb;
  border-color: #ccc;
}
.btn-default:hover,
.btn-default:focus {
  background-color: #e0e0e0;
  background-position: 0 -15px;
}
.btn-default:active,
.btn-default.active {
  background-color: #e0e0e0;
  border-color: #dbdbdb;
}
.btn-default.disabled,
.btn-default[disabled],
fieldset[disabled] .btn-default,
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus,
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #e0e0e0;
  background-image: none;
}
.btn-primary {
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #265a88 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #265a88 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#265a88));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #265a88 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #245580;
}
.btn-primary:hover,
.btn-primary:focus {
  background-color: #265a88;
  background-position: 0 -15px;
}
.btn-primary:active,
.btn-primary.active {
  background-color: #265a88;
  border-color: #245580;
}
.btn-primary.disabled,
.btn-primary[disabled],
fieldset[disabled] .btn-primary,
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled.focus,
.btn-primary[disabled].focus,
fieldset[disabled] .btn-primary.focus,
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #265a88;
  background-image: none;
}
.btn-success {
  background-image: -webkit-linear-gradient(top, #5cb85c 0%, #419641 100%);
  background-image:      -o-linear-gradient(top, #5cb85c 0%, #419641 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5cb85c), to(#419641));
  background-image:         linear-gradient(to bottom, #5cb85c 0%, #419641 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #3e8f3e;
}
.btn-success:hover,
.btn-success:focus {
  background-color: #419641;
  background-position: 0 -15px;
}
.btn-success:active,
.btn-success.active {
  background-color: #419641;
  border-color: #3e8f3e;
}
.btn-success.disabled,
.btn-success[disabled],
fieldset[disabled] .btn-success,
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled.focus,
.btn-success[disabled].focus,
fieldset[disabled] .btn-success.focus,
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #419641;
  background-image: none;
}
.btn-info {
  background-image: -webkit-linear-gradient(top, #5bc0de 0%, #2aabd2 100%);
  background-image:      -o-linear-gradient(top, #5bc0de 0%, #2aabd2 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5bc0de), to(#2aabd2));
  background-image:         linear-gradient(to bottom, #5bc0de 0%, #2aabd2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff2aabd2', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #28a4c9;
}
.btn-info:hover,
.btn-info:focus {
  background-color: #2aabd2;
  background-position: 0 -15px;
}
.btn-info:active,
.btn-info.active {
  background-color: #2aabd2;
  border-color: #28a4c9;
}
.btn-info.disabled,
.btn-info[disabled],
fieldset[disabled] .btn-info,
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus,
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #2aabd2;
  background-image: none;
}
.btn-warning {
  background-image: -webkit-linear-gradient(top, #f0ad4e 0%, #eb9316 100%);
  background-image:      -o-linear-gradient(top, #f0ad4e 0%, #eb9316 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f0ad4e), to(#eb9316));
  background-image:         linear-gradient(to bottom, #f0ad4e 0%, #eb9316 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff0ad4e', endColorstr='#ffeb9316', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #e38d13;
}
.btn-warning:hover,
.btn-warning:focus {
  background-color: #eb9316;
  background-position: 0 -15px;
}
.btn-warning:active,
.btn-warning.active {
  background-color: #eb9316;
  border-color: #e38d13;
}
.btn-warning.disabled,
.btn-warning[disabled],
fieldset[disabled] .btn-warning,
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled.focus,
.btn-warning[disabled].focus,
fieldset[disabled] .btn-warning.focus,
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #eb9316;
  background-image: none;
}
.btn-danger {
  background-image: -webkit-linear-gradient(top, #d9534f 0%, #c12e2a 100%);
  background-image:      -o-linear-gradient(top, #d9534f 0%, #c12e2a 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9534f), to(#c12e2a));
  background-image:         linear-gradient(to bottom, #d9534f 0%, #c12e2a 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc12e2a', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #b92c28;
}
.btn-danger:hover,
.btn-danger:focus {
  background-color: #c12e2a;
  background-position: 0 -15px;
}
.btn-danger:active,
.btn-danger.active {
  background-color: #c12e2a;
  border-color: #b92c28;
}
.btn-danger.disabled,
.btn-danger[disabled],
fieldset[disabled] .btn-danger,
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled.focus,
.btn-danger[disabled].focus,
fieldset[disabled] .btn-danger.focus,
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #c12e2a;
  background-image: none;
}
.thumbnail,
.img-thumbnail {
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  background-color: #e8e8e8;
  background-image: -webkit-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);
  background-image:      -o-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#e8e8e8));
  background-image:         linear-gradient(to bottom, #f5f5f5 0%, #e8e8e8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe8e8e8', GradientType=0);
  background-repeat: repeat-x;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  background-color: #2e6da4;
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);
  background-repeat: repeat-x;
}
.navbar-default {
  background-image: -webkit-linear-gradient(top, #fff 0%, #f8f8f8 100%);
  background-image:      -o-linear-gradient(top, #fff 0%, #f8f8f8 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f8f8f8));
  background-image:         linear-gradient(to bottom, #fff 0%, #f8f8f8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff8f8f8', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .active > a {
  background-image: -webkit-linear-gradient(top, #dbdbdb 0%, #e2e2e2 100%);
  background-image:      -o-linear-gradient(top, #dbdbdb 0%, #e2e2e2 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#dbdbdb), to(#e2e2e2));
  background-image:         linear-gradient(to bottom, #dbdbdb 0%, #e2e2e2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdbdbdb', endColorstr='#ffe2e2e2', GradientType=0);
  background-repeat: repeat-x;
  -webkit-box-shadow: inset 0 3px 9px rgba(0, 0, 0, .075);
          box-shadow: inset 0 3px 9px rgba(0, 0, 0, .075);
}
.navbar-brand,
.navbar-nav > li > a {
  text-shadow: 0 1px 0 rgba(255, 255, 255, .25);
}
.navbar-inverse {
  background-image: -webkit-linear-gradient(top, #3c3c3c 0%, #222 100%);
  background-image:      -o-linear-gradient(top, #3c3c3c 0%, #222 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#3c3c3c), to(#222));
  background-image:         linear-gradient(to bottom, #3c3c3c 0%, #222 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3c3c3c', endColorstr='#ff222222', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-radius: 4px;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .active > a {
  background-image: -webkit-linear-gradient(top, #080808 0%, #0f0f0f 100%);
  background-image:      -o-linear-gradient(top, #080808 0%, #0f0f0f 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#080808), to(#0f0f0f));
  background-image:         linear-gradient(to bottom, #080808 0%, #0f0f0f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff080808', endColorstr='#ff0f0f0f', GradientType=0);
  background-repeat: repeat-x;
  -webkit-box-shadow: inset 0 3px 9px rgba(0, 0, 0, .25);
          box-shadow: inset 0 3px 9px rgba(0, 0, 0, .25);
}
.navbar-inverse .navbar-brand,
.navbar-inverse .navbar-nav > li > a {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, .25);
}
.navbar-static-top,
.navbar-fixed-top,
.navbar-fixed-bottom {
  border-radius: 0;
}
@media (max-width: 767px) {
  .navbar .navbar-nav .open .dropdown-menu > .active > a,
  .navbar .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
    background-image:      -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));
    background-image:         linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);
    background-repeat: repeat-x;
  }
}
.alert {
  text-shadow: 0 1px 0 rgba(255, 255, 255, .2);
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .25), 0 1px 2px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .25), 0 1px 2px rgba(0, 0, 0, .05);
}
.alert-success {
  background-image: -webkit-linear-gradient(top, #dff0d8 0%, #c8e5bc 100%);
  background-image:      -o-linear-gradient(top, #dff0d8 0%, #c8e5bc 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#dff0d8), to(#c8e5bc));
  background-image:         linear-gradient(to bottom, #dff0d8 0%, #c8e5bc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffc8e5bc', GradientType=0);
  background-repeat: repeat-x;
  border-color: #b2dba1;
}
.alert-info {
  background-image: -webkit-linear-gradient(top, #d9edf7 0%, #b9def0 100%);
  background-image:      -o-linear-gradient(top, #d9edf7 0%, #b9def0 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9edf7), to(#b9def0));
  background-image:         linear-gradient(to bottom, #d9edf7 0%, #b9def0 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9edf7', endColorstr='#ffb9def0', GradientType=0);
  background-repeat: repeat-x;
  border-color: #9acfea;
}
.alert-warning {
  background-image: -webkit-linear-gradient(top, #fcf8e3 0%, #f8efc0 100%);
  background-image:      -o-linear-gradient(top, #fcf8e3 0%, #f8efc0 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fcf8e3), to(#f8efc0));
  background-image:         linear-gradient(to bottom, #fcf8e3 0%, #f8efc0 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fff8efc0', GradientType=0);
  background-repeat: repeat-x;
  border-color: #f5e79e;
}
.alert-danger {
  background-image: -webkit-linear-gradient(top, #f2dede 0%, #e7c3c3 100%);
  background-image:      -o-linear-gradient(top, #f2dede 0%, #e7c3c3 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f2dede), to(#e7c3c3));
  background-image:         linear-gradient(to bottom, #f2dede 0%, #e7c3c3 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2dede', endColorstr='#ffe7c3c3', GradientType=0);
  background-repeat: repeat-x;
  border-color: #dca7a7;
}
.progress {
  background-image: -webkit-linear-gradient(top, #ebebeb 0%, #f5f5f5 100%);
  background-image:      -o-linear-gradient(top, #ebebeb 0%, #f5f5f5 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ebebeb), to(#f5f5f5));
  background-image:         linear-gradient(to bottom, #ebebeb 0%, #f5f5f5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffebebeb', endColorstr='#fff5f5f5', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar {
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #286090 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #286090 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#286090));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #286090 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff286090', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-success {
  background-image: -webkit-linear-gradient(top, #5cb85c 0%, #449d44 100%);
  background-image:      -o-linear-gradient(top, #5cb85c 0%, #449d44 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5cb85c), to(#449d44));
  background-image:         linear-gradient(to bottom, #5cb85c 0%, #449d44 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff449d44', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-info {
  background-image: -webkit-linear-gradient(top, #5bc0de 0%, #31b0d5 100%);
  background-image:      -o-linear-gradient(top, #5bc0de 0%, #31b0d5 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5bc0de), to(#31b0d5));
  background-image:         linear-gradient(to bottom, #5bc0de 0%, #31b0d5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff31b0d5', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-warning {
  background-image: -webkit-linear-gradient(top, #f0ad4e 0%, #ec971f 100%);
  background-image:      -o-linear-gradient(top, #f0ad4e 0%, #ec971f 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f0ad4e), to(#ec971f));
  background-image:         linear-gradient(to bottom, #f0ad4e 0%, #ec971f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff0ad4e', endColorstr='#ffec971f', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-danger {
  background-image: -webkit-linear-gradient(top, #d9534f 0%, #c9302c 100%);
  background-image:      -o-linear-gradient(top, #d9534f 0%, #c9302c 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9534f), to(#c9302c));
  background-image:         linear-gradient(to bottom, #d9534f 0%, #c9302c 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc9302c', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.list-group {
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  text-shadow: 0 -1px 0 #286090;
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2b669a 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #2b669a 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2b669a));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #2b669a 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2b669a', GradientType=0);
  background-repeat: repeat-x;
  border-color: #2b669a;
}
.list-group-item.active .badge,
.list-group-item.active:hover .badge,
.list-group-item.active:focus .badge {
  text-shadow: none;
}
.panel {
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
}
.panel-default > .panel-heading {
  background-image: -webkit-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);
  background-image:      -o-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#e8e8e8));
  background-image:         linear-gradient(to bottom, #f5f5f5 0%, #e8e8e8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe8e8e8', GradientType=0);
  background-repeat: repeat-x;
}
.panel-primary > .panel-heading {
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);
  background-repeat: repeat-x;
}
.panel-success > .panel-heading {
  background-image: -webkit-linear-gradient(top, #dff0d8 0%, #d0e9c6 100%);
  background-image:      -o-linear-gradient(top, #dff0d8 0%, #d0e9c6 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#dff0d8), to(#d0e9c6));
  background-image:         linear-gradient(to bottom, #dff0d8 0%, #d0e9c6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffd0e9c6', GradientType=0);
  background-repeat: repeat-x;
}
.panel-info > .panel-heading {
  background-image: -webkit-linear-gradient(top, #d9edf7 0%, #c4e3f3 100%);
  background-image:      -o-linear-gradient(top, #d9edf7 0%, #c4e3f3 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9edf7), to(#c4e3f3));
  background-image:         linear-gradient(to bottom, #d9edf7 0%, #c4e3f3 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9edf7', endColorstr='#ffc4e3f3', GradientType=0);
  background-repeat: repeat-x;
}
.panel-warning > .panel-heading {
  background-image: -webkit-linear-gradient(top, #fcf8e3 0%, #faf2cc 100%);
  background-image:      -o-linear-gradient(top, #fcf8e3 0%, #faf2cc 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fcf8e3), to(#faf2cc));
  background-image:         linear-gradient(to bottom, #fcf8e3 0%, #faf2cc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fffaf2cc', GradientType=0);
  background-repeat: repeat-x;
}
.panel-danger > .panel-heading {
  background-image: -webkit-linear-gradient(top, #f2dede 0%, #ebcccc 100%);
  background-image:      -o-linear-gradient(top, #f2dede 0%, #ebcccc 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f2dede), to(#ebcccc));
  background-image:         linear-gradient(to bottom, #f2dede 0%, #ebcccc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2dede', endColorstr='#ffebcccc', GradientType=0);
  background-repeat: repeat-x;
}
.well {
  background-image: -webkit-linear-gradient(top, #e8e8e8 0%, #f5f5f5 100%);
  background-image:      -o-linear-gradient(top, #e8e8e8 0%, #f5f5f5 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#e8e8e8), to(#f5f5f5));
  background-image:         linear-gradient(to bottom, #e8e8e8 0%, #f5f5f5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe8e8e8', endColorstr='#fff5f5f5', GradientType=0);
  background-repeat: repeat-x;
  border-color: #dcdcdc;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, .05), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, .05), 0 1px 0 rgba(255, 255, 255, .1);
}
</style><style type="text/css">@charset "UTF-8";
.student-workspace.scoped-bootstrap:not(#modals-root) {
  padding: 0px;
  margin: 0;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  overflow: hidden;
  line-height: normal;
  font-family: "Open Sans", sans-serif; }
  .student-workspace.scoped-bootstrap:not(#modals-root) .theme_light {
    background-color: #ddd; }
  .student-workspace.scoped-bootstrap:not(#modals-root) .theme_dark {
    background-color: #657b83; }
  .student-workspace.scoped-bootstrap:not(#modals-root).inline {
    box-shadow: inset 0 -1px 0 0 #0F1820; }
  .student-workspace.scoped-bootstrap:not(#modals-root).attached {
    border-radius: 6px 6px 0 0; }

canvas {
  -webkit-touch-callout: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0); }

form {
  margin: 0px; }
  form input {
    line-height: normal; }

.loading_backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #999; }
  .theme_light .loading_backdrop {
    background-color: white; }
  .theme_dark .loading_backdrop {
    background-color: #657b83; }

.unselectable {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.hidden-xs-inline {
  display: inline-block !important; }
  @media (max-width: 767px) {
    .hidden-xs-inline {
      display: none !important; } }

.student-workspace.scoped-bootstrap .btn {
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 2px;
  white-space: normal;
  background-image: none;
  color: white;
  border: none; }
  .student-workspace.scoped-bootstrap .btn.btn-primary {
    text-shadow: none;
    background-color: #02B3E4;
    box-shadow: 12px 15px 20px 0 rgba(0, 0, 0, 0.1);
    transition: 0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out, 0.2s border-color ease-in-out; }
    .student-workspace.scoped-bootstrap .btn.btn-primary:hover, .student-workspace.scoped-bootstrap .btn.btn-primary:focus, .student-workspace.scoped-bootstrap .btn.btn-primary:active {
      background-color: #148BB1;
      box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1); }
  .student-workspace.scoped-bootstrap .btn.btn-default {
    text-shadow: none;
    background-color: #808080; }
    .student-workspace.scoped-bootstrap .btn.btn-default:hover, .student-workspace.scoped-bootstrap .btn.btn-default:focus, .student-workspace.scoped-bootstrap .btn.btn-default:active {
      background-color: #737373;
      color: white; }

.theme_dark .tooltip .tooltip-arrow {
  border-bottom-color: #252525; }

.theme_dark .tooltip .tooltip-inner {
  background-color: #252525; }

.tooltip-subtitle {
  font-size: 85%;
  color: #bbb;
  text-transform: uppercase; }

.student-workspace.scoped-bootstrap .navbar {
  min-height: 0;
  border: none; }

.student-workspace.scoped-bootstrap .navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  text-shadow: none; }

.student-workspace.scoped-bootstrap .navbar-brand,
.student-workspace.scoped-bootstrap .navbar-nav > li > a {
  text-shadow: none; }

.student-workspace.scoped-bootstrap .dropdown-submenu {
  position: relative; }
  .student-workspace.scoped-bootstrap .dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px 6px;
    border-radius: 0 6px 6px 6px; }
  .student-workspace.scoped-bootstrap .dropdown-submenu > a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    margin-top: 5px;
    margin-right: -10px; }

.student-workspace.scoped-bootstrap .theme_light .dropdown-submenu > a:after {
  border-left-color: #555555; }

.student-workspace.scoped-bootstrap .theme_dark .dropdown-submenu > a:after {
  border-left-color: #aaaaaa; }

.student-workspace.scoped-bootstrap .dropdown-menu {
  margin: 0px;
  min-width: 220px; }

.student-workspace.scoped-bootstrap .theme_light .dropdown-menu {
  background-color: #fff; }
  .student-workspace.scoped-bootstrap .theme_light .dropdown-menu a {
    color: #000; }
    .student-workspace.scoped-bootstrap .theme_light .dropdown-menu a:hover, .student-workspace.scoped-bootstrap .theme_light .dropdown-menu a:focus {
      background-image: none;
      background-color: #eee; }

.student-workspace.scoped-bootstrap .theme_dark .dropdown-menu {
  background-color: #073642; }
  .student-workspace.scoped-bootstrap .theme_dark .dropdown-menu a {
    color: #93a1a1; }
    .student-workspace.scoped-bootstrap .theme_dark .dropdown-menu a:hover, .student-workspace.scoped-bootstrap .theme_dark .dropdown-menu a:focus {
      background-color: #586e75;
      color: #fdf6e3;
      background-image: none; }
  .student-workspace.scoped-bootstrap .theme_dark .dropdown-menu li.divider {
    background-color: #a0a0a0; }

.student-workspace.scoped-bootstrap .navbar-default {
  -webkit-box-shadow: none !important;
  box-shadow: none !important; }

.student-workspace.scoped-bootstrap .navbar-static-top {
  margin-bottom: 0; }

.student-workspace.scoped-bootstrap .navbar {
  margin-bottom: 0;
  border-radius: 0px; }

.student-workspace.scoped-bootstrap .nav-logged-out {
  color: #00f;
  background: 0 !important;
  background-image: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  background: none !important;
  padding-top: 10px;
  padding-bottom: 10px; }

.student-workspace.scoped-bootstrap .nav-logged-in {
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  padding-bottom: 0 !important;
  min-height: 10px !important;
  font-size: 13px !important;
  font-style: normal !important;
  font-variant: normal !important;
  font-weight: bold !important; }

.student-workspace.scoped-bootstrap .nav-logged-in a {
  padding: 10px 0 10px 15px !important;
  color: #364655 !important; }

.student-workspace.scoped-bootstrap .nav-logged-out .link {
  padding: 10px 0 10px 10px !important; }

.student-workspace.scoped-bootstrap .nav-logged-out .btn {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px 10px 5px 10px !important;
  margin-left: 10px; }

.student-workspace.scoped-bootstrap .navbar-nav > li > .dropdown-menu {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px; }

.student-workspace.scoped-bootstrap .navbar-nav > li > .dropdown-menu.dropdown-popover {
  margin: 0;
  padding: 0;
  min-height: 80px;
  overflow-y: scroll; }

.student-workspace.scoped-bootstrap .dropdown-loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  margin: -10px;
  color: #999;
  z-index: -1; }

.student-workspace.scoped-bootstrap iframe.dropdown-iframe {
  display: block;
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none; }

.student-workspace.scoped-bootstrap .featurette {
  padding: 40px;
  margin-bottom: 0; }

.student-workspace.scoped-bootstrap .featurette:nth-of-type(even) {
  background: #e7e7e7 !important; }

.student-workspace.scoped-bootstrap .featurette:nth-of-type(odd) {
  background: white !important; }

.student-workspace.scoped-bootstrap hr.before_footer {
  margin: 40px 0; }

.student-workspace.scoped-bootstrap .index-page #sign-up {
  display: none; }

.student-workspace.scoped-bootstrap .nav-logged-out .btn-success {
  color: white !important; }

.student-workspace.scoped-bootstrap .navbar-form {
  margin-top: 5px;
  margin-bottom: 5px; }

.student-workspace.scoped-bootstrap .nav span.glyphicon {
  padding-bottom: 15px;
  margin-bottom: -15px; }

#brand {
  color: #000;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  padding-right: 15px !important;
  border-right: 1px solid #e7e7e7; }

.index_page .jumbotron {
  background: #000;
  color: #fff;
  background: -webkit-linear-gradient(right, gray, black);
  background: -moz-linear-gradient(right, gray, black);
  background: -o-linear-gradient(right, gray, black);
  background: -ms-linear-gradient(right, gray, black);
  background: linear-gradient(to left, gray, black); }

.footer {
  text-align: center;
  padding: 30px 0;
  margin-top: 70px;
  border-top: 1px solid #e5e5e5;
  background-color: whitesmoke; }

.footer p {
  margin-bottom: 0;
  color: #777777; }

.footer-links {
  margin: 10px 0; }

.footer-links li {
  display: inline;
  padding: 0 2px; }

.footer-links li:first-child {
  padding-left: 0; }

.thumbnail {
  padding: 10px; }

.no_login_buttons .navbar-form {
  display: none; }

.no_login_buttons #features {
  padding-right: 0px; }

.student-workspace.scoped-bootstrap .button-navbar {
  font-size: 13px;
  width: 100%;
  margin-top: 0; }
  .student-workspace.scoped-bootstrap .button-navbar i {
    vertical-align: text-bottom; }
  .student-workspace.scoped-bootstrap .button-navbar > ul {
    text-align: center; }
    .student-workspace.scoped-bootstrap .button-navbar > ul > li {
      display: inline-block;
      line-height: 25px; }
      .student-workspace.scoped-bootstrap .button-navbar > ul > li.disabled {
        pointer-events: none; }
      .student-workspace.scoped-bootstrap .button-navbar > ul > li > a {
        padding: 5px 8px;
        background: none !important; }

.theme_light .button-navbar {
  background-color: #FBFBFA;
  border-bottom: 1px solid #f0f0f0; }
  .theme_light .button-navbar, .theme_light .button-navbar a, .theme_light .button-navbar li {
    color: black; }
  .theme_light .button-navbar li:hover {
    background-color: #eee; }
  .theme_light .button-navbar li.active {
    background-color: #e8e8e8; }

.theme_dark .button-navbar {
  background-color: #24323E; }
  .theme_dark .button-navbar, .theme_dark .button-navbar a, .theme_dark .button-navbar li {
    color: #93a1a1; }
  .theme_dark .button-navbar li > a:hover {
    background-color: #586e75; }

.student-workspace.scoped-bootstrap {
  font-family: "Open Sans", sans-serif; }
  .student-workspace.scoped-bootstrap .modal-dialog {
    margin: 50px auto; }
    @media (max-width: 767px) {
      .student-workspace.scoped-bootstrap .modal-dialog {
        width: auto;
        margin: 40px 40px; } }
  .student-workspace.scoped-bootstrap .modal-content {
    overflow: hidden;
    border: none; }
  .student-workspace.scoped-bootstrap .modal-close {
    position: absolute;
    right: -30px;
    top: -42px;
    color: #337AB7;
    font-size: xx-large;
    font-weight: 300;
    line-height: 1;
    opacity: 1;
    cursor: pointer;
    text-shadow: none; }
  .student-workspace.scoped-bootstrap .theme_dark .modal-header {
    background-color: #073642;
    border-bottom: 1px solid #444444 !important;
    color: #888888; }
  .student-workspace.scoped-bootstrap .theme_dark .modal-body {
    color: #93a1a1;
    background-color: #073642; }
  .student-workspace.scoped-bootstrap .theme_light .modal-body {
    background-color: white;
    color: #525C65; }

#text_shown {
  width: 100%;
  border: 1px;
  padding: 10px;
  margin: 10px; }
  .theme_light #text_shown {
    background-color: #eeeeee; }
  .theme_dark #text_shown {
    background-color: #111111; }

#confirm_modal .modal-dialog {
  width: 400px; }
  #confirm_modal .modal-dialog p {
    margin: 5px 0 15px; }

.student-workspace.scoped-bootstrap .context-menu-list {
  margin: 0;
  padding: 0;
  min-width: 120px;
  max-width: 250px;
  display: inline-block;
  position: fixed;
  list-style-type: none;
  overflow: hidden;
  border-radius: 4px;
  background: white;
  transform: translate(5px); }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-item {
  padding: 6px 9px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  line-height: 24px;
  font-size: 14px;
  font-weight: 600; }

.context-menu-list .context-menu-item {
  color: #02B3E4; }
  .context-menu-list .context-menu-item:hover {
    background-color: #F4F6F8; }
  .context-menu-list .context-menu-item.disabled, .context-menu-list .context-menu-item.disabled:hover {
    color: #eee; }

.context-menu-item.delete {
  color: #dc322f; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-item > label > input,
.student-workspace.scoped-bootstrap .context-menu-list .context-menu-item > label > textarea {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-item > .context-menu-list {
  display: none;
  right: -5px;
  top: 5px; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-item:hover > .context-menu-list {
  display: block; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-separator {
  height: 1px;
  padding: 0px;
  margin: 3px 0px;
  background-color: lightgray; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-submenu:after {
  content: ">";
  color: #444;
  position: absolute;
  top: 5px;
  right: 3px;
  z-index: 1; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label,
.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label > input[type="text"],
.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label > textarea,
.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label > select {
  display: block;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label > * {
  vertical-align: top; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label > input[type="checkbox"],
.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label > input[type="radio"] {
  margin-left: -17px; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label > span {
  margin-left: 5px; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-input > label > textarea {
  height: 100px; }

.student-workspace.scoped-bootstrap .context-menu-list .context-menu-accesskey {
  text-decoration: underline; }

.manager_pane {
  display: none; }

.student-workspace.scoped-bootstrap .panel {
  padding: 0px;
  position: absolute;
  width: auto;
  height: auto;
  margin: 0;
  border-radius: 0;
  overflow: hidden;
  color: #24323E;
  z-index: auto; }

.student-workspace.scoped-bootstrap .theme_light .panel {
  background-color: white;
  border: 1px solid #c8c8c8; }

.student-workspace.scoped-bootstrap .theme_dark .panel {
  background-color: #24323E;
  border: 1px solid #1C262F; }

.student-workspace.scoped-bootstrap .panel.active {
  border-color: #2aa198; }

.student-workspace.scoped-bootstrap .panel .empty_panel {
  text-align: center;
  color: #DBE2E8;
  line-height: 24px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif; }
  .student-workspace.scoped-bootstrap .panel .empty_panel.shell_terminal {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; }
  .student-workspace.scoped-bootstrap .panel .empty_panel .empty_icon {
    display: inline-block;
    height: 48px;
    width: 48px; }
    .student-workspace.scoped-bootstrap .panel .empty_panel .empty_icon.editor {
      background-image: url(/images/code-editor-empty-30225.svg); }
    .student-workspace.scoped-bootstrap .panel .empty_panel .empty_icon.terminal_shell {
      background-image: url(/images/shell-editor-empty-31400.svg); }
  .student-workspace.scoped-bootstrap .panel .empty_panel .empty_message {
    margin-top: -5px; }
  .student-workspace.scoped-bootstrap .panel .empty_panel .empty_newtab {
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 2px;
    white-space: normal;
    text-decoration: none;
    color: #02B3E4;
    display: inline-block;
    padding-top: 24px; }
    .student-workspace.scoped-bootstrap .panel .empty_panel .empty_newtab:hover, .student-workspace.scoped-bootstrap .panel .empty_panel .empty_newtab:focus, .student-workspace.scoped-bootstrap .panel .empty_panel .empty_newtab:active {
      color: #148BB1; }

.student-workspace.scoped-bootstrap .panel_dock > a {
  cursor: pointer; }

.student-workspace.scoped-bootstrap .tab_bar {
  left: 0;
  width: auto;
  padding: 1px 0;
  z-index: 2;
  top: 0;
  right: 0;
  height: 40px;
  margin: 0; }

.student-workspace.scoped-bootstrap .theme_dark .tab_bar,
.student-workspace.scoped-bootstrap .theme_dark .tab_bar .info_pane {
  background-color: #1C262F;
  border-bottom: 1px solid #1C262F; }

.student-workspace.scoped-bootstrap .theme_light .tab_bar,
.student-workspace.scoped-bootstrap .theme_light .tab_bar .info_pane {
  background-color: #eee; }

.student-workspace.scoped-bootstrap .info_pane {
  z-index: 2;
  top: 0;
  right: 0;
  height: 40px;
  margin: 0;
  line-height: 40px;
  position: absolute; }

.student-workspace.scoped-bootstrap .theme_light .info_pane {
  color: #aaa;
  border-left: 1px solid #ccc; }

.student-workspace.scoped-bootstrap .theme_dark .info_pane {
  color: #888;
  border-left: 1px solid #555; }

.student-workspace.scoped-bootstrap .tab.term {
  width: 205px; }

.closetab {
  float: right;
  border-radius: 9px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  font-size: 24px;
  margin: 10px 8px;
  text-align: center;
  color: #7D97AD; }
  .closetab:hover {
    color: #FFFFFF; }

.student-workspace.scoped-bootstrap .tab {
  float: left;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  cursor: default;
  height: 39px;
  line-height: 17px;
  overflow: hidden;
  position: relative;
  color: #7D97AD; }
  .student-workspace.scoped-bootstrap .tab.active {
    display: block;
    margin-bottom: -4px;
    border-right: 2px solid #1C262F;
    border-left: 2px solid #1C262F; }
  .student-workspace.scoped-bootstrap .tab:hover {
    background: #344655;
    color: #FFFFFF; }

.student-workspace.scoped-bootstrap .tab_title {
  margin: 8px 20px;
  line-height: 24px;
  display: inline-block; }

.theme_dark .tab.active {
  background-color: #24323E;
  color: #FFFFFF;
  border-color: #24323E; }

.student-workspace.scoped-bootstrap .tab.newtab {
  width: 48px;
  background-color: #1C262F;
  display: flex;
  align-items: center;
  justify-content: center; }
  .student-workspace.scoped-bootstrap .tab.newtab span {
    line-height: 16px;
    height: 21px;
    width: 19px;
    display: block;
    font-size: xx-large; }

.student-workspace.scoped-bootstrap .theme_dark .tab.newtab:hover {
  color: #FFFFFF;
  background: #586e75; }

.content_div {
  position: absolute;
  width: auto;
  height: auto;
  left: 0;
  top: 40px;
  right: 0;
  bottom: 0;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  border: 0;
  font-family: "source-code-pro", monospace;
  font-size: 12px;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  z-index: 1; }

.resize {
  position: absolute;
  display: block;
  opacity: 0;
  z-index: 9;
  color-profile: sRGB;
  border: 1px solid red;
  background: red; }

.resize_x {
  cursor: ew-resize;
  height: auto;
  right: auto; }

.resize_y {
  cursor: ns-resize;
  width: auto;
  bottom: auto; }

.cm-s-udacity {
  z-index: 1; }

#files_modal *:not(input.field) {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; }

#files_modal .modal-body {
  padding: 0; }

#files_modal #files_modal_name_select {
  box-shadow: 0 0 15px 0 rgba(46, 61, 73, 0.2);
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row; }
  #files_modal #files_modal_name_select .files-modal--input {
    flex-grow: 1;
    margin-right: 16px; }
  #files_modal #files_modal_name_select .files-modal--submit {
    flex-basis: 168px; }

#files_modal .modal-content {
  overflow: hidden; }

#files_modal td.file_dropdown {
  pointer-events: none;
  visibility: hidden; }

#files_modal .files-modal-table-container {
  padding: 10px 32px 0px;
  overflow-y: auto;
  height: 320px; }

#files_modal #react-file-list {
  table-layout: fixed; }

#files_modal #files_modal_display {
  margin-bottom: 20px;
  width: 100%;
  cursor: default; }
  #files_modal #files_modal_display th {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 2px;
    color: #525C65;
    text-transform: uppercase; }
    .theme_light #files_modal #files_modal_display th {
      border-bottom: 1px solid #DBE2E8 !important; }
    .theme_dark #files_modal #files_modal_display th {
      border-bottom: 1px solid #444 !important; }
  #files_modal #files_modal_display td, #files_modal #files_modal_display th {
    border: 0 !important;
    white-space: nowrap; }
    #files_modal #files_modal_display td.file_name, #files_modal #files_modal_display th.file_name {
      padding-left: 12px;
      user-select: none;
      line-height: 18px; }
      #files_modal #files_modal_display td.file_name a, #files_modal #files_modal_display th.file_name a {
        display: inline-block; }
        .theme_dark #files_modal #files_modal_display td.file_name a,
        .theme_light #files_modal #files_modal_display td.file_name a, .theme_dark #files_modal #files_modal_display th.file_name a,
        .theme_light #files_modal #files_modal_display th.file_name a {
          color: inherit; }
        #files_modal #files_modal_display td.file_name a:hover, #files_modal #files_modal_display td.file_name a:focus, #files_modal #files_modal_display th.file_name a:hover, #files_modal #files_modal_display th.file_name a:focus {
          text-decoration: none; }
    #files_modal #files_modal_display td .file_name_text, #files_modal #files_modal_display th .file_name_text {
      margin: 0 8px 0 10px; }
    #files_modal #files_modal_display td.file_size, #files_modal #files_modal_display th.file_size {
      width: 20%; }
    #files_modal #files_modal_display td.file_mtime, #files_modal #files_modal_display th.file_mtime {
      width: 20%; }
  .theme_light #files_modal #files_modal_display tr.active td, .theme_light #files_modal #files_modal_display tr.active th, .theme_light #files_modal #files_modal_display tr.context-menu-active td, .theme_light #files_modal #files_modal_display tr.context-menu-active th {
    background-color: #FAFBFC; }
  .theme_dark #files_modal #files_modal_display tr.active td, .theme_dark #files_modal #files_modal_display tr.active th, .theme_dark #files_modal #files_modal_display tr.context-menu-active td, .theme_dark #files_modal #files_modal_display tr.context-menu-active th {
    background-color: #344655; }
  .theme_dark #files_modal #files_modal_display tr {
    color: #DBE2E8; }
  .theme_light #files_modal #files_modal_display tr {
    color: #525C65; }
  .theme_light #files_modal #files_modal_display tr td.active, .theme_light #files_modal #files_modal_display tr th.active {
    background-color: #bde3f7; }
  .theme_dark #files_modal #files_modal_display tr td.active, .theme_dark #files_modal #files_modal_display tr th.active {
    background-color: #014b72; }
  #files_modal #files_modal_display .nav {
    margin-bottom: 0px; }
  #files_modal #files_modal_display .navbar {
    box-shadow: 0 0 15px 0 rgba(46, 61, 73, 0.2);
    height: 60px;
    padding: 20px; }
  #files_modal #files_modal_display .modal--back-arrow {
    display: inline-block;
    margin-left: 32px;
    list-style: none;
    color: #02B3E4; }
  #files_modal #files_modal_display .breadcrumbs {
    list-style: none;
    font-size: 14px;
    line-height: 22px;
    margin: 0px;
    display: inline-block; }
    .theme_dark #files_modal #files_modal_display .breadcrumbs > li {
      color: #7D97AD;
      display: inline-block; }
      .theme_dark #files_modal #files_modal_display .breadcrumbs > li a {
        text-decoration: none;
        color: #7D97AD; }
      .theme_dark #files_modal #files_modal_display .breadcrumbs > li:last-child {
        color: #FFFFFF;
        font-weight: 600; }
    .theme_light #files_modal #files_modal_display .breadcrumbs > li {
      color: #525C65;
      opacity: 0.8;
      display: inline-block; }
      .theme_light #files_modal #files_modal_display .breadcrumbs > li a {
        text-decoration: none;
        color: #525C65; }
      .theme_light #files_modal #files_modal_display .breadcrumbs > li span {
        color: #525C65; }
      .theme_light #files_modal #files_modal_display .breadcrumbs > li:last-child {
        color: #525C65;
        opacity: 1;
        font-weight: 600; }
    #files_modal #files_modal_display .breadcrumbs .divider {
      padding: 0 3px;
      color: #7D97AD; }

#files_modal #modal_files .file_name {
  text-overflow: ellipsis;
  overflow: hidden; }

#files_modal #files_modal_submit {
  margin-left: 10px;
  height: 48px;
  width: 100%; }

#files_modal #files_modal_input {
  height: 48px;
  width: 100%;
  padding: 16px;
  line-height: 16px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.05); }

.files-panel {
  position: absolute;
  width: auto;
  overflow: hidden;
  top: 0%;
  right: 90%;
  bottom: 0%;
  left: 0%;
  font-size: 14px; }
  .files-panel #files_container_inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    cursor: default; }
    @media (max-width: 1040px) {
      .files-panel #files_container_inner {
        margin: 0 5px; } }
    .files-panel #files_container_inner #files_navbar {
      display: flex;
      border-bottom: 1px solid #0F1820; }
    .files-panel #files_container_inner #files_toolbar {
      display: flex;
      flex-direction: row;
      width: 100%;
      color: #DBE2E8; }
      .files-panel #files_container_inner #files_toolbar li, .files-panel #files_container_inner #files_toolbar a {
        color: inherit; }
      .files-panel #files_container_inner #files_toolbar span {
        font-size: medium; }
        @media (max-width: 1040px) {
          .files-panel #files_container_inner #files_toolbar span {
            font-size: small; } }
      .files-panel #files_container_inner #files_toolbar .navigate_up {
        margin-right: auto; }
    .files-panel #files_container_inner #myCrumbs {
      flex-grow: 0;
      flex-shrink: 0;
      margin: 10px 0; }
    .files-panel #files_container_inner .breadcrumbs {
      list-style: none;
      font-size: 14px;
      line-height: 22px;
      margin: 0px; }
      .theme_dark .files-panel #files_container_inner .breadcrumbs > li {
        color: #7D97AD;
        display: inline-block; }
        .theme_dark .files-panel #files_container_inner .breadcrumbs > li a {
          text-decoration: none;
          color: #7D97AD; }
        .theme_dark .files-panel #files_container_inner .breadcrumbs > li:last-child {
          color: #FFFFFF;
          font-weight: 600; }
      .theme_light .files-panel #files_container_inner .breadcrumbs > li {
        color: #525C65;
        opacity: 0.8;
        display: inline-block; }
        .theme_light .files-panel #files_container_inner .breadcrumbs > li a {
          text-decoration: none;
          color: #525C65; }
        .theme_light .files-panel #files_container_inner .breadcrumbs > li span {
          color: #525C65; }
        .theme_light .files-panel #files_container_inner .breadcrumbs > li:last-child {
          color: #525C65;
          opacity: 1;
          font-weight: 600; }
      .files-panel #files_container_inner .breadcrumbs .divider {
        padding: 0 3px;
        color: #7D97AD; }
    .files-panel #files_container_inner .files-table-wrapper {
      flex-grow: 1;
      overflow: auto;
      margin-right: -32px; }
      .files-panel #files_container_inner .files-table-wrapper .files-table {
        margin-bottom: 0px !important; }
    .files-panel #files_container_inner th {
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 2px;
      color: #525C65;
      text-transform: uppercase; }
      .theme_light .files-panel #files_container_inner th {
        border-bottom: 1px solid #DBE2E8 !important; }
      .theme_dark .files-panel #files_container_inner th {
        border-bottom: 1px solid #444 !important; }
    .files-panel #files_container_inner td, .files-panel #files_container_inner th {
      border: 0 !important;
      white-space: nowrap; }
      .files-panel #files_container_inner td.file_name, .files-panel #files_container_inner th.file_name {
        padding-left: 12px;
        user-select: none;
        line-height: 18px; }
        .files-panel #files_container_inner td.file_name a, .files-panel #files_container_inner th.file_name a {
          display: inline-block; }
          .theme_dark .files-panel #files_container_inner td.file_name a,
          .theme_light .files-panel #files_container_inner td.file_name a, .theme_dark .files-panel #files_container_inner th.file_name a,
          .theme_light .files-panel #files_container_inner th.file_name a {
            color: inherit; }
          .files-panel #files_container_inner td.file_name a:hover, .files-panel #files_container_inner td.file_name a:focus, .files-panel #files_container_inner th.file_name a:hover, .files-panel #files_container_inner th.file_name a:focus {
            text-decoration: none; }
      .files-panel #files_container_inner td .file_name_text, .files-panel #files_container_inner th .file_name_text {
        margin: 0 8px 0 10px; }
      .files-panel #files_container_inner td.file_size, .files-panel #files_container_inner th.file_size {
        width: 20%; }
      .files-panel #files_container_inner td.file_mtime, .files-panel #files_container_inner th.file_mtime {
        width: 20%; }
    .theme_light .files-panel #files_container_inner tr.active td, .theme_light .files-panel #files_container_inner tr.active th, .theme_light .files-panel #files_container_inner tr.context-menu-active td, .theme_light .files-panel #files_container_inner tr.context-menu-active th {
      background-color: #FAFBFC; }
    .theme_dark .files-panel #files_container_inner tr.active td, .theme_dark .files-panel #files_container_inner tr.active th, .theme_dark .files-panel #files_container_inner tr.context-menu-active td, .theme_dark .files-panel #files_container_inner tr.context-menu-active th {
      background-color: #344655; }
    .theme_dark .files-panel #files_container_inner tr {
      color: #DBE2E8; }
    .theme_light .files-panel #files_container_inner tr {
      color: #525C65; }
    .theme_light .files-panel #files_container_inner tr td.active, .theme_light .files-panel #files_container_inner tr th.active {
      background-color: #bde3f7; }
    .theme_dark .files-panel #files_container_inner tr td.active, .theme_dark .files-panel #files_container_inner tr th.active {
      background-color: #014b72; }
    .files-panel #files_container_inner tbody.files_list {
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0;
      padding: 0; }

#uploader {
  bottom: 0;
  left: 0;
  right: 0; }
  .theme_light #uploader {
    border-top: 1px solid #e5e5e5;
    background: #fbfbfa; }
  .theme_dark #uploader {
    border-top: 1px solid #1C262F;
    background: #24323E; }
  #uploader p {
    color: #7D97AD; }
  #uploader a.btn {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 2px;
    white-space: normal;
    font-family: "Open Sans", sans-serif; }
    @media (max-width: 1040px) {
      #uploader a.btn {
        font-size: 10px;
        line-height: 14px; } }

#upload_alerts {
  margin-bottom: 10px; }
  #upload_alerts .alert {
    position: relative;
    font-size: 90%;
    padding: 8px 10px 6px;
    margin: 10px 10px 0; }
    #upload_alerts .alert.alert-dismissable .close {
      position: absolute;
      top: 5px;
      right: 5px; }
    #upload_alerts .alert strong {
      display: inline-block;
      margin-bottom: -3px;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden; }

#upload_list {
  position: relative; }
  #upload_list > * {
    padding: 10px; }
    .theme_light #upload_list > * {
      border-top: 1px solid #e5e5e5; }
    .theme_dark #upload_list > * {
      border-top: 1px solid #444; }
  #upload_list .actions {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%; }
    .theme_light #upload_list .actions, .theme_light #upload_list .actions a {
      color: #444; }
    .theme_dark #upload_list .actions, .theme_dark #upload_list .actions a {
      color: #839496; }
    .theme_light #upload_list .actions .filename {
      color: black; }
    .theme_dark #upload_list .actions .filename {
      color: #eee; }
    #upload_list .actions a {
      font-size: 85%; }
  #upload_list .progress {
    height: 10px;
    margin: 5px 0; }

.CodeMirror {
  height: calc(100% - 58px);
  overflow: visible; }

.editor {
  height: calc(100% - 50px);
  display: flex;
  align-items: center;
  justify-content: center; }

.editor-loading {
  user-select: none;
  pointer-events: none;
  opacity: 0.5;
  background-color: grey;
  height: calc(100% - 30px);
  width: 100%;
  position: absolute;
  z-index: 5;
  text-align: center; }

.editor-loading.hidden {
  display: none; }

.editor-remote-selection-background-0 {
  background-color: #b58900; }

.editor-remote-selection-background-1 {
  background-color: #268bd2; }

.editor-remote-selection-background-2 {
  background-color: #cb4b16; }

.editor-remote-selection-background-3 {
  background-color: #dc322f; }

.editor-remote-selection-background-4 {
  background-color: #6c71c4; }

.editor-remote-selection-background-5 {
  background-color: #859900; }

.editor-tabs-wrapper .editor-tabs {
  width: 100%; }

.editor-tabs-wrapper .overflow-tab {
  display: none; }

.editor-tabs-wrapper.hasOverflow .editor-tabs {
  width: calc(100% - 20px); }

.editor-tabs-wrapper.hasOverflow .overflow-tab {
  display: block; }

.editor-tabs-wrapper .editor-tabs {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; }
  .editor-tabs-wrapper .editor-tabs .tab {
    flex-basis: 50px;
    flex-grow: 1;
    max-width: 200px; }
    .editor-tabs-wrapper .editor-tabs .tab:first-child {
      border-left: 0px; }
    .editor-tabs-wrapper .editor-tabs .tab:last-child {
      border-right: 0px; }

.editor_tab {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; }
  .editor_tab .editor_tab_text {
    margin: 8px 20px;
    line-height: 24px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1; }
  .editor_tab .editor_tab_members {
    flex-basis: 10px; }
  .editor_tab .closetab {
    flex-basis: 20px; }

.editor_tab_members {
  display: none; }

.overflow-tab {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  display: inline-block;
  height: 30px;
  vertical-align: top;
  background-color: #a9a9a9; }
  .overflow-tab:before {
    content: "\F054";
    font-family: "FontAwesome";
    font-size: 12px;
    width: 20px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    color: white; }

.overflow-tab.active:before {
  content: "\F078"; }

.overflow-dropdown {
  position: absolute;
  right: 0px;
  background-color: white;
  z-index: 10001;
  list-style-type: none;
  padding-left: 0;
  width: 200px;
  box-shadow: 0 2px 6px 0 rgba(46, 60, 73, 0.2); }
  .overflow-dropdown li {
    padding: 5px 10px; }
    .overflow-dropdown li.active, .overflow-dropdown li:hover {
      background-color: #2aa198;
      color: white; }

#browser_container .html_button {
  position: absolute;
  padding: 8px;
  height: 32px;
  width: 29px;
  cursor: pointer;
  z-index: 1; }
  .theme_light #browser_container .html_button {
    color: black;
    background: #fbfbfa;
    border: 1px solid #dedede;
    border-top: none;
    border-left: none; }
    .theme_light #browser_container .html_button:hover, .theme_light #browser_container .html_button:focus {
      background: #eee; }
  .theme_dark #browser_container .html_button {
    color: #93a1a1;
    background: #24323E;
    border: 1px solid #586e75;
    border-top: none;
    border-left: none; }
    .theme_dark #browser_container .html_button:hover, .theme_dark #browser_container .html_button:focus {
      background: #839496;
      color: #24323E; }

#browser_container #html_form_container {
  position: relative;
  padding-left: 58px; }

#browser_container #html_url_input {
  width: 100%;
  height: 32px;
  padding-left: 7px;
  outline: none;
  border: none; }
  .theme_light #browser_container #html_url_input {
    border-bottom: 1px solid #dddddd; }
  .theme_dark #browser_container #html_url_input {
    border-bottom: 1px solid #586e75;
    background: #073642;
    color: #839496; }

#browser_container .html_frame {
  box-shadow: none;
  border: none;
  outline: none;
  width: 100%;
  height: 100%; }

#browser_container #html_content_div {
  top: 56px; }
  .theme_light #browser_container #html_content_div {
    background: white; }
  .theme_dark #browser_container #html_content_div {
    background: #24323E; }

.hotkeys-div {
  text-align: center; }

.hotkeys-config {
  background-color: #eee;
  border: 1px solid #ddd;
  line-height: 1.4;
  resize: none;
  width: 100%;
  overflow-y: scroll; }
  @media (min-height: 600px) {
    .hotkeys-config {
      max-height: 457px; } }
  @media (min-height: 800px) {
    .hotkeys-config {
      max-height: 557px; } }
  @media (min-height: 1000px) {
    .hotkeys-config {
      max-height: 757px; } }

.binding-input {
  width: 92%;
  display: inline-block;
  border-left: none;
  border-right: 1px solid #f0f0f0;
  border-top: none;
  text-align: center;
  border-bottom: none; }

.empty {
  width: 100%; }

.hotkey-delete {
  width: 8%;
  height: 19px;
  position: relative; }

.manager-div {
  text-align: left;
  background-color: #F5F5F5;
  padding: 3px; }

.hotkey-div {
  border-top: 2px solid #f0f0f0; }

.command-container {
  display: inline-block;
  width: 50%;
  vertical-align: top;
  margin-top: 2px; }

.command-div {
  width: 92%;
  display: inline-block; }

.add-div {
  width: 8%;
  height: 19px;
  position: relative; }

.bindings-div {
  width: 50%;
  text-align: center;
  display: inline-block;
  margin-right: 0px;
  margin-left: auto;
  border-left: #f0f0f0 1px solid; }

.hotkeys-message {
  color: red;
  margin-bottom: 8px; }

.add-defaults {
  float: right; }

.add-defaults-container {
  margin-bottom: 10px;
  cursor: pointer; }

.paste-mode-check {
  text-align: left;
  margin-left: 25%; }

.hotkey-field-hr {
  margin: 0px;
  width: 100%;
  border-color: #f0f0f0; }

.loader {
  border-radius: 50%;
  color: #02b3e4;
  font-size: 11px;
  text-indent: -99999em;
  margin: 25px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0); }
  .loader:before, .loader:after {
    border-radius: 50%; }
  .loader:before, .loader:after {
    position: absolute;
    content: ""; }
  .loader:before {
    width: 5.2em;
    height: 10.2em;
    background: white;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.2em 5.1em;
    transform-origin: 5.2em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: load2 2s infinite ease 1.5s; }
  .loader:after {
    width: 5.2em;
    height: 10.2em;
    background: white;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    -webkit-transform-origin: 0px 5.1em;
    transform-origin: 0px 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: load2 2s infinite ease; }

@-webkit-keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }

@keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }

.editor-navbar {
  display: none; }

.editor-container {
  border: none;
  background-color: #002b36; }
  .editor-container .navbar {
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%; }

.overflow-tab {
  background-color: #1c262f;
  height: 39px;
  width: 21px; }
  .overflow-tab:before {
    line-height: 40px;
    color: white; }

.overflow-dropdown {
  border-radius: 4px;
  top: 39px;
  padding: 3px 0;
  color: #2e3d49; }
  .overflow-dropdown li:hover, .overflow-dropdown li:active {
    background-color: #02ccba; }

/*

    Name:       udacity
    Author:     Jocelyn

    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)
    Original color scheme has been edited to match Udacity colors

*/
.cm-s-udacity.CodeMirror {
  background-color: #24323E;
  color: #DBE2E8;
  border: none; }

.cm-s-udacity .CodeMirror-wrap {
  /* enable rc-tooltip menu with z-index 1070 to render on top of this
   * tested in edge on windows10
   */
  z-index: 10; }

.cm-s-udacity .CodeMirror-gutters {
  color: #95ADC1;
  background-color: #24323E;
  border: none; }

.cm-s-udacity .CodeMirror-cursor {
  border-left: solid 2px #02B3E4; }

.cm-s-udacity .CodeMirror-linenumber {
  color: #95ADC1;
  line-height: 24px; }

.cm-s-udacity pre.CodeMirror-line {
  font-family: "source-code-pro", monospace;
  font-size: 14px;
  line-height: 24px; }

.cm-s-udacity .CodeMirror-lines {
  padding: 0px; }

.cm-s-udacity.CodeMirror-focused div.CodeMirror-selected {
  background: #3A4F5F; }

.cm-s-udacity .CodeMirror-line::selection, .cm-s-udacity .CodeMirror-line > span::selection, .cm-s-udacity .CodeMirror-line > span > span::selection {
  background: rgba(255, 255, 255, 0.1); }

.cm-s-udacity .CodeMirror-line::-moz-selection, .cm-s-udacity .CodeMirror-line > span::-moz-selection, .cm-s-udacity .CodeMirror-line > span > span::-moz-selection {
  background: rgba(255, 255, 255, 0.1); }

.cm-s-udacity span.cm-comment {
  color: #7D97AD; }

.cm-s-udacity span.cm-string, .cm-s-udacity span.cm-string-2 {
  color: #D38BFF; }

.cm-s-udacity span.cm-number {
  color: #FF7D7D; }

.cm-s-udacity span.cm-variable {
  color: #DBE2E8; }

.cm-s-udacity span.cm-variable-2 {
  color: #02CCBA; }

.cm-s-udacity span.cm-def {
  color: #D38BFF; }

.cm-s-udacity span.cm-keyword {
  color: #ff79c6; }

.cm-s-udacity span.cm-operator {
  color: #9fca56; }

.cm-s-udacity span.cm-keyword {
  color: #e6cd69; }

.cm-s-udacity span.cm-atom {
  color: #FF7D7D; }

.cm-s-udacity span.cm-meta {
  color: #D38BFF; }

.cm-s-udacity span.cm-tag {
  color: #D38BFF; }

.cm-s-udacity span.cm-attribute {
  color: #9fca56; }

.cm-s-udacity span.cm-qualifier {
  color: #9fca56; }

.cm-s-udacity span.cm-property {
  color: #02CCBA; }

.cm-s-udacity span.cm-variable-3, .cm-s-udacity span.cm-type {
  color: #9fca56; }

.cm-s-udacity span.cm-builtin {
  color: #9fca56; }

.cm-s-udacity .CodeMirror-activeline-background {
  background: #344655; }

.cm-s-udacity .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important; }

/* Make tabs visible.  See http://codemirror.net/demo/visibletabs.html */
.cm-s-udacity span.cm-tab {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYElEQVRIx+2UMQ6AMAwDzwixdGBgqAT//xojW2cz0MIbgnJLFHmJZSuQJP/HtmxX20vfj6FNEQxIMtCAYeK9e7a9BwpDQO3zMSDpDFKjAmw9iRKqQrYFrECTdOVXSJKPG893HnQdCN1BAAAAAElFTkSuQmCC);
  background-position: right;
  background-repeat: no-repeat; }

/* class-web styles/app.scss overrides cm defaults making search text unreadable */
.cm-s-udacity.CodeMirror.CodeMirror-wrap .CodeMirror-dialog
input:not([type=button]):not([type=submit]):not([type=checkbox]):not([type=radio]):not([role=combobox]) {
  /* copied from codemirror/addon/dialog.css#.CodeMirror-dialog */
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
  /* added to override additional styles */
  box-shadow: none; }

/* overrides cm default yellowish highlighting of terms that match search */
.cm-s-udacity .cm-searching {
  background-color: #02b3e4; }
</style><style type="text/css">/* BASICS */

.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: monospace;
  height: 300px;
  color: black;
  direction: ltr;
}

/* PADDING */

.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
}
.CodeMirror pre {
  padding: 0 4px; /* Horizontal padding of content */
}

.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  background-color: white; /* The little square between H and V scrollbars */
}

/* GUTTER */

.CodeMirror-gutters {
  border-right: 1px solid #ddd;
  background-color: #f7f7f7;
  white-space: nowrap;
}
.CodeMirror-linenumbers {}
.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #999;
  white-space: nowrap;
}

.CodeMirror-guttermarker { color: black; }
.CodeMirror-guttermarker-subtle { color: #999; }

/* CURSOR */

.CodeMirror-cursor {
  border-left: 1px solid black;
  border-right: none;
  width: 0;
}
/* Shown when moving in bi-directional text */
.CodeMirror div.CodeMirror-secondarycursor {
  border-left: 1px solid silver;
}
.cm-fat-cursor .CodeMirror-cursor {
  width: auto;
  border: 0 !important;
  background: #7e7;
}
.cm-fat-cursor div.CodeMirror-cursors {
  z-index: 1;
}
.cm-fat-cursor-mark {
  background-color: rgba(20, 255, 20, 0.5);
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
}
.cm-animate-fat-cursor {
  width: auto;
  border: 0;
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
  background-color: #7e7;
}
@-moz-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@-webkit-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}

/* Can style cursor different in overwrite (non-insert) mode */
.CodeMirror-overwrite .CodeMirror-cursor {}

.cm-tab { display: inline-block; text-decoration: inherit; }

.CodeMirror-rulers {
  position: absolute;
  left: 0; right: 0; top: -50px; bottom: -20px;
  overflow: hidden;
}
.CodeMirror-ruler {
  border-left: 1px solid #ccc;
  top: 0; bottom: 0;
  position: absolute;
}

/* DEFAULT THEME */

.cm-s-default .cm-header {color: blue;}
.cm-s-default .cm-quote {color: #090;}
.cm-negative {color: #d44;}
.cm-positive {color: #292;}
.cm-header, .cm-strong {font-weight: bold;}
.cm-em {font-style: italic;}
.cm-link {text-decoration: underline;}
.cm-strikethrough {text-decoration: line-through;}

.cm-s-default .cm-keyword {color: #708;}
.cm-s-default .cm-atom {color: #219;}
.cm-s-default .cm-number {color: #164;}
.cm-s-default .cm-def {color: #00f;}
.cm-s-default .cm-variable,
.cm-s-default .cm-punctuation,
.cm-s-default .cm-property,
.cm-s-default .cm-operator {}
.cm-s-default .cm-variable-2 {color: #05a;}
.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
.cm-s-default .cm-comment {color: #a50;}
.cm-s-default .cm-string {color: #a11;}
.cm-s-default .cm-string-2 {color: #f50;}
.cm-s-default .cm-meta {color: #555;}
.cm-s-default .cm-qualifier {color: #555;}
.cm-s-default .cm-builtin {color: #30a;}
.cm-s-default .cm-bracket {color: #997;}
.cm-s-default .cm-tag {color: #170;}
.cm-s-default .cm-attribute {color: #00c;}
.cm-s-default .cm-hr {color: #999;}
.cm-s-default .cm-link {color: #00c;}

.cm-s-default .cm-error {color: #f00;}
.cm-invalidchar {color: #f00;}

.CodeMirror-composing { border-bottom: 2px solid; }

/* Default styles for common addons */

div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
.CodeMirror-activeline-background {background: #e8f2ff;}

/* STOP */

/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
  background: white;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 30px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -30px; margin-right: -30px;
  padding-bottom: 30px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 30px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
}
.CodeMirror-vscrollbar {
  right: 0; top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0; left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0; bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0; bottom: 0;
}

.CodeMirror-gutters {
  position: absolute; left: 0; top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -30px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0; bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper ::selection { background-color: transparent }
.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre {
  /* Reset some styles that the rest of the page might have set */
  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
}
.CodeMirror-wrap pre {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px; /* Force widget margins to stay inside of the container */
}

.CodeMirror-widget {}

.CodeMirror-rtl pre { direction: rtl; }

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre { position: static; }

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected { background: #d9d9d9; }
.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
.CodeMirror-crosshair { cursor: crosshair; }
.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }

.cm-searching {
  background-color: #ffa;
  background-color: rgba(255, 255, 0, .4);
}

/* Used to force a border model for a node */
.cm-force-border { padding-right: .1px; }

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after { content: ''; }

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext { background: none; }
</style><style type="text/css">.CodeMirror-simplescroll-horizontal div, .CodeMirror-simplescroll-vertical div {
  position: absolute;
  background: #ccc;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #bbb;
  border-radius: 2px;
}

.CodeMirror-simplescroll-horizontal, .CodeMirror-simplescroll-vertical {
  position: absolute;
  z-index: 6;
  background: #eee;
}

.CodeMirror-simplescroll-horizontal {
  bottom: 0; left: 0;
  height: 8px;
}
.CodeMirror-simplescroll-horizontal div {
  bottom: 0;
  height: 100%;
}

.CodeMirror-simplescroll-vertical {
  right: 0; top: 0;
  width: 8px;
}
.CodeMirror-simplescroll-vertical div {
  right: 0;
  width: 100%;
}


.CodeMirror-overlayscroll .CodeMirror-scrollbar-filler, .CodeMirror-overlayscroll .CodeMirror-gutter-filler {
  display: none;
}

.CodeMirror-overlayscroll-horizontal div, .CodeMirror-overlayscroll-vertical div {
  position: absolute;
  background: #bcd;
  border-radius: 3px;
}

.CodeMirror-overlayscroll-horizontal, .CodeMirror-overlayscroll-vertical {
  position: absolute;
  z-index: 6;
}

.CodeMirror-overlayscroll-horizontal {
  bottom: 0; left: 0;
  height: 6px;
}
.CodeMirror-overlayscroll-horizontal div {
  bottom: 0;
  height: 100%;
}

.CodeMirror-overlayscroll-vertical {
  right: 0; top: 0;
  width: 6px;
}
.CodeMirror-overlayscroll-vertical div {
  right: 0;
  width: 100%;
}
</style><style type="text/css">.CodeMirror-foldmarker {
  color: blue;
  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
  font-family: arial;
  line-height: .3;
  cursor: pointer;
}
.CodeMirror-foldgutter {
  width: .7em;
}
.CodeMirror-foldgutter-open,
.CodeMirror-foldgutter-folded {
  cursor: pointer;
}
.CodeMirror-foldgutter-open:after {
  content: "\25BE";
}
.CodeMirror-foldgutter-folded:after {
  content: "\25B8";
}
</style><style type="text/css">.CodeMirror-dialog {
  position: absolute;
  left: 0; right: 0;
  background: inherit;
  z-index: 15;
  padding: .1em .8em;
  overflow: hidden;
  color: inherit;
}

.CodeMirror-dialog-top {
  border-bottom: 1px solid #eee;
  top: 0;
}

.CodeMirror-dialog-bottom {
  border-top: 1px solid #eee;
  bottom: 0;
}

.CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
}

.CodeMirror-dialog button {
  font-size: 70%;
}
</style><style type="text/css">/**
 * Copyright (c) 2014 The xterm.js authors. All rights reserved.
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * https://github.com/chjj/term.js
 * @license MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 *   The original design remains. The terminal itself
 *   has been extended to include xterm CSI codes, among
 *   other features.
 */

/**
 *  Default styles for xterm.js
 */

.xterm {
    font-feature-settings: "liga" 0;
    position: relative;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}

.xterm.focus,
.xterm:focus {
    outline: none;
}

.xterm .xterm-helpers {
    position: absolute;
    top: 0;
    /**
     * The z-index of the helpers must be higher than the canvases in order for
     * IMEs to appear on top.
     */
    z-index: 10;
}

.xterm .xterm-helper-textarea {
    /*
     * HACK: to fix IE's blinking cursor
     * Move textarea out of the screen to the far left, so that the cursor is not visible.
     */
    position: absolute;
    opacity: 0;
    left: -9999em;
    top: 0;
    width: 0;
    height: 0;
    z-index: -10;
    /** Prevent wrapping so the IME appears against the textarea at the correct position */
    white-space: nowrap;
    overflow: hidden;
    resize: none;
}

.xterm .composition-view {
    /* TODO: Composition position got messed up somewhere */
    background: #000;
    color: #FFF;
    display: none;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
}

.xterm .composition-view.active {
    display: block;
}

.xterm .xterm-viewport {
    /* On OS X this is required in order for the scroll bar to appear fully opaque */
    background-color: #000;
    overflow-y: scroll;
    cursor: default;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}

.xterm .xterm-screen {
    position: relative;
}

.xterm .xterm-screen canvas {
    position: absolute;
    left: 0;
    top: 0;
}

.xterm .xterm-scroll-area {
    visibility: hidden;
}

.xterm-char-measure-element {
    display: inline-block;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: -9999em;
    line-height: normal;
}

.xterm {
    cursor: text;
}

.xterm.enable-mouse-events {
    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
    cursor: default;
}

.xterm.xterm-cursor-pointer {
    cursor: pointer;
}

.xterm.column-select.focus {
    /* Column selection mode */
    cursor: crosshair;
}

.xterm .xterm-accessibility,
.xterm .xterm-message {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    color: transparent;
}

.xterm .live-region {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
</style><style type="text/css">.terminal.xterm .xterm-viewport {
  background-color: #24323E !important;
}</style><script src="https://www.googleadservices.com/pagead/conversion/967079204/?random=1554812938743&amp;cv=9&amp;fst=1554812938743&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=22&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Flab%2Fworkspace&amp;tiba=Pixel%20Art%20Maker%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/967079204/?random=1554812938754&amp;cv=9&amp;fst=1554812938754&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635470&amp;u_h=768&amp;u_w=1366&amp;u_ah=738&amp;u_aw=1366&amp;u_cd=24&amp;u_his=22&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;data=workspace_type%3Dhtml-live%3Bworkspace_id%3Dr787430l825272xHTMLLIVEuhby5k01%3Bbrowser_session%3Df6ad695f-b8b0-4616-afbe-92459ab3378b%3Bworkspace_session%3D3712864b-e5ac-4262-8051-08a4108f660e%3Bnd_key%3Dnd001-1mac-v2%3Bnd_version%3D1.0.0%3Bnd_locale%3Den-us%3Bpart_key%3D000fb1b1-f266-47b1-8bc8-ad6f350f9861%3Bmodule_key%3Dd4046b59-2c04-48c5-949a-8c0097cbc231%3Blesson_key%3D037b9245-6441-446d-8bfd-ebe6157a3d15%3Bname%3DWorkspace%20Viewed%3Bpath%3D%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Flab%2Fworkspace%3Breferrer%3D%3Bsearch%3D%3Btitle%3DPixel%20Art%20Maker%20-%20Udacity%3Burl%3Dhttps%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Flab%2Fworkspace&amp;frm=0&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F000fb1b1-f266-47b1-8bc8-ad6f350f9861%2Fmodules%2Fd4046b59-2c04-48c5-949a-8c0097cbc231%2Flessons%2F037b9245-6441-446d-8bfd-ebe6157a3d15%2Flab%2Fworkspace&amp;tiba=Pixel%20Art%20Maker%20-%20Udacity&amp;async=1&amp;rfmt=3&amp;fmt=4"></script></head><body style="zoom: 1; cursor: auto;" lang="fr-FR" dir="ltr"><div id="app"><div id="main"><style type="text/css">
#intercom-container {
  display: none;
}
</style><div class="content"><div data-test="nanodegree-container"><div><noscript></noscript><div class="_layout-module--container--3f2U4"><ul class="_layout-module--a11y-nav--vkRI0"><li><a href="#content">Jump to content</a></li><li><a href="mailto:a11y@udacity.com?subject=Accessibility%20Support" target="_blank">Email for accessibility support</a></li></ul><main class="_layout-module--main--20EWg"><div class="_layout-module--title-area--1yynf"><div class="_header-module--header--1boX-"><div><div class="_wrapper--header--phqkb"><div class="_header--nav-bar--3KQMm"><div class="_header--nav-info--37HJZ"><div class="_header--logo--3fV9w"><div class="_header--udacity-logo-holder--2OuRv"><i class="vds-icon vds-icon--lg" role="img"><span class="vds-visually-hidden">Udacity</span><span class="isvg loaded"><svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m30 1.5 1 .5v13c0 5.5518873-2.8896987 8.6956924-5.9952158 10.0998853l.0046152.0001151-7.6209628 4.388562c-.0587698.0345597-.1177596.0685268-.1769566.1019012l-.086419.0497647.0018048-.0025414c-1.6439764.9082087-3.4421842 1.3623131-5.1268658 1.3623131-5 0-11-4-11-12v-12l2 1v11c0 8 6 10 9 10 1.8587063 0 4.869009-.7677309 6.8904286-3.254517-3.7087012-.8728471-7.8904286-4.0667786-7.8904286-10.745483v-11.8l-8 4.8-2-1 10-6 1 .5 1 .5v13c0 6.9399584 4.5152834 8.6120862 7.0175421 8.9333683.6082443-1.3117782.9824579-2.9354664.9824579-4.9333683v-13l2 1v12c0 1.8526446-.3217774 3.4907709-.8783952 4.914379 2.5266185-.3651608 6.8783952-2.1012335 6.8783952-8.914379v-11.75l-6 3.75-2-1 8-5z" fill-rule="evenodd"></path></svg></span></i></div><h2 class="_header--labs-header-text--2uB85">Lab</h2></div><div class="_header--tabs--9bUTA"><div class="_tabs--container-dark--ZeHyl _tabs--_container--vGNIr"><ol class="_tabs--tabs-mobile-closed--2oK_D _tabs--_tabs--38-4r shared--outer-container--3eppq"><li><a href="/nanodegrees/nd001-1mac-v2/parts/000fb1b1-f266-47b1-8bc8-ad6f350f9861/modules/d4046b59-2c04-48c5-949a-8c0097cbc231/lessons/037b9245-6441-446d-8bfd-ebe6157a3d15/lab/overview">Introduction</a></li><li><a href="/nanodegrees/nd001-1mac-v2/parts/000fb1b1-f266-47b1-8bc8-ad6f350f9861/modules/d4046b59-2c04-48c5-949a-8c0097cbc231/lessons/037b9245-6441-446d-8bfd-ebe6157a3d15/lab/instructions">Instructions</a></li><li class="_tabs--selected--1QmdZ"><a href="/nanodegrees/nd001-1mac-v2/parts/000fb1b1-f266-47b1-8bc8-ad6f350f9861/modules/d4046b59-2c04-48c5-949a-8c0097cbc231/lessons/037b9245-6441-446d-8bfd-ebe6157a3d15/lab/workspace">Workspace<span class="_tabs--mobile-expand--22QT1"><i class="vds-icon vds-icon--sm vds-color--cerulean" role="img"><span class="vds-visually-hidden">Expand</span><svg viewBox="0 0 32 32"><path d="M8.16 11.411l7.13 10.175c.297.422.903.541 1.356.265a.947.947 0 0 0 .292-.276l6.91-10.175c.29-.425.153-.99-.304-1.259A1.033 1.033 0 0 0 23.02 10H8.98c-.542 0-.98.409-.98.912 0 .178.055.351.16.5z" fill-rule="evenodd"></path></svg></i></span></a></li><li><a href="/nanodegrees/nd001-1mac-v2/parts/000fb1b1-f266-47b1-8bc8-ad6f350f9861/modules/d4046b59-2c04-48c5-949a-8c0097cbc231/lessons/037b9245-6441-446d-8bfd-ebe6157a3d15/lab/reflection"><span>Reflection</span></a></li></ol></div></div><button class="vds-button vds-button--minimal vds-button--small" type="button"><span class="vds-button__content">Back to Lessons</span></button></div></div></div></div></div></div><div class="_layout-module--content-area--tGmoA" style="background-color: rgb(250, 251, 252);"><div aria-hidden="true" class="_layout-module--hidden-header--3JZ5t"><div class="_header-module--header--1boX-"><div><div class="_wrapper--header--phqkb"><div class="_header--nav-bar--3KQMm"><div class="_header--nav-info--37HJZ"><div class="_header--logo--3fV9w"><div class="_header--udacity-logo-holder--2OuRv"><i class="vds-icon vds-icon--lg" role="img"><span class="vds-visually-hidden">Udacity</span><span class="isvg loaded"><svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m30 1.5 1 .5v13c0 5.5518873-2.8896987 8.6956924-5.9952158 10.0998853l.0046152.0001151-7.6209628 4.388562c-.0587698.0345597-.1177596.0685268-.1769566.1019012l-.086419.0497647.0018048-.0025414c-1.6439764.9082087-3.4421842 1.3623131-5.1268658 1.3623131-5 0-11-4-11-12v-12l2 1v11c0 8 6 10 9 10 1.8587063 0 4.869009-.7677309 6.8904286-3.254517-3.7087012-.8728471-7.8904286-4.0667786-7.8904286-10.745483v-11.8l-8 4.8-2-1 10-6 1 .5 1 .5v13c0 6.9399584 4.5152834 8.6120862 7.0175421 8.9333683.6082443-1.3117782.9824579-2.9354664.9824579-4.9333683v-13l2 1v12c0 1.8526446-.3217774 3.4907709-.8783952 4.914379 2.5266185-.3651608 6.8783952-2.1012335 6.8783952-8.914379v-11.75l-6 3.75-2-1 8-5z" fill-rule="evenodd"></path></svg></span></i></div><h2 class="_header--labs-header-text--2uB85">Lab</h2></div><div class="_header--tabs--9bUTA"><div class="_tabs--container-dark--ZeHyl _tabs--_container--vGNIr"><ol class="_tabs--tabs-mobile-closed--2oK_D _tabs--_tabs--38-4r shared--outer-container--3eppq"><li><a href="/nanodegrees/nd001-1mac-v2/parts/000fb1b1-f266-47b1-8bc8-ad6f350f9861/modules/d4046b59-2c04-48c5-949a-8c0097cbc231/lessons/037b9245-6441-446d-8bfd-ebe6157a3d15/lab/overview">Introduction</a></li><li><a href="/nanodegrees/nd001-1mac-v2/parts/000fb1b1-f266-47b1-8bc8-ad6f350f9861/modules/d4046b59-2c04-48c5-949a-8c0097cbc231/lessons/037b9245-6441-446d-8bfd-ebe6157a3d15/lab/instructions">Instructions</a></li><li class="_tabs--selected--1QmdZ"><a href="/nanodegrees/nd001-1mac-v2/parts/000fb1b1-f266-47b1-8bc8-ad6f350f9861/modules/d4046b59-2c04-48c5-949a-8c0097cbc231/lessons/037b9245-6441-446d-8bfd-ebe6157a3d15/lab/workspace">Workspace<span class="_tabs--mobile-expand--22QT1"><i class="vds-icon vds-icon--sm vds-color--cerulean" role="img"><span class="vds-visually-hidden">Expand</span><svg viewBox="0 0 32 32"><path d="M8.16 11.411l7.13 10.175c.297.422.903.541 1.356.265a.947.947 0 0 0 .292-.276l6.91-10.175c.29-.425.153-.99-.304-1.259A1.033 1.033 0 0 0 23.02 10H8.98c-.542 0-.98.409-.98.912 0 .178.055.351.16.5z" fill-rule="evenodd"></path></svg></i></span></a></li><li><a href="/nanodegrees/nd001-1mac-v2/parts/000fb1b1-f266-47b1-8bc8-ad6f350f9861/modules/d4046b59-2c04-48c5-949a-8c0097cbc231/lessons/037b9245-6441-446d-8bfd-ebe6157a3d15/lab/reflection"><span>Reflection</span></a></li></ol></div></div><button class="vds-button vds-button--minimal vds-button--small" type="button"><span class="vds-button__content">Back to Lessons</span></button></div></div></div></div></div></div><div id="content"><div id="main-layout-content" aria-labelledby="header-title" class="_body-module--body--UXv_5"><div><div class="_body--screen-width-warning--3Rjqd _body--body--3h6OC index--until-tablet--3TJ_9"><div class="_section--section-dark--1uBkT _section--_section--9AZvz"><h3>Labs can only be completed on a desktop or laptop and not on tablets or mobile devices. Sorry for the inconvenience.</h3><button class="vds-button vds-button--primary" type="button"><span class="vds-button__content">Return to Lessons</span></button></div></div><div class="_body--body--3h6OC index--from-tablet--cciH6"><div class="workspace--workspace-container--BS-26"><div style="height: calc(100vh - 4rem);"><div class="blueprint-fullscreen--wrapper--2voit"><div style="height: 100%; position: relative;"><div class="scoped-bootstrap student-workspace " style="position: relative; height: calc(100% - 48px);"><div class="theme_dark" style="height: 100%;"><div id="layout" style="height: 100%;"><div id="layout_main" style="height: 100%;"><div class="panel files-panel" id="5d17e9f0-4145-48a9-8e85-4bdf2a1b1ff8" style="left: 0%; right: 85.7247%; top: 0%; bottom: 0%; pointer-events: auto;">
<div id="files_container_inner">
  <div id="navbar_container"><div id="files_navbar" class="navbar unselectable button-navbar"><menu id="files_toolbar" class="nav navbar-nav unselectable"><li class="navigate_up"><a><span class="ureact-glyph-module--icon-arrow-left-sm--1Wem1 ureact-glyph-module--icon--1oZQL" title="Back"><i>Back</i></span></a></li><li><a data-test="wtc-add-file-menu"><span class="ureact-glyph-module--icon-add-sm--1fhrf ureact-glyph-module--icon--1oZQL" title="Add File"><i>Add File</i></span></a></li></menu></div></div>

  <ul id="myCrumbs" class="breadcrumbs"><li><a style="cursor: pointer;">/</a><span class="divider">&gt;</span></li><li><a style="cursor: pointer;">home</a><span class="divider">&gt;</span></li><li class="active">workspace</li></ul>

  <div id="myFiles" class="files-table-wrapper"><table id="react-file-list" class="table table-condensed files-table"><tbody class="files_list"><tr class="files_list file_tab_link" data-name="README.md" data-crumbs="/,home,workspace" data-is-dir="false"><td class="file_name"><a><span class="ureact-glyph-module--icon-file-sm--26Ekd ureact-glyph-module--icon--1oZQL" title="file-sm" style="color: rgb(125, 151, 173);"><i>file-sm</i></span><span class="file_name_text">README.md</span></a></td></tr><tr class="files_list file_tab_link" data-name="designs.js" data-crumbs="/,home,workspace" data-is-dir="false"><td class="file_name"><a><span class="ureact-glyph-module--icon-file-sm--26Ekd ureact-glyph-module--icon--1oZQL" title="file-sm" style="color: rgb(125, 151, 173);"><i>file-sm</i></span><span class="file_name_text">designs.js</span></a></td></tr><tr class="files_list file_tab_link" data-name="index.html" data-crumbs="/,home,workspace" data-is-dir="false"><td class="file_name"><a><span class="ureact-glyph-module--icon-file-sm--26Ekd ureact-glyph-module--icon--1oZQL" title="file-sm" style="color: rgb(125, 151, 173);"><i>file-sm</i></span><span class="file_name_text">index.html</span></a></td></tr><tr class="files_list file_tab_link" data-name="styles.css" data-crumbs="/,home,workspace" data-is-dir="false"><td class="file_name"><a><span class="ureact-glyph-module--icon-file-sm--26Ekd ureact-glyph-module--icon--1oZQL" title="file-sm" style="color: rgb(125, 151, 173);"><i>file-sm</i></span><span class="file_name_text">styles.css</span></a></td></tr></tbody></table></div>

  <div id="upload_alerts"></div>
  <div id="upload_list"></div>
</div>
</div><div class="panel" id="3ad2038f-7663-40c6-a51e-4acc6bba18c1" style="left: 14.2753%; right: 84.9927%; top: 0%; bottom: 0%; pointer-events: auto;">
    <div class="editor-tabs-wrapper hasOverflow">
      <div class="editor-tabs tab_bar unselectable"><div class="tab"><span class="editor_tab"><span class="editor_tab_text">index.html</span><span class="editor_tab_members">0</span><span class="closetab">×</span></span></div><div class="tab"><span class="editor_tab"><span class="editor_tab_text">styles.css</span><span class="editor_tab_members">0</span><span class="closetab">×</span></span></div><div class="tab active"><span class="editor_tab"><span class="editor_tab_text">designs.js</span><span class="editor_tab_members">1</span><span class="closetab">×</span></span></div><div class="tab hidden"><span class="editor_tab"><span class="editor_tab_text">README.md</span><span class="editor_tab_members">0</span><span class="closetab">×</span></span></div></div>
      <div class="overflow-tab editor_tab" style=""></div>
    </div>
    <ul class="overflow-dropdown hidden"><li>README.md</li></ul>
    <div class="editor">
      <div class="editor-loading hidden">
      </div>
      <div class="editor-empty empty_panel" style="display: none;">
        <div class="empty_icon editor"></div>
        <div class="empty_message">No Open Files</div><a href="#" class="empty_newtab">OPEN FILE</a>
      </div>
    <div class="CodeMirror cm-s-udacity CodeMirror-wrap CodeMirror-overlayscroll" style="width: 583px; height: 100%; display: none;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 493px; left: 96.8594px;"><textarea autocorrect="false" autocapitalize="false" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true" style="display: none;"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true" style="display: block; bottom: 0px;"><div style="height: 186.323px; top: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 39px; margin-bottom: -17px; border-right-width: 13px; min-height: 1380px; padding-right: 6px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre>x</pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 0px; width: 530px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 1344px; width: 53.8594px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 24px; width: 530px; height: 1320px;"></div></div><div class="CodeMirror-cursors" style="visibility: hidden;"></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-meta">&lt;!DOCTYPE html&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">html</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">head</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">title</span><span class="cm-tag cm-bracket">&gt;</span>Pixel Art Maker!<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">title</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">link</span> <span class="cm-attribute">rel</span>=<span class="cm-string">"stylesheet"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"https://fonts.googleapis.com/css?family=Monoton"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">link</span> <span class="cm-attribute">rel</span>=<span class="cm-string">"stylesheet"</span> <span class="cm-attribute">href</span>=<span class="cm-string">"styles.css"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">head</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">body</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h1</span><span class="cm-tag cm-bracket">&gt;</span>Pixel Art Maker<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">h1</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span>Choose Grid Size<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">form</span> <span class="cm-attribute">id</span>=<span class="cm-string">"sizePicker"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  Grid Height:</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"number"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"inputHeight"</span> <span class="cm-attribute">name</span>=<span class="cm-string">"height"</span> <span class="cm-attribute">min</span>=<span class="cm-string">"1"</span> <span class="cm-attribute">value</span>=<span class="cm-string">"20"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  Grid Width:</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">16</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"number"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"inputWidth"</span> <span class="cm-attribute">name</span>=<span class="cm-string">"width"</span> <span class="cm-attribute">min</span>=<span class="cm-string">"1"</span> <span class="cm-attribute">value</span>=<span class="cm-string">"20"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"submit"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">form</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">19</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">20</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span>Pick A Color<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">21</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">type</span>=<span class="cm-string">"color"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"colorPicker"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">22</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">23</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span>Design Canvas<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">24</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">table</span> <span class="cm-attribute">id</span>=<span class="cm-string">"pixelCanvas"</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">table</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">25</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h3</span><span class="cm-tag cm-bracket">&gt;</span>Toggle Grid: <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">button</span> <span class="cm-attribute">button</span> <span class="cm-attribute">type</span>=<span class="cm-string">"button"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"gridToggle"</span><span class="cm-tag cm-bracket">&gt;</span>On/Off<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">button</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">h3</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">26</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">27</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span>Click to <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">span</span> <span class="cm-attribute">class</span>=<span class="cm-string">"fill"</span><span class="cm-tag cm-bracket">&gt;</span>Fill<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">span</span><span class="cm-tag cm-bracket">&gt;</span> / Right-Click to <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">span</span> <span class="cm-attribute">class</span>=<span class="cm-string">"erase"</span><span class="cm-tag cm-bracket">&gt;</span>Erase<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">span</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">h2</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 13px; width: 1px; border-bottom: 0px solid transparent; top: 1380px;"></div><div class="CodeMirror-gutters" style="height: 1393px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div><div class="CodeMirror cm-s-udacity CodeMirror-wrap CodeMirror-overlayscroll" style="width: 583px; height: 100%; display: none;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 493px; left: 43px;"><textarea autocorrect="false" autocapitalize="false" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true" style="display: none;"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true" style="display: block; bottom: 0px;"><div style="height: 229.892px; top: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 39px; margin-bottom: -17px; border-right-width: 13px; min-height: 1116px; padding-right: 6px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre>x</pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 0px; width: 530px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 1098px; width: 0px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 24px; width: 530px; height: 1074px;"></div></div><div class="CodeMirror-cursors" style=""></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">body</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">text-align</span>: <span class="cm-atom">center</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">h1</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">font-family</span>: <span class="cm-variable">Monoton</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">font-size</span>: <span class="cm-number">70px</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">margin</span>: <span class="cm-number">0.2em</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">h2</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">margin</span>: <span class="cm-number">1em</span> <span class="cm-number">0</span> <span class="cm-number">0.25em</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">15</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">h2</span>:<span class="cm-variable-3">first-of-type</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">16</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">margin-top</span>: <span class="cm-number">0.5em</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">19</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">table</span>,</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">20</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">tr</span>,</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">21</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">td</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">22</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">border</span>: <span class="cm-number">1px</span> <span class="cm-atom">solid</span> <span class="cm-keyword">black</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">23</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">24</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">25</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">table</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">26</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">border-collapse</span>: <span class="cm-atom">collapse</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">27</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">margin</span>: <span class="cm-number">0</span> <span class="cm-atom">auto</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">28</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">29</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">30</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag">tr</span> {</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 13px; width: 1px; border-bottom: 0px solid transparent; top: 1116px;"></div><div class="CodeMirror-gutters" style="height: 1129px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div><div class="CodeMirror cm-s-udacity CodeMirror-wrap CodeMirror-overlayscroll" style="width: 3.95313px; height: 100%;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 493px; left: 0px;"><textarea autocorrect="false" autocapitalize="false" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true" style="display: block; right: 6px; left: 39px;"><div style="width: 10px; left: 0px;"></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true" style="display: block; bottom: 6px;"><div style="height: 10px; top: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true" style="display: block; height: 6px; width: 6px;"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 39px; margin-bottom: -17px; border-right-width: 13px; min-height: 30366px; padding-right: 6px; padding-bottom: 6px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre>x</pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 0px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 24px; height: 1296px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 1320px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 30348px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 30372px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 30396px; width: 7.6875px; height: 24px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 24px; height: 30324px;"></div></div><div class="CodeMirror-cursors" style=""></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">//imports useful elements, and assigns them to variables</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-variable">canvas</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"pixelCanvas"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-variable">color</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"colorPicker"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-variable">sizePicker</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"sizePicker"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-variable">height</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"inputHeight"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-variable">width</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"inputWidth"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-variable">toggle</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"gridToggle"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-variable">save</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"saveArt"</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">//function to create grid and assign event listeners to all cells on creation</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div><div class="CodeMirror-gutter-elt" style="left: 29px; width: 10px;"><div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div></div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">makeGrid</span>(<span class="cm-def">height</span>, <span class="cm-def">width</span>) {</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 13px; width: 1px; border-bottom: 6px solid transparent; top: 30366px;"></div><div class="CodeMirror-gutters" style="height: 30385px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div><div class="CodeMirror cm-s-udacity CodeMirror-wrap CodeMirror-overlayscroll" style="width: 583px; height: 100%; display: none;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 43px;"><textarea autocorrect="false" autocapitalize="false" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-overlayscroll-horizontal" cm-not-content="true" style="display: none;"><div></div></div><div class="CodeMirror-overlayscroll-vertical" cm-not-content="true" style="display: none; bottom: 0px;"><div style="height: 10px; top: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 39px; margin-bottom: -17px; border-right-width: 13px; min-height: 72px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>3</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"><div class="CodeMirror-cursor" style="left: 4px; top: 0px; height: 24px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -39px; width: 39px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Udacity Pixel Art Maker Project</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -39px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Final project for the Google Developer Challenge Scholarship!</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 13px; width: 1px; border-bottom: 0px solid transparent; top: 72px;"></div><div class="CodeMirror-gutters" style="height: 85px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div><div class="CodeMirror-gutter CodeMirror-foldgutter"></div></div></div></div></div>
  </div><div id="2bafa7a4-576d-4811-9d74-74e7ef9dffda" class="full-height panel" style="left: 15.0073%; right: 0%; top: 0%; bottom: 0%; pointer-events: auto;"><iframe id="mxa8c" src="https://r787430l825272xHTMLLIVEuhby5k01.udacity-student-workspaces.com/files/home/workspace/index.html?v=1554812951171" class="index--controlled-frame--U7MQt" seamless=""></iframe></div><div id="cb7fb689-873c-410d-937f-7f3a0bc1f7e9" class="panel results running" style="display: none; pointer-events: auto;"><div class="grading--drawer-toggle--2npgm"><div data-test="hide-grader" class="grading--close--2Ib1y"><span class="ureact-glyph-module--icon-arrow-down-sm--M04mg ureact-glyph-module--icon--1oZQL" title=""><i></i></span><span class="grading--hide--1bOok">HIDE GRADER</span></div></div><div class="grading--main--2Jevc"><div class="grading--results-container--1vFQg"><div class="grading--icon-container--IIfrY"><span class="grading--loading-icon--JMN0H grading--icon--2Y34y"></span></div><div class="grading--results--2iW_a"><div class="grading--results-header--1uXap"><h2 class="grading--results-title--4Z-cK">Checking your work for completion.</h2></div><div class="grading--results-details--1PXuG">This may take a few minutes. Thanks for your patience!</div></div></div></div></div><div id="split_x0" class="resize resize_x split_right_5d17e9f0-4145-48a9-8e85-4bdf2a1b1ff8 split_left_3ad2038f-7663-40c6-a51e-4acc6bba18c1 ui-draggable ui-draggable-handle" style="left: 14.2753%; right: auto; top: 0%; bottom: 0%;"></div><div id="split_x1_y0_x0" class="resize resize_x split_right_3ad2038f-7663-40c6-a51e-4acc6bba18c1 split_left_2bafa7a4-576d-4811-9d74-74e7ef9dffda ui-draggable ui-draggable-handle" style="left: 15.0073%; right: auto; top: 0px; bottom: 0%;"></div></div></div></div></div><div data-test="control-bar" class="control-bar--control-bar--xQofX"><div class="control-bar--menu-left--39Mzn"><div class="control-bar--left-group--3GkAw"><div class="control-bar--left-group-upper--2R8zc"><div class="control-bar--tooltip-container--16Pyl"><span class="control-bar--up-arrow--4z9Yd"><span class="ureact-glyph-module--icon-arrow-up-md--2UX1I ureact-glyph-module--icon--1oZQL" title=""><i></i></span></span><span data-test="menu" class="control-bar--menu-text--1XDF0">Menu</span></div><div class="control-bar--alertNotification--2nnvv"></div></div><div class="control-bar--left-group-lower--2vnx1"><noscript></noscript></div></div></div><div class="control-bar--menu-right--2p1lH"><div class="control-bar--action-button--3sXJB"><span></span></div><div class="control-bar--finish-button--16CUd"><noscript></noscript></div><div data-test="run-button" class="control-bar--action-button--3sXJB"><button type="button" class="index-module--default--1FA38 index-module--primary--kx0eU index-module--_btn--2sEaV  index-module--standard--2oyVV" style="cursor: pointer;">Run Code</button></div></div></div></div><div class="ReactModalPortal"></div><div class="ReactModalPortal"></div><div class="ReactModalPortal"></div><div class="ReactModalPortal"></div><div class="ReactModalPortal"></div><div class="ReactModalPortal"></div></div></div></div></div></div></div></div></div></main></div></div></div></div></div></div><script src="/js/vendors~app.fbdb8.js"></script><script src="/js/app.3c9e4.js"></script><iframe frameborder="0" scrolling="no" style="background-color: transparent; border: 0px; display: none;" __idm_frm__="306"></iframe><div id="GOOGLE_INPUT_CHEXT_FLAG" input="" input_stat="{&quot;tlang&quot;:true,&quot;tsbc&quot;:true,&quot;pun&quot;:true,&quot;mk&quot;:true,&quot;ss&quot;:true}" style="display: none;"></div><script type="text/javascript" id="">_linkedin_partner_id="406745";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);</script><script type="text/javascript" id="">(function(){var b=document.getElementsByTagName("script")[0],a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";b.parentNode.insertBefore(a,b)})();</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=406745&amp;fmt=gif">
</noscript>
<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","2197623860455254");fbq("track","PageView");</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2197623860455254&amp;ev=PageView&amp;noscript=1"></noscript>


<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","823398221086645");fbq("track","PageView");</script>
<noscript>
<img height="1" width="1" src="https://www.facebook.com/tr?id=823398221086645&amp;ev=PageView
&amp;noscript=1">
</noscript>

<iframe src="https://bid.g.doubleclick.net/xbbe/pixel?d=KAE" style="display: none;" __idm_frm__="307"></iframe><script src="https://px.ads.linkedin.com/collect/?time=1554812308762&amp;pid=406745&amp;url=https%3A%2F%2Fclassroom.udacity.com%2Fnanodegrees%2Fnd001-1mac-v2%2Fparts%2F6ac731a8-8ef7-4a5f-b476-728f52ad69c5%2Fmodules%2F8d8d90a1-f16c-49f3-9431-304b471c0169%2Flessons%2F714e4447-72ce-4657-ac82-5c1914d1e239%2Fconcepts%2F668546db-9d39-4a08-8899-554a711f206d&amp;fmt=js&amp;s=1" type="text/javascript"></script><iframe id="intercom-frame" style="display: none;" __idm_frm__="308"></iframe><div id="intercom-container" class="intercom-namespace" style="position: fixed; width: 0px; height: 0px; bottom: 0px; right: 0px; z-index: 2147483647;"><style>.intercom-mobile-messenger-active{overflow:visible !important;}.intercom-mobile-messenger-active > body{overflow:hidden;height:100%;width:100%;position:fixed;}html.intercom-modal-open{overflow:hidden !important;}#intercom-container-body{overflow:hidden;}</style><div class="intercom-app" aria-live="polite"></div></div><div id="modals-root" class="student-workspace scoped-bootstrap theme_light">
    <div id="files_modal" tabindex="-1" role="dialog" class="modal">
      <div class="modal-dialog">
        <button type="button" class="close modal-close" data-dismiss="modal" aria-hidden="true">×</button>
        <div class="modal-content">
          <div class="modal-body">
            <form id="files_modal_form" class="form-inline">
              <div id="files_modal_display" class="form-group">
                <div class="navbar">
                  <div class="modal--back-arrow"><li class="navigate_up"><a><span class="ureact-glyph-module--icon-arrow-left-sm--1Wem1 ureact-glyph-module--icon--1oZQL" title="Back"><i>Back</i></span></a></li></div>
                  <ul id="modal_crumbs" class="breadcrumbs"><li class="active">/</li></ul>
                </div>
                <div id="react-modal-container" class="files-modal-table-container"></div>
              </div>
              <div id="files_modal_name_select">
                <div class="files-modal--input">
                  <input id="files_modal_input" type="text" name="input" placeholder="Name" class="form-control field">
                </div>
                <div class="files-modal--submit">
                  <input id="files_modal_submit" type="submit" value="Open or Create" class="btn btn-primary">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="confirm_modal" tabindex="-1" role="dialog" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <center>
              <p></p>
              <button id="confirm_no" data-dismiss="modal" class="btn btn-default">Cancel</button>
              <button id="confirm_yes" data-dismiss="modal" class="btn btn-primary">Confirm</button>
            </center>
          </div>
        </div>
      </div>
    </div>
    <div id="main_modal" tabindex="-1" role="dialog" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body"></div>
        </div>
      </div>
    </div>
    <div id="react-modal"></div>
  </div></body></html>
