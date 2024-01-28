import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Waitlist() {
  return (
    <section className="waitlistSection">
      <Container>
        <Row>
          <Col lg={"12"}>
            <div className="waitlistContent">
              <h1 className="title">Sign up for the waitlist. </h1>
              <p className="text">
                Be the first to get access to InJob.AI. Enjoy special discounts
                for joining the wailist.
              </p>

              <form action="#link" className="waitlistForm">
                <input
                  type="text"
                  placeholder="Enter Email address"
                  className="waitInput"
                  required
                />
                <button className="mainBtn" type="submit">
                  Join the Waitlist
                </button>
              </form>
            </div>

            <div className="waitlistImage">
              <img
                src="/img/waitList.png"
                alt="waitlist"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
