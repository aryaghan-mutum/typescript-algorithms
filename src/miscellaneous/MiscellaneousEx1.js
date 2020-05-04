"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
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
    return MiscellaneousEx1;
}());
MiscellaneousEx1.misc1();
//let miscObj = new MiscellaneousEx1()
