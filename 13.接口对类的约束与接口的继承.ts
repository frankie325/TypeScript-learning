// 接口还可以对类进行约束
interface Animal1 {
    name: string;
    eat(str: string): void;
}

// 使用implements关键字
class Bird implements Animal1 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    eat() {}
    run() {} // 可以声明接口中的不存在的属性和方法
}

// 接口也可以进行继承
interface Animal2 {
    eat(): void;
}

interface Animal3 extends Animal2 {
    run(): void;
}

// 必须同时实现两个接口中的方法
class Bird3 implements Animal3 {
    constructor() {}
    eat() {}
    run() {}
}
