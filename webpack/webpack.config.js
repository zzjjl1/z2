const path = require('path');
const htmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./webpack_config/entry_webpack.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: entry,
    mode: "development",
    entry: {
        "index1": './src/index1.js',
        "index2": './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            // use: ['style-loader', 'css-loader']
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, 'postcss-loader']
            })
        }, {
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    outputPath: 'images/'
                }
            }]
        }, {
            test: /\.(htm|html)$/i,
            loader: 'html-withimg-loader'
        }, {
            test: /\.scss$/,
            // use:['style-loader','css-loader','sass-loader']
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader',
            })
        }, {
            test: /\.(jsx|js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env', 'react'
                    ]
                }
            },
            exclude: /node_modules/
        }, {
            test: /\.(jsx|js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015', 'react'
                    ]
                }
            }
        }]
    },
    plugins: [
        new htmlPlugin({
            template: "./src/index1.html",
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            filename: "index1.html",
            chunks: ['index1']
        }),
        new htmlPlugin({
            template: "./src/index2.html",
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            filename: "index2.html",
            chunks: ['index2']
        }),
        new ExtractTextPlugin('css/styles.css'),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.BannerPlugin('呵呵'),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public',
            to: './public'
        }])
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: '8080',
        compress: true,
        open: true,
       
    },
     watchOptions: {
            poll: 1000,
            aggregeateTimeout: 500,
            ignored: /node_modules/
        }
}