"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
/**
 * @author Anurag Muthyam
 */
var FilterEx1 = /** @class */ (function () {
    function FilterEx1() {
    }
    FilterEx1.prototype.isFargoPresentInListApproach1 = function (cities) {
        for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
            var city = cities_1[_i];
            if (city === 'fargo') {
                return true;
            }
        }
        return false;
    };
    FilterEx1.prototype.isFargoPresentInListApproach2 = function (cities) {
        return cities.includes('fargo');
    };
    return FilterEx1;
}());
exports["default"] = new FilterEx1();
var cities = Constants_1.Constants.citiesList;
var filterEx1Obj = new FilterEx1();
console.log(filterEx1Obj.isFargoPresentInListApproach1(cities)); // true
console.log(filterEx1Obj.isFargoPresentInListApproach2(cities)); // true
