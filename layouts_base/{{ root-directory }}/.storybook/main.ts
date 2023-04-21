import type { StorybookConfig } from '@storybook/react-vite';

export const rootMain: StorybookConfig = {
  stories: [],
  addons: ['@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
};
