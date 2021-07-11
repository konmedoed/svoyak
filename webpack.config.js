const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/style.sass',
  module:{
    rules: [{
      test: /.(sass|css)$/,
      exclude: /node_modules/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
          
      },
      'css-loader',
      'postcss-loader',
      'sass-loader',
      ]
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      }
    },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
};