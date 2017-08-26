var _ = require('lodash'),
    path = require('path'),
    webpack = require('webpack'),
    rootPath = path.resolve(__dirname),
    sourcePath = path.join(rootPath, 'src/'),
    buildPath = path.join(rootPath, 'build/'),
    nodePath = path.join(rootPath, 'node_modules');

module.exports = {
    entry: {
        app: [
            path.join(sourcePath, 'app.tsx')
        ],
        vendors: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'redux-thunk',
            'react-router-dom'
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: [sourcePath, 'node_modules']
    },
    output: {
        path: buildPath,
        publicPath: '/build/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)?$/,
            use: [{
                loader: 'ts-loader'
            }]
        }, {
            test: /\.(js|jsx)$/,
            exclude: nodePath,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.png$/,
            use: [{
                loader: 'file-loader'
            }]
        }, {
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'eslint-loader'
            }],
            enforce: 'pre'
        }, {
            test: /\.js$/,
            use: [{
                loader: 'source-map-loader'
            }],
            enforce: 'pre'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    import: [
                        '~styl/palette.styl',
                        '~styl/typography.styl'
                    ]
                }
            }
        })
    ],
    devtool: 'source-map'
};
