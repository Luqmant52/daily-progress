const p = new Promise((resolve, reject) => {
    let a = true
    if (a)
        resolve("Get Connection")
    else
        reject("Connection Faill")
});
p.then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
        if (result)
            resolve("Get Data")
        else
            reject("data Faill")
    });
}).then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
        if (result)
            resolve("Formate Data")
        else
            reject("Formate data Fail")
    });
}).then((result) => {
    console.log(`${result}`)
    return new Promise((resolve, reject) => {
        if (result)
            resolve("Display Data")
        else
            reject("Display data Fail")
    });
}).then((result) => {
    console.log(`${result}`)
}).catch((result) => {
    console.log(`${result}`)
})