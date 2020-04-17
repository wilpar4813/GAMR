const axios = require("axios");
const API_KEY = "c349b6bbe3fc4fac8c2a90d68e51410a";

export default {
    // Video Games!
    createUser: function (userData) {
        console.log(userData);
        return axios.post("/register", userData);
    },

    login: function (userData) {
        console.log(userData);
        return axios.get("/user", userData);
    },

    logout: function () {
        return axios.get("/logout");
    },

    getUser: function () {
        return axios.get("/user");
    },

    popularAll: function () {
        return axios
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
    },
    popularPS4: function () {
        console.log("line 43");
        return axios
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
    },
    popularXboxOne: function () {
        return axios
            .get({
                url: "https://api-v3.igdb.com/games",
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "user-key": API_KEY,
                },
                data:
                    "fields name,genres,platforms,cover; where rating > 90 & platforms = (49); limit 20;",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    popularSwitch: function () {
        return axios
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
    },
    recentReviews: function () {
        return axios
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
    },
    recentReleases: function () {
        return axios
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
    },
    comingSoon: function () {
        return axios
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
    },
    mostAnticiptate: function () {
        return axios
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
    },
};
