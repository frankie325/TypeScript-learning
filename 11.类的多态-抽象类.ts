// 多态就是一个基类（base class）可以有不同的派生类（derived class），不同的派生类有各自不同的行为

// 继承，接口，抽象类都是多态的多种表现形式

// 比如定义一个动物类，动物都有吃这个行为，但是不同种类喜欢吃的东西都不一样
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {}
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        console.log("喜欢吃肉");
    }
}

class Sheep extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        console.log("喜欢吃草");
    }
}

// 抽象类
// 抽象类并不会生成真正的类，它用来定义标准，所有继承它的类，都必须按照它的标准去实现
abstract class Human {
    // abstract skinColor: string;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    // 抽象方法只能放在抽象类中
    // 抽象方法不包含具体实现，但在派生类中必须实现
    abstract work(): string;
}

class YellowPeople extends Human {
    // skinColor: string;
    constructor(name: string) {
        super(name);
    }
    work(): string {
        return "I am programmer";
    }
}
