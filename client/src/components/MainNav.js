import React, {Component, useState} from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, Input, Button} from 'reactstrap';
import {ReactSVG} from 'react-svg';
import Logo from '../svg/logo.svg';

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
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Form className='form-inline my-2 my-lg-0 mx-2'>
              <Input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
              <Button outline color='danger' className='my-2 my-sm-0'>Search</Button>
            </Form>
            <Button color='danger'>Log In</Button>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
