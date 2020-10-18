const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const plugins = [
    new MiniCssExtractPlugin({
        filename: "styles.css",
    }),
]
const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './src/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react'
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader'
            ],
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true
    },
    plugins
}

module.exports = serverConfig;