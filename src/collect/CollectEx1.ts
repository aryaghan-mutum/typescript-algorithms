import {Constants} from "../utils/Constants"
import {BaseClass} from "../BaseClass"

let sequency = require("sequency")
import Stream from "ts-stream"; // ES6 style

class CollectEx1 extends BaseClass {

    constructor() {
        super()
    }

    public doubleListFunctionalApproach(lst: number[]): number[] {
        return sequency.asSequence(lst)
            .map((n: number) => n * 2)
            .toList()
    }

    public doubleListImperativeApproach(lst: number[]): number[] {
        let resultList: number[] = []

        for (let n of lst) {
            n = n * 2
            resultList.push(n)
        }
        return resultList
    }
}

export default new CollectEx1()

let collectEx1Obj = new CollectEx1()

console.log("Functional Approach: " + collectEx1Obj.doubleListFunctionalApproach(Constants.numbersList));
console.log("Imperative Approach:" + collectEx1Obj.doubleListImperativeApproach(Constants.numbersList));
