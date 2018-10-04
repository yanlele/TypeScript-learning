/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-10-04 9:54
 */

class User {
    private username: string;
    private age: number;


    constructor(username?: string, age?: number) {
        this.username = username;
        this.age = age;
    }


    get _username(): string {
        return this.username;
    }

    set _username(value: string) {
        this.username = value;
    }

    get _age(): number {
        return this.age;
    }

    set _age(value: number) {
        this.age = value;
    }
}

let person: User = new User('yanle', 25);
let person1: User = new User();

person1._username = 'lelel';

function test():User {
    return new User();
}

console.log(test());
console.log(person);
console.log(person1);