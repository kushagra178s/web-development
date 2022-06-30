//jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res){
    // console.log(request);
    res.send("<a href='localhost:3000/contact'><h1>call</h1></a>");
})

app.get("/contact", function(req, res){
    // console.log(request);
    res.send("<h1>kushagra@email.com</h1>");
})

app.listen(3000, function(){
    console.log("server started on port 3000");
});
