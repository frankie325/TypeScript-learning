// Enum类型

// 1.数字枚举
// Up使用初始化为 1，默认为0。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

// 从编译结果可以看出，数字枚举除了支持从名称到值映射外，还支持值到名称的反向映射
let dirName = Direction.Up;
let dirValue = Direction[1];

// 2.常量枚举，使用const关键字声明
const enum Directions {
    Up = 2,
    Down = Up * 2,
    Left = 4,
    Right,
}

// Directions[4]
// 区别就在于经过编译不会产生额外的javascript代码
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 3.字符串枚举，不支持双向映射了
enum Direction2 {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right",
}

// 4.联合枚举，数字与字符串混合，从编译结果可以看出，只有数字支持双向映射
enum Joint {
    A,
    B = "b",
    c = 3,
}

let j = [Joint.A];