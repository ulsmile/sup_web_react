const ExtractTextPlugin
	= require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
  entry: {
		//"./src.App.js"
		js: './entry.js',//changed name "App.js to entry.js"
		css: './entry.css'
	},
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.[name]"
  },
		plugins: [
			new ExtractTextPlugin('bundle.css'),
		],
		devtool: 'source-map',
  devServer: {
		contentBase: './dist/',
    port: 8080,
		inline: true,
		historyApiFallback: true,},
  module: {
    loaders: [
      { test: /\.js$/,  loader: "babel-loader" , exclude: /node_modules/ },
			{
				test: /\.css$/,
			 	use: ExtractTextPlugin.extract(
					{
						fallback: "style-loader",
						use: ['css-loader',{
							loader: 'postcss-loader',
							options:{
								plugins: () => [
									require('postcss-easy-import')({glob: true}),
									]
								},
							},
						]
						}
					),
			}
    ],
			
  }
}
