"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Constants_1 = require("../../utils/Constants");
var BaseClass_1 = require("../../BaseClass");
var Logger = require("js-logger");
var sequency = require("sequency");
var Squares = /** @class */ (function (_super) {
    __extends(Squares, _super);
    function Squares() {
        var _this = _super.call(this) || this;
        _this.square = function (n) { return n * n; };
        return _this;
    }
    Squares.prototype.squareLst = function (lst) {
        var _this = this;
        return sequency.asSequence(lst).map(function (n) { return _this.square(n); }).toList();
    };
    return Squares;
}(BaseClass_1.BaseClass));
exports["default"] = new Squares();
var o = new Squares();
console.log(o.squareLst(Constants_1.Constants.numbersList));
Logger.info(o.squareLst(Constants_1.Constants.numbersList));
