process.env.NODE_ENV = 'development';

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var historyApiFallback = require('connect-history-api-fallback');
var httpProxyMiddleware = require('http-proxy-middleware');
var clearConsole = require('react-dev-utils/clearConsole');
var formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
var getProcessForPort = require('react-dev-utils/getProcessForPort');
var openBrowser = require('react-dev-utils/openBrowser');
var prompt = require('react-dev-utils/prompt');
var pathExists = require('path-exists');
var config = require('../webpack.config.dev');

var rootPath = fs.realpathSync(process.cwd());
var packageJsonPath = path.join(rootPath, 'package.json');

var defaultPort = 3000;
var compiler;

function setupCompiler(host, port, protocol) {
    var isFirstCompile = true;

    compiler = webpack(config);

    compiler
        .plugin('invalid', function() {
            console.log('Compiling...');
        })
        .plugin('done', function(stats) {
            var messages = formatWebpackMessages(stats.toJson({}, true));
            var isSuccessful = !messages.errors.length && !messages.warnings.length;
            var showInstructions = isSuccessful && isFirstCompile;

            if (isSuccessful) {
                console.log(chalk.green('Compiled successfully!'));
            }

            if (showInstructions) {
                console.log();
                console.log('The app is running at:');
                console.log();
                console.log('  ' + chalk.cyan(protocol + '://' + host + ':' + port + '/'));
                console.log();
                console.log('Note that the development build is not optimized.');
                console.log('To create a production build, use ' + chalk.cyan('yarn run build') + '.');
                console.log();
                isFirstCompile = false;
            }

            if (messages.errors.length) {
                console.log(chalk.red('Failed to compile.'));
                console.log();
                messages.errors.forEach(message => {
                    console.log(message);
                    console.log();
                });
                return;
            }

            if (messages.warnings.length) {
                console.log(chalk.yellow('Compiled with warnings.'));
                console.log();

                messages.warnings.forEach(message => {
                    console.log(message);
                    console.log();
                });
            }
        });
}

// We need to provide a custom onError function for httpProxyMiddleware.
// It allows us to log custom error messages on the console.
function onProxyError(proxy) {
    return function(err, req, res){
        var host = req.headers && req.headers.host;
        console.log(
            chalk.red('Proxy error:') + ' Could not proxy request ' + chalk.cyan(req.url) +
            ' from ' + chalk.cyan(host) + ' to ' + chalk.cyan(proxy) + '.'
        );
        console.log(
            'See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (' +
            chalk.cyan(err.code) + ').'
        );
        console.log();

        // And immediately send the proper error response to the client.
        // Otherwise, the request will eventually timeout with ERR_EMPTY_RESPONSE on the client side.
        if (res.writeHead && !res.headersSent) {
                res.writeHead(500);
        }
        res.end('Proxy error: Could not proxy request ' + req.url + ' from ' +
            host + ' to ' + proxy + ' (' + err.code + ').'
        );
    }
}

function addMiddleware(devServer) {
    // `proxy` lets you to specify a fallback server during development.
    // Every unrecognized request will be forwarded to it.
    var proxy = require(packageJsonPath).proxy;
    devServer.use(historyApiFallback({
        // Paths with dots should still use the history fallback.
        // See https://github.com/facebookincubator/create-react-app/issues/387.
        disableDotRule: true,
        // For single page apps, we generally want to fallback to /index.html.
        // However we also want to respect `proxy` for API calls.
        // So if `proxy` is specified, we need to decide which fallback to use.
        // We use a heuristic: if request `accept`s text/html, we pick /index.html.
        // Modern browsers include text/html into `accept` header when navigating.
        // However API calls like `fetch()` won’t generally accept text/html.
        // If this heuristic doesn’t work well for you, don’t use `proxy`.
        htmlAcceptHeaders: proxy ?
            ['text/html'] :
            ['text/html', '*/*']
    }));
    if (proxy) {
        if (typeof proxy !== 'string') {
            console.log(chalk.red('When specified, "proxy" in package.json must be a string.'));
            console.log(chalk.red('Instead, the type of "proxy" was "' + typeof proxy + '".'));
            console.log(chalk.red('Either remove "proxy" from package.json, or make it a string.'));
            process.exit(1);
        }

        // Otherwise, if proxy is specified, we will let it handle any request.
        // There are a few exceptions which we won't send to the proxy:
        // - /index.html (served as HTML5 history API fallback)
        // - /*.hot-update.json (WebpackDevServer uses this too for hot reloading)
        // - /sockjs-node/* (WebpackDevServer uses this for hot reloading)
        // Tip: use https://jex.im/regulex/ to visualize the regex
        var mayProxy = /^(?!\/(index\.html$|.*\.hot-update\.json$|sockjs-node\/)).*$/;

        // Pass the scope regex both to Express and to the middleware for proxying
        // of both HTTP and WebSockets to work without false positives.
        var hpm = httpProxyMiddleware(pathname => mayProxy.test(pathname), {
            target: proxy,
            logLevel: 'silent',
            onError: onProxyError(proxy),
            secure: false,
            changeOrigin: true,
            ws: true
        });
        devServer.use(mayProxy, hpm);

        // Listen for the websocket 'upgrade' event and upgrade the connection.
        // If this is not done, httpProxyMiddleware will not try to upgrade until
        // an initial plain HTTP request is made.
        devServer.listeningApp.on('upgrade', hpm.upgrade);
    }

    // Finally, by now we have certainly resolved the URL.
    // It may be /index.html, so let the dev server try serving it again.
    devServer.use(devServer.middleware);
}

function runDevServer(host, port, protocol) {
    var devServer = new WebpackDevServer(compiler, {
        compress: true,
        clientLogLevel: 'none',
        contentBase: rootPath,
        hot: true,
        publicPath: config.output.publicPath,
        quiet: true,
        watchOptions: {
            ignored: /node_modules/
        },
        https: protocol === "https",
        host: host
    });

    // Our custom middleware proxies requests to /index.html or a remote API.
    addMiddleware(devServer);

    // Launch WebpackDevServer.
    devServer.listen(port, (err, result) => {
        if (err) {
            return console.log(err);
        }

        console.log(chalk.cyan('Starting the development server...'));
        console.log();
    });
}

function run(port) {
    var protocol = process.env.HTTPS === 'true' ? "https" : "http";
    var host = process.env.HOST || 'localhost';
    setupCompiler(host, port, protocol);
    runDevServer(host, port, protocol);
}

run(defaultPort);
