const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "/src/App.jsx"), 
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};