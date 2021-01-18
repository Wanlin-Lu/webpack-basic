const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: {
		app: path.join(__dirname,'src','index.js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname,'src'),
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'dist')
	}
}