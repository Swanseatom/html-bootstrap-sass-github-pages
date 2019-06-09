# Static HTML website using Bootstrap and SASS.

* Works with Github pages. 
* Built using Webpack and Babel.
* ES6+ Javascript support.

basic demo: https://swanseatom.github.io/html-bootstrap-sass-github-pages

This repository is intended to be used to template other repositories.

## Setup

`npm run install` or `yarn install`

## Developing

`npm run watch` or `yarn watch`

The above command will run the `webpack -w` command, webpack will watch for changes in the `src/` directory and build when changes are detected.

## Building the website

`npm run build` or `yarn build`

The above command will run the `webpack` command, webpack will build and output to the directory specified in webpack.config.js. In the case of this respository that will be the `docs/` folder.

## Notes

Webpack is currently set to output the built website to the `docs/` folder. This is so that the basic site can be showcased on github pages. You may wish to change this in your usage of this setup. To do so update the `output` config in `webpack.config.js`.
Usually the built website would be output to a `dist/` directory.

I also copy a .nojekyll from the `src/` dir into the output directoy so that github pages picks up the index.html. You may wish to delete this file and remove the copy from the `webpack.config.js` file if not using this with github pages.
