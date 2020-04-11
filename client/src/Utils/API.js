import axios from "axios";
const API_KEY = "c349b6bbe3fc4fac8c2a90d68e51410a";

export default {
    // Gets game achievements from the IGDB API
    // Achievement data for specific games for specific platforms (currently limited to acheivements from steam, playstation and Xbox)
    getAchievements: function () {
        return axios({
            url: "https://api-v3.igdb.com/achievements",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields achievement_icon,category,created_at,description,external_id,game,language,locked_achievement_icon,name,owners,owners_percentage,rank,slug,tags,updated_at;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // An icon for a specific achievement
    getAchievementsIcon: function () {
        return axios({
            url: "https://api-v3.igdb.com/achievement_icons",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields alpha_channel,animated,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Age Rating according to various rating organisations
    getAgeRating: function () {
        return axios({
            url: "https://api-v3.igdb.com/age_ratings",
            method: "GET"
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields category,content_descriptions,rating,rating_cover_url,synopsis;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // The organisation behind a specific rating
    getAgeRatingContentDescriptions: function () {
        return axios({
            url: "https://api-v3.igdb.com/age_rating_content_descriptions",
            method: "GET"
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields category,description;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Alternative and international game titles
    getAlternativeNames: function () {
        return axios({
            url: "https://api-v3.igdb.com/alternative_names",
            method: "GET"
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields comment,game,name;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Official artworks (resolution and aspect ratio may vary)
    getArtWorks: function () {
        return axios({
            url: "https://api-v3.igdb.com/artworks",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields alpha_channel,animated,game,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Video game characters
    getCharacters: function () {
        return axios({
            url: "https://api-v3.igdb.com/characters",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields akas,country_name,created_at,description,games,gender,mug_shot,name,people,slug,species,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Images depicting game characters
    getCharacterMugShots: function () {
        return axios({
            url: "https://api-v3.igdb.com/character_mug_shots",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields alpha_channel,animated,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Collection, AKA Series
    getCollections: function () {
        return axios({
            url: "https://api-v3.igdb.com/collections",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields created_at,games,name,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Video game companies. Both publishers & developers
    getCompanies: function () {
        return axios({
            url: "https://api-v3.igdb.com/companies",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields change_date,change_date_category,changed_company_id,country,created_at,description,developed,logo,name,parent,published,slug,start_date,start_date_category,updated_at,url,websites;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // The logos of developers and publishers
    getCompanyLogos: function () {
        return axios({
            url: "https://api-v3.igdb.com/company_logos",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields alpha_channel,animated,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Company Website
    getCompanyWebsites: function () {
        return axios({
            url: "https://api-v3.igdb.com/company_websites",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields category,trusted,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // The cover art of games
    getCovers: function () {
        return axios({
            url: "https://api-v3.igdb.com/covers",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields alpha_channel,animated,game,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Game IDs on other services
    getExternalGames: function () {
        return axios({
            url: "https://api-v3.igdb.com/external_games",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields category,created_at,game,name,uid,updated_at,url,year;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Feed items are a social feed of status updates, media and news articles.
    getFeeds: function () {
        return axios({
            url: "https://api-v3.igdb.com/feeds",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields category,content,created_at,feed_likes_count,feed_video,games,meta,published_at,pulse,slug,title,uid,updated_at,url,user;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A list of video game franchises such as Star Wars.
    getFranchises: function () {
        return axios({
            url: "https://api-v3.igdb.com/franchises",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields created_at,games,name,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Video Games!
    getGames: function () {
        return axios({
            url: "https://api-v3.igdb.com/games",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    //Video game engines such as unreal engine.
    getGameEngines: function () {
        return axios({
            url: "https://api-v3.igdb.com/game_engines",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields companies,created_at,description,logo,name,platforms,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // The logos of game engines
    getEngineLogos: function () {
        return axios({
            url: "https://api-v3.igdb.com/game_engine_logos",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields alpha_channel,animated,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Single player, Multiplayer etc
    getGameModes: function () {
        return axios({
            url: "https://api-v3.igdb.com/game_modes",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields created_at,name,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Details about game editions and versions.
    getGameVersions: function () {
        return axios({
            url: "https://api-v3.igdb.com/game_versions",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields created_at,features,game,games,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Features and descriptions of what makes each version/edition different from the main game
    getVersionFeatures: function () {
        return axios({
            url: "https://api-v3.igdb.com/game_version_features",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields category,description,position,title,values;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // The bool/text value of the feature
    getGameVersionFeatureValues: function () {
        return axios({
            url: "https://api-v3.igdb.com/game_version_feature_values",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields game,game_feature,included_feature,note;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A video associated with a game
    getGameVideos: function () {
        return axios({
            url: "https://api-v3.igdb.com/game_videos",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields game,name,video_id;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Genres of video game
    getGenres: function () {
        return axios({
            url: "https://api-v3.igdb.com/genres",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields created_at,name,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Companies involved in development
    getInvolvedCompanys: function () {
        return axios({
            url: "https://api-v3.igdb.com/involved_companies",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields company,created_at,developer,game,porting,publisher,supporting,updated_at;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Keywords are words or phrases that get tagged to a game such as “world war 2” or “steampunk”.
    getKeywords: function () {
        return axios({
            url: "https://api-v3.igdb.com/keywords",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields created_at,name,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Data about the supported multiplayer types
    getMultiPlayerModes: function () {
        return axios({
            url: "https://api-v3.igdb.com/multiplayer_modes",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields campaigncoop,dropin,game,lancoop,offlinecoop,offlinecoopmax,offlinemax,onlinecoop,onlinecoopmax,onlinemax,platform,splitscreen,splitscreenonline;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Our multipurpose page system is currently used for youtubers and media organisations.
    getPages: function () {
        return axios({
            url: "https://api-v3.igdb.com/pages",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields background,battlenet,category,color,company,country,created_at,description,feed,game,name,origin,page_follows_count,page_logo,slug,sub_category,updated_at,uplay,url,user,websites;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Background of a page
    getPageBackgrounds: function () {
        return axios({
            url: "https://api-v3.igdb.com/page_backgrounds",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields alpha_channel,animated,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Logo for a page
    getPageLogos: function () {
        return axios({
            url: "https://api-v3.igdb.com/page_logos",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields alpha_channel,animated,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Page Website
    getPageWebsites: function () {
        return axios({
            url: "https://api-v3.igdb.com/page_websites",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields category,trusted,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // The hardware used to run the game or game delivery network
    getPlatforms: function () {
        return axios({
            url: "https://api-v3.igdb.com/platforms",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields abbreviation,alternative_name,category,created_at,generation,name,platform_logo,product_family,slug,summary,updated_at,url,versions,websites;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Logo for a platform
    getPlatformLogos: function () {
        return axios({
            url: "https://api-v3.igdb.com/platform_logos",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields alpha_channel,animated,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    //
    getPlatformVersions: function () {
        return axios({
            url: "https://api-v3.igdb.com/platform_versions",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields companies,connectivity,cpu,graphics,main_manufacturer,media,memory,name,online,os,output,platform_logo,platform_version_release_dates,resolutions,slug,sound,storage,summary,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A platform developer
    getPlatformVersionCompanies: function () {
        return axios({
            url: "https://api-v3.igdb.com/platform_version_companies",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields comment,company,developer,manufacturer;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A handy endpoint that extends platform release dates. Used to dig deeper into release dates, platforms and versions.
    getPlatformVersionReleaseDates: function () {
        return axios({
            url: "https://api-v3.igdb.com/platform_version_release_dates",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields category,created_at,date,human,m,platform_version,region,updated_at,y;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // The main website for the platform
    getPlatformWebsites: function () {
        return axios({
            url: "https://api-v3.igdb.com/platform_websites",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields category,trusted,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Player perspectives describe the view/perspective of the player in a video game.
    getPlayerPerspectives: function () {
        return axios({
            url: "https://api-v3.igdb.com/player_perspectives",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields created_at,name,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A collection of closely related platforms
    getProductFamilies: function () {
        return axios({
            url: "https://api-v3.igdb.com/product_families",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields name,slug;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A single news article.
    getPulses: function () {
        return axios({
            url: "https://api-v3.igdb.com/pulses",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields author,category,created_at,ignored,image,published_at,pulse_image,pulse_source,summary,tags,title,uid,updated_at,videos,website;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Pulse groups are a combined array of news articles that are about a specific game and were published around the same time period.
    getPulseGroups: function () {
        return axios({
            url: "https://api-v3.igdb.com/pulse_groups",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields created_at,game,name,published_at,pulses,tags,updated_at;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A news article source such as IGN.
    getPulseSources: function () {
        return axios({
            url: "https://api-v3.igdb.com/pulse_sources",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields game,name,page;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A URL linking to the article
    getPulseUrls: function () {
        return axios({
            url: "https://api-v3.igdb.com/pulse_urls",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields trusted,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A handy endpoint that extends game release dates. Used to dig deeper into release dates, platforms and versions.
    getReleaseDates: function () {
        return axios({
            url: "https://api-v3.igdb.com/release_dates",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields category,created_at,date,game,human,m,platform,region,updated_at,y;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Screenshots of games
    getScreenshots: function () {
        return axios({
            url: "https://api-v3.igdb.com/screenshots",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields alpha_channel,animated,game,height,image_id,url,width;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Search!
    getSearch: function () {
        return axios({
            url: "https://api-v3.igdb.com/search",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields alternative_name,character,collection,company,description,game,name,person,platform,popularity,published_at,test_dummy,theme;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Video game themes
    getThemes: function () {
        return axios({
            url: "https://api-v3.igdb.com/themes",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields created_at,name,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Average completion times for games
    getTimeToBeats: function () {
        return axios({
            url: "https://api-v3.igdb.com/time_to_beats",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields completely,game,hastly,normally;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // Job titles in the games industry
    getTitles: function () {
        return axios({
            url: "https://api-v3.igdb.com/titles",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data:
                "fields created_at,description,games,name,slug,updated_at,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
    // A website url, usually associated with a game
    getWebsites: function () {
        return axios({
            url: "https://api-v3.igdb.com/websites",
            method: "GET",
            headers: {
                Accept: "application/json",
                "user-key": API_KEY
            },
            data: "fields category,game,trusted,url;"
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
