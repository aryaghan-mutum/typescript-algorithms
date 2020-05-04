import {Constants} from "../utils/Constants";

class ReduceEx1 {

    private numsList = Constants.doubleNumbersList
    private numsListLength = Constants.doubleNumbersList.length

    public sumTheNumbersImperativeApproach1(): number {
        for (var i = 0, sum = 0; i < this.numsListLength; sum += this.numsList[i++]) ;
        return sum
    }

    public sumTheNumbersImperativeApproach2(): number {
        let sum = 0
        while (--this.numsListLength) {
            sum += this.numsList[this.numsListLength]
        }
        return sum
    }

    public sumTheNumbersFunctionalApproach1(): number {
        return Constants.doubleNumbersList.reduce((a, b) => a + b)
    }

    public sumTheNumbersFunctionalApproach2(): number {
        return Constants.doubleNumbersList.reduce(function (a, b) {
            return a + b
        })
    }

    public sumTheNumbersFunctionalApproach3(): number {
        return Constants.doubleNumbersList.reduceRight((a, b) => a + b)
    }

    public sumTheNumbersFunctionalApproach4(): number | undefined {
        if (!Array.isArray(this.numsList)) return;

        let sum = 0
        this.numsList.forEach(i => sum += i);
        return sum
    }

    public sumTheNumbersFunctionalApproach5(): number {
        return eval(Constants.doubleNumbersList.join("+"))
    }

}

export default new ReduceEx1()

let reduceEx1Obj = new ReduceEx1()
console.log("Imperative Approach 1: " + reduceEx1Obj.sumTheNumbersImperativeApproach1())  //45
console.log("Imperative Approach 2: " + reduceEx1Obj.sumTheNumbersImperativeApproach2())  //45

console.log("Functional Approach 1: " + reduceEx1Obj.sumTheNumbersFunctionalApproach1())  //45
console.log("Functional Approach 2: " + reduceEx1Obj.sumTheNumbersFunctionalApproach2())  //45
console.log("Functional Approach 3: " + reduceEx1Obj.sumTheNumbersFunctionalApproach3())  //45
console.log("Functional Approach 4: " + reduceEx1Obj.sumTheNumbersFunctionalApproach4())  //45

console.log("Eval Approach: " + reduceEx1Obj.sumTheNumbersFunctionalApproach5())          //45



