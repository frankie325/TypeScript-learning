"use strict";
// 当变量重复时，我们可以使用命名空间
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var One;
(function (One) {
    // function sum(a: number, b: number): number {
    //     return a + b;
    // }
    // 如果想要在命名空间外部使用，则需要进行导出
    function sum(a, b) {
        return a + b;
    }
    One.sum = sum;
    console.log(sum(1, 1));
    // 也可以嵌套使用命名空间
    var Three;
    (function (Three) {
        function sum(a, b) {
            return a + b;
        }
        Three.sum = sum;
    })(Three = One.Three || (One.Three = {}));
    console.log(Three.sum(3, 3));
})(One || (One = {}));
console.log(One.Three.sum(4, 4));
var Two;
(function (Two) {
    function sum(a, b) {
        return a + b;
    }
    console.log(sum(2, 2));
})(Two || (Two = {}));
console.log(One.sum(4, 4));
var _2_______1 = __importDefault(require("./2.\u547D\u540D\u7A7A\u95F4\u5BFC\u51FA"));
console.log(_2_______1.default.add(100, 100));
var axis;
axis = {
    x: 1,
    y: 2,
};
