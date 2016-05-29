Extra Entry Webpack Plugin
========================================
[![npm version](https://badge.fury.io/js/extra-entry-webpack-plugin.svg)](http://badge.fury.io/js/extra-entry-webpack-plugin) [![Dependency Status](https://david-dm.org/jantimon/extra-entry-webpack-plugin.svg)](https://david-dm.org/jantimon/extra-entry-webpack-plugin) [![Build status](https://travis-ci.org/jantimon/extra-entry-webpack-plugin.svg)](https://travis-ci.org/jantimon/extra-entry-webpack-plugin) [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Installation
------------
You must be running webpack on node 0.12.x or higher

Install the plugin with npm:
```shell
$ npm install --save-dev extra-entry-webpack-plugin
```

Basic Usage
-----------
Add the plugin to your webpack config as follows:

```javascript
plugins: [
  new ExtraEntryWebpackPlugin({
    entry: 'entry-file.js',
    outputName: 'output.js'
  })
]
```

This basic configuration will compile entry-file.js to output.js independently from the
general output file names.

Advanced Usage
-------------
You can also specify the context and entry name:

```javascript
plugins: [
  new ExtraEntryWebpackPlugin({
    entry: 'entry-file.js',
    entryName: 'An additional entry',
    context: __dirnmae,
    outputName: 'output.js'
  })
]
```


# Changelog

Take a look at the  [CHANGELOG.md](https://github.com/jantimon/extra-entry-webpack-plugin/tree/master/CHANGELOG.md).


# Contribution

You're free to contribute to this project by submitting [issues](https://github.com/jantimon/extra-entry-webpack-plugin/issues) and/or [pull requests](https://github.com/jantimon/extra-entry-webpack-plugin/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests.
This project uses the [semistandard code style](https://github.com/Flet/semistandard).

# License

This project is licensed under [MIT](https://github.com/jantimon/extra-entry-webpack-plugin/blob/master/LICENSE).
