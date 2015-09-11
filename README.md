# Reaction

Reaction is yet another starter kit for quick development SPA (Single Page Applications). It was elaborated with most cutting-edge technologies, that available nowadays. All you need is ~~love [React](http://facebook.github.io/react/) and be sane~~ scrutinize this file, clone the project and run development server!

Let's try

```
git clone git@github.com:albburtsev/reaction.git
cd reaction/
npm install
npm start
```

Then open [0.0.0.0:3000](http://0.0.0.0:3000/) in your browser and try to edit any component.

Do you want to run production build? Just run:

```
npm run build
```

Now all minified and optimized assets you can find in ```/build``` directory.

Do you want to check code style only?

```
npm run lint # presto!
```

## Components

### Smart and dump components

TODO

### Atomic design

TODO

## Routes, transitions and redirects

TODO

## Stores and actions

TODO

## REST API

TODO

## Technologies

* React components ([HOC and dumb](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750))
* Implementation of Flux architecture — [Redux](http://gaearon.github.io/redux/)
* Immutable state — [Immutable.js](https://facebook.github.io/immutable-js/)
* Powerful router — [React-router](https://github.com/rackt/react-router/)
* ES6/JSX — [Babel.js](http://babeljs.io/)
* CSS preprocessor — [PostCSS](https://github.com/postcss/postcss)
* Build tool — [Webpack](http://webpack.github.io/)
* Unit-tests — [Jest](https://facebook.github.io/jest/) and Mocha
* CSS regression tests — [Gemini](https://github.com/gemini-testing/gemini)
* Static typing for JavaScript — [Flow](https://github.com/facebook/flow)
* transport — ?
* l10n — ?

## Relevant links

### Flux

* [Declarative data fetching in React components with Baobab](https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852)
* [Super minimal React + Redux app](https://gist.github.com/gaearon/074b0905337a6a835d82)

### Testing

* [Testing with ReactJS at Codecademy](https://medium.com/about-codecademy/testing-with-reactjs-at-codecademy-2aec88cc4e36) — this guys prefer Karma and Jasmine instead of Jest (+);
* [How to easily test React components with Karma and Webpack](http://qiita.com/kimagure/items/f2d8d53504e922fe3c5c)
* [Unit testing React components without a DOM](http://simonsmith.io/unit-testing-react-components-without-a-dom/)
* [Why I use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)
* [Approaches to testing React components - an overview](http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/)
* [React Testing Tricks](http://react.rocks/blog/post/react-testing-tricks/)

### Assets

* [Long-term caching of static assets with Webpack](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95)
