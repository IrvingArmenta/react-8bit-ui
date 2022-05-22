declare const React8bitButton: import("@stitches/react/types/styled-component").StyledComponent<"button", {
    color?: "primary" | "success" | "warning" | "error" | undefined;
}, {
    bp1: "(min-width: 480px)";
    pixelRatio: "(-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm)";
}, import("@stitches/react/types/css-util").CSS<{
    bp1: "(min-width: 480px)";
    pixelRatio: "(-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm)";
}, {
    colors: {
        primary: string;
        success: string;
        warning: string;
        error: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    marginX: (value: number) => {
        marginLeft: number;
        marginRight: number;
    };
}>>;
export default React8bitButton;
