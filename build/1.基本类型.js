"use strict";
// 1.Boolean类型，只能赋值为true和false
var isBl = false;
// 2.Number类型，只能赋值为数字
var isNumber = 1;
// 3.String类型，只能赋值为字符
var isString = "i am string";
// 4.Symbol类型，只能赋值为Symbol，tsconfig文件中需要涉置为
var isSb = Symbol("i am symbol");
// 5.BigInt类型，ES2020才有，tsconfig文件中target需要进行设置
// let isBI: bigint = 100n;
// 6.null和undefined类型
// 严格模式下是不允许将null和undefined赋值给其他类型变量，
// 可以设置tsconfig文件中strictNullChecks为false，就可以赋值给其他类型变量了，所以非严格模式下null和undefined可以赋值给任意类型
var n = null;
var u = undefined;
// 7.Array类型
var arr1 = ["1", "2"];
// 或者
var arr2 = [1, 2]; // Array<number>泛型语法
// 8.Any类型
// any 类型为系统顶级类型，任何类型都可以进行赋值
var unsure = 666;
unsure = "str";
// 变量如果在声明的时候，未指定其类型，那么它会被识别为any类型：
var something;
// any类型的变量也可以赋值给其他类型变量
var str = unsure;
var num = unsure;
// 9.UnKnown类型
// unknown类型也为系统的另一种顶级类型，任何类型都可以进行赋值
var unk = "i am unknown";
var unArr = [1, 2, 3];
// 不能调用属性和方法
// unArr.length;  //error
// unArr.slice(1)  //error
// 但是unknown类型只能赋值给any类型和unknown类型
var val1 = unk;
var val2 = unk;
// let val3: string = unk;  //error
// 10.Tuple 类型
// 当数组中由不同类型的值组成时，可以使用元组类型
var tup = ["str", true];
// 11.Void 类型
// void表示没有任何类型，和其他类型是平等关系，不能直接赋值
var vo;
// a = "str"  //error
//一般在当函数没有返回值时，定义成void类型
function fun() { }
// 12.Never类型
// never类型表示的是那些永不存在的值的类型，比如：
// (1).函数抛出了异常，那么这个函数永远不存在返回值
function err(msg) {
    throw new Error(msg);
}
// (2).函数中执行死循环代码
function loopfun() {
    while (true) { }
}
// never不接受任何类型的赋值（any类型也不行）
// let nev: never = 111; //error
var nev1;
var nev2;
// nev1 = nev2; // error  tsconfig中需要strictNullChecks设置为false，本身类型才可以赋值
// strictNullChecks设置为false时，never类型可以是所有类型的子类型，可以赋值给任何类型的值
// let num1: number = nev1;
// let str1: string = nev1;
// 13.小object类型
// 表示为不接受原始类型，即引用类型都可以
// let obj1: object = 1; //error
var obj2 = {};
var obj3 = [];
var obj4 = new String("111");
// let obj5: object = null;  //error
// let obj6: object = undefined; //error
// obj2.prop = "11"; //error
// 14.大Object类型
// 表示所有Object类实例的类型，所以所有原始类型、非原始类型都可以赋给 Object
var bigObj1 = 1;
var bigObj2 = "1";
var bigObj3 = [1, 2];
var bigObj4 = function () { };
// let bigObj5: Object = null; //error
// let bigObj6: Object = undefined; //error
var bigObj7 = {};
// bigObj7.prop = "111"; //error
// 15.{}类型
// {}空对象类型和大 Object 一样，也是表示原始类型和非原始类型的集合
// {}空对象类型描述了一个没有成员的对象，也就是不能为该对象添加属性
var eptObj1 = {
    name: "kfg",
};
// eptObj1.name;
// eptObj1.prop = "11";  //error
// let eptObj2: object = null; //error
// let eptObj3: object = undefined; //error
var eptObj4 = 1;
// 但是仍然可以访问在 Object 类型上定义的所有属性和方法，这些属性和方法可通过 JavaScript 的原型链隐式地使用
eptObj4.toString;
eptObj4.toString();
/*
 {}、大 Object 是比小 object 更宽泛的类型（least specific），
 {} 和大 Object 可以互相代替，用来表示原始类型（null、undefined 除外）和非原始类型；
 而小 object 则表示非原始类型。
*/
