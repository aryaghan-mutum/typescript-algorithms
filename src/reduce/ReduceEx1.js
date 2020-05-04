"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var ReduceEx1 = /** @class */ (function () {
    function ReduceEx1() {
        this.numsList = Constants_1.Constants.doubleNumbersList;
        this.numsListLength = Constants_1.Constants.doubleNumbersList.length;
    }
    ReduceEx1.prototype.sumTheNumbersImperativeApproach1 = function () {
        for (var i = 0, sum = 0; i < this.numsListLength; sum += this.numsList[i++])
            ;
        return sum;
    };
    ReduceEx1.prototype.sumTheNumbersImperativeApproach2 = function () {
        var sum = 0;
        while (--this.numsListLength) {
            sum += this.numsList[this.numsListLength];
        }
        return sum;
    };
    ReduceEx1.prototype.sumTheNumbersImperativeApproach3 = function () {
        var sum = 0;
        for (var i = 0; i < this.numsListLength; i++) {
            sum += this.numsList[i];
        }
        return sum;
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach1 = function () {
        return Constants_1.Constants.doubleNumbersList.reduce(function (a, b) { return a + b; });
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach2 = function () {
        return Constants_1.Constants.doubleNumbersList.reduce(function (a, b) {
            return a + b;
        });
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach3 = function () {
        return Constants_1.Constants.doubleNumbersList.reduceRight(function (a, b) { return a + b; });
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach4 = function () {
        if (!Array.isArray(this.numsList))
            return;
        var sum = 0;
        this.numsList.forEach(function (i) { return sum += i; });
        return sum;
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach5 = function () {
        return eval(Constants_1.Constants.doubleNumbersList.join("+"));
    };
    return ReduceEx1;
}());
exports["default"] = new ReduceEx1();
var reduceEx1Obj = new ReduceEx1();
console.log("Imperative Approach 1: " + reduceEx1Obj.sumTheNumbersImperativeApproach1()); //45
console.log("Imperative Approach 2: " + reduceEx1Obj.sumTheNumbersImperativeApproach2()); //45
console.log("Imperative Approach 3: " + reduceEx1Obj.sumTheNumbersImperativeApproach3()); //45
console.log("Functional Approach 1: " + reduceEx1Obj.sumTheNumbersFunctionalApproach1()); //45
console.log("Functional Approach 2: " + reduceEx1Obj.sumTheNumbersFunctionalApproach2()); //45
console.log("Functional Approach 3: " + reduceEx1Obj.sumTheNumbersFunctionalApproach3()); //45
console.log("Functional Approach 4: " + reduceEx1Obj.sumTheNumbersFunctionalApproach4()); //45
console.log("Eval Approach: " + reduceEx1Obj.sumTheNumbersFunctionalApproach5()); //45
