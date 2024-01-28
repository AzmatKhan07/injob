import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="headerSection"
      style={{ background: scrolled ? "#6b2377" : "transparent" }}
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/img/logo.svg" alt="log" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " className="m-auto">
            <Nav className="m-auto">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#link">Features</Nav.Link>
              <Nav.Link href="#link">how it works</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
              <Nav.Link href="#link">Reviews</Nav.Link>
            </Nav>

            <a href="#link" className="mainBtn">
              Join the Waitlist <ArrowForwardOutlinedIcon className="icon" />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
