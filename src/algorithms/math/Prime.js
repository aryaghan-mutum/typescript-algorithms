"use strict";
exports.__esModule = true;
var range = require('array-range');
var Prime = /** @class */ (function () {
    function Prime() {
    }
    Prime.prototype.isPrime = function (n) {
        if (n < 2)
            return false;
        else {
            for (var i = 2; i < n; i++) {
                if (n % i === 0) {
                    return false;
                }
            }
            return true;
        }
    };
    return Prime;
}());
exports["default"] = new Prime();
var o = new Prime();
console.log(o.isPrime(27));
