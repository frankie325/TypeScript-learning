// 交叉类型时将多个类型合并为一个类型，通过&符连接

// Point类型为X类型和Y类型的联合
type X = { x: number };
type Y = { y: number };
type Point = X & Y;
let point: Point = { x: 1, y: 2 };

// ！注意：如果把原始类型，字面量类型等原子类型，进行联合是没有意义的
// 比如string和number，没有既是字符又是数字的值，因此类型会被转化为never
type useless = string & number;
// let unUse: useless = 1; //error

// 1.同名属性时，基础类型的合并
interface A {
    a: number;
    c: string;
}

interface B {
    b: number;
    c: number;
}

type AB = A & B;
let ab: AB;
// 上面的接口A和接口B中，包含一个相同的属性c
// 此时AB类型中是否的c是不是既可以是string类型也可以是number类型呢？
// ab = {
//     a: 1,
//     b: 1,
//     c: 1, //error
// };
// c的类型合并后变成string & number，所以其实c的类型是never

// 2.同名属性时，非基础类型的合并
interface D {
    d: boolean;
}
interface E {
    e: string;
}
interface F {
    f: number;
}

interface H {
    x: D;
}
interface I {
    x: E;
}
interface J {
    x: F;
}

// 非基础类型就可以合并
type HIJ = H & I & J;
let hij = {
    x: {
        d: true,
        e: "e",
        f: 1,
    },
};

// 3.同名属性时，基础类型和字面量类型的合并

// 如果同名属性的类型兼容，比如一个是 number，另一个是 number 的子类型、数字字面量类型
// 合并后就是两者中的子类型，即数字字面量类型
type Mix = { id: number } & { id: 1 };
let myId: Mix = { id: 1 };
