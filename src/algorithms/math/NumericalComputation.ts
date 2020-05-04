import {Constants} from "../../utils/Constants";

let sequency = require("sequency")

class NumericalComputation {

    static doubleEvenNums(numbers: Array<number>): number[] {
        return sequency.asSequence(numbers)
            .filter((n: number) => n % 2 == 0)
            .map((n: number) => n * 2)
            .toList()
    }

    static doubleEvenNumsAndSum(numbers: Array<number>): number {
        return sequency.asSequence(numbers)
            .filter((n: number) => n % 2 == 0)
            .map((n: number) => n * 2)
            .sum()
    }

    static findSqrtOfEvenNums(numbers: Array<number>) {
        return sequency.asSequence(numbers)
            .filter((n: number) => n % 2 == 0)
            .map((n: number) => Math.sqrt(n))
            .toList()
    }

    static findSqrtOfEvenNumsAndSum(numbers: Array<number>): number {
        return sequency.asSequence(numbers)
            .filter((n: number) => n % 2 == 0)
            .map((n: number) => Math.sqrt(n))
            .sum()
    }

}

export default new NumericalComputation()

let numbers = Constants.numbersList
console.log(NumericalComputation.doubleEvenNums(numbers))  //[ 4, 8, 12, 16, 20 ]
console.log(NumericalComputation.doubleEvenNumsAndSum(numbers))  //60
console.log(NumericalComputation.findSqrtOfEvenNums(numbers))
console.log(NumericalComputation.findSqrtOfEvenNumsAndSum(numbers))  //11.854408090070843
