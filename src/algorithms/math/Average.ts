let sequency = require("sequency")

class Average {

    public averageTwoNumbers(x: number, y: number): number {
        return x + y / 2
    }

    public static averageNumbersInListUsingBuiltInOperator(numbers: number[]): number {
        return sequency.asSequence(numbers).average()
    }

    public static averageNumbersInList(numbers: number[]): number {
        const totalCount = numbers.length
        const sum = sequency
            .asSequence(numbers)
            .reduce((a: number, b: number) => a + b)
        return sum / totalCount
    }
}

export default new Average()
