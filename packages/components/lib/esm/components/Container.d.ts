import { colorsTokens } from '@irubingu/react-8bit-tokens/build';
import { CSS } from '@stitches/react';
import type { FC } from 'react';
declare type React8bitUiContainerType = FC<{
    centered?: boolean;
    borderColor?: keyof typeof colorsTokens;
    bgColor?: CSS['backgroundColor'];
    title?: string;
    as?: 'section' | 'div' | 'article' | 'nav';
    className?: string;
    id?: string;
}>;
declare const Container: React8bitUiContainerType;
export default Container;
