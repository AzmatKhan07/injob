import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="heroSection">
      <Container>
        <Row className="heroRow">
          <Col lg={"12"}>
            <div className="heroContent">
              <img
                src="/img/heroArrow.png"
                alt="heroArrow"
                className="img-fluid heroArrow"
              />
              <h1 className="title">
                <span> At InJob: </span>
                We apply your <br />
                dream jobs for you
              </h1>
              <img
                src="/img/heroActionImage.png"
                alt="heroImage"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
