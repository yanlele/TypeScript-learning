/**
 * create by yanlele
 * create time 2018-10-12 15:45
 */


class Father {
    protected name;
    private age;
    protected address: string = '重庆';

    constructor(name = 'yanle', age = 123) {
        this.name = name;
        this.age = age;
    }
}

class Child extends Father {
    constructor() {
        super()
    }

    run() {
        this.name
        this.address;
    }
}