import t from"react";var e=function(e){var a=e.backgroundColor,o=void 0===a?"#0000003a":a,n=e.opacity,i=void 0===n?1:n,d=e.justify,l=void 0===d?"center":d;e.align;var r=e.defaultText,s=void 0===r?"Loading..":r,c=e.defaultShow,u=void 0!==c&&c,y=e.children;return t.createElement("div",{id:"rgl-overlay",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e3,opacity:i,background:o,transition:"opacity 0.2s ease",display:u?"block":"none"}},t.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:l,alignItems:l}},y||s))},a={show:function(){var t=document.getElementById("rgl-overlay");t&&(t.dataset.count=t.dataset.count?parseInt(t.dataset.count)+1:1,t.style.display="block")},hide:function(){var t=document.getElementById("rgl-overlay");t&&(t.dataset.count=t.dataset.count?parseInt(t.dataset.count)-1:0,0==t.dataset.count&&setTimeout((function(){t.style.display="none"})))}};export{e as LoaderContainer,a as loader};
