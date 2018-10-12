/*
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}*/


interface User {
    name: string
}

class Test implements User{
    name: string;

    getName<User>() {
        this.checkAnswer()
    }


    checkAnswer<T>() {
        let data: T;
        // data = {
        //     name: 'yanle'
        // };
        return data
    }
}

export default {};