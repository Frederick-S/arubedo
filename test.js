var assert = require('assert');
var arubedo = require('./lib/arubedo.js');
var dict = require('./lib/dict.js');

describe('Empty input', function () {
    it('Should return empty string', function() {
        assert.equal('', arubedo.translate());
    });
});

describe('Single letter translation', function () {
    for (var key in dict) {
        it('"' + key + '" should be translated to "' + dict[key] + '"', function() {
            assert.equal(dict[key], arubedo.translate(key));
        });
    }
});

describe('Translate words', function () {
    it('"abc" should be translated to "abc"', function() {
        assert.equal('abc', arubedo.translate('abc'));
    });
    
    it('"123" should be translated to "123"', function() {
        assert.equal('123', arubedo.translate('123'));
    });
    
    it('"Al Bhed 語ソマ、FF10シソフギョフヌウアルフオデンゾベワウ。" should be translated to "Al Bhed 語とは、FF10にとうじょうするかくうのげんごである。"', function() {
        assert.equal('Al Bhed 語とは、FF10にとうじょうするかくうのげんごである。', arubedo.translate('Al Bhed 語とは、FF10シソフギョフヌウアルフオデンゾベワウ。'));
    });
});

