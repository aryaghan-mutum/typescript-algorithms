"use strict";
exports.__esModule = true;
var flatMap = require('array.prototype.flatmap');
var assert = require('assert');
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
    FlatMapEx1.prototype.getUniqueCharsFromListOfCitiesIterativeApproach = function () {
        var arr = [1, [2], [], 3];
        var x = flatMap(arr);
        console.log(x);
        //
        // for (let city of Constants.citiesList) {
        //     resultList = city.split(',')
        // }
        //
        // return resultList
    };
    FlatMapEx1.prototype.getUniqueCharsFromListOfCitiesFunctionalApproach = function () {
        // Constants.citiesList.map(city => city.split("")
        // return []
        //
        // return Constants.citiesList
        //     .map(city => city.split("")).fill()
    };
    return FlatMapEx1;
}());
exports["default"] = new FlatMapEx1();
var flatMapEx1Obj = new FlatMapEx1();
console.log(flatMapEx1Obj.getUniqueCharsFromListOfCitiesIterativeApproach());
