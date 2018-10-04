/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-10-04 12:45
 */

function JsonIgnore(target:Function) {
}


@JsonIgnore
class ServerResponse<T> {
    private success: boolean;
    private message:  string;
    private data: T;


    constructor(success?: boolean, message?: string, data?: T) {
        this.success = success;
        if(message) {
            this.message = message;
        }
        if(data) {
            this.data = data;
        }
    }


    get _success(): boolean {
        return this.success;
    }

    get _message(): string {
        return this.message;
    }

    get _data(): T {
        return this.data;
    }

    // 成功的情况
    static createBySuccess<T>() : ServerResponse<T> {
        return new ServerResponse<T>(true);
    }

    static createBySuccessMessage<T>(message: string): ServerResponse<T> {
        return new ServerResponse<T>(true, message)
    }

    static createBySuccessData<T> (data: T): ServerResponse<T> {
        return new ServerResponse<T>(true, '', data);
    }

    static createBySuccessMessageData<T> (message: string , data: T) : ServerResponse<T> {
        return new ServerResponse<T>(true,message, data);
    }


    // 失败的情况
    static createByError<T>() : ServerResponse<T> {
        return new ServerResponse<T>(false);
    }

    static createByErrorMessage<T>(message: string): ServerResponse<T> {
        return new ServerResponse<T>(false, message)
    }

    static createByErrorData<T> (data: T): ServerResponse<T> {
        return new ServerResponse<T>(false, '', data);
    }

    static createByErrorMessageData<T> (message: string , data: T) : ServerResponse<T> {
        return new ServerResponse<T>(false,message, data);
    }
}


/*对于这个对象的测试*/
let response: ServerResponse<object> = ServerResponse.createBySuccessData({
    name: 'yanle'
});
console.log(response);





export default ServerResponse;