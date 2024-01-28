import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footerSection">
      <Container>
        <Row className="footerRow">
          <Col lg={"12"}>
            <div className="footerContainer">
              <div className="footerContent">
                <img
                  src="/img/fLogo.png"
                  alt=""
                  className="footerBrand img-fluid"
                />
                <p className="text">
                  delivers an unparalleled customer service through dedicated
                  Nulla facilisi. Vestibulum non est nisl. Donec eget sodales
                  nisl. Donec ut velit erat.
                </p>
              </div>
              <div className="footerLinks">
                <h5 className="linkHeading">Explore</h5>
                <ul>
                  <li>
                    <a href="#" className="link">
                      Feature
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      How to Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Review
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footerLinks">
                <h5 className="linkHeading">Lagal</h5>
                <ul>
                  <li>
                    <a href="#" className="link">
                      Legal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Help center
                    </a>
                  </li>
                </ul>
              </div>
              <div className="socialMedia">
                <h5 className="linkHeading">Explore</h5>
                <div className="socailIcons">
                  <a href="#" className="socialLink">
                    <img src="/img/yt.png" alt="icon" className="img-fluid" />
                  </a>
                  <a href="#" className="socialLink">
                    <img src="/img/fb.png" alt="icon" className="img-fluid" />
                  </a>
                  <a href="#" className="socialLink">
                    <img
                      src="/img/insta.png"
                      alt="icon"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <div className="col-12">
            <div className="copyright">
              <p className="copy">© 2022 All rights reserved.</p>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}
