const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const content = [
  join(
    __dirname,
    '../design-system/{src,pages,components}/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html}'
  ),
  join(
    __dirname,
    '../components/web/{src,pages,components}/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html}'
  ),
  join(
    __dirname,
    '../../node_modules/@nax-tech/components-web/**/*!(*.stories|*.spec).{js,jsx,html}'
  ),
  ...createGlobPatternsForDependencies(__dirname),
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content,
  darkMode: 'class',
  plugins: [],
  presets: [require('../../design-system/src/tailwind-presets.json')],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^text-/,
    },
    {
      pattern: /^(m-|mb-|mt-|my-|mx-|ml-|mr-)/,
    },
    {
      pattern: /^(p-|pb-|pt-|py-|px-|pl-|pr-)/,
    },
  ],
};
