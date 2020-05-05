import {Constants} from "../utils/Constants"
import {BaseClass} from "../BaseClass"

let sequency = require("sequency")

/**
 * @author Anurag Muthyam
 * flatMap() :
 * 1. flatMap() is a mix of map() and flat() functions.
 * 2. It transforms and flattens the items in a stream
 *
 * Flatten a nested list
 */

class FlatMapEx3 extends BaseClass {

    constructor() {
        super()
    }

    public flatMapListsImperativeApproach(numbers: number[][]): number[] {

        let resultList = []

        for (let i of numbers) {
            for (let j of i) {
                resultList.push(j)
            }
        }

        return resultList
    }

    public flatMapListsFunctionalApproach(numbers: number[][]): number[] {
        return sequency.asSequence(numbers)
            .flatMap((n: number) => sequency.asSequence(n))
            .toList()
    }

}

export default new FlatMapEx3()

let flatMapEx3Obj = new FlatMapEx3()

console.log("Imperative Approach: " + flatMapEx3Obj.flatMapListsImperativeApproach(Constants.oddAndEvenNumsNestedList))
console.log("Functional Approach: " + flatMapEx3Obj.flatMapListsFunctionalApproach(Constants.oddAndEvenNumsNestedList))