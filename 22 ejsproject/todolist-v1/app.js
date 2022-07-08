// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.get("/", function(req, res){
    // res.send("Hello");
    var today = new Date();
    var currentday = today.toLocaleTimeString();
    res.send(currentday)
    // if(today.getDay()===0 || today.getDay()===6 ){
    //     res.send("<h1>weekday</h1>");
    // }
    // else{
    //     res.send("<h1>workday</h1>");
    // }
}); 

app.listen(3000, function(){
    console.log("server stated on port 3000");
});