"use strict";
exports.__esModule = true;
var sequency = require("sequency");
var Average = /** @class */ (function () {
    function Average() {
        this.averageTwoNumbers = function (x, y) { return x + y / 2; };
        this.averageNumbersInListUsingBuiltInOperator = function (numbers) { return sequency.asSequence(numbers).average(); };
        this.averageNumbersInList = function (numbers) {
            var totalCount = numbers.length;
            var sum = sequency
                .asSequence(numbers)
                .reduce(function (a, b) { return a + b; });
            return sum / totalCount;
        };
    }
    return Average;
}());
exports["default"] = new Average();
