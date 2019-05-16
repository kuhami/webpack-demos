var path = require('path');
module.exports = {
    entry: {
        bundle:'./index.js',//多文件入口
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',//创建多个文件
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
        ]
    }
};