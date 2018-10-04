/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-10-04 12:29
 */

class Person {
    private user: string;
    private age: string;

    static getInfo():void {
        console.log('123')
    }

    public getInfo():void {
        console.log(this.age, this.user);
    }


    constructor(user: string, age: string) {
        this.user = user;
        this.age = age;
    }


    get _user(): string {
        return this.user;
    }

    set _user(value: string) {
        this.user = value;
    }

    get _age(): string {
        return this.age;
    }

    set _age(value: string) {
        this.age = value;
    }
}

let person:Person = new Person('yanle', 'le');

Person.getInfo();


export default Person;