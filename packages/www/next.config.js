const withNextConfig = require('core/utils/config/withNextConfig');

module.exports = withNextConfig({
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: '/:path*',
          destination: 'https://www.plex.tv/:path*/',
        },
      ],
    };
  },
});
