/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018/9/30 0030 22:38
 */

// instanceof类型保护
/*interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    private numSpaces: number;

    constructor(numSpaces: number) {
        this.numSpaces = numSpaces;
    }

    getPaddingString(): string {
        return Array(this.numSpaces +1).join(" ");
    }
}

class StringPadder implements Padder {
    private values: string;

    constructor(values: string) {
        this.values = values;
    }

    getPaddingString() {
        return this.values;
    }
}

function getRandomPadder(): StringPadder|SpaceRepeatingPadder {
    return Math.random()<0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('   ');
}
// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}*/

// 数字字面量
/*
function rollDie(): 1|2|3 {
    return 3+5;
}*/
