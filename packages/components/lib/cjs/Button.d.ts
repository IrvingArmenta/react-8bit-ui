import type { FC, HTMLAttributes } from 'react';
import tokens from '@irubingu/react-8bit-tokens/build/tokens';
declare type React8bitUiButtonType = FC<{
    fontSize?: string;
    color?: keyof typeof tokens;
} & HTMLAttributes<HTMLButtonElement>>;
declare const Button: React8bitUiButtonType;
export default Button;
