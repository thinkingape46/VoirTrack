const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Compiler } = require("webpack");
const fse = require('fs-extra');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
    ]

class RunAftercompile {
    apply(compiler) {
        compiler.hooks.done.tap('Copy images', function() {
            fse.copySync('./app/assets/images', './public/assets/images')
        })
    }
}

let cssConfig = {
    test: /\.css$/i,
    use: ['css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
}

let config = {
    entry: './app/assets/scripts/App.js',
    plugins: [],
    module: {
        rules: [
            cssConfig
        ]
    }
};

if (currentTask == 'dev') {
    cssConfig.use.unshift('style-loader');
    config.output = {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    };
    config.devServer = {
        before: function(app, server) {
            server._watch("./app/**/*.html")
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host:'0.0.0.0'
    };
    config.mode = 'development';
}

if (currentTask == 'build') {    
    cssConfig.use.unshift(MiniCSSExtractPlugin.loader);
    config.output = {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, "public")
    };
    config.mode = 'production';
    config.optimization = {
        splitChunks: {chunks: 'all'}
    };
    config.plugins.push(
        new CleanWebpackPlugin(), 
        new MiniCSSExtractPlugin({filename: 'styles.css'}), 
        new RunAftercompile());
}

module.exports = config;