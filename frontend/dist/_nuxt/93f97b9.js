(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{316:function(t,e,r){var content=r(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("ab0e0992",content,!0,{sourceMap:!1})},330:function(t,e,r){"use strict";r.r(e);var c=r(362),n=r(239),o={components:{"media-handler":c.default,cross:n.a},props:{item:{type:Object,required:!0}},mounted:function(){console.log("on a bien recu la props item : ",this.item)},methods:{handleCloseClick:function(){$nuxt.$emit("close-viewer"),window.scrollTo(0,0)}}},d=(r(336),r(7)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"case-viewer-wrapper"},[r("div",{staticClass:"case-viewer-inner"},[r("div",{staticClass:"case-viewer-cross",on:{click:t.handleCloseClick}},[r("cross")],1),t._v(" "),r("section",{staticClass:"head"},[r("h2",{staticClass:"head-title"},[t._v(t._s(t.item.name))]),t._v(" "),t.item.content.cta?r("a",{staticClass:"head-cta",attrs:{target:"blank"}},[t._v("\n\n\t\t\t\t"+t._s(t.item.content.cta.wording)+"\n\n\t\t\t")]):t._e()]),t._v(" "),r("section",{staticClass:"cover-container"},[r("img",{staticClass:"cover-image",attrs:{src:"http://placehold.it/1840x1227",alt:"cover "+t.item.name}})]),t._v(" "),r("section",{staticClass:"content-container"},[r("div",{staticClass:"description-container"},t._l(t.item.content.description,(function(e,c,n){return r("p",{key:n,staticClass:"description-paragraph"},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])})),0),t._v(" "),r("div",{staticClass:"side-container"},[t._m(0),t._v(" "),r("div",{staticClass:"credits-container"},[r("div",{staticClass:"credits-year"},[r("p",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t\tyear:\n\t\t\t\t\t\t")]),t._v(" "),r("p",{staticClass:"info"},[r("span",{staticClass:"slash"},[t._v("/")]),t._v(t._s(t.item.year)+"\n\t\t\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"credits-type"},[r("p",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t\ttype:\n\t\t\t\t\t\t")]),t._v(" "),r("p",{staticClass:"info"},[r("span",{staticClass:"slash"},[t._v("/")]),t._v(t._s(t.item.content.credits.type)+"\n\t\t\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"credits-entities-container"},[r("p",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t\tcredits:\n\t\t\t\t\t\t")]),t._v(" "),t._l(t.item.content.credits.entities,(function(e,c,n){return r("div",{key:n,staticClass:"entity"},[r("span",{staticClass:"slash"},[t._v("/")]),t._v(" "),r("span",{staticClass:"info"},[t._v(t._s(e.name))]),t._v(" "),r("span",{staticClass:"which-is"},[t._v(t._s(e.whichIs))])])}))],2)])])]),t._v(" "),r("section",{staticClass:"lines-container"},t._l(t.item.content.medias.lines,(function(line,e,c){return r("div",{key:c,staticClass:"line"},t._l(line,(function(e,c,n){return r("media-handler",{key:n,staticClass:"line-media",attrs:{media:{from:"case",folder:t.item.id,assetName:e.assetName,extension:e.extension}}})})),1)})),0),t._v(" "),r("section",{staticClass:"bottom-container"},[r("media-handler",{staticClass:"bottom-media",attrs:{media:{from:"case",folder:t.item.id,assetName:t.item.content.medias.bottom.assetName,extension:t.item.content.medias.bottom.extension}}})],1),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"parallax-coontainer"},[e("img",{staticClass:"parallax-image",attrs:{src:"http://placehold.it/603x858",alt:"parallax"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"next-project"},[r("button",[t._v("Next Project")])])}],!1,null,"cd0c883a",null);e.default=component.exports},336:function(t,e,r){"use strict";r(316)},337:function(t,e,r){var c=r(38),n=r(67),o=r(68),d=r(69),l=r(70),v=r(71),f=r(72),m=r(73),w=r(74),h=r(75),y=r(76),x=r(77),k=r(78),_=r(79),C=r(80),G=r(81),j=r(82),A=r(83),P=r(84),Y=r(85),z=r(86),R=r(87),I=r(88),L=r(89),N=r(90),X=r(91),$=r(92),M=r(93),Z=r(94),B=r(95),E=r(96),H=r(97),J=r(98),O=r(99),U=r(100),T=r(101),D=r(102),F=r(103),K=r(104),Q=r(105),S=r(106),V=r(107),W=r(108),aa=r(109),ta=r(110),ea=r(111),ia=r(112),ra=r(113),ca=r(114),na=r(115),oa=r(116),sa=r(117),da=r(118),la=r(119),va=r(120),fa=r(121),pa=r(122),ma=r(123),wa=r(124),ha=r(125),ya=r(126),ua=r(127),xa=r(128),ga=r(129),ba=r(130),ka=r(131),_a=r(132),Ca=r(133),Ga=r(134),ja=r(135),Aa=r(136),Pa=r(137),Ya=c(!1),za=n(o),Ra=n(d,{hash:"?#iefix"}),qa=n(l),Ia=n(v),La=n(f),Na=n(m),Xa=n(w,{hash:"?#iefix"}),$a=n(h),Ma=n(y),Za=n(x),Ba=n(k),Ea=n(_,{hash:"?#iefix"}),Ha=n(C),Ja=n(G),Oa=n(j),Ua=n(A),Ta=n(P,{hash:"?#iefix"}),Da=n(Y),Fa=n(z),Ka=n(R),Qa=n(I),Sa=n(L,{hash:"?#iefix"}),Va=n(N),Wa=n(X),at=n($),tt=n(M),et=n(Z,{hash:"?#iefix"}),it=n(B),ct=n(E),nt=n(H),ot=n(J),st=n(O,{hash:"?#iefix"}),lt=n(U),vt=n(T),ft=n(D),pt=n(F),mt=n(K,{hash:"?#iefix"}),wt=n(Q),ht=n(S),yt=n(V),ut=n(W),xt=n(aa,{hash:"?#iefix"}),gt=n(ta),bt=n(ea),kt=n(ia),_t=n(ra),Ct=n(ca,{hash:"?#iefix"}),Gt=n(na),jt=n(oa),At=n(sa),Pt=n(da),Yt=n(la,{hash:"?#iefix"}),zt=n(va),Rt=n(fa),qt=n(pa),It=n(ma),Lt=n(wa,{hash:"?#iefix"}),Nt=n(ha),Xt=n(ya),$t=n(ua),Mt=n(xa),Zt=n(ga,{hash:"?#iefix"}),Bt=n(ba),Et=n(ka),Ht=n(_a),Jt=n(Ca),Ot=n(Ga,{hash:"?#iefix"}),Ut=n(ja),Tt=n(Aa),Dt=n(Pa);Ya.push([t.i,'a[data-v-cd0c883a],abbr[data-v-cd0c883a],acronym[data-v-cd0c883a],address[data-v-cd0c883a],applet[data-v-cd0c883a],article[data-v-cd0c883a],aside[data-v-cd0c883a],audio[data-v-cd0c883a],b[data-v-cd0c883a],big[data-v-cd0c883a],blockquote[data-v-cd0c883a],body[data-v-cd0c883a],canvas[data-v-cd0c883a],caption[data-v-cd0c883a],center[data-v-cd0c883a],cite[data-v-cd0c883a],code[data-v-cd0c883a],dd[data-v-cd0c883a],del[data-v-cd0c883a],details[data-v-cd0c883a],dfn[data-v-cd0c883a],div[data-v-cd0c883a],dl[data-v-cd0c883a],dt[data-v-cd0c883a],em[data-v-cd0c883a],embed[data-v-cd0c883a],fieldset[data-v-cd0c883a],figcaption[data-v-cd0c883a],figure[data-v-cd0c883a],footer[data-v-cd0c883a],form[data-v-cd0c883a],h1[data-v-cd0c883a],h2[data-v-cd0c883a],h3[data-v-cd0c883a],h4[data-v-cd0c883a],h5[data-v-cd0c883a],h6[data-v-cd0c883a],header[data-v-cd0c883a],hgroup[data-v-cd0c883a],html[data-v-cd0c883a],i[data-v-cd0c883a],iframe[data-v-cd0c883a],img[data-v-cd0c883a],ins[data-v-cd0c883a],kbd[data-v-cd0c883a],label[data-v-cd0c883a],legend[data-v-cd0c883a],li[data-v-cd0c883a],mark[data-v-cd0c883a],menu[data-v-cd0c883a],nav[data-v-cd0c883a],object[data-v-cd0c883a],ol[data-v-cd0c883a],output[data-v-cd0c883a],p[data-v-cd0c883a],pre[data-v-cd0c883a],q[data-v-cd0c883a],ruby[data-v-cd0c883a],s[data-v-cd0c883a],samp[data-v-cd0c883a],section[data-v-cd0c883a],small[data-v-cd0c883a],span[data-v-cd0c883a],strike[data-v-cd0c883a],strong[data-v-cd0c883a],sub[data-v-cd0c883a],summary[data-v-cd0c883a],sup[data-v-cd0c883a],table[data-v-cd0c883a],tbody[data-v-cd0c883a],td[data-v-cd0c883a],tfoot[data-v-cd0c883a],th[data-v-cd0c883a],thead[data-v-cd0c883a],time[data-v-cd0c883a],tr[data-v-cd0c883a],tt[data-v-cd0c883a],u[data-v-cd0c883a],ul[data-v-cd0c883a],var[data-v-cd0c883a],video[data-v-cd0c883a]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[data-v-cd0c883a],aside[data-v-cd0c883a],details[data-v-cd0c883a],figcaption[data-v-cd0c883a],figure[data-v-cd0c883a],footer[data-v-cd0c883a],header[data-v-cd0c883a],hgroup[data-v-cd0c883a],menu[data-v-cd0c883a],nav[data-v-cd0c883a],section[data-v-cd0c883a]{display:block}body[data-v-cd0c883a]{line-height:1;-ms-overflow-style:none;scrollbar-width:none}body[data-v-cd0c883a]::-webkit-scrollbar{display:none}ol[data-v-cd0c883a],ul[data-v-cd0c883a]{list-style:none}blockquote[data-v-cd0c883a],q[data-v-cd0c883a]{quotes:none}blockquote[data-v-cd0c883a]:after,blockquote[data-v-cd0c883a]:before,q[data-v-cd0c883a]:after,q[data-v-cd0c883a]:before{content:"";content:none}table[data-v-cd0c883a]{border-collapse:collapse;border-spacing:0}.no-scroll[data-v-cd0c883a]{overflow:hidden}@font-face{font-family:"PresicavRg";src:url('+za+');src:local("@/assets/fonts/presicav/PresicavRg-Bold"),url('+Ra+') format("embedded-opentype"),url('+qa+') format("woff2"),url('+Ia+') format("woff"),url('+La+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"PresicavLt";src:url('+Na+');src:local("@/assets/fonts/presicav/PresicavLt-Regular"),url('+Xa+') format("embedded-opentype"),url('+$a+') format("woff2"),url('+Ma+') format("woff"),url('+Za+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"PresicavHv";src:url('+Ba+');src:local("@/assets/fonts/presicav/PresicavHv-Regular"),url('+Ea+') format("embedded-opentype"),url('+Ha+') format("woff2"),url('+Ja+') format("woff"),url('+Oa+') format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"PresicavXl";src:url('+Ua+');src:local("@/assets/fonts/presicav/PresicavXl-Regular"),url('+Ta+') format("embedded-opentype"),url('+Da+') format("woff2"),url('+Fa+') format("woff"),url('+Ka+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"PresicavUl";src:url('+Qa+');src:local("@/assets/fonts/presicav/PresicavUl-Regular"),url('+Sa+') format("embedded-opentype"),url('+Va+') format("woff2"),url('+Wa+') format("woff"),url('+at+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"PresicavRg";src:url('+tt+');src:local("@/assets/fonts/presicav/PresicavRg-Regular"),url('+et+') format("embedded-opentype"),url('+it+') format("woff2"),url('+ct+') format("woff"),url('+nt+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+ot+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Medium"),url('+st+') format("embedded-opentype"),url('+lt+') format("woff2"),url('+vt+') format("woff"),url('+ft+') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+pt+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Bold"),url('+mt+') format("embedded-opentype"),url('+wt+') format("woff2"),url('+ht+') format("woff"),url('+yt+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+ut+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Italic"),url('+xt+') format("embedded-opentype"),url('+gt+') format("woff2"),url('+bt+') format("woff"),url('+kt+') format("truetype");font-weight:400;font-style:italic}@font-face{font-family:"AktivGrotesk";src:url('+_t+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-LightItalic"),url('+Ct+') format("embedded-opentype"),url('+Gt+') format("woff2"),url('+jt+') format("woff"),url('+At+') format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"AktivGrotesk";src:url('+Pt+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-MediumItalic"),url('+Yt+') format("embedded-opentype"),url('+zt+') format("woff2"),url('+Rt+') format("woff"),url('+qt+') format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"AktivGrotesk";src:url('+It+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Light"),url('+Lt+') format("embedded-opentype"),url('+Nt+') format("woff2"),url('+Xt+') format("woff"),url('+$t+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+Mt+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Regular"),url('+Zt+') format("embedded-opentype"),url('+Bt+') format("woff2"),url('+Et+') format("woff"),url('+Ht+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+Jt+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-BoldItalic"),url('+Ot+') format("embedded-opentype"),url('+Ut+') format("woff2"),url('+Tt+') format("woff"),url('+Dt+') format("truetype");font-weight:700;font-style:italic}.anim-shadow[data-v-cd0c883a]{will-change:box-shadow;-webkit-animation:anim-shadow-keyframes-data-v-cd0c883a 17s infinite;animation:anim-shadow-keyframes-data-v-cd0c883a 17s infinite}.anim-colors[data-v-cd0c883a]{-webkit-animation:anim-colors-keyframes-data-v-cd0c883a 14s infinite;animation:anim-colors-keyframes-data-v-cd0c883a 14s infinite}@-webkit-keyframes anim-colors-keyframes-data-v-cd0c883a{0%,to{color:var(--color-primary)}33%{color:var(--color-secondary)}66%{color:var(--color-ternary)}}@keyframes anim-colors-keyframes-data-v-cd0c883a{0%,to{color:var(--color-primary)}33%{color:var(--color-secondary)}66%{color:var(--color-ternary)}}@-webkit-keyframes anim-shadow-keyframes-data-v-cd0c883a{0%{box-shadow:inset 0 0 1vh 5px transparent,0 0 10vh 0 transparent}30%{box-shadow:inset 0 0 10vh 0 currentColor,0 0 10vh 5vh currentColor}to{box-shadow:inset 0 0 10vh 0 transparent,0 0 10vh 5vh transparent}}@keyframes anim-shadow-keyframes-data-v-cd0c883a{0%{box-shadow:inset 0 0 1vh 5px transparent,0 0 10vh 0 transparent}30%{box-shadow:inset 0 0 10vh 0 currentColor,0 0 10vh 5vh currentColor}to{box-shadow:inset 0 0 10vh 0 transparent,0 0 10vh 5vh transparent}}@-webkit-keyframes anim-particles-1-data-v-cd0c883a{0%,to{filter:blur(5px);transform:translate3d(40px,20px,0) rotate(1180deg) scale(.6)}30%,75%{filter:blur(0);transform:translate3d(-40px,-26.6666666667px,0) rotate(80deg) scale(.8)}20%,50%,90%{filter:blur(2px);transform:translateZ(0)}}@keyframes anim-particles-1-data-v-cd0c883a{0%,to{filter:blur(5px);transform:translate3d(40px,20px,0) rotate(1180deg) scale(.6)}30%,75%{filter:blur(0);transform:translate3d(-40px,-26.6666666667px,0) rotate(80deg) scale(.8)}20%,50%,90%{filter:blur(2px);transform:translateZ(0)}}@-webkit-keyframes anim-particles-2-data-v-cd0c883a{0%,to{filter:blur(5px);transform:translate3d(-160px,-53.3333333333px,0) rotate(-580deg) scale(1.3)}30%,75%{filter:blur(0);transform:translate3d(112px,44.4444444444px,0) rotate(200deg) scale(.5)}20%,50%,90%{filter:blur(2px);transform:translateZ(0)}}@keyframes anim-particles-2-data-v-cd0c883a{0%,to{filter:blur(5px);transform:translate3d(-160px,-53.3333333333px,0) rotate(-580deg) scale(1.3)}30%,75%{filter:blur(0);transform:translate3d(112px,44.4444444444px,0) rotate(200deg) scale(.5)}20%,50%,90%{filter:blur(2px);transform:translateZ(0)}}.transition-description-y-down-enter-active[data-v-cd0c883a],.transition-description-y-down-leave-active[data-v-cd0c883a]{transform:translateY(0);opacity:1;will-change:transform,opacity}.transition-description-y-down-enter-active[data-v-cd0c883a]{transition:transform 1.35s,opacity 2.5s}.transition-description-y-down-leave-active[data-v-cd0c883a]{transition:transform .85s,opacity .45s}.transition-description-y-down-enter[data-v-cd0c883a],.transition-description-y-down-leave-to[data-v-cd0c883a]{transform:translateY(-50%);opacity:0}.transition-description-y-down-leave-to[data-v-cd0c883a]{transform:translateY(50%)}.transition-description-y-up-enter-active[data-v-cd0c883a],.transition-description-y-up-leave-active[data-v-cd0c883a]{transform:translateY(0);opacity:1;will-change:transform,opacity}.transition-description-y-up-enter-active[data-v-cd0c883a]{transition:transform 1.35s,opacity 2.5s}.transition-description-y-up-leave-active[data-v-cd0c883a]{transition:transform .85s,opacity .45s}.transition-description-y-up-enter[data-v-cd0c883a],.transition-description-y-up-leave-to[data-v-cd0c883a]{transform:translateY(50%);opacity:0}.transition-description-y-up-leave-to[data-v-cd0c883a]{transform:translateY(-50%)}.transition-caret-left-enter-active[data-v-cd0c883a],.transition-caret-left-leave-active[data-v-cd0c883a]{left:0;bottom:0;opacity:1;will-change:left,bottom,opacity}.transition-caret-left-enter-active[data-v-cd0c883a]{transform:rotate(-45deg);transition:left 1.7s,bottom 1.7s,opacity .85s}.transition-caret-left-enter[data-v-cd0c883a],.transition-caret-left-leave-to[data-v-cd0c883a]{left:15%;bottom:15%;opacity:0}.transition-caret-right-enter-active[data-v-cd0c883a],.transition-caret-right-leave-active[data-v-cd0c883a]{right:0;top:0;opacity:1;will-change:right,top,opacity}.transition-caret-right-enter-active[data-v-cd0c883a]{transform:rotate(-225deg);transition:right 1.7s,top 1.7s,opacity .85s}.transition-caret-right-enter[data-v-cd0c883a],.transition-caret-right-leave-to[data-v-cd0c883a]{right:15%;top:15%;opacity:0}.transition-case-viewer-enter-active[data-v-cd0c883a],.transition-case-viewer-leave-active[data-v-cd0c883a]{display:block;position:relative;opacity:1;transform:translateY(0);will-change:opacity,transform}.transition-case-viewer-enter-active[data-v-cd0c883a]{transition:all 1.3s}.transition-case-viewer-leave-active[data-v-cd0c883a]{transition:all .5s}.transition-case-viewer-enter[data-v-cd0c883a],.transition-case-viewer-leave-to[data-v-cd0c883a]{transform:translateY(400px);opacity:0}.transition-nav-mobile-enter-active[data-v-cd0c883a],.transition-nav-mobile-leave-active[data-v-cd0c883a]{display:block;position:relative;opacity:1;will-change:opacity,transform;transition-timing-function:ease}.transition-nav-mobile-enter-active[data-v-cd0c883a],.transition-nav-mobile-leave-active[data-v-cd0c883a]{transition:all .75s}.transition-nav-mobile-enter[data-v-cd0c883a]{transform:translateX(120%)}.transition-nav-mobile-enter-to[data-v-cd0c883a],.transition-nav-mobile-leave[data-v-cd0c883a]{transform:translateX(0)}.transition-nav-mobile-leave-to[data-v-cd0c883a]{transform:translateX(120%)}.transition-logo-j-enter-active[data-v-cd0c883a],.transition-logo-j-leave-active[data-v-cd0c883a]{opacity:1;will-change:opacity,transform}.transition-logo-j-enter-active[data-v-cd0c883a],.transition-logo-j-leave-active[data-v-cd0c883a]{transition:all .75s}.transition-logo-j-enter[data-v-cd0c883a]{transform:translateY(-100px)}.transition-logo-j-enter-to[data-v-cd0c883a],.transition-logo-j-leave[data-v-cd0c883a]{transform:translateY(0)}.transition-logo-j-leave-to[data-v-cd0c883a]{transform:translateY(-100px)}.transition-mobile-blur-enter-active[data-v-cd0c883a],.transition-mobile-blur-leave-active[data-v-cd0c883a]{opacity:0;will-change:opacity,transform}.transition-mobile-blur-enter-active[data-v-cd0c883a],.transition-mobile-blur-leave-active[data-v-cd0c883a]{transition:all 1s}.transition-mobile-blur-enter-to[data-v-cd0c883a],.transition-mobile-blur-leave[data-v-cd0c883a]{opacity:1}.transition-mobile-blur-leave-to[data-v-cd0c883a]{opacity:0}.page-enter-active[data-v-cd0c883a],.page-leave-active[data-v-cd0c883a]{display:block;opacity:1;transform:translateY(0);will-change:transform,opacity}.page-enter-active[data-v-cd0c883a]{transition:all 1.3s}.page-leave-active[data-v-cd0c883a]{transition:all .5s}.page-enter[data-v-cd0c883a]{transform:translateY(400px);opacity:0}.page-leave-to[data-v-cd0c883a]{transform:translateY(-200px);opacity:0}body .no-scroll[data-v-cd0c883a]{overflow:hidden}@media(max-width:412px){.only-desktop[data-v-cd0c883a]{display:none!important}}@media(min-width:413px){.only-mobile[data-v-cd0c883a]{display:none!important}}.case-viewer-cross[data-v-cd0c883a]{position:fixed;margin-top:0!important;right:2.5%;width:50px;height:50px;color:var(--color-white);cursor:pointer;opacity:1;transition:opacity .3s;-webkit-tap-highlight-color:transparent;outline:none}@media(max-width:412px){.case-viewer-cross[data-v-cd0c883a]{margin-top:unset!important;top:90px;right:2.5%;transform:translateY(0)}}.case-viewer-cross svg[data-v-cd0c883a]{width:100%;height:100%}.case-viewer-wrapper[data-v-cd0c883a]{position:absolute;width:100%;top:90px;left:0;background-color:var(--color-bg)}.case-viewer-wrapper.transition-case-viewer-enter-active-to .case-viewer-cross[data-v-cd0c883a],.case-viewer-wrapper.transition-case-viewer-enter-active .case-viewer-cross[data-v-cd0c883a],.case-viewer-wrapper.transition-case-viewer-leave-active .case-viewer-cross[data-v-cd0c883a],.case-viewer-wrapper.transition-case-viewer-leave-to .case-viewer-cross[data-v-cd0c883a]{opacity:0}.case-viewer-inner[data-v-cd0c883a]{position:relative;width:95%;margin:0 auto;color:var(--color-white)}@media(max-width:412px){.case-viewer-inner[data-v-cd0c883a]{margin-top:unset}}.case-viewer-inner>*[data-v-cd0c883a]{margin-top:80px}.case-viewer-inner .head[data-v-cd0c883a]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;margin-top:unset;padding-top:80px}@media(max-width:412px){.case-viewer-inner .head[data-v-cd0c883a]{padding:unset}}.case-viewer-inner .head-title[data-v-cd0c883a]{font-family:"PresicavRg";font-size:70px;text-transform:uppercase}@media(max-width:412px){.case-viewer-inner .head-title[data-v-cd0c883a]{width:100%;font-size:44px}}.case-viewer-inner .head-cta[data-v-cd0c883a]{font-family:"PresicavLt";font-size:40px;text-transform:capitalize;padding:25px 65px;color:var(--color-type-smooth);border:1px solid var(--color-type-smooth);border-radius:999px}@media(max-width:412px){.case-viewer-inner .head-cta[data-v-cd0c883a]{display:none}}.case-viewer-inner .cover-image[data-v-cd0c883a]{width:100%}.case-viewer-inner .content-container[data-v-cd0c883a]{display:flex;flex-flow:row nowrap;padding-bottom:80px;border-bottom:1px solid var(--color-type-smooth-plus)}@media(max-width:412px){.case-viewer-inner .content-container[data-v-cd0c883a]{flex-flow:column nowrap}}.case-viewer-inner .description-container[data-v-cd0c883a]{width:60%;display:flex;flex-flow:column nowrap}@media(max-width:412px){.case-viewer-inner .description-container[data-v-cd0c883a]{width:100%}}.case-viewer-inner .description-paragraph[data-v-cd0c883a]{width:80%;font-family:"AktivGrotesk";font-size:67px;line-height:1.3;font-weight:300;color:var(--color-type-smooth);margin-top:80px}.case-viewer-inner .description-paragraph[data-v-cd0c883a]:first-of-type{margin-top:0}@media(max-width:412px){.case-viewer-inner .description-paragraph[data-v-cd0c883a]{width:100%;font-size:100%}}.case-viewer-inner .side-container[data-v-cd0c883a]{width:40%;display:flex;flex-flow:column nowrap;justify-content:space-between}@media(max-width:412px){.case-viewer-inner .side-container[data-v-cd0c883a]{width:100%}}.case-viewer-inner .parallax-image[data-v-cd0c883a]{width:100%}.case-viewer-inner .credits-container *[data-v-cd0c883a]{text-transform:uppercase}.case-viewer-inner .credits-container>*[data-v-cd0c883a]{margin-top:35px}.case-viewer-inner .credits-container .title[data-v-cd0c883a]{font-family:"AktivGrotesk";font-size:15px;font-weight:100;margin-top:15px;margin-bottom:15px;color:var(--color-type-smooth-max)}.case-viewer-inner .credits-container .info[data-v-cd0c883a],.case-viewer-inner .credits-container .which-is[data-v-cd0c883a]{font-family:"AktivGrotesk";font-size:20px;font-weight:100}.case-viewer-inner .credits-container .info[data-v-cd0c883a]{color:var(--color-type-smooth-plus)}.case-viewer-inner .credits-container .slash[data-v-cd0c883a]{font-size:20px;margin-right:10px;color:var(--color-type-smooth-max)}.case-viewer-inner .credits-entities-container .entity[data-v-cd0c883a]{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;margin-top:4px}.case-viewer-inner .credits-entities-container .entity[data-v-cd0c883a]:first-of-type{margin-top:0}.case-viewer-inner .credits-entities-container .entity .which-is[data-v-cd0c883a]{font-size:18px;margin-left:4px;color:var(--color-type-smooth-max)}.case-viewer-inner .lines-container .line[data-v-cd0c883a]{margin-top:80px;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:flex-start}@media(max-width:412px){.case-viewer-inner .lines-container .line[data-v-cd0c883a]{width:100%;flex-flow:column nowrap;margin-top:0}}.case-viewer-inner .lines-container .line[data-v-cd0c883a]:first-of-type{margin:0}@media(max-width:412px){.case-viewer-inner .lines-container .line:nth-of-type(odd) .line-media[data-v-cd0c883a]{width:100%}}.case-viewer-inner .lines-container .line:nth-of-type(odd) .line-media[data-v-cd0c883a]:first-of-type{width:60%}@media(max-width:412px){.case-viewer-inner .lines-container .line:nth-of-type(odd) .line-media[data-v-cd0c883a]:first-of-type{width:100%}}.case-viewer-inner .lines-container .line:nth-of-type(odd) .line-media[data-v-cd0c883a]:last-of-type{width:32%}@media(max-width:412px){.case-viewer-inner .lines-container .line:nth-of-type(2n) .line-media[data-v-cd0c883a],.case-viewer-inner .lines-container .line:nth-of-type(odd) .line-media[data-v-cd0c883a]:last-of-type{width:100%}}.case-viewer-inner .lines-container .line:nth-of-type(2n) .line-media[data-v-cd0c883a]:first-of-type{width:32%}@media(max-width:412px){.case-viewer-inner .lines-container .line:nth-of-type(2n) .line-media[data-v-cd0c883a]:first-of-type{width:100%}}.case-viewer-inner .lines-container .line:nth-of-type(2n) .line-media[data-v-cd0c883a]:last-of-type{width:60%}@media(max-width:412px){.case-viewer-inner .lines-container .line:nth-of-type(2n) .line-media[data-v-cd0c883a]:last-of-type{width:100%}}@media(max-width:412px){.case-viewer-inner .bottom-container[data-v-cd0c883a]{margin-top:20px}}.case-viewer-inner .bottom-media[data-v-cd0c883a]{border:1px solid orange}.case-viewer-inner .next-project[data-v-cd0c883a]{width:100%;padding-bottom:160px}@media(max-width:412px){.case-viewer-inner .next-project[data-v-cd0c883a]{margin-top:0;padding-bottom:50px;padding-top:50px}}.case-viewer-inner .next-project button[data-v-cd0c883a]{display:block;text-align:center;margin:0 auto}',""]),t.exports=Ya}}]);