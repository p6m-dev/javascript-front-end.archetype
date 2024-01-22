import { action } from '@storybook/addon-actions';
import { UserForm } from './user-form/user-form';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  component: UserForm,
  title: 'Features/User/Form',
  decorators: [(ComponentStory) => ComponentStory()],
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
      lastName: 'Doe',
    },
    labels: {
      firstName: 'First Name',
      lastName: 'Last Name',
      submit: 'Submit',
    },
    placeholders: {
      firstName: 'Enter your first name',
      lastName: 'Enter your last name',
    },
    errorMessages: {
      firstName: 'First name is required',
      lastName: 'Last name is required',
    },
    successMessage: 'Successfully updated',
    errorMessage: 'Something went wrong',
    onUpdate: action('Logo > onClick'),
    testId: 'form',
  },
};
