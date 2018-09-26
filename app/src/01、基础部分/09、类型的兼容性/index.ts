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
interface Named {
    name: string
}

let x: Named;

let y= {
    name: 'yanle',
    location: 'Chongqing'
};
x = y;





