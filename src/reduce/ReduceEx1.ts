import {Constants} from "../utils/Constants";

class ReduceEx1 {

    public sumTheNumbersImperativeApproach1(numbers: number[]): number {
        for (var i = 0, sum = 0; i < numbers.length; sum += numbers[i++]) ;
        return sum
    }

    public sumTheNumbersFunctionalApproach1(numbers: number[]): number {
        return numbers.reduce((a, b) => a + b)
    }

    public sumTheNumbersFunctionalApproach2(numbers: number[]): number {
        return numbers.reduce(function (a, b) {
            return a + b
        })
    }

    public sumTheNumbersFunctionalApproach3(numbers: number[]): number {
        return numbers.reduceRight((a, b) => a + b)
    }

    public sumTheNumbersFunctionalApproach4(numbers: number[]): number | undefined {
        if (!Array.isArray(numbers)) return;

        let sum = 0
        numbers.forEach(i => sum += i);
        return sum
    }

    public sumTheNumbersFunctionalApproach5(numbers: number[]): number {
        return eval(numbers.join("+"))
    }

}

export default new ReduceEx1()

let numbers = Constants.doubleNumbersList

let reduceEx1Obj = new ReduceEx1()
console.log("Imperative Approach 1: " + reduceEx1Obj.sumTheNumbersImperativeApproach1(numbers))  //45

console.log("Functional Approach 1: " + reduceEx1Obj.sumTheNumbersFunctionalApproach1(numbers))  //45
console.log("Functional Approach 2: " + reduceEx1Obj.sumTheNumbersFunctionalApproach2(numbers))  //45
console.log("Functional Approach 3: " + reduceEx1Obj.sumTheNumbersFunctionalApproach3(numbers))  //45
console.log("Functional Approach 4: " + reduceEx1Obj.sumTheNumbersFunctionalApproach4(numbers))  //45

console.log("Eval Approach: " + reduceEx1Obj.sumTheNumbersFunctionalApproach5(numbers))          //45


