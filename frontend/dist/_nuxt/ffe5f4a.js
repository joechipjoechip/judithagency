(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{326:function(t,e,r){var content=r(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("3555bbbf",content,!0,{sourceMap:!1})},329:function(t,e,r){"use strict";r.r(e);var title=r(304),o=r(238),d=r(7),n=Object(d.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({staticClass:"caret_svg__iconify caret_svg__iconify--carbon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32"}},t.$listeners),[r("path",{attrs:{d:"M20 24l-10-8 10-8z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,c={components:{"micro-title":title.default,"logo-j":o.a,caret:n},props:{mainTitle:{type:String,required:!0}},data:function(){return{descriptionDisplayed:!1,descriptionText:{transparency:"transparencyy Our mission is no longer to make people dream, but to lead them to an informed consent.",advocacy:"advocacyy Our mission is no longer to make people dream, but to lead them to an informed consent.",insightfullness:"insightfullnessss Our mission is no longer to make people dream, but to lead them to an informed consent.",accountability:"accountabilityyy Our mission is no longer to make people dream, but to lead them to an informed consent."},notions:["transparency","advocacy","insightfullness","accountability"],positions:{transparency:"top",advocacy:"left",insightfullness:"bottom",accountability:"right"},currentKey:""}},methods:{letterEventHandler:function(t){this.currentKey=t.target.dataset.text},caretClickHandler:function(t){var e,r=this.notions.indexOf(this.currentKey);"plus"===t.target.dataset.way?(e=r+1)>this.notions.length-1&&(e=0):(e=r-1)<0&&(e=this.notions.length-1),this.currentKey=this.notions[e]},swipeHandler:function(t){if("top"!==t&&"bottom"!==t){var e={target:{dataset:{way:"right"===t?"plus":"minus"}}};this.caretClickHandler(e)}}}},l=(r(356),Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"philosophy-container"},[r("micro-title",{attrs:{text:t.mainTitle}}),t._v(" "),r("div",{staticClass:"philosophy-wrapper"},[r("div",{staticClass:"philosophy-inner"},[r("div",{class:["big-square"]},[t._l(t.notions,(function(e,o,d){return r("div",{directives:[{name:"touch",rawName:"v-touch",value:t.letterEventHandler,expression:"letterEventHandler"}],key:d,class:["wording-"+(o+1),{"is-active":t.currentKey===e}],attrs:{"data-text":e},on:{mouseenter:t.letterEventHandler,click:t.letterEventHandler}},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])})),t._v(" "),r("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.swipeHandler,expression:"swipeHandler",arg:"swipe"}],staticClass:"description-wrapper"},t._l(t.notions,(function(e,o,d){return r("div",{key:d,staticClass:"description-container"},[r("transition",{attrs:{name:"transition-description-y-down"}},[e===t.currentKey?r("div",{staticClass:"description"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.descriptionText[t.currentKey])+"\n\t\t\t\t\t\t\t")]):t._e()])],1)})),0),t._v(" "),r("transition",{attrs:{name:"transition-caret-left"}},[t.currentKey?r("div",{staticClass:"caret caret-left",attrs:{"data-way":"plus"},on:{click:function(e){return e.stopPropagation(),t.caretClickHandler.apply(null,arguments)}}},[r("caret",{staticClass:"no-click"})],1):t._e()]),t._v(" "),r("transition",{attrs:{name:"transition-caret-right"}},[t.currentKey?r("div",{staticClass:"caret caret-right",attrs:{"data-way":"minus"},on:{click:function(e){return e.stopPropagation(),t.caretClickHandler.apply(null,arguments)}}},[r("caret",{staticClass:"no-click"})],1):t._e()]),t._v(" "),t._l(2,(function(e){return r("div",{key:e,class:["little-square-inside-"+e]},[t._v("\n\t\t\t\t\t"+t._s(t.currentKey?t.currentKey.substring(0,1):"")+"\n\t\t\t\t")])})),t._v(" "),t._l(t.notions,(function(e,o,d){return r("div",{directives:[{name:"touch",rawName:"v-touch",value:t.letterEventHandler,expression:"letterEventHandler"}],key:d,class:["little-square-outside-"+(o+1),{"is-active":t.currentKey===e}],attrs:{"data-text":e},on:{mouseenter:t.letterEventHandler,click:t.letterEventHandler}},[t._v("\n\t\t\t\t\t"+t._s(e.substring(0,1))+"\n\t\t\t\t")])}))],2)])]),t._v(" "),r("logo-j",{staticClass:"logo-j"})],1)}),[],!1,null,"de4ed50c",null));e.default=l.exports;installComponents(l,{MicroTitle:r(304).default})},356:function(t,e,r){"use strict";r(326)},357:function(t,e,r){var o=r(38),d=r(67),n=r(68),c=r(69),l=r(70),v=r(71),f=r(72),h=r(73),m=r(74),y=r(75),w=r(76),x=r(77),k=r(78),_=r(79),C=r(80),G=r(81),H=r(82),j=r(83),A=r(84),P=r(85),Y=r(86),K=r(87),E=r(88),R=r(89),z=r(90),O=r(91),M=r(92),T=r(93),X=r(94),B=r(95),I=r(96),L=r(97),Z=r(98),N=r(99),$=r(100),J=r(101),U=r(102),D=r(103),S=r(104),F=r(105),Q=r(106),V=r(107),W=r(108),tt=r(109),et=r(110),at=r(111),ot=r(112),it=r(113),nt=r(114),st=r(115),ct=r(116),lt=r(117),vt=r(118),pt=r(119),ft=r(120),ht=r(121),mt=r(122),ut=r(123),yt=r(124),bt=r(125),gt=r(126),wt=r(127),xt=r(128),kt=r(129),qt=r(130),_t=r(131),Ct=r(132),Gt=r(133),Ht=r(134),jt=r(135),At=r(136),Pt=r(137),Yt=o(!1),Kt=d(n),Et=d(c,{hash:"?#iefix"}),Rt=d(l),zt=d(v),Ot=d(f),Mt=d(h),Tt=d(m,{hash:"?#iefix"}),Xt=d(y),Bt=d(w),It=d(x),Lt=d(k),Zt=d(_,{hash:"?#iefix"}),Nt=d(C),$t=d(G),Jt=d(H),Ut=d(j),Dt=d(A,{hash:"?#iefix"}),St=d(P),Ft=d(Y),Qt=d(K),Vt=d(E),Wt=d(R,{hash:"?#iefix"}),te=d(z),ee=d(O),ae=d(M),re=d(T),oe=d(X,{hash:"?#iefix"}),de=d(B),ie=d(I),ne=d(L),se=d(Z),ce=d(N,{hash:"?#iefix"}),le=d($),ve=d(J),pe=d(U),fe=d(D),he=d(S,{hash:"?#iefix"}),me=d(F),ue=d(Q),ye=d(V),be=d(W),ge=d(tt,{hash:"?#iefix"}),we=d(et),xe=d(at),ke=d(ot),qe=d(it),_e=d(nt,{hash:"?#iefix"}),Ce=d(st),Ge=d(ct),He=d(lt),je=d(vt),Ae=d(pt,{hash:"?#iefix"}),Pe=d(ft),Ye=d(ht),Ke=d(mt),Ee=d(ut),Re=d(yt,{hash:"?#iefix"}),ze=d(bt),Oe=d(gt),Me=d(wt),Te=d(xt),Xe=d(kt,{hash:"?#iefix"}),Be=d(qt),Ie=d(_t),Le=d(Ct),Ze=d(Gt),Ne=d(Ht,{hash:"?#iefix"}),$e=d(jt),Je=d(At),Ue=d(Pt);Yt.push([t.i,'a[data-v-de4ed50c],abbr[data-v-de4ed50c],acronym[data-v-de4ed50c],address[data-v-de4ed50c],applet[data-v-de4ed50c],article[data-v-de4ed50c],aside[data-v-de4ed50c],audio[data-v-de4ed50c],b[data-v-de4ed50c],big[data-v-de4ed50c],blockquote[data-v-de4ed50c],body[data-v-de4ed50c],canvas[data-v-de4ed50c],caption[data-v-de4ed50c],center[data-v-de4ed50c],cite[data-v-de4ed50c],code[data-v-de4ed50c],dd[data-v-de4ed50c],del[data-v-de4ed50c],details[data-v-de4ed50c],dfn[data-v-de4ed50c],div[data-v-de4ed50c],dl[data-v-de4ed50c],dt[data-v-de4ed50c],em[data-v-de4ed50c],embed[data-v-de4ed50c],fieldset[data-v-de4ed50c],figcaption[data-v-de4ed50c],figure[data-v-de4ed50c],footer[data-v-de4ed50c],form[data-v-de4ed50c],h1[data-v-de4ed50c],h2[data-v-de4ed50c],h3[data-v-de4ed50c],h4[data-v-de4ed50c],h5[data-v-de4ed50c],h6[data-v-de4ed50c],header[data-v-de4ed50c],hgroup[data-v-de4ed50c],html[data-v-de4ed50c],i[data-v-de4ed50c],iframe[data-v-de4ed50c],img[data-v-de4ed50c],ins[data-v-de4ed50c],kbd[data-v-de4ed50c],label[data-v-de4ed50c],legend[data-v-de4ed50c],li[data-v-de4ed50c],mark[data-v-de4ed50c],menu[data-v-de4ed50c],nav[data-v-de4ed50c],object[data-v-de4ed50c],ol[data-v-de4ed50c],output[data-v-de4ed50c],p[data-v-de4ed50c],pre[data-v-de4ed50c],q[data-v-de4ed50c],ruby[data-v-de4ed50c],s[data-v-de4ed50c],samp[data-v-de4ed50c],section[data-v-de4ed50c],small[data-v-de4ed50c],span[data-v-de4ed50c],strike[data-v-de4ed50c],strong[data-v-de4ed50c],sub[data-v-de4ed50c],summary[data-v-de4ed50c],sup[data-v-de4ed50c],table[data-v-de4ed50c],tbody[data-v-de4ed50c],td[data-v-de4ed50c],tfoot[data-v-de4ed50c],th[data-v-de4ed50c],thead[data-v-de4ed50c],time[data-v-de4ed50c],tr[data-v-de4ed50c],tt[data-v-de4ed50c],u[data-v-de4ed50c],ul[data-v-de4ed50c],var[data-v-de4ed50c],video[data-v-de4ed50c]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[data-v-de4ed50c],aside[data-v-de4ed50c],details[data-v-de4ed50c],figcaption[data-v-de4ed50c],figure[data-v-de4ed50c],footer[data-v-de4ed50c],header[data-v-de4ed50c],hgroup[data-v-de4ed50c],menu[data-v-de4ed50c],nav[data-v-de4ed50c],section[data-v-de4ed50c]{display:block}body[data-v-de4ed50c]{line-height:1;-ms-overflow-style:none;scrollbar-width:none}body[data-v-de4ed50c]::-webkit-scrollbar{display:none}ol[data-v-de4ed50c],ul[data-v-de4ed50c]{list-style:none}blockquote[data-v-de4ed50c],q[data-v-de4ed50c]{quotes:none}blockquote[data-v-de4ed50c]:after,blockquote[data-v-de4ed50c]:before,q[data-v-de4ed50c]:after,q[data-v-de4ed50c]:before{content:"";content:none}table[data-v-de4ed50c]{border-collapse:collapse;border-spacing:0}.no-scroll[data-v-de4ed50c]{overflow:hidden}@font-face{font-family:"PresicavRg";src:url('+Kt+');src:local("@/assets/fonts/presicav/PresicavRg-Bold"),url('+Et+') format("embedded-opentype"),url('+Rt+') format("woff2"),url('+zt+') format("woff"),url('+Ot+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"PresicavLt";src:url('+Mt+');src:local("@/assets/fonts/presicav/PresicavLt-Regular"),url('+Tt+') format("embedded-opentype"),url('+Xt+') format("woff2"),url('+Bt+') format("woff"),url('+It+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"PresicavHv";src:url('+Lt+');src:local("@/assets/fonts/presicav/PresicavHv-Regular"),url('+Zt+') format("embedded-opentype"),url('+Nt+') format("woff2"),url('+$t+') format("woff"),url('+Jt+') format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"PresicavXl";src:url('+Ut+');src:local("@/assets/fonts/presicav/PresicavXl-Regular"),url('+Dt+') format("embedded-opentype"),url('+St+') format("woff2"),url('+Ft+') format("woff"),url('+Qt+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"PresicavUl";src:url('+Vt+');src:local("@/assets/fonts/presicav/PresicavUl-Regular"),url('+Wt+') format("embedded-opentype"),url('+te+') format("woff2"),url('+ee+') format("woff"),url('+ae+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"PresicavRg";src:url('+re+');src:local("@/assets/fonts/presicav/PresicavRg-Regular"),url('+oe+') format("embedded-opentype"),url('+de+') format("woff2"),url('+ie+') format("woff"),url('+ne+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+se+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Medium"),url('+ce+') format("embedded-opentype"),url('+le+') format("woff2"),url('+ve+') format("woff"),url('+pe+') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+fe+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Bold"),url('+he+') format("embedded-opentype"),url('+me+') format("woff2"),url('+ue+') format("woff"),url('+ye+') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+be+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Italic"),url('+ge+') format("embedded-opentype"),url('+we+') format("woff2"),url('+xe+') format("woff"),url('+ke+') format("truetype");font-weight:400;font-style:italic}@font-face{font-family:"AktivGrotesk";src:url('+qe+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-LightItalic"),url('+_e+') format("embedded-opentype"),url('+Ce+') format("woff2"),url('+Ge+') format("woff"),url('+He+') format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"AktivGrotesk";src:url('+je+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-MediumItalic"),url('+Ae+') format("embedded-opentype"),url('+Pe+') format("woff2"),url('+Ye+') format("woff"),url('+Ke+') format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"AktivGrotesk";src:url('+Ee+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Light"),url('+Re+') format("embedded-opentype"),url('+ze+') format("woff2"),url('+Oe+') format("woff"),url('+Me+') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+Te+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-Regular"),url('+Xe+') format("embedded-opentype"),url('+Be+') format("woff2"),url('+Ie+') format("woff"),url('+Le+') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"AktivGrotesk";src:url('+Ze+');src:local("@/assets/fonts/aktivGrotesk/AktivGroteskCorp-BoldItalic"),url('+Ne+') format("embedded-opentype"),url('+$e+') format("woff2"),url('+Je+') format("woff"),url('+Ue+') format("truetype");font-weight:700;font-style:italic}.anim-shadow[data-v-de4ed50c]{will-change:box-shadow;-webkit-animation:anim-shadow-keyframes-data-v-de4ed50c 17s infinite;animation:anim-shadow-keyframes-data-v-de4ed50c 17s infinite}.anim-colors[data-v-de4ed50c]{-webkit-animation:anim-colors-keyframes-data-v-de4ed50c 14s infinite;animation:anim-colors-keyframes-data-v-de4ed50c 14s infinite}@-webkit-keyframes anim-colors-keyframes-data-v-de4ed50c{0%,to{color:var(--color-primary)}33%{color:var(--color-secondary)}66%{color:var(--color-ternary)}}@keyframes anim-colors-keyframes-data-v-de4ed50c{0%,to{color:var(--color-primary)}33%{color:var(--color-secondary)}66%{color:var(--color-ternary)}}@-webkit-keyframes anim-shadow-keyframes-data-v-de4ed50c{0%{box-shadow:inset 0 0 1vh 5px transparent,0 0 10vh 0 transparent}30%{box-shadow:inset 0 0 10vh 0 currentColor,0 0 10vh 5vh currentColor}to{box-shadow:inset 0 0 10vh 0 transparent,0 0 10vh 5vh transparent}}@keyframes anim-shadow-keyframes-data-v-de4ed50c{0%{box-shadow:inset 0 0 1vh 5px transparent,0 0 10vh 0 transparent}30%{box-shadow:inset 0 0 10vh 0 currentColor,0 0 10vh 5vh currentColor}to{box-shadow:inset 0 0 10vh 0 transparent,0 0 10vh 5vh transparent}}@-webkit-keyframes anim-particles-1-data-v-de4ed50c{0%,to{filter:blur(5px);transform:translate3d(40px,20px,0) rotate(1180deg) scale(.6)}30%,75%{filter:blur(0);transform:translate3d(-40px,-26.6666666667px,0) rotate(80deg) scale(.8)}20%,50%,90%{filter:blur(2px);transform:translateZ(0)}}@keyframes anim-particles-1-data-v-de4ed50c{0%,to{filter:blur(5px);transform:translate3d(40px,20px,0) rotate(1180deg) scale(.6)}30%,75%{filter:blur(0);transform:translate3d(-40px,-26.6666666667px,0) rotate(80deg) scale(.8)}20%,50%,90%{filter:blur(2px);transform:translateZ(0)}}@-webkit-keyframes anim-particles-2-data-v-de4ed50c{0%,to{filter:blur(5px);transform:translate3d(-160px,-53.3333333333px,0) rotate(-580deg) scale(1.3)}30%,75%{filter:blur(0);transform:translate3d(112px,44.4444444444px,0) rotate(200deg) scale(.5)}20%,50%,90%{filter:blur(2px);transform:translateZ(0)}}@keyframes anim-particles-2-data-v-de4ed50c{0%,to{filter:blur(5px);transform:translate3d(-160px,-53.3333333333px,0) rotate(-580deg) scale(1.3)}30%,75%{filter:blur(0);transform:translate3d(112px,44.4444444444px,0) rotate(200deg) scale(.5)}20%,50%,90%{filter:blur(2px);transform:translateZ(0)}}.transition-description-y-down-enter-active[data-v-de4ed50c],.transition-description-y-down-leave-active[data-v-de4ed50c]{transform:translateY(0);opacity:1;will-change:transform,opacity}.transition-description-y-down-enter-active[data-v-de4ed50c]{transition:transform 1.35s,opacity 2.5s}.transition-description-y-down-leave-active[data-v-de4ed50c]{transition:transform .85s,opacity .45s}.transition-description-y-down-enter[data-v-de4ed50c],.transition-description-y-down-leave-to[data-v-de4ed50c]{transform:translateY(-50%);opacity:0}.transition-description-y-down-leave-to[data-v-de4ed50c]{transform:translateY(50%)}.transition-description-y-up-enter-active[data-v-de4ed50c],.transition-description-y-up-leave-active[data-v-de4ed50c]{transform:translateY(0);opacity:1;will-change:transform,opacity}.transition-description-y-up-enter-active[data-v-de4ed50c]{transition:transform 1.35s,opacity 2.5s}.transition-description-y-up-leave-active[data-v-de4ed50c]{transition:transform .85s,opacity .45s}.transition-description-y-up-enter[data-v-de4ed50c],.transition-description-y-up-leave-to[data-v-de4ed50c]{transform:translateY(50%);opacity:0}.transition-description-y-up-leave-to[data-v-de4ed50c]{transform:translateY(-50%)}.transition-caret-left-enter-active[data-v-de4ed50c],.transition-caret-left-leave-active[data-v-de4ed50c]{left:0;bottom:0;opacity:1;will-change:left,bottom,opacity}.transition-caret-left-enter-active[data-v-de4ed50c]{transform:rotate(-45deg);transition:left 1.7s,bottom 1.7s,opacity .85s}.transition-caret-left-enter[data-v-de4ed50c],.transition-caret-left-leave-to[data-v-de4ed50c]{left:15%;bottom:15%;opacity:0}.transition-caret-right-enter-active[data-v-de4ed50c],.transition-caret-right-leave-active[data-v-de4ed50c]{right:0;top:0;opacity:1;will-change:right,top,opacity}.transition-caret-right-enter-active[data-v-de4ed50c]{transform:rotate(-225deg);transition:right 1.7s,top 1.7s,opacity .85s}.transition-caret-right-enter[data-v-de4ed50c],.transition-caret-right-leave-to[data-v-de4ed50c]{right:15%;top:15%;opacity:0}.transition-case-viewer-enter-active[data-v-de4ed50c],.transition-case-viewer-leave-active[data-v-de4ed50c]{display:block;position:relative;opacity:1;transform:translateY(0);will-change:opacity,transform}.transition-case-viewer-enter-active[data-v-de4ed50c]{transition:all 1.3s}.transition-case-viewer-leave-active[data-v-de4ed50c]{transition:all .5s}.transition-case-viewer-enter[data-v-de4ed50c],.transition-case-viewer-leave-to[data-v-de4ed50c]{transform:translateY(400px);opacity:0}.transition-nav-mobile-enter-active[data-v-de4ed50c],.transition-nav-mobile-leave-active[data-v-de4ed50c]{display:block;position:relative;opacity:1;will-change:opacity,transform;transition-timing-function:ease}.transition-nav-mobile-enter-active[data-v-de4ed50c],.transition-nav-mobile-leave-active[data-v-de4ed50c]{transition:all .75s}.transition-nav-mobile-enter[data-v-de4ed50c]{transform:translateX(120%)}.transition-nav-mobile-enter-to[data-v-de4ed50c],.transition-nav-mobile-leave[data-v-de4ed50c]{transform:translateX(0)}.transition-nav-mobile-leave-to[data-v-de4ed50c]{transform:translateX(120%)}.transition-logo-j-enter-active[data-v-de4ed50c],.transition-logo-j-leave-active[data-v-de4ed50c]{opacity:1;will-change:opacity,transform}.transition-logo-j-enter-active[data-v-de4ed50c],.transition-logo-j-leave-active[data-v-de4ed50c]{transition:all .75s}.transition-logo-j-enter[data-v-de4ed50c]{transform:translateY(-100px)}.transition-logo-j-enter-to[data-v-de4ed50c],.transition-logo-j-leave[data-v-de4ed50c]{transform:translateY(0)}.transition-logo-j-leave-to[data-v-de4ed50c]{transform:translateY(-100px)}.transition-mobile-blur-enter-active[data-v-de4ed50c],.transition-mobile-blur-leave-active[data-v-de4ed50c]{opacity:0;will-change:opacity,transform}.transition-mobile-blur-enter-active[data-v-de4ed50c],.transition-mobile-blur-leave-active[data-v-de4ed50c]{transition:all 1s}.transition-mobile-blur-enter-to[data-v-de4ed50c],.transition-mobile-blur-leave[data-v-de4ed50c]{opacity:1}.transition-mobile-blur-leave-to[data-v-de4ed50c]{opacity:0}.page-enter-active[data-v-de4ed50c],.page-leave-active[data-v-de4ed50c]{display:block;opacity:1;transform:translateY(0);will-change:transform,opacity}.page-enter-active[data-v-de4ed50c]{transition:all 1.3s}.page-leave-active[data-v-de4ed50c]{transition:all .5s}.page-enter[data-v-de4ed50c]{transform:translateY(400px);opacity:0}.page-leave-to[data-v-de4ed50c]{transform:translateY(-200px);opacity:0}body .no-scroll[data-v-de4ed50c]{overflow:hidden}@media(max-width:412px){.only-desktop[data-v-de4ed50c]{display:none!important}}@media(min-width:413px){.only-mobile[data-v-de4ed50c]{display:none!important}}.philosophy-container[data-v-de4ed50c]{display:block;margin-top:150px;margin-bottom:200px}.philosophy-container .logo-j[data-v-de4ed50c]{display:block;margin:0 auto}.philosophy-wrapper[data-v-de4ed50c]{display:block}.philosophy-inner[data-v-de4ed50c]{margin:20vh auto 15vh;transform-origin:center;transform:rotate(45deg)}.philosophy-inner[data-v-de4ed50c],.philosophy-inner .big-square[data-v-de4ed50c]{position:relative;display:flex;justify-content:center;align-items:center;box-sizing:border-box}.philosophy-inner .big-square[data-v-de4ed50c]{border:1px solid var(--color-primary);font-size:20px;width:38vh;height:38vh;margin:0 auto;flex-flow:column nowrap;will-change:border-width;transition:border-width .7s}@media(max-width:412px){.philosophy-inner .big-square[data-v-de4ed50c]{width:58vw;height:58vw}}.philosophy-inner .big-square.active-border-top[data-v-de4ed50c]{border-top-width:12px;border-right-width:5px}.philosophy-inner .big-square.active-border-right[data-v-de4ed50c]{border-right-width:12px;border-bottom-width:5px}.philosophy-inner .big-square.active-border-bottom[data-v-de4ed50c]{border-bottom-width:12px;border-left-width:5px}.philosophy-inner .big-square.active-border-left[data-v-de4ed50c]{border-left-width:12px;border-top-width:5px}.philosophy-inner .description[data-v-de4ed50c],.philosophy-inner [class^=little-square][data-v-de4ed50c],.philosophy-inner [class^=wording][data-v-de4ed50c]{font-family:"AktivGrotesk";font-size:1.8vh;text-transform:uppercase;letter-spacing:2.4px;color:hsla(0,0%,100%,.4)}.philosophy-inner [class^=wording][data-v-de4ed50c]{position:absolute;width:100%;text-align:center;cursor:pointer;will-change:color;transition:color .3s}.philosophy-inner [class^=wording].is-active[data-v-de4ed50c]{color:var(--color-primary)}.philosophy-inner [class^=wording][class*="-1"][data-v-de4ed50c]{top:calc(-1.8vh - 40px)}.philosophy-inner [class^=wording][class*="-2"][data-v-de4ed50c]{transform-origin:left;transform:rotate(-90deg);left:calc(-1.8vh - 40px);bottom:-.9vh}.philosophy-inner [class^=wording][class*="-3"][data-v-de4ed50c]{bottom:calc(-1.8vh - 40px)}.philosophy-inner [class^=wording][class*="-4"][data-v-de4ed50c]{transform-origin:right;transform:rotate(-90deg);right:calc(-1.8vh - 40px);top:-.9vh}.philosophy-inner .description[data-v-de4ed50c]{text-align:center;color:var(--color-white);font-size:1.5vh;line-height:1.7em}@media(max-width:412px){.philosophy-inner .description[data-v-de4ed50c]{font-size:2.5vw}}.philosophy-inner .description-container[data-v-de4ed50c]{transform-origin:center;transform:rotate(-45deg);position:absolute;width:70%;height:70%;top:30%;left:30%}@media(max-width:412px){.philosophy-inner .description-container[data-v-de4ed50c]{top:25%;left:25%}}.philosophy-inner .description-wrapper[data-v-de4ed50c]{width:100%;height:100%;font-size:1.8vh;line-height:30px;color:var(--color-white);text-transform:none}.philosophy-inner [class^=little-square][data-v-de4ed50c]{width:10%;height:10%;border:1px solid hsla(0,0%,100%,.4);display:flex;justify-content:center;align-items:center;transform-origin:center;transform:rotate(-45deg)}.philosophy-inner [class^=little-square-inside][data-v-de4ed50c]{position:absolute;border-color:var(--color-primary);color:var(--color-primary)}.philosophy-inner [class^=little-square-inside][class*="-1"][data-v-de4ed50c]{top:5%;left:5%}.philosophy-inner [class^=little-square-inside][class*="-2"][data-v-de4ed50c]{bottom:5%;right:5%}.philosophy-inner [class^=little-square-outside][data-v-de4ed50c]{position:absolute;cursor:pointer;will-change:color,border-color,border-width;transition:color .3s,border-color .5s,border-width .7s}.philosophy-inner [class^=little-square-outside].is-active[data-v-de4ed50c]{color:var(--color-primary);border-color:var(--color-primary)}.philosophy-inner [class^=little-square-outside].active-border-top[data-v-de4ed50c]{border-top-width:6px;border-right-width:3px}.philosophy-inner [class^=little-square-outside].active-border-right[data-v-de4ed50c]{border-right-width:6px;border-bottom-width:3px}.philosophy-inner [class^=little-square-outside].active-border-bottom[data-v-de4ed50c]{border-bottom-width:6px;border-left-width:3px}.philosophy-inner [class^=little-square-outside].active-border-left[data-v-de4ed50c]{border-left-width:6px;border-top-width:3px}.philosophy-inner [class^=little-square-outside][class*="-1"][data-v-de4ed50c]{top:-55%;left:45%}.philosophy-inner [class^=little-square-outside][class*="-2"][data-v-de4ed50c]{top:45%;left:-55%}.philosophy-inner [class^=little-square-outside][class*="-3"][data-v-de4ed50c]{bottom:-55%;right:45%}.philosophy-inner [class^=little-square-outside][class*="-4"][data-v-de4ed50c]{bottom:45%;right:-55%}.caret[data-v-de4ed50c]{color:var(--color-primary);position:absolute;cursor:pointer}.caret[data-v-de4ed50c],.caret svg[data-v-de4ed50c]{width:42px;height:42px}.caret-left[data-v-de4ed50c]:not([class*=transition]){bottom:0;left:0;transform:rotate(-45deg)}.caret-right[data-v-de4ed50c]:not([class*=transition]){top:0;right:0;transform:rotate(-225deg)}.caret .no-click[data-v-de4ed50c]{pointer-events:none}',""]),t.exports=Yt}}]);