/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018/9/30
 */


class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }
}
let person: Animal = new Animal('yanle');
console.log(person.getName());

let student: Animal = new Animal('dupeng');

let fun:Function = function(animal: Animal) {
    return animal.getName();
};

console.log(fun(person));

export default Animal;