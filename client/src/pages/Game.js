import React, { Component } from 'react';
import MainNav from '../components/MainNav';
import GameDetails from '../components/GameDetails';
import Footer from '../components/Footer';
import api from '../utils/api';

class Game extends Component {

  state = {
    email : "",
    gameData: []
  }

  handleOnSubmit = (loggedIn) => {
      
    const userData = {
        email: this.state.email,
        password: this.state.password
    }
    console.log('USER DATA', userData);

     api.login(userData).then(response => {
         console.log(response.data);
         sessionStorage.setItem("email", response.data.email)
         this.setState({Redirect: true, email : response.data.email});
         if(loggedIn === false && response.data.email.length === 0) {
           sessionStorage.setItem("email", "")
         }
     })
 }

  componentDidMount() {
    this.getID();

    console.log("getID")
    api.getUser().then(response => {
      this.setState({ email : response.data.email })
     
    })

  }

  // const [gameID, setGameID] = useState('');
  // const [gameData, setGameData] = useState([]);
  // const [followGame, setFollowGame] = useState([]);

  // useEffect(() => {
  //   console.log("loading")
    
  // })

   getID(){
    const url = window.location.pathname;
    const urlArray= url.split('/');

    let id = urlArray[2];

    let idArray = id.split('%20').join(" ");
    this.getGame(idArray)
  }

    getGame(id){

      console.log("ID", id)
     api.gameIdSearch(id).then(res => {
     console.log(res.data[0], "....Game Data")
     this.setState({gameData : [res.data[0]]})
      
      console.log(res.data[0]);
     });
  }

   

  render () {
    return (
      <>
      {console.log(this.state.gameData, "Game Data here")}
      {/* <MainNav handleOnSubmit={this.handleOnSubmit} email={this.state.email}/> */}
      <GameDetails gameData={this.state.gameData} />
      <Footer />
      </>
    )
  }

}

export default Game;
