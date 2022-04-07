const presets = [
  [
    '@babel/preset-env',
  ],
  '@babel/preset-react'
];

const plugins = [
  '@babel/plugin-syntax-jsx',
];

const env = {
  test: {
    plugins: ['babel-plugin-dynamic-import-node']
  }
};

module.exports = (api = {}) => {
  if (api.cache) {
    api.cache(true);
  }

  return {
    presets,
    plugins,
    env
  };
};
