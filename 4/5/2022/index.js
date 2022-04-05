// function myDisplay(some) {
//     console.log(some)
// }
// let pr = new Promise((res, rej) => {
//     let x = 0;

//     if (x == 0) {
//         res("Ok");
//     }
//     else {
//         rej("error");
//     }
// });
// pr.then(
//     function (value) { myDisplay(value); },
//     function (error) { myDisplay(error); }
// )
// const pr = new Promise((res, rej) => {
//     var a = false
//     if (a)
//         res("success")
//     else
//         rej("Fail")
// })
// pr.then((result) => {
//     console.log(result)
// }).catch((result) => {
//     console.log(result)
// })


const pr = new Promise((resolve, reject) => { 
    const con = true
    if(con)
        resolve("Connection is succes")
    else
        reject("Fail")
 })
 function getdata() {
    console.log("Data is fetched")
}
 pr.then((result)=>{
    console.log(result)
    getdata()
 })
