var dict = require('./dict.js');

module.exports.translate = function (arubedo) {
    if (!arubedo) {
        return '';
    } else {
        return arubedo.split('').map(function (element, index, array) {
            return dict[element] ? dict[element] : element;
        }).join('');
    }
}
