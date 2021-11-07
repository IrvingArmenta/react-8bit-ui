var $cOWmH$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $cOWmH$stitchesreact = require("@stitches/react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Button", () => $816e8b2c1f75abf4$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Testing", () => $f00d71b02c24f9f8$export$2e2bcd8739ae039);



const $816e8b2c1f75abf4$var$StyledButton = $cOWmH$stitchesreact.styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '14px',
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: 'lightgray'
    }
});
const $816e8b2c1f75abf4$var$Button = (props)=>{
    const { children: children , fontSize: fontSize , ...rest } = props;
    return(/*#__PURE__*/ $cOWmH$reactjsxruntime.jsx($816e8b2c1f75abf4$var$StyledButton, {
        css: {
            fontSize: fontSize
        },
        children: children
    }));
};
var $816e8b2c1f75abf4$export$2e2bcd8739ae039 = $816e8b2c1f75abf4$var$Button;




const $f00d71b02c24f9f8$var$Testing = (props)=>{
    const { children: children , text: text  } = props;
    return(/*#__PURE__*/ $cOWmH$reactjsxruntime.jsx("h3", {
        children: children || text
    }));
};
var $f00d71b02c24f9f8$export$2e2bcd8739ae039 = $f00d71b02c24f9f8$var$Testing;




//# sourceMappingURL=main.js.map
