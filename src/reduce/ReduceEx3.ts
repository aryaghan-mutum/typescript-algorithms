import {Constants} from "../utils/Constants"
import {BaseClass} from "../BaseClass"

class ReduceEx3 extends BaseClass {

    constructor() {
        super()
    }

    public getMinUsingMathFunc(numbers: number[]): number {
        return Math.min.apply(null, numbers)
    }

    public getMaxUsingMathFunc(numbers: number[]): number {
        return Math.max.apply(null, numbers)
    }

    public getMinUsingUsingSpreadOperator(numbers: number[]): number {
        return Math.min(...numbers)
    }

    public getMaxUsingUsingSpreadOperator(numbers: number[]): number {
        return Math.max(...numbers)
    }

    public getMinNumUsingWhileLoop(numbers: number[]): number {
        let len = numbers.length, minNum = Infinity;
        while (len--) {
            if (Number(numbers[len]) < minNum) {
                minNum = Number(numbers[len])
            }
        }
        return minNum;
    }

    public getMaxNumUsingWhileLoop(numbers: number[]): number {
        let len = numbers.length, maxNum = -Infinity;
        while (len--) {
            if (Number(numbers[len]) > maxNum) {
                maxNum = Number(numbers[len]);
            }
        }
        return maxNum;
    }

    public getMinNumUsingReduce(numbers: number[]): number {
        return numbers.reduce((a: number, b: number) => a < b ? a : b)
    }

    public getMaxNumUsingReduce(numbers: number[]): number {
        return numbers.reduce((a: number, b: number) => a > b ? a : b)
    }


}

export default new ReduceEx3()

let reduceEx3Obj = new ReduceEx3()

console.log("Min Using Math() : " + reduceEx3Obj.getMinUsingMathFunc(Constants.numbersList))                //1
console.log("Max Using Math() : " + reduceEx3Obj.getMaxUsingMathFunc(Constants.doubleNumbersList))          //9

console.log("Min Using Spread : " + reduceEx3Obj.getMinUsingUsingSpreadOperator(Constants.numbersList))                //1
console.log("Max Using Spread : " + reduceEx3Obj.getMaxUsingUsingSpreadOperator(Constants.doubleNumbersList))          //9

console.log("Min Using While loop : " + reduceEx3Obj.getMinNumUsingWhileLoop(Constants.numbersList))        //1
console.log("Max Using While loop : " + reduceEx3Obj.getMaxNumUsingWhileLoop(Constants.doubleNumbersList))  //9

console.log("Min Using Reduce() : " + reduceEx3Obj.getMinNumUsingReduce(Constants.numbersList))             //1
console.log("Max Using Reduce() : " + reduceEx3Obj.getMaxNumUsingReduce(Constants.doubleNumbersList))       //9





