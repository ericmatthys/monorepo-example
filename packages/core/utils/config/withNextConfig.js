const createTMPlugin = require('next-transpile-modules');

const withTM = createTMPlugin(['core']);

module.exports = function withNextConfig(config) {
  const { i18n, images, headers, ...options } = config;

  return withTM({
    ...options,

    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
      ...i18n,
    },

    images: {
      domains: ['images.plex.tv', 'provider-static.plex.tv'],
      deviceSizes: [640, 1280, 1920],
      formats: ['image/avif', 'image/webp'],
      imageSizes: [60, 120, 240, 360, 480],
      ...images,
    },

    typescript: {
      ignoreBuildErrors: true,
    },

    async headers() {
      const result = headers ? await headers() : [];

      return [
        {
          // Apply these headers to all routes.
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
          ],
        },
        {
          source: '/.well-known/apple-app-site-association',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/json',
            },
          ],
        },
        {
          source: '/fonts/circular-bold.woff2',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        ...result,
      ];
    },
  });
};
