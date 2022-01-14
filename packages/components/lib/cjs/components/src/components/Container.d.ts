import { colorsTokens } from '@irubingu/react-8bit-tokens/build';
import { StyledComponent } from '@stitches/react/types/styled-component';
import type { FC } from 'react';
declare type React8bitUiContainerType = FC<{
    centered?: boolean;
    borderColor?: keyof typeof colorsTokens;
    title?: string;
} & StyledComponent<'section'>>;
declare const Container: React8bitUiContainerType;
export default Container;
