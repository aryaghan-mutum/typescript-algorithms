import {Constants} from "../utils/Constants";
import {BaseClass} from "../BaseClass"

class ReduceEx5 extends BaseClass {

    constructor() {
        super()
    }

    public addCommasBetweenItemsImperativeApproach(flowers: string[]): string[] {
        for (let i = 1; i < flowers.length; i++) {
            flowers.splice(i, 0, ',')
        }
        return flowers
    }

}

export default new ReduceEx5()

let reduceEx5Obj = new ReduceEx5()

console.log(reduceEx5Obj.addCommasBetweenItemsImperativeApproach(Constants.flowersList))





