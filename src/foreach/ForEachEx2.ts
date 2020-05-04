import {Constants} from "../utils/Constants"

/**
 * @author Anurag Muthyam
 */

class ForEachEx2 {

    public forEachImperativeApproach1(): void {
        const citiesList = Constants.citiesList

        for (let i = 0; i < citiesList.length; i++) {
            console.log("Imperative approach 1: " + citiesList[i]);
        }
    }

    public forEachImperativeApproach2(): void {
        for (const city of Constants.citiesList) {
            console.log("Imperative approach 2: " + city);
        }
    }

    public forEachFunctionalApproach1(): void {
        Constants.citiesList.forEach((city: string) => console.log("Functional approach 1: " + city))
    }

    public forEachFunctionalApproach2(): void {
        Constants.citiesList.forEach((city) => console.log("Functional approach 2: " + city))
    }

    public forEachFunctionalApproach3(): void {
        Constants.citiesList.forEach(city => console.log("Functional approach 3: " + city))
    }

}

export default new ForEachEx2()

let forEachEx2Obj = new ForEachEx2()
forEachEx2Obj.forEachImperativeApproach1()
forEachEx2Obj.forEachImperativeApproach2()
forEachEx2Obj.forEachFunctionalApproach1()
forEachEx2Obj.forEachFunctionalApproach2()
forEachEx2Obj.forEachFunctionalApproach3()
