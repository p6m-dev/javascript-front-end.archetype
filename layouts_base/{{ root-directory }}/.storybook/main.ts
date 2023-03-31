import type { StorybookViteConfig } from '@storybook/builder-vite';

export const rootMain: StorybookViteConfig = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    return config;
  },
};
