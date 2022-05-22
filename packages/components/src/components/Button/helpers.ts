import { colorsTokens } from '@irubingu/react-8bit-tokens';
import { rem } from 'polished';
import typedObjectKeys from '../../utils/typedObjectKeys';

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

export const setColorTokenVariants = () => {
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
