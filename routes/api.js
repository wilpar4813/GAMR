const db = require("../models");
const passport = require("passport");
const axios = require("axios");
const API_KEY = "83d7fd4abd2b146be0152208aa8e0bd1";

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

    // Search API
    app.get("/api/games/search/:keyword", function (req, res) {
        var keyword = req.params.keyword;

        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
            `fields hypes, first_release_date, release_dates.date, release_dates.human, release_dates.platform.name, name, cover.url, screenshots.url, time_to_beat.normally, franchise.name; limit 10; search "${keyword}";`
        }).then((response) => {
            res.json(response.data);
        });
    });

    // All Popular Games
    app.get("/api/games/popular_all", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url, screenshots.url, time_to_beat.normally, franchise.name; where rating > 90; limit 20;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    // PS4 Popular Games
    app.get("/api/games/popular_ps4", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url, screenshots.url, time_to_beat.normally, franchise.name; where rating > 90 & platforms = 48;limit 20;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    // XboxOne Popular Games
    app.get("/api/games/popular_xboxone", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url, screenshots.url, time_to_beat.normally, franchise.name; where rating > 90 & platforms = 49;limit 20;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    // Switch Popular Games
    app.get("/api/games/popular_switch", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url, screenshots.url, time_to_beat.normally, franchise.name; where rating > 90 & platforms = 130; limit 20;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    // News API Call
    app.get("/api/games/news", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/pulses",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields author, image, published_at, summary, title, website; sort published_at desc; where image != null; limit 8;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    // Recent Releases
    app.get("/api/games/recent_releases", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields hypes, first_release_date, release_dates.date, release_dates.human, release_dates.platform.name, name, cover.url, screenshots.url, time_to_beat.normally, franchise.name; sort first_release_date desc; where first_release_date < 1587224342 & first_release_date > 1583038800 & hypes > 10; limit 5;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    // Coming Soon
    app.get("/api/games/coming_soon", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields hypes, first_release_date, release_dates.date, release_dates.human, release_dates.platform.name, name, cover.url, screenshots.url, time_to_beat.normally, franchise.name; sort first_release_date asc; where first_release_date > 1587224342 & first_release_date < 1593576000 & hypes > 2; limit 5;",
        }).then((response) => {
            res.json(response.data);
        });
    });

    // Most Anticipated
    app.get("/api/games/most_anticipated", function (req, res) {
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            data:
                "fields first_release_date, release_dates.date, release_dates.human, release_dates.platform.name, hypes, name, platforms.name, cover.url, screenshots.url, time_to_beat.normally, franchise.name; sort hypes desc; where first_release_date > 1587224342 & first_release_date < 1593576000 & hypes > 10; limit 5;",
        }).then((response) => {
            res.json(response.data);
        });
    });
}
module.exports = routes;
