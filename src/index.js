const express = require("express");
const port = 3003;
const path = require("path");
const bodyParser = require('body-parser')
const cors = require('cors');
const { Server } = require("http");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
app.set('views', "views");
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
    res.render("../views/index.ejs");
});

router.get("/home", (req, res) => {
    res.redirect("/");
});

router.get("/appeal", (req, res) => {
    res.render("../views/appeal.ejs");
});

router.get("/apply", (req, res) => {
    res.render("../views/apply.ejs");
});

router.get("/bma-appeal", (req, res) => {
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

router.get("*", (req, res) => {
    res.status(404).render('../views/404.ejs');
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});

app.use('/.netlify/functions/index', router);

module.exports.handler = serverless(app);
