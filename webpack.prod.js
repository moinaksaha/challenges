const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});