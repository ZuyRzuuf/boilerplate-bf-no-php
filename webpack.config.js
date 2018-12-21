const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'build';

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    excludeChunks: [ 'server.node' ]
});
const cleanPlugin = new CleanWebPackPlugin([outputDirectory]);

module.exports = {
    mode: 'development',
    entry: {
        server: './server.node.js',
    },
    output: {
        path: path.join(__dirname, outputDirectory),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'node',
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false, // if you don't put this is, __dirname
        __filename: false, // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    resolve: {
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            // https://www.apollographql.com/docs/react/recipes/webpack.html
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            }
        ]
    },
    plugins: [
        cleanPlugin,
        htmlPlugin
    ]
};
