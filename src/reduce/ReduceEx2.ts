import {Constants} from "../utils/Constants";
import {BaseClass} from "../BaseClass"

const range = require('array-range')

class ReduceEx2 extends BaseClass {

    constructor() {
        super()
    }

    public addNumsBetweenTwoNumbersUsingForLoop(minNumber: number, maxNumber: number): number {
        let sum = 0
        for (let i = minNumber; i < maxNumber; i++) {
            sum += i
        }
        return sum
    }

    public addNumsBetweenTwoNumbersUsingRange(minNumber: number, maxNumber: number): number {
        return range(minNumber, maxNumber).reduce((a: number, b: number) => a + b)
    }
}

export default new ReduceEx2()

let reduceEx2Obj = new ReduceEx2()

console.log("Using Imperative approach: " + reduceEx2Obj.addNumsBetweenTwoNumbersUsingForLoop(1, 100))  //4950
console.log("Using range: " + reduceEx2Obj.addNumsBetweenTwoNumbersUsingRange(1, 100))                  //4950


