const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

    // res.send("server is up and running");
});
app.post("/", function (req, res) {
    // console.log(req.body.cityname);
    const query = req.body.cityname;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=f1ebbb3cebf9f40ea8df9168eeda3999&units=metric";

    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp;
            const weatherdes = weatherdata.weather[0].description;
            const icon = weatherdata.weather[0].icon;
            const iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            // console.log(weatherdes);
            res.write("<h1>Weather at "+ query +   " is " + weatherdes + "</h1>");
            res.write("<h1>Temprature at "+ query + " is " + temp + "* Degree Celcius </h1>");
            res.write("<img src=" + iconurl + ">");

            res.send();
        });
    });

});


app.listen(3000, function () {
    console.log("server in running on port 3000.");
});
