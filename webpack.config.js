/* eslint-disable */
var path              = require('path'),
	webpack           = require('webpack'),
	autoprefixer      = require('autoprefixer'),
	precss            = require('precss'),
	cssnano           = require('cssnano'),
	OpenBrowserPlugin = require('open-browser-webpack-plugin');

var configServe = {
	port: 1113,
};


module.exports = {
	devServer: {
		hot: true,
		inline: true,
		historyApiFallback: true,
		progress: true,
		port: configServe.port,
	},

	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:' + configServe.port,
		path.resolve(__dirname, './src/js/app.jsx'),
	],
	output: {
		path: __dirname,
		filename: './build/js/bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src/js/'),
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				// CSS files :
				test: /\.css?$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'style-loader!css-loader!postcss-loader',
			},
			{
				// URL files :
				test: /\.(png|svg|jpg)$/,
				loader: 'url-loader?limit=100000&name=[hash].[ext]'
			},
		],
	},
	postcss: [
		precss(),
		autoprefixer({ browsers: ['last 10 versions'] }),
		cssnano()
	],

	plugins: [
		// Avoid publishing files when compilation fails
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:' + configServe.port }),
	],

	resolve: {
		extensions: ['', '.js', '.jsx'],
	},

	stats: {
		// Nice colored output
		colors: true,
	},

	// Create Sourcemaps for the bundle
	devtool: 'inline-source-map',
};
