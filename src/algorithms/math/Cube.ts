import {Constants} from "../../utils/Constants"
import {BaseClass} from "../../BaseClass"

let sequency = require("sequency")

class Cube extends BaseClass {

    constructor() {
        super()
    }

    cube = (n: number): number => n * n * n

    cubelst(lst: number[]): number[] {
        return sequency.asSequence(lst).map((n: number) => this.cube(n)).toList()
    }
}

export default new Cube()

let o = new Cube()
console.log(o.cubelst(Constants.numbersList));