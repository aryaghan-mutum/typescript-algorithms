import {BaseClass} from "../../BaseClass";

const range = require('array-range')
var sequency = require("sequency")

class Prime extends BaseClass {

    constructor() {
        super()
    }

    isPrime(n: number): boolean {
        if (n < 2) return false
        else {

            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }
}

export default new Prime()

let o = new Prime()
console.log(o.isPrime(2));
console.log(o.isPrime(0));
console.log(o.isPrime(-1));
console.log(o.isPrime(21));
console.log(o.isPrime(31));
console.log(o.isPrime(7));




