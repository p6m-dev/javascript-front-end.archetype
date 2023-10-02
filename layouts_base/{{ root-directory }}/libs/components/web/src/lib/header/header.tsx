import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import {
  DefaultProps,
  Dropdown,
  DropdownProps,
} from '@nax-tech/components-web';
import { IconUserOutlined } from '@nax-tech/icons-web';
import { Logo } from '@{{package-name}}/components-web';

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
  /**
   * On logo click callback
   * @returns void
   */
  onHome?: () => void;
}

export const Header: FC<HeaderProps> = ({
  avatar,
  menuProfile,
  menuAuth,
  onAuth,
  onProfile,
  onHome,
  className,
  id,
  testId,
  ariaLabel,
}) => {
  // Component base class names. Can be overridden by className property.
  const baseClass = cx({
    'bg-secondary-900 px-mega py-default items-center': true,
  });

  // Final class names
  const finalClasses = twMerge(baseClass, className);

  const items: DropdownProps['items'] = [];

  if (onProfile) {
    items.push({
      label: (
        <span onClick={onProfile} data-testid="header-profile">
          {menuProfile}
        </span>
      ),
      key: '0',
    });
  }

  if (onAuth) {
    items.push({
      label: (
        <span onClick={onAuth} data-testid="header-logout">
          {menuAuth}
        </span>
      ),
      key: '1',
    });
  }

  return (
    <header
      className={finalClasses}
      {...(testId ? { 'data-testid': testId } : {})}
      {...(id ? { id: id } : {})}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
    >
      <div className="container mx-auto max-w-3xl flex">
        <div className="flex-1">
          <Logo
            testId="header-logo"
            className="fill-white w-8 cursor-pointer"
            onClick={onHome}
          />
        </div>

        {(onAuth || onProfile) && (
          <Dropdown items={items}>
            <div className="text-white bg-secondary-700 hover:bg-secondary-800 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer">
              {avatar ? (
                <span data-testid="header-avatar">{avatar}</span>
              ) : (
                <IconUserOutlined className="w-4 h-4 fill-secondary-400" />
              )}
            </div>
          </Dropdown>
        )}
      </div>
    </header>
  );
};
