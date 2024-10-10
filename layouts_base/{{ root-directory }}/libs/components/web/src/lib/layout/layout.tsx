import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@p6m-dev/components-web';
import { Header, Footer } from '@{{package-name}}/components-web';

export interface LayoutProps extends DefaultProps {
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
   * Footer copyright content
   */
  footerCopy?: string;
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

export const Layout: FC<LayoutProps> = ({
  avatar,
  menuProfile,
  menuAuth,
  footerCopy,
  onAuth,
  onProfile,
  onHome,
  // Common default properties for each component
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
      <Header
        avatar={avatar}
        menuProfile={menuProfile}
        menuAuth={menuAuth}
        onProfile={onProfile}
        onAuth={onAuth}
        onHome={onHome}
      />
      <main
        className={finalClasses}
        {...(testId ? { 'data-testid': testId } : {})}
        {...(id ? { id: id } : {})}
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      >
        {children}
      </main>
      <Footer>{footerCopy}</Footer>
    </div>
  );
};

export default Layout;
