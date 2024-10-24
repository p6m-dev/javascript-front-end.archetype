import { action } from '@storybook/addon-actions';
import { Logo } from './logo';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  component: Logo,
  title: 'Assets/Logos/p6m',
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
    t: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Logo>;
