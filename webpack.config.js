const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['./src/main.ts'],
  plugins: [
    new HtmlWebpackPlugin({hash: true, template: 'src/index.html'}),
  ],
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /sw\.ts$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: '',
          name: 'sw.js?[sha512:hash:base64:6]',
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};

console.log('webpack ran')
