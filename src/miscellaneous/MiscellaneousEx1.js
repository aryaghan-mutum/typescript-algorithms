"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
/**
 * @author Anurag Muthyam
 * what are the result the below methods generate?
 */
var MiscellaneousEx1 = /** @class */ (function () {
    function MiscellaneousEx1() {
    }
    MiscellaneousEx1.misc1 = function () {
        Constants_1.Constants.numbersList
            .filter(function (n) { return n > 3; })
            .map(function (n) { return n * 2; })
            .sort()
            .forEach(function (n) { return console.info(n); });
    };
    MiscellaneousEx1.misc2 = function () {
        return Constants_1.Constants.numbersList.filter(function (n) { return n > 2; }).length;
    };
    MiscellaneousEx1.misc3 = function () {
        return Constants_1.Constants.floridaZipCodeList
            .map(function (zip) { return zip.zipCode; })
            .filter(function (zip) { return zip > 32004; })
            .sort()
            .reverse();
    };
    MiscellaneousEx1.misc4 = function () {
        return Constants_1.Constants.floridaZipCodeList
            .map(function (reg) { return reg.region; })
            .map(function (reg) { return reg.toUpperCase(); })
            .filter(function (reg) { return reg.length > 12; })
            .sort();
    };
    return MiscellaneousEx1;
}());
MiscellaneousEx1.misc1(); //10, 12, 14, 16, 18, 20, 8
console.log("There are total " + MiscellaneousEx1.misc2() + " numbers > 2"); //8
console.log(MiscellaneousEx1.misc3()); //[ 32007, 32006 ]
console.log(MiscellaneousEx1.misc4()); //[ 32007, 32006 ]
