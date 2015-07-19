'use strict';

var _ = require('lodash'),
    path = require('path'),
    webpack = require('webpack'),
    project = require('./package.json'),

    TARGET = process.env.TARGET,
    ROOT_PATH = path.resolve(__dirname),
    SOURCE_PATH = path.join(ROOT_PATH, 'src/'),
    BUILD_PATH = path.join(ROOT_PATH, 'build/'),
    NODE_PATH = path.join(ROOT_PATH, 'node_modules'),

    BANNER = _.template(
        '<%= name %> v<%= version %>\n' +
        '<%= description %>\n' +
        '@author <%= author %>'
    )(project);
 
// @todo: dev-configuration for proxy server
// @todo: eslint preloader
// @todo: standalone css bundle (sourcemap)
// @todo: sourcemap only for chunk with real sources
// @todo: debug-mode

var config = {
    entry: {
        app: [path.join(SOURCE_PATH, 'app.js')],
        vendors: ['react']
    },
    resolve: {
        root: [SOURCE_PATH]
    },
    resolveLoader: {
        root: [NODE_PATH]
    },
    output: {
        path: BUILD_PATH,
        publicPath: 'build/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js'),
        new webpack.ProvidePlugin({
            'Block': 'bem-cn'
        })
    ]
};

if (TARGET !== 'production') {
    // Adds hot loader for webpack-dev-server in bundles
    config.entry.app.unshift('webpack/hot/dev-server');
} else {
    // Minifies all bundles in production build
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    }));

    // Adds banner to minified bundles
    config.plugins.push(new webpack.BannerPlugin(BANNER));
}

module.exports = config;
