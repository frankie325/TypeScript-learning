/*
类里面的修饰符
    public：公有，              在类里面、子类、累外面都可以访问
    protected： 保护类型，      在类里面、子类里面可以访问，在类外部不可以访问
    private：私有，             在类里面可以访问，子类、类外部不可以访问

    属性如果不加修饰符，默认是public
*/

class People {
    public name: string;
    protected sex: string;
    private age: number;
    constructor(name: string, sex: string, age: number) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    getAge(): number {
        return this.age; //私有属性，类里面可以访问
    }
}

let p = new People("kfg", "男", 22);
console.log(p.name);
// console.log(p.sex);     //error   受保护属性不能在类外部访问
// console.log(p.age);     //error   私有属性不能在类外部访问

class Man extends People {
    constructor(name: string, sex: string, age: number) {
        super(name, sex, age); //super作为函数，代表调用父类构造函数，必须写，不然报错
        // 因此super()在这里相当于People.prototype.constructor.call(this)。
    }
    getName() {
        return this.name;
    }
    getSex() {
        return this.sex;
    }
    getAge(): number {
        // return this.age;  //error   私有属性，不能在子类里面访问
        // 可以通过super调用父类的方法，在父类中可以对它的私有属性进行访问
        // 注意：在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例
        return super.getAge();
        // 从编译结果可以看出super就是People.prototype
    }

    // 静态属性和静态方法
    static id = "11";
    static sit() {}
}

let m = new Man("kfg", "男", 22);
// m.name;
// m.sex; //error   受保护属性不能在类外部访问
// m.age; //error   私有属性不能在类外部访问
m.getAge();
