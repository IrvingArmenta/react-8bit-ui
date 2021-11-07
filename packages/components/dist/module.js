import {jsx as $73ohf$jsx} from "react/jsx-runtime";
import "react";
import {styled as $73ohf$styled} from "@stitches/react";




const $8aa4c2e2539ebca4$var$StyledButton = $73ohf$styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '14px',
    padding: '10px 15px',
    '&:hover': {
        backgroundColor: 'lightgray'
    }
});
const $8aa4c2e2539ebca4$var$Button = (props)=>{
    const { children: children , fontSize: fontSize , ...rest } = props;
    return(/*#__PURE__*/ $73ohf$jsx($8aa4c2e2539ebca4$var$StyledButton, {
        css: {
            fontSize: fontSize
        },
        children: children
    }));
};
var $8aa4c2e2539ebca4$export$2e2bcd8739ae039 = $8aa4c2e2539ebca4$var$Button;




const $7871633b912eed47$var$Testing = (props)=>{
    const { children: children , text: text  } = props;
    return(/*#__PURE__*/ $73ohf$jsx("h3", {
        children: children || text
    }));
};
var $7871633b912eed47$export$2e2bcd8739ae039 = $7871633b912eed47$var$Testing;




export {$8aa4c2e2539ebca4$export$2e2bcd8739ae039 as Button, $7871633b912eed47$export$2e2bcd8739ae039 as Testing};
//# sourceMappingURL=module.js.map
