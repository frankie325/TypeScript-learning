"use strict";
// export namespace utils {
//     export function add(a: number, b: number) {
//         return a + b;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// 默认导出要分开写
var utils;
(function (utils) {
    function add(a, b) {
        return a + b;
    }
    utils.add = add;
})(utils || (utils = {}));
exports.default = utils;
