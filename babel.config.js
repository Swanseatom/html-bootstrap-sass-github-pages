module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        targets: {
          chrome: '30',
          ie: '11',
        },
      },
    ],
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
