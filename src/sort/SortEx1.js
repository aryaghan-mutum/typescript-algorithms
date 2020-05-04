"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var Stream = require('stream');
/**
 * @author Anurag Muthyam
 */
var SortEx1 = /** @class */ (function () {
    function SortEx1() {
    }
    SortEx1.prototype.sortCitiesInAscOrderImperativeApproach = function () {
        var resultList = [];
        for (var _i = 0, _a = Constants_1.Constants.citiesList; _i < _a.length; _i++) {
            var city = _a[_i];
            resultList.push(city.toUpperCase());
        }
        return resultList.sort();
    };
    SortEx1.prototype.sortCitiesInDescOrderImperativeApproach = function () {
        return this.sortCitiesInAscOrderImperativeApproach().reverse();
    };
    SortEx1.prototype.sortCitiesInAscOrderFunctionalApproach = function () {
        return Constants_1.Constants.citiesList.map(function (city) { return city.toUpperCase(); }).sort();
    };
    SortEx1.prototype.sortCitiesInDescOrderFunctionalApproach = function () {
        return this.sortCitiesInAscOrderFunctionalApproach().reverse();
    };
    SortEx1.prototype.sortAndPrintCities = function () {
        return Constants_1.Constants.citiesList
            .map(function (city) { return city.toUpperCase(); })
            .sort()
            .forEach(function (city) { return console.log(city); });
    };
    return SortEx1;
}());
exports["default"] = new SortEx1();
var sortEx1Obj = new SortEx1();
console.log("Imperative Approach ASC order: " + sortEx1Obj.sortCitiesInAscOrderImperativeApproach()); //[ 'COLUMBUS', 'FARGO', 'MIAMI', 'SAN FRANCISCO' ]
console.log("Imperative Approach DSC order: " + sortEx1Obj.sortCitiesInDescOrderImperativeApproach()); //[ 'SAN FRANCISCO', 'MIAMI', 'FARGO', 'COLUMBUS' ]
console.log("Declarative Approach ASC order: " + sortEx1Obj.sortCitiesInAscOrderFunctionalApproach()); //[ 'COLUMBUS', 'FARGO', 'MIAMI', 'SAN FRANCISCO' ]
console.log("Declarative Approach DSC order: " + sortEx1Obj.sortCitiesInDescOrderFunctionalApproach()); //[ 'SAN FRANCISCO', 'MIAMI', 'FARGO', 'COLUMBUS' ]
sortEx1Obj.sortAndPrintCities();
