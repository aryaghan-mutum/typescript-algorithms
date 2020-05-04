"use strict";
exports.__esModule = true;
var sequency = require("sequency");
/**
 *  @author Anurag Muthyam
 */
var FlatMapEx2 = /** @class */ (function () {
    function FlatMapEx2() {
    }
    FlatMapEx2.prototype.getDistinctNumbersFromNestedArray = function (numbers) {
        return sequency.asSequence(numbers)
            .flatMap(function (n) { return sequency.asSequence(n); })
            .distinct()
            .toList();
    };
    FlatMapEx2.prototype.getDistinctNumbersFromNestedArray2 = function (numbers) {
        return sequency.asSequence(numbers)
            .flatMap(function (n) { return sequency.asSequence(n); })
            .distinct()
            .toList();
    };
    return FlatMapEx2;
}());
exports["default"] = new FlatMapEx2();
var flatMapEx2Obj = new FlatMapEx2();
var nestedNumbersList = [[1, 2, 3, 3], [4, 4, 5, 6]];
console.log(flatMapEx2Obj.getDistinctNumbersFromNestedArray(nestedNumbersList));
console.log(flatMapEx2Obj.getDistinctNumbersFromNestedArray(nestedNumbersList.concat([[7, 8, 9]])));
