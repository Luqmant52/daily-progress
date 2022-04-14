function foo() {
    var x = 1
    return () => {
        x++
        console.log(x)
        console.log(a)
    }
}
const f = foo()
console.log(f())
console.log(f())
console.log(f())