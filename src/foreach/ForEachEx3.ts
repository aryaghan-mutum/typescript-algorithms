/**
 * @author Anurag Muthyam
 */

class ForEachEx3 {

    private str: string = 'Hello world'

    public iteratingCharsImperativeApproach1(): void {
        for (let i = 0; i < this.str.length; i++) {
            console.log(this.str.charAt(i))
        }
    }

    public iteratingCharsFunctionalApproach1(): void {
        this.str.split('')
            .forEach(function (c) {
                console.log(c)
            })
    }

    public iteratingCharsFunctionalApproach2(): void {
        [this.str].forEach(c => console.log(c))
    }

    public iteratingCharsFunctionalApproach3(): void {
        let result = '';
        this.str.split('')
            .map(char => {
                result += char
                console.log(result)
            })
    }

    public iteratingCharsFunctionalApproach4(): void {
        this.str.split('')
            .map(c => c.valueOf())
            .forEach(c => console.log(c))

    }

}

export default new ForEachEx3()

let forEachEx3Obj = new ForEachEx3()
forEachEx3Obj.iteratingCharsImperativeApproach1()
forEachEx3Obj.iteratingCharsFunctionalApproach1()
forEachEx3Obj.iteratingCharsFunctionalApproach2()
forEachEx3Obj.iteratingCharsFunctionalApproach3()
forEachEx3Obj.iteratingCharsFunctionalApproach4()

