var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/routes.js')(app)
mongoose.connect('mongodb://localhost/Mentorship');

require("./server/config/mongoose.js");

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000, function() {
    console.log("listening on port 8000");
})