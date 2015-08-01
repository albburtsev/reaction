var chalk = require('chalk'),
    webpack = require('webpack'),
    notifier = require('node-notifier'),
    DevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    builder = webpack(config);

builder.plugin('done', function (stats) {
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
            errorMessage = message[1].replace(/ +/g, ' '),
            errorStat = message.pop();

        notifier.notify({
            title: icon + ' ' + title + ': ' + fileName,
            subtitle: errorMessage,
            message: errorStat,
            open: 'file://' + resource
        });
    }
});

var server = new DevServer(builder, {
    hot: true,
    noInfo: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true
});

server.listen(3000, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
