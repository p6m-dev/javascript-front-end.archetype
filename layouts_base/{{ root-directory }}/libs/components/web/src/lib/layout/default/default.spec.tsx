import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DefaultLayout as Layout } from './default';

// Common props
const propClassName = 'some-class';
const propId = 'some-id';
const propTestId = 'some-testid';
const propAriaLabel = 'some-aria-label';
const propChildren = 'Content';

describe('Layout', () => {
  // Test default rendering, required props and children
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(
      <Layout testId={propTestId}>{propChildren}</Layout>
    );
    // rendering is successful
    expect(baseElement).toBeTruthy();
    // prop children
    expect(getByTestId(propTestId)).toHaveTextContent(propChildren);
  });

  // Test optional properties
  it('property > className', () => {
    const { getByTestId } = render(
      <Layout testId={propTestId} className={propClassName}>
        {propChildren}
      </Layout>
    );
    expect(getByTestId(propTestId)).toHaveClass(propClassName);
  });

  it('property > id', () => {
    const { getByTestId } = render(
      <Layout testId={propTestId} id={propId}>
        {propChildren}
      </Layout>
    );
    expect(getByTestId(propTestId)).toHaveAttribute('id', propId);
  });

  it('property > ariaLabel', () => {
    const { getByTestId } = render(
      <Layout testId={propTestId} ariaLabel={propAriaLabel}>
        {propChildren}
      </Layout>
    );
    expect(getByTestId(propTestId)).toHaveAttribute(
      'aria-label',
      propAriaLabel
    );
  });
});
