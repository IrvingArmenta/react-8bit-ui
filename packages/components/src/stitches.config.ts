import { createStitches } from '@stitches/react';
import tokens from '@irubingu/react-8bit-tokens/build/tokens';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      ...tokens
    }
  },
  media: {
    bp1: '(min-width: 480px)'
  },
  prefix: 'react8bit',
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value })
  }
});
