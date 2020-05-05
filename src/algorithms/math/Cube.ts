import {Constants} from "../../utils/Constants";

let sequency = require("sequency")

class Cube {

    cube = (n: number): number => n * n * n

    cubelst(lst: number[]): number[] {
        return sequency.asSequence(lst).map((n: number) => this.cube(n)).toList()
    }
}

export default new Cube()

let o = new Cube()
console.log(o.cubelst(Constants.numbersList));