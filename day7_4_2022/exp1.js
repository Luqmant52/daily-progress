const getCon = new Promise((resolve, reject) => {
    resolve(setTimeout(() => {
        console.log(getADta)
    }, 3000))
});
async function foo() {
    console.log("A")
    console.log("B")
    await setTimeout(() => {
        console.log("getADta")
    }, 3000)
    console.log("C")
}
foo()
console.log("D")
console.log("E")
