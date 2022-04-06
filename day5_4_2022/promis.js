function prom(complete) {
    return new Promise((resolve, reject) => {
        if (complete) {
            resolve("Successfull")
        }
        else {
            reject("I am failed")
        }
    });
}
let suc = (com) =>{
    console.log(com)
}
let err = (com) =>{
    console.log(com)
}
prom (false).then(suc).catch(suc);