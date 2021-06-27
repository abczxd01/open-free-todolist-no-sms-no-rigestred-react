const path = require('path');
const fs = require('fs');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const environment = require('./environment');

const config = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      $app: path.resolve(environment.paths.source, 'app'),
      $img: path.resolve(environment.paths.source, 'images'),
    },
  },
  entry: {
    main: path.resolve(environment.paths.source, 'index.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      hash: false,
      filename: 'index.html',
      template: path.resolve(environment.paths.public, 'index.html'),
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
};
if (environment.analyze) {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  );
}

module.exports = config;
