import {Constants} from "../../utils/Constants";

let sequency = require("sequency")

class EvenAndOdd {

    static isEvenMethod1(n: number): boolean {
        if (n % 2 == 0) {
            return true
        } else {
            return false
        }
    }

    static isEven(n: number): boolean {
        return n % 2 == 0 ? true : false
    }

    static isOdd(n: number): boolean {
        return Math.abs(n % 2) == 1
    }

    static checkNumbersAreEvenInList(lst: number[]): boolean[] {
        let resultList: boolean[] = []
        sequency.asSequence(lst)
            .forEach((n: number) => {
                this.isEven(n) ? resultList.push(true) : resultList.push(false)
            })
        return resultList
    }

    static checkNumbersAreOddInList(lst: number[]): boolean[] {
        let resultList: boolean[] = []
        sequency.asSequence(lst)
            .forEach((n: number) => {
                this.isOdd(n) ? resultList.push(true) : resultList.push(false)
            })
        return resultList
    }

}

export default new EvenAndOdd()

console.log(EvenAndOdd.isEven(2))
console.log(EvenAndOdd.isOdd(3))

console.log(EvenAndOdd.checkNumbersAreEvenInList(Constants.numbersList))
console.log(EvenAndOdd.checkNumbersAreOddInList(Constants.numbersList))

