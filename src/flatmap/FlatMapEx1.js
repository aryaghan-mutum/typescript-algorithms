"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var sequency = require("sequency");
/**
 * flatMap() :
 * 1. flatMap() is a mix of map() and flat() functions.
 * 2. It transforms and flattens the items in a stream
 *
 * Here is the Input: List("ANTHEM OF THE SEAS", "OASIS OF THE SEAS", "NAVIGATOR OF THE SEAS")
 * Get the unique chars Output: [ , A, E, F, G, H, I, M, N, O, R, S, T, V]
 */
var FlatMapEx1 = /** @class */ (function () {
    function FlatMapEx1() {
    }
    FlatMapEx1.prototype.getUniqueCharsFromListOfCitiesIterativeApproach = function (cities) {
        return sequency.asSequence(cities)
            .map(function (city) { return city.toLocaleUpperCase(); })
            .map(function (city) { return city.split(""); })
            .toSet();
    };
    FlatMapEx1.prototype.getUniqueCharsFromListOfCitiesFunctionalApproach = function (nums) {
        return sequency.asSequence(nums)
            .take(3)
            .sortedDescending()
            .toList();
    };
    return FlatMapEx1;
}());
exports["default"] = new FlatMapEx1();
var flatMapEx1Obj = new FlatMapEx1();
console.log(flatMapEx1Obj.getUniqueCharsFromListOfCitiesIterativeApproach(Constants_1.Constants.repeatedCitiesList));
console.log(flatMapEx1Obj.getUniqueCharsFromListOfCitiesFunctionalApproach(Constants_1.Constants.numbersList));
