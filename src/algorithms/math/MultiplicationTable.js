"use strict";
exports.__esModule = true;
var range = require('array-range');
var MultiplicationTable = /** @class */ (function () {
    function MultiplicationTable() {
    }
    MultiplicationTable.printMultiplicationTable = function (n) {
        console.log("Multiplication table for " + n);
        console.log("---------------------------");
        range(0, 11).forEach(function (i) { return console.log(n + " x " + i + " = " + i * n); });
    };
    return MultiplicationTable;
}());
exports["default"] = new MultiplicationTable();
range(1, 10).forEach(function (n) {
    console.log(MultiplicationTable.printMultiplicationTable(n));
});
