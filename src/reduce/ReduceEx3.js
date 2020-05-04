"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var ReduceEx3 = /** @class */ (function () {
    function ReduceEx3() {
    }
    ReduceEx3.prototype.getMinUsingMathFunc = function (numbers) {
        return Math.min.apply(null, numbers);
    };
    ReduceEx3.prototype.getMaxUsingMathFunc = function (numbers) {
        return Math.max.apply(null, numbers);
    };
    ReduceEx3.prototype.getMinUsingUsingSpreadOperator = function (numbers) {
        return Math.min.apply(Math, numbers);
    };
    ReduceEx3.prototype.getMaxUsingUsingSpreadOperator = function (numbers) {
        return Math.max.apply(Math, numbers);
    };
    ReduceEx3.prototype.getMinNumUsingWhileLoop = function (numbers) {
        var len = numbers.length, minNum = Infinity;
        while (len--) {
            if (Number(numbers[len]) < minNum) {
                minNum = Number(numbers[len]);
            }
        }
        return minNum;
    };
    ReduceEx3.prototype.getMaxNumUsingWhileLoop = function (numbers) {
        var len = numbers.length, maxNum = -Infinity;
        while (len--) {
            if (Number(numbers[len]) > maxNum) {
                maxNum = Number(numbers[len]);
            }
        }
        return maxNum;
    };
    ReduceEx3.prototype.getMinNumUsingReduce = function (numbers) {
        return numbers.reduce(function (a, b) { return a < b ? a : b; });
    };
    ReduceEx3.prototype.getMaxNumUsingReduce = function (numbers) {
        return numbers.reduce(function (a, b) { return a > b ? a : b; });
    };
    return ReduceEx3;
}());
exports["default"] = new ReduceEx3();
var reduceEx3Obj = new ReduceEx3();
console.log("Min Using Math() : " + reduceEx3Obj.getMinUsingMathFunc(Constants_1.Constants.numbersList)); //1
console.log("Max Using Math() : " + reduceEx3Obj.getMaxUsingMathFunc(Constants_1.Constants.doubleNumbersList)); //9
console.log("Min Using Spread : " + reduceEx3Obj.getMinUsingUsingSpreadOperator(Constants_1.Constants.numbersList)); //1
console.log("Max Using Spread : " + reduceEx3Obj.getMaxUsingUsingSpreadOperator(Constants_1.Constants.doubleNumbersList)); //9
console.log("Min Using While loop : " + reduceEx3Obj.getMinNumUsingWhileLoop(Constants_1.Constants.numbersList)); //1
console.log("Max Using While loop : " + reduceEx3Obj.getMaxNumUsingWhileLoop(Constants_1.Constants.doubleNumbersList)); //9
console.log("Min Using Reduce() : " + reduceEx3Obj.getMinNumUsingReduce(Constants_1.Constants.numbersList)); //1
console.log("Max Using Reduce() : " + reduceEx3Obj.getMaxNumUsingReduce(Constants_1.Constants.doubleNumbersList)); //9
