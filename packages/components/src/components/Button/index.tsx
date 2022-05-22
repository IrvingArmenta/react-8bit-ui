import type { FC, ReactNode } from 'react';
import { colorsTokens } from '@irubingu/react-8bit-tokens';
import React8bitButton from './styles';

export type React8bitUiButtonType = FC<{
  color?: keyof typeof colorsTokens;
  href?: string;
  id?: string;
  className?: string;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}>;

const Button: React8bitUiButtonType = (props) => {
  const { children, color, href, ...rest } = props;

  return (
    <React8bitButton
      type={href ? undefined : 'button'}
      {...rest}
      color={color}
      as={href ? 'a' : 'button'}
      href={href}
    >
      {children}
    </React8bitButton>
  );
};

export default Button;
