/*
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters} m.`)
    }
}
class Dog extends Animal {
    bark() {
        console.log('woof! woof!')
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
*/

// 来看一个更加复杂的例子
/*class Animal{
    name: string;
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters} m.`)
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('slithering......');
        super.move(distanceInMeters);
    }
}

class Horse extends Animal{
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping......');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the python');
let tom:Horse = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);*/

// 重写上面的Animal类
/*
class Animal {
    public name: string;
    public constructor(thename: string) {
        this.name = thename;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters} m.`)
    }
}*/

// 理解private
/*
class Animal {
    private _name:string;
    constructor(name: string) {
        this._name = name;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
let animal:Animal = new Animal('yan');
console.log(animal.name);*/


// 参数兼容性探究
/*
class Animal {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Rhino extends Animal {
    constructor() {
        super('Rhino')
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.*/


// 理解protected
/*
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Employee extends Person {
    private department: string;
    constructor(name:string, department: string) {
        super(name);
        this.department = department;
    }
    public getElevatorPitch(): string {
        return `Hello , my name is ${this.name} and i work in ${this.department}.`
    }
}
let howard = new Employee('Howard','Sales');
console.log(howard.getElevatorPitch());*/


// 参数属性
/*
class Animal{
    constructor(private name: string) {
    }

    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}`)
    }
}

let animal:Animal = new Animal('cat');
animal.move(5);
*/


// 存取器
class Employee {
    private _fullName: string = 'yale';

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }
}
let employee: Employee = new Employee();
employee.fullName = '123';
console.log(employee.fullName);









































