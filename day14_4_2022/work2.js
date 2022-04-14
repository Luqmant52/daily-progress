function add(x) {
    return (y) => x + y
}
// const add5 = add(5)
// const add10 = add(10)

// console.log(add5(5))
// console.log(add10(10))
console.log(add(10)(10))