var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
 
module.exports = {
    entry: {
		bundle: './src/main.ts',
		options: "./src/options.ts"
	},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
			{ 
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: 'css-loader'
				})
			},
			{
				 test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
				 loader: "file-loader" 
			},
			{
				test: /\.(woff|woff2)$/, 
				loader:"url-loader?prefix=font/&limit=5000" 
			},
			{ 
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
			},
			{ 
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
			}
        ]
    },
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		// https://github.com/NMFR/optimize-css-assets-webpack-plugin
		new OptimizeCssAssetsPlugin()
	],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};