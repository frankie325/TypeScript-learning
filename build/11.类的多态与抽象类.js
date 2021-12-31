"use strict";
// 多态就是一个基类（base class）可以有不同的派生类（derived class），不同的派生类有各自不同的行为
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承，接口，抽象类都是多态的多种表现形式
// 比如定义一个动物类，动物都有吃这个行为，但是不同种类喜欢吃的东西都不一样
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () { };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log("喜欢吃肉");
    };
    return Dog;
}(Animal));
var Sheep = /** @class */ (function (_super) {
    __extends(Sheep, _super);
    function Sheep(name) {
        return _super.call(this, name) || this;
    }
    Sheep.prototype.eat = function () {
        console.log("喜欢吃草");
    };
    return Sheep;
}(Animal));
// 抽象类
// 抽象类并不会生成真正的类，它用来定义标准，所有继承它的类，都必须按照它的标准去实现
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var YellowPeople = /** @class */ (function (_super) {
    __extends(YellowPeople, _super);
    // skinColor: string;
    function YellowPeople(name) {
        return _super.call(this, name) || this;
    }
    YellowPeople.prototype.work = function () {
        return "I am programmer";
    };
    return YellowPeople;
}(Human));
