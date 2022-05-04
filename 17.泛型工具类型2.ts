// 1.Partial
/*
Partial将类型的属性变成可选

定义：
type Partial<T> = {
  [P in keyof T]?: T[P];
};
首先通过 keyof T 拿到 T 的所有属性名，然后使用 in 进行遍历，将值赋给 P
最后通过 T[P] 取得相应的属性值的类型
*/
interface UserInfo {
    id: number;
    name: string;
}

type newUserInfo = Partial<UserInfo>;
/*
相当于变成
type newUserInfo = {
    id?: number;
    name?: string;
}
*/
let newUser1: newUserInfo = { id: 1 };

// 2.Required
/*
Required将类型的属性变成必选

定义：
type Required<T> = { 
    [P in keyof T]-?: T[P] 
};
-?代表移除?这个标识符
*/

interface Desc {
    id: number;
    desc?: string;
}

type NewDesc = Required<Desc>;

let desc: NewDesc = {
    id: 1,
    desc: "xxx",
};

// 3.Readonly
/*
Readonly的作用是将某个类型所有属性变为只读属性
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
*/

// 4.Pick
/*
Pick 从某个类型中挑出一些属性出来
定义:
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
*/

interface Todo {
    title: string;
    desc: string;
    completed: boolean;
}

type pTodo = Pick<Todo, "title" | "completed">;

let todo: pTodo = {
    title: "math",
    completed: true,
};

// 5.Record
/*
Record<K, T> 的作用是将 K 中所有类型作为键，T作为类型。
定义：
type Record<K extends keyof any> = {
    [P in K]: T;
}
keyof any为 string | number | symbol，刚好就是对象的索引的类型
意思就是传入的K被约束为只能是这几种类型
也就是K只能是这三种类型或者这三种类型的联合类型
*/
interface PageInfo {
    title: string;
}
// type Page = string;  //如果K是string类型，[P in string]说明所有字符名称都可以作为键
type Page = "home" | "about" | "contact";

let page: Record<Page, PageInfo> = {
    home: { title: "home" },
    about: { title: "home" },
    contact: { title: "home" },
};

// 6.ReturnType
/*
ReturnType用来得到一个函数的返回值类型
定义：
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
T extends (...args: any[]) => any 表示传入的T要是函数类型
infer R用来提取函数返回的类型
*/

type Funct = (v: number) => string;
let foo: ReturnType<Funct> = "1"; //ReturnType得到的类型为string

// 7.Exclude
/*
Exclude<T, U> 的作用是将 T 和 U 相同的类型从 T 中移除掉。
定义：
type Exclude<T, U> = T extends U ? never : T
*/

type E1 = Exclude<"a" | "b", "b" | "c">;
/*
条件类型作用于泛型内,入参为联合类型（a|b）时。即T的类型，它们就会变成分布式的
相当于：
type E1 = Exclude<"a", "b" | "c"> | Exclude<"b", "b" | "c">
type E1 = "a" | never
type E1 = "a"
*/

let e1: E1 = "a";
// let e1: E1 = "b"; //error

// 8.Extract
/*
Extract<T, U> 的作用是从 T 中提取出和 U 相同的类型。
定义：
type Extract<T, U> = T extends U ? T : never;
*/
type E2 = Extract<"a" | "b", "b" | "c">;
/*
相当于：
type E1 = Extract<"a", "b" | "c"> | Extract<"b", "b" | "c">
type E1 = never | "b"
type E1 = "b"
*/
// let e2: E2 = "a"; //error
let e2: E2 = "b";

// 9.Omit
/*
Omit<T, K> 的作用是从 T 类型中删除包含了 K类型的属性。与Pick的作用相反
定义：
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
*/
interface ToDo1 {
    title: string;
    desc: string;
    completed: boolean;
}

type NewToDo1 = Omit<ToDo1, "desc">;

let todo1: NewToDo1 = {
    title: "todo1",
    completed: true,
};

// 10.NonNullable
/*
NonNullable<T> 的作用是用来过滤类型中的 null 及 undefined 类型。
定义：
type NonNullable<T> = T extends null | undefined ? never : T;
*/
let none1: NonNullable<string | undefined | null> = "11";
// let none1: NonNullable<string | undefined | null> = null; // error

// 11.Parameters
/*
Parameters<T> 的作用是用于获得函数的参数类型组成的元组类型
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
*/

type FunA = Parameters<() => any>; // 为[]类型
type FunB = Parameters<(v: string) => any>; // 为[string]元祖类型
type FunC = Parameters<(...args: number[]) => any>; // 为number[]数组类型
