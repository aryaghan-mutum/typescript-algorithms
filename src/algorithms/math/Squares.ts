import {Constants} from "../../utils/Constants";
let sequency = require("sequency")

class Squares {

    square = (n: number): number => n * n

    squareLst(lst: number[]): number[] {
        return sequency.asSequence(lst).map((n: number) => this.square(n)).toList()
    }
}

export default new Squares()

// let o = new Squares()
// console.log(o.squareLst(Constants.numbersList));