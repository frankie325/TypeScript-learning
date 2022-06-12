"use strict";
// 对数组的约束
var myarr = ["1", "2", "3"];
var myfun1 = function (str) {
    return str;
};
myfun1("1");
var myobj = {
    name: "kfg",
    age: 12,
    // sex: 1,
};
// 使用implements关键字
var Bird = /** @class */ (function () {
    function Bird(name, age) {
        this.name = name;
        this.age = age;
    }
    Bird.prototype.eat = function () {
        return 1;
        // return "str"; //error 需要保持和接口中的类型一样
    };
    Bird.prototype.run = function () { }; // 可以声明接口中的不存在的属性和方法
    return Bird;
}());
// 必须同时实现两个接口中的方法
var Bird3 = /** @class */ (function () {
    function Bird3() {
    }
    Bird3.prototype.eat = function () { };
    Bird3.prototype.run = function () { };
    return Bird3;
}());
