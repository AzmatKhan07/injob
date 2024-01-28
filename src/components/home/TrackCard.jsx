import React from "react";
import { Col } from "react-bootstrap";

export default function TrackCard(props) {
  return (
    <Col lg={"4"}>
      <div className="tCard" style={{ backgroundColor: props.bgColor }}>
        <div className="cardHeading">
          <img src={props.icon} alt="trackImage" className="img-fluid" />
          <h5 className="cTitle">{props.title}</h5>
        </div>
        <div className="cardBody">
          <p className="text">{props.text}</p>
        </div>
      </div>
    </Col>
  );
}
