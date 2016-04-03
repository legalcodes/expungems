var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file" },
			{test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};

