import { rem } from 'polished';
import { styled } from '../../stitches.config';
import { setColorTokenVariants } from './helpers';
const defaultColor = { text: '#212529', hover: '#e7e7e7', shade: '#adafbc' };

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
    boxShadow: `inset -${rem(4)} -${rem(4)} ${defaultColor.shade}`
  },
  '&:hover': {
    backgroundColor: defaultColor.hover,
    '&::after': {
      boxShadow: `inset -${rem(6)} -${rem(6)} ${defaultColor.shade}`
    }
  },
  '&:active': {
    '&::after': {
      boxShadow: `inset ${rem(4)} ${rem(4)} ${defaultColor.shade}`
    }
  },
  '&[disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed',
    backgroundColor: '#d3d3d3',
    color: defaultColor.text,
    '&::after': {
      boxShadow: `inset -${rem(4)} -${rem(4)} ${defaultColor.shade}`
    }
  },
  '@pixelRatio': {
    borderImageRepeat: 'space'
  },
  variants: {
    color: { ...setColorTokenVariants() }
  }
});

export default React8bitButton;
