const faker = require('faker');

console.log("3")

const sqrF = (n: number) => {
    return n * n;
}
console.log(sqrF(4))

class MyClass {

    constructor() {
    }

    public sqr(n: number): number {
        debugger
        return n * n;
    }
}

export default new MyClass()


const obj = new MyClass()
console.log(obj.sqr(10))

