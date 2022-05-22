export declare const setColorTokenVariants: () => Record<"primary" | "success" | "warning" | "error", {
    '&:not([disabled])': {
        backgroundColor: string;
        color: string;
        '&::after': {
            boxShadow: string;
        };
        '&:hover': {
            backgroundColor: string;
            '&::after': {
                boxShadow: string;
            };
        };
        '&:active': {
            '&::after': {
                boxShadow: string;
            };
        };
    };
}>;
