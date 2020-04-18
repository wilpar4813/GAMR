import React, {Component} from 'react';
import {Container} from 'reactstrap'

const desktop = '/images/masthead-desktop.jpg';
const mobile = '/images/masthead-mobile.jpg';

class Masthead extends Component {

  render() {
    return (
        <div className='masthead'>
          <div className='masthead-container'>
            <figure className='masthead-figure' role='presentation'>
              <picture className='masthead-picture img-fluid'>
                <source media="(min-width: 992px)" srcSet={desktop} />
                <source srcSet={mobile} />
                <img className='masthead-fallback' src={desktop} />
              </picture>
            </figure>
            <Container>
            <div className='masthead-overlay'>
              <div className='masthead-card'>
                <h1 className='masthead-card-block masthead-title'>GAMR</h1>
                <div className='masthead-card-block'>
                  <p>A gaming news aggregator</p>
                </div>
              </div>
            </div>
            </Container>
          </div>
        </div>
    )
  }

}

export default Masthead;
