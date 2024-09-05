const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './dashboard/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dashboard/dist'),
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // disable during development
              disable: true, // disable optimization
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dashboard/dist/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  mode: 'development',
};
