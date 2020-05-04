import Average from "./Average";

class SquareRoot {

    static squareRootMethod1(n: number): number {
        let low = 0;
        let high = n;
        let mid = 0;

        for (let i = 0; i <= 10; i++) {
            mid = (low + high) / 2;

            if (mid * mid == n)
                return mid;
            if (mid * mid > n)
                high = mid;
            else
                low = mid;
        }
        return mid
    }

    static squareRootMethod2(n: number): number {
        let start = 0
        let end = n

        while (start + 1 < end) {

            let mid = Average.averageTwoNumbers(start, (end - start))

            if (mid * mid == n)
                return mid
            else if (mid * mid < n)
                start = mid
            else
                end = mid
        }

        if (end * end == n) return end

        return start
    }
}

console.log(SquareRoot.squareRootMethod1(100))
console.log(SquareRoot.squareRootMethod2(100))


