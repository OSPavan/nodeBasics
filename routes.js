const fs = require('fs')

const routeHandler = (req,res) => {
    let url = req.url
    let method = req.method
    if (url == '/') {
       res.write("<!doctype html>")
       res.write("<html><h1>Enter Message</h1><form action='/postMessage' method ='POST'><input type='text' name = 'inputMessage'><button type='submit'>Submit</button></form></html>")
       return res.end()
    }
    if(url == '/postMessage' && method == 'POST'){
       let body = []
       let postData = 'const here'
       req.on('data',(chunk)=>{
          console.log(chunk);
          body.push(chunk)
       })
          console.log(postData);
       req.on("end",()=>{
          // console.log(body);
 
          postData = Buffer.concat(body).toString()
          // console.log(postData);
       })
       fs.writeFileSync('message.txt',postData)
       // console.log(req);
       res.statusCode = 302;   
       // 302 is for redirect status
       res.setHeader('Location','/')
       return res.end() 
    }
}

module.exports = routeHandler