import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import {
  DefaultProps,
  Dropdown,
  DropdownMenuProps,
} from '@nax-tech/components-web';
import { useTranslation } from '@nax-tech/i18n';
import { Logo } from '@{{package-name}}/components-web';

export interface HeaderProps extends DefaultProps {
  avatar: string;
  onLogout: () => void;
  onProfile: () => void;
}

export const Header: FC<HeaderProps> = ({
  avatar,
  onLogout,
  onProfile,
  className,
  id,
  testId,
  ariaLabel,
}) => {
  const { t } = useTranslation();

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
          {t('profile.title')}
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span onClick={onLogout} data-testid="header-logout">
          {t('common.logout')}
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
          <span data-testid="header-avatar">{avatar}</span>
        </div>
      </Dropdown>
    </header>
  );
};
