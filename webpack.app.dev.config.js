const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',
    resolve: {
        extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
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
            },
            // {
            //     // Loads the javacript into html template provided.
            //     // Entry point is set below in HtmlWebPackPlugin in Plugins
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: "html-loader",
            //             //options: { minimize: true }
            //         }
            //     ]
            // },
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ]
            // },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: ['file-loader']
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            excludeChunks: [ 'server.node' ]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
