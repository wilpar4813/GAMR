const axios = require("axios");

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
        return axios.get("/api/popular_all");
    },

    popularPS4: function () {
        console.log("line 43");
        return axios.get("/api/popular_ps4")
    },
    popularXboxOne: function () {
        return axios.get("/api/popular_xboxone")
    },

    popularSwitch: function () {
        return axios.get("/api/popular_switch");
    },

    recentReviews: function () {
        return axios.get("/api/recent_reviews");
    },

    recentReleases: function () {
        return axios.get("/api/recent_releases");
    },

    comingSoon: function () {
        return axios.get("/api/coming_soon");
    },
    mostAnticiptate: function () {
        return axios.get("/api/most_anticipated");
    }
};
