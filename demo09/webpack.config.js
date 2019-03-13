// webpack.config.js
var webpack = require('webpack');
console.log('0-0-0-0-0-0-0-0-0-0-0-',process.env.DEBUG);
var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [devFlagPlugin]
};