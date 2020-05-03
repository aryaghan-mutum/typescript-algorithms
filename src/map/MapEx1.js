"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
/**
 * @author Anurag Muthyam
 * Below is the method that squares(doubles) each number in a list using traditional approach
 * Write a method in functional style to achieve the same result using map() operator
 */
var MapEx1 = /** @class */ (function () {
    function MapEx1() {
    }
    MapEx1.prototype.squaresImperativeApproach = function () {
        var squaresList = [];
        for (var _i = 0, _a = Constants_1.Constants.numbersList; _i < _a.length; _i++) {
            var n = _a[_i];
            var sqr = n * n;
            squaresList.push(sqr);
            n++;
        }
        return squaresList;
    };
    MapEx1.prototype.squaresFunctionalApproach = function () {
        return Constants_1.Constants.numbersList.map(function (n) { return n * n; });
    };
    return MapEx1;
}());
exports["default"] = new MapEx1();
var mapEx1Obj = new MapEx1();
console.log(mapEx1Obj.squaresImperativeApproach());
console.log(mapEx1Obj.squaresFunctionalApproach());
