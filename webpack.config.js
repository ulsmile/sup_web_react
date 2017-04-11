module.exports = {
  entry: "./src/App.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    port: 3002
  },
  module: {
    loaders: [
      { test: /\.js$/,  loader: "babel-loader" , exclude: /node_modules/ }
    ]
  }
}
