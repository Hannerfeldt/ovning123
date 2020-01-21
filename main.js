console.log("hej");


console.log("tarmspräckarelof");

console.log("hej från stefan");

console.log("tarmspräckarelof");


const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("hello");

})

app.listen(5000, ()=> { console.log("server live")});