const express = require("express");
const port = 3003;
const bodyParser = require('body-parser');
const cors = require("cors");

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
app.use("/public", express.static(`${__dirname}/../public`));

app.get("/", (req, res) => {
    res.render("../views/index.ejs");
});

app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/appeal", (req, res) => {
    res.render("../views/appeal.ejs");
});

app.get("/apply", (req, res) => {
    res.render("../views/apply.ejs");
});

app.get("/bma-appeal", (req, res) => {
    res.render("../views/bma.ejs");
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
    res.status(404).render('../views/404.ejs');
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
