"use strict";
exports.__esModule = true;
var Constants_1 = require("../../utils/Constants");
var sequency = require("sequency");
var EvenAndOdd = /** @class */ (function () {
    function EvenAndOdd() {
    }
    EvenAndOdd.isEvenMethod1 = function (n) {
        if (n % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    EvenAndOdd.isEven = function (n) {
        return n % 2 == 0 ? true : false;
    };
    EvenAndOdd.isOdd = function (n) {
        return Math.abs(n % 2) == 1;
    };
    EvenAndOdd.checkNumbersAreEvenInList = function (lst) {
        var _this = this;
        var resultList = [];
        sequency.asSequence(lst)
            .forEach(function (n) {
            _this.isEven(n) ? resultList.push(true) : resultList.push(false);
        });
        return resultList;
    };
    EvenAndOdd.checkNumbersAreOddInList = function (lst) {
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
console.log(EvenAndOdd.isEven(2));
console.log(EvenAndOdd.isOdd(3));
console.log(EvenAndOdd.checkNumbersAreEvenInList(Constants_1.Constants.numbersList));
console.log(EvenAndOdd.checkNumbersAreOddInList(Constants_1.Constants.numbersList));
