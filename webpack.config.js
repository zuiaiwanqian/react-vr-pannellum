const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * webpack插件将打包好的文件注入到html模板里
 * @type {HtmlWebpackPlugin}
 */
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./public/index.html"),
  filename: "./index.html",
});

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./public/app.js"), //入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|.jsx/, //正则匹配文件名称
        use: "babel-loader", //会去调用babel.config.js里的所有babel的配置
        exclude: /node_modules/,
      },
      {
        test: /\.css|l.ess$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [htmlWebpackPlugin], //插件：自动注入编译打包好的文件
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3001, //端口号
    open: true, // 自动打开浏览器
    compress: true, // 启动gzip压缩
  },
};
