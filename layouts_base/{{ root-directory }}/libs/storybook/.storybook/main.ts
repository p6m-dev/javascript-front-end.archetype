/// <reference types="vitest" />
import { rootMain } from '../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  ...rootMain,
  core: { ...rootMain.core, builder: '@storybook/builder-vite' },
  stories: [
    ...rootMain.stories,
    '../../design-system/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../components/web/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../features/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    ...(rootMain.addons || []),
    'storybook-zeplin/register',
  ],
  viteFinal: async (config, options) => {
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(
      viteTsConfigPaths({
        root: '../../../',
      })
    );
    return config;
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
};

module.exports = config;
