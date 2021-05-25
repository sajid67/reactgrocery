const express = require('express');
var cors = require('cors')
const connectDB=require('./config/db')
const GrocRouter = require('./controller/routers')

const app=express();
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello from my site")
})
app.use('/products',GrocRouter)

connectDB();
app.listen(3333,()=>console.log("server started"))