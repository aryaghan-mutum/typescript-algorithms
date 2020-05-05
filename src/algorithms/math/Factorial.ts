import {BaseClass} from "../../BaseClass"

class Factorial extends BaseClass {

    constructor() {
        super()
    }

    static linearRecursiveFactorial(n: number): number {
        if (n == 1) {
            return 1
        } else {
            return n * this.linearRecursiveFactorial(n - 1)
        }
    }

    static linearIterativeFactorial(n: number): number {
        function factorialIter(product: number, count: number, maxCount: number): number {
            if (count > maxCount) {
                return product
            } else {
                let z = count * product
                count++
                return factorialIter(z, count, maxCount)
            }
        }

        return factorialIter(1, 1, n)
    }
}

export default new Factorial()

console.log(Factorial.linearRecursiveFactorial(10)); //3628800
console.log(Factorial.linearIterativeFactorial(10)); //3628800