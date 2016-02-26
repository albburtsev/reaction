var _ = require('lodash'),
    path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    project = require('./package.json'),

    rootPath = path.resolve(__dirname),
    sourcePath = path.join(rootPath, 'src/'),
    buildPath = path.join(rootPath, 'build/'),
    nodePath = path.join(rootPath, 'node_modules'),

    isDevelopment = process.env.NODE_ENV !== 'production',
    banner = _.template(
        '<%= name %> v<%= version %>\n' +
        '<%= description %>\n' +
        '@author <%= author %>'
    )(project);

// @todo: dev-configuration for proxy server
// @todo: sourcemap only for chunk with real sources
// @todo: debug-mode
// @todo: stage=0 and static properties for default props and prop types

var entryApp = [path.join(sourcePath, 'app.js')],
    plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            block: 'bem-cn'
        }),
        new webpack.NoErrorsPlugin()
    ],
    stylusLoader = 'style!css!stylus';

/*
 * Development build:
 * — react-hot-loader
 */
if (isDevelopment) {
    entryApp = [
        'webpack-hot-middleware/client'
    ].concat(entryApp);

    plugins = plugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ]);

/*
 * Production build:
 * — minification
 * — sepatate bundle for css
 * — banner for minified files
 * — optimizied production build for React (thru NODE_ENV variable)
 */
} else {
    plugins = plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.BannerPlugin(banner)
    ]);

    stylusLoader = ExtractTextPlugin.extract('style', 'css!stylus');
}

module.exports = {
    entry: {
        app: entryApp,
        vendors: [
            'react',
            'react-dom',
            'react-router',
            'history',
            'bem-cn'
        ]
    },
    resolve: {
        root: [sourcePath]
    },
    resolveLoader: {
        root: [nodePath]
    },
    output: {
        path: buildPath,
        publicPath: '/build/',
        filename: '[name].bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: nodePath,
                loaders: ['babel']
            },
            {
                test: /\.styl$/,
                loader: stylusLoader
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.png$/,
                loader: 'file'
            }
        ]
    },
    stylus: {
        import: [
            '~styl/flexbox.styl',
            '~styl/palette.styl',
            '~styl/typography.styl'
        ]
    },
    plugins: plugins,
    devtool: 'cheap-source-map'
};
