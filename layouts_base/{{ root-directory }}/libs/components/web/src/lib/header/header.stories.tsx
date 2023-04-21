import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { Header } from './header';

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
  decorators: [withDesign, (ComponentStory) => ComponentStory()],
  parameters: {
    zeplinLink: '',
  },
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    avatar: 'A',
    onLogout: action('Header > onLogout'),
    onProfile: action('Header > onProfile'),
  },
};
