import{jsx as r}from"react/jsx-runtime";import{createStitches as e}from"@stitches/react";import{darken as t}from"polished";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return o=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++)for(var n in e=arguments[t])Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},o.apply(this,arguments)};var n,i={primary:"rgb(32, 156, 238)",success:"rgb(146, 204, 65)",warning:"rgb(247, 213, 29)",error:"rgb(231, 110, 85)",disabled:"rgb(211, 211, 211)",customEasing:"cubic-bezier(0.645,  0.045,  0.355,  1.000)"},a=(n=e({theme:{colors:o({},i)},media:{bp1:"(min-width: 480px)"},prefix:"react8bit",utils:{marginX:function(r){return{marginLeft:r,marginRight:r}}}})).styled;n.css;var c=n.globalCss;n.keyframes,n.getCssText,n.theme,n.createTheme,n.config;var l=a("button",{backgroundColor:"gainsboro",borderRadius:"9999px",fontSize:"14px",padding:"10px 15px",color:"black","&:hover":{backgroundColor:"$primary"},variants:{color:o({},function(){for(var r,e={},o=0,n=(r=i,Object.keys(r)).filter((function(r){return"customEasing"!==r}));o<n.length;o++){var a=n[o];console.log(i[a]),e[a]={backgroundColor:"$".concat(a),"&:hover":{backgroundColor:t(.3,i[a])}}}return e}())}}),s=function(e){var t=e.children,n=e.fontSize,i=e.color,a=function(r,e){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(r);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(t[o[n]]=r[o[n]])}return t}(e,["children","fontSize","color"]);return r(l,o({color:i},a,{css:{fontSize:n}},{children:t}),void 0)},p={html:{lineHeight:1.15,"-webkit-text-size-adjust":"100%","-webkit-tap-highlight-color":"transparent"},body:{margin:0},"*, ::before, ::after":{boxSizing:"border-box",borderStyle:"solid",borderWidth:0},"button, input, optgroup, select, textarea":{"-webkit-appearance":"none",appearance:"none",verticalAlign:"middle",color:"inherit",font:"inherit",background:"transparent",padding:0,margin:0,borderRadius:0,textAlign:"inherit",textTransform:"inherit"},'button, [type="button"], [type="reset"], [type="submit"]':{cursor:"pointer"},fieldset:{margin:0,padding:0,minWidth:0},table:{borderColor:"inherit",borderCollapse:"collapse"},caption:{textAlign:"left"}},b=c(p);export{s as Button,b as globalReact8BitStyles,p as globalReact8BitStylesObj};
//# sourceMappingURL=index.js.map
