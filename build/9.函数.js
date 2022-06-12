"use strict";
// 1.参数类型
function create1(name, age) { }
// 2.返回类型
function getSum(a, b) {
    // 像这种情况也可以不需要添加返回类型
    // 因为会有编译器自动推断
    return a + b;
    // return "1"; //error 注意：如果函数返回的是字面量，那返回类型则为字面量类型
}
// 3.可选参数
// 注意: 可选参数后面不允许再出现必需参数
function buildName(firstName, lastName) { }
buildName("Tom");
buildName("Tom", "Cat");
// 或者
// type myFun = {
//     (a: number): number;
// };
// 再根据声明去实现这个函数，此时函数的参数和返回值可以不需要写类型声明了
var fun1 = function (name) {
    // name.toFixed(1); //error
    return "my" + name;
};
// 5.函数重载
// 函数重载就是同一个函数，根据传递的参数不同，会有不同的表现形式
//比如下面的 getMyData方法
var obj = {
    num: 1,
    str: "1",
};
// let obj; //error
// 注意：中间不能有其余代码
function getMyData(params) {
    if (typeof params === "number") {
        return obj.num;
    }
    else {
        return obj.str;
    }
}
