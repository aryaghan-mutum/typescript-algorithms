"use strict";
exports.__esModule = true;
var sequency = require("sequency");
var Helper = /** @class */ (function () {
    function Helper() {
        var _this = this;
        this.square = function (n) { return n * n; };
        this.cube = function (n) { return _this.square(n) * n; };
        this.add1 = function (n) { return n + 1; };
        this.sub1 = function (n) { return n - 1; };
        this.double = function (n) { return n + 2; };
        this.half = function (n) { return n / 2; };
        this.first = function (lst) { return lst[0]; };
    }
    return Helper;
}());
exports["default"] = new Helper();
