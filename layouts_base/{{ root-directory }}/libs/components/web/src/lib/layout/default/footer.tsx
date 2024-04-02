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
}) => {
  // Component base class names. Can be overridden by className property.
  const baseClass = cx({
    'py-s bg-neutral-100 dark:bg-black/20': true,
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
      <p className="typo-l-footnote-regular text-neutral-500  dark:text-slate-500 text-center">
        &copy; {new Date().getFullYear()} NAX Group, Inc.
      </p>
    </footer>
  );
};

export default Footer;
