import {Constants} from "../utils/Constants";

class MiscellaneousEx1 {

    // what is the result the misc1() generates?
    public static misc1() {
        Constants.numbersList
            .filter(n => n > 3)
            .map(n => n * 2)
            .sort()
            .forEach(n => console.info(n))
    }
}

MiscellaneousEx1.misc1()
//let miscObj = new MiscellaneousEx1()