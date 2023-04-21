/* eslint-disable no-self-compare */
import { FC } from 'react';
import { colors, modes, themes } from '../tokens/colors';

export interface ColorsProps {
  /**
   * Color palette theme
   */
  theme: string;
}

interface PaletteProps {
  name: string;
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

interface ColorType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Palette: FC<PaletteProps> = ({ name }) => {
  const colorTypes = colors as ColorType;
  return (
    <>
      <p className="text-sm mb-2">{capitalize(name)}</p>
      <div className="flex flex-row mb-4">
        {Object.keys(colorTypes[name])
          .sort((a, b) => (parseInt(a, 10) > parseInt(b, 10) ? -1 : 1))
          .map((color: string, index: number) => (
            <div key={index}>
              <div className={`w-20 h-20 bg-${name}-${color}`} />
              <p className="text-xs text-center">{color}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export const Colors: React.FC<ColorsProps> = () => {
  return (
    <div>
      {themes.map((theme) => (
        <div className={`theme-${theme}`}>
          {modes.map((mode) => {
            return (
              <div className={`theme-${theme} ${mode}`}>
                <p className="text-sm mb-2">
                  {capitalize(theme)} - {capitalize(mode)}
                </p>
                <div
                  className={`border rounded mb-6 py-4 px-10 w-min ${
                    mode === 'dark' ? 'bg-neutral-800 text-white' : ''
                  }`}
                >
                  {Object.keys(colors).map((color) => (
                    <Palette name={color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Colors;
