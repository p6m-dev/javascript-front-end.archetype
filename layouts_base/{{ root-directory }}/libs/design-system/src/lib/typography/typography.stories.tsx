import type { StoryObj, Meta } from '@storybook/react';
import { Typography as Typo } from './typography';

export default {
  component: Typo,
  title: 'Design System/Text Styles',
} as Meta<typeof Typo>;

type Story = StoryObj<typeof Typo>;

export const Typography: Story = {};
