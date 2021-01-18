const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader','css-loader','sass-loader',]
      }
    ]
  },
	devServer: {
		contentBase: path.join(__dirname,'dist'),
		inline: true,
		port: 9000
	}
})