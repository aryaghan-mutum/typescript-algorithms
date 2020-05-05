"use strict";
exports.__esModule = true;
var Constants_1 = require("../../utils/Constants");
var sequency = require("sequency");
var Cube = /** @class */ (function () {
    function Cube() {
        this.cube = function (n) { return n * n * n; };
    }
    Cube.prototype.cubelst = function (lst) {
        var _this = this;
        return sequency.asSequence(lst).map(function (n) { return _this.cube(n); }).toList();
    };
    return Cube;
}());
exports["default"] = new Cube();
var o = new Cube();
console.log(o.cubelst(Constants_1.Constants.numbersList));
