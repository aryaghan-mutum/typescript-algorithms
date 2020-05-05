"use strict";
exports.__esModule = true;
var Constants_1 = require("../../utils/Constants");
var sequency = require("sequency");
var DoubleList = /** @class */ (function () {
    function DoubleList() {
    }
    DoubleList.doubleListFunctionalApproach = function (lst) {
        return sequency.asSequence(lst)
            .map(function (n) { return n * 2; })
            .toList();
    };
    DoubleList.doubleListImperativeApproach = function (lst) {
        var resultList = [];
        for (var _i = 0, lst_1 = lst; _i < lst_1.length; _i++) {
            var n = lst_1[_i];
            n = n * 2;
            resultList.push(n);
        }
        return resultList;
    };
    return DoubleList;
}());
exports["default"] = new DoubleList();
console.log(DoubleList.doubleListFunctionalApproach(Constants_1.Constants.numbersList));
console.log(DoubleList.doubleListImperativeApproach(Constants_1.Constants.numbersList));
console.log(DoubleList.doubleListImperativeApproach([]));
