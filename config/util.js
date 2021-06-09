const path = require('path');
const environment = require('./environment');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports.configureCssLoaders = prod => {
  return [
    {
      test: /\.css$/,
      use: [
        {
          loader: prod ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: prod ? false : true,
            importLoaders: 2,
            modules: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config: path.resolve(__dirname, 'postcss.config.js'),
            },
          },
        },
      ],
    },
    {
      test: /\.(sass|scss)$/,
      use: [
        {
          loader: prod ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: prod ? false : true,
          },
        },
      ],
    },
  ];
};

module.exports.configureOutput = prod => {
  return {
    path: prod ? environment.paths.outputProd : environment.paths.output,
    filename: 'assets/js/[name].[chunkhash].js',
    assetModuleFilename: 'asset/images/[name].[hash][ext]',
  };
};

module.exports.configureCopyWebpackPlugin = prod => {
  const toCopyPublic = path.resolve(
    prod ? environment.paths.outputProd : environment.paths.output,
    'assets/public',
  );
  return new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(environment.paths.public),
        to: toCopyPublic,
        toType: 'dir',
        globOptions: {
          ignore: ['**/index.*'],
        },
      },
    ],
  });
};
