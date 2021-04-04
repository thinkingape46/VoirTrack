const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Compiler } = require("webpack");
const fse = require("fs-extra");

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

class RunAftercompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy images", function () {
      fse.copySync("./app/assets/images", "./public/assets/images");
      fse.copySync("./app/assets/tracks", "./public/assets/tracks");
    });
  }
}

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "main-bundled.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "production",
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({ filename: "styles.css" }),
    new RunAftercompile(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader?url=false",
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } },
        ],
      },
    ],
  },
};

// module.exports = config;
