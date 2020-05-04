import {Constants} from "../utils/Constants"

var flatMap = require('array.prototype.flatmap');
var assert = require('assert');

/**
 * flatMap() :
 * 1. flatMap() is a mix of map() and flat() functions.
 * 2. It transforms and flattens the items in a stream
 *
 * Here is the Input: List("ANTHEM OF THE SEAS", "OASIS OF THE SEAS", "NAVIGATOR OF THE SEAS")
 * Get the unique chars Output: [ , A, E, F, G, H, I, M, N, O, R, S, T, V]

 */

class FlatMapEx1 {

    public getUniqueCharsFromListOfCitiesIterativeApproach(): void {
        
        //
        // for (let city of Constants.citiesList) {
        //     resultList = city.split(',')
        // }
        //
        // return resultList

    }

    public getUniqueCharsFromListOfCitiesFunctionalApproach() {

        // Constants.citiesList.map(city => city.split("")
        // return []
        //
        // return Constants.citiesList
        //     .map(city => city.split("")).fill()
    }

}

export default new FlatMapEx1()

let flatMapEx1Obj = new FlatMapEx1()

console.log(flatMapEx1Obj.getUniqueCharsFromListOfCitiesIterativeApproach())

