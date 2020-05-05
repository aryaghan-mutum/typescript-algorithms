import Helper from "../../helper/Helper";

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
}

export default new Multiplication()

console.log(Multiplication.multiplyTwoNumsIteration(2, 3));
console.log(Multiplication.multiplyTwoNumsRecursion(2, 3));
