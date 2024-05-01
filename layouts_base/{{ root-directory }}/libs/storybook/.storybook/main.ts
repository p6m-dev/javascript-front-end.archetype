/// <reference types="vitest" />
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { rootMain } from '../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  ...rootMain,
  core: { ...rootMain.core, builder: '@storybook/builder-vite' },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  stories: [
    '../../design-system/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../components/web/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../features/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials', ...(rootMain.addons || [])],
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
};

module.exports = config;
