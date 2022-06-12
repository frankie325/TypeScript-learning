// 对数组的约束

interface myArray {
    [index: number]: string;
}

let myarr: myArray = ["1", "2", "3"];
// let myarr: myArray = [1, 2, 3]; //error

// 对方法的约束

interface myFun1 {
    (str: string): string;
}

let myfun1: myFun1 = (str: string) => {
    return str;
};
myfun1("1");
// myfun1(1); //error

// 对对象的约束

interface myObject {
    name: string;
    age: number;
}

let myobj: myObject = {
    name: "kfg",
    age: 12,
    // sex: 1,
};

// 接口还可以对类进行约束
interface Animal1 {
    name: string;
    eat(str: string): number;
}

// 使用implements关键字
class Bird implements Animal1 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return 1;
        // return "str"; //error 需要保持和接口中的类型一样
    }
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
