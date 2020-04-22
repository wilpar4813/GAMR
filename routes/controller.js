const axios = require("axios");
const db = require("../models");
const mongoose = require("mongoose");

function controller(app) {


    app.post("/api/game/:id", (req, res) => {
        let userId = req.params.id;
        userId = mongoose.Types.ObjectId(userId);
        console.log(req.body);
        db.Game.create(req.body)
            .then((gamedb) =>
                db.User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $push: {
                            games: gamedb._id,
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
            .then((coverdb) =>
                db.Game.findOneAndUpdate(
                    { _id: gameId },
                    {
                        $push: {
                            covers: coverdb._id,
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

    app.post("/api/releasedate/:id", (req, res) => {
        let gameId = req.params.id;
        req.body.gameId = gameId;

        gameId = mongoose.Types.ObjectId(gameId);
        console.log(req.body);
        db.ReleaseDate.create(req.body)
            .then((releaseDateDb) =>
                db.Game.findOneAndUpdate(
                    { _id: gameId },
                    {
                        $push: {
                            releaseDates: releaseDateDb._id,
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

    app.post("/api/platform/:id", (req, res) => {
        let gameId = req.params.id;
        req.body.gameId = gameId;
        gameId = mongoose.Types.ObjectId(gameId);
        console.log(req.body);
        db.Platform.create(req.body)
            .then((platformDb) =>
                db.Game.findOneAndUpdate(
                    { _id: gameId },
                    {
                        $push: {
                            platforms: platformDb._id,
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

    app.post("/api/platformlogo/:id/:gameId", (req, res) => {
        let platformId = req.params.id;
        let gameId = req.params.gameId;
        req.body.platformId = platformId;
        req.body.gameId = gameId;

        platformId = mongoose.Types.ObjectId(platformId);
        console.log(req.body);
        db.PlatformLogo.create(req.body)
            .then((platformLogoDb) =>
                db.Platform.findOneAndUpdate(
                    { _id: platformId },
                    {
                        $push: {
                            platformLogos: platformLogoDb._id,
                        },
                    },
                    { new: true }
                )
            )
            .then((platformDb) => {
                res.json(platformDb);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.get("/api/populategame", (req, res) => {
        db.User.find({})
            .populate("games")

            .then((dbUser) => {
                db.Game.find({})
                    .populate("covers")
                    .populate("platforms")
                    .populate("platformlogos")
                    .populate("releasedates")
                    .populate("screenshots")
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
