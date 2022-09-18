const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    console.log("startred")
    res.send("working backend")
 })
 
 app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${5000}!`))