const express = require("express");
const port = 3000;
const path = require("path");
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/home", (req, res) => {
    res.render("index.ejs")
});

app.get("/appeal", (req, res) => {
    res.render("appeal.ejs");
});

app.get("/apply", (req, res) => {
    res.render("apply.ejs");
});

app.get("/bma-appeal", (req, res) => {
    res.render("bma.ejs");
});


const startWork = (dataObject) => {
    // Continue db loggings from here harry
}

app.post('/submit', (req, res) => {
    let data = req.body;
    startWork(data);
    res.send("Work Done");
})

app.get("*", (req, res) => {
    res.status(404).render('404');
});


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})