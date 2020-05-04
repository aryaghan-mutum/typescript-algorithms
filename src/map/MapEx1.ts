import {Constants} from "../utils/Constants"
const { Map } = require('immutable');

/**
 * @author Anurag Muthyam
 * Below is the method that squares(doubles) each number in a list using traditional approach
 * Write a method in functional style to achieve the same result using map() operator
 */

class MapEx1 {

    public squaresImperativeApproach(numbers: number[]): number[] {
        let squaresList: number[] = [];

        for (let n of numbers) {
            let sqr = n * n
            squaresList.push(sqr)
            n++
        }

        return squaresList
    }

    public squaresFunctionalApproach(numbers: number[]): number[] {
        return numbers.map(n => n * n)
    }

}

export default new MapEx1()

let mapEx1Obj = new MapEx1()
console.log(mapEx1Obj.squaresImperativeApproach(Constants.numbersList))
console.log(mapEx1Obj.squaresFunctionalApproach(Constants.numbersList))


