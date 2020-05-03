"use strict";
exports.__esModule = true;
var faker = require('faker');
console.log("3");
var sqrF = function (n) {
    return n * n;
};
console.log(sqrF(4));
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.sqr = function (n) {
        debugger;
        return n * n;
    };
    return MyClass;
}());
exports["default"] = new MyClass();
var obj = new MyClass();
console.log(obj.sqr(10));
