// 比如有个最小堆算法，需要同时支持返回数字和字符串两种类型。通过泛型类实现

class minClass<T> {
    list: T[] = [];
    add(v: T): void {
        this.list.push(v);
    }

    min(): T {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] < minNum) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

let m1 = new minClass<number>(); //实例化类，并且指定了T代表的类型是number
m1.add(2);
m1.add(1);
m1.add(3);
console.log(m1.min());

let m2 = new minClass<string>();
m2.add("a");
m2.add("b");
m2.add("c");
console.log(m2.min());

/*
    把类作为参数约束数据传入的类型：

    定义一个User类，作用是映射数据库字段，然后定义一个MysqlDb类，用来操作数据库
    然后把User类作为参数传到MysqlDb中
*/

// class User {
//     username: string | undefined;
//     password: string | undefined;
// }

// class MysqlDb {
//     add(user: User): boolean {
//         console.log(user);
//         return true;
//     }
// }

// let user1 = new User();
// user1.username = "张三";
// user1.password = "123456";

// let db1 = new MysqlDb();
// db1.add(user1);

// 操作数据库的泛型类
// 使用泛型，操作不同结构的数据对象
class MysqlDb<T> {
    add(user: T): boolean {
        console.log(user);
        return true;
    }
}

class User {
    username: string | undefined;
    password: string | undefined;
}

let user1 = new User();
user1.username = "张三";
user1.password = "123456";

let db1 = new MysqlDb<User>();
db1.add(user1);

class Article {
    title: string;
    desc: string;
    status: number;
    constructor(title: string, desc: string, status: number) {
        this.title = title;
        this.desc = desc;
        this.status = status;
    }
}

let art = new Article("分类", "111", 1);
let db2 = new MysqlDb<Article>();
db2.add(art);
