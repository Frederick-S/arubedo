# arubedo [![Build Status](https://travis-ci.org/Frederick-S/arubedo.svg?branch=master)](https://travis-ci.org/Frederick-S/arubedo) [![Coverage Status](https://img.shields.io/coveralls/Frederick-S/arubedo.svg)](https://coveralls.io/r/Frederick-S/arubedo)

Translate アルベド語 into Japanese, just for fun.

## Installation
```
$ [sudo] npm install arubedo -g
```

## Usage
Run `arubedo` in terminal.
```
$ arubedo アルベド語
```
Or:
```js
var arubedo = require('arubedo');

var translation = arubedo.translate('Al Bhed ソマ、FF10シソフギョフヌウアルフオデンゾベワウ。'); 
console.log(translation);

// Output: Al Bhed とは、FF10にとうじょうするかくうのげんごである。
```

## License
MIT.
