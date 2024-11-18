const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],

    devtool: 'eval-source-map',

    devServer: {
        watchFiles: ['./src/template.html'],
        static: './dist',
        port: 8080,
        open: true,
    },
    
}