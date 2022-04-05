
getData()
const pr1 = new Promise((resolve, reject) => {
    let d = "Luqman"
    if (d) {
        setTimeout(() => {
            resolve(`Success ${d}`)
        }, 2000);
    }
    else {
        reject("Fail")
    }
})
pr1.then((result) => {
    console.log(result)
}).catch((result) => {
    console.log(result)
})

