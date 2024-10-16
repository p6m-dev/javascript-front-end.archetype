/* eslint-disable */
export default {
  displayName: 'services',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: { syntax: 'typescript', tsx: true },
          transform: { react: { runtime: 'automatic' } },
        },
      },
    ],
  },
  transformIgnorePatterns: [
    '../../../node_modules/(?!(@p6m-dev/clients-contentful)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/services',
};
