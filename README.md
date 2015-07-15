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

Then open [localhost:8080](http://localhost:8080/) in your browser and try to edit any component.

## Relevant links

### Testing

* [Testing with ReactJS at Codecademy](https://medium.com/about-codecademy/testing-with-reactjs-at-codecademy-2aec88cc4e36) — this guys prefer Karma and Jasmine instead of Jest (+);
* [How to easily test React components with Karma and Webpack](http://qiita.com/kimagure/items/f2d8d53504e922fe3c5c)
* [Unit testing React components without a DOM](http://simonsmith.io/unit-testing-react-components-without-a-dom/)
