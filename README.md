# arubedo ![Build Status](https://travis-ci.org/Frederick-S/arubedo.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/Frederick-S/arubedo/badge.svg?branch=master)](https://coveralls.io/github/Frederick-S/arubedo?branch=master)
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
