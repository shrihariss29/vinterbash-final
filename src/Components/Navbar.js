import React, { useState } from 'react';
import { Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
        <Container>
         
            <Navbar.Brand href="/" className="custom-brand">
              <div>
                <img src={require('../assets/vinterlogo.jpg')} alt='Osa logo' className="brand-logo" />
              </div>
            </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto custom-toggle" onClick={handleToggle}>
            <span className='toggleletters'>{isToggled ? 'X Close' : ' Menu'}</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link className="navele" id="navele1" href="/">HOME</Nav.Link>
              <Nav.Link className="navele" id="navele1" href="/events">EVENTS</Nav.Link>
              <Nav.Link className="navele" id="navele4" href="/Contact">CONTACT</Nav.Link>
              <Nav.Link className="navele" id="navele4" href="/Schedule">SCHEDULE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navb;
