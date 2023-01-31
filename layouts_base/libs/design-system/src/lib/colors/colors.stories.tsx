import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Colors } from './colors';

const Story: ComponentMeta<typeof Colors> = {
  component: Colors,
  title: 'Design System/Colors',
};

export default Story;

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

export const Theems = Template.bind({});
