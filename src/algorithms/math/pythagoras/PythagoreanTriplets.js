"use strict";
exports.__esModule = true;
var PythagoreanTriplets = /** @class */ (function () {
    function PythagoreanTriplets() {
    }
    // triplet: a^2 + b^2 = c^2
    PythagoreanTriplets.pythagoreanTriplets = function (limit) {
        var a, b, c = 0;
        var m = 2;
        var pythagoreanTriplesList = [];
        while (c < limit) {
            for (var n = 1; n < m; ++n) {
                a = m * m - n * n;
                b = 2 * m * n;
                c = m * m + n * n;
                if (c > limit) {
                    break;
                }
                pythagoreanTriplesList.push([a, b, c]);
                console.log(a + " " + b + " " + c);
            }
            m++;
        }
        return pythagoreanTriplesList;
    };
    PythagoreanTriplets.pythagoreanTripletsCount = function (limit) {
        var a, b, c = 0;
        var m = 2;
        var count = 0;
        while (c < limit) {
            for (var n = 1; n < m; ++n) {
                a = m * m - n * n;
                b = 2 * m * n;
                c = m * m + n * n;
                if (c > limit) {
                    break;
                }
                count++;
                //  console.log(a + " " + b + " " + c)
            }
            m++;
        }
        return count;
    };
    return PythagoreanTriplets;
}());
exports["default"] = new PythagoreanTriplets();
console.log(PythagoreanTriplets.pythagoreanTriplets(20));
console.log(PythagoreanTriplets.pythagoreanTripletsCount(20));
