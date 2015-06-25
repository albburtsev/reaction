'use strict';

var path = require('path'),
    sourcePath = path.join(__dirname, 'src/'),
    buildPath = path.join(__dirname, 'build/'),
    nodePath = path.join(__dirname, 'node_modules');

// @todo: minified production build (sourcemap)
// @todo: eslint preloader
// @todo: standalone css bundle (sourcemap)

var config = {
    entry: [
        'webpack/hot/dev-server',
        path.join(sourcePath, 'app.js')
    ],
    resolve: {
        root: [sourcePath]
    },
    resolveLoader: {
        root: [nodePath]
    },
    output: {
        path: buildPath,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
