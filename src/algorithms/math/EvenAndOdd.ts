import {Constants} from "../../utils/Constants";
import {BaseClass} from "../../BaseClass";

let sequency = require("sequency")

class EvenAndOdd extends BaseClass {

    constructor() {
        super()
    }

    isEvenMethod1(n: number): boolean {
        if (n % 2 == 0) {
            return true
        } else {
            return false
        }
    }

    isEven(n: number): boolean {
        return n % 2 == 0 ? true : false
    }

    isOdd(n: number): boolean {
        return Math.abs(n % 2) == 1
    }

    checkNumbersAreEvenInList(lst: number[]): boolean[] {
        let resultList: boolean[] = []
        sequency.asSequence(lst)
            .forEach((n: number) => {
                this.isEven(n) ? resultList.push(true) : resultList.push(false)
            })
        return resultList
    }

    checkNumbersAreOddInList(lst: number[]): boolean[] {
        let resultList: boolean[] = []
        sequency.asSequence(lst)
            .forEach((n: number) => {
                this.isOdd(n) ? resultList.push(true) : resultList.push(false)
            })
        return resultList
    }

}

export default new EvenAndOdd()

