var dict = require('./dict.js');

module.exports.translate = function (arubedo) {
    'use strict';

    var value = '';
    if (!arubedo) {
        return '';
    } else {
        return arubedo.split('').map(function (element, index, array) {
            value = dict[element];
            return value ? value : element;
        }).join('');
    }
};
