"use strict";
exports.__esModule = true;
var Factorial = /** @class */ (function () {
    function Factorial() {
    }
    Factorial.linearRecursiveFactorial = function (n) {
        if (n == 1) {
            return 1;
        }
        else {
            return n * this.linearRecursiveFactorial(n - 1);
        }
    };
    Factorial.linearIterativeFactorial = function (n) {
        return factorialIter(1, 1, n);
        function factorialIter(product, count, maxCount) {
            if (count > maxCount) {
                return product;
            }
            else {
                var z = count * product;
                count++;
                return factorialIter(z, count, maxCount);
            }
        }
    };
    return Factorial;
}());
exports["default"] = new Factorial();
console.log(Factorial.linearRecursiveFactorial(10)); //3628800
console.log(Factorial.linearIterativeFactorial(10)); //3628800
