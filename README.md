# Reaction

The main goal of this project is implementation of modern [React](http://facebook.github.io/react/)-based app, that will be interact with server via REST API.

Expected:

 * React components: [high-order](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) (HOC) top level components and pure nested components
 * Flux architecture — [Redux](https://github.com/gaearon/redux)
 * Immutable stores with [Immutable.js](https://facebook.github.io/immutable-js/)
 * Powerful router — [React-router](https://github.com/rackt/react-router/)
 * ES6/JSX and [Babel.js](http://babeljs.io/)
 * CSS preprocessor — [Stylus](https://learnboost.github.io/stylus/)
 * [Fetch](https://fetch.spec.whatwg.org/) as a transport
 * Build tool — [Webpack](http://webpack.github.io/)
 * Unit-tests — [Jest](https://facebook.github.io/jest/) and Mocha
 * CSS regression tests — [Gemini](https://github.com/gemini-testing/gemini)
 * l10n — ?

## Build tools and dev-server

[Webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) in hot mode used as developer server. Just run it in project root:

```
npm i
npm start
```

Then open [localhost:3000](http://localhost:3000/) in your browser and try to edit any component.

If you want to run production build (minified and optimized bundles without dev-server) then run:

```
npm run build
```

## Relevant links

### Stores

* [Declarative data fetching in React components with Baobab](https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852)

### Testing

* [Testing with ReactJS at Codecademy](https://medium.com/about-codecademy/testing-with-reactjs-at-codecademy-2aec88cc4e36) — this guys prefer Karma and Jasmine instead of Jest (+);
* [How to easily test React components with Karma and Webpack](http://qiita.com/kimagure/items/f2d8d53504e922fe3c5c)
* [Unit testing React components without a DOM](http://simonsmith.io/unit-testing-react-components-without-a-dom/)
* [Why I use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)
* [Approaches to testing React components - an overview](http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/)
* [React Testing Tricks](http://react.rocks/blog/post/react-testing-tricks/)

### Assets

* [Long-term caching of static assets with Webpack](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95)

### Redux

* [Super minimal React + Redux app](https://gist.github.com/gaearon/074b0905337a6a835d82)
* [New redux documentation](http://gaearon.github.io/redux/)
