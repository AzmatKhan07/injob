import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrackCard from "./TrackCard";

export default function Track() {
  return (
    <section className="trackSection">
      <Container>
        <Row>
          <Col lg={"12"}>
            <div className="sectionHeading">
              <h1 className="title">How do you keep track of the magic</h1>
              <p className="text">
                Nulla facilisi. Vestibulum non est nisl. Donec eget sodales
                nisl. <br />
                Donec ut velit erat.
              </p>
            </div>
          </Col>

          <TrackCard
            icon="/img/track1.png"
            title="Interactive Dashboard"
            text=" A dashboard that's like mission control for your job search, showing
            you all the jobs you've applied for and their current status."
            bgColor="#FCE4FF"
          />
          <TrackCard
            icon="/img/track2.png"
            title="Company Responses"
            text=" A dashboard that's like mission control for your job search, showing
            you all the jobs you've applied for and their current status."
          />
          <TrackCard
            icon="/img/track3.png"
            title="Feedback Focus"
            text=" A dashboard that's like mission control for your job search, showing
            you all the jobs you've applied for and their current status."
          />
        </Row>
      </Container>
    </section>
  );
}
