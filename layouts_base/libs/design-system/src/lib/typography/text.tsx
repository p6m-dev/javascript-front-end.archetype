import { FC, ReactNode } from 'react';
import cx from 'classnames';
import { TypographyTypes } from '../tokens/typography';

export interface TextProps {
  /**
   * HTML tag used to wrap the content
   */
  type: TypographyTypes;
  children: ReactNode;
}

export const Text: FC<TextProps> = ({ type = 'default', children }) => {
  const typeClasses = cx({
    'typo-head-1': type === 'head-1',
    'typo-head-2': type === 'head-2',
    'typo-head-3': type === 'head-3',
    'typo-head-4': type === 'head-4',
    'typo-head-5': type === 'head-5',
    'typo-head-6': type === 'head-6',
    'typo-default': type === 'default',
    'typo-sm': type === 'sm',
    'typo-xs': type === 'xs',
    'typo-caption': type === 'caption',
    'text-secondary-900': true,
  });

  const Component = (() => {
    switch (type) {
      case 'head-1':
        return 'h1';
      case 'head-2':
        return 'h2';
      case 'head-3':
        return 'h3';
      case 'head-4':
        return 'h4';
      case 'head-5':
        return 'h5';
      case 'head-6':
        return 'h6';
      case 'caption':
        return 'small';
      default:
        return 'p';
    }
  })();

  return <Component className={typeClasses}>{children}</Component>;
};

export default Text;
