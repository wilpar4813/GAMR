var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");
// var db = require('./models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
        secret: "secret",
        saveUninitialized: true,
        resave: true,
    })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);
const controller = require("./routes/controller.js");
controller(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamrdb");

const routes = require("./routes/api");
routes(app);

// Start the API server
app.listen(PORT, function () {
    console.log(
        `🌎  ==> API Server now listening on PORT http://localhost/${PORT}!!`
    );
});
