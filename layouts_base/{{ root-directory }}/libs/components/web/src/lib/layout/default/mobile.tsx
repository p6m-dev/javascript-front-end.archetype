'use client';

import { useEffect, useState, MouseEvent } from 'react';
import cx from 'classnames';
import { IconMenuOutlined, IconCloseOutlined } from '@nax-tech/icons-web';
import styles from './default.module.css';
import { Navigation } from './navigation';

export const MobileNavigation = () => {
  const [isOpen, toggleNavigation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        toggleNavigation(false);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('resize', handleResize);
    const handleLocationChange = () => {
      toggleNavigation(false);
    };
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleBackdropClick = () => {
    toggleNavigation(false);
  };

  const handleMenuClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="block lg:hidden">
      <div
        className="relative z-30 cursor-pointer"
        onClick={() => toggleNavigation(!isOpen)}
      >
        {isOpen ? (
          <IconCloseOutlined className="w-5 mr-s dark:fill-slate-400" />
        ) : (
          <IconMenuOutlined className="w-5 mr-s dark:fill-slate-400" />
        )}
      </div>
      <div
        className={cx(
          'fixed z-20 top-0 left-0 w-screen h-screen overflow-hidden bg-black/20 flex',
          styles.blur,
          {
            hidden: !isOpen,
          }
        )}
        onClick={handleBackdropClick}
      >
        <div
          className="flex-1 max-w-[400px] bg-white dark:bg-slate-900"
          onClick={handleMenuClick}
        >
          <nav className="mt-24 pl-m">
            <Navigation />
          </nav>
        </div>
      </div>
    </div>
  );
};
