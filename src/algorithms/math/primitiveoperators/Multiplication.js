"use strict";
exports.__esModule = true;
var Helper_1 = require("../../helper/Helper");
var Multiplication = /** @class */ (function () {
    function Multiplication() {
    }
    /**
     * Multiply two numbers using iteration
     */
    Multiplication.multiplyTwoNumsIteration = function (a, b) {
        var count = 0;
        while (b != 0) {
            b = b - 1;
            count = count + a;
        }
        return count;
    };
    /**
     * Multiply two numbers using recursion
     */
    Multiplication.multiplyTwoNumsRecursion = function (a, b) {
        if (b == 0) {
            return 0;
        }
        else {
            return a + this.multiplyTwoNumsRecursion(a, Helper_1["default"].sub1(b));
        }
    };
    return Multiplication;
}());
exports["default"] = new Multiplication();
console.log(Multiplication.multiplyTwoNumsIteration(2, 3));
console.log(Multiplication.multiplyTwoNumsRecursion(2, 3));
