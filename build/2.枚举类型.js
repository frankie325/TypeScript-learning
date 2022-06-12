"use strict";
// Enum类型
// 1.数字枚举
// Up使用初始化为 1，默认为0。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// 从编译结果可以看出，数字枚举除了支持从名称到值映射外，还支持值到名称的反向映射
var dirName = Direction.Up;
var dirValue = Direction[1];
// Directions[4]
// 区别就在于经过编译不会产生额外的javascript代码
var directions = [2 /* Up */, 4 /* Down */, 4 /* Left */, 5 /* Right */];
// 3.字符串枚举，不支持双向映射了
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
// 4.联合枚举，数字与字符串混合，从编译结果可以看出，只有数字支持双向映射
var Joint;
(function (Joint) {
    Joint[Joint["A"] = 0] = "A";
    Joint["B"] = "b";
    Joint[Joint["c"] = 3] = "c";
})(Joint || (Joint = {}));
var j = [Joint.A];
