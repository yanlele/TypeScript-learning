/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018/9/30 0030 22:38
 */

// instanceof类型保护
interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {

    getPaddingString(): string {
        return null;
    }
}


abstract class Person {
    public abstract getPaddingString(): string;
}

class People extends Person {

    public getPaddingString(): string {
        return '123';
    }
}

export default People