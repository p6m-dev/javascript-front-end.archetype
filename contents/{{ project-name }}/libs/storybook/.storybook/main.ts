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

  stories: ['../../design-system/src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))', '../../components/web/src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))', '../../features/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    ...(rootMain.addons || []),
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

  docs: {}
};

module.exports = config;
