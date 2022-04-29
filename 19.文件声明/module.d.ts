// module.d.ts （和 global.d.ts 分开，否则会使 global.d.ts 中的 declare 失去全局性）

import _ from "lodash"; // 注意这个 import 必须写在 declare module 外部

// 给 lodash 加一个静态方法 _.getHelloWorld
declare module "lodash" {
    // 接口可以定义多次，会被自动合并为单个接口
    interface LoDashStatic {
        getHelloWorld(): string;
    }
}

// 修改已存在的全局变量的声明
declare global {
    interface String {
        hump(input: string): string;
    }
}

