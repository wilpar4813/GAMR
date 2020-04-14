import React from "react";
import Masthead from '../components/Masthead';
import MainNav from '../components/MainNav';
import Gallery from '../components/Gallery';
import Popular from '../components/Popular';
import Upcoming from '../components/Upcoming';

function Home () {
    return (
      <>
      <MainNav />
        <Masthead />
        <Popular />
        <Gallery />
        <Upcoming />
        </>
    );
}

export default Home;
