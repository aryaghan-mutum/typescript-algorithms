import Helper from "../../helper/Helper"
import math from "../../helper/Helper"
import evenOdd from "../EvenAndOdd"

class Multiplication {

    /**
     * Multiply two numbers using iteration
     */
    static multiplyTwoNumsIteration(a: number, b: number): number {
        let count = 0
        while (b != 0) {
            b = b - 1;
            count = count + a;
        }
        return count;
    }

    /**
     * Multiply two numbers using recursion
     */
    static multiplyTwoNumsRecursion(a: number, b: number): number {
        if (b == 0) {
            return 0;
        } else {
            return a + this.multiplyTwoNumsRecursion(a, Helper.sub1(b));
        }
    }

    // TODO fix this
    static egyptianMultiplicationRecursion(a: number, b: number): number {
        if (a == 0) {
            return 0
        } else if (evenOdd.isEven(a)) {
            return this.egyptianMultiplicationRecursion(math.half(a), math.double(b))
        } else {
            return b + this.egyptianMultiplicationRecursion(math.half(a), math.double(b))
        }
    }

    // TODO fix this
    static egyptianMultiplicationIteration(a: number, b: number): number {
        let countA = 1
        let countB = b
        let mulMap = new Map()

        while ((math.double(countA) < a)) {
            countA = math.double(countA);
            countB = math.double(countB);
            mulMap.set(1, b);
            mulMap.set(countA, countB);
        }

        return -1;
    }
}

export default new Multiplication()

console.log(Multiplication.multiplyTwoNumsIteration(2, 3));
console.log(Multiplication.multiplyTwoNumsRecursion(2, 3));
console.log(Multiplication.egyptianMultiplicationRecursion(2, 3));

console.log(Multiplication.egyptianMultiplicationIteration(2, 3));

