import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@nax-tech/components-web';
import { Header } from './header';
import { Footer } from './footer';

export const DefaultLayout: FC<DefaultProps> = ({
  className,
  id,
  testId,
  ariaLabel,
  children,
}) => {
  // Component base class names. Can be overridden by className property.
  const baseClass = cx({
    'flex-1': true,
  });

  // Final class names
  const finalClasses = twMerge(baseClass, className);
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main
        className={finalClasses}
        {...(testId ? { 'data-testid': testId } : {})}
        {...(id ? { id: id } : {})}
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
