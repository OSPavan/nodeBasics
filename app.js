const http = require("http")
const fs = require('fs')

const server = http.createServer((req, res) => {
   let url = req.url
   let method = req.method
   if (url == '/') {
      res.write("<html><h1>Enter Message</h1><form action='/postMessage' method ='POST'><input type='text' name = 'inputMessage'><button type='submit'>Submit</button></form></html>")
      return res.end()
   }
   if(url == '/postMessage' && method == 'POST'){
      fs.writeFileSync('message.txt','From node JS!')
      // console.log(req);
      res.statusCode = 302;   
      // 302 is for redirect status
      res.setHeader('Location','/')
      return res.end()

   }

})




server.listen(3000, () => {
   console.log("server runing on 3000");
})
