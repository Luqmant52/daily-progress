async function foo() {
    console.log("B")
    await getData()
    console.log("c")
    console.log("d")
}
console.log("A")
foo()
console.log("E")
console.log("F")

function timeOut() {
    setTimeout(() => {
        console.log("timeOut")
    }, 3000);
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Get data")
            resolve('getdata')
        }, 3000);
    });
}