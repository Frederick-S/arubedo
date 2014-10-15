var assert = require('assert');
var arubedo = require('./lib/arubedo.js');

describe('Empty input', function () {
	it('Should return empty string', function() {
		assert.equal('', arubedo.translate());
	});
});

