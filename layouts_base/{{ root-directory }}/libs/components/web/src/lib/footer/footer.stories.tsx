import type { StoryObj, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Footer } from './footer';

export default {
  component: Footer,
  title: 'Components/Footer',
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'large'],
      },
    },
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
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    children: 'Copyright 2021. NAX Group',
  },
};