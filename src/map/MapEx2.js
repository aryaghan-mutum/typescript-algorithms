"use strict";
exports.__esModule = true;
var Constants_1 = require("../utils/Constants");
/**
 * @author Anurag Muthyam
 * map() ->
 * 1. Intermediate operator
 * 2. It transforms a stream of input to a stream of output without altering the size of the stream.
 * 3. A map takes a function as argument. The function is applied to each element, mapping into a new element.
 * 4. It doesn't modify the stream, but instead creates a new list.
 */
var MapEx2 = /** @class */ (function () {
    function MapEx2() {
    }
    MapEx2.prototype.printListOfFlowersInUpperCase = function (flowers) {
        flowers
            .sort()
            .map(function (flower) { return flower.toUpperCase(); })
            .forEach(function (flower) { return console.log(flower); });
    };
    return MapEx2;
}());
exports["default"] = new MapEx2();
new MapEx2().printListOfFlowersInUpperCase(Constants_1.Constants.flowersList);
