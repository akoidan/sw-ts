const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const name = '[name].[ext]?[sha512:hash:base64:6]';

module.exports = (env, argv) => {

  const conf = {
    entry: ['./src/main.ts'],
    plugins: [
      new HtmlWebpackPlugin({hash: true, template: 'src/index.html'}),
    ],
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    devtool: '#source-map',
    module: {
      rules: [
        {
          test: /sw\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: '',
                name: 'sw.js?[sha512:hash:base64:6]',
              }
            },
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
      ],
    },
  };

  return conf;
};
