import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from "react";
import { styled } from '@stitches/react';

const StyledButton = styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '14px',
    padding: '10px 15px',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  });

const Button: FC<{ fontSize: string } & HTMLAttributes<HTMLButtonElement>> = (props) => {
    const { children, fontSize, ...rest } = props;
    return <StyledButton css={{ fontSize: fontSize }}>{children}</StyledButton>
}

export default Button;