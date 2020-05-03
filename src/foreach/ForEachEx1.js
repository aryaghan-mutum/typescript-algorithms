"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var ForEachEx1 = /** @class */ (function () {
    function ForEachEx1() {
        this.MAX = 5;
    }
    ForEachEx1.prototype.log5RandNumbersImperativeApproach = function () {
        for (var i = 1; i <= this.MAX; i++) {
            var randomNum = Math.random();
            randomNum = randomNum * 2;
            console.log("Rand # imperative approach: " + randomNum.toPrecision(4));
        }
    };
    ForEachEx1.prototype.log5RandNumbersFunctionalApproach1 = function () {
        Array.from({ length: this.MAX }, function () { return console.log("Rand # functional approach 1: " + (Math.random() * 2).toPrecision(4)); });
    };
    ForEachEx1.prototype.log5RandNumbersFunctionalApproach2 = function () {
        Array.apply(null, Array(this.MAX))
            .map(function () {
            var x = Math.random() * 2;
            return x.toPrecision(4);
        })
            .forEach(function (n) { return console.log("Rand # functional approach 2: " + n); });
    };
    ForEachEx1.prototype.log5RandNumbersFunctionalApproach3 = function () {
        __spreadArrays(Array(this.MAX)).map(function () { return Math.random() * 2; })
            .map(function (n) { return n.toPrecision(4); })
            .forEach(function (n) { return console.log("Rand # functional approach 3: " + n); });
    };
    return ForEachEx1;
}());
exports["default"] = new ForEachEx1();
var forEachEx1Obj = new ForEachEx1();
forEachEx1Obj.log5RandNumbersImperativeApproach();
forEachEx1Obj.log5RandNumbersFunctionalApproach1();
forEachEx1Obj.log5RandNumbersFunctionalApproach2();
forEachEx1Obj.log5RandNumbersFunctionalApproach3();
