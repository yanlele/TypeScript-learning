/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-10-03 17:27
 */

/*
interface ISignIn {
    username: string,
    password: string
}

let signIn: ISignIn = {
    name:'123',
    password: '123'
};

// let {name, password}: {name: string, password: string} = signIn;


console.log(signIn);
console.log(signIn.name);
console.log(signIn.password);*/

/*let o={
    a:'foo',
    b: '12',
    c:'bar'
};
let {a,b}:{a:string,b:string}=o;*/

interface ISignIn {
    username: string,
    password: string
}

let {username, password}: ISignIn = {
    username: '123',
    password: '123'
};

console.log(username);
console.log(password);
