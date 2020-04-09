import React, {Component} from 'react';

const desktop = '/images/masthead-desktop.jpg';
const mobile = '/images/masthead-mobile.jpg';

class Masthead extends Component {


  state = {

    currentSrc: ''

  };

  onLoad = (event) => {
    this.setState({
      currentSrc: event.target.currentSrc
    });
  }


  render() {
    return (
        <div className='masthead'>
          <div className='masthead-container'>
            <figure className='masthead-figure' role='presentation'>
              <picture className='masthead-picture img-fluid'>
                <source media="(min-width: 992px)" srcset={desktop} />
                <source srcset={mobile} />
                <img className='masthead-fallback' src={desktop} />
              </picture>
            </figure>
          </div>
        </div>
    )
  }

}

export default Masthead;
