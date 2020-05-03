import {Constants} from "../utils/Constants"

/**
 * @author Anurag Muthyam
 * Below is the method that squares(doubles) each number in a list using traditional approach
 * Write a method in functional style to achieve the same result using map() operator
 */

class MapEx1 {

    public squaresImperativeApproach(): number[] {
        let squaresList: number[] = [];

        for (let n of Constants.numbersList) {
            let sqr = n * n
            squaresList.push(sqr)
            n++
        }

        return squaresList
    }

    public squaresFunctionalApproach(): number[] {
        return Constants.numbersList.map(n => n * n)
    }

}

export default new MapEx1()

let mapEx1Obj = new MapEx1()
console.log(mapEx1Obj.squaresImperativeApproach())
console.log(mapEx1Obj.squaresFunctionalApproach())

