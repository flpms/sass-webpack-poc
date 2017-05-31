const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const extractCSS = new ExtractTextPlugin('./dist/css/[name].css');

module.exports = {
	entry: ['./app/index.js', './app/index.scss'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
				loader: "html-loader"
			}]
        },{
			test: /\.css$/,
            loader: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		},
		{
			test: /\.scss$/,
	        loaders: ['raw-loader', 'sass-loader']
	      },
	      {
	        test: /\.css$/,
	        loader: 'raw-loader'
	      }]
    },
    plugins: [
		extractCSS,
        new HtmlWebpackPlugin({
			alwaysWriteToDisk: true
		}),
		new HtmlWebpackHarddiskPlugin(),
		new HtmlWebpackIncludeAssetsPlugin({ assets: [], append: true })
    ],
};
