const db = require("../models");
const passport = require("passport");

function routes(app) {
    app.post("/register", function (req, res) {
        var newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });

        db.User.createUser(newUser, function (err, user) {
            if (err) throw err;
            res.send(user).end();
        });
    });

    // Endpoint to login

    app.post("/login", passport.authenticate("local"), function (req, res) {
        res.send(req.user);
    });

    // Endpoint to get current user
    app.get("/user", function (req, res) {
        res.send(req.user);
    });

    // Endpoint to logout
    app.get("/logout", function (req, res) {
        req.logout();
        res.send(null);
    });

    app.get("/popular_all", function (req, res) {
        req.popularAll();
    });

    app.get("/popular_ps4", function (req, res) {
        req.popularPS4();
    });

    app.get("/popular_xboxone", function (req, res) {
        req.popularXboxOne();
    });

    app.get("/popular_switch", function (req, res) {
        req.popularSwitch();
    });

    app.get("/recent_reviews", function (req, res) {
        req.recentReviews();
    });

    app.get("/recent_releases", function (req, res) {
        req.recentReleases();
    });

    app.get("/coming_soon", function (req, res) {
        req.comingSoon();
    });
}
module.exports = routes;
