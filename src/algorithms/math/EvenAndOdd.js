"use strict";
exports.__esModule = true;
var sequency = require("sequency");
var EvenAndOdd = /** @class */ (function () {
    function EvenAndOdd() {
    }
    EvenAndOdd.prototype.isEvenMethod1 = function (n) {
        if (n % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    EvenAndOdd.prototype.isEven = function (n) {
        return n % 2 == 0 ? true : false;
    };
    EvenAndOdd.prototype.isOdd = function (n) {
        return Math.abs(n % 2) == 1;
    };
    EvenAndOdd.prototype.checkNumbersAreEvenInList = function (lst) {
        var _this = this;
        var resultList = [];
        sequency.asSequence(lst)
            .forEach(function (n) {
            _this.isEven(n) ? resultList.push(true) : resultList.push(false);
        });
        return resultList;
    };
    EvenAndOdd.prototype.checkNumbersAreOddInList = function (lst) {
        var _this = this;
        var resultList = [];
        sequency.asSequence(lst)
            .forEach(function (n) {
            _this.isOdd(n) ? resultList.push(true) : resultList.push(false);
        });
        return resultList;
    };
    return EvenAndOdd;
}());
exports["default"] = new EvenAndOdd();
var evenOddObj = new EvenAndOdd();
// console.log(evenOddObj.isEven(2))
// console.log(evenOddObj.isOdd(3))
//
// console.log(evenOddObj.checkNumbersAreEvenInList(Constants.numbersList))
// console.log(evenOddObj.checkNumbersAreOddInList(Constants.numbersList))
