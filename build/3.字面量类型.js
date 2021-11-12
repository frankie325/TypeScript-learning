"use strict";
// 1.字符串字面量类型
// 可以使用一个字符串字面量作为变量的类型
var hello = "hello";
// hello = "hi"; //error
// 字符串字面量类型是string类型的子类，字符串字面量类型可以赋值给string类型，但是反过来就不行了。数字，布尔同理
var _str;
_str = hello;
function move(dir) { }
move("up");
// move("right"); //error
// 2.数字字面量类型
var helloNum;
helloNum = 1;
helloNum = 2;
// helloNum = 3; //error
// 3.布尔字面量类型，
var helloBool; //与直接使用:boolean没有区别
helloBool = true;
helloBool = false;
