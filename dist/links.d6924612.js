/*! lazysizes - v5.3.2 */!function(e){var t=function(e,t,a){var n,i;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},a)t in i||(i[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var o,s,r,l,c,d,u,f,m,y,z,h,v,g,p,C,b,A,E,_,w,M,N,L,x,W,S,B,T,F,R,D,k,H,O,P,$=t.documentElement,q=e.HTMLPictureElement,I="addEventListener",U="getAttribute",j=e[I].bind(e),G=e.setTimeout,J=e.requestAnimationFrame||G,K=e.requestIdleCallback,Q=/^picture$/i,V=["load","error","lazyincluded","_lazyloaded"],X={},Y=Array.prototype.forEach,Z=function(e,t){return X[t]||(X[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),X[t].test(e[U]("class")||"")&&X[t]},ee=function(e,t){Z(e,t)||e.setAttribute("class",(e[U]("class")||"").trim()+" "+t)},te=function(e,t){var a;(a=Z(e,t))&&e.setAttribute("class",(e[U]("class")||"").replace(a," "))},ae=function(e,t,a){var n=a?I:"removeEventListener";a&&ae(e,t),V.forEach((function(a){e[n](a,t)}))},ne=function(e,a,i,o,s){var r=t.createEvent("Event");return i||(i={}),i.instance=n,r.initEvent(a,!o,!s),r.detail=i,e.dispatchEvent(r),r},ie=function(t,a){var n;!q&&(n=e.picturefill||i.pf)?(a&&a.src&&!t[U]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},oe=function(e,t){return(getComputedStyle(e,null)||{})[t]},se=function(e,t,a){for(a=a||e.offsetWidth;a<i.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},re=function(){var e,a,n=[],i=[],o=n,s=function(){var t=o;for(o=n.length?i:n,e=!0,a=!1;t.length;)t.shift()();e=!1},r=function(n,i){e&&!i?n.apply(this,arguments):(o.push(n),a||(a=!0,(t.hidden?G:J)(s)))};return r._lsFlush=s,r}(),le=function(e,t){return t?function(){re(e)}:function(){var t=this,a=arguments;re((function(){e.apply(t,a)}))}},ce=function(e){var t,n,i=function(){t=null,e()},o=function(){var e=a.now()-n;e<99?G(o,99-e):(K||i)(i)};return function(){n=a.now(),t||(t=G(o,99))}},de=(b=/^img$/i,A=/^iframe$/i,E="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),_=0,w=0,M=-1,N=function(e){w--,(!e||w<0||!e.target)&&(w=0)},L=function(e){return null==C&&(C="hidden"==oe(t.body,"visibility")),C||!("hidden"==oe(e.parentNode,"visibility")&&"hidden"==oe(e,"visibility"))},x=function(e,a){var n,i=e,o=L(e);for(h-=a,p+=a,v-=a,g+=a;o&&(i=i.offsetParent)&&i!=t.body&&i!=$;)(o=(oe(i,"opacity")||1)>0)&&"visible"!=oe(i,"overflow")&&(n=i.getBoundingClientRect(),o=g>n.left&&v<n.right&&p>n.top-1&&h<n.bottom+1);return o},W=function(){var e,a,o,s,r,l,u,m,b,A,N,W,S=n.elements;if((f=i.loadMode)&&w<8&&(e=S.length)){for(a=0,M++;a<e;a++)if(S[a]&&!S[a]._lazyRace)if(!E||n.prematureUnveil&&n.prematureUnveil(S[a]))k(S[a]);else if((m=S[a][U]("data-expand"))&&(l=1*m)||(l=_),A||(A=!i.expand||i.expand<1?$.clientHeight>500&&$.clientWidth>500?500:370:i.expand,n._defEx=A,N=A*i.expFactor,W=i.hFac,C=null,_<N&&w<1&&M>2&&f>2&&!t.hidden?(_=N,M=0):_=f>1&&M>1&&w<6?A:0),b!==l&&(y=innerWidth+l*W,z=innerHeight+l,u=-1*l,b=l),o=S[a].getBoundingClientRect(),(p=o.bottom)>=u&&(h=o.top)<=z&&(g=o.right)>=u*W&&(v=o.left)<=y&&(p||g||v||h)&&(i.loadHidden||L(S[a]))&&(d&&w<3&&!m&&(f<3||M<4)||x(S[a],l))){if(k(S[a]),r=!0,w>9)break}else!r&&d&&!s&&w<4&&M<4&&f>2&&(c[0]||i.preloadAfterLoad)&&(c[0]||!m&&(p||g||v||h||"auto"!=S[a][U](i.sizesAttr)))&&(s=c[0]||S[a]);s&&!r&&k(s)}},S=function(e){var t,n=0,o=i.throttleDelay,s=i.ricTimeout,r=function(){t=!1,n=a.now(),e()},l=K&&s>49?function(){K(r,{timeout:s}),s!==i.ricTimeout&&(s=i.ricTimeout)}:le((function(){G(r)}),!0);return function(e){var i;(e=!0===e)&&(s=33),t||(t=!0,(i=o-(a.now()-n))<0&&(i=0),e||i<9?l():G(l,i))}}(W),T=le(B=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(N(e),ee(t,i.loadedClass),te(t,i.loadingClass),ae(t,F),ne(t,"lazyloaded"))}),F=function(e){T({target:e.target})},R=function(e){var t,a=e[U](i.srcsetAttr);(t=i.customMedia[e[U]("data-media")||e[U]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},D=le((function(e,t,a,n,o){var s,r,l,c,d,f;(d=ne(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?ee(e,i.autosizesClass):e.setAttribute("sizes",n)),r=e[U](i.srcsetAttr),s=e[U](i.srcAttr),o&&(c=(l=e.parentNode)&&Q.test(l.nodeName||"")),f=t.firesLoad||"src"in e&&(r||s||c),d={target:e},ee(e,i.loadingClass),f&&(clearTimeout(u),u=G(N,2500),ae(e,F,!0)),c&&Y.call(l.getElementsByTagName("source"),R),r?e.setAttribute("srcset",r):s&&!c&&(A.test(e.nodeName)?function(e,t){var a=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)}(e,s):e.src=s),o&&(r||c)&&ie(e,{src:s})),e._lazyRace&&delete e._lazyRace,te(e,i.lazyClass),re((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&ee(e,i.fastLoadedClass),B(d),e._lazyCache=!0,G((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&w--}),!0)})),k=function(e){if(!e._lazyRace){var t,a=b.test(e.nodeName),n=a&&(e[U](i.sizesAttr)||e[U]("sizes")),o="auto"==n;(!o&&d||!a||!e[U]("src")&&!e.srcset||e.complete||Z(e,i.errorClass)||!Z(e,i.lazyClass))&&(t=ne(e,"lazyunveilread").detail,o&&ue.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,w++,D(e,t,o,n,a))}},H=ce((function(){i.loadMode=3,S()})),P=function(){d||(a.now()-m<999?G(P,999):(d=!0,i.loadMode=3,S(),j("scroll",O,!0)))},{_:function(){m=a.now(),n.elements=t.getElementsByClassName(i.lazyClass),c=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),j("scroll",S,!0),j("resize",S,!0),j("pageshow",(function(e){if(e.persisted){var a=t.querySelectorAll("."+i.loadingClass);a.length&&a.forEach&&J((function(){a.forEach((function(e){e.complete&&k(e)}))}))}})),e.MutationObserver?new MutationObserver(S).observe($,{childList:!0,subtree:!0,attributes:!0}):($[I]("DOMNodeInserted",S,!0),$[I]("DOMAttrModified",S,!0),setInterval(S,999)),j("hashchange",S,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[I](e,S,!0)})),/d$|^c/.test(t.readyState)?P():(j("load",P),t[I]("DOMContentLoaded",S),G(P,2e4)),n.elements.length?(W(),re._lsFlush()):S()},checkElems:S,unveil:k,_aLSL:O=function(){3==i.loadMode&&(i.loadMode=2),H()}}),ue=(s=le((function(e,t,a,n){var i,o,s;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),Q.test(t.nodeName||""))for(o=0,s=(i=t.getElementsByTagName("source")).length;o<s;o++)i[o].setAttribute("sizes",n);a.detail.dataAttr||ie(e,a.detail)})),r=function(e,t,a){var n,i=e.parentNode;i&&(a=se(e,i,a),(n=ne(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=n.detail.width)&&a!==e._lazysizesWidth&&s(e,i,n,a))},{_:function(){o=t.getElementsByClassName(i.autosizesClass),j("resize",l)},checkElems:l=ce((function(){var e,t=o.length;if(t)for(e=0;e<t;e++)r(o[e])})),updateElem:r}),fe=function(){!fe.i&&t.getElementsByClassName&&(fe.i=!0,ue._(),de._())};return G((function(){i.init&&fe()})),n={cfg:i,autoSizer:ue,loader:de,init:fe,uP:ie,aC:ee,rC:te,hC:Z,fire:ne,gW:se,rAF:re}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
//# sourceMappingURL=links.d6924612.js.map
