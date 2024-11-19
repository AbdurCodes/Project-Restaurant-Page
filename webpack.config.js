const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
        // devMiddleware: {
        //     writeToDisk: true, // Enable writing to the disk during `serve`
        // },
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }

}