// 将拆分到不同文件夹的命名空间，进行合并

/// <reference path="./3.food.ts" />
namespace Food {
    export interface Vegetables {
        title: string;
        heat: number;
    }
}

let f: Food.Fruits = {
    taste: "甜",
    hardness: 20,
};
