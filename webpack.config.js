const path = require('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')}
        ,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port:3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
              test:/\.scss$/,
              use:[
                'style-loader', 
                'css-loader',
                'sass-loader'
              ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'webpack App',
                filename: 'index.html',
                template: 'src/index.html'
            }
        )
    ]
}