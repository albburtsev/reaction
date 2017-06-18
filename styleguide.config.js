module.exports = {
    verbose: true,
    // defaultExample: true,
    title: 'React Style Guide Example',
    // components: 'src/components/**/*.{jsx,tsx}',
    components: 'src/components/common/Input/*.tsx',
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: {
        module: {
            loaders: [
                {
                    test: /\.(ts|tsx)?$/,
                    loader: 'awesome-typescript-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel'
                }
            ]
        }
    }
};
