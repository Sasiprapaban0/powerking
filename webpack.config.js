const { resolve } = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            Containers: resolve(__dirname, './src/containers/')
            // Actons: resolve(__dirname, './src/actions/'),
            // Components: resolve(__dirname, './src/components/')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.png$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'file-loader' }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        hot: true
    }
};