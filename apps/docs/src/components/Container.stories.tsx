import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '@irubingu/react-8bit-ui';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'react-8bit-ui/Container',
  component: Container,
  argTypes: {
    borderColor: {
      options: ['primary', 'success', 'warning', 'error'],
      control: { type: 'radio' }
    },
    title: {
      control: { type: 'text' }
    },
    children: {
      control: { type: 'text' }
    },
    centered: {
      control: { type: 'boolean' }
    }
  }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
  const { borderColor, children, ...rest } = args;
  const colorName = borderColor
    ? borderColor[0].toUpperCase() + borderColor.substring(1)
    : 'Normal';

  return (
    <Container {...rest} borderColor={borderColor}>
      {children ? children : colorName}
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  borderColor: undefined
};
