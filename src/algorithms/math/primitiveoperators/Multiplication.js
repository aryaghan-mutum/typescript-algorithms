"use strict";
exports.__esModule = true;
var Helper_1 = require("../../helper/Helper");
var Helper_2 = require("../../helper/Helper");
var EvenAndOdd_1 = require("../EvenAndOdd");
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
    // TODO fix this
    Multiplication.egyptianMultiplicationRecursion = function (a, b) {
        if (a == 0) {
            return 0;
        }
        else if (EvenAndOdd_1["default"].isEven(a)) {
            return this.egyptianMultiplicationRecursion(Helper_2["default"].half(a), Helper_2["default"].double(b));
        }
        else {
            return b + this.egyptianMultiplicationRecursion(Helper_2["default"].half(a), Helper_2["default"].double(b));
        }
    };
    Multiplication.egyptianMultiplicationIteration = function (a, b) {
        var countA = 1;
        var countB = b;
        var mulMap = new Map();
        while ((Helper_2["default"].double(countA) < a)) {
            countA = Helper_2["default"].double(countA);
            countB = Helper_2["default"].double(countB);
            mulMap.set(1, b);
            mulMap.set(countA, countB);
        }
        return -1;
    };
    return Multiplication;
}());
exports["default"] = new Multiplication();
console.log(Multiplication.multiplyTwoNumsIteration(2, 3));
console.log(Multiplication.multiplyTwoNumsRecursion(2, 3));
console.log(Multiplication.egyptianMultiplicationRecursion(2, 3));
console.log(Multiplication.egyptianMultiplicationIteration(2, 3));
