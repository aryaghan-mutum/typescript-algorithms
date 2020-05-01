"use strict";
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        var _this = this;
        this.displayInfo = function () { return console.log(_this.name + ' is ' + _this.age + ' years old '); };
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.square = function (n) {
        return n;
    };
    MyClass.prototype.asNumber = function (val) {
        return val;
    };
    MyClass.prototype.asNumber2 = function (val) {
        return typeof val == 'string' ? Number(val) : val;
    };
    MyClass.prototype.add = function (a, b) {
        return a + b;
    };
    return MyClass;
}());
exports.MyClass = MyClass;
var obj = new MyClass('anurag', 26);
console.log('As Nnumber: ' + obj.asNumber(2));
console.log('Add 2 Nums: ' + obj.add(3, 4));
console.log('Add 2 Strings: ' + obj.add('hello', 'boy'));
var print = function () { return console.log('Use lambda function: ' + obj.asNumber2(32)); };
print();
var sum = function (x, y) { return x + y; };
console.log('Sum lambda function: ' + sum(2, 4));
obj.displayInfo();
var three = obj.add(1, 2); // Type is number
var twelve = obj.add('1', '2'); // Type is string
console.log(three);
console.log(twelve);
