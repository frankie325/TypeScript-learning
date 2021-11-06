"use strict";
/*
在面向对象语言中，接口（Interfaces）是一个很重要的概念，
它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

TypeScript 中的接口是一个非常灵活的概念
除了可用于[对类的一部分行为进行抽象]以外，也常用于对「对象的形状（Shape）」进行描述。
*/
//属性不能多也不能少，可见赋值的时候，变量的形状必须和接口的形状保持一致。
let tom = {
    name: "Tom",
    age: 22,
};
let sam = {
    name: "Sam",
};
// sam.name = "Tom";  //error
// TypeScript 还提供ReadonlyArray，确保数组创建后再也不能被修改
let readArr = [1, 2, 3];
let jack = {
    name: "Jack",
    sex: "boy",
};
