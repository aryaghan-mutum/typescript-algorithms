import {Constants} from "../utils/Constants"

/**
 * @author Anurag Muthyam
 * map() ->
 * 1. Intermediate operator
 * 2. It transforms a stream of input to a stream of output without altering the size of the stream.
 * 3. A map takes a function as argument. The function is applied to each element, mapping into a new element.
 * 4. It doesn't modify the stream, but instead creates a new list.
 */

class MapEx2 {

    public printListOfFlowersInUpperCase(): void {
        Constants.flowersList
            .sort()
            .map(flower => flower.toUpperCase())
            .forEach(flower => console.log(flower))
    }
}

export default new MapEx2()

new MapEx2().printListOfFlowersInUpperCase()

