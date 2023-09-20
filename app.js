const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res)=>{
    //res.send("hello work hola mundo");
    res.sendFile(path.join( __dirname + "/index.html"));
});


app.listen(8000, ()=>{
    console.log("server running on port xd xd xd ", 8000);
});
