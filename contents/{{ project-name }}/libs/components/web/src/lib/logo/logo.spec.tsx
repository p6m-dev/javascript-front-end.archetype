import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from './logo';

// Custom component properties
// Common default properties for each component
const propClassName = 'some-class';
const propId = 'some-id';
const propTestId = 'some-testid';
const propAriaLabel = 'some-aria-label';
const propT = 'some-i18n-key';

describe('Logo', () => {
  // Test default rendering, required props and children
  it('should render successfully', () => {
    const { baseElement } = render(<Logo testId={propTestId} />);
    // redering is successful
    expect(baseElement).toBeTruthy();
  });

  // Test optional properties
  it('property > className', () => {
    const { getByTestId } = render(
      <Logo testId={propTestId} className={propClassName} />
    );
    expect(getByTestId(propTestId)).toHaveClass(propClassName);
  });

  it('property > id', () => {
    const { getByTestId } = render(<Logo testId={propTestId} id={propId} />);
    expect(getByTestId(propTestId)).toHaveAttribute('id', propId);
  });

  it('property > ariaLabel', () => {
    const { getByTestId } = render(
      <Logo testId={propTestId} ariaLabel={propAriaLabel} />
    );
    expect(getByTestId(propTestId)).toHaveAttribute(
      'aria-label',
      propAriaLabel
    );
  });

  it('property > t', () => {
    const { getByTestId } = render(<Logo testId={propTestId} t={propT} />);
    expect(getByTestId(propTestId)).toHaveAttribute('data-t', propT);
  });

  // Handlers and other methods
  it('should handle a click event', () => {
    const mock = jest.fn();
    const { getByTestId } = render(<Logo testId={propTestId} onClick={mock} />);
    fireEvent.click(getByTestId(propTestId));
    expect(mock).toHaveBeenCalled();
  });
});
