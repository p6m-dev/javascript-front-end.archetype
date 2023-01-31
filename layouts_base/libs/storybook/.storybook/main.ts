/// <reference types="vitest" />
import { rootMain } from '../../../.storybook/main';
import type { StorybookViteConfig } from '@storybook/builder-vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookViteConfig = {
  ...rootMain,
  core: { ...rootMain.core, builder: '@storybook/builder-vite' },
  stories: [
    ...rootMain.stories,
    '../../design-system/src/lib/**/*.stories.mdx',
    '../../design-system/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...(rootMain.addons || []), 'storybook-zeplin/register'],
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
