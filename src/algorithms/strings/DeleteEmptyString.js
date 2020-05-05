"use strict";
exports.__esModule = true;
var DeleteEmptyString = /** @class */ (function () {
    function DeleteEmptyString() {
    }
    DeleteEmptyString.prototype.deleteEmptyString = function (lst) {
        var resultLst = [];
        for (var _i = 0, lst_1 = lst; _i < lst_1.length; _i++) {
            var str = lst_1[_i];
            if (Object.keys(str).length) {
                resultLst.push(str);
            }
        }
        return resultLst;
    };
    return DeleteEmptyString;
}());
exports["default"] = new DeleteEmptyString();
var o = new DeleteEmptyString();
console.log(o.deleteEmptyString(["anu rag", "shi #v a ", " ", "mom"]));
