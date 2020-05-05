import {BaseClass} from "../../BaseClass"

let sequency = require("sequency")

class Average extends BaseClass {

    constructor() {
        super()
    }

    averageTwoNumbers = (x: number, y: number): number => x + y / 2

    averageNumbersInListUsingBuiltInOperator = (numbers: number[]): number => sequency.asSequence(numbers).average()

    averageNumbersInList = (numbers: number[]): number => {
        const totalCount = numbers.length
        const sum = sequency
            .asSequence(numbers)
            .reduce((a: number, b: number) => a + b)
        return sum / totalCount
    }

}

export default new Average()

