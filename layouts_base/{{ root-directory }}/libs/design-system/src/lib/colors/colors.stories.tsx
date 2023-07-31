import { Colors } from './colors';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  component: Colors,
  title: 'Design System/Colors',
} as Meta<typeof Colors>;

type Story = StoryObj<typeof Colors>;

export const Themes: Story = {};
