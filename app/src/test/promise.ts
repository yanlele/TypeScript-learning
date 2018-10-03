/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-10-03 19:55
 */


/*function add (num1, num2, callback) {
    var sum = num1 + num2;
    callback(err, sum); // 假装这儿可能会有异常传出来
}

function add_promise (num1, num2) {
    const deferred = new Deferred<number>();
    add (num1, num2, (err, sum) => {
        if (err) {
            deferred.reject();
        } else {
            deferred.resolve(sum);
        }
    });
    return deferred.promise;
}

async function getSum() {
    return await add_promise(1, 2);
}


console.log(getSum()); // 3*/
