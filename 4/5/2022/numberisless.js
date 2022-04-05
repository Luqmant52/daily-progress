function num(n) {
    return new Promise((resolve, reject) => {
        if (n < 10) {
            resolve(`Number ${n} is less than 10 `)
        }
        else {
            reject(`Number ${n} is grater than 10 `)
        }
    })
}
num(2).then((msg) => {
    console.log(msg)
}).catch((msg) => {
    console.log(msg)
})