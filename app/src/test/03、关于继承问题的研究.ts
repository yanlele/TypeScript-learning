/**
 * create by yanlele
 * create time 2018-10-12 15:45
 */


class Father {
    protected myName;
    private age;
    public address: string = '重庆';

    constructor(name = 'yanle', age = 123) {
        this.myName = name;
        this.age = age;
        this.address = '123';
    }
}

class Child extends Father {
    constructor() {
        super()
    }

    static run() {
        this.name;
        console.log(this.name);
    }
}

Child.run();

export default Father;
