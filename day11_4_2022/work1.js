function getConnection() {
    return new Promise((resolve, reject) => {
        var a = true
       setTimeout(() => {
        if (a) {
            resolve("Connected")
        }
        else
            reject("Error1")
       }, 3000);
    });
}
function getData() {
    return new Promise((resolve, reject) => {
        var a = true
        setTimeout(() => {
            if (a) {
                resolve("Get Data")
            }
            else
                reject("Error2")
        }, 3000);
    });
}
async function foo() {
    console.log("A")
    const result1 = await getConnection().catch((error) => console.log(error))
    const result2 = await getData().catch((error) => console.log(error))
    console.log(result1)
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
    console.log(result2)
}
foo()