import {Constants} from "../utils/Constants";

class ReduceEx4 {

    public addCommasBetweenItemsImperativeApproach(flowers: string[]): string[] {
        for (let i = 1; i < flowers.length; i++) {
            flowers.splice(i, 0, ',')
        }
        return flowers
    }

}

export default new ReduceEx4()

let reduceEx4Obj = new ReduceEx4()

console.log(reduceEx4Obj.addCommasBetweenItemsImperativeApproach(Constants.flowersList))




