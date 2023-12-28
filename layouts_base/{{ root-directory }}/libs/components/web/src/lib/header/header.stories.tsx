import { action } from '@storybook/addon-actions';
import { Header } from './header';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  component: Header,
  title: 'Components/Header',
  argTypes: {
    avatar: {
      control: {
        type: 'text',
      },
    },
    onLogout: {
      control: {
        type: 'function',
      },
    },
    onProfile: {
      control: {
        type: 'function',
      },
    },
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
    children: {
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
  decorators: [(ComponentStory) => ComponentStory()],
  parameters: {
    zeplinLink: '',
  },
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    avatar: 'A',
    onProfile: action('Header > onProfile'),
  },
};
