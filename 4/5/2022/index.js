function myDisplay(some) {
    console.log(some)
}
let pr = new Promise((res, rej) => {
    let x = 0;

    if (x == 0) {
        res("Ok");
    }
    else {
        rej("error");
    }
});
pr.then(
    function (value) { myDisplay(value); },
    function (error) { myDisplay(error); }
)