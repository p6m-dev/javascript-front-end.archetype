import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@nax-tech/components-web';
import { Logo } from '@{{package-name}}/components-web';
import { MobileNavigation } from './mobile';
import { ModeSwitch } from './mode-switch';

export const Header: FC<DefaultProps> = ({
  className,
  id,
  testId,
  ariaLabel,
}) => {
  // Component base class names. Can be overridden by className property.
  const baseClass = cx({
    'py-xs items-center': true,
  });

  // Final class names
  const finalClasses = twMerge(baseClass, className);

  return (
    <header
      className={finalClasses}
      {...(testId ? { 'data-testid': testId } : {})}
      {...(id ? { id: id } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
    >
      <div className="container flex items-center">
        <MobileNavigation />
        <div className="flex-1 relative z-30">
          <Logo
            testId="header-logo"
            className="fill-slate-800 dark:fill-white"
          />
        </div>
        <ModeSwitch />
      </div>
    </header>
  );
};
