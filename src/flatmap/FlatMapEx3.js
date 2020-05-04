"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var sequency = require("sequency");
/**
 * @author Anurag Muthyam
 * flatMap() :
 * 1. flatMap() is a mix of map() and flat() functions.
 * 2. It transforms and flattens the items in a stream
 *
 * Flatten a nested list
 */
var FlatMapEx3 = /** @class */ (function () {
    function FlatMapEx3() {
    }
    FlatMapEx3.prototype.flatMapListsImperativeApproach = function (numbers) {
        var resultList = [];
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var i = numbers_1[_i];
            for (var _a = 0, i_1 = i; _a < i_1.length; _a++) {
                var j = i_1[_a];
                resultList.push(j);
            }
        }
        return resultList;
    };
    FlatMapEx3.prototype.flatMapListsFunctionalApproach = function (numbers) {
        return sequency.asSequence(numbers)
            .flatMap(function (n) { return sequency.asSequence(n); })
            .toList();
    };
    return FlatMapEx3;
}());
exports["default"] = new FlatMapEx3();
var flatMapEx3Obj = new FlatMapEx3();
console.log("Imperative Approach: " + flatMapEx3Obj.flatMapListsImperativeApproach(Constants_1.Constants.oddAndEvenNumsNestedList));
console.log("Functional Approach: " + flatMapEx3Obj.flatMapListsFunctionalApproach(Constants_1.Constants.oddAndEvenNumsNestedList));
