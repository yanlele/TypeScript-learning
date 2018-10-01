/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018/9/30
 */


class Animal {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    public getName() {
        return this._name;
    }
}
let person: Animal = new Animal('yanle');
console.log(person.getName());

let fun:Function = function(animal: Animal) {
    return animal.getName();
};

console.log(fun(person));

export default Animal;