import React, { useState} from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, Input, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub }from '@fortawesome/free-brands-svg-icons'
import {ReactSVG} from 'react-svg';
import Logo from '../svg/logo.svg';
import Profile from '../pages/Profile';

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" className='bg-faded' light expand="md">
      <Container>
        <NavbarBrand href="/">
          <ReactSVG src={Logo}  beforeInjection={svg => {svg.setAttribute('style', 'width: 100%')}} />
        </NavbarBrand>
        <Button  href='/Profile' color='dark'>Profile</Button>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/gordyclint/gamr-database-react-app"><FontAwesomeIcon className='fab' icon={faGithub} /></NavLink>
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
            <Form className='form-inline my-2 my-lg-0 mx-2'>
              <Input onChange={props.handleOnChange} className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
              <Button outline color='danger' type='submit' className='my-2 my-sm-0'>Search</Button>
            </Form>
            <Button onClick={props.handleOnSubmit}  href='/login' color='danger'>Log Out</Button>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
