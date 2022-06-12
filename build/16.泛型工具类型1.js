"use strict";
// 泛型工具类型
var per = { name: "name", age: 22 };
var copyper = { name: "copyName", age: 22 };
function toArray(x) {
    return [x];
}
var p1 = "name";
var p2 = "length";
var p3 = 1;
var objIn = {
    a: 1,
    b: 2,
    c: 3,
    // d: 2, //error
};
// 可以将其理解为对T的约束，T如果能够赋值给Lengthwise，则条件成立
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 1 });
var t0 = [];
var t2 = [1, 2];
var rt = "111";
