import { Typography as Typo } from './typography';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  component: Typo,
  title: 'Design System/Text Styles',
} as Meta<typeof Typo>;

type Story = StoryObj<typeof Typo>;

export const Typography: Story = {};
