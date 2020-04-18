const db = require("../models");
const passport = require("passport");
const axios = require("axios");
const API_KEY = "c349b6bbe3fc4fac8c2a90d68e51410a";


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

    app.get("/api/popular_all", function (req, res) {
        axios
            .get({
                url: "https://api-v3.igdb.com/games",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields name,genres,platforms,cover; where rating > 90; limit 20;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    app.get("/api/popular_ps4", function (req, res) {
        axios
            .get({
                url: "https://api-v3.igdb.com/games",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields name,genres,platforms,cover; where rating > 90 & platforms = (48);limit 20;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    app.get("/api/popular_xboxone", function (req, res) {
        axios
            .get({
                url: "https://api-v3.igdb.com/games",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields name,genres,platforms,cover; where rating > 90 & platforms = 49; limit 20;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    app.get("/api/popular_switch", function (req, res) {
        axios
            .get({
                url: "https:api-v3.igdb.com/games",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields name,genres,platforms,cover; where rating > 90; limit 20;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    app.get("/api/recent_reviews", function (req, res) {
        axios
            .get({
                url: "https://api-v3.igdb.com/private/reviews",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields game, title, created_at, updated_at, content, positive_points, negitive_points, user_rating, likes, url; sort created_at desc; limit 10;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    app.get("/api/recent_releases", function (req, res) {
        axios
            .get({
                url: "https://api-v3.igdb.com/release_dates",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields date, human, game, platform, created_at, fields date, human, game, platform, created_at, game.cover; sort human desc; where human !='TBD'; limit 10;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    app.get("/api/coming_soon", function (req, res) {
        axios
            .get({
                url: "https://api-v3.igdb.com/release_dates",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields date, human, game, platform, created_at, fields date, human, game, platform, created_at, game.cover; sort human desc; where human ='TBD'; limit 10;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    app.get("/api/most_anticipated", function (req, res) {
        axios
            .get({
                url: "https://api-v3.igdb.com/release_dates",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields date, human, game, platform, created_at, fields date, human, game, platform, created_at, game.cover; sort human desc; where human ='TBD';  sort popularity desc; limit 10;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    });
}
module.exports = routes;
