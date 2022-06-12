"use strict";
// 1.类型断言
// 语法：
// 　<类型>值
//   或者
// 　值 as 类型
// 因为TypesScript只在编译阶段起作用，无法判断运行时才执行的代码的类型，
// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法
// function getLength(something: string | number): number {
//     if (something.length) {  //error
//         return something.length;
//     } else {
//         return something.toString().length;  
//     }
// }
// 此时可以使用类型断言
function getLength(something) {
    // 注意：类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
    // <boolean>something;//error
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// 2.非空断言
// 当使用联合类型，无法断定类型时，在变量后添加!可以断言操作变量是非null和非undefined类型
var uns;
// uns.toString(); //error
uns.length;
// 3.确定赋值断言
// let x: number;
// initialize();
// console.log(x * 2); //error 因为TypeScript认为变量 x 在赋值前被使用了
// function initialize() {
//     x = 10;
// }
// 可以在变量后添加!，TypeScript 编译器就会知道该属性会被明确地赋值
var x;
initialize();
console.log(2 * x); // Ok
function initialize() {
    x = 10;
}
