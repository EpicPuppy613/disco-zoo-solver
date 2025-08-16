const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devServer: {
        port: 9000
    }
}

module.exports = (env, argv) => {
    const devMode = argv.mode === "development";

    config.module.rules[1].use.unshift(devMode ? 'style-loader' : MiniCssExtractPlugin.loader);

    if (devMode) {
        config.devtool = 'eval-source-map';
    } else {
        config.plugins.push(new MiniCssExtractPlugin());
    }
  
    return config;
};