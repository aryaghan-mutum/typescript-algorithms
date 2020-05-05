let sequency = require("sequency")

class Helper {

    square = (n: number): number => n * n
    cube = (n: number) => this.square(n) * n
    add1 = (n: number): number => n + 1
    sub1 = (n: number): number => n - 1
    double = (n: number): number => n + 2
    half = (n: number): number => n / 2

    first = (lst: number[]): number => lst[0]


}

export default new Helper()