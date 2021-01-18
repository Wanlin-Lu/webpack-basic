const webpack = require('webpack')
const { merge } = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	devtool: 'source-map',
	module: {
		rules: [
			{
        test: /\.(scss|sass|css)$/,
        use: ['style-loader','css-loader','sass-loader']
      }
		]
	},
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
})