// function greeting(message) {
//     return function(name){
//          return message + ' ' + name;
//     }
//  }
//  let sayHi = greeting('Hi');
//  let sayHello = greeting('Hello');

//  console.log(sayHi('John')); // Hi John
//  console.log(sayHello('John')); // Hello John
let j =1
for (let i = 1;(i <= 3); i++) {
    j++
    // console.log(`before i = ${i}`)
    setTimeout(() => {
        // console.log(i)
        console.log(`after ${j} second(s): ${j}`);
    }, j*1000);
}