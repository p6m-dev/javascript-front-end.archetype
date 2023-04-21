import type { StoryObj, Meta } from '@storybook/react';
import { Spacing as Space } from './spacing';

export default {
  component: Space,
  title: 'Design System/Spacing & Layout',
} as Meta<typeof Space>;

type Story = StoryObj<typeof Space>;

export const Spacing: Story = {};
