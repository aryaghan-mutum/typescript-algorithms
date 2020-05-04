"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var Stream = require('stream');
var Map = require('immutable').Map;
/**
 * @author Anurag Muthyam
 */
var SortEx2 = /** @class */ (function () {
    function SortEx2() {
    }
    SortEx2.prototype.f = function () {
        var arr = Constants_1.Constants.numbersList;
        var map1 = Map({ a: 1, b: 2, c: 3 });
        var map2 = map1.set('b', 50);
        console.log(map1);
        console.log(map2);
    };
    return SortEx2;
}());
exports["default"] = new SortEx2();
var sortEx2Obj = new SortEx2();
console.log(sortEx2Obj.f());
