import React, {Component} from 'react';
import Container from 'reactstrap';

class Masthead extends Component {
  render(){
    return(
      <Container>
        <div className='masthead'>
          <div className='masthead-container'>
            <figure className='masthead-figure' role='presentation'>
              <picture className='masthead-picture'></picture>
            </figure>
          </div>
        </div>
      </Container>
    )
  }
}
