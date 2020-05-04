"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
// import {
//     asSequence,
//     sequenceOf,
//     emptySequence,
//     range,
//     generateSequence,
//     extendSequence
// } from 'sequency';
var sequency = require("sequency");
var Map = require('immutable').Map;
/**
 * @author Anurag Muthyam
 */
var SortEx2 = /** @class */ (function () {
    function SortEx2() {
    }
    SortEx2.prototype.f = function () {
        var arr = Constants_1.Constants.numbersList;
        return sequency.asSequence(arr)
            .filter(function (n) { return n % 2 == 0; })
            .map(function (n) { return n * 2; })
            .findLast();
    };
    return SortEx2;
}());
exports["default"] = new SortEx2();
var sortEx2Obj = new SortEx2();
console.log(sortEx2Obj.f());
