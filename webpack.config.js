const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './renderer/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',

    },
    devtool: 'cheap-module-source-map',
    externals: {
        react: 'react'
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    plugins: [
                        'transform-runtime',
                        'transform-decorators-legacy',
                    ],
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    }
}