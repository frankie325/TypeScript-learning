// 1.字符串字面量类型
// 可以使用一个字符串字面量作为变量的类型
let hello: "hello" = "hello";
// hello = "hi"; //error

// 字符串字面量类型是string类型的子类，字符串字面量类型可以赋值给string类型，但是反过来就不行了。数字，布尔同理
let _str: string;
_str = hello;
// hello = _str;

// 实际上，定义单个的字面量类型并没有太大的用处，它真正的应用场景是可以把多个字面量类型组合成一个联合类型
type Dir = "up" | "down";
function move(dir: Dir) {}

move("up");
// move("right"); //error

// 2.数字字面量类型
let helloNum: 1 | 2;
helloNum = 1;
helloNum = 2;
// helloNum = 3; //error

// 3.布尔字面量类型，
let helloBool: true | false; //与直接使用:boolean没有区别
helloBool = true;
helloBool = false;

// 4. 对象字面量

const point: { x: number; y: number } = { x: 0, y: 0 };

export default void 0