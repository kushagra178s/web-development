const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    var wt = Number(req.body.weight);
    var ht = Number(req.body.height);
    ht = ht/100;
    var result = wt/(ht*ht);
    res.send("result = " + result); // dont send result variable it will throw error send string + result
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
