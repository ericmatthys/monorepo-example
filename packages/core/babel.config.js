module.exports = function (api) {
  return {
    presets: ['next/babel'],
    plugins: [
      // Strip `data-testid` attributes from non-test builds.
      !api.env('test')
        ? [
            'babel-plugin-jsx-remove-data-test-id',
            {
              attributes: 'data-testid',
            },
          ]
        : null,
    ].filter(Boolean),
  };
};
