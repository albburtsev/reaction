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
        loaders: [
            {
                test: /\.styl$/,
                loaders: [
                    'style',
                    'typings-for-css-modules?modules&namedExport&camelCase',
                    'stylus'
                ]
            }
        ]
    }
});
