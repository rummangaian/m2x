const express = require("express")

const { growthRouter } = require("./routes/growth-route")

const app = express()

app.get('/' , async(req , res)=> {
    res.send("Hi ")
})

app.use('/' , growthRouter)

app.listen(3002 , ()=>{
    console.log("Server is running @" , 3002)
})