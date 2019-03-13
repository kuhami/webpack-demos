webpack demos 欢迎学习使用
===============================
 >怎样使用
 
 首先 全局安装 `Webpack` 和 `webpack-dev-server`
 
 ``` npm
 $ npm i -g webpack webpack-dev-server
 ```
 然后 `clone` 项目`webpack-demos`
 
 ```npm
 $ git clone https://github.com/kuhami/webpack-demos.git
 ```
 安装依赖项
 ```npm
 $ cd webpack-demos
 $ npm install
 ```
 现在可以运行 `webpack-demos` 下的文件了
 ```
 $ cd demo01
 $ npm run dev
 ```
 用你的浏览器打开http://127.0.0.1:8080
 
 前言：Webpack是什么
 ===============================
 Webpack是一个像Grunt和Gulp一样的前端构建系统
 
 它类似Browserify，可被用作模块打包并且能够做的更多
 
 ```
 $ browserify main.js > bundle.js
 # be equivalent to
 $ webpack main.js bundle.js
 ```
 它的配置文件是Webpack.config.js
 ```js
 // webpack.config.js
 module.exports = {
   entry: './main.js',
   output: {
     filename: 'bundle.js'
   }
 };
 ```
 在有Webpack.config.js之后，你能不输入任何参数调用Webpack
 ```
 $ webpack
 ```
 需要传递参数调用
 ```npm
 $ npm run build
 ```
 你应该知道一些命令行选项
 ```
 webpack --------- 进行一次开发模式编译　　　　
 webpack -p  ----- 进行一次生产模式编译
 webpack --watch  -------- 持续增量式监控编译
 webpack -d ------- 生成source maps
 webpack --colors   ------- 显示静态资源的颜色
 webpack --display-error-details  ------- 显示更多报错信息
 ```
 为了应用运行的准备，你能像下面那样写在你的package.json文件的scripts里
 ```
 // package.json
 {
   // ...
   "scripts": {
     "dev": "webpack-dev-server --devtool eval --progress --colors",
     "deploy": "NODE_ENV=production webpack -p"
   },
   // ...
 }
 ```