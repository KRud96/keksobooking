const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'img',
                            outputPath: 'img',
                            useRelativePath: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    }),
    new CopyPlugin([
        { from: 'img', to: 'img' },
        { from: 'favicon.ico', to: 'favicon.ico' }
    ]),]
};