const http = require("http")

const routeHandler = require('./routes')


const server = http.createServer(routeHandler)




server.listen(3000, () => {
   console.log("server runing on 3000");
})
