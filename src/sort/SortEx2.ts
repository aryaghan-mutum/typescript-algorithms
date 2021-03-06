import {Constants} from "../utils/Constants"
import {BaseClass} from "../BaseClass"

var sequency = require("sequency")

/**
 * @author Anurag Muthyam
 */

class SortEx2 extends BaseClass {

    constructor() {
        super()
    }

    public f(): number {
        let arr = Constants.numbersList
        return sequency.asSequence(arr)
            .filter((n: number) => n % 2 == 0)
            .map((n: number) => n * 2)
            .fla()

    }

}

export default new SortEx2()

const sortEx2Obj = new SortEx2()
console.log(sortEx2Obj.f());




