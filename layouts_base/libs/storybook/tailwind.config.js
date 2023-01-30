const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

const content = [
  join(
    __dirname,
    '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
  ),
  join(
    __dirname,
    '../components/web/{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
  ),
  join(
    __dirname,
    '../design-system/{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
  ),
  ...createGlobPatternsForDependencies(__dirname),
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content,
  darkMode: 'class',
  plugins: [],
  presets: [require('../../tailwind-presets.json')],
};
