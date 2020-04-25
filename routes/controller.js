const db = require("../models");
const mongoose = require("mongoose");

function controller(app) {


    app.post("/api/game/:id", (req, res) => {
        let userId = req.params.id;
        userId = mongoose.Types.ObjectId(userId);
        console.log(req.body);
        db.Game.create(req.body)
            .then((gameId) =>
                db.User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $push: {
                            games: gameId._id,
                        },
                    },
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

    app.post("/api/cover/:id", (req, res) => {
        let gameId = req.params.id;
        gameId = mongoose.Types.ObjectId(gameId);
        console.log(req.body);
        req.body.gameId = gameId;
        db.Cover.create(req.body)
            .then((coverId) =>
                db.Game.findOneAndUpdate(
                    { _id: gameId },
                    {
                        $push: {
                            covers: coverId._id,
                        },
                    },
                    { new: true }
                )
            )
            .then((gameDb) => {
                res.json(gameDb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    // Franchise stuff
    app.post("/api/franchise/:id", (req, res) => {
        let gameId = req.params.id;
        gameId = mongoose.Types.ObjectId(gameId);
        console.log(req.body);
        req.body.gameId = gameId;
        db.Franchise.create(req.body)
            .then((franchiseId) =>
                db.Game.findOneAndUpdate(
                    { _id: gameId },
                    {
                        $push: {
                            franchises: franchiseId._id,
                        },
                    },
                    { new: true }
                )
            )
            .then((gameDb) => {
                res.json(gameDb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    // Game Platform Schema
    app.post("/api/game-platform/:id", (req, res) => {
        let gameId = req.params.id;
        gameId = mongoose.Types.ObjectId(gameId);
        console.log(req.body);
        req.body.gameId = gameId;
        db.GamePlatform.create(req.body)
            .then((gamePlatformId) =>
                db.Game.findOneAndUpdate(
                    { _id: gameId },
                    {
                        $push: {
                            gamePlatforms: gamePlatformId._id,
                        },
                    },
                    { new: true }
                )
            )
            .then((gameDb) => {
                res.json(gameDb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

        // Genre Schema
        app.post("/api/genre/:id", (req, res) => {
            let gameId = req.params.id;
            gameId = mongoose.Types.ObjectId(gameId);
            console.log(req.body);
            req.body.gameId = gameId;
            db.GamePlatform.create(req.body)
                .then((genreId) =>
                    db.Game.findOneAndUpdate(
                        { _id: gameId },
                        {
                            $push: {
                                genres: genreId._id,
                            },
                        },
                        { new: true }
                    )
                )
                .then((gameDb) => {
                    res.json(gameDb);
                })
                .catch((err) => {
                    res.json(err);
                });
        });



    app.post("/api/screenshot/:id", (req, res) => {
        let gameId = req.params.id;
        gameId = mongoose.Types.ObjectId(gameId);
        console.log(req.body);
        req.body.gameId = gameId;

        db.Screenshot.create(req.body)
            .then((screenshotdb) =>
                db.Game.findOneAndUpdate(
                    { _id: gameId },
                    {
                        $push: {
                            screenshots: screenshotdb._id,
                        },
                    },
                    { new: true }
                )
            )
            .then((gameDb) => {
                res.json(gameDb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post("/api/release-date/:id", (req, res) => {
        let gameId = req.params.id;
        req.body.gameId = gameId;

        gameId = mongoose.Types.ObjectId(gameId);
        console.log(req.body);
        db.ReleaseDate.create(req.body)
            .then((releaseDateId) =>
                db.Game.findOneAndUpdate(
                    { _id: gameId },
                    {
                        $push: {
                            releaseDates: releaseDateId._id,
                        },
                    },
                    { new: true }
                )
            )
            .then((gameDb) => {
                res.json(gameDb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post("/api/platform-name/:id/:gameId", (req, res) => {
        let gameId = req.params.id;
        req.body.gameId = gameId;

        let releaseDateId = req.params.releaseDateId;
        req.body.releaseDateId = releaseDateId;

        releaseDateId = mongoose.Types.ObjectId(releaseDateId);

        console.log(req.body);
        db.PlatformName.create(req.body)
            .then((platformNameId) =>
                db.ReleaseDate.findOneAndUpdate(
                    { _id: releaseDateId },
                    {
                        $push: {
                            platformNames: platformNameId._id,
                        },
                    },
                    { new: true }
                )
            )
            .then((releaseDateDb) => {
                res.json(releaseDateDb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    
    app.get("/api/saved-games", (req, res) => {
        db.User.find({})
            .populate("games")

            .then((userDb) => {
                db.Game.find({})
                    .populate("covers")
                    .populate("screenshots")
                    .populate("gamePlatforms")
                    .populate("releaseDates")
                    .populate("platformNames")
                    .populate("genres")
                    .populate("genres")
                    .populate("franchises")
                    .then((gameDb) => {
                        res.json(gameDb);
                    });
            })
            .catch((err) => {
                res.json(err);
            });
    });
}

module.exports = controller;
