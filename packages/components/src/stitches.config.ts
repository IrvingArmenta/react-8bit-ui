import { createStitches } from '@stitches/react';
import colorTokens from '@irubingu/react-8bit-tokens/build/colors';

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
      ...colorTokens
    }
  },
  media: {
    bp1: '(min-width: 480px)',
    pixelRatio:
      '(-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm)'
  },
  prefix: 'react8bit',
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value })
  }
});
