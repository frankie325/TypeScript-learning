"use strict";
// 联合类型表示取值可以是多种类型中的一种，使用|分隔每个类型
var myfavor;
myfavor = "six";
myfavor = 6;
// 联合类型通常与null 或 undefined 一起使用
var sayHello = function (str) {
    console.log(str);
};
sayHello("hello");
sayHello(undefined);
// 也可以是字面量类型
var myNum = 1;
var sample;
sample = 1;
sample = "2";
// sample = true; //error
