// 三方库为UMD时，我们可以使用export as namespace语句：
// 将myLib作为全局变量导出，当直接使用script标签引入UMD库时，我们在ts文件中可以直接使用Mylib进行访问，就不会有错误提示了
// allowUmdGlobalAccess设置为true：允许从模块访问UMD Globals
export as namespace myLib;


// 如果库文件导出的是一个对象，对象里有其他属性
// 1. 可以使用export导出，因为export导出，会在一个对象里
// export let name:string;
// export let age:number;
// export function add(a: number, b: number): number;


// 2. 声明为一个命名空间，描述带属性的对象，能够将声明信息提示暴露给用户
// declare namespace myUmd{
//     export let name:string;
//     export let age:number;
//     export function add(a: number, b: number): number;
// }

// export = myUmd
// // export default myUmd

/// <reference path="./a.d.ts" />
// 3. 使用接口，导出一个变量
// interface my {
//     name:string;
//     age:number;
//     add(a: number, b: number): number;
// }

// declare var myUmd: my;
// export = myUmd


