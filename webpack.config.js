const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  devtool: process.env.NODE_ENV === 'develop' ? 'inline-source-map' : 'source-map',
  target: 'node',
  entry: {
    scaffold: './scaffold.ts',
    test: './test.ts',
    cmd: './cmd.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  resolve: {
    extensions: ['.ts']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: ['./examples', 'node_modules']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__dirname': '__dirname'
    }),
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
      include: /cmd\.js/,
    })
  ],
}
