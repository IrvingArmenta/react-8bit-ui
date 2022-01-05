/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        primary: string;
        success: string;
        warning: string;
        error: string;
        disabled: string;
        customEasing: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    marginX: (value: number) => {
        marginLeft: number;
        marginRight: number;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    bp1: "(min-width: 480px)";
}, import("@stitches/react/types/css-util").CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        primary: string;
        success: string;
        warning: string;
        error: string;
        disabled: string;
        customEasing: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    marginX: (value: number) => {
        marginLeft: number;
        marginRight: number;
    };
}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        primary: string;
        success: string;
        warning: string;
        error: string;
        disabled: string;
        customEasing: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    marginX: (value: number) => {
        marginLeft: number;
        marginRight: number;
    };
}>>(...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    bp1: "(min-width: 480px)";
}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        bp1: "(min-width: 480px)";
    }, {
        colors: {
            primary: string;
            success: string;
            warning: string;
            error: string;
            disabled: string;
            customEasing: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        marginX: (value: number) => {
            marginLeft: number;
            marginRight: number;
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        primary: string;
        success: string;
        warning: string;
        error: string;
        disabled: string;
        customEasing: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    marginX: (value: number) => {
        marginLeft: number;
        marginRight: number;
    };
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        bp1: "(min-width: 480px)";
    }, {
        colors: {
            primary: string;
            success: string;
            warning: string;
            error: string;
            disabled: string;
            customEasing: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        marginX: (value: number) => {
            marginLeft: number;
            marginRight: number;
        };
    }>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        primary: import("@stitches/react/types/theme").Token<"primary", string, "colors", "react8bit">;
        success: import("@stitches/react/types/theme").Token<"success", string, "colors", "react8bit">;
        warning: import("@stitches/react/types/theme").Token<"warning", string, "colors", "react8bit">;
        error: import("@stitches/react/types/theme").Token<"error", string, "colors", "react8bit">;
        disabled: import("@stitches/react/types/theme").Token<"disabled", string, "colors", "react8bit">;
        customEasing: import("@stitches/react/types/theme").Token<"customEasing", string, "colors", "react8bit">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        primary?: string | number | boolean | undefined;
        success?: string | number | boolean | undefined;
        warning?: string | number | boolean | undefined;
        error?: string | number | boolean | undefined;
        disabled?: string | number | boolean | undefined;
        customEasing?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        primary?: string | number | boolean | undefined;
        success?: string | number | boolean | undefined;
        warning?: string | number | boolean | undefined;
        error?: string | number | boolean | undefined;
        disabled?: string | number | boolean | undefined;
        customEasing?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, "react8bit"> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "react8bit">), config: {
    prefix: "react8bit";
    media: {
        bp1: "(min-width: 480px)";
    };
    theme: {
        colors: {
            primary: string;
            success: string;
            warning: string;
            error: string;
            disabled: string;
            customEasing: string;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        marginX: (value: number) => {
            marginLeft: number;
            marginRight: number;
        };
    };
};
