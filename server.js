var path = require('path'),
    chalk = require('chalk'),
    express = require('express'),
    webpack = require('webpack'),
    notifier = require('node-notifier'),
    config = require('./webpack.config'),
    exec = require('child_process').exec,
    devMiddleware = require('webpack-dev-middleware'),
    hotMiddleware = require('webpack-hot-middleware'),

    compiler = webpack(config),
    app = express();

compiler.plugin('done', function(stats) {
    var icon,
        title,
        message,
        resource;

    if (stats.hasErrors()) {
        var error = stats.compilation.errors[0];

        title = 'Error';
        icon = '\uD83D\uDEA8';
        message = error.error.toString();
        resource = error.module.resource;
    } else if (stats.hasWarnings()) {
        var warning = stats.compilation.warnings[0];

        title = 'Warning';
        icon = '\uD83D\uDEA8';
        message = warning.warning.toString();
        resource = warning.module.resource;
    }

    if (message) {
        message = chalk.stripColor(message);
        message = message.trim().split('\n');

        var fileName = resource.replace(/^.*\//g, ''),
            errorMessage = (message[1] || message[0]).replace(/ +/g, ' '),
            errorStat = message.pop();

        notifier.notify({
            title: icon + ' ' + title + ': ' + fileName,
            subtitle: errorMessage,
            message: errorStat,
            open: 'file://' + resource
        });
    }
});

app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
    if (err) {
        return console.error(err);
    }

    exec('open http://0.0.0.0:3000/');
    console.log('Listening at http://0.0.0.0:3000/');
});
