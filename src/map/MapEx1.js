"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var Map = require('immutable').Map;
/**
 * @author Anurag Muthyam
 * Below is the method that squares(doubles) each number in a list using traditional approach
 * Write a method in functional style to achieve the same result using map() operator
 */
var MapEx1 = /** @class */ (function () {
    function MapEx1() {
    }
    MapEx1.prototype.squaresImperativeApproach = function (numbers) {
        var squaresList = [];
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var n = numbers_1[_i];
            var sqr = n * n;
            squaresList.push(sqr);
            n++;
        }
        return squaresList;
    };
    MapEx1.prototype.squaresFunctionalApproach = function (numbers) {
        return numbers.map(function (n) { return n * n; });
    };
    MapEx1.prototype.squaresImmutable = function (numbers) {
        var map = Map(numbers);
        return map;
    };
    return MapEx1;
}());
exports["default"] = new MapEx1();
var mapEx1Obj = new MapEx1();
console.log(mapEx1Obj.squaresImperativeApproach(Constants_1.Constants.numbersList));
console.log(mapEx1Obj.squaresFunctionalApproach(Constants_1.Constants.numbersList));
console.log(mapEx1Obj.squaresImmutable(Constants_1.Constants.numbersList));
