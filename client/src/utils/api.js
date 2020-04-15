import axios from "axios";
const API_KEY = "c349b6bbe3fc4fac8c2a90d68e51410a";

export default {
    // Video Games!
    createUser: function(userData) {
        console.log(userData);
        return axios.post("/register", userData);
    },

    getGameInfo: function (name) {
        return axios({
            url:
                "https:api-v3.igdb.com/games/?search=" +
                name +
                "&fields=name,release_dates,genres.name,rating,cover.height,cover.width,cover.game,cover.image_id,platforms.name,platforms.abbreviation,release_dates.game,release_dates.date,release_dates.platform,screenshots.game,screenshots.image_id,screenshots.height,screenshots.width",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY,
            },
            // Calling using a data key is not working
            // data:
            // “fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;“,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    
};
