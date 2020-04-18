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

    // All games
    app.get("/api/games", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: { Accept: "application/json", "user-key": API_KEY },
            data: "fields *",
        }).then((response) => {
            res.json(response.data);
        });
    });

    app.get("/api/games/popular_all", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url; where rating > 90; limit 20;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    app.get("/api/games/popular_ps4", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url; where rating > 90 & platforms = 48;limit 20;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    app.get("/api/games/popular_xboxone", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url; where rating > 90 & platforms = 49;limit 20;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    app.get("/api/games/popular_switch", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url; where rating > 90; limit 20;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    app.get("/api/games/recent_reviews", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/private/reviews",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields game.name, game.cover.url, title, created_at, updated_at, content, positive_points, negitive_points, user_rating, likes, url; sort created_at desc; limit 10;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    app.get("/api/games/recent_releases", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/release_dates",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                'fields date, y, m, human, game.name, platform.name, created_at, game.cover.url; sort date desc; where date < 1587224342; limit 10;',
        }).then((response) => {
            res.json(response.data);
        });
    });

    app.get("/api/games/coming_soon", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/release_dates",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields date, human, game.name, platform.name, created_at, game.cover.url; sort date desc; where date > 1587224342 & date < 1593576000 ; limit 10;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    app.get("/api/games/most_anticipated", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/release_dates",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields date, human, game.name, game.popularity, platform.name, created_at, game.cover.url; sort game.popularity desc; where date > 1587224342 & date < 1593576000 & game.popularity > 4; limit 10;",
        }).then((response) => {
            res.json(response.data);
        });
    });
}
module.exports = routes;
