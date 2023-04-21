import { FC } from 'react';
import cx from 'classnames';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@nax-tech/components-web';
import { Header, Footer } from '@{{package-name}}/components-web';

export interface LayoutProps extends DefaultProps {
  /**
   * Avatar image url for user menu icon
   */
  avatar: string;
  /**
   * Logout callback
   * @returns void
   */
  onLogout: () => void;
  /**
   * On profile user menu click callback
   * @returns void
   */
  onProfile: () => void;
}

export const Layout: FC<LayoutProps> = ({
  avatar,
  onLogout,
  onProfile,
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
      <Header avatar={avatar} onProfile={onProfile} onLogout={onLogout} />
      <main
        className={finalClasses}
        {...(testId ? { 'data-testid': testId } : {})}
        {...(id ? { id: id } : {})}
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      >
        {children}
      </main>
      <Footer>Copyright</Footer>
    </div>
  );
};

export default Layout;
