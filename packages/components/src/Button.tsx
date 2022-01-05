import type { FC, HTMLAttributes } from 'react';
import { styled } from './stitches.config';
import tokens from '@irubingu/react-8bit-tokens/build/tokens';

function typedObjectKeys<O extends Record<string, unknown>>(obj: O) {
  const keys = Object.keys(obj);
  return keys as (keyof O)[];
}

const colorGet = () => {
  const keysArr = typedObjectKeys(tokens);
  const newObj = {} as Record<keyof typeof tokens, { backgroundColor: string }>;

  for (const k of keysArr) {
    newObj[k] = {
      backgroundColor: `$${k}`
    };
  }

  return newObj;
};

const StyledButton = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '14px',
  padding: '10px 15px',
  color: 'black',
  '&:hover': {
    backgroundColor: '$primary'
  },
  variants: {
    color: {
      ...colorGet()
    }
  }
});

type React8bitUiButtonType = FC<
  {
    fontSize?: string;
    color?: keyof typeof tokens;
  } & HTMLAttributes<HTMLButtonElement>
>;

const Button: React8bitUiButtonType = (props) => {
  const { children, fontSize, color, ...rest } = props;

  return (
    <StyledButton color={color} {...rest} css={{ fontSize }}>
      {children}
    </StyledButton>
  );
};

export default Button;
