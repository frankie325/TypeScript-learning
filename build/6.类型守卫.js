"use strict";
// 类型守卫/类型保护
// 1.typeof
function doSome(x) {
    if (typeof x === "string") {
        // 在这个块中，TypeScript知道x的类型一定是string
        console.log(x.slice());
        // console.log(x.toFixed(2)); //error   toFixed方法只存在与数字上
    }
}
// 2 instanceof
var Foo = /** @class */ (function () {
    function Foo() {
        this.foo = "i am foo";
    }
    return Foo;
}());
var Bar = /** @class */ (function () {
    function Bar() {
        this.bar = "i am bar";
    }
    return Bar;
}());
function doStuff(arg) {
    if (arg instanceof Foo) {
        arg.foo;
        // arg.bar; //error
    }
    else {
        // TypeScript可以知道else块中，剩下的类型
        // arg.foo; //error
        arg.bar;
    }
}
function doStu(arg) {
    if ("a" in arg) {
        arg.toDoA();
        // arg.toDoB(); //error
    }
    else {
        // arg.toDoA(); //error
        arg.toDoB();
    }
}
function doS(arg) {
    // 可以通过使用字面量类型判断
    if (arg.kind === "foo") {
        //那么块里就会判断为Foo1类型
        arg.foo;
        // arg.bar; //error
    }
    else {
        // arg.foo; //error
        arg.bar;
    }
}
// 5.自定义类型守卫
// 通过{形参} is {类型}的语法结构，给函数赋予类型守卫的能力
function isStr(s) {
    return typeof s === "string";
}
function toUpperCase(arg) {
    if (isStr(arg)) {
        arg.toUpperCase();
    }
    else {
        arg.toString().toUpperCase();
    }
}
