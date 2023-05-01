// const http = require("http")

// const routeHandler = require('./routes')

const express = require('express')

const app = express();
app.listen(3000,()=>{
   console.log("listening to 3000!!");
})

app.use((req,res,next)=>{
   console.log("in middleware!!");
   next();
})


app.use('/add-product',(req,res,next)=>{
   console.log("in second  middleware!");
   res.send("<h1>This is add product page</h1>")
})

app.use('/',(req,res,next)=>{ // added at last as the sequence matter
   console.log("in second  middleware!!");
   res.send("<h1>This is home page</h1>")
})


