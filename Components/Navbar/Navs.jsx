import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Button from "../body/Button/Button";
import { Link, NavLink } from "react-router-dom";
//import Button from 'react-bootstrap/Button';
const Navs = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" navbar">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <div className="logo-container">
              <img
                src="/Images/Logo PNG.png "
                alt="VirtuBuild"
                className="d-inline-block align-top logo"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto nav">
              <Nav.Link as={Link} className="nav2" to="/home">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav2" to="/aboutus">
                ABOUT US
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav2" to="/services">
                SERVICES
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav2" to="/contactus">
                CONTACT US
              </Nav.Link>
            </Nav>
            <Nav>
              <Button />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
