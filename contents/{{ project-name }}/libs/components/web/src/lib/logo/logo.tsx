import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@p6m-dev/components-web';

export const Logo: FC<DefaultProps> = ({
  className,
  id,
  testId,
  ariaLabel,
}) => {
  const baseClass = cx({
    'h-6 w-auto fill-black': true,
  });

  // Final class names
  const finalClasses = twMerge(baseClass, className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 86.36 20"
      {...(testId ? { 'data-testid': testId } : {})}
      {...(id ? { id: id } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      className={finalClasses}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77.73,11.32s-.04-.04-.04-.09l-2.88-2.98,2.57,1.06c.09-.17.18-.38.35-.51L86.36,0h-5.18c-.26,0-.49.09-.66.25l-5.44,5.53c-.75.77-1.99.77-2.74,0l-5.44-5.53c-.18-.17-.4-.25-.66-.25h-5.13l7.97,8.21.22.25.4.43,2.88,2.98-2.57-1.06c-.09.17-.22.38-.35.51l-8.45,8.6-.09.09h5.27c.26,0,.49-.09.66-.25l5.27-5.4c.75-.77,1.99-.77,2.74,0l5.27,5.4c.18.17.4.25.66.25h5.27l-.09-.09-8.41-8.6h0Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.36,1.02c-.66.64-1.02,1.49-1.02,2.42v16.13c0,.21.18.43.44.43h3.32c.22,0,.44-.17.44-.43v-5.53c0-.47.4-.81.84-.81h14.92c.49,0,.84.38.84.81v5.53c0,.21.18.43.44.43h3.32c.22,0,.44-.17.44-.43V3.45c0-.89-.35-1.79-1.02-2.42-.66-.64-1.55-.98-2.52-.98h-17.97c-.93-.04-1.81.34-2.48.98h0ZM52.59,9.75l1.68,1.62-3.36-1.66c-.62-.3-1.28-.47-1.95-.47h-10.36c-.71,0-1.37.17-1.99.47l-3.23,1.66,1.59-1.66c.31-.3.49-.72.49-1.15v-3.74c0-.47.4-.81.84-.81h14.92c.49,0,.84.38.84.81v3.74c.04.43.22.85.53,1.19Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8.34v13.23c0,.09,0,.21.04.3l1.37,3.32-1.42-1.45L5.62.13c-.09-.09-.22-.13-.31-.13H.35c-.18,0-.35.17-.35.34v19.32c0,.17.18.34.35.34h3.45c.18,0,.35-.17.35-.34V6.43c0-.09,0-.21-.04-.3l-1.37-3.32,1.42,1.45,15.18,15.58c.09.09.18.13.31.13h4.96c.18,0,.35-.17.35-.34V.34c0-.17-.18-.34-.35-.34h-3.45c-.22,0-.35.17-.35.34Z"
        />
      </g>
    </svg>
  );
};

export default Logo;
