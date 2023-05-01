const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localePath: path.resolve(
      process.env.LOCALES_PATH || './apps/website/public/locales'
    )
  },
};
