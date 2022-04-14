var a = 10
function foo() {
    var x = 1
    return () => {
        x++
        a++
        console.log(x)
        console.log(a)
    }
}
const f = foo()
console.log(f())
console.log(f())
console.log(f())