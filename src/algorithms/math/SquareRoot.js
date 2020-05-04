"use strict";
exports.__esModule = true;
var Average_1 = require("./Average");
var SquareRoot = /** @class */ (function () {
    function SquareRoot() {
    }
    SquareRoot.squareRootMethod1 = function (n) {
        var low = 0;
        var high = n;
        var mid = 0;
        for (var i = 0; i <= 10; i++) {
            mid = (low + high) / 2;
            if (mid * mid == n)
                return mid;
            if (mid * mid > n)
                high = mid;
            else
                low = mid;
        }
        return mid;
    };
    SquareRoot.squareRootMethod2 = function (n) {
        var start = 0;
        var end = n;
        while (start + 1 < end) {
            var mid = Average_1["default"].averageTwoNumbers(start, (end - start));
            if (mid * mid == n)
                return mid;
            else if (mid * mid < n)
                start = mid;
            else
                end = mid;
        }
        if (end * end == n)
            return end;
        return start;
    };
    return SquareRoot;
}());
console.log(SquareRoot.squareRootMethod1(100));
console.log(SquareRoot.squareRootMethod2(100));
