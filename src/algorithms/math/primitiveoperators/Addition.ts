import math from "../../helper/Helper"
import {BaseClass} from "../../../BaseClass"

class Addition extends BaseClass {

    constructor() {
        super()
    }

    /**
     * Add two numbers using recursion
     */
    static addTwoNumbersRecursion(a: number, b: number): number {
        if (a == 0) {
            return b
        } else {
            return this.addTwoNumbersRecursion(math.sub1(a), math.add1(b))
        }
    }

    /**
     * Add two numbers using iteration
     */
    static addTwoNumbersIteration(a: number, b: number): number {
        while (a != 0) {
            a = a - 1
            b = b + 1
        }
        return b
    }

}

export default new Addition()

console.log(Addition.addTwoNumbersRecursion(2, 3));
console.log(Addition.addTwoNumbersIteration(2, 3));
