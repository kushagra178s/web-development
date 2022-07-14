// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser")

const app = express();

var items = ["buy food", "cook food", "eat food", "clean food"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();
    
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }
    
    var day = today.toLocaleDateString("en-US", options); 
    
    // var day = today.toLocaleDateString("hi-IN", options); 

    res.render("list", { 
        kindofday: day, newlistitems: items 
    });
});

app.post("/", function(req, res){
    item = req.body.newitem;
    // console.log(item); 
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("server stated on port 3000");
});