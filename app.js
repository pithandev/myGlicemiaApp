const express = require("express");
const mongoose = require("mongoose");
const glicemiaRoutes = require("./routes/glicemiaRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

const dbURI = "mongodb+srv://nathanlearn:test1234@cluster0.sysey.mongodb.net/glicemia-learn?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI)
    .then(sucess => {
        app.listen("3000", (req, res) => console.log("listen on: http://localhost:3000"));
    })
    .catch(err => {
        console.log(err);
    })


app.get("/", (req, res) => {
    res.redirect("/glicemia");
})

app.use("/glicemia", glicemiaRoutes);

app.get('/about', (req, res) => {
    res.render("about", {title: "About"});
})

