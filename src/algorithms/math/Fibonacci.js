"use strict";
exports.__esModule = true;
var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
    }
    Fibonacci.fibonacci = function (n) {
        if (n == 0) {
            return 0;
        }
        else if (n == 1) {
            return 1;
        }
        else if (n < 0) {
            alert("The series must be (n > 1)" + n);
            return n;
        }
        else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    };
    return Fibonacci;
}());
exports["default"] = new Fibonacci();
console.log(Fibonacci.fibonacci(10));
console.log(Fibonacci.fibonacci(-3));
