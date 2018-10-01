/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-10-01 12:05
 */

/*装饰器组合*/

// 我们可以这样定义@sealed装饰器：
/*
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    private greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    public greet(): string {
        return 'hello, ' + this.greeting;
    }
}*/


// 下面是一个重载构造函数的例子。
interface Constructor {
    new (...args: any[]): {}
}
function classDecorator<T extends Constructor> (constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}