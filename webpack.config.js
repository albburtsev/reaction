let _ = require('lodash'),
    path = require('path'),
    webpack = require('webpack'),
    rootPath = path.resolve(__dirname),
    sourcePath = path.join(rootPath, 'src/'),
    buildPath = path.join(rootPath, 'build/'),
    nodePath = path.join(rootPath, 'node_modules');

module.exports = {
    entry: {
        app: [
            path.join(sourcePath, 'app.js')
        ],
        vendors: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    resolve: {
        root: [sourcePath],
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
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
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ],
        loaders: [
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: nodePath,
                loader: 'babel'
            },
            {
                test: /\.(json)$/,
                loader: 'json'
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
            '~styl/layout.styl',
            '~styl/palette.styl',
            '~styl/typography.styl'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'source-map'
};
