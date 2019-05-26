const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash:8].js",
    chunkFilename: "[name].[hash:8].js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ]),
    new ExtractTextPlugin('styles.[hash:8].css'),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      hash: false,
      inject: true,
      compile: true,
      favicon: false,
      minify: true,
      cache: true,
      showErrors: true,
      chunks: "all",
      excludeChunks: [],
      xhtml: true
    }),
    new CompressionPlugin()
  ]
};
