"use strict";
exports.__esModule = true;
var Constants_1 = require("../../utils/Constants");
var sequency = require("sequency");
var NumericalComputation = /** @class */ (function () {
    function NumericalComputation() {
    }
    NumericalComputation.doubleEvenNums = function (numbers) {
        return sequency.asSequence(numbers)
            .filter(function (n) { return n % 2 == 0; })
            .map(function (n) { return n * 2; })
            .toList();
    };
    NumericalComputation.doubleEvenNumsAndSum = function (numbers) {
        return sequency.asSequence(numbers)
            .filter(function (n) { return n % 2 == 0; })
            .map(function (n) { return n * 2; })
            .sum();
    };
    NumericalComputation.findSqrtOfEvenNums = function (numbers) {
        return sequency.asSequence(numbers)
            .filter(function (n) { return n % 2 == 0; })
            .map(function (n) { return Math.sqrt(n); })
            .toList();
    };
    NumericalComputation.findSqrtOfEvenNumsAndSum = function (numbers) {
        return sequency.asSequence(numbers)
            .filter(function (n) { return n % 2 == 0; })
            .map(function (n) { return Math.sqrt(n); })
            .sum();
    };
    NumericalComputation.reverseList = function (numbers) {
        var num = 54321, reverse = 0;
        while (num != 0) {
            var a = num % 10;
            reverse = reverse * 10 + a;
            num = num / 10;
        }
        return reverse;
    };
    return NumericalComputation;
}());
exports["default"] = new NumericalComputation();
var numbers = Constants_1.Constants.numbersList;
console.log(NumericalComputation.doubleEvenNums(numbers)); //[ 4, 8, 12, 16, 20 ]
console.log(NumericalComputation.doubleEvenNumsAndSum(numbers)); //60
console.log(NumericalComputation.findSqrtOfEvenNums(numbers));
console.log(NumericalComputation.findSqrtOfEvenNumsAndSum(numbers)); //11.854408090070843
console.log(NumericalComputation.reverseList(numbers));
