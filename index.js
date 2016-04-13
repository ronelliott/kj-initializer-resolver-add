'use strict';

const is = require('is'),
      path = require('path');

module.exports = function($opts) {
    $opts = $opts || {};

    var modPath = $opts.path;

    if (is.null(modPath) || is.undefined(modPath)) {
        throw new Error('Undefined module path!');
    }

    modPath = path.resolve(modPath);

    return function($$resolver) {
        $$resolver.add(require(modPath));
    };
};
