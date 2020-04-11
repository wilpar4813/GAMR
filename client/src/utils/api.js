import React from 'react';
import axios from 'axios';

export default {
    createUser: (userData) => {
        return axios.post("/register",  userData)
    },

    signIN: (userData) => {
        return axios.post("/login", userData)
    },

    signOut: () => {
        return axios.get("/logout")
    }
};