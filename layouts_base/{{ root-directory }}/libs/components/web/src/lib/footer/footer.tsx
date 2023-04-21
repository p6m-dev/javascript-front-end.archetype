import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@nax-tech/components-web';

export type FooterProps = DefaultProps;

export const Footer: FC<FooterProps> = ({
  className,
  id,
  testId,
  ariaLabel,
  children,
}) => {
  // Component base class names. Can be overridden by className property.
  const baseClass = cx({
    'text-center': true,
  });

  // Final class names
  const finalClasses = twMerge(baseClass, className);

  return (
    <footer
      className={finalClasses}
      {...(testId ? { 'data-testid': testId } : {})}
      {...(id ? { id: id } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
    >
      {children}
    </footer>
  );
};

export default Footer;
