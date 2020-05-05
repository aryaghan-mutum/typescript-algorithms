import {Constants} from "../../utils/Constants";

let sequency = require("sequency")

class DoubleList {

    static doubleListDeclarativeApproach(lst: number[]): number[] {
        return sequency.asSequence(lst)
            .map((n: number) => n * 2)
            .toList()
    }

    static doubleListImperativeApproach(lst: number[]): number[] {
        let resultList: number[] = []

        for(let n of lst) {
            n = n * 2
            resultList.push(n)
        }
        return resultList
    }
}

export default new DoubleList()

console.log(DoubleList.doubleListDeclarativeApproach(Constants.numbersList));
console.log(DoubleList.doubleListImperativeApproach(Constants.numbersList));