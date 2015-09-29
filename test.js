'use strict';

var should = require('should'),
    sinon = require('sinon'),
    reflekt = require('reflekt'),
    initializer = require('./');

describe('resolver-add', function() {
    beforeEach(function() {
        this.$$resolver = new reflekt.ObjectResolver();
    });

    it('should throw an error if no module path is defined', function() {
        (function() {
            initializer();
        }).should.throw('Undefined module path!');
    });

    it('should register the object in the resolver', function() {
        initializer({ path: __dirname + '/test-mod' })(this.$$resolver);
        this.$$resolver('foo').should.equal('foo');
        this.$$resolver('bar').should.equal('bar');
    });
});
