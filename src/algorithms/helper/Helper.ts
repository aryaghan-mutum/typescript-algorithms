let sequency = require("sequency")

class Helper {

    static square(n: number): number {
        return n * n
    }

    static cube(n: number): number {
        return this.square(n) * n
    }

    static add1(n: number): number {
        return n + 1
    }

    static sub1(n: number): number {
        return n - 1
    }

    static first(lst: number[]): number {
        return lst[0]
    }

}