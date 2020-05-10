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
var Constants_1 = require("../utils/Constants");
var BaseClass_1 = require("../BaseClass");
var sequency = require("sequency");
var ts_stream_1 = require("ts-stream"); // ES6 style
var CollectEx1 = /** @class */ (function (_super) {
    __extends(CollectEx1, _super);
    function CollectEx1() {
        return _super.call(this) || this;
    }
    CollectEx1.prototype.f9 = function () {
        return ts_stream_1["default"].from(Constants_1.Constants.numbersList)
            .map(function (n) { return n * 2; })
            .toArray();
    };
    CollectEx1.prototype.doubleListFunctionalApproach = function (lst) {
        return sequency.asSequence(lst)
            .map(function (n) { return n * 2; })
            .toList();
    };
    CollectEx1.prototype.doubleListImperativeApproach = function (lst) {
        var resultList = [];
        for (var _i = 0, lst_1 = lst; _i < lst_1.length; _i++) {
            var n = lst_1[_i];
            n = n * 2;
            resultList.push(n);
        }
        return resultList;
    };
    return CollectEx1;
}(BaseClass_1.BaseClass));
exports["default"] = new CollectEx1();
var collectEx1Obj = new CollectEx1();
console.log("Functional Approach: " + collectEx1Obj.doubleListFunctionalApproach(Constants_1.Constants.numbersList));
console.log("Imperative Approach:" + collectEx1Obj.doubleListImperativeApproach(Constants_1.Constants.numbersList));
console.log(collectEx1Obj.f9());
