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

export const addons = ['@chromatic-com/storybook'];

export const typescript = {
  reactDocgen: 'react-docgen-typescript'
};