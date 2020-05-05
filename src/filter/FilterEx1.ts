import {Constants} from "../utils/Constants"
import {BaseClass} from "../BaseClass"

/**
 * @author Anurag Muthyam
 */

class FilterEx1 extends BaseClass {

    constructor() {
        super()
    }

    public isFargoPresentInListApproach1(cities: string[]): boolean {
        for (let city of cities) {
            if (city === 'fargo') {
                return true
            }
        }
        return false
    }

    public isFargoPresentInListApproach2(cities: string[]): boolean {
        return cities.includes('fargo')
    }

}

export default new FilterEx1()

let cities = Constants.citiesList

let filterEx1Obj = new FilterEx1()
console.log(filterEx1Obj.isFargoPresentInListApproach1(cities))  // true
console.log(filterEx1Obj.isFargoPresentInListApproach2(cities))  // true
