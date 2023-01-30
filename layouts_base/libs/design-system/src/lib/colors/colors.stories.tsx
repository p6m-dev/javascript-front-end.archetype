import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Colors } from './colors';

const Story: ComponentMeta<typeof Colors> = {
  component: Colors,
  title: 'Design System/Colors',
};

export default Story;

const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

export const ThemeBlue = Template.bind({});
ThemeBlue.args = {
  theme: 'blue',
};

export const ThemeGreen = Template.bind({});
ThemeGreen.args = {
  theme: 'green',
};
