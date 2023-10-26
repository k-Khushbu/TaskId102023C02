const express = require('express')
const app = express()


app.get('/',(req, res) =>{
    res.send("Hello")
    //console.log("Hello")
})


app.listen(3001)
console.log("Running server on port 3001")