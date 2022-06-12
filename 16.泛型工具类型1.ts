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

// 4.extends
// 当我们使用泛型的时候不想太过灵活的情况下可以使用extends
interface Lengthwise {
    length: number;
}

// 可以将其理解为对T的约束，T如果能够赋值给Lengthwise，则条件成立
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity<Lengthwise>({ length: 1 });

// 受到了Lengthwise的约束，则相同的属性必须是相同的类型或者子类型
// interface Another extends Lengthwise {
//     length: number; // 可以诶number或者 1 | 2 数字字面量类型
//     age: string; //可以新增属性
// }

// 5.infer
// infer是推断的意思，其实就相当于是一个占位的符号，用infer R去给他占位，推断这里的是什么类型，则 R 就是什么类型
type Params<T> = T extends (...args: infer R) => any ? R : any;

type T0 = Params<() => string>; //因为没有传递参数，所以推导出的类型就是[]
let t0: T0 = [];
// let t0: T0 = [1]; //error  不能有值

type T1 = Params<(s: string) => string>; //得到类型为[string]
// let t1: T1 = ["1"];
// let t1: T1 = ["1", "2"]; // error

type T2 = Params<(...args: number[]) => string>; //得到类型为number[]
let t2: T2 = [1, 2];

// 使用infer得到联合类型
type T3 = { name: string };
type T4 = { age: number };

type GetUnionT<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;
type UnionT = GetUnionT<{ a: (x: T3) => void; b: (x: T4) => void }>; //得到的类型为 T3 & T4 的联合类型

// TypeScript系统内置的类型ReturnType，就是使用infer得到的
type ReturnTypeCopy<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
let rt: ReturnTypeCopy<() => string> = "111";
