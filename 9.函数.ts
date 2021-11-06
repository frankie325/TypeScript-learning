// 1.参数类型
function create1(name: string, age: number) {}

// 2.返回类型
function getSum(a: number, b: number): number {
    // 像这种情况也可以不需要添加返回类型
    // 因为会有编译器自动推断
    return a + b;
    // return "1"; //error 注意：如果返回的是字面量，那返回的为字面量类型
}

// 3.可选参数
// 注意: 可选参数后面不允许再出现必需参数
function buildName(firstName: string, lastName?: string) {}

buildName("Tom");
buildName("Tom", "Cat");

// 4.函数声明
// 先利用type声明一个函数，两种方式
type myFun = (a: string) => string;
// 或者
// type myFun = {
//     (a: number): number;
// };

// 再根据声明去实现这个函数，此时函数的参数和返回值可以不需要写类型声明了
let fun1: myFun = (name) => {
    // name.toFixed(1); //error
    return "my" + name;
};

// 5.函数重载
// 函数重载就是同一个函数，根据传递的参数不同，会有不同的表现形式

//比如下面的 getMyData方法
let obj = {
    num: 1,
    str: "1",
};

type pType = "image" | "audio";
// 根据入参的类型，返回不同类型的值，如果类型声明很多，全都写在一起，会造成函数阅读体验不好，扩展性差
// function getMyData(params: number | pType): number | string {
//      if (typeof params === "number") {
//          return obj.num;
//      } else {
//          return obj.str;
//      }
// }

// 这时可以使用函数重载
function getMyData(a: number): number; //入参是number类型则返回number类型的值
function getMyData(b: pType): string; //入参是pType类型则返回string类型的值
// let obj; //error
// 注意：中间不能有其余代码
function getMyData(params: number | pType) {
    if (typeof params === "number") {
        return obj.num;
    } else {
        return obj.str;
    }
}
