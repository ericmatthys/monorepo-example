const withNextConfig = require('core/utils/config/withNextConfig');

module.exports = withNextConfig({
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: '/sitemap/:path*',
          destination:
            'https://website-static.plex.tv/sitemaps/production/:path*',
        },
      ],
      fallback: [],
    };
  },
});
