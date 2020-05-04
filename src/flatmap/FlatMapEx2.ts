let sequency = require("sequency")

/**
 *  @author Anurag Muthyam
 */

class FlatMapEx2 {

    public getDistinctNumbersFromNestedArray(numbers: number[][]): number[] {
        return sequency.asSequence(numbers)
            .flatMap((n: number) => sequency.asSequence(n))
            .distinct()
            .toList()
    }

}

export default new FlatMapEx2()

let flatMapEx2Obj = new FlatMapEx2()

let nestedNumbersList: number[][] = [[1, 2, 3, 3], [4, 4, 5, 6]]
console.log(flatMapEx2Obj.getDistinctNumbersFromNestedArray(nestedNumbersList))                      //[ 1, 2, 3, 4, 5, 6 ]
console.log(flatMapEx2Obj.getDistinctNumbersFromNestedArray(nestedNumbersList.concat([[7, 8, 9]])))  //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
