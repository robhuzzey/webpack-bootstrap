var path = require( 'path' );
module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: []
}