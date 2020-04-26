const db = require("../models");
const passport = require("passport");
const axios = require("axios");
const mongoose = require("mongoose");
const moment = require("moment");
const api = "07c181e9c7a0e3dac161112d94838ce5";

// Image Swap Function
function imageSwap(response) {
    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].cover != undefined) {
            response.data[i].cover.url = response.data[i].cover.url.replace(
                "/t_thumb/",
                "/t_cover_big_2x/"
            );
        }
        if (response.data[i].screenshots != undefined) {
            for (let k = 0; k < response.data[i].screenshots.length; k++) {
                response.data[i].screenshots[k].url = response.data[
                    i
                ].screenshots[k].url.replace(
                    "/t_thumb/",
                    "/t_screenshot_huge/"
                );
            }
        }
    }
    return response;
}

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

    // All Popular Games
    app.get("/api/games/popular_all", function (req, res) {
        console.log(req.url, "hello");
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": api,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url, screenshots.url, time_to_beat.normally, franchise.name; where rating > 90; limit 20;",
        }).then((response) => {
            response = imageSwap(response);
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
                "user-key": api,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url, screenshots.url, time_to_beat.normally, franchise.name; where rating > 90 & platforms = (48);limit 20;",
        }).then((response) => {
            response = imageSwap(response);
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
                "user-key": api,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url, screenshots.url, time_to_beat.normally, franchise.name; where rating > 90 & platforms = (49);limit 20;",
        }).then((response) => {
            response = imageSwap(response);
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
                "user-key": api,
            },
            data:
                "fields name,rating,genres.name,platforms.name,cover.url, screenshots.url, time_to_beat.normally, franchise.name; where rating > 90 & platforms = (130); limit 20;",
        }).then((response) => {
            response = imageSwap(response);
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
                "user-key": api,
            },
            data:
                "fields author, image, published_at, summary, title, website.url; sort published_at desc; where image != null; limit 8;",
        }).then((response) => {
            response = imageSwap(response);
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
                "user-key": api,
            },
            data: `fields hypes, first_release_date, release_dates.date, release_dates.human, release_dates.platform.name, name, cover.url, screenshots.url, time_to_beat.normally, franchise.name; sort first_release_date desc; where first_release_date < ${moment().format(
                "X"
            )} & first_release_date > ${moment()
                .subtract(1, "months")
                .format("X")} & hypes > 10; limit 5;`,
        }).then((response) => {
            response = imageSwap(response);

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
                "user-key": api,
            },
            data: `fields hypes, first_release_date, release_dates.date, release_dates.human, release_dates.platform.name, name, cover.url, screenshots.url, time_to_beat.normally, franchise.name; sort first_release_date asc; where first_release_date > ${moment().format(
                "X"
            )} & first_release_date < ${moment()
                .add(3, "months")
                .format("X")} & hypes > 2; limit 5;`,
        }).then((response) => {
            response = imageSwap(response);

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
                "user-key": api,
            },
            data: `fields first_release_date, release_dates.date, release_dates.human, release_dates.platform.name, hypes, name, platforms.name, cover.url, screenshots.url, time_to_beat.normally, franchise.name; sort hypes desc; where first_release_date > ${moment().format(
                "X"
            )} & first_release_date < ${moment()
                .add(6, "months")
                .format("X")} & hypes > 10; limit 5;`,
        }).then((response) => {
            response = imageSwap(response);
            res.json(response.data);
        });
    });

    // Search API - Keyword
    app.get("/api/games/search/:keyword", function (req, res) {
        var keyword = req.params.keyword;

        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": api,
            },
            data: `fields hypes, first_release_date, release_dates.date, platforms.name, screenshots.url, release_dates.human, summary, release_dates.platform.name, name, cover.url, screenshots.url, time_to_beat.normally, franchise.name, genres.name; limit 10; search "${keyword}";`,
        }).then((response) => {
            response = imageSwap(response);
            res.json(response.data);
        });
    });

    // Search API - ID
    app.get("/api/games/:id", function (req, res) {
        var id = req.params.id;
        axios({
            url: "https://api-v3.igdb.com/games",
            method: "POST",
            headers: {
                Accept: "application/json",
                "user-key": api,
            },
            data: `fields hypes, first_release_date, release_dates.date, platforms.name, screenshots.url, release_dates.human, summary, release_dates.platform.name, name, cover.url, screenshots.url, time_to_beat.normally, franchise.name, genres.name; limit 10; where id = ${id};`,
        }).then((response) => {
            response = imageSwap(response);
            console.log(response.data, "Hello");
            res.json(response.data);
        });
    });

    

    // User Save Routes
    app.delete("/api/games/:userId/:gameId", function (req, res) {
        var gameId = mongoose.Types.ObjectId(req.params.gameId);
        var userId = mongoose.Types.ObjectId(req.params.userId);
        var coverId = mongoose.Types.ObjectId(req.params.coverId);
        var screenshotId = mongoose.Types.ObjectId(req.params.screenshotId);
        var releaseDateId = mongoose.Types.ObjectId(req.params.releaseDateId);
        var platformId = mongoose.Types.ObjectId(req.params.platformId);
        var platformLogoId = mongoose.Types.ObjectId(req.params.platformLogoId);

        // console.log(gameId);

        db.User.updateOne(
            { _id: userId },
            { $pull: { games: gameId } },
            { multi: true },
            function (err, status) {
                console.log(status);
            }
        );

        db.Game.updateMany(
            { _id: gameId },
            {
                $pull: {
                    screenshots: screenshotId,
                    covers: coverId,
                    releaseDates: releaseDateId,
                    platforms: platformId,
                },
            },
            { multi: true },
            function (err, status) {
                console.log(status);
            }
        );

        db.Platform.updateOne(
            { _id: platformId },
            { $pull: { platformLogos: platformLogoId } },
            { multi: true },
            function (err, status) {
                console.log(status);
            }
        );
    });
}
module.exports = routes;
