/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-10-01 12:34
 */
export default class Animal {
    private name;

    constructor(name) {
        this.name = name;
    }

    get _name() {
        return this.name;
    }

    set _name(value) {
        this.name = value;
    }
}