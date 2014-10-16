# arubedo ![Build](https://travis-ci.org/Frederick-S/arubedo.svg?branch=master)

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
