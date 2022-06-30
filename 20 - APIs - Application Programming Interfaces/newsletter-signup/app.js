const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.listen(3000, function(){
    console.log("server on port 3000");
});