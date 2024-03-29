const express = require("express");
const port = 5000;
const bodyParser = require('body-parser');
const cors = require("cors");
/* const Dweathertos = "weather-tos";
const Dweatherpp = "weather-pp";
const Dweather = "weather";
 */


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.set('views', "views");
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").renderFile);
app.set("x-powered-by", false);
app.use(express.static(`${__dirname}`));
// app.use("/public", express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/appeal", (req, res) => {
    res.render("appeal");
});

app.get("/apply", (req, res) => {
    res.render("apply");
});

app.get("/bma-appeal", (req, res) => {
    res.render("bma");
});

app.get("/knowledge-role-application", (req, res) => {
    res.render("knowledge");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("/weather-pp", (req, res) => {
    res.render("weatherpp");
});

app.get("/weather-tos", (req, res) => {
    res.render("weathertos");
});

app.get("/weather404", (req, res) => {
    res.render("weather404");
});

app.get("/heartbeat", (req, res) => {
    res.render("heartbeat");
});


const startWork = (dataObject) => {
    // Continue db loggings from here harry
}

app.post('/submit', (req, res) => {
    let data = req.body;
    startWork(data);
    res.send("Work Done");
});


app.get("*", (req, res) => {
    if (req.path === '/WoC-Websitev2-7b608b5e18ef285eab854bfa8b5128a7e3895064/views/weather404.ejs') {
        res.redirect(301, '/weather404');
    } else {
        res.status(404).render('404');
    }
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});



