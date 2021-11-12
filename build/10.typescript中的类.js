"use strict";
/*
类里面的修饰符
    public：公有，              在类里面、子类、累外面都可以访问
    protected： 保护类型，      在类里面、子类里面可以访问，在类外部不可以访问
    private：私有，             在类里面可以访问，子类、类外部不可以访问

    属性如果不加修饰符，默认是public
*/
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
var People = /** @class */ (function () {
    function People(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    People.prototype.getAge = function () {
        return this.age; //私有属性，类里面可以访问
    };
    return People;
}());
var p = new People("kfg", "男", 22);
console.log(p.name);
// console.log(p.sex);     //error   受保护属性不能在类外部访问
// console.log(p.age);     //error   私有属性不能在类外部访问
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, sex, age) {
        return _super.call(this, name, sex, age) || this;
        // 因此super()在这里相当于People.prototype.constructor.call(this)。
    }
    Man.prototype.getName = function () {
        return this.name;
    };
    Man.prototype.getSex = function () {
        return this.sex;
    };
    Man.prototype.getAge = function () {
        // return this.age;  //error   私有属性，不能在子类里面访问
        // 可以通过super调用父类的方法，在父类中可以对它的私有属性进行访问
        // 注意：在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例
        return _super.prototype.getAge.call(this);
        // 从编译结果可以看出super就是People.prototype
    };
    Man.sit = function () { };
    // 静态属性和静态方法
    Man.id = "11";
    return Man;
}(People));
var m = new Man("kfg", "男", 22);
// m.name;
// m.sex; //error   受保护属性不能在类外部访问
// m.age; //error   私有属性不能在类外部访问
m.getAge();
