"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
/**
 * @author Anurag Muthyam
 */
var SortEx2 = /** @class */ (function () {
    function SortEx2() {
    }
    SortEx2.prototype.sortAndPrintCities = function () {
        return Constants_1.Constants.citiesList
            .map(function (city) { return city.toUpperCase(); })
            .sort()
            .forEach(function (city) { return console.log("" + city); });
    };
    return SortEx2;
}());
exports["default"] = new SortEx2();
var sortEx2Obj = new SortEx2();
sortEx2Obj.sortAndPrintCities();
