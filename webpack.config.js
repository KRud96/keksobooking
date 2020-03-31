const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    })]
};