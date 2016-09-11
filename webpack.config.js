const webpack = require('webpack');
const path    = require('path');
const conf    = require('./package.json').config;

module.exports = {
	entry: {
		vendor: ['jquery'],
		main: path.resolve(conf.scripts.dev+'main.js'),
		contato: path.resolve(conf.scripts.dev+'contato.js')
	},
	output: {
		filename: 'bundle.[name].js',
		publicPath: path.resolve(conf.dist),
		path: path.resolve(conf.scripts.dist)
	},
	devtool: 'source-map',
	debug: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel?presets[]=es2015'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
            async: true
		})
	]
}
