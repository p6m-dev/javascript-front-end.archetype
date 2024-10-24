import { DefaultProps } from '@p6m-dev/components-web';
import { FC, MouseEventHandler } from 'react';

export interface LogoProps extends DefaultProps {
  /**
   * Logo component color
   * @default '#0031da'
   * @type '#0031da' | 'white'
   * @example 'white'
   */
  color?: '#0031da' | 'white';
  /**
   * Click handler
   */
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export const Logo: FC<LogoProps> = ({
  // Custom component properties
  color = '#0b6dd5',
  onClick,
  // Common default properties for each component
  className,
  id,
  testId,
  ariaLabel,
  t,
}) => {
  return (
    <svg
      width={58.08}
      height={30.89}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(testId ? { 'data-testid': testId } : {})}
      {...(id ? { id: id } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      {...(t ? { 'data-t': t } : {})}
      onClick={onClick}
    >
      <g fill={color}>
        <path d="M2.63 30.89H0V7.37h2.63v2.64h.41C3.63 9 4.44 8.22 5.47 7.69s2.16-.79 3.38-.79c1.04 0 2.02.19 2.94.57s1.74.93 2.45 1.66 1.27 1.61 1.69 2.67.62 2.26.62 3.62v.67c0 1.37-.2 2.59-.61 3.65s-.96 1.95-1.67 2.67-1.54 1.27-2.49 1.64-1.95.56-3.01.56c-.54 0-1.09-.06-1.66-.19A6.643 6.643 0 014.1 22.9c-.43-.37-.79-.81-1.08-1.33h-.41v9.33zm5.61-8.79c.81 0 1.55-.14 2.23-.42s1.27-.68 1.77-1.2c.51-.52.9-1.15 1.18-1.89.28-.75.42-1.58.42-2.5v-.67c0-.9-.14-1.72-.42-2.45s-.67-1.36-1.18-1.89-1.1-.94-1.79-1.23-1.42-.44-2.21-.44-1.52.15-2.2.46c-.67.31-1.26.73-1.77 1.27s-.91 1.19-1.2 1.94-.44 1.58-.44 2.48v.4c0 .92.15 1.76.44 2.52.29.75.69 1.4 1.2 1.94s1.1.96 1.77 1.25c.68.29 1.41.44 2.2.44zM33.82 7.3c-.11-1.42-.61-2.57-1.5-3.46s-2.14-1.33-3.77-1.33c-.74 0-1.44.13-2.08.4s-1.19.66-1.66 1.17-.83 1.11-1.1 1.81-.41 1.47-.41 2.3v3.51h.41c.54-.99 1.31-1.77 2.32-2.33 1-.56 2.12-.84 3.36-.84 1.08 0 2.08.17 3.01.52.92.35 1.72.86 2.38 1.54.67.67 1.18 1.49 1.55 2.45s.56 2.05.56 3.26v.41c0 1.17-.21 2.24-.62 3.21-.42.97-.99 1.8-1.72 2.5s-1.6 1.24-2.6 1.62-2.09.57-3.26.57-2.26-.19-3.26-.57-1.87-.92-2.6-1.61a7.224 7.224 0 01-1.72-2.47c-.42-.96-.62-2.01-.62-3.16V8.18c0-1.24.21-2.36.64-3.38.43-1.01 1.01-1.88 1.76-2.58.74-.71 1.61-1.25 2.62-1.64 1-.38 2.07-.57 3.19-.57s2.12.17 3.04.51 1.72.81 2.4 1.42 1.22 1.34 1.62 2.2c.41.86.67 1.8.78 2.84l-2.7.34zm-5.13 14.8c.81 0 1.55-.13 2.21-.39.67-.26 1.23-.62 1.71-1.1s.83-1.04 1.08-1.69.37-1.37.37-2.16v-.4c0-.79-.13-1.51-.41-2.16-.27-.65-.64-1.22-1.11-1.69s-1.04-.84-1.71-1.1c-.66-.26-1.38-.39-2.14-.39s-1.48.13-2.13.41c-.65.27-1.22.64-1.71 1.11a5.148 5.148 0 00-1.54 3.69v.64c0 .74.12 1.44.37 2.08s.61 1.2 1.08 1.67 1.04.84 1.7 1.1c.67.26 1.4.39 2.21.39zM58.08 24.13h-2.63V12.1c0-.79-.18-1.44-.54-1.94s-.93-.76-1.72-.76c-.75 0-1.35.28-1.81.83s-.69 1.4-.69 2.55v11.35h-2.63V11.96c0-.74-.2-1.36-.61-1.84s-.95-.73-1.62-.73c-.81 0-1.44.29-1.88.88s-.66 1.35-.66 2.3v11.55h-2.63V7.37h2.63V9.2h.41c.29-.79.72-1.37 1.28-1.74s1.23-.56 1.99-.56c.81 0 1.48.21 2.01.64s.89.98 1.1 1.66h.41c.76-1.53 1.98-2.3 3.65-2.3 1.26 0 2.24.4 2.92 1.2s1.03 1.84 1.03 3.13v12.91z" />
      </g>
    </svg>
  );
};

export default Logo;
