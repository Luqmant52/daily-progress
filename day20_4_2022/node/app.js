const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello from Route")
        res.end()
        console.log("Heellooo")
    }
    if (req.url === '/product') {
        // res.write("<h1>Hello from Product</h1>")
        res.write(JSON.stringify({id :2}))
        res.end()
        // console.log("Heellooo Product")
    }
})
server.listen(3000,
    console.log("Server is listen on  http://localhost:3000")
)