"use strict";
/**
 * @author Anurag Muthyam
 */
exports.__esModule = true;
var ForEachEx3 = /** @class */ (function () {
    function ForEachEx3() {
        this.str = 'Hello world';
    }
    ForEachEx3.prototype.iteratingCharsImperativeApproach1 = function () {
        for (var i = 0; i < this.str.length; i++) {
            console.log(this.str.charAt(i));
        }
    };
    ForEachEx3.prototype.iteratingCharsFunctionalApproach1 = function () {
        this.str.split('')
            .forEach(function (c) {
            console.log(c);
        });
    };
    ForEachEx3.prototype.iteratingCharsFunctionalApproach2 = function () {
        [this.str].forEach(function (c) { return console.log(c); });
    };
    ForEachEx3.prototype.iteratingCharsFunctionalApproach3 = function () {
        var result = '';
        this.str.split('')
            .map(function (char) {
            result += char;
            console.log(result);
        });
    };
    ForEachEx3.prototype.iteratingCharsFunctionalApproach4 = function () {
        this.str.split('')
            .map(function (c) { return c.valueOf(); })
            .forEach(function (c) { return console.log(c); });
    };
    return ForEachEx3;
}());
exports["default"] = new ForEachEx3();
var forEachEx3Obj = new ForEachEx3();
forEachEx3Obj.iteratingCharsImperativeApproach1();
forEachEx3Obj.iteratingCharsFunctionalApproach1();
forEachEx3Obj.iteratingCharsFunctionalApproach2();
forEachEx3Obj.iteratingCharsFunctionalApproach3();
forEachEx3Obj.iteratingCharsFunctionalApproach4();
