/*
在面向对象语言中，接口（Interfaces）是一个很重要的概念，
它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

TypeScript 中的接口是一个非常灵活的概念
除了可用于[对类的一部分行为进行抽象]以外，也常用于对「对象的形状（Shape）」进行描述。
*/

// 1.定义一个接口Person，首字母一般大写
interface Person {
    name: string;
    age: number;
}

//属性不能多也不能少，可见赋值的时候，变量的形状必须和接口的形状保持一致。
let tom: Person = {
    name: "Tom",
    age: 22,
};

// 2.只读属性|可选属性

interface Person1 {
    readonly name: string; //只读属性，不能修改
    age?: number; //可选属性，可以定义也可以不定义
}

let sam: Person1 = {
    name: "Sam",
};
// sam.name = "Tom";  //error

// TypeScript 还提供ReadonlyArray，确保数组创建后再也不能被修改
let readArr: ReadonlyArray<number> = [1, 2, 3];
// readArr[0] = 4; //error

// 3.任意属性
interface Person3 {
    name: string;
    age?: number;
    // [propName: number]: any; //使用 索引签名 的形式
    // [propName: string]: string; //error  一旦定义了任意属性，那么确定属性和可选属性的值类型都必须是它的类型的子集
    // [propName: string]: string; //error  一旦定义了任意属性，那么确定属性和可选属性的值类型都必须是它的类型的子集
    // 索引签名的key只支持字符串、数字、symbol类型
}
let jack = {
    name: "Jack",
    sex: "boy",
};

//接口与类型别名的区别

// 都可以用来描述对象的形状或者函数的类型，但语法不同
interface Person4 {
    name: number;
}

type Person5 = {
    name: number;
};

interface Person6 {
    (name: string): void;
}
type Person7 = (name: string) => void;

// 类型别名还可以用于其他类型。如基本类型，联合类型等，但接口不是
type uni = string | number | null;
type tup = [number, string];

// 接口可以定义多次，会被自动合并为单个接口
interface Point1 {
    x: number;
}

interface Point1 {
    y: number;
}

let point1 = { x: 1, y: 1 };

// function prop(obj: object, key: string) {
//     return obj[key];
//   }


