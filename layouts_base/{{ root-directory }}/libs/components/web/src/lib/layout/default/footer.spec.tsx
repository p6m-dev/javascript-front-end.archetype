import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './footer';

// Common default properties for each component
const propClassName = 'some-class';
const propId = 'some-id';
const propTestId = 'some-testid';
const propAriaLabel = 'some-aria-label';
const propChildren = 'NAX Group, Inc';

describe('Footer', () => {
  // Test default rendering, required props and children
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(
      <Footer testId={propTestId}>{propChildren}</Footer>
    );
    // rendering is successful
    expect(baseElement).toBeTruthy();
    // prop children
    expect(getByTestId(propTestId)).toHaveTextContent(propChildren);
  });

  // Test optional properties
  it('property > className', () => {
    const { getByTestId } = render(
      <Footer testId={propTestId} className={propClassName}>
        {propChildren}
      </Footer>
    );
    expect(getByTestId(propTestId)).toHaveClass(propClassName);
  });

  it('property > id', () => {
    const { getByTestId } = render(
      <Footer testId={propTestId} id={propId}>
        {propChildren}
      </Footer>
    );
    expect(getByTestId(propTestId)).toHaveAttribute('id', propId);
  });

  it('property > ariaLabel', () => {
    const { getByTestId } = render(
      <Footer testId={propTestId} ariaLabel={propAriaLabel}>
        {propChildren}
      </Footer>
    );
    expect(getByTestId(propTestId)).toHaveAttribute(
      'aria-label',
      propAriaLabel
    );
  });
});
