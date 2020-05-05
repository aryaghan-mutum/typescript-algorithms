import {Constants} from "../utils/Constants"
import {BaseClass} from "../BaseClass"

const Stream = require('stream')

/**
 * @author Anurag Muthyam
 */

class SortEx1 extends BaseClass {

    constructor() {
        super()
    }

    public sortCitiesInAscOrderImperativeApproach(): string[] {
        let resultList: string[] = []

        for (let city of Constants.citiesList) {
            resultList.push(city.toUpperCase())
        }
        return resultList.sort()
    }

    public sortCitiesInDescOrderImperativeApproach(): string[] {
        return this.sortCitiesInAscOrderImperativeApproach().reverse()
    }

    public sortCitiesInAscOrderFunctionalApproach(): string[] {
        return Constants.citiesList.map(city => city.toUpperCase()).sort()
    }

    public sortCitiesInDescOrderFunctionalApproach(): string[] {
        return this.sortCitiesInAscOrderFunctionalApproach().reverse()
    }

    public sortAndPrintCities(): void {
        return Constants.citiesList
            .map(city => city.toUpperCase())
            .sort()
            .forEach(city => console.log(city))
    }
}

export default new SortEx1()

const sortEx1Obj = new SortEx1()
console.log("Imperative Approach ASC order: " + sortEx1Obj.sortCitiesInAscOrderImperativeApproach())    //[ 'COLUMBUS', 'FARGO', 'MIAMI', 'SAN FRANCISCO' ]
console.log("Imperative Approach DSC order: " + sortEx1Obj.sortCitiesInDescOrderImperativeApproach())   //[ 'SAN FRANCISCO', 'MIAMI', 'FARGO', 'COLUMBUS' ]

console.log("Declarative Approach ASC order: " + sortEx1Obj.sortCitiesInAscOrderFunctionalApproach())    //[ 'COLUMBUS', 'FARGO', 'MIAMI', 'SAN FRANCISCO' ]
console.log("Declarative Approach DSC order: " + sortEx1Obj.sortCitiesInDescOrderFunctionalApproach())   //[ 'SAN FRANCISCO', 'MIAMI', 'FARGO', 'COLUMBUS' ]

sortEx1Obj.sortAndPrintCities()



