import {Constants} from "../../utils/Constants";
import {BaseClass} from "../../BaseClass";

class DeleteEmptyString extends BaseClass {

    constructor() {
        super()
    }

    // TODO fix this
    deleteEmptyString(lst: string[]): string[] {
        let resultLst: string[] = []

        for (let str of lst) {
            if (Object.keys(str).length) {
                resultLst.push(str)
            }
        }
        return resultLst
    }
}

export default new DeleteEmptyString()
