/* eslint-disable */
var path              = require('path'),
	webpack           = require('webpack'),
	autoprefixer      = require('autoprefixer'),
	precss            = require('precss'),
	cssnano           = require('cssnano'),
	mix               = require('postcss-color-mix'),
	uglifyJsPlugin    = webpack.optimize.UglifyJsPlugin;


module.exports = {
	entry: [
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
		mix(),
		precss(),
		autoprefixer({ browsers: ['last 10 versions'] }),
		cssnano()
	],

	resolve: {
		extensions: ['', '.js', '.jsx'],
	},

	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],


	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};
