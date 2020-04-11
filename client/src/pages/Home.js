import React from "react";
import Masthead from '../components/Masthead';
import MainNav from '../components/MainNav';
import Gallery from '../components/Gallery';

function Home () {
    return (
      <>
      <MainNav />
        <Masthead />
        <Gallery />
        </>
    );
}

export default Home;
