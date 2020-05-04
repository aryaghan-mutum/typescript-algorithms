import {Constants} from "../utils/Constants";
const Stream = require('stream')
const { Map } = require('immutable');

/**
 * @author Anurag Muthyam
 */

class SortEx2 {

    public f(): void {
        let arr = Constants.numbersList
        const map1 = Map({ a: 1, b: 2, c: 3 })
        const map2 = map1.set('b', 50)

        console.log(map1);
        console.log(map2);

    }

}

export default new SortEx2()

const sortEx2Obj = new SortEx2()
console.log(sortEx2Obj.f());




