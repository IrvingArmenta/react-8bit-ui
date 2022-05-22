import type { FC, ReactNode } from 'react';
import { colorsTokens } from '@irubingu/react-8bit-tokens';
export declare type React8bitUiButtonType = FC<{
    color?: keyof typeof colorsTokens;
    href?: string;
    id?: string;
    className?: string;
    children?: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}>;
declare const Button: React8bitUiButtonType;
export default Button;
