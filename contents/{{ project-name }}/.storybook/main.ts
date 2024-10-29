import type { StorybookConfig } from '@storybook/react-vite';

export const rootMain: StorybookConfig = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
};

export const framework = {
  name: '@storybook/react-vite',
  options: {}
};

export const typescript = {
  reactDocgen: 'react-docgen-typescript'
};

export const docs = {
  autodocs: true
};
