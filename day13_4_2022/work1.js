// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

// Stage 4(finished) proposal
// ({ ...rest } = { a: 10, b: 20, c: 30, d: 40, e: 50, f: 60 });
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}

// const x = [1, 2, 3, 4, 5];
// const [a,b,c,d,e] = x;
// console.log(a); // 1
// console.log(b); // 2 
// console.log(c); // 3
// console.log(d); // 4
// console.log(e); // 5

// var obj = {
//     name: "Saulat",
//     company: "Allied",
// };

// var a = obj.name;
// a = "Hassam";
// console.log(a);
// console.log(obj);

// var b = obj;
// b.name = "Hassam";
// console.log(b);
// console.log(obj);

// const foo = ['one', 'two'];

// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); // undefined

// let arr = ["Ateeq", "Akbar", "BSCS"]
// // let fName = "Ateeq"
// // let lName = "Akbar"
// // let course = "BSCS"
// function funObj(fName, lName, course) {
//     fullName = fName + " " + lName

//     return {
//         fullName, course
//     }
// }
// // console.log(funObj(fName, lName, course));
// console.log(funObj(...arr));
// console.log(funObj(...arr).fullName);
var a = 1
for (var i = 1; i <=64; i++) {
    console.log(`rice in count ${a}`)
    a = a * 2 
    b = a / 50000
    c = 0
    c += b
    console.log(`rice in Kg at ${i} day ${b}`)
    console.log(`Total rice require in Tons ${b/1000}`)
    

}
