import React from 'react';
import MainNav from '../components/MainNav';
import GameDetails from '../components/GameDetails';
import Screenshots from '../components/Screenshots';
import Footer from '../components/Footer';

const Game = (props) => {
  return (
    <>
    <MainNav />
    <GameDetails />
    <Footer />
    </>
  )
}

export default Game;
