import {BaseClass} from "../../../BaseClass"

class PythagoreanTriplets extends BaseClass {

    constructor() {
        super()
    }

    // triplet: a^2 + b^2 = c^2
    static pythagoreanTriplets(limit: number): number[][] {
        let a, b, c = 0
        let m = 2
        let pythagoreanTriplesList: number[][] = []

        while (c < limit) {
            for (let n = 1; n < m; ++n) {
                a = m * m - n * n
                b = 2 * m * n
                c = m * m + n * n

                if (c > limit) {
                    break
                }

                pythagoreanTriplesList.push([a, b, c])
                console.log(a + " " + b + " " + c)
            }
            m++
        }

        return pythagoreanTriplesList
    }

    static pythagoreanTripletsCount(limit: number): number {
        let a, b, c = 0
        let m = 2

        let tripletsCount = 0
        while (c < limit) {
            for (let n = 1; n < m; ++n) {
                a = m * m - n * n
                b = 2 * m * n
                c = m * m + n * n

                if (c > limit) {
                    break
                }

                tripletsCount++
            }
            m++
        }

        return tripletsCount

    }


}

export default new PythagoreanTriplets()

console.log(PythagoreanTriplets.pythagoreanTriplets(20))
console.log(PythagoreanTriplets.pythagoreanTripletsCount(20))