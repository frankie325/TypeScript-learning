/*
    __proto__是每个对象的都有的属性。访问一个对象的属性，如果本身没有该属性，就会往__proto__属性上去找

    prototype是构造函数的属性，通过构造函数new出来的实例，该实例的__proto__就指向构造函数的prototype
    所以new出来的实例能够共享构造函数prototype中的属性和方法

    那如何实现继承呢？
    不要忘了prototype也是个对象，也有__proto__属性，那就设置__proto__指向父类的prototype，这样就实现了初步的继承
*/

/*
setPrototypeOf的实现方式

Object.setPrototypeOf = function (target, proto) {
    target.__proto__ = proto;
    return target;
};
作用是设置目标对象的__proto__属性


Object.create = function (target) {
    var func = function () {};
    func.prototype = target;
    return new func(); 
};
Object.create的作用创建空对象，该对象的__proto__指向目标对象
*/

function Parent(name, age) {
    this.name = name;
    this.age = age;
}

// 静态方法
Parent.setFun = function () {
    console.log("i am setFun");
};

function Child(name, age) {
    Parent.call(this, name, age);
}

// 下面几种写法效果都是一样，就是设置Child.prototype.__proto__指向父类的prototype，稍有区别
//1. Child.prototype = new Parent();
// 缺点： 会往Child.prototype上添加额外的属性
//       丢失了Child.prototype.constructor属性

//2. Child.prototype = Object.create(Parent.prototype);
// 缺点：丢失了Child.prototype.constructor属性

//3. Child.prototype.__proto__ = Parent.prototype;
//4. Object.setPrototypeOf(Child.prototype, Parent.prototype);
// 所以最好通过3、4的方式实现
Object.setPrototypeOf(Child.prototype, Parent.prototype);
// console.dir(Parent)
// console.dir(Child)

// 上面只是实现了父类prototype上属性和方法的继承，那么静态属性和方法该如何继承？
// 其实很简单，构造函数也是对象，Child.__proto__指向Parent即可
Object.setPrototypeOf(Child, Parent);
console.dir(Parent);
console.dir(Child);
Child.setFun();

// 以上就是ES5实现继承的方式，关键就两行代码，ES6的class语法糖，经过编译后也是以这种方式实现继承
// Object.setPrototypeOf(Child.prototype, Parent.prototype);
// Object.setPrototypeOf(Child, Parent);

// new的实现
function _new(Ctor, ...args) {
    // 创建空对象
    let obj = {};
    // 设置该对象的__proto__属性指向Ctor.prototype
    obj.__proto__ = Ctor.prototype;
    // 改变构造函数的this指向
    let res = Ctor.apply(obj, args);
    // 如果构造函数执行返回了对象（引用类型），则返回这个对象，否则返回创建的obj
    return typeof res === "object" ? res || obj : obj;
}

/*
原型链：

let f = function () {}
f.prototype.a = "a" 

let obj = new f()

obj.__proto__ === f.prototype

而f.prototype又是由Object构造函数创建
f.prototype.__proto__ === Object.prototype

而Object.prototype.__proto__为null，到达原型链的末尾
Object.prototype.__proto__ === null
*/

let f = function () {};
f.prototype.a = "a";

let obj = new f();

obj.__proto__ === f.prototype;

console.log(obj);
console.log(f.prototype.__proto__);
