/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * proxima-nova:
 *   - http://typekit.com/eulas/00000000000000003b9b093b
 *   - http://typekit.com/eulas/00000000000000003b9b093a
 *   - http://typekit.com/eulas/00000000000000003b9b0934
 *   - http://typekit.com/eulas/00000000000000003b9b0935
 *   - http://typekit.com/eulas/00000000000000003b9b0932
 *   - http://typekit.com/eulas/00000000000000003b9b0933
 *
 * © 2009-2019 Adobe Systems Incorporated. All Rights Reserved.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"2245528","c":[".tk-proxima-nova","\"proxima-nova\",sans-serif"],"fi":[139,140,175,176,5474,5475],"fc":[{"id":139,"family":"proxima-nova","src":"https://use.typekit.net/af/71f83c/00000000000000003b9b093b/27/{format}{?primer,subset_id,fvd,v}","descriptors":{"weight":"700","style":"normal","primer":"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{"id":140,"family":"proxima-nova","src":"https://use.typekit.net/af/86b539/00000000000000003b9b093a/27/{format}{?primer,subset_id,fvd,v}","descriptors":{"weight":"700","style":"italic","primer":"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{"id":175,"family":"proxima-nova","src":"https://use.typekit.net/af/4838bd/00000000000000003b9b0934/27/{format}{?primer,subset_id,fvd,v}","descriptors":{"weight":"400","style":"normal","primer":"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{"id":176,"family":"proxima-nova","src":"https://use.typekit.net/af/6aec08/00000000000000003b9b0935/27/{format}{?primer,subset_id,fvd,v}","descriptors":{"weight":"400","style":"italic","primer":"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{"id":5474,"family":"proxima-nova","src":"https://use.typekit.net/af/437c3d/00000000000000003b9b0932/27/{format}{?primer,subset_id,fvd,v}","descriptors":{"weight":"300","style":"normal","primer":"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}},{"id":5475,"family":"proxima-nova","src":"https://use.typekit.net/af/f02b29/00000000000000003b9b0933/27/{format}{?primer,subset_id,fvd,v}","descriptors":{"weight":"300","style":"italic","primer":"7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191"}}],"fn":["proxima-nova",["i3","i4","i7","n3","n4","n7"]],"hn":"use.typekit.net","ht":"tk","js":"1.19.2","kt":"bls7dcy","l":"typekit","ps":1,"ping":"https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}","pm":true,"type":"configurable","vft":false};
/*{"k":"1.19.2","auto_updating":true,"last_published":"2018-02-28 12:40:14 UTC"}*/
;(function(window,document,undefined){if(!document.querySelector){document.documentElement.className+=" wf-inactive";return;}function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var l=Date.now||function(){return+new Date};function ca(a){this.g=a||"-"}ca.prototype.b=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.g)};function da(){var a=[{name:"font-family",value:m.c[n+1]}];this.g=[m.c[n]];this.b=a}function fa(a){for(var b=a.g.join(","),c=[],d=0;d<a.b.length;d++){var e=a.b[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"};function q(a,b){return(a&65535)*b+(((a>>>16)*b&65535)<<16)};function r(a,b){this.b=b||Array(Math.ceil(a/32));if(!b)for(var c=0;c<this.b.length;c++)this.b[c]=0}r.prototype.set=function(a){if(Math.floor(a/32+1)>this.b.length)throw Error("Index is out of bounds.");var b=Math.floor(a/32);this.b[b]|=1<<a-32*b};r.prototype.has=function(a){if(Math.floor(a/32+1)>this.b.length)throw Error("Index is out of bounds.");var b=Math.floor(a/32);return!!(this.b[b]&1<<a-32*b)};function ga(a,b,c){this.b=a;this.i=b;this.g=new r(a,c)}var ha=[2449897292,4218179547,2675077685,1031960064,1478620578,1386343184,3194259988,2656050674,3012733295,2193273665];
ga.prototype.has=function(a){if("string"!==typeof a&&"number"!==typeof a)throw Error("Value should be a string or number.");for(var b="number"===typeof a,c=0;c<this.i;c++){var d;if(b)d=q(a&4294967295,3432918353),d=d<<15|d>>>17,d=q(d,461845907),d^=ha[c]||0,d=d<<13|d>>>19,d=q(d,5)+3864292196,d^=4,d^=d>>>16,d=q(d,2246822507),d^=d>>>13,d=q(d,3266489909),d^=d>>>16,d=(d>>>0)%this.b;else{d=ha[c]||0;var e,f,g=a.length%4,k=a.length-g;for(f=0;f<k;f+=4)e=(a.charCodeAt(f+0)&4294967295)<<0|(a.charCodeAt(f+1)&
4294967295)<<8|(a.charCodeAt(f+2)&4294967295)<<16|(a.charCodeAt(f+3)&4294967295)<<24,e=q(e,3432918353),e=e<<15|e>>>17,e=q(e,461845907),d^=e,d=d<<13|d>>>19,d=q(d,5)+3864292196;e=0;switch(g){case 3:e^=(a.charCodeAt(f+2)&4294967295)<<16;case 2:e^=(a.charCodeAt(f+1)&4294967295)<<8;case 1:e^=(a.charCodeAt(f+0)&4294967295)<<0,e=q(e,3432918353),e=e<<15|e>>>17,e=q(e,461845907),d^=e}d^=a.length;d=q(d^d>>>16,2246822507);d=q(d^d>>>13,3266489909);d=((d^d>>>16)>>>0)%this.b}if(!this.g.has(d))return!1}return!0};function ia(a){a.length%4&&(a+=Array(5-a.length%4).join("="));a=a.replace(/\-/g,"+").replace(/\_/g,"/");if(window.atob)a=window.atob(a);else{a=a.replace(/=+$/,"");if(1==a.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var b=0,c,d,e=0,f="";d=a.charAt(e++);~d&&(c=b%4?64*c+d:d,b++%4)?f+=String.fromCharCode(255&c>>(-2*b&6)):0)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);a=f}c=[];for(b=0;b<a.length;b+=4)c.push(a.charCodeAt(b)<<
24|a.charCodeAt(b+1)<<16|a.charCodeAt(b+2)<<8|a.charCodeAt(b+3)<<0);a=c.shift();b=c.shift();this.b=new ga(a,b,c)}ia.prototype.has=function(a){if(""===a)return!0;for(a=a.split(".");a.length;){var b=a.join("."),c="*."+b;if(this.b.has(b)||this.b.has(c)||this.b.has(encodeURIComponent(b))||this.b.has(encodeURIComponent(c)))return!0;a.shift()}return!1};function t(a,b,c,d){b=a.b.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.b.createTextNode(d));return b}function u(a,b,c){a=a.b.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}
function ja(a,b){a.b.body?b():a.b.addEventListener?a.b.addEventListener("DOMContentLoaded",b):a.b.attachEvent("onreadystatechange",function(){"interactive"!=a.b.readyState&&"complete"!=a.b.readyState||b()})}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){var d=b||[];c=c||[];b=a.className.split(/\s+/);for(var e,f=0;f<d.length;f+=1){e=!1;for(var g=0;g<b.length;g+=1)if(d[f]===b[g]){e=!0;break}e||b.push(d[f])}d=[];for(f=0;f<b.length;f+=1){e=!1;for(g=0;g<c.length;g+=1)if(b[f]===c[g]){e=!0;break}e||d.push(b[f])}a.className=d.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ka(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function x(a,b){var c=t(a,"style");c.setAttribute("type","text/css");c.styleSheet?(u(a,"head",c),c.styleSheet.cssText=b):(c.appendChild(document.createTextNode(b)),u(a,"head",c))}
function la(a,b,c){var d=a.b.getElementsByTagName("head")[0];if(d){var e=t(a,"script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}};function A(a,b,c){this.g=a.g.document.documentElement;this.j=b;this.m=c;this.b=new ca("-");this.o=!1!==b.events;this.i=!1!==b.classes}function B(a){if(a.i){var b=ka(a.g,a.b.b("wf","active")),c=[],d=[a.b.b("wf","loading")];b||c.push(a.b.b("wf","inactive"));w(a.g,c,d)}C(a,"inactive")}function C(a,b,c){if(a.o&&a.j[b])try{if(c)a.j[b](c.b,D(c));else a.j[b]()}catch(d){console.error('Typekit: Error in "'+b+'" callback',d)}if(a.m[b])if(c)a.m[b](c.b,D(c));else a.m[b]()};function ma(a,b,c){c=c||{};this.b=a;this.g=b;this.weight=c.weight||"400";this.style=c.style||"normal";this.B=c.primer||void 0;this.C=c.subset_id||void 0}function E(a){return("tk-"+a.b).slice(0,26)+"-"+D(a)}function F(a,b){return new ma(b,a.g,{weight:a.weight,style:a.style,B:a.B,C:a.C})}function D(a){return a.style.charAt(0)+a.weight.charAt(0)}function na(a){var b=a.charAt(0);a=a.charAt(1);/[1-9]/.test(a)||(a=4);return{style:"i"===b?"italic":"o"===b?"oblique":"normal",weight:a+"00"}};function oa(){var a=document,b=navigator.userAgent;if(/MSIE|Trident/.test(b)&&(a.documentMode?9>a.documentMode:1))b="i";else{a:{if(/AppleWebKit/.test(b)&&/Android/.test(b)&&!/OPR|Chrome|CrMo|CriOS/.test(b)&&(a=/Android ([^;)]+)/.exec(b))&&a[1]){a=parseFloat(a[1]);a=3.1<=a&&4.1>a;break a}a=!1}if(!a)a:{if(/Silk/.test(b)&&/Linux|Ubuntu|Android/.test(b)&&(b=/Silk\/([\d\._]+)/.exec(b))&&b[1]){a=2<=parseFloat(b[1]);break a}a=!1}b=a?"j":"k"}return b};function G(a){this.b=a}function H(a,b){return a.b.replace(/\{([^\{\}]+)\}/g,function(a,d){if("?"==d.charAt(0)){for(var e=d.slice(1).split(","),f=[],g=0;g<e.length;g++)b[e[g]]&&f.push(e[g]+"="+encodeURIComponent(b[e[g]]));return f.length?"?"+f.join("&"):""}return encodeURIComponent(b[d]||"")})};function I(){this.b=[]}function qa(a,b){for(var c=0;c<b.length;c++)a.b.push(b[c])}function J(a,b){for(var c=0;c<a.b.length;c++)b(a.b[c],c,a)}
function ra(a,b){if("i"===b){var c={},d=new I;J(a,function(a){c[a.b]||(c[a.b]={});c[a.b][a.weight]||(c[a.b][a.weight]=[]);c[a.b][a.weight].push(a)});for(var e in c){for(var f=[400,300,200,100,500,600,700,800,900],g=400,k=0;k<f.length;k++)if(g=f[k],c[e][g]){qa(d,c[e][g]);break}f=[700,800,900,600,500,400,300,200,100];for(k=0;k<f.length;k++){var p=f[k];if(c[e][p]&&g!==p){qa(d,c[e][p]);break}}}J(a,function(a){a=F(a,a.b.replace(/(-1|-2)$/,"").slice(0,28)+"-"+D(a));d.b.push(a)});return d}return"x"===b?
new I:a}function sa(a,b,c){for(var d=[],e=0;e<b.length;e++){var f=b[e],g=H(new G(a.g),{format:f,primer:a.B,subset_id:a.C,fvd:D(a),extension:ta(f),token:c,v:"3"});"i"===f?d.push("url("+g+")"):d.push("url("+g+') format("'+ua(f)+'")')}return d.join(",")}function va(a,b,c,d){if("x"===b)return"";var e=[];e.push("font-family:"+(d?E(a):a.b));b="k"===b?sa(a,["l","d","a"],c):sa(a,[b],c);e.push("src:"+b);e.push("font-weight:"+a.weight);e.push("font-style:"+a.style);return"@font-face{"+e.join(";")+";}"}
function ua(a){switch(a){case "d":return"woff";case "i":return"eot";case "l":return"woff2";default:return"opentype"}}function ta(a){switch(a){case "d":return"woff";case "i":return"eot";case "l":return"woff2";default:return"otf"}}function K(a,b,c,d){var e=[];J(a,function(a){e.push(va(a,b,c,d))});return e.join("")};function L(a,b){this.g=a;this.i=b;this.b=t(this.g,"span",{"aria-hidden":"true"},this.i)}function M(a){u(a.g,"body",a.b)}
function N(a){return"display:block !important;position:absolute !important;top:-9999px !important;left:-9999px !important;font-size:300px !important;width:auto !important;height:auto !important;line-height:normal !important;margin:0 !important;padding:0 !important;font-variant:normal !important;white-space:nowrap !important;font-family:"+a.b+" !important;font-weight:"+a.weight+" !important;font-style:"+a.style+" !important;"};function wa(a,b,c,d,e,f,g,k){this.D=a;this.H=b;this.u=c;this.b=d;this.w=g||"BESbswy";this.g={};this.I=e||3E3;this.G=k;this.A=f||null;this.i=new L(this.u,this.w);this.j=new L(this.u,this.w);this.m=new L(this.u,this.w);this.o=new L(this.u,this.w);a=this.G?E(this.b):this.b.b;this.i.b.style.cssText=N(F(this.b,a+",serif"));this.j.b.style.cssText=N(F(this.b,a+",sans-serif"));this.m.b.style.cssText=N(F(this.b,"serif"));this.o.b.style.cssText=N(F(this.b,"sans-serif"));M(this.i);M(this.j);M(this.m);M(this.o)}
var O={K:"serif",J:"sans-serif"},P=null;function ya(){if(null===P){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);P=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return P}wa.prototype.start=function(){this.g.serif=this.m.b.offsetWidth;this.g["sans-serif"]=this.o.b.offsetWidth;this.F=l();za(this)};function Aa(a,b,c){for(var d in O)if(O.hasOwnProperty(d)&&b===a.g[O[d]]&&c===a.g[O[d]])return!0;return!1}
function za(a){var b=a.i.b.offsetWidth,c=a.j.b.offsetWidth,d;(d=b===a.g.serif&&c===a.g["sans-serif"])||(d=ya()&&Aa(a,b,c));d?l()-a.F>=a.I?ya()&&Aa(a,b,c)&&(!a.A||a.A.hasOwnProperty(a.b.b))?Ba(a,a.D):Ba(a,a.H):Ca(a):Ba(a,a.D)}function Ca(a){setTimeout(h(function(){za(this)},a),50)}function Ba(a,b){setTimeout(h(function(){v(this.i.b);v(this.j.b);v(this.m.b);v(this.o.b);b(this.b)},a),0)};function Da(a,b,c,d,e,f,g){this.i=a;this.u=b;this.b=d;this.m=c;this.g=e||3E3;this.o=f||void 0;this.j=g}Da.prototype.start=function(){var a=this.m.g.document,b=this,c=l(),d=new Promise(function(d,e){function k(){l()-c>=b.g?e():a.fonts.load(b.b.style+" "+b.b.weight+" 300px "+(b.j?E(b.b):b.b.b),b.o).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,c){setTimeout(c,b.g)});Promise.race([e,d]).then(function(){b.i(b.b)},function(){b.u(b.b)})};function Ea(a,b,c,d){this.w=a;this.b=b;this.g=0;this.o=this.m=!1;this.A=c;this.u=d}var Q=null;
function Fa(a,b,c){var d={},e=b.b.length;if(!e&&c)B(a.b);else{a.g+=e;c&&(a.m=c);var f=[];J(b,function(b){var c=a.b;c.i&&w(c.g,[c.b.b("wf",b.b,D(b),"loading")]);C(c,"fontloading",b);c=null;if(null===Q)if(window.FontFace){var e=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),pa=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);Q=e?42<parseInt(e[1],10):pa&&/Apple/.exec(window.navigator.vendor)?603<=parseInt(pa[1],10):!0}else Q=!1;Q?c=new Da(h(a.i,a),h(a.j,
a),a.w,b,a.A,"BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006",a.u):c=new wa(h(a.i,a),h(a.j,a),a.w,b,a.A,d,"BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006",a.u);f.push(c)});for(b=0;b<f.length;b++)f[b].start()}}Ea.prototype.i=function(a){var b=this.b;b.i&&w(b.g,[b.b.b("wf",a.b,D(a),"active")],[b.b.b("wf",a.b,D(a),"loading"),b.b.b("wf",a.b,D(a),"inactive")]);C(b,"fontactive",a);this.o=!0;Ga(this)};
Ea.prototype.j=function(a){var b=this.b;if(b.i){var c=ka(b.g,b.b.b("wf",a.b,D(a),"active")),d=[],e=[b.b.b("wf",a.b,D(a),"loading")];c||d.push(b.b.b("wf",a.b,D(a),"inactive"));w(b.g,d,e)}C(b,"fontinactive",a);Ga(this)};function Ga(a){!--a.g&&a.m&&(a.o?(a=a.b,a.i&&w(a.g,[a.b.b("wf","active")],[a.b.b("wf","loading"),a.b.b("wf","inactive")]),C(a,"active")):B(a.b))};function R(a){this.b=a;this.m=null;this.g=[];this.j=this.w=null;this.u=new I;this.o=this.i=null}var Ha=null,S="00000000000000003b9b12ea 00000000000000003b9b12ed 00000000000000003b9b12ef 00000000000000003b9b12f0 00000000000000003b9b12f2 00000000000000003b9b12f3".split(" ");function Ia(){null===Ha&&(Ha=window.CSS&&window.CSS.supports&&CSS.supports("font-variation-settings",'"wght" 400'));return Ha}R.prototype.supportsConfiguredBrowser=function(){return!0};
R.prototype.init=function(){if(0<this.g.length){for(var a=[],b=0;b<this.g.length;b++)a.push(fa(this.g[b]));x(this.b,a.join(""))}};
R.prototype.load=function(a,b,c){var d=this;c=c||{};if(this.j&&(a=location.hostname,!this.j.has(a))){console.error('Typekit: the domain "'+a+'" isn\'t in the list of published domains for kit "'+this.w+'".');B(new A(this.b,c,{}));return}a=c.timeout;var e=!!c.async,f=oa(),g=ra(this.u,f);c=new A(this.b,c,{active:function(){if(e){var a=K(g,f,d.i,!1);x(d.b,a)}if(d.m){var a=d.m,b=d.b,c=a.m,k=(window.__adobewebfontsappname__||a.app||"").toString().substr(0,20),b=b.g.location.hostname||b.i.location.hostname,
p=[],y=[];window.Typekit?(window.Typekit.fonts||(window.Typekit.fonts=[]),y=window.Typekit.fonts):window.TypekitPreview&&(window.TypekitPreview.fonts||(window.TypekitPreview.fonts=[]),y=window.TypekitPreview.fonts);for(var z=0;z<a.b.length;z++){for(var xa=!1,ea=0;ea<y.length;ea++)if(a.b[z]===y[ea]){xa=!0;break}xa||(p.push(a.b[z]),y.push(a.b[z]))}p.length&&Ja(H(c,{s:a.j,k:a.o,app:k,ht:a.i,h:b,f:p.join("."),a:a.g,js:a.version,e:"js",_:(+new Date).toString()}))}},inactive:function(){if(e){var a=K(g,
f,d.i,!1);x(d.b,a)}}});if(g.b.length){var k=K(g,f,this.i,e);x(this.b,k);var p=new Ea(this.b,c,a,e);ja(d.b,function(){Fa(p,g,b)})}else B(c)};function Ka(a,b){this.j=a;this.g=b;this.b=[]}Ka.prototype.i=function(a){this.b.push(a)};Ka.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)La(this,c[g],function(){--f||Ma(e,d)});else Ma(this,d)};function La(a,b,c){b=H(a.j,{id:b});la(a.g,b,c)}
function Ma(a,b){if(a.b.length){for(var c=new A(a.g,b,{}),d=0;d<a.b.length;d++)a.b[d].init();c.i&&w(c.g,[c.b.b("wf","loading")]);C(c,"loading");for(c=0;c<a.b.length;c++)a.b[c].load(null,c==a.b.length-1,b);a.b=[]}};function Na(){var a=m.ps,b=m.ht,c=Oa,d=m.a,e=m.kt,f=m.js,g=m.l;this.m=new G(m.ping);this.j=a;this.i=b;this.b=c||[];this.g=d||null;this.o=e||null;this.version=f||null;this.app=g||null}function Ja(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)};var Pa=new function(){var a=window;this.g=this.i=a;this.b=this.g.document};window.Typekit||(window.Typekit={});if(!window.Typekit.load){var T=new Ka(new G("//"+(window.Typekit.config||{}).hn+"/{id}.js"),Pa);window.Typekit.load=function(){T.load.apply(T,arguments)};window.Typekit.addKit=function(){T.i.apply(T,arguments)}}for(var U,m=window.Typekit.config||{},Oa=[],V=m.fc,Qa=0;Qa<V.length;Qa++)Oa.push(V[Qa].id);U=new R(Pa);m.ping&&(U.m=new Na);m.vft&&(U.o=m.vft);
if(m.fc)for(var W=m.fc,X=0;X<W.length;X++){var Y=W[X].src,Ra=W[X].descriptors||{};if(U.o&&Ia()&&1===Ra.subset_id)for(var Z=0;Z<S.length;Z++)if(-1!==Y.indexOf(S[Z])){Y=Y.replace(S[Z],"00000000000000003b9b12ef");break}U.u.b.push(new ma(W[X].family,Y,W[X].descriptors))}if(m.dl){var Sa=m.dl;try{U.j=new ia(Sa)}catch(a){}}m.kt&&(U.w=m.kt);m.token&&(U.i=m.token);if(m.c)for(var n=0;n<m.c.length;n+=2)U.g.push(new da);window.Typekit.addKit(U);
function Ta(){if(!Ia())return!1;for(var a=m.fc,b=0;b<a.length;b++)if(1===a[b].descriptors.subset_id)for(var c=0;c<S.length;c++)if(-1!==a[b].src.indexOf(S[c]))return!0;return!1}function Ua(a,b){var c=m.fc,d=na(b);if(!Ia()||!m.vft)return!1;for(var e=0;e<c.length;e++)if(c[e].family===a&&c[e].descriptors.weight===d.weight&&c[e].descriptors.style===d.style&&1===c[e].descriptors.subset_id)for(var f=0;f<S.length;f++)if(-1!==c[e].src.indexOf(S[f]))return!0;return!1}
if(m.pm&&!window.WebFont&&1===Math.round(30*Math.random())){var Va=window.Typekit.load,Wa=[];window.Typekit.load=function(a){a=a||{};var b=a.active||function(){},c=a.fontactive||function(){},d=(new Date).getTime();a.active=function(){b();if(!window.XDomainRequest){var a=new Image,c=function(a){a={fonts:Wa,augmentations:[],font_loading:window.FontFace?"native":"non-native",active_duration:(new Date).getTime()-d,javascript_version:m.js,kit_type:"configurable",ad_blocker:a,test_group:Ta()};a=JSON.stringify(a);
if(!window.XDomainRequest){var b=new XMLHttpRequest;b.open("POST","https://performance.typekit.net/");b.send(a)}};a.src="https://p.typekit.net/p.gif?";a.onload=function(){for(var a=!1,b=0;b<document.styleSheets.length;b++)if(null===document.styleSheets[b].href&&/ghostery-purple-box/.test(document.styleSheets[b].ownerNode.textContent)){a=!0;break}c(a)};a.onerror=function(){c(!0)}}};a.fontactive=function(a,b){c(a,b);var g;a:{g=na(b);for(var k=0;k<V.length;k++)if(V[k].family===a&&V[k].descriptors.weight===
g.weight&&V[k].descriptors.style===g.style){g=V[k].id;break a}g=0}Wa.push({id:g,duration:(new Date).getTime()-d,dynamic:!1,weight:b.charAt(1)+"00",variable:Ua(a,b)})};Va(a)}}if(window.WebFont)try{window.Typekit.load()}catch(a){};}(this,document));





!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,i,s;for(var c in x)if(x.hasOwnProperty(c)){if(e=[],t=x[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),b.push((a?"":"no-")+s.join("-"))}}function o(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?S.className.baseVal=t:S.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)_(e,n)&&i(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),a=Modernizr[r[0]];if(2==r.length&&(a=a[r[1]]),"undefined"!=typeof a)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return!!~(""+e).indexOf(t)}function d(){var e=t.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function u(e,n,r,a){var o,i,c,l,u="modernizr",f=s("div"),p=d();if(parseInt(r,10))for(;r--;)c=s("div"),c.id=a?a[r]:u+(r+1),f.appendChild(c);return o=s("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),i=n(f,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=l,S.offsetHeight):f.parentNode.removeChild(f),!!i}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var a;for(var o in e)if(e[o]in t)return n===!1?e[o]:(a=t[e[o]],r(a,"function")?f(a,n||t):a);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(m(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+m(t[a])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,a,o){function i(){u&&(delete q.style,delete q.modElem)}if(o=r(o,"undefined")?!1:o,!r(a,"undefined")){var d=h(e,a);if(!r(d,"undefined"))return d}for(var u,f,p,m,g,v=["modernizr","tspan"];!q.style;)u=!0,q.modElem=s(v.shift()),q.style=q.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],g=q.style[m],l(m,"-")&&(m=c(m)),q.style[m]!==n){if(o||r(a,"undefined"))return i(),"pfx"==t?m:!0;try{q.style[m]=a}catch(y){}if(q.style[m]!=g)return i(),"pfx"==t?m:!0}return i(),!1}function v(e,t,n,a,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+D.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,a,o):(s=(e+" "+k.join(i+" ")+i).split(" "),p(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],x=[],T={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("webworkers","Worker"in e);var w=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];T._prefixes=w;var S=t.documentElement,C="svg"===S.nodeName.toLowerCase();C||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,l(t)}function o(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)a.createElement(s[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function l(e){e||(e=t);var r=o(e);return!b.shivCSS||d||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var d,u,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:a};e.html5=b,l(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var E="Moz O ms Webkit",k=T._config.usePrefixes?E.toLowerCase().split(" "):[];T._domPrefixes=k;var _;!function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),T._l={},T.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},T._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){T.addTest=i});var P=function(){function e(e,t){var a;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,a=e in t,!a&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),a="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),a):!1}var r=!("onblur"in t.documentElement);return e}();T.hasEvent=P,Modernizr.addTest("hashchange",function(){return P("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("audio",function(){var e=s("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof s("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=s("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=s("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",a=0,o=w.length-1;o>a;a++)e=0===a?"to ":"",r+=t+w[a]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var i=s("a"),c=i.style;return c.cssText=r,(""+c.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=w.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var z=s("input"),N="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),R={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)R[t[n]]=!!(t[n]in z);return R.list&&(R.list=!(!s("datalist")||!e.HTMLDataListElement)),R}(N);var A="search tel url email datetime date month week time datetime-local number range color".split(" "),$={};Modernizr.inputtypes=function(e){for(var r,a,o,i=e.length,s="1)",c=0;i>c;c++)z.setAttribute("type",r=e[c]),o="text"!==z.type&&"style"in z,o&&(z.value=s,z.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&z.style.WebkitAppearance!==n?(S.appendChild(z),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(z,null).WebkitAppearance&&0!==z.offsetHeight,S.removeChild(z)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?z.checkValidity&&z.checkValidity()===!1:z.value!=s)),$[e[c]]=!!o;return $}(A),Modernizr.addTest("hsla",function(){var e=s("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",l(e.backgroundColor,"rgba")||l(e.backgroundColor,"hsla")});var O="CSS"in e&&"supports"in e.CSS,j="supportsCSS"in e;Modernizr.addTest("supports",O||j);var L={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(L.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(L.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var M=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();T.mq=M;var B=T.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");B(r,function(e){n=9===e.offsetTop})}return n});var F=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,a=533>t&&e.match(/android/gi);return n||a||r}();F?Modernizr.addTest("fontface",!1):B('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),B('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)});var D=T._config.usePrefixes?E.split(" "):[];T._cssomPrefixes=D;var I=function(t){var r,a=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var i=0;a>i;i++){var s=w[i],c=s.toUpperCase()+"_"+r;if(c in o)return"@-"+s.toLowerCase()+"-"+t}return!1};T.atRule=I;var W={elem:s("modernizr")};Modernizr._q.push(function(){delete W.elem});var q={style:W.elem.style};Modernizr._q.unshift(function(){delete q.style});var V=T.testProp=function(e,t,r){return g([e],n,t,r)};Modernizr.addTest("textshadow",V("textShadow","1px 1px")),T.testAllProps=v;var H=T.prefixed=function(e,t,n){return 0===e.indexOf("@")?I(e):(-1!=e.indexOf("-")&&(e=c(e)),t?v(e,t,n):v(e,"pfx"))},U=H("indexedDB",e);Modernizr.addTest("indexeddb",!!U),U&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in U),T.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",B(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),a(),o(b),delete T.addTest,delete T.addAsyncTest;for(var G=0;G<Modernizr._q.length;G++)Modernizr._q[G]();e.Modernizr=Modernizr}(window,document);
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
window.matchMedia || (window.matchMedia = function() {
"use strict";
var styleMedia = (window.styleMedia || window.media);
if (!styleMedia) {
var style       = document.createElement('style'),
script      = document.getElementsByTagName('script')[0],
info        = null;
style.type  = 'text/css';
style.id    = 'matchmediajs-test';
script.parentNode.insertBefore(style, script);
info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;
styleMedia = {
matchMedium: function(media) {
var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
if (style.styleSheet) {
style.styleSheet.cssText = text;
} else {
style.textContent = text;
}
return info.width === '1px';
}
};
}
return function(media) {
return {
matches: styleMedia.matchMedium(media || 'all'),
media: media || 'all'
};
};
}());
window.Cookie = (function () {
var loggedInCookieName = 'is_member_logged_in';
var _getCookie = function (name) {
var matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
return (matches) ? decodeURIComponent(matches[1]) : undefined;
},
_setCookie = function (name, value, days) {
if (!_isAccepted()) {
return;
}
var date = new Date(),
expires = '';
if (typeof days !== 'undefined') {
date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
expires = '; expires=' + date.toGMTString();
}
_internalSetCookie(name, value, expires);
},
_internalSetCookie = function (name, value, expires) {
document.cookie = name + '=' + value + expires + '; path=/;'
+ (window.CookieDomain ? ('domain=' + window.CookieDomain) : '');
},
_isAccepted = function () {
return _getCookie('ca') === '1';
},
_isMemberLoggedIn = function () {
return _getCookie(loggedInCookieName) === '1';
},
_deleteCookie = function (name, path, domain) {
if (_getCookie(name) !== undefined) {
if (typeof domain === 'undefined') {
domain = window.CookieDomain;
}
document.cookie = name + "=" +
(path ? ";path=" + path : "") +
(domain ? ";domain=" + domain : '') +
";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}
},
_revokeCookie = function (callback) {
var callbackSheduled = false;
if (Cookie.getCookie('is_member_logged_in') && callback) {
$.post('/member/cookie_revoked').always(callback);
callbackSheduled = true;
}
var extractedHost = location.hostname.split('.');
$(document.cookie.split(';')).each(function (key, val) {
var cookieName = val.split('=')[0].trim();
if (cookieName === loggedInCookieName || cookieName.indexOf('eZSESSID') !== -1) {
return;
}
var copiedExtractedHost = extractedHost;
while (copiedExtractedHost.length >= 2) {
Cookie.deleteCookie(cookieName, '/', '.' + copiedExtractedHost.join('.'));
copiedExtractedHost = copiedExtractedHost.splice(1);
}
Cookie.deleteCookie(cookieName, '/');
Cookie.deleteCookie(cookieName, '/', location.hostname);
Cookie.deleteCookie(cookieName, '/', '');
});
if (callback && !callbackSheduled) {
callback();
}
},
_acceptCookies = function (callback) {
$.post('/member/cookie_accepted').always(callback);
var date = new Date();
date.setTime(date.getTime() + (360 * 24 * 60 * 60 * 1000));
_internalSetCookie('ca', '1', '; expires=' + date.toGMTString());
};
return {
getCookie: _getCookie,
setCookie: _setCookie,
deleteCookie: _deleteCookie,
acceptCookies: _acceptCookies,
isAccepted: _isAccepted,
isMemberLoggedIn: _isMemberLoggedIn,
revokeCookie: _revokeCookie
};
})();
$(document).ready(function () {
var nid = getUrlVars()['nid'];
if (nid != undefined && nid.length) {
Cookie.setCookie('nid', nid, 1);
}
if (!Cookie.isAccepted()) {
Cookie.revokeCookie();
}
});
function getUrlVars() {
var vars = [], hash;
var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
for (var i = 0; i < hashes.length; i++) {
hash = hashes[i].split('=');
if (typeof hash[1] === 'undefined') {
continue;
}
if (hash[1].indexOf('?') !== -1) {
hash[1] = hash[1].split('?')[0];
}
vars.push(hash[0]);
vars[hash[0]] = hash[1];
}
return vars;
}
;( function( window, document, undefined ){
var packages = {},
modules = {},
statistics = {},
cases = {},
ready = false,
loaded = false,
defaults = {
type: 'ui', // could be ui, library
compile: 'onReady', // could be onReady, onLoad, manually
global: false // if true, attach module interface to window[module_name]
},
PackageManager, StatisticManager, CaseManager,
moduleSelectorPattern = '[luana-module="{name}"], .luana-module-{name}',
_isUndefined = function( value ){
return typeof value === 'undefined';
},
_isBoolean = function( value ){
return ( typeof value === 'boolean' );
},
_isArray = function( value ){
return ( Object.prototype.toString.call( value ) === '[object Array]' );
},
_log = function( log, type ){
if( !_isUndefined( window.console ) && !_isUndefined( console.log ) && luana.developerMode ){
if( !_isUndefined( type ) ){
if( type == 'error' ){
console.log( '%c ' + log, 'color: #FF302C;' );
}else if( type == 'warning' ){
console.log( '%c ' + log, 'color: #FB9D17;' );
}else{
console.log( '%c ' + log, 'color: #35BD37;' );
}
}else{
console.log( log );
}
}
},
_getAttributes = function( name ){
var attr = {
name: '',
caseName: false
}, i, tempArray = [],
attrArray = name.split( '.' );
if( attrArray.length <= 1 ){
attr.name = name;
}else{
attr.name = attrArray[0];
for( i = 1; i < attrArray.length; i++ ){
tempArray.push( attrArray[i] );
}
attr.caseName = tempArray.join( '.' );
}
return attr;
},
_moduleSelector = function( name ){
return moduleSelectorPattern.replace( /{name}/gi, name );
};
if( _isUndefined( Function.prototype.bind ) ){
Function.prototype.bind = function( context ){
return ( function( func ){
return function(){
func.call( context );
};
} )( this );
};
}
function Controller( pack, module ){
var	_updateElements = function( scope ){
$.each( CaseManager.getPackData( pack ).localSelectors,
function( index, selector ){
scope.elements[ index ] =
$( scope.root ).find( selector );
}
);
$.each( CaseManager.getPackData( pack ).globalSelectors,
function( index, selector ){
scope.elements[ index ] = $( selector );
}
);
$.each( CaseManager.getCasePackData( pack ),
function( index, casePack ){
$.each( casePack.localSelectors,
function( _index, selector ){
scope.elements[ _index ] =
$( scope.root ).find( selector );
}
);
$.each( casePack.globalSelectors,
function( _index, selector ){
scope.elements[ _index ] = $( selector );
}
);
}
);
};
this.__updateModule = function(){
PackageManager.update( module.name );
};
this.__updateElements = function( scope ){
if( !_isUndefined( scope ) ){
_updateElements( scope );
}else{
$.each( module.scopes,
function(){
_updateElements( this );
}
);
}
};
this.__throughScopes = function( iterrator ){
$.each( module.scopes, iterrator );
};
this.__getScopes = function(){
return module.scopes;
};
this.__getRoots = function(){
return module.roots;
};
this.__getRootByScope = function( scope ){
var root = false;
$.each( this.__getRoots(),
function( index, item ){
if( $( item ).data( module.name ) == scope ){
root = item;
}
}
);
return root;
};
this.__getRootByElement = function( element ){
var root = false, scope, obj;
scope = $( element ).data( module.name );
if( !_isUndefined( scope ) ){
root = element;
}else{
obj = $( element ).parents( _moduleSelector( module.name ) );
if( obj ){
if( !_isUndefined( $( obj ).data( module.name ) ) ){
root = obj;
}
}
}
return root;
};
this.__getScopeByElement = function( element ){
var scope = false,
root = this.__getRootByElement( element );
if( root ){
scope = $( root ).data( module.name );
}
return scope;
};
this.__getScopesByElement = function( element ){
var scopes = [],
scope,
elements = $( element );
if( elements.length == 1 ){
scopes = [this.__getScopeByElement( element )];
}else if( elements.length > 1 ){
$.each( elements,
function( index, item ){
scope = this.__getScopeByElement( item );
if( scope ){
scopes.push( scope );
}
}.bind( this )
);
}
return scopes;
};
this.__setState = function( scope ){
module.state = scope;
};
this.__getState = function(){
return module.state;
};
this.__clearState = function(){
module.state = false;
};
this.__setTimeout = function( callback, timeout ){
this.__clearTimeout();
module.timeout = window.setTimeout( callback, timeout );
};
this.__clearTimeout = function(){
window.clearTimeout( module.timeout );
};
this.__setInterval = function( callback, interval ){
this.__clearInterval();
module.interval = window.setInterval( callback, interval );
};
this.__clearInterval = function(){
window.clearInterval( module.interval );
};
}
function View( module ){
this.__getScopes = function(){
return module.scopes;
};
this.__getRoots = function(){
return module.roots;
};
this.__setState = function( scope ){
module.state = scope;
};
this.__getState = function(){
return module.state;
};
this.__clearState = function(){
module.state = false;
};
}
function Event( module, scope, eventType, handler, element, secondElement, preventDefault ){
var _callback = function( event ){
var additionalParameters = Array.prototype.slice.call( arguments, 1, arguments.length );
if( preventDefault ){
event.preventDefault();
}
if( scope ){
module.controller[handler].call( module.controller, scope, this, event, additionalParameters );
}else{
module.controller[handler].call( module.controller, this, event, additionalParameters );
}
};
if( !_isUndefined( module.controller[handler] ) ){
if( luana.developerMode ){
$( element ).addClass( 'l-' + module.name + '-e-' + eventType +
'-handled' + ( ( secondElement ) ? '-live' : '' ) );
}
if( secondElement ){
$( element ).on( eventType, secondElement, _callback );
}else{
$( element ).on( eventType, _callback );
}
}else{
_log( module.name + ': Event ' + eventType + ' cannot be ' +
'attached as there is no handler ' + handler, 'warning' );
}
}
StatisticManager = (function(){
return {
show: function(){
if( luana.developerMode ){
$.each( statistics,
function( index, statisticCtrl ){
statisticCtrl.call( packages );
}
);
}
}
}
})();
CaseManager = (function(){
var _check = function( caseName ){
var casesArray = caseName.split( '.' ),
inverse = false, key,
i, isTrue = true;
for( i = 0; i < casesArray.length; i++ ){
inverse = ( casesArray[i].indexOf( '!' ) === 0 );
key = ( inverse ) ? casesArray[i].substr( 1 ) : casesArray[i];
if( inverse ){
if( !( typeof cases[key] !== 'undefined' && !cases[key] ) ){
isTrue = false;
}
}else{
if( !( typeof cases[key] !== 'undefined' && cases[key] ) ){
isTrue = false;
}
}
}
return isTrue;
};
return {
getPackData: function( pack ){
return pack.data;
},
getCasePackData: function( pack ){
var casePackData = [];
$.each( pack.casesOrder,
function( index, key ){
if( _check( key ) ){
casePackData.push( pack.casesData[key] );
}
}
);
return casePackData;
},
getOptions: function( pack ){
var options;
if( pack.data.factory ){
options = pack.data.factory.options;
}else{
options = $.extend( true, {}, defaults );
}
return options;
}
};
})();
PackageManager = (function(){
var _compilePackage = function( pack, type ){
if( !pack.compiled && ( type == CaseManager.getOptions( pack ).compile || type == 'manually' ) ){
modules[pack.name] = new Module( pack.name );
if( CaseManager.getOptions( pack ).type === 'library' ){
if( CaseManager.getPackData( pack ).factory ||
CaseManager.getCasePackData( pack ).length ){
_initializeLibrary( pack, modules[pack.name] );
pack.compiled = true;
}
}else if( CaseManager.getOptions( pack ).type === 'ui' ){
if( modules[pack.name].roots.length &&
( CaseManager.getPackData( pack ).factory ||
CaseManager.getCasePackData( pack ).length ) ){
_initializeModule( pack, modules[pack.name] );
pack.compiled = true;
}else{
_log( pack.name + ': compilation is skipped. There are no any roots.', 'error' );
pack.errors.push( 'Cannot be compiled. Module doesn`t have any routs. You can set force = true to compile module without routs...' );
}
}
}
},
_updatePackage = function( pack, module ){
module.roots = $( _moduleSelector( pack.name ) );
$.each( module.roots,
function(){
if( _isUndefined( $( this ).data( module.name ) ) ){
_updateModule( pack, module, this );
}
}
);
},
_initializeLibrary = function( pack, module ){
var scope = {};
$.each( CaseManager.getPackData( pack ).scope,
function( index, packScope ){
scope = $.extend( true, scope, packScope );
}
);
$.each( CaseManager.getCasePackData( pack ),
function( index, caseItem ){
$.each( caseItem.scope,
function( _index, packScope ){
scope = $.extend( true, scope, packScope );
}
);
}
);
_prepareView( pack, module );
_prepareController( pack, module, scope );
_prepareFace( pack, module );
},
_initializeModule = function( pack, module ){
var scope = {}, localScope;
$.each( CaseManager.getPackData( pack ).scope,
function( index, packScope ){
scope = $.extend( true, scope, packScope );
}
);
$.each( CaseManager.getCasePackData( pack ),
function( index, caseItem ){
$.each( caseItem.scope,
function( _index, packScope ){
scope = $.extend( true, scope, packScope );
}
);
}
);
_prepareView( pack, module );
_prepareController( pack, module );
_prepareFace( pack, module );
scope.elements = {};
pack.logs.push( 'Module has ' + module.roots.length + ( module.roots.length === 1 ? ' root' : ' roots' ) );
$.each( module.roots,
function( index, item ){
localScope = $.extend( true, {}, scope );
localScope.root = item;
module.controller.__updateElements( localScope );
module.scopes.push( localScope );
$( item ).data( module.name, localScope );
_attachEvents( pack, module, localScope );
_eachScope( pack, module, localScope );
}
);
_initialize( pack, module );
_attachGlobalEvents( pack, module );
},
_updateModule = function( pack, module, root ){
var scope = {}, localScope;
$.each( CaseManager.getPackData( pack ).scope,
function( index, packScope ){
scope = $.extend( true, scope, packScope );
}
);
$.each( CaseManager.getCasePackData( pack ),
function( index, caseItem ){
$.each( caseItem.scope,
function( _index, packScope ){
scope = $.extend( true, scope, packScope );
}
);
}
);
scope.elements = {};
localScope = $.extend( true, {}, scope );
localScope.root = root;
module.controller.__updateElements( localScope );
module.scopes.push( localScope );
$( root ).data( module.name, localScope );
_attachEvents( pack, module, localScope );
_eachScope( pack, module, localScope );
},
_prepareView = function( pack, module ){
function ProxyView(){}
ProxyView.prototype = new View( module );
var vw = new ProxyView();
$.each( CaseManager.getPackData( pack ).view,
function( index, item ){
$.extend( vw, item.call() );
}
);
$.each( CaseManager.getCasePackData( pack ),
function( index, caseItem ){
$.each( caseItem.view,
function( _index, packScope ){
$.extend( vw, packScope.call() );
}
);
}
);
module.view = vw;
},
_prepareController = function( pack, module, scope ){
function ProxyController(){}
ProxyController.prototype = new Controller( pack, module );
var ctrl = new ProxyController();
$.each( CaseManager.getPackData( pack ).controller,
function( index, item ){
if( !_isUndefined( scope ) ){
$.extend( ctrl, item( module.view, scope ) );
}else{
$.extend( ctrl, item( module.view ) );
}
}
);
$.each( CaseManager.getCasePackData( pack ),
function( index, caseItem ){
$.each( caseItem.controller,
function( _index, item ){
if( !_isUndefined( scope ) ){
$.extend( ctrl, item( module.view, scope ) );
}else{
$.extend( ctrl, item( module.view ) );
}
}
);
}
);
module.controller = ctrl;
},
_prepareFace = function( pack, module ){
var faces = [];
$.each( CaseManager.getPackData( pack ).faces,
function( index, item ){
faces = faces.concat( item );
}
);
$.each( CaseManager.getCasePackData( pack ),
function( index, caseItem ){
$.each( caseItem.faces,
function( _index, item ){
faces = faces.concat( item );
}
);
}
);
$.each( faces,
function( index, face ){
if( _isUndefined( module.face[face] ) ){
module.face[face] = function(){
return module.controller[face].apply( module.controller, arguments );
}
}
}
);
pack.logs.push( 'Module has ' + faces.length + ( faces.length === 1 ? ' face' : ' faces' ) );
if( CaseManager.getOptions( pack ).global ){
if( _isUndefined( window[pack.name] ) ){
window[pack.name] = module.face;
}
pack.logs.push( 'Module has a face on the global scope with name: ' + pack.name );
}
},
_checkEventsExisting = function( pack ){
var events = [], i,
casePacks = CaseManager.getCasePackData( pack );
if( casePacks.length ){
for( i = casePacks.length - 1; i >= 0; i-- ){
if( casePacks[i].events.length ){
events = casePacks[i].events;
break;
}
}
}
if( !events.length ){
events = CaseManager.getPackData( pack ).events;
}
return events;
},
_attachEvents = function( pack, module, scope ){
var preventDefault = false,
element = false,
secondElement = false,
eventType = false,
eventsCount = 0,
elementsCount = 0,
events;
events = _checkEventsExisting( pack );
$.each( events,
function( index, item ){
module.events = $.extend( true, module.events, item( scope ) );
}
);
$.each( module.events,
function( handler, item ){
preventDefault = false;
secondElement = false;
element = item[1];
eventType = item[0];
if( !_isUndefined( item[2] ) ){
if( _isBoolean( item[2] ) ){
preventDefault = item[2];
}else{
secondElement = item[2];
if( !_isUndefined( item[3] ) ){
preventDefault = item[3];
}
}
}
Event( module, scope, eventType, handler, element, secondElement, preventDefault );
elementsCount += $( item[1] ).length;
eventsCount++;
}
);
pack.logs.push( 'Module has ' + eventsCount + ( eventsCount === 1 ? ' event' : ' events' ) +
' attached to ' + elementsCount + ( elementsCount === 1 ? ' element' : ' elements' ) );
},
_checkGlobalEventsExisting = function( pack ){
var events = [], i,
casePacks = CaseManager.getCasePackData( pack );
if( casePacks.length ){
for( i = casePacks.length - 1; i >= 0; i-- ){
if( casePacks[i].globalEvents.length ){
events = casePacks[i].globalEvents;
break;
}
}
}
if( !events.length ){
events = CaseManager.getPackData( pack ).globalEvents;
}
return events;
},
_attachGlobalEvents = function( pack, module ){
var preventDefault = false,
element = false,
secondElement = false,
eventType = false,
elementsCount = 0,
events;
events = _checkGlobalEventsExisting( pack );
$.each( events,
function( index, item ){
module.globalEvents = $.extend( true, module.globalEvents, item() );
}
);
$.each( module.globalEvents,
function( handler, item ){
preventDefault = false;
secondElement = false;
element = item[1];
eventType = item[0];
if( !_isUndefined( item[2] ) ){
if( _isBoolean( item[2] ) ){
preventDefault = item[2];
}else{
secondElement = item[2];
if( !_isUndefined( item[3] ) ){
preventDefault = item[3];
}
}
}
Event( module, false, eventType, handler, element, secondElement, preventDefault );
elementsCount += $( item[1] ).length;
}
);
},
_eachScope = function( pack, module, scope ){
if( !_isUndefined( module.controller.eachScope ) ){
module.controller.eachScope.call( module.controller, scope );
}
},
_initialize = function( pack, module ){
if( !_isUndefined( module.controller.initialize ) ){
module.controller.initialize.call( module.controller );
}
};
return {
compile: function( type, packageName ){
if( _isUndefined( packageName ) ){
$.each( packages,
function( index, pack ){
_compilePackage( pack, type );
}
);
}else{
if( !_isUndefined( packages[packageName] ) ){
_compilePackage( packages[packageName], type );
}
}
},
update: function( packageName ){
if( !_isUndefined( packageName ) && !_isUndefined( packages[packageName] ) ){
if( !_isUndefined( modules[packageName] ) ){
_updatePackage( packages[packageName], modules[packageName] );
}
}
}
};
})();
function Module( name ){
this.name = name;
this.roots = $( _moduleSelector( name ) );
this.scopes = [];
this.view = {};
this.controller = {};
this.events = {};
this.globalEvents = {};
this.face = {};
this.state = false;
this.interval = false;
this.timeout = false;
}
function Package( name, factory ){
this.name = name;
this.compiled = false;
this.dataPattern = {
factory: false,
scope: [],
localSelectors: {},
globalSelectors: {},
events: [],
globalEvents: [],
controller: [],
view: [],
faces: []
};
this.data = $.extend( true, {}, this.dataPattern );
this.data.factory = factory;
this.casesData = {};
this.casesOrder = [];
this.errors = [];
this.logs = [];
this.getData = function( caseName ){
return ( !caseName ) ? this.data : this.casesData[caseName];
};
}
Package.prototype = {
addScope: function( caseName, scope ){
this.getData( caseName ).scope.push( scope );
},
addLocalSelectors: function( caseName, selectors ){
$.extend( this.getData( caseName ).localSelectors, selectors );
},
addGlobalSelectors: function( caseName, selectors ){
$.extend( this.getData( caseName ).globalSelectors, selectors );
},
addEvents: function( caseName, events ){
this.getData( caseName ).events.push( events );
},
addGlobalEvents: function( caseName, events ){
this.getData( caseName ).globalEvents.push( events );
},
addController: function( caseName, controller ){
this.getData( caseName ).controller.push( controller );
},
addView: function( caseName, view ){
this.getData( caseName ).view.push( view );
},
addFaces: function( caseName, face ){
this.getData( caseName ).faces.push( face );
},
prepareDataForCase: function( caseName, factory ){
if( typeof this.getData( caseName ) === 'undefined' ){
$.extend( true, this.casesData[caseName] = {}, this.dataPattern );
this.casesData[caseName].factory = factory;
}
},
setMainCase: function( factory ){
this.data.factory = factory;
},
hasCase: function( caseName ){
return typeof this.casesData[caseName] !== 'undefined';
},
getFactory: function( caseName ){
return ( !caseName ) ? this.data.factory : this.casesData[caseName].factory;
}
};
function Factory( name, caseName, options ){
this.name = name;
this.caseName = caseName;
this.options = $.extend( true, $.extend( true, {}, defaults ), options );
}
Factory.prototype = {
faces: function(){
var face = [];
$.each( arguments, function( index, item ){
if( _isArray( item ) ){
face = face.concat( item );
}else{
face.push( item );
}
} );
packages[this.name].addFaces( this.caseName, face );
return this;
},
describeScope: function( scope ){
packages[this.name].addScope( this.caseName, scope );
return this;
},
defineElements: function( localSelectors, globalSelectors ){
packages[this.name].addLocalSelectors( this.caseName, localSelectors );
if( !_isUndefined( globalSelectors ) ){
packages[this.name].addGlobalSelectors( this.caseName, globalSelectors );
}
return this;
},
attachEvents: function( events ){
packages[this.name].addEvents( this.caseName, events );
return this;
},
attachGlobalEvents: function( events ){
packages[this.name].addGlobalEvents( this.caseName, events );
return this;
},
controller: function( controller ){
packages[this.name].addController( this.caseName, controller );
return this;
},
view: function( view ){
packages[this.name].addView( this.caseName, view );
return this;
},
compile: function(){
if( !_isUndefined( packages[this.name] ) && packages[this.name].compiled ){
PackageManager.update( this.name );
}else{
_compilePackages( 'manually', this.name );
}
},
update: function(){
if( !_isUndefined( packages[this.name] ) && packages[this.name].compiled ){
PackageManager.update( this.name );
}
}
};
function Luana(){
this.developerMode = false;
this.factory = function( name, options ){
var attributes = _getAttributes( name ),
factory;
if( _isUndefined( packages[attributes.name] ) ){
packages[attributes.name] = new Package( attributes.name, false );
}
if( attributes.caseName === false ){
packages[attributes.name].setMainCase( new Factory( attributes.name, false,
_isUndefined( options ) ? {} : options ) );
factory = packages[attributes.name].getFactory();
}else if( !packages[attributes.name].hasCase( attributes.caseName ) ){
packages[attributes.name].prepareDataForCase( attributes.caseName, new Factory( attributes.name, attributes.caseName,
_isUndefined( options ) ? {} : options ) );
packages[attributes.name].casesOrder.push( attributes.caseName );
factory = packages[attributes.name].getFactory( attributes.caseName );
}else{
factory = packages[attributes.name].getFactory( attributes.caseName );
}
return factory;
};
this.module = function( name ){
if( !_isUndefined( modules[name] ) ){
return modules[name].face;
}else{
return false;
}
};
this.hasModule = function( name ){
return ( !_isUndefined( modules[name] ) && packages[name].compiled );
};
this.statistics = function( name, statisticCtrl ){
if( _isUndefined( statistics[name] ) ){
statistics[name] = statisticCtrl;
return true;
}
return false;
};
this.update = function(){
$.each( packages, function( index, item ){
this.factory( item['name'] ).compile();
}.bind( this ) );
};
this.addCase = function( name, hanlder ){
if( !_isUndefined( hanlder ) ){
cases[name] = hanlder.call();
}
};
this.getCases = function(){
return cases;
};
}
function _compilePackages( type, packName ){
if( !_isUndefined( packName ) ){
PackageManager.compile( type, packName );
}else{
PackageManager.compile( type );
}
}
function _ready(){
_compilePackages( 'onReady' );
ready = true;
}
function _load(){
_compilePackages( 'onLoad' );
loaded = true;
StatisticManager.show();
}
window.luana = new Luana();
$( document ).ready( _ready );
$( window ).load( _load );
} )( window, document );
luana.factory('full_page_loader', {global: true})
.faces(['show', 'hide', 'showAfteSubmitForm'])
.controller(function (view) {
return {
show: function (loaderContent) {
view.showLoader(loaderContent);
},
hide: function (loaderContent) {
view.hideLoader(loaderContent);
},
showAfteSubmitForm: function (form, event) {
if (typeof event.isDefaultPrevented === 'function' && event.isDefaultPrevented()) {
return;
}
this.show();
if (!$('body').hasClass('is-cached')) {
event.preventDefault();
window.setTimeout(function () {
$('body').addClass('is-cached');
$(form).submit();
}, 100);
}
},
showAfteClickLink: function (element, e) {
if (!e.ctrlKey) {
e.preventDefault();
this.show();
window.setTimeout(function () {
$('body').addClass('is-cached');
window.location.href = $(element).attr('href');
}, 100);
}
},
onPopState: function () {
if ($('body').hasClass('is-cached')) this.hide();
}
};
}).attachGlobalEvents(function () {
return {
showAfteSubmitForm: ['submit', document, '[global-loader-form]'],
showAfteClickLink: ['click', document, '[global-loader-link]', false],
onPopState: ['popstate', window]
};
}).view(function () {
return {
showLoader: function (loaderContent) {
if (typeof loaderContent == 'undefined') {
var root = this.__getRoots();
if (root.length > 1) {
$(root[root.length - 1]).show();
} else {
$(root).show();
}
} else {
$(loaderContent).show();
}
},
hideLoader: function (loaderContent) {
if (typeof loaderContent == 'undefined') {
var root = this.__getRoots();
if (root.length > 1) {
$(root[root.length - 1]).hide();
} else {
$(root).hide();
}
} else {
$(loaderContent).hide();
}
}
};
});
(function(){var d=null;function e(a){return function(b){this[a]=b}}function h(a){return function(){return this[a]}}var j;
function k(a,b,c){this.extend(k,google.maps.OverlayView);this.c=a;this.a=[];this.f=[];this.ca=[53,56,66,78,90];this.j=[];this.A=!1;c=c||{};this.g=c.gridSize||60;this.l=c.minimumClusterSize||2;this.J=c.maxZoom||d;this.j=c.styles||[];this.X=c.imagePath||this.Q;this.W=c.imageExtension||this.P;this.O=!0;if(c.zoomOnClick!=void 0)this.O=c.zoomOnClick;this.r=!1;if(c.averageCenter!=void 0)this.r=c.averageCenter;l(this);this.setMap(a);this.K=this.c.getZoom();var f=this;google.maps.event.addListener(this.c,
"zoom_changed",function(){var a=f.c.getZoom();if(f.K!=a)f.K=a,f.m()});google.maps.event.addListener(this.c,"idle",function(){f.i()});b&&b.length&&this.C(b,!1)}j=k.prototype;j.Q="https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m";j.P="png";j.extend=function(a,b){return function(a){for(var b in a.prototype)this.prototype[b]=a.prototype[b];return this}.apply(a,[b])};j.onAdd=function(){if(!this.A)this.A=!0,n(this)};j.draw=function(){};
function l(a){if(!a.j.length)for(var b=0,c;c=a.ca[b];b++)a.j.push({url:a.X+(b+1)+"."+a.W,height:c,width:c})}j.S=function(){for(var a=this.o(),b=new google.maps.LatLngBounds,c=0,f;f=a[c];c++)b.extend(f.getPosition());this.c.fitBounds(b)};j.z=h("j");j.o=h("a");j.V=function(){return this.a.length};j.ba=e("J");j.I=h("J");j.G=function(a,b){for(var c=0,f=a.length,g=f;g!==0;)g=parseInt(g/10,10),c++;c=Math.min(c,b);return{text:f,index:c}};j.$=e("G");j.H=h("G");
j.C=function(a,b){for(var c=0,f;f=a[c];c++)q(this,f);b||this.i()};function q(a,b){b.s=!1;b.draggable&&google.maps.event.addListener(b,"dragend",function(){b.s=!1;a.L()});a.a.push(b)}j.q=function(a,b){q(this,a);b||this.i()};function r(a,b){var c=-1;if(a.a.indexOf)c=a.a.indexOf(b);else for(var f=0,g;g=a.a[f];f++)if(g==b){c=f;break}if(c==-1)return!1;b.setMap(d);a.a.splice(c,1);return!0}j.Y=function(a,b){var c=r(this,a);return!b&&c?(this.m(),this.i(),!0):!1};
j.Z=function(a,b){for(var c=!1,f=0,g;g=a[f];f++)g=r(this,g),c=c||g;if(!b&&c)return this.m(),this.i(),!0};j.U=function(){return this.f.length};j.getMap=h("c");j.setMap=e("c");j.w=h("g");j.aa=e("g");
j.v=function(a){var b=this.getProjection(),c=new google.maps.LatLng(a.getNorthEast().lat(),a.getNorthEast().lng()),f=new google.maps.LatLng(a.getSouthWest().lat(),a.getSouthWest().lng()),c=b.fromLatLngToDivPixel(c);c.x+=this.g;c.y-=this.g;f=b.fromLatLngToDivPixel(f);f.x-=this.g;f.y+=this.g;c=b.fromDivPixelToLatLng(c);b=b.fromDivPixelToLatLng(f);a.extend(c);a.extend(b);return a};j.R=function(){this.m(!0);this.a=[]};
j.m=function(a){for(var b=0,c;c=this.f[b];b++)c.remove();for(b=0;c=this.a[b];b++)c.s=!1,a&&c.setMap(d);this.f=[]};j.L=function(){var a=this.f.slice();this.f.length=0;this.m();this.i();window.setTimeout(function(){for(var b=0,c;c=a[b];b++)c.remove()},0)};j.i=function(){n(this)};
function n(a){if(a.A)for(var b=a.v(new google.maps.LatLngBounds(a.c.getBounds().getSouthWest(),a.c.getBounds().getNorthEast())),c=0,f;f=a.a[c];c++)if(!f.s&&b.contains(f.getPosition())){for(var g=a,u=4E4,o=d,v=0,m=void 0;m=g.f[v];v++){var i=m.getCenter();if(i){var p=f.getPosition();if(!i||!p)i=0;else var w=(p.lat()-i.lat())*Math.PI/180,x=(p.lng()-i.lng())*Math.PI/180,i=Math.sin(w/2)*Math.sin(w/2)+Math.cos(i.lat()*Math.PI/180)*Math.cos(p.lat()*Math.PI/180)*Math.sin(x/2)*Math.sin(x/2),i=6371*2*Math.atan2(Math.sqrt(i),
Math.sqrt(1-i));i<u&&(u=i,o=m)}}o&&o.F.contains(f.getPosition())?o.q(f):(m=new s(g),m.q(f),g.f.push(m))}}function s(a){this.k=a;this.c=a.getMap();this.g=a.w();this.l=a.l;this.r=a.r;this.d=d;this.a=[];this.F=d;this.n=new t(this,a.z(),a.w())}j=s.prototype;
j.q=function(a){var b;a:if(this.a.indexOf)b=this.a.indexOf(a)!=-1;else{b=0;for(var c;c=this.a[b];b++)if(c==a){b=!0;break a}b=!1}if(b)return!1;if(this.d){if(this.r)c=this.a.length+1,b=(this.d.lat()*(c-1)+a.getPosition().lat())/c,c=(this.d.lng()*(c-1)+a.getPosition().lng())/c,this.d=new google.maps.LatLng(b,c),y(this)}else this.d=a.getPosition(),y(this);a.s=!0;this.a.push(a);b=this.a.length;b<this.l&&a.getMap()!=this.c&&a.setMap(this.c);if(b==this.l)for(c=0;c<b;c++)this.a[c].setMap(d);b>=this.l&&a.setMap(d);
a=this.c.getZoom();if((b=this.k.I())&&a>b)for(a=0;b=this.a[a];a++)b.setMap(this.c);else if(this.a.length<this.l)z(this.n);else{b=this.k.H()(this.a,this.k.z().length);this.n.setCenter(this.d);a=this.n;a.B=b;a.ga=b.text;a.ea=b.index;if(a.b)a.b.innerHTML=b.text;b=Math.max(0,a.B.index-1);b=Math.min(a.j.length-1,b);b=a.j[b];a.da=b.url;a.h=b.height;a.p=b.width;a.M=b.textColor;a.e=b.anchor;a.N=b.textSize;a.D=b.backgroundPosition;this.n.show()}return!0};
j.getBounds=function(){for(var a=new google.maps.LatLngBounds(this.d,this.d),b=this.o(),c=0,f;f=b[c];c++)a.extend(f.getPosition());return a};j.remove=function(){this.n.remove();this.a.length=0;delete this.a};j.T=function(){return this.a.length};j.o=h("a");j.getCenter=h("d");function y(a){a.F=a.k.v(new google.maps.LatLngBounds(a.d,a.d))}j.getMap=h("c");
function t(a,b,c){a.k.extend(t,google.maps.OverlayView);this.j=b;this.fa=c||0;this.u=a;this.d=d;this.c=a.getMap();this.B=this.b=d;this.t=!1;this.setMap(this.c)}j=t.prototype;
j.onAdd=function(){this.b=document.createElement("DIV");if(this.t)this.b.style.cssText=A(this,B(this,this.d)),this.b.innerHTML=this.B.text;this.getPanes().overlayMouseTarget.appendChild(this.b);var a=this;google.maps.event.addDomListener(this.b,"click",function(){var b=a.u.k;google.maps.event.trigger(b,"clusterclick",a.u);b.O&&a.c.fitBounds(a.u.getBounds())})};function B(a,b){var c=a.getProjection().fromLatLngToDivPixel(b);c.x-=parseInt(a.p/2,10);c.y-=parseInt(a.h/2,10);return c}
j.draw=function(){if(this.t){var a=B(this,this.d);this.b.style.top=a.y+"px";this.b.style.left=a.x+"px"}};function z(a){if(a.b)a.b.style.display="none";a.t=!1}j.show=function(){if(this.b)this.b.style.cssText=A(this,B(this,this.d)),this.b.style.display="";this.t=!0};j.remove=function(){this.setMap(d)};j.onRemove=function(){if(this.b&&this.b.parentNode)z(this),this.b.parentNode.removeChild(this.b),this.b=d};j.setCenter=e("d");
function A(a,b){var c=[];c.push("background-image:url("+a.da+");");c.push("background-position:"+(a.D?a.D:"0 0")+";");typeof a.e==="object"?(typeof a.e[0]==="number"&&a.e[0]>0&&a.e[0]<a.h?c.push("height:"+(a.h-a.e[0])+"px; padding-top:"+a.e[0]+"px;"):c.push("height:"+a.h+"px; line-height:"+a.h+"px;"),typeof a.e[1]==="number"&&a.e[1]>0&&a.e[1]<a.p?c.push("width:"+(a.p-a.e[1])+"px; padding-left:"+a.e[1]+"px;"):c.push("width:"+a.p+"px; text-align:center;")):c.push("height:"+a.h+"px; line-height:"+a.h+
"px; width:"+a.p+"px; text-align:center;");c.push("cursor:pointer; top:"+b.y+"px; left:"+b.x+"px; color:"+(a.M?a.M:"black")+"; position:absolute; font-size:"+(a.N?a.N:11)+"px; font-family:Arial,sans-serif; font-weight:bold");return c.join("")}window.MarkerClusterer=k;k.prototype.addMarker=k.prototype.q;k.prototype.addMarkers=k.prototype.C;k.prototype.clearMarkers=k.prototype.R;k.prototype.fitMapToMarkers=k.prototype.S;k.prototype.getCalculator=k.prototype.H;k.prototype.getGridSize=k.prototype.w;
k.prototype.getExtendedBounds=k.prototype.v;k.prototype.getMap=k.prototype.getMap;k.prototype.getMarkers=k.prototype.o;k.prototype.getMaxZoom=k.prototype.I;k.prototype.getStyles=k.prototype.z;k.prototype.getTotalClusters=k.prototype.U;k.prototype.getTotalMarkers=k.prototype.V;k.prototype.redraw=k.prototype.i;k.prototype.removeMarker=k.prototype.Y;k.prototype.removeMarkers=k.prototype.Z;k.prototype.resetViewport=k.prototype.m;k.prototype.repaint=k.prototype.L;k.prototype.setCalculator=k.prototype.$;
k.prototype.setGridSize=k.prototype.aa;k.prototype.setMaxZoom=k.prototype.ba;k.prototype.onAdd=k.prototype.onAdd;k.prototype.draw=k.prototype.draw;s.prototype.getCenter=s.prototype.getCenter;s.prototype.getSize=s.prototype.T;s.prototype.getMarkers=s.prototype.o;t.prototype.onAdd=t.prototype.onAdd;t.prototype.draw=t.prototype.draw;t.prototype.onRemove=t.prototype.onRemove;
})();
function InfoBubble(opt_options) {
this.extend(InfoBubble, google.maps.OverlayView);
this.tabs_ = [];
this.activeTab_ = null;
this.baseZIndex_ = 100;
this.isOpen_ = false;
var options = opt_options || {};
if (options['backgroundColor'] == undefined) {
options['backgroundColor'] = this.BACKGROUND_COLOR_;
}
if (options['borderColor'] == undefined) {
options['borderColor'] = this.BORDER_COLOR_;
}
if (options['borderRadius'] == undefined) {
options['borderRadius'] = this.BORDER_RADIUS_;
}
if (options['borderWidth'] == undefined) {
options['borderWidth'] = this.BORDER_WIDTH_;
}
if (options['padding'] == undefined) {
options['padding'] = this.PADDING_;
}
if (options['arrowPosition'] == undefined) {
options['arrowPosition'] = this.ARROW_POSITION_;
}
if (options['disableAutoPan'] == undefined) {
options['disableAutoPan'] = false;
}
if (options['disableAnimation'] == undefined) {
options['disableAnimation'] = false;
}
if (options['minWidth'] == undefined) {
options['minWidth'] = this.MIN_WIDTH_;
}
if (options['shadowStyle'] == undefined) {
options['shadowStyle'] = this.SHADOW_STYLE_;
}
if (options['arrowSize'] == undefined) {
options['arrowSize'] = this.ARROW_SIZE_;
}
if (options['arrowStyle'] == undefined) {
options['arrowStyle'] = this.ARROW_STYLE_;
}
if (options['closeSrc'] == undefined) {
options['closeSrc'] = this.CLOSE_SRC_;
}
this.buildDom_();
this.setValues(options);
}
window['InfoBubble'] = InfoBubble;
InfoBubble.prototype.ARROW_SIZE_ = 15;
InfoBubble.prototype.ARROW_STYLE_ = 0;
InfoBubble.prototype.SHADOW_STYLE_ = 1;
InfoBubble.prototype.MIN_WIDTH_ = 50;
InfoBubble.prototype.ARROW_POSITION_ = 50;
InfoBubble.prototype.PADDING_ = 10;
InfoBubble.prototype.BORDER_WIDTH_ = 1;
InfoBubble.prototype.BORDER_COLOR_ = '#ccc';
InfoBubble.prototype.BORDER_RADIUS_ = 10;
InfoBubble.prototype.BACKGROUND_COLOR_ = '#fff';
InfoBubble.prototype.CLOSE_SRC_ = 'https://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif';
InfoBubble.prototype.extend = function(obj1, obj2) {
return (function(object) {
for (var property in object.prototype) {
this.prototype[property] = object.prototype[property];
}
return this;
}).apply(obj1, [obj2]);
};
InfoBubble.prototype.buildDom_ = function() {
var bubble = this.bubble_ = document.createElement('DIV');
bubble.style['position'] = 'absolute';
bubble.style['zIndex'] = this.baseZIndex_;
var tabsContainer = this.tabsContainer_ = document.createElement('DIV');
tabsContainer.style['position'] = 'relative';
var close = this.close_ = document.createElement('IMG');
close.style['position'] = 'absolute';
close.style['border'] = 0;
close.style['zIndex'] = this.baseZIndex_ + 1;
close.style['cursor'] = 'pointer';
close.src = this.get('closeSrc');
var that = this;
google.maps.event.addDomListener(close, 'click', function() {
that.close();
google.maps.event.trigger(that, 'closeclick');
});
var contentContainer = this.contentContainer_ = document.createElement('DIV');
contentContainer.style['overflowX'] = 'hidden';
contentContainer.style['overflowY'] = 'hidden';
contentContainer.style['cursor'] = 'default';
contentContainer.style['clear'] = 'both';
contentContainer.style['position'] = 'relative';
contentContainer.style['box-shadow'] = '1px 2px 6px 0px rgba(0, 0, 0, 0.45)';
var content = this.content_ = document.createElement('DIV');
contentContainer.appendChild(content);
var arrow = this.arrow_ = document.createElement('DIV');
arrow.style['position'] = 'relative';
var arrowOuter = this.arrowOuter_ = document.createElement('DIV');
var arrowInner = this.arrowInner_ = document.createElement('DIV');
arrowInner.className += "arrow-gha";
var arrowSize = this.getArrowSize_();
arrowOuter.style['position'] = arrowInner.style['position'] = 'absolute';
arrowOuter.style['left'] = arrowInner.style['left'] = '50%';
arrowOuter.style['height'] = '0';
arrowOuter.style['width'] = '0';
arrowOuter.style['marginLeft'] = this.px(-arrowSize);
arrowOuter.style['borderWidth'] = this.px(arrowSize);
arrowOuter.style['borderBottomWidth'] = 0;
var bubbleShadow = this.bubbleShadow_ = document.createElement('DIV');
bubbleShadow.style['position'] = 'absolute';
bubble.style['display'] = bubbleShadow.style['display'] = 'none';
bubble.appendChild(this.tabsContainer_);
bubble.appendChild(close);
bubble.appendChild(contentContainer);
arrow.appendChild(arrowOuter);
arrow.appendChild(arrowInner);
bubble.appendChild(arrow);
var stylesheet = document.createElement('style');
stylesheet.setAttribute('type', 'text/css');
this.animationName_ = '_ibani_' + Math.round(Math.random() * 10000);
var css = '.' + this.animationName_ + '{-webkit-animation-name:' +
this.animationName_ + ';-webkit-animation-duration:0.5s;' +
'-webkit-animation-iteration-count:1;}' +
'@-webkit-keyframes ' + this.animationName_ + ' {from {' +
'-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% ' +
'{-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}';
stylesheet.textContent = css;
document.getElementsByTagName('head')[0].appendChild(stylesheet);
};
InfoBubble.prototype.setBackgroundClassName = function(className) {
this.set('backgroundClassName', className);
};
InfoBubble.prototype['setBackgroundClassName'] = InfoBubble.prototype.setBackgroundClassName;
InfoBubble.prototype.backgroundClassName_changed = function() {
this.content_.className = this.get('backgroundClassName');
};
InfoBubble.prototype['backgroundClassName_changed'] = InfoBubble.prototype.backgroundClassName_changed;
InfoBubble.prototype.setTabClassName = function(className) {
this.set('tabClassName', className);
};
InfoBubble.prototype['setTabClassName'] = InfoBubble.prototype.setTabClassName;
InfoBubble.prototype.tabClassName_changed = function() {
this.updateTabStyles_();
};
InfoBubble.prototype['tabClassName_changed'] = InfoBubble.prototype.tabClassName_changed;
InfoBubble.prototype.getArrowStyle_ = function() {
return parseInt(this.get('arrowStyle'), 10) || 0;
};
InfoBubble.prototype.setArrowStyle = function(style) {
this.set('arrowStyle', style);
};
InfoBubble.prototype['setArrowStyle'] = InfoBubble.prototype.setArrowStyle;
InfoBubble.prototype.arrowStyle_changed = function() {
this.arrowSize_changed();
};
InfoBubble.prototype['arrowStyle_changed'] = InfoBubble.prototype.arrowStyle_changed;
InfoBubble.prototype.getArrowSize_ = function() {
return parseInt(this.get('arrowSize'), 10) || 0;
};
InfoBubble.prototype.setArrowSize = function(size) {
this.set('arrowSize', size);
};
InfoBubble.prototype['setArrowSize'] = InfoBubble.prototype.setArrowSize;
InfoBubble.prototype.arrowSize_changed = function() {
this.borderWidth_changed();
};
InfoBubble.prototype['arrowSize_changed'] = InfoBubble.prototype.arrowSize_changed;
InfoBubble.prototype.setArrowPosition = function(pos) {
this.set('arrowPosition', pos);
};
InfoBubble.prototype['setArrowPosition'] = InfoBubble.prototype.setArrowPosition;
InfoBubble.prototype.getArrowPosition_ = function() {
return parseInt(this.get('arrowPosition'), 10) || 0;
};
InfoBubble.prototype.arrowPosition_changed = function() {
var pos = this.getArrowPosition_();
this.arrowOuter_.style['left'] = this.arrowInner_.style['left'] = pos + '%';
this.redraw_();
};
InfoBubble.prototype['arrowPosition_changed'] = InfoBubble.prototype.arrowPosition_changed;
InfoBubble.prototype.setZIndex = function(zIndex) {
this.set('zIndex', zIndex);
};
InfoBubble.prototype['setZIndex'] = InfoBubble.prototype.setZIndex;
InfoBubble.prototype.getZIndex = function() {
return parseInt(this.get('zIndex'), 10) || this.baseZIndex_;
};
InfoBubble.prototype.zIndex_changed = function() {
var zIndex = this.getZIndex();
this.bubble_.style['zIndex'] = this.baseZIndex_ = zIndex;
this.close_.style['zIndex'] = zIndex + 1;
};
InfoBubble.prototype['zIndex_changed'] = InfoBubble.prototype.zIndex_changed;
InfoBubble.prototype.setShadowStyle = function(shadowStyle) {
this.set('shadowStyle', shadowStyle);
};
InfoBubble.prototype['setShadowStyle'] = InfoBubble.prototype.setShadowStyle;
InfoBubble.prototype.getShadowStyle_ = function() {
return parseInt(this.get('shadowStyle'), 10) || 0;
};
InfoBubble.prototype.shadowStyle_changed = function() {
var shadowStyle = this.getShadowStyle_();
var display = '';
var shadow = '';
var backgroundColor = '';
switch (shadowStyle) {
case 0:
display = 'none';
break;
case 1:
shadow = '40px 15px 10px rgba(33,33,33,0.3)';
backgroundColor = 'transparent';
break;
case 2:
shadow = '0 0 2px rgba(33,33,33,0.3)';
backgroundColor = 'rgba(33,33,33,0.35)';
break;
}
this.bubbleShadow_.style['boxShadow'] =
this.bubbleShadow_.style['webkitBoxShadow'] =
this.bubbleShadow_.style['MozBoxShadow'] = shadow;
this.bubbleShadow_.style['backgroundColor'] = backgroundColor;
if (this.isOpen_) {
this.bubbleShadow_.style['display'] = display;
this.draw();
}
};
InfoBubble.prototype['shadowStyle_changed'] = InfoBubble.prototype.shadowStyle_changed;
InfoBubble.prototype.showCloseButton = function() {
this.set('hideCloseButton', false);
};
InfoBubble.prototype['showCloseButton'] = InfoBubble.prototype.showCloseButton;
InfoBubble.prototype.hideCloseButton = function() {
this.set('hideCloseButton', true);
};
InfoBubble.prototype['hideCloseButton'] = InfoBubble.prototype.hideCloseButton;
InfoBubble.prototype.hideCloseButton_changed = function() {
this.close_.style['display'] = this.get('hideCloseButton') ? 'none' : '';
};
InfoBubble.prototype['hideCloseButton_changed'] = InfoBubble.prototype.hideCloseButton_changed;
InfoBubble.prototype.setBackgroundColor = function(color) {
if (color) {
this.set('backgroundColor', color);
}
};
InfoBubble.prototype['setBackgroundColor'] = InfoBubble.prototype.setBackgroundColor;
InfoBubble.prototype.backgroundColor_changed = function() {
var backgroundColor = this.get('backgroundColor');
this.contentContainer_.style['backgroundColor'] = backgroundColor;
this.arrowInner_.style['borderColor'] = backgroundColor +
' transparent transparent';
this.updateTabStyles_();
};
InfoBubble.prototype['backgroundColor_changed'] = InfoBubble.prototype.backgroundColor_changed;
InfoBubble.prototype.setBorderColor = function(color) {
if (color) {
this.set('borderColor', color);
}
};
InfoBubble.prototype['setBorderColor'] = InfoBubble.prototype.setBorderColor;
InfoBubble.prototype.borderColor_changed = function() {
var borderColor = this.get('borderColor');
var contentContainer = this.contentContainer_;
var arrowOuter = this.arrowOuter_;
contentContainer.style['borderColor'] = borderColor;
arrowOuter.style['borderColor'] = borderColor +
' transparent transparent';
contentContainer.style['borderStyle'] =
arrowOuter.style['borderStyle'] =
this.arrowInner_.style['borderStyle'] = 'none'; //custom style ash gha
this.updateTabStyles_();
};
InfoBubble.prototype['borderColor_changed'] = InfoBubble.prototype.borderColor_changed;
InfoBubble.prototype.setBorderRadius = function(radius) {
this.set('borderRadius', radius);
};
InfoBubble.prototype['setBorderRadius'] = InfoBubble.prototype.setBorderRadius;
InfoBubble.prototype.getBorderRadius_ = function() {
return parseInt(this.get('borderRadius'), 10) || 0;
};
InfoBubble.prototype.borderRadius_changed = function() {
var borderRadius = this.getBorderRadius_();
var borderWidth = this.getBorderWidth_();
this.contentContainer_.style['borderRadius'] =
this.contentContainer_.style['MozBorderRadius'] =
this.contentContainer_.style['webkitBorderRadius'] =
this.bubbleShadow_.style['borderRadius'] =
this.bubbleShadow_.style['MozBorderRadius'] =
this.bubbleShadow_.style['webkitBorderRadius'] = this.px(borderRadius);
this.tabsContainer_.style['paddingLeft'] =
this.tabsContainer_.style['paddingRight'] =
this.px(borderRadius + borderWidth);
this.redraw_();
};
InfoBubble.prototype['borderRadius_changed'] = InfoBubble.prototype.borderRadius_changed;
InfoBubble.prototype.getBorderWidth_ = function() {
return parseInt(this.get('borderWidth'), 10) || 0;
};
InfoBubble.prototype.setBorderWidth = function(width) {
this.set('borderWidth', width);
};
InfoBubble.prototype['setBorderWidth'] = InfoBubble.prototype.setBorderWidth;
InfoBubble.prototype.borderWidth_changed = function() {
var borderWidth = this.getBorderWidth_();
this.contentContainer_.style['borderWidth'] = this.px(borderWidth);
this.tabsContainer_.style['top'] = this.px(borderWidth);
this.updateArrowStyle_();
this.updateTabStyles_();
this.borderRadius_changed();
this.redraw_();
};
InfoBubble.prototype['borderWidth_changed'] = InfoBubble.prototype.borderWidth_changed;
InfoBubble.prototype.updateArrowStyle_ = function() {
var borderWidth = this.getBorderWidth_();
var arrowSize = this.getArrowSize_();
var arrowStyle = this.getArrowStyle_();
var arrowOuterSizePx = this.px(arrowSize);
var arrowInnerSizePx = this.px(Math.max(0, arrowSize - borderWidth));
var outer = this.arrowOuter_;
var inner = this.arrowInner_;
this.arrow_.style['marginTop'] = this.px(-borderWidth);
outer.style['borderTopWidth'] = arrowOuterSizePx;
inner.style['borderTopWidth'] = arrowInnerSizePx;
if (arrowStyle == 0 || arrowStyle == 1) {
outer.style['borderLeftWidth'] = arrowOuterSizePx;
inner.style['borderLeftWidth'] = arrowInnerSizePx;
} else {
outer.style['borderLeftWidth'] = inner.style['borderLeftWidth'] = 0;
}
if (arrowStyle == 0 || arrowStyle == 2) {
outer.style['borderRightWidth'] = arrowOuterSizePx;
inner.style['borderRightWidth'] = arrowInnerSizePx;
} else {
outer.style['borderRightWidth'] = inner.style['borderRightWidth'] = 0;
}
if (arrowStyle < 2) {
outer.style['marginLeft'] = this.px(-(arrowSize));
inner.style['marginLeft'] = this.px(-(arrowSize - borderWidth));
} else {
outer.style['marginLeft'] = inner.style['marginLeft'] = 0;
}
if (borderWidth == 0) {
outer.style['display'] = 'none';
} else {
outer.style['display'] = '';
}
};
InfoBubble.prototype.setPadding = function(padding) {
this.set('padding', padding);
};
InfoBubble.prototype['setPadding'] = InfoBubble.prototype.setPadding;
InfoBubble.prototype.setCloseSrc = function(src) {
if (src && this.close_) {
this.close_.src = src;
}
};
InfoBubble.prototype['setCloseSrc'] = InfoBubble.prototype.setCloseSrc;
InfoBubble.prototype.getPadding_ = function() {
return parseInt(this.get('padding'), 10) || 0;
};
InfoBubble.prototype.padding_changed = function() {
var padding = this.getPadding_();
this.contentContainer_.style['padding'] = this.px(padding);
this.updateTabStyles_();
this.redraw_();
};
InfoBubble.prototype['padding_changed'] = InfoBubble.prototype.padding_changed;
InfoBubble.prototype.px = function(num) {
if (num) {
return num + 'px';
}
return num;
};
InfoBubble.prototype.addEvents_ = function() {
var events = ['mousedown', 'mousemove', 'mouseover', 'mouseout', 'mouseup',
'mousewheel', 'DOMMouseScroll', 'touchstart', 'touchend', 'touchmove',
'dblclick', 'contextmenu', 'click'];
var bubble = this.bubble_;
this.listeners_ = [];
for (var i = 0, event; event = events[i]; i++) {
this.listeners_.push(
google.maps.event.addDomListener(bubble, event, function(e) {
e.cancelBubble = true;
if (e.stopPropagation) {
e.stopPropagation();
}
})
);
}
};
InfoBubble.prototype.onAdd = function() {
if (!this.bubble_) {
this.buildDom_();
}
this.addEvents_();
var panes = this.getPanes();
if (panes) {
panes.floatPane.appendChild(this.bubble_);
panes.floatShadow.appendChild(this.bubbleShadow_);
}
google.maps.event.trigger(this, 'domready');
};
InfoBubble.prototype['onAdd'] = InfoBubble.prototype.onAdd;
InfoBubble.prototype.setBubbleOffset = function(xOffset, yOffset) {
this.bubbleOffsetX = parseInt(xOffset);
this.bubbleOffsetY = parseInt(yOffset);
};
InfoBubble.prototype.getBubbleOffset = function() {
return {
x: this.bubbleOffsetX || 0,
y: this.bubbleOffsetY || 0
}
};
InfoBubble.prototype.getElementSize = function(element) {
return this.getElementSize_(element);
};
InfoBubble.prototype.draw = function() {
var projection = this.getProjection();
if (!projection) {
return;
}
var latLng = (this.get('position'));
if (!latLng) {
this.close();
return;
}
var tabHeight = 0;
if (this.activeTab_) {
tabHeight = this.activeTab_.offsetHeight;
}
var anchorHeight = this.getAnchorHeight_();
var arrowSize = this.getArrowSize_();
var arrowPosition = this.getArrowPosition_();
arrowPosition = arrowPosition / 100;
var pos = projection.fromLatLngToDivPixel(latLng);
var width = this.contentContainer_.offsetWidth;
var height = this.bubble_.offsetHeight;
if (!width) {
return;
}
var top = pos.y - (height + arrowSize) + this.getBubbleOffset().y;
if (anchorHeight) {
top -= anchorHeight;
}
var left = pos.x - (width * arrowPosition) + this.getBubbleOffset().x;
this.bubble_.style['top'] = this.px(top);
this.bubble_.style['left'] = this.px(left);
var shadowStyle = parseInt(this.get('shadowStyle'), 10);
switch (shadowStyle) {
case 1:
this.bubbleShadow_.style['top'] = this.px(top + tabHeight - 1);
this.bubbleShadow_.style['left'] = this.px(left);
this.bubbleShadow_.style['width'] = this.px(width);
this.bubbleShadow_.style['height'] =
this.px(this.contentContainer_.offsetHeight - arrowSize);
break;
case 2:
width = width * 0.8;
if (anchorHeight) {
this.bubbleShadow_.style['top'] = this.px(pos.y);
} else {
this.bubbleShadow_.style['top'] = this.px(pos.y + arrowSize);
}
this.bubbleShadow_.style['left'] = this.px(pos.x - width * arrowPosition);
this.bubbleShadow_.style['width'] = this.px(width);
this.bubbleShadow_.style['height'] = this.px(2);
break;
}
};
InfoBubble.prototype['draw'] = InfoBubble.prototype.draw;
InfoBubble.prototype.onRemove = function() {
if (this.bubble_ && this.bubble_.parentNode) {
this.bubble_.parentNode.removeChild(this.bubble_);
}
if (this.bubbleShadow_ && this.bubbleShadow_.parentNode) {
this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);
}
for (var i = 0, listener; listener = this.listeners_[i]; i++) {
google.maps.event.removeListener(listener);
}
};
InfoBubble.prototype['onRemove'] = InfoBubble.prototype.onRemove;
InfoBubble.prototype.isOpen = function() {
return this.isOpen_;
};
InfoBubble.prototype['isOpen'] = InfoBubble.prototype.isOpen;
InfoBubble.prototype.close = function() {
if (this.bubble_) {
this.bubble_.style['display'] = 'none';
this.bubble_.className =
this.bubble_.className.replace(this.animationName_, '');
}
if (this.bubbleShadow_) {
this.bubbleShadow_.style['display'] = 'none';
this.bubbleShadow_.className =
this.bubbleShadow_.className.replace(this.animationName_, '');
}
this.isOpen_ = false;
};
InfoBubble.prototype['close'] = InfoBubble.prototype.close;
InfoBubble.prototype.open = function(opt_map, opt_anchor) {
var that = this;
window.setTimeout(function() {
that.open_(opt_map, opt_anchor);
}, 0);
};
InfoBubble.prototype.open_ = function(opt_map, opt_anchor) {
this.updateContent_();
if (opt_map) {
this.setMap(opt_map);
}
if (opt_anchor) {
this.set('anchor', opt_anchor);
this.bindTo('anchorPoint', opt_anchor);
this.bindTo('position', opt_anchor);
}
this.bubble_.style['display'] = this.bubbleShadow_.style['display'] = '';
var animation = !this.get('disableAnimation');
if (animation) {
this.bubble_.className += ' ' + this.animationName_;
this.bubbleShadow_.className += ' ' + this.animationName_;
}
this.redraw_();
this.isOpen_ = true;
var pan = !this.get('disableAutoPan');
if (pan) {
var that = this;
window.setTimeout(function() {
that.panToView();
}, 200);
}
};
InfoBubble.prototype['open'] = InfoBubble.prototype.open;
InfoBubble.prototype.setPosition = function(position) {
if (position) {
this.set('position', position);
}
};
InfoBubble.prototype['setPosition'] = InfoBubble.prototype.setPosition;
InfoBubble.prototype.getPosition = function() {
return (this.get('position'));
};
InfoBubble.prototype['getPosition'] = InfoBubble.prototype.getPosition;
InfoBubble.prototype.position_changed = function() {
this.draw();
};
InfoBubble.prototype['position_changed'] = InfoBubble.prototype.position_changed;
InfoBubble.prototype.panToView = function() {
var projection = this.getProjection();
if (!projection) {
return;
}
if (!this.bubble_) {
return;
}
var anchorHeight = this.getAnchorHeight_();
var height = this.bubble_.offsetHeight + anchorHeight;
var map = this.get('map');
var mapDiv = map.getDiv();
var mapHeight = mapDiv.offsetHeight;
var latLng = this.getPosition();
var centerPos = projection.fromLatLngToContainerPixel(map.getCenter());
var pos = projection.fromLatLngToContainerPixel(latLng);
var spaceTop = centerPos.y - height;
var spaceBottom = mapHeight - centerPos.y;
var needsTop = spaceTop < 0;
var deltaY = 0;
if (needsTop) {
spaceTop *= -1;
deltaY = (spaceTop + spaceBottom) / 2;
}
pos.y -= deltaY;
latLng = projection.fromContainerPixelToLatLng(pos);
if (map.getCenter() != latLng) {
map.panTo(latLng);
}
};
InfoBubble.prototype['panToView'] = InfoBubble.prototype.panToView;
InfoBubble.prototype.htmlToDocumentFragment_ = function(htmlString) {
htmlString = htmlString.replace(/^\s*([\S\s]*)\b\s*$/, '$1');
var tempDiv = document.createElement('DIV');
tempDiv.innerHTML = htmlString;
if (tempDiv.childNodes.length == 1) {
return (tempDiv.removeChild(tempDiv.firstChild));
} else {
var fragment = document.createDocumentFragment();
while (tempDiv.firstChild) {
fragment.appendChild(tempDiv.firstChild);
}
return fragment;
}
};
InfoBubble.prototype.removeChildren_ = function(node) {
if (!node) {
return;
}
var child;
while (child = node.firstChild) {
node.removeChild(child);
}
};
InfoBubble.prototype.setContent = function(content) {
this.set('content', content);
};
InfoBubble.prototype['setContent'] = InfoBubble.prototype.setContent;
InfoBubble.prototype.getContent = function() {
return (this.get('content'));
};
InfoBubble.prototype['getContent'] = InfoBubble.prototype.getContent;
InfoBubble.prototype.updateContent_ = function() {
if (!this.content_) {
return;
}
this.removeChildren_(this.content_);
var content = this.getContent();
if (content) {
if (typeof content == 'string') {
content = this.htmlToDocumentFragment_(content);
}
this.content_.appendChild(content);
var that = this;
var images = this.content_.getElementsByTagName('IMG');
for (var i = 0, image; image = images[i]; i++) {
google.maps.event.addDomListener(image, 'load', function() {
that.imageLoaded_();
});
}
}
this.redraw_();
};
InfoBubble.prototype.imageLoaded_ = function() {
var pan = !this.get('disableAutoPan');
this.redraw_();
if (pan && (this.tabs_.length == 0 || this.activeTab_.index == 0)) {
this.panToView();
}
};
InfoBubble.prototype.updateTabStyles_ = function() {
if (this.tabs_ && this.tabs_.length) {
for (var i = 0, tab; tab = this.tabs_[i]; i++) {
this.setTabStyle_(tab.tab);
}
this.activeTab_.style['zIndex'] = this.baseZIndex_;
var borderWidth = this.getBorderWidth_();
var padding = this.getPadding_() / 2;
this.activeTab_.style['borderBottomWidth'] = 0;
this.activeTab_.style['paddingBottom'] = this.px(padding + borderWidth);
}
};
InfoBubble.prototype.setTabStyle_ = function(tab) {
var backgroundColor = this.get('backgroundColor');
var borderColor = this.get('borderColor');
var borderRadius = this.getBorderRadius_();
var borderWidth = this.getBorderWidth_();
var padding = this.getPadding_();
var marginRight = this.px(-(Math.max(padding, borderRadius)));
var borderRadiusPx = this.px(borderRadius);
var index = this.baseZIndex_;
if (tab.index) {
index -= tab.index;
}
var styles = {
'cssFloat': 'left',
'position': 'relative',
'cursor': 'pointer',
'backgroundColor': backgroundColor,
'border': this.px(borderWidth) + ' solid ' + borderColor,
'padding': this.px(padding / 2) + ' ' + this.px(padding),
'marginRight': marginRight,
'whiteSpace': 'nowrap',
'borderRadiusTopLeft': borderRadiusPx,
'MozBorderRadiusTopleft': borderRadiusPx,
'webkitBorderTopLeftRadius': borderRadiusPx,
'borderRadiusTopRight': borderRadiusPx,
'MozBorderRadiusTopright': borderRadiusPx,
'webkitBorderTopRightRadius': borderRadiusPx,
'zIndex': index,
'display': 'inline'
};
for (var style in styles) {
tab.style[style] = styles[style];
}
var className = this.get('tabClassName');
if (className != undefined) {
tab.className += ' ' + className;
}
};
InfoBubble.prototype.addTabActions_ = function(tab) {
var that = this;
tab.listener_ = google.maps.event.addDomListener(tab, 'click', function() {
that.setTabActive_(this);
});
};
InfoBubble.prototype.setTabActive = function(index) {
var tab = this.tabs_[index - 1];
if (tab) {
this.setTabActive_(tab.tab);
}
};
InfoBubble.prototype['setTabActive'] = InfoBubble.prototype.setTabActive;
InfoBubble.prototype.setTabActive_ = function(tab) {
if (!tab) {
this.setContent('');
this.updateContent_();
return;
}
var padding = this.getPadding_() / 2;
var borderWidth = this.getBorderWidth_();
if (this.activeTab_) {
var activeTab = this.activeTab_;
activeTab.style['zIndex'] = this.baseZIndex_ - activeTab.index;
activeTab.style['paddingBottom'] = this.px(padding);
activeTab.style['borderBottomWidth'] = this.px(borderWidth);
}
tab.style['zIndex'] = this.baseZIndex_;
tab.style['borderBottomWidth'] = 0;
tab.style['marginBottomWidth'] = '-10px';
tab.style['paddingBottom'] = this.px(padding + borderWidth);
this.setContent(this.tabs_[tab.index].content);
this.updateContent_();
this.activeTab_ = tab;
this.redraw_();
};
InfoBubble.prototype.setMaxWidth = function(width) {
this.set('maxWidth', width);
};
InfoBubble.prototype['setMaxWidth'] = InfoBubble.prototype.setMaxWidth;
InfoBubble.prototype.maxWidth_changed = function() {
this.redraw_();
};
InfoBubble.prototype['maxWidth_changed'] = InfoBubble.prototype.maxWidth_changed;
InfoBubble.prototype.setMaxHeight = function(height) {
this.set('maxHeight', height);
};
InfoBubble.prototype['setMaxHeight'] = InfoBubble.prototype.setMaxHeight;
InfoBubble.prototype.maxHeight_changed = function() {
this.redraw_();
};
InfoBubble.prototype['maxHeight_changed'] = InfoBubble.prototype.maxHeight_changed;
InfoBubble.prototype.setMinWidth = function(width) {
this.set('minWidth', width);
};
InfoBubble.prototype['setMinWidth'] = InfoBubble.prototype.setMinWidth;
InfoBubble.prototype.minWidth_changed = function() {
this.redraw_();
};
InfoBubble.prototype['minWidth_changed'] = InfoBubble.prototype.minWidth_changed;
InfoBubble.prototype.setMinHeight = function(height) {
this.set('minHeight', height);
};
InfoBubble.prototype['setMinHeight'] = InfoBubble.prototype.setMinHeight;
InfoBubble.prototype.minHeight_changed = function() {
this.redraw_();
};
InfoBubble.prototype['minHeight_changed'] = InfoBubble.prototype.minHeight_changed;
InfoBubble.prototype.addTab = function(label, content) {
var tab = document.createElement('DIV');
tab.innerHTML = label;
this.setTabStyle_(tab);
this.addTabActions_(tab);
this.tabsContainer_.appendChild(tab);
this.tabs_.push({
label: label,
content: content,
tab: tab
});
tab.index = this.tabs_.length - 1;
tab.style['zIndex'] = this.baseZIndex_ - tab.index;
if (!this.activeTab_) {
this.setTabActive_(tab);
}
tab.className = tab.className + ' ' + this.animationName_;
this.redraw_();
};
InfoBubble.prototype['addTab'] = InfoBubble.prototype.addTab;
InfoBubble.prototype.updateTab = function(index, opt_label, opt_content) {
if (!this.tabs_.length || index < 0 || index >= this.tabs_.length) {
return;
}
var tab = this.tabs_[index];
if (opt_label != undefined) {
tab.tab.innerHTML = tab.label = opt_label;
}
if (opt_content != undefined) {
tab.content = opt_content;
}
if (this.activeTab_ == tab.tab) {
this.setContent(tab.content);
this.updateContent_();
}
this.redraw_();
};
InfoBubble.prototype['updateTab'] = InfoBubble.prototype.updateTab;
InfoBubble.prototype.removeTab = function(index) {
if (!this.tabs_.length || index < 0 || index >= this.tabs_.length) {
return;
}
var tab = this.tabs_[index];
tab.tab.parentNode.removeChild(tab.tab);
google.maps.event.removeListener(tab.tab.listener_);
this.tabs_.splice(index, 1);
delete tab;
for (var i = 0, t; t = this.tabs_[i]; i++) {
t.tab.index = i;
}
if (tab.tab == this.activeTab_) {
if (this.tabs_[index]) {
this.activeTab_ = this.tabs_[index].tab;
} else if (this.tabs_[index - 1]) {
this.activeTab_ = this.tabs_[index - 1].tab;
} else {
this.activeTab_ = undefined;
}
this.setTabActive_(this.activeTab_);
}
this.redraw_();
};
InfoBubble.prototype['removeTab'] = InfoBubble.prototype.removeTab;
InfoBubble.prototype.getElementSize_ = function(element, opt_maxWidth, opt_maxHeight, elementContainer) {
var sizer = document.createElement('DIV');
sizer.style['display'] = 'inline';
sizer.style['position'] = 'absolute';
sizer.style['visibility'] = 'hidden';
if (typeof element == 'string') {
sizer.innerHTML = element;
} else {
sizer.appendChild(element.cloneNode(true));
}
if (typeof elementContainer !== 'undefined' && elementContainer instanceof jQuery) {
elementContainer = elementContainer.get(0);
} else {
elementContainer = document.body;
}
elementContainer.appendChild(sizer);
var size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);
if (opt_maxWidth && size.width > opt_maxWidth) {
sizer.style['width'] = this.px(opt_maxWidth);
size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);
}
if (opt_maxHeight && size.height > opt_maxHeight) {
sizer.style['height'] = this.px(opt_maxHeight);
size = new google.maps.Size(sizer.offsetWidth, sizer.offsetHeight);
}
elementContainer.removeChild(sizer);
delete sizer;
return size;
};
InfoBubble.prototype.redraw_ = function() {
this.figureOutSize_();
this.positionCloseButton_();
this.draw();
};
InfoBubble.prototype.figureOutSize_ = function() {
var map = this.get('map');
if (!map) {
return;
}
var padding = this.getPadding_();
var borderWidth = this.getBorderWidth_();
var borderRadius = this.getBorderRadius_();
var arrowSize = this.getArrowSize_();
var mapDiv = map.getDiv();
var gutter = arrowSize * 2;
var mapWidth = mapDiv.offsetWidth - gutter;
var mapHeight = mapDiv.offsetHeight - gutter - this.getAnchorHeight_();
var tabHeight = 0;
var width = (this.get('minWidth') || 0);
var height = (this.get('minHeight') || 0);
var maxWidth = (this.get('maxWidth') || 0);
var maxHeight = (this.get('maxHeight') || 0);
maxWidth = Math.min(mapWidth, maxWidth);
maxHeight = Math.min(mapHeight, maxHeight);
var tabWidth = 0;
if (this.tabs_.length) {
for (var i = 0, tab; tab = this.tabs_[i]; i++) {
var tabSize = this.getElementSize_(tab.tab, maxWidth, maxHeight);
var contentSize = this.getElementSize_(tab.content, maxWidth, maxHeight);
if (width < tabSize.width) {
width = tabSize.width;
}
tabWidth += tabSize.width;
if (height < tabSize.height) {
height = tabSize.height;
}
if (tabSize.height > tabHeight) {
tabHeight = tabSize.height;
}
if (width < contentSize.width) {
width = contentSize.width;
}
if (height < contentSize.height) {
height = contentSize.height;
}
}
} else {
var content = (this.get('content'));
if (typeof content == 'string') {
content = this.htmlToDocumentFragment_(content);
}
if (content) {
var contentSize = this.getElementSize_(content, maxWidth, maxHeight);
if (width < contentSize.width) {
width = contentSize.width;
}
if (height < contentSize.height) {
height = contentSize.height;
}
}
}
if (maxWidth) {
width = Math.min(width, maxWidth);
}
if (maxHeight) {
height = Math.min(height, maxHeight);
}
width = Math.max(width, tabWidth);
if (width == tabWidth) {
width = width + 2 * padding;
}
arrowSize = arrowSize * 2;
width = Math.max(width, arrowSize);
if (width > mapWidth) {
width = mapWidth;
}
if (height > mapHeight) {
height = mapHeight - tabHeight;
}
if (this.tabsContainer_) {
this.tabHeight_ = tabHeight;
this.tabsContainer_.style['width'] = this.px(tabWidth);
}
this.contentContainer_.style['width'] = this.px(width);
};
InfoBubble.prototype.getAnchorHeight_ = function() {
var anchor = this.get('anchor');
if (anchor) {
var anchorPoint =(this.get('anchorPoint'));
if (anchorPoint) {
return -1 * anchorPoint.y;
}
}
return 0;
};
InfoBubble.prototype.anchorPoint_changed = function() {
this.draw();
};
InfoBubble.prototype['anchorPoint_changed'] = InfoBubble.prototype.anchorPoint_changed;
InfoBubble.prototype.positionCloseButton_ = function() {
var br = this.getBorderRadius_();
var bw = this.getBorderWidth_();
var right = 2;
var top = 2;
if (this.tabs_.length && this.tabHeight_) {
top += this.tabHeight_;
}
top += bw;
right += bw;
var c = this.contentContainer_;
if (c && c.clientHeight < c.scrollHeight) {
right += 15;
}
this.close_.style['right'] = this.px(right);
this.close_.style['top'] = this.px(top);
};
var GOOGLEMAP = GOOGLEMAP || {};
window.rateBlockCache = {};
GOOGLEMAP.ClusterMap = function (elementID) {
this.allPins = false;
this.hotelPinPrices = {};
this.icons = false;
this.map = false;
this.markers = [];
this.infoBubble = {};
this.markerClusterer = {};
this.options = {
elementID: elementID,
mapTypeId: google.maps.MapTypeId.ROADMAP,
max_zoom_level: 19,
max_bound_zoom_level: 8,
def_zoom_level: 14,
is_full_view: false,
view_node_class: null,
filter_call: false,
gridSize: 30,
disable_default_UI: true,
custom_center: false,
zoom_control_position: 'bottom',
slider: false,
offset_top: false,
hide_rate: false,
style: 'black',
show_zoom_controls: undefined,
show_fullscreen_control: undefined,
rate_pin_ids: [],
filter_pin_ids: null // null(mean all), array - list of ids to show
};
this.init = function (pins, params, icons, noRezoom) {
var _this = this;
if (typeof params !== 'undefined') {
$.extend(_this.options, params);
}
pins = pins ? pins : _this.allPins;
icons = icons ? icons : _this.icons;
_this.allPins = jQuery.extend(true, {}, pins); // clone obj
_this.icons = jQuery.extend(true, {}, icons);
if (pins && pins.gha_hotel && _this.options.filter_pin_ids) {
pins.gha_hotel = pins.gha_hotel.filter(function (item) {
return item && _this.options.filter_pin_ids.indexOf(item.id) !== -1;
});
}
if (typeof _this.markerClusterer !== 'undefined' && _this.options.filter_call) {
_this.markerClusterer.clearMarkers();
_this.options.filter_call = false;
} else {
var styles = [{
"featureType": "water",
"stylers": [{"color": "#AAC1CA"}]
}, {
"featureType": "road.highway",
"stylers": [{"color": "#D9F056"}]
}, {
"featureType": "road.arterial",
"stylers": [{"color": "#BBBFB9"}]
}, {
"featureType": "poi.business",
"elementType": "labels",
"stylers": [{"visibility": "off"}]
}];
var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
var googleMapOptions = {
minZoom: 2,
maxZoom: _this.options.max_zoom_level,
center: new google.maps.LatLng(0, 0),
mapTypeId: google.maps.MapTypeId.ROADMAP,
streetViewControl: false,
panControl: false,
mapTypeControl: false,
disableDefaultUI: _this.options.disable_default_UI,
mapTypeControlOptions: {
mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
},
fullscreenControl: _this.options.show_fullscreen_control,
zoomControl: _this.options.show_zoom_controls,
zoomControlOptions: {
position: _this.options.zoom_control_position === 'bottom'
? google.maps.ControlPosition.RIGHT_BOTTOM
: google.maps.ControlPosition.RIGHT_CENTER
}
};
var mapIdEl = document.getElementById(_this.options.elementID);
var map = new google.maps.Map(mapIdEl, googleMapOptions);
map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');
var backgroundClass = _this.options.slider ? 'googleMapPopup--Slider' : 'googleMapPopup-container';
if (_this.options.style === 'white') {
backgroundClass += '-white';
}
_this.infoBubble = new InfoBubble({
minWidth: _this.options.slider ? 226 : 400,
maxWidth: _this.options.slider ? 226 : 450,
minHeight: 56,
arrowSize: 14,
map: map,
borderWidth: 0,
borderRadius: 0,
shadowStyle: 0,
hideCloseButton: true,
disableAnimation: true,
disableAutoPan: true,
padding: 0,
backgroundClassName: backgroundClass
});
_this.infoBubble.setBackgroundColor('#2e2c2c');
_this.infoBubble.addEvents_ = function () {
var events = ['mousedown', 'mousemove', 'mouseover', 'mouseout', 'mouseup',
'mousewheel', 'DOMMouseScroll', 'touchstart', 'touchend', 'touchmove',
'dblclick', 'contextmenu', 'click'];
var bubble = this.bubble_;
this.listeners_ = [];
for (var i = 0, event; event = events[i]; i++) {
this.listeners_.push(
google.maps.event.addDomListener(bubble, event, function (e) {
if (
e.type === 'click'
&& (e.target.hasAttribute('partner-link') || $(e.target).hasClass('js-wishlist-heart'))
) {
return;
}
e.cancelBubble = true;
if (e.stopPropagation) {
e.stopPropagation();
}
if (e.type === 'mouseout') {
var target = e && e.relatedTarget;
if (e && !target) {
$.each(e, function (k, item) {
if (item instanceof MouseEvent && item.relatedTarget) {
target = item.relatedTarget;
}
});
}
if (target && (
$(target).is('img[draggable], .arrow-gha')
|| $(target).closest('.googleMapPopup--Slider, .googleMapPopup-container, .googleMapPopup--Slider-white, .pin-wrapper').length !== 0
)) {
return;
}
_this.infoBubble.close(map);
}
})
);
}
};
google.maps.event.addListener(map, "click", function (e) {
_this.infoBubble.close(map);
});
}
var markers = [], marker,
countHotelPins = typeof pins.gha_hotel !== 'undefined' ? pins.gha_hotel.length : 0,
countLePins = typeof pins.gha_local_experience !== 'undefined' ? pins.gha_local_experience.length : 0,
countPoiPins = typeof pins.gha_poi !== 'undefined' ? pins.gha_poi.length : 0,
countWishlistHotelPins = typeof pins.wishlistHotels !== 'undefined' ? pins.wishlistHotels.length : 0,
countWishlistLEPins = typeof pins.wishlistLE !== 'undefined' ? pins.wishlistLE.length : 0,
countWishlistSOPins = typeof pins.wishlistSO !== 'undefined' ? pins.wishlistSO.length : 0,
markerImage = new google.maps.MarkerImage(icons.pin, new google.maps.Size(33, 41)),
markerPriceImage = new google.maps.MarkerImage(icons.price_pin, new google.maps.Size(33, 41)),
oneHotelAndLe = false;
if (countHotelPins === 1 && countLePins === 1) {
oneHotelAndLe = true;
marker = _this.createMarker(pins.gha_local_experience[0], markerImage);
if (_this.options.slider) {
_this.addTooltipHotelWithSlider(pins.gha_hotel[0], marker);
} else {
_this.addTooltipOneLe(pins, marker);
}
markers.push(marker);
} else {
if (countLePins > 0) {
for (var i = 0; i < countLePins; ++i) {
marker = _this.createMarker(pins.gha_local_experience[i], markerImage);
_this.addTooltipLEWithSlider(pins.gha_local_experience[i], marker);
markers.push(marker);
}
}
if (countHotelPins > 0) {
var withPrice = false;
for (var i = 0; i < countHotelPins; ++i) {
withPrice = _this.options.rate_pin_ids && _this.options.rate_pin_ids.indexOf(pins.gha_hotel[i].id) !== -1;
marker = _this.createMarker(
pins.gha_hotel[i], withPrice ? markerPriceImage : markerImage, withPrice
);
if (_this.options.slider) {
_this.addTooltipHotelWithSlider(pins.gha_hotel[i], marker);
} else {
_this.addTooltipHotel(pins.gha_hotel[i], marker);
}
markers.push(marker);
}
}
if (countPoiPins > 0) {
for (var i = 0; i < countPoiPins; ++i) {
marker = _this.createMarker(pins.gha_poi[i], markerImage);
_this.addTooltipPoi(pins.gha_poi[i], marker);
markers.push(marker);
}
}
if (countWishlistHotelPins > 0) {
for (var i = 0; i < countWishlistHotelPins; ++i) {
marker = _this.createMarker(pins.wishlistHotels[i], markerImage);
_this.addTooltipWishlistHotel(pins.wishlistHotels[i], marker);
markers.push(marker);
}
}
if (countWishlistSOPins > 0) {
for (var i = 0; i < countWishlistSOPins; ++i) {
marker = _this.createMarker(pins.wishlistSO[i], markerImage);
_this.addTooltipWishlistSO(pins.wishlistSO[i], marker);
markers.push(marker);
}
}
if (countWishlistLEPins > 0) {
for (var i = 0; i < countWishlistLEPins; ++i) {
marker = _this.createMarker(pins.wishlistLE[i], markerImage);
_this.addTooltipWishlistLE(pins.wishlistLE[i], marker);
markers.push(marker);
}
}
}
if (markers.length > 0) {
var el = $(mapIdEl),
bounds = (markers.length > 0) ? _this.createBoundsForMarkers(markers) : null,
center = (bounds) ? bounds.getCenter() : new google.maps.LatLng(0, 0),
zoom, offset, position;
if (markers.length > 1 && !noRezoom) {
map.fitBounds(bounds);
}
if (_this.options.custom_center && !noRezoom) {
position = new google.maps.LatLng(pins.gha_hotel[0].lat, pins.gha_hotel[0].lon);
map.setCenter(position);
offset = _this.getLatOffset(el);
setTimeout(function () {
map.panBy(0, offset);
}, 0);
} else if (_this.options.slider && oneHotelAndLe && !noRezoom) {
map.setCenter(center);
offset = _this.getLatOffset(el);
setTimeout(function () {
map.panBy(0, offset);
}, 0);
} else if (!noRezoom) {
map.setCenter(center);
if (_this.options.offset_top) {
var offset_top = $.isNumeric(_this.options.offset_top) ? '-' + _this.options.offset_top : -100;
setTimeout(function () {
map.panBy(0, offset_top);
}, 0);
}
}
if (!noRezoom) {
if (_this.options.is_full_view) {
map.setZoom(_this.options.def_zoom_level);
} else {
zoom = (bounds) ? _this.getBoundsZoomLevel(bounds, {
height: el.height(),
width: el.width()
}) : 0;
map.setZoom(zoom);
}
}
if (map) {
_this.map = map;
}
_this.markers = markers;
_this.createMarkerCluster(icons, markers);
_this.addCustomZoomControls();
}
};
this.setFilterPinIDs = function (ids) {
this.options.filter_pin_ids = ids ? ids : null;
this.options.filter_call = true;
this.init(false, undefined, false, true);
};
this.setRatePinIDs = function (ids) {
this.options.rate_pin_ids = ids && ids.length ? ids : null;
this.options.filter_call = true;
this.init(false, undefined, false, true);
this.loadRates();
};
this.loadRates = function () {
if (!this.markers || !this.markers.length) {
return;
}
var currency = Cookie.getCookie('currency') || '_';
if (!window.rateBlockCache[currency]) {
window.rateBlockCache[currency] = {};
}
var callRender = setTimeout(this.loadRates.bind(this), 2000);
var bookingDates = getBookingDatesCookie();
var priceEl;
$.each(this.markers, function (index, marker) {
if (marker.hotelCode) {
var getRateURL = '/hotel_search/rate?hotel_code='
+ marker.hotelCode + '&clear_session_booking_params=1&for_map=1&default_price=1';
if (bookingDates) {
getRateURL += '&start_date=' + bookingDates.start_date + '&end_date=' + bookingDates.end_date;
}
if (typeof window.rateBlockCache[currency][getRateURL] !== 'undefined') {
priceEl = $(window.rateBlockCache[currency][getRateURL]).find('.js-price');
if (priceEl.length) {
this.hotelPinPrices[marker.hotelCode] = {
'text': $.trim(priceEl.text()).replace(/\s{2,}/g, ' '),
'sort_key': parseFloat(priceEl.data('sort-rate-price'))
};
} else {
this.hotelPinPrices[marker.hotelCode] = {'text': 'unavailable', 'sort_key': 0};
}
} else {
clearTimeout(callRender);
var rateLoaded = function (data) {
var ratePriceEl = null;
if (data && data.length) {
window.rateBlockCache[currency][getRateURL] = data;
ratePriceEl = $(data).find('.js-price');
} else {
window.rateBlockCache[currency][getRateURL] = '';
}
if (ratePriceEl && ratePriceEl.length) {
this.hotelPinPrices[marker.hotelCode] = {
'text': $.trim(ratePriceEl.text()).replace(/\s{2,}/g, ' '),
'sort_key': parseFloat(ratePriceEl.data('sort-rate-price'))
};
} else {
this.hotelPinPrices[marker.hotelCode] = {'text': 'unavailable', 'sort_key': 0};
}
clearTimeout(callRender);
callRender = setTimeout(this.loadRates.bind(this), 2000);
}.bind(this);
this.hotelPinPrices[marker.hotelCode] = undefined;
$.get(getRateURL).done(rateLoaded).fail(function () {
rateLoaded('');
});
}
}
}.bind(this));
clearTimeout(callRender);
this.options.filter_call = true;
this.init(false, undefined, false, true);
};
this.zoomToHotelIds = function (ids) {
if (!this.map) {
return;
}
var zoomToPins = this.allPins.gha_hotel;
if (typeof ids !== 'undefined' && this.allPins.gha_hotel) {
zoomToPins = zoomToPins.filter(function (item) {
return item && this.indexOf(item.id) !== -1;
}.bind(ids));
}
if (!zoomToPins || !zoomToPins.length) {
return;
}
var bounds = new google.maps.LatLngBounds();
$.each(zoomToPins, function () {
bounds.extend(new google.maps.LatLng(parseFloat(this.lat), parseFloat(this.lon)));
});
if (zoomToPins.length === 1 && this.markers && this.markers.length) {
var markerToExpand = this.markers.filter(function (item) {
return item && item.pinId && this.id && item.pinId === this.id;
}.bind(zoomToPins[0]));
if (markerToExpand.length) {
new google.maps.event.trigger(markerToExpand[0], 'mouseover', {
stop: null, latLng: markerToExpand[0].getPosition()
});
}
}
var mapEl = $('#' + this.options.elementID);
var zoom = this.getBoundsZoomLevel(bounds, {
height: mapEl.height(),
width: mapEl.width()
});
this.map.fitBounds(bounds);
this.map.setZoom(zoom);
};
this.createMarker = function (pin, markerImage, withPrice) {
var label;
if (withPrice) {
var priceText = this.hotelPinPrices[pin.id] && this.hotelPinPrices[pin.id]['text']
? this.hotelPinPrices[pin.id]['text']
: 'loading...';
markerImage.scaledSize = new google.maps.Size(
priceText.length * 8 < 74 ? 74 : (priceText.length * 8.5 + 16),
39
);
markerImage.size = markerImage.scaledSize;
markerImage.labelOrigin = new google.maps.Point(
parseInt(markerImage.scaledSize.width / 2), 12
);
label = {
text: priceText,
color: 'white',
fontWeight: 'normal',
fontSize: '13px'
};
}
var latLng = new google.maps.LatLng(parseFloat(pin.lat), parseFloat(pin.lon)),
marker = new google.maps.Marker({
position: latLng,
draggable: false,
icon: markerImage,
label: label
});
if (withPrice) {
marker.hotelCode = pin.id;
}
marker.pinId = pin.id;
return marker;
};
this.createMarkerCluster = function (icons, markers) {
var styles = [{
url: icons.cluster_small,
height: 44,
width: 46,
textColor: '#ffffff',
textSize: 14
}, {
url: icons.cluster_big,
height: 57,
width: 57,
textColor: '#ffffff',
textSize: 16
}, {
url: icons.price_pin,
backgroundPosition: '0 0;background-size:100% 100%;line-height:21px!important;padding:1px 15px;width:auto!important;min-width:74px;font-weight:normal!important',
height: 39,
width: 74,
textColor: '#ffffff',
textSize: 13
}];
this.markerClusterer = new MarkerClusterer(this.map, markers, {
maxZoom: this.options.def_zoom_level - 2,
gridSize: this.options.gridSize,
styles: styles
});
this.markerClusterer.setCalculator(function (markers, numStyles) {
var index = 0,
count = markers.length,
total = count;
while (total !== 0) {
total = parseInt(total / 5, 10);
index++;
}
var minPrice = 0, minPriceText = 'loading...',
unavailableCount = 0, withPriceCount = 0;
$.each(markers, function (index, marker) {
if (marker.hotelCode) {
hasWithPrice = true;
withPriceCount++;
if (
this.hotelPinPrices[marker.hotelCode]
&& this.hotelPinPrices[marker.hotelCode]['sort_key']
&& (this.hotelPinPrices[marker.hotelCode]['sort_key'] < minPrice || minPrice === 0)
) {
minPrice = this.hotelPinPrices[marker.hotelCode]['sort_key'];
minPriceText = this.hotelPinPrices[marker.hotelCode]['text'];
} else if (this.hotelPinPrices[marker.hotelCode] && this.hotelPinPrices[marker.hotelCode]['sort_key'] === 0) {
unavailableCount++;
}
}
}.bind(this));
return {
text: withPriceCount ? (unavailableCount !== withPriceCount ? minPriceText.replace(' ', '&nbsp;') : 'unavailable') : count,
index: withPriceCount ? 3 : Math.min(index, numStyles - 1)
}
}.bind(this));
};
this.addTooltipOneLe = function (pins, marker) {
var description = '',
leLocation = pins.gha_local_experience[0],
hotelLocation = pins.gha_hotel[0],
tooltipCSS = leLocation.type + '_tooltip',
linkHTML = this.formProductLinkElement(hotelLocation, hotelLocation.title.toUpperCase());
description += '<div class="tooltip-content">';
description += '<div class="title">' + leLocation.title.toUpperCase() + '</div>';
description += '<div class="description">at ' + linkHTML + '</div>';
description += '</div>';
if (description !== false) {
description = '<div class="' + this.options.view_node_class + ' ' + tooltipCSS + '">' + description + '</div>';
marker.tooltipContent = description;
this.addEvents(marker);
}
};
this.addTooltipHotel = function (pin, marker) {
var description = '',
tooltipCSS = pin.type + '_tooltip',
title = pin.title.toUpperCase(),
linkHTML = this.formProductLinkElement(pin, title);
description += pin.photo && pin.photo.length > 4 ? '<img style="width: 40%;" src="' + pin.photo + '" />' : '';
description += '<div class="tooltip-content">';
description += '<div class="title">' + linkHTML + '</div>';
description += '<div class="description">' + pin.description + '</div>';
if (description !== false) {
description = '<div class="' + this.options.view_node_class + ' ' + tooltipCSS + '">' + description + '</div>';
marker.tooltipContent = description;
this.addEvents(marker);
}
};
this.addTooltipHotelWithSlider = function (pin, marker) {
var description = '',
tooltipCSS = pin.type + '_tooltip',
title = pin.title.toUpperCase(),
linkHTML = this.formProductLinkElement(pin, title);
description += '<div class="tooltip-content">';
description += '<h3 class="title">' + linkHTML + '</h3>';
if (this.options.hide_rate) {
description += '<h3 class="sub-title">' + pin.brand_name + '</h3>';
}
description += '<h3 class="sub-title">' + pin.city + ', ' + pin.country + '</h3>';
if (!this.options.hide_rate) {
description += '<div luana-module="get-rate" rate-cookie-dates data-uri="/hotel_search/rate?hotel_code=' + pin.id + '&clear_session_booking_params=1&for_map=1&default_price=1">' +
'<div class="Loader Loader--overlay Loader--inner u-paddingAxl Loader-' + pin.id + '"><div class="Spinner"><div class="Spinner-rect1"></div><div class="Spinner-rect2"></div>' +
'<div class="Spinner-rect3"></div><div class="Spinner-rect4"></div><div class="Spinner-rect5"></div></div>' +
'<img class="Loader-img" src="' + this.options.loader_image + '" alt="Loader"></div></div>' +
'</div>';
}
var slider = '<div luana-module="gallery" class="RotateBanner RotateBanner--googleMap">' +
'<button type="button" gallery-prev class="RotateBanner-prev"></button>' +
'<button type="button" gallery-next class="RotateBanner-next"></button>' +
'<div class="RotateBanner-holder">' +
'<div class="RotateBanner-line" gallery-holder>';
if (pin.photos) {
jQuery.each(pin.photos, function (index, photo) {
slider += '<div class="RotateBanner-item" gallery-item>' +
'<span class="ImgFit" style="background-image: url(' + photo + ');">' +
'<img src="' + photo + '"></span></div>';
});
}
slider += '</div></div></div>';
if (description !== false) {
description = '<div '
+ (marker.hotelCode ? ' over-marker' : '')
+ ' class="'
+ this.options.view_node_class + ' ' + tooltipCSS + '">' + slider + description + '</div>';
marker.tooltipContent = description;
this.addEvents(marker);
}
};
this.addTooltipLEWithSlider = function (pin, marker) {
var description = '',
tooltipCSS = pin.type + '_tooltip',
title = pin.title.toUpperCase(),
hotelName = pin.hotelName.toUpperCase(),
leLinkHTML = this.formProductLinkElement(pin, title),
hotelLinkHTML = this.formProductLinkElement(pin, hotelName, null, true);
description += '<div class="tooltip-content">';
description += '<div class="title">' + leLinkHTML + '</div>';
description += '<span class="title title-gold">' + hotelLinkHTML + '</span>';
description += '<h3 class="sub-title">' + pin.address + '</h3>';
description += '<h3 class="sub-title">' + pin.avalDates + '</h3></div>';
var slider = '<div class="RotateBanner RotateBanner--googleMap">' +
'<div class="RotateBanner-holder">' +
'<div class="RotateBanner-line">';
if (pin.photo) {
slider += '<div class="RotateBanner-item gallery-item ">' +
'<span class="ImgFit" style="background-image: url(' + pin.photo + ');">' +
'<img src="' + pin.photo + '"></span></div>';
}
slider += '</div></div></div>';
if (description !== false) {
description = '<div '
+ (marker.hotelCode ? ' over-marker' : '')
+ ' class="' + tooltipCSS + '">' + slider + description + '</div>';
marker.tooltipContent = description;
this.addEvents(marker);
}
};
this.addTooltipPoi = function (pin, marker) {
var description = '',
tooltipCSS = pin.type + '_tooltip',
title = pin.title.toUpperCase();
description += pin.photo && pin.photo.length > 4 ? '<img src="' + pin.photo + '" />' : '';
description += '<div class="tooltip-content">';
description += '<div class="title"><a href="' + pin.url + '">' + title + '</a></div>';
if (description !== false) {
description = '<div class="' + this.options.view_node_class + ' ' + tooltipCSS + '">' + description + '</div>';
marker.tooltipContent = description;
this.addEvents(marker);
}
};
this.addTooltipWishlistHotel = function (pin, marker) {
var description = '',
tooltipCSS = pin.type + '_tooltip',
title = pin.title.toUpperCase();
description += pin.photo && pin.photo.length > 4 ? '<img src="' + pin.photo + '" />' : '';
description += pin.heart;
description += '<div class="tooltip-content">';
description += '<div class="title"><a href="' + pin.url + '">' + title + '</a></div>';
description += '<h3 class="sub-title">' + pin.address + '</h3></div>';
if (description !== false) {
description = '<div class="' + this.options.view_node_class + ' ' + tooltipCSS + '">' + description + '</div>';
marker.tooltipContent = description;
this.addEvents(marker);
}
};
this.addTooltipWishlistSO = function (pin, marker) {
var description = '',
tooltipCSS = pin.type + '_tooltip',
title = pin.title.toUpperCase();
description += pin.photo && pin.photo.length > 4 ? '<img src="' + pin.photo + '" />' : '';
description += pin.heart;
description += '<div class="tooltip-content">';
description += '<div class="title">' + title + '</div>';
description += '<span class="title title-gold"><a href="' + pin.hotelURL + '">' + pin.hotelName + '</a>' + '</span>';
description += '<h3 class="sub-title">' + pin.address + '</h3>';
description += '</div>';
if (description !== false) {
description = '<div class="' + this.options.view_node_class + ' ' + tooltipCSS + '">' + description + '</div>';
marker.tooltipContent = description;
this.addEvents(marker);
}
};
this.addTooltipWishlistLE = function (pin, marker) {
var description = '',
tooltipCSS = pin.type + '_tooltip',
title = pin.title.toUpperCase(),
hotelName = pin.hotelName.toUpperCase(),
leLinkHTML = this.formProductLinkElement(pin, title),
hotelLinkHTML = this.formProductLinkElement(pin, hotelName, null, true);
description += '<div class="LeView-status LeView-status--standalone LeView-status--'
+ pin.level + ' u-cf"><span>' + pin.level + '</span></div>';
description += '<div class="tooltip-content">';
description += '<div class="title">' + leLinkHTML + '</div>';
description += '<span class="title title-gold">' + hotelLinkHTML + '</span>';
description += '<h3 class="sub-title">' + pin.address + '</h3></div>';
var slider = '<div class="RotateBanner RotateBanner--googleMap">' +
'<div class="RotateBanner-holder">' +
pin.heart +
'<div class="RotateBanner-line">';
if (pin.photo) {
slider += '<div class="RotateBanner-item gallery-item ">' +
'<span class="ImgFit" style="background-image: url(' + pin.photo + ');">' +
'<img src="' + pin.photo + '"></span></div>';
}
slider += '</div></div></div>';
if (description !== false) {
description = '<div '
+ (marker.hotelCode ? ' over-marker' : '')
+ ' class="' + tooltipCSS + '">' + slider + description + '</div>';
marker.tooltipContent = description;
this.addEvents(marker);
}
};
this.combineTooltips = function (marker, backgroundClass) {
var response = marker.tooltipContent,
multiple = false;
if (this.markers.length < 2) {
return [response, multiple];
}
var currentLat = marker.position.lat(),
currentLng = marker.position.lng(),
additionalTooltipContent = '';
$.each(this.markers, function () {
if (
currentLat === this.position.lat()
&& currentLng === this.position.lng()
&& this.tooltipContent
&& this.pinId !== marker.pinId
) {
additionalTooltipContent += '<div class="' + backgroundClass + '">' + this.tooltipContent + '</div>';
multiple = true;
}
});
if (multiple) {
response = '<div class="' + backgroundClass + '">' + marker.tooltipContent + '</div>'
+ additionalTooltipContent;
}
return [response, multiple];
};
this.addEvents = function (marker) {
var _this = this;
google.maps.event.addListener(marker, 'click', function (e) {
var currentZoom = _this.map.getZoom(),
middleZoom = 15;
if (middleZoom > currentZoom) {
_this.map.setZoom(middleZoom);
_this.map.setCenter(e.latLng);
_this.map.panBy(0, 100);
}
showInfoBuble();
$(document).trigger('pin:click', this);
});
var isWhiteTheme = _this.options.style === 'white';
google.maps.event.addListener(marker, "mouseover", showInfoBuble);
function showInfoBuble() {
if (_this.infoBubble.getContent() === marker.tooltipContent && _this.infoBubble.isOpen()) {
return;
}
var backgroundClass = _this.options.slider ? 'googleMapPopup--Slider' : 'googleMapPopup-container';
if (isWhiteTheme) {
backgroundClass += '-white';
}
var itemClass = backgroundClass;
var mapContainer = $('#' + _this.options.elementID);
var arrowContainer = $(mapContainer.find('.' + backgroundClass).get(0)).parent();
var combineResult = _this.combineTooltips(marker, backgroundClass);
var tooltipContent = combineResult[0];
var multiple = combineResult[1];
if (multiple) {
backgroundClass = 'pin-wrapper scrollable';
}
_this.infoBubble.setBackgroundClassName(backgroundClass);
_this.infoBubble.setContent(tooltipContent);
var projection = _this.infoBubble.getProjection();
var markerPosition = projection.fromLatLngToDivPixel(marker.getPosition());
var arrowEl = mapContainer.find('.arrow-gha');
arrowEl.removeClass('arrow-gha--left')
.removeClass('arrow-gha--right-white')
.removeClass('arrow-gha--left-white')
.removeClass('arrow-gha--right')
.removeClass('arrow-gha--up');
var maxPinHeight = mapContainer.get(0).offsetHeight - 20;
var descriptionForSize = document.createElement('DIV');
descriptionForSize.className += backgroundClass + ' gm-style';
for (var i = 0; i < $(tooltipContent).length; ++i) {
descriptionForSize.appendChild($(tooltipContent).get(i));
}
var descriptionSize = _this.infoBubble.getElementSize_(descriptionForSize, 226, maxPinHeight, mapContainer);
var descriptionHeight = descriptionSize.height;
var pinHeight = isWhiteTheme ? 21 : 22;
var arrowSize = 16;
if (arrowContainer.hasClass('scrollable') || arrowContainer.hasClass(itemClass)) {
arrowContainer = arrowContainer.parent();
}
var arrowOffsetLeft = '20px';
if (isWhiteTheme) {
arrowEl.css('margin-left', '-20px!important');
} else {
arrowEl.css('margin-left', '-19px');
arrowOffsetLeft = '19px';
}
var mapTopBorder = projection.fromLatLngToDivPixel(_this.map.getBounds().getNorthEast());
var mapBottomBorder = projection.fromLatLngToDivPixel(_this.map.getBounds().getSouthWest());
if (multiple) {
var pinContainer = $(mapContainer.find('.scrollable')),
pinWidth = 13,
totalDescriptionWidth = descriptionSize.width + arrowSize + pinWidth,
descriptionMiddleHeight = descriptionHeight / 2,
orientation = -1,
arrowClass = 'arrow-gha--right';
if (pinContainer.length) {
pinContainer.css('max-height', maxPinHeight);
}
if (markerPosition.x - totalDescriptionWidth < mapBottomBorder.x) {
orientation = 1;
arrowClass = 'arrow-gha--left';
}
var arrowOffsetRight = '3px';
if (isWhiteTheme) {
arrowOffsetRight = '4px';
arrowClass += '-white';
}
arrowEl.css('top', '-' + (descriptionMiddleHeight + 16) + 'px');
arrowEl.css('left', orientation === -1 ? 'calc(100% + ' + arrowOffsetLeft + ')' : arrowOffsetRight);
_this.infoBubble.setBubbleOffset(
(
descriptionSize.width / 2
+ arrowSize
+ (orientation === -1 ? pinWidth : pinWidth / 2)
+ (isWhiteTheme ? 0 : (orientation === 1 ? 8 : 3))
) * orientation,
descriptionMiddleHeight + arrowSize + pinHeight / 2
);
arrowEl.addClass(arrowClass);
arrowContainer.after(arrowEl.parent());
} else {
arrowEl.css('left', '50%');
if (markerPosition.y - descriptionHeight - arrowSize * 2 - pinHeight < mapTopBorder.y) {
arrowEl.addClass('arrow-gha--up');
arrowEl.css('top', '-' + (isWhiteTheme ? arrowSize * 2 : arrowSize) + 'px');
arrowContainer.before(arrowEl.parent());
_this.infoBubble.setBubbleOffset(0, descriptionHeight + arrowSize * 2 + (isWhiteTheme ? pinHeight : pinHeight + 13));
} else {
_this.infoBubble.setBubbleOffset(0, 0);
arrowEl.css('top', '0px');
arrowContainer.after(arrowEl.parent());
}
}
if (isWhiteTheme && !multiple) {
arrowEl.addClass('arrow-gha-white');
} else {
arrowEl.removeClass('arrow-gha-white');
}
_this.infoBubble.open(_this.map, marker);
if (_this.options.slider) {
window.setTimeout(function () {
luana.update();
}, 1000);
}
}
google.maps.event.addListener(marker, "mouseout", function (e) {
var target = e && e.relatedTarget;
if (e && !target) {
$.each(e, function (k, item) {
if (item instanceof MouseEvent && item.relatedTarget) {
target = item.relatedTarget;
}
});
}
if (target && (
$(target).is('img[draggable], .arrow-gha')
|| $(target).closest('.googleMapPopup--Slider, .googleMapPopup--Slider-white, .googleMapPopup-container').length !== 0
)) {
return;
}
_this.infoBubble.close(_this.map, marker);
});
if ($('.gmnoprint_custom').length) {
$('.gmnoprint_main_zoom_out').click(function () {
var currentZoomLevel = _this.map.getZoom();
if (currentZoomLevel != 0) {
_this.map.setZoom(currentZoomLevel - 1);
}
});
$('.gmnoprint_main_zoom_in').click(function () {
var currentZoomLevel = _this.map.getZoom();
if (currentZoomLevel != _this.map.maxZoom) {
_this.map.setZoom(currentZoomLevel + 1);
}
});
}
};
this.getBoundsZoomLevel = function (bounds, mapDim) {
var WORLD_DIM = {height: 256, width: 256},
ZOOM_MAX = 19,
boundsNorthEastObj, boundsSouthWestObj,
latFraction, lngDiff, lngFraction, latZoom, lngZoom,
extPoint;
boundsNorthEastObj = bounds.getNorthEast();
boundsSouthWestObj = bounds.getSouthWest();
if (boundsNorthEastObj.equals(boundsSouthWestObj)) {
extPoint = new google.maps.LatLng(boundsNorthEastObj.lat() + 0.001, boundsNorthEastObj.lng() + 0.001);
bounds.extend(extPoint);
extPoint = new google.maps.LatLng(boundsNorthEastObj.lat() - 0.001, boundsNorthEastObj.lng() - 0.001);
bounds.extend(extPoint);
boundsNorthEastObj = bounds.getNorthEast();
boundsSouthWestObj = bounds.getSouthWest();
}
latFraction = (latRad(boundsNorthEastObj.lat()) - latRad(boundsSouthWestObj.lat())) / Math.PI;
lngDiff = boundsNorthEastObj.lng() - boundsSouthWestObj.lng();
lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;
latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
var resZoom = Math.min(latZoom, lngZoom, ZOOM_MAX);
return resZoom > this.options.max_bound_zoom_level ? this.options.max_bound_zoom_level : resZoom;
function latRad(lat) {
var sin = Math.sin(lat * Math.PI / 180),
radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
}
function zoom(mapPx, worldPx, fraction) {
return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
}
};
this.createBoundsForMarkers = function (markers) {
var bounds = new google.maps.LatLngBounds();
$.each(markers, function () {
bounds.extend(this.getPosition());
});
return bounds;
};
this.getLatOffset = function (mapContainer) {
return -(mapContainer.height() / 6) * 2;
};
this.addCustomZoomControls = function () {
if ($('.gmnoprint_custom').length) {
$('.gmnoprint_main_zoom_out').click(function () {
var currentZoomLevel = this.map.getZoom();
if (currentZoomLevel != 0) {
this.map.setZoom(currentZoomLevel - 1);
}
});
$('.gmnoprint_main_zoom_in').click(function () {
var currentZoomLevel = this.map.getZoom();
if (currentZoomLevel != this.map.maxZoom) {
this.map.setZoom(currentZoomLevel + 1);
}
});
}
};
this.formProductLinkElement = function (pin, text, html_class, use_hotel_url) {
var url;
if (use_hotel_url) {
url = pin.hotelURL ? pin.hotelURL : pin.hotelUrl;
} else {
url = pin.url;
}
var elementHTML = '<a href="' + url + '" gtm-tracked-product-link',
dataAttributes = ['list', 'name', 'id', 'price', 'brand', 'category', 'variant'],
pinAttributes = ['list', 'title', 'id', 'price', 'brand', 'category', 'variant'];
if (typeof html_class !== 'undefined') {
elementHTML += ' class="' + html_class + '"'
}
pinAttributes.forEach(function (attr, i) {
if (typeof pin[attr] !== 'undefined') {
elementHTML += ' data-gtm-' + dataAttributes[i] + '="' + pin[attr] + '"';
}
});
if (typeof pin['extraAttr'] !== 'undefined') {
elementHTML += ' ' + pin['extraAttr'];
}
elementHTML += '>' + text + '</a>';
return elementHTML;
};
this.toggleById = function (id) {
if (!this.markers.length > 0 || id === 'undefined') {
return;
}
if (this.infoBubble.isOpen()) {
this.infoBubble.close(this.map);
}
this.markers = this.markers.filter(function (marker) {
return id != marker.pinId;
});
this.markerClusterer.clearMarkers();
this.createMarkerCluster(this.icons, this.markers);
};
};
luana.factory('google_map', {global: true})
.faces(['load_api_map'])
.describeScope({
pins: false,
viewSwitcher: '[view-switcher]',
filter_call: false,
checkApiLoad: '[api-load]',
params: {
button: '',
module: '',
cluster_small: '',
cluster_big: '',
pin: '',
view_node_class: '',
def_zoom_level: '',
is_full_view: '',
map_block_id: '',
google_api_key: '',
disable_default_ui: true
}
})
.controller(function () {
return {
eachScope: function (scope) {
if ( typeof $(scope.root).data('init') !== 'undefined' ) {
this.getParams(scope);
var activeViewSwitcher = $(scope.viewSwitcher).length > 1
? $(scope.viewSwitcher).filter('.is-active').first()
: $(scope.viewSwitcher).first();
if (
$(scope.root).data('ajax') == '1'
&& (
activeViewSwitcher.hasClass('search-ViewToggle--grid')
|| activeViewSwitcher.data('type') == "map"
)
) {
this.load_api_map(scope.params.google_api_key, scope);
} else {
this.attach_event(scope);
}
}
},
getParams: function (scope) {
$.each(scope.params,
function (key) {
scope.params[key] = $(scope.root).data(key);
}
);
},
get_pins: function (scope) {
if (!scope.pins) {
$(scope.checkApiLoad).data('api-loaded', '1');
var ths = this;
full_page_loader.show();
$.getJSON(scope.params.module, {
format: "json"
})
.done(function (data) {
scope.pins = jQuery.extend({}, data);
ths.init_map(scope, data);
full_page_loader.hide();
});
}
},
init_map: function (scope, pins) {
var clusterMap = new GOOGLEMAP.ClusterMap(scope.params.map_block_id);
clusterMap.maxClusterDescriptions = 10;
clusterMap.init(
pins,
{
view_node_class: scope.params.view_node_class,
def_zoom_level: parseInt(scope.params.def_zoom_level),
is_full_view: scope.params.is_full_view,
filter_call: scope.filter_call,
disable_default_UI: scope.params.disable_default_ui
},
{
cluster_small: scope.params.cluster_small,
cluster_big: scope.params.cluster_big,
pin: scope.params.pin
}
);
},
attach_event: function (scope) {
var ths = this;
$(scope.params.button).on("click", function () {
ths.load_api_map(scope.params.google_api_key, scope);
});
},
load_api_map: function (apiKey, scope, callbackName) {
if (scope) {
if ($(scope.checkApiLoad).data('api-loaded') == '0') {
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey;
document.body.appendChild(script);
}
this.get_pins(scope);
} else {
if(typeof google ==='undefined') {
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=" + callbackName;
document.body.appendChild(script);
} else {
window[callbackName]();
}
}
}
};
});
luana.factory( 'gtm-analytics' )
.faces( 'trackPromo', 'trackProductImpressions', 'trackFindHotels', 'trackFilterFindHotels' )
.defineElements( {
trackPromoImpressions: '[track-promo-impressions]'
} )
.describeScope( {
trackingParams: {},
productLink: '[gtm-tracked-product-link]',
availabilityLink: '[gtm-tracked-availability-link]',
viewChangeLink: '[gtm-view-change-link]',
promoBanner: '[gtm-tracked-promo]',
promoLink: '[gtm-tracked-promo-link]',
defaultCurrencyCode: 'USD',
referrer: '',
isProductPage: false,
productPage: '[is_product_page]',
availabilityQueryReadyToSend: '[availability_query_set_ready_to_send]',
isSetAvailabilityQueryReadyToSend: false
} )
.controller( function( view ) {
return {
initialize: function () {
this.__throughScopes(function (index, scope) {
scope.referrer = document.referrer;
scope.isProductPage = $( scope.root ).find( scope.productPage ).length > 0;
}.bind(this));
if (localStorage.hasOwnProperty('map_impressions')) {
localStorage.removeItem('map_impressions');
}
if (localStorage.hasOwnProperty('list_impressions')) {
localStorage.removeItem('list_impressions');
}
},
changeProductsView: function( scope, element ) {
if ($( element ).attr('gtm-view') === 'list') {
if (localStorage.hasOwnProperty('list_impressions')) {
scope.trackingParams = $.parseJSON(localStorage.getItem('list_impressions'));
view.setDataLayer( scope );
}
} else if ($( element ).attr('gtm-view') === 'map')  {
if (localStorage.hasOwnProperty('map_impressions')) {
scope.trackingParams = $.parseJSON(localStorage.getItem('map_impressions'));
view.setDataLayer( scope );
}
}
},
clickProductLink: function( scope, element ) {
var price = typeof $( element ).data( 'gtm-price' ) !== 'undefined' ? $( element ).data( 'gtm-price' ) : '0.00',
dimension14 = typeof $( element ).attr( 'data-gtm-dimension-14' ) !== 'undefined' ? $( element ).attr( 'data-gtm-dimension-14' ) : '',
details = {};
details['actionField'] = {'list': $( element ).data( 'gtm-list' )};
details['products'] = [{
'name': typeof $( element ).data( 'gtm-name' ) !== 'undefined' ? $( element ).data( 'gtm-name' ) : '',
'id': typeof $( element ).data( 'gtm-id' ) !== 'undefined' ? $( element ).data( 'gtm-id' ) : '',
'price': price === '' ? '0.00' : price,
'brand': typeof $( element ).data( 'gtm-brand' ) !== 'undefined' ? $( element ).data( 'gtm-brand' ) : '',
'category': typeof $( element ).data( 'gtm-category' ) !== 'undefined' ? $( element ).data( 'gtm-category' ) : '',
'variant': typeof $( element ).data( 'gtm-variant' ) !== 'undefined' ? $( element ).data( 'gtm-variant' ) : '',
'dimension14': dimension14,
'position': typeof $( element ).data( 'gtm-position' ) ? $( element ).data( 'gtm-position' ) : ''
}];
scope.trackingParams = {
'event': 'productClick',
'ecommerce': {
'click': details
}
};
view.setDataLayer( scope );
},
clickPromoLink: function( scope, element ) {
var promoBanner = $( element ).parents( scope.promoBanner );
if (promoBanner.length > 0) {
scope.trackingParams = {
'event': 'promotionClick',
'ecommerce': {
'promoClick': {
'promotions': [this.getPromoTrackParams( promoBanner )]
}
}
};
view.setDataLayer( scope );
}
},
trackPromo: function( promo, pushEvent ) {
var scope = this.__getScopeByElement( promo ),
params = {};
if ( promo.length > 0 ) {
if ( pushEvent ) {
params['event'] = 'promoImpressions';
}
params['ecommerce'] = {
'promoView': {
'promotions': [this.getPromoTrackParams( promo )]
}
};
scope.trackingParams = params;
view.setDataLayer( scope );
}
},
getPromoTrackParams: function( promoElement ) {
var params = {};
if ( promoElement.length > 0 ) {
params = {
'id': typeof $( promoElement ).data( 'gtm-id' ) !== 'undefined' ? $( promoElement ).data( 'gtm-id' ) : '',
'name': typeof $( promoElement ).data( 'gtm-name' ) ? $( promoElement ).data( 'gtm-name' ) : '',
'creative': typeof $( promoElement ).data( 'gtm-creative' ) ? $( promoElement ).data( 'gtm-creative' ) : '',
'position': typeof $( promoElement ).data( 'gtm-position' ) ? $( promoElement ).data( 'gtm-position' ) : ''
};
}
return params;
},
trackProductImpressions: function( element, products ) {
var scope = this.__getScopeByElement( element );
if ( products.length > 0 ) {
scope.trackingParams = {
'event':'productImpressions',
'ecommerce':{
'currencyCode': scope.defaultCurrencyCode,
'impressions': products
}
};
view.setDataLayer( scope );
}
},
trackFindHotels: function (element) {
var scope = this.__getScopeByElement(element),
ratesElements = $(scope.root).find(scope.availabilityLink),
data = $(element).data(),
convertedPrice = '',
price = '',
currency = '';
if (ratesElements.length > 0) {
$.each(ratesElements, function (key, element) {
var tempPrice = $(element).data('gtm-price') ? parseFloat($(element).data('gtm-price')) : 0.00;
if (tempPrice && (!convertedPrice || tempPrice < convertedPrice )) {
convertedPrice = tempPrice;
price = $(element).data('gtm-current-price') ? parseFloat($(element).data('gtm-current-price')) : 0.00;
currency = $(element).data('gtm-currency') ? $(element).data('gtm-currency') : '';
}
});
}
scope.trackingParams = {
'event': 'General Availability',
'eventAction':
'Find Hotels'
+ '|' + (data.gtmProfileId ? data.gtmProfileId : '')
+ '|' + Date.now(),
'eventLabel':
(data.gtmStartDateTimestamp ? data.gtmStartDateTimestamp : '')
+ '|' + (data.gtmEndDateTimestamp ? data.gtmEndDateTimestamp : '')
+ '|' + (data.gtmTotalAdults ? data.gtmTotalAdults : '0')
+ '|' + (data.gtmTotalChildren ? data.gtmTotalChildren : '0')
+ '|' + (data.gtmTotalRooms ? data.gtmTotalRooms : '0')
+ '|' + (data.gtmContext ? data.gtmContext : '')
+ '|' + currency
+ '|' + price
+ '|' + (data.gtmSearchTermType ? data.gtmSearchTermType : '')
+ '|' + (data.gtmSearchTermObjectId ? data.gtmSearchTermObjectId : '')
};
view.setDataLayer(scope);
},
trackFilterFindHotels: function (element) {
var scope = this.__getScopeByElement(element),
data = $(element).data();
scope.trackingParams = {
'event': 'Find Hotel Search',
'eventAction':
'Set Filter'
+ '|' + (data.gtmProfileId ? data.gtmProfileId : '')
+ '|' + Date.now(),
'eventLabel':
(data.gtmFilterValueId ? data.gtmFilterValueId : '')
+ '|' + (data.gtmMultipleFilters ? data.gtmMultipleFilters : '')
+ '|' + (data.gtmSortOrder ? data.gtmSortOrder : '')
+ '|' + (data.gtmCurrency ? data.gtmCurrency : '')
};
view.setDataLayer(scope);
},
clickAvailabilityLink: function (scope, element) {
if ($(element).hasClass('is-open')) {
return; //ignore when click to hide button
}
var data = $(element).data();
scope.trackingParams = {
'event': 'Availability Request',
'eventAction':
(data.gtmButtonName ? data.gtmButtonName : '')
+ '|' + (data.gtmProfileId ? data.gtmProfileId : '')
+ '|' + Date.now()
+ '|' + (data.gtmHotelCode ? data.gtmHotelCode : ''),
'eventLabel':
(data.gtmStartDateTimestamp ? data.gtmStartDateTimestamp : '')
+ '|' + (data.gtmEndDateTimestamp ? data.gtmEndDateTimestamp : '')
+ '|' + (data.gtmTotalAdults ? data.gtmTotalAdults : '0')
+ '|' + (data.gtmTotalChildren ? data.gtmTotalChildren : '0')
+ '|' + (data.gtmTotalRooms ? data.gtmTotalRooms : '0')
+ '|' + (data.gtmContext ? data.gtmContext : '')
+ '|' + (data.gtmCurrency ? data.gtmCurrency : '')
+ '|' + (data.gtmCurrentPrice ? data.gtmCurrentPrice : '')
+ '|' + (data.gtmPromoCode ? data.gtmPromoCode : '')
+ '|' + (data.gtmRateCode ? data.gtmRateCode : '')
+ '|' + (data.gtmSearchTermType ? data.gtmSearchTermType : '')
+ '|' + (data.gtmSearchTermObjectId ? data.gtmSearchTermObjectId : '')
+ '|' + (data.gtmRoomCategory ? data.gtmRoomCategory : '')
+ '|' + (data.gtmSpecialOfferId ? data.gtmSpecialOfferId : '')
+ '|' + (data.gtmSortOrder ? data.gtmSortOrder : '')
+ '|' + (data.gtmAvailabilityType ? data.gtmAvailabilityType : '')
};
view.setDataLayer(scope);
},
isEntryPoint: function ( scope ) {
return scope.referrer.indexOf( location.hostname ) === -1;
},
availabilityQuerySetReadyToSend: function ( scope, element ) {
if (scope.isSetAvailabilityQueryReadyToSend || $(element).hasClass('is-open')) {
return; //ignore when click to hide button
}
$.ajax({url: '/availability_query/ready_to_send', type: 'POST'});
scope.isSetAvailabilityQueryReadyToSend = true;
}
};
} )
.attachEvents(function (scope) {
return {
clickProductLink: ['click', scope.root, scope.productLink],
clickAvailabilityLink: ['click', scope.root, scope.availabilityLink],
clickPromoLink: ['click', scope.root, scope.promoLink],
availabilityQuerySetReadyToSend: ['click', scope.root, scope.availabilityQueryReadyToSend]
};
})
.view( function() {
return {
setDataLayer: function( scope ) {
if ( typeof dataLayer !== 'undefined' ) {
dataLayer.push( scope.trackingParams );
}
}
};
} );
luana.factory( 'fullscreen-gallery' ).defineElements( {
items: '[gallery-item]',
next: '[gallery-next]',
prev: '[gallery-prev]'
} ).describeScope( {
current: 0,
count: 0,
lastUpdate: ( new Date() ).getTime(),
scrollTime: 12000,
counter: 1,
isEventPushed: false,
autoplay: true,
youtubePlayers: []
} ).controller( function( view ){
return {
initialize: function(){
this.update();
},
eachScope: function( scope ){
scope.count = scope.elements.items.length;
var ths = this;
if (typeof(YT) === 'undefined') {
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
window.onYouTubeIframeAPIReady = function() {
$( scope.elements.items ).each(function(i) {
if ($(this).find('iframe').length) {
var player;
var iframeId = $(this).find('iframe').attr('id');
player = new YT.Player(iframeId, {
events : {
'onReady' : onPlayerReady,
'onStateChange' : onPlayerStateChange
}
});
function onPlayerReady(e) {
if (i == 0) {
e.target.playVideo();
scope.autoplay = false;
}
}
function onPlayerStateChange(e) {
if (e.target.getPlayerState() === 0) {
scope.autoplay = true;
ths.move( scope, 1 );
}
if (e.target.getPlayerState() === 1) {
scope.autoplay = false;
}
}
scope.youtubePlayers[i] = player;
}
});
};
},
update: function(){
var currentTime;
this.__throughScopes( function( index, scope ){
this.__setInterval( function() {
currentTime = ( new Date() ).getTime();
if( currentTime - scope.lastUpdate >= scope.scrollTime && scope.autoplay){
this.move( scope, 1 );
scope.counter++;
if ( scope.counter <= scope.count ) {
this.trackPromoImpressions( scope );
}
}
}.bind( this ), 1000);
this.trackPromoImpressions( scope );
}.bind( this ) );
},
move: function( scope, direction ){
if (
typeof scope.youtubePlayers[scope.current] !== 'undefined'
&& typeof scope.youtubePlayers[scope.current].stopVideo !== 'undefined'
) {
scope.youtubePlayers[scope.current].stopVideo();
scope.autoplay = true;
}
view.hide( scope, scope.current );
scope.current += direction;
if (scope.current >= scope.count) {
scope.current = 0;
} else if (scope.current < 0) {
scope.current = scope.count - 1;
}
view.show( scope, scope.current );
scope.lastUpdate = ( new Date() ).getTime();
if (
typeof scope.youtubePlayers[scope.current] !== 'undefined'
&& typeof scope.youtubePlayers[scope.current].playVideo !== 'undefined'
) {
scope.youtubePlayers[scope.current].playVideo();
scope.autoplay = false;
}
},
prev: function( scope ){
this.move( scope, -1 );
this.trackPromoImpressions( scope );
},
next: function( scope ){
this.move( scope, 1 );
this.trackPromoImpressions( scope );
},
swipeRight: function( scope ){
this.prev( scope );
},
swipeLeft: function( scope ){
this.next( scope );
},
trackPromoImpressions: function ( scope ) {
var element = $( scope.elements.items[scope.current] ),
pushEvent = false;
if (luana.hasModule('gtm-analytics')) {
luana.module('gtm-analytics').trackPromo( element, true );
}
}
}
} ).attachEvents(function (scope) {
return {
prev: ['click', scope.elements.prev, true],
next: ['click', scope.elements.next, true],
swipeRight: ['swiperight', scope.root, true],
swipeLeft: ['swipeleft', scope.root, true]
}
} ).view( function(){
return {
show: function( scope, index ){
$(scope.elements.items[index]).css({'opacity':'1', 'visibility':'visible'});
},
hide: function( scope, index ){
$(scope.elements.items[index]).css({'opacity':'.7', 'visibility':'hidden'});
}
}
} );
