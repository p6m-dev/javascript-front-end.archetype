import { FC } from 'react';
import '../../index';

export interface ColorsProps {
  /**
   * Color palette theme
   */
  theme: string;
}

const Palette: FC = () => {
  return (
    <>
      <p className="typo-sm mb-2">Primary</p>
      <div className="flex flex-row mb-4">
        <div>
          <div className="w-20 h-20 bg-primary-900" />
          <p className="typo-xs text-center">900</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-800" />
          <p className="typo-xs text-center">800</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-700" />
          <p className="typo-xs text-center">700</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-600" />
          <p className="typo-xs text-center">600</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-500" />
          <p className="typo-xs text-center">500</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-400" />
          <p className="typo-xs text-center">400</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-300" />
          <p className="typo-xs text-center">300</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-200" />
          <p className="typo-xs text-center">200</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-100" />
          <p className="typo-xs text-center">100</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-primary-50" />
          <p className="typo-xs text-center">50</p>
        </div>
      </div>
      <p className="typo-sm mb-2">Secondary</p>
      <div className="flex flex-row">
        <div>
          <div className="w-20 h-20 bg-secondary-900" />
          <p className="typo-xs text-center">900</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-800" />
          <p className="typo-xs text-center">800</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-700" />
          <p className="typo-xs text-center">700</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-600" />
          <p className="typo-xs text-center">600</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-500" />
          <p className="typo-xs text-center">500</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-400" />
          <p className="typo-xs text-center">400</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-300" />
          <p className="typo-xs text-center">300</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-200" />
          <p className="typo-xs text-center">200</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-100" />
          <p className="typo-xs text-center">100</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-secondary-50" />
          <p className="typo-xs text-center">50</p>
        </div>
      </div>
    </>
  );
};

export const Colors: React.FC<ColorsProps> = ({ theme }) => {
  return (
    <div>
      <div className={`theme-${theme}`}>
        <p className="typo-default mb-2">Light Mode</p>
        <div className="border rounded mb-6 py-4 px-10 w-min">
          <Palette />
        </div>
      </div>
      <div className={`theme-${theme} dark`}>
        <p className="typo-default mb-2">Dark Mode</p>
        <div className="border rounded mb-6 py-4 px-10 w-min bg-neutral-800 text-white">
          <Palette />
        </div>
      </div>
    </div>
  );
};

export default Colors;
