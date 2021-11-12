"use strict";
/*
泛型是允许同一个函数接受不同类型参数的一种模板。
相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
*/
function identity(value) {
    return value;
}
// 这个 T 是一个抽象类型，只有在调用的时候才确定它的值
identity(1.1111).toFixed(2);
identity(2.1111).toFixed(2); //也可以不显示指定，编译器足够聪明，能够知道我们的参数类型
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
// 4.infer
