import {Constants} from "../utils/Constants"

/**
 * @author Anurag Muthyam
 */

class FilterEx1 {

    public isFargoPresentInListApproach1(): boolean {
        for (let city of Constants.citiesList) {
            if (city === 'fargo') {
                return true
            }
        }
        return false
    }

    public isFargoPresentInListApproach2(): boolean {
        return Constants.citiesList.includes('fargo')
    }

}

export default new FilterEx1()

let filterEx1Obj = new FilterEx1()
console.log(filterEx1Obj.isFargoPresentInListApproach1())  // true
console.log(filterEx1Obj.isFargoPresentInListApproach2())  // true
