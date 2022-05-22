import{jsx as e,jsxs as t}from"react/jsx-runtime";import{rem as r}from"polished";import{createStitches as o}from"@stitches/react";import n from"@irubingu/react-8bit-tokens/build/colors";import{colorsTokens as a}from"@irubingu/react-8bit-tokens";var i,c=function(){return c=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};function l(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}var d=(i=o({theme:{colors:c({},n)},media:{bp1:"(min-width: 480px)",pixelRatio:"(-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm)"},prefix:"react8bit",utils:{marginX:function(e){return{marginLeft:e,marginRight:e}}}})).styled;i.css;var s=i.globalCss;i.keyframes,i.getCssText,i.theme;var f=i.createTheme;function h(e){return Object.keys(e)}i.config;var b={primary:{text:"#ffffff",hover:"#108de0",shade:"#006bb3"},success:{text:"#ffffff",hover:"#76c442",shade:"#4aa52e"},warning:{text:"#212529",hover:"#f2c409",shade:"#e59400"},error:{text:"#fff",hover:"#ce372b",shade:"#8c2022"}},g="#212529",p="#e7e7e7",m="#adafbc",u=d("button",{backgroundColor:"#ffffff",fontSize:"1rem",borderStyle:"solid",borderWidth:4,borderImageSlice:2,borderImageWidth:2,borderImageRepeat:"stretch",borderImageSource:'url(\'data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>\')',borderImageOutset:2,position:"relative",display:"inline-block",padding:"6px 8px",margin:4,textAlign:"center",verticalAlign:"middle",cursor:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer",userSelect:"none","&[href]":{textDecoration:"none"},"&::after":{position:"absolute",top:r(-4),right:r(-4),bottom:r(-4),left:r(-4),content:"",boxShadow:"inset -".concat(r(4)," -").concat(r(4)," ").concat(m)},"&:hover":{backgroundColor:p,"&::after":{boxShadow:"inset -".concat(r(6)," -").concat(r(6)," ").concat(m)}},"&:active":{"&::after":{boxShadow:"inset ".concat(r(4)," ").concat(r(4)," ").concat(m)}},"&[disabled]":{opacity:.5,cursor:"not-allowed",backgroundColor:"#d3d3d3",color:g,"&::after":{boxShadow:"inset -".concat(r(4)," -").concat(r(4)," ").concat(m)}},"@pixelRatio":{borderImageRepeat:"space"},variants:{color:c({},function(){for(var e={},t=0,o=h(a);t<o.length;t++){var n=o[t];e[n]={"&:not([disabled])":{backgroundColor:"$".concat(n),color:b[n].text,"&::after":{boxShadow:"inset -".concat(r(4)," -").concat(r(4)," ").concat(b[n].shade)},"&:hover":{backgroundColor:b[n].hover,"&::after":{boxShadow:"inset -".concat(r(6)," -").concat(r(6)," ").concat(b[n].shade)}},"&:active":{"&::after":{boxShadow:"inset ".concat(r(4)," ").concat(r(4)," ").concat(b[n].shade)}}}}}return e}())}}),v=function(t){var r=t.children,o=t.color,n=t.href,a=l(t,["children","color","href"]);return e(u,c({type:n?void 0:"button"},a,{color:o,as:n?"a":"button",href:n},{children:r}))},A=d("section",{position:"relative",padding:"1.5rem 2rem",borderColor:"#000000",borderStyle:"solid",borderWidth:4,variants:{centered:{true:{textAlign:"center"}},title:{true:{"> .title":{display:"table",padding:"0 .5rem",margin:"-2.3rem 0 1rem",fontSize:"1rem",backgroundColor:"#ffffff"}}},borderColor:c({},function(){for(var e={},t=0,r=h(a);t<r.length;t++){var o=r[t];e[o]={borderColor:"$".concat(o)}}return e}())},compoundVariants:[{centered:!0,title:!0,css:{"> .title":{margin:"-2.3rem auto 1rem"}}}]}),x=function(r){var o=r.children,n=r.centered,a=r.borderColor,i=r.as,d=r.title,s=l(r,["children","centered","borderColor","as","title"]);return t(A,c({},s,{borderColor:a,centered:n,title:Boolean(d),as:i},{children:[d&&e("h3",c({className:"title"},{children:d})),o]}))},w={html:{fontSize:16,"-webkit-text-size-adjust":"100%","-webkit-tap-highlight-color":"transparent"},body:{margin:0,fontFamily:"'Press Start 2P' sans-serif",lineHeight:1.5,fontSize:16},"*, ::before, ::after":{boxSizing:"border-box",borderStyle:"solid",borderWidth:0},"button, input, optgroup, select, textarea":{"-webkit-appearance":"none",appearance:"none",verticalAlign:"middle",color:"inherit",font:"inherit",background:"transparent",padding:0,margin:0,borderRadius:0,textAlign:"inherit",textTransform:"inherit"},'button, [type="button"], [type="reset"], [type="submit"]':{cursor:"pointer"},fieldset:{margin:0,padding:0,minWidth:0},table:{borderColor:"inherit",borderCollapse:"collapse"},caption:{textAlign:"left"}},y=s(w);export{v as Button,x as Container,f as create8bitTheme,y as globalReact8BitStyles,w as globalReact8BitStylesObj};
//# sourceMappingURL=index.js.map
