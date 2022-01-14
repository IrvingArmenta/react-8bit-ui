import type { FC } from 'react';
import { styled } from '../stitches.config';
import { colorsTokens } from '@irubingu/react-8bit-tokens/build';
import { rem } from 'polished';
import typedObjectKeys from '../utils/typedObjectKeys';

const colorProps: Record<keyof typeof colorsTokens, { [k: string]: string }> = {
  primary: {
    text: '#ffffff',
    hover: '#108de0',
    shade: '#006bb3'
  },
  success: {
    text: '#ffffff',
    hover: '#76c442',
    shade: '#4aa52e'
  },
  warning: {
    text: '#212529',
    hover: '#f2c409',
    shade: '#e59400'
  },
  error: {
    text: '#fff',
    hover: '#ce372b',
    shade: '#8c2022'
  }
};

const normalColor = { text: '#212529', hover: '#e7e7e7', shade: '#adafbc' };

const setColorTokenVariants = () => {
  const colorsTokenKeys = typedObjectKeys(colorsTokens);
  const colorObj = {} as Record<
    keyof typeof colorsTokens,
    {
      '&:not([disabled])': {
        backgroundColor: string;
        color: string;
        '&::after': { boxShadow: string };
        '&:hover': {
          backgroundColor: string;
          '&::after': { boxShadow: string };
        };
        '&:active': {
          '&::after': {
            boxShadow: string;
          };
        };
      };
    }
  >;

  for (const k of colorsTokenKeys) {
    colorObj[k] = {
      '&:not([disabled])': {
        backgroundColor: `$${k}`,
        color: colorProps[k].text,
        '&::after': {
          boxShadow: `inset -${rem(4)} -${rem(4)} ${colorProps[k].shade}`
        },
        '&:hover': {
          backgroundColor: colorProps[k].hover,
          '&::after': {
            boxShadow: `inset -${rem(6)} -${rem(6)} ${colorProps[k].shade}`
          }
        },
        '&:active': {
          '&::after': {
            boxShadow: `inset ${rem(4)} ${rem(4)} ${colorProps[k].shade}`
          }
        }
      }
    };
  }

  return colorObj;
};

const React8bitButton = styled('button', {
  backgroundColor: '#ffffff',
  fontSize: '1rem',
  borderStyle: 'solid',
  borderWidth: 4,
  borderImageSlice: 2,
  borderImageWidth: 2,
  borderImageRepeat: 'stretch',
  borderImageSource:
    'url(\'data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>\')',
  borderImageOutset: 2,
  position: 'relative',
  display: 'inline-block',
  padding: '6px 8px',
  margin: 4,
  textAlign: 'center',
  verticalAlign: 'middle',
  cursor:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer',
  userSelect: 'none',
  '&[href]': {
    textDecoration: 'none'
  },
  '&::after': {
    position: 'absolute',
    top: rem(-4),
    right: rem(-4),
    bottom: rem(-4),
    left: rem(-4),
    content: '',
    boxShadow: `inset -${rem(4)} -${rem(4)} ${normalColor.shade}`
  },
  '&:hover': {
    backgroundColor: normalColor.hover,
    '&::after': {
      boxShadow: `inset -${rem(6)} -${rem(6)} ${normalColor.shade}`
    }
  },
  '&:active': {
    '&::after': {
      boxShadow: `inset ${rem(4)} ${rem(4)} ${normalColor.shade}`
    }
  },
  '&[disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
    backgroundColor: '#d3d3d3',
    color: normalColor.text,
    '&::after': {
      boxShadow: `inset -${rem(4)} -${rem(4)} ${normalColor.shade}`
    }
  },
  '@pixelRatio': {
    borderImageRepeat: 'space'
  },
  variants: {
    color: { ...setColorTokenVariants() }
  }
});

export type React8bitUiButtonType = FC<{
  color?: keyof typeof colorsTokens;
  href?: string;
  id?: string;
  className?: string;
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
      href={href && href}
    >
      {children}
    </React8bitButton>
  );
};

export default Button;
