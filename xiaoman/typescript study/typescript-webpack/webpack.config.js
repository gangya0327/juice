const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  devServer: {
    port: 7001,
    proxy: {},
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
