import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@irubingu/react-8bit-ui';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'react-8bit-ui/Button',
  component: Button,
  argTypes: {
    href: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    color: {
      options: ['primary', 'success', 'warning', 'error'],
      control: { type: 'radio' }
    },
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    },
    children: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { color, children } = args;
  const colorName = color
    ? color[0].toUpperCase() + color.substring(1)
    : 'Normal';

  return <Button {...args}>{children ? children : colorName}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  color: undefined
};
