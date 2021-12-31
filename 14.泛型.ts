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
function identity<T>(value: T): T {
    return value;
}

// 这个 T 是一个抽象类型，只有在调用的时候才确定它的值
identity<number>(1.1111).toFixed(2);
identity(2.1111).toFixed(2); //也可以不显示指定，编译器足够聪明，能够知道我们的参数类型

// 2.泛型接口

// 方式一
interface configFun1 {
    <T>(value: T): T;
}

let getData1: configFun1 = function <T>(value: T): T {
    return value;
};
// 调用的时候指定泛型类型
getData1<number>(1);

// 方式二
interface configFun2<T> {
    (value: T): T;
}

function getData2<T>(value: T): T {
    return value;
}
// 赋值的时候指定泛型类型
let getData: configFun2<string> = getData2;
getData("11");
// getData(11); //error

// 3.泛型参数默认类型
interface Name<T = string> {
    name: T;
}

let myName1: Name = {
    name: "kfg",
    // name: 111,  //没有指定泛型类型时，默认是string
};

let myName2: Name<number> = {
    name: 666,
};

// 4.泛型条件类型
// 泛型条件类型一般与泛型工具extends关键字一起使用

// 下面代码的意思是：传入的类型如果是any的子类型，则返回该类型，否则返回any类型
// 当然这样写没有意义，只是介绍用法
type GetType<T> = T extends any ? T : any;

let getT1: GetType<string> = "1";
// let getT2: GetType<string> = 1; //error


