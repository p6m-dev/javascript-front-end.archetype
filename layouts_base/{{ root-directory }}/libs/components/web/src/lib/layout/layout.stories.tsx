import { action } from '@storybook/addon-actions';
import { Layout } from './layout';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  component: Layout,
  title: 'Components/Layout',
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
} as Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    avatar: 'U',
    onLogout: action('onLogout'),
    onProfile: action('onProfile'),
    testId: 'layout',
  },
  render: (args) => (
    <div className="h-screen">
      <Layout {...args}>Content</Layout>
    </div>
  ),
};
