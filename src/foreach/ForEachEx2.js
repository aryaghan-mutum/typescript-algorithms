"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
/**
 * @author Anurag Muthyam
 */
var ForEachEx2 = /** @class */ (function () {
    function ForEachEx2() {
    }
    ForEachEx2.prototype.forEachImperativeApproach1 = function (cities) {
        for (var i = 0; i < cities.length; i++) {
            console.log("Imperative approach 1: " + cities[i]);
        }
    };
    ForEachEx2.prototype.forEachImperativeApproach2 = function (cities) {
        for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
            var city = cities_1[_i];
            console.log("Imperative approach 2: " + city);
        }
    };
    ForEachEx2.prototype.forEachFunctionalApproach1 = function (cities) {
        cities.forEach(function (city) { return console.log("Functional approach 1: " + city); });
    };
    ForEachEx2.prototype.forEachFunctionalApproach2 = function (cities) {
        cities.forEach(function (city) { return console.log("Functional approach 2: " + city); });
    };
    ForEachEx2.prototype.forEachFunctionalApproach3 = function (cities) {
        cities.forEach(function (city) { return console.log("Functional approach 3: " + city); });
    };
    return ForEachEx2;
}());
exports["default"] = new ForEachEx2();
var cities = Constants_1.Constants.citiesList;
var forEachEx2Obj = new ForEachEx2();
forEachEx2Obj.forEachImperativeApproach1(cities);
forEachEx2Obj.forEachImperativeApproach2(cities);
forEachEx2Obj.forEachFunctionalApproach1(cities);
forEachEx2Obj.forEachFunctionalApproach2(cities);
forEachEx2Obj.forEachFunctionalApproach3(cities);
