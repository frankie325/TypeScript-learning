"use strict";
/*
1.泛型是允许同一个函数接受不同类型参数的一种模板。
相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
*/
/*
假如实现一个函数 identity，函数的参数可以是任何值，返回值就是将参数原样返回，并且其只能接受一个参数

可以使用any实现，但是这样就丧失了类型检查的效果
function identity(arg: any): any {
    return arg;
}
*/
// 使用泛型就没有这个问题
function identity(value) {
    return value;
}
// 这个 T 是一个抽象类型，只有在调用的时候才确定它的值
identity(1.1111).toFixed(2);
identity(2.1111).toFixed(2); //也可以不显示指定，编译器足够聪明，能够知道我们的参数类型
var getData1 = function (value) {
    return value;
};
// 调用的时候指定泛型类型
getData1(1);
function getData2(value) {
    return value;
}
// 赋值的时候指定泛型类型
var getData = getData2;
getData("11");
var myName1 = {
    name: "kfg",
    // name: 111,  //没有指定泛型类型时，默认是string
};
var myName2 = {
    name: 666,
};
var getT1 = "1";
// let getT2: GetType<string> = 1; //error
