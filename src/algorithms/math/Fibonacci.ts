class Fibonacci {

    static fibonacci(n: number): number {
        if (n == 0) {
            return 0
        } else if (n == 1) {
            return 1
        } else if (n < 0) {
            alert("The series must be (n > 1)")
            return n
        } else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2)
        }
    }

}

export default new Fibonacci()

console.log(Fibonacci.fibonacci(10))
console.log(Fibonacci.fibonacci(-3))
