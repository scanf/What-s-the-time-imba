let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.imba$/,
        loader: 'imba/loader',
      },
    ],
  },
  resolve: {
    extensions: [".imba", ".js", ".json"]
  },
  entry: ["./src/index.imba"],
  output: {  path: __dirname + '/dist', filename: "client.js" },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
}