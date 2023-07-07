import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { UserForm } from './user';

export default {
  component: UserForm,
  title: 'Features/User/Form',
  decorators: [withDesign, (ComponentStory) => ComponentStory()],
  parameters: {
    zeplinLink: '',
  },
} as Meta<typeof UserForm>;

type Story = StoryObj<typeof UserForm>;

export const Default: Story = {
  args: {
    title: 'Title',
    object: {
      id: '1',
      firstName: 'Joe',
    },
    labels: {
      firstName: 'First Name',
      submit: 'Submit',
    },
    placeholders: {
      firstName: 'Enter your first name',
    },
    errorMessages: {
      firstName: 'First name is required',
    },
    successMessage: 'Successfully updated',
    errorMessage: 'Something went wrong',
    onUpdate: action('Logo > onClick'),
    testId: 'form',
  },
};
