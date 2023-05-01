import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import {
  DefaultProps,
  Dropdown,
  DropdownMenuProps,
} from '@nax-tech/components-web';
import { Logo } from '@{{package-name}}/components-web';
import { IconUserOutlined } from '@nax-tech/icons-web';

export interface HeaderProps extends DefaultProps {
  /**
   * Avatar image url for user menu icon
   */
  avatar?: string;
  /**
   * Profile menu item text content
   */
  menuProfile?: string;
  /**
   * Logout menu item text content
   */
  menuAuth?: string;
  /**
   * Logout callback
   * @returns void
   */
  onAuth?: () => void;
  /**
   * On profile user menu click callback
   * @returns void
   */
  onProfile?: () => void;
}

export const Header: FC<HeaderProps> = ({
  avatar,
  menuProfile,
  menuAuth,
  onAuth,
  onProfile,
  className,
  id,
  testId,
  ariaLabel,
}) => {
  // Component base class names. Can be overridden by className property.
  const baseClass = cx({
    'bg-primary-900 px-mega py-default flex items-center': true,
  });

  // Final class names
  const finalClasses = twMerge(baseClass, className);

  const items: DropdownMenuProps['items'] = [
    {
      label: (
        <span onClick={onProfile} data-testid="header-profile">
          {menuProfile}
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span onClick={onAuth} data-testid="header-logout">
          {menuAuth}
        </span>
      ),
      key: '1',
    },
  ];

  return (
    <header
      className={finalClasses}
      {...(testId ? { 'data-testid': testId } : {})}
      {...(id ? { id: id } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
    >
      <div className="flex-1">
        <Logo testId="header-logo" className="fill-white" />
      </div>

      <Dropdown items={items}>
        <div className="text-white bg-primary-700 hover:bg-primary-800 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
          {avatar ? (
            <span data-testid="header-avatar">{avatar}</span>
          ) : (
            <IconUserOutlined className="w-4 h-4 fill-secondary-400" />
          )}
        </div>
      </Dropdown>
    </header>
  );
};
