
{
  var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=k.style.overflow,e.style.background="",e.style.overflow=k.style.overflow="hidden",k.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),k.style.overflow=t,k.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function f(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function d(e,t,n){for(var i=0,a=e.length;i<a;i++)t.call(n,e[i],i)}function v(e,t){return e.hasAttribute(t)}function h(e,t){return e.getAttribute(t)}function p(e){return void 0!==e.item}function m(e,t){if(e=p(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function y(e,t){e=p(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function g(e){e.style.cssText=""}function b(e){for(var t=[],n=0,i=e.length;n<i;n++)t.push(e[n]);return t}function x(e){v(e,"hidden")||m(e,{hidden:""})}function A(e){v(e,"hidden")&&y(e,"hidden")}function T(e){return e.offsetWidth>0&&e.offsetHeight>0}function w(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function C(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function E(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&H;e.addEventListener(n,t[n],i)}}function O(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;e.removeEventListener(n,t[n],i)}}function N(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function D(e,t,n,i,a,r,o){function s(){r-=l,u+=f,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),f=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var k=document.documentElement,M="classList"in document.createElement("_"),P=M?function(e,t){return e.classList.contains(t)}:function(e,t){return e.className.indexOf(t)>=0},I=M?function(e,t){P(e,t)||e.classList.add(t)}:function(e,t){P(e,t)||(e.className+=" "+t)},S=M?function(e,t){P(e,t)&&e.classList.remove(t)}:function(e,t){P(e,t)&&(e.className=e.className.replace(t,""))},W=!1;try{var L=Object.defineProperty({},"passive",{get:function(){W=!0}});window.addEventListener("test",null,L)}catch(e){}var H=!!W&&{passive:!0},R=window,B=R.requestAnimationFrame||R.webkitRequestAnimationFrame||R.mozRequestAnimationFrame||R.msRequestAnimationFrame||function(e){return setTimeout(e,16)},z=navigator.userAgent,q=!0,j={};try{j=localStorage,j.tnsApp&&j.tnsApp!==z&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){j.removeItem(e)}),j.tnsApp=z}catch(e){q=!1}q&&!localStorage&&(j={});var F=document,G=window,U={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},Q=t(j.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),q),X=t(j.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),q),V=t(j.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),q),Y=t(j.tTf)||n("tTf",w(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),q),K=t(j.tTDu)||n("tTDu",w(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),q),J=t(j.tTDe)||n("tTDe",w(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),q),_=t(j.tADu)||n("tADu",w(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),q),Z=t(j.tADe)||n("tADe",w(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),q),$=t(j.tTE)||n("tTE",C(K,"Transition"),q),ee=t(j.tAE)||n("tAE",C(_,"Animation"),q);V||(X=!1);var te=function(t){function n(){return G.innerWidth||F.documentElement.clientWidth||F.body.clientWidth}function a(e){return e.clientWidth||a(e.parentNode)}function r(e){var n=t[e];return!n&&Nt&&Ot.indexOf(e)>=0&&Nt.forEach(function(t){Et[t][e]&&(n=!0)}),n}function o(e,n){n=n?n:kt;var i,a={slideBy:"page",edgePadding:!1};if(!ft&&e in a)i=a[e];else if("items"===e&&o("fixedWidth"))i=Math.floor(Mt/(o("fixedWidth")+o("gutter")));else if("autoHeight"===e&&"outer"===Bt)i=!0;else if(i=t[e],Nt&&Ot.indexOf(e)>=0)for(var r=0,s=Nt.length;r<s;r++){var l=Nt[r];if(!(n>=l))break;e in Et[l]&&(i=Et[l][e])}return"slideBy"===e&&"page"===i&&(i=o("items")),i}function p(e){return Q?Q+"("+100*e+"% / "+_t+")":100*e/_t+"%"}function w(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(Mt%(n+t)+t)/2+"px":gt?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=gt?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function C(e,t,n){return e?(e+t)*_t+"px":Q?Q+"("+100*_t+"% / "+n+")":100*_t/n+"%"}function k(e,t,n){var i="";if(gt){if(i="width:",e)i+=e+t+"px";else{var a=ft?_t:n;i+=Q?Q+"(100% / "+a+")":100/a+"%"}i+=xn+";"}return i}function M(e){var t="";if(e!==!1){t=(gt?"padding-":"margin-")+(gt?"right":"bottom")+": "+e+"px;"}return t}function W(e){B(function(){L(e||G.event)})}function L(e){if(yt){kt=n(),"outer"===Bt&&vn.emit("outerResized",tt(e));var t=Dt,i=rn,r=Ht,s=bn;if(jt&&(Mt=a(bt)),mt=a(xt),Nt&&H(),t!==Dt||jt){var u=Ft,f=Xt,d=jt,v=qt,h=zt,p=yn;if(Ht=o("items"),Rt=o("slideBy"),yn=o("disable"),bn=!!yn||!!gn&&Ct<=Ht,Ht!==r&&(ln=_t-Ht,xi()),yn!==p&&q(yn),bn!==s&&(bn&&(rn=ft?Jt:0),R()),t!==Dt&&(Gt=o("speed"),qt=o("edgePadding"),zt=o("gutter"),jt=o("fixedWidth"),yn||jt===d||Ae(),(Xt=o("autoHeight"))!==f&&(Xt||(xt.style.height=""))),Ft=!bn&&o("arrowKeys"),Ft!==u&&(Ft?E(F,En):O(F,En)),Dn){var m=jn,y=Fn;jn=!bn&&o("controls"),Fn=o("controlsText"),jn!==m&&(jn?A(Gn):x(Gn)),Fn!==y&&(Rn.innerHTML=Fn[0],Bn.innerHTML=Fn[1])}if(kn){var g=Qn;Qn=!bn&&o("nav"),Qn!==g&&(Qn?(A(Xn),et()):x(Xn))}if(In){var b=yi;yi=!bn&&o("touch"),yi!==b&&ft&&(yi?E(At,On):O(At,On))}if(Sn){var T=gi;gi=!bn&&o("mouseDrag"),gi!==T&&ft&&(gi?E(At,Nn):O(At,Nn))}if(Pn){var N=ai,D=li,P=ui,I=si;if(bn?ai=li=ui=!1:(ai=o("autoplay"),ai?(li=o("autoplayHoverPause"),ui=o("autoplayResetOnVisibility")):li=ui=!1),si=o("autoplayText"),ri=o("autoplayTimeout"),ai!==N&&(ai?(ci&&A(ci),ei||ni||Se()):(ci&&x(ci),ei&&We())),li!==D&&(li?E(At,wn):O(At,wn)),ui!==P&&(ui?E(F,Cn):O(F,Cn)),ci&&si!==I){var S=ai?1:0,W=ci.innerHTML,L=W.length-I[S].length;W.substring(L)===I[S]&&(ci.innerHTML=W.substring(0,L)+si[S])}}if(!V){if(bn||qt===v&&zt===h||(xt.style.cssText=w(qt,zt,jt)),ft&&gt&&(jt!==d||zt!==h||Ht!==r)&&(At.style.width=C(jt,zt,Ht)),gt&&(Ht!==r||zt!==h||jt!=d)){var B=k(jt,zt,Ht)+M(zt);Vt.removeRule(c(Vt)-1),l(Vt,"#"+mn+" > .tns-item",B,c(Vt))}jt||rn!==i||we(0)}rn!==i&&(vn.emit("indexChanged",tt()),we(0),on=rn),Ht!==r&&(oe(),de(),navigator.msMaxTouchPoints&&ue())}gt||yn||(ce(),Ze(),Ae()),z(!0),!Xt&&ft||yn||ae()}}function H(){Dt=0,Nt.forEach(function(e,t){kt>=e&&(Dt=t+1)})}function R(){var e="tns-transparent";if(bn){if(!Wt){if(qt&&(xt.style.margin="0px"),Jt)for(var t=Jt;t--;)ft&&I(wt[t],e),I(wt[_t-t-1],e);Wt=!0}}else if(Wt){if(qt&&!jt&&V&&(xt.style.margin=""),Jt)for(var t=Jt;t--;)ft&&S(wt[t],e),S(wt[_t-t-1],e);Wt=!1}}function z(e){jt&&qt&&(bn||Mt<=jt+zt?"0px"!==xt.style.margin&&(xt.style.margin="0px"):e&&(xt.style.cssText=w(qt,zt,jt)))}function q(e){var t=wt.length;if(e){if(Vt.disabled=!0,At.className=At.className.replace(pn.substring(1),""),g(At),Qt)for(var n=Jt;n--;)ft&&x(wt[n]),x(wt[t-n-1]);if(gt&&ft||g(xt),!ft)for(var i=rn,a=rn+Ct;i<a;i++){var r=wt[i];g(r),S(r,dt),S(r,pt)}}else{if(Vt.disabled=!1,At.className+=pn,gt||ce(),Ae(),Qt)for(var n=Jt;n--;)ft&&A(wt[n]),A(wt[t-n-1]);if(!ft)for(var i=rn,a=rn+Ct;i<a;i++){var r=wt[i],o=i<rn+Ht?dt:pt;r.style.left=100*(i-rn)/Ht+"%",I(r,o)}}}function j(){if(Yt&&!yn){var e=rn,t=rn+Ht;for(qt&&(e-=1,t+=1);e<t;e++)d(wt[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[$]=function(e){e.stopPropagation()},E(e,t),P(e,"loaded")||(e.src=h(e,"data-src"),I(e,"loaded"))})}}function ne(e){var t=Xe(e);I(t,Ln),O(t,Hn)}function ie(e,t){for(var n=[],i=e,a=e+t;i<a;i++)d(wt[i].querySelectorAll("img"),function(e){n.push(e)});return n}function ae(){var e=Xt?ie(rn,Ht):ie(Jt,Ct);B(function(){re(e,le)})}function re(e,t){return Lt?t():(e.forEach(function(t,n){P(t,Ln)&&e.splice(n,1)}),e.length?void B(function(){re(e,t)}):t())}function oe(){j(),fe(),ge(),et(),ve()}function se(e,t){for(var n=[],i=e,a=e+t;i<a;i++)n.push(wt[i].offsetHeight);return Math.max.apply(null,n)}function le(){var e=Xt?se(rn,Ht):se(Jt,Ct);xt.style.height!==e&&(K&&be(Gt),xt.style.height=e+"px")}function ce(){It=[0];for(var e,t=wt[0].getBoundingClientRect().top,n=1;n<_t;n++)e=wt[n].getBoundingClientRect().top,It.push(e-t)}function ue(){bt.style.msScrollSnapPointsX="snapInterval(0%, "+100/Ht+"%)"}function fe(){for(var e=rn+Math.min(Ct,Ht),t=_t;t--;){var n=wt[t];t>=rn&&t<e?v(n,"tabindex")&&(m(n,{"aria-hidden":"false"}),y(n,["tabindex"]),I(n,Wn)):(v(n,"tabindex")||m(n,{"aria-hidden":"true",tabindex:"-1"}),P(n,Wn)&&S(n,Wn))}}function de(){if(!ft){for(var e=rn+Math.min(Ct,Ht),t=_t;t--;){var n=wt[t];t>=rn&&t<e?(I(n,"tns-moving"),n.style.left=100*(t-rn)/Ht+"%",I(n,dt),S(n,pt)):n.style.left&&(n.style.left="",I(n,pt),S(n,dt)),S(n,vt)}setTimeout(function(){d(wt,function(e){S(e,"tns-moving")})},300)}}function ve(){if(Qn&&(Jn=Kn!==-1?Kn:rn%Ct,Kn=-1,Jn!==_n)){var e=Un[_n],t=Un[Jn];m(e,{tabindex:"-1","aria-selected":"false"}),m(t,{tabindex:"0","aria-selected":"true"}),S(e,Zn),I(t,Zn)}}function he(e){return e.nodeName.toLowerCase()}function pe(e){return"button"===he(e)}function me(e){return"true"===e.getAttribute("aria-disabled")}function ye(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function ge(){if(jn&&!Ut&&!Qt){var e=zn?Rn.disabled:me(Rn),t=qn?Bn.disabled:me(Bn),n=rn===sn,i=!Ut&&rn===ln;n&&!e&&ye(zn,Rn,!0),!n&&e&&ye(zn,Rn,!1),i&&!t&&ye(qn,Bn,!0),!i&&t&&ye(qn,Bn,!1)}}function be(e,t){e=e?e/1e3+"s":"",t=t||At,t.style[K]=e,ft||(t.style[_]=e),gt||(xt.style[K]=e)}function xe(){var e;if(gt)if(jt)e=-(jt+zt)*rn+"px";else{var t=Y?_t:Ht;e=100*-rn/t+"%"}else e=-It[rn]+"px";return e}function Ae(e){e||(e=xe()),At.style[en]=tn+e+nn}function Te(e,t,n,i){for(var a=e,r=e+Ht;a<r;a++){var o=wt[a];i||(o.style.left=100*(a-rn)/Ht+"%"),K&&be(Gt,o),ht&&J&&(o.style[J]=o.style[Z]=ht*(a-e)/1e3+"s"),S(o,t),I(o,n),i&&Kt.push(o)}}function we(e,t){isNaN(e)&&(e=Gt),ei&&!T(At)&&(e=0),K&&be(e),Ai(e,t)}function Ce(e,t){$t&&xi(),(rn!==on||t)&&(vn.emit("indexChanged",tt()),vn.emit("transitionStart",tt()),ei&&e&&["click","keydown"].indexOf(e.type)>=0&&We(),fn=!0,we())}function Ee(e){return e.toLowerCase().replace(/-/g,"")}function Oe(e){if(ft||fn){if(vn.emit("transitionEnd",tt(e)),!ft&&Kt.length>0)for(var t=0;t<Ht;t++){var n=Kt[t];n.style.left="",K&&be(0,n),ht&&J&&(n.style[J]=n.style[Z]=""),S(n,vt),I(n,pt)}if(!e||!ft&&e.target.parentNode===At||e.target===At&&Ee(e.propertyName)===Ee(en)){if(!$t){var i=rn;xi(),rn!==i&&(vn.emit("indexChanged",tt()),K&&be(0),Ae())}Xt&&ae(),"inner"===Bt&&vn.emit("innerLoaded",tt()),fn=!1,_n=Jn,on=rn}}}function Ne(e,t){if(!bn)if("prev"===e)De(t,-1);else if("next"===e)De(t,1);else if(!fn){var n=rn%Ct,i=0;if(n<0&&(n+=Ct),"first"===e)i=-n;else if("last"===e)i=Ct-Ht-n;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%Ct;a<0&&(a+=Ct),i=a-n}rn+=i,rn%Ct!=on%Ct&&Ce(t)}}function De(e,t){if(!fn){var n;if(!t){e=e||G.event;for(var i=e.target||e.srcElement;i!==Gn&&[Rn,Bn].indexOf(i)<0;)i=i.parentNode;var a=[Rn,Bn].indexOf(i);a>=0&&(n=!0,t=0===a?-1:1)}if(Ut){if(rn===sn&&t===-1)return void Ne("last",e);if(rn===ln&&1===t)return void Ne(0,e)}t&&(rn+=Rt*t,Ce(n||e&&"keydown"===e.type?e:null))}}function ke(e){if(!fn){e=e||G.event;for(var t,n=e.target||e.srcElement;n!==Xn&&!v(n,"data-nav");)n=n.parentNode;v(n,"data-nav")&&(t=Kn=[].indexOf.call(Un,n),Ne(t,e))}}function Me(){$n=setInterval(function(){De(null,oi)},ri),ei=!0}function Pe(){clearInterval($n),ei=!1}function Ie(e,t){m(ci,{"data-action":e}),ci.innerHTML=fi[0]+e+fi[1]+t}function Se(){Me(),ci&&Ie("stop",si[1])}function We(){Pe(),ci&&Ie("start",si[0])}function Le(){ai&&!ei&&(Se(),ni=!1)}function He(){ei&&(We(),ni=!0)}function Re(){ei?(We(),ni=!0):(Se(),ni=!1)}function Be(){F.hidden?ei&&(Pe(),ii=!0):ii&&(Me(),ii=!1)}function ze(){ei&&(Pe(),ti=!0)}function qe(){ti&&(Me(),ti=!1)}function je(e){switch(e=e||G.event,e.keyCode){case U.LEFT:De(e,-1);break;case U.RIGHT:De(e,1)}}function Fe(e){switch(e=e||G.event,e.keyCode){case U.LEFT:case U.UP:case U.PAGEUP:Rn.disabled||De(e,-1);break;case U.RIGHT:case U.DOWN:case U.PAGEDOWN:Bn.disabled||De(e,1);break;case U.HOME:Ne(0,e);break;case U.END:Ne(Ct-1,e)}}function Ge(e){e.focus()}function Ue(e){function n(e){return t.navContainer?e:Vn[e]}var i=F.activeElement;if(v(i,"data-nav")){e=e||G.event;var a=e.keyCode,r=[].indexOf.call(Un,i),o=Vn.length,s=Vn.indexOf(r);switch(t.navContainer&&(o=Ct,s=r),a){case U.LEFT:case U.PAGEUP:s>0&&Ge(Un[n(s-1)]);break;case U.UP:case U.HOME:s>0&&Ge(Un[n(0)]);break;case U.RIGHT:case U.PAGEDOWN:s<o-1&&Ge(Un[n(s+1)]);break;case U.DOWN:case U.END:s<o-1&&Ge(Un[n(o-1)]);break;case U.ENTER:case U.SPACE:Kn=r,Ne(r,e)}}}function Qe(){we(0,At.scrollLeft()),on=rn}function Xe(e){return e.target||G.event.srcElement}function Ve(e){return e.type.indexOf("touch")>=0}function Ye(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Ke(e){if(!fn){e=e||G.event;var t;Ve(e)?(t=e.changedTouches[0],vn.emit("touchStart",tt(e))):(t=e,["img","a"].indexOf(he(Xe(t)))>=0&&Ye(t),vn.emit("dragStart",tt(e))),pi=parseInt(t.clientX),mi=parseInt(t.clientY),di=parseFloat(At.style[en].replace(tn,"").replace(nn,""))}}function Je(e){if(!fn&&null!==pi){e=e||G.event;var n=Ve(e)?e.changedTouches[0]:e;if(vi=parseInt(n.clientX)-pi,hi=parseInt(n.clientY)-mi,"?"===un&&(un=f(u(hi,vi),cn)===t.axis),un&&(Math.abs(vi)>5||Math.abs(hi)>5)){Ve(e)?vn.emit("touchMove",tt(e)):(bi||(bi=!0),vn.emit("dragMove",tt(e))),St||(St=!0);var i=di;if(gt)if(jt)i+=vi,i+="px";else{var a=Y?vi*Ht*100/(mt*_t):100*vi/mt;i+=a,i+="%"}else i+=hi,i+="px";Y&&be(0),At.style[en]=tn+i+nn}}}function _e(e){if(cn&&(un="?"),!fn)if(St){St=!1,e=e||G.event;var t;Ve(e)?(t=e.changedTouches[0],vn.emit("touchEnd",tt(e))):(t=e,vn.emit("dragEnd",tt(e))),vi=parseInt(t.clientX)-pi,hi=parseInt(t.clientY)-mi,pi=mi=null;var n=Boolean(gt?vi:hi);if(gt){var i=-vi*Ht/mt;i=vi>0?Math.floor(i):Math.ceil(i),rn+=i}else{var a=-(di+hi);if(a<=0)rn=sn;else if(a>=It[It.length-1])rn=ln;else{var r=0;do{r++,rn=hi<0?r+1:r}while(r<_t&&a>=It[r+1])}}if(Ce(e,n),bi){bi=!1;var o=Xe(e);E(o,{click:function e(t){Ye(t),O(o,{click:e})}})}}else pi=mi=null}function Ze(){xt.style.height=It[rn+Ht]-It[rn]+"px"}function $e(){Vn=[];for(var e=rn%Ct%Ht;e<Ct;)!Qt&&e+Ht>Ct&&(e=Ct-Ht),Vn.push(e),e+=Ht;(Qt&&Vn.length*Ht<Ct||!Qt&&Vn[0]>0)&&Vn.unshift(0)}function et(){Qn&&!Mn&&($e(),Vn!==Yn&&(d(Un,function(e,t){Vn.indexOf(t)<0?x(e):A(e)}),Yn=Vn))}function tt(e){return{container:At,slideItems:wt,navContainer:Xn,navItems:Un,controlsContainer:Gn,hasControls:Dn,prevButton:Rn,nextButton:Bn,items:Ht,slideBy:Rt,cloneCount:Jt,slideCount:Ct,slideCountNew:_t,index:rn,indexCached:on,navCurrentIndex:Jn,navCurrentIndexCached:_n,visibleNavIndexes:Vn,visibleNavIndexesCached:Yn,sheet:Vt,event:e||{}}}t=e({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1},t||{});for(var nt=G.console&&"function"==typeof G.console.warn,it=["container","controlsContainer","navContainer","autoplayButton"],at=it.length;at--;){var rt=it[at];if("string"==typeof t[rt]){var ot=F.querySelector(t[rt]);if(!ot||!ot.nodeName)return void(nt&&console.warn("Can't find",t[rt]));t[rt]=ot}}if(t.container.children&&t.container.children.length<1)return void(nt&&console.warn("No slides found in",t.container));if(t.responsive){var st={},lt=t.responsive;for(var ct in lt){var ut=lt[ct];st[ct]="number"==typeof ut?{items:ut}:ut}t.responsive=st,st=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var ft="carousel"===t.mode;if(!ft){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var dt="tns-fadeIn",vt="tns-fadeOut",ht=!1,pt=t.animateNormal||"tns-normal";$&&ee&&(dt=t.animateIn||dt,vt=t.animateOut||vt,ht=t.animateDelay||ht)}var mt,yt,gt="horizontal"===t.axis,bt=F.createElement("div"),xt=F.createElement("div"),At=t.container,Tt=At.parentNode,wt=At.children,Ct=wt.length,Et=t.responsive,Ot=[],Nt=!1,Dt=0,kt=n();if(t.fixedWidth)var Mt=a(Tt);if(Et){Nt=Object.keys(Et).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),Nt.forEach(function(e){Ot=Ot.concat(Object.keys(Et[e]))});var Pt=[];Ot.forEach(function(e){Pt.indexOf(e)<0&&Pt.push(e)}),Ot=Pt,H()}var It,St,Wt,Lt,Ht=o("items"),Rt="page"===o("slideBy")?Ht:o("slideBy"),Bt=t.nested,zt=o("gutter"),qt=o("edgePadding"),jt=o("fixedWidth"),Ft=o("arrowKeys"),Gt=o("speed"),Ut=t.rewind,Qt=!Ut&&t.loop,Xt=o("autoHeight"),Vt=s(),Yt=t.lazyload,Kt=[],Jt=Qt?2*Ct:0,_t=ft?Ct+2*Jt:Ct+Jt,Zt=!(!jt||Qt||qt),$t=!ft||!Qt,en=gt?"left":"top",tn="",nn="",an=o("startIndex"),rn=an?function(e){return e%=Ct,e<0&&(e+=Ct),e=Math.min(e,_t-Ht)}(an):ft?Jt:0,on=rn,sn=0,ln=_t-Ht,cn=t.swipeAngle,un=!cn||"?",fn=!1,dn=t.onInit,vn=new N,hn=At.id,pn=" tns-slider tns-"+t.mode,mn=At.id||i(),yn=o("disable"),gn=t.freezable,bn=!!yn||!!gn&&Ct<=Ht,xn="inner"===Bt?" !important":"",An={click:De,keydown:Fe},Tn={click:ke,keydown:Ue},wn={mouseover:ze,mouseout:qe},Cn={visibilitychange:Be},En={keydown:je},On={touchstart:Ke,touchmove:Je,touchend:_e,touchcancel:_e},Nn={mousedown:Ke,mousemove:Je,mouseup:_e,mouseleave:_e},Dn=r("controls"),kn=r("nav"),Mn=t.navAsThumbnails,Pn=r("autoplay"),In=r("touch"),Sn=r("mouseDrag"),Wn="tns-slide-active",Ln="tns-complete",Hn={load:ne,error:ne};if(Dn)var Rn,Bn,zn,qn,jn=o("controls"),Fn=o("controlsText"),Gn=t.controlsContainer;if(kn)var Un,Qn=o("nav"),Xn=t.navContainer,Vn=[],Yn=Vn,Kn=-1,Jn=rn%Ct,_n=Jn,Zn="tns-nav-active";if(Pn)var $n,ei,ti,ni,ii,ai=o("autoplay"),ri=o("autoplayTimeout"),oi="forward"===t.autoplayDirection?1:-1,si=o("autoplayText"),li=o("autoplayHoverPause"),ci=t.autoplayButton,ui=o("autoplayResetOnVisibility"),fi=["<span class='tns-visually-hidden'>"," animation</span>"];if(In||Sn)var di,vi,hi,pi=null,mi=null;if(In)var yi=o("touch");if(Sn)var gi=o("mouseDrag"),bi=!1;bn&&(jn=Qn=yi=gi=Ft=ai=li=ui=!1),Y&&(en=Y,tn="translate",tn+=gt?"X(":"Y(",nn=")"),function(){bt.appendChild(xt),Tt.insertBefore(bt,At),xt.appendChild(At),mt=a(xt);var e="tns-outer",n="tns-inner",i=r("gutter");if(ft?gt&&(r("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),bt.className=e,xt.className=n,xt.id=mn+"-iw",Xt&&(xt.className+=" tns-ah",xt.style[K]=Gt/1e3+"s"),""===At.id&&(At.id=mn),pn+=X?" tns-subpixel":" tns-no-subpixel",pn+=Q?" tns-calc":" tns-no-calc",ft&&(pn+=" tns-"+t.axis),At.className+=pn,ft&&$){var s={};s[$]=Oe,E(At,s)}e=n=null;for(var u=0;u<Ct;u++){var f=wt[u];f.id||(f.id=mn+"-item"+u),I(f,"tns-item"),!ft&&pt&&I(f,pt),m(f,{"aria-hidden":"true",tabindex:"-1"})}if(Qt||qt){for(var v=F.createDocumentFragment(),h=F.createDocumentFragment(),g=Jt;g--;){var A=g%Ct,T=wt[A].cloneNode(!0);if(y(T,"id"),h.insertBefore(T,h.firstChild),ft){var O=wt[Ct-1-A].cloneNode(!0);y(O,"id"),v.appendChild(O)}}At.insertBefore(v,At.firstChild),At.appendChild(h),wt=At.children}if(r("autoHeight")||!ft){var N=At.querySelectorAll("img");d(N,function(e){E(e,Hn);var t=e.src;e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",e.src=t}),B(function(){re(b(N),function(){Lt=!0})})}for(var D=rn,P=rn+Math.min(Ct,Ht);D<P;D++){var f=wt[D];m(f,{"aria-hidden":"false"}),y(f,["tabindex"]),I(f,Wn),ft||(f.style.left=100*(D-rn)/Ht+"%",I(f,dt),S(f,pt))}if(ft&&gt&&(X?(l(Vt,"#"+mn+" > .tns-item","font-size:"+G.getComputedStyle(wt[0]).fontSize+";",c(Vt)),l(Vt,"#"+mn,"font-size:0;",c(Vt))):d(wt,function(e,t){e.style.marginLeft=p(t)})),V){var H=w(t.edgePadding,t.gutter,t.fixedWidth);l(Vt,"#"+mn+"-iw",H,c(Vt)),ft&&gt&&(H="width:"+C(t.fixedWidth,t.gutter,t.items),l(Vt,"#"+mn,H,c(Vt))),(gt||t.gutter)&&(H=k(t.fixedWidth,t.gutter,t.items)+M(t.gutter),l(Vt,"#"+mn+" > .tns-item",H,c(Vt)))}else if(xt.style.cssText=w(qt,zt,jt),ft&&gt&&(At.style.width=C(jt,zt,Ht)),gt||zt){var H=k(jt,zt,Ht)+M(zt);l(Vt,"#"+mn+" > .tns-item",H,c(Vt))}if(gt||yn||(ce(),Ze()),Et&&V&&Nt.forEach(function(e){var t=Et[e],n="",i="",a="",s="",l=o("items",e),c=o("fixedWidth",e),u=o("edgePadding",e),f=o("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+mn+"-iw{"+w(u,f,c)+"}"),ft&&gt&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(a="#"+mn+"{width:"+C(c,f,l)+"}"),("fixedWidth"in t||r("fixedWidth")&&"gutter"in t||!ft&&"items"in t)&&(s+=k(c,f,l)),"gutter"in t&&(s+=M(f)),s.length>0&&(s="#"+mn+" > .tns-item{"+s+"}"),n=i+a+s,n.length>0&&Vt.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",Vt.cssRules.length)}),ft&&!yn&&Ae(),navigator.msMaxTouchPoints&&(I(bt,"ms-touch"),E(bt,{scroll:Qe}),ue()),kn){var U=ft?Jt:0;if(Xn)m(Xn,{"aria-label":"Carousel Pagination"}),Un=Xn.children,d(Un,function(e,t){m(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":wt[U+t].id})});else{for(var Y="",J=Mn?"":" hidden",D=0;D<Ct;D++)Y+='<button data-nav="'+D+'" tabindex="-1" aria-selected="false" aria-controls="'+wt[U+D].id+J+'" type="button"></button>';Y='<div class="tns-nav" aria-label="Carousel Pagination">'+Y+"</div>",bt.insertAdjacentHTML("afterbegin",Y),Xn=bt.querySelector(".tns-nav"),Un=Xn.children}if(et(),K){var _=K.substring(0,K.length-18).toLowerCase(),H="transition: all "+Gt/1e3+"s";_&&(H="-"+_+"-"+H),l(Vt,"[aria-controls^="+mn+"-item]",H,c(Vt))}m(Un[Jn],{tabindex:"0","aria-selected":"true"}),I(Un[Jn],Zn),E(Xn,Tn),Qn||x(Xn)}if(Pn){var Z=ai?"stop":"start";ci?m(ci,{"data-action":Z}):t.autoplayButtonOutput&&(xt.insertAdjacentHTML("beforebegin",'<button data-action="'+Z+'" type="button">'+fi[0]+Z+fi[1]+si[0]+"</button>"),ci=bt.querySelector("[data-action]")),ci&&E(ci,{click:Re}),ai?(Se(),li&&E(At,wn),ui&&E(At,Cn)):ci&&x(ci)}Dn&&(Gn?(Rn=Gn.children[0],Bn=Gn.children[1],m(Gn,{"aria-label":"Carousel Navigation",tabindex:"0"}),m(Rn,{"data-controls":"prev"}),m(Bn,{"data-controls":"next"}),m(Gn.children,{"aria-controls":mn,tabindex:"-1"})):(bt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+mn+'" type="button">'+Fn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+mn+'" type="button">'+Fn[1]+"</button></div>"),Gn=bt.querySelector(".tns-controls"),Rn=Gn.children[0],Bn=Gn.children[1]),zn=pe(Rn),qn=pe(Bn),ge(),E(Gn,An),jn||x(Gn)),yi&&E(At,On),gi&&E(At,Nn),Ft&&E(F,En),"inner"===Bt?vn.on("outerResized",function(){L(),vn.emit("innerLoaded",tt())}):E(G,{resize:W}),"outer"===Bt?vn.on("innerLoaded",ae):!Xt&&ft||yn||ae(),j(),R(),z(),vn.on("indexChanged",oe),"function"==typeof dn&&dn(tt()),"inner"===Bt&&vn.emit("innerLoaded",tt()),yn&&q(!0),yt=!0}();var xi=function(){return Qt?function(){var e=sn,t=ln;if(ft)if(e+=Rt,t-=Rt,qt)e+=1,t-=1;else if(jt){var n=zt?zt:0;Mt%(jt+n)>n&&(t-=1)}if(rn>t)for(;rn>=e+Ct;)rn-=Ct;else if(rn<e)for(;rn<=t-Ct;)rn+=Ct}:function(){rn=Math.max(sn,Math.min(ln,rn))}}(),Ai=function(){return ft?function(e,t){t||(t=xe()),Zt&&rn===ln&&(t=-((jt+zt)*_t-mt)+"px"),K||!e?(Ae(t),e&&T(At)||Oe()):D(At,en,tn,nn,t,Gt,Oe),gt||Ze()}:function(e){Kt=[];var t={};t[$]=t[ee]=Oe,O(wt[on],t),E(wt[rn],t),Te(on,dt,vt,!0),Te(rn,pt,dt),$&&ee&&e||Oe()}}();return{getInfo:tt,events:vn,goTo:Ne,play:Le,pause:He,isOn:yt,updateSliderHeight:le,rebuild:function(){return te(t)},destroy:function(){if(O(G,{resize:W}),O(F,En),Vt.disabled=!0,Qt)for(var e=Jt;e--;)ft&&wt[0].remove(),wt[wt.length-1].remove();var n=["tns-item",Wn];ft||(n=n.concat("tns-normal",dt));for(var i=Ct;i--;){var a=wt[i];a.id.indexOf(mn+"-item")>=0&&(a.id=""),n.forEach(function(e){S(a,e)})}if(y(wt,["style","aria-hidden","tabindex"]),wt=mn=Ct=_t=Jt=null,jn&&(O(Gn,An),t.controlsContainer&&(y(Gn,["aria-label","tabindex"]),y(Gn.children,["aria-controls","aria-disabled","tabindex"])),Gn=Rn=Bn=null),Qn&&(O(Xn,Tn),t.navContainer&&(y(Xn,["aria-label"]),y(Un,["aria-selected","aria-controls","tabindex"])),Xn=Un=null),ai&&(clearInterval($n),ci&&O(ci,{click:Re}),O(At,wn),O(At,Cn),t.autoplayButton&&y(ci,["data-action"])),At.id=hn||"",At.className=At.className.replace(pn,""),g(At),ft&&$){var r={};r[$]=Oe,O(At,r)}O(At,On),O(At,Nn),Tt.insertBefore(At,bt),bt.remove(),bt=xt=At=rn=on=Ht=Rt=Jn=_n=Dn=Vn=Yn=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=yt=!1}}};return te}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

  
}
function tinySlider() {
  if (window.innerWidth > 513) {
    
    if ( typeof slider === 'undefined') {
      
      if (document.querySelector('.logo-gallery')) {
        const slider = tns({
          container: '.logo-gallery',
          items: 5,
          slideBy: '1',
          autoplay: true,
          controls: true,
          // gutter: 16,
          nav: false
        }),
          next = document.getElementById('nextS'),
          prev = document.getElementById('prevS');
      
        slider.play();
        prev.parentElement.addEventListener('click', e => {
          if (e.target===prev) {
            slider.goTo('prev');
          } else if (e.target === next) {
            slider.goTo('next');
          }
        })
      }
    }
    

  }
}
tinySlider()
function scaleHeight(itemClass, factor) {
  const element = document.querySelector('.' + itemClass);
  if (!element) {
    return
  }
  let width = window.getComputedStyle(element).getPropertyValue("width"),
    height = (parseFloat(width, 10) * factor) + 'px';
  element.parentElement.style.setProperty("--item-height", height)
}
function scaleHeightM(itemClass, factor = 1) {
  const element = document.querySelector('.' + itemClass),
    elements = [...document.getElementsByClassName(itemClass)];
  
  if (!element) {
    return
  }

  let width = window.getComputedStyle(element).getPropertyValue("width"),
    height = (parseFloat(width, 10) * factor) + 'px';

  elements.forEach(item => {
    item.style.setProperty("--item-height", height)
  })
}
scaleHeight('features-gallery__item', 2)
scaleHeight('features-gallery__item--subcat', 1)
if (window.innerWidth < 513) {

  scaleHeight('features-gallery__item', 1.4)
  scaleHeight('features-gallery__item--subcat', 1)
}
// scaleHeight('post', 1.2)
scaleHeightM('features-gallery__logo')
scaleHeightM('post__fig', .6)
window.addEventListener('resize', e => {
  scaleHeight('features-gallery__item', 2)
  scaleHeight('features-gallery__item--subcat', 1)
  if (window.innerWidth < 513) {

    scaleHeight('features-gallery__item', 1.4)
    scaleHeight('features-gallery__item--subcat', 1)
  }
  // scaleHeight('post', 1.2)
  scaleHeightM('features-gallery__logo')
  scaleHeightM('post__fig', .6)

  scaleBtnWidth('navTrigger', 1)
  if (window.innerWidth < 513) {

    scaleBtnWidth('chatTrigger', 1)
  }
  placeholder();
  // tinySlider()
})

function scaleBtnWidth(itemId, factor) {
  const item = document.getElementById(itemId);
  if (!item) {
    return
  }
  const height = window.getComputedStyle(item).getPropertyValue("height"),
    width = (parseFloat(height, 10) * factor) + 'px';
  // item.style.width = width;
  item.style.setProperty("--btn-width", width)

}
scaleBtnWidth('navTrigger', 1)
if (window.innerWidth < 513) {

  scaleBtnWidth('chatTrigger', 1)
}

function navBarMobileDisplay() {
  const trigger = document.getElementById('navTrigger'),
    nav = document.getElementById('mainNav'),
    icon = document.getElementById('')

  trigger.addEventListener('click', e => {
    const icon = document.querySelector('.menu-icon')
    console.log(e.target, icon)
    icon.classList.toggle('menu-icon--active')
    nav.classList.toggle('navbar--active')
  })

}
navBarMobileDisplay()
function placeholder() {
  // #searchInput
  if (window.innerWidth < 720) {
    const input = document.getElementById('searchInput')

    input.setAttribute('placeholder', 'Buscar Productos')


  }
}
placeholder();

function lightbox() {
  const lightbox = document.getElementById('lightbox')
  if (lightbox) {
    
    const images = [...lightbox.getElementsByTagName('img')],
      screen = images[0]
    let currentImage = screen.src,
    currentElement = images[1];

    lightbox.addEventListener('click', e => {
      const target = e.target,
        index = images.indexOf(target);
      if (index && screen!==target) {
        
        const elementTarget = images[index],
          newImage = elementTarget.src
        
        screen.src = newImage;
        currentImage = newImage;
        
        currentElement.parentElement.classList.toggle('lightbox__item--active')
        currentElement = elementTarget
        
        elementTarget.parentElement.classList.toggle('lightbox__item--active')
      }

    })
  }
}
lightbox()