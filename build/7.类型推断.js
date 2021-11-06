"use strict";
//  TypeScript能根据一些简单的规则推断（检查）变量的类型
// 1.定义变量
let anyVal; //推断为any类型
// 如果指定了初始值，且没有指定类型，则推断为初始值字面量类型拓宽后的类型
let str1 = "i am str1"; // 等价于 let str1 : string = "i am str";
str1 = "hello";
// 用const声明的变量，类型没有拓宽
const str2 = "i am str2"; // 等价于 const str2 : "i am str2" = "i am str2"， 类型为字面量类型
// 注意：如果将str2赋值给str3，那str3的类型拓宽为string
let str3 = str2;
// 而如果显示的添加了类型，str5的类型是不会拓宽为string的
const str4 = "i am str4";
let str5 = str4;
// str5 = "111"; //error
// 2.函数
// 返回类型能被 return 语句推断，如下：
function add(a, b) {
    return a + b;
}
let total = add(1, 2); //total推断为number类型
// 推断参数 b 的类型是数字或者 undefined，返回值的类型也是数字
function add2(a, b = 1) {
    return a + b;
}
add2(1);
// add2(1, "2");  //error Argument of type '"2"' is not assignable to parameter of type 'number | undefined'.
// 3.结构化
// 这些简单的规则也适用于结构化的存在（对象字面量）
const objectFoo = {
    a: 123,
};
// string类型不能赋值给number
// objectFoo.a = "123"; //error  Type 'string' is not assignable to type 'number'.
// 数组同理
const arrFoo = [1, 2, 3];
// arrFoo[0] = "1";  //error Type 'string' is not assignable to type 'number'.
// 4.解构
// 同样适用于解构
const objBar = {
    bar: "i am bar",
};
let { bar } = objBar;
function getVec(vector, axis) {
    return vector[axis];
}
// let axis = "x"; //该变量拓宽为string类型，但是getVec的第二个形参接受的是字面量类型
const axis = "x"; //改成用const声明变量则成立
let vector = {
    x: 1,
    y: 2,
    z: 3,
};
getVec(vector, axis);
