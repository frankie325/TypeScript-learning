/*
泛型是允许同一个函数接受不同类型参数的一种模板。
相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
*/

function identity<T>(value: T): T {
    return value;
}

// 这个 T 是一个抽象类型，只有在调用的时候才确定它的值
identity<number>(1.1111).toFixed(2);
identity(2.1111).toFixed(2); //也可以不显示指定，编译器足够聪明，能够知道我们的参数类型

// 泛型工具类型

// 1.typeof
// typeof 操作符可以用来获取一个变量声明或对象的类型

interface Per {
    name: string;
    age: number;
}

const per: Per = { name: "name", age: 22 };
type copyPer = typeof per; // 就是Per类型
const copyper: copyPer = { name: "copyName", age: 22 };

function toArray(x: number): Array<number> {
    return [x];
}
// 也可以得到函数的类型
type Func = typeof toArray; // -> (x: number) => number[]

// 2.keyof
// 该操作符可以用于获取某种类型的所有键，其返回类型是联合类型
interface Per1 {
    name: string;
    age: number;
}
type K1 = keyof Per1; // "name" | "age"
let p1: K1 = "name";
// let p1: K1 = "haha"; //error

type K2 = keyof []; // "length" | "toString" | "pop" | "push" | "concat" | "join"  //数组也是个对象，数组的方法
let p2: K2 = "length";
// let p2: K2 = "splice";

// keyof索引签名时，会得到string | number
type K3 = keyof { [x: string]: Per1 }; // string | number
let p3: K3 = 1;

// 3.in
// in用来遍历枚举类型
type Keys = "a" | "b" | "c";
type Obj = {
    [p in Keys]: any;
};
let objIn: Obj = {
    a: 1,
    b: 2,
    c: 3,
    // d: 2, //error
};

// 4.infer
