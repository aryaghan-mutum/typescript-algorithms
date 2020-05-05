import {Constants} from "../utils/Constants"
import {BaseClass} from "../BaseClass"

var sequency = require("sequency")

/**
 * @author Anurag Muthyam
 * flatMap() :
 * 1. flatMap() is a mix of map() and flat() functions.
 * 2. It transforms and flattens the items in a stream
 *
 * Here is the Input: List("ANTHEM OF THE SEAS", "OASIS OF THE SEAS", "NAVIGATOR OF THE SEAS")
 * Get the unique chars Output: [ , A, E, F, G, H, I, M, N, O, R, S, T, V]
 */

class FlatMapEx1 extends BaseClass {

    constructor() {
        super()
    }
    public getUniqueCharsFromListOfCitiesIterativeApproach(cities: string[]): string[] {
        return sequency.asSequence(cities)
            .map((city: string) => city.toLocaleUpperCase())
            .map((city: string) => city.split(""))
            .toSet()
    }

}

export default new FlatMapEx1()

let flatMapEx1Obj = new FlatMapEx1()

console.log(flatMapEx1Obj.getUniqueCharsFromListOfCitiesIterativeApproach(Constants.repeatedCitiesList))
