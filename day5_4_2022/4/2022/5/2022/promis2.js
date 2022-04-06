let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("OK")
    }
    else {
        reject("error")
    }
});
p.then((mes) => {
    console.log(mes)
}).catch((mes) => {
    console.log(mes)
})