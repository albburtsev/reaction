var _ = require('lodash'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    commonConfig = require('./webpack.config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),

    project = require('./package.json'),
    banner = _.template(
        '<%= name %> v<%= version %>\n' +
        '<%= description %>\n' +
        '@author <%= author %>'
    )(project);

/*
 * Production build:
 * — minification
 * — sepatate bundle for css
 * — banner for minified files
 * — optimizied production build for React (thru NODE_ENV variable)
 */
module.exports = merge(commonConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.BannerPlugin(banner)
    ],
    module: {
        rules: [{
            test: /\.styl$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'typings-for-css-modules-loader',
                    options: {
                        modules: true,
                        namedExport: true,
                        camelCase: true
                    }
                }, {
                    loader: 'stylus-loader'
                }]
            })
        }]
    }
});
