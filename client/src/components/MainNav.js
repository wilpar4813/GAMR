import React, { useState, useEffect, useRef} from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Input, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactSVG } from 'react-svg';
import Logo from '../svg/logo.svg';
import Profile from '../pages/Profile';

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [ query, setQuery ] = useState('');
  const [ game, setGame ] = useState([]);
  const focusSearch = useRef(null);

  return (
    <div>
      <Navbar color="light" className='bg-faded' light expand="md">
      <Container>
        <NavbarBrand href="/">
          <ReactSVG src={Logo}  beforeInjection={svg => {svg.setAttribute('style', 'width: 100%')}} />
        </NavbarBrand>
        <Nav className='mr-auto' navbar>
          <NavItem className='d-sm-none d-md-block'>
            <NavLink  href='https://github.com/gordyclint/gamr-database-react-app' ><FontAwesomeIcon className='fas' icon={faGithub} /></NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className='d-sm-inline-block' href="/profile"><FontAwesomeIcon className='fab' icon={faUserCircle} /></NavLink> <NavLink className='d-sm-inline-block d-md-none'  href='https://github.com/gordyclint/gamr-database-react-app' ><FontAwesomeIcon className='fas' icon={faGithub} /></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Games
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  XBox One
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Playstation 4
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Nintendo Switch
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className='d-sm-inline-block' href="/search">Search</NavLink>
            </NavItem>
            {props.isLogin === true ? <Button className="btn btn-danger" onClick={()=> {props.handleOnSubmit(false)}}>Logout</Button> : <Button className="btn btn-danger" onClick={()=> {props.handleOnSubmit(true)}}>Login</Button>}
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
