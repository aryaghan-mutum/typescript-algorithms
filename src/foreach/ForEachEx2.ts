import {Constants} from "../utils/Constants"

/**
 * @author Anurag Muthyam
 */

class ForEachEx2 {

    public forEachImperativeApproach1(cities: string[]): void {
        for (let i = 0; i < cities.length; i++) {
            console.log("Imperative approach 1: " + cities[i]);
        }
    }

    public forEachImperativeApproach2(cities: string[]): void {
        for (const city of cities) {
            console.log("Imperative approach 2: " + city);
        }
    }

    public forEachFunctionalApproach1(cities: string[]): void {
        cities.forEach((city: string) => console.log("Functional approach 1: " + city))
    }

    public forEachFunctionalApproach2(cities: string[]): void {
        cities.forEach((city) => console.log("Functional approach 2: " + city))
    }

    public forEachFunctionalApproach3(cities: string[]): void {
        cities.forEach(city => console.log("Functional approach 3: " + city))
    }

}

export default new ForEachEx2()

let cities = Constants.citiesList

let forEachEx2Obj = new ForEachEx2()
forEachEx2Obj.forEachImperativeApproach1(cities)
forEachEx2Obj.forEachImperativeApproach2(cities)
forEachEx2Obj.forEachFunctionalApproach1(cities)
forEachEx2Obj.forEachFunctionalApproach2(cities)
forEachEx2Obj.forEachFunctionalApproach3(cities)
