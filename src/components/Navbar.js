import { useState } from "react";
import "../style.css";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Navbar
      expand="lg"

      className={color ? "nav nav-bg" : "nav"}
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">
            <img src={logo} className="navbar-logo nav--icon" alt="logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/rules">Rules</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
