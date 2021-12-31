"use strict";
/*
相当于变成
type newUserInfo = {
    id?: number;
    name?: string;
}
*/
var newUser1 = { id: 1 };
var desc = {
    id: 1,
    desc: "xxx",
};
var todo = {
    title: "math",
    completed: true,
};
var page = {
    home: { title: "home" },
    about: { title: "home" },
    contact: { title: "home" },
};
var foo = "1"; //ReturnType得到的类型为string
/*
条件类型作用于泛型内,入参为联合类型（a|b）时。即T的类型，它们就会变成分布式的
相当于：
type E1 = Exclude<"a", "b" | "c"> | Exclude<"b", "b" | "c">
type E1 = "a" | never
type E1 = "a"
*/
var e1 = "a";
/*
相当于：
type E1 = Extract<"a", "b" | "c"> | Extract<"b", "b" | "c">
type E1 = never | "b"
type E1 = "b"
*/
// let e2: E2 = "a"; //error
var e2 = "b";
var todo1 = {
    title: "todo1",
    completed: true,
};
// 10.NonNullable
/*
NonNullable<T> 的作用是用来过滤类型中的 null 及 undefined 类型。
定义：
type NonNullable<T> = T extends null | undefined ? never : T;
*/
var none1 = "11";
