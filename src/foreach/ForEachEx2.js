"use strict";
exports.__esModule = true;
/**
 * @author Anurag Muthyam
 * This class introduces sorted() & forEach() operations.
 * sorted() -> Intermediate operator
 * limit() -> Intermediate operator
 * forEach() -> Terminal operator
 */
var Constants_1 = require("../utils/Constants");
var ForEachEx2 = /** @class */ (function () {
    function ForEachEx2() {
    }
    ForEachEx2.prototype.forEachImperativeApproach1 = function () {
        var citiesList = Constants_1.Constants.citiesList;
        for (var i = 0; i < citiesList.length; i++) {
            console.log("Imperative approach 1: " + citiesList[i]);
        }
    };
    ForEachEx2.prototype.forEachImperativeApproach2 = function () {
        for (var _i = 0, _a = Constants_1.Constants.citiesList; _i < _a.length; _i++) {
            var city = _a[_i];
            console.log("Imperative approach 2: " + city);
        }
    };
    ForEachEx2.prototype.forEachFunctionalApproach1 = function () {
        Constants_1.Constants.citiesList.forEach(function (city) { return console.log("Functional approach 1: " + city); });
    };
    ForEachEx2.prototype.forEachFunctionalApproach2 = function () {
        Constants_1.Constants.citiesList.forEach(function (city) { return console.log("Functional approach 2: " + city); });
    };
    ForEachEx2.prototype.forEachFunctionalApproach3 = function () {
        Constants_1.Constants.citiesList.forEach(function (city) { return console.log("Functional approach 2: " + city); });
    };
    return ForEachEx2;
}());
exports["default"] = new ForEachEx2();
var forEachEx2Obj = new ForEachEx2();
forEachEx2Obj.forEachImperativeApproach1();
forEachEx2Obj.forEachImperativeApproach2();
forEachEx2Obj.forEachFunctionalApproach1();
forEachEx2Obj.forEachFunctionalApproach2();
forEachEx2Obj.forEachFunctionalApproach3();
