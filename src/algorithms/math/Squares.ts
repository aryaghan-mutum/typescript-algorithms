import {Constants} from "../../utils/Constants"
import {BaseClass} from "../../BaseClass"
import Logger = require("js-logger");

let sequency = require("sequency")

class Squares extends BaseClass {

    constructor() {
        super()
    }

    square = (n: number): number => n * n

    squareLst(lst: number[]): number[] {
        return sequency.asSequence(lst).map((n: number) => this.square(n)).toList()
    }
}

export default new Squares()

let o = new Squares()
Logger.info(o.squareLst(Constants.numbersList));

