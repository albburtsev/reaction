module.exports = {
    verbose: true,
    showCode: false,
    showUsage: true,
    title: 'Incredibly pretty style guide',
    components: 'src/components/common/**/*.tsx',
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('./webpack.config.dev')
};
