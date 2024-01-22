import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserForm } from './user-form/user-form';

const props = {
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
  onUpdate: vitest.fn(),
  testId: 'form',
};

describe('Footer', () => {
  // Test default rendering, required props and children
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(<UserForm {...props} />);
    // rendering is successful
    expect(baseElement).toBeTruthy();
    // prop testId
    expect(getByTestId(props.testId)).toBeVisible();
  });

  it('property > title', () => {
    const { getByTestId } = render(<UserForm {...props} />);
    expect(getByTestId(props.testId)).toHaveTextContent(props.title);
  });

  it('property > labels', () => {
    const { getByTestId } = render(<UserForm {...props} />);
    expect(getByTestId(props.testId)).toHaveTextContent(props.labels.firstName);
    expect(getByTestId(props.testId)).toHaveTextContent(props.labels.submit);
  });
});
