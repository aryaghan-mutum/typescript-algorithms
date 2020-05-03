"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor(name, age) {
        this.displayInfo = () => console.log(this.name + ' is ' + this.age + ' years old ');
        this.name = name;
        this.age = age;
    }
    asNumber(val) {
        return val;
    }
    asNumber2(val) {
        return typeof val == 'string' ? Number(val) : val;
    }
}
exports.MyClass = MyClass;
var obj = new MyClass('anurag', 26);
console.log('As Nnumber: ' + obj.asNumber(2));
// console.log('Add 2 Nums: ' + obj.add(3, 4));
// console.log('Add 2 Strings: ' + obj.add('hello', 'boy'));
let print = () => console.log('Use lambda function: ' + obj.asNumber2(32));
print();
let sum = (x, y) => x + y;
console.log('Sum lambda function: ' + sum(2, 4));
obj.displayInfo();
//# sourceMappingURL=type_test.js.map