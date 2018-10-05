/*
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}*/


interface User {
    name: string
}

class Test {
    getName() {
        this.checkAnswer<User>()
    }


    checkAnswer<User>() {
        let data: User;
        data = {
            name: 'yanle'
        };
        return data
    }
}