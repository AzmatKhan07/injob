import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Workcard from "./Workcard";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default function Work() {
  return (
    <section className="workSection">
      <div className="outerImage">
        <img src="/img/HeroImage.png" alt="heroImage" className="img-fluid" />

        <a href="#link" className="mainBtn">
          Join the Waitlist <ArrowForwardOutlinedIcon className="icon" />
        </a>
      </div>

      <Container>
        <Row>
          <Col lg={"12"}>
            <div className="sectionHeading">
              <h1 className="title">How It Works</h1>
              <p className="text">
                5 minute read about How InJob Searches and Applies to <br />
                Your Dream Jobs
              </p>
            </div>
          </Col>
        </Row>
        <Workcard
          image="/img/workImage.png"
          step="Step 01"
          title="InJob Learns about you and your dream job"
          start={0}
          end={2}
        />

        <Workcard
          className="wordCardTwo"
          image="/img/workImage2.png"
          step="Step 02"
          title="Now It's on AutoPilot! InJob Scrapes The Web"
          start={2}
          end={5}
        />
        <Workcard
          image="/img/workImage3.png"
          step="Step 03"
          title="Picks Your Dream Jobs during Netflix and Chill"
          start={5}
          end={9}
        />
      </Container>
    </section>
  );
}
