import { Logo } from './logo';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  component: Logo,
  title: 'Components/Logo',
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    id: {
      control: {
        type: 'text',
      },
    },
    testId: {
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};
