'use client';

import { useState, useEffect } from 'react';
import { IconSun, IconMoon } from '@nax-tech/icons-web';

export const ModeSwitch = () => {
  const [isDarkMode, toggleMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      <button
        className="w-7 h-7 flex items-center justify-center border border-slate-500 rounded-full relative z-30"
        onClick={() => toggleMode(!isDarkMode)}
        title="Mode Switch"
      >
        {isDarkMode ? (
          <IconSun className="w-5 fill-slate-500" />
        ) : (
          <IconMoon className="w-5 fill-slate-500" />
        )}
      </button>
    </div>
  );
};