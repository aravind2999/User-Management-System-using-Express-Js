var express = require('express')
var app = express()

// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

app.use(express.json)
app.use(express.urlencoded({extended:false}))
app.use('/api/users',require('./routes/api/users'))

app.listen(8080,()=>{
    console.log("Port started at 3000")
})