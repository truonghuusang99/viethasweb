(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nGUn:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return a}));var r=n("gHap"),o=(n("rxGk"),n("ItpF"));const a=(t,e,n,a,c)=>{const s=t.ownerDocument.defaultView;return Object(o.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:n,onMove:t=>{const e=t.deltaX/s.innerWidth;a(e)},onEnd:t=>{const e=t.deltaX,n=s.innerWidth,o=e/n,a=t.velocityX,i=n/2,u=a>=0&&(a>.2||t.deltaX>i),d=(u?1-o:o)*n;let w=0;if(d>5){const t=d/Math.abs(a);w=Math.min(t,540)}c(u,o<=0?.01:Object(r.c)(0,o,.9999),w)}})}}}]);