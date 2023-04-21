import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { Logo } from './logo';

export default {
  component: Logo,
  title: 'Components/Logo',
  argTypes: {
    onClick: {
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
} as Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    onClick: action('Logo > onClick'),
  },
};
