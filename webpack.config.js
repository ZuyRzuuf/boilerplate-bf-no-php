const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'build';

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});
const cleanPlugin = new CleanWebPackPlugin([outputDirectory]);

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /.js$/,
                loader: 'source-map-loader',
                exclude: /node_modules/,
                enforce: 'pre',
            },
            {
                test: /\.(js|tsx)$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            },
            // https://www.apollographql.com/docs/react/recipes/webpack.html
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        cleanPlugin,
        htmlPlugin
    ]
};
