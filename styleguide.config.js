module.exports = {
    verbose: true,
    showCode: false,
    showUsage: true,
    title: 'Incredibly pretty style guide',
    // components: 'src/components/**/*.{jsx,tsx}',
    components: 'src/components/common/Input/*.tsx',
    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('./webpack.config.dev')
};
