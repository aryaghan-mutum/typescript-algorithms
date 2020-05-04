import {Constants} from "../utils/Constants";

/**
 * @author Anurag Muthyam
 * what are the result the below methods generate?
 */

class MiscellaneousEx1 {

    public static misc1(): void {
        Constants.numbersList
            .filter(n => n > 3)
            .map(n => n * 2)
            .sort()
            .forEach(n => console.info(n))
    }

    public static misc2(): number {
        return Constants.numbersList.filter(n => n > 2).length
    }
}

MiscellaneousEx1.misc1()                                                      //10, 12, 14, 16, 18, 20, 8
console.log("There are total " + MiscellaneousEx1.misc2() + " numbers > 2")  //8
