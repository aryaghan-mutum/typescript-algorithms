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
    return MiscellaneousEx1;
}());
MiscellaneousEx1.misc1(); //10, 12, 14, 16, 18, 20, 8
console.log("There are total " + MiscellaneousEx1.misc2() + " numbers > 2"); //8
//let miscObj = new MiscellaneousEx1()
