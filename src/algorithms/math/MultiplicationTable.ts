import {BaseClass} from "../../BaseClass"

const range = require('array-range')

class MultiplicationTable extends BaseClass {

    constructor() {
        super()
    }
    static printMultiplicationTable(n: number): void {
        console.log("Multiplication table for " + n)
        console.log("---------------------------")
        range(0, 11).forEach((i: number) => console.log(n + " x " + i + " = " + i * n))

    }
}

export default new MultiplicationTable()

range(1, 10).forEach((n: number) => {
    console.log(MultiplicationTable.printMultiplicationTable(n))
})