import React from "react";
import {Container} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub  }from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <footer className='bg-danger py-3'>
      <Container>
        <p className="pull-right text-white">
          <FontAwesomeIcon className='fab' icon={faGithub} /> Built using React.js and MongoDB
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
