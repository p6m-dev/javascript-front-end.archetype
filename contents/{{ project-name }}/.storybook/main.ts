import type { StorybookConfig } from '@storybook/react-vite';

export const rootMain: StorybookConfig = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
};

export const framework = {
  name: '@storybook/react-vite',
  options: {}
};

export const docs = {
  autodocs: true
};
export const addons = ['@chromatic-com/storybook'];
