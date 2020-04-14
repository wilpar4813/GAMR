const axios = require("axios");
const db = require("../../models");
const passport = require("passport");

function controller(app) {
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

    // Register User
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

    app.get("/api/games", (req, res) => {
        console.log("hello i work");
        axios
            .get("https://api-v3.igdb.com/games", {
                headers: {
                    Accept: "application/json",
                    "user-key": "34f8664d1b52f2aec5985888a4fbb477",
                },
                data:
                    "fields name,platforms,total_rating,total_rating_count,release_dates,screenshots,cover,summary,url;",
            })
            .then((response) => {
                console.log(response.data);
                res.json(response.data);
            });
    });

    app.post("/api/saved", (req, res) => {
        db.Game.create(req.body)
            .then(({ _id }) =>
                db.User.findOneAndUpdate(
                    {},
                    { $push: { games: _id } },
                    { new: true }
                )
            )
            .then((dbUser) => {
                res.json(dbUser);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.get("/api/populategame", (req, res) => {
        db.User.find({})
            .populate("games")
            .populate("covers")
            .populate("platforms")
            .populate("platformlogos")
            .populate("releasedates")
            .populate("screenshots")
            .then((dbUser) => {
                res.json(dbUser);
            })
            .catch((err) => {
                res.json(err);
            });
    });
}

module.exports = controller;
