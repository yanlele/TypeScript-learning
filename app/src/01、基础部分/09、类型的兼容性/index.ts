// 兼容性
/*interface Named {
    name: string
}

class Person {
    name: string
}

let p: Named;
p = new Person();*/


// 关于可靠性的注意事项
/*interface Named {
    name: string
}

let x: Named;

let y= {
    name: 'yanle',
    location: 'Chongqing',
    age: 26
};
x = y;

console.log(x);
console.log(y);*/



// 比较两个函数
/*let x = function(a: number) : number{
    return 0
};
let y = function(b: number, c: string): number{
    return 0;
};
y=x;
x=y;*/

/*let items:number[] = [1,2,3];
items.forEach((item, index, array) => {
    console.log(item);
});
items.forEach(item=>{
    console.log(item)
});

let x: Function = function(): object {
    return {
        name: 'Alice'
    }
};
let y: Function = function():object {
    return {
        name: 'Alice',
        location: 'Seattle'
    }
};*/

/*let x = () => ({name: 'Alice'});
let y = () => ({name: 'Alice', location: 'Seattle'});
console.log(x());

x = y; // OK
y = x; // Error because x() lacks a location property*/

// 可选参数及剩余参数
/*
function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /!* ... Invoke callback with 'args' ... *!/
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));*/


// 类
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) {

    }

    static eat():void {
        console.log('eat')
    }
}

class Dog{
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let d: Dog;
a=d;
d=a;