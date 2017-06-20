var webpack = require('webpack'),
    merge = require('webpack-merge'),
    commonConfig = require('./webpack.config');

/*
 * Development build:
 * — react-hot-loader
 */
module.exports = merge(commonConfig, {
    entry: {
        app: [
            require.resolve('react-dev-utils/webpackHotDevClient')
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.styl$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true,
                    camelCase: true
                }
            }, {
                loader: 'stylus-loader'
            }]
        }]
    }
});
