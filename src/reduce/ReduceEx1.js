"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
var ReduceEx1 = /** @class */ (function () {
    function ReduceEx1() {
    }
    ReduceEx1.prototype.sumTheNumbersImperativeApproach1 = function (numbers) {
        for (var i = 0, sum = 0; i < numbers.length; sum += numbers[i++])
            ;
        return sum;
    };
    ReduceEx1.prototype.sumTheNumbersImperativeApproach2 = function (numbers) {
        var sum = 0;
        while (--numbers.length) {
            sum += numbers[numbers.length];
        }
        return sum;
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach1 = function (numbers) {
        return numbers.reduce(function (a, b) { return a + b; });
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach2 = function (numbers) {
        return numbers.reduce(function (a, b) {
            return a + b;
        });
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach3 = function (numbers) {
        return numbers.reduceRight(function (a, b) { return a + b; });
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach4 = function (numbers) {
        if (!Array.isArray(numbers))
            return;
        var sum = 0;
        numbers.forEach(function (i) { return sum += i; });
        return sum;
    };
    ReduceEx1.prototype.sumTheNumbersFunctionalApproach5 = function (numbers) {
        return eval(numbers.join("+"));
    };
    return ReduceEx1;
}());
exports["default"] = new ReduceEx1();
var numbers = Constants_1.Constants.doubleNumbersList;
var reduceEx1Obj = new ReduceEx1();
console.log("Imperative Approach 1: " + reduceEx1Obj.sumTheNumbersImperativeApproach1(numbers)); //45
console.log("Imperative Approach 2: " + reduceEx1Obj.sumTheNumbersImperativeApproach2(numbers)); //45
console.log("Functional Approach 1: " + reduceEx1Obj.sumTheNumbersFunctionalApproach1(numbers)); //45
console.log("Functional Approach 2: " + reduceEx1Obj.sumTheNumbersFunctionalApproach2(numbers)); //45
console.log("Functional Approach 3: " + reduceEx1Obj.sumTheNumbersFunctionalApproach3(numbers)); //45
console.log("Functional Approach 4: " + reduceEx1Obj.sumTheNumbersFunctionalApproach4(numbers)); //45
console.log("Eval Approach: " + reduceEx1Obj.sumTheNumbersFunctionalApproach5(numbers)); //45
