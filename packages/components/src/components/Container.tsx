import { colorsTokens } from '@irubingu/react-8bit-tokens';
import { CSS } from '@stitches/react';
import type { FC, ReactNode } from 'react';
import { styled } from '../stitches.config';
import typedObjectKeys from '../utils/typedObjectKeys';

type React8bitUiContainerType = FC<{
  children?: ReactNode;
  centered?: boolean;
  borderColor?: keyof typeof colorsTokens;
  bgColor?: CSS['backgroundColor'];
  title?: string;
  as?: 'section' | 'div' | 'article' | 'nav';
  className?: string;
  id?: string;
}>;

const setColorTokenVariants = () => {
  const colorsTokenKeys = typedObjectKeys(colorsTokens);
  const colorObj = {} as Record<
    keyof typeof colorsTokens,
    {
      borderColor: string;
    }
  >;

  for (const k of colorsTokenKeys) {
    colorObj[k] = {
      borderColor: `$${k}`
    };
  }

  return colorObj;
};

const React8BitContainer = styled('section', {
  position: 'relative',
  padding: '1.5rem 2rem',
  borderColor: '#000000',
  borderStyle: 'solid',
  borderWidth: 4,
  variants: {
    centered: {
      true: {
        textAlign: 'center'
      }
    },
    title: {
      true: {
        '> .title': {
          display: 'table',
          padding: '0 .5rem',
          margin: '-2.3rem 0 1rem',
          fontSize: '1rem',
          backgroundColor: '#ffffff'
        }
      }
    },
    borderColor: {
      ...setColorTokenVariants()
    }
  },
  compoundVariants: [
    {
      centered: true,
      title: true,
      css: {
        '> .title': { margin: '-2.3rem auto 1rem' }
      }
    }
  ]
});

const Container: React8bitUiContainerType = (props) => {
  const { children, centered, borderColor, as, title, ...rest } = props;

  return (
    <React8BitContainer
      {...rest}
      borderColor={borderColor}
      centered={centered}
      title={Boolean(title)}
      as={as}
    >
      {title && <h3 className="title">{title}</h3>}
      {children}
    </React8BitContainer>
  );
};

export default Container;
