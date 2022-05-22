import React from 'react';
import { globalReact8BitStyles } from '@irubingu/react-8bit-ui';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  (Story) => {
    globalReact8BitStyles();
    return <Story />
  },
];