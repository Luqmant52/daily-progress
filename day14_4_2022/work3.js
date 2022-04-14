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

async function result() {
    var [result1, result2] = await errorHandler(getConnection());
    // var [result1, result2] = await getConnection();
    // var [result1, result2] = await errorHandler(getData());
    console.log(result1, result2);
    // console.log(b);
}

function errorHandler(p) {
    p.then((result) => {
        return [result, "undefined"];
    }).catch((err) => {
        return ["undefined", err];
    });
}
result();