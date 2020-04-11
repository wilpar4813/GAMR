import React from "react";
import Masthead from '../components/Masthead';
import MainNav from '../components/MainNav';
import Gallery from '../components/Gallery';
import Popular from '../components/Popular';

function Home () {
    return (
      <>
      <MainNav />
        <Masthead />
        <Popular />
        <Gallery />
        </>
    );
}

export default Home;
