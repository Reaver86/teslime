var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                        'file-loader?hash=sha512&digest=hex&context=src/img&name=img/[hash].[ext]', {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3,
                            }
                        }
                    }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.min.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'}
        ]),
        new CleanWebpackPlugin(['dist'])
    ]
};