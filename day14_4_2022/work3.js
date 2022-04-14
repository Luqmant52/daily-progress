function getConnection() {
    return new Promise((res, rej) => {
        var a = true;
        if (a) res("Connected");
        else rej("Connection Failed");
    });
}

function getData() {
    return new Promise((res, rej) => {
        var a = true;
        if (a) res("Get Data");
        else rej("Get Data Failed");
    });
}

async function result(p) {
    var [result1, result2] = await errorHandler(p);
    if (result1)
        console.log(result1);
    else
        console.log(result2);

}

const errorHandler = (p) => p.then((result) => [result, undefined]).catch((err) => [undefined, err]
);
result(getConnection());
result(getData());