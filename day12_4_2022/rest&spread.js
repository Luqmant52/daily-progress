// function myBio(fname,lname,...otherinfo) {
//     console.log(`My Name is ${fname} ${lname}`)
//     console.log(`My age is ${otherinfo[0]}`)
//     console.log(`My Designation is ${otherinfo[1]}`)

// }
// myBio("Sheikh","luqman","Developer",24)


// const num1 = [1,2,3,4,5]
// const num2 = [6,7,8,9]
// const num3 =[...num1, ...num2]
// console.log(num3)

const numbers = [1, 2, 3, 4, 5, 6.9999];

const [one, two, ...rest] = numbers;

console.log(`${one}`)
console.log(`${two}`)
console.log(`${rest}`)