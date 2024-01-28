import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Finger() {
  return (
    <section className="fignerSection">
      <Container>
        <Row className="fingerRow">
          <Col lg={"12"}>
            <div className="sectionHeading">
              <h1 className="title">Job at your fingertips</h1>
              <p className="text">
                Nulla facilisi. Vestibulum non est nisl. Donec eget sodales
                nisl. <br /> Donec ut velit erat.
              </p>
            </div>
          </Col>

          <Col lg={"12"}>
            <div className="videoThumbnail">
              <img
                src="/img/fingerImage.png"
                alt="fingerImage"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
