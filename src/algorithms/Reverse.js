"use strict";
exports.__esModule = true;
var Reverse = /** @class */ (function () {
    function Reverse() {
    }
    Reverse.reverseList = function () {
        var num = 54321, reverse = 0;
        while (num != 0) {
            var a = num % 10;
            reverse = reverse * 10 + a;
            num = num / 10;
        }
        return reverse;
    };
    return Reverse;
}());
console.log(Reverse.reverseList());
