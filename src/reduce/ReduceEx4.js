"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var ReduceEx4 = /** @class */ (function () {
    function ReduceEx4() {
    }
    ReduceEx4.prototype.addCommasBetweenItemsImperativeApproach = function (flowers) {
        for (var i = 1; i < flowers.length; i++) {
            flowers.splice(i, 0, ',');
        }
        return flowers;
    };
    return ReduceEx4;
}());
exports["default"] = new ReduceEx4();
var reduceEx3Obj = new ReduceEx4();
console.log(reduceEx3Obj.addCommasBetweenItemsImperativeApproach(Constants_1.Constants.flowersList));
