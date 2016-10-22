let webpack = require('webpack'),
    merge = require('webpack-merge'),
    commonConfig = require('./webpack.config');

/*
 * Development build:
 * — react-hot-loader
 */
module.exports = merge(commonConfig, {
    entry: {
        app: ['webpack-hot-middleware/client']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: 'style!css?localIdentName=[name]__[local]__[hash:base64:5]&modules!stylus'
            }
        ]
    }
});
