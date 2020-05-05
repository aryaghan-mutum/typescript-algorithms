"use strict";
exports.__esModule = true;
var Constants_1 = require("../../utils/Constants");
var sequency = require("sequency");
var Squares = /** @class */ (function () {
    function Squares() {
        this.square = function (n) { return n * n; };
    }
    Squares.prototype.squareLst = function (lst) {
        return sequency.asSequence(lst).map(function (n) { return n * n; }).toList();
    };
    return Squares;
}());
exports["default"] = new Squares();
var o = new Squares();
console.log(o.squareLst(Constants_1.Constants.numbersList));
console.log(o.squareLst([]));
