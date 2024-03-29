import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

// Common props
const propClassName = 'some-class';
const propId = 'some-id';
const propTestId = 'some-testid';
const propAriaLabel = 'some-aria-label';
// Custom props
const propAvatar = 'A';
const onAuth = jest.fn();
const propOnProfile = jest.fn();

describe('Header', () => {
  // Test default rendering, required props and children
  it('should render successfully', () => {
    const { baseElement } = render(
      <Header
        avatar={propAvatar}
        onAuth={onAuth}
        onProfile={propOnProfile}
        testId={propTestId}
      />
    );
    // rendering is successful
    expect(baseElement).toBeTruthy();
  });

  // Optional properties

  it('property > className', () => {
    const { getByTestId } = render(
      <Header
        avatar={propAvatar}
        onAuth={onAuth}
        onProfile={propOnProfile}
        testId={propTestId}
        className={propClassName}
      />
    );
    expect(getByTestId(propTestId)).toHaveClass(propClassName);
  });

  it('property > id', () => {
    const { getByTestId } = render(
      <Header
        avatar={propAvatar}
        onAuth={onAuth}
        onProfile={propOnProfile}
        testId={propTestId}
        id={propId}
      />
    );
    expect(getByTestId(propTestId)).toHaveAttribute('id', propId);
  });

  it('property > ariaLabel', () => {
    const { getByTestId } = render(
      <Header
        avatar={propAvatar}
        onAuth={onAuth}
        onProfile={propOnProfile}
        testId={propTestId}
        ariaLabel={propAriaLabel}
      />
    );
    expect(getByTestId(propTestId)).toHaveAttribute(
      'aria-label',
      propAriaLabel
    );
  });

  it('property > ariaLabel', () => {
    const { getByTestId } = render(
      <Header
        avatar={propAvatar}
        onAuth={onAuth}
        onProfile={propOnProfile}
        testId={propTestId}
        ariaLabel={propAriaLabel}
      />
    );
    expect(getByTestId(propTestId)).toHaveAttribute(
      'aria-label',
      propAriaLabel
    );
  });

  // Custom props

  it('property > avatar', () => {
    const { findByText } = render(
      <Header
        avatar={propAvatar}
        onAuth={onAuth}
        onProfile={propOnProfile}
        testId={propTestId}
        ariaLabel={propAriaLabel}
      />
    );
    expect(findByText('header-avatar')).toBeTruthy();
  });
});
