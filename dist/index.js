"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker = require('faker');
console.log("3");
const sqrF = (n) => {
    return n * n;
};
console.log(sqrF(4));
class MyClass {
    constructor() {
    }
    sqr(n) {
        debugger;
        return n * n;
    }
}
exports.default = new MyClass();
const obj = new MyClass();
console.log(obj.sqr(10));
//# sourceMappingURL=index.js.map