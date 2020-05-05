import {Constants} from "../../utils/Constants";

let sequency = require("sequency")

class EvenAndOdd {

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

let evenOddObj = new EvenAndOdd()

// console.log(evenOddObj.isEven(2))
// console.log(evenOddObj.isOdd(3))
//
// console.log(evenOddObj.checkNumbersAreEvenInList(Constants.numbersList))
// console.log(evenOddObj.checkNumbersAreOddInList(Constants.numbersList))

