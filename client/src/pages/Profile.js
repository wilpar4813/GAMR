import React, { Component } from 'react';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import api from '../utils/api';
import {Redirect} from 'react-router-dom';
import UserProfile from '../components/UserProfile';

class Profile extends Component {
    state ={
        username: '',
        password: '',
        Redirect: null,
        searches: []
    }

    componentDidMount() {
     api.savedGames().then(res => {
         console.log(res.data)
         this.setState({searches : res.data})

     })   
    }

    handleOnChange = (event) => {
        const {name , value} = event.target

        this.setState({
            [name] : value
        })
        
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        
        console.log(userData, 'USER DATA');

        api.getUser().then(response => {
            this.setState({username : response.data.username, Redirect : true })
        }) 
    }

    handleSaveBtn = (gameData) => {
        gameData = {
            covers: [gameData.cover.url],
            screenshots: [gameData.screenshots],
            platforms: [gameData.platforms],
            releaseDates: [gameData.release_dates],
            name: gameData.name,
            
            title: gameData.volumeInfo.title,
            authors: gameData.volumeInfo.authors.join(" "),
            description: gameData.volumeInfo.description,
            image:
                gameData.volumeInfo.imageLinks !== undefined
                    ? gameData.volumeInfo.imageLinks.thumbnail
                    : "/assets/images/no-img.png",
            link: gameData.volumeInfo.previewLink,
        };
        API.saveBook(gameData).then((res) => {
            console.log(res);
        });
    };



    render() {
        if(this.state.Redirect) {
            return <Redirect to={"/login"} />
        }

        return (
            <>
            <UserProfile searches={this.state.searches} />
            <Footer />
            </>
        );
    }
   
}

export default Profile;