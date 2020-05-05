import {Constants} from "../utils/Constants"
import {BaseClass} from "../BaseClass"

/**
 * @author Anurag Muthyam
 * what are the result the below methods generate?
 */

class MiscellaneousEx1 extends BaseClass {

    constructor() {
        super()
    }

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

    public static misc3(): number[] {
        return Constants.floridaZipCodeList
            .map(zip => zip.zipCode)
            .filter(zip => zip > 32004)
            .sort()
            .reverse()
    }

    public static misc4(): string[] {
        return Constants.floridaZipCodeList
            .map(reg => reg.region)
            .map(reg => reg.toUpperCase())
            .filter(reg => reg.length > 12)
            .sort()
    }

}

MiscellaneousEx1.misc1()                                                      //10, 12, 14, 16, 18, 20, 8
console.log("There are total " + MiscellaneousEx1.misc2() + " numbers > 2")   //8
console.log(MiscellaneousEx1.misc3())                                         //[ 32007, 32006 ]
console.log(MiscellaneousEx1.misc4())                                         //[ 'FLEMING ISLAND', 'PONTE VEDRA BEACH' ]



