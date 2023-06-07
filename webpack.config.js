const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.min.[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        assetModuleFilename: 'img/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: 'bundle.min.[contenthash].css'}),
        new CopyWebpackPlugin({patterns:[{from: 'src/assets', to: 'assets'}, {from: 'src/img', to: 'img'}]})
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                type: 'asset/resource'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()]
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    }
}