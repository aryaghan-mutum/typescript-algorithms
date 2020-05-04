/**
 * @author Anurag Muthyam
 * Define a method which generates 5 random numbers both in iterative and declarative style.
 */

class ForEachEx1 {

    private readonly MAX: number = 5

    public log5RandNumbersImperativeApproach(): void {
        for (let i = 1; i <= this.MAX; i++) {
            let randomNum = Math.random()
            randomNum = randomNum * 2
            console.log("Rand # imperative approach: " + randomNum.toPrecision(4))
        }
    }

    public log5RandNumbersFunctionalApproach1(): void {
        Array.from({length: this.MAX},
            () => console.log("Rand # functional approach 1: " + (Math.random() * 2).toPrecision(4)))
    }

    public log5RandNumbersFunctionalApproach2(): void {
        Array.apply(null, Array(this.MAX))
            .map(function () {
                let x = Math.random() * 2
                return x.toPrecision(4)
            })
            .forEach(n => console.log("Rand # functional approach 2: " + n))
    }

    public log5RandNumbersFunctionalApproach3(): void {
        [...Array(this.MAX)]
            .map(() => Math.random() * 2)
            .map(n => n.toPrecision(4))
            .forEach(n => console.log("Rand # functional approach 3: " + n))
    }
}

export default new ForEachEx1()

let forEachEx1Obj = new ForEachEx1()
forEachEx1Obj.log5RandNumbersImperativeApproach()
forEachEx1Obj.log5RandNumbersFunctionalApproach1()
forEachEx1Obj.log5RandNumbersFunctionalApproach2()
forEachEx1Obj.log5RandNumbersFunctionalApproach3()


