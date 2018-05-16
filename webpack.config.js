var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    main: ['babel-polyfill', './js/index.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: '[name].min.js'
  },
  plugins: debug ? [
  ] : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: {
      verbose: true,
      disableDotRule: true,
      index: '/'
    }
  }
}
