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
      viewBox="0 0 115 100"
      {...(testId ? { 'data-testid': testId } : {})}
      {...(id ? { id: id } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      className={finalClasses}
      onClick={onClick}
    >
      <path d="M75.68 56.541s-.202-.213-.202-.425l-13.082-14.88 11.674 5.315c.402-.85.805-1.913 1.61-2.551l39.249-44H91.378c-1.206 0-2.213.425-3.018 1.275L63.603 28.908c-3.422 3.826-9.057 3.826-12.479 0L26.367 1.275C25.562.425 24.556 0 23.348 0H0l36.23 41.024 1.006 1.276 1.812 2.125 13.082 14.88-11.674-5.315c-.402.85-1.006 1.913-1.61 2.551L.403 99.478 0 99.903h23.952c1.207 0 2.214-.425 3.019-1.275l23.952-26.995c3.421-3.826 9.057-3.826 12.479 0l23.952 26.995c.805.85 1.811 1.275 3.019 1.275h23.951l-.403-.425L75.68 56.541Z" />
    </svg>
  );
};

export default Logo;
