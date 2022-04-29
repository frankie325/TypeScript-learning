// 当变量重复时，我们可以使用命名空间

namespace One {
    // function sum(a: number, b: number): number {
    //     return a + b;
    // }

    // 如果想要在命名空间外部使用，则需要进行导出
    export function sum(a: number, b: number): number {
        return a + b;
    }
    console.log(sum(1, 1));

    // 也可以嵌套使用命名空间
    export namespace Three {
        export function sum(a: number, b: number): number {
            return a + b;
        }
    }
    console.log(Three.sum(3, 3));
}

console.log(One.Three.sum(4, 4));

namespace Two {
    function sum(a: number, b: number): number {
        return a + b;
    }

    console.log(sum(2, 2));
}

console.log(One.sum(4, 4));

import utils from "./2.命名空间导出";

console.log(utils.add(100, 100));

// 命名空间不仅可以用在逻辑代码中, 也可以用在类型, 用来给类型分组:
namespace Five {
    export interface Axis {
        x: number;
        y: number;
    }
}

let axis: Five.Axis;
axis = {
    x: 1,
    y: 2,
};
