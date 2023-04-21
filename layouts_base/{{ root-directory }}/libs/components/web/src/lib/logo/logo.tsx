import { FC, MouseEventHandler } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@nax-tech/components-web';

export interface LogoProps extends DefaultProps {
  /**
   * Click handler
   */
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const Logo: FC<LogoProps> = ({
  // Custom component properties
  onClick,
  // Common default properties for each component
  className,
  id,
  testId,
  ariaLabel,
}) => {
  const baseClass = cx({
    'w-40 h-auto fill-black': true,
  });

  // Final class names
  const finalClasses = twMerge(baseClass, className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 34"
      {...(testId ? { 'data-testid': testId } : {})}
      {...(id ? { id: id } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      className={finalClasses}
      onClick={onClick}
    >
      <path d="M82.88 0H6.53C2.93 0 0 2.93 0 6.53v20.06c0 3.61 2.93 6.53 6.53 6.53h76.34c3.61 0 6.53-2.93 6.53-6.53V6.53C89.4 2.92 86.47 0 82.87 0ZM22.02 26.16H11.35V6.97h2.48v17.1h8.2v2.08Zm9.14.31c-5.07 0-8.62-3.93-8.62-9.73 0-6.09 3.79-10.07 8.91-10.07s8.62 4.01 8.62 9.7c0 6.6-4.01 10.1-8.91 10.1Zm26.72-1.17c-1.11.4-3.3 1.05-5.89 1.05-2.9 0-5.29-.74-7.17-2.53-1.65-1.59-2.68-4.15-2.68-7.14.03-5.72 3.96-9.9 10.39-9.9 2.22 0 3.96.48 4.78.88l-.6 2.02c-1.02-.46-2.31-.83-4.24-.83-4.67 0-7.71 2.9-7.71 7.71s2.93 7.74 7.4 7.74c1.62 0 2.73-.23 3.3-.51v-5.72h-3.9v-1.99h6.32v9.22Zm11.27 1.17c-5.07 0-8.62-3.93-8.62-9.73 0-6.09 3.79-10.07 8.91-10.07s8.62 4.01 8.62 9.7c0 6.6-4.01 10.1-8.91 10.1Z" />
    </svg>
  );
};

export default Logo;
