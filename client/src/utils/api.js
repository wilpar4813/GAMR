const axios = require("axios");

export default {
    // Video Games!
    createUser: function (userData) {
        console.log(userData);
        return axios.post("/register", userData);
    },

    login: function (userData) {
        console.log(userData);
        return axios.post("/login", userData);
    },

    logout: function () {
        return axios.get("/logout");
    },

    getUser: function () {
        return axios.get("/user");
    },

    search: function (keyword) {
        return axios.get("/api/games/search/:" + keyword);
    },

    gameIdSearch: function (id) {
        return axios.get("/api/games/" + id);
    },

    recentNews: function () {
        return axios.get("/api/games/news");
    },

    popularAll: function () {
        return axios.get("/api/games/popular_all");
    },

    popularPS4: function () {
        console.log("line 43");
        return axios.get("/api/games/popular_ps4");
    },

    popularXboxOne: function () {
        return axios.get("/api/games/popular_xboxone");
    },

    popularSwitch: function () {
        return axios.get("/api/games/popular_switch");
    },

    recentReviews: function () {
        return axios.get("/api/games/recent_reviews");
    },

    recentReleases: function () {
        return axios.get("/api/games/recent_releases");
    },

    comingSoon: function () {
        return axios.get("/api/games/coming_soon");
    },

    mostAnticiptated: function () {
        return axios.get("/api/games/most_anticipated");
    },

    searchedGames: function () {
        return axios.get("/api/populategame");
    },

    deleteGame: function (userId, gameId) {
        return axios.get("/api/games/:" + userId + "/:" + gameId);
    },
};
