/*
为什么需要声明文件？
假设我们用 ts 开发了一个 npm 库，经过编译打包之后发布到了 npm 上，其他用户下载了这个库都是js文件
我们使用import导入这个库的时候是无法获得代码提示的，ts文件会报错

里面不允许有任何函数的实

声明文件放在项目里的任意路径/文件名都可以被ts编译器识别, 但实际开发中发现, 为了规避一些奇怪的问题, 推荐放在根目录下


如果声明文件中没有 import && export，那么这个声明文件就是一个全局类声明文件
全局类声明文件中的 declare 会在全局生效

如果一个声明文件的顶层作用域中有 import || export，那么这个声明文件就是一个模块类声明文件
需要按模块的方式导出来才能生效


当想要在全局声明文件引入其他声明文件时，可以使用三斜线指令，不要使用import语句，否则会变成局部声明文件
*/

// 声明全局变量
declare let global: string;

// 声明全局方法
declare function greet(greeting: string): void;

// 声明全局命名空间
declare namespace object {
    let name: string;
    let age: number;
}

// 修改已存在的全局声明
// declare global {
//     interface String {
//         hump(input: string): string;
//     }
// }

// declare module "lodash" {
//     export function join(arr: any[]): void;
// }
