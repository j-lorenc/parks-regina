const withSass = require('@zeit/next-sass')

module.exports = withSass({
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
		  fs: 'empty'
		}

		return config
	},
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]_[hash:base64:5]",
	}
})
