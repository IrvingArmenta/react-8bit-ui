import { globalCss } from './stitches.config';

export const globalReact8BitStylesObj = {
  html: {
    lineHeight: 1.15,
    '-webkit-text-size-adjust': '100%',
    '-webkit-tap-highlight-color': 'transparent'
  },
  body: {
    margin: 0
  },
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderWidth: 0
  },
  'button, input, optgroup, select, textarea': {
    '-webkit-appearance': 'none',
    appearance: 'none',
    verticalAlign: 'middle',
    color: 'inherit',
    font: 'inherit',
    background: 'transparent',
    padding: 0,
    margin: 0,
    borderRadius: 0,
    textAlign: 'inherit',
    textTransform: 'inherit'
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    cursor: 'pointer'
  },
  fieldset: {
    margin: 0,
    padding: 0,
    minWidth: 0
  },
  table: {
    borderColor: 'inherit',
    borderCollapse: 'collapse'
  },
  caption: {
    textAlign: 'left'
  }
};

export const globalReact8BitStyles = globalCss(globalReact8BitStylesObj);
