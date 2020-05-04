"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
/**
 * @author Anurag Muthyam
 */
var FilterEx1 = /** @class */ (function () {
    function FilterEx1() {
    }
    FilterEx1.prototype.isFargoPresentInListApproach1 = function () {
        for (var _i = 0, _a = Constants_1.Constants.citiesList; _i < _a.length; _i++) {
            var city = _a[_i];
            if (city === 'fargo') {
                return true;
            }
        }
        return false;
    };
    FilterEx1.prototype.isFargoPresentInListApproach2 = function () {
        return Constants_1.Constants.citiesList.includes('fargo');
    };
    return FilterEx1;
}());
exports["default"] = new FilterEx1();
var filterEx1Obj = new FilterEx1();
console.log(filterEx1Obj.isFargoPresentInListApproach1()); // true
console.log(filterEx1Obj.isFargoPresentInListApproach2()); // true
