import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Our Services</Nav.Link>
      <Nav.Link  as={HashLink} to="/home#experts">Doctors</Nav.Link>
      <Nav.Link  as={HashLink} to="/emergencyService">Emergency Service</Nav.Link>
      <Nav.Link  as={HashLink} to="/contact">Contact</Nav.Link>
      


      { user?.email ?
      <Button onClick={logOut} variant="light">Logout</Button>:
         <Nav.Link href="/login">Login</Nav.Link>
      }
      <Navbar.Text>
        Signed in as:   <a href="#login"> {
        user?.displayName} </a>
      </Navbar.Text>
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
  
</>
    );
};

export default Header;