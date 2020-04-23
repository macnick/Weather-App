const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    }),
  ],
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
  }
};
