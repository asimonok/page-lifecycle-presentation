const config = require('./common.config');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  ...config,
  target: 'node',
  entry: {
    server: './src/server/index.js',
  },
  externals: nodeExternals(),
}
