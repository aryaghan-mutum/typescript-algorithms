"use strict";
exports.__esModule = true;
var range = require('array-range');
var ReduceEx2 = /** @class */ (function () {
    function ReduceEx2() {
    }
    ReduceEx2.prototype.addNumsBetweenTwoNumbersUsingForLoop = function (minNumber, maxNumber) {
        var sum = 0;
        for (var i = minNumber; i < maxNumber; i++) {
            sum += i;
        }
        return sum;
    };
    ReduceEx2.prototype.addNumsBetweenTwoNumbersUsingRange = function (minNumber, maxNumber) {
        return range(minNumber, maxNumber).reduce(function (a, b) { return a + b; });
    };
    return ReduceEx2;
}());
exports["default"] = new ReduceEx2();
var reduceEx2Obj = new ReduceEx2();
console.log("Using Imperative approach: " + reduceEx2Obj.addNumsBetweenTwoNumbersUsingForLoop(1, 100)); //4950
console.log("Using range: " + reduceEx2Obj.addNumsBetweenTwoNumbersUsingRange(1, 100)); //4950
