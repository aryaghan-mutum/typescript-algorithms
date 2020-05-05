"use strict";
exports.__esModule = true;
var Helper_1 = require("../../helper/Helper");
var Addition = /** @class */ (function () {
    function Addition() {
    }
    /**
     * Add two numbers using recursion
     */
    Addition.addTwoNumbersRecursion = function (a, b) {
        if (a == 0) {
            return b;
        }
        else {
            return this.addTwoNumbersRecursion(Helper_1["default"].sub1(a), Helper_1["default"].add1(b));
        }
    };
    /**
     * Add two numbers using iteration
     */
    Addition.addTwoNumbersIteration = function (a, b) {
        while (a != 0) {
            a = a - 1;
            b = b + 1;
        }
        return b;
    };
    return Addition;
}());
exports["default"] = new Addition();
console.log(Addition.addTwoNumbersRecursion(2, 3));
console.log(Addition.addTwoNumbersIteration(2, 3));
